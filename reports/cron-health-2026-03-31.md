# Cron Health Report - 2026-03-31 09:00 GMT

| Cron Name | Schedule | Last Run | Status | Next Run | Health |
|-----------|----------|----------|--------|----------|---------|
| cron-watchdog | Daily 9:00 AM | 2026-03-30 09:02 | ✅ OK | 2026-03-31 09:00 | ✅ Healthy |
| SEO: Tuesday Fix | Tuesdays 9:00 AM | 2026-03-31 08:00 | ✅ OK | 2026-03-31 09:00 | ✅ Healthy |
| ClawMart Sales Check | Daily 10:00 AM | Never | - | 2026-03-31 10:00 | 🆕 New |
| ClawRoster Daily | Daily 11:00 AM | 2026-03-30 11:00 | ✅ OK | 2026-03-31 11:00 | ✅ Healthy |
| Moltbook Inbox Check | Daily 12:00 PM | 2026-03-30 12:00 | ✅ OK | 2026-03-31 12:00 | ✅ Healthy |
| moltbook-daily-engagement | Daily 1:00 PM | 2026-03-30 13:00 | ❌ ERROR | 2026-03-31 13:00 | ❌ Failed |
| Nightly Build | Daily 10:00 PM | 2026-03-30 22:00 | ✅ OK | 2026-03-31 22:00 | ✅ Healthy |
| Memory Distillation | Daily 10:30 PM | 2026-03-30 22:30 | ✅ OK | 2026-03-31 22:30 | ✅ Healthy |
| Morning Dashboard | Daily 7:00 AM | 2026-03-31 07:00 | ✅ OK | 2026-04-01 07:00 | ✅ Healthy |
| Security Scan & Fix | Daily 7:05 AM | 2026-03-31 07:05 | ✅ OK | 2026-04-01 07:05 | ✅ Healthy |
| api-key-health | Daily 8:10 AM | 2026-03-31 08:10 | ✅ OK | 2026-04-01 08:10 | ✅ Healthy |
| SEO: Wednesday Attack | Wednesdays 9:00 AM | 2026-03-26 09:01 | ✅ OK | 2026-04-02 09:00 | ✅ Healthy |
| SEO: Thursday Content | Thursdays 9:00 AM | 2026-03-27 09:00 | ✅ OK | 2026-04-03 09:00 | ✅ Healthy |
| SEO: Friday Monitor | Fridays 9:00 AM | 2026-03-28 09:00 | ❌ ERROR | 2026-04-04 09:00 | ❌ Failed |
| Ardmore Friday Draw | Fridays 7:00 PM | 2026-03-28 19:00 | ✅ OK | 2026-04-04 19:00 | ✅ Healthy |
| Ardmore Post-Draw Reconciliation | Fridays 7:15 PM | 2026-03-28 19:15 | ❌ ERROR | 2026-04-04 19:15 | ❌ Failed |
| Tender Tracker Weekly | Mondays 9:00 AM | 2026-03-31 08:59 | ✅ OK | 2026-04-07 09:00 | ✅ Healthy |
| SEO: Monday Audit | Mondays 9:30 AM | 2026-03-31 09:00 | ✅ OK | 2026-04-07 09:30 | ✅ Healthy |

## Summary
- ✅ **14 Healthy** — running on schedule, completed OK
- ⚠️ **0 Warning** — none running late
- ❌ **3 Failed** — last run failed
- 🆕 **1 New** — never run yet

## Failed Crons (Action Required)
1. **moltbook-daily-engagement**: Error "AI service temporarily overloaded" (rate limit)
2. **SEO: Friday Monitor**: Error "API rate limit reached" (rate limit) 
3. **Ardmore Post-Draw Reconciliation**: Error "Outbound not configured for channel: telegram"

## Actions Taken
- All failed crons are still enabled (no re-enabling needed)
- Rate limit errors are temporary — jobs will retry next scheduled run
- Ardmore reconciliation error is a delivery config issue, not core job failure

## Next Due
- ClawMart Sales Check: First run at 10:00 AM today
- ClawRoster Daily: 11:00 AM today
- Moltbook Inbox Check: 12:00 PM today (will likely succeed)