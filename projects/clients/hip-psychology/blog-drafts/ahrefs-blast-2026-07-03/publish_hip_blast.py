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
TODAY = dt.date(2026, 7, 3).isoformat()

OFFICIAL_LINKS = [
    ("Department of Education emotional health and wellbeing guidance", "https://www.education-ni.gov.uk/articles/emotional-health-and-wellbeing"),
    ("Department of Education safeguarding guidance", "https://www.education-ni.gov.uk/publications/safeguarding-and-child-protection-schools-guide-schools"),
    ("Department of Education effective practice in educational settings", "https://www.education-ni.gov.uk/publications/effective-practice-educational-settings"),
]

INTERNAL_LINKS = [
    ("form tutor wellbeing activities", "/form-tutor-wellbeing-activities/"),
    ("pupil wellbeing strategy", "/pupil-wellbeing-strategy-schools/"),
    ("mental health training for teachers", "/mental-health-training-for-teachers/"),
    ("pastoral care training", "/pastoral-care-training-schools/"),
    ("friendship workshops", "/friendship-workshops-for-schools/"),
    ("healthy relationships workshops", "/healthy-relationships-workshops-for-schools/"),
    ("coping skills workshops", "/coping-skills-workshops-for-schools/"),
    ("school wellbeing calendar", "/school-wellbeing-calendar/"),
    ("contact HIP Psychology", "/contact-us/"),
]

TOPICS = [
    {
        "slug": "form-time-wellbeing-activities",
        "title": "Form Time Wellbeing Activities: Practical Ideas for Schools",
        "keyword": "form time wellbeing activities",
        "audience": "form tutors, heads of year, pastoral teams and senior leaders",
        "intent": "making tutor time useful without asking tutors to act as counsellors",
        "decisions": ["which topics fit tutor time", "how tutors avoid public disclosure", "how pupils are reminded of support routes", "how leaders will keep activities consistent"],
        "activities": ["use check-in scales that do not require disclosure", "run short scenario discussions about pressure and friendship", "practise help-seeking scripts", "link activities to the school wellbeing calendar"],
    },
    {
        "slug": "ks3-form-time-activities",
        "title": "KS3 Form Time Activities for Wellbeing and Belonging",
        "keyword": "KS3 form time activities",
        "audience": "KS3 tutors, heads of year, pastoral staff and curriculum leaders",
        "intent": "supporting belonging, emotional language and safe peer discussion in short sessions",
        "decisions": ["which year groups need extra settling support", "how activities will be kept age appropriate", "which messages link to pastoral support", "how tutors will handle sensitive comments"],
        "activities": ["belonging maps", "friendship scenario cards", "short emotion vocabulary tasks", "weekly reflection prompts linked to school routines"],
    },
    {
        "slug": "year-8-form-time-activities",
        "title": "Year 8 Form Time Activities: Settling, Confidence and Support",
        "keyword": "Year 8 form time activities",
        "audience": "Year 8 tutors, transition leads, heads of year and pastoral teams",
        "intent": "helping pupils settle into post-primary routines after transition",
        "decisions": ["which pupils may need extra check-ins", "how tutor time links to transition support", "how friendship concerns are surfaced safely", "what staff should notice after activities"],
        "activities": ["routine mapping", "who can help cards", "confidence ladders", "low-pressure peer connection tasks"],
    },
    {
        "slug": "anti-bullying-form-time-activities",
        "title": "Anti-Bullying Form Time Activities for Schools",
        "keyword": "anti-bullying form time activities",
        "audience": "form tutors, pastoral leaders, heads of year and safeguarding teams",
        "intent": "turning anti-bullying messages into safe, practical tutor time discussion",
        "decisions": ["how the session avoids naming real incidents", "what pupils should do if they witness harm", "how bystander behaviour will be discussed", "how concerns raised afterwards will be followed up"],
        "activities": ["bystander scenario cards", "safe reporting route reminders", "language checks around banter and harm", "small group reflection on kindness and power"],
    },
    {
        "slug": "digital-wellbeing-workshops-for-schools",
        "title": "Digital Wellbeing Workshops for Schools",
        "keyword": "digital wellbeing workshops for schools",
        "audience": "primary and post-primary schools supporting online behaviour, sleep, friendships and pressure",
        "intent": "helping pupils talk about online life without scare tactics or public disclosure",
        "decisions": ["which age group needs the session", "how online safety and wellbeing messages connect", "what staff should do if pupils disclose harm", "how parents can receive consistent language"],
        "activities": ["online pressure scenarios", "sleep and screen habit reflection", "help-seeking scripts", "healthy group chat boundary discussions"],
    },
    {
        "slug": "sleep-workshops-for-schools",
        "title": "Sleep Workshops for Schools: Wellbeing Support for Pupils",
        "keyword": "sleep workshops for schools",
        "audience": "school leaders, pastoral teams, parents and pupils",
        "intent": "supporting routines, stress management and learning readiness without blame",
        "decisions": ["which year groups are most affected", "how sleep links to anxiety and attendance", "whether parents need a separate session", "how staff will signpost ongoing worries"],
        "activities": ["routine audits", "stress and sleep cycle explanations", "screen habit planning", "calm evening routine prompts"],
    },
    {
        "slug": "body-image-workshops-for-schools",
        "title": "Body Image Workshops for Schools: Safe Pupil Support",
        "keyword": "body image workshops for schools",
        "audience": "post-primary schools, pastoral teams, wellbeing leads and parents",
        "intent": "supporting pupils to discuss appearance pressure safely and practically",
        "decisions": ["how the workshop avoids comparison tasks", "which staff need briefing before delivery", "how concerns will be followed up", "how the session connects to wider wellbeing work"],
        "activities": ["media pressure discussion", "self-talk reflection", "support route reminders", "values and strengths activities"],
    },
    {
        "slug": "anger-management-workshops-for-schools",
        "title": "Anger Management Workshops for Schools: Practical Regulation Support",
        "keyword": "anger management workshops for schools",
        "audience": "teachers, pastoral teams, classroom assistants and pupils",
        "intent": "helping pupils understand anger as a signal and practise safer regulation choices",
        "decisions": ["which pupils need universal or targeted input", "how staff language will stay consistent", "what happens after an incident", "how behaviour and wellbeing records connect"],
        "activities": ["body signal mapping", "pause and repair scripts", "choice-point scenarios", "return-to-learning routines"],
    },
    {
        "slug": "conflict-resolution-workshops-schools",
        "title": "Conflict Resolution Workshops for Schools",
        "keyword": "conflict resolution workshops schools",
        "audience": "pastoral teams, heads of year, form tutors and pupil groups",
        "intent": "giving pupils practical language for disagreement, repair and safer peer relationships",
        "decisions": ["which conflicts are suitable for workshop input", "when safeguarding routes are needed instead", "how staff will support repair", "how pupils practise without exposing real incidents"],
        "activities": ["I-message practice", "repair conversation frames", "peer pressure scenarios", "reflection on impact and responsibility"],
    },
    {
        "slug": "study-skills-and-wellbeing-workshop",
        "title": "Study Skills and Wellbeing Workshop for Pupils",
        "keyword": "study skills and wellbeing workshop",
        "audience": "post-primary schools, GCSE pupils, sixth form pupils and pastoral teams",
        "intent": "combining revision habits, stress management and realistic planning",
        "decisions": ["which exam groups need support", "how the session balances technique and wellbeing", "what staff will reinforce afterwards", "how pupils can ask for help early"],
        "activities": ["revision planning grids", "stress warning sign reflection", "break planning", "help-seeking scripts for workload pressure"],
    },
]


