# PageSpeed Audit — bluecanvas.ai
**Date:** 6 March 2026  
**Tool:** Google PageSpeed Insights API (Mobile)

---

## Executive Summary

The site is **critically slow on mobile**. All pages score poorly (41-57/100) with LCP ranging from 6.4s to 12.9s. Google's "good" threshold is ≤2.5s LCP. This is absolutely hurting SEO rankings — Core Web Vitals are a confirmed ranking factor.

The good news: **the fixes are mostly achievable in Webflow today**, and CLS is perfect (0) across all pages.

---

## Page Scores

| Page | Score | LCP | FCP | TBT | CLS | Speed Index |
|------|-------|-----|-----|-----|-----|-------------|
| **Homepage** | 48 | 6.4s | 6.1s | 500ms | 0 | 7.0s |
| **/ai-done-for-you** | 54 | 7.4s | 6.1s | 310ms | 0.031 | 6.5s |
| **/about** | 57 | 12.5s | 6.2s | 110ms | 0.018 | 7.5s |
| **/pricing** | 41 | 12.9s | 8.8s | 600ms | 0 | 9.0s |

**Worst page: /pricing** (41 score, 12.9s LCP, 8.8s FCP)  
**Best page: /about** (57 score, but 12.5s LCP is still terrible)

---

## Root Cause Analysis

### 🔴 Issue #1: Redirect Chain (780ms wasted on EVERY page)
**Impact: HIGH — adds ~780ms to every single page load**

- `bluecanvas.ai` → `www.bluecanvas.ai` redirect
- This 780ms is pure waste — the browser has to make a whole extra round trip

**Fix:** In your DNS provider (Cloudflare/wherever), set the apex domain to resolve directly. In Webflow:
- Go to **Site Settings → Custom Domains**
- Ensure `www.bluecanvas.ai` is the primary and the redirect is server-side (301), not a client-side bounce
- Better yet: if you can make `bluecanvas.ai` the primary (no www), eliminate the redirect entirely
- **Expected LCP improvement: 0.5-0.8s**

---

### 🔴 Issue #2: LCP Image Missing `fetchpriority="high"` 
**Impact: HIGH — directly delays the largest content paint**

The LCP element is the **hero background image**:
```
header.section_hero > div.hero_component > div.hero_background-image-wrapper > img.hero_background-image
```

PageSpeed specifically flags: **"fetchpriority=high should be applied"**

The image IS discoverable in the initial HTML and NOT lazy-loaded (good), but it's not prioritised.

