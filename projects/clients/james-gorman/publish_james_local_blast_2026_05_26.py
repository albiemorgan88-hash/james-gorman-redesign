#!/usr/bin/env python3
from __future__ import annotations

import json
import os
import re
import time
import uuid
from html import unescape
from pathlib import Path
from typing import Iterable

import requests

BASE = Path(__file__).resolve().parent
SITE = "https://www.jamesgormanproperty.com"
WIX_SITE_ID = "4b8170fd-99cc-45e8-a4fb-e28bb7156d52"
JAMES_MEMBER_ID = "8a0a22b4-bf7d-4b83-9347-5d4ae7d25012"
OUT = BASE / "blog-drafts" / "content-blast-2026-05-26-local-areas"
REPORT_JSON = BASE / "blog-publish-report-2026-05-26-local-area-blast.json"
QA_JSON = BASE / "blog-publish-api-qa-2026-05-26-local-area-blast.json"
REPORT_MD = BASE / "blog-publish-report-2026-05-26-local-area-blast.md"
OUT.mkdir(parents=True, exist_ok=True)

CATEGORIES = {
    "Buyer Guides": "9f72ffad-096f-40d5-b188-300e2635d96d",
    "Seller Guides": "4d207813-b611-4060-9edf-bf13195d519f",
}

OFFICIAL_SOURCES = {
    "buying_home": "https://www.nidirect.gov.uk/information-and-services/buying-selling-and-renting-home/buying-your-home",
    "selling_home": "https://www.nidirect.gov.uk/information-and-services/buying-selling-and-renting-home/selling-your-home",
    "epc": "https://www.nidirect.gov.uk/articles/energy-performance-certificates",
    "rates": "https://www.nidirect.gov.uk/articles/sign-up-for-rates",
    "land_registry": "https://www.nidirect.gov.uk/articles/searching-land-registry",
}

