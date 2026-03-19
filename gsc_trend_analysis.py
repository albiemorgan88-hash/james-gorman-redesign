#!/usr/bin/env python3
"""
Google Search Console Trend Analysis for bluecanvas.ai
Compare last 7 days vs previous 7 days to identify trends.
"""

import requests
import json
import sys
from datetime import datetime, timedelta

# Load OAuth2 tokens
with open('/Users/philsagent/.config/google-analytics-tokens.json', 'r') as f:
    tokens = json.load(f)

def refresh_token_if_needed():
    """Refresh OAuth2 token if expired"""
    try:
        # Try to make a test request to check if token is valid
        headers = {'Authorization': f'Bearer {tokens["access_token"]}'}
        response = requests.get(
            'https://www.googleapis.com/webmasters/v3/sites',
            headers=headers
        )
        
        if response.status_code == 401:
            print("Token expired, refreshing...")
            # Refresh token
            refresh_data = {
                'client_id': tokens['client_id'],
                'client_secret': tokens['client_secret'],
                'refresh_token': tokens['refresh_token'],
                'grant_type': 'refresh_token'
            }
            
            refresh_response = requests.post(
                'https://oauth2.googleapis.com/token',
                data=refresh_data
            )
            
            if refresh_response.status_code == 200:
                new_tokens = refresh_response.json()
                tokens['access_token'] = new_tokens['access_token']
                print("Token refreshed successfully")
                return True
            else:
                print(f"Failed to refresh token: {refresh_response.text}")
                return False
        else:
            print("Token is valid")
            return True
            
    except Exception as e:
        print(f"Error checking/refreshing token: {e}")
        return False

def get_gsc_data(start_date, end_date, period_name):
    """Get Search Console data for a date range"""
    site_url = 'https://bluecanvas.ai/'
    
    headers = {
        'Authorization': f'Bearer {tokens["access_token"]}',
        'Content-Type': 'application/json'
    }
    
    # Get overall performance
    payload = {
        "startDate": start_date,
        "endDate": end_date,
        "dimensions": [],  # No dimensions for totals
        "rowLimit": 1
    }
    
    response = requests.post(
        f'https://www.googleapis.com/webmasters/v3/sites/{site_url}/searchAnalytics/query',
        headers=headers,
        json=payload
    )
    
    if response.status_code != 200:
        print(f"Error fetching GSC data: {response.status_code} - {response.text}")
        return None
    
    data = response.json()
    
    # Get totals (first row will have aggregated data)
    if 'rows' in data and len(data['rows']) > 0:
        totals = data['rows'][0]
    else:
        # No data for this period
        totals = {'clicks': 0, 'impressions': 0, 'ctr': 0, 'position': 0}
    
    # Get top queries for this period
    payload_queries = {
        "startDate": start_date,
        "endDate": end_date,
        "dimensions": ["query"],
        "rowLimit": 10
    }
    
    response_queries = requests.post(
        f'https://www.googleapis.com/webmasters/v3/sites/{site_url}/searchAnalytics/query',
        headers=headers,
        json=payload_queries
    )
    
    top_queries = []
    if response_queries.status_code == 200:
        queries_data = response_queries.json()
        if 'rows' in queries_data:
            top_queries = queries_data['rows']
    
    return {
        'period': period_name,
        'start_date': start_date,
        'end_date': end_date,
        'totals': totals,
        'top_queries': top_queries
    }

def calculate_trend(current, previous, metric):
    """Calculate percentage change"""
    if previous == 0:
        return "∞" if current > 0 else "0%"
    
    change = ((current - previous) / previous) * 100
    return f"{change:+.1f}%"

