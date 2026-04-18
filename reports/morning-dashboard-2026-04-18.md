# Morning Dashboard — 2026-04-18 07:00 BST

## 1) Site uptime
Checked live around 07:10 BST.

| Site | Ping | HTTPS | Response time | Final URL |
|---|---|---:|---:|---|
| bluecanvas.ai | OK | 200 | 0.413s | https://www.bluecanvas.ai/ |
| ardmorecricket.com | OK | 200 | 0.129s | https://ardmorecricket.com/ |
| uktradejobs.com | OK | 200 | 0.650s | https://uktradejobs.com/ |
| openclawconsultant.co.uk | OK | 200 | 0.140s | https://openclawconsultant.co.uk/ |

All four sites are up.

## 2) Google Ads, yesterday (2026-04-17)
Target account: `801-851-4760`.

### Live status
- Google Ads API live pull this morning is still blocked by Google auth refresh failure (`invalid_grant: Bad Request`) based on the earlier sourced-environment run.
- Google Ads browser check also lands on Google sign-in / account chooser instead of account data.
- A direct unsourced local rerun of `google_ads_yesterday_check.py` additionally showed env not loaded (`GOOGLE_ADS_DEVELOPER_TOKEN` missing), so that result is not the trusted one.

### Outcome
- **Yesterday spend / clicks / conversions could not be verified live this morning.**

### Last verified historical paid snapshot on file
- Source: `reports/seo-weekly-2026-04-10.md`
- Spend **£185.57**, clicks **165**, conversions **0**
- This is **not** yesterday's number.

## 3) Lead pipeline / follow-up status
Sources: `MEMORY.md`, `memory/2026-04-17.md`, prior dashboard notes.

### Active / revenue-critical
- **Follow Rabbit AI** — onboarding active, **£1k setup paid + £500/mo retainer**; two Blue Canvas CMS items are still draft-only.
- **HIP / Cormac** — active at **£650/mo**; latest note says 73 net-new Zoho leads added and content pack is live.
- **James Gorman Property** — active at **£250/mo**; next run should be review + technical SEO fixes only.
- **White Oaks** — new **£1,000** app-build client from 2026-04-17; discovery/spec is still not captured in workspace.
- **Gavan Wall / Wall Group SPAR** — site v3 deployed; still waiting on Phil’s final UX review before sharing.

### Prospects / follow-ups still open
- **Gavan Wall** — final UX review, then share.
- **Joe Abrahams** — scorecard demo sent; no closeout found.
- **Tim Clarke** — follow-up still Phil-owned.
- **Tobira / Vlad Shipilov** — partnership follow-up still looks open.

## 4) SEO snapshot, GSC clicks/impressions trend
### Live status
- `gsc_trend_analysis.py` still fails on token refresh this morning:
  - `invalid_grant: Bad Request`
- So GSC clicks / impressions trend could **not** be refreshed live.

### Last clean verified snapshot on file
- Source: `reports/seo-weekly-2026-04-10.md`
- **bluecanvas.ai** — **5 clicks**, **441 impressions**, avg position **8.2**
- **uktradejobs.com** — **10 clicks**, **792 impressions**, avg position **28.6**

## 5) Ahrefs snapshot
Checked live against the signed-in `openclaw` Ahrefs session already open in Chrome, using direct tab/CDP extraction after browser snapshot instability.

### bluecanvas.ai
- **DR 26**
- Organic keywords: **0**
- Top 3 positions bucket: **0**
- **Top keywords:** none returned

### uktradejobs.com
- **DR 9**
- Organic keywords: **7**
- Top 3 positions bucket: **0**
- Top visible keywords by traffic/position on the live Organic Keywords page:
  1. `is city and guilds an nvq` — **#7** — URL: `/careers/trade-qualifications-explained`
  2. `plumbing apprenticeship london` — **#26** — URL: `/job/plumbing-apprentice-london`
  3. `train to be a locksmith` — **#32** — URL: `/careers/how-to-become-a-locksmith`
- Note shown by Ahrefs: they are investigating a SERP issue since late March that may affect related metrics.

## 6) Cron failures in last 24h
Window: **2026-04-17 07:00 BST → 2026-04-18 07:00 BST**.
Source: `~/.openclaw/cron/jobs.json`

Failures found:
- **SEO: Friday Monitor** — last run in window failed with `cron: job execution timed out`
- **cron-watchdog** — last run in window failed with `cron: job execution timed out`

Recent jobs that were OK in the same window include Morning Dashboard, Security Scan & Fix, api-key-health, ClawRoster Daily, Moltbook Inbox Check, Ardmore Friday Draw + reconciliation, Nightly Build, ClawMart Sales Check, Memory Distillation.

## 7) Blocked items needing Phil’s input
1. **Google re-auth** for Ads and GSC, both still blocked by refresh/sign-in issues.
2. **Gavan Wall** final UX review and go-ahead to share the SPAR site.
3. **Sales triage** for Joe Abrahams, Tim Clarke, and Tobira/Vlad: chase, close, or drop.
4. **White Oaks** — capture discovery/spec in workspace now that £1,000 has landed.
5. **UKTJ Reed feed** — decide whether to push past the effective `100` cap to a true `150` default.

## Notes on method / confidence
- Uptime: verified live directly.
- Ahrefs: verified live from the current signed-in tab after normal browser snapshots became unstable.
- Google Ads and GSC: blocked live due auth, so only historical fallback values are available.
