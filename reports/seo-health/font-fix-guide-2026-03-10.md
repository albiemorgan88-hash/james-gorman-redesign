# Blue Canvas Font Bloat Fix Guide
**Date:** 2026-03-10 | **Site:** bluecanvas.ai (Webflow)

## Problem
The site loads **6 font families** (5 Google Fonts + 1 Adobe TypeKit) on every page, adding ~500KB+ of font files and blocking render. This is a major contributor to:
- **LCP: 11.8s** (should be <2.5s)
- **Mobile PageSpeed: 45/100**

## Current Font Inventory

### Google Fonts (via WebFont.load)
| # | Family | Weights Loaded | Used? |
|---|--------|---------------|-------|
| 1 | **Inter** | 300, 400, 500, 600, 700 | ✅ Primary body/UI font |
| 2 | **Urbanist** | 300, 400, 500, 600, 700 | ✅ Headings/display |
| 3 | Merriweather | 300, 300i, 400, 400i, 700, 700i, 900, 900i | ❌ Likely template leftover |
| 4 | Vollkorn | 400, 400i, 700, 700i | ❌ Likely template leftover |
| 5 | Source Serif 4 | 300, 400, 500, 600, 700 | ❌ Likely template leftover |

### Adobe TypeKit (kit: zup4rat)
| # | Family | Weights | Used? |
|---|--------|---------|-------|
| 6 | **the-seasons** | 400, 400i, 700, 700i | ❌ Decorative serif — not brand-appropriate |

## Recommendation: Keep 2 Fonts

**Keep:**
1. **Inter** — Clean modern sans-serif. Perfect for body text, UI, buttons.
2. **Urbanist** — Geometric sans with personality. Great for headings/hero text.

**Remove:**
- Merriweather (traditional serif — doesn't match modern AI brand)
- Vollkorn (old-style serif — template leftover)
- Source Serif 4 (transitional serif — redundant)
- the-seasons via TypeKit (decorative italic serif — not brand-aligned)

## Webflow API Limitation

**The Webflow API v2 does NOT support modifying custom code or font settings.** These changes must be made manually in the Webflow Designer.

## Step-by-Step Fix Instructions (Webflow Designer)

### Step 1: Remove unused Google Fonts

1. Open **Webflow Designer** → bluecanvas.ai project
2. Go to **Project Settings** → **Fonts** tab
3. You'll see all Google Fonts listed
4. **Remove** these fonts:
   - Merriweather
   - Vollkorn
   - Source Serif 4
5. **Keep only:**
   - Inter
   - Urbanist
6. Save settings

### Step 2: Remove Adobe TypeKit

1. Go to **Project Settings** → **Custom Code** tab
2. In the **Head Code** section, find and **delete** these two lines:
   ```html
   <script src="https://use.typekit.net/zup4rat.js" type="text/javascript"></script>
   <script type="text/javascript">try{Typekit.load();}catch(e){}</script>
   ```
3. Save settings

### Step 3: Trim Google Font weights (optional but recommended)

After removing the extra families, also reduce **Inter** and **Urbanist** to only the weights actually used:

- **Inter:** Keep 400, 500, 600, 700 (drop 300 unless used for light text)
- **Urbanist:** Keep 400, 500, 600, 700 (drop 300 unless used)

This is done in **Project Settings → Fonts** — click each font to configure weights.

### Step 4: Check for "the-seasons" usage in styles

1. In the Designer, use **Cmd+F** or search styles for `the-seasons`
2. If any element uses it, switch to **Inter** or **Urbanist**
3. Do the same for Merriweather, Vollkorn, and Source Serif 4

### Step 5: Add font-display: swap

1. Go to **Project Settings → Custom Code → Head Code**
2. Add this CSS to prevent invisible text during font load:
   ```html
   <style>
   @font-face { font-display: swap !important; }
   </style>
   ```

### Step 6: Publish and test

1. Click **Publish** in Webflow
2. Run PageSpeed Insights: https://pagespeed.web.dev/analysis?url=https://www.bluecanvas.ai
3. Target: Mobile score **70+** (from 45), LCP under **4s** (from 11.8s)

## Expected Impact

| Metric | Before | Expected After |
|--------|--------|---------------|
| Font families | 6 | 2 |
| Font requests | ~15+ HTTP requests | ~4-5 |
| Font payload | ~500KB+ | ~100-150KB |
| Render blocking | High (WebFont.load + TypeKit) | Minimal |
| Mobile PageSpeed | 45/100 | 65-75/100 |
| LCP | 11.8s | 3-5s |

## Additional Performance Notes

The site also loads:
- Google Tag Manager / GA4 (`G-4V6VBC391D`)
- Microsoft Clarity (`vf82niitxf`)
- Webflow's WebFont.js loader (1.6.26) — this is render-blocking

After removing extra fonts, the WebFont.js loader will be lighter. For further gains, consider switching from `WebFont.load()` to a simple `<link>` with `display=swap`:
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Urbanist:wght@400;500;600;700&display=swap" rel="stylesheet">
```
This would replace the WebFont.js script entirely (saves ~16KB + eliminates a blocking script).

---

# UK Trade Jobs Deploy Status

**Date:** 2026-03-10
**Commit:** `080e39f` — `feat: add redirect /careers/plumber → /careers/how-to-become-a-plumber`

- ✅ Git committed and pushed to `origin/main`
- ✅ Deployed to Vercel production via CLI (`vercel --prod`)
- ✅ Live at: https://uktradejobs.com
- ✅ Redirect verified: `/careers/plumber` → `308` → `/careers/how-to-become-a-plumber`

Note: GitHub webhook didn't auto-trigger Vercel deploy; deployed manually via `vercel --prod`. May want to check the Vercel ↔ GitHub integration settings.
