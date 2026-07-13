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
TODAY = dt.date(2026, 7, 7).isoformat()

OFFICIAL_LINKS = [
    ("Department of Education emotional health and wellbeing guidance", "https://www.education-ni.gov.uk/articles/emotional-health-and-wellbeing"),
    ("Department of Education safeguarding and child protection guidance", "https://www.education-ni.gov.uk/publications/safeguarding-and-child-protection-schools-guide-schools"),
    ("Department of Education effective practice in educational settings", "https://www.education-ni.gov.uk/publications/effective-practice-educational-settings"),
    ("Public Health Agency Take 5 wellbeing resources", "https://www.publichealth.hscni.net/publications/take-5-steps-wellbeing-english-and-11-translations"),
]

INTERNAL_LINKS = [
    ("school wellbeing consultancy", "/consultancy/"),
    ("training for schools", "/training/"),
    ("programmes for schools", "/programmes/"),
    ("mental health workshops for schools", "/mental-health-workshops-for-schools/"),
    ("pupil wellbeing strategy", "/pupil-wellbeing-strategy-schools/"),
    ("pastoral care training", "/pastoral-care-training-schools/"),
    ("emotion coaching training", "/training/emotion-coaching/"),
    ("staff wellbeing INSET", "/training/staff-wellbeing-inset/"),
    ("contact HIP Psychology", "/contact-us/"),
]

