#!/usr/bin/env python3
"""
Quick GSC data pull for bluecanvas.ai - past 7 days
"""
import json
import subprocess
import sys
from datetime import datetime, timedelta
from urllib.parse import urlencode
import urllib.request
import urllib.error

# OAuth2 credentials
CLIENT_ID = "815883685833-4knpfsihds6kmkr895ak8uvs8qtgfo2f.apps.googleusercontent.com"
CLIENT_SECRET = "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"
REDIRECT_URI = "http://localhost"
SCOPES = "https://www.googleapis.com/auth/webmasters.readonly"

# GSC API settings
SITE_URL = "https://www.bluecanvas.ai/"
END_DATE = datetime.now().strftime("%Y-%m-%d")
START_DATE = (datetime.now() - timedelta(days=7)).strftime("%Y-%m-%d")

def get_access_token():
    """Get fresh access token via OAuth2 flow"""
    print("🔑 Getting access token...")
    
    # Step 1: Get authorization code
    auth_url = (
        f"https://accounts.google.com/o/oauth2/auth?"
        f"client_id={CLIENT_ID}&"
        f"redirect_uri={REDIRECT_URI}&"
        f"scope={SCOPES}&"
        f"response_type=code&"
        f"access_type=offline"
    )
    
    print(f"📂 Open this URL in browser:\n{auth_url}\n")
    auth_code = input("📋 Paste authorization code: ").strip()
    
    # Step 2: Exchange code for tokens
    token_data = {
        "client_id": CLIENT_ID,
        "client_secret": CLIENT_SECRET,
        "redirect_uri": REDIRECT_URI,
        "grant_type": "authorization_code",
        "code": auth_code
    }
    
    req_data = urlencode(token_data).encode('utf-8')
    req = urllib.request.Request(
        "https://oauth2.googleapis.com/token",
        data=req_data,
        headers={'Content-Type': 'application/x-www-form-urlencoded'}
    )
    
    try:
        with urllib.request.urlopen(req) as response:
            tokens = json.loads(response.read().decode())
            return tokens['access_token']
    except Exception as e:
        print(f"❌ Token exchange failed: {e}")
        sys.exit(1)

def fetch_gsc_data(access_token):
    """Pull GSC data for past 7 days"""
    print(f"📊 Fetching GSC data ({START_DATE} to {END_DATE})...")
    
    # Query payload
    query_data = {
        "startDate": START_DATE,
        "endDate": END_DATE,
        "dimensions": ["date"],
        "rowLimit": 30
    }
    
    # API request
    req_data = json.dumps(query_data).encode('utf-8')
    req = urllib.request.Request(
        f"https://www.googleapis.com/webmasters/v3/sites/{urllib.parse.quote(SITE_URL, safe='')}/searchAnalytics/query",
        data=req_data,
        headers={
            'Authorization': f'Bearer {access_token}',
            'Content-Type': 'application/json'
        }
    )
    
    try:
        with urllib.request.urlopen(req) as response:
            data = json.loads(response.read().decode())
            return data
    except urllib.error.HTTPError as e:
        print(f"❌ GSC API error: {e.code} {e.reason}")
        print(f"Response: {e.read().decode()}")
        sys.exit(1)
    except Exception as e:
        print(f"❌ Request failed: {e}")
        sys.exit(1)

def format_trend_summary(data):
    """Format GSC data as brief trend summary"""
    if 'rows' not in data or not data['rows']:
        return "📋 **GSC Data (Past 7 Days):** No search data found for bluecanvas.ai"
    
    rows = data['rows']
    total_clicks = sum(row['clicks'] for row in rows)
    total_impressions = sum(row['impressions'] for row in rows)
    avg_ctr = (total_clicks / total_impressions * 100) if total_impressions > 0 else 0
    avg_position = sum(row['position'] for row in rows) / len(rows) if rows else 0
    
    # Trend analysis (compare first 3 vs last 3 days)
    if len(rows) >= 6:
        first_half = rows[:3]
        last_half = rows[-3:]
        
        first_clicks = sum(row['clicks'] for row in first_half)
        last_clicks = sum(row['clicks'] for row in last_half)
        
        if first_clicks > 0:
            click_trend = ((last_clicks - first_clicks) / first_clicks * 100)
            trend_emoji = "📈" if click_trend > 0 else "📉" if click_trend < -5 else "➡️"
            trend_text = f" ({trend_emoji} {click_trend:+.1f}%)"
        else:
            trend_text = ""
    else:
        trend_text = ""
    
    summary = f"""📋 **GSC Data - bluecanvas.ai (Past 7 Days)**
• **Clicks:** {total_clicks:,}{trend_text}
• **Impressions:** {total_impressions:,}
• **CTR:** {avg_ctr:.1f}%
• **Avg Position:** {avg_position:.1f}
• **Period:** {START_DATE} to {END_DATE}"""
    
    return summary

if __name__ == "__main__":
    try:
        access_token = get_access_token()
        gsc_data = fetch_gsc_data(access_token)
        summary = format_trend_summary(gsc_data)
        print(f"\n{summary}")
    except KeyboardInterrupt:
        print("\n❌ Cancelled")
        sys.exit(1)