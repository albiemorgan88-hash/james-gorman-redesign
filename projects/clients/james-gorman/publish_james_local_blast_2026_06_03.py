#!/usr/bin/env python3
from __future__ import annotations

import json
import os
import re
import time
import uuid
from html import unescape
from pathlib import Path

import requests

BASE = Path(__file__).resolve().parent
SITE = "https://www.jamesgormanproperty.com"
WIX_SITE_ID = "4b8170fd-99cc-45e8-a4fb-e28bb7156d52"
JAMES_MEMBER_ID = "8a0a22b4-bf7d-4b83-9347-5d4ae7d25012"
DRAFT_DIR = BASE / "blog-drafts" / "content-blast-2026-06-03-eglinton-claudy-limavady"
REPORT_JSON = BASE / "blog-publish-report-2026-06-03-eglinton-claudy-limavady.json"
QA_JSON = BASE / "blog-publish-api-qa-2026-06-03-eglinton-claudy-limavady.json"
REPORT_MD = BASE / "blog-publish-report-2026-06-03-eglinton-claudy-limavady.md"

CATEGORIES = {
    "buyer": "9f72ffad-096f-40d5-b188-300e2635d96d",
    "seller": "4d207813-b611-4060-9edf-bf13195d519f",
}


def headers() -> dict[str, str]:
    return {
        "Authorization": os.environ["WIX_API_KEY"],
        "wix-site-id": WIX_SITE_ID,
        "Content-Type": "application/json",
    }


def node_id() -> str:
    return uuid.uuid4().hex


def text_node(text: str, url: str | None = None) -> dict:
    decorations = []
    if url:
        decorations.append(
            {"type": "LINK", "linkData": {"link": {"url": url, "target": "SELF" if url.startswith(SITE) else "BLANK"}}}
        )
    return {"type": "TEXT", "id": node_id(), "nodes": [], "textData": {"text": text, "decorations": decorations}}


def paragraph(text: str) -> dict:
    return {"type": "PARAGRAPH", "id": node_id(), "nodes": [text_node(text)]}


def heading(text: str, level: int = 2) -> dict:
    return {"type": "HEADING", "id": node_id(), "nodes": [text_node(text)], "headingData": {"level": level}}


def parse_metadata(lines: list[str]) -> dict[str, str]:
    meta = {}
    for line in lines:
        match = re.match(r"\*\*([^:]+):\*\*\s*(.+?)\s*$", line)
        if match:
            key = match.group(1).strip().lower()
            value = match.group(2).strip().strip("`")
            meta[key] = value
    return meta


def classify_category(slug: str, title: str) -> str:
    text = f"{slug} {title}".lower()
    if any(term in text for term in ["first-time-buyer", "buying-", "buyer", "countryside-home"]):
        return "buyer"
    return "seller"


def parse_draft(path: Path) -> dict:
    raw_lines = path.read_text().splitlines()
    title = raw_lines[0].removeprefix("#").strip()
    metadata = parse_metadata(raw_lines[:12])
    slug = metadata.get("suggested slug")
    excerpt = metadata.get("meta description")
    if not slug or not excerpt:
        raise RuntimeError(f"Missing slug/excerpt metadata in {path}")

    try:
        body_start = raw_lines.index("By James Gorman")
    except ValueError as exc:
        raise RuntimeError(f"Missing By James Gorman body line in {path}") from exc

    nodes = []
    paragraph_buffer: list[str] = []

    def flush_paragraph() -> None:
        if paragraph_buffer:
            nodes.append(paragraph(" ".join(x.strip() for x in paragraph_buffer if x.strip())))
            paragraph_buffer.clear()

    for raw in raw_lines[body_start:]:
        line = raw.strip()
        if not line:
            flush_paragraph()
            continue
        if line.startswith("Suggested internal links:"):
            flush_paragraph()
            continue
        if line.startswith("**") and line.endswith("**"):
            continue
        if line.startswith("### "):
            flush_paragraph()
            nodes.append(heading(line[4:].strip(), 3))
            continue
        if line.startswith("## "):
            flush_paragraph()
            nodes.append(heading(line[3:].strip(), 2))
            continue
        if line.startswith("- "):
            flush_paragraph()
            nodes.append(paragraph(f"• {line[2:].strip()}"))
            continue
        paragraph_buffer.append(line)
    flush_paragraph()

    body_text = "\n".join(
        child.get("textData", {}).get("text", "") for node in nodes for child in node.get("nodes", [])
    )
    leak_markers = [
        "Primary keyword",
        "Secondary keywords",
        "Suggested slug",
        "Meta title",
        "Meta description",
        "Draft status",
        "Suggested internal links",
    ]
    found = [marker for marker in leak_markers if marker in body_text]
    if found:
        raise RuntimeError(f"Visible body leak markers in {path}: {found}")

    return {
        "path": str(path),
        "title": title,
        "slug": slug,
        "keyword": metadata.get("primary keyword", ""),
        "excerpt": excerpt,
        "category": classify_category(slug, title),
        "richContent": {"nodes": nodes, "metadata": {"version": 1}},
    }


