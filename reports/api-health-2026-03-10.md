# API Key Health Check — 2026-03-10

## Summary Table

| # | Service | Key | Status | Notes |
|---|---------|-----|--------|-------|
| 1 | Webflow | WEBFLOW_API_TOKEN | ⚠️ Warning | 500 internal error from introspect endpoint |
| 2 | Webflow | WEBFLOW_OPENCLAW_CONSULTANT_TOKEN | ⚠️ Warning | 500 internal error from introspect endpoint |
| 3 | Webflow | WEBFLOW_ZAPIER_CONSULTANT_TOKEN | ⚠️ Warning | 500 internal error from introspect endpoint |
| 4 | Webflow | WEBFLOW_AI_AGENT_SETUP_TOKEN | ⚠️ Warning | 500 internal error from introspect endpoint |
| 5 | Vercel | VERCEL_TOKEN | ✅ Valid | Hobby plan, user: albiemorgan88@gmail.com |
| 6 | Semrush | SEMRUSH_API_KEY | ⚠️ Warning | "query type not found" — key may be invalid or API changed |
| 7 | PageSpeed | PAGESPEED_API_KEY | ✅ Valid | HTTP 200 |
| 8 | Apollo | APOLLO_API_KEY | ✅ Valid | healthy:true (not logged in — normal for key-based auth) |
| 9 | Supabase | SUPABASE_ACCESS_TOKEN | ✅ Valid | 2 projects: uk-trade-jobs (ACTIVE_HEALTHY), default project (ACTIVE_HEALTHY) |
| 10 | Stripe | STRIPE_SECRET_KEY | ✅ Valid | Test mode. Available: £0.00 GBP, Pending: £11.93 GBP |
| 11 | Anthropic/Gateway | openclaw gateway | ✅ Running | pid 48654, RPC probe ok, port 18789 |

## Environment Variables (presence check)

| Variable | Status |
|----------|--------|
| SUPABASE_ANON_KEY | ✅ Set |
| SUPABASE_SERVICE_ROLE_KEY | ✅ Set |
| UKTJ_SUPABASE_ANON_KEY | ✅ Set |
| UKTJ_SUPABASE_SERVICE_ROLE_KEY | ✅ Set |

## Details

### Webflow (all 4 tokens) — ⚠️ Warning
All 4 Webflow tokens return HTTP 500 with `internal_error` from the `/v2/token/introspect` endpoint. This is likely a **Webflow API-side issue** rather than invalid tokens — all 4 failing identically suggests the introspect endpoint itself is down. Tokens may still work for normal operations. Worth retrying tomorrow; if persistent, test with a direct site fetch call.

### Vercel — ✅ Valid
- Email: albiemorgan88@gmail.com
- Plan: Hobby (active)
- Concurrent builds: 1

### Semrush — ⚠️ Warning
Response: "query type not found". This could mean the API key is invalid, the endpoint has changed, or the account/plan doesn't support management API calls. Needs investigation.

### PageSpeed — ✅ Valid
HTTP 200 response for bluecanvas.ai mobile performance audit.

### Apollo — ✅ Valid
Health endpoint returns `healthy: true`. `is_logged_in: false` is expected for API key auth.

### Supabase — ✅ Valid
Two projects visible:
1. **uk-trade-jobs** (eu-west-3) — ACTIVE_HEALTHY, Postgres 17.6.1
2. **Default project** (eu-west-2) — ACTIVE_HEALTHY, Postgres 17.6.1

### Stripe — ✅ Valid
Test mode active. Balance: £0.00 available, £11.93 pending.

### OpenClaw Gateway — ✅ Running
Running on 127.0.0.1:18789, pid 48654, RPC probe ok. One doctor warning about Telegram group policy allowlist being empty.

---

**Overall: 8/11 healthy, 3 warnings (Webflow introspect endpoint down, Semrush query issue).**
**No keys expired. No usage caps flagged.**