def auth_headers(content_type: bool = True) -> dict[str, str]:
    token = base64.b64encode(f"{os.environ['HIP_WP_USERNAME']}:{os.environ['HIP_WP_APP_PASSWORD']}".encode()).decode()
    headers = {"Authorization": f"Basic {token}", "User-Agent": "OpenClaw-HIP-Content-Blast/2026-07-03"}
    if content_type:
        headers["Content-Type"] = "application/json"
    return headers


def request_json(url: str, method: str = "GET", payload: dict | None = None) -> dict | list:
    data = json.dumps(payload).encode() if payload is not None else None
    req = Request(url, data=data, headers=auth_headers(payload is not None), method=method)
    with urlopen(req, timeout=60) as response:
        return json.loads(response.read().decode())


def fetch_text(url: str) -> tuple[int, str]:
    req = Request(url, headers={"User-Agent": "OpenClaw-HIP-QA/2026-07-03"})
    with urlopen(req, timeout=60) as response:
        return response.status, response.read().decode("utf-8", errors="replace")


def link_list(items: list[tuple[str, str]]) -> str:
    return ", ".join(f'<a href="{escape(href)}">{escape(label)}</a>' for label, href in items)


def external_link_list() -> str:
    return ", ".join(f'<a href="{escape(href)}" target="_blank" rel="noopener">{escape(label)}</a>' for label, href in OFFICIAL_LINKS)


