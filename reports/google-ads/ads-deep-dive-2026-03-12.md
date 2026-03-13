# Google Ads Deep-Dive — Blue Canvas + OpenClaw Consultant

**Date:** 12 March 2026  
**Account:** 801-851-4760  
**Scope:** Evidence-led overnight diagnosis of why CTR is decent but conversions are zero/weak  
**Sources used:** Google Ads API live pulls, workspace reports, memory logs, campaign plans, OpenClaw Consultant site code

---

## Blunt executive summary

**Short version:** the websites are not the only issue. The ad setup itself is the bigger problem right now.

### What’s actually going on
- **Blue Canvas is buying a lot of curiosity traffic, not enough buyer-intent traffic.**
- **Match/keyword strategy is too broad in practice**, even though most keywords are phrase match.
- **Search term pollution is still heavy** on Blue Canvas despite recent negative keyword work.
- **Conversion tracking is not trustworthy enough yet**, especially on OpenClaw Consultant.
- **OpenClaw Consultant has a positioning problem:** almost all clicks are for the term **“openclaw”**, not clearly “hire someone to do OpenClaw for me”.
- **CTR is flattering us.** It says the ads are attractive. It does **not** say the traffic is commercially ready.

### My honest ranking of likely blockers
1. **Wrong keyword intent / search-term pollution** — biggest issue on Blue Canvas
2. **Broken or incomplete conversion tracking** — biggest measurement issue, especially on OpenClaw
3. **Offer / CTA mismatch** — users are clicking broad AI curiosity ads, then being asked to take a relatively high-friction next step
4. **Campaign structure too loose** — one generic Blue Canvas ad group is doing too much
5. **Landing page issues** — real, but not the only or primary explanation anymore
6. **Not enough data yet** — true for OpenClaw, not a valid excuse for Blue Canvas search quality problems

### Bottom line for tomorrow
- **Blue Canvas deserves focus first** because it has enough spend/click volume to diagnose and improve fast.
- **OpenClaw Consultant should stay live only in a tightly controlled brand/high-intent form** until tracking is real and offer/message are sharper.
- **Do not scale budgets yet.** Fix search quality + tracking first.

---

## 1. Live performance snapshot (last 30 days)

### Campaign-level
| Campaign | Impr | Clicks | CTR | Spend | Avg CPC | Conversions |
|---|---:|---:|---:|---:|---:|---:|
| Blue Canvas - AI Audit | 792 | 139 | 17.55% | £170.09 | £1.22 | 0 |
| OpenClaw Consultant | 89 | 11 | 12.36% | £21.37 | £1.94 | 0 |

### Immediate read
- **Blue Canvas:** enough data to say the issue is not “just needs more time”. £170 and 139 clicks with zero conversions is meaningful.
- **OpenClaw:** sample is small, but still enough to spot **tracking risk + weak commercial intent clarity**.

---

## 2. Evidence review by campaign

## 2A. Blue Canvas - AI Audit

### What the data says
Top spend-driving keywords:
- **"ai solutions for business"** — 51 clicks, £57.31 spend, CTR 36.43%
- **"ai tools for business"** — 37 clicks, £37.87 spend, CTR 22.56%
- **"ai implementation"** — 24 clicks, £29.51 spend, CTR 8.89%
- **"ai consultant"** — 6 clicks, £17.87 spend, CTR 11.11%, QS 5
- **"ai for small business"** — 11 clicks, £16.93 spend, CTR 15.49%, **QS 1**

### Search term evidence
Top paid search terms include:
- **enterprise ai solutions** — 9 clicks, £12.32
- **artificial intelligence technologies in business** — 11 clicks, £11.94
- **artificial intelligence in business** — 8 clicks, £10.02
- **alli ai** — 13 clicks, £9.47
- **ai in business** — 10 clicks, £8.86
- **ai for cfos** — 4 clicks, £5.87
- **ai for small business** — 5 clicks, £5.73
- **ai tools for small business** — 4 clicks, £4.81
- **ai consultants ireland** — 1 click, £3.82
- **ai marketing** — 1 click, £3.22
- **ai small business ideas** — 1 click, £3.22
- **alicia lyttle ai consultant** — 1 click, £3.21
- **ai consultant** — 1 click, £3.20
- **ai brand generator** — 1 click, £3.19
- **building ai agents with llms rag and knowledge graphs** — 1 click, £3.14

