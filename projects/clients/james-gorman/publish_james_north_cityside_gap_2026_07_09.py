#!/usr/bin/env python3
from __future__ import annotations

import importlib.util
import json
import re
import time
from html import unescape
from pathlib import Path

import requests

BASE = Path(__file__).resolve().parent
PREVIOUS = BASE / "publish_james_ahrefs_blast_2026_06_08.py"
PACK_DIR = BASE / "content-blast-2026-07-09-north-cityside-gap"
MANIFEST = PACK_DIR / "manifest.json"
DRAFT_PACK = PACK_DIR / "content-blast-2026-07-09-north-cityside-gap-draft-pack.md"
REPORT_JSON = BASE / "blog-publish-report-2026-07-09-north-cityside-gap.json"
QA_JSON = BASE / "blog-publish-api-qa-2026-07-09-north-cityside-gap.json"
REPORT_MD = BASE / "blog-publish-report-2026-07-09-north-cityside-gap.md"
SITE = "https://www.jamesgormanproperty.com"

SOURCE_NOTE = (
    "Published after Phil approved the James Gorman Property North/Cityside local gap content blast "
    "on 9 July 2026. The batch targets Ballymagroarty, Galliagh, Foyle Springs, Ballyarnett and "
    "Skeoge gaps while avoiding direct overlap with the 23 June, 30 June and 5 July published batches."
)


def load_previous_module():
    spec = importlib.util.spec_from_file_location("jgp_previous_publish", PREVIOUS)
    if not spec or not spec.loader:
        raise RuntimeError(f"Could not load previous publisher from {PREVIOUS}")
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    return module


def category_key(category: str, slug: str) -> str:
    text = f"{category} {slug}".lower()
    if "buyer" in text or "houses-for-sale" in text:
        return "buyer"
    return "seller"


def split_pack() -> dict[str, str]:
    text = DRAFT_PACK.read_text(encoding="utf-8")
    matches = list(re.finditer(r"^##\s+\d+\.\s+(.+?)\s*$", text, flags=re.M))
    sections: dict[str, str] = {}
    for index, match in enumerate(matches):
        title = match.group(1).strip()
        start = match.end()
        end = matches[index + 1].start() if index + 1 < len(matches) else len(text)
        sections[title] = text[start:end].strip()
    return sections


def clean_excerpt(section: str) -> str:
    match = re.search(r"^Excerpt:\s*(.+?)\s*$", section, flags=re.M)
    if match:
        return match.group(1).strip()
    match = re.search(r"^Meta description:\s*(.+?)\s*$", section, flags=re.M)
    if match:
        return match.group(1).strip()
    return "A practical James Gorman Property guide for local buyers and sellers in Derry."


def build_nodes(pub, section: str) -> list[dict]:
    try:
        body = section.split("\nBy James Gorman\n", 1)[1]
    except IndexError as exc:
        raise RuntimeError("Missing visible byline in draft section") from exc

    nodes: list[dict] = [pub.paragraph("By James Gorman")]
    paragraph_buffer: list[str] = []
    skipping_internal_links = False

    def flush_paragraph() -> None:
        nonlocal paragraph_buffer
        if paragraph_buffer:
            text = " ".join(item.strip() for item in paragraph_buffer if item.strip())
            if text:
                nodes.append(pub.paragraph(text))
            paragraph_buffer = []

    for raw in body.splitlines():
        line = raw.strip()
        if line == "Suggested internal links:":
            flush_paragraph()
            skipping_internal_links = True
            continue
        if skipping_internal_links:
            continue
        if not line:
            flush_paragraph()
            continue
        if line.startswith("#### "):
            flush_paragraph()
            nodes.append(pub.heading(line[5:].strip(), 3))
            continue
        if line.startswith("### "):
            flush_paragraph()
            nodes.append(pub.heading(line[4:].strip(), 2))
            continue
        if line.startswith("- "):
            flush_paragraph()
            nodes.append(pub.paragraph("• " + line[2:].strip()))
            continue
        paragraph_buffer.append(line)
    flush_paragraph()

    body_text = "\n".join(
        child.get("textData", {}).get("text", "") for node in nodes for child in node.get("nodes", [])
    )
    leak_markers = [
        "Slug:",
        "Category:",
        "Primary keyword:",
        "Meta title:",
        "Meta description:",
        "Excerpt:",
        "Suggested internal links",
        "Status: draft-only",
    ]
    found = [marker for marker in leak_markers if marker in body_text]
    if found:
        raise RuntimeError(f"Visible body leak markers found: {found}")
    return nodes


