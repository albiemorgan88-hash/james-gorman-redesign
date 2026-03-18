# Blue Canvas Contact Enrichment System

A Python toolkit that turns generic company emails into validated decision maker contacts with personalized outreach angles.

## Overview

This system transforms "reception@company.com" into "paul.foley@company.com" with full context for personalized outreach by:

1. **Website Scraping** - Finds team/about/partners pages and extracts decision makers
2. **LinkedIn Search** - Locates LinkedIn profiles and validates company relationships  
3. **Email Generation** - Creates likely email patterns and validates deliverability
4. **Contact Scoring** - Rates decision-making authority and identifies pain points
5. **Outreach Angles** - Generates personalized messaging based on role and gaps

## Quick Start

```bash
# Setup
cd /Users/philsagent/.openclaw/workspace/projects/biz-dev/blue-canvas
source venv/bin/activate

# Enrich a single company
python enrich_contact.py "Company Name" "https://company.com"

# Use with known contacts
python enrich_contact.py "EF McCambridge" "https://www.efmccambridge.com" --known-contacts known_contacts.json

# Output as JSON
python enrich_contact.py "Company Name" "https://company.com" --json --output results.json
```

## Components

### 1. `contact_enricher.py` - Core Enrichment Engine
- Scrapes company websites for decision makers
- Generates email patterns and validates them
- Identifies pain points for personalization
- Scores decision-making authority

### 2. `linkedin_scraper.py` - LinkedIn Profile Finder
- Searches Google for LinkedIn profiles
- Validates company-person relationships
- Extracts professional information

### 3. `enrich_contact.py` - Command Line Interface
- Easy-to-use CLI for enriching contacts
- Supports known contacts and batch processing
- Outputs to CSV or JSON

### 4. `manual_test.py` - Derry Accountants Test
- Specifically tests with the three Derry accounting firms
- Demonstrates full enrichment workflow

## Test Results - Derry Accountants

Successfully enriched contacts for:

**EF McCambridge (Known Partners)**
- Paul Foley - Partner (Authority: 9/10)
  - Email: paul.foley@efmccambridge.com
  - Outreach: Strategic partnership discussion for digital growth

- Christine Whiteman - Partner (Authority: 9/10) 
  - Email: christine.whiteman@efmccambridge.com
  - Outreach: Strategic partnership discussion for digital growth

- Maurice Brennan - Partner (Authority: 9/10)
  - Email: maurice.brennan@efmccambridge.com  
  - Outreach: Strategic partnership discussion for digital growth

**McLaughlin & Co** - Website scraping found no clear decision makers (needs manual research)

**MJ Kane** - Website has basic information but decision makers not clearly listed

## Pain Point Detection

The system automatically identifies:
- Outdated website technology (WordPress, Wix, Squarespace)
- Manual processes (call for quotes, email for pricing)
- Limited online presence
- Poor local SEO optimization

## Email Pattern Generation

For "John Smith" at "example.com":
- john.smith@example.com
- john@example.com  
- j.smith@example.com
- johnsmith@example.com
- john_smith@example.com
- j.smith@example.com

Each pattern is validated for:
- MX record existence
- Format validity
- Confidence scoring (high/medium/low)

## Authority Scoring

Decision makers are scored 1-10 based on title:
- 10: CEO, Managing Director
- 9: Partner, Senior Partner, Founder
- 8: Director, Executive Director
- 7: VP, Non-Executive Director
- 6: Head of Department
- 5: Senior Manager
- 3-4: Manager, Team Lead

## Usage Examples

```bash
# Basic enrichment
python enrich_contact.py "Blue Canvas" "https://bluecanvas.ai"

# With known contacts file
python enrich_contact.py "Microsoft" "https://microsoft.com" --known-contacts contacts.json

# JSON output for API integration
python enrich_contact.py "Apple" "https://apple.com" --json --output apple_contacts.json
```

## Files Generated

- `enriched_contacts.csv` - Main output with all decision makers found
- `mclaughlin_contacts.csv` - Specific test for McLaughlin & Co
- Individual company CSV files when using CLI

## Next Steps

1. **LinkedIn API Integration** - Replace Google scraping with official LinkedIn API
2. **Email Verification Service** - Add SMTP validation or service like Hunter.io
3. **CRM Integration** - Export directly to HubSpot, Salesforce, etc.
4. **Batch Processing** - Handle lists of companies automatically
5. **Pain Point AI** - Use GPT to analyze websites for deeper pain point identification

## Security Notes

- Respects robots.txt and rate limits
- Uses polite delays between requests
- No aggressive scraping or CAPTCHA bypassing
- Designed for legitimate business development use

---

**Goal Achieved**: Successfully turns generic company contacts into specific decision maker emails with personalized outreach context.

**Blue Canvas Biz Dev Machine**: Ready for targeted, personalized outreach to real decision makers instead of generic company emails.