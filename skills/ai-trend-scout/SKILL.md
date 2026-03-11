---
name: ai-trend-scout
description: Monitor emerging AI tools, platforms, and trends daily. Evaluate domain/business opportunities, score them, and act fast on high-scoring finds. Auto-buy domains and build landing pages for 9+ scores. Run daily at 8am UK time.
triggers:
  - cron: "0 8 * * *"
  - manual: "scan ai trends"
  - keyword: "trend scout"
---

# AI Trend Scout

Be first to emerging AI tools and platforms. Spot trends → grab domains → build sites → monetise or sell.

## Critical Rules

⛔ **NEVER flag tools older than 2 weeks.** If a tool/platform launched more than 14 days ago, it is NOT a trend — skip it entirely. No exceptions.

Before including ANY tool or platform in a report:
1. **Verify the launch date / first public mention date** — check Product Hunt launch date, first HN post, earliest Reddit thread, GitHub repo creation date
2. **Classify by age:**
   - 🚀 **Breakout** = launched in the **last 7 days** with accelerating mentions across multiple sources
   - 📈 **Emerging** = launched in the **last 14 days** with growing traction
   - 🚫 **Old news** = anything older than 14 days — **do not report, do not score, do not include**
3. If you cannot confirm launch date, search `"[tool name] launch" OR "[tool name] announced"` with freshness filters before including it
4. A tool trending on social media today does NOT mean it's new — always verify first appearance date

## Speed Is Everything

First mover advantage on domains = the whole point of this skill.

- If a tool is trending on Reddit/X **today**, the domain window is **24-48 hours max**
- Score tools **FAST**, recommend domain grabs **FAST**
- Don't over-analyse — flag it, score it, move on
- Better to flag 3 false positives than miss 1 real opportunity
- Speed of report > perfection of analysis
- If in doubt, flag it with a caveat rather than spending 30 minutes researching
- The goal: Phil sees the opportunity **before** the domain squatters do

## ⚡ RAPID DOMAIN CHECK (Score 8+ Trigger)

When ANY opportunity scores 8+, IMMEDIATELY run domain availability checks before finishing the report. Don't wait — domains get snapped up within hours of major announcements.

### Instant Check Protocol (for score 8+ finds):
1. **Check ALL these variants instantly** via `whois`:
   - `[name].co.uk`, `[name].com`, `[name].ai`
   - `[name]consultant.co.uk`, `[name]agency.co.uk`
   - `[name]consultancy.co.uk`, `[name]expert.co.uk`
   - `[name]uk.com`, `[name]training.co.uk`
2. **If score 9+ AND domain available AND <$15**: Flag as 🚨 URGENT BUY in report header
3. **If score 8 AND domain available**: Flag as 🔥 GRAB NOW in report
4. **Time-stamp the check** so PJ knows freshness: "Checked 11 Mar 2026 09:48 GMT"

### Why This Matters (NemoClaw Lesson):
- NVIDIA announced NemoClaw on ~7 Mar 2026
- nemoclaw.com was registered same day (GoDaddy)
- nemoclaw.co.uk grabbed within 3 days
- nemoclaw.ai grabbed on 10 Mar
- By the time our daily 8am scout ran, ALL primary domains were gone
- Consultant/agency variants (.co.uk) are STILL available — but the premium domains are lost
- **Lesson: Check domains THE MOMENT you spot a trend, not at the next scheduled scan**

## 🔄 Multi-Run Schedule

This skill runs **3x daily** to catch opportunities faster:
- **8am GMT** — Morning scan (full scan of all sources)
- **2pm GMT** — Afternoon catch-up (focus on breaking news, X/Reddit trending, tech press)
- **9pm GMT** — Evening sweep (catch US afternoon announcements, Product Hunt daily results)

The afternoon and evening runs can be lighter — focus on NEW items since the last scan, not a full re-scan of everything.

## Data Sources

Scan ALL of these daily. Cast a wide net — trends surface on different platforms first.

### Social Platforms (highest signal for early trends)
| Source | What to Scan | Method |
|--------|-------------|--------|
| **Reddit** | r/artificial, r/MachineLearning, r/LocalLLaMA, r/ChatGPT, r/SaaS, r/startups, r/Entrepreneur | `web_search "site:reddit.com (r/artificial OR r/MachineLearning OR r/LocalLLaMA OR r/ChatGPT OR r/SaaS OR r/startups) new AI tool" freshness:pd` |
| **X/Twitter** | AI influencer accounts, trending #AI hashtags, viral AI tool posts, quote-tweet chains | `web_search "new AI tool launch site:x.com" freshness:pd` + `web_search "AI tool trending site:x.com" freshness:pd` |
| **LinkedIn** | Trending AI posts, viral tool demos, founder launch announcements | `web_search "site:linkedin.com new AI tool launch" freshness:pd` |

### Launch Platforms (best for catching Day 1)
| Source | What to Scan | Method |
|--------|-------------|--------|
| **Product Hunt** | Daily top launches, weekly top AI products | `web_search "site:producthunt.com AI" freshness:pd` |
| **Hacker News** | Front page AI posts, Show HN AI projects | `web_search "site:news.ycombinator.com AI" freshness:pd` + `web_fetch "https://news.ycombinator.com"` |
| **YC Launches** | New YC AI startups | `web_search "site:ycombinator.com/launches AI"` |
| **GitHub Trending** | Trending AI/ML repos (last 7 days) | `web_fetch "https://github.com/trending?since=weekly&spoken_language_code=en"` |

