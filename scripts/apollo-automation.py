#!/usr/bin/env python3
"""
Apollo Automation Pipeline - Phase 1 Implementation
Gets Derry solicitor contacts from Apollo and sets up showcase generation
"""

import requests
import json
import os
import time
import logging
from pathlib import Path
from typing import List, Dict, Any
import re

# Setup
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

def get_apollo_contacts():
    """Get Derry solicitor contacts from Apollo API"""
    
    # Load API key
    api_key = os.environ.get("APOLLO_API_KEY")
    if not api_key:
        logger.error("APOLLO_API_KEY not found in environment")
        return []
    
    url = "https://api.apollo.io/api/v1/mixed_people/api_search"
    
    # Search parameters for Derry solicitors
    search_params = {
        "person_titles": ["Partner", "Managing Partner", "Director", "Owner", "Senior Partner"],
        "q_organization_keyword_tags": ["legal services", "solicitors", "law practice"],
        "person_locations": ["Derry, United Kingdom", "Londonderry, United Kingdom"],
        "organization_num_employees_ranges": ["1,50", "51,200"],
        "page": 1,
        "per_page": 50
    }
    
    # Headers with API key
    headers = {
        "Content-Type": "application/json",
        "X-Api-Key": api_key
    }
    
    logger.info("Searching Apollo for Derry solicitor contacts...")
    
    try:
        response = requests.post(url, json=search_params, headers=headers, timeout=30)
        response.raise_for_status()
        data = response.json()
        
        contacts = data.get("people", [])
        logger.info(f"Found {len(contacts)} contacts from Apollo")
        
        return contacts
        
    except Exception as e:
        logger.error(f"Error fetching Apollo data: {e}")
        return []

def extract_contact_info(contacts: List[Dict]) -> List[Dict]:
    """Extract and clean contact information"""
    extracted = []
    
    for contact in contacts:
        org = contact.get("organization", {})
        
        if not org.get("name") or not contact.get("email"):
            continue
            
        contact_info = {
            "email": contact.get("email"),
            "first_name": contact.get("first_name", ""),
            "last_name": contact.get("last_name", ""),
            "title": contact.get("title", ""),
            "company_name": org.get("name", ""),
            "website": org.get("website_url", ""),
            "linkedin": contact.get("linkedin_url", ""),
            "phone": contact.get("phone_numbers", [{}])[0].get("raw_number", "") if contact.get("phone_numbers") else "",
            "city": contact.get("city", "Derry"),
            "industry": org.get("industry", "Legal Services")
        }
        
        extracted.append(contact_info)
        
    logger.info(f"Extracted {len(extracted)} valid contacts")
    return extracted

def save_contacts_for_showcase_generation(contacts: List[Dict]) -> str:
    """Save contacts and create showcase generation commands"""
    
    # Create output directory
    output_dir = Path.home() / ".openclaw/workspace/projects/apollo-automation"
    output_dir.mkdir(parents=True, exist_ok=True)
    
    # Save raw contacts
    contacts_file = output_dir / "derry-solicitors-contacts.json"
    contacts_file.write_text(json.dumps(contacts, indent=2))
    
    # Create showcase generation script
    showcase_commands = []
    email_mapping = {}
    
    for contact in contacts:
        company_name = contact["company_name"]
        website = contact["website"]
        first_name = contact["first_name"]
        email = contact["email"]
        
        # Generate slug for GitHub Pages
        slug = re.sub(r'[^a-z0-9]+', '-', company_name.lower()).strip('-')
        showcase_url = f"https://albiemorgan88-hash.github.io/showcase-{slug}/"
        
        # Create showcase command
        cmd_parts = ["showcase", f'"{company_name}"']
        if website:
            cmd_parts.append(website)
        if first_name:
            cmd_parts.append(f"contact: {first_name}")
            
        showcase_commands.append({
            "contact": contact,
            "command": " ".join(cmd_parts),
            "expected_url": showcase_url,
            "slug": slug
        })
        
        # Add to email mapping (predictive)
        email_mapping[email] = showcase_url
    
    # Save showcase commands
    commands_file = output_dir / "showcase-commands.json"
    commands_file.write_text(json.dumps(showcase_commands, indent=2))
    
    # Save email mapping template
    mapping_file = output_dir / "email-to-showcase-mapping.json"
    mapping_file.write_text(json.dumps(email_mapping, indent=2))
    
    # Create batch showcase generation script
    batch_script = output_dir / "generate-all-showcases.sh"
    batch_script.write_text(f"""#!/bin/bash
# Auto-generated showcase generation script
cd ~/.openclaw/workspace

echo "Generating showcases for {len(contacts)} Derry solicitors..."

""" + "\n".join([f'echo "Generating showcase {i+1}/{len(showcase_commands)}: {cmd["contact"]["company_name"]}"'
                + f'\n{cmd["command"]}'
                + f'\necho "Expected URL: {cmd["expected_url"]}"'
                + "\nsleep 3\n"
                for i, cmd in enumerate(showcase_commands)]) + f"""
echo "All showcases generated!"
echo "Check mapping file: {mapping_file}"
""")
    
    batch_script.chmod(0o755)
    
    logger.info(f"Contacts saved to: {contacts_file}")
    logger.info(f"Showcase commands: {commands_file}")
    logger.info(f"Email mapping: {mapping_file}")
    logger.info(f"Batch script: {batch_script}")
    
    return str(output_dir)

