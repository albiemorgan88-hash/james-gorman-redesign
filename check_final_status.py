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

print("Checking final Apollo sequence status...")

# Get sequence details
response = requests.get(f"{BASE_URL}/emailer_campaigns/{SEQUENCE_ID}", headers=headers)
if response.status_code == 200:
    data = response.json()
    campaign = data.get('emailer_campaign', {})
    
    print(f"\nSequence: {campaign.get('name')}")
    print(f"Active: {campaign.get('active')}")
    print(f"Last used: {campaign.get('last_used_at')}")
    
    # Contact status breakdown
    contact_statuses = campaign.get('contact_statuses', {})
    total_contacts = sum(contact_statuses.values())
    
    print(f"\nContact Status Breakdown:")
    for status, count in contact_statuses.items():
        if count > 0:
            print(f"  {status}: {count}")
    
    print(f"\nTotal contacts in sequence: {total_contacts}")
    
    if total_contacts >= 50:
        print("✅ SUCCESS: Target of 50 contacts reached!")
    elif total_contacts >= 40:
        print(f"🔶 PARTIAL SUCCESS: {total_contacts} contacts added (close to target)")
    else:
        print(f"❌ INCOMPLETE: Only {total_contacts} contacts in sequence")
        
    # Check sequence performance
    print(f"\nSequence Performance:")
    print(f"  Scheduled: {campaign.get('unique_scheduled', 0)}")
    print(f"  Delivered: {campaign.get('unique_delivered', 0)}")
    print(f"  Opened: {campaign.get('unique_opened', 0)}")
    print(f"  Replied: {campaign.get('unique_replied', 0)}")

else:
    print(f"Error checking sequence: {response.status_code} - {response.text}")