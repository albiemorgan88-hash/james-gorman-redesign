# Ship Ready — Product Polish & Quality Gate

## Philosophy
You are shipping product, not code. Every pixel, every word, every interaction matters. Channel the obsessive attention to detail of Steve Jobs, the design restraint of Jony Ive, and the user empathy of Airbnb's design team. Nothing ships until it's right.

## When to Use
- Before ANY site goes live or gets shared with a client/user
- After major feature builds
- When Phil says "ship it" or "is this ready?"
- As the final gate before production deployment

## The Ship Ready Process

### Step 0: Define the User
Before touching anything, answer:
- **Who is the primary user?** (Be specific — age, tech comfort, context)
- **What are they trying to accomplish?** (Their goal, not yours)
- **What device are they on?** (Probably mobile, probably distracted)
- **What's their emotional state?** (Excited? Skeptical? Confused?)

Write a 2-sentence user story. Everything that follows serves this person.

### Step 1: The 5-Second Test
Open the homepage on mobile. In 5 seconds:
- Do I know what this site IS?
- Do I know what I should DO next?
- Does it feel trustworthy?

If any answer is no, that's a P0. The hero, headline, and primary CTA must pass this test.

### Step 2: Visual Hierarchy Audit
For EVERY page, screenshot at 375px (mobile) and 1440px (desktop). Then ask:

**Layout & Space:**
- Is there a clear visual hierarchy? (What do my eyes land on first, second, third?)
- Is there enough whitespace? (Cramped = amateur)
- Are elements aligned consistently? (Check left edges, spacing between sections)
- Does the page breathe, or is it suffocating?

**Typography:**
- Is the heading font distinctive enough to set the tone?
- Is body text readable? (16px minimum on mobile, good line-height)
- Are there too many font sizes? (Max 4-5 sizes across the whole site)
- Is text contrast sufficient? (WCAG AA minimum — 4.5:1 for body, 3:1 for large text)

**Colour:**
- Is the palette cohesive? (No rogue colours)
- Are accent colours used sparingly and purposefully?
- Do CTAs stand out from everything else?
- Does it look good in both light conditions and dark rooms?

**Images:**
- Do images add value or just fill space?
- Are they high quality? (No pixelation, no stretching)
- Do they load fast? (Check file sizes — compress anything over 500KB)
- Are they contextually appropriate? (No stock photos that feel fake, no screenshots of chat apps on a cricket website)
- Do they have proper alt text?

**Consistency:**
- Are button styles consistent across all pages?
- Are card designs consistent?
- Are hover/focus states consistent?
- Does the footer match the header in quality?

### Step 3: Copy & Content Audit
Read every single word on the site. Out loud if necessary.

**Tone:**
- Does the copy match who this site is for? (A cricket club shouldn't sound like a SaaS startup)
- Is it warm, human, and approachable?
- Would a real person actually say this?

**Clarity:**
- Can I understand every section in one read?
- Are headings descriptive? (Not clever — clear)
- Is anything too verbose? (Cut ruthlessly — if it doesn't serve the user, kill it)
- Is anything too sparse? (Does the user need more context here?)

**Accuracy:**
- Is every fact verifiable?
- Are dates, names, prices correct?
- Are there placeholder texts anywhere? ("Lorem ipsum", "TODO", "Coming soon" that shouldn't be)

**CTAs:**
- Does every page have a clear next action?
- Are CTA labels specific? ("Support Your Club" not "Click Here")
- Is there a logical flow from page to page?

### Step 4: User Flow Testing
Walk through every critical journey AS THE USER (not as a developer):

**Navigation Flow:**
- Can I get to any page in 2 taps?
- Does the mobile menu work smoothly? (Open, close, no jumpiness)
- Is the current page indicated in the nav?
- Can I always get home easily?
- Does back button work as expected?

**Primary Conversion Flow:**
Test the MAIN thing the site wants users to do, end to end:
1. Land on homepage
2. Understand what's being offered
3. Navigate to the action (e.g., draw page)
4. Complete the action (e.g., buy numbers)
5. Get confirmation
6. Know what happens next

At each step ask: "Would my mum know what to do here?"

**Secondary Flows:**
- Sign up / Login
- Browse information pages
- Contact / Social links
- Sponsor inquiry

**Error States:**
- What happens if I submit an empty form?
- What if I'm not logged in and try to do something protected?
- What if a page doesn't exist? (404)
- What if the API is slow? (Loading states)

### Step 5: Interaction Polish
The details that separate amateur from professional:

**Micro-interactions:**
- Do buttons have hover states?
- Do links have hover states?
- Are there loading spinners where needed?
- Do transitions feel smooth (not jarring)?
- Does the mobile menu animate?

**Touch targets:**
- Are all tappable elements at least 44x44px on mobile?
- Is there enough space between tappable elements? (No accidental taps)
- Can I scroll without accidentally hitting things?

**Forms:**
- Do inputs have clear labels?
- Is there inline validation?
- Are error messages helpful (not "Error: 422")?
- Does tab order make sense?
- Do number inputs use number keyboard on mobile?

**Performance:**
- Does the page load in under 3 seconds on 4G?
- Are images optimised?
- Is there a loading state for dynamic content?
- No layout shift as content loads?

### Step 6: The Squint Test
Literally squint at each page. When details blur away:
- Can you still see the structure?
- Do the important elements still stand out?
- Is the visual weight balanced?
- Does anything look "off" even if you can't articulate why?

If something feels wrong, it IS wrong. Trust the feeling and fix it.

### Step 7: The Fresh Eyes Test
Close everything. Wait 60 seconds. Open the site again as if you've never seen it.
- What's your first impression?
- Does anything confuse you?
- Does anything delight you?
- Would you trust this site with your money?

## Issue Severity
- **P0 (Ship blocker):** Broken flow, wrong information, embarrassing visual, trust destroyer
- **P1 (Must fix):** Confusing UX, poor mobile experience, inconsistent design, missing CTA
- **P2 (Should fix):** Minor visual polish, copy tweaks, micro-interaction improvements
- **P3 (Nice to have):** Enhancement ideas, future improvements

## Fix Protocol
1. Fix ALL P0s — these block shipping
2. Fix P1s — these affect user trust
3. Fix P2s if time permits — these show craft
4. Log P3s for later — don't gold-plate
5. After EVERY fix, re-check the surrounding area (fixes often create new issues)
6. Take before/after screenshots as proof of improvement

## Output
Save report to: `projects/[site-name]/ship-ready-[date].md`

Include:
- User persona definition
- 5-second test results
- Issues by severity with screenshots
- Fixes applied with before/after
- Final verdict: SHIP / NOT READY / SHIP WITH CAVEATS
- Remaining P2/P3 backlog

## The Golden Question
Before signing off, ask: **"Would I be proud to show this to someone I respect?"**

If the answer isn't an immediate yes, keep going.
