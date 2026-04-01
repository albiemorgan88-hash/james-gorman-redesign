# Cron Health Report - 2026-04-01

## Summary
Total Crons: 18
- ✅ Healthy: 14
- ⚠️ Warning: 0
- ❌ Failed: 3
- 🔄 Stale: 1

## Health Assessment

| Cron Name | Schedule | Last Run | Status | Next Run | Health |
|-----------|----------|----------|--------|----------|---------|
| SEO: Wednesday Attack | Wed 9am | 2026-03-26 09:01 | OK | **Currently Running** | ✅ |
| cron-watchdog | Daily 9am | 2026-03-28 09:00 | ERROR | **Currently Running** | ❌ |
| ClawMart Sales Check | Daily 10am | 2026-03-28 10:00 | OK | 2026-04-01 10:00 | ✅ |
| ClawRoster Daily | Daily 11am | 2026-03-28 11:00 | OK | 2026-04-01 11:00 | ✅ |
| Moltbook Inbox Check | Daily 12pm | 2026-03-28 12:00 | OK | 2026-04-01 12:00 | ✅ |
| moltbook-daily-engagement | Daily 1pm | 2026-03-28 13:00 | OK | 2026-04-01 13:00 | ✅ |
| Nightly Build | Daily 10pm | 2026-03-28 22:00 | OK | 2026-03-31 22:00 | ✅ |
| Memory Distillation | Daily 10:30pm | 2026-03-28 22:30 | OK | 2026-03-31 22:30 | ✅ |
| Morning Dashboard | Daily 7am | 2026-03-30 07:00 | OK | 2026-04-02 07:00 | ✅ |
| Security Scan & Fix | Daily 7:05am | 2026-03-30 07:05 | OK | 2026-04-02 07:05 | ✅ |
| api-key-health | Daily 8:10am | 2026-03-30 08:10 | OK | 2026-04-02 08:10 | ✅ |
| SEO: Thursday Content | Thu 9am | 2026-03-21 09:00 | OK | 2026-04-03 09:00 | ✅ |
| SEO: Friday Monitor | Fri 9am | 2026-03-22 09:00 | ERROR | 2026-04-04 09:00 | ❌ |
| Ardmore Friday Draw | Fri 7pm | 2026-03-28 19:00 | OK | 2026-04-04 19:00 | ✅ |
| Ardmore Post-Draw Reconciliation | Fri 7:15pm | 2026-03-28 19:15 | ERROR | 2026-04-04 19:15 | ❌ |
| Tender Tracker Weekly | Mon 9am | 2026-03-24 09:00 | OK | 2026-04-07 09:00 | ✅ |
| SEO: Monday Audit | Mon 9:30am | 2026-03-24 09:30 | OK | 2026-04-07 09:30 | ✅ |
| SEO: Tuesday Fix | Tue 9am | 2026-03-25 09:00 | OK | 2026-04-08 09:00 | ✅ |

## Failed Crons (❌)

### 1. cron-watchdog (ERROR - 1 consecutive error)
- **Issue**: Last run failed on 2026-03-28
- **Action**: Currently running (this execution)

### 2. SEO: Friday Monitor (ERROR - 1 consecutive error) 
- **Issue**: Rate limit reached on last run (2026-03-22)
- **Last Error**: "⚠️ API rate limit reached. Please try again later."
- **Action**: Will auto-retry on next Friday (2026-04-04)

### 3. Ardmore Post-Draw Reconciliation (ERROR - 1 consecutive error)
- **Issue**: "Error: Outbound not configured for channel: telegram"
- **Action**: Delivery config needs fixing - should use "last" channel like main draw

## Delivery Issues

Several crons have delivery status "not-delivered":
- SEO: Thursday Content
- SEO: Friday Monitor  
- SEO: Monday Audit
- SEO: Tuesday Fix
- Ardmore Friday Draw

These appear to be using delivery channel "last" which may not be configured properly.

## Recommendations

1. **Fix Ardmore Post-Draw delivery**: Change channel from "telegram" to "last"
2. **Monitor SEO Friday rate limits**: May need to add delays between API calls
3. **Review delivery channel config**: Multiple crons showing "not-delivered" status