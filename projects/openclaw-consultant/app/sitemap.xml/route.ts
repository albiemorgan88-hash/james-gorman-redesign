export async function GET() {
  const baseUrl = 'https://openclawconsultant.co.uk';
  
  const guides = [
    'ai-agent-cost-uk',
    'ai-agents-accountants', 
    'ai-agents-charities',
    'ai-agents-construction',
    'ai-agents-dentists',
    'ai-agents-estate-agents',
    'ai-agents-gyms-fitness',
    'ai-agents-logistics',
    'ai-agents-property-management',
    'ai-agents-recruitment-agencies',
    'ai-agents-restaurants', 
    'ai-agents-salons-spas',
    'ai-agents-solicitors',
    'ai-agents-veterinary',
    'getting-started-ai-automation',
    'installing-pinchy',
    'openclaw-accountants-automation',
    'openclaw-agent-team-setup',
    'openclaw-beginner-guide',
    'openclaw-customer-support',
    'openclaw-ecommerce-automation',
    'openclaw-email-inbox-management',
    'openclaw-for-teams',
    'openclaw-security-best-practices',
    'openclaw-security-compliance',
    'openclaw-social-media-management',
    'openclaw-vs-chatgpt',
    'openclaw-vs-va-cost-comparison',
    'pinchy-vs-manual',
    'setup-ai-agent-business',
    'top-10-openclaw-skills',
    'what-is-openclaw-2026'
  ];

  const services = [
    'ai-agent-consulting',
    'custom-agent-development',
    'enterprise-openclaw',
    'setup-configuration',
    'small-business-automation',
    'training-support'
  ];

  const caseStudies = [
    'seo-agency-250-month'
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${baseUrl}/pricing</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/thank-you</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>
  ${guides.map(guide => `
  <url>
    <loc>${baseUrl}/guides/${guide}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`).join('')}
  ${services.map(service => `
  <url>
    <loc>${baseUrl}/services/${service}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`).join('')}
  ${caseStudies.map(study => `
  <url>
    <loc>${baseUrl}/case-studies/${study}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`).join('')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}