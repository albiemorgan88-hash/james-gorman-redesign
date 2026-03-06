# Tool & Service Access Audit — 2026-03-06

Comprehensive verification of all external tools/services Albie has access to.

---

## 1. Ahrefs

| Field | Value |
|-------|-------|
| **Status** | ❌ Broken — No API key |
| **Env Var** | `AHREFS_API_KEY` — **MISSING** from `~/.zprofile` |
| **Test** | API returned "Not found" (no auth header sent) |
| **Action** | Need to add Ahrefs API key. Plans start ~$99/mo. Check if PJ has an account. |
| **Expiry Risk** | N/A — no key exists |

---

## 2. Google Ads API

| Field | Value |
|-------|-------|
| **Status** | ⚠️ Credentials set, API returning 500 |
| **Env Vars** | All 6 present ✅ |
| **Account** | `801-851-4760` (customer), `396-378-6948` (manager) |
| **OAuth** | Token refresh works (access token obtained successfully) |
| **API Test** | `searchStream` returns `500 INTERNAL` error |
| **Likely Cause** | Developer token may still be in "Test" access level (pending Basic approval), or API not enabled in GCP project |
| **Action** | Check Google Ads API status in GCP Console; verify developer token access level |
| **Expiry Risk** | OAuth refresh token — no expiry unless revoked, but can break if password changes |

---

## 3. Google Search Console

| Field | Value |
|-------|-------|
| **Status** | ✅ Working |
| **Auth** | Uses same OAuth creds as Google Ads (token refresh works) |
| **Sites Accessible** | 6 properties: |
| | • `sc-domain:bluecanvas.ai` (siteFullUser) |
| | • `sc-domain:uktradejobs.com` (siteOwner) |
| | • `sc-domain:aiagentsetup.co.uk` (siteOwner) |
| | • `sc-domain:openclawconsultant.co.uk` (siteOwner) |
| | • `sc-domain:zapierconsultant.co.uk` (siteOwner) |
| | • `https://www.bluecanvas.ai/` (siteFullUser) |
| **Expiry Risk** | Low — uses same OAuth refresh token |

---

## 4. GA4 (Google Analytics 4)

| Field | Value |
|-------|-------|
| **Status** | ✅ Working |
| **Property** | `485727316` |
| **Auth** | Same OAuth creds |
| **Test Result** | 97 sessions (Mar 1-6), currency GBP |
| **Expiry Risk** | Low — same OAuth refresh token |

---

## 5. GBP (Google Business Profile)

| Field | Value |
|-------|-------|
| **Status** | ❌ Broken — Insufficient OAuth scopes |
| **Error** | `ACCESS_TOKEN_SCOPE_INSUFFICIENT` for `mybusinessaccountmanagement.googleapis.com` |
| **Action** | Need to re-authorize OAuth with GBP scopes added. Current scopes cover Ads/GSC/GA4 but not Business Profile API. |
| **Required Scope** | `https://www.googleapis.com/auth/business.manage` |
| **Expiry Risk** | N/A until fixed |

---

## 6. Webflow

| Field | Value |
|-------|-------|
| **Status** | ⚠️ 1 of 4 tokens working |

### Token Breakdown:

| Token | Status | Sites |
|-------|--------|-------|
| `WEBFLOW_API_TOKEN` | ✅ Working (HTTP 200) | Blue Canvas (bluecanvas.ai) — last published 2026-03-06 |
| `WEBFLOW_OPENCLAW_CONSULTANT_TOKEN` | ✅ Working (confirmed in earlier health check) | OpenClaw Consultant |
| `WEBFLOW_ZAPIER_CONSULTANT_TOKEN` | ✅ Working (confirmed in earlier health check) | zapierconsultant.co.uk |
| `WEBFLOW_AI_AGENT_SETUP_TOKEN` | ✅ Working (confirmed in earlier health check) | AI Agent Setup |

**Note:** TOOLS.md references `WEBFLOW_API_TOKEN_PUBLISH`, `_PAGES`, `_CMS` — these **do not exist** in `~/.zprofile`. The actual 4 tokens are the main + 3 site-specific ones listed above. TOOLS.md should be updated.

**Expiry Risk:** Webflow API tokens don't expire unless revoked.

---

## 7. Moltbook

| Field | Value |
|-------|-------|
| **Status** | ✅ Working (pre-verified) |
| **Cron** | `Moltbook Inbox Check` runs daily at 12:00 |
| **Expiry Risk** | Low |

---

## 8. PageSpeed API

