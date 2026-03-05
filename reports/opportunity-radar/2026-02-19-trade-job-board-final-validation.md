# UK Trade Jobs — Final Validation Report
**Date:** 19 February 2026  
**Prepared for:** PJ  
**Status:** FINAL VALIDATION — Pre-Commit Decision

---

## DEALBREAKERS FOUND

### None.

No single finding is severe enough to kill this opportunity. However, several concerns below require clear-eyed mitigation.

---

## CONCERNS (with Mitigations)

### 🔴 CONCERN 1: Google for Jobs Indexing API Restrictions (HIGH)

**What I found:** In late 2024/2025, Google severely restricted access to their Jobs Indexing API. Previously, any job board could get listings into Google's job search carousel. Now, **new job boards must be approved/vetted before using the Indexing API**, and "thin content" job boards are being penalised. Small-to-medium job boards are described as being "squarely in the crosshairs."

**Why it matters:** The blueprint assumes Google for Jobs is a free traffic source. If PJ can't get approved for the Indexing API, aggregated/backfilled jobs may never appear in Google's job carousel — cutting off a major traffic channel.

**Mitigation:**
- Niceboard claims real-time Google Jobs indexing as a feature — they likely have an approved integration already. **Verify this before signing up.**
- Focus on organic SEO content (career guides, salary pages) which is NOT affected by the Indexing API — this traffic is independent of Google for Jobs
- Build proper JobPosting schema on every page regardless; Google can still crawl and index via sitemaps, just slower
- **Action:** Ask Niceboard directly: "Are your boards currently appearing in Google for Jobs? Do you have Indexing API approval?"

### 🔴 CONCERN 2: Niceboard Costs £315/mo ($399) — Not £80/mo (HIGH)

**What I found:** The blueprint mentions Niceboard at ~$99/mo in some places and $399/mo in others. Current verified pricing on GetApp/Capterra confirms **$399/month (~£315)** as the starting price for the Self-Serve plan.

**Why it matters:** At £315/mo, PJ needs to generate £315/mo just to break even on platform costs alone. That's ~3 paid listings at £99 before any profit.

**Mitigation:**
- **Jobboardly** offers similar features (Magic Aggregator, Turbo Backfiller) at $79-149/mo — a much safer launch price
- **Custom build with Albie** (Next.js + Supabase) would cost ~£20-50/mo in hosting — but takes 3-4 weeks
- **Recommended path:** Start with Jobboardly at ~$99/mo to validate. Migrate to custom build once revenue confirms demand. Niceboard is a luxury for later.

### 🟡 CONCERN 3: Tradespeople Primarily Find Work via Word of Mouth (MEDIUM)

**What I found:** Research from the Equality and Human Rights Commission shows **77-80% of recruitment in low-paid/manual sectors uses word of mouth** as the most common method. Reddit threads from UK tradespeople confirm this: "Been working on the tools for more than 20 years, don't advertise and only get work from word of mouth." Checkatrade/MyBuilder are about homeowner→tradesperson matching, not employment.

**Why it matters:** If most tradespeople don't actively use job boards, the addressable audience is smaller than the "2.3 million tradespeople" figure implies.

**Mitigation:**
- The target isn't ALL tradespeople — it's the subset who ARE actively looking (those between jobs, those wanting better pay, apprentices, career changers). Even 5% of 2.3M = 115,000 potential users
- The AI CV builder specifically targets people who NEED to apply for jobs but have never written a CV — this is the transition point from word-of-mouth to formal employment
- Career guides capture people at the START of their trade journey (students, career changers, apprentices) who definitely DO search online
- The bigger money is from EMPLOYERS finding tradespeople, not tradespeople finding the board. Employers/agencies DO use online channels

### 🟡 CONCERN 4: The Chicken-and-Egg Reality Is Harder Than Described (MEDIUM)

**What I found:** A Media Operator's detailed failure post-mortem identifies the core problem: backfilled jobs mean "the user has no idea your brand exists" — you're driving clicks to other people's listings. And purchasing applicants doesn't build your brand either. The author failed TWICE at job boards despite having SEO expertise and existing audiences (ThomasNet manufacturing audience, CoinDesk crypto audience).

**Key quote:** "Job boards are marketplaces. They require two constituencies to show up at the exact same time looking to do the exact same thing."

**Why it matters:** The blueprint treats backfill as a complete solution. It's not — it's a bootstrap tool that doesn't build brand loyalty. The real question is: can PJ convert backfilled traffic into direct employer relationships before the backfill becomes a crutch?

