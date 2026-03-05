# Satellite Sites SEO Audit & Blog Content Report

**Date:** 12 February 2026
**Prepared by:** OpenClaw Agent for Blue Canvas AI

---

## 1. SEO Audit Findings

### openclawconsultant.co.uk

**Overall:** Good foundation. Best-optimised of the three sites.

| Element | Status | Notes |
|---------|--------|-------|
| Meta Title | ✅ Set | "OpenClaw Consultant UK \| Expert Setup & Security \| Blue Canvas" |
| Meta Description | ✅ Set | Professional description with keywords and pricing |
| Open Graph Title | ✅ Set | Slightly shorter variant — good practice |
| Open Graph Description | ✅ Set | Matches meta description intent |
| OG Image | ❓ Unknown | Could not verify via API — check in Designer |
| Sitemap.xml | ❌ 404 | **CRITICAL** — sitemap returns 404. Needs fixing. |
| Robots.txt | ⚠️ Empty | Exists but contains no directives. Should include sitemap reference and User-agent rules |
| Heading Structure | ✅ Good | H1 present, proper H2/H3 hierarchy |
| Canonical URL | ❓ Check | Not verifiable via text fetch — confirm in Designer |
| Schema Markup | ❌ Missing | No structured data detected. Add LocalBusiness or ProfessionalService schema |
| CMS Collections | ❌ None | No collections exist — need to create Blog collection for posts |
| Pages | 1 (homepage only) | Single-page site |

**Recommended Fixes:**
1. **Fix sitemap.xml** — republish site or check Webflow SEO settings
2. **Add robots.txt content** — `User-agent: *` / `Allow: /` / `Sitemap: https://openclawconsultant.co.uk/sitemap.xml`
3. **Add schema markup** — ProfessionalService or LocalBusiness JSON-LD in custom code
4. **Create CMS Blog collection** — needed to host blog posts
5. **Add OG image** — branded social sharing image (1200x630px)
6. **Set canonical URL** — verify in page settings

---

### zapierconsultant.co.uk

**Overall:** Decent but API access issue prevents full audit. SEO metadata needs updating.

| Element | Status | Notes |
|---------|--------|-------|
| Meta Title | ⚠️ Poor | Browser title shows "zapierconsultant.co.uk" — no SEO title set |
| Meta Description | ❓ Unknown | API returned permission error — cannot verify |
| Open Graph | ❓ Unknown | Same — need pages:read scope on API token |
| Sitemap.xml | ✅ Exists | Valid, contains homepage URL only |
| Robots.txt | ✅ Good | Contains sitemap reference |
| Heading Structure | ✅ Good | Proper H2/H3 hierarchy on homepage |
| Schema Markup | ❌ Missing | No structured data detected |
| CMS Collections | ❌ None | No collections exist |
| Pages | ❓ Unknown | API token missing `pages:read` scope |

**API Issue:** Token `0ba952ee...` is missing `pages:read` scope. PJ needs to regenerate with correct permissions.

**Recommended Fixes:**
1. **Set SEO meta title** — e.g., "Zapier Consultant UK | Expert Automation Setup | £1,500 Flat Rate"
2. **Set SEO meta description** — include "zapier consultant", "zapier automation", pricing
3. **Add OG tags** — title, description and image
4. **Add schema markup** — ProfessionalService JSON-LD
5. **Create CMS Blog collection** — for blog content
6. **Fix API token** — regenerate with `pages:read` scope for future audits
7. **Expand sitemap** — will happen automatically when blog pages are added

---

### aiagentsetup.co.uk

**Overall:** Has significant issues — SEO metadata is copied from the OpenClaw site.

| Element | Status | Notes |
|---------|--------|-------|
| Meta Title | ❌ Wrong | Shows "OpenClaw Consultant UK \| Expert Setup & Security \| Blue Canvas" — **wrong site!** |
| Meta Description | ❌ Wrong | References OpenClaw setup, not AI agent setup — **copied from openclawconsultant.co.uk** |
| Open Graph Title | ❌ Wrong | Same issue — "OpenClaw Consultant UK" |
| Open Graph Description | ❌ Wrong | Same issue |
| Browser Title | ❌ Wrong | Shows "OpenClaw Consultant — Expert AI Setup & Security" |
| Sitemap.xml | ✅ Exists | Valid, contains homepage URL |
| Robots.txt | ✅ Good | Contains sitemap reference |
| Heading Structure | ✅ Good | Proper hierarchy on page content |
| Schema Markup | ❌ Missing | No structured data |
| CMS Collections | ❌ None | No collections exist |
| Pages | 1 (homepage only) | Single-page site |

