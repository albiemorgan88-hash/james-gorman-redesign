# Blue Canvas SEO Audit, 2026-04-20

Site: https://www.bluecanvas.ai/
Phase: SEO Engine v2.1, Phase 1, AUDIT
Run time: 2026-04-20 (Europe/London)

## Executive summary

Blue Canvas is in decent shape structurally, but there are a few clear technical wins:

1. Two internal links are broken and return 404.
2. Mobile performance is the main issue, especially on the homepage and `/ai-consultancy`.
3. 23 URLs have duplicate H1s.
4. 3 title-tag duplicates exist, 48 titles are longer than 60 chars, and 25 meta descriptions are longer than 160 chars.
5. 186 of 188 indexed pages contain at least one image missing alt text.

The good news: robots.txt, sitemap, HTTPS/www redirects, canonicals, schema presence, and basic meta coverage are all in place.

## Method

- Crawled `https://www.bluecanvas.ai/sitemap.xml`
- Audited all 188 sitemap URLs for status, titles, meta descriptions, canonicals, H1s, schema presence, internal links, and image alt text
- Checked linked internal URLs for broken links
- Checked `robots.txt` and redirect behaviour
- Ran Lighthouse locally for PageSpeed-style checks because the public PageSpeed Insights API returned `429 quota exceeded`

## Technical audit

### Passes

- `http://bluecanvas.ai` redirects to `https://www.bluecanvas.ai/`
- `https://bluecanvas.ai` redirects to `https://www.bluecanvas.ai/`
- `robots.txt` returns 200 and allows crawling
- `sitemap.xml` returns 200 and contains 188 URLs
- All 188 sitemap URLs returned 200
- 0 pages missing title tags
- 0 pages missing meta descriptions
- 0 pages missing canonical tags
- 0 pages missing JSON-LD/schema script blocks

### Issues

#### Broken internal links

These URLs are linked internally but return 404:

- `https://www.bluecanvas.ai/ai-implementation-automation`
- `https://www.bluecanvas.ai/ai-consulting`

Note: both are broken internal targets, not live sitemap URLs.

#### H1 issues

23 URLs have more than one H1. Examples:

- `/privacy-policy`
- `/terms-and-conditions`
- `/blog/10-zapier-automations-small-business`
- `/blog/5-ai-agents-save-20-hours`
- `/blog/ai-agents-transforming-uk-professional-services`
- `/blog/ai-automation-small-business-uk-guide`
- `/blog/ai-chatbot-for-small-business`
- `/blog/ai-customer-service-automation`
- `/blog/ai-implementation-plan`
- `/blog/openclaw-vs-chatgpt`

Most of these appear to be duplicate H1 renderings on blog/legal templates.

#### Meta-tag quality issues

- 3 duplicate title-tag sets
- 48 titles longer than 60 characters
- 25 meta descriptions longer than 160 characters

Duplicate title-tag sets:

1. `AI Consultancy Northern Ireland | Blue Canvas`
   - `/ai-consultancy`
   - `/blog/ai-consultancy-northern-ireland-a2bg3`

2. `AI for B2B Sales Automation | Blue Canvas`
   - `/blog/ai-for-b2b-sales-automation`
   - `/blog/ai-for-b2b-sales-automation-2`

3. `Is AI a Bubble? | Blue Canvas`
   - `/blog/is-ai-a-bubble`
   - `/blog/is-ai-a-bubble-2`

Examples of overlong titles:

- `/blog/ai-chatbot-for-small-business` (101 chars)
- `/blog/ai-customer-service-automation` (96 chars)
- `/blog/ai-for-finance-teams` (92 chars)
- `/blog/ai-consultancy-for-small-business` (90 chars)

Examples of overlong meta descriptions:

- `/blog/ai-automation-small-business-uk-guide` (261 chars)
- `/blog/ai-consultancy-uk-the-evolution-of-ai-in-business-development` (263 chars)
- `/blog/complete-business-automation-guide-ai-implementation-uk` (233 chars)
- `/blog/northern-ireland-businesses-ai-consultancy-2026` (232 chars)

#### Image alt text

- 186 of 188 audited pages have at least one image missing alt text

This is sitewide and likely template/CMS-image related.

#### Internal linking

Pages with fewer than 2 unique internal links:

- `/privacy-policy`
- `/terms-and-conditions`

## PageSpeed / Lighthouse

Public PSI API could not be used on 2026-04-20 because Google returned `429 quota exceeded`, so these were run locally with Lighthouse against the live site.

| URL | Mode | Performance | SEO | LCP | CLS | Notes |
|---|---|---:|---:|---:|---:|---|
| `/` | Mobile | 63 | 100 | 10.07s | 0.000 | Main issue, mobile LCP badly over 2.5s |
| `/` | Desktop | 89 | 100 | 2.14s | 0.000 | Fine overall |
| `/ai-consultancy` | Mobile | 65 | 100 | 7.06s | 0.184 | Fails LCP and CLS thresholds |
| `/lp/ai-audit` | Mobile | 91 | 100 | 2.42s | 0.113 | Good performance, CLS still slightly high |

Threshold check:

- LCP target: under 2.5s
- CLS target: under 0.1

Fails:

- Homepage mobile LCP
- `/ai-consultancy` mobile LCP and CLS
- `/lp/ai-audit` mobile CLS

## Sitemap and robots

### robots.txt

```txt
User-agent: *
Allow: /

Sitemap: https://www.bluecanvas.ai/sitemap.xml
```

### Sitemap notes

- Sitemap is live and crawlable
- Contains 188 URLs
- URLs are on the canonical `https://www.bluecanvas.ai` host
- No non-200 sitemap URLs found during this audit

## Priority fixes

### P1, fix this first

1. Fix the two broken internal links:
   - `/ai-implementation-automation`
   - `/ai-consulting`
2. Improve homepage mobile LCP
3. Improve `/ai-consultancy` mobile LCP and CLS
4. Remove duplicate H1 output from affected templates/pages

### P2, next batch

5. Add missing alt text sitewide
6. Resolve duplicate title tags
7. Trim overlong titles and meta descriptions on blog content

### P3, cleanup

8. Add more contextual internal links from legal pages if desired, though low priority
9. Review older duplicate/variant blog URLs like `-2` and suffixed slugs for consolidation/canonical clean-up

## Suggested next actions

- Fix broken links in nav/buttons/CTAs first, they are the clearest technical SEO loss
- Optimise above-the-fold media and layout stability on homepage and `/ai-consultancy`
- Tidy the blog template so each post outputs a single H1
- Run a CMS pass for image alt text and overlong metadata

## Audit output

- Report: `reports/bluecanvas-seo-audit-2026-04-20.md`
