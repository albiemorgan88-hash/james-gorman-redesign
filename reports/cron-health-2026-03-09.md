# Cron Health Report — Mon 9 Mar 2026, 09:04

## Summary: 10 ✅ | 5 ⚠️ | 1 ❌ | 4 🔄

| Cron Name | Schedule | Last Run | Status | Next Run | Health |
|---|---|---|---|---|---|
| Morning Dashboard | Daily 07:00 | 2h ago | ok | in 22h | ✅ Healthy |
| Security Scan & Fix | Daily 07:05 | 2h ago | ok | in 22h | ✅ Healthy |
| AI Trend Scout | Daily 08:00 | 1h ago | ok | in 23h | ✅ Healthy |
| api-key-health | Daily 08:10 | 55m ago | ok | in 23h | ✅ Healthy |
| Moltbook Inbox Check | Daily 12:00 | 20h ago | ok | in 3h | ✅ Healthy |
| Google Ads Daily Optimizer | Daily 14:00 | 19h ago | ok | in 5h | ✅ Healthy |
| Google Ads Daily Report | Daily 17:00 | 16h ago | ok | in 8h | ✅ Healthy |
| Nightly Build | Daily 22:00 | 11h ago | ok | in 13h | ✅ Healthy |
| Memory Distillation | Daily 22:30 | 11h ago | ok | in 13h | ✅ Healthy |
| SEO: Friday Monitor | Fri 09:00 | 3d ago | ok | in 4d | ✅ Healthy |
| Ardmore Friday Draw | Fri 19:00 | 3d ago | ok | in 4d | ✅ Healthy |
| cron-watchdog | Daily 09:00 | — | running | — | ⚠️ Running now |
| Tender Tracker Weekly | Mon 09:00 | — | running | — | ⚠️ First run (executing now) |
| SEO: Monday Audit | Mon 09:00 | — | running | — | ⚠️ First run (executing now) |
| Lead Gen Pipeline | Mon/Wed/Fri 10:00 | — | idle | in 55m | ⚠️ No run history yet |
| Weekly Money Scout | Sun 09:00 | 1d ago | error | in 6d | ❌ Failed |
| SEO: Tuesday Fix | Tue 09:00 | — | idle | in 24h | 🔄 No run history |
| SEO: Wednesday Attack | Wed 09:00 | — | idle | in 2d | 🔄 No run history |
| SEO: Thursday Content | Thu 09:00 | — | idle | in 3d | 🔄 No run history |

## ❌ Failed: Weekly Money Scout
- **Error:** Message delivery failed (`⚠️ ✉️ Message failed`)
- **Pattern:** 2 out of 3 runs have had delivery failures (22 Feb & 8 Mar). The cron itself runs fine — it generates a full report — but the message can't be delivered to Telegram.
- **Root cause:** Likely the report exceeds Telegram's 4096-char message limit. The summary field is very long (~3000+ chars).
- **Fix needed:** The cron prompt should be updated to enforce a shorter output, or the delivery system needs message splitting. This is a recurring issue — not a one-off.

## 🔄 Stale: SEO Tue/Wed/Thu
- These three SEO crons have **never run**. They may be newly registered (awaiting their first scheduled day) or could be orphaned.
- If they were created this week, they'll fire on their respective days. If they've been registered for 2+ weeks with no history, they should be investigated.

## Notes
- 10 daily crons all running cleanly on schedule — solid.
- Tender Tracker & SEO Monday are executing right now (first runs).
- Lead Gen Pipeline fires at 10:00 today — first run pending.
