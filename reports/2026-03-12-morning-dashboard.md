# Morning Dashboard — Thursday 12 March 2026

## 🟢 Site Uptime

| Site | Status | Response Time |
|------|--------|--------------|
| bluecanvas.ai | 301→200 | 504ms (with redirect) |
| ardmorecricket.com | 200 OK | 646ms |
| uktradejobs.com | 200 OK | 800ms |
| openclawconsultant.co.uk | 200 OK | 231ms |

All sites UP. bluecanvas.ai has a 301 redirect (normal — www redirect). uktradejobs.com slightly slow at 800ms.

---

## 📊 Google Ads

**API Status:** Google Ads API returning 500 Internal Error. This is a Google-side issue, not credentials (token obtained successfully, scope confirmed as `adwords`). May be a transient outage.

**Latest available data (from optimization report, cumulative to 11 Mar):**
- **AI Audit Campaign:** 785 imp | 138 clicks | £169.30 spent | 17.58% CTR | £1.23 CPC
- **Conversions: ZERO** — conversion tracking still not firing (PJ hasn't pasted JS snippet into Webflow)
- 13 additional negative keywords added yesterday (alli ai, enterprise ai solutions, etc.)
- **"ai for small business"** still QS=1 — needs pausing
- **Overspend trend:** Was hitting £35/day on a £20 budget

**⚠️ Critical:** Still ZERO conversions after ~£170+ total spend. Tracking snippet NOT yet pasted into Webflow Footer.

---

## 🎯 Lead Pipeline

### Active Prospects
| Lead | Status | Next Step |
|------|--------|-----------|
| James Gorman (Derry estate agent) | Showcase built 9 Mar | Awaiting PJ follow-up |
| Tim Clark (Recruitment) | Showcase built 10 Mar | WhatsApp message ready to send |
| Charlie O'Hara (Solara Wellness) | Showcase deployed | Follow-up needed |

### Lead Gen Pipeline (27 total from 9 Mar scrape)
- **15 hot leads (score 7+):** Derry salons (6), Enniskillen restaurants (4), solicitors, dental, estate agents
- **Top opportunity:** Derry salons — almost all Facebook-only, no websites. Batch package opportunity.
- **Apollo API key EXPIRED** — needs regeneration at Apollo.io

### Cron Issue
- Lead Gen Pipeline cron (`1fd43042`) errored on last run (19h ago). Likely related to Apollo API key expiry.

---

## 📈 SEO Snapshot

**GSC API:** Insufficient OAuth scopes — the Google Ads refresh token only covers `adwords` scope, not `webmaster` scope. GSC needs separate authentication or the refresh token needs to be regenerated with both scopes.

**No fresh GSC data available this morning.** Previous data would need to be pulled from GSC web UI manually.

---

## 🔍 Ahrefs

**API Status:** "Insufficient plan" error on all endpoints. The Ahrefs API tier doesn't support `domain-rating` or `organic-keywords` endpoints. May need plan upgrade or different endpoint.

**Last known (from MEMORY.md):**
- bluecanvas.ai — DR 19 (vs competitor brainpool.ai DR 42)
- 11 referring domains

---

## ⚙️ Cron Health

**21 cron jobs total. 4 in error state:**

| Job | Schedule | Last Error |
|-----|----------|------------|
| Lead Gen Pipeline (Apollo) | Mon/Wed/Fri 10:00 | 19h ago — likely Apollo API key expired |
| Weekly Money Scout (X/Twitter) | Sun 09:00 | 4 days ago |
| SEO: Tuesday Fix | Tue 09:00 | 2 days ago |
| SEO: Wednesday Attack | Wed 09:00 | 22h ago |

**17 jobs healthy** including: Morning Dashboard, Security Scan, AI Trend Scout, Google Ads Daily, Nightly Build, Memory Distillation, Ardmore Friday Draw, Tender Tracker.

---

## 🚧 Blocked / Needs PJ Input

1. **🔴 Google Ads conversion tracking** — PJ needs to paste JS snippet into Webflow Footer Code + publish. £170+ spent with ZERO tracked conversions.
2. **🔴 Landing page fixes** — LCP 12.6s, 7 font families, QS 1/10. Fix plan at `reports/google-ads/landing-page-fix-plan.md`.
3. **🟡 5 blog drafts** in Webflow CMS — PJ needs to add images and publish.
4. **🟡 CDP wallet transfer** — Python SDK broken on 3.14. Try Node.js SDK next.
5. **🟡 Apollo API key** — expired/revoked, blocking lead gen pipeline cron.
6. **🟡 Tim Clark showcase** — WhatsApp message drafted, waiting for PJ to send.
7. **🟡 Ireland OGP AI PMC** — pre-market consultation on eTenders. #1 tender priority.

---

## 📋 Today's Priorities (Suggested)

1. **Paste conversion tracking snippet** → immediate ROI on ad spend
2. **Fix landing page** (fonts, LCP) → improve Quality Scores
3. **Send Tim Clark WhatsApp** → potential revenue
4. **Regenerate Apollo API key** → unblock lead gen cron
5. **Ardmore Draw #2** tomorrow (Fri 13 Mar) — £165 pot, ensure everything's ready
