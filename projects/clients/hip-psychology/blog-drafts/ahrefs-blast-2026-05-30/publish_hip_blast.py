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
        "slug": "emotion-coaching-in-schools",
        "title": "Emotion Coaching in Schools: Helping Pupils Name, Understand and Regulate Feelings",
        "keyword": "emotion coaching in schools",
        "cluster": "emotional regulation and school wellbeing",
        "intent": "help schools use emotion coaching as a consistent pastoral and classroom approach rather than a one-off wellbeing activity",
        "audience": "principals, SENCOs, pastoral leads, teachers, classroom assistants and nurture teams",
        "problem": "Pupils often need help to understand what they are feeling before they can use a strategy. Without shared adult language, the same behaviour can be handled differently across classrooms, corridors and playgrounds.",
        "signs": ["pupils struggle to name feelings", "small setbacks become large incidents", "staff use different language for the same behaviour", "support works with one adult but not another"],
        "actions": ["notice the feeling before correcting the behaviour", "use calm language that names the emotion", "teach a small next step after the pupil is regulated", "review patterns so staff respond consistently"],
        "workshop": "A useful emotion coaching session should give staff simple scripts, boundaries and practice examples. It should help adults respond warmly without removing expectations or safeguarding responsibilities.",
        "external": ["de_wellbeing", "nhs_anxiety"],
    },
    {
        "slug": "pastoral-leadership-training-schools",
        "title": "Pastoral Leadership Training for Schools: Building Calm, Consistent Support Systems",
        "keyword": "pastoral leadership training schools",
        "cluster": "pastoral care and school wellbeing leadership",
        "intent": "support school leaders who want stronger pastoral systems, clearer escalation routes and more consistent staff confidence",
        "audience": "principals, vice principals, heads of year, pastoral leads, SENCOs and safeguarding teams",
        "problem": "Pastoral teams are often expected to hold behaviour, attendance, anxiety, family communication, safeguarding and staff advice at once. Training needs to turn that pressure into clear systems and repeatable decisions.",
        "signs": ["pastoral work depends too heavily on one person", "staff are unsure what to record or escalate", "similar pupil issues are handled in very different ways", "families receive inconsistent messages from school"],
        "actions": ["map the common pastoral pressure points", "define what staff should notice, record and escalate", "agree language for family communication", "build review points into ordinary school routines"],
        "workshop": "Strong pastoral leadership training should help leaders design a system staff can actually use. It should connect wellbeing, safeguarding, attendance, behaviour and communication instead of treating each as a separate problem.",
        "external": ["de_wellbeing", "de_safeguarding"],
    },
    {
        "slug": "critical-incident-support-schools",
        "title": "Critical Incident Support for Schools: What Staff and Pupils Need After a Difficult Event",
        "keyword": "critical incident support schools",
        "cluster": "school crisis response and emotional wellbeing",
        "intent": "help schools think clearly about pupil, staff and family support after bereavement, accident, violence, serious safeguarding concern or community shock",
        "audience": "school leaders, pastoral teams, safeguarding leads, governors and staff supporting pupils after difficult events",
        "problem": "After a serious incident, schools can feel pressure to say and do everything immediately. Pupils and staff usually need calm communication, safe routines, careful monitoring and a clear route for additional help.",
        "signs": ["staff feel unsure what to say", "pupils repeatedly ask alarming or confused questions", "ordinary routines feel difficult to restart", "some pupils or adults show delayed distress after the first few days"],
        "actions": ["agree one accurate message for staff to use", "protect calm routines where possible", "identify pupils or adults who may need extra support", "review the response after the immediate pressure passes"],
        "workshop": "Critical incident support should not dramatise the event or force disclosure. It should help adults respond steadily, keep safeguarding duties clear and create space for pupils and staff who need follow-up.",
        "external": ["de_safeguarding", "de_wellbeing"],
    },
    {
        "slug": "self-harm-awareness-training-schools",
        "title": "Self-Harm Awareness Training for Schools: Safe First Responses for Staff",
        "keyword": "self harm awareness training schools",
        "cluster": "safeguarding and pupil mental health",
        "intent": "help schools plan safe, boundaried staff training around self-harm awareness, disclosure, recording and referral",
        "audience": "school leaders, safeguarding teams, pastoral staff, teachers, classroom assistants and governors",
        "problem": "Self-harm can create fear and uncertainty for staff. Schools need a calm first response that avoids panic, keeps the pupil safe, records concerns properly and follows safeguarding procedures.",
        "signs": ["staff are anxious about saying the wrong thing", "concerns are disclosed informally without a clear next step", "recording and escalation routes are unclear", "pupils need support without the school trying to become a clinical service"],
        "actions": ["listen calmly and avoid shock language", "do not promise confidentiality", "follow the school's safeguarding process", "make sure staff know the route for urgent concerns"],
        "workshop": "Self-harm awareness training should be careful, non-sensational and practical. It should focus on adult response, safeguarding boundaries, help-seeking routes and what staff should do next.",
        "external": ["nhs_self_harm", "de_safeguarding", "de_wellbeing"],
    },
    {
        "slug": "staff-supervision-in-schools",
        "title": "Staff Supervision in Schools: Supporting Adults Who Carry Pastoral Pressure",
        "keyword": "staff supervision in schools",
        "cluster": "staff wellbeing and pastoral support",
        "intent": "help schools understand how supervision or reflective support can protect staff wellbeing and improve pastoral decision-making",
        "audience": "principals, senior leaders, pastoral teams, SENCOs, safeguarding leads and staff wellbeing leads",
        "problem": "Some school staff carry repeated emotional load from safeguarding, attendance, behaviour, family communication and pupil distress. Without reflective space, staff can become reactive, isolated or exhausted.",
        "signs": ["pastoral staff rarely get time to process difficult cases", "decisions are made under pressure without review", "staff feel personally responsible for every outcome", "support conversations happen informally but not safely"],
        "actions": ["define who needs reflective support most", "make supervision regular rather than crisis-only", "protect confidentiality while keeping safeguarding routes clear", "use supervision to improve systems, not just vent pressure"],
        "workshop": "Training around staff supervision should help schools choose a model that is realistic, boundaried and useful. It should support staff while strengthening the school's pastoral decisions.",
        "external": ["education_support", "hse_stress", "de_wellbeing"],
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
    results = []
    for topic in TOPICS:
        slug = topic["slug"]
        existing = get_existing_slug(auth, slug)
        if existing:
            raise RuntimeError(f"Refusing duplicate existing slug: {slug} ({existing.get('link')})")
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
