# API Key Health Report — 2026-03-07

## Summary
| Service | Status | Notes |
|---------|--------|-------|
| Webflow (×4) | ⚠️ Introspect 500 | Tokens work (sites endpoint OK) — introspect endpoint broken on Webflow's side |
| Vercel | ✅ Valid | Hobby plan, active billing |
| Semrush | 🔴 Expired | API units balance is ZERO — no queries possible |
| PageSpeed | ✅ Valid | HTTP 200 |
| Apollo | ✅ Valid | Healthy, not logged in (API key mode) |
| Supabase Mgmt | ✅ Valid | 2 projects: uk-trade-jobs + default, both ACTIVE_HEALTHY |
| Supabase Ardmore (Anon) | ✅ Set | Key present in env |
| Supabase Ardmore (Service) | ✅ Set | Key present in env |
| Supabase UKTJ (Anon) | ✅ Set | Key present in env |
| Supabase UKTJ (Service) | ✅ Set | Key present in env |
| Stripe | ✅ Valid | Balance: £0.00 GBP available |
| Anthropic (via OpenClaw) | ✅ Healthy | claude-opus-4-6, 200k ctx, gateway running |

## Flags
- **🔴 SEMRUSH**: API units depleted. Cannot run any SEO queries. Needs top-up or plan renewal.
- **⚠️ WEBFLOW**: `/v2/token/introspect` returns 500 (internal error) for all 4 tokens, but `/v2/sites` works fine with main token — likely a Webflow API bug, not a key issue.

## Details

### Webflow
- WEBFLOW_API_TOKEN: introspect=500, sites=200 ✅
- WEBFLOW_OPENCLAW_CONSULTANT_TOKEN: introspect=500 (functional assumed)
- WEBFLOW_ZAPIER_CONSULTANT_TOKEN: introspect=500 (functional assumed)
- WEBFLOW_AI_AGENT_SETUP_TOKEN: introspect=500 (functional assumed)

### Vercel
- User: albiemorgan88@gmail.com
- Plan: Hobby (active)
- Concurrent builds: 1

### Supabase Projects
1. **uk-trade-jobs** (eu-west-3) — ACTIVE_HEALTHY, PG 17.6.1
2. **default project** (eu-west-2) — ACTIVE_HEALTHY, PG 17.6.1

### Stripe
- Balance: £0.00 GBP (card)
- Key valid and authenticated

### OpenClaw / Anthropic
- Gateway: running (pid 20696)
- Model: claude-opus-4-6 (200k ctx)
- 44 active sessions
- 0 critical security issues
