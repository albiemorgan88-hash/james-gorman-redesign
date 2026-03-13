# James Gorman Property — Technical SEO Fixes
**Date:** 2026-03-13  
**Status:** Draft only

## 1) Title tags and meta descriptions
Use the pack already drafted in `draft-meta-and-slugs-2026-03-12.md`.

### Priority titles
- Homepage → `Estate Agent Derry | Sales & Lettings | James Gorman Property`
- Sales → `Residential Sales Derry | Sell Your Home | James Gorman Property`
- Lettings → `Letting Agent Derry | Landlord & Lettings Services | James Gorman Property`
- About → `About James Gorman Property | Estate Agent in Derry`
- Services → `Estate Agent Services Derry | Sales, Lettings & Marketing`
- Contact → `Contact James Gorman Property | Estate Agent Derry`
- Search → `Property Search Derry | Homes for Sale & Rent | James Gorman Property`
- Valuation → `Free Property Valuation Derry | James Gorman Property`

## 2) H1 fixes
Current pages are inconsistent and sometimes duplicate or vague.

### Recommended H1s
- Homepage → `Estate Agent Derry`
- Sales → `Residential Sales in Derry`
- Lettings → `Lettings and Landlord Services in Derry`
- About → `About James Gorman Property`
- Services → `Property Services in Derry`
- Contact → `Contact James Gorman Property`
- Search → `Property Search in Derry and the North West`
- Valuation → `Free Property Valuation in Derry`

### Notes
- Only one H1 per page.
- Use H2s for service sections, area blocks, trust signals and FAQs.
- Remove or demote repeated footer/menu headings from the main content hierarchy where Wix allows.

## 3) Slug clean-up recommendations
Current site still exposes major `blank-*` URLs in sitemap and navigation.

### Replace these first
- `/blank` → `/sales-derry`
- `/blank-3` → `/lettings-derry`
- `/blank-4` → `/about-james-gorman-property`
- `/blank-5` → `/estate-agent-services-derry`
- `/blank-7` → `/contact-james-gorman-property`
- `/blank-10` → `/property-search-derry`
- `/blank-12` → `/free-property-valuation-derry`
- `/blank-15` → `/merchants-view-derry`

### Also create
- `/estate-agent-derry`
- `/estate-agent-limavady`
- `/estate-agent-eglinton`
- `/estate-agent-dungiven`

### Important
Create redirects from old URLs to the new slugs inside Wix.

## 4) Internal linking improvements
### Homepage
Add a visible block linking to:
- Estate Agent Derry
- Estate Agent Limavady
- Estate Agent Eglinton
- Estate Agent Dungiven
- Sales
- Lettings
- Free Valuation
- Contact

### Sales page
Add links to:
- valuation page
- Derry / Limavady / Eglinton / Dungiven location pages

### Lettings page
Add links to:
- valuation page
- Derry / Limavady / Dungiven pages
- contact page

### Valuation page
Add links to:
- sales page
- lettings page
- all 4 location pages

### Blog posts
Every blog should link to:
- one target location page
- one service page
- valuation page

## 5) Schema markup
Use the RealEstateAgent / LocalBusiness schema from `content-strategy-2026-03-13.md` on homepage and contact page.

Add Service schema to:
- Sales page
- Lettings page
- Valuation page

Add FAQ schema later to:
- Derry page
- Limavady page
- Eglinton page
- Dungiven page

## 6) Sitemap cleanup notes
### Confirmed problem
`pages-sitemap.xml` still exposes multiple low-quality URLs including:
- `/blank-11-1-1`
- `/blank-11-2-1-2`
- `/blank-11-2-1-1`
- `/blank-13`
- `/blank-3`
- `/blank`
- `/blank-6`
- `/blank-10`
- `/blank-7`
- `/blank-4`
- `/blank-14`
- `/blank-15`
- `/blank-12`
- `/blank-11`
- `/blank-11-2`
- `/blank-5`

### Action
- rename key static pages in Wix
- noindex/remove any dead or placeholder pages not meant for search
- resubmit sitemap after slug cleanup
- re-check dynamic property item URLs and collections for cleaner naming where possible

## 7) robots.txt review
Current robots file allows crawling and references the sitemap.

### Current notes
- No major robots blocker found.
- `AhrefsBot` crawl delay is set to 10.
- Main issue is not robots — it is poor URL structure and low-quality indexable page naming.

## 8) Mobile performance notes
Existing concern remains valid.

### Practical fixes to publish first
- compress oversized hero and property imagery
- reduce heavy above-the-fold media where possible
- trim duplicate decorative sections on mobile
- review Wix app/widgets adding unnecessary JS
- simplify homepage layout so the core message and CTA appear earlier
- ensure buttons and tap targets are easy to use on mobile

## 9) Other on-page cleanup
- Replace placeholder homepage copy: `This is the space to introduce visitors to the business...`
- Correct footer contact email from `james@jamesgormanproperty.co` to `.com`
- Correct `Lettings@jamesgormaproperty.com` typo to `Lettings@jamesgormanproperty.com`
- Remove any remaining Wix default social links and keep only James Gorman Property profiles
