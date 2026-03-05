# Blue Canvas Tender Tracker

Automated crawler that finds live AI, digital transformation, and technology tenders relevant to Blue Canvas (AI consultancy, Northern Ireland).

## Quick Start

```bash
# Run now
./tender-crawler.sh

# Custom output file
./tender-crawler.sh /path/to/output.md
```

## What It Searches

| Platform | Scope | Method |
|----------|-------|--------|
| [Contracts Finder](https://www.contractsfinder.service.gov.uk/) | UK government contracts | JSON API v2 |
| [Find a Tender](https://www.find-tender.service.gov.uk/) | UK (post-Brexit OJEU replacement) | HTML scraping |
| [eTenders.gov.ie](https://www.etenders.gov.ie/) | Irish government procurement | HTML scraping |
| [InterTradeIreland](https://www.intertradeireland.com/) | Cross-border NI/Ireland | HTML scraping |

### Search Terms
- "artificial intelligence", "AI", "digital transformation"
- "machine learning", "automation", "data analytics"
- "emerging technology", "digital skills", "AI training"

### Filters
- Open/live tenders only
- Value under £100,000 (where API supports filtering)
- SME-suitable (where API supports filtering)

## Relevance Scoring

| Score | Criteria |
|-------|----------|
| **High** | Contains AI, machine learning, AI audit/training/strategy keywords |
| **Medium** | Digital transformation, data analytics, automation, innovation |
| **Low** | General technology, digital, ICT, software keywords |

## Cron Setup

Run weekly on Monday at 8am:
```bash
crontab -e
# Add:
0 8 * * 1 /Users/philsagent/.openclaw/workspace/projects/tender-tracker/tender-crawler.sh
```

## Adding New Sources

1. Add a new `search_<source>()` function in `tender-crawler.sh`
2. Use `curl` to fetch the source, parse with `grep`/`sed`/`awk`
3. Write results to `$TMPDIR/<source>.md` in the standard format
4. Add the source to the assembly section in `Main`
5. Call the function from the main block

## Dependencies

- `bash`, `curl`, `grep`, `sed`, `awk` (standard Unix tools)
- `jq` (optional, improves Contracts Finder JSON parsing)

## Output

Results saved to `results.md` with structured entries:
```
## [Tender Title]
- **Value:** £XX,XXX
- **Deadline:** DD MMM YYYY
- **Source:** [Platform name](URL)
- **Relevance:** High/Medium/Low
- **Notes:** Why this fits Blue Canvas
```

## Blue Canvas Services (for relevance matching)

- AI consulting & strategy
- Training workshops & digital skills
- AI audits & readiness assessments
- Automation implementation
- Research & emerging technology
