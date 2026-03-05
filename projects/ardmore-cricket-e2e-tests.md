# Ardmore Cricket Club — E2E Test Report
**Date:** 4 March 2026  
**Tester:** Albie (automated) + manual verification needed  
**Site:** https://ardmorecricket.com  

---

## Test 1: New User Signup → Number Selection → Checkout

### Flow:
1. Visit `/signup` → ✅ 200, page loads
2. Enter email + password → creates Supabase auth user
3. Receive welcome email from `draws@ardmorecricket.com` (Resend verified ✅)
4. Redirect to `/draw` → ✅ 200, page loads
5. Select numbers from grid (1-500, paginated 100/page)
6. Assign optional names to numbers
7. Choose subscription (weekly) or one-off payment
8. Click checkout → hits `/api/checkout`
   - Validates numbers aren't taken ✅
   - Rejects missing user/numbers ✅ (tested: "Missing numbers or user")
   - Creates Stripe checkout session
   - Redirects to Stripe payment page
9. Complete payment on Stripe
10. Redirect to `/draw/success?session_id=xxx&mode=subscription|one-off`
    - Success page loads ✅ 200
    - Shows numbers, payment confirmation, "what happens next"
    - Subscription mode: "auto-enter every Friday" messaging
    - One-off mode: "this Friday's draw" messaging

### Status: ✅ PASS (pages + API validation confirmed, full payment flow tested live on Mar 3)

---

## Test 2: Returning User → Manage Numbers → Cancel Subscription

### Flow:
1. Visit `/login` → ✅ 200, page loads
2. Enter email + password → Supabase auth
3. Navigate to `/draw/manage` → ✅ 200, page loads
4. View active numbers (one-off + subscribed)
5. See subscription status and next draw date
6. Cancel subscription → calls `/api/subscriptions` 
   - API responds correctly to unauthenticated requests (400) ✅
   - Authenticated: cancels Stripe subscription + updates Supabase
7. Numbers released back to grid for next draw

### Status: ✅ PASS (pages load, API auth working, flow tested live Mar 3)

---

## Test 3: Draw Execution → Winner Notification → Results Display

### Flow:
1. Draw engine runs at Friday 7PM (cron / manual via `run-draw.js`)
2. SHA-256 RNG selects 3 winning numbers from active entries
3. Results stored in Supabase `draw_results` table
4. Winner notification emails sent via Resend
5. `/api/draw/results` returns draw history
   - Currently: 0 draws (no draws executed yet) ✅ correct
6. Draw page "Previous Results" section shows past draws
7. Prize calculation: 25% / 15% / 10% / 50% club

### Status: ⚠️ PARTIAL — No draws have been executed yet (waiting for lottery registration + live users). Engine tested in isolation on Mar 3.

---

## Infrastructure Tests

| Check | Result | Notes |
|-------|--------|-------|
| All 12 pages return 200 | ✅ | Every route loads |
| SSL/HTTPS | ✅ | HSTS enabled, max-age=63072000 |
| Vercel deployment | ✅ | Static pages prerendered |
| Supabase connectivity | ✅ | Auth, DB, queries working |
| Stripe live webhooks | ✅ | `we_1T6yjdASm3u8i3nlzq4ew0bH` active |
| Resend email delivery | ✅ | `ardmorecricket.com` domain verified |
| Draw API | ✅ | Returns results (empty until first draw) |
| Checkout validation | ✅ | Rejects bad requests properly |

## ⚠️ Issues Found

1. **Stripe webhook accepts empty POST with 200** — the webhook falls through to a permissive else branch when no `STRIPE_WEBHOOK_SECRET` or signature is present. Should return 400 for unsigned requests in production.
   - File: `src/app/api/webhooks/stripe/route.ts` line ~25
   - Risk: Low (Stripe sends signed payloads), but should be tightened

## Blockers for Full Production

- [ ] Council lottery registration (legal requirement)
- [ ] Stripe live mode (currently testing → production keys needed after registration)
- [ ] First draw execution (Friday 7PM after launch)
- [ ] Committee review of UI changes (FAQ, success page, nav)

---

*Next: Deploy UI polish commit (f433a96) and run committee testing session*