TOPICS = [
    {
        "title": "Estate Agent in Claudy: How to Sell Well in a Village Market",
        "slug": "estate-agent-claudy-seller-guide-2026",
        "keyword": "estate agent Claudy",
        "category": "Seller Guides",
        "excerpt": "Selling in Claudy? A practical guide to pricing, presentation, marketing and choosing an estate agent who understands village demand.",
        "area": "Claudy",
        "angle": "choosing an estate agent and preparing a village home for sale",
        "intro": "Claudy sellers are not just competing with the house next door. They are competing for buyers comparing village life, road access, schools, space and value across the wider Derry and Roe Valley area.",
        "sections": [
            ("Start with the buyer profile", ["Before choosing a price or launch plan, think about who is most likely to buy: local movers, families wanting more space, first-time buyers priced out of the city, or people moving back toward the village."], ["List the strongest everyday advantages", "Be honest about commute and parking", "Highlight outdoor space and storage", "Show why the location works, not just the property"]),
            ("Price against real alternatives", ["A strong valuation should compare your home with realistic alternatives in Claudy, nearby villages and Derry/Londonderry, not only with the highest asking prices online."], ["Check what is actually competing today", "Separate asking price from achieved value", "Avoid testing the market too high", "Plan your review point before launch"]),
            ("Make the launch feel local and confident", ["Good photos, clear room descriptions and a sharp local write-up help buyers understand the practical appeal before they book a viewing."], ["Prepare the house before photography", "Lead with the best lifestyle benefits", "Answer obvious buyer questions early", "Follow up quickly after viewings"]),
        ],
        "internal_links": [("property marketing plan", "/post/property-marketing-plan-derry-sellers-guide"), ("questions before choosing an estate agent", "/post/questions-to-ask-estate-agent-before-selling-derry"), ("contact James Gorman Property", "/contact")],
        "source_keys": ["selling_home", "epc"],
    },
    {
        "title": "Houses for Sale in Claudy: Buyer Guide for Moving West of Derry",
        "slug": "houses-for-sale-claudy-buyer-guide-2026",
        "keyword": "houses for sale Claudy",
        "category": "Buyer Guides",
        "excerpt": "Looking at houses for sale in Claudy? Use this local buyer checklist before you view, offer or compare nearby villages.",
        "area": "Claudy",
        "angle": "buying a home in and around Claudy",
        "intro": "For buyers searching around Claudy, the decision is usually about more than bedrooms. It is about location, daily travel, condition, garden space and how the property compares with alternatives across the wider Derry area.",
        "sections": [
            ("Check the practical fit first", ["A house can look right online but feel wrong once school runs, work routes, parking, storage and maintenance are considered together."], ["Drive the route at normal commute times", "Check parking and access", "Look closely at heating and windows", "Think about garden upkeep", "Compare total monthly cost, not only asking price"]),
            ("Ask better viewing questions", ["Village and rural-edge homes can vary widely in age, services, extensions and maintenance history, so a second viewing should be structured."], ["Ask about recent work", "Check broadband and mobile signal if important", "Look for damp or ventilation concerns", "Ask what is included in the sale"]),
            ("Make a stronger offer", ["Sellers usually want certainty as well as price. A prepared buyer with finance, solicitor and timescale ready is easier to take seriously."], ["Have mortgage readiness in place", "Explain your position clearly", "Move quickly after viewing", "Know your ceiling before negotiating"]),
        ],
        "internal_links": [("house hunting checklist", "/post/house-hunting-derry-checklist-2026"), ("first viewing questions", "/post/first-viewing-questions-house-derry"), ("contact James Gorman Property", "/contact")],
        "source_keys": ["buying_home", "rates"],
    },
    {
        "title": "Property Valuation in Claudy: What Sellers Should Check Before Choosing a Price",
        "slug": "property-valuation-claudy-seller-guide-2026",
        "keyword": "property valuation Claudy",
        "category": "Seller Guides",
        "excerpt": "A plain-English guide to valuing a Claudy home before sale, including comparable homes, condition, buyer demand and launch strategy.",
        "area": "Claudy",
        "angle": "getting a realistic property valuation before selling",
        "intro": "A property valuation in Claudy should give you more than a hopeful number. It should explain who the likely buyer is, what else they can choose from, and how to launch without losing early momentum.",
        "sections": [
            ("What a useful valuation includes", ["The best valuation conversations connect condition, location, recent interest, presentation and competition. They should be specific enough to help you make a decision."], ["Ask for the evidence behind the figure", "Discuss similar homes nearby", "Check how condition affects price", "Agree the launch strategy before listing"]),
            ("Why overpricing hurts", ["An ambitious price can feel harmless, but stale listings often lose urgency. Buyers start asking what is wrong, and later reductions can look reactive."], ["Protect the first two weeks of attention", "Avoid chasing the market down", "Listen to viewing feedback", "Set a review date from day one"]),
            ("Prepare before the agent visits", ["Small preparation helps the agent see the property clearly and helps you get more useful advice."], ["Tidy key rooms", "Gather certificates and guarantees", "List recent improvements", "Be clear about your ideal timescale"]),
        ],
        "internal_links": [("prepare for a valuation", "/post/prepare-house-for-valuation-derry"), ("how to price your house", "/post/how-to-price-your-house-for-sale-derry"), ("contact James Gorman Property", "/contact")],
        "source_keys": ["selling_home", "land_registry"],
    },
    {
        "title": "Houses for Sale in Dungiven: Buyer Guide for the Roe Valley Area",
        "slug": "houses-for-sale-dungiven-buyer-guide-2026",
        "keyword": "houses for sale Dungiven",
        "category": "Buyer Guides",
        "excerpt": "Searching houses for sale in Dungiven? Compare location, condition, running costs and offer strength before you move.",
        "area": "Dungiven",
        "angle": "buying around Dungiven and the Roe Valley area",
        "intro": "Dungiven buyers often compare town convenience, countryside access, value and commuting routes. A clear checklist helps you avoid choosing on photos alone.",
        "sections": [
            ("Compare homes by real-life use", ["Two similar asking prices can mean very different lives once travel, parking, heating, rates, repairs and outdoor space are included."], ["Walk around the area", "Check access and parking", "Review heating type and running costs", "Look at storage and future flexibility"]),
            ("Look past cosmetic presentation", ["Fresh paint is easy to notice. Roof age, damp, electrics, insulation and heating are easier to miss during a quick first viewing."], ["Book a second viewing if serious", "Take notes and photos where allowed", "Ask direct condition questions", "Budget for survey follow-up"]),
            ("Offer with clarity", ["When a good home comes up, a prepared buyer can move faster and with less stress."], ["Know your finance position", "Have a solicitor ready", "Explain your chain position", "Keep your offer simple and credible"]),
        ],
        "internal_links": [("estate agent Dungiven", "/post/estate-agent-dungiven"), ("making an offer", "/post/making-an-offer-on-a-house-in-derry"), ("contact James Gorman Property", "/contact")],
        "source_keys": ["buying_home", "rates"],
    },
    {
        "title": "Property Valuation in Dungiven: Pricing a Home Before You Go to Market",
        "slug": "property-valuation-dungiven-seller-guide-2026",
        "keyword": "property valuation Dungiven",
        "category": "Seller Guides",
        "excerpt": "Thinking of selling in Dungiven? Here is how to approach valuation, pricing evidence, presentation and buyer demand.",
        "area": "Dungiven",
        "angle": "seller valuation and pricing decisions",
        "intro": "If you are selling in Dungiven, the right valuation should balance confidence with realism. It should help you attract serious buyers without wasting the strongest launch period.",
        "sections": [
            ("Use evidence, not guesswork", ["A valuation should consider comparable homes, current buyer choice, condition, presentation and how quickly similar properties are moving."], ["Ask what your main competition is", "Discuss likely buyer groups", "Compare condition honestly", "Check whether repairs are worth doing first"]),
            ("Build the launch around the price", ["Price, photography, description and viewing strategy all work together. If one part is weak, the listing can underperform even if the house itself is strong."], ["Prepare rooms before photos", "Lead with the strongest features", "Make access for viewings easy", "Review interest after launch"]),
            ("Do not ignore compliance basics", ["Sellers should avoid last-minute delays by checking practical items before marketing, including EPC position and paperwork for improvements."], ["Check EPC status", "Gather warranties and certificates", "Speak to a solicitor early", "Be ready for buyer questions"]),
        ],
        "internal_links": [("selling a home in Dungiven", "/post/selling-a-home-in-dungiven-7-mistakes-that-slow-down-a-sale"), ("property photography guide", "/post/property-photography-selling-house-derry"), ("contact James Gorman Property", "/contact")],
        "source_keys": ["selling_home", "epc"],
    },
    {
        "title": "Houses for Sale in Limavady: Buyer Guide for Moving Around the Roe Valley",
        "slug": "houses-for-sale-limavady-buyer-guide-2026",
        "keyword": "houses for sale Limavady",
        "category": "Buyer Guides",
        "excerpt": "A practical buyer guide for people searching houses for sale in Limavady, covering viewings, costs, condition and offers.",
        "area": "Limavady",
        "angle": "buying in Limavady and comparing local options",
        "intro": "Limavady gives buyers a mix of town convenience, nearby countryside and access across the North West. The right property search should compare lifestyle fit and practical ownership costs together.",
        "sections": [
            ("Shortlist with a clear brief", ["It is easy to lose weeks viewing homes that were never a good fit. Decide early what is essential and what is only nice to have."], ["Set a realistic budget", "Choose must-have locations", "Know bedroom and parking needs", "Decide your repair appetite"]),
            ("Check the total cost", ["The asking price is only one part of the decision. Rates, heating, insurance, repairs and travel can change the real monthly picture."], ["Ask about rates", "Check heating and insulation", "Think about commute costs", "Leave money for repairs and moving"]),
            ("Move quickly when the right one appears", ["Good homes can attract serious interest. Preparation before viewing helps you make a calm decision instead of rushing under pressure."], ["Have finance ready", "Book a second viewing promptly", "Ask direct questions", "Make a clean offer if it fits"]),
        ],
        "internal_links": [("estate agent Limavady", "/post/estate-agent-limavady"), ("Limavady valuation guide", "/post/thinking-of-selling-in-limavady-start-with-a-proper-valuation"), ("contact James Gorman Property", "/contact")],
        "source_keys": ["buying_home", "rates"],
    },
    {
        "title": "Selling a Home in Eglinton: How to Stand Out in a Strong Local Market",
        "slug": "selling-home-eglinton-local-market-guide-2026",
        "keyword": "selling home Eglinton",
        "category": "Seller Guides",
        "excerpt": "Selling in Eglinton? Learn how pricing, presentation, photography and local buyer positioning can help your home stand out.",
        "area": "Eglinton",
        "angle": "selling and marketing an Eglinton home",
        "intro": "Eglinton is already a recognised search area for many local buyers, so sellers need more than a basic listing. The aim is to make the right buyer understand the value quickly.",
        "sections": [
            ("Position the location properly", ["Buyers searching Eglinton may care about village feel, access to Derry/Londonderry, family space, schools, commuting and the overall quality of life. Your listing should make the best points clear without exaggeration."], ["Lead with the strongest lifestyle benefits", "Mention practical access and parking", "Show outdoor space clearly", "Explain who the home suits"]),
            ("Do the presentation basics well", ["Homes that photograph clearly and feel easy to view tend to create more confident enquiries."], ["Declutter before photography", "Tidy gardens and entrances", "Fix small distractions", "Let rooms show their real size"]),
            ("Price with a plan", ["A strong local area does not remove the need for a realistic price. Buyers still compare alternatives, condition and total cost."], ["Ask for comparable evidence", "Agree a review point", "Track viewing feedback", "Adjust based on real interest, not hope"]),
        ],
        "internal_links": [("estate agent Eglinton", "/post/estate-agent-eglinton"), ("buying in Eglinton", "/post/buying-in-eglinton-what-to-know-about-schools-commute-and-local-demand"), ("contact James Gorman Property", "/contact")],
        "source_keys": ["selling_home", "epc"],
    },
    {
        "title": "Eglinton, Claudy, Limavady and Dungiven Property Guide: Choosing the Right Local Area",
        "slug": "eglinton-claudy-limavady-dungiven-property-guide-2026",
        "keyword": "Eglinton Claudy Limavady Dungiven property guide",
        "category": "Buyer Guides",
        "excerpt": "Comparing Eglinton, Claudy, Limavady and Dungiven? Use this buyer guide to think through location, value, commute and condition.",
        "area": "Eglinton, Claudy, Limavady and Dungiven",
        "angle": "comparing four local property search areas",
        "intro": "If your search covers Eglinton, Claudy, Limavady and Dungiven, you are probably weighing up value, space, commute, schools, family needs and long-term lifestyle rather than chasing one postcode only.",
        "sections": [
            ("Compare the areas by daily life", ["The best area is the one that works on an ordinary Tuesday morning, not just during a sunny viewing."], ["Test commute routes", "Check school and childcare practicality", "Walk the local area", "Think about shops, services and support networks"]),
            ("Compare houses by condition", ["A bigger house is not always a better buy if repairs, heating, insulation or layout create hidden cost."], ["Look at roof, heating and windows", "Ask about recent work", "Check EPC and running costs", "Use surveys for serious decisions"]),
            ("Keep your search disciplined", ["A wider search area can be powerful, but it can also become confusing. Set clear rules so you can recognise the right property quickly."], ["Rank your must-haves", "Set a maximum monthly cost", "Track properties viewed", "Be ready when a strong match appears"]),
        ],
        "internal_links": [("houses for sale in Limavady", "/post/houses-for-sale-limavady-buyer-guide-2026"), ("houses for sale in Dungiven", "/post/houses-for-sale-dungiven-buyer-guide-2026"), ("contact James Gorman Property", "/contact")],
        "source_keys": ["buying_home", "land_registry", "rates"],
    },
]


