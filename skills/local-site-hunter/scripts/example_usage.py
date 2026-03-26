#!/usr/bin/env python3
"""
Example usage of the local-site-hunter skill
"""

import sys
import os
from hunt_and_deploy import main as hunt_main

def run_example():
    """Run example hunt for businesses in Derry"""
    
    print("🎯 LOCAL SITE HUNTER - Example Usage")
    print("=" * 50)
    print()
    print("This example will:")
    print("1. Search for businesses in Derry without websites")
    print("2. Filter to mobile numbers only (for WhatsApp)")
    print("3. Add them to the tradesman-sites database")
    print("4. Deploy the updated site")
    print()
    
    # Check if API key is set
    if not os.getenv('GOOGLE_MAPS_API_KEY'):
        print("❌ Missing Google Maps API key!")
        print("   Set GOOGLE_MAPS_API_KEY in your environment")
        return
    
    # Simulate command line args
    sys.argv = [
        'hunt_and_deploy.py',
        '--location', 'Derry',
        '--limit', '20',  # Keep it small for example
        '--deploy'
    ]
    
    # Run the main function
    hunt_main()

if __name__ == '__main__':
    run_example()