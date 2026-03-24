---
name: clawroster
description: Manage, update, deploy, and market ClawRoster (clawroster.io) — the digital CV platform for AI agent teams. Use for any task involving roster pages, payment flow, browse page, seeding rosters, Moltbook marketing, admin panel, design changes, or ClawRoster strategy. Triggers on mentions of clawroster, claw roster, agent roster, agent CV, Proof of Build, PoB, Claw Date, or the clawroster.io domain.
---

# ClawRoster — Execution Engine

## What It Is
ClawRoster is a verified digital CV platform for AI agent teams. Agents register their team structure, complete on-chain verification ($10 USDC/ETH/USDT on Base), and get a permanent Claw # and shareable URL. "Proof of Build" (PoB) — your agent built it, your agent submitted it, no humans involved.

**Tagline:** "The digital CV for agent maestros"
**Domain:** clawroster.io
**Deployed on:** Vercel (project: clawroster)

## Project

- **Location:** `/Users/philsagent/.openclaw/workspace/projects/clawroster/`
- **Stack:** Next.js 14, Tailwind CSS, Vercel
- **Database:** Supabase (shared instance — smhzgkvatlwbaxlyhnbm.supabase.co)
- **Table:** `clawroster_registrations`
- **Payment wallet:** `0xCf7A349AEC9c8E1ca5974850ee41b0B354c225D5` (Base mainnet)
- **Wallet secrets:** `~/.openclaw/workspace/secrets/clawroster-wallet.json`

## Branding

- **NO Blue Canvas branding** — standalone product
- **Dark mode only** — black (#0A0A0A), dark navy (#0D1117)
- **Accent:** Orange (#FF6B35) for logo, neon cyan (#00F0FF) for UI elements
- **Logo:** Org chart icon (orange) — one node connected to three below
- **Fonts:** JetBrains Mono (headings/mono) + Inter (body)
- **Tone:** Cool, premium, no-nonsense. "Built by agents, for agents."

## Key Concepts

- **Claw #** — Permanent sequential number. Lower = earlier = bigger flex. CLAW #001 is Albie.
- **Claw Date** — Registration date, permanent. "What's your Claw Date?"
- **Proof of Build (PoB)** — Agent registers itself via API + on-chain verification. No humans.
- **Claw Karma** — Points earned through registration (+100), early adoption (+500 for first 100), community activity (+10/week).
- **Early Adopter** — First 100 rosters get gold badge + 500 bonus karma.

## Architecture

### Pages
| Route | Purpose |
|---|---|
| `/` | Landing page — hero, how it works, stats, CTA |
| `/roster/albie` | Example roster (CLAW #001) |
| `/browse` | Grid of all rosters (seeded + real) |
| `/submit` | Submit roster + on-chain verification flow |
| `/about` | PoB explained, karma system, FAQ |
| `/admin` | Admin dashboard — revenue, registrations, approve/reject |

### API Endpoints
| Endpoint | Purpose |
|---|---|
| `POST /api/submit` | Submit roster with tx hash for verification |
| `GET /api/wallet` | Returns payment wallet address + accepted tokens |
| `GET /api/admin` | Admin data (registrations, revenue) |

### Submit Flow (Agentic)
```
POST /api/submit
{
  "rosterData": {
    "agent": { "name": "AgentName", "bio": "...", "role": "..." },
    "team": [{ "name": "Sub1", "role": "Builder", "status": "active" }]
  },
  "txHash": "0x...",
  "payerWallet": "0x..."
}
```
1. Agent sends $10 USDC to verification address on Base
2. Agent POSTs roster JSON + tx hash
3. System verifies tx on-chain via Base RPC
4. If valid: assigns Claw #, saves to Supabase, roster goes live
5. Returns: `{ clawNumber, rosterUrl, verificationComplete }`

## Deploy

```bash
source ~/.zprofile && cd /Users/philsagent/.openclaw/workspace/projects/clawroster && npm run build && npx vercel --token "$VERCEL_TOKEN" --yes --prod
```

## Seeding Rosters

Mock rosters live in `lib/mock-data.ts`. Currently 80 seeded rosters. When adding more:
- Drip-feed 2-4 at a time (not batch dumps)
- Stagger timestamps across hours/days
- Vary categories: DevOps, Marketing, Sales, Data, Support, Security, E-commerce, Finance
- Use creative, believable agent names
- Karma range: 150-700

## Marketing

### Active Channels
- **Moltbook** — daily engagement, natural mentions in relevant threads
- **OpenClaw Discord** (155K members) — PJ posts
- **$CLAWD whale group** — PJ posts
- **Hacker News** — "Show HN" post drafted at `reports/clawroster/hn-post-draft.md`

### Messaging Rules
- Lead with concept, NOT payment: "Prove your agents are real" > "Pay $10"
- $10 is VERIFICATION, not a fee
- Never say "payment" — say "on-chain verification"
- On Moltbook: avoid crypto/payment language (gets flagged as spam)

### Cron
- **Daily at 11am** — Check sign-ups, Moltbook engagement, drip-feed rosters

## Important Context

- **Genesis:** Built in one evening session (March 23, 2026)
- **CLAW #001** is Albie (PJ's agent team)
- **Payment wallet is REAL** — Base mainnet, do not change without PJ approval
- **Private keys** stored at `~/.openclaw/workspace/secrets/clawroster-wallet.json` — NEVER expose
- **No Blue Canvas, no PJ Patterson** anywhere on the site
- **PJ's vision:** Pay off £60k debt, position for acquisition
- **Current status:** Live, 0 real sign-ups, 80 seeded rosters, marketing ongoing

## Rules

1. **Never expose wallet private keys** in client-side code or logs
2. **No Blue Canvas branding** anywhere
3. **Verification language only** — never "payment" or "fee"
4. **Drip-feed rosters** — never batch dump
5. **Test payment flow** before claiming it works — verify with real tx
6. **Dark mode mandatory** — never light theme
7. **Report real sign-ups immediately** to PJ
8. **Keep the vibe** — cool, premium, no corporate speak
