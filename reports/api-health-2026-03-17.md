=== API Key Health Check - Tue 17 Mar 2026 08:10:14 GMT ===

## WEBFLOW TOKENS (4/4 FAILED)
❌ WEBFLOW_API_TOKEN: 500 Internal Error - Webflow API issues
❌ WEBFLOW_OPENCLAW_CONSULTANT_TOKEN: 401 Unauthorized - Invalid/expired
❌ WEBFLOW_ZAPIER_CONSULTANT_TOKEN: 401 Unauthorized - Invalid/expired  
❌ WEBFLOW_AI_AGENT_SETUP_TOKEN: 401 Unauthorized - Invalid/expired

## VERCEL
❌ VERCEL_TOKEN: 403 Missing auth token - Key invalid/expired

## SEMRUSH
❌ SEMRUSH_API_KEY: "query type not found" - Endpoint/key issue

## PAGESPEED
❌ PAGESPEED_API_KEY: 429 Quota exceeded - Daily limit hit

## APOLLO
✅ APOLLO_API_KEY: 200 Healthy - Working correctly

## SUPABASE (ARDMORE)  
❌ SUPABASE_ACCESS_TOKEN: 401 Invalid format - Token issue

## STRIPE
❌ STRIPE_SECRET_KEY: 401 Invalid auth format - Key/format issue

## ANTHROPIC
✅ Anthropic: Working via OpenClaw (claude-sonnet-4-20250514)

## SUMMARY
🟢 WORKING: 2/9 services (Apollo, Anthropic)
🔴 FAILED: 7/9 services need immediate attention
⚠️ CRITICAL: All Webflow tokens down, Vercel broken, PageSpeed quota hit

URGENT ACTION NEEDED: Regenerate Webflow tokens, fix Vercel auth, check other service configurations.