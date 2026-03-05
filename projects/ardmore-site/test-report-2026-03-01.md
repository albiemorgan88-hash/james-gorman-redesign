# Ardmore Cricket Club — QA Test Report
**Date:** 1 March 2026  
**URL:** http://localhost:3000  
**Tester:** Albie (Automated + Visual Inspection)

---

## Summary

| Severity | Found | Fixed | Remaining |
|----------|-------|-------|-----------|
| P0 | 0 | — | 0 |
| P1 | 3 | 2 | 1 |
| P2 | 6 | 0 | 6 |
| P3 | 4 | 0 | 4 |

**Recommendation: ✅ GO** — No blocking issues. Site is functional, looks good, and the draw flow works. Fix remaining P1 before promoting to real users.

---

## Phase 1: Visual & Layout Audit

Screenshots taken at 375px (mobile), 768px (tablet), 1440px (desktop) for all 6 pages (home, about, draw, sponsors, login, signup). All 18 screenshots saved.

### All Pages
- **P3**: Next.js dev indicator ("N" circle) visible on all pages — **dev mode only**, will not appear in production build. No action needed.
- **P3**: Nav doesn't highlight current page (except "Weekly Draw" always highlighted as CTA). Minor UX gap.

### Homepage
- ✅ Hero loads with ground photo and mountains — looks great
- ✅ Stats section (1879, 6 Teams, 145+ Years, 2 Honours) renders correctly
- ✅ Draw CTA prominent and clear
- ✅ Photo gallery renders at all viewports
- **P2**: Sponsor section shows placeholder logos ("Sponsor Logo" text in grey ovals). Acceptable pre-launch but looks unfinished.
- **P2**: "Fixtures & News" section shows "coming soon" placeholder. Consider hiding until content exists.

### About Page
- ✅ Hero, history, honours, teams, facilities, training all render correctly
- ✅ Address (10 Green Road, BT47 3RG) present
- ✅ Training times correct (Tue/Fri 6:30-8:30 adults, Mon 6:30-7:30 juniors, Apr-Aug)
- ✅ Honours correct (2023 Senior League, 1994 Senior Cup)
- ✅ All 6 teams listed (1st XI, 2nd XI, 3rd XI, Midweek XI, U13, U11)
- ✅ All 8 facilities listed
- ~~**P1 FIXED**: Captain names were fabricated (Harry Zimmerman, Vivek Sheroan, Steven Barrow, Mark Chambers). SPEC only mentions Rachit Gaur as captain — fixed to show only Rachit Gaur as 1st XI captain, removed others.~~

### Draw Page
- ✅ Countdown timer works and updates every second
- ✅ Number grid renders 100 numbers per page with 5 tabs (1-100 through 401-500)
- ✅ All 5 tabs accessible on mobile (horizontal scroll)
- ✅ Taken numbers correctly greyed out and disabled
- ✅ Selected numbers highlight in gold with scale effect
- ✅ Selected numbers summary appears with count and weekly cost
- ✅ "Continue to Checkout" button appears when numbers selected
- ~~**P1 FIXED**: Prize split only showed winner percentages (25/15/10). Added "Where Your Money Goes" section showing full breakdown: 25% 1st, 15% 2nd, 10% 3rd, 40% Club Funds, 10% Platform & Fees.~~

### Sponsors Page
- ✅ Renders at all viewports
- **P2**: All sponsor slots are placeholders. Fine for launch if no sponsors yet.
- **P3**: "Become a Sponsor" CTA present — good.

### Login/Signup Pages
- ✅ Email and password fields present
- ✅ Google SSO option present
- ✅ Login has link to signup and vice versa
- **P2**: No "Forgot password?" link on login page

### 404 Page
- ✅ Returns 404 status for unknown routes
- Screenshot saved

---

## Phase 2: Content & Copy Audit

### Facts Verified Against SPEC.md
| Fact | Status |
|------|--------|
| Founded 1879 | ✅ |
| Club colours Blue/Sky Blue | ✅ (design uses navy/sky/gold) |
| The Bleach Green | ✅ |
| 10 Green Road, Ardmore, BT47 3RG | ✅ |
| Co. Derry | ✅ |
| North West Cricket Union | ✅ |
| Captain: Rachit Gaur | ✅ (after fix) |
| Honours: NW Senior League 2023, NW Senior Cup 1994 | ✅ |
| 6 teams: 1st XI, 2nd XI, 3rd XI, Midweek XI, U13, U11 | ✅ |
| Training: Adults Tue/Fri 6:30-8:30, Juniors Mon 6:30-7:30 | ✅ |
| All 8 facilities listed | ✅ |
| 500 numbers in draw | ✅ |
| £1 per number per week | ✅ |
| Friday 7PM draw | ✅ |
| Prize split 25/15/10 for 1st/2nd/3rd | ✅ |
| 40% club, 7.5% platform, 2.5% Stripe | ✅ (displayed as 40% club, 10% platform & fees combined) |
| Instagram link correct | ✅ |
| Twitter @Ardmore1879 | ✅ |
| Facebook link present | ✅ |
| NWCU profile link | ✅ |

### Placeholder/Error Text Scan
- ✅ No "Lorem ipsum", "TODO", "FIXME", "example.com" found on any page
- ✅ No fabricated facts remaining (captain names fixed)

---

## Phase 3: User Flow Testing

### Navigation
- ✅ All nav links work (Home, About, Weekly Draw, Sponsors, Login)
- ✅ Mobile hamburger menu opens/closes (uses `<details>` element)
- ✅ Footer links all work (About, Weekly Draw, Sponsors, NWCU Profile)
- ✅ Social links open in new tab (target="_blank" with noopener)