**CRITICAL ISSUE:** All SEO metadata is duplicated from openclawconsultant.co.uk. Google will see duplicate content signals. This needs fixing immediately.

**Recommended Fixes:**
1. **URGENT: Update meta title** — "AI Agent Setup UK | Professional AI Automation Consultant | Blue Canvas AI"
2. **URGENT: Update meta description** — "Professional AI agent setup and automation for businesses. OpenClaw, n8n, LangChain, CrewAI. £1,500 flat rate. Powered by Blue Canvas AI."
3. **URGENT: Update OG tags** — unique title, description and image for this site
4. **Update browser/page title** — "AI Agent Setup — Professional AI Automation Consultant"
5. **Add schema markup** — ProfessionalService JSON-LD
6. **Create CMS Blog collection** — for blog content

---

## 2. Cross-Site Issues

| Issue | Sites Affected | Priority |
|-------|---------------|----------|
| No CMS Blog collections | All 3 | High — blocks blog publishing |
| No schema markup | All 3 | Medium — affects rich snippets |
| Duplicate SEO metadata | aiagentsetup.co.uk | **Critical** |
| Broken sitemap | openclawconsultant.co.uk | **Critical** |
| Empty robots.txt | openclawconsultant.co.uk | Medium |
| Missing API scope | zapierconsultant.co.uk | Low (tooling only) |

---

## 3. Blog Posts Created

All saved to `/projects/satellite-sites/blog-posts/`

### openclawconsultant.co.uk

| Filename | Title | Target Keywords |
|----------|-------|----------------|
| `openclaw-setup-guide-2026.md` | How to Set Up OpenClaw: Complete Guide 2026 | "openclaw setup", "openclaw guide" |
| `openclaw-vs-chatgpt.md` | OpenClaw vs ChatGPT: Which AI Assistant Is Right for Your Business? | "openclaw vs chatgpt", "ai assistant comparison" |

### zapierconsultant.co.uk

| Filename | Title | Target Keywords |
|----------|-------|----------------|
| `zapier-vs-make-2026.md` | Zapier vs Make: Which Automation Tool Is Right for Your Business in 2026? | "zapier vs make", "zapier alternative" |
| `10-zapier-automations-small-business.md` | 10 Zapier Automations Every Small Business Needs | "zapier automations small business", "best zapier workflows" |

### aiagentsetup.co.uk

| Filename | Title | Target Keywords |
|----------|-------|----------------|
| `what-is-an-ai-agent.md` | What Is an AI Agent? A Plain English Guide for Business Owners | "what is an ai agent", "ai agents explained" |
| `5-ai-agents-save-20-hours.md` | 5 AI Agents That Can Save Your Business 20 Hours a Week | "ai agents for business", "ai automation save time" |

All posts include:
- ✅ SEO-optimised title and meta description (in frontmatter)
- ✅ Natural keyword placement throughout
- ✅ Internal link to site homepage
- ✅ CTA linking to bluecanvas.ai/contact
- ✅ Proper heading hierarchy (H1 > H2 > H3)
- ✅ Short paragraphs, scannable format
- ✅ 1,300+ words each
- ✅ UK English throughout

---

## 4. CMS Collections Available

**None on any site.** All three sites have zero CMS collections. To publish blog posts, PJ needs to:

1. Create a "Blog Posts" CMS collection on each site in Webflow Designer
2. Add fields: Title, Slug, Content (Rich Text), Meta Title, Meta Description, Featured Image, Publish Date, Author
3. Create a blog listing page template and blog post template
4. Add the blog posts content from the markdown files
5. Publish

---

## 5. Action Items for PJ (Priority Order)

1. 🔴 **Fix aiagentsetup.co.uk SEO metadata** — currently showing OpenClaw content (duplicate)
2. 🔴 **Fix openclawconsultant.co.uk sitemap** — returning 404
3. 🟡 **Set zapierconsultant.co.uk meta title/description** — currently showing domain name only
4. 🟡 **Create Blog CMS collections** on all 3 sites
5. 🟡 **Add schema markup** (JSON-LD) to all 3 sites via custom code
6. 🟢 **Add OG images** (1200x630px) for all 3 sites
7. 🟢 **Fix openclawconsultant.co.uk robots.txt** — add directives
8. 🟢 **Regenerate zapierconsultant.co.uk API token** with pages:read scope
9. 🟢 **Publish blog posts** once CMS collections are set up