def headers():
    key = os.environ["WIX_API_KEY"]
    return {"Authorization": key, "wix-site-id": WIX_SITE_ID, "Content-Type": "application/json"}


def node_id() -> str:
    return uuid.uuid4().hex


def text_node(text: str, url: str | None = None) -> dict:
    decorations = []
    if url:
        decorations.append({"type": "LINK", "linkData": {"link": {"url": url, "target": "SELF" if url.startswith(SITE) else "BLANK"}}})
    return {"type": "TEXT", "id": node_id(), "nodes": [], "textData": {"text": text, "decorations": decorations}}


def paragraph(parts: Iterable[str | tuple[str, str]]) -> dict:
    children = []
    for part in parts:
        if isinstance(part, tuple):
            label, url = part
            if url.startswith("/"):
                url = SITE + url
            children.append(text_node(label, url))
        else:
            children.append(text_node(part))
    return {"type": "PARAGRAPH", "id": node_id(), "nodes": children}


def heading(text: str, level: int = 2) -> dict:
    return {"type": "HEADING", "id": node_id(), "nodes": [text_node(text)], "headingData": {"level": level}}


def bullets(items: list[str]) -> list[dict]:
    return [paragraph([f"• {item}"]) for item in items]


def linked_sentence(topic: dict) -> dict:
    parts: list[str | tuple[str, str]] = ["Useful next reads from James Gorman Property: "]
    for i, (label, href) in enumerate(topic["internal_links"]):
        if i:
            parts.append(", " if i < len(topic["internal_links"]) - 1 else " and ")
        parts.append((label, href))
    parts.append(".")
    return paragraph(parts)


