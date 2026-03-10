# Blue Canvas SEO Health Audit — 10 March 2026

**Site:** bluecanvas.ai (Webflow)
**Ahrefs Health Score:** 70/100 | **PageSpeed Mobile:** 45/100 (down from 56)
**Pages Crawled:** 182 | **Sitemap URLs:** 153 | **Webflow Pages:** 47 (static) + CMS items
**Google Ads Quality Scores:** 1/10

---

## Executive Summary

The site has **serious structural problems** that explain both the low Ahrefs health score and the 1/10 Google Ads quality scores. The three biggest issues:

1. **7 key service pages returning 404** — including `/ai-audit` (your highest-value keyword at 320 monthly volume)
2. **67 of 102 blog posts are orphaned** — not linked from the blog listing page
3. **30 location pages have zero internal links** pointing to them from any main page
4. **PageSpeed mobile is 45/100** with 11.8s LCP — driven by 5 Google Font families + TypeKit loading on every page

---

## CATEGORISED ERRORS

### 404 Errors (7 pages — CRITICAL)

These pages exist in Webflow (have full SEO titles/descriptions) but return HTTP 404:

| URL | SEO Title | Notes |
|-----|-----------|-------|
| `/ai-audit` | AI Audit for Business \| Blue Canvas \| £750 Fixed Price | **KEY SERVICE PAGE — 320 vol keyword "ai audit"** |
| `/ai-for-customer-service` | AI for Customer Service Solutions \| Blue Canvas | Service page |
| `/free-ai-consultation` | Free AI Strategy Call — 30 Min, Zero Obligation | **Lead gen page** |
| `/mentoring-membership` | AI Mentoring Membership \| Blue Canvas - £50/month | Product page |
| `/blue-canvas-academy-for-businesses` | Blue Canvas Academy for Businesses \| AI Team Training | Product page |
| `/blue-canvas-academy-for-individuals` | Blue Canvas Academy AI Training \| £250 | Product page |
| `/ai-implementation-automation` | AI Implementation & Automation Services \| Blue Canvas | Service page |

**Root cause:** These pages exist at `/lp/ai-audit`, `/lp/free-ai-consultation` etc. (the `/lp/` versions return 200). The base-path versions are either in draft, unpublished, or duplicates without folder config. This means:
- Any internal/external links to the non-`/lp/` URLs are broken
- Google may be indexing both paths, or the broken ones
- The sitemap correctly lists the `/lp/` versions

### Missing/Bad Meta Tags (14 pages)

**Missing SEO Title (6):**
- `detail_team`, `detail_testimonials`, `detail_clients`, `detail_faq-new`, `detail_faq`, `detail_sku`

**Missing SEO Description (9):**
- `detail_team`, `detail_testimonials`, `detail_clients`, `detail_faq-new`, `detail_faq`, `order-confirmation`, `detail_category`, `detail_product`, `detail_sku`

**"Consultix" Template Titles Still Present (5):**
- `order-confirmation` — "Consultix - Webflow Ecommerce Website Template"
- `detail_category` — "Consultix - Webflow Ecommerce Website Template"
- `detail_product` — "Consultix - Webflow Ecommerce Website Template"
- `detail_career-details` — "Consultix - Webflow Ecommerce Website Template"
- `detail_team-details` — "Consultix - Webflow Ecommerce Website Template"

### Missing OG Tags (35+ pages)

**Every static Webflow page except the homepage and ai-consultancy is missing OG title/description/image.** This affects social sharing and could impact Ahrefs scoring. Key pages without OG tags:
- `/blog`, `/pricing`, `/case-studies`, `/about`, `/ai-done-for-you`
- `/ai-audit`, `/free-ai-consultation`, `/mentoring-membership`
- All `/lp/` landing pages
- All CMS template pages

**Homepage and /ai-consultancy DO have OG tags ✅** — with proper og:image set.

### Stale/Duplicate Pages (5 old pages)

| Page | Status | Action |
|------|--------|--------|
| `/old-home` | 301 redirect | ✅ Already redirecting |
| `/about-old` | 301 redirect | ✅ Already redirecting |
| `/blog-old` | 301 redirect | ✅ Already redirecting |
| `/services-old` | 301 redirect | ✅ Already redirecting |
| `/case-studies-old` | 301 redirect | ✅ Already redirecting |

These are handled correctly with redirects. **Consider deleting from Webflow to clean up.**

### Other 404s

| URL | Status | Notes |
|-----|--------|-------|
| `/style-guide` | 404 | Non-critical, but should either publish or remove from Webflow |

### Exposed Utility Pages

