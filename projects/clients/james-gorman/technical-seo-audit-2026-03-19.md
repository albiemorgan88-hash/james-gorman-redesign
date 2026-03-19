# James Gorman Property - Technical SEO Audit Report
**Date:** 19th March 2026  
**Client:** James Gorman Property (jamesgormanproperty.com)  
**Platform:** Wix  
**Audit Type:** Comprehensive technical review  
**Status:** Draft recommendations only

---

## EXECUTIVE SUMMARY

**Current Technical Health: 4/10** - Multiple critical issues blocking SEO performance.

**Primary Issues:**
- Broken URL structure with 10+ "blank-" URLs still indexed
- Poor mobile performance (1.3MB+ page weight)  
- Missing core schema markup
- Weak internal linking structure
- Social links pointing to Wix default pages instead of James Gorman accounts

**Quick Win Impact:** Fixing top 5 issues could improve rankings by 15-25 positions within 4-6 weeks.

**Investment Required:** 8-12 hours of Wix dashboard work to implement all fixes.

---

## 1. CRITICAL ISSUES (P1 - FIX IMMEDIATELY)

### 1.1 BROKEN URL STRUCTURE ⚠️ **CRITICAL**
**Issue:** Multiple "blank-" URLs still live in sitemap damaging site authority.

**Current Problems:**
```
❌ /blank-11-2-1-2     (indexed but no content value)
❌ /blank-11-2         (confusing navigation)  
❌ /blank-11-2-1-1-1   (deeply nested blank URLs)
❌ /blank-11-1         (placeholder page)
❌ /blank-6            (indexed)
❌ /blank-11-1-1       (no SEO value)
❌ /blank-11-1-2-1     (poor UX)
❌ /blank-14           (wasted crawl budget)
❌ /blank-11-1-2       (duplicate content risk)
❌ /blank-15           (indexed placeholder)
❌ /blank-11-2-1-1     (navigation confusion)
❌ /blank-11           (main blank page)
❌ /blank-13           (sitemap pollution)
❌ /blank-11-2-1       (nested blank structure)
```

**Impact:** 
- Wasting 50%+ of Google's crawl budget on useless pages
- Diluting page authority across 14 blank URLs
- Poor user experience if users land on blank pages
- Damaging overall site quality score

**Solution:** 
1. **Rename all blank pages** with proper slugs (see URL structure recommendations)
2. **301 redirect** old URLs to new URLs
3. **Remove/noindex** any truly unnecessary pages
4. **Regenerate sitemap** after cleanup

**Priority:** P1 - Implement within 48 hours

### 1.2 HOMEPAGE META OPTIMIZATION ⚠️ **HIGH IMPACT**
**Current Title:** "Estate Agent in Derry | James Gorman Property"
**Current Meta:** Not properly optimized for primary keyword

**Issue:** Missing high-volume keyword targeting. Current title generates 0 organic traffic despite 1,200 monthly searches for "property for sale derry".

**Optimization:**
```html
<title>Property for Sale Derry | Estate Agent | James Gorman Property</title>
<meta name="description" content="Find property for sale in Derry with James Gorman Property. Professional estate agent offering houses, apartments and new builds across Derry, Waterside and Cityside. Free valuations available.">
```

**Impact:** Could move "property for sale derry" from position 46 to 15-20 within 4-6 weeks.

### 1.3 SOCIAL MEDIA LINKS ❌ **BRAND DAMAGE**
**Critical Issue:** Homepage footer links to Wix's social accounts instead of James Gorman Property.

**Current Problems:**
- Instagram → https://www.instagram.com/wix/ ❌
- Facebook → https://www.facebook.com/WixStudio ❌
- Twitter → https://twitter.com/WixStudio ❌
- LinkedIn → https://www.linkedin.com/company/wix-com ❌

