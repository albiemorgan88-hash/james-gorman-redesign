# James Gorman content blast publish report — 2026-05-19

Phil requested and confirmed a new James website content blast in this run.

## Published live + final QA

- https://www.jamesgormanproperty.com/post/downsizing-and-selling-house-derry — HTTP 200, H1 match: True, sitemap: True, API status: PUBLISHED
- https://www.jamesgormanproperty.com/post/estate-agent-contracts-derry-sellers-guide — HTTP 200, H1 match: True, sitemap: True, API status: PUBLISHED
- https://www.jamesgormanproperty.com/post/online-estate-agent-vs-local-estate-agent-derry — HTTP 200, H1 match: True, sitemap: True, API status: PUBLISHED
- https://www.jamesgormanproperty.com/post/property-marketing-plan-derry-sellers-guide — HTTP 200, H1 match: True, sitemap: True, API status: PUBLISHED
- https://www.jamesgormanproperty.com/post/questions-to-ask-estate-agent-before-selling-derry — HTTP 200, H1 match: True, sitemap: True, API status: PUBLISHED
- https://www.jamesgormanproperty.com/post/sell-house-before-buying-next-derry — HTTP 200, H1 match: True, sitemap: True, API status: PUBLISHED
- https://www.jamesgormanproperty.com/post/selling-a-house-with-tenants-derry — HTTP 200, H1 match: True, sitemap: True, API status: PUBLISHED
- https://www.jamesgormanproperty.com/post/selling-a-vacant-house-derry — HTTP 200, H1 match: True, sitemap: True, API status: PUBLISHED

## Source files

- Drafts: `projects/clients/james-gorman/blog-drafts/content-blast-2026-05-19`
- Initial publish JSON: `projects/clients/james-gorman/blog-publish-report-2026-05-19-content-blast.json`
- Final API/live QA: `projects/clients/james-gorman/blog-publish-api-qa-2026-05-19-content-blast.json`

## Notes

- Metadata/planning frontmatter was not sent to Wix body.
- Final QA passed after normal Wix propagation delay: all 8 are `PUBLISHED`, live HTTP 200, H1s match, sitemap includes URLs, rich content has body nodes, and no planning/metadata leak markers were found in API or public HTML.
- Wix tag creation still returns validation errors in this API flow; category assignment/content publish passed.
- No GSC indexing, outbound promotion, or featured-image work was run in this pass.
