#!/usr/bin/env python3
"""
Test Apollo contact enrichment
"""

import requests
import json
import os
import time

APOLLO_API_KEY = os.environ.get("APOLLO_API_KEY")
BASE_URL = "https://api.apollo.io/api/v1"

headers = {
    "X-Api-Key": APOLLO_API_KEY,
    "Content-Type": "application/json"
}

def get_and_enrich_contacts():
    # First, get some contacts with phones
    search_params = {
        "person_titles": ["Director", "Owner"],
        "person_locations": ["Belfast, United Kingdom"],
        "per_page": 10
    }
    
    print("🔍 Getting contacts with phones...")
    response = requests.post(f"{BASE_URL}/mixed_people/api_search", json=search_params, headers=headers)
    
    if response.status_code != 200:
        print(f"❌ Search failed: {response.text}")
        return
    
    data = response.json()
    people = data.get("people", [])
    people_with_phones = [p for p in people if p.get("has_direct_phone") == "Yes"]
    
    print(f"📊 Found {len(people)} total, {len(people_with_phones)} with phones")
    
    if not people_with_phones:
        print("❌ No contacts with phones found")
        return
    
    # Now try to enrich a few
    for i, person in enumerate(people_with_phones[:3]):
        print(f"\n📋 Enriching contact {i+1}: {person.get('first_name')} {person.get('last_name_obfuscated')}")
        
        enrich_params = {
            "id": person.get("id")
        }
        
        enrich_response = requests.post(f"{BASE_URL}/people/{person.get('id')}/contact", headers=headers)
        
        if enrich_response.status_code == 200:
            enriched_data = enrich_response.json()
            print(f"✅ Enriched successfully")
            print(f"Contact keys: {list(enriched_data.keys()) if isinstance(enriched_data, dict) else 'Not dict'}")
            
            # Check for phone numbers
            if isinstance(enriched_data, dict):
                contact = enriched_data.get("contact", enriched_data)
                phone_numbers = contact.get("phone_numbers", [])
                
                if phone_numbers:
                    print(f"📱 Found {len(phone_numbers)} phone numbers:")
                    for phone in phone_numbers:
                        phone_type = phone.get("type", "unknown")
                        phone_number = phone.get("sanitized_number", phone.get("number", ""))
                        print(f"  - {phone_type}: {phone_number}")
                else:
                    print("📱 No phone numbers in enriched data")
                    print(f"Available fields: {list(contact.keys())}")
        
        else:
            print(f"❌ Enrich failed: {enrich_response.status_code} - {enrich_response.text}")
        
        time.sleep(1)  # Rate limiting

get_and_enrich_contacts()