from __future__ import annotations

import argparse
import base64
import html
import json
import os
import re
import time
from pathlib import Path
from urllib.parse import quote

import requests

HERE = Path(__file__).resolve().parent
SITE = "https://hippsychology.com"
POSTS_API = f"{SITE}/wp-json/wp/v2/posts"


def headers() -> dict[str, str]:
    raw = f"{os.environ['HIP_WP_USERNAME']}:{os.environ['HIP_WP_APP_PASSWORD']}".encode()
    return {"Authorization": "Basic " + base64.b64encode(raw).decode(), "User-Agent": "HIP-SEO-Opportunity-Upgrades-2026-08-13"}


def visible_text(markup: str) -> str:
    stripped = re.sub(r"<(script|style).*?</\1>", " ", markup, flags=re.I | re.S)
    return " ".join(html.unescape(re.sub(r"<[^>]+>", " ", stripped)).split())


def checks_for(markup: str, live: bool = False) -> dict[str, bool]:
    text = visible_text(markup)
    checks = {
        "h2_sections": len(re.findall(r"<h2\b", markup, re.I)) >= 11,
        "faq_schema": '"FAQPage"' in markup,
        "article_schema": '"Article"' in markup,
        "contact_cta": "/contact-us/" in markup,
        "official_links": "education-ni.gov.uk" in markup and "publichealth.hscni.net" in markup,
        "substantial_copy": len(text.split()) >= 900,
        "no_secret_markers": not re.search(r"HIP_WP_APP_PASSWORD|APP_PASSWORD|client_secret|access token|\.env", markup, re.I),
        "no_source_markers": not re.search(r"Ahrefs|Search Console|target keyword|OpenClaw|draft-only", text, re.I),
        "no_prohibited_names": not re.search(r"\b(?:PJ|Albie|Phil Patterson)\b", text, re.I),
    }
    checks["one_h1" if live else "no_h1_in_content"] = len(re.findall(r"<h1\b", markup, re.I)) == (1 if live else 0)
    return checks


parser = argparse.ArgumentParser()
parser.add_argument("--publish", action="store_true")
args = parser.parse_args()
manifest = json.loads((HERE / "manifest.json").read_text(encoding="utf-8"))
local = []
for item in manifest["pages"]:
    markup = (HERE / f"{item['slug']}.html").read_text(encoding="utf-8")
    checks = checks_for(markup)
    local.append({"slug": item["slug"], "word_count": len(visible_text(markup).split()), "checks": checks, "ok": all(checks.values())})
(HERE / "local-qa-result.json").write_text(json.dumps({"pages": local, "failures": sum(not row["ok"] for row in local)}, indent=2) + "\n", encoding="utf-8")
if any(not row["ok"] for row in local):
    print(json.dumps({"ready": 0, "failures": [row for row in local if not row["ok"]]}, indent=2))
    raise SystemExit("Local QA failed; refusing WordPress updates.")
if not args.publish:
    print(json.dumps({"ready": len(local), "failures": 0, "mode": "dry-run", "word_counts": {row["slug"]: row["word_count"] for row in local}}, indent=2))
    raise SystemExit(0)

updated = []
for item in manifest["pages"]:
    lookup = requests.get(f"{POSTS_API}?slug={quote(item['slug'])}&status=publish&per_page=1", headers=headers(), timeout=45)
    lookup.raise_for_status()
    found = lookup.json()
    if len(found) != 1 or found[0]["id"] != item["id"]:
        raise SystemExit(f"Refusing unexpected WordPress identity for {item['slug']}")
    payload = {"content": (HERE / f"{item['slug']}.html").read_text(encoding="utf-8"), "status": "publish", "comment_status": "closed", "ping_status": "closed"}
    response = requests.post(f"{POSTS_API}/{item['id']}", headers={**headers(), "Content-Type": "application/json"}, json=payload, timeout=60)
    if not response.ok:
        raise SystemExit(f"WordPress update failed for {item['slug']}: HTTP {response.status_code}")
    data = response.json()
    updated.append({"action": "updated", "id": data["id"], "slug": data["slug"], "link": data["link"], "status": data["status"]})
    print(f"UPDATED {item['slug']} {data['id']}")
    time.sleep(0.7)

time.sleep(8)
live = []
for item in manifest["pages"]:
    response = requests.get(f"{SITE}/{item['slug']}/", timeout=45)
    checks = checks_for(response.text, live=True)
    checks["http_200"] = response.status_code == 200
    live.append({"slug": item["slug"], "url": response.url, "checks": checks, "ok": all(checks.values())})
sitemap = requests.get(f"{SITE}/wp-sitemap-posts-post-1.xml", timeout=45)
sitemap_checks = {item["slug"]: f"{SITE}/{item['slug']}/" in sitemap.text for item in manifest["pages"]}
failures = sum(not row["ok"] for row in live) + sum(not present for present in sitemap_checks.values())
result = {"checked_at": time.strftime("%Y-%m-%dT%H:%M:%S%z"), "updated": updated, "live_qa": live, "sitemap_status": sitemap.status_code, "sitemap_checks": sitemap_checks, "failures": failures}
(HERE / "publish-result.json").write_text(json.dumps(updated, indent=2) + "\n", encoding="utf-8")
(HERE / "qa-result.json").write_text(json.dumps(result, indent=2) + "\n", encoding="utf-8")
lines = ["# HIP Psychology SEO opportunity upgrade — 13 August 2026", "", "Status: Five existing ranking URLs updated live after explicit approval.", "", "## Updated pages"]
lines.extend(f"- [{item['slug']}]({item['link']})" for item in updated)
lines.extend(["", "## QA", f"- Live failures: {failures}", f"- Sitemap status: {sitemap.status_code}", "- Checks: HTTP 200, one H1, substantial copy, H2 sections, FAQPage and Article schema, contact CTA, official links, sitemap inclusion and no secret/source/prohibited-name markers.", "", "## Scope", "- Existing WordPress IDs and URLs retained; no duplicate posts created.", "- No email, DM, social post or featured image was sent."])
(HERE / "report.md").write_text("\n".join(lines) + "\n", encoding="utf-8")
print(json.dumps({"updated": len(updated), "failures": failures, "report": str(HERE / "report.md")}, indent=2))
if failures:
    raise SystemExit(1)
