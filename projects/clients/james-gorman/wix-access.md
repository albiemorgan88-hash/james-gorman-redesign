# Wix Access Notes — James Gorman Property

## Current verified state (2026-03-12)
- Website platform confirmed as **Wix**.
- A prior note says Wix access was obtained under Phil's account/session.
- **Browser automation tool verified locally:** `agent-browser` is installed and usable on this machine.
- **Public site ID successfully recovered from the live site HTML:** `4b8170fd-99cc-45e8-a4fb-e28bb7156d52`.
  - This was extracted from the public `jamesgormanproperty.com` page source (`siteId` / `metaSiteId`), so we now have a concrete Wix site identifier for James' live site.
- **Direct autonomous dashboard access is not yet proven in the agent context.**
  - Opening `https://manage.wix.com/dashboard/home` via `agent-browser` landed on the Wix **login screen**, not an authenticated site dashboard.
  - This means the automation browser does **not currently inherit** an already-authenticated Wix session.
- Quick local browser-profile checks on this machine did **not** show reusable Wix cookie hosts in the Chromium profiles inspected (Chrome / Brave / Arc / Edge). That does **not** prove Phil lacks access in a normal browser; it only means the current automation route does not automatically pick up a live Wix session.

## Confirmed access level
- **Confirmed in automation:** anonymous / logged-out only.
- **Confirmed from public site:** James' live site maps to Wix site ID `4b8170fd-99cc-45e8-a4fb-e28bb7156d52`.
- **Unconfirmed in automation/API:** exact Wix role for James site (owner, admin, website manager, blog writer, etc.).
- **Unconfirmed in automation/API:** whether the James site appears in the Wix account switcher once logged in.
- **Unconfirmed in API:** account ID tied to the relevant Wix key.

## Confirmed automation methods

### 1) Browser-driven dashboard automation — **best practical route once authenticated**
**Status:** Partly validated

What is proven:
- We can drive Wix with `agent-browser`.
- We can reach the correct Wix auth entrypoint and inspect the pre-login flow.
- We have the live James Wix site ID, which will help verify the correct dashboard target after login.

What is not yet proven:
- Reading the James site page list/slugs inside the dashboard
- Opening SEO/page settings for real site pages
- Locating blog controls inside the actual account
- Locating footer/content editing areas inside the editor/dashboard

Why this is still the best route:
- It matches the real Wix UI Phil already uses.
- It is the most realistic way to handle mixed tasks like page settings, footer edits, social link cleanup, and blog enablement without building a custom Wix integration first.
- It avoids overcommitting to API coverage that may not cleanly map to every editor task.

### 2) Wix API route — **partly documented, not fully validated end-to-end**
**Status:** Blocked by missing usable credential in the current execution context

Public Wix docs confirmed:
- Wix API key auth uses the `Authorization` header.
- You must also send **either** `wix-account-id` for account-level calls **or** `wix-site-id` for site-level calls.
- Most admin APIs are site-level unless explicitly documented as account-level.
- **Site-level calls only work with API keys generated from the site owner's account.**
- `Query Sites` is the documented account-level route for discovering site IDs.
- Wix exposes **Blog APIs**, including draft-post query/create routes.
- Wix exposes **Site Properties** and SEO-related APIs/docs, but the exact admin write surface is fragmented and not a full replacement for editor/UI tasks.

What was concretely validated:
- **Auth format:** confirmed from Wix docs.
- **Live James site ID:** confirmed from public HTML.
- **No usable Wix API credential was actually available in the current shell/session context** despite the task assumption.
  - `env` contained no Wix variables.
  - common shell profile files (`~/.zprofile`, `~/.zshrc`, etc.) showed no Wix credential export.
  - no approved local secret/file in the workspace exposed a working key.
- Because of that, I could **not honestly complete authenticated live API calls** against James' account/site.

What this means in practice:
- The Wix API route looks **potentially useful** for structured reads/writes like site lookup, blog draft handling, and some business/site property access.
- It is **not yet proven usable right now** for James because we do not currently have a working key available to the tool runtime.
- Even with a working key, the API probably still won’t replace editor-only tasks like footer layout/content edits, navigation cleanup, or any publish flow.

