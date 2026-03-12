# James Gorman SEO Cron Setup

## Status
A live Friday James report cron was **not created automatically in this pass**.

Reason:
- The OpenClaw cron CLI syntax is now clear enough to create it safely.
- However, delivery destination/routing should still be chosen intentionally by Phil (for example `last`, `telegram`, a specific chat ID, or another session target).
- Rather than create the right schedule with the wrong delivery target, this file includes the exact ready-to-run command.

## Proposed schedule
- **Weekday drafting pass:** 09:30 Europe/London (Mon-Fri)
- **Friday report draft:** **14:00 Europe/London**

## Friday report workflow
The Friday pass should:
1. Read `README.md`, `backlog.md`, `seo-changelog.md`, `weekly-report-template.md`, and recent James deliverables.
2. Summarise activity completed/drafted during the week.
3. Pull Ahrefs metrics if accessible:
   - Domain Rating
   - referring domains
   - backlinks
   - organic keywords
   - organic traffic estimate
4. Note ranking movement / visibility changes for priority terms where available.
5. Log technical fixes completed vs still draft-only.
6. Log content drafted this week.
7. Capture blockers, next actions, and any early uplift.
8. Update `seo-changelog.md` and `backlog.md`.
9. Leave everything as **draft only**.

## Recommended message payloads

### 1) Weekday SEO drafting pass
```text
Run the James Gorman SEO drafting pass for James Gorman Property. Follow the james-gorman-seo skill and the workflow in /Users/philsagent/.openclaw/workspace/projects/clients/james-gorman/run-seo-pass.md. Review README.md, backlog.md, and seo-changelog.md first. Draft only. Do not publish or make public/external changes. Update seo-changelog.md and backlog.md before finishing.
```

### 2) Friday report draft
```text
Run the Friday James Gorman SEO report prep for James Gorman Property. Follow the james-gorman-seo skill and the workflow in /Users/philsagent/.openclaw/workspace/projects/clients/james-gorman/run-seo-pass.md. Review README.md, backlog.md, seo-changelog.md, weekly-report-template.md, and recent James deliverables first. Prepare the weekly draft report with: activity changelog, Ahrefs metrics, ranking/visibility movement, technical fixes completed, content drafted, next actions, blockers, and any early uplift. Update seo-changelog.md and backlog.md before finishing. Draft only. Do not publish or make public/external changes.
```

## Exact ready-to-run OpenClaw commands

### Weekday drafting pass
```bash
openclaw cron add \
  --name "james-gorman-seo-weekday" \
  --description "Weekday draft-only SEO pass for James Gorman Property" \
  --agent main \
  --session isolated \
  --cron "30 9 * * 1-5" \
  --tz "Europe/London" \
  --message "Run the James Gorman SEO drafting pass for James Gorman Property. Follow the james-gorman-seo skill and the workflow in /Users/philsagent/.openclaw/workspace/projects/clients/james-gorman/run-seo-pass.md. Review README.md, backlog.md, and seo-changelog.md first. Draft only. Do not publish or make public/external changes. Update seo-changelog.md and backlog.md before finishing." \
  --announce
```

### Friday 2pm report prep
```bash
openclaw cron add \
  --name "james-gorman-seo-friday-report" \
  --description "Friday 2pm draft-only James Gorman SEO report prep" \
  --agent main \
  --session isolated \
  --cron "0 14 * * 5" \
  --tz "Europe/London" \
  --message "Run the Friday James Gorman SEO report prep for James Gorman Property. Follow the james-gorman-seo skill and the workflow in /Users/philsagent/.openclaw/workspace/projects/clients/james-gorman/run-seo-pass.md. Review README.md, backlog.md, seo-changelog.md, weekly-report-template.md, and recent James deliverables first. Prepare the weekly draft report with: activity changelog, Ahrefs metrics, ranking/visibility movement, technical fixes completed, content drafted, next actions, blockers, and any early uplift. Update seo-changelog.md and backlog.md before finishing. Draft only. Do not publish or make public/external changes." \
  --announce
```

## If Phil wants delivery pinned to a specific destination
Examples:

```bash
# deliver to a specific Telegram chat / user
openclaw cron add ... --channel telegram --to "5282559643"

# deliver to the last active channel instead
openclaw cron add ... --channel last
```

## Verification commands
```bash
openclaw cron list
openclaw cron status
openclaw cron run --name james-gorman-seo-friday-report
```