### Tech Press & Newsletters
| Source | What to Scan | Method |
|--------|-------------|--------|
| **TechCrunch** | AI funding, launches, announcements | `web_search "site:techcrunch.com AI" freshness:pd` |
| **The Verge** | AI product launches, major announcements | `web_search "site:theverge.com AI" freshness:pd` |
| **Ars Technica** | AI deep dives, new model releases | `web_search "site:arstechnica.com AI" freshness:pd` |
| **VentureBeat** | Enterprise AI, funding rounds | `web_search "site:venturebeat.com AI" freshness:pd` |
| **Ben's Bites** | Daily AI newsletter highlights | `web_search "site:bensbites.com" freshness:pd` |
| **The Neuron** | AI trend newsletter | `web_search "site:theneurondaily.com" freshness:pd` |
| **TLDR AI** | AI news digest | `web_search "site:tldr.tech AI" freshness:pd` |

### AI Company Blogs
| Source | What to Scan | Method |
|--------|-------------|--------|
| OpenAI Blog | New models, API features | `web_search "site:openai.com/blog" freshness:pw` |
| Anthropic Blog | Claude updates, new features | `web_search "site:anthropic.com" freshness:pw` |
| Google AI | Gemini updates, new AI products | `web_search "site:blog.google AI" freshness:pw` |

### Community
| Source | What to Scan | Method |
|--------|-------------|--------|
| Moltbook | Community signals | Check via Albie_BlueCanvas account |

## Philosophy

Phil's 9.5 criteria — every opportunity must tick most of these:
1. Revenue potential in <3 months
2. Sellable asset (domain, site, or business)
3. Near-zero capital required
4. Leverages SEO + build speed + automation
5. Solves a real problem or captures emerging demand
6. Validated by social signals (HN upvotes, PH votes, Reddit buzz, X mentions)

## Evaluation Framework

### Step 1: Identify the Trend
Extract from each source:
- **Tool/Platform name**
- **What it does** (one line)
- **Social proof** (upvotes, stars, mentions)
- **Age** (hours/days since launch)
- **Category** (dev tool, consumer app, B2B SaaS, infrastructure, API)

### Step 2: Domain Opportunity Check

Check these patterns for each trend `[name]`:
```
[name]consultant.co.uk
[name]agency.co.uk
[name]uk.com
[name]consultancy.co.uk
[name]expert.co.uk
[name]training.co.uk
[name].co.uk
[name]ai.co.uk
best[name]alternatives.co.uk
hire[name]expert.co.uk
```

Use WHOIS check (see domain-hunter skill):
```bash
whois {domain} 2>/dev/null | grep -i "status\|expir\|registrar\|creation"
```

### Step 3: Score the Opportunity (1-10)

| Factor | Weight | How to Assess |
|--------|--------|---------------|
| Social buzz | 2 | HN 100+ pts, PH top 5, Reddit 500+ upvotes = high |
| Domain availability | 2 | Key .co.uk/.com patterns available = high |
| SEO gap | 2 | No established competitors for "[tool] consultant UK" = high |
| Speed to market | 1.5 | Can build landing page in <24hrs = high |
| Monetisation clarity | 1.5 | Clear path: lead gen, affiliate, rank & rent = high |
| Phil's 9.5 fit | 1 | Meets most of the 6 criteria above = high |

**Weighted score out of 10.**

### Step 4: Action Matrix

| Score | Action |
|-------|--------|
| 1-4 | Log and ignore |
| 5-7 | Add to WATCHING list, check again in 48hrs |
| 8 | 🔥 Alert Phil immediately. Present full analysis. |
| 9 | 🔥 Alert Phil + auto-buy domain if <$15 (per domain-hunter spending rules) |
| 10 | 🔥 Alert + auto-buy + start building landing page immediately |

## Domain Purchase Workflow

Follow `skills/domain-hunter/SKILL.md` for:
- Wallet: `0x3894Ae2a16B81284B9B02F33a5af9569576c0803` (Base)
- Under $15 + score ≥ 8 → auto-buy, notify Phil after
- $15-$50 → notify Phil first
- Over $50 → always ask Phil

## Landing Page Playbook (for 9+ scores)

1. **Domain acquired** → point DNS to Vercel
2. **Build page** using existing Blue Canvas template patterns
3. **Content**: "[Tool Name] Consultant UK" — what it is, why businesses need help, contact form
4. **SEO**: Target "[tool] consultant UK", "[tool] agency", "[tool] expert"
5. **Submit to Google Search Console** for fast indexing
6. **Goal**: Indexed within 24-48hrs, ranking within 2 weeks

## Output Format

```
🔍 AI Trend Scout — [date]

🔥 HOT (score 8+):
- [trend] — [why it matters] — [domain opportunity] — [action taken/recommended]

📊 WATCHING (score 5-7):
- [trend] — [brief note]

💤 NOTHING TODAY (if quiet)

📈 PORTFOLIO UPDATE:
- [any updates on previously acquired trend domains]
```

## Integration

- **Domain Hunter**: Use for all domain checks and purchases
- **Webflow SEO**: Use for building landing pages on satellite domains
- **Analytics SEO**: Track performance of trend-based domains
- **Memory**: Log all findings to daily memory files

## Examples of Past Wins (Template)

| Date | Trend | Domain Acquired | Cost | Status |
|------|-------|----------------|------|--------|
| — | — | — | — | — |

*Update this table as domains are acquired.*

## Anti-Patterns

- ❌ Don't chase trends older than 7 days (too late)
- ❌ Don't buy .com domains (too expensive, focus on .co.uk)
- ❌ Don't build for trends with no search intent (cool tech ≠ business opportunity)
- ❌ Don't spend >$15 without Phil's approval
- ❌ Don't ignore the 9.5 criteria — cool ≠ profitable
