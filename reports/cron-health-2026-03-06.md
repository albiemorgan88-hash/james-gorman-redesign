# Cron Health Report — 2026-03-06 (Friday 9:58 AM UK)

## Summary
- ✅ **10 Healthy** — ran on schedule, completed OK
- ⚠️ **7 Warning** — never run yet (likely newly created, awaiting first scheduled slot)
- ❌ **0 Failed**
- 🔄 **0 Stale**

## All Registered Crons

| Cron Name | Schedule | Last Run | Status | Next Run | Health |
|-----------|----------|----------|--------|----------|--------|
| Nightly Build | Daily 10pm UK | 12h ago | ok | in 12h | ✅ Healthy |
| Security Scan & Fix | Daily 7am UK | 3h ago | ok | in 21h | ✅ Healthy |
| Morning Dashboard | Daily 7am UK | 20m ago | ok | in 21h | ✅ Healthy |
| AI Trend Scout | Daily 8am UK | 2h ago | ok | in 22h | ✅ Healthy |
| api-key-health | Daily 8am UK | 18m ago | ok | in 22h | ✅ Healthy |
| cron-watchdog | Daily 9am UK | running (self) | running | in 23h | ✅ Healthy (self) |
| Memory Distillation | Daily 10:30pm UK | 11h ago | ok | in 13h | ✅ Healthy |
| Google Ads Daily Report | Daily 5pm UK | 17h ago | ok | in 7h | ✅ Healthy |
| SEO: Friday Monitor | Fri 9am UK | 15m ago | ok | in 7d | ✅ Healthy |
| Weekly Money Scout | Sun 9am UK | 5d ago | ok | in 2d | ✅ Healthy |
| SEO: Monday Audit | Mon 9am UK | never | idle | in 3d | ⚠️ Warning (never run) |
| SEO: Tuesday Fix | Tue 9am UK | never | idle | in 4d | ⚠️ Warning (never run) |
| SEO: Wednesday Attack | Wed 9am UK | never | idle | in 5d | ⚠️ Warning (never run) |
| SEO: Thursday Content | Thu 9am UK | never | idle | in 6d | ⚠️ Warning (never run) |
| Moltbook Inbox Check | Daily 12pm UK | never | idle | in 2h | ⚠️ Warning (never run) |
| Ardmore Friday Draw | Fri 7pm UK | never | idle | in 9h | ⚠️ Warning (never run) |
| Tender Tracker Weekly | Mon 9am UK | never | idle | in 3d | ⚠️ Warning (never run) |
| Apollo Lead Builder | Wed 10am UK | never | idle | in 5d | ⚠️ Warning (never run) |

## Expected Crons Check

| Expected Cron | Found? | Notes |
|---------------|--------|-------|
| Nightly Build (daily 3am LA / 10pm UK) | ✅ Yes | Running fine |
| healthcheck:security-audit (daily 7am UK) | ✅ Yes | Consolidated into "Security Scan & Fix" |
| healthcheck:security-fix (daily 7:30am UK) | ✅ Yes | Consolidated into "Security Scan & Fix" |
| AI Trend Scout (daily 8am UK) | ✅ Yes | Running fine |
| api-key-health (daily 8am UK) | ✅ Yes | Running fine |
| SEO: Friday Monitor (Fri 9am UK) | ✅ Yes | Ran today, completed OK |
| Weekly Money Scout (Sun 9am UK) | ✅ Yes | Last ran Sun Mar 1 |
| SEO: Monday Audit (Mon 9am UK) | ✅ Yes | Registered, never run (new) |
| SEO: Tuesday Fix (Tue 9am UK) | ✅ Yes | Registered, never run (new) |
| SEO: Wednesday Attack (Wed 9am UK) | ✅ Yes | Registered, never run (new) |
| SEO: Thursday Content (Thu 9am UK) | ✅ Yes | Registered, never run (new) |
| cron-watchdog (daily 9am UK) | ✅ Yes | Currently running (self-check) |

**All 12 expected crons accounted for.** No missing crons.

## Notable Issues

1. **SEO: Friday Monitor** — first run today timed out (5min), auto-retried and succeeded. Report flagged that **Google OAuth tokens are expired** for 3 consecutive weeks — GSC/GA4 data unavailable. This needs PJ's attention.

2. **4 weekday SEO crons** (Mon–Thu) have never run. They appear to be newly registered. Will verify they fire on their respective days next week.

3. **Moltbook Inbox Check** — daily at noon, registered but never run. Should fire today at 12pm for the first time.

4. **healthcheck:security-audit and security-fix** have been consolidated into a single "Security Scan & Fix" cron at 7am daily. Working as intended.
