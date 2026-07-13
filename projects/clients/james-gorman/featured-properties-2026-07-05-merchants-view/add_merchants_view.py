#!/usr/bin/env python3
import json
import os
import time
from pathlib import Path

import requests


SITE_ID = "4b8170fd-99cc-45e8-a4fb-e28bb7156d52"
GALLERY_ID = "0880c93f-89ac-435c-af7b-5948fceef70e"
BASE_URL = "https://www.wixapis.com"
RUN_DIR = Path(__file__).resolve().parent

PROPERTY = {
    "property_id": "1087736",
    "title": "20 Merchant's View",
    "alt_text": "20 Merchant's View, Derry/Londonderry, BT47 6PN",
    "description": "Offers Over £535,000 • 4 bed • 4 Bed Detached House",
    "url": "https://www.propertypal.com/20-merchants-view-derrylondonderry/1087736",
    "image_url": "https://media.propertypal.com/hd/p/1086536/42850680.jpg",
}


def write_json(name, data):
    path = RUN_DIR / name
    path.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n")
    return path


def headers():
    token = os.environ.get("WIX_API_KEY")
    if not token:
        raise SystemExit("WIX_API_KEY is missing")
    return {
        "Authorization": token,
        "wix-site-id": SITE_ID,
        "Content-Type": "application/json",
    }


def request_json(method, path, *, payload=None, params=None, timeout=60):
    response = requests.request(
        method,
        f"{BASE_URL}{path}",
        headers=headers(),
        json=payload,
        params=params,
        timeout=timeout,
    )
    if not response.ok:
        raise RuntimeError(f"{method} {path} failed: {response.status_code} {response.text[:1200]}")
    return response.json()


def get_gallery():
    return request_json("GET", f"/pro-gallery/v2/galleries/{GALLERY_ID}")["gallery"]


def existing_by_url(gallery):
    found = {}
    for item in gallery.get("items", []):
        link = item.get("link") or {}
        url = link.get("url")
        if url:
            found[url] = item
    return found


def import_image(prop):
    display_name = f"jgp-{prop['property_id']}-20-merchants-view.jpg"
    result = request_json(
        "POST",
        "/site-media/v1/files/import",
        payload={
            "url": prop["image_url"],
            "mimeType": "image/jpeg",
            "displayName": display_name,
        },
        timeout=90,
    )
    file_info = result["file"]
    file_id = file_info["id"]

    for _ in range(20):
        latest = request_json(
            "GET",
            "/site-media/v1/files/get-file-by-id",
            params={"fileId": file_id},
            timeout=30,
        )["file"]
        if latest.get("operationStatus") == "READY" and latest.get("media", {}).get("image"):
            image = latest["media"]["image"]["image"]
            return {
                "id": latest["id"],
                "url": latest["url"],
                "height": image["height"],
                "width": image["width"],
                "filename": image.get("filename") or display_name,
            }
        time.sleep(2)

    raise RuntimeError(f"Image import did not become READY for {prop['title']} ({file_id})")


def gallery_item(prop, image_info, sort_order):
    return {
        "sortOrder": sort_order,
        "title": prop["title"],
        "description": prop["description"],
        "link": {
            "type": "EXTERNAL",
            "url": prop["url"],
            "target": "_blank",
        },
        "type": "IMAGE",
        "image": {
            "type": "WIX_MEDIA",
            "imageInfo": {
                "id": image_info["id"],
                "url": image_info["url"],
                "height": image_info["height"],
                "width": image_info["width"],
                "altText": prop["alt_text"],
                "filename": image_info["filename"],
            },
            "focalPoint": {"x": 0.5, "y": 0.5},
        },
    }


def create_item(prop, image_info, sort_order):
    result = request_json(
        "POST",
        f"/progallery/v2/galleries/{GALLERY_ID}/items",
        payload={"item": gallery_item(prop, image_info, sort_order)},
        timeout=60,
    )
    return result["item"]


