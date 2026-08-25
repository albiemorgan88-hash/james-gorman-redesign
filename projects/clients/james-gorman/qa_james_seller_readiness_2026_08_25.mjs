import { readFile, readdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const base = new URL('./content-blast-2026-08-25-seller-readiness/', import.meta.url);
const draftDir = new URL('./drafts/', base);
const manifestPath = new URL('./manifest.json', base);
const sitemapPath = new URL('./raw/blog-posts-sitemap-before-2026-08-25.xml', base);
const reportPath = new URL('./draft-qa-2026-08-25.json', base);
const site = 'https://www.jamesgormanproperty.com';
const allowedHosts = new Set([
  'www.finance-ni.gov.uk',
  'www.jamesgormanproperty.com',
  'www.nidirect.gov.uk',
  'www.uregni.gov.uk',
]);

const files = (await readdir(draftDir)).filter((file) => file.endsWith('.md')).sort();
const manifest = JSON.parse(await readFile(manifestPath, 'utf8'));
const sitemap = await readFile(sitemapPath, 'utf8');
const results = [];
const slugs = new Set();
const linkTargets = new Set();

for (const file of files) {
  const raw = await readFile(new URL(file, draftDir), 'utf8');
  const lines = raw.split(/\r?\n/);
  const metadata = {};
  for (const line of lines) {
    if (!line.trim()) break;
    const separator = line.indexOf(':');
    if (separator > 0) metadata[line.slice(0, separator).trim().toLowerCase()] = line.slice(separator + 1).trim();
  }

  const h1 = lines.find((line) => line.startsWith('# '))?.slice(2).trim() ?? '';
  const body = lines.slice(lines.findIndex((line) => line.startsWith('# ')) + 1).join('\n');
  const words = body.match(/[A-Za-z0-9][A-Za-z0-9'-]*/g)?.length ?? 0;
  const links = [...raw.matchAll(/\[([^\]]+)]\(([^)]+)\)/g)].map((match) => ({
    href: match[2],
    label: match[1],
  }));
  const errors = [];

  if (h1 !== metadata.title) errors.push('H1 does not match Title metadata');
  if (!metadata.slug) errors.push('Missing slug');
  if (slugs.has(metadata.slug)) errors.push('Duplicate slug in draft batch');
  slugs.add(metadata.slug);
  if (sitemap.includes(`/post/${metadata.slug}<`)) errors.push('Slug already exists in saved live sitemap');
  if ((metadata['meta description'] ?? '').length > 160) errors.push('Meta description exceeds 160 characters');
  if ((metadata['meta description'] ?? '').length < 110) errors.push('Meta description is shorter than 110 characters');
  if (words < 650) errors.push(`Draft is too thin at ${words} words`);
  if (!body.includes('[free Derry property valuation](/free-property-valuation-derry)')) {
    errors.push('Missing the required valuation CTA link');
  }
  if (/\b(PJ|Albie)\b/.test(body)) errors.push('Wrong-name marker in public body');
  if (body.includes('—')) errors.push('Em dash found in public body');
  if (/Primary keyword:|Meta description:|Category:|Draft-only|Suggested internal links/.test(body)) {
    errors.push('Planning metadata leaked into public body');
  }

  for (const link of links) {
    const url = new URL(link.href, site);
    if (!allowedHosts.has(url.hostname)) errors.push(`Unapproved external link host: ${url.hostname}`);
    linkTargets.add(url.href);
  }

  results.push({ errors, file, links, metaDescriptionLength: metadata['meta description']?.length ?? 0, slug: metadata.slug, title: metadata.title, words });
}

const manifestSlugs = new Set(manifest.posts.map((post) => post.slug));
for (const slug of slugs) {
  if (!manifestSlugs.has(slug)) results.push({ errors: [`Slug missing from manifest: ${slug}`], file: 'manifest.json' });
}
for (const slug of manifestSlugs) {
  if (!slugs.has(slug)) results.push({ errors: [`Manifest slug missing a draft: ${slug}`], file: 'manifest.json' });
}

const linkChecks = [];
for (const href of [...linkTargets].sort()) {
  try {
    const response = await fetch(href, {
      headers: { 'User-Agent': 'Mozilla/5.0 HousePriceDerryContentQA/1.0' },
      redirect: 'follow',
      signal: AbortSignal.timeout(20000),
    });
    linkChecks.push({ href, ok: response.status >= 200 && response.status < 400, status: response.status });
  } catch (error) {
    linkChecks.push({ error: error.message, href, ok: false });
  }
}

const failures = [
  ...results.filter((result) => result.errors?.length),
  ...linkChecks.filter((check) => !check.ok),
];
const report = {
  checkedAt: new Date().toISOString(),
  draftCount: files.length,
  failures,
  linkChecks,
  results,
};
await writeFile(reportPath, JSON.stringify(report, null, 2));
console.log(JSON.stringify({ drafts: files.length, failures: failures.length, linkChecks }, null, 2));
process.exitCode = failures.length ? 1 : 0;
