# James Gorman Property — Vendor Rescue Showcase Workflow

_Date: 2026-05-05_
_Status: workflow design / build brief_

## Client signal

James loved the Clarendon-style personalised property showcase and wants to roll it out quickly.

His first target segment:

- Homes in **BT47 / BT48**
- On the market for **60+ days**
- Priority if there has been **no meaningful price movement**, stale presentation, weak listing assets, or signs the vendor may be frustrated
- Outreach ideas: hand-delivered letter with QR code, door knock with presentation, in-person showcase

## Core product idea

A weekly **Vendor Rescue Pipeline** for James:

1. Find stale Derry/BT47/BT48 listings.
2. Score which vendors are most likely to be receptive.
3. Generate a personalised showcase page showing how James would relaunch the property.
4. Produce a matching outreach pack: letter, QR code, talking points, follow-up task.
5. James hand-delivers / knocks / follows up.
6. We track responses, valuations booked, instructions won, and refine the criteria.

This turns SEO/content work into a direct sales engine.

---

## Important data-source constraint

PropertyPal `robots.txt` currently disallows `/search`, so we should **not build a bot that hammers PropertyPal search result pages** without permission/API/access route.

Safer implementation options:

### Option A — Permission/API route
Ask PropertyPal / use an approved feed/API/export if available.

### Option B — Human-assisted weekly source
James or Phil provides the candidate URLs from a saved search each week. The agent processes the list, enriches, scores, and generates showcases. Fastest compliant MVP.

### Option C — Public-page collector, no search scraping
Use allowed public listing URLs supplied from alerts/manual export/sitemap-like sources, then crawl only individual property pages gently, cache results, and avoid disallowed search endpoints.

Recommendation: **start with Option B this week**, while we explore Option A/C for automation.

---

## Weekly cadence

### Monday morning — Data pull

Input source for MVP:

- A CSV or pasted list of PropertyPal/property URLs from BT47/BT48 saved searches
- Optional fields: address, asking price, agent, listed date, status, price history, property type, bedrooms, URL

Agent outputs:

- `weekly-targets/YYYY-MM-DD-candidates.csv`
- `weekly-targets/YYYY-MM-DD-shortlist.md`

### Monday afternoon — Qualification

Score each property 0–100.

Suggested scoring:

| Signal | Points | Notes |
|---|---:|---|
| On market 60+ days | +30 | James' first filter |
| No price change / stale price | +15 | Indicates vendor may be stuck |
| Weak photos / presentation | +15 | Best showcase opportunity |
| Poor description / missing selling story | +10 | Easy relaunch angle |
| Vacant / chain-free / probate / rental clues | +10 | Strong seller motivation indicators |
| BT47/BT48 fit | +10 | Core geography |
| Higher fee potential | +10 | Larger property / better instruction value |
| Current agent is not James | required | Avoid own listings |

Priority buckets:

- **A-list:** 75+ — build showcase this week
- **B-list:** 55–74 — letter only / monitor
- **C-list:** under 55 — monitor or skip

### Tuesday — Showcase generation

For top 3–5 properties weekly, generate a custom relaunch showcase.

Showcase structure:

1. Hero: “A smarter relaunch for [address]”
2. Current listing snapshot: price, days on market, property type, location
3. Diagnosis: why the listing may have gone stale
4. James relaunch plan:
   - photography / video / presentation
   - sharper buyer positioning
   - local buyer angles
   - pricing conversation, if relevant
   - portal refresh + social push + database push
5. Example campaign timeline: 7/14/30 days
6. Clear CTA: “Book a no-pressure relaunch review”
7. QR-friendly URL

### Wednesday — Outreach pack

For each showcase:

- Print letter PDF
- QR code PNG
- Door-knock talking points
- WhatsApp/SMS follow-up draft if vendor gives permission
- CRM row / follow-up date

### Thursday/Friday — Field action

James picks one of three outreach modes:

