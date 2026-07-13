#!/usr/bin/env python3
from __future__ import annotations

import datetime as dt
import json
import os
import re
import time
from html import escape
from pathlib import Path

import requests
from requests.auth import HTTPBasicAuth

SITE = "https://hippsychology.com"
API = f"{SITE}/wp-json/wp/v2"
OUT = Path(__file__).resolve().parent
CATEGORY_SCHOOL_WELLBEING = 24

SOURCE_NOTE = (
    "Ahrefs pull 2026-06-17: HIP Psychology DR 7.0, 301 live backlinks, "
    "207 live referring domains, 4 GB organic keywords, estimated organic "
    "traffic 5. Visible ranking pages included pupil wellbeing strategy, "
    "pastoral support, and emotion coaching. This batch expands adjacent "
    "school wellbeing, behaviour, supervision, safeguarding and resilience "
    "clusters."
)

OFFICIAL_LINKS = {
    "safeguarding": (
        "Department of Education safeguarding guidance",
        "https://www.education-ni.gov.uk/publications/safeguarding-and-child-protection-schools-guide-schools",
    ),
    "wellbeing": (
        "Department of Education emotional health and wellbeing guidance",
        "https://www.education-ni.gov.uk/articles/children-and-young-peoples-emotional-health-and-wellbeing-education",
    ),
    "sen": (
        "Department of Education SEN guidance",
        "https://www.education-ni.gov.uk/articles/special-educational-needs-sen",
    ),
    "attendance": (
        "Department of Education school attendance guidance",
        "https://www.education-ni.gov.uk/articles/school-attendance",
    ),
    "pastoral": (
        "Department of Education pastoral care context",
        "https://www.education-ni.gov.uk/articles/derrytrasna-pastoral-care-awards",
    ),
}

INTERNAL_LINKS = [
    ("pupil wellbeing strategy", "/pupil-wellbeing-strategy-schools/"),
    ("pastoral support in schools", "/pastoral-support-in-schools/"),
    ("emotion coaching in schools", "/emotion-coaching-in-schools/"),
    ("student anxiety in schools", "/student-anxiety-in-schools/"),
    ("mental health in schools", "/mental-health-in-schools/"),
    ("trauma-informed schools", "/trauma-informed-schools/"),
    ("staff wellbeing in schools", "/staff-wellbeing-in-schools/"),
    ("neurodiversity in schools", "/neurodiversity-in-schools/"),
    ("workshops", "/workshops/"),
    ("contact HIP Psychology", "/contact-us/"),
]

