#!/usr/bin/env python3
from __future__ import annotations

import json
import os
import urllib.error
import urllib.parse
import urllib.request
from datetime import datetime, timezone
from pathlib import Path

BASE = Path(__file__).resolve().parent
TOKEN_PATH = Path("/Users/philsagent/.config/google-analytics-tokens.json")
REPORT_JSON = BASE / "gsc-indexing-2026-07-05-local-intent.json"
REPORT_MD = BASE / "gsc-indexing-2026-07-05-local-intent.md"
PUBLISH_REPORT = BASE / "blog-publish-report-2026-07-05-local-intent.json"
SITE = "sc-domain:jamesgormanproperty.com"
SITEMAP = "https://www.jamesgormanproperty.com/blog-posts-sitemap.xml"


def load_tokens():
    data = json.loads(TOKEN_PATH.read_text()) if TOKEN_PATH.exists() else {}
    if os.environ.get("GSC_CLIENT_ID"):
        data["client_id"] = os.environ.get("GSC_CLIENT_ID")
    if os.environ.get("GSC_CLIENT_SECRET"):
        data["client_secret"] = os.environ.get("GSC_CLIENT_SECRET")
    if os.environ.get("GSC_REFRESH_TOKEN"):
        data["refresh_token"] = os.environ.get("GSC_REFRESH_TOKEN")
    if os.environ.get("GSC_ACCESS_TOKEN"):
        data["access_token"] = os.environ.get("GSC_ACCESS_TOKEN")
    return data


def save_access_token(token: str):
    if not TOKEN_PATH.exists():
        return
    data = json.loads(TOKEN_PATH.read_text())
    data["access_token"] = token
    TOKEN_PATH.write_text(json.dumps(data, indent=2))


def refresh() -> str:
    tokens = load_tokens()
    data = urllib.parse.urlencode(
        {
            "client_id": tokens.get("client_id", ""),
            "client_secret": tokens.get("client_secret", ""),
            "refresh_token": tokens.get("refresh_token", ""),
            "grant_type": "refresh_token",
        }
    ).encode()
    req = urllib.request.Request(
        "https://oauth2.googleapis.com/token",
        data=data,
        headers={"Content-Type": "application/x-www-form-urlencoded"},
    )
    with urllib.request.urlopen(req, timeout=30) as r:
        new = json.loads(r.read().decode())
    save_access_token(new["access_token"])
    return new["access_token"]


def request_json(url: str, method="GET", payload=None, retry=True):
    tokens = load_tokens()
    data = json.dumps(payload).encode() if payload is not None else None
    req = urllib.request.Request(
        url,
        data=data,
        method=method,
        headers={
            "Authorization": f"Bearer {tokens.get('access_token', '')}",
            "Content-Type": "application/json",
        },
    )
    try:
        with urllib.request.urlopen(req, timeout=45) as r:
            raw = r.read().decode()
            return {"ok": True, "status": r.status, "json": json.loads(raw) if raw else {}}
    except urllib.error.HTTPError as e:
        body = e.read().decode(errors="replace")
        if e.code == 401 and retry:
            refresh()
            return request_json(url, method, payload, retry=False)
        try:
            parsed = json.loads(body)
        except Exception:
            parsed = body[:1000]
        return {"ok": False, "status": e.code, "error": parsed}


def submit_sitemap():
    enc_site = urllib.parse.quote(SITE, safe="")
    enc_feed = urllib.parse.quote(SITEMAP, safe="")
    url = f"https://www.googleapis.com/webmasters/v3/sites/{enc_site}/sitemaps/{enc_feed}"
    return request_json(url, method="PUT")


def inspect(url: str):
    endpoint = "https://searchconsole.googleapis.com/v1/urlInspection/index:inspect"
    payload = {"inspectionUrl": url, "siteUrl": SITE, "languageCode": "en-US"}
    return request_json(endpoint, method="POST", payload=payload)


def main():
    report = json.loads(PUBLISH_REPORT.read_text())
    urls = [r["url"] for r in report["results"]]
    out = {
        "checked_at": datetime.now(timezone.utc).isoformat(),
        "site": SITE,
        "sitemap": SITEMAP,
        "sitemap_submit": submit_sitemap(),
        "inspections": [],
    }
    for url in urls:
        res = inspect(url)
        verdict = None
        coverage = None
        if res.get("ok"):
            idx = res.get("json", {}).get("inspectionResult", {}).get("indexStatusResult", {})
            verdict = idx.get("verdict")
            coverage = idx.get("coverageState")
        out["inspections"].append(
            {
                "url": url,
                "ok": res.get("ok"),
                "status": res.get("status"),
                "verdict": verdict,
                "coverageState": coverage,
                "raw": res,
            }
        )
    REPORT_JSON.write_text(json.dumps(out, indent=2), encoding="utf-8")
    lines = [
        "# GSC Indexing - James Gorman Local Intent Blast - 5 July 2026",
        "",
        f"- Property: `{SITE}`",
        f"- Sitemap submitted: `{SITEMAP}`",
        f"- Sitemap submit status: {out['sitemap_submit'].get('status')} / ok={out['sitemap_submit'].get('ok')}",
        "",
        "## URL Inspection",
    ]
    for row in out["inspections"]:
        lines.append(
            f"- {row['url']} - ok={row['ok']} status={row['status']} verdict={row.get('verdict')} coverage={row.get('coverageState')}"
        )
    REPORT_MD.write_text("\n".join(lines) + "\n", encoding="utf-8")
    print(
        json.dumps(
            {
                "sitemap_ok": out["sitemap_submit"].get("ok"),
                "inspected": len(out["inspections"]),
                "errors": [r for r in out["inspections"] if not r.get("ok")],
                "report": str(REPORT_MD),
            },
            indent=2,
        )
    )


if __name__ == "__main__":
    main()
