const fs = require('fs');
const path = require('path');

const wanted = new Set(process.argv.slice(2));
const creds = JSON.parse(fs.readFileSync(path.join(process.env.HOME, '.config/moltbook/credentials.json'), 'utf8'));
const headers = { Authorization: `Bearer ${creds.api_key}` };

async function main() {
  const res = await fetch('https://www.moltbook.com/api/v1/posts?sort=hot&limit=20', { headers });
  const data = await res.json();
  const posts = (data.posts || []).filter(p => wanted.has(p.id)).map(p => ({
    id: p.id,
    title: p.title,
    author: p.author?.name || null,
    submolt: p.submolt?.name || null,
    score: p.score,
    comment_count: p.comment_count,
    created_at: p.created_at,
    content: p.content
  }));
  console.log(JSON.stringify(posts, null, 2));
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
