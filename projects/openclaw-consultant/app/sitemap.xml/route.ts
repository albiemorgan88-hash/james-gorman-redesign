import { existsSync, readdirSync, statSync } from 'fs';
import { join } from 'path';

function isRouteDirectory(parentDir: string, name: string) {
  return (
    !name.startsWith('[') &&
    !name.startsWith('.') &&
    !name.startsWith('_') &&
    existsSync(join(parentDir, name, 'page.tsx'))
  );
}

function routeLastModified(...segments: string[]) {
  try {
    return statSync(join(process.cwd(), 'app', ...segments, 'page.tsx')).mtime.toISOString();
  } catch {
    return '2026-05-26T00:00:00.000Z';
  }
}

function urlEntry(baseUrl: string, path: string, lastmod: string, changefreq: string, priority: string) {
  return `  <url>
    <loc>${baseUrl}${path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

export async function GET() {
  const baseUrl = 'https://openclawconsultant.co.uk';
  
  // Auto-discover all guide directories
  let guides: string[] = [];
  try {
    const guidesDir = join(process.cwd(), 'app', 'guides');
    guides = readdirSync(guidesDir, { withFileTypes: true })
      .filter(d => d.isDirectory() && isRouteDirectory(guidesDir, d.name))
      .map(d => d.name)
      .sort();
  } catch {
    guides = [];
  }

  // Check which service pages actually exist
  const services: string[] = [];
  try {
    const servicesDir = join(process.cwd(), 'app', 'services');
    const entries = readdirSync(servicesDir, { withFileTypes: true });
    entries
      .filter(d => d.isDirectory() && isRouteDirectory(servicesDir, d.name))
      .forEach(d => services.push(d.name));
  } catch {
    // No services directory — skip
  }

  // Check which case study pages actually exist
  const caseStudies: string[] = [];
  try {
    const csDir = join(process.cwd(), 'app', 'case-studies');
    const entries = readdirSync(csDir, { withFileTypes: true });
    entries
      .filter(d => d.isDirectory() && isRouteDirectory(csDir, d.name))
      .forEach(d => caseStudies.push(d.name));
  } catch {
    // No case studies directory — skip
  }

  const baseRoutes = [
    { path: '', segments: [] as string[], changefreq: 'weekly', priority: '1.0' },
    { path: '/openclaw', segments: ['openclaw'], changefreq: 'weekly', priority: '1.0' },
    { path: '/pricing', segments: ['pricing'], changefreq: 'monthly', priority: '0.8' },
    { path: '/guides', segments: ['guides'], changefreq: 'weekly', priority: '0.9' },
    { path: '/services', segments: ['services'], changefreq: 'weekly', priority: '0.9' },
    { path: '/about', segments: ['about'], changefreq: 'monthly', priority: '0.7' },
    { path: '/faq', segments: ['faq'], changefreq: 'monthly', priority: '0.7' },
    { path: '/case-studies', segments: ['case-studies'], changefreq: 'weekly', priority: '0.8' },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${baseRoutes.map(route => urlEntry(baseUrl, route.path, routeLastModified(...route.segments), route.changefreq, route.priority)).join('\n')}
${guides.map(guide => `  <url>
    <loc>${baseUrl}/guides/${guide}</loc>
    <lastmod>${routeLastModified('guides', guide)}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`).join('\n')}
${services.map(service => `  <url>
    <loc>${baseUrl}/services/${service}</loc>
    <lastmod>${routeLastModified('services', service)}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`).join('\n')}
${caseStudies.map(study => `  <url>
    <loc>${baseUrl}/case-studies/${study}</loc>
    <lastmod>${routeLastModified('case-studies', study)}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
