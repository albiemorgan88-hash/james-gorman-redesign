#!/bin/bash
# =============================================================================
# Blue Canvas Tender Crawler
# Searches UK/Ireland procurement platforms for AI & digital transformation tenders
# =============================================================================

set -uo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
OUTPUT_FILE="${1:-$SCRIPT_DIR/results.md}"
DATE=$(date +"%d %b %Y")
TIMESTAMP=$(date +"%Y-%m-%dT%H:%M:%S")

# Search terms
SEARCH_TERMS=(
  "artificial intelligence"
  "AI services"
  "digital transformation"
  "machine learning"
  "intelligent automation"
  "data analytics"
  "data science"
  "emerging technology"
  "digital skills"
)

# Temp dir for intermediate results
WORK=$(mktemp -d)
trap "rm -rf $WORK" EXIT
touch "$WORK/seen_ids.txt"

log() { echo "[$(date +%H:%M:%S)] $*" >&2; }

# =============================================================================
# Contracts Finder API v2 (JSON) — most reliable source
# =============================================================================
search_contracts_finder() {
  log "Searching Contracts Finder..."
  local count=0

  for term in "${SEARCH_TERMS[@]}"; do
    log "  -> '$term'"
    local response
    response=$(curl -s --max-time 15 -X POST \
      "https://www.contractsfinder.service.gov.uk/api/rest/2/search_notices/json" \
      -H "Content-Type: application/json" \
      -d "{
        \"searchCriteria\": {
          \"keyword\": \"$term\",
          \"statuses\": [\"Open\"],
          \"types\": [\"Contract\"]
        },
        \"size\": 20
      }" 2>/dev/null) || { log "    FAILED"; sleep 2; continue; }

    # Requires jq
    if ! command -v jq &>/dev/null; then
      log "WARNING: jq not installed. Install with: brew install jq"
      return
    fi

    echo "$response" | jq -r '.noticeList[]? | .item | [.id, .title, (.valueLow|tostring), (.valueHigh|tostring), .deadlineDate, (.description[0:300] // "")] | @tsv' 2>/dev/null | while IFS=$'\t' read -r id title vlow vhigh deadline desc; do
      [ -z "$title" ] && continue
      # Dedup by ID
      grep -qF "$id" "$WORK/seen_ids.txt" 2>/dev/null && continue
      echo "$id" >> "$WORK/seen_ids.txt"

      # Score relevance
      local combined=$(echo "$title $desc" | tr '[:upper:]' '[:lower:]')
      local score=0
      for kw in "artificial intelligence" "ai dps" "ai audit" "ai training" "machine learning" "ai strategy" "ai readiness" "ai services"; do
        echo "$combined" | grep -qi "$kw" && score=$((score + 3))
      done
      for kw in "digital transformation" "data analytics" "automation" "emerging technology" "digital skills" "innovation" "intelligent automation" "data science"; do
        echo "$combined" | grep -qi "$kw" && score=$((score + 2))
      done
      for kw in "technology" "digital" "data" "cloud" "software" "ict" "consultancy" "consulting"; do
        echo "$combined" | grep -qi "$kw" && score=$((score + 1))
      done

      local relevance="Low"
      [ $score -ge 5 ] && relevance="High"
      [ $score -ge 2 ] && [ $score -lt 5 ] && relevance="Medium"

      # Filter out clearly irrelevant (score 0)
      [ $score -eq 0 ] && continue

      # Format value
      local value="Not specified"
      if [ "$vhigh" != "null" ] && [ "$vhigh" != "0" ] 2>/dev/null; then
        value="£$(printf "%'.0f" "$vhigh" 2>/dev/null || echo "$vhigh")"
      elif [ "$vlow" != "null" ] && [ "$vlow" != "0" ] 2>/dev/null; then
        value="£$(printf "%'.0f" "$vlow" 2>/dev/null || echo "$vlow")"
      fi

      # Format deadline
      local dl="Not specified"
      if [ -n "$deadline" ] && [ "$deadline" != "null" ]; then
        # Extract YYYY-MM-DD
        local ymd=$(echo "$deadline" | sed 's/T.*//')
        local y=$(echo "$ymd" | cut -d- -f1)
        local m=$(echo "$ymd" | cut -d- -f2)
        local d=$(echo "$ymd" | cut -d- -f3)
        local months=("" "Jan" "Feb" "Mar" "Apr" "May" "Jun" "Jul" "Aug" "Sep" "Oct" "Nov" "Dec")
        local mi=$((10#$m))
        dl="$d ${months[$mi]} $y"
      fi

      local url="https://www.contractsfinder.service.gov.uk/Notice/$id"
      local short_desc=$(echo "$desc" | tr '\r\n' ' ' | head -c 200)

      cat >> "$WORK/contracts_finder.md" <<ENTRY

## $title
- **Value:** $value
- **Deadline:** $dl
- **Source:** [Contracts Finder]($url)
- **Relevance:** $relevance
- **Notes:** $short_desc

ENTRY
      count=$((count + 1))
    done

    sleep 2  # Rate limiting
  done

  log "  Contracts Finder: $count results"
}

# =============================================================================
# Find a Tender (HTML scraping — limited without JS)
# =============================================================================
search_find_a_tender() {
  log "Searching Find a Tender..."
  local count=0

  for term in "${SEARCH_TERMS[@]}"; do
    local encoded_term=$(echo "$term" | sed 's/ /+/g')
    local response
    response=$(curl -s --max-time 15 \
      "https://www.find-tender.service.gov.uk/Search/Results?query=$encoded_term&statuses=open" \
      -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)" \
      -L 2>/dev/null) || continue

    # Extract titles and URLs from search results
    echo "$response" | grep 'search-result-header' | while read -r line; do
      local title=$(echo "$line" | sed 's/.*title="\([^"]*\)".*/\1/' | sed 's/&amp;/\&/g; s/&#039;/'"'"'/g')
      local href=$(echo "$line" | grep -o 'href="[^"]*"' | head -1 | sed 's/href="//;s/"//' || true)
      [ -z "$title" ] && continue

      # Only keep if title contains relevant keywords
      local combined=$(echo "$title" | tr '[:upper:]' '[:lower:]')
      local relevant=0
      for kw in "ai" "artificial" "intelligence" "digital" "data" "analytics" "automation" "machine learning" "technology" "innovation" "software" "ict"; do
        echo "$combined" | grep -qi "\b${kw}\b" && relevant=1 && break
      done
      [ $relevant -eq 0 ] && continue

      # Dedup
      grep -qF "$title" "$WORK/fat_seen.txt" 2>/dev/null && continue
      echo "$title" >> "$WORK/fat_seen.txt"

      local url="https://www.find-tender.service.gov.uk${href:-/Search/Results?query=$encoded_term}"

      cat >> "$WORK/find_a_tender.md" <<ENTRY

## $title
- **Value:** Not specified
- **Deadline:** Not specified
- **Source:** [Find a Tender]($url)
- **Relevance:** Medium
- **Notes:** Found via keyword "$term" — check listing for full details

ENTRY
      count=$((count + 1))
    done

    sleep 2
  done

  log "  Find a Tender: $count results"
}

# =============================================================================
# eTenders.gov.ie (Irish Government) — requires auth, limited scraping
# =============================================================================
search_etenders() {
  log "Searching eTenders.gov.ie..."
  log "  NOTE: eTenders requires authentication for full results"
  log "  Recommend: create account and set up email alerts"

  # Attempt public listing page
  local response
  response=$(curl -s --max-time 15 \
    "https://www.etenders.gov.ie/epps/cft/listContractNotices.do" \
    -H "User-Agent: Mozilla/5.0" \
    -L 2>/dev/null) || { log "  eTenders: connection failed"; return; }

  local count=0
  echo "$response" | grep -i -E 'artificial.intelligence|digital.transformation|AI|machine.learning|data.analytics|automation' | sed 's/<[^>]*>//g' | while read -r line; do
    line=$(echo "$line" | sed 's/^[[:space:]]*//;s/[[:space:]]*$//')
    [ -z "$line" ] || [ ${#line} -lt 15 ] && continue
    grep -qF "$line" "$WORK/et_seen.txt" 2>/dev/null && continue
    echo "$line" >> "$WORK/et_seen.txt"
    cat >> "$WORK/etenders.md" <<ENTRY

## $line
- **Value:** Not specified
- **Deadline:** Not specified
- **Source:** [eTenders.gov.ie](https://www.etenders.gov.ie/)
- **Relevance:** Medium
- **Notes:** Irish government tender — check eTenders for full details

ENTRY
    count=$((count + 1))
  done

  log "  eTenders: $count results"
}

# =============================================================================
# Main
# =============================================================================
log "Blue Canvas Tender Crawler starting..."
log "Output: $OUTPUT_FILE"

search_contracts_finder
search_find_a_tender
search_etenders

# Assemble output
cat > "$OUTPUT_FILE" <<HEADER
# Blue Canvas Tender Tracker — Results
**Date:** $DATE | **Generated:** $TIMESTAMP

**Search scope:** UK, Northern Ireland, Ireland
**Focus:** AI, digital transformation, technology tenders under £100k
**Blue Canvas services:** AI consulting, training workshops, AI audits, automation, research

---

HEADER

for source_file in contracts_finder find_a_tender etenders; do
  case $source_file in
    contracts_finder) section="Contracts Finder (UK)" ;;
    find_a_tender) section="Find a Tender (UK)" ;;
    etenders) section="eTenders.gov.ie (Ireland)" ;;
  esac

  echo "# $section" >> "$OUTPUT_FILE"
  echo "" >> "$OUTPUT_FILE"
  if [ -f "$WORK/$source_file.md" ] && [ -s "$WORK/$source_file.md" ]; then
    cat "$WORK/$source_file.md" >> "$OUTPUT_FILE"
  else
    echo "*No matching tenders found in this search.*" >> "$OUTPUT_FILE"
    echo "" >> "$OUTPUT_FILE"
  fi
  echo "---" >> "$OUTPUT_FILE"
  echo "" >> "$OUTPUT_FILE"
done

# Count
total=0
for f in "$WORK"/*.md; do
  [ -f "$f" ] && total=$((total + $(grep -c "^## " "$f" 2>/dev/null || echo 0)))
done

cat >> "$OUTPUT_FILE" <<FOOTER

---
*Total results: $total | Crawled: $TIMESTAMP*
*Next run: Schedule with \`crontab -e\` → \`0 8 * * 1 $SCRIPT_DIR/tender-crawler.sh\`*
FOOTER

log "Done! $total results written to $OUTPUT_FILE"
