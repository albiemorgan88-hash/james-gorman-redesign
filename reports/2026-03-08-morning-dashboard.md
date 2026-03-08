# Morning Dashboard — Sunday 8 March 2026

## 1. Site Uptime ✅
| Site | Status | Code | Response |
|------|--------|------|----------|
| bluecanvas.ai | ✅ UP | 301→www | 0.36s |
| ardmorecricket.com | ✅ UP | 200 | 0.29s |
| uktradejobs.com | ✅ UP | 200 | 1.35s ⚠️ |
| openclawconsultant.co.uk | ✅ UP | 200 | 0.48s |

**Note:** uktradejobs.com sluggish at 1.35s — worth watching.

## 2. Google Ads — ⚠️ API Error
Google Ads API returning **500 Internal Server Error** on all queries (v18 + v19). Google-side issue. Cannot pull yesterday's data programmatically.

**Known issue from memory:** Only ~£0.60 spent in ~7 days due to policy violation (double dots ".." in ad copy throttling delivery). This remains **URGENT** — PJ needs to fix the ad copy or greenlight Albie to do it via browser.

## 3. Lead Pipeline
| Lead | Status | Action |
|------|--------|--------|
| Tim Clarke | CV Screener demo ready | PJ handling personally — needs follow-up |
| Joe Abrahams | Readiness Scorecard demo built | No recent contact — PJ needs to nudge |

Apollo Lead Builder cron runs Wednesdays (next: Mar 11). No other active prospects.

## 4. GSC / SEO — ⚠️ Auth Scope Issue
OAuth token missing `webmasters.readonly` scope — 403 on GSC API. Token was authorized for Google Ads only.

**Fix needed:** Re-run OAuth consent with scope `https://www.googleapis.com/auth/webmasters.readonly` to get a combined refresh token.

**From memory:** Impressions up 24% but clicks down 29% → CTR crisis. Meta titles/descriptions need rewrite. Mobile PageSpeed 56/100, LCP 12.6s.

## 5. Ahrefs — ⏱️ Timed Out
Browser automation timed out navigating Ahrefs. Likely login/session issue with openclaw browser profile. Manual check recommended.

## 6. Cron Status ✅
18 crons registered — **zero failures** in last 24h. All showing `ok` or `idle`.

## 7. Blocked Items Needing PJ
| Item | Priority |
|------|----------|
| Google Ads ".." policy violation | 🔴 URGENT — ads barely spending |
| Google Ads 5-point battle plan | 🟡 Sent Mar 6, awaiting PJ's direction |
| Google Ads API Basic access | 🟡 Submitted Mar 6, pending Google |
| Domain purchases (aiactcompliance.co.uk, aiaudituk.com) | 🟡 Confirm purchase |
| Joe Abrahams follow-up | 🟡 PJ to reach out |
| Ardmore FAQ accordion/success page | 🟠 Coding agent failed, needs rebuild |
| bluecanvas.ai PageSpeed (mobile 56) | 🟠 LCP 12.6s, needs Webflow optimisation |
| Blue Canvas CTR crisis | 🟠 Meta titles/descriptions need rewrite |
| GSC OAuth scope | 🟡 Re-auth needed for API access |
