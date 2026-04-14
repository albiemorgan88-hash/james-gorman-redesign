# Checker logic

## Checker goal
Give the user a fast, useful readiness signal, not a legal verdict.

The output should answer three things:
- how likely the EU AI Act is to matter for them
- how prepared they look from a governance and controls point of view
- what the next sensible step is

## Recommended checker length
- 10 to 12 questions
- ideally one question per step on mobile
- use plain English labels, not legal jargon

## Question set

### Q1. EU exposure
**Question:** Does your business sell into the EU, support EU clients, deploy AI in the EU, or produce outputs that affect people in the EU?

**Answers / score:**
- No, none of those: 0
- Not sure / possibly: 5
- Yes, in at least one of those ways: 10

### Q2. How AI is used
**Question:** Which best describes your current AI use?

**Answers / score:**
- We only experiment occasionally: 2
- We use third-party AI tools in business operations: 6
- We sell or deploy AI-enabled products, services, or workflows: 10

### Q3. Consequential use cases
**Question:** Does your AI influence decisions about people, access, eligibility, safety, or important business outcomes?

**Answers / score:**
- No: 0
- Sometimes / limited cases: 8
- Yes, regularly: 16

**Flag as critical if:** answer is "Yes, regularly"

### Q4. Prohibited-practice proximity
**Question:** Are you using AI for any of the following: manipulative or deceptive influence, social scoring, untargeted biometric scraping, emotion recognition in workplace or education, or other highly restricted uses?

**Answers / score:**
- No: 0
- Not sure: 15
- Yes / possibly in one area: 30

**Flag as critical if:** answer is not "No"

### Q5. Model / GPAI exposure
**Question:** Are you building your own general-purpose AI capability, fine-tuning foundation models heavily, or placing AI systems on the market under your own brand?

**Answers / score:**
- No: 0
- Partly / not sure: 6
- Yes: 12

### Q6. AI system inventory
**Question:** Do you have a current list of AI systems, what they do, and who owns them?

**Answers / score:**
- Yes, documented: 0
- Partly: 5
- No: 10

### Q7. Risk assessment and documentation
**Question:** Have you documented how each important AI use case is assessed, approved, and monitored?

**Answers / score:**
- Yes: 0
- Partly: 5
- No: 10

### Q8. Human oversight
**Question:** Is there clear human review, escalation, and override for outputs that could materially affect people or decisions?

**Answers / score:**
- Yes: 0
- Partly: 5
- No: 10

### Q9. AI literacy / training
**Question:** Have the people using or overseeing these systems had role-appropriate AI training?

**Answers / score:**
- Yes: 0
- Partly: 3
- No: 6

### Q10. Transparency and labelling
**Question:** If people interact with your AI or consume AI-generated content, do you explain that clearly where needed?

**Answers / score:**
- Yes: 0
- Partly: 3
- No / not sure: 6

### Q11. Vendor assurance
**Question:** Do you have usable documentation from vendors on model behaviour, intended use, limitations, and controls?

**Answers / score:**
- Yes: 0
- Partly: 3
- No: 6

### Q12. Incident logging and complaints
**Question:** Do you have a way to log issues, complaints, or failures linked to your AI systems?

**Answers / score:**
- Yes: 0
- Partly: 2
- No: 5

## Scoring model
### Raw scoring
Add all question scores.

Suggested raw score range:
- minimum: 0
- maximum: 121

### Bucket thresholds
- 0 to 20: **Lower immediate exposure**
- 21 to 45: **Early action recommended**
- 46 to 75: **Priority readiness work needed**
- 76+: **High-priority review needed**

## Override rules
Use the raw score first, then apply these overrides.

### Override 1
If Q4 is anything other than "No", minimum result bucket becomes:
- **Priority readiness work needed**

### Override 2
If Q4 is "Yes / possibly in one area", result becomes:
- **High-priority review needed**

### Override 3
If Q3 is "Yes, regularly" and either Q8 or Q7 is not fully in place, minimum result bucket becomes:
- **Priority readiness work needed**

### Override 4
If Q1 is "No, none of those" and score is under 25, the result copy should note:
- lower immediate AI Act exposure, but still worth maintaining core AI governance basics

## Result buckets and guidance

### Bucket 1: Lower immediate exposure
Show when:
- score is low
- no critical flags
- little or no EU touchpoint

On-screen copy:
- The EU AI Act may be a lower immediate priority based on your answers.
- Keep basic governance in place and review again if your EU footprint or AI use changes.

Suggested next steps:
- maintain a simple AI use register
- confirm ownership for AI tools in use
- review again before any EU expansion or new customer-facing use case

### Bucket 2: Early action recommended
Show when:
- some EU or operational exposure exists
- governance is patchy but not obviously severe

On-screen copy:
- The Act may be relevant to you and there are a few gaps worth tightening now.
- Getting organised early should make later compliance work much easier.

Suggested next steps:
- document key AI systems and owners
- tighten vendor evidence and approval steps
- confirm what training and transparency measures are in place

### Bucket 3: Priority readiness work needed
Show when:
- meaningful exposure exists
- controls look incomplete
- a critical-ish pattern appears but not the most severe outcome

On-screen copy:
- Your answers suggest the EU AI Act is likely relevant and you have meaningful readiness gaps to address.
- A structured review would help you prioritise the right fixes before the main August 2026 deadline window.

Suggested next steps:
- map systems, owners, and affected processes
- review risk classification and intended use
- strengthen documentation, oversight, and escalation
- speak with Blue Canvas about a practical roadmap

### Bucket 4: High-priority review needed
Show when:
- higher-risk or potentially prohibited-use signals appear
- score is high or critical flags are triggered

On-screen copy:
- Your answers suggest higher-priority issues that deserve proper review soon.
- This self-check is not a legal determination, but it does indicate more urgent follow-up is sensible.

Suggested next steps:
- pause and review the relevant use cases in detail
- gather vendor and internal documentation
- confirm oversight, controls, and accountability
- book a consultation promptly

## Result UI recommendation
Show immediately after the last question:
- result bucket
- short explanation
- 3 likely review areas
- 3 next-step actions

Then invite the user to unlock the detailed summary by submitting their details.

## Lead data to capture
### Visible form fields
- First name
- Last name
- Work email
- Company name
- Job title
- Company website
- Company size
- Country
- Main AI use case
- Target timeframe
- Biggest blocker
- Phone number (optional)
- Consent checkbox

### Hidden fields
- checker score
- result bucket
- critical flags
- question responses
- referral page URL
- timestamp
- UTM source
- UTM medium
- UTM campaign
- click ID if available

## CRM / follow-up notes
The lead notification should include:
- score and bucket in the subject or summary line
- answers in a readable format
- a short auto-generated interpretation
- whether a call CTA was clicked

## Important wording rule
Never label the result as:
- compliant
- non-compliant
- certified
- legally approved

Always label it as:
- readiness view
- self-check result
- likely pressure points
- recommended next steps
