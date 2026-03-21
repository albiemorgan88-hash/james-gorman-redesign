# API Key Health Check - 2026-03-21

## Summary
- **🔴 Critical Issues:** 4 Webflow tokens returning internal errors
- **🟡 Warnings:** Semrush API endpoint issue, UKTJ Supabase project inactive
- **🟢 Healthy:** Vercel, PageSpeed, Apollo, Supabase (Ardmore), Stripe, Anthropic

## Detailed Results

### Webflow Tokens (4/4 FAILED)
- **WEBFLOW_API_TOKEN:** ❌ Internal server error
- **WEBFLOW_OPENCLAW_CONSULTANT_TOKEN:** ❌ Internal server error  
- **WEBFLOW_ZAPIER_CONSULTANT_TOKEN:** ❌ Internal server error
- **WEBFLOW_AI_AGENT_SETUP_TOKEN:** ❌ Internal server error
- **Action needed:** All 4 Webflow tokens failing with internal errors - possible Webflow API outage

### Vercel ✅
- **Status:** Valid, active
- **Account:** albiemorgan88@gmail.com
- **Plan:** Hobby (active)
- **Usage:** Not at limit

### Semrush ⚠️
- **Status:** Token present but API endpoint returned "query type not found"
- **Action needed:** Check API endpoint or token format

### PageSpeed API ✅
- **Status:** Working (tested bluecanvas.ai)
- **Performance score:** 0.74 (74%)
- **Usage:** Not tracked

### Apollo ✅  
- **Status:** Valid, healthy, logged in
- **Health check:** Passed
- **Usage:** Not shown in health endpoint

### Supabase (Ardmore) ✅
- **Status:** Valid access token
- **Projects:** 2 projects found
- **Main project (smhzgkvatlwbaxlyhnbm):** ACTIVE_HEALTHY
- **UKTJ project (vaqiwnndzrackucgeffs):** ⚠️ INACTIVE

### Stripe ✅
- **Status:** Valid test token
- **Balance:** £0 available, £11.93 pending
- **Test mode:** Active
- **Usage:** Not applicable

### Anthropic ✅
- **Status:** Working via OpenClaw
- **Model:** claude-sonnet-4-20250514
- **Cache hit rate:** 93%

## Action Items
1. **URGENT:** Investigate Webflow API - all 4 tokens failing
2. Check Semrush API endpoint/token format
3. Consider reactivating UKTJ Supabase project if needed
4. Monitor Ahrefs token (couldn't test - endpoint returned HTML)

Generated: 2026-03-21 08:11 GMT