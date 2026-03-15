# Cron Health Report — 2026-03-15

Summary: 19 healthy, 0 warning, 4 failed, 0 stale

| Cron Name | Schedule | Last Run | Status | Next Run | Health |
|---|---|---:|---|---:|---|
| Weekly Money Scout (X + Moltbook) | `0 9 * * 0` | 2026-03-08 09:00 | error | 2026-03-15 09:00 | ❌ Failed |
| cron-watchdog | `0 9 * * *` | 2026-03-14 09:00 | error | 2026-03-15 09:00 | ❌ Failed |
| Moltbook Inbox Check | `0 12 * * *` | 2026-03-14 12:00 | ok | 2026-03-15 12:00 | ✅ Healthy |
| moltbook-daily-engagement | `0 13 * * *` | 2026-03-14 13:00 | ok | 2026-03-15 13:00 | ✅ Healthy |
| AI Trend Scout (Afternoon) | `0 14 * * *` | 2026-03-14 14:02 | ok | 2026-03-15 14:00 | ✅ Healthy |
| Google Ads Daily Optimisation | `0 14 * * *` | 2026-03-14 14:00 | ok | 2026-03-15 14:00 | ✅ Healthy |
| Google Ads Daily Report | `0 17 * * *` | 2026-03-14 17:00 | ok | 2026-03-15 17:00 | ✅ Healthy |
| AI Trend Scout (Evening) | `0 21 * * *` | 2026-03-14 21:00 | ok | 2026-03-15 21:00 | ✅ Healthy |
| Nightly Build | `0 22 * * *` | 2026-03-14 22:00 | ok | 2026-03-15 22:00 | ✅ Healthy |
| Memory Distillation | `30 22 * * *` | 2026-03-14 22:30 | ok | 2026-03-15 22:30 | ✅ Healthy |
| Morning Dashboard | `0 7 * * *` | 2026-03-15 07:00 | ok | 2026-03-16 07:00 | ✅ Healthy |
| Security Scan & Fix | `5 7 * * *` | 2026-03-15 07:05 | ok | 2026-03-16 07:05 | ✅ Healthy |
| AI Trend Scout | `0 8 * * *` | 2026-03-15 08:00 | ok | 2026-03-16 08:00 | ✅ Healthy |
| api-key-health | `10 8 * * *` | 2026-03-15 08:10 | ok | 2026-03-16 08:10 | ✅ Healthy |
| Tender Tracker Weekly | `0 9 * * 1` | 2026-03-09 09:05 | ok | 2026-03-16 09:00 | ✅ Healthy |
| SEO: Monday Audit | `0 9 * * 1` | 2026-03-09 09:00 | ok | 2026-03-16 09:00 | ✅ Healthy |
| Apollo Lead Gen | `0 10 * * 1,3,5` | 2026-03-13 10:00 | ok | 2026-03-16 10:00 | ✅ Healthy |
| SEO: Tuesday Fix | `0 9 * * 2` | 2026-03-10 09:00 | error | 2026-03-17 09:00 | ❌ Failed |
| Local Lead Scraper | `0 10 * * 2,4` | 2026-03-12 10:00 | ok | 2026-03-17 10:00 | ✅ Healthy |
| SEO: Wednesday Attack | `0 9 * * 3` | 2026-03-11 09:00 | error | 2026-03-18 09:00 | ❌ Failed |
| SEO: Thursday Content | `0 9 * * 4` | 2026-03-12 09:00 | ok | 2026-03-19 09:00 | ✅ Healthy |
| SEO: Friday Monitor | `0 9 * * 5` | 2026-03-13 09:00 | ok | 2026-03-20 09:00 | ✅ Healthy |
| Ardmore Friday Draw | `0 19 * * 5` | 2026-03-13 19:00 | ok | 2026-03-20 19:00 | ✅ Healthy |

Notes:
- No disabled jobs found, so no re-enable action was needed.
- No cron failures were found strictly within the last 24h.
- Failed details from run history:
  - Weekly Money Scout — 2026-03-08 09:00 — delivery error: `⚠️ ✉️ Message failed`
  - cron-watchdog — 2026-03-14 09:00 — timeout: `cron: job execution timed out`
  - SEO: Tuesday Fix — 2026-03-10 09:00 — timeout: `cron: job execution timed out`
  - SEO: Wednesday Attack — 2026-03-11 09:00 — timeout: `cron: job execution timed out`
