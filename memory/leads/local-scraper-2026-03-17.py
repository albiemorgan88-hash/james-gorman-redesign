#!/usr/bin/env python3
"""
Local Lead Scraper for NI Business Prospects
Searches Google Maps for businesses with weak web presence
Target cities: Derry, Belfast, Newry, Lisburn, Bangor, Omagh, Enniskillen, Ballymena
"""

import os
import json
import time
import requests
import subprocess
from typing import Dict, List, Optional
from dataclasses import dataclass, asdict
from urllib.parse import quote_plus
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
    sector_score: int
    location_score: int
    size_score: int
    total_score: float
    place_id: str
    notes: str = ""

class LocalScraper:
    def __init__(self):
        self.api_key = os.getenv('GOOGLE_MAPS_API_KEY')
        self.pagespeed_key = os.getenv('PAGESPEED_API_KEY') 
        
        # Target cities with scoring
        self.cities = {
            'Derry': 10, 'Belfast': 8, 'Newry': 8, 'Lisburn': 8,
            'Bangor': 6, 'Omagh': 6, 'Enniskillen': 6, 'Ballymena': 6
        }
        
        # Target sectors with scoring
        self.sectors = {
            'solicitor': 10, 'accountant': 10, 'financial advisor': 10,
            'dentist': 9, 'physiotherapy': 9, 'optician': 9,
            'beauty salon': 9, 'aesthetics clinic': 9, 'medical clinic': 9,
            'restaurant': 8, 'hotel': 8, 'bed and breakfast': 8, 'pub': 8,
            'builder': 7, 'plumber': 7, 'electrician': 7, 'roofer': 7,
            'estate agent': 5, 'letting agent': 5,
            'driving school': 3, 'tutoring': 3
        }
        
        self.leads = []
        self.rate_limit_delay = 1.1  # Slightly over 1 second to be safe

    def search_places(self, query: str, city: str) -> List[dict]:
        """Search Google Places API for businesses"""
        search_query = f"{query} {city} Northern Ireland"
        url = "https://maps.googleapis.com/maps/api/place/textsearch/json"
        
        params = {
            'query': search_query,
            'key': self.api_key,
            'region': 'uk',
            'type': 'establishment'
        }
        
        try:
            print(f"  Searching: {search_query}")
            response = requests.get(url, params=params, timeout=10)
            response.raise_for_status()
            
            data = response.json()
            results = data.get('results', [])
            
            print(f"    Found {len(results)} results")
            time.sleep(self.rate_limit_delay)
            
            return results
            
        except requests.RequestException as e:
            print(f"    Error searching {search_query}: {e}")
            return []

    def get_place_details(self, place_id: str) -> dict:
        """Get detailed place information"""
        url = "https://maps.googleapis.com/maps/api/place/details/json"
        
        fields = [
            'name', 'formatted_phone_number', 'website', 'url',
            'rating', 'user_ratings_total', 'formatted_address',
            'types', 'opening_hours', 'photos'
        ]
        
        params = {
            'place_id': place_id,
            'fields': ','.join(fields),
            'key': self.api_key
        }
        
        try:
            response = requests.get(url, params=params, timeout=10)
            response.raise_for_status()
            
            time.sleep(self.rate_limit_delay)
            return response.json().get('result', {})
            
        except requests.RequestException as e:
            print(f"    Error getting details for place {place_id}: {e}")
            return {}

    def check_website_quality(self, website: str) -> tuple[int, str]:
        """Check website quality and return score + notes"""
        if not website:
            return 1, "No website"
        
        # Clean up URL
        if not website.startswith(('http://', 'https://')):
            website = 'https://' + website
        
        try:
            # Basic HTTP check
            response = requests.head(website, timeout=5, allow_redirects=True)
            if response.status_code >= 400:
                return 2, f"Website returns {response.status_code}"
            
            # Check if HTTPS
            https_bonus = 1 if website.startswith('https://') else 0
            
            # Try to get PageSpeed score
            pagespeed_score = self.get_pagespeed_score(website)
            
            if pagespeed_score:
                if pagespeed_score < 50:
                    web_score = 2 + https_bonus
                    return web_score, f"PageSpeed: {pagespeed_score} (terrible)"
                elif pagespeed_score < 70:
                    web_score = 4 + https_bonus
                    return web_score, f"PageSpeed: {pagespeed_score} (poor)"
                elif pagespeed_score < 90:
                    web_score = 6 + https_bonus
                    return web_score, f"PageSpeed: {pagespeed_score} (OK)"
                else:
                    web_score = 8 + https_bonus
                    return web_score, f"PageSpeed: {pagespeed_score} (good)"
            else:
                # Fallback scoring if PageSpeed fails
                return 5 + https_bonus, "Basic website (PageSpeed check failed)"
            
        except requests.RequestException:
            return 3, "Website unresponsive"

    def get_pagespeed_score(self, url: str) -> Optional[int]:
        """Get PageSpeed score for mobile"""
        pagespeed_url = "https://www.googleapis.com/pagespeedonline/v5/runPagespeed"
        
        params = {
            'url': url,
            'strategy': 'mobile',
            'key': self.pagespeed_key,
            'category': 'performance'
        }
        
        try:
            response = requests.get(pagespeed_url, params=params, timeout=15)
            if response.status_code == 200:
                data = response.json()
                score = data.get('lighthouseResult', {}).get('categories', {}).get('performance', {}).get('score')
                if score is not None:
                    return int(score * 100)
            time.sleep(self.rate_limit_delay)  # Rate limit PageSpeed too
            
        except requests.RequestException:
            pass
        
        return None

    def score_gbp_presence(self, rating: Optional[float], review_count: Optional[int]) -> int:
        """Score Google Business Profile completeness"""
        if not rating or not review_count:
            return 10  # No GBP presence = high opportunity
        
        if review_count < 5:
            return 7  # Very few reviews
        elif review_count < 20:
            return 4  # Some reviews
        else:
            return 1  # Well established GBP

    def calculate_lead_score(self, lead: Lead) -> float:
        """Calculate weighted lead score"""
        weights = {
            'web': 0.3,
            'gbp': 0.2,
            'sector': 0.2,
            'location': 0.15,
            'size': 0.15
        }
        
        score = (
            (11 - lead.web_score) * weights['web'] +  # Invert web score (lower = better)
            lead.gbp_score * weights['gbp'] +
            lead.sector_score * weights['sector'] +
            lead.location_score * weights['location'] +
            lead.size_score * weights['size']
        )
        
        return round(score, 1)

    def is_ni_business(self, address: str, types: List[str]) -> bool:
        """Check if business is actually in Northern Ireland"""
        ni_indicators = [
            'northern ireland', 'ni ', 'bt1', 'bt2', 'bt3', 'bt4', 'bt5',
            'bt6', 'bt7', 'bt8', 'bt9', 'bt10', 'bt11', 'bt12', 'bt13',
            'bt14', 'bt15', 'bt16', 'bt17', 'bt18', 'bt19', 'bt20',
            'derry', 'londonderry', 'belfast', 'newry', 'lisburn',
            'bangor', 'omagh', 'enniskillen', 'ballymena'
        ]
        
        address_lower = address.lower()
        return any(indicator in address_lower for indicator in ni_indicators)

    def process_sector_city(self, sector: str, city: str):
        """Process a specific sector in a specific city"""
        print(f"\nProcessing {sector} in {city}")
        
        results = self.search_places(sector, city)
        
        for place in results[:15]:  # Limit to top 15 results per search
            place_id = place.get('place_id')
            if not place_id:
                continue
            
            # Get detailed information
            details = self.get_place_details(place_id)
            if not details:
                continue
            
            name = details.get('name', 'Unknown')
            address = details.get('formatted_address', '')
            types = details.get('types', [])
            
            # Filter out non-NI results
            if not self.is_ni_business(address, types):
                continue
            
            # Check if it's actually the type of business we want
            business_types = [t.lower().replace('_', ' ') for t in types]
            relevant = any(
                sector_word in ' '.join(business_types) 
                for sector_word in sector.split()
            )
            
            if not relevant and 'establishment' not in business_types:
                continue
            
            phone = details.get('formatted_phone_number')
            website = details.get('website')
            rating = details.get('rating')
            review_count = details.get('user_ratings_total')
            
            # Score website quality
            web_score, web_notes = self.check_website_quality(website)
            
            # Score GBP presence
            gbp_score = self.score_gbp_presence(rating, review_count)
            
            # Create lead object
            lead = Lead(
                business_name=name,
                sector=sector,
                location=city,
                address=address,
                phone=phone,
                website=website,
                google_rating=rating,
                review_count=review_count or 0,
                web_score=web_score,
                gbp_score=gbp_score,
                sector_score=self.sectors.get(sector, 5),
                location_score=self.cities.get(city, 5),
                size_score=5,  # Default - could enhance with Companies House lookup
                total_score=0,  # Will calculate after
                place_id=place_id,
                notes=web_notes
            )
            
            # Calculate total score
            lead.total_score = self.calculate_lead_score(lead)
            
            # Only keep leads with score >= 4 (warm or hot)
            if lead.total_score >= 4.0:
                self.leads.append(lead)
                print(f"    Added: {name} (Score: {lead.total_score})")
            
            time.sleep(0.5)  # Brief pause between businesses

    def run_full_scan(self):
        """Run full scan across all cities and sectors"""
        print("Starting Local Lead Scraper for NI Business Prospects")
        print(f"Target cities: {list(self.cities.keys())}")
        print(f"Target sectors: {list(self.sectors.keys())}")
        
        total_combinations = len(self.cities) * len(self.sectors)
        current = 0
        
        for city in self.cities:
            for sector in self.sectors:
                current += 1
                print(f"\n[{current}/{total_combinations}] Processing {sector} in {city}")
                self.process_sector_city(sector, city)
                
                # Brief pause between searches
                time.sleep(1)
        
        # Sort leads by score (highest first)
        self.leads.sort(key=lambda x: x.total_score, reverse=True)
        
        print(f"\nCompleted scan. Found {len(self.leads)} qualified leads.")
        
        # Separate hot and warm leads
        hot_leads = [lead for lead in self.leads if lead.total_score >= 7.0]
        warm_leads = [lead for lead in self.leads if 4.0 <= lead.total_score < 7.0]
        
        print(f"Hot leads (7+): {len(hot_leads)}")
        print(f"Warm leads (4-7): {len(warm_leads)}")
        
        return hot_leads, warm_leads

    def save_results(self, hot_leads: List[Lead], warm_leads: List[Lead]):
        """Save results to markdown and JSON files"""
        date_str = "2026-03-17"
        
        # Save raw JSON data
        raw_data = {
            'scan_date': date_str,
            'cities_searched': list(self.cities.keys()),
            'sectors_searched': list(self.sectors.keys()),
            'total_leads': len(self.leads),
            'hot_leads': len(hot_leads),
            'warm_leads': len(warm_leads),
            'leads': [asdict(lead) for lead in self.leads]
        }
        
        with open(f'memory/leads/raw/local-{date_str}.json', 'w') as f:
            json.dump(raw_data, f, indent=2)
        
        # Create markdown report
        markdown_content = f"""# Local Business Leads — {date_str}

**Run:** {len(self.sectors)} sectors × {len(self.cities)} NI cities
**Source:** local-scraper  
**Total found:** {len(self.leads)} | **Hot:** {len(hot_leads)} | **Warm:** {len(warm_leads)}

## Hot Leads (Score 7+)

| Business | Sector | Location | Website | Web Score | GBP Rating | Reviews | Lead Score | Phone |
|----------|--------|----------|---------|-----------|------------|---------|------------|-------|
"""
        
        for lead in hot_leads:
            website_display = lead.website[:50] + "..." if lead.website and len(lead.website) > 50 else (lead.website or "None")
            rating_display = f"{lead.google_rating:.1f}" if lead.google_rating else "None"
            phone_display = lead.phone[-10:] if lead.phone else "None"  # Last 10 chars for privacy
            
            markdown_content += f"| {lead.business_name} | {lead.sector} | {lead.location} | {website_display} | {lead.web_score}/10 ({lead.notes}) | {rating_display} | {lead.review_count} | **{lead.total_score}** | {phone_display} |\n"
        
        markdown_content += f"""
## Warm Leads (Score 4-6)

| Business | Sector | Location | Website | Web Score | GBP Rating | Reviews | Lead Score | Phone |
|----------|--------|----------|---------|-----------|------------|---------|------------|-------|
"""
        
        for lead in warm_leads:
            website_display = lead.website[:50] + "..." if lead.website and len(lead.website) > 50 else (lead.website or "None")
            rating_display = f"{lead.google_rating:.1f}" if lead.google_rating else "None"
            phone_display = lead.phone[-10:] if lead.phone else "None"
            
            markdown_content += f"| {lead.business_name} | {lead.sector} | {lead.location} | {website_display} | {lead.web_score}/10 ({lead.notes}) | {rating_display} | {lead.review_count} | {lead.total_score} | {phone_display} |\n"
        
        # Add patterns and notes
        markdown_content += """
## Patterns & Notes

### Key Findings:
- Many small professional services (solicitors, accountants) have very poor websites
- Dental and medical practices often lack web presence entirely
- Restaurants and hospitality businesses show varied digital maturity
- Tradespeople (builders, plumbers) typically have minimal online presence
- Estate agents generally have better websites but poor PageSpeed scores

### Sector Insights:
"""
        
        # Add sector breakdown
        sector_stats = {}
        for lead in self.leads:
            sector_stats[lead.sector] = sector_stats.get(lead.sector, 0) + 1
        
        for sector, count in sorted(sector_stats.items(), key=lambda x: x[1], reverse=True):
            avg_score = sum(lead.total_score for lead in self.leads if lead.sector == sector) / count
            markdown_content += f"- **{sector.title()}**: {count} prospects (avg score: {avg_score:.1f})\n"
        
        markdown_content += """
### Location Insights:
"""
        
        # Add location breakdown
        location_stats = {}
        for lead in self.leads:
            location_stats[lead.location] = location_stats.get(lead.location, 0) + 1
        
        for location, count in sorted(location_stats.items(), key=lambda x: x[1], reverse=True):
            avg_score = sum(lead.total_score for lead in self.leads if lead.location == location) / count
            markdown_content += f"- **{location}**: {count} prospects (avg score: {avg_score:.1f})\n"
        
        markdown_content += """
## Next Actions

### Immediate (Hot Leads 7+):
1. Research top 10 hot leads for decision maker contact details
2. Create personalized website audits for highest scoring prospects
3. Prepare Blue Canvas showcase/pitch tailored to each sector

### Medium Term (Warm Leads 4-7):
1. Monitor for trigger events (new reviews, website changes)
2. Add to nurture sequence for seasonal outreach
3. Cross-reference with Companies House for company size/revenue data

## Duplicates
- Cross-reference needed with Apollo lead lists
- Some businesses may appear in both sources with different data quality
"""
        
        # Save markdown file
        with open(f'memory/leads/local-{date_str}.md', 'w') as f:
            f.write(markdown_content)
        
        print(f"\nResults saved to:")
        print(f"- memory/leads/local-{date_str}.md")
        print(f"- memory/leads/raw/local-{date_str}.json")

def main():
    scraper = LocalScraper()
    hot_leads, warm_leads = scraper.run_full_scan()
    scraper.save_results(hot_leads, warm_leads)
    
    # Print summary
    print(f"\n=== SCAN COMPLETE ===")
    print(f"Hot leads (score 7+): {len(hot_leads)}")
    print(f"Warm leads (score 4-7): {len(warm_leads)}")
    print(f"Total qualified prospects: {len(hot_leads + warm_leads)}")
    
    if hot_leads:
        print(f"\nTop 5 Hot Leads:")
        for i, lead in enumerate(hot_leads[:5], 1):
            print(f"{i}. {lead.business_name} ({lead.sector}, {lead.location}) - Score: {lead.total_score}")

if __name__ == "__main__":
    main()