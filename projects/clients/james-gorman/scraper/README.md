# PropertyPal Market Intelligence Tool for James Gorman Property

A comprehensive market intelligence system to analyze the Derry property market and provide competitive insights for James Gorman Property.

## Purpose

This tool provides James Gorman Property with:
- **Competitor Analysis**: Who's listing what and where
- **Market Intelligence**: Pricing trends and property types  
- **Lead Generation**: Properties listed by smaller agents that could be targeted when they come back to market
- **Market Activity**: Recent listings and sales activity

## Features

- **Smart Data Extraction**: Multiple approaches to gather property data from PropertyPal.com
- **Market Intelligence Reports**: Comprehensive analysis with actionable insights
- **Competitor Tracking**: Monitor estate agent market share and activity
- **Opportunity Identification**: Find potential leads from smaller agents
- **CSV/JSON Export**: Data in multiple formats for further analysis
- **Anti-Bot Resilience**: Built to handle modern website protections

## Quick Start

### 1. Setup Environment

```bash
# Navigate to the scraper directory
cd /Users/philsagent/.openclaw/workspace/projects/clients/james-gorman/scraper

# Create virtual environment
python3 -m venv venv
source venv/bin/activate

# Install required packages
pip install requests beautifulsoup4
```

### 2. Generate Sample Data (For Testing)

```bash
# Generate realistic sample data to test the system
python3 generate_sample_data.py
```

This creates:
- `data/derry-listings-YYYY-MM-DD.csv` - Property data spreadsheet
- `data/derry-listings-YYYY-MM-DD.json` - Raw JSON data  
- `data/market-report-YYYY-MM-DD.md` - Market intelligence report

## Usage Options

### Option 1: Live Data Scraping (Advanced)

⚠️ **Note**: PropertyPal has strong anti-bot protection. For production use, consider:

```bash
# Enhanced scraper with better bot detection handling
source venv/bin/activate
python3 propertypal_scraper_v2.py --area "Derry" --delay 5.0 10.0
```

**Challenges with live scraping:**
- PropertyPal uses Cloudflare protection
- Dynamic content loaded via JavaScript
- Rate limiting and IP blocking
- May require residential proxies or browser automation

### Option 2: Sample Data Generation (Recommended for Testing)

```bash
# Generate realistic sample data for testing and development
python3 generate_sample_data.py
```

### Option 3: Manual Data Collection + Analysis (Recommended)

The most reliable approach for consistent market intelligence:

```bash
# 1. Create a data collection template
python3 import_manual_data.py --create-template

# 2. Manually collect data from PropertyPal searches and fill the template
# Edit manual_data_template.csv with current listings

# 3. Import and generate intelligence reports
python3 import_manual_data.py --input manual_data_template.csv
```

**Manual Collection Workflow:**
1. Search PropertyPal.com for Derry area properties
2. Copy property details to the CSV template
3. Run import script to generate market intelligence
4. Repeat weekly for trend tracking

## Command Line Options

```bash
# Basic scraping attempt
python3 propertypal_scraper_v2.py

# Specific area only  
python3 propertypal_scraper_v2.py --area "Derry,Waterside"

# Custom delays (be more respectful)
python3 propertypal_scraper_v2.py --delay 8.0 15.0

# Custom output directory
python3 propertypal_scraper_v2.py --output-dir /path/to/data
```

## Target Areas

The scraper covers these key Derry areas:
- **Derry City** (BT47, BT48)
- **Waterside**
- **Cityside**
- **Culmore**
- **Eglinton**
- **Drumahoe**
- **Strathfoyle**
- **Newbuildings**
- **Park**
- **Limavady**
- **Dungiven**

## Data Extracted

For each property listing, the scraper captures:

| Field | Description |
|-------|-------------|
| `address` | Property address |
| `price` | Asking price (or POA) |
| `property_type` | Detached, Semi, Terraced, Apartment |
| `bedrooms` | Number of bedrooms |
| `bathrooms` | Number of bathrooms |
| `agent` | Estate agent handling the listing |
| `date_listed` | When the property was listed |
| `status` | For Sale, Sale Agreed, Sold |
| `url` | PropertyPal listing URL |
| `area` | Area/location |
| `scraped_at` | Timestamp when data was scraped |

## Market Intelligence Report

The generated report includes:

### Summary Statistics
- Total properties by area
- Recent listings (last 7 days)
- Property type breakdown

### Competitor Analysis
- Top agents by number of listings
- Market share percentages
- Key competitors for James Gorman Property

### Opportunity Analysis
- Small/independent agents with few listings
- Potential leads when properties come back to market

### Price Analysis
- Average and median prices
- Price ranges by area and type

## Production Deployment

### Option A: Automated Scraping (If Anti-Bot Protection Allows)

