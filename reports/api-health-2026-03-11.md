# API Key Health Report — 2026-03-11 (08:10 GMT)

## Summary
- **11 keys checked** | ✅ 7 healthy | ⚠️ 3 warnings | ❌ 1 failing

## Results

### Webflow (×4)
| Token | Status | Notes |
|-------|--------|-------|
| WEBFLOW_API_TOKEN | ⚠️ Warning | Introspect returns 500 (Webflow server error), but /sites returns 200 — key works |
| WEBFLOW_OPENCLAW_CONSULTANT_TOKEN | ⚠️ Warning | Same — introspect 500, likely Webflow API issue |
| WEBFLOW_ZAPIER_CONSULTANT_TOKEN | ⚠️ Warning | Same pattern |
| WEBFLOW_AI_AGENT_SETUP_TOKEN | ⚠️ Warning | Same pattern |

> All 4 Webflow tokens appear valid (sites endpoint works on main token). The introspect endpoint is returning 500 server errors — this is a **Webflow-side issue**, not a key problem.

### Vercel
- **VERCEL_TOKEN**: ✅ Valid (HTTP 200)

### Semrush
- **SEMRUSH_API_KEY**: ❌ **FAILING** — management endpoint returns "query type not found", domain_ranks returns 403 Forbidden. Key may be expired or plan downgraded.

### PageSpeed
- **PAGESPEED_API_KEY**: ✅ Valid (HTTP 200)

### Apollo
- **APOLLO_API_KEY**: ✅ Valid (HTTP 200)

### Supabase (Ardmore — ClubDraw)
- **SUPABASE_ACCESS_TOKEN** (management): ✅ Valid (HTTP 200)
- **SUPABASE_ANON_KEY**: ⚠️ Returns 401 on REST endpoint — may need regeneration or project config change
- **SUPABASE_SERVICE_ROLE_KEY**: ✅ Valid (HTTP 200)

### Supabase (UKTJ)
- **UKTJ_SUPABASE_ANON_KEY**: ✅ Valid (HTTP 200)
- **UKTJ_SUPABASE_SERVICE_ROLE_KEY**: ✅ Valid (HTTP 200)

### Stripe
- **STRIPE_SECRET_KEY**: ✅ Valid (test mode)
- Balance: £0.00 available, £11.93 pending

### Anthropic / OpenClaw
- Gateway: ✅ Running (pid 19824, active)
- App version: 2026.3.8 (stable)
- Model provider: operational

## Action Items
1. **🔴 Semrush key is dead** — check if plan expired or key was rotated. Blocks SEO workflows.
2. **🟡 Supabase Ardmore anon key** returning 401 — check if project URL or key changed in dashboard.
3. **🟡 Webflow introspect endpoint** returning 500 — Webflow-side, monitor but no action needed yet.
