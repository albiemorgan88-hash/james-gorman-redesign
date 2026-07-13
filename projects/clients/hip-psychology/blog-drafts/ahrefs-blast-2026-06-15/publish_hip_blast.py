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
    "Ahrefs source: unpublished 2026-06-11 HIP keyword pull. Site Explorer showed DR 7, "
    "199 live referring domains, 292 live backlinks, 3 visible GB organic keywords and 4 "
    "estimated organic visits. Keyword overview highlights included `senco training` "
    "(GB vol 600, KD 1), `pastoral care in schools` (GB vol 600, KD 0), `emotionally "
    "based school avoidance` (GB vol 600, KD 2), `school avoidance anxiety` "
    "(GB vol 300, KD 11), `trauma informed practice in schools` (GB vol 100, KD 1), "
    "`staff wellbeing in schools` (GB vol 100, KD 12), and supporting long-tail staff "
    "training, SENCO, trauma-informed classroom and mental-health-first-aid topics."
)

OFFICIAL_LINKS = {
    "senco": "https://www.education-ni.gov.uk/articles/special-educational-needs-sen",
    "send_code": "https://www.gov.uk/government/publications/send-code-of-practice-0-to-25",
    "attendance": "https://www.education-ni.gov.uk/articles/school-attendance",
    "pastoral": "https://www.education-ni.gov.uk/articles/derrytrasna-pastoral-care-awards",
    "safeguarding": "https://www.education-ni.gov.uk/publications/safeguarding-and-child-protection-schools-guide-schools",
    "wellbeing": "https://www.education-ni.gov.uk/articles/children-and-young-peoples-emotional-health-and-wellbeing-education",
}

EXT_LABELS = {
    "senco": "Department of Education SEN guidance",
    "send_code": "SEND code of practice",
    "attendance": "Department of Education school attendance guidance",
    "pastoral": "Department of Education pastoral care context",
    "safeguarding": "Department of Education safeguarding guidance",
    "wellbeing": "Department of Education emotional health and wellbeing guidance",
}

