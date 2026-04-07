# SEO Fix Report — 2026-04-07

## Summary
- **8 blog post SEO titles fixed** (were MISSING)
- **3 blog post meta descriptions added** (were MISSING)
- **Schema markup BLOCKED** — API doesn't support `customCode` on pages (PATCH returns 404, PUT ignores the field)
- **Static pages reviewed** — all 41 pages already have SEO titles and descriptions; no fixes needed
- **H1 audit completed** — findings documented below

---

## 1. Blog Post SEO Title Fixes (8 posts)

All posts below had **no `seo-title` field set**, meaning the blog template would render a generic or missing `<title>` tag.

| Post | Old SEO Title | New SEO Title |
|------|--------------|---------------|
| AI for B2B Sales Automation (6863f23c) | ❌ MISSING | AI for B2B Sales Automation: Close More Deals \| Blue Canvas |
| AI Chat GPT Consulting (683740de) | ❌ MISSING | ChatGPT Consulting for UK Businesses \| Expert AI Guidance — Blue Canvas |
| How To Use AI In Business Development (68308207) | ❌ MISSING | How to Use AI in Business Development \| Practical Guide — Blue Canvas |
| AI Marketing (68250f75) | ❌ MISSING | AI Marketing for UK Businesses: Tools & Strategies \| Blue Canvas |
| AI Sales Coaching (681d2d42) | ❌ MISSING | AI Sales Coaching: Boost Your Team Performance \| Blue Canvas |
| Lead Generation AI (680fa528) | ❌ MISSING | AI Lead Generation: Automate Prospecting & Nurturing \| Blue Canvas |
| AI for Business Development & Marketing UK (67fd2244) | ❌ MISSING | AI for Business Development & Marketing UK \| Blue Canvas |
| AI Consultancy UK - Evolution of AI (67e48258) | ❌ MISSING | AI Consultancy UK: How AI Is Transforming Business Development \| Blue Canvas |

**Status:** ✅ All applied to staging (not published)

---

## 2. Blog Post Meta Description Fixes (3 posts)

These posts had **no `small-details` field** (which maps to the meta description via the blog template).

| Post | New Meta Description |
|------|---------------------|
| AI Consultancy in Northern Ireland: The Local Advantage (69b82176) | Why local AI consultancy beats remote. Discover the advantages of working with a Northern Ireland-based AI partner who understands your market. |
| AI for Startups: Why Early-Stage Companies Are Hiring AI Consultants (69b82132) | Early-stage companies are hiring AI consultants to build smarter from day one. Learn why startups that invest in AI strategy early scale faster. |
| How AI Consulting Agencies Work (And How to Pick the Right One) (69b820f1) | How AI consulting agencies actually work and what to look for when choosing one. Red flags, pricing models, and what good delivery looks like. |

**Status:** ✅ All applied to staging (not published)

---

## 3. Static Page Meta Audit

All 41 static pages were reviewed. **Every page already has both `seoTitle` and `seoDescription` populated.** The descriptions are all under 160 chars, include relevant keywords, and follow reasonable SEO patterns.

### Pages already well-optimized:
- **Homepage** — "AI Consultancy Northern Ireland — Real Results | Blue Canvas" ✅
- **About** — "About Blue Canvas — AI Consultants in Derry, NI" ✅
- **Pricing** — "AI Consultancy Pricing: Audit £750, AI Workforce £250/mo" ✅
- **Blog** — "AI for Business Blog — Guides, Tools & Case Studies" ✅
- **Case Studies** — "AI Case Studies — Real Business Results | Blue Canvas" ✅
- **Free AI Consultation** — "Free AI Strategy Call — 30 Min, Zero Obligation" ✅
- **AI Audit** — "AI Audit for Business | Blue Canvas | £750 Fixed Price" ✅
- **AI Done For You** — "Private AI Workforce for Your Business — From £250/mo" ✅
- All landing pages (Academy, Mentoring, Implementation, Customer Service) ✅
- Template pages (Blog, FAQ, Careers, Case Study, etc.) ✅
- Utility pages (404, Checkout, Password, Terms, Privacy) ✅

