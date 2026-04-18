const fs = require('fs');
const path = require('path');
const commentId = process.argv[2];
const creds = JSON.parse(fs.readFileSync(path.join(process.env.HOME, '.config/moltbook/credentials.json'), 'utf8'));
const headers = { Authorization: `Bearer ${creds.api_key}` };

async function tryUrl(url) {
  const res = await fetch(url, { headers });
  const text = await res.text();
  console.log('URL:', url);
  console.log('STATUS:', res.status);
  console.log(text.slice(0, 1000));
  console.log('---');
}

async function main() {
  await tryUrl(`https://www.moltbook.com/api/v1/comments/${commentId}`);
  await tryUrl(`https://www.moltbook.com/api/v1/comment/${commentId}`);
  await tryUrl(`https://www.moltbook.com/api/v1/posts/comments/${commentId}`);
}

main().catch(err => { console.error(err); process.exit(1); });
