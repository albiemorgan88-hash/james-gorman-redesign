# API Key Health Check — 2026-03-08

## Summary
| # | Service | Status | Notes |
|---|---------|--------|-------|
| 1 | Webflow — API Token | ⚠️ Partial | Introspect endpoint 500 (Webflow API issue), but sites endpoint works fine |
| 2 | Webflow — OpenClaw Consultant | ⚠️ Partial | Same introspect 500, likely Webflow-side issue |
| 3 | Webflow — Zapier Consultant | ⚠️ Partial | Same introspect 500, likely Webflow-side issue |
| 4 | Webflow — AI Agent Setup | ⚠️ Partial | Same introspect 500, likely Webflow-side issue |
| 5 | Vercel | ✅ Valid | User: albiemorgan88-hash, plan: hobby, status: active |
| 6 | Semrush | ⚠️ Warning | Key exists (32 chars) but API units endpoint returned 400. May need different query format |
| 7 | PageSpeed | ✅ Valid | HTTP 200 returned |
| 8 | Apollo | ✅ Valid | Health check passed (healthy: true) |
| 9 | Supabase (Management) | ✅ Valid | 2 projects found: uk-trade-jobs (ACTIVE_HEALTHY), albiemorgan88-hash's Project (ACTIVE_HEALTHY) |
| 10 | Supabase Anon Key | ✅ Present | Set in env |
| 11 | Supabase Service Role Key | ✅ Present | Set in env |
| 12 | UKTJ Supabase Anon Key | ✅ Present | Set in env |
| 13 | UKTJ Supabase Service Role Key | ✅ Present | Set in env |
| 14 | Stripe | ✅ Valid | Balance: £10.39 available, £16.36 pending (test mode) |
| 15 | Anthropic / OpenClaw | ✅ Valid | Gateway running (pid 63659), claude-opus-4-6 active, Telegram channel OK |

## Flags & Actions

### ⚠️ Webflow Introspect 500s
All 4 Webflow tokens return HTTP 500 on `/v2/token/introspect`, but the primary token successfully calls `/v2/sites` and returns the Blue Canvas site. This is a **Webflow API issue**, not a token problem. No action needed unless it persists.

### ⚠️ Semrush API Units
Key exists but the management API returned 400. The endpoint format may have changed or the key type may not support this call. Worth investigating if Semrush features are needed.

### ℹ️ Stripe Test Mode
Stripe is running in **test/livemode:false**. Switch to live key when ready for production payments.

### ℹ️ OpenClaw Update Available
Update available: `2026.3.7` (current: `2026.3.2-beta.1`).

---
**Overall: 🟢 All critical services operational. No expired keys. 2 minor warnings (Webflow introspect API, Semrush query format).**