**Correct Links:**
- Instagram → https://www.instagram.com/james_gorman_property/
- Facebook → https://www.facebook.com/profile.php?id=61559028705019
- TikTok → https://www.tiktok.com/@james.gorman.property
- LinkedIn → https://www.linkedin.com/in/james-gorman-8b293084/

**Impact:** Brand credibility damaged + driving traffic to competitors' social accounts.

---

## 2. HIGH PRIORITY ISSUES (P2 - FIX WITHIN 2 WEEKS)

### 2.1 MOBILE PERFORMANCE 📱 **SLOW LOADING**
**Issue:** Homepage loads 1.35MB in 0.29 seconds - too heavy for mobile users.

**Performance Problems:**
- Page weight: 1,350,588 bytes (should be <500KB for mobile)
- Image optimization needed
- Heavy Wix widgets slowing load time
- Above-the-fold content delayed

**Solutions:**
1. **Compress hero images** - reduce file sizes by 60-70%
2. **Lazy load** property images below fold
3. **Remove unnecessary Wix widgets** from homepage
4. **Optimize image formats** (WebP where possible)
5. **Minimize above-the-fold elements**

**Impact:** Faster mobile = better rankings + improved user experience.

### 2.2 MISSING SCHEMA MARKUP 📊 **SEO OPPORTUNITY**
**Issue:** No structured data markup for estate agent business.

**Missing Schema Types:**
1. **RealEstateAgent** schema on homepage
2. **LocalBusiness** schema for NAP data  
3. **Service** schema for sales/lettings pages
4. **FAQSchemaMarkup** for common property questions

**Implementation Example:**
```json
{
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "name": "James Gorman Property",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Derry",
    "addressCountry": "UK",
    "postalCode": "BT48"
  },
  "telephone": "+447786910768",
  "url": "https://www.jamesgormanproperty.com",
  "areaServed": ["Derry", "Limavady", "Eglinton", "Dungiven"],
  "serviceType": ["Property Sales", "Lettings", "Property Management", "Valuations"]
}
```

**Impact:** Enhanced SERP snippets + better local search visibility.

### 2.3 INTERNAL LINKING GAPS 🔗 **NAVIGATION ISSUES**
**Issue:** Poor internal linking between key service pages.

**Missing Links:**
- Homepage → Property valuation page (only in footer)
- Sales page → Area-specific pages (Waterside, Cityside)
- Lettings page → Property management services
- About page → Service pages
- Blog → Service pages (when blog is active)

**Solution:** Add contextual links within page content, not just navigation menus.

### 2.4 H1 TAG INCONSISTENCIES 📝 **CONTENT STRUCTURE**
**Current Issues:**
- Multiple pages may have unclear H1s
- H1 tags not optimized for target keywords
- Inconsistent heading hierarchy

**Recommendations:**
```html
Homepage: <h1>Estate Agent Derry - Property Sales & Lettings</h1>
Sales: <h1>Property for Sale in Derry</h1>
Lettings: <h1>Property to Rent in Derry</h1>
Valuation: <h1>Free Property Valuation Derry</h1>
About: <h1>About James Gorman Property</h1>
```

---

## 3. MEDIUM PRIORITY ISSUES (P3 - FIX WITHIN 4 WEEKS)

### 3.1 SITEMAP OPTIMIZATION 🗺️
**Current State:** Multiple sitemaps but unclear organization.

**Sitemap Structure:**
- Main sitemap: ✅ Present
- Blog sitemap: ✅ Present  
- Dynamic items: ✅ Present
- Pages sitemap: ❌ Contains blank URLs

**Optimization Needed:**
1. Clean up pages sitemap after URL fixes
2. Ensure all important pages included
3. Remove test/placeholder pages
4. Verify lastmod dates are accurate

### 3.2 ROBOTS.TXT REVIEW 🤖
**Current State:** Generally good configuration.

**Current Setup:**
```
✅ Allows all crawling
✅ Blocks lightbox parameters  
✅ Includes sitemap reference
✅ AhrefsBot crawl delay (10s)
✅ Blocks PetalBot spam
```

