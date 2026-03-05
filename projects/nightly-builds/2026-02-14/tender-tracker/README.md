# 🎯 Blue Canvas AI — Tender Tracker

A dashboard and daily checker for AI/digital/technology tenders relevant to Blue Canvas AI (AI consultancy, Derry, Northern Ireland).

## What's Included

| File | Purpose |
|------|---------|
| `index.html` | Interactive dashboard showing all found tenders, active bids, and key frameworks |
| `check-tenders.sh` | Shell script to query procurement APIs daily |
| `README.md` | This file |

## Dashboard Features

- **Active Bids** — Donegal Council (€4,200) and InterTradeIreland (£72,000) with status
- **Open Opportunities** — 10 live AI/digital tenders from UK & Ireland sources
- **Urgency Coding** — 🔴 <7 days, 🟠 7–14 days, 🟢 14+ days
- **Filters** — All / High Relevance / Medium / Pre-Market Engagement
- **Key Frameworks** — CCS AI DPS (RM6200), RM6263, Go-2-Tender programme

## Sources Searched

1. **Find a Tender** (UK) — find-tender.service.gov.uk
2. **Contracts Finder** (UK) — contractsfinder.service.gov.uk
3. **eTenders.ie** — Irish government procurement
4. **eTendersNI** — Northern Ireland procurement
5. **InterTradeIreland** — Cross-border tenders
6. **Stotles** — Aggregated AI tender feed
7. **BidStats UK** — Northern Ireland region filter
8. **Crown Commercial Service** — AI DPS framework

## Usage

### View Dashboard
```bash
open index.html
```

### Run Daily Check
```bash
chmod +x check-tenders.sh
./check-tenders.sh
```

### Automate (cron)
```bash
# Add to crontab for daily 8am check
0 8 * * * /path/to/check-tenders.sh >> /path/to/tender-check.log 2>&1
```

## Key Actions for Blue Canvas

1. **Register on CCS AI DPS (RM6200)** — Critical for all UK Gov AI call-offs
2. **Register on RM6263** — Digital Specialist & Programmes framework
3. **Sign up for Stotles** — Free AI tender alerts: stotles.com
4. **Monitor LPS NI** — Land & Property Services digital transformation (NI-based)
5. **Watch IPEC/CPC** — AI for Public Realm tender coming post-23 Feb

## Generated

14 February 2026 · Nightly build