### Diagnosis
This campaign is **not really an “AI Audit” campaign in practice**. It is acting more like a broad **AI-for-business curiosity capture campaign**.

That’s why the CTR is strong:
- ad copy is broad enough to attract clicks
- keywords are broad enough to match lots of interesting searches
- CPCs are affordable

But that same breadth is why conversion intent is weak:
- many queries are **learning / exploration / tool shopping / category browsing**
- some are **competitor or brand pollution**
- some are **too big-enterprise or too vague** for Blue Canvas’ current offer

### Specific red flags

#### 1) Search term pollution is still material
Even after negatives were added, the campaign has paid for:
- competitor/tool brand terms like **alli ai**, **alicia lyttle ai consultant**
- curiosity terms like **ai small business ideas**, **ai brand generator**
- educational/technical terms like **building ai agents with llms rag and knowledge graphs**
- broad category terms like **artificial intelligence in business**

That is not buyer traffic. It is **interested traffic**.

#### 2) Keyword intent is too top-of-funnel
Biggest spend sits on:
- ai solutions for business
- ai tools for business
- ai implementation

These are not terrible terms, but they are **earlier-stage and broader** than “hire someone to audit/implement AI for my company”. They create volume, not necessarily leads.

#### 3) Quality Score confirms relevance problems
- **"ai for small business" = QS 1**
- previously **"ai marketing for small business" = QS 1**, now paused
- **"ai consultant" = QS 5** and expensive at nearly £3 CPC

This is Google telling us the ad/landing page/user intent alignment is weak on some of the exact terms eating spend.

#### 4) Campaign structure is too blunt
Blue Canvas is still effectively running from **one generic ad group**. That means:
- one pool of search intent is being mixed together
- ad copy can’t be tightly matched to the query theme
- landing page matching is diluted
- quality score and downstream CVR both suffer

#### 5) Bidding/settings may be encouraging low-quality click volume
Live campaign settings show:
- **Blue Canvas uses TARGET_SPEND / Maximise Clicks behaviour**
- **Google Search Partners is ON**

That combo is fine for gathering traffic early, but when conversion tracking is weak and keyword intent is broad, it can optimise toward **cheap clicks rather than qualified clicks**.

---

## 2B. OpenClaw Consultant

### What the data says
Campaign totals:
- 89 impressions
- 11 clicks
- CTR 12.36%
- £21.37 spend
- 0 conversions

Top keyword / term evidence:
- **keyword:** [openclaw automation] exact — 10 clicks, £19.38, 87 impressions, 11.49% CTR
- **search term:** **openclaw** — 10 clicks, £19.38, 80 impressions, 12.5% CTR
- **openclaw setup** — 1 click, £1.99, QS 3

### Diagnosis
This campaign has a cleaner traffic profile than Blue Canvas, but a different problem:

**The traffic is mostly brand/platform curiosity around “openclaw”, not obviously “I want to hire a consultant”.**

That means the clicks may include:
- people trying to understand what OpenClaw is
- devs / tinkerers / DIY users
- people looking for docs, install help, or product info
- only a subset looking for done-for-you setup

### Huge measurement problem: conversion tracking on the site is clearly not ready
The live site code shows:
- form submits to Formspree
- success redirects to `/thank-you`
- the thank-you page contains placeholder script:

```js
'send_to': 'AW-CONVERSION_ID/CONVERSION_LABEL'
```

That means **the Google Ads conversion on OpenClaw Consultant is not actually wired correctly on the thank-you page**.

