# AntiBullyingNI.co.uk build pack

**Prepared:** 3 August 2026  
**Source review:** [REVIEW-FINDINGS.md](REVIEW-FINDINGS.md)  
**Scope:** maximum-impact repair plan; local implementation only until separately approved for deployment

## Delivery rule

Complete items 1–7 before another content blast. Protect `/anti-bullying-week/2026/`; it currently carries almost all organic visibility. Work on a `codex/antibullyingni-review-fixes` branch and require a reviewed preview before any production deployment.

## 1. Confirm conversion ownership and measurement

**Priority:** P0  
**Owner tag:** MANUAL  
**Findings:** ABNI-001, ABNI-012

Decide and document:

- the real destination for workshop enquiries;
- the real delivery method for each resource;
- the controller/privacy contact and approved privacy wording;
- whether GA4, Plausible or another first-party measurement setup will be used;
- the conversion events: `workshop_enquiry_submit`, `resource_request_submit`, `resource_download` and `outbound_hip_contact`;
- the baseline reporting cadence for organic landings and qualified enquiries.

**Acceptance checks**

- A named owner confirms the inbox/CRM destination and test recipient.
- Privacy copy, retention and consent basis are approved.
- A measurement ID/account is supplied without placing credentials in Git.
- Baseline is explicitly recorded as “unavailable before instrumentation”; GSC clicks are not relabelled as sessions.

## 2. Replace `mailto:` capture with real, tracked forms

**Priority:** P0  
**Owner tag:** CLAUDE CODE  
**Findings:** ABNI-001, ABNI-012

Build one workshop enquiry form on `/workshops/anti-bullying/` and production-grade resource forms on the four resource pages. Use a server-side or approved hosted handler, spam protection, clear success/error states and event tracking. Do not commit API keys, form secrets or environment files.

**Exact workshop intro copy**

> **Request an anti-bullying workshop quote**  
> Tell us a little about your school, year group and preferred timing. We’ll reply with suitable workshop options and the information your team needs to decide next steps.

**Exact form reassurance copy**

> We’ll use your details only to respond to this enquiry. Please do not include confidential information about an individual pupil.

**Suggested fields**

Name, work email, school/organisation, role, location (NI/ROI), pupil age/year group, approximate group size, preferred date/term, delivery preference and message. Do not ask for pupil names or case details.

**Acceptance checks**

- Submissions work without a local email client.
- Required fields, validation, loading, success and failure states work at 390px and 1440px.
- A controlled test reaches the confirmed destination exactly once.
- No sensitive content appears in the URL, analytics payload or repository.
- The four agreed events appear in the chosen analytics debug view.
- Keyboard-only and screen-reader labels are verified.

## 3. Remove all public build notes and rebuild structured data

**Priority:** P0  
**Owner tag:** CLAUDE CODE  
**Findings:** ABNI-002, ABNI-014

Search HTML and JSON-LD for: `preview`, `Phase 1`, `final build`, `final flow`, `conversion CTA`, `target phrases`, `client approval`, `pending`, `lead magnet`, `nurture sequence`, `page-context URL parameters` and `next build step`.

Replace workshop pricing/build text with:

> Workshop format and pricing depend on year group, group size, location and delivery requirements. Request a quote and we’ll recommend the most suitable option for your school.

Replace resource-flow build text with:

> Enter your school email to receive the resource and occasional practical updates for school teams. You can unsubscribe at any time.

Only use the second sentence if an approved email platform, lawful basis and unsubscribe flow are genuinely implemented. Otherwise use:

> Enter your school email to receive the resource. We’ll use your details only to send the requested material.

**Acceptance checks**

- The search terms above return no public implementation notes in visible HTML, metadata or JSON-LD.
- Structured data describes only visible, approved content.
- Google Rich Results Test reports no errors on representative page types.
- Pricing is not invented and no unapproved outcome claim is added.

## 4. Deliver real resource files

**Priority:** P0  
**Owner tag:** MANUAL  
**Findings:** ABNI-003

Cormac or an approved subject-matter owner must finalise and sign off:

- the general anti-bullying policy checklist;
- the NI checklist;
- the ROI checklist;
- the classroom pack.

Each resource needs a version date, intended audience, jurisdiction where relevant, source list, accessibility check and professional review. Replace the preview shells only after approval.

