# James Gorman Property SEO Backlog

Use status tags: `TODO`, `IN PROGRESS`, `BLOCKED`, `DONE`.

## P1 — Website technical SEO
- [IN PROGRESS] Draft fix plan for **blank-X URL issue** completed; Phil publish still needed.
- [IN PROGRESS] Draft remediation plan for **mobile performance issues** on key pages completed in `technical-seo-fixes-2026-03-13.md`; Phil publish/dev work still needed.
- [IN PROGRESS] Draft fix note for **footer email typo** completed; Phil publish still needed.
- [IN PROGRESS] Draft fix note for **footer social links pointing wrong** completed; Phil publish still needed.
- [DONE] Homepage and priority page title/meta draft completed; **NEW: Homepage meta optimization draft 2026-03-17** targeting "estate agent derry" + "houses for sale derry" keywords; Phil publish still needed.
- [DONE] **NEW: Area pages content briefs completed 2026-03-17** - 6 full location briefs (Waterside, Cityside, Culmore, Eglinton, Drumahoe, Strathfoyle) with keyword targeting, H-structure, content outlines, internal linking strategy.
- [DONE] **NEW: Blog content strategy 2026-03-17** - 5 comprehensive blog briefs targeting high-value informational keywords: Derry property market, selling guide, area guide, first-time buyer guide, property valuation service.
- [IN PROGRESS] Internal linking recommendations drafted for core service/location pages.
- [IN PROGRESS] Indexation/crawl basics reviewed: sitemap + robots checked, duplicate/placeholder URL issues remain.
- [DONE] Draft schema implementation notes for `RealEstateAgent` / `LocalBusiness` / `Organization` in `content-strategy-2026-03-13.md`.

## P2 — Local SEO / GBP
- [TODO] Confirm whether a **Google Business Profile** exists under any alternate naming.
- [TODO] Draft GBP setup/claim checklist for Phil/client.
- [TODO] Draft recommended primary/secondary categories, business description, services, and photo plan.
- [TODO] Draft review acquisition plan once GBP is live.

## P3 — Citations / authority / content
- [TODO] Build first directory citation target list for NI / Ireland property sector relevance.
- [TODO] Draft citation consistency format (NAP standard) once official business details are confirmed.
- [DONE] Local content/page strategy drafted for Derry areas (`content-strategy-2026-03-12.md`, superseded by `content-strategy-2026-03-13.md`, **expanded with 6 comprehensive area page briefs 2026-03-17**).
- [DONE] Draft first 4 location pages from the strategy (`estate-agent-derry-2026-03-13.md`, `estate-agent-limavady-2026-03-13.md`, `estate-agent-eglinton-2026-03-13.md`, `estate-agent-dungiven-2026-03-13.md`).
- [DONE] Draft first 2 support articles from the content plan (`blog-01-draft-2026-03-12.md`, `blog-02-draft-2026-03-12.md`).
- [DONE] Draft support articles from content plan (`blog-03-draft-2026-03-13.md`, `blog-04-draft-2026-03-13.md`, **expanded with 5 strategic blog briefs 2026-03-17** targeting high-value keywords).
- [IN PROGRESS] Blog rollout plan drafted for Wix; Phil still needs to enable/verify blog, create categories, and publish manually.

## Reporting / tracking
- [IN PROGRESS] Weekly report template upgraded for reporting cadence.
- [BLOCKED] Pull first Ahrefs-backed weekly metrics snapshot — API key validated, but current Ahrefs Lite plan blocks live Site Explorer / Keywords Explorer exports outside free test queries.
- [TODO] Confirm GSC / GA4 access status for ongoing reporting.
- [IN PROGRESS] Friday 14:00 Europe/London report prep workflow documented.
- [DONE] Branded HTML client report created for 2026-03-13 with print-to-PDF layout: `james-gorman-seo-report-2026-03-13.html`.

## Admin / access / process
- [TODO] Rotate/regenerate exposed Wix/API token before long-term use.
- [DONE] Preliminary baseline report delivered.
- [DONE] Wix access obtained.
- [IN PROGRESS] First full SEO pass completed and documented.
- [BLOCKED] Validate authenticated Wix automation session for James site dashboard; current `agent-browser` route reaches Wix login only.
- [TODO] Run one-time authenticated draft-only Wix validation pass: verify site ID `4b8170fd-99cc-45e8-a4fb-e28bb7156d52`, page list/slugs, SEO settings, footer edit area, blog controls.
- [DONE] Validate Wix API with a real working credential in runtime: account lookup, site lookup, and safe site-properties read all confirmed on 2026-03-13.
- [BLOCKED] Apply live site-property updates via API — auth works, but the `business-profile` write payload shape still needs exact Wix schema validation after repeated `400 No updates on request body` responses.
- [BLOCKED] Create Wix blog categories and draft posts via API — current blog endpoints return `No blog instanceId found`, so the Wix Blog appears not to be enabled/attached for API operations yet.
- [BLOCKED] Create standard Wix site pages via public REST API — no supported public page-creation endpoint was validated in this run.

## Suggested next actions (Updated 2026-03-17)
1. **PRIORITY 1:** Phil implements homepage meta optimization from `homepage-meta-draft.md` — targets 1,200 monthly searches for "property for sale derry".
2. **PRIORITY 2:** Phil creates 6 area pages using content briefs from `area-pages-briefs.md` — starting with Waterside and Cityside (highest search volume).
3. **PRIORITY 3:** Phil enables Wix blog and publishes "Property Valuation Derry" blog post first (zero competition keyword).
4. Phil publishes remaining slug, metadata, email, and social fixes from `draft-meta-and-slugs-2026-03-12.md`.
5. Phil implements 5 strategic blog posts from `blog-briefs.md` to capture 400+ monthly searches across informational keywords.
6. Draft GBP setup pack and citation shortlist.
7. Upgrade Ahrefs access or export data manually for ongoing ranking tracking.
