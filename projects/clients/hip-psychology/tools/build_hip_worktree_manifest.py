#!/usr/bin/env python3
from __future__ import annotations

import argparse
import datetime as dt
import json
import re
import time
from html import unescape
from pathlib import Path
from urllib.error import HTTPError, URLError
from urllib.request import Request, urlopen


CLIENT_ROOT = Path("/Users/philsagent/.openclaw/workspace/projects/clients/hip-psychology")
OUT = Path(__file__).resolve().parent
TODAY = dt.date(2026, 7, 13).isoformat()

SERVICE_URLS = [
    ("Training for Schools", "https://hippsychology.com/training/"),
    ("Programmes for Schools", "https://hippsychology.com/programmes/"),
    ("Staff Wellbeing INSET for Schools", "https://hippsychology.com/training/staff-wellbeing-inset/"),
    ("Emotion Coaching Training for Schools", "https://hippsychology.com/training/emotion-coaching/"),
    ("Cultural Diversity, Respect and Inclusion Programme", "https://hippsychology.com/programmes/cultural-diversity/"),
    ("AI in Schools: Wellbeing and Change-Management Training", "https://hippsychology.com/training/ai-in-schools/"),
    ("School Wellbeing Consultancy for Schools", "https://hippsychology.com/consultancy/"),
    ("Workplace Wellbeing and Organisational Psychology Support", "https://hippsychology.com/organisations/"),
]

PROHIBITED_PUBLIC_MARKERS = [
    "PJ",
    "Albie",
    "agent instructions",
    "system prompt",
    "developer message",
    "HIP_WP_APP_PASSWORD",
    "HIP_WP_USERNAME",
    "wp_app_password",
]


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser()
    parser.add_argument("--live", action="store_true", help="Verify public URLs over HTTP")
    return parser.parse_args()


def read_json(path: Path):
    try:
        return json.loads(path.read_text(encoding="utf-8"))
    except Exception as exc:
        return {"_error": str(exc)}


def collect_publish_records() -> list[dict]:
    records: list[dict] = []
    for path in sorted(CLIENT_ROOT.glob("blog-drafts/**/publish-result.json")):
        data = read_json(path)
        if isinstance(data, list):
            items = data
        elif isinstance(data, dict) and isinstance(data.get("published"), list):
            items = data["published"]
        elif isinstance(data, dict) and isinstance(data.get("results"), list):
            items = data["results"]
        else:
            items = []
        for item in items:
            if not isinstance(item, dict):
                continue
            url = item.get("link") or item.get("url")
            if not url:
                continue
            records.append(
                {
                    "kind": "post",
                    "title": item.get("title") or item.get("slug") or url,
                    "slug": item.get("slug"),
                    "url": url,
                    "wp_id": item.get("id"),
                    "status": item.get("status"),
                    "action": item.get("action"),
                    "source": str(path.relative_to(CLIENT_ROOT)),
                }
            )
    for title, url in SERVICE_URLS:
        records.append(
            {
                "kind": "service_or_parent_page",
                "title": title,
                "slug": url.rstrip("/").rsplit("/", 1)[-1],
                "url": url,
                "wp_id": None,
                "status": "publish",
                "action": "created_or_updated",
                "source": "reports/hip-seo-execution-2026-07-06.md",
            }
        )
    deduped: dict[str, dict] = {}
    for record in records:
        deduped[record["url"]] = record
    return sorted(deduped.values(), key=lambda item: (item["kind"], item["source"], item["url"]))


def collect_batch_status() -> list[dict]:
    batches: list[dict] = []
    for path in sorted(CLIENT_ROOT.glob("blog-drafts/ahrefs-blast-*/report.md")):
        text = path.read_text(encoding="utf-8", errors="replace")
        live_count = len(re.findall(r"https://hippsychology\.com/[^)\s]+", text))
        failure_match = re.search(r"Failures:\s*([0-9]+)", text)
        status_match = re.search(r"Status:\s*(.+)", text)
        publish_path = path.parent / "publish-result.json"
        publish_data = read_json(publish_path) if publish_path.exists() else {}
        if isinstance(publish_data, list):
            publish_items = publish_data
        elif isinstance(publish_data, dict) and isinstance(publish_data.get("published"), list):
            publish_items = publish_data["published"]
        elif isinstance(publish_data, dict) and isinstance(publish_data.get("results"), list):
            publish_items = publish_data["results"]
        else:
            publish_items = []
        inferred_status = "Published live" if publish_items and all(item.get("status") == "publish" for item in publish_items if isinstance(item, dict)) else "unknown"
        batches.append(
            {
                "batch": path.parent.name,
                "status": status_match.group(1).strip() if status_match else inferred_status,
                "live_url_count_in_report": live_count,
                "reported_failures": int(failure_match.group(1)) if failure_match else None,
                "report": str(path.relative_to(CLIENT_ROOT)),
                "publish_result": str(publish_path.relative_to(CLIENT_ROOT))
                if publish_path.exists()
                else None,
                "qa_result": str((path.parent / "qa-result.json").relative_to(CLIENT_ROOT))
                if (path.parent / "qa-result.json").exists()
                else None,
            }
        )
    return batches


