#!/usr/bin/env python3
"""
Google Ads Performance Check for Blue Canvas - Yesterday (March 27, 2026)
Account: 801-851-4760 | MONITORING ONLY - NO CHANGES
"""

import os
import sys
from datetime import datetime, timedelta
from google.ads.googleads.client import GoogleAdsClient
from google.ads.googleads.errors import GoogleAdsException

# Config
CUSTOMER_ID = os.environ.get("GOOGLE_ADS_ACCOUNT_ID", "801-851-4760").replace("-", "")
TARGET_DATE = "2026-03-27"  # Yesterday

# Safety check
assert CUSTOMER_ID == "8018514760", f"WRONG ACCOUNT! Got {CUSTOMER_ID}. Aborting."

def get_client():
    config = {
        "developer_token": os.environ["GOOGLE_ADS_DEVELOPER_TOKEN"],
        "client_id": os.environ["GOOGLE_ADS_CLIENT_ID"],
        "client_secret": os.environ["GOOGLE_ADS_CLIENT_SECRET"],
        "refresh_token": os.environ["GOOGLE_ADS_REFRESH_TOKEN"],
        "use_proto_plus": True,
    }
    return GoogleAdsClient.load_from_dict(config, version="v23")

def query(client, query_text):
    service = client.get_service("GoogleAdsService")
    results = []
    try:
        response = service.search_stream(customer_id=CUSTOMER_ID, query=query_text)
        for batch in response:
            for row in batch.results:
                results.append(row)
    except GoogleAdsException as ex:
        print(f"❌ API Error: {ex.failure.errors[0].message}", file=sys.stderr)
        raise
    return results

def analyze_performance(data):
    """Analyze performance data and flag concerning trends"""
    issues = []
    recommendations = []
    
    if not data:
        return ["❌ No account data retrieved"], []
    
    # Extract key metrics
    spend = data.get('cost_pounds', 0)
    clicks = data.get('clicks', 0)
    impressions = data.get('impressions', 0)
    ctr = data.get('ctr_percent', 0)
    conversions = data.get('conversions', 0)
    conversion_rate = data.get('conversion_rate', 0)
    avg_cpc = data.get('avg_cpc_pounds', 0)
    
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
    
    if spend > 50:  # Daily budget threshold
        issues.append(f"💸 High daily spend: £{spend}")
        recommendations.append("Review budget allocation and campaign performance")
    
    if impressions > 0 and clicks == 0:
        issues.append("❌ Impressions with no clicks - relevance issue")
        recommendations.append("Review keyword relevance and ad copy")
    
    if spend > 20 and conversions == 0:
        issues.append(f"🔴 Spent £{spend} with no conversions")
        recommendations.append("Check conversion tracking and landing page performance")
    
    return issues, recommendations

