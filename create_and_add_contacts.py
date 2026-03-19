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

def create_contact(contact_data):
    """Create a new contact in Apollo"""
    # Clean email format
    email = contact_data['email_estimate']
    if '|' in email:
        parts = email.split('@')
        if len(parts) == 2:
            company_part = parts[1].split('|')[0]
            email = f"{parts[0]}@{company_part}"
    
    payload = {
        'first_name': contact_data['first_name'],
        'last_name': contact_data['last_name'],
        'email': email,
        'title': contact_data['title'],
        'organization_name': contact_data['company']
    }
    
    response = requests.post(f"{BASE_URL}/contacts", headers=headers, json=payload)
    
    if response.status_code == 200:
        result = response.json()
        contact_id = result.get('contact', {}).get('id')
        print(f"   ✅ Created contact ID: {contact_id}")
        return contact_id
    else:
        print(f"   ❌ Error creating: {response.status_code} - {response.text[:100]}")
        return None

def add_to_sequence(contact_id: str) -> bool:
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
        if result.get('contacts', []):
            print(f"   ✅ Added to sequence")
            return True
        else:
            skipped = result.get('skipped_contact_ids', {})
            if contact_id in skipped:
                print(f"   ❌ Skipped: {skipped[contact_id]}")
            else:
                print(f"   ❌ Not added for unknown reason")
            return False
    else:
        print(f"   ❌ Sequence error: {response.status_code}")
        return False

# Load contacts and select the best ones
with open('projects/biz-dev/blue-canvas/accountants-expanded.json', 'r') as f:
    data = json.load(f)

# Select top candidates - focus on senior roles with clean data
top_candidates = []
for contact in data['contacts']:
    if (contact.get('has_verified_email', False) and 
        contact.get('title') and 
        '@' in contact.get('email_estimate', '')):
        
        title = contact.get('title', '').lower()
        # Prioritize partners and directors
        if any(role in title for role in ['partner', 'director', 'owner', 'managing']):
            # Exclude overly complex titles or broken emails
            if not any(word in title for word in ['former', 'previous']) and '|' not in contact.get('email_estimate', ''):
                top_candidates.append(contact)

# Sort by seniority
def title_score(contact):
    title = contact.get('title', '').lower()
    if 'partner' in title: return 1
    if 'managing' in title: return 2  
    if 'owner' in title: return 3
    if 'director' in title: return 4
    return 5

top_candidates.sort(key=title_score)

print(f"Processing {len(top_candidates)} top candidates for Apollo sequence...")
print(f"Target: 46 more contacts to reach 50 total\n")

successful_adds = 0
attempts = 0
target = 46

for contact in top_candidates:
    if successful_adds >= target:
        break
        
    attempts += 1
    print(f"{attempts:2d}. {contact['full_name']} - {contact['title']}")
    print(f"    Company: {contact['company']}")
    print(f"    Email: {contact['email_estimate']}")
    
    # Create the contact
    contact_id = create_contact(contact)
    
    if contact_id:
        # Add to sequence
        success = add_to_sequence(contact_id)
        
        if success:
            successful_adds += 1
            print(f"    ✅ Progress: {successful_adds}/{target}")
        
    print()
    time.sleep(2)  # Rate limiting
    
    # Break early if we hit rate limits
    if attempts % 10 == 0:
        print(f"Processed {attempts} contacts, sleeping for rate limits...")
        time.sleep(5)

print(f"\n🎯 PROCESSING COMPLETE:")
print(f"   Attempts: {attempts}")
print(f"   Successful adds: {successful_adds}")
print(f"   Target: {target}")

# Final status check
response = requests.get(f"{BASE_URL}/emailer_campaigns/{SEQUENCE_ID}", headers=headers)
if response.status_code == 200:
    data = response.json()
    contact_statuses = data.get('emailer_campaign', {}).get('contact_statuses', {})
    total = sum(contact_statuses.values())
    print(f"   Final sequence count: {total} contacts")
    
    if total >= 50:
        print(f"   ✅ SUCCESS! Apollo sequence ready for outreach!")
    else:
        print(f"   🔶 Partial success - {total} contacts added")
else:
    print(f"   Could not verify final count")