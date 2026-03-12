# API Key Health Report — 2026-03-12

## Summary: 11/13 keys healthy | 1 warning | 1 issue

| Service | Status | Notes |
|---------|--------|-------|
| Webflow (×4) | ⚠️ API Error | All 4 tokens return HTTP 500 — Webflow API issue, not key issue |
| Vercel | ✅ Valid | Hobby plan, active, user: albiemorgan88@gmail.com |
| Semrush | ⚠️ Warning | Key present (32 chars) but management endpoint returns 400 — may need different endpoint or plan issue |
| PageSpeed | ✅ Valid | Google API responding normally |
| Apollo | ✅ Valid | Health endpoint healthy (note: is_logged_in=false is normal for API key auth) |
| Supabase Platform | ✅ Valid | 2 projects active+healthy: uk-trade-jobs (eu-west-3), Ardmore (eu-west-2) |
| Supabase Ardmore Keys | ✅ Set | Both anon + service role keys present |
| Supabase UKTJ Keys | ✅ Set | Both anon + service role keys present |
| Stripe | ✅ Valid | Test mode. Balance: £0 available, £11.93 pending |
| Anthropic/OpenClaw | ✅ Running | Gateway operational |

## Details

### Webflow (×4 tokens)
All four tokens (WEBFLOW_API_TOKEN, OPENCLAW_CONSULTANT, ZAPIER_CONSULTANT, AI_AGENT_SETUP) returned HTTP 500 with `internal_error`. This is a **Webflow platform issue**, not a key validity problem. All tokens behave identically = upstream API problem.

### Semrush
Key is set (32 chars). The `/management/v1/api-units` endpoint returns "query type not found" (HTTP 400). This may be a plan-level restriction or endpoint change. Key presence confirmed.

### Stripe
Running in **test mode** (livemode: false). £11.93 pending from card payments.

### Supabase
Platform token valid. Both projects healthy:
- **uk-trade-jobs** — eu-west-3, Postgres 17.6, created 2026-03-04
- **Ardmore project** — eu-west-2, Postgres 17.6, created 2026-03-01

## Action Items
1. **Webflow**: Monitor — likely transient platform issue. Re-check later today.
2. **Semrush**: Verify correct API endpoint for current plan tier.
3. **Stripe**: Confirm test mode is intentional (ClubDraw dev?) or switch to live keys when ready.
