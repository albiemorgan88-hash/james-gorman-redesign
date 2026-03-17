# James Gorman Property - SEO Changelog

## 17th March 2026 - Technical SEO Push Attempt

### Attempted Tasks

#### Task 1: Homepage Meta Update via Wix API
**Target Updates:**
- Title: "Estate Agent Derry | James Gorman Property"  
- Meta Description: "Professional estate agent in Derry offering houses for sale, property valuations, and expert local knowledge. Contact James Gorman Property today."

**API Endpoints Tested:**
- `PUT https://www.wixapis.com/site-properties/v4/properties` → 404 Not Found
- `GET https://www.wixapis.com/site-properties/v4/properties` → "MetaSiteId was not found on request"
- `GET https://www.wixapis.com/seo/v1/tags` → No response
- `POST https://www.wixapis.com/seo/v1/seo-settings` → No response

**Status:** ❌ FAILED - API endpoints returning 404 or "site not found" errors

#### Task 2: Create 6 Area Pages via Blog API
**Target Posts:**
1. "Properties in Waterside, Derry" 
2. "Properties in Cityside, Derry"
3. "Properties in Culmore, Derry" 
4. "Properties in Eglinton"
5. "Properties in Drumahoe, Derry"
6. "Properties in Strathfoyle, Derry"

**API Endpoints Tested:**
- `GET https://www.wixapis.com/blog/v3/posts` → Empty response `{"message":"","details":{}}`
- `GET https://www.wixapis.com/blog/v3/categories` → Empty response
- `POST https://www.wixapis.com/blog/v3/draft-posts` → "internal error"

**Status:** ❌ FAILED - Blog API returning internal errors and empty responses

### Root Cause Analysis

The Wix API integration is not working due to one or more of the following issues:

1. **Authentication Issues:** The API key may not have the correct permissions for this site
2. **Site Configuration:** The site may not be properly configured for API access
3. **Blog Setup:** The blog feature may not be enabled/configured on this Wix site
4. **API Version:** The endpoints may have changed or require different authentication headers

### Content Ready for Manual Implementation

All content has been prepared and is ready for manual implementation via Wix dashboard:

#### Homepage Meta (Ready to Copy/Paste)
```
Title: Estate Agent Derry | James Gorman Property
Meta Description: Professional estate agent in Derry offering houses for sale, property valuations, and expert local knowledge. Contact James Gorman Property today.
```

#### Area Pages Content (Complete HTML)
- ✅ `/content-to-push/waterside-derry-page.html` (6,181 chars)
- ✅ `/content-to-push/cityside-derry-page.html` (6,710 chars)  
- ✅ `/content-to-push/culmore-derry-page.html` (7,406 chars)
- ✅ `/content-to-push/eglinton-properties-page.html` (8,453 chars)
- ✅ `/content-to-push/drumahoe-derry-page.html` (8,267 chars)
- ✅ `/content-to-push/strathfoyle-derry-page.html` (8,575 chars)

Each page is 600-750 words covering:
- Local area information
- Schools and amenities  
- Transport links
- Property types available
- Why choose this area
- Clear CTA to contact James

### Recommended Manual Implementation Steps

**Immediate (Today):**
1. Log into Wix dashboard for jamesgormanproperty.com
2. Update homepage SEO settings:
   - Title: "Estate Agent Derry | James Gorman Property"
   - Description: [from above]
3. Enable blog if not already active
4. Create the 6 area pages as blog posts using the HTML content

**Technical Follow-up:**
1. Investigate Wix API authentication requirements
2. Check if site needs API access enabled in dashboard
3. Test with simpler API calls first
4. Consider alternative content management approach

### Impact Assessment

**If Manually Implemented:**
- Homepage optimization should improve rankings for "estate agent derry" within 4-6 weeks
- 6 area pages will capture long-tail searches like "properties waterside derry"
- Estimated traffic increase: 50-100 monthly organic visits
- Lead generation potential: 5-10 additional enquiries per month

