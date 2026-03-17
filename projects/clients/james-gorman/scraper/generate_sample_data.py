#!/usr/bin/env python3
"""
Generate sample property data for testing the PropertyPal scraper
This demonstrates what the scraper output would look like with real data
"""

import random
import json
import csv
from datetime import datetime, timedelta
from pathlib import Path

def generate_sample_properties():
    """Generate realistic sample property data for Derry area"""
    
    # Sample data pools
    areas = ['Derry City', 'Waterside', 'Cityside', 'Culmore', 'Eglinton', 'Drumahoe', 'Strathfoyle', 'Newbuildings']
    
    streets = [
        'Main Street', 'Church Road', 'Hill Street', 'Park Avenue', 'Victoria Street',
        'Queen Street', 'King Street', 'Bridge Street', 'Mill Road', 'Garden Close',
        'Station Road', 'High Street', 'School Lane', 'Abbey Court', 'River View',
        'Castle Gardens', 'Meadow Park', 'Oakwood Drive', 'Sycamore Close', 'Elmwood Avenue'
    ]
    
    property_types = ['Detached', 'Semi-detached', 'Terraced', 'Apartment', 'Townhouse']
    
    agents = [
        'Martin & Co Derry', 'Pinewood Properties', 'Braidwood Properties', 
        'O\'Sullivan Estate Agents', 'McGilloway Properties', 'Caldwell Properties',
        'Hunter Campbell', 'Neill Estate Agents', 'Propertylink', 'Bamford Properties',
        'Homes Independent', 'Donnelly & Associates', 'Smyth Properties', 'Quinn Estates',
        'McDermott Property', 'Anderson Properties', 'Reid & Associates'
    ]
    
    properties = []
    
    # Generate 85 sample properties
    for i in range(85):
        area = random.choice(areas)
        street = random.choice(streets)
        house_number = random.randint(1, 120)
        
        property_data = {
            'address': f"{house_number} {street}, {area}",
            'price': f"£{random.randint(80, 450):,}000" if random.random() > 0.1 else "POA",
            'property_type': random.choice(property_types),
            'bedrooms': str(random.randint(1, 5)),
            'bathrooms': str(random.randint(1, 3)),
            'agent': random.choice(agents),
            'date_listed': (datetime.now() - timedelta(days=random.randint(1, 90))).strftime('%Y-%m-%d'),
            'status': random.choices(['For Sale', 'Sale Agreed', 'Under Offer'], weights=[80, 15, 5])[0],
            'url': f"https://www.propertypal.com/property/{random.randint(100000, 999999)}/detail",
            'area': area,
            'scraped_at': datetime.now().isoformat()
        }
        
        properties.append(property_data)
    
    return properties

def save_sample_data():
    """Generate and save sample data"""
    properties = generate_sample_properties()
    
    # Create data directory
    data_dir = Path('data')
    data_dir.mkdir(exist_ok=True)
    
    timestamp = datetime.now().strftime('%Y-%m-%d')
    
    # Save to CSV
    csv_filename = data_dir / f'derry-listings-{timestamp}.csv'
    fieldnames = [
        'address', 'price', 'property_type', 'bedrooms', 'bathrooms',
        'agent', 'date_listed', 'status', 'url', 'area', 'scraped_at'
    ]
    
    with open(csv_filename, 'w', newline='', encoding='utf-8') as csvfile:
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(properties)
    
    # Save to JSON
    json_filename = data_dir / f'derry-listings-{timestamp}.json'
    with open(json_filename, 'w', encoding='utf-8') as jsonfile:
        json.dump(properties, jsonfile, indent=2, ensure_ascii=False)
    
    # Generate market report
    generate_sample_report(properties, data_dir / f'market-report-{timestamp}.md')
    
    print(f"✅ Sample data generated:")
    print(f"   📄 CSV: {csv_filename}")
    print(f"   📄 JSON: {json_filename}")
    print(f"   📊 Report: data/market-report-{timestamp}.md")
    print(f"   🏠 Properties: {len(properties)}")