TOPICS = [
    {
        "slug": "primary-school-mental-health-workshops-ni",
        "title": "Primary School Mental Health Workshops in Northern Ireland",
        "keyword": "primary school mental health workshops NI",
        "audience": "primary principals, SENCOs, pastoral leads and classroom teachers",
        "intent": "planning age-appropriate pupil wellbeing input that supports emotional language, help-seeking and safe classroom follow-up",
        "decisions": ["which key stage needs support first", "how workshop language will match school policy", "which adults will stay in the room", "how sensitive worries will be followed up"],
        "activities": ["emotion word sorting", "small-group coping cards", "help-seeking practice", "story-based discussion about worries and support"],
        "fit": "A primary workshop should feel practical, warm and low-pressure. It should not ask children to disclose private worries in front of the class.",
    },
    {
        "slug": "post-primary-mental-health-workshops-ni",
        "title": "Post-Primary Mental Health Workshops in Northern Ireland",
        "keyword": "post-primary mental health workshops NI",
        "audience": "post-primary senior leaders, heads of year, form tutors and pastoral teams",
        "intent": "supporting pupils with stress, friendship, online pressure and help-seeking without turning staff into counsellors",
        "decisions": ["which year groups need universal input", "how the session links with tutor time", "what staff should notice afterwards", "which referral routes pupils should hear clearly"],
        "activities": ["pressure mapping", "scenario discussion", "support route reminders", "realistic coping and revision planning"],
        "fit": "Post-primary pupils need direct language, safe boundaries and examples that feel close to school life.",
    },
    {
        "slug": "school-anxiety-parent-workshop",
        "title": "School Anxiety Parent Workshop: Helping Families and Schools Work Together",
        "keyword": "school anxiety parent workshop",
        "audience": "school leaders, pastoral staff and parents supporting anxious pupils",
        "intent": "giving parents shared language for anxiety, attendance worries and school-based support",
        "decisions": ["what parents are most worried about", "how school staff will explain support routes", "what advice should stay general rather than clinical", "how attendance concerns will be discussed sensitively"],
        "activities": ["anxiety cycle explanation", "morning routine reflection", "language parents can use at home", "school-home communication planning"],
        "fit": "Parent sessions work best when they reduce blame and give families a clear next step.",
    },
    {
        "slug": "teacher-mental-health-training-northern-ireland",
        "title": "Teacher Mental Health Training in Northern Ireland Schools",
        "keyword": "teacher mental health training Northern Ireland",
        "audience": "teachers, classroom assistants, pastoral teams and senior leaders",
        "intent": "helping school staff notice pupil distress, use consistent language and know when to escalate concerns",
        "decisions": ["which staff groups need training", "how safeguarding thresholds will be explained", "what language staff should use in class", "how staff wellbeing will be protected"],
        "activities": ["case-study discussion", "notice-and-record practice", "signposting route mapping", "scripts for supportive conversations"],
        "fit": "Good training gives staff confidence without making them feel personally responsible for every concern.",
    },
    {
        "slug": "pupil-resilience-workshops-northern-ireland",
        "title": "Pupil Resilience Workshops for Northern Ireland Schools",
        "keyword": "pupil resilience workshops Northern Ireland",
        "audience": "primary and post-primary schools planning practical resilience support",
        "intent": "turning resilience from a slogan into usable skills pupils can practise during normal school pressures",
        "decisions": ["which pressures pupils are facing", "how resilience will be described without dismissing real difficulty", "what staff will reinforce afterwards", "how the session links to pastoral support"],
        "activities": ["setback scenarios", "support network mapping", "self-talk practice", "small-step planning"],
        "fit": "Resilience work should validate difficulty first, then help pupils find realistic actions and support.",
    },
    {
        "slug": "emotional-literacy-activities-primary-school",
        "title": "Emotional Literacy Activities for Primary School Pupils",
        "keyword": "emotional literacy activities primary school",
        "audience": "primary teachers, SENCOs, nurture staff and wellbeing leads",
        "intent": "building pupils' emotional vocabulary and support-seeking confidence through simple classroom activities",
        "decisions": ["which emotion words pupils already know", "how staff will model language", "how activities will avoid public disclosure", "which routines will continue after the session"],
        "activities": ["feelings thermometer", "emotion cards", "body clue mapping", "calm choices menu"],
        "fit": "Emotional literacy works best when it becomes part of everyday adult language in school.",
    },
    {
        "slug": "wellbeing-day-for-schools",
        "title": "Wellbeing Day for Schools: Planning a Useful Pupil and Staff Programme",
        "keyword": "wellbeing day for schools",
        "audience": "principals, SLT, pastoral leaders and wellbeing coordinators",
        "intent": "designing a focused wellbeing day that has a purpose beyond one-off activities",
        "decisions": ["what problem the day is meant to support", "which pupils and staff need separate inputs", "how safeguarding and follow-up will work", "what pupils should remember a week later"],
        "activities": ["year-group workshops", "staff training input", "parent evening", "whole-school reflection activity"],
        "fit": "A wellbeing day is strongest when it feeds into a wider school plan rather than sitting as a standalone event.",
    },
    {
        "slug": "pastoral-staff-training-northern-ireland",
        "title": "Pastoral Staff Training for Northern Ireland Schools",
        "keyword": "pastoral staff training Northern Ireland",
        "audience": "heads of year, pastoral coordinators, form tutors and safeguarding teams",
        "intent": "strengthening consistent pastoral responses across year teams and daily school routines",
        "decisions": ["where staff responses vary", "which records and referral routes are used", "how difficult conversations are handled", "how leaders will support staff after incidents"],
        "activities": ["pastoral scenario triage", "conversation scripts", "recording practice", "team reflection on thresholds and roles"],
        "fit": "Pastoral training should make everyday responses clearer, not add another layer of paperwork.",
    },
    {
        "slug": "classroom-wellbeing-activities",
        "title": "Classroom Wellbeing Activities: Simple Ideas Teachers Can Use Safely",
        "keyword": "classroom wellbeing activities",
        "audience": "class teachers, form tutors, classroom assistants and wellbeing leads",
        "intent": "giving staff low-risk wellbeing activities that fit ordinary classroom time",
        "decisions": ["what can be done in five to ten minutes", "how activities will stay inclusive", "which topics are too sensitive for open classroom discussion", "what support route pupils hear afterwards"],
        "activities": ["silent check-ins", "strength spotting", "calm start routines", "help card reminders"],
        "fit": "Short classroom activities work when they are predictable, optional and easy for staff to repeat.",
    },
    {
        "slug": "pupil-leadership-wellbeing-programme",
        "title": "Pupil Leadership Wellbeing Programme for Schools",
        "keyword": "pupil leadership wellbeing programme",
        "audience": "schools developing wellbeing ambassadors, pupil voice groups or peer support roles",
        "intent": "helping pupils contribute to wellbeing work without giving them adult safeguarding responsibilities",
        "decisions": ["what pupil leaders are allowed to do", "what they must never be asked to hold", "which adult supervises the group", "how pupil voice will influence school action"],
        "activities": ["role boundary mapping", "campaign planning", "safe signposting practice", "feedback collection and action planning"],
        "fit": "Pupil leadership should build ownership while keeping adult responsibility exactly where it belongs.",
    },
    {
        "slug": "school-staff-trauma-debrief-training",
        "title": "School Staff Trauma Debrief Training After Difficult Incidents",
        "keyword": "school staff trauma debrief training",
        "audience": "senior leaders, pastoral teams, safeguarding leads and staff who support pupils after difficult incidents",
        "intent": "helping schools plan calm staff support, reflection and signposting after distressing events",
        "decisions": ["who coordinates the response", "what staff need immediately", "what should be recorded", "when external support is needed"],
        "activities": ["response role mapping", "safe debrief boundaries", "support route planning", "follow-up check-in routines"],
        "fit": "Debrief work should never force disclosure. It should support clarity, containment and appropriate escalation.",
    },
    {
        "slug": "parent-workshops-for-schools-northern-ireland",
        "title": "Parent Workshops for Schools in Northern Ireland",
        "keyword": "parent workshops for schools Northern Ireland",
        "audience": "schools wanting practical parent evenings on wellbeing, anxiety, online pressure, transition or resilience",
        "intent": "creating parent sessions that reinforce school messages and help families support pupils at home",
        "decisions": ["which parent concerns are most common", "whether the session should be primary or post-primary focused", "what school support routes should be explained", "how sensitive questions will be handled"],
        "activities": ["short expert input", "common scenario discussion", "home support prompts", "school contact route reminders"],
        "fit": "Parent workshops are most useful when they are practical, non-judgemental and connected to the school's pastoral systems.",
    },
]