**Acceptance checks**

- Each file contains the complete material promised on its landing page.
- NI and ROI statutory references are current and region-correct.
- PDFs are tagged/readable, selectable, sensibly named and have descriptive document titles.
- No draft comments, private client data, tracked changes or source credentials remain.
- Download links return 200 and the correct content type.

## 5. Approve and publish the provider trust layer

**Priority:** P0  
**Owner tag:** MANUAL  
**Findings:** ABNI-005

Obtain verified source material before coding:

- provider name, role and approved professional biography;
- exact qualifications, registrations and memberships that may be stated publicly;
- safeguarding/child-protection approach and escalation boundaries;
- insurance and procurement evidence schools can request;
- two or three approved school testimonials/case summaries;
- permission for every named school/logo;
- evidence for “100+ schools”, or approval to remove/replace it.

Do not draft clinical credentials, safeguarding claims or testimonials from inference.

**Acceptance checks**

- Every factual claim has a client-supplied source and review date.
- Named schools have recorded permission.
- Testimonials identify the role/school only to the approved level.
- Unverified claims are removed rather than softened into ambiguity.

## 6. Rebuild the workshop page around a direct decision path

**Priority:** P1  
**Owner tag:** CLAUDE CODE  
**Findings:** ABNI-005, ABNI-006, ABNI-007

Keep `/workshops/anti-bullying/` and use this order:

1. School-focused value proposition and primary quote CTA.
2. Who the workshop is for.
3. What pupils and staff will do/receive.
4. Format, duration, capacity, location and online/in-person options—using approved facts only.
5. Safeguarding and provider proof.
6. School evidence/testimonials.
7. What happens after enquiry.
8. FAQ based on actual procurement questions.
9. Embedded enquiry form.

**Exact hero copy**

> **Anti-bullying workshops for schools in Northern Ireland and Ireland**  
> Practical, age-appropriate sessions designed to help school communities build shared language, safer responses and clear next steps. Tell us about your school and we’ll recommend a suitable format.

Primary CTA: **Request a workshop quote**  
Secondary CTA: **See workshop formats**

**Exact next-step copy**

> **What happens next**  
> Send the short enquiry form. We’ll review your year group, group size, location and preferred timing, then reply with suitable options and a clear quote. An enquiry does not commit your school to a booking.

**Acceptance checks**

- The primary CTA is visible without scrolling at 390px and 1440px.
- The quote form is reachable in one action and remains on the same domain unless an approved design says otherwise.
- Approved provider and safeguarding evidence is visible before the form.
- No hash target is obscured by the sticky header.
- The current URL, core topic and canonical are preserved.

## 7. Add safeguarding/help and privacy routes

**Priority:** P1  
**Owner tag:** CLAUDE CODE  
**Findings:** ABNI-004, ABNI-012

Add a concise help panel to relevant content and a global footer link to a dedicated support page. Have the exact regional destinations reviewed before deployment.

**Exact panel copy for professional approval**

> **Need help with bullying now?**  
> If you are a pupil or parent, contact your school’s safeguarding or pastoral team or speak to a trusted adult. If someone is in immediate danger, call 999 or 112. For confidential support, use the Childline service for your region.

Add visible links labelled **Childline UK**, **Childline Ireland**, **Support and safeguarding information** and **Privacy notice**. Do not collect incident reports or confidential pupil details through the workshop form.

**Acceptance checks**

- Cormac or the appointed safeguarding lead approves the copy and URLs.
- The panel appears on cyberbullying, incident-response and other sensitive pages without exploitative urgency.
- NI/UK and ROI routes are clearly distinguished.
- Emergency wording and external links are verified manually.
- The privacy notice is linked beside every form and in the global footer.

## 8. Consolidate legacy routes safely

**Priority:** P1  
**Owner tag:** CLAUDE CODE  
**Findings:** ABNI-008, ABNI-010

After exporting URL-level GSC data, prepare these likely permanent redirects:

- `/school-workshops/` → `/workshops/anti-bullying/`
- `/cyberbullying/` → `/cyberbullying-in-schools/`
- `/anti-bullying-week/` → `/anti-bullying-week/2026/`

Either rebuild `/resources/` as a useful resource index or redirect it to the best genuine resource hub. Do not redirect several unrelated URLs to the homepage.

**Acceptance checks**

