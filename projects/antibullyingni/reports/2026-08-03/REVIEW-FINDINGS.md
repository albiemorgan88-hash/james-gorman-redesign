# AntiBullyingNI.co.uk review findings

**Review date:** 3 August 2026  
**Production site:** <https://antibullyingni.co.uk>  
**Reviewed source:** `projects/hip-collab/mobile-direction/`  
**Review mode:** read-only production review; no forms submitted and no live changes made

## Executive verdict

The site has a strong technical foundation and a useful early search asset, but it is not yet ready for a larger content or promotion push. The current static build is exceptionally fast, structurally tidy and clearly aimed at school decision-makers. Google Search Console shows that the 2026 campaign guide is already earning visibility. However, the commercial journey is undermined by implementation notes visible on public pages, placeholder PDF downloads, untracked `mailto:` forms, no dependable workshop enquiry capture, limited provider proof and no consistent safeguarding/help route. Fixing conversion plumbing, public-facing trust and draft leakage should come before adding more content.

## Baseline snapshot

| Measure | Verified baseline | Interpretation |
|---|---:|---|
| Organic sessions | Unavailable | No first-party analytics implementation was found. GSC clicks are not sessions. |
| GSC organic clicks, last 28 days | 12 | Period: 5 July–1 August 2026. |
| GSC impressions, last 28 days | 3,192 | Early visibility, overwhelmingly informational. |
| GSC CTR, last 28 days | 0.4% | Opportunity to improve snippets and commercial relevance. |
| GSC average position, last 28 days | 9.3 | Aggregate metric; not a ranking guarantee for any one query. |
| Form submissions per month | Unavailable | No form handler, event tracking or verified submission store was found. This is a critical measurement gap. |
| Indexed / not indexed | 19 / 27 | GSC Page indexing, last updated 24 July 2026. |
| Lighthouse mobile | 100 / 100 / 100 / 100 | Performance, accessibility, best practices and SEO on all three sampled pages. |

### Current top ten queries

| Query | Clicks | Impressions |
|---|---:|---:|
| anti bullying week 2026 | 3 | 1,437 |
| antibullying week 2026 | 1 | 77 |
| anti bullying week uk 2026 | 1 | 15 |
| anti-bullying week 2026 | 0 | 150 |
| when is anti bullying week 2026 | 0 | 137 |
| anti bullying week 2026 uk | 0 | 114 |
| anti bullying day 2026 | 0 | 40 |
| anti bullying week 2026 theme | 0 | 35 |
| anti bullying 2026 | 0 | 32 |
| anti bullying theme 2026 | 0 | 19 |

All ten are informational or campaign-date searches. No clearly commercial workshop query appears in the current top ten.

### Search asset to protect

For 2 May–1 August 2026, `/anti-bullying-week/2026/` produced 28 of 35 clicks and 8,870 of 9,249 impressions: 80% of clicks and 96% of impressions. Improve its calls to action and support signposting carefully, but do not materially change its URL, title, intent or core content without a measured migration plan.

## Findings

