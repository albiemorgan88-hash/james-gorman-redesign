# Ahrefs metrics notes

Date pulled: 2026-04-17
Preferred method attempted: browser automation in app.ahrefs.com on openclaw profile
Fallback method used: live Ahrefs API (same date) after browser control failure on the dedicated profile

## Access / method notes
- Reached `https://app.ahrefs.com/sessions-exceeded` in the openclaw browser profile.
- Reached Google account chooser for Ahrefs sign-in.
- Browser control then failed with profile/CDP errors (`Port 18800 is in use for profile "openclaw" but not by openclaw`), so app-based collection was not feasible in this run.
- All numeric metrics below are live Ahrefs API values from 2026-04-17, not inferred.

## Core metrics

| Domain | DR | Ahrefs rank | Live backlinks | Live ref domains | All-time ref domains | Organic keywords | Keywords 1-3 | Est. organic traffic |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| bluecanvas.ai | 26.0 | 5,732,603 | 5,837 | 18 | 20 | 0 | 0 | 0 |
| uktradejobs.com | 9.0 | 18,123,030 | 317 | 20 | 26 | 4 | 0 | 6 |
| brainpool.ai | 38.0 | 1,705,699 | 1,443 | 546 | 1,558 | 69 | 14 | 1,252 |
| iwantmore.ai | 6.0 | 24,757,326 | 231 | 128 | 141 | 20 | 6 | 243 |

## Top organic keywords

### bluecanvas.ai
- No live organic keywords returned by Ahrefs on 2026-04-17.

### uktradejobs.com
1. `is city and guilds an nvq` (pos 7, vol 100, est traffic 5)
2. `plumbing apprenticeship london` (pos 26, vol 900, est traffic 1)
3. `train to be a locksmith` (pos 32, vol 200, est traffic 0)
4. `trade recruitment` (pos 56, vol 200, est traffic 0)

### brainpool.ai
1. `ai consultancy` (pos 2, vol 1100, est traffic 190)
2. `ai consulting companies` (pos 3, vol 900, est traffic 135)
3. `ai consulting agency` (pos 9, vol 2000, est traffic 94)
4. `ai consulting company` (pos 2, vol 250, est traffic 85)
5. `ai consultancy services` (pos 4, vol 600, est traffic 71)
6. `ai consultancy` alt locale row (pos 1, vol 200, est traffic 70)
7. `ai consulting companies` alt locale row (pos 4, vol 350, est traffic 44)
8. `ai consultancy uk` (pos 4, vol 350, est traffic 44)
9. `brainpool ai` (pos 1, vol 100, est traffic 37)
10. `machine learning consulting company` (pos 6, vol 500, est traffic 37)

### iwantmore.ai
1. `ai consulting services` (pos 1, vol 700, est traffic 63)
2. `ai consultancy uk` (pos 3, vol 350, est traffic 55)
3. `ai consulting firms` (pos 3, vol 350, est traffic 51)
4. `ai consulting company` (pos 4, vol 250, est traffic 28)
5. `ai consultancy uk` alt locale row (pos 1, vol 20, est traffic 8)
6. `ai consulting` (pos 17, vol 1200, est traffic 8)
7. `ai consultancy` (pos 9, vol 200, est traffic 7)
8. `ai consultancy` alt locale row (pos 3, vol 50, est traffic 5)
9. `ai consultants` (pos 16, vol 600, est traffic 5)
10. `ai consultancy london` (pos 11, vol 150, est traffic 4)

## Blue Canvas competitor gap vs brainpool.ai + iwantmore.ai

### Content / keyword gap (live API, 2026-04-17)
Because Blue Canvas has 0 live organic keywords in Ahrefs, every competitor keyword below is an uncovered gap.

Shared or strongest commercial gaps:
- `ai consultancy` (seen on both, best competitor pos 1, vol 1100, combined est traffic 272, CPC 457)
- `ai consultancy uk` (seen on both, best competitor pos 1, vol 350, combined est traffic 107, CPC 762)
- `ai consulting company` (seen on both, best competitor pos 2, vol 250, combined est traffic 113, CPC 562)
- `ai consulting agency` (Brainpool, pos 9, vol 2000, est traffic 94, CPC 948)
- `ai consulting services` (I Want More, pos 1, vol 700, est traffic 63, CPC 1520)
- `ai consulting firms` (I Want More, pos 3, vol 350, est traffic 51, CPC 562)
- `ai consultancy services` (Brainpool, pos 4, vol 600, est traffic 71, CPC 157)
- `machine learning consulting company` (Brainpool, pos 6, vol 500, est traffic 37)

### Backlink gap (live API, 2026-04-17)
There were no overlapping competitor-only ref domains in the top 200 ref domains for both Brainpool and I Want More that also did not already link to Blue Canvas.

Highest-value competitor-only ref domains surfaced live:
- Brainpool-only: `forbes.com`, `medium.com`, `businessinsider.com`, `bloomberg.com`, `prnewswire.com`
- I Want More-only: `designrush.com`, `responsesource.com`, `grokipedia.com`

Low-quality / spam-like competitor links to avoid copying:
- `seoexpress.org`
- `rank-your.website`
- `quero.party`
- `linkbooster.shop`
- `bye.fyi`
- `creativeposts.top`

## UK Trade Jobs backlink quality note
Top live ref domains for uktradejobs.com include multiple obviously low-value or spam-like domains, for example:
- `buybacklinks.agency`
- `seoexpress.org`
- multiple `itxoft-*.site` domains

That means the ref domain count is real in Ahrefs, but backlink quality looks materially weak.

## Caveats
- Browser-first collection was attempted but not completed because the openclaw browser controller failed after reaching Ahrefs sign-in.
- Gap analysis is live and current for 2026-04-17, but it is derived from API list endpoints and comparison logic, not Ahrefs web-app gap reports.
- Ahrefs organic keyword rows can include locale duplicates for the same query, so repeated terms were kept where Ahrefs returned distinct rows.