def main():
    print(f"🔍 Google Ads Performance Check for Blue Canvas")
    print(f"📅 Date: {TARGET_DATE} (March 27, 2026)")
    print(f"🏢 Account: 801-851-4760")
    print(f"⚠️  MONITORING ONLY - NO CHANGES WILL BE MADE")
    print("-" * 60)
    
    try:
        client = get_client()
        
        # Account-level performance for yesterday
        print("📊 Pulling account performance...")
        
        rows = query(client, f"""
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
            WHERE segments.date = '{TARGET_DATE}'
        """)
        
        account_data = {}
        for row in rows:
            account_data = {
                'date': str(row.segments.date),
                'impressions': row.metrics.impressions,
                'clicks': row.metrics.clicks,
                'ctr_percent': round(row.metrics.ctr * 100, 2),
                'cost_pounds': round(row.metrics.cost_micros / 1_000_000, 2),
                'conversions': row.metrics.conversions,
                'conversion_rate': round(row.metrics.conversion_rate * 100, 2),
                'avg_cpc_pounds': round(row.metrics.average_cpc / 1_000_000, 2)
            }
            break
        
        # Campaign-level performance
        print("🎯 Pulling campaign performance...")
        
        rows = query(client, f"""
            SELECT
                campaign.name,
                campaign.status,
                metrics.impressions,
                metrics.clicks,
                metrics.ctr,
                metrics.cost_micros,
                metrics.conversions,
                metrics.conversion_rate,
                metrics.average_cpc
            FROM campaign
            WHERE segments.date = '{TARGET_DATE}'
            ORDER BY metrics.cost_micros DESC
        """)
        
        campaigns = []
        for row in rows:
            campaign_data = {
                'name': row.campaign.name,
                'status': row.campaign.status.name,
                'impressions': row.metrics.impressions,
                'clicks': row.metrics.clicks,
                'ctr': round(row.metrics.ctr * 100, 2),
                'spend': round(row.metrics.cost_micros / 1_000_000, 2),
                'conversions': row.metrics.conversions,
                'conversion_rate': round(row.metrics.conversion_rate * 100, 2),
                'avg_cpc': round(row.metrics.average_cpc / 1_000_000, 2)
            }
            campaigns.append(campaign_data)
        
        # Display results
        print("\n📊 ACCOUNT PERFORMANCE")
        if account_data:
            print(f"Impressions: {account_data['impressions']:,}")
            print(f"Clicks: {account_data['clicks']:,}")
            print(f"CTR: {account_data['ctr_percent']}%")
            print(f"Spend: £{account_data['cost_pounds']}")
            print(f"Conversions: {account_data['conversions']}")
            print(f"Conversion Rate: {account_data['conversion_rate']}%")
            print(f"Avg CPC: £{account_data['avg_cpc_pounds']}")
        else:
            print("❌ No account data available for yesterday")
            account_data = {}
        
        print("\n🎯 CAMPAIGN BREAKDOWN")
        if campaigns:
            for campaign in campaigns:
                print(f"• {campaign['name']} ({campaign['status']})")
                print(f"  Spend: £{campaign['spend']} | Clicks: {campaign['clicks']} | CTR: {campaign['ctr']}% | Conv: {campaign['conversions']}")
        else:
            print("❌ No campaign data available for yesterday")
        
        # Analysis
        issues, recommendations = analyze_performance(account_data)
        
        print("\n" + "="*60)
        print("📋 PERFORMANCE ANALYSIS")
        print("="*60)
        
        if issues:
            print("\n⚠️ ISSUES FLAGGED")
            for issue in issues:
                print(f"  {issue}")
        
        if recommendations:
            print("\n💡 RECOMMENDATIONS")
            for rec in recommendations:
                print(f"  • {rec}")
        
        if not issues:
            print("\n✅ No concerning trends detected")
        
        # Summary
        print("\n" + "="*60)
        print("📝 SUMMARY")
        print("="*60)
        
        total_spend = account_data.get('cost_pounds', 0)
        total_clicks = account_data.get('clicks', 0)
        total_conversions = account_data.get('conversions', 0)
        
        print(f"Yesterday (March 27, 2026) Blue Canvas spent £{total_spend} on Google Ads")
        print(f"Generated {total_clicks} clicks and {total_conversions} conversions")
        
        if total_conversions > 0:
            cost_per_conversion = total_spend / total_conversions
            print(f"Cost per conversion: £{cost_per_conversion:.2f}")
        
        if total_spend > 0:
            if total_conversions == 0:
                print("🔴 No conversions generated - investigate conversion tracking and landing page")
            elif total_spend / total_conversions < 50:  # Good cost per conversion
                print("✅ Good performance - conversions at reasonable cost")
            else:
                print("⚠️ High cost per conversion - optimization needed")
        
        print(f"\nCampaigns monitored: {len(campaigns)}")
        active_campaigns = [c for c in campaigns if c['status'] == 'ENABLED']
        print(f"Active campaigns: {len(active_campaigns)}")
        
        if len(campaigns) != len(active_campaigns):
            print("⚠️ Some campaigns are not active - check campaign statuses")
        
    except Exception as e:
        print(f"\n❌ ERROR: {str(e)}")
        print("\nTroubleshooting:")
        print("• Check API credentials in ~/.zprofile")
        print("• Verify account access permissions")
        print("• Ensure account has data for yesterday")

if __name__ == "__main__":
    main()