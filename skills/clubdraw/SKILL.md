---
name: clubdraw
description: Build, customise and deploy white-label weekly draw platforms for amateur sports clubs. Use when working on ClubDraw — the weekly numbers draw SaaS product for cricket, GAA, rugby, football and hockey clubs. Covers demo site development, production build-out (Stripe, auth, automated draws), club onboarding, branding, revenue model (10% platform fee), legal/lottery compliance, payments, and go-live planning. Trigger on any mention of ClubDraw, weekly draw, club draw platform, or club fundraising platform.
---

# ClubDraw

White-label weekly numbers draw platform for amateur sports clubs. Platform revenue: **10% of every weekly pot**, taken automatically via Stripe Connect. ClubDraw absorbs Stripe fees — clubs get a clean 90%.

## Project Location

- **Demo repo**: `/Users/philsagent/.openclaw/workspace/projects/clubdraw-demo/`
- **Live demo**: https://albiemorgan88-hash.github.io/clubdraw-demo/ (Ardmore Cricket Club)
- **Deployment**: GitHub Pages (demo) → Vercel (production)
- **Domain needed**: `clubdraw.co.uk` (not yet purchased)

## Concept

Members pick 5 numbers (1–50), pay £1/number/week via direct debit. Five numbers drawn weekly. Winners split a percentage of the pot. Platform takes 10% automatically (absorbs Stripe fees). Club gets clean 90%.

**Target market**: Amateur sports clubs in Ireland & UK — cricket, GAA, rugby, football, hockey.
**Phil's connection**: Member of Ardmore Cricket Club (Maghera, NI) — first customer and proof of concept.

## Revenue Model

| Metric | Value |
|--------|-------|
| 50 members × 5 numbers × £1 | £250/week pot |
| 10% platform fee | £25/week per club |
| 10 clubs | £250/week = **£13,000/year** |
| 50 clubs | £1,250/week = **£65,000/year** |
| 100 clubs | £2,500/week = **£130,000/year** |

**Costs** (absorbed from 10%): Stripe fees (~2.9% + 20p per txn), Twilio WhatsApp (~£20/mo), Vercel (free tier), domain (~£10/yr), business bank account (free). Net margin ~6–7% after Stripe fees.

## Production Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js (App Router) |
| Hosting | Vercel |
| Payments | Stripe Connect (recurring + platform fee) |
| Database | PostgreSQL (Supabase) |
| Auth | Supabase Auth |
| Notifications | WhatsApp Cloud API (via Twilio) + email |
| Draw engine | Vercel Cron, provably fair seeded RNG |

## Current Demo Features

- Number picker (select 5 from 1–50), mock weekly draw with animation
- Results history, admin dashboard preview
- Club branding (Ardmore CC colours/logo)
- Full club site: fixtures, results/scorecards, player profiles, youth section, gallery, history, contact

---

## Go-Live Action Plan

### Phase 1: Legal (Week 1–2)

ClubDraw is a **society lottery** under NI law. Key legislation: **Betting, Gaming, Lotteries and Amusements (NI) Order 1985** (amended 2022).

| Requirement | Detail |
|------------|--------|
| Registration | Each club registers with their **local district council** as a society lottery (not ClubDraw — the club is the lottery operator) |
| Registration fee | £35 (NI) |
| Max ticket price | £100 per ticket (raised from £1 in 2022 amendment) |
| Max single prize | £25,000 (NI society lottery) |
| Max proceeds per draw | £20,000 |
| Age restriction | **16+** (NI) — must verify age at signup |
| Returns | Club must file annual return to council showing proceeds, prizes, expenses |
| Platform role | ClubDraw is a **service provider/platform**, not the lottery operator. Each club runs their own lottery. |

