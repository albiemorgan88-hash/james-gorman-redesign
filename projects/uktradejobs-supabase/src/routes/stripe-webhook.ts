// POST /api/webhooks/stripe — Handle Stripe subscription events
import { NextRequest, NextResponse } from 'next/server';
import { createAdminSupabase } from '@/lib/supabase';
import Stripe from 'stripe';
import { TIER_CONFIG } from '@/types/database';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: '2024-12-18.acacia' });

export async function handleStripeWebhook(req: NextRequest) {
  const body = await req.text();
  const sig = req.headers.get('stripe-signature')!;

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET!);
  } catch {
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
  }

  const admin = createAdminSupabase();

  switch (event.type) {
    case 'checkout.session.completed': {
      const session = event.data.object as Stripe.Checkout.Session;
      const employer_id = session.metadata?.employer_id;
      const tier = session.metadata?.tier as keyof typeof TIER_CONFIG;
      if (!employer_id || !tier) break;

      const config = TIER_CONFIG[tier];

      await admin.from('employer_subscriptions').update({ status: 'cancelled' })
        .eq('employer_id', employer_id).eq('status', 'active');

      await admin.from('employer_subscriptions').insert({
        employer_id,
        tier,
        stripe_subscription_id: session.subscription as string,
        status: 'active',
        job_post_limit: config.job_limit,
        featured_posts_included: config.featured,
        current_period_start: new Date().toISOString(),
        current_period_end: new Date(Date.now() + 30 * 86400000).toISOString(),
      });

      await admin.from('employers').update({ tier }).eq('id', employer_id);
      break;
    }

    case 'customer.subscription.deleted': {
      const sub = event.data.object as Stripe.Subscription;
      await admin.from('employer_subscriptions')
        .update({ status: 'cancelled' })
        .eq('stripe_subscription_id', sub.id);

      // Find employer and reset to free
      const { data: empSub } = await admin.from('employer_subscriptions')
        .select('employer_id')
        .eq('stripe_subscription_id', sub.id)
        .single();

      if (empSub) {
        await admin.from('employers').update({ tier: 'free' }).eq('id', empSub.employer_id);
        await admin.from('employer_subscriptions').insert({
          employer_id: empSub.employer_id,
          tier: 'free',
          status: 'active',
          job_post_limit: 1,
          featured_posts_included: 0,
        });
      }
      break;
    }

    case 'invoice.payment_failed': {
      const invoice = event.data.object as Stripe.Invoice;
      if (invoice.subscription) {
        await admin.from('employer_subscriptions')
          .update({ status: 'past_due' })
          .eq('stripe_subscription_id', invoice.subscription as string);
      }
      break;
    }
  }

  return NextResponse.json({ received: true });
}
