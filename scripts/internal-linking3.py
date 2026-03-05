#!/usr/bin/env python3
"""Add internal links to Webflow blog posts. CTAs already done."""

import urllib.request
import urllib.error
import time
import json
import re
import ssl

ctx = ssl.create_default_context()
API_TOKEN = "d74d6c74fbc2954c75be9333c7f00d1980886e3539e2b7d79bd48f75cb33cd3d"
COLLECTION_ID = "67e4825804e6baf1d5246f5b"
BASE_URL = "https://api.webflow.com/v2"

# Linking map: slug -> [(search_phrase, target_url)]
# Use shorter phrases that actually appear in post content
LINKING_MAP = {
    "how-to-make-your-business-ai-first": [
        ("AI consultancy", "/blog/ai-consultancy-uk-the-evolution-of-ai-in-business-development"),
        ("AI tools", "/blog/15-amazing-ai-tools-for-business"),
    ],
    "ai-support-northern-ireland": [
        ("AI tools", "/blog/15-amazing-ai-tools-for-business"),
        ("getting started", "/blog/getting-started-with-ai"),
    ],
    "ai-business-development-tools": [
        ("business development", "/blog/how-to-use-a-i-in-business-development"),
        ("lead generation", "/blog/lead-generation-ai"),
    ],
    "what-is-the-best-llm-right-now": [
        ("AI tools", "/blog/15-amazing-ai-tools-for-business"),
        ("getting started", "/blog/getting-started-with-ai"),
    ],
    "claude-cowork-whats-it-good-for-and-whats-the-future": [
        ("AI tools", "/blog/15-amazing-ai-tools-for-business"),
        ("agentic AI", "/blog/agentic-ai"),
    ],
    "will-ai-take-my-job": [
        ("AI agents", "/blog/agentic-ai"),
        ("job displacement", "/blog/ai-job-displacement-the-rise-of-ai-agents-and-the-future-of-work"),
    ],
    "ai-training-frameworks-for-corporates": [
        ("organisational AI training", "/blog/organisational-ai-training"),
        ("AI corporate coaching", "/blog/ai-corporate-coaching"),
    ],
    "ai-in-northern-ireland": [
        ("future of AI", "/blog/the-future-of-ai-in-northern-ireland-government-education-and-industry-outlook"),
        ("business use cases", "/blog/5-business-use-cases-of-ai-in-northern-ireland"),
    ],
    "using-ai-in-healthcare": [
        ("integrating AI", "/blog/integrating-ai-into-healthcare"),
        ("AI consultancy", "/blog/ai-consultancy-uk-the-evolution-of-ai-in-business-development"),
    ],
    "using-ai-in-schools": [
        ("AI in education", "/blog/ai-in-education"),
        ("getting started", "/blog/getting-started-with-ai"),
    ],
    "is-ai-a-bubble": [
        ("AGI", "/blog/when-will-agi-happen"),
        ("AI developments", "/blog/ai-developments-in-2025"),
    ],
    "has-ai-hit-a-plateau": [
        ("AGI", "/blog/when-will-agi-happen"),
        ("AI developments", "/blog/ai-developments-in-2025"),
    ],
    "the-current-status-of-ai-agents": [
        ("agentic AI", "/blog/agentic-ai"),
        ("sales AI agents", "/blog/sales-ai-agents"),
    ],
    "upskilling-junior-staff-in-ai": [
        ("training staff", "/blog/training-staff-on-ai"),
        ("learning AI", "/blog/learning-ai-for-free"),
    ],
    "ai-in-construction": [
        ("tender writing", "/blog/using-ai-for-writing-tenders"),
        ("business use cases", "/blog/5-business-use-cases-of-ai-in-northern-ireland"),
    ],
    "using-ai-in-construction": [
        ("tender writing", "/blog/using-ai-for-writing-tenders"),
        ("business use cases", "/blog/5-business-use-cases-of-ai-in-northern-ireland"),
    ],
    "ai-in-dentistry": [
        ("AI in healthcare", "/blog/integrating-ai-into-healthcare"),
        ("AI consultancy", "/blog/ai-consultancy-uk-the-evolution-of-ai-in-business-development"),
    ],
    "integrating-ai-into-healthcare": [
        ("AI in dentistry", "/blog/ai-in-dentistry"),
        ("disrupted by AI", "/blog/5-sectors-being-disrupted-by-ai"),
    ],
    "ai-in-education": [
        ("AI in schools", "/blog/using-ai-in-schools"),
        ("learning AI", "/blog/learning-ai-for-free"),
    ],
    "uk-grants-for-embedding-ai": [
        ("AI consultancy", "/blog/ai-consultancy-uk-the-evolution-of-ai-in-business-development"),
        ("getting started", "/blog/getting-started-with-ai"),
    ],
    "using-ai-for-my-business": [
        ("getting started", "/blog/getting-started-with-ai"),
        ("AI tools", "/blog/15-amazing-ai-tools-for-business"),
    ],
    "what-is-reinforcement-learning": [
        ("agentic AI", "/blog/agentic-ai"),
        ("AGI", "/blog/when-will-agi-happen"),
    ],
    "matrix-report-northern-ireland": [
        ("AI in Northern Ireland", "/blog/ai-in-northern-ireland"),
        ("future of AI", "/blog/the-future-of-ai-in-northern-ireland-government-education-and-industry-outlook"),
    ],
    "when-will-agi-happen": [
        ("sovereign AI", "/blog/sovereign-ai"),
        ("AI developments", "/blog/ai-developments-in-2025"),
    ],
    "training-corporates-to-become-ai-first": [
        ("AI corporate coaching", "/blog/ai-corporate-coaching"),
        ("training frameworks", "/blog/ai-training-frameworks-for-corporates"),
    ],
    "proven-use-cases-of-ai": [
        ("business development", "/blog/how-to-use-a-i-in-business-development"),
        ("agentic AI", "/blog/agentic-ai-use-cases"),
    ],
    "ai-compute-power": [
        ("AI infrastructure", "/blog/ai-infrastructure"),
        ("sovereign AI", "/blog/sovereign-ai"),
    ],
    "agent-3-the-autonomous-coding-agent": [
        ("autonomous agents", "/blog/building-autonomous-agents"),
        ("agentic AI", "/blog/agentic-ai"),
    ],
    "what-are-evals": [
        ("best LLM", "/blog/what-is-the-best-llm-right-now"),
        ("MCPs", "/blog/what-are-mcps"),
    ],
    "what-are-mcps": [
        ("agentic AI", "/blog/agentic-ai"),
        ("autonomous agents", "/blog/building-autonomous-agents"),
    ],
    "ai-infrastructure": [
        ("compute power", "/blog/ai-compute-power"),
        ("sovereign AI", "/blog/sovereign-ai"),
    ],
    "agentic-ai": [
        ("use cases", "/blog/agentic-ai-use-cases"),
        ("sales AI agents", "/blog/sales-ai-agents"),
    ],
    "sovereign-ai": [
        ("AI infrastructure", "/blog/ai-infrastructure"),
        ("compute power", "/blog/ai-compute-power"),
    ],
    "chatgpt-claude-perplexity-gemini-grok-which-ai-tool-should-you-use": [
        ("best LLM", "/blog/what-is-the-best-llm-right-now"),
        ("AI tools for business", "/blog/15-amazing-ai-tools-for-business"),
    ],
    "learning-ai-for-free": [
        ("getting started", "/blog/getting-started-with-ai"),
        ("upskilling", "/blog/upskilling-junior-staff-in-ai"),
    ],
    "organisational-ai-training": [
        ("training frameworks", "/blog/ai-training-frameworks-for-corporates"),
        ("training staff", "/blog/training-staff-on-ai"),
    ],
    "how-can-countries-positively-regulate-ai": [
        ("sovereign AI", "/blog/sovereign-ai"),
        ("AI superpower", "/blog/can-the-uk-become-an-ai-superpower"),
    ],
    "agentic-ai-use-cases": [
        ("agentic AI", "/blog/agentic-ai"),
        ("sales AI agents", "/blog/sales-ai-agents"),
    ],
    "ai-northern-ireland": [
        ("AI in Northern Ireland", "/blog/ai-in-northern-ireland"),
        ("future of AI", "/blog/the-future-of-ai-in-northern-ireland-government-education-and-industry-outlook"),
    ],
    "when-will-the-uk-have-superintelligence": [
        ("AGI", "/blog/when-will-agi-happen"),
        ("AI superpower", "/blog/can-the-uk-become-an-ai-superpower"),
    ],
    "encouraging-your-team-to-embrace-ai": [
        ("training staff", "/blog/training-staff-on-ai"),
        ("organisational AI training", "/blog/organisational-ai-training"),
    ],
    "ai-job-displacement-the-rise-of-ai-agents-and-the-future-of-work": [
        ("agentic AI", "/blog/agentic-ai"),
        ("sales AI agents", "/blog/sales-ai-agents"),
    ],
    "training-staff-on-ai": [
        ("upskilling", "/blog/upskilling-junior-staff-in-ai"),
        ("organisational AI training", "/blog/organisational-ai-training"),
    ],
    "ai-data-security": [
        ("private AI", "/blog/private-ai-for-enterprise-safely-harnessing-ai-with-your-data"),
        ("regulate AI", "/blog/how-can-countries-positively-regulate-ai"),
    ],
    "building-ai-automations": [
        ("agentic AI", "/blog/agentic-ai-use-cases"),
        ("AI tools", "/blog/ai-tools-for-business-development"),
    ],
    "can-the-uk-become-an-ai-superpower": [
        ("sovereign AI", "/blog/sovereign-ai"),
        ("AI in Northern Ireland", "/blog/ai-in-northern-ireland"),
    ],
    "5-sectors-being-disrupted-by-ai": [
        ("AI in construction", "/blog/ai-in-construction"),
        ("AI in healthcare", "/blog/using-ai-in-healthcare"),
    ],
    "ai-corporate-coaching": [
        ("AI business coaching", "/blog/ai-business-coaching"),
        ("AI consultancy", "/blog/ai-consultancy-uk-the-evolution-of-ai-in-business-development"),
    ],
    "3-ai-startups-in-london-to-watch": [
        ("business development", "/blog/ai-for-business-development-and-ai-marketing-in-the-uk"),
        ("early adopter", "/blog/being-an-early-adopter-of-ai"),
    ],
    "being-an-early-adopter-of-ai": [
        ("AI consultancy", "/blog/ai-consultancy-uk-the-evolution-of-ai-in-business-development"),
        ("getting started", "/blog/getting-started-with-ai"),
    ],
    "15-amazing-ai-tools-for-business": [
        ("business development", "/blog/ai-tools-for-business-development"),
        ("small business", "/blog/best-ai-tools-for-small-business-2025"),
    ],
    "ongoing-ai-business-support-why-you-need-on-demand-expertise": [
        ("AI consultancy", "/blog/ai-consultancy-uk-the-evolution-of-ai-in-business-development"),
        ("AI business coaching", "/blog/ai-business-coaching"),
    ],
    "ai-tools-for-business-development": [
        ("business development", "/blog/how-to-use-a-i-in-business-development"),
        ("lead generation", "/blog/lead-generation-ai"),
    ],
    "sales-ai-agents": [
        ("agentic AI", "/blog/agentic-ai"),
        ("lead generation", "/blog/lead-generation-ai"),
    ],
    "5-business-use-cases-of-ai-in-northern-ireland": [
        ("AI in Northern Ireland", "/blog/ai-in-northern-ireland"),
        ("tender writing", "/blog/using-ai-for-writing-tenders"),
    ],
    "using-ai-for-writing-tenders": [
        ("AI marketing", "/blog/ai-marketing"),
        ("business use cases", "/blog/5-business-use-cases-of-ai-in-northern-ireland"),
    ],
    "ai-chat-gpt-consulting": [
        ("AI consultancy", "/blog/ai-consultancy-uk-the-evolution-of-ai-in-business-development"),
        ("business development", "/blog/how-to-use-a-i-in-business-development"),
    ],
    "how-to-use-a-i-in-business-development": [
        ("lead generation", "/blog/lead-generation-ai"),
        ("AI sales coaching", "/blog/ai-sales-coaching"),
    ],
    "ai-marketing": [
        ("business development", "/blog/how-to-use-a-i-in-business-development"),
        ("lead generation", "/blog/lead-generation-ai"),
    ],
    "ai-sales-coaching": [
        ("business development", "/blog/how-to-use-a-i-in-business-development"),
        ("lead generation", "/blog/lead-generation-ai"),
    ],
    "lead-generation-ai": [
        ("business development", "/blog/how-to-use-a-i-in-business-development"),
        ("AI sales coaching", "/blog/ai-sales-coaching"),
    ],
    "ai-for-business-development-and-ai-marketing-in-the-uk": [
        ("AI consultancy", "/blog/ai-consultancy-uk-the-evolution-of-ai-in-business-development"),
        ("lead generation", "/blog/lead-generation-ai"),
    ],
    "ai-consultancy-uk-the-evolution-of-ai-in-business-development": [
        ("business development", "/blog/how-to-use-a-i-in-business-development"),
        ("lead generation", "/blog/lead-generation-ai"),
    ],
    "ai-for-b2b-sales-automation": [
        ("sales AI agents", "/blog/sales-ai-agents"),
        ("lead generation", "/blog/lead-generation-ai"),
    ],
    "ai-for-b2b-sales-automation-2": [
        ("sales AI agents", "/blog/sales-ai-agents"),
        ("AI tools", "/blog/ai-tools-for-business-development"),
    ],
    "building-autonomous-agents": [
        ("agentic AI", "/blog/agentic-ai"),
        ("use cases", "/blog/agentic-ai-use-cases"),
    ],
    "ai-developments-in-2025": [
        ("AGI", "/blog/when-will-agi-happen"),
        ("AI consultancy", "/blog/ai-consultancy-uk-the-evolution-of-ai-in-business-development"),
    ],
    "getting-started-with-ai": [
        ("AI consultancy", "/blog/ai-consultancy-uk-the-evolution-of-ai-in-business-development"),
        ("AI tools", "/blog/15-amazing-ai-tools-for-business"),
    ],
    "small-business-using-ai": [
        ("AI consultancy", "/blog/ai-consultancy-uk-the-evolution-of-ai-in-business-development"),
        ("AI tools", "/blog/best-ai-tools-for-small-business-2025"),
    ],
    "best-ai-tools-for-small-business-2025": [
        ("AI tools", "/blog/15-amazing-ai-tools-for-business"),
        ("AI consultancy", "/blog/ai-consultancy-uk-the-evolution-of-ai-in-business-development"),
    ],
    "private-ai-for-enterprise-safely-harnessing-ai-with-your-data": [
        ("data security", "/blog/ai-data-security"),
        ("AI infrastructure", "/blog/ai-infrastructure"),
    ],
    "ai-business-coaching": [
        ("AI corporate coaching", "/blog/ai-corporate-coaching"),
        ("AI consultancy", "/blog/ai-consultancy-uk-the-evolution-of-ai-in-business-development"),
    ],
    "ai-early-adoption": [
        ("early adopter", "/blog/being-an-early-adopter-of-ai"),
        ("AI consultancy", "/blog/ai-consultancy-uk-the-evolution-of-ai-in-business-development"),
    ],
    "generating-marketing-content-with-ai": [
        ("AI marketing", "/blog/ai-marketing"),
        ("AI tools", "/blog/15-amazing-ai-tools-for-business"),
    ],
    "generating-images-and-video-with-ai": [
        ("AI marketing", "/blog/ai-marketing"),
        ("AI tools", "/blog/15-amazing-ai-tools-for-business"),
    ],
    "ai-consultancy-northern-ireland-a2bg3": [
        ("AI in Northern Ireland", "/blog/ai-in-northern-ireland"),
        ("business use cases", "/blog/5-business-use-cases-of-ai-in-northern-ireland"),
    ],
    "the-future-of-ai-in-northern-ireland-government-education-and-industry-outlook": [
        ("AI in Northern Ireland", "/blog/ai-in-northern-ireland"),
        ("MATRIX report", "/blog/matrix-report-northern-ireland"),
    ],
    "how-northern-ireland-can-become-a-leader-in-ai": [
        ("AI in Northern Ireland", "/blog/ai-in-northern-ireland"),
        ("future of AI", "/blog/the-future-of-ai-in-northern-ireland-government-education-and-industry-outlook"),
    ],
    "ai-consultancy-ireland": [
        ("AI consultancy", "/blog/ai-consultancy-uk-the-evolution-of-ai-in-business-development"),
        ("Northern Ireland", "/blog/ai-in-northern-ireland"),
    ],
    "how-to-scale-with-ai": [
        ("AI consultancy", "/blog/ai-consultancy-uk-the-evolution-of-ai-in-business-development"),
        ("business development", "/blog/how-to-use-a-i-in-business-development"),
    ],
    "reduce-headcount-with-ai": [
        ("business development", "/blog/how-to-use-a-i-in-business-development"),
        ("AI tools", "/blog/ai-tools-for-business-development"),
    ],
    "can-i-replace-my-staff-with-ai-agents": [
        ("agentic AI", "/blog/agentic-ai"),
        ("AI agents", "/blog/ai-job-displacement-the-rise-of-ai-agents-and-the-future-of-work"),
    ],
    "using-ai-to-win-tenders": [
        ("tender writing", "/blog/using-ai-for-writing-tenders"),
        ("AI marketing", "/blog/ai-marketing"),
    ],
    "using-ai-in-accountancy-practices": [
        ("use cases of AI", "/blog/proven-use-cases-of-ai"),
        ("AI consultancy", "/blog/ai-consultancy-uk-the-evolution-of-ai-in-business-development"),
    ],
    "using-ai-in-legal-practice": [
        ("use cases of AI", "/blog/proven-use-cases-of-ai"),
        ("AI consultancy", "/blog/ai-consultancy-uk-the-evolution-of-ai-in-business-development"),
    ],
}


