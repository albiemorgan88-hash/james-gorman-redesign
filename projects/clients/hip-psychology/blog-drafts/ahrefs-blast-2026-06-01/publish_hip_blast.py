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

OFFICIAL_LINKS = {
    "de_wellbeing": "https://www.education-ni.gov.uk/articles/emotional-health-and-wellbeing",
    "de_safeguarding": "https://www.education-ni.gov.uk/articles/protecting-and-safeguarding-our-children",
    "nhs_anxiety": "https://www.nhs.uk/mental-health/children-and-young-adults/advice-for-parents/anxiety-in-children/",
    "nhs_self_harm": "https://www.nhs.uk/mental-health/feelings-symptoms-behaviours/behaviours/self-harm/",
    "hse_stress": "https://www.hse.gov.uk/stress/",
    "education_support": "https://www.educationsupport.org.uk/get-help/help-for-your-staff/wellbeing-services/professional-supervision/",
}

EXT_LABELS = {
    "de_wellbeing": "Department of Education emotional health and wellbeing guidance",
    "de_safeguarding": "Department of Education safeguarding guidance",
    "nhs_anxiety": "NHS anxiety guidance for children and young people",
    "nhs_self_harm": "NHS self-harm guidance",
    "hse_stress": "HSE guidance on work-related stress",
    "education_support": "Education Support guidance on supervision",
}

