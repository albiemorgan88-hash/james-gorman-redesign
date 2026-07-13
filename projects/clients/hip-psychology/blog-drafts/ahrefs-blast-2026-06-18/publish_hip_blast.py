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
    "Ahrefs pull 2026-06-18: HIP Psychology DR 7.0, 305 live backlinks, "
    "211 live referring domains, 4 GB organic keywords, estimated organic traffic 5. "
    "Current visible pages include pupil wellbeing strategy, pastoral support and "
    "emotion coaching. This batch builds a new anti-bullying, online safety, pupil "
    "voice, friendship and belonging cluster ahead of Anti-Bullying Week 2026."
)

OFFICIAL_LINKS = {
    "ni_act": (
        "Department of Education Addressing Bullying in Schools Act guidance",
        "https://www.education-ni.gov.uk/publications/addressing-bullying-schools-act",
    ),
    "ni_response": (
        "Department of Education effective responses to bullying behaviour",
        "https://www.education-ni.gov.uk/articles/addressing-bullying-schools",
    ),
    "ni_statutory": (
        "statutory guidance for schools and Boards of Governors",
        "https://www.education-ni.gov.uk/publications/addressing-bullying-schools-act-ni-2016-act",
    ),
    "roi_cinealtas": (
        "Cinealtas: Action Plan on Bullying",
        "https://www.gov.ie/en/department-of-education/publications/cine%C3%A1ltas-action-plan-on-bullying/",
    ),
    "roi_bi_cinealta": (
        "Bi Cinealta procedures for primary and post-primary schools",
        "https://www.gov.ie/en/department-of-education/policy-information/b%C3%AD-cine%C3%A1lta-procedures-to-prevent-and-address-bullying-behaviour-for-primary-and-post-primary-schools/",
    ),
    "aba_2026": (
        "Anti-Bullying Alliance Anti-Bullying Week 2026 guidance",
        "https://anti-bullyingalliance.org.uk/",
    ),
    "wellbeing": (
        "Department of Education emotional health and wellbeing guidance",
        "https://www.education-ni.gov.uk/articles/children-and-young-peoples-emotional-health-and-wellbeing-education",
    ),
    "safeguarding": (
        "Department of Education safeguarding guidance",
        "https://www.education-ni.gov.uk/publications/safeguarding-and-child-protection-schools-guide-schools",
    ),
}

INTERNAL_LINKS = [
    ("anti-bullying workshops for schools", "/anti-bullying-workshops-schools/"),
    ("anti-bullying programme for schools", "/anti-bullying-programme-schools/"),
    ("bullying prevention workshops", "/bullying-prevention-workshops-schools/"),
    ("Anti-Bullying Week 2026 schools guide", "/anti-bullying-week-2026-schools/"),
    ("Anti-Bullying Week activities", "/anti-bullying-week-activities-schools/"),
    ("cyberbullying in schools", "/cyberbullying-in-schools/"),
    ("friendship issues in schools", "/friendship-issues-in-schools/"),
    ("playground friendship support", "/playground-friendship-support-schools/"),
    ("restorative practice and wellbeing", "/restorative-practice-and-wellbeing-schools/"),
    ("pupil voice and wellbeing", "/pupil-voice-and-wellbeing-schools/"),
    ("pupil wellbeing strategy", "/pupil-wellbeing-strategy-schools/"),
    ("pastoral support in schools", "/pastoral-support-in-schools/"),
    ("student anxiety in schools", "/student-anxiety-in-schools/"),
    ("school wellbeing calendar", "/school-wellbeing-calendar/"),
    ("HIP workshops", "/workshops/"),
    ("contact HIP Psychology", "/contact-us/"),
]