def source_sentence(topic: dict) -> dict:
    labels = {
        "buying_home": "nidirect buying a home guidance",
        "selling_home": "nidirect selling your home guidance",
        "epc": "nidirect EPC guidance",
        "rates": "nidirect rates guidance",
        "land_registry": "nidirect Land Registry guidance",
    }
    parts: list[str | tuple[str, str]] = ["For official background, see "]
    for i, key in enumerate(topic["source_keys"]):
        if i:
            parts.append(" and " if i == len(topic["source_keys"]) - 1 else ", ")
        parts.append((labels[key], OFFICIAL_SOURCES[key]))
    parts.append(".")
    return paragraph(parts)


def make_rich_content(topic: dict) -> dict:
    nodes = [
        paragraph(["By James Gorman"]),
        paragraph([topic["intro"]]),
        paragraph([f"This guide is for people looking at property in {topic['area']} who want practical local advice on {topic['angle']}. It is general guidance only; use your solicitor, lender, surveyor or tax adviser for decisions specific to your circumstances."]),
    ]
    for title, paras, action_items in topic["sections"]:
        nodes.append(heading(title))
        for p in paras:
            nodes.append(paragraph([p]))
        nodes.extend(bullets(action_items))
    nodes.append(heading("How James Gorman Property can help"))
    nodes.append(paragraph(["A good local estate agent should help you understand the market, avoid guesswork and take the next step with more confidence, whether you are buying, selling or comparing areas."]))
    nodes.append(linked_sentence(topic))
    nodes.append(source_sentence(topic))
    nodes.append(paragraph(["If you want straight local advice, ", ("contact James Gorman Property", "/contact"), " and James will talk you through the best next step."]))
    return {"nodes": nodes, "metadata": {"version": 1}}