```bash
# Add to crontab for daily intelligence gathering
crontab -e

# Add this line for 9 AM daily:
0 9 * * * cd /Users/philsagent/.openclaw/workspace/projects/clients/james-gorman/scraper && source venv/bin/activate && python3 propertypal_scraper_v2.py --delay 10.0 20.0
```

### Option B: Semi-Manual Process (Recommended)

1. **Weekly Manual Search**: Use PropertyPal.com search filters for Derry area
2. **Export Results**: Copy/paste or export search results 
3. **Import & Analyze**: Use our tools to process and generate intelligence reports
4. **Automated Reporting**: Schedule report generation on imported data

### Option C: Browser Automation (Advanced)

For highest success rate, consider:
- Selenium WebDriver with Chrome
- Residential proxy rotation
- CAPTCHA solving services
- Browser fingerprint randomization

## Output Files

### CSV Format (`derry-listings-YYYY-MM-DD.csv`)
Spreadsheet-compatible format for analysis in Excel or Google Sheets.

### JSON Format (`derry-listings-YYYY-MM-DD.json`)
Raw data format for programmatic analysis or integration with other systems.

### Market Report (`market-report-YYYY-MM-DD.md`)
Markdown-formatted intelligence report with:
- Executive summary
- Competitor breakdown
- Opportunity analysis
- Recent market activity

## Technical Details

### Anti-Bot Protection
- Uses realistic browser headers
- Random delays between requests (1-3 seconds)
- Retry logic for failed requests
- Session management for cookies

### Error Handling
- Graceful handling of blocked requests
- Fallback selectors for different page layouts
- Logging of errors and progress
- Continues scraping if individual areas fail

### Rate Limiting
- 1-3 second delays between property requests
- 5-10 second delays between different areas
- Configurable delay ranges via command line

## Troubleshooting

### Common Issues

**403 Forbidden / Bot Detection**
```bash
# Use longer delays and try different approaches
python3 propertypal_scraper_v2.py --delay 15.0 30.0

# Or use sample data for testing:
python3 generate_sample_data.py
```

**No Properties Found**
- PropertyPal uses modern anti-bot protection (Cloudflare)
- Website structure changes frequently
- JavaScript-heavy content requires browser automation
- Consider manual data collection + automated analysis

**Rate Limiting**
```bash
# Be more respectful with requests
python3 propertypal_scraper_v2.py --delay 10.0 20.0

# Or use residential proxies for production
```

### Debug Mode

Enable detailed logging:
```python
# In the scraper script, change:
logging.basicConfig(level=logging.DEBUG)
```

### Alternative Data Sources

If PropertyPal proves too difficult:
- **PropertyNews.com** - Northern Ireland property portal
- **PropertyPal API** - Official API (if available)
- **Manual Collection** - Weekly manual searches + automated analysis
- **Third-party Services** - Property data APIs (paid)

## Legal & Ethical Use

- **Respectful Scraping**: Built-in delays to avoid overwhelming PropertyPal's servers
- **Business Intelligence**: For legitimate competitive analysis
- **No Personal Data**: Only public property listings are collected
- **Rate Limited**: Designed to not impact website performance

## Support

For issues or questions about the scraper:
1. Check the log output for specific error messages
2. Verify PropertyPal website structure hasn't changed
3. Test with a single area first: `--area "derry-city"`
4. Adjust delays if getting blocked: `--delay 5.0 10.0`

## Files Included

### Main Scripts
- `propertypal_scraper.py` - Original scraper (basic version)
- `propertypal_scraper_v2.py` - Enhanced scraper with JSON extraction and anti-bot handling
- `generate_sample_data.py` - Generate realistic sample data for testing
- `import_manual_data.py` - Import manually collected property data

### Documentation
- `README.md` - This comprehensive guide
- `manual_data_template.csv` - Template for manual data collection

### Output Directory (`data/`)
- `derry-listings-YYYY-MM-DD.csv` - Property data in spreadsheet format
- `derry-listings-YYYY-MM-DD.json` - Raw JSON data for integration
- `market-report-YYYY-MM-DD.md` - Market intelligence reports

## Quick Start Summary

1. **Setup**: `python3 -m venv venv && source venv/bin/activate && pip install requests beautifulsoup4`
2. **Test**: `python3 generate_sample_data.py` 
3. **Production**: Use manual collection workflow with `import_manual_data.py`
4. **Review**: Check `data/market-report-YYYY-MM-DD.md` for intelligence insights

## Future Enhancements

Potential improvements:
- **Browser Automation**: Selenium-based scraper for complex sites
- **Email Alerts**: Notifications for new high-value listings  
- **CRM Integration**: Direct import to James's property management system
- **Price Tracking**: Historical data and trend analysis
- **WhatsApp Alerts**: Instant notifications for urgent opportunities
- **API Integration**: PropertyPal API access (if available)
- **Proxy Rotation**: Residential proxy support for large-scale collection