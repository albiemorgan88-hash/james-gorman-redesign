---
name: local-seo-engine
version: 1.0.0
description: Turn your AI agent into a local business SEO consultant. Runs audits, competitor analysis, keyword research, content strategy, and weekly reporting — all autonomously. Built from a real production setup that manages paying clients.
author: Blue Canvas AI
price: 49
tags: [seo, local-business, audit, content, marketing, consulting]
---

# Local SEO Engine

> Turn your agent into a local business SEO consultant. Built from a real production setup managing paying clients — not theory.

## What This Skill Does

Your agent becomes an autonomous SEO consultant for local businesses. Point it at any website and it will:

1. **Run a full technical SEO audit** — page speed, meta tags, schema markup, crawl issues, mobile usability, broken links
2. **Research keywords** — find local search opportunities with volumes, difficulty scores, and ranking potential
3. **Analyse competitors** — compare domain authority, keyword gaps, content gaps, backlink profiles
4. **Build a content strategy** — monthly calendar with topics, target keywords, and briefs
5. **Generate reports** — branded PDF reports with baselines, changelogs, and targets
6. **Track progress** — weekly ranking snapshots, traffic trends, DR growth

## How It Works

### Phase 1: Audit (Day 1)
The agent crawls the target site and checks:
- Page titles, meta descriptions, H1 tags
- Schema markup (LocalBusiness, FAQPage, etc.)
- Page speed (Core Web Vitals)
- Mobile responsiveness
- Internal linking structure
- Broken links / 404s
- Sitemap and robots.txt
- Google Business Profile status

### Phase 2: Research (Day 2-3)
- Keyword research using search intent analysis
- Competitor identification (who ranks for target keywords)
- Content gap analysis (what competitors have that you don't)
- Backlink gap analysis
- Local search landscape

### Phase 3: Strategy (Day 4-5)
- Prioritised fix list (quick wins first)
- Content calendar (monthly topics + keywords)
- Location page recommendations
- Citation/NAP audit
- Link building opportunities

### Phase 4: Execution (Ongoing)
- Draft blog posts (SEO-optimised, ready to publish)
- Generate location pages
- Create meta tag recommendations
- Build internal linking maps
- Weekly progress reports

## Setup

1. Install the skill in your OpenClaw workspace
2. Set your target website in the config
3. (Optional) Add API keys for enhanced data:
   - Ahrefs API key (for DR, backlinks, keyword data)
   - Google Search Console access (for real ranking data)
   - PageSpeed API key (for Core Web Vitals)
4. Run the initial audit

## Config

```yaml
target_site: "https://example.com"
business_name: "Example Business"
location: "City, Country"
target_keywords: ["keyword 1", "keyword 2"]
competitors: ["competitor1.com", "competitor2.com"]
report_frequency: "weekly"  # weekly | fortnightly | monthly
report_day: "friday"
brand_colors:
  primary: "#2B4DAF"
  accent: "#FF4520"
```

## What You Get

- **Technical audit template** with 40+ checkpoints
- **Keyword research workflow** with volume/difficulty scoring
- **Competitor analysis framework** with gap identification
- **Content calendar generator** with SEO-optimised briefs
- **Report generator** producing branded PDFs
- **Cron templates** for automated weekly monitoring
- **Client communication templates** for reporting

## Real Results

Built from a production setup that:
- Manages a paying SEO client (estate agent, £250/mo retainer)
- Published 8 pages in a single day via browser automation
- Delivered branded PDF reports that clients called "fantastic"
- Tracks baselines: DR, keyword positions, traffic, backlinks
- Runs 5 automated cron jobs (audit, fix, attack, content, monitor)

## Requirements

- OpenClaw agent
- (Optional) Ahrefs API key for enhanced keyword/backlink data
- (Optional) Google Search Console API access
- (Optional) PageSpeed API key

## Who This Is For

- Freelance SEO consultants who want to scale with AI
- Marketing agencies adding SEO to their offerings
- Business owners who want autonomous SEO management
- OpenClaw operators looking to monetise their agent