TOPICS = [
    {
        "slug": "behaviour-support-in-schools",
        "title": "Behaviour Support in Schools: A Practical Wellbeing Approach",
        "keyword": "behaviour support in schools",
        "cluster": "Behaviour and regulation",
        "audience": "teachers, classroom assistants, pastoral teams, SENCOs and senior leaders",
        "intent": "make behaviour support calmer, more consistent and easier for staff to use",
        "problem": "Behaviour support can become reactive when every incident is treated as a fresh problem. Schools need shared routines that help adults notice patterns, support pupils earlier and keep expectations clear.",
        "signals": [
            "the same pupils appear repeatedly in behaviour logs",
            "staff use different responses to similar incidents",
            "small corrections lead to larger escalation",
            "pastoral support begins only after crisis points",
        ],
        "actions": [
            "agree what adults should notice before escalation",
            "use consistent scripts for correction and repair",
            "connect behaviour plans with pastoral and SEN information",
            "review patterns weekly rather than waiting for a serious incident",
        ],
        "workshop": "HIP Psychology can help staff build behaviour support that combines clear boundaries, emotional regulation and whole-school consistency.",
        "official": ["wellbeing", "sen", "safeguarding"],
    },
    {
        "slug": "behaviour-management-training-schools",
        "title": "Behaviour Management Training for Schools: What Staff Need",
        "keyword": "behaviour management training schools",
        "cluster": "Behaviour and regulation",
        "audience": "school leaders, teachers, classroom assistants and pastoral staff",
        "intent": "choose behaviour training that improves day-to-day confidence instead of adding another policy document",
        "problem": "Behaviour management training works best when it gives staff usable routines, language and follow-up steps. Theory alone rarely changes a difficult lesson, corridor transition or playground incident.",
        "signals": [
            "staff feel confident with policy but less confident in the moment",
            "incidents are handled differently between classrooms",
            "new staff need clearer support with boundaries",
            "repair after incidents is inconsistent",
        ],
        "actions": [
            "include realistic school scenarios",
            "teach calm adult language and de-escalation steps",
            "define when staff should record, refer or seek support",
            "build in review so training becomes practice",
        ],
        "workshop": "HIP Psychology can deliver training that keeps behaviour, wellbeing and staff confidence connected.",
        "official": ["wellbeing", "pastoral", "safeguarding"],
    },
    {
        "slug": "positive-behaviour-support-schools",
        "title": "Positive Behaviour Support in Schools: A Joined-Up Guide",
        "keyword": "positive behaviour support schools",
        "cluster": "Behaviour and regulation",
        "audience": "pastoral leaders, SENCOs, classroom staff and senior leaders",
        "intent": "use positive behaviour support without losing clarity, expectations or school routines",
        "problem": "Positive behaviour support should not mean ignoring disruption. It means understanding what maintains a behaviour, changing the environment where possible, teaching replacement skills and keeping adult responses consistent.",
        "signals": [
            "rewards and sanctions are not changing repeated behaviour",
            "staff disagree about whether behaviour is deliberate or distress-led",
            "a pupil needs support across several settings",
            "families are asking for a clearer plan",
        ],
        "actions": [
            "identify the function and context of repeated behaviour",
            "teach the replacement skill pupils need",
            "make routines predictable across staff and settings",
            "review the plan with pastoral, SEN and family input where appropriate",
        ],
        "workshop": "HIP Psychology can support schools with psychologically informed behaviour planning and staff training.",
        "official": ["sen", "wellbeing", "safeguarding"],
    },
    {
        "slug": "emotion-coaching-training-schools",
        "title": "Emotion Coaching Training for Schools: Practical Staff Steps",
        "keyword": "emotion coaching training schools",
        "cluster": "Emotion coaching",
        "audience": "teachers, classroom assistants, pastoral staff and senior leaders",
        "intent": "turn emotion coaching from a concept into usable adult language",
        "problem": "Emotion coaching helps staff respond to distress without removing boundaries. The challenge is making it practical when a pupil is upset, a lesson must continue and other pupils are watching.",
        "signals": [
            "staff want calm language for distressed pupils",
            "pupils escalate when corrected publicly",
            "adults feel pulled between empathy and boundaries",
            "teams want consistency across classrooms and pastoral spaces",
        ],
        "actions": [
            "name feelings simply without making assumptions",
            "set limits clearly after connection",
            "use brief scripts that staff can remember under pressure",
            "plan repair conversations once the pupil is calmer",
        ],
        "workshop": "HIP Psychology can help schools embed emotion coaching through staff training, modelling and practical examples.",
        "official": ["wellbeing", "pastoral"],
    },
    {
        "slug": "emotional-regulation-activities-for-children",
        "title": "Emotional Regulation Activities for Children in School",
        "keyword": "emotional regulation activities for children",
        "cluster": "Regulation activities",
        "audience": "teachers, classroom assistants, nurture staff, pastoral teams and SENCOs",
        "intent": "choose regulation activities that fit the classroom and support pupil independence",
        "problem": "Regulation activities are most useful when they are predictable, taught before distress and linked to the pupil's real school day. A worksheet or calm corner alone is rarely enough.",
        "signals": [
            "pupils need repeated help after transitions",
            "some children struggle to return to learning after upset",
            "staff use calming activities but outcomes vary",
            "families ask for strategies they can mirror at home",
        ],
        "actions": [
            "teach breathing, grounding and movement when pupils are calm",
            "use visual prompts and short routines",
            "match activities to sensory and emotional needs",
            "review whether pupils can use the strategy with less adult support",
        ],
        "workshop": "HIP Psychology can support staff with regulation-focused workshops and classroom strategies that are realistic for busy schools.",
        "official": ["wellbeing", "sen"],
    },
    {
        "slug": "self-regulation-strategies-for-students",
        "title": "Self-Regulation Strategies for Students: A School Guide",
        "keyword": "self regulation strategies for students",
        "cluster": "Regulation activities",
        "audience": "teachers, pastoral staff, classroom assistants and wellbeing leads",
        "intent": "help pupils build independence through simple, repeated regulation routines",
        "problem": "Students do not become self-regulated because adults tell them to calm down. They need language, modelling, practice and adults who can stay consistent when emotions rise.",
        "signals": [
            "students rely on one trusted adult to reset",
            "stress rises around assessments, social conflict or transitions",
            "pupils can name strategies but do not use them under pressure",
            "staff need a shared approach across lessons",
        ],
        "actions": [
            "model the strategy before expecting independent use",
            "create short routines for before, during and after stress",
            "link strategies to real school triggers",
            "celebrate recovery and repair, not only perfect behaviour",
        ],
        "workshop": "HIP Psychology can help schools build self-regulation into pupil workshops, pastoral routines and staff training.",
        "official": ["wellbeing", "pastoral"],
    },
    {
        "slug": "resilience-activities-for-students",
        "title": "Resilience Activities for Students: What Works in Schools",
        "keyword": "resilience activities for students",
        "cluster": "Resilience and confidence",
        "audience": "teachers, pastoral teams, wellbeing leads and heads of year",
        "intent": "make resilience work practical, respectful and linked to everyday school life",
        "problem": "Resilience should not be used to tell pupils to cope with unreasonable pressure. Good resilience work helps pupils understand challenge, ask for help, recover after setbacks and notice progress.",
        "signals": [
            "students avoid tasks where they might fail",
            "friendship or assessment setbacks lead to prolonged distress",
            "pupils describe themselves as unable or not good enough",
            "staff want positive activities without empty slogans",
        ],
        "actions": [
            "use reflection activities after manageable challenges",
            "teach help-seeking as a strength",
            "build short routines around effort, recovery and support",
            "connect resilience with belonging and adult relationships",
        ],
        "workshop": "HIP Psychology can deliver student workshops that build resilience through practical, age-appropriate activities.",
        "official": ["wellbeing", "pastoral"],
    },
    {
        "slug": "confidence-workshops-for-schools",
        "title": "Confidence Workshops for Schools: Planning Support That Lands",
        "keyword": "confidence workshops for schools",
        "cluster": "Resilience and confidence",
        "audience": "school leaders, pastoral staff, heads of year and wellbeing coordinators",
        "intent": "plan confidence workshops that pupils can connect with and staff can reinforce afterwards",
        "problem": "Confidence work is strongest when it is specific. Pupils need space to understand worry, self-talk, friendships, transitions and achievement without feeling singled out.",
        "signals": [
            "students avoid speaking up or trying new tasks",
            "confidence dips around transition years",
            "pupils compare themselves heavily with peers",
            "pastoral staff want a positive early intervention",
        ],
        "actions": [
            "choose one clear workshop outcome",
            "adapt examples to age and school context",
            "give staff follow-up language",
            "include ways pupils can ask for help after the session",
        ],
        "workshop": "HIP Psychology provides pupil workshops that support confidence, resilience, emotional literacy and wellbeing.",
        "official": ["wellbeing", "pastoral"],
    },
    {
        "slug": "self-esteem-activities-for-teenagers",
        "title": "Self-Esteem Activities for Teenagers: A Practical School Guide",
        "keyword": "self esteem activities for teenagers",
        "cluster": "Resilience and confidence",
        "audience": "post-primary teachers, pastoral staff, school counsellor links and wellbeing leads",
        "intent": "support teenage self-esteem without making pupils feel exposed",
        "problem": "Teenage self-esteem work needs care. Activities should avoid forced disclosure and instead focus on strengths, values, self-talk, relationships, boundaries and safe help-seeking.",
        "signals": [
            "students use harsh self-critical language",
            "friendship pressure affects learning or attendance",
            "pupils disengage after mistakes",
            "staff want activities that feel mature rather than childish",
        ],
        "actions": [
            "use private reflection rather than public sharing",
            "focus on values and strengths as well as feelings",
            "teach self-talk through real school examples",
            "make support routes clear for pupils who need more help",
        ],
        "workshop": "HIP Psychology can design age-appropriate wellbeing workshops for teenagers that feel safe, practical and respectful.",
        "official": ["wellbeing", "safeguarding"],
    },
    {
        "slug": "supervision-for-teachers",
        "title": "Supervision for Teachers: Why Reflective Support Matters",
        "keyword": "supervision for teachers",
        "cluster": "Staff support and supervision",
        "audience": "school leaders, pastoral teams, designated teachers, SENCOs and staff wellbeing leads",
        "intent": "explain how reflective supervision can support staff who carry complex emotional work",
        "problem": "Teachers and pastoral staff often hold difficult pupil stories, family concerns and repeated incidents. Supervision gives staff a structured space to reflect, reset and make safer decisions.",
        "signals": [
            "pastoral staff are carrying repeated emotional pressure",
            "difficult cases depend on one or two adults",
            "staff feel unsure after disclosures or complex incidents",
            "leaders want support that is more practical than a one-off wellbeing session",
        ],
        "actions": [
            "define who needs supervision and how often",
            "keep it reflective rather than performance-management focused",
            "protect confidentiality while following safeguarding duties",
            "use themes from supervision to improve systems",
        ],
        "workshop": "HIP Psychology can support schools with reflective supervision, staff wellbeing input and psychologically informed consultation.",
        "official": ["safeguarding", "wellbeing"],
    },
    {
        "slug": "safeguarding-training-schools",
        "title": "Safeguarding Training for Schools: Connecting Policy and Practice",
        "keyword": "safeguarding training schools",
        "cluster": "Safeguarding and wellbeing",
        "audience": "school leaders, designated teachers, pastoral staff and whole-school teams",
        "intent": "keep safeguarding training practical, clear and connected to everyday staff confidence",
        "problem": "Safeguarding training should help staff know what to notice, how to record concerns and who to speak to. It should also protect staff from carrying worries alone.",
        "signals": [
            "staff are uncertain about low-level concerns",
            "records vary in quality or detail",
            "new staff need clearer induction around routes",
            "wellbeing conversations sometimes reveal safeguarding questions",
        ],
        "actions": [
            "make reporting routes visible and repeated",
            "use realistic examples from school life",
            "connect safeguarding with pastoral and wellbeing systems",
            "remind staff that consultation is better than carrying concern alone",
        ],
        "workshop": "HIP Psychology can complement school safeguarding systems through wellbeing training, supervision and psychologically informed staff support.",
        "official": ["safeguarding", "wellbeing"],
    },
    {
        "slug": "mental-health-lead-training-schools",
        "title": "Mental Health Lead Training for Schools: Role Clarity First",
        "keyword": "mental health lead training schools",
        "cluster": "Mental health leadership",
        "audience": "senior mental health leads, pastoral managers, designated teachers and school leaders",
        "intent": "help mental health leads build clear, bounded and practical school systems",
        "problem": "A mental health lead cannot become the answer to every wellbeing need. The role works best when it coordinates provision, staff confidence, referral routes and review rather than holding everything alone.",
        "signals": [
            "too many concerns route to one staff member",
            "pupil wellbeing work feels reactive",
            "staff are unsure when to escalate concerns",
            "leaders want a clearer map of universal and targeted support",
        ],
        "actions": [
            "map current wellbeing provision and gaps",
            "define staff roles and escalation routes",
            "connect pupil voice with practical changes",
            "review training needs termly",
        ],
        "workshop": "HIP Psychology can help schools strengthen mental health leadership through training, consultation and whole-school wellbeing planning.",
        "official": ["wellbeing", "pastoral", "safeguarding"],
    },
]


