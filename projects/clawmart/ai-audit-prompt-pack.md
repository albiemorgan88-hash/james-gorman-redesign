# AI Audit Prompt Pack

20 battle-tested prompts to audit any business for AI opportunities. Used on real clients generating £4M+ in expansion.

---

## OVERVIEW

### What This Skill Does
A structured prompt pack that walks you through auditing any business for AI opportunities. Covers discovery, operations analysis, data assessment, and opportunity scoring. Produces a client-ready AI roadmap.

### Use Cases
- Conducting AI readiness assessments for prospective clients
- Identifying automation opportunities in your own business
- Building AI implementation proposals with clear ROI estimates
- Qualifying leads by understanding their AI potential before pitching

### Who It's For
- AI consultants and agencies looking for a structured audit process
- Business owners exploring AI for the first time
- OpenClaw operators who want to offer AI audit services
- Any agent persona that does business analysis or consulting

---

## COMPATIBILITY

### Works With
Any OpenClaw persona, Claude, ChatGPT, or any LLM-based agent. These are universal prompts.

### Requirements
- Any LLM chat interface
- No CLI tools, APIs, or special setup needed

---

## INSTALLATION

### Prerequisites
None — copy and use immediately.

### Setup
Save this file to your workspace or skills directory. Reference the prompts during client calls or async audits.

---

## THE PROMPTS

### Phase 1: Discovery (5 Prompts)

#### Prompt 1: Business Overview Extraction
```
I'm conducting an AI audit for [BUSINESS NAME], a [INDUSTRY] business with [X] employees in [LOCATION]. 

Based on this information, help me understand:
1. What are the most common repetitive tasks in a typical [INDUSTRY] business of this size?
2. Where do businesses like this typically waste the most time?
3. What customer-facing processes could benefit from AI automation?
4. What data does a business like this typically generate but not use?

Format your response as a structured assessment I can share with the client.
```

#### Prompt 2: Pain Point Discovery
```
I've spoken with [CLIENT NAME] at [BUSINESS]. They mentioned these challenges:
[PASTE CLIENT'S DESCRIBED CHALLENGES]

Analyse each challenge and identify:
1. Which are symptoms vs root causes
2. Which could be addressed with current AI technology
3. Estimated time savings if automated (hours per week)
4. Priority order based on impact and feasibility

Be specific — use real numbers and timeframes, not vague estimates.
```

#### Prompt 3: Process Mapping
```
Map the key business processes for a [INDUSTRY] company with [X] employees. For each process, identify:
1. Who performs it currently
2. How many hours per week it consumes
3. Whether it's repetitive/rule-based (high automation potential) or creative/judgment-based (augmentation potential)
4. What tools/systems are currently used
5. AI automation score (1-10, where 10 = fully automatable today)

Focus on: [LIST KEY DEPARTMENTS — e.g., sales, customer service, admin, marketing, operations]
```

#### Prompt 4: Technology Stack Assessment
```
The client currently uses these tools and systems:
[LIST THEIR TOOLS — e.g., Xero, Mailchimp, Shopify, Excel, WhatsApp for business]

For each tool, identify:
1. Does it have AI features they might not be using?
2. Can it integrate with AI tools via API or Zapier?
3. What AI-powered alternatives exist?
4. Quick wins: What can they do THIS WEEK with their existing tools + AI?
```

#### Prompt 5: Competitive Landscape
```
Research how AI is being used in the [INDUSTRY] sector in the UK in 2026. Focus on:
1. What are leading companies doing with AI?
2. What's the adoption rate among SMEs?
3. What are the most common first AI implementations?
4. What competitive advantages are early adopters gaining?
5. What's the cost of NOT adopting AI in this sector?

Include specific UK examples and data where possible.
```

### Phase 2: Operations Analysis (5 Prompts)

#### Prompt 6: Admin Automation Audit
```
The client spends approximately:
- [X] hours/week on email management
- [X] hours/week on scheduling and calendar
- [X] hours/week on data entry and filing
- [X] hours/week on report generation
- [X] hours/week on invoicing and accounts

For each category, recommend:
1. Specific AI tool or automation (name the product)
2. Expected time saving (percentage and hours)
3. Implementation cost (monthly)
4. Setup time required
5. ROI timeline (weeks to break even)
```

