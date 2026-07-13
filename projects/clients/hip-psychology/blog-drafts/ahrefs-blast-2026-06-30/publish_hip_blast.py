#!/usr/bin/env python3
from __future__ import annotations

import base64
import datetime as dt
import json
import os
import re
import time
from html import escape
from pathlib import Path
from urllib.parse import quote
from urllib.request import Request, urlopen

SITE = "https://hippsychology.com"
POSTS_API = f"{SITE}/wp-json/wp/v2/posts"
HERE = Path(__file__).resolve().parent
TODAY = dt.date(2026, 6, 30).isoformat()

OFFICIAL_LINKS = [
    ("Department of Education emotional health and wellbeing guidance", "https://www.education-ni.gov.uk/articles/emotional-health-and-wellbeing"),
    ("Department of Education safeguarding guidance", "https://www.education-ni.gov.uk/publications/safeguarding-and-child-protection-schools-guide-schools"),
    ("Department of Education effective practice in educational settings", "https://www.education-ni.gov.uk/publications/effective-practice-educational-settings"),
]

INTERNAL_LINKS = [
    ("school wellbeing calendar", "/school-wellbeing-calendar/"),
    ("staff wellbeing training", "/staff-wellbeing-training-for-schools/"),
    ("mental health training for teachers", "/mental-health-training-for-teachers/"),
    ("pastoral care training", "/pastoral-care-training-schools/"),
    ("pupil wellbeing strategy", "/pupil-wellbeing-strategy-schools/"),
    ("teacher wellbeing workshops", "/teacher-wellbeing-workshops/"),
    ("parent mental health workshops", "/parent-mental-health-workshops-schools/"),
    ("contact HIP Psychology", "/contact-us/"),
]

