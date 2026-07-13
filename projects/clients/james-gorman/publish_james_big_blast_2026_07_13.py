#!/usr/bin/env python3
from __future__ import annotations

import importlib.util
import json
import re
import textwrap
import time
from html import unescape
from pathlib import Path

import requests

BASE = Path(__file__).resolve().parent
PREVIOUS = BASE / "publish_james_ahrefs_blast_2026_06_08.py"
PACK_DIR = BASE / "content-blast-2026-07-13-big"
MANIFEST = PACK_DIR / "manifest.json"
DRAFT_PACK = PACK_DIR / "content-blast-2026-07-13-big-draft-pack.md"
REPORT_JSON = BASE / "blog-publish-report-2026-07-13-big-content-blast.json"
QA_JSON = BASE / "blog-publish-api-qa-2026-07-13-big-content-blast.json"
REPORT_MD = BASE / "blog-publish-report-2026-07-13-big-content-blast.md"
SITE = "https://www.jamesgormanproperty.com"

SOURCE_NOTE = (
    "Published after Phil requested a big James Gorman Property website content blast on 13 July 2026. "
    "The batch targets seller-intent gaps around valuations, switching estate agents, stale listings, "
    "Newbuildings, Magheramason and Greysteel while avoiding direct slug overlap with the existing live blog."
)