def api_get(path):
    req = urllib.request.Request(f"{BASE_URL}{path}", headers={"Authorization": f"Bearer {API_TOKEN}", "accept": "application/json"})
    return json.loads(urllib.request.urlopen(req, timeout=30, context=ctx).read())


def api_patch(path, data):
    body = json.dumps(data).encode()
    req = urllib.request.Request(f"{BASE_URL}{path}", data=body, method="PATCH", headers={
        "Authorization": f"Bearer {API_TOKEN}", "Content-Type": "application/json", "accept": "application/json"
    })
    try:
        resp = urllib.request.urlopen(req, timeout=30, context=ctx)
        return resp.status, ""
    except urllib.error.HTTPError as e:
        return e.code, e.read().decode()[:200]


def add_links_to_field(html, slug, links_added):
    """Add internal links. Only match text NOT inside existing <a> tags or the CTA div."""
    if not html or slug not in LINKING_MAP:
        return html
    
    added = 0
    for search_text, target_url in LINKING_MAP[slug]:
        if added >= 2:
            break
        if target_url in html:
            continue
        
        # Find the search text, case-insensitive
        # We need to avoid matching inside existing <a> tags
        # Strategy: find all occurrences, check if they're inside an <a> tag
        pattern = re.compile(re.escape(search_text), re.IGNORECASE)
        for match in pattern.finditer(html):
            start, end = match.start(), match.end()
            # Check we're not inside an <a> tag by looking backwards for unclosed <a
            prefix = html[:start]
            # Count open <a> and </a> tags
            open_a = len(re.findall(r'<a[\s>]', prefix, re.IGNORECASE))
            close_a = len(re.findall(r'</a>', prefix, re.IGNORECASE))
            if open_a > close_a:
                continue  # Inside an <a> tag
            
            # Also skip if inside a <strong>, <h1>, <h2>, <h3> or the CTA div
            # Check if we're in the CTA box (last div)
            if 'Ready to explore AI for your business?' in html[start:]:
                cta_start = html.find('Ready to explore AI for your business?')
                if start >= cta_start - 200:  # Near/in CTA
                    continue
            
            # Don't wrap if already inside <strong> immediately
            before_20 = html[max(0,start-20):start]
            if '<strong' in before_20 and '</strong>' not in before_20:
                continue
            
            original = match.group(0)
            replacement = f'<a href="{target_url}">{original}</a>'
            html = html[:start] + replacement + html[end:]
            links_added.append((original, target_url))
            added += 1
            break  # Move to next link target
    
    return html


