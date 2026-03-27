#!/usr/bin/env python3
"""
Simplified Apollo search to test parameters
"""

import requests
import json
import os

APOLLO_API_KEY = os.environ.get("APOLLO_API_KEY")
BASE_URL = "https://api.apollo.io/api/v1"

headers = {
    "X-Api-Key": APOLLO_API_KEY,
    "Content-Type": "application/json"
}

def test_search(name, params):
    print(f"\n🔍 Testing: {name}")
    print(f"Parameters: {json.dumps(params, indent=2)}")
    
    response = requests.post(f"{BASE_URL}/mixed_people/api_search", json=params, headers=headers)
    
    if response.status_code == 200:
        data = response.json()
        people = data.get("people", [])
        print(f"✅ Found {len(people)} people")
        
        if people:
            for i, person in enumerate(people[:3]):
                org = person.get("organization", {})
                mobile_nums = person.get("phone_numbers", [])
                mobiles = [p for p in mobile_nums if p.get("type") in ["mobile", "cell"]]
                mobile_status = f"📱 {len(mobiles)} mobiles" if mobiles else "❌ No mobile"
                
                print(f"  {i+1}. {person.get('name', 'Unknown')} - {person.get('title', '')}")
                print(f"     {org.get('name', '')} | {person.get('city', '')} | {mobile_status}")
        
        return len(people)
    else:
        print(f"❌ Error {response.status_code}: {response.text}")
        return 0

# Test 1: Very broad UK search
test_search("Broad UK search", {
    "person_locations": ["United Kingdom"],
    "per_page": 25
})

# Test 2: Northern Ireland only
test_search("Northern Ireland only", {
    "person_locations": ["Northern Ireland, United Kingdom"],
    "per_page": 25
})

# Test 3: Electrical with broader location
test_search("Electrical contractors UK", {
    "q_keywords": "electrical",
    "person_locations": ["United Kingdom"],
    "per_page": 25
})

# Test 4: Just Belfast
test_search("Belfast only", {
    "person_locations": ["Belfast, United Kingdom"],
    "per_page": 25
})

# Test 5: Construction industry
test_search("Construction industry", {
    "q_organization_keyword_tags": ["construction"],
    "person_locations": ["United Kingdom"],
    "per_page": 25
})

# Test 6: Simple job title search
test_search("Directors in NI", {
    "person_titles": ["Director"],
    "person_locations": ["Northern Ireland, United Kingdom"],
    "per_page": 25
})