TOPICS = [
    {
        "slug": "senco-training-for-school-wellbeing",
        "title": "SENCO Training for School Wellbeing: What Staff Need to Know",
        "keyword": "senco training",
        "cluster": "SENCO and school wellbeing",
        "ahrefs_note": "Ahrefs GB volume 600, KD 1, traffic potential 350.",
        "audience": "SENCOs, pastoral leaders, heads of year, classroom staff and senior leaders",
        "intent": "help schools connect SENCO training with pupil wellbeing, staff confidence and practical support routes",
        "problem": "SENCO work is often treated as paperwork, but the real school impact is wider. Staff need to understand need, confidence, regulation, communication and when a pupil's behaviour may be connected to an unmet support need.",
        "signs": [
            "staff ask the SENCO the same pupil-support questions repeatedly",
            "reasonable adjustments are inconsistent between classrooms",
            "pastoral and SEN information sit in separate systems",
            "parents are asking for clearer support plans",
        ],
        "actions": [
            "agree shared language around need, adjustment and escalation",
            "make support strategies visible to relevant staff",
            "connect SENCO input with pastoral and attendance conversations",
            "review what teachers need to feel confident day to day",
        ],
        "workshop": "HIP Psychology can support staff development that helps SENCO, pastoral and classroom teams use psychologically informed language around pupil need.",
        "external": ["senco", "send_code"],
    },
    {
        "slug": "senco-support-and-pupil-wellbeing",
        "title": "SENCO Support and Pupil Wellbeing: A Practical School Guide",
        "keyword": "senco support",
        "cluster": "SENCO and school wellbeing",
        "ahrefs_note": "Ahrefs GB volume 80, KD 22.",
        "audience": "SENCOs, wellbeing leads, pastoral teams and senior leaders",
        "intent": "show how SENCO support can sit alongside pupil wellbeing instead of being treated as a separate strand",
        "problem": "Many pupils who need SENCO input also experience worry, low confidence, sensory stress, friendship pressure or attendance difficulty. Support works best when those strands are joined up.",
        "signs": [
            "pupils receive academic adjustments but still feel overwhelmed",
            "staff are unsure whether concerns are SEN, pastoral, attendance or safeguarding",
            "families repeat the same story to different staff members",
            "support plans do not translate into classroom routines",
        ],
        "actions": [
            "map the pupil's learning, emotional and environmental needs together",
            "turn support plans into practical classroom habits",
            "agree when pastoral staff and the SENCO should review a case jointly",
            "include pupil voice where it is safe and appropriate",
        ],
        "workshop": "HIP Psychology helps schools think practically about pupil wellbeing, neurodiversity-aware support and staff confidence.",
        "external": ["senco", "wellbeing"],
    },
    {
        "slug": "mental-health-first-aid-in-schools-guide",
        "title": "Mental Health First Aid in Schools: What It Can and Cannot Do",
        "keyword": "mental health first aid in schools",
        "cluster": "Staff training and role clarity",
        "ahrefs_note": "Ahrefs GB volume 10, CPC 60.",
        "audience": "school leaders, pastoral teams, designated teachers and staff wellbeing leads",
        "intent": "help schools position mental health first aid safely inside wider pastoral and safeguarding systems",
        "problem": "Mental health first aid can be useful, but it is not a full mental health strategy. Staff need clear boundaries, escalation routes and confidence about what support is appropriate in school.",
        "signs": [
            "staff are worried about saying the wrong thing",
            "pupil disclosures are becoming more frequent",
            "leaders want training but need safe role boundaries",
            "support depends too heavily on a small number of adults",
        ],
        "actions": [
            "define what staff should notice, say, record and escalate",
            "connect training with safeguarding and pastoral procedures",
            "avoid implying teachers should become therapists",
            "include staff debriefing and supervision after difficult incidents",
        ],
        "workshop": "HIP Psychology can provide practical school mental health training that keeps role clarity and staff wellbeing at the centre.",
        "external": ["safeguarding", "wellbeing"],
    },
    {
        "slug": "ebsa-training-for-school-staff",
        "title": "EBSA Training for School Staff: Building a Calmer Response",
        "keyword": "ebsa training schools",
        "cluster": "Emotionally based school avoidance",
        "ahrefs_note": "Supports Ahrefs-confirmed `emotionally based school avoidance` at GB volume 600, KD 2.",
        "audience": "pastoral teams, attendance leads, SENCOs, form tutors and senior leaders",
        "intent": "help schools train staff to respond to emotionally based school avoidance with warmth, structure and consistency",
        "problem": "EBSA can become stuck when school, home and pupil all feel anxious. Training helps staff avoid panic, blame or sudden pressure and instead build small, planned steps back toward attendance.",
        "signs": [
            "attendance dips are linked to anxiety or distress",
            "families describe morning battles or Sunday-night worry",
            "staff disagree about whether to push or pause",
            "a pupil returns briefly and then withdraws again",
        ],
        "actions": [
            "separate emotional barriers from behaviour labels",
            "agree a staged return plan with clear roles",
            "identify safe adults, safe spaces and predictable routines",
            "review progress without shaming the pupil or family",
        ],
        "workshop": "HIP Psychology can support schools with EBSA-aware training that balances empathy, boundaries and practical attendance planning.",
        "external": ["attendance", "wellbeing"],
    },
    {
        "slug": "school-avoidance-anxiety-support",
        "title": "School Avoidance Anxiety: How Schools Can Respond Early",
        "keyword": "school avoidance anxiety",
        "cluster": "Emotionally based school avoidance",
        "ahrefs_note": "Ahrefs GB volume 300, KD 11, traffic potential 2400.",
        "audience": "attendance leads, pastoral staff, Year heads, SENCOs and school leaders",
        "intent": "help schools notice school avoidance anxiety early and respond before absence becomes embedded",
        "problem": "School avoidance anxiety often grows through repeated cycles of worry, relief and missed learning. Early support should reduce shame and create a manageable route back into school life.",
        "signs": [
            "physical complaints increase before school",
            "attendance drops around certain lessons, days or transitions",
            "a pupil becomes distressed after weekends or holidays",
            "parents are unsure whether reassurance is helping",
        ],
        "actions": [
            "look for patterns rather than treating each absence separately",
            "use small achievable attendance steps",
            "make the first point of contact predictable",
            "combine emotional support with clear routines",
        ],
        "workshop": "HIP Psychology can help staff build shared language around anxiety, attendance and gradual re-engagement.",
        "external": ["attendance", "wellbeing"],
    },
    {
        "slug": "trauma-informed-practice-schools-guide",
        "title": "Trauma-Informed Practice in Schools: A Guide for Staff Teams",
        "keyword": "trauma informed practice in schools",
        "cluster": "Trauma-informed school support",
        "ahrefs_note": "Ahrefs GB volume 100, KD 1, traffic potential 600.",
        "audience": "teachers, classroom assistants, pastoral teams, safeguarding leads and senior leaders",
        "intent": "help staff understand trauma-informed practice without losing boundaries, expectations or learning focus",
        "problem": "Trauma-informed practice is sometimes misunderstood as lowering expectations. In reality, it helps staff respond to behaviour, distress and relationships with more understanding and more consistency.",
        "signs": [
            "staff see repeated fight, flight, freeze or shutdown responses",
            "some pupils escalate quickly after correction",
            "relationships repair slowly after incidents",
            "staff want practical language rather than theory alone",
        ],
        "actions": [
            "use predictable routines and calm adult responses",
            "separate behaviour from the pupil's identity",
            "plan repair after incidents",
            "protect staff support so adults can stay regulated too",
        ],
        "workshop": "HIP Psychology can deliver trauma-informed staff input that is realistic for busy school settings.",
        "external": ["safeguarding", "wellbeing"],
    },
    {
        "slug": "trauma-informed-training-for-school-staff",
        "title": "Trauma-Informed Training for Teachers: What Should Be Included?",
        "keyword": "trauma informed training for teachers",
        "cluster": "Trauma-informed school support",
        "ahrefs_note": "Ahrefs GB volume 40, CPC 50.",
        "audience": "teachers, support staff, pastoral leads and senior leaders",
        "intent": "help schools choose trauma-informed training that turns understanding into classroom and pastoral practice",
        "problem": "Training is only useful if staff can apply it on a difficult school day. Teachers need simple frameworks, examples, scripts and clarity about safeguarding boundaries.",
        "signs": [
            "staff want to understand behaviour without excusing harm",
            "behaviour plans are not helping some pupils recover",
            "staff feel emotionally drained after repeated incidents",
            "leaders want a whole-staff shared language",
        ],
        "actions": [
            "include practical classroom scenarios",
            "teach regulation and repair, not only trauma theory",
            "link the training to safeguarding procedures",
            "agree what staff should do after a difficult incident",
        ],
        "workshop": "HIP Psychology supports schools with staff training that links trauma-informed thinking to everyday routines and pastoral care.",
        "external": ["safeguarding", "wellbeing"],
    },
    {
        "slug": "trauma-informed-classroom-strategies",
        "title": "Trauma-Informed Classroom Strategies: Practical Steps for Teachers",
        "keyword": "trauma informed classroom",
        "cluster": "Trauma-informed school support",
        "ahrefs_note": "Ahrefs GB volume 50, KD 3.",
        "audience": "classroom teachers, classroom assistants, SENCOs and pastoral teams",
        "intent": "give staff practical classroom strategies that support safety, predictability and learning",
        "problem": "Teachers need strategies that fit a real classroom, not a perfect training-room example. The aim is calm consistency, not a different response for every pupil every lesson.",
        "signs": [
            "some pupils find transitions or uncertainty difficult",
            "small corrections lead to large reactions",
            "staff are unsure how to repair after conflict",
            "pupils need repeated reminders to feel safe and ready",
        ],
        "actions": [
            "preview changes and transitions",
            "use private correction where possible",
            "offer structured choices",
            "build short repair conversations after incidents",
        ],
        "workshop": "HIP Psychology can help staff teams choose classroom strategies that are compassionate, boundaried and manageable.",
        "external": ["safeguarding", "wellbeing"],
    },
    {
        "slug": "pastoral-care-in-schools-guide",
        "title": "Pastoral Care in Schools: What Strong Support Looks Like",
        "keyword": "pastoral care in schools",
        "cluster": "Pastoral care and wellbeing",
        "ahrefs_note": "Ahrefs GB volume 600, KD 0, traffic potential 400.",
        "audience": "pastoral leaders, form tutors, heads of year, classroom staff and senior leaders",
        "intent": "define strong pastoral care in a way that helps staff coordinate support across the school",
        "problem": "Pastoral care can become reactive if schools only respond once distress, behaviour or attendance concerns have escalated. Strong provision is planned, visible and shared.",
        "signs": [
            "the same pupils are discussed repeatedly without a clear plan",
            "staff are unsure who owns follow-up",
            "pupil voice is gathered but not translated into action",
            "pastoral teams feel stretched by avoidable escalation",
        ],
        "actions": [
            "define universal, targeted and specialist support",
            "make recording and escalation routes simple",
            "connect pastoral care with attendance, SEN and safeguarding",
            "review patterns termly rather than relying on crisis response",
        ],
        "workshop": "HIP Psychology can support pastoral teams with training, workshops and whole-school wellbeing planning.",
        "external": ["pastoral", "wellbeing"],
    },
    {
        "slug": "staff-wellbeing-training-plan-schools",
        "title": "Staff Wellbeing Training Plan: A Practical Model for Schools",
        "keyword": "teacher wellbeing training",
        "cluster": "Staff wellbeing and training",
        "ahrefs_note": "Ahrefs GB volume 40; supports `staff wellbeing in schools` at GB volume 100, KD 12.",
        "audience": "senior leaders, staff wellbeing leads, heads of department and pastoral managers",
        "intent": "help schools build staff wellbeing training into a realistic plan rather than a one-off session",
        "problem": "Staff wellbeing training can become tokenistic when it ignores workload, culture, communication and emotional load. A useful plan gives staff practical tools and gives leaders useful feedback.",
        "signs": [
            "staff surveys identify pressure but actions are unclear",
            "wellbeing work is limited to one-off events",
            "middle leaders are absorbing repeated emotional strain",
            "absence or morale concerns are rising",
        ],
        "actions": [
            "start with staff pressure points",
            "choose one practical training theme per term",
            "connect training with leadership decisions",
            "review whether staff feel more supported afterwards",
        ],
        "workshop": "HIP Psychology can deliver staff wellbeing training that is practical, compassionate and linked to school reality.",
        "external": ["wellbeing", "pastoral"],
    },
]

