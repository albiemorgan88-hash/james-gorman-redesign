# Cron Health Report — 2026-03-07 (Saturday 9:00 AM UK)

## Summary
- ✅ **11 Healthy** — ran on schedule, completed OK
- ⚠️ **6 Warning** — new/never run, or missing expected cron
- ❌ **0 Failed**
- 🔄 **0 Stale**

### ⚠️ Issues Requiring Attention
1. **Nightly Build** — MISSING from cron registry entirely (expected: daily 3am LA)
2. **Lead Gen Pipeline** — registered Mon/Wed/Fri 10am but has **never run** (should have fired yesterday Fri)
3. **Google Ads Daily Optimizer** — registered daily 2pm but has **never run**
4. **SEO Mon–Thu crons** — all show idle/never run (may be newly registered; will self-resolve next week)

### Note on Expected List
- `healthcheck:security-audit` + `healthcheck:security-fix` appear consolidated into **Security Scan & Fix** (daily 7:05am) — functionally equivalent ✅
- Additional crons not on expected list (healthy): Moltbook Inbox Check, Google Ads Daily Report, Google Ads Daily Optimizer, Memory Distillation, Morning Dashboard, Tender Tracker Weekly, Lead Gen Pipeline, Ardmore Friday Draw

---

## Full Status

| # | Cron Name | Schedule | Last Run | Status | Next Run | Health |
|---|-----------|----------|----------|--------|----------|--------|
| 1 | Morning Dashboard | Daily 7:00 UK | 2h ago | ok | in 22h | ✅ Healthy |
| 2 | Security Scan & Fix | Daily 7:05 UK | 2h ago | ok | in 22h | ✅ Healthy |
| 3 | AI Trend Scout | Daily 8:00 UK | 1h ago | ok | in 23h | ✅ Healthy |
| 4 | api-key-health | Daily 8:10 UK | 50m ago | ok | in 23h | ✅ Healthy |
| 5 | cron-watchdog | Daily 9:00 UK | 23h ago | running | now | ✅ Healthy (self) |
| 6 | Moltbook Inbox Check | Daily 12:00 UK | 21h ago | ok | in 3h | ✅ Healthy |
| 7 | Google Ads Daily Optimizer | Daily 14:00 UK | never | idle | in 5h | ⚠️ Warning (never run) |
| 8 | Google Ads Daily Report | Daily 17:00 UK | 16h ago | ok | in 8h | ✅ Healthy |
| 9 | Memory Distillation | Daily 22:30 UK | 11h ago | ok | in 13h | ✅ Healthy |
| 10 | Weekly Money Scout | Sun 9:00 UK | 6d ago | ok | in 24h | ✅ Healthy |
| 11 | SEO: Monday Audit | Mon 9:00 UK | never | idle | in 2d | ⚠️ Warning (never run) |
| 12 | Tender Tracker Weekly | Mon 9:00 UK | never | idle | in 2d | ⚠️ Warning (never run) |
| 13 | Lead Gen Pipeline | Mon/Wed/Fri 10:00 UK | never | idle | in 2d | ⚠️ Warning (missed Fri?) |
| 14 | SEO: Tuesday Fix | Tue 9:00 UK | never | idle | in 3d | ⚠️ Warning (never run) |
| 15 | SEO: Wednesday Attack | Wed 9:00 UK | never | idle | in 4d | ⚠️ Warning (never run) |
| 16 | SEO: Thursday Content | Thu 9:00 UK | never | idle | in 5d | ⚠️ Warning (never run) |
| 17 | SEO: Friday Monitor | Fri 9:00 UK | 22h ago | ok | in 6d | ✅ Healthy |
| 18 | Ardmore Friday Draw | Fri 19:00 UK | 14h ago | ok | in 6d | ✅ Healthy |
| — | **Nightly Build** | **Expected: daily 3am LA** | **—** | **—** | **—** | **⚠️ MISSING** |

---

## Actions Taken
- None automated — no failures to remediate.
- Flagging missing **Nightly Build** and never-run crons to PJ.

## Recommendations
1. **Re-register Nightly Build** cron (daily 3am America/Los_Angeles) — it's missing from the registry
2. **Monitor Lead Gen Pipeline** — should have run Friday but didn't; check if it was registered after Friday's window
3. **Google Ads Daily Optimizer** — never fired; verify the prompt/task is configured correctly
4. **SEO Mon–Thu crons** — likely just new; will confirm healthy status in next week's reports
