#!/usr/bin/env python3
import json
import requests

# Test Apollo API connectivity
API_KEY = "uFYhFlnpy53QHobEijBDqw"
BASE_URL = "https://api.apollo.io/v1"

headers = {
    'X-Api-Key': API_KEY,
    'Content-Type': 'application/json'
}

print("Testing Apollo API connectivity...")

# Test 1: Get account info
response = requests.get(f"{BASE_URL}/auth/health", headers=headers)
print(f"Health check: {response.status_code}")

# Test 2: Load and show top candidates
with open('projects/biz-dev/blue-canvas/accountants-expanded.json', 'r') as f:
    data = json.load(f)

contacts = data['contacts']
print(f"\nLoaded {len(contacts)} contacts")

# Show top verified email contacts with senior titles
verified_senior = []
for contact in contacts:
    if contact.get('has_verified_email', False) and contact.get('apollo_id'):
        title = contact.get('title', '').lower()
        if any(role in title for role in ['partner', 'director', 'owner', 'managing']):
            verified_senior.append(contact)

verified_senior.sort(key=lambda x: x['title'])
print(f"\nTop verified candidates ({len(verified_senior)}):")
for i, contact in enumerate(verified_senior[:20]):
    print(f"{i+1:2d}. {contact['full_name']:25s} | {contact['title']:30s} | {contact['company']}")

print(f"\nReady to process {min(len(verified_senior), 46)} contacts")