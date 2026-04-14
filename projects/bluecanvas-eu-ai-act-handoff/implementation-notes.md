# Implementation notes

## Build recommendation
Keep this as one conversion-focused page on bluecanvas.ai.

Best practical build options:
1. Webflow page with custom embed for the checker logic
2. Frontend page with lightweight client-side state and form submission to the usual lead flow

Either is fine. The key is speed, clarity, and reliable lead capture.

## Recommended anchor links
- `#checker` for the self-check
- `#who-its-for` for qualification section
- `#what-it-covers` for scope section
- `#timeline` for key dates
- `#faq` for FAQ
- `#book` for the consultation block

## Component behaviour
### Hero CTAs
- Primary CTA scrolls to `#checker`
- Secondary CTA scrolls to `#book` or opens booking link

### Checker behaviour
- one question per step on mobile
- show progress clearly, for example `Question 4 of 12`
- keep next button disabled until an answer is selected
- allow back navigation without wiping the state
- preserve answers if the user scrolls away and returns in the same session

### Result behaviour
After final answer:
- calculate score instantly client-side
- display result bucket immediately
- show concise next-step bullets
- reveal lead form directly below

### Form behaviour
- prefill hidden fields with score, bucket, and answers JSON
- on submit, send both visible lead data and checker metadata
- after submit, show thank-you confirmation in place without a jarring page reload if possible

## Static vs dynamic split
### Static content
Can be fully static:
- hero
- audience section
- what the check covers
- timeline section
- Blue Canvas CTA block
- FAQ
- final CTA
- legal microcopy

### Dynamic content
Should be dynamic:
- checker step state
- score calculation
- result bucket selection
- conditional result bullets
- hidden form field population
- thank-you state

## Suggested technical structure
### If built in Webflow
- build most sections natively in Webflow
- place checker inside an Embed component
- use a small JS object for questions, answers, scores, and result logic
- send form data through Webflow forms, Zapier, Make, HubSpot, or existing CRM route

### If built in code
- keep question config in a simple JSON/JS array
- separate copy from logic where possible
- use one result renderer that swaps content by bucket
- keep legal wording centralised so it is not duplicated inconsistently

## Mobile notes
- mobile-first is the priority
- large tap targets for answer cards
- sticky bottom CTA after the hero is optional but helpful
- avoid long paragraphs inside the checker
- keep form fields stacked with sensible autocomplete attributes

## Desktop notes
- keep the checker column narrow enough to feel guided
- do not let the form dominate the page before the result appears
- date cards can sit in a neat horizontal row

## Visual direction
The page should feel aligned with Blue Canvas:
- clean, modern, calm
- more confidence than drama
- avoid compliance cliché visuals like gavels, courthouse icons, or red sirens
- use restrained accent colour for urgency, not full alarm mode

## Accessibility
- semantic headings and section landmarks
- keyboard navigable answer cards or radios
- visible focus styles
- adequate colour contrast
- do not rely on colour alone for result severity

## Analytics and tracking
Track at minimum:
- hero CTA clicks
- checker starts
- checker completions
- result bucket distribution
- form submissions
- consultation CTA clicks

Useful extras:
- drop-off by question number
- UTM-tagged conversion rate
- which result buckets convert best

## Content rules for build
- British English throughout
- do not call it a compliance certification
- do not say a user is compliant or non-compliant
- use the exact dates from `legal-notes.md`
- include the caveat about proposed simplification changes

## Recommended QA checklist
- check every score path and bucket threshold
- test each override rule
- verify hidden fields populate correctly
- test form submission with each bucket
- test mobile completion end to end
- proof dates and legal wording line by line
