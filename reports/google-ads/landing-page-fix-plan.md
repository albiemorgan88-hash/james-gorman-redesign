# Blue Canvas Landing Page Fix Plan — Google Ads Quality Score
**Date:** 2026-03-10 | **Current QS:** 1/10 on multiple keywords | **Site:** bluecanvas.ai (Webflow)

---

## 1. Speed Fixes (Webflow Designer)

**Fonts — cut from 7 to 2:**
- **KEEP:** Inter (body), Source Serif 4 (headings)
- **CUT:** Merriweather, Vollkorn, Urbanist, plus Typekit (`zup4rat.js`)
- In Webflow Designer: remove unused font families from project settings → Fonts
- Delete the Typekit embed from Project Settings → Custom Code → Head

**visibility:hidden fix:**
- Current code: `.hero_component [data-animate="fade-up"], .hero_component [data-animate="fade-in"], .button_subtext, .logo-hero_content` all set to `visibility: hidden !important` until Webflow IX3 JS loads
- **Fix:** In Webflow Designer, set initial states of hero animations to `opacity: 0` instead of `visibility: hidden`. This way content is in the DOM for crawlers and paints immediately on interaction-ready
- Alternative: remove hero entrance animations entirely — they're killing LCP for zero conversion value

**Images:**
- Hero/OG image is already .webp ✓
- Audit all below-fold images: add `loading="lazy"` via Webflow's native lazy load toggle
- Ensure hero image has explicit width/height attributes (prevents layout shift)

**Render-blocking scripts:**
- `webfont.js` (Google WebFont loader) — **DELETE**. Use `<link>` with `font-display: swap` instead (Webflow does this natively when you add Google Fonts via project settings, not custom code)
- `typekit.js` — **DELETE** (cutting those fonts anyway)
- Move GTM/Clarity to fire after page load or use `defer`
- Total render-blocking scripts removed: 3 (webfont.js, typekit.js, w-mod-js inline)

**Expected impact:** LCP from 12.6s → target <2.5s

---

## 2. Content Fixes (Webflow API or Designer)

**Title tag:**
- Current: `AI Consultancy Northern Ireland | Blue Canvas`
- Change to: `AI Consultant Northern Ireland | Blue Canvas AI`

**Hero H1:**
- Current: `AI Consultancy Grows Your Business`
- Change to: `AI Consultant for Small Business Growth`

**Hero subheading:**
- Current: mentions "UK businesses and professionals"
- Change to: `Your AI consultant in Northern Ireland. We help small businesses harness AI — from a free AI audit to full implementation.`

**Keyword placement (natural insertions):**
- "AI consultant" — H1, first body paragraph, FAQ answer #6 (replace "AI consultancies" → "AI consultant")
- "AI for small business" — hero subhead, "What We Do" intro paragraph, pricing section intro
- "AI audit" — already used ✓ but add to H1 area CTA: `Book Your Free AI Audit`
- "small business" — add to meta description, hero, services intro (currently says "SME" — spell it out)

**Inline form above the fold:**
- Add a visible 3-field form (Name, Email, Phone) directly below the hero CTA text
- Label: `Get Your Free AI Audit` with a submit button
- Keep the modal as secondary CTA, but the inline form is the primary conversion path
- This ensures Googlebot sees a clear conversion action on page crawl

---

## 3. Dedicated Landing Pages (Build New)

### `/ai-consultant`
- **H1:** `Hire an AI Consultant — Northern Ireland & UK`
- **Body:** What an AI consultant does, Phil's credentials, 3 client results, process steps
- **CTA form:** inline, "Book a Free Call with Your AI Consultant"
- **No navigation bar** — minimal distractions, fast load

### `/ai-for-small-business`
- **H1:** `AI for Small Business — Practical Solutions That Pay for Themselves`
- **Body:** Common small business AI use cases (lead gen, automation, customer service), pricing from £250, ROI stats
- **CTA form:** inline, "See What AI Can Do for Your Business"
- **Include:** 2-3 testimonials from SME clients specifically

### `/ai-audit`
- **H1:** `AI Audit — Find Where AI Saves You Time and Money`
- **Body:** What the audit covers, deliverables (roadmap doc), timeline (1-2 weeks), price (£750 or free consultation first)
- **CTA form:** inline, "Book Your AI Audit — Free Consultation First"
- **Include:** sample audit output screenshot or summary

### All landing pages:
- **Fonts:** Inter + Source Serif 4 only, loaded via `<link>` with `font-display: swap`
- **No animations**, no Typekit, no WebFont loader
- **Images:** max 2, compressed WebP, lazy-loaded below fold
- **Scripts:** GA4 + Clarity only, both deferred
- **Target:** LCP < 2.0s, total page weight < 500KB
- **Build as:** Webflow static pages (not CMS) for maximum control

---

## Priority Order

| # | Task | Impact | Effort |
|---|------|--------|--------|
| 1 | Kill 5 fonts + webfont.js + typekit.js | 🔴 High | 15 min |
| 2 | Fix visibility:hidden on hero | 🔴 High | 10 min |
| 3 | Add inline form above fold | 🔴 High | 30 min |
| 4 | Update H1 + title + meta to match keywords | 🔴 High | 15 min |
| 5 | Build `/ai-consultant` landing page | 🟡 Medium | 2 hrs |
| 6 | Build `/ai-audit` landing page | 🟡 Medium | 2 hrs |
| 7 | Build `/ai-for-small-business` landing page | 🟡 Medium | 2 hrs |
| 8 | Defer GTM/Clarity scripts | 🟢 Low | 10 min |

**Do items 1-4 first — they fix the homepage and should lift QS from 1 → 5+ within one Google Ads crawl cycle (typically 3-7 days).**
