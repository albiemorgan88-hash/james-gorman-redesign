#!/usr/bin/env python3
"""
Stage 3: School Website Mining
Scrapes school websites for staff directories and contact information.
More reliable than LinkedIn for finding school staff.
"""

import pandas as pd
import requests
import time
import json
import os
import logging
from urllib.parse import urljoin, urlparse
import re
from bs4 import BeautifulSoup
import random

# Import our config
import sys
sys.path.append('/Users/philsagent/.openclaw/workspace/projects/hip-psychology-pipeline')

# Set up logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

# Config
OUTPUT_DIR = "/Users/philsagent/.openclaw/workspace/projects/hip-psychology-pipeline/data"
WEBSITE_OUTPUT_CSV = os.path.join(OUTPUT_DIR, "website_contacts.csv")

# Common staff directory URL patterns
STAFF_URL_PATTERNS = [
    '/staff',
    '/about/staff',
    '/staff-directory', 
    '/about/staff-directory',
    '/contact/staff',
    '/contact',
    '/about/contact',
    '/team',
    '/about/team',
    '/faculty',
    '/about/faculty',
    '/people',
    '/about/people',
    '/staff.html',
    '/staff.php'
]

# Target roles we're looking for
TARGET_ROLES = [
    'senco',
    'special educational needs coordinator',
    'special educational needs',
    'sen coordinator',
    'head of year',
    'year head',
    'vice principal',
    'deputy principal', 
    'deputy head',
    'deputy headteacher',
    'assistant head',
    'assistant headteacher',
    'assistant principal',
    'head of department',
    'learning support',
    'inclusion',
    'pastoral',
    'pupil support'
]

USER_AGENTS = [
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.1 Safari/605.1.15'
]

