# Blue Canvas Business Development Machine 🚀

A systematic, repeatable approach for local SME lead generation and outreach targeting £500-2500/month client acquisition.

## 📊 System Overview

**Goal:** Systematic client acquisition without "hustling" - just execute the system
**Target:** 1 new client per week (£500-2500/month each)
**Focus:** Northern Ireland + Southern Ireland expansion

## 🏗️ System Components

### 1. Lead Generation Engine
- **Apollo.io integration** for NI/Ireland SMEs 
- **Local lead scraper** using Google Maps + Companies House API
- **Target sectors:** accountants, solicitors, estate agents, beauty salons, restaurants
- **Lead scoring:** 1-10 based on digital maturity gaps

### 2. Contact Enrichment
- Find decision maker emails + LinkedIn profiles
- Identify business pain points (old website, no online booking, poor SEO)
- Company intelligence (size, revenue estimates, competitor analysis)

### 3. Outreach Sequences
- **Email templates** for different sectors (value-first, not sales-y)
- **LinkedIn connection requests** + follow-up automation
- **Client showcase links** personalized per prospect
- **Multi-touch sequences** with smart timing

### 4. Pipeline Management
- **Built-in CRM** with lead scoring and qualification
- **Follow-up automation** and conversion tracking
- **Pipeline reporting** and performance analytics

### 5. Weekly Execution Routine
- **Monday:** Generate 50 new leads via Apollo + local scraper
- **Tuesday-Thursday:** Outreach (emails + LinkedIn) 
- **Friday:** Follow-ups and pipeline review
- **Weekly target:** 5 qualified conversations, 1 new client

## 🚀 Quick Start

### 1. Setup
```bash
cd /Users/philsagent/.openclaw/workspace/projects/biz-dev/blue-canvas
pip3 install requests dataclasses
```

### 2. Configure Environment
Add to `~/.zprofile`:
```bash
export APOLLO_API_KEY="your_apollo_api_key"
export GMAIL_USER="phil@bluecanvas.ai" 
export GMAIL_APP_PASSWORD="your_gmail_app_password"
```

### 3. Test System
```bash
cd scripts
python3 test_system.py
```

### 4. Start Weekly Routine
```bash
python3 weekly_routine.py monday
```

## 📅 Weekly Execution Schedule

| Day | Activity | Time | Scripts |
|-----|----------|------|---------|
| **Monday** | Lead Generation | 30 mins | `weekly_routine.py monday` |
| **Tuesday** | Email Outreach | 45 mins | `weekly_routine.py tuesday` |
| **Wednesday** | LinkedIn + Follow-ups | 45 mins | `weekly_routine.py wednesday` |
| **Thursday** | Content + Final Outreach | 60 mins | `weekly_routine.py thursday` |
| **Friday** | Pipeline Review | 30 mins | `weekly_routine.py friday` |

**Total time investment:** 3.5 hours/week

## 📈 Performance Targets

### Weekly Targets
- ✅ 50 new leads generated
- ✅ 60+ outreach attempts (email + LinkedIn)
- ✅ 5 qualified conversations
- ✅ 1 proposal sent
- 🎯 **Goal: 1 new client per week**

### Monthly Targets
- ✅ 200 new leads
- ✅ 240+ outreach attempts
- ✅ 20 qualified conversations  
- ✅ 4-6 proposals sent
- 🎯 **Goal: 4-5 new clients (£2000-10000/month revenue)**

## 🎯 Lead Scoring System

**High Value (8-10 points):**
- No website or very poor website
- High-need industry (accounting, legal, beauty)
- Local to NI/Ireland
- Small-medium business (5-50 employees)

**Medium Value (5-7 points):**
- Has website but missing key features
- Moderate digital presence

**Low Priority (1-4 points):**
- Modern website with good features
- Strong digital presence already

## 📁 File Structure

```
blue-canvas/
├── scripts/
│   ├── lead_generator.py      # Apollo.io + local lead gen
│   ├── contact_enricher.py    # Enrich with contact info
│   ├── outreach_engine.py     # Email & LinkedIn automation
│   ├── pipeline_manager.py    # CRM and pipeline tracking
│   ├── weekly_routine.py      # Weekly execution orchestrator
│   └── test_system.py         # System validation
├── templates/
│   └── email_templates.py     # Industry-specific templates
├── data/                      # Generated leads and pipeline
├── docs/
│   └── SETUP.md              # Detailed setup guide
└── README.md                 # This file
```

## 🔧 System Features

### Smart Lead Generation
- **Industry targeting:** Focus on high-value sectors
- **Geographic filtering:** NI + Ireland with local expansion
- **Digital gap analysis:** Target businesses with weak online presence
- **Pain point identification:** Automated website analysis

### Personalized Outreach
- **Industry-specific templates:** Accounting, legal, beauty, restaurant, etc.
- **Pain point personalization:** Address specific gaps found
- **Multi-channel approach:** Email + LinkedIn for maximum reach
- **Smart timing:** Avoid over-contact, optimize response rates

### Pipeline Automation
- **Stage progression:** Lead → Contacted → Responded → Qualified → Proposal → Won
- **Probability scoring:** Dynamic win probability based on engagement
- **Follow-up reminders:** Never lose track of prospects
- **Performance analytics:** Track conversion rates and ROI

## 💰 Revenue Model

**Target Client Value:**
- Small businesses: £500-800/month
- Medium businesses: £800-1500/month  
- Larger practices: £1500-2500/month

**Revenue Progression:**
- Month 1: 2-3 clients (£1000-2000/month)
- Month 3: 8-10 clients (£4000-8000/month)
- Month 6: 15-20 clients (£8000-15000/month)
- Month 12: 25-30 clients (£12000-25000/month)

**System ROI:** 
- Time investment: 3.5 hours/week
- Revenue per hour: £500-1500/hour (after month 3)

## 🎓 Success Factors

1. **Consistency:** Execute the weekly routine religiously
2. **Quality over quantity:** Focus on high-scoring prospects first
3. **Personalization:** Use pain points to craft relevant messages
4. **Follow-up discipline:** Most deals happen in follow-ups 2-4
5. **Continuous optimization:** Track what works, double down

## 📞 Next Steps

1. **Week 1:** Setup and test system (dry run mode)
2. **Week 2:** Go live with reduced volume (10 emails/day)
3. **Week 3+:** Full volume execution (25 emails/day)
4. **Month 2:** Scale to southern Ireland markets
5. **Month 3:** Add additional lead sources and channels

## ⚠️ Important Notes

- **Compliance:** Follow GDPR guidelines for data storage
- **Rate limiting:** Scripts include delays to avoid API limits
- **Backup:** All data saved to JSON/CSV for easy backup
- **Testing:** Always run dry-run mode first

---

**Built for Blue Canvas by Albie** 🔧  
*Systematic client acquisition without the hustle*