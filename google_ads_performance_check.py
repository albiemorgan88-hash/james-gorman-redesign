#!/usr/bin/env python3
"""
Google Ads Performance Check for Blue Canvas
Pulls performance data for account 801-851-4760 for yesterday (March 27, 2026)
"""

import os
from datetime import datetime, timedelta
from google.ads.googleads.client import GoogleAdsClient
from google.ads.googleads.errors import GoogleAdsException

def setup_client():
    """Setup Google Ads client with credentials from config file"""
    return GoogleAdsClient.load_from_storage("google_ads_config.yaml")

def get_account_performance(client, customer_id, date):
    """Get account-level performance metrics for specified date"""
    
    ga_service = client.get_service("GoogleAdsService")
    
    query = f"""
        SELECT
            metrics.impressions,
            metrics.clicks,
            metrics.ctr,
            metrics.cost_micros,
            metrics.conversions,
            metrics.conversion_rate,
            metrics.average_cpc,
            segments.date
        FROM account_performance_view
        WHERE segments.date = '{date}'
    """
    
    try:
        search_request = client.get_type("SearchGoogleAdsRequest")
        search_request.customer_id = customer_id
        search_request.query = query
        
        results = ga_service.search(request=search_request)
        
        performance_data = {}
        for row in results:
            performance_data = {
                'date': str(row.segments.date),
                'impressions': row.metrics.impressions,
                'clicks': row.metrics.clicks,
                'ctr': round(row.metrics.ctr * 100, 2),  # Convert to percentage
                'spend': round(row.metrics.cost_micros / 1_000_000, 2),  # Convert from micros
                'conversions': row.metrics.conversions,
                'conversion_rate': round(row.metrics.conversion_rate * 100, 2),  # Convert to percentage
                'avg_cpc': round(row.metrics.average_cpc / 1_000_000, 2)  # Convert from micros
            }
            break  # Should only be one row for account level
            
        return performance_data
        
    except GoogleAdsException as ex:
        print(f"Request failed with status {ex.error.code().name}")
        for error in ex.failure.errors:
            print(f"Error: {error.message}")
        return None

def get_campaign_performance(client, customer_id, date):
    """Get campaign-level performance to identify issues"""
    
    ga_service = client.get_service("GoogleAdsService")
    
    query = f"""
        SELECT
            campaign.name,
            campaign.status,
            metrics.impressions,
            metrics.clicks,
            metrics.ctr,
            metrics.cost_micros,
            metrics.conversions,
            segments.date
        FROM campaign
        WHERE segments.date = '{date}'
        ORDER BY metrics.cost_micros DESC
    """
    
    try:
        search_request = client.get_type("SearchGoogleAdsRequest")
        search_request.customer_id = customer_id
        search_request.query = query
        
        results = ga_service.search(request=search_request)
        
        campaigns = []
        for row in results:
            campaign_data = {
                'name': row.campaign.name,
                'status': row.campaign.status.name,
                'impressions': row.metrics.impressions,
                'clicks': row.metrics.clicks,
                'ctr': round(row.metrics.ctr * 100, 2),
                'spend': round(row.metrics.cost_micros / 1_000_000, 2),
                'conversions': row.metrics.conversions
            }
            campaigns.append(campaign_data)
            
        return campaigns
        
    except GoogleAdsException as ex:
        print(f"Campaign query failed with status {ex.error.code().name}")
        for error in ex.failure.errors:
            print(f"Error: {error.message}")
        return []

