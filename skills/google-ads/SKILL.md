---
name: google-ads
description: Plan, research, and manage Google Ads campaigns for Blue Canvas AI consultancy. Use when PJ asks about Google Ads, keyword research, ad copy, campaign structure, budget planning, or CPC analysis. Uses Ahrefs and Google Search Console for keyword data.
---

# Google Ads Campaign Manager

## Account
- **Google Ads ID:** 801-851-4760
- **Campaign plan:** `projects/google-ads/campaign-plan-v2.md`
- **Nothing goes live without PJ approval**

## API Access

> **Automated monitoring:** The **5pm daily cron "Google Ads Daily Report"** handles daily performance checks automatically.

### Credentials (all in ~/.zprofile)
| Variable | Value |
|----------|-------|
| GOOGLE_ADS_ACCOUNT_ID | 801-851-4760 |
| GOOGLE_ADS_MANAGER_ID | 396-378-6948 |
| GOOGLE_ADS_DEVELOPER_TOKEN | (in env) |
| GOOGLE_ADS_CLIENT_ID | (in env) |
| GOOGLE_ADS_CLIENT_SECRET | (in env) |
| GOOGLE_ADS_REFRESH_TOKEN | (in env) |

### API Details
- API version: v20
- Endpoint: `https://googleads.googleapis.com/v20/customers/8018514760/googleAds:searchStream`
- Auth: OAuth2 Bearer token (refresh via refresh_token grant)
- Do NOT use login-customer-id header (or use 8018514760 — the account itself, NOT the manager)
- Developer token status: **Active** — mutate operations confirmed working.

### Getting a Fresh Access Token
```bash
source ~/.zprofile
curl -s -X POST https://oauth2.googleapis.com/token \
  -d "client_id=$GOOGLE_ADS_CLIENT_ID" \
  -d "client_secret=$GOOGLE_ADS_CLIENT_SECRET" \
  -d "refresh_token=$GOOGLE_ADS_REFRESH_TOKEN" \
  -d "grant_type=refresh_token" | python3 -c "import sys,json; print(json.load(sys.stdin)['access_token'])"
```

### Example Query
```bash
ACCESS_TOKEN=$(source ~/.zprofile && curl -s -X POST https://oauth2.googleapis.com/token \
  -d "client_id=$GOOGLE_ADS_CLIENT_ID" \
  -d "client_secret=$GOOGLE_ADS_CLIENT_SECRET" \
  -d "refresh_token=$GOOGLE_ADS_REFRESH_TOKEN" \
  -d "grant_type=refresh_token" | python3 -c "import sys,json; print(json.load(sys.stdin)['access_token'])")

curl -s -X POST "https://googleads.googleapis.com/v20/customers/8018514760/googleAds:searchStream" \
  -H "Authorization: Bearer $ACCESS_TOKEN" \
  -H "developer-token: $GOOGLE_ADS_DEVELOPER_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"query": "SELECT campaign.name, campaign.status, metrics.impressions, metrics.clicks, metrics.cost_micros FROM campaign WHERE segments.date DURING LAST_7_DAYS"}'
```

### Ownership
Albie is the ads manager. Full ownership of:
- Daily performance monitoring (5pm cron)
- Keyword optimisation (pause underperformers, boost winners)
- Bid adjustments
- Negative keyword management
- Ad copy testing
- Budget recommendations
- Weekly/monthly reporting to PJ

## Keyword Research via Ahrefs & GSC

### Ahrefs (Team Access)
Use Ahrefs Keywords Explorer for volume, CPC, keyword difficulty, and related keywords.
Always use the **UK** database. Key metrics: Volume, KD (keyword difficulty), CPC, Traffic Potential.

### Google Search Console API
For first-party data on actual impressions, clicks, CTR, and average position:
```bash
# Query Search Console for keyword performance
POST https://www.googleapis.com/webmasters/v3/sites/sc-domain:bluecanvas.ai/searchAnalytics/query
Authorization: Bearer {TOKEN}
# Body: {"startDate": "...", "endDate": "...", "dimensions": ["query"], "rowLimit": 100}
```

**Tool:** Ahrefs for all keyword research and competitive analysis.

## Campaign Structure

### Campaign 1: AI Audit (Core Service)
- Budget: £8/day (£240/month)
- Keywords: "ai audit", "artificial intelligence audit", "ai audit uk"
- Highest conversion intent — direct service match

### Campaign 2: Industry-Specific (Creative Play)
- Budget: £7/day (£210/month)
- Target industries: estate agents, law firms, accountants
- Pattern: "ai for [industry]", "ai tools for [industry]"
- High-value clients searching for industry-specific AI help