def auth_headers(content_type: bool = True) -> dict[str, str]:
    token = base64.b64encode(f"{os.environ['HIP_WP_USERNAME']}:{os.environ['HIP_WP_APP_PASSWORD']}".encode()).decode()
    headers = {"Authorization": f"Basic {token}", "User-Agent": "OpenClaw-HIP-Content-Blast/2026-07-07"}
    if content_type:
        headers["Content-Type"] = "application/json"
    return headers


def request_json(url: str, method: str = "GET", payload: dict | None = None) -> dict | list:
    data = json.dumps(payload).encode() if payload is not None else None
    req = Request(url, data=data, headers=auth_headers(payload is not None), method=method)
    with urlopen(req, timeout=60) as response:
        return json.loads(response.read().decode())


def fetch_text(url: str) -> tuple[int, str]:
    req = Request(url, headers={"User-Agent": "OpenClaw-HIP-QA/2026-07-07"})
    with urlopen(req, timeout=60) as response:
        return response.status, response.read().decode("utf-8", errors="replace")


def link_list(items: list[tuple[str, str]]) -> str:
    return ", ".join(f'<a href="{escape(href)}">{escape(label)}</a>' for label, href in items)


def external_link_list() -> str:
    return ", ".join(f'<a href="{escape(href)}" target="_blank" rel="noopener">{escape(label)}</a>' for label, href in OFFICIAL_LINKS)


