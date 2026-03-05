---
name: seo-engine
description: "Unified SEO engine orchestrating daily audit, fix, monitor, report, and ATTACK phases for Blue Canvas + UK Trade Jobs. Use when PJ asks to run an SEO audit, fix SEO issues, generate meta tags, draft blog content, check rankings, track keyword positions, create weekly/monthly SEO reports, analyse competitors, find quick wins, run the competitor warfare playbook, build location pages, audit citations, analyse backlink gaps, manage GBP, run Google Ads, or execute any end-to-end SEO workflow. Covers technical SEO, content SEO, local SEO (GBP, citations, reviews), Semrush + Ahrefs analysis, Webflow meta updates, GSC/GA4 monitoring, backlink gap analysis, GBP management, Google Ads, and reporting."
---

# SEO Engine v2.1 — Daily Audit · Fix · Attack · Monitor · Report

Unified **daily** SEO workflow across five phases: **Audit → Fix → Attack → Monitor → Report**.

v2.1 adds: **daily cadence**, **Ahrefs integration**, **GBP management**, **Google Ads orchestration**.

Delegates API specifics to sibling skills — do NOT duplicate their content:
- **analytics-seo** — GA4, GSC, Clarity APIs, Semrush endpoints, keyword data, competitor benchmarks
- **webflow-seo** — Webflow API, CMS operations, page meta updates, publishing rules
- **google-ads** — Campaign structure, keyword research, ad copy, budget management

This skill is the **orchestrator**. It defines *what* to do and *when*; sibling skills define *how*.

## Sites

| Site | Type | Domain | Stack | Purpose |
|------|------|--------|-------|---------|
| Blue Canvas (PRIMARY) | Local service | bluecanvas.ai | Webflow | AI consultancy — target #1 NI |
| OpenClaw Consultant | Local/niche | openclawconsultant.co.uk | Webflow | Satellite — OpenClaw setup service |
| UK Trade Jobs | National content | uktradejobs.com | Next.js/Vercel | Job board — £3-5k/mo target |
| Zapier Consultant | Satellite | zapierconsultant.co.uk | Webflow | Satellite |
| AI Agent Setup | Satellite | aiagentsetup.co.uk | Webflow | Satellite |

### Webflow Site IDs & Tokens

| Site | Site ID | Token Env |
|------|---------|-----------|
| bluecanvas.ai | `67e4825704e6baf1d5246ef6` | `WEBFLOW_API_TOKEN` |
| openclawconsultant.co.uk | `698e0444dc69546fedc5a613` | `WEBFLOW_OPENCLAW_CONSULTANT_TOKEN` |
| zapierconsultant.co.uk | `698e04eb79c3fa3bdcafe2d1` | `WEBFLOW_ZAPIER_CONSULTANT_TOKEN` |
| aiagentsetup.co.uk | `698e2fce782188cf144bb242` | `WEBFLOW_AI_AGENT_SETUP_TOKEN` |

## Tools & Access

| Tool | Access | Use For |
|------|--------|---------|
| **Semrush** | ❌ CANCELLED (zero units, Mar 2026) | Use Ahrefs + GSC instead |
| **Ahrefs** | Browser login (albiemorgan88@gmail.com) + API when available | Backlink gaps, referring domains, content explorer, DR tracking |
| **GSC** | API — site `https://www.bluecanvas.ai/` | Clicks, impressions, position tracking, quick wins |
| **GA4** | API — property `485727316` | Sessions, conversions, user behaviour |
| **Clarity** | Dashboard `vf82niitxf` | Heatmaps, session recordings, rage clicks |
| **GBP** | Manager access (albiemorgan88@gmail.com) | Photos, posts, reviews, Q&A, categories, attributes |
| **Webflow** | API tokens per site (see below) | Meta tags, CMS, blog publishing (staging only) |
| **PageSpeed** | API | Core Web Vitals, LCP, CLS, FID |
| **Google Ads** | Account `801-851-4760` | Paid search campaigns (when activated) |

## Key Context

