# Cron Health Report - March 26th, 2026 9:00 AM

## Summary
- **✅ Healthy:** 23 crons
- **⚠️ Warning:** 1 cron  
- **❌ Failed:** 2 crons
- **🔄 Stale:** 0 crons

## Health Status

| Cron Name | Schedule | Last Run | Status | Next Run | Health |
|-----------|----------|----------|--------|----------|--------|
| cron-watchdog | 0 9 * * * | Today 9:00 | Running | Today 9:00 | ✅ |
| SEO: Thursday Content | 0 9 * * 4 | Today 9:00 | Running | Today 9:00 | ✅ |
| Local Lead Scraper | 0 10 * * 2,4 | Mar 25 10:00 | OK | Mar 27 10:00 | ✅ |
| **ClawMart Sales Check** | **0 10 * * *** | **Mar 25 10:40** | **ERROR** | **Today 10:00** | **❌** |
| ClawRoster Daily | 0 11 * * * | Mar 25 11:00 | OK | Today 11:00 | ✅ |
| Moltbook Inbox Check | 0 12 * * * | Mar 25 12:00 | OK | Today 12:00 | ✅ |
| moltbook-daily-engagement | 0 13 * * * | Mar 25 13:00 | OK | Today 13:00 | ✅ |
| **Google Ads Daily Optimisation** | **0 14 * * *** | **Mar 25 14:00** | **ERROR** | **Today 14:00** | **❌** |
| AI Trend Scout (Afternoon) | 30 14 * * * | Mar 25 14:30 | OK | Today 14:30 | ✅ |
| Google Ads Daily Report | 0 17 * * * | Mar 25 17:00 | OK | Today 17:00 | ✅ |
| AI Trend Scout (Evening) | 0 21 * * * | Mar 25 21:00 | OK | Today 21:00 | ✅ |
| Nightly Build | 0 22 * * * | Mar 25 22:00 | OK | Today 22:00 | ✅ |
| Memory Distillation | 30 22 * * * | Mar 25 22:30 | OK | Today 22:30 | ✅ |
| Morning Dashboard | 0 7 * * * | Today 7:00 | OK | Mar 27 7:00 | ✅ |
| Security Scan & Fix | 5 7 * * * | Today 7:05 | OK | Mar 27 7:05 | ✅ |
| AI Trend Scout | 0 8 * * * | Today 8:00 | OK | Mar 27 8:00 | ✅ |
| api-key-health | 10 8 * * * | Today 8:10 | OK | Mar 27 8:10 | ✅ |
| SEO: Friday Monitor | 0 9 * * 5 | Mar 21 9:00 | OK | Mar 28 9:00 | ⚠️ |
| Apollo Lead Gen | 0 10 * * 1,3,5 | Mar 25 10:00 | OK | Mar 28 10:00 | ✅ |
| Ardmore Friday Draw | 0 19 * * 5 | Mar 21 19:00 | OK | Mar 28 19:00 | ✅ |
| Ardmore Post-Draw Reconciliation | 15 19 * * 5 | Never | - | Mar 28 19:15 | ✅ |
| Weekly Money Scout | 0 9 * * 0 | Mar 23 9:00 | OK | Mar 30 9:00 | ✅ |
| Tender Tracker Weekly | 0 9 * * 1 | Mar 24 9:00 | OK | Mar 31 9:00 | ✅ |
| SEO: Monday Audit | 30 9 * * 1 | Mar 24 9:30 | OK | Mar 31 9:30 | ✅ |
| SEO: Tuesday Fix | 0 9 * * 2 | Mar 25 9:00 | OK | Apr 1 9:00 | ✅ |
| SEO: Wednesday Attack | 0 9 * * 3 | Today 9:00 | OK | Apr 2 9:00 | ✅ |

## Failed Crons Analysis

### ❌ ClawMart Sales Check
- **Issue:** "AI service temporarily overloaded" error
- **Last Success:** Mar 25 with "1 sale recorded"
- **Consecutive Errors:** 1
- **Action:** Temporary service overload, should resolve automatically

### ❌ Google Ads Daily Optimisation  
- **Issue:** "AI service temporarily overloaded" error
- **Consecutive Errors:** 3
- **Action:** Pattern suggests persistent overload issue, may need manual intervention

### ⚠️ SEO: Friday Monitor
- **Issue:** Last ran 5 days ago (Mar 21)
- **Expected:** Should run weekly on Fridays
- **Action:** Will run Mar 28, monitoring schedule

## Actions Taken
- No immediate action required for overload errors (temporary)
- Google Ads cron showing 3 consecutive failures - flagged for attention
- All other crons running on schedule and healthy

## Next Scheduled Runs Today
- 10:00 - ClawMart Sales Check (retry)
- 11:00 - ClawRoster Daily  
- 12:00 - Moltbook Inbox Check
- 13:00 - moltbook-daily-engagement
- 14:00 - Google Ads Daily Optimisation (retry)
- 14:30 - AI Trend Scout (Afternoon)
- 17:00 - Google Ads Daily Report
- 21:00 - AI Trend Scout (Evening)
- 22:00 - Nightly Build
- 22:30 - Memory Distillation