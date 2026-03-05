#!/bin/bash
# Security Check Script for OpenClaw Mac Mini
# Run manually or via cron to get a security summary

set -euo pipefail
DATE=$(date '+%Y-%m-%d %H:%M:%S')

echo "========================================"
echo "  Security Check — $DATE"
echo "========================================"
echo ""

# 1. SSH Status
echo "## SSH Status"
if ps aux | grep -v grep | grep -q sshd; then
    echo "⚠️  SSH (sshd) is RUNNING"
    echo "Checking for failed login attempts (last 100 auth log entries):"
    log show --predicate 'process == "sshd" AND messageType == 16' --last 1h 2>/dev/null | tail -20 || echo "  No recent failures found"
else
    echo "✅ SSH (sshd) is NOT running"
fi
echo ""

# 2. Open Ports
echo "## Open Ports (Listening)"
lsof -i -P -n 2>/dev/null | grep LISTEN | awk '{printf "  %-20s %-10s %s\n", $1, $2, $9}' | sort -u || echo "  Could not check"
echo ""

# 3. Unexpected Processes (high CPU/memory)
echo "## Top Processes (by CPU)"
ps aux --sort=-%cpu 2>/dev/null | head -6 || ps aux | sort -nrk 3 | head -6
echo ""

# 4. Disk Usage
echo "## Disk Usage"
df -h / | tail -1 | awk '{printf "  Used: %s / %s (%s)\n", $3, $2, $5}'
echo ""

# 5. OpenClaw Gateway
echo "## OpenClaw Gateway"
if pgrep -f "openclaw" > /dev/null 2>&1; then
    echo "✅ OpenClaw process detected"
else
    echo "⚠️  No OpenClaw process found"
fi
# Also check via CLI
openclaw gateway status 2>&1 | head -5 || true
echo ""

# 6. SearXNG
echo "## SearXNG"
if curl -s -o /dev/null -w "%{http_code}" http://localhost:8888/healthz 2>/dev/null | grep -q "200"; then
    echo "✅ SearXNG responding on :8888"
elif lsof -i :8888 -P -n 2>/dev/null | grep -q LISTEN; then
    echo "✅ Something listening on :8888 (likely SearXNG)"
else
    echo "⚠️  Nothing listening on :8888"
fi
echo ""

# 7. Credential File Permissions
echo "## Credential File Permissions"
CRED_FILES=(
    "$HOME/.config/google-analytics-tokens.json"
    "$HOME/.config/cdp/credentials.json"
    "$HOME/.config/moltbook/credentials.json"
)
for f in "${CRED_FILES[@]}"; do
    if [ -f "$f" ]; then
        perms=$(stat -f "%Lp" "$f" 2>/dev/null || stat -c "%a" "$f" 2>/dev/null)
        if [ "$perms" = "600" ]; then
            echo "  ✅ $f ($perms)"
        else
            echo "  ⚠️  $f has permissions $perms (should be 600)"
        fi
    else
        echo "  ℹ️  $f not found"
    fi
done
echo ""

# 8. Tailscale Status
echo "## Tailscale"
if command -v tailscale &>/dev/null; then
    tailscale status 2>&1 | head -3 || echo "  Installed but not running"
else
    echo "  Not installed"
fi
echo ""

echo "========================================"
echo "  Check complete."
echo "========================================"
