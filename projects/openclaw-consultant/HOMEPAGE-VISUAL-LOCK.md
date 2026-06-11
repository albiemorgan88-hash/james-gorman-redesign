# Homepage Visual Lock

Status: locked as of 2026-05-29.

The canonical `openclawconsultant.co.uk` homepage is the dark navy/orange OpenClaw version:

- Navy/blue animated gradient hero.
- Orange `OC` mark and `OpenClaw.` wordmark.
- Header links floating over the dark hero.
- Hero headline: `OpenClaw, / Set Up Properly / and Safe to Run. / Founder-Led.`.
- Orange primary CTA: `Book a discovery call`, linked to the approved Calendly consultation URL.
- Supporting copy framed around founder-led OpenClaw setup, custom skills and sensible controls.
- Proof section for real OpenClaw workflows (wording updated 2026-06-10 on branch seo/consolidate-jun26: "OpenClaw-style" hedge dropped because both linked case studies document work done on OpenClaw itself), still using the verified `5.0` Blue Canvas Google rating.
- Testimonial section uses public Blue Canvas client review snippets from Stuart Waters, Kyle Martin, and Gavan Wall.
- Dark contact section near the bottom.
- Homepage links into the SEO support pages, especially `/openclaw`, `/services/setup-configuration`, and `/guides/openclaw-vs-copilot-studio`.

Reference screenshot:

![Locked OpenClaw homepage visual](reports/openclaw-homepage-visual-lock-2026-05-29.png)

## Do Not Restore

Do not restore the newer light/editorial homepage as the production homepage. Drift clues include:

- `Deploy OpenClaw safely, securely, at scale.`
- `mesh-bg` homepage hero.
- `OpenClaw resource hub` as the first major homepage section.
- `Pricing built around real outcomes.`
- `Proof-driven, not promise-driven.`
- White/light top navigation over a pale homepage hero.

## Deployment Guard

The production verifier is intentionally strict:

- `production-manifest.json` locks the known-good deployment to `openclaw-consultant-1wub8788m-albert-morgans-projects.vercel.app`.
- `npm run verify:prod` checks the production alias, required homepage visual markers, banned drift markers, and priority route health.
- Any production deployment that changes the homepage visual direction must update this lock document, the screenshot, and `production-manifest.json` deliberately.

Before leaving any future deploy live, run:

```bash
npm run lint
npm run build
npm run verify:prod
```
