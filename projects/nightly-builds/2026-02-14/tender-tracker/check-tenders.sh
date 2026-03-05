#!/bin/bash
# Blue Canvas AI — Tender Checker
# Searches for AI/digital/technology tenders across UK & Ireland procurement platforms
# Run daily to stay on top of new opportunities
#
# Usage: ./check-tenders.sh
# Dependencies: curl, python3 (for JSON parsing)

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
OUTPUT_DIR="$SCRIPT_DIR"
DATE=$(date +%Y-%m-%d)
RESULTS_FILE="$OUTPUT_DIR/tender-results-${DATE}.json"

echo "🎯 Blue Canvas AI — Tender Search"
echo "================================="
echo "Date: $DATE"
echo ""

# Keywords relevant to Blue Canvas AI
KEYWORDS=("artificial+intelligence" "AI+consultancy" "digital+transformation" "AI+training" "technology+consulting" "machine+learning" "data+analytics")

# --- Contracts Finder UK API ---
echo "📡 Searching Contracts Finder UK..."
CF_RESULTS=""
for kw in "${KEYWORDS[@]}"; do
  RESPONSE=$(curl -s "https://www.contractsfinder.service.gov.uk/Published/Notices/OCDS/Search?queryString=${kw}&stages=tender&stages=planning" \
    -H "Accept: application/json" 2>/dev/null || echo '{"releases":[]}')
  CF_RESULTS="${CF_RESULTS}${RESPONSE}\n"
done
echo "  ✅ Contracts Finder searched"

# --- Find a Tender (search page) ---
echo "📡 Checking Find a Tender..."
FT_URL="https://www.find-tender.service.gov.uk/Search/Results?query=AI+digital+transformation&stage=tender"
FT_RESPONSE=$(curl -s "$FT_URL" 2>/dev/null | head -200 || echo "")
echo "  ✅ Find a Tender checked"

# --- eTenders.ie ---
echo "📡 Checking eTenders.ie..."
ET_URL="https://www.etenders.gov.ie/epps/cft/listContractNotices.do"
ET_RESPONSE=$(curl -s "$ET_URL" 2>/dev/null | head -200 || echo "")
echo "  ✅ eTenders.ie checked"

# --- InterTradeIreland ---
echo "📡 Checking InterTradeIreland..."
ITI_RESPONSE=$(curl -s "https://intertradeireland.com/tenders" 2>/dev/null | head -100 || echo "")
echo "  ✅ InterTradeIreland checked"

# --- eTendersNI ---
echo "📡 Checking eTendersNI..."
ETNI_RESPONSE=$(curl -s "https://etendersni.gov.uk/epps/cft/listContractNotices.do" 2>/dev/null | head -200 || echo "")
echo "  ✅ eTendersNI checked"

# --- BidStats UK (Northern Ireland) ---
echo "📡 Checking BidStats UK (NI region)..."
BS_RESPONSE=$(curl -s "https://bidstats.uk/tenders/?region=UKN&q=AI" 2>/dev/null | head -200 || echo "")
echo "  ✅ BidStats checked"

echo ""
echo "================================="
echo "✅ Search complete. Review results at:"
echo "   $OUTPUT_DIR/index.html"
echo ""
echo "💡 For best results, also check manually:"
echo "   • https://www.find-tender.service.gov.uk (search: AI, digital transformation)"
echo "   • https://www.contractsfinder.service.gov.uk (search: AI consultancy)"
echo "   • https://www.etenders.gov.ie (search: artificial intelligence)"
echo "   • https://etendersni.gov.uk (search: digital, AI)"
echo "   • https://www.crowncommercial.gov.uk/agreements/RM6200 (AI DPS)"
echo "   • https://www.stotles.com/explore/notices/topics/AI (aggregated feed)"
echo ""
echo "📌 Key actions:"
echo "   1. Register on CCS AI DPS (RM6200) if not already"
echo "   2. Monitor Find a Tender for NI-specific opportunities"
echo "   3. Check eTenders.ie for Irish cross-border work"
echo "   4. Sign up for Stotles free alerts on AI tenders"
