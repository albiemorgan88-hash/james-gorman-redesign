#!/usr/bin/env python3
import json
import requests

# Test adding one contact
API_KEY = "uFYhFlnpy53QHobEijBDqw"
BASE_URL = "https://api.apollo.io/v1"
SEQUENCE_ID = "69bbc9a4df5c5a001d77e40b"
EMAIL_ACCOUNT_ID = "69938bd8c4ab460021a85f13"

# Load first good candidate
with open('projects/biz-dev/blue-canvas/accountants-expanded.json', 'r') as f:
    data = json.load(f)

# Find first verified contact with Apollo ID
for contact in data['contacts']:
    if contact.get('has_verified_email', False) and contact.get('apollo_id'):
        title = contact.get('title', '').lower()
        if 'partner' in title or 'director' in title:
            print(f"Testing with: {contact['full_name']} ({contact['title']})")
            print(f"Apollo ID: {contact['apollo_id']}")
            
            headers = {
                'X-Api-Key': API_KEY,
                'Content-Type': 'application/json'
            }
            
            payload = {
                'contact_ids': [contact['apollo_id']],
                'sequence_id': SEQUENCE_ID,
                'emailer_campaign_id': EMAIL_ACCOUNT_ID
            }
            
            print(f"Making API call...")
            response = requests.post(f"{BASE_URL}/emailer_campaigns/add_contact_ids", 
                                   headers=headers, json=payload)
            
            print(f"Status: {response.status_code}")
            print(f"Response: {response.text}")
            break
else:
    print("No suitable test contact found")