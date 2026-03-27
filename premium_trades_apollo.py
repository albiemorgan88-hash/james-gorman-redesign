#!/usr/bin/env python3
"""
Premium Trades Apollo Search
Target upmarket tradesmen in Northern Ireland with mobile numbers
"""

import requests
import json
import os
import csv
import time
from datetime import datetime
from typing import List, Dict, Any

# Check API key
APOLLO_API_KEY = os.environ.get("APOLLO_API_KEY")
if not APOLLO_API_KEY:
    print("ERROR: APOLLO_API_KEY not found in environment")
    exit(1)

BASE_URL = "https://api.apollo.io/api/v1"

def apollo_search(search_params: Dict[str, Any], max_pages: int = 10) -> List[Dict]:
    """Execute Apollo people search with pagination"""
    all_contacts = []
    
    for page in range(1, max_pages + 1):
        params = {
            "page": page,
            "per_page": 100,
            **search_params
        }
        
        headers = {
            "X-Api-Key": APOLLO_API_KEY,
            "Content-Type": "application/json"
        }
        
        print(f"  → Page {page}... ", end="", flush=True)
        
        try:
            response = requests.post(f"{BASE_URL}/mixed_people/api_search", json=params, headers=headers)
            response.raise_for_status()
            data = response.json()
            
            people = data.get("people", [])
            if not people:
                print("(no results)")
                break
                
            # Filter for mobile numbers only
            mobile_contacts = []
            for person in people:
                phone_numbers = person.get("phone_numbers", [])
                mobile_numbers = [p for p in phone_numbers if p.get("type") in ["mobile", "cell"]]
                
                if mobile_numbers:
                    person["mobile_numbers"] = mobile_numbers
                    mobile_contacts.append(person)
            
            all_contacts.extend(mobile_contacts)
            print(f"{len(mobile_contacts)} with mobiles")
            
            # Rate limiting
            time.sleep(1.2)
            
        except requests.exceptions.RequestException as e:
            print(f"API error: {e}")
            break
            
    return all_contacts

def create_search_configs() -> Dict[str, Dict]:
    """Define search configurations for each trade category"""
    
    # Base filters for all searches
    base_config = {
        "person_locations": ["Northern Ireland, United Kingdom", "Belfast, United Kingdom", "Londonderry, United Kingdom"],
        "organization_num_employees_ranges": ["2,20"],  # Established but not corporate
        "person_seniorities": ["owner", "founder", "c_suite", "director", "manager"]
    }
    
    return {
        "electrical_contractors": {
            **base_config,
            "person_titles": ["Electrical Contractor", "Master Electrician", "Electrical Engineer", "Director", "Owner"],
            "q_organization_keyword_tags": ["electrical services", "electrical contractors", "commercial electrical"],
            "q_keywords": "NICEIC OR ECA OR electrical"
        },
        
        "heating_engineers": {
            **base_config,
            "person_titles": ["Heating Engineer", "Gas Engineer", "HVAC Engineer", "Director", "Owner"],
            "q_organization_keyword_tags": ["heating services", "plumbing heating", "boiler installation"],
            "q_keywords": "Gas Safe OR heating OR boiler"
        },
        
        "premium_builders": {
            **base_config,
            "person_titles": ["Building Contractor", "Construction Manager", "Director", "Owner"],
            "q_organization_keyword_tags": ["construction services", "building contractors", "residential construction"],
            "q_keywords": "extensions OR renovations OR construction"
        },
        
        "specialist_joiners": {
            **base_config,
            "person_titles": ["Joiner", "Cabinet Maker", "Director", "Owner"],
            "q_organization_keyword_tags": ["joinery services", "fitted kitchens", "bespoke furniture"],
            "q_keywords": "bespoke OR fitted OR cabinet OR joinery"
        },
        
        "commercial_roofers": {
            **base_config,
            "person_titles": ["Roofing Contractor", "Roofer", "Director", "Owner"],
            "q_organization_keyword_tags": ["roofing services", "commercial roofing", "industrial roofing"],
            "q_keywords": "flat roofing OR commercial roofing OR industrial"
        }
    }

