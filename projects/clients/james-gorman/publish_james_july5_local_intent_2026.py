#!/usr/bin/env python3
from __future__ import annotations

import importlib.util
import json
import time
from pathlib import Path

import requests

BASE = Path(__file__).resolve().parent
PREVIOUS = BASE / "publish_james_ahrefs_blast_2026_06_08.py"
SITE = "https://www.jamesgormanproperty.com"
REPORT_JSON = BASE / "blog-publish-report-2026-07-05-local-intent.json"
QA_JSON = BASE / "blog-publish-api-qa-2026-07-05-local-intent.json"
REPORT_MD = BASE / "blog-publish-report-2026-07-05-local-intent.md"

SOURCE_NOTE = (
    "Published after Phil approved a James Gorman Property website content blast on 5 July 2026. "
    "The batch targets fresh Derry local-intent gaps around Altnagelvin, Gobnascale, Kilfennan, "
    "Carnhill, Skeoge, Ballymagroarty and Galliagh, avoiding the 30 June Rosemount, Shantallow, "
    "Pennyburn, Bogside, Woodbrook and Ardmore batch."
)

POSTS = [
    {
        "title": "Houses for Sale Altnagelvin Derry: What Buyers Should Check",
        "slug": "houses-for-sale-altnagelvin-derry-buyer-guide-2026",
        "keyword": "houses for sale Altnagelvin Derry",
        "category": "buyer",
        "area": "Altnagelvin",
        "intent": "buyer",
        "excerpt": "A practical buyer guide to houses for sale in Altnagelvin, Derry, covering location, viewing checks, pricing context and how to compare homes properly.",
        "local_signals": [
            "Altnagelvin Hospital",
            "Church Road",
            "Glenshane Road access",
            "Waterside links",
            "local schools and commuter routes",
        ],
        "property_types": "semi-detached homes, detached family houses, bungalows, townhouses and older homes close to key services",
        "angle": "Altnagelvin is a practical search area for buyers who want hospital access, Waterside convenience and routes across Derry without losing neighbourhood feel.",
    },
    {
        "title": "Property Valuation Altnagelvin Derry: Seller Checks Before Pricing",
        "slug": "property-valuation-altnagelvin-derry-seller-guide-2026",
        "keyword": "property valuation Altnagelvin Derry",
        "category": "seller",
        "area": "Altnagelvin",
        "intent": "seller",
        "excerpt": "Seller guide to property valuation in Altnagelvin, Derry, including comparable homes, condition, presentation and pricing decisions before going live.",
        "local_signals": [
            "Altnagelvin Hospital demand",
            "Church Road",
            "main commuter routes",
            "Waterside buyer movement",
            "nearby schools and services",
        ],
        "property_types": "family houses, bungalows, semi-detached homes and detached homes with strong service access",
        "angle": "Altnagelvin sellers need a valuation that accounts for practical location demand as well as condition, parking, garden space and how close the home sits to busy routes.",
    },
    {
        "title": "Houses for Sale Gobnascale Derry: A Practical Buyer Guide",
        "slug": "houses-for-sale-gobnascale-derry-buyer-guide-2026",
        "keyword": "houses for sale Gobnascale",
        "category": "buyer",
        "area": "Gobnascale",
        "intent": "buyer",
        "excerpt": "Guide for buyers comparing houses for sale in Gobnascale, Derry, with viewing checks, location notes, buyer questions and local search tips.",
        "local_signals": [
            "Waterside location",
            "Crescent Link access",
            "local schools",
            "Altnagelvin links",
            "routes toward the city centre",
        ],
        "property_types": "terraced houses, semi-detached homes, family properties and homes that suit buyers balancing budget with Waterside access",
        "angle": "Gobnascale searches are often about value, access and practical family living, so buyers should compare condition and street-by-street fit instead of judging only by headline price.",
    },
    {
        "title": "Estate Agent Gobnascale Derry: Seller Advice for Local Homes",
        "slug": "estate-agent-gobnascale-derry-seller-guide-2026",
        "keyword": "estate agent Gobnascale",
        "category": "seller",
        "area": "Gobnascale",
        "intent": "seller",
        "excerpt": "How sellers in Gobnascale, Derry, should choose an estate agent, prepare the home, price realistically and market to the right buyer demand.",
        "local_signals": [
            "Waterside buyer demand",
            "Crescent Link",
            "local primary schools",
            "Altnagelvin access",
            "nearby shopping and commuter routes",
        ],
        "property_types": "terraces, semi-detached homes and family houses where presentation and pricing discipline matter",
        "angle": "A good Gobnascale sale depends on positioning the home around value, access and real buyer objections before the listing goes live.",
    },
    {
        "title": "Houses for Sale Kilfennan Derry: Buyer Checks and Local Notes",
        "slug": "houses-for-sale-kilfennan-derry-buyer-guide-2026",
        "keyword": "houses for sale Kilfennan Derry",
        "category": "buyer",
        "area": "Kilfennan",
        "intent": "buyer",
        "excerpt": "Buyer guide to houses for sale in Kilfennan, Derry, including local access, viewing checks, property types and how to compare value.",
        "local_signals": [
            "Waterside setting",
            "Rossdowney Road links",
            "Kilfennan Valley Park",
            "local schools",
            "routes to Crescent Link and the city",
        ],
        "property_types": "family houses, semi-detached homes, detached homes and bungalows around established residential streets",
        "angle": "Kilfennan can suit buyers looking for a settled Waterside base, but the best choice still depends on condition, layout, parking and how the street feels at different times of day.",
    },
    {
        "title": "Property Valuation Kilfennan Derry: How to Price Before Listing",
        "slug": "property-valuation-kilfennan-derry-seller-guide-2026",
        "keyword": "property valuation Kilfennan Derry",
        "category": "seller",
        "area": "Kilfennan",
        "intent": "seller",
        "excerpt": "Seller guide to property valuation in Kilfennan, Derry, covering comparable evidence, presentation, buyer demand and pricing strategy.",
        "local_signals": [
            "Kilfennan Valley Park",
            "Waterside buyer movement",
            "Rossdowney Road",
            "local school access",
            "Crescent Link routes",
        ],
        "property_types": "established family homes, semi-detached houses, detached houses and bungalows",
        "angle": "Kilfennan sellers should avoid a generic Derry valuation and focus on the exact house type, setting, outdoor space and current buyer competition.",
    },
    {
        "title": "Houses for Sale Carnhill Derry: What Buyers Should Know",
        "slug": "houses-for-sale-carnhill-derry-buyer-guide-2026",
        "keyword": "houses for sale Carnhill Derry",
        "category": "buyer",
        "area": "Carnhill",
        "intent": "buyer",
        "excerpt": "A practical buyer guide to houses for sale in Carnhill, Derry, with local checks, viewing questions, value signals and next steps.",
        "local_signals": [
            "Ballyarnett links",
            "Racecourse Road access",
            "local schools",
            "nearby shops and services",
            "routes toward Culmore and the city",
        ],
        "property_types": "terraced homes, semi-detached homes, family houses and properties that may appeal to first-time buyers or movers",
        "angle": "Carnhill buyers should compare the full street, access, condition and long-term maintenance picture before deciding whether a home is genuinely good value.",
    },
    {
        "title": "Property Valuation Skeoge Derry: Seller Guide for Pricing Right",
        "slug": "property-valuation-skeoge-derry-seller-guide-2026",
        "keyword": "property valuation Skeoge Derry",
        "category": "seller",
        "area": "Skeoge",
        "intent": "seller",
        "excerpt": "Seller guide to property valuation in Skeoge, Derry, including pricing evidence, presentation, newer-home competition and how to prepare before listing.",
        "local_signals": [
            "Skeoge Road",
            "Buncrana Road access",
            "newer residential developments",
            "Northside Shopping Centre links",
            "routes toward Ballyarnett and Culmore",
        ],
        "property_types": "newer family homes, semi-detached properties, detached houses and homes competing with nearby modern developments",
        "angle": "Skeoge sellers need to understand how newer-home condition, parking, layout and energy efficiency affect buyer expectations before choosing a launch price.",
    },
]


