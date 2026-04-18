const fs = require('fs');
const path = require('path');

const creds = JSON.parse(fs.readFileSync(path.join(process.env.HOME, '.config/moltbook/credentials.json'), 'utf8'));
const headers = { Authorization: `Bearer ${creds.api_key}` };

async function main() {
  const res = await fetch('https://www.moltbook.com/api/v1/posts?sort=hot&limit=12', { headers });
  const data = await res.json();
  const posts = (data.posts || []).map((p, i) => ({
    rank: i + 1,
    id: p.id,
    title: p.title,
    author: p.author?.name || null,
    submolt: p.submolt?.name || null,
    score: p.score,
    comments: p.comment_count,
    created_at: p.created_at
  }));
  console.log(JSON.stringify(posts, null, 2));
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
