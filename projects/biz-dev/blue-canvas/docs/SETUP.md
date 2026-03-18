# Blue Canvas Biz Dev Machine Setup Guide

## 🚀 Quick Start

The Blue Canvas business development machine is a systematic approach to generating £500-2500/month in new client revenue through automated lead generation and outreach.

## 📁 Directory Structure

```
projects/biz-dev/blue-canvas/
├── scripts/
│   ├── lead_generator.py      # Apollo.io + local lead generation
│   ├── contact_enricher.py    # Enrich leads with contact info & pain points  
│   ├── outreach_engine.py     # Email & LinkedIn outreach automation
│   ├── pipeline_manager.py    # CRM and pipeline tracking
│   └── weekly_routine.py      # Weekly execution orchestrator
├── templates/
│   └── email_templates.py     # Industry-specific email templates
├── data/                      # Generated leads and pipeline data
└── docs/
    └── SETUP.md              # This file
```

## 🔧 Environment Setup

### 1. Python Dependencies

```bash
pip3 install requests dataclasses
```

### 2. API Keys & Credentials

Set these environment variables in your `~/.zprofile`:

```bash
# Apollo.io API Key (for lead generation)
export APOLLO_API_KEY="your_apollo_api_key_here"

# Gmail App Password (for email outreach)
export GMAIL_USER="phil@bluecanvas.ai"
export GMAIL_APP_PASSWORD="your_gmail_app_password"
```

**Getting Apollo.io API Key:**
1. Sign up at apollo.io
2. Go to Settings → Integrations → API
3. Generate API key

**Getting Gmail App Password:**
1. Enable 2-factor authentication on Gmail
2. Go to Google Account Settings → Security → App passwords
3. Generate app password for "Mail"

## 📊 CRM Recommendation

For PJ's needs, recommend **Airtable** as the CRM:

**Pros:**
- Free for small teams
- Easy to customize views and fields
- Great integration capabilities
- Can import from our CSV exports
- Visual pipeline management

**Alternative:** HubSpot (free tier) if you need more advanced automation

## 🎯 Weekly Execution Routine

### Monday: Lead Generation (30 mins)
```bash
cd /Users/philsagent/.openclaw/workspace/projects/biz-dev/blue-canvas/scripts
python3 weekly_routine.py monday
```

**What it does:**
- Generates 50 new leads via Apollo.io
- Enriches with contact details and pain point analysis
- Adds to pipeline with scoring

### Tuesday: Email Outreach (45 mins)
```bash
python3 weekly_routine.py tuesday
```

**What it does:**
- Sends 25 personalized emails to top prospects
- Generates LinkedIn prospect list
- Logs all outreach attempts

### Wednesday: LinkedIn + Follow-ups (45 mins)
```bash
python3 weekly_routine.py wednesday
```

**Manual tasks:**
- Send 15-20 LinkedIn connection requests (use generated CSV)
- Send email follow-ups to 4+ day non-responders

### Thursday: Content + Final Outreach (60 mins)
```bash
python3 weekly_routine.py thursday
```

**Tasks:**
- Create 3-5 client showcase sites for top prospects
- Send LinkedIn follow-up messages with showcase links

### Friday: Pipeline Review (30 mins)
```bash
python3 weekly_routine.py friday
```

**Tasks:**
- Review all week's responses
- Schedule discovery calls
- Send proposals to qualified leads
- Plan next week's approach

## 📈 Success Metrics

**Weekly Targets:**
- 50 new leads generated
- 60+ outreach attempts (email + LinkedIn)
- 5 qualified conversations
- 1 proposal sent
- **Goal: 1 new client per week (£500-2500/month)**

**Monthly Targets:**
- 200 new leads
- 240+ outreach attempts  
- 20 qualified conversations
- 4-6 proposals sent
- **4-5 new clients (£2000-10000/month revenue)**

## 🎯 Lead Scoring System

Leads are scored 1-10 based on digital maturity gaps:

**High Value (8-10 points):**
- No website or very poor website
- High-need industry (accounting, legal, beauty)
- Local to NI/Ireland
- Small-medium business (5-50 employees)
- Multiple pain points identified

**Medium Value (5-7 points):**
- Has website but missing key features
- Moderate digital presence
- Good industry fit

**Low Priority (1-4 points):**
- Modern website with good features
- Strong digital presence already
- Large company with IT resources

## 📝 CRM Integration

### Importing to Airtable:

1. Export pipeline report: `python3 pipeline_manager.py`
2. Import the generated CSV to Airtable
3. Create views:
   - "Hot Prospects" (score 8+)
   - "This Week's Outreach"
   - "Overdue Follow-ups"
   - "Proposal Stage"

### Tracking Fields:

- Company Name
- Decision Maker
- Email/Phone
- Industry & Location
- Digital Maturity Score (1-10)
- Pipeline Stage
- Last Contact Date
- Next Action & Date
- Estimated Value
- Pain Points
- Notes

## 🔄 Automation Rules

**Email Sequences:**
- Initial email → Wait 4 days → Follow-up email → Wait 1 week → Final email
- Max 3 touches per prospect via email

**LinkedIn Sequences:**
- Connection request → Wait 2-3 days → Follow-up message
- Include showcase links in follow-ups for high-value prospects

**Pipeline Progression:**
- Lead → Contacted → Responded → Qualified → Proposal → Won/Lost
- Automatic probability updates at each stage

## 🚨 Important Notes

1. **Rate Limiting:** Scripts include delays to avoid hitting API limits
2. **Dry Run Mode:** Always test with `dry_run=True` first
3. **Data Backup:** All data saved to JSON/CSV for easy backup
4. **Compliance:** Follow GDPR guidelines for data storage and contact

## 🆘 Troubleshooting

**Apollo API Issues:**
- Check API key is set correctly
- Verify you haven't hit monthly search limits
- Try reducing batch sizes

**Email Delivery Issues:**
- Ensure Gmail app password is correct
- Check spam folder for test emails
- Consider using dedicated email service for higher volume

**Pipeline Issues:**
- Check file permissions in data/ directory
- Verify JSON files aren't corrupted
- Re-import from latest enriched leads if needed

## 🎓 Training & Optimization

**Week 1-2:** Run in dry-run mode, manual review all outputs
**Week 3-4:** Go live with reduced volumes (10 emails/day)
**Week 5+:** Full volume execution (25 emails/day)

**Monthly Reviews:**
- Analyze conversion rates by industry/location
- Optimize email templates based on response rates
- Adjust lead scoring criteria
- Update target industries based on success

## 📞 Support

For issues or optimization:
1. Check logs in terminal output
2. Review data files in `/data` directory
3. Test individual scripts before running weekly routine
4. Contact Blue Canvas team for advanced customization