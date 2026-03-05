---
name: client-showcase
description: Build interactive, mobile-first HTML showcase presentations for prospective Blue Canvas clients. Use when PJ asks to create a pitch, demo, showcase, or sales presentation for a specific business. Crawls the prospect's website, runs a real SEO audit, and generates an 8-slide tap-through experience showing AI-powered improvements to their business. Deploys to GitHub Pages for easy WhatsApp sharing.
---

# Client Showcase Builder

Build cinematic, mobile-first HTML showcases that pitch Blue Canvas AI services to prospects using their own website data.

## Quick Start (Pipeline)

One-command automation: research → audit → score → build → deploy → pitch.

```
showcase <business name> [url] [contact: Name]
```

Examples:
- `showcase "Sunrise Dental" https://sunrisedental.co.uk contact: Sarah`
- `showcase "JB Plumbing"` (no website — still runs research + GBP check)
- `pipeline "The Flower Room" https://theflowerroom.co`

### Pipeline Steps

1. **Input Parsing** — Extract `business_name`, `url` (optional), `contact_name` (optional), generate `slug` (lowercase hyphenated)
2. **Research** — Run ALL of these (do not skip):
   - `web_fetch(url)` — Homepage HTML (if URL provided)
   - `web_fetch(url + "/about")` — About page (if exists)
   - `web_search("{business_name}")` — General info
   - `web_search("{business_name} reviews")` — Reviews (Google/Trustpilot/Booksy)
   - `web_search("{business_name} site:google.com/maps")` — GBP check (MANDATORY)
   - `web_search("{business_name} {city}")` — Local presence
   - If no URL provided, use search results to find their website. No website = score impact -20.
3. **SEO Audit** — Run full audit checklist (see below), score out of 100
4. **Score Calculation:**
   ```
   raw_score = sum of points earned from audit checks
   final_score = clamp(raw_score, 5, 95)
   improvement_score = min(final_score + 25 + random(5,15), 95)
   ```
   Categories: 0-30 Critical, 31-50 Poor, 51-70 Average, 71-85 Good, 86-100 Excellent
5. **Generate Showcase HTML** — 8-slide structure (see below), single file, zero deps, under 50KB
6. **Deploy to GitHub Pages** — See deployment section
7. **Draft WhatsApp Pitch** — Short, casual, reference specific issues found + showcase link
8. **Save Outputs** to `projects/demos/{slug}/` — showcase.html, research.md, audit.md, pitch.md, meta.json

### Review Aggregation
Check Google, Trustpilot, Booksy (if relevant). Record platform, rating, review count, common themes.

### Industry Chat Adaptations
- **Healthcare/therapy:** Warm, empathetic. "I'd love to help you find the right appointment…"
- **Trades/construction:** Direct, practical. "Need a quote? I'll get that sorted…"
- **Retail/beauty/services:** Friendly customer service. "Let me check availability for you…"
- **B2B/professional:** ROI-focused. "I can schedule a demo to show how this impacts your pipeline…"

### Pipeline Checklist Before Delivering
- [ ] GBP searched by brand name (not just URL)
- [ ] Score based on real audit findings
- [ ] HTML under 50KB, works offline
- [ ] All 8 slides present with real data
- [ ] Chat demo tone matches industry
- [ ] CTA has phone, WhatsApp, email — no website link
- [ ] Deployed and URL verified
- [ ] Pitch message drafted
- [ ] All outputs saved to `projects/demos/{slug}/`

## Workflow

1. **Research the prospect** — Fetch their website, crawl key pages, understand their business
2. **Run SEO audit** — Check titles, meta descriptions, schema, 404s, content, page speed
3. **Generate showcase** — 8-slide interactive HTML using the template structure
4. **Deploy to GitHub Pages** — Create repo, enable Pages, return shareable URL
5. **Draft pitch message** — WhatsApp-ready message with the link

## Slide Structure (8 slides)

