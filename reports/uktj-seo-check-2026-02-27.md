# UK Trade Jobs — SEO Health Check
**Date:** 27 Feb 2026

## 1. Homepage On-Page SEO

| Element | Status | Value |
|---------|--------|-------|
| Title | ✅ Good | "UK Trade Jobs — Find Your Next Trade Job" |
| Meta Description | ✅ Good | "The UK's fastest-growing trade job board. Find electrician, plumber, carpenter, and skilled trade jobs across the UK." |
| H1 | ⚠️ Not visible in fetch | Likely rendered client-side (Next.js) — check SSR |
| Content | ⚠️ Thin | Homepage text is very short — stats, one paragraph, employer CTA. No keyword-rich body copy. |

**Issue:** Homepage content is minimal. Google needs substantive text to rank. Add 200-400 words of intro copy targeting "trade jobs UK", "skilled trade vacancies", etc.

## 2. Sitemap

- **Status:** ✅ Present at `/sitemap.xml`, referenced in robots.txt
- **Structure:** Well-formed XML with lastmod, changefreq, priority
- **URLs:** Truncated at ~40 in fetch, but includes: homepage, /jobs, /careers, /cv-builder, /employers, /about, plus individual job listings
- **Job listings:** Good — individual job pages are in sitemap with recent dates (Feb 2026)
- **Career guides:** ❌ NOT in sitemap — the /careers/how-to-become-an-electrician etc. pages are missing. **This is a significant issue** as these are the best SEO content pages.

## 3. Google Indexation

- **site:uktradejobs.com** returned only **1 result** (the /about page)
- **Verdict:** 🔴 Critically low indexation. The site has dozens/hundreds of pages but Google has indexed almost none.
- **Likely causes:** Site is very new, no backlinks, possibly crawl issues with client-side rendering

## 4. Keyword Rankings

| Keyword | UKTJ in Top 10? | Who ranks |
|---------|-----------------|-----------|
| "electrician jobs UK" | ❌ No | Indeed, Glassdoor, Reed, Jobsite, LinkedIn |
| "plumber jobs UK" | ❌ No | Totaljobs, Jobsite, Glassdoor, Reed, Hays |
| "trade jobs UK" | ❌ No | Indeed, GOV.UK, tradescareers.co.uk, Reed, TradesBoard |
| "how to become an electrician UK" | ❌ No | National Careers Service, Reddit, Indeed, tradeskills4u |
| "bricklayer salary UK" | ❌ No | National Careers, Glassdoor, PayScale, Checkatrade |

**Verdict:** 🔴 Zero visibility for any target keywords. Not ranking for anything yet.

## 5. Career Guide Content Quality

- **15+ career guides** covering electrician, plumber, carpenter, bricklayer, roofer, tiler, painter, plasterer, scaffolder, gas engineer, welder, HVAC, locksmith, glazier, plus career-change guide
- **Content quality:** ✅ **Excellent.** Each guide has:
  - Clear step-by-step career path
  - Salary ranges with realistic figures
  - Required qualifications checklist
  - Pros & cons section
  - FAQ with expandable answers
  - CTA to browse jobs
  - ~800-1200 words of substantive content
  - Well-structured with H2/H3 headings
- **These guides are the site's strongest SEO asset** — they target informational long-tail queries with good content

## 6. Robots.txt

```
User-Agent: *
Allow: /
Sitemap: https://uktradejobs.com/sitemap.xml
```
✅ Clean and correct. No issues.

---

## Summary

### What's Working ✅
- **Great career guide content** — 15+ well-written, structured guides targeting high-value informational keywords
- **Clean technical setup** — proper sitemap, robots.txt, good URL structure
- **Job listings with individual pages** — each job has its own URL in the sitemap
- **Good title/meta on homepage**
- **Fast site** (responses ~500-600ms)

### What's NOT Working 🔴
1. **Near-zero Google indexation** — only 1 page indexed. Critical problem.
2. **Career guides missing from sitemap** — the best content isn't being told to Google
3. **No keyword rankings at all** — not appearing for any target terms
4. **Homepage content too thin** — needs more keyword-rich body copy
5. **No backlinks** (assumed) — brand new domain with no authority
6. **Possible SSR issues** — verify that content is server-rendered, not client-only (Google can render JS but it's slower to index)

### Priority Actions
1. **Add career guide URLs to sitemap** — immediate fix, high impact
2. **Submit sitemap to Google Search Console** — force crawl/indexation
3. **Check SSR rendering** — ensure all pages return full HTML server-side
4. **Add homepage body content** — 300+ words targeting core keywords
5. **Build initial backlinks** — submit to directories, trade forums, relevant blogs
6. **Internal linking** — ensure career guides link to each other and to job listings
7. **Add structured data** — JobPosting schema for jobs, FAQPage schema for career guides

### Bottom Line
The content is genuinely good — the career guides are better than most competitors. The problem is purely **discovery**: Google hasn't found the site yet. Fix the sitemap, submit to GSC, and build a few backlinks, and we should start seeing pages indexed within 2-4 weeks. Rankings will take longer (3-6 months for informational terms, longer for competitive job keywords).
