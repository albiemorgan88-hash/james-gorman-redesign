# Google APIs Reference

## Prerequisites

### Enable APIs (Google Cloud Console → APIs & Services → Library)
1. **Google Analytics Data API** (GA4 reporting)
2. **Search Console API** (Google Webmaster Tools)

### OAuth2 Scopes Needed
- `https://www.googleapis.com/auth/analytics.readonly`
- `https://www.googleapis.com/auth/webmasters.readonly`

### Authentication
Use existing OAuth2 credentials from `~/.config/gcp-oauth.keys.json`.
Token refresh via standard Google OAuth2 flow.

---

## GA4 Data API v1beta

**Base URL:** `https://analyticsdata.googleapis.com/v1beta`

### bluecanvas.ai
- **Property ID:** `485727316`

### runReport
```
POST /v1beta/properties/{propertyId}:runReport

{
  "dateRanges": [{"startDate": "28daysAgo", "endDate": "today"}],
  "dimensions": [{"name": "sessionSource"}],
  "metrics": [{"name": "sessions"}, {"name": "totalUsers"}],
  "limit": 25,
  "orderBys": [{"metric": {"metricName": "sessions"}, "desc": true}]
}
```

### Common Dimensions
| Dimension | Description |
|-----------|-------------|
| `date` | YYYYMMDD |
| `sessionSource` | Traffic source (google, direct, etc.) |
| `sessionMedium` | Medium (organic, cpc, referral) |
| `sessionSourceMedium` | Combined source/medium |
| `pagePath` | URL path |
| `pageTitle` | Page title |
| `deviceCategory` | desktop, mobile, tablet |
| `country` | User country |
| `city` | User city |
| `landingPage` | First page in session |
| `sessionDefaultChannelGroup` | Channel grouping |

### Common Metrics
| Metric | Description |
|--------|-------------|
| `sessions` | Total sessions |
| `totalUsers` | Unique users |
| `newUsers` | First-time users |
| `screenPageViews` | Page views |
| `engagementRate` | Engaged sessions / total sessions |
| `averageSessionDuration` | Avg session length (seconds) |
| `bounceRate` | Single-page sessions |
| `conversions` | Goal completions |
| `userEngagementDuration` | Total engaged time |

### Report Recipes

**Traffic by source (last 7 days):**
```json
{
  "dateRanges": [{"startDate": "7daysAgo", "endDate": "today"}],
  "dimensions": [{"name": "sessionSourceMedium"}],
  "metrics": [{"name": "sessions"}, {"name": "totalUsers"}, {"name": "engagementRate"}],
  "orderBys": [{"metric": {"metricName": "sessions"}, "desc": true}],
  "limit": 15
}
```

**Top pages by traffic:**
```json
{
  "dateRanges": [{"startDate": "28daysAgo", "endDate": "today"}],
  "dimensions": [{"name": "pagePath"}, {"name": "pageTitle"}],
  "metrics": [{"name": "screenPageViews"}, {"name": "sessions"}, {"name": "engagementRate"}, {"name": "averageSessionDuration"}],
  "orderBys": [{"metric": {"metricName": "screenPageViews"}, "desc": true}],
  "limit": 20
}
```

**New vs returning users:**
```json
{
  "dateRanges": [{"startDate": "28daysAgo", "endDate": "today"}],
  "dimensions": [{"name": "newVsReturning"}],
  "metrics": [{"name": "totalUsers"}, {"name": "sessions"}, {"name": "engagementRate"}]
}
```

**Device breakdown:**
```json
{
  "dateRanges": [{"startDate": "28daysAgo", "endDate": "today"}],
  "dimensions": [{"name": "deviceCategory"}],
  "metrics": [{"name": "sessions"}, {"name": "totalUsers"}, {"name": "bounceRate"}]
}
```

