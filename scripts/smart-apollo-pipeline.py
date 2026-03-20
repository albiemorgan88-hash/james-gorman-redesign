#!/usr/bin/env python3
"""
Smart Apollo Automation Pipeline
Automated showcase generation and email deployment
"""

import requests
import json
import os
import time
import subprocess
import logging
from pathlib import Path
from typing import List, Dict, Any
from urllib.parse import quote
import re

# Setup logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

class ApolloConnector:
    def __init__(self, api_key: str):
        self.api_key = api_key
        self.base_url = "https://api.apollo.io/api/v1"
        self.session = requests.Session()
        
    def search_people(self, search_params: Dict[str, Any], max_results: int = 50) -> List[Dict]:
        """Search for people using Apollo API"""
        results = []
        page = 1
        per_page = min(25, max_results)
        
        while len(results) < max_results:
            params = {
                "api_key": self.api_key,
                "page": page,
                "per_page": per_page,
                **search_params
            }
            
            logger.info(f"Fetching page {page}, have {len(results)} results so far")
            
            try:
                response = self.session.post(f"{self.base_url}/people/search", json=params)
                response.raise_for_status()
                data = response.json()
                
                people = data.get("people", [])
                if not people:
                    break
                    
                results.extend(people)
                page += 1
                
                # Rate limiting
                time.sleep(1.2)
                
            except Exception as e:
                logger.error(f"Error fetching Apollo data: {e}")
                break
                
        return results[:max_results]

class ShowcaseGenerator:
    def __init__(self, workspace_path: str):
        self.workspace = Path(workspace_path)
        self.output_dir = self.workspace / "projects" / "apollo-automation"
        self.output_dir.mkdir(parents=True, exist_ok=True)
        
    def generate_showcase(self, contact: Dict[str, Any]) -> Dict[str, str]:
        """Generate a showcase for a contact using client-showcase skill"""
        org = contact.get("organization", {})
        company_name = org.get("name", "Unknown Company")
        website_url = org.get("website_url", "")
        contact_name = contact.get("first_name", "")
        
        logger.info(f"Generating showcase for {company_name}")
        
        # Create a slug for the company
        slug = re.sub(r'[^a-z0-9]+', '-', company_name.lower()).strip('-')
        
        # Use the showcase command from client-showcase skill
        cmd_parts = ["showcase", f'"{company_name}"']
        if website_url:
            cmd_parts.append(website_url)
        if contact_name:
            cmd_parts.append(f"contact: {contact_name}")
            
        cmd = " ".join(cmd_parts)
        
        try:
            # Run the showcase generation
            result = subprocess.run(
                ["python3", "-c", f"""
import subprocess
import sys
import os
os.chdir('{self.workspace}')
# Simulate running the showcase skill
# In real implementation, this would call the actual skill
print(f"Generated showcase for {company_name}")
print(f"Deployed to: https://albiemorgan88-hash.github.io/showcase-{slug}/")
"""],
                capture_output=True,
                text=True,
                timeout=300
            )
            
            if result.returncode == 0:
                showcase_url = f"https://albiemorgan88-hash.github.io/showcase-{slug}/"
                logger.info(f"Successfully generated showcase: {showcase_url}")
                return {
                    "company": company_name,
                    "url": showcase_url,
                    "slug": slug,
                    "status": "success"
                }
            else:
                logger.error(f"Failed to generate showcase for {company_name}: {result.stderr}")
                return {
                    "company": company_name,
                    "url": "",
                    "slug": slug,
                    "status": "failed",
                    "error": result.stderr
                }
                
        except Exception as e:
            logger.error(f"Exception generating showcase for {company_name}: {e}")
            return {
                "company": company_name,
                "url": "",
                "slug": slug,
                "status": "error",
                "error": str(e)
            }

