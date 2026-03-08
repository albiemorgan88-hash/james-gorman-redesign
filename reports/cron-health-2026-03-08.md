# Cron Health Report — 2026-03-08 (Sunday 9:02 AM UK)

## Summary
- ✅ **10 Healthy**
- ⚠️ **6 Warning** (never run / newly created)
- ❌ **0 Failed**
- 🔄 **0 Stale**
- 🚫 **2 Expected crons MISSING**

---

## Registered Crons

| Cron Name | Schedule | Last Run | Status | Next Run | Health |
|---|---|---|---|---|---|
| Morning Dashboard | Daily 7am UK | 2h ago | ok | in 22h | ✅ Healthy |
| Security Scan & Fix | Daily 7:05am UK | 2h ago | ok | in 22h | ✅ Healthy |
| AI Trend Scout | Daily 8am UK | 1h ago | ok | in 23h | ✅ Healthy |
| api-key-health | Daily 8:10am UK | 53m ago | ok | in 23h | ✅ Healthy |
| cron-watchdog | Daily 9am UK | 1d ago | running | now | ✅ Healthy (self) |
| Weekly Money Scout | Sun 9am UK | 7d ago | running | now | ✅ Healthy |
| Moltbook Inbox Check | Daily 12pm UK | 21h ago | ok | in 3h | ✅ Healthy |
| Google Ads Daily Optimizer | Daily 2pm UK | 19h ago | ok | in 5h | ✅ Healthy |
| Google Ads Daily Report | Daily 5pm UK | 16h ago | ok | in 8h | ✅ Healthy |
| Memory Distillation | Daily 10:30pm UK | 11h ago | ok | in 13h | ✅ Healthy |
| SEO: Friday Monitor | Fri 9am UK | 2d ago | ok | in 5d | ✅ Healthy |
| Ardmore Friday Draw | Fri 7pm UK | 2d ago | ok | in 5d | ✅ Healthy |
| Tender Tracker Weekly | Mon 9am UK | never | idle | in 24h | ⚠️ Warning — never run |
| SEO: Monday Audit | Mon 9am UK | never | idle | in 24h | ⚠️ Warning — never run |
| Lead Gen Pipeline (Apollo) | Mon/Wed/Fri 10am UK | never | idle | in 1d | ⚠️ Warning — never run |
| SEO: Tuesday Fix | Tue 9am UK | never | idle | in 2d | ⚠️ Warning — never run |
| SEO: Wednesday Attack | Wed 9am UK | never | idle | in 3d | ⚠️ Warning — never run |
| SEO: Thursday Content | Thu 9am UK | never | idle | in 4d | ⚠️ Warning — never run |

## Missing Expected Crons

| Expected Cron | Expected Schedule | Status |
|---|---|---|
| **Nightly Build** | Daily 3am LA | 🚫 NOT REGISTERED |
| **healthcheck:security-fix** | Daily 7:30am UK | 🚫 NOT REGISTERED (possibly merged into "Security Scan & Fix" at 7:05am) |

## Notes

- **healthcheck:security-audit** → appears consolidated into "Security Scan & Fix" (daily 7:05am). Running fine.
- **6 weekly crons** (SEO Mon–Thu, Tender Tracker, Lead Gen) show as "idle" with no run history. These were likely recently created and haven't had their first scheduled day yet. They should fire starting tomorrow (Mon). Will verify on next watchdog run.
- **Nightly Build** cron is completely absent — needs to be re-registered if still required.
- All daily crons are firing on schedule with no failures in the last 24h.
