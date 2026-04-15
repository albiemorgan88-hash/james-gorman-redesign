#!/usr/bin/env python3
import json, os, sys, time, urllib.request, urllib.parse, urllib.error

DATE = '2026-04-15'
TOKEN = os.environ.get('AHREFS_API_TOKEN')
if not TOKEN:
    print('Missing AHREFS_API_TOKEN', file=sys.stderr)
    sys.exit(1)

def fetch(url):
    req = urllib.request.Request(url, headers={'Authorization': f'Bearer {TOKEN}'})
    with urllib.request.urlopen(req, timeout=60) as r:
        return json.loads(r.read().decode())

# pass domains via argv or use defaults
if len(sys.argv) > 1:
    domains = sys.argv[1:]
else:
    domains = ['bluecanvas.ai','brainpool.ai','iwantmore.ai','artellis.ie','aicc.co']

endpoints = ['domain-rating','metrics','backlinks-stats']
results = {}
for d in domains:
    results[d] = {}
    for ep in endpoints:
        url = f'https://api.ahrefs.com/v3/site-explorer/{ep}?date={DATE}&target={urllib.parse.quote(d)}'
        try:
            results[d][ep] = fetch(url)
        except urllib.error.HTTPError as e:
            body = e.read().decode(errors='ignore')
            results[d][ep] = {'_error': f'HTTP {e.code}', '_body': body[:500]}
        except Exception as e:
            results[d][ep] = {'_error': str(e)}
        time.sleep(1.2)
print(json.dumps(results, indent=2))
