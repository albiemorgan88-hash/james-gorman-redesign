# Morning Dashboard — 2026-04-11

## 1) Site uptime
Checked live via HTTPS response + ICMP ping.

| Site | HTTPS | Total Response | Ping Avg | Notes |
|---|---:|---:|---:|---|
| bluecanvas.ai | 200 | 0.621s | 19.962ms | Healthy |
| ardmorecricket.com | 200 | 0.620s | 17.731ms | Healthy |
| uktradejobs.com | 200 | 0.379s | 18.585ms | Healthy |
| openclawconsultant.co.uk | 200 | 0.876s | 18.927ms | Healthy |

All four sites were reachable with packet loss 0% on the single ping check.

## 2) Google Ads yesterday (account 801-851-4760)
Attempted live via local Google Ads API client:
- Command: `./ads_env/bin/python google_ads_performance_check.py`
- Result: `invalid_grant: Bad Request`

Meaning the refresh token is currently invalid/revoked, so yesterday's spend, clicks, and conversions could not be pulled safely this morning.

Last verified paid snapshot still on file from prior reports:
- Impressions: 1,395
- Clicks: 165
- CTR: 11.83%
- Avg CPC: £1.12
- Cost: £185.57
- Conversions: 0

## 3) Lead pipeline / follow-up status
From `STATE.md` and memory logs:

### Active revenue work
- **James Gorman SEO** — £250/mo, delivery active, upsell path open.
- **HIP / Cormac** — onboarding, target £900/mo recurring. Next action in `STATE.md`: **send onboarding email**.
- **Follow Rabbit AI** — onboarding, target £500/mo recurring.
- **Gavan / Wall** — waiting. Next action in `STATE.md`: **PJ to pitch**.

### Older follow-up candidates still sitting in memory
- **Charlie O'Hara** — marked as waiting for PJ convo.
- **White Oaks** — still sitting as charity / parked opportunity.

### Prospecting backlog
Top local hot leads on file still need action:
- GMcG Lisburn
- Magill Adams Chartered Accountants & Chartered Tax Advisors
- C J Maguire & Co Ltd
- McDaid McCullough Moore Chartered Accountants
- McCleary & Company

Recorded next actions were: research decision makers, create website audits, then sector pitch materials.

## 4) SEO snapshot (GSC clicks/impressions trend)
Attempted live via `python3 gsc_trend_analysis.py`.
- Result: token refresh failed with `invalid_grant: Bad Request`

So live GSC remains blocked.

Last clean verified snapshot on file:

### Blue Canvas
- Clicks: **5**
- Impressions: **441**
- Trend vs previous week: clicks down, impressions up
- Avg position: **8.2**

### UK Trade Jobs
- Clicks: **10**
- Impressions: **792**
- Trend vs previous week: clicks up hard, impressions up hard
- Avg position: **28.6**

## 5) Ahrefs snapshot (browser, profile=openclaw)
Attempted live via browser to `https://app.ahrefs.com/` using profile `openclaw`.

Result:
- Redirected to `https://app.ahrefs.com/sessions-exceeded`
- Message shown: **“You’ve been signed out because this account is being used on another device.”**

So no fresh Site Explorer overview could be pulled.

Last verified / on-file baseline:
| Domain | DR | Ref Domains | Organic Keywords |
|---|---:|---:|---:|
| bluecanvas.ai | 19 baseline, later dashboard snapshot showed 26 | 11 | 0 |
| uktradejobs.com | 0 | 1 baseline, later dashboard snapshot showed 16 | 1 baseline, later dashboard snapshot showed 5 |

Fresh top 3 keyword positions could not be verified live because Ahrefs access is blocked.

## 6) Cron failures in last 24h
From current cron state, one clear failure is inside the last 24h window:
- **cron-watchdog** — last run status `error`, timed out after 120s (`cron: job execution timed out`)

Older failures still on file but outside the last 24h window:
- **SEO: Thursday Content** — timeout on 2026-04-09

## 7) Blocked items needing PJ input
1. **Google re-auth** for Google Ads and GSC.
2. **Ahrefs session cleanup / re-login** so browser automation can get back into Site Explorer.
3. **HIP onboarding email** — external send still needs approval.
4. **Gavan / Wall** — PJ pitch step still outstanding.
5. **Charlie O'Hara / White Oaks** — decide whether to reactivate or kill.

## Bottom line
- All four sites are up.
- Lead pipeline has real revenue work in motion, but a couple of next moves still sit with PJ.
- Morning reporting is partly blind again because Google auth is broken and Ahrefs is locked by another session.
- Only one cron failure is clearly inside the last 24h: `cron-watchdog` timing out.
