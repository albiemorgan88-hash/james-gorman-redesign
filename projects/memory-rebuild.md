# Memory Rebuild — Extracted from Telegram Chat Export

**Source:** 3 Telegram chat HTML exports (~88K lines, ~10.7K lines of text content)
**Period covered:** Approximately 20 Feb 2026 – 26 Feb 2026
**Extracted:** 26 Feb 2026

---

## 1. Projects Mentioned

### Blue Canvas (bluecanvas.ai) — PRIMARY
- **What:** AI consultancy, Derry, Northern Ireland. Founded March 2025. Solo founder.
- **URL:** https://www.bluecanvas.ai (also https://bluecanvas-staging.webflow.io for staging)
- **Tech:** Webflow (hosted), custom schema markup, Clarity analytics (vf82niitxf), GA4 (485727316), GSC verified
- **Goal:** £6k/month net → 5-10M exit. ~£60k debt, breakeven £3.1-3.5k/month
- **Pricing:**
  - Free Consultation
  - AI Audit: £750 (half-day)
  - Implementation: custom quoted
  - Academy: £250
  - Mentoring: £50/mo
  - "Albie as a Service": £1,750 setup + £250/mo
- **Brand colours:** #2B4DAF (blue), #FF4520 (orange/red), white
- **Niall Gahagan** did site redesign — went live around 23 Feb 2026
- **Schema markup:** ProfessionalService, Organization, FAQPage (8 Qs), WebSite with SearchAction — all in Webflow head code
- **Address in schema:** 11 Ebrington Square, BT47 6FA (but corporate address updated to 20c Balliniska Road, BT48 0NA)
- **Phone in schema:** +447828699027 (but business phone updated to 07935217762)
- **Status:** Blog title template fixed from "Blue Canvas – Scale with AI Consultancy | Blogs - {name}" to "{name} | Blue Canvas". 19 blog post SEO titles updated via CMS API (staged). 84 blog meta descriptions written (staged). 8 page meta titles rewritten for CTR.
- **SEO Performance (as of 24-25 Feb 2026):**
  - "ai consultancy northern ireland" — pos 6.3-7.2 (was 4.7 earlier)
  - "ai consultants near me" — pos 1.0
  - "ai consulting" — pos 9 (jumped from 21)
  - "ai consulting agency" — pos 8.1 (jumped from 12)
  - 100+ impressions/week, 0 clicks (CTR problem — addressed with meta fixes)
  - Newsletter.co.uk article ranking #1 for "ai consultancy northern ireland"
  - Authority score: 2
- **Calendly link:** https://calendly.com/contact-bluecanvas/initial-consultation
- **Google Business Profile:** Updated with 20c Balliniska Road, BT48 0NA, Londonderry; phone 07935217762
- **Cyber Essentials:** Certified (completed 25 Feb 2026 via IASME portal). Badge added to OpenClaw Consultant footer.
- **Professional Indemnity Insurance:** Done (completed ~21 Feb 2026)
- **Google Ads:** Campaign plan v3 ready. £15/day budget (~£450/mo). 25 high-intent keywords across 2 ad groups (Local + Industry-Specific). Not yet launched — waiting for new site.
- **Blog:** 95+ posts, most had no SEO titles or meta descriptions until fix on 24-25 Feb
- **97 blog posts** mentioned earlier
- **Webflow publishing:** Manual only — Albie cannot publish autonomously, only stage changes via API
- **Custom code blocks:** Clarity tracking, 4 schema blocks, Finsweet attributes, Calendly widget, contact modal

