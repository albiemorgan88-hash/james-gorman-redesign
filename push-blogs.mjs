import { marked } from 'marked';
import { readFileSync } from 'fs';

const API = 'https://api.webflow.com/v2';
const TOKEN = 'd74d6c74fbc2954c75be9333c7f00d1980886e3539e2b7d79bd48f75cb33cd3d';
const COLLECTION = '67e4825804e6baf1d5246f5b';

const posts = [
  { file: 'openclaw-setup-guide-2026.md', category: 'OpenClaw', satellite: 'https://openclawconsultant.co.uk' },
  { file: 'openclaw-vs-chatgpt.md', category: 'OpenClaw', satellite: 'https://openclawconsultant.co.uk' },
  { file: 'zapier-vs-make-2026.md', category: 'Zapier', satellite: 'https://zapierconsultant.co.uk' },
  { file: '10-zapier-automations-small-business.md', category: 'Zapier', satellite: 'https://zapierconsultant.co.uk' },
  { file: 'what-is-an-ai-agent.md', category: 'AI Agents', satellite: 'https://aiagentsetup.co.uk' },
  { file: '5-ai-agents-save-20-hours.md', category: 'AI Agents', satellite: 'https://aiagentsetup.co.uk' },
];

const DIR = '/Users/philsagent/.openclaw/workspace/projects/satellite-sites/blog-posts/';

function parseFrontmatter(raw) {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) return { meta: {}, body: raw };
  const meta = {};
  for (const line of match[1].split('\n')) {
    const m = line.match(/^(\w[\w_]*)\s*:\s*"?([^"]*)"?\s*$/);
    if (m) meta[m[1]] = m[2].trim();
  }
  return { meta, body: match[2] };
}

const CTA = `\n\n---\n\n**Ready to get started?** [Book a free discovery call with Blue Canvas AI](https://bluecanvas.ai/contact) and let's discuss how we can help your business.\n`;

const results = [];

for (const post of posts) {
  const raw = readFileSync(DIR + post.file, 'utf8');
  const { meta, body } = parseFrontmatter(raw);
  
  const title = meta.title || body.match(/^#\s+(.+)/m)?.[1] || post.file;
  const metaDesc = meta.meta_description || '';
  const slug = post.file.replace('.md', '');
  
  // Add CTA to body
  const fullBody = body + CTA;
  const html = marked.parse(fullBody);
  
  const payload = {
    isArchived: false,
    isDraft: true,
    fieldData: {
      name: title,
      slug: slug,
      'blog-details': html,
      'blog-main-details': metaDesc.slice(0, 200),
      'small-details': metaDesc,
      category: post.category,
      'author-name': 'Blue Canvas AI',
    }
  };

  try {
    const res = await fetch(`${API}/collections/${COLLECTION}/items`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${TOKEN}`,
        'Content-Type': 'application/json',
        'accept': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    const data = await res.json();
    if (res.ok) {
      results.push({ file: post.file, status: 'SUCCESS', id: data.id });
      console.log(`✅ ${post.file} → ${data.id}`);
    } else {
      results.push({ file: post.file, status: 'FAILED', error: JSON.stringify(data) });
      console.log(`❌ ${post.file} → ${JSON.stringify(data)}`);
    }
  } catch (e) {
    results.push({ file: post.file, status: 'ERROR', error: e.message });
    console.log(`❌ ${post.file} → ${e.message}`);
  }
  
  // Rate limit
  await new Promise(r => setTimeout(r, 1500));
}

console.log('\n=== SUMMARY ===');
for (const r of results) {
  console.log(`${r.status}: ${r.file}${r.id ? ' (ID: '+r.id+')' : ''}${r.error ? ' - '+r.error : ''}`);
}
