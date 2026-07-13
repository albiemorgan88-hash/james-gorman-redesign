#!/usr/bin/env python3
from __future__ import annotations

import json
import os
import re
import time
import uuid
from pathlib import Path
from typing import Iterable
from html import unescape

import requests

SITE = "https://www.jamesgormanproperty.com"
WIX_SITE_ID = "4b8170fd-99cc-45e8-a4fb-e28bb7156d52"
JAMES_MEMBER_ID = "8a0a22b4-bf7d-4b83-9347-5d4ae7d25012"
OUT = Path("projects/clients/james-gorman/blog-drafts/content-blast-2026-05-25")
OUT.mkdir(parents=True, exist_ok=True)
REPORT_JSON = Path("projects/clients/james-gorman/blog-publish-report-2026-05-25-content-blast.json")
QA_JSON = Path("projects/clients/james-gorman/blog-publish-api-qa-2026-05-25-content-blast.json")

CATEGORIES = {
    "Buyer Guides": "9f72ffad-096f-40d5-b188-300e2635d96d",
    "Seller Guides": "4d207813-b611-4060-9edf-bf13195d519f",
}

OFFICIAL_SOURCES = {
    "epc": "https://www.nidirect.gov.uk/articles/energy-performance-certificates",
    "buying_home": "https://www.nidirect.gov.uk/information-and-services/buying-selling-and-renting-home/buying-your-home",
    "selling_home": "https://www.nidirect.gov.uk/information-and-services/buying-selling-and-renting-home/selling-your-home",
    "land_registry": "https://www.nidirect.gov.uk/articles/searching-land-registry",
    "rates": "https://www.nidirect.gov.uk/articles/sign-up-for-rates",
}