**Current Status:** Ready for manual implementation - all content prepared and optimized.

---

## Next Steps

1. **Phil to implement manually via Wix dashboard** (30 minutes)
2. **Monitor in GSC** for indexing over next 1-2 weeks  
3. **Track ranking improvements** for target keywords
4. **Fix API integration** for future automation

**Files Ready:**
- Homepage meta: `/homepage-meta-draft.md`
- Area pages: `/content-to-push/*.html` (6 files)
- This changelog: `/seo-changelog.md`

---

## 17th March 2026 - 19:40 GMT - AREA PAGES PUBLISHED ✅

### Successfully Published 6 Area Pages via Wix Blog API

**All 6 area pages pushed to James Gorman Property blog successfully using the proven working pattern:**

1. **✅ Waterside, Derry** - Post ID: `8b451c12-5806-4f12-95bd-6a89b2ce5c47`
   - Published: 17 Mar 2026, 19:36 GMT
   - Content: Victorian properties, River Foyle location, schools, transport, pricing £80k-£250k+

2. **✅ Cityside, Derry** - Post ID: `0c332085-63ef-423e-91af-aaf628ae335c`  
   - Published: 17 Mar 2026, 19:37 GMT
   - Content: Historic city centre, Georgian/Victorian properties, cultural landmarks, pricing £60k-£200k+

3. **✅ Culmore, Derry** - Post ID: `e809af73-e700-4d95-906b-465138c0b5c6`
   - Published: 17 Mar 2026, 19:38 GMT
   - Content: Modern family estates, Lough Foyle views, excellent schools, pricing £140k-£250k

4. **✅ Eglinton, Derry** - Post ID: `7ac8b9d9-7276-41da-a3a5-60768fa295a5`
   - Published: 17 Mar 2026, 19:39 GMT  
   - Content: Village charm, period cottages, Airport proximity, pricing £120k-£300k+

5. **✅ Drumahoe, Derry** - Post ID: `9a19e0a3-f47f-45e1-b401-92d87095efd7`
   - Published: 17 Mar 2026, 19:40 GMT
   - Content: Contemporary developments, family-friendly design, pricing £160k-£280k

6. **✅ Strathfoyle, Derry** - Post ID: `c5012382-2722-4cb2-9707-5d4803897a2d`
   - Published: 17 Mar 2026, 19:40 GMT
   - Content: Affordable entry point, nature reserve access, diverse housing, pricing £80k-£200k

### API Success Pattern Used:
```bash
# Create draft  
curl -X POST "https://www.wixapis.com/blog/v3/draft-posts" \
  -H "Authorization: $WIX_API_KEY" \
  -H "wix-site-id: 4b8170fd-99cc-45e8-a4fb-e28bb7156d52" \
  -H "Content-Type: application/json" \
  -d '{"draftPost": {"title": "...", "memberId": "f3b674df-ae78-41ec-a299-1fd0ca0dc0f8", "richContent": {"nodes": [...]}}}'

# Publish
curl -X POST "https://www.wixapis.com/blog/v3/draft-posts/{id}/publish" \
  -H "Authorization: $WIX_API_KEY" \
  -H "wix-site-id: 4b8170fd-99cc-45e8-a4fb-e28bb7156d52"
```

### Technical Notes:
- **API Working:** Draft creation and publishing endpoints both functional
- **Delays Added:** 5 second delays between posts to avoid rate limits  
- **Content Structure:** Used proper rich content format with unique node IDs
- **Member ID:** Confirmed working with f3b674df-ae78-41ec-a299-1fd0ca0dc0f8
- **All posts:** Include FAQ sections, local pricing, contact CTAs

### SEO Impact:
- **6 new pages** targeting location-specific searches
- **Long-tail keywords:** "properties for sale in [area] derry"  
- **Local SEO boost:** Each area covered comprehensively
- **Internal linking:** Cross-references between areas
- **Content depth:** 600-750 words per page as planned

**Status: COMPLETE** - All area pages now live on James Gorman Property blog.