| ID | Severity | Area | Finding and evidence |
|---|---|---|---|
| ABNI-001 | **Critical** | Conversion and measurement | No dependable, measurable enquiry path exists. The workshop page links out to the HIP Psychology contact page after an internal anchor step. The four on-site forms use `mailto:` actions, and no analytics or form event implementation was found. Organic sessions and monthly submissions therefore cannot be baselined. |
| ABNI-002 | **Critical** | Content and trust | Public pages and structured data expose internal implementation language, including “Pricing needs client approval”, “preview”, “final build”, “conversion CTA”, “target phrases” and “next build step”. This appears on the workshop, resource, NI template and legacy workshop routes. |
| ABNI-003 | **Critical** | Lead magnets | All four downloadable PDFs are one-page preview shells. The classroom pack explicitly says final copy and design will follow. The public offer promises a usable pack/checklist, so the download currently breaks the trust exchange. |
| ABNI-004 | **High** | Safeguarding | There is no consistent sitewide “need help now” route for pupils, parents or staff. Twenty-nine locally audited pages lacked identifiable external support-organisation signposting. Advice to speak to a trusted adult is useful but not a substitute for clear regional help and emergency routes. |
| ABNI-005 | **High** | Provider trust | No page identifies the practitioner, professional role, relevant credentials, safeguarding approach, insurance/DBS-equivalent procurement evidence, workshop case study or verified testimonial. The homepage’s named-school and “100+ schools” claim requires manual evidence and permission verification. |
| ABNI-006 | **High** | Workshop UX | The workshop page has no enquiry CTA in the first mobile or desktop viewport. On mobile, the user must first choose the “Booking route” chip and then select an external quote link. The sticky header also clips the booking anchor. |
| ABNI-007 | **High** | Search strategy | Existing demand is dominated by Anti-Bullying Week date/theme searches. The commercial page had only 1 click and 25 impressions in the latest 28-day page view. Commercial intent needs a stronger landing page and supporting internal-link architecture, not simply more informational posts. |
| ABNI-008 | **High** | Indexing | GSC reports 19 indexed and 27 not indexed URLs: 18 discovered-currently-not-indexed, 2 crawled-currently-not-indexed, 4 alternate canonical pages and 3 redirects. The current content expansion is outpacing demonstrated indexing demand. |
| ABNI-009 | **High** | Cross-domain SEO | AntiBullyingNI and HIP Psychology publish overlapping pages for Anti-Bullying Week, assemblies, policy checklists/reviews, bystander work, pupil voice and classroom activities. Without an ownership map, both domains can dilute topical signals and compete for the same intent. |
| ABNI-010 | **High** | Duplicate/legacy routes | `/school-workshops/`, `/cyberbullying/` and `/anti-bullying-week/` overlap stronger current routes. The legacy workshop page also exposes build notes. Redirect or merge only after URL-level GSC checks; do not touch the ranking 2026 guide. |
| ABNI-011 | **High** | Link integrity | A Department of Education Cineáltas action-plan URL returns a public “Page not found” page. It appears on the ROI landing page, the Cineáltas explainer and the related blog article. |
| ABNI-012 | **High** | Privacy | Four forms collect names, school, role and email without an accessible privacy notice, processing purpose, retention explanation or consent context. A `mailto:` action also gives no reliable delivery or audit trail. |
| ABNI-013 | **Medium** | Mobile/accessibility | At 390px the navigation wraps across three rows and occupies roughly 159px. Some text links/chips appear smaller than a 44px touch target, the sticky header can obscure hash targets and no skip link was found. Automated Lighthouse accessibility still scored 100, so these are manual usability findings. |
| ABNI-014 | **Medium** | Structured data | FAQ and service structured data repeat internal funnel/build language. Structured data must describe visible, approved public content only. Remove draft-only entries and revalidate every affected template. |
| ABNI-015 | **Medium** | AI/search visibility | Content is crawlable and answer-oriented, but there is no evidence baseline for AI citations or referral traffic. Provider/entity proof is too weak for confident recommendation-style answers. Treat current AI visibility as unmeasured, not zero. |
| ABNI-016 | **Low** | Security hardening | HTTPS and HSTS are present, and the static architecture limits attack surface. CSP, frame-protection and related browser security headers were not found. Add them after testing embedded/download behaviour. |

## What is working

- The deployed site and reviewed local source align as a lightweight static build.
- All 48 local pages have a title, meta description, one H1 and a canonical URL.
- No duplicate titles or descriptions, broken local internal links, mixed content or third-party scripts were found in the local crawl.
- The homepage states a school-focused proposition and gives decision-makers clear orientation.
- The strongest campaign guide is already earning impressions and clicks.
- Official sources are used throughout much of the NI/ROI policy content.
- HTTPS, HSTS and asset caching are active.
- Mobile PageSpeed Insights scored 100 in all four categories for the homepage, workshop page and 2026 campaign guide. Sample lab metrics were 0.8–1.2 seconds LCP, 0 ms TBT and 0 CLS.

## Live journey observations

### Homepage

The proposition is clear and visually credible. At 390px, however, the always-open navigation competes with the main message and conversion path.

- [Desktop homepage](assets/home-1440x900.png)
- [Mobile homepage](assets/home-390x844.png)

### Workshop page

The page explains formats but does not present the quote action above the fold. The booking route is indirect, and the destination anchor can be hidden by the sticky header.

- [Desktop workshop page](assets/workshop-1440x900.png)
- [Mobile workshop page](assets/workshop-390x844.png)
- [Mobile booking anchor](assets/workshop-booking-390x844.png)

### Resource capture

Labels are readable, but the page explicitly describes itself as a preview/future flow and submits through the visitor’s mail client. No form was submitted during this review.

- [Mobile resource form](assets/resource-form-390x844.png)

## Page inventory and verdicts

“Improve” means retain the URL unless URL-level search evidence supports consolidation. “Merge” means confirm the destination and GSC history before adding a 301.

