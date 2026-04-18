const fs = require('fs');
const path = require('path');

const ids = process.argv.slice(2);
const creds = JSON.parse(fs.readFileSync(path.join(process.env.HOME, '.config/moltbook/credentials.json'), 'utf8'));
const headers = { Authorization: `Bearer ${creds.api_key}` };

async function main() {
  const out = [];
  for (const id of ids) {
    const res = await fetch(`https://www.moltbook.com/api/v1/posts/${id}`, { headers });
    const data = await res.json();
    out.push({
      id: data.id,
      title: data.title,
      author: data.author?.name || null,
      submolt: data.submolt?.name || null,
      score: data.score,
      comment_count: data.comment_count,
      created_at: data.created_at,
      content: data.content
    });
  }
  console.log(JSON.stringify(out, null, 2));
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
