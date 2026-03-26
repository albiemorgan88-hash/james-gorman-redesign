#!/usr/bin/env python3
"""
Local Site Hunter - Find businesses without websites for WhatsApp outreach
"""

import os
import sys
import csv
import json
import time
import argparse
import requests
import re
from urllib.parse import urlparse
from typing import List, Dict, Optional

# Business categories to search (high-value, NOT one-man-band tradesmen)
BUSINESS_CATEGORIES = [
    'dentist', 'physiotherapy', 'chiropractor', 'optician', 'restaurant', 
    'cafe', 'pub', 'hotel', 'gym', 'yoga', 'pilates', 'veterinary', 
    'dog kennel', 'dog grooming', 'nursery', 'creche', 'childcare',
    'car dealer', 'mot centre', 'car detailing', 'wedding venue', 
    'photographer', 'florist', 'estate agent', 'letting agent'
]

class BusinessFinder:
    def __init__(self):
        self.api_key = os.getenv('GOOGLE_MAPS_API_KEY')
        if not self.api_key:
            raise ValueError("GOOGLE_MAPS_API_KEY environment variable not set")
        
        self.base_url = "https://maps.googleapis.com/maps/api/place"
        
    def search_businesses(self, location: str, category: str, limit: int = 50) -> List[Dict]:
        """Search for businesses in a category and location"""
        businesses = []
        
        # Text search for businesses
        search_url = f"{self.base_url}/textsearch/json"
        query = f"{category} in {location}"
        
        params = {
            'query': query,
            'key': self.api_key,
            'type': 'establishment'
        }
        
        try:
            response = requests.get(search_url, params=params)
            response.raise_for_status()
            data = response.json()
            
            if data.get('status') != 'OK':
                print(f"API Error for {category} in {location}: {data.get('status')}")
                return businesses
            
            for place in data.get('results', []):
                business = self.process_business(place)
                if business and self.is_valid_prospect(business):
                    businesses.append(business)
                    
                if len(businesses) >= limit:
                    break
                    
        except Exception as e:
            print(f"Error searching {category} in {location}: {str(e)}")
            
        return businesses
    
    def process_business(self, place: Dict) -> Optional[Dict]:
        """Process a business from Google Places API"""
        try:
            place_id = place.get('place_id')
            if not place_id:
                return None
            
            # Get detailed info
            details = self.get_place_details(place_id)
            if not details:
                return None
            
            # Extract business data
            business = {
                'name': details.get('name', ''),
                'address': details.get('formatted_address', ''),
                'phone': details.get('formatted_phone_number', ''),
                'rating': details.get('rating', 0),
                'review_count': details.get('user_ratings_total', 0),
                'website': details.get('website', ''),
                'place_id': place_id,
                'types': details.get('types', [])
            }
            
            return business
            
        except Exception as e:
            print(f"Error processing business: {str(e)}")
            return None
    
    def get_place_details(self, place_id: str) -> Optional[Dict]:
        """Get detailed information for a place"""
        details_url = f"{self.base_url}/details/json"
        
        params = {
            'place_id': place_id,
            'key': self.api_key,
            'fields': 'name,formatted_address,formatted_phone_number,rating,user_ratings_total,website,types'
        }
        
        try:
            response = requests.get(details_url, params=params)
            response.raise_for_status()
            data = response.json()
            
            if data.get('status') == 'OK':
                return data.get('result', {})
                
        except Exception as e:
            print(f"Error getting place details: {str(e)}")
            
        return None
    
    def is_valid_prospect(self, business: Dict) -> bool:
        """Check if business is a valid prospect"""
        # Must have mobile phone number (07xxx)
        phone = business.get('phone', '')
        if not self.is_mobile_number(phone):
            return False
        
        # Score based on website status
        score = self.score_business(business)
        return score >= 8  # 10 = no website, 8 = Facebook only
    
    def is_mobile_number(self, phone: str) -> bool:
        """Check if phone number is a UK mobile (07xxx)"""
        if not phone:
            return False
        
        # Remove spaces, dashes, parentheses
        clean_phone = re.sub(r'[\s\-\(\)]', '', phone)
        
        # Check for UK mobile patterns
        mobile_patterns = [
            r'^07\d{9}$',           # 07xxxxxxxxx
            r'^\+447\d{9}$',        # +447xxxxxxxxx
            r'^447\d{9}$',          # 447xxxxxxxxx
            r'^\(\+44\)\s*7\d{9}$'  # (+44) 7xxxxxxxxx
        ]
        
        for pattern in mobile_patterns:
            if re.match(pattern, clean_phone):
                return True
                
        return False
    
    def score_business(self, business: Dict) -> int:
        """Score business based on website presence"""
        website = business.get('website', '').lower()
        
        if not website:
            return 10  # No website
        
        # Check if it's just Facebook
        if 'facebook.com' in website:
            return 8  # Facebook only
        
        # Has a real website
        return 0  # Skip
    
    def generate_slug(self, name: str) -> str:
        """Generate URL-friendly slug from business name"""
        # Convert to lowercase and replace spaces/special chars with hyphens
        slug = re.sub(r'[^a-zA-Z0-9\s]', '', name.lower())
        slug = re.sub(r'\s+', '-', slug.strip())
        slug = re.sub(r'-+', '-', slug)  # Remove multiple hyphens
        return slug.strip('-')
    
    def categorize_business(self, business: Dict) -> str:
        """Determine business category from types"""
        types = [t.lower() for t in business.get('types', [])]
        
        # Category mapping
        category_map = {
            'dentist': ['dentist', 'dental_clinic'],
            'physiotherapy': ['physiotherapist', 'physical_therapy'],
            'gym': ['gym', 'fitness_center', 'health_club'],
            'restaurant': ['restaurant', 'food'],
            'cafe': ['cafe', 'coffee_shop'],
            'hotel': ['lodging', 'hotel', 'guest_house'],
            'car': ['car_dealer', 'car_repair', 'auto_parts_store'],
            'dog': ['pet_groomer', 'pet_store', 'kennel'],
            'beauty': ['beauty_salon', 'spa', 'hair_care'],
            'florist': ['florist'],
            'photographer': ['photographer']
        }
        
        for category, keywords in category_map.items():
            if any(keyword in types for keyword in keywords):
                return category
        
        return 'business'  # Default category

