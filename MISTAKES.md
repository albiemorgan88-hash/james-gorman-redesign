# MISTAKES.md — Rules From Past Failures (Append-Only)

## Deployment
- No subagent touches live site architecture. Content edits only, Albie deploys.
- Every deployed site MUST have source in projects/. SYSTEMS.md tracks locations.
- Never deploy to production sites running ads without local build test first.
- Run `npm run build` and verify zero errors before deploying.

## Draw Emails
- NEVER include club money amounts — winners only, no club pot details.
- Verify email delivery after every draw — check PJ's inbox as canary.
- If any winner shows "Unknown", flag to PJ before publishing. Never send with unidentified winners.

## Reporting & Verification
- NEVER report revenue/sales without verifying: what sold, who bought, how much earned.
- Don't trust API success responses for critical ops — verify independently.
- NEVER report partnerships/connections/leads without verifiable source (URL, post ID).
- Subagent results are untrusted — verify claims before passing to PJ.

## Environment
- Every exec command needing API keys MUST start with `source ~/.zprofile`.

## Images
- Never use random Unsplash URLs — they return incorrect images. Use CSS gradients + icons.

## Content
- No false claims about live content — only report actual deployed changes.
- PJ expects immediate visible changes, not planning documents.

## Subagent Discipline
- NEVER spawn unnamed/anonymous subagents. Always use named team: WRITER, SCOUT, HUNTER, DREW, JAMES.
- See ORG-CHART.md for roles. Every spawn labelled with team member name.
- Random subagents broke OCC (404) and wasted tokens. This is a fireable offence.

## Vercel Deployment
- After ANY deploy, verify the live URL returns 200. `curl -s -o /dev/null -w "%{http_code}" [url]`
- Check Deployment Protection is OFF on all public sites before deploying.
- If a site goes 404 after deploy: check Deployment Protection FIRST (Settings → General → Deployment Protection).

## Subagent Discipline (2026-04-12)
- NEVER spawn raw Claude Code CLI processes for work that named subagents (WRITER, SCOUT, DREW, JAMES, HUNTER, CORMAC) are built for.
- Claude Code CLI costs PJ's Anthropic credits directly. Named subagents run through OpenClaw's subagent system.
- The team stack exists for a reason: use it. WRITER for content, SCOUT for SEO/keywords, DREW for Ardmore, JAMES for JGP, HUNTER for leads, CORMAC for HIP.
- If Claude Code OAuth token is expired, don't retry — flag it and use the proper subagent path.
- Wasted ~4 failed Claude Code spawns on 2026-04-12 before using WRITER subagent correctly.
