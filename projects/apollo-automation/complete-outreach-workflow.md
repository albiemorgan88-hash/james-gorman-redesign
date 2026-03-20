# Complete Outreach Workflow - Derry Solicitors

## Overview
- **9 solicitor firms** identified
- **9 showcases** successfully generated  
- **0 showcases** failed to generate

## Phase 1: Email Discovery ✅ MANUAL STEP REQUIRED

For each firm, we need to find contact emails:

### Methods:
1. **Website contact pages** - Visit firm website, look for contact/about pages
2. **LinkedIn outreach** - Connect with contacts, get emails via DM
3. **Phone calls** - Call and ask for email contact for business enquiries
4. **Google Business Profile** - Check if email is listed
5. **Companies House** - May have director emails

### Tracking:
Update `outreach-tracking.json` as you find emails:
```json
{
  "email_address": "contact@firmname.co.uk",
  "email_found": true
}
```

## Phase 2: Email Sending

Once emails are found, use the templates in `email-templates.json`:

### Sequence:
1. **Day 0**: Send `initial_outreach` template  
2. **Day 3**: Send `follow_up_1` template (if no response)
3. **Day 7**: Send `follow_up_2` template (final follow-up)

### Variables to replace:
- `{firm_name}` - From tracking data
- `{contact_name}` - First name of primary contact  
- `{showcase_url}` - From email-to-showcase-mapping.json

## Phase 3: Response Tracking

Update `outreach-tracking.json` for each response:
- `outreach_sent: true` when email sent
- `response_received: true` when they reply
- `call_booked: true` when call scheduled
- Add notes about their interest level

## Phase 4: Automation (Future)

Once this process is proven, automate:
1. Email finding via Apollo enrichment or ZoomInfo
2. Automated email sending via SMTP/Mailgun
3. Response tracking and follow-up sequences
4. CRM integration for lead management

## Files Reference
- `outreach-tracking.json` - Main tracking spreadsheet  
- `email-templates.json` - Email templates for all sequences
- `email-to-showcase-mapping.json` - Showcase URL mapping
- `derry-solicitor-firms.json` - Raw firm data from Apollo

## Success Metrics
- **Email response rate** (target: >15%)
- **Call booking rate** (target: >5%)  
- **Conversion to client** (target: >2%)
- **Time saved** vs manual prospecting

Start with 5 firms to test the process, then scale to all 9.
