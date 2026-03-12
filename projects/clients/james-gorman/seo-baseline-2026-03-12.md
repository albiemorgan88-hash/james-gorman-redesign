# James Gorman Property — SEO Baseline Report
**Date:** 12 March 2026
**Domain:** jamesgormanproperty.com
**Prepared by:** Phil Patterson, Blue Canvas

---

## 1. Executive Summary

James Gorman Property has a solid local brand presence in Derry with excellent Trustpilot reviews and strong social media engagement. However, the website has **severe technical SEO issues** that are preventing it from reaching its organic search potential.

**Critical findings:**
- **All page URLs use generic "blank-X" slugs** (e.g., `/blank-3` for Lettings, `/blank-5` for Services) — this is the single biggest SEO issue
- **Mobile performance score of 36/100** with a 44.2s Largest Contentful Paint
- **No Google Business Profile detected** — a massive gap for a local estate agent
- **Zero citation/directory presence** (Yell, Thomson, Yelp, FreeIndex — none found)
- **No blog or content strategy** — zero long-tail keyword capture
- **No OG image set** — social shares look unprofessional
- **Social media links in footer still point to Wix defaults** (Instagram/Wix, Facebook/WixStudio, etc.)

**The opportunity is significant.** Competitors are established but most have basic, dated websites. With proper technical fixes, a Google Business Profile, citation building, and targeted content, James Gorman Property can achieve strong local search visibility within 3–6 months.

---

## 2. Current Performance

### Domain Overview
| Metric | Value |
|--------|-------|
| Platform | Wix |
| SSL Certificate | ✅ Let's Encrypt (expires 25 May 2026) |
| HTTPS | ✅ Active with HSTS |
| www Redirect | ✅ Non-www redirects to www |
| HTTP → HTTPS | ✅ Redirect in place |
| Indexed Pages | ~10 (Brave search) |
| Schema Markup | WebSite only (minimal) |
| Trustpilot Reviews | Multiple 5-star reviews |

### Ahrefs Data
*Note: Preliminary estimates below. Full backlink and keyword data will be included in the next report once Google Search Console access is granted and our initial crawl is complete.*

| Metric | Estimated Value |
|--------|----------------|
| Domain Rating (DR) | ~5–10 (new domain, minimal backlink profile) |
| Referring Domains | Very low (<10 estimated) |
| Organic Keywords | Minimal — site ranking primarily for branded terms |
| Organic Traffic | Low — estimated <50 visits/month from organic |
| Backlinks | Few — PropertyPal, PropertyNews, HomesNI, Trustpilot, social profiles |

### PageSpeed Insights

| Metric | Mobile | Desktop |
|--------|--------|---------|
| **Performance** | **36** 🔴 | **85** 🟢 |
| Accessibility | 100 🟢 | 100 🟢 |
| Best Practices | 100 🟢 | 96 🟢 |
| SEO | 100 🟢 | 100 🟢 |

#### Core Web Vitals — Mobile 🔴
| Metric | Value | Rating |
|--------|-------|--------|
| Largest Contentful Paint (LCP) | **44.2s** | 🔴 Critical |
| First Contentful Paint (FCP) | 3.6s | 🔴 Poor |
| Total Blocking Time (TBT) | 1,250ms | 🔴 Poor |
| Cumulative Layout Shift (CLS) | 0.003 | 🟢 Good |
| Speed Index | 7.7s | 🔴 Poor |
| Time to Interactive | 44.2s | 🔴 Critical |
| Max Potential FID | 550ms | 🔴 Poor |

#### Core Web Vitals — Desktop 🟢
| Metric | Value | Rating |
|--------|-------|--------|
| LCP | 1.2s | 🟢 Good |
| FCP | 0.9s | 🟢 Good |
| TBT | 250ms | 🟡 Needs Work |
| CLS | 0.001 | 🟢 Good |
| Speed Index | 1.4s | 🟢 Good |

#### Key Performance Issues
- **JavaScript execution time:** 2.8s (mobile) / 1.4s (desktop)
- **Multiple page redirects:** Adding 780ms on mobile
- **Main thread work:** 4.9s on mobile
- **Document request latency:** 150ms+ on mobile
- **LCP element not discoverable** by browser preloader

---

## 3. Technical Audit Findings

### 🔴 Critical Issues

#### URL Structure — ALL pages use "blank-X" slugs
This is the most damaging technical issue. Every page on the site has a non-descriptive URL:

| Page | Current URL | Recommended URL |
|------|------------|----------------|
| Sales | `/blank` | `/sales` or `/sell-your-home-derry` |
| Lettings | `/blank-3` | `/lettings` or `/lettings-derry` |
| Our Story | `/blank-4` | `/about` or `/about-james-gorman-property` |
| Services | `/blank-5` | `/services` |
| Terms & Conditions | `/blank-6` | `/terms-and-conditions` |
| Contact Us | `/blank-7` | `/contact` |
| Search Homes | `/blank-10` | `/properties` or `/search-homes` |
| Meadowbank Court | `/blank-11` | `/meadowbank-court-derry` |
| Valuation | `/blank-12` | `/free-property-valuation-derry` |
| Merchants View | `/blank-15` | `/merchants-view-derry` |
| Selling Your Home | `/items-1/i-am-a-title-02` | `/sell-your-home` |
| Privacy Policy | `/blank-14` | `/privacy-policy` |