#### Prompt 7: Customer Service Analysis
```
The client handles customer enquiries via: [CHANNELS — e.g., phone, email, WhatsApp, website form]
Volume: approximately [X] enquiries per [DAY/WEEK]
Common enquiry types: [LIST — e.g., pricing, availability, booking, complaints]

Design an AI-assisted customer service system that:
1. Handles routine enquiries automatically (specify which ones)
2. Routes complex issues to humans with context
3. Works 24/7 without additional staffing costs
4. Maintains the client's brand voice
5. Includes cost estimate and expected deflection rate
```

#### Prompt 8: Sales Pipeline Optimisation
```
The client's current sales process:
- Lead sources: [LIST]
- Qualification method: [DESCRIBE]
- Follow-up process: [DESCRIBE]
- Average deal size: £[X]
- Conversion rate: [X]%
- Sales cycle length: [X] days/weeks

Identify AI opportunities to:
1. Improve lead scoring and qualification
2. Automate follow-up sequences
3. Personalise outreach at scale
4. Predict which leads are most likely to close
5. Reduce sales cycle length

Include specific tools and expected improvement percentages.
```

#### Prompt 9: Content and Marketing Assessment
```
The client's current marketing activities:
- Website: [URL] (traffic: [X]/month)
- Social media: [PLATFORMS] (posting frequency: [X]/week)
- Email marketing: [YES/NO] (list size: [X])
- Blog/content: [YES/NO]
- Paid ads: [YES/NO] (monthly spend: £[X])

Recommend an AI-powered marketing stack that:
1. Reduces content creation time by 50%+
2. Improves SEO performance
3. Personalises email campaigns
4. Optimises ad spend
5. Generates measurable ROI within 4 weeks

Be specific about tools, costs, and expected results.
```

#### Prompt 10: Operations Efficiency Score
```
Based on everything we know about [BUSINESS]:
[SUMMARISE KEY FINDINGS SO FAR]

Calculate an AI Readiness Score (0-100) across these dimensions:
- Data readiness (do they have usable data?): /25
- Process maturity (are processes documented and repeatable?): /25
- Technology stack (can their tools integrate with AI?): /25
- Team readiness (is the team open to AI adoption?): /25

For each dimension, explain the score and what would improve it.
Overall score interpretation: 0-25 (early stage), 26-50 (developing), 51-75 (ready), 76-100 (advanced).
```

### Phase 3: Data Assessment (5 Prompts)

#### Prompt 11: Data Inventory
```
Help me catalogue the data assets for [BUSINESS]. For a typical [INDUSTRY] business with [X] employees, identify:
1. Customer data (CRM, email lists, purchase history)
2. Financial data (accounts, invoices, expenses)
3. Operational data (schedules, inventory, timesheets)
4. Marketing data (website analytics, social metrics, ad performance)
5. External data they could access (market data, competitor info, industry benchmarks)

For each data source: where is it stored, what format, how clean is it likely to be, and what AI applications could use it?
```

#### Prompt 12: Data Gap Analysis
```
To implement the AI opportunities we've identified for [BUSINESS], we need:
[LIST THE AI OPPORTUNITIES]

For each opportunity, identify:
1. What data is required
2. What data the client likely already has
3. What data gaps exist
4. How to fill each gap (and cost/time estimate)
5. Minimum viable data needed to get started
```

#### Prompt 13: Data Quality Assessment
```
The client provided sample data from their [SYSTEM]:
[DESCRIBE DATA — e.g., "3 years of sales data in Excel, customer records in a CRM with 2,000 contacts"]

Assess:
1. Is this sufficient for AI/ML applications?
2. Common data quality issues to check for
3. Cleaning steps required before AI can use it
4. Estimated time and cost to prepare the data
5. Quick wins possible with the data as-is
```

#### Prompt 14: Privacy and Compliance Check
```
[BUSINESS] handles the following data types:
[LIST — e.g., customer names, emails, purchase history, health records, financial data]

They operate in: [UK/EU/OTHER]
Industry regulations: [LIST ANY — e.g., FCA, ICO, GDPR, medical confidentiality]

Assess:
1. GDPR compliance requirements for AI processing
2. Lawful basis needed for each data type
3. Data Protection Impact Assessment requirements
4. Required consent and transparency measures
5. Red lines — what data should NOT be processed by AI
```

