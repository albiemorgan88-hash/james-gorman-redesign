---
name: apollo-lead-gen
description: >
  Search, enrich, and build targeted lead lists using the Apollo.io API.
  Use when the user needs to: find people by title/location/industry/company size,
  search companies by industry/location/employee count, enrich contacts,
  build prospect lists (e.g. "solicitors in Northern Ireland"), create cold outreach
  sequences, or work with Apollo.io data in any way.
---

# Apollo Lead Gen

## Setup

- **API Key env var**: `APOLLO_API_KEY`
- **Base URL**: `https://api.apollo.io/api/v1/`
- All requests use `Content-Type: application/json` and pass the key as `api_key` in the JSON body.

## API Reference

### People Search

Find people by title, location, industry, company size.

```bash
curl -X POST 'https://api.apollo.io/api/v1/people/search' \
  -H 'Content-Type: application/json' \
  -d '{
    "api_key": "'$APOLLO_API_KEY'",
    "q_keywords": "solicitor",
    "person_titles": ["Partner", "Managing Director", "Owner", "Director"],
    "person_locations": ["Northern Ireland, United Kingdom"],
    "organization_num_employees_ranges": ["1,50"],
    "page": 1,
    "per_page": 25
  }'
```

**Key parameters:**
| Parameter | Description |
|-----------|-------------|
| `q_keywords` | Keyword search across all fields |
| `person_titles` | Array of job titles to match |
| `person_locations` | Array of locations (city, region, country) |
| `organization_num_employees_ranges` | Array of ranges like `"1,50"`, `"51,200"` |
| `organization_industry_tag_ids` | Industry filter IDs |
| `q_organization_keyword_tags` | Industry keywords array |
| `person_seniorities` | `["owner","founder","c_suite","partner","vp","director","manager"]` |
| `page` / `per_page` | Pagination (max 100 per page) |

### Company/Organization Search

```bash
curl -X POST 'https://api.apollo.io/api/v1/organizations/search' \
  -H 'Content-Type: application/json' \
  -d '{
    "api_key": "'$APOLLO_API_KEY'",
    "q_organization_keyword_tags": ["legal services"],
    "organization_locations": ["Northern Ireland, United Kingdom"],
    "organization_num_employees_ranges": ["1,50"],
    "page": 1,
    "per_page": 25
  }'
```

**Key parameters:**
| Parameter | Description |
|-----------|-------------|
| `q_organization_keyword_tags` | Industry/keyword tags |
| `organization_locations` | Location filter |
| `organization_num_employees_ranges` | Employee count ranges |
| `q_organization_name` | Search by company name |

### Contact Enrichment

Match and enrich a known contact:

```bash
curl -X POST 'https://api.apollo.io/api/v1/people/match' \
  -H 'Content-Type: application/json' \
  -d '{
    "api_key": "'$APOLLO_API_KEY'",
    "first_name": "John",
    "last_name": "Smith",
    "organization_name": "Smith & Co Solicitors",
    "domain": "smithandco.com"
  }'
```

Returns enriched profile: email, phone, title, company details, social links.

### Email Sequences

List campaigns:
```bash
curl -G 'https://api.apollo.io/api/v1/emailer_campaigns' \
  -d "api_key=$APOLLO_API_KEY"
```

## Pre-Built Audience Templates

Use these as starting configs for Blue Canvas target verticals in NI/UK.

### Solicitors / Legal (NI)
```json
{
  "person_titles": ["Partner", "Managing Partner", "Director", "Owner", "Senior Partner"],
  "q_organization_keyword_tags": ["legal services", "law practice", "solicitors"],
  "person_locations": ["Northern Ireland, United Kingdom"],
  "organization_num_employees_ranges": ["1,50", "51,200"]
}
```

### Accountants (NI/UK)
```json
{
  "person_titles": ["Partner", "Managing Director", "Director", "Practice Manager", "Owner"],
  "q_organization_keyword_tags": ["accounting", "chartered accountants", "financial services"],
  "person_locations": ["Northern Ireland, United Kingdom"],
  "organization_num_employees_ranges": ["1,50", "51,200"]
}
```

### Estate Agents (NI/UK)
```json
{
  "person_titles": ["Director", "Branch Manager", "Owner", "Managing Director"],
  "q_organization_keyword_tags": ["real estate", "estate agents", "property"],
  "person_locations": ["Northern Ireland, United Kingdom"],
  "organization_num_employees_ranges": ["1,50"]
}
```

