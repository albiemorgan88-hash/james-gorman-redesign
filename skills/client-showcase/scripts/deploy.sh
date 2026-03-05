#!/bin/bash
# Deploy a showcase HTML file to GitHub Pages
# Usage: deploy.sh <showcase.html> <slug> [gh-user]
#
# Example: deploy.sh showcase.html ssc albiemorgan88-hash
# Result:  https://albiemorgan88-hash.github.io/showcase-ssc/

set -euo pipefail

HTML_FILE="${1:?Usage: deploy.sh <showcase.html> <slug> [gh-user]}"
SLUG="${2:?Usage: deploy.sh <showcase.html> <slug> [gh-user]}"
GH_USER="${3:-albiemorgan88-hash}"
REPO_NAME="showcase-${SLUG}"

if [ ! -f "$HTML_FILE" ]; then
  echo "❌ File not found: $HTML_FILE"
  exit 1
fi

# Check gh auth
if ! gh auth status &>/dev/null; then
  echo "❌ Not authenticated with GitHub. Run: gh auth login"
  exit 1
fi

# Create temp dir, copy file, init repo
TMPDIR=$(mktemp -d)
cp "$HTML_FILE" "$TMPDIR/index.html"
cd "$TMPDIR"

git init
git add .
git commit -m "${SLUG} AI showcase"

# Create and push
gh repo create "$REPO_NAME" --public --source=. --push 2>/dev/null || {
  echo "⚠️ Repo may already exist. Pushing update..."
  git remote add origin "https://github.com/${GH_USER}/${REPO_NAME}.git" 2>/dev/null || true
  git push -f origin main
}

# Enable Pages
gh api "repos/${GH_USER}/${REPO_NAME}/pages" \
  -X POST \
  -f "build_type=legacy" \
  -f "source[branch]=main" \
  -f "source[path]=/" 2>/dev/null || true

echo ""
echo "✅ Deployed!"
echo "👉 https://${GH_USER}.github.io/${REPO_NAME}/"
echo ""

# Cleanup
rm -rf "$TMPDIR"
