#!/bin/bash
# Showcase Generator — reads firms list, generates HTML, pushes to GitHub Pages
# Usage: ./generate.sh /tmp/showcase-firms.txt

FIRMS_FILE="${1:-/tmp/showcase-firms.txt}"
TEMPLATE_DIR="$(dirname "$0")"
LOG_FILE="$HOME/.openclaw/workspace/reports/hunter/2026-03-25-derry-showcase-map.md"
GITHUB_USER="albiemorgan88-hash"

mkdir -p "$(dirname "$LOG_FILE")"
echo "# Derry Business Showcases — March 25, 2026" > "$LOG_FILE"
echo "" >> "$LOG_FILE"
echo "| Company | Showcase URL |" >> "$LOG_FILE"
echo "|---|---|" >> "$LOG_FILE"

COUNT=0
TOTAL=$(wc -l < "$FIRMS_FILE")

while IFS='|' read -r COMPANY WEBSITE REPO_NAME; do
    COUNT=$((COUNT + 1))
    echo "[$COUNT/$TOTAL] Building: $COMPANY → $REPO_NAME"
    
    # Create temp dir
    TMPDIR=$(mktemp -d)
    cd "$TMPDIR"
    
    # Generate the showcase HTML from template
    python3 "$HOME/.openclaw/workspace/scripts/showcase-generator/build_showcase.py" "$COMPANY" "$WEBSITE" "$REPO_NAME" > index.html
    
    if [ ! -s index.html ]; then
        echo "  ⚠️ SKIP: Empty HTML for $COMPANY"
        rm -rf "$TMPDIR"
        continue
    fi
    
    # Init git and push
    git init -q
    git checkout -b main 2>/dev/null
    git add index.html
    git commit -q -m "Showcase for $COMPANY"
    
    # Create repo if needed (ignore error if exists)
    gh repo create "$GITHUB_USER/$REPO_NAME" --public --confirm 2>/dev/null || true
    
    git remote add origin "https://github.com/$GITHUB_USER/$REPO_NAME.git" 2>/dev/null
    git push -f origin main 2>/dev/null
    
    # Enable GitHub Pages
    gh api -X PUT "repos/$GITHUB_USER/$REPO_NAME/pages" \
        -f source.branch=main -f source.path="/" 2>/dev/null || \
    gh api -X POST "repos/$GITHUB_USER/$REPO_NAME/pages" \
        -f source.branch=main -f source.path="/" 2>/dev/null || true
    
    URL="https://$GITHUB_USER.github.io/$REPO_NAME/"
    echo "  ✅ $URL"
    echo "| $COMPANY | \`$URL\` |" >> "$LOG_FILE"
    
    # Cleanup
    cd /
    rm -rf "$TMPDIR"
    
    # Small delay to avoid GitHub rate limits
    sleep 1
    
done < "$FIRMS_FILE"

echo ""
echo "=== DONE: $COUNT showcases built ==="
echo "Map saved to: $LOG_FILE"
