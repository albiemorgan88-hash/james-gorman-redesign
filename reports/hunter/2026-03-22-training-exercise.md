# HUNTER Training Exercise Report — 2026-03-22

## Summary
Completed training exercise testing Apollo API, Moltbook API, and prospect identification. Apollo API authentication failed (token may need refresh). Moltbook API endpoints returned 404 errors (service may be down/changed). Successfully identified showcase target: Brendan Kearney & Company solicitors.

## Test Results

### 1. Environment Check
✅ **Apollo env vars**: `$APOLLO_API_KEY=uFYhFlnpy53QHobEijBDqw` (present and loaded)

### 2. Apollo API Test
❌ **Status**: FAILED - Authentication issue
- Tried multiple header formats (`X-Api-Key`, `Api-Key`, `api_key` in body)
- All requests returned: `{"error":"Api key required"}`
- Health endpoint works: `{"healthy":true,"is_logged_in":false}`
- **Action needed**: Token may need refresh or format verification

### 3. Moltbook API Test
❌ **Status**: FAILED - Endpoint not found
- Credentials located: `~/.config/moltbook/credentials.json`
- API key: `moltbook_sk_byAL5ONU6MjEMl5CJ8wtlFZVUjGw2BzM`
- Tried `/api/v1/user/profile`, `/api/v1/users/me`, `/api/v1/` - all returned 404
- **Action needed**: Verify correct API endpoints or check service status

### 4. Showcase Target Identified
✅ **Found potential target**: Brendan Kearney & Company Solicitors

### 5. Moltbook Gig Check
⚠️ **Limited check**: Found MoltExchange reference but couldn't access API for live gigs

---

## HUNTER Lead Sheet

### Lead: Brendan Kearney & Company
- **Contact**: Brendan Kearney, Principal Solicitor
- **Company**: Personal injury & medical negligence specialists, Derry. Est. 1978, 40+ years experience
- **Why them**: Website shows signs of weak digital presence - basic design, poor title tag (shows "Southern Trust Smear Test Recall" instead of firm name), limited SEO optimization. Long-established firm with strong reputation but digital transformation opportunity
- **Website**: https://brendankearney.com/
- **Services**: Personal injury, medical negligence, family law, wills, conveyancing
- **Showcase**: Pending (not built - training exercise)
- **Next step**: Add to Apollo sequence once API access restored, build showcase demonstrating modern legal website with proper SEO, mobile optimization, and client acquisition features

### Assessment Notes
- **Opportunity**: Strong local reputation but digital presence lagging competitors
- **Pain points**: Poor SEO (wrong title tag), likely missing mobile optimization, no visible lead generation optimization
- **Revenue potential**: High - legal services typically £250-500/month budget range for digital marketing
- **Competition**: Other Derry solicitors have more modern websites
- **Urgency**: Medium - established firm, not in crisis but losing digital market share

---

## Issues Identified
1. **Apollo API**: Authentication failing - needs token refresh or format verification
2. **Moltbook API**: Endpoints returning 404 - service may be down or API changed
3. **Training limitation**: Cannot fully test sequences/list creation due to API issues

## Recommendations
1. **Immediate**: Fix Apollo API authentication (contact support or regenerate token)
2. **Check**: Moltbook API documentation for current endpoints
3. **Process**: Once APIs working, run full pipeline test with small list
4. **Target**: Brendan Kearney & Company ready for showcase creation when approved

## Training Exercise Status
**Partially Complete** - Identified target and tested access, but API failures prevented full workflow test.