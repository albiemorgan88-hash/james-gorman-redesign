#!/usr/bin/env python3
"""
Build out Apollo "Derry Accountants" sequence to 50 contacts
Target: 46 more contacts (currently 4 in sequence)
"""

import json
import requests
import time
from typing import List, Dict

# Apollo API config
API_KEY = "uFYhFlnpy53QHobEijBDqw"
BASE_URL = "https://api.apollo.io/v1"
SEQUENCE_ID = "69bbc9a4df5c5a001d77e40b"
EMAIL_ACCOUNT_ID = "69938bd8c4ab460021a85f13"

# Priority order for titles
TITLE_PRIORITY = [
    "Partner", "Managing Partner", "Owner", "Managing Director", 
    "Director", "Financial Services Director", "Tax Director", 
    "Practice Manager", "Senior Manager"
]

def load_contacts() -> List[Dict]:
    """Load accountants data"""
    with open('projects/biz-dev/blue-canvas/accountants-expanded.json', 'r') as f:
        data = json.load(f)
    return data['contacts']

def score_contact(contact: Dict) -> int:
    """Score contact priority (higher = better)"""
    score = 0
    
    # Verified email is crucial
    if contact.get('has_verified_email', False):
        score += 10
    
    # Apollo ID means we can definitely use them
    if contact.get('apollo_id'):
        score += 5
        
    # Title priority
    title = contact.get('title', '').lower()
    for i, priority_title in enumerate(TITLE_PRIORITY):
        if priority_title.lower() in title:
            score += (len(TITLE_PRIORITY) - i)
            break
    
    # Has phone is bonus
    if contact.get('has_phone', False):
        score += 2
        
    # Penalize if no Apollo ID (manual contacts)
    if not contact.get('apollo_id'):
        score -= 3
        
    return score

def create_apollo_contact(contact: Dict) -> str:
    """Create contact in Apollo, return contact ID"""
    headers = {
        'X-Api-Key': API_KEY,
        'Content-Type': 'application/json'
    }
    
    # Clean up email estimate
    email = contact['email_estimate']
    if '|' in email:
        # Fix broken email formats
        parts = email.split('@')
        if len(parts) == 2:
            company_part = parts[1].split('|')[0]
            email = f"{parts[0]}@{company_part}"
    
    payload = {
        'first_name': contact['first_name'],
        'last_name': contact['last_name'],
        'email': email,
        'title': contact['title'],
        'organization_name': contact['company'],
        'city': contact.get('location', 'Northern Ireland')
    }
    
    print(f"Creating contact: {contact['full_name']} ({email})")
    
    response = requests.post(f"{BASE_URL}/contacts", headers=headers, json=payload)
    
    if response.status_code == 200:
        result = response.json()
        if result.get('contact'):
            contact_id = result['contact']['id']
            print(f"✅ Created contact ID: {contact_id}")
            return contact_id
        else:
            print(f"❌ No contact in response: {result}")
            return None
    else:
        print(f"❌ Error creating contact: {response.status_code} - {response.text}")
        return None

def add_to_sequence(contact_id: str, contact_name: str) -> bool:
    """Add contact to Apollo sequence"""
    headers = {
        'X-Api-Key': API_KEY,
        'Content-Type': 'application/json'
    }
    
    payload = {
        'contact_ids': [contact_id],
        'sequence_id': SEQUENCE_ID,
        'emailer_campaign_id': EMAIL_ACCOUNT_ID
    }
    
    print(f"Adding {contact_name} to sequence...")
    
    response = requests.post(f"{BASE_URL}/emailer_campaigns/add_contact_ids", headers=headers, json=payload)
    
    if response.status_code == 200:
        print(f"✅ Added to sequence successfully")
        return True
    else:
        print(f"❌ Error adding to sequence: {response.status_code} - {response.text}")
        return False

def main():
    contacts = load_contacts()
    print(f"Loaded {len(contacts)} total contacts")
    
    # Score and sort contacts
    scored_contacts = [(contact, score_contact(contact)) for contact in contacts]
    scored_contacts.sort(key=lambda x: x[1], reverse=True)
    
    print("\nTop candidates:")
    for i, (contact, score) in enumerate(scored_contacts[:10]):
        print(f"{i+1:2d}. {contact['full_name']:25s} | {contact['title']:30s} | Score: {score:2d} | Email: {contact.get('has_verified_email', False)}")
    
    # Target: 46 more contacts (we have 4 currently)
    target_new_contacts = 46
    successful_adds = 0
    
    print(f"\nProcessing contacts to reach {target_new_contacts} new additions...")
    
    for contact, score in scored_contacts:
        if successful_adds >= target_new_contacts:
            break
            
        # Skip if score too low
        if score < 8:
            continue
            
        print(f"\n--- Processing {contact['full_name']} (Score: {score}) ---")
        
        # If they have Apollo ID, use it directly
        if contact.get('apollo_id'):
            contact_id = contact['apollo_id']
            print(f"Using existing Apollo ID: {contact_id}")
        else:
            # Create new contact
            contact_id = create_apollo_contact(contact)
            if not contact_id:
                continue
        
        # Add to sequence
        success = add_to_sequence(contact_id, contact['full_name'])
        
        if success:
            successful_adds += 1
            print(f"✅ Progress: {successful_adds}/{target_new_contacts} contacts added")
        
        # Rate limiting - wait between API calls
        time.sleep(2)
    
    print(f"\n🎯 COMPLETE: Successfully added {successful_adds} contacts to Apollo sequence")
    print(f"   Sequence ID: {SEQUENCE_ID}")
    print(f"   Total contacts in sequence: {4 + successful_adds} (started with 4)")

if __name__ == "__main__":
    main()