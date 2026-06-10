# OpenClaw SEO Sprint - 2026-05-19

## Goal

Make `openclawconsultant.co.uk` the strongest white-hat commercial resource for OpenClaw-related searches, with priority on:

- `openclaw`
- `openclaw consultant`
- `openclaw consulting`
- `openclaw installation`
- `openclaw setup`
- `openclaw ai`
- `openclaw agent`

## Current Evidence

- Repo inspected: `/Users/philsagent/.openclaw/workspace/projects/openclaw-consultant`
- Live site checked: `https://openclawconsultant.co.uk/`
- SERP checked manually via web search for `openclaw`, `openclaw consultant`, `OpenClaw AI agent`, and `OpenClaw installation`.
- SERP rechecked after the second pass. The visible landscape still contains official/docs/GitHub-style OpenClaw resources, third-party OpenClaw docs sites, consultant competitors, Wikipedia, TechRadar articles, Reddit, and arXiv results. This supports building topical authority and commercial service clarity rather than link spam or doorway pages.
- SERP rechecked during the fifth pass for `openclaw`, `openclaw consultant`, `OpenClaw AI agent`, `OpenClaw installation service`, `OpenClaw consulting service`, `OpenClaw setup service UK`, `OpenClaw consultant UK`, and `OpenClaw managed service`. The visible landscape contains official/docs pages, hosted OpenClaw providers, managed-hosting offers, setup/installation competitors, security commentary, Reddit discussions, and media/reference pages. This supports clearer commercial intent routing, managed-service differentiation, and safety/governance proof rather than broad hype copy.
- GSC local dashboard checked: `/Users/philsagent/.openclaw/workspace/reports/raw/gsc-dashboard-2026-05-19.json`
- GSC status for `openclawconsultant.co.uk`: blocked/no data because token refresh failed with HTTP 400. No current query/click evidence was available from GSC.
- GSC browser access confirmed on 2026-05-19 via `philip@bluecanvas.ai` for the domain property `sc-domain:openclawconsultant.co.uk`.
- GSC live 3-month baseline from the Performance report:
  - 70 total web search clicks.
  - 7k total impressions.
  - 1% average CTR.
  - 10.6 average position.
  - Last update: 5.5 hours before capture.
- GSC top visible queries from the 3-month report:
  - `openclaw consultant`: 4 clicks, 47 impressions.
  - `open claw consultant`: 4 clicks, 6 impressions.
  - `copilot studio vs openclaw`: 1 click, 7 impressions.
  - `openclaw expert`: 1 click, 1 impression.
  - `openclaw setup services`: 1 click, 1 impression.
- GSC top visible pages from the 3-month report:
  - `https://openclawconsultant.co.uk/`: 43 clicks, 996 impressions.
  - `/guides/openclaw-vs-copilot-studio`: 3 clicks, 108 impressions.
  - `https://www.openclawconsultant.co.uk/`: 2 clicks, 29 impressions.
  - `/guides/ai-agents-for-accountants`: 2 clicks, 15 impressions.
  - `/guides/openclaw-customer-support`: 2 clicks, 11 impressions.
- GSC Page indexing report:
  - 235 indexed pages.
  - 9 not indexed pages.
  - Not indexed reasons: 3 redirects, 1 404, 1 blocked by robots.txt, 4 discovered currently not indexed.
  - Sitemaps are successful: canonical non-www sitemap shows 245 discovered pages; www sitemap shows 13 discovered pages.
- GSC Links report:
  - 1,449 external links, all visible top-page links pointing to the homepage.
  - Top linking sites visible: `uktradejobs.com` with 1,307 links and `bluecanvas.ai` with 142 links.
  - Internal links total: 227, with 216 visible links to the homepage and only 1-4 links to key OpenClaw commercial guide pages.
- Vercel metadata checked: `.vercel/project.json` and `production-manifest.json`.

## Findings

