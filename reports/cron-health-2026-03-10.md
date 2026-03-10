# Cron Health Report — 2026-03-10

## Summary: 14 ✅ Healthy | 1 ⚠️ Warning | 2 ❌ Failed | 2 🔄 Idle (no runs yet)

| Cron Name | Schedule | Last Run | Status | Next Run | Health |
|---|---|---|---|---|---|
| Morning Dashboard | Daily 07:00 | 2h ago | ok ✅ | in 22h | ✅ Healthy |
| Security Scan & Fix | Daily 07:05 | 2h ago | ok ✅ | in 22h | ✅ Healthy |
| AI Trend Scout | Daily 08:00 | 1h ago | ok ✅ | in 23h | ✅ Healthy |
| API Key Health | Daily 08:10 | 55m ago | ok ✅ | in 23h | ✅ Healthy |
| SEO: Monday Audit | Mon 09:00 | 1d ago | ok ✅ | in 6d | ✅ Healthy |
| SEO: Tuesday Fix | Tue 09:00 | — | running 🔄 | now | ✅ Running |
| Cron Watchdog | Daily 09:00 | 1d ago | ok ✅ | now | ✅ Healthy |
| Moltbook Inbox | Daily 12:00 | 21h ago | ok ✅ | in 3h | ✅ Healthy |
| Google Ads Optimise | Daily 14:00 | 19h ago | ok ✅ | in 5h | ✅ Healthy |
| Google Ads Report | Daily 17:00 | 16h ago | ok ✅ | in 8h | ✅ Healthy |
| Nightly Build | Daily 22:00 | 11h ago | ok ✅ | in 13h | ✅ Healthy |
| Memory Distillation | Daily 22:30 | 11h ago | ok ✅ | in 13h | ✅ Healthy |
| Tender Tracker | Mon 09:00 | 24h ago | ok ✅ | in 6d | ✅ Healthy |
| SEO: Friday Monitor | Fri 09:00 | 4d ago | ok ✅ | in 3d | ✅ Healthy |
| Ardmore Friday Draw | Fri 19:00 | 4d ago | ok ✅ | in 3d | ✅ Healthy |
| **Lead Gen Pipeline** | **MWF 10:00** | **1d ago** | **error** | **in 1d** | **❌ Failed — timeout (600s)** |
| **Weekly Money Scout** | **Sun 09:00** | **2d ago** | **error** | **in 5d** | **❌ Failed — message delivery error** |
| SEO: Wednesday Attack | Wed 09:00 | — | idle | in 24h | 🔄 Idle (never run) |
| SEO: Thursday Content | Thu 09:00 | — | idle | in 2d | 🔄 Idle (never run) |

## ❌ Failed Jobs — Details

### 1. Lead Gen Pipeline (Apollo + Local Scrape)
- **Error:** `job execution timed out` after 600s
- **Consecutive errors:** 1
- **Still enabled:** Yes
- **Action:** Timeout is likely too short for scraping Google Maps + Apollo across multiple towns. Recommend increasing timeout to 900s.

### 2. Weekly Money Scout (X + Moltbook)
- **Error:** `⚠️ ✉️ Message failed` — the job itself tried to use the message tool
- **Consecutive errors:** 1
- **Still enabled:** Yes
- **Action:** The job payload already says "do NOT use message tool" but the agent ignored it. No config fix needed — it should work next run if the agent follows instructions.

## 🔄 Idle Jobs (never run)
- **SEO: Wednesday Attack** — first run tomorrow (Wed), normal
- **SEO: Thursday Content** — first run Thu, normal

## ⚠️ Delivery Notes
- Google Ads Optimise & Report: `lastDelivered: false` — jobs completed OK but delivery didn't land. Worth monitoring.
- SEO: Friday Monitor & Ardmore Draw: same delivery issue. May be a transient Telegram delivery problem.

## Recommendations
1. Increase Lead Gen Pipeline timeout from 600s → 900s
2. Monitor Telegram delivery failures — 4 jobs not delivering despite OK status
