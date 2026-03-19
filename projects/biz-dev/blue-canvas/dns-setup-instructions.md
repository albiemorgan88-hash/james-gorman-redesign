# DNS Setup Instructions

## Set Up audit.bluecanvas.ai Professional Domain

### Step 1: Add DNS Record in GoDaddy

1. Log into GoDaddy account for bluecanvas.ai domain
2. Go to **DNS Management** for bluecanvas.ai
3. **Add new record:**
   - **Type:** CNAME
   - **Name:** audit
   - **Value:** cname.vercel-dns.com
   - **TTL:** 600 (default)

### Step 2: Add Domain in Vercel

1. Go to Vercel project: https://vercel.com/albert-morgans-projects/showcase-redirect
2. **Settings** → **Domains**
3. **Add Domain:** audit.bluecanvas.ai
4. Vercel will automatically verify and issue SSL certificate

### Step 3: Verify Setup

Test these URLs once DNS propagates (5-15 minutes):

✅ https://audit.bluecanvas.ai → Should show loading spinner then redirect to default showcase
✅ https://audit.bluecanvas.ai/mcaleerjackson → Should redirect to McAleer Jackson showcase
✅ https://audit.bluecanvas.ai/asmchartered → Should redirect to ASM showcase

### Step 4: Update Apollo Template

Replace current URLs in Apollo:

**OLD:** `https://showcase-redirect.vercel.app/?email={{email}}`
**NEW:** `https://audit.bluecanvas.ai/{{company_slug}}`

### Step 5: Test Apollo Integration

1. Create company_slug custom field in Apollo
2. Map company names to slugs (see apollo-template-professional-urls.md)
3. Test send email to verify URL generation
4. Confirm redirect works end-to-end

## Professional URL Examples:

✅ https://audit.bluecanvas.ai/mcaleerjackson
✅ https://audit.bluecanvas.ai/asmchartered
✅ https://audit.bluecanvas.ai/gmcg
✅ https://audit.bluecanvas.ai/claremount

**These look professional and branded vs. the technical vercel.app URLs!**

## Current Status:
- ✅ Redirect system deployed to Vercel
- ✅ Company mapping implemented  
- ✅ Email fallback preserved
- ⏳ DNS setup needed
- ⏳ Apollo template update needed

**Once DNS is configured, the professional URL system will be live!**