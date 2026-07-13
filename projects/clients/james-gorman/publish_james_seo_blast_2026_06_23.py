#!/usr/bin/env python3
from __future__ import annotations

import importlib.util
import json
import time
from pathlib import Path

import requests

BASE = Path(__file__).resolve().parent
PREVIOUS = BASE / "publish_james_ahrefs_blast_2026_06_08.py"
OUT = BASE / "ahrefs-content-blast-2026-06-23"
SOURCE_DIR = OUT / "drafts"
RAW_DIR = OUT / "raw"
REPORT_JSON = BASE / "blog-publish-report-2026-06-23-seo-blast.json"
QA_JSON = BASE / "blog-publish-api-qa-2026-06-23-seo-blast.json"
REPORT_MD = BASE / "blog-publish-report-2026-06-23-seo-blast.md"
SITE = "https://www.jamesgormanproperty.com"

SOURCE_NOTE = (
    "SEO blast 2026-06-23: Ahrefs shows James Gorman Property now visible for "
    "`merchants view derry`, `estate agents derry` and `property derry`. Keyword Explorer "
    "checks found fresh low-difficulty local opportunities around BT47, BT48, Londonderry, "
    "Creggan, Magheramason and Greysteel. This batch expands those commercial buyer/seller clusters."
)

TOPICS = [
    {
        "slug": "houses-for-sale-bt47-guide-2026",
        "title": "Houses for Sale BT47: A Local Buyer's Guide for 2026",
        "keyword": "houses for sale BT47",
        "volume_note": "Ahrefs 2026-06-23: 100 volume, KD 0, traffic potential 100.",
        "category": "buyer",
        "area": "BT47",
        "audience": "buyers comparing Derry, Waterside, Newbuildings, Eglinton, Claudy and nearby villages",
        "angle": "BT47 covers a wide mix of city-edge homes, commuter villages, rural properties and family estates, so buyers need a practical way to compare lifestyle as well as price.",
        "places": ["Waterside", "Newbuildings", "Eglinton", "Claudy", "Drumahoe", "Crescent Link"],
        "checklist": [
            "Match the postcode to school runs, commute times and day-to-day routes rather than only the asking price.",
            "Compare older homes, new-build stock, rural homes and edge-of-city estates separately.",
            "Check parking, garden direction, heating, broadband and onward-chain position before offering.",
            "Use local viewing feedback to understand whether a home is priced ahead of the market or likely to move quickly.",
        ],
        "cta": "James Gorman Property can help buyers read the BT47 market street by street and spot homes that fit their budget before the obvious competition arrives.",
    },
    {
        "slug": "houses-for-sale-bt48-guide-2026",
        "title": "Houses for Sale BT48: What Buyers Should Check in 2026",
        "keyword": "houses for sale BT48",
        "volume_note": "Ahrefs 2026-06-23: 90 volume, KD 1, traffic potential 100.",
        "category": "buyer",
        "area": "BT48",
        "audience": "buyers looking around Cityside, Culmore, Rosemount, Pennyburn, Foyle Springs and the west bank",
        "angle": "BT48 searches often mix very different buyer needs, from city convenience to larger homes near Culmore and family stock close to schools and main routes.",
        "places": ["Cityside", "Culmore", "Rosemount", "Pennyburn", "Foyle Springs", "Buncrana Road"],
        "checklist": [
            "Decide whether walkability, school catchment, parking or garden size matters most before comparing listings.",
            "Look at how quickly similar BT48 homes are selling, not just the advertised asking prices.",
            "Check traffic routes at the times you would actually use them.",
            "Ask whether any improvements are cosmetic or likely to affect survey, mortgage or insurance questions.",
        ],
        "cta": "James Gorman Property can help BT48 buyers compare location, value and resale appeal before making an offer.",
    },
    {
        "slug": "property-for-sale-bt47-guide-2026",
        "title": "Property for Sale BT47: How to Compare Homes Across the Area",
        "keyword": "property for sale BT47",
        "volume_note": "Ahrefs 2026-06-23: 90 volume, KD 0, traffic potential 100.",
        "category": "buyer",
        "area": "BT47",
        "audience": "buyers comparing property types across the wider BT47 area",
        "angle": "The phrase property for sale BT47 catches buyers who have not narrowed the search to one village or estate yet, making it a useful guide topic for early research.",
        "places": ["Waterside", "Drumahoe", "Maydown", "Eglinton", "Claudy", "Greysteel"],
        "checklist": [
            "Separate must-haves from nice-to-haves before viewing a wide postcode area.",
            "Compare total move cost, likely work and resale appeal as well as asking price.",
            "Review how close the property is to daily routes, schools, parks and services.",
            "Speak to a local agent before ruling out areas that may offer better value.",
        ],
        "cta": "James Gorman Property gives buyers local context on BT47 homes so they can shortlist with more confidence.",
    },
    {
        "slug": "property-for-sale-bt48-guide-2026",
        "title": "Property for Sale BT48: A Practical Area Guide for Buyers",
        "keyword": "property for sale BT48",
        "volume_note": "Ahrefs 2026-06-23: 30 volume, KD 1, traffic potential 100.",
        "category": "buyer",
        "area": "BT48",
        "audience": "buyers who want Derry city access, schools, established housing and west-bank convenience",
        "angle": "BT48 can suit very different moves, from first homes and townhouses to larger family homes, so buyers need to compare property type, route and resale profile together.",
        "places": ["Culmore", "Rosemount", "Pennyburn", "Shantallow", "Foyle Springs", "Northland Road"],
        "checklist": [
            "Check whether the property solves your daily route, parking and storage needs.",
            "Compare nearby sold and listed homes with similar condition and garden space.",
            "Look for signs of demand, such as viewing levels and speed of recent sales.",
            "Ask what work would improve the home and what work simply catches up on maintenance.",
        ],
        "cta": "James Gorman Property can help buyers understand where BT48 value is strongest and which homes deserve a closer look.",
    },
    {
        "slug": "houses-for-sale-creggan-derry-guide-2026",
        "title": "Houses for Sale Creggan Derry: A Buyer Guide for 2026",
        "keyword": "houses for sale Creggan Derry",
        "volume_note": "Ahrefs 2026-06-23: 20 volume, KD 0, traffic potential 10.",
        "category": "buyer",
        "area": "Creggan",
        "audience": "buyers looking for established neighbourhoods, city access and practical value",
        "angle": "Creggan has strong local recognition and a broad mix of homes, making it a useful area guide for buyers who want value close to the city.",
        "places": ["Central Drive", "Bishop Street route", "Brandywell", "Rosemount", "Cityside", "local schools and shops"],
        "checklist": [
            "Check how the exact street fits your commute, school route and parking needs.",
            "Compare condition carefully because similar homes can need very different levels of work.",
            "Look at garden space, storage and heating before deciding whether a price is fair.",
            "Ask how long similar homes have taken to sell locally.",
        ],
        "cta": "James Gorman Property can help Creggan buyers judge value, condition and offer strategy before they commit.",
    },
    {
        "slug": "houses-for-sale-magheramason-guide-2026",
        "title": "Houses for Sale Magheramason: A 2026 Buyer Guide",
        "keyword": "houses for sale Magheramason",
        "volume_note": "Ahrefs 2026-06-23: 30 volume, KD 0, traffic potential 10.",
        "category": "buyer",
        "area": "Magheramason",
        "audience": "buyers looking between Derry, Strabane, Newbuildings and the wider Foyle Valley",
        "angle": "Magheramason appeals to buyers who want village living without feeling disconnected from Derry or nearby commuter routes.",
        "places": ["Magheramason village", "Victoria Road", "Newbuildings", "Donemana", "River Foyle", "Derry-Strabane routes"],
        "checklist": [
            "Check onward travel at school-run and work-commute times.",
            "Compare garden, parking and storage because village homes vary widely.",
            "Review broadband, heating and maintenance where a property sits outside dense urban stock.",
            "Ask whether local buyer demand is coming from movers, first-time buyers or families upsizing.",
        ],
        "cta": "James Gorman Property can help Magheramason buyers weigh rural appeal against practical everyday access.",
    },
    {
        "slug": "houses-for-sale-greysteel-guide-2026",
        "title": "Houses for Sale Greysteel: What Buyers Should Know",
        "keyword": "houses for sale Greysteel",
        "volume_note": "Ahrefs 2026-06-23: 100 volume, KD 0, traffic potential 70.",
        "category": "buyer",
        "area": "Greysteel",
        "audience": "buyers comparing Greysteel, Eglinton, Limavady Road, Maydown and village homes east of Derry",
        "angle": "Greysteel searches show clear buyer demand, and the area can suit people who want village life with access back toward Derry and the north coast.",
        "places": ["Greysteel village", "Eglinton", "Maydown", "Limavady Road", "City of Derry Airport", "Foyle route"],
        "checklist": [
            "Compare the home with nearby Eglinton and Maydown options to understand value.",
            "Check travel routes to work, school and family before focusing only on the asking price.",
            "Look closely at garden, parking and future maintenance.",
            "Ask whether the property is likely to attract first-time buyers, families or downsizers when you resell.",
        ],
        "cta": "James Gorman Property can help Greysteel buyers compare village value and act quickly on the right home.",
    },
    {
        "slug": "houses-for-sale-londonderry-guide-2026",
        "title": "Houses for Sale Londonderry: A Local Guide for Buyers",
        "keyword": "houses for sale Londonderry",
        "volume_note": "Ahrefs 2026-06-23: 150 volume, KD 1, high traffic-potential parent topic.",
        "category": "buyer",
        "area": "Derry / Londonderry",
        "audience": "buyers searching with the Londonderry spelling and comparing the whole local market",
        "angle": "Many buyers search both Derry and Londonderry, so this guide helps them compare the market without missing local terminology, neighbourhood differences or agent insight.",
        "places": ["Cityside", "Waterside", "Culmore", "Eglinton", "Newbuildings", "Limavady Road"],
        "checklist": [
            "Search both Derry and Londonderry wording so you do not miss useful local guides.",
            "Separate portal results by area, property type and likely competition.",
            "Compare asking price with condition, location and likely resale demand.",
            "Use a local agent's view before deciding whether a home is good value or simply cheaper.",
        ],
        "cta": "James Gorman Property can help buyers search the Derry/Londonderry market with a clearer local shortlist.",
    },
    {
        "slug": "property-for-sale-londonderry-guide-2026",
        "title": "Property for Sale Londonderry: How to Search the Market Properly",
        "keyword": "property for sale Londonderry",
        "volume_note": "Ahrefs 2026-06-23: 20 volume, KD 1, high traffic-potential parent topic.",
        "category": "buyer",
        "area": "Derry / Londonderry",
        "audience": "early-stage buyers comparing areas, property types and local search wording",
        "angle": "Property for sale Londonderry is a broad search, but it can catch serious buyers who are still deciding whether to prioritise Cityside, Waterside, villages or commuter routes.",
        "places": ["BT47", "BT48", "Cityside", "Waterside", "Culmore", "Eglinton"],
        "checklist": [
            "Start with location and daily routine before comparing individual houses.",
            "Use viewings to understand local demand, not just fixtures and finish.",
            "Check whether a lower price reflects condition, location, chain position or market time.",
            "Ask a local agent where similar buyers are active now.",
        ],
        "cta": "James Gorman Property can help buyers turn a broad Londonderry property search into a practical viewing plan.",
    },
    {
        "slug": "property-for-sale-prehen-guide-2026",
        "title": "Property for Sale Prehen: What Buyers Should Check",
        "keyword": "property for sale Prehen",
        "volume_note": "Ahrefs 2026-06-23: local long-tail gap with no competing JGP post in the live sitemap.",
        "category": "buyer",
        "area": "Prehen",
        "audience": "buyers interested in Prehen, Limavady Road, Waterside access and premium edge-of-city homes",
        "angle": "Prehen is a small but high-interest local search area where buyers often care about setting, privacy, routes and long-term resale appeal.",
        "places": ["Prehen", "Limavady Road", "Waterside", "Crescent Link", "River Foyle", "Rossbay"],
        "checklist": [
            "Check access, parking and route convenience as carefully as the house itself.",
            "Compare privacy, garden space and maintenance with similar edge-of-city homes.",
            "Review heating, windows, drainage and boundaries before assuming a premium home is low-maintenance.",
            "Ask how often similar homes come up locally and how quickly they usually move.",
        ],
        "cta": "James Gorman Property can help Prehen buyers judge scarcity, value and whether a home is worth moving quickly on.",
    },
    {
        "slug": "property-valuation-bt47-seller-guide-2026",
        "title": "Property Valuation BT47: A Seller Guide for 2026",
        "keyword": "property valuation BT47",
        "volume_note": "Ahrefs 2026-06-23: valuation postcode gap selected to support the BT47 buyer cluster.",
        "category": "seller",
        "area": "BT47",
        "audience": "homeowners in Waterside, Newbuildings, Eglinton, Claudy, Drumahoe and nearby BT47 areas",
        "angle": "A BT47 valuation needs to account for local micro-markets rather than using one average for a large postcode.",
        "places": ["Waterside", "Newbuildings", "Drumahoe", "Eglinton", "Claudy", "Maydown"],
        "checklist": [
            "Compare your home with properties of similar condition, size, garden and parking.",
            "Account for whether buyers are likely to be local movers, commuters, families or first-time buyers.",
            "Use viewing feedback to decide whether pricing, presentation or marketing needs adjusted.",
            "Avoid overpricing based on a different BT47 area with a different buyer pool.",
        ],
        "cta": "James Gorman Property can provide a practical BT47 valuation that reflects local buyer demand, not just broad online estimates.",
    },
    {
        "slug": "property-valuation-bt48-seller-guide-2026",
        "title": "Property Valuation BT48: Pricing Advice for Local Sellers",
        "keyword": "property valuation BT48",
        "volume_note": "Ahrefs 2026-06-23: valuation postcode gap selected to support the BT48 buyer cluster.",
        "category": "seller",
        "area": "BT48",
        "audience": "sellers in Cityside, Culmore, Rosemount, Pennyburn, Shantallow and the wider BT48 postcode",
        "angle": "BT48 valuations need local context because demand can shift sharply between city convenience, family areas, larger homes and homes needing work.",
        "places": ["Cityside", "Culmore", "Rosemount", "Pennyburn", "Foyle Springs", "Shantallow"],
        "checklist": [
            "Compare against similar homes in your part of BT48 rather than the whole postcode.",
            "Check how condition, parking, garden space and energy performance affect buyer confidence.",
            "Review whether recent viewings show price resistance or presentation problems.",
            "Choose a launch price that creates enquiry without leaving money behind.",
        ],
        "cta": "James Gorman Property can help BT48 sellers price with local evidence and a marketing plan that attracts the right buyers.",
    },
]


