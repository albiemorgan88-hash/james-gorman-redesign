# Google Ads Performance Report — 2026-03-06

**Account:** 801-851-4760 (Blue Canvas)  
**Manager:** 396-378-6948  
**Report Date:** Fri 6 March 2026

## ⚠️ API Access Blocked — Developer Token Still in Test Mode

All Google Ads API v19 queries returned `500 Internal Error`.

**Root cause:** The developer token is still in **test mode** (noted in TOOLS.md as "test→Basic access pending"). Test-level tokens can only access test/sandbox accounts — they cannot query production accounts like 801-851-4760.

### What was attempted
- OAuth token refresh: ✅ succeeded
- `listAccessibleCustomers`: ❌ 500
- Simple campaign list query: ❌ 500
- Campaign metrics (last 7 days): ❌ 500
- Query via manager account: ❌ 500
- API v18 fallback: ❌ 404 (deprecated/removed)
- With and without `login-customer-id` header: ❌ 500

### To fix
1. **Apply for Basic Access** in the Google Ads API Center (Google Ads UI → Tools & Settings → API Center)
2. Complete the required verification form (takes 1-5 business days)
3. Once approved, all queries above will work

### Alternative (now)
Until Basic Access is granted, performance data can be checked:
- **Google Ads UI**: ads.google.com → account 801-851-4760
- **Google Ads Editor**: desktop app with full reporting
- **Google Ads Scripts**: run GAQL inside the Ads UI (no developer token needed)

---

*No campaign performance data available via API at this time.*