| Route | Main audience | Verdict | Reason |
|---|---|---|---|
| `/` | School buyer | **Improve** | Strong proposition; add proof, direct enquiry and mobile navigation. |
| `/anti-bullying/` | School buyer/educator | **Improve** | Useful broad hub; clarify its role against workshop and policy pages. |
| `/anti-bullying-week/2026/` | Educator | **Keep and protect** | Dominant organic asset; add restrained conversion/help routes only. |
| `/anti-bullying-week/` | Educator | **Merge candidate** | Legacy overlap with the 2026 guide; confirm GSC then 301. |
| `/anti-bullying-week/odd-socks-day-2026/` | Educator | **Keep** | Distinct campaign sub-intent. |
| `/workshops/anti-bullying/` | School buyer | **Rebuild in place** | Main commercial page; weak current conversion and public draft copy. |
| `/school-workshops/` | School buyer | **Merge candidate** | Duplicate intent and exposed internal SEO/build notes. |
| `/cyberbullying-in-schools/` | Safeguarding/pastoral lead | **Improve** | Clear current route; strengthen support and workshop proof. |
| `/cyberbullying/` | Safeguarding/pastoral lead | **Merge candidate** | Legacy overlap; confirm URL-level data then 301 to current route. |
| `/northern-ireland-schools/` | NI school leader | **Keep** | Useful regional hub. |
| `/northern-ireland-schools/addressing-bullying-act-summary/` | NI school leader | **Keep, review** | Valuable statutory summary; professional/legal review required. |
| `/northern-ireland-schools/anti-bullying-policy-template/` | NI safeguarding lead | **Improve** | Remove “Phase 1” copy and provide the promised approved asset. |
| `/northern-ireland-schools/education-authority-resources/` | NI educator | **Keep** | Useful official-resource intent. |
| `/republic-of-ireland-schools/` | ROI school leader | **Improve** | Fix dead Cineáltas link and strengthen regional provider fit. |
| `/republic-of-ireland-schools/bi-cinealta-procedures-primary/` | ROI primary leader | **Keep, review** | Distinct primary implementation intent; expert review required. |
| `/republic-of-ireland-schools/bi-cinealta-procedures-post-primary/` | ROI post-primary leader | **Keep, review** | Distinct post-primary implementation intent; expert review required. |
| `/republic-of-ireland-schools/cinealtas-explained/` | ROI school leader | **Improve** | Fix dead official link; retain explanatory intent. |
| `/republic-of-ireland-schools/tusla-guidance-summary/` | ROI safeguarding lead | **Keep, review** | Useful source-led summary; review for current accuracy. |
| `/resources/` | Educator | **Improve or merge** | Thin legacy index; either make it a real resource hub or merge it. |
| `/resources/anti-bullying-policy-checklist/` | Safeguarding lead | **Rebuild in place** | Valuable intent, but current form and PDF are not production-ready. |
| `/resources/anti-bullying-policy-checklist-ni/` | NI safeguarding lead | **Rebuild in place** | Regional value; replace preview shell and implement delivery. |
| `/resources/anti-bullying-policy-checklist-roi/` | ROI safeguarding lead | **Rebuild in place** | Regional value; replace preview shell and implement delivery. |
| `/resources/free-anti-bullying-classroom-pack/` | Teacher/pastoral lead | **Rebuild in place** | Already has a GSC click; fulfil the offer and instrument it. |
| `/blog/` | Educator | **Improve** | Keep as content index; introduce topic grouping and commercial route. |
| `/blog/anti-bullying-lesson-plan-ks2/` | Primary educator | **Keep** | Distinct classroom intent; add support and relevant CTA. |
| `/blog/anti-bullying-lesson-plan-ks3/` | Post-primary educator | **Keep** | Distinct classroom intent; add support and relevant CTA. |
| `/blog/anti-bullying-policy-review-new-school-year/` | School leader | **Keep** | Timely policy intent; avoid HIP duplication. |
| `/blog/anti-bullying-policy-review-questions-ni-schools/` | NI safeguarding lead | **Keep** | Clear regional intent; link to real NI checklist. |
| `/blog/anti-bullying-staff-briefing-first-month/` | School leader | **Keep** | Useful operational intent; add workshop route. |
| `/blog/anti-bullying-week-2026-assembly-ideas/` | Educator | **Keep** | Already earning clicks; protect and connect to campaign guide. |
| `/blog/anti-bullying-week-2026-planning-checklist/` | School leader | **Keep** | Distinct planning intent; connect to campaign guide and workshop. |
| `/blog/anti-bullying-week-2026-post-primary-activities/` | Post-primary educator | **Keep** | Distinct audience segment. |
| `/blog/anti-bullying-week-2026-primary-activities/` | Primary educator | **Keep** | Distinct audience segment. |
| `/blog/anti-bullying-week-display-board-ideas/` | Educator | **Keep** | Distinct classroom/display intent. |
| `/blog/anti-bullying-week-staff-briefing-template/` | School leader | **Keep** | Decision-maker adjacent; point to workshop and approved resource. |
| `/blog/anti-bullying-workshop-ideas-for-schools/` | School buyer | **Improve** | Commercial-supporting article; make the next step explicit. |
| `/blog/bi-cinealta-policy-review-questions-irish-schools/` | ROI safeguarding lead | **Improve** | Fix dead official link and connect to approved ROI checklist. |
| `/blog/bystander-activities-anti-bullying-week/` | Educator | **Keep** | Distinct activity intent; add help route. |
| `/blog/cyberbullying-lesson-plan-schools/` | Educator | **Keep** | Useful lesson intent; link to cyberbullying hub/support. |
| `/blog/friendship-belonging-first-weeks-school/` | Educator; may attract families | **Improve** | Add clear audience framing and help route. |
| `/blog/group-chat-bullying-how-schools-can-respond/` | Pastoral lead; may attract families | **Improve** | Higher-risk topic; strengthen safeguarding signposting and review. |
| `/blog/group-chat-online-safety-school-year/` | Pastoral lead; may attract families | **Improve** | Add current support sources and expert review. |
| `/blog/odd-socks-day-2026-assembly-script/` | Educator | **Keep** | Distinct campaign asset; connect to main 2026 guide. |
| `/blog/parent-communication-anti-bullying-new-school-year/` | School leader | **Keep** | School-to-parent communication intent; review template wording. |
| `/blog/parent-letter-anti-bullying-week-template/` | School leader | **Keep** | Useful template intent; add approved support footer. |
| `/blog/pupil-voice-anti-bullying-survey-questions/` | School leader | **Keep** | Useful governance/evaluation intent; avoid HIP duplication. |
| `/blog/pupil-voice-survey-before-new-school-year/` | School leader | **Keep** | Distinct timing/implementation angle. |
| `/blog/restorative-questions-after-bullying-incident/` | Pastoral lead | **Improve and review** | Sensitive practice guidance requires named professional review and support route. |

