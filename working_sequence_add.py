#!/usr/bin/env python3
import json
import requests
import time

API_KEY = "uFYhFlnpy53QHobEijBDqw"
BASE_URL = "https://api.apollo.io/v1"
SEQUENCE_ID = "69bbc9a4df5c5a001d77e40b"
EMAIL_ACCOUNT_ID = "69938bd8c4ab460021a85f13"

headers = {
    'X-Api-Key': API_KEY,
    'Content-Type': 'application/json'
}

def add_contact_to_sequence(contact_id: str, contact_name: str) -> bool:
    """Add contact to Apollo sequence using correct format"""
    
    # Based on the error, it wants emailer_campaign_id and send_email_from_email_account_id
    payload = {
        'contact_ids': [contact_id],
        'emailer_campaign_id': SEQUENCE_ID,
        'send_email_from_email_account_id': EMAIL_ACCOUNT_ID
    }
    
    print(f"Adding {contact_name} (ID: {contact_id})...")
    
    response = requests.post(f"{BASE_URL}/emailer_campaigns/{SEQUENCE_ID}/add_contact_ids", 
                           headers=headers, json=payload)
    
    print(f"   Status: {response.status_code}")
    
    if response.status_code == 200:
        print(f"   ✅ SUCCESS")
        return True
    else:
        print(f"   ❌ Error: {response.text}")
        return False

# Test with one contact first
test_contact = {
    'apollo_id': '6127cc49c4aab000016c6853',
    'name': 'Patrick Ga***r'
}

print("Testing with one contact...")
success = add_contact_to_sequence(test_contact['apollo_id'], test_contact['name'])

if success:
    print(f"\n✅ API call worked! Now processing all contacts...")
    
    # Load all contacts
    with open('projects/biz-dev/blue-canvas/accountants-expanded.json', 'r') as f:
        data = json.load(f)
    
    # Filter for best candidates
    candidates = []
    for contact in data['contacts']:
        if (contact.get('has_verified_email', False) and 
            contact.get('apollo_id') and
            contact.get('title')):
            
            title = contact.get('title', '').lower()
            if any(role in title for role in ['partner', 'director', 'owner', 'managing']):
                candidates.append(contact)
    
    print(f"Processing {len(candidates)} verified candidates...")
    
    successful_adds = 0
    target = 46  # Need 46 more to reach 50 total
    
    for i, contact in enumerate(candidates[1:]):  # Skip first one we already added
        if successful_adds >= target - 1:  # -1 because we added one already
            break
            
        print(f"\n{i+2}/{len(candidates)} - {contact['full_name']}")
        
        success = add_contact_to_sequence(contact['apollo_id'], contact['full_name'])
        
        if success:
            successful_adds += 1
            print(f"    Progress: {successful_adds + 1}/{target} contacts added")  # +1 for the test contact
        
        time.sleep(1)  # Rate limiting
    
    print(f"\n🎯 COMPLETE!")
    print(f"   Successfully added: {successful_adds + 1} contacts")
    print(f"   Sequence should now have: {4 + successful_adds + 1} total contacts")
    
    # Verify final count
    verify_response = requests.get(f"{BASE_URL}/emailer_campaigns/{SEQUENCE_ID}", headers=headers)
    if verify_response.status_code == 200:
        data = verify_response.json()
        final_count = data.get('emailer_campaign', {}).get('num_contacts', 0)
        print(f"   ✅ Verified: Sequence has {final_count} contacts")

else:
    print(f"❌ API test failed. Check the endpoint and parameters.")