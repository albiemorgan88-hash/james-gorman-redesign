# Webflow API v2 — Detailed Reference

Full docs: https://developers.webflow.com/data/reference/rest-introduction

## Authentication

All requests require Bearer token:
```
Authorization: Bearer <WEBFLOW_API_TOKEN>
```

Generate tokens at: https://webflow.com/dashboard/account/integrations

## Sites

```
GET /v2/sites
GET /v2/sites/{site_id}
POST /v2/sites/{site_id}/publish
  Body: { "domains": ["www.bluecanvas.ai"] }  // optional, publishes to all if omitted
```

## Pages

```
GET    /v2/sites/{site_id}/pages
GET    /v2/sites/{site_id}/pages/{page_id}
PUT    /v2/sites/{site_id}/pages/{page_id}
```

### Page Update Fields

```json
{
  "title": "Page Title (browser tab)",
  "slug": "page-url-slug",
  "seo": {
    "title": "Meta title for search engines",
    "description": "Meta description for search engines"
  },
  "openGraph": {
    "title": "Social sharing title",
    "titleCopied": false,
    "description": "Social sharing description",
    "descriptionCopied": false
  }
}
```

## Collections (CMS)

```
GET    /v2/sites/{site_id}/collections
GET    /v2/collections/{collection_id}
GET    /v2/collections/{collection_id}/fields
```

## Collection Items

```
GET    /v2/collections/{collection_id}/items?limit=100&offset=0
GET    /v2/collections/{collection_id}/items/{item_id}
POST   /v2/collections/{collection_id}/items
PATCH  /v2/collections/{collection_id}/items/{item_id}
DELETE /v2/collections/{collection_id}/items/{item_id}
```

### Create Item Body

```json
{
  "fieldData": {
    "name": "Item Name (required)",
    "slug": "url-slug (required)",
    "_archived": false,
    "_draft": false,
    "custom-field-slug": "value"
  }
}
```

### Publish Items

```
POST /v2/collections/{collection_id}/items/publish
Body: { "itemIds": ["id1", "id2"] }
```

## Rate Limits

- 60 requests per minute per token
- Bulk operations: batch into groups of 100 items max
- 429 response = rate limited, respect `Retry-After` header

## Pagination

Most list endpoints support:
- `limit` (default 100, max 100)
- `offset` (for pagination)

## Common CMS Blog Field Slugs

These vary per site — always verify with `GET /collections/{id}/fields`:
- `name` — post title
- `slug` — URL slug
- `post-body` — rich text HTML
- `post-summary` — excerpt
- `meta-title` — SEO title
- `meta-description` — SEO description  
- `main-image` — featured image `{ "url": "..." }`
- `author` — reference to authors collection
- `category` — reference to categories collection
- `publish-date` — ISO date string

## Error Codes

| Code | Meaning |
|------|---------|
| 400 | Bad request / validation error |
| 401 | Invalid or expired token |
| 403 | Insufficient permissions |
| 404 | Resource not found |
| 409 | Conflict (e.g. duplicate slug) |
| 429 | Rate limited |
| 500 | Webflow server error |
