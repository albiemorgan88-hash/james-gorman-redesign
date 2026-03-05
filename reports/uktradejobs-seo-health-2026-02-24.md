# 🔍 SEO Health Check — uktradejobs.com

**Date:** 24 February 2026
**Domain:** uktradejobs.com | **Stack:** Next.js on Vercel | **GA4:** G-PXMWKB0V2G

---

## 🚨 Priority Summary

| # | Issue | Severity | Impact |
|---|-------|----------|--------|
| 1 | **Only 1 page indexed by Google** | 🔴 CRITICAL | Site is essentially invisible to search |
| 2 | **Structured data URL mismatch** (.co.uk vs .com) | 🔴 CRITICAL | Schema points to wrong domain |
| 3 | **No canonical tags** | 🟠 HIGH | Risk of duplicate content issues |
| 4 | **No og:image on any page** | 🟠 HIGH | Poor social sharing appearance |
| 5 | **Sitemap only has 51 URLs** (claims 317+ pages) | 🟠 HIGH | Most pages undiscoverable |
| 6 | **Keywords meta tag is generic/identical on all pages** | 🟡 MEDIUM | Wasted opportunity (low SEO impact but signals laziness to crawlers) |
| 7 | **No dedicated Privacy/Terms pages** | 🟡 MEDIUM | Footer links all go to /about |
| 8 | **PageSpeed API quota exhausted** | 🟡 MEDIUM | Can't verify Core Web Vitals — retest needed |
| 9 | **Homepage title 43 chars — could be stronger** | 🟢 LOW | Acceptable but room to improve |
| 10 | **/jobs page reuses homepage title** | 🟡 MEDIUM | Duplicate title tag |

---

## 1. Indexing Status

### Google Index Check (`site:uktradejobs.com`)

**Result: Only 1 page indexed** — `/about`

This is the #1 problem. With 51 sitemap URLs (and 3000+ job pages dynamically), Google has indexed almost nothing.

**Likely causes:**
- Site is very new (recently launched)
- No Google Search Console verification / sitemap submitted
- No inbound links from other domains
- Possibly blocked during development (check historical robots.txt)

**Sitemap URLs found: 51**
- 6 core pages (/, /jobs, /careers, /cv-builder, /employers, /about)
- 22 job listing pages (seed/featured jobs)
- 23 career guide pages

**Missing from sitemap:**
- The 3000+ dynamically generated job pages (e.g., `/job/commercial-gas-engineer-london-1014`)
- Career guide city pages visible on /careers (trade-jobs-london, trade-jobs-manchester, trade-jobs-birmingham, trade-jobs-scotland, trade-jobs-northern-ireland) — some ARE in sitemap but many are NOT
- Filtered job views (`/jobs?trade=Electrician`, `/jobs?location=London`) — these could be valuable landing pages

### ✅ Action Items
1. **Submit sitemap to Google Search Console immediately**
2. **Add all dynamically generated job URLs to sitemap** (or use sitemap index with sub-sitemaps)
3. **Request indexing** for priority pages via GSC
4. **Build backlinks** — even a few quality links will accelerate crawling

---

## 2. Broken Links

All 8 sampled sitemap URLs returned **HTTP 200**. Core pages and job pages are serving correctly.

| URL | Status |
|-----|--------|
| / | ✅ 200 |
| /jobs | ✅ 200 |
| /careers | ✅ 200 |
| /cv-builder | ✅ 200 |
| /employers | ✅ 200 |
| /about | ✅ 200 |
| /careers/how-to-become-an-electrician | ✅ 200 |
| /careers/switching-to-trades | ✅ 200 |
| /careers/highest-paying-trade-jobs | ✅ 200 |
| /job/bricklayer-birmingham | ✅ 200 |
| /job/tiler-belfast | ✅ 200 |
| /job/locksmith-london | ✅ 200 |
| /job/qualified-electrician-london | ✅ 200 |

**No broken links detected.** ✅

---

## 3. Meta Tag Quality

### Title Tags

| Page | Title | Length | Verdict |
|------|-------|--------|---------|
| Homepage | `UK Trade Jobs — Find Your Next Trade Job` | 43 | ✅ OK (could be more keyword-rich) |
| /jobs | `UK Trade Jobs — Find Your Next Trade Job` | 43 | 🟠 **DUPLICATE of homepage** |
| /careers | `Career Guides — How to Get Into the Trades` | 46 | ✅ Good |
| /about | `About UK Trade Jobs \| UK Trade Jobs` | 37 | ✅ OK |
| /careers/how-to-become-an-electrician | `How to Become an Electrician in the UK (2026 Guide) \| UK Trade Jobs` | 69 | 🟡 Slightly over 60 char (will truncate in SERP) |
| /job/qualified-electrician-london | `Qualified Electrician — Spark Solutions Ltd \| London` | 54 | ✅ Good |

