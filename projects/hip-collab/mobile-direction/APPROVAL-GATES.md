# AntiBullyingNI production approval gates

The local repair build must not be deployed until every P0 gate below has a named approver and date. Do not place credentials or endpoint values in this file.

## P0: enquiry delivery and privacy

- [ ] Confirm the secure workshop/resource destination and responsible inbox or CRM owner.
- [ ] Configure `ENQUIRY_WEBHOOK_URL` in the hosting environment, not Git.
- [ ] Configure `ENQUIRY_WEBHOOK_BEARER_TOKEN` only if the approved destination requires it.
- [ ] Approve the privacy controller, retention period, processor list and rights-contact wording.
- [ ] Run one controlled workshop enquiry and one resource request after deployment is separately approved.
- [ ] Confirm the destination receives each test once and no personal data appears in URLs or analytics.

## P0: resource files

- [ ] Cormac or the appointed reviewer approves the classroom pack.
- [ ] Cormac or the appointed reviewer approves the cross-border policy checklist.
- [ ] A reviewer familiar with the Addressing Bullying in Schools Act approves the NI checklist.
- [ ] A reviewer familiar with current Bí Cineálta procedures approves the ROI checklist.
- [ ] Replace the four existing draft PDFs only after approval, then restore direct download links.
- [ ] Confirm document titles, source dates, accessibility and download responses.

## P0: provider and trust evidence

- [ ] Approve the provider name, public role and biography.
- [ ] Supply evidence for any public qualifications, registrations or memberships.
- [ ] Approve the safeguarding statement and school procurement information.
- [ ] Record permission for every named school, logo, testimonial or case summary.
- [ ] Supply evidence for the “100+ schools” claim or confirm that it remains removed.

## P1: release and measurement

- [ ] Choose the analytics platform and approved measurement identifier.
- [ ] Verify `workshop_enquiry_submit`, `resource_request_submit`, `resource_download` and `outbound_hip_contact` without sending personal data.
- [ ] Confirm the AntiBullyingNI/HIP Psychology content ownership map.
- [ ] Review the three permanent redirect pairs against URL-level GSC data.
- [ ] Review the local preview at 390px and 1440px, plus keyboard-only navigation.
- [ ] Approve a production deployment separately.
