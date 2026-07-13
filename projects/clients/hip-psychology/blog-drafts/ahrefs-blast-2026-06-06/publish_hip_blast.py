#!/usr/bin/env python3
from __future__ import annotations

import datetime as dt
import json
import os
import re
from html import escape
from pathlib import Path

import requests
from requests.auth import HTTPBasicAuth

SITE = "https://hippsychology.com"
API = f"{SITE}/wp-json/wp/v2"
OUT = Path(__file__).resolve().parent
CATEGORY_SCHOOL_WELLBEING = 24

AHREFS_SOURCE = (
    "Ahrefs source: live Ahrefs Site Explorer API check on 2026-06-06 confirmed HIP ranks for "
    "`pupil wellbeing` (pos 10, vol 80, KD 1) and `define pastoral support` (pos 7, vol 40, KD 0), "
    "with saved HIP Ahrefs keyword overview from 2026-05-14 showing high-value gaps around "
    "`anti bullying week` (vol 2400, KD 16, traffic potential 3400), `mental health in schools` "
    "(vol 300, KD 22), `wellbeing in schools` (vol 150, KD 19), `mental health training for teachers` "
    "(vol 200, KD 0), `staff wellbeing training` (vol 150), and missing/zero-volume long-tail "
    "school wellbeing workshop terms. Anti-Bullying Week 2026 timing/theme verified from the official "
    "Anti-Bullying Alliance source on 2026-06-06."
)

OFFICIAL_LINKS = {
    "aba_2026": "https://anti-bullyingalliance.org.uk/aba-our-work/news-opinion/children-suffering-bullying-silence-anti-bullying-week-2026-launches",
    "de_wellbeing": "https://www.education-ni.gov.uk/articles/emotional-health-and-wellbeing",
    "de_safeguarding": "https://www.education-ni.gov.uk/articles/protecting-and-safeguarding-our-children",
    "ccea_llw": "https://ccea.org.uk/learning-resources/living-learning-together",
    "education_support": "https://www.educationsupport.org.uk/get-help/help-for-your-staff/wellbeing-services/professional-supervision/",
}

EXT_LABELS = {
    "aba_2026": "Anti-Bullying Alliance 2026 theme announcement",
    "de_wellbeing": "Department of Education emotional health and wellbeing guidance",
    "de_safeguarding": "Department of Education safeguarding guidance",
    "ccea_llw": "CCEA Living. Learning. Together resources",
    "education_support": "Education Support professional supervision guidance",
}

