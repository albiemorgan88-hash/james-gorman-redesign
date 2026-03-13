# James Gorman Property SEO Backlog

Use status tags: `TODO`, `IN PROGRESS`, `BLOCKED`, `DONE`.

## P1 — Website technical SEO
- [IN PROGRESS] Draft fix plan for **blank-X URL issue** completed; Phil publish still needed.
- [IN PROGRESS] Draft remediation plan for **mobile performance issues** on key pages completed in `technical-seo-fixes-2026-03-13.md`; Phil publish/dev work still needed.
- [IN PROGRESS] Draft fix note for **footer email typo** completed; Phil publish still needed.
- [IN PROGRESS] Draft fix note for **footer social links pointing wrong** completed; Phil publish still needed.
- [IN PROGRESS] Homepage and priority page title/meta draft completed; Phil publish still needed.
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
- [DONE] First local content/page strategy drafted for Derry / Limavady / Eglinton / Dungiven (`content-strategy-2026-03-12.md`, superseded by `content-strategy-2026-03-13.md`).
- [DONE] Draft first 4 location pages from the strategy (`estate-agent-derry-2026-03-13.md`, `estate-agent-limavady-2026-03-13.md`, `estate-agent-eglinton-2026-03-13.md`, `estate-agent-dungiven-2026-03-13.md`).
- [DONE] Draft first 2 support articles from the content plan (`blog-01-draft-2026-03-12.md`, `blog-02-draft-2026-03-12.md`).
- [DONE] Draft 2 additional support articles from the content plan (`blog-03-draft-2026-03-13.md`, `blog-04-draft-2026-03-13.md`).
- [IN PROGRESS] Blog rollout plan drafted for Wix; Phil still needs to enable/verify blog, create categories, and publish manually.

## Reporting / tracking
- [IN PROGRESS] Weekly report template upgraded for reporting cadence.
- [BLOCKED] Pull first Ahrefs-backed weekly metrics snapshot — API key validated, but current Ahrefs Lite plan blocks live Site Explorer / Keywords Explorer exports outside free test queries.
- [TODO] Confirm GSC / GA4 access status for ongoing reporting.
- [IN PROGRESS] Friday 14:00 Europe/London report prep workflow documented.

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

## Suggested next actions
1. Phil publishes the slug, metadata, email, and social fixes from `draft-meta-and-slugs-2026-03-12.md`.
2. Phil publishes the 4 location page drafts created on 2026-03-13 and adds homepage/service-page internal links to them.
3. Draft GBP setup pack and citation shortlist.
4. Upgrade Ahrefs access or export data manually from the UI so future reports can include DR, backlinks, organic keywords and tracked rankings.
5. Enable/verify Wix Blog, create the recommended categories, and publish `blog-01-draft-2026-03-12.md` first, followed by the 2026-03-13 support articles.
