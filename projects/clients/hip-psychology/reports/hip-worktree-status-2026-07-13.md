# HIP Psychology Worktree Status - 2026-07-13

## Current Canonical Structure
- `blog-drafts/ahrefs-blast-YYYY-MM-DD/`: dated content batches. Keep each batch report, publish result and QA result together.
- `reports/week-*`: client-facing weekly SEO reports.
- `reports/hip-seo-execution-2026-07-06.md`: service-page and homepage SEO execution report.
- `reports/press-pitch.md`: AI-in-schools press pitch. Not sent.
- `data/authors.generated-from-live-site.json`: generated author data from public team page; not canonical until manually confirmed.

## Deployment Inventory
- Published post URLs found from batch manifests: 200
- Service/parent pages tracked from the 2026-07-06 execution: 8
- Total unique tracked public URLs: 208
- Dated batch reports found: 22

## Latest Batches
- `ahrefs-blast-2026-06-25`: Published live; failures: 0; report: `blog-drafts/ahrefs-blast-2026-06-25/report.md`
- `ahrefs-blast-2026-06-30`: Published live; failures: 0; report: `blog-drafts/ahrefs-blast-2026-06-30/report.md`
- `ahrefs-blast-2026-07-03`: Published live; failures: 0; report: `blog-drafts/ahrefs-blast-2026-07-03/report.md`
- `ahrefs-blast-2026-07-07`: Published live; failures: 0; report: `blog-drafts/ahrefs-blast-2026-07-07/report.md`
- `ahrefs-blast-2026-07-08`: Published live; failures: 0; report: `blog-drafts/ahrefs-blast-2026-07-08/report.md`
- `ahrefs-blast-2026-07-10`: Published live; failures: 0; report: `blog-drafts/ahrefs-blast-2026-07-10/report.md`

## Live Verification
- Checked URLs: 208
- Failures: 0
- Checks: HTTP status below 400 and no prohibited prompt/secret/public-name markers.

## Tidy Decision
- No files were deleted or moved.
- The worktree is unified by this status report plus `data/live-deployment-manifest-2026-07-13.json`.
- Historic root-level reports and exports should remain as archive material unless a separate destructive cleanup is approved.

## Remaining Operational Gaps
- The WordPress/theme stack still does not render a dedicated homepage meta description tag; homepage title phrase is handled through the WordPress site description.
- `school_leads` remains unconfirmed. Current service pages route to the existing contact path.
- Press pitch has been prepared only; no outreach has been sent.
