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
    "snapshot from 2026-06-01. This 2026-06-04 batch extends the live Ahrefs-visible wins for pupil wellbeing "
    "and pastoral support without duplicating the 2026-06-03 posts."
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
        "slug": "pupil-wellbeing-action-plan",
        "title": "Pupil Wellbeing Action Plan: Turning Concern Into Practical School Steps",
        "keyword": "pupil wellbeing action plan",
        "cluster": "Ahrefs-visible pupil wellbeing cluster",
        "ahrefs_note": "Supports the early Ahrefs-visible `pupil wellbeing` win at position 10, volume 80, KD 1 on 2026-06-01.",
        "intent": "help school leaders turn wellbeing concern, survey findings and staff observations into a small set of visible actions",
        "audience": "principals, pastoral leaders, SENCOs, wellbeing coordinators and school improvement teams",
        "problem": "Schools often know pupil wellbeing needs attention, but the next step can become too broad. A pupil wellbeing action plan should name the concern, agree practical adult actions and set a review point.",
        "signs": ["wellbeing appears in improvement planning but staff are unsure what changes this term", "pupil voice has created useful themes but no clear next action", "pastoral teams are carrying repeated concerns without a shared plan", "leaders need a simple way to review progress"],
        "actions": ["choose one or two priority patterns", "agree what adults will do differently", "set a review date before adding new activity", "make the plan visible to the staff who will use it"],
        "workshop": "HIP Psychology can help schools turn pupil wellbeing themes into practical action planning. The aim is to make support specific, realistic and easy for staff to understand.",
        "external": ["de_wellbeing", "de_safeguarding"],
    },
    {
        "slug": "pupil-wellbeing-questionnaire-schools",
        "title": "Pupil Wellbeing Questionnaire for Schools: Asking Questions That Lead to Support",
        "keyword": "pupil wellbeing questionnaire schools",
        "cluster": "Ahrefs-visible pupil wellbeing cluster",
        "ahrefs_note": "Companion support for the `pupil wellbeing` ranking and the 2026-06-03 pupil wellbeing survey article.",
        "intent": "help schools design pupil wellbeing questions that lead to useful action instead of collecting vague reassurance",
        "audience": "principals, pastoral leaders, SENCOs, year heads, wellbeing coordinators and school improvement teams",
        "problem": "A pupil wellbeing questionnaire can create useful insight, but only if questions are safe, clear and connected to decisions. If the wording is too vague, leaders can end up with data that is difficult to act on.",
        "signs": ["previous surveys produced interesting answers but little change", "pupils have raised concerns informally", "leaders need a clearer picture across year groups", "staff are unsure how pupil voice should shape support"],
        "actions": ["ask questions linked to decisions the school can make", "separate everyday wellbeing from safeguarding concerns", "keep language age-appropriate", "tell pupils what will happen after they answer"],
        "workshop": "HIP Psychology can support schools with pupil voice, wellbeing questionnaires and practical follow-up. The strongest questionnaires are not about gathering more data; they help staff decide what to do next.",
        "external": ["de_wellbeing", "de_safeguarding"],
    },
    {
        "slug": "pastoral-interventions-in-schools",
        "title": "Pastoral Interventions in Schools: Choosing Support That Matches the Need",
        "keyword": "pastoral interventions in schools",
        "cluster": "Ahrefs-visible pastoral support cluster",
        "ahrefs_note": "Supports the early Ahrefs-visible `define pastoral support` win at position 7, volume 40, KD 0 on 2026-06-01.",
        "intent": "help pastoral teams choose support that fits the pattern rather than using the same response for every pupil concern",
        "audience": "pastoral leaders, heads of year, safeguarding leads, SENCOs, classroom teachers and senior leaders",
        "problem": "Pastoral intervention is often used as a general label. In practice, different pupils may need check-ins, family communication, classroom adjustments, small-group work, safeguarding escalation or specialist signposting.",
        "signs": ["the same intervention is being used for very different needs", "pupils improve briefly but the pattern returns", "staff are unsure what progress should look like", "support depends too heavily on one trusted adult"],
        "actions": ["name the pattern before choosing the intervention", "decide what change should be visible", "connect support back to class routines", "review whether the intervention is still the right fit"],
        "workshop": "HIP Psychology can help pastoral teams map needs, choose practical interventions and keep support boundaried. That helps staff avoid drift and gives pupils more consistent support.",
        "external": ["de_safeguarding", "de_wellbeing"],
    },
    {
        "slug": "pastoral-care-policy-schools",
        "title": "Pastoral Care Policy for Schools: Making Support Clear, Practical and Safe",
        "keyword": "pastoral care policy schools",
        "cluster": "Pastoral support and safeguarding cluster",
        "ahrefs_note": "Companion page for the `define pastoral support` ranking and the wider pastoral care training content cluster.",
        "intent": "help schools review whether pastoral policy is clear enough for staff to use in real situations",
        "audience": "principals, governors, safeguarding leads, pastoral leaders, SENCOs and senior leadership teams",
        "problem": "A pastoral care policy can look complete on paper but still fail to guide everyday decisions. Staff need simple language about concerns, recording, escalation, family communication and support routes.",
        "signs": ["policy exists but staff rely on informal routes", "different year groups handle similar concerns differently", "families receive mixed messages", "staff are unclear where pastoral care ends and safeguarding escalation begins"],
        "actions": ["check the policy against real scenarios", "make routes and responsibilities explicit", "link pastoral care with safeguarding and SEN systems", "build review into staff training rather than leaving policy unread"],
        "workshop": "HIP Psychology can support staff teams to connect policy with practical pastoral response. The useful test is whether the policy helps staff know what to do on a busy school day.",
        "external": ["de_wellbeing", "de_safeguarding"],
    },
    {
        "slug": "school-wellbeing-calendar",
        "title": "School Wellbeing Calendar: Planning Support Without Overloading Staff",
        "keyword": "school wellbeing calendar",
        "cluster": "Wellbeing in schools and school wellbeing programme cluster",
        "ahrefs_note": "Builds from saved Ahrefs opportunities around `wellbeing in schools` and `school wellbeing programme`.",
        "intent": "help schools plan wellbeing themes across the year without turning support into a disconnected list of awareness days",
        "audience": "principals, pastoral leaders, wellbeing coordinators, year heads, staff-development leads and school improvement teams",
        "problem": "Schools can become very busy with wellbeing activity while still lacking a clear rhythm. A calendar should connect workshops, assemblies, staff training, pupil voice and review points.",
        "signs": ["wellbeing activity feels reactive", "awareness weeks are planned late", "staff training is separate from pupil support", "leaders cannot see how themes build across the year"],
        "actions": ["map predictable pressure points", "choose fewer themes and connect them properly", "include staff support as well as pupil activity", "review what worked before adding more events"],
        "workshop": "HIP Psychology can help schools design a realistic wellbeing calendar that supports pupils and staff without creating more noise. Planning should make the year feel clearer, not heavier.",
        "external": ["de_wellbeing", "ccea_llw"],
    },
    {
        "slug": "staff-confidence-pupil-wellbeing",
        "title": "Staff Confidence With Pupil Wellbeing: Helping Adults Know What to Do Next",
        "keyword": "staff confidence pupil wellbeing",
        "cluster": "Staff training, pupil wellbeing and pastoral support cluster",
        "ahrefs_note": "Companion support for saved opportunities around `staff training schools wellbeing`, `pupil wellbeing` and `mental health training for teachers`.",
        "intent": "help schools build staff confidence without expecting every adult to become a specialist",
        "audience": "principals, staff-development leads, pastoral leaders, classroom teachers, classroom assistants and SENCOs",
        "problem": "Many staff care deeply about pupil wellbeing but feel unsure about wording, boundaries and escalation. Confidence grows when adults know what to notice, what to say and where to take concerns.",
        "signs": ["staff avoid wellbeing conversations because they fear saying the wrong thing", "pastoral concerns are passed on without enough context", "classroom teachers are unsure what is within their role", "leaders want shared language across the school"],
        "actions": ["give staff simple scripts and boundaries", "clarify recording and escalation routes", "use realistic school scenarios in training", "connect classroom practice with pastoral systems"],
        "workshop": "HIP Psychology staff training can help adults respond calmly and consistently to pupil wellbeing concerns. The aim is confidence, shared language and safe next steps, not specialist pressure on every teacher.",
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
        "# HIP Psychology Ahrefs Content Blast - 2026-06-04",
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
