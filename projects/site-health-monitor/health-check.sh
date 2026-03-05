#!/bin/bash
# Site Health Monitor — Blue Canvas
# Pure bash + curl. No dependencies.
# Exit codes: 0 = all green, 1 = warnings, 2 = critical failures

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
DATE=$(date +%Y-%m-%d)
REPORT_DIR="${SCRIPT_DIR}/reports"
REPORT="${REPORT_DIR}/report-${DATE}.md"
mkdir -p "$REPORT_DIR"

SITES=("bluecanvas.ai" "openclawconsultant.co.uk" "zapierconsultant.co.uk" "aiagentsetup.co.uk")
EXIT_CODE=0

# Arrays for summary
declare -a SUM_STATUS SUM_SSL SUM_SPEED SUM_SEO
declare -a DETAILS

check_site() {
  local site="$1"
  local url="https://${site}"
  local detail=""
  local status_icon="✅" ssl_icon="✅" speed_icon="✅" seo_icon="✅"
  local ssl_summary="" speed_summary=""

  # HTTP status + response time
  local http_code response_time
  http_code=$(curl -s -o /dev/null -w "%{http_code}" -L --connect-timeout 10 --max-time 15 "$url" 2>/dev/null || echo "000")
  response_time=$(curl -s -o /dev/null -w "%{time_total}" -L --connect-timeout 10 --max-time 15 "$url" 2>/dev/null || echo "0")
  local ms=$(echo "$response_time" | awk '{printf "%d", $1 * 1000}')
  speed_summary="${ms}ms"

  detail+="- HTTP: ${http_code}"
  if [[ "$http_code" == "200" ]]; then
    detail+=" OK\n"
  else
    detail+=" ❌ FAILED\n"
    status_icon="❌"; EXIT_CODE=2
  fi

  detail+="- Response: ${ms}ms"
  if (( ms > 3000 )); then
    detail+=" ⚠️ Slow\n"; speed_icon="⚠️"; [[ $EXIT_CODE -lt 1 ]] && EXIT_CODE=1
  elif (( ms > 5000 )); then
    detail+=" ❌ Very slow\n"; speed_icon="❌"; EXIT_CODE=2
  else
    detail+="\n"
  fi

  # SSL check
  local ssl_info ssl_expiry ssl_days
  ssl_expiry=$(echo | openssl s_client -servername "$site" -connect "${site}:443" 2>/dev/null | openssl x509 -noout -enddate 2>/dev/null | cut -d= -f2 || echo "")
  if [[ -n "$ssl_expiry" ]]; then
    local expiry_epoch=$(date -j -f "%b %d %T %Y %Z" "$ssl_expiry" +%s 2>/dev/null || date -j -f "%b  %d %T %Y %Z" "$ssl_expiry" +%s 2>/dev/null || echo "0")
    local now_epoch=$(date +%s)
    ssl_days=$(( (expiry_epoch - now_epoch) / 86400 ))
    local expiry_date=$(date -j -f "%b %d %T %Y %Z" "$ssl_expiry" +%Y-%m-%d 2>/dev/null || date -j -f "%b  %d %T %Y %Z" "$ssl_expiry" +%Y-%m-%d 2>/dev/null || echo "unknown")
    detail+="- SSL: Valid, expires ${expiry_date} (${ssl_days}d)\n"
    ssl_summary="${ssl_days}d"
    if (( ssl_days < 14 )); then
      ssl_icon="❌"; EXIT_CODE=2
    elif (( ssl_days < 30 )); then
      ssl_icon="⚠️"; [[ $EXIT_CODE -lt 1 ]] && EXIT_CODE=1
    fi
  else
    detail+="- SSL: ❌ Could not retrieve certificate\n"
    ssl_icon="❌"; ssl_summary="ERR"; EXIT_CODE=2
  fi

  # Sitemap
  local sitemap_code=$(curl -s -o /dev/null -w "%{http_code}" -L --max-time 10 "${url}/sitemap.xml" 2>/dev/null || echo "000")
  detail+="- Sitemap: ${sitemap_code}"
  if [[ "$sitemap_code" == "200" ]]; then detail+=" ✅\n"; else detail+=" ⚠️\n"; fi

  # Robots.txt
  local robots_code=$(curl -s -o /dev/null -w "%{http_code}" -L --max-time 10 "${url}/robots.txt" 2>/dev/null || echo "000")
  detail+="- Robots.txt: ${robots_code}"
  if [[ "$robots_code" == "200" ]]; then detail+=" ✅\n"; else detail+=" ⚠️\n"; fi

  # SEO checks
  local tmpfile=$(mktemp)
  curl -s -L --max-time 15 "$url" > "$tmpfile" 2>/dev/null || true
  local seo_issues=""

  if grep -qo '<title' "$tmpfile"; then
    detail+="- Title tag: ✅ Present\n"
  else
    detail+="- Title tag: ❌ Missing\n"; seo_issues+="title "
  fi

  if grep -qo 'name="description"' "$tmpfile"; then
    detail+="- Meta description: ✅ Present\n"
  else
    detail+="- Meta description: ❌ Missing\n"; seo_issues+="desc "
  fi

  if grep -qo '<h1' "$tmpfile"; then
    detail+="- H1: ✅ Present\n"
  else
    detail+="- H1: ❌ Missing\n"; seo_issues+="h1 "
  fi
  rm -f "$tmpfile"

  if [[ -n "$seo_issues" ]]; then
    seo_icon="❌"; EXIT_CODE=2
  fi

  # Store results
  SUM_STATUS+=("$status_icon")
  SUM_SSL+=("$ssl_icon $ssl_summary")
  SUM_SPEED+=("$speed_icon $speed_summary")
  SUM_SEO+=("$seo_icon")
  DETAILS+=("### ${site}\n${detail}")
}

# Run checks
for site in "${SITES[@]}"; do
  check_site "$site"
done

# Write report
{
  echo "# Site Health Report — ${DATE}"
  echo ""
  echo "## Summary"
  echo "| Site | Status | SSL | Speed | SEO |"
  echo "|------|--------|-----|-------|-----|"
  for i in "${!SITES[@]}"; do
    echo "| ${SITES[$i]} | ${SUM_STATUS[$i]} | ${SUM_SSL[$i]} | ${SUM_SPEED[$i]} | ${SUM_SEO[$i]} |"
  done
  echo ""
  echo "## Details"
  echo ""
  for i in "${!DETAILS[@]}"; do
    echo -e "${DETAILS[$i]}"
  done
} > "$REPORT"

# Also symlink latest
ln -sf "$REPORT" "${REPORT_DIR}/latest.md"
cp "$REPORT" "${SCRIPT_DIR}/report-${DATE}.md"

echo "Report saved: ${REPORT}"
exit $EXIT_CODE