def update_item(existing_item, prop, sort_order):
    image_info = existing_item["image"]["imageInfo"]
    item = gallery_item(prop, image_info, sort_order)
    item["id"] = existing_item["id"]
    result = request_json(
        "PATCH",
        f"/progallery/v2/galleries/{GALLERY_ID}/items/{existing_item['id']}",
        payload={"item": item},
        timeout=60,
    )
    return result["item"]


def public_homepage_check():
    response = requests.get("https://www.jamesgormanproperty.com/", timeout=60)
    return {
        "status": response.status_code,
        "title_in_html": PROPERTY["title"] in response.text,
        "price_in_html": "Offers Over £535,000" in response.text,
        "property_id_in_html": PROPERTY["property_id"] in response.text,
    }


def main():
    RUN_DIR.mkdir(parents=True, exist_ok=True)

    source = {
        "propertyPalUrl": PROPERTY["url"],
        "propertyId": PROPERTY["property_id"],
        "title": PROPERTY["title"],
        "address": "Derry/Londonderry, BT47 6PN",
        "price": "Offers Over £535,000",
        "summary": "4 Bed Detached House",
        "bedrooms": 4,
        "bathrooms": 3,
        "receptions": 2,
        "imageUrl": PROPERTY["image_url"],
    }
    write_json("source-listing.json", source)

    before = get_gallery()
    write_json("featured-gallery-before.json", before)

    existing = existing_by_url(before)
    sort_orders = [item.get("sortOrder") for item in before.get("items", []) if isinstance(item.get("sortOrder"), (int, float))]
    top_sort_order = (min(sort_orders) if sort_orders else -2100000000000) - 1000000000

    imports = []
    if PROPERTY["url"] in existing:
        item = update_item(existing[PROPERTY["url"]], PROPERTY, top_sort_order)
        result = {
            "propertyId": PROPERTY["property_id"],
            "title": PROPERTY["title"],
            "status": "updated-existing",
            "itemId": item["id"],
            "url": PROPERTY["url"],
        }
    else:
        image_info = import_image(PROPERTY)
        imports.append(
            {
                "propertyId": PROPERTY["property_id"],
                "title": PROPERTY["title"],
                "imageId": image_info["id"],
                "imageUrl": image_info["url"],
                "width": image_info["width"],
                "height": image_info["height"],
            }
        )
        item = create_item(PROPERTY, image_info, top_sort_order)
        result = {
            "propertyId": PROPERTY["property_id"],
            "title": PROPERTY["title"],
            "status": "added",
            "itemId": item["id"],
            "imageId": image_info["id"],
            "url": PROPERTY["url"],
        }

    after = get_gallery()
    write_json("featured-gallery-after.json", after)
    write_json("wix-import-results.json", imports)

    after_item = existing_by_url(after).get(PROPERTY["url"])
    verification = {
        "propertyId": PROPERTY["property_id"],
        "title": PROPERTY["title"],
        "url": PROPERTY["url"],
        "found": bool(after_item),
        "itemId": after_item.get("id") if after_item else None,
        "sortOrder": after_item.get("sortOrder") if after_item else None,
        "imageWidth": after_item.get("image", {}).get("imageInfo", {}).get("width") if after_item else None,
        "imageHeight": after_item.get("image", {}).get("imageInfo", {}).get("height") if after_item else None,
    }

    homepage = public_homepage_check()
    qa = {
        "galleryId": GALLERY_ID,
        "beforeTotal": before.get("totalItems"),
        "afterTotal": after.get("totalItems"),
        "result": result,
        "verification": verification,
        "homepage": homepage,
        "passed": verification["found"]
        and homepage["status"] == 200
        and homepage["title_in_html"]
        and homepage["price_in_html"]
        and homepage["property_id_in_html"],
    }
    write_json("qa-result.json", qa)
    print(json.dumps(qa, indent=2, ensure_ascii=False))

    if not qa["passed"]:
        raise SystemExit(1)


if __name__ == "__main__":
    main()