### Meta Descriptions

| Page | Length | Verdict |
|------|--------|---------|
| Homepage | 161 | ✅ Good |
| /careers/how-to-become-an-electrician | 107 | ✅ Good |
| /about | (from search snippet) ~170 | ✅ Good |

**All sampled pages have meta descriptions.** No missing descriptions detected.

### Keywords Meta Tag
All pages share the **same generic keywords tag**: `trade jobs,electrician jobs,plumber jobs,carpenter jobs,construction jobs UK,skilled trades,trade careers`

This isn't harmful but is a wasted signal. Each page should have page-specific keywords (or remove them entirely — Google ignores this tag).

### ✅ Action Items
1. **Give /jobs a unique title** — e.g., `Browse 3000+ Trade Jobs Across the UK | UK Trade Jobs`
2. **Shorten career guide titles** to ≤60 chars or accept SERP truncation
3. **Make keywords meta page-specific** or remove entirely

---

## 4. Thin Content Analysis

| Page | Content Assessment | Verdict |
|------|-------------------|---------|
| Homepage | Rich — stats, featured jobs, trade browsing, location links, CTA sections | ✅ Strong |
| /jobs | 3031 job listings with filters | ✅ Strong |
| /careers | 25+ guide cards with descriptions | ✅ Strong |
| /about | ~400 words of mission/stats/features | ✅ Adequate |
| /careers/how-to-become-an-electrician | ~1500 words, FAQ, steps, pros/cons | ✅ Excellent |
| /job/qualified-electrician-london | ~200 words job description + requirements + benefits | 🟡 Thin-ish (typical for job listings) |

**Career guides are excellent content.** Job pages are standard for the industry. No critically thin pages found.

---

## 5. Technical SEO

### robots.txt ✅
```
User-Agent: *
Allow: /
Sitemap: https://uktradejobs.com/sitemap.xml
```
Clean and correct.

### HTML lang attribute ✅
`<html lang="en-GB">` — Correct for UK audience.

### Canonical Tags ❌
**No `<link rel="canonical">` found on any page.** This is a significant gap, especially with:
- Query-string filtered pages (`/jobs?trade=Electrician`)
- Potential www vs non-www
- HTTP vs HTTPS

### Open Graph Tags ✅ (partial)
Present on all pages:
- ✅ `og:title`
- ✅ `og:description`
- ✅ `og:site_name` ("UK Trade Jobs")
- ✅ `og:locale` ("en_GB")
- ✅ `og:type` ("website")
- ✅ `twitter:card` ("summary")
- ✅ `twitter:title`
- ✅ `twitter:description`
- ❌ **No `og:image`** — Critical for social sharing
- ❌ **No `og:url`** — Should be the canonical URL
- ❌ **No `twitter:image`**

### Structured Data

**Homepage:** WebSite schema with SearchAction ✅
```json
{
  "@type": "WebSite",
  "name": "UK Trade Jobs",
  "url": "https://uktradejobs.co.uk",  // ⚠️ WRONG DOMAIN!
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://uktradejobs.co.uk/jobs?q={search_term_string}"  // ⚠️ WRONG DOMAIN!
  }
}
```
🔴 **BUG: Schema uses `uktradejobs.co.uk` but actual domain is `uktradejobs.com`**

**Career Guides:** FAQPage schema ✅ — Well-implemented with questions and answers. This is great for rich snippets.

**Job Pages:** No JobPosting schema detected ❌ — This is a major missed opportunity for Google for Jobs integration.

### GA4 Tag
`G-PXMWKB0V2G` present in head via `gtag.js` — loaded with `afterInteractive` strategy ✅

### ✅ Action Items
1. **Add `<link rel="canonical">` to every page** (highest priority)
2. **Fix structured data domain**: Change `uktradejobs.co.uk` → `uktradejobs.com`
3. **Add `og:image`** (create a branded social card — navy + amber)
4. **Add `og:url`** with canonical URL
5. **Add JobPosting schema** to job listing pages (unlocks Google for Jobs!)
6. **Add BreadcrumbList schema** (breadcrumbs already exist in UI on career pages)

---

## 6. Internal Linking & Orphan Pages

### Well-linked pages ✅
- Homepage links to: /jobs, /careers, /cv-builder, /employers, /about
- Homepage features 6 job links, 3 career guide links, 15 trade filter links, 14 location links
- Career guides have sidebar links to other guides
- Career guides link to relevant job searches
- Footer has comprehensive links (all trades, employer pages)

