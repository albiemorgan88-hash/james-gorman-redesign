# SYSTEMS.md — Technical Infrastructure Map

> Static reference. Update whenever infra, deploys, APIs, or source locations change.
> Last verified: 2026-03-22

---

## Blue Canvas (bluecanvas.ai)
- **What:** Primary AI consultancy website
- **Platform:** Webflow CMS
- **Domain:** bluecanvas.ai / www.bluecanvas.ai
- **Webflow Site ID:** 67e4825704e6baf1d5246ef6
- **Blog Collection ID:** 67e4825804e6baf1d5246f5b
- **Deployment:** Webflow publish (PJ or Albie via dashboard/API)
- **API Token:** $WEBFLOW_API_TOKEN in ~/.zprofile
- **Ahrefs Project ID:** 9541038
- **Google Ads Account:** 801-851-4760 (Manager: 396-378-6948)
- **GA4:** 485727316
- **GSC:** Verified
- **Known Issues:** Health score 69, 5 broken pages (301 redirects added), conversion tracking needs proper /thank-you page
- **Owner:** SCOUT monitors, WRITER drafts blogs, PJ publishes

## OpenClaw Consultant (openclawconsultant.co.uk)
- **What:** Satellite lead gen site for Blue Canvas
- **Platform:** Next.js on Vercel
- **Code:** ~/.openclaw/workspace/projects/openclaw-consultant/
- **Domain:** openclawconsultant.co.uk / www.openclawconsultant.co.uk
- **Vercel Project:** albert-morgans-projects/openclaw-consultant
- **Deployment:** `source ~/.zprofile && cd projects/openclaw-consultant && npx vercel --token "$VERCEL_TOKEN" --yes --prod`
- **Ahrefs Project ID:** 9541039
- **Google Ads:** Paused (was up to £20/day)
- **Known Issues:** Health score 85 (-15), DR 0, 1 referring domain
- **Owner:** WRITER deploys autonomously

## UK Trade Jobs (uktradejobs.com)
- **What:** Long-term trades career site
- **Platform:** Next.js on Vercel
- **Code:** ~/.openclaw/workspace/projects/uk-trade-jobs/
- **Domain:** uktradejobs.com
- **Vercel Project:** albert-morgans-projects/uk-trade-jobs
- **Deployment:** `source ~/.zprofile && cd projects/uk-trade-jobs && npx vercel --token "$VERCEL_TOKEN" --yes --prod`
- **Database:** Supabase (smhzgkvatlwbaxlyhnbm.supabase.co) — shared instance
- **Data file:** src/data/guides.ts (career guides array)
- **Ahrefs Project ID:** 9541040
- **Known Issues:** 33 broken links (+31 from content blast), health score 98
- **Owner:** WRITER deploys autonomously

## Ardmore Cricket (ardmorecricket.com)
- **What:** Club website + ClubDraw weekly lottery
- **Platform:** Next.js on Vercel
- **Code:** ~/.openclaw/workspace/projects/ardmore-cricket/
- **Domain:** ardmorecricket.com / www.ardmorecricket.com
- **Vercel Project:** albert-morgans-projects/ardmore-cricket
- **Deployment:** `source ~/.zprofile && cd projects/ardmore-cricket && vercel --prod --yes`
- **Database:** Supabase (smhzgkvatlwbaxlyhnbm.supabase.co)
- **Payments:** Stripe (test mode) — keys in .vercel/.env.production.local
- **Email:** Resend (draw@ardmorecricket.com) — key in .vercel/.env.production.local
- **Draw Secret:** In .vercel/.env.production.local as DRAW_SECRET
- **Admin Panel:** ardmorecricket.com/admin (auth: philpatterson85@gmail.com, contact@bluecanvas.ai, ardmorecc1879@hotmail.com)
- **Cron - Draw:** Fridays 7PM (ID: ce4b9fb2-8ea4-454c-91c2-3e8b4cf763c6)
- **Cron - Reconciliation:** Fridays 7:15PM (ID: 7d289f89-94b0-42c6-94a3-5a83b853c77d)
- **Pot API:** /api/pot (Stripe = source of truth, excludes past_due)
- **Known Issues:** One-off vs recurring pot calculation needs more work with PJ
- **Owner:** DREW manages operations, Albie deploys

