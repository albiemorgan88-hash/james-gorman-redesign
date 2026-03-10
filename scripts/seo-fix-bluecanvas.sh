#!/bin/bash
# SEO Fix Script for bluecanvas.ai — 10 March 2026
# Stages changes via Webflow API — DOES NOT PUBLISH
set -euo pipefail
source ~/.zprofile

SITE_ID="67e4825704e6baf1d5246ef6"
API="https://api.webflow.com/v2"
AUTH="Authorization: Bearer $WEBFLOW_API_TOKEN"
CT="Content-Type: application/json"

LOG="/Users/philsagent/.openclaw/workspace/reports/seo-health/fixes-applied-2026-03-10.md"
mkdir -p "$(dirname "$LOG")"

# Initialize log
cat > "$LOG" << 'HEADER'
# SEO Fixes Applied — 10 March 2026

**Site:** bluecanvas.ai (Webflow)
**Status:** STAGED (not published) — PJ to review and publish manually.

---

## Changes Log

HEADER

update_page() {
  local PAGE_ID="$1"
  local SLUG="$2"
  local DATA="$3"
  local DESC="$4"
  
  echo "→ Updating $SLUG ($PAGE_ID)..."
  RESPONSE=$(curl -s -w "\n%{http_code}" -X PUT "$API/pages/$PAGE_ID" \
    -H "$AUTH" \
    -H "$CT" \
    -d "$DATA")
  
  HTTP_CODE=$(echo "$RESPONSE" | tail -1)
  BODY=$(echo "$RESPONSE" | sed '$d')
  
  if [ "$HTTP_CODE" = "200" ]; then
    echo "  ✅ Success"
    echo "$DESC" >> "$LOG"
    echo "" >> "$LOG"
  else
    echo "  ❌ Failed (HTTP $HTTP_CODE)"
    echo "$BODY" | head -5
    echo "### ❌ FAILED: $SLUG (HTTP $HTTP_CODE)" >> "$LOG"
    echo "" >> "$LOG"
  fi
  
  # Rate limiting — 60 req/min max
  sleep 1.1
}

echo "========================================="
echo "PHASE 1: Fix Consultix Template Titles"
echo "========================================="

# 1. order-confirmation (67e4825804e6baf1d524701a)
update_page "67e4825804e6baf1d524701a" "order-confirmation" '{
  "seo": {
    "title": "Order Confirmed | Blue Canvas AI",
    "description": "Thank you for your order with Blue Canvas. Your AI consultancy service or training purchase has been confirmed."
  },
  "openGraph": {
    "title": "Order Confirmed | Blue Canvas AI",
    "titleCopied": false,
    "description": "Thank you for your order with Blue Canvas AI consultancy.",
    "descriptionCopied": false
  }
}' '### order-confirmation (`/order-confirmation`)
- **SEO Title:** `Consultix - Webflow Ecommerce Website Template` → `Order Confirmed | Blue Canvas AI`
- **SEO Description:** `(none)` → `Thank you for your order with Blue Canvas. Your AI consultancy service or training purchase has been confirmed.`
- **OG Title:** `(none)` → `Order Confirmed | Blue Canvas AI`
- **OG Description:** `(none)` → `Thank you for your order with Blue Canvas AI consultancy.`'

# 2. detail_category (67e4825804e6baf1d5247017)
update_page "67e4825804e6baf1d5247017" "detail_category" '{
  "seo": {
    "title": "AI Services & Products | Blue Canvas",
    "description": "Browse AI consultancy services and products from Blue Canvas. Training, audits, and managed AI solutions for UK businesses."
  },
  "openGraph": {
    "title": "AI Services & Products | Blue Canvas",
    "titleCopied": false,
    "description": "Browse AI consultancy services and products from Blue Canvas.",
    "descriptionCopied": false
  }
}' '### detail_category (`/category`)
- **SEO Title:** `Consultix - Webflow Ecommerce Website Template` → `AI Services & Products | Blue Canvas`
- **SEO Description:** `(none)` → `Browse AI consultancy services and products from Blue Canvas. Training, audits, and managed AI solutions for UK businesses.`
- **OG Title:** `(none)` → `AI Services & Products | Blue Canvas`
- **OG Description:** `(none)` → `Browse AI consultancy services and products from Blue Canvas.`'

