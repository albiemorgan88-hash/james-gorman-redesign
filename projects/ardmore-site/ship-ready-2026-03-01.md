# Ship Ready Report — ardmorecricket.com
**Date:** 1 March 2026  
**Reviewer:** Albie (Ship Ready QA)  
**Verdict:** ✅ SHIP WITH CAVEATS

---

## User Persona
**Primary:** Club member aged 25-65, male, moderate tech comfort, on mobile (iPhone/Android). Shared via WhatsApp group chat. Wants to support the club and maybe win a few quid. Curious but skeptical.

**User story:** "I got a link in the Ardmore WhatsApp group about some weekly draw. I want to see what it's about and maybe buy a number if it's easy and legit."

---

## Step 1: 5-Second Test (Mobile)

| Question | Before | After |
|----------|--------|-------|
| Do I know what this site IS? | ✅ Yes — "Ardmore Cricket Club" is clear | ✅ Same |
| Do I know what to DO? | ✅ Yes — "Join the Weekly Draw" gold CTA | ✅ Same |
| Does it feel trustworthy? | ⚠️ Mostly — sponsor placeholders undermined it | ✅ Yes — placeholders removed |

**Verdict: PASS**

---

## Step 2: Visual Hierarchy Audit

### Screenshots taken at 375px and 1440px for all 8 pages:
- `home-mobile.png` / `home-desktop.png` (before)
- `home-mobile-after.png` / `home-desktop-after.png` (after)
- `draw-mobile.png` / `draw-desktop.png` (before)  
- `draw-mobile-after.png` / `draw-desktop-after.png` (after)
- `about-mobile.png` / `about-desktop.png`
- `committee-mobile.png` / `committee-desktop.png`
- `news-mobile.png` / `news-desktop.png`
- `sponsors-mobile.png` / `sponsors-desktop.png`
- `login-mobile.png` / `login-desktop.png`
- `signup-mobile.png` / `signup-desktop.png`
- `mobile-menu-open.png` (before) / `mobile-menu-after.png` (after)

### Key findings:
- **Typography:** Playfair Display headings + Inter body works well. Heritage feel without being stuffy.
- **Color palette:** Navy/gold/cream is cohesive throughout. No rogue colors.
- **Spacing:** Generally good. Some sections could use tighter mobile padding.
- **Images:** All real photos (ground, team, trophy). No stock photos. Appropriate and authentic.

---

## Step 3: Copy & Content Audit

### Tone: ✅ Good
- Warm, community-focused, appropriate for a Derry cricket club
- Not too corporate, not too sparse
- "Pick your numbers. Support your club. Win prizes." is perfect

### Issues found & fixed:
- **Sponsor placeholders** saying "Sponsor Logo" × 12 across homepage + sponsors page → **FIXED: Replaced with proper CTA copy**
- **Homepage news section** was empty (just 2 buttons, no content) → **FIXED: Added 2 real article cards**
- **"145+ Years" stat** was redundant with "Founded 1879" → **FIXED: Removed, now 3 stats**

### Issues remaining (P3):
- Previous draw results are hardcoded (Feb dates) — should pull from DB when live draws begin
- About page duplicates some info from Committee page (office bearers, teams)
- Sponsor tier benefits could be more specific

---

## Step 4: Draw Flow Testing

### The revenue engine — tested obsessively:

| Aspect | Before | After | Status |
|--------|--------|-------|--------|
| Is it clear what the draw IS? | Mostly — relied on assumed knowledge | Added plain-English explainer paragraph | ✅ Fixed |
| Can I see available numbers? | Yes, but 10-col grid was tiny on mobile | 5-col grid on mobile, 44px+ cells | ✅ Fixed |
| Is the price clear? | Buried in How It Works steps | Now in explainer paragraph too | ✅ Fixed |
| Is prize split clear? | Two competing sections (pot + breakdown) | Kept both — they serve different purposes | ⚠️ P3 |
| Can I select numbers on mobile? | No — cells were ~33px, below 44px minimum | 5-col grid = ~65px cells | ✅ Fixed |
| Is "assign a name" obvious? | Yes, once numbers selected | Same | ✅ |
| Is subscription vs one-off clear? | Yes, radio toggle is well-designed | Same | ✅ |
| What happens when logged out? | Silent failure — tap grid, nothing happens | Prominent sign-in CTA + info card above grid | ✅ Fixed |
| Is countdown prominent? | Yes | Same | ✅ |
| £0 pot display | Shows "£0.00" — demotivating | Shows "Building..." with encouraging copy | ✅ Fixed |
| Previous results | Display well with gold/sky/navy circles | Same | ✅ |

