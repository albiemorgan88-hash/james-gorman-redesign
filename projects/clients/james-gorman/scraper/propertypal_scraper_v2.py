#!/usr/bin/env python3
"""
PropertyPal Scraper v2 for James Gorman Property
Enhanced version that handles dynamic content and modern web architecture
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

class PropertyPalScraperV2:
    def __init__(self, delay_range=(2, 5)):
        self.base_url = "https://www.propertypal.com"
        self.delay_range = delay_range
        self.session = requests.Session()
        
        # Derry search areas - using search terms that PropertyPal recognizes
        self.search_areas = [
            "Derry",
            "Londonderry", 
            "Waterside",
            "Cityside",
            "Culmore",
            "Eglinton",
            "Drumahoe", 
            "Strathfoyle",
            "Newbuildings",
            "Park, Derry",
            "Limavady",
            "Dungiven"
        ]
        
        # More realistic headers
        self.headers = {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
            'Accept-Language': 'en-GB,en;q=0.9',
            'Accept-Encoding': 'gzip, deflate, br',
            'DNT': '1',
            'Connection': 'keep-alive',
            'Upgrade-Insecure-Requests': '1',
            'Sec-Fetch-Dest': 'document',
            'Sec-Fetch-Mode': 'navigate',
            'Sec-Fetch-Site': 'same-origin',
            'Sec-Ch-Ua': '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"',
            'Sec-Ch-Ua-Mobile': '?0',
            'Sec-Ch-Ua-Platform': '"macOS"'
        }
        self.session.headers.update(self.headers)
        
    def random_delay(self):
        """Add random delay between requests"""
        delay = random.uniform(*self.delay_range)
        logger.info(f"Waiting {delay:.1f} seconds...")
        time.sleep(delay)
        
    def get_page_with_retry(self, url: str, max_retries: int = 3) -> Optional[requests.Response]:
        """Fetch page with retry logic"""
        for attempt in range(max_retries):
            try:
                logger.info(f"Fetching: {url} (attempt {attempt + 1})")
                response = self.session.get(url, timeout=30)
                
                if response.status_code == 200:
                    return response
                elif response.status_code == 403:
                    logger.warning(f"403 Forbidden - waiting longer...")
                    time.sleep(15 + attempt * 10)
                else:
                    logger.warning(f"HTTP {response.status_code} for {url}")
                    
            except requests.RequestException as e:
                logger.error(f"Request failed for {url}: {e}")
                if attempt < max_retries - 1:
                    self.random_delay()
                    
        logger.error(f"Failed to fetch {url} after {max_retries} attempts")
        return None
        
    def search_properties(self, location: str, max_results: int = 100) -> List[Dict]:
        """Search for properties using PropertyPal's search functionality"""
        properties = []
        
        # Try different search URL patterns
        search_urls = [
            f"{self.base_url}/property-for-sale/{location.lower().replace(' ', '-').replace(',', '')}",
            f"{self.base_url}/property-for-sale?search={location}",
            f"{self.base_url}/property/search?location={location}&propertyType=all"
        ]
        
        for search_url in search_urls:
            logger.info(f"Trying search URL: {search_url}")
            
            response = self.get_page_with_retry(search_url)
            if not response:
                continue
                
            # Look for JSON data in the page (common in React apps)
            json_data = self.extract_json_data(response.text)
            if json_data:
                properties.extend(json_data)
                logger.info(f"Found {len(json_data)} properties from JSON data")
                break
                
            # Fallback to HTML parsing
            html_properties = self.parse_property_html(response.text, location)
            if html_properties:
                properties.extend(html_properties)
                logger.info(f"Found {len(html_properties)} properties from HTML")
                break
                
            self.random_delay()
        
        return properties[:max_results]
        
    def extract_json_data(self, html_content: str) -> List[Dict]:
        """Extract property data from embedded JSON in the page"""
        properties = []
        
        # Look for common JSON patterns in modern web apps
        json_patterns = [
            r'window\.__NEXT_DATA__\s*=\s*({.+?})</script>',
            r'window\.__INITIAL_STATE__\s*=\s*({.+?})</script>',
            r'"props"\s*:\s*({.+?"properties".+?})',
            r'"properties"\s*:\s*(\[.+?\])'
        ]
        
        for pattern in json_patterns:
            matches = re.finditer(pattern, html_content, re.DOTALL)
            for match in matches:
                try:
                    json_str = match.group(1)
                    data = json.loads(json_str)
                    
                    # Try to find property data in the JSON structure
                    found_properties = self.extract_properties_from_json(data)
                    if found_properties:
                        properties.extend(found_properties)
                        logger.info(f"Extracted {len(found_properties)} properties from JSON pattern")
                        
                except json.JSONDecodeError:
                    continue
                except Exception as e:
                    logger.debug(f"Error extracting JSON data: {e}")
                    continue
                    
        return properties
        
    def extract_properties_from_json(self, json_data: Dict) -> List[Dict]:
        """Extract property information from JSON data structure"""
        properties = []
        
        def search_json_recursive(obj, path=""):
            """Recursively search JSON for property-like data"""
            if isinstance(obj, dict):
                # Look for keys that suggest property data
                property_keys = ['properties', 'listings', 'results', 'items', 'data']
                
                for key, value in obj.items():
                    if key.lower() in property_keys and isinstance(value, list):
                        for item in value:
                            if isinstance(item, dict) and self.looks_like_property(item):
                                prop_data = self.parse_property_json(item)
                                if prop_data:
                                    properties.append(prop_data)
                    else:
                        search_json_recursive(value, f"{path}.{key}")
                        
            elif isinstance(obj, list):
                for i, item in enumerate(obj):
                    if isinstance(item, dict) and self.looks_like_property(item):
                        prop_data = self.parse_property_json(item)
                        if prop_data:
                            properties.append(prop_data)
                    else:
                        search_json_recursive(item, f"{path}[{i}]")
                        
        search_json_recursive(json_data)
        return properties
        
    def looks_like_property(self, data: Dict) -> bool:
        """Check if a JSON object looks like property data"""
        property_indicators = [
            'price', 'address', 'bedrooms', 'bathrooms', 
            'propertyType', 'agent', 'url', 'id'
        ]
        
        return sum(1 for indicator in property_indicators if indicator in str(data).lower()) >= 3
        
    def parse_property_json(self, property_data: Dict) -> Optional[Dict]:
        """Parse property data from JSON object"""
        try:
            # Extract common fields with various possible key names
            result = {
                'address': self.get_json_field(property_data, ['address', 'title', 'name', 'location', 'displayAddress']),
                'price': self.get_json_field(property_data, ['price', 'priceString', 'amount', 'priceDisplay']),
                'property_type': self.get_json_field(property_data, ['propertyType', 'type', 'category']),
                'bedrooms': self.get_json_field(property_data, ['bedrooms', 'beds', 'numberOfBedrooms']),
                'bathrooms': self.get_json_field(property_data, ['bathrooms', 'baths', 'numberOfBathrooms']),
                'agent': self.get_json_field(property_data, ['agent', 'agency', 'agentName', 'estate_agent']),
                'date_listed': self.get_json_field(property_data, ['dateAdded', 'listedDate', 'createdAt']),
                'status': self.get_json_field(property_data, ['status', 'saleStatus', 'availability']),
                'url': self.get_json_field(property_data, ['url', 'link', 'propertyUrl', 'href']),
                'scraped_at': datetime.now().isoformat()
            }
            
            # Clean and validate data
            if result['url'] and not result['url'].startswith('http'):
                result['url'] = urljoin(self.base_url, result['url'])
                
            # Only return if we have essential data
            if result['address'] or result['price']:
                return result
                
        except Exception as e:
            logger.debug(f"Error parsing property JSON: {e}")
            
        return None
        
    def get_json_field(self, data: Dict, possible_keys: List[str]) -> str:
        """Get a field from JSON data trying multiple possible key names"""
        for key in possible_keys:
            if key in data:
                value = data[key]
                if isinstance(value, (str, int, float)):
                    return str(value).strip()
                elif isinstance(value, dict) and 'text' in value:
                    return str(value['text']).strip()
                elif isinstance(value, dict) and 'value' in value:
                    return str(value['value']).strip()
        return 'N/A'
        
    def parse_property_html(self, html_content: str, area: str) -> List[Dict]:
        """Fallback HTML parsing for property data"""
        properties = []
        
        soup = BeautifulSoup(html_content, 'html.parser')
        
        # Look for various property container patterns
        selectors = [
            'div[data-testid*="property"]',
            'div[class*="property"]',
            'div[class*="listing"]',
            'article',
            'div[class*="card"]',
            'li[class*="result"]'
        ]
        
        property_elements = []
        for selector in selectors:
            elements = soup.select(selector)
            if len(elements) > 2:  # Likely property listings
                property_elements = elements
                logger.info(f"Using HTML selector: {selector} ({len(elements)} elements)")
                break
                
        for element in property_elements:
            property_data = self.extract_property_from_element(element, area)
            if property_data:
                properties.append(property_data)
                
        return properties
        
    def extract_property_from_element(self, element, area: str) -> Optional[Dict]:
        """Extract property data from HTML element"""
        try:
            result = {
                'area': area,
                'scraped_at': datetime.now().isoformat()
            }
            
            # Extract text content and look for patterns
            text_content = element.get_text()
            
            # Address - look for common patterns
            address_elem = element.find('h3') or element.find('h2') or element.find(class_=re.compile(r'title|address'))
            if address_elem:
                result['address'] = address_elem.get_text().strip()
            else:
                # Try to extract from text content
                lines = [line.strip() for line in text_content.split('\n') if line.strip()]
                if lines:
                    result['address'] = lines[0]  # First non-empty line often the address
                else:
                    result['address'] = 'N/A'
            
            # Price
            price_match = re.search(r'£[\d,]+', text_content)
            result['price'] = price_match.group(0) if price_match else 'POA'
            
            # Bedrooms
            bed_match = re.search(r'(\d+)\s*bed', text_content, re.IGNORECASE)
            result['bedrooms'] = bed_match.group(1) if bed_match else 'N/A'
            
            # Bathrooms
            bath_match = re.search(r'(\d+)\s*bath', text_content, re.IGNORECASE)
            result['bathrooms'] = bath_match.group(1) if bath_match else 'N/A'
            
            # Property type
            text_lower = text_content.lower()
            if 'detached' in text_lower:
                result['property_type'] = 'Detached'
            elif 'semi' in text_lower:
                result['property_type'] = 'Semi-detached'
            elif 'terrace' in text_lower:
                result['property_type'] = 'Terraced'
            elif 'apartment' in text_lower or 'flat' in text_lower:
                result['property_type'] = 'Apartment'
            else:
                result['property_type'] = 'Other'
            
            # URL
            link_elem = element.find('a', href=True)
            if link_elem:
                result['url'] = urljoin(self.base_url, link_elem['href'])
            else:
                result['url'] = 'N/A'
            
            # Agent - try to find estate agent name
            result['agent'] = 'Unknown'
            
            # Date and status
            result['date_listed'] = 'N/A'
            result['status'] = 'For Sale'
            
            return result if result['address'] != 'N/A' else None
            
        except Exception as e:
            logger.debug(f"Error extracting property from element: {e}")
            return None
    
    def scrape_all_areas(self, areas: List[str] = None) -> List[Dict]:
        """Scrape properties from all areas"""
        if areas is None:
            areas = self.search_areas
            
        all_properties = []
        
        for area in areas:
            try:
                logger.info(f"Searching area: {area}")
                area_properties = self.search_properties(area)
                
                # Add area to each property
                for prop in area_properties:
                    prop['area'] = area
                    
                all_properties.extend(area_properties)
                logger.info(f"Found {len(area_properties)} properties in {area}")
                
                if area != areas[-1]:  # Don't delay after last area
                    delay = random.uniform(8, 15)
                    logger.info(f"Waiting {delay:.1f} seconds before next area...")
                    time.sleep(delay)
                    
            except Exception as e:
                logger.error(f"Error searching area {area}: {e}")
                continue
                
        # Remove duplicates based on URL or address
        unique_properties = self.remove_duplicates(all_properties)
        logger.info(f"Total unique properties found: {len(unique_properties)}")
        
        return unique_properties
        
    def remove_duplicates(self, properties: List[Dict]) -> List[Dict]:
        """Remove duplicate properties based on URL or address"""
        seen = set()
        unique_properties = []
        
        for prop in properties:
            # Create a key based on URL or address
            url = prop.get('url', '')
            address = prop.get('address', '')
            
            if url != 'N/A' and url:
                key = url
            elif address != 'N/A' and address:
                key = address.lower().strip()
            else:
                continue  # Skip if no identifying info
                
            if key not in seen:
                seen.add(key)
                unique_properties.append(prop)
                
        return unique_properties
        
    def save_to_csv(self, properties: List[Dict], filename: str):
        """Save properties to CSV"""
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
                row = {field: prop.get(field, 'N/A') for field in fieldnames}
                writer.writerow(row)
                
        logger.info(f"Saved {len(properties)} properties to {filename}")
        
    def save_to_json(self, properties: List[Dict], filename: str):
        """Save properties to JSON"""
        with open(filename, 'w', encoding='utf-8') as jsonfile:
            json.dump(properties, jsonfile, indent=2, ensure_ascii=False)
        logger.info(f"Saved {len(properties)} properties to {filename}")
        
    def generate_market_report(self, properties: List[Dict], filename: str):
        """Generate market intelligence report"""
        if not properties:
            logger.warning("No properties to analyze")
            return
            
        # Analysis similar to original scraper
        total_properties = len(properties)
        
        # Group by area, agent, type
        area_stats = {}
        agent_stats = {}
        type_stats = {}
        price_data = []
        
        for prop in properties:
            area = prop.get('area', 'Unknown')
            agent = prop.get('agent', 'Unknown') 
            prop_type = prop.get('property_type', 'Unknown')
            
            area_stats[area] = area_stats.get(area, 0) + 1
            agent_stats[agent] = agent_stats.get(agent, 0) + 1
            type_stats[prop_type] = type_stats.get(prop_type, 0) + 1
            
            # Extract price
            price_str = prop.get('price', '')
            price_match = re.search(r'£?([\d,]+)', price_str.replace(',', ''))
            if price_match:
                try:
                    price = int(price_match.group(1).replace(',', ''))
                    price_data.append({
                        'price': price,
                        'area': area,
                        'type': prop_type
                    })
                except ValueError:
                    pass
        
        # Generate report
        report_lines = [
            f"# Derry Property Market Intelligence Report",
            f"**Generated:** {datetime.now().strftime('%Y-%m-%d %H:%M')}",
            f"**Scraping Method:** Enhanced PropertyPal API/JSON extraction",
            f"**Total Properties Found:** {total_properties}",
            "",
            "## Market Overview",
        ]
        
        if area_stats:
            report_lines.extend([
                "",
                "### Properties by Area",
            ])
            for area, count in sorted(area_stats.items(), key=lambda x: x[1], reverse=True):
                report_lines.append(f"- **{area}:** {count} properties")
        
        if agent_stats:
            report_lines.extend([
                "",
                "### Estate Agent Market Share",
            ])
            top_agents = sorted(agent_stats.items(), key=lambda x: x[1], reverse=True)[:10]
            for agent, count in top_agents:
                percentage = (count / total_properties) * 100 if total_properties > 0 else 0
                report_lines.append(f"- **{agent}:** {count} properties ({percentage:.1f}%)")
        
        if type_stats:
            report_lines.extend([
                "",
                "### Property Type Distribution",
            ])
            for prop_type, count in sorted(type_stats.items(), key=lambda x: x[1], reverse=True):
                percentage = (count / total_properties) * 100 if total_properties > 0 else 0
                report_lines.append(f"- **{prop_type}:** {count} properties ({percentage:.1f}%)")
        
        if price_data:
            prices = [p['price'] for p in price_data]
            avg_price = sum(prices) / len(prices)
            median_price = sorted(prices)[len(prices) // 2]
            
            report_lines.extend([
                "",
                "### Price Analysis",
                f"- **Average Price:** £{avg_price:,.0f}",
                f"- **Median Price:** £{median_price:,.0f}",
                f"- **Price Range:** £{min(prices):,.0f} - £{max(prices):,.0f}",
                f"- **Properties with Price Data:** {len(prices)} of {total_properties}",
            ])
        
        # Competitive intelligence for James Gorman Property
        small_agents = [agent for agent, count in agent_stats.items() 
                       if count <= 3 and agent.lower() not in ['unknown', 'n/a']]
        
        if small_agents:
            report_lines.extend([
                "",
                "## Competitive Intelligence for James Gorman Property",
                "",
                "### Opportunity Targets (Small/Independent Agents)",
                "These agents have few current listings - potential targets for future business:",
            ])
            for agent in small_agents[:8]:
                count = agent_stats[agent]
                report_lines.append(f"- **{agent}:** {count} listing{'s' if count > 1 else ''}")
        
        report_lines.extend([
            "",
            "## Key Insights",
            f"- **Market Activity:** {total_properties} active properties across Derry area",
            f"- **Competition Level:** {len([a for a in agent_stats.values() if a > 5])} major agents with 5+ listings",
            f"- **Market Opportunity:** {len(small_agents)} smaller agents with limited inventory",
            "",
            "## Recommendations",
            "1. **Target Properties from Small Agents:** When properties from smaller agents come back to market",
            "2. **Monitor Top Competitors:** Track pricing and marketing strategies of top 5 agents", 
            "3. **Focus Areas:** Concentrate on areas with highest property volumes",
            "4. **Regular Updates:** Run this analysis weekly to spot new opportunities",
        ])
        
        with open(filename, 'w', encoding='utf-8') as f:
            f.write('\n'.join(report_lines))
            
        logger.info(f"Market intelligence report saved to {filename}")

def main():
    parser = argparse.ArgumentParser(description='PropertyPal Scraper v2 for Derry Market Intelligence')
    parser.add_argument('--area', help='Specific area to scrape (comma-separated)')
    parser.add_argument('--output-dir', default='data', help='Output directory')
    parser.add_argument('--delay', type=float, nargs=2, default=[2.0, 5.0],
                       help='Random delay range between requests')
    
    args = parser.parse_args()
    
    # Setup
    output_dir = Path(args.output_dir)
    output_dir.mkdir(exist_ok=True)
    
    scraper = PropertyPalScraperV2(delay_range=tuple(args.delay))
    
    # Determine areas
    if args.area:
        areas = [area.strip() for area in args.area.split(',')]
    else:
        areas = None
        
    # Scrape
    logger.info("Starting PropertyPal market intelligence gathering...")
    properties = scraper.scrape_all_areas(areas)
    
    if not properties:
        logger.error("No properties found. PropertyPal may have changed their structure.")
        return
        
    # Save results
    timestamp = datetime.now().strftime('%Y-%m-%d')
    csv_filename = output_dir / f'derry-listings-{timestamp}.csv'
    json_filename = output_dir / f'derry-listings-{timestamp}.json'
    report_filename = output_dir / f'market-report-{timestamp}.md'
    
    scraper.save_to_csv(properties, csv_filename)
    scraper.save_to_json(properties, json_filename) 
    scraper.generate_market_report(properties, report_filename)
    
    logger.info(f"""
✅ Market intelligence gathering completed!

📊 Results:
- Properties found: {len(properties)}
- Areas searched: {len(areas) if areas else len(scraper.search_areas)}
- Data saved to: {csv_filename}
- Report generated: {report_filename}

🎯 Next steps for James Gorman Property:
1. Review the market report for competitive insights
2. Identify opportunity targets from smaller agents  
3. Monitor price trends by area and property type
4. Schedule weekly runs to track market changes
""")

if __name__ == "__main__":
    main()