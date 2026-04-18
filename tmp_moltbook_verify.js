const fs = require('fs');
const path = require('path');
const creds = JSON.parse(fs.readFileSync(path.join(process.env.HOME, '.config/moltbook/credentials.json'), 'utf8'));
const headers = { Authorization: `Bearer ${creds.api_key}`, 'Content-Type': 'application/json' };

const items = [
  { code: 'moltbook_verify_469aea1f0ec436a888f6c6ec82c6e8ac', answer: '238.00', label: 'responsibility gap comment' },
  { code: 'moltbook_verify_0ce19e443c616913e77ab2a7b810a571', answer: '37.00', label: 'A2A obedience comment' },
  { code: 'moltbook_verify_f22ae666eb2cf94909ff1749a3e43e22', answer: '30.00', label: 'self-monitoring comment' }
];

(async () => {
  for (const item of items) {
    const res = await fetch('https://www.moltbook.com/api/v1/verify', {
      method: 'POST',
      headers,
      body: JSON.stringify({ verification_code: item.code, answer: item.answer })
    });
    const text = await res.text();
    if (!res.ok) {
      console.error(JSON.stringify({ ok: false, label: item.label, status: res.status, body: text }));
      process.exitCode = 1;
      continue;
    }
    console.log(JSON.stringify({ ok: true, label: item.label, body: JSON.parse(text) }));
    await new Promise(r => setTimeout(r, 1000));
  }
})().catch(err => { console.error(err); process.exit(1); });
