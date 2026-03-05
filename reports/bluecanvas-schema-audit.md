# Blue Canvas Schema Audit — 26 Feb 2026

## Summary

**Pages audited:** Homepage, /pricing (redirected from /services), /about, /blog
**Note:** /contact returns 404 — page doesn't exist.

The site has **strong schema foundations** — 5 JSON-LD blocks appear on every page (site-wide via Webflow custom code). The homepage adds a 6th page-specific block. However, there are duplications, inconsistencies, and missing opportunities.

---

## Schema Found (All Pages — Site-Wide)

### 1. ProfessionalService (Block 2) ✅ Good
**Verdict: GOOD** — This is the strongest block on the site.

| Field | Status | Notes |
|-------|--------|-------|
| name, alternateName | ✅ | "Blue Canvas AI" / "Blue Canvas" |
| url | ✅ | Absolute URL |
| logo | ⚠️ | Points to `/logo.png` — **verify this URL actually resolves** |
| image | ⚠️ | Points to `/og-image.jpg` — **verify this URL actually resolves** |
| description | ✅ | Good |
| telephone | ✅ | +447828699027 |
| email | ⚠️ | Uses `philpatterson85@gmail.com` — should be `contact@bluecanvas.ai` |
| founder (Person) | ✅ | Phil Patterson with jobTitle and LinkedIn URL |
| foundingDate | ✅ | 2025-03 |
| address (PostalAddress) | ✅ | Full address with geo |
| geo (GeoCoordinates) | ✅ | Correct lat/long |
| areaServed | ✅ | UK + Ireland |
| serviceArea | ✅ | 500mi radius |
| hasOfferCatalog | ✅ | 3 services listed |
| priceRange | ⚠️ | "££" — vague. Use "£250-£750+" |
| openingHours | ✅ | Mon-Fri 9-5:30 |
| sameAs | ✅ | LinkedIn + X |

### 2. ProfessionalService (Block 1 — Homepage Only) ⚠️ Duplicate
**Verdict: WEAK — REMOVE or MERGE**

