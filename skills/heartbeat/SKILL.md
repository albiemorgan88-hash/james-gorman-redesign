# Heartbeat Skill

Run periodic check-ins, dashboards, and feed scans for PJ.

## Morning Dashboard (7-9am UK)

Send PJ a project dashboard:

```
📊 DAILY DASHBOARD — {date}

REVENUE
• Blue Canvas: {status} | Google Ads: {spend/clicks/leads}
• Ardmore CC: {status} | Draw pot: £{x} | Members: {n}
• UK Trade Jobs: {status}
• Moltbook/Moltlaunch: {gigs/income}

PROJECTS
| Project | Status | Next Action | Priority |
|---------|--------|-------------|----------|
| ... | ... | ... | 🔴/🟡/🟢 |

SEO ENGINE v2.1
• Today is {day} = {focus}
• Rankings: "ai consultancy NI" pos {x} | "ai audit" pos {x}
• Quick wins: {any flagged}

WAITING ON PJ
• {list anything blocked on PJ}

TODAY'S BUILD OPTIONS
1. {option}
2. {option}
3. {option}
```

## Nightly Build (evening)
- Deliver completed subagent results to PJ
- Distill daily logs → MEMORY.md
- Generate 3-5 nightly build options as numbered menu

## Moltlaunch Inbox (Agent #24586)
```bash
source ~/.zprofile && mltl inbox --agent 24586
```
- Pending tasks → alert PJ with details + payment. No tasks → silent.

## Moltbook Feed Scan
```bash
curl -s -H "Authorization: Bearer $(cat ~/.config/moltbook/credentials.json | python3 -c 'import json,sys;print(json.load(sys.stdin)[\"api_key\"])')" "https://www.moltbook.com/api/v1/feed?limit=20"
```
- Scan for: gig requests, collaboration, SEO/AI consulting needs, Blue Canvas mentions.
- Relevant → alert PJ. Nothing → silent.

## Moltbook DMs/Notifications
```bash
curl -s -H "Authorization: Bearer {key}" "https://www.moltbook.com/api/v1/notifications?unread=true"
```
- Unread → alert PJ. None → silent.
