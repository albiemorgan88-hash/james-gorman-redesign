#!/usr/bin/env python3
"""
Complete workflow: Find businesses, update database, and deploy site
"""

import os
import sys
import argparse
import tempfile
from find_businesses import BusinessFinder, BUSINESS_CATEGORIES
from update_database import DatabaseUpdater

def main():
    parser = argparse.ArgumentParser(description='Complete local site hunter workflow')
    parser.add_argument('--location', default='Derry', help='Location to search (default: Derry)')
    parser.add_argument('--limit', type=int, default=50, help='Max businesses to find (default: 50)')
    parser.add_argument('--deploy', action='store_true', default=True, help='Deploy after updating (default: True)')
    
    args = parser.parse_args()
    
    print("🎯 LOCAL SITE HUNTER - Complete Workflow")
    print("=" * 50)
    
    # Step 1: Find businesses
    print(f"\n🔍 STEP 1: Finding businesses in {args.location}")
    print("-" * 30)
    
    finder = BusinessFinder()
    all_businesses = []
    
    for category in BUSINESS_CATEGORIES[:5]:  # Limit to first 5 categories to avoid rate limits
        print(f"📍 Searching {category}...")
        businesses = finder.search_businesses(args.location, category, min(10, args.limit))  # Limit per category
        
        for business in businesses:
            business['category'] = finder.categorize_business(business)
            business['slug'] = finder.generate_slug(business['name'])
            business['score'] = finder.score_business(business)
        
        all_businesses.extend(businesses)
    
    # Remove duplicates and filter
    unique_businesses = {}
    for business in all_businesses:
        phone = business['phone']
        if phone not in unique_businesses and business['score'] >= 8:
            unique_businesses[phone] = business
    
    final_businesses = list(unique_businesses.values())
    final_businesses.sort(key=lambda x: x['score'], reverse=True)
    
    print(f"✅ Found {len(final_businesses)} quality prospects")
    
    if not final_businesses:
        print("❌ No businesses found. Exiting.")
        return
    
    # Show breakdown
    score_counts = {}
    for business in final_businesses:
        score = business['score']
        score_counts[score] = score_counts.get(score, 0) + 1
    
    print("\n📊 Prospect breakdown:")
    for score in sorted(score_counts.keys(), reverse=True):
        count = score_counts[score]
        status = "No website" if score == 10 else "Facebook only" if score == 8 else "Other"
        print(f"  {status}: {count} businesses")
    
    # Step 2: Update database
    print(f"\n📚 STEP 2: Updating database")
    print("-" * 30)
    
    updater = DatabaseUpdater()
    existing_businesses = updater.load_existing_businesses()
    merged_businesses = updater.merge_businesses(existing_businesses, final_businesses)
    updater.write_companies_file(merged_businesses)
    
    added_count = len(merged_businesses) - len(existing_businesses)
    
    # Step 3: Deploy (if requested)
    deployment_url = "https://tradesman-sites.vercel.app"  # Default URL
    
    if args.deploy and added_count > 0:
        print(f"\n🚀 STEP 3: Deploying site")
        print("-" * 30)
        success = updater.deploy_site()
        if success:
            print(f"🌐 Site live at: {deployment_url}")
        else:
            print("❌ Deployment failed, but database was updated")
    
    # Final summary
    print(f"\n🎉 WORKFLOW COMPLETE")
    print("=" * 50)
    print(f"📍 Location: {args.location}")
    print(f"🔍 Businesses found: {len(final_businesses)}")
    print(f"➕ New businesses added: {added_count}")
    print(f"📊 Total in database: {len(merged_businesses)}")
    
    if args.deploy and added_count > 0:
        print(f"🌐 Deployment: {deployment_url}")
        print(f"📱 Ready for WhatsApp outreach!")
    
    # Show some examples
    if final_businesses:
        print(f"\n💼 Sample prospects:")
        for i, business in enumerate(final_businesses[:3]):
            status = "No website" if business['score'] == 10 else "Facebook only"
            print(f"  {i+1}. {business['name']} ({status})")
            print(f"     📞 {business['phone']}")
            print(f"     📍 {business['address']}")

if __name__ == '__main__':
    main()