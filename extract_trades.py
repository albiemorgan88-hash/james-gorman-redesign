#!/usr/bin/env python3
"""
Extract existing trades from guides.ts to identify gaps
"""

import re

def extract_existing_trades():
    """Extract existing guide trades from guides.ts"""
    trades = set()
    slugs = []
    
    try:
        with open('/Users/philsagent/.openclaw/workspace/projects/uk-trade-jobs/src/data/guides.ts', 'r') as f:
            content = f.read()
            
            # Find all slug patterns
            slug_matches = re.findall(r"slug: '([^']+)'", content)
            slugs.extend(slug_matches)
            
            # Extract trade names from slugs
            for slug in slugs:
                # Handle different patterns
                if slug.startswith('how-to-become-'):
                    trade_part = slug.replace('how-to-become-', '')
                    trade_part = trade_part.replace('a-', '').replace('an-', '')
                    trade = trade_part.replace('-', ' ')
                    trades.add(trade)
                elif 'switching-to-trades' in slug:
                    continue  # Skip general guide
                else:
                    # Handle other patterns
                    continue
    
    except Exception as e:
        print(f"Error reading guides.ts: {e}")
    
    return trades, slugs

# Run extraction
existing_trades, existing_slugs = extract_existing_trades()

print(f"Found {len(existing_slugs)} existing guides:")
for slug in sorted(existing_slugs):
    print(f"  - {slug}")

print(f"\nExisting trades covered ({len(existing_trades)}):")
for trade in sorted(existing_trades):
    print(f"  - {trade}")

# Common UK trades we might be missing
all_uk_trades = {
    'electrician', 'plumber', 'carpenter', 'bricklayer', 'roofer', 'tiler', 
    'painter', 'decorator', 'plasterer', 'scaffolder', 'welder', 'joiner',
    'gas engineer', 'hvac technician', 'locksmith', 'glazier', 'kitchen fitter',
    'bathroom fitter', 'solar panel installer', 'ev charger installer',
    'heat pump installer', 'wind turbine technician', 'marine engineer',
    'aircraft maintenance engineer', 'lift engineer', 'swimming pool technician',
    'landscape gardener', 'fence installer', 'demolition worker', 'crane operator',
    'groundworker', 'steel fixer', 'dryliner', 'renderer', 'floor layer',
    'insulation installer', 'roofline installer', 'gutter installer',
    'conservatory installer', 'double glazing installer', 'alarm installer',
    'cctv installer', 'satellite installer', 'aerial installer',
    'garage door installer', 'boiler installer', 'radiator installer',
    'underfloor heating installer', 'smart home installer', 'fire alarm installer'
}

# Find gaps
gaps = all_uk_trades - existing_trades

print(f"\n🎯 Potential gaps to fill ({len(gaps)}):")
for trade in sorted(gaps):
    slug = f"how-to-become-a-{trade.replace(' ', '-')}"
    print(f"  - {trade} → {slug}")

print(f"\nTotal guides we could create: {len(gaps)}")