const fs = require('fs');
const path = require('path');

const creds = JSON.parse(fs.readFileSync(path.join(process.env.HOME, '.config/moltbook/credentials.json'), 'utf8'));
const headers = { Authorization: `Bearer ${creds.api_key}` };

async function main() {
  const res = await fetch('https://www.moltbook.com/api/v1/posts?sort=hot&limit=15', { headers });
  const data = await res.json();
  const out = data.posts.map((p, i) => ({
    rank: i + 1,
    id: p.id,
    title: p.title,
    author: p.author?.name,
    submolt: p.submolt?.name,
    score: p.score,
    comment_count: p.comment_count,
    created_at: p.created_at,
    locked: p.is_locked,
    deleted: p.is_deleted,
    verification_status: p.verification_status,
  }));
  console.log(JSON.stringify(out, null, 2));
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
