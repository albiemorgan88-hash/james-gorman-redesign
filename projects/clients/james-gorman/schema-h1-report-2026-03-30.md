# James Gorman Property - Schema & H1 Audit Report
**Date:** 2026-03-30  
**Site:** https://www.jamesgormanproperty.com  
**Site ID:** 4b8170fd-99cc-45e8-a4fb-e28bb7156d52

## Executive Summary
- **H1 Tags**: Major issues found - multiple H1s per page, poor structure
- **Schema Markup**: API injection failed - requires manual implementation
- **Wix API Access**: Limited endpoints available, no custom code injection capability

---

## H1 Tag Audit Results

### Current H1 Status by Page

#### Home Page (/)
❌ **CRITICAL ISSUE**: 6 H1 tags found
```
- "ESTATE & LETTINGS AGENT."
- "Local Homes, Modern Marketing."  
- "MENU"
- "CONTACT US"
- "SOCIAL MEDIA"
- "FEATURED AREAS"
```

#### About Page (/about-james-gorman-property)
❌ **CRITICAL ISSUE**: 6 H1 tags found
```
- "MENU"
- "CONTACT US"
- "SOCIAL MEDIA"
- "FEATURED AREAS"
- "Hear from James!"
- "We are here for you at every step of your home moving journey!"
```

#### Services Page (/estate-agent-services-derry)
❌ **ISSUE**: 4 H1 tags found (navigation elements only)
```
- "MENU"
- "CONTACT US"
- "SOCIAL MEDIA"
- "FEATURED AREAS"
```

#### Contact Page (/contact)
❌ **CRITICAL ISSUE**: 5 H1 tags found
```
- "MENU"
- "CONTACT US"
- "SOCIAL MEDIA"
- "FEATURED AREAS"
- "Talk to James directly!"
```

#### Lettings Page (/lettings)
❌ **NO H1 FOUND** - Missing primary heading

#### Valuations Page (/valuations)
❌ **NO H1 FOUND** - Missing primary heading

---

## Recommended H1 Structure

### ✅ Recommended H1 by Page:
- **Home (/)**: "Estate Agent Derry | Property Sales & Lettings | James Gorman Property"
- **About**: "About James Gorman | Experienced Estate Agent in Derry"
- **Services**: "Estate Agent Services Derry | Property Sales, Lettings & Valuations"
- **Contact**: "Contact James Gorman Property | Estate Agent Derry"
- **Lettings**: "Property Lettings Derry | Rental Properties & Property Management"
- **Valuations**: "Free Property Valuations Derry | Professional Property Valuation Service"

---

## Schema Markup Implementation

### API Injection Attempt: ❌ FAILED
Attempted multiple Wix API endpoints for custom code injection:
- `https://www.wixapis.com/v3/embedded-scripts` → 404
- `https://www.wixapis.com/custom-code/v1/scripts` → 404  
- `https://www.wixapis.com/site/v1/head` → 404
- `https://www.wixapis.com/wix-code/v1/site/head` → 404

### ✅ MANUAL IMPLEMENTATION REQUIRED

**Phil needs to manually add the following schema markup:**

#### Steps:
1. Go to Wix Editor → Settings → Custom Code
2. Click "Add Code" → Choose "Head"
3. Paste the LocalBusiness + RealEstateAgent schema below
4. Set to "All Pages"
5. Save and Publish

#### Schema Code to Add:
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": ["RealEstateAgent", "LocalBusiness"],
  "name": "James Gorman Property",
  "url": "https://www.jamesgormanproperty.com",
  "telephone": "028 7161 0402",
  "email": "james@jamesgormanproperty.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Derry",
    "addressRegion": "Northern Ireland",
    "addressCountry": "GB"
  },
  "description": "Professional estate agency in Derry offering property sales, lettings, and free valuations across Derry, Limavady, Eglinton, and Dungiven. Over 20 years local property experience.",
  "areaServed": [
    {"@type": "City", "name": "Derry"},
    {"@type": "City", "name": "Limavady"},
    {"@type": "City", "name": "Eglinton"},
    {"@type": "City", "name": "Dungiven"}
  ],
  "sameAs": [
    "https://www.instagram.com/jamesgormanproperty",
    "https://www.facebook.com/jamesgormanproperty",
    "https://www.linkedin.com/in/jamesgormanproperty",
    "https://www.tiktok.com/@jamesgormanproperty"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Property Services",
    "itemListElement": [
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Property Sales"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Property Lettings"}},
      {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Free Property Valuations"}}
    ]
  }
}
</script>
```

---

## Ahrefs Analytics Setup

### ❌ MANUAL SETUP REQUIRED

**Phil needs to:**
1. Log into Ahrefs dashboard 
2. Get the Analytics data-key for jamesgormanproperty.com
3. Add this code via Wix Editor → Settings → Custom Code → Head:

```html
<script src="https://analytics.ahrefs.com/analytics.js" data-key="YOUR_AHREFS_KEY" async></script>
```

---

## What Was Successfully Deployed via API
**None** - Wix API limitations prevented automated deployment.

## What Needs Manual Action
1. **URGENT**: Fix H1 tag structure (multiple H1s per page)
2. **Add schema markup** (LocalBusiness + RealEstateAgent)
3. **Add Ahrefs analytics** (pending data-key from dashboard)

## Technical Notes
- Site redirects from `jamesgormanproperty.com` to `www.jamesgormanproperty.com`
- Wix API access limited to site properties endpoint only
- Navigation elements (MENU, CONTACT US, etc.) incorrectly using H1 tags
- Missing proper page-specific H1s on 2 pages (lettings, valuations)

## SEO Impact
- **Critical**: Multiple H1s confuse search engines about page topic hierarchy
- **High**: Missing schema markup reduces rich snippet potential  
- **Medium**: Missing analytics prevents performance tracking

---

## Summary & Business Impact

### What Was Successfully Deployed via API
**None** - All Wix API endpoints for custom code injection returned 404 errors or access issues.

### Critical Issues Found
1. **Multiple H1 Tags Per Page** - Confusing search engine understanding
2. **Navigation Elements as H1s** - Menu, Contact, Social Media incorrectly tagged
3. **Missing H1s on Key Pages** - Lettings and Valuations have no primary headings
4. **No Schema Markup** - Missing LocalBusiness + RealEstateAgent structured data

### Immediate Business Risk
- **Lead Loss Prevention**: Poor heading structure reduces ranking potential
- **Local SEO Impact**: Missing schema markup hurts local search visibility
- **Professional Appearance**: Multiple H1s create poor user experience

### Required Manual Actions for Phil
1. **URGENT**: Fix H1 tag structure site-wide (use design guidelines below)
2. **HIGH**: Add schema markup via Wix Custom Code
3. **MEDIUM**: Add Ahrefs analytics tracking

### Implementation Time
- H1 fixes: 20-30 minutes total
- Schema markup: 15 minutes
- Ahrefs setup: 10 minutes (pending data-key)
- **Total: 45-55 minutes for complete implementation**

---
*Report generated by JAMES (SEO specialist) on 2026-03-30*