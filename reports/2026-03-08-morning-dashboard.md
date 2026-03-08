# Morning Dashboard — Sunday 8 March 2026

## 1. Site Uptime ✅ All Green
| Site | Status | Response |
|------|--------|----------|
| bluecanvas.ai | ✅ 200 | 514ms (301 redirect, normal for Webflow) |
| ardmorecricket.com | ✅ 200 | 146ms |
| uktradejobs.com | ✅ 200 | 830ms ⚠️ sluggish |
| openclawconsultant.co.uk | ✅ 200 | 257ms |

**Note:** uktradejobs.com running slow at 830ms — worth monitoring.

## 2. Google Ads ❌ API Blocked
Google Ads API returning 500s on all endpoints. Root cause: **test-level developer token** cannot access production account 801-851-4760. PJ submitted Basic access form Mar 6 — still pending Google approval. No spend/click data available via API until approved.

**Action needed:** Wait for Google Ads API Basic access approval (external blocker).

## 3. Lead Pipeline 🟡

| Prospect | Status | Action |
|----------|--------|--------|
| **Tim Clarke** (Quay Group) | CV Screener demo sent Mar 2. PJ handling personally since Mar 6. | PJ to close — nudge recommended |
| **Joe Abrahams** | AI Readiness Scorecard demo sent Mar 2. No follow-up. | ⚠️ 6 days cold — needs nudge TODAY |
| **Charlie O'Hara** (Solara Wellness) | Showcase deployed. No activity. | Status unknown |
| **Robbie O'Brien** | AI cybersecurity partnership. PJ said he'd message Mar 1. | ⚠️ 7 days stale |

**Tenders:** Donegal CC (€4,200), InterTradeIreland (£72,000), CCS frameworks — no outcome updates. Tender Tracker runs tomorrow (Mon 9am).

## 4. SEO / GSC Snapshot (Feb 27 – Mar 5 vs prior week)

### bluecanvas.ai
| Metric | This Week | Last Week | Trend |
|--------|-----------|-----------|-------|
| Clicks | 5 | 7 | ⬇️ -29% |
| Impressions | 441 | 357 | ⬆️ +24% |
| Avg CTR | 1.13% | 1.96% | ⬇️ |
| Avg Position | 8.2 | 10.0 | ⬆️ improved |

Visibility growing but clicks dropping. "AI consultants for small business" cluster (55+ impressions, pos 6-8) = biggest opportunity.

### uktradejobs.com 🚀
| Metric | This Week | Last Week | Trend |
|--------|-----------|-----------|-------|
| Clicks | 10 | 1 | ⬆️ +900% |
| Impressions | 792 | 364 | ⬆️ +118% |
| Avg CTR | 1.26% | 0.27% | ⬆️ |
| Avg Position | 28.6 | 24.3 | ⬇️ slightly |

Massive growth — clicks 10x, impressions doubled. "/careers/switching-to-trades" is the star page.

## 5. Ahrefs Data ⏳ Timed Out
Browser automation timed out trying to access app.ahrefs.com. Will retry on next run.

## 6. Cron Health (Last 24h)

- **17/18 crons OK** ✅
- **1 failure:** 🔴 Weekly Money Scout (X) — failed 3h ago, `message failed: Action send requires a target`
- **Systemic issues:**
  - Anthropic API timeouts (recurring, ~20:21-20:34 yesterday, ~07:01-07:02 today)
  - Telegram delivery flakiness (socket went stale, restarted at 11:59)
  - Gateway restart at ~20:23 yesterday caused brief subagent failures

## 7. Blocked Items Needing PJ

1. **Google Ads ".." policy fix** — PJ asked Mar 7 whether to fix himself or greenlight Albie. No response.
2. **Google Ads battle plan** — 5-point plan sent Mar 6, awaiting direction.
3. **Joe Abrahams nudge** — recommended Mar 7, no action taken. Getting cold.
4. **AI Act domains** — confirm purchase of aiactcompliance.co.uk + aiaudituk.com (Stacey's project).
5. **Google Ads API** — Basic access pending Google (external blocker).
6. **Ardmore UI polish** — coding agent failed, needs rebuild decision.
