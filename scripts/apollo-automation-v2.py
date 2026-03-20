#!/usr/bin/env python3
"""
Apollo Automation Pipeline V2 - Work with available data
Generate showcases for firms even without emails, create manual follow-up workflow
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
    
    api_key = os.environ.get("APOLLO_API_KEY")
    if not api_key:
        logger.error("APOLLO_API_KEY not found in environment")
        return []
    
    url = "https://api.apollo.io/api/v1/mixed_people/api_search"
    
    # Search parameters for Derry solicitors
    search_params = {
        "q_keywords": "solicitor",
        "person_locations": ["Derry, United Kingdom", "Londonderry, United Kingdom"],
        "page": 1,
        "per_page": 50
    }
    
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

def extract_firm_info(contacts: List[Dict]) -> List[Dict]:
    """Extract unique firms and build contact lists"""
    firms = {}
    
    for contact in contacts:
        org = contact.get("organization", {})
        org_name = org.get("name")
        
        if not org_name or "Northern Ireland Civil Service" in org_name:
            continue
            
        if org_name not in firms:
            firms[org_name] = {
                "name": org_name,
                "website": org.get("website_url", ""),
                "contacts": [],
                "industry": org.get("industry", "Legal Services")
            }
        
        # Add contact to firm
        firms[org_name]["contacts"].append({
            "first_name": contact.get("first_name", ""),
            "last_name": contact.get("last_name", ""),
            "title": contact.get("title", ""),
            "linkedin": contact.get("linkedin_url", ""),
            "phone": contact.get("phone_numbers", [{}])[0].get("raw_number", "") if contact.get("phone_numbers") else ""
        })
    
    # Convert to list and add derived info
    firm_list = []
    for firm_name, firm_data in firms.items():
        # Find a website if not provided
        if not firm_data["website"]:
            # Try to guess website from firm name
            clean_name = re.sub(r'[^a-z0-9]+', '', firm_name.lower())
            potential_websites = [
                f"https://www.{clean_name}.co.uk",
                f"https://www.{clean_name}.com",
                f"https://{clean_name}.co.uk"
            ]
            firm_data["potential_websites"] = potential_websites
        
        firm_list.append(firm_data)
    
    logger.info(f"Extracted {len(firm_list)} unique firms")
    return firm_list

def create_showcase_generation_plan(firms: List[Dict]) -> List[Dict]:
    """Create plan for generating showcases"""
    showcase_plan = []
    
    for firm in firms:
        firm_name = firm["name"]
        website = firm["website"]
        
        # Generate slug for GitHub Pages
        slug = re.sub(r'[^a-z0-9]+', '-', firm_name.lower()).strip('-')
        showcase_url = f"https://albiemorgan88-hash.github.io/showcase-{slug}/"
        
        # Get primary contact (first one with title containing partner/director/owner)
        primary_contact = None
        for contact in firm["contacts"]:
            title = contact.get("title", "").lower()
            if any(term in title for term in ["partner", "director", "owner", "managing"]):
                primary_contact = contact
                break
        
        # If no primary contact found, use first contact
        if not primary_contact and firm["contacts"]:
            primary_contact = firm["contacts"][0]
        
        # Create showcase command
        cmd_parts = ["showcase", f'"{firm_name}"']
        if website:
            cmd_parts.append(website)
        elif firm.get("potential_websites"):
            cmd_parts.append(f"# Try: {', '.join(firm['potential_websites'][:2])}")
        
        if primary_contact and primary_contact.get("first_name"):
            cmd_parts.append(f"contact: {primary_contact['first_name']}")
        
        showcase_plan.append({
            "firm": firm,
            "primary_contact": primary_contact,
            "showcase_command": " ".join(cmd_parts),
            "expected_url": showcase_url,
            "slug": slug
        })
    
    return showcase_plan

def save_automation_files(firms: List[Dict], showcase_plan: List[Dict]) -> str:
    """Save all automation files"""
    
    # Create output directory
    output_dir = Path.home() / ".openclaw/workspace/projects/apollo-automation"
    output_dir.mkdir(parents=True, exist_ok=True)
    
    # Save firms data
    firms_file = output_dir / "derry-solicitor-firms.json"
    firms_file.write_text(json.dumps(firms, indent=2))
    
    # Save showcase plan
    plan_file = output_dir / "showcase-generation-plan.json"
    plan_file.write_text(json.dumps(showcase_plan, indent=2))
    
    # Create showcase generation script
    batch_script = output_dir / "generate-showcases.sh"
    script_content = f"""#!/bin/bash
# Auto-generated showcase generation script for {len(showcase_plan)} Derry solicitor firms
cd ~/.openclaw/workspace

echo "🚀 Generating showcases for {len(showcase_plan)} solicitor firms in Derry..."
echo ""

"""
    
    for i, plan in enumerate(showcase_plan, 1):
        firm_name = plan["firm"]["name"]
        command = plan["showcase_command"]
        expected_url = plan["expected_url"]
        
        script_content += f"""echo "📋 [{i}/{len(showcase_plan)}] {firm_name}"
echo "Command: {command}"
{command}
echo "Expected URL: {expected_url}"
echo ""
sleep 5