These are publicly accessible and crawlable:
- `/checkout` (200) — Webflow e-commerce checkout
- `/paypal-checkout` (200) — PayPal checkout page
- `/order-confirmation` (200) — With "Consultix" template title
- `/401` (200) — Password reset page

**Action:** Exclude from sitemap, add `noindex` meta tag.

---

## ORPHAN PAGES (Critical — 97+ pages)

### 67 Orphaned Blog Posts

Only **36 of 102** blog posts in the sitemap are linked from the `/blog` listing page. **67 blog posts have no navigation path** — they exist in the sitemap and may get indexed, but users and crawlers can't find them through site navigation.

Sample orphaned posts (full list = 67):
- `/blog/agentic-ai` | `/blog/agentic-ai-use-cases`
- `/blog/ai-business-coaching` | `/blog/ai-corporate-coaching`
- `/blog/ai-data-security` | `/blog/ai-developments-in-2025`
- `/blog/ai-marketing` | `/blog/ai-northern-ireland`
- `/blog/building-autonomous-agents` | `/blog/can-the-uk-become-an-ai-superpower`
- `/blog/generating-marketing-content-with-ai` | `/blog/getting-started-with-ai`
- `/blog/how-to-scale-your-business-with-ai` | `/blog/integrating-ai-into-healthcare`
- `/blog/sovereign-ai` | `/blog/training-staff-on-ai`
- ...and 51 more

**Root cause:** Blog listing page likely uses Webflow CMS pagination or filtering that only shows recent/featured posts.

### 30 Orphaned Location Pages

All 30 location pages (`/locations/ai-consultancy-*`) have **zero internal links** from any main page (homepage, about, ai-consultancy, pricing). They exist only in the sitemap.

Cities covered: Belfast, Birmingham, Bradford, Bristol, Cambridge, Cardiff, Coventry, Derby, Donegal, Dublin, Edinburgh, Glasgow, Hull, Leeds, Leicester, Liverpool, London, Londonderry, Manchester, Newcastle, Nottingham, Oxford, Plymouth, Portsmouth, Sheffield, Southampton, Stoke-on-Trent, Swansea, Wolverhampton, York.

### 1 Ghost Blog Post

`/blog/ai-for-estate-agents` is linked from the blog listing page but **NOT in the sitemap** — may be set to noindex or excluded.

---

## WARNINGS SUMMARY (174 from Ahrefs)

Based on the audit data, the 174 warnings likely break down as:

| Category | Est. Count | Details |
|----------|-----------|---------|
| Missing OG tags | ~35 | All static pages except homepage/ai-consultancy |
| Missing/short meta descriptions | ~15 | Detail/template pages + some CMS items |
| Low word count / thin pages | ~30 | Location pages (template-generated), detail pages |
| Missing H1 or multiple H1s | ~5-10 | Template/detail pages |
| Missing image alt text | ~20+ | Needs per-page crawl to confirm |
| Internal links (orphan warnings) | ~40 | Blog posts + location pages with 0 inbound |
| Redirect chains | ~5 | Old pages redirecting |
| Missing canonical | ~5-10 | Template pages |
| Duplicate titles/descriptions | ~10 | CMS template pages sharing same meta |
| Mixed content / HTTP links | ~5 | Possible in older blog content |

---

## PAGE SPEED ANALYSIS

### Mobile Score: 45/100 (Critical)

| Metric | Value | Score | Target |
|--------|-------|-------|--------|
| **LCP (Largest Contentful Paint)** | **11.8s** | 0/100 | <2.5s |
| **FCP (First Contentful Paint)** | **6.5s** | 2/100 | <1.8s |
| **Speed Index** | **8.0s** | 21/100 | <3.4s |
| **Total Blocking Time** | **500ms** | 58/100 | <200ms |
| **CLS** | **0** | 100/100 | <0.1 ✅ |
| **Time to Interactive** | **12.2s** | 15/100 | <3.8s |

### Root Causes

1. **5 Google Font families loaded on every page:** Merriweather, Vollkorn, Inter, Source Serif 4, Urbanist — PLUS Adobe TypeKit (`zup4rat.js`). This is **insane** for a site that probably uses 2 fonts max.
2. **Unused JavaScript:** 2,110ms of savings available from removing unused JS
3. **Unused CSS:** 320ms of savings available
4. **WebFont.js loader:** Synchronous font loading blocking render
5. **Calendly widget CSS** loaded on homepage (may not be needed on every page)

---

## INTERNAL LINKING CRISIS

### Homepage Links To Only 5 Pages:
- `/about`, `/ai-done-for-you`, `/blog`, `/case-studies`, `/pricing`