def main():
    parser = argparse.ArgumentParser(description='Find local businesses without websites')
    parser.add_argument('--location', default='Derry', help='Location to search')
    parser.add_argument('--limit', type=int, default=50, help='Max businesses per category')
    parser.add_argument('--output', default='businesses.csv', help='Output CSV file')
    
    args = parser.parse_args()
    
    finder = BusinessFinder()
    all_businesses = []
    
    print(f"🔍 Searching for businesses in {args.location}...")
    
    for category in BUSINESS_CATEGORIES:
        print(f"📍 Searching {category}...")
        businesses = finder.search_businesses(args.location, category, args.limit)
        
        for business in businesses:
            business['category'] = finder.categorize_business(business)
            business['slug'] = finder.generate_slug(business['name'])
            business['score'] = finder.score_business(business)
        
        all_businesses.extend(businesses)
        time.sleep(0.1)  # Rate limiting
    
    # Remove duplicates (same phone number)
    unique_businesses = {}
    for business in all_businesses:
        phone = business['phone']
        if phone not in unique_businesses:
            unique_businesses[phone] = business
    
    final_businesses = list(unique_businesses.values())
    
    # Sort by score (highest first)
    final_businesses.sort(key=lambda x: x['score'], reverse=True)
    
    # Write to CSV
    with open(args.output, 'w', newline='', encoding='utf-8') as csvfile:
        fieldnames = ['name', 'category', 'phone', 'address', 'rating', 'review_count', 'website', 'score', 'slug']
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
        
        writer.writeheader()
        for business in final_businesses:
            writer.writerow({
                'name': business['name'],
                'category': business['category'],
                'phone': business['phone'],
                'address': business['address'],
                'rating': business['rating'],
                'review_count': business['review_count'],
                'website': business['website'] or 'None',
                'score': business['score'],
                'slug': business['slug']
            })
    
    print(f"✅ Found {len(final_businesses)} prospects")
    print(f"📄 Saved to {args.output}")
    
    # Show score breakdown
    score_counts = {}
    for business in final_businesses:
        score = business['score']
        score_counts[score] = score_counts.get(score, 0) + 1
    
    print("\n📊 Score breakdown:")
    for score in sorted(score_counts.keys(), reverse=True):
        count = score_counts[score]
        status = "No website" if score == 10 else "Facebook only" if score == 8 else "Other"
        print(f"  Score {score} ({status}): {count} businesses")
    
    return final_businesses

if __name__ == '__main__':
    main()