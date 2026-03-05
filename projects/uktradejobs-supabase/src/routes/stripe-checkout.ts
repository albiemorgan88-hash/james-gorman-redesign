// POST /api/employer/subscribe — Create Stripe checkout session
import { NextRequest, NextResponse } from 'next/server';
import { createServerSupabase } from '@/lib/supabase';
import Stripe from 'stripe';
import { TIER_CONFIG, EmployerTier } from '@/types/database';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: '2024-12-18.acacia' });

// Map tiers to Stripe price IDs (set these in env)
const PRICE_IDS: Record<string, string> = {
  basic: process.env.STRIPE_PRICE_BASIC!,   // £29/mo
  premium: process.env.STRIPE_PRICE_PREMIUM!, // £79/mo
};

export async function createCheckout(req: NextRequest) {
  const supabase = createServerSupabase();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { tier } = await req.json() as { tier: EmployerTier };
  if (!PRICE_IDS[tier]) return NextResponse.json({ error: 'Invalid tier' }, { status: 400 });

  const { data: employer } = await supabase
    .from('employers')
    .select('id, stripe_customer_id, email')
    .eq('user_id', user.id)
    .single();

  if (!employer) return NextResponse.json({ error: 'No employer profile' }, { status: 403 });

  // Get or create Stripe customer
  let customerId = employer.stripe_customer_id;
  if (!customerId) {
    const customer = await stripe.customers.create({ email: employer.email, metadata: { employer_id: employer.id } });
    customerId = customer.id;
    await supabase.from('employers').update({ stripe_customer_id: customerId }).eq('id', employer.id);
  }

  const session = await stripe.checkout.sessions.create({
    customer: customerId,
    mode: 'subscription',
    line_items: [{ price: PRICE_IDS[tier], quantity: 1 }],
    metadata: { employer_id: employer.id, tier },
    success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/employer/dashboard?upgraded=true`,
    cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/employer/pricing`,
  });

  return NextResponse.json({ url: session.url });
}
