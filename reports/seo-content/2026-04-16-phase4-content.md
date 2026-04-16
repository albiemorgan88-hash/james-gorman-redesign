# SEO Engine Phase 4 Content — 2026-04-16

## Scope
Blue Canvas Thursday content pass: inspect content tooling, verify Webflow draft pipeline, pull GSC content quick wins, and decide whether a new draft is needed.

## Tooling checked
- `gsc_trend_analysis.py`
- `gsc_simple.py`
- `gsc_check.py`
- `push-blogs.mjs`
- `projects/blog-drafts/push-to-webflow.sh`

## Verification notes
- **Webflow API:** working on 2026-04-16. Collection `67e4825804e6baf1d5246f5b` returned items successfully.
- **Live GSC pull:** still blocked on 2026-04-16. `python3 gsc_trend_analysis.py` failed with `invalid_grant`, so quick wins below use the last clean verified on-file GSC exports.

## Webflow CMS status
### Recently published
- 2026-04-15: `ai-implementation-guide`
- 2026-04-14: `ai-for-logistics-and-supply-chain-uk`
- 2026-04-14: `ai-for-solicitors-uk-d01a6`
- 2026-04-14: `ai-for-finance-teams`
- 2026-04-14: `ai-customer-service-automation`

### Current staged drafts in Webflow
- `chatgpt-training-for-business`
- `microsoft-copilot-for-business-guide`
- `how-to-write-an-ai-strategy`
- `ai-productivity-tools-2026`
- `ai-for-retail-businesses`
- `ai-workflow-automation`
- `ai-workflow-automation-d486c` (duplicate draft)
- `ai-for-solicitors-uk` (duplicate of a now-published post)

### Next publish candidate
**Recommended next manual publish candidate: `chatgpt-training-for-business`**
- It was the next priority gap after `ai implementation guide` in `drafts/blog/next-draft-outline.md`.
- It has clear commercial intent and maps directly to Blue Canvas training / Academy revenue.
- It is already safely staged as a Webflow draft, so no CMS mutation was needed.

### Staging action taken
- **No Webflow publish performed.**
- **No Webflow draft mutation performed.** The next best candidate is already staged, and the only obvious non-staged legacy local draft collides with an already-live slug.

## GSC content quick wins
### Last clean verified query-level wins
Source: `reports/gsc/bluecanvas-keywords-2026-03-10.md`

| Query | Impressions | CTR | Avg Position | Recommended content move |
|---|---:|---:|---:|---|
| ai consultancy for small business | 83 | 0.0% | 8.9 | Push stronger exact-match title/meta and link into the small-business service cluster |
| ai consultants for small business | 52 | 0.0% | 7.8 | Add exact-match supporting copy, FAQ language, and internal links from related SME posts |
| artificial intelligence consulting services | 158 | 0.0% | 12.8 | Not in the 4-10 band, but the biggest near-term content gap by impressions |

### Last clean verified page-level wins
Source: `reports/gsc/bluecanvas-keywords-2026-03-10.md`

| Page | Impressions | CTR | Avg Position | Recommended content move |
|---|---:|---:|---:|---|
| /blog/15-amazing-ai-tools-for-business | 120 | 0.0% | 7.7 | Refresh title/meta for higher click intent, add FAQ + stronger CTA |
| /blog/chatgpt-claude-perplexity-gemini-grok-which-ai-tool-should-you-use | 111 | 0.0% | 7.5 | Rework SERP title around direct comparison intent and update intro for click-through |
| /blog/what-is-the-best-llm-right-now | 85 | 0.0% | 6.3 | Refresh for 2026 intent, sharpen title and summary |
| /blog/ai-grants-northern-ireland-2026 | 53 | 0.0% | 6.1 | Update title/meta and add fresher internal links / CTA |

## Pipeline status
- **Queue is not running low.**
- Webflow currently has **8 draft items / 7 unique draft names**, with **6 clean unique publish candidates** after excluding the duplicate solicitor item and consolidating the workflow duplicate.
- Because the queue is still healthy, **no new blog draft was created today**.

## Recommended next content actions
1. Publish `chatgpt-training-for-business` next.
2. Clean up duplicate draft items before the next publish pass:
   - keep one `ai-workflow-automation` draft
   - archive or remove the redundant `ai-for-solicitors-uk` draft after confirming the live item is correct
3. When the queue does need replenishment, draft **`ai automation consultancy`** next, as it remains the clearest unresolved service keyword gap from the existing outline.
