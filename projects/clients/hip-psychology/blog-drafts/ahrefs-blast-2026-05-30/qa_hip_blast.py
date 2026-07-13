#!/usr/bin/env python3
from __future__ import annotations

import json
import re
from pathlib import Path

import requests

SITE = "https://hippsychology.com"
OUT = Path(__file__).resolve().parent


def check_page(url: str, title: str) -> dict:
    response = requests.get(url, timeout=30)
    html = response.text
    h1s = re.findall(r"<h1[\s\S]*?</h1>", html, re.I)
    return {
        "http_200": response.status_code == 200,
        "h1_count": len(h1s),
        "one_h1": len(h1s) == 1,
        "h1_contains_title": title.split(":")[0].lower() in html.lower(),
        "h2_count": len(re.findall(r"<h2[\s>]", html, re.I)),
        "faq_schema": "FAQPage" in html,
        "article_schema": "Article" in html,
        "contact_cta": "/contact-us/" in html,
        "leak_markers_found": [
            marker
            for marker in ["target_keyword", "source_note", "draft_dir", "TODO", "frontmatter", "HIP_WP_APP_PASSWORD"]
            if marker.lower() in html.lower()
        ],
    }


def main() -> int:
    publish = json.loads((OUT / "publish-result.json").read_text())
    sitemap = requests.get(f"{SITE}/wp-sitemap-posts-post-1.xml", timeout=30).text
    results = []
    for item in publish["results"]:
        checks = check_page(item["link"], item["title"])
        checks["in_wp_post_sitemap"] = item["link"] in sitemap
        checks["in_latest_feed"] = item.get("in_latest_feed") is True
        results.append({
            "slug": item["slug"],
            "title": item["title"],
            "target_keyword": item["target_keyword"],
            "link": item["link"],
            "checks": checks,
        })
    report = {
        "count": len(results),
        "all_passed": all(
            r["checks"]["http_200"]
            and r["checks"]["one_h1"]
            and r["checks"]["h2_count"] >= 9
            and r["checks"]["faq_schema"]
            and r["checks"]["article_schema"]
            and r["checks"]["contact_cta"]
            and r["checks"]["in_wp_post_sitemap"]
            and not r["checks"]["leak_markers_found"]
            for r in results
        ),
        "results": results,
    }
    (OUT / "qa-result.json").write_text(json.dumps(report, indent=2))
    print(json.dumps(report, indent=2))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
