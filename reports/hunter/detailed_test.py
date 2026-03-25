#!/usr/bin/env python3
"""Test detailed scraper with place details"""

import requests
import os
import time

GOOGLE_MAPS_API_KEY = os.getenv('GOOGLE_MAPS_API_KEY')

def search_google_places(query):
    """Search Google Places for businesses"""
    url = "https://maps.googleapis.com/maps/api/place/textsearch/json"
    params = {
        'query': query,
        'key': GOOGLE_MAPS_API_KEY
    }
    
    try:
        response = requests.get(url, params=params)
        response.raise_for_status()
        return response.json()
    except Exception as e:
        print(f"Error searching for '{query}': {e}")
        return None

def get_place_details(place_id):
    """Get detailed information for a place"""
    url = "https://maps.googleapis.com/maps/api/place/details/json"
    params = {
        'place_id': place_id,
        'fields': 'name,formatted_phone_number,website,url,rating,user_ratings_total,formatted_address,business_status',
        'key': GOOGLE_MAPS_API_KEY
    }
    
    try:
        response = requests.get(url, params=params)
        response.raise_for_status()
        return response.json().get('result', {})
    except Exception as e:
        print(f"Error getting details for place_id '{place_id}': {e}")
        return {}

def main():
    print("🔍 Testing detailed lead scraping")
    
    # Test with just plumbers in Derry
    data = search_google_places("plumber Derry")
    if not data:
        return
        
    businesses = data.get('results', [])
    hot_leads = []
    
    print(f"Found {len(businesses)} plumbers in Derry")
    print("Checking details for first 10...")
    
    for i, business in enumerate(businesses[:10]):
        name = business.get('name')
        place_id = business.get('place_id')
        
        print(f"\n{i+1}. {name}")
        
        if place_id:
            details = get_place_details(place_id)
            time.sleep(0.2)  # Rate limiting
            
            phone = details.get('formatted_phone_number', 'No phone')
            website = details.get('website', '')
            address = details.get('formatted_address', 'No address')
            rating = details.get('rating', 0)
            reviews = details.get('user_ratings_total', 0)
            
            print(f"   📞 {phone}")
            print(f"   📍 {address}")
            print(f"   ⭐ {rating}/5 ({reviews} reviews)")
            print(f"   🌐 {website if website else 'NO WEBSITE'}")
            
            # Score this business
            if not website:
                score = 10
                print(f"   🔥 HOT LEAD - Score: {score}/10 (NO WEBSITE)")
                hot_leads.append({
                    'name': name,
                    'phone': phone, 
                    'address': address,
                    'rating': rating,
                    'reviews': reviews,
                    'website': 'NONE',
                    'score': score
                })
            elif 'facebook.com' in website.lower():
                score = 8
                print(f"   🔥 HOT LEAD - Score: {score}/10 (FACEBOOK ONLY)")
                hot_leads.append({
                    'name': name,
                    'phone': phone, 
                    'address': address,
                    'rating': rating,
                    'reviews': reviews,
                    'website': website,
                    'score': score
                })
            else:
                print(f"   ✅ Has website - Score: 5/10")
    
    print(f"\n🎯 SUMMARY:")
    print(f"Total checked: 10")
    print(f"Hot leads found: {len(hot_leads)}")
    
    if hot_leads:
        print(f"\n🔥 HOT LEADS:")
        for lead in hot_leads:
            print(f"  - {lead['name']} (Score: {lead['score']}/10)")
            if lead['phone']:
                print(f"    📞 {lead['phone']}")

if __name__ == "__main__":
    main()