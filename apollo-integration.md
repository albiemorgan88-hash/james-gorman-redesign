# Apollo Integration - philip@bluecanvas.ai
**Timeline:** Week 3 of warmup (April 2-8, 2026)

## Prerequisites (Must be Complete)
- ✅ 14+ days of email warmup completed
- ✅ Sender reputation established (>90% inbox placement)
- ✅ DKIM/SPF/DMARC properly configured
- ✅ <1% spam rate maintained
- ✅ Open rate >25% on prospect emails

## Phase 1: Apollo Account Setup

### 1. Connect Email Domain
**Location:** Apollo Settings > Email Accounts
1. **Add Email:** philip@bluecanvas.ai
2. **Verify Domain:** Confirm DNS ownership
3. **Authentication:** Verify SPF includes Apollo
4. **Testing:** Send Apollo test emails to safe recipients

### 2. Custom Tracking Domain Setup
**Purpose:** Brand consistency + better deliverability

#### DNS Configuration
**Record Type:** CNAME
**Host:** `track.bluecanvas.ai`
**Value:** `tracking.apollo.io` (or Apollo-provided)
**TTL:** 3600

#### Apollo Configuration
1. **Settings:** Tracking > Custom Domain
2. **Add Domain:** track.bluecanvas.ai
3. **Verify:** Confirm SSL certificate
4. **Test:** Verify click tracking works

### 3. Sending Limits Configuration
**Start Conservative:** Build trust gradually

#### Week 3 Limits (April 2-8)
- **Daily Limit:** 30 emails/day
- **Hourly Limit:** 5 emails/hour
- **Warm-up Mode:** Enabled
- **Auto-throttling:** Enabled

#### Week 4+ Scaling
- **Daily Limit:** 50-75 emails/day
- **Hourly Limit:** 8-10 emails/hour
- **Monitor:** Deliverability metrics daily

## Phase 2: Sequence Development

### Client Showcase Sequence
**Target:** Local NI businesses with weak web presence

#### Email 1: Introduction + Value Prop
```
Subject: Quick question about [Company] website

Hi [First Name],

I noticed [Company] on Google and was impressed with [specific business detail].

Quick question - are you happy with how your website performs for bringing in new customers?

I'm Phil Patterson from Blue Canvas, an AI consultancy here in Northern Ireland. We help local businesses like yours increase online visibility and generate more leads.

Would you be open to a quick 5-minute call this week to discuss how we could help [Company] stand out online?

Best regards,
Phil Patterson
Blue Canvas AI Consultancy
philip@bluecanvas.ai
028 [phone]
```

#### Email 2: Showcase (3 days later)
```
Subject: [Company] website showcase - 2 minutes

Hi [First Name],

I put together a quick showcase showing how [Company] could improve its online presence.

This 2-minute presentation covers:
✓ Current website audit
✓ Local SEO opportunities  
✓ 3 quick wins for more customers

View your showcase: [Custom Showcase URL]

No obligation - just wanted to share some ideas that could help [Company] get more visibility locally.

Worth a quick look?

Best,
Phil
```

#### Email 3: Social Proof (2 days later)
```
Subject: How [Similar Business] increased enquiries by 40%

[First Name],

Just wrapped up a project with [Similar Local Business] - helped them increase online enquiries by 40% in 8 weeks.

The approach was simple:
• Fixed their Google Business Profile  
• Improved their website for local searches
• Set up automated lead capture

Wondering if [Company] might benefit from something similar?

Happy to share more details on a brief call.

Phil
```

### Follow-up Sequence Logic
- **Email 1:** Send immediately
- **Email 2:** 3 days later (if no reply)
- **Email 3:** 5 days after Email 2 (if no reply)
- **Final Touch:** 7 days after Email 3 (if no reply)

## Phase 3: List Building & Targeting

### Primary Target: Local NI Businesses
**Criteria:**
- **Location:** Northern Ireland (Derry, Belfast, surrounding areas)
- **Business Type:** Professional services, retail, hospitality
- **Employee Count:** 5-50 employees
- **Website Issues:** Poor design, no mobile optimization, weak SEO

### Apollo Search Filters
```
Location: Northern Ireland, UK
Company Size: 5-50 employees
Industry: Professional Services, Retail, Hospitality, Healthcare
Job Titles: Owner, Managing Director, Marketing Manager
Exclude: Enterprise (500+ employees), Startups (<1 year)
```

### List Segmentation
1. **Tier 1:** 500 high-quality prospects (immediate outreach)
2. **Tier 2:** 1000 medium-fit prospects (follow-up campaigns)
3. **Tier 3:** 2000 broader prospects (nurture sequences)

## Phase 4: Campaign Launch Protocol

### Pre-Launch Checklist
- [ ] DNS records verified (SPF includes Apollo)
- [ ] Tracking domain active
- [ ] Test emails sent successfully
- [ ] Showcase URLs generated and tested
- [ ] Prospect lists uploaded and segmented
- [ ] Sequences configured and scheduled
- [ ] Sending limits set appropriately
- [ ] Monitoring tools configured

### Launch Day (April 2, 2026)
**Morning (9 AM):**
1. **Final Test:** Send to safe recipients
2. **Monitor:** Check deliverability for 2 hours
3. **Launch:** Start first sequence (10 emails max)

**Afternoon Check:**
- Inbox placement verification
- No bounce/spam reports
- Apollo analytics review

**Evening Review:**
- Daily metrics assessment
- Any adjustments needed for tomorrow

### Week 3 Schedule
- **Day 1:** 10 emails (test group)
- **Day 2:** 15 emails (if Day 1 successful)
- **Day 3:** 20 emails
- **Day 4:** 25 emails  
- **Day 5:** 30 emails (target volume)
- **Weekend:** Light volume (10-15 emails)

## Phase 5: Performance Monitoring

### Apollo-Specific Metrics
- **Open Rate:** Target 25%+ (cold prospects)
- **Click Rate:** Target 2%+ (showcase links)
- **Reply Rate:** Target 2-5%
- **Meeting Booking Rate:** Target 0.5-1%
- **Bounce Rate:** Keep <2%

### Daily Monitoring Dashboard
**Apollo Analytics:**
- Sequence performance
- Individual email metrics
- List quality assessment
- Engagement trends

**External Tools:**
- Google Postmaster reputation
- MXToolbox deliverability  
- Mail-Tester scoring
- Spam folder checks

### Weekly Review Process
**Every Tuesday Morning:**
1. **Performance Review:** Metrics vs targets
2. **Content Optimization:** Subject lines, body copy
3. **List Refinement:** Remove poor performers
4. **Sequence Adjustment:** Timing, frequency, content
5. **Scaling Decisions:** Volume increase or maintain

## Emergency Protocols

### If Deliverability Drops
1. **Immediate:** Pause all Apollo sequences
2. **Investigate:** Check reputation scores
3. **Diagnose:** Review recent emails for issues
4. **Fix:** Address root cause
5. **Test:** Send to safe recipients only
6. **Resume:** Gradually restart with reduced volume

### If High Spam Reports
1. **Stop Sending:** Pause immediately
2. **Review Content:** Check for spam triggers
3. **Clean Lists:** Remove problematic addresses
4. **Wait 24 Hours:** Let metrics stabilize
5. **Restart Slowly:** 50% volume reduction

---
**Success Target:** 50+ qualified meetings booked in first 30 days of Apollo campaigns.