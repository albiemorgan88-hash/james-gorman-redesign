# BUILD REPORT — seo/consolidate-jun26

**Date:** 2026-06-11 · **Branch:** `seo/consolidate-jun26` (from `main` @ `7ba93b52`) · **Status:** ✅ all tasks complete, verified locally. Nothing merged, nothing deployed to production.

## Commits on this branch

| Commit | Scope |
|---|---|
| `62977f8b` | Baseline snapshot of the live working-tree state (see "Repo state" below) |
| `2bd854bf` | T1 consolidation: 15 × 301, content merges, link rewrites |
| `69af5699` | T2 keyword map: 17 × 301 implemented, 41 flagged |
| `8f8b8981` | T3 troubleshooting hub + 10 stubs |
| `35bd8cb3` | T4 guides category architecture |
| `80420012` | T5 E-E-A-T, H1, claims, case-study template |
| (this commit) | Build report + verify-script stub exclusion |

## Repo state findings (read before merging)

1. **The brief said Next.js; two repos exist.** `~/Projects/openclaw-consultant` is the OLD static-HTML source (stale since May). The live site is the Next.js app at `~/.openclaw/workspace/projects/openclaw-consultant` — confirmed by matching Vercel project ID (`prj_NAHxTwsVde0dkRj6tKGUY5QKSoQ9`) and `/_next/` assets + 266 guides on production. All work was done in the Next.js repo.
2. **The git repo root is the whole `~/.openclaw/workspace`** (live agent home, browser profiles, memory files), remote misnamed `james-gorman-redesign`. I committed ONLY `projects/openclaw-consultant/` paths (excluding `.clawpatch/` tool state), never switched branches in a way that touched the working tree, and left all unrelated uncommitted changes and the pre-existing staged `clawroster/temp_key.txt` deletion untouched. `origin/main` contains 2 unrelated James Gorman website commits not in local `main`; ignored.
3. **HEAD was 6 weeks stale vs production.** Deploys are Vercel-CLI-from-working-directory; the May–June content (≈90 untracked files incl. all recent blast guides) had never been committed. Commit `62977f8b` snapshots that live baseline so this branch's diffs are reviewable against what actually runs. A secret scan was done first — credentials all come from env vars; nothing hardcoded was committed.

## T1 — Duplicate consolidation

- **Inventory:** 266 guide slugs crawled (slug, title, meta description, content source). Hub structure: 11 curated sections + Buyer Guides + auto-generated "More Guides".
- **[CONSOLIDATION.csv](CONSOLIDATION.csv):** 26 rows — **13 duplicate 301s implemented**, survivors chosen on content depth/UK-specificity/inbound links; unique content merged into survivors with no invented facts (the enterprise merge deliberately dropped the loser's unverifiable SLA/budget claims). **KEPT:** `openclaw-vs-n8n`, `ai-agent-security-guide`, `openclaw-enterprise-security-compliance`, insurance pair, agentic pair, `ai-agents-estate-agents`. **SKIPPED (owner decision):** `ai-agents-for-real-estate` (it's property-management content, not estate agency — retitle or merge), `ai-agent-use-cases` + `ai-agent-examples` pair.
- Internal links: every reference to a redirected slug rewritten to its survivor (verified zero remaining); self-links created by the rewrite removed.
- Redirects: `middleware.ts` + `lib/redirects.ts` issue **true 301s** (next.config `permanent` would emit 308).

## T2 — Keyword portfolio

- **[KEYWORD-MAP.csv](KEYWORD-MAP.csv):** all **58 non-OpenClaw generic slugs** covered. **17 implemented** internal 301s (same-topic agent/openclaw equivalents only, e.g. `ai-for-dentists-uk` → `ai-agents-dentists`, `ai-managed-services-uk` → `openclaw-managed-service-uk`). **41 flagged** — consultancy-brand terms (`ai-consultancy-uk` etc.), governance/strategy content, and industry pages with no equivalent. The flagged slugs named in the brief are also Buyer Guides entries and `production-manifest.json` critical routes — deliberately untouched.
- Implemented vs flagged separated by the `status` column.

## T3 — Troubleshooting hub

- `/troubleshooting` hub + 5 categories + 10 article stubs at `/troubleshooting/{category}/{slug}` (data: `lib/troubleshooting.ts`, template: `components/TroubleshootingArticle.tsx`).
- Template renders symptom, cause, fix steps, when-to-get-help CTA → discovery call, byline (Phil Patterson, Founder, Blue Canvas AI), published/updated dates, TechArticle JSON-LD; **HowTo schema only emits once real fix steps exist**.
- Sourcing: 4 stubs draft symptom/cause outlines from in-repo incident notes, cited in the data file's `sources` field (workspace paths, never rendered): gateway (`memory/2026-02-17.md`, `2026-03-07.md`, `2026-03-15.md`), OAuth (`MISTAKES.md`, `memory/2026-04-03.md`, `2026-03-06.md`), sandbox tool access (`memory/2026-04-22.md`), update breakage (`memory/2026-03-23.md`); partial sourcing for cron and channel pairing. **Every fix-steps section is TODO-OWNER; zero invented fixes.**
- All troubleshooting routes are **noindexed** and excluded from the sitemap until the owner publishes real content (flip `robots` in the three route files).

## T4 — Guides architecture

