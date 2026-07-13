# James Gorman content blast publish report — 2026-05-04

Phil explicitly approved publishing in this run: “feel free to publish”.

## Published live

- https://www.jamesgormanproperty.com/post/chain-free-house-sale-derry
- https://www.jamesgormanproperty.com/post/estate-agent-ballyarnett-derry
- https://www.jamesgormanproperty.com/post/estate-agent-maydown-derry
- https://www.jamesgormanproperty.com/post/estate-agent-newbuildings-derry
- https://www.jamesgormanproperty.com/post/prepare-house-for-valuation-derry
- https://www.jamesgormanproperty.com/post/property-valuation-cityside-derry
- https://www.jamesgormanproperty.com/post/property-valuation-waterside-derry
- https://www.jamesgormanproperty.com/post/selling-rental-property-derry

## Topic coverage

- Chain-free sale intent
- Ballyarnett seller/service page
- Maydown seller/service page
- Newbuildings seller/service page
- Pre-valuation seller preparation
- Cityside property valuation intent
- Waterside property valuation intent
- Rental-property seller / landlord disposal intent

## Verification

- Created 8 local drafts and duplicate-checked against the live Wix blog sitemap before publishing.
- Published via Wix Blog API draft-post create → patch metadata/slug/category → publish flow.
- Public URLs returned HTTP 200.
- `blog-posts-sitemap.xml` includes all 8 new URLs; sitemap now has 89 blog post URLs.
- Wix API QA confirms all 8 posts are `PUBLISHED`, expected `seoSlug` values are set, excerpts are present, rich content nodes are present, and no draft metadata leak markers were found in rich content.
- Public raw HTML leak check found no `Primary keyword`, `Suggested slug`, `Meta title`, `Meta description`, `Draft status`, `Publishing metadata`, or `DO NOT PASTE` markers.
- A temporary unpublished debug draft created during API payload validation was deleted via Wix API.

## Files

- Draft handoff: `content-blast-2026-05-04-james-draft-batch.md`
- Publish manifest: `wix-publish-manifest-2026-05-04-james-content-blast.json`
- Publish result: `james-content-blast-publish-2026-05-04.json`
- Public QA JSON: `blog-publish-report-2026-05-04-content-blast.json`
- API QA JSON: `blog-publish-api-qa-2026-05-04-content-blast.json`
