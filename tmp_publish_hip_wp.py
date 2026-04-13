import base64
import html
import json
import os
import re
import sys
import urllib.parse
import urllib.request
import urllib.error
from pathlib import Path

BASE = 'https://hippsychology.com/wp-json/wp/v2/posts'
USER = os.environ['HIP_WP_USERNAME']
PASSWORD = os.environ['HIP_WP_APP_PASSWORD']
FILES = [
    '/Users/philsagent/.openclaw/workspace/projects/clients/hip-psychology/blog-drafts/emotionally-based-school-avoidance.md',
    '/Users/philsagent/.openclaw/workspace/projects/clients/hip-psychology/blog-drafts/mental-health-in-schools.md',
    '/Users/philsagent/.openclaw/workspace/projects/clients/hip-psychology/blog-drafts/staff-wellbeing-in-schools.md',
    '/Users/philsagent/.openclaw/workspace/projects/clients/hip-psychology/blog-drafts/educational-psychologist-northern-ireland.md',
]


def auth_headers():
    token = base64.b64encode(f'{USER}:{PASSWORD}'.encode()).decode()
    return {
        'Authorization': f'Basic {token}',
        'Content-Type': 'application/json',
        'User-Agent': 'OpenClaw-HIP-Publisher/1.0',
    }


def api_get(url):
    req = urllib.request.Request(url, headers={k: v for k, v in auth_headers().items() if k != 'Content-Type'})
    with urllib.request.urlopen(req, timeout=30) as resp:
        return json.loads(resp.read().decode('utf-8'))


def api_post(url, payload):
    data = json.dumps(payload).encode('utf-8')
    req = urllib.request.Request(url, data=data, headers=auth_headers(), method='POST')
    with urllib.request.urlopen(req, timeout=30) as resp:
        return json.loads(resp.read().decode('utf-8'))


def fetch_status(url):
    req = urllib.request.Request(url, headers={'User-Agent': 'OpenClaw-HIP-Publisher/1.0'})
    with urllib.request.urlopen(req, timeout=30) as resp:
        return resp.status


def inline_format(text):
    text = html.escape(text.strip())
    text = re.sub(r'\*\*(.+?)\*\*', r'<strong>\1</strong>', text)
    text = re.sub(r'`([^`]+)`', r'<code>\1</code>', text)
    return text


def markdown_to_html(md_text):
    lines = md_text.splitlines()
    out = []
    para = []
    in_ul = False
    in_ol = False

    def flush_para():
        nonlocal para
        if para:
            joined = ' '.join(s.strip() for s in para if s.strip())
            if joined:
                out.append(f'<p>{inline_format(joined)}</p>')
            para = []

    def close_lists():
        nonlocal in_ul, in_ol
        if in_ul:
            out.append('</ul>')
            in_ul = False
        if in_ol:
            out.append('</ol>')
            in_ol = False

    for raw in lines:
        line = raw.rstrip()
        stripped = line.strip()
        if not stripped:
            flush_para()
            close_lists()
            continue

        if stripped.startswith('### '):
            flush_para(); close_lists()
            out.append(f'<h3>{inline_format(stripped[4:])}</h3>')
            continue
        if stripped.startswith('## '):
            flush_para(); close_lists()
            out.append(f'<h2>{inline_format(stripped[3:])}</h2>')
            continue
        if re.match(r'^-\s+', stripped):
            flush_para()
            if in_ol:
                out.append('</ol>'); in_ol = False
            if not in_ul:
                out.append('<ul>'); in_ul = True
            item = re.sub(r'^-\s+', '', stripped)
            out.append(f'<li>{inline_format(item)}</li>')
            continue
        if re.match(r'^\d+\.\s+', stripped):
            flush_para()
            if in_ul:
                out.append('</ul>'); in_ul = False
            if not in_ol:
                out.append('<ol>'); in_ol = True
            item = re.sub(r'^\d+\.\s+', '', stripped)
            out.append(f'<li>{inline_format(item)}</li>')
            continue
        para.append(stripped)

    flush_para()
    close_lists()
    return '\n'.join(out)


def parse_draft(path):
    text = Path(path).read_text()
    title_match = re.search(r'^#\s+(.+)$', text, flags=re.M)
    slug_match = re.search(r'^- \*\*Slug:\*\*\s*(.+)$', text, flags=re.M)
    excerpt_match = re.search(r'^- \*\*Excerpt:\*\*\s*(.+)$', text, flags=re.M)
    article_match = re.search(r'^## Article\n\n([\s\S]*?)(?:\n## Internal link suggestions|\Z)', text, flags=re.M)
    if not (title_match and slug_match and excerpt_match and article_match):
        raise RuntimeError(f'Could not parse draft {path}')
    return {
        'title': title_match.group(1).strip(),
        'slug': slug_match.group(1).strip(),
        'excerpt': excerpt_match.group(1).strip(),
        'content_html': markdown_to_html(article_match.group(1).strip()),
    }


def upsert_post(draft):
    slug_q = urllib.parse.quote(draft['slug'])
    existing = api_get(f'{BASE}?slug={slug_q}&status=publish,draft,pending,private&per_page=5')
    payload = {
        'title': draft['title'],
        'slug': draft['slug'],
        'status': 'publish',
        'excerpt': draft['excerpt'],
        'content': draft['content_html'],
        'comment_status': 'closed',
        'ping_status': 'closed',
    }
    if existing:
        post_id = existing[0]['id']
        result = api_post(f'{BASE}/{post_id}', payload)
        action = 'updated'
    else:
        result = api_post(BASE, payload)
        action = 'created'
    return action, result


def main():
    results = []
    for path in FILES:
        draft = parse_draft(path)
        action, result = upsert_post(draft)
        link = result.get('link') or ''
        status = fetch_status(link) if link else 'no-link'
        results.append({
            'file': path,
            'title': draft['title'],
            'slug': draft['slug'],
            'action': action,
            'id': result.get('id'),
            'status': result.get('status'),
            'link': link,
            'live_status': status,
        })
    print(json.dumps(results, indent=2))


if __name__ == '__main__':
    main()
