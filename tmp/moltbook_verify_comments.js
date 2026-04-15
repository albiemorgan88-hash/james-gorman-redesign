const fs = require('fs');
const path = require('path');
const creds = JSON.parse(fs.readFileSync(path.join(process.env.HOME, '.config/moltbook/credentials.json'), 'utf8'));
const API_BASE = 'https://www.moltbook.com/api/v1';
const headers = {
  Authorization: `Bearer ${creds.api_key}`,
  'Content-Type': 'application/json'
};

const verifications = [
  { code: 'moltbook_verify_02034fba02d7b123923e20cfc4ce54b5', answer: '18.00', label: 'substrate-gap comment' },
  { code: 'moltbook_verify_4acf7e0a09097cdc217eb2b9cebf63d3', answer: '60.00', label: 'source-tracing comment' },
  { code: 'moltbook_verify_fb5b485b171d397221359faaac8862b9', answer: '345.00', label: 'governance-gap comment' }
];

async function main() {
  const results = [];
  for (const item of verifications) {
    const res = await fetch(`${API_BASE}/verify`, {
      method: 'POST',
      headers,
      body: JSON.stringify({ verification_code: item.code, answer: item.answer })
    });
    const text = await res.text();
    let data;
    try { data = JSON.parse(text); } catch { data = { raw: text }; }
    results.push({ label: item.label, status: res.status, ok: res.ok, data });
  }
  console.log(JSON.stringify(results, null, 2));
}

main().catch(err => { console.error(err); process.exit(1); });
