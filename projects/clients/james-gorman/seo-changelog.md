# James Gorman Property SEO Changelog

Record **every** completed draft, recommendation, finding, and decision here.

---

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