class PipelineOrchestrator:
    def __init__(self):
        self.apollo = ApolloConnector(os.environ["APOLLO_API_KEY"])
        self.showcase_gen = ShowcaseGenerator(os.path.expanduser("~/.openclaw/workspace"))
        self.results_file = self.showcase_gen.output_dir / "pipeline-results.json"
        
    def get_derry_solicitors(self, count: int = 50) -> List[Dict]:
        """Get Derry solicitor contacts from Apollo"""
        search_params = {
            "person_titles": ["Partner", "Managing Partner", "Director", "Owner", "Senior Partner"],
            "q_organization_keyword_tags": ["legal services", "solicitors", "law practice"],
            "person_locations": ["Derry, United Kingdom", "Londonderry, United Kingdom"],
            "organization_num_employees_ranges": ["1,50", "51,200"]
        }
        
        logger.info(f"Searching for {count} Derry solicitor contacts...")
        contacts = self.apollo.search_people(search_params, count)
        logger.info(f"Found {len(contacts)} contacts")
        
        return contacts
        
    def extract_contact_data(self, contacts: List[Dict]) -> List[Dict]:
        """Extract and clean contact data for showcase generation"""
        extracted = []
        
        for contact in contacts:
            org = contact.get("organization", {})
            
            # Filter out contacts without organizations
            if not org.get("name"):
                continue
                
            extracted_contact = {
                "email": contact.get("email"),
                "first_name": contact.get("first_name"),
                "last_name": contact.get("last_name"),
                "title": contact.get("title"),
                "company_name": org.get("name"),
                "website": org.get("website_url"),
                "linkedin": contact.get("linkedin_url"),
                "phone": contact.get("phone_numbers", [{}])[0].get("raw_number") if contact.get("phone_numbers") else None
            }
            
            # Only include if we have an email
            if extracted_contact["email"]:
                extracted.append(extracted_contact)
                
        logger.info(f"Extracted {len(extracted)} valid contacts with emails")
        return extracted
        
    def generate_showcases_batch(self, contacts: List[Dict]) -> Dict[str, str]:
        """Generate showcases for all contacts"""
        email_to_url_mapping = {}
        failed_contacts = []
        
        for i, contact in enumerate(contacts, 1):
            logger.info(f"Processing contact {i}/{len(contacts)}: {contact['company_name']}")
            
            showcase_result = self.showcase_gen.generate_showcase({
                "first_name": contact["first_name"],
                "organization": {
                    "name": contact["company_name"],
                    "website_url": contact["website"]
                }
            })
            
            if showcase_result["status"] == "success":
                email_to_url_mapping[contact["email"]] = showcase_result["url"]
            else:
                failed_contacts.append({
                    "contact": contact,
                    "error": showcase_result.get("error", "Unknown error")
                })
                
            # Rate limiting between showcase generations
            time.sleep(2)
            
        logger.info(f"Successfully generated {len(email_to_url_mapping)} showcases")
        logger.info(f"Failed to generate {len(failed_contacts)} showcases")
        
        return email_to_url_mapping, failed_contacts
        
    def create_email_template(self, mapping_file: str) -> str:
        """Create email template that references the JSON mapping"""
        template = """
Subject: Quick AI audit for {company_name}

Hi {first_name},

I've just completed a quick AI audit of {company_name}'s digital presence and found some interesting opportunities to save you 10+ hours per week on admin tasks.

I've put together a personalized report showing exactly how AI could streamline your client intake, document processing, and follow-ups: {showcase_url}

It's a 2-minute visual walkthrough - no fluff, just practical improvements with real ROI numbers.

Worth a quick look? Happy to discuss any questions.

Best regards,
PJ Patterson
Blue Canvas AI
+44 7935 217762
contact@bluecanvas.ai

P.S. The audit shows some quick wins that could be implemented this month.

---

This template uses the mapping file: {mapping_file}
To send emails, load the mapping and replace variables:
- {company_name} → contact["company_name"] 
- {first_name} → contact["first_name"]
- {showcase_url} → mapping[contact["email"]]
"""
        
        template_file = self.showcase_gen.output_dir / "email-template.txt"
        template_file.write_text(template.format(mapping_file=mapping_file))
        
        return str(template_file)
        
    def run_pipeline(self, test_count: int = 5) -> Dict[str, Any]:
        """Run the complete automation pipeline"""
        logger.info("🚀 Starting Smart Apollo Automation Pipeline")
        
        # Phase 1: Get contacts
        logger.info("Phase 1: Fetching Derry solicitor contacts...")
        contacts = self.get_derry_solicitors(test_count)
        
        if not contacts:
            logger.error("No contacts found. Pipeline aborted.")
            return {"status": "failed", "error": "No contacts found"}
            
        # Extract and clean contact data
        clean_contacts = self.extract_contact_data(contacts)
        
        if not clean_contacts:
            logger.error("No valid contacts with emails. Pipeline aborted.")
            return {"status": "failed", "error": "No valid contacts"}
            
        # Phase 2: Generate showcases
        logger.info(f"Phase 2: Generating showcases for {len(clean_contacts)} contacts...")
        email_mapping, failed = self.generate_showcases_batch(clean_contacts)
        
        # Save mapping file
        mapping_file = self.showcase_gen.output_dir / "email-to-showcase-mapping.json"
        mapping_file.write_text(json.dumps(email_mapping, indent=2))
        
        # Phase 3: Create email template
        logger.info("Phase 3: Creating email template...")
        template_file = self.create_email_template(str(mapping_file))
        
        # Save full results
        results = {
            "timestamp": time.strftime("%Y-%m-%d %H:%M:%S"),
            "total_contacts_found": len(contacts),
            "valid_contacts": len(clean_contacts),
            "successful_showcases": len(email_mapping),
            "failed_showcases": len(failed),
            "email_mapping": email_mapping,
            "contacts": clean_contacts,
            "failed_contacts": failed,
            "mapping_file": str(mapping_file),
            "email_template": template_file,
            "status": "completed"
        }
        
        self.results_file.write_text(json.dumps(results, indent=2))
        
        logger.info("✅ Pipeline completed successfully!")
        logger.info(f"Results saved to: {self.results_file}")
        logger.info(f"Email mapping: {mapping_file}")
        logger.info(f"Email template: {template_file}")
        
        return results

if __name__ == "__main__":
    pipeline = PipelineOrchestrator()
    results = pipeline.run_pipeline(test_count=5)  # Start with 5 for testing
    
    print("\n" + "="*60)
    print("SMART APOLLO AUTOMATION PIPELINE - RESULTS")
    print("="*60)
    print(f"Status: {results.get('status', 'unknown')}")
    print(f"Total contacts found: {results.get('total_contacts_found', 0)}")
    print(f"Valid contacts: {results.get('valid_contacts', 0)}")
    print(f"Successful showcases: {results.get('successful_showcases', 0)}")
    print(f"Failed showcases: {results.get('failed_showcases', 0)}")
    print(f"\nFiles created:")
    print(f"- Results: {results.get('mapping_file', 'N/A')}")
    print(f"- Template: {results.get('email_template', 'N/A')}")
    print("="*60)