// Edge Function: Execute Weekly Draw
// Called by Vercel Cron or manually by admin
// POST { clubId } or POST {} (executes all due draws)
import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const supabase = createClient(
  Deno.env.get("SUPABASE_URL")!,
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
);

const CRON_SECRET = Deno.env.get("CRON_SECRET");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  // Auth: either cron secret or admin user
  const cronHeader = req.headers.get("x-cron-secret");
  const authHeader = req.headers.get("Authorization");
  let isAdmin = false;

  if (cronHeader === CRON_SECRET) {
    isAdmin = true;
  } else if (authHeader) {
    const userClient = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_ANON_KEY")!,
      { global: { headers: { Authorization: authHeader } } }
    );
    const { data: { user } } = await userClient.auth.getUser();
    if (user) {
      const { data: membership } = await supabase
        .from("club_memberships")
        .select("role")
        .eq("profile_id", user.id)
        .in("role", ["admin", "super_admin"])
        .limit(1)
        .single();
      isAdmin = !!membership;
    }
  }

  if (!isAdmin) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401, headers: corsHeaders });
  }

  try {
    const body = await req.json().catch(() => ({}));
    const results: any[] = [];

    // Find draws that are due
    let query = supabase
      .from("draws")
      .select("*")
      .in("status", ["scheduled", "open"])
      .lte("scheduled_at", new Date().toISOString());

    if (body.clubId) {
      query = query.eq("club_id", body.clubId);
    }

    const { data: draws, error } = await query;
    if (error) throw error;

    for (const draw of draws || []) {
      // Step 1: Close draw and snapshot entries
      const { data: entryCount, error: closeErr } = await supabase
        .rpc("close_draw_and_snapshot", { p_draw_id: draw.id });
      if (closeErr) {
        results.push({ draw_id: draw.id, error: closeErr.message });
        continue;
      }

      // Step 2: Execute draw (pick numbers, find winners)
      const { data: result, error: execErr } = await supabase
        .rpc("execute_draw", { p_draw_id: draw.id });
      if (execErr) {
        results.push({ draw_id: draw.id, error: execErr.message });
        continue;
      }

      results.push(result);

      // Step 3: Schedule next draw if not already created by rollover
      const nextDrawNumber = draw.draw_number + 1;
      const { data: existing } = await supabase
        .from("draws")
        .select("id")
        .eq("club_id", draw.club_id)
        .eq("draw_number", nextDrawNumber)
        .single();

      if (!existing) {
        const nextDate = new Date(draw.scheduled_at);
        nextDate.setDate(nextDate.getDate() + 7);

        // Pre-generate seed hash for next draw (provably fair)
        const { data: seedData } = await supabase.rpc("generate_draw_seed");

        await supabase.from("draws").insert({
          club_id: draw.club_id,
          draw_number: nextDrawNumber,
          status: "scheduled",
          scheduled_at: nextDate.toISOString(),
          seed: seedData?.seed,
          seed_hash: seedData?.seed_hash,
        });
      }
    }

    return new Response(JSON.stringify({ executed: results.length, results }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: err.message }), { status: 500, headers: corsHeaders });
  }
});