def score_contact_premium(contact: Dict) -> int:
    """Score contact based on premium indicators (0-10)"""
    score = 5  # Base score
    
    org = contact.get("organization", {})
    title = contact.get("title", "").lower()
    
    # Title indicators
    if any(word in title for word in ["director", "owner", "founder", "managing"]):
        score += 2
    if "master" in title or "chartered" in title:
        score += 1
        
    # Company indicators
    if org.get("website_url"):
        score += 1
    if org.get("linkedin_url"):
        score += 1
        
    # Employee count (sweet spot for premium trades)
    employees = org.get("estimated_num_employees", 0)
    if 5 <= employees <= 15:
        score += 1
        
    # Location (Belfast/Derry premium areas)
    city = contact.get("city", "").lower()
    if city in ["belfast", "derry", "londonderry"]:
        score += 1
        
    return min(score, 10)

def export_to_csv(contacts: List[Dict], filename: str):
    """Export contacts to CSV with showcase links"""
    
    showcase_template = "https://bluecanvas.ai/showcase/trades/{company_slug}"
    
    with open(filename, 'w', newline='', encoding='utf-8') as csvfile:
        fieldnames = [
            'name', 'title', 'company', 'mobile', 'email', 'city', 
            'website', 'linkedin', 'premium_score', 'showcase_link', 'category'
        ]
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
        writer.writeheader()
        
        for contact in contacts:
            org = contact.get("organization", {})
            mobile_nums = contact.get("mobile_numbers", [])
            primary_mobile = mobile_nums[0].get("sanitized_number") if mobile_nums else ""
            
            company_name = org.get("name", "")
            company_slug = company_name.lower().replace(" ", "-").replace("&", "and")
            company_slug = "".join(c for c in company_slug if c.isalnum() or c == "-")
            
            writer.writerow({
                'name': contact.get("name", ""),
                'title': contact.get("title", ""),
                'company': company_name,
                'mobile': primary_mobile,
                'email': contact.get("email", ""),
                'city': contact.get("city", ""),
                'website': org.get("website_url", ""),
                'linkedin': contact.get("linkedin_url", ""),
                'premium_score': contact.get("premium_score", 5),
                'showcase_link': showcase_template.format(company_slug=company_slug),
                'category': contact.get("search_category", "")
            })

def create_whatsapp_template() -> str:
    """Create WhatsApp message template for premium positioning"""
    return """Hi {name} 👋

I help premium trades like {company} get found by the right customers online.

Quick question — are you happy with the quality of leads coming through your website?

Most £400+/day specialists I work with tell me their biggest challenge isn't getting work, it's getting the RIGHT work from customers who value quality.

If that resonates, I'd love to show you how we position premium trades to attract higher-value projects.

Worth a quick 10-min call?

Phil
Blue Canvas
bluecanvas.ai
"""

def create_pricing_strategy() -> str:
    """Create pricing strategy for premium trades"""
    return """# Premium Trades Pricing Strategy

## Target Profile
- £400-600/day specialists
- Established businesses (£100k+ turnover)
- Premium positioning required

## Service Packages

### 1. Premium Trade Website (£2,500)
- Bespoke design showcasing quality work
- Mobile-first (80% WhatsApp traffic)
- Project gallery with before/after
- Customer testimonials/reviews
- Service area mapping
- Quote request forms
- WhatsApp integration
- SSL + hosting included

### 2. Local SEO Foundation (£1,500)
- Google Business Profile optimisation
- Local citation building
- Review generation system
- Location page creation
- Schema markup
- Local keyword targeting

### 3. Ongoing SEO (£400/month)
- Monthly content creation
- Backlink building
- Rank tracking & reporting
- GBP management
- Review monitoring
- Technical SEO maintenance

## Total Investment
- **Setup**: £4,000 (website + SEO foundation)
- **Monthly**: £400 (ongoing SEO)
- **Annual value**: £8,800

## ROI Positioning
- 1 extra £2k job per month = 5x ROI
- Premium trades typically book 2-3 extra jobs monthly
- Strong online presence commands 10-15% premium rates

## Payment Terms
- 50% upfront, 50% on completion
- Monthly SEO on direct debit
- 12-month minimum commitment
"""

