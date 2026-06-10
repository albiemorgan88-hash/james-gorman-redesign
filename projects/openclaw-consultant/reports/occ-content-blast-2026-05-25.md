# OCC content blast — 2026-05-25

Deployed to `https://openclawconsultant.co.uk`.

## New live guides

1. https://openclawconsultant.co.uk/guides/openclaw-google-workspace-automation
2. https://openclawconsultant.co.uk/guides/openclaw-microsoft-365-automation
3. https://openclawconsultant.co.uk/guides/openclaw-wordpress-automation
4. https://openclawconsultant.co.uk/guides/openclaw-webflow-automation
5. https://openclawconsultant.co.uk/guides/openclaw-wix-automation
6. https://openclawconsultant.co.uk/guides/openclaw-airtable-automation
7. https://openclawconsultant.co.uk/guides/openclaw-notion-automation
8. https://openclawconsultant.co.uk/guides/openclaw-slack-automation

## What changed

- Added 8 platform/integration-intent OpenClaw guide pages.
- Added shared content module: `app/guides/_content/platformBlast20260525.tsx`.
- Added each guide to `/guides` under a new `Platform Automation` section.
- Each guide includes SEO metadata, canonical URL, Article schema, FAQPage schema, commercial CTAs, internal links, platform-specific workflows, guardrails, and measurement guidance.

## Deployment

- Production deployment: `https://openclaw-consultant-2p6982o83-albert-morgans-projects.vercel.app`
- Alias: `https://openclawconsultant.co.uk`

## Verification

Passed:

- New-batch forbidden public marker check for `PJ` / `Albie`.
- Internal guide-link validation.
- `npm run lint`.
- `npm run build`.
- Vercel production deploy and alias.
- Live smoke for `/`, `/guides`, `/sitemap.xml`, `/robots.txt`, and all 8 new guide URLs.
- Each new guide returned HTTP 200, has exactly one H1, canonical URL, Article schema, FAQPage schema, Blue Canvas mentions, and assessment CTA.
- Sitemap contains all 8 new guide URLs.

## Note on `npm run verify:prod`

`npm run verify:prod` passed all route/marker checks but exited non-zero because its deployment-pin guard still expects the previous known-good deployment. The alias now correctly points to the new production deployment after this content blast.

Live verification JSON: `reports/occ-content-blast-2026-05-25-live-verification.json`

No GSC indexing or outbound promotion was run.