- The source URL has no unique ranking/query value that would be lost.
- Each redirect is a single-hop 301 to the closest equivalent page.
- Internal links, canonicals and sitemaps use destination URLs only.
- No redirect touches `/anti-bullying-week/2026/` or changes its canonical.
- A crawl reports no loops, chains or orphaned destination pages.

## 9. Repair indexing and link hygiene

**Priority:** P1  
**Owner tag:** CLAUDE CODE  
**Findings:** ABNI-008, ABNI-011

Replace the dead Department of Education Cineáltas action-plan link on its three affected pages with the current official destination after manual verification. Rebuild sitemaps from the final canonical route set, remove legacy `www` sitemap residue where the property allows, and improve internal links from indexed pages to priority commercial/resource pages.

**Acceptance checks**

- All internal and cited official links return an expected live response.
- Sitemaps contain only canonical, indexable 200 URLs.
- Robots references only intended current sitemap files.
- GSC validation is requested only after deployment approval.
- Discovered-not-indexed URLs are reviewed for quality; indexing is not forced for thin/duplicate pages.

## 10. Fix mobile navigation and keyboard behaviour

**Priority:** P2  
**Owner tag:** CLAUDE CODE  
**Findings:** ABNI-013

At narrow widths, replace the three-row navigation with a clearly labelled menu control. Add a skip link, 44×44px minimum interactive targets, visible focus states and `scroll-margin-top` on anchored sections.

**Exact labels**

- Menu control: **Menu** / **Close menu**
- Skip link: **Skip to main content**

**Acceptance checks**

- Header no longer consumes multiple rows at 390px.
- Menu is fully usable with keyboard and screen reader and returns focus when closed.
- Focus is never trapped or hidden.
- Anchor headings are visible below the sticky header.
- Workshop and resource forms remain usable at 320px, 390px and 1440px.

## 11. Establish a two-domain content ownership map

**Priority:** P2  
**Owner tag:** MANUAL  
**Findings:** ABNI-009

Map every overlapping AntiBullyingNI/HIP Psychology URL to one primary intent and one owning domain. Recommended default:

- AntiBullyingNI owns campaign dates/themes, policy guidance, NI/ROI resources and educator materials.
- HIP Psychology owns practitioner authority, broader psychology services and organisation-level relationship/contact content.
- AntiBullyingNI retains the specialist workshop landing page but attributes delivery clearly and uses one tracked enquiry system.

**Acceptance checks**

- Every overlapping query cluster has one primary page.
- Secondary pages offer a genuinely different audience or purpose, or are merged.
- Anchor text and cross-domain links explain the relationship without reciprocal keyword stuffing.
- No cross-domain canonical or redirect is shipped without reviewing both properties’ GSC data.

## 12. Validate the next commercial content brief before publishing

**Priority:** P2  
**Owner tag:** MANUAL  
**Findings:** ABNI-007, ABNI-015

Do not run another broad blast yet. After items 1–11, use GSC plus an approved keyword tool to validate one commercial-supporting cluster around actual school procurement questions: workshop cost/quote, format, duration, age group, staff involvement, location, safeguarding/procurement and expected next steps. Keep volume, difficulty and SERP intent as sourced fields—do not invent values.

For every approved brief, specify:

- target decision-maker;
- primary query and real tool/date/source;
- unique purpose versus HIP Psychology;
- primary workshop CTA;
- named reviewer and review date;
- internal links to the workshop page and one relevant official/source page.

**Acceptance checks**

- At least one real commercial-intent query is validated before drafting.
- The new page does not duplicate an existing AntiBullyingNI or HIP URL.
- The workshop funnel and measurement are working before publication.
- An AI-visibility baseline is recorded manually for a fixed set of prompts, with date and source, without claiming exhaustive coverage.

## Release gate

A preview is ready for deployment review only when:

- P0 items are complete;
- no placeholder PDF or internal build language remains;
- a test enquiry and resource delivery pass with approval;
- privacy and safeguarding copy are signed off;
- the 2026 ranking page retains its URL, canonical and core intent;
- mobile, keyboard, crawl, structured-data and Lighthouse checks pass;
- the diff contains no credentials, `.env` files, browser profiles or auth exports.

Deployment, form delivery tests, analytics account changes and GSC submissions all require separate explicit approval.
