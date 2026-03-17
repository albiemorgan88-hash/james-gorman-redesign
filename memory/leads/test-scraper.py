#!/usr/bin/env python3
"""
Test version of local lead scraper to verify functionality
"""

import os
import json
import time
import requests
from dataclasses import dataclass
from typing import Dict, List, Optional

@dataclass
class TestLead:
    name: str
    sector: str
    city: str
    phone: str
    website: str
    rating: float
    reviews: int
    score: float

def test_api():
    """Test basic Google Maps API functionality"""
    api_key = os.getenv('GOOGLE_MAPS_API_KEY')
    if not api_key:
        print("No API key found")
        return False
    
    # Test with one simple search
    url = "https://maps.googleapis.com/maps/api/place/textsearch/json"
    params = {
        'query': 'solicitor Derry Northern Ireland',
        'key': api_key,
        'region': 'uk'
    }
    
    try:
        print("Testing API connection...")
        response = requests.get(url, params=params, timeout=10)
        response.raise_for_status()
        
        data = response.json()
        results = data.get('results', [])
        
        print(f"API test successful. Found {len(results)} results for 'solicitor Derry'")
        
        # Test getting details for first result
        if results:
            place_id = results[0]['place_id']
            print(f"Testing place details for: {results[0]['name']}")
            
            details_url = "https://maps.googleapis.com/maps/api/place/details/json"
            details_params = {
                'place_id': place_id,
                'fields': 'name,formatted_phone_number,website,rating,user_ratings_total',
                'key': api_key
            }
            
            details_response = requests.get(details_url, params=details_params, timeout=10)
            details_response.raise_for_status()
            
            details = details_response.json().get('result', {})
            print(f"Details: {details.get('name', 'N/A')} | Phone: {details.get('formatted_phone_number', 'N/A')} | Website: {details.get('website', 'N/A')}")
            
        return True
        
    except Exception as e:
        print(f"API test failed: {e}")
        return False

def quick_scan():
    """Run a quick scan of just solicitors in Derry"""
    api_key = os.getenv('GOOGLE_MAPS_API_KEY')
    leads = []
    
    # Search for solicitors in Derry
    url = "https://maps.googleapis.com/maps/api/place/textsearch/json"
    params = {
        'query': 'solicitor Derry Northern Ireland',
        'key': api_key,
        'region': 'uk'
    }
    
    print("\nRunning quick scan: solicitors in Derry")
    
    response = requests.get(url, params=params)
    data = response.json()
    results = data.get('results', [])
    
    print(f"Found {len(results)} potential solicitors")
    
    for i, place in enumerate(results[:5]):  # Just top 5
        place_id = place['place_id']
        
        # Get details
        details_url = "https://maps.googleapis.com/maps/api/place/details/json"
        details_params = {
            'place_id': place_id,
            'fields': 'name,formatted_phone_number,website,rating,user_ratings_total,formatted_address',
            'key': api_key
        }
        
        details_response = requests.get(details_url, params=details_params)
        details = details_response.json().get('result', {})
        
        name = details.get('name', 'Unknown')
        phone = details.get('formatted_phone_number', 'N/A')
        website = details.get('website', 'N/A')
        rating = details.get('rating', 0)
        reviews = details.get('user_ratings_total', 0)
        address = details.get('formatted_address', 'N/A')
        
        # Basic scoring
        web_score = 1 if website == 'N/A' else 5
        gbp_score = 10 if reviews < 5 else 5
        total_score = (web_score * 0.5) + (gbp_score * 0.5)
        
        print(f"{i+1}. {name}")
        print(f"   Address: {address}")
        print(f"   Phone: {phone}")
        print(f"   Website: {website}")
        print(f"   Rating: {rating} ({reviews} reviews)")
        print(f"   Score: {total_score}")
        print()
        
        leads.append(TestLead(
            name=name, sector='solicitor', city='Derry',
            phone=phone, website=website, rating=rating,
            reviews=reviews, score=total_score
        ))
        
        time.sleep(1)  # Rate limiting
    
    return leads

def main():
    print("Local Lead Scraper - Test Version")
    
    # Test API connection
    if not test_api():
        return
    
    # Run quick scan
    leads = quick_scan()
    
    print(f"\n=== RESULTS ===")
    print(f"Found {len(leads)} leads")
    
    hot_leads = [l for l in leads if l.score >= 7]
    warm_leads = [l for l in leads if 4 <= l.score < 7]
    
    print(f"Hot leads: {len(hot_leads)}")
    print(f"Warm leads: {len(warm_leads)}")
    
    if hot_leads:
        print(f"\nTop hot leads:")
        for lead in sorted(hot_leads, key=lambda x: x.score, reverse=True):
            print(f"- {lead.name} (Score: {lead.score})")

if __name__ == "__main__":
    main()