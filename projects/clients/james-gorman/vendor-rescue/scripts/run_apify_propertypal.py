#!/usr/bin/env python3
"""Run Apify PropertyPal scraper for James Gorman vendor-rescue workflow.

Requires env:
  APIFY_TOKEN or APIFY_API_TOKEN

Default actor:
  parseforge/propertypal-scraper

Outputs:
  vendor-rescue/weekly-targets/YYYY-MM-DD-apify-raw.json
  vendor-rescue/weekly-targets/YYYY-MM-DD-apify-normalized.csv
  vendor-rescue/weekly-targets/YYYY-MM-DD-apify-shortlist.md
"""
import argparse
import csv
import json
import os
import re
import sys
import time
import urllib.error
import urllib.parse
import urllib.request
from datetime import date, datetime, timezone
from pathlib import Path

ACTOR_ID = "parseforge~propertypal-scraper"
DEFAULT_START_URLS = [
    "https://www.propertypal.com/property-for-sale/bt47",
    "https://www.propertypal.com/property-for-sale/bt48",
]
ROOT = Path(__file__).resolve().parents[1]
OUTDIR = ROOT / "weekly-targets"


def env_token():
    return os.environ.get("APIFY_TOKEN") or os.environ.get("APIFY_API_TOKEN")


def request_json(url, method="GET", payload=None, timeout=300):
    data = None
    headers = {"Content-Type": "application/json"}
    if payload is not None:
        data = json.dumps(payload).encode("utf-8")
    req = urllib.request.Request(url, data=data, method=method, headers=headers)
    with urllib.request.urlopen(req, timeout=timeout) as r:
        return json.loads(r.read().decode("utf-8"))


def run_actor_sync(token, start_url, max_items=100, timeout=300):
    qs = urllib.parse.urlencode({"token": token, "timeout": timeout, "memory": 1024, "maxItems": max_items})
    url = f"https://api.apify.com/v2/acts/{ACTOR_ID}/run-sync-get-dataset-items?{qs}"
    payload = {
        "startUrl": start_url,
        "maxItems": max_items,
        "includeDetails": True,
        "includeSaleAgreed": False,
        "excludePriceOnApplication": False,
        "excludeBuildingSites": False,
        "excludeNewHomes": False,
        "garage": False,
        "largeGarage": False,
        "coOwnership": False,
        "coOwnershipOnly": False,
        "proxyConfiguration": {
            "useApifyProxy": True,
            "apifyProxyGroups": ["RESIDENTIAL"],
            "apifyProxyCountry": "GB",
        },
    }
    return request_json(url, method="POST", payload=payload, timeout=timeout + 60)


def first(item, *keys):
    for key in keys:
        cur = item
        ok = True
        for part in key.split("."):
            if isinstance(cur, dict) and part in cur:
                cur = cur[part]
            else:
                ok = False
                break
        if ok and cur not in (None, "", [], {}):
            return cur
    return ""


def text(v):
    if v is None:
        return ""
    if isinstance(v, (list, tuple)):
        return "; ".join(text(x) for x in v if text(x))
    if isinstance(v, dict):
        return json.dumps(v, ensure_ascii=False)
    return str(v).strip()


def parse_price(v):
    s = text(v)
    m = re.search(r"[\d,]+", s)
    return m.group(0).replace(",", "") if m else s


def parse_date(v):
    s = text(v)
    if not s:
        return ""
    # Keep ISO-ish dates as-is; otherwise leave original for human review.
    m = re.search(r"(20\d{2}-\d{2}-\d{2})", s)
    return m.group(1) if m else s


def days_since(date_str):
    s = parse_date(date_str)
    try:
        d = datetime.fromisoformat(s.replace("Z", "+00:00")).date()
        return (date.today() - d).days
    except Exception:
        return ""


def price_history_notes(item):
    hist = first(item, "priceHistory", "history", "listingHistory", "price.history", "details.priceHistory")
    if not hist:
        return ""
    return text(hist)[:500]


