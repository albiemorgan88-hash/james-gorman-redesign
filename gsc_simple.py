#!/usr/bin/env python3
"""
Quick GSC data fetch using existing tokens
"""
import json
import urllib.request
import urllib.error
import urllib.parse
from datetime import datetime, timedelta

# Load tokens
with open('/Users/philsagent/.config/google-analytics-tokens.json', 'r') as f:
    tokens = json.load(f)

# Date range (past 7 days)
end_date = datetime.now().strftime("%Y-%m-%d")
start_date = (datetime.now() - timedelta(days=7)).strftime("%Y-%m-%d")

print(f"📊 Fetching GSC data for bluecanvas.ai ({start_date} to {end_date})")

# Query payload
query_data = {
    "startDate": start_date,
    "endDate": end_date,
    "dimensions": ["date"],
    "rowLimit": 10
}

# Site URL (try domain property first)
site_urls = [
    "sc-domain:bluecanvas.ai",
    "https://www.bluecanvas.ai/",
    "https://bluecanvas.ai/"
]

def refresh_token(refresh_token, client_id, client_secret):
    """Refresh access token"""
    data = {
        'client_id': client_id,
        'client_secret': client_secret,
        'refresh_token': refresh_token,
        'grant_type': 'refresh_token'
    }
    
    req_data = urllib.parse.urlencode(data).encode('utf-8')
    req = urllib.request.Request(
        'https://oauth2.googleapis.com/token',
        data=req_data,
        headers={'Content-Type': 'application/x-www-form-urlencoded'}
    )
    
    with urllib.request.urlopen(req) as response:
        result = json.loads(response.read().decode())
        return result['access_token']

def try_fetch_gsc(site_url, access_token):
    """Try to fetch GSC data for a site URL"""
    encoded_url = urllib.parse.quote(site_url, safe='')
    api_url = f"https://www.googleapis.com/webmasters/v3/sites/{encoded_url}/searchAnalytics/query"
    
    req_data = json.dumps(query_data).encode('utf-8')
    req = urllib.request.Request(
        api_url,
        data=req_data,
        headers={
            'Authorization': f'Bearer {access_token}',
            'Content-Type': 'application/json'
        }
    )
    
    try:
        with urllib.request.urlopen(req) as response:
            data = json.loads(response.read().decode())
            return data, None
    except urllib.error.HTTPError as e:
        error = e.read().decode()
        return None, f"{e.code}: {error}"

# Try current token first
access_token = tokens['access_token']

success = False
for site_url in site_urls:
    print(f"🔍 Trying site: {site_url}")
    
    data, error = try_fetch_gsc(site_url, access_token)
    
    if data is not None:
        print(f"✅ Success with {site_url}")
        success = True
        break
    elif "401" in str(error):
        print("🔄 Token expired, refreshing...")
        try:
            access_token = refresh_token(
                tokens['refresh_token'], 
                tokens['client_id'], 
                tokens['client_secret']
            )
            data, error = try_fetch_gsc(site_url, access_token)
            if data is not None:
                print(f"✅ Success with {site_url} (after refresh)")
                success = True
                break
        except Exception as e:
            print(f"❌ Token refresh failed: {e}")
    
    print(f"❌ Failed: {error}")

if not success:
    print("❌ Could not fetch GSC data from any site URL")
    exit(1)

# Format results
if 'rows' not in data or not data['rows']:
    print("\n📋 **GSC Summary:** No search data found for bluecanvas.ai (past 7 days)")
else:
    rows = data['rows']
    total_clicks = sum(row['clicks'] for row in rows)
    total_impressions = sum(row['impressions'] for row in rows)
    avg_ctr = (total_clicks / total_impressions * 100) if total_impressions > 0 else 0
    avg_position = sum(row['position'] for row in rows) / len(rows) if rows else 0
    
    # Day-by-day breakdown
    daily_data = []
    for row in rows:
        date = row['keys'][0]
        daily_data.append(f"  • {date}: {row['clicks']} clicks, {row['impressions']} impressions")
    
    print(f"""
📋 **GSC Data - bluecanvas.ai (Past 7 Days)**

**Totals:**
• Clicks: {total_clicks:,}
• Impressions: {total_impressions:,}
• CTR: {avg_ctr:.1f}%
• Avg Position: {avg_position:.1f}

**Daily Breakdown:**
{chr(10).join(daily_data)}

**Period:** {start_date} to {end_date}
""")

print("✅ GSC data retrieved successfully")