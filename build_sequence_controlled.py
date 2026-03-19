#!/usr/bin/env python3
import json
import requests
import time

# Apollo API config
API_KEY = "uFYhFlnpy53QHobEijBDqw"
BASE_URL = "https://api.apollo.io/v1"
SEQUENCE_ID = "69bbc9a4df5c5a001d77e40b"
EMAIL_ACCOUNT_ID = "69938bd8c4ab460021a85f13"

def add_contact_to_sequence(apollo_id: str, contact_name: str) -> bool:
    """Add existing Apollo contact to sequence"""
    headers = {
        'X-Api-Key': API_KEY,
        'Content-Type': 'application/json'
    }
    
    payload = {
        'contact_ids': [apollo_id],
        'sequence_id': SEQUENCE_ID,
        'emailer_campaign_id': EMAIL_ACCOUNT_ID
    }
    
    print(f"Adding {contact_name} (ID: {apollo_id}) to sequence...")
    
    response = requests.post(f"{BASE_URL}/emailer_campaigns/add_contact_ids", headers=headers, json=payload)
    
    if response.status_code == 200:
        print(f"✅ SUCCESS")
        return True
    else:
        print(f"❌ ERROR: {response.status_code} - {response.text}")
        return False

def main():
    # Load contacts
    with open('projects/biz-dev/blue-canvas/accountants-expanded.json', 'r') as f:
        data = json.load(f)
    
    contacts = data['contacts']
    
    # Filter for best candidates - verified emails with Apollo IDs and senior titles
    candidates = []
    for contact in contacts:
        if (contact.get('has_verified_email', False) and 
            contact.get('apollo_id') and
            contact.get('title')):
            
            title = contact.get('title', '').lower()
            # Prioritize senior roles
            if any(role in title for role in ['partner', 'director', 'owner', 'managing']):
                candidates.append(contact)
    
    # Sort by title priority
    title_priority = {'partner': 1, 'managing': 2, 'owner': 3, 'director': 4}
    candidates.sort(key=lambda x: min([title_priority.get(word, 5) for word in x['title'].lower().split()]))
    
    print(f"Processing {len(candidates)} verified candidates...")
    print(f"Target: Add 46 contacts to reach 50 total\n")
    
    successful_adds = 0
    target = 46
    
    for i, contact in enumerate(candidates):
        if successful_adds >= target:
            break
            
        print(f"\n{i+1:2d}/{len(candidates)} - {contact['full_name']:25s} | {contact['title']}")
        
        success = add_contact_to_sequence(contact['apollo_id'], contact['full_name'])
        
        if success:
            successful_adds += 1
            print(f"    Progress: {successful_adds}/{target} contacts added")
        
        # Rate limiting
        time.sleep(1.5)
    
    print(f"\n🎯 FINAL RESULT:")
    print(f"   Added: {successful_adds} new contacts")
    print(f"   Total in sequence: {4 + successful_adds} (started with 4)")
    print(f"   Sequence ID: {SEQUENCE_ID}")

if __name__ == "__main__":
    main()