# Google Ads API - Design Documentation
## Blue Canvas AI Consultancy

### 1. Overview
Blue Canvas is an AI consultancy based in Northern Ireland. We are building an internal automated reporting and campaign management system to manage our own Google Ads account (801-851-4760) via the Google Ads API.

### 2. Purpose
- Automated daily performance reporting (spend, clicks, impressions, CTR, CPC)
- Keyword performance monitoring and optimisation recommendations
- Campaign budget tracking and alerts
- Search terms analysis for negative keyword management
- Weekly and monthly performance summaries

### 3. Architecture
- **Client:** Internal CLI tool running on a Mac Mini server
- **Authentication:** OAuth 2.0 Desktop App flow with refresh token
- **Manager Account:** 396-378-6948
- **Ad Account:** 801-851-4760
- **API Version:** v19
- **Frequency:** Daily automated queries (1-2 API calls per day)

### 4. API Usage
We will use the following Google Ads API services:
- **GoogleAdsService.Search** - Query campaign, ad group, keyword, and search term performance metrics
- **KeywordPlanService** - Keyword research and planning for campaign expansion

### 5. Data Flow
1. Scheduled job runs daily at 5:00 PM GMT
2. Authenticates via OAuth2 refresh token
3. Queries campaign performance data via GAQL
4. Generates a human-readable performance summary
5. Delivers report to business owner via messaging platform

### 6. Rate Limiting
- Expected API calls: 2-5 per day
- Well within standard rate limits
- No bulk operations or high-frequency polling

### 7. Data Handling
- Performance data is used for internal reporting only
- No customer PII is accessed or stored
- No data is shared with third parties
- Reports are generated for the account owner only

### 8. Security
- OAuth credentials stored as environment variables on a secured server
- Refresh tokens are not exposed in logs or reports
- Access limited to a single manager account managing a single ad account

### 9. Contact
- **Company:** Blue Canvas
- **Website:** bluecanvas.ai
- **Email:** contact@bluecanvas.ai
- **Location:** Derry, Northern Ireland
