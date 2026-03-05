# 🛰️ Satellite Site Health Monitor

Automated health checks for the Blue Canvas satellite network.

## Sites Monitored
- bluecanvas.ai
- openclawconsultant.co.uk
- zapierconsultant.co.uk
- aiagentsetup.co.uk

## Checks Performed
| Check | Description |
|-------|-------------|
| HTTP Status | Is the site returning 200? |
| Response Time | How fast does it load? |
| SSL Certificate | Valid and days until expiry |
| Sitemap.xml | Exists and contains valid XML |
| Robots.txt | Exists |
| Meta Title | Page has a `<title>` tag |
| PageSpeed | Google PageSpeed mobile score |
| Google Indexing | Found via `site:domain` search |

## Usage

```bash
# Run health check
./health-check.sh

# View dashboard
open index.html
```

## Output
Results are saved to `health-data.json`. The dashboard (`index.html`) reads this file automatically.

## Daily Cron Setup

```bash
# Edit crontab
crontab -e

# Add daily check at 6am
0 6 * * * /Users/philsagent/.openclaw/workspace/projects/nightly-builds/2026-02-14/site-monitor/health-check.sh >> /tmp/health-check.log 2>&1
```

## Status Indicators
- 🟢 **Green** — All checks pass
- 🟡 **Amber** — Minor issues (slow response, missing robots.txt, etc.)
- 🔴 **Red** — Site down or SSL invalid
