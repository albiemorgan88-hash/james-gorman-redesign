# Wireframe

## Low-fi page wireframe

```text
┌──────────────────────────────────────────────────────────────┐
│ NAV / HEADER                                                │
│ Blue Canvas logo                              Book a call    │
├──────────────────────────────────────────────────────────────┤
│ HERO                                                        │
│ Eyebrow: EU AI Act readiness self-check                     │
│ H1: Check how ready your business is for the EU AI Act      │
│ Short supporting copy                                       │
│ [Start the self-check] [Book a consultation]                │
│ Small trust note: plain-English, 3 mins, not legal advice   │
├──────────────────────────────────────────────────────────────┤
│ TIMING / CREDIBILITY STRIP                                  │
│ Entered into force: 1 Aug 2024                              │
│ Most remaining obligations: 2 Aug 2026                      │
│ Some Annex I-linked obligations: 2 Aug 2027                 │
│ Small caveat on proposed simplification changes             │
├──────────────────────────────────────────────────────────────┤
│ CHECKER                                                     │
│ Progress bar                                                │
│ Q1                                                          │
│ Q2                                                          │
│ Q3                                                          │
│ ...                                                         │
│ [Back]                                         [Next]       │
├──────────────────────────────────────────────────────────────┤
│ RESULT PREVIEW                                              │
│ Bucket headline                                             │
│ Score band / readiness label                                │
│ 3 key issues likely to review                               │
│ 3 recommended next steps                                    │
│ [Get my detailed result]                                    │
├──────────────────────────────────────────────────────────────┤
│ LEAD FORM                                                   │
│ Name / Work email / Company / Role / Website                │
│ Company size / Country / Timeline / Biggest blocker         │
│ Consent checkbox                                            │
│ [Email me the detailed result]                              │
├──────────────────────────────────────────────────────────────┤
│ WHO THIS IS FOR                                             │
│ 3 to 4 audience cards                                       │
├──────────────────────────────────────────────────────────────┤
│ WHAT THE CHECK COVERS                                       │
│ Exposure / Use case risk / Governance / Vendor controls     │
│ Human oversight / Training / Documentation                  │
├──────────────────────────────────────────────────────────────┤
│ TIMELINE SECTION                                            │
│ Date cards + explanatory note                               │
├──────────────────────────────────────────────────────────────┤
│ WHY BLUE CANVAS                                             │
│ Short benefit list + consultation CTA                       │
├──────────────────────────────────────────────────────────────┤
│ FAQ                                                         │
│ 5 to 7 collapsible questions                                │
├──────────────────────────────────────────────────────────────┤
│ FINAL CTA                                                   │
│ [Start the self-check] [Book a consultation]                │
└──────────────────────────────────────────────────────────────┘
```

## Section-by-section component notes

### 1. Header
Components:
- simple nav
- primary button: Book a consultation

Purpose:
- keep orientation simple
- preserve a high-intent route for people who do not want the checker

### 2. Hero
Components:
- eyebrow label
- H1
- supporting paragraph
- primary CTA
- secondary CTA
- trust microcopy

Purpose:
- establish the offer instantly
- make the checker the obvious next click

### 3. Timing / credibility strip
Components:
- 3 or 4 compact stat/date cards
- one-line caveat beneath

Purpose:
- create urgency with real dates
- show this is current and considered, not generic evergreen fluff

### 4. Checker module
Components:
- section heading
- short intro
- progress bar
- one-question-at-a-time stepper or grouped cards
- back / next controls
- save state in browser session if possible

Purpose:
- drive engagement
- create a feeling of momentum
- reduce drop-off, especially on mobile

Recommendation:
- one question per screen on mobile
- two-column answer cards only on desktop if it still feels clean

### 5. Result preview
Components:
- bucket badge
- short interpretation
- likely gaps list
- next-step bullets
- CTA into lead form

Purpose:
- give genuine value before the form
- make the visitor feel the tool is useful, not bait

### 6. Lead form
Components:
- short headline
- concise form fields
- optional hidden fields for score and answers
- submission button
- privacy reassurance line

Purpose:
- convert engaged users into qualified leads
- preserve checker context for follow-up

### 7. Who this is for
Components:
- 3 or 4 audience cards
- each card with examples

Purpose:
- help visitors self-identify
- qualify out bad-fit traffic politely

### 8. What the check covers
Components:
- icon or bullet grid
- six areas maximum

Purpose:
- show depth without overwhelming the user

### 9. Timeline section
Components:
- horizontal date row on desktop
- stacked cards on mobile
- supporting note on evolving guidance

Purpose:
- anchor urgency
- reinforce exact timing language

### 10. Why Blue Canvas
Components:
- short proof-style bullets
- consultation CTA card

Purpose:
- position Blue Canvas as the practical next step after the self-check

### 11. FAQ
Components:
- accordion list

Purpose:
- handle uncertainty and reduce objections before submission

### 12. Final CTA
Components:
- repeated primary CTA
- repeated secondary CTA

Purpose:
- catch users who scroll before acting

## Behaviour notes
- Keep transitions quick and unobtrusive.
- Do not use scary red warning states too early.
- Use amber/red only in the results state where justified.
- Show progress so completion feels achievable.
- Keep the form below the result preview rather than before the checker.
