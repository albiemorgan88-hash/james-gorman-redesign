#!/usr/bin/env python3
"""
Derry Local Lead Scraper
Finds businesses without proper websites in Derry and surrounding areas
"""

import requests
import csv
import json
import time
import os
from urllib.parse import quote

# Load API keys from environment
GOOGLE_MAPS_API_KEY = os.getenv('GOOGLE_MAPS_API_KEY')
PAGESPEED_API_KEY = os.getenv('PAGESPEED_API_KEY')

# Search areas
LOCATIONS = [
    "Derry", "Londonderry", 
    "Limavady", "Strabane", "Eglinton", "Coleraine"
]

# Search categories as specified
CATEGORIES = {
    # Tradesmen
    "plumber": "Tradesman", "electrician": "Tradesman", "roofer": "Tradesman", "painter": "Tradesman",
    "tiler": "Tradesman", "plasterer": "Tradesman", "joiner": "Tradesman", "landscaper": "Tradesman", 
    "locksmith": "Tradesman", "fencer": "Tradesman", "builder": "Tradesman", "handyman": "Tradesman",
    
    # Other local businesses
    "hairdresser": "Personal Services", "barber": "Personal Services", "beauty salon": "Personal Services",
    "takeaway": "Food & Drink", "cafe": "Food & Drink", "restaurant": "Food & Drink",
    "mechanic": "Automotive", "car wash": "Automotive", 
    "personal trainer": "Fitness", "gym": "Fitness",
    "dog groomer": "Pet Services", "pet shop": "Pet Services",
    "cleaner": "Cleaning Services", "window cleaner": "Cleaning Services"
}

def search_google_places(query):
    """Search Google Places for businesses"""
    url = "https://maps.googleapis.com/maps/api/place/textsearch/json"
    params = {
        'query': query,
        'key': GOOGLE_MAPS_API_KEY
    }
    
    try:
        response = requests.get(url, params=params)
        response.raise_for_status()
        return response.json()
    except Exception as e:
        print(f"Error searching for '{query}': {e}")
        return None

def get_place_details(place_id):
    """Get detailed information for a place"""
    url = "https://maps.googleapis.com/maps/api/place/details/json"
    params = {
        'place_id': place_id,
        'fields': 'name,formatted_phone_number,website,url,rating,user_ratings_total,formatted_address,business_status',
        'key': GOOGLE_MAPS_API_KEY
    }
    
    try:
        response = requests.get(url, params=params)
        response.raise_for_status()
        return response.json().get('result', {})
    except Exception as e:
        print(f"Error getting details for place_id '{place_id}': {e}")
        return {}

def score_business(business):
    """Score business based on website quality"""
    website = business.get('website', '')
    
    # No website = hot lead (10/10)
    if not website:
        return 10
    
    # Check if website is just a Facebook page
    if 'facebook.com' in website.lower():
        return 8
    
    # Basic website check (simplified - would need more analysis for full scoring)
    if website.startswith('http'):
        return 5  # Has a website, basic score
    
    return 3  # Unknown/unclear website status

def extract_facebook_url(business):
    """Try to find Facebook page from website field"""
    website = business.get('website', '')
    if 'facebook.com' in website.lower():
        return website
    return ''

def main():
    results = []
    total_searched = 0
    
    print("🔍 Starting Derry-area lead scraping...")
    print(f"📊 Searching {len(CATEGORIES)} categories across {len(LOCATIONS)} locations")
    print(f"🔑 API Key loaded: {GOOGLE_MAPS_API_KEY[:10]}..." if GOOGLE_MAPS_API_KEY else "❌ No API key found")
    
    for location in LOCATIONS:
        for category, category_type in CATEGORIES.items():
            query = f"{category} {location}"
            print(f"\nSearching: {query}")
            
            # Search for businesses
            places_data = search_google_places(query)
            if not places_data:
                continue
                
            businesses = places_data.get('results', [])
            print(f"Found {len(businesses)} results")
            
            for idx, business in enumerate(businesses):
                total_searched += 1
                print(f"  Processing {idx+1}/{len(businesses)}: {business.get('name', 'Unknown')}")
                
                # Get detailed info
                place_id = business.get('place_id')
                if place_id:
                    details = get_place_details(place_id)
                    time.sleep(0.1)  # Rate limiting
                    
                    # Merge basic and detailed data
                    business.update(details)
                
                # Extract key info
                name = business.get('name', 'Unknown')
                phone = business.get('formatted_phone_number', '')
                address = business.get('formatted_address', '')
                rating = business.get('rating', 0)
                reviews = business.get('user_ratings_total', 0)
                website = business.get('website', '')
                google_url = business.get('url', '')
                
                # Score the business
                score = score_business(business)
                
                # Extract Facebook if website is Facebook
                facebook = extract_facebook_url(business)
                website_display = website if website else "NONE"
                
                # Only include if no website or Facebook only (hot leads)
                if score >= 8:  # No website (10) or Facebook only (8)
                    result = {
                        'Business Name': name,
                        'Category': category_type,
                        'Subcategory': category,
                        'Location Searched': location,
                        'Phone': phone,
                        'Address': address,
                        'Rating': rating,
                        'Reviews': reviews,
                        'Website': website_display,
                        'Facebook': facebook,
                        'Score': score,
                        'Google Maps URL': google_url
                    }
                    results.append(result)
                    print(f"✅ HOT LEAD: {name} (Score: {score}/10)")
                
                time.sleep(0.1)  # Rate limiting between requests
    
    print(f"\n🎯 CAMPAIGN COMPLETE")
    print(f"Total businesses searched: {total_searched}")
    print(f"Hot leads found (Score 8+): {len(results)}")
    
    # Save results to CSV
    output_file = "~/.openclaw/workspace/reports/hunter/no-website-derry-leads.csv"
    output_file = os.path.expanduser(output_file)
    
    if results:
        with open(output_file, 'w', newline='', encoding='utf-8') as csvfile:
            fieldnames = ['Business Name', 'Category', 'Subcategory', 'Location Searched', 
                         'Phone', 'Address', 'Rating', 'Reviews', 'Website', 'Facebook', 
                         'Score', 'Google Maps URL']
            writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
            
            writer.writeheader()
            for result in results:
                writer.writerow(result)
        
        print(f"✅ Results saved to: {output_file}")
        
        # Generate summary by category
        category_breakdown = {}
        for result in results:
            cat = result['Category']
            category_breakdown[cat] = category_breakdown.get(cat, 0) + 1
        
        print(f"\n📊 BREAKDOWN BY CATEGORY:")
        for cat, count in sorted(category_breakdown.items(), key=lambda x: x[1], reverse=True):
            print(f"  {cat}: {count} businesses")
        
        # Show top 20 hottest leads
        top_leads = sorted(results, key=lambda x: (-x['Score'], -x['Reviews']))[:20]
        print(f"\n🔥 TOP 20 HOTTEST LEADS:")
        for i, lead in enumerate(top_leads, 1):
            print(f"  {i}. {lead['Business Name']} ({lead['Category']}) - Score: {lead['Score']}/10")
            if lead['Phone']:
                print(f"     📞 {lead['Phone']}")
        
        # Save raw data as JSON
        json_file = output_file.replace('.csv', '.json')
        with open(json_file, 'w', encoding='utf-8') as jsonfile:
            json.dump(results, jsonfile, indent=2, ensure_ascii=False)
        print(f"✅ Raw data saved to: {json_file}")
        
    else:
        print("❌ No hot leads found matching criteria")

if __name__ == "__main__":
    main()