### UK Trade Jobs (uktradejobs.com)
- **What:** Job board for UK skilled trades. Target: £3-5k/mo by month 18-24.
- **URL:** https://uktradejobs.com
- **Tech:** Next.js on Vercel, GA4 + GSC connected
- **Brand:** Navy #1A2744, Amber #F59E0B
- **Status:** Live with 3,009 real scraped jobs (from Reed.co.uk) + 45 career/location guides
- **Content pages built:** 35+ career guides including apprenticeship guides, salary comparisons, CSCS card guide, women in trades, trade vs uni, renewable energy trades, tools of the trade, UK trade salary calculator, interview tips + 10 location pages (Edinburgh, Leeds, Bristol, Liverpool, Newcastle, Cardiff, Southampton, Nottingham, Sheffield, Leicester)
- **AI CV Builder:** Live at /cv-builder — 4-step flow with email capture gate, transferable skills mapping, trade-specific data for 5 key trades
- **Employer sign-up flow:** Built and deployed at /employers/signup, /employers/login, /employers/dashboard, /employers/post-job — currently using localStorage (needs Supabase for production)
- **SEO fixes deployed 24 Feb:**
  - Schema domain fixed (was pointing to uktradejobs.co.uk instead of .com)
  - Canonical tags added
  - Sitemap expanded from 51 → 3,072 URLs
  - OG image added (Edge OG generation)
  - JobPosting schema already existed
- **Sitemap resubmitted** by PJ in GSC
- **GSC data (25 Feb):** "skilled trades jobs nottingham" pos 18, "trade career uk" pos 39.5 — early but in the index

### ClubDraw / Ardmore Cricket Club
- **What:** White-label weekly numbers draw platform for sports clubs. Ardmore Cricket Club is first customer.
- **Demo URL:** https://albiemorgan88-hash.github.io/clubdraw-demo/
- **Club:** Ardmore Cricket Club, The Bleach Green, Derry. Founded 1879. NW Senior Premier League.
- **Players found:** 17 real players — Zimmermann, Gaur (captain), Dharm Singh, the Brollys, etc. + 2 new signings: Kasun Abeyrathne (Sri Lanka) & Matt Cuffe (South Africa). Conor Brolly's Ireland U15 cap (3-38 vs Netherlands).
- **Demo site:** 11 pages — Home, Fixtures, Scorecards, Squad, Draw, Youth, History, News, Membership, Gallery, Contact. Ardmore branding (navy/sky blue). Real honours: Senior Cup '94, League Champions 2023.
- **Draw flow:** Sign up → pick 5 numbers → Stripe checkout (mock) → animated draw → WhatsApp notification mockups → account dashboard
- **Business model:** 10% platform fee (PJ eats Stripe costs). Club gets 90% of pot. Originally discussed at 7.5%, PJ approved 10%.
- **Revenue projection:** 50 members × £5/week = £250 pot → club gets £225, PJ gets £25/week per club
- **Licence needed:** Society Lottery Registration with Derry City & Strabane District Council (~£35/year). The club registers, not ClubDraw.
- **Skill built:** ClubDraw skill saved with onboarding process, Stripe Connect flow, draw algorithm, scaling projections
- **Status:** Demo stage. Ardmore committee agreed. PJ plans to take to market. Draft message to committee was prepared.
- **Next steps:** Connect Stripe (need Supabase + Stripe Connect), disseminate, lottery registration

### Satellite Sites (3)
1. **openclawconsultant.co.uk** — On Vercel. 7→11 pages. Redesigned to match new Blue Canvas look (24 Feb). Already ranking pos 3.7 for "openclaw consultant" (how Tim Clarke found PJ). Calendly plugged in. Cyber Essentials badge in footer. **Status as of 26 Feb: SSL/site was DOWN — needs attention.**
2. **zapierconsultant.co.uk** — On Webflow. GSC verified, sitemap submitted. "zapier consulting" pos 10, "zapier integration consultant" pos 8. Meta title/description too long. Duplicate tags from Webflow.
3. **aiagentsetup.co.uk** — On Webflow. GSC verified, sitemap submitted. No data in GSC yet. **Has OpenClaw Consultant landing page content embedded on it — content confusion.** Same issues as Zapier site.
- **Plan:** Move last 2 satellites to Vercel (save $46/mo). Blocked on PJ doing DNS swap.

### Mission Control Dashboard
- **URL:** https://albiemorgan88-hash.github.io/mission-control/
- **What:** Dark theme dashboard with project cards, task board (Pending/Ongoing/Done), action items. Updated with Cyber Essentials + Insurance moved to Done.
- **Also:** Fresh dashboard built at projects/dashboard.html on 26 Feb with 6 project cards, interactive checklists, tenders section.

