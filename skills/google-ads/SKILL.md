---
name: google-ads
description: Plan, research, and manage Google Ads campaigns for Blue Canvas AI consultancy. Use when PJ asks about Google Ads, keyword research, ad copy, campaign structure, budget planning, or CPC analysis. Integrates with Semrush API for keyword data.
---

# Google Ads Campaign Manager

## Account
- **Google Ads ID:** 801-851-4760
- **Campaign plan:** `projects/google-ads/campaign-plan-v2.md`
- **Nothing goes live without PJ approval**

## Keyword Research via Semrush

```bash
# Keyword overview (volume, CPC, competition)
curl -s "https://api.semrush.com/?type=phrase_all&key=${SEMRUSH_API_KEY}&phrase=KEYWORD&database=uk&export_columns=Ph,Nq,Cp,Co"

# Related keywords
curl -s "https://api.semrush.com/?type=phrase_related&key=${SEMRUSH_API_KEY}&phrase=KEYWORD&database=uk&export_columns=Ph,Nq,Cp,Co&display_limit=20"

# Keyword difficulty
curl -s "https://api.semrush.com/?type=phrase_kdi&key=${SEMRUSH_API_KEY}&phrase=KEYWORD&database=uk&export_columns=Ph,Kd"
```

**Always use `database=uk`**. Export columns: Ph=keyword, Nq=volume, Cp=CPC, Co=competition (0-1), Kd=difficulty.

## Campaign Structure

### Campaign 1: AI Audit (Core Service)
- Budget: £8/day (£240/month)
- Keywords: "ai audit", "artificial intelligence audit", "ai audit uk"
- Highest conversion intent — direct service match

### Campaign 2: Industry-Specific (Creative Play)
- Budget: £7/day (£210/month)
- Target industries: estate agents, law firms, accountants
- Pattern: "ai for [industry]", "ai tools for [industry]"
- High-value clients searching for industry-specific AI help

### Campaign 3: Problem-Aware (Pain Points)
- Budget: £5/day (£150/month)
- Sub-groups:
  - **Automation:** "ai workflow automation uk" (£0 CPC!), "automate business processes uk"
  - **AI Receptionist:** "ai receptionist uk" — feeds "Albie as a Service" funnel (£250/month recurring)
  - **AI SEO:** "ai seo agency" (720 vol, £0 CPC!) — nobody bidding
  - **Task-specific:** "ai invoice processing", "ai customer support", "ai lead generation"

### Campaign 4: Local NI (Cheap Domination)
- Budget: £3/day (£90/month)
- Keywords: "ai consultancy northern ireland" (£0), "ai services northern ireland" (£2.54)
- Own the entire first page for NI AI searches

## Budget Scenarios

| Scenario | Campaigns | Daily | Monthly |
|----------|-----------|-------|---------|
| Lean start | 1 + 4 | £11 | £330 |
| Growth | 1 + 2 + 4 | £18 | £540 |
| Full | All 4 | £23 | £690 |

**Launch order:** Start lean → add Industry (week 3) → add Problem-Aware (week 5) → kill/scale monthly.

## Ad Copy — Blue Canvas Tone

### Rules
- Practical, not salesy. Specific, not generic.
- Lead with the client's problem or industry
- Always include "Free Consultation" in headlines
- Use UK spelling
- Headlines: max 30 chars each (3 headlines)
- Description: max 90 chars x 2

### Template
```
Headline 1: [Problem/Industry] — [Benefit]
Headline 2: [Specific Outcome]
Headline 3: Free Consultation | Blue Canvas AI
Description: [Pain point acknowledgment]. [What we do]. [Proof/specificity]. [CTA].
```

## Negative Keywords

Add to ALL campaigns:
```
ai art, ai image, ai generator, midjourney, dall-e
ai jobs, ai salary, ai career, ai hiring
free course, free training, tutorial, certification, degree
mckinsey, deloitte, accenture, pwc, kpmg
chatgpt, openai, anthropic, google gemini
ai girlfriend, ai chat, ai companion
homework, student, assignment, essay
```

## £0 CPC Gems (Priority Keywords)

| Keyword | Volume |
|---------|--------|
| ai seo agency | 720 |
| automate business processes uk | 70 |
| ai consultancy northern ireland | 50 |
| ai for estate agents uk | 30 |
| ai workflow automation uk | 30 |
| business process automation consultants uk | 30 |
| ai seo northern ireland | 30 |
| ai training northern ireland | 10 |

**960 combined searches/month at £0 CPC. Prioritise these.**

## Workflow

1. **Research:** Use Semrush API to pull keyword data for new verticals
2. **Evaluate:** Score by volume, CPC, competition, and Blue Canvas service fit
3. **Draft:** Write ad copy following tone rules above
4. **Review:** Present to PJ with budget impact
5. **Launch:** Only after PJ approves — never auto-publish ads
6. **Optimise:** Monthly review — kill underperformers, scale winners
