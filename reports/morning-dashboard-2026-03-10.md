# Morning Dashboard — Tuesday 10 Mar 2026

## 1. Site Uptime
| Site | Status | Response Time |
|------|--------|--------------|
| bluecanvas.ai | ✅ UP (301→200) | 0.53s |
| ardmorecricket.com | ✅ UP (200) | 0.56s |
| uktradejobs.com | ✅ UP (200) | 1.41s |
| openclawconsultant.co.uk | ✅ UP (200) | 0.90s |

## 2. Google Ads — Yesterday (9 Mar)
- **Campaign:** Blue Canvas - AI Audit
- **Spend:** £29.97
- **Clicks:** 14
- **Impressions:** 128
- **CTR:** 10.9% (excellent)
- **CPC:** ~£2.14
- **Conversions:** 0
- ⚠️ Still "Eligible (Limited)" due to double-dot ad policy violation. PJ must fix manually.
- ⚠️ Daily Report & Optimisation crons ran OK but delivery failed (not-delivered)

## 3. Lead Pipeline
- **James Gorman** — Derry estate agent. Showcase + website mockups built Mar 9. Pitch drafted. NEEDS FOLLOW-UP.
- **Tim Clark** — Recruitment agency. Showcase built Mar 10 (notes-to-cover-letter automation). NEEDS FOLLOW-UP.
- **Charlie O'Hara** — Solara Wellness Hub. Showcase deployed. Status unknown.
- Lead Gen Pipeline cron TIMED OUT on Mar 7 (600s limit exceeded). Next run: Wed 12 Mar.

## 4. SEO Snapshot
- GSC API: OAuth token expired/missing — returned 401 UNAUTHENTICATED
- ⚠️ GSC_ACCESS_TOKEN needs refresh. Last confirmed working: Mar 6.
- Monday SEO Audit ran successfully yesterday
- Tuesday SEO Fix cron scheduled for 09:00 today

## 5. Ahrefs Data (Live from Site Explorer)

### bluecanvas.ai
- **DR:** 19 (+18 growth!)
- **Backlinks:** 16 (+7 new) | 12 referring domains (+3)
- **Organic Keywords:** 0 (not yet ranking organically)
- **Top 3 Positions:** 0
- **Crawled Pages:** 205 (178 OK, 13 x 404s to fix)
- **AI Citations:** 1 ChatGPT citation (-3 from last month)

### uktradejobs.com
- **DR:** 0 (brand new domain)
- **Backlinks:** 3 (+3 new) | 3 referring domains (+3)
- **Organic Keywords:** 2 (+2, all new!) — both informational, GB-focused
- **Top 3 Positions:** 0
- **Crawled Pages:** 902 (901 OK, near-perfect)
- **AI Citations:** 2 ChatGPT citations (+2 new!) — 1 cited page
- **Competitors identified:** locksmiths-training.co.uk, nationalcareers.service.gov.uk, checkatrade.com, indeed.com

## 6. Cron Health (19 jobs)
| Status | Jobs |
|--------|------|
| ✅ Healthy | 15 |
| ❌ Failed | 2 |
| ⚠️ Delivery issues | 2 |

**Failures:**
- **Lead Gen Pipeline** — timed out (600s). Consecutive errors: 1. Next run: Wed.
- **Weekly Money Scout** — "Message failed" error. Consecutive errors: 1. Next run: Sun.

**Delivery failures (ran OK but didn't deliver to Telegram):**
- Google Ads Daily Report (5pm)
- Google Ads Daily Optimisation (2pm)
- Ardmore Friday Draw
- SEO Friday Monitor

## 7. Blocked Items Needing PJ
1. **🔴 Google Ads double-dot fix** — ads running at "Eligible (Limited)". Manual edit needed in Google Ads UI to remove ".." from ad copy. Blocking full ad delivery.
2. **🟡 GSC OAuth token refresh** — token expired, breaking SEO data pulls. Needs re-auth.
3. **🟡 James Gorman pitch** — showcase + mockups ready. Need PJ to send/approve outreach.
4. **🟡 Tim Clark pitch** — recruitment showcase ready. Need PJ to send/approve outreach.
5. **🟡 Google Ads delivery failures** — 2 crons ran but didn't deliver to Telegram. May need cron config check.
6. **🟢 Ardmore Draw #2** — Friday 13 Mar at 7pm. Auto-scheduled. No action needed unless promoting.