def main():
    # Calculate date ranges
    today = datetime.now().date()
    
    # Last 7 days (excluding today to get complete data)
    current_end = today - timedelta(days=1)
    current_start = current_end - timedelta(days=6)
    
    # Previous 7 days 
    previous_end = current_start - timedelta(days=1)
    previous_start = previous_end - timedelta(days=6)
    
    print("=" * 60)
    print("GOOGLE SEARCH CONSOLE TREND ANALYSIS")
    print("bluecanvas.ai")
    print("=" * 60)
    
    # Refresh token if needed
    if not refresh_token_if_needed():
        print("Failed to authenticate with Google APIs")
        sys.exit(1)
    
    print(f"\nAnalyzing trends:")
    print(f"Current period: {current_start} to {current_end} (7 days)")
    print(f"Previous period: {previous_start} to {previous_end} (7 days)")
    print()
    
    # Get data for both periods
    current_data = get_gsc_data(
        current_start.strftime('%Y-%m-%d'),
        current_end.strftime('%Y-%m-%d'),
        "Last 7 Days"
    )
    
    previous_data = get_gsc_data(
        previous_start.strftime('%Y-%m-%d'),
        previous_end.strftime('%Y-%m-%d'),
        "Previous 7 Days"
    )
    
    if not current_data or not previous_data:
        print("Failed to fetch Search Console data")
        sys.exit(1)
    
    # Extract metrics
    current_totals = current_data['totals']
    previous_totals = previous_data['totals']
    
    # Calculate trends
    clicks_trend = calculate_trend(
        current_totals['clicks'], 
        previous_totals['clicks'], 
        'clicks'
    )
    impressions_trend = calculate_trend(
        current_totals['impressions'], 
        previous_totals['impressions'], 
        'impressions'
    )
    
    current_ctr = current_totals['ctr'] * 100
    previous_ctr = previous_totals['ctr'] * 100
    ctr_change = current_ctr - previous_ctr
    
    current_position = current_totals['position']
    previous_position = previous_totals['position']
    position_change = current_position - previous_position
    
    # Display results
    print("📊 PERFORMANCE SUMMARY")
    print("-" * 40)
    print(f"Clicks:      {current_totals['clicks']:,} ({clicks_trend})")
    print(f"             Previous: {previous_totals['clicks']:,}")
    print()
    print(f"Impressions: {current_totals['impressions']:,} ({impressions_trend})")
    print(f"             Previous: {previous_totals['impressions']:,}")
    print()
    print(f"CTR:         {current_ctr:.2f}% ({ctr_change:+.2f}pp)")
    print(f"             Previous: {previous_ctr:.2f}%")
    print()
    print(f"Avg Position: {current_position:.1f} ({position_change:+.1f})")
    print(f"              Previous: {previous_position:.1f}")
    print()
    
    # Show trend indicators
    print("🔍 TREND ANALYSIS")
    print("-" * 40)
    
    if current_totals['clicks'] > previous_totals['clicks']:
        print("✅ Clicks trending UP")
    elif current_totals['clicks'] < previous_totals['clicks']:
        print("📉 Clicks trending DOWN")
    else:
        print("➡️  Clicks FLAT")
    
    if current_totals['impressions'] > previous_totals['impressions']:
        print("✅ Impressions trending UP")
    elif current_totals['impressions'] < previous_totals['impressions']:
        print("📉 Impressions trending DOWN")
    else:
        print("➡️  Impressions FLAT")
    
    if ctr_change > 0.1:
        print("✅ CTR improving")
    elif ctr_change < -0.1:
        print("📉 CTR declining")
    else:
        print("➡️  CTR stable")
    
    if position_change < -0.5:
        print("✅ Average position improving (lower is better)")
    elif position_change > 0.5:
        print("📉 Average position declining")
    else:
        print("➡️  Position stable")
    
    # Show top queries for current period
    print(f"\n🎯 TOP QUERIES ({current_data['period']})")
    print("-" * 40)
    
    if current_data['top_queries']:
        for i, query_data in enumerate(current_data['top_queries'], 1):
            query = query_data['keys'][0]
            clicks = query_data['clicks']
            impressions = query_data['impressions']
            ctr = query_data['ctr'] * 100
            position = query_data['position']
            
            print(f"{i:2d}. {query}")
            print(f"    {clicks} clicks, {impressions:,} impressions, {ctr:.1f}% CTR, pos {position:.1f}")
            print()
    else:
        print("No query data available for this period")
    
    print("=" * 60)

if __name__ == "__main__":
    main()