TOPICS = [
    {
        "slug": "anti-bullying-policy-review-schools",
        "title": "Anti-Bullying Policy Review for Schools: What to Check",
        "keyword": "anti-bullying policy review schools",
        "cluster": "Anti-bullying policy",
        "audience": "principals, designated teachers, pastoral leads, governors and wellbeing teams",
        "context": "A policy review should be more than a tidy document exercise. It is the point where schools test whether pupils, staff and families know what bullying means, how concerns are recorded and what happens after a concern is raised.",
        "decisions": [
            "whether the definition of bullying is clear to pupils, staff and families",
            "how repeated behaviour, imbalance of power and online behaviour are recorded",
            "who reviews incident patterns and reports them to leadership or governors",
            "how pupil voice and parent/carer feedback are included in the review",
        ],
        "activities": [
            "run a short staff scenario review using recent anonymised examples",
            "ask pupils what would stop them reporting bullying early",
            "check whether follow-up support is described for every pupil involved",
            "map the policy against pastoral, safeguarding and online safety procedures",
        ],
        "support": "HIP Psychology can help schools turn anti-bullying policy into practical staff confidence, pupil workshops and review conversations.",
        "official": ["ni_act", "ni_statutory", "ni_response"],
    },
    {
        "slug": "anti-bullying-policy-checklist-schools",
        "title": "Anti-Bullying Policy Checklist for Schools",
        "keyword": "anti-bullying policy checklist schools",
        "cluster": "Anti-bullying policy",
        "audience": "school leaders, pastoral teams, safeguarding leads and governors",
        "context": "A useful anti-bullying checklist helps leaders spot gaps before an issue becomes difficult to manage. The aim is to make expectations, reporting routes and support actions visible across the school.",
        "decisions": [
            "what pupils should do if they experience, witness or hear about bullying",
            "which staff members record concerns and where records are stored",
            "how the school distinguishes conflict, relational difficulty and bullying behaviour",
            "what review rhythm leaders will use across the school year",
        ],
        "activities": [
            "audit whether pupils can name a trusted adult and reporting route",
            "review three anonymised incidents against the checklist",
            "check that classroom, corridor, playground and online contexts are all covered",
            "add termly pupil voice and staff confidence questions to the review cycle",
        ],
        "support": "HIP Psychology can support policy review with staff training, pupil-facing sessions and practical anti-bullying planning.",
        "official": ["ni_act", "safeguarding", "wellbeing"],
    },
    {
        "slug": "addressing-bullying-act-ni-schools",
        "title": "Addressing Bullying Act NI: A Practical School Guide",
        "keyword": "Addressing Bullying Act NI schools",
        "cluster": "Northern Ireland anti-bullying",
        "audience": "Northern Ireland school leaders, pastoral staff and Boards of Governors",
        "context": "Northern Ireland schools need anti-bullying work that connects statutory duties with day-to-day practice. That means clear policy, consistent recording, visible pupil routes for help and support after incidents.",
        "decisions": [
            "how staff will apply the school definition of bullying in real scenarios",
            "how online behaviour outside school may affect school life",
            "how governors will monitor policy effectiveness",
            "how the school supports pupils who experience bullying and pupils who engage in bullying behaviour",
        ],
        "activities": [
            "brief staff using common school scenarios rather than abstract definitions",
            "review incident records for repeated locations, times or peer groups",
            "include pupil-friendly language in assemblies and tutor time",
            "schedule a governor or senior leadership review before Anti-Bullying Week",
        ],
        "support": "HIP Psychology works with NI schools on anti-bullying workshops, staff briefings and wider wellbeing support.",
        "official": ["ni_act", "ni_statutory", "ni_response"],
    },
    {
        "slug": "bi-cinealta-procedures-schools",
        "title": "Bi Cinealta Procedures for Schools: What Leaders Should Plan",
        "keyword": "Bi Cinealta procedures schools",
        "cluster": "Republic of Ireland anti-bullying",
        "audience": "Republic of Ireland primary and post-primary leaders reviewing anti-bullying procedures",
        "context": "The Bi Cinealta procedures create a clear moment for Irish schools to review how they prevent and address bullying behaviour. The strongest response will connect policy, pupil voice, staff training and visible support routes.",
        "decisions": [
            "how the school will explain the procedures to pupils and families",
            "what staff need to recognise cyberbullying, racist bullying, sexist bullying and sexual harassment",
            "how pupil voice will inform prevention work",
            "what follow-up support looks like after a concern is raised",
        ],
        "activities": [
            "build a short implementation checklist for leadership and pastoral teams",
            "run year-group workshops on reporting, bystander behaviour and respect",
            "review online behaviour scenarios before updating communications",
            "schedule a termly review of concerns, responses and pupil feedback",
        ],
        "support": "HIP Psychology can support ROI schools with pupil workshops, staff development and anti-bullying implementation planning.",
        "official": ["roi_bi_cinealta", "roi_cinealtas"],
    },
    {
        "slug": "anti-bullying-week-2026-break-the-silence",
        "title": "Anti-Bullying Week 2026: Break the Silence School Planning Guide",
        "keyword": "Anti-Bullying Week 2026 Break the Silence",
        "cluster": "Anti-Bullying Week 2026",
        "audience": "primary, post-primary and pastoral teams planning Anti-Bullying Week 2026",
        "context": "Anti-Bullying Week 2026 runs from Monday 16 to Friday 20 November. A strong week should do more than fill assembly time. It should make it safer for pupils to speak up and clearer for adults to respond.",
        "decisions": [
            "which year groups need universal input and which need targeted follow-up",
            "what pupils should do if they are not ready to speak publicly",
            "how staff will respond when pupils disclose concerns after an activity",
            "how the week links to the school policy and pastoral systems",
        ],
        "activities": [
            "use anonymous question boxes before assemblies or workshops",
            "teach bystander language pupils can use safely",
            "brief staff on likely disclosures and recording routes",
            "plan follow-up tutor activities for the week after the campaign",
        ],
        "support": "HIP Psychology can deliver Anti-Bullying Week workshops, assemblies and staff briefings that fit the school timetable.",
        "official": ["aba_2026", "ni_response", "roi_cinealtas"],
    },
    {
        "slug": "cyberbullying-training-for-teachers",
        "title": "Cyberbullying Training for Teachers: What Staff Need",
        "keyword": "cyberbullying training for teachers",
        "cluster": "Cyberbullying and online safety",
        "audience": "teachers, classroom assistants, pastoral teams, safeguarding leads and year heads",
        "context": "Cyberbullying training needs to help staff respond calmly and consistently when online behaviour spills into school life. Staff need practical routes, not panic, blame or unclear boundaries.",
        "decisions": [
            "what staff should record when a pupil reports online bullying",
            "when online behaviour becomes a school concern",
            "how screenshots, group chats and repeated messages should be handled",
            "how staff keep safeguarding, pastoral care and families connected",
        ],
        "activities": [
            "practice responding to group chat, image sharing and exclusion scenarios",
            "teach pupils what evidence to keep and who to tell",
            "create a staff script for first responses after disclosure",
            "review links between online safety, bullying policy and safeguarding",
        ],
        "support": "HIP Psychology can help staff understand the emotional impact of cyberbullying and build practical response confidence.",
        "official": ["ni_response", "safeguarding", "roi_bi_cinealta"],
    },
    {
        "slug": "online-safety-workshops-for-schools",
        "title": "Online Safety Workshops for Schools: Planning Support That Lands",
        "keyword": "online safety workshops for schools",
        "cluster": "Cyberbullying and online safety",
        "audience": "school leaders, pastoral teams, parents, pupils and safeguarding staff",
        "context": "Online safety workshops work best when they connect digital behaviour with emotions, friendships, pressure and help-seeking. Pupils need space to think about the reality of group chats, screenshots and social pressure.",
        "decisions": [
            "which online behaviours are causing the most concern in each year group",
            "how parent messages will reinforce the pupil session",
            "what support route pupils should use after the workshop",
            "how the school will avoid scare tactics and focus on safer choices",
        ],
        "activities": [
            "use realistic scenarios around group chats, exclusion and image pressure",
            "include a confidential route for pupils to ask questions",
            "brief pastoral staff before and after the pupil workshop",
            "create a simple takeaway message for pupils and families",
        ],
        "support": "HIP Psychology can deliver online safety and cyberbullying workshops as part of a wider wellbeing programme.",
        "official": ["safeguarding", "ni_response", "wellbeing"],
    },
    {
        "slug": "bystander-intervention-bullying-schools",
        "title": "Bystander Intervention in Bullying: A School Guide",
        "keyword": "bystander intervention bullying schools",
        "cluster": "Bystanders and pupil voice",
        "audience": "pastoral leads, heads of year, classroom teachers and pupil leadership teams",
        "context": "Many pupils are uncomfortable with bullying behaviour but are unsure what to do safely. Bystander work should give pupils realistic options that reduce harm without expecting them to become adult investigators.",
        "decisions": [
            "what safe action looks like for different ages and situations",
            "how pupils can report concerns without becoming the focus",
            "how staff will reinforce bystander messages after the workshop",
            "which school spaces need extra adult awareness",
        ],
        "activities": [
            "teach the difference between joining in, watching, distracting and reporting",
            "use short role-play scenarios with safe exit choices",
            "build class agreements around group chat behaviour",
            "review pupil survey data to identify where silence is strongest",
        ],
        "support": "HIP Psychology can run bystander-focused workshops that help pupils practise safe language and help-seeking.",
        "official": ["aba_2026", "ni_response", "roi_cinealtas"],
    },
    {
        "slug": "pupil-voice-anti-bullying-survey",
        "title": "Pupil Voice Anti-Bullying Survey: Questions Schools Can Use",
        "keyword": "pupil voice anti-bullying survey",
        "cluster": "Bystanders and pupil voice",
        "audience": "school leaders, pastoral teams, wellbeing leads and student councils",
        "context": "Pupil voice gives schools information adults may otherwise miss. A good anti-bullying survey asks about safety, reporting, trusted adults, online behaviour and whether pupils believe action will follow.",
        "decisions": [
            "which year groups should be surveyed and how often",
            "how responses will be kept safe and acted upon",
            "which questions identify barriers to reporting",
            "how leaders will share the changes made because of pupil feedback",
        ],
        "activities": [
            "ask pupils where bullying is most likely to go unnoticed",
            "include questions about online spaces and group chats",
            "compare pupil answers with staff confidence data",
            "share a short you said, we did update after the review",
        ],
        "support": "HIP Psychology can help schools design pupil voice work that feeds into workshops, policy review and pastoral planning.",
        "official": ["ni_act", "roi_bi_cinealta", "wellbeing"],
    },
    {
        "slug": "restorative-questions-after-bullying",
        "title": "Restorative Questions After Bullying: When and How to Use Them",
        "keyword": "restorative questions after bullying",
        "cluster": "Restorative and repair work",
        "audience": "pastoral staff, senior leaders, heads of year and classroom teachers",
        "context": "Restorative questions can support repair, but they must be used carefully. They are not a shortcut, a forced apology or a replacement for safeguarding, recording and clear boundaries.",
        "decisions": [
            "whether the pupil who experienced harm feels safe enough for repair work",
            "what needs to be recorded before any restorative conversation",
            "which adult is skilled and neutral enough to facilitate",
            "what follow-up will confirm that behaviour has changed",
        ],
        "activities": [
            "prepare separate conversations before any joint meeting",
            "ask what happened, who was affected and what needs to change",
            "avoid pressuring pupils into forgiveness or public disclosure",
            "schedule follow-up to check safety, relationships and behaviour patterns",
        ],
        "support": "HIP Psychology can help pastoral teams use restorative approaches safely within a wider anti-bullying and wellbeing system.",
        "official": ["ni_response", "safeguarding", "wellbeing"],
    },
    {
        "slug": "friendship-workshops-for-schools",
        "title": "Friendship Workshops for Schools: Building Healthier Peer Groups",
        "keyword": "friendship workshops for schools",
        "cluster": "Friendship and belonging",
        "audience": "primary, KS3 and pastoral teams supporting peer relationships",
        "context": "Friendship issues can look minor from the outside but feel intense for pupils. Workshops can help pupils understand boundaries, repair, exclusion, group pressure and how to ask for help before situations escalate.",
        "decisions": [
            "which year groups are showing friendship pressure or exclusion",
            "how staff will distinguish everyday conflict from repeated harm",
            "what language pupils need for boundaries and repair",
            "how follow-up will continue in tutor time or class discussion",
        ],
        "activities": [
            "use scenarios around falling out, exclusion and group chat pressure",
            "teach pupils how to name boundaries without humiliation",
            "normalise asking for adult help before conflict escalates",
            "connect friendship work with anti-bullying and wellbeing planning",
        ],
        "support": "HIP Psychology can deliver friendship and peer relationship workshops that are warm, practical and age-appropriate.",
        "official": ["wellbeing", "aba_2026"],
    },
    {
        "slug": "school-belonging-activities",
        "title": "School Belonging Activities to Prevent Bullying and Exclusion",
        "keyword": "school belonging activities",
        "cluster": "Friendship and belonging",
        "audience": "school leaders, teachers, pastoral teams and wellbeing coordinators",
        "context": "Belonging is not a poster or a slogan. Pupils are more likely to feel safe when routines, relationships and peer culture make it clear that they are noticed, included and supported.",
        "decisions": [
            "which pupils or groups are least likely to feel included",
            "how transition points affect confidence and peer connection",
            "what staff can do daily to notice isolation early",
            "how student leadership can support inclusion without tokenism",
        ],
        "activities": [
            "map unstructured times where pupils feel least connected",
            "run class activities that build shared language around respect",
            "use pupil voice to identify barriers to belonging",
            "connect belonging work with transitions, anti-bullying and pastoral care",
        ],
        "support": "HIP Psychology can support schools with belonging, resilience, confidence and anti-bullying workshops across the year.",
        "official": ["wellbeing", "aba_2026", "roi_cinealtas"],
    },
]