- The site already has many OpenClaw long-tail pages and a dynamic sitemap.
- The head term `openclaw` needs a stronger central entity page. Existing authority was spread across `/`, `/guides`, and many long-tail guide pages.
- `robots.txt` blocked `/_next/`, which can prevent Google from fetching Next.js static assets when rendering pages.
- Global structured data existed, but it was a single `ProfessionalService` object. It did not clearly connect the site, business entity, OpenClaw topics, service knowledge and commercial scope.
- The old guide copy included unsupported superlatives such as "most powerful AI agent platform". That is risky for defensibility and trust.
- The existing worktree was already dirty before this sprint. Changes were kept additive and targeted.

## Implemented First Pass

- Added `/openclaw` as the primary commercial/entity hub for OpenClaw setup, consulting, installation, custom skills, agent teams and security controls.
- Added metadata, canonical URL, Open Graph data, Service schema and FAQ schema for `/openclaw`.
- Added internal links from `/openclaw` to the core OpenClaw guide cluster.
- Added `/openclaw` to the top navigation and footer.
- Added `/openclaw` to `sitemap.xml` with priority `1.0`.
- Removed `Disallow: /_next/` from `robots.txt` so Google can render static assets.
- Expanded global JSON-LD to a `@graph` with `ProfessionalService` and `WebSite` entities.
- Softened unsupported OpenClaw guide claims to more defensible wording, including superlatives, hard uptime claims, broad ROI numbers, and hidden structured-data prices.
- Added `/openclaw` to `production-manifest.json` route checks.
- Deployed production build to Vercel and aliased it to `openclawconsultant.co.uk`.

## Implemented Second Pass

- Added shared guide-level JSON-LD to `GuidePageTemplate` and `GuideLandingPage`.
- Every guide using those templates now emits an `Article`, `FAQPage`, and `BreadcrumbList` graph when it passes a canonical path.
- Added visible breadcrumb navigation to guide hero sections so crawlers and users can see the guide hierarchy.
- Wired canonical paths into all 44 guide template call sites, including direct guide pages and generated guide families.
- Confirmed generated industry guides, workflow guides, booking/admin guides, commercial guide pages and landing-style guides share the same schema pattern.
- Re-deployed production build to Vercel and re-verified the `openclawconsultant.co.uk` alias.

## Implemented Third Pass

- Added shared service-level JSON-LD via `ServiceSeo`.
- All 8 service routes now emit `WebPage`, `Service`, and `BreadcrumbList` schema.
- Added visible breadcrumbs to `/services` and every service detail page.
- Removed the old single service schema from `/services/openclaw-installation` that exposed hard-coded pricing in JSON-LD.
- Softened service-page claims that were too hard to defend publicly, including:
  - named-person mentions in public service copy,
  - hard weekly-savings and ROI promises,
  - fake-looking case-study result percentages and revenue claims,
  - "bank-grade" security language,
  - broad "24/7" and "unlimited" support wording,
  - unsupported production-skill and lead-generation numbers.
- Reframed service claims around baselining, value modelling, review gates, logs, security planning, and measurable pilots.
- Re-deployed production build to Vercel and re-verified the `openclawconsultant.co.uk` alias.

## Implemented Fourth Pass

- Rechecked the live OpenClaw SERP landscape for head, consultant, installation, and setup-style searches.
- Audited intent overlap between:
  - `/services/openclaw-installation`
  - `/services/setup-configuration`
  - `/guides/openclaw-installation-service`
  - `/guides/openclaw-setup-service-uk`
- Clarified the split between educational guide pages and transactional service pages.
- Added visible guide-to-service and service-to-guide crosslinks for the install/setup cluster.
- Updated `/openclaw` hub links so setup guide and setup service links point at distinct intent targets.
- Updated the footer to point primary commercial setup traffic to `/services/setup-configuration` and added a direct installation service link.
- Softened installation/setup service claims that were too easy to overstate, including broad timing promises, "unlimited" custom skill language, "production-ready" wording, and "correct first time" style claims.
- Re-deployed production build to Vercel and re-verified the `openclawconsultant.co.uk` alias.

## Implemented Fifth Pass

