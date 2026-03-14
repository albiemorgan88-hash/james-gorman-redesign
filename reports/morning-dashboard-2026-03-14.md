# Morning Dashboard — Saturday 14 March 2026

## Site uptime
- bluecanvas.ai — 200 OK via www redirect, 170ms
- ardmorecricket.com — 200 OK, 158ms
- uktradejobs.com — 200 OK, 1316ms
- openclawconsultant.co.uk — 200 OK, 135ms

## Google Ads — yesterday (2026-03-13)
- Account: 801-851-4760
- Impressions: 360
- Clicks: 18
- Spend: £22.26
- Conversions: 0
- Read: traffic still coming in, but conversion tracking / landing-page performance remains the commercial issue.

## Lead pipeline / follow-up
From MEMORY.md and recent lead files:
- James Gorman — still needs week 2 SEO / follow-up with stronger revenue-led upsells.
- Charlie O'Hara / Solara Wellness — do not build more on spec; Phil needs to speak to him first.
- Tim Clark — prior note said WhatsApp message was ready to send.
- Local lead scraper produced 47 leads on 12 Mar; strongest cluster remains Derry estate agents with broken/404 websites.
- Apollo lead builder on 13 Mar returned 0 leads because API key/env was unavailable.

## SEO snapshot
Fresh live GSC pull was not available this morning due auth/API access issues, so using latest verified snapshots:
- Blue Canvas (latest clean weekly comparison in 13 Mar SEO report): 5 clicks, 441 impressions, avg position 8.2; impressions up, clicks still weak.
- UK Trade Jobs: 10 clicks, 792 impressions, CTR 1.26%; still the strongest organic momentum in the stack.
- Blue Canvas keyword baseline from 10 Mar GSC export: 872 impressions across 64 queries; strongest themes are “ai consultancy for small business”, “ai consultants for small business”, and local intent terms.

## Ahrefs snapshot
Attempted via browser tool on `app.ahrefs.com` with `profile=openclaw`.
- Result: blocked by Ahrefs session limit — “You’ve been signed out because this account is being used on another device.”
- Fresh live pull not possible.
- Latest verified baseline on hand:
  - bluecanvas.ai — DR 19; top positions/themes on hand: “ai consulting near me” (#1.5), “ai consultants near me” (#1.0), “ai consultancy northern ireland” (~#5.5)
  - uktradejobs.com — DR 0; known top positions from latest SEO report: “bricklayer birmingham” (#3.6), “engineers oil and gas london” (#4.0), “tiler belfast” (#11.1)

## Cron health
- No cron failures in the last 24h.
- Older failed jobs still sitting in error state:
  - Weekly Money Scout — message delivery failure (5d ago)
  - SEO: Tuesday Fix — timed out (3d ago)
  - SEO: Wednesday Attack — timed out (2d ago)

## Blocked / needs Phil
1. Paste + publish Google Ads conversion tracking snippet on Blue Canvas.
2. Fix Blue Canvas landing page (speed/fonts/form) before more ad spend.
3. Resolve Ahrefs account/session conflict so live Site Explorer data can be pulled.
4. Restore GSC / analytics auth so fresh click/impression data is reliable again.
5. Restore Apollo API key if you want lead-gen cron producing fresh prospects.