- Target keyword: "ai consultancy northern ireland" (pos ~4.7)
- Big opportunity: "ai audit" (320 vol, low competition)
- Authority score: 2 (baseline)
- Competitors: brainpool.ai, iwantmore.ai, Artellis.ie, AICC (expand via Ahrefs)
- GSC site: `https://www.bluecanvas.ai/`
- GA4 Property: `485727316`
- GBP: "Blue Canvas AI - AI Consultancy Northern Ireland" (Manager access ✅)

---

## Phase 1: Audit (Technical + Content)

Run audits on-demand or as part of weekly cron (Mon 9am UK).

### 1.1 Technical Audit

For each site, check:

| Check | Method |
|-------|--------|
| Title tags | Webflow API `GET /sites/{id}/pages` — flag missing, >60 chars, duplicates |
| Meta descriptions | Same endpoint — flag missing, >160 chars |
| H1 structure | `web_fetch` each page → parse HTML, ensure exactly 1 H1 |
| Schema markup | `web_fetch` → check for JSON-LD in `<script type="application/ld+json">` |
| 404s | `web_fetch` key URLs, check HTTP status |
| Sitemap | `web_fetch https://{domain}/sitemap.xml` — verify all pages present |
| robots.txt | `web_fetch https://{domain}/robots.txt` — verify not blocking important paths |
| SSL | Confirm HTTPS redirect via `web_fetch` |
| Page speed | PageSpeed Insights API — flag LCP >2.5s, CLS >0.1 |
| Core Web Vitals | PageSpeed mobile + desktop scores |
| Canonical tags | Verify self-referencing canonicals on all pages |
| Hreflang | Check if needed (UK/IE targeting) |

### 1.2 Content Audit

For each page via `web_fetch`:
- Word count — flag thin pages (<300 words)
- Keyword density for target terms — flag if primary keyword absent from H1/title
- Internal links count — flag pages with <2 outbound internal links
- Orphan page detection — build link matrix, flag pages with 0 inbound links
- Duplicate content — flag similar titles/descriptions across pages
- Content freshness — flag pages not updated in 90+ days

### 1.3 On-Page SEO Checklist (per page)

From Sarvesh's 13-point checklist:
1. ✅ H1 contains primary keyword
2. ✅ Title tag contains primary keyword (front-loaded)
3. ✅ Meta description contains primary keyword + CTA
4. ✅ URL slug is clean and keyword-rich
5. ✅ First 100 words contain primary keyword
6. ✅ At least 3 internal links (both inbound and outbound)
7. ✅ At least 1 external authority link
8. ✅ Images have descriptive alt text with keywords
9. ✅ Content is 1,500+ words for competitive terms
10. ✅ FAQ section with schema markup
11. ✅ Table of contents for long content
12. ✅ Related posts/pages linked at bottom
13. ✅ Clear CTA above the fold

---

## Phase 2: Fix

All Webflow fixes are **staging only**. NEVER publish Webflow. PJ publishes manually.
UK Trade Jobs: Albie deploys autonomously.

### 2.1 Meta Tag Optimisation

**Title formula:** `{Primary Keyword} | {Value Prop} — Blue Canvas`
**Description formula:** `{What we do} for {who}. {Proof/CTA}. {Secondary keyword}.`

### 2.2 Blog Content Drafting

For target keywords lacking content:
1. Check Semrush `phrase_questions` for subtopics
2. Draft 1,500-2,000 word post following the 13-point on-page checklist
3. Include FAQ section (3-5 questions from Semrush data) with FAQ schema
4. Internal links to ≥2 existing pages + 1 service page
5. Save draft to `drafts/blog/` for PJ review

### 2.3 Internal Linking

From audit link matrix:
1. Identify orphan pages and under-linked pages
2. Recommend specific link insertions: source page → target page, anchor text
3. Build topic clusters: pillar page → supporting blog posts

### 2.4 Schema Markup

