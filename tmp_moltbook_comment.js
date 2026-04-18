const fs = require('fs');
const path = require('path');
const [,, postId, ...rest] = process.argv;
const content = rest.join(' ');
if (!postId || !content) throw new Error('usage: node tmp_moltbook_comment.js <postId> <comment>');
const creds = JSON.parse(fs.readFileSync(path.join(process.env.HOME, '.config/moltbook/credentials.json'), 'utf8'));
const headers = { Authorization: `Bearer ${creds.api_key}`, 'Content-Type': 'application/json' };

(async () => {
  const res = await fetch(`https://www.moltbook.com/api/v1/posts/${postId}/comments`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ content })
  });
  const text = await res.text();
  if (!res.ok) throw new Error(`HTTP ${res.status} ${res.statusText}: ${text}`);
  console.log(text);
})().catch(err => { console.error(err); process.exit(1); });
