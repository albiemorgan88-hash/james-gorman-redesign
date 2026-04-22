# Blue Canvas SEO ATTACK Report — 2026-04-22

Sources used:
- Ahrefs live browser snapshot captured 2026-04-19 in `reports/dashboard-ahrefs-snapshot.txt`
- Ahrefs live API snapshots captured 2026-04-15 in `reports/attack/ahrefs-gap-2026-04-15.json` and 2026-04-17 in `tmp/ahrefs-metrics-notes.md`
- Google Search Console last verified exports dated 2026-03-06 and 2026-03-10
- Current access-state verification from `reports/morning-dashboard-2026-04-22.md`
- Blue Canvas technical audit from 2026-04-20

## Executive summary

Blue Canvas is still losing on two fronts:

1. **Authority depth**: Ahrefs still shows a large referring-domain gap versus the real commercial competitors.
2. **Commercial keyword coverage**: competitors own the homepage/service-page cluster for `ai consultancy`, `ai consulting services`, and related buyer-intent terms, while Blue Canvas still has weak or zero durable visibility there.

There is one important measurement caveat: the latest live Google Search Console pull could not be re-run on 2026-04-22 because the current sandbox cannot reach Google APIs. The GSC keyword-opportunity section below therefore uses the last verified exports from March 2026, and I am stating those dates explicitly.

## 1) Current competitive read

### What is stable across the Ahrefs snapshots
- Blue Canvas still shows **0 organic keywords** in the Ahrefs browser snapshot on 2026-04-19.
- The Ahrefs API snapshot from 2026-04-17 also still showed **0 organic keywords** and **0 estimated organic traffic**.
- Brainpool and I Want More both have real commercial keyword footprints where Blue Canvas still does not.
- Blue Canvas has roughly **17-18 referring domains**, versus about **546** for `brainpool.ai` and **128** for `iwantmore.ai`.

### Important Ahrefs inconsistency
- Ahrefs browser snapshot on **2026-04-19** showed **DR 13** for `bluecanvas.ai`.
- Ahrefs API snapshot on **2026-04-17** showed **DR 26** for `bluecanvas.ai`.

I do **not** trust the exact DR figure enough to use it as the headline metric. The consistent signal is the one that matters: Blue Canvas has far less linking-root breadth than the competitors and still no Ahrefs-visible organic keyword footprint.

## 2) Backlink gaps

### The real gap

| Domain | Referring domains | Read |
|---|---:|---|
| bluecanvas.ai | 17-18 | Early-stage base only |
| brainpool.ai | 546 | Main commercial authority benchmark |
| iwantmore.ai | 128 | Realistic near-term benchmark |
| aicc.co | ~177-202 | Local authority benchmark, less direct commercial overlap |

### Existing Blue Canvas link profile
The current Blue Canvas profile already includes some useful base links:
- `yell.com`
- `goodfirms.co`
- `freeindex.co.uk`
- `derryjournal.com`
- `bizify.co.uk`
- `syncni.com`

That means the next gains should not be more low-value directory clutter. The gap is now **trust + ecosystem links**, not just link count.

### Best live gap targets from the Ahrefs data on file

| Domain | Seen on | DR | Why it matters |
|---|---|---:|---|
| designrush.com | iwantmore.ai | 91 | Commercial agency-profile link, realistic win |
| qub.ac.uk | aicc.co | 82 | Local NI authority signal |
| ulster.ac.uk | aicc.co | 78 | Local NI authority signal |
| iuk-business-connect.org.uk | aicc.co | 76 | Innovation/business ecosystem relevance |
| responsesource.com | iwantmore.ai | 72 | PR/thought-leadership route |
| postandcourier.com | aicc.co | 82 | Strong editorial-style authority, lower local fit |

### Links not worth copying
The Ahrefs data for `iwantmore.ai` includes obvious junk or low-trust domains:
- `seoexpress.org`
- `rank-your.website`
- `quero.party`
- `linkbooster.shop`
- `bye.fyi`
- `creativeposts.top`

### Backlink conclusion
The link strategy is straightforward:
- Keep the good local/business profile base.
- Add **1 commercial profile win**: `designrush.com`.
- Add **2-3 NI trust wins**: `qub.ac.uk`, `ulster.ac.uk`, similar ecosystem links.
- Add **1-2 press/discovery wins**: `responsesource.com` or equivalent editorial mentions.

The immediate target is not "beat Brainpool on DR." It is **move Blue Canvas from ~18 referring domains to 30-40 quality referring domains** without polluting the profile.

## 3) Content gaps

### Competitors are winning with commercial pages, not just blogs
The strongest pattern in the Ahrefs data is that competitors are getting most commercial visibility from:
- the **homepage**
- one or two tightly aligned **service pages**

Examples from the Ahrefs snapshots:
- `brainpool.ai/` ranks for `ai consultancy`, `ai consulting companies`, `ai consulting company`, `ai consultancy uk`
- `iwantmore.ai/` ranks for `ai consulting services`, `ai consultancy uk`, `ai consulting firms`
- `iwantmore.ai/ai-strategy-consulting/` owns the `ai strategy consulting` angle
- `aicc.co/responsible-ai-hub/responsible-ai-tools` owns a governance/responsible-AI flank