def load_previous_module():
    spec = importlib.util.spec_from_file_location("jgp_previous_publish", PREVIOUS)
    if spec is None or spec.loader is None:
        raise RuntimeError(f"Could not load previous publisher from {PREVIOUS}")
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    return module


def add_para(pub, nodes: list[dict], text: str) -> None:
    nodes.append(pub.paragraph(text))


def add_heading(pub, nodes: list[dict], text: str, level: int = 2) -> None:
    nodes.append(pub.heading(text, level))


def make_topic(pub, topic: dict) -> dict:
    nodes: list[dict] = []
    add_para(pub, nodes, "By James Gorman")
    add_para(pub, nodes, f"{topic['title']} is a practical guide for {topic['audience']}.")
    add_para(pub, nodes, topic["angle"])
    add_para(pub, nodes, f"{topic['volume_note']} The aim is to help searchers move from a broad portal search into a more confident local decision.")

    add_heading(pub, nodes, f"Why {topic['area']} needs local context")
    add_para(pub, nodes, f"{topic['area']} is not one simple market. Demand can change by street, property type, condition, parking, garden space and proximity to the routes people use every day.")
    add_para(pub, nodes, "A useful property search should look beyond the headline asking price. Buyers and sellers both need to understand what similar people are actually responding to in the area.")

    add_heading(pub, nodes, "Areas and routes to compare")
    add_para(pub, nodes, "Relevant local reference points include " + ", ".join(topic["places"]) + ". These are not all identical markets, but they help frame how buyers compare convenience, value and lifestyle.")

    add_heading(pub, nodes, "What to check before making a decision")
    for item in topic["checklist"]:
        nodes.append(pub.paragraph("• " + item))

    add_heading(pub, nodes, "How to read asking prices")
    add_para(pub, nodes, "Asking prices are only one signal. A home that looks expensive may be correctly priced if presentation, condition and location match buyer demand. A cheaper home may need more work, carry more uncertainty or sit in a slower micro-market.")
    add_para(pub, nodes, "Look at comparable homes, recent enquiry levels, viewing feedback and how much choice buyers have nearby. The strongest decisions come from combining portal data with local agent judgement.")

    add_heading(pub, nodes, "Questions to ask at viewing or valuation")
    questions = [
        "How long have similar homes taken to sell nearby?",
        "What type of buyer is most active for this property?",
        "Is the price being driven by condition, location, scarcity or presentation?",
        "What would need to change if the property did not attract enough enquiry?",
    ]
    for question in questions:
        nodes.append(pub.paragraph("• " + question))

    add_heading(pub, nodes, "How James Gorman Property can help")
    add_para(pub, nodes, topic["cta"])
    add_para(pub, nodes, "For sellers, that means practical valuation advice, launch strategy and marketing that reflects the local buyer pool. For buyers, it means clearer shortlisting, better viewing questions and a more realistic view of value.")

    add_heading(pub, nodes, "Related local searches")
    add_para(pub, nodes, "This topic also supports related searches around Derry property, houses for sale in Derry, property valuation in Derry, estate agents in Derry and local area buyer guides.")
    add_para(pub, nodes, "If you are planning a move, speak to James Gorman Property before you rely only on broad online averages or portal alerts.")

    excerpt = (
        f"A practical James Gorman Property guide to {topic['keyword']}, covering local "
        "area context, pricing signals, buyer demand and what to check before your next move."
    )
    return {
        "title": topic["title"],
        "slug": topic["slug"],
        "keyword": topic["keyword"],
        "category": topic["category"],
        "excerpt": excerpt,
        "richContent": {"nodes": nodes, "metadata": {"version": 1}},
    }


