#!/usr/bin/env python3
from __future__ import annotations

import importlib.util
import json
import re
import sys
import time
from html import escape, unescape
from pathlib import Path

import requests

BASE = Path(__file__).resolve().parent
PACK = BASE / "content-blast-2026-08-25-seller-readiness"
DRAFT_DIR = PACK / "drafts"
REPORT_JSON = BASE / "blog-publish-report-2026-08-25-seller-readiness.json"
QA_JSON = BASE / "blog-publish-api-qa-2026-08-25-seller-readiness.json"
REPORT_MD = BASE / "blog-publish-report-2026-08-25-seller-readiness.md"
PREVIEW_HTML = Path("/tmp/jgp-seller-readiness-preview-2026-08-25.html")
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


def render_preview(post: dict) -> Path:
    blocks = []
    for node in post["richContent"]["nodes"]:
        tag = "p"
        if node.get("type") == "HEADING":
            level = node.get("headingData", {}).get("level", 2)
            tag = f"h{level}"
        runs = []
        for child in node.get("nodes", []):
            data = child.get("textData", {})
            value = escape(data.get("text", ""))
            link = next(
                (
                    decoration.get("linkData", {}).get("link", {}).get("url")
                    for decoration in data.get("decorations", [])
                    if decoration.get("type") == "LINK"
                ),
                None,
            )
            if link:
                value = f'<a href="{escape(link, quote=True)}">{value}</a>'
            runs.append(value)
        blocks.append(f"<{tag}>{''.join(runs)}</{tag}>")
    document = f"""<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>{escape(post['title'])}</title><style>
body{{margin:0;background:#f7f4f1;color:#2d2633;font:18px/1.7 Arial,sans-serif}}main{{max-width:760px;margin:auto;padding:48px 24px 80px;background:#fff}}h1,h2,h3{{font-family:Georgia,serif;line-height:1.18;color:#2e183f}}h1{{font-size:clamp(2rem,7vw,3.4rem)}}h2{{margin-top:2.2em}}a{{color:#7b315e}}p{{margin:1em 0}}
</style></head><body><main><h1>{escape(post['title'])}</h1>{''.join(blocks)}</main></body></html>"""
    PREVIEW_HTML.write_text(document, encoding="utf-8")
    return PREVIEW_HTML


def qa_result(pub, row: dict, sitemap_text: str) -> dict:
    status, text, html = public_page(row["url"])
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
            re.search(rf"\b{re.escape(name)}\b", text) for name in ["Phil Patterson", "PJ", "Albie"]
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
    preview_html = "--preview-html" in sys.argv
    confirm_publish = "--confirm-publish" in sys.argv
    drafts = [parse_draft(pub, path) for path in sorted(DRAFT_DIR.glob("*.md"))]
    if len(drafts) != 5:
        raise RuntimeError(f"Expected five drafts, found {len(drafts)}")
    if len({post["slug"] for post in drafts}) != len(drafts):
        raise RuntimeError("Duplicate slug in draft pack")
    saved_sitemap = PACK / "raw" / "blog-posts-sitemap-before-2026-08-25.xml"
    if saved_sitemap.exists():
        sitemap_text = saved_sitemap.read_text(encoding="utf-8")
        collisions = [post["slug"] for post in drafts if f"/post/{post['slug']}" in sitemap_text]
        if collisions:
            raise RuntimeError(f"Draft slugs already exist in saved live sitemap: {collisions}")
    if validate_only:
        print(json.dumps({"validated": len(drafts), "slugs": [post["slug"] for post in drafts]}, indent=2))
        return 0
    if preview_html:
        preview = render_preview(drafts[0])
        print(json.dumps({"preview": str(preview), "title": drafts[0]["title"]}, indent=2))
        return 0
    if not qa_only and not confirm_publish:
        raise RuntimeError("Refusing publication without --confirm-publish after Phil's explicit approval")

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
        "source_note": "Published only after Phil explicitly approved the five-post James Gorman seller-readiness batch on 25 August 2026.",
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
        "# James Gorman seller-readiness content release - 2026-08-25",
        "",
        "Published only after Phil explicitly approved the five-post seller-readiness batch on 25 August 2026.",
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
