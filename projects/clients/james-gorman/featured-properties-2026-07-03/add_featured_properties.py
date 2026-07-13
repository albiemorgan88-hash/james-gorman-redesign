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

PROPERTIES = [
    {
        "property_id": "1085549",
        "title": "35 Coleraine Road, Portrush",
        "alt_text": "35 Coleraine Road, Portrush, BT56 8EA",
        "description": "Offers Around £450,000 • 6 bed • 6 Bed Semi-detached House",
        "url": "https://www.propertypal.com/35-coleraine-road-portrush/1085549",
        "image_url": "https://media.propertypal.com/hd/p/1084349/42708089.jpg",
        "preimported_image": {
            "id": "8a0a22_e71e9490127741bc8aba94587ffe81a1~mv2.jpg",
            "url": "https://static.wixstatic.com/media/8a0a22_e71e9490127741bc8aba94587ffe81a1~mv2.jpg",
            "height": 768,
            "width": 586,
            "filename": "jgp-1085549-35-coleraine-road.jpg",
        },
    },
    {
        "property_id": "1083049",
        "title": "11 Oaktree Manor, Eglinton",
        "alt_text": "11 Oaktree Manor, Coolafinny Road, Eglinton, Derry/Londonderry, BT47 3PG",
        "description": "Asking Price £180,000 • 2 bed • 2 Bed Top Floor Apartment",
        "url": "https://www.propertypal.com/11-oaktree-manor-coolafinny-road-eglinton-derrylondonderry/1083049",
        "image_url": "https://media.propertypal.com/hd/p/1081849/42451331.jpg",
    },
    {
        "property_id": "1077344",
        "title": "Lisowen, Limavady Road",
        "alt_text": "Lisowen, Limavady Road, Derry/Londonderry, BT47 6LP",
        "description": "Asking Price £485,000 • 4 bed • 4 Bed Detached House",
        "url": "https://www.propertypal.com/lisowen-limavady-road-derrylondonderry/1077344",
        "image_url": "https://media.propertypal.com/hd/p/1076144/41854305.jpg",
    },
    {
        "property_id": "1081490",
        "title": "91 Good Shepherd Glen",
        "alt_text": "91 Good Shepherd Glen, Derry/Londonderry, BT47 2GA",
        "description": "SALE AGREED • 3 bed • 3 Bed Semi-detached House",
        "url": "https://www.propertypal.com/91-good-shepherd-glen-derrylondonderry/1081490",
        "image_url": "https://media.propertypal.com/hd/p/1080290/42264429.jpg",
    },
    {
        "property_id": "1080605",
        "title": "24 Culmore Square",
        "alt_text": "24 Culmore Square, Derry/Londonderry, BT48 8GF",
        "description": "SALE AGREED • 3 bed • 3 Bed Mid Townhouse",
        "url": "https://www.propertypal.com/24-culmore-square-derrylondonderry/1080605",
        "image_url": "https://media.propertypal.com/hd/p/1079405/42184920.jpg",
    },
    {
        "property_id": "1077343",
        "title": "18 Clearwater",
        "alt_text": "18 Clearwater, Derry/Londonderry, BT47 6BE",
        "description": "SALE AGREED • 4 bed • 4 Bed Detached House with garage",
        "url": "https://www.propertypal.com/18-clearwater-derrylondonderry/1077343",
        "image_url": "https://media.propertypal.com/hd/p/1076143/41854289.jpg",
    },
    {
        "property_id": "1058022",
        "title": "25 Summer Meadows Park",
        "alt_text": "25 Summer Meadows Park, Derry/Londonderry, BT47 6SL",
        "description": "SALE AGREED • 2 bed • 2 Bed Semi-detached House",
        "url": "https://www.propertypal.com/25-summer-meadows-park-derrylondonderry/1058022",
        "image_url": "https://media.propertypal.com/hd/p/1056822/40268642.jpg",
    },
    {
        "property_id": "1028267",
        "title": "33 Tulacorr Gardens, Strabane",
        "alt_text": "33 Tulacorr Gardens, Strabane, BT82 8RB",
        "description": "SALE AGREED • 3 bed • 3 Bed Semi-detached House",
        "url": "https://www.propertypal.com/33-tulacorr-gardens-strabane/1028267",
        "image_url": "https://media.propertypal.com/hd/p/1027067/38623462.jpg",
    },
]


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
    if prop.get("preimported_image"):
        return prop["preimported_image"]

    display_name = f"jgp-{prop['property_id']}-{prop['title'].lower().replace(' ', '-').replace(',', '')}.jpg"
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

    for _ in range(15):
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
        "titles_in_html": {
            prop["title"]: prop["title"] in response.text for prop in PROPERTIES
        },
    }


def main():
    RUN_DIR.mkdir(parents=True, exist_ok=True)

    before = get_gallery()
    write_json("featured-gallery-before.json", before)

    existing = existing_by_url(before)
    results = []
    imports = []
    base_sort = -2100000000000
    step = 1000000000

    for index, prop in enumerate(PROPERTIES):
        if prop["url"] in existing:
            item = existing[prop["url"]]
            updated_item = update_item(item, prop, base_sort + (index * step))
            results.append(
                {
                    "propertyId": prop["property_id"],
                    "title": prop["title"],
                    "status": "updated-existing",
                    "itemId": updated_item["id"],
                    "url": prop["url"],
                }
            )
            continue

        image_info = import_image(prop)
        imports.append(
            {
                "propertyId": prop["property_id"],
                "title": prop["title"],
                "imageId": image_info["id"],
                "imageUrl": image_info["url"],
                "width": image_info["width"],
                "height": image_info["height"],
            }
        )
        item = create_item(prop, image_info, base_sort + (index * step))
        results.append(
            {
                "propertyId": prop["property_id"],
                "title": prop["title"],
                "status": "added",
                "itemId": item["id"],
                "imageId": image_info["id"],
                "url": prop["url"],
            }
        )

    after = get_gallery()
    write_json("featured-gallery-after.json", after)
    write_json("wix-import-results.json", imports)

    after_by_url = existing_by_url(after)
    verification = []
    for prop in PROPERTIES:
        item = after_by_url.get(prop["url"])
        verification.append(
            {
                "propertyId": prop["property_id"],
                "title": prop["title"],
                "url": prop["url"],
                "found": bool(item),
                "itemId": item.get("id") if item else None,
                "sortOrder": item.get("sortOrder") if item else None,
                "imageWidth": item.get("image", {}).get("imageInfo", {}).get("width") if item else None,
                "imageHeight": item.get("image", {}).get("imageInfo", {}).get("height") if item else None,
            }
        )

    homepage = public_homepage_check()
    qa = {
        "galleryId": GALLERY_ID,
        "beforeTotal": before.get("totalItems"),
        "afterTotal": after.get("totalItems"),
        "results": results,
        "verification": verification,
        "homepage": homepage,
        "passed": all(row["found"] for row in verification) and homepage["status"] == 200,
    }
    write_json("qa-result.json", qa)
    print(json.dumps(qa, indent=2, ensure_ascii=False))

    if not qa["passed"]:
        raise SystemExit(1)


if __name__ == "__main__":
    main()