## James Gorman Property (jamesgormanproperty.com)
- **What:** Client SEO — £250/month retainer
- **Platform:** Wix
- **Access:** Browser + Wix API
- **Ahrefs:** Tracked (browser access)
- **Skill file:** ~/.openclaw/workspace/skills/james-gorman-seo/SKILL.md
- **Changelog:** ~/.openclaw/workspace/skills/james-gorman-seo/changelog.md
- **Known Issues:** Week 3 pending
- **Owner:** JAMES manages, reports every Friday

## Showcase Redirect (audit.bluecanvas.ai)
- **What:** Maps email → personalised showcase URL
- **Platform:** Vercel
- **Code:** ~/.openclaw/workspace/projects/biz-dev/blue-canvas/showcase-redirect/
- **Vercel Project:** albert-morgans-projects/showcase-redirect
- **Owner:** HUNTER uses for Apollo outreach

## GitHub Pages Showcases
- **What:** Static HTML client demos
- **Deploy to:** albiemorgan88-hash.github.io/showcase-[name]/
- **Repo:** github.com/albiemorgan88-hash
- **Owner:** HUNTER creates, Albie reviews

---

## Shared Services

### Supabase
- **URL:** https://smhzgkvatlwbaxlyhnbm.supabase.co
- **Used by:** Ardmore (draw, subscribers, payments), UKTJ (job postings, employers)
- **Anon key:** In project .env files
- **Service role key:** In .vercel/.env.production.local files
- **Note:** Single shared instance for both projects

### Stripe
- **Mode:** Test
- **Used by:** Ardmore draw payments
- **Key location:** projects/ardmore-cricket/.vercel/.env.production.local

### Resend
- **From:** draw@ardmorecricket.com
- **Key location:** projects/ardmore-cricket/.vercel/.env.production.local
- **Used by:** Draw results emails

### Ahrefs
- **Browser login:** albiemorgan88@gmail.com (SSO)
- **API token:** $AHREFS_API_TOKEN in ~/.zprofile
- **Note:** API returns empty for some endpoints. Browser access more reliable.

### Apollo
- **Access:** API + browser
- **Used by:** HUNTER for lead gen and outreach

### Moltbook
- **API:** https://www.moltbook.com/api/v1
- **Credentials:** ~/.config/moltbook/credentials.json
- **Karma:** 141 (as of 2026-03-21)

### Vercel
- **Account:** albiemorgan88-hash (Hobby plan)
- **Token:** $VERCEL_TOKEN in ~/.zprofile

---

## Environment Variables
All keys stored in `~/.zprofile`. Source before any API call:
```bash
source ~/.zprofile
```
If keys still fail after sourcing (401/403), token has likely expired — escalate immediately.

---

## Cron Jobs (Active)
| Name | Schedule | ID | Status |
|---|---|---|---|
| Ardmore Friday Draw | Fri 7PM | ce4b9fb2 | OK |
| Post-Draw Reconciliation | Fri 7:15PM | 7d289f89 | OK |
| API Key Health | Daily 8:10AM | e44ae78e | OK (fixed false alarms) |
| Morning Dashboard | Daily 7AM | 871cd148 | OK |
| Google Ads Daily | Daily 2PM | 765d0796 | OK |
| Memory Distillation | Daily 10:30PM | 21f7d923 | OK |
| Moltbook Inbox | Daily 12PM | a7663587 | OK |
| ClawMart Sales | Daily 10AM | d65c02c4 | OK (needs verification fix) |