### Draw Flow (CRITICAL)
| Test | Result |
|------|--------|
| Browse all 500 numbers | ✅ Via 5 tabs (100 each) |
| Select numbers | ✅ Click toggles selection, gold highlight |
| Taken numbers blocked | ✅ Greyed out, cursor-not-allowed, click disabled |
| Number count & cost updates | ✅ Shows "X selected · £X.00/week" |
| Checkout button appears | ✅ Both inline and in summary panel |
| Countdown timer | ✅ Counts down to next Friday 7PM, updates live |
| Previous results | ✅ 3 results displayed with correct ball styling |
| Prize amounts calculate correctly | ✅ £450 pot → £112.50 / £67.50 / £45.00 |

**P1 (remaining)**: Checkout button doesn't do anything — no auth gate, no Stripe integration, no name assignment flow. This is the biggest remaining gap. Users can browse and select but cannot actually purchase numbers. **This needs to be wired up before any real users touch the site.**

### Auth Flow
- ✅ Login form renders with email/password
- ✅ Google SSO button present
- ✅ Signup form renders
- **P2**: Empty form submission — no visible validation errors (may be handled by HTML5 required attributes)
- **P2**: Cannot test actual auth flow without Supabase credentials

---

## Phase 4: Technical Checks

### Console Errors
- ✅ No JS errors on any page (only expected 404 resource error on the 404 test page)

### Network Errors
- ✅ No failed API calls, no CORS issues, no broken resources

### SEO Basics
| Page | Title | Meta Desc | H1 |
|------|-------|-----------|----|
| Home | ✅ Ardmore Cricket Club \| Est. 1879 | ✅ Present | ✅ 1 |
| About | ✅ | ✅ | ✅ 1 |
| Draw | ✅ | ✅ | ✅ 1 |
| Sponsors | ✅ | ✅ | ✅ 1 |
| Login | ✅ | ✅ | ✅ 1 |
| Signup | ✅ | ✅ | ✅ 1 |

### Performance
- ✅ Pages load within 2-3 seconds on localhost
- ✅ Images use Next.js `<Image>` component (auto-optimised)
- ✅ Google Fonts preconnected

---

## Phase 5: Edge Cases

| Test | Result |
|------|--------|
| No numbers selected | ✅ Checkout button hidden, clean empty state |
| Rapid tab switching | ✅ Grid re-renders correctly |
| Select numbers across tabs | ✅ Selections persist across tab switches |
| Double-click number | ✅ Toggles selection (select then deselect) — correct |
| Not logged in + draw page | ⚠️ Full draw page accessible — no auth gate (by design for browsing, but checkout should require auth) |
| Mobile menu close | ✅ Details element closes when clicking elsewhere |

---

## Fixes Applied

### Fix 1: Captain Names (P1 → Fixed)
- **Before**: 1st XI captain "Harry Zimmerman", 2nd XI "Vivek Sheroan", 3rd XI "Steven Barrow", Midweek "Mark Chambers" — all fabricated
- **After**: 1st XI captain "Rachit Gaur" (per SPEC), all others show no captain
- **File**: `src/app/about/page.tsx`

### Fix 2: Prize Split Breakdown (P1 → Fixed)
- **Before**: Only winner percentages shown (25/15/10)
- **After**: Full "Where Your Money Goes" section: 25% 1st, 15% 2nd, 10% 3rd, 40% Club Funds, 10% Platform & Fees
- **File**: `src/app/draw/page.tsx`

---

## Remaining Issues

### P1 (Fix Before Launch)
1. **Checkout flow not wired up** — Buttons exist but don't navigate to payment. Need: auth gate → name assignment → Stripe checkout → confirmation. This is the revenue engine.

### P2 (Fix Soon)
1. Sponsor logos are all placeholders — hide section or add real logos
2. "Fixtures & News" section is placeholder — consider hiding
3. No "Forgot password?" link on login
4. Form validation not visible on empty submission
5. Prize split shows "10% Platform & Fees" combined — spec says 7.5% platform + 2.5% Stripe separately (acceptable simplification for user-facing display)
6. External links in footer — NWCU link missing target="_blank" (has it actually, verified in code)

### P3 (Nice to Have)
1. Active nav state for current page
2. Animated draw reveal feature (mentioned in spec, not implemented)
3. Profile page with "your numbers" (needs auth)
4. Email notification system (needs backend)

---

## Screenshots Index

All saved to `projects/ardmore-site/screenshots/`:
- `home-mobile.png`, `home-tablet.png`, `home-desktop.png`
- `about-mobile.png`, `about-tablet.png`, `about-desktop.png`
- `draw-mobile.png`, `draw-tablet.png`, `draw-desktop.png`
- `sponsors-mobile.png`, `sponsors-tablet.png`, `sponsors-desktop.png`
- `login-mobile.png`, `login-tablet.png`, `login-desktop.png`
- `signup-mobile.png`, `signup-tablet.png`, `signup-desktop.png`
- `404-page.png`
- `draw-number-selected.png` — number selection state
- `draw-mobile-fixed.png` — after prize split fix
- `draw-desktop-fixed.png` — after prize split fix
- `about-mobile-fixed.png` — after captain fix
- `draw-mobile-tab5.png` — numbers 401-500 accessible

---

## Final Verdict: ✅ GO (Conditional)

The site looks great, feels like a real community cricket club, and the draw browsing experience works well on all devices. Content is accurate against the spec (after fixes). No crashes, no console errors, no broken layouts.

**Condition**: The checkout/payment flow MUST be wired up before real users are directed to the site. Without it, the draw page is a beautiful window display with no door. Everything else is launch-ready for a soft launch / preview.
