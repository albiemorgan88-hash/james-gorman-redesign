# AntiBullyingNI local repair implementation status

**Date:** 4 August 2026  
**Branch:** `codex/antibullyingni-review-fixes`  
**Production:** unchanged

## Completed locally

- Preserved the 3 August review findings, build pack and six evidence screenshots.
- Unified the maintained site around `build-site.mjs` as the generator source of truth.
- Removed public implementation notes, funnel language and incomplete pricing schema.
- Removed the unverified named-school and “100+ schools” claim from generated public pages.
- Replaced all `mailto:` forms with one validated enquiry architecture that fails closed until an approved secure destination is configured.
- Added a direct above-the-fold workshop quote route and embedded school enquiry form.
- Added honest resource-request pages without linking unapproved files.
- Replaced four one-page PDF shells with substantive branded professional-review drafts.
- Added support/safeguarding and privacy routes plus a sitewide support panel.
- Added a responsive mobile menu, skip link, visible focus treatment, larger touch targets and anchor offsets.
- Rebuilt `/resources/` as a resource hub.
- Added permanent redirect configuration and clean no-index HTML fallbacks for three legacy routes.
- Corrected the Department of Education and Youth Cineáltas URL.
- Added CSP, frame protection, permissions policy, referrer policy and content-type hardening.
- Added generic conversion events without personal data: `workshop_enquiry_submit`, `resource_request_submit`, `resource_download` and `outbound_hip_contact`.

## Verified locally

- 50 HTML files found: 47 canonical pages and 3 no-index redirect fallbacks.
- 47 canonical URLs in the combined sitemap.
- No missing titles, descriptions, H1s or canonical links.
- No duplicate titles or descriptions.
- No broken local internal links.
- No `mailto:` forms or public placeholder/build-note phrases.
- Workshop, resource and navigation layouts checked at 390px and 1440px.
- Mobile navigation open/close and Escape-key behaviour passed.
- Workshop anchor lands below the sticky header.
- Workshop and resource pages have no horizontal overflow at 390px.
- No preview console errors.
- API validation returns 503 when no destination is configured and accepts the honeypot path without forwarding.
- All four PDFs are A4, extractable and visually rendered without clipping or overlap.
- No form was submitted and no external delivery was tested.

## Production blockers

- Confirm the secure enquiry destination and configure its environment values outside Git.
- Approve the privacy controller, retention, processor and rights-contact wording.
- Obtain professional approval for all four PDF resources and remove their draft marking.
- Supply verified provider biography, credentials, safeguarding/procurement evidence and approved testimonials if these are to be published.
- Confirm the two-domain content ownership map with HIP Psychology.
- Choose analytics and verify events without transmitting personal data.
- Approve and run controlled form-delivery tests.
- Approve deployment separately.
