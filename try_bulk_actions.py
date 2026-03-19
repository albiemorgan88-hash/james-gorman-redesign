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

# Let me try the bulk actions endpoint which might handle sequence enrollment
test_contact_id = "6127cc49c4aab000016c6853"

print("Trying bulk actions endpoint...")

# Apollo often uses bulk_actions for sequence enrollment
payload = {
    'contact_ids': [test_contact_id],
    'action': 'sequence_add',
    'sequence_id': SEQUENCE_ID,
    'emailer_account_id': '69938bd8c4ab460021a85f13'
}

response = requests.post(f"{BASE_URL}/bulk_actions", headers=headers, json=payload)
print(f"bulk_actions status: {response.status_code}")
print(f"Response: {response.text}")

if response.status_code == 404:
    print("\nTrying mixed_people/bulk_add endpoint...")
    
    payload2 = {
        'contact_ids': [test_contact_id],
        'sequence_id': SEQUENCE_ID
    }
    
    response2 = requests.post(f"{BASE_URL}/mixed_people/bulk_add", headers=headers, json=payload2)
    print(f"bulk_add status: {response2.status_code}")
    print(f"Response: {response2.text[:200]}")

# Also try to see if sequence needs to be activated first
print(f"\nTrying to activate sequence...")
activate_payload = {'active': True}
response3 = requests.patch(f"{BASE_URL}/emailer_campaigns/{SEQUENCE_ID}", headers=headers, json=activate_payload)
print(f"Activation status: {response3.status_code}")
print(f"Response: {response3.text[:200]}")

# Check contacts endpoint for reading
print(f"\nTrying to read contacts...")
response4 = requests.get(f"{BASE_URL}/contacts/search", headers=headers)
print(f"Contacts search status: {response4.status_code}")

# Try the exact endpoint the UI would use
print(f"\nTrying sequence enrollment via POST...")
enrollment_payload = {
    'contact_ids': [test_contact_id],
    'emailer_campaign_id': SEQUENCE_ID,
    'send_email_from_email_account_id': '69938bd8c4ab460021a85f13'
}

response5 = requests.post(f"{BASE_URL}/emailer_campaign_contacts", headers=headers, json=enrollment_payload)
print(f"Enrollment status: {response5.status_code}")
print(f"Response: {response5.text}")