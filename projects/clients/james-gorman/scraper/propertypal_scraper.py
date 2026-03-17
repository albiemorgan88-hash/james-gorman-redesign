#!/usr/bin/env python3
"""
PropertyPal Scraper for James Gorman Property
Scrapes property listings in the Derry area for competitive intelligence
"""

import requests
from bs4 import BeautifulSoup
import time
import csv
import json
import argparse
import logging
from datetime import datetime, timedelta
from pathlib import Path
from typing import List, Dict, Optional
import re
from urllib.parse import urljoin, urlparse
import random

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

class PropertyPalScraper:
    def __init__(self, delay_range=(1, 3)):
        self.base_url = "https://www.propertypal.com"
        self.delay_range = delay_range
        self.session = requests.Session()
        
        # Target areas in Derry
        self.target_areas = [
            "derry-city",
            "waterside-derry",
            "cityside-derry", 
            "culmore",
            "eglinton",
            "drumahoe",
            "strathfoyle",
            "newbuildings",
            "park-derry",
            "limavady",
            "dungiven"
        ]
        
        # Headers to avoid detection
        self.headers = {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
            'Accept-Language': 'en-GB,en;q=0.9',
            'Accept-Encoding': 'gzip, deflate, br',
            'DNT': '1',
            'Connection': 'keep-alive',
            'Upgrade-Insecure-Requests': '1',
        }
        self.session.headers.update(self.headers)
        
    def random_delay(self):
        """Add random delay between requests to be respectful"""
        delay = random.uniform(*self.delay_range)
        logger.info(f"Waiting {delay:.1f} seconds...")
        time.sleep(delay)
        
    def get_page_with_retry(self, url: str, max_retries: int = 3) -> Optional[requests.Response]:
        """Fetch page with retry logic and error handling"""
        for attempt in range(max_retries):
            try:
                logger.info(f"Fetching: {url} (attempt {attempt + 1})")
                response = self.session.get(url, timeout=30)
                
                if response.status_code == 200:
                    return response
                elif response.status_code == 403:
                    logger.warning(f"403 Forbidden - possible bot detection. Waiting longer...")
                    time.sleep(10 + attempt * 5)
                else:
                    logger.warning(f"HTTP {response.status_code} for {url}")
                    
            except requests.RequestException as e:
                logger.error(f"Request failed for {url}: {e}")
                if attempt < max_retries - 1:
                    self.random_delay()
                    
        logger.error(f"Failed to fetch {url} after {max_retries} attempts")
        return None
        
    def extract_property_data(self, property_element) -> Optional[Dict]:
        """Extract property data from a property listing element"""
        try:
            property_data = {}
            
            # Property URL
            link_elem = property_element.find('a', href=True)
            if link_elem:
                property_data['url'] = urljoin(self.base_url, link_elem['href'])
            else:
                return None
                
            # Price
            price_elem = property_element.find(class_=re.compile(r'price|amount'))
            if not price_elem:
                # Try different selectors
                price_elem = property_element.find('span', string=re.compile(r'£'))
                if not price_elem:
                    price_elem = property_element.find(text=re.compile(r'£'))
                    
            if price_elem:
                price_text = price_elem.get_text() if hasattr(price_elem, 'get_text') else str(price_elem)
                property_data['price'] = price_text.strip()
            else:
                property_data['price'] = 'POA'
                
            # Address
            address_elem = property_element.find(class_=re.compile(r'address|location|title'))
            if address_elem:
                property_data['address'] = address_elem.get_text().strip()
            else:
                # Fallback to title or other text
                title_elem = property_element.find('h2') or property_element.find('h3')
                if title_elem:
                    property_data['address'] = title_elem.get_text().strip()
                else:
                    property_data['address'] = 'Address not found'
                    
            # Property type and bedrooms (often in same element)
            details_elem = property_element.find(class_=re.compile(r'details|info|spec'))
            if details_elem:
                details_text = details_elem.get_text()
                
                # Extract bedrooms
                bed_match = re.search(r'(\d+)\s*bed', details_text, re.IGNORECASE)
                property_data['bedrooms'] = bed_match.group(1) if bed_match else 'N/A'
                
                # Extract bathrooms
                bath_match = re.search(r'(\d+)\s*bath', details_text, re.IGNORECASE)
                property_data['bathrooms'] = bath_match.group(1) if bath_match else 'N/A'
                
                # Property type
                if re.search(r'detached', details_text, re.IGNORECASE):
                    property_data['property_type'] = 'Detached'
                elif re.search(r'semi', details_text, re.IGNORECASE):
                    property_data['property_type'] = 'Semi-detached'
                elif re.search(r'terrace', details_text, re.IGNORECASE):
                    property_data['property_type'] = 'Terraced'
                elif re.search(r'apartment|flat', details_text, re.IGNORECASE):
                    property_data['property_type'] = 'Apartment'
                else:
                    property_data['property_type'] = 'Other'
            else:
                property_data['bedrooms'] = 'N/A'
                property_data['bathrooms'] = 'N/A'
                property_data['property_type'] = 'N/A'
                
            # Agent
            agent_elem = property_element.find(class_=re.compile(r'agent|estate|office'))
            if agent_elem:
                property_data['agent'] = agent_elem.get_text().strip()
            else:
                property_data['agent'] = 'Unknown'
                
            # Date listed (try to find)
            date_elem = property_element.find(class_=re.compile(r'date|listed|time'))
            if date_elem:
                property_data['date_listed'] = date_elem.get_text().strip()
            else:
                property_data['date_listed'] = 'N/A'
                
            # Status
            status_elem = property_element.find(class_=re.compile(r'status|sold|agreed'))
            if status_elem:
                status_text = status_elem.get_text().lower()
                if 'sold' in status_text:
                    property_data['status'] = 'Sold'
                elif 'agreed' in status_text:
                    property_data['status'] = 'Sale Agreed'
                else:
                    property_data['status'] = 'For Sale'
            else:
                property_data['status'] = 'For Sale'
                
            logger.debug(f"Extracted property: {property_data['address'][:50]}...")
            return property_data
            
        except Exception as e:
            logger.error(f"Error extracting property data: {e}")
            return None
            
    def scrape_area(self, area: str, max_pages: int = 10) -> List[Dict]:
        """Scrape all properties in a specific area"""
        logger.info(f"Scraping area: {area}")
        properties = []
        
        for page in range(1, max_pages + 1):
            # Construct URL - PropertyPal uses different URL patterns
            url_patterns = [
                f"{self.base_url}/property-for-sale/{area}",
                f"{self.base_url}/property-for-sale/{area}?page={page}",
                f"{self.base_url}/property-for-sale/{area}/page-{page}",
            ]
            
            response = None
            for url_pattern in url_patterns:
                url = url_pattern if page == 1 else url_pattern
                response = self.get_page_with_retry(url)
                if response:
                    break
                    
            if not response:
                logger.warning(f"Could not fetch page {page} for area {area}")
                break
                
            soup = BeautifulSoup(response.text, 'html.parser')
            
            # Find property listings - try multiple selectors
            property_selectors = [
                '.property-item',
                '.listing-item',
                '.property-card',
                '.property',
                '[class*="property"]',
                '[class*="listing"]'
            ]
            
            property_elements = []
            for selector in property_selectors:
                elements = soup.select(selector)
                if elements:
                    property_elements = elements
                    logger.info(f"Found {len(elements)} properties using selector: {selector}")
                    break
                    
            if not property_elements:
                logger.warning(f"No properties found on page {page} for area {area}")
                break
                
            page_properties = []
            for prop_elem in property_elements:
                prop_data = self.extract_property_data(prop_elem)
                if prop_data:
                    prop_data['area'] = area
                    prop_data['scraped_at'] = datetime.now().isoformat()
                    page_properties.append(prop_data)
                    
            properties.extend(page_properties)
            logger.info(f"Scraped {len(page_properties)} properties from page {page}")
            
            # Check if there are more pages
            next_page_elem = soup.find('a', string=re.compile(r'next|>')) or soup.find(class_=re.compile(r'next'))
            if not next_page_elem or len(page_properties) == 0:
                logger.info(f"No more pages for area {area}")
                break
                
            self.random_delay()
            
        logger.info(f"Total properties scraped for {area}: {len(properties)}")
        return properties
        
    def scrape_all_areas(self, areas: List[str] = None) -> List[Dict]:
        """Scrape all target areas"""
        if areas is None:
            areas = self.target_areas
            
        all_properties = []
        
        for area in areas:
            try:
                area_properties = self.scrape_area(area)
                all_properties.extend(area_properties)
                logger.info(f"Completed scraping {area}: {len(area_properties)} properties")
                
                # Longer delay between areas to be respectful
                if area != areas[-1]:  # Don't delay after last area
                    delay = random.uniform(5, 10)
                    logger.info(f"Waiting {delay:.1f} seconds before next area...")
                    time.sleep(delay)
                    
            except Exception as e:
                logger.error(f"Error scraping area {area}: {e}")
                continue
                
        logger.info(f"Total properties scraped across all areas: {len(all_properties)}")
        return all_properties
        
    def save_to_csv(self, properties: List[Dict], filename: str):
        """Save properties to CSV file"""
        if not properties:
            logger.warning("No properties to save")
            return
            
        fieldnames = [
            'address', 'price', 'property_type', 'bedrooms', 'bathrooms',
            'agent', 'date_listed', 'status', 'url', 'area', 'scraped_at'
        ]
        
        with open(filename, 'w', newline='', encoding='utf-8') as csvfile:
            writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
            writer.writeheader()
            
            for prop in properties:
                # Ensure all fields exist
                row = {field: prop.get(field, 'N/A') for field in fieldnames}
                writer.writerow(row)
                
        logger.info(f"Saved {len(properties)} properties to {filename}")
        
    def save_to_json(self, properties: List[Dict], filename: str):
        """Save properties to JSON file"""
        with open(filename, 'w', encoding='utf-8') as jsonfile:
            json.dump(properties, jsonfile, indent=2, ensure_ascii=False)
        logger.info(f"Saved {len(properties)} properties to {filename}")
        
    def generate_market_report(self, properties: List[Dict], filename: str, days_filter: int = 7):
        """Generate a market intelligence report"""
        if not properties:
            logger.warning("No properties to analyze")
            return
            
        logger.info(f"Generating market report for {len(properties)} properties...")
        
        # Analysis
        total_properties = len(properties)
        
        # Properties by area
        area_stats = {}
        agent_stats = {}
        type_stats = {}
        price_data = []
        
        recent_cutoff = datetime.now() - timedelta(days=days_filter)
        recent_properties = []
        
        for prop in properties:
            area = prop.get('area', 'Unknown')
            agent = prop.get('agent', 'Unknown')
            prop_type = prop.get('property_type', 'Unknown')
            
            # Count by area
            area_stats[area] = area_stats.get(area, 0) + 1
            
            # Count by agent
            agent_stats[agent] = agent_stats.get(agent, 0) + 1
            
            # Count by type
            type_stats[prop_type] = type_stats.get(prop_type, 0) + 1
            
            # Price analysis
            price_str = prop.get('price', '')
            price_match = re.search(r'£([\d,]+)', price_str.replace(',', ''))
            if price_match:
                try:
                    price = int(price_match.group(1).replace(',', ''))
                    price_data.append({
                        'price': price,
                        'area': area,
                        'type': prop_type,
                        'agent': agent
                    })
                except ValueError:
                    pass
                    
            # Recent properties (basic date check)
            date_str = prop.get('date_listed', '')
            if any(word in date_str.lower() for word in ['today', 'yesterday', 'day', 'hour', 'minute']):
                recent_properties.append(prop)
                
        # Generate report
        report_lines = [
            f"# Derry Property Market Report",
            f"**Generated:** {datetime.now().strftime('%Y-%m-%d %H:%M')}",
            f"**Total Properties Analyzed:** {total_properties}",
            "",
            "## Summary Statistics",
            f"- **Total Listings:** {total_properties}",
            f"- **Recent Listings (last {days_filter} days):** {len(recent_properties)}",
            f"- **Average Properties per Area:** {total_properties / len(area_stats) if area_stats else 0:.1f}",
            "",
            "## Properties by Area",
        ]
        
        for area, count in sorted(area_stats.items(), key=lambda x: x[1], reverse=True):
            report_lines.append(f"- **{area.replace('-', ' ').title()}:** {count} properties")
            
        report_lines.extend([
            "",
            "## Competitor Analysis (Top Agents)",
        ])
        
        top_agents = sorted(agent_stats.items(), key=lambda x: x[1], reverse=True)[:10]
        for agent, count in top_agents:
            percentage = (count / total_properties) * 100 if total_properties > 0 else 0
            report_lines.append(f"- **{agent}:** {count} properties ({percentage:.1f}%)")
            
        # Market share analysis
        james_competitors = [agent for agent, count in top_agents if agent.lower() not in ['james gorman', 'unknown']][:5]
        if james_competitors:
            report_lines.extend([
                "",
                "## Key Competitors for James Gorman Property",
            ])
            for agent in james_competitors[:3]:
                count = agent_stats[agent]
                report_lines.append(f"- **{agent}:** {count} active listings")
                
        # Property types
        report_lines.extend([
            "",
            "## Property Types",
        ])
        
        for prop_type, count in sorted(type_stats.items(), key=lambda x: x[1], reverse=True):
            percentage = (count / total_properties) * 100 if total_properties > 0 else 0
            report_lines.append(f"- **{prop_type}:** {count} properties ({percentage:.1f}%)")
            
        # Price analysis
        if price_data:
            prices = [p['price'] for p in price_data]
            avg_price = sum(prices) / len(prices)
            median_price = sorted(prices)[len(prices) // 2]
            
            report_lines.extend([
                "",
                "## Price Analysis",
                f"- **Average Price:** £{avg_price:,.0f}",
                f"- **Median Price:** £{median_price:,.0f}",
                f"- **Price Range:** £{min(prices):,.0f} - £{max(prices):,.0f}",
            ])
            
        # Opportunities
        small_agents = [agent for agent, count in agent_stats.items() if count <= 2 and agent.lower() != 'unknown']
        if small_agents:
            report_lines.extend([
                "",
                "## Opportunity Analysis",
                "### Small/Independent Agents (Potential Leads)",
                "These agents have few listings and might be worth targeting when properties come back to market:",
            ])
            for agent in small_agents[:5]:
                count = agent_stats[agent]
                report_lines.append(f"- **{agent}:** {count} listing{'s' if count > 1 else ''}")
                
        # Recent activity
        if recent_properties:
            report_lines.extend([
                "",
                f"## Recent Activity (Last {days_filter} Days)",
                f"**{len(recent_properties)} new listings:**",
            ])
            for prop in recent_properties[:10]:  # Top 10 recent
                address = prop.get('address', 'Unknown')[:50]
                price = prop.get('price', 'POA')
                agent = prop.get('agent', 'Unknown')
                report_lines.append(f"- **{address}** - {price} - *{agent}*")
                
        # Save report
        with open(filename, 'w', encoding='utf-8') as f:
            f.write('\n'.join(report_lines))
            
        logger.info(f"Market report saved to {filename}")

def main():
    parser = argparse.ArgumentParser(description='PropertyPal Scraper for Derry')
    parser.add_argument('--area', help='Specific area to scrape (comma-separated)')
    parser.add_argument('--days', type=int, default=7, help='Filter recent listings (days)')
    parser.add_argument('--output-dir', default='data', help='Output directory')
    parser.add_argument('--delay', type=float, nargs=2, default=[1.0, 3.0], 
                       help='Random delay range between requests (min max)')
    
    args = parser.parse_args()
    
    # Setup output directory
    output_dir = Path(args.output_dir)
    output_dir.mkdir(exist_ok=True)
    
    # Initialize scraper
    scraper = PropertyPalScraper(delay_range=tuple(args.delay))
    
    # Determine areas to scrape
    if args.area:
        areas = [area.strip() for area in args.area.split(',')]
    else:
        areas = None  # Will use all default areas
        
    # Scrape properties
    logger.info("Starting PropertyPal scraping...")
    properties = scraper.scrape_all_areas(areas)
    
    if not properties:
        logger.error("No properties scraped. Check the website structure or connection.")
        return
        
    # Generate filenames with timestamp
    timestamp = datetime.now().strftime('%Y-%m-%d')
    csv_filename = output_dir / f'derry-listings-{timestamp}.csv'
    json_filename = output_dir / f'derry-listings-{timestamp}.json'
    report_filename = output_dir / f'market-report-{timestamp}.md'
    
    # Save data
    scraper.save_to_csv(properties, csv_filename)
    scraper.save_to_json(properties, json_filename)
    scraper.generate_market_report(properties, report_filename, args.days)
    
    logger.info(f"""
Scraping completed successfully!
- Properties scraped: {len(properties)}
- CSV saved: {csv_filename}
- JSON saved: {json_filename}
- Report saved: {report_filename}
""")

if __name__ == "__main__":
    main()