def wp_auth() -> HTTPBasicAuth:
    return HTTPBasicAuth(os.environ["HIP_WP_USERNAME"], os.environ["HIP_WP_APP_PASSWORD"])


def paragraph(text: str) -> str:
    return f"<p>{escape(text)}</p>"


def bullet_list(items: list[str]) -> str:
    return "<ul>" + "".join(f"<li>{escape(item[:1].upper() + item[1:])}</li>" for item in items) + "</ul>"


def related_links(current_slug: str) -> str:
    links = []
    for label, href in INTERNAL_LINKS:
        if href.strip("/") != current_slug:
            links.append(f'<a href="{href}">{escape(label)}</a>')
    return ", ".join(links[:8])


def official_links(keys: list[str]) -> str:
    anchors = []
    for key in keys:
        label, url = OFFICIAL_LINKS[key]
        anchors.append(f'<a href="{url}" target="_blank" rel="noopener">{escape(label)}</a>')
    if len(anchors) == 1:
        return anchors[0]
    return ", ".join(anchors[:-1]) + " and " + anchors[-1]


def faq(topic: dict) -> list[tuple[str, str]]:
    return [
        (
            f"What is the first step with {topic['keyword']}?",
            "Start by agreeing the purpose, the pupils or staff affected, the adults responsible and the follow-up route before changing practice.",
        ),
        (
            "How can schools keep this work safe?",
            "Use clear boundaries, follow safeguarding procedures, record concerns appropriately and make escalation routes visible to staff.",
        ),
        (
            "Can a single workshop solve this?",
            "A workshop can start the work, but impact is stronger when leaders connect it to classroom routines, pastoral support and review points.",
        ),
        (
            "How can HIP Psychology help?",
            "HIP Psychology can support schools with pupil workshops, staff training, reflective supervision and whole-school wellbeing planning.",
        ),
    ]