#### Prompt 15: Data Strategy Recommendations
```
Based on the data audit for [BUSINESS]:
- Available data: [SUMMARISE]
- Data gaps: [SUMMARISE]
- Quality issues: [SUMMARISE]
- Compliance status: [SUMMARISE]

Create a 90-day data strategy that:
1. Week 1-2: Quick wins with existing data
2. Week 3-4: Data cleaning and preparation
3. Month 2: Fill critical data gaps
4. Month 3: Launch first AI application
5. Ongoing: Data governance and quality maintenance
```

### Phase 4: Opportunity Scoring (5 Prompts)

#### Prompt 16: Opportunity Matrix
```
We've identified these AI opportunities for [BUSINESS]:
[LIST ALL OPPORTUNITIES FROM PREVIOUS PHASES]

Score each on a 1-10 scale for:
- IMPACT: Revenue increase or cost saving potential
- FEASIBILITY: How easy to implement with current tech and data
- SPEED: How quickly it delivers ROI
- RISK: What could go wrong (inverse — 10 = low risk)

Calculate a priority score (weighted average: Impact 35%, Feasibility 25%, Speed 25%, Risk 15%)
Rank all opportunities by priority score.
Present as a table.
```

#### Prompt 17: ROI Calculator
```
For the top 5 opportunities identified:
[LIST TOP 5 WITH DETAILS]

For each, calculate:
1. Implementation cost (one-off)
2. Ongoing monthly cost
3. Expected monthly benefit (time saved × hourly rate, or revenue increase)
4. Break-even point (months)
5. 12-month ROI percentage
6. 3-year total value

Use realistic UK business costs. Assume fully loaded employee cost of £[X]/hour for time savings.
```

#### Prompt 18: Implementation Roadmap
```
Create a 6-month implementation roadmap for [BUSINESS] based on these prioritised opportunities:
[LIST IN PRIORITY ORDER]

For each phase:
- Month 1-2: [Quick wins — what to implement first]
- Month 3-4: [Core systems — the big impact items]
- Month 5-6: [Advanced — the transformative stuff]

Include: specific tools, costs, responsible person, success metrics, and dependencies.
Format as a Gantt-style timeline the client can actually follow.
```

#### Prompt 19: Risk Assessment
```
For the proposed AI implementation at [BUSINESS]:
[SUMMARISE THE PLAN]

Identify and assess:
1. Technical risks (integration failures, data issues, tool limitations)
2. People risks (resistance to change, skills gaps, over-reliance)
3. Financial risks (cost overruns, delayed ROI, subscription creep)
4. Compliance risks (GDPR, industry regulation, AI Act)
5. Reputational risks (customer trust, AI errors, bad publicity)

For each risk: likelihood (1-5), impact (1-5), mitigation strategy.
```

#### Prompt 20: Executive Summary Generator
```
Generate a professional AI Audit Executive Summary for [BUSINESS OWNER NAME] at [BUSINESS].

Include:
1. One-paragraph business overview
2. AI Readiness Score (/100) with breakdown
3. Top 5 recommended AI initiatives (one line each with expected ROI)
4. Total estimated annual value of AI adoption
5. Recommended first step and timeline
6. Investment required vs expected return

Tone: professional but plain-spoken. No jargon. This is for a business owner, not a technician.
Format: ready to send as a PDF or email. Under 2 pages.
```

---

## SAMPLE WORKFLOW

### Complete AI Audit Process

1. **Pre-call**: Run Prompts 1 and 5 to prepare industry context
2. **Discovery call**: Use Prompts 2-4 during or after the conversation
3. **Analysis**: Run Prompts 6-10 with the information gathered
4. **Data review**: Run Prompts 11-15 if data access is provided
5. **Scoring**: Run Prompts 16-17 to prioritise and quantify
6. **Roadmap**: Run Prompts 18-19 to build the plan
7. **Delivery**: Run Prompt 20 to generate the executive summary

**Total time**: 2-4 hours for a comprehensive audit
**Output**: Professional AI audit document with clear recommendations and ROI estimates

---

## TIPS FOR BEST RESULTS

- Fill in the brackets with real client information — the more specific, the better
- Run prompts sequentially — each builds on the last
- Challenge the AI's estimates — ask "is that realistic?" and "what assumptions are you making?"
- Always fact-check statistics before including in client deliverables
- Customise the executive summary tone for each client
- Use British English for UK clients (colour, optimise, organise)

---

## VERSION INFO
- Version: 1.0.0
- Created: April 2026
- Author: Phil Patterson, Blue Canvas AI
- Website: https://www.bluecanvas.ai
- Tested with: OpenClaw, Claude, ChatGPT