def build_content(topic: dict) -> str:
    decisions = "".join(f"<li>{escape(item.capitalize())}</li>" for item in topic["decisions"])
    activities = "".join(f"<li>{escape(item.capitalize())}</li>" for item in topic["activities"])
    faqs = [
        (f"What should schools include in {topic['keyword']}?", "Schools should include a clear purpose, safe boundaries, practical activities, staff follow-up and a route for pupils who need more support."),
        ("How can schools keep the session safe?", "Avoid public disclosure, use scenarios rather than real incidents, brief staff before sensitive topics and explain how pupils can ask for help afterwards."),
        ("Can HIP Psychology adapt this for different year groups?", "Yes. HIP Psychology can adapt workshops, staff training and parent sessions for primary, post-primary and secondary school settings."),
    ]
    faq_html = "".join(f"<h3>{escape(q)}</h3><p>{escape(a)}</p>" for q, a in faqs)
    faq_schema = {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": q, "acceptedAnswer": {"@type": "Answer", "text": a}} for q, a in faqs]}
    article_schema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": topic["title"],
        "author": {"@type": "Organization", "name": "HIP Psychology"},
        "publisher": {"@type": "Organization", "name": "HIP Psychology"},
        "datePublished": TODAY,
        "dateModified": TODAY,
        "mainEntityOfPage": f"{SITE}/{topic['slug']}/",
    }
    return "\n".join([
        f"<p>{escape(topic['title'])} is a practical guide for {escape(topic['audience'])}.</p>",
        f"<p>The focus is {escape(topic['intent'])}. HIP Psychology supports schools across Northern Ireland and Ireland with pupil workshops, staff training, parent sessions and whole-school wellbeing planning.</p>",
        "<h2>Why this matters</h2>",
        "<p>Schools need wellbeing input that pupils can understand and staff can follow up. A useful session gives shared language, protects sensitive information and connects clearly to pastoral and safeguarding systems.</p>",
        "<h2>Key planning decisions</h2>",
        f"<ul>{decisions}</ul>",
        "<h2>Practical activities</h2>",
        f"<ul>{activities}</ul>",
        "<h2>How staff can follow up</h2>",
        "<p>Staff should know what to notice, what to record, what language to use and when to escalate. The best workshop leaves adults with simple prompts they can repeat in normal school time.</p>",
        "<h2>How HIP Psychology can help</h2>",
        f"<p>HIP Psychology can deliver {escape(topic['keyword'])} support as a pupil workshop, staff training input, parent evening or part of a wider school wellbeing programme.</p>",
        "<h2>Useful guidance</h2>",
        f"<p>Schools can align this work with {external_link_list()}.</p>",
        "<h2>Related HIP Psychology resources</h2>",
        f"<p>Related resources include {link_list(INTERNAL_LINKS[:7])}.</p>",
        '<p><strong>Need help planning this?</strong> <a href="/contact-us/">Contact HIP Psychology</a> to discuss workshops, training or whole-school support.</p>',
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
        "excerpt": f"A practical school guide to {topic['keyword']}, with safe delivery, staff follow-up and HIP Psychology support.",
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
    checks = {
        "http_200": status == 200,
        "wp_status_publish": post["status"] == "publish",
        "one_h1": len(re.findall(r"<h1\b", html, flags=re.I)) == 1,
        "h2_sections": len(re.findall(r"<h2\b", html, flags=re.I)) >= 5,
        "faq_schema": '"FAQPage"' in html,
        "article_schema": '"Article"' in html,
        "contact_cta": "/contact-us/" in html,
        "no_secret_leak": "hip_wp_app_password" not in html.lower(),
    }
    return {"slug": post["slug"], "link": post["link"], "checks": checks, "ok": all(checks.values())}


def main() -> None:
    published = []
    for topic in TOPICS:
        published.append(upsert_post(topic))
        time.sleep(0.35)
    qa = [qa_post(post) for post in published]
    sitemap_status, sitemap = fetch_text(f"{SITE}/wp-sitemap-posts-post-1.xml")
    sitemap_checks = {post["slug"]: post["link"] in sitemap for post in published}
    failures = [item for item in qa if not item["ok"]] + [slug for slug, ok in sitemap_checks.items() if not ok]
    result = {"published": published, "qa": qa, "sitemap_status": sitemap_status, "sitemap_checks": sitemap_checks, "failures": len(failures)}
    (HERE / "publish-result.json").write_text(json.dumps(published, indent=2), encoding="utf-8")
    (HERE / "qa-result.json").write_text(json.dumps(result, indent=2), encoding="utf-8")
    lines = [
        "# HIP Psychology content blast - 2026-07-03",
        "",
        "Published 10 live WordPress posts around form-time wellbeing, pupil workshops and pastoral support buyer intent.",
        "",
        "## Live posts",
        *[f"- [{post['title']}]({post['link']}) - `{post['slug']}`" for post in published],
        "",
        "## QA",
        f"- Failures: {len(failures)}",
        "- Checks: HTTP 200, WordPress publish status, one H1, H2 sections, FAQPage + Article schema, contact CTA, sitemap inclusion and no secret markers.",
        "",
        "## Not Done",
        "- No email, DM, social post or featured image.",
    ]
    (HERE / "report.md").write_text("\n".join(lines) + "\n", encoding="utf-8")
    print(json.dumps(result, indent=2))
    if failures:
        raise SystemExit(1)


if __name__ == "__main__":
    main()
