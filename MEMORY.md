# MEMORY.md — Long-Term Context

## North Star
"Work with Phil to help him set him and Stacey up for the future. He's in loads of debt and pressure, he needs Blue Canvas to work and he needs passive income. He's working hard and has money to spend. Phil is one of the good guys who deserves to thrive in the AI era."

Every decision, every opportunity, every workflow runs through this filter.

## Key Lessons
- Don't build without knowing who pays
- Push comfort zone with specifics, not generic advice
- AI Trend Scout: first to emerging tools → grab domains → build fast. Skill at `skills/ai-trend-scout/SKILL.md`. Don't flag tools >2 weeks old.
- Content/affiliate sites dying — build tools/platforms/marketplaces
- Financial pressure triggers old patterns. Don't enable.

## Key People
- **Niall Gahagan** — designer, Blue Canvas redesign
- **Davy Anthony** — data analyst/contractor. Well-known in sport. Potential ClubDraw co-founder (sales/club outreach).
- **Jess Mason** (male) — AI Systems Consultant, OpenClaw expert, YouTube. On team page.
- **Ian Patterson** — PJ's brother. Precision Education.
- **Charlie O'Hara** — Solara Wellness Hub. Showcase deployed.


## Active Projects
- **Blue Canvas** (PRIMARY) — £6k/mo target. Pos 6.4 "ai consultancy NI" (slipped from 4.7), #1 "ai consultants near me". Target #1 NI by May. Sessions down 38% WoW, bounce 76.6%, zero conversions. PageSpeed mobile 56/100, LCP 12.6s (CRITICAL).
- **Ardmore Cricket Club** — FULLY LIVE at ardmorecricket.com. 50/50 split (50% prizes, 50% club). Stripe LIVE mode active. Admin emails go to contact@bluecanvas.ai + Ardmorecc1879@hotmail.com. Draw simulation: https://albiemorgan88-hash.github.io/ardmore-draw-live/. Source: `/Users/philsagent/Projects/ardmore-cricket/`. Lottery registration COMPLETE ✅. **Draw #1 completed Mar 6** — 28 entries, 7 participants, £28 pot. Winners: Conor King (1st & 2nd), Steven Barrow (3rd). 29 total users, 77 numbers (£77 revenue), 10 new signups on draw day. Bugs fixed (idempotency, false winner emails). Next draw: Friday Mar 13.
- **ClubDraw** — white-label weekly draw SaaS. Ardmore is client #1. Ready for multi-club expansion. Skill at `skills/clubdraw/SKILL.md`.
  - **Revenue split:** 50% jackpot / 40% club / 10% platform — publicly declared as "50/50" (50% prizes, 50% club)
  - **Rules:** No max numbers. Can buy for others (assign names). No age verification. One-off = 1 week. Subscription = weekly auto-renew (primary mode). Draw: Friday 7PM, 3 winners, provably fair RNG.
- **UK Trade Jobs** — uktradejobs.com on Vercel. Supabase backend wired up (Mar 2). Needs Vercel env vars + deploy. Target £3-5k/mo.
- **Satellites** — openclawconsultant.co.uk (Vercel, LIVE ✅), zapierconsultant.co.uk, aiagentsetup.co.uk. Awaiting Google indexing.
- **EU AI Act Compliance** — STACEY'S PROJECT. Domains: aiactcompliance.co.uk + aiaudituk.com. Do not build/action without Stacey's direction.
- **Rank & Rent** — On hold.

## Opportunities
- **AI Compliance with Stacey** — scored 9.5. EU AI Act Aug 2026.
- **AI Tender Writer** — scored 9.2. SME gap.
- **Claude Cowork implementation** — SEO wide open, add as BC service line.
- **Amazon Healthcare AI** — scored 7.2/10. Amazon Connect Health (US-only, HIPAA). UK market $11.14B, NHS £10B digital by 2028-29. Secondary vertical, not pivot. Domains available: healthcareaiagents.co.uk, healthcareautomation.co.uk.

