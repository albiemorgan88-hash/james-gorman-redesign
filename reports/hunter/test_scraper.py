#!/usr/bin/env python3
"""Quick test of the lead scraper"""

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
        print(f"Searching: {query}")
        response = requests.get(url, params=params)
        response.raise_for_status()
        data = response.json()
        print(f"Found {len(data.get('results', []))} results")
        return data
    except Exception as e:
        print(f"Error searching for '{query}': {e}")
        return None

def main():
    # Test with just one search
    test_queries = ["plumber Derry", "electrician Derry", "hairdresser Derry"]
    
    for query in test_queries:
        data = search_google_places(query)
        if data:
            for business in data.get('results', [])[:3]:  # Just first 3
                name = business.get('name')
                website = business.get('website', 'NONE')
                print(f"  - {name}: {website}")
        print()
        time.sleep(1)

if __name__ == "__main__":
    main()