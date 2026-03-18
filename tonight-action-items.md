# URGENT: Tonight Action Items - Email Authentication Setup
**Deadline:** Before starting warmup tomorrow (March 19, 2026)

## Critical DNS Changes Required

### 1. Enable DKIM in Google Workspace (FIRST)
**Priority:** URGENT - Must be done first

**Steps:**
1. **Login:** admin.google.com with Blue Canvas admin account
2. **Navigate:** Security > Email authentication > DKIM  
3. **Select Domain:** bluecanvas.ai
4. **Action:** Click "Generate new record" 
5. **Copy:** The TXT record details provided
6. **Note:** The selector name (usually 'google' or random string)

**Expected Output:**
- **Host:** `[selector]._domainkey` (e.g., `google._domainkey`)
- **Value:** Long string starting with `v=DKIM1; k=rsa; p=...`

### 2. Add DKIM Record to GoDaddy DNS
**After completing Step 1:**

1. **Login:** GoDaddy account
2. **Navigate:** My Products > DNS > Manage DNS for bluecanvas.ai
3. **Add Record:**
   - **Type:** TXT
   - **Host:** [selector from Google]._domainkey (NO domain suffix)
   - **Value:** [DKIM key from Google] 
   - **TTL:** 3600 (1 hour)

### 3. Add DMARC Policy Record
**Add to GoDaddy DNS:**

- **Type:** TXT
- **Host:** `_dmarc` (NO domain suffix)
- **Value:** `v=DMARC1; p=quarantine; rua=mailto:dmarc@bluecanvas.ai; ruf=mailto:dmarc@bluecanvas.ai; fo=1; adkim=r; aspf=r`
- **TTL:** 3600

### 4. Verification (30 minutes after DNS changes)
```bash
# Test DKIM (replace 'google' with actual selector)
dig TXT google._domainkey.bluecanvas.ai

# Test DMARC  
dig TXT _dmarc.bluecanvas.ai

# Should see the new records
```

## Email Account Setup

### 1. Test Email Deliverability
**Send test emails to:**
- Personal Gmail account
- Personal Outlook account  
- Yahoo account (create if needed)

**Test Email Template:**
```
Subject: Test email from Blue Canvas
Hi,
This is a test email to verify deliverability from philip@bluecanvas.ai.
Please ignore.
Thanks,
Phil
```

### 2. Check Current Email Works
**Verify philip@bluecanvas.ai:**
- Can send emails
- Can receive emails
- No existing deliverability issues
- Google Workspace properly configured

## Pre-Warmup Checklist

### Technical Foundation
- [ ] DKIM enabled in Google Workspace
- [ ] DKIM TXT record added to DNS
- [ ] DMARC TXT record added to DNS
- [ ] DNS propagation verified (30+ minutes)
- [ ] Test emails sent successfully
- [ ] Inbox placement confirmed (not spam folder)

### Contact List Preparation  
- [ ] Stacey's email confirmed: [get actual email]
- [ ] Albie test accounts ready: 
  - [ ] albietest@gmail.com
  - [ ] albietest@outlook.com
- [ ] 2-3 close contacts identified for Week 1
- [ ] Confirmed these contacts will engage positively

### Email Client Setup
- [ ] philip@bluecanvas.ai configured in preferred client
- [ ] Signature set up professionally
- [ ] Auto-reply disabled
- [ ] Send settings optimized

## Tomorrow's Launch Prep

### 5 Email Schedule (March 19)
1. **9 AM:** PJ → Stacey (personal check-in)
2. **11 AM:** PJ → albietest@gmail.com
3. **2 PM:** PJ → close business contact
4. **4 PM:** PJ → albietest@outlook.com  
5. **6 PM:** PJ → another close contact

### Email Tracking Setup
- [ ] Gmail/Outlook read receipts noted
- [ ] Simple spreadsheet for tracking:
  - Time sent
  - Recipient
  - Subject line
  - Response received (Y/N)
  - Delivery status

## Risk Assessment

### What Could Go Wrong
❌ **DKIM Setup Fails:** Apollo integration impossible
❌ **DMARC Too Strict:** Emails rejected immediately  
❌ **DNS Propagation Delay:** Records not active by morning
❌ **Email Client Issues:** Can't send/receive properly

### Contingency Plans
✅ **DKIM Issues:** Use Google support documentation
✅ **DMARC Problems:** Start with `p=none` policy instead
✅ **DNS Delays:** Wait 24 hours before starting warmup
✅ **Email Problems:** Verify Google Workspace billing/status

## Success Criteria for Tonight

### Must Achieve:
- [x] DKIM enabled and DNS record added
- [x] DMARC policy configured  
- [x] DNS records propagating
- [x] Test emails sent successfully
- [x] Inbox placement confirmed

### Tomorrow Ready:
- [x] 5 warmup emails scheduled
- [x] Recipients confirmed
- [x] Tracking system ready
- [x] No technical blockers

---

## CRITICAL WARNING
**Do NOT start sending warmup emails until:**
1. DKIM is fully working (dig command shows record)
2. DMARC policy is active
3. Test emails land in inbox (not spam)
4. All DNS changes have propagated (30+ minutes)

**Starting warmup with broken authentication = instant reputation damage**

---

**Next:** Begin warmup tomorrow morning with 5 personal emails. Scale gradually while monitoring every metric.