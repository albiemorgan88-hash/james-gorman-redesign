# Cron Health Report — 2026-03-11

| # | Cron Name | Schedule | Last Run | Status | Next Run | Health |
|---|-----------|----------|----------|--------|----------|--------|
| 1 | Morning Dashboard | Daily 07:00 | Today 07:00 | ok ✓ delivered | Tomorrow 07:00 | ✅ Healthy |
| 2 | Security Scan & Fix | Daily 07:05 | Today 07:05 | ok ✓ delivered | Tomorrow 07:05 | ✅ Healthy |
| 3 | AI Trend Scout | Daily 08:00 | Today 08:00 | ok ✓ delivered | Tomorrow 08:00 | ✅ Healthy |
| 4 | API Key Health | Daily 08:10 | Today 08:10 | ok ✓ delivered | Tomorrow 08:10 | ✅ Healthy |
| 5 | Cron Watchdog | Daily 09:00 | Yesterday 09:00 | ok ✓ delivered | Today 09:00 | ✅ Healthy |
| 6 | SEO: Wednesday Attack | Wed 09:00 | — (first run) | 🔄 Running now | — | 🆕 New |
| 7 | Lead Gen Pipeline | Mon/Wed/Fri 10:00 | Mon 07 Mar | ❌ Timeout (600s) | Today 10:00 | ❌ Failed |
| 8 | Moltbook Inbox Check | Daily 12:00 | Yesterday 12:00 | ok ✓ delivered | Today 12:00 | ✅ Healthy |
| 9 | Google Ads Optimisation | Daily 14:00 | Yesterday 14:00 | ok ⚠️ not delivered | Today 14:00 | ⚠️ Warning |
| 10 | Google Ads Daily Report | Daily 17:00 | Yesterday 17:00 | ok ✓ delivered | Today 17:00 | ✅ Healthy |
| 11 | Nightly Build | Daily 22:00 | Yesterday 22:00 | ok ✓ delivered | Today 22:00 | ✅ Healthy |
| 12 | Memory Distillation | Daily 22:30 | Yesterday 22:30 | ok ✓ delivered | Today 22:30 | ✅ Healthy |
| 13 | SEO: Monday Audit | Mon 09:00 | Mon 09 Mar | ok ✓ delivered | Mon 16 Mar | ✅ Healthy |
| 14 | SEO: Tuesday Fix | Tue 09:00 | Tue 10 Mar | ❌ Timeout (300s) | Tue 17 Mar | ❌ Failed |
| 15 | SEO: Thursday Content | Thu 09:00 | — (never run) | No runs recorded | Thu 12 Mar | 🆕 Awaiting first run |
| 16 | SEO: Friday Monitor | Fri 09:00 | Fri 06 Mar | ok ⚠️ not delivered | Fri 13 Mar | ⚠️ Warning |
| 17 | Ardmore Friday Draw | Fri 19:00 | Fri 06 Mar | ok ⚠️ not delivered | Fri 13 Mar | ⚠️ Warning |
| 18 | Weekly Money Scout | Sun 09:00 | Sun 08 Mar | ❌ Message failed | Sun 15 Mar | ❌ Failed |
| 19 | Tender Tracker Weekly | Mon 09:00 | Mon 09 Mar | ok ✓ delivered | Mon 16 Mar | ✅ Healthy |

## Summary

- ✅ **11 Healthy** — running on schedule, completing and delivering
- ⚠️ **3 Warning** — ran OK but delivery failed (Google Ads Optimisation, SEO Friday Monitor, Ardmore Friday Draw)
- ❌ **3 Failed** — errors in last run
- 🆕 **2 New** — awaiting first run (SEO Wed Attack running now, SEO Thu Content tomorrow)

## Failed Job Details

### Lead Gen Pipeline — ❌ Timeout
- **Error:** `cron: job execution timed out` after 600s
- **Cause:** 10min timeout too short for Apollo + local scraper pipeline
- **Action needed:** Consider increasing `timeoutSeconds` to 900 or splitting into two separate crons

### SEO: Tuesday Fix — ❌ Timeout
- **Error:** `cron: job execution timed out` after 300s
- **Cause:** 5min timeout too short for Webflow API fix operations
- **Action needed:** Increase `timeoutSeconds` to 600

### Weekly Money Scout — ❌ Message failed
- **Error:** `⚠️ ✉️ Message failed` — the job tried to use the message tool despite instructions not to
- **Action needed:** The agent ignored the "do not use message tool" instruction. May need prompt reinforcement or model change

## Delivery Issues (⚠️)

Three jobs completed OK but failed to deliver to Telegram:
- **Google Ads Daily Optimisation** — consistently not delivering
- **SEO: Friday Monitor** — not delivered last run
- **Ardmore Friday Draw** — not delivered last run

These might be hitting Telegram message length limits or delivery timing issues.

## No Action Taken

All failed jobs are still enabled and will retry on their next schedule. No re-enablement needed. Timeout issues require config changes by PJ.
