// Auto-generate with: npx supabase gen types typescript --project-id <your-project-id> > src/types/database.ts
// This is the manual reference version

export type DrawStatus = "scheduled" | "open" | "closed" | "drawn" | "cancelled";
export type PaymentStatus = "pending" | "succeeded" | "failed" | "refunded";
export type MemberRole = "member" | "admin" | "super_admin";
export type EntryStatus = "active" | "paused" | "cancelled";
export type PayoutStatus = "pending" | "processing" | "paid" | "failed";

export interface Club {
  id: string;
  name: string;
  slug: string;
  sport: string;
  primary_colour: string;
  secondary_colour: string;
  logo_url: string | null;
  ground_name: string | null;
  ground_address: string | null;
  website: string | null;
  facebook_url: string | null;
  instagram_url: string | null;
  stripe_account_id: string | null;
  stripe_onboarding_complete: boolean;
  council_reg_number: string | null;
  council_name: string | null;
  draw_day: number;
  draw_time: string;
  numbers_range_max: number;
  numbers_per_entry: number;
  price_per_number: number;
  prize_pct: number;
  platform_fee_pct: number;
  active: boolean;
  created_at: string;
  updated_at: string;
}

export interface Profile {
  id: string;
  full_name: string;
  phone: string | null;
  email: string;
  age_verified: boolean;
  date_of_birth: string | null;
  stripe_customer_id: string | null;
  whatsapp_opted_in: boolean;
  created_at: string;
  updated_at: string;
}

export interface Draw {
  id: string;
  club_id: string;
  draw_number: number;
  status: DrawStatus;
  scheduled_at: string;
  drawn_at: string | null;
  seed_hash: string | null;
  seed: string | null;
  drawn_numbers: number[] | null;
  total_entries: number;
  pot_amount: number;
  prize_pool: number;
  platform_fee: number;
  club_share: number;
  rollover_amount: number;
  created_at: string;
}

export interface DrawEntry {
  id: string;
  draw_id: string;
  profile_id: string;
  club_id: string;
  numbers: number[];
  payment_id: string | null;
  matches: number;
  created_at: string;
}

export interface Prize {
  id: string;
  draw_id: string;
  profile_id: string;
  numbers_matched: number;
  prize_amount: number;
  payout_status: PayoutStatus;
  stripe_transfer_id: string | null;
  paid_at: string | null;
  created_at: string;
}

export interface Payment {
  id: string;
  profile_id: string;
  club_id: string;
  draw_id: string | null;
  stripe_payment_intent_id: string | null;
  stripe_invoice_id: string | null;
  amount: number;
  platform_fee: number;
  currency: string;
  status: PaymentStatus;
  metadata: Record<string, any>;
  created_at: string;
  updated_at: string;
}

export interface NumberSelection {
  id: string;
  club_id: string;
  profile_id: string;
  numbers: number[];
  status: EntryStatus;
  stripe_subscription_id: string | null;
  created_at: string;
  updated_at: string;
}
