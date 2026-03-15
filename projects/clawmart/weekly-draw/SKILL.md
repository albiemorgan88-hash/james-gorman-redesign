---
name: weekly-draw-platform
version: 1.0.0
description: Deploy a weekly numbers draw / lottery platform for sports clubs, charities, or community groups. Stripe payments, automated Friday draws, email notifications, winner announcements — the complete stack.
author: Blue Canvas AI
price: 39
tags: [lottery, draw, fundraising, sports, club, stripe, saas, platform, charity]
---

# Weekly Draw Platform

> A complete weekly numbers draw system for sports clubs and community organisations. Stripe subscriptions, automated draws, email notifications — from zero to live in a day.

## What This Skill Does

Deploys a fully functional weekly draw platform where:
- Members pick numbers (£1 each per week)
- Stripe handles weekly recurring payments + one-off purchases
- Every Friday at 7PM, 3 winning numbers are drawn automatically
- All participants receive email results with winner names
- Winners get congratulations emails with prize amounts
- Results display on the public website
- Revenue splits automatically calculated

## The Stack

- **Frontend:** Next.js + Tailwind CSS (Vercel)
- **Database:** Supabase (auth, RLS, real-time)
- **Payments:** Stripe Subscriptions + Checkout Sessions
- **Email:** Resend (transactional)
- **Automation:** OpenClaw cron (Friday 7PM draw)

## Revenue Split (Configurable)

| Recipient | Default % |
|-----------|----------|
| Prize Pool (3 winners) | 50% |
| Club/Organisation | 40% |
| Platform Fee (you) | 7.5% |
| Stripe Fees | 2.5% |

## Features

- **Number grid** — members pick from 1-500
- **Subscription management** — weekly Stripe recurring payments
- **One-off purchases** — single-draw entries
- **Assigned names** — buy numbers for someone else
- **Automated draw** — provably fair random number generation
- **Email notifications** — purchase confirmations, draw results, winner announcements
- **Results page** — public display of past winners with names and prizes
- **Admin tools** — pot calculation, payout tracking, subscription management
- **Webhook handling** — Stripe events processed automatically
- **Number lifecycle** — one-offs expire after draw, subscriptions renew

## Real Production Numbers

Week 1: 28 entries, £28 pot
Week 2: 227 entries, £227 pot (8x growth)
Platform revenue: £17/week from one club

## Known Gotchas (We Hit Them So You Don't Have To)

1. **DB enum values** — check your status enums match between code and database. "pending_payout" vs "drawn" will silently break your draw.
2. **Unique constraints** — if users can have multiple subscriptions, your number_selections table needs to upsert, not insert.
3. **One-off lifecycle** — one-off purchases must expire after the draw. Use "cancelled" status (not "expired" — it might not exist in your enum).
4. **Email deduplication** — one email per person per draw, not one per winning number. Consolidate.
5. **Stripe webhook signatures** — always verify. Use the webhook secret, not the API key.

## Setup

1. Create Supabase project
2. Run the database migrations (included)
3. Set up Stripe products (weekly subscription price)
4. Configure Resend for transactional emails
5. Deploy to Vercel
6. Set up OpenClaw cron for Friday 7PM draw
7. Share the link with your club

## Who This Is For

- Cricket, GAA, rugby, football, hockey clubs
- Charities running fundraising draws
- Community organisations wanting recurring revenue
- Anyone who wants a white-label lottery platform
- Operators looking to build SaaS products with their agent

## Scaling

One platform, many clubs. Each club gets their own subdomain/page, their own draw, their own Stripe connection. The platform fee compounds:
- 1 club: £70/month
- 10 clubs: £700/month
- 50 clubs: £3,500/month