### Healthcare / Private Clinics (NI/UK)
```json
{
  "person_titles": ["Practice Manager", "Director", "Owner", "Managing Director"],
  "q_organization_keyword_tags": ["healthcare", "medical practice", "dental", "physiotherapy"],
  "person_locations": ["Northern Ireland, United Kingdom"],
  "organization_num_employees_ranges": ["1,50", "51,200"]
}
```

### Professional Services (NI/UK)
```json
{
  "person_titles": ["Managing Director", "Director", "Owner", "CEO", "Founder"],
  "q_organization_keyword_tags": ["consulting", "professional services", "business services"],
  "person_locations": ["Northern Ireland, United Kingdom"],
  "organization_num_employees_ranges": ["1,50", "51,200"]
}
```

### Location Variants

For city-level targeting, replace `person_locations`:
- `["Derry, United Kingdom"]`
- `["Belfast, United Kingdom"]`
- `["Newry, United Kingdom"]`
- `["Lisburn, United Kingdom"]`

## Building Lead Lists — Workflow

1. **Define audience** — Pick a template above or customise parameters.
2. **Run people search** — Paginate through results (`page` 1, 2, 3…).
3. **Filter & dedupe** — Remove irrelevant results, check for duplicates.
4. **Enrich key contacts** — Use `/people/match` for missing emails/phones.
5. **Export** — Format as CSV/JSON for CRM import or sequence loading.

### Example: Solicitors in Derry

```python
import requests, json, os

API_KEY = os.environ["APOLLO_API_KEY"]
results = []
for page in range(1, 4):
    r = requests.post("https://api.apollo.io/api/v1/people/search", json={
        "api_key": API_KEY,
        "person_titles": ["Partner", "Managing Partner", "Director", "Owner"],
        "q_organization_keyword_tags": ["legal services", "solicitors"],
        "person_locations": ["Derry, United Kingdom"],
        "organization_num_employees_ranges": ["1,50"],
        "page": page, "per_page": 100
    })
    data = r.json()
    results.extend(data.get("people", []))
    if not data.get("people"):
        break

print(f"Found {len(results)} contacts")
for p in results[:5]:
    print(f"  {p.get('name')} — {p.get('title')} @ {p.get('organization',{}).get('name')}")
```

## Email Sequence Templates

### Sequence 1: AI Audit Hook (3-touch)

**Email 1 — Day 0: The Hook**
> Subject: Quick question about [Company Name]'s admin workload
>
> Hi [First Name],
>
> I work with [industry] firms across Northern Ireland helping them cut 10+ hours/week of admin using AI automation — things like client intake, document processing, and follow-ups.
>
> Would a quick 15-min AI audit be useful? We map your current workflows and show exactly where automation saves time. No cost, no obligation.
>
> Best,
> [Sender]

**Email 2 — Day 3: Value Add**
> Subject: Re: Quick question about [Company Name]'s admin workload
>
> Hi [First Name],
>
> Just a quick follow-up — we recently helped a [industry] firm in [location] automate their [specific process], saving them ~12 hours/week.
>
> Happy to share the case study if useful. Or if a 15-min call works better, here's my calendar: [link]
>
> [Sender]

**Email 3 — Day 7: Breakup**
> Subject: Re: Quick question about [Company Name]'s admin workload
>
> Hi [First Name],
>
> I'll keep this brief — if now's not the right time, no worries at all.
>
> If automating admin work becomes a priority, I'm here. Just reply to this email anytime.
>
> [Sender]

### Variable Mapping
| Variable | Apollo Field |
|----------|-------------|
| `[First Name]` | `person.first_name` |
| `[Company Name]` | `person.organization.name` |
| `[industry]` | Derive from `organization.industry` |
| `[location]` | `person.city` or `person.state` |

## Rate Limits & Best Practices

- **Rate limit**: ~50 requests/minute on standard plans. Add 1-2s delay between calls.
- **Daily credits**: Check your Apollo plan — each search/enrichment costs credits.
- **Pagination**: Max 100 `per_page`. Total results capped at ~10,000 per query.
- **Enrich sparingly**: Only enrich contacts you'll actually outreach to.
- **Validate emails**: Apollo provides email confidence scores — prioritise `"verified"`.
- **GDPR**: For UK/NI outreach, ensure legitimate interest basis. Include opt-out in all emails.
- **Warm domains**: Send from warmed-up email domains. Start with <50 emails/day, ramp slowly.
- **Personalise**: Use Apollo data (company, title, location) to customise templates above.
