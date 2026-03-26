#!/usr/bin/env python3
"""
Expanded local business hunter for Derry/NI area.
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

# Areas to search (expanded)
AREAS = [
    "Letterkenny, Ireland",
    "Magherafelt, Northern Ireland", 
    "Omagh, Northern Ireland",
    "Cookstown, Northern Ireland",
    "Dungannon, Northern Ireland", 
    "Ballymena, Northern Ireland",
    "Newry, Northern Ireland"
]

# High-value categories that would pay £500 for a website
CATEGORIES = [
    "dentist", "physiotherapy", "chiropractor", "optician",
    "restaurant", "cafe", "pub", "hotel", "bed and breakfast",
    "gym", "yoga studio", "crossfit", "pilates",
    "veterinary", "dog grooming", "kennels", 
    "nursery", "creche", "childcare",
    "car dealer", "MOT centre", "car detailing",
    "wedding venue", "photographer", "florist",
    "beauty salon", "barber shop",
    "estate agent", "letting agent"
]

def clean_phone_number(phone: str) -> str:
    """Clean and format phone number"""
    if not phone:
        return ""
    
    # Remove all non-digits and +
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
        response = requests.get(url, params=params)
        response.raise_for_status()
        data = response.json()
        
        if data['status'] != 'OK':
            print(f"Warning: API returned status {data['status']} for query: {query} in {location}")
            return []
            
        return data.get('results', [])
    
    except Exception as e:
        print(f"Error searching for '{query}' in '{location}': {e}")
        return []

def get_place_details(place_id: str) -> Dict:
    """Get detailed information about a place"""
    url = f"{BASE_URL}/place/details/json"
    
    params = {
        'place_id': place_id,
        'key': API_KEY,
        'fields': 'name,formatted_phone_number,formatted_address,website,rating,user_ratings_total,geometry'
    }
    
    try:
        response = requests.get(url, params=params)
        response.raise_for_status()
        data = response.json()
        
        if data['status'] != 'OK':
            print(f"Warning: Details API returned status {data['status']} for place_id: {place_id}")
            return {}
            
        return data.get('result', {})
    
    except Exception as e:
        print(f"Error getting details for place_id {place_id}: {e}")
        return {}

def score_business(business: Dict) -> int:
    """Score business based on website presence and other factors"""
    website = business.get('website', '')
    
    # No website = high score
    if not website:
        return 10
    
    # Facebook-only = high score  
    if not has_real_website(website):
        return 9
        
    # Has real website = skip
    return 0

def main():
    print("🔍 Starting expanded business hunt for Derry/NI area...")
    print(f"📍 Areas: {len(AREAS)}")
    print(f"🏢 Categories: {len(CATEGORIES)}")
    print(f"🎯 Target: 50+ mobile-only businesses without websites")
    print("-" * 60)
    
    all_businesses = []
    seen_places = set()  # Track place IDs to avoid duplicates
    
    total_searches = len(AREAS) * len(CATEGORIES)
    search_count = 0
    
    for area in AREAS:
        print(f"\n📍 Searching {area}...")
        
        for category in CATEGORIES:
            search_count += 1
            print(f"   🔎 {category} ({search_count}/{total_searches})")
            
            # Search for businesses
            places = search_places(category, area)
            
            for place in places:
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
                if not phone or not is_mobile_number(phone):
                    continue
                    
                score = score_business(details)
                if score < 8:  # Skip businesses with real websites
                    continue
                
                business = {
                    'name': details.get('name', ''),
                    'phone': clean_phone_number(phone),
                    'address': details.get('formatted_address', ''),
                    'website': website,
                    'rating': details.get('rating', ''),
                    'review_count': details.get('user_ratings_total', ''),
                    'category': category,
                    'area': area.split(',')[0],  # Just city name
                    'score': score,
                    'place_id': place_id
                }
                
                all_businesses.append(business)
                print(f"      ✅ {business['name']} - {business['phone']} (Score: {score})")
            
            # Rate limiting
            time.sleep(0.1)
    
    print(f"\n📊 Found {len(all_businesses)} qualifying businesses")
    
    # Sort by score (highest first) and take top 50+
    all_businesses.sort(key=lambda x: x['score'], reverse=True)
    
    # Save to CSV
    os.makedirs('/Users/philsagent/.openclaw/workspace/reports/hunter', exist_ok=True)
    csv_path = '/Users/philsagent/.openclaw/workspace/reports/hunter/high-value-expanded-leads.csv'
    
    with open(csv_path, 'w', newline='', encoding='utf-8') as f:
        if all_businesses:
            writer = csv.DictWriter(f, fieldnames=all_businesses[0].keys())
            writer.writeheader()
            writer.writerows(all_businesses)
    
    print(f"💾 Saved {len(all_businesses)} businesses to {csv_path}")
    
    # Breakdown by area and category
    print("\n📈 Breakdown by Area:")
    area_counts = {}
    for business in all_businesses:
        area = business['area']
        area_counts[area] = area_counts.get(area, 0) + 1
    
    for area, count in sorted(area_counts.items()):
        print(f"   {area}: {count}")
    
    print("\n📈 Breakdown by Category:")
    category_counts = {}
    for business in all_businesses:
        category = business['category']
        category_counts[category] = category_counts.get(category, 0) + 1
    
    for category, count in sorted(category_counts.items(), key=lambda x: x[1], reverse=True):
        print(f"   {category}: {count}")
    
    return len(all_businesses)

if __name__ == "__main__":
    found_count = main()
    print(f"\n🎯 Mission Complete: Found {found_count} businesses for website opportunities!")