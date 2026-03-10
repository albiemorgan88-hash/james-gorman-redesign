# Font Investigation & Thank-You Page — 10 March 2026

## Task 1: Merriweather & Vollkorn Font Source

### Where the fonts load from

The WebFont.load call is in **Webflow's auto-generated HTML** in the `<head>`:

```html
<script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js" type="text/javascript"></script>
<script type="text/javascript">WebFont.load({  google: {    families: ["Merriweather:300,300italic,400,400italic,700,700italic,900,900italic","Vollkorn:400,400italic,700,700italic","Inter:300,400,500,600,700","Urbanist:300,400,500,600,700"]  }});</script>
```

**This is NOT custom code.** Webflow auto-generates this `WebFont.load()` call based on which Google Fonts are assigned to elements in the Designer. You cannot remove it by editing custom code — you must change the font assignments on the elements themselves.

### CSS classes using Merriweather (16 classes)

| Class | What it is |
|---|---|
| `.heading-style-h1` | H1 headings |
| `.heading-style-h2` | H2 headings |
| `.heading-style-h2-large` | Large H2 variant |
| `.heading-style-h3` | H3 headings |
| `.heading-style-h5` | H5 headings |
| `.heading-style-h6` | H6 headings |
| `.heading-style-h6-7` | H6/H7 variant |
| `.btn` | Buttons |
| `.pricing_price` | Pricing numbers |
| `.stats_number` | Stats numbers (e.g. "£4M+") |
| `.heading_sticker` | Sticker headings |
| `.animate-intro-text` | Animated intro text |
| `.form_heading` | Form labels |
| `.error-message` | Form error messages |
| `.success-message-2` | Form success messages |

### CSS class using Vollkorn (1 class)

| Class | What it is |
|---|---|
| `.heading-style-h1-2` | Alternative H1 style |

### How to remove them — step by step

#### In Webflow Designer:

1. **Open the Style Panel** (right sidebar, paintbrush icon)
2. **Use the Style Manager** (keyboard shortcut `G` or navigate via the hamburger menu → Style Manager)
3. **Search for each class** listed above one by one
4. For each class:
   - Click on it to select an element using that class
   - In the **Typography** section of the Style Panel, find the **Font Family** dropdown
   - Change from `Merriweather` to `Inter` (or `Urbanist`, whichever fits)
   - Do this for ALL breakpoints if there are responsive overrides (check tablet/mobile)
5. **For `.heading-style-h1-2`**: Change from `Vollkorn` to your preferred font

#### Faster method — bulk find:

1. Open the **Search panel** (Cmd+F on Mac)
2. Search for text that uses these heading styles
3. Select elements → check Style Panel → change font

#### After changing all classes:

1. **Publish** the site
2. Verify the `WebFont.load()` call in the source — Merriweather and Vollkorn should disappear automatically once no elements reference them
3. This will also stop loading the webfont.js library entirely if only Inter and Urbanist remain (since those can use `@font-face` or Google Fonts CSS link instead)

#### Performance impact of removing these:

- **Removes ~400KB+ of font downloads** (Merriweather loads 8 weights, Vollkorn loads 4)
- **Removes the webfont.js library** (~12KB)
- **Eliminates render-blocking font requests** → faster LCP
- **Reduces FOUT (flash of unstyled text)**

---

## Task 2: Thank-You Page

### ⚠️ Webflow API limitation

The Webflow v2 API **does not support creating new static pages** — only listing and updating existing ones. The page must be created in the **Webflow Designer**.

### Step-by-step: Create /thank-you in the Designer

1. **Open the Webflow Designer** for bluecanvas.ai
2. **Pages panel** (left sidebar, page icon) → Click **+ Create New Page**
3. Set:
   - **Page name:** Thank You
   - **Slug:** `thank-you`
4. **Build the page content:**
   - Add a **Section** element, set min-height to 100vh, center content (flex, center/center)
   - Add a **Container** inside, max-width ~600px, text-align center
   - Add **H1**: "Thanks for getting in touch"
   - Add **Paragraph**: "We'll be back to you within 24 hours."
   - Add a **Link Block** or **Button** → text "Back to Homepage", link to `/`
   - Style to match your existing design (use `.btn` class for the button)
5. **Page Settings** (gear icon in Pages panel):
   - **SEO Title:** `Thank You | Blue Canvas AI`
   - **Meta Description:** `Thanks for contacting Blue Canvas AI. We'll respond within 24 hours with tailored AI consultancy advice for your business.`
   - ✅ **Check "Exclude from search results"** (adds noindex)
   - ✅ **Check "Exclude from sitemap"**

### Add Google Ads Conversion Tracking

In **Page Settings** → scroll down to **Custom Code** → **Before `</body>` tag**:

```html
<script>
  gtag('event', 'conversion', {
    'send_to': 'AW-17928080997/k6G7CKGj_oUcEOWc4-RC',
    'value': 750.0,
    'currency': 'GBP'
  });
</script>
```

> This works because the global `gtag` and Google Ads config (`AW-17928080997`) are already loaded site-wide in the head custom code.

### Set Form Redirect to /thank-you

1. In the **Designer**, select your **contact form** (the one in the modal and/or the main contact form)
2. In the **Form Settings** (click the form block, not an individual field):
   - Find **"Redirect URL"** field
   - Enter: `/thank-you`
3. Do this for **both forms** if you have the modal form and a footer/page form
4. **Publish** the site

### After publishing, verify:

1. Submit a test form → should redirect to `/thank-you`
2. Check Google Ads conversion tracking fires:
   - Open Chrome DevTools → Network tab
   - Filter for "google" — you should see a conversion ping to `googleads.g.doubleclick.net`
3. Check the page is not indexed:
   - View source → should contain `<meta name="robots" content="noindex">`
   - Or check in Google Search Console after a few days

---

## Summary

| Task | Status | Action Required |
|---|---|---|
| Font source identified | ✅ Complete | Webflow auto-generates `WebFont.load()` from Designer font assignments |
| CSS classes mapped | ✅ Complete | 16 Merriweather classes + 1 Vollkorn class identified |
| Font removal instructions | ✅ Complete | PJ must change fonts in Designer on each class |
| Thank-you page | ⚠️ Manual | Must be created in Webflow Designer (API can't create pages) |
| Conversion tracking | ✅ Script ready | Paste into page's custom `</body>` code |
| Form redirect | ✅ Instructions ready | Set redirect URL to `/thank-you` in form settings |