This is a **duplicate** ProfessionalService with different data:
- Uses relative URL `"url": "/"` (bad)
- Different phone number (07935217762 vs +447828699027)
- Different email (contact@bluecanvas.ai vs philpatterson85@gmail.com)
- Different social links (generic twitter/linkedin vs actual accounts)
- Contains reviews + aggregateRating (good, but should be on the main block)
- Contains pricing in OfferCatalog (good, but conflicts with Block 2's catalog)

**⚡ Priority: HIGH** — Two conflicting ProfessionalService blocks confuse Google. Merge into one.

### 3. Organization ✅ Acceptable
**Verdict: GOOD** — Redundant with ProfessionalService but not harmful.

Has: name, url, logo, description, founder, foundingDate, foundingLocation, contactPoint, sameAs, knowsAbout. All correct.

### 4. FAQPage ✅ Good
**Verdict: GOOD** — 8 well-structured Q&As with proper Question/Answer types.

⚠️ **Minor issue:** The FAQ schema questions differ from the FAQ questions actually visible on the page. The page shows questions like "What is an AI audit and do I need one?" but the schema has "What does an AI consultancy do?" — Google may flag this as a mismatch.

**⚡ Priority: MEDIUM** — Align schema FAQs with on-page FAQs, or add both sets.

### 5. WebSite ✅ Good
**Verdict: GOOD** — Has SearchAction.

⚠️ **Minor issue:** The search target `?q={search_term_string}` — does the blog actually support search? If not, remove the SearchAction.

**⚡ Priority: LOW**

---

## Page-Specific Schema

### Homepage — ProfessionalService (Block 1)
See above — duplicate issue.

### /pricing — WebPage
```json
{"@type": "WebPage", "name": "Services New", ...}
```
**Verdict: WEAK**
- `name` is "Services New" — clearly a draft/internal name. Fix to "AI Consulting Services & Pricing"
- **⚡ Priority: MEDIUM**

### /about — AboutPage
```json
{"@type": "AboutPage", "name": "Meet the Blue Canvas Team | AI Consultants in Derry, NI", ...}
```
**Verdict: GOOD** — Correct type, good name/description.

### /blog — Blog
```json
{"@type": "Blog", "name": "Blue Canvas Blog", ...}
```
**Verdict: GOOD** — Correct type with publisher info.

---

## Missing Schema — Recommendations

### 🔴 HIGH Priority

#### 1. LocalBusiness (replace/augment ProfessionalService)
**Status: PARTIALLY COVERED** — ProfessionalService is a subtype of LocalBusiness, so technically present. But consider adding `LocalBusiness` explicitly if targeting "AI consultancy near me" / local pack results.

**Action:** Not strictly needed — ProfessionalService covers it. Focus on fixing the duplicate instead.

#### 2. Merge Duplicate ProfessionalService Blocks
**Action:** Combine Block 1 and Block 2 into a single block with:
- Absolute URL (`https://www.bluecanvas.ai`)
- Consistent phone/email (pick one of each)
- Reviews + AggregateRating from Block 1
- Address + Geo + OpeningHours from Block 2
- Combined OfferCatalog with prices

#### 3. BreadcrumbList — MISSING
**Status: ❌ Missing on all pages**
**Why it matters:** Breadcrumbs appear in Google search results, improving CTR. Easy win.

**Action:** Add to every page:
```json
{
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.bluecanvas.ai"},
    {"@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.bluecanvas.ai/pricing"}
  ]
}
```

#### 4. Fix Broken /contact Page
**Status: ❌ 404**
**Action:** Create the page or remove links to it. A contact page with `ContactPage` schema is valuable for local SEO.

### 🟡 MEDIUM Priority

#### 5. Person Schema for Phil Patterson — MISSING as standalone
**Status: ⚠️ Only nested inside ProfessionalService/Organization**
**Why:** A standalone Person schema on /about boosts E-E-A-T signals and can trigger knowledge panels.

**Action:** Add to /about:
```json
{
  "@type": "Person",
  "name": "Phil Patterson",
  "jobTitle": "Founder & AI Consultant",
  "worksFor": {"@type": "Organization", "name": "Blue Canvas AI"},
  "url": "https://www.linkedin.com/in/philpatterson85/",
  "sameAs": ["https://www.linkedin.com/in/philpatterson85/"],
  "knowsAbout": ["AI", "Business Development", "Venture Capital"]
}
```

#### 6. Service Schema — MISSING as standalone
**Status: ⚠️ Only nested inside OfferCatalog**
**Why:** Standalone Service schemas on /pricing help Google understand individual services.

**Action:** Add individual `Service` schemas on /pricing for each offering (AI Audit, Academy, Private AI Workforce, Implementation).

#### 7. Review Schema Consistency
**Status: ⚠️ Reviews only in homepage Block 1 (the duplicate)**
**Action:** When merging ProfessionalService blocks, ensure reviews stay in the surviving block. Consider adding `datePublished` to each review.

### 🟢 LOW Priority

#### 8. Article/BlogPosting Schema on Blog Posts
**Status: Unknown** — Didn't audit individual blog posts, but the /blog index has `Blog` schema.
**Action:** Verify each blog post has `BlogPosting` or `Article` schema with author, datePublished, dateModified.

#### 9. HowTo Schema on Homepage
**Status: ❌ Missing**
**Why:** The "4 Steps" section (Discovery → Audit → Build → Train) is a natural fit.
**Action:** Optional but could win featured snippets for "how to implement AI in business" queries.

#### 10. WebSite SearchAction Validation
**Action:** Verify `/blog?q=` actually works. If not, remove SearchAction.

---

## Data Inconsistencies to Fix

| Field | Block 1 (Homepage) | Block 2 (Site-wide) | Recommendation |
|-------|-------------------|---------------------|----------------|
| Phone | 07935217762 | +447828699027 | Pick one, use E.164 format |
| Email | contact@bluecanvas.ai | philpatterson85@gmail.com | Use contact@bluecanvas.ai |
| Logo URL | CDN (real file) | /logo.png (may 404) | Use the CDN URL |
| Image URL | CDN (real file) | /og-image.jpg (may 404) | Use the CDN URL |
| Social links | Generic (twitter.com/bluecanvas) | Actual accounts | Use actual account URLs |
| URL format | Relative "/" | Absolute | Always use absolute |

---

## Action Plan (Priority Order)

1. **🔴 Merge duplicate ProfessionalService** — Combine into one block with correct, consistent data. Deploy site-wide.
2. **🔴 Add BreadcrumbList** — Every page. Quick Webflow custom code addition.
3. **🔴 Fix /contact 404** — Create contact page or redirect.
4. **🟡 Fix "Services New" WebPage name** on /pricing.
5. **🟡 Align FAQ schema with on-page FAQ content**.
6. **🟡 Add standalone Person schema** for Phil on /about.
7. **🟡 Add standalone Service schemas** on /pricing.
8. **🟢 Verify blog post schemas** (BlogPosting with author/dates).
9. **🟢 Verify logo.png and og-image.jpg URLs resolve**.
10. **🟢 Consider HowTo schema** for the 4-step process.

---

*Audit completed 26 Feb 2026 by Albie*