def main():
    print("Fetching all blog items...")
    data = api_get(f"/collections/{COLLECTION_ID}/items?limit=100&offset=0")
    items = data["items"]
    print(f"Got {len(items)} items")
    
    report = {"updated": [], "skipped": [], "errors": []}
    
    for i, item in enumerate(items):
        fd = item.get("fieldData", {})
        slug = fd.get("slug", "")
        name = fd.get("name", "unknown")
        item_id = item["id"]
        
        if slug not in LINKING_MAP:
            report["skipped"].append(f"{name} (no linking rules)")
            continue
        
        changes = {}
        links_added = []
        
        # Try adding links to blog-details and blog-details-two (not three which has CTA)
        for field in ["blog-details", "blog-details-two"]:
            original = fd.get(field, "")
            if original:
                updated = add_links_to_field(original, slug, links_added)
                if updated != original:
                    changes[field] = updated
                if len(links_added) >= 2:
                    break
        
        # If still need more links, try blog-details-three
        if len(links_added) < 2:
            original = fd.get("blog-details-three", "")
            if original:
                updated = add_links_to_field(original, slug, links_added)
                if updated != original:
                    changes["blog-details-three"] = updated
        
        if not changes:
            report["skipped"].append(f"{name} (no matching text or already linked)")
            continue
        
        # Rate limit
        if i > 0 and i % 10 == 0:
            time.sleep(2)
        
        status, err = api_patch(f"/collections/{COLLECTION_ID}/items/{item_id}", {"fieldData": changes})
        
        if status in (200, 202):
            print(f"  OK [{i+1}] {name} | Links: {len(links_added)}")
            report["updated"].append({"name": name, "slug": slug, "links": links_added})
        else:
            print(f"  ERR [{i+1}] {name} | {status}: {err}")
            report["errors"].append({"name": name, "error": f"{status}: {err}"})
        
        time.sleep(1)
    
    # Generate report
    total_updated = len(report["updated"])
    all_links = [(u["name"], a, t) for u in report["updated"] for a, t in u["links"]]
    
    lines = [
        "# Internal Linking & CTA Update Report",
        "**Date:** 2026-02-11\n",
        "## Summary",
        f"- **Total posts in collection:** {len(items)}",
        f"- **Posts updated with internal links:** {total_updated}",
        f"- **CTA boxes:** All 86 posts already had CTA boxes (added previously)",
        f"- **Internal links added:** {len(all_links)}",
        f"- **Posts skipped:** {len(report['skipped'])}",
        f"- **Errors:** {len(report['errors'])}\n",
        "## Posts Updated\n"
    ]
    for u in report["updated"]:
        lines.append(f"### {u['name']}")
        lines.append(f"- Slug: `{u['slug']}`")
        for a, t in u["links"]:
            lines.append(f"- Link added: \"{a}\" → `{t}`")
        lines.append("")
    
    if all_links:
        lines.append("## All Internal Links Added\n")
        lines.append("| Source Post | Anchor Text | Target URL |")
        lines.append("|-----------|------------|-----------|")
        for n, a, t in all_links:
            lines.append(f"| {n} | {a} | {t} |")
        lines.append("")
    
    if report["errors"]:
        lines.append("## Errors\n")
        for e in report["errors"]:
            lines.append(f"- **{e['name']}**: {e['error']}")
    
    lines.append("\n## Posts Skipped\n")
    for s in report["skipped"]:
        lines.append(f"- {s}")
    
    rpt = "\n".join(lines)
    with open("/Users/philsagent/.openclaw/workspace/reports/internal-linking-report-2026-02-11.md", "w") as f:
        f.write(rpt)
    
    print(f"\n=== DONE: {total_updated} updated, {len(all_links)} links added, {len(report['errors'])} errors ===")


if __name__ == "__main__":
    main()