def query_existing() -> dict[str, dict]:
    found = {}
    cursor = None
    while True:
        body = {"query": {"paging": {"limit": 100}}}
        if cursor:
            body = {"query": {"paging": {"cursor": cursor}}}
        response = requests.post("https://www.wixapis.com/blog/v3/draft-posts/query", headers=headers(), json=body, timeout=30)
        response.raise_for_status()
        data = response.json()
        for post in data.get("draftPosts", []):
            slug = post.get("seoSlug") or (post.get("slugs") or [None])[0]
            if slug:
                found[slug] = post
        cursor = data.get("metadata", {}).get("cursors", {}).get("next")
        if not cursor:
            return found


def create_and_publish(topic: dict, existing: dict[str, dict]) -> dict:
    if topic["slug"] in existing:
        raise RuntimeError(f"Refusing duplicate slug: {topic['slug']}")
    payload = {
        "draftPost": {
            "title": topic["title"],
            "excerpt": topic["excerpt"],
            "richContent": topic["richContent"],
            "memberId": JAMES_MEMBER_ID,
            "categoryIds": [CATEGORIES[topic["category"]]],
            "commentingEnabled": False,
            "seoSlug": topic["slug"],
            "seoData": {"tags": []},
        }
    }
    created = requests.post("https://www.wixapis.com/blog/v3/draft-posts", headers=headers(), json=payload, timeout=45)
    if not created.ok:
        raise RuntimeError(f"Create failed for {topic['slug']}: {created.status_code} {created.text[:1000]}")
    draft = created.json().get("draftPost", created.json())
    post_id = draft.get("id") or draft.get("draftPost", {}).get("id")
    if not post_id:
        raise RuntimeError(f"No draft id in response for {topic['slug']}: {created.text[:1000]}")
    published = requests.post(
        f"https://www.wixapis.com/blog/v3/draft-posts/{post_id}/publish", headers=headers(), json={}, timeout=45
    )
    if not published.ok:
        raise RuntimeError(f"Publish failed for {topic['slug']}: {published.status_code} {published.text[:1000]}")
    existing[topic["slug"]] = {"id": post_id, "status": "PUBLISH_REQUESTED"}
    return {
        "title": topic["title"],
        "slug": topic["slug"],
        "url": f"{SITE}/post/{topic['slug']}",
        "post_id": post_id,
        "publish_status": published.status_code,
        "category": topic["category"],
        "target_keyword": topic["keyword"],
        "memberId": JAMES_MEMBER_ID,
    }


def live_check(row: dict) -> dict:
    response = requests.get(row["url"], timeout=30)
    html = response.text
    public_text = re.sub(r"<(script|style).*?</\1>", " ", html, flags=re.I | re.S)
    public_text = re.sub(r"<[^>]+>", " ", public_text)
    public_text = " ".join(unescape(public_text).split())
    h1 = re.search(r"<h1[^>]*>(.*?)</h1>", html, re.I | re.S)
    h1_text = re.sub(r"<[^>]+>", "", h1.group(1)).strip() if h1 else ""
    author_match = re.search(r'"author"\s*:\s*\{[^}]*"name"\s*:\s*"([^"]+)"', html)
    leak_markers = [
        "Primary keyword",
        "Secondary keywords",
        "Suggested slug",
        "Meta title",
        "Meta description",
        "Draft status",
        "Suggested internal links",
        "Draft-only",
    ]
    return {
        "http_status": response.status_code,
        "public_h1": h1_text,
        "h1_matches": row["title"] in h1_text,
        "visible_byline_james_gorman": "By James Gorman" in public_text,
        "public_contains_phil_patterson": "Phil Patterson" in html,
        "schema_author_name": author_match.group(1) if author_match else None,
        "schema_author_contains_james": bool(author_match and "james" in author_match.group(1).lower()),
        "title_in_public_html": row["title"] in html,
        "leak_markers_found": [marker for marker in leak_markers if marker in html],
    }


