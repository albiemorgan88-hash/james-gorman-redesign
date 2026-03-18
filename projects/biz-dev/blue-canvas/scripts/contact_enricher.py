#!/usr/bin/env python3
"""
Blue Canvas Contact Enrichment Engine
Enriches leads with decision maker info, pain points, and company intel
"""

import os
import json
import requests
import time
from datetime import datetime
from typing import List, Dict, Optional
import re
import csv
from dataclasses import asdict
from lead_generator import Lead

class ContactEnricher:
    def __init__(self):
        self.apollo_api_key = os.getenv('APOLLO_API_KEY')
        self.data_dir = "/Users/philsagent/.openclaw/workspace/projects/biz-dev/blue-canvas/data"
        
    def enrich_with_apollo(self, lead: Lead) -> Lead:
        """Enrich lead with Apollo.io person search"""
        if not self.apollo_api_key or not lead.company_name:
            return lead
            
        url = "https://api.apollo.io/v1/mixed_people/search"
        
        headers = {
            "Cache-Control": "no-cache",
            "Content-Type": "application/json",
            "X-Api-Key": self.apollo_api_key
        }
        
        payload = {
            "page": 1,
            "per_page": 5,
            "organization_names": [lead.company_name],
            "person_seniorities": ["founder", "owner", "c_suite", "director", "manager"]
        }
        
        try:
            response = requests.post(url, json=payload, headers=headers)
            response.raise_for_status()
            data = response.json()
            
            if data.get('people'):
                person = data['people'][0]  # Take first (highest seniority)
                
                if not lead.decision_maker:
                    lead.decision_maker = f"{person.get('first_name', '')} {person.get('last_name', '')}"
                
                if not lead.email:
                    lead.email = person.get('email', '')
                
                if not lead.decision_maker_linkedin:
                    lead.decision_maker_linkedin = person.get('linkedin_url', '')
                    
                # Update company info if missing
                if person.get('organization'):
                    org = person['organization']
                    if not lead.website:
                        lead.website = org.get('website_url', '')
                    if not lead.phone:
                        lead.phone = org.get('phone', '')
                    if not lead.employee_count:
                        lead.employee_count = str(org.get('estimated_num_employees', ''))
                        
        except Exception as e:
            print(f"⚠️  Apollo enrichment failed for {lead.company_name}: {e}")
            
        return lead
    
    def analyze_website(self, lead: Lead) -> Lead:
        """Analyze website to identify pain points and digital gaps"""
        if not lead.website:
            lead.pain_points.append("No website")
            lead.digital_maturity_score += 3
            return lead
            
        try:
            # Clean URL
            url = lead.website
            if not url.startswith(('http://', 'https://')):
                url = 'https://' + url
                
            # Basic website check
            response = requests.get(url, timeout=10, headers={
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36'
            })
            
            content = response.text.lower()
            
            # Pain point analysis
            pain_points = []
            score_additions = 0
            
            # Check for mobile responsiveness indicators
            if 'viewport' not in content:
                pain_points.append("Not mobile-optimized")
                score_additions += 1
                
            # Check for modern features
            if 'online booking' not in content and 'book online' not in content:
                if lead.industry.lower() in ['beauty', 'salon', 'dental', 'restaurant']:
                    pain_points.append("No online booking system")
                    score_additions += 2
                    
            # Check for contact forms
            if '<form' not in content:
                pain_points.append("No contact forms")
                score_additions += 1
                
            # Check for SSL
            if not url.startswith('https://'):
                pain_points.append("No SSL certificate")
                score_additions += 1
                
            # Check for basic SEO
            if '<title>' not in content or len(re.findall(r'<title>(.*?)</title>', content)) == 0:
                pain_points.append("Poor SEO setup")
                score_additions += 1
                
            # Check for social media links
            social_indicators = ['facebook.com', 'instagram.com', 'twitter.com', 'linkedin.com']
            if not any(social in content for social in social_indicators):
                pain_points.append("No social media integration")
                score_additions += 1
                
            # Check for Google Analytics/tracking
            if 'google-analytics' not in content and 'gtag' not in content and 'ga(' not in content:
                pain_points.append("No website analytics")
                score_additions += 1
                
            lead.pain_points.extend(pain_points)
            lead.digital_maturity_score = min(lead.digital_maturity_score + score_additions, 10)
            
        except Exception as e:
            print(f"⚠️  Website analysis failed for {lead.website}: {e}")
            lead.pain_points.append("Website inaccessible or problematic")
            lead.digital_maturity_score += 1
            
        return lead
    
    def estimate_revenue(self, lead: Lead) -> Lead:
        """Estimate company revenue based on industry and employee count"""
        if not lead.employee_count:
            return lead
            
        try:
            # Parse employee count
            emp_str = str(lead.employee_count).replace(',', '')
            if '-' in emp_str:
                emp_count = int(emp_str.split('-')[0])
            else:
                emp_count = int(emp_str)
                
            # Industry-based revenue multipliers (revenue per employee)
            revenue_multipliers = {
                'accounting': 150000,
                'legal': 200000,
                'real estate': 100000,
                'beauty': 50000,
                'restaurant': 75000,
                'dental': 300000,
                'veterinary': 250000,
                'construction': 120000,
                'retail': 80000
            }
            
            # Find matching industry
            multiplier = 100000  # Default
            for industry, mult in revenue_multipliers.items():
                if industry in lead.industry.lower():
                    multiplier = mult
                    break
                    
            estimated_revenue = emp_count * multiplier
            
            if estimated_revenue < 100000:
                lead.revenue_estimate = "< £100k"
            elif estimated_revenue < 500000:
                lead.revenue_estimate = "£100k - £500k"
            elif estimated_revenue < 1000000:
                lead.revenue_estimate = "£500k - £1M"
            elif estimated_revenue < 5000000:
                lead.revenue_estimate = "£1M - £5M"
            else:
                lead.revenue_estimate = "> £5M"
                
        except Exception as e:
            print(f"⚠️  Revenue estimation failed for {lead.company_name}: {e}")
            
        return lead
    
    def enrich_lead(self, lead: Lead) -> Lead:
        """Fully enrich a single lead"""
        print(f"🔍 Enriching {lead.company_name}...")
        
        # Apollo enrichment
        lead = self.enrich_with_apollo(lead)
        time.sleep(0.5)  # Rate limiting
        
        # Website analysis
        lead = self.analyze_website(lead)
        
        # Revenue estimation
        lead = self.estimate_revenue(lead)
        
        return lead
    
    def enrich_leads_batch(self, leads: List[Lead]) -> List[Lead]:
        """Enrich a batch of leads"""
        enriched_leads = []
        
        for i, lead in enumerate(leads, 1):
            print(f"📈 Enriching lead {i}/{len(leads)}: {lead.company_name}")
            
            try:
                enriched_lead = self.enrich_lead(lead)
                enriched_leads.append(enriched_lead)
                
                # Progress update
                if i % 10 == 0:
                    print(f"✅ Completed {i}/{len(leads)} leads")
                    
            except Exception as e:
                print(f"❌ Failed to enrich {lead.company_name}: {e}")
                enriched_leads.append(lead)  # Add original lead
                
            time.sleep(1)  # Rate limiting between leads
            
        return enriched_leads

