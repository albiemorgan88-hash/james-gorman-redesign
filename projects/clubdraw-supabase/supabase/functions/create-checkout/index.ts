// Edge Function: Create Stripe Checkout Session for number selection
// POST { clubId, numbers: [3,14,22,38,41] }
import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import Stripe from "https://esm.sh/stripe@14?target=deno";

const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY")!, { apiVersion: "2023-10-16" });
const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    // Auth
    const authHeader = req.headers.get("Authorization")!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);
    const userClient = createClient(supabaseUrl, Deno.env.get("SUPABASE_ANON_KEY")!, {
      global: { headers: { Authorization: authHeader } },
    });
    const { data: { user }, error: authError } = await userClient.auth.getUser();
    if (authError || !user) return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401, headers: corsHeaders });

    const { clubId, numbers } = await req.json();

    // Validate
    const { data: club } = await supabase.from("clubs").select("*").eq("id", clubId).single();
    if (!club) return new Response(JSON.stringify({ error: "Club not found" }), { status: 404, headers: corsHeaders });
    if (!club.stripe_account_id || !club.stripe_onboarding_complete) {
      return new Response(JSON.stringify({ error: "Club payments not configured" }), { status: 400, headers: corsHeaders });
    }

    if (!Array.isArray(numbers) || numbers.length !== club.numbers_per_entry) {
      return new Response(JSON.stringify({ error: `Must select exactly ${club.numbers_per_entry} numbers` }), { status: 400, headers: corsHeaders });
    }
    if (numbers.some((n: number) => n < 1 || n > club.numbers_range_max || !Number.isInteger(n))) {
      return new Response(JSON.stringify({ error: `Numbers must be 1-${club.numbers_range_max}` }), { status: 400, headers: corsHeaders });
    }
    if (new Set(numbers).size !== numbers.length) {
      return new Response(JSON.stringify({ error: "Duplicate numbers" }), { status: 400, headers: corsHeaders });
    }

    // Get or create Stripe customer
    const { data: profile } = await supabase.from("profiles").select("*").eq("id", user.id).single();
    let customerId = profile?.stripe_customer_id;
    if (!customerId) {
      const customer = await stripe.customers.create({
        email: user.email,
        name: profile?.full_name,
        metadata: { supabase_id: user.id },
      });
      customerId = customer.id;
      await supabase.from("profiles").update({ stripe_customer_id: customerId }).eq("id", user.id);
    }

    // Weekly amount in pence
    const amount = numbers.length * club.price_per_number;
    const platformFee = Math.round((amount * club.platform_fee_pct) / 100);

    // Create Stripe Checkout for recurring subscription
    const session = await stripe.checkout.sessions.create({
      customer: customerId,
      mode: "subscription",
      line_items: [{
        price_data: {
          currency: "gbp",
          unit_amount: amount,
          recurring: { interval: "week" },
          product_data: {
            name: `${club.name} Weekly Draw`,
            description: `Numbers: ${numbers.sort((a: number, b: number) => a - b).join(", ")}`,
          },
        },
        quantity: 1,
      }],
      subscription_data: {
        application_fee_percent: club.platform_fee_pct,
        metadata: {
          club_id: clubId,
          profile_id: user.id,
          numbers: JSON.stringify(numbers),
        },
      },
      success_url: `${req.headers.get("origin")}/${club.slug}/dashboard?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.get("origin")}/${club.slug}/numbers`,
      metadata: {
        club_id: clubId,
        profile_id: user.id,
        numbers: JSON.stringify(numbers),
      },
    }, {
      stripeAccount: club.stripe_account_id,
    });

    // Save number selections (pending until payment confirmed via webhook)
    await supabase.from("number_selections").upsert({
      club_id: clubId,
      profile_id: user.id,
      numbers: numbers.sort((a: number, b: number) => a - b),
      status: "active",
    }, { onConflict: "club_id,profile_id" });

    return new Response(JSON.stringify({ url: session.url }), { headers: { ...corsHeaders, "Content-Type": "application/json" } });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: err.message }), { status: 500, headers: corsHeaders });
  }
});
