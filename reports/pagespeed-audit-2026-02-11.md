# Page Speed & Technical SEO Audit — 2026-02-11

## Response Times (from Mac mini, PST)
| Page | Time | Size |
|------|------|------|
| Homepage | 0.14s | 69KB |
| /ai-consultancy | 0.94s | 59KB |
| /about | 1.03s | 67KB |
| /services | 1.19s | 83KB |
| /blog | 2.13s | 72KB |
| /case-studies | 0.81s | 49KB |

⚠️ /blog is slowest at 2.1s — likely pagination/CMS query overhead.

## 🔴 Critical Issues

### 1. Multiple H1 Tags (Homepage + Services)
- **Homepage:** 3 H1s — "AI-Powered Business Growth", "Accelerating Growth Through Expertise", "AI-Powered Business Growth"
- **Services:** 3 H1s — "Our Services", "Accelerating Growth Through Expertise", "AI-Powered Business Growth"
- **Impact:** Confuses Google about page topic. Should be exactly 1 H1 per page.
- **Fix:** Change duplicate H1s to H2s in Webflow Designer. Designer task.

### 2. Duplicate Content Blocks
The same "Accelerating Growth Through Expertise" + "AI-Powered Business Growth" sections appear on BOTH the homepage AND /services page. This is duplicate content across pages.
- **Fix:** Remove from one page (likely homepage — keep on /services or vice versa). Designer task.

### 3. 17 Potentially Render-Blocking Scripts
20 total scripts, only 3 async, 0 defer. This will tank mobile performance scores.
- **Fix:** Add `defer` attribute to non-critical scripts. Webflow handles most of this, but custom scripts (Clarity, Calendly) should be deferred.

## 🟡 Warnings

### 4. Four Font Families Loaded
Inter, Plus Jakarta Sans, Space Grotesk, Urbanist — all with 5 weights each. That's potentially 20 font files.
- **Impact:** Slows FCP and LCP significantly on mobile.
- **Fix:** Consolidate to 2 fonts max (1 heading + 1 body). Drop unused weights. Designer task.
- **No font-display set** — risk of Flash of Invisible Text (FOIT).

### 5. 39 Images on Homepage
All using lazy loading (good) and mostly SVG/WebP (good). 3 PNGs could be converted to WebP.

### 6. Third-Party Domains (6)
- ajax.googleapis.com (WebFont loader)
- assets.calendly.com
- cdn.prod.website-files.com (Webflow CDN)
- d3e54v103j8qbb.cloudfront.net (Webflow)
- www.clarity.ms
- www.googletagmanager.com

Each domain = DNS lookup + connection. Calendly widget is the heaviest — consider lazy-loading it.

## ✅ What's Good

- **All images have alt text** — 0 missing across all pages
- **Canonical tags** — correct on every page
- **Images mostly WebP/SVG** — modern formats
- **Lazy loading** — implemented across all pages
- **SSL** — valid
- **Schema markup** — 4 JSON-LD blocks live (just deployed)
- **OG/Twitter cards** — properly set

## 🟢 Quick Wins for Designer

1. Fix H1 tags — only 1 per page (change extras to H2)
2. Remove duplicate "Accelerating Growth" section from homepage or services
3. Reduce fonts from 4 to 2 families
4. Add `font-display: swap` to font loading
5. Defer Calendly widget loading (load on scroll or click)
6. Fix typo slug: `/ai-marketing-servies-for-startups` → change to correct spelling

## Slug Typo
- ❌ `/ai-marketing-servies-for-startups` — returns 200 (live page with typo)
- ❌ `/ai-marketing-services-for-startups` — returns 404
- **Fix:** In Designer, change the page slug to the correct spelling. Webflow auto-creates a 301 redirect.

## PageSpeed API
Daily quota exhausted — unable to run Lighthouse programmatically today. Manual test at pagespeed.web.dev recommended. Based on the technical issues above, estimated mobile score: 50-65.