Generate JSON-LD for:
| Schema Type | When |
|-------------|------|
| LocalBusiness | Homepage — name, address, phone, openingHours, geo |
| FAQ | Any page with FAQ section |
| Article | Blog posts — headline, author, datePublished |
| Service | Service pages — serviceType, provider, areaServed |
| JobPosting | UK Trade Jobs — job detail pages |

---

## Phase 3: Attack (Competitive Warfare) 🎯

**NEW in v2.** The 6-pillar competitive destruction framework. Run monthly or on-demand.

### 3.1 Competitor Review Teardown

**Goal:** Know exactly how many reviews/month needed to overtake each competitor.

**Method:**
1. For each competitor, scrape their GBP listing via web search/fetch
2. Extract: total reviews, average rating, recent review velocity (30/60/90 day)
3. Analyse review content: most mentioned services, locations, complaints
4. Compare against Blue Canvas GBP

**Output:** `reports/attack/review-teardown-{date}.md`
```markdown
| Competitor | Total Reviews | Avg Rating | Reviews/Month (90d) | Top Service Mentioned | Weakness |
|-----------|--------------|------------|--------------------|-----------------------|----------|
```
+ "Reviews needed per month to overtake #1 in X months" calculation
+ Draft review request messages for PJ to send to clients

### 3.2 Service Area Page Gap Analysis

**Goal:** Find every service+location page competitors have that we don't.

**Method:**
1. Crawl our site + top 3-5 competitors
2. Map every service+location landing page each site has
3. Cross-reference: where do competitors have pages we don't?
4. For top gaps, check Google for who's ranking and what their page covers

**Output:** `reports/attack/page-gaps-{date}.md`
```markdown
| Service | Location | Our Site | Comp 1 | Comp 2 | Comp 3 | Priority |
|---------|----------|----------|--------|--------|--------|----------|
```

**Auto-execution:** For high-priority gaps, draft the page content following the 13-point checklist.

**Blue Canvas target locations:**
- Belfast, Dublin, Derry/Londonderry, Newry, Lisburn, Craigavon, Omagh, Enniskillen, Coleraine, Ballymena, Dungannon, Strabane, Cookstown, Limavady, Magherafelt, Downpatrick, Banbridge, Armagh, Carrickfergus, Larne, Antrim, Bangor, Newtownabbey, Newtownards

**Blue Canvas target services:**
- AI consultancy, AI audit, AI implementation, AI strategy, AI training, AI automation, AI workflow, ChatGPT training, AI for business, AI readiness assessment

**UK Trade Jobs target locations:**
- Every major UK city + counties. Build programmatic location pages: `/locations/{city}` with local job data.

**UK Trade Jobs target trades:**
- Electrician, plumber, carpenter, bricklayer, roofer, scaffolder, plasterer, painter & decorator, tiler, joiner, gas engineer, HVAC technician, welder, groundworker, steel fixer, crane operator, plant operator, site manager, quantity surveyor, building surveyor

### 3.3 GBP Category Audit

**Goal:** Ensure we have every relevant GBP category competitors use.

**Method:**
1. Search target keywords on Google Maps
2. For each map pack result, extract primary + secondary GBP categories
3. Compare against our categories
4. Identify correlations between categories and rankings

**Output:** `reports/attack/gbp-categories-{date}.md`
+ Recommended category changes for PJ to apply (or Albie if given GBP access)

**Blue Canvas likely categories:**
- Primary: "IT Consulting" or "Technology Consultant"
- Secondary: "Business Consultant", "Software Company", "Training Centre", "Management Consultant"

### 3.4 GBP Photo Strategy

**Goal:** Outpace competitor photo freshness and volume.

**Method:**
1. Check competitor GBP photo counts and upload recency
2. Compare against ours
3. Generate 8-week photo upload schedule

**Output:** `reports/attack/photo-plan-{date}.md`

**Photo types needed (priority order):**
1. Team/founder on-site (PJ working, meeting clients)
2. Before/after results (client dashboards, analytics)
3. Office/workspace
4. Local Derry landmarks (builds local relevance)
5. Event photos (talks, workshops)
6. Logo and branding shots

### 3.5 Citation Audit & NAP Cleanup

