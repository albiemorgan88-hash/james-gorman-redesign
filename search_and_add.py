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

def search_for_contact(first_name: str, last_name: str, company: str):
    """Search Apollo for a contact to get their current ID"""
    search_payload = {
        'q_person_name': f"{first_name} {last_name}",
        'organization_name': company,
        'person_locations': ['Northern Ireland, UK'],
        'page': 1,
        'per_page': 10
    }
    
    response = requests.post(f"{BASE_URL}/mixed_people/search", headers=headers, json=search_payload)
    
    if response.status_code == 200:
        data = response.json()
        people = data.get('people', [])
        
        for person in people:
            if (person.get('first_name', '').lower() == first_name.lower() and 
                person.get('last_name', '').lower().startswith(last_name[:2].lower())):
                print(f"   Found: {person.get('name')} at {person.get('organization', {}).get('name', 'Unknown')}")
                return person.get('id')
    
    return None

def add_to_sequence(contact_id: str, contact_name: str) -> bool:
    """Add contact to sequence"""
    payload = {
        'contact_ids': [contact_id],
        'emailer_campaign_id': SEQUENCE_ID,
        'send_email_from_email_account_id': EMAIL_ACCOUNT_ID
    }
    
    response = requests.post(f"{BASE_URL}/emailer_campaigns/{SEQUENCE_ID}/add_contact_ids", 
                           headers=headers, json=payload)
    
    if response.status_code == 200:
        result = response.json()
        contacts_added = result.get('contacts', [])
        skipped = result.get('skipped_contact_ids', {})
        
        if contacts_added:
            print(f"   ✅ Added successfully")
            return True
        elif contact_id in skipped:
            reason = skipped[contact_id]
            print(f"   ❌ Skipped: {reason}")
            return False
    else:
        print(f"   ❌ Error: {response.status_code} - {response.text[:100]}")
        return False

# Load contacts and try top candidates
with open('projects/biz-dev/blue-canvas/accountants-expanded.json', 'r') as f:
    data = json.load(f)

# Filter for best candidates
candidates = []
for contact in data['contacts']:
    if contact.get('has_verified_email', False) and contact.get('title'):
        title = contact.get('title', '').lower()
        if any(role in title for role in ['partner', 'director', 'owner', 'managing']):
            candidates.append(contact)

print(f"Processing {len(candidates)} candidates...")
print(f"Goal: Add contacts to reach 50 total in sequence\n")

successful_adds = 0
attempts = 0
target = 46  # Need 46 more to reach 50

for contact in candidates[:60]:  # Try up to 60 to account for failures
    if successful_adds >= target:
        break
        
    attempts += 1
    first_name = contact['first_name']
    last_name = contact['last_name']
    company = contact['company']
    
    print(f"{attempts:2d}. {contact['full_name']} ({contact['title']})")
    
    # Try using existing Apollo ID first
    contact_id = contact.get('apollo_id')
    
    if not contact_id:
        # Search for the contact if no Apollo ID
        print(f"   Searching for contact...")
        contact_id = search_for_contact(first_name, last_name, company)
    
    if contact_id:
        print(f"   Using ID: {contact_id}")
        success = add_to_sequence(contact_id, contact['full_name'])
        
        if success:
            successful_adds += 1
            print(f"   Progress: {successful_adds}/{target}")
    else:
        print(f"   ❌ Could not find contact in Apollo")
    
    # Rate limiting
    time.sleep(1.5)
    print()

print(f"\n🎯 FINAL RESULTS:")
print(f"   Attempts: {attempts}")
print(f"   Successful adds: {successful_adds}")
print(f"   Target was: {target}")

# Check final sequence count
verify_response = requests.get(f"{BASE_URL}/emailer_campaigns/{SEQUENCE_ID}", headers=headers)
if verify_response.status_code == 200:
    data = verify_response.json()
    total_contacts = sum(data.get('emailer_campaign', {}).get('contact_statuses', {}).values())
    print(f"   Final sequence count: {total_contacts} contacts")
    print(f"   ✅ Apollo 'Derry Accountants' sequence is ready!")
else:
    print(f"   Could not verify final count")