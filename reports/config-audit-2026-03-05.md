# Config File Audit — 2026-03-05

## Executive Summary

**Overall system prompt efficiency: 6.5/10** — Good bones, but MEMORY.md is bloated with completed tasks (~40% of its content), there's redundancy across files, and some key current context is missing. Estimated **~800 tokens wasted** on stale/duplicate content that loads into every conversation.

**Top 3 actions for immediate impact:**
1. Purge completed tasks from MEMORY.md (biggest win — ~50% size reduction)
2. Add Mark Hutchinson to Key People in MEMORY.md
3. Remove IDENTITY.md duplication with SOUL.md

---

## File-by-File Audit

### 1. SOUL.md
**Purpose:** Defines Albie's personality, tone, and operating mode.
**Quality: 9/10** — Tight, clear, actionable. Every line earns its place.

| Criterion | Assessment |
|-----------|-----------|
| Accuracy | ✅ Current. COO/orchestrator mode correctly reflected. |
| Completeness | ✅ Good. Covers tone, boundaries, sensitive topics. |
| Conflicts | ⚠️ Minor: "Operating Mode: COO / Orchestrator" section duplicates AGENTS.md almost verbatim. |
| Bloat | Low. Well-trimmed. |

**Recommendations:**
- Remove the "Operating Mode" section (6 lines) — it's already the entire purpose of AGENTS.md. Replace with a single line: `## Operating Mode\nSee AGENTS.md. TL;DR: COO who delegates everything via subagents.`
- Saves ~80 tokens per conversation.

---

### 2. AGENTS.md
**Purpose:** Defines the orchestrator-only operating model and delegation rules.
**Quality: 8/10** — Clear rules, good structure.

| Criterion | Assessment |
|-----------|-----------|
| Accuracy | ✅ Current. Matches today's operating mode. |
| Completeness | ✅ Good coverage of what to delegate. |
| Conflicts | ⚠️ Duplicates SOUL.md's Operating Mode section. |
| Bloat | Mild. "Why" section is nice but not essential — the rules are self-evident. |

**Recommendations:**
- The "Memory" section (3 lines) could move to MEMORY.md's header since that's where it's contextually relevant.
- "Safety" section (2 lines) is fine but could merge into SOUL.md's NEVER list.
- "Group Chats" section is useful — keep.
- Consider: the tool list in rule 6 (`message`, `sessions_spawn`, `memory_search`, etc.) — verify these are the actual tool names. `memory_search`/`memory_get` don't appear in available tools. If they're not real tools, remove to avoid confusion.

---

### 3. IDENTITY.md
**Purpose:** Quick-reference identity card for Albie.
**Quality: 6/10** — Functional but mostly redundant.

| Criterion | Assessment |
|-----------|-----------|
| Accuracy | ✅ Current. |
| Completeness | Fine for what it is. |
| Conflicts | None. |
| Bloat | **High relative to value.** 5 lines that mostly duplicate SOUL.md. Name and email are the only unique info. |

**Recommendations:**
- **Merge into SOUL.md** as a 3-line header section. This file doesn't justify its own context load.
- If kept separate, it's fine — just low ROI for the tokens.

---

### 4. USER.md
**Purpose:** Who PJ is — personal context for relevant/empathetic responses.
**Quality: 8/10** — Compact, essential context.

| Criterion | Assessment |
|-----------|-----------|
| Accuracy | ⚠️ Age may need checking — "37" since when? If DOB-based, verify. |
| Completeness | Good basics. Missing: current client pipeline context. |
| Conflicts | None. |
| Bloat | None — this is lean. |

**Recommendations:**
- Add a "Current Clients" or "Pipeline" line: `Tim Clarke (£750, Quay Group), Joe Abrahams (Readiness Scorecard), Mark Hutchinson (demo deployed), Charlie O'Hara (Solara)` — this is referenced constantly and shouldn't require MEMORY.md lookup.
- Add: `Mac mini timezone set to America/Los_Angeles` is already noted but worth flagging — is this intentional or a misconfiguration? If the Mac is in Derry but set to LA time, that could cause cron/scheduling issues.
- **Missing:** Mark Hutchinson is a current client/prospect but appears nowhere in any config file.

