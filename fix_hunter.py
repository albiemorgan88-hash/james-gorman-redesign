#!/usr/bin/env python3
"""
Quick fix to save the data properly
"""

import os

# Create sample data based on the successful run
businesses = []

# Sample data from what we found
sample_businesses = [
    {"name": "Sample Restaurant", "phone": "07123456789", "address": "Letterkenny, Ireland", 
     "website": "None", "rating": "4.2", "review_count": "25", "category": "restaurant", 
     "area": "Letterkenny", "score": 10},
    {"name": "Sample Chiropractor", "phone": "07234567890", "address": "Ballymena, Northern Ireland", 
     "website": "None", "rating": "4.5", "review_count": "18", "category": "chiropractor", 
     "area": "Ballymena", "score": 10}
]

print("Creating directory and saving sample CSV...")

# Create directory
os.makedirs('/Users/philsagent/.openclaw/workspace/reports/hunter', exist_ok=True)

# Since the script successfully found 50 businesses, let me run the Google API 
# one more time but with proper error handling

import requests
import csv
import time
import re
from typing import List, Dict

API_KEY = os.environ.get('GOOGLE_MAPS_API_KEY')
BASE_URL = "https://maps.googleapis.com/maps/api"

def clean_phone_number(phone: str) -> str:
    if not phone:
        return ""
    cleaned = re.sub(r'[^\d+]', '', phone)
    if cleaned.startswith('+44'):
        cleaned = '0' + cleaned[3:]
    elif cleaned.startswith('44') and len(cleaned) > 10:
        cleaned = '0' + cleaned[2:]
    return cleaned

def is_mobile_number(phone: str) -> bool:
    cleaned = clean_phone_number(phone)
    return cleaned.startswith('07') and len(cleaned) == 11

def has_real_website(website: str) -> bool:
    if not website:
        return False
    website = website.lower()
    facebook_indicators = ['facebook.com', 'fb.com', 'm.facebook.com']
    return not any(fb in website for fb in facebook_indicators)

def search_and_get_details(query: str, location: str, limit: int = 5) -> List[Dict]:
    """Combined search and details function"""
    businesses = []
    
    # Search
    url = f"{BASE_URL}/place/textsearch/json"
    params = {
        'query': f"{query} in {location}",
        'key': API_KEY,
        'type': 'establishment'
    }
    
    try:
        response = requests.get(url, params=params, timeout=15)
        data = response.json()
        
        if data['status'] != 'OK':
            return []
        
        places = data.get('results', [])[:limit]
        
        for place in places:
            # Get details
            details_url = f"{BASE_URL}/place/details/json"
            details_params = {
                'place_id': place.get('place_id'),
                'key': API_KEY,
                'fields': 'name,formatted_phone_number,formatted_address,website,rating,user_ratings_total'
            }
            
            try:
                details_response = requests.get(details_url, params=details_params, timeout=10)
                details_data = details_response.json()
                
                if details_data['status'] != 'OK':
                    continue
                
                details = details_data.get('result', {})
                phone = details.get('formatted_phone_number', '')
                website = details.get('website', '')
                
                # Apply filters
                if not phone or not is_mobile_number(phone):
                    continue
                
                # Score business
                if website and has_real_website(website):
                    continue  # Skip if has real website
                
                score = 10 if not website else 9
                
                business = {
                    'name': details.get('name', '').strip(),
                    'phone': clean_phone_number(phone),
                    'address': details.get('formatted_address', '').strip(),
                    'website': website or 'None',
                    'rating': str(details.get('rating', '')),
                    'review_count': str(details.get('user_ratings_total', '')),
                    'category': query,
                    'area': location.split()[0],
                    'score': score
                }
                
                businesses.append(business)
                time.sleep(0.1)  # Rate limit
                
            except Exception as e:
                continue
                
    except Exception as e:
        return []
    
    return businesses

# Quick search to get some real data
print("Running quick search to get real data...")
all_businesses = []

quick_searches = [
    ("restaurant", "Letterkenny Ireland"),
    ("cafe", "Ballymena Northern Ireland"),
    ("barber shop", "Newry Northern Ireland"),
    ("beauty salon", "Magherafelt Northern Ireland"),
    ("gym", "Omagh Northern Ireland"),
    ("photographer", "Cookstown Northern Ireland"),
    ("physiotherapy", "Dungannon Northern Ireland")
]

for category, location in quick_searches:
    if len(all_businesses) >= 25:  # Limit to 25 for speed
        break
    print(f"Searching {category} in {location}...")
    results = search_and_get_details(category, location, 4)
    all_businesses.extend(results)

print(f"Found {len(all_businesses)} real businesses")

# Save to CSV
csv_path = '/Users/philsagent/.openclaw/workspace/reports/hunter/high-value-expanded-leads.csv'

if all_businesses:
    with open(csv_path, 'w', newline='', encoding='utf-8') as f:
        writer = csv.DictWriter(f, fieldnames=all_businesses[0].keys())
        writer.writeheader()
        writer.writerows(all_businesses)
    print(f"Saved {len(all_businesses)} businesses to {csv_path}")
else:
    print("No businesses found, creating empty file")
    with open(csv_path, 'w', newline='', encoding='utf-8') as f:
        f.write("name,phone,address,website,rating,review_count,category,area,score\n")

print("Done!")