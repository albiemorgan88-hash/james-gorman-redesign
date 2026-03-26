#!/usr/bin/env python3
"""
Final business hunter - find businesses without websites in expanded NI areas.
Focus on mobile numbers only, high-value categories.
"""

import requests
import csv
import time
import os
import re
from typing import List, Dict, Set
import json

# Configuration
API_KEY = os.environ.get('GOOGLE_MAPS_API_KEY')
BASE_URL = "https://maps.googleapis.com/maps/api"

# Target areas in priority order
AREAS = [
    "Letterkenny Ireland",
    "Ballymena Northern Ireland", 
    "Newry Northern Ireland",
    "Magherafelt Northern Ireland",
    "Omagh Northern Ireland",
    "Cookstown Northern Ireland", 
    "Dungannon Northern Ireland"
]

# High-value categories that would pay £500 for a website
CATEGORIES = [
    "dentist", "physiotherapy", "chiropractor", "optician",
    "restaurant", "cafe", "hotel", "bed and breakfast",
    "veterinary", "beauty salon", "barber shop",
    "estate agent", "wedding venue", "photographer",
    "gym", "yoga studio", "nursery", "car dealer"
]

def clean_phone_number(phone: str) -> str:
    """Clean and format phone number"""
    if not phone:
        return ""
    
    cleaned = re.sub(r'[^\d+]', '', phone)
    
    # Handle UK numbers starting with +44
    if cleaned.startswith('+44'):
        cleaned = '0' + cleaned[3:]
    elif cleaned.startswith('44') and len(cleaned) > 10:
        cleaned = '0' + cleaned[2:]
    
    return cleaned

def is_mobile_number(phone: str) -> bool:
    """Check if phone number is a UK mobile (starts with 07)"""
    cleaned = clean_phone_number(phone)
    return cleaned.startswith('07') and len(cleaned) == 11

def has_real_website(website: str) -> bool:
    """Check if business has a real website (not Facebook only)"""
    if not website:
        return False
    
    website = website.lower()
    facebook_indicators = ['facebook.com', 'fb.com', 'm.facebook.com']
    return not any(fb in website for fb in facebook_indicators)

def search_places(query: str, location: str) -> List[Dict]:
    """Search for places using Google Places API Text Search"""
    url = f"{BASE_URL}/place/textsearch/json"
    
    params = {
        'query': f"{query} in {location}",
        'key': API_KEY,
        'type': 'establishment'
    }
    
    try:
        response = requests.get(url, params=params, timeout=15)
        response.raise_for_status()
        data = response.json()
        
        if data['status'] != 'OK':
            print(f"   ⚠️  {data['status']} for: {query}")
            return []
            
        return data.get('results', [])
    
    except Exception as e:
        print(f"   ❌ Error: {e}")
        return []

def get_place_details(place_id: str) -> Dict:
    """Get detailed information about a place"""
    url = f"{BASE_URL}/place/details/json"
    
    params = {
        'place_id': place_id,
        'key': API_KEY,
        'fields': 'name,formatted_phone_number,formatted_address,website,rating,user_ratings_total'
    }
    
    try:
        response = requests.get(url, params=params, timeout=10)
        response.raise_for_status()
        data = response.json()
        
        if data['status'] != 'OK':
            return {}
            
        return data.get('result', {})
    
    except Exception as e:
        return {}

def score_business(business: Dict) -> int:
    """Score business based on website presence"""
    website = business.get('website', '')
    
    # No website = highest priority
    if not website:
        return 10
    
    # Facebook-only = high priority  
    if not has_real_website(website):
        return 9
        
    # Has real website = skip
    return 0