## SEO and content ownership recommendation

Use a deliberate two-domain model:

- **AntiBullyingNI.co.uk:** own informational campaign, school-policy, NI/ROI guidance, educator resources and the local anti-bullying topic hub.
- **HIPPsychology.com:** own practitioner authority, broader psychology services, clinical/professional proof and the final organisation-level contact relationship.
- **Workshop conversion:** retain `/workshops/anti-bullying/` as the specialist landing page because it already has search visibility, but use one tracked enquiry flow and clear provider attribution. Avoid publishing near-identical workshop/service copy on both domains.

Before redirecting or canonicalising any overlapping page, export URL/query data for both properties and decide a single owner for each intent. Do not use cross-domain canonicals as a substitute for a clear content strategy.

## AI visibility assessment

The site has helpful crawlable explanations, clear headings and source links, which are good foundations for answer engines. It lacks the entity-level proof required for recommendation queries: named practitioner, verifiable qualifications, organisation details, case evidence, editorial review dates and an explicit relationship to HIP Psychology. No AI-referral or citation baseline was available, so visibility remains unmeasured. Establish a small, repeatable manual benchmark only after the trust layer is approved.

## Checks not completed or requiring manual ownership

- No form was submitted, so delivery, autoresponder behaviour and lead destination remain unverified.
- No external account settings were changed and no URLs were submitted to GSC.
- No Ahrefs project/export for this domain was available in the reviewed local evidence. Search findings above use authenticated GSC and local/live inspection.
- GSC has insufficient traffic for field Core Web Vitals data; Lighthouse results are lab tests.
- Named-school permission, the “100+ schools” claim, practitioner credentials, safeguarding wording, insurance/procurement evidence and legal/clinical content accuracy require Cormac/client confirmation.
- The legislation.gov.uk link was blocked by the review browser and was not classified as broken.
- Production deployment, analytics configuration and inbox/CRM ownership are outside this read-only review.

