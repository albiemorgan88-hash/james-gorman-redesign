#!/usr/bin/env python3
"""
Blue Canvas Contact Enrichment CLI
Usage: python enrich_contact.py "Company Name" "https://company.com"
"""

import sys
import argparse
from contact_enricher import ContactEnricher
from linkedin_scraper import LinkedInScraper
import json
import logging

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(message)s')

def main():
    parser = argparse.ArgumentParser(description='Enrich company contact with decision maker details')
    parser.add_argument('company_name', help='Company name')
    parser.add_argument('company_url', help='Company website URL')
    parser.add_argument('--output', '-o', default='enriched_contact.csv', help='Output CSV file')
    parser.add_argument('--json', action='store_true', help='Output as JSON instead of CSV')
    parser.add_argument('--known-contacts', help='JSON file with known contacts')
    
    args = parser.parse_args()
    
    enricher = ContactEnricher()
    linkedin_scraper = LinkedInScraper()
    
    print(f"🔍 Enriching contact for: {args.company_name}")
    print(f"🌐 Website: {args.company_url}")
    print("="*60)
    
    # Load known contacts if provided
    known_decision_makers = []
    if args.known_contacts:
        try:
            with open(args.known_contacts, 'r') as f:
                known_data = json.load(f)
                known_decision_makers = known_data.get(args.company_name, [])
        except Exception as e:
            print(f"Warning: Could not load known contacts: {e}")
    
    all_contacts = []
    
    # Process known contacts first
    if known_decision_makers:
        print(f"📋 Processing {len(known_decision_makers)} known decision makers...")
        for dm in known_decision_makers:
            contact = enrich_single_contact(
                enricher, linkedin_scraper, args.company_name, args.company_url, dm
            )
            all_contacts.append(contact)
            print_contact_summary(contact)
    
    # Find additional decision makers
    print("\n🕵️ Searching for additional decision makers...")
    
    # Website scraping
    scraped_contacts = enricher.scrape_company_website(args.company_url, args.company_name)
    valid_scraped = [dm for dm in scraped_contacts if is_valid_decision_maker(dm)]
    
    if valid_scraped:
        print(f"📄 Found {len(valid_scraped)} decision makers via website scraping")
        for dm in valid_scraped:
            contact = enrich_scraped_decision_maker(
                enricher, linkedin_scraper, args.company_name, args.company_url, dm
            )
            all_contacts.append(contact)
            print_contact_summary(contact)
    
    # LinkedIn search
    linkedin_profiles = linkedin_scraper.find_linkedin_profiles_by_company(args.company_name)
    valid_linkedin = [p for p in linkedin_profiles if is_valid_linkedin_profile(p)]
    
    if valid_linkedin:
        print(f"💼 Found {len(valid_linkedin)} decision makers via LinkedIn search")
        for profile in valid_linkedin:
            contact = enrich_linkedin_profile(
                enricher, linkedin_scraper, args.company_name, args.company_url, profile
            )
            all_contacts.append(contact)
            print_contact_summary(contact)
    
    # Remove duplicates
    unique_contacts = remove_duplicates(all_contacts)
    
    # Save results
    if args.json:
        save_as_json(unique_contacts, args.output.replace('.csv', '.json'))
    else:
        enricher.save_to_csv(unique_contacts, args.output)
    
    print(f"\n✅ Enrichment complete!")
    print(f"📊 Total unique contacts: {len(unique_contacts)}")
    print(f"💾 Results saved to: {args.output}")

def enrich_single_contact(enricher, linkedin_scraper, company_name, company_url, dm):
    """Enrich a single known decision maker"""
    pain_points = enricher.identify_pain_points(company_url, company_name)
    
    # Generate emails
    from urllib.parse import urlparse
    domain = urlparse(company_url).netloc
    email_patterns = enricher.generate_email_patterns(dm['name'], domain)
    
    best_email = None
    for email in email_patterns:
        validation = enricher.validate_email(email)
        if validation['confidence'] in ['high', 'medium']:
            best_email = email
            break
    
    # Find LinkedIn
    linkedin_url = linkedin_scraper.search_google_for_linkedin(dm['name'], company_name)
    
    return {
        'company_name': company_name,
        'decision_maker_name': dm['name'],
        'title': dm.get('title', 'Unknown'),
        'authority_score': enricher._score_decision_maker(dm.get('title', '')),
        'email': best_email or (email_patterns[0] if email_patterns else 'Not found'),
        'email_confidence': 'medium' if best_email else 'low',
        'linkedin_profile': linkedin_url or 'Not found',
        'pain_points': '; '.join(pain_points) if pain_points else 'None identified',
        'outreach_angle': enricher._generate_outreach_angle({
            'title': dm.get('title', ''),
            'authority_score': enricher._score_decision_maker(dm.get('title', ''))
        }, pain_points),
        'source_url': 'Known contact'
    }