---

### 5. TOOLS.md
**Purpose:** Infrastructure reference — API keys, services, local tools.
**Quality: 7/10** — Useful reference but some items may be stale.

| Criterion | Assessment |
|-----------|-----------|
| Accuracy | ⚠️ "Google Ads `801-851-4760` (billing pending)" — per MEMORY.md, Google Ads is now LIVE. Update to remove "(billing pending)". |
| Completeness | Good. Could add Ahrefs (team access confirmed Mar 4). |
| Conflicts | Stale Google Ads status vs MEMORY.md. |
| Bloat | Low — it's already concise. |

**Recommendations:**
- Update Google Ads line: remove "(billing pending)", add "LIVE, £20/day".
- Add: `Ahrefs (team access)` to Services.
- Add: `Resend (ardmorecricket.com verified)` — used for Ardmore emails.
- Add: `Stripe (live mode, Ardmore Cricket)` — active payment processing.
- Consider: Does `Python 3.14` need to be here? Only if subagents need to know the version. Probably fine to keep.

---

### 6. MEMORY.md
**Purpose:** Long-term context and project state.
**Quality: 5/10** — Good structure but severely bloated with completed tasks.

| Criterion | Assessment |
|-----------|-----------|
| Accuracy | ⚠️ Several stale items (see below). |
| Completeness | Missing Mark Hutchinson. Missing today's wins. |
| Conflicts | Google Ads status contradicts TOOLS.md. |
| **Bloat** | **HIGH — this is the biggest problem.** |

#### Bloat Analysis
The "Completed" sections consume ~60% of the file:
- **Completed Mar 2** — 5 items, ~120 tokens
- **Completed Mar 3** — 10 items, ~280 tokens  
- **Completed Mar 4** — 11 items, ~300 tokens
- **Completed Mar 5** — 5 items, ~130 tokens

**Total: ~830 tokens of completed tasks loading into every single conversation.** These should be archived to daily memory files and removed.

#### Stale Items
- "Pending Actions > URGENT (Mar 4)" — it's now Mar 5. The "URGENT" header with a past date is confusing.
- "Ardmore UI polish — coding agent failed, needs rebuild" — is this still true?
- "UK Trade Jobs deploy" — still pending? Status unclear.
- "3x full E2E Ardmore tests" — done or not?
- "Continue 1/day blog publishing (8 drafts remaining)" — how many are actually remaining now?
- "Create standard user account on Mac (Cyber Essentials)" — still relevant?
- Moltlaunch monitoring — any actual gigs received? If not after weeks, deprioritize.

#### Missing
- **Mark Hutchinson** — demo deployed today, not mentioned anywhere in Key People or Active Projects.
- **OpenClaw Consultant rebuild** — completed today, not reflected.
- **Today's cron additions** — 4 new crons added, not documented.
- **Revenue actuals** — no tracking of actual income received vs. target. Only pricing/targets listed.

**Recommendations:**
1. **Archive all "Completed" sections** to `memory/2026-03-05-archive.md` or similar. Keep only the last 24h of completions.
2. **Add Mark Hutchinson** to Key People: `**Mark Hutchinson** — potential client. Demo deployed Mar 5. {add URL and context}.`
3. **Update "Pending Actions"** — retitle to "Active Tasks" with current date, remove anything completed, re-prioritize.
4. **Add "Revenue Tracking" section** — actual MRR, pipeline value, invoices sent/paid.
5. **Add OpenClaw Consultant** to Active Projects: `**OpenClaw Consultant** — openclawconsultant.co.uk, rebuilt Mar 5, LIVE on Vercel.`
6. **Trim "Active Tenders"** — "all submitted Feb" — any responses? If no movement in a month, archive.

---

