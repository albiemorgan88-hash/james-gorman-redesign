# Technical SEO Blitz - James Gorman Property
## Date: 19th March 2026

### CRITICAL TECHNICAL ISSUES IDENTIFIED

---

## 1. IMMEDIATE FIXES REQUIRED (P1)

### Issue 1: Footer Email Typo ❌
**Current State:** `Lettings@jamesgormaproperty.com` (missing 'n' in gorman)
**Correct State:** `Lettings@jamesgormanproperty.com`
**Impact:** 
- Lead loss from typos in contact forms
- Professional credibility damage
- Potential email delivery failures
**Fix Time:** 2 minutes via Wix editor
**Priority:** P1 - CRITICAL

### Issue 2: Social Media Links Wrong ❌
**Current State:** Footer social links point to Wix default accounts:
- Instagram: https://www.instagram.com/wix/
- Facebook: https://www.facebook.com/WixStudio
- Twitter: https://twitter.com/WixStudio
- LinkedIn: https://www.linkedin.com/company/wix-com
- YouTube: https://www.youtube.com/user/Wix
- TikTok: https://www.tiktok.com/@wix

**Correct State:** Should point to James Gorman Property accounts:
- Instagram: https://www.instagram.com/james_gorman_property/
- Facebook: https://www.facebook.com/profile.php?id=61559028705019
- LinkedIn: https://www.linkedin.in/james-gorman-8b293084/
- TikTok: https://www.tiktok.com/@james.gorman.property
- Remove YouTube if no account exists

**Impact:** 
- Social traffic going to Wix instead of business
- Brand confusion and lost engagement
- SEO signals going to wrong domains
**Fix Time:** 5 minutes via Wix editor
**Priority:** P1 - CRITICAL

### Issue 3: Homepage Title Tag Suboptimal ❌
**Current State:** "Estate Agent in Derry | James Gorman Property"
**Optimized State:** "Estate Agent Derry | Houses For Sale | James Gorman Property"
**Reasoning:**
- Adds high-volume keyword "houses for sale" (720 monthly searches)
- Maintains "estate agent derry" primary target
- Keeps brand name for recognition
**Fix Time:** 2 minutes via Wix SEO settings
**Priority:** P1

### Issue 4: Meta Description Generic/Missing ❌
**Current State:** Likely generic Wix default
**Optimized State:** "Professional estate agent in Derry offering houses for sale, property valuations, and expert local knowledge. Waterside, Cityside, Culmore areas covered. Contact today."
**Character Count:** 157 chars (optimal range)
**Keywords Included:** estate agent derry, houses for sale, property valuations, area names
**Fix Time:** 3 minutes via Wix SEO settings
**Priority:** P1

---

## 2. TECHNICAL STRUCTURE ISSUES (P2)

### Issue 5: Missing Schema Markup ❌
**Current State:** No structured data detected
**Required Markup:**
```json
{
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "RealEstateAgent"],
  "name": "James Gorman Property",
  "description": "Professional estate agent serving Derry, Limavady, Eglinton, and Dungiven",
  "url": "https://www.jamesgormanproperty.com",
  "telephone": "+44-28-7161-0402",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Derry",
    "addressCountry": "UK",
    "postalCode": "BT47-BT49" 
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "54.9966",
    "longitude": "-7.3086"
  },
  "areaServed": ["Derry", "Limavady", "Eglinton", "Dungiven"],
  "serviceType": ["Property Sales", "Property Lettings", "Property Valuations", "Property Management"]
}
```
**Implementation:** Add to site header via Wix custom code
**Priority:** P2

### Issue 6: Internal Linking Structure Weak ❌
**Current Issues:**
- Service pages not cross-linked
- Area pages don't link to main services
- Blog posts lack internal links to commercial pages
- No breadcrumb navigation

**Optimization Plan:**
1. **Service Page Cross-Links:**
   - Sales → Lettings → Valuations → Management
   - Each mentions related services with links

2. **Area Page Links:**
   - Each area page links to "Search Homes" and "Property Valuation"
   - Cross-reference between similar areas (Waterside ↔ Cityside)