def enrich_scraped_decision_maker(enricher, linkedin_scraper, company_name, company_url, dm):
    """Enrich a scraped decision maker"""
    pain_points = enricher.identify_pain_points(company_url, company_name)
    
    from urllib.parse import urlparse
    domain = urlparse(company_url).netloc
    email_patterns = enricher.generate_email_patterns(dm['name'], domain)
    
    best_email = None
    for email in email_patterns:
        validation = enricher.validate_email(email)
        if validation['confidence'] in ['high', 'medium']:
            best_email = email
            break
    
    linkedin_url = linkedin_scraper.search_google_for_linkedin(dm['name'], company_name)
    
    return {
        'company_name': company_name,
        'decision_maker_name': dm['name'],
        'title': dm['title'],
        'authority_score': dm['authority_score'],
        'email': best_email or (email_patterns[0] if email_patterns else 'Not found'),
        'email_confidence': 'medium' if best_email else 'low',
        'linkedin_profile': linkedin_url or 'Not found',
        'pain_points': '; '.join(pain_points) if pain_points else 'None identified',
        'outreach_angle': enricher._generate_outreach_angle(dm, pain_points),
        'source_url': dm.get('source_url', 'Website scraping')
    }

def enrich_linkedin_profile(enricher, linkedin_scraper, company_name, company_url, profile):
    """Enrich a LinkedIn profile"""
    pain_points = enricher.identify_pain_points(company_url, company_name)
    
    # Extract title from LinkedIn text
    title = extract_title_from_linkedin_text(profile['title_text'])
    authority_score = estimate_authority_from_title(title)
    
    from urllib.parse import urlparse
    domain = urlparse(company_url).netloc
    email_patterns = enricher.generate_email_patterns(profile['name'], domain)
    
    best_email = None
    for email in email_patterns:
        validation = enricher.validate_email(email)
        if validation['confidence'] in ['high', 'medium']:
            best_email = email
            break
    
    dm = {
        'title': title,
        'authority_score': authority_score
    }
    
    return {
        'company_name': company_name,
        'decision_maker_name': profile['name'],
        'title': title,
        'authority_score': authority_score,
        'email': best_email or (email_patterns[0] if email_patterns else 'Not found'),
        'email_confidence': 'medium' if best_email else 'low',
        'linkedin_profile': profile['linkedin_url'],
        'pain_points': '; '.join(pain_points) if pain_points else 'None identified',
        'outreach_angle': enricher._generate_outreach_angle(dm, pain_points),
        'source_url': 'LinkedIn search'
    }

def is_valid_decision_maker(dm):
    """Check if scraped decision maker is valid"""
    name = dm['name']
    
    # Filter out common false positives
    false_positives = [
        'in many cases', 'contact us', 'find out more', 'get in touch',
        'our team', 'our staff', 'the team', 'management team',
        'click here', 'read more', 'learn more', 'more information'
    ]
    
    if name.lower() in false_positives:
        return False
    
    # Must have reasonable authority score
    if dm['authority_score'] < 4:
        return False
    
    # Must look like a real name
    if len(name.split()) < 2 or len(name) > 50:
        return False
    
    # Must not contain numbers
    if any(char.isdigit() for char in name):
        return False
    
    return True

def is_valid_linkedin_profile(profile):
    """Check if LinkedIn profile is valid"""
    name = profile['name']
    
    # Must look like a real name
    if len(name.split()) < 2 or len(name) > 50:
        return False
    
    # Each word should start with capital
    words = name.split()
    for word in words:
        if not word or not word[0].isupper():
            return False
    
    # Must not contain numbers or symbols
    if any(char.isdigit() or char in '@#$%' for char in name):
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

def remove_duplicates(contacts):
    """Remove duplicate contacts based on name"""
    seen_names = set()
    unique_contacts = []
    
    for contact in contacts:
        name_key = contact['decision_maker_name'].lower().strip()
        if name_key not in seen_names:
            seen_names.add(name_key)
            unique_contacts.append(contact)
    
    return unique_contacts

def print_contact_summary(contact):
    """Print a summary of an enriched contact"""
    print(f"\n📋 {contact['decision_maker_name']}")
    print(f"   🏷️  {contact['title']} (Authority: {contact['authority_score']}/10)")
    print(f"   📧 {contact['email']} ({contact['email_confidence']} confidence)")
    print(f"   💼 {contact['linkedin_profile']}")
    print(f"   🎯 {contact['outreach_angle']}")

def save_as_json(contacts, filename):
    """Save contacts as JSON"""
    with open(filename, 'w', encoding='utf-8') as f:
        json.dump(contacts, f, indent=2)
    print(f"💾 Saved {len(contacts)} contacts to {filename}")

if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Usage: python enrich_contact.py 'Company Name' 'https://company.com'")
        print("Example: python enrich_contact.py 'EF McCambridge' 'https://www.efmccambridge.com'")
        sys.exit(1)
    
    main()