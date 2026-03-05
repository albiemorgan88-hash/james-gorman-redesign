---
name: opportunity-radar
description: Entrepreneurial intuition engine that scans for business opportunities and presents only those worth PJ's attention. Use when PJ asks to find opportunities, scan for tenders, check competitor activity, look for market gaps, or run the opportunity radar. Covers AI business trends, UK/Ireland government procurement, Moltbook agent commerce, competitor intel, local NI opportunities, and domain/niche plays. Scores and filters so only high-value opportunities (7+/10) surface.
---

# Opportunity Radar

Scan, score, and surface business opportunities for Blue Canvas (AI consultancy, Derry, NI). Target: £6k/month net.

## Blue Canvas Context

| Service | Price |
|---------|-------|
| AI Audit | £750 |
| Implementation | Custom quote |
| AI Academy | £250 |
| Mentoring | £50/mo |
| Managed AI Workforce | Custom quote |

Wallet: ~107 USDC on Base. Spending: <$15 auto-buy, $15-50 notify PJ, >$50 always ask.

## Scan Workflow

Run all source scans, score each opportunity, filter to 7+, save report.

### 1. Web Search — AI Business Trends

```
web_search: "AI consulting opportunities UK 2025"
web_search: "AI automation SME tenders UK"
web_search: "AI implementation contracts Northern Ireland"
web_search: "new AI tools for business automation"
web_search: "AI regulation EU AI Act business impact"
```

Look for: new market needs, underserved niches, emerging tools Blue Canvas could resell/implement.

### 2. Moltbook Feed

Use moltbook-scout skill's API (creds: `~/.config/moltbook/credentials.json`, base: `https://www.moltbook.com/api/v1`).

Scan submolts: `agentcommerce`, `agenteconomy`, `jobs`, `startups`, `builds`, `saas`.

```bash
curl -s -H "Authorization: Bearer {key}" "https://www.moltbook.com/api/v1/submolts/agentcommerce/posts?limit=20"
```

Flag: partnership offers, agent-for-hire requests, B2B collaboration, $CLAWD opportunities.

### 3. UK/Ireland Government Procurement

| Portal | URL | Search Terms |
|--------|-----|--------------|
| Contracts Finder | `https://www.contractsfinder.service.gov.uk/Search/Results` | AI, automation, digital transformation, chatbot |
| Find a Tender | `https://www.find-tender.service.gov.uk/Search` | artificial intelligence, machine learning, data |
| eTendersNI | `https://etendersni.gov.uk/epps` | AI, digital, automation |
| eTenders Ireland | `https://www.etenders.gov.ie` | AI, automation, digital |

```
web_search: site:contractsfinder.service.gov.uk AI automation
web_search: site:find-tender.service.gov.uk artificial intelligence
web_fetch: https://www.contractsfinder.service.gov.uk/Search/Results (then parse)
```

Flag: tenders matching Blue Canvas capabilities, especially NI/Ireland ones. Note deadlines.

### 4. Competitor Watch

| Competitor | URL | Watch For |
|-----------|-----|-----------|
| brainpool.ai | brainpool.ai | New services, pricing changes, case studies |
| iwantmore.ai | iwantmore.ai | Product launches, market positioning |
| Artellis | artellis.ie | Irish market moves, partnerships |
| AICC | aicc.network | Membership offerings, events |
| Datatonic | datatonic.com | Enterprise moves, blog posts, hiring |

```
web_search: "brainpool.ai" OR "iwantmore.ai" OR "artellis.ie" new
web_search: "datatonic" AI consulting news
```

Extract: new offerings, pricing signals, partnerships, weaknesses to exploit, clients they're targeting.

### 5. Local NI / Ireland Opportunities

```
web_search: site:derrychamber.com opportunities OR grants OR events
web_search: site:investni.com AI OR digital OR grants
web_search: site:intertradeireland.com AI OR technology OR funding
web_search: "Northern Ireland" AI business opportunity
web_search: "Derry" OR "Londonderry" digital transformation tender
```

Flag: grants, networking events, co-funded programmes, local businesses needing AI help.

### 6. Domain / Niche Opportunities

```
web_search: "AI" niche domain for sale
web_search: trending AI business niches 2025
```

If a valuable domain is available and <$15, auto-purchase using CDP wallet. $15-50 flag for PJ. >$50 ask.

## Scoring Framework

Score each opportunity 1-10 on five dimensions:

| Dimension | 1 (Low) | 5 (Mid) | 10 (High) |
|-----------|---------|---------|-----------|
| **Revenue** | <£100 | £500-2k | £5k+ |
| **Effort** (inverted: 10=easy) | Months of work | Days | Hours |
| **Time Sensitivity** | No deadline | Weeks | Days/hours |
| **Blue Canvas Fit** | Outside expertise | Adjacent | Core service |
| **Risk** (inverted: 10=safe) | High risk, low control | Some unknowns | Low risk |

**Composite Score** = weighted average:
- Revenue: 30%
- Effort: 20%
- Time Sensitivity: 15%
- Fit: 25%
- Risk: 10%

**Only present opportunities scoring 7+ to PJ.**

## Output Format

Save to `reports/opportunity-radar/YYYY-MM-DD.md`:

