# Webflow API Updates Report — 2026-02-11

## Task 1: Page SEO Meta Titles & Descriptions

All staged (not published). Updated 12 pages total.

### Key Pages Updated

| Page | Before Title | After Title |
|------|-------------|-------------|
| Using AI to Win Jobs | `Using AI to Win Jobs - Blue Canvas AI` | `Using AI to Win More Jobs \| Blue Canvas AI UK` |
| AI Marketing Services | `AI Marketing Servies For Startups` (typo) | `AI Marketing Services for Startups \| Blue Canvas` |
| Lead Generation AI | `Lead Generation AI – Turn Prospects into Profit...` | `Lead Generation AI \| Blue Canvas UK` |
| Bespoke AI Training | `Bespoke AI Training Solutions - Blue Canvas AI` | `Bespoke AI Training for Teams \| Blue Canvas UK` |
| AI Sales Training | `AI Sales Training - Blue Canvas AI` | `AI Sales Training \| Blue Canvas AI Consultancy` |
| 404 | `Blue Canvas – Scale with AI Consultancy` | `Page Not Found \| Blue Canvas AI Consultancy` |

### Utility Pages — Removed "Consultix" Branding

| Page | After Title |
|------|-------------|
| Checkout (PayPal) | `Blue Canvas AI – Checkout` |
| Checkout | `Blue Canvas AI – Checkout` |
| Password | `Blue Canvas AI – Reset Password` |
| Style Guide | `Blue Canvas AI – Style Guide` |
| Change Log | `Blue Canvas AI – Change Log` |
| License | `Blue Canvas AI – License` |

### Pages Left Unchanged (Already Optimised)

- **Home** — `AI Consultancy UK \| Blue Canvas — AI Solutions for Business Growth` ✅
- **About** — `About Blue Canvas \| AI Consultants Northern Ireland` ✅
- **Services** — `AI Services for Business \| Consulting, Automation & Training — Blue Canvas` ✅
- **Blog** — `AI Business Insights & Guides \| Blue Canvas Blog` ✅
- **Case Studies** — `Case Studies – Proof That Our AI Works` ✅
- **AI Consultancy** — `AI Consultancy UK & Northern Ireland \| Blue Canvas` ✅
- **Blogs Template** — Dynamic SEO using CMS fields ✅
- **Locations Template** — Dynamic SEO using CMS fields ✅
- **Case Study Template** — Dynamic SEO using CMS fields ✅

### Description Updates Summary

All updated pages received new meta descriptions <160 chars incorporating target keywords: "AI consultancy", "AI consultant", "Blue Canvas", "UK", "Northern Ireland", "business". OpenGraph fields were set to match SEO fields.

---

## Task 2: Blog Post CMS Meta Audit

### Collection Schema

The blog collection (`67e4825804e6baf1d5246f5b`) has **no dedicated meta-title or meta-description custom fields**. Available fields:

- `name` (PlainText) — Blog post title
- `slug` (PlainText)
- `small-details` (PlainText) — Used as meta description via template
- `blog-main-details` (PlainText)
- `blog-details` / `blog-details-two` / `blog-details-three` (RichText)
- `author-name`, `author-image`, `category`, `faqs`, various image fields

### How Blog SEO Works

The **Blogs Template** page (`detail_blog`) has dynamic SEO:
- **SEO Title**: `Blue Canvas – Scale with AI Consultancy | Blogs - {{name}}`
- **SEO Description**: `{{small-details}}`

This means blog post SEO titles and descriptions are driven by the CMS `name` and `small-details` fields respectively.

### Findings

- **86 total blog posts** in the collection
- Most posts have `name` set but many lack `small-details` (meta description source)
- Only a few posts have `small-details` or `blog-main-details` populated
- **No CMS-level changes were made** as there are no dedicated meta fields to update
- To improve blog SEO, either:
  1. Add `small-details` content to all posts (this populates the meta description)
  2. Or add dedicated `meta-title` and `meta-description` fields to the collection schema via the Webflow Designer

### Manual Attention Needed

- Populate `small-details` field for all 86 blog posts to ensure meta descriptions render
- Consider shortening the template SEO title prefix for better keyword visibility

---

## Task 3: FAQ CMS Items Created

Created **8 FAQ items** in collection `6825ac8bf7c61e20bc2f590c`. All staged (not published).

| # | FAQ Item ID | Question |
|---|-------------|----------|
| 1 | `698c4e85c55fda4e0a88a37c` | What does an AI consultancy do? |
| 2 | `698c4e86ea445efdae0055a7` | How much does AI consulting cost in the UK? |
| 3 | `698c4e87ef16729fd83545a4` | Can small businesses benefit from AI? |
| 4 | `698c4e87eba35ba49665541b` | What AI tools do you recommend for business? |
| 5 | `698c4ea043095b5397ad14d6` | Do you offer AI training for teams? |
| 6 | `698c4ea170d2c8145a8f02fe` | Is my data safe when using AI tools? |
| 7 | `698c4ea39ad7e87f8aece255` | How quickly can we see results from AI implementation? |
| 8 | `698c4ea3c419f98d37766e1c` | Why choose Blue Canvas over other AI consultancies? |

### FAQ Content Highlights

All answers naturally incorporate:
- **Blue Canvas** brand name
- **Phil Patterson** as founder
- **Derry, Northern Ireland** location
- **UK** market relevance
- Relevant service mentions (training, consulting, custom GPT, lead gen)
- Pricing info (from £250/month, free consultation)
- Stats and credibility signals

### Collection Schema Used

- `name` (PlainText, required) — FAQ title
- `slug` (PlainText, required) — URL slug
- `question` (PlainText) — The question text
- `answer` (RichText) — The answer with HTML formatting

---

## Summary

| Task | Status | Items Changed |
|------|--------|---------------|
| Page SEO updates | ✅ Staged | 12 pages |
| Blog CMS meta audit | ✅ Audited | 0 changes (no meta fields exist) |
| FAQ items created | ✅ Staged | 8 new items |

**Nothing was published.** All changes are staged and awaiting manual review + publish in Webflow.