def normalize(item, source_url):
    address = first(item, "address", "displayAddress", "title", "property.address", "details.address", "location.address")
    postcode = first(item, "postcode", "address.postcode", "location.postcode", "property.postcode")
    area = first(item, "area", "location.area", "town", "city", "locality")
    price = first(item, "price", "askingPrice", "priceText", "property.price", "details.price")
    bedrooms = first(item, "bedrooms", "beds", "numBedrooms", "details.bedrooms")
    ptype = first(item, "propertyType", "type", "property.type", "details.propertyType")
    agent = first(item, "agent.name", "agentName", "estateAgent", "seller.name", "contact.name")
    url = first(item, "url", "propertyUrl", "listingUrl", "link") or source_url
    listed = first(item, "dateListed", "listedAt", "createdAt", "firstListedAt", "publishedAt", "addedOn")
    updated = first(item, "updatedAt", "lastUpdated", "modifiedAt")
    days = first(item, "daysOnMarket", "days_on_market") or days_since(listed)
    photos = first(item, "photos", "images", "imageUrls", "media.photos")
    description = first(item, "description", "summary", "details.description")
    photo_count = len(photos) if isinstance(photos, list) else ""
    desc_len = len(text(description)) if description else ""

    photo_quality = "weak" if isinstance(photo_count, int) and photo_count < 8 else "average"
    description_quality = "weak" if isinstance(desc_len, int) and desc_len < 500 else "average"

    return {
        "property_url": text(url),
        "address": text(address),
        "postcode": text(postcode),
        "area": text(area),
        "asking_price": parse_price(price),
        "bedrooms": text(bedrooms),
        "property_type": text(ptype),
        "current_agent": text(agent),
        "days_on_market": text(days),
        "date_listed": parse_date(listed),
        "last_updated": parse_date(updated),
        "last_price_change_date": "",
        "price_change_notes": price_history_notes(item) or "Review price history manually",
        "photo_quality": photo_quality,
        "description_quality": description_quality,
        "vendor_motivation_notes": "",
        "source_date": date.today().isoformat(),
        "source_start_url": source_url,
        "notes": "Apify PropertyPal scrape; human verify before outreach",
    }


def write_csv(rows, path):
    fields = [
        "property_url", "address", "postcode", "area", "asking_price", "bedrooms", "property_type",
        "current_agent", "days_on_market", "date_listed", "last_updated", "last_price_change_date",
        "price_change_notes", "photo_quality", "description_quality", "vendor_motivation_notes",
        "source_date", "source_start_url", "notes",
    ]
    with path.open("w", newline="", encoding="utf-8") as f:
        w = csv.DictWriter(f, fieldnames=fields)
        w.writeheader()
        for r in rows:
            w.writerow({k: r.get(k, "") for k in fields})


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--start-url", action="append", dest="start_urls", help="PropertyPal start/search URL. Repeatable.")
    ap.add_argument("--max-items", type=int, default=100)
    ap.add_argument("--timeout", type=int, default=300)
    ap.add_argument("--dry-run", action="store_true")
    args = ap.parse_args()

    token = env_token()
    if not token:
        print("Missing APIFY_TOKEN/APIFY_API_TOKEN. Add it to ~/.zprofile then run: source ~/.zprofile", file=sys.stderr)
        sys.exit(2)

    start_urls = args.start_urls or DEFAULT_START_URLS
    OUTDIR.mkdir(parents=True, exist_ok=True)
    stamp = date.today().isoformat()
    all_items = []
    for start_url in start_urls:
        print(f"Running {ACTOR_ID} for {start_url} max_items={args.max_items}")
        if args.dry_run:
            continue
        try:
            items = run_actor_sync(token, start_url, max_items=args.max_items, timeout=args.timeout)
        except urllib.error.HTTPError as e:
            print(f"Apify HTTP {e.code}: {e.read().decode('utf-8', 'ignore')[:1000]}", file=sys.stderr)
            raise
        print(f"Got {len(items)} items from {start_url}")
        all_items.extend({"__source_start_url": start_url, **item} for item in items if isinstance(item, dict))
        time.sleep(2)

    raw_path = OUTDIR / f"{stamp}-apify-raw.json"
    csv_path = OUTDIR / f"{stamp}-apify-normalized.csv"
    raw_path.write_text(json.dumps(all_items, indent=2, ensure_ascii=False))
    rows = [normalize(item, item.get("__source_start_url", "")) for item in all_items]
    # De-dupe by URL/address
    seen = set(); deduped = []
    for r in rows:
        key = r.get("property_url") or r.get("address")
        if key and key not in seen:
            seen.add(key); deduped.append(r)
    write_csv(deduped, csv_path)
    print(f"Wrote {raw_path}")
    print(f"Wrote {csv_path} ({len(deduped)} rows)")

    scorer = ROOT / "scripts" / "score_candidates.py"
    shortlist = OUTDIR / f"{stamp}-apify-shortlist.md"
    os.system(f"{scorer} {csv_path} {shortlist}")

if __name__ == "__main__":
    main()
