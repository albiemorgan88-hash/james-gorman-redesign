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
    "Ahrefs source: saved HIP Ahrefs keyword overview from 2026-05-14 plus Week 6 Ahrefs Site Explorer "
    "snapshot from 2026-06-01. Fresh Ahrefs API calls on 2026-06-03 were blocked because API units were exhausted."
)

OFFICIAL_LINKS = {
    "de_wellbeing": "https://www.education-ni.gov.uk/articles/emotional-health-and-wellbeing",
    "de_safeguarding": "https://www.education-ni.gov.uk/articles/protecting-and-safeguarding-our-children",
    "ccea_llw": "https://ccea.org.uk/learning-resources/living-learning-together",
    "nhs_anxiety": "https://www.nhs.uk/mental-health/children-and-young-adults/advice-for-parents/anxiety-in-children/",
    "education_support": "https://www.educationsupport.org.uk/get-help/help-for-your-staff/wellbeing-services/professional-supervision/",
}

EXT_LABELS = {
    "de_wellbeing": "Department of Education emotional health and wellbeing guidance",
    "de_safeguarding": "Department of Education safeguarding guidance",
    "ccea_llw": "CCEA Living. Learning. Together resources",
    "nhs_anxiety": "NHS anxiety guidance for children and young people",
    "education_support": "Education Support guidance on professional supervision",
}

