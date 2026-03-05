---
name: showcase-pipeline
description: One-command end-to-end showcase pipeline for Blue Canvas AI prospects. Use when PJ says "showcase <business>", "pipeline <business>", "demo <name> <url>", or asks to research+build+deploy a prospect showcase in one go. Takes a business name + optional URL + optional contact name, then automatically researches, audits, scores, builds an 8-slide HTML showcase, deploys to GitHub Pages, and drafts a WhatsApp pitch. Builds on top of the client-showcase skill.
---

# Showcase Pipeline

One-command automation: research → audit → score → build → deploy → pitch.

## Invocation

```
showcase <business name> [url] [contact: Name]
```

Examples:
- `showcase "Sunrise Dental" https://sunrisedental.co.uk contact: Sarah`
- `showcase "JB Plumbing"` (no website — still runs research + GBP check)
- `pipeline "The Flower Room" https://theflowerroom.co`

## Pipeline Steps

### Step 1: Input Parsing

Extract from user message:
- `business_name` (required)
- `url` (optional — if missing, search for it)
- `contact_name` (optional — used in pitch message)
- `slug` — lowercase hyphenated: `the-flower-room`

### Step 2: Research

Run ALL of these — do not skip any:

```
1. web_fetch(url)                          # Homepage HTML (if URL provided)
2. web_fetch(url + "/about")               # About page (if exists)
3. web_search("{business_name}")            # General info
4. web_search("{business_name} reviews")    # Reviews (Google/Trustpilot/Booksy)
5. web_search("{business_name} site:google.com/maps")  # GBP check (MANDATORY)
6. web_search("{business_name} {city}")     # Local presence
```

If no URL provided, use search results to find their website. If truly no website exists, note this as a major finding (score impact: -20).

#### Google Business Profile (MANDATORY — never skip)

Search by brand name. Record:
- Exists: yes/no
- Star rating + review count
- Category
- "Book online" linked?
- Photos present?

**Never claim "No GBP" without searching by brand name.** A claimed GBP with reviews adds 8-10 points to score.

#### Review Aggregation

Check Google, Trustpilot, Booksy (if relevant). Record:
- Platform, rating, review count
- Common themes (positive + negative)
- Use in ROI slide and pitch message

### Step 3: SEO Audit

Check the following on each fetched page:

| Check | How | Impact |
|-------|-----|--------|
| Title tag | Present, unique, ≤60 chars, has keywords | 10pts |
| Meta description | Present, ≤160 chars, compelling | 8pts |
| H1 structure | Single H1, descriptive | 5pts |
| Schema/structured data | JSON-LD present (LocalBusiness, etc.) | 8pts |
| Open Graph tags | og:title, og:image, og:description | 5pts |
| SSL certificate | HTTPS | 5pts |
| Mobile viewport | `<meta name="viewport">` present | 5pts |
| Page speed indicators | Large images, render-blocking, excessive JS | 10pts |
| Image alt text | Alt attributes on images | 5pts |
| Internal linking | Navigation depth, orphan pages | 5pts |
| Sitemap | /sitemap.xml exists | 4pts |
| robots.txt | /robots.txt exists | 3pts |
| Content depth | Word count, thin content | 7pts |
| 404s/broken links | Dead links found during crawl | 5pts |
| Google Business Profile | Per GBP check above | 10pts |
| Accessibility basics | Contrast, form labels | 5pts |

**Total: 100 points.** See client-showcase `references/scoring.md` for detailed methodology.

### Step 4: Score Calculation

```
raw_score = sum of points earned from audit checks above
final_score = clamp(raw_score, 5, 95)
improvement_score = min(final_score + 25 + random(5,15), 95)
```

Categorize:
- 0-30: Critical — "Your website is losing you customers"
- 31-50: Poor — "Significant issues holding you back"  
- 51-70: Average — "Room for improvement"
- 71-85: Good — "Fine-tuning to stay ahead"
- 86-100: Excellent — "Polishing an already strong presence"

### Step 5: Generate Showcase HTML

Build a single HTML file following the client-showcase 8-slide structure. Read `skills/client-showcase/references/design-patterns.md` for CSS/animation patterns.