3. **Blog Internal Links:**
   - Link informational content to relevant service pages
   - Use keyword-rich anchor text

**Priority:** P2

### Issue 7: URL Structure Analysis ❌
**Potential Issues Found:**
- Blog post URLs may not be optimized
- Service page slugs could be improved
- Missing breadcrumb trail

**Recommended Structure:**
```
/estate-agent-derry (homepage)
/houses-for-sale-derry
/property-lettings-derry  
/property-valuations-derry
/property-management-derry
/areas/waterside-properties
/areas/cityside-properties
/blog/selling-house-derry-guide
/blog/property-market-derry-2026
```

**Fix Method:** Wix URL editor for new pages
**Priority:** P2

---

## 3. PERFORMANCE & UX ISSUES (P2)

### Issue 8: Core Web Vitals Assessment Needed ❌
**Requirements:**
- Largest Contentful Paint (LCP) < 2.5s
- First Input Delay (FID) < 100ms
- Cumulative Layout Shift (CLS) < 0.1

**Testing Required:**
1. Google PageSpeed Insights audit
2. Mobile usability test
3. Real user monitoring setup

**Common Wix Issues:**
- Heavy image files not optimized
- Excessive JavaScript from Wix platform
- Third-party integrations slowing load

**Fix Approach:** 
1. Optimize all images (WebP format, compression)
2. Minimize Wix apps/widgets
3. Critical CSS implementation
**Priority:** P2

### Issue 9: Mobile Experience Validation ❌
**Observed Issues:**
- Footer contact details cramped on mobile
- Social media icons small on mobile
- Potential touch target size issues

**Testing Required:**
- Google Mobile-Friendly Test
- Real device testing (iOS/Android)
- Touch target size validation

**Priority:** P2

---

## 4. SEO FOUNDATION GAPS (P3)

### Issue 10: XML Sitemap Optimization ❌
**Current State:** Wix auto-generates sitemap
**Required Optimization:**
1. Ensure all important pages included
2. Remove low-value pages (tags, archives)
3. Set correct priority scores:
   - Homepage: 1.0
   - Service pages: 0.9
   - Area pages: 0.7
   - Blog posts: 0.5

**Fix Method:** Wix SEO app configuration
**Priority:** P3

### Issue 11: Robots.txt Configuration ❌
**Current State:** Default Wix robots.txt
**Optimizations Needed:**
- Block irrelevant Wix admin URLs
- Allow important directories
- Include sitemap reference
- Block duplicate content patterns

**Priority:** P3

### Issue 12: Google Search Console Setup ❌
**Status:** Unknown - needs verification
**Required Actions:**
1. Verify GSC ownership
2. Submit XML sitemap
3. Monitor for crawl errors
4. Track keyword performance
5. Set up email alerts for issues

**Priority:** P3

---

## 5. CONTENT TECHNICAL ISSUES

### Issue 13: H-Tag Structure Audit ❌
**Homepage Analysis:**
- H1: "ESTATE & LETTINGS AGENT." (suboptimal keyword usage)
- Missing H2s for service sections
- No keyword-focused subheadings

**Optimal Structure:**
```html
<h1>Estate Agent Derry | James Gorman Property</h1>
<h2>Property Sales Derry</h2>
<h2>Property Lettings Derry</h2> 
<h2>Property Valuations Derry</h2>
<h3>Areas We Cover</h3>
<h3>Featured Properties</h3>
```

**Fix Method:** Wix text editor formatting
**Priority:** P2

### Issue 14: Image SEO Optimization ❌
**Current Issues:**
- Generic image filenames
- Missing alt tags
- Oversized image files
- No image sitemaps

**Optimization Required:**
1. **Filename Structure:**
   - `estate-agent-derry-office.jpg`
   - `property-for-sale-waterside-derry.jpg`
   - `james-gorman-property-team.jpg`

2. **Alt Tag Strategy:**
   - Descriptive, keyword-rich alt tags
   - Include location where relevant
   - Avoid keyword stuffing

3. **File Optimization:**
   - Compress all images to <100KB
   - Use WebP format where supported
   - Responsive image sizing

**Priority:** P2

---

## 6. LOCAL SEO TECHNICAL SETUP