TOPICS = [
    {
        "slug": "anti-bullying-week-2026-schools",
        "title": "Anti-Bullying Week 2026 for Schools: Planning Around Break the Silence",
        "keyword": "anti bullying week 2026 schools",
        "cluster": "Anti-Bullying Week Ahrefs cluster",
        "ahrefs_note": "Extends saved Ahrefs opportunity `anti bullying week` (vol 2400, KD 16, TP 3400) with the newly confirmed 2026 theme and dates.",
        "audience": "principals, pastoral leaders, year heads, safeguarding leads and wellbeing coordinators",
        "intent": "help schools plan Anti-Bullying Week 2026 as a practical safeguarding and pupil voice moment, not a one-off awareness display",
        "problem": "Anti-Bullying Week can become posters, odd socks and one assembly with no clear route for pupils who need help. The 2026 theme, Break the Silence, makes follow-up especially important.",
        "signs": [
            "pupils know the slogan but not who to speak to",
            "staff worry an awareness week may raise disclosures without enough follow-up",
            "assemblies are planned separately from pastoral systems",
            "leaders need age-appropriate activity across year groups",
        ],
        "actions": [
            "confirm who handles pupil disclosures before the week starts",
            "choose two or three core messages and repeat them across assemblies, classes and tutor time",
            "give pupils safe language for seeking help",
            "review what pupils raised after the week rather than moving on immediately",
        ],
        "workshop": "HIP Psychology can help schools plan age-appropriate Anti-Bullying Week workshops, assemblies and staff briefing points so the theme connects to real support.",
        "external": ["aba_2026", "de_safeguarding"],
    },
    {
        "slug": "anti-bullying-week-activities-schools",
        "title": "Anti-Bullying Week Activities for Schools: Making Awareness Practical",
        "keyword": "anti bullying week activities schools",
        "cluster": "Anti-Bullying Week Ahrefs cluster",
        "ahrefs_note": "Companion long-tail for the saved Ahrefs `anti bullying week` opportunity and GSC early impressions around anti-bullying workshops for schools.",
        "audience": "teachers, heads of year, pastoral teams, pupil voice leads and school leaders",
        "intent": "help staff choose activities that create reflection and safe action rather than token participation",
        "problem": "Activities can look busy while leaving pupils unclear about behaviour, impact, reporting and repair. Good activities should be safe, structured and connected to support routes.",
        "signs": [
            "activities are chosen late because the week is already close",
            "younger pupils need concrete examples while older pupils need more honest discussion",
            "staff are unsure how to manage sensitive comments",
            "pupil voice is gathered but not used",
        ],
        "actions": [
            "start with the behaviour or message pupils need to understand",
            "keep anonymous disclosure routes separate from classroom activities",
            "use scenarios that feel realistic for the year group",
            "end each activity with a clear support route",
        ],
        "workshop": "HIP Psychology workshops can provide structured activities that help pupils discuss bullying, bystander behaviour and support-seeking in a safe way.",
        "external": ["aba_2026", "ccea_llw"],
    },
    {
        "slug": "anti-bullying-assembly-schools",
        "title": "Anti-Bullying Assembly for Schools: Safe Messages That Lead to Action",
        "keyword": "anti bullying assembly schools",
        "cluster": "Anti-bullying workshop and assembly cluster",
        "ahrefs_note": "Supports the saved Ahrefs `anti bullying week` cluster plus GSC page-one impressions for `anti bullying school workshop` and `bullying workshops for schools`.",
        "audience": "pastoral leaders, year heads, form tutors, safeguarding teams and school leaders",
        "intent": "help schools design anti-bullying assemblies that are clear, safe and connected to follow-up support",
        "problem": "Assemblies can raise awareness quickly, but they can also oversimplify bullying or leave pupils with strong feelings and no next step. The assembly should open a door, not close the issue.",
        "signs": [
            "the school wants one message for a large group of pupils",
            "staff need a shared language before tutor follow-up",
            "pupils may disclose concerns after the assembly",
            "leaders want the assembly to connect with pastoral care",
        ],
        "actions": [
            "avoid blaming language that makes pupils shut down",
            "name bystander choices clearly",
            "explain reporting routes in practical terms",
            "brief staff before and after the assembly",
        ],
        "workshop": "HIP Psychology can deliver anti-bullying assemblies and related workshops that help pupils understand behaviour, impact, bystander choices and safe support routes.",
        "external": ["aba_2026", "de_safeguarding"],
    },
    {
        "slug": "teacher-wellbeing-workshops",
        "title": "Teacher Wellbeing Workshops: Practical Support That Fits the School Week",
        "keyword": "teacher wellbeing workshops",
        "cluster": "Staff wellbeing and mental health training cluster",
        "ahrefs_note": "Builds from saved Ahrefs long-tail `teacher wellbeing workshops`, `staff wellbeing training` (vol 150) and `mental health training for teachers` (vol 200, KD 0).",
        "audience": "principals, staff-development leads, pastoral leaders, teachers and school support staff",
        "intent": "help schools choose teacher wellbeing workshops that create practical support instead of another generic wellbeing talk",
        "problem": "Teachers are often given wellbeing advice that does not fit the realities of school workload, emotional labour and safeguarding pressure. Useful support must be practical and credible.",
        "signs": [
            "staff wellbeing is discussed but not planned",
            "pastoral pressure is carried by the same small group of adults",
            "new initiatives add work rather than reducing pressure",
            "leaders want support that respects staff professionalism",
        ],
        "actions": [
            "separate individual coping skills from organisational workload issues",
            "make supervision, debriefing and boundaries part of the plan",
            "use realistic school scenarios",
            "agree one or two visible changes after training",
        ],
        "workshop": "HIP Psychology can support staff wellbeing through practical workshops, supervision-informed discussion and school-specific planning.",
        "external": ["education_support", "de_wellbeing"],
    },
    {
        "slug": "student-wellbeing-workshops",
        "title": "Student Wellbeing Workshops: What Schools Should Look For",
        "keyword": "student wellbeing workshops",
        "cluster": "Student and pupil wellbeing workshop cluster",
        "ahrefs_note": "Companion long-tail from saved Ahrefs keyword overview around `student wellbeing workshops`, `wellbeing in schools` (vol 150, KD 19) and the live `pupil wellbeing` ranking.",
        "audience": "pastoral leaders, year heads, wellbeing coordinators, SENCOs and senior leaders",
        "intent": "help schools choose pupil wellbeing sessions that are age-appropriate, safe and connected to everyday school support",
        "problem": "A student wellbeing workshop should not be a motivational talk with no follow-up. Pupils need language, examples, support routes and adults who understand what was covered.",
        "signs": [
            "pupils are reporting stress, friendship pressure or low confidence",
            "year heads want support before issues escalate",
            "staff need sessions that complement pastoral care",
            "leaders want workshops that are credible and safe",
        ],
        "actions": [
            "match the workshop to the year group and pressure point",
            "brief staff before the session",
            "include support-seeking language",
            "plan a follow-up activity or tutor discussion",
        ],
        "workshop": "HIP Psychology delivers pupil and student wellbeing workshops that help schools turn emotional health themes into practical, age-appropriate support.",
        "external": ["de_wellbeing", "ccea_llw"],
    },
    {
        "slug": "emotional-wellbeing-for-pupils",
        "title": "Emotional Wellbeing for Pupils: Turning Concern Into Practical Support",
        "keyword": "emotional wellbeing for pupils",
        "cluster": "Emotional wellbeing and pupil support cluster",
        "ahrefs_note": "Targets saved Ahrefs missing opportunity `emotional support schoolchildren` and supports GSC impressions around `emotional wellbeing for pupils`.",
        "audience": "teachers, classroom assistants, SENCOs, pastoral staff, safeguarding leads and school leaders",
        "intent": "help school staff respond to emotional concerns with calm, boundaried and practical first steps",
        "problem": "Staff often want to help but worry about saying too much, doing too little or carrying a concern alone. Emotional support should be kind, structured and connected to the right internal routes.",
        "signs": [
            "pupils are becoming withdrawn, tearful or easily overwhelmed",
            "classroom staff are unsure what sits within their role",
            "pastoral teams receive concerns without enough context",
            "families need clear and consistent communication",
        ],
        "actions": [
            "notice the pattern before jumping to labels",
            "use calm language and avoid promising confidentiality",
            "record concerns through the school system",
            "agree when to involve pastoral or safeguarding leads",
        ],
        "workshop": "HIP Psychology can help staff build confidence around emotional support, early help and safe escalation in everyday school contexts.",
        "external": ["de_wellbeing", "de_safeguarding"],
    },
]

