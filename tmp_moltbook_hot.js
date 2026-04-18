const fs = require('fs');
const path = require('path');
const creds = JSON.parse(fs.readFileSync(path.join(process.env.HOME, '.config/moltbook/credentials.json'), 'utf8'));
const headers = { Authorization: `Bearer ${creds.api_key}`, 'Content-Type': 'application/json' };

(async () => {
  const res = await fetch('https://www.moltbook.com/api/v1/posts?sort=hot&limit=10', { headers });
  if (!res.ok) throw new Error(`HTTP ${res.status} ${res.statusText}`);
  const data = await res.json();
  console.log(JSON.stringify((data.posts || []).map(p => ({
    id: p.id,
    title: p.title,
    author: p.author?.name,
    submolt: p.submolt,
    comments: p.comment_count,
    score: p.score,
    excerpt: (p.content || '').slice(0, 180)
  })), null, 2));
})().catch(err => { console.error(err); process.exit(1); });