TOPICS = [
    {
        "slug": "trauma-informed-practice-in-schools",
        "title": "Trauma-Informed Practice in Schools: Practical Staff Training Without Losing Boundaries",
        "keyword": "trauma informed practice in schools",
        "cluster": "trauma-informed school wellbeing and staff training",
        "intent": "help schools respond to trauma-related need with calm routines, shared language and clear safeguarding boundaries",
        "audience": "principals, SENCOs, pastoral leads, safeguarding teams, teachers and classroom assistants",
        "problem": "Trauma-informed work can become vague if it is only treated as kindness or awareness. Schools need a practical approach that helps staff understand stress responses while keeping expectations, routines and safeguarding responsibilities clear.",
        "signs": ["pupils react strongly to small changes", "behaviour escalates faster during transitions", "staff feel unsure whether to comfort, challenge or refer", "support depends too heavily on one trusted adult"],
        "actions": ["keep routines predictable before changing consequences", "use calm scripts that separate the pupil from the behaviour", "notice triggers without making assumptions about history", "agree when concern moves into safeguarding or specialist support"],
        "workshop": "A trauma-informed practice workshop should give staff realistic classroom examples, not just theory. It should help adults respond with warmth and structure, understand stress behaviour and know when safeguarding or additional support is needed.",
        "external": ["de_wellbeing", "de_safeguarding"],
    },
    {
        "slug": "nurture-groups-in-schools",
        "title": "Nurture Groups in Schools: How to Make Small-Group Support Work",
        "keyword": "nurture groups in schools",
        "cluster": "nurture provision, SEMH support and school wellbeing",
        "intent": "help schools plan nurture groups that are targeted, structured and connected to classroom life",
        "audience": "school leaders, SENCOs, pastoral teams, nurture leads, classroom assistants and primary school staff",
        "problem": "Nurture groups can help pupils feel safer and more ready to learn, but they lose impact when they become a holding space with no clear aims. Schools need to know who the group is for, what it practises and how progress returns to the classroom.",
        "signs": ["some pupils need repeated small-group emotional support", "classroom strategies are not transferring after nurture sessions", "staff are unsure how long pupils should stay in the group", "parents ask what the support is designed to change"],
        "actions": ["define the pupil need before naming the group", "keep sessions predictable and skills-based", "link each activity back to classroom routines", "review progress with staff and families at agreed points"],
        "workshop": "Training on nurture groups should help staff choose pupils carefully, plan repeatable sessions, use simple outcome measures and connect nurture work to ordinary teaching, pastoral care and parent communication.",
        "external": ["de_wellbeing", "de_safeguarding"],
    },
    {
        "slug": "bereavement-support-in-schools",
        "title": "Bereavement Support in Schools: Helping Pupils After Loss",
        "keyword": "bereavement support in schools",
        "cluster": "bereavement, grief and school emotional wellbeing",
        "intent": "help schools support pupils and staff after a death while protecting routines, communication and safeguarding routes",
        "audience": "principals, pastoral teams, safeguarding leads, teachers, classroom assistants and staff supporting a bereaved pupil",
        "problem": "Bereavement can leave staff worried about saying the wrong thing. Pupils usually need honest age-appropriate language, steady routines, trusted adults and space for grief without being pressured to talk before they are ready.",
        "signs": ["a pupil becomes withdrawn or unusually reactive", "friends and classmates are unsure what to say", "staff avoid the topic because they feel unprepared", "grief appears weeks or months after the initial loss"],
        "actions": ["agree simple language before speaking with pupils", "protect routines while allowing flexibility", "identify one or two trusted adults for check-ins", "watch for delayed distress and safeguarding concerns"],
        "workshop": "Bereavement support training should help staff respond with honesty, warmth and boundaries. It should cover classroom communication, peer responses, family contact, staff wellbeing and when additional help may be needed.",
        "external": ["de_safeguarding", "de_wellbeing"],
    },
    {
        "slug": "emotional-literacy-programme-schools",
        "title": "Emotional Literacy Programme for Schools: Building Language Before Behaviour Escalates",
        "keyword": "emotional literacy programme schools",
        "cluster": "emotional literacy, pupil wellbeing and early intervention",
        "intent": "help schools develop shared pupil language for feelings, needs, choices and help-seeking",
        "audience": "school leaders, SENCOs, pastoral teams, primary teachers, classroom assistants and wellbeing coordinators",
        "problem": "Pupils cannot always regulate a feeling they cannot name. Emotional literacy work gives children and young people the language to describe what is happening, ask for help and understand the link between feelings, thoughts, body signals and behaviour.",
        "signs": ["pupils use behaviour to communicate feelings they cannot explain", "staff hear repeated phrases like I do not know or I am just angry", "friendship issues escalate because pupils lack repair language", "wellbeing work happens in bursts but not through daily routines"],
        "actions": ["teach a small feelings vocabulary and use it often", "connect emotions to body signals and choices", "model repair language after conflict", "embed the same language in class, pastoral and playground routines"],
        "workshop": "An emotional literacy programme should be practical, age-appropriate and repeated. Staff training should show adults how to use the same language in lessons, nurture work, transitions, conflict repair and parent conversations.",
        "external": ["de_wellbeing", "nhs_anxiety"],
    },
    {
        "slug": "anxiety-workshops-for-primary-schools",
        "title": "Anxiety Workshops for Primary Schools: Practical Early Support for Younger Pupils",
        "keyword": "anxiety workshops for primary schools",
        "cluster": "primary school anxiety support and early intervention",
        "intent": "help primary schools teach simple anxiety language, coping strategies and staff follow-up before worries become entrenched",
        "audience": "principals, primary teachers, classroom assistants, SENCOs, pastoral leads and parents planning early wellbeing support",
        "problem": "Younger pupils may show anxiety through clinginess, tummy aches, avoidance, tears, anger or repeated reassurance-seeking. Workshops should make worries easier to talk about while giving staff and pupils small practical steps they can use every day.",
        "signs": ["pupils avoid transitions, toilets, lunch, playground or separation", "worries appear as anger, tears or repeated questions", "families report morning distress before school", "staff offer reassurance but the worry quickly returns"],
        "actions": ["teach pupils to notice body signs of worry", "use simple language for brave small steps", "avoid endless reassurance cycles", "connect classroom strategies with parent communication"],
        "workshop": "Anxiety workshops for primary schools should be gentle, concrete and skills-based. They should help pupils understand worry, practise coping steps and help adults respond consistently when avoidance or reassurance-seeking appears.",
        "external": ["nhs_anxiety", "de_wellbeing"],
    },
]

INTERNAL_LINKS = [
    ("emotional regulation strategies", "/emotional-regulation-strategies-schools/"),
    ("pastoral care training", "/pastoral-care-training-schools/"),
    ("staff wellbeing training", "/staff-wellbeing-training-for-schools/"),
    ("safeguarding and wellbeing training", "/safeguarding-and-wellbeing-training-schools-ni/"),
    ("school anxiety workshops", "/school-anxiety-workshops-northern-ireland/"),
    ("behaviour as communication", "/behaviour-as-communication-in-schools/"),
    ("staff debriefing after school incidents", "/staff-debriefing-after-school-incidents/"),
    ("mental health training for teachers", "/mental-health-training-for-teachers/"),
    ("school wellbeing programme", "/school-wellbeing-programme-northern-ireland/"),
]


def wp_auth() -> HTTPBasicAuth:
    return HTTPBasicAuth(os.environ["HIP_WP_USERNAME"], os.environ["HIP_WP_APP_PASSWORD"])


def paragraph(text: str) -> str:
    return f"<p>{escape(text)}</p>"


def list_html(items: list[str]) -> str:
    return "<ul>" + "".join(f"<li>{escape(item.capitalize())}</li>" for item in items) + "</ul>"


