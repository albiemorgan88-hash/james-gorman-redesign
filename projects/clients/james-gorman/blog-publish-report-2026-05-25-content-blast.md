# James Gorman Property content blast — 2026-05-25

Published directly to `https://www.jamesgormanproperty.com` via Wix Blog API after Phil requested a James site content blast and specifically asked that the author appears as James.

## Author fix first

Before publishing the new batch, corrected the recent Wix blog author issue:

- Reassigned **15 published posts** that were still on Phil's Wix member ID to James' Wix member ID `8a0a22b4-bf7d-4b83-9347-5d4ae7d25012`.
- Re-published those changed posts so the live schema no longer exposes `Phil Patterson`.
- Public recheck passed: **0 failures** across those 15 posts.
- Note: Wix's API blocks changing James' member nickname from `james51251` without member-only permission, so the new posts also include a visible body byline: **By James Gorman**.

Author fix evidence: `author-fix-report-2026-05-25.json`

## New live posts

1. https://www.jamesgormanproperty.com/post/mortgage-agreement-in-principle-derry — mortgage agreement in principle Derry
2. https://www.jamesgormanproperty.com/post/home-survey-northern-ireland-buyer-guide — home survey Northern Ireland buyer guide
3. https://www.jamesgormanproperty.com/post/epc-selling-house-northern-ireland — EPC selling house Northern Ireland
4. https://www.jamesgormanproperty.com/post/property-chain-derry-explained — property chain Derry explained
5. https://www.jamesgormanproperty.com/post/first-viewing-questions-house-derry — first viewing questions house Derry
6. https://www.jamesgormanproperty.com/post/conveyancing-process-northern-ireland-buyers — conveyancing process Northern Ireland buyers
7. https://www.jamesgormanproperty.com/post/rates-buying-house-northern-ireland — rates buying house Northern Ireland
8. https://www.jamesgormanproperty.com/post/property-photography-selling-house-derry — property photography Derry selling house

## Verification

Final QA passed for all 8 new URLs:

- Wix API status `PUBLISHED`
- assigned to James member ID
- public URL returns `200`
- public H1 matches intended title
- sitemap includes URL
- visible **By James Gorman** byline present in body
- public HTML does **not** contain `Phil Patterson`
- schema author contains James via the Wix member profile (`james51251`)

No GSC indexing, outbound promotion, emails, or featured-image work was run.

JSON publish report: `blog-publish-report-2026-05-25-content-blast.json`
JSON QA report: `blog-publish-api-qa-2026-05-25-content-blast.json`
Local draft/source files: `blog-drafts/content-blast-2026-05-25/`
