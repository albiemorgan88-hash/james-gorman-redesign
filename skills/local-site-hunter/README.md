# Local Site Hunter Skill

**Created:** March 26, 2026  
**Status:** ✅ Ready for use  

## What it does

Automates finding local businesses WITHOUT websites, building them sample sites, and creating a WhatsApp outreach dashboard.

## Quick Start

1. **Set up API key:**
   ```bash
   export GOOGLE_MAPS_API_KEY="your-api-key-here"
   ```

2. **Find businesses in a location:**
   ```bash
   python scripts/hunt_and_deploy.py --location "Belfast" --limit 50
   ```

3. **Test API connection:**
   ```bash
   python scripts/test_api.py
   ```

## What happens when you run it

1. 🔍 **Searches Google Maps** for high-value businesses (dentists, restaurants, cafes, gyms, etc.)
2. 🎯 **Filters for prospects** - no website OR Facebook-only
3. 📱 **Mobile numbers only** - filters to 07xxx numbers for WhatsApp
4. 📊 **Generates CSV report** with all prospect data
5. 🔄 **Updates tradesman-sites** database (merges, never replaces)
6. 🚀 **Deploys updated site** to Vercel
7. 📋 **Reports results** with totals and URLs

## Business Categories Searched

**High-value only** (NOT one-man-band tradesmen):

- **Healthcare:** dentist, physiotherapy, chiropractor, optician, veterinary
- **Hospitality:** restaurant, cafe, pub, hotel  
- **Fitness:** gym, yoga, pilates
- **Services:** dog grooming, nursery, childcare
- **Automotive:** car dealer, MOT centre, car detailing
- **Events:** wedding venue, photographer, florist
- **Property:** estate agent, letting agent

## Scoring System

- **Score 10:** No website (highest priority)
- **Score 8:** Facebook only (good prospects)  
- **Skip:** Businesses with real websites

## Database Safety

⚠️ **CRITICAL:** Always MERGES with existing data, never replaces. Old URLs stay active in people's WhatsApp chats.

## Files

- `SKILL.md` - Main skill documentation
- `scripts/hunt_and_deploy.py` - Complete workflow
- `scripts/find_businesses.py` - Google Maps search
- `scripts/update_database.py` - Database operations
- `scripts/integration_test.py` - Test all components
- `scripts/test_api.py` - Test API connection
- `scripts/example_usage.py` - Usage examples

## Integration

Works with the `tradesman-sites` project at:
`/Users/philsagent/.openclaw/workspace/projects/tradesman-sites/`

Updates `lib/companies.ts` and deploys to Vercel automatically.

## Usage Examples

```bash
# Find 50 businesses in Derry
python scripts/hunt_and_deploy.py --location "Derry" --limit 50

# Find 20 businesses in Belfast  
python scripts/hunt_and_deploy.py --location "Belfast" --limit 20

# Just search, don't deploy
python scripts/find_businesses.py --location "Cork" --limit 30 --output cork_businesses.csv
```

Ready to hunt! 🎯