## Practical API capability surface for James (current honest view)

### Can likely be done via API once a valid key is supplied
- **Account/site discovery**
  - Query account sites to confirm the James site record
  - match the public site ID (`4b8170fd-99cc-45e8-a4fb-e28bb7156d52`) against the account response
- **Blog operations**
  - query draft posts
  - likely create/update draft blog posts and categories/taxonomy-related data depending on scope
- **Business/site properties**
  - read some site/business profile details (name, contact, business type, etc.) where the API/identity permits
- **Some SEO-related structured data**
  - potentially read/write certain SEO metadata via Wix SEO APIs, but this still needs live validation with a real key + scope

### Cannot yet be claimed as API-capable for James
- listing/editing the full Wix page tree for this site via authenticated API
- reading/updating page-level SEO settings for James' live pages via authenticated API
- confirming blog access on James' specific site/account
- confirming whether the installed Wix modules/features (blog, pages, etc.) are available through the key
- any publish-safe workflow using API alone

## What can be changed autonomously right now
- Draft SEO/meta/slug recommendations in project files
- Draft blog content and rollout plans
- Inspect public site behaviour and public URLs
- Extract some public technical identifiers like the live `siteId`
- Prepare a browser-automation workflow for Wix once authenticated

## What can likely be changed autonomously once authenticated in Wix
- Review page list and current slugs
- Open SEO/page settings and apply drafted titles/descriptions
- Check redirect behaviour after slug edits
- Remove/fix footer social links and footer email text
- Verify whether Wix Blog is installed
- Create blog categories and draft blog posts
- Stage edits for Phil review

## What still requires Phil/manual confirmation
- **Any publish action**
- Any irreversible live change or bulk structural change
- One-time confirmation of the correct James site/account after login
- Supplying a **working Wix API key + relevant account ID** if Phil wants the API route validated properly
- Final decision on using browser session auth vs long-term API key workflow
- Rotation/regeneration of the previously exposed Wix/API token before long-term operational use

## Safest next-action checklist to unlock true autonomous management
1. **Choose the operating model intentionally**
   - For actual James site ops, prefer **authenticated browser automation**.
   - Use the **API only as a supplement** for structured reads/blog draft workflows if a valid key is provided.
2. **One-time authenticated browser handoff**
   - Phil signs into Wix in a browser session we can reuse for automation, or we capture a fresh authenticated automation session/state.
3. **Immediate draft-only validation pass inside Wix**
   - Open James site dashboard
   - Verify the dashboard/site ID matches `4b8170fd-99cc-45e8-a4fb-e28bb7156d52`
   - Read page list + current slugs
   - Open page SEO settings for homepage + 1 internal page
   - Locate footer editing area / social links / contact details
   - Check whether Wix Blog is installed and whether categories/posts can be created as drafts
4. **Optional API validation pass once a real key is available to runtime**
   - Query Sites using account-level auth
   - confirm James site appears and matches the public site ID
   - test blog draft query endpoint
   - test one safe SEO/site-properties read endpoint
5. **Do not publish**
   - Make only reversible draft-level checks/edits
   - Stop before any live publish step

## Operational verdict
- **Is the Wix API usable right now for James?** **Not proven / effectively blocked right now**
- **What is confirmed working right now?** public site inspection, public `siteId` extraction, Wix auth/doc format validation, and browser access to the Wix login flow
- **Best method for real work:** authenticated **browser-driven Wix dashboard automation**
- **Main blocker:** no authenticated Wix session for browser automation, and no usable Wix API key exposed to the current runtime for authenticated API validation
- **Safest next autonomous step:** perform a one-time authenticated login/session capture, then run a draft-only validation pass inside Wix without publishing

## Security notes
- A Wix/API token was exposed in chat during setup.
- **Recommendation:** rotate/regenerate the token before any long-term operational use.
- **Do not store tokens in chat notes or project markdown files.**
- Store any replacement token in environment variables or approved secrets storage only.