So even if form leads happened, Google Ads may not record them.

### Additional OpenClaw issues
#### 1) Offer friction
The site is asking for a form submission / consultation rather than a simpler low-friction action like:
- book audit
- get setup quote
- request OpenClaw install checklist
- see packages by use case

#### 2) Messaging may be too broad / too clever for paid search
Ad headlines like:
- “OpenClaw Expert - Real Use”
- “AI Agent Automation - UK”
- “Custom OpenClaw Skills Built”

These are decent, but for a tiny-volume niche campaign, the message should probably be more brutally direct:
- OpenClaw Setup Service
- Hire an OpenClaw Consultant
- We Install and Configure OpenClaw
- Custom Skills + Production Setup

Right now the ad likely wins curiosity clicks from people interested in the product category, not necessarily buyers.

---

## 3. Conversion setup assumptions and risks

## Blue Canvas
### What exists in account
Enabled conversion actions:
- **Book appointment** — GA4 custom, primary
- **Contact Form Submission** — webpage conversion, value £750, primary
- **Phone Number Click** — webpage conversion, value £100, primary

### Concern
Workspace notes show on **10 March**:
- conversion actions were created
- tracking snippet was prepared
- **PJ still needed to paste JS into Webflow Footer Code and publish**

That creates a real possibility that Blue Canvas conversions have been **under-tracked or not tracked consistently** for part of this spend window.

### Important nuance
Phil also said there have been **no actual enquiries or bookings**. So this is **not just a tracking issue**.

My read:
- **tracking may be incomplete**, so reported zero may slightly understate reality
- but **true conversion performance is still genuinely poor**
- fixing tracking alone will not save this account

## OpenClaw
### This one is much clearer
The thank-you page still uses placeholder Ads conversion IDs.

So on OpenClaw Consultant:
- **Google Ads conversion tracking is effectively not production-ready**
- reported zero conversions cannot be fully trusted

---

## 4. Device and geo review

## Device performance
### Blue Canvas
- Mobile: 105 clicks, £117.27, CTR 18.26%
- Desktop: 29 clicks, £46.07, CTR 14.65%
- Tablet: 5 clicks, £6.75, CTR 26.32%

### OpenClaw
- Desktop: 8 clicks, £15.54, CTR 17.78%
- Mobile: 3 clicks, £5.83, CTR 6.98%

### Read
- **Blue Canvas is mostly mobile traffic**. That can be okay, but broad curiosity terms on mobile often convert worse for B2B services.
- **OpenClaw clearly skews better on desktop**. That fits a more technical B2B product/service.

## Geo performance
Targeted locations in both campaigns:
- United Kingdom
- Ireland
- Northern Ireland

Observed country-level presence traffic:
- **Blue Canvas:** UK + Ireland
- **OpenClaw:** almost entirely Ireland in the returned geo rows

### Read
- Geo is **not the main problem**, but it may be too loose for the current budget.
- For Blue Canvas, UK+Ireland+NI is okay in principle, but with broad keywords it increases wasted variation.
- For OpenClaw, the traffic pool is already tiny, so geo is less urgent than intent and tracking.

---

## 5. Ranked list of likely causes of weak performance

## 1) Wrong keyword intent / search-term pollution **(most likely)**
**Confidence: high**

Evidence:
- spend concentrated on broad “AI for business” type queries
- multiple curiosity/informational search terms in paid traffic
- branded irrelevant traffic still present
- campaign name says “AI Audit” but traffic is not strongly AI-audit intent

Why it matters:
- decent CTR becomes meaningless if query intent is weak
- traffic can look healthy while pipeline stays dead

## 2) Broken / incomplete tracking **(very likely)**
**Confidence: high**

Evidence:
- Blue Canvas tracking rollout was incomplete in logs on 10 March
- OpenClaw thank-you page still contains placeholder conversion ID/label
- conversion action reporting query returns no action-level activity in last 30 days

