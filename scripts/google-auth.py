#!/usr/bin/env python3
"""
Google OAuth2 authentication for GA4 and Search Console APIs
"""

import json
import os
import sys
from urllib.parse import urlencode, parse_qs
from urllib.request import urlopen, Request
import webbrowser
import http.server
import socketserver
from urllib.parse import urlparse

# OAuth2 configuration
SCOPES = [
    'https://www.googleapis.com/auth/analytics.readonly',
    'https://www.googleapis.com/auth/webmasters.readonly'
]

def load_credentials():
    """Load OAuth2 credentials from ~/.config/gcp-oauth.keys.json"""
    creds_path = os.path.expanduser('~/.config/gcp-oauth.keys.json')
    with open(creds_path, 'r') as f:
        return json.load(f)['installed']

def get_auth_url(client_id, redirect_uri='http://localhost:8080'):
    """Generate OAuth2 authorization URL"""
    params = {
        'client_id': client_id,
        'redirect_uri': redirect_uri,
        'scope': ' '.join(SCOPES),
        'response_type': 'code',
        'access_type': 'offline',
        'prompt': 'consent'
    }
    return f"https://accounts.google.com/o/oauth2/auth?{urlencode(params)}"

def exchange_code_for_token(code, client_id, client_secret, redirect_uri='http://localhost:8080'):
    """Exchange authorization code for access token"""
    data = urlencode({
        'client_id': client_id,
        'client_secret': client_secret,
        'code': code,
        'grant_type': 'authorization_code',
        'redirect_uri': redirect_uri
    }).encode()
    
    req = Request('https://oauth2.googleapis.com/token', data=data)
    req.add_header('Content-Type', 'application/x-www-form-urlencoded')
    
    with urlopen(req) as response:
        return json.loads(response.read().decode())

def refresh_token(refresh_token, client_id, client_secret):
    """Refresh access token using refresh token"""
    data = urlencode({
        'client_id': client_id,
        'client_secret': client_secret,
        'refresh_token': refresh_token,
        'grant_type': 'refresh_token'
    }).encode()
    
    req = Request('https://oauth2.googleapis.com/token', data=data)
    req.add_header('Content-Type', 'application/x-www-form-urlencoded')
    
    with urlopen(req) as response:
        return json.loads(response.read().decode())

def save_tokens(tokens):
    """Save tokens to file"""
    token_path = os.path.expanduser('~/.openclaw/workspace/google-tokens.json')
    with open(token_path, 'w') as f:
        json.dump(tokens, f, indent=2)
    os.chmod(token_path, 0o600)
    print(f"Tokens saved to {token_path}")

def load_tokens():
    """Load existing tokens"""
    token_path = os.path.expanduser('~/.openclaw/workspace/google-tokens.json')
    if os.path.exists(token_path):
        with open(token_path, 'r') as f:
            return json.load(f)
    return None

def main():
    credentials = load_credentials()
    client_id = credentials['client_id']
    client_secret = credentials['client_secret']
    
    # Try to load existing tokens
    existing_tokens = load_tokens()
    if existing_tokens and 'refresh_token' in existing_tokens:
        print("Found existing refresh token, attempting to refresh...")
        try:
            new_tokens = refresh_token(
                existing_tokens['refresh_token'],
                client_id,
                client_secret
            )
            # Keep the refresh token
            new_tokens['refresh_token'] = existing_tokens['refresh_token']
            save_tokens(new_tokens)
            print("✅ Tokens refreshed successfully!")
            return
        except Exception as e:
            print(f"❌ Token refresh failed: {e}")
            print("Proceeding with full OAuth flow...")
    
    # Start OAuth flow
    print("Starting Google OAuth2 flow...")
    auth_url = get_auth_url(client_id)
    print(f"\n🌐 Opening browser to: {auth_url}")
    webbrowser.open(auth_url)
    
    print("\n📋 After authorizing, copy the authorization code from the redirect URL")
    print("   (or paste the entire redirect URL)")
    
    user_input = input("\nPaste authorization code or full redirect URL: ").strip()
    
    # Extract code from input
    if user_input.startswith('http'):
        # Full URL provided
        parsed_url = urlparse(user_input)
        query_params = parse_qs(parsed_url.query)
        if 'code' in query_params:
            auth_code = query_params['code'][0]
        else:
            print("❌ No authorization code found in URL")
            sys.exit(1)
    else:
        # Just the code provided
        auth_code = user_input
    
    print(f"🔐 Exchanging code for tokens...")
    try:
        tokens = exchange_code_for_token(auth_code, client_id, client_secret)
        save_tokens(tokens)
        print("✅ Authentication successful!")
        print(f"Access token expires in {tokens.get('expires_in', 'unknown')} seconds")
        if 'refresh_token' in tokens:
            print("🔄 Refresh token saved for future use")
    except Exception as e:
        print(f"❌ Token exchange failed: {e}")
        sys.exit(1)

if __name__ == '__main__':
    main()