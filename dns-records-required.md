# DNS Records Required - bluecanvas.ai

## Current Status
- **Domain Registrar:** GoDaddy (based on SOA record)
- **Email Provider:** Google Workspace
- **Current SPF:** `v=spf1 include:dc-aa8e722993._spfm.bluecanvas.ai ~all`

## Required DNS Changes (Add to GoDaddy DNS)

### 1. DKIM Record (Get from Google Workspace)
**Action Required:** Enable DKIM in Google Admin Console first
1. Go to admin.google.com
2. Security > Email authentication > DKIM
3. Select bluecanvas.ai domain
4. Click "Generate new record"
5. Copy the TXT record details

**Record Type:** TXT
**Host:** [selector]._domainkey (e.g., `google._domainkey`)
**Value:** [DKIM public key from Google]
**TTL:** 3600

### 2. DMARC Policy Record
**Record Type:** TXT
**Host:** `_dmarc`
**Value:** `v=DMARC1; p=quarantine; rua=mailto:dmarc@bluecanvas.ai; ruf=mailto:dmarc@bluecanvas.ai; fo=1; adkim=r; aspf=r`
**TTL:** 3600

**Policy Explanation:**
- `p=quarantine`: Suspicious emails go to spam (start conservative)
- `rua=mailto:dmarc@bluecanvas.ai`: Aggregate reports
- `ruf=mailto:dmarc@bluecanvas.ai`: Forensic reports
- `fo=1`: Generate reports for any auth failure
- `adkim=r`: Relaxed DKIM alignment
- `aspf=r`: Relaxed SPF alignment

### 3. Updated SPF Record (When Adding Apollo)
**Current:** `v=spf1 include:dc-aa8e722993._spfm.bluecanvas.ai ~all`
**Updated:** Need to modify the included SPF record at `dc-aa8e722993._spfm.bluecanvas.ai`

**Apollo SPF Include:** `include:spf.apollo.io`

### 4. Custom Tracking Domain (For Apollo)
**Record Type:** CNAME
**Host:** `track`
**Value:** `tracking.apollo.io` (or Apollo-provided CNAME)
**TTL:** 3600

## Verification Commands
After adding records, verify with:

```bash
# Check DMARC
dig TXT _dmarc.bluecanvas.ai

# Check DKIM (replace 'google' with actual selector)
dig TXT google._domainkey.bluecanvas.ai

# Check SPF
dig TXT bluecanvas.ai

# Check tracking domain
dig CNAME track.bluecanvas.ai
```

## Timeline
1. **Tonight:** Add DMARC + enable Google DKIM
2. **Before Apollo setup:** Add tracking domain CNAME
3. **After warmup:** Consider upgrading DMARC to `p=reject`

## Tools for Testing
- **MXToolbox:** mxtoolbox.com/dmarc.aspx
- **DMARC Analyzer:** dmarcanalyzer.com
- **Google Postmaster:** postmaster.google.com
- **Mail-Tester:** mail-tester.com

---
**Critical:** Enable DKIM in Google Workspace BEFORE adding Apollo to prevent authentication conflicts.