def generate_sample_report(properties, filename):
    """Generate a sample market report"""
    
    # Analyze the data
    area_stats = {}
    agent_stats = {}
    type_stats = {}
    price_data = []
    
    recent_cutoff = datetime.now() - timedelta(days=7)
    recent_properties = []
    
    for prop in properties:
        area = prop['area']
        agent = prop['agent']
        prop_type = prop['property_type']
        
        area_stats[area] = area_stats.get(area, 0) + 1
        agent_stats[agent] = agent_stats.get(agent, 0) + 1
        type_stats[prop_type] = type_stats.get(prop_type, 0) + 1
        
        # Price analysis
        price_str = prop['price']
        if price_str != 'POA' and '£' in price_str:
            try:
                price = int(price_str.replace('£', '').replace(',', '').replace('000', '000'))
                price_data.append({
                    'price': price,
                    'area': area,
                    'type': prop_type,
                    'agent': agent
                })
            except ValueError:
                pass
        
        # Recent properties
        try:
            listed_date = datetime.strptime(prop['date_listed'], '%Y-%m-%d')
            if listed_date >= recent_cutoff:
                recent_properties.append(prop)
        except:
            pass
    
    # Generate report
    report_lines = [
        f"# Derry Property Market Intelligence Report",
        f"**Generated:** {datetime.now().strftime('%Y-%m-%d %H:%M')}",
        f"**Data Source:** PropertyPal.com Market Intelligence",
        f"**Total Properties Analyzed:** {len(properties)}",
        "",
        "## Executive Summary",
        f"- **Active Listings:** {len(properties)} properties across Derry area",
        f"- **Market Areas Covered:** {len(area_stats)} locations",
        f"- **Estate Agents Active:** {len(agent_stats)} agencies",
        f"- **Recent Activity:** {len(recent_properties)} new listings (last 7 days)",
        "",
        "## Market Breakdown by Area",
    ]
    
    for area, count in sorted(area_stats.items(), key=lambda x: x[1], reverse=True):
        percentage = (count / len(properties)) * 100
        report_lines.append(f"- **{area}:** {count} properties ({percentage:.1f}%)")
    
    report_lines.extend([
        "",
        "## Competitor Analysis - Estate Agent Market Share",
    ])
    
    top_agents = sorted(agent_stats.items(), key=lambda x: x[1], reverse=True)[:10]
    for rank, (agent, count) in enumerate(top_agents, 1):
        percentage = (count / len(properties)) * 100
        report_lines.append(f"{rank}. **{agent}:** {count} properties ({percentage:.1f}%)")
    
    # Competitive intelligence section
    james_competitors = [agent for agent, count in top_agents[:5]]
    small_agents = [agent for agent, count in agent_stats.items() if count <= 2]
    
    report_lines.extend([
        "",
        "## 🎯 Competitive Intelligence for James Gorman Property",
        "",
        "### Major Competitors (Top 5 Agents)",
    ])
    
    for agent in james_competitors:
        count = agent_stats[agent]
        report_lines.append(f"- **{agent}:** {count} active listings")
    
    report_lines.extend([
        "",
        "### 💡 Opportunity Targets (Small/Independent Agents)",
        "*These agents have limited current inventory - potential targets when properties come back to market:*",
    ])
    
    for agent in small_agents[:8]:
        count = agent_stats[agent]
        report_lines.append(f"- **{agent}:** {count} listing{'s' if count > 1 else ''}")
    
    report_lines.extend([
        "",
        "## Property Type Distribution",
    ])
    
    for prop_type, count in sorted(type_stats.items(), key=lambda x: x[1], reverse=True):
        percentage = (count / len(properties)) * 100
        report_lines.append(f"- **{prop_type}:** {count} properties ({percentage:.1f}%)")
    
    # Price analysis
    if price_data:
        prices = [p['price'] for p in price_data]
        avg_price = sum(prices) / len(prices)
        median_price = sorted(prices)[len(prices) // 2]
        
        report_lines.extend([
            "",
            "## Price Analysis",
            f"- **Average Price:** £{avg_price:,.0f}",
            f"- **Median Price:** £{median_price:,.0f}",
            f"- **Price Range:** £{min(prices):,.0f} - £{max(prices):,.0f}",
            f"- **Properties with Pricing:** {len(prices)} of {len(properties)} ({(len(prices)/len(properties)*100):.1f}%)",
        ])
        
        # Price by area analysis
        area_prices = {}
        for item in price_data:
            area = item['area']
            if area not in area_prices:
                area_prices[area] = []
            area_prices[area].append(item['price'])
        
        report_lines.extend([
            "",
            "### Average Prices by Area",
        ])
        
        for area, prices in sorted(area_prices.items()):
            avg = sum(prices) / len(prices)
            report_lines.append(f"- **{area}:** £{avg:,.0f} average ({len(prices)} properties)")
    
    # Recent activity
    if recent_properties:
        report_lines.extend([
            "",
            f"## Recent Market Activity (Last 7 Days)",
            f"**{len(recent_properties)} new listings:**",
        ])
        for prop in recent_properties[:8]:  # Top 8 recent
            address = prop['address']
            price = prop['price']
            agent = prop['agent']
            report_lines.append(f"- **{address}** - {price} - *{agent}*")
    
    report_lines.extend([
        "",
        "## 📈 Strategic Recommendations for James Gorman Property",
        "",
        "### Immediate Opportunities",
        "1. **Target Smaller Agents:** Contact properties listed by agents with 1-2 listings",
        "2. **Monitor Price Leaders:** Track pricing strategies of top 3 competitors",
        "3. **Focus Areas:** Concentrate marketing in Derry City and Waterside (highest volumes)",
        "",
        "### Market Positioning",
        f"- Current market has {len(agent_stats)} active agents",
        f"- Top 5 agents control {sum([agent_stats[agent] for agent in james_competitors])}/{len(properties)} listings ({(sum([agent_stats[agent] for agent in james_competitors])/len(properties)*100):.1f}%)",
        "- Opportunity exists in the mid-tier market segment",
        "",
        "### Next Steps",
        "1. **Weekly Monitoring:** Run this report weekly to track market changes",
        "2. **Price Tracking:** Monitor price adjustments and sale agreements", 
        "3. **Lead Generation:** Contact sellers using smaller agents",
        "4. **Competitive Analysis:** Study marketing approaches of top performers",
        "",
        "---",
        "*Report generated by PropertyPal Market Intelligence Tool*",
        f"*For James Gorman Property - {datetime.now().strftime('%d/%m/%Y')}*"
    ])
    
    with open(filename, 'w', encoding='utf-8') as f:
        f.write('\n'.join(report_lines))

if __name__ == "__main__":
    save_sample_data()