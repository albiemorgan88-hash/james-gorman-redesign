// Auto-generate with: npx supabase gen types typescript --project-id <id> > src/types/database.ts
// This is the manual version for reference

export type EmployerTier = 'free' | 'basic' | 'premium';
export type JobStatus = 'draft' | 'active' | 'paused' | 'expired' | 'filled';
export type ApplicationStatus = 'submitted' | 'viewed' | 'shortlisted' | 'rejected' | 'hired';
export type JobType = 'full_time' | 'part_time' | 'contract' | 'temporary' | 'apprenticeship';

export interface Employer {
  id: string;
  user_id: string;
  company_name: string;
  company_slug: string;
  logo_url: string | null;
  website: string | null;
  description: string | null;
  phone: string | null;
  email: string;
  address_line1: string | null;
  address_line2: string | null;
  city: string | null;
  county: string | null;
  postcode: string | null;
  is_verified: boolean;
  tier: EmployerTier;
  stripe_customer_id: string | null;
  created_at: string;
  updated_at: string;
}

export interface JobPosting {
  id: string;
  employer_id: string;
  title: string;
  slug: string;
  trade: string;
  job_type: JobType;
  description: string;
  requirements: string | null;
  salary_min: number | null;
  salary_max: number | null;
  salary_period: string;
  city: string;
  county: string | null;
  postcode: string | null;
  is_remote: boolean;
  is_featured: boolean;
  status: JobStatus;
  application_email: string | null;
  application_url: string | null;
  expires_at: string;
  views: number;
  applications_count: number;
  created_at: string;
  updated_at: string;
}

export interface Applicant {
  id: string;
  user_id: string | null;
  full_name: string;
  email: string;
  phone: string | null;
  city: string | null;
  county: string | null;
  postcode: string | null;
  cv_url: string | null;
  trades: string[];
  years_experience: number | null;
  has_cscs_card: boolean;
  created_at: string;
  updated_at: string;
}

export interface Application {
  id: string;
  job_id: string;
  applicant_id: string | null;
  applicant_name: string;
  applicant_email: string;
  applicant_phone: string | null;
  cv_url: string | null;
  cover_letter: string | null;
  status: ApplicationStatus;
  employer_notes: string | null;
  created_at: string;
  updated_at: string;
}

export interface EmployerSubscription {
  id: string;
  employer_id: string;
  tier: EmployerTier;
  stripe_subscription_id: string | null;
  stripe_price_id: string | null;
  status: string;
  current_period_start: string | null;
  current_period_end: string | null;
  job_post_limit: number;
  featured_posts_included: number;
  created_at: string;
  updated_at: string;
}

export interface SavedJob {
  id: string;
  user_id: string;
  job_id: string;
  created_at: string;
}

// Subscription tier config
export const TIER_CONFIG = {
  free:    { price_monthly: 0,    job_limit: 1,    featured: 0, label: 'Free' },
  basic:   { price_monthly: 29,   job_limit: 5,    featured: 0, label: 'Basic' },
  premium: { price_monthly: 79,   job_limit: 9999, featured: 3, label: 'Premium' },
} as const;
