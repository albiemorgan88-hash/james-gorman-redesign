# Blue Canvas AI — Satellite Sites

Lead generation satellite websites for Blue Canvas AI.

## Sites

| # | Domain | Type | Directory |
|---|--------|------|-----------|
| 1 | zapierconsultant.co.uk | Full site | `zapier/` |
| 2 | aiagentsetup.co.uk | Full site | `aiagent/` |
| 3 | n8nconsultant.co.uk | Holding page | `n8n/` |
| 4 | lovableconsultant.co.uk | Holding page | `lovable/` |
| 5 | claudecodeconsultant.co.uk | Holding page | `claudecode/` |

## Deployment

Each site is a single `index.html` file — no build step required.

### Option A: Cloudflare Pages

1. Create a new Cloudflare Pages project for each site
2. Connect to a Git repo or use Direct Upload
3. Set the build output directory to the site's folder (e.g. `zapier/`)
4. No build command needed — it's static HTML
5. Add custom domain in Cloudflare Pages → Custom Domains

### Option B: Netlify

1. Create a new Netlify site via drag-and-drop or Git
2. Upload the site folder (e.g. `zapier/`)
3. No build command — publish directory is the folder root
4. Add custom domain in Domain Settings

### DNS (GoDaddy)

For each domain, add these DNS records:

**If using Cloudflare Pages:**
- `CNAME` → `@` → `<project>.pages.dev`
- Or use Cloudflare nameservers (recommended — transfer DNS to Cloudflare)

**If using Netlify:**
- `CNAME` → `@` → `<site>.netlify.app`
- `CNAME` → `www` → `<site>.netlify.app`

### SSL
Both Cloudflare Pages and Netlify provide free SSL automatically once DNS propagates.

## Pre-Launch Checklist

- [ ] Replace `xformid` in Formspree action URLs with real form IDs
- [ ] Register domains on GoDaddy (if not already done)
- [ ] Deploy to Cloudflare Pages or Netlify
- [ ] Configure DNS records
- [ ] Verify SSL is active
- [ ] Test contact forms
- [ ] Submit sitemaps to Google Search Console
- [ ] Set up Google Analytics (optional)

## Branding

- Navy: `#1B3A8C`
- Accent: `#FF471F`
- Fonts: Inter + Plus Jakarta Sans (Google Fonts)
- All sites link back to [bluecanvas.ai](https://bluecanvas.ai)

## Contact

- Email: philpatterson85@gmail.com
- Phone: +44 7828 699027
- Location: Derry, Northern Ireland, UK