**Impact:** Search engines use URLs as a ranking signal. Generic "blank" URLs provide zero keyword relevance and look unprofessional in search results.

Search engines use the words in your URL to understand what a page is about. A URL like /blank-3 tells Google nothing, while /lettings-derry immediately signals relevance.

#### No Google Business Profile (GBP) Found
A search for "James Gorman Property Derry" returns no Google Maps / Knowledge Panel result. For a local estate agent, this is a **critical gap**. GBP drives:
- Map Pack visibility (the top 3 map results)
- Click-to-call and directions
- Review aggregation visible in SERPs
- Local trust signals

#### No Blog / Content Pages
The site has zero blog posts or informational content. This means:
- No long-tail keyword capture ("best areas to buy in Derry", "property market Derry 2026", "first time buyer Derry")
- No internal linking opportunities
- No content to share on social media
- No topical authority building

#### Social Media Links Point to Wix Defaults
The footer social media links include default Wix template links:
- Instagram → `instagram.com/wix/`
- Facebook → `facebook.com/WixStudio`
- Twitter → `twitter.com/WixStudio`
- LinkedIn → `linkedin.com/company/wix-com`
- YouTube → `youtube.com/user/Wix`
- TikTok → `tiktok.com/@wix`

These need to be replaced with James Gorman Property's actual social profiles immediately.

### 🟡 Important Issues

#### Missing OG Image
No `og:image` meta tag is set. When the site is shared on WhatsApp, Facebook, LinkedIn, or Twitter, it shows no preview image. This significantly reduces click-through rates from social shares.

#### Title Tag Contains "property" as Standalone Word
Current: `James Gorman Property | property | Derry, Londonderry, UK`
The pipe-separated "property" is redundant and wastes title tag space.
**Recommended:** `James Gorman Property | Estate Agent in Derry | Sales & Lettings`

#### Minimal Schema Markup
Only `WebSite` schema is present. Missing:
- `RealEstateAgent` or `LocalBusiness` schema
- `Organization` schema with logo, address, phone
- `BreadcrumbList` schema
- `Review` / `AggregateRating` schema (Trustpilot reviews)

#### No Sitemap Optimisation
Sitemap includes all "blank-X" URLs and dynamic item sitemaps that may contain outdated listings. Sitemap should be cleaned up after URL restructuring.

#### Robots.txt — AhrefsBot Crawl-Delayed
The robots.txt includes `Crawl-delay: 10` for AhrefsBot. While not critical, this slows Ahrefs data collection for our monitoring.

### 🟢 What's Working Well

- **SSL/HTTPS:** Properly configured with HSTS
- **www/non-www redirect:** Correctly consolidating to www
- **HTTP to HTTPS redirect:** Working
- **Mobile viewport:** Set correctly
- **Meta descriptions:** Present and descriptive on key pages
- **Canonical tags:** Present
- **Accessibility score:** 100/100
- **Trustpilot reviews:** Excellent social proof already embedded on site

---

## 4. Competitor Landscape

### Top Competitors — "Estate Agent Derry"

| # | Company | Domain | Est. | Key Strengths |
|---|---------|--------|------|---------------|
| 1 | **Daniel Henry** | danielhenry.co.uk | 1968 | 50+ years reputation, strong domain age, multi-location (Derry, Limavady, Coleraine) |
| 2 | **EO'C Estate Agents** | eocestateagents.com | — | Strong local presence, active in NW area, mortgage services |
| 3 | **Pauline Elliott** | paulineelliottestateagents.com | — | New development focus, strong Culmore Road area presence |
| 4 | **Robert Quigley** | robertquigley.co.uk | — | Established Derry brand, professional dedicated team |
| 5 | **Montgomery & McCleery** | montgomerymccleery.com | 100+ yrs | Heritage brand, "over 100 years" serving community |
| 6 | **City Property** | citypropertyestateagents.com | — | Simple, comprehensive sales & lettings service |
| 7 | **Robert Ferris** | robertferris.co.uk | 30+ yrs | Three decades of trust in local market |
| 8 | **John V Arthur** | johnvarthur.com | — | Residential & commercial, broad coverage |
| 9 | **Oakland Estate Agents** | oaklandestateagents.co.uk | — | Active in Derry sales, letting, and valuations |

### What Competitors Are Doing That James Isn't

1. **Proper URL structures** — Competitors use descriptive slugs like `/property-valuations`, `/about-eddie-oconnor`, `/mortgage-services`
2. **Blog/content sections** — Several competitors publish area guides and market updates
3. **Google Business Profiles** — Established agents have optimised GBP listings with reviews
4. **Directory citations** — Listed on Yell, Thomson Local, FreeIndex, etc.
5. **Local SEO pages** — Area-specific landing pages targeting BT postcodes
6. **Property portal presence** — While James IS on PropertyPal and PropertyNews, competitors often have better optimised profiles
7. **Multi-location coverage** — Daniel Henry covers Derry, Limavady, and Coleraine with dedicated pages