**No static page meta changes needed.**

---

## 4. Schema Markup — BLOCKED ❌

**Attempted:** Adding LocalBusiness JSON-LD schema to the homepage via API.

**Result:** 
- `PATCH /v2/pages/{id}` returns **404 Route Not Found**
- `PUT /v2/pages/{id}` with `customCode.head` field is **ignored** (field returns null)
- The Webflow v2 API does not support `customCode` updates on pages — this requires either:
  - **Webflow Designer** (manual addition)
  - **sites:write** scope (which our token doesn't have)
  - Direct custom code injection via Webflow project settings

### Schema to add manually:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Blue Canvas",
  "description": "AI consultancy helping Northern Ireland and UK businesses implement AI solutions",
  "url": "https://www.bluecanvas.ai",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Derry",
    "addressRegion": "Northern Ireland",
    "addressCountry": "GB"
  },
  "areaServed": ["Northern Ireland", "United Kingdom", "Ireland"]
}
</script>
```

**Where to add:** Homepage → Page Settings → Custom Code → Head Code (in Webflow Designer)

---

## 5. H1/Page Content Audit

### Homepage (bluecanvas.ai/)
- **H1:** "AI Consultancy Grows Your Business"
- **SEO Title:** "AI Consultancy Northern Ireland — Real Results | Blue Canvas"
- **Assessment:** H1 includes "AI Consultancy" ✅ but doesn't include "Northern Ireland" which is the primary geo keyword. Consider updating H1 to include location (e.g., "AI Consultancy That Grows Your Business" or "Northern Ireland AI Consultancy That Grows Your Business").

### About Page (bluecanvas.ai/about)
- **H1:** "Consultants who build, not just advise."
- **SEO Title:** "About Blue Canvas — AI Consultants in Derry, NI"
- **Assessment:** H1 doesn't contain "AI Consultancy" keyword ⚠️. The H1 is brand-focused (good for UX) but lacks the target keyword. Consider: "AI Consultants Who Build, Not Just Advise" to include the keyword while keeping the messaging.

**Note:** H1 changes require Webflow Designer — cannot be done via API.

---

## 6. Remaining Items for PJ (Manual)

### HIGH PRIORITY
1. **Add LocalBusiness schema** to homepage via Webflow Designer (code provided above)
2. **Update homepage H1** to include "Northern Ireland" geo keyword
3. **Update about page H1** to include "AI Consultancy" or "AI Consultants"
4. **Publish Webflow site** to push all staging changes live

### MEDIUM PRIORITY
5. **Add 301 redirects** — still blocked by API scope (no `sites:write`). Need to set up in Webflow Designer or consider upgrading API token permissions.
6. **Review the "Sarah Chen" listing** on the About page — it says "Founder" of "AI Audit Studio" which appears to be template/placeholder content from the Webflow template. Should be removed or replaced.

### LOW PRIORITY
7. Consider adding `FAQPage` schema to the FAQ page
8. Consider adding `Article` schema to blog post template
9. The "AI for B2B Sales Automation" post appears twice (two different IDs with slightly different content) — consider archiving the duplicate (6863f23c)

---

## 7. Blog Post Coverage Summary

- **Total blog posts:** 131
- **Posts with SEO titles:** 131/131 (after fixes) ✅
- **Posts with meta descriptions:** 131/131 (after fixes) ✅
- **Posts with missing SEO titles fixed this session:** 8
- **Posts with missing meta descriptions fixed this session:** 3

---

## Next Priority Actions
1. Publish Webflow changes to push fixes live
2. Add LocalBusiness schema manually in Designer
3. Fix H1 tags on homepage and about page in Designer
4. Request upgraded API token with `sites:write` scope to enable future 301 redirects and custom code updates via automation
