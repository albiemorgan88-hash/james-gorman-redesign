-- UK Trade Jobs — Supabase Schema
-- Migration 001: Core tables, enums, RLS policies
-- Run via: supabase db push or paste into Supabase SQL Editor

-- ============================================================
-- ENUMS
-- ============================================================

CREATE TYPE employer_tier AS ENUM ('free', 'basic', 'premium');
CREATE TYPE job_status AS ENUM ('draft', 'active', 'paused', 'expired', 'filled');
CREATE TYPE application_status AS ENUM ('submitted', 'viewed', 'shortlisted', 'rejected', 'hired');
CREATE TYPE job_type AS ENUM ('full_time', 'part_time', 'contract', 'temporary', 'apprenticeship');

-- ============================================================
-- EMPLOYERS
-- ============================================================

CREATE TABLE employers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  company_name TEXT NOT NULL,
  company_slug TEXT UNIQUE NOT NULL,
  logo_url TEXT,
  website TEXT,
  description TEXT,
  phone TEXT,
  email TEXT NOT NULL,
  address_line1 TEXT,
  address_line2 TEXT,
  city TEXT,
  county TEXT,
  postcode TEXT,
  is_verified BOOLEAN DEFAULT FALSE,
  tier employer_tier DEFAULT 'free',
  stripe_customer_id TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE UNIQUE INDEX idx_employers_user_id ON employers(user_id);
CREATE INDEX idx_employers_slug ON employers(company_slug);

-- ============================================================
-- EMPLOYER SUBSCRIPTIONS
-- ============================================================

CREATE TABLE employer_subscriptions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  employer_id UUID NOT NULL REFERENCES employers(id) ON DELETE CASCADE,
  tier employer_tier NOT NULL DEFAULT 'free',
  stripe_subscription_id TEXT,
  stripe_price_id TEXT,
  status TEXT NOT NULL DEFAULT 'active', -- active, cancelled, past_due, trialing
  current_period_start TIMESTAMPTZ,
  current_period_end TIMESTAMPTZ,
  job_post_limit INT NOT NULL DEFAULT 1, -- free=1, basic=5, premium=unlimited (9999)
  featured_posts_included INT NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_subscriptions_employer ON employer_subscriptions(employer_id);

-- ============================================================
-- JOB POSTINGS
-- ============================================================

CREATE TABLE job_postings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  employer_id UUID NOT NULL REFERENCES employers(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  slug TEXT NOT NULL,
  trade TEXT NOT NULL, -- electrician, plumber, carpenter, etc.
  job_type job_type NOT NULL DEFAULT 'full_time',
  description TEXT NOT NULL,
  requirements TEXT,
  salary_min INT,
  salary_max INT,
  salary_period TEXT DEFAULT 'year', -- year, month, day, hour
  city TEXT NOT NULL,
  county TEXT,
  postcode TEXT,
  is_remote BOOLEAN DEFAULT FALSE,
  is_featured BOOLEAN DEFAULT FALSE,
  status job_status DEFAULT 'draft',
  application_email TEXT,
  application_url TEXT,
  expires_at TIMESTAMPTZ DEFAULT (NOW() + INTERVAL '30 days'),
  views INT DEFAULT 0,
  applications_count INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(employer_id, slug)
);

CREATE INDEX idx_jobs_status ON job_postings(status) WHERE status = 'active';
CREATE INDEX idx_jobs_trade ON job_postings(trade);
CREATE INDEX idx_jobs_city ON job_postings(city);
CREATE INDEX idx_jobs_employer ON job_postings(employer_id);
CREATE INDEX idx_jobs_featured ON job_postings(is_featured, created_at DESC) WHERE status = 'active';
CREATE INDEX idx_jobs_search ON job_postings USING GIN (to_tsvector('english', title || ' ' || description || ' ' || trade || ' ' || city));

-- ============================================================
-- APPLICANTS (job seekers — optional registration)
-- ============================================================

CREATE TABLE applicants (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  city TEXT,
  county TEXT,
  postcode TEXT,
  cv_url TEXT,
  trades TEXT[], -- trades they're interested in
  years_experience INT,
  has_cscs_card BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE UNIQUE INDEX idx_applicants_user_id ON applicants(user_id) WHERE user_id IS NOT NULL;
CREATE INDEX idx_applicants_email ON applicants(email);

-- ============================================================
-- APPLICATIONS
-- ============================================================

CREATE TABLE applications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  job_id UUID NOT NULL REFERENCES job_postings(id) ON DELETE CASCADE,
  applicant_id UUID REFERENCES applicants(id) ON DELETE SET NULL,
  -- Denormalised for guest applications (no account)
  applicant_name TEXT NOT NULL,
  applicant_email TEXT NOT NULL,
  applicant_phone TEXT,
  cv_url TEXT,
  cover_letter TEXT,
  status application_status DEFAULT 'submitted',
  employer_notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_applications_job ON applications(job_id);
CREATE INDEX idx_applications_applicant ON applications(applicant_id) WHERE applicant_id IS NOT NULL;
CREATE INDEX idx_applications_status ON applications(status);

-- ============================================================
-- SAVED JOBS (requires account)
-- ============================================================

CREATE TABLE saved_jobs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  job_id UUID NOT NULL REFERENCES job_postings(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, job_id)
);

