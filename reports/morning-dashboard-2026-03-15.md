# Morning Dashboard — Sunday 15 Mar 2026

## 1. Site Uptime
- bluecanvas.ai — 200 OK, 0.31s (final URL: https://www.bluecanvas.ai/)
- ardmorecricket.com — 200 OK, 0.09s
- uktradejobs.com — 200 OK, 0.14s
- openclawconsultant.co.uk — 200 OK, 0.08s

## 2. Google Ads — Yesterday (14 Mar)
- Live pull blocked.
- Root cause: `GOOGLE_ADS_REFRESH_TOKEN` is revoked/expired (`invalid_grant` from Google OAuth), so exact yesterday spend/clicks/conversions could not be fetched this morning.
- Last known working snapshot in reports: 13 Mar = £4.46 spend, 8 clicks, 0 conversions.
- Historical note: 9 Mar snapshot was £29.97 spend, 14 clicks, 0 conversions.

## 3. Lead Pipeline / Follow-ups
### Needs Phil follow-up
- James Gorman Property — strongest live prospect; showcase + mockups ready. Best angle: valuation landing page + Google Ads + PropertyPal alerts + expired/withdrawn listing outreach.
- Joe Abrahams — Readiness Scorecard demo built; no recent follow-up logged.
- Donegal CC + InterTradeIreland tenders — explicitly marked for follow-up; now stale.
- Charlie O’Hara / Solara Wellness Hub — do not build more on spec until Phil speaks to him.

### Fresh outbound targets
- Derry estate agents with broken/404 sites: E O'C Estate Agents, Robert Quigley, Montgomery & McCleery.
- High-value local target: Clarendon Legal.

## 4. SEO Snapshot
- Live GSC pull blocked this morning for same reason as Ads: Google OAuth refresh token revoked.
- Last confirmed trend from saved dashboard (8 Mar, Feb 27–Mar 5 vs prior week):
  - bluecanvas.ai — 5 clicks (-29%), 441 impressions (+24%), avg position 8.2 (improved from 10.0), CTR down to 1.13%.
  - uktradejobs.com — 10 clicks (+900%), 792 impressions (+118%), avg position 28.6, CTR up to 1.26%.
- Read: Blue Canvas visibility was rising but CTR was weak; UK Trade Jobs was gaining traction fast.

## 5. Ahrefs Snapshot
### Browser attempt
- Navigated to `app.ahrefs.com` with browser tool.
- Login was blocked by Ahrefs `sessions-exceeded`, so UI snapshot was not available.
- Fallback: pulled Ahrefs API data with existing token.

### bluecanvas.ai
- DR: 25
- Ahrefs Rank: 5,985,026
- Top keyword positions: no organic keywords returned via API snapshot

### uktradejobs.com
- DR: 0
- Ahrefs Rank: 98,113,536
- Top keyword positions (best_position):
  1. `train to be a locksmith` — #32
  2. `trade recruitment` — #56
  3. `how to become an electrician uk` — #64

## 6. Cron Failures / Delivery Issues in Last 24h
### Execution failure
- `cron-watchdog` — failed yesterday at ~09:00; timed out (`cron: job execution timed out`).

### Delivery issues
- `api-key-health` — run OK yesterday but Telegram delivery = `not-delivered`.
- `moltbook-daily-engagement` — run OK yesterday but Telegram delivery = `not-delivered`.

## 7. Blocked Items Needing Phil
1. Refresh/re-auth Google OAuth tokens for Ads + GSC (`GOOGLE_ADS_REFRESH_TOKEN` currently revoked).
2. Follow up James Gorman.
3. Nudge Joe Abrahams.
4. Decide whether to chase Donegal CC / InterTradeIreland or drop them.
5. Speak to Charlie O’Hara before any more spec work.
6. Regenerate Apollo API key — outreach enrichment still blocked (`APOLLO_API_KEY` issue noted in memory).
7. Manually verify top local leads before blasting outreach.
