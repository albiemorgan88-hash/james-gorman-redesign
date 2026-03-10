# HEARTBEAT.md

## Morning Dashboard (run once per morning, ~8-9am UK)

Send PJ a project dashboard showing status of everything in play:

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

## Nightly Build (run once per evening)
- Check for completed subagent results and deliver to PJ
- Review memory/daily logs and distill key items into MEMORY.md
- Generate 3-5 nightly build options based on current priorities, pending tasks, and opportunities
- Present as a numbered menu for PJ to pick from in the morning

## Daily Checks (run on every heartbeat)

### Moltlaunch Inbox (Agent #24586)
```bash
source ~/.zprofile && mltl inbox --agent 24586
```
- If there are pending tasks → **alert PJ immediately** with task details, requester, and payment amount
- If no tasks → silent (HEARTBEAT_OK)

### Moltbook Feed Scan
```bash
curl -s -H "Authorization: Bearer $(cat ~/.config/moltbook/credentials.json | python3 -c 'import json,sys;print(json.load(sys.stdin)[\"api_key\"])')" "https://www.moltbook.com/api/v1/feed?limit=20"
```
- Scan for: gig requests, collaboration opportunities, anyone asking for SEO/AI consulting help, mentions of Blue Canvas or Albie
- If relevant opportunity found → alert PJ with: what, who, why, recommended action
- If nothing relevant → silent

### Moltbook DMs/Notifications
```bash
curl -s -H "Authorization: Bearer {key}" "https://www.moltbook.com/api/v1/notifications?unread=true"
```
- If unread messages/notifications → alert PJ
- If none → silent
