# James Gorman Property SEO Changelog

Record **every** completed draft, recommendation, finding, and decision here.

---

## 2026-03-13

### Wix API validation + client PDF report
- Sourced `~/.zprofile` and confirmed a live `WIX_API_KEY` was available in runtime.
- Successfully queried the Wix account-level Sites API at `POST https://www.wixapis.com/site-list/v2/sites/query` using account ID `8c4e2a21-daf9-446f-a6c1-a34d9700fcdc`.
- Confirmed the live site record for James Gorman Property:
  - site ID `4b8170fd-99cc-45e8-a4fb-e28bb7156d52`
  - published `true`
  - display name `JamesGormanProperty`
  - view URL `https://www.jamesgormanproperty.com/`
- Successfully read site properties from `GET https://www.wixapis.com/site-properties/v4/properties`.
- Read result confirmed current site properties include:
  - `siteDisplayName: JamesGormanProperty`
  - `categories.primary: other`
  - `categories.secondary: ["Local Business"]`
  - `timeZone: Europe/London`
  - `language: en`
- Attempted to update business profile via `POST https://www.wixapis.com/site-properties/v4/properties/business-profile` twice.
- Both update attempts returned `400 Illegal request - No updates on request body`, which means auth is valid but the request body contract still needs the exact Wix schema/shape not exposed clearly enough in this run.
- Attempted to access Wix Blog categories via `GET https://www.wixapis.com/blog/v3/categories`.
- Blog API returned `401 UNAUTHENTICATED: No blog instanceId found`, which strongly suggests the Wix Blog is not currently enabled/attached on this site for API operations.
- Because the blog instance is unavailable, draft blog categories and draft blog posts could not be created honestly through the API in this pass.
- Probed likely public page-creation/listing REST endpoints (`/pages/v1/pages`, `/site-pages/v1/pages`, `/site-pages/v2/pages`, `/site/v1/pages`) and each returned `404`.
- Conclusion from the API validation pass:
  - site/account read access is working
  - site properties read access is working
  - business-profile write route is reachable but request schema needs further validation before safe live updates
  - blog drafting is blocked because no blog instance is available
  - no supported public REST endpoint for creating standard Wix site pages was validated in this run
- No live/public page titles, meta descriptions, slugs, blog posts, or new location pages were changed via API in this pass.
- Created a branded client-facing HTML report for print/PDF output: `james-gorman-seo-report-2026-03-13.html`.


### Full SEO execution pass
- Reviewed the live homepage, core service pages, contact page, valuation page, sitemap, and robots file again to confirm current technical state.
- Re-confirmed that `pages-sitemap.xml` still exposes multiple `blank-*` URLs and that dynamic/property URLs remain weakly named.
- Ran live UK search checks for `estate agent derry`, `estate agent limavady`, `estate agent eglinton`, and `estate agent dungiven`.
- Validated the Ahrefs API key in runtime and confirmed the current plan is **Lite**; live competitor Site Explorer / Keywords Explorer calls returned `Insufficient plan` outside free test queries.
- Because of that plan restriction, Ahrefs-backed DR / backlinks / organic keyword counts could not be exported honestly in this pass.
- Created `competitor-analysis-2026-03-13.md` with evidence-backed SERP findings, competitor page/title review, and practical content-gap notes.
- Created `content-strategy-2026-03-13.md` with the recommended page rollout order, internal linking plan, and schema recommendations.
- Drafted four publish-ready location pages:
  - `estate-agent-derry-2026-03-13.md`
  - `estate-agent-limavady-2026-03-13.md`
  - `estate-agent-eglinton-2026-03-13.md`
  - `estate-agent-dungiven-2026-03-13.md`
- Drafted two additional supporting blog posts:
  - `blog-03-draft-2026-03-13.md`
  - `blog-04-draft-2026-03-13.md`
- Created the client-facing weekly report draft in `weekly-report-2026-03-13.md`.
- Created a dedicated technical implementation memo in `technical-seo-fixes-2026-03-13.md` covering titles, H1s, slug cleanup, internal links, schema, sitemap, robots and mobile notes.
- No live/public changes were made.

## 2026-03-12

### Baseline setup / discovery
- Created James Gorman SEO operating files and repeatable workflow scaffold.
- Logged the current client rules: draft-only, never publish autonomously, Phil to approve/publicly execute changes.
- Confirmed site platform as **Wix**.