def main():
    # Load latest leads file
    enricher = ContactEnricher()
    data_dir = enricher.data_dir
    
    # Find most recent leads file
    import glob
    lead_files = glob.glob(f"{data_dir}/leads_*.json")
    if not lead_files:
        print("❌ No leads files found. Run lead_generator.py first.")
        return
        
    latest_file = max(lead_files, key=os.path.getctime)
    print(f"📂 Loading leads from {latest_file}")
    
    # Load leads
    with open(latest_file, 'r') as f:
        lead_data = json.load(f)
    
    leads = []
    for data in lead_data:
        lead = Lead(**data)
        leads.append(lead)
    
    print(f"🔄 Enriching {len(leads)} leads...")
    
    # Enrich leads
    enriched_leads = enricher.enrich_leads_batch(leads)
    
    # Save enriched leads
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    
    csv_path = f"{data_dir}/enriched_leads_{timestamp}.csv"
    json_path = f"{data_dir}/enriched_leads_{timestamp}.json"
    
    # Save as CSV
    with open(csv_path, 'w', newline='', encoding='utf-8') as csvfile:
        if enriched_leads:
            writer = csv.DictWriter(csvfile, fieldnames=asdict(enriched_leads[0]).keys())
            writer.writeheader()
            for lead in enriched_leads:
                row = asdict(lead)
                row['pain_points'] = '; '.join(row['pain_points'])
                writer.writerow(row)
    
    # Save as JSON
    with open(json_path, 'w', encoding='utf-8') as jsonfile:
        json.dump([asdict(lead) for lead in enriched_leads], jsonfile, indent=2)
    
    print(f"💾 Saved enriched leads to {csv_path}")
    
    # Summary
    high_value = [l for l in enriched_leads if l.digital_maturity_score >= 8]
    with_email = [l for l in enriched_leads if l.email]
    
    print(f"\n📊 Enrichment Summary:")
    print(f"Total leads processed: {len(enriched_leads)}")
    print(f"High-value prospects (8+ score): {len(high_value)}")
    print(f"Leads with contact email: {len(with_email)}")
    print(f"Contact rate: {len(with_email)/len(enriched_leads)*100:.1f}%")

if __name__ == "__main__":
    main()