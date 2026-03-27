# IMMEDIATE DEPLOYMENT CHECKLIST - JAMES GORMAN PROPERTY
## 40-MINUTE TECHNICAL FIXES + 2-HOUR CONTENT PUBLISHING

**Priority**: URGENT - Deploy within 24-48 hours  
**Total Time Investment**: ~3 hours for substantial site improvements  
**Business Impact**: HIGH - Prevents lead loss + establishes content leadership  

---

## PHASE 1: CRITICAL TECHNICAL FIXES (40 minutes)

### ⚠️ CRITICAL PRIORITY - Fix #1: Footer Email Typo (3 minutes)
**ISSUE**: Broken email links causing lost leads  
**CURRENT**: `Lettings@jamesgormaproperty.com` (missing 'n')  
**FIX TO**: `Lettings@jamesgormanproperty.com`

**Steps:**
1. [ ] Log into Wix dashboard
2. [ ] Click "Edit Site" 
3. [ ] Scroll to footer section
4. [ ] Click on email text block
5. [ ] Change `jamesgormaproperty.com` to `jamesgormanproperty.com` (add missing 'n')
6. [ ] Save and Publish immediately
7. [ ] **TEST**: Send test email to confirm links work

**Expected Result**: All contact attempts now reach correct email address

---

### ⚠️ HIGH PRIORITY - Fix #2: Clean Blank URLs (15 minutes)
**ISSUE**: Unprofessional navigation with blank pages  
**CURRENT**: `/blank-6`, `/blank-14`, `/blank-15` in navigation

#### Fix 2a: Terms & Conditions (5 minutes)
1. [ ] Wix dashboard → Pages
2. [ ] Find page titled "blank-6" 
3. [ ] Rename to "Terms and Conditions"
4. [ ] Change URL slug to `/terms-and-conditions`
5. [ ] Add basic Terms & Conditions content:
   ```
   # Terms and Conditions
   
   Welcome to James Gorman Property. These terms and conditions govern your use of our website and services.
   
   ## Property Services
   James Gorman Property provides estate agency services including property sales, lettings, and valuations across Derry, Limavady, Eglinton and surrounding areas.
   
   ## Contact Information
   For enquiries about our terms and conditions, contact us at james@jamesgormanproperty.com or 028 7161 0402.
   
   Last updated: March 2026
   ```
6. [ ] Set SEO title: "Terms and Conditions | James Gorman Property"

#### Fix 2b: Privacy Policy (5 minutes)  
1. [ ] Find page titled "blank-14"
2. [ ] Rename to "Privacy Policy" 
3. [ ] Change URL slug to `/privacy-policy`
4. [ ] Add basic Privacy Policy content:
   ```
   # Privacy Policy
   
   James Gorman Property respects your privacy and is committed to protecting your personal data.
   
   ## Information We Collect
   We collect information you provide when contacting us about property services, including name, email, phone number, and property requirements.
   
   ## How We Use Your Information  
   Your information is used solely to provide property services and respond to your enquiries. We do not share your data with third parties without consent.
   
   ## Contact Us
   For privacy enquiries, contact james@jamesgormanproperty.com or 028 7161 0402.
   
   Last updated: March 2026
   ```
5. [ ] Set SEO title: "Privacy Policy | James Gorman Property"

#### Fix 2c: Merchants View Page (5 minutes)
1. [ ] Find page titled "blank-15"  
2. [ ] Rename to "Merchants View Development"
3. [ ] Change URL slug to `/merchants-view-development`
4. [ ] Add development information:
   ```
   # Merchants View Development
   
   James Gorman Property are proud to offer exclusive access to Merchants View, Derry City's most anticipated new build development.
   
   ## Development Features
   - Premium city centre location
   - Modern energy-efficient homes
   - High-quality finishes throughout
   - Excellent transport links
   
   ## Contact Information
   For more information about Merchants View properties, contact James Gorman Property:
   - Phone: 028 7161 0402
   - Mobile: 07786 910 768  
   - Email: james@jamesgormanproperty.com
   ```
5. [ ] Set SEO title: "Merchants View Development | New Builds Derry"

**Expected Result**: Professional navigation with proper pages instead of blank URLs

---

### ⚠️ MEDIUM PRIORITY - Fix #3: Homepage Meta Optimization (5 minutes)
**ISSUE**: Homepage not targeting highest-volume keywords  
**CURRENT**: "Estate Agent in Derry | James Gorman Property" (590 searches)  
**OPTIMIZED**: "Property for Sale Derry | Estate Agent | James Gorman Property" (1,200 searches)