### Would I actually use this?
**Yes, after the fixes.** The flow is: land → understand → sign in → pick numbers → checkout via Stripe. It's clear and trustworthy. A 55-year-old club member would figure it out.

---

## Step 5: Navigation

| Test | Result |
|------|--------|
| Can I get anywhere in 2 taps? | ✅ Yes — all pages in nav |
| Mobile hamburger works? | ✅ Yes — opens/closes correctly |
| Touch targets adequate? | ✅ Fixed — increased to 44px+ per item |
| Current page indicated? | ⚠️ "Weekly Draw" always gold, not dynamic active state (P2) |
| Can I always get home? | ✅ Yes — logo/wordmark links home |
| Back button works? | ✅ Yes — standard Next.js routing |

---

## Step 6: Interaction Polish

| Element | Status |
|---------|--------|
| Button hover states | ✅ All buttons have hover transitions |
| Link hover states | ✅ Gold on hover throughout |
| Loading spinners | ✅ Checkout shows "Redirecting to Stripe..." |
| Transitions | ✅ Smooth color transitions, gallery hover zoom |
| Touch targets (grid) | ✅ Fixed — 44px+ on mobile |
| Touch targets (menu) | ✅ Fixed — 44px+ per item |
| Form inputs | ✅ Clear labels, focus rings, error states |
| Mobile menu animation | ⚠️ Uses `<details>` — instant open, no animation (P2) |

---

## Step 7: Squint Test

Squinted at each page at 375px and 1440px:
- **Homepage:** ✅ Balanced. Hero → content → CTA → gallery → news → sponsors flows well.
- **Draw page:** ✅ Strong visual hierarchy. Countdown draws eye, grid is the main action, results are social proof.
- **About:** ✅ Clean sections, good rhythm.
- **Committee:** ✅ Card layouts work well.
- **News:** ✅ Category pills add color variety.
- **Sponsors:** ✅ Much better without placeholder logos.
- **Login/Signup:** ✅ Standard auth forms, well-executed.

---

## Fixes Applied

### P0 (Ship blockers) — ALL FIXED
1. **Sponsor placeholder logos removed** from homepage and sponsors page. Replaced with proper copy and CTA.
2. **Number grid touch targets** increased from ~33px to ~65px on mobile (5-col instead of 10-col).
3. **Logged-out grid experience** now shows prominent sign-in card with gold CTA instead of silent failure.
4. **£0 pot display** now shows "Building..." with encouraging copy instead of demotivating zeros.

### P1 (Must fix) — ALL FIXED
5. **Mobile menu touch targets** increased to 44px+ per item, added separator, wider dropdown.
6. **Homepage news section** now shows 2 real article cards instead of empty space with buttons.
7. **Redundant "145+ Years" stat** removed, now clean 3-column layout.
8. **Hero subheading** shortened on mobile (hides address, keeps the key message).
9. **Draw page explainer** added plain-English paragraph explaining how the draw works.
10. **Body text alignment** fixed — left-aligned on mobile where it was center-aligned.
11. **Sign-in CTA on draw page** changed from subtle text link to prominent gold button.

### P2 (Remaining backlog)
- Active nav state should highlight current page dynamically
- Mobile menu could use slide animation instead of `<details>` instant toggle
- Prize info sections on draw page could be consolidated
- Footer link touch targets could be slightly larger
- About page is long — could benefit from anchor nav or accordions
- Back-to-top button on long pages

### P3 (Nice to have)
- Number search/input field on draw page ("go to number 247")
- Quick Pick random number generator
- Winner names in Previous Results (with permission)
- WhatsApp/phone help contact for less tech-savvy members
- Drop seconds from countdown on mobile

---

## Build & Commit
```
✅ npm run build — successful, all routes compiled
✅ git commit: "Ship ready polish — fix draw UX, remove placeholders, improve mobile nav"
   Hash: 4ae6adb
   4 files changed, 68 insertions(+), 50 deletions(-)
```

---

## Verdict: ✅ SHIP WITH CAVEATS

**The site is ready to ship.** The core experience — homepage impression, draw flow, navigation, auth — all work well. The design is appropriate for a community cricket club: warm, proud, local. The draw flow is clear enough for a 55-year-old club member to figure out on their phone.

### Caveats:
1. **Previous draw results are hardcoded** — fine for launch but need to pull from DB once real draws happen
2. **No actual sponsor logos** — the section handles this gracefully now, but real logos should be added when available
3. **Mobile menu uses `<details>` element** — functional but lacks animation polish. Not a blocker.

### The golden question: "Would I be proud to show this to someone I respect?"
**Yes.** It's clean, it's honest, it represents the club well. Ship it.