1. **Letter only** — safest for volume
2. **Letter + QR + door knock** — best for high-priority targets
3. **In-person iPad showcase** — best for 1–2 strongest targets each week

### Friday — Results review

Track:

- Letters delivered
- Door knocks attempted
- Conversations had
- QR scans / showcase visits
- Valuations booked
- Instructions won
- Objections heard
- Next week's criteria tweak

---

## MVP build plan

### Phase 1 — Manual-source MVP

Build now:

- Candidate CSV schema
- Scoring script
- Showcase generator from property JSON/CSV
- QR generator
- Letter template
- Weekly report template
- Simple status tracker

Inputs:

- Manual candidate URL list from saved BT47/BT48 search
- Agent extracts/summarises individual supplied pages where allowed
- Human verifies before letters are printed/sent

Output per property:

```text
/showcases/YYYY-MM-DD/address-slug/
  index.html
  property.json
  letter.md
  letter.pdf
  qr.png
  talking-points.md
```

### Phase 2 — Semi-automated monitoring with Apify

Phil confirmed an Apify route is acceptable/preferred if credentials are available. Local env currently needs `APIFY_TOKEN` or `APIFY_API_TOKEN`.

Scaffolded script:

```bash
cd /Users/philsagent/.openclaw/workspace
source ~/.zprofile
projects/clients/james-gorman/vendor-rescue/scripts/run_apify_propertypal.py --max-items 100
```

Default start URLs:

- `https://www.propertypal.com/property-for-sale/bt47`
- `https://www.propertypal.com/property-for-sale/bt48`

Outputs:

- raw Apify JSON
- normalised candidate CSV
- scored shortlist markdown

Weekly monitoring tasks:

- Store previous weekly snapshots
- Detect price changes / status changes / removals
- Avoid duplicate outreach
- Identify “still stale after another 7 days” targets

### Phase 3 — Full automation if allowed

- Approved data feed/API or compliant collector
- Weekly scheduled run
- Auto-generate A-list draft showcases
- Notify Phil/James with review pack
- No external sends without approval

---

## Outreach positioning

Do **not** make it feel like “your current agent is bad”.

Better angle:

> “I noticed the property has been sitting for a while and thought it might be useful to show you what a refreshed launch could look like. No pressure — I made this private example so you can see the difference a sharper presentation and campaign can make.”

Tone:

- helpful
- specific
- respectful
- local
- no hard sell
- no public criticism of the current agent

## Letter outline

Subject/headline:

> A fresh way to relaunch [address]

Body:

- Saw the property has been online for a while
- Built a private example of how James would present it differently
- QR code opens the personalised showcase
- Offer a no-pressure 10-minute chat / valuation review
- Mention James' local Derry focus and recent successful outcomes without overclaiming

## Door-knock script

> “Hi, I’m James Gorman. I’m local and I work with homeowners around Derry. I noticed your property has been on the market for a while, so I put together a private example of how I’d relaunch it if you ever wanted a fresh approach. I’m not here to pressure you — I just wanted to leave this with you. The QR code opens the example.”

If interested:

> “The main thing I’d change is the story and presentation. Buyers need to feel the house quickly, not just see rooms. I can walk you through it in two minutes if useful.”

## Risks / guardrails

- Respect PropertyPal robots/terms; avoid disallowed search scraping.
- Do not publish personal/vendor-sensitive pages publicly indexed by Google.
- Showcase pages should be unlisted/noindex unless James explicitly wants a public portfolio version.
- No misleading claims, no fake buyer demand, no criticism of named competitor agents.
- Human review before any letter is printed or delivered.
- Track duplicates so the same vendor is not repeatedly contacted.

## Immediate next actions

1. Build Phase 1 manual-source MVP.
2. Ask James/Phil for first 10–20 candidate PropertyPal URLs from BT47/BT48, 60+ days.
3. Generate 3 pilot showcases.
4. Produce QR letters and door-knock packs.
5. James tests delivery method and reports response quality.
