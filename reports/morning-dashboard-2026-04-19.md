# Morning Dashboard — 2026-04-19 07:00 BST

## 1) Site uptime
Checked live around 07:05 BST via `curl -Ls -o /dev/null -w` plus `ping -c 1`.

| Site | Ping | HTTPS | Response time | Final URL |
|---|---|---:|---:|---|
| bluecanvas.ai | OK | 200 | 0.319s | https://www.bluecanvas.ai/ |
| ardmorecricket.com | OK | 200 | 0.107s | https://ardmorecricket.com/ |
| uktradejobs.com | OK | 200 | 0.320s | https://uktradejobs.com/ |
| openclawconsultant.co.uk | OK | 200 | 0.102s | https://openclawconsultant.co.uk/ |

All four sites are up.

## 2) Google Ads, yesterday (2026-04-18)
Target account: `801-851-4760`.

### Live status
- Live Google Ads API pull attempted this morning using local credentials in `ads_env`.
- Refresh failed with: `invalid_grant: Bad Request`
- Result: **Yesterday spend / clicks / conversions could not be verified live.**

### Best verified paid snapshot on file
Source: `reports/seo-weekly-2026-04-17.md`
- Cost: **£185.57**
- Clicks: **165**
- Conversions: **0**
- Note: this is the last verified historical snapshot, **not** 2026-04-18.

## 3) Lead pipeline / follow-up status
Source: `MEMORY.md` and daily memory files.

### Active / revenue-critical
- **Follow Rabbit AI** — onboarding active, **£1k setup paid + £500/mo retainer**.
- **HIP / Cormac** — active at **£650/mo**; 73 net-new Zoho leads added on 2026-04-15.
- **James Gorman Property** — active at **£250/mo**; next run should be review + technical SEO fixes only.
- **White Oaks** — paid **£1,000** on 2026-04-17 for app build; discovery/spec still missing from workspace.

### Prospects / follow-ups still open
- **Gavan Wall / Wall Group SPAR** — website v3 deployed, waiting on Phil’s final UX review before sharing.
- **Joe Abrahams** — scorecard/demo exists, no recent closeout found.
- **Tim Clarke** — follow-up remains Phil-owned.
- **Tobira / Vlad Shipilov** — partnership DM follow-up still open.

## 4) SEO snapshot, GSC clicks/impressions trend
### Live status
- GSC token refresh attempted this morning.
- Refresh failed with: `invalid_grant: Bad Request`
- Result: **No live GSC refresh available this morning.**

### Last verified GSC trend on file
Source: `reports/seo-weekly-2026-04-17.md`
- **bluecanvas.ai** (27 Feb to 5 Mar 2026 vs 20 Feb to 26 Feb 2026): **5 clicks** (-29%), **441 impressions** (+24%), avg position **8.2**
- **uktradejobs.com** (27 Feb to 5 Mar 2026 vs 20 Feb to 26 Feb 2026): **10 clicks** (+900%), **792 impressions** (+118%), avg position **28.6**

## 5) Ahrefs snapshot — live via browser
Method: browser tool, OpenClaw-managed browser, `app.ahrefs.com`, Site Explorer overview + Organic Keywords.
Note: Ahrefs shows a banner warning that some SERPs may be incomplete since late March.

### bluecanvas.ai
- **DR 16**
- **Organic keywords: 0**
- **Top 3 positions: 0**
- **Top keywords:** none returned in Organic Keywords

### uktradejobs.com
- **DR 8**
- **Organic keywords: 3**
- **Top 3 positions: 0**
- **Top 3 keywords visible in UK Organic Keywords:**
  1. `is city and guilds an nvq` — **#7** — `/careers/trade-qualifications-explained`
  2. `plumbing apprenticeship london` — **#26** — `/job/plumbing-apprentice-london`
  3. `train to be a locksmith` — **#32** — `/careers/how-to-become-a-locksmith`

## 6) Cron failures in last 24h
Source: `openclaw cron list --all --json` at 2026-04-19 07:xx BST.

- **No cron failures found in the last 24 hours**.
- Historical older failures still on record: Tender Tracker Weekly, SEO Monday Audit, SEO Thursday Content, SEO Friday Monitor.

## 7) Blocked items needing Phil’s input
1. **Google re-auth / permissions** for Ads and GSC, both still blocked live.
2. **Gavan Wall** final UX review and go-ahead to share the SPAR site.
3. **Sales triage** for Joe Abrahams, Tim Clarke, and Tobira/Vlad: chase, close, or drop.
4. **White Oaks** discovery/spec needs captured in workspace now that payment landed.
5. **UKTJ Reed feed** — decide if you want the true `150` default pushed, since effective live cap still sits at `100`.
