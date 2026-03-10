#!/bin/bash
# Google Ads Daily Optimisation — Blue Canvas
# Run: crontab -e → 0 8 * * * /Users/philsagent/.openclaw/workspace/scripts/google-ads-daily.sh
# ⚠️ NEVER touches Storage Centre NI account

set -euo pipefail

# Source credentials
source ~/.zprofile

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
LOG_DIR="$HOME/.openclaw/workspace/reports/google-ads"
DATE=$(date +%Y-%m-%d)
LOG_FILE="$LOG_DIR/daily-${DATE}.md"

mkdir -p "$LOG_DIR"

echo "[$(date)] Starting Google Ads daily optimisation..."

# Run the Python script
python3 "$SCRIPT_DIR/google_ads_daily.py" 2>&1 | tee "$LOG_DIR/run-${DATE}.log"

if [ $? -eq 0 ]; then
    echo "[$(date)] ✅ Report saved to $LOG_FILE"
else
    echo "[$(date)] ❌ Script failed — check $LOG_DIR/run-${DATE}.log"
    exit 1
fi