**Mitigation:**
- The Media Operator's failures were in spaces with EXISTING strong competitors (Indeed for manufacturing, LinkedIn for crypto). UK trades has NO dominant niche player — the gap is genuinely open
- The AI CV builder is NOT a backfill feature — it's an original value proposition that builds brand loyalty and captures user data
- Content (career guides, salary pages) brings users to the BRAND, not to backfilled listings. This is the moat the Media Operator didn't have
- **Key success metric:** Track what % of traffic comes from content vs. backfilled job clicks. Content % should grow over time

### 🟡 CONCERN 5: Scraping/Aggregation Legal Grey Area (MEDIUM)

**What I found:** Indeed explicitly prohibits scraping in their Terms of Service. While the hiQ vs LinkedIn ruling (US) established that scraping public data isn't automatically illegal, violating ToS is a grey area. Indeed has actively pursued scrapers.

**Mitigation:**
- **Don't scrape.** Use official publisher/partner programs:
  - **Indeed Publisher Program** — free, legal, earn per click. Apply via their publisher portal
  - **Adzuna API** — free, provides UK job data
  - **Niceboard/Jobboardly** built-in backfill uses these official feeds, not scraping
- This is a non-issue IF PJ uses official channels. Just don't build a custom scraper

### 🟡 CONCERN 6: Revenue Model Is Slower Than Projected (MEDIUM)

**What I found:** Reddit accounts from actual niche job board operators show realistic revenues of **$2,000-4,000/month per board** — and this takes 12-18 months to reach. AdSense alone ~$1,000/mo at scale. The blueprint's projection of £7,000/mo by month 12 is at the optimistic end.

**Reality check from people who've done it:**
- "$3,000-4,000/month, barely touch them" — but this is AFTER years of SEO building
- "$2K/month per board + $1K AdSense" — from someone running multiple boards
- Job boards at $1,300/month after years of operation

**Mitigation:**
- Adjust expectations: **£2,000-3,000/mo by month 12** is more realistic than £7,000
- This is still excellent for a side project with <£200 startup cost
- The £7,000/mo figure is achievable by month 18-24, not month 12
- Multiple revenue streams (AdSense + affiliates + listings) de-risk dependence on any single one

### 🟢 CONCERN 7: Indeed Offers 3 Free Job Posts/Month (LOW)

**What I found:** Indeed now lets employers post up to 3 free jobs per calendar month, each live for 30 days. Sponsored (paid) posts work on pay-per-click, with no published fixed price — it's auction-based.

**Why it matters:** Small employers can post trade jobs for FREE on Indeed. Why would they pay £49-99 on UK Trade Jobs?

**Mitigation:**
- Indeed's free posts get buried among millions of listings. A specialist board gives better visibility to a targeted audience
- Indeed's sponsored posts (CPC model) can cost £200-500+ per hire depending on competition. A flat £49-99 for 30 days is simpler and often cheaper
- Recruitment AGENCIES (the primary target) **cannot post for free on Indeed** — they must use paid options. This is the sweet spot
- The value proposition isn't "cheaper than Indeed" — it's "better qualified applicants because our entire audience is tradespeople"

---

## CONFIRMATIONS (Things That Checked Out)

### ✅ 1. The Skills Shortage Is Real and Growing
Every source confirms: ~1 million workers short by 2032, £98bn lost GDP, government spending £725m on skills reform, fast-track apprenticeships announced Feb 2026. This macro tailwind is genuine and strengthening.

### ✅ 2. No Dominant Niche Competitor Exists
"Trade jobs UK" search results return: Reed, Indeed, TotalJobs, Jobsite — all generalists. TradeCareers.co.uk is a training/cards site, not a job board. ConstructionJobBoard.co.uk has 51K jobs but only 508 monthly visits (catastrophic SEO). TradesBoard.co.uk appears near-dead. **The niche is genuinely empty.**

### ✅ 3. Checkatrade/MyBuilder Are NOT Competitors
These platforms match homeowners with tradespeople for one-off jobs (fix my boiler, build my extension). They are NOT employment platforms. A tradesperson looking for a permanent electrician role at a construction firm would NOT use Checkatrade. Different market entirely.

### ✅ 4. Niche Job Boards CAN Compete with Indeed
Multiple sources confirm: Indeed's millions of listings are a weakness for niche hiring. Employers get flooded with unqualified applicants. Job seekers waste time on irrelevant results. Niche boards offer: less competition, higher-quality matches, and specialist audience. The "barbell jobs" model (niche fitness job board) and many others prove this works.

