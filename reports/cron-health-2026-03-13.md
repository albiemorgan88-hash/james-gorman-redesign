# Cron Health Report — 2026-03-13

Summary: 20 healthy, 0 warning, 3 failed, 0 stale

Notes:
- Checked cron registry plus recent run history for failed jobs.
- No cron failures were found in the last 24 hours.
- No disabled jobs found, so no re-enable action was needed.

| Cron Name | Schedule | Last Run | Status | Next Run | Health |
|---|---|---:|---|---:|---|
| cron-watchdog | `0 9 * * *` Europe/London | 1d ago | running | due now | ✅ Healthy |
| SEO: Friday Monitor | `0 9 * * 5` Europe/London | 7d ago | running | due now | ✅ Healthy |
| Apollo Lead Gen | `0 10 * * 1,3,5` Europe/London | never | idle | in 51m | ✅ Healthy |
| Moltbook Inbox Check | `0 12 * * *` Europe/London | 21h ago | ok | in 3h | ✅ Healthy |
| moltbook-daily-engagement | `0 13 * * *` Europe/London | 20h ago | ok | in 4h | ✅ Healthy |
| AI Trend Scout (Afternoon) | `0 14 * * *` Europe/London | 19h ago | ok | in 5h | ✅ Healthy |
| Google Ads Daily Optimisation | `0 14 * * *` Europe/London | 19h ago | ok | in 5h | ✅ Healthy |
| Google Ads Daily Report | `0 17 * * *` Europe/London | 16h ago | ok | in 8h | ✅ Healthy |
| Ardmore Friday Draw | `0 19 * * 5` Europe/London | 7d ago | ok | in 10h | ✅ Healthy |
| AI Trend Scout (Evening) | `0 21 * * *` Europe/London | 12h ago | ok | in 12h | ✅ Healthy |
| Nightly Build | `0 22 * * *` Europe/London | 11h ago | ok | in 13h | ✅ Healthy |
| Memory Distillation | `30 22 * * *` Europe/London | 11h ago | ok | in 13h | ✅ Healthy |
| Morning Dashboard | `0 7 * * *` Europe/London | 2h ago | ok | in 22h | ✅ Healthy |
| Security Scan & Fix | `5 7 * * *` | 2h ago | ok | in 22h | ✅ Healthy |
| AI Trend Scout | `0 8 * * *` Europe/London | 1h ago | ok | in 23h | ✅ Healthy |
| api-key-health | `10 8 * * *` | 59m ago | ok | in 23h | ✅ Healthy |
| Weekly Money Scout (X + Moltbook) | `0 9 * * 0` Europe/London | 5d ago | error | in 2d | ❌ Failed |
| Tender Tracker Weekly | `0 9 * * 1` Europe/London | 4d ago | ok | in 3d | ✅ Healthy |
| SEO: Monday Audit | `0 9 * * 1` Europe/London | 4d ago | ok | in 3d | ✅ Healthy |
| SEO: Tuesday Fix | `0 9 * * 2` Europe/London | 3d ago | error | in 4d | ❌ Failed |
| Local Lead Scraper | `0 10 * * 2,4` Europe/London | 23h ago | ok | in 4d | ✅ Healthy |
| SEO: Wednesday Attack | `0 9 * * 3` Europe/London | 2d ago | error | in 5d | ❌ Failed |
| SEO: Thursday Content | `0 9 * * 4` Europe/London | 1d ago | ok | in 6d | ✅ Healthy |

## Failed job details

- **Weekly Money Scout (X + Moltbook)** — failed 5d ago. Error: `⚠️ ✉️ Message failed` / delivery `not-delivered`. Job is still enabled; no re-enable needed.
- **SEO: Tuesday Fix** — failed 3d ago. Error: `cron: job execution timed out`. Job is still enabled; no re-enable needed.
- **SEO: Wednesday Attack** — failed 2d ago. Error: `cron: job execution timed out`. Job is still enabled; no re-enable needed.