**Action items:**
1. ☐ Confirm with Derry City & Strabane council (Ardmore's council) re: registration process
2. ☐ Draft lottery rules document template for clubs (required for registration)
3. ☐ Add age verification checkbox + T&Cs acceptance to signup flow
4. ☐ Include "responsible gambling" link on all club sites
5. ☐ Get 30-min legal consultation to confirm platform-operator distinction (£150–300)

### Phase 2: Banking & Payments (Week 2–3)

#### Business Bank Account
- Open **Tide** or **Starling Business** account (same-day setup, free)
- This receives: Stripe platform fee payouts (10%)
- This pays: Twilio, Vercel, domain, any other costs

#### Stripe Connect Setup
1. Register ClubDraw as **Stripe Connect platform** (Standard accounts)
2. Each club onboards as a **Connected Account** (Express — simplest for clubs)
3. Payment flow:
   ```
   Member pays £5/week → Stripe charges card/direct debit
   → 10% (£0.50) application fee → ClubDraw Stripe balance
   → 90% (£4.50) → Club's Connected Account (clean — no fees deducted)
   → Stripe fees (~2.9% + 20p) absorbed by ClubDraw from the 10%
   ```
4. Set up **Stripe Billing** for recurring weekly payments (subscriptions)
5. Enable **BACS Direct Debit** (UK) for lower fees (~1% capped at £2 vs 2.9% cards)
6. Payout schedule: clubs receive funds **weekly, after each draw**
7. PCI compliance handled entirely by Stripe (use Stripe Elements / Checkout)

**Action items:**
1. ☐ Open Tide/Starling business account
2. ☐ Register for Stripe Connect (needs business account details)
3. ☐ Build Stripe Connect onboarding flow (Express accounts)
4. ☐ Implement subscription creation (£1/number/week × chosen numbers)
5. ☐ Test full payment cycle in Stripe test mode
6. ☐ Set up accounting — Xero or FreeAgent (connects to Stripe + bank)

### Phase 3: Technical Build (Week 3–6)

#### Database Schema (Supabase)
```sql
clubs (id, name, slug, colours, logo_url, stripe_account_id, council_reg_number)
members (id, club_id, name, email, phone, stripe_customer_id, age_verified, created_at)
numbers (id, member_id, club_id, number, active)
draws (id, club_id, drawn_numbers[], seed_hash, seed, pot_amount, created_at)
winners (id, draw_id, member_id, numbers_matched, prize_amount, paid)
payments (id, member_id, stripe_payment_id, amount, status, created_at)
```

#### Core Features to Build
1. ☐ Member signup + Supabase Auth (email/password)
2. ☐ Number picker → creates Stripe subscription
3. ☐ Automated weekly draw (Vercel Cron — every Friday 8pm)
4. ☐ Draw algorithm: provably fair seeded RNG (SHA-256 hash published before, seed after)
5. ☐ Results page (live + history)
6. ☐ Admin dashboard: members, payments, pot, draw history, payouts
7. ☐ Club config system (name, colours, logo, slug → white-label)

#### Deployment
1. ☐ Purchase `clubdraw.co.uk` domain
2. ☐ Deploy Next.js app to Vercel
3. ☐ Subdomain per club: `ardmore.clubdraw.co.uk`
4. ☐ SSL automatic via Vercel
5. ☐ Add security headers, rate limiting
6. ☐ GDPR privacy policy + cookie consent (use iubenda or similar)

### Phase 4: WhatsApp Integration (Week 4–5)

**Use WhatsApp Cloud API via Twilio** (~£0.04/conversation/24hrs).

#### Setup
1. ☐ Create Meta Business account + WhatsApp Business account
2. ☐ Sign up for Twilio, enable WhatsApp sender
3. ☐ Submit message templates for Meta approval (allow 2–3 days)
4. ☐ Build notification service (Supabase Edge Function triggered after draw)

#### Message Templates

**Draw Results** (weekly, to all members):
```
🏏 *Ardmore CC Weekly Draw*
📅 Friday 21 Feb 2026

🎱 Numbers drawn: *7, 14, 23, 38, 45*
💰 This week's pot: *£225.00*

🏆 Winner: *John M* — matched 5 numbers!
Prize: *£112.50*

No winner? Rollover to next week!
Your numbers: 3, 14, 22, 38, 41
You matched: *2 numbers*

Good luck next week! 🍀
```

**Winner Notification** (to winner only):
```
🎉 *Congratulations!* You've won the Ardmore CC weekly draw!

🎱 Numbers: 7, 14, 23, 38, 45
💰 Prize: *£112.50*

Your winnings will be paid to your account within 48 hours.

Well played! 🏆
```

**Payment Confirmation** (on successful charge):
```
✅ *Payment confirmed* — Ardmore CC Weekly Draw
Amount: £5.00 (5 numbers)
Next draw: Friday 28 Feb 2026

Your numbers: 3, 14, 22, 38, 41
Good luck! 🍀
```

**Payment Failed**:
```
⚠️ *Payment failed* — Ardmore CC Weekly Draw
Amount due: £5.00

Please update your payment method to stay in this week's draw:
🔗 ardmore.clubdraw.co.uk/account

Need help? Reply to this message.
```

**Welcome New Member**:
```
👋 *Welcome to the Ardmore CC Weekly Draw!*

You've picked numbers: *3, 14, 22, 38, 41*
Cost: £5/week (£1 per number)

Draws happen every *Friday at 8pm*.
Results posted here automatically.

Good luck! 🏏🍀
```

**Team Selection** (cricket feature — optional):
```
🏏 *Ardmore CC — Team for Saturday 22 Feb*
📍 Away vs Glendermott CC, 1:30pm

1. P. Morgan (c)
2. A. Smith
3. B. Jones
...
11. K. Wilson

🧤 WK: A. Smith | ⚡ Opening bowlers: B. Jones, K. Wilson

Please confirm availability by replying ✅ or ❌
```

### Phase 5: Ardmore Launch (Week 6–8)

**Target: 50 members in first month = £250/week pot**

| Step | When | Detail |
|------|------|--------|
| 1. Demo to committee | Week 6 | Show live demo, explain revenue split, legal compliance |
| 2. Committee approval | Week 6 | Get formal sign-off, agree first draw date |
| 3. Council registration | Week 6 | Submit society lottery registration (Derry City & Strabane) |
| 4. Stripe Connect setup | Week 7 | Onboard Ardmore as Connected Account |
| 5. Soft launch (players) | Week 7 | WhatsApp group + word of mouth at training |
| 6. Public launch | Week 8 | Facebook/Instagram post, posters at The Bleach Green |
| 7. First draw | Week 8 (Fri) | 🎉 |

**Launch channels:**
- WhatsApp group blast to all members
- Facebook page announcement + pinned post
- Instagram story/reel showing the draw animation
- Posters at The Bleach Green (clubhouse)
- Announcement at training night / AGM
- Word of mouth through players and committee

### Phase 6: Scale to Other Clubs (Month 3+)

#### Onboarding Checklist Per Club
1. ☐ Collect: club name, colours (hex), logo, ground name/address, socials
2. ☐ Club registers society lottery with their local council
3. ☐ Club completes Stripe Connect Express onboarding
4. ☐ Generate branded site from config
5. ☐ Deploy to `{club}.clubdraw.co.uk`
6. ☐ Admin walkthrough (30-min video call)
7. ☐ First draw scheduled

#### Sales Strategy
- **No setup fee** — 10% of pot only (zero friction, clubs get clean 90%)
- **Show Ardmore as case study** — real numbers, real results
- **Target order**: NW Cricket League (10 clubs Phil knows) → NI GAA clubs → rugby → football
- **Approach**: attend league meetings, WhatsApp club secretaries, demo site link
- **Scaling**: once 10+ clubs, word of mouth does the work

#### Revenue Projections
| Clubs | Weekly platform revenue | Annual |
|-------|------------------------|--------|
| 10 | £250 | £13,000 |
| 25 | £625 | £32,500 |
| 50 | £1,250 | £65,000 |
| 100 | £2,500 | £130,000 |

---

## Development Rules

- **Branding**: Every club deployment fully branded — no generic sites
- **Platform fee**: 10% non-negotiable, via Stripe Connect application fees. ClubDraw absorbs Stripe fees.
- **Fair draw**: Provably fair — seeded RNG, SHA-256 hash published before draw, seed published after
- **Payments**: All through Stripe — never handle card data directly
- **WhatsApp first**: Primary notification channel; email as fallback
- **No manual payouts**: Automated via Stripe Connect
- **Age verification**: Required at signup (16+ in NI)
- **GDPR compliant**: Privacy policy, data deletion, consent management

## Draw Algorithm (Provably Fair)
```
1. Before draw: generate random seed, hash with SHA-256, publish hash
2. At draw time: use seed to generate 5 numbers (1–50, no duplicates)
3. After draw: publish seed — anyone can verify hash matches
```

## Stripe Connect Flow
```
1. ClubDraw creates Express Connected Account for club
2. Member subscribes → Stripe creates recurring weekly payment
3. Each charge: application_fee_amount = 10% → ClubDraw platform (absorbs Stripe fees)
4. Remaining 90% → club's Connected Account → club's bank (clean, no fees)
5. Club views their own Stripe Express dashboard for transparency
```