### ✅ 5. Recruitment Agencies Spend Heavily on Job Advertising
UK recruitment agencies charge 15-20% of first year salary per placement. For a £35K electrician, that's £5,250-7,000 per hire. They routinely spend £500-2,000/month on job board advertising. TotalJobs charges £89-379 per listing. A specialist trade board at £49-99/listing with better-qualified applicants is a compelling value proposition for agencies.

### ✅ 6. Flippa/Acquisition Market Confirms Exit Potential
Real examples found:
- Remote job board with $27K revenue, $18K net income listed on Flippa (40K+ users)
- Niche job board with £73K revenue listed for sale
- Dubai nanny job board sold with $31K net profit
- Tech sales job board (since 1998) sold on Flippa
- Typical multiples for profitable niche sites: 30-48x monthly profit

A trade job board making £3,000/mo profit could realistically sell for £90K-144K. At £8K/mo, that's £240K-384K.

### ✅ 7. The AI Features Are Genuinely Differentiating
No UK trade job board offers AI CV builder, salary estimator, or career path advisor. This isn't vapourware — PJ has Albie and can build these. The CV builder alone solves a real pain point (tradespeople don't have CVs) and creates viral sharing potential.

### ✅ 8. Content SEO Opportunity Is Wide Open
Confirmed low-difficulty, high-volume keywords: "electrician salary UK" (2,900/mo, difficulty 0.00), "plumbing apprenticeship" (5,400/mo), "CSCS card" (8,100/mo). These are genuine ranking opportunities that ConstructionJobBoard has completely failed to capture despite having 51K jobs on their site.

---

## THE MONTHLY COST REALITY (Realistic Model)

| Item | Monthly Cost | Notes |
|------|-------------|-------|
| Domain | £1.06 | £37.99/3 years already paid |
| Platform (Jobboardly) | £80-120 | Recommended over Niceboard at £315 |
| Email (Zoho free tier) | £0 | Or Google Workspace £5/mo |
| Analytics | £0 | GA4, Search Console, Clarity all free |
| AI APIs (Claude/GPT) | £20-50 | CV builder + salary tool at moderate usage |
| Email service (job alerts) | £0-20 | Free tier covers first 10K subscribers |
| Content creation (Albie) | £0 | PJ's time, AI-assisted |
| **Total** | **£100-190/mo** | |

With Jobboardly instead of Niceboard, breakeven requires just 2 paid listings at £49 or 1 at £99.

**PJ's time opportunity cost:** This is the real cost. Estimate 15-20 hrs/week for months 1-3, dropping to 5-10 hrs/week once content is built and SEO kicks in. If PJ values his time at £30/hr, that's £1,800-2,400/month in months 1-3, dropping to £600-1,200/month after. The question: is there a better use of 15-20 hrs/week that would generate £3,000+/mo within 12 months? For most people, no.

---

## ALTERNATIVE MODELS WITHIN THE SAME SPACE

| Model | Revenue/hr Potential | Startup Effort | Scalability | Verdict |
|-------|---------------------|----------------|-------------|---------|
| **Trade job board** (proposed) | Medium-High | Low (£200) | High (SEO compounds) | **BEST overall** — asset builds value |
| Trade recruitment AGENCY | High (15-20% per placement) | Medium (£2K+ compliance) | Low (time-limited) | Higher per-deal revenue but doesn't scale without staff |
| Trade CV writing service | Low (£50-100/CV) | Very Low | Low | Too small, commoditised |
| Trade salary comparison tool | Low (AdSense only) | Low | Medium | Better as a FEATURE of the job board, not standalone |
| Trade apprenticeship platform | Medium | Medium | Medium | Niche within a niche — too narrow |
| Trade training/courses | High if creating courses | High (content creation) | Medium | PJ isn't a tradesperson — credibility gap |

**Verdict:** The job board is the best model because it creates a compounding SEO asset with multiple revenue streams. The AI features (CV builder, salary tool, career advisor) are best monetised as parts of the platform, not standalone products. A recruitment agency could work alongside the job board as a premium service later.

---

## WHAT WOULD MAKE THIS A DEFINITE 9.5

