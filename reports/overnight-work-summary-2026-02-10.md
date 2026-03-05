# Overnight SEO Work Summary — 2026-02-10

## Task 1: Blog Meta Titles & Descriptions ✅
**File:** `reports/blog-meta-updates-2026-02-10.md`

- Audited all **86 blog posts** via Webflow CMS API
- Generated SEO-optimised meta titles (<60 chars) and descriptions (<160 chars) for every post
- **API limitation discovered:** Webflow CMS API v2 does not expose page-level SEO meta fields for collection items. These cannot be updated programmatically via PATCH.
- **Action required:** Meta titles/descriptions must be updated manually in Webflow Designer's page settings, or via Webflow's Site Settings for the blog template. All recommended copy is documented in the report.

## Task 2: Schema Markup ✅
**File:** `reports/schema-markup.html`

Created ready-to-paste JSON-LD schema markup including:
- **ProfessionalService** schema (LocalBusiness) — Blue Canvas AI, 11 Ebrington Square, Derry, phone, founder, services catalog, opening hours
- **Organization** schema — with social links (LinkedIn, Twitter/X)
- **FAQPage** schema — 8 common AI consultancy questions with detailed answers
- **WebSite** schema — with SearchAction for sitelinks

Format: HTML `<script>` tags ready to paste into Webflow Site Settings > Custom Code > Head Code.

## Task 3: Homepage Rewrite ✅
**File:** `reports/homepage-rewrite.md`

- ~950 words of homepage copy
- Sections: Hero (headline + subhead), What We Do, Who We Help, How It Works (3 steps), Social Proof, CTA
- Natural keyword integration: "AI consultancy UK", "AI consultancy Northern Ireland", "AI for business development"
- Derry/NI mentioned for local SEO
- "Free 15-minute consultation" featured prominently
- Tone: confident, direct, no corporate waffle — matches Blue Canvas brand voice

## Task 4: 6 Landing Pages ✅
**Files in:** `reports/landing-pages/`

| File | Words | Target Keyword |
|------|-------|---------------|
| ai-consultancy-northern-ireland.md | ~1,800 | AI consultancy Northern Ireland |
| ai-consultancy-uk.md | ~1,700 | AI consultancy UK |
| ai-consultant-ireland.md | ~1,800 | AI consultant Ireland |
| ai-for-business-development.md | ~1,900 | AI for business development |
| ai-marketing-services.md | ~1,800 | AI marketing services |
| ai-consultancy-small-business.md | ~2,000 | AI consultancy small business |

Each page includes:
- SEO meta title and description at top
- H1 with target keyword
- Unique, factual content with real NI/UK/Ireland context
- FAQ section (5-6 questions)
- Strong CTA with "free 15-minute consultation"
- Local SEO signals (Derry, Northern Ireland mentions)

## Task 5: Internal Linking Audit ✅
**File:** `reports/internal-linking-plan.md`

- Audited all 86 blog posts for internal linking opportunities
- Created post-by-post linking recommendations with specific anchor text
- Defined **topic clusters**: NI/Local, Sales & BD, Marketing, Training, Tender Writing, Sector-Specific, Tech/Thought Leadership, Small Business
- Identified **duplicate content issues** (2 pairs of duplicate-titled posts)
- Created **CTA box HTML template** to add to every blog post
- Prioritised implementation: CTA boxes → NI cluster links → topic cluster cross-links → thought leadership links

## Key Findings & Recommendations

1. **Webflow SEO API gap** — meta titles/descriptions need manual updating in Designer. Consider adding custom CMS fields for SEO title/description to enable future API automation.

2. **Duplicate content** — merge the two "AI for B2B Sales Automation" posts and the two "Is AI a Bubble?" posts. Set up 301 redirects.

3. **Internal linking is the biggest quick win** — 86 posts with minimal cross-linking means massive wasted link equity. The CTA box alone creates 86 new conversion touchpoints.

4. **Landing pages should be built in Webflow as static pages** (not CMS items) so they can have custom URLs without the /blog/ prefix.

5. **Schema markup should be deployed immediately** — it's copy-paste ready and will improve rich snippet eligibility across Google Search.

---

All files saved to: `/Users/philsagent/.openclaw/workspace/reports/`
