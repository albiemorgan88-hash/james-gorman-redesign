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

def create_and_add_contact(contact_data):
    """Create contact and add to sequence in one flow"""
    
    # Clean email format  
    email = contact_data['email_estimate']
    if '|' in email or 'mpany' in email:
        # Fix common issues in email estimates
        email = email.replace('mpany', 'company').replace('rrrr', 'corr')
        if '|' in email:
            parts = email.split('@')
            if len(parts) == 2:
                company_part = parts[1].split('|')[0]
                email = f"{parts[0]}@{company_part}"
    
    # Create contact payload
    create_payload = {
        'first_name': contact_data['first_name'],
        'last_name': contact_data['last_name'],
        'email': email,
        'title': contact_data['title'],
        'organization_name': contact_data['company']
    }
    
    print(f"Processing: {contact_data['full_name']} ({contact_data['title']})")
    print(f"  Email: {email}")
    
    # Create contact
    create_response = requests.post(f"{BASE_URL}/contacts", headers=headers, json=create_payload)
    
    if create_response.status_code == 200:
        contact_id = create_response.json().get('contact', {}).get('id')
        print(f"  ✅ Created contact ID: {contact_id}")
        
        # Add to sequence
        sequence_payload = {
            'contact_ids': [contact_id],
            'emailer_campaign_id': SEQUENCE_ID,
            'send_email_from_email_account_id': EMAIL_ACCOUNT_ID
        }
        
        sequence_response = requests.post(f"{BASE_URL}/emailer_campaigns/{SEQUENCE_ID}/add_contact_ids", 
                                        headers=headers, json=sequence_payload)
        
        if sequence_response.status_code == 200:
            result = sequence_response.json()
            if result.get('contacts'):
                print(f"  ✅ Added to sequence successfully")
                return True
            else:
                skipped = result.get('skipped_contact_ids', {})
                if contact_id in skipped:
                    print(f"  ❌ Skipped: {skipped[contact_id]}")
                return False
        else:
            print(f"  ❌ Sequence error: {sequence_response.status_code}")
            return False
    else:
        print(f"  ❌ Create error: {create_response.status_code} - {create_response.text[:100]}")
        return False

# Load data
with open('projects/biz-dev/blue-canvas/accountants-expanded.json', 'r') as f:
    data = json.load(f)

# Select best candidates
candidates = []
for contact in data['contacts']:
    title = contact.get('title', '').lower()
    
    # Skip former roles and problematic titles
    if any(word in title for word in ['former', 'previous', 'senior manager']):
        continue
        
    # Focus on senior decision makers
    if any(role in title for role in ['partner', 'director', 'owner', 'managing']):
        # Must have reasonable email estimate
        email = contact.get('email_estimate', '')
        if '@' in email and '.co.uk' in email:
            candidates.append(contact)

# Sort by seniority (partners first, then directors, etc.)
def get_seniority_score(contact):
    title = contact.get('title', '').lower()
    if 'managing partner' in title: return 1
    if 'partner' in title: return 2
    if 'managing director' in title: return 3
    if 'owner' in title: return 4
    if 'director' in title: return 5
    return 6

candidates.sort(key=get_seniority_score)

print(f"Apollo Sequence Build - Derry Accountants")
print(f"Target: Build sequence to 50 total contacts")
print(f"Processing {len(candidates)} qualified candidates...\n")

successful_adds = 0
processed = 0
target_adds = 19  # We have 31 paused, need 19 more to reach 50

for contact in candidates:
    if successful_adds >= target_adds:
        break
        
    processed += 1
    print(f"\n{processed:2d}/{len(candidates)} candidates:")
    
    success = create_and_add_contact(contact)
    
    if success:
        successful_adds += 1
        print(f"     Progress: {successful_adds}/{target_adds} new contacts added")
        
        if successful_adds % 5 == 0:
            print(f"     Sleeping for rate limits...")
            time.sleep(3)
    
    time.sleep(1.5)  # Basic rate limiting

print(f"\n" + "="*60)
print(f"🎯 APOLLO SEQUENCE BUILD COMPLETE")
print(f"   Processed: {processed} candidates")
print(f"   Successfully added: {successful_adds}")
print(f"   Target was: {target_adds} more contacts")

# Final verification
print(f"\nVerifying final sequence status...")
verify_response = requests.get(f"{BASE_URL}/emailer_campaigns/{SEQUENCE_ID}", headers=headers)

if verify_response.status_code == 200:
    data = verify_response.json()
    campaign = data.get('emailer_campaign', {})
    contact_statuses = campaign.get('contact_statuses', {})
    
    total_contacts = sum(contact_statuses.values())
    active_contacts = contact_statuses.get('active', 0)
    paused_contacts = contact_statuses.get('paused', 0)
    
    print(f"   Total contacts in sequence: {total_contacts}")
    print(f"   Active: {active_contacts} | Paused: {paused_contacts}")
    
    if total_contacts >= 50:
        print(f"   ✅ SUCCESS! Sequence has {total_contacts} contacts - ready for outreach!")
        print(f"   Sequence: 'Derry Accountants - Custom Showcase'")
        print(f"   Email account: philip@bluecanvas.ai")
    elif total_contacts >= 40:
        print(f"   🔶 GOOD PROGRESS: {total_contacts} contacts (close to 50)")
    else:
        print(f"   ⚠️  Partial completion: {total_contacts} contacts")

else:
    print(f"   ❌ Could not verify sequence status")

print(f"\n" + "="*60)