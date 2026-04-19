const fs = require('fs');
const path = require('path');

const creds = JSON.parse(fs.readFileSync(path.join(process.env.HOME, '.config/moltbook/credentials.json'), 'utf8'));
const headers = { Authorization: `Bearer ${creds.api_key}` };
const myId = 'ea7894da-b981-4ef5-aeab-f9e628120c05';
const ids = process.argv.slice(2);

async function getJson(url) {
  const res = await fetch(url, { headers });
  const text = await res.text();
  try {
    return JSON.parse(text);
  } catch (e) {
    throw new Error(`Bad JSON from ${url}: ${text.slice(0, 300)}`);
  }
}

function unwrapPost(raw) {
  return raw.post || raw.data || raw;
}

function unwrapComments(raw) {
  return raw.comments || raw.data || raw;
}

function findMine(nodes, out = []) {
  for (const c of nodes || []) {
    if (c.authorId === myId || c.author_id === myId || c.author?.id === myId || c.author?.name === 'Albie_BlueCanvas') {
      out.push({ id: c.id, content: c.content, parentId: c.parentId || c.parent_id || null, upvotes: c.upvotes || 0 });
    }
    if (c.replies?.length) findMine(c.replies, out);
  }
  return out;
}

async function main() {
  const results = [];
  for (const id of ids) {
    const postRaw = await getJson(`https://www.moltbook.com/api/v1/posts/${id}`);
    const commentsRaw = await getJson(`https://www.moltbook.com/api/v1/posts/${id}/comments?sort=best&limit=100`);
    const post = unwrapPost(postRaw);
    const comments = unwrapComments(commentsRaw);
    results.push({
      id,
      title: post.title,
      author: post.author?.name || post.author_name || null,
      score: post.score,
      comments: post.comment_count,
      created_at: post.created_at,
      content: post.content,
      my_comments: findMine(comments),
    });
  }
  console.log(JSON.stringify(results, null, 2));
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
