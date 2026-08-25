#!/usr/bin/env python3
from __future__ import annotations

import importlib.util
import json
from datetime import datetime, timezone
from pathlib import Path

BASE = Path(__file__).resolve().parent
GSC_BASE = BASE / "gsc-submit-inspect-2026-07-13-big-content-blast.py"
PUBLISH_REPORT = BASE / "blog-publish-report-2026-08-25-seller-readiness.json"
REPORT_JSON = BASE / "gsc-indexing-2026-08-25-seller-readiness.json"
REPORT_MD = BASE / "gsc-indexing-2026-08-25-seller-readiness.md"


def load_gsc():
    spec = importlib.util.spec_from_file_location("james_gsc", GSC_BASE)
    if not spec or not spec.loader:
        raise RuntimeError(f"Unable to load GSC helper: {GSC_BASE}")
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    return module


def main() -> int:
    gsc = load_gsc()
    report = json.loads(PUBLISH_REPORT.read_text(encoding="utf-8"))
    urls = [row["url"] for row in report["results"]]
    out = {
        "checked_at": datetime.now(timezone.utc).isoformat(),
        "site": gsc.SITE,
        "sitemap": gsc.SITEMAP,
        "sitemap_submit": gsc.submit_sitemap(),
        "inspections": [],
    }
    for url in urls:
        response = gsc.inspect(url)
        index_status = response.get("json", {}).get("inspectionResult", {}).get("indexStatusResult", {})
        out["inspections"].append(
            {
                "url": url,
                "ok": response.get("ok"),
                "status": response.get("status"),
                "verdict": index_status.get("verdict"),
                "coverageState": index_status.get("coverageState"),
                "raw": response,
            }
        )

    REPORT_JSON.write_text(json.dumps(out, indent=2), encoding="utf-8")
    lines = [
        "# GSC indexing - James Gorman seller-readiness guides - 25 August 2026",
        "",
        f"- Property: `{gsc.SITE}`",
        f"- Sitemap: `{gsc.SITEMAP}`",
        f"- Sitemap submission: status={out['sitemap_submit'].get('status')} ok={out['sitemap_submit'].get('ok')}",
        "",
        "## URL inspections",
    ]
    for row in out["inspections"]:
        lines.append(
            f"- {row['url']} - ok={row['ok']} status={row['status']} verdict={row['verdict']} coverage={row['coverageState']}"
        )
    REPORT_MD.write_text("\n".join(lines) + "\n", encoding="utf-8")

    errors = [row for row in out["inspections"] if not row["ok"]]
    print(
        json.dumps(
            {
                "sitemap_ok": out["sitemap_submit"].get("ok"),
                "inspected": len(out["inspections"]),
                "errors": len(errors),
                "report": str(REPORT_MD),
            },
            indent=2,
        )
    )
    return 1 if errors or not out["sitemap_submit"].get("ok") else 0


if __name__ == "__main__":
    raise SystemExit(main())
