# Daily Cron Health Report — 22 March 2026

## Summary
- ✅ **24 Healthy** — running on schedule
- ❌ **1 Failed** — SEO Thursday Content (timeout)
- ⚠️ **0 Warnings** 
- 🔄 **0 Stale**

**Action Taken:** Manually triggered the failed SEO cron for immediate retry.

## Cron Status Detail

| Cron Name | Schedule | Last Run | Status | Next Run | Health |
|-----------|----------|----------|--------|----------|---------|
| Weekly Money Scout | Sun 9am | 7d ago | running | 3m ago | ✅ |
| cron-watchdog | Daily 9am | 1d ago | running | 3m ago | ✅ |
| ClawMart Sales Check | Daily 10am | 23h ago | ok | 57m | ✅ |
| Moltbook Inbox Check | Daily 12pm | 21h ago | ok | 3h | ✅ |
| moltbook-daily-engage | Daily 1pm | 20h ago | ok | 4h | ✅ |
| Google Ads Daily Opt | Daily 2pm | 19h ago | ok | 5h | ✅ |
| AI Trend Scout (After) | Daily 2:30pm | 19h ago | ok | 5h | ✅ |
| Google Ads Daily Report | Daily 5pm | 16h ago | ok | 8h | ✅ |
| AI Trend Scout (Evening) | Daily 9pm | 12h ago | ok | 12h | ✅ |
| Nightly Build | Daily 10pm | 11h ago | ok | 13h | ✅ |
| Memory Distillation | Daily 10:30pm | 11h ago | ok | 13h | ✅ |
| Morning Dashboard | Daily 7am | 2h ago | ok | 22h | ✅ |
| Security Scan & Fix | Daily 7:05am | 2h ago | ok | 22h | ✅ |
| AI Trend Scout | Daily 8am | 1h ago | ok | 23h | ✅ |
| api-key-health | Daily 8:10am | 53m ago | ok | 23h | ✅ |
| Tender Tracker Weekly | Mon 9am | 6d ago | ok | 24h | ✅ |
| SEO: Monday Audit | Mon 9:30am | 6d ago | ok | 1d | ✅ |
| Apollo Lead Gen | MWF 10am | 2d ago | ok | 1d | ✅ |
| SEO: Tuesday Fix | Tue 9am | 5d ago | ok | 2d | ✅ |
| Local Lead Scraper | TuTh 10am | 3d ago | ok | 2d | ✅ |
| SEO: Wednesday Attack | Wed 9am | 4d ago | ok | 3d | ✅ |
| **SEO: Thursday Content** | **Thu 9am** | **3d ago** | **error** | **4d** | **❌** |
| SEO: Friday Monitor | Fri 9am | 2d ago | ok | 5d | ✅ |
| Ardmore Friday Draw | Fri 7pm | 2d ago | ok | 5d | ✅ |
| Ardmore Post-Draw Recap | Fri 7:15pm | - | idle | 5d | ✅ |

## Failed Cron Details

**SEO: Thursday Content** (`d84acb29-73e3-45d8-b6c0-05c342db9429`)
- **Error:** Job execution timed out (300s limit)  
- **Last Success:** Thursday 13 Mar (completed in 172s)
- **Failure Date:** Thursday 20 Mar (timed out after 300s)
- **Manual Retry:** Triggered at 09:03 today

The SEO content job appears to be hitting its 5-minute timeout limit. Previous successful runs completed in ~3 minutes, but something caused it to hang on 20 Mar.

## Recommendations
1. Monitor the manual retry triggered this morning
2. Consider increasing timeout for SEO content jobs (currently 300s)
3. All other crons healthy — no immediate intervention needed