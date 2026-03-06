# PageSpeed Manual Fixes — bluecanvas.ai
**Date:** 6 March 2026  
**Status:** All fixes require manual Webflow Designer / Site Settings work  
**Why:** The Webflow Data API v2 token doesn't support custom code, registered scripts, or element-level attribute changes. Those endpoints require an OAuth App token (Webflow Apps platform), not a site API token.

---

## ⚡ Fix 1: Add `fetchpriority="high"` to Hero Image (5 mins)
**Impact: HIGH — directly improves LCP by 1-2s**

The hero image already has `loading="eager"` ✅ but is missing `fetchpriority="high"`.

### Steps:
1. Open Webflow Designer → Homepage
2. Select the hero background image (class: `hero_background-image`)
3. In the element settings panel, scroll to **Custom Attributes**
4. Add attribute: `fetchpriority` = `high`
5. Save

### Optional bonus — Add preload in head:
In **Site Settings → Custom Code → Head Code**, add BEFORE existing code:
```html
<link rel="preload" as="image" href="https://cdn.prod.website-files.com/67e4825704e6baf1d5246ef6/699328db84f01f1608d37ab3_mesh-gradient%20(4).avif" fetchpriority="high" type="image/avif">
```

---

## ⚡ Fix 2: Add TypeKit Preconnect (2 mins)
**Impact: MEDIUM — saves ~100-200ms on font loading**

### Current state:
- ✅ `fonts.googleapis.com` preconnect already exists
- ✅ `fonts.gstatic.com` preconnect already exists  
- ❌ `use.typekit.net` preconnect is MISSING

### Steps:
1. Go to **Site Settings → Custom Code → Head Code**
2. Add at the very TOP (before any other custom code):
```html
<link rel="preconnect" href="https://use.typekit.net" crossorigin>
```

---

## ⚡ Fix 3: Remove Duplicate GSAP Scripts (10 mins)
**Impact: HIGH — eliminates ~150KB+ of duplicate JS and reduces TBT by ~365ms**

### Current state (GSAP loaded TWICE!):
1. **Webflow IX2/IX3 built-in** (automatic, at bottom of body):
   - `cdn.prod.website-files.com/gsap/3.14.2/gsap.min.js`
   - `cdn.prod.website-files.com/gsap/3.14.2/ScrollTrigger.min.js`
2. **Custom footer code** (manually added, redundant):
   - `cdnjs.cloudflare.com/ajax/libs/gsap/3.10.4/gsap.min.js`
   - `cdnjs.cloudflare.com/ajax/libs/gsap/3.10.4/ScrollTrigger.min.js`

The custom GSAP (v3.10.4) is used by the counter-up scroll animation script. But Webflow's built-in GSAP (v3.14.2) loads FIRST and provides the same `gsap` and `ScrollTrigger` globals.

