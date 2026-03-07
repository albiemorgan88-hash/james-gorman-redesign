---
name: rank-and-rent
description: Build, rank, and rent local service websites for recurring revenue. Use when PJ wants to research niches, build rank-and-rent sites, find tenants, or scale the portfolio. Covers keyword research (Ahrefs/GSC), site building, local SEO, tenant acquisition, and scaling across cities. Special focus on ad-restricted niches (aesthetics/Botox, healthcare, gambling, finance) where SEO is the only channel.
---

# Rank & Rent Skill

## Overview
Build a local service website → rank it on Google → rent it to a business that needs leads. Recurring monthly income with minimal ongoing effort once ranked.

## Phase 1: Research

### Keyword Research (Ahrefs + GSC)
Use **Ahrefs Keywords Explorer** (UK database) for volume, keyword difficulty, and related keywords.
Use **Google Search Console API** for first-party impressions/clicks data on owned sites.

**Tool:** Ahrefs for all keyword research and competitor analysis.

Target: 200-2000 monthly searches, KD < 40, commercial intent.

### Demand Validation Checklist
- [ ] Reddit: search `site:reddit.com "[service] [city]"` — are people asking for recommendations?
- [ ] Facebook Groups: search for local groups discussing the service
- [ ] Google Maps: count businesses in the area (5-20 = good, 50+ = saturated)
- [ ] Google Trends: confirm stable or growing demand

### Competition Analysis
- Search the target keyword, analyse top 5 results:
  - Domain authority (< 30 = beatable)
  - Content quality (thin = opportunity)
  - Backlink profile (few links = easy to outrank)
  - Site age (new sites ranking = low competition)
- If top results are directories (Yell, Bark) not dedicated sites → strong opportunity

### Google Ads Ban Check (Structural Advantage)
If Google Ads are banned/restricted for the niche, SEO is the ONLY channel. This creates a permanent structural moat. Check: search the keyword — if no ads appear at top, confirm via Google Ads policy page.

**Ad-Restricted Industries (UK):**
| Industry | Restriction Type | SEO Opportunity |
|----------|-----------------|-----------------|
| Aesthetics/Botox/Fillers | Prescription medicine — ads banned | ★★★★★ |
| CBD/Hemp products | Restricted — most ads rejected | ★★★★★ |
| Vaping/E-cigarettes | Tobacco products — ads banned | ★★★★ |
| Gambling/Betting | Requires certification, heavily restricted | ★★★★ |
| Cryptocurrency | Restricted, requires FCA registration | ★★★★ |
| Weight loss supplements | Health claims restricted | ★★★★ |
| Firearms/Weapons | Prohibited | ★★★ |
| Bail bonds | Prohibited | ★★★ |
| Pharmaceuticals (prescription) | Requires certification, most blocked | ★★★★★ |
| Cosmetic surgery | Healthcare restrictions apply | ★★★★ |
| Addiction treatment/rehab | Requires LegitScript certification | ★★★★ |
| Financial services (loans, debt) | Heavily restricted, requires verification | ★★★ |
| Legal services (claims) | ASA restrictions on claims advertising | ★★★ |

### Revenue Model Template
```
Monthly searches:          [X]
× CTR (pos 1 = 28%):      × 0.28
= Monthly clicks:          [Y]
× Conversion rate (3-5%):  × 0.04
= Monthly leads:           [Z]
× Lead value to business:  × £[V]
= Monthly value generated: £[TOTAL]
Rent price (20-30%):       £[RENT]
```
Example: "botox manchester" — 1,000 searches × 0.28 × 0.04 = 11 leads × £300 = £3,300 value → rent at £500-800/mo.

## Phase 2: Build

### Domain Strategy
- Format: `[service]-[city].co.uk` (e.g., `botox-manchester.co.uk`)
- Alternatives: `[city][service].co.uk`, `best[service][city].co.uk`
- Register on Namecheap or GoDaddy, ~£8/year
- Exact-match domains still give slight ranking boost for local