CREATE INDEX idx_saved_jobs_user ON saved_jobs(user_id);

-- ============================================================
-- UPDATED_AT TRIGGER
-- ============================================================

CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_employers_updated BEFORE UPDATE ON employers FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER trg_subscriptions_updated BEFORE UPDATE ON employer_subscriptions FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER trg_jobs_updated BEFORE UPDATE ON job_postings FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER trg_applicants_updated BEFORE UPDATE ON applicants FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER trg_applications_updated BEFORE UPDATE ON applications FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- ============================================================
-- ROW LEVEL SECURITY
-- ============================================================

ALTER TABLE employers ENABLE ROW LEVEL SECURITY;
ALTER TABLE employer_subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE job_postings ENABLE ROW LEVEL SECURITY;
ALTER TABLE applicants ENABLE ROW LEVEL SECURITY;
ALTER TABLE applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE saved_jobs ENABLE ROW LEVEL SECURITY;

-- EMPLOYERS: owners see their own, public can read verified
CREATE POLICY employers_select_public ON employers FOR SELECT USING (is_verified = TRUE);
CREATE POLICY employers_select_own ON employers FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY employers_insert ON employers FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY employers_update ON employers FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY employers_delete ON employers FOR DELETE USING (auth.uid() = user_id);

-- SUBSCRIPTIONS: employer owners only
CREATE POLICY subs_select ON employer_subscriptions FOR SELECT
  USING (employer_id IN (SELECT id FROM employers WHERE user_id = auth.uid()));
CREATE POLICY subs_insert ON employer_subscriptions FOR INSERT
  WITH CHECK (employer_id IN (SELECT id FROM employers WHERE user_id = auth.uid()));

-- JOB POSTINGS: active jobs public, own jobs for employer
CREATE POLICY jobs_select_public ON job_postings FOR SELECT USING (status = 'active');
CREATE POLICY jobs_select_own ON job_postings FOR SELECT
  USING (employer_id IN (SELECT id FROM employers WHERE user_id = auth.uid()));
CREATE POLICY jobs_insert ON job_postings FOR INSERT
  WITH CHECK (employer_id IN (SELECT id FROM employers WHERE user_id = auth.uid()));
CREATE POLICY jobs_update ON job_postings FOR UPDATE
  USING (employer_id IN (SELECT id FROM employers WHERE user_id = auth.uid()));
CREATE POLICY jobs_delete ON job_postings FOR DELETE
  USING (employer_id IN (SELECT id FROM employers WHERE user_id = auth.uid()));

-- APPLICANTS: own profile only
CREATE POLICY applicants_select_own ON applicants FOR SELECT USING (user_id = auth.uid());
CREATE POLICY applicants_insert ON applicants FOR INSERT WITH CHECK (user_id = auth.uid());
CREATE POLICY applicants_update ON applicants FOR UPDATE USING (user_id = auth.uid());

-- APPLICATIONS: applicants see own, employers see apps for their jobs
CREATE POLICY apps_select_applicant ON applications FOR SELECT
  USING (applicant_id IN (SELECT id FROM applicants WHERE user_id = auth.uid()));
CREATE POLICY apps_select_employer ON applications FOR SELECT
  USING (job_id IN (
    SELECT jp.id FROM job_postings jp
    JOIN employers e ON e.id = jp.employer_id
    WHERE e.user_id = auth.uid()
  ));
CREATE POLICY apps_insert ON applications FOR INSERT WITH CHECK (TRUE); -- anyone can apply
CREATE POLICY apps_update_employer ON applications FOR UPDATE
  USING (job_id IN (
    SELECT jp.id FROM job_postings jp
    JOIN employers e ON e.id = jp.employer_id
    WHERE e.user_id = auth.uid()
  ));

-- SAVED JOBS: own only
CREATE POLICY saved_select ON saved_jobs FOR SELECT USING (user_id = auth.uid());
CREATE POLICY saved_insert ON saved_jobs FOR INSERT WITH CHECK (user_id = auth.uid());
CREATE POLICY saved_delete ON saved_jobs FOR DELETE USING (user_id = auth.uid());