- Rechecked current SERP evidence for consultant, setup, installation, and managed-service style queries.
- Audited the next commercial-intent cluster around:
  - `/openclaw`
  - `/services/ai-agent-consulting`
  - `/services/enterprise-openclaw`
  - `/guides/openclaw-consultant-uk`
  - `/guides/openclaw-implementation-consultant-uk`
  - `/guides/openclaw-deployment-service-uk`
  - `/guides/openclaw-managed-service-uk`
  - `/guides/openclaw-consultant-cost-uk`
  - `/guides/openclaw-managed-service-cost-uk`
- Added stronger internal links from `/openclaw` to the consultant, implementation, deployment, managed-service, and consultant-cost guides.
- Added buyer-routing sections to `/services/ai-agent-consulting` so users and crawlers can move to the OpenClaw consultant and implementation guides when they are still researching.
- Added buyer-routing sections to `/services/enterprise-openclaw` so users and crawlers can move to enterprise deployment and managed-service guides before scoping a service engagement.
- Softened older service-page copy that was too broad or too hard to defend, including transformation language, vague "AI revolution" copy, hard ROI/time-saving claims, unsupported production-skill/lead-generation numbers, "bank-grade" security language, "unlimited users", "24/7 support", compliance guarantees, and hard enterprise price anchors.
- Reframed enterprise claims around scoped discovery, governance, audit evidence, implementation support, data-flow design, and value modelling.
- Re-deployed production build to Vercel and re-verified the `openclawconsultant.co.uk` alias.

## Implemented Sixth Pass

- Rechecked the live SERP landscape for OpenClaw security, OpenClaw vs ChatGPT, OpenClaw vs Zapier/Make/n8n, and managed/self-hosted OpenClaw intent.
- Audited the comparison/security cluster around:
  - `/guides/openclaw-vs-chatgpt`
  - `/guides/openclaw-vs-zapier-vs-make`
  - `/guides/openclaw-security-best-practices`
  - `/guides/openclaw-security-compliance`
  - `/openclaw`
- Added shared `GuideArticleJsonLd` for custom guide pages that do not use the standard guide templates.
- Added `Article` and `BreadcrumbList` schema to the four custom comparison/security pages; added `FAQPage` schema to `/guides/openclaw-vs-chatgpt`.
- Added visible breadcrumbs to those custom guide pages so the guide hierarchy is visible to users and crawlers.
- Added internal links from `/openclaw` to the security/compliance and comparison pages.
- Fixed the broken `/guides/openclaw-vs-chatgpt` title and rewrote the metadata around business comparison intent.
- Softened comparison and security claims that were too hard to defend, including:
  - ChatGPT memory and tool-limit absolutes,
  - OpenClaw "without human intervention", "24/7", "unlimited", and "complete data control" phrasing,
  - stale hard pricing tables for Zapier, Make, and OpenClaw,
  - "GDPR compliant", "enterprise-grade", and compliance-guarantee language,
  - blockchain/audit-trail claims and exact incident-response timing promises.
- Updated JSON-LD rendering in shared guide/service/global schema emitters to escape `<` characters before injecting structured data.
- Re-deployed production build to Vercel and re-verified the `openclawconsultant.co.uk` alias.

## Implemented Seventh Pass

- Confirmed live Google Search Console access for the domain property.
- Captured the first live GSC baseline for clicks, impressions, CTR, average position, indexed pages, sitemap status, external links and internal links.
- Identified that the homepage carries almost all visible external link equity and most internal link concentration.
- Added a homepage OpenClaw resource hub linking directly to:
  - `/openclaw`
  - `/guides/openclaw-vs-copilot-studio`
  - `/services/setup-configuration`
  - `/guides/openclaw-consultant-cost-uk`
  - `/guides/openclaw-pricing-explained`
  - `/guides/openclaw-security-best-practices`
- Changed the homepage hero secondary CTA from case studies to the `/openclaw` hub so homepage authority flows into the primary OpenClaw entity page.

## Implemented Eighth Pass

