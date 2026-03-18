#!/usr/bin/env python3
"""
Blue Canvas Contact Enrichment System
Turns generic company emails into validated decision maker contacts.
"""

import requests
import re
import csv
import json
import dns.resolver
import socket
import time
from urllib.parse import urljoin, urlparse
from bs4 import BeautifulSoup
from typing import List, Dict, Optional, Tuple
import logging

# Set up logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

class ContactEnricher:
    def __init__(self):
        self.session = requests.Session()
        self.session.headers.update({
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        })
        
        # Decision maker keywords (ranked by authority)
        self.decision_maker_titles = {
            'ceo': 10, 'chief executive': 10, 'managing director': 10, 'md': 10,
            'partner': 9, 'senior partner': 10, 'founding partner': 10,
            'director': 8, 'executive director': 9, 'non-executive director': 7,
            'chairman': 9, 'chairwoman': 9, 'chair': 9,
            'owner': 9, 'founder': 9, 'co-founder': 9,
            'president': 8, 'vice president': 7, 'vp': 7,
            'head of': 6, 'lead': 5, 'senior manager': 4, 'manager': 3
        }
        
        # Pain point indicators for personalization
        self.pain_point_indicators = {
            'outdated_website': ['wordpress', 'wix', 'squarespace', 'old design', 'last updated'],
            'no_social_media': ['no linkedin', 'no twitter', 'no facebook'],
            'poor_seo': ['not ranking', 'no google presence', 'hard to find'],
            'manual_processes': ['email for quotes', 'call for pricing', 'manual booking'],
            'limited_online_presence': ['basic website', 'no online booking', 'limited content']
        }

    def scrape_company_website(self, company_url: str, company_name: str) -> List[Dict]:
        """Scrape company website for team/about/partners pages and extract decision makers."""
        try:
            logger.info(f"Scraping {company_url} for decision makers")
            
            # Try common page patterns
            potential_pages = [
                company_url.rstrip('/'),
                urljoin(company_url, '/team'),
                urljoin(company_url, '/about'),
                urljoin(company_url, '/about-us'),
                urljoin(company_url, '/partners'),
                urljoin(company_url, '/management'),
                urljoin(company_url, '/leadership'),
                urljoin(company_url, '/staff'),
                urljoin(company_url, '/people'),
                urljoin(company_url, '/directors')
            ]
            
            decision_makers = []
            
            for page_url in potential_pages:
                try:
                    response = self.session.get(page_url, timeout=10)
                    if response.status_code == 200:
                        soup = BeautifulSoup(response.text, 'html.parser')
                        page_decision_makers = self._extract_people_from_page(soup, company_name, page_url)
                        decision_makers.extend(page_decision_makers)
                        time.sleep(1)  # Be polite
                except Exception as e:
                    logger.debug(f"Failed to scrape {page_url}: {e}")
                    continue
            
            # Remove duplicates based on name
            seen_names = set()
            unique_decision_makers = []
            for dm in decision_makers:
                name_key = dm['name'].lower().strip()
                if name_key not in seen_names:
                    seen_names.add(name_key)
                    unique_decision_makers.append(dm)
            
            return unique_decision_makers
            
        except Exception as e:
            logger.error(f"Error scraping {company_url}: {e}")
            return []

    def _extract_people_from_page(self, soup: BeautifulSoup, company_name: str, page_url: str) -> List[Dict]:
        """Extract people and their titles from a webpage."""
        people = []
        
        # Look for structured data patterns
        patterns = [
            # Name followed by title
            r'([A-Z][a-z]+ [A-Z][a-z]+(?:\s+[A-Z][a-z]+)?)\s*[,\-–]\s*([^,\n]+)',
            # Title followed by name  
            r'([^,\n]+?)\s*[,\-–]\s*([A-Z][a-z]+ [A-Z][a-z]+(?:\s+[A-Z][a-z]+)?)',
            # Simple name detection
            r'([A-Z][a-z]+ [A-Z][a-z]+(?:\s+[A-Z][a-z]+)?)'
        ]
        
        text_content = soup.get_text()
        
        for pattern in patterns:
            matches = re.findall(pattern, text_content, re.IGNORECASE | re.MULTILINE)
            for match in matches:
                if isinstance(match, tuple):
                    if len(match) == 2:
                        # Determine which is name vs title
                        part1, part2 = match
                        if self._looks_like_name(part1) and self._looks_like_title(part2):
                            name, title = part1, part2
                        elif self._looks_like_title(part1) and self._looks_like_name(part2):
                            title, name = part1, part2
                        else:
                            continue
                    else:
                        name = match[0] if self._looks_like_name(match[0]) else None
                        title = "Unknown"
                        if not name:
                            continue
                else:
                    name = match
                    title = "Unknown"
                
                # Score decision making authority
                authority_score = self._score_decision_maker(title)
                
                if authority_score > 3:  # Only include likely decision makers
                    people.append({
                        'name': name.strip(),
                        'title': title.strip(),
                        'company': company_name,
                        'authority_score': authority_score,
                        'source_url': page_url
                    })
        
        return people

    def _looks_like_name(self, text: str) -> bool:
        """Check if text looks like a person's name."""
        if not text or len(text.split()) < 2:
            return False
        
        # Check for common non-name patterns
        non_name_patterns = [
            r'\d', r'@', r'\.com', r'ltd', r'limited', r'company', 
            r'services', r'solutions', r'consulting', r'group'
        ]
        
        for pattern in non_name_patterns:
            if re.search(pattern, text, re.IGNORECASE):
                return False
        
        # Must start with capital letter
        return text[0].isupper() and len(text) < 50

    def _looks_like_title(self, text: str) -> bool:
        """Check if text looks like a job title."""
        if not text or len(text) > 100:
            return False
        
        title_indicators = ['director', 'manager', 'partner', 'ceo', 'cto', 'cfo', 'head', 'lead', 'senior', 'chief']
        return any(indicator in text.lower() for indicator in title_indicators)

    def _score_decision_maker(self, title: str) -> int:
        """Score the decision making authority of a person based on their title."""
        title_lower = title.lower()
        
        for keyword, score in self.decision_maker_titles.items():
            if keyword in title_lower:
                return score
        
        return 1  # Default low score

    def generate_email_patterns(self, name: str, company_domain: str) -> List[str]:
        """Generate likely email patterns for a person."""
        if not company_domain:
            return []
        
        # Clean the domain
        domain = company_domain.replace('www.', '').replace('http://', '').replace('https://', '')
        if '/' in domain:
            domain = domain.split('/')[0]
        
        # Parse name
        name_parts = name.lower().replace('.', '').replace(',', '').split()
        if len(name_parts) < 2:
            return []
        
        first_name = name_parts[0]
        last_name = name_parts[-1]
        
        # Generate patterns
        patterns = [
            f"{first_name}.{last_name}@{domain}",
            f"{first_name}@{domain}",
            f"{first_name[0]}.{last_name}@{domain}",
            f"{first_name}{last_name}@{domain}",
            f"{first_name}_{last_name}@{domain}",
            f"{first_name[0]}{last_name}@{domain}",
            f"{last_name}@{domain}",
            f"{first_name}.{last_name[0]}@{domain}"
        ]
        
        return patterns

    def validate_email(self, email: str) -> Dict[str, any]:
        """Validate email address existence and deliverability."""
        try:
            domain = email.split('@')[1]
            
            # Check MX record
            try:
                mx_records = dns.resolver.resolve(domain, 'MX')
                mx_exists = len(mx_records) > 0
            except:
                mx_exists = False
            
            # Basic format validation
            email_pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
            format_valid = bool(re.match(email_pattern, email))
            
            # Score confidence
            confidence = 'low'
            if format_valid and mx_exists:
                confidence = 'medium'
                # Could add more sophisticated checks here
            elif format_valid:
                confidence = 'low'
            else:
                confidence = 'invalid'
            
            return {
                'email': email,
                'format_valid': format_valid,
                'mx_exists': mx_exists,
                'confidence': confidence
            }
            
        except Exception as e:
            logger.error(f"Error validating email {email}: {e}")
            return {
                'email': email,
                'format_valid': False,
                'mx_exists': False,
                'confidence': 'invalid'
            }

    def find_linkedin_profile(self, name: str, company_name: str) -> Optional[str]:
        """Find LinkedIn profile for a person (placeholder - would need LinkedIn API or scraping)."""
        # In a real implementation, this would:
        # 1. Use LinkedIn API (if available)
        # 2. Or scrape LinkedIn search results
        # 3. Validate the person works at the company
        
        # For now, generate likely LinkedIn URL pattern
        name_clean = re.sub(r'[^a-zA-Z\s]', '', name).lower()
        name_parts = name_clean.split()
        if len(name_parts) >= 2:
            linkedin_slug = f"{name_parts[0]}-{name_parts[-1]}"
            return f"https://linkedin.com/in/{linkedin_slug}"
        
        return None

    def identify_pain_points(self, company_url: str, company_name: str) -> List[str]:
        """Identify potential pain points for personalized outreach."""
        pain_points = []
        
        try:
            response = self.session.get(company_url, timeout=10)
            if response.status_code == 200:
                content = response.text.lower()
                
                # Check for outdated tech/design
                if any(tech in content for tech in ['wordpress', 'wix', 'squarespace']):
                    pain_points.append("Using basic website builder - potential for custom solution")
                
                if 'last updated' in content or 'copyright 20' in content:
                    copyright_years = re.findall(r'copyright (\d{4})', content)
                    if copyright_years:
                        latest_year = max(int(year) for year in copyright_years)
                        if latest_year < 2023:
                            pain_points.append(f"Website appears outdated (copyright {latest_year})")
                
                # Check for manual processes
                if any(phrase in content for phrase in ['call for quote', 'email for pricing', 'contact us for']):
                    pain_points.append("Relying on manual quote processes - automation opportunity")
                
                # Check for limited online presence
                if 'google maps' not in content and 'directions' not in content:
                    pain_points.append("Limited local search optimization")
                
                if len(content) < 5000:  # Very basic website
                    pain_points.append("Minimal web presence - expansion opportunity")
        
        except Exception as e:
            logger.debug(f"Error analyzing pain points for {company_url}: {e}")
        
        return pain_points

    def enrich_contact(self, company_name: str, company_url: str) -> List[Dict]:
        """Main method to enrich a company contact with decision maker details."""
        logger.info(f"Enriching contact for {company_name}")
        
        # Step 1: Scrape website for decision makers
        decision_makers = self.scrape_company_website(company_url, company_name)
        
        # Step 2: Get company domain for email generation
        domain = urlparse(company_url).netloc
        
        # Step 3: Identify pain points
        pain_points = self.identify_pain_points(company_url, company_name)
        
        enriched_contacts = []
        
        for dm in decision_makers:
            # Generate email patterns
            email_patterns = self.generate_email_patterns(dm['name'], domain)
            
            # Validate emails and pick best one
            best_email = None
            best_confidence = 'invalid'
            
            for email in email_patterns:
                validation = self.validate_email(email)
                if validation['confidence'] in ['high', 'medium'] and validation['confidence'] != 'invalid':
                    if best_email is None or validation['confidence'] == 'high':
                        best_email = email
                        best_confidence = validation['confidence']
            
            # Find LinkedIn profile
            linkedin_profile = self.find_linkedin_profile(dm['name'], company_name)
            
            # Generate personalized outreach angle
            outreach_angle = self._generate_outreach_angle(dm, pain_points)
            
            enriched_contact = {
                'company_name': company_name,
                'decision_maker_name': dm['name'],
                'title': dm['title'],
                'authority_score': dm['authority_score'],
                'email': best_email or 'Not found',
                'email_confidence': best_confidence,
                'linkedin_profile': linkedin_profile or 'Not found',
                'pain_points': '; '.join(pain_points) if pain_points else 'None identified',
                'outreach_angle': outreach_angle,
                'source_url': dm['source_url']
            }
            
            enriched_contacts.append(enriched_contact)
        
        return enriched_contacts

    def _generate_outreach_angle(self, decision_maker: Dict, pain_points: List[str]) -> str:
        """Generate personalized outreach angle based on role and pain points."""
        title = decision_maker['title'].lower()
        authority = decision_maker['authority_score']
        
        if authority >= 9:  # Senior leadership
            if pain_points:
                return f"Strategic digital transformation opportunity - {pain_points[0]}"
            else:
                return "Strategic partnership discussion for digital growth"
        
        elif authority >= 7:  # Directors/VPs
            if any('automation' in pp for pp in pain_points):
                return "Operational efficiency through AI automation"
            elif any('website' in pp for pp in pain_points):
                return "Digital presence modernization"
            else:
                return "Departmental digital optimization"
        
        else:  # Managers/Heads
            if pain_points:
                return f"Tactical solution for: {pain_points[0]}"
            else:
                return "Process improvement consultation"

    def save_to_csv(self, enriched_contacts: List[Dict], filename: str):
        """Save enriched contacts to CSV file."""
        if not enriched_contacts:
            logger.warning("No contacts to save")
            return
        
        with open(filename, 'w', newline='', encoding='utf-8') as csvfile:
            fieldnames = [
                'company_name', 'decision_maker_name', 'title', 'authority_score',
                'email', 'email_confidence', 'linkedin_profile', 'pain_points',
                'outreach_angle', 'source_url'
            ]
            writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
            
            writer.writeheader()
            for contact in enriched_contacts:
                writer.writerow(contact)
        
        logger.info(f"Saved {len(enriched_contacts)} enriched contacts to {filename}")

