#!/bin/bash
# AI Trend Scout — Daily Cron Script
# Schedule: 0 8 * * * (8am UK time daily)
# 
# This is a task description for OpenClaw to execute as a cron/scheduled task.
# It uses the agent's web_search and web_fetch tools, so it should be run
# as an OpenClaw task, not a raw bash script.
#
# Usage: Add as OpenClaw cron or run manually:
#   openclaw task run "Run the AI Trend Scout skill: scan all sources for new AI tools,
#   platforms, and trends from the last 24 hours. For each find, check domain availability
#   for [name]consultant.co.uk, [name]agency.co.uk, [name]uk.com patterns. Score each
#   opportunity 1-10 per the ai-trend-scout skill criteria. Report findings in the
#   standard format. Alert Phil for anything 8+. Auto-buy domains under \$15 for 9+ scores.
#   Reference skills/ai-trend-scout/SKILL.md for full methodology."
#
# Cron entry (for OpenClaw scheduled tasks):
#   Schedule: Daily at 08:00 Europe/London
#   Skill: ai-trend-scout
#   Task: |
#     Run AI Trend Scout daily scan:
#     1. Search ProductHunt for new AI launches (last 24h)
#     2. Search Hacker News for trending AI posts (last 24h)
#     3. Search YC launches for new AI startups
#     4. Search TechCrunch for AI news (last 24h)
#     5. Search X/Twitter for viral AI tools (last 24h)
#     6. Check GitHub trending repos (daily)
#     7. Search Reddit r/artificial, r/machinelearning, r/singularity (last week)
#     8. Check OpenAI, Anthropic, Google blogs for announcements
#     9. For each interesting find:
#        a. Check domain availability (whois) for key patterns
#        b. Assess SEO opportunity
#        c. Score 1-10 per skill criteria
#     10. Format output per skill template
#     11. Alert Phil immediately for 8+ scores
#     12. For 9+ scores: auto-buy domain if under $15, start landing page

echo "AI Trend Scout — this script is a task descriptor for OpenClaw."
echo "Run via: openclaw task run with the ai-trend-scout skill."
echo ""
echo "Manual trigger queries for testing:"
echo ""
echo "ProductHunt: web_search 'site:producthunt.com AI tool launch' freshness:pd"
echo "Hacker News: web_search 'site:news.ycombinator.com AI' freshness:pd"
echo "TechCrunch:  web_search 'site:techcrunch.com AI startup launch' freshness:pd"
echo "GitHub:      web_fetch 'https://github.com/trending?since=daily'"
echo "Reddit:      web_search 'site:reddit.com new AI tool 2026' freshness:pw"
