# Cron Health Report - 2026-04-18

Generated: 2026-04-18 09:05 BST

| Cron Name | Schedule | Last Run | Status | Next Run | Health |
| --- | --- | --- | --- | --- | --- |
| ClawMart Sales Check | cron 0 10 * * * @ Europe/London | 2026-04-17 22:16 BST | ok | 2026-04-18 10:00 BST | ✅ Healthy |
| ClawRoster Daily | cron 0 11 * * * | 2026-04-17 11:00 BST | ok | 2026-04-18 11:00 BST | ✅ Healthy |
| Moltbook Inbox Check | cron 0 12 * * * @ Europe/London | 2026-04-17 12:00 BST | ok | 2026-04-18 12:00 BST | ✅ Healthy |
| moltbook-daily-engagement | cron 0 13 * * * @ Europe/London | 2026-04-17 13:00 BST | ok | 2026-04-18 13:00 BST | ✅ Healthy |
| Nightly Build | cron 0 22 * * * @ Europe/London | 2026-04-17 22:00 BST | ok | 2026-04-18 22:00 BST | ✅ Healthy |
| Memory Distillation | cron 30 22 * * * @ Europe/London | 2026-04-17 22:30 BST | ok | 2026-04-18 22:30 BST | ✅ Healthy |
| Morning Dashboard | cron 0 7 * * * @ Europe/London | 2026-04-18 07:00 BST | ok | 2026-04-19 07:00 BST | ✅ Healthy |
| Security Scan & Fix | cron 5 7 * * * | 2026-04-18 07:09 BST | ok | 2026-04-19 07:05 BST | ✅ Healthy |
| api-key-health | cron 10 8 * * * | 2026-04-18 08:10 BST | ok | 2026-04-19 08:10 BST | ✅ Healthy |
| cron-watchdog | cron 0 9 * * * @ Europe/London | 2026-04-18 09:00 BST | ok | 2026-04-19 09:00 BST | ✅ Healthy |
| Tender Tracker Weekly | cron 0 9 * * 1 @ Europe/London | 2026-04-13 09:00 BST | error | 2026-04-20 09:00 BST | ❌ Failed |
| SEO: Monday Audit | cron 30 9 * * 1 @ Europe/London | 2026-04-13 09:30 BST | error | 2026-04-20 09:30 BST | ❌ Failed |
| SEO: Tuesday Fix | cron 0 9 * * 2 @ Europe/London | 2026-04-14 09:02 BST | ok | 2026-04-21 09:00 BST | ✅ Healthy |
| SEO: Wednesday Attack | cron 0 9 * * 3 @ Europe/London | 2026-04-15 09:02 BST | ok | 2026-04-22 09:00 BST | ✅ Healthy |
| SEO: Thursday Content | cron 0 9 * * 4 @ Europe/London | 2026-04-16 09:00 BST | error | 2026-04-23 09:00 BST | ❌ Failed |
| SEO: Friday Monitor | cron 0 9 * * 5 @ Europe/London | 2026-04-17 09:55 BST | error | 2026-04-24 09:00 BST | ❌ Failed |
| Ardmore Friday Draw | cron 0 19 * * 5 @ Europe/London | 2026-04-17 19:00 BST | ok | 2026-04-24 19:00 BST | ✅ Healthy |
| Ardmore Post-Draw Reconciliation | cron 15 19 * * 5 | 2026-04-17 19:15 BST | ok | 2026-04-24 19:15 BST | ✅ Healthy |

Summary: 14 healthy, 0 warning, 4 failed, 0 stale

## Failed crons
- Tender Tracker Weekly: last run 2026-04-13 09:00 BST, status=error. Error: ⚠️ You have hit your ChatGPT usage limit (plus plan). Try again in ~5100 min.
- SEO: Monday Audit: last run 2026-04-13 09:30 BST, status=error. Error: ⚠️ You have hit your ChatGPT usage limit (plus plan). Try again in ~5070 min.
- SEO: Thursday Content: last run 2026-04-16 09:00 BST, status=error. Error: cron: job execution timed out
- SEO: Friday Monitor: last run 2026-04-17 09:55 BST, status=error. Error: cron: job execution timed out

## Failures in last 24h
- cron-watchdog: 2026-04-17 10:05 BST. Error: cron: job execution timed out
- SEO: Friday Monitor: 2026-04-17 09:55 BST. Error: cron: job execution timed out

## Remediation
- Checked with `openclaw cron list --all --json`. No crons were disabled, so no re-enable action was needed.