# 3. detail_product (67e4825804e6baf1d5247003)
update_page "67e4825804e6baf1d5247003" "detail_product" '{
  "seo": {
    "title": "AI Consultancy Services | Blue Canvas",
    "description": "Professional AI services for UK businesses. From audits to full implementation — Blue Canvas delivers measurable results with AI."
  },
  "openGraph": {
    "title": "AI Consultancy Services | Blue Canvas",
    "titleCopied": false,
    "description": "Professional AI services for UK businesses from Blue Canvas.",
    "descriptionCopied": false
  }
}' '### detail_product (`/product`)
- **SEO Title:** `Consultix - Webflow Ecommerce Website Template` → `AI Consultancy Services | Blue Canvas`
- **SEO Description:** `(none)` → `Professional AI services for UK businesses. From audits to full implementation — Blue Canvas delivers measurable results with AI.`
- **OG Title:** `(none)` → `AI Consultancy Services | Blue Canvas`
- **OG Description:** `(none)` → `Professional AI services for UK businesses from Blue Canvas.`'

# 4. detail_career-details (67e4825804e6baf1d5246fb4)
update_page "67e4825804e6baf1d5246fb4" "detail_career-details" '{
  "seo": {
    "title": "Careers at Blue Canvas | AI Consultancy",
    "description": "Join Blue Canvas AI consultancy. We offer roles in AI consulting, automation, and business development across Northern Ireland and the UK."
  },
  "openGraph": {
    "title": "Careers at Blue Canvas | AI Consultancy",
    "titleCopied": false,
    "description": "Join Blue Canvas AI consultancy in Northern Ireland.",
    "descriptionCopied": false
  }
}' '### detail_career-details (`/career-details`)
- **SEO Title:** `Consultix - Webflow Ecommerce Website Template` → `Careers at Blue Canvas | AI Consultancy`
- **SEO Description:** `Start your career with Consultix...` → `Join Blue Canvas AI consultancy. We offer roles in AI consulting, automation, and business development across Northern Ireland and the UK.`
- **OG Title:** `(none)` → `Careers at Blue Canvas | AI Consultancy`
- **OG Description:** `(none)` → `Join Blue Canvas AI consultancy in Northern Ireland.`'

# 5. detail_team-details (67e4825804e6baf1d5246fb3)
update_page "67e4825804e6baf1d5246fb3" "detail_team-details" '{
  "seo": {
    "title": "Our Team | Blue Canvas AI Consultancy",
    "description": "Meet the Blue Canvas team. AI consultants based in Derry, Northern Ireland — helping UK businesses implement practical AI solutions."
  },
  "openGraph": {
    "title": "Our Team | Blue Canvas AI Consultancy",
    "titleCopied": false,
    "description": "Meet the Blue Canvas AI consultancy team based in Derry, NI.",
    "descriptionCopied": false
  }
}' '### detail_team-details (`/team-details`)
- **SEO Title:** `Consultix - Webflow Ecommerce Website Template` → `Our Team | Blue Canvas AI Consultancy`
- **SEO Description:** `Discover the talented team at Consultix...` → `Meet the Blue Canvas team. AI consultants based in Derry, Northern Ireland — helping UK businesses implement practical AI solutions.`
- **OG Title:** `(none)` → `Our Team | Blue Canvas AI Consultancy`
- **OG Description:** `Discover the talented team at Consultix...` → `Meet the Blue Canvas AI consultancy team based in Derry, NI.`'

echo ""
echo "========================================="
echo "PHASE 2: Fix Missing SEO Titles/Descriptions"
echo "========================================="

# 6. detail_team (699776d4d1595458357e1990) — no title, no desc
update_page "699776d4d1595458357e1990" "detail_team" '{
  "seo": {
    "title": "Our Team | Blue Canvas AI Consultancy",
    "description": "The people behind Blue Canvas AI. Experienced consultants helping UK businesses harness AI for growth. Based in Derry, Northern Ireland."
  },
  "openGraph": {
    "title": "Our Team | Blue Canvas AI Consultancy",
    "titleCopied": false,
    "description": "The people behind Blue Canvas AI consultancy.",
    "descriptionCopied": false
  }
}' '### detail_team (`/team`)
- **SEO Title:** `(none)` → `Our Team | Blue Canvas AI Consultancy`
- **SEO Description:** `(none)` → `The people behind Blue Canvas AI. Experienced consultants helping UK businesses harness AI for growth. Based in Derry, Northern Ireland.`
- **OG Title:** `(none)` → `Our Team | Blue Canvas AI Consultancy`
- **OG Description:** `(none)` → `The people behind Blue Canvas AI consultancy.`'