def body_text_from_rich(rich: dict) -> str:
    bits = []
    for n in rich.get("nodes", []):
        for c in n.get("nodes", []):
            bits.append(c.get("textData", {}).get("text", ""))
    return "\n".join(bits)


def query_existing() -> dict[str, dict]:
    found = {}
    cursor = None
    while True:
        body = {"query": {"paging": {"limit": 100}}}
        if cursor:
            body = {"query": {"paging": {"cursor": cursor}}}
        r = requests.post("https://www.wixapis.com/blog/v3/draft-posts/query", headers=headers(), json=body, timeout=30)
        r.raise_for_status()
        data = r.json()
        for p in data.get("draftPosts", []):
            slug = p.get("seoSlug") or (p.get("slugs") or [None])[0]
            if slug:
                found[slug] = p
        cursor = data.get("metadata", {}).get("cursors", {}).get("next")
        if not cursor:
            break
    return found


def create_and_publish(topic: dict, existing: dict[str, dict]) -> dict:
    if topic["slug"] in existing:
        raise RuntimeError(f"Refusing duplicate slug: {topic['slug']}")
    rich = make_rich_content(topic)
    (OUT / f"2026-05-26-{topic['slug']}.txt").write_text(body_text_from_rich(rich))
    payload = {
        "draftPost": {
            "title": topic["title"],
            "excerpt": topic["excerpt"],
            "richContent": rich,
            "memberId": JAMES_MEMBER_ID,
            "categoryIds": [CATEGORIES[topic["category"]]],
            "commentingEnabled": False,
            "seoSlug": topic["slug"],
            "seoData": {"tags": []},
        }
    }
    r = requests.post("https://www.wixapis.com/blog/v3/draft-posts", headers=headers(), json=payload, timeout=45)
    if not r.ok:
        raise RuntimeError(f"create failed {topic['slug']}: {r.status_code} {r.text[:1000]}")
    draft = r.json().get("draftPost", r.json())
    post_id = draft.get("id") or draft.get("draftPost", {}).get("id")
    if not post_id:
        raise RuntimeError(f"No draft id in create response for {topic['slug']}: {r.text[:1000]}")
    pub = requests.post(f"https://www.wixapis.com/blog/v3/draft-posts/{post_id}/publish", headers=headers(), json={}, timeout=45)
    if not pub.ok:
        raise RuntimeError(f"publish failed {topic['slug']}: {pub.status_code} {pub.text[:1000]}")
    url = f"{SITE}/post/{topic['slug']}"
    existing[topic["slug"]] = {"id": post_id, "status": "PUBLISH_REQUESTED"}
    return {"title": topic["title"], "slug": topic["slug"], "url": url, "post_id": post_id, "publish_status": pub.status_code, "category": topic["category"], "target_keyword": topic["keyword"], "memberId": JAMES_MEMBER_ID}


