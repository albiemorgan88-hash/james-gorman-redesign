#!/usr/bin/env python3
"""
Google Ads performance report for yesterday
Account: 801-851-4760
Date: March 18, 2026
"""

import os
from google.ads.googleads.client import GoogleAdsClient
from datetime import datetime, timedelta

def main():
    # Set up credentials
    credentials = {
        "developer_token": os.getenv("GOOGLE_ADS_DEVELOPER_TOKEN"),
        "refresh_token": os.getenv("GOOGLE_ADS_REFRESH_TOKEN"),
        "client_id": os.getenv("GOOGLE_ADS_CLIENT_ID"),
        "client_secret": os.getenv("GOOGLE_ADS_CLIENT_SECRET"),
        "login_customer_id": os.getenv("GOOGLE_ADS_MANAGER_ID").replace("-", ""),
        "use_proto_plus": True,
    }
    
    client = GoogleAdsClient.load_from_dict(credentials)
    customer_id = os.getenv("GOOGLE_ADS_ACCOUNT_ID").replace("-", "")
    
    # Yesterday's date (March 18, 2026)
    yesterday = "2026-03-18"
    
    # Build the query for account-level performance
    query = f"""
        SELECT
            metrics.cost_micros,
            metrics.clicks,
            metrics.impressions,
            metrics.ctr,
            metrics.conversions,
            metrics.conversions_value,
            metrics.all_conversions,
            metrics.all_conversions_value
        FROM account_performance_view
        WHERE segments.date = '{yesterday}'
    """
    
    try:
        ga_service = client.get_service("GoogleAdsService")
        response = ga_service.search(customer_id=customer_id, query=query)
        
        print(f"🔍 Google Ads Performance Report")
        print(f"📅 Date: {yesterday} (March 18, 2026)")
        print(f"🎯 Account: {os.getenv('GOOGLE_ADS_ACCOUNT_ID')}")
        print("=" * 50)
        
        total_spend = 0
        total_clicks = 0
        total_impressions = 0
        total_conversions = 0
        total_conv_value = 0
        total_all_conversions = 0
        total_all_conv_value = 0
        
        row_count = 0
        for row in response:
            row_count += 1
            metrics = row.metrics
            
            # Convert cost from micros to currency
            spend = metrics.cost_micros / 1_000_000
            total_spend += spend
            total_clicks += metrics.clicks
            total_impressions += metrics.impressions
            total_conversions += metrics.conversions
            total_conv_value += metrics.conversions_value
            total_all_conversions += metrics.all_conversions
            total_all_conv_value += metrics.all_conversions_value
        
        if row_count == 0:
            print("❌ No data found for yesterday")
            return
        
        # Calculate CTR
        ctr = (total_clicks / total_impressions * 100) if total_impressions > 0 else 0
        
        print(f"💰 Spend: £{total_spend:.2f}")
        print(f"👆 Clicks: {total_clicks:,}")
        print(f"👀 Impressions: {total_impressions:,}")
        print(f"📊 CTR: {ctr:.2f}%")
        print(f"🎯 Conversions: {total_conversions}")
        if total_conv_value > 0:
            print(f"💵 Conversion Value: £{total_conv_value:.2f}")
        print(f"🌟 All Conversions: {total_all_conversions}")
        if total_all_conv_value > 0:
            print(f"💸 All Conversion Value: £{total_all_conv_value:.2f}")
        
        # Calculate some metrics
        if total_clicks > 0:
            cpc = total_spend / total_clicks
            print(f"💳 Avg CPC: £{cpc:.2f}")
        
        if total_impressions > 0:
            cpm = total_spend / total_impressions * 1000
            print(f"📺 CPM: £{cpm:.2f}")
        
        if total_conversions > 0:
            cpa = total_spend / total_conversions
            print(f"🎯 CPA: £{cpa:.2f}")
        
    except Exception as e:
        print(f"❌ Error fetching data: {e}")
        return

if __name__ == "__main__":
    main()