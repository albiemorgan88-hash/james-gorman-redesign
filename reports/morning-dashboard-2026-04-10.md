# Morning Dashboard — 2026-04-10

## 1) Site uptime
Checked live via HTTPS response + ICMP ping.

| Site | HTTPS | Total Response | Ping Avg | Notes |
|---|---:|---:|---:|---|
| bluecanvas.ai | 200 | 0.459s | 22.955ms | Healthy |
| ardmorecricket.com | 200 | 0.304s | 20.048ms | Healthy |
| uktradejobs.com | 200 | 0.265s | 20.813ms | Healthy |
| openclawconsultant.co.uk | 200 | 0.523s | 19.432ms | Healthy |

All four sites were reachable with 0% packet loss.

## 2) Google Ads yesterday (account 801-851-4760)
Attempted via local Google Ads API client using workspace config + virtualenv.

**Result:** blocked.
- `ads_env/bin/python google_ads_performance_check.py`
- Error: `invalid_grant: Bad Request`

Meaning the OAuth refresh token is currently invalid/revoked, so yesterday's spend/clicks/conversions could not be pulled safely.

## 3) Lead pipeline / follow-up status
From `MEMORY.md`, `STATE.md`, and recent memory logs:

### Active / immediate
- **Follow Rabbit AI** — onboarding live, £1,000 setup paid, £500/mo retainer. Contacts: Rory and Aco. Next step: continue onboarding / setup.
- **HIP Psychology (Cormac Venney)** — pending onboard at £650/mo. `STATE.md` next action says: **send onboarding email**.
- **James Gorman** — paying at £250/mo. Delivery active, with Wix fixes still remaining.

### Needs PJ follow-up / decision
- **Gavan Wall / Wall Group** — showcase v3 deployed, awaiting PJ's final UX review before sharing/pitching.
- **Older parked prospects** — Charlie O'Hara and White Oaks were still listed as active/waiting on PJ in memory; worth either reactivating or killing cleanly.

## 4) SEO snapshot (GSC clicks/impressions trend)
Attempted live GSC pull via API and browser.

**Live result:** blocked.
- API token is invalid (`401 Invalid Credentials`)
- Browser path reached Google account sign-in and then required password re-entry for `contact@bluecanvas.ai`

### Last clean verified snapshot on file (from 2026-03-13 weekly report)
**Blue Canvas**
- Clicks: **5** (-29% WoW)
- Impressions: **441** (+24% WoW)
- Avg position: **8.2**

**UK Trade Jobs**
- Clicks: **10** (+900% WoW)
- Impressions: **792** (+118% WoW)
- Avg position: **28.6**

## 5) Ahrefs snapshot (browser, profile=openclaw)
Attempted exactly as requested via browser against `https://app.ahrefs.com/`.

**Live result:** blocked.
- Ahrefs page showed: **“You’ve been signed out because this account is being used on another device.”**
- No fresh Site Explorer overview could be retrieved.

### Last verified Ahrefs snapshot on file (from 2026-03-13 report, baseline 2026-03-06)
| Domain | DR | Backlinks | Ref Domains | Organic Keywords |
|---|---:|---:|---:|---:|
| bluecanvas.ai | 19 | 13 | 11 | 0 |
| uktradejobs.com | 0 | 1 | 1 | 1 |

## 6) Cron failures in last 24h
Two clear failures:
1. **cron-watchdog** — failed 2026-04-09 due to timeout (`cron: job execution timed out`), duration 120s.
2. **SEO: Thursday Content** — failed 2026-04-09 due to timeout, duration 300s.

No disabled jobs found. Main pattern is timeouts, not missing schedules.

## 7) Blocked items needing PJ input
1. **Google re-auth** needed for Google Ads + GSC. Both API and browser flows now require fresh login.
2. **Ahrefs access** needs session cleanup / re-login. Current session was kicked out by another device.
3. **Gavan Wall** — final UX review / go-ahead before sending.
4. **HIP onboarding email** — ready to move, but external send needs PJ approval.
5. **Debt letters** — final V5 exists, waiting for Phil to send.

## Bottom line
- Sites are all up.
- Revenue-side follow-up is there, but outbound next steps still bottleneck on PJ approvals.
- Analytics stack is partly blind this morning: live Google Ads, GSC, and Ahrefs data are all blocked by auth/session issues.
- Last 24h cron trouble is limited to two timeout-based SEO/watchdog failures.