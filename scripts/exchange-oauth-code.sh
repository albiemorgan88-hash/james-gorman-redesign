#!/bin/bash
# Exchange OAuth authorization code for refresh token
# Usage: ./exchange-oauth-code.sh AUTH_CODE [REDIRECT_URI]
set -e

source ~/.zprofile

CODE="$1"
REDIRECT_URI="${2:-http://localhost:8765/callback}"

if [ -z "$CODE" ]; then
    echo "Usage: $0 AUTH_CODE [REDIRECT_URI]"
    echo "  REDIRECT_URI defaults to http://localhost:8765/callback"
    exit 1
fi

echo "Exchanging auth code for tokens..."
RESULT=$(curl -s -X POST https://oauth2.googleapis.com/token \
  -d "code=$CODE" \
  -d "client_id=$GOOGLE_ADS_CLIENT_ID" \
  -d "client_secret=$GOOGLE_ADS_CLIENT_SECRET" \
  -d "redirect_uri=$REDIRECT_URI" \
  -d "grant_type=authorization_code")

echo "$RESULT" | python3 -c '
import json, sys
d = json.load(sys.stdin)
if "error" in d:
    print(f"❌ Error: {d[\"error\"]} - {d.get(\"error_description\",\"\")}")
else:
    print(f"✅ Success!")
    print(f"Refresh Token: {d.get(\"refresh_token\", \"NOT_RETURNED\")}")
    print(f"Scopes: {d.get(\"scope\", \"unknown\")}")
    print(f"\nTo update ~/.zprofile, run:")
    rt = d.get("refresh_token", "")
    if rt:
        print(f"  sed -i \"\" \"s|export GOOGLE_ADS_REFRESH_TOKEN=.*|export GOOGLE_ADS_REFRESH_TOKEN={rt}|\" ~/.zprofile")
'
