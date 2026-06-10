# OCC content blast — 2026-05-27

Deployed to `https://openclawconsultant.co.uk`.

## New live guides

1. https://openclawconsultant.co.uk/guides/openclaw-hubspot-automation
2. https://openclawconsultant.co.uk/guides/openclaw-shopify-automation
3. https://openclawconsultant.co.uk/guides/openclaw-xero-automation
4. https://openclawconsultant.co.uk/guides/openclaw-quickbooks-automation
5. https://openclawconsultant.co.uk/guides/openclaw-salesforce-automation
6. https://openclawconsultant.co.uk/guides/openclaw-pipedrive-automation
7. https://openclawconsultant.co.uk/guides/openclaw-zendesk-automation
8. https://openclawconsultant.co.uk/guides/openclaw-intercom-automation
9. https://openclawconsultant.co.uk/guides/openclaw-stripe-automation
10. https://openclawconsultant.co.uk/guides/openclaw-calendly-automation
11. https://openclawconsultant.co.uk/guides/openclaw-asana-automation
12. https://openclawconsultant.co.uk/guides/openclaw-clickup-automation

## What changed

- Added 12 CRM/ops/platform-intent OpenClaw automation guide pages.
- Added shared content module: `app/guides/_content/platformOpsBlast20260527.tsx`.
- Added each guide to `/guides` under a new `CRM & Ops Platforms` section.
- Each guide includes SEO metadata, canonical URL, Article schema, FAQPage schema, commercial CTAs, internal links, platform-specific workflows, guardrails, and measurement guidance.
- Updated `production-manifest.json` so `npm run verify:prod` pins the new known-good deployment after verification.

## Deployment

- Production deployment: `https://openclaw-consultant-8ck9dzlaw-albert-morgans-projects.vercel.app`
- Alias: `https://openclawconsultant.co.uk`

## Verification

Passed:

- New-batch forbidden public marker check for `PJ` / `Albie` / exaggerated claim markers.
- Local `npm run lint`.
- Local `npm run build`.
- Vercel production deploy and alias.
- Live smoke for `/`, `/guides`, `/sitemap.xml`, `/robots.txt`, and all 12 new guide URLs.
- Each new guide returned HTTP 200, has exactly one H1, canonical URL, Article schema, FAQPage schema, Blue Canvas mentions, and assessment CTA.
- Sitemap contains the new guide URLs.
- `npm run verify:prod` passed after pinning the new verified deployment.

Live verification JSON: `reports/occ-content-blast-2026-05-27-live-verification.json`

No GSC indexing or outbound promotion was run.