TOPICS = [
    {
        "slug": "pupil-wellbeing-survey-schools",
        "title": "Pupil Wellbeing Survey for Schools: Turning Pupil Voice Into Practical Support",
        "keyword": "pupil wellbeing survey schools",
        "cluster": "Ahrefs-visible pupil wellbeing cluster",
        "ahrefs_note": "Supports the early Ahrefs-visible ranking for `pupil wellbeing` at position 10, volume 80, KD 1 on 2026-06-01.",
        "intent": "help school leaders turn pupil voice into specific wellbeing actions rather than another unused survey",
        "audience": "principals, pastoral leaders, SENCOs, wellbeing coordinators and school improvement teams",
        "problem": "Schools often collect pupil voice but struggle to turn the answers into visible change. A wellbeing survey only helps when the questions are practical, the analysis is honest and staff know what will happen next.",
        "signs": ["pupils report worries that staff only hear informally", "wellbeing work feels hard to prioritise", "pastoral teams are relying on anecdotes", "leaders need evidence before planning support"],
        "actions": ["ask questions that lead to decisions", "separate whole-school patterns from individual concerns", "share the findings in plain language", "choose two or three actions staff can actually sustain"],
        "workshop": "HIP Psychology can help schools design pupil voice work that is safe, age-appropriate and linked to practical follow-up. The aim is not to collect more data for its own sake, but to help staff understand what pupils need next.",
        "external": ["de_wellbeing", "de_safeguarding"],
    },
    {
        "slug": "pastoral-support-plan-schools",
        "title": "Pastoral Support Plan for Schools: From Concern to Clear Next Steps",
        "keyword": "pastoral support plan schools",
        "cluster": "Ahrefs-visible pastoral support cluster",
        "ahrefs_note": "Supports the early Ahrefs-visible ranking for `define pastoral support` at position 7, volume 40, KD 0 on 2026-06-01.",
        "intent": "help pastoral teams move from repeated concern to a clear plan, review point and escalation route",
        "audience": "pastoral leaders, heads of year, safeguarding leads, SENCOs, classroom teachers and senior leaders",
        "problem": "A pupil can be discussed many times without anyone being clear on the next step. A pastoral support plan should bring the concern, adult actions, family communication and review point into one simple structure.",
        "signs": ["the same pupil appears in repeated staff conversations", "support depends on one adult remembering what was agreed", "parents receive mixed messages", "staff are unsure when concern becomes safeguarding or specialist referral"],
        "actions": ["write down the main concern in plain language", "agree what staff will do differently this week", "name the review date", "record who will speak with family or external services if needed"],
        "workshop": "HIP Psychology training can help pastoral teams use simple planning routines, shared language and safe escalation. A plan should reduce drift and give staff a realistic way to respond consistently.",
        "external": ["de_safeguarding", "de_wellbeing"],
    },
    {
        "slug": "wellbeing-interventions-in-schools",
        "title": "Wellbeing Interventions in Schools: Choosing Support That Fits the Need",
        "keyword": "wellbeing interventions in schools",
        "cluster": "Ahrefs broad wellbeing in schools cluster",
        "ahrefs_note": "Builds from saved Ahrefs GB data for `wellbeing in schools` volume 150, KD 19, parent topic `mental health in schools`.",
        "intent": "help schools choose the right level of pupil or staff support instead of using one intervention for every concern",
        "audience": "school leaders, pastoral teams, SENCOs, classroom assistants and wellbeing coordinators",
        "problem": "Wellbeing intervention can become a catch-all phrase. Some pupils need classroom adjustments, some need small-group skills work, some need family communication, and some need safeguarding or specialist support.",
        "signs": ["the same intervention is used for very different needs", "small-group work is not transferring back to class", "staff are unsure how progress will be measured", "leaders cannot tell which support is making a difference"],
        "actions": ["match the support to the actual pattern", "decide what change should be visible", "keep the intervention time-limited and reviewed", "connect small-group work back to class routines"],
        "workshop": "HIP Psychology can support schools to map current wellbeing provision, choose practical interventions and create simple review points. The strongest support is usually clear, targeted and connected to everyday school life.",
        "external": ["de_wellbeing", "ccea_llw"],
    },
    {
        "slug": "mental-health-lead-in-schools",
        "title": "Mental Health Lead in Schools: What the Role Needs Around It to Work",
        "keyword": "mental health lead in schools",
        "cluster": "Ahrefs mental health in schools cluster",
        "ahrefs_note": "Builds from saved Ahrefs GB data for `mental health in schools` volume 300, KD 22.",
        "intent": "help schools avoid leaving wellbeing responsibility with one named person and build a shared support structure",
        "audience": "principals, senior leaders, designated teachers, pastoral leads, governors and wellbeing coordinators",
        "problem": "Naming a mental health lead can be useful, but it does not solve the whole-school challenge by itself. The role needs time, leadership backing, safeguarding clarity and staff routines around it.",
        "signs": ["one person becomes the default wellbeing answer", "staff are unsure what the mental health lead can or cannot do", "pupil need is increasing faster than systems can respond", "wellbeing work is separate from school improvement planning"],
        "actions": ["define the role and its boundaries", "connect it with safeguarding and pastoral systems", "give staff shared scripts and referral routes", "review patterns rather than only reacting to incidents"],
        "workshop": "HIP Psychology can help leaders make mental health roles practical, boundaried and useful. Training should support the whole staff team, not create a single overloaded wellbeing owner.",
        "external": ["de_wellbeing", "de_safeguarding"],
    },
    {
        "slug": "educational-psychology-support-schools-ni",
        "title": "Educational Psychology Support for Schools in Northern Ireland: When to Ask for Help",
        "keyword": "educational psychology support schools northern ireland",
        "cluster": "Ahrefs educational psychology / Northern Ireland cluster",
        "ahrefs_note": "Builds from saved Ahrefs GB data for `educational psychologist northern ireland` volume 50, KD 1, parent topic `educational psychology`.",
        "intent": "help schools understand when they need external psychology-informed support, assessment signposting or staff consultation",
        "audience": "principals, SENCOs, pastoral teams, classroom teachers and families comparing support options",
        "problem": "Schools may know a pupil or staff team needs more than ordinary advice, but may not be sure whether the next step is consultation, staff training, family communication, assessment signposting or specialist referral.",
        "signs": ["classroom strategies have been tried but the concern persists", "staff disagree about what is driving the difficulty", "family and school views need brought together", "the pupil needs a more joined-up plan"],
        "actions": ["write down what has already been tried", "separate learning, emotional and environmental factors", "agree what question support needs to answer", "keep safeguarding and referral routes clear"],
        "workshop": "HIP Psychology can help schools think clearly about pupil need, staff confidence and practical support. Where a concern requires statutory assessment or specialist clinical input, schools should use the appropriate referral route.",
        "external": ["de_wellbeing", "de_safeguarding"],
    },
    {
        "slug": "whole-school-wellbeing-audit",
        "title": "Whole-School Wellbeing Audit: A Practical Starting Point for Better Support",
        "keyword": "whole school wellbeing audit",
        "cluster": "Ahrefs wellbeing in schools / school wellbeing programme cluster",
        "ahrefs_note": "Supports saved Ahrefs opportunity around `school wellbeing programme` and the broader `wellbeing in schools` cluster.",
        "intent": "help school leaders review wellbeing provision before choosing another programme, workshop or policy update",
        "audience": "principals, senior leaders, governors, pastoral leaders, SENCOs and wellbeing teams",
        "problem": "Schools can have lots of wellbeing activity without a clear picture of what is working. An audit helps leaders see strengths, gaps, duplication and pressure points before adding more work to staff.",
        "signs": ["wellbeing activity is busy but hard to evaluate", "staff are unsure which support route to use", "pupil voice and parent feedback are not joined up", "leaders want a clearer plan for the next term"],
        "actions": ["map current pupil, staff and parent support", "check how concerns move through the system", "review staff confidence and workload impact", "choose a small number of measurable next steps"],
        "workshop": "HIP Psychology can help schools audit their wellbeing provision and turn the findings into a practical improvement plan. The aim is to make the next step clearer, lighter and more joined up.",
        "external": ["de_wellbeing", "education_support"],
    },
]