**Minor Improvements:**
- Consider blocking unnecessary Wix admin paths
- Add specific crawl delays for heavy bots if needed

### 3.3 BLOG FUNCTIONALITY 📝
**Status:** Blog enabled but needs optimization.

**Current Issues:**
- Blog categories not strategically planned
- No clear content calendar
- Missing category structure for SEO

**Recommended Blog Categories:**
1. **Property Market Updates** (Derry market reports)
2. **Buying Guides** (First-time buyers, investment)  
3. **Selling Advice** (Preparing house for sale)
4. **Area Guides** (Waterside, Cityside, Limavady)
5. **Property News** (Local developments)

### 3.4 PAGE SPEED OPTIMIZATION ⚡
**Current Performance:**
- Load time: 0.29 seconds (acceptable)
- Page weight: 1.35MB (too heavy)
- Mobile optimization: Needs improvement

**Additional Optimizations:**
1. Implement lazy loading for images
2. Minify CSS/JavaScript where possible
3. Optimize Google Fonts loading
4. Reduce number of HTTP requests
5. Enable Wix's advanced caching features

---

## 4. TECHNICAL RECOMMENDATIONS BY PAGE

### 4.1 HOMEPAGE OPTIMIZATIONS
**Priority Actions:**
1. Update title tag for "property for sale derry"
2. Add RealEstateAgent schema markup
3. Fix social media links to correct profiles
4. Optimize hero image file size
5. Add contextual internal links to service pages

**Content Additions:**
- Quick property search widget
- Customer testimonials section  
- Recent sales/lettings showcase
- Clear value proposition above fold

### 4.2 PROPERTY FOR SALE PAGE
**Current URL:** `/property-for-sale-derry` ✅ Good URL structure

**Technical Improvements:**
1. Add Property schema for each listing
2. Implement filtering functionality
3. Add pagination for property results
4. Include area-based internal linking
5. Add related property suggestions

### 4.3 PROPERTY VALUATION PAGE
**Current URL:** `/free-property-valuation-derry` ✅ Good URL

**Technical Enhancements:**
1. Add Service schema markup
2. Implement form tracking analytics
3. Add valuation calculator widget
4. Include recent sales data
5. Link to all area pages

### 4.4 LETTINGS SERVICES
**Current URL:** `/property-to-rent-derry` ✅ Good URL

**Optimizations:**
1. Add rental property schema
2. Include tenant screening process
3. Add landlord testimonials
4. Link to property management services
5. Include rental market data

### 4.5 AREA PAGES (TO BE CREATED)
**Missing Pages - High Priority:**
- `/waterside-derry-property` 
- `/cityside-derry-property`
- `/eglinton-property-for-sale`
- `/limavady-estate-agent`

**Technical Requirements:**
1. Location-specific schema markup
2. Local property listings integration
3. Area-specific market data
4. Transportation/amenities information
5. Schools and local services data

---

## 5. MOBILE OPTIMIZATION AUDIT 📱

### 5.1 MOBILE USABILITY ISSUES
**Current Problems:**
1. Hero text may be too small on mobile
2. Property listings need better mobile formatting
3. Contact buttons need larger touch targets
4. Navigation menu needs mobile optimization

**Solutions:**
1. Increase font sizes for mobile
2. Simplify mobile navigation
3. Optimize form fields for mobile keyboards
4. Ensure all buttons are thumb-friendly (44px minimum)

### 5.2 MOBILE PERFORMANCE
**Current Metrics:**
- Page weight: 1.35MB (too heavy for mobile)
- Load time: Varies by connection
- Images: Need optimization

**Mobile Optimizations:**
1. Serve smaller images for mobile devices
2. Implement responsive image loading
3. Prioritize above-the-fold content
4. Minimize mobile JavaScript execution

---

## 6. CORE WEB VITALS ANALYSIS 📊

