#!/usr/bin/env python3
"""
Stage 1: GIAS Discovery (Modified for Northern Ireland)
Uses Wikipedia list of Northern Ireland schools since GIAS covers England only.
Scrapes additional data from school websites where possible.
"""

import requests
import pandas as pd
import csv
import time
import os
from urllib.parse import urljoin
import logging
import re
from bs4 import BeautifulSoup

# Import our config
import sys
sys.path.append('/Users/philsagent/.openclaw/workspace/projects/hip-psychology-pipeline')
from config.gias_config import *

# Set up logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

class NISchoolsDataPuller:
    def __init__(self, test_mode=True):
        self.test_mode = test_mode
        self.session = requests.Session()
        self.session.headers.update({
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        })
        self.schools_data = []
        
    def extract_schools_from_wikipedia(self):
        """Extract schools data from Wikipedia page"""
        logger.info("Extracting schools from Wikipedia...")
        
        url = "https://en.wikipedia.org/wiki/List_of_secondary_schools_in_Northern_Ireland"
        
        try:
            response = self.session.get(url)
            if response.status_code != 200:
                logger.error(f"Failed to fetch Wikipedia page: {response.status_code}")
                return []
            
            soup = BeautifulSoup(response.content, 'html.parser')
            
            # Find the main table
            tables = soup.find_all('table', class_='wikitable')
            if not tables:
                logger.error("Could not find wikitable on page")
                return []
            
            schools = []
            
            # Process the main table
            for table in tables:
                rows = table.find_all('tr')[1:]  # Skip header row
                
                for row in rows:
                    cells = row.find_all(['td', 'th'])
                    if len(cells) >= 6:  # Need at least 6 columns
                        try:
                            # Extract school data
                            school_name_cell = cells[0]
                            school_name = school_name_cell.get_text(strip=True)
                            
                            # Try to get Wikipedia link for school
                            school_link = None
                            link_elem = school_name_cell.find('a')
                            if link_elem:
                                school_link = urljoin("https://en.wikipedia.org", link_elem.get('href', ''))
                            
                            city_town = cells[1].get_text(strip=True)
                            county = cells[2].get_text(strip=True)
                            sector = cells[3].get_text(strip=True) if len(cells) > 3 else ""
                            school_type = cells[4].get_text(strip=True) if len(cells) > 4 else ""
                            deni_ref = cells[5].get_text(strip=True) if len(cells) > 5 else ""
                            
                            # Only include secondary schools (not grammar only)
                            if school_type.lower() in ['secondary', 'grammar']:
                                schools.append({
                                    'school_name': school_name,
                                    'city_town': city_town,
                                    'county': county,
                                    'sector': sector,
                                    'school_type': school_type,
                                    'deni_ref': deni_ref,
                                    'wikipedia_link': school_link
                                })
                        except Exception as e:
                            logger.warning(f"Error processing row: {e}")
                            continue
            
            logger.info(f"Extracted {len(schools)} schools from Wikipedia")
            return schools
            
        except Exception as e:
            logger.error(f"Error extracting from Wikipedia: {e}")
            return []
    
    def enrich_school_data(self, school):
        """Try to enrich school data by finding official website"""
        logger.info(f"Enriching data for {school['school_name']}")
        
        # Try to find school website
        search_query = f"{school['school_name']} {school['city_town']} northern ireland"
        
        try:
            # Simple Google search to find official website
            search_url = f"https://www.google.com/search?q={search_query.replace(' ', '+')}"
            
            # For now, we'll construct likely website patterns
            school_name_clean = re.sub(r'[^\w\s]', '', school['school_name'].lower())
            school_name_clean = re.sub(r'\s+', '', school_name_clean)
            
            possible_domains = [
                f"https://www.{school_name_clean}.co.uk",
                f"https://www.{school_name_clean}.org.uk",
                f"https://www.{school_name_clean}.org",
                f"https://{school_name_clean}.co.uk",
                f"https://{school_name_clean}.org.uk"
            ]
            
            website = None
            for domain in possible_domains:
                try:
                    resp = self.session.head(domain, timeout=5)
                    if resp.status_code == 200:
                        website = domain
                        break
                except:
                    continue
            
            # Create enriched school record
            enriched = {
                'URN': school['deni_ref'],
                'EstablishmentName': school['school_name'],
                'Street': '',  # Will try to get from school website
                'Locality': school['city_town'],
                'Address3': '',
                'Town': school['city_town'],
                'County': school['county'],
                'Postcode': '',
                'PhaseOfEducation': 'Secondary',
                'StatutoryLowAge': 11,
                'StatutoryHighAge': 18,
                'NumberOfPupils': '',
                'HeadTitle': '',
                'HeadFirstName': '',
                'HeadLastName': '',
                'SchoolWebsite': website or '',
                'TelephoneNum': '',
                'EstablishmentStatus': 'Open',
                'TypeOfEstablishment': school['school_type'],
                'Sector': school['sector']
            }
            
            # If we found a website, try to get more details
            if website:
                try:
                    resp = self.session.get(website, timeout=10)
                    if resp.status_code == 200:
                        soup = BeautifulSoup(resp.content, 'html.parser')
                        
                        # Look for contact information
                        contact_text = soup.get_text().lower()
                        
                        # Extract phone number
                        phone_match = re.search(r'(?:tel|phone|call)[:\s]*(\d{4}[\s-]?\d{3}[\s-]?\d{3,4})', contact_text)
                        if phone_match:
                            enriched['TelephoneNum'] = phone_match.group(1)
                        
                        # Extract postcode
                        postcode_match = re.search(r'\b[A-Z]{2}\d{1,2}\s?\d[A-Z]{2}\b', soup.get_text().upper())
                        if postcode_match:
                            enriched['Postcode'] = postcode_match.group(0)
                        
                        logger.info(f"Successfully enriched {school['school_name']}")
                except Exception as e:
                    logger.warning(f"Could not enrich from website {website}: {e}")
            
            return enriched
            
        except Exception as e:
            logger.warning(f"Error enriching school {school['school_name']}: {e}")
            return None
    
    def save_results(self, schools_data):
        """Save results to CSV"""
        logger.info(f"Saving {len(schools_data)} schools to {SCHOOLS_OUTPUT_CSV}")
        
        # Ensure output directory exists
        os.makedirs(os.path.dirname(SCHOOLS_OUTPUT_CSV), exist_ok=True)
        
        # Convert to DataFrame
        df = pd.DataFrame(schools_data)
        
        # Save to CSV
        df.to_csv(SCHOOLS_OUTPUT_CSV, index=False)
        logger.info(f"Results saved to {SCHOOLS_OUTPUT_CSV}")
        
        # Log sample of data
        logger.info("Sample data:")
        logger.info(df.head(3).to_string())
        
        return True
    
    def run(self):
        """Run the complete NI schools data extraction"""
        logger.info("Starting Northern Ireland schools data extraction...")
        
        # Extract schools from Wikipedia
        wiki_schools = self.extract_schools_from_wikipedia()
        if not wiki_schools:
            logger.error("Failed to extract schools from Wikipedia")
            return False
        
        # Filter and limit for test mode
        if self.test_mode:
            # Focus on Belfast and Derry schools for testing
            priority_areas = ['Belfast', 'Derry', 'Londonderry', 'Newry', 'Armagh']
            priority_schools = [s for s in wiki_schools 
                               if any(area in s['city_town'] for area in priority_areas)]
            
            if len(priority_schools) >= TEST_LIMIT:
                wiki_schools = priority_schools[:TEST_LIMIT]
            else:
                wiki_schools = wiki_schools[:TEST_LIMIT]
            
            logger.info(f"Test mode: limiting to {len(wiki_schools)} schools")
        
        # Enrich school data
        enriched_schools = []
        for i, school in enumerate(wiki_schools):
            logger.info(f"Processing school {i+1}/{len(wiki_schools)}: {school['school_name']}")
            
            enriched = self.enrich_school_data(school)
            if enriched:
                enriched_schools.append(enriched)
            
            # Rate limiting
            time.sleep(1)
            
            # Break early for testing
            if self.test_mode and len(enriched_schools) >= 10:
                break
        
        if not enriched_schools:
            logger.error("No schools were successfully enriched")
            return False
        
        # Save results
        success = self.save_results(enriched_schools)
        
        if success:
            logger.info(f"Stage 1 completed successfully. Found {len(enriched_schools)} schools.")
            return True
        else:
            logger.error("Stage 1 failed")
            return False


def main():
    """Main function to run Stage 1"""
    puller = NISchoolsDataPuller(test_mode=TEST_MODE)
    success = puller.run()
    
    if success:
        print("✅ Stage 1 (NI Schools Discovery) completed successfully")
        return True
    else:
        print("❌ Stage 1 (NI Schools Discovery) failed")
        return False


if __name__ == "__main__":
    success = main()
    exit(0 if success else 1)