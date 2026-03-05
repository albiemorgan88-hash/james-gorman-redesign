---
name: webflow-seo
description: Manage a Webflow site and SEO. Use when the user asks about updating page titles, descriptions, headings, alt text, internal links, sitemaps, blog publishing, page speed, or any Webflow CMS/API task.
---

# Webflow SEO Management

## Site Context

- **Site:** bluecanvas.ai (www.bluecanvas.ai)
- **Site ID:** `67e4825704e6baf1d5246ef6`
- **Domain:** Blue Canvas — UK-based AI consultancy
- **API token:** env `WEBFLOW_API_TOKEN`

### CMS Collections
| Collection | ID | Slug |
|---|---|---|
| Blogs | `67e4825804e6baf1d5246f5b` | blog |
| Case Study Details | `67e4825804e6baf1d5246f5c` | case-study-details |
| Service Details | `67e4825804e6baf1d5246f5a` | service-details |
| Locations | `68121b612785240f2ca080de` | locations |
| FAQs | `6825ac8bf7c61e20bc2f590c` | faq |
| Categories | `67e4825804e6baf1d5246f5f` | category |
| Team Details | `67e4825804e6baf1d5246f5d` | team-details |

## Webflow API v2 — Quick Reference

Base URL: `https://api.webflow.com/v2`

Auth header on every request:
```
Authorization: Bearer <WEBFLOW_API_TOKEN>
```

### Core Endpoints

| Action | Method | Endpoint |
|--------|--------|----------|
| List sites | GET | `/sites` |
| List pages | GET | `/sites/{site_id}/pages` |
| Update page SEO | PUT | `/sites/{site_id}/pages/{page_id}` |
| List collections | GET | `/sites/{site_id}/collections` |
| List CMS items | GET | `/collections/{collection_id}/items` |
| Create CMS item | POST | `/collections/{collection_id}/items` |
| Update CMS item | PATCH | `/collections/{collection_id}/items/{item_id}` |
| Publish CMS items | POST | `/collections/{collection_id}/items/publish` |
| Publish site | POST | `/sites/{site_id}/publish` |

### Update Page SEO (Meta Title + Description)

```bash
curl -X PUT "https://api.webflow.com/v2/sites/{site_id}/pages/{page_id}" \
  -H "Authorization: Bearer $WEBFLOW_API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Page Title",
    "seo": {
      "title": "SEO Meta Title (50-60 chars)",
      "description": "Meta description (150-160 chars)"
    },
    "openGraph": {
      "title": "OG Title",
      "description": "OG Description"
    }
  }'
```

### Create/Update Blog Post (CMS Item)

```bash
curl -X POST "https://api.webflow.com/v2/collections/{collection_id}/items" \
  -H "Authorization: Bearer $WEBFLOW_API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "fieldData": {
      "name": "Blog Post Title",
      "slug": "blog-post-title",
      "post-body": "<p>HTML content here</p>",
      "post-summary": "Summary for listing pages",
      "meta-title": "SEO Title",
      "meta-description": "SEO Description",
      "main-image": { "url": "https://..." }
    }
  }'
```

After creating/updating, publish:
```bash
curl -X POST "https://api.webflow.com/v2/collections/{collection_id}/items/publish" \
  -H "Authorization: Bearer $WEBFLOW_API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{ "itemIds": ["item_id_1"] }'
```

## SEO Workflows

### 1. Page Meta Audit

1. `GET /sites` → get `site_id`
2. `GET /sites/{site_id}/pages` → list all pages with current `seo.title` and `seo.description`
3. Flag: missing titles, titles >60 chars, descriptions >160 chars, duplicate titles
4. Propose optimised titles/descriptions targeting Blue Canvas keywords
5. Apply with `PUT /sites/{site_id}/pages/{page_id}`

### 2. Heading Structure Audit