Why it matters:
- prevents smart bidding from learning
- makes decision-making shaky
- may hide soft wins

## 3) Offer / CTA mismatch **(likely)**
**Confidence: medium-high**

Evidence:
- broad AI searchers are being pushed to consultation / form / audit asks
- OpenClaw searchers may be in DIY mode, not “hire an expert” mode
- Blue Canvas broad terms don’t tightly match a priced audit offer

Why it matters:
- even relevant clicks won’t convert if the next step feels too large or mismatched

## 4) Campaign structure and ad relevance weakness **(likely)**
**Confidence: medium-high**

Evidence:
- Blue Canvas effectively runs from one generic ad group
- poor QS on some important keywords
- landing page spread across homepage / consultation LP / audit LP without tight segmentation

Why it matters:
- poor matching = worse QS = worse conversion rate = noisy learning

## 5) Landing page issues **(real, but not sole cause)**
**Confidence: medium**

Evidence already logged elsewhere:
- slow LCP
- modal/visibility issues on Blue Canvas
- some relevance mismatch

Why it matters:
- yes, they hurt
- but the ads are also sending the wrong people, so fixing page only is not enough

## 6) Not enough data yet **(minor factor only)**
**Confidence: mixed**

- For **Blue Canvas**: no, there is enough evidence to act
- For **OpenClaw**: partly yes, but enough exists to tighten strategy now

---

## 6. What to do tomorrow — practical optimisation plan

## A. Blue Canvas: focus here first

### Pause immediately
Pause these keywords / traffic themes:
- **"ai for small business"** — QS 1, weak alignment
- keep **"ai marketing for small business"** paused
- strongly consider pausing **"ai tools for business"** unless moved into its own test bucket with tight negatives
- strongly consider pausing **"ai solutions for business"** unless moved into its own test bucket with tighter copy/LP

### Add negatives immediately
Add exact/phrase negatives for terms/themes showing clear non-buyer behaviour:
- alli ai
- alicia lyttle
- ai brand generator
- ai small business ideas
- building ai agents
- llms
- rag
- knowledge graphs
- artificial intelligence in business
- artificial intelligence technologies in business
- ai in business
- enterprise ai solutions *(unless Phil wants enterprise traffic)*
- enterprise ai *(if not target market)*

Also expand blocks around:
- tools
- examples
- ideas
- course/training/learn
- brand names / competitor tools
- DIY / how-to language

### Restructure the campaign
Split Blue Canvas into intent-specific ad groups or separate campaigns:

#### 1. AI Audit — highest intent
Keywords only around:
- ai audit
- ai audit for business
- ai readiness assessment
- ai business audit
- ai opportunity assessment
- ai consultant for business audit

Landing page:
- **send only to `/lp/ai-audit`**

#### 2. AI Consultant / AI Consultancy
Keywords:
- ai consultant
- ai consultancy
- artificial intelligence consulting
- ai consulting services
- ai consultant ireland / uk / northern ireland

Landing page:
- dedicated consultant/services page, not generic homepage if possible

#### 3. AI Implementation / Automation
Keywords:
- ai implementation consultant
- ai automation consultant
- business automation consultant
- ai workflow automation for business

Landing page:
- implementation-focused page

#### 4. Broad exploration bucket (optional, low budget only)
Keywords like:
- ai tools for business
- ai solutions for business

This should either:
- be paused entirely for now, or
- get a very small test budget and aggressive negatives

### Rewrite Blue Canvas ad copy
Current ads are good at getting clicks but too broad.

Test new messaging that qualifies the visitor harder:
- **AI Audit for SMEs — From £750**
- **Find 3 AI Wins in 14 Days**
- **AI Consultant for UK Businesses**
- **Book an AI Readiness Call**
- **Practical AI Audit, Not Hype**
- **For Firms Ready to Implement AI**

Description examples:
- We audit your processes, identify the best AI opportunities, and give you a practical implementation plan.
- For UK businesses that want real AI use cases, not another generic workshop. Book a free intro call.

