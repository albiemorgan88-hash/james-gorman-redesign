#!/usr/bin/env python3
"""Upload 5 blog posts to Webflow as drafts (isDraft=true, no publish call)."""

import json, os, re, time, requests, markdown

COLLECTION_ID = "67e4825804e6baf1d5246f5b"
API_BASE = "https://api.webflow.com/v2"
TOKEN = os.environ["WEBFLOW_API_TOKEN"]
HEADERS = {
    "Authorization": f"Bearer {TOKEN}",
    "Content-Type": "application/json",
    "accept": "application/json",
}

# Blog post data extracted from the markdown files
POSTS = [
    {
        "name": "AI for Estate Agents: A Practical Guide to Winning More Instructions",
        "slug": "ai-for-estate-agents",
        "seo-title": "AI for Estate Agents: Win More Instructions | 2026",
        "blog-main-details": "How UK estate agents are using AI to win more instructions, respond faster, and close deals. Practical guide with real tools and examples. Book a free consultation.",
        "category": "AI for Business",
        "author-name": "Phil Patterson",
        "file": "blog-1-ai-for-estate-agents.md",
    },
    {
        "name": "AI Chatbot for Small Business: The No-Nonsense Guide to Getting One That Actually Works",
        "slug": "ai-chatbot-for-small-business",
        "seo-title": "AI Chatbot for Small Business: Setup Guide | 2026",
        "blog-main-details": "Pick the right AI chatbot for your small business without wasting money. Real comparisons, setup tips, and what actually works in 2026. Free consultation.",
        "category": "AI for Business",
        "author-name": "Phil Patterson",
        "file": "blog-2-ai-chatbot-for-small-business.md",
    },
    {
        "name": "AI in Human Resources: How HR Teams Are Using AI Without Losing the Human Touch",
        "slug": "ai-in-human-resources",
        "seo-title": "AI in Human Resources: Practical UK Guide | 2026",
        "blog-main-details": "How UK HR teams are using AI for recruitment, onboarding, and engagement — without losing the human element. Real examples and tools. Free consultation.",
        "category": "AI for Business",
        "author-name": "Phil Patterson",
        "file": "blog-3-ai-in-human-resources.md",
    },
    {
        "name": "AI for the Hospitality Industry: How Hotels, Restaurants and Venues Are Getting Ahead",
        "slug": "ai-for-hospitality-industry",
        "seo-title": "AI for Hospitality: Hotels & Restaurants Guide | 2026",
        "blog-main-details": "How UK hotels, restaurants, and venues are using AI to cut costs, improve guest experience, and fill more rooms. Practical guide with real examples.",
        "category": "AI for Business",
        "author-name": "Phil Patterson",
        "file": "blog-4-ai-for-hospitality-industry.md",
    },
    {
        "name": "AI Implementation Plan: A Step-by-Step Guide for UK Businesses",
        "slug": "ai-implementation-plan",
        "seo-title": "AI Implementation Plan: Step-by-Step for SMEs | 2026",
        "blog-main-details": "A practical AI implementation plan for UK businesses. No theory — just a clear roadmap from audit to launch. Get your free consultation today.",
        "category": "AI Strategy",
        "author-name": "Phil Patterson",
        "file": "blog-5-ai-implementation-plan.md",
    },
]

def extract_body(filepath):
    """Read markdown file, strip frontmatter, convert body to HTML."""
    with open(filepath, "r") as f:
        content = f.read()
    
    # Remove frontmatter (everything before the first --- ... --- block and the block itself)
    # Find the end of frontmatter: after the title line and metadata block
    lines = content.split("\n")
    body_start = 0
    found_separator = 0
    for i, line in enumerate(lines):
        if line.strip() == "---":
            found_separator += 1
            if found_separator == 2:
                body_start = i + 1
                break
    
    body_md = "\n".join(lines[body_start:]).strip()
    
    # Convert markdown to HTML
    md = markdown.Markdown(extensions=["tables", "fenced_code"])
    html = md.convert(body_md)
    
    # Clean up the CTA link to be absolute
    html = html.replace('href="/lp/free-ai-consultation"', 'href="https://www.bluecanvas.ai/lp/free-ai-consultation"')
    
    return html


def create_draft(post_data, html_body):
    """Create a CMS item as draft (isDraft=true)."""
    url = f"{API_BASE}/collections/{COLLECTION_ID}/items"
    
    payload = {
        "isArchived": False,
        "isDraft": True,
        "fieldData": {
            "name": post_data["name"],
            "slug": post_data["slug"],
            "seo-title": post_data["seo-title"],
            "blog-main-details": post_data["blog-main-details"],
            "blog-details": html_body,
            "author-name": post_data["author-name"],
            "category": post_data["category"],
        }
    }
    
    resp = requests.post(url, headers=HEADERS, json=payload)
    return resp.status_code, resp.json()


def main():
    base_dir = os.path.dirname(os.path.abspath(__file__))
    results = []
    
    for i, post in enumerate(POSTS):
        filepath = os.path.join(base_dir, post["file"])
        print(f"\n[{i+1}/5] Processing: {post['name']}")
        
        html_body = extract_body(filepath)
        print(f"  HTML body length: {len(html_body)} chars")
        
        status, response = create_draft(post, html_body)
        
        if status in (200, 201, 202):
            item_id = response.get("id", "unknown")
            print(f"  ✅ Created as DRAFT — ID: {item_id}")
            results.append({"post": post["name"], "id": item_id, "status": "success"})
        else:
            print(f"  ❌ Failed ({status}): {json.dumps(response, indent=2)}")
            results.append({"post": post["name"], "status": "failed", "error": response})
        
        # Rate limit: max 60 req/min, be safe
        if i < len(POSTS) - 1:
            time.sleep(2)
    
    print("\n" + "=" * 60)
    print("UPLOAD SUMMARY")
    print("=" * 60)
    for r in results:
        status_icon = "✅" if r["status"] == "success" else "❌"
        print(f"  {status_icon} {r['post']}")
        if r["status"] == "success":
            print(f"     ID: {r['id']}")
        else:
            print(f"     Error: {r.get('error', 'unknown')}")


if __name__ == "__main__":
    main()
