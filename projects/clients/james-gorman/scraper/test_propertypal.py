#!/usr/bin/env python3
"""
Test script to examine PropertyPal structure
"""

import requests
from bs4 import BeautifulSoup
import re

def test_propertypal():
    headers = {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'en-GB,en;q=0.9',
        'Accept-Encoding': 'gzip, deflate, br',
        'DNT': '1',
        'Connection': 'keep-alive',
        'Upgrade-Insecure-Requests': '1',
    }
    
    url = "https://www.propertypal.com/property-for-sale/derry-city"
    print(f"Testing: {url}")
    
    response = requests.get(url, headers=headers)
    print(f"Status: {response.status_code}")
    
    if response.status_code != 200:
        print("Failed to fetch page")
        return
        
    soup = BeautifulSoup(response.text, 'html.parser')
    
    # Look for common property listing patterns
    potential_selectors = [
        'div[class*="property"]',
        'div[class*="listing"]',
        'div[class*="card"]',
        'article',
        'li[class*="property"]',
        'li[class*="listing"]',
    ]
    
    print("\n=== TESTING SELECTORS ===")
    for selector in potential_selectors:
        elements = soup.select(selector)
        print(f"{selector}: {len(elements)} elements found")
        
        if elements and len(elements) > 1:  # Likely property listings if multiple found
            print(f"  Sample classes: {[elem.get('class') for elem in elements[:3]]}")
    
    # Look for price patterns
    print("\n=== PRICE PATTERNS ===")
    price_patterns = [
        re.compile(r'£[\d,]+'),
        re.compile(r'price', re.IGNORECASE),
        re.compile(r'amount', re.IGNORECASE),
    ]
    
    for pattern in price_patterns:
        matches = soup.find_all(text=pattern)
        if matches:
            print(f"Pattern {pattern.pattern}: {len(matches)} matches")
            print(f"  Examples: {matches[:3]}")
    
    # Look for specific text content that might indicate property listings
    print("\n=== PROPERTY INDICATORS ===")
    indicators = ['bedroom', 'bathroom', 'detached', 'semi', 'terrace', 'apartment']
    for indicator in indicators:
        elements = soup.find_all(text=re.compile(indicator, re.IGNORECASE))
        if elements:
            print(f"{indicator}: {len(elements)} occurrences")
    
    # Save a sample of the HTML for manual inspection
    with open('propertypal_sample.html', 'w', encoding='utf-8') as f:
        f.write(response.text)
    print("\nFull HTML saved to propertypal_sample.html for inspection")

if __name__ == "__main__":
    test_propertypal()