#!/usr/bin/env python3
"""
Stage 2: LinkedIn Intelligence
Searches for SENCO, Head of Year, and other key staff on LinkedIn.
Uses careful rate limiting to avoid being blocked.
"""

import pandas as pd
import requests
import time
import json
import os
import logging
from urllib.parse import quote_plus
import re
from bs4 import BeautifulSoup
import random

# Import our config
import sys
sys.path.append('/Users/philsagent/.openclaw/workspace/projects/hip-psychology-pipeline')
from config.linkedin_config import *

# Set up logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

class LinkedInScraper:
    def __init__(self):
        self.session = requests.Session()
        self.total_searches = 0
        self.successful_finds = 0
        self.results = []
        
    def get_random_user_agent(self):
        """Get a random user agent to avoid detection"""
        return random.choice(USER_AGENTS)
    
    def rate_limit(self):
        """Implement rate limiting"""
        delay = REQUEST_DELAY_SECONDS + random.uniform(1, 3)  # Add some randomness
        logger.info(f"Rate limiting... waiting {delay:.1f} seconds")
        time.sleep(delay)
    
    def search_google_for_linkedin(self, query):
        """Use Google to search for LinkedIn profiles (more reliable than LinkedIn direct)"""
        self.session.headers.update({
            'User-Agent': self.get_random_user_agent()
        })
        
        # Google search for LinkedIn profiles
        google_query = f"site:linkedin.com/in {query}"
        encoded_query = quote_plus(google_query)
        search_url = f"https://www.google.com/search?q={encoded_query}"
        
        logger.info(f"Searching Google: {google_query}")
        
        try:
            response = self.session.get(search_url, timeout=10)
            if response.status_code != 200:
                logger.warning(f"Google search failed: {response.status_code}")
                return []
            
            soup = BeautifulSoup(response.content, 'html.parser')
            
            # Find LinkedIn profile links in search results
            linkedin_profiles = []
            
            # Look for LinkedIn URLs in search results
            for link in soup.find_all('a', href=True):
                href = link.get('href', '')
                if 'linkedin.com/in/' in href and '/url?q=' in href:
                    # Extract the actual LinkedIn URL from Google's wrapped link
                    match = re.search(r'/url\?q=(https://[^&]+)', href)
                    if match:
                        linkedin_url = match.group(1)
                        if 'linkedin.com/in/' in linkedin_url:
                            # Get the text around this link for context
                            text_context = link.get_text(strip=True)
                            parent_text = link.parent.get_text(strip=True) if link.parent else ""
                            
                            linkedin_profiles.append({
                                'url': linkedin_url,
                                'title': text_context,
                                'context': parent_text[:200]  # First 200 chars
                            })
            
            logger.info(f"Found {len(linkedin_profiles)} LinkedIn profiles")
            return linkedin_profiles[:5]  # Limit to top 5 results
            
        except Exception as e:
            logger.error(f"Error searching Google for LinkedIn: {e}")
            return []
    
    def extract_profile_info(self, linkedin_url):
        """Extract basic info from a LinkedIn profile URL"""
        try:
            # For now, just extract name from URL pattern
            # linkedin.com/in/firstname-lastname-12345678
            profile_match = re.search(r'/in/([^/?]+)', linkedin_url)
            if profile_match:
                profile_slug = profile_match.group(1)
                # Convert hyphenated name to readable format
                name_parts = profile_slug.split('-')
                # Remove numbers/IDs from end
                clean_parts = []
                for part in name_parts:
                    if not re.match(r'^\d+$', part):  # Skip pure number parts
                        clean_parts.append(part.title())
                    else:
                        break  # Stop at first number
                
                if len(clean_parts) >= 2:
                    name = ' '.join(clean_parts[:2])  # Take first two parts as first/last name
                    return {
                        'name': name,
                        'linkedin_url': linkedin_url,
                        'profile_slug': profile_slug
                    }
            
            return {
                'name': 'LinkedIn Profile',
                'linkedin_url': linkedin_url,
                'profile_slug': linkedin_url.split('/')[-1]
            }
            
        except Exception as e:
            logger.error(f"Error extracting profile info: {e}")
            return None
    
    def search_school_staff(self, school_data):
        """Search for key staff at a specific school"""
        school_name = school_data['EstablishmentName']
        school_urn = school_data['URN']
        location = school_data['Town']
        
        logger.info(f"Searching staff for {school_name} ({location})")
        
        contacts_found = []
        
        # Try different search patterns for each role
        for pattern_template in ROLE_SEARCH_PATTERNS:
            self.total_searches += 1
            
            # Format the search pattern
            search_query = pattern_template.format(
                school_name=school_name,
                location=location
            )
            
            # Rate limiting before each search
            self.rate_limit()
            
            # Search for LinkedIn profiles
            linkedin_results = self.search_google_for_linkedin(search_query)
            
            for profile in linkedin_results:
                profile_info = self.extract_profile_info(profile['url'])
                if profile_info:
                    
                    # Determine role based on search pattern and context
                    role = "Unknown"
                    if "senco" in search_query.lower() or "special educational needs" in search_query.lower():
                        role = "SENCO"
                    elif "head of year" in search_query.lower():
                        role = "Head of Year"
                    elif "vice principal" in search_query.lower():
                        role = "Vice Principal"
                    elif "deputy head" in search_query.lower():
                        role = "Deputy Head"
                    elif "assistant head" in search_query.lower():
                        role = "Assistant Head"
                    
                    # Check if this person seems to be associated with this school
                    school_confirmed = False
                    confidence_score = 0.5  # Base confidence
                    
                    # Look for school name in profile context
                    context_text = profile.get('context', '').lower()
                    if school_name.lower() in context_text:
                        school_confirmed = True
                        confidence_score = 0.9
                    elif location.lower() in context_text:
                        confidence_score = 0.7
                    
                    contact = {
                        'school_urn': school_urn,
                        'school_name': school_name,
                        'contact_name': profile_info['name'],
                        'contact_title': role,
                        'linkedin_url': profile_info['linkedin_url'],
                        'location': location,
                        'current_position': profile.get('title', ''),
                        'school_confirmed': school_confirmed,
                        'confidence_score': confidence_score,
                        'search_query': search_query,
                        'context': profile.get('context', '')[:100]  # First 100 chars
                    }
                    
                    contacts_found.append(contact)
                    self.successful_finds += 1
                    
                    logger.info(f"Found: {profile_info['name']} - {role} (confidence: {confidence_score})")
            
            # Don't overdo it - limit searches per school
            if self.total_searches % 5 == 0:
                logger.info(f"Progress: {self.total_searches} searches, {self.successful_finds} contacts found")
            
            # Break early if we're in test mode and found some contacts
            if len(contacts_found) >= 2:
                logger.info(f"Found {len(contacts_found)} contacts for {school_name} - moving to next school")
                break
        
        return contacts_found
    
    def save_results(self, results):
        """Save LinkedIn search results to CSV"""
        logger.info(f"Saving {len(results)} LinkedIn contacts to {LINKEDIN_OUTPUT_CSV}")
        
        # Ensure output directory exists
        os.makedirs(os.path.dirname(LINKEDIN_OUTPUT_CSV), exist_ok=True)
        
        # Convert to DataFrame
        df = pd.DataFrame(results)
        
        # Save to CSV
        df.to_csv(LINKEDIN_OUTPUT_CSV, index=False)
        logger.info(f"Results saved to {LINKEDIN_OUTPUT_CSV}")
        
        # Log sample
        if not df.empty:
            logger.info("Sample LinkedIn data:")
            logger.info(df.head(3).to_string())
        
        return True
    
    def run(self, schools_csv_path):
        """Run LinkedIn intelligence gathering"""
        logger.info("Starting LinkedIn intelligence gathering...")
        
        # Load schools data
        try:
            schools_df = pd.read_csv(schools_csv_path)
            logger.info(f"Loaded {len(schools_df)} schools")
        except Exception as e:
            logger.error(f"Error loading schools data: {e}")
            return False
        
        all_contacts = []
        
        # Process each school
        for idx, school_row in schools_df.iterrows():
            school_data = school_row.to_dict()
            
            logger.info(f"Processing school {idx + 1}/{len(schools_df)}: {school_data['EstablishmentName']}")
            
            contacts = self.search_school_staff(school_data)
            all_contacts.extend(contacts)
            
            # Longer pause between schools
            time.sleep(10)
        
        # Calculate success rate
        hit_rate = len(all_contacts) / len(schools_df) if len(schools_df) > 0 else 0
        logger.info(f"LinkedIn Intelligence Summary:")
        logger.info(f"- Schools processed: {len(schools_df)}")
        logger.info(f"- Total searches: {self.total_searches}")
        logger.info(f"- Contacts found: {len(all_contacts)}")
        logger.info(f"- Hit rate: {hit_rate:.1%}")
        
        # Save results
        success = self.save_results(all_contacts)
        
        # Check if we hit our target
        if hit_rate >= TARGET_HIT_RATE:
            logger.info(f"✅ Hit rate {hit_rate:.1%} meets target of {TARGET_HIT_RATE:.1%}")
        else:
            logger.warning(f"⚠️  Hit rate {hit_rate:.1%} below target of {TARGET_HIT_RATE:.1%}")
        
        return success and len(all_contacts) > 0


def main():
    """Main function to run Stage 2"""
    schools_csv = "/Users/philsagent/.openclaw/workspace/projects/hip-psychology-pipeline/data/schools.csv"
    
    if not os.path.exists(schools_csv):
        print("❌ Schools data not found. Please run Stage 1 first.")
        return False
    
    scraper = LinkedInScraper()
    success = scraper.run(schools_csv)
    
    if success:
        print("✅ Stage 2 (LinkedIn Intelligence) completed successfully")
        return True
    else:
        print("❌ Stage 2 (LinkedIn Intelligence) failed")
        return False


if __name__ == "__main__":
    success = main()
    exit(0 if success else 1)