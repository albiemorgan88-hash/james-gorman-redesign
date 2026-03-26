#!/usr/bin/env python3
"""
Integration test for local-site-hunter skill
Tests all components without making real API calls or deployments
"""

import os
import sys
import tempfile
import json
from update_database import DatabaseUpdater

def test_database_integration():
    """Test database merge functionality"""
    print("🧪 Testing database integration...")
    
    # Create test CSV data
    test_businesses = [
        {
            'name': 'Test Dentist',
            'category': 'dentist',
            'phone': '07777 123456',
            'address': 'Test Address, Derry BT48 1AA',
            'slug': 'test-dentist',
            'score': 10
        },
        {
            'name': 'Test Cafe',
            'category': 'cafe', 
            'phone': '07777 654321',
            'address': 'Test Cafe Address, Derry BT48 1BB',
            'slug': 'test-cafe',
            'score': 8
        }
    ]
    
    # Create temporary CSV file
    with tempfile.NamedTemporaryFile(mode='w', suffix='.csv', delete=False) as f:
        import csv
        writer = csv.DictWriter(f, fieldnames=['name', 'category', 'phone', 'address', 'slug', 'score'])
        writer.writeheader()
        for business in test_businesses:
            writer.writerow(business)
        csv_path = f.name
    
    try:
        updater = DatabaseUpdater()
        
        # Load existing businesses
        existing = updater.load_existing_businesses()
        original_count = len(existing)
        print(f"  ✅ Loaded {original_count} existing businesses")
        
        # Load test businesses
        new = updater.load_new_businesses(csv_path)
        print(f"  ✅ Loaded {len(new)} test businesses")
        
        # Test merge (but don't write)
        merged = updater.merge_businesses(existing, new)
        added = len(merged) - original_count
        print(f"  ✅ Would add {added} new businesses")
        print(f"  ✅ Total would be {len(merged)} businesses")
        
        # Verify no duplicates by phone
        phones = [b.get('phone', '') for b in merged]
        unique_phones = set(phone for phone in phones if phone)
        if len(phones) - phones.count('') == len(unique_phones):
            print("  ✅ No duplicate phone numbers")
        else:
            print("  ❌ Found duplicate phone numbers")
            return False
        
        return True
        
    finally:
        # Clean up temp file
        os.unlink(csv_path)

def test_tradesman_sites_structure():
    """Test that tradesman-sites project exists and has correct structure"""
    print("🧪 Testing tradesman-sites project structure...")
    
    project_path = "/Users/philsagent/.openclaw/workspace/projects/tradesman-sites"
    companies_file = os.path.join(project_path, "lib", "companies.ts")
    
    # Check project exists
    if not os.path.exists(project_path):
        print(f"  ❌ Project directory not found: {project_path}")
        return False
    print(f"  ✅ Project directory exists")
    
    # Check companies.ts exists
    if not os.path.exists(companies_file):
        print(f"  ❌ Companies file not found: {companies_file}")
        return False
    print(f"  ✅ Companies file exists")
    
    # Check package.json for build script
    package_json = os.path.join(project_path, "package.json")
    if os.path.exists(package_json):
        with open(package_json, 'r') as f:
            package_data = json.load(f)
            if 'scripts' in package_data and 'build' in package_data['scripts']:
                print("  ✅ Build script found")
            else:
                print("  ⚠️  Build script not found")
    
    return True

def test_environment():
    """Test environment setup"""
    print("🧪 Testing environment...")
    
    # Check API key (don't print the actual key)
    api_key = os.getenv('GOOGLE_MAPS_API_KEY')
    if api_key:
        print("  ✅ GOOGLE_MAPS_API_KEY is set")
    else:
        print("  ❌ GOOGLE_MAPS_API_KEY not set")
        return False
    
    # Check Vercel token
    vercel_token = os.getenv('VERCEL_TOKEN')
    if vercel_token:
        print("  ✅ VERCEL_TOKEN is set")
    else:
        print("  ⚠️  VERCEL_TOKEN not set (needed for deployment)")
    
    return True

def main():
    print("🎯 LOCAL SITE HUNTER - Integration Test")
    print("=" * 50)
    
    tests = [
        ("Environment", test_environment),
        ("Tradesman Sites Structure", test_tradesman_sites_structure), 
        ("Database Integration", test_database_integration)
    ]
    
    passed = 0
    total = len(tests)
    
    for name, test_func in tests:
        print(f"\n🔍 {name}")
        print("-" * 30)
        try:
            success = test_func()
            if success:
                print(f"  ✅ {name} PASSED")
                passed += 1
            else:
                print(f"  ❌ {name} FAILED")
        except Exception as e:
            print(f"  ❌ {name} ERROR: {str(e)}")
    
    print(f"\n📊 Test Results: {passed}/{total} passed")
    
    if passed == total:
        print("🎉 All integration tests passed!")
        print("💡 Skill is ready to use. Try:")
        print("   python scripts/hunt_and_deploy.py --location 'Belfast' --limit 10")
        return 0
    else:
        print("❌ Some tests failed. Fix issues before using skill.")
        return 1

if __name__ == '__main__':
    exit(main())