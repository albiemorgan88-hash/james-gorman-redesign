# OpenClaw Landing Pages

Two lead-generation sites for Blue Canvas AI's OpenClaw consultancy services.

| Site | Domain | Purpose |
|------|--------|---------|
| Consultant | openclawconsultant.co.uk | Position as go-to OpenClaw consultant |
| Setup | openclawsetup.co.uk | Capture OpenClaw setup searches |

Both are single-file static sites (HTML + inline CSS/JS). No build step needed.

---

## Hosting on Cloudflare Pages

### Option A: Direct Upload
1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com) → Pages → Create a project
2. Choose "Direct Upload"
3. For each site, create a folder with `index.html` inside
4. Upload the folder → Deploy
5. Note the `*.pages.dev` URL for testing

### Option B: Git Integration
1. Push each site folder to its own GitHub repo (or branches)
2. Cloudflare Pages → Create project → Connect to Git
3. Build command: (leave blank — no build needed)
4. Output directory: `/` (or the folder containing index.html)
5. Deploy

### Custom Domain on Cloudflare Pages
1. In your Pages project → Custom domains → Add
2. Enter `openclawconsultant.co.uk` (or `openclawsetup.co.uk`)
3. Cloudflare will prompt you to add a CNAME — see DNS section below

---

## Hosting on Netlify (Alternative)

1. Go to [Netlify](https://app.netlify.com) → Add new site → Deploy manually
2. Drag and drop the site folder
3. Site Settings → Domain management → Add custom domain
4. Follow the DNS instructions below

---

## DNS Setup (GoDaddy)

For each domain (`openclawconsultant.co.uk` and `openclawsetup.co.uk`):

### If using Cloudflare Pages:
1. Go to GoDaddy → DNS Management for the domain
2. Add a **CNAME** record:
   - Name: `@` (or `www`)
   - Value: `your-project.pages.dev` (the URL Cloudflare gives you)
   - TTL: 600
3. If GoDaddy won't let you CNAME the root (`@`), transfer nameservers to Cloudflare:
   - In Cloudflare, add the domain as a site
   - Update GoDaddy nameservers to the ones Cloudflare provides
   - Then manage DNS entirely in Cloudflare

### If using Netlify:
1. Add a **CNAME** record:
   - Name: `www`
   - Value: `your-site.netlify.app`
2. Add an **A** record for the root:
   - Name: `@`
   - Value: `75.2.60.5` (Netlify's load balancer)
3. Enable HTTPS in Netlify dashboard

**Recommended:** Transfer nameservers to Cloudflare for simplest setup + free SSL + CDN.

---

## Formspree Setup

Both sites use Formspree for contact forms. Currently set to placeholder `xformid`.

1. Go to [formspree.io](https://formspree.io) and sign up
2. Create a new form for each site
3. Copy the form ID (e.g., `mabcdefg`)
4. In each `index.html`, replace `xformid` with your actual form ID:
   ```
   action="https://formspree.io/f/mabcdefg"
   ```
5. Test the form on each site
6. Set up email notifications in Formspree dashboard

---

## Post-Deployment Checklist

- [ ] Replace `xformid` in both sites with real Formspree endpoints
- [ ] Test contact forms on both sites
- [ ] Verify mobile responsiveness
- [ ] Check SSL/HTTPS is active
- [ ] Submit both sitemaps to Google Search Console
- [ ] Set up Google Analytics or Plausible (optional)
- [ ] Create actual `robots.txt` and `sitemap.xml` files (content is in HTML comments)
- [ ] Create privacy policy page at `/privacy`
- [ ] Test all links to bluecanvas.ai
