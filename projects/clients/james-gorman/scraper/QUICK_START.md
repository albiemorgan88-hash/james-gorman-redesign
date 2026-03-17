# PropertyPal Market Intelligence - Quick Start Guide

**For James Gorman Property | Estate Agent, Derry**

## What This Tool Does

Provides competitive intelligence on the Derry property market:
- **Who's listing what** - Track competitor activity  
- **Pricing trends** - Monitor market rates by area and type
- **Lead opportunities** - Find properties listed by smaller agents to target
- **Market share analysis** - See which agents dominate each area

## Instant Demo

```bash
# Run this to see the system in action
cd /Users/philsagent/.openclaw/workspace/projects/clients/james-gorman/scraper
./run_sample.sh
```

This generates sample market data showing exactly what you'd get with real PropertyPal data.

## Real Data Collection (Recommended Approach)

### Why Manual Collection?

PropertyPal.com has strong anti-bot protection (Cloudflare, rate limiting). The most reliable approach is:

1. **Weekly Manual Search** (10-15 minutes)
2. **Automated Analysis** (30 seconds) 
3. **Intelligence Reports** (instant)

### Step-by-Step Process

```bash
# 1. Create data collection template
python3 import_manual_data.py --create-template

# 2. Search PropertyPal.com manually:
#    - Go to propertypal.com
#    - Search "Derry" properties for sale
#    - Copy key details to the CSV template
#    - Include: address, price, agent, bedrooms, type

# 3. Generate intelligence reports
python3 import_manual_data.py --input manual_data_template.csv
```

## What You Get

### Market Intelligence Report
- **Competitor breakdown** - Who has the most listings
- **Price analysis** - Average prices by area and type  
- **Opportunity targets** - Small agents with few listings to approach
- **Market activity** - Recent listings and trends

### Data Files
- **CSV format** - Import to Excel/Google Sheets
- **JSON format** - For integration with other systems
- **Weekly tracking** - Compare reports over time

## Key Intelligence for Your Business

### 1. Competitor Monitoring
"Anderson Properties has 12 listings, Pinewood Properties has 9..."
- Track who's active in your target areas
- Monitor their pricing strategies
- See market share changes over time

### 2. Lead Generation
"5 agents have only 1-2 listings each..."
- Identify sellers using smaller/weaker agents
- Target these properties when they come back to market
- Build relationships with underperforming agents

### 3. Market Positioning  
"Average price in Waterside: £245k, Derry City: £290k..."
- Price your listings competitively
- Identify high-value areas to target
- Understand local market dynamics

## Weekly Workflow

1. **Monday Morning** (10 minutes)
   - Search PropertyPal for Derry area properties
   - Update the CSV template with new listings

2. **Generate Reports** (30 seconds)
   ```bash
   python3 import_manual_data.py --input manual_data_template.csv
   ```

3. **Review Intelligence** (5 minutes)
   - Check new competitor activity
   - Identify opportunity targets
   - Note pricing trends

4. **Take Action**
   - Contact sellers using weak agents
   - Adjust your pricing strategy
   - Plan marketing focus areas

## Sample Insights You'll Get

**Market Share Analysis:**
- "Martin & Co has 15% market share in Derry City"
- "5 small agents have <3 listings each - opportunity targets"

**Pricing Intelligence:**
- "Semi-detached properties: £180k-£350k range"
- "Waterside averaging £45k less than Derry City"

**Opportunity Identification:**
- "O'Sullivan Estates has only 1 listing - weak competitor"
- "3 properties listed by agents with no other inventory"

## Technical Details

**No Complex Setup Required:**
- Standard Python (already installed)
- Simple CSV data collection
- Works on any computer

**Privacy & Legal:**
- Only uses public property listing data
- No automated scraping of protected content
- Respectful manual collection approach

**Data Security:**
- All data stays on your computer
- No cloud uploads or external services
- Full control over your market intelligence

## Support & Questions

**Common Issues:**
- CSV template not working? Check the format matches the sample
- Data looks wrong? Verify addresses include area names
- Missing fields? Use "N/A" for unknown values

**Getting Started:**
1. Run `./run_sample.sh` to see the demo
2. Create your first manual collection template
3. Schedule weekly intelligence gathering

**Questions?** Contact the development team or check README.md for detailed instructions.

---

*This tool gives you the competitive intelligence larger agencies pay thousands for. Use it weekly to stay ahead of your competition and spot opportunities before they do.*