def make_topics(pub) -> list[dict]:
    manifest = json.loads(MANIFEST.read_text(encoding="utf-8"))
    sections = split_pack()
    topics: list[dict] = []
    for post in manifest["posts"]:
        title = post["title"]
        if title not in sections:
            raise RuntimeError(f"Missing draft section for {title}")
        section = sections[title]
        topics.append(
            {
                "title": title,
                "slug": post["slug"],
                "keyword": post["primary_keyword"],
                "category": category_key(post["category"], post["slug"]),
                "excerpt": clean_excerpt(section),
                "richContent": {"nodes": build_nodes(pub, section), "metadata": {"version": 1}},
            }
        )
    return topics


def write_md_report(report: dict, qa: dict) -> None:
    lines = [
        "# James Gorman North/Cityside gap content blast publish report - 2026-07-09",
        "",
        SOURCE_NOTE,
        "",
        "## Published URLs",
    ]
    for row in report["results"]:
        lines.append(f"- [{row['title']}]({row['url']}) - `{row['target_keyword']}`")
    lines += [
        "",
        "## QA Summary",
        f"- API/live failures: {len(qa['failures'])}",
        f"- Sitemap status: {qa['sitemap_status']}",
        "- Checks: public 200, Wix API `PUBLISHED`, James member ID, H1 match, visible `By James Gorman`, sitemap inclusion, no wrong-name leaks, no draft/SEO leak markers.",
        "",
        "## Notes",
        "- Featured images were not added in this pass.",
        "- No outreach, email, social posting or client-facing message was sent.",
        "- Metadata/planning headers and suggested internal-link notes were stripped from the public article bodies.",
    ]
    REPORT_MD.write_text("\n".join(lines) + "\n", encoding="utf-8")


def visible_live_check(pub, row: dict) -> dict:
    item = pub.live_check(row)
    response = requests.get(row["url"], timeout=30)
    html = response.text
    visible_text = re.sub(r"<(script|style).*?</\1>", " ", html, flags=re.I | re.S)
    visible_text = re.sub(r"<[^>]+>", " ", visible_text)
    visible_text = " ".join(unescape(visible_text).split())
    visible_hits = [name for name in ["Phil Patterson", "PJ", "Albie"] if name in visible_text]
    item["raw_html_contains_wrong_name_substrings"] = item.get("public_contains_wrong_names", False)
    item["visible_wrong_name_hits"] = visible_hits
    item["public_contains_wrong_names"] = bool(visible_hits)
    return item


def main() -> int:
    pub = load_previous_module()
    topics = make_topics(pub)
    expected = 8
    if len(topics) != expected:
        raise RuntimeError(f"Expected {expected} topics, found {len(topics)}")

    slugs = [topic["slug"] for topic in topics]
    duplicate_batch_slugs = sorted({slug for slug in slugs if slugs.count(slug) > 1})
    if duplicate_batch_slugs:
        raise RuntimeError(f"Duplicate slugs in batch: {duplicate_batch_slugs}")

    existing = pub.query_existing()
    duplicates_live = [topic["slug"] for topic in topics if topic["slug"] in existing]
    if duplicates_live:
        raise RuntimeError(f"Refusing duplicate live slugs: {duplicates_live}")

    results = []
    for topic in topics:
        results.append(pub.create_and_publish(topic, existing))
        time.sleep(0.8)

    time.sleep(15)
    sitemap = requests.get(f"{SITE}/blog-posts-sitemap.xml", timeout=30)
    after = pub.query_existing()
    qa = {"checked_at": time.strftime("%Y-%m-%dT%H:%M:%S%z"), "sitemap_status": sitemap.status_code, "results": [], "failures": []}
    for row in results:
        post = after.get(row["slug"], {})
        item = {
            **row,
            "api_status": post.get("status"),
            "api_memberId": post.get("memberId"),
            "actual_slug": post.get("seoSlug") or (post.get("slugs") or [None])[0],
            "sitemap_includes_url": row["url"] in sitemap.text,
            **visible_live_check(pub, row),
        }
        ok = (
            item["api_status"] == "PUBLISHED"
            and item["api_memberId"] == pub.JAMES_MEMBER_ID
            and item["http_status"] == 200
            and item["h1_matches"]
            and item["visible_byline_james_gorman"]
            and not item["public_contains_wrong_names"]
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
        "source_note": SOURCE_NOTE,
        "draft_pack": str(DRAFT_PACK),
        "author_note": "Posts are assigned to James' Wix memberId and include a visible 'By James Gorman' body byline.",
        "results": results,
    }
    REPORT_JSON.write_text(json.dumps(report, indent=2), encoding="utf-8")
    QA_JSON.write_text(json.dumps(qa, indent=2), encoding="utf-8")
    write_md_report(report, qa)
    print(json.dumps({"published": len(results), "failures": len(qa["failures"]), "report": str(REPORT_MD), "qa": str(QA_JSON)}, indent=2))
    return 0 if not qa["failures"] else 1


if __name__ == "__main__":
    raise SystemExit(main())
