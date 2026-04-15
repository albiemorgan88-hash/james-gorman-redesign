#!/usr/bin/env python3
import json
from pathlib import Path
from collections import defaultdict
import re

base = Path('/Users/philsagent/.openclaw/workspace')
ahrefs = json.loads((base/'tmp/ahrefs-gap-2026-04-15.json').read_text())
gsc_md = (base/'reports/gsc/bluecanvas-keywords-2026-03-10.md').read_text()
weekly_gsc_md = (base/'reports/seo-data/gsc-bluecanvas-2026-03-06.md').read_text()

# Metrics observed live from Ahrefs on 2026-04-15
metrics = {
    'bluecanvas.ai': {'dr': 26.0, 'refdomains': 17, 'backlinks': 5799, 'org_keywords': 0, 'org_traffic': 0},
    'brainpool.ai': {'dr': 38.0, 'refdomains': 553, 'backlinks': 1445, 'org_keywords': 73, 'org_traffic': 1318},
    'iwantmore.ai': {'dr': 6.0, 'refdomains': 128, 'backlinks': 231, 'org_keywords': 22, 'org_traffic': 247},
    'aicc.co': {'dr': 36.0, 'refdomains': 202, 'backlinks': 14127, 'org_keywords': 10, 'org_traffic': 22},
    'artellis.ie': {'dr': 0.1, 'refdomains': 1, 'backlinks': 1, 'org_keywords': 0, 'org_traffic': 0},
    'elementseven.co.uk': {'dr': 0.0, 'refdomains': 32, 'backlinks': 42, 'org_keywords': 0, 'org_traffic': 0},
    'aiforbusinessnorthernireland.co.uk': {'dr': 0.0, 'refdomains': 1, 'backlinks': 1, 'org_keywords': 0, 'org_traffic': 0},
}

focus = ['brainpool.ai','iwantmore.ai','aicc.co']
our_domains = {row['domain'] for row in ahrefs['domains']['bluecanvas.ai']['refdomains']['refdomains']}

# backlink gap intersect
candidates = defaultdict(lambda: {'count': 0, 'competitors': [], 'domain_rating': 0, 'traffic_domain': 0, 'links': {}, 'dofollow': {}})
for comp in focus:
    rows = ahrefs['domains'][comp]['refdomains']['refdomains']
    seen = set()
    for row in rows:
        d = row['domain']
        if d in our_domains or d in seen:
            continue
        seen.add(d)
        item = candidates[d]
        item['count'] += 1
        item['competitors'].append(comp)
        item['domain_rating'] = max(item['domain_rating'], row.get('domain_rating') or 0)
        item['traffic_domain'] = max(item['traffic_domain'], row.get('traffic_domain') or 0)
        item['links'][comp] = row.get('links_to_target') or 0
        item['dofollow'][comp] = row.get('dofollow_links') or 0

shared = [
    {'domain': d, **v} for d, v in candidates.items() if v['count'] >= 2
]
shared.sort(key=lambda x: (-x['count'], -(x['domain_rating'] or 0), -(x['traffic_domain'] or 0), x['domain']))
shared = shared[:20]

single_best = []
for comp in focus:
    rows = ahrefs['domains'][comp]['refdomains']['refdomains']
    for row in rows:
        d = row['domain']
        if d in our_domains:
            continue
        single_best.append({
            'domain': d,
            'competitor': comp,
            'domain_rating': row.get('domain_rating') or 0,
            'traffic_domain': row.get('traffic_domain') or 0,
            'links_to_target': row.get('links_to_target') or 0,
            'dofollow_links': row.get('dofollow_links') or 0,
        })
single_best.sort(key=lambda x: (-(x['domain_rating']), -(x['traffic_domain']), x['domain']))
# dedupe by domain keeping best
seen = set(); single_dedup = []
for row in single_best:
    if row['domain'] in seen:
        continue
    seen.add(row['domain'])
    single_dedup.append(row)