INTERNAL_LINKS = [
    ("emotionally based school avoidance", "/emotionally-based-school-avoidance/"),
    ("student anxiety in schools", "/student-anxiety-in-schools/"),
    ("mental health in schools", "/mental-health-in-schools/"),
    ("pastoral care training", "/pastoral-care-training-schools/"),
    ("pastoral support in schools", "/pastoral-support-in-schools/"),
    ("trauma-informed schools", "/trauma-informed-schools/"),
    ("staff wellbeing in schools", "/staff-wellbeing-in-schools/"),
    ("neurodiversity in schools", "/neurodiversity-in-schools/"),
    ("wellbeing workshops", "/workshops/"),
    ("contact HIP Psychology", "/contact-us/"),
]


def wp_auth() -> HTTPBasicAuth:
    return HTTPBasicAuth(os.environ["HIP_WP_USERNAME"], os.environ["HIP_WP_APP_PASSWORD"])


def paragraph(text: str) -> str:
    return f"<p>{escape(text)}</p>"


def list_html(items: list[str]) -> str:
    return "<ul>" + "".join(f"<li>{escape(item[:1].upper() + item[1:] if item else item)}</li>" for item in items) + "</ul>"


def related_links(current_slug: str) -> str:
    links = []
    for label, href in INTERNAL_LINKS:
        if href.strip("/") != current_slug:
            links.append(f'<a href="{href}">{escape(label)}</a>')
    return ", ".join(links[:7])