```markdown
# 🎯 Opportunity Radar — YYYY-MM-DD

## Quick-Fire List

| Score | Opportunity | Why It Matters | Action |
|-------|------------|----------------|--------|
| 9.2 | Example tender | £50k AI contract, perfect fit | Submit by Mar 1 |
| 7.5 | Example partnership | Revenue share model | DM founder |

## Tenders & Procurement
[Details of government/public sector opportunities]

## Partnerships & Collaborations
[Moltbook, competitor gaps, agent commerce]

## Market Gaps & Niches
[Underserved areas Blue Canvas could own]

## Tools & Tech
[New tools that create service opportunities]

## Competitive Intel
[What competitors are doing, weaknesses to exploit]

## Dismissed (Notable)
[Opportunities that scored 5-6.9 — brief mention in case context changes]
```

## Social Demand Validation

**MANDATORY** before recommending any rank & rent opportunity. Semrush keyword data alone is NOT sufficient — social validation is required to confirm real-world demand.

### Why This Matters
Semrush shows search volume but NOT:
- Whether people are actually struggling to find the service
- Whether the market is already saturated with good providers
- Whether there are supply-side problems (unreliable tradespeople = opportunity)
- Whether demand is driven by regulation, grants, or seasonal factors

### Validation Sources & Search Patterns

#### 1. Reddit Scanning
Target subreddits: r/northernireland, r/DerryLondonderry, r/Belfast, and any local city subreddits.

```
web_search: site:reddit.com r/{local_subreddit} "can anyone recommend" {service}
web_search: site:reddit.com "{city}" {service} OR {trade}
web_search: site:reddit.com r/{local_subreddit} "looking for" OR "anyone know a good" {service}
web_search: site:reddit.com "{city}" tradesman OR trades OR contractor
```

**What to extract:**
- Named businesses (who do people actually recommend?)
- Complaints (reliability, quality, pricing)
- Frequency of asks (monthly = strong signal)
- Specific pain points (e.g., "won't turn up", "cash only", "fully booked")

#### 2. Facebook Community Groups (Public Signals Only)
```
web_search: site:facebook.com "{city}" "can anyone recommend" {service}
web_search: "{city} community" OR "{city} buy sell" recommend {service}
```

**What to extract:**
- Business page follower counts (proxy for local trust)
- Active business pages with engagement
- Community group existence (signals digital demand)

#### 3. Google Maps Business Count + Review Analysis
```
web_search: {service} {city} site:google.com/maps
web_search: {service} {city} reviews
```

**Supply vs Demand indicators:**
- Few businesses (<5) = supply gap = opportunity
- Many businesses (>15) = saturated market = harder to rank & rent
- Low average ratings = quality gap = opportunity for disruption
- Few reviews overall = low digital presence = rank & rent can dominate

#### 4. Trade Platform Listings
```
web_search: "{city}" site:checkatrade.com OR site:mybuilder.com OR site:trustatrader.com
web_search: "{city}" site:yell.com {service}
web_search: "{city}" site:ratedpeople.com {service}
```

**What to extract:**
- Number of listed tradespeople per service
- Review counts and ratings
- Low platform engagement = market runs on word-of-mouth = digital gap to exploit

#### 5. "Fully Booked" / Waiting List Signals
```
web_search: "{city}" "waiting list" OR "fully booked" {service}
web_search: "{city}" "can't get" OR "hard to find" {trade}
```

**Strong signal:** If tradespeople are overloaded, a rank & rent site connecting people to available providers has immediate value.

#### 6. Government Incentive / Grant-Driven Demand
```
web_search: "{region}" "heat pump grant" OR "boiler upgrade scheme" OR "solar grant"
web_search: "{region}" EPC OR "energy performance certificate" landlord regulations
```

**Critical check:** Grants available in England/Wales may NOT apply to NI/Scotland. Verify before targeting green energy niches.

**Red flag example:** Boiler Upgrade Scheme (£7,500) is England/Wales only — NI has no equivalent, so heat pump demand is minimal.

#### 7. Seasonal Demand Patterns
Map services to peak months:
- Winter: Emergency plumbers, locksmiths, heating engineers
- Spring: Builders, roofers, skip hire
- Summer: Power washing, garden services, mechanics (holiday prep)
- Autumn: Gutter cleaning, roofers, damp proofing

#### 8. Review Quality Analysis
- **Lots of bad reviews** on existing businesses = disruption opportunity
- **Very few reviews** = low digital maturity = easier to dominate with a well-optimised site
- **High ratings across the board** = satisfied market = harder to differentiate

### Scoring Integration

Add social validation score to the opportunity scoring:

| Social Signal | Score Modifier |
|--------------|---------------|
| Multiple Reddit/FB asks + low supply | +2 |
| Active demand but moderate supply | +1 |
| No social signals found | -1 |
| Saturated market with established operators | -2 |
| Grant/regulation driving demand | +1 |
| Grant/regulation NOT available in target region | -2 |

### Output Requirements

Every rank & rent opportunity report MUST include:
- [ ] Reddit thread count and sentiment summary
- [ ] Facebook business page engagement levels
- [ ] Approximate business count serving the market
- [ ] Trade platform listing density
- [ ] Supply constraint signals (fully booked, unreliable, etc.)
- [ ] Grant/regulation check for the specific region
- [ ] Seasonal demand assessment
- [ ] Revised ranking incorporating social signals

## Scheduling

When run as a scheduled scan, keep output concise. If zero opportunities score 7+, report: "No high-scoring opportunities today" with a one-line market mood summary.

## Decision Shortcuts

- Tender deadline <48h away and we haven't started → skip unless score 9+
- Competitor launched something we already offer cheaper → flag as urgent competitive intel
- Grant/funding with NI focus → always flag regardless of score
- Moltbook partnership with revenue share → flag if partner has >100 karma
- Domain <$15 matching our services → auto-buy, notify PJ after