INTERNAL_LINKS = [
    ("anti-bullying week", "/anti-bullying-week-schools/"),
    ("anti-bullying workshops", "/anti-bullying-workshops-schools/"),
    ("bullying prevention workshops", "/bullying-prevention-workshops-schools/"),
    ("bystander behaviour", "/bystander-behaviour/"),
    ("pupil wellbeing strategy", "/pupil-wellbeing-strategy-schools/"),
    ("student anxiety in schools", "/student-anxiety-in-schools/"),
    ("mental health training for teachers", "/mental-health-training-for-teachers/"),
    ("staff wellbeing training", "/staff-wellbeing-training-for-schools/"),
    ("emotional wellbeing in schools", "/emotional-wellbeing-in-schools/"),
    ("contact HIP Psychology", "/contact-us/"),
]


def wp_auth() -> HTTPBasicAuth:
    return HTTPBasicAuth(os.environ["HIP_WP_USERNAME"], os.environ["HIP_WP_APP_PASSWORD"])


def paragraph(text: str) -> str:
    return f"<p>{escape(text)}</p>"


def list_html(items: list[str]) -> str:
    return "<ul>" + "".join(f"<li>{escape(item[0].upper() + item[1:] if item else item)}</li>" for item in items) + "</ul>"


def make_content(topic: dict) -> str:
    faq = [
        (
            f"What is the first step for {topic['keyword']}?",
            "Start by agreeing the intended outcome, the staff roles involved, the pupil support route and how the school will review whether the work helped.",
        ),
        (
            "How can schools keep this safe?",
            "Avoid asking pupils to disclose personal experiences in public settings. Use clear support routes, safeguarding procedures and age-appropriate examples.",
        ),
        (
            "Should this be a one-off session?",
            "A one-off session can help, but the strongest impact comes when it links to tutor follow-up, staff briefing, pastoral care and pupil voice.",
        ),
        (
            "How can HIP Psychology help?",
            "HIP Psychology can support schools with pupil workshops, staff training, assemblies and practical wellbeing planning tailored to the age group and school context.",
        ),
    ]
    faq_schema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [{"@type": "Question", "name": q, "acceptedAnswer": {"@type": "Answer", "text": a}} for q, a in faq],
    }
    article_schema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": topic["title"],
        "author": {"@type": "Organization", "name": "HIP Psychology"},
        "publisher": {"@type": "Organization", "name": "HIP Psychology"},
        "datePublished": dt.date.today().isoformat(),
        "dateModified": dt.date.today().isoformat(),
        "mainEntityOfPage": f"{SITE}/{topic['slug']}/",
    }
    external = [
        f'<a href="{OFFICIAL_LINKS[key]}" target="_blank" rel="noopener">{escape(EXT_LABELS[key])}</a>'
        for key in topic["external"]
    ]
    internal = [
        f'<a href="{href}">{escape(label)}</a>'
        for label, href in INTERNAL_LINKS
        if href.strip("/") != topic["slug"]
    ]
    html: list[str] = []
    html.append(paragraph(f"{topic['title']} is a practical guide for {topic['audience']}. It focuses on {topic['intent']}."))
    html.append(paragraph(f"The target keyword is part of the {topic['cluster']}. {topic['ahrefs_note']}"))
    if topic["slug"] == "anti-bullying-week-2026-schools":
        html.append(paragraph("The official Anti-Bullying Alliance announcement confirms Anti-Bullying Week 2026 will run from Monday 16 November to Friday 20 November, with the theme Break the Silence. Schools should use that theme carefully because it may encourage pupils to talk about concerns they have not previously shared."))
    html.append("<h2>Why this matters for schools</h2>")
    html.append(paragraph(topic["problem"]))
    html.append(paragraph("The useful test is not whether the activity looks positive on the timetable. The useful test is whether pupils and staff know what to do next when the issue appears in real school life."))
    html.append("<h2>Common signs this needs attention</h2>")
    html.append(paragraph("Every school context is different, but repeated patterns should be noticed before staff become stretched or pupils feel unsupported."))
    html.append(list_html(topic["signs"]))
    html.append("<h2>What schools should decide before delivery</h2>")
    html.append(paragraph("Before booking a workshop, writing an assembly or planning a staff session, leaders should agree the purpose, the audience, the support route and the boundaries. That keeps the work practical and safe."))
    html.append(list_html(topic["actions"]))
    html.append("<h2>Keep the work connected to pastoral care</h2>")
    html.append(paragraph("Awareness activity should connect with pastoral systems, safeguarding procedures and classroom follow-up. Pupils should hear the same core message from the adults around them. Staff should also know where their role ends and where escalation begins."))
    html.append(paragraph("That is especially important when discussions touch on bullying, anxiety, emotional distress or disclosures. Schools should avoid creating moments where pupils are invited to speak but adults are not ready to respond."))
    html.append("<h2>What good workshop delivery should include</h2>")
    html.append(paragraph(topic["workshop"]))
    html.append(paragraph("Good delivery should be age-appropriate, calm, realistic and easy for staff to build on. It should avoid shame, simplistic slogans or promises that cannot be kept."))
    html.append("<h2>Useful guidance to align with</h2>")
    html.append("<p>Schools can connect this work with existing guidance, including " + " and ".join(external) + ".</p>")
    html.append("<h2>How HIP Psychology can support your school</h2>")
    html.append(paragraph("HIP Psychology works with schools across Northern Ireland and Ireland through pupil workshops, staff training, assemblies and whole-school wellbeing support. Sessions are designed to be practical, psychologically informed and usable in busy school settings."))
    html.append("<p>Useful related HIP resources include " + ", ".join(internal[:5]) + ".</p>")
    html.append('<p><strong>Need help planning the next step?</strong> <a href="/contact-us/">Contact HIP Psychology</a> to discuss workshops, staff training or whole-school wellbeing support.</p>')
    html.append("<h2>FAQs</h2>")
    for question, answer in faq:
        html.append(f"<h3>{escape(question)}</h3>")
        html.append(paragraph(answer))
    html.append(f'<script type="application/ld+json">{json.dumps(faq_schema, ensure_ascii=False)}</script>')
    html.append(f'<script type="application/ld+json">{json.dumps(article_schema, ensure_ascii=False)}</script>')
    return "\n".join(html)


