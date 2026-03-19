#!/usr/bin/env python3
import json
import requests

API_KEY = "uFYhFlnpy53QHobEijBDqw"
BASE_URL = "https://api.apollo.io/v1"
SEQUENCE_ID = "69bbc9a4df5c5a001d77e40b"
EMAIL_ACCOUNT_ID = "69938bd8c4ab460021a85f13"

headers = {
    'X-Api-Key': API_KEY,
    'Content-Type': 'application/json'
}

print("Testing different Apollo endpoints...")

# Test 1: Try sequences endpoint
print("\n1. Testing sequences endpoint:")
response = requests.get(f"{BASE_URL}/sequences", headers=headers)
print(f"   Status: {response.status_code}")
if response.status_code == 200:
    print(f"   Found {len(response.json().get('sequences', []))} sequences")

# Test 2: Try emailer_campaigns endpoint  
print("\n2. Testing emailer_campaigns endpoint:")
response = requests.get(f"{BASE_URL}/emailer_campaigns", headers=headers)
print(f"   Status: {response.status_code}")

# Test 3: Try getting specific sequence
print(f"\n3. Testing specific sequence {SEQUENCE_ID}:")
response = requests.get(f"{BASE_URL}/emailer_campaigns/{SEQUENCE_ID}", headers=headers)
print(f"   Status: {response.status_code}")
if response.status_code == 200:
    data = response.json()
    print(f"   Sequence name: {data.get('emailer_campaign', {}).get('name', 'Unknown')}")
    print(f"   Contacts: {data.get('emailer_campaign', {}).get('num_contacts', 0)}")

# Test 4: Alternative endpoint for adding contacts
print(f"\n4. Testing alternative add contacts endpoint:")
test_contact_id = "6127cc49c4aab000016c6853"
payload = {
    'contact_ids': [test_contact_id],
    'emailer_campaign_id': SEQUENCE_ID
}

response = requests.post(f"{BASE_URL}/emailer_campaigns/add_contacts", headers=headers, json=payload)
print(f"   Status: {response.status_code}")
print(f"   Response: {response.text[:200]}")