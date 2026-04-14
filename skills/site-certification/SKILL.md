---
name: site-certification
description: Certify a website or web app before calling it good, shipped, or ready. Use when testing real user flows, auth or OAuth paths, responsive behaviour, live-vs-local differences, build or deploy verification, and pass/fail signoff for sites like UK Trade Jobs, Ardmore, OpenClaw Consultant, Learn.bluecanvas.ai, or other Blue Canvas projects.
---

# Site Certification

Use this when a site needs a real signoff, not a vibes check.

## Core rules

- Test the real critical flows, not just page load.
- Separate **local**, **preview**, and **production** findings clearly.
- Never call a flow passed unless you actually completed it.
- For auth or OAuth, the round-trip must land back on the intended app. If a human account choice or consent step is still needed, mark it **BLOCKED** until that final step is verified.
- If you find a real defect and it is reasonable to fix, fix it, build it, deploy it if needed, and retest.
- If a defect depends on external config, verify the live config after changing it.

## Workflow

1. **Define scope**
   - Confirm repo path, live URL, and the handful of critical user flows.
   - Focus on the routes and components that matter to the user journey.

2. **Inspect the relevant implementation**
   - Review only the files tied to the scoped flows.
   - Look for config drift, wrong callbacks, stale environment assumptions, broken persistence, or local-only logic.

3. **Build and run the practical checks**
   - Run local build and lint where useful.
   - Run browser-based checks on the live site when the flow is live.
   - Use real routes and real state when possible.

4. **Fix real bugs immediately**
   - If the issue is in code, patch it.
   - If the issue is in external config, fix that safely and verify the new state.
   - Rebuild and redeploy when required.

5. **Retest after the fix**
   - Re-run the failed flow end to end.
   - Confirm the exact regression is gone.

6. **Return a hard verdict**
   - Give an overall verdict: PASS, FAIL, CONDITIONAL PASS, or BLOCKED.
   - Give a per-flow verdict: PASS, FAIL, or BLOCKED.
   - List exact issues found, exact files changed, whether config changed, build/deploy status, live verification status, and remaining risks.

## Recommended flow buckets

Use the buckets that fit the site. Skip only when a bucket clearly does not apply.

- Landing page / primary CTA flow
- Key conversion flow
- Auth or OAuth flow
- Save / persistence flow
- Form submission flow
- Content discovery / navigation flow
- Responsive sanity at mobile, tablet, desktop
- Production-only config or integration checks

## Output format

1. Final certification verdict
2. PASS / FAIL / BLOCKED per flow
3. Exact issues found
4. Exact files changed
5. Whether external config changed
6. Build / deploy / live verification status
7. Remaining risks

## Red lines

- Do not blur local success into live success.
- Do not mark OAuth passed if the callback lands on the wrong site or the human account step was never completed.
- Do not say "all good" while a known blocker still exists.
- Do not expand scope into the whole repo unless the user asks.
