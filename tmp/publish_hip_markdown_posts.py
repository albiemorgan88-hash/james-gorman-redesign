#!/usr/bin/env python3
import argparse
import ast
import base64
import json
import re
import subprocess
import sys
import urllib.parse
import urllib.request
from pathlib import Path
from urllib.error import HTTPError

WORKSPACE = Path('/Users/philsagent/.openclaw/workspace')
SEED_SCRIPT = WORKSPACE / 'tmp' / 'hip_publish_posts.py'
DEFAULT_CATEGORY_NAME = 'School Wellbeing'
DEFAULT_CATEGORY_SLUG = 'school-wellbeing'


def load_wp_config():
    source = SEED_SCRIPT.read_text()
    base = re.search(r'^BASE\s*=\s*["\']([^"\']+)["\']', source, re.M)
    user = re.search(r'^USER\s*=\s*["\']([^"\']+)["\']', source, re.M)
    password = re.search(r'^PASSWORD\s*=\s*["\']([^"\']+)["\']', source, re.M)
    if not (base and user and password):
        raise RuntimeError('Could not parse WordPress credentials from seed script')
    return base.group(1), user.group(1), password.group(1)


BASE, USER, PASSWORD = load_wp_config()
AUTH = base64.b64encode(f'{USER}:{PASSWORD}'.encode()).decode()
HEADERS = {
    'Authorization': f'Basic {AUTH}',
    'Content-Type': 'application/json',
    'Accept': 'application/json',
}


def api(method, path, data=None, params=None):
    url = f'{BASE}{path}'
    if params:
        url += '?' + urllib.parse.urlencode(params, doseq=True)
    body = None if data is None else json.dumps(data).encode('utf-8')
    req = urllib.request.Request(url, data=body, method=method, headers=HEADERS)
    try:
        with urllib.request.urlopen(req, timeout=60) as resp:
            raw = resp.read().decode('utf-8')
            return json.loads(raw) if raw else None
    except HTTPError as e:
        raw = e.read().decode('utf-8', errors='replace')
        try:
            detail = json.loads(raw)
        except Exception:
            detail = {'status': e.code, 'raw': raw}
        raise RuntimeError(f'API {method} {path} failed: {detail}')


META_PATTERNS = {
    'target_keyword': re.compile(r'^- \*\*Target keyword:\*\*\s*(.+)$', re.M),
    'slug': re.compile(r'^- \*\*Slug:\*\*\s*(.+)$', re.M),
    'meta_title': re.compile(r'^- \*\*Meta title:\*\*\s*(.+)$', re.M),
    'meta_description': re.compile(r'^- \*\*Meta description:\*\*\s*(.+)$', re.M),
    'excerpt': re.compile(r'^- \*\*Excerpt:\*\*\s*(.+)$', re.M),
}


def parse_markdown(path: Path):
    text = path.read_text()
    title_match = re.search(r'^#\s+(.+)$', text, re.M)
    if not title_match:
        raise RuntimeError(f'Missing title in {path}')

    meta = {'title': title_match.group(1).strip()}
    for key, pattern in META_PATTERNS.items():
        match = pattern.search(text)
        if not match:
            raise RuntimeError(f'Missing {key} in {path}')
        meta[key] = match.group(1).strip()

    article_start = text.find('## Article')
    if article_start == -1:
        raise RuntimeError(f'Missing ## Article section in {path}')
    article = text[article_start + len('## Article'):].strip()
    link_suggestions = article.find('## Internal link suggestions')
    if link_suggestions != -1:
        article = article[:link_suggestions].rstrip()

    if not article:
        raise RuntimeError(f'Empty article body in {path}')

    meta['article_markdown'] = article
    return meta


def markdown_to_html(markdown_text: str) -> str:
    proc = subprocess.run(
        ['pandoc', '--from=gfm', '--to=html5'],
        input=markdown_text.encode('utf-8'),
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        check=True,
    )
    return proc.stdout.decode('utf-8').strip()


def ensure_category(name=DEFAULT_CATEGORY_NAME, slug=DEFAULT_CATEGORY_SLUG):
    categories = api('GET', '/categories', params={'slug': slug})
    if categories:
        return categories[0]['id']
    try:
        created = api('POST', '/categories', {'name': name, 'slug': slug})
        return created['id']
    except RuntimeError as e:
        if 'term_exists' in str(e):
            categories = api('GET', '/categories', params={'slug': slug})
            if categories:
                return categories[0]['id']
        raise


def upsert_post(post, category_id, publish=False):
    existing = api('GET', '/posts', params={'slug': post['slug'], 'status': 'publish,draft,pending,future,private'})
    payload = {
        'title': post['title'],
        'slug': post['slug'],
        'content': post['content_html'],
        'excerpt': post['excerpt'],
        'categories': [category_id],
        'status': 'publish' if publish else 'draft',
    }
    if existing:
        post_id = existing[0]['id']
        result = api('POST', f'/posts/{post_id}', payload)
        action = 'updated'
    else:
        result = api('POST', '/posts', payload)
        action = 'created'
    return {
        'action': action,
        'id': result['id'],
        'slug': result['slug'],
        'status': result['status'],
        'link': result['link'],
        'title': result['title']['rendered'],
    }


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('files', nargs='+')
    parser.add_argument('--publish', action='store_true')
    args = parser.parse_args()

    category_id = ensure_category()
    results = []
    for raw_path in args.files:
        path = Path(raw_path)
        post = parse_markdown(path)
        post['content_html'] = markdown_to_html(post['article_markdown'])
        result = upsert_post(post, category_id, publish=args.publish)
        result['source_file'] = str(path)
        results.append(result)

    print(json.dumps({'category_id': category_id, 'results': results}, indent=2))


if __name__ == '__main__':
    main()