- `/guides` is now a hub: Buyer Guides shortlist + 12 category cards. The 266-entry single-page fragment list is gone (hub now contains 15 direct guide links).
- `/guides/category/{slug}`: 12 server-rendered category pages, each verified **200 with a unique title**, BreadcrumbList JSON-LD, added to the sitemap. Data in `lib/guides.ts` (moved verbatim, deduped, titles normalised for consolidated slugs).
- Production-manifest `/guides` markers ("OpenClaw Guides", "Expert Guides") preserved.

## T5 — E-E-A-T and fixes

- **Byline/dates:** `GuidePageTemplate` (all blast-driven guides) + 4 self-contained pages render "By Phil Patterson, Founder, Blue Canvas AI · Updated {date}"; `dateModified` (from page mtime) added to Article JSON-LD; author upgraded Organization → Person. Verified rendering on `/guides/openclaw-asana-automation` and `/guides/openclaw-vs-chatgpt`.
- **Pre-existing schema (recorded):** homepage already had WebSite + ProfessionalService (Organization subtype) with founder Person — verified, unchanged. `GuideArticleJsonLd` and `GuidePageTemplate` already emitted Article + BreadcrumbList (+FAQPage) but with no dates and Organization authors.
- **FAQPage fix:** `GuidePageTemplate` previously emitted an **empty FAQPage node** on FAQ-less pages; now conditional on real FAQs. Verified: FAQ page emits `[Article, FAQPage, BreadcrumbList]`, FAQ-less page emits `[Article, BreadcrumbList]`.
- **H1:** added the missing whitespace — text content now "…and Safe to Run. Founder-Led." (visual layout unchanged per HOMEPAGE-VISUAL-LOCK.md).
- **Claims:** "Proof from real OpenClaw-style workflows" → "…real OpenClaw workflows" (homepage) and "OpenClaw-style agent workflows in our own operations" → "OpenClaw agent workflows…" (`services/ai-agent-consulting`) — **evidenced**: both linked case studies (`seo-agency-250-month`, `follow-rabbit-ai-cloud-optimization`) explicitly document work done on OpenClaw itself. `production-manifest.json` markers and `HOMEPAGE-VISUAL-LOCK.md` updated deliberately to match. Two remaining "OpenClaw-style" uses (in `ai-consultancy-uk`, `ai-agents-for-education`) are generic category descriptions, not claims about Blue Canvas work — left unchanged.
- **Case-study template:** `components/CaseStudyTemplate.tsx` + third-entry stub `app/case-studies/voice-in-car-openclaw-setup` — all content TODO-OWNER, noindexed, excluded from sitemap and from `verify-publish.mjs` until published.

## Verification evidence

- **Build:** `next build` clean — 288 static pages, middleware registered. **Lint:** clean.
- **Redirects:** all **32** (15 T1-batch + 17 T2) verified against the production build locally: **301 → correct target → 200, zero chains** (no destination is a redirect source).
- **Sitemap:** 263 URLs; all 32 retired slugs absent; all 244 existing page routes present (1 deliberate stub exclusion); 12 category URLs added. **robots.txt** unchanged (auto-generated, nothing slug-specific).
- **verify-publish:** run against localhost — route sampling passes; the "sitemap missing" output when run with `OCC_SITE_URL=http://localhost:4123` is an artifact (the script string-matches the localhost origin against the sitemap's hardcoded production origin); origin-corrected check passes 244/244.
- `production-manifest.json`: removed the critical-route entry for the now-redirected `/guides/openclaw-security-compliance`; zapier marker still matches the extended title.

## Counts

| Metric | Before | After |
|---|---|---|
| Guide pages | 266 | 234 |
| 301 redirects | 0 | 32 |
| Category routes | 0 | 12 (+5 troubleshooting) |
| Pages with byline/dates | 0 | all template-driven + 4 self-contained |
| Flagged for owner | — | 41 keyword-map + 3 consolidation + 11 TODO-OWNER stubs |

## Also checked and recorded

- **Analytics:** GA4 `G-PXMWKB0V2G` + Ahrefs analytics in `app/layout.tsx` (CSP already allows both). No Clarity on this site.
- **Organic entrance data:** `reports/openclaw-seo-sprint-2026-05-19.md` — GSC 3-month baseline: 70 clicks, 7k impressions, 1% CTR, position 10.6; priority keyword list documented there. GSC API access was broken (token refresh HTTP 400) as of 2026-05-19; per-page entrance data lives in `~/.openclaw/workspace/reports/raw/gsc-dashboard-2026-05-19.json`. Content-blast reports in `reports/` track published batches.
- **Preview deploys:** this Vercel project is **not git-linked** (deploys are CLI-run from the working directory per `DEPLOY-FIX.md`), so pushing the branch does not create a preview automatically. The owner can preview with `npx vercel deploy` (no `--prod`) from this branch checkout; production alias is locked to a known-good deployment and untouched.

## Owner review checklist before merge

1. CONSOLIDATION.csv — confirm survivors, decide the 3 SKIPPED items.
2. KEYWORD-MAP.csv — confirm the 17 implemented 301s; decide the 41 flags (bluecanvas.ai split).
3. Fill TODO-OWNER fix steps in `lib/troubleshooting.ts` from real incident notes, then flip `robots` to index and add the section to the sitemap route.
4. Fill the voice/in-car case study (`app/case-studies/voice-in-car-openclaw-setup/page.tsx`), then unexclude it from sitemap + verify-publish and list it on `/case-studies`.
5. After merge + deploy: re-run `npm run verify:prod` only after updating `production-manifest.json`'s `knownGoodDeployment` to the new deployment, per the lock doc.
