# Apollo Lead Gen - 2026-03-18

## Status: BLOCKED - Missing API Key

**Issue**: Apollo API key not found in environment variables
**Required**: APOLLO_API_KEY must be configured

## Target Query (Would Execute)
- **Location**: Northern Ireland, United Kingdom
- **Company Size**: 5-50 employees
- **Target Titles**: Managing Director, Director, Owner, Partner
- **Sectors**: Professional services, legal, healthcare, hospitality

## Expected Output Structure
For each lead we'd capture:
1. Business name
2. Contact person & title
3. Phone/Email (when available)
4. Industry sector
5. Outreach priority score

## Next Steps
1. Configure APOLLO_API_KEY in environment
2. Re-run cron job to generate actual leads
3. Export results for Blue Canvas outreach

---
*Generated: 2026-03-18 10:00 GMT*