def make_content(topic: dict) -> str:
    questions = faq(topic)
    faq_schema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {"@type": "Question", "name": q, "acceptedAnswer": {"@type": "Answer", "text": a}}
            for q, a in questions
        ],
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

    html = [
        paragraph(f"{topic['title']} is a practical guide for {topic['audience']}. It focuses on how schools can {topic['intent']}."),
        paragraph("The aim is not to give staff another abstract model. The aim is to create a shared approach that feels calm, safe and usable during a normal school day."),
        "<h2>Why this matters</h2>",
        paragraph(topic["problem"]),
        paragraph("When schools have shared language and clear routes for support, pupils are less likely to be passed between adults without a plan and staff are less likely to carry concern alone."),
        "<h2>Signs this may need attention</h2>",
        paragraph("Every school context is different, but repeated patterns are worth noticing before they become embedded."),
        bullet_list(topic["signals"]),
        "<h2>What schools should decide first</h2>",
        paragraph("Before changing provision or booking training, leaders should agree what the school is trying to improve and how staff will know the approach is working."),
        bullet_list(topic["actions"]),
        "<h2>How to make it work across the whole school</h2>",
        paragraph("The approach should connect with pastoral care, safeguarding procedures, attendance support, SEN coordination and everyday classroom relationships. That keeps the response from becoming isolated or dependent on one person."),
        "<h2>What staff need in practice</h2>",
        paragraph("Staff usually need shared language, short scripts, clear thresholds, practical examples and permission to ask for help early. Training should reduce uncertainty rather than add responsibility without structure."),
        "<h2>What pupils need in practice</h2>",
        paragraph("Pupils need adults who are predictable, respectful and clear. Support should help them understand what is happening, what they can try next and who can help when things feel difficult."),
        "<h2>How leaders can review impact</h2>",
        paragraph("Review should look at patterns, not just individual incidents. Useful questions include whether pupils know the support routes, whether staff feel more confident and whether the same concerns are reducing over time."),
        "<h2>How HIP Psychology can support this work</h2>",
        paragraph(topic["workshop"]),
        paragraph("HIP Psychology works with schools across Northern Ireland and Ireland through pupil workshops, staff training, assemblies, reflective supervision and whole-school wellbeing support."),
        "<h2>Useful guidance to align with</h2>",
        "<p>Schools can connect this work with existing guidance and resources, including " + official_links(topic["official"]) + ".</p>",
        "<h2>Related HIP Psychology resources</h2>",
        "<p>Useful related HIP resources include " + related_links(topic["slug"]) + ".</p>",
        '<p><strong>Need help planning the next step?</strong> <a href="/contact-us/">Contact HIP Psychology</a> to discuss workshops, staff training or whole-school wellbeing support.</p>',
        "<h2>FAQs</h2>",
    ]
    for question, answer in questions:
        html.append(f"<h3>{escape(question)}</h3>")
        html.append(paragraph(answer))
    html.append(f'<script type="application/ld+json">{json.dumps(faq_schema, ensure_ascii=True)}</script>')
    html.append(f'<script type="application/ld+json">{json.dumps(article_schema, ensure_ascii=True)}</script>')
    return "\n".join(html)


