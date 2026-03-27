#!/usr/bin/env python3
"""
Check Apollo credits and available endpoints
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

def check_credits():
    """Check remaining Apollo credits"""
    response = requests.get(f"{BASE_URL}/auth/health", headers=headers)
    
    if response.status_code == 200:
        data = response.json()
        print("🔍 Apollo Account Status:")
        print(json.dumps(data, indent=2))
    else:
        print(f"❌ Health check failed: {response.status_code} - {response.text}")

def try_people_match():
    """Try people match API for enrichment"""
    # Get a contact first
    search_params = {
        "person_titles": ["Director"],
        "person_locations": ["Belfast, United Kingdom"],
        "per_page": 3
    }
    
    response = requests.post(f"{BASE_URL}/mixed_people/api_search", json=search_params, headers=headers)
    
    if response.status_code == 200:
        data = response.json()
        people = data.get("people", [])
        
        if people:
            person = people[0]
            org = person.get("organization", {})
            
            print(f"\n🔍 Trying people/match for: {person.get('first_name')} at {org.get('name')}")
            
            # Try match API
            match_params = {
                "first_name": person.get("first_name"),
                "organization_name": org.get("name")
            }
            
            match_response = requests.post(f"{BASE_URL}/people/match", json=match_params, headers=headers)
            
            if match_response.status_code == 200:
                match_data = match_response.json()
                print("✅ Match API successful")
                
                person_data = match_data.get("person", {})
                phone_numbers = person_data.get("phone_numbers", [])
                
                print(f"📱 Phone numbers found: {len(phone_numbers)}")
                for phone in phone_numbers:
                    print(f"  - {phone.get('type', 'unknown')}: {phone.get('sanitized_number', phone.get('number', ''))}")
                    
            else:
                print(f"❌ Match API failed: {match_response.status_code} - {match_response.text}")

def try_bulk_enrich():
    """Try bulk enrichment endpoint"""
    # Get some contact IDs first
    search_params = {
        "person_titles": ["Director"],
        "person_locations": ["Belfast, United Kingdom"],
        "per_page": 5
    }
    
    response = requests.post(f"{BASE_URL}/mixed_people/api_search", json=search_params, headers=headers)
    
    if response.status_code == 200:
        data = response.json()
        people = data.get("people", [])
        contact_ids = [p.get("id") for p in people[:3]]
        
        print(f"\n🔍 Trying bulk enrichment for {len(contact_ids)} contacts")
        
        enrich_params = {
            "person_ids": contact_ids
        }
        
        enrich_response = requests.post(f"{BASE_URL}/people/bulk_match", json=enrich_params, headers=headers)
        
        if enrich_response.status_code == 200:
            enrich_data = enrich_response.json()
            print("✅ Bulk enrichment successful")
            print(f"Response keys: {list(enrich_data.keys())}")
        else:
            print(f"❌ Bulk enrichment failed: {enrich_response.status_code} - {enrich_response.text}")

if __name__ == "__main__":
    check_credits()
    try_people_match()
    try_bulk_enrich()