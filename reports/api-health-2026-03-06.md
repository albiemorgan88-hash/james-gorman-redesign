# API Key Health Check — 2026-03-06

## 1. Webflow (4 tokens)

### WEBFLOW_API_TOKEN (Blue Canvas)
- **Status:** ✅ Valid
- **HTTP:** 200 (sites endpoint; introspect returned 500 — Webflow API issue)
- **Sites accessible:** Blue Canvas (bluecanvas-staging)
- **Last published:** 2026-03-04

### WEBFLOW_OPENCLAW_CONSULTANT_TOKEN
- **Status:** ✅ Valid
- **HTTP:** 200
- **Sites accessible:** OpenClaw Consultant
- **Last published:** 2026-02-19

### WEBFLOW_ZAPIER_CONSULTANT_TOKEN
- **Status:** ✅ Valid
- **HTTP:** 200
- **Sites accessible:** zapierconsultant.co.uk
- **Last published:** 2026-02-13

### WEBFLOW_AI_AGENT_SETUP_TOKEN
- **Status:** ✅ Valid
- **HTTP:** 200
- **Sites accessible:** AI Agent Setup
- **Last published:** 2026-02-13

> **Note:** The `/v2/token/introspect` endpoint returned HTTP 500 for all tokens — this is a Webflow API-side issue, not a token problem. All tokens validated successfully via the `/v2/sites` endpoint.

---

## 2. Vercel

### VERCEL_TOKEN
- **Status:** ✅ Valid
- **HTTP:** 200
- **User:** albiemorgan88-hash (albiemorgan88@gmail.com)
- **Plan:** Hobby (active)
- **Concurrent builds:** 1

---

## 3. Semrush

### SEMRUSH_API_KEY
- **Status:** ❌ API Units Exhausted
- **HTTP:** 403
- **Error:** `ERROR 132 :: API UNITS BALANCE IS ZERO`
- **Detail:** The management endpoint returned 400 (query type not found), and the domain_ranks endpoint confirmed zero API units remaining.

---

## 4. PageSpeed

### PAGESPEED_API_KEY
- **Status:** ✅ Valid
- **HTTP:** 200

---

## 5. Apollo

### APOLLO_API_KEY
- **Status:** ✅ Valid
- **HTTP:** 200
- **Response:** `{"healthy":true,"is_logged_in":false}`
- **Note:** `is_logged_in: false` is normal for API key auth (vs session auth)

---

## 6. Supabase (Ardmore)

### SUPABASE_ACCESS_TOKEN
- **Status:** ✅ Valid
- **HTTP:** 200
- **Projects found:** 2
  1. **uk-trade-jobs** (eu-west-3) — ACTIVE_HEALTHY, Postgres 17.6.1
  2. **albiemorgan88-hash's Project** (eu-west-2) — ACTIVE_HEALTHY, Postgres 17.6.1

### SUPABASE_ANON_KEY
- **Status:** ✅ Set (46 chars)

### SUPABASE_SERVICE_ROLE_KEY
- **Status:** ✅ Set (41 chars)

---

## 7. Supabase (UKTJ)

### UKTJ_SUPABASE_ANON_KEY
- **Status:** ✅ Set (208 chars)

### UKTJ_SUPABASE_SERVICE_ROLE_KEY
- **Status:** ✅ Set (219 chars)

---

## 8. Stripe

### STRIPE_SECRET_KEY
- **Status:** ✅ Valid
- **HTTP:** 200
- **Mode:** Test (livemode: false)
- **Balance:** £0.00 available, £26.75 pending (GBP)

---

## 9. Anthropic / OpenClaw

### OpenClaw Gateway
- **Status:** ✅ Running
- **Model:** claude-opus-4-6 (200k ctx)
- **Gateway:** local, reachable (10ms)
- **Telegram:** ON / OK
- **Active sessions:** 45
- **Security:** 0 critical, 1 warn (reverse proxy headers — cosmetic for local)

---

## Summary

| Service | Key | Status |
|---------|-----|--------|
| Webflow | WEBFLOW_API_TOKEN | ✅ Valid |
| Webflow | WEBFLOW_OPENCLAW_CONSULTANT_TOKEN | ✅ Valid |
| Webflow | WEBFLOW_ZAPIER_CONSULTANT_TOKEN | ✅ Valid |
| Webflow | WEBFLOW_AI_AGENT_SETUP_TOKEN | ✅ Valid |
| Vercel | VERCEL_TOKEN | ✅ Valid |
| Semrush | SEMRUSH_API_KEY | ❌ Zero units |
| PageSpeed | PAGESPEED_API_KEY | ✅ Valid |
| Apollo | APOLLO_API_KEY | ✅ Valid |
| Supabase | SUPABASE_ACCESS_TOKEN | ✅ Valid |
| Supabase | SUPABASE_ANON_KEY | ✅ Set |
| Supabase | SUPABASE_SERVICE_ROLE_KEY | ✅ Set |
| Supabase (UKTJ) | UKTJ_SUPABASE_ANON_KEY | ✅ Set |
| Supabase (UKTJ) | UKTJ_SUPABASE_SERVICE_ROLE_KEY | ✅ Set |
| Stripe | STRIPE_SECRET_KEY | ✅ Valid (test mode) |
| Anthropic | OpenClaw Gateway | ✅ Healthy |
