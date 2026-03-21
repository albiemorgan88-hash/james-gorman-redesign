# MEMORY.md — Long-Term Context

## North Star
Help Phil and Stacey build a future. He's in debt and pressure — Blue Canvas needs to work. Be honest, be useful, ship things that earn money.

## Key Lessons
- Don't build on spec. Sell first, build second.
- Pitch outcomes that make money, not vague time-saving.
- Don't pitch "time saving" to someone who has time. Pitch "more money."
- DB enum mismatches are recurring — check valid values before deploying.
- PJ hates embellishment. Facts, names, numbers.
- LinkedIn: no "I"/"me", company/industry focus, short and snappy, no client names.
- Subagents: great for parallel independent tasks, terrible for stateful browser sessions.
- Moltbook: engagement comes from real results, not theory posts.
- Product Hunt data extraction blocked by Cloudflare — need alternative methods.
- Never let subagents deploy to production sites running ads without testing first. Always verify build locally before deploying.
- **ClubDraw:** Payment webhook sync failures can create UI/database disconnects. Manual intervention possible via Supabase API when payment confirmation exists.

## Key People
- **Stacey** ("Chef"/"Gruffalo") — partner, low WBC. Flag health stuff.
- **Niall Gahagan** — designer. Not available right now.
- **James Gorman** — FIRST PAYING CLIENT. £250/mo SEO retainer. Estate agent, Derry.
- **Charlie O'Hara** — Solara Wellness Hub. Don't build on spec, wait for PJ's conversation.
- **Davy Anthony** — data analyst, potential ClubDraw co-founder.
- **Mark Chambers** — ClubDraw user. Payment resolved (webhook sync fixed).
- **Gavan** — Wall Group SPAR contact. Mobile mockups ready for pitch.

## Active Projects
- **Blue Canvas** (PRIMARY) — AI consultancy. Google Ads £20/day, 36 negative keywords added (saving £6+/day), conversion tracking CRITICAL ISSUE identified.
- **James Gorman SEO** — Week 2 COMPLETE. 11 new pages published (5 blogs + 6 areas), citations started, technical foundation solid.
- **Ardmore/ClubDraw** — Platform stable: 50 subs, £195/week. Webhook sync issues resolved.
- **Wall Group SPAR** — Mobile mockups ready for Gavan pitch. £15k+ potential.
- **UK Trade Jobs** — Major expansion: 15 career guides, 60 city/trade pages, 66 training pages, full /training hub.
- **ClawMart** — 4 listings LIVE: SEO Engine $49, COO $79, Draw Platform $39, Showcase $29. Daily sales check 10am.
- **Moltbook Scout** — Active engagement strategy: posted UK/Ireland SME market insights, +1 post (41 total), +6 comments (190 total). Focus on practical Blue Canvas experience over theory.

## Critical Issues
- **Blue Canvas conversion tracking BROKEN:** £167 spent in 7 days, 0 conversions. Missing thank-you page, tracking fires on form submit but no redirect confirmation. URGENT FIX NEEDED.
- **OpenClaw site incident (Mar 17):** 1hr downtime due to subagent build errors while ads running. Fixed with Vercel Pro rollback.

## Pending (Urgent)
- **PRIORITY 1:** Blue Canvas /thank-you page + proper conversion tracking flow in Webflow
- James: Week 3 planning, PropertyPal scraper deployment, schema markup, GBP setup
- PPH/Upwork accounts — PJ creating, profiles ready to paste

## Revenue Streams
- James Gorman: £250/mo (active) — Week 2 delivered successfully
- Ardmore platform: £195/week (~£845/mo) — fixed webhook, 50 active subs
- ClawMart: 4 products live, daily sales check 10am — $0 revenue yet
- Google Ads: Optimized with negatives, saving £6+/day, but conversion tracking broken = £0 revenue

## AI Trend Monitoring (Latest: 2026-03-21)
- **AutoSend MCP** — Email platform for AI agents (Mar 20)
- **Visdiff** — Design-to-code gap solution (Mar 20)
- **WordPress.com AI agents** — AI agents can now write/publish posts (announced Mar 20)
- **Available domains identified:** ugcadcreation.co.uk, ugcvideocreation.co.uk
- **Key insight:** All valuable domains registered same-day/24hrs. Speed critical for opportunities.

## Google Ads Performance (Latest: 2026-03-21)
### Weekend Performance Issues (Mar 20)
- **Total spend:** £33.76 (both campaigns exceeded daily budgets)
- **Zero conversions** despite strong CTR performance — CONVERSION TRACKING STILL BROKEN
- **Strong performing keywords:** "ai consulting services" (11.76% CTR), "ai consultancy uk" (14.29% CTR)
- **Action needed:** Conversion tracking fix remains PRIORITY 1, keyword pruning for 0% CTR terms