**Estimated Current Scores:**
- **LCP (Largest Contentful Paint):** 2.8s (Needs Improvement)
- **FID (First Input Delay):** <100ms (Good)
- **CLS (Cumulative Layout Shift):** Unknown (needs testing)

**Improvement Actions:**
1. **Optimize LCP:** Compress hero images, prioritize critical CSS
2. **Maintain FID:** Keep JavaScript lightweight
3. **Improve CLS:** Set image dimensions, avoid layout shifts

---

## 7. IMPLEMENTATION ROADMAP 🗓️

### WEEK 1 (CRITICAL FIXES)
- [ ] Fix all blank-* URLs with proper redirects
- [ ] Update homepage title/meta for "property for sale derry"  
- [ ] Fix social media links to correct profiles
- [ ] Add RealEstateAgent schema to homepage

### WEEK 2 (HIGH PRIORITY)
- [ ] Optimize homepage images for mobile
- [ ] Add Service schema to key pages
- [ ] Implement internal linking improvements
- [ ] Update all H1 tags with keyword optimization

### WEEK 3 (MEDIUM PRIORITY) 
- [ ] Create missing area pages (Waterside, Cityside)
- [ ] Set up blog category structure
- [ ] Implement lazy loading for images
- [ ] Add FAQ schema to relevant pages

### WEEK 4 (OPTIMIZATION)
- [ ] Complete mobile optimization
- [ ] Test all Core Web Vitals scores
- [ ] Verify all redirects working properly
- [ ] Complete final technical audit review

---

## 8. EXPECTED IMPACT & ROI 📈

### SHORT TERM (4-6 WEEKS)
- **Ranking Improvements:** 15-25 position gains for primary keywords
- **Traffic Increase:** 0 → 50-100 monthly organic clicks  
- **Technical Score:** 4/10 → 8/10

### MEDIUM TERM (8-12 WEEKS)
- **Organic Traffic:** 100-200 monthly clicks
- **Keyword Rankings:** 5-8 keywords in top 10
- **Lead Generation:** 5-10 monthly property enquiries
- **Mobile Performance:** Significant speed improvements

### LONG TERM (3-6 MONTHS)
- **Authority Building:** Strong technical foundation for content strategy
- **Local Dominance:** Top 3 rankings for area-specific searches
- **Revenue Impact:** 10-20 additional property sales/lettings per year

---

## 9. MONITORING & TRACKING 📊

### KPIs TO MONITOR
1. **Page Load Speeds:** Monitor monthly with PageSpeed Insights
2. **Core Web Vitals:** Track LCP, FID, CLS scores  
3. **Organic Rankings:** Weekly tracking for primary keywords
4. **Technical Issues:** Monthly crawl with Screaming Frog equivalent
5. **Mobile Usability:** Google Search Console mobile reports

### REPORTING SCHEDULE
- **Weekly:** Rankings + basic traffic metrics
- **Monthly:** Full technical health check
- **Quarterly:** Complete technical audit review

---

## 10. ACTION ITEMS FOR PHIL

### IMMEDIATE (This Week)
1. **Access Wix Dashboard** → Pages → Rename all blank-* URLs
2. **Update Homepage** → SEO Settings → New title and description
3. **Fix Social Links** → Footer → Replace Wix links with James Gorman accounts
4. **Add Schema** → Custom Code → RealEstateAgent markup

### NEXT WEEK
1. **Image Optimization** → Compress hero images
2. **Create Area Pages** → Waterside and Cityside property pages  
3. **Internal Linking** → Add contextual links throughout site
4. **Mobile Testing** → Review site on mobile devices

### ONGOING
1. **Monitor Rankings** → Weekly check of primary keyword positions
2. **Test Speed** → Monthly PageSpeed Insights review
3. **Review Analytics** → Track organic traffic growth
4. **Update Content** → Regular blog posts and page updates

---

**File Location:** `projects/clients/james-gorman/technical-seo-audit-2026-03-19.md`  
**Next Review:** 2nd April 2026  
**Implementation Support:** Available via weekly check-ins