Key specs:
- Single file, zero dependencies, under 50KB
- Mobile-first (375px primary), responsive up
- Brand: `#2B4DAF` (blue), `#FF4520` (accent), `#FFFFFF` (white)
- Tap + swipe + keyboard nav, progress dots
- Smooth CSS transitions between slides
- Works fully offline

#### Slide Content Guide

| Slide | Must Include |
|-------|-------------|
| 1 Hook | Business name, industry-relevant hook line |
| 2 Scan | Animated crawl simulation with their actual URL |
| 3 Issues | Real issues found, animated score ring showing `final_score`/100 |
| 4 Fixes | Before/after Google search listing mockup, `improvement_score` |
| 5 Google Ads | Mock search ad for their keywords, budget estimate |
| 6 AI Chat | Industry-adapted chat demo (see below) |
| 7 ROI | Revenue estimates, payback period, ROI multiple |
| 8 CTA | PJ Patterson, +447935217762, contact@bluecanvas.ai |

**CTA slide:** Tap-to-call, WhatsApp link (`https://wa.me/447935217762`), email link. **No Blue Canvas website link** unless explicitly asked.

#### Industry Chat Adaptations

- **Healthcare/therapy:** Warm, empathetic. "I'd love to help you find the right appointment…"
- **Trades/construction:** Direct, practical. "Need a quote? I'll get that sorted…"
- **Retail/beauty/services:** Friendly customer service. "Let me check availability for you…"
- **B2B/professional:** ROI-focused. "I can schedule a demo to show how this impacts your pipeline…"

### Step 6: Deploy to GitHub Pages

```bash
SLUG="<slug>"
DIR="/tmp/${SLUG}-showcase"
mkdir -p "$DIR"
cp showcase.html "$DIR/index.html"
cd "$DIR"
git init && git add . && git commit -m "${BUSINESS} AI showcase"
# Check if repo exists first
gh repo view "albiemorgan88-hash/showcase-${SLUG}" 2>/dev/null || \
  gh repo create "showcase-${SLUG}" --public --source=. --push
# If repo existed, force push
git remote get-url origin 2>/dev/null || \
  git remote add origin "https://github.com/albiemorgan88-hash/showcase-${SLUG}.git"
git push -f origin main
# Enable Pages
gh api "repos/albiemorgan88-hash/showcase-${SLUG}/pages" -X POST \
  -f "build_type=legacy" -f "source[branch]=main" -f "source[path]=/" 2>/dev/null || true
```

Live URL: `https://albiemorgan88-hash.github.io/showcase-{slug}/`

Wait ~30s after deploy, then verify with `web_fetch` on the URL.

### Step 7: Draft WhatsApp Pitch

Write a short, casual WhatsApp message. Must include:
- Contact name (if provided)
- 1-2 specific issues found
- The showcase link
- Soft CTA — no hard sell

Template:
```
Hi {contact_name}! 👋

I had a look at {business_name}'s online presence — spotted a few things that might be costing you customers.

Put together a quick 30-second breakdown: {url}

No pressure at all — just thought it might be useful!

PJ
```

Read `skills/client-showcase/references/pitch-templates.md` for more examples.

### Step 8: Save Outputs

```
projects/demos/{slug}/
├── showcase.html          # The built showcase
├── research.md            # Research notes, GBP data, reviews
├── audit.md               # Full SEO audit results + score
├── pitch.md               # WhatsApp message draft
└── meta.json              # {business, url, score, deployed_url, date}
```

Create all files. `meta.json` schema:
```json
{
  "business": "Business Name",
  "url": "https://...",
  "contact": "Name or null",
  "score": 42,
  "improved_score": 71,
  "deployed_url": "https://albiemorgan88-hash.github.io/showcase-slug/",
  "created": "2025-01-15T10:30:00Z",
  "industry": "healthcare"
}
```

## Checklist Before Delivering

- [ ] GBP searched by brand name (not just URL)
- [ ] Score based on real audit findings
- [ ] HTML under 50KB, works offline
- [ ] All 8 slides present with real data
- [ ] Chat demo tone matches industry
- [ ] CTA has phone, WhatsApp, email — no website link
- [ ] Deployed and URL verified
- [ ] Pitch message drafted
- [ ] All outputs saved to `projects/demos/{slug}/`
