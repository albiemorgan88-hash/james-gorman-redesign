#!/bin/bash

# Blue Canvas Contact Enrichment System
# Quick deployment script

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

# Activate virtual environment
source venv/bin/activate

echo "🔧 Blue Canvas Contact Enrichment System"
echo "=========================================="

if [ $# -eq 0 ]; then
    echo "Usage: $0 [demo|company_name company_url]"
    echo ""
    echo "Examples:"
    echo "  $0 demo                                    # Run full demo"
    echo "  $0 'EF McCambridge' 'https://efmccambridge.com'"
    echo "  $0 'Company Name' 'https://company.com'"
    exit 1
fi

if [ "$1" = "demo" ]; then
    echo "Running full system demo..."
    python demo.py
else
    if [ $# -lt 2 ]; then
        echo "Error: Please provide both company name and URL"
        exit 1
    fi
    
    company_name="$1"
    company_url="$2"
    
    echo "Enriching: $company_name"
    echo "URL: $company_url"
    echo ""
    
    python enrich_contact.py "$company_name" "$company_url" \
        --known-contacts known_contacts.json \
        --output "$(echo "$company_name" | tr ' ' '_' | tr '[:upper:]' '[:lower:]')_contacts.csv"
fi

echo ""
echo "✅ Enrichment complete!"
echo "📁 Check the output CSV file for results"