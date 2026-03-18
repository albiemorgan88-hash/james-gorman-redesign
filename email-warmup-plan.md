# Email Warmup Plan - philip@bluecanvas.ai
**Target:** Apollo-ready email domain in 21 days | **Start Date:** March 19, 2026

## Phase 1: DNS & Authentication (URGENT - Tonight)

### Current Status ✅❌❌
- ✅ **SPF**: Configured (`v=spf1 include:_spf.google.com ~all`)
- ❌ **DKIM**: Missing (Google Workspace DKIM not enabled)
- ❌ **DMARC**: Missing (critical for inbox placement)

### Required Actions (Tonight)
1. **Enable DKIM in Google Workspace Admin Console**
   - Login to admin.google.com
   - Security > Email authentication > DKIM
   - Generate new record for bluecanvas.ai
   - Add TXT record to DNS (GoDaddy)

2. **Add DMARC Policy**
   - Create TXT record: `_dmarc.bluecanvas.ai`
   - Value: `v=DMARC1; p=quarantine; rua=mailto:dmarc@bluecanvas.ai; ruf=mailto:dmarc@bluecanvas.ai; fo=1`
   - Start with quarantine policy, escalate to reject after warmup

3. **Update SPF for Apollo**
   - Current: `v=spf1 include:_spf.google.com ~all`
   - Add Apollo: `v=spf1 include:_spf.google.com include:spf.apollo.io ~all`

## Phase 2: Warmup Schedule (21 Days)

### Week 1 (Days 1-7): Foundation Building
**Volume:** 5-10 emails/day
**Recipients:** Safe, guaranteed engagement
- PJ → Stacey (daily check-ins)
- PJ → Albie test accounts
- Internal Blue Canvas emails
- Close friends/colleagues who will engage

**Email Types:**
- Personal check-ins
- Project updates
- Reply threads
- Forward interesting articles

### Week 2 (Days 8-14): Volume Increase
**Volume:** 15-20 emails/day
**Recipients:** Safe + Low-risk prospects
- Continue Week 1 recipients
- Add warm prospects (existing relationships)
- Monitor spam folder placement
- Track open/reply rates

### Week 3 (Days 15-21): Campaign Ready
**Volume:** 25-30 emails/day
**Recipients:** Full prospect outreach
- Apollo sequences go live
- Client showcase emails
- Lead generation campaigns

## Phase 3: Monitoring Dashboard

### Daily Metrics
- **Spam Rate:** <1% (critical)
- **Open Rate:** >30% (healthy sender rep)
- **Reply Rate:** 2-5% (engagement signal)
- **Bounce Rate:** <2%

### Tools & Monitoring
- Google Postmaster Tools
- MXToolbox deliverability check
- Mail-Tester.com scoring
- Apollo analytics

## Phase 4: Apollo Integration

### Setup Requirements
1. **Custom Tracking Domain**
   - Subdomain: track.bluecanvas.ai
   - SSL certificate
   - CNAME to Apollo

2. **Apollo Configuration**
   - Connect philip@bluecanvas.ai
   - Verify domain ownership
   - Configure sending limits (start conservative)

3. **Sequence Testing**
   - Test sequences with safe recipients
   - Verify showcase URL integration
   - Monitor deliverability

## Success Metrics (Day 21)
- ✅ All DNS records properly configured
- ✅ Sender reputation established
- ✅ <1% spam rate maintained
- ✅ Apollo sequences operational
- ✅ Ready for 50+ daily outreach emails

## Risk Mitigation
- **IP Warming:** Gradual volume increase
- **Content Variation:** Different email types/subjects
- **Engagement Focus:** Personal touch in early emails
- **Reputation Monitoring:** Daily deliverability checks
- **Backup Plan:** Alternative domains if reputation damaged

## Implementation Timeline
- **Tonight:** DNS/DKIM/DMARC setup
- **Tomorrow:** Start warmup emails (5/day)
- **Week 2:** Scale to 15-20/day + monitor
- **Week 3:** Apollo sequences live (25-30/day)
- **Ongoing:** Daily monitoring + optimization

---
**Next Steps:** Complete DNS authentication tonight, begin warmup tomorrow morning with personal emails to Stacey/Albie.