# API Key Health Check — 2026-03-09 08:10 GMT

## Summary

| # | Service | Status | Details |
|---|---------|--------|---------|
| 1 | Webflow — WEBFLOW_API_TOKEN | ✅ Valid | Blue Canvas (bluecanvas.ai) |
| 2 | Webflow — OPENCLAW_CONSULTANT | ✅ Valid | OpenClaw Consultant (openclawconsultant.co.uk) |
| 3 | Webflow — ZAPIER_CONSULTANT | ✅ Valid | Zapier Consultant (zapierconsultant.co.uk) |
| 4 | Webflow — AI_AGENT_SETUP | ✅ Valid | AI Agent Setup (aiagentsetup.co.uk) |
| 5 | Vercel | ✅ Valid | Hobby plan, active billing |
| 6 | Semrush | ⚠️ Warning | **0 API units remaining** |
| 7 | PageSpeed | ✅ Valid | Working, no quota issues |
| 8 | Apollo | ✅ Valid | Healthy, not logged in (API key mode) |
| 9 | Supabase (Management) | ✅ Valid | 2 projects, both ACTIVE_HEALTHY |
| 10 | Stripe | ✅ Valid | Test mode, £18.08 pending |
| 11 | Anthropic (OpenClaw) | ✅ Valid | claude-opus-4-6, Telegram OK |
| 12 | SUPABASE_ANON_KEY | ✅ Set | — |
| 13 | SUPABASE_SERVICE_ROLE_KEY | ✅ Set | — |
| 14 | UKTJ_SUPABASE_ANON_KEY | ✅ Set | — |
| 15 | UKTJ_SUPABASE_SERVICE_ROLE_KEY | ✅ Set | — |

**Overall: 14/15 healthy · 1 warning (Semrush — 0 units)**

---

## Detailed Results

### 1. Webflow (4 Tokens)

All 4 tokens returned HTTP 200 on `/v2/sites`. The `/v2/token/introspect` endpoint returned HTTP 500 (Webflow server-side issue, not a token problem).

| Token | HTTP | Site | Domain |
|-------|------|------|--------|
| WEBFLOW_API_TOKEN | 200 | Blue Canvas | bluecanvas.ai |
| WEBFLOW_OPENCLAW_CONSULTANT_TOKEN | 200 | OpenClaw Consultant | openclawconsultant.co.uk |
| WEBFLOW_ZAPIER_CONSULTANT_TOKEN | 200 | Zapier Consultant | zapierconsultant.co.uk |
| WEBFLOW_AI_AGENT_SETUP_TOKEN | 200 | AI Agent Setup | aiagentsetup.co.uk |

### 2. Vercel

- **HTTP:** 200
- **User:** albiemorgan88@gmail.com
- **Plan:** Hobby (active)
- **Concurrent builds:** 1
- **Trial available:** Yes

### 3. Semrush

- **HTTP:** 200
- **API Units Remaining:** ⚠️ **0**
- Units are depleted. Any API calls will fail until the balance refreshes or is topped up.

### 4. PageSpeed (Google)

- **HTTP:** 200
- **Status:** Working — successfully ran a performance audit on example.com
- No quota warnings in response.

### 5. Apollo

- **HTTP:** 200
- **Healthy:** true
- **Logged in:** false (normal for API-key-only access)

### 6. Supabase (Management API)

- **HTTP:** 200
- **Projects:**

| Project | Ref | Region | Status | DB Version |
|---------|-----|--------|--------|------------|
| uk-trade-jobs | vaqiwnndzrackucgeffs | eu-west-3 | ACTIVE_HEALTHY | 17.6.1.063 |
| albiemorgan88-hash's Project | smhzgkvatlwbaxlyhnbm | eu-west-2 | ACTIVE_HEALTHY | 17.6.1.063 |

### 7. Stripe

- **HTTP:** 200
- **Mode:** Test (livemode: false)
- **Available balance:** £0.00
- **Pending balance:** £18.08

### 8. Anthropic / OpenClaw

- **Gateway:** Running (pid 86217, active)
- **Model:** claude-opus-4-6 (200k context)
- **Telegram:** ON / OK
- **Sessions:** 48 active
- **Update available:** 2026.3.8 (currently on 2026.3.7)
- **Security:** 0 critical, 1 warn (reverse proxy headers — fine for local)

### 9. Environment Variables (existence check)

| Variable | Status |
|----------|--------|
| SUPABASE_ANON_KEY | ✅ Set |
| SUPABASE_SERVICE_ROLE_KEY | ✅ Set |
| UKTJ_SUPABASE_ANON_KEY | ✅ Set |
| UKTJ_SUPABASE_SERVICE_ROLE_KEY | ✅ Set |

---

## Action Items

1. **Semrush** — 0 API units. Check if this resets monthly or needs a plan upgrade. No Semrush API calls will work until replenished.
2. **OpenClaw update** — v2026.3.8 available (currently 2026.3.7). Non-urgent.
3. **Stripe** — Currently in test mode. Switch to live when ClubDraw goes to production.