### NOT Linked From Homepage:
- `/ai-consultancy` ❌ (KEY SERVICE PAGE)
- `/lead-generation-ai` ❌
- `/ai-sales-training` ❌
- `/bespoke-ai-training-solutions` ❌
- `/ai-marketing-services-for-startups` ❌
- `/using-ai-to-win-jobs` ❌
- `/locations/*` ❌ (all 30)
- `/lp/*` ❌ (all 7 landing pages)
- Any blog posts ❌

### Key Service Pages Link To Same 5 Nav Pages Only
`/ai-consultancy`, `/pricing`, `/about` all link to the same 5 nav pages. No cross-linking between services, no links to blog content, no links to case studies from service pages.

---

## PRIORITISED FIX PLAN

## CRITICAL (Fix Today) 🔴

1. **Fix 7 × 404 service pages** — Either:
   - Set up 301 redirects from `/ai-audit` → `/lp/ai-audit` (etc.) for all 7 pages
   - OR publish the base-path pages and redirect the `/lp/` versions
   - **Priority:** `/ai-audit` first (320 vol keyword), then `/free-ai-consultation` (lead gen)
   - ⚙️ **Webflow API:** Can set up redirects via Webflow dashboard (not API)
   - ⚙️ **PJ action required:** Add 301 redirects in Webflow Site Settings → Redirects

2. **Add homepage links to key service pages** — The homepage must link to:
   - `/ai-consultancy` (main service)
   - `/pricing` (already linked ✅)
   - `/lp/ai-audit` (highest-value service)
   - `/lp/free-ai-consultation` (lead gen)
   - ⚙️ **PJ action required:** Webflow Designer edit (can't do via API)

3. **Fix 5 "Consultix" template titles** — Replace with Blue Canvas branded titles:
   - ⚙️ **Webflow API: YES** — Can update via `PUT /sites/{site_id}/pages/{page_id}` with proper `seo.title`

## HIGH (Fix This Week) 🟠

4. **Fix orphaned blog posts (67 posts)** — Update blog listing to show all posts:
   - In Webflow CMS, check blog collection list — likely limited to showing only recent/featured
   - Add pagination or "load more" to show all 102 posts
   - Add category filtering so all posts are reachable
   - ⚙️ **PJ action required:** Webflow Designer (collection list settings)

5. **Add OG tags to all key pages** — At minimum:
   - `/blog`, `/pricing`, `/case-studies`, `/about`, `/ai-done-for-you`
   - All `/lp/` landing pages
   - ⚙️ **Webflow API: YES** — Use `PUT /sites/{site_id}/pages/{page_id}` with `openGraph.title`, `openGraph.description`

6. **Link to location pages** — Add a "Locations we serve" section or footer links to:
   - `/ai-consultancy` page (link to all 30 locations)
   - Homepage footer (top 10 locations)
   - ⚙️ **PJ action required:** Webflow Designer

7. **Fix PageSpeed — Remove unused fonts:**
   - Audit which fonts are actually used (likely just Inter + 1 serif)
   - Remove Merriweather, Vollkorn, Source Serif 4, Urbanist if unused
   - Consider removing TypeKit if redundant
   - Switch from WebFont.js to `<link rel="preload">` for remaining fonts
   - Add `font-display: swap` to all font declarations
   - **Expected improvement:** 3-5s reduction in LCP/FCP
   - ⚙️ **PJ action required:** Webflow Designer (font settings + custom code)

8. **Fix missing SEO titles/descriptions (15 pages):**
   - 6 missing titles + 9 missing descriptions on detail/template pages
   - ⚙️ **Webflow API: YES** — Batch update via API

9. **Exclude utility pages from indexing:**
   - `/checkout`, `/paypal-checkout`, `/order-confirmation`, `/401`
   - Add `noindex` or exclude from sitemap in Webflow
   - ⚙️ **PJ action required:** Webflow page settings → "Exclude from sitemap"

## MEDIUM (Fix When Possible) 🟡

10. **Remove/clean up old pages:**
    - `/style-guide` (404), `/style-guide-old`, `/change-log`, `/license`
    - Old pages with redirects can be deleted from Webflow after confirming redirects are in site-level settings
    - ⚙️ **PJ action required:** Webflow page deletion

11. **Cross-link service pages:**
    - Each service page should link to 2-3 related blog posts
    - Each service page should link to 2-3 case studies
    - Blog posts should link back to relevant service pages
    - ⚙️ **Webflow API: Partially** — CMS blog posts can be updated via API; static pages need Designer

12. **Fix `/blog/ai-for-estate-agents` sitemap exclusion:**
    - Page exists and is linked from blog listing but not in sitemap
    - Check if accidentally set to "Exclude from sitemap" in Webflow

13. **Add schema markup to service/product pages:**
    - Homepage has LocalBusiness + Organization + FAQ schema ✅
    - Service pages need Service schema
    - Blog posts need Article schema (may already have via CMS template)
    - ⚙️ **PJ action required:** Custom code in Webflow

14. **Reduce unused JavaScript (2.1s savings):**
    - Audit third-party scripts (Calendly, analytics, etc.)
    - Lazy-load Calendly widget (only on pages with booking CTAs)
    - Defer non-critical JS

---

## WEBFLOW API FIXABLE ITEMS (Quick Wins)

These can be fixed programmatically without PJ touching the Designer:

| Fix | API Endpoint | Pages Affected |
|-----|-------------|----------------|
| Replace "Consultix" titles | `PUT /pages/{id}` | 5 pages |
| Add missing SEO titles | `PUT /pages/{id}` | 6 pages |
| Add missing SEO descriptions | `PUT /pages/{id}` | 9 pages |
| Add OG tags to key pages | `PUT /pages/{id}` | 35+ pages |
| Update CMS blog posts (internal links) | `PATCH /items/{id}` | Blog posts |

**⚠️ Remember: Do NOT publish. Stage only — PJ reviews and publishes.**

---

## SUPPLEMENTARY AUDITS

### UK Trade Jobs — Broken Outbound Links

UKTJ (uktradejobs.com) has **minimal external links** — the homepage only links externally to Google Tag Manager. The career guide pages link to:
- `https://www.findapprenticeship.service.gov.uk/` — External (gov.uk)
- Internal cross-links between career guides

**Note:** The "5 broken outbound links" from Ahrefs couldn't be verified without Ahrefs API access (Lite plan doesn't support broken-backlinks endpoint). These are likely on specific career guide pages linking to external resources (training providers, certification bodies, government sites) that have since changed URLs. **Recommend:** Log into Ahrefs dashboard → UKTJ project → Site Audit → Broken Outbound Links to get the exact list.