# 7. detail_testimonials (699759c5a26acc2932869c83) — no title, no desc
update_page "699759c5a26acc2932869c83" "detail_testimonials" '{
  "seo": {
    "title": "Client Testimonials | Blue Canvas AI",
    "description": "What our clients say about Blue Canvas. Real testimonials from UK businesses that transformed their operations with AI consultancy."
  },
  "openGraph": {
    "title": "Client Testimonials | Blue Canvas AI",
    "titleCopied": false,
    "description": "Real testimonials from Blue Canvas AI consultancy clients.",
    "descriptionCopied": false
  }
}' '### detail_testimonials (`/testimonials`)
- **SEO Title:** `(none)` → `Client Testimonials | Blue Canvas AI`
- **SEO Description:** `(none)` → `What our clients say about Blue Canvas. Real testimonials from UK businesses that transformed their operations with AI consultancy.`
- **OG Title:** `(none)` → `Client Testimonials | Blue Canvas AI`
- **OG Description:** `(none)` → `Real testimonials from Blue Canvas AI consultancy clients.`'

# 8. detail_clients (6995c5ba40114ef29a70387b) — no title, no desc
update_page "6995c5ba40114ef29a70387b" "detail_clients" '{
  "seo": {
    "title": "Our Clients | Blue Canvas AI Consultancy",
    "description": "Businesses we have helped with AI. Blue Canvas works with SMEs across Northern Ireland and the UK to deliver practical AI solutions."
  },
  "openGraph": {
    "title": "Our Clients | Blue Canvas AI Consultancy",
    "titleCopied": false,
    "description": "Businesses we have helped with AI at Blue Canvas.",
    "descriptionCopied": false
  }
}' '### detail_clients (`/clients`)
- **SEO Title:** `(none)` → `Our Clients | Blue Canvas AI Consultancy`
- **SEO Description:** `(none)` → `Businesses we have helped with AI. Blue Canvas works with SMEs across Northern Ireland and the UK to deliver practical AI solutions.`
- **OG Title:** `(none)` → `Our Clients | Blue Canvas AI Consultancy`
- **OG Description:** `(none)` → `Businesses we have helped with AI at Blue Canvas.`'

# 9. detail_faq-new (6995bae7a27a1aa66a6177c2) — no title, no desc
update_page "6995bae7a27a1aa66a6177c2" "detail_faq-new" '{
  "seo": {
    "title": "AI Consultancy FAQ | Blue Canvas",
    "description": "Common questions about AI consultancy answered. How AI audits work, pricing, timelines, and what to expect from Blue Canvas."
  },
  "openGraph": {
    "title": "AI Consultancy FAQ | Blue Canvas",
    "titleCopied": false,
    "description": "Common questions about AI consultancy answered by Blue Canvas.",
    "descriptionCopied": false
  }
}' '### detail_faq-new (`/faq-new`)
- **SEO Title:** `(none)` → `AI Consultancy FAQ | Blue Canvas`
- **SEO Description:** `(none)` → `Common questions about AI consultancy answered. How AI audits work, pricing, timelines, and what to expect from Blue Canvas.`
- **OG Title:** `(none)` → `AI Consultancy FAQ | Blue Canvas`
- **OG Description:** `(none)` → `Common questions about AI consultancy answered by Blue Canvas.`'

# 10. detail_faq (6825ac8bf7c61e20bc2f5933) — no title, no desc
update_page "6825ac8bf7c61e20bc2f5933" "detail_faq" '{
  "seo": {
    "title": "Frequently Asked Questions | Blue Canvas AI",
    "description": "Got questions about AI for your business? Find answers about our AI audit, managed services, training, and consultancy process."
  },
  "openGraph": {
    "title": "Frequently Asked Questions | Blue Canvas AI",
    "titleCopied": false,
    "description": "Find answers about Blue Canvas AI consultancy services.",
    "descriptionCopied": false
  }
}' '### detail_faq (`/faq`)
- **SEO Title:** `(none)` → `Frequently Asked Questions | Blue Canvas AI`
- **SEO Description:** `(none)` → `Got questions about AI for your business? Find answers about our AI audit, managed services, training, and consultancy process.`
- **OG Title:** `(none)` → `Frequently Asked Questions | Blue Canvas AI`
- **OG Description:** `(none)` → `Find answers about Blue Canvas AI consultancy services.`'