**Goal:** Consistent business info across all directories.

**Method:**
1. Search for business name + city across major directories
2. Check NAP consistency: name, address, phone, website URL
3. Flag mismatches (even "St" vs "Street")
4. Use Semrush Local for bulk fixes

**Directories to check:**
Yelp, BBB, Yell.com, Thomson Local, Scoot, Cylex, FreeIndex, Hotfrog, 192.com, Apple Maps, Bing Places, Facebook, LinkedIn, Trustpilot, Google Maps, Golden Pages (IE)

**Output:** `reports/attack/citations-{date}.md`
```markdown
| Directory | Name Match | Address Match | Phone Match | URL Match | Fix Needed |
|-----------|-----------|---------------|-------------|-----------|------------|
```

**Correct NAP for Blue Canvas:**
- Name: Blue Canvas (confirm with PJ)
- Address: (confirm with PJ)
- Phone: (confirm with PJ)
- URL: https://bluecanvas.ai

### 3.6 Backlink Gap Analysis

**Goal:** Find sites linking to competitors but not us — warm outreach targets.

**Method:**
1. Semrush API: `backlinks_refdomains` for each competitor
2. Cross-reference: find domains linking to 2+ competitors but not us
3. Classify by domain authority and relevance
4. Generate outreach hitlist with contact details

**If Ahrefs available:** Use `site-explorer/referring-domains` for deeper data.

**Output:** `reports/attack/backlink-gaps-{date}.md`
```markdown
| Domain | DA | Links to Comp1 | Links to Comp2 | Links to Us | Outreach Priority |
|--------|-----|---------------|----------------|-------------|-------------------|
```
+ Draft outreach email templates for each category (directory, blog, press, etc.)

---

## Phase 4: Monitor

### 4.1 Keyword Position Tracking

Weekly via GSC API:

