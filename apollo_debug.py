#!/usr/bin/env python3
"""
Debug Apollo API calls
"""

import requests
import json
import os

# Check API key
APOLLO_API_KEY = os.environ.get("APOLLO_API_KEY")
print(f"API Key: {APOLLO_API_KEY[:10]}..." if APOLLO_API_KEY else "No API key")

# Test simple search
def test_simple_search():
    url = "https://api.apollo.io/api/v1/mixed_people/api_search"
    
    # Very simple search first
    simple_params = {
        "person_locations": ["Northern Ireland, United Kingdom"],
        "page": 1,
        "per_page": 5
    }
    
    headers = {
        "X-Api-Key": APOLLO_API_KEY,
        "Content-Type": "application/json"
    }
    
    print("Testing simple search...")
    response = requests.post(url, json=simple_params, headers=headers)
    print(f"Status: {response.status_code}")
    
    try:
        data = response.json()
        print("Response keys:", list(data.keys()))
        
        if response.status_code != 200:
            print("Error details:", json.dumps(data, indent=2))
        else:
            people = data.get("people", [])
            print(f"Found {len(people)} people")
            if people:
                print("First person:", people[0].get("name", "Unknown"))
                
    except Exception as e:
        print(f"JSON parse error: {e}")
        print("Raw response:", response.text[:500])

# Test with industry keywords
def test_trades_search():
    url = "https://api.apollo.io/api/v1/mixed_people/api_search"
    
    trades_params = {
        "q_keywords": "electrical contractor",
        "person_locations": ["United Kingdom"],
        "page": 1,
        "per_page": 5
    }
    
    headers = {
        "X-Api-Key": APOLLO_API_KEY,
        "Content-Type": "application/json"
    }
    
    print("\nTesting trades search...")
    response = requests.post(url, json=trades_params, headers=headers)
    print(f"Status: {response.status_code}")
    
    try:
        data = response.json()
        if response.status_code != 200:
            print("Error details:", json.dumps(data, indent=2))
        else:
            people = data.get("people", [])
            print(f"Found {len(people)} trades people")
            
    except Exception as e:
        print(f"JSON parse error: {e}")

if __name__ == "__main__":
    test_simple_search()
    test_trades_search()