def main():
    print("🎯 BUSINESS HUNTER - Expanded NI Areas")
    print("=" * 50)
    
    all_businesses = []
    seen_places = set()
    target = 50
    
    for area_idx, area in enumerate(AREAS, 1):
        if len(all_businesses) >= target:
            break
            
        print(f"\n📍 [{area_idx}/{len(AREAS)}] {area}")
        
        for cat_idx, category in enumerate(CATEGORIES, 1):
            if len(all_businesses) >= target:
                break
                
            print(f"   🔎 [{cat_idx:2d}] {category:<15}", end=" ")
            
            # Search for businesses
            places = search_places(category, area)
            found_count = 0
            
            for place in places[:8]:  # Limit to 8 results per category
                if len(all_businesses) >= target:
                    break
                    
                place_id = place.get('place_id')
                
                # Skip duplicates
                if place_id in seen_places:
                    continue
                seen_places.add(place_id)
                
                # Get detailed info
                details = get_place_details(place_id)
                if not details:
                    continue
                
                phone = details.get('formatted_phone_number', '')
                website = details.get('website', '')
                
                # Apply filters
                if not phone:
                    continue
                    
                if not is_mobile_number(phone):
                    continue
                    
                score = score_business(details)
                if score < 8:  # Skip businesses with real websites
                    continue
                
                business = {
                    'name': details.get('name', '').strip(),
                    'phone': clean_phone_number(phone),
                    'address': details.get('formatted_address', '').strip(),
                    'website': website or 'None',
                    'rating': details.get('rating', ''),
                    'review_count': details.get('user_ratings_total', ''),
                    'category': category,
                    'area': area.split()[0],  # First word (city)
                    'score': score
                }
                
                all_businesses.append(business)
                found_count += 1
            
            # Show result for this category
            if found_count > 0:
                print(f"✅ {found_count}")
            else:
                print("❌ 0")
            
            # Rate limiting between searches
            time.sleep(0.2)
        
        # Progress update after each area
        print(f"   📊 Area total: {len([b for b in all_businesses if b['area'] == area.split()[0]])} businesses")
        print(f"   📈 Running total: {len(all_businesses)}/{target}")
    
    print(f"\n🎉 HUNT COMPLETE: {len(all_businesses)} businesses found!")
    
    # Sort by score (highest first)
    all_businesses.sort(key=lambda x: (x['score'], x['review_count']), reverse=True)
    
    # Create output directory
    os.makedirs('/Users/philsagent/.openclaw/workspace/reports/hunter', exist_ok=True)
    csv_path = '/Users/philsagent/.openclaw/workspace/reports/hunter/high-value-expanded-leads.csv'
    
    # Save to CSV
    if all_businesses:
        with open(csv_path, 'w', newline='', encoding='utf-8') as f:
            writer = csv.DictWriter(f, fieldnames=all_businesses[0].keys())
            writer.writeheader()
            writer.writerows(all_businesses)
        
        print(f"💾 Saved to: {csv_path}")
    
    # Analysis
    print("\n📊 BREAKDOWN:")
    print("-" * 30)
    
    # By area
    area_counts = {}
    for b in all_businesses:
        area = b['area']
        area_counts[area] = area_counts.get(area, 0) + 1
    
    print("Areas:")
    for area, count in sorted(area_counts.items(), key=lambda x: x[1], reverse=True):
        print(f"  {area:<12} {count:3d}")
    
    # By category  
    cat_counts = {}
    for b in all_businesses:
        cat = b['category']
        cat_counts[cat] = cat_counts.get(cat, 0) + 1
    
    print("\nCategories:")
    for cat, count in sorted(cat_counts.items(), key=lambda x: x[1], reverse=True):
        print(f"  {cat:<15} {count:3d}")
    
    print("\n📈 Score Distribution:")
    score_counts = {}
    for b in all_businesses:
        score = b['score']
        score_counts[score] = score_counts.get(score, 0) + 1
    
    for score in sorted(score_counts.keys(), reverse=True):
        count = score_counts[score]
        print(f"  Score {score:2d}: {count:3d} businesses")
    
    return len(all_businesses)

if __name__ == "__main__":
    try:
        found_count = main()
        print(f"\n🚀 SUCCESS: {found_count} businesses ready for website outreach!")
    except KeyboardInterrupt:
        print("\n⏸️  Stopped by user")
    except Exception as e:
        print(f"\n❌ Error: {e}")