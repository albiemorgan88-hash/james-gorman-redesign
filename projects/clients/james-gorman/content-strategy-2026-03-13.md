# James Gorman Property — Content Strategy
**Date:** 2026-03-13  
**Status:** Draft only

## Goal
Build a clean local SEO structure that gives James Gorman Property an actual chance to rank for:
- estate agent derry
- estate agent limavady
- estate agent eglinton
- estate agent dungiven

## What the live search results say
- **Derry:** competitive and brand-heavy. Need a strong location hub plus support content.
- **Limavady:** competitors win with dedicated branch/location pages.
- **Eglinton:** winnable with a good page because the SERP is mixed and weaker.
- **Dungiven:** P. McDermott owns the local signal, so James needs a much better relevance layer.

## 1) Priority pages to create

### P1 — Estate Agent Derry
**Slug:** `/estate-agent-derry`  
**Primary target:** estate agent derry  
**Secondary targets:** estate agent londonderry, property valuation derry, letting agent derry

**Why it matters:** this is the main commercial keyword and should become the core location hub.

### P1 — Estate Agent Limavady
**Slug:** `/estate-agent-limavady`  
**Primary target:** estate agent limavady

**Why it matters:** Daniel Henry is winning with a dedicated Limavady page. James needs the same structural asset.

### P1 — Estate Agent Eglinton
**Slug:** `/estate-agent-eglinton`  
**Primary target:** estate agent eglinton

**Why it matters:** this is the cleanest early-win opportunity.

### P1 — Estate Agent Dungiven
**Slug:** `/estate-agent-dungiven`  
**Primary target:** estate agent dungiven

**Why it matters:** P. McDermott is dominating because the site is tightly aligned to Dungiven. James needs a page with proper local context and valuation intent.

## 2) Service pages to improve now
Existing pages should be cleaned up and published under proper slugs.

- `/sales-derry`
- `/lettings-derry`
- `/free-property-valuation-derry`
- `/contact-james-gorman-property`
- `/about-james-gorman-property`
- `/estate-agent-services-derry`
- `/property-search-derry`

## 3) Recommended support articles
These are practical, search-relevant, and naturally support the location pages.

### Highest priority
1. **How to Choose the Right Estate Agent in Derry**  
   Supports: `/estate-agent-derry`
2. **Thinking of Selling in Limavady? Start With a Proper Valuation**  
   Supports: `/estate-agent-limavady`
3. **Buying in Eglinton: What to Know About Schools, Commute and Local Demand**  
   Supports: `/estate-agent-eglinton`
4. **Selling a Home in Dungiven: 7 Mistakes That Slow Down a Sale**  
   Supports: `/estate-agent-dungiven`
5. **What Affects Property Value in Derry, Limavady, Eglinton and Dungiven?**  
   Supports all four location pages
6. **Landlord Checklist for Letting a Property in Derry and the North West**  
   Supports: `/lettings-derry`

## 4) Internal linking plan

### Homepage
Add a visible “Areas We Cover” block linking to:
- `/estate-agent-derry`
- `/estate-agent-limavady`
- `/estate-agent-eglinton`
- `/estate-agent-dungiven`

Also link prominently to:
- `/sales-derry`
- `/lettings-derry`
- `/free-property-valuation-derry`
- `/property-search-derry`
- `/contact-james-gorman-property`

### Sales page
Link to:
- `/estate-agent-derry`
- `/estate-agent-limavady`
- `/estate-agent-eglinton`
- `/estate-agent-dungiven`
- `/free-property-valuation-derry`

### Lettings page
Link to:
- `/estate-agent-derry`
- `/estate-agent-limavady`
- `/estate-agent-dungiven`
- `/contact-james-gorman-property`

### Valuation page
Link to:
- `/sales-derry`
- all four location pages
- `/contact-james-gorman-property`

### Blog posts
Each article should link to:
- its relevant location page
- one core service page
- the valuation page
- the contact page where natural

## 5) Schema recommendations

### A) LocalBusiness / RealEstateAgent schema
Use on homepage and contact page.

```json
{
  "@context": "https://schema.org",
  "@type": ["RealEstateAgent", "LocalBusiness"],
  "name": "James Gorman Property",
  "url": "https://www.jamesgormanproperty.com/",
  "telephone": "+44 28 7161 0402",
  "email": "james@jamesgormanproperty.com",
  "areaServed": [
    "Derry/Londonderry",
    "Limavady",
    "Eglinton",
    "Dungiven"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressRegion": "County Londonderry",
    "addressCountry": "GB"
  },
  "sameAs": [
    "https://www.facebook.com/profile.php?id=61559028705019",
    "https://www.instagram.com/james_gorman_property/",
    "https://www.linkedin.com/in/james-gorman-8b293084/",
    "https://www.tiktok.com/@james.gorman.property"
  ]
}
```

### B) Service schema
Use on sales and lettings pages with `serviceType` values such as:
- Residential property sales
- Lettings
- Property valuations
- Property management

### C) FAQ schema
Add to location pages once FAQs are published.

## 6) Page rollout order
### Week 1
- fix slugs / metadata / footer errors
- publish `/estate-agent-derry`
- publish `/estate-agent-limavady`

### Week 2
- publish `/estate-agent-eglinton`
- publish `/estate-agent-dungiven`
- publish Derry + Limavady support blogs

### Week 3
- add FAQ blocks
- improve homepage internal linking
- add schema across homepage, contact, sales, lettings, location pages

## 7) Success criteria
By the end of the first proper content phase, James Gorman Property should have:
- 4 dedicated location pages
- 6+ clean service/location slugs instead of `blank-*`
- 4 supporting blog posts
- homepage title/H1 aligned to Derry
- internal links between homepage, services, valuation, contact and location pages
- schema confirming local business and real estate relevance
