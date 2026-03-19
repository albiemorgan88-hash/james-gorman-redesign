#!/usr/bin/env python3
import json
import requests

API_KEY = "uFYhFlnpy53QHobEijBDqw"
BASE_URL = "https://api.apollo.io/v1"
SEQUENCE_ID = "69bbc9a4df5c5a001d77e40b"
EMAIL_ACCOUNT_ID = "69938bd8c4ab460021a85f13"

headers = {
    'X-Api-Key': API_KEY,
    'Content-Type': 'application/json'
}

test_contact_id = "6127cc49c4aab000016c6853"

# Based on Apollo docs, try the correct enrollment endpoint
endpoints_final = [
    # Try exact API v1 enrollment syntax
    {
        'url': 'people/bulk_action',
        'payload': {
            'apollo_contact_ids': [test_contact_id],
            'emailer_campaign_id': SEQUENCE_ID,
            'send_email_from_email_account_id': EMAIL_ACCOUNT_ID
        }
    },
    # Try adding via contacts endpoint
    {
        'url': f'emailer_campaigns/{SEQUENCE_ID}/add_contact_ids',
        'payload': {
            'contact_ids': [test_contact_id],
            'send_email_from_email_account_id': EMAIL_ACCOUNT_ID
        }
    },
    # Try adding without the nested structure
    {
        'url': 'emailer_campaign_contacts',
        'payload': {
            'apollo_contact_id': test_contact_id,
            'emailer_campaign_id': SEQUENCE_ID,
            'send_email_from_email_account_id': EMAIL_ACCOUNT_ID
        }
    },
    # Try the prospect flow
    {
        'url': 'prospects/enroll_in_campaign',
        'payload': {
            'contact_ids': [test_contact_id],
            'campaign_id': SEQUENCE_ID,
            'emailer_account_id': EMAIL_ACCOUNT_ID
        }
    }
]

for i, endpoint_config in enumerate(endpoints_final):
    print(f"\n{i+1}. Trying {endpoint_config['url']}")
    
    response = requests.post(f"{BASE_URL}/{endpoint_config['url']}", 
                           headers=headers, 
                           json=endpoint_config['payload'])
    
    print(f"   Status: {response.status_code}")
    
    if response.status_code not in [404, 405]:
        print(f"   Response: {response.text}")
        
        if response.status_code == 200:
            print(f"   ✅ SUCCESS! Found working endpoint")
            
            # Now let's verify it worked
            verify_response = requests.get(f"{BASE_URL}/emailer_campaigns/{SEQUENCE_ID}", headers=headers)
            if verify_response.status_code == 200:
                data = verify_response.json()
                contacts = data.get('emailer_campaign', {}).get('num_contacts', 0)
                print(f"   ✅ Sequence now has {contacts} contacts")
            break
    else:
        print(f"   ❌ {response.status_code}")

print("\nIf none worked, checking Apollo API documentation or trying alternative approach...")

# Let's also check what emailer accounts are available
print(f"\nChecking email accounts...")
accounts_response = requests.get(f"{BASE_URL}/email_accounts", headers=headers)
print(f"Email accounts status: {accounts_response.status_code}")
if accounts_response.status_code == 200:
    accounts = accounts_response.json().get('email_accounts', [])
    print(f"Available accounts: {len(accounts)}")
    for acc in accounts[:2]:
        print(f"  - {acc.get('email', 'unknown')} (ID: {acc.get('id', 'unknown')})")