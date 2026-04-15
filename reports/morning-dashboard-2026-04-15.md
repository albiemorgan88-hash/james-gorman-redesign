# Morning Dashboard — 2026-04-15

Generated: Wednesday, 15 April 2026, 07:00 BST

## 1) Site uptime
Fresh HTTPS checks run at **2026-04-15 07:01 BST**.

| Site | HTTPS | Total Response | Notes |
|---|---:|---:|---|
| bluecanvas.ai | 200 | 0.367s | Redirects to `https://www.bluecanvas.ai/` |
| ardmorecricket.com | 200 | 0.310s | Healthy |
| uktradejobs.com | 200 | 0.324s | Healthy |
| openclawconsultant.co.uk | 200 | 0.563s | Healthy |

All 4 sites were up when checked.

## 2) Google Ads yesterday, account 801-851-4760
Attempted live pull on **2026-04-15** using the local Ads client and workspace scripts.

Commands attempted:
- `./ads_env/bin/python google_ads_yesterday_check.py`
- direct Google Ads API query via `GoogleAdsClient`

Result:
- **Blocked** by `invalid_grant: Bad Request`

Meaning the current Google Ads refresh token is invalid/revoked, so **yesterday's spend, clicks, and conversions could not be verified live**.

### Last verified paid snapshot still on file
Source: `reports/seo-weekly-2026-04-10.md`
- Impressions: **1,395**
- Clicks: **165**
- CTR: **11.83%**
- Avg CPC: **£1.12**
- Cost: **£185.57**
- Conversions: **0**

## 3) Lead pipeline / follow-up status
Source: `MEMORY.md`, `memory/2026-04-14.md`

### Active / revenue-critical
- **Follow Rabbit AI** — onboarding in progress. £1k setup paid, £500/mo retainer.
- **HIP Psychology / Cormac Venney** — onboarding pending, £650/mo.
- **James Gorman Property** — delivery active at £250/mo.
- **Gavan Wall / Wall Group SPAR** — website v3 deployed, awaiting Phil's final UX review before sharing.

### Follow-up / PJ decision needed
- **Gavan Wall** — final UX review, then share/pitch.
- **HIP** — decide if onboarding email goes today.
- **Charlie O'Hara** — still waiting on Phil convo / decision.
- **White Oaks** — decide whether to reactivate or leave parked.

## 4) SEO snapshot, GSC clicks/impressions trend
Attempted live via `python3 gsc_trend_analysis.py` on **2026-04-15**.

Result:
- **Blocked** by Google token refresh failure: `invalid_grant: Bad Request`

So live GSC trend could not be verified this morning.

### Last clean verified snapshot on file
Sources: `reports/seo-weekly-2026-04-10.md`, prior dashboards
- **bluecanvas.ai** — **5 clicks**, **441 impressions**, clicks down / impressions up, avg position **8.2**
- **uktradejobs.com** — **10 clicks**, **792 impressions**, clicks up / impressions up, avg position **28.6**

## 5) Ahrefs snapshot
Per request, attempted live browser access to `app.ahrefs.com` with **browser profile `openclaw`**.

### Browser result
- Existing Ahrefs session is blocked by **`sessions-exceeded`**
- Message observed: **“You’ve been signed out because this account is being used on another device.”**
- So a fresh **Site Explorer overview could not be pulled via browser**.

### API fallback used to avoid a blind report
Checked via Ahrefs API on **2026-04-15**.

**bluecanvas.ai**
- DR: **26.0**
- Top keyword positions: **none returned**

**uktradejobs.com**
- DR: **9.0**
- Top 3 keyword positions:
  1. `is city and guilds an nvq` — **#7**
  2. `train to be a locksmith` — **#32**
  3. `trade recruitment` — **#56**

## 6) Cron failures in last 24h
Live cron history check shows one clear failure inside the last 24h window:
- **cron-watchdog** — **2026-04-14 09:00 BST**, status **error**, reason: `cron: job execution timed out`

Boundary note:
- The previous **Morning Dashboard** failure was at **2026-04-14 07:00 BST**, which was just over the 24h boundary by the time this run was checked.

## 7) Blocked items needing Phil's input
1. **Google re-auth** for Ads and GSC.
2. **Ahrefs session cleanup / re-login** for the `openclaw` browser profile.
3. **Gavan Wall** final UX review and go-ahead.
4. **HIP onboarding email** send decision.
5. **Charlie O'Hara / White Oaks** chase-or-drop decision.

## Bottom line
- Sites are healthy.
- Pipeline is live, but Gavan + HIP still need movement from Phil.
- This morning's reporting is partly blind because **Google auth is broken** and **Ahrefs browser access is locked by another session**.
- Only one clean cron failure sits inside the last 24h window: **cron-watchdog**.