### Site Structure
```
/                    → Homepage (primary keyword, 800-1000 words)
/services/           → Services overview
/services/[service]/ → Individual service pages (500-800 words each)
/areas/[area]/       → Area pages for nearby towns/suburbs
/about/              → About page (trust signals, stock photos OK)
/contact/            → Contact form + phone number + map
/blog/               → Blog for long-tail content
```

### Content Requirements
- **Homepage**: Primary keyword in H1, first paragraph, meta title. Include: what, where, why choose us, services list, CTA, testimonials (generic initially)
- **Service pages**: One page per service variation. 500-800 words. Unique content per page
- **Area pages**: "[Service] in [Nearby Town]" — 400-600 words. Link back to main service page
- **Blog posts**: Long-tail keywords, 800-1200 words, publish 2-4 before ranking push

### Tech Stack
- WordPress + GeneratePress/Astra theme (fast, SEO-friendly)
- OR static site (Hugo/Next.js) on Cloudflare Pages (free, fast)
- Essential plugins: Yoast/RankMath SEO, WPForms (contact), WP Rocket (speed)

### Schema Markup
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Manchester Botox Clinic",
  "address": { "@type": "PostalAddress", "addressLocality": "Manchester", "addressRegion": "Greater Manchester", "addressCountry": "GB" },
  "telephone": "+44-XXX-XXX-XXXX",
  "url": "https://botox-manchester.co.uk",
  "serviceArea": { "@type": "City", "name": "Manchester" }
}
```
Also add `Service` schema on each service page.

### Technical SEO Checklist
- [ ] SSL certificate (free via Cloudflare/Let's Encrypt)
- [ ] Mobile responsive
- [ ] Page speed: < 3s load (test with PageSpeed Insights)
- [ ] XML sitemap generated and submitted
- [ ] robots.txt configured
- [ ] Canonical URLs set
- [ ] Image alt tags with local keywords
- [ ] NAP (Name, Address, Phone) consistent across site

## Phase 3: Rank

### On-Page Optimisation
- Title tag: `[Primary Keyword] | [Brand Name]` (under 60 chars)
- Meta description: Include keyword + CTA (under 155 chars)
- H1: Primary keyword (one per page)
- H2s: Related keywords / service variations
- Internal links: Every page links to 2-3 other pages
- Images: Compressed, descriptive filenames, alt text with keywords

### Google Search Console
- Verify property (DNS or HTML tag)
- Submit sitemap
- Request indexing for key pages
- Monitor impressions/clicks weekly

### Google Business Profile
- Create GBP listing with same NAP as website
- Add photos (stock or AI-generated local images)
- Select correct primary category
- Add services, hours, description with keywords
- Post weekly updates

### Citation Building (UK Directories)
Priority order — build over 2-4 weeks:
1. Google Business Profile
2. Yell.com
3. FreeIndex
4. Thomson Local
5. Yelp UK
6. Cylex
7. Hotfrog
8. 192.com Business
9. Scoot
10. Industry-specific directories

### Content Marketing
- Publish 1-2 blog posts per week for first 2 months
- Target long-tail keywords: "how much does [service] cost in [city]"
- Include internal links to service pages
- Share on social media for initial indexation signals

### Timeline Expectations
| Competition Level | Time to Page 1 | Indicators |
|-------------------|----------------|------------|
| Low (KD < 15) | 2-4 months | Few dedicated sites, directory results dominate |
| Medium (KD 15-30) | 4-8 months | Some dedicated sites, mixed quality |
| High (KD 30-50) | 8-14 months | Strong competitors, need quality backlinks |

## Phase 4: Rent

### Finding Tenants
1. **Google Maps**: Find businesses ranking on page 2-3 (they need help)
2. **Google Ads**: Businesses running ads = already paying for leads, easier sell
3. **Walk-in**: Visit local businesses, show the site ranking on your phone
4. **Cold email/call**: "I have a website generating X leads/month for [service] in [city]"

### Pitch Template (Email)
```
Subject: I'm sending [service] leads in [city] to your competitor

Hi [Name],

I run a website that ranks on page 1 of Google for "[keyword]" in [city].
It generates [X] enquiries per month — right now they're going to [competitor].

