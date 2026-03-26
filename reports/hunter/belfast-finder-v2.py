#!/usr/bin/env python3
import requests
import json
import csv
import time
import os
import re
from urllib.parse import urlencode

# Google Maps API key from environment
API_KEY = os.environ.get('GOOGLE_MAPS_API_KEY')

if not API_KEY:
    print("Error: GOOGLE_MAPS_API_KEY not found in environment")
    exit(1)

# Belfast areas to search - starting with smaller set
LOCATIONS = [
    "Belfast, Northern Ireland",
    "East Belfast, Northern Ireland",
    "West Belfast, Northern Ireland", 
    "South Belfast, Northern Ireland",
    "North Belfast, Northern Ireland"
]

# Prioritized high-value categories
CATEGORIES = [
    "dentist", "physiotherapy", "chiropractor",
    "restaurant", "cafe", 
    "gym", "yoga studio",
    "veterinary", "dog grooming",
    "beauty salon", "barber shop",
    "estate agent"
]

def is_mobile_number(phone):
    """Check if phone number is a mobile (starts with 07)"""
    if not phone:
        return False
    # Remove spaces, dashes, brackets, +44
    clean = re.sub(r'[\s\-\(\)\+]', '', phone)
    clean = re.sub(r'^44', '', clean)  # Remove UK country code
    return clean.startswith('07') and len(clean) >= 11

def has_real_website(website):
    """Check if business has a real website (not Facebook-only)"""
    if not website:
        return False
    
    # Facebook-only = not a real website
    facebook_domains = ['facebook.com', 'fb.com', 'm.facebook.com']
    for domain in facebook_domains:
        if domain in website.lower():
            return False
    
    return True

def search_places(category, location):
    """Search for places using Google Places Text Search"""
    query = f"{category} {location}"
    params = {
        'query': query,
        'key': API_KEY,
        'type': 'establishment'
    }
    
    url = f"https://maps.googleapis.com/maps/api/place/textsearch/json?{urlencode(params)}"
    
    try:
        response = requests.get(url, timeout=10)
        response.raise_for_status()
        return response.json()
    except Exception as e:
        print(f"❌ Error searching {category} in {location}: {e}")
        return {'results': []}

def get_place_details(place_id):
    """Get detailed info for a place"""
    params = {
        'place_id': place_id,
        'fields': 'name,formatted_phone_number,website,formatted_address,rating,user_ratings_total',
        'key': API_KEY
    }
    
    url = f"https://maps.googleapis.com/maps/api/place/details/json?{urlencode(params)}"
    
    try:
        response = requests.get(url, timeout=10)
        response.raise_for_status()
        data = response.json()
        return data.get('result', {})
    except Exception as e:
        print(f"❌ Error getting details for {place_id}: {e}")
        return {}

def main():
    all_businesses = []
    seen_place_ids = set()
    
    print(f"🔍 Starting Belfast business search...")
    print(f"📊 Searching {len(CATEGORIES)} categories across {len(LOCATIONS)} locations")
    
    total_searches = len(CATEGORIES) * len(LOCATIONS)
    current_search = 0
    
    for location in LOCATIONS:
        print(f"\n🌍 === {location} ===")
        
        for category in CATEGORIES:
            current_search += 1
            print(f"\n[{current_search}/{total_searches}] 🔎 Searching {category}...")
            
            # Search for places
            search_results = search_places(category, location)
            places = search_results.get('results', [])
            
            print(f"   📍 Found {len(places)} places")
            
            qualifying_count = 0
            for place in places:
                place_id = place.get('place_id')
                if not place_id or place_id in seen_place_ids:
                    continue
                    
                seen_place_ids.add(place_id)
                
                # Get detailed info
                details = get_place_details(place_id)
                time.sleep(0.1)  # Rate limit: 0.1s between detail calls
                
                if not details:
                    continue
                
                name = details.get('name', '')
                phone = details.get('formatted_phone_number', '')
                website = details.get('website', '')
                address = details.get('formatted_address', '')
                rating = details.get('rating', 0)
                review_count = details.get('user_ratings_total', 0)
                
                # Apply filters
                if not is_mobile_number(phone):
                    print(f"   ❌ {name}: {phone or 'No phone'} (not mobile)")
                    continue
                    
                if has_real_website(website):
                    print(f"   ❌ {name}: Has website ({website})")
                    continue
                
                # This business qualifies!
                business = {
                    'name': name,
                    'category': category,
                    'phone': phone,
                    'address': address,
                    'location': location,
                    'rating': rating,
                    'review_count': review_count,
                    'website': website or '',
                    'place_id': place_id
                }
                
                all_businesses.append(business)
                qualifying_count += 1
                print(f"   ✅ {name} ({phone}) - {review_count} reviews")
            
            print(f"   🎯 {qualifying_count} qualifying businesses found")
            
            # Rate limit between category searches
            time.sleep(0.3)
    
    print(f"\n🎉 TOTAL FOUND: {len(all_businesses)} qualifying businesses!")
    
    if len(all_businesses) == 0:
        print("⚠️  No qualifying businesses found. Check filters.")
        return
    
    # Sort by review count (descending)
    all_businesses.sort(key=lambda x: x['review_count'], reverse=True)
    
    # Save to CSV
    csv_path = '/Users/philsagent/.openclaw/workspace/reports/hunter/belfast-leads.csv'
    with open(csv_path, 'w', newline='', encoding='utf-8') as f:
        writer = csv.DictWriter(f, fieldnames=all_businesses[0].keys())
        writer.writeheader()
        writer.writerows(all_businesses)
    
    print(f"💾 Saved {len(all_businesses)} businesses to {csv_path}")
    
    # Show breakdown
    print("\n📊 BREAKDOWN BY LOCATION:")
    location_counts = {}
    for business in all_businesses:
        loc = business['location']
        location_counts[loc] = location_counts.get(loc, 0) + 1
    
    for loc, count in sorted(location_counts.items(), key=lambda x: x[1], reverse=True):
        print(f"   {loc}: {count}")
    
    print("\n📊 BREAKDOWN BY CATEGORY:")
    category_counts = {}
    for business in all_businesses:
        cat = business['category']
        category_counts[cat] = category_counts.get(cat, 0) + 1
    
    for cat, count in sorted(category_counts.items(), key=lambda x: x[1], reverse=True):
        print(f"   {cat}: {count}")
    
    print("\n🏆 TOP 10 BY REVIEW COUNT:")
    for i, business in enumerate(all_businesses[:10], 1):
        print(f"   {i}. {business['name']} - {business['review_count']} reviews ({business['category']})")

if __name__ == '__main__':
    main()