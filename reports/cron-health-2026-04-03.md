# Cron Health Report — 2026-04-03

## Summary
- ✅ Healthy: 10
- ❌ Failed: 8
- ⚠️ Warning: 0
- 🔄 Stale: 0

## Status Table

| Cron Name | Schedule | Last Run | Status | Next Run | Health |
|---|---|---|---|---|---|
| cron-watchdog | Daily 9am | Today 9:01am | ok | Tomorrow 9am | ✅ Healthy |
| Morning Dashboard | Daily 7am | Today 7:00am | ok | Tomorrow 7am | ✅ Healthy |
| Security Scan & Fix | Daily 7:05am | Today 7:05am | ok | Tomorrow 7:05am | ✅ Healthy |
| api-key-health | Daily 8:10am | Today 8:10am | ok | Tomorrow 8:10am | ✅ Healthy |
| moltbook-daily-engagement | Daily 1pm | Yesterday 1pm | ok | Today 1pm | ✅ Healthy |
| Ardmore Friday Draw | Fri 7pm | Last Fri 7pm | ok | Today 7pm | ✅ Healthy |
| Tender Tracker Weekly | Mon 9am | Mon 9am | ok | Next Mon 9am | ✅ Healthy |
| SEO: Monday Audit | Mon 9:30am | Mon 9:30am | ok | Next Mon 9:30am | ✅ Healthy |
| SEO: Tuesday Fix | Tue 9am | Tue 9am | ok | Next Tue 9am | ✅ Healthy |
| SEO: Wednesday Attack | Wed 9am | Wed 9am | ok | Next Wed 9am | ✅ Healthy |
| **SEO: Thursday Content** | Thu 9am | Yesterday 9am | **timeout** | Next Thu 9am | ❌ Failed |
| **SEO: Friday Monitor** | Fri 9am | Last Fri | **rate_limit** | Today 9am | ❌ Failed |
| **ClawMart Sales Check** | Daily 10am | Yesterday 10am | **timeout** | Today 10am | ❌ Failed |
| **ClawRoster Daily** | Daily 11am | Yesterday 11am | **timeout** | Today 11am | ❌ Failed |
| **Moltbook Inbox Check** | Daily 12pm | Yesterday 12pm | **timeout** | Today 12pm | ❌ Failed |
| **Nightly Build** | Daily 10pm | Yesterday 10pm | **timeout** (×2) | Today 10pm | ❌ Failed |
| **Memory Distillation** | Daily 10:30pm | Yesterday 10:30pm | **timeout** (×2) | Today 10:30pm | ❌ Failed |
| **Ardmore Post-Draw Recon** | Fri 7:15pm | Last Fri 7:15pm | **outbound error** | Today 7:15pm | ❌ Failed |

## Failure Analysis

### Dominant Issue: Timeouts (6 crons)
ClawMart, ClawRoster Daily, Moltbook Inbox, SEO Thursday Content, Nightly Build (×2), Memory Distillation (×2) — all hitting the default timeout. These tasks likely need `timeoutSeconds` increased or their prompts simplified.

### Rate Limit: SEO Friday Monitor
Hit API rate limit last Friday. Should retry today. consecutiveErrors: 1.

### Config Error: Ardmore Post-Draw Reconciliation
Error: "Outbound not configured for channel: telegram" — delivery channel misconfigured. Needs delivery config update.

## Recommendations
1. **Increase timeoutSeconds** for: ClawMart (currently default), ClawRoster Daily (default), Moltbook Inbox (default), Nightly Build (default), Memory Distillation (default). Set to 300s minimum.
2. **Fix Ardmore Reconciliation delivery** — change delivery.channel from "last" to explicit telegram config.
3. **Monitor SEO Friday** — running again today, should self-heal if rate limit cleared.