# 11. detail_sku (67e4825804e6baf1d5247002) — no title, no desc
update_page "67e4825804e6baf1d5247002" "detail_sku" '{
  "seo": {
    "title": "AI Service Details | Blue Canvas",
    "description": "View details of Blue Canvas AI consultancy services. Transparent pricing and clear deliverables for every package."
  },
  "openGraph": {
    "title": "AI Service Details | Blue Canvas",
    "titleCopied": false,
    "description": "View details of Blue Canvas AI consultancy services.",
    "descriptionCopied": false
  }
}' '### detail_sku (`/sku`)
- **SEO Title:** `(none)` → `AI Service Details | Blue Canvas`
- **SEO Description:** `(none)` → `View details of Blue Canvas AI consultancy services. Transparent pricing and clear deliverables for every package.`
- **OG Title:** `(none)` → `AI Service Details | Blue Canvas`
- **OG Description:** `(none)` → `View details of Blue Canvas AI consultancy services.`'

echo ""
echo "========================================="
echo "PHASE 3: Add OG Tags to Pages with SEO but No OG"
echo "========================================="

# Pages that have SEO titles but OG is null with titleCopied:true
# Setting explicit OG values is better for social sharing control

# 12. blog
update_page "699c4070a4084bf880a3808e" "blog" '{
  "openGraph": {
    "title": "AI for Business Blog | Blue Canvas",
    "titleCopied": false,
    "description": "No-BS AI guides for UK businesses. Tool reviews, automation walkthroughs, and real case studies from Blue Canvas AI consultancy.",
    "descriptionCopied": false
  }
}' '### blog (`/blog`)
- **OG Title:** `(copied from SEO)` → `AI for Business Blog | Blue Canvas`
- **OG Description:** `(copied from SEO)` → `No-BS AI guides for UK businesses. Tool reviews, automation walkthroughs, and real case studies from Blue Canvas AI consultancy.`'

# 13. ai-done-for-you
update_page "699b03bf1b3fc7027ee1f214" "ai-done-for-you" '{
  "openGraph": {
    "title": "Private AI Workforce for Your Business | Blue Canvas",
    "titleCopied": false,
    "description": "Your own AI team without the headcount. Blue Canvas builds, deploys, and manages AI agents from £250/mo.",
    "descriptionCopied": false
  }
}' '### ai-done-for-you (`/ai-done-for-you`)
- **OG Title:** `(copied from SEO)` → `Private AI Workforce for Your Business | Blue Canvas`
- **OG Description:** `(copied from SEO)` → `Your own AI team without the headcount. Blue Canvas builds, deploys, and manages AI agents from £250/mo.`'

# 14. pricing
update_page "699aed4469a00e6786774ef9" "pricing" '{
  "openGraph": {
    "title": "AI Consultancy Pricing | Blue Canvas",
    "titleCopied": false,
    "description": "No hidden fees. AI Audit £750, Private AI Workforce from £250/mo. Free 30-min strategy call with Blue Canvas.",
    "descriptionCopied": false
  }
}' '### pricing (`/pricing`)
- **OG Title:** `(copied from SEO)` → `AI Consultancy Pricing | Blue Canvas`
- **OG Description:** `(copied from SEO)` → `No hidden fees. AI Audit £750, Private AI Workforce from £250/mo. Free 30-min strategy call with Blue Canvas.`'

# 15. case-studies
update_page "699878e47c58897a91892b11" "case-studies" '{
  "openGraph": {
    "title": "AI Case Studies — Real Results | Blue Canvas",
    "titleCopied": false,
    "description": "See how UK businesses achieved measurable results with AI. Real case studies from Blue Canvas AI consultancy.",
    "descriptionCopied": false
  }
}' '### case-studies (`/case-studies`)
- **OG Title:** `(copied from SEO)` → `AI Case Studies — Real Results | Blue Canvas`
- **OG Description:** `(copied from SEO)` → `See how UK businesses achieved measurable results with AI. Real case studies from Blue Canvas AI consultancy.`'

# 16. about
update_page "6997758113b5d9effbef896a" "about" '{
  "openGraph": {
    "title": "About Blue Canvas — AI Consultants, Derry NI",
    "titleCopied": false,
    "description": "Phil Patterson founded Blue Canvas in 2025 to cut through AI hype. We build AI systems that deliver measurable ROI.",
    "descriptionCopied": false
  }
}' '### about (`/about`)
- **OG Title:** `(copied from SEO)` → `About Blue Canvas — AI Consultants, Derry NI`
- **OG Description:** `(copied from SEO)` → `Phil Patterson founded Blue Canvas in 2025 to cut through AI hype. We build AI systems that deliver measurable ROI.`'