def load_previous_module():
    spec = importlib.util.spec_from_file_location("jgp_previous_publish", PREVIOUS)
    if not spec or not spec.loader:
        raise RuntimeError(f"Could not load previous publisher from {PREVIOUS}")
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    return module


def sentence_list(items: list[str]) -> str:
    if len(items) == 1:
        return items[0]
    return ", ".join(items[:-1]) + f" and {items[-1]}"


def build_nodes(pub, post: dict) -> list[dict]:
    area = post["area"]
    keyword = post["keyword"]
    local = sentence_list(post["local_signals"])
    property_types = post["property_types"]
    is_buyer = post["intent"] == "buyer"

    nodes = [pub.paragraph("By James Gorman")]
    nodes.append(
        pub.paragraph(
            f"{post['angle']} This guide is written for people searching {keyword} who want a practical local view before booking viewings or asking for a valuation."
        )
    )
    nodes.append(
        pub.paragraph(
            f"The important thing with {area} is to avoid treating every result as the same. Two homes can sit close together online but feel very different once you look at access, parking, outside space, presentation, repair work, schools, commute patterns and the kind of buyer demand each street attracts."
        )
    )

    if is_buyer:
        nodes.extend(
            [
                pub.heading(f"How to compare houses for sale in {area}", 2),
                pub.paragraph(
                    f"Start with the basics: house type, bedroom count, parking, garden space, heating, windows, roof condition and how much work is needed before you could comfortably move in. In {area}, buyers often compare {property_types}. The right choice is not always the cheapest property; it is the one where price, condition and location line up."
                ),
                pub.paragraph(
                    f"Use local signals as part of the decision. For this search, pay attention to {local}. A home that looks slightly more expensive may still offer better value if it cuts travel time, suits school routines, gives better parking or avoids renovation costs that would appear after purchase."
                ),
                pub.heading("Viewing checks buyers should not skip", 2),
                pub.paragraph("• Check heating, windows, roofline, damp signs, storage and whether rooms work for daily life rather than just photographs."),
                pub.paragraph("• Walk the street before or after the viewing if you can. Parking, traffic, light and noise can change how a home feels."),
                pub.paragraph("• Ask how long the property has been listed, whether there has been previous interest and what position the seller needs."),
                pub.paragraph("• Compare sold and live homes carefully. A nearby asking price is useful only when the property type, condition and setting are genuinely comparable."),
                pub.heading("How James Gorman Property can help", 2),
                pub.paragraph(
                    f"If you are trying to buy in {area}, James Gorman Property can help you understand what is realistic, what to view quickly and where a property may need stronger due diligence. The aim is to help you make a confident offer, not just chase the newest listing."
                ),
                pub.heading("Common buyer questions", 2),
                pub.paragraph(
                    f"Is {area} a good place to buy? It can be, if the exact street, condition and access suit your needs. The best approach is to compare homes locally rather than relying on a broad Derry average."
                ),
                pub.paragraph(
                    f"What should I do next? Save your search for {keyword}, view quickly when the right home appears, and ask for local advice before assuming the asking price tells the full story."
                ),
            ]
        )
    else:
        nodes.extend(
            [
                pub.heading(f"What affects property valuation in {area}", 2),
                pub.paragraph(
                    f"Valuation in {area} should start with direct evidence: similar homes, recent listings, current competition and the condition buyers will see when they arrive. For this area, sellers often need to compare {property_types}. Small differences in finish, parking, garden space and presentation can change buyer response quickly."
                ),
                pub.paragraph(
                    f"Local demand also matters. Buyers may be weighing up {local}. If your home solves a practical problem for the right buyer, that should shape the marketing. If it has an obvious objection, the price and presentation need to deal with that before the property goes live."
                ),
                pub.heading("Seller checks before choosing a launch price", 2),
                pub.paragraph("• Compare your home with live competition, not just older sold prices or hopeful asking prices."),
                pub.paragraph("• Fix small presentation issues before photography. Buyers judge maintenance quickly, especially online."),
                pub.paragraph("• Be clear about parking, gardens, storage, heating, windows and work already completed."),
                pub.paragraph("• Decide your first three weeks of strategy before listing: price, photography, launch timing, viewing plan and response to early feedback."),
                pub.heading("How James Gorman Property can help", 2),
                pub.paragraph(
                    f"James Gorman Property can give {area} sellers a local valuation based on current buyer demand, competing listings and the likely objections a buyer will raise. That makes the launch more disciplined and helps avoid weeks of weak enquiries or unnecessary price reductions."
                ),
                pub.heading("Common seller questions", 2),
                pub.paragraph(
                    f"How accurate is an online valuation for {area}? It can give a rough starting point, but it cannot properly judge presentation, street position, buyer demand, improvements or current competing homes."
                ),
                pub.paragraph(
                    f"What should I do next? Ask for a local valuation, compare the evidence, then launch with strong photos, clear copy and a price that matches the buyer demand in front of you."
                ),
            ]
        )

    body_text = "\n".join(
        child.get("textData", {}).get("text", "") for node in nodes for child in node.get("nodes", [])
    )
    leak_markers = ["Primary keyword", "Meta description", "Suggested internal links", "Draft-only", "SEO note"]
    found = [marker for marker in leak_markers if marker in body_text]
    if found:
        raise RuntimeError(f"Visible body leak markers found for {post['slug']}: {found}")
    return nodes


def make_topics(pub) -> list[dict]:
    return [
        {
            "title": post["title"],
            "slug": post["slug"],
            "keyword": post["keyword"],
            "category": post["category"],
            "excerpt": post["excerpt"],
            "richContent": {"nodes": build_nodes(pub, post), "metadata": {"version": 1}},
        }
        for post in POSTS
    ]


def write_md_report(report: dict, qa: dict) -> None:
    lines = [
        "# James Gorman local-intent content blast publish report - 2026-07-05",
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
        "- Public article bodies were generated from structured local-intent inputs and do not include planning metadata.",
    ]
    REPORT_MD.write_text("\n".join(lines) + "\n", encoding="utf-8")


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

    time.sleep(10)
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