| # | Slide | Content |
|---|-------|---------|
| 1 | Hook | "What if AI could transform your business overnight?" + prospect brand |
| 2 | Scan | Animated website crawl with progress bar |
| 3 | Issues | Real SEO problems found, score out of 100 (animated ring) |
| 4 | Fixes | Before/after Google search listing mockup, score improvement |
| 5 | Google Ads | Mock search results with their ad, budget estimates, competitor gaps |
| 6 | AI Assistant | Chat simulation relevant to their industry (sensitive tone for healthcare) |
| 7 | ROI | Industry-specific numbers: missed revenue, cost, payback period, ROI multiple |
| 8 | CTA | Contact details with tap-to-call/WhatsApp/email buttons |

## Design Requirements

- Single HTML file, zero external dependencies
- Mobile-first (375px primary target)
- Blue Canvas brand: Blue `#2B4DAF`, Red/orange accent `#FF4520`, White
- Clean, minimal, premium — NOT dark/techy
- Smooth CSS animations and transitions
- Tap + swipe + keyboard navigation
- Progress dots at bottom
- Under 50KB, works fully offline
- See `references/design-patterns.md` for CSS/animation patterns

## SEO Audit Checklist

Check and report on: title tags, meta descriptions, H1 structure, schema/structured data, Open Graph tags, 404 errors, internal linking, content depth, image alt text, page speed indicators, SSL, mobile viewport, sitemap, robots.txt.

### Google Business Profile Check (MANDATORY)

Always search for the business by name on Google Maps API or via web search `"<business name>" site:google.com/maps` before building the showcase. Many local businesses have a GBP even if their website SEO is poor. Check:

1. `web_search` for `"<business name>" <city>` — look for Google Maps / GBP results
2. `web_search` for `"<business name>" site:google.com/maps`  
3. `web_fetch` on `https://www.google.com/maps/search/<business+name+city>/` if needed

Record: exists (yes/no), review count, star rating, category, whether "Book online" is linked. Factor GBP into the SEO score — a claimed GBP with reviews adds ~8-10 points. Never claim "No Google Business Profile" without verifying via brand name search.

Score methodology: See `references/scoring.md`

## Deployment

```bash
# Deploy to GitHub Pages (gh CLI must be authenticated)
mkdir -p /tmp/{slug}-showcase
cp showcase.html /tmp/{slug}-showcase/index.html
cd /tmp/{slug}-showcase
git init && git add . && git commit -m "{Business} AI showcase"
gh repo create showcase-{slug} --public --source=. --push
gh api repos/{gh-user}/showcase-{slug}/pages -X POST \
  -f "build_type=legacy" -f "source[branch]=main" -f "source[path]=/"
```

URL pattern: `https://{gh-user}.github.io/showcase-{slug}/`
Current GitHub user: `albiemorgan88-hash`

## Pitch Message Template

Keep it short, casual, WhatsApp-friendly. Reference specific issues found. No hard sell. See `references/pitch-templates.md` for examples.

## CTA Contact Details

- **Name:** PJ Patterson, Blue Canvas AI
- **Phone:** +447935217762
- **Email:** contact@bluecanvas.ai
- **Website:** bluecanvas.ai

## Industry Adaptations

- **Healthcare/therapy:** Warm, sensitive tone in chat demo. No pushy language.
- **Construction/trades:** Practical, results-focused. Lead capture for quotes.
- **Retail/services:** Customer service focus. After-hours enquiry capture.
- **B2B/professional:** ROI-heavy, efficiency metrics, competitor gaps.

## Files

- `references/design-patterns.md` — CSS patterns, animations, slide HTML structure
- `references/scoring.md` — SEO scoring methodology
- `references/pitch-templates.md` — WhatsApp pitch message examples
- `scripts/deploy.sh` — GitHub Pages deployment script
- `assets/` — Reserved for brand assets if needed