### Campaign 3: Problem-Aware (Pain Points)
- Budget: £5/day (£150/month)
- Sub-groups:
  - **Automation:** "ai workflow automation uk" (£0 CPC!), "automate business processes uk"
  - **AI Receptionist:** "ai receptionist uk" — feeds "Albie as a Service" funnel (£250/month recurring)
  - **AI SEO:** "ai seo agency" (720 vol, £0 CPC!) — nobody bidding
  - **Task-specific:** "ai invoice processing", "ai customer support", "ai lead generation"

### Campaign 4: Local NI (Cheap Domination)
- Budget: £3/day (£90/month)
- Keywords: "ai consultancy northern ireland" (£0), "ai services northern ireland" (£2.54)
- Own the entire first page for NI AI searches

## Budget Scenarios

| Scenario | Campaigns | Daily | Monthly |
|----------|-----------|-------|---------|
| Lean start | 1 + 4 | £11 | £330 |
| Growth | 1 + 2 + 4 | £18 | £540 |
| Full | All 4 | £23 | £690 |

**Launch order:** Start lean → add Industry (week 3) → add Problem-Aware (week 5) → kill/scale monthly.

## Ad Copy — Blue Canvas Tone

### Rules
- Practical, not salesy. Specific, not generic.
- Lead with the client's problem or industry
- Always include "Free Consultation" in headlines
- Use UK spelling
- Headlines: max 30 chars each (3 headlines)
- Description: max 90 chars x 2

### Template
```
Headline 1: [Problem/Industry] — [Benefit]
Headline 2: [Specific Outcome]
Headline 3: Free Consultation | Blue Canvas AI
Description: [Pain point acknowledgment]. [What we do]. [Proof/specificity]. [CTA].
```

## Negative Keywords

Add to ALL campaigns:
```
ai art, ai image, ai generator, midjourney, dall-e
ai jobs, ai salary, ai career, ai hiring
free course, free training, tutorial, certification, degree
mckinsey, deloitte, accenture, pwc, kpmg
chatgpt, openai, anthropic, google gemini
ai girlfriend, ai chat, ai companion
homework, student, assignment, essay
```

## £0 CPC Gems (Priority Keywords)

| Keyword | Volume |
|---------|--------|
| ai seo agency | 720 |
| automate business processes uk | 70 |
| ai consultancy northern ireland | 50 |
| ai for estate agents uk | 30 |
| ai workflow automation uk | 30 |
| business process automation consultants uk | 30 |
| ai seo northern ireland | 30 |
| ai training northern ireland | 10 |

**960 combined searches/month at £0 CPC. Prioritise these.**

## Performance Tracking

£600/month investment — every pound must show returns. Track ruthlessly, act fast.

### Benchmarks & Targets

| Metric | Target | Red Flag |
|--------|--------|----------|
| CTR | >3% | <1.5% |
| CPC | <£8 | >£15 |
| Cost per lead | <£50 | >£100 |
| Conversion rate | >5% | <2% |
| Daily spend | £20 budget | >£25 (check bid caps) |
| Quality Score | >7 | <5 |

### Daily Review Checklist (5pm cron)

1. Check spend vs budget — flag if overspending
2. CTR by keyword — pause anything under 1% after 100 impressions
3. CPC trend — flag keywords with rising CPC
4. Conversions — which keywords actually generated leads
5. Search terms report — add negatives for irrelevant queries
6. Device performance — adjust bids if mobile/desktop diverge significantly

### Keyword Decision Rules

- **Pause** if: CTR <1% after 100 impressions, or CPC >£15 with no conversions
- **Boost** if: CTR >5% and CPC <£8 — increase bid by 10-15%
- **Add negative** if: search term irrelevant or competitor brand name
- **New keyword** if: search terms report shows relevant queries we're not targeting

### Weekly Performance Summary (include in Friday SEO monitor)

- Total spend vs budget
- Leads generated and cost per lead
- Best/worst performing keywords
- Recommendations for next week

### Monthly Review

- ROAS calculation (leads × £750 avg deal ÷ monthly spend)
- Campaign-level A/B test results
- Budget adjustment recommendation
- Competitor ad landscape changes

## Workflow

1. **Research:** Use Ahrefs to pull keyword data for new verticals
2. **Evaluate:** Score by volume, CPC, competition, and Blue Canvas service fit
3. **Draft:** Write ad copy following tone rules above
4. **Review:** Present to PJ with budget impact
5. **Launch:** Only after PJ approves — never auto-publish ads
6. **Optimise:** Monthly review — kill underperformers, scale winners
