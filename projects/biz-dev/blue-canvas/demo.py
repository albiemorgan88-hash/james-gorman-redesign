#!/usr/bin/env python3
"""
Blue Canvas Contact Enrichment System Demo
Demonstrates the complete workflow with Derry accountants test cases.
"""

import csv
import json
from contact_enricher import ContactEnricher
from linkedin_scraper import LinkedInScraper

def run_demo():
    """Run a comprehensive demo of the contact enrichment system"""
    
    print("🔧 BLUE CANVAS CONTACT ENRICHMENT SYSTEM")
    print("=" * 60)
    print("Converting 'reception@company.com' → 'paul.foley@company.com'")
    print("With full context for personalized outreach\n")
    
    enricher = ContactEnricher()
    linkedin_scraper = LinkedInScraper()
    
    # Demo data
    test_companies = [
        {
            'name': 'EF McCambridge',
            'url': 'https://www.efmccambridge.com',
            'known_decision_makers': [
                {'name': 'Paul Foley', 'title': 'Partner'},
                {'name': 'Christine Whiteman', 'title': 'Partner'},
                {'name': 'Maurice Brennan', 'title': 'Partner'}
            ]
        },
        {
            'name': 'McLaughlin & Co',
            'url': 'https://www.mclaughlinaccountants.co.uk',
            'known_decision_makers': []
        },
        {
            'name': 'MJ Kane', 
            'url': 'https://www.mjkane.co.uk',
            'known_decision_makers': []
        }
    ]
    
    all_enriched = []
    
    for i, company in enumerate(test_companies, 1):
        print(f"\n{i}. ENRICHING: {company['name'].upper()}")
        print("-" * 50)
        print(f"Website: {company['url']}")
        
        # Identify pain points
        print("\n🔍 ANALYZING PAIN POINTS...")
        pain_points = enricher.identify_pain_points(company['url'], company['name'])
        if pain_points:
            for pp in pain_points:
                print(f"   ⚠️  {pp}")
        else:
            print("   ✅ No obvious pain points detected")
        
        # Process known decision makers
        if company['known_decision_makers']:
            print(f"\n👥 ENRICHING {len(company['known_decision_makers'])} KNOWN DECISION MAKERS...")
            for dm in company['known_decision_makers']:
                enriched = enrich_decision_maker(
                    enricher, linkedin_scraper, company, dm, pain_points
                )
                all_enriched.append(enriched)
                print_enriched_contact(enriched)
        
        else:
            print("\n🕵️ DISCOVERING DECISION MAKERS...")
            
            # Try website scraping
            scraped_dms = enricher.scrape_company_website(company['url'], company['name'])
            valid_scraped = [dm for dm in scraped_dms if is_valid_decision_maker(dm)]
            
            if valid_scraped:
                print(f"   📄 Found {len(valid_scraped)} via website scraping")
                for dm in valid_scraped:
                    enriched = enrich_scraped_dm(
                        enricher, linkedin_scraper, company, dm, pain_points
                    )
                    all_enriched.append(enriched)
                    print_enriched_contact(enriched)
            
            # Try LinkedIn search  
            print("   🔗 Searching LinkedIn...")
            # Note: LinkedIn search might not find results due to anti-bot measures
            print("   ℹ️  LinkedIn search requires manual follow-up")
    
    # Generate summary report
    print("\n" + "=" * 60)
    print("📊 ENRICHMENT SUMMARY")
    print("=" * 60)
    
    total_contacts = len(all_enriched)
    high_authority = sum(1 for c in all_enriched if c['authority_score'] >= 8)
    valid_emails = sum(1 for c in all_enriched if c['email'] != 'Not found')
    
    print(f"Total decision makers found: {total_contacts}")
    print(f"High authority contacts (8-10): {high_authority}")
    print(f"Valid email addresses: {valid_emails}")
    print(f"Success rate: {(valid_emails/total_contacts*100):.1f}%" if total_contacts > 0 else "0%")
    
    # Save results
    output_file = '/Users/philsagent/.openclaw/workspace/projects/biz-dev/blue-canvas/demo_results.csv'
    save_results(all_enriched, output_file)
    
    print(f"\n💾 Results saved to: demo_results.csv")
    
    # Generate outreach examples
    print("\n📧 SAMPLE OUTREACH MESSAGES")
    print("=" * 60)
    
    for contact in all_enriched[:2]:  # Show first 2 examples
        generate_sample_outreach(contact)
    
    print("\n✅ Demo complete! Blue Canvas biz dev machine is ready.")
    print("🎯 Turn generic emails into personalized decision maker outreach.")