def excerpt(topic: dict) -> str:
    return f"A practical school guide to {topic['keyword']}, with signs to notice, safe planning steps, staff roles and HIP Psychology workshop support."


def wp_posts(params: dict) -> requests.Response:
    return requests.get(f"{API}/posts", params=params, auth=wp_auth(), timeout=30)


def existing_slugs() -> set[str]:
    slugs: set[str] = set()
    for page in range(1, 10):
        response = wp_posts({"per_page": 100, "page": page, "_fields": "slug"})
        if response.status_code == 400:
            break
        response.raise_for_status()
        data = response.json()
        if not data:
            break
        slugs.update(post["slug"] for post in data)
    return slugs


def publish_topic(topic: dict) -> dict:
    content = make_content(topic)
    source_file = OUT / f"{topic['slug']}.html"
    source_file.write_text(content)
    payload = {
        "title": topic["title"],
        "slug": topic["slug"],
        "status": "publish",
        "content": content,
        "excerpt": excerpt(topic),
        "categories": [CATEGORY_SCHOOL_WELLBEING],
    }
    response = requests.post(f"{API}/posts", json=payload, auth=wp_auth(), timeout=45)
    if not response.ok:
        raise RuntimeError(f"Publish failed for {topic['slug']}: {response.status_code} {response.text[:1000]}")
    data = response.json()
    return {
        "id": data["id"],
        "slug": data["slug"],
        "title": topic["title"],
        "url": data["link"],
        "target_keyword": topic["keyword"],
        "cluster": topic["cluster"],
        "ahrefs_note": topic["ahrefs_note"],
        "status": data["status"],
        "source_file": str(source_file),
    }


