# ClubDraw — Supabase Backend

Production-grade backend for the ClubDraw weekly numbers draw SaaS. Handles real money via Stripe Connect.

## Architecture

```
Member → Next.js App → Supabase Auth + DB → Stripe Connect
                    → Edge Functions → Automated Draws
                    → Cron (Vercel) → execute-draw function
```

### Money Flow (per £5 weekly entry)
```
£5.00 from member's card/BACS
  └─ £0.50 (10%) → ClubDraw platform (absorbs Stripe fees ~£0.35)
  └─ £3.00 (60%) → Prize pool
  └─ £1.50 (30%) → Club's bank account (clean, no fees)
```

## Setup — Step by Step

### 1. Create Supabase Project
1. Go to [supabase.com](https://supabase.com), create a new project
2. Note your **Project URL**, **anon key**, and **service role key**
3. Install Supabase CLI: `npm i -g supabase`

### 2. Run Migrations
```bash
# Link to your project
supabase link --project-ref your-project-id

# Run all migrations in order
supabase db push
```

This creates all tables, RLS policies, functions, and triggers.

### 3. Set Up Stripe Connect
1. Go to [Stripe Dashboard](https://dashboard.stripe.com) → Connect → Get started
2. Choose **Express** accounts (simplest for clubs)
3. Enable **BACS Direct Debit** in payment methods (lower fees than cards)
4. Set your platform's `application_fee_percent` to `10`
5. Copy your **Secret Key** and **Publishable Key**

### 4. Deploy Edge Functions
```bash
# Set secrets
supabase secrets set STRIPE_SECRET_KEY=sk_live_xxx
supabase secrets set STRIPE_WEBHOOK_SECRET=whsec_xxx
supabase secrets set CRON_SECRET=$(openssl rand -hex 32)
supabase secrets set SUPABASE_URL=https://your-project.supabase.co
supabase secrets set SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
supabase secrets set SUPABASE_ANON_KEY=your-anon-key

# Deploy all functions
supabase functions deploy create-checkout
supabase functions deploy stripe-webhook
supabase functions deploy execute-draw
supabase functions deploy onboard-club
```

### 5. Configure Stripe Webhooks
In Stripe Dashboard → Developers → Webhooks → Add endpoint:
- **URL:** `https://your-project.supabase.co/functions/v1/stripe-webhook`
- **Events:**
  - `checkout.session.completed`
  - `invoice.paid`
  - `invoice.payment_failed`
  - `account.updated`

### 6. Set Up Automated Draws (Vercel Cron)
In your Next.js app's `vercel.json`:
```json
{
  "crons": [{
    "path": "/api/cron/execute-draw",
    "schedule": "0 20 * * 5"
  }]
}
```

Create `app/api/cron/execute-draw/route.ts`:
```typescript
export async function GET(req: Request) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SUPABASE_URL}/functions/v1/execute-draw`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-cron-secret": process.env.CRON_SECRET!,
      },
      body: JSON.stringify({}),
    }
  );
  return Response.json(await res.json());
}
```

### 7. Seed Ardmore CC
The migration `00003_seed_ardmore.sql` creates the Ardmore Cricket Club record. After you sign up:
```sql
-- Make yourself super_admin (run in Supabase SQL Editor)
insert into public.club_memberships (club_id, profile_id, role)
select c.id, p.id, 'super_admin'
from public.clubs c, public.profiles p
where c.slug = 'ardmore' and p.email = 'your-email@example.com';
```

## File Structure

```
supabase/
  config.toml              — Supabase project config
  migrations/
    00001_initial_schema.sql   — Tables, RLS, triggers
    00002_draw_functions.sql   — Provably fair draw engine
    00003_seed_ardmore.sql     — Ardmore CC seed data
  functions/
    create-checkout/       — Stripe Checkout session creation
    stripe-webhook/        — Handles all Stripe events
    execute-draw/          — Automated/manual draw execution
    onboard-club/          — New club registration + Stripe Connect
src/
  types/database.ts        — TypeScript types for all tables
  lib/
    supabase.ts            — Client setup (browser + server + admin)
    stripe.ts              — Stripe helpers & fee calculations
```

## Edge Functions Reference

| Function | Method | Auth | Description |
|----------|--------|------|-------------|
| `create-checkout` | POST | User JWT | Creates Stripe Checkout for number subscription |
| `stripe-webhook` | POST | Stripe signature | Processes payment events |
| `execute-draw` | POST | Cron secret or Admin JWT | Runs weekly draw |
| `onboard-club` | POST | User JWT | Creates club + Stripe Connect account |

## Draw Algorithm (Provably Fair)
1. **Before draw:** Random seed generated, SHA-256 hash published on results page
2. **At draw time:** Seed used deterministically to pick 5 numbers (1-50)
3. **After draw:** Seed published — anyone can verify `SHA-256(seed) === published_hash`

## Prize Rules
- **3+ matches:** Win! Prize pool split among all players with highest match count
- **< 3 matches:** No winner — prize pool rolls over to next week
- Rollover builds excitement and bigger pots

## RLS Summary
- **Clubs:** Public read, admin write
- **Profiles:** Own data only (admins see their club's members)
- **Draws/Results:** Public read
- **Payments:** Own + club admin
- **Selections:** Own + club admin
- **Platform config:** Super admin only

## Next Steps After Setup
1. ☐ Build Next.js frontend (connect to this backend)
2. ☐ Test full flow in Stripe test mode
3. ☐ Add WhatsApp notifications (Twilio)
4. ☐ Purchase `clubdraw.co.uk` domain
5. ☐ Deploy to Vercel with `ardmore.clubdraw.co.uk` subdomain
6. ☐ Go live with Ardmore CC committee approval