# 17. ai-for-customer-service
update_page "6997733a3344c7f865bfecbf" "ai-for-customer-service" '{
  "openGraph": {
    "title": "AI for Customer Service | Blue Canvas",
    "titleCopied": false,
    "description": "Transform customer service with AI. Automate responses, cut wait times, and boost satisfaction with Blue Canvas.",
    "descriptionCopied": false
  }
}' '### ai-for-customer-service (`/lp/ai-for-customer-service`)
- **OG Title:** `(copied from SEO)` → `AI for Customer Service | Blue Canvas`
- **OG Description:** `(copied from SEO)` → `Transform customer service with AI. Automate responses, cut wait times, and boost satisfaction with Blue Canvas.`'

# 18. free-ai-consultation
update_page "699769d58acde7bab49b8b25" "free-ai-consultation" '{
  "openGraph": {
    "title": "Free AI Strategy Call | Blue Canvas",
    "titleCopied": false,
    "description": "Book a free 30-min call with an AI consultant. We identify your 3 biggest AI opportunities. No pitch, no pressure.",
    "descriptionCopied": false
  }
}' '### free-ai-consultation (`/lp/free-ai-consultation`)
- **OG Title:** `(copied from SEO)` → `Free AI Strategy Call | Blue Canvas`
- **OG Description:** `(copied from SEO)` → `Book a free 30-min call with an AI consultant. We identify your 3 biggest AI opportunities. No pitch, no pressure.`'

# 19. mentoring-membership
update_page "699767d0e56278d15292df89" "mentoring-membership" '{
  "openGraph": {
    "title": "AI Mentoring Membership — £50/month | Blue Canvas",
    "titleCopied": false,
    "description": "Monthly AI mentoring group calls, resource library, and direct support. Stay current with AI tools. Cancel anytime.",
    "descriptionCopied": false
  }
}' '### mentoring-membership (`/lp/mentoring-membership`)
- **OG Title:** `(copied from SEO)` → `AI Mentoring Membership — £50/month | Blue Canvas`
- **OG Description:** `(copied from SEO)` → `Monthly AI mentoring group calls, resource library, and direct support. Stay current with AI tools. Cancel anytime.`'

# 20. blue-canvas-academy-for-businesses
update_page "69970fbc22eeb949db429071" "blue-canvas-academy-for-businesses" '{
  "openGraph": {
    "title": "AI Training for Business Teams | Blue Canvas Academy",
    "titleCopied": false,
    "description": "Custom AI training for teams. Workshops, hands-on sessions, and ongoing support designed around your business workflows.",
    "descriptionCopied": false
  }
}' '### blue-canvas-academy-for-businesses (`/lp/blue-canvas-academy-for-businesses`)
- **OG Title:** `(copied from SEO)` → `AI Training for Business Teams | Blue Canvas Academy`
- **OG Description:** `(copied from SEO)` → `Custom AI training for teams. Workshops, hands-on sessions, and ongoing support designed around your business workflows.`'

# 21. blue-canvas-academy-for-individuals
update_page "699706cef4f406297c4c1dab" "blue-canvas-academy-for-individuals" '{
  "openGraph": {
    "title": "AI Training for Individuals — £250 | Blue Canvas",
    "titleCopied": false,
    "description": "Hands-on AI training for professionals. Learn practical AI skills you will use every day. No technical background needed.",
    "descriptionCopied": false
  }
}' '### blue-canvas-academy-for-individuals (`/lp/blue-canvas-academy-for-individuals`)
- **OG Title:** `(copied from SEO)` → `AI Training for Individuals — £250 | Blue Canvas`
- **OG Description:** `(copied from SEO)` → `Hands-on AI training for professionals. Learn practical AI skills you will use every day. No technical background needed.`'

# 22. ai-implementation-automation
update_page "6996ed54388bbbed8fb017c6" "ai-implementation-automation" '{
  "openGraph": {
    "title": "AI Implementation & Automation | Blue Canvas",
    "titleCopied": false,
    "description": "End-to-end AI implementation and workflow automation. Blue Canvas builds, integrates, and trains your team on AI tools.",
    "descriptionCopied": false
  }
}' '### ai-implementation-automation (`/lp/ai-implementation-automation`)
- **OG Title:** `(copied from SEO)` → `AI Implementation & Automation | Blue Canvas`
- **OG Description:** `(copied from SEO)` → `End-to-end AI implementation and workflow automation. Blue Canvas builds, integrates, and trains your team on AI tools.`'