### Blue Canvas gap, adjusted for current site state
Blue Canvas now does have pages like `/ai-consultancy` and `/lp/ai-audit`, so the issue is no longer "missing page exists or not." The issue is **insufficient commercial relevance, authority, and internal support**.

The biggest content gaps are still:
- stronger homepage coverage for `ai consultancy` and `ai consulting services`
- a tighter small-business service page cluster
- a stronger UK-wide commercial variant
- a more convincing AI audit / readiness assessment offer
- proof-heavy case study pages
- at least one governance / responsible AI trust asset

### Highest-priority missing or underpowered assets
1. A page or section clearly built to win `ai consultancy for small business` and related variants.
2. A stronger commercial version of the current AI audit offer, tied to `ai audit`, `ai readiness assessment`, and buyer-intent CTA language.
3. A cleaner commercial page around `ai consultancy uk` / `ai consulting services`.
4. Better case-study proof to support commercial pages.

## 4) Keyword opportunities

## GSC status note
I attempted a current GSC pull again on **2026-04-22** via the local scripts, but the runtime could not reach Google APIs. The latest defensible GSC opportunities therefore still come from:
- `reports/seo-data/gsc-bluecanvas-2026-03-06.md`
- `reports/gsc/bluecanvas-keywords-2026-03-10.md`

### Best keyword opportunities from the last verified GSC exports

| Query | Impressions | Avg position | Opportunity read |
|---|---:|---:|---|
| artificial intelligence consulting services | 158 | 12.8 | Big demand, weak fit today |
| ai consultancy for small business | 83 | 8.9 | Best immediate commercial win |
| artificial intelligence consulting service | 67 | 12.8 | Same cluster as above |
| ai consultants for small business | 52 | 7.8 | Same page can absorb this |
| ai consultancy northern ireland | 33 | 5.5 | Still the key local commercial term |
| ai consulting agency | 27 | 8.3 | Useful secondary service term |
| ai consultants for startups | 16 | 5.9 | Good supporting page / subsection |
| ai consulting companies for startups | 12 | 5.6 | Same startup cluster |
| ai consulting services | 10 | 8.8 | Valuable because Ahrefs says competitors monetise it |

### Supporting GSC signals
- `ai consulting near me` — 47 impressions, avg position 1.5
- `ai consultants near me` — 41 impressions, avg position 1.0
- `ai consultancy` — 42 impressions, avg position 10.9
- `ai consultancy uk` — 5 impressions, avg position 21.0

### What that means now
The best next move is still **not** more generic AI commentary content. It is to attack the queries where GSC already showed demand and competitors already prove commercial value:
- `ai consultancy for small business`
- `ai consultants for small business`
- `ai consultancy northern ireland`
- `ai consulting services`
- `ai consulting agency`

The "near me" terms remain an oddity: strong ranking, weak clicks. That still points more toward **GBP / local-pack weakness** than on-page SEO alone.

## 5) Tactical findings by priority

### Priority 1
- Strengthen the homepage and `/ai-consultancy` around the exact commercial cluster:
  - `ai consultancy`
  - `ai consultancy northern ireland`
  - `ai consulting services`
  - `ai consultancy for small business`

### Priority 2
- Rework `/lp/ai-audit` so it is not just an offer page, but an SEO-commercial landing page tied to:
  - `ai audit`
  - `ai readiness assessment`
  - buyer-intent FAQs
  - proof / case-study links

### Priority 3
- Build or refocus one page for the small-business cluster rather than spreading effort across multiple weak pages.

### Priority 4
- Run outreach for the realistic link targets above instead of chasing vanity media links or copying spammy profiles.

### Priority 5
- Fix the local click-through gap on the "near me" terms through GBP work, because ranking alone is not turning into clicks.

## Recommended next actions

### Next 7 days
1. Tighten homepage + `/ai-consultancy` messaging and internal links around the commercial keyword cluster.
2. Upgrade `/lp/ai-audit` into a stronger SEO landing page tied to readiness/audit intent.
3. Consolidate the small-business intent into one clear landing page rather than spreading it across blog posts.
4. Start outreach for `designrush.com`, `qub.ac.uk`, `ulster.ac.uk`, and one PR/discovery target.

### Next 30 days
5. Add proof-rich case-study pages that support the commercial pages.
6. Build one governance/trust asset so Blue Canvas does not leave that angle entirely to AICC/Artellis-style competitors.
7. Restore live GSC access so the keyword-opportunity list stops relying on March exports.

## Bottom line

The headline is still the same as last week, but sharper:
- **Backlink gap:** real, but solvable with 10-20 better links rather than more junk.
- **Content gap:** the commercial service cluster is still too weak relative to Brainpool and I Want More.
- **Keyword opportunity:** small-business, NI, audit, and commercial service terms are still the highest-leverage targets.

The fastest win is to combine:
- one stronger commercial landing-page pass
- one tighter small-business page
- one real outreach sprint against the NI/business trust targets

## Confidence and blockers
- **High confidence:** backlink-gap direction, competitor keyword themes, and page-level competitor patterns from the Ahrefs artifacts dated 2026-04-15 to 2026-04-19
- **Medium confidence:** exact DR value for Blue Canvas, because Ahrefs browser and API snapshots disagree
- **Blocker:** fresh GSC export could not be re-run on 2026-04-22; keyword-opportunity figures are from the last verified March exports
