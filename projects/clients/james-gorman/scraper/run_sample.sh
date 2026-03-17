#!/bin/bash

# Quick start script for James Gorman Property market intelligence
# This generates sample data and demonstrates the full workflow

echo "🏠 James Gorman Property - PropertyPal Market Intelligence Tool"
echo "=============================================================="
echo ""

# Check if virtual environment exists
if [ ! -d "venv" ]; then
    echo "📦 Setting up Python environment..."
    python3 -m venv venv
    source venv/bin/activate
    pip install requests beautifulsoup4
    echo "✅ Environment setup complete"
    echo ""
else
    echo "📦 Activating Python environment..."
    source venv/bin/activate
    echo "✅ Environment activated"
    echo ""
fi

# Generate sample data
echo "📊 Generating sample market data..."
python3 generate_sample_data.py
echo ""

# Show what was generated
echo "📄 Files generated:"
ls -la data/
echo ""

# Show quick stats from the report
echo "📈 Market Intelligence Preview:"
echo "================================"
head -20 data/market-report-*.md
echo ""
echo "... (full report available in data/ directory)"
echo ""

echo "🎯 Next Steps for James Gorman Property:"
echo "========================================="
echo "1. Review the full market report in data/ directory"
echo "2. Analyze competitor market share and pricing"
echo "3. For live data: Try PropertyPal scraping or manual collection"
echo "4. Schedule weekly updates to track market changes"
echo ""

echo "💡 To collect real data:"
echo "   python3 import_manual_data.py --create-template"
echo "   # Edit the template with PropertyPal search results"
echo "   python3 import_manual_data.py --input manual_data_template.csv"
echo ""

echo "✅ Setup complete! Market intelligence system ready."