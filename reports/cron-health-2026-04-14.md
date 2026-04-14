# Cron Health Report - 2026-04-14

Summary: 9 healthy, 0 warning, 9 failed, 0 stale

| Cron Name | Schedule | Last Run | Status | Next Run | Health |
|---|---|---|---|---|---|
| api-key-health | cron 10 8 * * * | 2026-04-14 08:10 BST | ok | 2026-04-15 08:10 BST | ✅ Healthy |
| Ardmore Friday Draw | cron 0 19 * * 5 @ Europe/London | 2026-04-10 19:00 BST | ok | 2026-04-17 19:00 BST | ✅ Healthy |
| Ardmore Post-Draw Reconciliation | cron 15 19 * * 5 | 2026-04-10 19:15 BST | ok | 2026-04-17 19:15 BST | ✅ Healthy |
| ClawMart Sales Check | cron 0 10 * * * @ Europe/London | 2026-04-13 10:00 BST | error | 2026-04-14 10:00 BST | ❌ Failed |
| ClawRoster Daily | cron 0 11 * * * | 2026-04-13 11:00 BST | error | 2026-04-14 11:00 BST | ❌ Failed |
| cron-watchdog | cron 0 9 * * * @ Europe/London | 2026-04-13 09:00 BST | running | 2026-04-14 09:00 BST | ❌ Failed |
| Memory Distillation | cron 30 22 * * * @ Europe/London | 2026-04-13 22:30 BST | ok | 2026-04-14 22:30 BST | ✅ Healthy |
| Moltbook Inbox Check | cron 0 12 * * * @ Europe/London | 2026-04-13 12:00 BST | error | 2026-04-14 12:00 BST | ❌ Failed |
| moltbook-daily-engagement | cron 0 13 * * * @ Europe/London | 2026-04-13 13:00 BST | error | 2026-04-14 13:00 BST | ❌ Failed |
| Morning Dashboard | cron 0 7 * * * @ Europe/London | 2026-04-14 07:00 BST | error | 2026-04-15 07:00 BST | ❌ Failed |
| Nightly Build | cron 0 22 * * * @ Europe/London | 2026-04-13 22:00 BST | ok | 2026-04-14 22:00 BST | ✅ Healthy |
| Security Scan & Fix | cron 5 7 * * * | 2026-04-14 07:10 BST | ok | 2026-04-15 07:05 BST | ✅ Healthy |
| SEO: Friday Monitor | cron 0 9 * * 5 @ Europe/London | 2026-04-10 09:00 BST | ok | 2026-04-17 09:00 BST | ✅ Healthy |
| SEO: Monday Audit | cron 30 9 * * 1 @ Europe/London | 2026-04-13 09:30 BST | error | 2026-04-20 09:30 BST | ❌ Failed |
| SEO: Thursday Content | cron 0 9 * * 4 @ Europe/London | 2026-04-09 09:00 BST | error | 2026-04-16 09:00 BST | ❌ Failed |
| SEO: Tuesday Fix | cron 0 9 * * 2 @ Europe/London | 2026-04-07 09:01 BST | running | 2026-04-14 09:00 BST | ✅ Healthy |
| SEO: Wednesday Attack | cron 0 9 * * 3 @ Europe/London | 2026-04-08 09:00 BST | ok | 2026-04-15 09:00 BST | ✅ Healthy |
| Tender Tracker Weekly | cron 0 9 * * 1 @ Europe/London | 2026-04-13 09:00 BST | error | 2026-04-20 09:00 BST | ❌ Failed |

## Failed in last 24h
- **cron-watchdog** at 2026-04-13 09:00 BST: ⚠️ You have hit your ChatGPT usage limit (plus plan). Try again in ~5100 min.
- **ClawMart Sales Check** at 2026-04-13 10:00 BST: ⚠️ You have hit your ChatGPT usage limit (plus plan). Try again in ~5039 min.
- **ClawRoster Daily** at 2026-04-13 11:00 BST: ⚠️ You have hit your ChatGPT usage limit (plus plan). Try again in ~4980 min.
- **Moltbook Inbox Check** at 2026-04-13 12:00 BST: ⚠️ You have hit your ChatGPT usage limit (plus plan). Try again in ~4920 min.
- **moltbook-daily-engagement** at 2026-04-13 13:00 BST: ⚠️ You have hit your ChatGPT usage limit (plus plan). Try again in ~4860 min.
- **Morning Dashboard** at 2026-04-14 07:00 BST: Request timed out before a response was generated. Please try again, or increase `agents.defaults.timeoutSeconds` in your config.
- **Tender Tracker Weekly** at 2026-04-13 09:00 BST: ⚠️ You have hit your ChatGPT usage limit (plus plan). Try again in ~5100 min.
- **SEO: Monday Audit** at 2026-04-13 09:30 BST: ⚠️ You have hit your ChatGPT usage limit (plus plan). Try again in ~5070 min.

## Remediation
- No disabled crons found, so no re-enable action was needed.

## Notes
- `openclaw cron runs --limit 50` now requires `--id`, so run history was checked per job with `openclaw cron runs --id <job-id> --limit 50`.
