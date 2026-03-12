# James Gorman Property — First Full SEO Pass
**Date:** 2026-03-12  
**Prepared for:** Phil Patterson  
**Status:** Draft only — nothing published

## 1) What was completed in this pass
- Reviewed the James operating docs, backlog, changelog, weekly template, runbook, and baseline report.
- Pulled live homepage and key service pages from `jamesgormanproperty.com`.
- Checked live sitemap and robots setup.
- Ran local competitor research for:
  - estate agent derry
  - estate agent limavady
  - estate agent eglinton
  - estate agent dungiven
- Drafted:
  - slug replacement plan
  - title/meta replacements
  - technical SEO action plan
  - local content/page strategy
  - Friday report workflow / cron proposal

## 2) Honest limits on this run
- **Ahrefs was not accessed directly in this pass.**
- Competitor and keyword findings below are based on live web research, ranking pages surfaced in Brave, and manual site review.
- Treat keyword sizing/volumes as directional until Ahrefs or GSC is connected into the weekly cadence.

## 3) Biggest opportunities
### P1 — Replace all `blank-*` and placeholder slugs
This is still the single highest-impact technical fix.

Why it matters:
- URLs currently waste local relevance.
- Search result snippets look weaker than competitors.
- Internal links and sitemap are reinforcing non-descriptive slugs.

Immediate publish candidates:
- `/blank` → `/sales-derry`
- `/blank-3` → `/lettings-derry`
- `/blank-4` → `/about-james-gorman-property`
- `/blank-5` → `/estate-agent-services-derry`
- `/blank-7` → `/contact-james-gorman-property`
- `/blank-10` → `/property-search-derry`
- `/blank-12` → `/free-property-valuation-derry`
- `/blank-15` → `/merchants-view-derry`
- `/items-1/i-am-a-title-02` → `/sell-your-home-derry`
- `/blank-6` → `/terms-and-conditions`
- `/blank-14` → `/privacy-policy`

### P1 — Build location relevance properly
James has postcode mentions in the footer, but no real local landing pages for the towns Phil wants to rank.

Best opportunity pages:
- Estate Agent Derry
- Estate Agent Limavady
- Estate Agent Eglinton
- Estate Agent Dungiven

These should not be thin doorway pages. Each needs:
- local intro
- services offered in that area
- proof/trust signals
- valuation CTA
- current listings/property search CTA
- links to sales / lettings / contact / valuation pages

### P1 — Fix footer trust leaks
Live issues still visible:
- `mailto:james@jamesgormanproperty.co` is missing the `m`
- `Lettings@jamesgormaproperty.com` typo remains
- Wix default social links are still exposed in at least part of the site experience

These are easy wins and should be fixed before deeper work.

### P1 — Tighten metadata to target local intent
Current metadata leans broad: “Derry City & Northern Ireland”.
That is fine for brand breadth, but it is too soft for the four target towns.

Needed approach:
- homepage = Derry-led primary target
- service pages = Derry + service intent
- future location pages = one town focus per page

## 4) Competitor research summary
## Derry SERP competitors spotted
Main competitors/pages surfaced:
- `paulineelliottestateagents.com/` — title targeting **Estate Agent Derry / Londonderry**
- `johnvarthur.com/` — title targeting **Estate Agent Derry-Londonderry**
- `danielhenry.co.uk/` — strong regional brand, also covers Limavady/Eglinton/Dungiven catchment
- `propertylinkni.com/` — Derry landing/title presence
- `trinityestateagents.co.uk/` — Derry landing/title presence
- `cullenpropertyservices.co.uk/` — Derry title targeting

Takeaway:
- Competitors are directly using the target phrase in the title tag.
- James’ homepage title currently wastes space with `| property |` and is not as commercially sharp.

## Limavady SERP competitors spotted
- `danielhenry.co.uk/estate-agents-limavady`
- `colinmcbrideresidential.co.uk/`
- `pmcdermottestateagents.com/property-for-sale/limavady-area`
- property portal/supporting directory pages on PropertyPal / Propertynews / HomesNI / 192

Takeaway:
- Daniel Henry has a clear **location page** advantage.
- Limavady looks realistically attackable with a dedicated service/location page plus valuation CTA.

## Eglinton SERP competitors spotted
- `eocestateagents.com/property-for-sale/eglinton`
- `johnvarthur.com` / PropertyPal brand presence in Eglinton
- Pauline Elliott exposure via property pages in the Eglinton area

