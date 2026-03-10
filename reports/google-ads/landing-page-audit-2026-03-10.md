# Google Ads: Conversion Tracking & Landing Page Audit
**Date:** 10 March 2026  
**Site:** www.bluecanvas.ai  
**Google Ads ID:** AW-17928080997  
**Account:** 801-851-4760

---

## Task 1: Conversion Tracking Status

### What's Present ✅
| Tag | Status |
|-----|--------|
| Google Ads tag (AW-17928080997) | ✅ Installed and loading |
| GA4 tag (G-4V6VBC391D) | ✅ Installed and loading |
| Microsoft Clarity (vf82niitxf) | ✅ Installed |
| Structured data (JSON-LD) | ✅ Multiple schemas present |

### What's MISSING ❌ (Critical)

| Item | Status | Impact |
|------|--------|--------|
| **Conversion event firing** | ❌ NOT SET UP | Google Ads has zero conversion data |
| `gtag('event', 'conversion', {...})` | ❌ Missing | No form submissions tracked |
| `send_to` parameter | ❌ Missing | No conversion actions linked |
| Phone call conversion tracking | ❌ Missing | Call clicks not measured |
| Thank you page redirect | ❌ No redirect | Form shows inline "Thank you" message via Webflow |
| gclid parameter handling | ❌ Not configured | Can't attribute conversions to specific clicks |
| Conversion linker tag | ❌ Missing | Cross-domain tracking broken |

### How the Form Currently Works
- CTA buttons open a **modal popup** (not a new page)
- Modal contains a Webflow native form (Name, Email, Message)
- On submit, Webflow shows inline success message: *"Thank you! Your submission has been received!"*
- **No redirect to a /thank-you page** — so page-load conversion tracking won't work
- **No JavaScript event fires to Google Ads** on form submit

### What This Means
> **Google Ads is spending money with ZERO conversion data.** Smart Bidding strategies (tCPA, Maximise Conversions) have nothing to optimise against. Google literally cannot tell which clicks lead to enquiries.

### Fix Required (Priority: URGENT)
1. **Add conversion event on form submit** — inject this into the Webflow custom code:
```html
<script>
  // Fire Google Ads conversion on Webflow form submit
  document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('modal-contact');
    if (form) {
      form.addEventListener('submit', function() {
        gtag('event', 'conversion', {
          'send_to': 'AW-17928080997/XXXXX',  // Replace XXXXX with conversion label from Google Ads
          'value': 750,
          'currency': 'GBP'
        });
      });
    }
  });
</script>
```
2. **Create a conversion action in Google Ads** (Settings → Conversions → New conversion action → Website → Manual setup) to get the conversion label
3. **Consider phone call tracking** — the WhatsApp link (wa.me/447935217762) and phone numbers in structured data (+447828699027) should also fire conversion events
4. **Set up Enhanced Conversions** for better attribution with privacy restrictions
5. **Link GA4 to Google Ads** and import GA4 goals as secondary conversion actions

---

## Task 2: Landing Page Quality Analysis

### Current Landing Page: www.bluecanvas.ai (homepage)

#### Page Structure Assessment

| Element | Current State | Issue? |
|---------|--------------|--------|
| **Title tag** | "AI Consultancy Northern Ireland \| Blue Canvas" | ⚠️ "Northern Ireland" is hyper-local — ads target UK-wide |
| **Meta description** | "Northern Ireland AI consultancy based in Derry..." | ⚠️ Too local for UK-targeted ads |
| **H1** | "AI Consultancy Grows Your Business" | ⚠️ Doesn't match search terms directly |
| **H2s** | "AI Solutions for Every Stage of Growth", "Real Results..." | ✅ Decent |
| **H3s** | "AI strategy & Audits", "Implementation & Automation", "Training & Academy" | ✅ Relevant |
| **CTA above fold** | "Book Your Free AI Consultation Today" | ✅ Present but triggers modal |
| **Contact form** | Hidden behind modal popup | ⚠️ Not visible on page load |
| **Phone number** | Not visible on page (only in footer WhatsApp link + structured data) | ❌ Missing for call conversions |
| **Trust signals** | 3 client logos, 3 testimonials, £4M+ stat | ✅ Good |
| **Pricing** | Free consultation, £750 audit, £250 academy, £50/mo mentoring | ✅ Transparent |

#### Keyword Match Analysis

Target keywords vs. page content:

| Keyword | In H1? | In H2/H3? | In body text? | Match Quality |
|---------|--------|-----------|---------------|---------------|
| ai consultant | ❌ | ❌ | ❌ (uses "consultancy") | 🔴 Poor |
| ai for small business | ❌ | ❌ | ❌ ("SME" mentioned once) | 🔴 Poor |
| ai audit | ❌ | ✅ H3 | ✅ Multiple mentions | 🟡 OK |
| ai solutions for business | ❌ | ✅ H2 | ✅ Body text | 🟡 OK |
| ai consultancy | ✅ H1 | ❌ | ✅ Body text | 🟢 Good |
| ai automation | ❌ | ✅ H3 | ✅ Body text | 🟡 OK |

**Core problem:** The page talks about "AI consultancy" in general terms but doesn't directly address the specific pain points people search for. Someone searching "ai for small business" lands on a page that leads with "AI Consultancy Grows Your Business" — that's a message mismatch.

#### Mobile Performance (Critical for Quality Score)

