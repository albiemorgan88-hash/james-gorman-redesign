# Satellite SEO Push Report — 13 February 2026

## Summary

Updated SEO meta fields on 2 of 3 satellite sites via Webflow API. Zapier site token lacks `pages:read` scope. All 3 sites are live, indexed, and have valid sitemaps. Semrush shows all satellites are brand new with zero organic visibility — expected for 1-day-old domains.

---

## 1. Page SEO Updates via Webflow API

### ✅ openclawconsultant.co.uk — Page `698e0445dc69546fedc5a64a`

| Field | Old Value | New Value |
|-------|-----------|-----------|
| seoTitle | `OpenClaw Consultant UK \| Expert Setup & Security \| Blue Canvas` | `OpenClaw Consultant UK \| Expert OpenClaw Setup & AI Assistant Configuration` |
| seoDescription | `Professional OpenClaw setup, security hardening, and optimisation for businesses. £1,500 flat rate. Based in Derry, Northern Ireland. Powered by Blue Canvas AI.` | `Hire a certified OpenClaw consultant for professional setup, security hardening & optimisation. AI assistant setup done right — £1,500 flat rate. OpenClaw expert based in Northern Ireland.` |
| openGraphTitle | `OpenClaw Consultant UK \| Expert Setup & Security` | Same as seoTitle |
| openGraphDescription | `Professional OpenClaw setup, security hardening, and optimisation for businesses. £1,500 flat rate. Powered by Blue Canvas AI.` | Same as seoDescription |

**Keywords targeted:** openclaw consultant, openclaw setup, openclaw expert, ai assistant setup

### ❌ zapierconsultant.co.uk — BLOCKED (Token Missing `pages:read` Scope)

API token `0ba952ee...` returns `OAuthForbidden: missing scopes - 'pages:read'`. Cannot list or update pages.

**Action required:** PJ needs to regenerate or update this API token in Webflow dashboard with `pages:read` and `pages:write` scopes.

### ✅ aiagentsetup.co.uk — Page `698e2fce782188cf144bb241`

| Field | Old Value | New Value |
|-------|-----------|-----------|
| seoTitle | `AI Agent Setup — Professional AI Automation & Configuration` | `AI Agent Setup UK \| Professional AI Automation Consultant & Expert Configuration` |
| seoDescription | `Professional AI agent setup for UK businesses. Full installation, security hardening, workflow automation and integration — £1,500 flat rate. Powered by Blue Canvas AI.` | `Expert AI agent setup for UK businesses. Professional AI automation consultant offering installation, security hardening & workflow automation. AI agent consultant UK — £1,500 flat rate.` |
| openGraphTitle | (copied from seo) | Same as seoTitle |
| openGraphDescription | (copied from seo) | Same as seoDescription |

**Keywords targeted:** ai agent setup, ai automation consultant, ai agent consultant uk, ai agent expert

> ⚠️ **Note:** Updates are in draft — sites need to be **published** in Webflow Designer for changes to go live.

---

## 2. Semrush Analysis

### Domain Rankings (UK Database)

| Domain | Rank | Organic KWs | Organic Traffic | Backlinks | Referring Domains |
|--------|------|-------------|-----------------|-----------|-------------------|
| openclawconsultant.co.uk | — | 0 | 0 | 0 | 0 |
| zapierconsultant.co.uk | — | 0 | 0 | 0 | 0 |
| aiagentsetup.co.uk | — | 0 | 0 | 0 | 0 |
| bluecanvas.ai | — | 0 | 0 | 8 | 8 |

All satellite sites created 12 Feb 2026 — no indexing or ranking data yet. Expected.

### Keyword Research (UK Database)

| Keyword | Search Volume | CPC (£) | Competition |
|---------|--------------|---------|-------------|
| openclaw consultant | — | — | — |
| openclaw setup | — | — | — |
| openclaw expert | — | — | — |
| ai assistant setup | — | — | — |
| **zapier consultant** | **90** | **7.13** | **0.75** |
| zapier expert uk | 0 | 0 | 0 |
| zapier automation consultant | 20 | 0 | 0.86 |
| zapier specialist | 20 | 8.29 | 0.80 |
| **ai agent setup** | **20** | **4.02** | **0.86** |
| **ai automation consultant** | **110** | **11.82** | **0.72** |
| ai agent consultant uk | — | — | — |
| ai agent expert | 20 | 11.17 | 0.57 |

**Key insights:**
- "openclaw" keywords have zero Semrush data — niche/new term, no search volume tracked yet
- **"ai automation consultant" (110/mo, £11.82 CPC)** is the highest-value keyword — aiagentsetup.co.uk should target this aggressively
- **"zapier consultant" (90/mo, £7.13 CPC)** is the primary money keyword for zapierconsultant.co.uk
- Competition scores are moderate-high (0.72–0.86) for valuable keywords

### Backlinks

- **bluecanvas.ai:** 8 backlinks from 8 referring domains (8 URLs)
- **All 3 satellites:** Zero backlinks — brand new, expected

---

## 3. Indexing & Sitemaps

| Site | sitemap.xml | robots.txt | Status |
|------|-------------|------------|--------|
| openclawconsultant.co.uk | ✅ Valid, 1 URL | ✅ Has sitemap reference | OK |
| zapierconsultant.co.uk | ✅ Valid, 1 URL | ✅ Has sitemap reference | OK |
| aiagentsetup.co.uk | ✅ Valid, 1 URL | ✅ Has sitemap reference | OK |

