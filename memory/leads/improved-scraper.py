#!/usr/bin/env python3
"""
Improved Local Lead Scraper for NI Business Prospects
Fixed scoring and streamlined for faster execution
"""

import os
import json
import time
import requests
from dataclasses import dataclass, asdict
from typing import List, Optional
import re

@dataclass
class Lead:
    business_name: str
    sector: str
    location: str
    address: str
    phone: Optional[str]
    website: Optional[str]
    google_rating: Optional[float]
    review_count: Optional[int]
    web_score: int
    gbp_score: int
    total_score: float
    place_id: str
    notes: str = ""

class ImprovedScraper:
    def __init__(self):
        self.api_key = os.getenv('GOOGLE_MAPS_API_KEY')
        
        # Target cities with scoring (focused on key NI cities)
        self.cities = {
            'Derry': 10, 'Belfast': 8, 'Newry': 6, 'Lisburn': 6,
            'Bangor': 5, 'Omagh': 5, 'Enniskillen': 5, 'Ballymena': 5
        }
        
        # Target sectors (prioritized)
        self.sectors = {
            'solicitor': 10, 'accountant': 9, 'dentist': 8,
            'restaurant': 7, 'builder': 6, 'estate agent': 5,
            'beauty salon': 8, 'physiotherapy': 7
        }
        
        self.leads = []

    def search_and_score(self, sector: str, city: str) -> List[Lead]:
        """Search and score businesses for a sector in a city"""
        query = f"{sector} {city} Northern Ireland"
        url = "https://maps.googleapis.com/maps/api/place/textsearch/json"
        
        params = {
            'query': query,
            'key': self.api_key,
            'region': 'uk'
        }
        
        try:
            print(f"  Searching: {query}")
            response = requests.get(url, params=params, timeout=10)
            response.raise_for_status()
            
            data = response.json()
            results = data.get('results', [])[:10]  # Limit to top 10
            
            sector_leads = []
            
            for place in results:
                lead = self.process_place(place, sector, city)
                if lead and lead.total_score >= 4.0:  # Only keep promising leads
                    sector_leads.append(lead)
                    print(f"    Added: {lead.business_name} (Score: {lead.total_score})")
                
                time.sleep(0.8)  # Rate limiting
            
            return sector_leads
            
        except Exception as e:
            print(f"    Error searching {query}: {e}")
            return []

    def process_place(self, place: dict, sector: str, city: str) -> Optional[Lead]:
        """Process a single place from search results"""
        place_id = place.get('place_id')
        if not place_id:
            return None
        
        # Get detailed information
        details = self.get_place_details(place_id)
        if not details:
            return None
        
        name = details.get('name', 'Unknown')
        address = details.get('formatted_address', '')
        
        # Filter out non-NI results
        if not self.is_ni_business(address):
            return None
        
        phone = details.get('formatted_phone_number')
        website = details.get('website')
        rating = details.get('rating')
        review_count = details.get('user_ratings_total', 0)
        
        # Score the lead
        web_score = self.score_website(website)
        gbp_score = self.score_gbp(rating, review_count)
        
        # Calculate total score
        total_score = self.calculate_total_score(web_score, gbp_score, sector, city)
        
        return Lead(
            business_name=name,
            sector=sector,
            location=city,
            address=address,
            phone=phone,
            website=website,
            google_rating=rating,
            review_count=review_count,
            web_score=web_score,
            gbp_score=gbp_score,
            total_score=total_score,
            place_id=place_id,
            notes=self.get_web_notes(website, web_score)
        )

    def get_place_details(self, place_id: str) -> dict:
        """Get detailed place information"""
        url = "https://maps.googleapis.com/maps/api/place/details/json"
        
        params = {
            'place_id': place_id,
            'fields': 'name,formatted_phone_number,website,rating,user_ratings_total,formatted_address',
            'key': self.api_key
        }
        
        try:
            response = requests.get(url, params=params, timeout=10)
            response.raise_for_status()
            time.sleep(0.5)
            return response.json().get('result', {})
        except Exception:
            return {}

    def score_website(self, website: str) -> int:
        """Score website quality (1-10, lower = better opportunity)"""
        if not website:
            return 1  # No website = biggest opportunity
        
        try:
            # Basic check if website loads
            if not website.startswith(('http://', 'https://')):
                website = 'https://' + website
            
            response = requests.head(website, timeout=5, allow_redirects=True)
            
            if response.status_code >= 400:
                return 2  # Broken website
            
            # Basic scoring based on URL and HTTPS
            score = 3  # Basic working website
            
            if website.startswith('https://'):
                score += 1  # HTTPS bonus
            
            # Penalize obviously old/basic sites
            if any(indicator in website.lower() for indicator in ['wordpress.com', 'wix.com', 'weebly.com']):
                score += 2  # Hosted platforms usually basic
            
            return min(score, 8)  # Cap at 8 to leave room for manual adjustment
            
        except:
            return 3  # Assume basic website if check fails

    def score_gbp(self, rating: Optional[float], review_count: Optional[int]) -> int:
        """Score Google Business Profile presence (1-10, higher = more opportunity)"""
        if not rating or not review_count:
            return 10  # No GBP = huge opportunity
        
        if review_count < 5:
            return 8  # Very few reviews = opportunity
        elif review_count < 20:
            return 5  # Some reviews = moderate opportunity
        else:
            return 2  # Well-established = low opportunity

    def calculate_total_score(self, web_score: int, gbp_score: int, sector: str, city: str) -> float:
        """Calculate weighted total score"""
        # Invert web score (lower web quality = higher opportunity)
        web_opportunity = 11 - web_score
        
        # Weight scores
        sector_score = self.sectors.get(sector, 5)
        location_score = self.cities.get(city, 5)
        
        # Weighted calculation
        total = (
            web_opportunity * 0.4 +  # 40% weight on web opportunity
            gbp_score * 0.3 +        # 30% weight on GBP opportunity  
            sector_score * 0.2 +     # 20% weight on sector priority
            location_score * 0.1     # 10% weight on location priority
        )
        
        return round(total, 1)

    def get_web_notes(self, website: str, web_score: int) -> str:
        """Generate notes about website quality"""
        if not website:
            return "No website"
        elif web_score <= 2:
            return "Broken/unresponsive website"
        elif web_score <= 4:
            return "Basic website, poor quality"
        elif web_score <= 6:
            return "Average website, room for improvement"
        else:
            return "Decent website"

    def is_ni_business(self, address: str) -> bool:
        """Check if business is in Northern Ireland"""
        ni_indicators = [
            'northern ireland', ' ni ', 'bt1', 'bt2', 'bt3', 'bt4', 'bt5',
            'londonderry', 'derry', 'belfast', 'newry', 'lisburn',
            'bangor', 'omagh', 'enniskillen', 'ballymena'
        ]
        
        address_lower = address.lower()
        return any(indicator in address_lower for indicator in ni_indicators)

    def run_scan(self):
        """Run the lead scanning process"""
        print("Starting NI Local Business Lead Scan")
        print(f"Cities: {list(self.cities.keys())}")
        print(f"Sectors: {list(self.sectors.keys())}")
        
        all_leads = []
        total_combos = len(self.cities) * len(self.sectors)
        current = 0
        
        for city in self.cities:
            for sector in self.sectors:
                current += 1
                print(f"\n[{current}/{total_combos}] {sector.title()} in {city}")
                
                sector_leads = self.search_and_score(sector, city)
                all_leads.extend(sector_leads)
                
                time.sleep(1)  # Pause between searches
        
        # Sort by score
        all_leads.sort(key=lambda x: x.total_score, reverse=True)
        
        hot_leads = [lead for lead in all_leads if lead.total_score >= 7.0]
        warm_leads = [lead for lead in all_leads if 4.0 <= lead.total_score < 7.0]
        
        print(f"\n=== SCAN COMPLETE ===")
        print(f"Total qualified leads: {len(all_leads)}")
        print(f"Hot leads (7+): {len(hot_leads)}")
        print(f"Warm leads (4-7): {len(warm_leads)}")
        
        return hot_leads, warm_leads, all_leads

    def save_results(self, hot_leads: List[Lead], warm_leads: List[Lead], all_leads: List[Lead]):
        """Save results to files"""
        date_str = "2026-03-17"
        
        # Save raw JSON
        raw_data = {
            'scan_date': date_str,
            'total_leads': len(all_leads),
            'hot_leads': len(hot_leads),
            'warm_leads': len(warm_leads),
            'leads': [asdict(lead) for lead in all_leads]
        }
        
        with open(f'memory/leads/raw/local-{date_str}.json', 'w') as f:
            json.dump(raw_data, f, indent=2)
        
        # Create markdown report
        markdown = f"""# Local Business Leads — {date_str}

**Scan:** {len(self.sectors)} sectors × {len(self.cities)} NI cities
**Total found:** {len(all_leads)} | **Hot:** {len(hot_leads)} | **Warm:** {len(warm_leads)}

## Hot Leads (Score 7+)

| Business | Sector | Location | Website | Web Score | Reviews | Lead Score | Phone |
|----------|--------|----------|---------|-----------|---------|------------|-------|
"""
        
        for lead in hot_leads:
            website_display = (lead.website[:40] + "...") if lead.website and len(lead.website) > 40 else (lead.website or "None")
            phone_display = lead.phone or "N/A"
            
            markdown += f"| {lead.business_name} | {lead.sector} | {lead.location} | {website_display} | {lead.web_score}/10 | {lead.review_count} | **{lead.total_score}** | {phone_display} |\n"
        
        markdown += """
## Warm Leads (Score 4-7)

| Business | Sector | Location | Website | Web Score | Reviews | Lead Score | Phone |
|----------|--------|----------|---------|-----------|---------|------------|-------|
"""
        
        for lead in warm_leads:
            website_display = (lead.website[:40] + "...") if lead.website and len(lead.website) > 40 else (lead.website or "None")
            phone_display = lead.phone or "N/A"
            
            markdown += f"| {lead.business_name} | {lead.sector} | {lead.location} | {website_display} | {lead.web_score}/10 | {lead.review_count} | {lead.total_score} | {phone_display} |\n"
        
        # Add analysis
        markdown += """
## Analysis

### Top Opportunities by Score:
"""
        
        for i, lead in enumerate(hot_leads[:10], 1):
            markdown += f"{i}. **{lead.business_name}** ({lead.sector}, {lead.location}) - Score: {lead.total_score}\n"
            markdown += f"   - {lead.notes} | {lead.review_count} reviews\n"
        
        markdown += """
### Next Actions:
1. **Immediate**: Research decision makers for top 10 hot leads
2. **Week 1**: Create website audits for highest scoring prospects  
3. **Week 2**: Develop sector-specific pitch materials
4. **Ongoing**: Monitor for website changes/business updates
"""
        
        # Save markdown
        with open(f'memory/leads/local-{date_str}.md', 'w') as f:
            f.write(markdown)
        
        print(f"\nResults saved:")
        print(f"- memory/leads/local-{date_str}.md")
        print(f"- memory/leads/raw/local-{date_str}.json")

def main():
    scraper = ImprovedScraper()
    hot_leads, warm_leads, all_leads = scraper.run_scan()
    scraper.save_results(hot_leads, warm_leads, all_leads)
    
    # Show top results
    if hot_leads:
        print(f"\nTop 5 Hot Leads:")
        for i, lead in enumerate(hot_leads[:5], 1):
            print(f"{i}. {lead.business_name} ({lead.location}) - Score: {lead.total_score}")
            print(f"   {lead.notes} | {lead.review_count} reviews")

if __name__ == "__main__":
    main()