**Steps:**
1. [ ] Wix dashboard → Pages → Homepage
2. [ ] Click "SEO (Google)" settings button
3. [ ] Update **Page Title** to: `Property for Sale Derry | Estate Agent | James Gorman Property`
4. [ ] Update **Meta Description** to: `Houses for sale in Derry with professional estate agent service. Property valuations, sales & lettings across Waterside, Cityside & Culmore. Contact James Gorman Property today.`
5. [ ] Save settings and Publish

**Expected Result**: Homepage targets 2x more monthly searches (1,200 vs 590)

---

### ⚠️ MEDIUM PRIORITY - Fix #4: Add Business Address (5 minutes) 
**ISSUE**: Missing complete business address for local SEO  

**Steps:**
1. [ ] Wix dashboard → Edit Site → Footer
2. [ ] Find contact information section
3. [ ] Add complete business address block:
   ```
   James Gorman Property
   [Your Business Address]
   Derry, Northern Ireland  
   BT47 [Postcode]
   ```
4. [ ] Format consistently with existing contact info
5. [ ] Save and Publish

**Expected Result**: Complete NAP (Name, Address, Phone) for local SEO consistency

---

### ⚠️ MEDIUM PRIORITY - Fix #5: Schema Markup Implementation (15 minutes)
**ISSUE**: Missing structured data for search engines

