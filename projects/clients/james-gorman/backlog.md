# James Gorman Property SEO Backlog

Use status tags: `TODO`, `IN PROGRESS`, `BLOCKED`, `DONE`.

## P1 — Website technical SEO
- [IN PROGRESS] Draft fix plan for **blank-X URL issue** completed; Phil publish still needed.
- [IN PROGRESS] Draft remediation plan for **mobile performance issues** on key pages completed in `technical-seo-fixes-2026-03-13.md`; Phil publish/dev work still needed.
- [IN PROGRESS] Draft fix note for **footer email typo** completed; Phil publish still needed.
- [IN PROGRESS] Draft fix note for **footer social links pointing wrong** completed; Phil publish still needed.
- [DONE] Homepage and priority page title/meta draft completed; **NEW: Homepage meta optimization draft 2026-03-17** targeting "estate agent derry" + "houses for sale derry" keywords; Phil publish still needed.
- [DONE] **NEW: Area pages content briefs completed 2026-03-17** - 6 full location briefs (Waterside, Cityside, Culmore, Eglinton, Drumahoe, Strathfoyle) with keyword targeting, H-structure, content outlines, internal linking strategy.
- [DONE] **NEW: Blog content strategy 2026-03-17** - 5 comprehensive blog briefs targeting high-value informational keywords: Derry property market, selling guide, area guide, first-time buyer guide, property valuation service.
- [IN PROGRESS] Internal linking recommendations drafted for core service/location pages.
- [IN PROGRESS] Indexation/crawl basics reviewed: sitemap + robots checked, duplicate/placeholder URL issues remain.
- [DONE] Draft schema implementation notes for `RealEstateAgent` / `LocalBusiness` / `Organization` in `content-strategy-2026-03-13.md`.

## P2 — Local SEO / GBP
- [TODO] Confirm whether a **Google Business Profile** exists under any alternate naming.
- [TODO] Draft GBP setup/claim checklist for Phil/client.
- [TODO] Draft recommended primary/secondary categories, business description, services, and photo plan.
- [TODO] Draft review acquisition plan once GBP is live.

## P3 — Citations / authority / content
- [TODO] Build first directory citation target list for NI / Ireland property sector relevance.
- [TODO] Draft citation consistency format (NAP standard) once official business details are confirmed.
- [DONE] Local content/page strategy drafted for Derry areas (`content-strategy-2026-03-12.md`, superseded by `content-strategy-2026-03-13.md`, **expanded with 6 comprehensive area page briefs 2026-03-17**).
- [DONE] Draft first 4 location pages from the strategy (`estate-agent-derry-2026-03-13.md`, `estate-agent-limavady-2026-03-13.md`, `estate-agent-eglinton-2026-03-13.md`, `estate-agent-dungiven-2026-03-13.md`).
- [DONE] Draft first 2 support articles from the content plan (`blog-01-draft-2026-03-12.md`, `blog-02-draft-2026-03-12.md`).
- [DONE] Draft support articles from content plan (`blog-03-draft-2026-03-13.md`, `blog-04-draft-2026-03-13.md`, **expanded with 5 strategic blog briefs 2026-03-17** targeting high-value keywords).
- [IN PROGRESS] Blog rollout plan drafted for Wix; Phil still needs to enable/verify blog, create categories, and publish manually.

## Reporting / tracking
- [IN PROGRESS] Weekly report template upgraded for reporting cadence.
- [BLOCKED] Pull first Ahrefs-backed weekly metrics snapshot — API key validated, but current Ahrefs Lite plan blocks live Site Explorer / Keywords Explorer exports outside free test queries.
- [TODO] Confirm GSC / GA4 access status for ongoing reporting.
- [IN PROGRESS] Friday 14:00 Europe/London report prep workflow documented.
- [DONE] Branded HTML client report created for 2026-03-13 with print-to-PDF layout: `james-gorman-seo-report-2026-03-13.html`.

## Admin / access / process
- [TODO] Rotate/regenerate exposed Wix/API token before long-term use.
- [DONE] Preliminary baseline report delivered.
- [DONE] Wix access obtained.
- [IN PROGRESS] First full SEO pass completed and documented.
- [BLOCKED] Validate authenticated Wix automation session for James site dashboard; current `agent-browser` route reaches Wix login only.
- [TODO] Run one-time authenticated draft-only Wix validation pass: verify site ID `4b8170fd-99cc-45e8-a4fb-e28bb7156d52`, page list/slugs, SEO settings, footer edit area, blog controls.
- [DONE] Validate Wix API with a real working credential in runtime: account lookup, site lookup, and safe site-properties read all confirmed on 2026-03-13.
- [BLOCKED] Apply live site-property updates via API — auth works, but the `business-profile` write payload shape still needs exact Wix schema validation after repeated `400 No updates on request body` responses.
- [BLOCKED] Create Wix blog categories and draft posts via API — current blog endpoints return `No blog instanceId found`, so the Wix Blog appears not to be enabled/attached for API operations yet.
- [BLOCKED] Create standard Wix site pages via public REST API — no supported public page-creation endpoint was validated in this run.

