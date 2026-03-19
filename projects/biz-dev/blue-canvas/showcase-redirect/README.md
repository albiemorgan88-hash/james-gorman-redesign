# Blue Canvas Showcase Redirect System

## Problem Solved
Apollo.io's API cannot reliably populate custom field variables like `{{showcase_url}}` in email sequences. This system provides **100% autonomous personalization** without Apollo custom field limitations.

## How It Works

### 1. Universal URL in Apollo Emails
Instead of: `{{showcase_url}}` (doesn't work reliably)
Use this: `https://showcase.bluecanvas.ai/view?email={{email}}`

### 2. Auto-Redirect Logic
- Recipient clicks the universal URL
- System checks their email address
- Automatically redirects to their personalized showcase
- No manual intervention needed

### 3. Email Mapping
```javascript
const showcaseMap = {
    'paul.foley@efmccambridge.co.uk': '/efmccambridge-audit/',
    'nathan@mjkane.co.uk': '/mjkane-opportunities/',
    // Add more as needed
};
```

## Deployment Options

### Option 1: GitHub Pages (Free)
1. Create repo: `showcase-redirect`
2. Upload `index.html`
3. Enable GitHub Pages
4. Custom domain: `showcase.bluecanvas.ai`

### Option 2: Vercel (Recommended)
1. Deploy to Vercel
2. Custom domain: `showcase.bluecanvas.ai`
3. Analytics built-in
4. Edge caching for speed

### Option 3: Cloudflare Pages
1. Connect to GitHub
2. Auto-deploy on updates
3. Global CDN
4. Custom domain support

## Apollo Email Template

```
Subject: AI showcase for {{company}} - 300+ missed leads/month

Hi {{first_name}},

To introduce myself, I founded Blue Canvas in Derry to support and accelerate local business onboarding AI.

We're all in a bit of a race right now with AI. Every day and hour counts in gaining an advantage over competitors.

I built you this showcase for a sample use case for what it could do for {{company}}: https://showcase.bluecanvas.ai/view?email={{email}}

Right now, there were 300+ google searches for "Accountants Derry" or "Accountants near me" - and because you rank quite poorly, you're not catching those leads.

That's only, of course, a single use case - for you specifically, I can imagine preparing customised financial reports and account management would also be very useful.

Feel free to book some time here (calendly link) or reply to this email.

Cheers,

Phil
```

## Scaling Process

### Add New Prospects:
1. Build new showcase (existing process works)
2. Add email → showcase mapping to `showcaseMap`
3. Deploy updated redirect system
4. Add contacts to Apollo sequence

### Add New Verticals:
1. Build showcases for vertical
2. Update email mappings
3. Create new Apollo sequence with same template
4. Zero additional development

## Analytics Built-In
- Tracks which emails access showcases
- Timestamp logging
- Unknown email detection
- Performance monitoring

## Benefits
✅ **100% Autonomous** - No manual variable management
✅ **Apollo Compatible** - Uses {{email}} which always works
✅ **Infinitely Scalable** - Add mappings via code, not UI
✅ **Analytics Ready** - Built-in tracking
✅ **Fast Loading** - Branded loading screen
✅ **Error Handling** - Defaults to generic showcase
✅ **Professional** - Blue Canvas branding throughout

This solves the core automation bottleneck permanently.