**Blue Canvas priority keywords:**
- "ai consultancy northern ireland" (target: #1)
- "ai audit" (target: page 1)
- "ai consultancy uk"
- "ai consultant northern ireland"
- "ai consultants near me"
- "ai automation consultancy"
- "ai readiness assessment"

**UK Trade Jobs priority keywords:**
- "trade jobs uk"
- "electrician jobs"
- "plumber jobs"
- "construction jobs"
- "{trade} jobs {city}" patterns

**OpenClaw Consultant priority keywords:**
- "openclaw consultant"
- "openclaw setup"
- "ai agent consultant"

Store position history in `reports/keyword-tracking.md`.

### 4.2 Quick Wins

Flag keywords at position 4-10 with >50 impressions. For each:
1. Check title/description includes exact query
2. Check content depth vs competitors ranking above
3. Check internal link support
4. Recommend specific fix

### 4.3 Competitor Monitoring

Monthly via Semrush `domain_organic`:
- New keywords competitors rank for that we don't
- Position changes for shared keywords
- Authority score changes
- New pages published by competitors

### 4.4 Review Velocity Tracking

Monthly: track our review count vs competitors. Alert if we're falling behind target velocity.

### 4.5 LLM Rankings

Track how AI models recommend Blue Canvas:
Queries: "best ai consultancy uk", "ai consultant northern ireland", etc.

---

## Phase 5: Report

### 5.1 Weekly Report

Save to `reports/weekly-seo/YYYY-MM-DD.md`

```markdown
# Weekly SEO Report — {date}

## Summary
- Sessions: {n} ({+/-x}% WoW)
- Organic clicks: {n} ({+/-x}% WoW)
- Avg position: {n} ({+/-x})

## Keyword Positions
| Keyword | Position | Change | Impressions | Clicks |

## Quick Wins
| Keyword | Position | Impressions | Recommended Action |

## Actions Taken This Week

## Next Week Priorities
```

### 5.2 Monthly Report (includes Attack results)

Save to `reports/monthly-seo/YYYY-MM.md`

Additional sections:
- Attack phase results (all 6 pillars)
- New pages built
- Citations fixed
- Reviews gained
- Backlinks acquired
- Competitor comparison table
- Content published + performance

### 5.3 Quarterly Strategy Review

Save to `reports/quarterly-seo/YYYY-QN.md`

- 90-day traffic trend
- Keyword portfolio growth
- ROI on SEO effort
- Market share vs competitors
- Strategy adjustments for next quarter

---

## Execution Patterns

### Daily SEO Work (every day, 9am UK)

**Monday — Audit + Report Day**
1. Pull GSC + GA4 weekly data
2. Run technical audit on all sites (Phase 1)
3. Flag quick wins (pos 4-10, >50 impressions)
4. Generate weekly report → `reports/weekly-seo/`
5. Notify PJ with summary

**Tuesday — Fix Day**
1. Execute top priority fixes from Monday's audit
2. Update meta tags, fix broken links, add internal links
3. Stage blog content for Blue Canvas (Webflow CMS, don't publish)
4. Deploy UKTJ fixes autonomously

**Wednesday — Attack Day**
1. Run 2 of the 6 attack pillars (rotate each week)
2. Week 1: Review teardown + service area gaps
3. Week 2: GBP audit + photo strategy
4. Week 3: Citation audit + NAP cleanup
5. Week 4: Backlink gap analysis (Ahrefs + Semrush)
6. Generate attack report → `reports/attack/`

**Thursday — Content Day**
1. Draft 1-2 blog posts targeting keyword gaps
2. Blue Canvas: SEO-optimised article → `drafts/blog/`
3. UK Trade Jobs: new career guide or location page → deploy
4. Cross-link new content to existing pages
5. GBP: publish a Google Post (tip, offer, update, or event)

**Friday — Monitor + GBP Day**
1. Pull keyword position changes (GSC)
2. Check competitor movements (Semrush/Ahrefs)
3. Track review velocity vs competitors
4. Update GBP: respond to reviews, add photos if available
5. Log wins and changes to `reports/keyword-tracking.md`

**Saturday/Sunday — Background**
1. Light monitoring only (check for urgent drops)
2. Content planning for next week
3. Queue blog drafts if ahead of schedule

### Monthly Deep Dive (1st of month)
1. Full audit all sites (Phase 1)
2. Full attack all 6 pillars (Phase 3)
3. Competitor analysis refresh (Ahrefs DR + organic keywords)
4. Monthly report → `reports/monthly-seo/`
5. Strategy adjustments + notify PJ

### Quarterly Strategy Review
1. 90-day traffic trend analysis
2. Keyword portfolio growth assessment
3. ROI on SEO effort
4. Market share vs competitors
5. Report → `reports/quarterly-seo/`

### Content Sprint (on-demand)
1. Identify top 10 keyword gaps from attack analysis
2. Draft all 10 blog posts / location pages
3. Stage for review (BC) or deploy (UKTJ)
4. Notify PJ

---

## GBP Management (Blue Canvas)

### Daily/Weekly GBP Tasks
| Task | Frequency | Method |
|------|-----------|--------|
| Respond to reviews | Daily (when reviews come in) | GBP dashboard |
| Publish Google Post | Weekly (Thursday) | GBP dashboard — tip, offer, update, or event |
| Upload photos | As available | PJ provides, Albie uploads + optimises filename/alt |
| Answer Q&A | As questions appear | Monitor + respond |
| Update hours/attributes | As needed | Keep accurate |
| Track insights | Weekly | Views, searches, actions, direction requests |

### Google Post Types (rotate weekly)
1. **Tip/Update:** "3 signs your business needs an AI audit" — link to blog post
2. **Offer:** "Free 30-min AI consultation for NI businesses" — link to /contact
3. **Event:** Webinar, workshop, speaking engagement
4. **What's New:** New blog post, case study, or service announcement

### Photo Upload Strategy
- **Filename format:** `blue-canvas-ai-{description}-derry.jpg` (keywords in filename)
- **Target:** 5+ photos initially, add 1-2/month for freshness signal
- **Categories:** Founder, workspace, local (Derry), branding, client work (anonymised)

## Ahrefs Integration

### Key Endpoints (when API key available)
| Endpoint | Use |
|----------|-----|
| Site Explorer → Overview | DR, referring domains, organic keywords, traffic |
| Site Explorer → Backlinks | Full backlink profile, new/lost links |
| Site Explorer → Referring Domains | Who links to us vs competitors |
| Content Explorer | Find link-worthy content in our niche |
| Keywords Explorer | Search volume, KD, SERP analysis |
| Site Audit | Technical SEO crawl (complements our audit) |

### Ahrefs-Specific Attack Workflows
1. **Backlink Gap:** Our domain vs 3-5 competitors → find domains linking to them but not us
2. **Content Gap:** Keywords competitors rank for that we don't → content opportunities
3. **DR Tracking:** Monthly domain rating snapshots for us + competitors
4. **Link Intersect:** Find sites linking to multiple competitors → highest-value outreach targets
5. **Broken Link Building:** Find broken outbound links on relevant sites → pitch our content as replacement

### Ahrefs vs Semrush (when to use which)
| Task | Tool |
|------|------|
| Backlink analysis | **Ahrefs** (superior backlink index) |
| Keyword research | **Semrush** (better keyword database + SERP features) |
| Competitor organic keywords | **Semrush** (more granular position tracking) |
| Domain authority/rating | **Ahrefs** DR (more widely referenced) |
| Content gap analysis | **Ahrefs** (Content Explorer is best-in-class) |
| Technical audit | Both (cross-reference for completeness) |
| Local SEO / citations | **Semrush** (Listing Management tool) |

## Google Ads Integration

When PJ activates Google Ads:

### Keyword Research for Ads
1. Pull high-intent keywords from Semrush (CPC, volume, competition)
2. Filter for commercial intent: "hire", "cost", "near me", "services", "company"
3. Group into ad groups by theme
4. Estimate monthly budget at different impression share targets

### Campaign Structure
```
Campaign: Blue Canvas — Search
├── Ad Group: AI Consultancy NI
│   ├── "ai consultancy northern ireland"
│   ├── "ai consultant belfast"
│   └── "ai consultancy derry"
├── Ad Group: AI Audit
│   ├── "ai audit"
│   ├── "ai readiness assessment"
│   └── "ai audit for business"
├── Ad Group: AI Automation
│   ├── "ai automation consultancy"
│   ├── "business automation ai"
│   └── "ai workflow automation"
└── Ad Group: AI Training
    ├── "chatgpt training for business"
    ├── "ai training courses uk"
    └── "ai training for employees"
```

### Output
Save to `projects/google-ads/`:
- `keyword-list.md` — full keyword list with volumes, CPCs, groupings
- `campaign-structure.md` — ad groups, match types, negative keywords
- `ad-copy-drafts.md` — 3 responsive search ads per ad group
- `budget-guide.md` — recommended daily budget and expected results

---

## Hard Rules

1. **NEVER publish Webflow** — staging only, PJ publishes manually
2. **NEVER publish Webflow CMS items** — stage and notify PJ
3. **UK Trade Jobs: autonomous deploy OK** — Albie deploys without approval
4. **Read-only on GSC/GA4** — report and recommend only
5. **Source env vars** before Semrush/API calls: `source ~/.zprofile`
6. **All reports** saved to `reports/` with date-stamped filenames
7. **Log everything** — unwritten = forgotten
8. **Attack phase** outputs go to `reports/attack/`
9. **Draft content** goes to `drafts/` — never publish without review (except UKTJ)
10. **GBP: Albie manages** — photos, posts, reviews, Q&A. Don't change business name/address/phone without PJ approval
11. **Daily SEO is non-negotiable** — every day has a focus (Mon=audit, Tue=fix, Wed=attack, Thu=content, Fri=monitor)
12. **Ahrefs for backlinks, Semrush for keywords** — use the right tool for the job
13. **Cross-reference tools** — never rely on a single data source for strategic decisions
14. **Report wins to PJ** — flag ranking improvements, traffic spikes, quick win opportunities immediately
