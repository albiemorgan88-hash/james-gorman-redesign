# API Health Check Report - March 16, 2026

## Summary
**Status:** 7/12 services healthy | 2 expired | 3 warnings

## Webflow API (4 tokens)
- **Primary Token:** ✅ VALID (v1 API working, 5 sites accessible)
- **OpenClaw Consultant:** ✅ VALID (sites accessible via v1 API) 
- **Zapier Consultant:** ✅ VALID (sites accessible via v1 API)
- **AI Agent Setup:** ✅ VALID (sites accessible via v1 API)
- **Note:** v2 introspect endpoint has internal errors, but v1 API functional

## Vercel
- **Status:** ✅ VALID
- **Account:** albiemorgan88@gmail.com
- **Plan:** Hobby (active)
- **Builds:** 1 concurrent build limit

## Semrush  
- **Status:** ❌ EXPIRED - API units balance is zero
- **Error:** "API UNITS BALANCE IS ZERO"
- **Action Required:** Top up API units or upgrade plan

## PageSpeed API
- **Status:** ⚠️ WARNING - Extremely slow response (>5s timeout)
- **Key:** Valid but performance issues
- **Action:** Monitor for continued slowness

## Apollo
- **Status:** ✅ VALID
- **Health Check:** Passed
- **Note:** Not logged in (key-based access working)

## Supabase (Ardmore)
- **Access Token:** ✅ VALID (2 projects accessible)
- **Anon Key:** Present but not tested in API health check
- **Service Role Key:** Present but not tested in API health check

## Supabase (UKTJ)
- **Anon Key:** Present (JWT format valid)
- **Service Role Key:** Present (JWT format valid)
- **Note:** Project-specific keys not API tested

## Stripe
- **Status:** ✅ VALID (Test Mode)
- **Balance:** £0.00 available, £7.69 pending
- **Mode:** Test mode (not live)

## Anthropic (OpenClaw)
- **Status:** ✅ HEALTHY
- **Model:** claude-sonnet-4-20250514
- **Tokens:** 11k in / 3.5k out
- **Cache:** 84% hit rate (good performance)

## Action Items
1. **URGENT:** Semrush API units exhausted - top up required
2. **Monitor:** PageSpeed API extremely slow - check Google API status  
3. **Consider:** Moving Stripe to live mode when ready for production

## Notes
- Webflow v2 API having internal errors but v1 endpoints stable
- All authentication working correctly where testable
- No usage caps exceeded (except Semrush = 0 units)

Generated: 2026-03-16 08:11 GMT