### Change bidding/settings
- **Turn off Search Partners** on Blue Canvas for now
- If tracking is verified, move away from pure click-seeking behaviour
- Near-term safest path: **Manual CPC or Maximise Clicks with tighter intent** until clean conversions start
- Do **not** move to smart conversion bidding until tracking is definitely working

### Device action
- Keep mobile live, but monitor more harshly
- If broad traffic continues to waste budget, consider:
  - lowering mobile bids on Blue Canvas
  - keeping desktop neutral

### Budget recommendation
Until cleanup is done:
- **Blue Canvas keeps majority of budget**, but at a **controlled** level
- Suggested immediate split: **70-80% Blue Canvas / 20-30% OpenClaw**
- Do **not** raise total budget tomorrow

---

## B. OpenClaw Consultant: tighten, don’t scale

### Fix tracking first
This is non-negotiable.
On `/thank-you`, replace placeholder:
- `AW-CONVERSION_ID/CONVERSION_LABEL`
with the real Ads conversion action details.

If not fixed, tomorrow’s data is still suspect.

### Tighten keyword focus
Keep only the most commercial OpenClaw terms live for now:
- [openclaw consultant]
- [openclaw setup]
- [openclaw implementation]
- [hire openclaw expert]
- "openclaw consultant"
- "openclaw setup service"

Reduce reliance on generic **openclaw** / curiosity-matching behaviour.

### Add DIY/info negatives
Add or confirm negatives like:
- openclaw github
- openclaw docs
- openclaw documentation
- openclaw tutorial
- openclaw install
- openclaw download
- open source
- how to
- guide

### Rewrite ad copy more commercially
Current message should be made more explicit:
- **Hire an OpenClaw Consultant**
- **OpenClaw Setup Service UK**
- **We Install & Configure OpenClaw**
- **Custom Skills + Production Setup**
- **Done-For-You OpenClaw Deployment**

Descriptions:
- We set up OpenClaw properly: install, gateway, models, skills, integrations, training.
- Ideal for businesses that want OpenClaw running fast without trial-and-error.

### Budget recommendation
Keep this campaign on a **small validation budget** until:
- tracking works
- commercial search terms broaden beyond plain “openclaw”
- first lead or at least credible high-intent search term pattern appears

---

## 7. Which campaign deserves more focus?

## Winner for tomorrow: **Blue Canvas**
Why:
- enough volume to diagnose properly
- clearer commercial service offer
- more wasted spend available to recover fast
- more upside from restructuring and negatives

## OpenClaw Consultant should be treated as:
- a niche test campaign
- mostly brand/high-intent capture
- not yet ready for aggressive budget allocation

### Recommended focus split
- **Primary:** Blue Canvas / AI Audit + AI Consultant intent cleanup
- **Secondary:** OpenClaw tracking fix + tighter high-intent brand terms only

---

## 8. Most important next actions in order

### Before spending another meaningful chunk
1. **Fix OpenClaw thank-you page conversion tag**
2. **Confirm Blue Canvas conversion snippet is live and firing**
3. **Turn off Search Partners on Blue Canvas**
4. **Pause QS1 / weak-intent keywords**
5. **Add a fresh round of aggressive negatives from actual paid search terms**
6. **Split Blue Canvas into tighter intent buckets**
7. **Rewrite ads to qualify harder, not just attract clicks**
8. **Keep budgets flat until at least one tracked lead or much cleaner search-term quality appears**

---

## 9. Final verdict

Phil’s instinct is right: **the websites are not the whole story**.

The bigger issue is this:
- **Blue Canvas ads are currently too broad and too curiosity-friendly**
- **OpenClaw tracking is not production-ready**
- **CTR is masking weak commercial intent**

If this were my blunt call:
- **don’t bin the campaigns**
- **don’t scale them either**
- **tighten intent, fix measurement, then judge the landing pages again with cleaner traffic**

That’s the real blocker/opportunity stack right now.
