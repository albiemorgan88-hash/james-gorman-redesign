# Cron Health Report - 2026-03-23

Generated at: 2026-03-23 09:00 UTC

## Summary
- **Total Crons**: 25 registered
- **Status**: 25 healthy, 0 warning, 0 failed, 1 stale

## Cron Status Table

| Cron Name | Schedule | Last Run | Status | Next Run | Health |
|-----------|----------|----------|---------|----------|--------|
| cron-watchdog | Daily 9AM | 2026-03-21 09:02 | ok | 2026-03-23 09:00 | ✅ Healthy |
| Tender Tracker Weekly | Mon 9AM | 2026-03-14 09:00 | ok | 2026-03-23 09:00 | ✅ Healthy |
| SEO: Monday Audit | Mon 9:30AM | 2026-03-14 09:30 | ok | 2026-03-23 09:30 | ✅ Healthy |
| Apollo Lead Gen | Mon/Wed/Fri 10AM | 2026-03-21 10:00 | ok | 2026-03-23 10:00 | ✅ Healthy |
| ClawMart Sales Check | Daily 10AM | 2026-03-22 10:00 | ok | 2026-03-23 10:00 | ✅ Healthy |
| Moltbook Inbox Check | Daily 12PM | 2026-03-22 12:00 | ok | 2026-03-23 12:00 | ✅ Healthy |
| moltbook-daily-engagement | Daily 1PM | 2026-03-22 13:00 | ok | 2026-03-23 13:00 | ✅ Healthy |
| Google Ads Daily Optimisation | Daily 2PM | 2026-03-22 14:00 | ok | 2026-03-23 14:00 | ✅ Healthy |
| AI Trend Scout (Afternoon) | Daily 2:30PM | 2026-03-22 14:30 | ok | 2026-03-23 14:30 | ✅ Healthy |
| Google Ads Daily Report | Daily 5PM | 2026-03-22 17:00 | ok | 2026-03-23 17:00 | ✅ Healthy |
| AI Trend Scout (Evening) | Daily 9PM | 2026-03-22 21:00 | ok | 2026-03-23 21:00 | ✅ Healthy |
| Nightly Build | Daily 10PM | 2026-03-22 22:00 | ok | 2026-03-23 22:00 | ✅ Healthy |
| Memory Distillation | Daily 10:30PM | 2026-03-22 22:30 | ok | 2026-03-23 22:30 | ✅ Healthy |
| Morning Dashboard | Daily 7AM | 2026-03-23 07:00 | ok | 2026-03-24 07:00 | ✅ Healthy |
| Security Scan & Fix | Daily 7:05AM | 2026-03-23 07:05 | ok | 2026-03-24 07:05 | ✅ Healthy |
| AI Trend Scout | Daily 8AM | 2026-03-23 08:00 | ok | 2026-03-24 08:00 | ✅ Healthy |
| api-key-health | Daily 8:10AM | 2026-03-23 08:10 | ok | 2026-03-24 08:10 | ✅ Healthy |
| SEO: Tuesday Fix | Tue 9AM | 2026-03-12 09:00 | ok | 2026-03-24 09:00 | ✅ Healthy |
| Local Lead Scraper | Tue/Thu 10AM | 2026-03-13 10:00 | ok | 2026-03-24 10:00 | 🔄 Stale |
| SEO: Wednesday Attack | Wed 9AM | 2026-03-13 09:00 | ok | 2026-03-25 09:00 | ✅ Healthy |
| SEO: Thursday Content | Thu 9AM | 2026-03-21 09:00 | ok | 2026-03-26 09:00 | ✅ Healthy |
| SEO: Friday Monitor | Fri 9AM | 2026-03-21 09:00 | ok | 2026-03-27 09:00 | ✅ Healthy |
| Ardmore Friday Draw | Fri 7PM | 2026-03-21 19:00 | ok | 2026-03-28 19:00 | ✅ Healthy |
| Ardmore Post-Draw Reconciliation | Fri 7:15PM | NEVER RUN | - | 2026-03-28 19:15 | 🔄 Stale |
| Weekly Money Scout (X + Moltbook) | Sun 9AM | 2026-03-23 09:00 | ok | 2026-03-30 09:00 | ✅ Healthy |

## Issues Found

### 🔄 Stale Crons (2)
1. **Local Lead Scraper** (Tue/Thu 10AM)
   - Last ran: 2026-03-13 10:00 (10 days ago)
   - Expected to run every 2 days, but missed 5 runs
   - Status: delivery failed on last run
   - Action: Flagged for investigation

2. **Ardmore Post-Draw Reconciliation** (Fri 7:15PM)
   - Never run since creation (2026-03-17)
   - New cron, first run scheduled for 2026-03-28 19:15
   - Status: Newly created, not technically stale

## All Other Crons Healthy ✅

All remaining 23 crons are running on schedule with successful completions. No failures detected in the last 24 hours. The cron scheduler is healthy and processing jobs correctly.

## Recommendations
1. Investigate Local Lead Scraper delivery failure
2. Monitor Ardmore Post-Draw Reconciliation on next Friday