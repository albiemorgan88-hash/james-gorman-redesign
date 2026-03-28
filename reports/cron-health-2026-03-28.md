# Cron Health Report — March 28, 2026

**Generated:** 09:00 GMT Saturday, 28 March 2026

## Summary
- ✅ **19 Healthy** — running on schedule, completed OK
- ⚠️ **2 Warning** — delivery issues or minor concerns  
- ❌ **5 Failed** — need attention
- 🔄 **0 Stale** — all crons active

**Total Crons:** 26

## Failed Crons (❌)

| Cron Name | Last Run | Status | Issue | Action Needed |
|-----------|----------|--------|-------|---------------|
| **cron-watchdog** | 27 Mar 17:07 | ❌ Failed | Rate limit error | Currently running (self-healing) |
| **ClawMart Sales Check** | 26 Mar 17:07 | ❌ Failed | Outbound not configured for Telegram | Fix channel config |
| **ClawRoster Daily** | 26 Mar 17:00 | ❌ Failed | Outbound not configured for Telegram | Fix channel config |
| **Google Ads Daily Optimisation** | 26 Mar 14:00 | ❌ Failed | Outbound not configured for Telegram | Fix channel config |
| **Ardmore Post-Draw Reconciliation** | 27 Mar 19:15 | ❌ Failed | Outbound not configured for Telegram | Fix channel config |

## Warning Crons (⚠️)

| Cron Name | Last Run | Issue |
|-----------|----------|-------|
| **SEO: Friday Monitor** | 27 Mar 09:00 | Rate limit error, but generally healthy |
| **Google Ads Daily Report** | 25 Mar 17:00 | AI service overloaded errors |

## Healthy Crons (✅)

All remaining 19 crons are running normally:

**Daily Operations (All Green):**
- Morning Dashboard
- Security Scan & Fix  
- AI Trend Scout (morning)
- API Key Health Check
- Moltbook Inbox Check
- Moltbook Daily Engagement
- AI Trend Scout (afternoon)
- AI Trend Scout (evening)
- Nightly Build
- Memory Distillation

**Weekly Operations (On Schedule):**
- Weekly Money Scout (Sundays)
- Tender Tracker Weekly (Mondays)
- SEO Monday Audit
- Apollo Lead Gen (Mon/Wed/Fri)
- SEO Tuesday Fix  
- Local Lead Scraper (Tue/Thu)
- SEO Wednesday Attack
- SEO Thursday Content
- Ardmore Friday Draw

## Key Patterns

### Telegram Delivery Issues
**Major issue:** 4 crons failing with "Outbound not configured for channel: telegram"
- ClawMart Sales Check
- ClawRoster Daily  
- Google Ads Daily Optimisation
- Ardmore Post-Draw Reconciliation

This suggests a Telegram bot configuration issue affecting multiple crons.

### Rate Limits
- Multiple crons hitting API rate limits
- Most are temporary and auto-recover
- cron-watchdog itself hit rate limit yesterday

### Business Impact
- **Low:** Core business monitoring still functional
- **SEO operations:** All 5 weekly SEO crons healthy
- **Lead generation:** Apollo and Local Scraper both working
- **Analytics:** Morning Dashboard and key metrics flowing
- **Security:** Daily security scans operational

## Recommendations

1. **URGENT:** Fix Telegram outbound configuration — 4 crons affected
2. **Monitor:** Google Ads API usage to prevent quota exhaustion  
3. **Consider:** Staggering cron schedules to reduce API burst load
4. **Review:** Rate limit handling for better resilience

## Next Steps

1. Investigate Telegram channel configuration
2. Manual retry of failed crons after config fix
3. Monitor rate limit patterns over next 24h
4. Consider timeout increases for consistently slow jobs

---

**Next Watchdog:** Tomorrow 09:00 GMT