def build_content(topic: dict) -> str:
    decisions = "".join(f"<li>{escape(item.capitalize())}</li>" for item in topic["decisions"])
    activities = "".join(f"<li>{escape(item.capitalize())}</li>" for item in topic["activities"])
    related = INTERNAL_LINKS[:4] + [INTERNAL_LINKS[5], INTERNAL_LINKS[-1]]
    faqs = [
        (f"What should a {topic['keyword']} session include?", "It should include a clear purpose, safe boundaries, age-appropriate examples, practical activities, staff follow-up and signposting routes for pupils or families who need more support."),
        ("How can schools keep wellbeing sessions safe?", "Use scenarios rather than real incidents, avoid public disclosure, brief staff before sensitive topics and make safeguarding or pastoral routes clear at the end."),
        ("Can HIP Psychology adapt this for different school settings?", "Yes. HIP Psychology can adapt pupil workshops, staff training, parent sessions and consultancy support for primary, post-primary and whole-school wellbeing priorities."),
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
        "<h2>Why this topic matters</h2>",
        f"<p>{escape(topic['fit'])} Schools need wellbeing input that pupils can understand, staff can follow up and leaders can connect to pastoral and safeguarding systems.</p>",
        "<h2>Key planning decisions</h2>",
        f"<ul>{decisions}</ul>",
        "<h2>Practical activities schools can use</h2>",
        f"<ul>{activities}</ul>",
        "<h2>How staff can follow up afterwards</h2>",
        "<p>Staff should know what to notice, what to record, what language to use and when to escalate. A strong session leaves adults with repeatable prompts they can use in normal school time.</p>",
        "<h2>Where this fits in a whole-school plan</h2>",
        "<p>This topic can sit inside a wider wellbeing calendar, pastoral care policy, school development plan or staff training programme. The aim is to make support visible before problems become harder to manage.</p>",
        "<h2>How HIP Psychology can help</h2>",
        f"<p>HIP Psychology can deliver {escape(topic['keyword'])} support as a pupil workshop, staff CPD session, parent evening or consultancy input for a wider school wellbeing programme.</p>",
        "<h2>Useful guidance for schools</h2>",
        f"<p>Schools can align this work with {external_link_list()}.</p>",
        "<h2>Related HIP Psychology resources</h2>",
        f"<p>Related resources include {link_list(related)}.</p>",
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
        "h2_sections": len(re.findall(r"<h2\b", html, flags=re.I)) >= 7,
        "faq_schema": '"FAQPage"' in html,
        "article_schema": '"Article"' in html,
        "contact_cta": "/contact-us/" in html,
        "official_links": "education-ni.gov.uk" in html and "publichealth.hscni.net" in html,
        "no_secret_leak": "hip_wp_app_password" not in html.lower() and "app_password" not in html.lower(),
        "no_source_markers": "OpenClaw" not in html and "TODO" not in html,
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
    result = {
        "published": published,
        "qa": qa,
        "sitemap_status": sitemap_status,
        "sitemap_checks": sitemap_checks,
        "failures": len(failures),
    }
    (HERE / "publish-result.json").write_text(json.dumps(published, indent=2), encoding="utf-8")
    (HERE / "qa-result.json").write_text(json.dumps(result, indent=2), encoding="utf-8")

    lines = [
        "# HIP Psychology content blast - 2026-07-07",
        "",
        "Published 12 live WordPress posts around school mental health workshops, parent sessions, pastoral training and practical classroom wellbeing intent.",
        "",
        "## Live posts",
    ]
    lines += [f"- [{post['title']}]({post['link']}) - `{post['slug']}` ({post['action']})" for post in published]
    lines += [
        "",
        "## QA",
        f"- Failures: {len(failures)}",
        "- Checks: HTTP 200, WordPress publish status, one H1, H2 sections, FAQPage + Article schema, contact CTA, official links, sitemap inclusion and no secret/source markers.",
        "- Ahrefs basis: live HIP has visible early traction for `bystander behaviour`, `emotion coaching in schools`, `pupil wellbeing`, and high-volume `form time ideas`; this batch expands adjacent uncovered school-buyer long-tail topics.",
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