- Used GSC evidence to prioritise pages that already had impressions or were newly linked from the homepage authority hub.
- Strengthened `/guides/openclaw-vs-copilot-studio`, which GSC showed already earning OpenClaw comparison impressions:
  - Added direct links to `/openclaw` and `/services/setup-configuration`.
  - Kept canonical-path guide schema coverage.
  - Updated related guides so the comparison page now routes users and crawlers into the commercial OpenClaw hub and setup service.
- Reworked `/services/setup-configuration` to be more defensible and less over-promissory:
  - Replaced hard package prices and delivery windows with scoped quote language.
  - Replaced fixed custom-skill and support-count promises with scoped handover/support wording.
  - Softened production-ready, expert, optimisation, security hardening, and response-time claims.
  - Added stronger internal routing to `/openclaw`, `/guides/openclaw-pricing-explained`, `/guides/openclaw-setup-service-uk`, and `/services/openclaw-installation`.
- Reworked `/guides/openclaw-pricing-explained`:
  - Added shared `GuideArticleJsonLd` plus visible breadcrumb navigation.
  - Changed ROI and cost language from hard claims to planning assumptions and pilot targets.
  - Replaced hard OpenClaw software/API/hosting/setup/support claims with scoped, usage-dependent, and provider-dependent wording.
  - Removed targeted risky phrases such as `real ROI`, `Expected ROI`, `Free consultation`, fixed setup prices, fixed setup windows, `works immediately`, and `production-ready`.
- Added `/guides/openclaw-pricing-explained` to production manifest critical route checks.
- Re-deployed production build to Vercel and re-verified the `openclawconsultant.co.uk` alias.

## Files Changed In This Sprint

- `app/page.tsx`
- `app/openclaw/page.tsx`
- `app/faq/page.tsx`
- `app/layout.tsx`
- `app/robots.txt/route.ts`
- `app/sitemap.xml/route.ts`
- `app/guides/what-is-openclaw-2026/page.tsx`
- `app/guides/openclaw-agent-team-setup/page.tsx`
- `app/guides/openclaw-customer-support/page.tsx`
- `app/guides/openclaw-performance-optimization-guide/page.tsx`
- `app/guides/openclaw-pinchy-enterprise-stack/page.tsx`
- `app/guides/top-10-openclaw-skills/page.tsx`
- `app/guides/openclaw-security-best-practices/page.tsx`
- `app/guides/openclaw-security-compliance/page.tsx`
- `app/guides/openclaw-vs-chatgpt/page.tsx`
- `app/guides/openclaw-vs-copilot-studio/page.tsx`
- `app/guides/openclaw-vs-zapier-vs-make/page.tsx`
- `app/guides/openclaw-pricing-explained/page.tsx`
- `app/guides/_content/bookingAdminPages20260506.tsx`
- `app/guides/_content/commercialBlast20260424.tsx`
- `app/guides/_content/workflowPages20260502.tsx`
- Direct guide pages using `GuidePageTemplate` or `GuideLandingPage` now pass `canonicalPath`.
- `app/services/enterprise-openclaw/page.tsx`
- `app/services/openclaw-installation/page.tsx`
- `app/services/ai-agent-consulting/page.tsx`
- `app/services/custom-agent-development/page.tsx`
- `app/services/page.tsx`
- `app/services/setup-configuration/page.tsx`
- `app/services/small-business-automation/page.tsx`
- `app/services/training-support/page.tsx`
- `components/GuideLandingPage.tsx`
- `components/GuidePageTemplate.tsx`
- `components/GuideArticleJsonLd.tsx`
- `components/Navbar.tsx`
- `components/Footer.tsx`
- `components/ServiceSeo.tsx`
- `production-manifest.json`
- `reports/openclaw-seo-sprint-2026-05-19.md`

## Validation Completed