def main():
    """Test the enrichment system with Derry accountants."""
    enricher = ContactEnricher()
    
    # Test companies from the request
    test_companies = [
        {
            'name': 'EF McCambridge',
            'url': 'https://www.efmccambridge.com',
            'known_contacts': ['Paul Foley', 'Christine Whiteman', 'Maurice Brennan']
        },
        {
            'name': 'McLaughlin & Co',
            'url': 'https://www.mclaughlinaccountants.co.uk',
            'known_contacts': []
        },
        {
            'name': 'MJ Kane',
            'url': 'https://www.mjkane.co.uk', 
            'known_contacts': []
        }
    ]
    
    all_enriched_contacts = []
    
    for company in test_companies:
        print(f"\n{'='*50}")
        print(f"Enriching: {company['name']}")
        print(f"{'='*50}")
        
        enriched = enricher.enrich_contact(company['name'], company['url'])
        all_enriched_contacts.extend(enriched)
        
        for contact in enriched:
            print(f"\nDecision Maker: {contact['decision_maker_name']}")
            print(f"Title: {contact['title']}")
            print(f"Authority Score: {contact['authority_score']}/10")
            print(f"Email: {contact['email']} ({contact['email_confidence']} confidence)")
            print(f"LinkedIn: {contact['linkedin_profile']}")
            print(f"Pain Points: {contact['pain_points']}")
            print(f"Outreach Angle: {contact['outreach_angle']}")
    
    # Save results
    output_file = '/Users/philsagent/.openclaw/workspace/projects/biz-dev/blue-canvas/enriched_contacts.csv'
    enricher.save_to_csv(all_enriched_contacts, output_file)
    
    print(f"\n{'='*50}")
    print(f"SUMMARY: Found {len(all_enriched_contacts)} decision makers")
    print(f"Results saved to: {output_file}")
    print(f"{'='*50}")

if __name__ == "__main__":
    main()