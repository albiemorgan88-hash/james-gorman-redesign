# Cron Health Report — 30 March 2026

## Summary
- ✅ **23 healthy** crons running on schedule
- ❌ **2 failed** crons needing attention
- ⚠️ **1 warning** job with delivery issues
- 🔄 **0 stale** jobs

## Health Status

| Cron Name | Schedule | Last Run | Status | Next Run | Health |
|-----------|----------|----------|--------|----------|---------|
| Security Scan & Fix | 5 7 * * * | Mar 25 07:05 | ✅ OK | Mar 31 07:05 | ✅ Healthy |
| AI Trend Scout | 0 8 * * * | Mar 25 08:00 | ✅ OK (running) | Mar 31 08:00 | ✅ Healthy |
| api-key-health | 10 8 * * * | Mar 25 08:10 | ✅ OK (running) | Mar 31 08:10 | ✅ Healthy |
| Weekly Money Scout (X + Moltbook) | 0 9 * * 0 | Mar 23 09:00 | ✅ OK (running) | Mar 30 09:00 | ✅ Healthy |
| cron-watchdog | 0 9 * * * | Mar 25 09:00 | ✅ OK (running) | Mar 30 09:00 | ✅ Healthy |
| ClawMart Sales Check | 0 10 * * * | Mar 25 10:00 | ✅ OK (running) | Mar 31 10:00 | ✅ Healthy |
| ClawRoster Daily | 0 11 * * * | Mar 25 11:00 | ✅ OK | Mar 31 11:00 | ✅ Healthy |
| Moltbook Inbox Check | 0 12 * * * | Mar 25 12:00 | ✅ OK | Mar 31 12:00 | ✅ Healthy |
| moltbook-daily-engagement | 0 13 * * * | Mar 25 13:00 | ✅ OK | Mar 31 13:00 | ✅ Healthy |
| Google Ads Daily Optimisation | 0 14 * * * | Mar 25 14:00 | ✅ OK | Mar 31 14:00 | ✅ Healthy |
| AI Trend Scout (Afternoon) | 30 14 * * * | Mar 25 14:30 | ✅ OK | Mar 31 14:30 | ✅ Healthy |
| Google Ads Daily Report | 0 17 * * * | Mar 25 17:00 | ✅ OK | Mar 31 17:00 | ✅ Healthy |
| AI Trend Scout (Evening) | 0 21 * * * | Mar 25 21:00 | ✅ OK | Mar 31 21:00 | ✅ Healthy |
| Nightly Build | 0 22 * * * | Mar 25 22:00 | ✅ OK | Mar 31 22:00 | ✅ Healthy |
| Memory Distillation | 30 22 * * * | Mar 25 22:30 | ✅ OK | Mar 31 22:30 | ✅ Healthy |
| Morning Dashboard | 0 7 * * * | Mar 30 07:00 | ✅ OK | Mar 31 07:00 | ✅ Healthy |
| Tender Tracker Weekly | 0 9 * * 1 | Mar 24 09:00 | ✅ OK | Mar 31 09:00 | ✅ Healthy |
| SEO: Monday Audit | 30 9 * * 1 | Mar 24 09:30 | ✅ OK | Mar 31 09:30 | ✅ Healthy |
| Apollo Lead Gen | 0 10 * * 1,3,5 | Mar 27 10:00 | ⚠️ OK (delivery failed) | Mar 31 10:00 | ⚠️ Warning |
| SEO: Tuesday Fix | 0 9 * * 2 | Mar 25 09:00 | ✅ OK | Apr 1 09:00 | ✅ Healthy |
| Local Lead Scraper | 0 10 * * 2,4 | Mar 27 10:00 | ✅ OK | Apr 1 10:00 | ✅ Healthy |
| SEO: Wednesday Attack | 0 9 * * 3 | Mar 26 09:00 | ✅ OK | Apr 2 09:00 | ✅ Healthy |
| SEO: Thursday Content | 0 9 * * 4 | Mar 27 09:00 | ⚠️ OK (delivery failed) | Apr 3 09:00 | ⚠️ Warning |
| SEO: Friday Monitor | 0 9 * * 5 | Mar 21 09:00 | ❌ ERROR | Mar 28 09:00 | ❌ Failed |
| Ardmore Friday Draw | 0 19 * * 5 | Mar 21 19:00 | ⚠️ OK (delivery failed) | Mar 28 19:00 | ⚠️ Warning |
| Ardmore Post-Draw Reconciliation | 15 19 * * 5 | Mar 21 19:15 | ❌ ERROR | Mar 28 19:15 | ❌ Failed |

## ❌ Failed Crons Requiring Immediate Action

### 1. SEO: Friday Monitor (63f5748d-d7d4-4927-9bd5-14c86054b706)
- **Issue:** API rate limit reached on last run (Mar 21)
- **Status:** 1 consecutive error
- **Next run:** Friday Mar 28, 09:00
- **Action needed:** Monitor next run; may need to space out API calls or add delays

### 2. Ardmore Post-Draw Reconciliation (7d289f89-94b0-42c6-94a3-5a83b853c77d) 
- **Issue:** "Error: Outbound not configured for channel: telegram"
- **Status:** 1 consecutive error
- **Next run:** Friday Mar 28, 19:15
- **Action needed:** Fix delivery channel configuration or update to use "last" channel

## ⚠️ Delivery Warnings

### 1. Apollo Lead Gen
- **Issue:** Execution completed OK but delivery failed
- **Action:** Check message delivery config

### 2. SEO: Thursday Content  
- **Issue:** Execution completed OK but delivery failed
- **Action:** Check message delivery config

### 3. Ardmore Friday Draw
- **Issue:** Execution completed OK but delivery failed  
- **Action:** Check message delivery config

## Recommendations

1. **Fix telegram delivery config** — Multiple jobs showing "not-delivered" status despite successful execution
2. **Monitor SEO Friday job** — Watch for continued rate limiting issues  
3. **Update Ardmore reconciliation job** — Change delivery channel from "telegram" to "last"
4. **Review API rate limits** — Consider adding delays between API calls in complex jobs

All other crons are operating within normal parameters and schedules.