| Metric | Score | Rating |
|--------|-------|--------|
| PageSpeed Mobile | 56/100 | 🔴 BELOW_AVERAGE |
| LCP (Largest Contentful Paint) | 12.6s | 🔴 Terrible (should be <2.5s) |
| Fonts loaded | 5 families (Merriweather, Vollkorn, Inter, Source Serif 4, Urbanist) + Typekit | 🔴 Excessive |
| Hero image | AVIF format (good) but large | ⚠️ |
| JavaScript animations | Multiple fade-up/stagger animations | ⚠️ Delays visible content |

**The 12.6s LCP alone will tank quality scores.** Google explicitly penalises slow mobile pages in Ad Rank calculations. This is likely the #1 reason for BELOW_AVERAGE landing page experience.

#### Why Google Rates the Landing Page BELOW_AVERAGE

1. **Mobile speed is terrible** — 12.6s LCP is ~5x slower than Google's threshold. This is the biggest single factor.
2. **Keyword-to-content mismatch** — Ads for "ai consultant" land on a page that doesn't use "consultant" (uses "consultancy"). Ads for "ai for small business" land on a page that barely mentions small business.
3. **No visible form on page load** — Google's crawler sees no form; it's hidden in a modal. The bot thinks there's no conversion mechanism.
4. **Font bloat** — 5 Google Fonts families + Typekit = massive render-blocking overhead. Most are probably unused or redundant.
5. **Content hidden behind JS animations** — `visibility: hidden !important` on hero elements until JS runs. Google's crawler may not see hero content.

---

## Recommendations (Prioritised)

### 🔴 P0 — Do This Week (Biggest Impact)

#### 1. Fix Conversion Tracking
- Create conversion action in Google Ads UI
- Add conversion event JavaScript to Webflow custom code (see code above)
- Without this, all ad spend is flying blind

#### 2. Fix Mobile Speed (LCP from 12.6s → <2.5s)
- **Remove unused fonts** — the site uses 5 Google Font families + Typekit. Audit which are actually used; likely can cut to 1-2 (Inter + one serif)
- **Remove `visibility: hidden` from hero** — the CSS rule `html.w-mod-js:not(.w-mod-ix3) ... {visibility: hidden !important;}` means hero content is invisible until JS loads. This destroys LCP.
- **Preload hero image** — add `<link rel="preload">` for the hero AVIF
- **Defer non-critical scripts** — Clarity, font loaders can be deferred

#### 3. Add a Visible Form on the Page (Not Just Modal)
- Add an inline contact form in the hero section OR a sticky form sidebar
- Google's crawler needs to see the form in the DOM without JavaScript interaction
- Keep the modal too, but the form should also be visible without clicking

### 🟡 P1 — Do This Month

#### 4. Create Dedicated Landing Pages for Each Ad Group
Instead of sending all traffic to the homepage, create:
- **/ai-consultant** — targeting "ai consultant", "ai consultant UK", "hire ai consultant"
  - H1: "Hire an AI Consultant for Your Business"
  - Focus on 1:1 consulting, Phil's expertise
- **/ai-for-small-business** — targeting "ai for small business", "ai solutions small business"
  - H1: "AI Solutions Built for Small Businesses"
  - Case studies from SME clients, ROI examples
- **/ai-audit** — targeting "ai audit", "ai audit for business"
  - H1: "AI Audit — Find Where AI Can Save You Time & Money"
  - Detail the audit process, deliverables, £750 pricing

Each page should have:
- Keyword in H1, title, meta description, and first paragraph
- Inline contact form (not just modal)
- Phone number visible
- Testimonial relevant to that service
- Fast mobile load (<2.5s LCP)

#### 5. Fix Title & Meta for Ad Traffic
Current: "AI Consultancy Northern Ireland | Blue Canvas"  
If ads target UK-wide, change to: "AI Consultancy UK | Blue Canvas — AI Audits, Automation & Training"

#### 6. Add Phone Number Prominently
- Clickable phone number in header/hero
- Enables Google Ads call extensions to match the landing page
- Current: phone only in structured data and WhatsApp footer link

### 🟢 P2 — Nice to Have

#### 7. Add Trust Elements Above the Fold
- Google/Trustpilot review rating
- "As seen in..." or industry certifications
- Number of clients served

#### 8. Implement Enhanced Conversions
- Hash and send form data (email) with conversion events
- Improves conversion attribution accuracy by 15-20%

---

## Expected Impact

| Fix | Expected Quality Score Impact | Timeline |
|-----|-------------------------------|----------|
| Conversion tracking | Won't change QS directly but enables Smart Bidding | 1 day to implement |
| Mobile speed fix | +2-3 points on landing page experience | 1-2 weeks |
| Dedicated landing pages | +2-4 points on ad relevance + landing page | 2-3 weeks |
| Visible form + phone | +1-2 points on landing page experience | 1 week |

**Combined:** Could take keywords from 1-3/10 quality score → 6-8/10, which would:
- Reduce CPC by 30-50%
- Improve Ad Rank (higher position for same bid)
- Increase conversion rate 2-5x (from conversion tracking + better landing pages)

---

## Summary

**The two biggest problems killing Google Ads performance:**
1. **Zero conversion tracking** — Google can't optimise because it has no data on which clicks convert
2. **12.6s mobile LCP** — Google is actively penalising the landing page for being slow

Fix these two things first. Everything else is optimisation on top.