I'd like to send them to you instead. Flat fee, no contracts, cancel anytime.

Interested in a quick chat? I can show you the site and the traffic stats.

[Your name]
```

### Pricing Models
| Model | Pros | Cons | Best For |
|-------|------|------|----------|
| Flat monthly (£300-1000) | Predictable, simple | May undercharge | Established sites |
| Pay per lead (£20-100) | Easy sell, performance-based | Tracking overhead | New relationships |
| Hybrid (base + per lead) | Fair for both sides | Complex | High-value niches |

### Lead Tracking
- Dedicated phone number (via CallRail or a virtual number)
- Contact form submissions forwarded to tenant's email
- Monthly report: calls, form fills, total leads
- Google Analytics shared with tenant (builds trust)

### Contract Essentials
- Month-to-month, 30-day notice to cancel
- You retain ownership of domain, site, and rankings
- Tenant gets leads, not the website
- Non-compete: tenant can't hire someone to clone the site
- Price review every 6 months as traffic grows

## Phase 5: Scale

### Template Approach
1. Build ONE design template for the niche
2. Duplicate for each new city (change city name, keywords, NAP)
3. Unique content per city (DO NOT duplicate — Google penalises)
4. Use AI to generate city-specific content variations

### City Selection Criteria
- Population 50k-300k (enough demand, less competition)
- Check Google Ads CPC for the keyword in that city (higher CPC = more valuable)
- Avoid cities where a single dominant player has locked up SEO
- Prioritise cities with growing populations

### Management at Scale
- Spreadsheet/Airtable tracker: domain, city, niche, ranking, tenant, rent, status
- Automate reporting (Google Data Studio / Looker)
- Virtual phone numbers per site (track per-tenant leads)
- Monthly check: rankings, leads, tenant satisfaction

### Revenue Tracking
```
| Site | Niche | City | Monthly Rent | Cost | Net Profit | Status |
|------|-------|------|-------------|------|------------|--------|
```
Target: 10 sites × £500/mo = £5,000/mo recurring with < 10 hrs/week maintenance.

## Special Niche: Aesthetics / Botox

### Why It's the Best R&R Niche
1. **Google Ads banned** — Botox is a prescription medicine, ads prohibited
2. **High lead value** — Average Botox client worth £300-500 per visit, repeats 3-4x/year
3. **Fragmented market** — Thousands of small clinics, most have weak websites
4. **Template-able** — Same services everywhere, easy to replicate across cities
5. **Growing market** — UK aesthetics market growing 10%+ annually

### Botox R&R Playbook
1. Pick 5-10 mid-size UK cities (Leeds, Bristol, Nottingham, Sheffield, etc.)
2. Register `botox-[city].co.uk` for each
3. Template site: homepage, Botox page, lip fillers page, anti-wrinkle page, about, contact
4. Unique city-specific content per site (AI-assisted, human-reviewed)
5. Build citations, get to page 1 (typically 3-6 months, low competition)
6. Approach local aesthetics clinics to rent at £400-800/mo each

### Other Ad-Restricted Niches Worth Exploring
See the **Ad-Restricted Industries** table in Phase 1. Additionally check:
- Cosmetic dentistry (teeth whitening — advertising restrictions)
- Medical cannabis clinics
- Psychedelic therapy (emerging)
- Tattoo removal (medical device restrictions)
- Hormone replacement therapy (HRT)
- IV drip therapy / vitamin infusions

## Quick Reference: Keyword Research Tools

### Ahrefs (Team Access)
- **Keywords Explorer** — search volume, KD, CPC, related keywords (use UK database)
- **Site Explorer** — competitor organic keywords, backlink profiles, traffic estimates
- **Content Explorer** — top-performing content by topic for content ideas

### Google Search Console API
```bash
# Query keyword performance for owned sites
POST https://www.googleapis.com/webmasters/v3/sites/{SITE_URL}/searchAnalytics/query
Authorization: Bearer {TOKEN}
# Body: {"startDate": "...", "endDate": "...", "dimensions": ["query", "page"], "rowLimit": 100}
```
