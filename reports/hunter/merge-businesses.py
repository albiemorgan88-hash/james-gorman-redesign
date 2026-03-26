#!/usr/bin/env python3
import csv
import re
import json

def generate_slug(name):
    """Generate slug from business name"""
    slug = name.lower()
    # Replace non-alphanumeric with hyphens
    slug = re.sub(r'[^a-z0-9]', '-', slug)
    # Remove multiple consecutive hyphens
    slug = re.sub(r'-+', '-', slug)
    # Strip leading/trailing hyphens
    slug = slug.strip('-')
    return slug

def parse_existing_businesses(file_path):
    """Parse existing businesses from TypeScript file"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    businesses = []
    # Find all business entries using regex
    pattern = r"\{\s*slug:\s*['\"]([^'\"]+)['\"],\s*name:\s*['\"]([^'\"]+)['\"],\s*category:\s*['\"]([^'\"]+)['\"],\s*phone:\s*['\"]([^'\"]*)['\"],\s*address:\s*['\"]([^'\"]+)['\"]\s*\}"
    
    matches = re.findall(pattern, content, re.MULTILINE | re.DOTALL)
    
    for match in matches:
        slug, name, category, phone, address = match
        businesses.append({
            'slug': slug,
            'name': name,
            'category': category,
            'phone': phone,
            'address': address
        })
    
    print(f"Found {len(businesses)} existing businesses")
    return businesses

def load_new_businesses(csv_path):
    """Load new businesses from CSV"""
    businesses = []
    with open(csv_path, 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        for row in reader:
            slug = generate_slug(row['name'])
            businesses.append({
                'slug': slug,
                'name': row['name'],
                'category': row['category'],
                'phone': row['phone'],
                'address': row['address']
            })
    
    print(f"Loaded {len(businesses)} new businesses")
    return businesses

def merge_businesses(existing, new):
    """Merge new businesses with existing ones, avoiding duplicates"""
    existing_slugs = set(b['slug'] for b in existing)
    
    merged = existing.copy()
    new_added = 0
    
    for business in new:
        if business['slug'] not in existing_slugs:
            merged.append(business)
            existing_slugs.add(business['slug'])
            new_added += 1
        else:
            print(f"Skipping duplicate: {business['name']} (slug: {business['slug']})")
    
    print(f"Added {new_added} new businesses")
    print(f"Total businesses: {len(merged)}")
    return merged, new_added

def write_typescript_file(businesses, output_path):
    """Write merged businesses back to TypeScript format"""
    content = """export interface Business {
  slug: string;
  name: string;
  category: string;
  phone: string;
  address: string;
}

export const businesses: Business[] = [
"""
    
    for business in businesses:
        # Escape quotes in strings
        name = business['name'].replace("'", "\\'")
        category = business['category'].replace("'", "\\'")
        phone = business['phone'].replace("'", "\\'")
        address = business['address'].replace("'", "\\'")
        slug = business['slug'].replace("'", "\\'")
        
        content += f"  {{ slug: '{slug}', name: '{name}', category: '{category}', phone: '{phone}', address: '{address}' }},\n"
    
    content += "];\n"
    
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"Written merged businesses to {output_path}")

def generate_statistics(businesses):
    """Generate statistics breakdown"""
    stats = {
        'total': len(businesses),
        'by_area': {},
        'by_category': {}
    }
    
    # Count by area (from address)
    for business in businesses:
        address = business['address']
        if 'Belfast' in address:
            area = 'Belfast'
        elif 'Lisburn' in address:
            area = 'Lisburn'
        elif 'Bangor' in address:
            area = 'Bangor'
        elif 'Holywood' in address:
            area = 'Holywood'
        elif 'Newtownards' in address:
            area = 'Newtownards'
        elif 'Carrickfergus' in address:
            area = 'Carrickfergus'
        elif 'Antrim' in address:
            area = 'Antrim'
        elif 'Londonderry' in address or 'Derry' in address:
            area = 'Derry/Londonderry'
        else:
            area = 'Other'
        
        stats['by_area'][area] = stats['by_area'].get(area, 0) + 1
    
    # Count by category
    for business in businesses:
        category = business['category']
        stats['by_category'][category] = stats['by_category'].get(category, 0) + 1
    
    return stats

def main():
    print("🔧 Merging Belfast businesses into tradesman-sites database...")
    
    existing_path = '/Users/philsagent/.openclaw/workspace/projects/tradesman-sites/lib/companies.ts'
    new_csv_path = '/Users/philsagent/.openclaw/workspace/reports/hunter/belfast-leads.csv'
    
    # Load existing businesses
    existing_businesses = parse_existing_businesses(existing_path)
    
    # Load new businesses
    new_businesses = load_new_businesses(new_csv_path)
    
    # Merge
    merged_businesses, new_count = merge_businesses(existing_businesses, new_businesses)
    
    # Write back to TypeScript file
    write_typescript_file(merged_businesses, existing_path)
    
    # Generate statistics
    stats = generate_statistics(merged_businesses)
    
    print(f"\n📊 FINAL STATISTICS:")
    print(f"Total businesses in database: {stats['total']}")
    print(f"New businesses added: {new_count}")
    
    print(f"\n📍 BREAKDOWN BY AREA:")
    for area, count in sorted(stats['by_area'].items(), key=lambda x: x[1], reverse=True):
        print(f"   {area}: {count}")
    
    print(f"\n🏷️  TOP CATEGORIES:")
    top_categories = sorted(stats['by_category'].items(), key=lambda x: x[1], reverse=True)[:15]
    for category, count in top_categories:
        print(f"   {category}: {count}")

if __name__ == '__main__':
    main()