TOPICS = [
    {
        "title": "Mortgage Agreement in Principle in Derry: What Buyers Should Do Before Viewing",
        "slug": "mortgage-agreement-in-principle-derry",
        "keyword": "mortgage agreement in principle Derry",
        "category": "Buyer Guides",
        "excerpt": "Buying in Derry? Learn why a mortgage agreement in principle helps you view, offer and move faster without over-stretching.",
        "angle": "buyer readiness before viewings and offers",
        "intro": "A mortgage agreement in principle is not a final mortgage offer, but it can make your house search more focused and more credible.",
        "sections": [
            ("Why it helps before you view", ["It gives you a realistic price range before you fall in love with the wrong property.", "It also helps an estate agent understand that you are a serious buyer, especially when a home has strong interest."], ["Check your deposit", "Speak with a broker or lender", "Understand monthly affordability", "Keep proof ready before offering"]),
            ("What it does not guarantee", ["A lender still needs a full application, valuation and checks before issuing a formal offer. Your circumstances, the property condition and the lender's criteria all still matter."], ["Do not treat it as a guaranteed approval", "Avoid making offers beyond your comfort zone", "Tell your adviser if income, credit or deposit changes"]),
            ("How to use it when offering", ["When you find the right home, a clear agreement in principle can support your offer alongside deposit position, chain status and solicitor readiness."], ["Share only what is relevant", "Be clear about your timescale", "Ask what the seller needs from the next buyer"]),
        ],
        "internal_links": [("house hunting checklist", "/post/house-hunting-derry-checklist-2026"), ("viewing checklist", "/post/viewing-a-house-in-derry-checklist-2026"), ("contact James Gorman Property", "/contact")],
        "source_keys": ["buying_home"],
    },
    {
        "title": "Home Surveys in Northern Ireland: What Derry Buyers Should Check Before Completion",
        "slug": "home-survey-northern-ireland-buyer-guide",
        "keyword": "home survey Northern Ireland buyer guide",
        "category": "Buyer Guides",
        "excerpt": "A practical guide for Derry buyers on surveys, condition checks, red flags and what to ask before completion.",
        "angle": "buyer due diligence after viewing and before completion",
        "intro": "A viewing tells you how a property feels. A survey and proper checks help you understand what you may be taking on.",
        "sections": [
            ("Why a survey matters", ["A survey can highlight visible defects, maintenance issues and areas that need specialist follow-up. It is especially useful when a property is older, extended, vacant or recently renovated."], ["Look beyond fresh paint", "Ask about damp, roof age and heating", "Check boundaries and access", "Budget for follow-up reports if needed"]),
            ("What buyers often miss", ["Buyers naturally focus on room size, layout and location. The costly issues are often less obvious during a quick viewing."], ["Drainage smells", "Uneven floors", "Cracking around openings", "Poor ventilation", "Old electrics or heating systems"]),
            ("How to handle survey findings", ["A survey does not automatically mean a sale should collapse. It gives you evidence to ask better questions and decide whether the price, repairs or timescale still make sense."], ["Stay calm", "Get quotes where needed", "Separate minor maintenance from major risk", "Keep your solicitor and mortgage adviser informed"]),
        ],
        "internal_links": [("making an offer", "/post/making-an-offer-on-a-house-in-derry"), ("sale agreed guide", "/post/sale-agreed-northern-ireland-derry-guide"), ("contact James Gorman Property", "/contact")],
        "source_keys": ["buying_home", "land_registry"],
    },
    {
        "title": "EPC When Selling a House in Northern Ireland: What Derry Sellers Need to Know",
        "slug": "epc-selling-house-northern-ireland",
        "keyword": "EPC selling house Northern Ireland",
        "category": "Seller Guides",
        "excerpt": "Selling in Derry? Here is what an EPC is, when sellers need one and how to avoid delaying your launch.",
        "angle": "seller compliance and launch readiness",
        "intro": "An Energy Performance Certificate is one of the small practical items that can slow a listing down if it is left until the last minute.",
        "sections": [
            ("When an EPC is needed", ["In Northern Ireland, an EPC is needed when a property is marketed for sale or rent. It rates the building's energy efficiency and gives buyers or tenants useful running-cost context."], ["Check whether your current EPC is still valid", "Book an accredited assessor if needed", "Have the certificate ready before marketing", "Keep a copy for your solicitor and agent"]),
            ("What buyers look at", ["Buyers may not make a decision on the EPC alone, but they increasingly notice heating costs, insulation, glazing and the likely cost of future improvements."], ["Heating system", "Insulation", "Windows and doors", "Running costs", "Possible improvement recommendations"]),
            ("How sellers should prepare", ["The EPC is not a staging document, but it is part of a confident launch. Having it ready helps the property go live cleanly and avoids avoidable questions later."], ["Do not wait for the first viewing", "Check the address details", "Ask your agent if anything else is needed before launch"]),
        ],
        "internal_links": [("prepare for a valuation", "/post/prepare-house-for-valuation-derry"), ("property marketing plan", "/post/property-marketing-plan-derry-sellers-guide"), ("contact James Gorman Property", "/contact")],
        "source_keys": ["epc", "selling_home"],
    },
    {
        "title": "Property Chain in Derry Explained: What Buyers and Sellers Can Do to Keep Moving",
        "slug": "property-chain-derry-explained",
        "keyword": "property chain Derry explained",
        "category": "Seller Guides",
        "excerpt": "A clear Derry property-chain guide covering chain risk, communication, timing and what helps a sale keep moving.",
        "angle": "chain management for buyers and sellers",
        "intro": "A property chain means your move depends on other linked sales and purchases. The longer the chain, the more important communication becomes.",
        "sections": [
            ("Why chains cause delays", ["A delay in one sale can affect every connected move. Mortgage offers, surveys, searches, title queries and moving dates all need to line up."], ["One buyer's mortgage is delayed", "A survey raises questions", "Solicitors wait on replies", "A moving date changes", "A seller cannot find their next home"]),
            ("How sellers can reduce risk", ["You cannot control every buyer, but you can make your own part of the chain cleaner and easier to progress."], ["Prepare documents early", "Choose a responsive solicitor", "Price realistically", "Keep replies quick", "Be honest about onward plans"]),
            ("How buyers can strengthen their position", ["A buyer with finance, solicitor and deposit ready is easier for a seller to trust than one who is only starting the process after offering."], ["Have mortgage readiness", "Explain your chain position", "Move quickly on survey decisions", "Keep communication calm and factual"]),
        ],
        "internal_links": [("sell before buying", "/post/sell-house-before-buying-next-derry"), ("chain-free house sale", "/post/chain-free-house-sale-derry"), ("contact James Gorman Property", "/contact")],
        "source_keys": ["buying_home", "selling_home"],
    },
    {
        "title": "First Viewing Questions in Derry: What to Ask Before You Book a Second Look",
        "slug": "first-viewing-questions-house-derry",
        "keyword": "first viewing questions house Derry",
        "category": "Buyer Guides",
        "excerpt": "Use this Derry buyer checklist to ask better first-viewing questions about condition, chain, running costs and next steps.",
        "angle": "buyer viewing checklist and second-viewing decisions",
        "intro": "A first viewing can go quickly. The right questions help you decide whether to walk away, book a second look or prepare an offer.",
        "sections": [
            ("Questions about the seller and timescale", ["Understanding the seller's position helps you judge how quickly things may move and whether your own timescale fits."], ["Is there an onward chain?", "Has the seller found somewhere?", "How long has the property been listed?", "Have there been previous offers?"]),
            ("Questions about the property", ["Try to separate cosmetic preferences from condition and practical issues. A dated kitchen is different from uncertain heating, damp or structural concerns."], ["How old is the boiler?", "Has any work been carried out recently?", "Are there guarantees or certificates?", "What is included in the sale?"]),
            ("Questions after the viewing", ["Do not make a rushed decision in the driveway. Compare the home with your budget, commute, school needs, repair appetite and alternative properties."], ["Would you view again?", "What would you check on a second visit?", "What would stop you offering?", "Does the price still feel right?"]),
        ],
        "internal_links": [("viewing checklist", "/post/viewing-a-house-in-derry-checklist-2026"), ("making an offer", "/post/making-an-offer-on-a-house-in-derry"), ("contact James Gorman Property", "/contact")],
        "source_keys": ["buying_home"],
    },
    {
        "title": "Conveyancing in Northern Ireland: A Plain-English Guide for Derry Buyers",
        "slug": "conveyancing-process-northern-ireland-buyers",
        "keyword": "conveyancing process Northern Ireland buyers",
        "category": "Buyer Guides",
        "excerpt": "A simple buyer guide to conveyancing in Northern Ireland, including solicitors, searches, title questions and completion.",
        "angle": "buyer education after offer accepted",
        "intro": "Once a sale is agreed, the legal work begins. Conveyancing is the process that checks ownership, title, searches, mortgage instructions and transfer of the property.",
        "sections": [
            ("What your solicitor does", ["Your solicitor acts for you in the legal transfer. They raise questions, review documents, deal with lender requirements and guide you toward completion."], ["Open the file early", "Provide ID and funds evidence promptly", "Ask what searches are needed", "Keep mortgage and solicitor timelines aligned"]),
            ("Why title and searches matter", ["Land, boundaries, rights, charges and restrictions can all affect a property. These checks are not exciting, but they protect you from avoidable surprises."], ["Confirm registered ownership", "Ask about rights of way", "Check if alterations need paperwork", "Understand any conditions before completion"]),
            ("How buyers can keep things moving", ["Most delays are not solved by panic. They are solved by clear replies, organised documents and early decisions when a question appears."], ["Return forms quickly", "Respond to solicitor questions", "Keep your deposit funds ready", "Do not book removals until dates are confirmed"]),
        ],
        "internal_links": [("sale agreed guide", "/post/sale-agreed-northern-ireland-derry-guide"), ("property finder support", "/post/property-finder-derry-buyer-service-guide-2026"), ("contact James Gorman Property", "/contact")],
        "source_keys": ["buying_home", "land_registry"],
    },
    {
        "title": "Rates When Buying a House in Northern Ireland: What Derry Buyers Should Remember",
        "slug": "rates-buying-house-northern-ireland",
        "keyword": "rates buying house Northern Ireland",
        "category": "Buyer Guides",
        "excerpt": "Buying in Derry? Remember rates as part of your ownership costs, alongside mortgage, insurance, repairs and moving costs.",
        "angle": "ownership costs for Northern Ireland buyers",
        "intro": "When buyers budget for a move, they often focus on deposit, mortgage and solicitor costs. In Northern Ireland, domestic rates also need to be part of the monthly picture.",
        "sections": [
            ("What rates are", ["Rates are a property tax in Northern Ireland. Land & Property Services assesses and collects rates, and buyers should understand that the bill becomes part of home ownership."], ["Ask about current rates", "Budget beyond the mortgage", "Check what reliefs may apply", "Tell Land & Property Services after buying"]),
            ("Why buyers should ask early", ["Two homes with similar asking prices can feel different once heating, insurance, rates, repairs and travel costs are considered together."], ["Compare total monthly cost", "Check heating type", "Think about maintenance", "Leave room for unexpected repairs"]),
            ("What to do after completion", ["Once you buy, make sure ownership and billing details are updated properly. Your solicitor can guide the legal side, but buyers should not ignore practical account setup after moving."], ["Set up rates account", "Update utilities", "Arrange insurance", "Keep completion paperwork safe"]),
        ],
        "internal_links": [("first-time buyer guide", "/post/first-time-buyer-derry"), ("house hunting checklist", "/post/house-hunting-derry-checklist-2026"), ("contact James Gorman Property", "/contact")],
        "source_keys": ["rates", "buying_home"],
    },
    {
        "title": "Property Photography in Derry: How Better Photos Help Sellers Win More Viewings",
        "slug": "property-photography-selling-house-derry",
        "keyword": "property photography Derry selling house",
        "category": "Seller Guides",
        "excerpt": "A practical seller guide to property photos, first impressions, room preparation and why presentation matters online.",
        "angle": "seller marketing and photo preparation",
        "intro": "Most buyers see your home online before they ever step through the door. Strong photography can increase confidence, clicks and viewing enquiries.",
        "sections": [
            ("Why photos matter", ["Good photos do not change the property, but they help buyers understand space, light, flow and condition. Poor photos can make a good home feel smaller or less cared for."], ["Brighten rooms", "Clear floors and surfaces", "Open curtains", "Tidy gardens", "Fix obvious small distractions"]),
            ("What to prepare before photos", ["Photo day is not the time for major renovation. It is the time for calm, simple presentation that lets the property read clearly online."], ["Hide bins and laundry", "Make beds neatly", "Remove excess toiletries", "Park cars away from key exterior shots", "Switch on lamps where useful"]),
            ("How photos fit the wider marketing plan", ["Photography works best alongside accurate pricing, a strong description, clear floor information and fast follow-up with qualified buyers."], ["Use photos to earn viewings", "Use viewings to create offers", "Use feedback to adjust the plan if needed"]),
        ],
        "internal_links": [("property marketing plan", "/post/property-marketing-plan-derry-sellers-guide"), ("preparing for house viewings", "/post/preparing-for-house-viewings-derry"), ("contact James Gorman Property", "/contact")],
        "source_keys": ["selling_home"],
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
    # Wix accepts simple paragraph nodes reliably; prefix bullets avoid list schema edge-cases.
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
        "epc": "nidirect EPC guidance",
        "buying_home": "nidirect buying a home guidance",
        "selling_home": "nidirect selling your home guidance",
        "land_registry": "nidirect Land Registry guidance",
        "rates": "nidirect rates guidance",
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
        paragraph([f"This guide is for people in and around Derry who want practical, local advice on {topic['angle']}. It is general guidance, not legal, mortgage or tax advice, so use your solicitor, lender or adviser for decisions specific to your circumstances."]),
    ]
    for title, paras, action_items in topic["sections"]:
        nodes.append(heading(title))
        for p in paras:
            nodes.append(paragraph([p]))
        nodes.extend(bullets(action_items))
    nodes.append(heading("How James Gorman Property can help"))
    nodes.append(paragraph(["A good local estate agent should make the next step clearer, whether you are deciding what to offer, preparing to sell, comparing options or trying to keep a move on track."]))
    nodes.append(linked_sentence(topic))
    nodes.append(source_sentence(topic))
    nodes.append(paragraph(["If you want straight, local advice, ", ("contact James Gorman Property", "/contact"), " and James will talk you through the best next step."]))
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
    (OUT / f"2026-05-25-{topic['slug']}.txt").write_text(body_text_from_rich(rich))
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
    return {"title": topic["title"], "slug": topic["slug"], "url": url, "post_id": post_id, "publish_status": pub.status_code, "category": topic["category"], "target_keyword": topic["keyword"], "memberId": JAMES_MEMBER_ID}


def live_check(row: dict, title: str, expected_slug: str) -> dict:
    url = row["url"]
    resp = requests.get(url, timeout=30)
    html = resp.text
    text = re.sub(r"<(script|style).*?</\\1>", " ", html, flags=re.I | re.S)
    text = re.sub(r"<[^>]+>", " ", text)
    text = " ".join(unescape(text).split())
    h1 = re.search(r"<h1[^>]*>(.*?)</h1>", html, re.I | re.S)
    author_match = re.search(r'"author"\s*:\s*\{[^}]*"name"\s*:\s*"([^"]+)"', html)
    return {
        "http_status": resp.status_code,
        "public_h1": re.sub(r"<[^>]+>", "", h1.group(1)).strip() if h1 else "",
        "h1_matches": bool(h1 and title in re.sub(r"<[^>]+>", "", h1.group(1))),
        "visible_byline_james_gorman": "By James Gorman" in text,
        "public_contains_phil_patterson": "Phil Patterson" in html,
        "schema_author_name": author_match.group(1) if author_match else None,
        "schema_author_contains_james": bool(author_match and "james" in author_match.group(1).lower()),
        "title_in_public_html": title in html,
    }


def main() -> int:
    existing = query_existing()
    results = []
    for topic in TOPICS:
        row = create_and_publish(topic, existing)
        results.append(row)
        time.sleep(0.5)

    sitemap = requests.get(f"{SITE}/blog-posts-sitemap.xml", timeout=30)
    # Query API state after publish.
    after = query_existing()
    qa = {"checked_at": time.strftime("%Y-%m-%dT%H:%M:%S%z"), "sitemap_status": sitemap.status_code, "results": [], "failures": []}
    for row in results:
        p = after.get(row["slug"], {})
        check = live_check(row, row["title"], row["slug"])
        item = {
            **row,
            "api_status": p.get("status"),
            "api_memberId": p.get("memberId"),
            "actual_slug": p.get("seoSlug") or (p.get("slugs") or [None])[0],
            "sitemap_includes_url": row["url"] in sitemap.text,
            **check,
        }
        ok = item["api_status"] == "PUBLISHED" and item["api_memberId"] == JAMES_MEMBER_ID and item["http_status"] == 200 and item["h1_matches"] and item["visible_byline_james_gorman"] and not item["public_contains_phil_patterson"] and item["schema_author_contains_james"] and item["sitemap_includes_url"]
        if not ok:
            qa["failures"].append(item)
        qa["results"].append(item)

    report = {"published_at": time.strftime("%Y-%m-%dT%H:%M:%S%z"), "domain": "jamesgormanproperty.com", "draft_dir": str(OUT.resolve()), "official_sources_used": OFFICIAL_SOURCES, "author_note": "Posts are assigned to James' Wix memberId. Because Wix member profile edit is member-only through the API, each new post also includes a visible 'By James Gorman' byline at the top of the body.", "results": results}
    REPORT_JSON.write_text(json.dumps(report, indent=2))
    QA_JSON.write_text(json.dumps(qa, indent=2))
    print(json.dumps({"published": len(results), "failures": len(qa["failures"]), "report": str(REPORT_JSON), "qa": str(QA_JSON)}, indent=2))
    return 0 if not qa["failures"] else 1


if __name__ == "__main__":
    raise SystemExit(main())
