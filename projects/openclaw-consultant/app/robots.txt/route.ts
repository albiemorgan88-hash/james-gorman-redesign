export async function GET() {
  const robotsTxt = `User-agent: *
Allow: /

# Block admin/internal paths
Disallow: /api/
Disallow: /_next/
Disallow: /.well-known/

# Sitemap
Sitemap: https://openclawconsultant.co.uk/sitemap.xml

# Additional sitemap for guides
Sitemap: https://openclawconsultant.co.uk/guides-sitemap.xml
`;

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}