**Week-over-week comparison:**
```json
{
  "dateRanges": [
    {"startDate": "7daysAgo", "endDate": "today"},
    {"startDate": "14daysAgo", "endDate": "8daysAgo"}
  ],
  "dimensions": [{"name": "sessionDefaultChannelGroup"}],
  "metrics": [{"name": "sessions"}, {"name": "totalUsers"}]
}
```

**Landing page performance:**
```json
{
  "dateRanges": [{"startDate": "28daysAgo", "endDate": "today"}],
  "dimensions": [{"name": "landingPage"}],
  "metrics": [{"name": "sessions"}, {"name": "bounceRate"}, {"name": "engagementRate"}, {"name": "conversions"}],
  "orderBys": [{"metric": {"metricName": "sessions"}, "desc": true}],
  "limit": 20
}
```

---

## Search Console API

**Base URL:** `https://www.googleapis.com/webmasters/v3`

### bluecanvas.ai
- **Site URL:** `https://www.bluecanvas.ai/` (or `sc-domain:bluecanvas.ai` if domain property)

### searchAnalytics.query
```
POST /webmasters/v3/sites/{siteUrl}/searchAnalytics/query

{
  "startDate": "2026-01-13",
  "endDate": "2026-02-10",
  "dimensions": ["query"],
  "rowLimit": 50,
  "startRow": 0
}
```

### Dimensions
- `query` — search query text
- `page` — URL that appeared in results
- `country` — 3-letter country code
- `device` — DESKTOP, MOBILE, TABLET
- `date` — individual date
- `searchAppearance` — rich result type

### Response Metrics (always returned)
- `clicks` — total clicks
- `impressions` — total impressions
- `ctr` — click-through rate (0.0 to 1.0)
- `position` — average position in results

### Report Recipes

**Top queries by clicks:**
```json
{
  "startDate": "2026-01-13",
  "endDate": "2026-02-10",
  "dimensions": ["query"],
  "rowLimit": 25
}
```

**SEO Quick Wins (position 4-10, high impressions):**
```json
{
  "startDate": "2026-01-13",
  "endDate": "2026-02-10",
  "dimensions": ["query", "page"],
  "dimensionFilterGroups": [{
    "filters": [
      {"dimension": "query", "operator": "excludes", "expression": "blue canvas"}
    ]
  }],
  "rowLimit": 100
}
```
Then filter in code: `position >= 4 && position <= 10 && impressions > 10`

**Content gaps (high impressions, low CTR):**
```json
{
  "startDate": "2026-01-13",
  "endDate": "2026-02-10",
  "dimensions": ["query", "page"],
  "rowLimit": 100
}
```
Then filter: `impressions > 50 && ctr < 0.03`

**Page performance:**
```json
{
  "startDate": "2026-01-13",
  "endDate": "2026-02-10",
  "dimensions": ["page"],
  "rowLimit": 50
}
```

**Target keyword tracking:**
```json
{
  "startDate": "2026-01-13",
  "endDate": "2026-02-10",
  "dimensions": ["query", "date"],
  "dimensionFilterGroups": [{
    "groupType": "and",
    "filters": [
      {"dimension": "query", "operator": "contains", "expression": "ai consultant"}
    ]
  }],
  "rowLimit": 500
}
```

**Mobile vs Desktop:**
```json
{
  "startDate": "2026-01-13",
  "endDate": "2026-02-10",
  "dimensions": ["device"],
  "rowLimit": 10
}
```

**Country breakdown:**
```json
{
  "startDate": "2026-01-13",
  "endDate": "2026-02-10",
  "dimensions": ["country"],
  "rowLimit": 20
}
```

---

## Notes
- GA4 date ranges accept: `today`, `yesterday`, `NdaysAgo`, or `YYYY-MM-DD`
- Search Console data has ~2-3 day lag
- Search Console max `rowLimit` is 25000
- Always include date ranges in reports for context
- Rate limits: GA4 ~10 req/sec; Search Console ~1200 req/min