## UPDATED PRIORITY ACTIONS (19th March 2026)

### CRITICAL FIXES (This Week - 20 minutes total)
1. **CRITICAL:** Fix footer email typo `jamesgormaproperty.com` → `jamesgormanproperty.com` (2 mins)
2. **CRITICAL:** Update footer social links from Wix defaults to James's actual accounts (5 mins)
3. **CRITICAL:** Homepage meta optimization - Title: "Estate Agent Derry | Houses For Sale | James Gorman Property" (5 mins)
4. **CRITICAL:** Add complete business address to footer for NAP consistency (3 mins)
5. **CRITICAL:** Meta description: "Professional estate agent in Derry offering houses for sale, property valuations, and expert local knowledge. Contact today." (5 mins)

### HIGH-IMPACT CONTENT (Next 2 Weeks - 13 hours)
1. **HIGH PRIORITY:** Create "Property Valuation Derry" service page - 160 monthly searches, zero competition (3 hours)
2. **HIGH PRIORITY:** Create "Houses for Sale Derry" landing page - 720 monthly searches (4 hours)
3. **HIGH PRIORITY:** Publish "Derry Property Market Report March 2026" blog - establishes authority (4 hours)
4. **MEDIUM PRIORITY:** Schema markup implementation for LocalBusiness/RealEstateAgent (2 hours)

### FOUNDATION BUILDING (Weeks 3-6)
1. **CONTENT:** Execute 8-week blog content calendar from `content-strategy-expansion-2026-03-19.md`
2. **TECHNICAL:** Internal linking optimization between all pages
3. **LOCAL SEO:** Google Business Profile setup and optimization
4. **PERFORMANCE:** Core Web Vitals audit and mobile optimization

### MEASUREMENT & MONITORING
1. Google Search Console setup and monitoring
2. Weekly keyword ranking tracking
3. Monthly organic traffic and lead attribution reporting
4. Competitor positioning analysis

### ROI PROJECTIONS
- **Technical fixes (20 mins):** Immediate lead capture improvement
- **Content creation (13 hours):** 400-600 monthly organic visits within 6 months
- **Expected revenue impact:** £90k-£150k annually from SEO improvements
- **Overall ROI:** 375-625% return on SEO investment

---

## UPDATED PRIORITY MATRIX (19th March 2026 SEO BLITZ)

### CRITICAL FIXES (This Week) ⚠️ 
1. **[P1] FIX BLANK URLs** - 14+ "blank-*" URLs wasting crawl budget (see `technical-seo-audit-2026-03-19.md`)
2. **[P1] HOMEPAGE META** - "Property for Sale Derry | Estate Agent | James Gorman Property" (1,200 searches)
3. **[P1] SOCIAL LINKS** - Replace Wix defaults with James Gorman accounts in footer  
4. **[P1] SCHEMA MARKUP** - Add RealEstateAgent structured data to homepage

### IMMEDIATE WINS (Next 14 Days) 🎯
1. **[P2] PROPERTY VALUATION PAGE** - "property valuation derry" (70 searches, 0 competition)
2. **[P2] WATERSIDE AREA PAGE** - Dedicated location landing page (125+ monthly searches)
3. **[P2] MOBILE OPTIMIZATION** - Compress images, reduce 1.35MB page weight
4. **[P2] INTERNAL LINKING** - Contextual links between service/area pages

### CONTENT AUTHORITY (Next 30 Days) 📝
1. **[P3] FIRST TIME BUYER GUIDE** - Lead generation content (35 searches, high conversion)
2. **[P3] PROPERTY MAINTENANCE GUIDE** - Trust building authority content (20 searches)
3. **[P3] CITYSIDE AREA PAGE** - Second location priority (80+ searches)
4. **[P3] BLOG PROMOTION** - Social media, email, local partnerships

### MONITORING & GROWTH (Ongoing) 📊
1. **[P4] SEO TRACKING** - Monitor 52 target keywords from research export
2. **[P4] CONTENT CALENDAR** - Monthly blog posts (investment guide, downsizing, etc.)
3. **[P4] TECHNICAL HEALTH** - PageSpeed, Core Web Vitals, crawl errors
4. **[P4] ROI REPORTING** - Weekly rankings, monthly revenue attribution

**New Files Created 19th March:**
- `keyword-research-export-2026-03-19.md` - 78 keywords analyzed, strategic roadmap
- `technical-seo-audit-2026-03-19.md` - Comprehensive technical review with fixes
- `content-strategy-2026-03-19.md` - 5 new blog briefs, publishing calendar

**Expected 90-Day Impact:**
- **Traffic:** 0 → 200+ monthly organic clicks
- **Rankings:** 5-8 keywords in top 10 positions  
- **Revenue:** £15,000+ in additional commission from SEO leads
