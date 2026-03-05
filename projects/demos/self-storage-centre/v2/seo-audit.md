# SEO Audit — selfstoragecentres.com
**Prepared by Blue Canvas AI | 14 February 2026**

---

## Overview

| Item | Status |
|------|--------|
| Platform | WordPress 6.9.1 + WooCommerce 9.6.3 |
| SEO Plugin | Yoast SEO (schema detected) |
| Caching | LiteSpeed Cache |
| SSL | ✅ HTTPS |
| Google Rating | ⭐ 4.8 (106 reviews) |

---

## 🔴 Critical Issues

### 1. Broken Title Tag on Personal Storage Page
The personal storage page has a malformed title:
> `Personal Storage Belfast & Lisburn | The SelfThe Self Storage Centre NI`

"The SelfThe Self" — a duplicate/typo in the Yoast title template. This looks unprofessional in Google search results and hurts click-through rate.

### 2. Multiple Internal Pages Return 404
The following pages linked from the navigation return **404 errors**:
- `/self-storage-belfast` → 404
- `/self-storage-lisburn` → 404
- `/box-shop` → 404 (actual URL is `/shop/`)
- `/contact-us` → 404 (actual URL is `/contact/`)
- `/locations-for-residential-use` → 404 (actual URL is `/location-belfast-lisburn/`)

**Impact:** Broken internal links waste crawl budget, confuse users, and leak link equity. Google may flag the site for poor user experience.

### 3. No LocalBusiness Schema Markup
The site uses Yoast's default WebPage/WebSite schema but has **no LocalBusiness, SelfStorage, or Organization schema** with:
- Business name, address, phone numbers
- Opening hours
- Two locations (Belfast + Lisburn)
- Price ranges
- Service areas

This is a massive missed opportunity for local SEO. Competitors with proper LocalBusiness schema will outrank in Google Maps and local packs.

### 4. Missing Location-Specific Landing Pages
There are no dedicated, SEO-optimised pages for:
- "Self storage Belfast"
- "Self storage Lisburn"
- "Self storage Mallusk"
- "Storage units near me Belfast"

These are high-intent search terms. The site relies on a single generic homepage to rank for all locations.

---

## 🟡 Moderate Issues

### 5. Thin Content on Key Pages
- **Personal Storage page** has almost no readable text — just a single sentence: *"Are you moving house, renovating your home, or just need more space at home, we have storage units to suit all situation."*
- **Homepage** content is minimal — mostly UI elements, sliders, and images with little crawlable text.
- Google needs 300+ words of unique, relevant content per page to rank competitively.

### 6. Generic/Weak Meta Descriptions
Homepage meta: *"Looking for self storage options in Belfast & Lisburn? Our secure units come in a range of sizes, friendly staff is always on hand to help"*
- No mention of pricing, unit sizes, or unique selling points
- No call-to-action
- Doesn't mention key services (3PL, pallet storage, box shop)

### 7. Image Optimisation Issues
- Logo and hero images use lazy loading via LiteSpeed but have **base64 placeholder SVGs** as `src` — if JavaScript fails, images don't load at all
- Alt text on key images is generic or missing (e.g., logo alt="The Self Storage Centre" is fine, but slider images have empty alt tags)

### 8. No Blog/Content Strategy for Local SEO
The `/blog/` page exists but there's no evidence of regular, locally-targeted content like:
- "How to choose a storage unit in Belfast"
- "Moving house in Lisburn? Here's your checklist"
- "Business storage vs warehouse rental in Northern Ireland"

### 9. Heavy JavaScript & Render-Blocking Resources
- FontAwesome loaded from external CDN (kit.fontawesome.com)
- Google Fonts loaded externally
- Facebook Pixel, Google Tag Manager, reCAPTCHA all loading on every page
- jQuery still in use (unnecessary weight for a modern site)
- Multiple `litespeed/javascript` deferred scripts — good practice, but the sheer volume adds up

### 10. URL Structure Inconsistencies
Some pages use trailing slashes, some don't. The URL structure is inconsistent:
- `/business-storage/` ✅
- `/personal-storage-belfast-and-lisburn/` (overly long)
- `/industrial-commercial-storage-units/` (doesn't match nav label "Business and Stock Storage")
- `/online-retailers-and-sales-reps/` (doesn't match nav label)

---

## 🟢 What's Working Well

- ✅ HTTPS properly configured
- ✅ Mobile viewport meta tag present
- ✅ Yoast SEO generating basic schema and OG tags
- ✅ Canonical URLs set correctly
- ✅ Google Tag Manager and Facebook Pixel tracking in place
- ✅ 4.8★ Google rating prominently displayed
- ✅ LiteSpeed caching for performance
- ✅ WooCommerce for Box Shop (e-commerce ready)

---

## Quick Wins (What Blue Canvas Would Fix First)

| Fix | Effort | Impact |
|-----|--------|--------|
| Fix broken title tag on Personal Storage page | 5 min | High |
| Set up 301 redirects for all 404 pages | 15 min | High |
| Add LocalBusiness schema for both locations | 1 hour | Very High |
| Create Belfast + Lisburn landing pages | 2 hours | Very High |
| Rewrite meta descriptions with CTAs | 30 min | Medium |
| Add 300+ words of content to thin pages | 2 hours | High |
| Fix image alt tags | 30 min | Medium |

---

*This audit was generated using live crawl data from selfstoragecentres.com on 14 February 2026. For a full technical audit including Core Web Vitals, backlink analysis, and competitor comparison, get in touch.*

**Blue Canvas AI** | bluecanvas.ai