- `npm run lint` passed.
- `npm run build` passed locally.
- Browser smoke test passed for `http://localhost:3012/openclaw`: page loaded, no Next.js error overlay, meaningful content rendered, key navigation links and contact form were present.
- Local route smoke tests passed for `/openclaw`, `/sitemap.xml`, and `/robots.txt`.
- Second-pass consistency check passed: 44 guide template files found, zero missing `canonicalPath` values.
- Browser smoke tests passed on `http://localhost:3013/guides/openclaw-consultant-uk`, `http://localhost:3013/guides/openclaw-for-law-firms`, and `http://localhost:3013/guides/openclaw-vs-manus`.
- Local browser checks confirmed visible breadcrumbs, no framework error overlay, and `BreadcrumbList` plus `FAQPage` JSON-LD on representative guide types.
- Third-pass service consistency check passed: 8 service route files found, all with canonical metadata, `ServiceSeo`, and visible `ServiceBreadcrumb`.
- Third-pass claim scan found no remaining service-page matches for the high-risk strings that were targeted: `UK's leading`, `dozens`, `Phil`, `25+`, `15-35`, `20-40`, `3-5x`, `bank-grade`, `24/7`, `unlimited`, `guaranteed`, hard result percentages, or hard revenue claims.
- Browser smoke tests passed on `http://localhost:3014/services` and `http://localhost:3014/services/openclaw-installation`.
- Local browser checks confirmed visible service breadcrumbs, no framework error overlay, and `Service` plus `BreadcrumbList` JSON-LD on representative service pages.
- Production deploy succeeded:
  - First pass deployment: `https://openclaw-consultant-46vp7lwlh-albert-morgans-projects.vercel.app`
  - Second pass deployment: `https://openclaw-consultant-ixskzuyqb-albert-morgans-projects.vercel.app`
  - Third pass deployment: `https://openclaw-consultant-dd36toaju-albert-morgans-projects.vercel.app`
  - Production alias: `https://openclawconsultant.co.uk`
- `npm run verify:prod` passed after updating `production-manifest.json` to the third-pass deployment.
- Production HTML checks passed for `/guides/openclaw-consultant-uk` and `/guides/openclaw-for-law-firms`: canonical URL, visible breadcrumb markup, `BreadcrumbList`, and `FAQPage` schema were present.
- Production HTML checks passed for `/services`, `/services/openclaw-installation`, and `/services/setup-configuration`: canonical URL, visible breadcrumb markup, `BreadcrumbList`, and `Service` schema were present.
- Fourth-pass claim scan found no remaining matches in the install/setup cluster for targeted high-risk strings including `24-Hour`, `24hr`, `within 24`, `24-48`, `Unlimited custom`, `production-ready`, `works immediately`, `expert installation`, `correctly first time`, `guaranteed`, `UK's leading`, `PJ`, `Albie`, and related variants.
- `npm run lint` passed after the fourth pass.
- `npm run build` passed after the fourth pass.
- Browser checks passed on `http://localhost:3019/services/openclaw-installation`, `http://localhost:3019/services/setup-configuration`, `http://localhost:3019/guides/openclaw-installation-service`, and `http://localhost:3019/guides/openclaw-setup-service-uk`: content rendered, no framework error overlay was detected, and the new intent links were present.
- Fourth pass deployment succeeded:
  - Fourth pass deployment: `https://openclaw-consultant-kg3aiywne-albert-morgans-projects.vercel.app`
  - Production alias: `https://openclawconsultant.co.uk`
- `npm run verify:prod` passed after updating `production-manifest.json` to the fourth-pass deployment.
- Production HTML checks passed for `/services/openclaw-installation`, `/services/setup-configuration`, `/guides/openclaw-installation-service`, and `/guides/openclaw-setup-service-uk`: canonical URL, relevant `BreadcrumbList`, `Service` or `FAQPage` schema, and the guide/service intent links were present.
- Fifth-pass targeted claim scan found no remaining matches in `/services/ai-agent-consulting`, `/services/enterprise-openclaw`, and `/openclaw` for the targeted risky public strings: `Expert`, `transform`, `revolution`, `huge`, `competitive advantage`, `measurable results`, `we've implemented`, `Real automation opportunities`, `seamless`, `ensure all requirements`, `HIPAA-compliant`, `No data transmission`, `Starting from £`, `Complete infrastructure`, `production-ready`, `tamper-proof`, `Blockchain`, `meet regulatory`, `Maintain compliance`, `guaranteed`, `24/7`, `unlimited`, `PJ`, and `Albie`. Remaining matches were CSS class-name false positives only.
- `npm run lint` passed after the fifth pass.
- `npm run build` passed after the fifth pass.
- Browser checks passed on `http://localhost:3019/services/ai-agent-consulting`, `http://localhost:3019/services/enterprise-openclaw`, and `http://localhost:3019/openclaw`: content rendered, no framework error overlay was detected, and the new intent links were present.
- Fifth pass deployment succeeded:
  - Fifth pass deployment: `https://openclaw-consultant-8fyxbc459-albert-morgans-projects.vercel.app`
  - Production alias: `https://openclawconsultant.co.uk`