TOPICS = [
    {
        "slug": "school-wellbeing-inset-day",
        "title": "School Wellbeing INSET Day: Practical Training for Staff",
        "keyword": "school wellbeing INSET day",
        "audience": "senior leaders, pastoral teams, teachers and classroom assistants",
        "intent": "planning a useful staff training day before the school year becomes busy",
        "decisions": ["which staff groups need shared language", "what pupil needs are showing up most often", "how safeguarding and pastoral routes will be explained", "what follow-up should happen after the day"],
        "activities": ["scenario practice around pupil distress", "short scripts for first responses", "mapping current support routes", "agreeing two or three repeatable staff routines"],
    },
    {
        "slug": "twilight-wellbeing-cpd-schools",
        "title": "Twilight Wellbeing CPD for Schools: Short Sessions That Stick",
        "keyword": "twilight wellbeing CPD schools",
        "audience": "school leaders and staff teams who need focused after-school training",
        "intent": "choosing short CPD that gives staff practical confidence without overload",
        "decisions": ["whether the session is for all staff or a smaller team", "which pupil wellbeing theme needs attention first", "how staff will use the learning next day", "what leaders will review afterwards"],
        "activities": ["one-page staff response guides", "small-group discussion using realistic school scenarios", "shared escalation language", "a five-minute reflection task for departments or year teams"],
    },
    {
        "slug": "head-of-year-wellbeing-training",
        "title": "Head of Year Wellbeing Training: Support for Pastoral Leaders",
        "keyword": "Head of Year wellbeing training",
        "audience": "heads of year, pastoral leaders, senior teachers and safeguarding teams",
        "intent": "supporting staff who carry repeated pupil, parent and behaviour pressure",
        "decisions": ["what heads of year should handle directly", "what needs safeguarding or SEN escalation", "how parent communication should be kept clear", "how pastoral leaders can avoid carrying everything alone"],
        "activities": ["triage routines for common concerns", "parent meeting scripts", "case discussion boundaries", "reflective review after high-pressure incidents"],
    },
    {
        "slug": "form-tutor-wellbeing-activities",
        "title": "Form Tutor Wellbeing Activities: Practical Ideas for Tutor Time",
        "keyword": "form tutor wellbeing activities",
        "audience": "form tutors, heads of year, pastoral coordinators and curriculum leaders",
        "intent": "making tutor time useful without turning tutors into counsellors",
        "decisions": ["which topics belong in tutor time", "how tutors can avoid public disclosure", "what pupils should know about support routes", "how activities link to wider pastoral work"],
        "activities": ["check-in scales that do not require disclosure", "scenario cards about friendship and pressure", "short help-seeking scripts", "reflection prompts linked to school routines"],
    },
    {
        "slug": "september-school-wellbeing-plan",
        "title": "September School Wellbeing Plan: Start the Year Clearly",
        "keyword": "September school wellbeing plan",
        "audience": "principals, senior leaders, pastoral leads, SENCOs and wellbeing coordinators",
        "intent": "setting the wellbeing plan before reactive pressure takes over",
        "decisions": ["which year groups need early input", "what staff need before pupils return", "how parents will be brought into key messages", "what will be reviewed after the first half-term"],
        "activities": ["map the first six weeks of wellbeing touchpoints", "brief staff on support routes", "plan transition and anxiety support", "agree a simple evidence review after half-term"],
    },
    {
        "slug": "back-to-school-wellbeing-workshops",
        "title": "Back-to-School Wellbeing Workshops: Helping Pupils Settle",
        "keyword": "back to school wellbeing workshops",
        "audience": "primary and post-primary schools planning pupil support at the start of term",
        "intent": "helping pupils rebuild routines, confidence and help-seeking after the break",
        "decisions": ["which pupils may find return difficult", "whether the focus is friendship, routine, anxiety or confidence", "how workshops connect to class and pastoral follow-up", "what staff should notice in the first weeks"],
        "activities": ["routine mapping for the first week", "help-seeking language practice", "friendship and belonging scenarios", "calm planning for difficult moments"],
    },
    {
        "slug": "parent-wellbeing-evening-schools",
        "title": "Parent Wellbeing Evening for Schools: Shared Language at Home",
        "keyword": "parent wellbeing evening schools",
        "audience": "school leaders, pastoral teams, parents and carers",
        "intent": "bringing families into the same practical wellbeing language as school",
        "decisions": ["which parent concerns need addressed", "how the event will be invited without stigma", "what advice must stay general rather than clinical", "how parents can contact school afterwards"],
        "activities": ["plain-language anxiety and stress explanations", "morning routine examples", "home-school communication expectations", "signposting to school and external support"],
    },
    {
        "slug": "staff-confidence-pupil-wellbeing-training",
        "title": "Staff Confidence in Pupil Wellbeing: Training That Helps",
        "keyword": "staff confidence pupil wellbeing training",
        "audience": "teachers, classroom assistants, pastoral staff and senior leaders",
        "intent": "helping adults know what to say, what to record and when to escalate",
        "decisions": ["what staff are expected to notice", "which phrases help in the first response", "where records should go", "how leaders will protect staff from unclear emotional load"],
        "activities": ["first-response script practice", "recording and escalation walkthroughs", "scenario-based staff discussion", "agreement on what support looks like in normal classroom time"],
    },
]


def auth_headers(content_type: bool = True) -> dict[str, str]:
    user = os.environ["HIP_WP_USERNAME"]
    password = os.environ["HIP_WP_APP_PASSWORD"]
    token = base64.b64encode(f"{user}:{password}".encode()).decode()
    headers = {
        "Authorization": f"Basic {token}",
        "User-Agent": "OpenClaw-HIP-Content-Blast/2026-06-30",
    }
    if content_type:
        headers["Content-Type"] = "application/json"
    return headers


def request_json(url: str, method: str = "GET", payload: dict | None = None) -> dict | list:
    data = json.dumps(payload).encode() if payload is not None else None
    req = Request(url, data=data, headers=auth_headers(payload is not None), method=method)
    with urlopen(req, timeout=45) as response:
        return json.loads(response.read().decode())


def fetch_text(url: str) -> tuple[int, str]:
    req = Request(url, headers={"User-Agent": "OpenClaw-HIP-QA/2026-06-30"})
    with urlopen(req, timeout=45) as response:
        return response.status, response.read().decode("utf-8", errors="replace")


