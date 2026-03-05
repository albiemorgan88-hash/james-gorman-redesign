# Satellite Site SEO Audit — 26 Feb 2026

---

## 1. openclawconsultant.co.uk (Vercel)

| Check | Status | Notes |
|-------|--------|-------|
| SSL | 🔴 | **Site is completely down.** SSL verification fails (error code 1), no response at all. |
| Meta title | 🔴 | N/A — site unreachable |
| Meta description | 🔴 | N/A |
| H1 tag | 🔴 | N/A |
| Schema markup | 🔴 | N/A |
| Canonical tag | 🔴 | N/A |
| robots.txt | 🔴 | Fetch failed |
| Sitemap | 🔴 | Fetch failed |
| Page speed | 🔴 | N/A |
| Links to bluecanvas.ai | 🔴 | N/A |

**Summary:** Site is offline. SSL cert has likely expired or DNS is misconfigured on Vercel.

---

## 2. zapierconsultant.co.uk (Webflow)

| Check | Status | Notes |
|-------|--------|-------|
| SSL | 🟢 | HTTPS working fine |
| Meta title | 🔴 | **67 chars** — "Zapier Consultant UK \| Expert Zapier Automation Setup & Optimisation". Over 60 char limit. Also has **duplicate title** in embedded HTML block. |
| Meta description | 🔴 | **181 chars** — way over 160. Also duplicated in embed block (slightly different wording). Google will truncate. |
| H1 tag | 🟡 | H1 is "Get Your Zapier Automations Done Right" — exists and is unique, but doesn't contain "Zapier consultant" keyword directly. |
| Schema markup | 🟢 | JSON-LD LocalBusiness present with correct data (duplicated in embed — harmless). |
| Canonical tag | 🟡 | Present in embedded HTML (`<link rel="canonical" href="https://zapierconsultant.co.uk/">`), but **not in the Webflow `<head>`**. May not be parsed by crawlers since it's inside a `w-embed w-script` block. |
| robots.txt | 🟢 | Clean — just references sitemap, no disallow rules. |
| Sitemap | 🟢 | Exists at /sitemap.xml with 1 URL. |
| Page speed | ⚪ | PageSpeed API quota exceeded — unable to test. |
| Links to bluecanvas.ai | 🟢 | Multiple links to bluecanvas.ai/contact and bluecanvas.ai. |

**Extra issues:**
- 🔴 **Default Webflow favicon** (favicon.ico and webclip.png are Webflow defaults)
- 🟡 **Duplicate `<title>` and `<meta description>`** — Webflow native head + embedded HTML block both set these. Could confuse crawlers.

---

## 3. aiagentsetup.co.uk (Webflow)

| Check | Status | Notes |
|-------|--------|-------|
| SSL | 🟢 | HTTPS working fine |
| Meta title | 🔴 | **80 chars** — "AI Agent Setup UK \| Professional AI Automation Consultant & Expert Configuration". Way over 60. Also duplicated. |
| Meta description | 🔴 | **184 chars** — over 160. Duplicated in embed. |
| H1 tag | 🟡 | H1 is "Get Your AI Agent Set Up Properly" — exists, unique, contains "AI Agent" keyword. Could be stronger. |
| Schema markup | 🟢 | JSON-LD LocalBusiness present with correct data. |
| Canonical tag | 🟡 | Same issue as Zapier — canonical only in embedded block, not in Webflow `<head>`. |
| robots.txt | 🟢 | Clean — just references sitemap. |
| Sitemap | 🟢 | Exists at /sitemap.xml with 1 URL. |
| Page speed | ⚪ | PageSpeed API quota exceeded. |
| Links to bluecanvas.ai | 🟢 | Multiple links throughout. |

**Extra issues:**
- 🔴 **Default Webflow favicon**
- 🔴 **OpenClaw Consultant content is embedded on this page too!** The page contains a full second landing page for "OpenClaw Consultant" below the AI Agent Setup content. This is a major SEO and UX problem — duplicate/conflicting content on a single page.
- 🟡 **Duplicate title and meta description tags** from Webflow head + embed.

---

## Priority Fixes

### 🚨 Critical
1. **openclawconsultant.co.uk is DOWN** — Check Vercel deployment, DNS records, and SSL cert. Likely needs redeployment or domain reconnection.
2. **aiagentsetup.co.uk has OpenClaw Consultant content embedded** — Remove the entire OpenClaw landing page content from this site. It's a completely separate service page living inside the AI Agent Setup page. Massive content confusion for Google.

### 🔴 High Priority
3. **Shorten meta titles (both Webflow sites):**
   - Zapier → `Zapier Consultant UK | Automation Setup £1,500` (48 chars)
   - AI Agent → `AI Agent Setup UK | Expert Configuration £1,500` (48 chars)
4. **Shorten meta descriptions (both):**
   - Zapier → `Expert Zapier automation consultant for UK businesses. Full audit, workflow design & integrations. £1,500 flat rate by Blue Canvas AI.` (136 chars)
   - AI Agent → `Professional AI agent setup for UK businesses. Installation, security hardening & workflow automation. £1,500 flat rate by Blue Canvas AI.` (139 chars)
5. **Remove duplicate title/description tags** — The Webflow native `<head>` tags AND the embedded HTML block both define `<title>` and `<meta description>`. Pick one source of truth (Webflow settings) and remove duplicates from the embed.
6. **Add canonical tag via Webflow settings** — Don't rely on the embed block. Set canonical in Webflow's page settings so it appears in the actual `<head>`.

### 🟡 Medium Priority
7. **Custom favicons** — Both Webflow sites use default Webflow favicons. Upload Blue Canvas branded favicon.
8. **Stronger H1 tags:**
   - Zapier → "Expert Zapier Consultant for UK Businesses"
   - AI Agent → "Professional AI Agent Setup for UK Businesses"
9. **PageSpeed audit** — API quota exhausted today. Re-run tomorrow or use own API key: `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url={URL}&strategy=mobile&key={API_KEY}`

---

*Audit ran: 26 Feb 2026 19:53 GMT*