def main():
    print("🔧 Premium Trades Apollo Search Starting...")
    print(f"Target: 100+ premium tradesmen with mobile numbers in NI")
    print("-" * 60)
    
    all_contacts = []
    search_configs = create_search_configs()
    
    for category, config in search_configs.items():
        print(f"\n📋 Searching: {category.replace('_', ' ').title()}")
        contacts = apollo_search(config, max_pages=5)
        
        # Add category and premium scoring
        for contact in contacts:
            contact["search_category"] = category
            contact["premium_score"] = score_contact_premium(contact)
        
        all_contacts.extend(contacts)
        print(f"   Found: {len(contacts)} contacts with mobile numbers")
    
    # Sort by premium score (high to low)
    all_contacts.sort(key=lambda x: x.get("premium_score", 0), reverse=True)
    
    # Remove duplicates by email/phone
    seen = set()
    unique_contacts = []
    for contact in all_contacts:
        mobile_nums = contact.get("mobile_numbers", [])
        mobile = mobile_nums[0].get("sanitized_number") if mobile_nums else ""
        identifier = f"{contact.get('email', '')}-{mobile}"
        
        if identifier not in seen and identifier != "-":
            seen.add(identifier)
            unique_contacts.append(contact)
    
    print(f"\n📊 Results Summary:")
    print(f"   Total contacts found: {len(all_contacts)}")
    print(f"   Unique contacts: {len(unique_contacts)}")
    
    if unique_contacts:
        avg_score = sum(c.get('premium_score', 0) for c in unique_contacts) / len(unique_contacts)
        print(f"   Average premium score: {avg_score:.1f}")
    else:
        print("   No contacts found - check search parameters")
    
    # Export deliverables
    timestamp = datetime.now().strftime("%Y%m%d_%H%M")
    
    # 1. CSV Export
    csv_filename = f"premium_trades_apollo_{timestamp}.csv"
    export_to_csv(unique_contacts, csv_filename)
    print(f"\n📋 CSV exported: {csv_filename}")
    
    # 2. WhatsApp template
    whatsapp_template = create_whatsapp_template()
    with open(f"whatsapp_template_{timestamp}.txt", "w") as f:
        f.write(whatsapp_template)
    print(f"📱 WhatsApp template: whatsapp_template_{timestamp}.txt")
    
    # 3. Pricing strategy
    pricing_strategy = create_pricing_strategy()
    with open(f"pricing_strategy_{timestamp}.md", "w") as f:
        f.write(pricing_strategy)
    print(f"💰 Pricing strategy: pricing_strategy_{timestamp}.md")
    
    # Show top 10 prospects
    print(f"\n🎯 Top 10 Premium Prospects:")
    print("-" * 60)
    for i, contact in enumerate(unique_contacts[:10], 1):
        org = contact.get("organization", {})
        mobile_nums = contact.get("mobile_numbers", [])
        mobile = mobile_nums[0].get("sanitized_number") if mobile_nums else "No mobile"
        
        print(f"{i:2d}. {contact.get('name', 'Unknown')} ({contact.get('premium_score', 0)}/10)")
        print(f"    {contact.get('title', '')} @ {org.get('name', '')}")
        print(f"    📱 {mobile} | 📧 {contact.get('email', 'No email')}")
        print(f"    📍 {contact.get('city', '')} | Category: {contact.get('search_category', '').replace('_', ' ')}")
        print()

if __name__ == "__main__":
    main()