def wp_posts(params: dict) -> requests.Response:
    return requests.get(f"{API}/posts", params=params, auth=wp_auth(), timeout=30)


def existing_slugs() -> set[str]:
    slugs: set[str] = set()
    for page in range(1, 30):
        response = wp_posts({"per_page": 100, "page": page, "_fields": "slug", "status": "publish,draft,pending,private"})
        if response.status_code == 400:
            break
        response.raise_for_status()
        data = response.json()
        if not data:
            break
        slugs.update(post["slug"] for post in data)
    return slugs


def excerpt(topic: dict) -> str:
    return (
        f"A practical school guide to {topic['keyword']}, covering signs to notice, "
        "safe planning steps, staff roles and HIP Psychology support."
    )


def publish_topic(topic: dict) -> dict:
    content = make_content(topic)
    source_file = OUT / f"{topic['slug']}.html"
    source_file.write_text(content, encoding="utf-8")
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
        "status": data["status"],
        "source_file": str(source_file),
    }


def latest_feed_contains(urls: list[str]) -> dict[str, bool]:
    response = requests.get(f"{SITE}/wp-json/wp/v2/posts", params={"per_page": 30, "_fields": "link"}, timeout=30)
    response.raise_for_status()
    links = {post["link"] for post in response.json()}
    return {url: url in links for url in urls}


