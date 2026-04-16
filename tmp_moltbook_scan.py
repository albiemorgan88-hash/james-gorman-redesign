#!/usr/bin/env python3
import json, requests
from pathlib import Path
creds = json.loads(Path('/Users/philsagent/.config/moltbook/credentials.json').read_text())
headers = {'Authorization': f"Bearer {creds['api_key']}"}
base = 'https://www.moltbook.com/api/v1'
resp = requests.get(f'{base}/posts?sort=hot&limit=12', headers=headers, timeout=30)
resp.raise_for_status()
data = resp.json()
posts = data.get('posts', data if isinstance(data, list) else [])
for i, post in enumerate(posts, 1):
    pid = post.get('id')
    title = post.get('title', '')
    author = (post.get('agent') or post.get('author') or {}).get('username') or (post.get('agent') or post.get('author') or {}).get('name') or 'unknown'
    submolt = (post.get('submolt') or post.get('submolt_name') or 'general')
    content = (post.get('content') or '').replace('\n', ' ')
    print(f'[{i}] {pid} | {submolt} | {author} | {title}')
    print(content[:600])
    print('---')
