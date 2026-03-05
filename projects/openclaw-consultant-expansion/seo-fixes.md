# SEO Quick Wins — openclawconsultant.co.uk

## Immediate Technical Fixes

### 1. Custom Favicon
- Currently using default Webflow favicon
- Create branded favicon (OC logo or Blue Canvas logo)

### 2. Sitemap Expansion
- Current sitemap has only 1 URL
- After adding pages, regenerate sitemap with all URLs
- Resubmit to Google Search Console

### 3. Homepage Meta — Minor Tweaks
Current title is good. No changes needed to existing page SEO.

### 4. Schema Markup Enhancements
Current homepage has LocalBusiness + Service schema ✅

Add to new pages:
- **FAQ page:** FAQPage schema (critical for featured snippets)
- **Pricing page:** Offer schema with pricing
- **Services page:** Service schema with individual service items
- **About page:** Organization schema

### 5. Internal Linking
- Every new page must link to at least 2-3 other pages
- Homepage should link to all main pages in body content (not just nav)
- Add footer navigation with all pages

### 6. Image Optimisation
- Add alt text to all images with keyword-rich descriptions
- Use WebP format where possible
- Compress all images

### 7. Google Search Console
- Verify all new pages are indexed (request indexing for each)
- Monitor for crawl errors
- Check Core Web Vitals

### 8. Google Business Profile
- If not already set up, create one for Blue Canvas AI in Derry
- Link to openclawconsultant.co.uk
- Add "AI Consultant" as business category

### 9. robots.txt
- Currently embedded in HTML comments (unusual)
- Create proper /robots.txt file via Webflow

### 10. Page Speed
- Current page is CSS-heavy (embedded styles in HTML)
- Test with PageSpeed Insights after adding pages
- Lazy load any images below the fold

## Content-Based SEO Wins

### Blog Post Priority (Quick Wins)
1. "What Is OpenClaw?" — target brand searches, featured snippets
2. "OpenClaw vs Hiring Staff: Cost Comparison" — link-worthy, shareable
3. "How to Set Up OpenClaw" — capture DIY searchers, funnel to services

### External Link Building
- Submit to UK AI directories
- Get listed on OpenClaw community resources
- Guest post on AI/business automation blogs
- Derry/NI business directories (local SEO)

## Schema Markup — FAQPage (Ready to Implement)

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is OpenClaw?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "OpenClaw is an open-source AI assistant platform that goes far beyond simple chatbots. It runs on your own hardware, connects to your business tools, and handles real tasks — from customer communication to research, admin, and automation."
      }
    },
    {
      "@type": "Question",
      "name": "How much does OpenClaw setup cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "£1,500 flat rate for a complete deployment including installation, security hardening, up to 5 integrations, custom configuration, training, and 30 days of support. No hidden fees."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need technical knowledge to use OpenClaw?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. We handle all the technical work. You interact with your AI assistant through natural conversation on platforms you already use like Telegram, WhatsApp, or email."
      }
    },
    {
      "@type": "Question",
      "name": "Is my data safe with OpenClaw?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. OpenClaw runs on your own hardware, so your data never leaves your infrastructure unless you explicitly configure it to. We apply security hardening to every deployment."
      }
    },
    {
      "@type": "Question",
      "name": "How long does OpenClaw setup take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Typically 3-5 working days from kickoff call to a production-ready deployment."
      }
    }
  ]
}
```

## Service Schema (For Services Page)

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "AI Automation Consulting",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Blue Canvas AI",
    "url": "https://openclawconsultant.co.uk"
  },
  "areaServed": {
    "@type": "Country",
    "name": "United Kingdom"
  },
  "offers": {
    "@type": "Offer",
    "price": "1500",
    "priceCurrency": "GBP",
    "description": "Complete OpenClaw deployment including setup, security, integrations, training, and 30 days support"
  }
}
```