**Steps:**
1. [ ] Wix dashboard → Settings → SEO Tools
2. [ ] Click "Custom Code"  
3. [ ] Add to site header, copy this code exactly:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "RealEstateAgent", 
  "name": "James Gorman Property",
  "url": "https://www.jamesgormanproperty.com",
  "description": "Professional estate agent in Derry offering property sales, lettings, and valuations across Waterside, Cityside, Culmore, Eglinton, and North West NI.",
  "telephone": "028 7161 0402",
  "email": "james@jamesgormanproperty.com",
  "address": {
    "@type": "PostalAddress", 
    "addressLocality": "Derry",
    "addressRegion": "Northern Ireland",
    "addressCountry": "UK"
  },
  "areaServed": [
    "Derry", "Limavady", "Eglinton", "Dungiven", "Waterside", "Cityside", "Culmore"
  ],
  "serviceType": [
    "Property Sales", "Property Lettings", "Property Valuations", "Property Management"
  ],
  "sameAs": [
    "https://www.facebook.com/profile.php?id=61559028705019",
    "https://www.instagram.com/james_gorman_property/", 
    "https://www.linkedin.com/in/james-gorman-8b293084/",
    "https://www.tiktok.com/@james.gorman.property"
  ]
}
</script>
```

4. [ ] Save custom code
5. [ ] Publish site
6. [ ] **VERIFY**: Test at https://search.google.com/test/rich-results

**Expected Result**: Enhanced search engine understanding of business type and services

---

## PHASE 2: STRATEGIC CONTENT PUBLISHING (2 hours)

### Blog Setup Preparation (15 minutes)
1. [ ] Wix dashboard → Blog → Settings  
2. [ ] Ensure blog is enabled and configured
3. [ ] Create blog categories:
   - [ ] "Property Market Analysis"
   - [ ] "Selling Guides" 
   - [ ] "Buying Guides"
   - [ ] "Property Services"
4. [ ] Configure commenting settings (moderate comments)
5. [ ] Set up social sharing buttons

### Blog Post #1: Property Valuation Services Guide (30 minutes)
**File**: `blog-post-property-valuation-guide.md`  
**Target**: "property valuation services derry"

**Steps:**
1. [ ] Blog → New Post
2. [ ] **Title**: `Professional Property Valuation Services Derry - Complete Guide 2026`
3. [ ] **Category**: Property Services
4. [ ] **Content**: Copy from `blog-post-property-valuation-guide.md` file
5. [ ] **SEO Settings**:
   - Meta description: "Professional property valuation services in Derry. Free valuations, market analysis, and expert advice from James Gorman Property. Contact today for accurate property appraisal."
   - Focus keyword: "property valuation services derry"
6. [ ] **Featured Image**: Use property/office photo
7. [ ] **Tags**: property valuation, derry, estate agent, free valuation
8. [ ] **Publish** immediately

### Blog Post #2: Quick Sale Guide (30 minutes)
**File**: `blog-post-quick-sale-guide.md`  
**Target**: "sell house fast derry"

**Steps:**
1. [ ] Blog → New Post
2. [ ] **Title**: `How to Sell Your House Fast in Derry - Expert Quick Sale Guide 2026`
3. [ ] **Category**: Selling Guides
4. [ ] **Content**: Copy from `blog-post-quick-sale-guide.md` file  
5. [ ] **SEO Settings**:
   - Meta description: "Sell your house fast in Derry with expert guidance. Professional quick sale strategies, pricing tips, and presentation advice from James Gorman Property."
   - Focus keyword: "sell house fast derry"
6. [ ] **Featured Image**: Use "For Sale" sign or property photo
7. [ ] **Tags**: quick sale, sell fast, derry, property sale, estate agent
8. [ ] **Publish** immediately

### Blog Post #3: Market Analysis (30 minutes)  
**File**: `blog-post-market-analysis.md`  
**Target**: "derry property market 2026"

**Steps:**
1. [ ] Blog → New Post
2. [ ] **Title**: `Derry Property Market Update March 2026 - Latest Trends & Analysis`
3. [ ] **Category**: Property Market Analysis  
4. [ ] **Content**: Copy from `blog-post-market-analysis.md` file
5. [ ] **SEO Settings**:
   - Meta description: "Derry property market analysis March 2026. Latest trends, price data, and predictions from local estate agent experts. 13% growth leading Northern Ireland."
   - Focus keyword: "derry property market 2026"
6. [ ] **Featured Image**: Use Derry cityscape or property development photo
7. [ ] **Tags**: property market, derry, market analysis, property trends, 2026
8. [ ] **Publish** immediately

### Blog Promotion Setup (15 minutes)
1. [ ] **Social Media**: Prepare posts for Facebook, Instagram, LinkedIn announcing new blog content
2. [ ] **Email**: Add blog links to email signature
3. [ ] **Internal Linking**: Link from homepage/services pages to relevant blog posts
4. [ ] **Google Search Console**: Submit updated sitemap including new blog URLs

---

## PHASE 3: IMMEDIATE VERIFICATION (20 minutes)

### Technical Fixes Verification
1. [ ] **Email Test**: Send test email to new corrected address
2. [ ] **Navigation Test**: Click all navigation links to ensure they work
3. [ ] **Homepage Test**: Check page title in browser tab shows new optimized title
4. [ ] **Schema Test**: Use Google Rich Results Test tool to verify schema markup
5. [ ] **Mobile Test**: Check all fixes work correctly on mobile devices

### Content Verification  
1. [ ] **Blog Page**: Verify all 3 posts appear on /blog page
2. [ ] **Individual Posts**: Check each post displays correctly with proper formatting
3. [ ] **Social Sharing**: Test social media sharing buttons work
4. [ ] **Search**: Test site search includes new blog content
5. [ ] **Categories**: Verify posts appear in correct categories

### Monitoring Setup
1. [ ] **Google Search Console**: Add new blog URLs to monitoring
2. [ ] **Google Analytics**: Set up blog content tracking goals
3. [ ] **Contact Form**: Monitor for increase in enquiries post-fixes
4. [ ] **Keyword Tracking**: Set up monitoring for target keywords:
   - "property for sale derry"
   - "property valuation services derry"  
   - "sell house fast derry"
   - "derry property market 2026"

---

## SUCCESS METRICS - WEEK 1 TARGETS

### Technical Improvements:
- [ ] **Email functionality**: 100% contact success rate (vs current broken state)
- [ ] **Professional navigation**: Zero blank/broken page complaints  
- [ ] **Search visibility**: Homepage appears for "property for sale derry" searches
- [ ] **Local SEO**: Complete business information visible in local searches

### Content Performance:
- [ ] **Blog indexing**: All 3 posts discovered by Google within 7 days
- [ ] **Social engagement**: Blog posts shared on social media platforms
- [ ] **Lead generation**: First blog-sourced enquiries within 14 days
- [ ] **Authority positioning**: Recognition as content leader vs competitors

### Business Impact:
- [ ] **Lead capture**: Zero lost leads from email functionality  
- [ ] **Professional image**: Improved client feedback about website quality
- [ ] **Competitive advantage**: First Derry agent publishing market analysis
- [ ] **Revenue pipeline**: Increase in valuation requests and selling enquiries

---

## CRITICAL SUCCESS FACTORS

### ✅ MUST DO:
1. **Fix email typo FIRST** - This prevents immediate lead loss
2. **Publish all 3 blog posts** - Essential for competitive content advantage  
3. **Test everything** - Verify each fix works before moving to next
4. **Monitor results** - Track improvements to demonstrate ROI

### ⚠️ AVOID:
1. **Don't skip technical fixes** - These prevent lead loss and improve UX
2. **Don't delay blog publishing** - Competitors could fill content gap
3. **Don't skip verification** - Broken implementations waste the effort
4. **Don't ignore monitoring** - Need data to prove success and optimize

### 🎯 FOCUS ON IMPACT:
- **Email fix** = Immediate lead protection
- **Blog content** = Market authority establishment  
- **Professional navigation** = Enhanced credibility
- **Search optimization** = Long-term traffic growth

**TOTAL EXPECTED IMPACT**: 200-400 additional monthly website visits, 15-25 additional monthly enquiries, £15k-£25k additional monthly revenue within 3-6 months.

---

**IMPLEMENTATION SUPPORT**: All source files available in `/DEPLOY-READY-CONTENT/` folder. Contact for any technical assistance needed during deployment.