# OCC content blast — 2026-05-17

Deployed to `https://openclawconsultant.co.uk`.

## New live guides

1. https://openclawconsultant.co.uk/guides/openclaw-for-law-firms
2. https://openclawconsultant.co.uk/guides/openclaw-for-accounting-firms
3. https://openclawconsultant.co.uk/guides/openclaw-for-estate-agents
4. https://openclawconsultant.co.uk/guides/openclaw-for-construction-companies
5. https://openclawconsultant.co.uk/guides/openclaw-for-healthcare-clinics
6. https://openclawconsultant.co.uk/guides/openclaw-for-ecommerce-businesses
7. https://openclawconsultant.co.uk/guides/openclaw-for-property-management
8. https://openclawconsultant.co.uk/guides/openclaw-for-financial-advisers

## What changed

- Added 8 industry-focused OpenClaw buyer/workflow guides.
- Reused the existing commercial guide template and added a reusable `makeIndustryGuide` helper.
- Each page has metadata, canonical URL, FAQ section, related guides, CTA, and sitemap inclusion through auto-discovery.
- Updated `production-manifest.json` to the new known-good deployment and current critical route set after verification.

## Deployment

- Production deployment: `openclaw-consultant-8j8japn0c-albert-morgans-projects.vercel.app`
- Alias: `https://openclawconsultant.co.uk`

## Verification

Passed:

- Forbidden public marker check for `PJ` / `Albie` in new content.
- `npm run lint`
- `npm run build`
- Vercel production deploy.
- `OCC_SITE_URL=https://openclawconsultant.co.uk OCC_VERIFY_SAMPLE_LIMIT=40 npm run verify:publish`
  - Checked 229 guide routes, 7 service routes, 2 case-study routes.
  - Fetched 42 live URLs.
  - Sitemap coverage passed.
- Custom live smoke for `/`, `/about`, `/services`, `/pricing`, `/guides`, both key existing guide routes, all 8 new guides, `/sitemap.xml`, and `/robots.txt`.
- `npm run verify:prod` passed after updating the known-good manifest to the new deployment.

No GSC indexing or outbound promotion was run.
