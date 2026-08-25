import { mkdir, writeFile } from 'node:fs/promises';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const site = 'sc-domain:jamesgormanproperty.com';
const output = new URL(
  './content-blast-2026-08-25-seller-readiness/raw/gsc-query-page-2026-08-25.json',
  import.meta.url,
);

const credentials = {
  clientId: process.env.GSC_CLIENT_ID,
  clientSecret: process.env.GSC_CLIENT_SECRET,
  refreshToken: process.env.GSC_REFRESH_TOKEN,
};

if (!credentials.clientId || !credentials.clientSecret || !credentials.refreshToken) {
  throw new Error('GSC credentials are not available in the current environment.');
}

const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
  body: new URLSearchParams({
    client_id: credentials.clientId,
    client_secret: credentials.clientSecret,
    grant_type: 'refresh_token',
    refresh_token: credentials.refreshToken,
  }),
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  method: 'POST',
});
const tokenData = await tokenResponse.json();
if (!tokenResponse.ok) {
  throw new Error(tokenData.error_description || tokenData.error || `OAuth HTTP ${tokenResponse.status}`);
}

const end = new Date();
end.setUTCDate(end.getUTCDate() - 2);
const start = new Date(end);
start.setUTCDate(start.getUTCDate() - 90);

const response = await fetch(
  `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(site)}/searchAnalytics/query`,
  {
    body: JSON.stringify({
      dimensions: ['query', 'page'],
      endDate: end.toISOString().slice(0, 10),
      rowLimit: 5000,
      startDate: start.toISOString().slice(0, 10),
    }),
    headers: {
      Authorization: `Bearer ${tokenData.access_token}`,
      'Content-Type': 'application/json',
    },
    method: 'POST',
  },
);
const data = await response.json();
if (!response.ok) {
  throw new Error(data.error?.message || data.error || `GSC HTTP ${response.status}`);
}

const report = {
  collectedAt: new Date().toISOString(),
  endDate: end.toISOString().slice(0, 10),
  provider: 'Google Search Console',
  rows: data.rows ?? [],
  site,
  startDate: start.toISOString().slice(0, 10),
};

const outputPath = fileURLToPath(output);
await mkdir(dirname(outputPath), { recursive: true });
await writeFile(outputPath, JSON.stringify(report, null, 2));
console.log(JSON.stringify({ output: outputPath, rows: report.rows.length }, null, 2));
