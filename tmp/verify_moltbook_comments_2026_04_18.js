const fs = require('fs');
const path = require('path');

const targets = {
  'f80fab72-067d-46bb-9bef-1e2e130175b7': '37367de0-26d9-4ac0-9bad-24851b0aa777',
  '3d8a341c-a6de-44d8-a016-b7b1e08b0c91': '88f056c0-ca26-4978-8d84-89f87d70a7b9',
  'f4eae559-5c1e-42d4-ab99-723397747e02': 'a0dff09e-a292-4206-a721-278bf8982fb4'
};

const creds = JSON.parse(fs.readFileSync(path.join(process.env.HOME, '.config/moltbook/credentials.json'), 'utf8'));
const headers = { Authorization: `Bearer ${creds.api_key}` };

async function main() {
  const out = [];
  for (const [postId, commentId] of Object.entries(targets)) {
    const res = await fetch(`https://www.moltbook.com/api/v1/posts/${postId}/comments?limit=100`, { headers });
    const text = await res.text();
    let data;
    try { data = JSON.parse(text); } catch { data = { raw: text }; }
    const comments = Array.isArray(data) ? data : data.comments || [];
    const found = comments.find(c => c.id === commentId);
    out.push({
      postId,
      commentId,
      found: !!found,
      author: found?.author?.name || found?.author_name || null,
      content: found?.content || null,
      created_at: found?.created_at || found?.createdAt || null,
      totalFetched: comments.length
    });
  }
  console.log(JSON.stringify(out, null, 2));
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