### James's Competitive Advantages

- **Modern, social-first marketing approach** — Strong Instagram, TikTok, and social presence that older agents lack
- **Excellent Trustpilot reviews** — Genuine, detailed reviews with real stories
- **Younger brand** — More relatable to first-time buyers and digital-native sellers
- **Merchants View exclusive** — Exclusive access to a premium new build development
- **Personal touch** — "Work directly alongside our Managing Director" proposition

---

## 5. Local SEO Status

### Google Business Profile
| Check | Status |
|-------|--------|
| GBP Listing | 🔴 **Not found** |
| Google Maps Presence | 🔴 Not visible |
| Knowledge Panel | 🔴 Not appearing |
| Google Reviews | 🔴 None (no GBP) |

**Priority: CRITICAL.** Setting up and optimising a GBP is the single highest-ROI action for a local estate agent.

*Note: GBP verification can take several days. Google typically verifies via postcard (mailed to your business address) or video verification (a short video walkthrough of your premises). We recommend starting this process immediately.*

### Citations & Directories
| Directory | Listed? |
|-----------|---------|
| Yell.com | 🔴 No |
| Thomson Local | 🔴 No |
| Yelp | 🔴 No |
| FreeIndex | 🔴 No |
| 192.com | 🔴 No |
| Scoot | 🔴 No |
| Hotfrog | 🔴 No |
| **PropertyPal** | 🟢 **Yes** |
| **PropertyNews** | 🟢 **Yes** |
| **HomesNI** | 🟢 **Yes** |
| **Trustpilot** | 🟢 **Yes** |
| **Facebook** | 🟢 **Yes** |
| **Instagram** | 🟢 **Yes** |
| **TikTok** | 🟢 **Yes** |
| **LinkedIn** | 🟢 **Yes** |

### NAP Consistency (Name, Address, Phone)
| Source | Name | Address | Phone |
|--------|------|---------|-------|
| Website | James Gorman Property | — (not displayed) | 028 7161 0402 / 07786 910 768 |
| PropertyPal | James Gorman Property | 12 Clearwater, Derry/Londonderry, BT47 6BE | — |
| Facebook | James Gorman Property | — | — |

**Issues:**
- Full business address not displayed on website
- NAP not consistent across platforms (address missing from most)
- No structured LocalBusiness schema markup
- Email display issue: footer shows `Sales@jamesgormanproperty.com` and `Lettings@jamesgormaproperty.com` (note: typo in "jamesgormaproperty" — missing 'n')

---

## 6. Quick Wins (Prioritised)

### 🔴 Week 1 — Immediate Impact

| # | Action | Impact | Effort |
|---|--------|--------|--------|
| 1 | **Set up Google Business Profile** | 🔴 Critical | 30 mins |
| 2 | **Fix footer social links** (remove Wix defaults, add real profiles) | 🔴 High | 10 mins |
| 3 | **Fix email typo** (`jamesgormaproperty.com` → `jamesgormanproperty.com`) | 🔴 High | 5 mins |
| 4 | **Add OG image** (branded social sharing image) | 🟡 Medium | 15 mins |
| 5 | **Add LocalBusiness schema markup** | 🟡 Medium | 20 mins |

### 🟡 Week 2–3 — URL & Content Fixes

| # | Action | Impact | Effort |
|---|--------|--------|--------|
| 6 | **Rename all page URLs** from blank-X to descriptive slugs | 🔴 Critical | 1–2 hrs (with 301 redirects) |
| 7 | **Optimise homepage title tag** | 🟡 Medium | 5 mins |
| 8 | **Add full business address to website footer** | 🟡 Medium | 10 mins |
| 9 | **Set up Google Search Console** | 🟡 Medium | 15 mins |
| 10 | **Set up Google Analytics (GA4)** | 🟡 Medium | 15 mins |

### 🟢 Week 3–4 — Authority Building

| # | Action | Impact | Effort |
|---|--------|--------|--------|
| 11 | **Submit to 15+ business directories** (Yell, Thomson, FreeIndex, etc.) | 🟡 Medium | 2 hrs |
| 12 | **Create first 3 blog posts** (area guides, market update) | 🟡 Medium | 3–4 hrs |
| 13 | **Add Review schema markup** (aggregate Trustpilot rating) | 🟡 Medium | 30 mins |
| 14 | **Optimise PropertyPal & PropertyNews profiles** | 🟢 Low | 30 mins |
| 15 | **Encourage Google reviews** (once GBP is live) | 🟡 Medium | Ongoing |

### Expected Impact
With these quick wins implemented:
- **GBP setup** → Immediate visibility in local map pack results
- **URL fixes** → Significant improvement in page-level ranking signals
- **Citation building** → Steady climb in local search authority over 4–8 weeks
- **Content creation** → Long-tail traffic growth from month 2 onwards
- **Mobile performance** → Improved engagement metrics (limited by Wix platform constraints)

---

*Report prepared by Blue Canvas | bluecanvas.ai*
*Next report: Friday 20 March 2026*
