---
name: local-lead-scraper
description: Scrape Google Maps, Companies House, and GBP data to find local NI/Ireland businesses with weak web presence. Builds targeted lead lists for Blue Canvas outreach. Use when finding local business prospects, scraping Google Maps for leads, or building outreach lists for specific areas/sectors.
---

# Local Lead Scraper

Scrape, score, and deliver local business leads with weak web presence for Blue Canvas outreach. NI and Ireland focus.

## 1. Data Sources

### Google Maps / Places API
- Search by sector + location (e.g. "beauty salon Derry", "solicitor Belfast")
- Extract: business name, address, phone, website, rating, review count, opening hours
- **Web Quality Score:** rate their website 1-10 (no website = 1, basic = 3-4, modern = 7-8, excellent = 9-10). Low scores = hot leads.
- Text search: `https://maps.googleapis.com/maps/api/place/textsearch/json?query=[sector]+[city]&key=$GOOGLE_MAPS_API_KEY`
- Details: `https://maps.googleapis.com/maps/api/place/details/json?place_id=[id]&fields=name,formatted_phone_number,website,url,rating,user_ratings_total,photos&key=$GOOGLE_MAPS_API_KEY`
- Paginate with `pagetoken` from text search results to get full lists

### Companies House API (free, no key needed for basic)
- Search NI businesses by SIC code + postcode prefix (BT for NI)
- Endpoint: `https://api.company-information.service.gov.uk/search/companies?q=[query]&location=northern+ireland`
- Filter: active companies, incorporated in last 10 years, NI postcodes (BT1-BT94)
- Extract: company name, registration number, SIC codes, registered address, incorporation date

### Google Business Profile (via Places API)
- Check if business has claimed GBP
- Review count and rating (low reviews = opportunity for digital presence help)
- Photos count (few photos = weak digital presence)
- Check if they respond to reviews

### Website Quality Check
For each business with a website, quick audit:
- Does it load? (`curl -sI -o /dev/null -w "%{http_code}" [url]`)
- Is it mobile responsive? (PageSpeed API: `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=[url]&strategy=mobile&key=$PAGESPEED_API_KEY`)
- PageSpeed score: below 50 = terrible, 50-70 = poor, 70-90 = OK, 90+ = good
- Does it have HTTPS?
- Last modified / copyright year (outdated = opportunity)

## 2. Target Sectors

Priority sectors for Blue Canvas (in order):

1. **Professional services** — solicitors, accountants, financial advisors
2. **Healthcare/wellness** — clinics, physio, dentists, opticians, beauty/aesthetics
3. **Hospitality** — restaurants, hotels, B&Bs, pubs
4. **Trades/construction** — builders, plumbers, electricians, roofers
5. **Sports/community** — sports clubs, gyms, community organisations
6. **Property** — estate agents, letting agents, property management
7. **Retail** — local shops, boutiques
8. **Education** — tutoring, training providers, driving schools

### Search Queries by Sector
Use these as Google Places search terms per location:

| Sector | Search Terms |
|--------|-------------|
| Professional services | `solicitor`, `accountant`, `financial advisor`, `law firm` |
| Healthcare/wellness | `dentist`, `physiotherapy`, `optician`, `beauty salon`, `aesthetics clinic`, `medical clinic` |
| Hospitality | `restaurant`, `hotel`, `bed and breakfast`, `pub`, `bar` |
| Trades/construction | `builder`, `plumber`, `electrician`, `roofer`, `construction company` |
| Sports/community | `sports club`, `gym`, `fitness`, `GAA club`, `community centre` |
| Property | `estate agent`, `letting agent`, `property management` |
| Retail | `boutique`, `gift shop`, `local shop` |
| Education | `driving school`, `tutoring`, `training provider` |

## 3. Target Locations

### Northern Ireland (primary)

**Tier 1** (highest priority): Derry/Londonderry, Belfast, Newry, Lisburn, Craigavon

**Tier 2**: Ballymena, Coleraine, Omagh, Enniskillen, Dungannon, Cookstown, Strabane, Limavady, Magherafelt

**Tier 3**: Remaining BT postcode towns

### Ireland (secondary)

**Tier 1**: Donegal (border towns — Letterkenny, Buncrana, Carndonagh), Dublin

**Tier 2**: Galway, Cork, Limerick

### Execution Order
1. Start with Derry + professional services (home turf, highest value)
2. Expand to Derry + all sectors
3. Move to Belfast + professional services
4. Work through Tier 1 × priority sectors matrix
5. Then Tier 2, then Ireland

