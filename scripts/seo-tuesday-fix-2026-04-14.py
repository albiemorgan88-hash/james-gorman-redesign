#!/usr/bin/env python3
"""Stage safe Webflow SEO fixes for Blue Canvas case studies.

Run with:
  source ~/.zprofile && python3 scripts/seo-tuesday-fix-2026-04-14.py
"""

import json
import os
import sys
import urllib.error
import urllib.request

BASE_URL = "https://api.webflow.com/v2"
COLLECTION_ID = "67e4825804e6baf1d5246f5c"  # case-study-details
TOKEN = os.environ.get("WEBFLOW_API_TOKEN")

if not TOKEN:
    raise SystemExit("WEBFLOW_API_TOKEN is not set. Source ~/.zprofile first.")

HEADERS = {
    "Authorization": f"Bearer {TOKEN}",
    "Content-Type": "application/json",
}

PATCHES = {
    "69b41df3a096454ae7529306": {
        "name": "James Gorman Property",
        "fieldData": {
            "thumbnail-image": {
                "fileId": "69b41e7beb6a14b01bf6144c",
                "url": "https://cdn.prod.website-files.com/67e4825804e6baf1d5246f58/69b41e7beb6a14b01bf6144c_jgp.jpg",
                "alt": "James Gorman Property logo"
            },
            "company-logo": {
                "fileId": "69b41e7beb6a14b01bf6144c",
                "url": "https://cdn.prod.website-files.com/67e4825804e6baf1d5246f58/69b41e7beb6a14b01bf6144c_jgp.jpg",
                "alt": "James Gorman Property logo"
            }
        }
    },
    "696e5de0d7ec99f032f3b348": {
        "name": "HIP Psychology",
        "fieldData": {
            "small-details": "HIP Psychology used Blue Canvas to explore practical AI use cases for education, training delivery, and internal operations.",
            "thumbnail-image": {
                "fileId": "696e5bf56f51c202edf790cf",
                "url": "https://cdn.prod.website-files.com/67e4825804e6baf1d5246f58/696e5bf56f51c202edf790cf_hip-ltd-with-green-letters.png",
                "alt": "HIP Psychology logo"
            },
            "company-logo": {
                "fileId": "696e5bf56f51c202edf790cf",
                "url": "https://cdn.prod.website-files.com/67e4825804e6baf1d5246f58/696e5bf56f51c202edf790cf_hip-ltd-with-green-letters.png",
                "alt": "HIP Psychology logo"
            },
            "main-image": {
                "fileId": "696e5d9dfe08c3f10f3821c4",
                "url": "https://cdn.prod.website-files.com/67e4825804e6baf1d5246f58/696e5d9dfe08c3f10f3821c4_hip%3Abc.png",
                "alt": "HIP Psychology and Blue Canvas AI education case study graphic"
            }
        }
    },
    "67e4825804e6baf1d5247022": {
        "name": "The Wall Group",
        "fieldData": {
            "thumbnail-image": {
                "fileId": "687e406a802ca23276272d33",
                "url": "https://cdn.prod.website-files.com/67e4825804e6baf1d5246f58/687e406a802ca23276272d33_wall-group.jpg",
                "alt": "The Wall Group logo"
            },
            "company-logo": {
                "fileId": "687e406a802ca23276272d33",
                "url": "https://cdn.prod.website-files.com/67e4825804e6baf1d5246f58/687e406a802ca23276272d33_wall-group.jpg",
                "alt": "The Wall Group logo"
            },
            "main-image": {
                "fileId": "67e4825804e6baf1d52471aa",
                "url": "https://cdn.prod.website-files.com/67e4825804e6baf1d5246f58/67e4825804e6baf1d52471aa_676e345ddf366a17df42c4f3_Mask%2520group%2520-%25202024-12-27T094950.596.avif",
                "alt": "The Wall Group retail case study image"
            }
        }
    }
}


def request_json(method: str, url: str, payload=None):
    data = None if payload is None else json.dumps(payload).encode("utf-8")
    req = urllib.request.Request(url, data=data, headers=HEADERS, method=method)
    with urllib.request.urlopen(req) as resp:
        body = resp.read().decode("utf-8")
        return resp.status, json.loads(body) if body else {}


results = []
for item_id, patch in PATCHES.items():
    url = f"{BASE_URL}/collections/{COLLECTION_ID}/items/{item_id}"
    try:
        status, body = request_json("PATCH", url, {"fieldData": patch["fieldData"]})
        fd = body.get("fieldData", {})
        results.append({
            "item_id": item_id,
            "name": patch["name"],
            "status": status,
            "small-details": fd.get("small-details"),
            "thumbnail-alt": (fd.get("thumbnail-image") or {}).get("alt"),
            "company-logo-alt": (fd.get("company-logo") or {}).get("alt"),
            "main-image-alt": (fd.get("main-image") or {}).get("alt") if fd.get("main-image") else None,
        })
    except urllib.error.HTTPError as e:
        body = e.read().decode("utf-8", errors="replace")
        print(json.dumps({"item_id": item_id, "name": patch["name"], "status": e.code, "error": body}, indent=2))
        sys.exit(1)

print(json.dumps(results, indent=2, ensure_ascii=False))
