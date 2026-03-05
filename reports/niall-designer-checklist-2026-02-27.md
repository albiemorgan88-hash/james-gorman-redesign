# Webflow Fixes for Niall — bluecanvas.ai
**Date:** 27 February 2026

Hey Niall — here's what needs fixing on the Blue Canvas site, prioritised so you know what to hit first. Each item tells you exactly where to go and what to change.

---

## 🔴 Critical — Fix ASAP

These are live on the site right now and look broken to visitors.

### 1. Remove placeholder text on multiple pages
**Pages:** `/` (homepage), `/about`, `/case-studies`, `/lp/ai-audit`, `/ai-done-for-you`
**What's wrong:** There's default Webflow text showing — things like "Heading" and "This is some text inside of a div block." repeated on these pages.
**Fix:** Find those div blocks and either delete them or replace with real content. They're probably hidden elements that are still published.

### 2. Remove lorem ipsum on AI Consultancy page
**Page:** `/ai-consultancy`
**What's wrong:** There's a block of "Lorem ipsum dolor sit amet consectetur..." filler text visible on the page.
**Fix:** Delete the lorem ipsum text block entirely.

### 3. Fix broken counters on the homepage
**Page:** `/` (homepage)
**What's wrong:** The stats section shows "£0M+" and "0 New jobs created" — the animated counters aren't working, so visitors just see zeros.
**Fix:** Either get the counter animation working properly, or just hardcode the real numbers as static text for now. Ask Phil for the actual figures.

### 4. Check "Sarah Chen" on the About page
**Page:** `/about`
**What's wrong:** There's a team member listed as "Sarah Chen — Founder — Built AI systems for Fortune 500". This looks like placeholder/template content — Phil is the actual founder.
**Fix:** Check with Phil. If it's fake, remove it. If it's a real team member, leave it.

---

## 🟠 Important — Do This Week

### 5. Add a main heading (H1) to the Case Studies page
**Page:** `/case-studies`
**What's wrong:** There's no big heading at the top of the page — it just goes straight into testimonials.
**Fix:** Add a large H1 heading at the top, something like: **"Case Studies — Real AI Results for Real Businesses"**

### 6. Change the page title on AI Consultancy
**Page:** `/ai-consultancy` → Page Settings
**What's wrong:** The page title is "AI Consultancy Northern Ireland & UK" — identical to the homepage title. Google gets confused when two pages have the same title.
**Fix:** In Webflow Page Settings, change the SEO Title to: **"AI Consultancy Services — Strategy, Audit & Implementation | Blue Canvas"**

### 7. Update the About page title
**Page:** `/about` → Page Settings
**What's wrong:** Current title is just "Meet the Blue Canvas Team" — too vague.
**Fix:** In Page Settings, change SEO Title to: **"About Blue Canvas | AI Consultancy Derry, Northern Ireland"**

### 8. Remove or redirect old pages
**Pages:** `/old-home`, `/about-old`, `/services-old`, `/blog-old`, `/case-studies-old`
**What's wrong:** These old page versions are still live and showing up in Google's index.
**Fix:** For each one, go to Page Settings and either:
- Set up a **301 redirect** to the current version (e.g. `/old-home` → `/`), OR
- Delete the pages if they're not needed

### 9. Add internal links on Case Studies page
**Page:** `/case-studies`
**What's wrong:** The page is a dead end — no links to services, pricing, or anywhere else on the site.
**Fix:** Add a CTA section at the bottom linking to `/pricing` and `/ai-consultancy` — something like "Ready to get results like these? See our services →"

---

## 🟢 Nice to Have

### 10. Beef up the Case Studies page
**Page:** `/case-studies`
**What's wrong:** It's very thin — just a few testimonial quotes, no actual case studies.
**Fix:** When Phil has written case study content, build out proper case study cards/sections with: client name, challenge, what Blue Canvas did, results. For now, just flag it to Phil.

### 11. Add more content to the AI Audit landing page
**Page:** `/lp/ai-audit`
**What's wrong:** The page is a bit light on content for what it's trying to rank for.
**Fix:** When Phil provides copy, add more sections — maybe a "What's included in the audit" breakdown, process steps, or FAQ section.

### 12. Check the blog listing renders properly
**Page:** `/blog`
**What's wrong:** The blog post listing might not be showing for search engines (could be loading via JavaScript only).
**Fix:** Check that the blog post cards/list are built with Webflow CMS collection lists (not custom JS). If they're already CMS-powered, you're fine.

---

## ⚙️ Not Webflow Designer (Phil's To-Do)

These need code or settings outside Webflow Designer — just flagging so you know they exist:

- **Add schema markup (JSON-LD)** to pages — needs custom code injection, not a designer task
- **Check meta descriptions** on all pages in Page Settings — make sure each page has a unique one, 150-160 characters
- **Run a speed test** at [pagespeed.web.dev](https://pagespeed.web.dev/) and flag anything slow

---

*Any questions, ping Phil. Cheers! 🔧*
