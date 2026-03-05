---
name: analytics-seo
description: Monitor website analytics and search performance. Use when PJ asks about traffic, rankings, SEO performance, search queries, click-through rates, content gaps, quick wins, GA4 data, Search Console data, heatmaps, session recordings, or performance reports for bluecanvas.ai.
---

# Analytics & SEO Monitoring

## Tools Available

### Via mcporter (MCP servers)
- `brave-search` — web search for competitive analysis
- `google-maps` — local SEO data, place details, reviews

### Via Google APIs (OAuth2 — see references/google-apis.md)
- **GA4 Data API** — traffic, sources, top pages, user behavior
- **Search Console API** — queries, CTR, position, impressions
- **Microsoft Clarity** — heatmaps, session recordings (free, no API key)

## Quick Reference

### GA4 Data API
```
POST https://analyticsdata.googleapis.com/v1beta/properties/{PROPERTY_ID}:runReport
Authorization: Bearer {TOKEN}
```
See `references/google-apis.md` → GA4 section for dimensions, metrics, and report patterns.

### Search Console API
```
POST https://www.googleapis.com/webmasters/v3/sites/{SITE_URL}/searchAnalytics/query
Authorization: Bearer {TOKEN}
```
See `references/google-apis.md` → Search Console section for query patterns.

## Core Workflows

### 1. SEO Quick Wins (Queries Ranked 4-10)
Find queries where bluecanvas.ai ranks on page 1 but not top 3 — small improvements = big traffic gains.

```
Search Console API → filter position >= 4 AND position <= 10
Sort by impressions DESC
```

Action for each:
- Check current page title/H1 — does it match the query?
- Check meta description — is the query included?
- Add internal links from other pages using that query as anchor text
- Consider expanding content depth on that page

### 2. Content Gap Analysis (High Impressions, Low CTR)
Find queries with many impressions but few clicks — title/description aren't compelling enough.

```
Search Console API → all queries, last 28 days
Filter: impressions > 50 AND ctr < 0.03
Sort by impressions DESC
```

Action for each:
- Rewrite meta title to include query + compelling hook
- Rewrite meta description with clear value prop + CTA
- Consider adding FAQ schema for featured snippet potential

### 3. Traffic Overview Report
Pull from GA4:
- **Sessions** by source/medium (last 7/28 days)
- **Top pages** by sessions + engagement rate
- **User acquisition** — new vs returning
- **Device breakdown** — mobile vs desktop

### 4. Weekly Performance Report
Combine GA4 + Search Console:
1. Total sessions, users, new users (GA4) — week-over-week change
2. Top 10 pages by traffic (GA4)
3. Top 10 queries by clicks (Search Console)
4. Quick wins update — position changes for target keywords
5. Content gaps — new high-impression/low-CTR queries

