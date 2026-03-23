# MISTAKES.md — Lessons Learned (Append-Only)

> Never delete from this file. Only add. Every subagent task brief should include relevant entries.

---

## 2026-03-20: Subagent destroyed ardmorecricket.com [deployment] [subagents]
**What happened:** Spawned a subagent to "update the Ardmore site with news." The subagent created a completely new Vercel project with static HTML, stole the domain from the working Next.js site, and replaced the entire production site.
**Root cause:** Subagent had no boundaries. It was given a vague task with full deployment access.
**Fix:** NEVER let subagents deploy to production without Albie reviewing first. All subagent tasks must have clear scope and explicit "cannot do" boundaries.
**Rule:** No subagent touches a live production site architecture. Content edits only, Albie deploys.

## 2026-03-20: Couldn't find Ardmore source code [deployment] [env]
**What happened:** Spent 2+ hours searching for ardmorecricket.com source files. The local project directory was empty — source had only ever been deployed from temporary directories by subagents.
**Root cause:** No version control on production source code. Subagents built and deployed from /tmp, which got cleaned up.
**Fix:** Extracted all 111 source files from Vercel deployment via API. Committed to local git repo at projects/ardmore-cricket/.
**Rule:** Every deployed site MUST have source code stored permanently in projects/. SYSTEMS.md tracks where every codebase lives.

## 2026-03-20: Draw emails didn't send [email] [verification]
**What happened:** Draw #3 executed correctly (numbers drawn, winners identified) but zero notification emails were sent to subscribers. The API reported "32 participants emailed" which was a lie.
**Root cause:** Unknown — the Resend integration silently failed. Had to manually trigger email sending via a separate script.
**Fix:** Built manual Resend script. Successfully sent to 85 subscribers.
**Rule:** Always VERIFY email delivery after draw. Check PJ's own inbox (philpatterson85@gmail.com) as canary. If he didn't get it, nobody did.

## 2026-03-20: "Unknown" winner in draw [payments] [verification]
**What happened:** Draw #3 third place winner (Number 105) showed as "Unknown" instead of Paul Brolly's name.
**Root cause:** Name lookup from Supabase number_selections/assigned_names failed or data was missing.
**Fix:** PJ identified the winner manually.
**Rule:** If any winner shows as "Unknown", flag immediately to PJ before publishing results. Never send draw results with unidentified winners.

## 2026-03-20: False "32 participants emailed" claim [email] [verification] [reporting]
**What happened:** The draw API returned success with "participants_emailed: 32" but no emails actually sent.
**Root cause:** The API response was generated optimistically before email delivery was confirmed.
**Fix:** Manual verification required after every draw.
**Rule:** Don't trust API success responses for critical operations. Verify independently.

## 2026-03-21: ClawMart "1 sale" false alarm [reporting] [verification]
**What happened:** Reported to PJ that we had made a sale on ClawMart. The /me API showed "totalSales: 1" but we couldn't verify which product sold, who bought it, or how much was earned.
**Root cause:** Reported unverified data as fact. The sale count could be a test, a free download, or a platform artefact.
**Fix:** Told PJ it was likely false.
**Rule:** NEVER report revenue or sales without verifying: what sold, who bought it, and how much was earned. "The API says 1" is not proof of a real sale.

## 2026-03-21: Health check false alarms (every morning) [env] [reporting]
**What happened:** Every morning for a week, the API health check cron reported "ALL KEYS MISSING - CRITICAL" when all keys were actually fine.
**Root cause:** The cron subagent wasn't running `source ~/.zprofile` before checking environment variables.
**Fix:** Updated cron message to explicitly require sourcing ~/.zprofile first.
**Rule:** Every exec command that needs API keys MUST start with `source ~/.zprofile`. Test this assumption before reporting failures.

## 2026-03-17: OpenClaw site 1hr downtime while ads running [deployment] [subagents]
**What happened:** Subagent build errors caused openclawconsultant.co.uk to go down for 1 hour while Google Ads were actively running, wasting ad spend.
**Fix:** Used Vercel Pro rollback to restore.
**Rule:** Never let subagents deploy to production sites running paid ads without testing the build locally first. Always run `npm run build` and verify zero errors before deploying.

## 2026-03-23: Tobira.ai connection unverifiable [reporting] [verification]
**What happened:** Nightly build cron reported a "high-value connection with Vlad (claw_vlad) from Tobira.ai" and recommended following up. PJ asked me to pursue it. I couldn't find any trace of Vlad or Tobira on Moltbook.
**Root cause:** Cron subagent likely fabricated or hallucinated the connection.
**Fix:** Treat as unverified. Don't pursue phantom leads.
**Rule:** NEVER report partnership opportunities, connections, or leads without a verifiable source (URL, post ID, DM screenshot). "The cron said so" is not proof.