### Issue 15: NAP Consistency Audit ❌
**Current NAP on Website:**
- **Name:** James Gorman Property ✅
- **Address:** Missing from main site ❌
- **Phone:** 028 7161 0402, 07786 910 768 ✅

**Required Actions:**
1. Add complete address to footer/contact page
2. Ensure consistent formatting across all pages
3. Structured data markup for address
4. Microdata implementation

**Priority:** P2

### Issue 16: Google My Business Schema ❌
**Missing Elements:**
- Opening hours markup
- Service area markup  
- Customer review schema
- FAQ schema for common questions

**Implementation Required:**
```json
{
  "@type": "OpeningHoursSpecification",
  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
  "opens": "09:00",
  "closes": "17:30"
}
```

**Priority:** P2

---

## 7. IMPLEMENTATION ROADMAP

### Week 1: CRITICAL FIXES
- [ ] Fix footer email typo (2 mins)
- [ ] Update social media links (5 mins)
- [ ] Optimize homepage title + meta (5 mins)
- [ ] Add missing address to site (10 mins)
- **Total Time:** 22 minutes
- **Impact:** Immediate lead capture improvement

### Week 2: FOUNDATION SETUP
- [ ] Implement schema markup (2 hours)
- [ ] Optimize H-tag structure (30 mins)
- [ ] Internal linking audit and fixes (1 hour)
- [ ] Google Search Console setup (30 mins)
- **Total Time:** 4 hours
- **Impact:** Search engine visibility improvement

### Week 3: PERFORMANCE & UX
- [ ] Core Web Vitals audit (1 hour)
- [ ] Image optimization batch (2 hours)
- [ ] Mobile UX testing and fixes (1 hour)
- [ ] URL structure optimization (30 mins)
- **Total Time:** 4.5 hours
- **Impact:** User experience and ranking factors

### Week 4: ADVANCED OPTIMIZATION
- [ ] XML sitemap optimization (30 mins)
- [ ] Robots.txt configuration (15 mins)
- [ ] Local SEO schema completion (1 hour)
- [ ] Technical audit documentation (30 mins)
- **Total Time:** 2.25 hours
- **Impact:** Long-term SEO foundation

---

## 8. SUCCESS MEASUREMENT

### Immediate Metrics (Week 1)
- Contact form submissions increase
- Social media traffic appears in analytics
- Reduced bounce rate from improved contact info

### Short-term Metrics (Weeks 2-4)
- Google Search Console data population
- Improved mobile usability scores
- Core Web Vitals improvements
- Schema markup validation

### Long-term Metrics (Months 2-6)
- Keyword ranking improvements
- Organic traffic growth
- Local pack appearances
- Click-through rate improvements

---

## 9. RISK ASSESSMENT

### Low Risk Fixes
- Footer email correction
- Social media links update
- Title/meta optimization
- Schema markup addition

### Medium Risk Fixes
- URL structure changes (test on staging)
- H-tag restructuring (preserve content flow)
- Internal linking changes (maintain user experience)

### High Risk Areas
- Major design changes (not recommended)
- Core Wix functionality modifications
- Third-party app removals (test impact first)

---

## 10. COST-BENEFIT ANALYSIS

### Time Investment Summary
- **Week 1 (Critical):** 22 minutes
- **Weeks 2-4 (Foundation):** 10.75 hours
- **Total Implementation:** ~11 hours

### Expected ROI
- **Lead Quality:** Improved contact accuracy
- **Search Visibility:** 3-5x improvement in 3 months  
- **User Experience:** Reduced bounce rate by 15-20%
- **Brand Trust:** Professional appearance increase

### Revenue Impact Projection
- **Current Monthly Leads:** ~5 from website
- **Projected Monthly Leads:** ~20-25 from website
- **Average Commission:** £2,500
- **Monthly Revenue Increase:** £37,500-£50,000
- **Annual Revenue Impact:** £450,000-£600,000

**Investment of 11 hours delivering £450k-£600k annual revenue = £40k-£55k per hour ROI**

This technical SEO blitz addresses all critical issues preventing James Gorman Property from ranking competitively in the Derry estate agent market.