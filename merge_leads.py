#!/usr/bin/env python3
"""
Merge new expanded leads into existing tradesman-sites project
"""

import csv
import re
from typing import List, Dict, Set

def create_slug(business_name: str) -> str:
    """Create a URL-friendly slug from business name"""
    # Convert to lowercase
    slug = business_name.lower()
    
    # Remove common business suffixes
    suffixes = [' ltd', ' limited', ' plc', ' company', ' co', ' llc', ' inc']
    for suffix in suffixes:
        if slug.endswith(suffix):
            slug = slug[:-len(suffix)]
    
    # Replace special characters and spaces
    slug = re.sub(r'[^\w\s-]', '', slug)  # Remove special chars except spaces and hyphens
    slug = re.sub(r'\s+', '-', slug)      # Replace spaces with hyphens
    slug = re.sub(r'-+', '-', slug)       # Replace multiple hyphens with single
    slug = slug.strip('-')                 # Remove leading/trailing hyphens
    
    return slug

def read_csv_leads(csv_path: str) -> List[Dict]:
    """Read new leads from CSV"""
    leads = []
    
    try:
        with open(csv_path, 'r', encoding='utf-8') as f:
            reader = csv.DictReader(f)
            for row in reader:
                leads.append({
                    'name': row['name'].strip(),
                    'phone': row['phone'].strip(),
                    'address': row['address'].strip(),
                    'category': row['category'].strip(),
                    'area': row['area'].strip()
                })
    except Exception as e:
        print(f"Error reading CSV: {e}")
        return []
    
    return leads

def parse_existing_businesses(ts_content: str) -> tuple[List[Dict], Set[str]]:
    """Parse existing businesses from TypeScript file"""
    businesses = []
    slugs = set()
    
    # Extract the businesses array content
    start = ts_content.find('export const businesses: Business[] = [')
    if start == -1:
        return businesses, slugs
    
    end = ts_content.find('];', start)
    if end == -1:
        return businesses, slugs
    
    array_content = ts_content[start:end + 2]
    
    # Simple parsing - look for business objects
    import re
    pattern = r'\{\s*slug:\s*\'([^\']+)\',\s*name:\s*\'([^\']+)\',\s*category:\s*\'([^\']+)\',\s*phone:\s*\'([^\']*)\',\s*address:\s*\'([^\']+)\'\s*\}'
    
    for match in re.finditer(pattern, array_content):
        slug, name, category, phone, address = match.groups()
        businesses.append({
            'slug': slug,
            'name': name,
            'category': category,
            'phone': phone,
            'address': address
        })
        slugs.add(slug)
    
    return businesses, slugs

def main():
    print("🔄 MERGING NEW LEADS INTO TRADESMAN-SITES PROJECT")
    print("=" * 55)
    
    # Read new leads
    csv_path = '/Users/philsagent/.openclaw/workspace/reports/hunter/high-value-expanded-leads.csv'
    new_leads = read_csv_leads(csv_path)
    print(f"📊 Found {len(new_leads)} new leads to merge")
    
    if not new_leads:
        print("❌ No new leads found - exiting")
        return
    
    # Read existing businesses
    ts_path = '/Users/philsagent/.openclaw/workspace/projects/tradesman-sites/lib/companies.ts'
    try:
        with open(ts_path, 'r', encoding='utf-8') as f:
            ts_content = f.read()
    except Exception as e:
        print(f"❌ Error reading TypeScript file: {e}")
        return
    
    existing_businesses, existing_slugs = parse_existing_businesses(ts_content)
    print(f"📊 Found {len(existing_businesses)} existing businesses")
    
    # Process new leads
    new_businesses = []
    added_count = 0
    duplicate_count = 0
    
    for lead in new_leads:
        # Create slug
        slug = create_slug(lead['name'])
        
        # Check for duplicates
        if slug in existing_slugs:
            duplicate_count += 1
            print(f"   ⚠️  Duplicate slug: {slug} (skipped)")
            continue
        
        # Map category to existing format
        category_mapping = {
            'barber shop': 'barber',
            'beauty salon': 'beauty salon',
            'gym': 'gym', 
            'restaurant': 'restaurant',
            'cafe': 'cafe',
            'hotel': 'hotel',
            'bed and breakfast': 'hotel',
            'physiotherapy': 'physiotherapy',
            'dentist': 'dentist',
            'chiropractor': 'chiropractor',
            'optician': 'optician',
            'veterinary': 'veterinary',
            'estate agent': 'estate agent',
            'wedding venue': 'wedding venue',
            'photographer': 'photographer',
            'car dealer': 'car dealer',
            'nursery': 'nursery'
        }
        
        category = category_mapping.get(lead['category'], lead['category'])
        
        new_business = {
            'slug': slug,
            'name': lead['name'],
            'category': category,
            'phone': lead['phone'],
            'address': lead['address']
        }
        
        new_businesses.append(new_business)
        existing_slugs.add(slug)  # Prevent internal duplicates
        added_count += 1
        print(f"   ✅ {lead['name']} -> {slug}")
    
    print(f"\n📈 Summary:")
    print(f"   Added: {added_count}")
    print(f"   Duplicates: {duplicate_count}")
    print(f"   Total after merge: {len(existing_businesses) + added_count}")
    
    # Generate new TypeScript content
    all_businesses = existing_businesses + new_businesses
    
    # Sort by name for better organization
    all_businesses.sort(key=lambda x: x['name'].lower())
    
    # Create new TypeScript content
    ts_header = '''export interface Business {
  slug: string;
  name: string;
  category: string;
  phone: string;
  address: string;
}

export const businesses: Business[] = ['''
    
    ts_entries = []
    for business in all_businesses:
        # Escape quotes in strings
        name = business['name'].replace("'", "\\'")
        address = business['address'].replace("'", "\\'")
        
        entry = f"  {{ slug: '{business['slug']}', name: '{name}', category: '{business['category']}', phone: '{business['phone']}', address: '{address}' }}"
        ts_entries.append(entry)
    
    ts_footer = '];\n'
    
    new_ts_content = ts_header + '\n' + ',\n'.join(ts_entries) + '\n' + ts_footer
    
    # Write updated file
    try:
        with open(ts_path, 'w', encoding='utf-8') as f:
            f.write(new_ts_content)
        print(f"✅ Updated {ts_path}")
    except Exception as e:
        print(f"❌ Error writing file: {e}")
        return
    
    # Show breakdown by area and category
    print(f"\n📊 NEW LEADS BREAKDOWN:")
    print(f"By Area:")
    area_counts = {}
    for lead in new_leads:
        area = lead['area']
        area_counts[area] = area_counts.get(area, 0) + 1
    
    for area, count in sorted(area_counts.items()):
        print(f"   {area}: {count}")
    
    print(f"\nBy Category:")
    cat_counts = {}
    for lead in new_leads:
        cat = lead['category']
        cat_counts[cat] = cat_counts.get(cat, 0) + 1
    
    for cat, count in sorted(cat_counts.items(), key=lambda x: x[1], reverse=True):
        print(f"   {cat}: {count}")

if __name__ == "__main__":
    main()