"""
    
    script_content += f"""echo "✅ All {len(showcase_plan)} showcases generated!"
echo "📋 Check results and URLs in showcase-generation-plan.json"
echo "📧 Manual follow-up workflow in manual-outreach-guide.md"
"""
    
    batch_script.write_text(script_content)
    batch_script.chmod(0o755)
    
    # Create manual outreach guide
    outreach_guide = output_dir / "manual-outreach-guide.md"
    outreach_content = f"""# Manual Outreach Guide - Derry Solicitors

## Summary
- **{len(showcase_plan)} solicitor firms** identified in Derry
- **Showcases to generate**: {len(showcase_plan)}
- **Contact method**: LinkedIn, phone, or website contact forms

## Firms List

"""
    
    for i, plan in enumerate(showcase_plan, 1):
        firm = plan["firm"]
        contact = plan.get("primary_contact", {})
        
        outreach_content += f"""### {i}. {firm["name"]}
- **Website**: {firm["website"] or "Not found - check potential: " + ", ".join(firm.get("potential_websites", [])[:2])}
- **Showcase URL**: {plan["expected_url"]}
- **Primary Contact**: {contact.get("first_name", "")} {contact.get("last_name", "")}
- **Title**: {contact.get("title", "Unknown")}
- **Phone**: {contact.get("phone", "Not available")}
- **LinkedIn**: {contact.get("linkedin", "Not available")}

**Outreach Plan**:
1. Generate showcase using command: `{plan["showcase_command"]}`
2. Find contact email via website or LinkedIn
3. Send personalized message with showcase link
4. Follow up after 3-5 days

---

"""
    
    outreach_content += f"""
## Outreach Template

**Subject**: Quick AI audit for [FIRM_NAME] - spotted some opportunities

Hi [FIRST_NAME],

I've been working with legal firms across Northern Ireland helping them cut 10+ hours per week of admin work using AI automation.

I ran a quick audit of [FIRM_NAME]'s digital presence and put together a personalized report: [SHOWCASE_URL]

It's a 2-minute visual walkthrough covering:
• Client intake automation
• Document processing improvements  
• After-hours enquiry handling
• Google visibility gaps

Worth a quick look? Happy to chat if any questions.

Best regards,
PJ Patterson
Blue Canvas AI
+44 7935 217762

## Next Steps
1. Run: `./generate-showcases.sh` to create all showcases
2. Verify each showcase deploys successfully  
3. Find contact emails for each firm (website contact pages, LinkedIn)
4. Personalize and send outreach emails
5. Track responses and book calls

## Automation Potential
Once we have emails, this can be fully automated:
- Email finding via Apollo enrichment or external tools
- Automated email sending via SMTP
- Follow-up sequences
- Response tracking
"""
    
    outreach_guide.write_text(outreach_content)
    
    logger.info(f"Files saved to: {output_dir}")
    logger.info(f"- Firms data: {firms_file}")
    logger.info(f"- Showcase plan: {plan_file}")
    logger.info(f"- Generation script: {batch_script}")
    logger.info(f"- Outreach guide: {outreach_guide}")
    
    return str(output_dir)

def main():
    """Run the Apollo automation pipeline V2"""
    
    logger.info("🚀 Starting Apollo Automation Pipeline V2")
    
    # Step 1: Get contacts from Apollo
    contacts = get_apollo_contacts()
    if not contacts:
        logger.error("No contacts found. Exiting.")
        return
    
    # Step 2: Extract unique firms and contacts
    firms = extract_firm_info(contacts)
    if not firms:
        logger.error("No firms extracted. Exiting.")
        return
    
    # Step 3: Create showcase generation plan
    showcase_plan = create_showcase_generation_plan(firms)
    
    # Step 4: Save all files
    output_dir = save_automation_files(firms, showcase_plan)
    
    # Summary
    print("\\n" + "="*70)
    print("APOLLO AUTOMATION PIPELINE V2 - COMPLETE")
    print("="*70)
    print(f"✅ Retrieved {len(contacts)} contacts from Apollo")
    print(f"✅ Identified {len(firms)} unique solicitor firms in Derry")
    print(f"✅ Created showcase generation plan for all firms")
    print(f"✅ Built manual outreach workflow (emails need to be found)")
    print(f"\\n📁 Files created in: {output_dir}")
    
    # Show firm summary
    print(f"\\n🏢 FIRMS FOUND:")
    for i, firm in enumerate(firms[:10], 1):  # Show first 10
        contact_count = len(firm["contacts"])
        website = firm["website"] or "❌ No website"
        print(f"{i:2}. {firm['name']} ({contact_count} contacts) - {website}")
    
    if len(firms) > 10:
        print(f"... and {len(firms) - 10} more firms")
    
    print(f"\\n🔥 NEXT STEPS:")
    print(f"1. Run: {output_dir}/generate-showcases.sh")
    print(f"2. Verify all showcases deploy successfully")  
    print(f"3. Follow manual-outreach-guide.md for contact emails")
    print(f"4. Scale to automated email sending once emails found")
    print("="*70)

if __name__ == "__main__":
    main()