### 5. Monthly Performance Report
Everything in weekly, plus:
- Month-over-month trends (sessions, users, conversions)
- Keyword position tracking for target terms
- New keywords ranking (didn't rank last month)
- Backlink profile check (via Ahrefs/web search)
- Competitor ranking comparison

## Semrush API

**Key:** env var `SEMRUSH_API_KEY`
**Base URL:** `https://api.semrush.com/`

### Core Endpoints
| Action | Type Parameter |
|--------|---------------|
| Domain organic keywords | `domain_organic` |
| Domain overview (all DBs) | `domain_ranks` |
| Keyword overview | `phrase_all` |
| Keyword related | `phrase_related` |
| Backlinks overview | `backlinks_overview` (analytics/v1/) |
| Backlinks list | `backlinks` (analytics/v1/) |
| Competitor domains | `domain_organic_organic` |

### Common Parameters
- `database=uk` (or us, ie, etc.)
- `export_columns=Ph,Po,Nq,Cp,Ur,Tr` (keyword, position, volume, CPC, URL, traffic%)
- `display_limit=50`
- `domain=bluecanvas.ai`

### Example: Competitor Keywords
```
GET https://api.semrush.com/?type=domain_organic&key={KEY}&display_limit=50&export_columns=Ph,Po,Nq,Tr&domain=brainpool.ai&database=uk
```

### Example: Keyword Volume + Difficulty
```
GET https://api.semrush.com/?type=phrase_all&key={KEY}&export_columns=Ph,Nq,Cp,Co,Nr&phrase=ai%20consultancy%20uk&database=uk
```

### Example: Backlinks
```
GET https://api.semrush.com/analytics/v1/?key={KEY}&type=backlinks&target=bluecanvas.ai&target_type=root_domain&export_columns=source_title,source_url,external_num,internal_num,last_seen&display_limit=50
```

### Competitor Benchmarks (Feb 2026)
| Domain | Auth Score | Organic KWs | Top Keyword | Position |
|--------|-----------|-------------|-------------|----------|
| brainpool.ai | ? | 62 | "ai consultancy" | #1 |
| iwantmore.ai | ? | 31 | "ai consulting firms" | #1 |
| datatonic.com | ? | 36 | "datatonic" (brand) | #1 |
| bluecanvas.ai | 2 | 0 (not yet tracked) | — | — |

### Key Keyword Data (UK, Feb 2026)
| Keyword | Volume | CPC | Competition |
|---------|--------|-----|-------------|
| ai consulting | 1,300 | £14.57 | 0.51 |
| ai consultancy | 880 | £15.06 | 0.35 |
| ai consulting services | 590 | £18.48 | 0.12 |
| ai consultancy uk | 210 | £9.02 | 0.27 |
| ai audit | 320 | £5.46 | 0.62 |
| ai strategy consulting | 320 | £17.29 | 0.35 |
| ai consultancy london | 210 | £7.82 | 0.46 |
| ai training uk | 140 | £3.44 | 0.62 |
| ai consultancy NI | 50 | £0 | 0 |

## LLM Rankings Monitoring

Track how LLMs recommend Blue Canvas when asked about AI consultancies.

### Queries to Monitor
- "best ai consultancy uk"
- "ai consultant northern ireland"
- "ai consultancy for small business uk"
- "who are the top ai consultancies in the uk"
- "ai consultancy derry"

### Method
1. Use web_search to query each term
2. Check if bluecanvas.ai appears in results
3. Ask each LLM (via web_fetch on their web interfaces or API) the target queries
4. Track mentions, ranking position, and sentiment
5. Log results in weekly SEO audit report

### How to Improve LLM Rankings
- Get mentioned on high-authority sites (press, directories, reviews)
- Build structured data (schema markup — done)
- Create comprehensive, authoritative content that LLMs can cite
- Ensure consistent NAP (Name, Address, Phone) across directories
- Get customer reviews on Google, Clutch, GoodFirms

## Target Keywords (bluecanvas.ai)

### Primary (high priority)
- "ai consultancy" (880 vol) — brainpool.ai #1, need to outrank
- "ai consultancy uk" (210 vol) — brainpool.ai #2
- "ai consulting" (1,300 vol) — hardest, long-term goal
- "ai audit" (320 vol) — wide open, nobody ranking

### Secondary
- "ai consultant northern ireland" (50 vol) — easy win, local
- "ai training uk" (140 vol)
- "ai strategy consulting" (320 vol)
- "ai marketing uk" (90 vol)
- "ai for business development" (30 vol)

### Long-tail (blog targets)
- "ai consulting cost uk"
- "ai consultancy vs diy"
- "ai grants northern ireland"
- "roi of ai consulting"
- "ai audit for business"

## Microsoft Clarity Setup

### Installation (Webflow)
1. Go to https://clarity.microsoft.com → sign up (free, no limits)
2. Create project → enter `bluecanvas.ai`
3. Copy the tracking script
4. In Webflow: Project Settings → Custom Code → Head Code → paste script
5. Publish site

### What Clarity Provides (free)
- **Heatmaps** — click, scroll, area maps per page
- **Session recordings** — watch real user sessions
- **Insights** — dead clicks, rage clicks, excessive scrolling
- **Google Analytics integration** — connect GA4 for combined data

### Clarity MCP Server (optional)
```bash
npm install -g @microsoft/clarity-mcp-server
mcporter config add clarity --command "clarity-mcp-server"
```
Requires Clarity API token from project settings.

## API Setup

Before using GA4 or Search Console APIs, complete OAuth2 setup.
See `references/google-apis.md` for:
- Enabling APIs in Google Cloud Console
- OAuth2 token flow
- Full request/response examples for each API
- Common dimensions and metrics

## Safety Rules
- **NEVER send emails** without explicit PJ approval
- **NEVER modify** Search Console settings or GA4 configuration
- **Read-only** by default — report and recommend only
- Always show data with date ranges for context
