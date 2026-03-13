# MEMORY.md — Long-Term Context

## North Star
"Work with Phil to help set him and Stacey up for the future. He's in loads of debt and pressure, he needs Blue Canvas to work and he needs passive income. Phil is one of the good guys who deserves to thrive in the AI era."

## Key Lessons
- Don't build without knowing who pays.
- Don't build on spec. Sell first, build second.
- Pitch outcomes that make money, not vague time-saving.
- Be honest about what a client actually needs vs what we want to sell.
- DB enum mismatches are a recurring issue — check valid values before deploying.
- PJ hates embellishment. Facts, names, numbers.
- LinkedIn: no "I"/"me", keep about company/industry. Short and snappy. No specific clients.
- Security: verify npm/GitHub packages before installing. Malicious packages real threat.
- Tax/legal: Blue Canvas = PLATFORM PROVIDER, not lottery operator.
- PJ prefers simple manual processes over complex automation at small scale.
- Use `bird` CLI for reading tweets, not web fetch.

## Key People
- **Niall Gahagan** — designer. Not available right now.
- **Davy Anthony** — data analyst, potential ClubDraw co-founder (sales/outreach).
- **Jess Mason** (male) — AI Systems Consultant, OpenClaw expert, on team page.
- **Ian Patterson** — Phil's brother, Precision Education.
- **Charlie O'Hara** — Solara Wellness Hub prospect. Current best pitch angle is premium site + built-in booking + gift vouchers; do not build further on spec until Phil speaks to him.
- **James Gorman** — Derry estate agent prospect. Strong upsell ideas: valuation landing page + Google Ads, automated PropertyPal alerts, expired/withdrawn listing outreach.
- **P Brolly / George Brolly** — Ardmore member; number/name assignment issue surfaced in draw data.

## Active Projects
- **Blue Canvas** (PRIMARY) — £6k/mo target. Google Ads LIVE £20/day, account 801-851-4760. Main issue remains conversion tracking / landing-page performance, not CTR.
- **Ardmore Cricket Club / ClubDraw client #1** — LIVE at ardmorecricket.com. Draw #2 recovered after enum bug (`pending_payout` invalid; use `drawn`). Pot hit **£227**; 56 participant emails resent manually; winners now shown on results page; results API fixed to use service-role key. Next week pot projected **£189** from subs only after 8 expired one-offs (38 numbers) were cancelled.
- **ClubDraw** — white-label weekly draw SaaS. Ardmore proves the model; multi-club expansion still the bigger play.
- **UK Trade Jobs** — uktradejobs.com on Vercel. 33 career guides, 7 location pages, CV builder, email capture, admin dashboard. 5,000+ pages. Target £3-5k/mo.
- **Satellites** — openclawconsultant.co.uk (LIVE), zapierconsultant.co.uk, aiagentsetup.co.uk. Awaiting indexing.
- **EU AI Act Compliance** — Stacey's project. Domains: aiactcompliance.co.uk + aiaudituk.com. Do not action without Stacey.
- **CashClaw** — official MoltLaunch release is live; CLI installed/configured. Phase 1 plan: auto-quote ON, auto-work OFF, feed 5-10 manual tasks to calibrate. Blocked pending OpenRouter key.
- **Paperclip** — likely useful as agent-org/dashboard layer, but may be premature. Install/evaluate only after CashClaw key is sorted.

## Competitors
- **OpenFang** — open-source Agent OS (Rust, claims 30x faster).
- **SEO**: brainpool.ai (DR 42, 555 ref domains vs our DR 19, 11). Also: iwantmore.ai, Artellis.ie, AICC.

## Opportunities
- **AI Compliance with Stacey** — scored 9.5. EU AI Act Aug 2026.
- **AI Tender Writer** — scored 9.2. SME gap.
- **Agent-ready websites** — emerging category; real commercial angle is sites with booking, vouchers, lead capture, and automations baked in.
- **DTFF Grant (NI)** — gov pays 70% of AI/digital costs (£5k-£20k). Strong sales angle.
- **AI Voice Receptionists** — white-label via GoHighLevel, £150-300/mo per client.

## Revenue
- Pricing: Free Consult → AI Audit £750 → Implementation → Academy £250 → Mentoring £50/mo.
- "Albie as a Service": £1,750 setup + £250/mo.
- Ardmore platform economics: 50% jackpot, 40% club, 7.5% platform (Blue Canvas), 2.5% Stripe.
- Google Ads conversion tracking: 2 actions created (Contact Form £750 + Phone Click £100). Still needs verified live firing.

## Pending Actions (Urgent)
- Verify Google Ads conversion tracking is actually firing before spending more.
- Paste conversion tracking snippet into Webflow Footer Code + publish.
- Fix Blue Canvas landing page (cut fonts 7→2, remove `visibility:hidden`, add inline form).
- Consider pausing QS=1 keywords immediately ("ai for small business", "ai marketing for small business").
- OpenRouter key → start CashClaw Phase 1.
- James Gorman: deliver week 2 SEO / follow-up with the stronger revenue-led upsells.

## Pending Actions (Standard)
- Evaluate/install Paperclip after CashClaw is live.
- SEO: Sarvesh's 6-pillar attack, service+location page gaps, citation audit, backlink gap analysis.
- Continue 1/day blog publishing.
- Monitor MoltLaunch inbox (Agent #24586).
- Register on AI Agent Store + AI Agents Directory.

## System
- OpenClaw security audit Mar 12: 0 critical, 1 warn, 1 info. `trustedProxies` warning benign because gateway is loopback-only.
- `openclaw security audit --fix` corrected file permissions on 16 session files.
- Host posture confirmed Mar 12: Firewall ON, FileVault ON, loopback-only listeners except normal Apple `rapportd`, macOS fully up to date, SearXNG healthy on 127.0.0.1:8888.
- OpenClaw update available: npm 2026.3.11. Hold for Phil approval.
- Context files trimmed Mar 10 to reduce token burn.

## Hustle Engine Philosophy
Distinct from ops — pure opportunity hunting. See opportunities before anyone, act with speed + conviction.