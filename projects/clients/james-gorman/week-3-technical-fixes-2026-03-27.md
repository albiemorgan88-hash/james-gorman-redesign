# Week 3 Critical Technical SEO Fixes
## James Gorman Property - Priority P1 Implementation Guide
**Prepared:** 27th March 2026  
**Status:** DRAFT ONLY - Phil implementation required

---

## EXECUTIVE SUMMARY

**Week 3 focuses on the CRITICAL technical fixes that have been preventing lead capture and search visibility since Week 2 report.**

These 4 fixes will take approximately **40 minutes total** but deliver immediate business impact:
- Fix broken email links (potential lead loss)
- Clean up unprofessional blank URLs 
- Optimize homepage for 1,200 monthly searches
- Add complete business address for local SEO

**Expected Impact:** Immediate lead capture improvement + foundation for ranking improvements within 4-6 weeks.

---

## CRITICAL FIX #1: FOOTER EMAIL TYPO ⚠️

### Issue Identified:
**Current:** `Lettings@jamesgormaproperty.com` (missing 'n' in "gorman")
**Impact:** Broken email links causing potential lead loss
**Priority:** P1 CRITICAL

### Fix Required:
**Change to:** `Lettings@jamesgormanproperty.com`

### Implementation Steps:
1. Access Wix dashboard for jamesgormanproperty.com
2. Navigate to Site Settings → Business Info → Contact Details
3. Update email field to correct spelling
4. Verify footer displays correctly across all pages
5. Test email links functionality

**Time Required:** 3 minutes
**Business Impact:** IMMEDIATE - prevents lead loss from contact attempts

---

## CRITICAL FIX #2: BLANK URL CLEANUP ⚠️

### Issue Identified:
**Current Broken URLs:**
- `/blank-6` → Terms & Conditions
- `/blank-14` → Privacy Policy  
- `/blank-15` → "VISIT MERCHANTS VIEW" link

**Impact:** Unprofessional appearance + wasted crawl budget + poor UX

### Fix Required:
**Rename URLs to:**
- `/blank-6` → `/terms-conditions`
- `/blank-14` → `/privacy-policy`
- `/blank-15` → `/merchants-view` or remove if unnecessary

### Implementation Steps:
1. Access Wix dashboard → Site Structure/Pages
2. Locate the three blank pages
3. Rename each page with SEO-friendly slugs
4. Update any internal navigation links
5. Verify all pages load correctly with new URLs

**Time Required:** 10 minutes
**SEO Impact:** Clean URL structure + improved crawlability

---

## CRITICAL FIX #3: HOMEPAGE META OPTIMIZATION 🎯

### Current Status:
**Title:** "Estate Agent in Derry | James Gorman Property"
**Target Keywords:** estate agent derry (590 searches/month)

### Optimization Required:
**New Title:** "Property for Sale Derry | Estate Agent | James Gorman Property"
**Target Keywords:** property for sale derry (1,200 searches/month)
**Strategy:** Target higher volume keyword while maintaining brand

**New Meta Description:** 
"Professional estate agent in Derry offering houses for sale, property valuations, and expert local knowledge. Waterside, Cityside, Culmore areas covered. Contact James Gorman Property today for your property needs."

### Implementation Steps:
1. Access Wix dashboard → SEO Tools → SEO Settings
2. Navigate to Homepage SEO settings
3. Update Page Title to new optimized version
4. Update Meta Description with new copy
5. Save changes and verify in page source

**Time Required:** 5 minutes
**SEO Impact:** Target 1,200 vs 590 monthly searches (2x increase)

---

## CRITICAL FIX #4: COMPLETE BUSINESS ADDRESS 📍

### Current Status:
Footer shows partial contact information without complete address

### Fix Required:
**Add Complete NAP (Name, Address, Phone):**
```
James Gorman Property
[Complete Business Address - Phil to confirm exact format]
Derry, Northern Ireland
Phone: [Current phone number]
Email: info@jamesgormanproperty.com
```

### Implementation Steps:
1. Access Wix dashboard → Site Settings → Business Info
2. Add complete business address in proper format
3. Ensure address appears in footer on all pages
4. Verify NAP consistency for local SEO

**Time Required:** 5 minutes
**Local SEO Impact:** Improved Google Business Profile consistency + local ranking signals

---

## ADDITIONAL HIGH-PRIORITY FIXES

### Schema Markup Implementation (15 minutes)

**Add to Homepage Head Section:**
```json
{
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "name": "James Gorman Property",
  "url": "https://jamesgormanproperty.com",
  "logo": "https://jamesgormanproperty.com/logo.png",
  "description": "Professional estate agent in Derry offering property sales, lettings, and valuations across Waterside, Cityside, and Culmore areas.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Derry",
    "addressRegion": "Northern Ireland",
    "addressCountry": "GB"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "[Phone Number]",
    "contactType": "customer service",
    "availableLanguage": "English"
  },
  "serviceArea": {
    "@type": "Place",
    "name": "Derry, Waterside, Cityside, Culmore, Eglinton, Drumahoe, Strathfoyle"
  }
}
```

### Internal Linking Enhancement (5 minutes)

**Add to Homepage Navigation:**
Link block connecting to 6 published area pages:
- Properties in Waterside, Derry
- Properties in Cityside, Derry  
- Properties in Culmore, Derry
- Properties in Eglinton
- Properties in Drumahoe, Derry
- Properties in Strathfoyle, Derry

---

## IMPLEMENTATION CHECKLIST

### Pre-Implementation:
- [ ] Backup current site settings
- [ ] Document current titles/descriptions
- [ ] Confirm business address details with client

### Critical Fixes (40 minutes total):
- [ ] Fix footer email typo (3 min)
- [ ] Rename blank URLs (10 min)  
- [ ] Optimize homepage meta (5 min)
- [ ] Add complete business address (5 min)
- [ ] Implement schema markup (15 min)
- [ ] Add internal linking (5 min)

### Post-Implementation:
- [ ] Test all email links functionality
- [ ] Verify new URLs load correctly
- [ ] Check homepage title in Google search results
- [ ] Monitor Google Search Console for indexing
- [ ] Track ranking improvements over 4-6 weeks

---

## EXPECTED IMPACT TIMELINE

### Immediate (24-48 hours):
- Fixed email contact functionality
- Professional URL structure  
- Enhanced local SEO signals
- Improved homepage relevance

### Short-term (2-4 weeks):
- Google reindexing of optimized homepage
- New URLs appearing in search results
- Improved click-through rates from search

### Medium-term (4-8 weeks):
- Homepage ranking improvements for "property for sale derry"
- Enhanced local pack visibility
- Increased organic traffic from better targeting

### Expected Results:
- **Immediate:** Prevents lead loss from email issues
- **4-6 weeks:** 15-25 position improvement for primary keywords
- **3 months:** Foundation for 10x organic traffic growth

**Status:** All fixes documented and ready for Phil to implement. Total time investment: 40 minutes for maximum impact foundation.