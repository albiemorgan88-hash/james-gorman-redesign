# Cron Health Report — 2026-03-12

| # | Cron Name | Schedule | Last Run | Status | Next Run | Health |
|---|-----------|----------|----------|--------|----------|--------|
| 1 | Morning Dashboard | Daily 7am | 12 Mar 07:00 | OK ✓ | 13 Mar 07:00 | ✅ Healthy |
| 2 | Security Scan & Fix | Daily 7:05am | 12 Mar 07:05 | TIMEOUT | 13 Mar 07:05 | ❌ Failed |
| 3 | AI Trend Scout (AM) | Daily 8am | 12 Mar 08:00 | OK ✓ | 13 Mar 08:00 | ✅ Healthy |
| 4 | API Key Health | Daily 8:10am | 12 Mar 08:10 | OK ✓ | 13 Mar 08:10 | ✅ Healthy |
| 5 | Cron Watchdog | Daily 9am | 11 Mar 09:05 | OK ✓ | Running now | ✅ Healthy |
| 6 | SEO: Thursday Content | Thu 9am | Never (new?) | — | Running now | ⚠️ First run |
| 7 | Moltbook Inbox Check | Daily 12pm | 11 Mar 12:00 | OK ✓ | 12 Mar 12:00 | ✅ Healthy |
| 8 | AI Trend Scout (PM) | Daily 2pm | 11 Mar 14:00 | OK ✓ | 12 Mar 14:00 | ✅ Healthy |
| 9 | Google Ads Optimisation | Daily 2pm | 11 Mar 14:00 | OK (not delivered) | 12 Mar 14:00 | ⚠️ Delivery |
| 10 | Google Ads Report | Daily 5pm | 11 Mar 17:00 | OK ✓ | 12 Mar 17:00 | ✅ Healthy |
| 11 | AI Trend Scout (Eve) | Daily 9pm | 11 Mar 21:00 | OK ✓ | 12 Mar 21:00 | ✅ Healthy |
| 12 | Nightly Build | Daily 10pm | 11 Mar 22:00 | OK ✓ | 12 Mar 22:00 | ✅ Healthy |
| 13 | Memory Distillation | Daily 10:30pm | 11 Mar 22:30 | OK ✓ | 12 Mar 22:30 | ✅ Healthy |
| 14 | SEO: Monday Audit | Mon 9am | 9 Mar 09:00 | OK ✓ | 16 Mar 09:00 | ✅ Healthy |
| 15 | SEO: Tuesday Fix | Tue 9am | 11 Mar 09:00 | TIMEOUT (5min) | 17 Mar 09:00 | ❌ Failed |
| 16 | SEO: Wednesday Attack | Wed 9am | 11 Mar 09:00 | TIMEOUT (5min) | 18 Mar 09:00 | ❌ Failed |
| 17 | SEO: Friday Monitor | Fri 9am | 6 Mar 09:00 | OK (not delivered) | 13 Mar 09:00 | ⚠️ Delivery |
| 18 | Lead Gen Pipeline | Mon/Wed/Fri 10am | 11 Mar 10:00 | TIMEOUT (15min) ×3 | 12 Mar 10:00 | ❌ Failed |
| 19 | Ardmore Friday Draw | Fri 7pm | 7 Mar 19:00 | OK (not delivered) | 13 Mar 19:00 | ⚠️ Delivery |
| 20 | Weekly Money Scout | Sun 9am | 9 Mar 09:00 | ERROR (msg fail) | 15 Mar 09:00 | ❌ Failed |
| 21 | Tender Tracker Weekly | Mon 9am | 9 Mar 09:00 | OK ✓ | 16 Mar 09:00 | ✅ Healthy |

## Summary
- ✅ **12 Healthy**
- ⚠️ **4 Warning** (3 delivery issues + 1 first run)
- ❌ **5 Failed**
- 🔄 **0 Stale**

## Failed Cron Details

**Security Scan & Fix** — Timed out at 120s limit. Consecutive errors: 1. Likely too much work for 2min timeout. **Recommend: increase timeout to 300s.**

**SEO: Tuesday Fix** — Timed out at 300s (5min). The Webflow API + fix cycle exceeds timeout. Consecutive errors: 1. **Recommend: increase timeout to 600s.**

**SEO: Wednesday Attack** — Timed out at 600s (10min). Ahrefs browser automation likely slow. Consecutive errors: 1. **Recommend: increase timeout to 900s or simplify task.**

**Lead Gen Pipeline** — 3 consecutive timeouts at 900s (15min). Apollo + local scraper combo is too heavy. **This is the most broken cron — needs restructuring.** Recommend splitting into two separate crons.

**Weekly Money Scout** — Error: "Message failed". The job itself may have tried to use message tool despite instructions. Consecutive errors: 1. Should self-correct next run.

## Delivery Warnings

Three crons ran OK but delivery failed (not-delivered): Google Ads Optimisation, SEO Friday Monitor, Ardmore Friday Draw. Likely transient Telegram issues — monitor next runs.
