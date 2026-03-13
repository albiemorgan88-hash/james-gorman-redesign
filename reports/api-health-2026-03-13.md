# API Key Health Report — 2026-03-13

Generated: 2026-03-13 08:13 Europe/London

Summary: 9 Valid | 6 Warning | 0 Expired

| Key | Status | Usage/Spend | Notes |
|---|---|---|---|
| WEBFLOW_API_TOKEN | Warning | n/a | `GET /v2/token/introspect` returned HTTP 500 internal_error. Looks like Webflow endpoint/server issue rather than clear auth failure. |
| WEBFLOW_OPENCLAW_CONSULTANT_TOKEN | Warning | n/a | `GET /v2/token/introspect` returned HTTP 500 internal_error. Looks like Webflow endpoint/server issue rather than clear auth failure. |
| WEBFLOW_ZAPIER_CONSULTANT_TOKEN | Warning | n/a | `GET /v2/token/introspect` returned HTTP 500 internal_error. Looks like Webflow endpoint/server issue rather than clear auth failure. |
| WEBFLOW_AI_AGENT_SETUP_TOKEN | Warning | n/a | `GET /v2/token/introspect` returned HTTP 500 internal_error. Looks like Webflow endpoint/server issue rather than clear auth failure. |
| VERCEL_TOKEN | Valid | n/a | `GET /v2/user` succeeded; account `albiemorgan88-hash`. |
| SEMRUSH_API_KEY | Warning | n/a | Management endpoint returned HTTP 400 `query type not found`. Could not confirm usage with the requested endpoint; key not conclusively invalid. |
| PAGESPEED_API_KEY | Valid | n/a | Simple PageSpeed request succeeded for `https://www.google.com/`. |
| APOLLO_API_KEY | Valid | n/a | `GET /api/v1/auth/health` succeeded: `{"healthy":true,"is_logged_in":false}`. |
| SUPABASE_ACCESS_TOKEN | Warning | n/a | `GET /v1/projects` returned Cloudflare 1010 Access Denied. Could be WAF/IP policy rather than token expiry. |
| SUPABASE_ANON_KEY | Valid | n/a | Ardmore anon key verified via `GET /auth/v1/settings` on `smhzgkvatlwbaxlyhnbm.supabase.co`. |
| SUPABASE_SERVICE_ROLE_KEY | Valid | n/a | Ardmore service role key verified via `GET /rest/v1/`. |
| UKTJ_SUPABASE_ANON_KEY | Valid | n/a | UKTJ anon key verified via `GET /auth/v1/settings` on `vaqiwnndzrackucgeffs.supabase.co`. |
| UKTJ_SUPABASE_SERVICE_ROLE_KEY | Valid | n/a | UKTJ service role key verified via `GET /rest/v1/`. |
| STRIPE_SECRET_KEY | Valid | n/a | `GET /v1/balance` succeeded; balance payload returned normally. |
| Anthropic/OpenClaw provider health | Warning | n/a | `openclaw status --deep` succeeded, but it did not expose an Anthropic-specific provider-health line, so no direct provider health confirmation was available. |

## Issues / Follow-up
- Webflow: all 4 token introspection calls hit the same HTTP 500. Retry later; if it persists, treat as Webflow API/platform issue first.
- Semrush: requested usage endpoint did not return usable quota data. Re-check endpoint/docs or test from Semrush UI/API explorer.
- Supabase access token: Cloudflare 1010 blocked project-list request, so token validity is still unconfirmed.
- No usage/spend cap data was exposed by the successful endpoints above, so there were no confirmed >80% quota warnings to flag today.
