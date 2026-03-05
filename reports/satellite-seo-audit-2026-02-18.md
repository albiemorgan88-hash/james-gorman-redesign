# Satellite SEO Audit — 18 Feb 2026

## Summary Table

| Check | openclawconsultant.co.uk | zapierconsultant.co.uk | aiagentsetup.co.uk |
|-------|:---:|:---:|:---:|
| **HTTP Status** | ✅ 200 (0.27s) | ✅ 200 (0.36s) | ✅ 200 (0.27s) |
| **SSL Valid** | ✅ Expires 13 May 2026 | ✅ Expires 13 May 2026 | ✅ Expires 13 May 2026 |
| **DNS A Record** | ✅ 198.202.211.1 | ✅ 198.202.211.1 | ✅ 198.202.211.1 |
| **DNS CNAME www** | ✅ cdn.webflow.com | ✅ cdn.webflow.com | ✅ cdn.webflow.com |
| **Robots.txt** | ✅ Present (sitemap ref) | ✅ Present (sitemap ref) | ✅ Present (sitemap ref) |
| **Sitemap.xml** | ✅ 200 | ✅ 200 | ✅ 200 |
| **Title Tag** | ✅ Keyword-rich | ✅ Keyword-rich | ✅ Keyword-rich |
| **Meta Description** | ✅ Compelling | ✅ Compelling | ✅ Compelling |
| **H1 Tag** | ✅ Present | ✅ Present | ✅ Present |
| **Schema/JSON-LD** | ✅ Present | ✅ Present | ✅ Present |
| **OG Tags** | ⚠️ No og:image | ⚠️ No og:image | ⚠️ No og:image |
| **Canonical URL** | ✅ Set | ✅ Set | ✅ Set |
| **Viewport Meta** | ✅ Present | ✅ Present | ✅ Present |
| **Google Indexed** | ❌ 0 pages | ❌ 0 pages | ❌ 0 pages |
| **Webflow API** | ✅ Working (1 page) | ✅ Working (1 page) | ✅ Working (1 page) |
| **Content (words)** | ~1,179 | ~1,677 | ~3,112 |
| **Links to bluecanvas.ai** | ✅ 8 | ✅ 10 | ✅ 18 |
| **CTAs** | ✅ 22 | ✅ 7 | ✅ 29 |
| **Custom Favicon** | ❌ Default Webflow | ❌ Default Webflow | ❌ Default Webflow |
| **OG Image** | ❌ Missing | ❌ Missing | ❌ Missing |
| **Score** | **68/100** | **65/100** | **72/100** |

## Google Indexing Status

**None of the 3 sites are indexed yet** (0 results for `site:` queries on all 3). Sitemaps were submitted 16 Feb — only 2 days ago. This is normal; Google typically takes 4-14 days for new domains. Re-check around 1 March.

## Webflow API Notes

- All 3 tokens working ✅ (Zapier token `pages:read` scope is fine — no issue detected)
- Each site has exactly **1 page** (homepage only)
- ⚠️ AI Agent Setup's Webflow page title is "OpenClaw Consultant" (copy-paste error from cloning) — doesn't affect SEO but should be fixed for clarity

## Top 3 Issues Per Site

### openclawconsultant.co.uk (68/100)
1. **Not indexed by Google** — wait + request indexing via GSC
2. **No OG image** — social shares look bare, add branded image
3. **Default Webflow favicon** — add Blue Canvas / OpenClaw branded favicon

### zapierconsultant.co.uk (65/100)
1. **Not indexed by Google** — same as above
2. **No OG image** — add branded social share image
3. **Thinnest CTA count** (7) — add more prominent CTAs throughout the page

### aiagentsetup.co.uk (72/100)
1. **Not indexed by Google** — same as above
2. **No OG image** — add branded social share image
3. **Webflow page title mislabelled** as "OpenClaw Consultant" — fix in Webflow dashboard

## Priority Fixes (All Sites)

| Priority | Fix | Effort |
|----------|-----|--------|
| 🔴 High | Wait for Google indexing; re-check 1 March. If still 0, manually request via GSC URL Inspection | Low |
| 🔴 High | Add OG images to all 3 sites (1200×630px branded images) | Medium |
| 🟡 Medium | Replace default Webflow favicon with branded favicons | Low |
| 🟡 Medium | Fix AI Agent Setup Webflow page title from "OpenClaw Consultant" | 2 min |
| 🟢 Low | Add more pages (about, services, blog) to increase crawlable content | High |
| 🟢 Low | Add GA4 tracking to satellite sites for conversion data | Medium |

## DNS Note

TOOLS.md lists satellite DNS as `75.2.70.75` / `proxy-ssl.webflow.com`, but all 3 sites currently resolve to `198.202.211.1` / `cdn.webflow.com`. Both are valid Webflow IPs — the sites are working correctly. TOOLS.md should be updated to reflect the actual values.