def make_content(topic: dict) -> str:
    title = topic["title"]
    keyword = topic["keyword"]
    faq = [
        (
            f"What should {keyword} include?",
            "It should include clear language, practical examples, safe boundaries, staff follow-up and a realistic route for additional help where needed.",
        ),
        (
            "Is this a replacement for therapy or individual assessment?",
            "No. School workshops and staff training are early support and education. Pupils with significant, complex or persistent needs may need individual planning and appropriate referral routes.",
        ),
        (
            "How can schools make the training stick?",
            "Connect the session to staff scripts, pastoral routines, safeguarding procedures, parent communication and a review point so it becomes part of ordinary school practice.",
        ),
        (
            "Who should be involved?",
            "The strongest impact usually comes when senior leaders, pastoral staff, teachers and classroom assistants use the same language and agree the same follow-up steps.",
        ),
    ]
    faq_schema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {"@type": "Question", "name": q, "acceptedAnswer": {"@type": "Answer", "text": a}}
            for q, a in faq
        ],
    }
    article_schema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": title,
        "author": {"@type": "Organization", "name": "HIP Psychology"},
        "publisher": {"@type": "Organization", "name": "HIP Psychology"},
        "datePublished": dt.date.today().isoformat(),
        "dateModified": dt.date.today().isoformat(),
        "mainEntityOfPage": f"{SITE}/{topic['slug']}/",
    }

    external_links = [
        f'<a href="{OFFICIAL_LINKS[key]}" target="_blank" rel="noopener">{escape(EXT_LABELS[key])}</a>'
        for key in topic["external"]
    ]
    internal = [
        f'<a href="{href}">{escape(label)}</a>'
        for label, href in INTERNAL_LINKS
        if label.lower() not in title.lower()
    ]

    html: list[str] = []
    html.append(paragraph(f"{title} should give school staff practical language, safe boundaries and small repeatable steps. For {topic['audience']}, the goal is to make {topic['cluster']} easier to notice, discuss and support during the normal school week."))
    html.append(paragraph(f"This guide focuses on {topic['intent']}. It is written for schools planning workshops, staff training, pupil support or a wider wellbeing programme with HIP Psychology."))
    html.append("<h2>Why this matters for schools</h2>")
    html.append(paragraph(topic["problem"]))
    html.append(paragraph(f"When the response is planned early, {keyword} work can reduce avoidable escalation, improve shared language and help staff act consistently rather than relying on individual instinct."))
    html.append("<h2>Common signs staff may notice</h2>")
    html.append(paragraph("The signs will vary by age, setting and individual need, but repeated patterns are worth noticing before they become more serious."))
    html.append(list_html(topic["signs"]))
    html.append("<h2>Start with patterns, not labels</h2>")
    html.append(paragraph("Before choosing an intervention, look at when the concern happens, where it happens, who is present and what helps the pupil, staff member or team recover. This keeps the response practical and avoids turning one difficult moment into a fixed label."))
    html.append(paragraph("Schools can usually start with ordinary evidence: attendance notes, behaviour records, pupil voice, parent communication, classroom observations, staff reflections and safeguarding records where appropriate."))
    html.append("<h2>Practical steps schools can use</h2>")
    html.append(paragraph("The best steps are clear enough for busy staff to use consistently. They should not depend on one specialist adult being available every time."))
    html.append(list_html(topic["actions"]))
    html.append("<h2>What training or workshops should cover</h2>")
    html.append(paragraph(topic["workshop"]))
    html.append(paragraph("For pupils, the content should feel recognisable and safe. For staff, it should include scripts, boundaries and follow-up. For leaders, it should connect with safeguarding, recording, communication and the wider school wellbeing plan."))
    html.append("<h2>How to keep support safe</h2>")
    html.append(paragraph("Wellbeing work should never blur safeguarding responsibilities. Staff should avoid promising confidentiality, should record concerns through agreed systems and should know when a concern needs to move beyond classroom or workshop support."))
    html.append(paragraph("This is especially important when workshops, staff training or wellbeing conversations create disclosure, distress or repeated concern. Early support is valuable, but it works best when the route for additional help is clear."))
    html.append("<h2>Useful guidance to align with</h2>")
    html.append("<p>Schools in Northern Ireland can align this work with existing emotional health, safeguarding and staff wellbeing guidance. Helpful reference points include " + " and ".join(external_links) + ".</p>")
    html.append("<h2>Next steps for school leaders</h2>")
    html.append(paragraph("A useful next step is to choose one pressure point, one pupil or staff group and one visible change. That might be clearer help-seeking language, stronger staff scripts, calmer transitions, more consistent family communication or a more reliable review process."))
    html.append("<p>HIP Psychology can support schools with pupil workshops, staff training and whole-school wellbeing planning. Related HIP resources include " + ", ".join(internal[:4]) + ".</p>")
    html.append('<p><strong>Need support planning this in your school?</strong> <a href="/contact-us/">Contact HIP Psychology</a> to discuss workshops, staff training or a school wellbeing programme.</p>')
    html.append("<h2>FAQs</h2>")
    for q, a in faq:
        html.append(f"<h3>{escape(q)}</h3>")
        html.append(paragraph(a))
    html.append(f'<script type="application/ld+json">{json.dumps(faq_schema, ensure_ascii=False)}</script>')
    html.append(f'<script type="application/ld+json">{json.dumps(article_schema, ensure_ascii=False)}</script>')
    return "\n".join(html)


