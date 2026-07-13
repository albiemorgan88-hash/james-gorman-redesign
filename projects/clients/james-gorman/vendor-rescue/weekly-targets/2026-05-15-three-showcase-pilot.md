# 2026-05-15 — Three Vendor Rescue Showcase Pilot

## Source / filter

- Source checked: PropertyPal BT47 and BT48 live sale result pages.
- Filter: live `For sale` listings with `activationTime` older than 60 days as of 2026-05-15.
- Candidate pool found during live check: 196 unique BT47/BT48 listings, 72 matching 60+ days live.
- Note: existing Apify runner remains available under `vendor-rescue/scripts/run_apify_propertypal.py`; this run used browser-accessible PropertyPal page data because the local shell did not expose an Apify token.

## Selected pilot showcases

1. **270 Culmore Road, Culmore, Derry, BT48 8JL**
   - Current agent: Oakland Estate Agents
   - Current price: Offers Over £750,000
   - Listed: 2025-05-29
   - Days live: 350
   - Signal: price reduced from £825,000 to £750,000 in March 2026
   - PropertyPal: https://www.propertypal.com/1018806
   - Showcase: https://james-gorman-property-showcases.vercel.app/270-culmore-road

2. **Cregg Lodge, 346 Glenshane Road, Claudy, BT47 4HP**
   - Current agent: Daniel Henry
   - Current price: Offers Over £695,000
   - Listed: 2025-06-02
   - Days live: 346
   - Signal: premium family-home story with scale, privacy, A6 access and strong visual potential
   - PropertyPal: https://www.propertypal.com/1019432
   - Showcase: https://james-gorman-property-showcases.vercel.app/cregg-lodge-claudy

3. **52 Tirbracken Road, Drumahoe, Londonderry, BT47 3LS**
   - Current agent: Robert Ferris Estate Agents
   - Current price: Price from £399,950
   - Listed: 2025-06-16
   - Days live: 332
   - Signal: fresh reduction from £485,000 to £399,950 and strong live-work / investment angle
   - PropertyPal: https://www.propertypal.com/1019847
   - Showcase: https://james-gorman-property-showcases.vercel.app/52-tirbracken-road

## Build / deploy

- Built new Next static app at `projects/james-gorman-property-showcases/`.
- Production index: https://james-gorman-property-showcases.vercel.app/
- Build passed: `npm run build`.
- Local smoke before deploy: `/`, `/270-culmore-road`, `/cregg-lodge-claudy`, `/52-tirbracken-road` returned 200.
- Production smoke after deploy: index and all 3 showcase URLs returned 200 after redirects were followed.
- Image check: 24/24 remote PropertyPal media URLs returned HTTP 200.

## Notes / guardrails

- No Wix edits were made.
- No outreach, emails, DMs, or social posts were sent.
- Pages are QR-ready public preview pages for James/Phil review.