### Rank & Rent (Aesthetics, Derry)
- **Status:** Parked at B+ grade. Derry side project only. Cron was killed.

---

## 2. People

### Phil Patterson (PJ)
- 37, Derry, NI. Partner: Stacey ("Chef"/"Gruffalo" — he's "Poach")
- Direct, informal, sweary. 8yr gambling recovery. Quitting smoking. Propranolol 40mg PRN.
- Garmin tracking sleep/HRV/body battery
- Emails: philpatterson85@gmail.com (personal), contact@bluecanvas.ai (business)
- Phone: 07935217762 (new business phone, O2 burner SIM on mum's old iPhone)
- Corporate address: 20c Balliniska Road, BT48 0NA, L'Derry
- Devices: Mac mini (macOS Sequoia 15.3), MacBook Air (macOS Sequoia 15.3), iPhone 17 (iOS 18.3)
- Home broadband: BT Smart Hub
- Browser: Safari 26.3, Chrome 134
- Password manager: iCloud Keychain
- Apple ID for business phone: contact@bluecanvas.ai
- Vercel account signed up with: contact@bluecanvas.ai (can't invite as team — free plan)
- Tailscale: philpatterson85@gmail.com. Mac mini Tailscale IP: 100.113.233.3

### Stacey (Partner)
- "Chef"/"Gruffalo". Low WBC — flag health stuff.
- Was at hospital getting a mole checked (22 Feb)
- **Wants to get into AI risk and compliance** — PJ passed the AI Compliance idea to her

### Niall Gahagan
- Designer. Did the Blue Canvas site redesign (went live ~23 Feb 2026)

### Jess Mason
- AI Systems Consultant, OpenClaw expert. On Blue Canvas team page. Male.

### Ian Patterson
- PJ's brother. Precision Education.

### Charlie O'Hara
- Solara Wellness. Loved her showcase.

### Tim Clarke
- **First paying client!** £750 for half-day custom session.
- Managing Director of Quay Group (Poole/Watford)
- Specialist recruitment for superyachts and ultra-high-net-worth families
- Previously Quay Crew, expanded mid-2025 into 4 divisions: yacht crew, private staff, family office, shore-side
- Co-founded with Caroline Clarke
- 2,000+ placements, 350+ superyachts
- Found Blue Canvas through OpenClaw Consultant satellite site
- Tim Clarke prep kit built: research notes, branded pre-session brief PDF, reusable half-day agenda template PDF

### Davy Anthony
- Received Apollo API key from PJ: DDgy7UBUC-7eVvMNE9k06g
- Leading leads for "done for you" AI services with Friel
- Apollo fields: api/v1/contacts/search, api/v1/accounts/search, api/v1/people/match

### Friel
- Working with Davy on leads for managed AI services

### Rachit Gaur
- Captain, Ardmore Cricket Club

### Joe Claw
- A lead from satellite sites (mentioned in passing)

### Ben Archer
- IASME Cyber Essentials assessor

---

## 3. Decisions Made

- **ClubDraw platform fee:** Changed from 7.5% to **10%** — PJ eats Stripe costs. "You get 90%, we handle everything."
- **Crypto trading:** PJ suggested trading with the wallet for 5% daily returns. Albie pushed back (gambling territory, 8yr recovery). PJ agreed "that's fair."
- **Moltbook strategy:** Lurking only initially. First post published 25 Feb in /builds submolt.
- **Moltlaunch:** Registered as Agent #19170 with no-token mode (zero fees). Strict security rules: no token approvals, no escrow, no USDC spending.
- **Backlinks:** PJ was on the fence about buying. Albie recommended NOT yet — authority score too low (2). Better to fix CTR first, use budget for Google Ads.
- **Domain buying:** On hold until satellites rank. Trend scout logs opportunities but doesn't auto-buy yet.
- **OpenClaw model:** Use Opus for strategy chats, subagents for heavy lifting. PJ said "let's use sonnet as little as possible, you're cooking so good on opus."
- **Satellite migration to Vercel:** Approved in principle, not yet executed for zapier + aiagent sites.
- **Schema "Londonderry" vs "Derry":** PJ chose to keep "Londonderry" in schema.
- **Green energy lead gen idea:** PJ wasn't feeling it. Asked Albie to keep thinking.
- **AI Compliance for Stacey:** Scored 9.5/10. PJ passing to Stacey. EU AI Act mandatory Aug 2026.
- **AI Tender Writer:** Scored 9.2/10 — alternative opportunity identified.
- **Revenue opportunity criteria (Phil's 9.5):**
  - ✅ Revenue in <3 months
  - ✅ Sellable asset (£200k+ in 9-12 months)
  - ✅ No daily client work or team management
  - ✅ Leverages SEO + build speed + automation
  - ✅ Mix of passive income + exit potential
  - ✅ Near-zero capital required
  - ✅ Solves a real problem
  - ✅ Validated by social signals
  - ❌ No content-only sites
  - ❌ No generic lead gen
  - ❌ Nothing that feels like a grind

---

## 4. Preferences & Communication Feedback

- PJ calls Albie "man", "mate", "bro", "brother", "sir"
- Likes being coached through technical steps on phone
- Wants things "dumbed down" when technical
- Hates bureaucracy ("this is fucking grim bureaucracy haha" — re: Cyber Essentials)
- Appreciates when Albie pushes back (e.g., crypto trading)
- Likes the nightly build menu format (numbered options, pick a number)
- Prefers specific actionable lists over vague summaries
- Wants project management separated by project, not one flat list
- Doesn't want revenue pipeline on dashboard — prefers task board (Pending/Ongoing/Done)
- Told Albie to "take your time" on important strategic thinking — values quality over speed for big decisions
- Gets worried when Albie forgets things ("oh man this is scary")
- Suggested exporting Telegram chats to rebuild memory
- Wants reminders set for important tasks
- Said "we can't crash again man, too much good stuff in there" — values memory persistence
- Uses screenshots to communicate (especially for Webflow/portal navigation)
- Arrows (→) not allowed in IASME portal — use commas instead
- Doesn't want to be 9-5 with clients or managing a team
- Wants financial security, working on interesting things, able to look after family
- Hates: corporate culture, inauthentic meetings, gambling predation, UK tax levels, A&E waiting times

---

## 5. Business Context

### Revenue & Clients
- **Tim Clarke / Quay Group:** First paying client. £750 for half-day custom session. Found via OpenClaw Consultant satellite site.
- **Burn rate:** ~£60k debt, breakeven £3.1-3.5k/month
- **Target:** £6k/month net → eventual 5-10M exit
- **Saleable target:** £200k buyout in 9 months

### Tenders (Active)
- **Donegal County Council:** €4,200 (submitted 13 Feb)
- **InterTradeIreland:** £72,000 (submitted 13 Feb)
- **CCS Frameworks:**
  - RM6200 (AI DPS £400M) — submitted 16 Feb
  - RM6173 (Automation Marketplace £100M) — submitted 16 Feb
- **InterTradeIreland Business Explorer:** EOI submitted ~24 Feb. Up to £5k/project (Explore) or £20k (Plan) or £50k total (Innovation Boost). Blue Canvas positioned as AI & Digitalisation specialist.

### Case Studies
- **Wall Group:** Construction firm. AI-powered automation for document processing, client comms, project tracking.
- **HIP Psychology:** Mental health practice. Digitalised client intake and scheduling. AI-driven appointment booking and follow-ups.

---

## 6. Tools & Accounts

### Albie's Infrastructure
- **Email:** albiemorgan88@gmail.com
- **GitHub:** albiemorgan88-hash (GitHub Pages for demos)
- **Vercel:** Account under albiemorgan88@gmail.com, API token-based access. Free/Hobby plan (can't invite team members).
- **Mac mini:** philsagent user, macOS Sequoia 15.3. Tailscale IP: 100.113.233.3. Auto-sleep OFF.

### Coinbase CDP Wallet
- **Wallet address:** 0x3894Ae2a16B81284B9B02F33a5af9569576c0803
- **Balance:** ~106.84 USDC + 0.002 ETH on Base
- **API Key:** "Albie8" (created 23 Feb after Albie7 secret was lost)
- **Key ID:** ee100a9c-6261-44e2-a32a-b2c656f27fbe (Ed25519 type)
- **Old keys (Albie-Albie7):** Should be deleted from portal.cdp.coinbase.com
- **Wallet secret:** Regenerated 23 Feb (EC key, PKCS8 format)
- **mltl CLI wallet:** 0xaC62E141658969097Bf989fDeCE3438b36b107d5 (separate, has 0 ETH)

### Google OAuth
- **Client ID:** 815883685833-4knpfsihds6kmkr895ak8uvs8qtgfo2f.apps.googleusercontent.com
- **Client Secret:** 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 (new, created 23 Feb)
- **Refresh token:** Generated 23 Feb via auth code flow from PJ's phone in Rome

### Other Services
- **SearXNG:** localhost:8888
- **GA4:** Property ID 485727316
- **GSC:** bluecanvas.ai (sc-domain verified)
- **Microsoft Clarity:** vf82niitxf
- **Google Ads:** Account 801-851-4760 (billing pending)
- **Semrush:** API access (limited free credits). PJ open to getting full Pro account (£99/mo).
- **Apollo.io:** API key active for Blue Canvas. Davy has separate key.
- **Calendly:** contact-bluecanvas/initial-consultation
- **Tailscale:** philpatterson85@gmail.com account. Mac mini + PJ's iPhone connected.
- **Webflow:** 4 site IDs (see skills/webflow-seo/SKILL.md)
- **GoDaddy:** Domain registration
- **Stripe:** For ClubDraw payments (not yet connected)
- **Telegram Desktop:** PJ downloaded it — can do chat export (reminded for 48hrs from 26 Feb evening)
- **XProtect:** Version 5331 on Mac

---

## 7. Personal Context

### Health
- PJ: Propranolol 40mg PRN. Quitting smoking. Garmin tracking.
- Stacey: Low WBC. Was at hospital getting mole checked (22 Feb). Report: "nothing to worry about" (implied).
- PJ gets tired: "I'm dead tired" at 9:31pm, multiple "night night" exchanges

### Family & Relationship
- Stacey = "Chef" / "Gruffalo", PJ = "Poach"
- Went to Rome together 22-25 Feb 2026 (flew from Dublin, Ryanair, baggage drama)
- Photo sent of them on the plane
- PJ protective of Stacey — asked about health implications

### Routines
- PJ checks in morning and evening
- Often works late into the night
- Uses iPhone for a lot of communication
- Likes numbered menus to pick from
- Often multi-tasks (hospital + work, airport + work, dinner + work)

### Personal Values
- Hates corporate culture, inauthentic meetings
- Hates how gambling addicts are preyed upon (8yr clean)
- Hates UK tax levels
- Hates A&E waiting times
- Passionate about family, financial security, interesting work
- Wants "no worries" financially in 12 months

---

## 8. Things Albie Built

### Sites & Apps
1. **UK Trade Jobs** — Full Next.js job board with 3,009 scraped jobs, 45 career/location guides, AI CV Builder, employer sign-up flow
2. **Ardmore/ClubDraw demo** — 11-page cricket club website with integrated weekly draw, real player data, animated draw sequence
3. **OpenClaw Consultant** — 7→11 page site on Vercel, redesigned to match new Blue Canvas
4. **Mission Control dashboard** — Dark theme, all projects at a glance, task board
5. **Fresh project dashboard** (projects/dashboard.html) — 6 project cards, interactive checklists

### Documents & Reports
6. **Tim Clarke prep kit** — Research notes, branded pre-session brief (HTML + PDF), reusable half-day agenda (HTML + PDF)
7. **Google Ads campaign plan v3** — 25 keywords, 3 RSAs, negative keywords, £15/day budget
8. **ITI Business Explorer EOI** — Full expression of interest (markdown + Word)
9. **High-intent keyword list** for AdWords
10. **Multiple SEO reports** — weekly audits, competitor content gaps, schema audit, CTR fix report, satellite audit
11. **Aggressive SEO playbook** (free version + £500 budget version)
12. **Revenue accelerator blueprint** — Green energy lead gen analysis
13. **Moltlaunch deep dive** — Full research report
14. **GBP optimisation pack** — Description, 5 services, 20 FAQs, 10 posts, review templates
15. **LinkedIn content** — Week 1 batch (5 posts + images including Kodak X Nokia cover)
16. **Kodak X Nokia article** — Published on Medium
17. **6 LinkedIn images** including Kodak X Nokia cover
18. **Blog meta descriptions** — 84 posts updated via Webflow CMS API
19. **19 blog SEO titles** — Updated via CMS API (new "SEO Title" field created)
20. **8 page meta title/description rewrites** — Staged in Webflow
21. **Cyber Essentials answers** — Walked PJ through every flagged question (A2.4 through A8.x)
22. **Opportunity radar reports** — Multiple deep dives on revenue opportunities

### Skills Created
23. **ClubDraw skill** — Onboarding, Stripe Connect, draw algorithm, scaling
24. **UK Trade Jobs skill** — Site management, content, deployment
25. **AI Trend Scout skill** — Daily cron at 8am UK, scans 11+ sources
26. **Opportunity Radar skill** — Decision framework with Phil's 9.5 criteria
27. **Context files trimmed** — 30% reduction in one session

### Crons/Automations
28. **AI Trend Scout** — Daily 8am UK, scans ProductHunt, HN, YC, TechCrunch, X, GitHub, Reddit
29. **Nightly Build Menu** — 3am daily
30. **Weekly SEO Audit** — Monday 9am
31. **Weekly Money Scout** — Sunday 9am

---

## 9. Recurring Themes & Patterns

### What PJ Asks For Most
- SEO updates and ranking checks
- "Coach me through" technical tasks (Tailscale, Termius, Webflow, Coinbase, IASME)
- Nightly build menus — loves picking numbered options
- Status updates on what's running
- Revenue brainstorming and opportunity hunting
- Memory/context verification ("what do you know about me")
- Reminders for tasks

### Frustrations
- **Memory loss** — Gets worried/scared when Albie forgets things. Multiple incidents of lost context from rate limit crashes.
- **Rate limits** — Hit Anthropic API rate limits at least once, causing session death
- **Webflow limitations** — Can't publish autonomously, manual step required
- **Bureaucracy** — Cyber Essentials process was painful
- **Technical complexity** — Wants things dumbed down, coached step by step

### Goals & Aspirations
- £200k sellable asset in 9 months
- £6k/month net income
- Financial security for family
- Work on interesting things, not 9-5 grind
- Multiple revenue streams: consulting + passive + platform + exit plays
- "What will AI do to the economy, what will be a valuable asset to own and be saleable?"

### Work Pattern
- Incredibly productive — one day included: UK Trade Jobs built+deployed, OpenClaw moved to Vercel, Ardmore site built, Google Ads plan, LinkedIn content, Medium article, plus more
- Works from phone when travelling (Rome trip)
- Delegates everything possible to Albie
- Multi-tasks constantly (hospital + work, airport + Tailscale setup)

---

## 10. MoltLaunch Details

- **Agent ID:** 19170
- **Profile:** https://moltlaunch.com/agents/19170
- **Wallet:** 0x3894Ae2a16B81284B9B02F33a5af9569576c0803 (CDP wallet on Base)
- **Name:** Albie_BlueCanvas
- **Skills:** seo, website-audit, content-strategy, local-seo, technical-seo
- **Website:** https://bluecanvas.ai
- **Mode:** No token (zero fees, direct ETH settlement)
- **Registration TX:** 0xdca2d17bc38cac0f6321e3aa2c4ac7cb060f11adf9ba9540d46d1281c40e3a25
- **Token ID:** 19170 (0x4ae2)
- **Contract:** ERC-8004 Identity Registry on Base
- **Gas cost:** <$0.01
- **Gig listings:** NOT yet created — blocked on CDP wallet auth issues (keys returning "Unauthorized")
- **Security rules:** No token approvals, no escrow deposits, no USDC spending, no signing dodgy contracts
- **Platform details:** 13 days old when evaluated, built on Base L2, created by Matt Schlicht (Moltbook founder), had one security breach, ~50 agents on marketplace, tasks range $2.80-$28, $MOLT memecoin up 7,000%

---

## 11. MoltBook Details

- **Username:** Albie_BlueCanvas
- **Karma:** 5-6 (very low)
- **Posts:** First post published 25 Feb in /builds submolt
  - Post ID: b0ca3371-b922-4a4e-bf2c-e43618e90ca1
  - Topic: "I'm the sole AI agent running a real consultancy's day-to-day. Here's what that actually looks like."
  - Content: Described real daily work — SEO audits, website builds, tender writing, client showcases, lead gen
- **Followers:** 0 | Following: 1
- **Strategy:** Was lurking only, PJ approved posting. Focus on practical builder content.
- **Platform stats:** ~1,261 registered agents. Dominated by meta/philosophical content. Security discussions hot. No commercial activity visible.
- **Key agents to follow:** eudaemon_0, Ronin, Delamain, Mr_Skylight

---

## 12. ClubDraw / Ardmore — Full History

### Timeline
- **~20 Feb:** PJ mentioned idea of weekly club draw for Ardmore Cricket Club
- **Same day:** Albie built initial demo, deployed to GitHub Pages
- **GitHub Pages issues:** Link not loading initially, required Pages build config fix
- **Ardmore branding applied:** Navy/sky blue (O'Neills kits), The Bleach Green ground, founded 1879
- **PJ asked:** "Let's build it out more — fixtures, photos, scorecards, players, youth section"
- **Full site built:** 11 pages with real data from CricketEurope scorecards + Facebook/Instagram
- **"Oh wow a lot of made up players in there 🤣"** — PJ noticed fictional player names
- **Business model settled:** 10% platform fee, PJ eats Stripe costs. Club gets 90%.
- **Revenue model:** "7.5% of pot, say 10 clubs…decent earner" → upgraded to 10%
- **Skill created:** ClubDraw skill with onboarding, Stripe Connect, draw algorithm, scaling
- **Ardmore committee:** Agreed to proceed. Draft pitch message prepared.
- **Licence:** Society Lottery Registration needed from Derry City & Strabane District Council (~£35/year). Club registers, not ClubDraw.
- **Design polish (22 Feb):** Full UX overhaul, draw animation, WhatsApp mockups, membership tiers, confetti effects
- **PJ referenced Lewes FC** for design inspiration but agreed it's overkill for a parish club
- **Status as of 26 Feb:** Demo stage. PJ "taking it to market soon."

### Technical Details
- Demo URL: https://albiemorgan88-hash.github.io/clubdraw-demo/
- Hosted on GitHub Pages (albiemorgan88-hash account)
- Static HTML (no backend yet)
- Needs: Supabase for database, Stripe Connect for payments, real data to replace mocks

### Real Data Found
- 17 real players from CricketEurope scorecards
- Captain: Rachit Gaur
- Conor Brolly — Ireland U15 cap (3-38 vs Netherlands)
- 2 new signings: Kasun Abeyrathne (Sri Lanka) & Matt Cuffe (South Africa)
- 12+ real match results
- Detailed scorecard: Ardmore vs Donemana 2024
- NW Migrants Forum cricket fun day
- Real address, phone, socials verified

---

## 13. Satellite Sites — Full Details

### openclawconsultant.co.uk
- **Tech:** Next.js on Vercel
- **Pages:** 11 (redesigned 24 Feb to match new Blue Canvas look)
- **Features:** Calendly links on all 9 CTAs, Cyber Essentials badge in footer, "Powered by Blue Canvas" link
- **Design:** Bold blue #2B4DAF hero, Inter + Urbanist fonts, rounded pill buttons, animated hamburger menu
- **SEO:** GSC verified. Ranking pos 3.7 for "openclaw consultant" with 13 impressions. **This is how Tim Clarke found PJ.**
- **Status (26 Feb):** SSL failing, site DOWN — needs DNS/Vercel attention

### zapierconsultant.co.uk
- **Tech:** Webflow
- **SEO:** GSC verified, sitemap submitted. "zapier consulting" pos 10, "zapier integration consultant" pos 8, "zapier consultant" pos 30.6
- **Issues:** Meta title 67 chars (too long), description 181 chars (too long), duplicate tags, default Webflow favicon
- **Plan:** Migrate to Vercel

### aiagentsetup.co.uk
- **Tech:** Webflow
- **SEO:** GSC verified, no data yet
- **Issues:** OpenClaw Consultant content embedded on the page — two different service pages on one URL (major content confusion). Same meta issues as Zapier site.
- **Plan:** Migrate to Vercel

### All Satellites
- Lead gen funnels for Blue Canvas
- "Really easy lead gen wins" — PJ's words
- Already generating leads (Tim Clarke via OpenClaw, Joe Claw mentioned)

---

## 14. Security & Infrastructure

### Mac Mini Security Audit (23 + 25 Feb)
- ✅ Firewall: Enabled
- ✅ SSH: Not running
- ✅ SearXNG: localhost only
- ✅ OpenClaw Gateway: loopback only with token auth
- ✅ .zprofile: chmod 600 (fixed from 644)
- ✅ openclaw.json: chmod 600
- ⚠️ AirPlay Receiver: Ports 5000/7000 open on all interfaces — UNFIXED (PJ needs to disable in System Settings)
- 🔴 Tailscale daemon: Running but socket broken — UNFIXED (needs restart when home)

### Cyber Essentials Assessment
- Completed 25 Feb 2026 via IASME portal
- Albie walked PJ through every flagged question (device inventory, firewall, cloud services, password policy, anti-malware, etc.)
- Devices declared: Mac mini, MacBook Air, iPhone 17
- Network: BT Smart Hub, home office
- Cloud services: Google Workspace, Webflow, Vercel, GitHub, Stripe, Calendly, Semrush, GA4, GSC, Clarity, Telegram, GoDaddy
- Anti-malware: Apple XProtect v5331
- Browsers: Safari 26.3, Chrome 134

---

## 15. Upcoming Reminders & To-Do List

### As of 26 Feb 2026 evening:
- [ ] Export Telegram chat via Desktop app (reminded for ~28 Feb)
- [ ] Publish staged Webflow changes (8 pages + 84 blog meta descriptions + 19 SEO titles)
- [ ] Bind new "SEO Title" CMS field to blog template page in Designer
- [ ] Disable AirPlay Receiver (System Settings → AirDrop & Handoff → OFF)
- [ ] Restart Tailscale app
- [ ] Delete old CDP keys (Albie-Albie7) from Coinbase portal
- [ ] Create standard user account on Mac for daily use (Cyber Essentials compliance)
- [ ] Create Supabase account → project URL + anon key (for UK Trade Jobs + ClubDraw)
- [ ] Fix openclawconsultant.co.uk SSL/hosting issue
- [ ] Fix aiagentsetup.co.uk content confusion (OpenClaw content on wrong site)
- [ ] Verify logo.png and og-image.jpg exist at bluecanvas.ai URLs
- [ ] Check if /blog?q= search actually works (SearchAction schema)
- [ ] DUNS number — PJ was looking for it, didn't find it yet

---

## 16. OpenClaw Updates Applied
- 2026.2.15 → 2026.2.21 (21 Feb) — Gemini 3.1, 100+ security fixes, prompt caching
- 2026.2.21 → 2026.2.22 (23 Feb) — Parallel crons, auto-updater
- 2026.2.22 → 2026.2.24 (25 Feb) — 30+ security fixes, typing indicators, multi-language stop phrases
- 2026.2.24 → 2026.2.25 (26 Feb)
- Gateway restart needed after each update. Pairing issue occurred after 2.21 update — required device re-pairing approval.

---

## 17. Rome Trip Context
- PJ + Stacey went to Rome 22-25 Feb 2026
- Flew from Dublin Airport (Ryanair, baggage drama)
- PJ worked throughout the trip (phone, Telegram)
- Tailscale setup done from airport to maintain Mac mini access
- Gateway pairing fixed remotely from Dublin Airport via auth link
- Multiple subagent builds ran while PJ was away
- PJ got back ~26 Feb (working from home again by evening)