def excerpt(topic: dict) -> str:
    return f"A practical school guide on {topic['keyword']}, with signs to notice, staff strategies, safe follow-up and workshop planning advice."


def check_page(url: str, title: str) -> dict:
    r = requests.get(url, timeout=30)
    html = r.text
    return {
        "http_200": r.status_code == 200,
        "one_h1": len(re.findall(r"<h1[\s>]", html, re.I)) == 1,
        "h1_contains_title": title.split(":")[0].lower() in html.lower(),
        "h2_count": len(re.findall(r"<h2[\s>]", html, re.I)),
        "faq_schema": "FAQPage" in html,
        "article_schema": "Article" in html,
        "contact_cta": "/contact-us/" in html,
        "leak_markers_found": [
            m
            for m in ["target_keyword", "source_note", "draft_dir", "TODO", "frontmatter", "HIP_WP_APP_PASSWORD"]
            if m.lower() in html.lower()
        ],
    }


def get_existing_slug(auth: HTTPBasicAuth, slug: str) -> dict | None:
    resp = requests.get(
        f"{API}/posts",
        params={"slug": slug, "_fields": "id,slug,title,link,status"},
        auth=auth,
        timeout=30,
    )
    resp.raise_for_status()
    data = resp.json()
    return data[0] if data else None


def main() -> int:
    OUT.mkdir(parents=True, exist_ok=True)
    auth = wp_auth()
    duplicates = []
    for topic in TOPICS:
        existing = get_existing_slug(auth, topic["slug"])
        if existing:
            duplicates.append(f"{topic['slug']} ({existing.get('link')})")
    if duplicates:
        raise RuntimeError("Refusing duplicate existing slugs: " + ", ".join(duplicates))

    results = []
    for topic in TOPICS:
        slug = topic["slug"]
        content = make_content(topic)
        (OUT / f"{slug}.html").write_text(content)
        payload = {
            "title": topic["title"],
            "slug": slug,
            "status": "publish",
            "content": content,
            "excerpt": excerpt(topic),
            "categories": [CATEGORY_SCHOOL_WELLBEING],
        }
        resp = requests.post(f"{API}/posts", auth=auth, json=payload, timeout=45)
        if resp.status_code not in (200, 201):
            raise RuntimeError(f"WP publish failed for {slug}: {resp.status_code} {resp.text[:500]}")
        post = resp.json()
        checks = check_page(post["link"], topic["title"])
        results.append({
            "slug": slug,
            "title": topic["title"],
            "target_keyword": topic["keyword"],
            "action": "created",
            "id": post["id"],
            "status": post["status"],
            "link": post["link"],
            "checks": checks,
        })

    latest = requests.get(f"{API}/posts?per_page=20&_fields=slug", auth=auth, timeout=30)
    latest.raise_for_status()
    latest_slugs = {p["slug"] for p in latest.json()}
    sitemap = requests.get(f"{SITE}/wp-sitemap-posts-post-1.xml", timeout=30)
    sitemap_text = sitemap.text
    for res in results:
        res["in_latest_feed"] = res["slug"] in latest_slugs
        res["in_wp_post_sitemap"] = res["link"] in sitemap_text

    report = {
        "date": dt.datetime.now(dt.timezone.utc).isoformat(),
        "source_note": "Selected 5 next HIP school wellbeing keywords from remaining adjacent service-intent opportunities, avoiding prior blast slugs.",
        "official_sources_used": OFFICIAL_LINKS,
        "count": len(results),
        "results": results,
        "sitemap_status": sitemap.status_code,
        "draft_dir": str(OUT),
    }
    (OUT / "publish-result.json").write_text(json.dumps(report, indent=2))
    print(json.dumps(report, indent=2))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
