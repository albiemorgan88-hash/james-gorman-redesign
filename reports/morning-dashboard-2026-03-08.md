# Morning Dashboard — Sunday 8 March 2026

## 1. Site Uptime
| Site | Status | Response Time |
|------|--------|---------------|
| bluecanvas.ai | ✅ 200 | 0.40s |
| ardmorecricket.com | ✅ 200 | 0.14s |
| uktradejobs.com | ✅ 200 | 0.20s |
| openclawconsultant.co.uk | ✅ 200 | 0.13s |

## 2. Google Ads (Yesterday — 7 Mar)
⚠️ **API Permission Error** — Google Ads API returning `USER_PERMISSION_DENIED`. OAuth token may need re-auth or the manager/client account linking needs verification. This has been flagged as a blocked item.

## 3. Lead Pipeline
No active prospects or follow-ups found in memory. Pipeline empty — lead gen cron runs Mon/Wed/Fri.

## 4. SEO / GSC Snapshot
⚠️ **GSC API Scope Error** — OAuth token lacks `searchconsole` scope. The refresh token used is from Google Ads OAuth flow and doesn't include GSC permissions. Needs separate OAuth consent with webmasters scope.

## 5. Ahrefs Data

### bluecanvas.ai
- **DR: 19** (+18 last month — strong growth)
- Backlinks: 15 (+6), Referring domains: 11 (+2)
- Organic keywords: 0 (Top 3: 0)
- Organic traffic: 0
- AI Citations: ChatGPT 1 (down 3), others 0
- Crawled pages: 205 (13 × 404s, 1 × 5xx — needs cleanup)

### uktradejobs.com
- **DR: 0** (brand new domain)
- Backlinks: 2 (+2), Referring domains: 2 (+2)
- Organic keywords: 2 (+2, all non-branded/informational)
- Top 3 positions: 0
- Organic traffic: ~0
- AI Citations: ChatGPT 1 (+1)
- Crawled pages: 700 (99.9% 200 OK — clean)
- Competitors identified: locksmiths-training, tradeskills4u, skillstg

## 6. Cron Failures (Last 24h)
| Cron | Status | Last Run |
|------|--------|----------|
| Weekly Money Scout (X) | ❌ ERROR | 4h ago |

All other crons (Google Ads Opti, Google Ads Report, Memory Distillation, Security Scan, AI Trend Scout, API Key Health, Cron Watchdog, Moltbook Inbox) ran OK.

## 7. Blocked Items Needing PJ's Input
1. **Google Ads API access broken** — `USER_PERMISSION_DENIED`. Need to re-auth OAuth or check manager account linking.
2. **GSC API needs separate OAuth** — Current token doesn't have Search Console scope. Need to run OAuth consent flow with `https://www.googleapis.com/auth/webmasters.readonly` scope.
3. **Weekly Money Scout cron failing** — Needs investigation (X/Twitter API issue likely).
4. **bluecanvas.ai has 13 × 404 pages** — Should clean up or redirect.
5. **No active lead pipeline** — Next lead gen run is Monday. Consider manual outreach this week.