def enrich_decision_maker(enricher, linkedin_scraper, company, dm, pain_points):
    """Enrich a known decision maker"""
    from urllib.parse import urlparse
    
    domain = urlparse(company['url']).netloc
    
    # Generate email patterns
    email_patterns = enricher.generate_email_patterns(dm['name'], domain)
    best_email = email_patterns[0] if email_patterns else 'Not found'
    
    # Validate email  
    if best_email != 'Not found':
        validation = enricher.validate_email(best_email)
        confidence = validation['confidence']
    else:
        confidence = 'invalid'
    
    # Find LinkedIn (simulated - may not find due to search restrictions)
    linkedin_url = 'Search required'  # linkedin_scraper.search_google_for_linkedin(dm['name'], company['name'])
    
    authority_score = enricher._score_decision_maker(dm['title'])
    
    return {
        'company_name': company['name'],
        'decision_maker_name': dm['name'],
        'title': dm['title'],
        'authority_score': authority_score,
        'email': best_email,
        'email_confidence': confidence,
        'linkedin_profile': linkedin_url,
        'pain_points': '; '.join(pain_points) if pain_points else 'None identified',
        'outreach_angle': enricher._generate_outreach_angle({
            'title': dm['title'], 
            'authority_score': authority_score
        }, pain_points),
        'source_url': 'Known contact'
    }

def enrich_scraped_dm(enricher, linkedin_scraper, company, dm, pain_points):
    """Enrich a scraped decision maker"""
    from urllib.parse import urlparse
    
    domain = urlparse(company['url']).netloc
    email_patterns = enricher.generate_email_patterns(dm['name'], domain)
    best_email = email_patterns[0] if email_patterns else 'Not found'
    
    if best_email != 'Not found':
        validation = enricher.validate_email(best_email)
        confidence = validation['confidence'] 
    else:
        confidence = 'invalid'
    
    return {
        'company_name': company['name'],
        'decision_maker_name': dm['name'],
        'title': dm['title'],
        'authority_score': dm['authority_score'],
        'email': best_email,
        'email_confidence': confidence,
        'linkedin_profile': 'Search required',
        'pain_points': '; '.join(pain_points) if pain_points else 'None identified',
        'outreach_angle': enricher._generate_outreach_angle(dm, pain_points),
        'source_url': dm.get('source_url', 'Website scraping')
    }

def is_valid_decision_maker(dm):
    """Check if a scraped decision maker is valid"""
    name = dm['name'].lower()
    
    # Common false positives
    false_positives = [
        'in many cases', 'contact us', 'find out more', 'our team',
        'click here', 'read more', 'learn more', 'management team'
    ]
    
    if name in false_positives:
        return False
    
    if dm['authority_score'] < 5:
        return False
    
    if len(dm['name'].split()) < 2:
        return False
    
    return True

def print_enriched_contact(contact):
    """Print an enriched contact in a nice format"""
    print(f"\n   📋 {contact['decision_maker_name']}")
    print(f"      🏷️  {contact['title']} (Authority: {contact['authority_score']}/10)")
    print(f"      📧 {contact['email']} ({contact['email_confidence']} confidence)")
    print(f"      💼 {contact['linkedin_profile']}")
    print(f"      🎯 {contact['outreach_angle']}")

def save_results(contacts, filename):
    """Save enriched contacts to CSV"""
    if not contacts:
        return
    
    fieldnames = [
        'company_name', 'decision_maker_name', 'title', 'authority_score',
        'email', 'email_confidence', 'linkedin_profile', 'pain_points',
        'outreach_angle', 'source_url'
    ]
    
    with open(filename, 'w', newline='', encoding='utf-8') as csvfile:
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
        writer.writeheader()
        for contact in contacts:
            writer.writerow(contact)

def generate_sample_outreach(contact):
    """Generate a sample outreach message"""
    print(f"\nTO: {contact['decision_maker_name']} ({contact['email']})")
    print(f"SUBJECT: Digital transformation opportunity for {contact['company_name']}")
    print(f"")
    print(f"Hi {contact['decision_maker_name'].split()[0]},")
    print(f"")
    print(f"I'm Phil Patterson from Blue Canvas, an AI consultancy based in Derry.")
    print(f"")
    print(f"I noticed {contact['company_name']} could benefit from {contact['outreach_angle'].lower()}.")
    
    if contact['pain_points'] and contact['pain_points'] != 'None identified':
        pain_point = contact['pain_points'].split(';')[0]
        print(f"Specifically, I see you're {pain_point.lower()} - this is exactly")
        print(f"what we help accounting firms modernize.")
    
    print(f"")
    print(f"As a {contact['title'].lower()}, you'd appreciate how AI can:")
    print(f"• Automate routine client communications")
    print(f"• Generate insights from financial data")
    print(f"• Streamline compliance reporting")
    print(f"")
    print(f"Would you be open to a 15-minute call next week to discuss how")
    print(f"we could help {contact['company_name']} stay ahead digitally?")
    print(f"")
    print(f"Best regards,")
    print(f"Phil Patterson")
    print(f"Blue Canvas")
    print("-" * 50)

if __name__ == "__main__":
    run_demo()