class SchoolWebsiteScraper:
    def __init__(self):
        self.session = requests.Session()
        self.session.headers.update({
            'User-Agent': random.choice(USER_AGENTS)
        })
        self.session.timeout = 10
        
        self.results = []
        self.processed_schools = 0
        self.successful_scrapes = 0
        
    def find_staff_pages(self, base_url):
        """Find potential staff directory pages on the website"""
        staff_pages = []
        
        if not base_url or not base_url.startswith('http'):
            return staff_pages
        
        logger.info(f"Looking for staff pages on {base_url}")
        
        try:
            # First, try to get the homepage
            response = self.session.get(base_url)
            if response.status_code != 200:
                logger.warning(f"Could not access {base_url}: {response.status_code}")
                return staff_pages
            
            soup = BeautifulSoup(response.content, 'html.parser')
            
            # Look for links that might lead to staff pages
            all_links = soup.find_all('a', href=True)
            
            for link in all_links:
                href = link.get('href', '').lower()
                link_text = link.get_text(strip=True).lower()
                
                # Check if this looks like a staff page
                if any(pattern in href for pattern in ['/staff', '/team', '/faculty', '/people', '/contact']):
                    full_url = urljoin(base_url, link.get('href'))
                    staff_pages.append({
                        'url': full_url,
                        'link_text': link_text,
                        'type': 'link_found'
                    })
                
                # Also check link text for staff-related keywords
                elif any(keyword in link_text for keyword in ['staff', 'team', 'faculty', 'people', 'contact']):
                    full_url = urljoin(base_url, link.get('href'))
                    staff_pages.append({
                        'url': full_url,
                        'link_text': link_text,
                        'type': 'text_match'
                    })
            
            # Also try common staff URL patterns directly
            for pattern in STAFF_URL_PATTERNS:
                test_url = urljoin(base_url, pattern)
                staff_pages.append({
                    'url': test_url,
                    'link_text': pattern,
                    'type': 'pattern_test'
                })
            
            # Remove duplicates
            seen_urls = set()
            unique_pages = []
            for page in staff_pages:
                if page['url'] not in seen_urls:
                    seen_urls.add(page['url'])
                    unique_pages.append(page)
            
            logger.info(f"Found {len(unique_pages)} potential staff pages")
            return unique_pages[:10]  # Limit to avoid too many requests
            
        except Exception as e:
            logger.error(f"Error finding staff pages for {base_url}: {e}")
            return staff_pages
    
    def extract_staff_from_page(self, url, school_data):
        """Extract staff information from a specific page"""
        logger.info(f"Extracting staff from {url}")
        
        try:
            response = self.session.get(url, timeout=15)
            if response.status_code != 200:
                logger.warning(f"Could not access {url}: {response.status_code}")
                return []
            
            soup = BeautifulSoup(response.content, 'html.parser')
            
            # Get all text content
            page_text = soup.get_text().lower()
            
            # Look for target roles in the page
            staff_found = []
            
            # Split text into lines and paragraphs
            text_blocks = []
            
            # Get text from different elements
            for element in soup.find_all(['p', 'div', 'li', 'td', 'tr']):
                text = element.get_text(strip=True)
                if len(text) > 10:  # Ignore very short text blocks
                    text_blocks.append(text)
            
            # Process each text block
            for block in text_blocks:
                block_lower = block.lower()
                
                # Check for target roles
                for role in TARGET_ROLES:
                    if role in block_lower:
                        # Try to extract name(s) from this block
                        names = self.extract_names_from_text(block)
                        
                        for name in names:
                            if self.is_likely_person_name(name):
                                staff_member = {
                                    'school_urn': school_data['URN'],
                                    'school_name': school_data['EstablishmentName'],
                                    'contact_name': name,
                                    'contact_title': role.title(),
                                    'found_on_page': url,
                                    'context': block[:200],  # First 200 chars for context
                                    'extraction_method': 'website_scrape'
                                }
                                staff_found.append(staff_member)
                                logger.info(f"Found: {name} - {role.title()}")
            
            # Also look for email addresses that might belong to key staff
            email_pattern = r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b'
            emails = re.findall(email_pattern, soup.get_text())
            
            # Filter for likely staff emails
            for email in emails:
                email_lower = email.lower()
                if any(role_part in email_lower for role_part in ['senco', 'head', 'deputy', 'vice', 'support']):
                    # Try to infer role from email
                    inferred_role = 'Staff Member'
                    if 'senco' in email_lower:
                        inferred_role = 'SENCO'
                    elif 'head' in email_lower:
                        inferred_role = 'Head of Year'
                    elif 'deputy' in email_lower:
                        inferred_role = 'Deputy Head'
                    elif 'vice' in email_lower:
                        inferred_role = 'Vice Principal'
                    
                    staff_member = {
                        'school_urn': school_data['URN'],
                        'school_name': school_data['EstablishmentName'],
                        'contact_name': email.split('@')[0].replace('.', ' ').title(),
                        'contact_title': inferred_role,
                        'email': email,
                        'found_on_page': url,
                        'context': f'Email found: {email}',
                        'extraction_method': 'email_extraction'
                    }
                    staff_found.append(staff_member)
                    logger.info(f"Found email: {email} - {inferred_role}")
            
            return staff_found[:5]  # Limit per page to avoid noise
            
        except Exception as e:
            logger.error(f"Error extracting staff from {url}: {e}")
            return []
    
    def extract_names_from_text(self, text):
        """Extract potential names from text"""
        names = []
        
        # Common patterns for names
        # Look for "Name - Role" or "Role: Name" patterns
        patterns = [
            r'([A-Z][a-z]+\s+[A-Z][a-z]+)\s*[-:]\s*',  # Name - Role
            r'[-:]\s*([A-Z][a-z]+\s+[A-Z][a-z]+)',      # Role - Name
            r'([A-Z][a-z]+\s+[A-Z][a-z]+)',             # Just names (2 words, capitalized)
        ]
        
        for pattern in patterns:
            matches = re.findall(pattern, text)
            names.extend(matches)
        
        # Clean up names
        cleaned_names = []
        for name in names:
            name = name.strip()
            if len(name.split()) == 2:  # Only accept 2-word names
                cleaned_names.append(name)
        
        return list(set(cleaned_names))  # Remove duplicates
    
    def is_likely_person_name(self, name):
        """Check if a string looks like a person's name"""
        if not name or len(name.split()) != 2:
            return False
        
        # Exclude common non-name phrases
        exclude_words = [
            'school', 'college', 'education', 'department', 'office', 
            'contact', 'about', 'more', 'click', 'here', 'read',
            'welcome', 'home', 'page', 'site', 'web'
        ]
        
        name_lower = name.lower()
        return not any(word in name_lower for word in exclude_words)
    
    def scrape_school_website(self, school_data):
        """Scrape a school's website for staff information"""
        school_name = school_data['EstablishmentName']
        website_url = school_data.get('SchoolWebsite', '')
        
        logger.info(f"Scraping website for {school_name}")
        
        if not website_url:
            logger.warning(f"No website URL for {school_name}")
            return []
        
        self.processed_schools += 1
        
        # Find potential staff pages
        staff_pages = self.find_staff_pages(website_url)
        
        all_staff = []
        pages_scraped = 0
        
        # Scrape each potential staff page
        for page_info in staff_pages:
            if pages_scraped >= 3:  # Limit pages per school
                break
                
            staff_from_page = self.extract_staff_from_page(page_info['url'], school_data)
            all_staff.extend(staff_from_page)
            
            if staff_from_page:
                pages_scraped += 1
                self.successful_scrapes += 1
            
            # Rate limiting
            time.sleep(2)
        
        logger.info(f"Found {len(all_staff)} staff members for {school_name}")
        
        # Remove duplicates based on name + role
        unique_staff = []
        seen = set()
        for staff in all_staff:
            key = (staff['contact_name'].lower(), staff['contact_title'].lower())
            if key not in seen:
                seen.add(key)
                unique_staff.append(staff)
        
        return unique_staff
    
    def save_results(self, results):
        """Save website scraping results to CSV"""
        logger.info(f"Saving {len(results)} website contacts to {WEBSITE_OUTPUT_CSV}")
        
        # Ensure output directory exists
        os.makedirs(os.path.dirname(WEBSITE_OUTPUT_CSV), exist_ok=True)
        
        # Convert to DataFrame
        df = pd.DataFrame(results)
        
        # Save to CSV
        df.to_csv(WEBSITE_OUTPUT_CSV, index=False)
        logger.info(f"Results saved to {WEBSITE_OUTPUT_CSV}")
        
        # Log sample
        if not df.empty:
            logger.info("Sample website data:")
            logger.info(df.head(3).to_string())
        
        return True
    
    def run(self, schools_csv_path):
        """Run website scraping for all schools"""
        logger.info("Starting school website scraping...")
        
        # Load schools data
        try:
            schools_df = pd.read_csv(schools_csv_path)
            logger.info(f"Loaded {len(schools_df)} schools")
        except Exception as e:
            logger.error(f"Error loading schools data: {e}")
            return False
        
        all_contacts = []
        
        # Process schools with websites first
        schools_with_websites = schools_df[schools_df['SchoolWebsite'].notna() & (schools_df['SchoolWebsite'] != '')].copy()
        logger.info(f"Found {len(schools_with_websites)} schools with websites")
        
        for idx, school_row in schools_with_websites.iterrows():
            school_data = school_row.to_dict()
            
            logger.info(f"Processing school {idx + 1}: {school_data['EstablishmentName']}")
            
            try:
                contacts = self.scrape_school_website(school_data)
                all_contacts.extend(contacts)
            except Exception as e:
                logger.error(f"Error processing {school_data['EstablishmentName']}: {e}")
            
            # Rate limiting between schools
            time.sleep(5)
        
        # Calculate success rate
        success_rate = len(all_contacts) / len(schools_with_websites) if len(schools_with_websites) > 0 else 0
        
        logger.info(f"Website Scraping Summary:")
        logger.info(f"- Schools with websites: {len(schools_with_websites)}")
        logger.info(f"- Schools processed: {self.processed_schools}")
        logger.info(f"- Successful scrapes: {self.successful_scrapes}")
        logger.info(f"- Contacts found: {len(all_contacts)}")
        logger.info(f"- Average contacts per school: {len(all_contacts) / len(schools_with_websites):.1f}")
        logger.info(f"- Success rate: {success_rate:.1%}")
        
        # Save results
        if all_contacts:
            self.save_results(all_contacts)
            return True
        else:
            logger.warning("No contacts found from website scraping")
            return False


def main():
    """Main function to run Stage 3"""
    schools_csv = "/Users/philsagent/.openclaw/workspace/projects/hip-psychology-pipeline/data/schools.csv"
    
    if not os.path.exists(schools_csv):
        print("❌ Schools data not found. Please run Stage 1 first.")
        return False
    
    scraper = SchoolWebsiteScraper()
    success = scraper.run(schools_csv)
    
    if success:
        print("✅ Stage 3 (School Website Mining) completed successfully")
        return True
    else:
        print("❌ Stage 3 (School Website Mining) failed")
        return False


if __name__ == "__main__":
    success = main()
    exit(0 if success else 1)