def sitemap_contains(urls: list[str]) -> dict[str, bool]:
    response = requests.get(f"{SITE}/wp-sitemap-posts-post-1.xml", timeout=30)
    response.raise_for_status()
    text = response.text
    return {url: url in text for url in urls}


def check_page(row: dict) -> dict:
    response = requests.get(row["url"], timeout=30)
    html = response.text
    leak_markers = [
        "TODO",
        "Draft",
        "source_file",
        "Target keyword:",
        "primary_keyword:",
        "Ahrefs",
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


def build_qa(published: list[dict]) -> dict:
    urls = [row["url"] for row in published]
    rest_status = {}
    for row in published:
        response = wp_posts({"slug": row["slug"], "_fields": "id,status,slug,link"})
        response.raise_for_status()
        posts = response.json()
        rest_status[row["url"]] = posts[0]["status"] if posts else None

    feed = latest_feed_contains(urls)
    sitemap = sitemap_contains(urls)
    if not all(sitemap.values()):
        time.sleep(10)
        sitemap = sitemap_contains(urls)

    qa = {
        "source_note": SOURCE_NOTE,
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
    return qa


def write_report(published: list[dict], qa: dict) -> None:
    lines = [
        "# HIP Psychology Ahrefs Content Blast - 2026-06-17",
        "",
        SOURCE_NOTE,
        "",
        "## Keyword Clusters Picked",
    ]
    for row in published:
        lines.append(f"- `{row['target_keyword']}` - {row['cluster']}")
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
        "- `ahrefs-metrics-2026-06-17.json`",
        "- `ahrefs-domain-rating-2026-06-17.json`",
        "- `ahrefs-backlinks-2026-06-17.json`",
        "- `ahrefs-top-pages-gb-2026-06-17.json`",
        "- `ahrefs-organic-keywords-gb-2026-06-17.json`",
        "",
        "## Not Done",
        "- No email, DM, social post or external outreach.",
        "- No featured images.",
    ]
    (OUT / "report.md").write_text("\n".join(lines) + "\n", encoding="utf-8")


def main() -> int:
    OUT.mkdir(parents=True, exist_ok=True)
    target_slugs = [topic["slug"] for topic in TOPICS]
    duplicate_targets = sorted({slug for slug in target_slugs if target_slugs.count(slug) > 1})
    if duplicate_targets:
        raise RuntimeError(f"Duplicate target slugs in batch: {duplicate_targets}")
    existing = existing_slugs()
    duplicates = [slug for slug in target_slugs if slug in existing]
    if duplicates:
        raise RuntimeError(f"Refusing duplicate WordPress slugs: {duplicates}")

    published = [publish_topic(topic) for topic in TOPICS]
    time.sleep(3)
    qa = build_qa(published)

    (OUT / "publish-result.json").write_text(json.dumps({"source_note": SOURCE_NOTE, "results": published}, indent=2), encoding="utf-8")
    (OUT / "qa-result.json").write_text(json.dumps(qa, indent=2), encoding="utf-8")
    write_report(published, qa)
    print(json.dumps({"published": len(published), "failures": len(qa["failures"]), "report": str(OUT / "report.md")}, indent=2))
    return 0 if not qa["failures"] else 1


if __name__ == "__main__":
    raise SystemExit(main())