POSTS = [
    {
        "title": "Free House Valuation Derry: What Sellers Should Expect Before Listing",
        "slug": "free-house-valuation-derry-seller-guide-2026",
        "primary_keyword": "free house valuation derry",
        "meta_title": "Free House Valuation Derry | Seller Guide",
        "meta_description": "Thinking of booking a free house valuation in Derry? Learn what a proper valuation should cover before you choose an agent or launch price.",
        "excerpt": "A practical guide for Derry sellers on what a free house valuation should include before listing.",
        "angle": "free valuation",
        "place": "Derry",
        "local_notes": "Cityside, Waterside, Culmore, Newbuildings, Eglinton and nearby villages can all behave differently, so a useful valuation needs local comparison rather than a broad online estimate.",
        "internal_links": ["Property Valuation Derry Complete Guide", "Prepare House for Valuation Derry", "How to Price Your House for Sale Derry"],
    },
    {
        "title": "Online House Valuation Derry: Why a Local Check Still Matters",
        "slug": "online-house-valuation-derry-local-guide-2026",
        "primary_keyword": "online house valuation derry",
        "meta_title": "Online House Valuation Derry | Local Advice",
        "meta_description": "Online house valuations can be useful, but Derry sellers still need local evidence on condition, demand and competing homes before pricing.",
        "excerpt": "Why online house valuations are only a starting point for Derry sellers preparing to list.",
        "angle": "online valuation",
        "place": "Derry",
        "local_notes": "Automated tools cannot properly judge parking, presentation, street-by-street demand, condition, garden space, or how one Derry buyer pool compares with another.",
        "internal_links": ["House Valuation Derry Guide", "Choosing Between Estate Agent Valuations Derry", "Property Valuer Derry Guide"],
    },
    {
        "title": "Property Appraisal Derry: Seller Guide to Pricing Your Home",
        "slug": "property-appraisal-derry-seller-guide-2026",
        "primary_keyword": "property appraisal derry",
        "meta_title": "Property Appraisal Derry | Seller Guide",
        "meta_description": "A property appraisal in Derry should explain price, presentation, competition and buyer demand. Use this seller guide before listing.",
        "excerpt": "How a proper Derry property appraisal should turn market evidence into a clear launch plan.",
        "angle": "property appraisal",
        "place": "Derry",
        "local_notes": "A strong appraisal should compare real buyer behaviour, recent competing listings and the practical details that affect viewings in the current Derry market.",
        "internal_links": ["Property Valuation Derry Complete Guide", "Estate Agents Derry Comparison Checklist", "Questions to Ask Estate Agent Before Selling Derry"],
    },
    {
        "title": "Switch Estate Agents Derry: When a Fresh Plan Makes Sense",
        "slug": "switch-estate-agents-derry-seller-guide-2026",
        "primary_keyword": "switch estate agents derry",
        "meta_title": "Switch Estate Agents Derry | Seller Guide",
        "meta_description": "If your Derry home is not getting the right interest, learn when switching estate agents may help and what to check before moving.",
        "excerpt": "A calm checklist for Derry sellers considering whether to switch estate agents.",
        "angle": "switch estate agents",
        "place": "Derry",
        "local_notes": "Before switching, sellers should separate price problems from presentation, photography, marketing, feedback, access and agent communication problems.",
        "internal_links": ["House Not Selling Derry What To Do", "Estate Agent Contracts Derry Sellers Guide", "Property Marketing Plan Derry Sellers Guide"],
    },
    {
        "title": "Change Estate Agent Derry: What to Check Before You Move",
        "slug": "change-estate-agent-derry-checklist-2026",
        "primary_keyword": "change estate agent derry",
        "meta_title": "Change Estate Agent Derry | Checklist",
        "meta_description": "Thinking about changing estate agent in Derry? Check contract terms, marketing, pricing, feedback and relaunch strategy before you move.",
        "excerpt": "What Derry sellers should review before changing estate agent or relaunching a property.",
        "angle": "change estate agent",
        "place": "Derry",
        "local_notes": "A relaunch works best when it corrects the reason buyers held back, rather than simply moving the same listing to a different agent.",
        "internal_links": ["Switch Estate Agents Derry", "Questions to Ask Estate Agent Before Selling Derry", "Online Estate Agent vs Local Estate Agent Derry"],
    },
    {
        "title": "House on Market Too Long Derry: How to Regain Buyer Interest",
        "slug": "house-on-market-too-long-derry-seller-guide-2026",
        "primary_keyword": "house on market too long derry",
        "meta_title": "House on Market Too Long Derry | Seller Guide",
        "meta_description": "If your Derry house has been on the market too long, review pricing, presentation, photography, feedback and relaunch options with this guide.",
        "excerpt": "A seller guide for Derry homeowners whose property has lost momentum on the market.",
        "angle": "stale listing",
        "place": "Derry",
        "local_notes": "Longer time on market does not always mean the house is unsellable; it usually means the launch plan, pricing or buyer message needs a proper review.",
        "internal_links": ["House Not Selling Derry What To Do", "Property Marketing Plan Derry Sellers Guide", "How to Price Your House for Sale Derry"],
    },
    {
        "title": "Property Valuation Newbuildings Derry: Seller Guide Before Listing",
        "slug": "property-valuation-newbuildings-derry-seller-guide-2026",
        "primary_keyword": "property valuation Newbuildings Derry",
        "meta_title": "Property Valuation Newbuildings Derry | Seller Guide",
        "meta_description": "Selling in Newbuildings, Derry? Learn what affects property valuation, buyer demand, presentation and launch price before listing.",
        "excerpt": "Local valuation advice for Newbuildings homeowners preparing to sell.",
        "angle": "local valuation",
        "place": "Newbuildings",
        "local_notes": "Newbuildings buyers often compare village space, access to Derry, family practicality, parking and condition against Waterside and wider BT47 options.",
        "internal_links": ["Houses for Sale Newbuildings Buyer Guide", "Property Valuation BT47 Seller Guide", "Prepare House for Valuation Derry"],
    },
    {
        "title": "Sell My House Newbuildings Derry: Pricing, Timing and Launch Advice",
        "slug": "sell-my-house-newbuildings-derry-guide-2026",
        "primary_keyword": "sell my house Newbuildings Derry",
        "meta_title": "Sell My House Newbuildings Derry | Seller Guide",
        "meta_description": "Thinking, sell my house in Newbuildings, Derry? Use this seller guide on pricing, timing, presentation and buyer demand.",
        "excerpt": "Practical launch advice for homeowners preparing to sell in Newbuildings.",
        "angle": "sell my house",
        "place": "Newbuildings",
        "local_notes": "For a Newbuildings seller, the aim is to show why the home offers the right mix of space, access, condition and value before buyers compare it elsewhere.",
        "internal_links": ["Property Valuation Newbuildings Derry", "House Not Selling Waterside Derry Checklist", "Property Marketing Plan Derry Sellers Guide"],
    },
    {
        "title": "Property Marketing Newbuildings Derry: How to Make a Listing Stand Out",
        "slug": "property-marketing-newbuildings-derry-seller-guide-2026",
        "primary_keyword": "property marketing Newbuildings Derry",
        "meta_title": "Property Marketing Newbuildings Derry | Seller Guide",
        "meta_description": "Better property marketing can help Newbuildings homes stand out. Learn how sellers should handle photos, copy, pricing and buyer objections.",
        "excerpt": "How Newbuildings sellers can make a property listing clearer, stronger and easier for buyers to act on.",
        "angle": "property marketing",
        "place": "Newbuildings",
        "local_notes": "Marketing should make the practical benefits obvious: room flow, outside space, parking, access to Derry, condition and the type of buyer the home suits.",
        "internal_links": ["Property Marketing Plan Derry Sellers Guide", "Property Photography Selling House Derry", "Sell My House Newbuildings Derry"],
    },
    {
        "title": "Property Valuation Magheramason Derry: Seller Guide Before Listing",
        "slug": "property-valuation-magheramason-derry-seller-guide-2026",
        "primary_keyword": "property valuation Magheramason Derry",
        "meta_title": "Property Valuation Magheramason Derry | Seller Guide",
        "meta_description": "Selling in Magheramason? Learn how local demand, condition, presentation and nearby competition affect property valuation before listing.",
        "excerpt": "Seller valuation advice for Magheramason homes before choosing a launch price.",
        "angle": "local valuation",
        "place": "Magheramason",
        "local_notes": "Magheramason homes can attract buyers who want village space, access towards Derry and Strabane, and a quieter setting without losing commuter practicality.",
        "internal_links": ["Houses for Sale Magheramason Guide", "Property Valuation BT47 Seller Guide", "Prepare House for Valuation Derry"],
    },
    {
        "title": "Estate Agent Magheramason Derry: Seller Advice for Village Homes",
        "slug": "estate-agent-magheramason-derry-seller-guide-2026",
        "primary_keyword": "estate agent Magheramason Derry",
        "meta_title": "Estate Agent Magheramason Derry | Seller Guide",
        "meta_description": "Looking for an estate agent in Magheramason? This seller guide covers pricing, presentation, marketing and local buyer demand.",
        "excerpt": "How a local estate agent should position Magheramason homes for serious buyers.",
        "angle": "estate agent",
        "place": "Magheramason",
        "local_notes": "The best launch plan for Magheramason should explain the home clearly to buyers comparing village, countryside and city-edge options.",
        "internal_links": ["Property Valuation Magheramason Derry", "Estate Agents Derry Comparison Checklist", "Questions to Ask Estate Agent Before Selling Derry"],
    },
    {
        "title": "Property Valuation Greysteel: Seller Guide Before Listing",
        "slug": "property-valuation-greysteel-seller-guide-2026",
        "primary_keyword": "property valuation Greysteel",
        "meta_title": "Property Valuation Greysteel | Seller Guide",
        "meta_description": "Planning to sell in Greysteel? Learn what affects property valuation, buyer demand, presentation and pricing before your home goes live.",
        "excerpt": "A practical Greysteel valuation guide for sellers preparing to list with confidence.",
        "angle": "local valuation",
        "place": "Greysteel",
        "local_notes": "Greysteel buyers often weigh village appeal, route access, outside space, condition and value against nearby Derry, Eglinton and Limavady options.",
        "internal_links": ["Houses for Sale Greysteel Guide", "Property Valuation BT47 Seller Guide", "Eglinton Claudy Limavady Dungiven Property Guide"],
    },
]