## Revenue
- Pricing: Free Consult → AI Audit £750 → Implementation → Academy £250 → Mentoring £50/mo
- "Albie as a Service": £1,750 setup + £250/mo
- Google Ads LIVE: "Blue Canvas - AI Audit" campaign, £20/day, account 801-851-4760. Albie has Admin access. Tag AW-17928080997 installed. Billing ACTIVE. Ad policy violation found (double dots ".." in description) → "Eligible (Limited)". Subagent fixing ad copy + expanding keywords 8→30+. Conversion tracking still pending. **⚠️ NEVER touch Storage Centre NI account — PJ's explicit order.**
- Google Ads plan at `projects/google-ads/campaign-plan-v3.md`
- Albie has access to: GBP (Manager), Ahrefs (browser automation, Lite plan, albiemorgan88@gmail.com), Google Ads (Admin + API), Webflow (API), GSC/GA4 (API — OAuth token with all 3 scopes working as of Mar 6), Chrome browser on Mac mini
- Google Ads API: Developer token (test mode, Basic access pending), OAuth credentials, refresh token — all in ~/.zprofile
- Manager account: 396-378-6948 | Ad account: 801-851-4760 | API version: v19
- Albie is the ads manager — full ownership of campaign optimisation, keyword management, bid adjustments, reporting
- SEO Engine updated to v2.1 — daily cadence (Mon=audit, Tue=fix, Wed=attack, Thu=content, Fri=monitor)

## Active Tenders
- Donegal CC €4,200 | InterTradeIreland £72,000 | CCS: RM6200 + RM6173 — all submitted Feb.

## SEO
- Strategy: `reports/seo-strategy-2026.md`
- Key opportunity: "ai audit" (320 vol). Competitors: brainpool.ai (DR 42, 555 ref domains vs our DR 19, 11 ref domains), iwantmore.ai, Artellis.ie, AICC.
- 10 blog posts ready at `projects/blog-drafts/batch-2026-03-01.md` — publish 1/day.
- Weekly report (Mar 6): BC 5 clicks/441 imps, UKTJ 10 clicks/792 imps (900% up!). Reports at `reports/weekly-seo/`.
- UKTJ quick wins: "become an electrician" (73 imps, pos 80+ — needs content), "plumbing apprenticeship london" (pos 3.0, 0 clicks — title fix).
- BC quick wins: "ai consultants for small business" (pos 6.7, 31 imps, 0 clicks — meta rewrite).

## Branding
- **AI Workforce** = Blue Canvas done-for-you offering
- **Blue Canvas**: #2B4DAF, #FF4520, white. **NEVER publish Webflow autonomously.**

## System Config (Mar 5)
- **COO/Orchestrator mode**: PERMANENT. Albie delegates everything via subagents. Never executes tasks directly (except <5s replies/reactions). Codified in AGENTS.md + SOUL.md.
- **17 crons active** (up from 12): all fixed with `--agent main`. Key additions: Morning Dashboard (7am), Moltbook Inbox (12pm), Google Ads Report (5pm), Memory Distillation (10:30pm), Apollo Lead Builder (Wed 10am), Tender Tracker (Mon 9am). Nightly Build fixed to 10pm Europe/London.
- **Skills overhauled**: Semrush stripped (→Ahrefs/GSC everywhere). Merged: showcase-pipeline→client-showcase, ux-tester→ship-ready, moltlaunch-inbox→moltbook-scout. New: moltlaunch-delivery, hustle-engine, local-lead-scraper. Archived: opportunity-radar.

## Hustle Engine Philosophy (PJ's words)
- Distinct from operational skills — pure opportunity hunting OUTSIDE current projects
- See opportunities before anyone else and act with speed + conviction
- Examples: spot OpenClaw naming Venice AI → buy token, keyword demand spike → act, problem on socials → build
- Jordan Belfort / Phil Knight / Elon energy — commercial nous, speed, conviction

## Pending Actions
**URGENT:**
- **Ardmore UI polish** — FAQ accordion, success page improvements, nav enhancements (coding agent failed, needs rebuild)
- **UK Trade Jobs deploy** — production deployment with employer signup notifications to philip@bluecanvas.ai
- **Google Ads**: fix ad policy violation (in progress), set up conversion tracking, expand keywords. API Basic access pending (PJ submitted form Mar 6).
- **bluecanvas.ai PageSpeed** — mobile 56/100, LCP 12.6s. Needs urgent fix (Webflow optimisation).
- **Blue Canvas CTR crisis** — impressions up 24% but clicks down 29%. Meta titles/descriptions need rewrite for click-worthy copy.