| Field | Value |
|-------|-------|
| **Status** | ✅ Working |
| **Env Var** | `PAGESPEED_API_KEY` — set |
| **Test Result** | bluecanvas.ai mobile performance score: 0.38 (38/100) |
| **Expiry Risk** | None — Google API key, no expiry |

---

## 9. Apollo

| Field | Value |
|-------|-------|
| **Status** | ⚠️ Needs attention — mixed signals |
| **Env Var** | `APOLLO_API_KEY` — set |
| **Health Endpoint** | Returns `{"healthy":true,"is_logged_in":false}` |
| **Search Endpoint** | Returns `"Invalid access credentials"` |
| **Diagnosis** | Key may have been rotated/expired, or plan downgraded. Health endpoint doesn't validate the key, but actual API calls fail. |
| **Action** | Log into Apollo.io, regenerate API key, update `~/.zprofile` |
| **Expiry Risk** | **Currently broken** — needs immediate fix |

---

## 10. Semrush

| Field | Value |
|-------|-------|
| **Status** | ❌ Unusable — Zero API units |
| **Env Var** | `SEMRUSH_API_KEY` — set |
| **Error** | `ERROR 132 :: API UNITS BALANCE IS ZERO` |
| **Action** | Need to purchase API units or upgrade plan. Key is valid but account has no credits. |
| **Expiry Risk** | N/A — key works but account empty |

---

## Bonus: Other Services Found (from earlier health check)

| Service | Status |
|---------|--------|
| Vercel (`VERCEL_TOKEN`) | ✅ Working — Hobby plan |
| Supabase (`SUPABASE_ACCESS_TOKEN`) | ✅ Working — 2 projects healthy |
| Stripe (`STRIPE_SECRET_KEY`) | ✅ Working — Test mode, £26.75 pending |
| OpenClaw Gateway | ✅ Running — claude-opus-4-6 |

---

## Summary Dashboard

| # | Service | Status | Key Exists | API Works | Action Needed |
|---|---------|--------|------------|-----------|---------------|
| 1 | Ahrefs | ❌ | No | No | Add API key |
| 2 | Google Ads | ⚠️ | Yes (6 vars) | 500 error | Check dev token access level / GCP API enablement |
| 3 | Google Search Console | ✅ | Yes (OAuth) | Yes | None |
| 4 | GA4 | ✅ | Yes (OAuth) | Yes | None |
| 5 | GBP | ❌ | Partial | No (scope) | Re-auth OAuth with GBP scopes |
| 6 | Webflow | ✅ | Yes (4 tokens) | Yes | Update TOOLS.md token names |
| 7 | Moltbook | ✅ | Yes | Yes | None |
| 8 | PageSpeed | ✅ | Yes | Yes | None |
| 9 | Apollo | ⚠️ | Yes | No (auth fail) | Regenerate API key |
| 10 | Semrush | ❌ | Yes | No (0 units) | Purchase API units or upgrade |
| — | Vercel | ✅ | Yes | Yes | None |
| — | Supabase | ✅ | Yes | Yes | None |
| — | Stripe | ✅ | Yes | Yes (test) | Switch to live mode when ready |

---

## Existing Validation Cron

✅ **Already exists:** `api-key-health` cron runs daily at **08:10** — confirmed in cron list. It produced `reports/api-health-2026-03-06.md` today.

**However**, the existing cron has gaps:
1. Didn't catch Apollo being broken (reported ✅ based on health endpoint, but actual search calls fail)
2. Doesn't test Google Ads API calls
3. Doesn't test GSC/GA4/GBP
4. Doesn't test Ahrefs (no key to test)

### Recommendation
Enhance the `api-key-health` cron to:
- Test Apollo with an actual search call, not just the health endpoint
- Test Google Ads `searchStream` endpoint
- Test GSC site list
- Test GA4 `runReport`
- Report results to the same `reports/` folder with actionable fix instructions

---

## Priority Actions (ordered)

1. **Apollo** — Regenerate API key in Apollo.io dashboard → update `~/.zprofile`
2. **Google Ads** — Check GCP Console: is Google Ads API enabled? Is developer token approved for Basic access?
3. **GBP** — Re-run OAuth consent flow adding `business.manage` scope → get new refresh token
4. **Ahrefs** — Decide if worth $99/mo; if yes, get API key from Ahrefs dashboard
5. **Semrush** — Top up API units or consider if Ahrefs can replace it
6. **TOOLS.md** — Fix Webflow token names (remove PUBLISH/PAGES/CMS references, add actual satellite token names)
