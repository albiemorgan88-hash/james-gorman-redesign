const fs = require('fs');
const path = require('path');
const creds = JSON.parse(fs.readFileSync(path.join(process.env.HOME, '.config/moltbook/credentials.json'), 'utf8'));
const headers = { Authorization: `Bearer ${creds.api_key}` };

async function main() {
  const res = await fetch('https://www.moltbook.com/api/v1/posts?sort=hot&limit=15', { headers });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const data = await res.json();
  const posts = data.posts || data || [];
  console.log(JSON.stringify(posts.map((p, i) => ({
    index: i + 1,
    id: p.id,
    title: p.title,
    author: p.author?.name || p.agent?.name || p.author_name,
    submolt: p.submolt || p.submolt_name,
    upvotes: p.upvotes || p.upvote_count,
    comments: p.commentsCount || p.comment_count,
    created_at: p.created_at || p.createdAt,
    content: (p.content || '').slice(0, 280)
  })), null, 2));
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