def make_content(topic: dict) -> str:
    faq = [
        (
            f"What should schools decide before acting on {topic['keyword']}?",
            "Agree the pupils or staff affected, the support route, the adults responsible for follow-up, and what a realistic next step should look like.",
        ),
        (
            "How can this work stay safe for pupils and staff?",
            "Use clear boundaries, avoid public disclosure, follow safeguarding procedures, record concerns appropriately and make support routes visible.",
        ),
        (
            "Is a single workshop enough?",
            "A workshop can start the work, but impact is stronger when leaders connect it to pastoral care, staff routines, pupil voice and review points.",
        ),
        (
            "How can HIP Psychology help?",
            "HIP Psychology can support schools with pupil workshops, staff training, pastoral planning and psychologically informed wellbeing support.",
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

    html: list[str] = []
    html.append(paragraph(f"{topic['title']} is a practical guide for {topic['audience']}. It focuses on how schools can {topic['intent']}."))
    html.append(paragraph(f"This page supports the {topic['cluster']} cluster. {topic['ahrefs_note']}"))
    html.append("<h2>Why this matters for schools</h2>")
    html.append(paragraph(topic["problem"]))
    html.append(paragraph("The useful test is whether staff know what to notice, what to say, what to record and who should act next. Good support should feel calm, joined up and realistic on a busy school day."))
    html.append("<h2>Common signs this needs attention</h2>")
    html.append(paragraph("Every school context is different, but repeated patterns are worth noticing before pupils, families or staff feel stuck."))
    html.append(list_html(topic["signs"]))
    html.append("<h2>What schools should decide first</h2>")
    html.append(paragraph("Before booking training, planning a workshop or changing provision, leaders should agree the purpose, the people involved, the follow-up route and the limits of the support."))
    html.append(list_html(topic["actions"]))
    html.append("<h2>How this connects to pastoral care</h2>")
    html.append(paragraph("The topic should sit alongside pastoral care, safeguarding procedures, attendance support, SEN coordination and everyday classroom relationships. That keeps the response from becoming isolated or dependent on one person."))
    html.append("<h2>What staff need in practice</h2>")
    html.append(paragraph("Staff usually need shared language, simple scenarios, clear thresholds and permission to seek help early. Training should reduce uncertainty rather than add another responsibility without structure."))
    html.append("<h2>How HIP Psychology can support this work</h2>")
    html.append(paragraph(topic["workshop"]))
    html.append(paragraph("HIP Psychology works with schools across Northern Ireland and Ireland through pupil workshops, staff training, assemblies and whole-school wellbeing support."))
    html.append("<h2>Useful guidance to align with</h2>")
    html.append("<p>Schools can connect this work with existing guidance and resources, including " + " and ".join(external) + ".</p>")
    html.append("<h2>Related HIP Psychology resources</h2>")
    html.append("<p>Useful related HIP resources include " + related_links(topic["slug"]) + ".</p>")
    html.append('<p><strong>Need help planning the next step?</strong> <a href="/contact-us/">Contact HIP Psychology</a> to discuss workshops, staff training or whole-school wellbeing support.</p>')
    html.append("<h2>FAQs</h2>")
    for question, answer in faq:
        html.append(f"<h3>{escape(question)}</h3>")
        html.append(paragraph(answer))
    html.append(f'<script type="application/ld+json">{json.dumps(faq_schema, ensure_ascii=False)}</script>')
    html.append(f'<script type="application/ld+json">{json.dumps(article_schema, ensure_ascii=False)}</script>')
    return "\n".join(html)


def excerpt(topic: dict) -> str:
    return f"A practical school guide to {topic['keyword']}, with signs to notice, safe planning steps, staff roles and HIP Psychology support."


def wp_posts(params: dict) -> requests.Response:
    return requests.get(f"{API}/posts", params=params, auth=wp_auth(), timeout=30)


def existing_slugs() -> set[str]:
    slugs: set[str] = set()
    for page in range(1, 20):
        response = wp_posts({"per_page": 100, "page": page, "_fields": "slug", "status": "publish,draft,pending,private"})
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
        "PJ",
        "Albie",
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
        "# HIP Psychology Ahrefs Content Blast - 2026-06-15",
        "",
        AHREFS_SOURCE,
        "",
        "## Keyword Clusters Picked",
    ]
    for row in published:
        lines.append(f"- `{row['target_keyword']}` - {row['cluster']}. {row['ahrefs_note']}")
    lines += ["", "## New Live Posts"]
    for row in published:
        lines.append(f"- [{row['title']}]({row['url']}) - `{row['target_keyword']}`")
    lines += [
        "",
        "## QA",
        f"- Failures: {len(qa['failures'])}",
        "- Checks: HTTP 200, WordPress publish status, one H1, H2 sections present, FAQPage + Article schema, contact CTA, latest REST feed, WP post sitemap, no draft/source/secret/name leak markers.",
        "",
        "## Raw Data",
        "- `../ahrefs-blast-2026-06-11/ahrefs-site-explorer-2026-06-11.json`",
        "- `../ahrefs-blast-2026-06-11/ahrefs-keyword-overview-bulk-2026-06-11.json`",
        "- `../ahrefs-blast-2026-06-11/ahrefs-keyword-overview-candidates-2026-06-11.json`",
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
