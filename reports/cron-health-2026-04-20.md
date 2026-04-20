# Cron Health Report - 2026-04-20

Generated at: 2026-04-20 09:00 BST

## Summary
- 10 healthy
- 0 warning
- 8 failed
- 0 stale

## Cron Status
| Cron Name | Schedule | Last Run | Status | Next Run | Health |
| --- | --- | --- | --- | --- | --- |
| cron-watchdog | `0 9 * * *` @ Europe/London | 2026-04-19 09:00 BST | running | 2026-04-21 09:00 BST | ❌ Failed (24h fail) |
| Tender Tracker Weekly | `0 9 * * 1` @ Europe/London | 2026-04-13 09:00 BST | running | 2026-04-27 09:00 BST | ❌ Failed |
| SEO: Monday Audit | `30 9 * * 1` @ Europe/London | 2026-04-13 09:30 BST | error | 2026-04-20 09:30 BST | ❌ Failed |
| ClawMart Sales Check | `0 10 * * *` @ Europe/London | 2026-04-19 10:00 BST | ok | 2026-04-20 10:00 BST | ✅ Healthy |
| ClawRoster Daily | `0 11 * * *` | 2026-04-19 11:00 BST | error | 2026-04-20 11:00 BST | ❌ Failed (24h fail) |
| Moltbook Inbox Check | `0 12 * * *` @ Europe/London | 2026-04-19 12:00 BST | ok | 2026-04-20 12:00 BST | ✅ Healthy |
| moltbook-daily-engagement | `0 13 * * *` @ Europe/London | 2026-04-19 13:00 BST | error | 2026-04-20 13:00 BST | ❌ Failed (24h fail) |
| Nightly Build | `0 22 * * *` @ Europe/London | 2026-04-19 22:00 BST | ok | 2026-04-20 22:00 BST | ✅ Healthy |
| Memory Distillation | `30 22 * * *` @ Europe/London | 2026-04-19 22:30 BST | ok | 2026-04-20 22:30 BST | ✅ Healthy |
| Morning Dashboard | `0 7 * * *` @ Europe/London | 2026-04-20 07:05 BST | ok | 2026-04-21 07:00 BST | ✅ Healthy |
| Security Scan & Fix | `5 7 * * *` | 2026-04-20 07:22 BST | error | 2026-04-21 07:05 BST | ❌ Failed (24h fail) |
| api-key-health | `10 8 * * *` | 2026-04-20 08:10 BST | ok | 2026-04-21 08:10 BST | ✅ Healthy |
| SEO: Tuesday Fix | `0 9 * * 2` @ Europe/London | 2026-04-14 09:02 BST | ok | 2026-04-21 09:00 BST | ✅ Healthy |
| SEO: Wednesday Attack | `0 9 * * 3` @ Europe/London | 2026-04-15 09:02 BST | ok | 2026-04-22 09:00 BST | ✅ Healthy |
| SEO: Thursday Content | `0 9 * * 4` @ Europe/London | 2026-04-16 09:00 BST | error | 2026-04-23 09:00 BST | ❌ Failed |
| SEO: Friday Monitor | `0 9 * * 5` @ Europe/London | 2026-04-17 09:55 BST | error | 2026-04-24 09:00 BST | ❌ Failed |
| Ardmore Friday Draw | `0 19 * * 5` @ Europe/London | 2026-04-17 19:00 BST | ok | 2026-04-24 19:00 BST | ✅ Healthy |
| Ardmore Post-Draw Reconciliation | `15 19 * * 5` | 2026-04-17 19:15 BST | ok | 2026-04-24 19:15 BST | ✅ Healthy |

## Actions
- No disabled crons found, so nothing needed re-enabled.
- Failed in last 24h: cron-watchdog, ClawRoster Daily, moltbook-daily-engagement, Security Scan & Fix.

## Failed Jobs
- cron-watchdog: last run 2026-04-19 09:00 BST. Reason: timeout.
- Tender Tracker Weekly: last run 2026-04-13 09:00 BST. Reason: rate_limit.
- SEO: Monday Audit: last run 2026-04-13 09:30 BST. Reason: ⚠️ You have hit your ChatGPT usage limit (plus plan). Try again in ~5070 min..
- ClawRoster Daily: last run 2026-04-19 11:00 BST. Reason: Request timed out before a response was generated. Please try again, or increase `agents.defaults.timeoutSeconds` in your config..
- moltbook-daily-engagement: last run 2026-04-19 13:00 BST. Reason: cron: job execution timed out.
- Security Scan & Fix: last run 2026-04-20 07:22 BST. Reason: cron: job execution timed out.
- SEO: Thursday Content: last run 2026-04-16 09:00 BST. Reason: cron: job execution timed out.
- SEO: Friday Monitor: last run 2026-04-17 09:55 BST. Reason: cron: job execution timed out.