INTERNAL_LINKS = [
    ("pupil wellbeing strategy", "/pupil-wellbeing-strategy-schools/"),
    ("pastoral support in schools", "/pastoral-support-in-schools/"),
    ("school wellbeing programme", "/school-wellbeing-programme-northern-ireland/"),
    ("mental health in schools", "/mental-health-in-schools/"),
    ("wellbeing in schools", "/wellbeing-in-schools/"),
    ("mental health training for teachers", "/mental-health-training-for-teachers/"),
    ("staff wellbeing training", "/staff-wellbeing-training-for-schools/"),
    ("trauma-informed practice", "/trauma-informed-practice-in-schools/"),
    ("emotional regulation strategies", "/emotional-regulation-strategies-schools/"),
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
            f"What should schools do before starting {topic['keyword']} work?",
            "Start by agreeing the need, the intended outcome, who is responsible and how progress will be reviewed. A small clear plan is usually better than a broad activity with no follow-up.",
        ),
        (
            "Is this a replacement for therapy or statutory assessment?",
            "No. School wellbeing workshops and psychology-informed consultation support early help, staff confidence and planning. Pupils with significant or persistent needs may need appropriate referral routes.",
        ),
        (
            "Who should be involved?",
            "The strongest results usually come when senior leaders, pastoral staff, teachers, classroom assistants and safeguarding leads use the same language and know the same next steps.",
        ),
        (
            "How can HIP Psychology help?",
            "HIP Psychology can support schools with workshops, staff training, consultation and whole-school wellbeing planning that turns concern into practical next steps.",
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
    html.append(paragraph(f"{topic['title']} is part of HIP Psychology's school wellbeing support for {topic['audience']}. It sits in the {topic['cluster']} and focuses on one practical question: how can schools turn concern into clear, safe next steps?"))
    html.append(paragraph(f"This article is designed to {topic['intent']}. It should help school teams make decisions without turning teachers into therapists or leaving pastoral work to one overloaded person."))
    html.append("<h2>Why this keyword cluster matters</h2>")
    html.append(paragraph(topic["ahrefs_note"]))
    html.append(paragraph(topic["problem"]))
    html.append("<h2>Common signs the school may need a clearer plan</h2>")
    html.append(paragraph("The signs will vary by age and setting, but repeated patterns are worth noticing before staff become stretched or pupils become more distressed."))
    html.append(list_html(topic["signs"]))
    html.append("<h2>Start with the pattern, not the label</h2>")
    html.append(paragraph("Good school wellbeing work starts by looking at when the concern happens, where it happens, what has already been tried and what would count as a realistic improvement. That keeps the response practical and avoids over-pathologising normal stress."))
    html.append("<h2>Practical steps schools can take</h2>")
    html.append(paragraph("A useful plan should be simple enough to use in a busy school week. It should tell staff what to do, when to review it and when the concern needs escalated."))
    html.append(list_html(topic["actions"]))
    html.append("<h2>How this links to safeguarding and pastoral care</h2>")
    html.append(paragraph("Wellbeing support should never blur safeguarding duties. Staff should avoid promising confidentiality, should record concerns through agreed systems and should know when ordinary pastoral support is no longer enough."))
    html.append(paragraph("This is why shared language matters. When staff use the same words and routes, pupils and families get a calmer, clearer response."))
    html.append("<h2>What workshops or staff training should include</h2>")
    html.append(paragraph(topic["workshop"]))
    html.append(paragraph("Training should leave staff with language, examples and next steps they can use immediately. It should also help leaders decide how the work connects to existing policies, pupil support and staff wellbeing."))
    html.append("<h2>Useful guidance to align with</h2>")
    html.append("<p>Schools can connect this work with existing guidance, including " + " and ".join(external) + ".</p>")
    html.append("<h2>How HIP Psychology can support your school</h2>")
    html.append(paragraph("HIP Psychology works with schools across Northern Ireland and Ireland through pupil workshops, staff training and practical school wellbeing support. The goal is to make emotional health work easier to understand and easier to use."))
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
    return f"A practical school guide to {topic['keyword']}, with signs to notice, staff actions, safe escalation and HIP Psychology workshop support."


def wp_posts(params: dict) -> requests.Response:
    return requests.get(f"{API}/posts", params=params, auth=wp_auth(), timeout=30)


def existing_slugs() -> set[str]:
    slugs: set[str] = set()
    for page in range(1, 8):
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
    h1_count = len(re.findall(r"<h1\b", html, flags=re.I))
    h2_count = len(re.findall(r"<h2\b", html, flags=re.I))
    leak_markers = [
        "TODO",
        "Draft",
        "source_file",
        "Target keyword:",
        "primary_keyword:",
        "AHREFS_API_TOKEN",
        "HIP_WP_APP_PASSWORD",
    ]
    return {
        "url": row["url"],
        "http_status": response.status_code,
        "h1_count": h1_count,
        "h2_count": h2_count,
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
        "# HIP Psychology Ahrefs Content Blast - 2026-06-03",
        "",
        f"{AHREFS_SOURCE}",
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
        "- No Google Search Console URL submission.",
        "- No social/email promotion.",
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