Takeaway:
- Results are mixed between agent pages and listing pages.
- This is an opening for James to own a clean “Estate Agent Eglinton” service page.

## Dungiven SERP competitors spotted
- `pmcdermottestateagents.com/` — strong Dungiven relevance
- `pmcdermottestateagents.com/property-for-sale/dungiven`
- `homepageonline.co.uk/estate-agents-limavady/` mentioning Dungiven
- supporting directory/property portal pages

Takeaway:
- P. McDermott is the clearest Dungiven local competitor.
- James needs a specific Dungiven page and local proof points to compete.

## 5) Keyword targets to prioritise
### Primary money terms
- estate agent derry
- estate agent limavady
- estate agent eglinton
- estate agent dungiven

### Service + local intent terms
- letting agent derry
- lettings derry
- property valuation derry
- sell your home derry
- estate agents derry londonderry
- estate agent north west ni
- estate agent roe valley
- property valuation limavady
- sell house limavady
- letting agent limavady
- sell house eglinton
- property valuation eglinton
- sell house dungiven
- property valuation dungiven

### Supporting commercial intent terms
- houses for sale derry estate agent
- landlords derry property management
- rental property derry letting agent
- new homes derry estate agent

## 6) Content and page gaps
Current site gaps vs local competitors:
- no dedicated town/location pages
- no meaningful valuation-led local pages
- no buyer/seller guides
- no landlord advice content
- no market update content
- no FAQ/local authority pages
- no clear internal linking structure around Derry / Limavady / Eglinton / Dungiven

## 7) Live technical findings from this run
### Site structure / crawl
- `sitemap.xml` is live and includes:
  - `pages-sitemap.xml`
  - `dynamic-items-sitemap.xml`
  - `dynamic-items-1-sitemap.xml`
- `pages-sitemap.xml` still exposes multiple `blank-*` URLs and several low-clarity placeholder-style URLs.
- Dynamic sitemap entries still include placeholder-looking item URLs like `/items/i-am-a-title-02`.

### Robots
- robots is indexable and broadly fine.
- `AhrefsBot` has `Crawl-delay: 10`.
- Not urgent, but it slows external crawl collection/reporting.

### Metadata direction
Current page titles are serviceable but weak:
- Homepage: `James Gorman Property | property | Derry, Londonderry, UK`
- Sales: `Sales | JamesGormanProperty`
- Lettings: `Lettings | JamesGormanProperty`
- Services: `Services | JamesGormanProperty`
- Contact: `Contact Us | JamesGormanProperty`
- Search: `Search Homes | JamesGormanProperty`
- Valuation: `Valuation | JamesGormanProperty`

Main issue:
- they underuse local commercial phrases
- brand formatting is inconsistent
- several titles are too generic to compete locally

## 8) Recommended technical action plan
### P1 — publish-ready fixes Phil can do in Wix
1. Rename all key slugs and ensure Wix auto-redirects are active.
2. Replace homepage title/meta.
3. Replace core page titles/meta for Sales, Lettings, Services, Contact, Search, Valuation.
4. Fix footer email typo and malformed contact email.
5. Remove any remaining Wix default social links from header/footer/mobile menu.
6. Add real business address consistently if client confirms preferred NAP format.

### P2 — structure and relevance upgrades
7. Add internal links from homepage to Sales, Lettings, Valuation, Contact, Search.
8. Add a visible “Areas we cover” section linking to future town pages.
9. Add location references naturally on service pages (Derry first, then supporting towns).
10. Create one indexable page for each target town.

### P3 — once access/data is in place
11. Connect weekly Ahrefs snapshot into reporting cadence.
12. Verify GSC and GA4 access.
13. Add stronger schema set:
   - RealEstateAgent / LocalBusiness
   - Organization
   - FAQ where used
   - review/supporting trust markup if appropriate

## 9) Best order of attack
1. Footer/contact/social fixes
2. Slug cleanup + redirects
3. Metadata refresh on core pages
4. Derry homepage/service tightening
5. Create Limavady / Eglinton / Dungiven location pages
6. Add first supporting blog content
7. Start Friday reporting cadence with Ahrefs/GSC once accessible

## 10) What Phil should push next
If Phil wants momentum this week, I’d do this order:
- publish slug changes
- publish metadata changes
- fix footer email/social issues
- create **Estate Agent Limavady**, **Estate Agent Eglinton**, **Estate Agent Dungiven** pages from drafts
- set up Friday reporting cadence at 2pm Europe/London