Webflow API doesn't expose DOM headings. Use `web_fetch` on each page URL:
1. Fetch page HTML via `web_fetch` with `extractMode: "text"`
2. Parse H1, H2, H3 tags from the raw HTML
3. Check: exactly 1 H1 per page, logical H2→H3 hierarchy, keywords in H1/H2
4. Report issues — fixes require Webflow Designer (flag for PJ) or Designer API

### 3. Image Alt Text Audit

1. Fetch page HTML via `web_fetch`
2. Find all `<img>` tags, check for missing/empty `alt` attributes
3. For CMS images: update alt text via `PATCH /collections/{id}/items/{item_id}` in the image field
4. For static images: flag for PJ to update in Webflow Designer

### 4. Internal Linking Strategy

**Target pages** (priority order):
- Homepage: bluecanvas.ai
- Service pages: /ai-consultancy, /ai-for-business
- Blog posts: /blog/*

**Rules:**
- Every blog post links to ≥2 other blog posts + 1 service page
- Service pages link to ≥3 relevant blog posts
- Use descriptive anchor text with target keywords (not "click here")
- Check for orphan pages (no inbound links) via crawl

**Audit process:**
1. Fetch each page, extract all internal `<a href>` links
2. Build link matrix — flag orphan pages and pages with <2 inbound links
3. Suggest specific link insertions with anchor text

### 5. Sitemap Management

- Webflow auto-generates sitemap at `https://www.bluecanvas.ai/sitemap.xml`
- Verify with `web_fetch` — check all important pages are included
- Excluded pages (404, utility) should have "Exclude from sitemap" in Webflow
- Submit sitemap to Google Search Console (manual step)
- After publishing new pages: verify they appear in sitemap within 24h

### 6. Blog Publishing Workflow

1. Draft content in markdown
2. Convert to Webflow-compatible HTML (clean `<p>`, `<h2>`, `<h3>`, `<ul>`, `<a>`)
3. Create CMS item via API with all SEO fields populated
4. Publish the item
5. Publish the site: `POST /sites/{site_id}/publish`
6. Verify live URL, check meta tags, submit to Google Search Console

### 7. Page Speed & Core Web Vitals

Use Google PageSpeed Insights API (no key required for basic):
```
https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=https://www.bluecanvas.ai&strategy=mobile
```

Check via `web_fetch`:
1. Fetch the PageSpeed API URL
2. Parse: LCP, FID/INP, CLS scores
3. Flag anything in red/orange
4. Common Webflow fixes: optimise images (WebP), lazy load below-fold, reduce custom fonts, minimise third-party scripts

## SEO Target Keywords

Priority keywords for Blue Canvas (update as strategy evolves):
- "AI consultancy UK"
- "AI for business development"
- "AI marketing UK"
- "AI consultancy Northern Ireland"
- "AI consultant Northern Ireland"
- "AI consultant Ireland"
- "AI for SMEs"
- "AI tender writing"
- "AI corporate coaching"

## Hard Rules

1. **NEVER publish the site.** Do not call `POST /sites/{site_id}/publish`. Ever. PJ publishes manually. No exceptions.
2. **NEVER publish CMS items.** Do not call `POST /collections/{id}/items/publish`. Stage changes only — PJ reviews and publishes.
3. **All changes are staged, not live.** Update pages/items via API, then notify PJ with a summary of what's queued.
4. **Custom code (schema, scripts)** cannot be injected via API — requires PJ to paste in Designer.
5. **Designer changes** (layout, styles, DOM elements, static content blocks) cannot be done via Data API — flag for PJ.

## Operational Notes

- **Rate limits:** Webflow API has rate limits (60 req/min). Batch operations carefully.
- **CMS field names** vary by collection — always `GET` the collection first to discover field slugs.
- **Token scopes available:** sites:write, pages:write, cms:write (but publishing is PJ-only per trust rules above).
- For detailed API reference, see [references/webflow-api.md](references/webflow-api.md)