def link_list(items: list[tuple[str, str]]) -> str:
    return ", ".join(f'<a href="{escape(href)}">{escape(label)}</a>' for label, href in items)


def external_link_list() -> str:
    return ", ".join(
        f'<a href="{escape(href)}" target="_blank" rel="noopener">{escape(label)}</a>'
        for label, href in OFFICIAL_LINKS
    )


def build_content(topic: dict) -> str:
    title = topic["title"]
    keyword = topic["keyword"]
    audience = topic["audience"]
    decisions = "".join(f"<li>{escape(item.capitalize())}</li>" for item in topic["decisions"])
    activities = "".join(f"<li>{escape(item.capitalize())}</li>" for item in topic["activities"])
    faqs = [
        (f"What should schools include in {keyword}?", "Start with the practical school context: the pupils or staff affected, the support routes already in place, and the next action staff can repeat consistently."),
        ("How can schools keep wellbeing training safe?", "Avoid public disclosure, brief staff before sensitive topics are discussed, name the support route clearly and connect the session to safeguarding and pastoral systems."),
        ("Can HIP Psychology adapt this for primary or post-primary schools?", "Yes. HIP Psychology can adapt workshops, staff training and parent sessions for primary, post-primary and secondary school audiences across Northern Ireland and Ireland."),
    ]
    faq_html = "".join(f"<h3>{escape(q)}</h3><p>{escape(a)}</p>" for q, a in faqs)
    faq_schema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {"@type": "Question", "name": q, "acceptedAnswer": {"@type": "Answer", "text": a}}
            for q, a in faqs
        ],
    }
    article_schema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": title,
        "author": {"@type": "Organization", "name": "HIP Psychology"},
        "publisher": {"@type": "Organization", "name": "HIP Psychology"},
        "datePublished": TODAY,
        "dateModified": TODAY,
        "mainEntityOfPage": f"{SITE}/{topic['slug']}/",
    }
    related = INTERNAL_LINKS[:6]
    return "\n".join([
        f"<p>{escape(title)} is a practical guide for {escape(audience)}.</p>",
        f"<p>Schools often know wellbeing matters, but staff need more than a general reminder. This page focuses on {escape(topic['intent'])}, with clear planning decisions and practical steps.</p>",
        f"<p>HIP Psychology supports schools across Northern Ireland and Ireland with pupil workshops, staff training, parent sessions and whole-school wellbeing planning.</p>",
        "<h2>Why this matters now</h2>",
        "<p>The start of a term, a staff training window or a pastoral review point is a good time to make wellbeing support more consistent. Pupils need language they can use, staff need confidence in the first response, and leaders need a plan that fits the normal school week.</p>",
        "<h2>Key decisions for school leaders</h2>",
        "<p>Before booking a session, agree the decisions that will keep the work focused and useful.</p>",
        f"<ul>{decisions}</ul>",
        "<h2>Practical activities schools can use</h2>",
        "<p>Useful wellbeing work should be realistic, safe and repeatable. The activities below are designed to support staff confidence without asking pupils or adults to disclose personal experiences in public.</p>",
        f"<ul>{activities}</ul>",
        "<h2>How to keep the session safe</h2>",
        "<p>Set clear boundaries, avoid public disclosure, explain the support route and brief staff before the session. If a sensitive issue is raised, staff should know who records the concern and who follows up.</p>",
        "<h2>What staff need afterwards</h2>",
        "<p>Training is strongest when staff leave with short scripts, agreed routines and a simple route for escalation. Leaders should check whether staff feel clearer about what to say, what to record and when to ask for help.</p>",
        "<h2>How HIP Psychology can help</h2>",
        f"<p>HIP Psychology can deliver {escape(keyword)} support as a workshop, INSET input, twilight CPD session, parent evening or part of a wider school wellbeing plan.</p>",
        "<h2>Useful guidance to align with</h2>",
        f"<p>Schools can connect this work with current guidance and resources, including {external_link_list()}.</p>",
        "<h2>Related HIP Psychology resources</h2>",
        f"<p>Useful related HIP resources include {link_list(related)}.</p>",
        '<p><strong>Need help planning the next step?</strong> <a href="/contact-us/">Contact HIP Psychology</a> to discuss workshops, staff training or whole-school wellbeing support.</p>',
        "<h2>FAQs</h2>",
        faq_html,
        f'<script type="application/ld+json">{json.dumps(faq_schema, ensure_ascii=False)}</script>',
        f'<script type="application/ld+json">{json.dumps(article_schema, ensure_ascii=False)}</script>',
    ])


