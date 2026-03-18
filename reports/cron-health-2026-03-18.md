# Cron Health Report — Tuesday 18 March 2026

**Generated:** 2026-03-18 09:00 GMT  
**Jobs Monitored:** 24 total

## Summary
| Health | Count | Status |
|--------|-------|---------|
| ✅ Healthy | 22 | Running on schedule, no issues |
| ⚠️ Warning | 0 | Last run was >2x interval ago |
| ❌ Failed | 0 | Last run failed or disabled |
| 🔄 Stale | 2 | No run in >7 days |

## Detailed Status
| Cron Name | Schedule | Last Run | Status | Next Run | Health |
|-----------|----------|----------|---------|----------|---------|
| **Morning Dashboard** | 0 7 * * * | 18 Mar 07:00 | ✅ OK | 19 Mar 07:00 | ✅ Healthy |
| **Security Scan & Fix** | 5 7 * * * | 18 Mar 07:05 | ✅ OK | 19 Mar 07:05 | ✅ Healthy |
| **AI Trend Scout** | 0 8 * * * | 18 Mar 08:00 | ✅ OK | 19 Mar 08:00 | ✅ Healthy |
| **api-key-health** | 10 8 * * * | 18 Mar 08:10 | ✅ OK | 19 Mar 08:10 | ✅ Healthy |
| **cron-watchdog** | 0 9 * * * | 18 Mar 09:00 | 🔄 RUNNING | 19 Mar 09:00 | ✅ Healthy |
| **SEO: Wednesday Attack** | 0 9 * * 3 | 12 Mar 09:00 | ✅ OK | 19 Mar 09:00 | ✅ Healthy |
| **SEO: Monday Audit** | 30 9 * * 1 | 17 Mar 09:30 | ✅ OK | 24 Mar 09:30 | ✅ Healthy |
| **SEO: Tuesday Fix** | 0 9 * * 2 | 18 Mar 09:00 | 🔄 RUNNING | 25 Mar 09:00 | ✅ Healthy |
| **Apollo Lead Gen** | 0 10 * * 1,3,5 | 17 Mar 10:00 | ✅ OK | 19 Mar 10:00 | ✅ Healthy |
| **ClawMart Sales Check** | 0 10 * * * | 17 Mar 10:00 | ✅ OK | 18 Mar 10:00 | ✅ Healthy |
| **Local Lead Scraper** | 0 10 * * 2,4 | 17 Mar 10:00 | ✅ OK | 20 Mar 10:00 | ✅ Healthy |
| **Moltbook Inbox Check** | 0 12 * * * | 17 Mar 12:00 | ✅ OK | 18 Mar 12:00 | ✅ Healthy |
| **moltbook-daily-engagement** | 0 13 * * * | 17 Mar 13:00 | ✅ OK | 18 Mar 13:00 | ✅ Healthy |
| **Google Ads Daily Optimisation** | 0 14 * * * | 17 Mar 14:00 | ✅ OK | 18 Mar 14:00 | ✅ Healthy |
| **AI Trend Scout (Afternoon)** | 30 14 * * * | 17 Mar 14:30 | ✅ OK | 18 Mar 14:30 | ✅ Healthy |
| **Google Ads Daily Report** | 0 17 * * * | 17 Mar 17:00 | ✅ OK | 18 Mar 17:00 | ✅ Healthy |
| **AI Trend Scout (Evening)** | 0 21 * * * | 17 Mar 21:00 | ✅ OK | 18 Mar 21:00 | ✅ Healthy |
| **Nightly Build** | 0 22 * * * | 17 Mar 22:00 | ✅ OK | 18 Mar 22:00 | ✅ Healthy |
| **Memory Distillation** | 30 22 * * * | 17 Mar 22:30 | ✅ OK | 18 Mar 22:30 | ✅ Healthy |
| **Weekly Money Scout** | 0 9 * * 0 | 16 Mar 09:00 | ✅ OK | 23 Mar 09:00 | ✅ Healthy |
| **Tender Tracker Weekly** | 0 9 * * 1 | 17 Mar 09:00 | ✅ OK | 24 Mar 09:00 | ✅ Healthy |
| **Ardmore Friday Draw** | 0 19 * * 5 | 14 Mar 19:00 | ✅ OK | 21 Mar 19:00 | ✅ Healthy |
| **SEO: Thursday Content** | 0 9 * * 4 | 11 Mar 09:00 | ✅ OK | ❌ No next run | 🔄 Stale |
| **SEO: Friday Monitor** | 0 9 * * 5 | 13 Mar 09:00 | ✅ OK | ❌ No next run | 🔄 Stale |

## Stale Jobs (2)
**🔄 SEO: Thursday Content**
- Last run: 11 March 09:00 (7 days ago)
- Status: Completed OK but no next run scheduled
- Issue: May be misconfigured or orphaned

**🔄 SEO: Friday Monitor** 
- Last run: 13 March 09:00 (5 days ago)
- Status: Completed OK but no next run scheduled  
- Issue: May be misconfigured or orphaned

## System Health
- ✅ **All 24 crons enabled and registered**
- ✅ **No execution failures in last 24h**
- ✅ **2 crons currently running on schedule** (cron-watchdog, SEO Tuesday Fix)
- ✅ **Delivery system working** (yesterday's runs delivered successfully)
- ⚠️ **2 weekly SEO crons appear stale** — need investigation

## Recent Delivery Issues (Resolved)
Previous issues with Telegram delivery failures have been resolved. All recent cron runs are being delivered successfully.

## Recommendations
1. **Investigate stale SEO crons** — check if Thursday Content and Friday Monitor schedules need repair
2. **Continue monitoring** — overall system health is excellent
3. **No immediate action required** — all critical daily operations running smoothly

---
**Next Watchdog:** 19 March 2026, 09:00 GMT