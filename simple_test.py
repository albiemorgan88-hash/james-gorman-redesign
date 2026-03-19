#!/usr/bin/env python3
import json
import requests

print("Starting simple contact creation test...")

API_KEY = "uFYhFlnpy53QHobEijBDqw"
BASE_URL = "https://api.apollo.io/v1"

headers = {
    'X-Api-Key': API_KEY,
    'Content-Type': 'application/json'
}

# Test creating one contact
test_contact = {
    'first_name': 'Test',
    'last_name': 'Contact',
    'email': 'test.contact@example.co.uk',
    'title': 'Director',
    'organization_name': 'Test Accountants'
}

print("Creating test contact...")
response = requests.post(f"{BASE_URL}/contacts", headers=headers, json=test_contact)
print(f"Status: {response.status_code}")
print(f"Response: {response.text[:500]}")

print("\nDone.")