def check_page(row: dict) -> dict:
    response = requests.get(row["url"], timeout=30)
    html = response.text
    leak_markers = [
        "TODO",
        "Draft",
        "source_file",
        "Target keyword:",
        "primary_keyword:",
        "AHREFS_API_TOKEN",
        "HIP_WP_APP_PASSWORD",
        "HIP_WP_USERNAME",
    ]
    return {
        "url": row["url"],
        "http_status": response.status_code,
        "h1_count": len(re.findall(r"<h1\b", html, flags=re.I)),
        "h2_count": len(re.findall(r"<h2\b", html, flags=re.I)),
        "faq_schema": '"@type": "FAQPage"' in html,
        "article_schema": '"@type": "Article"' in html,
        "contact_cta": "/contact-us/" in html,
        "leak_markers_found": [marker for marker in leak_markers if marker in html],
    }


def latest_feed_contains(urls: list[str]) -> dict[str, bool]:
    response = requests.get(f"{SITE}/wp-json/wp/v2/posts", params={"per_page": 20, "_fields": "link"}, timeout=30)
    response.raise_for_status()
    links = {post["link"] for post in response.json()}
    return {url: url in links for url in urls}


def sitemap_contains(urls: list[str]) -> dict[str, bool]:
    response = requests.get(f"{SITE}/wp-sitemap-posts-post-1.xml", timeout=30)
    text = response.text
    return {url: url in text for url in urls}


