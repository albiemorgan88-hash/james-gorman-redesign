#!/usr/bin/env python3
"""
Test Google Maps API connection and basic functionality
"""

import os
import sys
from find_businesses import BusinessFinder

def test_api():
    """Test Google Maps API key and basic search"""
    
    # Check API key
    api_key = os.getenv('GOOGLE_MAPS_API_KEY')
    if not api_key:
        print("❌ GOOGLE_MAPS_API_KEY environment variable not set")
        print("   Add to ~/.zprofile: export GOOGLE_MAPS_API_KEY='your-key-here'")
        return False
    
    print(f"✅ API key found: {api_key[:10]}...")
    
    try:
        finder = BusinessFinder()
        print("✅ BusinessFinder initialized")
        
        # Test a simple search
        print("🔍 Testing search for 'dentist in Derry'...")
        businesses = finder.search_businesses('Derry', 'dentist', limit=5)
        
        print(f"✅ Found {len(businesses)} businesses")
        
        if businesses:
            print("\n📋 Sample results:")
            for i, business in enumerate(businesses[:3]):
                print(f"  {i+1}. {business['name']}")
                print(f"     📞 {business['phone']}")
                print(f"     🌐 {business['website'] or 'No website'}")
                print(f"     ⭐ {business['rating']} ({business['review_count']} reviews)")
                print(f"     📍 {business['address'][:50]}...")
                print()
        
        return True
        
    except Exception as e:
        print(f"❌ Error testing API: {str(e)}")
        return False

if __name__ == '__main__':
    print("🧪 Testing Google Maps API...")
    success = test_api()
    
    if success:
        print("✅ API test passed! Ready to hunt businesses.")
    else:
        print("❌ API test failed. Check your setup.")
        sys.exit(1)