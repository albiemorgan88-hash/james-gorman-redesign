# UK Trade Jobs — Supabase Backend

Production-grade backend for uktradejobs.com. Supabase (Postgres + Auth + Storage) + Stripe subscriptions.

## Architecture

```
┌─────────────────────────────────────────────────┐
│  Next.js App (Vercel)                           │
│  ├── Public: job search, job detail, apply       │
│  ├── Employer: dashboard, job CRUD, billing      │
│  └── Job Seeker: saved jobs, applications        │
├─────────────────────────────────────────────────┤
│  Supabase                                        │
│  ├── Auth (email/password, magic link)           │
│  ├── Postgres (RLS-protected tables)             │
│  ├── Storage (CVs, logos)                        │
│  └── Edge Functions (optional)                   │
├─────────────────────────────────────────────────┤
│  Stripe (subscriptions)                          │
│  ├── Free: 1 job post                           │
│  ├── Basic £29/mo: 5 job posts                  │
│  └── Premium £79/mo: unlimited + 3 featured      │
└─────────────────────────────────────────────────┘
```

## Setup

### 1. Create Supabase Project
Go to [supabase.com](https://supabase.com), create a project, grab URL + keys.

### 2. Run Migrations
In the Supabase SQL Editor, run in order:
```
migrations/001_schema.sql    — Tables, indexes, RLS policies
migrations/002_functions.sql — Search, dashboard, triggers
migrations/003_storage.sql   — CV and logo buckets
```

### 3. Configure Stripe
1. Create products in Stripe Dashboard:
   - **Basic** — £29/mo recurring
   - **Premium** — £79/mo recurring
2. Copy price IDs to `.env`
3. Set up webhook endpoint: `https://uktradejobs.com/api/webhooks/stripe`
   - Events: `checkout.session.completed`, `customer.subscription.deleted`, `invoice.payment_failed`

### 4. Environment Variables
Copy `.env.example` → `.env.local` and fill in values. Add same vars to Vercel project settings.

### 5. Install Dependencies
```bash
cd /path/to/uk-trade-jobs
npm install @supabase/supabase-js @supabase/ssr stripe
```

## API Routes Map

Copy from `src/routes/` into your Next.js `app/api/` directory:

| File | Next.js Route | Method | Auth |
|------|--------------|--------|------|
| `auth.ts` → `employerSignup` | `app/api/auth/employer-signup/route.ts` | POST | — |
| `auth.ts` → `jobseekerSignup` | `app/api/auth/jobseeker-signup/route.ts` | POST | — |
| `auth.ts` → `login` | `app/api/auth/login/route.ts` | POST | — |
| `auth.ts` → `logout` | `app/api/auth/logout/route.ts` | POST | Any |
| `jobs.ts` → `getJobs` | `app/api/jobs/route.ts` | GET | — |
| `jobs.ts` → `getJob` | `app/api/jobs/[slug]/route.ts` | GET | — |
| `jobs.ts` → `createJob` | `app/api/jobs/route.ts` | POST | Employer |
| `jobs.ts` → `updateJob` | `app/api/jobs/[id]/route.ts` | PATCH | Employer |
| `jobs.ts` → `deleteJob` | `app/api/jobs/[id]/route.ts` | DELETE | Employer |
| `applications.ts` → `submitApplication` | `app/api/applications/route.ts` | POST | — |
| `applications.ts` → `getEmployerApplications` | `app/api/employer/applications/route.ts` | GET | Employer |
| `applications.ts` → `updateApplicationStatus` | `app/api/employer/applications/[id]/route.ts` | PATCH | Employer |
| `employer-dashboard.ts` → `getDashboard` | `app/api/employer/dashboard/route.ts` | GET | Employer |
| `employer-dashboard.ts` → `getEmployerJobs` | `app/api/employer/jobs/route.ts` | GET | Employer |
| `employer-dashboard.ts` → `updateProfile` | `app/api/employer/profile/route.ts` | PATCH | Employer |
| `saved-jobs.ts` → `getSavedJobs` | `app/api/saved-jobs/route.ts` | GET | Seeker |
| `saved-jobs.ts` → `saveJob` | `app/api/saved-jobs/route.ts` | POST | Seeker |
| `saved-jobs.ts` → `unsaveJob` | `app/api/saved-jobs/[job_id]/route.ts` | DELETE | Seeker |
| `stripe-checkout.ts` → `createCheckout` | `app/api/employer/subscribe/route.ts` | POST | Employer |
| `stripe-webhook.ts` → `handleStripeWebhook` | `app/api/webhooks/stripe/route.ts` | POST | Stripe sig |

## Database Schema

### Tables
- **employers** — Company profiles linked to auth users
- **employer_subscriptions** — Stripe subscription tracking, tier limits
- **job_postings** — Full-text searchable, auto-expire after 30 days
- **applicants** — Optional job seeker profiles
- **applications** — Guest or authenticated, duplicate prevention
- **saved_jobs** — Authenticated users only

### Key Features
- **RLS everywhere** — Employers see own data, public sees active jobs
- **Full-text search** — GIN index on title + description + trade + city
- **Auto triggers** — `updated_at`, application count, default free subscription
- **Job post limits** — Enforced at DB level via `check_job_post_limit()`
- **Featured jobs** — Always sorted first in search results

## Revenue Model

| Tier | Price | Jobs | Featured | Target |
|------|-------|------|----------|--------|
| Free | £0 | 1 | 0 | Trial / small firms |
| Basic | £29/mo | 5 | 0 | Active recruiters |
| Premium | £79/mo | Unlimited | 3 | Agencies / large firms |

With 3k+ indexed pages driving organic traffic, even 20 Basic subscribers = £580/mo recurring.

## Next Steps
1. [ ] Create Supabase project and run migrations
2. [ ] Set up Stripe products and webhook
3. [ ] Wire routes into the existing Next.js app
4. [ ] Build employer dashboard UI (navy/amber brand)
5. [ ] Add email notifications (Resend) for new applications
6. [ ] Add CV upload to Storage bucket
7. [ ] SEO: structured data for real job postings (replaces mock data)
