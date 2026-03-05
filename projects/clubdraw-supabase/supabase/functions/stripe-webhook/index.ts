// Edge Function: Stripe Webhook Handler
// Handles: checkout.session.completed, invoice.paid, invoice.payment_failed
import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import Stripe from "https://esm.sh/stripe@14?target=deno";

const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY")!, { apiVersion: "2023-10-16" });
const endpointSecret = Deno.env.get("STRIPE_WEBHOOK_SECRET")!;
const supabase = createClient(
  Deno.env.get("SUPABASE_URL")!,
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
);

serve(async (req) => {
  const signature = req.headers.get("stripe-signature")!;
  const body = await req.text();

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(body, signature, endpointSecret);
  } catch (err) {
    console.error("Webhook signature verification failed:", err.message);
    return new Response(JSON.stringify({ error: "Invalid signature" }), { status: 400 });
  }

  console.log(`Processing event: ${event.type}`);

  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object as Stripe.Checkout.Session;
      const { club_id, profile_id, numbers } = session.metadata || {};
      if (!club_id || !profile_id) break;

      // Update number selection with subscription ID
      await supabase.from("number_selections").update({
        stripe_subscription_id: session.subscription as string,
        status: "active",
      }).eq("club_id", club_id).eq("profile_id", profile_id);

      // Ensure club membership exists
      await supabase.from("club_memberships").upsert({
        club_id,
        profile_id,
        role: "member",
      }, { onConflict: "club_id,profile_id" });

      // Audit
      await supabase.from("audit_log").insert({
        actor_id: profile_id,
        action: "subscription_created",
        entity_type: "number_selection",
        metadata: { club_id, numbers: JSON.parse(numbers || "[]"), subscription_id: session.subscription },
      });
      break;
    }

    case "invoice.paid": {
      const invoice = event.data.object as Stripe.Invoice;
      const sub = invoice.subscription_details?.metadata || {};
      const { club_id, profile_id } = sub;
      if (!club_id || !profile_id) break;

      // Record payment
      await supabase.from("payments").insert({
        profile_id,
        club_id,
        stripe_payment_intent_id: invoice.payment_intent as string,
        stripe_invoice_id: invoice.id,
        amount: invoice.amount_paid,
        platform_fee: Math.round((invoice.amount_paid * 10) / 100),
        status: "succeeded",
      });

      // Ensure selection is active
      await supabase.from("number_selections").update({ status: "active" })
        .eq("club_id", club_id).eq("profile_id", profile_id);
      break;
    }

    case "invoice.payment_failed": {
      const invoice = event.data.object as Stripe.Invoice;
      const sub = invoice.subscription_details?.metadata || {};
      const { club_id, profile_id } = sub;
      if (!club_id || !profile_id) break;

      // Record failed payment
      await supabase.from("payments").insert({
        profile_id,
        club_id,
        stripe_payment_intent_id: invoice.payment_intent as string,
        stripe_invoice_id: invoice.id,
        amount: invoice.amount_due,
        status: "failed",
      });

      // Pause selection — they won't be in next draw
      await supabase.from("number_selections").update({ status: "paused" })
        .eq("club_id", club_id).eq("profile_id", profile_id);
      break;
    }

    case "account.updated": {
      // Club's Stripe Connect account status changed
      const account = event.data.object as Stripe.Account;
      const onboardingComplete = account.charges_enabled && account.payouts_enabled;
      await supabase.from("clubs").update({
        stripe_onboarding_complete: onboardingComplete,
      }).eq("stripe_account_id", account.id);
      break;
    }
  }

  return new Response(JSON.stringify({ received: true }), { status: 200 });
});
