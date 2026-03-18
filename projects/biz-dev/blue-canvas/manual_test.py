#!/usr/bin/env python3
"""
Manual Test Script for Contact Enrichment
Specifically targets the Derry accountants with known contacts.
"""

import csv
from contact_enricher import ContactEnricher
from linkedin_scraper import LinkedInScraper
import logging

logging.basicConfig(level=logging.INFO)

def manual_derry_accountants_enrichment():
    """
    Manually enrich the Derry accountants with known decision makers
    """
    enricher = ContactEnricher()
    linkedin_scraper = LinkedInScraper()
    
    # Known decision makers from the brief
    known_contacts = [
        {
            'company_name': 'EF McCambridge',
            'company_url': 'https://www.efmccambridge.com',
            'decision_makers': [
                {'name': 'Paul Foley', 'title': 'Partner'},
                {'name': 'Christine Whiteman', 'title': 'Partner'}, 
                {'name': 'Maurice Brennan', 'title': 'Partner'}
            ]
        },
        {
            'company_name': 'McLaughlin & Co',
            'company_url': 'https://www.mclaughlinaccountants.co.uk',
            'decision_makers': []  # We need to find these
        },
        {
            'company_name': 'MJ Kane',
            'company_url': 'https://www.mjkane.co.uk',
            'decision_makers': []  # We need to find these
        }
    ]
    
    all_enriched_contacts = []
    
    for company in known_contacts:
        print(f"\n{'='*60}")
        print(f"Processing: {company['company_name']}")
        print(f"{'='*60}")
        
        # Get pain points for the company
        pain_points = enricher.identify_pain_points(company['company_url'], company['company_name'])
        print(f"Identified pain points: {pain_points}")
        
        # If we have known decision makers, enrich them
        if company['decision_makers']:
            for dm in company['decision_makers']:
                enriched_contact = enrich_known_contact(
                    enricher, linkedin_scraper, company, dm, pain_points
                )
                all_enriched_contacts.append(enriched_contact)
                print_contact_summary(enriched_contact)
        
        else:
            # Try to find decision makers automatically
            print(f"Searching for decision makers at {company['company_name']}...")
            
            # First try website scraping
            found_decision_makers = enricher.scrape_company_website(
                company['company_url'], company['company_name']
            )
            
            # Filter out obvious false positives
            valid_decision_makers = []
            for dm in found_decision_makers:
                if is_valid_name(dm['name']) and dm['authority_score'] > 5:
                    valid_decision_makers.append(dm)
            
            if valid_decision_makers:
                print(f"Found {len(valid_decision_makers)} potential decision makers via website scraping")
                for dm in valid_decision_makers:
                    enriched_contact = enrich_scraped_contact(
                        enricher, linkedin_scraper, company, dm, pain_points
                    )
                    all_enriched_contacts.append(enriched_contact)
                    print_contact_summary(enriched_contact)
            else:
                print("No decision makers found via website scraping")
            
            # Try LinkedIn company search
            print(f"Searching LinkedIn for {company['company_name']} employees...")
            linkedin_profiles = linkedin_scraper.find_linkedin_profiles_by_company(company['company_name'])
            
            for profile in linkedin_profiles:
                if is_valid_name(profile['name']):
                    # Create a decision maker record
                    dm = {
                        'name': profile['name'],
                        'title': extract_title_from_linkedin_text(profile['title_text']),
                        'authority_score': estimate_authority_from_title(extract_title_from_linkedin_text(profile['title_text']))
                    }
                    
                    enriched_contact = {
                        'company_name': company['company_name'],
                        'decision_maker_name': dm['name'],
                        'title': dm['title'],
                        'authority_score': dm['authority_score'],
                        'email': find_best_email(enricher, dm['name'], company['company_url']),
                        'email_confidence': 'medium',
                        'linkedin_profile': profile['linkedin_url'],
                        'pain_points': '; '.join(pain_points) if pain_points else 'None identified',
                        'outreach_angle': enricher._generate_outreach_angle(dm, pain_points),
                        'source_url': 'LinkedIn search'
                    }
                    
                    all_enriched_contacts.append(enriched_contact)
                    print_contact_summary(enriched_contact)
    
    # Save all results
    output_file = '/Users/philsagent/.openclaw/workspace/projects/biz-dev/blue-canvas/enriched_contacts.csv'
    save_enriched_contacts(all_enriched_contacts, output_file)
    
    print(f"\n{'='*60}")
    print(f"ENRICHMENT COMPLETE")
    print(f"Total contacts enriched: {len(all_enriched_contacts)}")
    print(f"Results saved to: {output_file}")
    print(f"{'='*60}")

