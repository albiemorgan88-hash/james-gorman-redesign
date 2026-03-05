// Edge Function: Onboard a new club (create Stripe Connect Express account)
// POST { name, slug, sport, primaryColour, secondaryColour, councilRegNumber }
import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import Stripe from "https://esm.sh/stripe@14?target=deno";

const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY")!, { apiVersion: "2023-10-16" });
const supabase = createClient(
  Deno.env.get("SUPABASE_URL")!,
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
);

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    // Auth — must be logged in
    const authHeader = req.headers.get("Authorization")!;
    const userClient = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_ANON_KEY")!,
      { global: { headers: { Authorization: authHeader } } }
    );
    const { data: { user }, error: authError } = await userClient.auth.getUser();
    if (authError || !user) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401, headers: corsHeaders });
    }

    const body = await req.json();
    const { name, slug, sport, primaryColour, secondaryColour, councilRegNumber, groundName, groundAddress } = body;

    if (!name || !slug) {
      return new Response(JSON.stringify({ error: "name and slug required" }), { status: 400, headers: corsHeaders });
    }

    // Check slug uniqueness
    const { data: existing } = await supabase.from("clubs").select("id").eq("slug", slug).single();
    if (existing) {
      return new Response(JSON.stringify({ error: "Slug already taken" }), { status: 409, headers: corsHeaders });
    }

    // Create Stripe Connect Express account for the club
    const account = await stripe.accounts.create({
      type: "express",
      country: "GB",
      capabilities: {
        card_payments: { requested: true },
        transfers: { requested: true },
        bacs_debit_payments: { requested: true },
      },
      business_type: "non_profit",
      metadata: { club_slug: slug },
    });

    // Create club record
    const { data: club, error: clubErr } = await supabase.from("clubs").insert({
      name,
      slug,
      sport: sport || "cricket",
      primary_colour: primaryColour || "#1a365d",
      secondary_colour: secondaryColour || "#ffffff",
      stripe_account_id: account.id,
      council_reg_number: councilRegNumber,
      ground_name: groundName,
      ground_address: groundAddress,
    }).select().single();
    if (clubErr) throw clubErr;

    // Make the creating user an admin
    await supabase.from("club_memberships").insert({
      club_id: club.id,
      profile_id: user.id,
      role: "admin",
    });

    // Generate Stripe onboarding link
    const accountLink = await stripe.accountLinks.create({
      account: account.id,
      refresh_url: `${req.headers.get("origin")}/onboard/${slug}?refresh=true`,
      return_url: `${req.headers.get("origin")}/${slug}/admin`,
      type: "account_onboarding",
    });

    // Create first draw
    const { data: seedData } = await supabase.rpc("generate_draw_seed");
    const nextFriday = getNextFriday();
    await supabase.from("draws").insert({
      club_id: club.id,
      draw_number: 1,
      status: "scheduled",
      scheduled_at: nextFriday.toISOString(),
      seed: seedData?.seed,
      seed_hash: seedData?.seed_hash,
    });

    // Audit
    await supabase.from("audit_log").insert({
      actor_id: user.id,
      action: "club_created",
      entity_type: "club",
      entity_id: club.id,
      metadata: { name, slug },
    });

    return new Response(JSON.stringify({
      club,
      stripeOnboardingUrl: accountLink.url,
    }), { headers: { ...corsHeaders, "Content-Type": "application/json" } });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: err.message }), { status: 500, headers: corsHeaders });
  }
});

function getNextFriday(): Date {
  const now = new Date();
  const day = now.getUTCDay();
  const daysUntilFriday = (5 - day + 7) % 7 || 7;
  const friday = new Date(now);
  friday.setUTCDate(now.getUTCDate() + daysUntilFriday);
  friday.setUTCHours(20, 0, 0, 0);
  return friday;
}