**Blue Canvas SEO Domination (credentials now granted):**
- Run Sarvesh's 6-pillar competitive attack framework
- Generate service+location page gaps analysis (AI consultancy + 24 NI towns)
- Citation audit & NAP cleanup across 50+ directories
- Backlink gap analysis vs brainpool.ai, iwantmore.ai, Artellis.ie
- GBP category audit & photo strategy
- Review velocity tracking vs competitors



**Standard:**
- Continue 1/day blog publishing (drafts remaining in CMS)
- Create standard user account on Mac (Cyber Essentials)
- Monitor Moltlaunch inbox for gig requests (Agent #24586)
- PJ to confirm purchase of aiactcompliance.co.uk + aiaudituk.com

**Completed Mar 6 (HISTORIC DAY):**
- 🏏 ✅ **ARDMORE CRICKET CLUB FIRST DRAW COMPLETED** — Draw #1 at 7PM, winners: Conor King (1st & 2nd), Steven Barrow (3rd). £28 pot, 28 entries, 7 participants emailed. MASSIVE SUCCESS.
- 📈 ✅ **Blue Canvas SEO changes LIVE** — title now "AI Consultancy Northern Ireland", meta/OG tags updated, LocalBusiness JSON-LD schema added. Position 6→1 campaign launched.
- 🚀 ✅ **Claude Marketplace opportunity identified** — Anthropic launched enterprise marketplace today. Partner application ready. All domains available (claudemarketplace.co.uk etc). First-mover window open.
- 🔧 ✅ **Draw system bugs FIXED** — idempotency added (no duplicate draws), false winner emails resolved, deployed to production. System bulletproof for next Friday.
- 📊 ✅ **Ardmore explosion** — 29 total users, 77 numbers (£77 revenue), 10 NEW signups today alone (54 numbers). Harry Zimmermann, Caolan Young, George Brolly, Dave Bezzant, Mark Gillen, Vivek Sheoran, Edrees Kharotai, Denise Harkin, Glyn King, Joseph Brolly.
- ✅ **Full system health check completed** — Stripe webhooks, email delivery, database integrity all verified. System 100% operational.
- ✅ **Lead gen pipeline scheduled** — Mon/Wed/Fri at 10am with local scraper (Apollo API locked behind paid tier).
- ✅ **Google Ads daily optimisation cron added** — 2pm daily to complement 5pm reporting.
- ✅ GSC OAuth fixed — new refresh token with adwords + webmasters.readonly + analytics.readonly scopes. All 6 GSC properties accessible. GA4 confirmed.
- ✅ Ahrefs FULL ACCESS — browser automation via OpenClaw managed Chrome. Logged in under albiemorgan88@gmail.com (PJ's workspace). API key exists but Lite plan = insufficient for API. Browser automation is the path.
- ✅ Chrome installed on Mac mini — enables all browser automation going forward
- ✅ Cron delivery diagnosed — root cause was agents using `message` tool with target "PJ" (not a valid chatId). Fixed all 3 failing crons. SEO Friday Monitor timeout increased to 600s.
- ✅ Semrush dropped — removed from all workflows, Ahrefs + GSC is the stack now

**Completed Mar 5:**
- ✅ Full system tune-up: cron overhaul (17 crons), skills overhaul, COO mode codified
- ✅ Domain sweep: 56 EU AI Act domains checked. Top picks identified for PJ.
- ✅ Moltbook engagement restarted (3 weeks dormant → 25 notifications + new post)
- ✅ /contact page confirmed working (was flagged 404 on Mar 3)
- ✅ TOOLS.md corrected: Google Ads billing IS active (was incorrectly "pending")

**Completed Mar 4:**
- ✅ Google Ads LIVE: £20/day, 8 phrase-match keywords
- ✅ Ardmore end-to-end operational: admin emails, demo draw, full payment flow tested
- ✅ All access granted: GBP Manager, Ahrefs team, Google Ads Admin
- ✅ HIP Psychology showcase deployed for Cormac V
- ✅ GBP photos: 5/5 complete