single_dedup = single_dedup[:20]

# keyword gaps from competitors, prioritising commercial service intent
keywords = defaultdict(lambda: {'volume': 0, 'best_position': 999, 'sum_traffic': 0, 'cpc': 0, 'kd': 0, 'comps': set(), 'urls': set(), 'flags': set()})
for comp in ['brainpool.ai','iwantmore.ai']:
    for row in ahrefs['domains'][comp]['organic_keywords']['keywords']:
        kw = row['keyword'].strip().lower()
        item = keywords[kw]
        item['volume'] = max(item['volume'], row.get('volume') or 0)
        item['best_position'] = min(item['best_position'], row.get('best_position') or 999)
        item['sum_traffic'] = max(item['sum_traffic'], row.get('sum_traffic') or 0)
        item['cpc'] = max(item['cpc'] or 0, row.get('cpc') or 0)
        item['kd'] = max(item['kd'] or 0, row.get('keyword_difficulty') or 0)
        item['comps'].add(comp)
        item['urls'].add(row.get('best_position_url') or '')
        if row.get('is_commercial'): item['flags'].add('commercial')
        if row.get('is_local'): item['flags'].add('local')
        if row.get('is_informational'): item['flags'].add('informational')

priority_kw = []
for kw, v in keywords.items():
    if any(x in kw for x in ['consult', 'agency', 'company', 'services', 'training', 'strategy']) and v['volume'] >= 50:
        priority_kw.append({
            'keyword': kw,
            'volume': v['volume'],
            'best_position': v['best_position'],
            'sum_traffic': v['sum_traffic'],
            'cpc': v['cpc'],
            'kd': v['kd'],
            'competitors': sorted(v['comps']),
            'flags': sorted(v['flags']),
            'urls': sorted(u for u in v['urls'] if u),
        })
priority_kw.sort(key=lambda x: (-(len(x['competitors'])), -(x['sum_traffic']), -(x['volume']), x['best_position']))
priority_kw = priority_kw[:20]

# Parse GSC keyword table only from markdown
query_rows = []
in_keywords = False
for line in gsc_md.splitlines():
    if line.startswith('## Top Keywords'):
        in_keywords = True
        continue
    if in_keywords and line.startswith('## Top Pages'):
        break
    if in_keywords and line.startswith('|') and not line.startswith('| #') and not line.startswith('|---'):
        parts = [p.strip() for p in line.strip('|').split('|')]
        if len(parts) == 6 and parts[0].isdigit():
            try:
                query_rows.append({
                    'query': parts[1],
                    'clicks': int(parts[2]),
                    'impressions': int(parts[3].replace(',','')),
                    'ctr': parts[4],
                    'position': float(parts[5]),
                })
            except Exception:
                pass

quick_wins = [r for r in query_rows if 4 <= r['position'] <= 10 and r['impressions'] >= 20]
quick_wins.sort(key=lambda x: (-x['impressions'], x['position']))

# overlap between GSC demand and competitor kws
competitor_kw_set = set(keywords)
overlap = []
for row in query_rows:
    q = row['query'].lower()
    if q in competitor_kw_set:
        k = keywords[q]
        overlap.append({
            'query': q,
            'impressions': row['impressions'],
            'position_gsc': row['position'],
            'best_comp_position': k['best_position'],
            'competitors': sorted(k['comps']),
            'volume': k['volume'],
            'sum_traffic': k['sum_traffic'],
            'cpc': k['cpc'],
        })
overlap.sort(key=lambda x: (-x['impressions'], x['position_gsc']))

# Write summary JSON for reference
summary = {
    'metrics': metrics,
    'shared_backlink_gap': shared,
    'top_single_backlink_targets': single_dedup,
    'priority_keyword_gap': priority_kw,
    'gsc_quick_wins_last_verified': quick_wins[:15],
    'gsc_ahrefs_overlap': overlap[:20],
}
print(json.dumps(summary, indent=2))
