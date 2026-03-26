---
name: local-site-hunter
description: >
  Find local businesses without websites, build sample sites, and create WhatsApp outreach. 
  Use when: (1) finding businesses in a location without websites, (2) searching for high-value 
  local prospects (dentists, restaurants, cafes, gyms, nurseries, physios, vets, florists, 
  car dealers, hotels, yoga studios), (3) filtering businesses with mobile numbers only for 
  WhatsApp outreach, (4) building prospect lists for web development services, (5) adding 
  businesses to tradesman-sites dashboard. Generates CSV reports, updates company database, 
  builds and deploys site automatically.
---

# Local Site Hunter

Automates finding local businesses without websites, building them sample sites, and creating a WhatsApp outreach dashboard.

## Workflow

When user requests finding businesses in a location (e.g., "find 50 businesses in Derry without websites"):

1. **Search Google Maps** for high-value business categories
2. **Filter results** to businesses with NO website or Facebook-only
3. **Mobile numbers only** (07xxx) — landlines can't receive WhatsApp
4. **Generate CSV report** with prospect data
5. **Update tradesman-sites** project with new businesses (MERGE, never replace)
6. **Build and deploy** updated site
7. **Report results** with totals and deployment URL

## Business Categories

Search these high-value categories (NOT painters or one-man-band tradesmen):

- **Healthcare**: dentist, physiotherapy, chiropractor, optician, veterinary
- **Hospitality**: restaurant, cafe, pub, hotel
- **Fitness**: gym, yoga, pilates
- **Services**: dog kennel, dog grooming, nursery, creche, childcare
- **Automotive**: car dealer, mot centre, car detailing
- **Events**: wedding venue, photographer, florist
- **Property**: estate agent, letting agent

## Business Scoring

- **Score 10**: No website
- **Score 8**: Facebook only
- **Skip**: Businesses with real websites

## Data Collection

For each business, collect:
- Name
- Phone (mobile 07xxx only)
- Address
- Rating
- Review count
- Website status (or lack of)

## Database Integration

**CRITICAL**: Always MERGE with existing `companies.ts` — never replace. Old URLs are in people's WhatsApp chats.

File location: `/Users/philsagent/.openclaw/workspace/projects/tradesman-sites/lib/companies.ts`

## Deployment

After updating database:
```bash
source ~/.zprofile && \
cd /Users/philsagent/.openclaw/workspace/projects/tradesman-sites && \
npm run build && \
npx vercel --token "$VERCEL_TOKEN" --yes --prod
```

## Configuration

- **Google Maps API**: `GOOGLE_MAPS_API_KEY` environment variable
- **Default location**: Derry (accepts any location)
- **Output format**: CSV report + database update

## Scripts

Run `scripts/find_businesses.py` for the complete workflow:
```bash
python scripts/find_businesses.py --location "Derry" --limit 50
```

Use `scripts/update_database.py` to merge results:
```bash
python scripts/update_database.py --csv businesses.csv
```