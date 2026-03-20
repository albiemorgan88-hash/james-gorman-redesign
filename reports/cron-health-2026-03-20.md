# 🔧 Daily Cron Watchdog Report - March 20th, 2026

**Generated:** 2026-03-20 09:06 GMT  
**Status:** ⚠️ 2 Issues Detected

## Health Summary
- ✅ **22 Healthy** crons running normally
- ❌ **2 Failed** crons need attention  
- 🔄 **0 Stale** jobs
- ⚠️ **0 Warning** jobs

## Cron Health Table

| Cron Name | Schedule | Last Run | Status | Next Run | Health |
|-----------|----------|----------|---------|-----------|---------|
| cron-watchdog | 0 9 * * * | 2026-03-19 09:06 | ok | 2026-03-20 09:00 | ✅ Healthy |
| SEO: Friday Monitor | 0 9 * * 5 | 2026-03-15 09:00 | ok | 2026-03-20 09:00 | ✅ Healthy |
| Apollo Lead Gen | 0 10 * * 1,3,5 | 2026-03-19 10:00 | ok | 2026-03-21 10:00 | ✅ Healthy |
| ClawMart Sales Check | 0 10 * * * | 2026-03-19 10:07 | ok | 2026-03-21 10:00 | ✅ Healthy |
| Moltbook Inbox Check | 0 12 * * * | 2026-03-19 12:00 | error | 2026-03-20 12:00 | ❌ Failed |
| moltbook-daily-engagement | 0 13 * * * | 2026-03-19 13:00 | ok | 2026-03-20 13:00 | ✅ Healthy |
| Google Ads Daily Optimisation | 0 14 * * * | 2026-03-19 14:00 | ok | 2026-03-20 14:00 | ✅ Healthy |
| AI Trend Scout (Afternoon) | 30 14 * * * | 2026-03-19 14:30 | ok | 2026-03-20 14:30 | ✅ Healthy |
| Google Ads Daily Report | 0 17 * * * | 2026-03-19 17:00 | ok | 2026-03-20 17:00 | ✅ Healthy |
| Ardmore Friday Draw | 0 19 * * 5 | 2026-03-14 19:00 | ok | 2026-03-21 19:00 | ✅ Healthy |
| AI Trend Scout (Evening) | 0 21 * * * | 2026-03-19 21:00 | ok | 2026-03-20 21:00 | ✅ Healthy |
| Nightly Build | 0 22 * * * | 2026-03-19 22:00 | ok | 2026-03-20 22:00 | ✅ Healthy |
| Memory Distillation | 30 22 * * * | 2026-03-19 22:30 | ok | 2026-03-20 22:30 | ✅ Healthy |
| Morning Dashboard | 0 7 * * * | 2026-03-20 07:00 | ok | 2026-03-21 07:00 | ✅ Healthy |
| Security Scan & Fix | 5 7 * * * | 2026-03-20 07:05 | ok | 2026-03-21 07:05 | ✅ Healthy |
| AI Trend Scout | 0 8 * * * | 2026-03-20 08:00 | ok | 2026-03-21 08:00 | ✅ Healthy |
| api-key-health | 10 8 * * * | 2026-03-20 08:10 | ok | 2026-03-21 08:10 | ✅ Healthy |
| Weekly Money Scout | 0 9 * * 0 | 2026-03-16 09:00 | ok | 2026-03-23 09:00 | ✅ Healthy |
| Tender Tracker Weekly | 0 9 * * 1 | 2026-03-17 09:00 | ok | 2026-03-24 09:00 | ✅ Healthy |
| SEO: Monday Audit | 30 9 * * 1 | 2026-03-17 09:30 | ok | 2026-03-24 09:30 | ✅ Healthy |
| SEO: Tuesday Fix | 0 9 * * 2 | 2026-03-18 09:00 | ok | 2026-03-25 09:00 | ✅ Healthy |
| Local Lead Scraper | 0 10 * * 2,4 | 2026-03-18 10:00 | ok | 2026-03-20 10:00 | ✅ Healthy |
| SEO: Wednesday Attack | 0 9 * * 3 | 2026-03-19 09:00 | ok | 2026-03-26 09:00 | ✅ Healthy |
| SEO: Thursday Content | 0 9 * * 4 | 2026-03-13 09:00 | error | 2026-03-27 09:00 | ❌ Failed |

## Failed Jobs (Action Required)

### ❌ Moltbook Inbox Check
- **Last Run:** 2026-03-19 12:00
- **Status:** Error - "AI service temporarily overloaded"
- **Consecutive Errors:** 1
- **Action:** Job remains enabled for auto-retry today at 12:00

### ❌ SEO: Thursday Content  
- **Last Run:** 2026-03-13 09:00 (7 days ago)
- **Status:** Error - "cron: job execution timed out" 
- **Consecutive Errors:** 1
- **Action:** Job remains enabled. Last week it timed out at 300s limit - likely needs timeout increase for content publishing workflow

## Key Metrics
- **Total Active Crons:** 24
- **Success Rate:** 91.7% (22/24 healthy)
- **Current Time:** 2026-03-20 09:06 GMT
- **Currently Running:** cron-watchdog (this job), SEO: Friday Monitor

## Recent Activity (Last 24h)
All scheduled crons from yesterday completed successfully except the Moltbook Inbox Check which hit an overloaded service error. No system-level issues detected.

## Recommendations
1. **SEO: Thursday Content** needs timeout increase from 300s to at least 600s for content publishing
2. Monitor **Moltbook Inbox Check** - service overload errors are typically temporary
3. All other systems running optimally

---
**Next Watchdog:** Tomorrow 9:00 AM GMT