- `npm run verify:prod` passed after updating `production-manifest.json` to the fifth-pass deployment.
- Production HTML checks passed for `/services/ai-agent-consulting`, `/services/enterprise-openclaw`, and `/openclaw`: canonical URL, relevant `BreadcrumbList`, `Service` schema where applicable, and the new consultant/enterprise/managed-service internal links were present.
- Sixth-pass targeted claim scan found no remaining local or production HTML matches in the four comparison/security pages for the targeted risky strings: `24/7 automated`, `without human intervention`, `blockchain verification`, `GDPR compliant`, `unlimited scaling`, `Key Differences's`, `enterprise-grade security`, and `Full automation`.
- `npm run lint` passed after the sixth pass.
- `npm run build` passed after the sixth pass.
- Agent-browser smoke check passed on `http://127.0.0.1:3019/guides/openclaw-vs-chatgpt`: page loaded with the corrected title, interactive links, and contact form present.
- Local HTML checks passed for `/guides/openclaw-vs-chatgpt`, `/guides/openclaw-vs-zapier-vs-make`, `/guides/openclaw-security-best-practices`, and `/guides/openclaw-security-compliance`: all four had `BreadcrumbList` and `Article` schema; the ChatGPT comparison page had `FAQPage` schema.
- Sixth pass deployment succeeded:
  - Sixth pass deployment: `https://openclaw-consultant-1m66d6pdf-albert-morgans-projects.vercel.app`
  - Production alias: `https://openclawconsultant.co.uk`
- `npm run verify:prod` passed after updating `production-manifest.json` to the sixth-pass deployment.
- `production-manifest.json` critical routes were extended to include the four sixth-pass comparison/security pages, and `npm run verify:prod` passed again with those route checks included.
- Production HTML checks passed for `/guides/openclaw-vs-chatgpt`, `/guides/openclaw-vs-zapier-vs-make`, `/guides/openclaw-security-best-practices`, and `/guides/openclaw-security-compliance`: all four had `BreadcrumbList` and `Article` schema; the ChatGPT comparison page had `FAQPage` schema.
- `npm run lint` passed after the seventh pass.
- `npm run build` passed after the seventh pass.
- Local homepage browser smoke check passed on `http://127.0.0.1:3019/`: the new homepage OpenClaw resource hub links were visible and interactive.
- Seventh pass deployment succeeded:
  - Seventh pass deployment: `https://openclaw-consultant-fihtxa1rk-albert-morgans-projects.vercel.app`
  - Production alias: `https://openclawconsultant.co.uk`
- `npm run verify:prod` passed after updating `production-manifest.json` to the seventh-pass deployment.
- `npm run lint` passed after the eighth pass.
- `npm run build` passed after the eighth pass.
- Browser smoke checks passed for:
  - `http://127.0.0.1:3019/guides/openclaw-pricing-explained`
  - `http://127.0.0.1:3019/services/setup-configuration`
  - `http://127.0.0.1:3019/guides/openclaw-vs-copilot-studio`
- Local HTML checks passed for `/guides/openclaw-pricing-explained`, `/services/setup-configuration`, and `/guides/openclaw-vs-copilot-studio`: expected schema markers were present, and targeted risky phrases were absent.
- Eighth pass deployment succeeded:
  - Eighth pass deployment: `https://openclaw-consultant-67kffbjfr-albert-morgans-projects.vercel.app`
  - Production alias: `https://openclawconsultant.co.uk`
