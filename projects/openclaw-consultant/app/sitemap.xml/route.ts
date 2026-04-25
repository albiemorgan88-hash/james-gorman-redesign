import { existsSync, readdirSync } from 'fs';
import { join } from 'path';

function isRouteDirectory(parentDir: string, name: string) {
  return (
    !name.startsWith('[') &&
    !name.startsWith('.') &&
    !name.startsWith('_') &&
    existsSync(join(parentDir, name, 'page.tsx'))
  );
}

export async function GET() {
  const baseUrl = 'https://openclawconsultant.co.uk';
  const now = new Date().toISOString();
  
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

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${baseUrl}/pricing</loc>
    <lastmod>${now}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/guides</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${baseUrl}/services</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${baseUrl}/about</loc>
    <lastmod>${now}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${baseUrl}/faq</loc>
    <lastmod>${now}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${baseUrl}/case-studies</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
${guides.map(guide => `  <url>
    <loc>${baseUrl}/guides/${guide}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`).join('\n')}
${services.map(service => `  <url>
    <loc>${baseUrl}/services/${service}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`).join('\n')}
${caseStudies.map(study => `  <url>
    <loc>${baseUrl}/case-studies/${study}</loc>
    <lastmod>${now}</lastmod>
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
