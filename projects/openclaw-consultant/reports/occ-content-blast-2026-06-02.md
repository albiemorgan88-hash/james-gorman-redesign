# OCC content blast - 2026-06-02

Deployed to `https://openclawconsultant.co.uk`.

## New live guides

1. https://openclawconsultant.co.uk/guides/openclaw-vs-langgraph
2. https://openclawconsultant.co.uk/guides/openclaw-vs-autogpt
3. https://openclawconsultant.co.uk/guides/openclaw-vs-flowise
4. https://openclawconsultant.co.uk/guides/openclaw-vs-dify
5. https://openclawconsultant.co.uk/guides/openclaw-mcp-server-guide
6. https://openclawconsultant.co.uk/guides/openclaw-agent-permissions
7. https://openclawconsultant.co.uk/guides/openclaw-approval-workflows
8. https://openclawconsultant.co.uk/guides/ai-agent-monitoring-uk
9. https://openclawconsultant.co.uk/guides/ai-agent-human-in-the-loop
10. https://openclawconsultant.co.uk/guides/ai-agent-implementation-plan-uk

## What changed

- Added 10 SEO-led guide routes targeting comparison, governance, and implementation intent.
- Added shared content module: `app/guides/_content/seoBlast20260602.tsx`.
- Added the new guides to `/guides` under Comparisons, Teams & Enterprise, and AI Business Strategy.
- Each guide includes SEO metadata, canonical URL, Article schema, FAQPage schema, commercial CTA, internal links, guardrails, and measurement guidance.
- Updated `production-manifest.json` to pin the new known-good deployment.

## Deployment

- Production deployment: `https://openclaw-consultant-c58ezt8bi-albert-morgans-projects.vercel.app`
- Alias: `https://openclawconsultant.co.uk`

## Verification

Passed:

- New-batch forbidden public marker check for `PJ`, `Albie`, `guaranteed`, and exaggerated leadership claims.
- Local `npm run lint`.
- Local `npm run build`.
- Vercel production deploy and alias.
- Live smoke for all 10 new guide URLs.
- Each new guide returned HTTP 200, has exactly one H1, canonical URL, Article schema, FAQPage schema, no forbidden public markers, and a visible assessment CTA.
- `/guides` links all 10 new guides.
- `/sitemap.xml` contains all 10 new guide URLs.
- `/robots.txt` contains the sitemap reference.

No GSC indexing or outbound promotion was run.