def load_previous_module():
    spec = importlib.util.spec_from_file_location("jgp_previous_publish", PREVIOUS)
    if not spec or not spec.loader:
        raise RuntimeError(f"Could not load previous publisher from {PREVIOUS}")
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    return module


def wrap(text: str) -> str:
    return textwrap.fill(text, width=100)


def body_for(post: dict) -> str:
    place = post["place"]
    angle = post["angle"]
    intro = {
        "free valuation": (
            "A free house valuation should give you more than a hopeful asking price. "
            "It should explain how your home is likely to be judged by buyers, where it sits against current competition, "
            "and what needs to happen before the property goes live."
        ),
        "online valuation": (
            "An online house valuation can be a useful starting point, but it should not be the final number you use to launch. "
            "Property pricing depends on the details that automated tools cannot see properly."
        ),
        "property appraisal": (
            "A property appraisal should turn local evidence into a clear selling plan. "
            "The goal is not just to name a price, but to explain what buyers are likely to notice and how to create early confidence."
        ),
        "switch estate agents": (
            "Switching estate agents can make sense when the current plan has gone flat, but it should be a considered move. "
            "The important question is not just who lists the home next, but what changes in the strategy."
        ),
        "change estate agent": (
            "Changing estate agent is worth considering when communication, pricing, feedback or marketing are not giving you a clear route forward. "
            "Before you move, it helps to check the contract and the relaunch plan carefully."
        ),
        "stale listing": (
            "When a house has been on the market too long, the next move should be measured rather than panicked. "
            "Most stale listings need a proper review of price, presentation, buyer feedback and how the home is being positioned."
        ),
        "local valuation": (
            f"If you are planning to sell in {place}, a property valuation should explain how your home compares with nearby alternatives and wider buyer demand. "
            "A useful valuation is specific, evidence-led and practical."
        ),
        "sell my house": (
            f"If you are thinking 'sell my house in {place}', the first step is to understand where your home sits in the current market. "
            "The launch price, presentation and timing all affect the quality of enquiries you receive."
        ),
        "property marketing": (
            f"Good property marketing in {place} should make the home's value clear before a buyer even books a viewing. "
            "Photos, copy, pricing and launch timing all need to work together."
        ),
        "estate agent": (
            f"Choosing an estate agent for a {place} property should be about more than putting the listing online. "
            "The right advice should cover pricing, presentation, buyer demand and the best way to explain the home."
        ),
    }[angle]

    sections = [
        ("Why this matters before you list", [
            intro,
            post["local_notes"],
            "Buyers make quick decisions online. If the price, photographs or description create doubt, the listing can lose momentum before the best viewers have seen it.",
        ]),
        ("What a good review should cover", [
            "A useful seller review should look at comparable homes, current competition, the condition of your property, likely buyer objections and the timescale you want to work towards.",
            "It should also separate small presentation jobs from larger work. Some fixes are worth doing before launch, but others may not return enough value to justify the delay or cost.",
            "The end result should be a clear recommendation: the likely price range, the stronger launch angle and the steps that will make viewings more likely.",
        ]),
        ("Common mistakes to avoid", [
            "The biggest mistake is choosing the highest suggested price without asking how it will be defended to buyers. A number only helps if the market believes it.",
            "Another mistake is relaunching without changing anything material. If the same photos, wording, access arrangements and price go back out, buyers may respond in the same way.",
            "Sellers should also avoid judging the market from one nearby listing. Similar-looking homes can perform very differently depending on condition, parking, layout, outside space and presentation.",
        ]),
        ("Practical seller checklist", [
            "Before making a decision, check:",
            "- recent comparable properties",
            "- current competition at the same price point",
            "- the first photograph and online listing headline",
            "- room presentation, storage and visible maintenance",
            "- viewing feedback and buyer objections",
            "- contract terms or notice periods if another agent is involved",
            "- whether the launch price matches the evidence",
        ]),
        ("FAQs", [
            f"#### Is {place} still attracting serious buyers?",
            "Yes, but buyer demand depends on the exact home, condition, price point and how clearly the listing explains the value.",
            "#### Should I wait before changing the price?",
            "Not always. If enquiries are weak and similar homes are attracting interest, it is better to review the evidence early instead of waiting without a plan.",
            "#### Can James Gorman Property help with this?",
            f"Yes. James Gorman Property can review the property, compare the local market and advise on a realistic next step for sellers in {place}.",
        ]),
        ("Next step", [
            f"If you are preparing to sell in {place}, contact James Gorman Property for a practical valuation and launch plan before choosing your next move."
        ]),
    ]

    lines = ["By James Gorman", ""]
    for heading_text, paragraphs in sections:
        lines.append(f"### {heading_text}")
        lines.append("")
        for paragraph_text in paragraphs:
            if paragraph_text.startswith("- "):
                lines.append(paragraph_text)
            elif paragraph_text.startswith("#### "):
                lines.append(paragraph_text)
            else:
                lines.append(wrap(paragraph_text))
            lines.append("")
    lines.append("Suggested internal links:")
    for link in post["internal_links"]:
        lines.append(f"- {link}")
    return "\n".join(lines).strip()