def analyze_performance(account_data, campaign_data):
    """Analyze performance and flag concerning trends"""
    
    issues = []
    recommendations = []
    
    if not account_data:
        return ["❌ No account data retrieved"], []
    
    # Account level analysis
    spend = account_data.get('spend', 0)
    clicks = account_data.get('clicks', 0)
    impressions = account_data.get('impressions', 0)
    ctr = account_data.get('ctr', 0)
    conversions = account_data.get('conversions', 0)
    conversion_rate = account_data.get('conversion_rate', 0)
    avg_cpc = account_data.get('avg_cpc', 0)
    
    # Flag concerning trends
    if ctr < 2.0:
        issues.append(f"⚠️ Low CTR: {ctr}% (industry average typically 3-5%)")
        recommendations.append("Review ad copy and targeting to improve relevance")
    
    if avg_cpc > 5.0:
        issues.append(f"💰 High Average CPC: £{avg_cpc} (may indicate high competition)")
        recommendations.append("Consider long-tail keywords or adjust bidding strategy")
    
    if conversion_rate < 1.0 and conversions > 0:
        issues.append(f"📉 Low conversion rate: {conversion_rate}%")
        recommendations.append("Review landing page experience and conversion tracking")
    
    if spend > 50:  # Arbitrary daily budget threshold
        issues.append(f"💸 High daily spend: £{spend}")
        recommendations.append("Review budget allocation and campaign performance")
    
    if impressions > 0 and clicks == 0:
        issues.append("❌ Impressions with no clicks - relevance issue")
        recommendations.append("Review keyword relevance and ad copy")
    
    # Campaign level analysis
    if campaign_data:
        for campaign in campaign_data:
            if campaign['status'] != 'ENABLED':
                issues.append(f"⏸️ Campaign '{campaign['name']}' is {campaign['status']}")
            
            if campaign['spend'] > 0 and campaign['clicks'] == 0:
                issues.append(f"💸 Campaign '{campaign['name']}' spending without clicks")
    
    return issues, recommendations

def main():
    # Get yesterday's date
    yesterday = datetime.now() - timedelta(days=1)
    date_string = yesterday.strftime('%Y-%m-%d')
    
    print(f"🔍 Checking Google Ads performance for Blue Canvas")
    print(f"📅 Date: {date_string} (yesterday)")
    print(f"🏢 Account: 801-851-4760")
    print("-" * 50)
    
    try:
        client = setup_client()
        customer_id = "8018514760"  # Remove hyphens for API
        
        # Get account performance
        account_data = get_account_performance(client, customer_id, date_string)
        
        # Get campaign performance  
        campaign_data = get_campaign_performance(client, customer_id, date_string)
        
        if account_data:
            print("📊 ACCOUNT PERFORMANCE")
            print(f"Impressions: {account_data['impressions']:,}")
            print(f"Clicks: {account_data['clicks']:,}")
            print(f"CTR: {account_data['ctr']}%")
            print(f"Spend: £{account_data['spend']}")
            print(f"Conversions: {account_data['conversions']}")
            print(f"Conversion Rate: {account_data['conversion_rate']}%")
            print(f"Avg CPC: £{account_data['avg_cpc']}")
            print()
        else:
            print("❌ No account data available for yesterday")
            print()
        
        if campaign_data:
            print("🎯 CAMPAIGN BREAKDOWN")
            for campaign in campaign_data:
                print(f"• {campaign['name']} ({campaign['status']})")
                print(f"  Spend: £{campaign['spend']} | Clicks: {campaign['clicks']} | CTR: {campaign['ctr']}%")
            print()
        
        # Analysis
        issues, recommendations = analyze_performance(account_data, campaign_data)
        
        if issues:
            print("⚠️ ISSUES FLAGGED")
            for issue in issues:
                print(f"  {issue}")
            print()
        
        if recommendations:
            print("💡 RECOMMENDATIONS")
            for rec in recommendations:
                print(f"  • {rec}")
            print()
        
        if not issues:
            print("✅ No concerning trends detected")
        
    except Exception as e:
        print(f"❌ Error: {str(e)}")
        print("\nTroubleshooting:")
        print("• Check API credentials in ~/.zprofile")
        print("• Verify account access permissions")
        print("• Ensure account has data for yesterday")

if __name__ == "__main__":
    main()