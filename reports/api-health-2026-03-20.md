# API Key Health Check - 2026-03-20

## Summary
**Status:** Multiple API key issues detected - immediate action required

**Critical Issues:**
- All 4 Webflow tokens: EXPIRED/UNAUTHORIZED 
- Vercel token: EXPIRED/MISSING AUTH
- PageSpeed API: QUOTA EXCEEDED (0 queries/day limit)
- Semrush API: INVALID/BROKEN
- Stripe: AUTH FORMAT ERROR
- Supabase: AUTH FORMAT ERROR

**Working APIs:**
- Apollo: ✅ VALID (healthy=true)
- Anthropic: ✅ VALID (via OpenClaw)

## Detailed Results

### Webflow APIs (4 tokens)
**Status:** ❌ EXPIRED/UNAUTHORIZED
- WEBFLOW_API_TOKEN: "internal_error" 
- WEBFLOW_OPENCLAW_CONSULTANT_TOKEN: "not_authorized"
- WEBFLOW_ZAPIER_CONSULTANT_TOKEN: "not_authorized" 
- WEBFLOW_AI_AGENT_SETUP_TOKEN: "not_authorized"

**Action Required:** All Webflow tokens need regeneration

### Vercel
**Status:** ❌ EXPIRED/MISSING
- Response: "missing authentication token" 
**Action Required:** Generate new Vercel token

### Semrush  
**Status:** ❌ INVALID
- Response: "query type not found"
**Action Required:** Check API format/regenerate key

### PageSpeed
**Status:** ❌ QUOTA EXCEEDED  
- Quota: 0 queries/day limit exceeded
- Project: 583797351490
**Action Required:** Request quota increase or new project

### Apollo
**Status:** ✅ VALID
- healthy=true, is_logged_in=false (expected)

### Supabase
**Status:** ❌ AUTH FORMAT ERROR
- SUPABASE_ACCESS_TOKEN format issue
**Action Required:** Check auth format

### Stripe  
**Status:** ❌ AUTH FORMAT ERROR
- Missing proper Bearer auth format
**Action Required:** Check auth format

### Anthropic
**Status:** ✅ VALID
- Working via OpenClaw (claude-sonnet-4-20250514)
- Cache: 92% hit rate, 581k cached

## Priority Actions
1. **Immediate:** Regenerate all 4 Webflow tokens (site updates blocked)
2. **Immediate:** Fix Vercel token (deployments blocked) 
3. **High:** Request PageSpeed quota increase (SEO monitoring blocked)
4. **Medium:** Fix Semrush API key/format
5. **Low:** Fix Supabase/Stripe auth formats

**Overall Score:** 2/9 APIs working (22%)