def live_check(row: dict, title: str) -> dict:
    resp = requests.get(row["url"], timeout=30)
    html = resp.text
    text = re.sub(r"<(script|style).*?</\\1>", " ", html, flags=re.I | re.S)
    text = re.sub(r"<[^>]+>", " ", text)
    text = " ".join(unescape(text).split())
    h1 = re.search(r"<h1[^>]*>(.*?)</h1>", html, re.I | re.S)
    author_match = re.search(r'"author"\s*:\s*\{[^}]*"name"\s*:\s*"([^"]+)"', html)
    leak_markers = ["Target Keyword", "Meta Title", "Meta Description", "Slug:", "Draft status", "Primary keyword", "Secondary keywords", "Suggested slug", "Internal linking suggestions"]
    return {
        "http_status": resp.status_code,
        "public_h1": re.sub(r"<[^>]+>", "", h1.group(1)).strip() if h1 else "",
        "h1_matches": bool(h1 and title in re.sub(r"<[^>]+>", "", h1.group(1))),
        "visible_byline_james_gorman": "By James Gorman" in text,
        "public_contains_phil_patterson": "Phil Patterson" in html,
        "schema_author_name": author_match.group(1) if author_match else None,
        "schema_author_contains_james": bool(author_match and "james" in author_match.group(1).lower()),
        "title_in_public_html": title in html,
        "leak_markers_found": [m for m in leak_markers if m in html],
    }


