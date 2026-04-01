#!/usr/bin/env python3
"""
UK Trade Jobs Keyword Research & Gap Analysis
Using Ahrefs API to find trade keywords we're not ranking for
"""

import requests
import re
import json
import time
from typing import List, Dict, Set

# Ahrefs API config
AHREFS_API_TOKEN = "lWxblMsHrBNL_8WfiocoOAZVcNaTtCFdUAkS2BL2"
AHREFS_BASE_URL = "https://apiv2.ahrefs.com"

def extract_existing_slugs() -> Set[str]:
    """Extract existing guide slugs from guides.ts"""
    slugs = set()
    try:
        with open('/Users/philsagent/.openclaw/workspace/projects/uk-trade-jobs/src/data/guides.ts', 'r') as f:
            content = f.read()
            # Find all slug patterns
            slug_matches = re.findall(r"slug: '([^']+)'", content)
            slugs.update(slug_matches)
            print(f"Found {len(slugs)} existing guides")
    except Exception as e:
        print(f"Error reading guides.ts: {e}")
    
    return slugs

def get_trade_names_from_slugs(slugs: Set[str]) -> Set[str]:
    """Extract trade names from existing slugs"""
    trades = set()
    for slug in slugs:
        # Extract trade name from patterns like 'how-to-become-a-plumber'
        match = re.match(r'how-to-become-a?n?-(.+)', slug)
        if match:
            trade = match.group(1).replace('-', ' ')
            trades.add(trade)
    
    print(f"Existing trades: {trades}")
    return trades

def search_ahrefs_keywords(query: str, limit: int = 100) -> List[Dict]:
    """Search Ahrefs for keywords matching a query"""
    url = f"{AHREFS_BASE_URL}/keywords-explorer"
    params = {
        'select': 'keyword,search_volume,keyword_difficulty',
        'where': f"keyword_contains,{query}",
        'limit': limit,
        'order_by': 'search_volume:desc',
        'country': 'gb',  # UK
        'token': AHREFS_API_TOKEN
    }
    
    try:
        response = requests.get(url, params=params)
        response.raise_for_status()
        data = response.json()
        return data.get('keywords', [])
    except Exception as e:
        print(f"Error querying Ahrefs for '{query}': {e}")
        return []

def find_keyword_gaps(existing_trades: Set[str]) -> List[Dict]:
    """Find high-value trade keywords we're missing"""
    
    # Target keyword patterns
    patterns = [
        "how to become",
        "become a UK", 
        "apprenticeship",
        "salary UK",
        "career guide",
        "training course"
    ]
    
    all_keywords = []
    
    for pattern in patterns:
        print(f"Searching for: {pattern}")
        keywords = search_ahrefs_keywords(pattern, 200)
        all_keywords.extend(keywords)
        time.sleep(1)  # Rate limiting
    
    # Filter for trade-relevant keywords
    trade_keywords = []
    for kw in all_keywords:
        keyword = kw.get('keyword', '').lower()
        volume = kw.get('search_volume', 0)
        difficulty = kw.get('keyword_difficulty', 100)
        
        # Filter criteria
        if (volume >= 300 and 
            difficulty <= 50 and
            any(trade_term in keyword for trade_term in [
                'electrician', 'plumber', 'carpenter', 'bricklayer', 'roofer',
                'welder', 'painter', 'decorator', 'plasterer', 'tiler', 
                'scaffolder', 'gas engineer', 'hvac', 'locksmith', 'glazier',
                'kitchen fitter', 'bathroom fitter', 'flooring', 'insulation',
                'demolition', 'crane operator', 'plant operator', 'groundworker',
                'steel fixer', 'joiner', 'shopfitter', 'dryliner', 'renderer'
            ])):
            
            # Check if we already have content for this trade
            is_gap = True
            for existing_trade in existing_trades:
                if existing_trade in keyword:
                    is_gap = False
                    break
            
            if is_gap:
                kw['opportunity_score'] = volume / (difficulty + 1)
                trade_keywords.append(kw)
    
    # Sort by opportunity score (volume/difficulty ratio)
    trade_keywords.sort(key=lambda x: x.get('opportunity_score', 0), reverse=True)
    
    return trade_keywords

def suggest_new_guides(gaps: List[Dict], limit: int = 20) -> List[Dict]:
    """Suggest new career guides based on keyword gaps"""
    
    suggestions = []
    used_trades = set()
    
    for gap in gaps[:limit]:
        keyword = gap['keyword']
        
        # Extract potential trade name
        trade_name = None
        for trade in ['electrician', 'plumber', 'carpenter', 'bricklayer', 'roofer',
                     'welder', 'painter', 'decorator', 'plasterer', 'tiler', 
                     'scaffolder', 'gas engineer', 'hvac technician', 'locksmith', 'glazier',
                     'kitchen fitter', 'bathroom fitter', 'flooring installer', 'insulation installer',
                     'demolition worker', 'crane operator', 'plant operator', 'groundworker',
                     'steel fixer', 'joiner', 'shopfitter', 'dryliner', 'renderer']:
            if trade in keyword.lower():
                trade_name = trade
                break
        
        if trade_name and trade_name not in used_trades:
            slug = f"how-to-become-a-{trade_name.replace(' ', '-').replace('technician', 'tech')}"
            title = f"How to Become a {trade_name.title()} in the UK (2026 Guide)"
            
            suggestion = {
                'slug': slug,
                'title': title,
                'trade': trade_name.title(),
                'target_keyword': keyword,
                'search_volume': gap['search_volume'],
                'keyword_difficulty': gap['keyword_difficulty'],
                'opportunity_score': gap['opportunity_score']
            }
            
            suggestions.append(suggestion)
            used_trades.add(trade_name)
    
    return suggestions

def main():
    print("🔍 Starting UK Trade Jobs keyword research...")
    
    # Step 1: Get existing content
    existing_slugs = extract_existing_slugs()
    existing_trades = get_trade_names_from_slugs(existing_slugs)
    
    # Step 2: Find keyword gaps
    print("\n📊 Searching for keyword gaps...")
    gaps = find_keyword_gaps(existing_trades)
    
    print(f"\nFound {len(gaps)} keyword opportunities")
    
    # Step 3: Generate suggestions
    suggestions = suggest_new_guides(gaps, 20)
    
    print(f"\n🎯 Top {len(suggestions)} new guide suggestions:")
    print("=" * 80)
    
    for i, suggestion in enumerate(suggestions, 1):
        print(f"{i}. {suggestion['title']}")
        print(f"   Slug: {suggestion['slug']}")
        print(f"   Target: '{suggestion['target_keyword']}'")
        print(f"   Volume: {suggestion['search_volume']}, Difficulty: {suggestion['keyword_difficulty']}")
        print(f"   Opportunity Score: {suggestion['opportunity_score']:.1f}")
        print()
    
    # Save results
    with open('/Users/philsagent/.openclaw/workspace/keyword_gaps.json', 'w') as f:
        json.dump({
            'existing_trades': list(existing_trades),
            'keyword_gaps': gaps[:50],
            'suggested_guides': suggestions
        }, f, indent=2)
    
    print(f"💾 Results saved to keyword_gaps.json")

if __name__ == "__main__":
    main()