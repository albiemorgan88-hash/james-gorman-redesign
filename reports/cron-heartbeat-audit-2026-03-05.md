# Cron & Heartbeat Audit — 5 March 2026

## Executive Summary

**12 cron jobs registered. Only 3 have EVER run. 7 are completely dead (zero executions). 2 are delivering real value. The SEO rotation (5 crons) has never fired once.**

The system is burning ~45k tokens/day on AI Trend Scout and ~20k on Nightly Build — both worthwhile. But 7 dormant crons are clutter, and there are significant gaps (no morning dashboard, no site uptime monitoring, no lead follow-up automation).

---

## Individual Cron Audit

### 1. ✅ AI Trend Scout
- **Schedule:** Daily 8:00 AM (exact — NO timezone specified)
- **What it does:** Scans HN, tech press, domain availability for AI business opportunities. Scores finds, recommends domain grabs.
- **Last 5 runs:** 4 OK, 1 error (API overload on 3 Mar). Runs consistently.
- **Value delivered:** **HIGH.** Directly led to PJ buying aiactcompliance.co.uk + aiaudituk.com. Flagged Claude Cowork trend (validated next day when someone grabbed the domain). Memory files reference it daily.
- **Cost:** ~35-47k tokens/run (~40k avg). On Opus 4.6 that's roughly $0.60-0.80/run, ~$20/month.
- **Issues:** ⚠️ **No timezone specified** — uses `(exact)` which means UTC. At 8 AM UTC = 8 AM GMT (fine now, but will be 9 AM BST in summer). Should explicitly set `Europe/London`.
- **Recommendation:** ✅ **KEEP** — this is the highest-ROI cron. Fix the timezone to `Europe/London`. Consider downgrading model to Sonnet for cost savings (the research doesn't need Opus-level reasoning).

### 2. ✅ Nightly Build
- **Schedule:** Daily 3:00 AM America/Los_Angeles (= 11:00 AM GMT / 11:00 PM PST)
- **What it does:** Generates a menu of 3-5 build options for PJ to pick from. Reads context from memory/projects.
- **Last 5 runs:** All OK. Consistent output quality — well-structured menus with specific, actionable options.
- **Value delivered:** **MEDIUM-HIGH.** PJ engages with it most mornings. Led to Ardmore UI polish, UKTJ deploy discussions, pipeline tracker ideas. However, PJ doesn't always pick an option.
- **Cost:** ~15-26k tokens/run (~20k avg). ~$0.30-0.50/run, ~$12/month.
- **Issues:** ⚠️ **TIMEZONE IS WRONG.** `America/Los_Angeles` means 3 AM PST = **11 AM GMT**. This is labelled "Nightly Build" but runs at 11am UK time. Should be running at ~10-11 PM UK time so PJ sees options before bed or first thing in morning. Currently it fires mid-morning when PJ is already working.
- **Recommendation:** ✅ **KEEP but FIX SCHEDULE.** Change to `cron 0 22 * * * @ Europe/London` (10 PM GMT) so it's actually nightly. Or `0 23 * * *` if 11 PM preferred.

### 3. ✅ Weekly Money Scout (X/Moltbook)
- **Schedule:** Sunday 9:00 AM Europe/London
- **What it does:** Scans Moltbook, X/Twitter, agent economy for income opportunities. Reports on AI income trends.
- **Last runs:** 2 total — 1 OK (1 Mar), 1 error (22 Feb, delivery failed).
- **Value delivered:** **MEDIUM.** Led to Robbie O'Brien outreach idea, Amazon AI compliance angle, MoltLaunch positioning advice. Good strategic intel but less actionable than Trend Scout.
- **Cost:** ~20-27k tokens/run. ~$0.40-0.50/run, ~$2/month (weekly).
- **Issues:** Delivery failure on 22 Feb suggests reliability issue. Sunday 9 AM is fine timing.
- **Recommendation:** ✅ **KEEP.** Good weekly cadence. Consider merging with an expanded Opportunity Radar if that skill is activated.

### 4. ❌ healthcheck:security-scan
- **Schedule:** Daily 7:00 AM Europe/London
- **What it does:** Security audit scan of the Mac mini host.
- **Last run:** NEVER. Zero executions.
- **Value delivered:** **NONE.** Never ran.
- **Issues:** Has never triggered. Either the gateway wasn't running at 7 AM, or something is blocking it. No agent ID assigned (`-`).
- **Recommendation:** 🔧 **FIX or DELETE.** If security matters (it should), debug why it's not firing. Check if the `isolated` target and missing agent ID are the problem. If healthcheck skill isn't configured properly, delete and re-create.

### 5. ❌ healthcheck:security-fix
- **Schedule:** Daily 7:30 AM Europe/London
- **What it does:** Auto-fix security issues found by the scan.
- **Last run:** NEVER. Zero executions.
- **Value delivered:** **NONE.**
- **Issues:** Same as above — never triggered. Depends on scan results that also never ran. No agent ID.
- **Recommendation:** 🔧 **FIX or DELETE.** Same as above. These two should be a single cron if kept — scan + fix in one pass.

### 6. ❌ api-key-health
- **Schedule:** Daily 8:00 AM Europe/London
- **What it does:** Checks health/validity of API keys.
- **Last run:** NEVER. Zero executions.
- **Value delivered:** **NONE.**
- **Issues:** ⚠️ **Schedule conflict** — runs at same time as AI Trend Scout (8 AM). No agent ID assigned. Never triggered.
- **Recommendation:** 🗑️ **DELETE or MERGE.** API key health can be a 10-second check inside the morning dashboard/heartbeat. Doesn't need its own cron. If kept, move to a different time (e.g., 6:30 AM).

### 7. ❌ cron-watchdog
- **Schedule:** Daily 9:00 AM Europe/London
- **What it does:** Monitors cron health (meta-cron — a cron that watches crons).
- **Last run:** NEVER. Zero executions.
- **Value delivered:** **NONE.** The irony: the cron watchdog itself has never run, proving it's needed.
- **Issues:** No agent ID. Never triggered. A watchdog that doesn't watch is worse than no watchdog — gives false confidence.
- **Recommendation:** 🔧 **FIX.** This is actually needed — 7 out of 12 crons have never run and nobody noticed until this audit. But it needs to actually work. Debug why it's not firing. Assign agent ID `main`.

### 8-12. ❌ SEO Rotation (Monday-Friday)
- **SEO: Monday Audit** — `0 9 * * 1` Europe/London — NEVER RAN
- **SEO: Tuesday Fix** — `0 9 * * 2` Europe/London — NEVER RAN
- **SEO: Wednesday Attack** — `0 9 * * 3` Europe/London — NEVER RAN
- **SEO: Thursday Content** — `0 9 * * 4` Europe/London — NEVER RAN
- **SEO: Friday Monitor** — `0 9 * * 5` Europe/London — NEVER RAN
- **What they do:** Automated SEO workflow — audit on Mon, fix on Tue, competitor attack on Wed, content on Thu, monitoring on Fri.
- **Value delivered:** **ZERO.** None have ever executed. The SEO engine skill exists and is comprehensive, but these crons have never fired.
- **Issues:** All have no agent ID assigned (`-`). All status `idle`. The `seo-engine` skill file exists but these crons aren't wired to it. Today is Thursday — if SEO: Thursday Content worked, it should have run this morning. It didn't.
- **Cost:** Zero (never ran), but the OPPORTUNITY COST is massive — SEO is Blue Canvas's bread and butter and the automated engine is sitting completely dormant.
- **Recommendation:** 🔧 **FIX ALL 5.** This is the single biggest fix from this audit. Debug the agent ID issue (all 5 need `main` assigned). These should be the workhorses of the entire cron system. If the issue is the `isolated` target, switch to whatever target the working crons use. Consider whether 5 separate crons are needed vs. one daily cron that checks the day and runs the appropriate phase.

---

## Schedule Conflicts

| Time (GMT) | Crons |
|---|---|
| 07:00 | healthcheck:security-scan |
| 07:30 | healthcheck:security-fix |
| **08:00** | **AI Trend Scout + api-key-health** ⚠️ CONFLICT |
| 09:00 | cron-watchdog + SEO daily (varies by day) |
| 11:00 | Nightly Build (mislabelled — actually runs 11 AM GMT) |
| 09:00 Sun | Weekly Money Scout |

**Conflicts:**
1. **8 AM: AI Trend Scout vs api-key-health** — both at same time. If both fired they'd compete for resources.
2. **9 AM: cron-watchdog vs SEO rotation** — both at 9 AM. The watchdog would run simultaneously with whichever SEO phase is scheduled that day.

---

## What's Missing (Gaps)

### Critical Gaps:
1. **🔴 Morning Dashboard** — HEARTBEAT.md defines one but there's NO cron for it. PJ should get a status briefing every morning at 8-9 AM. This is the single most important missing cron.
2. **🔴 Site Uptime Monitoring** — No cron checks if bluecanvas.ai, ardmorecricket.com, uktradejobs.com, openclawconsultant.co.uk are up. openclawconsultant.co.uk was DOWN for days (noted in memory) and only discovered manually.
3. **🟡 Lead Follow-Up Reminders** — Tim Clarke demo sent, Joe Abrahams scorecard sent, multiple tenders submitted — no automated nudge to follow up. Revenue is slipping through cracks.
4. **🟡 Moltbook/MoltLaunch Inbox Check** — HEARTBEAT.md defines this but there's no cron for it. Agent #24586 has gigs but nobody's checking the inbox automatically.
5. **🟡 Google Ads Performance** — Campaign went live 4 Mar. No daily check on spend/clicks/conversions. £20/day could be wasted with nobody watching.
6. **🟡 Memory Distillation** — HEARTBEAT.md says to distill daily logs into MEMORY.md. No cron does this. MEMORY.md exists but may be stale.

### Nice-to-Have:
7. **Competitor Monitoring** — Weekly check on competitor rankings, new content, GBP changes.
8. **Ardmore Draw Automation** — Friday 7 PM draw should be automated. Is it? No cron for it here.
9. **Blog Publishing** — 10 blog posts ready. Could auto-publish 1/day via Webflow API.

---

## Optimal 24-Hour Schedule (Proposed)

| Time (GMT) | Cron | Notes |
|---|---|---|
| 06:30 | 🔒 Security Scan + Fix (merged) | One cron, scan then auto-fix. Before PJ wakes. |
| 07:00 | 📊 Morning Dashboard | Revenue, projects, SEO, blocked items. PJ sees this with coffee. |
| 07:15 | 🔑 API Key Health (if kept) | Quick check, results included in dashboard. Better: merge into dashboard. |
| 08:00 | 🔍 AI Trend Scout | Standalone — high value, keep isolated. |
| 09:00 | 🔧 SEO Daily Phase | Mon=Audit, Tue=Fix, Wed=Attack, Thu=Content, Fri=Monitor. Single cron, checks day. |
| 09:00 Sun | 💰 Weekly Money Scout | Keep as-is. |
| 12:00 | 📬 Moltbook/MoltLaunch Inbox | Midday check for gigs/opportunities. |
| 17:00 | 📈 Google Ads Daily Report | Spend, clicks, conversions, CPA. Only if campaign is active. |
| 19:00 Fri | 🎰 Ardmore Draw Trigger | If not handled elsewhere. |
| 22:00 | 🌙 Nightly Build | Options for tomorrow. PJ picks before bed or in morning. |
| 22:30 | 🧠 Memory Distillation | Compress daily log → MEMORY.md. After nightly build. |

**Key changes from current:**
- Nightly Build moved from 11 AM → 10 PM (actually nightly)
- Security merged into one cron at 6:30 AM
- Morning dashboard ADDED at 7 AM
- SEO consolidated into one smart cron
- Moltbook inbox check ADDED
- Google Ads monitoring ADDED
- Memory distillation ADDED
- api-key-health merged into dashboard or deleted
- cron-watchdog fixed and kept at a non-conflicting time (or merged into dashboard)

---

## Token Efficiency Analysis

| Cron | Frequency | Tokens/Run | Monthly Cost (est.) | ROI |
|---|---|---|---|---|
| AI Trend Scout | Daily | ~40k | ~$20 | **HIGH** — directly drives domain acquisition + strategy |
| Nightly Build | Daily | ~20k | ~$12 | **MEDIUM-HIGH** — drives daily work selection |
| Weekly Money Scout | Weekly | ~23k | ~$2 | **MEDIUM** — strategic intel, less actionable |
| SEO Rotation (5) | Daily (if fixed) | ~30k est. | ~$18 | **POTENTIALLY HIGHEST** — SEO is core revenue driver, but currently $0 (never runs) |
| Security (2) | Daily (if fixed) | ~10k est. | ~$6 | **LOW-MEDIUM** — important but not revenue-generating |
| api-key-health | Daily (if fixed) | ~5k est. | ~$3 | **LOW** — merge into dashboard |
| cron-watchdog | Daily (if fixed) | ~5k est. | ~$3 | **LOW** — but prevents system rot |
| **TOTAL (current)** | | | **~$34/month** | Only 3 crons actually running |
| **TOTAL (proposed)** | | | **~$65/month** | All crons firing, morning dashboard added |

**Verdict:** Current spend is fine. The problem isn't cost — it's that 7 crons contribute zero value because they never run. Fixing them would roughly double the monthly cost but dramatically increase value, especially the SEO rotation.

---

## Heartbeat Assessment

### Current HEARTBEAT.md
The file defines three functions:
1. **Morning Dashboard** — comprehensive daily briefing with revenue, projects, SEO, blockers, build options
2. **Nightly Build** — build menu + memory distillation
3. **Daily Checks** — Moltlaunch inbox, Moltbook feed scan, Moltbook DMs

### Assessment:

**What's working:**
- ✅ Nightly Build is implemented as a cron and running daily (albeit at wrong time)
- ✅ The format is well-designed — PJ would get real value from the morning dashboard

**What's broken:**
- ❌ **Morning Dashboard has NO cron.** The most valuable part of HEARTBEAT.md is completely unimplemented. PJ doesn't get a daily briefing.
- ❌ **Moltbook/MoltLaunch checks have NO cron.** HEARTBEAT.md defines inbox checking, feed scanning, and DM monitoring — none of these run automatically.
- ❌ **Memory distillation not happening.** HEARTBEAT.md says to distill daily→MEMORY.md on heartbeats. No evidence this happens automatically.
- ❌ **Nightly Build timing is wrong.** Runs at 11 AM GMT, not "nightly."
- ❌ **No revenue tracking.** Morning dashboard template includes revenue section but there's no mechanism to pull Google Ads spend, Ardmore draw pot, or other revenue data.

**What's missing from HEARTBEAT.md:**
1. **Site uptime checks** — should ping all production URLs
2. **Google Ads monitoring** — campaign went live, needs daily oversight
3. **Lead pipeline status** — who needs follow-up, what's stale
4. **Cron health summary** — how many crons ran today, any failures (the watchdog's job)

### Recommended HEARTBEAT.md Changes:
1. **Create a Morning Dashboard cron** at 7 AM Europe/London — this is priority #1
2. **Create a Moltbook/MoltLaunch check cron** at 12 PM — or merge into morning dashboard
3. **Move Nightly Build** to 10 PM Europe/London
4. **Add memory distillation** as a 10:30 PM cron or append to nightly build
5. **Add site uptime section** to morning dashboard
6. **Add Google Ads summary** to morning dashboard
7. **Add lead pipeline** section showing days since last contact with active prospects

---

## Priority Action Items

### 🔴 Critical (do today):
1. **Fix Nightly Build timezone** — change from `America/Los_Angeles 3 AM` to `Europe/London 22:00`
2. **Fix AI Trend Scout timezone** — add `@ Europe/London` explicitly
3. **Debug why 7 crons never fire** — the common factor is no agent ID (`-`). All working crons have agent ID `main`. This is likely the root cause. Run `openclaw cron edit` on each to set agent ID.
4. **Create Morning Dashboard cron** — implement the HEARTBEAT.md morning dashboard as an actual cron at 7 AM

### 🟡 Important (this week):
5. **Merge security scan + fix** into one cron
6. **Merge api-key-health** into morning dashboard (then delete standalone cron)
7. **Create Moltbook inbox check** cron
8. **Add site uptime monitoring** to morning dashboard
9. **Fix cron-watchdog** or merge its function into morning dashboard

### 🟢 Nice-to-have (next week):
10. **Consolidate SEO rotation** into one smart daily cron
11. **Add Google Ads daily report** cron
12. **Add memory distillation** cron
13. **Consider model downgrades** — Trend Scout could use Sonnet 4, saving ~60% on tokens

---

*Audit completed 5 March 2026 15:15 GMT*
