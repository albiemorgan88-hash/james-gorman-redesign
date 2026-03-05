// Stripe helpers for ClubDraw platform
import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2023-10-16",
});

// Create Stripe Connect onboarding link for a club
export async function createConnectOnboardingLink(
  accountId: string,
  clubSlug: string,
  origin: string
): Promise<string> {
  const link = await stripe.accountLinks.create({
    account: accountId,
    refresh_url: `${origin}/onboard/${clubSlug}?refresh=true`,
    return_url: `${origin}/${clubSlug}/admin`,
    type: "account_onboarding",
  });
  return link.url;
}

// Create Express Connect account for a club
export async function createConnectAccount(clubSlug: string): Promise<Stripe.Account> {
  return stripe.accounts.create({
    type: "express",
    country: "GB",
    capabilities: {
      card_payments: { requested: true },
      transfers: { requested: true },
      bacs_debit_payments: { requested: true },
    },
    business_type: "non_profit",
    metadata: { club_slug: clubSlug },
  });
}

// Get Connect account dashboard link (for club admins)
export async function getConnectDashboardLink(accountId: string): Promise<string> {
  const link = await stripe.accounts.createLoginLink(accountId);
  return link.url;
}

// Calculate fee split for a payment amount (in pence)
export function calculateFeeSplit(amount: number, platformFeePct = 10, prizePct = 60) {
  const platformFee = Math.round((amount * platformFeePct) / 100);
  const prizePool = Math.round((amount * prizePct) / 100);
  const clubShare = amount - prizePool - platformFee;
  return { platformFee, prizePool, clubShare };
}