def write_md_report(report: dict, qa: dict) -> None:
    lines = [
        "# James Gorman Property - 3 June 2026 Eglinton / Claudy / Limavady Content Blast",
        "",
        "## Published URLs",
    ]
    for row in report["results"]:
        lines.append(f"- [{row['title']}]({row['url']}) — `{row['target_keyword']}`")
    lines += [
        "",
        "## QA Summary",
        f"- API/live failures: {len(qa['failures'])}",
        f"- Sitemap status: {qa['sitemap_status']}",
        "- Checks: public 200, Wix API `PUBLISHED`, James member ID, H1 match, visible `By James Gorman`, sitemap inclusion, no `Phil Patterson`, no draft/SEO leak markers.",
        "",
        "## Notes",
        "- Focus areas: Eglinton, Claudy and Limavady.",
        "- Published after Phil explicitly approved publish on 3 June 2026.",
        "- Metadata/planning headers were stripped from the public article bodies.",
        "- No outreach, email, social posting or featured-image work was done.",
    ]
    REPORT_MD.write_text("\n".join(lines) + "\n")


def main() -> int:
    topics = [parse_draft(path) for path in sorted(DRAFT_DIR.glob("*.md"))]
    expected = 6
    if len(topics) != expected:
        raise RuntimeError(f"Expected {expected} drafts, found {len(topics)}")

    existing = query_existing()
    duplicates = [topic["slug"] for topic in topics if topic["slug"] in existing]
    if duplicates:
        raise RuntimeError(f"Refusing duplicate slugs before publishing: {duplicates}")

    results = []
    for topic in topics:
        results.append(create_and_publish(topic, existing))
        time.sleep(0.8)

    time.sleep(7)
    sitemap = requests.get(f"{SITE}/blog-posts-sitemap.xml", timeout=30)
    after = query_existing()
    qa = {"checked_at": time.strftime("%Y-%m-%dT%H:%M:%S%z"), "sitemap_status": sitemap.status_code, "results": [], "failures": []}
    for row in results:
        post = after.get(row["slug"], {})
        item = {
            **row,
            "api_status": post.get("status"),
            "api_memberId": post.get("memberId"),
            "actual_slug": post.get("seoSlug") or (post.get("slugs") or [None])[0],
            "sitemap_includes_url": row["url"] in sitemap.text,
            **live_check(row),
        }
        ok = (
            item["api_status"] == "PUBLISHED"
            and item["api_memberId"] == JAMES_MEMBER_ID
            and item["http_status"] == 200
            and item["h1_matches"]
            and item["visible_byline_james_gorman"]
            and not item["public_contains_phil_patterson"]
            and item["schema_author_contains_james"]
            and item["sitemap_includes_url"]
            and not item["leak_markers_found"]
        )
        if not ok:
            qa["failures"].append(item)
        qa["results"].append(item)

    report = {
        "published_at": time.strftime("%Y-%m-%dT%H:%M:%S%z"),
        "domain": "jamesgormanproperty.com",
        "draft_dir": str(DRAFT_DIR),
        "author_note": "Posts are assigned to James' Wix memberId and include a visible 'By James Gorman' body byline.",
        "results": results,
    }
    REPORT_JSON.write_text(json.dumps(report, indent=2))
    QA_JSON.write_text(json.dumps(qa, indent=2))
    write_md_report(report, qa)
    print(json.dumps({"published": len(results), "failures": len(qa["failures"]), "report": str(REPORT_MD), "report_json": str(REPORT_JSON), "qa": str(QA_JSON)}, indent=2))
    return 0 if not qa["failures"] else 1


if __name__ == "__main__":
    raise SystemExit(main())
