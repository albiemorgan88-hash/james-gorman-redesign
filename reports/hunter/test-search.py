#!/usr/bin/env python3
import requests
import json
import os
import re
from urllib.parse import urlencode

# Google Maps API key from environment
API_KEY = os.environ.get('GOOGLE_MAPS_API_KEY')
print(f"API Key: {API_KEY[:10]}...")

def is_mobile_number(phone):
    """Check if phone number is a mobile (starts with 07)"""
    if not phone:
        return False
    clean = re.sub(r'[\s\-\(\)\+]', '', phone)
    clean = re.sub(r'^44', '', clean)
    return clean.startswith('07') and len(clean) >= 11

def has_real_website(website):
    """Check if business has a real website"""
    if not website:
        return False
    facebook_domains = ['facebook.com', 'fb.com', 'm.facebook.com']
    for domain in facebook_domains:
        if domain in website.lower():
            return False
    return True

print("🔍 Testing search for dentists in Belfast...")

# Test search
query = "dentist Belfast"
params = {
    'query': query,
    'key': API_KEY,
    'type': 'establishment'
}

url = f"https://maps.googleapis.com/maps/api/place/textsearch/json?{urlencode(params)}"
response = requests.get(url)
data = response.json()

print(f"Status: {data.get('status')}")
places = data.get('results', [])
print(f"Found {len(places)} dentists")

qualifying = []

for i, place in enumerate(places[:5]):  # Test first 5
    place_id = place.get('place_id')
    print(f"\n{i+1}. Testing: {place.get('name', 'Unknown')}")
    
    # Get details
    detail_params = {
        'place_id': place_id,
        'fields': 'name,formatted_phone_number,website,formatted_address,rating,user_ratings_total',
        'key': API_KEY
    }
    
    detail_url = f"https://maps.googleapis.com/maps/api/place/details/json?{urlencode(detail_params)}"
    detail_response = requests.get(detail_url)
    details = detail_response.json().get('result', {})
    
    name = details.get('name', '')
    phone = details.get('formatted_phone_number', '')
    website = details.get('website', '')
    address = details.get('formatted_address', '')
    rating = details.get('rating', 0)
    review_count = details.get('user_ratings_total', 0)
    
    print(f"   Name: {name}")
    print(f"   Phone: {phone}")
    print(f"   Website: {website}")
    print(f"   Mobile?: {is_mobile_number(phone)}")
    print(f"   Real website?: {has_real_website(website)}")
    
    # Apply filters
    if not is_mobile_number(phone):
        print(f"   ❌ Excluded: Not mobile number")
        continue
        
    if has_real_website(website):
        print(f"   ❌ Excluded: Has real website")
        continue
    
    print(f"   ✅ QUALIFIES!")
    qualifying.append({
        'name': name,
        'phone': phone,
        'website': website,
        'address': address,
        'rating': rating,
        'review_count': review_count
    })

print(f"\n🎯 {len(qualifying)} qualifying businesses out of 5 tested")
for q in qualifying:
    print(f"   ✅ {q['name']} ({q['phone']}) - {q['review_count']} reviews")