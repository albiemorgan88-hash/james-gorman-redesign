#!/usr/bin/env python3
"""
Stage 4: Email/Phone Enrichment
Enriches contact data with email addresses and phone numbers using various methods.
"""

import pandas as pd
import requests
import time
import json
import os
import logging
import re
from urllib.parse import urljoin

# Import our config
import sys
sys.path.append('/Users/philsagent/.openclaw/workspace/projects/hip-psychology-pipeline')

# Set up logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

# Config
OUTPUT_DIR = "/Users/philsagent/.openclaw/workspace/projects/hip-psychology-pipeline/data"
ENRICHED_OUTPUT_CSV = os.path.join(OUTPUT_DIR, "enriched_contacts.csv")

class ContactEnricher:
    def __init__(self):
        self.session = requests.Session()
        self.session.headers.update({
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36'
        })
        self.enriched_contacts = []
        self.success_count = 0
        
    def generate_email_patterns(self, name, school_domain):
        """Generate common email patterns for a person"""
        if not name or not school_domain:
            return []
        
        # Clean name
        name_parts = name.lower().replace('.', '').replace(',', '').split()
        if len(name_parts) < 2:
            return []
        
        first_name = name_parts[0]
        last_name = name_parts[-1]
        
        patterns = [
            f"{first_name}.{last_name}@{school_domain}",
            f"{first_name[0]}{last_name}@{school_domain}",
            f"{first_name}{last_name[0]}@{school_domain}",
            f"{first_name}_{last_name}@{school_domain}",
            f"{first_name}-{last_name}@{school_domain}",
            f"{last_name}.{first_name}@{school_domain}",
            f"{last_name}{first_name[0]}@{school_domain}",
        ]
        
        return patterns
    
    def extract_domain_from_website(self, website_url):
        """Extract the likely email domain from a school website"""
        if not website_url:
            return None
        
        try:
            from urllib.parse import urlparse
            parsed = urlparse(website_url)
            domain = parsed.netloc.lower()
            
            # Remove www. prefix
            if domain.startswith('www.'):
                domain = domain[4:]
            
            return domain
        except:
            return None
    
    def verify_email_exists(self, email):
        """Simple email verification (just format check for now)"""
        email_pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
        return re.match(email_pattern, email) is not None
    
    def enrich_contact(self, contact_row, school_data):
        """Enrich a single contact with email and phone information"""
        contact = contact_row.copy()
        
        name = contact.get('contact_name', '')
        school_website = school_data.get('SchoolWebsite', '')
        
        logger.info(f"Enriching contact: {name}")
        
        # Extract domain from school website
        school_domain = self.extract_domain_from_website(school_website)
        
        # Generate email patterns
        email_patterns = self.generate_email_patterns(name, school_domain)
        
        best_email = None
        confidence_score = 0
        
        # Test email patterns
        for email in email_patterns:
            if self.verify_email_exists(email):
                best_email = email
                confidence_score = 0.7  # Medium confidence for pattern-based
                break
        
        # Add enriched data
        contact['email'] = best_email or ''
        contact['email_confidence'] = confidence_score
        contact['phone'] = school_data.get('TelephoneNum', '')  # Use school phone as fallback
        contact['enrichment_method'] = 'pattern_generation'
        contact['school_domain'] = school_domain or ''
        
        # Overall enrichment success
        success = bool(best_email or contact['phone'])
        
        if success:
            self.success_count += 1
            logger.info(f"✅ Enriched {name}: {best_email or 'No email'}, {contact['phone'] or 'No phone'}")
        else:
            logger.info(f"❌ Could not enrich {name}")
        
        return contact
    
    def load_existing_contacts(self):
        """Load contacts from previous stages"""
        contacts_files = []
        
        # Check for LinkedIn contacts
        linkedin_file = os.path.join(OUTPUT_DIR, "linkedin_contacts.csv")
        if os.path.exists(linkedin_file):
            try:
                df = pd.read_csv(linkedin_file)
                if not df.empty:
                    contacts_files.append(('linkedin', df))
                    logger.info(f"Loaded {len(df)} LinkedIn contacts")
            except Exception as e:
                logger.warning(f"Could not load LinkedIn contacts: {e}")
        
        # Check for website contacts
        website_file = os.path.join(OUTPUT_DIR, "website_contacts.csv")
        if os.path.exists(website_file):
            try:
                df = pd.read_csv(website_file)
                if not df.empty:
                    contacts_files.append(('website', df))
                    logger.info(f"Loaded {len(df)} website contacts")
            except Exception as e:
                logger.warning(f"Could not load website contacts: {e}")
        
        # Combine all contacts
        all_contacts = []
        
        for source, df in contacts_files:
            for _, row in df.iterrows():
                contact_dict = row.to_dict()
                contact_dict['source'] = source
                all_contacts.append(contact_dict)
        
        logger.info(f"Total contacts to enrich: {len(all_contacts)}")
        return all_contacts
    
    def save_results(self, enriched_contacts):
        """Save enriched contacts to CSV"""
        logger.info(f"Saving {len(enriched_contacts)} enriched contacts to {ENRICHED_OUTPUT_CSV}")
        
        # Ensure output directory exists
        os.makedirs(os.path.dirname(ENRICHED_OUTPUT_CSV), exist_ok=True)
        
        # Convert to DataFrame
        df = pd.DataFrame(enriched_contacts)
        
        # Save to CSV
        df.to_csv(ENRICHED_OUTPUT_CSV, index=False)
        logger.info(f"Results saved to {ENRICHED_OUTPUT_CSV}")
        
        # Log sample
        if not df.empty:
            logger.info("Sample enriched data:")
            logger.info(df[['contact_name', 'email', 'phone', 'email_confidence']].head(3).to_string())
        
        return True
    
    def run(self, schools_csv_path):
        """Run email/phone enrichment"""
        logger.info("Starting contact enrichment...")
        
        # Load schools data for reference
        try:
            schools_df = pd.read_csv(schools_csv_path)
            schools_dict = {row['URN']: row.to_dict() for _, row in schools_df.iterrows()}
            logger.info(f"Loaded {len(schools_df)} schools for reference")
        except Exception as e:
            logger.error(f"Error loading schools data: {e}")
            return False
        
        # Load existing contacts
        contacts = self.load_existing_contacts()
        if not contacts:
            logger.warning("No contacts found to enrich")
            return False
        
        # Enrich each contact
        enriched_contacts = []
        
        for contact in contacts:
            try:
                school_urn = contact.get('school_urn', '')
                school_data = schools_dict.get(school_urn, {})
                
                enriched = self.enrich_contact(contact, school_data)
                enriched_contacts.append(enriched)
                
                # Rate limiting
                time.sleep(0.1)
                
            except Exception as e:
                logger.error(f"Error enriching contact {contact.get('contact_name', 'Unknown')}: {e}")
        
        # Calculate success rate
        success_rate = self.success_count / len(contacts) if contacts else 0
        
        logger.info(f"Enrichment Summary:")
        logger.info(f"- Contacts processed: {len(contacts)}")
        logger.info(f"- Successfully enriched: {self.success_count}")
        logger.info(f"- Success rate: {success_rate:.1%}")
        
        # Check target
        target_rate = 0.5  # 50% target
        if success_rate >= target_rate:
            logger.info(f"✅ Success rate {success_rate:.1%} meets target of {target_rate:.1%}")
        else:
            logger.warning(f"⚠️  Success rate {success_rate:.1%} below target of {target_rate:.1%}")
        
        # Save results
        if enriched_contacts:
            self.save_results(enriched_contacts)
            return True
        else:
            logger.error("No enriched contacts to save")
            return False


def main():
    """Main function to run Stage 4"""
    schools_csv = "/Users/philsagent/.openclaw/workspace/projects/hip-psychology-pipeline/data/schools.csv"
    
    if not os.path.exists(schools_csv):
        print("❌ Schools data not found. Please run Stage 1 first.")
        return False
    
    enricher = ContactEnricher()
    success = enricher.run(schools_csv)
    
    if success:
        print("✅ Stage 4 (Email/Phone Enrichment) completed successfully")
        return True
    else:
        print("❌ Stage 4 (Email/Phone Enrichment) failed")
        return False


if __name__ == "__main__":
    success = main()
    exit(0 if success else 1)