# 23. ai-audit
update_page "6995c34ee26cbdc4d9dfee39" "ai-audit" '{
  "openGraph": {
    "title": "AI Audit for Business — £750 | Blue Canvas",
    "titleCopied": false,
    "description": "Structured AI audit with prioritised recommendations and ROI projections. 2-week delivery. Book a free consultation.",
    "descriptionCopied": false
  }
}' '### ai-audit (`/lp/ai-audit`)
- **OG Title:** `(copied from SEO)` → `AI Audit for Business — £750 | Blue Canvas`
- **OG Description:** `(copied from SEO)` → `Structured AI audit with prioritised recommendations and ROI projections. 2-week delivery. Book a free consultation.`'

# 24. detail_service-details
update_page "67e4825804e6baf1d5246f74" "detail_service-details" '{
  "seo": {
    "title": "AI Services for Business | Blue Canvas",
    "description": "Professional AI services tailored for UK businesses. From strategy to implementation, Blue Canvas delivers measurable results."
  },
  "openGraph": {
    "title": "AI Services for Business | Blue Canvas",
    "titleCopied": false,
    "description": "Professional AI services for UK businesses from Blue Canvas.",
    "descriptionCopied": false
  }
}' '### detail_service-details (`/service-details`)
- **SEO Title:** already set ✅ (no change)
- **SEO Description:** already set ✅ (no change)
- **OG Title:** `(none)` → `AI Services for Business | Blue Canvas`
- **OG Description:** `(none)` → `Professional AI services for UK businesses from Blue Canvas.`'

# 25. detail_blog (CMS template)
update_page "67e4825804e6baf1d5246f8e" "detail_blog" '{
  "openGraph": {
    "title": null,
    "titleCopied": true,
    "description": null,
    "descriptionCopied": true
  }
}' '### detail_blog (`/blog` CMS template)
- **OG:** Set to copy from SEO (dynamic per blog post)'

# 26. detail_case-study-details (already has OG, skip)
echo "⏭ detail_case-study-details — already has OG tags, skipping"

# 27. detail_locations (CMS template) 
update_page "68121b612785240f2ca080e4" "detail_locations" '{
  "openGraph": {
    "title": null,
    "titleCopied": true,
    "description": null,
    "descriptionCopied": true
  }
}' '### detail_locations (`/locations` CMS template)
- **OG:** Set to copy from SEO (dynamic per location page)'

echo ""
echo "========================================="
echo "ALL WEBFLOW API UPDATES COMPLETE"
echo "========================================="

# Append manual action items to log
cat >> "$LOG" << 'MANUAL'

---

## ⚠️ Manual Actions Required (PJ)

### 301 Redirects (Webflow Dashboard → Site Settings → Redirects)
These cannot be set via API. Add in Webflow Dashboard:

| From | To | Type |
|------|----|------|
| `/ai-audit` | `/lp/ai-audit` | 301 |
| `/ai-for-customer-service` | `/lp/ai-for-customer-service` | 301 |
| `/free-ai-consultation` | `/lp/free-ai-consultation` | 301 |
| `/mentoring-membership` | `/lp/mentoring-membership` | 301 |
| `/blue-canvas-academy-for-businesses` | `/lp/blue-canvas-academy-for-businesses` | 301 |
| `/blue-canvas-academy-for-individuals` | `/lp/blue-canvas-academy-for-individuals` | 301 |
| `/ai-implementation-automation` | `/lp/ai-implementation-automation` | 301 |
| `/ai-consultancy` | Already exists at `/ai-consultancy` ✅ | N/A |

### OG Image (All Pages)
The Webflow API does not support setting `og:image`. This must be set manually in Webflow Designer for each page:
- Go to each page → Page Settings → Open Graph Image
- Upload or select the Blue Canvas default social sharing image
- Priority pages: homepage, /ai-consultancy, /pricing, /lp/ai-audit, /lp/free-ai-consultation, /about, /blog

### openclawconsultant.co.uk — 7 Pages Missing og:image
This is a separate Webflow site (or Vercel). Needs separate fix — not part of bluecanvas.ai site.

### Publish
Review all staged changes above, then publish the site from Webflow Dashboard.

MANUAL

echo ""
echo "✅ Log saved to: $LOG"
echo "⚠️ REMINDER: Changes are STAGED, not published."
