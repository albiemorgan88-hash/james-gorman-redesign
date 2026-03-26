#!/usr/bin/env python3
"""
Update tradesman-sites database with new businesses (MERGE, never replace)
"""

import os
import sys
import csv
import re
import json
import argparse
from typing import List, Dict, Set

COMPANIES_FILE = "/Users/philsagent/.openclaw/workspace/projects/tradesman-sites/lib/companies.ts"

class DatabaseUpdater:
    def __init__(self):
        self.companies_file = COMPANIES_FILE
        
    def load_existing_businesses(self) -> List[Dict]:
        """Load existing businesses from companies.ts"""
        try:
            with open(self.companies_file, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Extract the businesses array
            start_marker = "export const businesses: Business[] = ["
            end_marker = "];"
            
            start_idx = content.find(start_marker)
            if start_idx == -1:
                raise ValueError("Could not find businesses array in companies.ts")
            
            start_idx += len(start_marker)
            end_idx = content.find(end_marker, start_idx)
            if end_idx == -1:
                raise ValueError("Could not find end of businesses array")
            
            array_content = content[start_idx:end_idx].strip()
            
            # Use regex to parse business objects (more robust)
            import re
            
            # Pattern to match business objects: { slug: 'value', name: 'value', ... }
            pattern = r'\{\s*slug:\s*\'([^\']*)\',\s*name:\s*\'([^\']*)\',\s*category:\s*\'([^\']*)\',\s*phone:\s*\'([^\']*)\',\s*address:\s*\'([^\']*)\'\s*\}'
            
            businesses = []
            matches = re.findall(pattern, array_content)
            
            for match in matches:
                slug, name, category, phone, address = match
                business = {
                    'slug': slug,
                    'name': name,
                    'category': category,
                    'phone': phone,
                    'address': address
                }
                businesses.append(business)
            
            print(f"📚 Loaded {len(businesses)} existing businesses")
            return businesses
            
        except Exception as e:
            print(f"❌ Error loading existing businesses: {str(e)}")
            return []
    
    def load_new_businesses(self, csv_file: str) -> List[Dict]:
        """Load new businesses from CSV"""
        businesses = []
        
        try:
            with open(csv_file, 'r', encoding='utf-8') as f:
                reader = csv.DictReader(f)
                for row in reader:
                    business = {
                        'slug': row['slug'],
                        'name': row['name'],
                        'category': row['category'],
                        'phone': row['phone'],
                        'address': row['address']
                    }
                    businesses.append(business)
            
            print(f"📥 Loaded {len(businesses)} new businesses from CSV")
            return businesses
            
        except Exception as e:
            print(f"❌ Error loading CSV: {str(e)}")
            return []
    
    def merge_businesses(self, existing: List[Dict], new: List[Dict]) -> List[Dict]:
        """Merge new businesses with existing ones (no duplicates by phone)"""
        # Create set of existing phone numbers
        existing_phones = {b.get('phone', '').replace(' ', '') for b in existing}
        existing_slugs = {b.get('slug', '') for b in existing}
        
        merged = existing.copy()
        added_count = 0
        
        for business in new:
            phone = business.get('phone', '').replace(' ', '')
            slug = business.get('slug', '')
            
            # Skip if phone already exists
            if phone in existing_phones:
                continue
            
            # Ensure unique slug
            original_slug = slug
            counter = 1
            while slug in existing_slugs:
                slug = f"{original_slug}-{counter}"
                counter += 1
            
            business['slug'] = slug
            existing_slugs.add(slug)
            existing_phones.add(phone)
            
            merged.append(business)
            added_count += 1
        
        print(f"➕ Added {added_count} new businesses")
        print(f"📊 Total businesses: {len(merged)}")
        
        return merged
    
    def write_companies_file(self, businesses: List[Dict]):
        """Write updated businesses back to companies.ts"""
        try:
            # Read the original file to preserve interface definition
            with open(self.companies_file, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Find the interface and start of array
            interface_end = content.find("export const businesses: Business[] = [")
            if interface_end == -1:
                raise ValueError("Could not find businesses array declaration")
            
            # Build new businesses array
            businesses_js = []
            for business in businesses:
                slug = business.get('slug', '').replace("'", "\\'")
                name = business.get('name', '').replace("'", "\\'")
                category = business.get('category', '').replace("'", "\\'")
                phone = business.get('phone', '').replace("'", "\\'")
                address = business.get('address', '').replace("'", "\\'")
                
                business_str = f"  {{ slug: '{slug}', name: '{name}', category: '{category}', phone: '{phone}', address: '{address}' }}"
                businesses_js.append(business_str)
            
            # Reconstruct the file
            new_content = content[:interface_end]
            new_content += "export const businesses: Business[] = [\n"
            new_content += ",\n".join(businesses_js)
            new_content += "\n];\n"
            
            # Write back to file
            with open(self.companies_file, 'w', encoding='utf-8') as f:
                f.write(new_content)
            
            print(f"✅ Updated {self.companies_file}")
            
        except Exception as e:
            print(f"❌ Error writing companies file: {str(e)}")
            raise
    
    def deploy_site(self):
        """Build and deploy the updated site"""
        print("🚀 Building and deploying site...")
        
        deploy_cmd = """
        source ~/.zprofile && \
        cd /Users/philsagent/.openclaw/workspace/projects/tradesman-sites && \
        npm run build && \
        npx vercel --token "$VERCEL_TOKEN" --yes --prod
        """
        
        try:
            result = os.system(deploy_cmd)
            if result == 0:
                print("✅ Site deployed successfully")
                return True
            else:
                print("❌ Deployment failed")
                return False
                
        except Exception as e:
            print(f"❌ Deployment error: {str(e)}")
            return False

def main():
    parser = argparse.ArgumentParser(description='Update tradesman-sites database with new businesses')
    parser.add_argument('--csv', required=True, help='CSV file with new businesses')
    parser.add_argument('--deploy', action='store_true', help='Deploy after updating')
    
    args = parser.parse_args()
    
    updater = DatabaseUpdater()
    
    # Load existing and new businesses
    existing_businesses = updater.load_existing_businesses()
    new_businesses = updater.load_new_businesses(args.csv)
    
    if not new_businesses:
        print("❌ No new businesses to add")
        return
    
    # Merge businesses
    merged_businesses = updater.merge_businesses(existing_businesses, new_businesses)
    
    # Write updated file
    updater.write_companies_file(merged_businesses)
    
    # Deploy if requested
    if args.deploy:
        updater.deploy_site()
    
    print("\n📋 Summary:")
    print(f"  Existing businesses: {len(existing_businesses)}")
    print(f"  New businesses added: {len(merged_businesses) - len(existing_businesses)}")
    print(f"  Total businesses: {len(merged_businesses)}")

if __name__ == '__main__':
    main()