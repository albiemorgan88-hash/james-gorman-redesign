#!/bin/bash
# Workspace backup — commits and pushes all changes every 2 hours
cd /Users/philsagent/.openclaw/workspace

# Stage all changes
git add -A 2>/dev/null

# Only commit if there are changes
if ! git diff --cached --quiet 2>/dev/null; then
  git commit -m "Auto-backup — $(date '+%Y-%m-%d %H:%M:%S %Z')" 2>/dev/null
  git push origin main 2>/dev/null
  echo "Backup pushed at $(date)"
else
  echo "No changes to backup at $(date)"
fi
