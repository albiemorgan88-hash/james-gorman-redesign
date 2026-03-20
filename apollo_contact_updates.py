#!/usr/bin/env python3
import requests
import json
import time

# Apollo API configuration
API_KEY = "uFYhFlnpy53QHobEijBDqw"
BASE_URL = "https://api.apollo.io/api/v1"

# URL mappings from the task
contact_mappings = {
    # ASM Chartered (8 contacts)
    "ian.fin@asm.co.uk": "https://albiemorgan88-hash.github.io/showcase-asm-chartered-accountants/",
    "alistair.coe@asm.co.uk": "https://albiemorgan88-hash.github.io/showcase-asm-chartered-accountants/",
    "grainne.qun@asm.co.uk": "https://albiemorgan88-hash.github.io/showcase-asm-chartered-accountants/",
    "mark.mcl@asm.co.uk": "https://albiemorgan88-hash.github.io/showcase-asm-chartered-accountants/",
    "angela.mcl@asm.co.uk": "https://albiemorgan88-hash.github.io/showcase-asm-chartered-accountants/",
    "michael.win@asm.co.uk": "https://albiemorgan88-hash.github.io/showcase-asm-chartered-accountants/",
    "richard.whn@asm.co.uk": "https://albiemorgan88-hash.github.io/showcase-asm-chartered-accountants/",
    
    # PGM Chartered (3 contacts)
    "tanya.gin@pgm.co.uk": "https://albiemorgan88-hash.github.io/showcase-pgm-chartered-accountants/",
    "paul.mcy@pgm.co.uk": "https://albiemorgan88-hash.github.io/showcase-pgm-chartered-accountants/",
    "brian.mce@pgm.co.uk": "https://albiemorgan88-hash.github.io/showcase-pgm-chartered-accountants/",
}

def search_contact(email):
    """Search for a contact by email"""
    url = f"{BASE_URL}/contacts/search"
    headers = {
        'Content-Type': 'application/json',
        'X-Api-Key': API_KEY
    }
    data = {
        'q_keywords': email,
        'per_page': 25
    }
    
    response = requests.post(url, headers=headers, json=data)
    if response.status_code == 200:
        result = response.json()
        contacts = result.get('contacts', [])
        if contacts:
            return contacts[0]  # Return first match
    return None

def update_contact_showcase_url(contact_id, showcase_url):
    """Update contact with showcase URL in headline field"""
    url = f"{BASE_URL}/contacts/{contact_id}"
    headers = {
        'Content-Type': 'application/json',
        'X-Api-Key': API_KEY
    }
    data = {
        'headline': showcase_url
    }
    
    response = requests.put(url, headers=headers, json=data)
    return response.status_code == 200

def main():
    print("Starting Apollo contact updates...")
    updated_count = 0
    failed_count = 0
    
    for email, showcase_url in contact_mappings.items():
        print(f"\nProcessing {email}...")
        
        # Search for contact
        contact = search_contact(email)
        if not contact:
            print(f"  ❌ Contact not found: {email}")
            failed_count += 1
            continue
            
        contact_id = contact['id']
        current_headline = contact.get('headline', '')
        
        # Check if already updated
        if current_headline == showcase_url:
            print(f"  ✅ Already updated: {email}")
            updated_count += 1
            continue
            
        # Update contact
        if update_contact_showcase_url(contact_id, showcase_url):
            print(f"  ✅ Updated: {email} -> {showcase_url}")
            updated_count += 1
        else:
            print(f"  ❌ Failed to update: {email}")
            failed_count += 1
            
        # Rate limiting
        time.sleep(0.5)
    
    print(f"\n📊 Summary:")
    print(f"  ✅ Updated: {updated_count}")
    print(f"  ❌ Failed: {failed_count}")
    print(f"  📝 Total: {len(contact_mappings)}")

if __name__ == "__main__":
    main()