def fetch(url: str) -> tuple[int | None, str, str | None]:
    req = Request(url, headers={"User-Agent": "OpenClaw-HIP-Tidy-QA/2026-07-13"})
    try:
        with urlopen(req, timeout=45) as response:
            return response.status, response.read().decode("utf-8", errors="replace"), None
    except HTTPError as exc:
        body = exc.read().decode("utf-8", errors="replace")
        return exc.code, body, f"HTTPError: {exc.code}"
    except URLError as exc:
        return None, "", f"URLError: {exc.reason}"


def page_title(html: str) -> str | None:
    match = re.search(r"<title[^>]*>(.*?)</title>", html, re.I | re.S)
    return unescape(re.sub(r"\s+", " ", match.group(1)).strip()) if match else None


def verify_live(records: list[dict]) -> list[dict]:
    results: list[dict] = []
    for index, record in enumerate(records, start=1):
        status, html, error = fetch(record["url"])
        lower = html.lower()
        marker_hits = [marker for marker in PROHIBITED_PUBLIC_MARKERS if marker.lower() in lower]
        if status is None or status >= 400:
            ok = False
        else:
            ok = not marker_hits
        results.append(
            {
                **record,
                "http_status": status,
                "title_tag": page_title(html),
                "bytes": len(html),
                "marker_hits": marker_hits,
                "error": error,
                "ok": ok,
            }
        )
        if index % 25 == 0:
            time.sleep(0.5)
    return results


def build_markdown(records: list[dict], batches: list[dict], live_results: list[dict] | None) -> str:
    post_count = sum(1 for item in records if item["kind"] == "post")
    service_count = sum(1 for item in records if item["kind"] == "service_or_parent_page")
    live_failures = [item for item in live_results or [] if not item["ok"]]
    lines = [
        "# HIP Psychology Worktree Status - 2026-07-13",
        "",
        "## Current Canonical Structure",
        "- `blog-drafts/ahrefs-blast-YYYY-MM-DD/`: dated content batches. Keep each batch report, publish result and QA result together.",
        "- `reports/week-*`: client-facing weekly SEO reports.",
        "- `reports/hip-seo-execution-2026-07-06.md`: service-page and homepage SEO execution report.",
        "- `reports/press-pitch.md`: AI-in-schools press pitch. Not sent.",
        "- `data/authors.generated-from-live-site.json`: generated author data from public team page; not canonical until manually confirmed.",
        "",
        "## Deployment Inventory",
        f"- Published post URLs found from batch manifests: {post_count}",
        f"- Service/parent pages tracked from the 2026-07-06 execution: {service_count}",
        f"- Total unique tracked public URLs: {len(records)}",
        f"- Dated batch reports found: {len(batches)}",
        "",
        "## Latest Batches",
    ]
    for batch in batches[-6:]:
        lines.append(
            f"- `{batch['batch']}`: {batch['status']}; failures: {batch['reported_failures']}; report: `{batch['report']}`"
        )
    lines.extend(
        [
            "",
            "## Live Verification",
        ]
    )
    if live_results is None:
        lines.append("- Not run in this pass.")
    else:
        lines.extend(
            [
                f"- Checked URLs: {len(live_results)}",
                f"- Failures: {len(live_failures)}",
                "- Checks: HTTP status below 400 and no prohibited prompt/secret/public-name markers.",
            ]
        )
        if live_failures:
            lines.append("")
            lines.append("### Failures")
            for item in live_failures[:25]:
                lines.append(
                    f"- `{item['url']}` status={item['http_status']} markers={item['marker_hits']} error={item['error']}"
                )
    lines.extend(
        [
            "",
            "## Tidy Decision",
            "- No files were deleted or moved.",
            "- The worktree is unified by this status report plus `data/live-deployment-manifest-2026-07-13.json`.",
            "- Historic root-level reports and exports should remain as archive material unless a separate destructive cleanup is approved.",
            "",
            "## Remaining Operational Gaps",
            "- The WordPress/theme stack still does not render a dedicated homepage meta description tag; homepage title phrase is handled through the WordPress site description.",
            "- `school_leads` remains unconfirmed. Current service pages route to the existing contact path.",
            "- Press pitch has been prepared only; no outreach has been sent.",
        ]
    )
    return "\n".join(lines) + "\n"


def main() -> None:
    args = parse_args()
    records = collect_publish_records()
    batches = collect_batch_status()
    live_results = verify_live(records) if args.live else None
    manifest = {
        "generated_at": TODAY,
        "client_root": str(CLIENT_ROOT),
        "live_verified": args.live,
        "records": live_results if live_results is not None else records,
        "batches": batches,
    }
    (OUT / "live-deployment-manifest-2026-07-13.json").write_text(json.dumps(manifest, indent=2), encoding="utf-8")
    (OUT / "hip-worktree-status-2026-07-13.md").write_text(
        build_markdown(records, batches, live_results), encoding="utf-8"
    )
    if live_results is not None and any(not item["ok"] for item in live_results):
        raise SystemExit(1)
    print(json.dumps({"records": len(records), "batches": len(batches), "live_verified": args.live}, indent=2))


if __name__ == "__main__":
    main()
