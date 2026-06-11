import { existsSync, readdirSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const siteUrl = (process.env.OCC_SITE_URL || "https://openclawconsultant.co.uk").replace(/\/$/, "");
const sampleLimit = Number(process.env.OCC_VERIFY_SAMPLE_LIMIT || 20);
const errors = [];
const warnings = [];

function isRouteDirectory(parentDir, name) {
  return (
    !name.startsWith("[") &&
    !name.startsWith(".") &&
    !name.startsWith("_") &&
    existsSync(join(parentDir, name, "page.tsx"))
  );
}

function getRoutes(parent) {
  const dir = join(root, "app", parent);
  if (!existsSync(dir)) return [];

  return readdirSync(dir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && isRouteDirectory(dir, entry.name))
    .map((entry) => `/${parent}/${entry.name}`)
    .sort();
}

function sampleRoutes(routes) {
  if (routes.length <= sampleLimit) return routes;

  const step = Math.max(1, Math.floor(routes.length / sampleLimit));
  return routes.filter((_, index) => index % step === 0).slice(0, sampleLimit);
}

async function assertUrlOk(path) {
  const response = await fetch(`${siteUrl}${path}`, { redirect: "follow" });
  if (!response.ok) {
    errors.push(`${path} returned ${response.status}`);
  }
}

const guideRoutes = getRoutes("guides");
const serviceRoutes = getRoutes("services");
const caseStudyRoutes = getRoutes("case-studies");
const allDiscoveredRoutes = [...guideRoutes, ...serviceRoutes, ...caseStudyRoutes];

if (!process.env.RESEND_API_KEY) {
  warnings.push("RESEND_API_KEY is not present in the local verification environment");
}

if (!process.env.SUPABASE_SERVICE_ROLE_KEY) {
  warnings.push("SUPABASE_SERVICE_ROLE_KEY is not present in the local verification environment; Supabase capture will be skipped unless configured in Vercel");
}

const sitemapResponse = await fetch(`${siteUrl}/sitemap.xml`, { redirect: "follow" });
if (!sitemapResponse.ok) {
  errors.push(`/sitemap.xml returned ${sitemapResponse.status}`);
} else {
  const sitemapXml = await sitemapResponse.text();

  if (sitemapXml.includes("/guides/_content")) {
    errors.push("sitemap includes /guides/_content");
  }

  // Noindexed stubs are deliberately excluded from the sitemap until published.
  const sitemapExcludedStubs = new Set(["/case-studies/voice-in-car-openclaw-setup"]);

  for (const route of allDiscoveredRoutes) {
    if (sitemapExcludedStubs.has(route)) continue;
    if (!sitemapXml.includes(`<loc>${siteUrl}${route}</loc>`)) {
      errors.push(`sitemap is missing ${route}`);
    }
  }
}

const routesToCheck = ["/", "/guides", ...sampleRoutes(guideRoutes)];
for (const route of routesToCheck) {
  await assertUrlOk(route);
}

console.log(`Checked ${guideRoutes.length} guide routes, ${serviceRoutes.length} service routes, and ${caseStudyRoutes.length} case-study routes.`);
console.log(`Fetched ${routesToCheck.length} live URLs from ${siteUrl}.`);

for (const warning of warnings) {
  console.warn(`Warning: ${warning}`);
}

if (errors.length) {
  console.error("Publish verification failed:");
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log("Publish verification passed.");
