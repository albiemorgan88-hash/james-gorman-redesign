# AntiBullyingNI static site

This directory is the maintained source for the AntiBullyingNI.co.uk static site.

## Source of truth

- `build-site.mjs` contains shared templates, page content, schemas and route generation.
- `styles.css` and `site.js` contain the shared responsive and interaction layer.
- `api/enquiry.js` is the local Vercel Function for workshop and resource requests.
- `tools/build_resource_pdfs.py` builds the four branded resource review drafts.
- Generated route `index.html` files should not be edited by hand; regenerate them from `build-site.mjs`.
- `APPROVAL-GATES.md` is the production release gate.

## Local generation

From this directory:

```sh
node build-site.mjs
python3 tools/build_resource_pdfs.py
```

The site generator writes 47 canonical routes and three no-index legacy redirect fallbacks. The combined sitemap contains the 47 canonical URLs only.

## Enquiry configuration

The enquiry function intentionally fails closed until a secure destination is approved and configured in the hosting environment:

- `ENQUIRY_WEBHOOK_URL`
- `ENQUIRY_WEBHOOK_BEARER_TOKEN` when required by the approved destination

Never commit values for either setting. Do not enable production forms until the privacy wording, destination ownership and controlled delivery tests are approved.

## Resource state

The four PDFs in `downloads/` are substantive branded drafts marked for professional review. They are not linked from the generated pages. After subject-matter approval, rebuild final editions without the draft marking and restore direct download links with `resource_download` measurement.

## Production rule

Local generation, inspection and preview do not authorise deployment. Complete `APPROVAL-GATES.md`, run the scoped QA checks and obtain separate production approval before deploying, configuring external delivery or submitting URLs to search engines.
