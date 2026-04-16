# Morning Dashboard — 2026-04-16

Generated: Thursday, 16 April 2026, 07:00 BST

## 1) Site uptime
Fresh HTTPS checks run at 2026-04-16 07:01 BST.

| Site | HTTPS | Total Response | Notes |
|---|---:|---:|---|
| bluecanvas.ai | 200 | 0.653s | Redirects to `https://www.bluecanvas.ai/` |
| ardmorecricket.com | 200 | 0.320s | Healthy |
| uktradejobs.com | 200 | 0.371s | Healthy |
| openclawconsultant.co.uk | 200 | 0.307s | Healthy |

All 4 sites were up when checked.

## 2) Google Ads yesterday, account 801-851-4760
Attempted live pull on 2026-04-16 using local Ads client after sourcing `~/.zprofile`.

Command attempted:
- `source ~/.zprofile && ./ads_env/bin/python google_ads_yesterday_check.py`

Result:
- **Blocked** by `invalid_grant: Bad Request`

Meaning the current Google Ads refresh token is invalid/revoked, so **2026-04-15 spend, clicks, and conversions could not be verified live**.

### Last verified paid snapshot on file
Source: `reports/seo-weekly-2026-04-10.md`
- Impressions: **1,395**
- Clicks: **165**
- CTR: **11.83%**
- Avg CPC: **£1.12**
- Cost: **£185.57**
- Conversions: **0**

## 3) Lead pipeline / follow-up status
Sources: `MEMORY.md`, `memory/2026-03-07.md`, `memory/2026-03-09.md`, `memory/2026-04-03.md`, `memory/2026-04-14.md`

### Active / revenue-critical
- **Follow Rabbit AI** — onboarding in progress. £1k setup paid, £500/mo retainer. Two Blue Canvas CMS items are still draft-only.
- **HIP Psychology / Cormac Venney** — delivery active at £650/mo.
- **James Gorman Property** — delivery active at £250/mo.
- **Gavan Wall / Wall Group SPAR** — website v3 deployed, awaiting Phil’s final UX review before sharing.

### Follow-up / Phil decision needed
- **Gavan Wall** — final UX review, then share.
- **Joe Abrahams** — readiness scorecard demo built and sent on 2026-03-02, but no later closeout found.
- **Tim Clarke** — follow-up is Phil-owned; no newer outcome found.
- **Tobira / Vlad Shipilov** — partnership follow-up still looks open.
- **James Gorman valuation page** — `/free-valuation` is the natural route, but only if Phil approves.

## 4) SEO snapshot, GSC clicks/impressions trend
Attempted live on 2026-04-16.

Command attempted:
- `python3 gsc_trend_analysis.py`

Result:
- **Blocked** by Google token refresh failure: `invalid_grant: Bad Request`

So live GSC trend could not be verified this morning.

### Last clean verified snapshot on file
Source: `reports/seo-weekly-2026-04-10.md`
- **bluecanvas.ai** — **5 clicks**, **441 impressions**, avg position **8.2**
- **uktradejobs.com** — **10 clicks**, **792 impressions**, avg position **28.6**

## 5) Ahrefs snapshot
Per request, attempted live browser access to `app.ahrefs.com` with **browser profile `openclaw`**.

### Browser result
- Existing Ahrefs session is blocked by **`sessions-exceeded`**
- Message observed: **“You’ve been signed out because this account is being used on another device.”**
- So a fresh Site Explorer overview could not be pulled via browser for either domain.

### Last verified fallback on file (2026-04-15)
Sources: `reports/morning-dashboard-2026-04-15.md`, `reports/attack/bluecanvas-attack-report-2026-04-15.md`

**bluecanvas.ai**
- DR: **26.0**
- Top keyword positions: **none returned in fallback snapshot**

**uktradejobs.com**
- DR: **9.0**
- Top 3 keyword positions:
  1. `is city and guilds an nvq` — **#7**
  2. `train to be a locksmith` — **#32**
  3. `trade recruitment` — **#56**

## 6) Cron failures in last 24h
Source: `openclaw cron list --json`, checked at 2026-04-16 07:04 BST.

Failures inside the last 24h window:
- **Security Scan & Fix** — **2026-04-15 07:06:48 BST** — `cron: job execution timed out`
- **cron-watchdog** — **2026-04-15 09:00:00 BST** — `cron: job execution timed out`
- **moltbook-daily-engagement** — **2026-04-15 13:00:00 BST** — `cron: job execution timed out`

## 7) Blocked items needing Phil’s input
1. **Google re-auth** for Ads and GSC.
2. **Ahrefs session cleanup / re-login** for the `openclaw` browser profile.
3. **Gavan Wall** final UX review and go-ahead.
4. **Follow Rabbit drafts** — publish or keep staged.
5. **James Gorman** — approve `/free-valuation` page or leave parked.
6. **Joe Abrahams / Tim Clarke / Tobira** — decide chase vs park.

## Bottom line
- Sites are healthy.
- Pipeline is live, but Gavan and several stale follow-ups still need movement from Phil.
- This morning’s data is partly blind because **Google auth is broken** and **Ahrefs browser access is locked by another session**.
- Three cron jobs failed inside the last 24h window: **Security Scan & Fix**, **cron-watchdog**, and **moltbook-daily-engagement**.