def enrich_known_contact(enricher, linkedin_scraper, company, dm, pain_points):
    """Enrich a known decision maker with email and LinkedIn"""
    
    print(f"Enriching known contact: {dm['name']} ({dm['title']})")
    
    # Generate emails
    email = find_best_email(enricher, dm['name'], company['company_url'])
    
    # Find LinkedIn
    linkedin_url = linkedin_scraper.search_google_for_linkedin(dm['name'], company['company_name'])
    
    return {
        'company_name': company['company_name'],
        'decision_maker_name': dm['name'],
        'title': dm['title'],
        'authority_score': enricher._score_decision_maker(dm['title']),
        'email': email,
        'email_confidence': 'medium',
        'linkedin_profile': linkedin_url or 'Not found',
        'pain_points': '; '.join(pain_points) if pain_points else 'None identified',
        'outreach_angle': enricher._generate_outreach_angle({
            'title': dm['title'],
            'authority_score': enricher._score_decision_maker(dm['title'])
        }, pain_points),
        'source_url': 'Known contact'
    }

def enrich_scraped_contact(enricher, linkedin_scraper, company, dm, pain_points):
    """Enrich a scraped decision maker"""
    
    print(f"Enriching scraped contact: {dm['name']} ({dm['title']})")
    
    email = find_best_email(enricher, dm['name'], company['company_url'])
    linkedin_url = linkedin_scraper.search_google_for_linkedin(dm['name'], company['company_name'])
    
    return {
        'company_name': company['company_name'],
        'decision_maker_name': dm['name'],
        'title': dm['title'],
        'authority_score': dm['authority_score'],
        'email': email,
        'email_confidence': 'medium',
        'linkedin_profile': linkedin_url or 'Not found',
        'pain_points': '; '.join(pain_points) if pain_points else 'None identified',
        'outreach_angle': enricher._generate_outreach_angle(dm, pain_points),
        'source_url': dm.get('source_url', 'Website scraping')
    }

def find_best_email(enricher, name, company_url):
    """Find the best email for a person"""
    from urllib.parse import urlparse
    
    domain = urlparse(company_url).netloc
    email_patterns = enricher.generate_email_patterns(name, domain)
    
    best_email = None
    best_confidence = 'invalid'
    
    for email in email_patterns:
        validation = enricher.validate_email(email)
        if validation['confidence'] in ['high', 'medium']:
            if best_email is None or validation['confidence'] == 'high':
                best_email = email
                best_confidence = validation['confidence']
    
    return best_email or email_patterns[0] if email_patterns else 'Not found'

def is_valid_name(name):
    """Check if a name looks valid"""
    if not name or len(name.split()) < 2:
        return False
    
    # Common false positives to filter out
    false_positives = [
        'in many cases', 'contact us', 'find out more', 'get in touch',
        'our team', 'our staff', 'the team', 'management team',
        'click here', 'read more', 'learn more'
    ]
    
    if name.lower() in false_positives:
        return False
    
    # Must not contain numbers or common website text
    if any(char.isdigit() for char in name):
        return False
    
    # Each word should start with capital
    words = name.split()
    for word in words:
        if not word[0].isupper():
            return False
    
    return True

def extract_title_from_linkedin_text(title_text):
    """Extract job title from LinkedIn search result text"""
    if not title_text:
        return 'Unknown'
    
    # LinkedIn titles usually follow: "Name - Title at Company | LinkedIn"
    if ' - ' in title_text:
        parts = title_text.split(' - ')
        if len(parts) > 1:
            title_part = parts[1]
            # Remove "at Company" part
            if ' at ' in title_part:
                title_part = title_part.split(' at ')[0]
            return title_part.strip()
    
    return 'Unknown'

def estimate_authority_from_title(title):
    """Estimate authority score from title"""
    title_lower = title.lower()
    
    authority_keywords = {
        'partner': 9, 'director': 8, 'managing director': 10, 'ceo': 10,
        'owner': 9, 'founder': 9, 'head': 6, 'senior': 7, 'manager': 5
    }
    
    for keyword, score in authority_keywords.items():
        if keyword in title_lower:
            return score
    
    return 4  # Default moderate score

def print_contact_summary(contact):
    """Print a summary of an enriched contact"""
    print(f"\n📋 {contact['decision_maker_name']}")
    print(f"   Title: {contact['title']}")
    print(f"   Authority: {contact['authority_score']}/10")
    print(f"   Email: {contact['email']}")
    print(f"   LinkedIn: {contact['linkedin_profile']}")
    print(f"   Outreach: {contact['outreach_angle']}")

def save_enriched_contacts(contacts, filename):
    """Save enriched contacts to CSV"""
    if not contacts:
        print("No contacts to save")
        return
    
    with open(filename, 'w', newline='', encoding='utf-8') as csvfile:
        fieldnames = [
            'company_name', 'decision_maker_name', 'title', 'authority_score',
            'email', 'email_confidence', 'linkedin_profile', 'pain_points',
            'outreach_angle', 'source_url'
        ]
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
        
        writer.writeheader()
        for contact in contacts:
            writer.writerow(contact)
    
    print(f"💾 Saved {len(contacts)} enriched contacts to {filename}")

if __name__ == "__main__":
    manual_derry_accountants_enrichment()