Also found: `/careers/plumber` returns 404 (correct URL is `/careers/how-to-become-a-plumber`). Check for any old internal links using short paths.

### openclawconsultant.co.uk — Missing OG Tags

**All 7 pages are missing `og:image`:**

| Page | og:title | og:description | og:image | og:url |
|------|----------|---------------|----------|--------|
| `/` (homepage) | ✅ | ✅ | ❌ | ❌ |
| `/about` | ✅ | ✅ | ❌ | ✅ |
| `/pricing` | ✅ | ✅ | ❌ | ❌ |
| `/blog` | ✅ (generic) | ✅ (generic) | ❌ | ❌ |
| `/contact` | ✅ (generic) | ✅ (generic) | ❌ | ❌ |
| `/services` | ✅ | ✅ | ❌ | ✅ |
| `/faq` | ✅ | ✅ | ❌ | ✅ |

**Fix:** Add `og:image` to all pages. Also:
- `/blog` and `/contact` use the generic homepage OG title/description — need page-specific OG
- Missing `og:url` on homepage, pricing, blog, contact

**Note:** This is a Vercel-hosted site (not Webflow), so fixes need to be made in the source code, not via Webflow API.

---

## IMPACT ON GOOGLE ADS QUALITY SCORE

The 1/10 quality scores are directly caused by:

1. **Landing page experience = Poor** — 404s on key landing pages, 11.8s LCP
2. **Ad relevance** — If ads point to `/ai-audit` (404) instead of `/lp/ai-audit`
3. **Expected CTR** — Poor site structure means Google sees low authority

**Fix sequence for Ads:**
1. Ensure all ad landing page URLs use the working `/lp/` paths
2. Fix PageSpeed (fonts = biggest win)
3. Improve landing page content quality (more specific, more trust signals)

---

## NEXT STEPS

1. **Today:** Fix 404s (redirects or URL updates in ads), fix Consultix titles via API
2. **This week:** OG tags via API, blog listing fix, font cleanup, location page linking
3. **Ongoing:** Internal linking strategy, content refresh for thin pages, PageSpeed optimisation

---

*Generated by Albie | SEO Fix Tuesday | 10 March 2026*
*Data sources: Webflow API, PageSpeed Insights API, manual crawl (153 URLs), Ahrefs dashboard data*
*Ahrefs API note: Site Audit and Broken Backlinks endpoints require higher than Lite plan*
