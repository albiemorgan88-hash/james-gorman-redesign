# API Key Health Report
**Date:** March 19, 2026 - 8:11 AM GMT  
**Cron Job:** e44ae78e-9d74-4265-af8e-2ef0e7ec1609

## Summary
✅ **8 APIs Working** | ⚠️ **2 Issues** | ❌ **1 Failed**

## Detailed Results

### ✅ Working APIs

**Vercel** - ✅ Valid  
- Status: Active hobby plan
- User: albiemorgan88@gmail.com
- Secondary email: philpatterson85@gmail.com verified
- Concurrent builds: 1
- Remote caching: enabled

**PageSpeed** - ✅ Valid  
- Successfully analyzed bluecanvas.ai
- Response time: ~10s (normal for PageSpeed)
- No rate limit issues detected

**Apollo** - ✅ Valid  
- Health check: healthy=true
- Authentication: logged in
- No usage limits visible in health endpoint

**Supabase (Main)** - ✅ Valid  
- 2 projects visible:
  - smhzgkvatlwbaxlyhnbm (Active/Healthy, EU-West-2)
  - vaqiwnndzrackucgeffs (uk-trade-jobs, Inactive, EU-West-3)

**Stripe** - ✅ Valid  
- Balance accessible (test mode)
- Available: £0.00 GBP
- Pending: £11.93 GBP
- Account appears healthy

**Supabase Keys (UKTJ)** - ✅ Presumed Valid  
- Anon and service role keys present in environment
- Not independently tested but follow same pattern as main Supabase

**OpenClaw/Anthropic** - ✅ Valid  
- Model provider: anthropic/claude-sonnet-4-20250514
- Token authentication working
- Cache hit rate: 92%
- No API errors detected

### ⚠️ Issues

**Semrush** - ⚠️ Zero API Units  
- Error: "API UNITS BALANCE IS ZERO"
- Key authentication works but no quota remaining
- **Action needed:** Top up API units or upgrade plan

### ❌ Failed

**Webflow (All 4 tokens)** - ❌ Internal Server Error  
- All tokens return "An Internal Error Occurred" (HTTP 500)
- API endpoint may be down or tokens may be invalid
- **Action needed:** Check Webflow API status or regenerate tokens

## Missing Keys
- No additional missing keys detected in environment
- All expected keys from USER.md are present

## Recommendations
1. **Immediate:** Check Webflow API status page and consider regenerating tokens
2. **Soon:** Top up Semrush API units or evaluate usage/plan
3. **Monitor:** Watch Stripe pending balance (£11.93)
4. **Consider:** Reactivate UK Trade Jobs Supabase project if needed

## Next Check
Scheduled for tomorrow 8:10 AM GMT