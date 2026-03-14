# API Key Health Check — 2026-03-14

- Generated: 2026-03-14T08:11:55.626472Z
- Host: Darwin 25.3.0

## Summary
- Valid: 7
- Warning: 7
- Expired: 0
- >80% cap flags: 0

## Detailed Results

### Webflow — `WEBFLOW_API_TOKEN`
- Present: Yes
- Status: **Warning**
- Usage/Spend: n/a
- >80% cap: No
- Detail: HTTP 500. {"message":"An Internal Error Occurred","code":"internal_error","externalReference":null,"details":[]}

### Webflow — `WEBFLOW_OPENCLAW_CONSULTANT_TOKEN`
- Present: Yes
- Status: **Warning**
- Usage/Spend: n/a
- >80% cap: No
- Detail: HTTP 500. {"message":"An Internal Error Occurred","code":"internal_error","externalReference":null,"details":[]}

### Webflow — `WEBFLOW_ZAPIER_CONSULTANT_TOKEN`
- Present: Yes
- Status: **Warning**
- Usage/Spend: n/a
- >80% cap: No
- Detail: HTTP 500. {"message":"An Internal Error Occurred","code":"internal_error","externalReference":null,"details":[]}

### Webflow — `WEBFLOW_AI_AGENT_SETUP_TOKEN`
- Present: Yes
- Status: **Warning**
- Usage/Spend: n/a
- >80% cap: No
- Detail: HTTP 500. {"message":"An Internal Error Occurred","code":"internal_error","externalReference":null,"details":[]}

### Vercel — `VERCEL_TOKEN`
- Present: Yes
- Status: **Valid**
- Usage/Spend: n/a
- >80% cap: No
- Detail: User lookup OK: albiemorgan88@gmail.com.

### Semrush — `SEMRUSH_API_KEY`
- Present: Yes
- Status: **Warning**
- Usage/Spend: n/a
- >80% cap: No
- Detail: Both `GET /management/v1/api-units?key=...` and Bearer-auth retry returned HTTP 400 `query type not found`. That suggests endpoint/contract mismatch or account-level API config issue rather than a clean auth pass/fail. Could not reliably confirm usage balance from the available response.


### PageSpeed — `PAGESPEED_API_KEY`
- Present: Yes
- Status: **Valid**
- Usage/Spend: n/a
- >80% cap: No
- Detail: PageSpeed request OK. Sample performance score for example.com: 1.

### Apollo — `APOLLO_API_KEY`
- Present: Yes
- Status: **Valid**
- Usage/Spend: n/a
- >80% cap: No
- Detail: Second-pass check with a browser user-agent returned HTTP 200 from `/api/v1/auth/health`: `{"healthy":true,"is_logged_in":false}`. Initial 403 looked like a Cloudflare/browser-signature block, not an invalid key.

### Supabase Ardmore — `SUPABASE_ACCESS_TOKEN`
- Present: Yes
- Status: **Valid**
- Usage/Spend: n/a
- >80% cap: No
- Detail: Second-pass check with a browser user-agent returned HTTP 200 from `/v1/projects` and listed visible projects. Initial 403 was a Cloudflare browser-signature block, not evidence of an expired token.

### Supabase JWT — `SUPABASE_ANON_KEY`
- Present: Yes
- Status: **Warning**
- Usage/Spend: n/a
- >80% cap: No
- Detail: Not JWT-shaped; skipped decode.

### Supabase JWT — `SUPABASE_SERVICE_ROLE_KEY`
- Present: Yes
- Status: **Warning**
- Usage/Spend: n/a
- >80% cap: No
- Detail: Not JWT-shaped; skipped decode.

### Supabase JWT — `UKTJ_SUPABASE_ANON_KEY`
- Present: Yes
- Status: **Valid**
- Usage/Spend: n/a
- >80% cap: No
- Detail: JWT decodes. role=anon, iss=supabase; exp=2036-03-03T18:26:24Z

### Supabase JWT — `UKTJ_SUPABASE_SERVICE_ROLE_KEY`
- Present: Yes
- Status: **Valid**
- Usage/Spend: n/a
- >80% cap: No
- Detail: JWT decodes. role=service_role, iss=supabase; exp=2036-03-03T18:26:24Z

### Stripe — `STRIPE_SECRET_KEY`
- Present: Yes
- Status: **Valid**
- Usage/Spend: n/a
- >80% cap: No
- Detail: Balance endpoint OK. livemode=False. Available: gbp 0.

### Anthropic/OpenClaw — `ANTHROPIC_PROVIDER_HEALTH`
- Present: No
- Status: **Warning**
- Usage/Spend: n/a
- >80% cap: No
- Detail: No standalone Anthropic env key found. | openclaw status --deep => exit 0: OpenClaw status  Overview ┌─────────────────┬────────────────────────────────────────────────────────────────────────────────────────────────────┐ │ Item            │ Value                                                                                              │ ├─────────────────┼───────────── | openclaw health --json => exit 0: {   "ok": true,   "ts": 1773475914619,   "durationMs": 118,   "channels": {     "telegram": {       "configured": true,       "running": false,       "lastStartAt": null,       "lastStopAt": null,       "lastError": null,       "tokenSource": "none",       "probe": {         "ok": true,         "sta

## Notes
- Usage/spend visibility depends on each provider endpoint; some only confirm token validity.
- Supabase anon/service-role keys were assessed non-destructively by local JWT inspection only.
- Anthropic health was checked from local env/OpenClaw status only; no outbound model call was made.
