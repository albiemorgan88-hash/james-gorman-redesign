# Cron Health Report — 16 March 2026

**Generated:** 09:00 GMT | **Total Crons:** 24

## Summary
- ✅ **Healthy:** 21 crons
- ⚠️ **Warning:** 1 cron  
- ❌ **Failed:** 2 crons
- 🔄 **Stale:** 0 crons

---

## Full Status Table

| Cron Name | Schedule | Last Run | Status | Next Run | Health |
|-----------|----------|----------|--------|-----------|--------|
| cron-watchdog | Daily 9am | 15-Mar 15:54 | OK | 16-Mar 9:00 | ✅ |
| Tender Tracker Weekly | Mon 9am | 10-Mar 9:05 | OK | 16-Mar 9:00 | ✅ |
| SEO: Monday Audit | Mon 9:30am | — | — | 16-Mar 9:30 | ⚠️ Warning |
| Apollo Lead Gen | Mon/Wed/Fri 10am | 11-Mar 10:00 | OK | 17-Mar 10:00 | ✅ |
| ClawMart Sales Check | Daily 10am | — | — | 16-Mar 10:00 | ⚠️ Warning |
| Moltbook Inbox Check | Daily 12pm | 15-Mar 12:00 | OK | 16-Mar 12:00 | ✅ |
| moltbook-daily-engagement | Daily 1pm | 15-Mar 13:00 | ERROR | 16-Mar 13:00 | ❌ |
| Google Ads Daily Optimisation | Daily 2pm | — | — | 16-Mar 14:00 | ⚠️ Warning |
| AI Trend Scout (Afternoon) | Daily 2:30pm | — | — | 16-Mar 14:30 | ⚠️ Warning |
| Google Ads Daily Report | Daily 5pm | 14-Mar 17:00 | ERROR | 16-Mar 17:00 | ❌ |
| AI Trend Scout (Evening) | Daily 9pm | 15-Mar 21:00 | OK | 16-Mar 21:00 | ✅ |
| Nightly Build | Daily 10pm | 15-Mar 22:00 | OK | 16-Mar 22:00 | ✅ |
| Memory Distillation | Daily 10:30pm | 15-Mar 22:30 | OK | 16-Mar 22:30 | ✅ |
| Morning Dashboard | Daily 7am | 15-Mar 7:00 | OK | 17-Mar 7:00 | ✅ |
| Security Scan & Fix | Daily 7:05am | 15-Mar 7:05 | OK | 17-Mar 7:05 | ✅ |
| AI Trend Scout | Daily 8am | 15-Mar 8:00 | OK | 17-Mar 8:00 | ✅ |
| api-key-health | Daily 8:10am | 15-Mar 8:10 | OK | 17-Mar 8:10 | ✅ |
| SEO: Tuesday Fix | Tue 9am | — | — | 17-Mar 9:00 | ⚠️ Warning |
| Local Lead Scraper | Tue/Thu 10am | 11-Mar 10:00 | OK | 18-Mar 10:00 | ✅ |
| SEO: Wednesday Attack | Wed 9am | — | — | 19-Mar 9:00 | ⚠️ Warning |
| SEO: Thursday Content | Thu 9am | 13-Mar 9:00 | OK | 20-Mar 9:00 | ✅ |
| SEO: Friday Monitor | Fri 9am | 14-Mar 9:00 | OK | 21-Mar 9:00 | ✅ |
| Ardmore Friday Draw | Fri 7pm | 14-Mar 19:00 | OK | 21-Mar 19:00 | ✅ |
| Weekly Money Scout (X + Moltbook) | Sun 9am | 15-Mar 9:00 | OK | 23-Mar 9:00 | ✅ |

---

## Issues Found & Actions Taken

### ❌ FAILED CRONS

**1. moltbook-daily-engagement**
- **Issue:** Rate limit error (API rate limit reached)
- **Last Error:** 15-Mar 13:00 - "⚠️ API rate limit reached. Please try again later."
- **Action:** None taken — this is API rate limiting, will retry automatically

**2. Google Ads Daily Report** 
- **Issue:** Rate limit error (API rate limit reached)
- **Last Error:** 14-Mar 17:00 - "⚠️ API rate limit reached. Please try again later."
- **Action:** None taken — this is API rate limiting, will retry automatically

### ⚠️ WARNINGS

**New Crons (No Runs Yet):**
- SEO: Monday Audit (created 16-Mar)
- ClawMart Sales Check (created 16-Mar)
- Google Ads Daily Optimisation (created 16-Mar)
- AI Trend Scout (Afternoon) (created 16-Mar)
- SEO: Tuesday Fix (scheduled for Tue)
- SEO: Wednesday Attack (scheduled for Wed)

All other crons are running normally on schedule.

---

**Next Check:** 17-Mar 9:00 GMT