def wp_auth() -> HTTPBasicAuth:
    return HTTPBasicAuth(os.environ["HIP_WP_USERNAME"], os.environ["HIP_WP_APP_PASSWORD"])


def paragraph(text: str) -> str:
    return f"<p>{escape(text)}</p>"


def bullet_list(items: list[str]) -> str:
    return "<ul>" + "".join(f"<li>{escape(item[:1].upper() + item[1:])}</li>" for item in items) + "</ul>"


def official_links(keys: list[str]) -> str:
    anchors = []
    for key in keys:
        label, url = OFFICIAL_LINKS[key]
        anchors.append(f'<a href="{url}" target="_blank" rel="noopener">{escape(label)}</a>')
    if len(anchors) == 1:
        return anchors[0]
    return ", ".join(anchors[:-1]) + " and " + anchors[-1]


def related_links(current_slug: str) -> str:
    links = []
    for label, href in INTERNAL_LINKS:
        if href.strip("/") != current_slug:
            links.append(f'<a href="{href}">{escape(label)}</a>')
    return ", ".join(links[:8])


def faq(topic: dict) -> list[tuple[str, str]]:
    return [
        (
            f"What should schools do first with {topic['keyword']}?",
            "Start by agreeing the purpose, the pupils or staff affected, the safeguarding route and the follow-up process before launching new activities.",
        ),
        (
            "How can schools make this practical for staff?",
            "Use realistic scenarios, short scripts, clear recording expectations and a named route for advice when a concern is sensitive or complex.",
        ),
        (
            "Should pupils be involved?",
            "Yes. Pupil voice helps schools understand where barriers, silence or unsafe spaces exist, but feedback must be handled safely and acted upon.",
        ),
        (
            "How can HIP Psychology help?",
            "HIP Psychology can support schools with pupil workshops, staff training, assemblies, policy review conversations and whole-school wellbeing planning.",
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
        paragraph(f"{topic['title']} is a practical guide for {topic['audience']}."),
        paragraph(topic["context"]),
        paragraph("The goal is to help schools move from awareness into clear action: what pupils should know, what staff should do and how leaders can review whether the approach is working."),
        "<h2>Why this matters</h2>",
        paragraph("Anti-bullying, online safety and peer relationship work has the greatest impact when it is joined to pastoral care, safeguarding, pupil voice and everyday classroom routines. A single assembly can raise attention, but pupils and staff need follow-up routes they can actually use."),
        "<h2>Key decisions for leaders</h2>",
        paragraph("Before launching a workshop, policy update or campaign week, it helps to agree a small number of decisions so the work is clear and safe."),
        bullet_list(topic["decisions"]),
        "<h2>Practical activities schools can use</h2>",
        paragraph("The activities below are designed to make the topic concrete for pupils and staff without turning sensitive experiences into public disclosure."),
        bullet_list(topic["activities"]),
        "<h2>How to keep the work safe</h2>",
        paragraph("Schools should make reporting routes visible, protect confidentiality where possible, follow safeguarding procedures and avoid asking pupils to share personal experiences in front of peers. Staff should know what to do if a pupil discloses harm after a session."),
        "<h2>What pupils need to hear</h2>",
        paragraph("Pupils need simple language: what counts as harm, what they can do if they are worried, which adults can help and why silence can leave problems hidden. They also need reassurance that asking for help is not overreacting."),
        "<h2>What staff need to practise</h2>",
        paragraph("Staff need first-response language, recording confidence, scenario practice and clarity about when to involve pastoral, safeguarding or senior leadership colleagues. Training should reduce uncertainty rather than add another task to a busy day."),
        "<h2>How leaders can review impact</h2>",
        paragraph("Useful review questions include whether pupils know where to report concerns, whether staff feel more confident responding, whether repeated locations or groups are appearing in records and whether pupil voice has led to visible change."),
        "<h2>How HIP Psychology can support this work</h2>",
        paragraph(topic["support"]),
        paragraph("HIP Psychology works with schools across Northern Ireland and Ireland through pupil workshops, staff training, assemblies, reflective supervision and whole-school wellbeing support."),
        "<h2>Useful guidance to align with</h2>",
        "<p>Schools can connect this work with current guidance and resources, including " + official_links(topic["official"]) + ".</p>",
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
    for page in range(1, 50):
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
        f"A practical school guide to {topic['keyword']}, covering policy, pupil voice, "
        "safe activities, staff confidence and HIP Psychology support."
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
    response = requests.get(f"{SITE}/wp-json/wp/v2/posts", params={"per_page": 40, "_fields": "link"}, timeout=30)
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
        "# HIP Psychology Ahrefs Content Blast - 2026-06-18",
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
        "- `ahrefs-metrics-2026-06-18.json`",
        "- `ahrefs-domain-rating-2026-06-18.json`",
        "- `ahrefs-backlinks-2026-06-18.json`",
        "- `ahrefs-top-pages-gb-2026-06-18.json`",
        "- `ahrefs-organic-keywords-gb-2026-06-18.json`",
        "",
        "## External Guidance Checked",
        "- Department of Education NI Addressing Bullying in Schools Act guidance",
        "- Department of Education NI effective responses to bullying behaviour",
        "- Gov.ie Cinealtas and Bi Cinealta guidance",
        "- Anti-Bullying Alliance Anti-Bullying Week 2026 guidance",
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
