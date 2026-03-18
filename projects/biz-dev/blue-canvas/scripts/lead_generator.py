#!/usr/bin/env python3
"""
Blue Canvas Lead Generation Engine
Combines Apollo.io API with local scraping for NI/Ireland SMEs
"""

import os
import json
import requests
import time
from datetime import datetime
from dataclasses import dataclass, asdict
from typing import List, Dict, Optional
import csv

@dataclass
class Lead:
    company_name: str
    industry: str
    location: str
    website: str = ""
    email: str = ""
    phone: str = ""
    decision_maker: str = ""
    decision_maker_linkedin: str = ""
    digital_maturity_score: int = 0
    pain_points: List[str] = None
    employee_count: str = ""
    revenue_estimate: str = ""
    source: str = ""  # apollo, google_maps, companies_house
    created_at: str = ""
    
    def __post_init__(self):
        if self.pain_points is None:
            self.pain_points = []
        if not self.created_at:
            self.created_at = datetime.now().isoformat()

class LeadGenerator:
    def __init__(self):
        self.apollo_api_key = os.getenv('APOLLO_API_KEY')
        self.data_dir = "/Users/philsagent/.openclaw/workspace/projects/biz-dev/blue-canvas/data"
        os.makedirs(self.data_dir, exist_ok=True)
        
    def apollo_search(self, industry: str, location: str, limit: int = 25) -> List[Lead]:
        """Search Apollo.io for companies in specific industry/location"""
        if not self.apollo_api_key:
            print("⚠️  Apollo API key not set. Set APOLLO_API_KEY env var.")
            return []
            
        url = "https://api.apollo.io/v1/mixed_companies/search"
        
        headers = {
            "Cache-Control": "no-cache",
            "Content-Type": "application/json",
            "X-Api-Key": self.apollo_api_key
        }
        
        payload = {
            "page": 1,
            "per_page": limit,
            "organization_locations": [location],
            "organization_industry_keywords": [industry],
            "organization_num_employees_ranges": ["1,10", "11,20", "21,50", "51,100"],
            "person_seniorities": ["founder", "owner", "c_suite", "director", "manager"]
        }
        
        try:
            response = requests.post(url, json=payload, headers=headers)
            response.raise_for_status()
            data = response.json()
            
            leads = []
            for org in data.get('organizations', []):
                lead = Lead(
                    company_name=org.get('name', ''),
                    industry=industry,
                    location=location,
                    website=org.get('website_url', ''),
                    phone=org.get('phone', ''),
                    employee_count=org.get('estimated_num_employees', ''),
                    source="apollo"
                )
                
                # Get decision maker from people data
                if 'people' in org and org['people']:
                    person = org['people'][0]  # First person
                    lead.decision_maker = f"{person.get('first_name', '')} {person.get('last_name', '')}"
                    lead.email = person.get('email', '')
                    lead.decision_maker_linkedin = person.get('linkedin_url', '')
                
                leads.append(lead)
                
            print(f"✅ Apollo: Found {len(leads)} leads for {industry} in {location}")
            return leads
            
        except Exception as e:
            print(f"❌ Apollo search failed: {e}")
            return []
    
    def score_digital_maturity(self, lead: Lead) -> int:
        """Score lead's digital maturity gap (1-10, 10 = biggest opportunity)"""
        score = 0
        pain_points = []
        
        if not lead.website or lead.website == "":
            score += 4
            pain_points.append("No website")
        
        # TODO: Add website analysis (speed, mobile, SEO basics)
        # TODO: Add Google Ads presence check
        # TODO: Add Google Reviews count check
        # TODO: Add social media presence check
        
        # Placeholder scoring logic
        if lead.employee_count and int(lead.employee_count.split(',')[0] if ',' in str(lead.employee_count) else str(lead.employee_count).split('-')[0] if '-' in str(lead.employee_count) else lead.employee_count or 0) < 20:
            score += 2  # Small businesses often need more help
            
        # Industry-specific scoring
        high_digital_need_industries = ['beauty', 'restaurant', 'solicitor', 'accountant', 'estate']
        if any(industry in lead.industry.lower() for industry in high_digital_need_industries):
            score += 2
            pain_points.append("High digital transformation need industry")
        
        lead.digital_maturity_score = min(score, 10)
        lead.pain_points = pain_points
        return lead.digital_maturity_score
    
    def generate_weekly_leads(self, target_count: int = 50) -> List[Lead]:
        """Generate weekly batch of leads across key NI/Ireland industries"""
        
        # Target industries and locations
        industries = [
            "accounting", "legal services", "real estate", 
            "beauty salon", "restaurant", "dental", 
            "veterinary", "construction", "retail"
        ]
        
        locations = [
            "Derry, Northern Ireland", "Belfast, Northern Ireland",
            "Omagh, Northern Ireland", "Enniskillen, Northern Ireland",
            "Dublin, Ireland", "Cork, Ireland", "Galway, Ireland"
        ]
        
        all_leads = []
        leads_per_combo = target_count // (len(industries) * len(locations))
        if leads_per_combo < 1:
            leads_per_combo = 1
            
        for industry in industries:
            for location in locations:
                leads = self.apollo_search(industry, location, leads_per_combo)
                
                # Score each lead
                for lead in leads:
                    self.score_digital_maturity(lead)
                
                all_leads.extend(leads)
                time.sleep(1)  # Rate limiting
                
                if len(all_leads) >= target_count:
                    break
            if len(all_leads) >= target_count:
                break
        
        # Sort by digital maturity score (highest first)
        all_leads.sort(key=lambda x: x.digital_maturity_score, reverse=True)
        
        return all_leads[:target_count]
    
    def save_leads(self, leads: List[Lead], filename: str = None):
        """Save leads to CSV and JSON"""
        if not filename:
            timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
            filename = f"leads_{timestamp}"
        
        csv_path = f"{self.data_dir}/{filename}.csv"
        json_path = f"{self.data_dir}/{filename}.json"
        
        # Save as CSV
        with open(csv_path, 'w', newline='', encoding='utf-8') as csvfile:
            if leads:
                writer = csv.DictWriter(csvfile, fieldnames=asdict(leads[0]).keys())
                writer.writeheader()
                for lead in leads:
                    row = asdict(lead)
                    row['pain_points'] = '; '.join(row['pain_points'])
                    writer.writerow(row)
        
        # Save as JSON
        with open(json_path, 'w', encoding='utf-8') as jsonfile:
            json.dump([asdict(lead) for lead in leads], jsonfile, indent=2)
        
        print(f"💾 Saved {len(leads)} leads to {csv_path} and {json_path}")
        return csv_path, json_path

def main():
    generator = LeadGenerator()
    
    print("🚀 Generating weekly leads for Blue Canvas...")
    leads = generator.generate_weekly_leads(50)
    
    print(f"\n📊 Lead Summary:")
    print(f"Total leads: {len(leads)}")
    print(f"Average digital maturity score: {sum(l.digital_maturity_score for l in leads) / len(leads) if leads else 0:.1f}")
    print(f"High-value leads (score 8+): {len([l for l in leads if l.digital_maturity_score >= 8])}")
    
    # Save leads
    generator.save_leads(leads)
    
    # Show top 10 leads
    print("\n🎯 Top 10 prospects:")
    for i, lead in enumerate(leads[:10], 1):
        print(f"{i}. {lead.company_name} ({lead.industry}) - Score: {lead.digital_maturity_score}")
        print(f"   📍 {lead.location} | 🌐 {lead.website or 'No website'}")
        if lead.pain_points:
            print(f"   ⚠️  {', '.join(lead.pain_points)}")
        print()

if __name__ == "__main__":
    main()