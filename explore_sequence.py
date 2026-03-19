#!/usr/bin/env python3
import json
import requests

API_KEY = "uFYhFlnpy53QHobEijBDqw"
BASE_URL = "https://api.apollo.io/v1"
SEQUENCE_ID = "69bbc9a4df5c5a001d77e40b"

headers = {
    'X-Api-Key': API_KEY,
    'Content-Type': 'application/json'
}

print("Exploring sequence structure...")

# Get sequence details
response = requests.get(f"{BASE_URL}/emailer_campaigns/{SEQUENCE_ID}", headers=headers)
if response.status_code == 200:
    data = response.json()
    sequence = data.get('emailer_campaign', {})
    print(f"Sequence: {sequence.get('name')}")
    print(f"Status: {sequence.get('active')}")
    print(f"Contacts: {sequence.get('num_contacts', 0)}")
    print(f"Email account: {sequence.get('emailer_account_id')}")
    
    print(f"\nFull sequence data keys: {list(sequence.keys())}")
    
    # Check if there's a contacts list
    if 'contacts' in sequence:
        print(f"Existing contacts: {len(sequence['contacts'])}")
    
else:
    print(f"Error: {response.status_code} - {response.text}")

# Try different add endpoint variations
test_contact_id = "6127cc49c4aab000016c6853"

endpoints_to_try = [
    f"emailer_campaigns/{SEQUENCE_ID}/add_contacts",
    f"emailer_campaigns/{SEQUENCE_ID}/contacts",
    f"sequences/{SEQUENCE_ID}/add_contacts", 
    f"sequences/{SEQUENCE_ID}/contacts",
    "emailer_campaigns/add_contact_ids",
    "sequences/add_contacts"
]

for endpoint in endpoints_to_try:
    print(f"\nTrying: {endpoint}")
    
    payload = {
        'contact_ids': [test_contact_id],
        'sequence_id': SEQUENCE_ID,
        'emailer_campaign_id': SEQUENCE_ID,
        'emailer_account_id': '69938bd8c4ab460021a85f13'
    }
    
    response = requests.post(f"{BASE_URL}/{endpoint}", headers=headers, json=payload)
    print(f"   Status: {response.status_code}")
    
    if response.status_code != 404:
        print(f"   Response: {response.text[:200]}")
        if response.status_code == 200:
            print(f"   ✅ FOUND WORKING ENDPOINT!")
            break