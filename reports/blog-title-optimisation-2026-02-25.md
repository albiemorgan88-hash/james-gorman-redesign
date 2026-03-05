# Blog Title Optimisation Report — 25 Feb 2026

## Summary
- **Period:** 28 Jan – 24 Feb 2026
- **Total blog impressions:** ~560 across 34 URLs
- **Total clicks:** 0 ❌
- **Diagnosis:** Titles are descriptive but bland. Zero CTR means no one is compelled to click despite ranking on page 1 for several terms.

### Key Issues
1. **Title template is bloated:** Every title starts with "Blue Canvas – Scale with AI Consultancy | Blogs -" (~55 chars of brand prefix). Google truncates at ~60 chars, so the actual post title is often invisible in SERPs.
2. **Post titles lack hooks:** No numbers (where missing), no power words, no urgency, no curiosity gaps.
3. **Year tags outdated:** "2025" in titles when it's 2026.

### ⚠️ Priority Fix: Title Template
**Before optimising individual titles, the Webflow title template needs changing.** Current format:
```
Blue Canvas – Scale with AI Consultancy | Blogs - {Post Name}
```
**Recommended format:**
```
{Post Name} | Blue Canvas
```
This alone would dramatically improve CTR by making post titles visible in SERPs.

---

## Top 20 Posts — Optimised Titles

| # | Impressions | Avg Pos | Current Title | Recommended Title | Rationale |
|---|-------------|---------|--------------|-------------------|-----------|
| 1 | 74 | 8.0 | 15 Amazing AI Tools for Business | **15 AI Tools That Actually Save Hours (2026 Tested)** | Specificity + proof + year freshness |
| 2 | 66 | 6.9 | ChatGPT, Claude, Perplexity, Gemini, Grok: Which AI Tool Should You Use? | **ChatGPT vs Claude vs Gemini vs Grok: Honest Comparison (2026)** | "vs" format gets more clicks; "honest" builds trust |
| 3 | 55 | 7.2 | What is the Best LLM Right Now? | **Best LLM in 2026: The Only Comparison You Need** | Target keyword front-loaded + definitive framing |
| 4 | 39 | 5.6 | AI Grants Northern Ireland 2026 | **AI Grants Northern Ireland 2026: Every Fund You Can Apply For** | Completeness promise drives clicks |
| 5 | 39 | 5.9 | Best AI Tools for Small Business 2025 | **Best AI Tools for Small Business in 2026 (Free & Paid)** | Year update + qualifier adds value signal |
| 6 | 27 | 10.5 | 3 AI Startups in London to Watch | **3 London AI Startups to Watch in 2026 (Before They Blow Up)** | Curiosity + FOMO |
| 7 | 19 | 17.8 | Agent 3: The Autonomous Coding Agent | **Autonomous Coding Agents: What Agent 3 Actually Does** | Lead with search term, not brand name |
| 8 | 17 | 5.1 | AI Strategy for Startups in 2026 | **AI Strategy for Startups: A No-BS Guide (2026)** | Differentiator from generic listicles |
| 9 | 14 | 9.5 | Ai Support Northern Ireland | **AI Support for Businesses in Northern Ireland: Where to Get Help** | Fix capitalisation + add intent match |
| 10 | 14 | 7.4 | When Will AGI Happen? | **When Will AGI Actually Happen? What Experts Are Saying** | "Actually" + social proof |
| 11 | 11 | 6.2 | AI in Construction | **AI in Construction: 7 Ways It's Already Changing the Industry** | Specificity + present tense urgency |
| 12 | 11 | 5.8 | Using AI For My Business | **How to Use AI in Your Business (Step-by-Step for Beginners)** | Match search intent + accessibility |
| 13 | 10 | 21.3 | Has AI Hit a Plateau? | **Has AI Hit a Plateau? The Truth Behind the Hype** | Curiosity gap + contrarian angle |
| 14 | 10 | 6.2 | How to Make Your Business AI-First | **How to Make Your Business AI-First (Without Hiring a Data Team)** | Remove objection in title |
| 15 | 7 | 7.9 | AI Consultancy Northern Ireland | **AI Consultancy Northern Ireland: What We Do & Who We Help** | Service page intent — add clarity |
| 16 | 6 | 6.0 | Proven use cases of AI: | **12 Proven AI Use Cases That Drive Real ROI** | Fix trailing colon + add number + outcome |
| 17 | 6 | 17.2 | Sovereign AI | **What Is Sovereign AI? Why Countries Are Building Their Own** | Question format + geopolitical hook |
| 18 | 6 | 9.0 | What Is Reinforcement Learning (RL)? | **Reinforcement Learning Explained Simply (With Real Examples)** | Accessibility promise |
| 19 | 5 | 8.2 | 5 Business Use Cases of AI in Northern Ireland | **5 Real AI Use Cases from Northern Ireland Businesses** | "Real" adds credibility + local pride |
| 20 | 5 | 5.2 | AI Early Adoption | **AI Early Adoption: Why First Movers Are Winning Right Now** | Urgency + competitive framing |

---

## CMS Update Assessment

**Verdict: Don't update post names via CMS API.** The Webflow CMS `name` field changes the slug and URL, which would break existing Google indexing. Title tags are set via the SEO title field in Webflow's page settings, which isn't exposed via the CMS API.

### Recommended Actions (Manual)
1. **Fix the title template** in Webflow Designer → Pages → Blog Template → SEO Settings. Change from `Blue Canvas – Scale with AI Consultancy | Blogs - {name}` to `{seo title} | Blue Canvas`
2. **Update SEO titles** for each post manually in Webflow CMS editor (SEO tab per post) using the recommended titles above
3. **Stage all changes** — do NOT publish until Phil reviews
4. **Re-check in 2-4 weeks** — monitor CTR improvement in GSC

### Quick Wins (Do First)
- Posts #1-5 have the most impressions and are on page 1 — optimise these first
- Post #5 has "2025" in the title — instant year update needed
- Post #16 has a trailing colon in the title — fix immediately
- Post #9 has inconsistent capitalisation ("Ai" instead of "AI")

---

*Generated by Albie | 25 Feb 2026*
