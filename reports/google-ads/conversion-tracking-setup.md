# Google Ads Conversion Tracking Setup — Blue Canvas

**Date:** 10 March 2026  
**Account:** 801-851-4760 (AW-17928080997)

---

## Conversion Actions Created

| Conversion | ID | Label | Value | Status |
|---|---|---|---|---|
| Contact Form Submission | 7528747425 | `k6G7CKGj_oUcEOWc4-RC` | £750 (ONE_PER_CLICK) | ✅ ENABLED |
| Phone Number Click | 7528747428 | `6YfyCKSj_oUcEOWc4-RC` | £100 (ONE_PER_CLICK) | ✅ ENABLED |

Both use **Data-Driven Attribution** and are counting **ONE_PER_CLICK** (no duplicate conversions from repeat submitters).

---

## JavaScript Snippet to Add to Webflow

The Google Ads global tag (`AW-17928080997`) is already installed on the site. The following script handles conversion firing for form submissions and phone clicks.

### Paste this into Webflow → Site Settings → Custom Code → **Footer Code**

```html
<!-- Google Ads Conversion Tracking — Blue Canvas -->
<script>
(function() {
  'use strict';

  // ── CONTACT FORM SUBMISSION ──
  // Webflow fires a custom event when forms submit successfully
  // This covers the modal popup contact form
  
  // Method 1: Webflow's native form success event
  document.addEventListener('DOMContentLoaded', function() {
    
    // Listen for Webflow form submissions (works for AJAX forms)
    var forms = document.querySelectorAll('form');
    forms.forEach(function(form) {
      form.addEventListener('submit', function() {
        // Fire on submit attempt — Webflow handles validation
        if (typeof gtag === 'function') {
          gtag('event', 'conversion', {
            'send_to': 'AW-17928080997/k6G7CKGj_oUcEOWc4-RC',
            'value': 750.0,
            'currency': 'GBP'
          });
          console.log('[Blue Canvas] Form conversion fired');
        }
      });
    });

    // Method 2: MutationObserver to catch Webflow's success message
    // Webflow replaces form with .w-form-done on success
    var observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
        mutation.addedNodes.forEach(function(node) {
          if (node.nodeType === 1) {
            // Check if a success message appeared
            var successDiv = node.classList && node.classList.contains('w-form-done') 
              ? node 
              : node.querySelector && node.querySelector('.w-form-done');
            if (successDiv && successDiv.style.display !== 'none') {
              if (typeof gtag === 'function') {
                gtag('event', 'conversion', {
                  'send_to': 'AW-17928080997/k6G7CKGj_oUcEOWc4-RC',
                  'value': 750.0,
                  'currency': 'GBP'
                });
                console.log('[Blue Canvas] Form success conversion fired (observer)');
              }
            }
          }
        });
      });
    });

    // Watch for style changes on .w-form-done elements (Webflow shows them via display change)
    var formDones = document.querySelectorAll('.w-form-done');
    formDones.forEach(function(el) {
      var styleObserver = new MutationObserver(function(muts) {
        if (el.style.display === 'block' || el.style.display === '') {
          if (typeof gtag === 'function') {
            gtag('event', 'conversion', {
              'send_to': 'AW-17928080997/k6G7CKGj_oUcEOWc4-RC',
              'value': 750.0,
              'currency': 'GBP'
            });
            console.log('[Blue Canvas] Form success conversion fired (style)');
          }
        }
      });
      styleObserver.observe(el, { attributes: true, attributeFilter: ['style'] });
    });

    // Observe the body for any new .w-form-done elements (modal forms)
    observer.observe(document.body, { childList: true, subtree: true });

    // ── PHONE NUMBER CLICKS ──
    // Track clicks on tel: links
    document.addEventListener('click', function(e) {
      var link = e.target.closest('a[href^="tel:"]');
      if (link && typeof gtag === 'function') {
        gtag('event', 'conversion', {
          'send_to': 'AW-17928080997/6YfyCKSj_oUcEOWc4-RC',
          'value': 100.0,
          'currency': 'GBP'
        });
        console.log('[Blue Canvas] Phone click conversion fired');
      }
    });
  });
})();
</script>
```

---

## Where to Paste in Webflow

1. Log into Webflow → open the **Blue Canvas** project
2. Go to **Site Settings** (gear icon) → **Custom Code** tab
3. Paste the snippet above into the **Footer Code** box (below existing code if any)
4. Click **Save**
5. **Publish** the site

> ⚠️ The gtag base script (`AW-17928080997`) is already installed on the site. Do NOT add it again — the snippet above only fires conversion events on top of the existing tag.

---

## How It Works

The script uses three detection methods to ensure the conversion fires reliably:

1. **Form submit event** — catches the moment the user clicks submit
2. **MutationObserver on `.w-form-done`** — Webflow shows this div when a form submits successfully; the observer watches for it appearing (including inside modals)
3. **Style attribute observer** — specifically watches for Webflow toggling `display: block` on existing `.w-form-done` elements

For phone clicks, it uses event delegation on `a[href^="tel:"]` links so it works regardless of where the phone number appears.

---

## Verification Checklist

- [x] Conversion actions created in Google Ads (IDs: 7528747425, 7528747428)
- [x] Both set to ENABLED with correct values (£750 form, £100 phone)
- [x] Data-Driven Attribution model applied
- [x] JavaScript is syntactically valid
- [x] Script checks `typeof gtag === 'function'` before firing (safe if tag loads late)
- [x] Console logging included for debugging (`[Blue Canvas]` prefix)
- [ ] **TODO**: Paste into Webflow and publish
- [ ] **TODO**: Submit a test form and check Google Ads → Conversions → Diagnostics (allow 24-48h)
- [ ] **TODO**: Check Real-Time in Google Ads Tag Assistant (tagassistant.google.com) to verify firing

---

## Testing Instructions

1. Install [Google Tag Assistant](https://tagassistant.google.com/) and connect to bluecanvas.ai
2. Open the site, submit the contact form
3. Check Tag Assistant shows `conversion` event with `send_to: AW-17928080997/k6G7CKGj_oUcEOWc4-RC`
4. Click a phone number link and verify the phone conversion fires
5. In Google Ads, go to **Goals → Conversions → Summary** — the new actions should appear with "Recording" status within 24-48 hours of the first conversion