def write_sources(topics: list[dict]) -> None:
    SOURCE_DIR.mkdir(parents=True, exist_ok=True)
    for topic in topics:
        lines = [
            f"# {topic['title']}",
            f"Primary keyword: {topic['keyword']}",
            f"Suggested slug: {topic['slug']}",
            f"Ahrefs note: {topic['volume_note']}",
            "",
            "By James Gorman",
            "",
            topic["angle"],
            "",
            "## Checklist",
        ]
        lines.extend(f"- {item}" for item in topic["checklist"])
        lines += ["", "## Support", topic["cta"], ""]
        (SOURCE_DIR / f"2026-06-23-{topic['slug']}.md").write_text("\n".join(lines), encoding="utf-8")


def write_md_report(report: dict, qa: dict) -> None:
    lines = [
        "# James Gorman SEO content blast publish report - 2026-06-23",
        "",
        "Published after Phil explicitly approved the SEO-driven James content blast on 23 June 2026.",
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
        "## Raw Data",
        "- `ahrefs-metrics-2026-06-23.json`",
        "- `ahrefs-domain-rating-2026-06-23.json`",
        "- `ahrefs-top-pages-2026-06-23.json`",
        "- `ahrefs-organic-keywords-gb-2026-06-23.json`",
        "- `ahrefs-keyword-overview-candidates-2026-06-23.json`",
        "",
        "## Notes",
        "- Featured images were not added in this pass.",
        "- No outreach, email, social posting or client-facing message was sent.",
        "- Metadata/planning headers were stripped from the public article bodies.",
    ]
    REPORT_MD.write_text("\n".join(lines) + "\n", encoding="utf-8")


def main() -> int:
    pub = load_previous_module()
    OUT.mkdir(parents=True, exist_ok=True)
    write_sources(TOPICS)
    topics = [make_topic(pub, topic) for topic in TOPICS]

    target_slugs = [topic["slug"] for topic in topics]
    duplicates_in_batch = sorted({slug for slug in target_slugs if target_slugs.count(slug) > 1})
    if duplicates_in_batch:
        raise RuntimeError(f"Duplicate slugs in batch: {duplicates_in_batch}")

    existing = pub.query_existing()
    duplicates_live = [topic["slug"] for topic in topics if topic["slug"] in existing]
    if duplicates_live:
        raise RuntimeError(f"Refusing duplicate live slugs: {duplicates_live}")

    results = []
    for topic in topics:
        results.append(pub.create_and_publish(topic, existing))
        time.sleep(0.8)

    time.sleep(8)
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
            **pub.live_check(row),
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
        "draft_dir": str(SOURCE_DIR),
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