def create_email_template(output_dir: str):
    """Create email template for outreach"""
    
    template = """Subject: Quick AI audit for {{company_name}} - spotted some opportunities

Hi {{first_name}},

I've been working with legal firms across Northern Ireland helping them cut 10+ hours per week of admin work using AI automation.

I ran a quick audit of {{company_name}}'s digital presence and put together a personalized report showing exactly where AI could streamline your practice: {{showcase_url}}

It's a 2-minute visual walkthrough covering:
• Client intake automation
• Document processing improvements  
• After-hours enquiry handling
• Google visibility gaps

The audit shows some quick wins that could be implemented within 30 days. Worth a look?

Happy to chat if any questions.

Best regards,
PJ Patterson
Blue Canvas AI
+44 7935 217762
contact@bluecanvas.ai

---

TEMPLATE NOTES:
This template uses variables from the mapping file:
- {{company_name}} → contact["company_name"] 
- {{first_name}} → contact["first_name"]
- {{showcase_url}} → email_mapping[contact["email"]]

To send emails:
1. Load mapping from email-to-showcase-mapping.json
2. Replace template variables for each contact
3. Send via SMTP or Apollo sequences
"""
    
    template_file = Path(output_dir) / "email-template.txt"
    template_file.write_text(template)
    
    # Create simple sending script template
    sender_script = Path(output_dir) / "send-emails.py"
    sender_script.write_text("""#!/usr/bin/env python3
import json
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

def send_showcase_emails():
    # Load contacts and mapping
    with open('derry-solicitors-contacts.json', 'r') as f:
        contacts = json.load(f)
    
    with open('email-to-showcase-mapping.json', 'r') as f:
        mapping = json.load(f)
    
    with open('email-template.txt', 'r') as f:
        template = f.read()
    
    # TODO: Configure SMTP settings
    # smtp_server = "smtp.gmail.com"
    # smtp_port = 587
    # email = "your-email@gmail.com"
    # password = "your-app-password"
    
    for contact in contacts[:5]:  # Test with first 5
        email = contact["email"]
        showcase_url = mapping.get(email, "#")
        
        personalized_email = template.format(
            company_name=contact["company_name"],
            first_name=contact["first_name"],
            showcase_url=showcase_url
        )
        
        print(f"Would send to {email}:")
        print(f"Subject: Quick AI audit for {contact['company_name']}")
        print("---")
        print(personalized_email[:200] + "...")
        print("\\n" + "="*50 + "\\n")

if __name__ == "__main__":
    send_showcase_emails()
""")
    
    sender_script.chmod(0o755)
    
    logger.info(f"Email template: {template_file}")
    logger.info(f"Email sender script: {sender_script}")

def main():
    """Run the Apollo automation pipeline"""
    
    logger.info("🚀 Starting Apollo Automation Pipeline - Phase 1")
    
    # Step 1: Get contacts from Apollo
    contacts = get_apollo_contacts()
    if not contacts:
        logger.error("No contacts found. Exiting.")
        return
    
    # Step 2: Extract and clean contact info
    clean_contacts = extract_contact_info(contacts)
    if not clean_contacts:
        logger.error("No valid contacts extracted. Exiting.")
        return
    
    # Step 3: Save contacts and prepare showcase generation
    output_dir = save_contacts_for_showcase_generation(clean_contacts)
    
    # Step 4: Create email template
    create_email_template(output_dir)
    
    # Summary
    print("\\n" + "="*60)
    print("APOLLO AUTOMATION PIPELINE - PHASE 1 COMPLETE")
    print("="*60)
    print(f"✅ Retrieved {len(contacts)} contacts from Apollo")
    print(f"✅ Extracted {len(clean_contacts)} valid contacts with emails")
    print(f"✅ Created showcase generation commands")
    print(f"✅ Prepared email mapping and template")
    print(f"\\n📁 Files created in: {output_dir}")
    print(f"\\n🔥 NEXT STEPS:")
    print(f"1. Run: {output_dir}/generate-all-showcases.sh")
    print(f"2. Verify showcases are deployed")
    print(f"3. Test email template with 5 contacts")
    print(f"4. Scale to full list")
    print("="*60)

if __name__ == "__main__":
    main()