1. **Start with Jobboardly at ~£100/mo instead of Niceboard at £315/mo** — reduces risk, same core features. Lowers breakeven to 1-2 listings
2. **Build the AI CV Builder BEFORE launch** — this is the viral hook. "Free trade CV in 2 minutes" is shareable, solves a real pain point, and captures user data from Day 1
3. **Secure 5 recruitment agency partnerships pre-launch** — even on free trials, this proves employer demand and provides testimonials
4. **Verify Google for Jobs indexing works** on the chosen platform before committing
5. **Commit to publishing 3 articles/week for 6 months** — the SEO flywheel is the entire business engine. Inconsistency kills it
6. **Build an email list from Day 1** — job alert subscribers are the most valuable asset; they return repeatedly without SEO
7. **Partner with ONE trade body** (NICEIC or FMB) in the first 3 months — even an informal "we link to each other" arrangement adds massive credibility
8. **Use the .com for an eventual US expansion play** — US skilled trades shortage is even worse. Same playbook, 5x the market

If PJ does all 8 of these, this genuinely becomes a 9.5.

---

## THE KILL QUESTION

### The Strongest "Don't Do It" Argument:

**"Job boards are a solved problem. Indeed has 250 million monthly visitors. Google for Jobs is tightening its grip. The tradespeople you're targeting primarily find work through word of mouth and agencies — they don't use job boards. You'll spend 6-12 months grinding out content for an audience that may never materialise, while paying £100-315/month in platform costs. The realistic revenue ceiling is £2,000-3,000/month — decent but not life-changing — and you won't reach it for 12-18 months. Meanwhile, every hour you spend on this is an hour not spent on Blue Canvas (your existing business) or higher-certainty client work. The A Media Operator guy had MORE advantages than you (existing audiences, SEO expertise, team) and failed TWICE. What makes you different?"**

### The Counter:

**"What makes PJ different is that the A Media Operator failed in spaces with EXISTING dominant niche players. UK trade jobs has NONE. PJ has Albie — free AI development that no solo operator has. The AI CV builder alone is something Indeed won't build for a niche. The startup cost is £200, not £20,000. The macro tailwind (skills shortage + £725m government spend) is the strongest it's ever been. And the content SEO play targets keywords with ZERO difficulty scores — this isn't competing with HubSpot for 'marketing jobs.' The risk/reward is asymmetric: lose £200 + some weekends in the worst case. Build a £100K+ sellable asset in the best case. When the downside is this small and the market gap is this clear, not doing it is the bigger mistake."**

---

## FINAL SCORE

### Score: 8.0 / 10
### Confidence: 78%

**Downgraded from 8.5 to 8.0 because:**
- Niceboard pricing is £315/mo not £80 (mitigated by using Jobboardly)
- Google for Jobs API restrictions add real uncertainty for new job boards
- Revenue timeline is 12-18 months to meaningful income, not 6 months
- Tradespeople's word-of-mouth culture means the addressable online audience is smaller than total market size implies

**Maintained above 7.5 because:**
- No niche competitor exists — the gap is confirmed
- Multiple revenue streams (AdSense + affiliates) don't depend on employers paying
- AI features are a genuine differentiator
- Skills shortage macro tailwind is real and growing
- Startup cost is trivially low
- Content SEO keywords have near-zero competition

---

## THE HONEST RECOMMENDATION

### 🟢 GO — with adjusted expectations

**Do it.** But go in with eyes open:

1. **Use Jobboardly (~£100/mo), not Niceboard (£315/mo).** Validate before spending big on platform
2. **Build the AI CV builder first.** This is what makes you different from "another aggregated job board"
3. **Expect £0 revenue for months 1-3, £500-1,000 for months 4-8, £2,000-3,000 by month 12.** Not £7,000
4. **The real payoff is months 12-24.** SEO compounds. Content compounds. If you can grind through the "trough of sorrow" (months 3-6), the flywheel starts turning
5. **Don't quit Blue Canvas for this.** This is a side project that could become a main project. Allocate 10-15 hours/week, not 40
6. **Total investment to validate: £500 over 3 months.** If by month 3 you have zero organic traffic growth and zero employer interest, kill it. You've lost a long weekend's worth of income

The domains are bought. The market gap is real. The startup cost is negligible. The AI features give you an edge no competitor has. The macro tailwinds are the strongest they'll ever be. **The biggest risk is not executing consistently for 6+ months, not the business model itself.**

Build it. But build it smart, build it cheap, and build it with the AI CV builder as the centrepiece.

---

*Validation completed 19 Feb 2026. Based on 40+ web searches across competitor analysis, revenue models, employer willingness to pay, job seeker behaviour, legal considerations, Google for Jobs restrictions, and comparable exits. All concerns have documented mitigations.*