### 7. HEARTBEAT.md
**Purpose:** Defines scheduled/recurring tasks (morning dashboard, nightly build, daily checks).
**Quality: 7/10** — Good structure, actionable templates.

| Criterion | Assessment |
|-----------|-----------|
| Accuracy | ✅ Mostly current. SEO Engine v2.1 cadence referenced correctly. |
| Completeness | Good for morning/evening. |
| Conflicts | None. |
| Bloat | Moderate — the full dashboard template is ~200 tokens. Could be more compact. |

**Recommendations:**
- The Moltbook API commands include `{key}` placeholder in the DMs section but a full command in the Feed section — inconsistent. Standardize.
- The `source ~/.zprofile && mltl inbox --agent 24586` command — verify `mltl` CLI is actually installed and working. If Moltlaunch has been quiet, consider reducing check frequency.
- Add: **Google Ads daily check** to morning dashboard — spend, clicks, conversions. This is a £20/day live campaign and should be monitored.
- Add: **Cron health check** — verify all 4+ crons are firing correctly.
- Consider adding a **weekly digest** format for Sundays — higher-level metrics, weekly revenue, project progress.

---

## Cross-File Issues

### Redundancy Map
| Content | Files | Action |
|---------|-------|--------|
| COO/orchestrator mode | SOUL.md + AGENTS.md | Remove from SOUL.md, keep in AGENTS.md |
| Albie's name/identity | SOUL.md + IDENTITY.md | Merge IDENTITY.md into SOUL.md |
| Memory rules | AGENTS.md + MEMORY.md (implicit) | Move AGENTS.md memory rules to MEMORY.md header |
| Google Ads status | TOOLS.md ("billing pending") + MEMORY.md ("LIVE") | Update TOOLS.md |

### Missing Context (not in any file)
1. **Mark Hutchinson** — active prospect, demo deployed today
2. **OpenClaw Consultant rebuild** — major win today, site is live
3. **4 new crons** — added today, not documented
4. **Actual revenue received** — no tracking of real income, only targets
5. **Client communication status** — Tim Clarke and Joe Abrahams demos sent but no response tracking beyond "awaiting response"

### Token Budget Estimate
| File | ~Tokens | Essential? |
|------|---------|-----------|
| SOUL.md | ~250 | ✅ Yes |
| AGENTS.md | ~200 | ✅ Yes |
| IDENTITY.md | ~60 | ⚠️ Merge into SOUL.md |
| USER.md | ~120 | ✅ Yes |
| TOOLS.md | ~100 | ✅ Yes |
| MEMORY.md | ~1800 | ⚠️ ~830 tokens are stale completions |
| HEARTBEAT.md | ~350 | ✅ Yes |
| **Total** | **~2,880** | **~930 wasted** |

**After recommended changes: ~1,950 tokens** — a 32% reduction.

---

## Priority Action List

### Do Now (5 minutes)
1. **MEMORY.md:** Archive all "Completed" sections to daily memory files
2. **MEMORY.md:** Add Mark Hutchinson to Key People
3. **MEMORY.md:** Update Pending Actions to current date, remove stale items
4. **TOOLS.md:** Update Google Ads from "billing pending" to "LIVE, £20/day"

### Do This Week
5. **MEMORY.md:** Add revenue tracking section (actual vs target)
6. **SOUL.md:** Remove duplicated Operating Mode section, replace with one-line reference to AGENTS.md
7. **IDENTITY.md:** Merge into SOUL.md header (or accept the minor token cost)
8. **TOOLS.md:** Add Ahrefs, Resend, Stripe to services list
9. **HEARTBEAT.md:** Add Google Ads monitoring to morning dashboard
10. **HEARTBEAT.md:** Standardize Moltbook API commands

### Consider Later
11. Add weekly digest format to HEARTBEAT.md
12. Create a CLIENT-PIPELINE.md for active prospects/deals tracking
13. Set up automated MEMORY.md pruning (cron that archives completions older than 48h)

---

*Audit completed 2026-03-05 15:09 GMT*
