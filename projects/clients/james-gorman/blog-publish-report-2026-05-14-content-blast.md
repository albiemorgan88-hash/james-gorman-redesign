# James Gorman content blast publish report — 2026-05-14

Phil explicitly approved publishing this James Gorman content blast (`All good to publish bro`).

## Published live / final QA

- https://www.jamesgormanproperty.com/post/choosing-between-estate-agent-valuations-derry — HTTP 200, Wix API: PUBLISHED, H1 match: True, sitemap: True
- https://www.jamesgormanproperty.com/post/house-not-selling-derry-what-to-do — HTTP 200, Wix API: PUBLISHED, H1 match: True, sitemap: True
- https://www.jamesgormanproperty.com/post/how-to-price-your-house-for-sale-derry — HTTP 200, Wix API: PUBLISHED, H1 match: True, sitemap: True
- https://www.jamesgormanproperty.com/post/making-an-offer-on-a-house-in-derry — HTTP 200, Wix API: PUBLISHED, H1 match: True, sitemap: True
- https://www.jamesgormanproperty.com/post/preparing-for-house-viewings-derry — HTTP 200, Wix API: PUBLISHED, H1 match: True, sitemap: True
- https://www.jamesgormanproperty.com/post/sale-agreed-northern-ireland-derry-guide — HTTP 200, Wix API: PUBLISHED, H1 match: True, sitemap: True
- https://www.jamesgormanproperty.com/post/sell-or-rent-out-house-derry — HTTP 200, Wix API: PUBLISHED, H1 match: True, sitemap: True
- https://www.jamesgormanproperty.com/post/viewing-a-house-in-derry-checklist-2026 — HTTP 200, Wix API: PUBLISHED, H1 match: True, sitemap: True

## QA summary

- Final QA passed after Wix propagation: 8/8 public URLs returned `200`.
- Wix API confirmed 8/8 posts are `PUBLISHED` with body-rich-content nodes and excerpts present.
- `blog-posts-sitemap.xml` returned `200` and included all 8 URLs.
- No planning/frontmatter/metadata leak markers were found in Wix rich content or public raw HTML.
- Initial immediate post-publish live checks returned transient `404`s while Wix propagated; final API/live/sitemap QA is clean.

## Source files

- Drafts: `projects/clients/james-gorman/blog-drafts/content-blast-2026-05-14`
- Raw publish report: `projects/clients/james-gorman/blog-publish-report-2026-05-14-content-blast.json`
- Final API/live QA: `projects/clients/james-gorman/blog-publish-api-qa-2026-05-14-content-blast.json`

## Notes

- Metadata/planning frontmatter was not sent to Wix body.
- No GSC indexing or outbound promotion run.
- Featured images not set by this API flow.
- Wix tag API returned validation errors during publish, so posts are category-assigned but not tag-enriched; content/publish QA passed.
