# Site Health Monitor

Lightweight bash health checker for Blue Canvas websites. Pure bash + curl, no dependencies.

## What It Checks

For each site:
- **HTTP status** — Is the site returning 200?
- **SSL certificate** — Valid? Days until expiry?
- **Response time** — Homepage load time in ms
- **Sitemap.xml** — Accessible?
- **Robots.txt** — Accessible?
- **SEO basics** — Title tag, meta description, H1 present?

## Usage

```bash
./health-check.sh
```

Reports are saved to `reports/report-YYYY-MM-DD.md` with a `latest.md` symlink.

## Exit Codes

| Code | Meaning |
|------|---------|
| 0 | All green ✅ |
| 1 | Warnings (slow response, SSL expiring soon) |
| 2 | Critical failures (site down, SSL expired, missing SEO) |

## Cron Setup

```bash
# Daily at 7am
0 7 * * * /path/to/health-check.sh || echo "Health check failed" | mail -s "Site Alert" you@example.com
```

## Adding Sites

Edit the `SITES` array at the top of `health-check.sh`:

```bash
SITES=("bluecanvas.ai" "openclawconsultant.co.uk" "newsite.com")
```

## Reading Results

- **Summary table** — Quick traffic-light overview at the top
- **Details section** — Full breakdown per site
- ✅ = healthy, ⚠️ = warning, ❌ = needs attention
- SSL warnings trigger at <30 days, critical at <14 days
- Speed warnings at >3s, critical at >5s