### Steps:
1. Go to **Site Settings → Custom Code → Footer Code**
2. Find and **DELETE** these two lines:
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.4/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.4/ScrollTrigger.min.js"></script>
```
3. The counter-up script that uses `ScrollTrigger.create()` will work fine with Webflow's built-in GSAP v3.14.2 (which loads just before the footer custom code)
4. **Test the counter animations** on the homepage after publishing to staging

---

## ⚡ Fix 4: Reduce Fonts from 7 Families to 2 (20 mins)
**Impact: HIGHEST — could save 2s+ on LCP. Currently loading ~630KB of fonts**

### Current fonts loaded:

| Font Family | Source | Variants | Est. Size | Verdict |
|-------------|--------|----------|-----------|---------|
| **Inter** | Google Fonts | 5 weights (300-700) | ~48KB | ✅ KEEP — primary sans-serif |
| **Merriweather** | Google Fonts | 8 weights (300-900 + italic) | ~195KB | ❌ REMOVE |
| **Vollkorn** | Google Fonts | 4 weights (400-700 + italic) | ~93KB | ❌ REMOVE |
| **Source Serif 4** | Google Fonts | 5 weights (300-700) | ~51KB | ❌ REMOVE |
| **Urbanist** | Google Fonts | 5 weights (300-700) | ~28KB | ❌ REMOVE |
| **The Seasons** | TypeKit (Adobe) | 4 variants (400/700 × normal/italic) | ~90KB | ⚠️ CHECK — may be used for headings |
| **WebFont loader** | Google | — | ~12KB | ❌ REMOVE if possible |

### Recommended: Keep 2 fonts
1. **Inter** — sans-serif body text
2. **The Seasons** (TypeKit) — if used for headings/display. If NOT used, remove TypeKit entirely.

### Steps:
1. **Audit which fonts are actually used:**
   - Open Webflow Designer → Style Manager panel
   - Search for each font family name
   - Note which elements use Merriweather, Vollkorn, Source Serif 4, Urbanist
   
2. **Remove unused fonts:**
   - Go to **Project Settings → Fonts** (or **Custom Fonts** tab)
   - Remove Google Fonts you're not keeping
   - This will update the `WebFont.load()` call automatically

3. **Update elements using removed fonts:**
   - Any element using Merriweather/Vollkorn/Source Serif 4/Urbanist → change to Inter or The Seasons
   
4. **If The Seasons is NOT used anywhere:**
   - Go to **Project Settings → Integrations → Adobe Fonts**
   - Remove the TypeKit project ID (`zup4rat`)
   - This eliminates 2 render-blocking scripts (`typekit.net/zup4rat.js` + `Typekit.load()`)

5. **Consider removing WebFont.load() entirely:**
   - If you only keep Inter, you could use `@import` or `<link>` instead of the JavaScript WebFont loader
   - This removes the render-blocking `webfont.js` script (~12KB)

---

## ⚡ Fix 5: Fix Redirect Chain (15 mins)
**Impact: HIGH — saves ~780ms on EVERY page load**

### Current state:
- Both `bluecanvas.ai` and `www.bluecanvas.ai` are configured as custom domains in Webflow
- `bluecanvas.ai` → `www.bluecanvas.ai` redirect adds 780ms

### Option A — DNS-level redirect (Recommended):
If using **Cloudflare**:
1. Log into Cloudflare → bluecanvas.ai zone
2. Check if there's a Page Rule or Redirect Rule for apex → www
3. Ensure the redirect is at the DNS/edge level (301), not relying on Webflow
4. In Webflow **Site Settings → Custom Domains**: keep `www.bluecanvas.ai` as the default/primary domain

### Option B — Remove apex from Webflow:
1. In Webflow **Site Settings → Custom Domains**
2. Consider removing `bluecanvas.ai` (non-www) from Webflow domains
3. Handle the redirect purely at DNS (Cloudflare Page Rule: `bluecanvas.ai/*` → `https://www.bluecanvas.ai/$1` with 301)
4. This way Webflow doesn't handle the redirect at all

### To check current DNS setup:
```bash
dig bluecanvas.ai
dig www.bluecanvas.ai
curl -I -L bluecanvas.ai
```

---

## ⚡ Fix 6: Remove CountUp.js CDN Load (5 mins)
**Impact: LOW-MEDIUM — saves one network request + ~8KB**

### Current state:
Footer custom code loads CountUp from jsDelivr CDN:
```html
<script src="https://cdn.jsdelivr.net/npm/countup@1.8.2/countUp.js"></script>
```

### Options:
- **Quick**: Leave it, it's small
- **Better**: Copy the CountUp code inline into the footer custom code to eliminate the network request
- **Best**: Replace CountUp with a lightweight CSS counter animation or use GSAP's built-in number animation (since GSAP is already loaded)

---

## Priority Order (do these first)

| # | Fix | Time | LCP Savings |
|---|-----|------|-------------|
| 1 | Remove duplicate GSAP | 10 min | ~0.3-0.5s |
| 2 | Add fetchpriority="high" to hero | 5 min | ~1-2s |
| 3 | Reduce fonts to 2 | 20 min | ~1.5-2.5s |
| 4 | Fix redirect chain | 15 min | ~0.5-0.8s |
| 5 | Add TypeKit preconnect | 2 min | ~0.1-0.2s |
| 6 | Remove CountUp CDN | 5 min | ~0.05s |

**Total estimated time: ~1 hour**  
**Projected LCP improvement: 3.5-5.5s (from 6.4s → ~2-3s)**  
**Projected score improvement: 48 → ~70-80**

---

## What the Webflow API CAN'T Do (Confirmed)

| Task | Why API Can't Do It |
|------|-------------------|
| Custom head/footer code | Requires OAuth App token (`custom_code` / `registered_scripts` endpoints), not a site API token |
| Element attributes (fetchpriority) | Designer API only — not available through Data API v2 |
| Font management | Project Settings only — no API endpoint |
| Domain/redirect config | Webflow manages this internally; API only reads domain info |
| Webflow Interactions cleanup | Designer only |

To unlock API-based custom code management, PJ would need to create a Webflow App (OAuth flow) rather than using a site API token. This is probably not worth the effort for these one-time fixes.

---

*Report generated by Albie — all fixes require manual Webflow Designer work*
