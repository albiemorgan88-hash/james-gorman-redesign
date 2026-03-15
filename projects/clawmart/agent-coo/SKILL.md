---
name: agent-coo
version: 1.0.0
description: The complete operating system for running your AI agent like a business. Memory management, cron orchestration, subagent delegation, daily dashboards, client management, and proactive operations — all battle-tested in production.
author: Blue Canvas AI
price: 79
tags: [operations, orchestration, coo, management, memory, cron, productivity, business]
---

# Agent COO — Run Your Agent Like a Business

> Your agent isn't a chatbot. It's your COO. This skill turns it into one.

## What This Skill Does

Transforms your OpenClaw agent from a reactive assistant into a proactive operations chief. Built from 2+ weeks of intensive production use running an AI consultancy, managing clients, automating crons, and orchestrating subagents.

## The System

### 1. Memory Architecture
Your agent forgets everything between sessions. This fixes that.

- **Daily logs** (`memory/YYYY-MM-DD.md`) — raw record of everything that happened
- **Long-term memory** (`MEMORY.md`) — curated knowledge, decisions, lessons learned
- **Periodic distillation** — cron that reviews daily logs and updates long-term memory
- **Session startup** — reads today + yesterday + MEMORY.md before every response

**Why it matters:** Your agent remembers client names, project decisions, pricing, mistakes, and lessons. Continuity without context windows.

### 2. Cron Orchestration
25 production-tested cron patterns for autonomous operations:

- **Morning dashboard** — wake up to a status report (sites, ads, SEO, leads)
- **Security scan** — daily audit of your host
- **SEO phases** — Monday audit, Tuesday fix, Wednesday attack, Thursday content, Friday monitor
- **Lead generation** — automated prospect research on schedule
- **Client reporting** — automated weekly report generation
- **Memory maintenance** — nightly distillation of daily logs
- **Platform engagement** — scheduled content and community interaction

Includes stagger patterns to avoid API rate limits when running 20+ crons.

### 3. Subagent Delegation
Your agent orchestrates, it doesn't execute. Patterns for:

- Spawning parallel subagents for independent tasks
- Monitoring subagent completion and synthesising results
- Handling subagent failures gracefully
- Knowing when to subagent vs do directly (stateful browser work = direct)

### 4. Client Management
Templates and workflows for:

- Client onboarding (engagement letters, invoicing)
- Weekly reporting (branded PDFs, changelogs, metrics)
- Communication templates (professional but warm)
- Backlog tracking per client
- Upsell identification and timing

### 5. Proactive Operations
Your agent doesn't wait to be asked:

- Checks email, calendar, and notifications on heartbeats
- Flags urgent items proactively
- Does background work (git commits, documentation, memory updates)
- Monitors site health, ad performance, and SEO metrics
- Knows when to reach out vs stay quiet (time of day, urgency)

## Files Included

```
SOUL.md           — Agent personality and operating principles
AGENTS.md         — Workspace rules and conventions  
MEMORY.md         — Long-term memory template with structure
USER.md           — User context template
HEARTBEAT.md      — Heartbeat check configuration
TOOLS.md          — Infrastructure and credentials reference
memory/           — Daily log templates
reports/          — Report templates (morning dashboard, client, SEO)
cron-templates/   — 25 production cron configurations
templates/        — Client comms, engagement letters, invoices
```

## Setup

1. Copy the files to your OpenClaw workspace root
2. Edit `SOUL.md` with your agent's personality
3. Edit `USER.md` with your details
4. Import the cron templates you want
5. Start a conversation — your agent will read the files and operate accordingly

## Key Principles (Learned the Hard Way)

- **Unwritten = forgotten.** If you don't write it to a file, it doesn't survive the session.
- **Orchestrate, don't execute.** Spawn subagents for tasks >5 seconds.
- **Stagger crons.** Two crons at the same time = rate limit. Space them 15-30 mins apart.
- **Subagents can't access credentials** that aren't in environment variables. Pass them explicitly or do credential-dependent work directly.
- **Daily memory files are raw. MEMORY.md is curated.** Review and distill regularly.
- **Ask before sending.** Your agent should never email or post publicly without approval.

## Who This Is For

- Solo founders who want an AI operations partner
- Freelancers scaling with AI agents
- Anyone running OpenClaw who wants structure instead of chaos
- Operators who've tried the "just chat with it" approach and hit the wall

## Real Production Stats

This system runs:
- 23 active crons across SEO, lead gen, security, reporting, and engagement
- 1 paying client with fully autonomous SEO delivery
- Automated weekly draws for a sports club (Stripe + Supabase + cron)
- Daily Moltbook engagement and MoltLaunch marketplace presence
- Morning dashboards, nightly builds, memory distillation
