#!/usr/bin/env python3
"""
Efficient local business hunter for Derry/NI area.
Find 50+ businesses without websites, mobile numbers only.
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

# Start with high-value areas first
PRIORITY_AREAS = [
    "Letterkenny, Ireland", 
    "Ballymena, Northern Ireland",
    "Newry, Northern Ireland"
]

SECONDARY_AREAS = [
    "Magherafelt, Northern Ireland",
    "Omagh, Northern Ireland", 
    "Cookstown, Northern Ireland",
    "Dungannon, Northern Ireland"
]

# Focus on highest-value categories first
HIGH_VALUE_CATEGORIES = [
    "dentist", "physiotherapy", "optician",
    "restaurant", "hotel", "bed and breakfast", 
    "veterinary", "beauty salon",
    "estate agent", "letting agent",
    "wedding venue", "photographer"
]

SECONDARY_CATEGORIES = [
    "chiropractor", "cafe", "pub", "gym", "yoga studio",
    "dog grooming", "nursery", "car dealer", "florist", "barber shop"
]

def clean_phone_number(phone: str) -> str:
    """Clean and format phone number"""
    if not phone:
        return ""
    
    cleaned = re.sub(r'[^\d+]', '', phone)
    
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
        'query': f"{query} {location}",
        'key': API_KEY,
    }
    
    try:
        print(f"      API Call: {query} in {location}")
        response = requests.get(url, params=params, timeout=10)
        response.raise_for_status()
        data = response.json()
        
        if data['status'] != 'OK':
            print(f"      ⚠️  API status: {data['status']}")
            return []
            
        results = data.get('results', [])
        print(f"      📊 Found {len(results)} results")
        return results
    
    except Exception as e:
        print(f"      ❌ Error: {e}")
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
        print(f"        ❌ Details error: {e}")
        return {}

def score_business(business: Dict) -> int:
    """Score business based on website presence"""
    website = business.get('website', '')
    
    if not website:
        return 10
    
    if not has_real_website(website):
        return 9
        
    return 0

def main():
    print("🔍 Starting efficient business hunt...")
    print(f"🎯 Target: 50+ mobile-only businesses without websites")
    print("-" * 50)
    
    all_businesses = []
    seen_places = set()
    target_count = 50
    
    # Start with priority areas and categories
    areas_to_search = PRIORITY_AREAS + SECONDARY_AREAS
    categories_to_search = HIGH_VALUE_CATEGORIES + SECONDARY_CATEGORIES
    
    for area in areas_to_search:
        if len(all_businesses) >= target_count:
            break
            
        print(f"\n📍 {area}")
        
        for category in categories_to_search:
            if len(all_businesses) >= target_count:
                break
                
            print(f"   🔎 {category}")
            
            places = search_places(category, area)
            
            for place in places[:10]:  # Limit to first 10 results per search
                if len(all_businesses) >= target_count:
                    break
                    
                place_id = place.get('place_id')
                
                if place_id in seen_places:
                    continue
                seen_places.add(place_id)
                
                details = get_place_details(place_id)
                if not details:
                    continue
                
                phone = details.get('formatted_phone_number', '')
                website = details.get('website', '')
                
                # Apply filters
                if not phone or not is_mobile_number(phone):
                    continue
                    
                score = score_business(details)
                if score < 8:
                    continue
                
                business = {
                    'name': details.get('name', ''),
                    'phone': clean_phone_number(phone),
                    'address': details.get('formatted_address', ''),
                    'website': website or 'None',
                    'rating': details.get('rating', ''),
                    'review_count': details.get('user_ratings_total', ''),
                    'category': category,
                    'area': area.split(',')[0],
                    'score': score
                }
                
                all_businesses.append(business)
                print(f"      ✅ {business['name']} - {business['phone']} (Score: {score})")
            
            time.sleep(0.2)  # Rate limiting
            
            # Progress update
            if len(all_businesses) % 10 == 0 and len(all_businesses) > 0:
                print(f"\n📈 Progress: {len(all_businesses)} businesses found...")
    
    print(f"\n🎯 COMPLETE: Found {len(all_businesses)} qualifying businesses")
    
    # Sort by score
    all_businesses.sort(key=lambda x: x['score'], reverse=True)
    
    # Save to CSV
    os.makedirs('/Users/philsagent/.openclaw/workspace/reports/hunter', exist_ok=True)
    csv_path = '/Users/philsagent/.openclaw/workspace/reports/hunter/high-value-expanded-leads.csv'
    
    with open(csv_path, 'w', newline='', encoding='utf-8') as f:
        if all_businesses:
            writer = csv.DictWriter(f, fieldnames=all_businesses[0].keys())
            writer.writeheader()
            writer.writerows(all_businesses)
    
    print(f"💾 Saved to: {csv_path}")
    
    # Breakdowns
    print("\n📊 Area Breakdown:")
    area_counts = {}
    for b in all_businesses:
        area = b['area']
        area_counts[area] = area_counts.get(area, 0) + 1
    
    for area, count in sorted(area_counts.items()):
        print(f"   {area}: {count}")
    
    print("\n📊 Category Breakdown:")
    cat_counts = {}
    for b in all_businesses:
        cat = b['category']
        cat_counts[cat] = cat_counts.get(cat, 0) + 1
    
    for cat, count in sorted(cat_counts.items(), key=lambda x: x[1], reverse=True):
        print(f"   {cat}: {count}")
    
    return len(all_businesses)

if __name__ == "__main__":
    found_count = main()
    print(f"\n🚀 Mission: {found_count} businesses ready for website outreach!")