def write_pack_files() -> None:
    PACK_DIR.mkdir(parents=True, exist_ok=True)
    manifest = {
        "date": "2026-07-13",
        "site": "jamesgormanproperty.com",
        "status": "drafted-and-publish-approved-by-phil-request",
        "source_context": [
            "Reviewed James Gorman SEO README, backlog and latest changelog.",
            "Checked live blog sitemap on 2026-07-13; 186 live blog URLs found before publishing.",
            "Pulled Ahrefs metrics/top-pages on 2026-07-13; Ahrefs showed 5 organic keywords, 2 in positions 1-3, and homepage ranking around position 7 for estate agents derry.",
            "Selected seller-intent terms and under-covered local service pages, avoiding duplicate live slugs.",
        ],
        "posts": [
            {
                "title": post["title"],
                "slug": post["slug"],
                "primary_keyword": post["primary_keyword"],
                "category": "Seller Guides",
            }
            for post in POSTS
        ],
        "publish_notes": [
            "Metadata/planning notes must not be included in the public article body.",
            "After publish, run Wix API, live URL, byline, sitemap and leak-marker QA.",
            "No email, social, GBP, directory or client-facing message is part of this batch.",
        ],
    }
    MANIFEST.write_text(json.dumps(manifest, indent=2), encoding="utf-8")

    lines = [
        "# James Gorman Property Big Content Blast - 13 July 2026",
        "",
        "Status: drafted for approved Wix publish in this run. No email, social, GBP or directory changes included.",
        "",
        "Context checked:",
        "- Reviewed James Gorman Property SEO README, backlog and latest changelog.",
        "- Checked the live blog sitemap on 13 July 2026. The sitemap listed 186 blog URLs before publishing.",
        "- Pulled Ahrefs metrics/top-pages on 13 July 2026 and focused this batch on seller-intent gaps.",
        "- Avoided direct slug overlap with the existing live blog.",
        "",
        "Recommended publish order:",
        "1. Broad Derry valuation and seller-rescue intent.",
        "2. Newbuildings seller cluster.",
        "3. Magheramason and Greysteel seller cluster.",
        "",
    ]
    for index, post in enumerate(POSTS, 1):
        lines += [
            f"## {index}. {post['title']}",
            "",
            f"Slug: `{post['slug']}`",
            "Category: Seller Guides",
            f"Primary keyword: `{post['primary_keyword']}`",
            f"Meta title: {post['meta_title']}",
            f"Meta description: {post['meta_description']}",
            f"Excerpt: {post['excerpt']}",
            "",
            body_for(post),
            "",
        ]
    DRAFT_PACK.write_text("\n".join(lines), encoding="utf-8")


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
    sections = split_pack()
    topics: list[dict] = []
    for post in POSTS:
        title = post["title"]
        if title not in sections:
            raise RuntimeError(f"Missing draft section for {title}")
        topics.append(
            {
                "title": title,
                "slug": post["slug"],
                "keyword": post["primary_keyword"],
                "category": "seller",
                "excerpt": post["excerpt"],
                "richContent": {"nodes": build_nodes(pub, sections[title]), "metadata": {"version": 1}},
            }
        )
    return topics


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


def write_md_report(report: dict, qa: dict) -> None:
    lines = [
        "# James Gorman big content blast publish report - 2026-07-13",
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
        "- Checks: public 200, Wix API `PUBLISHED`, James member ID, H1 match, visible `By James Gorman`, sitemap inclusion, no visible wrong-name leaks, no draft/SEO leak markers.",
        "",
        "## Notes",
        "- Featured images were not added in this pass.",
        "- No outreach, email, social posting or client-facing message was sent.",
        "- Metadata/planning headers and suggested internal-link notes were stripped from the public article bodies.",
    ]
    REPORT_MD.write_text("\n".join(lines) + "\n", encoding="utf-8")


def main() -> int:
    write_pack_files()
    pub = load_previous_module()
    topics = make_topics(pub)
    expected = 12
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
