---
name: tender-tracker
description: Find and track UK/Ireland government tenders for AI, digital transformation, and technology consulting. Use when PJ asks about tenders, procurement opportunities, government contracts, or CCS frameworks. Covers Contracts Finder, Find a Tender, eTenders, and InterTradeIreland.
---

# Tender Tracker

## Quick Start

```bash
# Run the crawler
cd projects/tender-tracker && ./tender-crawler.sh

# Results saved to projects/tender-tracker/results.md
```

## Sources

| Platform | URL | Method | Scope |
|----------|-----|--------|-------|
| Contracts Finder | contractsfinder.service.gov.uk | JSON API v2 | UK government |
| Find a Tender | find-tender.service.gov.uk | HTML scraping | UK (post-Brexit OJEU) |
| eTenders | etenders.gov.ie | HTML scraping (limited, needs auth) | Ireland |
| InterTradeIreland | intertradeireland.com | HTML scraping | Cross-border NI/Ireland |

## Search Terms
"artificial intelligence", "AI services", "digital transformation", "machine learning", "intelligent automation", "data analytics", "data science", "emerging technology", "digital skills", "AI training"

## Relevance Scoring

- **High (5+):** AI, machine learning, AI audit/training/strategy
- **Medium (2-4):** Digital transformation, data analytics, automation, innovation
- **Low (1):** General technology, digital, ICT, software, consultancy

## Filtering Criteria

Blue Canvas sweet spot:
- Value: **under £100k** (SME-suitable, less competition)
- Services: AI consulting, training workshops, AI audits, automation, research
- Geography: UK, Northern Ireland, Ireland (all-island)
- Sectors: Public sector, councils, health trusts, education, tourism

**Skip:** Pure software development, hardware procurement, infrastructure builds

## Manual Checks (Weekly)

When the crawler misses things or sources need login:

1. **Contracts Finder:** Search "artificial intelligence" + "digital transformation", filter Open + SME-friendly
2. **Find a Tender:** Search same terms, check new notices
3. **eTenders:** Log in, browse Technology/ICT category, check email alerts
4. **InterTradeIreland:** Check funding/programmes page for new calls
5. **Invest NI:** Check innovateni.com for AI/digital programmes
6. **CCS Frameworks:** Check Digital Marketplace for new framework openings

## CCS Framework Tracking

Blue Canvas target frameworks:
- **G-Cloud** — list AI consultancy services (next opening TBC)
- **Digital Outcomes and Specialists (DOS)** — bid on specific requirements
- **Technology Services 3** — larger contracts

Check: [Digital Marketplace](https://www.digitalmarketplace.service.gov.uk/)

**To get on a framework:** Apply during open window → get listed → buyers find you → bid on call-offs. Framework listing = steady pipeline.

## Dashboard Generation

To create a dashboard from results:
1. Run crawler: `./tender-crawler.sh`
2. Dashboard already exists at `projects/tender-tracker/dashboard.html`
3. Open in browser or serve locally

## Active Tenders (Update as needed)

Track in `projects/tender-tracker/results.md`. Format:
```markdown
## [Tender Title]
- **Value:** £XX,XXX
- **Deadline:** DD MMM YYYY
- **Source:** [Platform](URL)
- **Relevance:** High/Medium/Low
- **Status:** Watching / Preparing / Submitted / Won / Lost
- **Notes:** Why it fits, key requirements
```

## Blue Canvas Submission History

| Tender | Value | Status | Date |
|--------|-------|--------|------|
| Donegal County Council — Tourism AI Training | €4,200 | Submitted | 13 Feb 2026 |
| InterTradeIreland — AI for SMEs Research | £72,000 | Submitted | 13 Feb 2026 |

## Workflow

1. **Monday:** Run crawler, review results
2. **Filter:** Score relevance, check deadlines (need 2+ weeks lead time)
3. **Shortlist:** Present top 3-5 to PJ with quick summary
4. **Prepare:** For approved tenders, draft submission (Word doc, signed)
5. **Submit:** Email to procurement contact before deadline
6. **Track:** Update status in results.md
