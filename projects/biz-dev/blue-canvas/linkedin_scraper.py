#!/usr/bin/env python3
"""
LinkedIn Profile Finder and Scraper
Searches for LinkedIn profiles and extracts professional information.
"""

import requests
import re
import time
from urllib.parse import quote_plus
from bs4 import BeautifulSoup
from typing import List, Dict, Optional
import logging

logger = logging.getLogger(__name__)

class LinkedInScraper:
    def __init__(self):
        self.session = requests.Session()
        self.session.headers.update({
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
            'Accept-Language': 'en-US,en;q=0.9',
            'Accept-Encoding': 'gzip, deflate, br',
            'Connection': 'keep-alive',
        })

    def search_google_for_linkedin(self, name: str, company_name: str) -> Optional[str]:
        """
        Search Google for LinkedIn profiles using site:linkedin.com/in/
        """
        try:
            # Clean the query
            query = f'site:linkedin.com/in/ "{name}" "{company_name}"'
            search_url = f"https://www.google.com/search?q={quote_plus(query)}"
            
            logger.info(f"Searching Google for: {query}")
            
            response = self.session.get(search_url, timeout=10)
            if response.status_code != 200:
                return None
            
            soup = BeautifulSoup(response.text, 'html.parser')
            
            # Look for LinkedIn profile URLs in search results
            for link in soup.find_all('a', href=True):
                href = link.get('href')
                if href and 'linkedin.com/in/' in href:
                    # Extract the actual LinkedIn URL
                    if '/url?q=' in href:
                        # Google redirected URL
                        linkedin_url = href.split('/url?q=')[1].split('&')[0]
                        if 'linkedin.com/in/' in linkedin_url:
                            return linkedin_url
                    elif href.startswith('https://linkedin.com') or href.startswith('https://www.linkedin.com'):
                        return href
            
            time.sleep(2)  # Be polite to Google
            return None
            
        except Exception as e:
            logger.error(f"Error searching Google for LinkedIn profile: {e}")
            return None

    def find_linkedin_profiles_by_company(self, company_name: str) -> List[Dict]:
        """
        Search for multiple LinkedIn profiles from a specific company
        """
        try:
            query = f'site:linkedin.com/in/ "{company_name}"'
            search_url = f"https://www.google.com/search?q={quote_plus(query)}&num=20"
            
            logger.info(f"Searching for company profiles: {company_name}")
            
            response = self.session.get(search_url, timeout=10)
            if response.status_code != 200:
                return []
            
            soup = BeautifulSoup(response.text, 'html.parser')
            profiles = []
            
            # Extract profile URLs and associated text
            for result in soup.find_all('div', class_='g'):
                title_elem = result.find('h3')
                link_elem = result.find('a', href=True)
                
                if title_elem and link_elem:
                    href = link_elem.get('href')
                    title = title_elem.get_text()
                    
                    if 'linkedin.com/in/' in href:
                        # Extract actual LinkedIn URL
                        if '/url?q=' in href:
                            linkedin_url = href.split('/url?q=')[1].split('&')[0]
                        else:
                            linkedin_url = href
                        
                        if 'linkedin.com/in/' in linkedin_url:
                            # Try to extract name from title
                            name = self._extract_name_from_title(title)
                            if name:
                                profiles.append({
                                    'name': name,
                                    'linkedin_url': linkedin_url,
                                    'title_text': title
                                })
            
            time.sleep(2)
            return profiles
            
        except Exception as e:
            logger.error(f"Error finding company LinkedIn profiles: {e}")
            return []

    def _extract_name_from_title(self, title: str) -> Optional[str]:
        """
        Extract person's name from LinkedIn search result title
        LinkedIn titles usually follow: "Name - Title at Company | LinkedIn"
        """
        if not title or 'LinkedIn' not in title:
            return None
        
        # Remove common LinkedIn suffixes
        title = re.sub(r'\s*\|\s*LinkedIn.*$', '', title, flags=re.IGNORECASE)
        title = re.sub(r'\s*-\s*LinkedIn.*$', '', title, flags=re.IGNORECASE)
        
        # Split on " - " to separate name from title
        parts = title.split(' - ')
        if len(parts) > 0:
            potential_name = parts[0].strip()
            
            # Validate it looks like a name
            if self._looks_like_name(potential_name):
                return potential_name
        
        return None

    def _looks_like_name(self, text: str) -> bool:
        """
        Check if text looks like a person's name
        """
        if not text or len(text.split()) < 2 or len(text) > 50:
            return False
        
        # Must start with capital letter
        if not text[0].isupper():
            return False
        
        # Check for common non-name patterns
        non_name_patterns = [
            r'\d', r'@', r'\.com', r'ltd', r'limited', r'company',
            r'services', r'solutions', r'consulting', r'group',
            r'^the\s', r'^a\s', r'^an\s'
        ]
        
        for pattern in non_name_patterns:
            if re.search(pattern, text, re.IGNORECASE):
                return False
        
        # Each word should start with capital
        words = text.split()
        for word in words:
            if not word[0].isupper():
                return False
        
        return True

    def validate_profile_company_match(self, linkedin_url: str, expected_company: str) -> bool:
        """
        Validate that a LinkedIn profile actually works at the expected company
        (This would require scraping the actual LinkedIn page, which has anti-bot measures)
        """
        # For now, just return True as we're relying on Google search accuracy
        # In a production system, this would scrape the LinkedIn profile
        # or use LinkedIn API to verify current company
        return True

def main():
    """Test the LinkedIn scraper"""
    scraper = LinkedInScraper()
    
    # Test with a known person
    test_cases = [
        ("Paul Foley", "EF McCambridge"),
        ("Christine Whiteman", "EF McCambridge"),
        ("Maurice Brennan", "EF McCambridge")
    ]
    
    for name, company in test_cases:
        print(f"\nSearching for: {name} at {company}")
        linkedin_url = scraper.search_google_for_linkedin(name, company)
        if linkedin_url:
            print(f"Found: {linkedin_url}")
        else:
            print("No LinkedIn profile found")
    
    # Test company search
    print(f"\nSearching for all EF McCambridge employees on LinkedIn:")
    company_profiles = scraper.find_linkedin_profiles_by_company("EF McCambridge")
    for profile in company_profiles:
        print(f"Name: {profile['name']}")
        print(f"URL: {profile['linkedin_url']}")
        print(f"Title: {profile['title_text']}")
        print("---")

if __name__ == "__main__":
    main()