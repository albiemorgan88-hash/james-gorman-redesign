# Cron Health Report — 2026-03-21 09:00 GMT

## Overview
Total crons: 24 | ✅ Healthy: 22 | ⚠️ Warning: 1 | ❌ Failed: 1 | 🔄 Stale: 0

## Full Status Table

| Cron Name | Schedule | Last Run | Status | Next Run | Health |
|---|---|---|---|---|---|
| **cron-watchdog** | Daily 09:00 | 2026-03-20 09:00 | ✅ OK | 2026-03-22 09:00 | ✅ Healthy |
| **ClawMart Sales Check** | Daily 10:00 | 2026-03-20 10:00 | ✅ OK | 2026-03-22 10:00 | ⚠️ Warning |
| **Moltbook Inbox Check** | Daily 12:00 | 2026-03-20 12:00 | ✅ OK | 2026-03-22 12:00 | ✅ Healthy |
| **moltbook-daily-engagement** | Daily 13:00 | 2026-03-20 13:00 | ✅ OK | 2026-03-22 13:00 | ✅ Healthy |
| **Google Ads Daily Optimisation** | Daily 14:00 | 2026-03-20 14:00 | ✅ OK | 2026-03-22 14:00 | ✅ Healthy |
| **AI Trend Scout (Afternoon)** | Daily 14:30 | 2026-03-20 14:30 | ✅ OK | 2026-03-22 14:30 | ✅ Healthy |
| **Google Ads Daily Report** | Daily 17:00 | 2026-03-20 17:00 | ✅ OK | 2026-03-22 17:00 | ✅ Healthy |
| **AI Trend Scout (Evening)** | Daily 21:00 | 2026-03-20 21:00 | ✅ OK | 2026-03-22 21:00 | ✅ Healthy |
| **Nightly Build** | Daily 22:00 | 2026-03-20 22:00 | ✅ OK | 2026-03-22 22:00 | ✅ Healthy |
| **Memory Distillation** | Daily 22:30 | 2026-03-20 22:30 | ✅ OK | 2026-03-22 22:30 | ✅ Healthy |
| **Morning Dashboard** | Daily 07:00 | 2026-03-21 07:00 | ✅ OK | 2026-03-22 07:00 | ✅ Healthy |
| **Security Scan & Fix** | Daily 07:05 | 2026-03-21 07:05 | ✅ OK | 2026-03-22 07:05 | ✅ Healthy |
| **AI Trend Scout** | Daily 08:00 | 2026-03-21 08:00 | ✅ OK | 2026-03-22 08:00 | ✅ Healthy |
| **api-key-health** | Daily 08:10 | 2026-03-21 08:10 | ✅ OK | 2026-03-22 08:10 | ✅ Healthy |
| **Weekly Money Scout** | Sun 09:00 | 2026-03-15 09:00 | ✅ OK | 2026-03-22 09:00 | ✅ Healthy |
| **Tender Tracker Weekly** | Mon 09:00 | 2026-03-16 09:00 | ✅ OK | 2026-03-23 09:00 | ✅ Healthy |
| **SEO: Monday Audit** | Mon 09:30 | 2026-03-16 09:30 | ✅ OK | 2026-03-23 09:30 | ✅ Healthy |
| **Apollo Lead Gen** | Mon/Wed/Fri 10:00 | 2026-03-20 10:00 | ✅ OK | 2026-03-22 10:00 | ✅ Healthy |
| **SEO: Tuesday Fix** | Tue 09:00 | 2026-03-17 09:00 | ✅ OK | 2026-03-23 09:00 | ✅ Healthy |
| **Local Lead Scraper** | Tue/Thu 10:00 | 2026-03-18 10:00 | ✅ OK | 2026-03-23 10:00 | ✅ Healthy |
| **SEO: Wednesday Attack** | Wed 09:00 | 2026-03-18 09:00 | ✅ OK | 2026-03-24 09:00 | ✅ Healthy |
| **SEO: Thursday Content** | Thu 09:00 | 2026-03-12 09:00 | ❌ TIMEOUT | 2026-03-26 09:00 | ❌ Failed |
| **SEO: Friday Monitor** | Fri 09:00 | 2026-03-20 09:00 | ✅ OK | 2026-03-27 09:00 | ✅ Healthy |
| **Ardmore Friday Draw** | Fri 19:00 | 2026-03-20 19:00 | ✅ OK | 2026-03-27 19:00 | ✅ Healthy |

## Issues Found

### ❌ CRITICAL: SEO Thursday Content Job Failed
**Job:** `d84acb29-73e3-45d8-b6c0-05c342db9429` (SEO: Thursday Content)  
**Issue:** Last run timed out on 2026-03-12 after 5 minutes  
**Impact:** Content publishing pipeline stalled for 9 days  
**Status:** Job remains enabled but hasn't run since timeout  

**Action Required:** Manual intervention needed — job may be stuck or task too complex for timeout limit.

### ⚠️ WARNING: ClawMart Sales Check Delivery
**Job:** `d65c02c4-d206-4250-adc3-4796ffe98f0f` (ClawMart Sales Check)  
**Issue:** Last delivery failed (not-delivered status)  
**Impact:** Sales notifications not reaching PJ  
**Status:** Job executing OK but delivery system failing  

## Summary
- **22 healthy jobs** running on schedule
- **1 critical failure** requiring immediate attention (SEO Content)
- **1 delivery warning** for ClawMart notifications
- **0 stale jobs** — all crons have run within expected timeframes
- **Overall system health: 91.7%** (22/24 fully operational)

Next action: Investigate SEO Thursday Content job timeout and fix delivery for ClawMart checker.