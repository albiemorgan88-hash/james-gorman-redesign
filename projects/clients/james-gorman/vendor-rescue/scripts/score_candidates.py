#!/usr/bin/env python3
"""Score James Gorman vendor-rescue property candidates from CSV.

Input CSV fields are documented in ../candidate-schema.csv.
Output: markdown shortlist grouped by A/B/C priority.
"""
import csv
import sys
from pathlib import Path
from datetime import date

BT_TARGETS = ("BT47", "BT48")
WEAK_WORDS = {"weak", "poor", "low", "bad"}
AVG_WORDS = {"average", "ok", "mixed"}


def norm(v):
    return (v or "").strip()


def as_int(v, default=0):
    try:
        return int(float(str(v).replace(",", "").strip()))
    except Exception:
        return default


def score(row):
    points = 0
    reasons = []
    postcode = norm(row.get("postcode")).upper()
    if postcode.startswith(BT_TARGETS):
        points += 10
        reasons.append("BT47/BT48 target area")

    days = as_int(row.get("days_on_market"))
    if days >= 60:
        points += 30
        reasons.append(f"{days} days on market")
    elif days >= 45:
        points += 15
        reasons.append(f"near-stale at {days} days")

    price_notes = norm(row.get("price_change_notes")).lower()
    last_change = norm(row.get("last_price_change_date"))
    if not last_change or "no" in price_notes or "none" in price_notes or "unchanged" in price_notes:
        points += 15
        reasons.append("no obvious recent price movement")

    photo_quality = norm(row.get("photo_quality")).lower()
    if photo_quality in WEAK_WORDS:
        points += 15
        reasons.append("weak photos/presentation")
    elif photo_quality in AVG_WORDS:
        points += 7
        reasons.append("presentation could be improved")

    desc_quality = norm(row.get("description_quality")).lower()
    if desc_quality in WEAK_WORDS:
        points += 10
        reasons.append("weak listing copy")
    elif desc_quality in AVG_WORDS:
        points += 5
        reasons.append("listing copy could be sharper")

    motivation = norm(row.get("vendor_motivation_notes")).lower()
    motivation_terms = ["vacant", "chain", "probate", "rental", "landlord", "reduced", "stale", "empty", "relocation"]
    hits = [t for t in motivation_terms if t in motivation]
    if hits:
        points += 10
        reasons.append("motivation clues: " + ", ".join(hits[:3]))

    asking = as_int(row.get("asking_price"))
    if asking >= 180000:
        points += 10
        reasons.append("meaningful instruction value")

    agent = norm(row.get("current_agent")).lower()
    if "james gorman" in agent:
        points = -999
        reasons.append("skip: current James listing")

    return points, reasons


def bucket(points):
    if points >= 75:
        return "A-list — build showcase this week"
    if points >= 55:
        return "B-list — letter/monitor"
    if points < 0:
        return "Skip"
    return "C-list — monitor only"


def main():
    if len(sys.argv) < 2:
        print("Usage: score_candidates.py candidates.csv [output.md]", file=sys.stderr)
        sys.exit(2)
    src = Path(sys.argv[1])
    out = Path(sys.argv[2]) if len(sys.argv) > 2 else src.with_suffix(".shortlist.md")
    rows = list(csv.DictReader(src.open()))
    scored = []
    for row in rows:
        points, reasons = score(row)
        scored.append((points, bucket(points), reasons, row))
    scored.sort(key=lambda x: x[0], reverse=True)

    lines = [f"# James Gorman Vendor Rescue Shortlist — {date.today().isoformat()}", ""]
    lines.append(f"Source CSV: `{src}`")
    lines.append("")
    for points, bkt, reasons, row in scored:
        address = norm(row.get("address")) or "Unknown address"
        url = norm(row.get("property_url"))
        lines.append(f"## {address} — {points} points")
        lines.append(f"**Bucket:** {bkt}")
        lines.append("")
        lines.append(f"- URL: {url}")
        lines.append(f"- Postcode/area: {norm(row.get('postcode'))} / {norm(row.get('area'))}")
        lines.append(f"- Asking price: {norm(row.get('asking_price'))}")
        lines.append(f"- Days on market: {norm(row.get('days_on_market'))}")
        lines.append(f"- Current agent: {norm(row.get('current_agent'))}")
        lines.append(f"- Reasons: {', '.join(reasons) if reasons else 'No major signals'}")
        lines.append(f"- Notes: {norm(row.get('notes'))}")
        lines.append("")
    out.write_text("\n".join(lines))
    print(f"Wrote {out} ({len(scored)} candidates)")

if __name__ == "__main__":
    main()