def write_report(published: list[dict], qa: dict) -> None:
    lines = [
        "# HIP Psychology Ahrefs Content Blast - 2026-06-06",
        "",
        AHREFS_SOURCE,
        "",
        "## Keyword Clusters Picked",
    ]
    for row in published:
        lines.append(f"- `{row['target_keyword']}` — {row['cluster']}. {row['ahrefs_note']}")
    lines += ["", "## New Live Posts"]
    for row in published:
        lines.append(f"- [{row['title']}]({row['url']}) — `{row['target_keyword']}`")
    lines += [
        "",
        "## QA",
        f"- Failures: {len(qa['failures'])}",
        "- Checks: HTTP 200, WordPress publish status, one H1, H2 sections present, FAQPage + Article schema, contact CTA, latest REST feed, WP post sitemap, no draft/source/secret leak markers.",
        "",
        "## Not Done",
        "- No email or social promotion.",
        "- No featured images.",
    ]
    (OUT / "report.md").write_text("\n".join(lines) + "\n")


def main() -> int:
    OUT.mkdir(parents=True, exist_ok=True)
    slugs = existing_slugs()
    duplicates = [topic["slug"] for topic in TOPICS if topic["slug"] in slugs]
    if duplicates:
        raise RuntimeError(f"Refusing duplicate slugs: {duplicates}")

    published = [publish_topic(topic) for topic in TOPICS]
    urls = [row["url"] for row in published]
    feed = latest_feed_contains(urls)
    sitemap = sitemap_contains(urls)
    rest_status = {}
    for row in published:
        response = wp_posts({"slug": row["slug"], "_fields": "id,status,slug,link"})
        response.raise_for_status()
        posts = response.json()
        rest_status[row["url"]] = posts[0]["status"] if posts else None

    qa = {
        "source_note": AHREFS_SOURCE,
        "checked_at": dt.datetime.now().isoformat(timespec="seconds"),
        "results": [],
        "failures": [],
    }
    for row in published:
        item = {
            **row,
            "rest_status": rest_status[row["url"]],
            "latest_feed_contains": feed[row["url"]],
            "wp_sitemap_contains": sitemap[row["url"]],
            **check_page(row),
        }
        ok = (
            item["status"] == "publish"
            and item["rest_status"] == "publish"
            and item["http_status"] == 200
            and item["h1_count"] == 1
            and item["h2_count"] >= 8
            and item["faq_schema"]
            and item["article_schema"]
            and item["contact_cta"]
            and item["latest_feed_contains"]
            and item["wp_sitemap_contains"]
            and not item["leak_markers_found"]
        )
        if not ok:
            qa["failures"].append(item)
        qa["results"].append(item)

    (OUT / "publish-result.json").write_text(json.dumps({"source_note": AHREFS_SOURCE, "results": published}, indent=2))
    (OUT / "qa-result.json").write_text(json.dumps(qa, indent=2))
    write_report(published, qa)
    print(json.dumps({"published": len(published), "failures": len(qa["failures"]), "report": str(OUT / "report.md")}, indent=2))
    return 0 if not qa["failures"] else 1


if __name__ == "__main__":
    raise SystemExit(main())
