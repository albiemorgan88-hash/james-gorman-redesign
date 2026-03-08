#!/usr/bin/env python3
"""
Simple OAuth callback server.
Captures the auth code from Google's redirect and exchanges it for tokens.
"""
import http.server
import urllib.parse
import json
import os
import sys

CLIENT_ID = os.environ.get('GOOGLE_ADS_CLIENT_ID', '')
CLIENT_SECRET = os.environ.get('GOOGLE_ADS_CLIENT_SECRET', '')
PORT = 8765

class CallbackHandler(http.server.BaseHTTPRequestHandler):
    def do_GET(self):
        parsed = urllib.parse.urlparse(self.path)
        if parsed.path == '/callback':
            params = urllib.parse.parse_qs(parsed.query)
            if 'code' in params:
                code = params['code'][0]
                print(f"\n✅ Got auth code: {code[:20]}...")
                
                # Exchange code for tokens
                import urllib.request
                data = urllib.parse.urlencode({
                    'code': code,
                    'client_id': CLIENT_ID,
                    'client_secret': CLIENT_SECRET,
                    'redirect_uri': f'http://localhost:{PORT}/callback',
                    'grant_type': 'authorization_code',
                }).encode()
                
                req = urllib.request.Request('https://oauth2.googleapis.com/token', data=data)
                try:
                    resp = urllib.request.urlopen(req)
                    tokens = json.loads(resp.read())
                    refresh_token = tokens.get('refresh_token', 'NOT_RETURNED')
                    
                    print(f"\n🔑 NEW REFRESH TOKEN:\n{refresh_token}\n")
                    print("Scopes:", tokens.get('scope', 'unknown'))
                    
                    self.send_response(200)
                    self.send_header('Content-Type', 'text/html')
                    self.end_headers()
                    self.wfile.write(f"""
                    <html><body style="font-family:system-ui;padding:40px;text-align:center">
                    <h1>✅ OAuth Complete!</h1>
                    <p>Refresh token captured. You can close this tab.</p>
                    <pre style="background:#f0f0f0;padding:20px;text-align:left;word-break:break-all">{refresh_token}</pre>
                    <p>Scopes: {tokens.get('scope','')}</p>
                    </body></html>""".encode())
                    
                    # Write to file for easy retrieval
                    with open('/tmp/google_oauth_result.json', 'w') as f:
                        json.dump(tokens, f, indent=2)
                    print("Token saved to /tmp/google_oauth_result.json")
                    
                except Exception as e:
                    print(f"❌ Token exchange failed: {e}")
                    self.send_response(500)
                    self.send_header('Content-Type', 'text/html')
                    self.end_headers()
                    self.wfile.write(f"<html><body><h1>Error</h1><pre>{e}</pre></body></html>".encode())
            elif 'error' in params:
                print(f"❌ OAuth error: {params['error'][0]}")
                self.send_response(400)
                self.end_headers()
            else:
                self.send_response(400)
                self.end_headers()
        else:
            self.send_response(404)
            self.end_headers()
    
    def log_message(self, format, *args):
        pass  # Suppress default logging

print(f"🚀 OAuth callback server listening on http://localhost:{PORT}/callback")
print("Waiting for Google to redirect back...")
server = http.server.HTTPServer(('', PORT), CallbackHandler)
server.handle_request()  # Handle one request then exit
print("\nServer stopped.")
