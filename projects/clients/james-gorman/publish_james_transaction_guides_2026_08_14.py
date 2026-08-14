#!/usr/bin/env python3
from __future__ import annotations

import importlib.util
import json
import re
import sys
import time
from html import unescape
from pathlib import Path

import requests

BASE = Path(__file__).resolve().parent
PACK = BASE / "content-blast-2026-08-14-transaction-guides"
DRAFT_DIR = PACK / "drafts"
REPORT_JSON = BASE / "blog-publish-report-2026-08-14-transaction-guides.json"
QA_JSON = BASE / "blog-publish-api-qa-2026-08-14-transaction-guides.json"
REPORT_MD = BASE / "blog-publish-report-2026-08-14-transaction-guides.md"
SITE = "https://www.jamesgormanproperty.com"
PUBLISHER = BASE / "publish_james_ahrefs_blast_2026_06_08.py"


def load_publisher():
    spec = importlib.util.spec_from_file_location("james_wix_publisher", PUBLISHER)
    if not spec or not spec.loader:
        raise RuntimeError(f"Unable to load Wix publisher: {PUBLISHER}")
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    return module


def inline_nodes(pub, value: str) -> list[dict]:
    nodes = []
    cursor = 0
    pattern = re.compile(r"\[([^]]+)]\(([^)]+)\)")
    for match in pattern.finditer(value):
        if match.start() > cursor:
            nodes.append(pub.text_node(value[cursor:match.start()]))
        url = match.group(2)
        if url.startswith("/"):
            url = SITE + url
        nodes.append(pub.text_node(match.group(1), url))
        cursor = match.end()
    if cursor < len(value):
        nodes.append(pub.text_node(value[cursor:]))
    return nodes or [pub.text_node("")]


def linked_paragraph(pub, value: str) -> dict:
    return {"type": "PARAGRAPH", "id": pub.node_id(), "nodes": inline_nodes(pub, value)}


def parse_draft(pub, path: Path) -> dict:
    lines = path.read_text(encoding="utf-8").splitlines()
    metadata: dict[str, str] = {}
    for line in lines:
        if not line.strip():
            break
        if ":" in line:
            key, value = line.split(":", 1)
            metadata[key.strip().lower()] = value.strip()

    required = ["title", "slug", "meta description", "primary keyword", "category"]
    missing = [key for key in required if not metadata.get(key)]
    if missing:
        raise RuntimeError(f"Missing metadata in {path}: {missing}")

    h1_index = next((index for index, line in enumerate(lines) if line.startswith("# ")), None)
    if h1_index is None:
        raise RuntimeError(f"Missing H1 in {path}")
    if lines[h1_index][2:].strip() != metadata["title"]:
        raise RuntimeError(f"H1/title mismatch in {path}")

    nodes = [pub.paragraph("By James Gorman")]
    paragraph_buffer: list[str] = []

    def flush() -> None:
        if paragraph_buffer:
            value = " ".join(item.strip() for item in paragraph_buffer if item.strip())
            if value:
                nodes.append(linked_paragraph(pub, value))
            paragraph_buffer.clear()

    for raw in lines[h1_index + 1 :]:
        line = raw.strip()
        if not line:
            flush()
        elif line.startswith("### "):
            flush()
            nodes.append(pub.heading(line[4:].strip(), 3))
        elif line.startswith("## "):
            flush()
            nodes.append(pub.heading(line[3:].strip(), 2))
        elif line.startswith("- "):
            flush()
            nodes.append(linked_paragraph(pub, "• " + line[2:].strip()))
        else:
            paragraph_buffer.append(line)
    flush()

    visible = "\n".join(
        child.get("textData", {}).get("text", "")
        for node in nodes
        for child in node.get("nodes", [])
    )
    leaked = [marker for marker in pub.LEAK_MARKERS if marker in visible]
    if leaked:
        raise RuntimeError(f"Visible planning markers in {path}: {leaked}")
    if any(name in visible for name in ["Phil Patterson", "PJ", "Albie"]):
        raise RuntimeError(f"Wrong-name marker in {path}")

    return {
        "title": metadata["title"],
        "slug": metadata["slug"],
        "keyword": metadata["primary keyword"],
        "excerpt": metadata["meta description"],
        "category": metadata["category"],
        "richContent": {"nodes": nodes, "metadata": {"version": 1}},
    }


def get_full(pub, post_id: str) -> dict:
    response = requests.get(
        f"https://www.wixapis.com/blog/v3/draft-posts/{post_id}",
        headers=pub.headers(),
        params={"fieldsets": "RICH_CONTENT"},
        timeout=30,
    )
    response.raise_for_status()
    return response.json().get("draftPost", response.json())


def public_page(url: str) -> tuple[int, str, str]:
    last_error = None
    for attempt in range(5):
        try:
            response = requests.get(url, timeout=45)
            html = response.text
            plain = re.sub(r"<(script|style).*?</\1>", " ", html, flags=re.I | re.S)
            plain = re.sub(r"<[^>]+>", " ", plain)
            return response.status_code, " ".join(unescape(plain).split()), html
        except requests.RequestException as exc:
            last_error = exc
            time.sleep(1.5 * (attempt + 1))
    raise RuntimeError(f"Unable to read {url}: {last_error}")


