#!/usr/bin/env python3
import json, os, sys, time, urllib.request, urllib.parse, urllib.error

DATE = '2026-04-15'
TOKEN = os.environ.get('AHREFS_API_TOKEN')
if not TOKEN:
    print('Missing AHREFS_API_TOKEN', file=sys.stderr)
    sys.exit(1)

HEADERS = {'Authorization': f'Bearer {TOKEN}'}

def fetch(url, retries=4):
    for i in range(retries):
        req = urllib.request.Request(url, headers=HEADERS)
        try:
            with urllib.request.urlopen(req, timeout=90) as r:
                return json.loads(r.read().decode())
        except urllib.error.HTTPError as e:
            body = e.read().decode(errors='ignore')
            if e.code == 429 and i < retries - 1:
                time.sleep(20 * (i + 1))
                continue
            return {'_error': f'HTTP {e.code}', '_body': body[:500]}
        except Exception as e:
            if i < retries - 1:
                time.sleep(5 * (i + 1))
                continue
            return {'_error': str(e)}

base = 'https://api.ahrefs.com/v3/site-explorer/'
out = {'date': DATE, 'domains': {}}

# current focus set
focus = ['bluecanvas.ai', 'brainpool.ai', 'iwantmore.ai', 'aicc.co']
for domain in focus:
    entry = {}
    entry['refdomains'] = fetch(base + 'refdomains?' + urllib.parse.urlencode({
        'date': DATE, 'target': domain, 'limit': 100,
        'order_by': 'domain_rating:desc',
        'select': 'domain,domain_rating,links_to_target,dofollow_links,first_seen,traffic_domain'
    }))
    time.sleep(4)
    entry['organic_keywords'] = fetch(base + 'organic-keywords?' + urllib.parse.urlencode({
        'date': DATE, 'target': domain, 'limit': 50,
        'order_by': 'sum_traffic:desc',
        'select': 'keyword,best_position,volume,sum_traffic,cpc,keyword_difficulty,best_position_url,is_local,is_commercial,is_informational'
    }))
    time.sleep(4)
    entry['top_pages'] = fetch(base + 'top-pages?' + urllib.parse.urlencode({
        'date': DATE, 'target': domain, 'limit': 20,
        'order_by': 'sum_traffic:desc',
        'select': 'url,sum_traffic,top_keyword,top_keyword_volume,top_keyword_best_position,referring_domains,keywords,ur'
    }))
    time.sleep(6)
    out['domains'][domain] = entry

print(json.dumps(out, indent=2))