**Fix in Webflow:**
1. Select the hero background image in the Designer
2. Add a custom attribute: `fetchpriority` = `high`
3. Also add: `loading` = `eager` (confirm it's not set to lazy)
4. Consider adding a `<link rel="preload">` in the page's custom `<head>` code:
   ```html
   <link rel="preload" as="image" href="[hero-image-url]" fetchpriority="high">
   ```
5. Make sure the image uses modern format (WebP) and is appropriately sized for mobile (not a 2000px+ image for a phone screen)
- **Expected LCP improvement: 1-2s**

---

### 🔴 Issue #3: Too Many Fonts (11 font files, ~630KB total)
**Impact: HIGH — 11 fonts is excessive, blocks rendering**

Fonts currently loaded:
| Font | Files | Size |
|------|-------|------|
| Merriweather | 2 | 195KB |
| Vollkorn | 2 | 93KB |
| Inter | 1 | 48KB |
| Source Serif 4 | 1 | 51KB |
| Urbanist | 1 | 28KB |
| TypeKit fonts | 3 | ~90KB |
| **Total** | **11** | **~630KB** |

That's **6+ different font families**. This is insane for a small consultancy site.

**Fix in Webflow:**
1. **Reduce to 2 fonts MAX** — one serif (Merriweather OR Vollkorn, not both), one sans-serif (Inter)
2. Go to **Project Settings → Fonts** and remove unused fonts
3. Remove TypeKit integration if those fonts aren't essential
4. For the fonts you keep, ensure `font-display: swap` is set
5. In custom `<head>` code, preconnect to font origins:
   ```html
   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
   <link rel="preconnect" href="https://use.typekit.net" crossorigin>
   ```
- **Expected LCP improvement: 1-2s**

---

### 🟡 Issue #4: Heavy JavaScript (~1.8s execution, 309-441KB unused)
**Impact: MEDIUM-HIGH — main thread blocked for 1.8s**

Breakdown of JS overhead:
| Script | Time | Size |
|--------|------|------|
| Webflow chunk 1 | 629ms | 235KB |
| Webflow main | 387ms | — |
| GSAP (animations) | 365ms | — |
| GA4 (gtag) | 308ms | 149KB |
| Google Ads tag | — | 128KB |

Plus **309-441KB of unused JavaScript** across pages.

**Fixes:**
1. **GSAP animations** — Do you actually need them? If they're subtle hover effects, CSS transitions would be lighter. If you must keep GSAP, load it with `defer` or after the fold
   - In Webflow: Move GSAP script to page-level custom code in `</body>` instead of `<head>`
2. **Google Ads tag** — Only load on pages that need conversion tracking (not every page)
   - Consider loading GA4 + Ads tags after user interaction (delayed loading)
3. **Webflow's JS** — Limited control, but ensure you're not using unused Webflow features (interactions you've deleted still ship JS)
   - In Webflow: Review **Interactions panel** and delete any unused interactions
- **Expected LCP improvement: 0.5-1s** (mainly from deferring render-blocking scripts)

---

### 🟡 Issue #5: Unused CSS (55-57KB)
**Impact: LOW-MEDIUM**

Webflow ships a shared CSS file (~62KB) with styles for the entire site. ~55KB is unused on any given page.

**Fix:** Limited in Webflow — this is a platform limitation. However:
1. Avoid adding custom CSS in embed blocks unless necessary
2. Keep class usage clean (delete unused classes via Webflow's Style Manager)
3. Consider Webflow's "Page-level CSS" if available in your plan
- **Expected impact: 0.2-0.3s**

---

## Quick Wins PJ Can Do TODAY in Webflow

### ⚡ 1. Fix the redirect (15 mins) — Save 780ms
Check DNS and Webflow domain settings. Make sure apex → www isn't doing a slow redirect.

### ⚡ 2. Add fetchpriority="high" to hero image (5 mins) — Save 1-2s
Select hero image → Custom Attributes → Add `fetchpriority` = `high`

### ⚡ 3. Preload hero image (5 mins) — Save 0.5-1s
Add to page `<head>` custom code:
```html
<link rel="preload" as="image" href="YOUR_HERO_IMAGE_URL" fetchpriority="high">
```

### ⚡ 4. Kill unnecessary fonts (20 mins) — Save 1-2s
Go to Project Settings → Fonts. Pick 2 fonts. Delete the rest. Update any elements using deleted fonts.

### ⚡ 5. Defer GSAP to body end (10 mins) — Save 0.3-0.5s
Move GSAP script reference from head to before `</body>` in custom code.

### ⚡ 6. Add font preconnect (2 mins)
Add to site-wide `<head>`:
```html
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
```

---

## Projected Impact

If all quick wins are implemented:

| Metric | Current (Homepage) | Projected | 
|--------|-------------------|-----------|
| LCP | 6.4s | ~2.5-3.5s |
| FCP | 6.1s | ~3-4s |
| Score | 48 | ~65-75 |

To get LCP under 2.5s (Google's "good" threshold), the font consolidation and hero image optimisation are critical. The redirect fix alone won't do it but it's the easiest win.

---

## Desktop Comparison

For reference, desktop scores are typically 20-30 points higher due to faster simulated hardware. But Google uses **mobile scores** for ranking, so mobile is what matters.

---

## Recommendations Priority

1. 🔴 **Fonts** — Biggest bang for buck. Cutting from 6 families to 2 could save 2s+
2. 🔴 **Hero image fetchpriority** — Direct LCP improvement, 5 mins work
3. 🔴 **Redirect fix** — 780ms free improvement
4. 🟡 **GSAP defer** — Easy, helps TBT and TTI
5. 🟡 **Script audit** — Remove unused Webflow interactions
6. 🟢 **GA/Ads delayed loading** — More complex but worthwhile

---

*Report generated by Albie — PageSpeed Insights API v5, mobile strategy*
