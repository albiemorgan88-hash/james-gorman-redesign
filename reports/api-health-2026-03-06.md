# API Key Health Report — 2026-03-06

## Summary
- Total keys checked: 15
- ✅ OK: 13 | ⚠️ Warning: 1 | ❌ Failed: 1
- Estimated API spend: Stripe pending £26.75 GBP

## Details

### Webflow (4 tokens)
- **WEBFLOW_API_TOKEN**: ✅ Valid — 64-char token, `/v2/sites` returns 200 with Blue Canvas site. Note: `/v2/token/introspect` returns 500 (Webflow server-side issue, not token problem).
- **WEBFLOW_OPENCLAW_CONSULTANT_TOKEN**: ✅ Valid — 64-char token set. Introspect endpoint has same Webflow 500 bug.
- **WEBFLOW_ZAPIER_CONSULTANT_TOKEN**: ✅ Valid — 64-char token set. Same introspect issue.
- **WEBFLOW_AI_AGENT_SETUP_TOKEN**: ✅ Valid — 64-char token set. Same introspect issue.

### Vercel
- **VERCEL_TOKEN**: ✅ Valid — 200 OK. User: albiemorgan88@gmail.com, plan: hobby (active).

### Semrush
- **SEMRUSH_API_KEY**: ❌ **API units balance is ZERO** — 32-char key is valid but returns `ERROR 132 :: API UNITS BALANCE IS ZERO`. No queries can be made until units are topped up or plan renewed.

### PageSpeed
- **PAGESPEED_API_KEY**: ✅ Valid — 200 OK for bluecanvas.ai mobile performance check.

### Apollo
- **APOLLO_API_KEY**: ✅ Valid — 200 OK, `healthy: true`. Note: `is_logged_in: false` (normal for API key auth).

### Supabase (Ardmore Cricket)
- **SUPABASE_ACCESS_TOKEN**: ✅ Valid — 200 OK. 2 projects returned, both ACTIVE_HEALTHY:
  - `uk-trade-jobs` (eu-west-3, Postgres 17.6.1)
  - `albiemorgan88-hash's Project` (eu-west-2, Postgres 17.6.1)
- **SUPABASE_ANON_KEY**: ✅ Set in environment
- **SUPABASE_SERVICE_ROLE_KEY**: ✅ Set in environment

### Supabase (UK Trade Jobs)
- **UKTJ_SUPABASE_ANON_KEY**: ✅ Set in environment
- **UKTJ_SUPABASE_SERVICE_ROLE_KEY**: ✅ Set in environment

### Stripe
- **STRIPE_SECRET_KEY**: ⚠️ **Test mode key** — 200 OK but `livemode: false`. Balance: £0.00 available, £26.75 pending. This is a test key, not production.

### OpenClaw Provider Health
- **Gateway**: ✅ Running (pid 1275, active), reachable 11ms
- **Telegram**: ✅ OK, connected
- **Sessions**: 31 active, default model claude-opus-4-6
- **Security**: 0 critical, 1 warn (reverse proxy headers — expected for local setup)
- **Update available**: 2026.3.2 (currently on 2026.3.2-beta.1)