## 4. Lead Scoring

Score each lead 1-10 based on weighted factors:

| Factor | Weight | Scoring |
|--------|--------|---------|
| Web quality | 30% | No website=10, terrible(PS<50)=8, poor(PS 50-70)=6, OK(PS 70-90)=3, good(PS 90+)=1 |
| GBP completeness | 20% | No GBP=10, <5 reviews=7, 5-20 reviews=4, 20+ reviews with responses=1 |
| Sector fit | 20% | Professional services=10, healthcare=9, hospitality=8, trades=7, sports=6, property=5, retail=4, education=3 |
| Location | 15% | Derry=10, NI Tier 1=8, NI Tier 2=6, Ireland Tier 1=4, Ireland Tier 2=3 |
| Company size | 15% | 10-50 employees=10, 5-10=7, 50-100=5, solo=3, unknown=5 |

**Formula:** `score = (web×0.3) + (gbp×0.2) + (sector×0.2) + (location×0.15) + (size×0.15)`

- **Hot lead** = score 7+
- **Warm lead** = score 4-6
- **Cold lead** = score <4 (don't bother logging)

## 5. Output Format

Save to `projects/leads/local-[YYYY-MM-DD].md`:

```markdown
# Local Business Leads — [Date]

**Run:** [sectors searched] × [locations searched]
**Source:** local-scraper
**Total found:** [n] | **Hot:** [n] | **Warm:** [n]

## Hot Leads (Score 7+)

| Business | Sector | Location | Website | Web Score | GBP Rating | Reviews | Lead Score | Contact |
|----------|--------|----------|---------|-----------|------------|---------|------------|---------|
| Example Solicitors | Professional | Derry | http://example.com | 3/10 (PS: 42) | 3.2 | 4 | 8.1 | 028 7126 XXXX |

## Warm Leads (Score 4-6)

| Business | Sector | Location | Website | Web Score | GBP Rating | Reviews | Lead Score | Contact |
|----------|--------|----------|---------|-----------|------------|---------|------------|---------|

## Patterns & Notes
- [any patterns noticed, e.g. "dentists in Derry all have terrible websites"]
- [sector-level observations for PJ's strategy]

## Duplicates
- [businesses that also appear in Apollo lists — flagged for cross-reference]
```

Also save raw JSON data to `projects/leads/raw/local-[YYYY-MM-DD].json` for re-scoring.

## 6. Execution Rules

1. **Never contact anyone** — build the list only, PJ decides who to approach
2. **Batch size:** 50 businesses per run
3. **Deduplicate** against previous lists in `projects/leads/`
4. **Flag duplicates** with Apollo lists — some businesses may appear in both
5. **Respect rate limits** on all APIs:
   - Google Places: 1 request/second
   - PageSpeed: 1 request/second (400/day free tier)
   - Companies House: 600 requests/5 minutes
6. **Store raw data** in `projects/leads/raw/` for re-scoring later if criteria change
7. **Error handling:** if an API call fails, log it and continue — don't abort the whole batch
8. **Timeout:** 5 seconds per website curl check, skip if unresponsive

## 7. Integration with Apollo

- **Apollo** catches the mid-size professional firms (decision makers with emails)
- **Local scraper** catches the ground-level businesses (owners, no corporate structure)
- Both feed into PJ's weekly review → cherry-pick → showcase or cold outreach
- Tag source in lead list: `"apollo"` or `"local-scraper"` so we know where each lead came from
- Cross-reference: if a business appears in both, merge the data (Apollo has emails, local has web quality score)

## 8. Cron Integration

Designed to run weekly alongside Apollo Lead Builder (Wednesdays).
Can be triggered manually for specific sector+location combos.

**Manual trigger examples:**
- "Scrape solicitors in Derry"
- "Find beauty salons across NI Tier 1 cities"
- "Run full scan for Enniskillen"

**Weekly auto-run:** rotates through the location×sector matrix so full NI coverage completes every ~4 weeks.

## 9. Quick Start Checklist

Before first run, verify:
- [ ] `$GOOGLE_MAPS_API_KEY` is set (Places API enabled)
- [ ] `$PAGESPEED_API_KEY` is set (or reuse Maps key if PageSpeed API enabled)
- [ ] `projects/leads/` directory exists
- [ ] `projects/leads/raw/` directory exists
- [ ] Previous Apollo lists available for dedup check
