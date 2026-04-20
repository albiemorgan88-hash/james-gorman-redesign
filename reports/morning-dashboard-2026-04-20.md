# Morning Dashboard — 2026-04-20 07:05 BST

## 1) Site uptime
Live HTTPS check at **2026-04-20 07:02:54 BST**.

- **bluecanvas.ai** — HTTP **200**, **0.586s**, final URL `https://www.bluecanvas.ai/`
- **ardmorecricket.com** — HTTP **200**, **0.145s**, final URL `https://ardmorecricket.com/`
- **uktradejobs.com** — HTTP **200**, **0.381s**, final URL `https://uktradejobs.com/`
- **openclawconsultant.co.uk** — HTTP **200**, **0.380s**, final URL `https://openclawconsultant.co.uk/`

All four sites are up.

## 2) Google Ads, yesterday (2026-04-19), account 801-851-4760
### Live verification status
- Local Google Ads API path is still blocked by **`invalid_grant: Bad Request`**.
- The Google Ads account page is accessible in the existing browser session, but exact **19 Apr 2026** spend / clicks / conversions could **not** be extracted reliably this morning.

### Best verified recent signal
- Last direct live UI verification on file was run **2026-04-19** for **2026-04-18** and showed:
  - Spend **£0.00**
  - Clicks **0**
  - Conversions **0.00**
  - UI status: **“None of your ads are running”**
- This is useful context, but it is **not** a verified 19 Apr figure.

## 3) Lead pipeline follow-up
Highest-value follow-ups from `MEMORY.md` and daily memory files:

- **Gavan Wall / Wall Group SPAR** — site v3 is deployed, still waiting on **Phil’s final UX review** before sharing.
- **White Oaks** — **£1,000 paid on 2026-04-17**, but discovery/spec is still not captured in the workspace.
- **Joe Abrahams** — Readiness Scorecard demo exists; memory still says **no recent follow-up / no contact**.
- **Apollo outreach status** — solicitor/accountant sequence status still needs a quick sent/not-sent check.
- **James Gorman** — next run should start with full live review + end-to-end test, then technical SEO fixes only.
- **Follow Rabbit AI** — onboarding live; two Blue Canvas CMS items remain staged as drafts only.

## 4) SEO snapshot, GSC clicks / impressions trend
### Live status
- Fresh GSC pull is still blocked.
- OAuth/access remains broken: refresh attempts failing, and browser property access is not available for the requested root properties.

### Last verified trend on file
Comparison dates: **2026-02-27 to 2026-03-05** vs **2026-02-20 to 2026-02-26**.

- **bluecanvas.ai** — **5 clicks** vs 7 (**-29%**), **441 impressions** vs 357 (**+24%**), avg position **8.2**
- **uktradejobs.com** — **10 clicks** vs 1 (**+900%**), **792 impressions** vs 364 (**+118%**), avg position **28.6**

## 5) Ahrefs snapshot
Attempted via the `openclaw` browser profile. Snapshot/screenshot automation remained flaky, but the live authenticated Ahrefs browser session was available and used as the fallback read source.

### bluecanvas.ai
- **DR 16**
- **Top visible keyword positions:** none returned, Ahrefs showed **0 organic keywords**

### uktradejobs.com
- **DR 8**
- **Top 3 visible organic keywords:**
  1. `is city and guilds an nvq` — **#7**
  2. `trade jobs` — **#17**
  3. `plumbing apprenticeship london` — **#26**

## 6) Cron failures in last 24h
Window: since about **2026-04-19 07:02 BST**.

- **cron-watchdog** — **2026-04-19 09:00 BST**, timed out after **120s**
- **ClawRoster Daily** — **2026-04-19 11:00 BST**, request timeout after **607s**
- **moltbook-daily-engagement** — **2026-04-19 13:00 BST**, timed out after **600s**

## 7) Blocked items needing PJ’s input
- **Wall Group** — final UX sign-off before sharing.
- **White Oaks** — define and capture the v1 scope/spec now payment is in.
- **Google Ads + GSC** — re-auth / restore access so dashboards stop running blind.
- **Follow Rabbit CMS** — decide whether to publish the staged client/logo/case-study drafts.
- **JGP Wix-side fixes** — some remaining cleanup looks like manual editor work.

## Source notes
- Uptime: `reports/tmp-uptime-cron.txt`
- Pipeline: `reports/tmp-pipeline.txt`, `MEMORY.md`, `memory/*.md`
- GSC fallback: `reports/dashboard-google-metrics.txt`, `reports/seo-weekly-2026-04-17.md`
- Ahrefs: live authenticated browser session summary from this morning’s dashboard run
- Cron failures: `reports/tmp-uptime-cron.txt`