def write_md_report(report: dict, qa: dict) -> None:
    lines = [
        "# James Gorman Property - 26 May 2026 Local Area Content Blast",
        "",
        "## Published URLs",
    ]
    for r in report["results"]:
        lines.append(f"- [{r['title']}]({r['url']}) — `{r['target_keyword']}`")
    lines += [
        "",
        "## QA Summary",
        f"- API/live failures: {len(qa['failures'])}",
        f"- Sitemap status: {qa['sitemap_status']}",
        "- Checks: public 200, Wix API `PUBLISHED`, James member ID, H1 match, visible `By James Gorman`, sitemap inclusion, no `Phil Patterson`, no draft/SEO leak markers.",
        "",
        "## Notes",
        "- Focus areas: Eglinton, Claudy, Limavady and Dungiven.",
        "- Built as local long-tail buyer/seller guides to avoid duplicating older broad `estate agent` posts already live.",
        "- No outreach, email, social posting or featured-image work was done.",
    ]
    REPORT_MD.write_text("\n".join(lines) + "\n")


def main() -> int:
    existing = query_existing()
    duplicates = [t["slug"] for t in TOPICS if t["slug"] in existing]
    if duplicates:
        raise RuntimeError(f"Refusing duplicate slugs before publishing: {duplicates}")

    results = []
    for topic in TOPICS:
        results.append(create_and_publish(topic, existing))
        time.sleep(0.6)

    time.sleep(5)
    sitemap = requests.get(f"{SITE}/blog-posts-sitemap.xml", timeout=30)
    after = query_existing()
    qa = {"checked_at": time.strftime("%Y-%m-%dT%H:%M:%S%z"), "sitemap_status": sitemap.status_code, "results": [], "failures": []}
    for row in results:
        p = after.get(row["slug"], {})
        item = {
            **row,
            "api_status": p.get("status"),
            "api_memberId": p.get("memberId"),
            "actual_slug": p.get("seoSlug") or (p.get("slugs") or [None])[0],
            "sitemap_includes_url": row["url"] in sitemap.text,
            **live_check(row, row["title"]),
        }
        ok = item["api_status"] == "PUBLISHED" and item["api_memberId"] == JAMES_MEMBER_ID and item["http_status"] == 200 and item["h1_matches"] and item["visible_byline_james_gorman"] and not item["public_contains_phil_patterson"] and item["schema_author_contains_james"] and item["sitemap_includes_url"] and not item["leak_markers_found"]
        if not ok:
            qa["failures"].append(item)
        qa["results"].append(item)

    report = {"published_at": time.strftime("%Y-%m-%dT%H:%M:%S%z"), "domain": "jamesgormanproperty.com", "draft_dir": str(OUT), "official_sources_used": OFFICIAL_SOURCES, "author_note": "Posts are assigned to James' Wix memberId and include a visible 'By James Gorman' body byline.", "results": results}
    REPORT_JSON.write_text(json.dumps(report, indent=2))
    QA_JSON.write_text(json.dumps(qa, indent=2))
    write_md_report(report, qa)
    print(json.dumps({"published": len(results), "failures": len(qa["failures"]), "report": str(REPORT_MD), "report_json": str(REPORT_JSON), "qa": str(QA_JSON)}, indent=2))
    return 0 if not qa["failures"] else 1


if __name__ == "__main__":
    raise SystemExit(main())
