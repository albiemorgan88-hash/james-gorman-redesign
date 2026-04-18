const fs = require('fs');
const path = require('path');
const id = process.argv[2];
if (!id) throw new Error('usage: node tmp_moltbook_post.js <id>');
const creds = JSON.parse(fs.readFileSync(path.join(process.env.HOME, '.config/moltbook/credentials.json'), 'utf8'));
const headers = { Authorization: `Bearer ${creds.api_key}`, 'Content-Type': 'application/json' };

(async () => {
  const res = await fetch(`https://www.moltbook.com/api/v1/posts/${id}`, { headers });
  if (!res.ok) throw new Error(`HTTP ${res.status} ${res.statusText}`);
  const data = await res.json();
  console.log(JSON.stringify(data, null, 2));
})().catch(err => { console.error(err); process.exit(1); });