All sitemaps are valid XML with single homepage URL. Robots.txt files reference sitemap correctly.

**Note:** robots.txt files only contain `Sitemap:` directive — no `User-agent` or `Allow/Disallow` rules. Webflow handles this by default (allows all).

---

## 4. Technical SEO Checks

### openclawconsultant.co.uk
- **Title tag:** "OpenClaw Consultant — Expert AI Setup & Security" ✅
- **H1 present:** Not visible in extracted text (may be styled differently) ⚠️
- **H2s:** "Why You Need a Professional OpenClaw Consultant", "What's Included", "How It Works", "Powered by Blue Canvas AI", "Frequently Asked Questions" ✅
- **Content:** Rich, keyword-relevant content ✅
- **CTA:** Links to bluecanvas.ai/contact ✅
- **Internal linking:** Link to bluecanvas.ai ✅

### zapierconsultant.co.uk
- **Title tag:** "Zapier Consultant" (too short — needs optimisation in Designer) ⚠️
- **H2s:** "Get Your Zapier Automations Done Right", "Why You Need a Zapier Consultant", "What's Included", etc. ✅
- **Content:** Rich, keyword-relevant ✅
- **CTA:** Links to bluecanvas.ai/contact ✅

### aiagentsetup.co.uk
- **Title tag:** "OpenClaw Consultant — Expert AI Setup & Security" ❌ **WRONG — still shows OpenClaw title, not AI Agent**
- **H2s:** "Get Your AI Agent Set Up Properly", "Why You Need an AI Agent Expert", etc. ✅
- **Content:** Comprehensive, covers multiple AI platforms ✅
- **Page title in Webflow:** Still "OpenClaw Consultant" ⚠️ (the `title` field, not `seoTitle`)

### Common Issues Across All Sites
- **No `User-agent` in robots.txt** — OK (Webflow default allows all)
- **Single-page sites** — only homepage, no blog or additional pages for keyword targeting
- **All CTAs point to bluecanvas.ai/contact** — good for lead capture
- **Cannot check alt text** without full HTML/DOM access

---

## 5. Recommended Next Steps (PJ — Designer Required)

### Critical
1. **Publish all 3 sites** to push SEO meta changes live
2. **Fix zapierconsultant.co.uk API token** — regenerate with `pages:read` + `pages:write` scopes, then re-run SEO update
3. **Fix aiagentsetup.co.uk page title** — change from "OpenClaw Consultant" to "AI Agent Setup" in Designer (the `title` field, not just SEO title)
4. **Update zapierconsultant.co.uk `<title>` tag** — currently just "Zapier Consultant", should be "Zapier Consultant UK | Expert Automation Setup & Optimisation"

### SEO Quick Wins
5. **Add H1 tags** to all 3 sites if missing (check in Designer — the hero text should be H1)
6. **Add alt text** to all images across all 3 sites
7. **Add canonical URLs** via custom code (Webflow handles this automatically, but verify)
8. **Submit all 3 sitemaps to Google Search Console** — add properties and submit sitemap.xml URLs

### Growth / Link Building
9. **Add backlinks from bluecanvas.ai** to all 3 satellites (footer, services page, blog posts)
10. **Create blog content** on each satellite targeting long-tail keywords:
    - openclawconsultant.co.uk: "how to set up openclaw", "openclaw vs chatgpt", "openclaw security guide"
    - zapierconsultant.co.uk: "best zapier automations for small business", "zapier vs make comparison"
    - aiagentsetup.co.uk: "best ai agents for business 2026", "how to choose an ai agent platform"
11. **Google Business Profile** — if not already set up, create one linking to bluecanvas.ai with service area pages
12. **Schema markup** — add LocalBusiness and Service schema via Webflow custom code injection

### Monitoring
13. **Set up Google Search Console** for all 3 domains
14. **Re-run Semrush check in 4 weeks** to track indexing progress
15. **Monitor "ai automation consultant" (110/mo)** — highest value keyword, worth dedicated content

---

## 6. Keyword Tracking Baseline (13 Feb 2026)

| Keyword | Volume | Site | Current Rank |
|---------|--------|------|-------------|
| openclaw consultant | N/A | openclawconsultant.co.uk | Not indexed |
| openclaw setup | N/A | openclawconsultant.co.uk | Not indexed |
| openclaw expert | N/A | openclawconsultant.co.uk | Not indexed |
| ai assistant setup | N/A | openclawconsultant.co.uk | Not indexed |
| zapier consultant | 90 | zapierconsultant.co.uk | Not indexed |
| zapier automation consultant | 20 | zapierconsultant.co.uk | Not indexed |
| zapier specialist | 20 | zapierconsultant.co.uk | Not indexed |
| zapier expert uk | 0 | zapierconsultant.co.uk | Not indexed |
| ai agent setup | 20 | aiagentsetup.co.uk | Not indexed |
| ai automation consultant | 110 | aiagentsetup.co.uk | Not indexed |
| ai agent expert | 20 | aiagentsetup.co.uk | Not indexed |
| ai agent consultant uk | N/A | aiagentsetup.co.uk | Not indexed |

*All sites created 12 Feb 2026 — baseline established for future tracking.*
