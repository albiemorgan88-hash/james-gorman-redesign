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

## Philosophy

Phil's 9.5 criteria — every opportunity must tick most of these:
1. Revenue potential in <3 months
2. Sellable asset (domain, site, or business)
3. Near-zero capital required
4. Leverages SEO + build speed + automation
5. Solves a real problem or captures emerging demand
6. Validated by social signals (HN upvotes, PH votes, Reddit buzz, X mentions)

## Sources to Scan

| Source | What to Look For | URL/Method |
|--------|-----------------|------------|
| Product Hunt | New AI tool launches, trending AI products | `web_search "site:producthunt.com AI" freshness:pd` |
| Hacker News | Trending AI posts, Show HN AI projects | `web_search "site:news.ycombinator.com AI" freshness:pd` |
| YC Launches | New YC AI startups | `web_search "site:ycombinator.com/launches AI"` |
| TechCrunch | AI funding, launches, announcements | `web_search "site:techcrunch.com AI" freshness:pd` |
| Twitter/X | AI influencer posts, viral AI tools | `web_search "new AI tool launch site:x.com" freshness:pd` |
| GitHub Trending | Trending AI/ML repos | `web_fetch "https://github.com/trending?since=daily"` |
| Reddit | r/artificial, r/machinelearning, r/singularity | `web_search "site:reddit.com (r/artificial OR r/machinelearning) new AI tool" freshness:pw` |
| OpenAI Blog | New models, API features | `web_search "site:openai.com/blog" freshness:pw` |
| Anthropic Blog | Claude updates, new features | `web_search "site:anthropic.com" freshness:pw` |
| Google AI | Gemini updates, new AI products | `web_search "site:blog.google AI" freshness:pw` |
| Moltbook | Community signals | Check via Albie_BlueCanvas account |

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