- `npm run verify:prod` passed after updating `production-manifest.json` to the eighth-pass deployment.
- Production HTML was fetched for the edited pages and targeted risky phrase scan returned no matches for the searched strings.

## Next High-Leverage Tasks

1. Request indexing for `/openclaw`, `/guides/what-is-openclaw-2026`, `/guides/openclaw-consultant-uk`, `/guides/openclaw-installation-service`, `/guides/openclaw-vs-copilot-studio`, and the comparison/security pages changed in the sixth pass. Ask before doing this because it submits URLs to Google.
2. Investigate the single `Blocked by robots.txt` URL and the four `Discovered - currently not indexed` URLs in Search Console.
3. Run the next overlap audit on hosting, self-hosted, managed-hosting, pricing, and setup-cost pages.
4. Consolidate overlapping near-duplicate pages where search intent is too similar, especially pricing, managed hosting, setup, security variants, and duplicated Zapier/Make/n8n comparisons.
5. Add legitimate external references and internal proof links where accurate, especially for security guidance and official OpenClaw documentation.
6. Continue replacing unsupported numerical performance claims with measured examples, sourced benchmarks or conditional planning language.
7. Add an indexation/rank tracking routine using the now-working browser-based Search Console access.

## Pause Log - 2026-05-19T15:43:07+01:00

### Current Status

- The work is safe to pause.
- The ranking goal is not complete yet because #1 rankings require time and verified SERP/GSC evidence.
- The first major implementation/deployment pass and several follow-up passes are complete.
- Search Console access is confirmed and baseline data is captured.
- The latest production alias check passed after the eighth deployment pass.

### Production State

- Live site: `https://openclawconsultant.co.uk`
- Latest verified deployment: `https://openclaw-consultant-67kffbjfr-albert-morgans-projects.vercel.app`
- Production manifest updated to that deployment.
- `npm run verify:prod` passed after the deployment.

### What Has Been Pushed

1. OpenClaw hub and entity page
   - Added `/openclaw` as the central commercial/entity hub for OpenClaw setup, consulting, installation, skills, pricing, security, and implementation.
   - Added metadata, canonical URL, Open Graph data, Service schema, FAQ schema, and sitemap coverage.
   - Added `/openclaw` to the main navigation and footer.

2. Crawlability and technical SEO
   - Removed `Disallow: /_next/` from `robots.txt` so Google can render Next.js assets.
   - Kept canonical non-www sitemap as the primary sitemap.
   - Added `/openclaw` and key changed routes to production route checks.
   - Escaped `<` in JSON-LD output across shared schema emitters.

3. Guide schema and breadcrumbs
   - Added shared guide-level `Article`, `FAQPage`, and `BreadcrumbList` schema through the guide templates.
   - Added visible breadcrumbs across guide templates.
   - Wired canonical paths into guide template usage.
   - Added `GuideArticleJsonLd` for custom guide pages.

4. Service schema and breadcrumbs
   - Added shared service-level `WebPage`, `Service`, and `BreadcrumbList` schema.
   - Added visible breadcrumbs to service pages.
   - Removed old hard-coded pricing schema from the installation service page.

5. Content defensibility passes
   - Softened unsupported superlatives, hard ROI claims, exact timing promises, fixed support promises, "24/7", "unlimited", "bank-grade", "production-ready", and similar risky claims where targeted.
   - Reframed services around scoped discovery, pilots, governance, review loops, logs, handover, and measurable assumptions.
   - Removed public use of disallowed personal names from targeted public content.

6. Install/setup/consultant intent split
   - Clarified the difference between installation service, setup service, setup guide, installation guide, consultant guide, implementation guide, managed service, and cost pages.
   - Added internal links between guides and services so users and crawlers can move between educational and commercial intent.

