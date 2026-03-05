---
name: site-health
description: Monitor health of Blue Canvas websites (SSL, HTTP status, speed, SEO basics). Use when checking site status, SSL expiry, uptime, or running health checks across bluecanvas.ai and satellite sites.
---

# Site Health Monitor

## Quick Start

```bash
cd projects/site-health-monitor && ./health-check.sh
# Report: projects/site-health-monitor/reports/report-YYYY-MM-DD.md
# Latest: projects/site-health-monitor/reports/latest.md
```

## Monitored Sites

| Site | Type |
|------|------|
| bluecanvas.ai | Primary |
| openclawconsultant.co.uk | Satellite |
| zapierconsultant.co.uk | Satellite |
| aiagentsetup.co.uk | Satellite |
| uktradejobs.com | UK Trade Jobs |
| ardmorecricket.com | Ardmore Cricket Club weekly draw — production, Stripe payments active |

To add sites: edit `SITES` array in `health-check.sh`.

## What It Checks

| Check | Tool | Warning | Critical |
|-------|------|---------|----------|
| HTTP status | curl | — | Non-200 |
| SSL expiry | openssl s_client | <30 days | <14 days |
| Response time | curl timing | >3000ms | >5000ms |
| Sitemap.xml | curl | Non-200 | — |
| Robots.txt | curl | Non-200 | — |
| Title tag | grep HTML | — | Missing |
| Meta description | grep HTML | — | Missing |
| H1 tag | grep HTML | — | Missing |

## Exit Codes

- `0` — All green ✅
- `1` — Warnings (slow response, SSL expiring soon)
- `2` — Critical (site down, SSL expired, missing SEO elements)

## Alert Thresholds

### SSL Certificate
- ✅ **Green:** 30+ days remaining
- ⚠️ **Warning:** 14-30 days — renew soon
- ❌ **Critical:** <14 days — renew immediately

### Response Time
- ✅ **Green:** <3 seconds
- ⚠️ **Warning:** 3-5 seconds — investigate
- ❌ **Critical:** >5 seconds — likely an issue

## Daily Monitoring

Recommended cron (daily 7am):
```bash
0 7 * * * /Users/philsagent/.openclaw/workspace/projects/site-health-monitor/health-check.sh
```

## Manual Quick Checks

```bash
# Single site SSL check
echo | openssl s_client -servername bluecanvas.ai -connect bluecanvas.ai:443 2>/dev/null | openssl x509 -noout -enddate

# Single site HTTP status
curl -s -o /dev/null -w "%{http_code}" https://bluecanvas.ai

# DNS check
dig +short bluecanvas.ai
# Expected: 75.2.70.75 (Webflow)

# CNAME for www
dig +short www.bluecanvas.ai CNAME
# Expected: proxy-ssl.webflow.com
```

## DNS Reference

All sites should resolve to:
- **A record:** `75.2.70.75` (Webflow)
- **CNAME www:** `proxy-ssl.webflow.com`

## Troubleshooting

| Issue | Likely Cause | Fix |
|-------|-------------|-----|
| HTTP 000 | DNS or timeout | Check DNS, try again |
| HTTP 404 | Page removed | Check Webflow dashboard |
| HTTP 301/302 | Redirect | Usually OK, check target |
| SSL error | Certificate issue | Check Webflow SSL settings |
| Slow response | Webflow CDN or heavy page | Check PageSpeed API |
| Missing SEO | Webflow page settings | Update in Webflow Designer |
