#!/usr/bin/env python3
"""
Import manually collected property data and generate market intelligence reports
Use this when PropertyPal scraping is blocked or for manual data collection workflows
"""

import csv
import json
import argparse
from datetime import datetime
from pathlib import Path
import re

def import_csv_data(input_file, output_dir='data'):
    """Import property data from manually collected CSV"""
    
    output_dir = Path(output_dir)
    output_dir.mkdir(exist_ok=True)
    
    properties = []
    
    with open(input_file, 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        
        for row in reader:
            # Standardize the data format
            property_data = {
                'address': clean_field(row.get('address', row.get('Address', ''))),
                'price': clean_price(row.get('price', row.get('Price', ''))),
                'property_type': clean_field(row.get('property_type', row.get('Type', row.get('PropertyType', '')))),
                'bedrooms': clean_field(row.get('bedrooms', row.get('Beds', row.get('Bedrooms', '')))),
                'bathrooms': clean_field(row.get('bathrooms', row.get('Baths', row.get('Bathrooms', '')))),
                'agent': clean_field(row.get('agent', row.get('Agent', row.get('EstateAgent', '')))),
                'date_listed': clean_field(row.get('date_listed', row.get('DateListed', row.get('Date', '')))),
                'status': clean_field(row.get('status', row.get('Status', 'For Sale'))),
                'url': clean_field(row.get('url', row.get('URL', row.get('Link', '')))),
                'area': extract_area(row.get('address', row.get('Address', ''))),
                'scraped_at': datetime.now().isoformat()
            }
            
            if property_data['address'] and property_data['address'] != 'N/A':
                properties.append(property_data)
    
    print(f"✅ Imported {len(properties)} properties from {input_file}")
    
    # Save processed data
    timestamp = datetime.now().strftime('%Y-%m-%d')
    
    # Save to our standard format
    csv_filename = output_dir / f'derry-listings-{timestamp}.csv'
    save_to_csv(properties, csv_filename)
    
    json_filename = output_dir / f'derry-listings-{timestamp}.json'
    with open(json_filename, 'w', encoding='utf-8') as f:
        json.dump(properties, f, indent=2, ensure_ascii=False)
    
    # Generate market report
    from generate_sample_data import generate_sample_report
    report_filename = output_dir / f'market-report-{timestamp}.md'
    generate_sample_report(properties, report_filename)
    
    print(f"📊 Generated market report: {report_filename}")
    print(f"📄 Standardized data saved: {csv_filename}")
    
    return properties

def clean_field(value):
    """Clean and standardize field values"""
    if not value or str(value).lower().strip() in ['', 'nan', 'null', 'none']:
        return 'N/A'
    return str(value).strip()

def clean_price(price_str):
    """Clean and standardize price format"""
    if not price_str:
        return 'POA'
    
    price_str = str(price_str).strip()
    
    # Already properly formatted
    if price_str.startswith('£') and ',' in price_str:
        return price_str
    
    # Extract numbers and format
    numbers = re.findall(r'\d+', price_str)
    if numbers:
        price_num = int(''.join(numbers))
        if price_num < 1000:  # Likely in thousands
            price_num *= 1000
        return f"£{price_num:,}"
    
    return 'POA'

def extract_area(address):
    """Extract area from address"""
    if not address:
        return 'Unknown'
    
    # Common Derry areas
    areas = [
        'Derry City', 'Waterside', 'Cityside', 'Culmore', 
        'Eglinton', 'Drumahoe', 'Strathfoyle', 'Newbuildings',
        'Park', 'Limavady', 'Dungiven', 'Derry', 'Londonderry'
    ]
    
    address_lower = address.lower()
    
    for area in areas:
        if area.lower() in address_lower:
            return area
    
    # Try to extract from end of address
    parts = address.split(',')
    if len(parts) > 1:
        last_part = parts[-1].strip()
        return last_part if last_part else 'Unknown'
    
    return 'Unknown'

def save_to_csv(properties, filename):
    """Save properties to CSV in standard format"""
    fieldnames = [
        'address', 'price', 'property_type', 'bedrooms', 'bathrooms',
        'agent', 'date_listed', 'status', 'url', 'area', 'scraped_at'
    ]
    
    with open(filename, 'w', newline='', encoding='utf-8') as csvfile:
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(properties)

def create_import_template():
    """Create a template CSV file for manual data entry"""
    template_file = 'manual_data_template.csv'
    
    headers = [
        'address', 'price', 'property_type', 'bedrooms', 'bathrooms',
        'agent', 'date_listed', 'status', 'url'
    ]
    
    sample_data = [
        {
            'address': '123 Main Street, Derry City',
            'price': '£250,000',
            'property_type': 'Semi-detached',
            'bedrooms': '3',
            'bathrooms': '2',
            'agent': 'Sample Estate Agents',
            'date_listed': '2026-03-15',
            'status': 'For Sale',
            'url': 'https://www.propertypal.com/property/123456/detail'
        },
        {
            'address': '45 River View, Waterside',
            'price': 'POA',
            'property_type': 'Detached',
            'bedrooms': '4',
            'bathrooms': '3',
            'agent': 'Another Estate Agent',
            'date_listed': '2026-03-10',
            'status': 'For Sale',
            'url': 'https://www.propertypal.com/property/789012/detail'
        }
    ]
    
    with open(template_file, 'w', newline='', encoding='utf-8') as f:
        writer = csv.DictWriter(f, fieldnames=headers)
        writer.writeheader()
        writer.writerows(sample_data)
    
    print(f"📝 Created import template: {template_file}")
    print("   Edit this file with your manually collected data, then run:")
    print(f"   python3 import_manual_data.py --input {template_file}")

def main():
    parser = argparse.ArgumentParser(description='Import manually collected property data')
    parser.add_argument('--input', help='Input CSV file with property data')
    parser.add_argument('--output-dir', default='data', help='Output directory')
    parser.add_argument('--create-template', action='store_true', help='Create a template CSV file')
    
    args = parser.parse_args()
    
    if args.create_template:
        create_import_template()
        return
    
    if not args.input:
        print("❌ Please specify an input file with --input")
        print("   Or use --create-template to generate a template file")
        return
    
    if not Path(args.input).exists():
        print(f"❌ Input file not found: {args.input}")
        return
    
    try:
        properties = import_csv_data(args.input, args.output_dir)
        
        print(f"\n🎯 Market Intelligence Summary:")
        print(f"   Properties processed: {len(properties)}")
        
        # Quick stats
        agents = set(prop['agent'] for prop in properties if prop['agent'] != 'N/A')
        areas = set(prop['area'] for prop in properties if prop['area'] != 'Unknown')
        
        print(f"   Unique agents found: {len(agents)}")
        print(f"   Areas covered: {len(areas)}")
        print(f"   Data saved to: {args.output_dir}/")
        
        print("\n📈 Next steps:")
        print("   1. Review the generated market report")
        print("   2. Identify opportunity targets (small agents)")
        print("   3. Monitor competitor pricing strategies")
        print("   4. Update data weekly for trend analysis")
        
    except Exception as e:
        print(f"❌ Error processing data: {e}")

if __name__ == "__main__":
    main()