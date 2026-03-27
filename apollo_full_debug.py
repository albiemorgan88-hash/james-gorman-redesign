#!/usr/bin/env python3
"""
Full Apollo response debug
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

def inspect_full_response():
    params = {
        "person_titles": ["Director"],
        "person_locations": ["Belfast, United Kingdom"],
        "per_page": 3
    }
    
    response = requests.post(f"{BASE_URL}/mixed_people/api_search", json=params, headers=headers)
    
    if response.status_code == 200:
        data = response.json()
        people = data.get("people", [])
        
        print("🔍 Full response structure:")
        print(f"Top level keys: {list(data.keys())}")
        
        if people:
            person = people[0]
            print(f"\n📋 Sample person data structure:")
            print(f"Person keys: {list(person.keys())}")
            
            print(f"\n📱 Phone data:")
            phone_numbers = person.get("phone_numbers", [])
            print(f"Phone numbers field: {phone_numbers}")
            
            if phone_numbers:
                for i, phone in enumerate(phone_numbers):
                    print(f"  Phone {i}: {phone}")
            
            print(f"\n🏢 Organization data:")
            org = person.get("organization", {})
            if org:
                print(f"Org keys: {list(org.keys())}")
                
            print(f"\n👤 Full person object:")
            print(json.dumps(person, indent=2))
            
    else:
        print(f"❌ Error: {response.status_code} - {response.text}")

inspect_full_response()