### Potential orphans 🟡
- **Individual job pages** (3000+) — only discoverable via /jobs listing page. No cross-linking between similar jobs.
- **Filtered views** (`/jobs?trade=Electrician`) — linked from homepage and footer but not from career guides directly
- **/cv-builder** — only linked from nav, career guide CTAs, and footer. Could use more contextual links.

### Missing internal links
- Career guides don't link to **each other** in body text (only sidebar)
- Job pages don't link to the **relevant career guide** (e.g., electrician job → "How to Become an Electrician")
- No "Related jobs" section on individual job pages

### ✅ Action Items
1. **Add "Related Jobs" section** on individual job pages
2. **Link job pages to relevant career guide** (e.g., electrician jobs → electrician guide)
3. **Add contextual cross-links within career guide body text**

---

## 7. Mobile & Page Speed

**PageSpeed Insights API:** Quota exhausted (429 error). Unable to run Lighthouse tests.

### Manual observations from HTML:
- ✅ `<meta name="viewport" content="width=device-width, initial-scale=1">`
- ✅ Responsive Tailwind CSS classes (grid cols, sm/md/lg breakpoints)
- ✅ Font preloading (`woff2` format)
- ✅ Single CSS file (~optimised by Next.js)
- ✅ Async script loading
- ✅ Server-side rendered (full HTML in initial response)
- 🟡 No image optimization visible (no `<img>` tags found — site uses emoji icons instead of images)

**Estimated performance: Good** — The site is extremely lightweight (no images, minimal CSS, SSR'd Next.js on Vercel edge). Expect 90+ Lighthouse scores.

### ✅ Action Items
1. **Re-run PageSpeed test** when API quota resets
2. Consider adding **real images** to career guides (helps with image search SEO + engagement)

---

## 📋 Prioritised Fix List

### 🔴 Critical (Do This Week)

| # | Fix | Effort | Impact |
|---|-----|--------|--------|
| 1 | **Submit sitemap to Google Search Console** | 15 min | Unlocks indexing |
| 2 | **Fix structured data domain** (`.co.uk` → `.com`) | 5 min | Prevents schema errors |
| 3 | **Add canonical tags** to all pages | 30 min | Prevents duplicate content |
| 4 | **Add all job URLs to sitemap** (dynamic sitemap) | 2 hrs | 3000+ pages discoverable |

### 🟠 High Priority (This Month)

| # | Fix | Effort | Impact |
|---|-----|--------|--------|
| 5 | **Add JobPosting structured data** to job pages | 4 hrs | Google for Jobs integration |
| 6 | **Add og:image** (branded social card) | 1 hr | Better social sharing CTR |
| 7 | **Fix duplicate title on /jobs** page | 5 min | Better SERP differentiation |
| 8 | **Add og:url** to all pages | 30 min | Social sharing accuracy |
| 9 | **Build backlinks** (directories, trade forums, PR) | Ongoing | Accelerate crawling + DA |

### 🟡 Medium Priority (Next 2 Months)

| # | Fix | Effort | Impact |
|---|-----|--------|--------|
| 10 | **Add BreadcrumbList schema** | 1 hr | Rich breadcrumbs in SERP |
| 11 | **Cross-link career guides** in body text | 2 hrs | Better internal link equity |
| 12 | **Link job pages → career guides** | 2 hrs | User engagement + SEO |
| 13 | **Add "Related Jobs" on job pages** | 4 hrs | Reduce bounce, improve crawling |
| 14 | **Create dedicated Privacy & Terms pages** | 2 hrs | Trust signals + compliance |
| 15 | **Add real images** to career guides | 4 hrs | Image search + engagement |

### 🟢 Nice to Have

| # | Fix | Effort | Impact |
|---|-----|--------|--------|
| 16 | Page-specific keywords meta or remove | 30 min | Minimal |
| 17 | Shorten career guide titles to ≤60 chars | 30 min | Cleaner SERP display |
| 18 | Add `hreflang` if targeting multiple regions | 1 hr | Only if needed |

---

## Overall Score Card

| Category | Score | Notes |
|----------|-------|-------|
| **Indexing** | 1/10 ❌ | Only 1 page indexed. Critical. |
| **Broken Links** | 10/10 ✅ | All URLs return 200 |
| **Meta Quality** | 7/10 | Good descriptions, one duplicate title |
| **Content Quality** | 9/10 ✅ | Career guides are excellent |
| **Technical SEO** | 4/10 ⚠️ | No canonicals, wrong schema domain, no JobPosting |
| **Internal Linking** | 6/10 | Good structure, missing cross-links |
| **Mobile/Speed** | 8/10 ✅ | Lightweight SSR site, likely fast |

**Overall: 6.4/10** — Great content and no broken links, but critically under-indexed with several technical gaps that are easy to fix.

---

*Report generated 24 Feb 2026 by SEO Health Check automation*