7. Homepage authority routing
   - GSC showed most external and internal link equity concentrated on the homepage.
   - Added a homepage OpenClaw resource hub linking to `/openclaw`, `/guides/openclaw-vs-copilot-studio`, `/services/setup-configuration`, `/guides/openclaw-consultant-cost-uk`, `/guides/openclaw-pricing-explained`, and `/guides/openclaw-security-best-practices`.
   - Changed the hero secondary CTA to route to `/openclaw`.

8. Comparison/security/pricing improvements
   - Added schema/breadcrumbs and safer claims to custom comparison and security pages.
   - Fixed the broken `/guides/openclaw-vs-chatgpt` title.
   - Strengthened `/guides/openclaw-vs-copilot-studio` internal routing into the OpenClaw hub and setup service.
   - Reworked `/guides/openclaw-pricing-explained` so ROI and cost examples are framed as assumptions and pilot targets rather than promises.
   - Reworked `/services/setup-configuration` so package pricing/timing/support is scoped rather than hard-promised.

### Search Console Baseline

- Property: `sc-domain:openclawconsultant.co.uk`
- 3-month baseline:
  - 70 web search clicks.
  - 7k impressions.
  - 1% average CTR.
  - 10.6 average position.
- Top visible OpenClaw queries:
  - `openclaw consultant`: 4 clicks, 47 impressions.
  - `open claw consultant`: 4 clicks, 6 impressions.
  - `copilot studio vs openclaw`: 1 click, 7 impressions.
  - `openclaw expert`: 1 click, 1 impression.
  - `openclaw setup services`: 1 click, 1 impression.
- Indexing:
  - 235 indexed pages.
  - 9 not indexed pages.
  - Not indexed reasons visible: redirects, one 404, one blocked by robots.txt, four discovered but not indexed.
- Links:
  - 1,449 external links visible, concentrated on the homepage.
  - Internal links were also heavily concentrated on the homepage before the homepage authority routing pass.

### Validation Log

- `npm run lint` passed after the latest content/schema pass.
- `npm run build` passed after the latest content/schema pass.
- Visual restore pass on 2026-05-19:
  - Restored the homepage to the earlier navy/orange OpenClaw visual direction.
  - Kept the safer, defensible homepage copy instead of reintroducing old unsupported claims.
  - Kept links into `/openclaw`, `/services/setup-configuration`, and `/guides/openclaw-vs-copilot-studio` so the SEO architecture still has homepage support.
  - Updated the homepage navigation to use the restored dark treatment only on `/`, while internal pages keep the newer readable nav.
  - Added a dark contact form variant for the restored homepage contact section.
- Browser smoke checks passed locally for:
  - `/`
  - `/openclaw`
  - `/services/setup-configuration`
  - `/guides/openclaw-pricing-explained`
  - `/guides/openclaw-vs-copilot-studio`
  - key comparison/security routes.
- `npm run lint` passed after the visual restore pass.
- `npm run build` passed after the visual restore pass.
- `npm run verify:prod` passed after the visual restore deployment.
- Production deployment now verified as `openclaw-consultant-fbb8ca0gq-albert-morgans-projects.vercel.app`, aliased to `https://openclawconsultant.co.uk/`.
- Production HTML checks were run for edited pages and targeted risky phrase scans returned no matches for the searched strings.

### Help Needed Later

- Optional approval: request indexing in Search Console for priority URLs. This is an outbound Google action, so it needs explicit approval.
- Optional access/help: use Search Console to inspect the exact blocked-by-robots and discovered-not-indexed URLs.
- Optional decision: whether to consolidate or noindex any weak/overlapping long-tail pages if GSC shows they are cannibalising stronger OpenClaw pages.

### Recommended Next Session

1. Submit approved priority URLs to Search Console for indexing.
2. Inspect the 9 not-indexed URLs and fix any genuine crawl/indexability issue.
3. Add a small due-diligence/source section to the `/openclaw` hub with official docs, official GitHub, and credible security/cost references.
4. Continue the overlap audit for hosting, setup-cost, managed-service, and pricing pages.
5. Recheck GSC in 7-14 days for changes in impressions, CTR, and average position on OpenClaw terms.