### Known findings captured
- Identified **blank-X URL issue** for investigation/fix drafting.
- Noted **mobile performance issues** as a technical SEO priority.
- No **Google Business Profile** detected at baseline.
- Found **zero directory citations** at baseline.
- Flagged **footer email typo**.
- Flagged **footer social links pointing to wrong destinations**.

### Access / delivery notes
- Preliminary baseline SEO report has already been delivered.
- Wix access obtained today.
- Wix/API token was exposed in chat; recommend rotate/regenerate before long-term operational use.

### Next suggested focus
- Draft technical SEO fix list for homepage + core pages.
- Draft correction list for footer/contact/social issues.
- Assess metadata / H1 / internal linking gaps.
- Prepare GBP setup recommendation.
- Build first citation target list.

### First full SEO pass
- Reviewed README, backlog, changelog, weekly report template, run workflow, and baseline report before starting the first full pass.
- Pulled live homepage, sales, lettings, services, sitemap, and robots information from the live site.
- Confirmed `pages-sitemap.xml` still exposes multiple `blank-*` and placeholder-style URLs.
- Confirmed dynamic sitemap entries still contain placeholder-style item URLs.
- Captured live title/meta direction for homepage and priority pages to support a publish-ready draft pack.
- Completed competitor research for Derry, Limavady, Eglinton, and Dungiven using live search results and competitor page reviews.
- Identified local competitors appearing across target searches including Pauline Elliott, John V Arthur, Daniel Henry, EO'C Estate Agents, P. McDermott, Property Link, Trinity, and Cullen Property Services.
- Drafted the first publish-ready slug and metadata pack in `draft-meta-and-slugs-2026-03-12.md`.
- Drafted the first location-led content plan in `content-strategy-2026-03-12.md`.
- Drafted the main summary handoff in `first-seo-pass-2026-03-12.md`.
- Updated `weekly-report-template.md` to better support Friday reporting with Ahrefs/ranking/activity sections.
- Updated `run-seo-pass.md` to include the Friday report prep workflow at **14:00 Europe/London**.
- Ahrefs was **not directly accessed** in this run; competitor/keyword findings are based on live web research and site review only.
- Drafted a dedicated Wix blog rollout plan in `blog-rollout-plan-2026-03-12.md`, including setup recommendation, categories, URL structure, internal linking rules, and keyword-support logic for Derry, Limavady, Eglinton, and Dungiven.
- Drafted the first publish-ready blog post in `blog-01-draft-2026-03-12.md`: **How to Choose the Right Estate Agent in Derry**.
- Drafted a second supporting blog post in `blog-02-draft-2026-03-12.md`: **Thinking of Selling in Limavady? Start With a Proper Valuation**.
- Live site/blog check suggests the Wix blog is **not currently surfaced or meaningfully live**; no visible blog link or indexed blog section was found during this pass.
- No live/public changes were made.

### Wix automation validation
- Verified local browser automation tool availability: `agent-browser` is installed and usable on this machine.
- Tested direct navigation to `https://manage.wix.com/dashboard/home` in an automation session.
- Result: automation landed on the Wix **login page**, not an authenticated James site dashboard.
- This means the current automation browser does **not** yet inherit Phil's existing Wix login state.
- Performed a lightweight local Chromium-profile check for reusable Wix cookie hosts; none were found in the inspected Chrome / Brave / Arc / Edge profiles.
- Reviewed public Wix developer documentation/search results indicating API-key and Blog/SEO-related API capability exists, but no working James-site API credentials/site scope were available to validate against.
- Updated `wix-access.md` with the confirmed state, recommended automation route, blockers, and a safe next-step checklist.
- Conclusion for now: autonomous Wix management is **partly** ready in theory, but **not yet proven end-to-end** until we complete a one-time authenticated browser/session handoff and re-run a draft-only dashboard validation pass.
- Validated from the public site HTML that James Gorman Property's live Wix `siteId` is `4b8170fd-99cc-45e8-a4fb-e28bb7156d52`.
- Reviewed current Wix developer docs and confirmed API key auth format: `Authorization` header plus either `wix-account-id` (account-level) or `wix-site-id` (site-level).
- Confirmed Wix documents account-level site discovery (`Query Sites`), Blog draft endpoints, and site/SEO-related API surfaces in principle.
- Attempted credential discovery in the current runtime context (`env`, common shell profiles, approved workspace files) and found **no usable Wix API key actually available to the shell**.
- Because no working credential was available to runtime, authenticated live API calls against James' site/account could **not** be honestly validated in this pass.
- Updated `wix-access.md` with the real API state: public site ID confirmed, auth format confirmed, API route still blocked by missing working credential, browser automation still the recommended primary operating model.