def upsert_post(topic: dict) -> dict:
    content = build_content(topic)
    (HERE / f"{topic['slug']}.html").write_text(content, encoding="utf-8")
    existing = request_json(f"{POSTS_API}?slug={quote(topic['slug'])}&status=publish,draft,pending,private&per_page=1")
    payload = {
        "title": topic["title"],
        "slug": topic["slug"],
        "status": "publish",
        "content": content,
        "excerpt": f"A practical school guide to {topic['keyword']}, with planning decisions, staff routines, safe delivery and HIP Psychology support.",
        "comment_status": "closed",
        "ping_status": "closed",
    }
    if existing:
        result = request_json(f"{POSTS_API}/{existing[0]['id']}", "POST", payload)
        action = "updated"
    else:
        result = request_json(POSTS_API, "POST", payload)
        action = "created"
    return {"action": action, "id": result["id"], "slug": topic["slug"], "title": topic["title"], "link": result["link"], "status": result["status"]}


def qa_post(post: dict) -> dict:
    status, html = fetch_text(post["link"])
    h1_count = len(re.findall(r"<h1\b", html, flags=re.I))
    h2_count = len(re.findall(r"<h2\b", html, flags=re.I))
    checks = {
        "http_200": status == 200,
        "wp_status_publish": post["status"] == "publish",
        "one_h1": h1_count == 1,
        "h2_sections": h2_count >= 5,
        "faq_schema": '"FAQPage"' in html,
        "article_schema": '"Article"' in html,
        "contact_cta": "/contact-us/" in html,
        "no_source_leak": not any(marker in html.lower() for marker in ["source_note", "todo", "frontmatter", "hip_wp_app_password"]),
    }
    return {"slug": post["slug"], "link": post["link"], "status_code": status, "h1_count": h1_count, "h2_count": h2_count, "checks": checks, "ok": all(checks.values())}


def main() -> None:
    published = []
    for topic in TOPICS:
        published.append(upsert_post(topic))
        time.sleep(0.4)
    qa = [qa_post(post) for post in published]
    sitemap_status, sitemap = fetch_text(f"{SITE}/wp-sitemap-posts-post-1.xml")
    sitemap_checks = {post["slug"]: post["link"] in sitemap for post in published}
    result = {"published": published, "qa": qa, "sitemap_status": sitemap_status, "sitemap_checks": sitemap_checks}
    (HERE / "publish-result.json").write_text(json.dumps(published, indent=2), encoding="utf-8")
    (HERE / "qa-result.json").write_text(json.dumps(result, indent=2), encoding="utf-8")
    failures = [item for item in qa if not item["ok"]] + [slug for slug, ok in sitemap_checks.items() if not ok]
    report_lines = [
        "# HIP Psychology content blast - 2026-06-30",
        "",
        "Published 8 live WordPress posts around September planning, staff CPD, pastoral leadership, parent engagement and school wellbeing buyer intent.",
        "",
        "## Live posts",
        *[f"- [{post['title']}]({post['link']}) - `{post['slug']}`" for post in published],
        "",
        "## QA",
        f"- Failures: {len(failures)}",
        "- Checks: HTTP 200, WordPress publish status, one H1, H2 sections, FAQPage + Article schema, contact CTA, sitemap inclusion and no draft/source/secret markers.",
        "",
        "## Not Done",
        "- No email, DM, social post, featured image or Google Search Console submission.",
    ]
    (HERE / "report.md").write_text("\n".join(report_lines) + "\n", encoding="utf-8")
    print(json.dumps(result, indent=2))
    if failures:
        raise SystemExit(1)


if __name__ == "__main__":
    main()