def qa_result(pub, row: dict, sitemap_text: str) -> dict:
    status, text, _html = public_page(row["url"])
    full = get_full(pub, row["post_id"])
    item = {
        **row,
        "api_status": full.get("status"),
        "api_memberId": full.get("memberId"),
        "http_status": status,
        "title_present": row["title"] in text,
        "visible_byline_james_gorman": "By James Gorman" in text,
        "sitemap_includes_url": row["url"] in sitemap_text,
        "public_contains_wrong_names": any(
            re.search(pattern, text)
            for pattern in [r"\bPhil Patterson\b", r"\bPJ\b", r"\bAlbie\b"]
        ),
        "leak_markers_found": [marker for marker in pub.LEAK_MARKERS if marker in text],
    }
    item["ok"] = (
        item["api_status"] == "PUBLISHED"
        and item["api_memberId"] == pub.JAMES_MEMBER_ID
        and item["http_status"] == 200
        and item["title_present"]
        and item["visible_byline_james_gorman"]
        and item["sitemap_includes_url"]
        and not item["public_contains_wrong_names"]
        and not item["leak_markers_found"]
    )
    return item


def main() -> int:
    pub = load_publisher()
    qa_only = "--qa-only" in sys.argv
    validate_only = "--validate-only" in sys.argv
    drafts = [parse_draft(pub, path) for path in sorted(DRAFT_DIR.glob("*.md"))]
    if len(drafts) != 5:
        raise RuntimeError(f"Expected five drafts, found {len(drafts)}")
    if len({post["slug"] for post in drafts}) != len(drafts):
        raise RuntimeError("Duplicate slug in draft pack")
    if validate_only:
        print(json.dumps({"validated": len(drafts), "slugs": [post["slug"] for post in drafts]}, indent=2))
        return 0

    existing = pub.query_existing()
    results = []
    if qa_only:
        for post in drafts:
            live_post = existing.get(post["slug"])
            if not live_post or not live_post.get("id"):
                raise RuntimeError(f"Published post missing during QA recovery: {post['slug']}")
            results.append({
                "action": "created",
                "title": post["title"],
                "slug": post["slug"],
                "url": f"{SITE}/post/{post['slug']}",
                "post_id": live_post["id"],
                "publish_status": "recovered-after-publish",
                "category": post["category"],
                "target_keyword": post["keyword"],
                "memberId": pub.JAMES_MEMBER_ID,
            })
    else:
        sitemap_before = requests.get(f"{SITE}/blog-posts-sitemap.xml", timeout=45)
        sitemap_before.raise_for_status()
        collisions = [post["slug"] for post in drafts if f"/post/{post['slug']}" in sitemap_before.text]
        if collisions:
            raise RuntimeError(f"Refusing live slug collisions: {collisions}")
        for post in drafts:
            row = pub.create_and_publish(post, existing)
            row["action"] = "created"
            results.append(row)
            time.sleep(1)
        time.sleep(15)
    sitemap = requests.get(f"{SITE}/blog-posts-sitemap.xml", timeout=45)
    sitemap.raise_for_status()
    qa_rows = [qa_result(pub, row, sitemap.text) for row in results]
    failures = [row for row in qa_rows if not row["ok"]]
    now = time.strftime("%Y-%m-%dT%H:%M:%S%z")
    report = {
        "published_at": now,
        "domain": "jamesgormanproperty.com",
        "source_note": "Published after Phil explicitly requested a James Gorman Property and HousePriceDerry content blast on 14 August 2026.",
        "created_count": len(results),
        "results": results,
    }
    qa = {
        "checked_at": now,
        "sitemap_status": sitemap.status_code,
        "results": qa_rows,
        "failures": failures,
    }
    REPORT_JSON.write_text(json.dumps(report, indent=2), encoding="utf-8")
    QA_JSON.write_text(json.dumps(qa, indent=2), encoding="utf-8")

    lines = [
        "# James Gorman transaction guide content release - 2026-08-14",
        "",
        "Published after Phil explicitly requested a James Gorman Property and HousePriceDerry content blast on 14 August 2026.",
        "",
        "## Published URLs",
    ]
    for row in results:
        lines.append(f"- [{row['title']}]({row['url']}) - `{row['target_keyword']}`")
    lines += [
        "",
        "## QA",
        f"- API/live failures: {len(failures)}",
        f"- Sitemap status: {sitemap.status_code}",
        "- Checks: Wix `PUBLISHED`, James member ID, public 200, title/byline, sitemap inclusion, no wrong-name or planning-marker leaks.",
        "",
        "## Scope",
        "- No email, social, GBP, directory outreach, client message or featured-image work was performed.",
    ]
    REPORT_MD.write_text("\n".join(lines) + "\n", encoding="utf-8")
    print(json.dumps({"created": len(results), "failures": len(failures)}, indent=2))
    return 0 if not failures else 1


if __name__ == "__main__":
    raise SystemExit(main())
