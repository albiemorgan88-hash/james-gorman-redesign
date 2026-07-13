#!/usr/bin/env python3
from __future__ import annotations

import datetime as dt
import json
import os
import re
from pathlib import Path
from html import escape

import requests
from requests.auth import HTTPBasicAuth

SITE = "https://hippsychology.com"
API = f"{SITE}/wp-json/wp/v2"
OUT = Path(__file__).resolve().parent
OUT.mkdir(parents=True, exist_ok=True)
CATEGORY_SCHOOL_WELLBEING = 24

OFFICIAL_LINKS = {
    "de_wellbeing": "https://www.education-ni.gov.uk/articles/emotional-health-and-wellbeing",
    "de_safeguarding": "https://www.education-ni.gov.uk/articles/protecting-and-safeguarding-our-children",
    "nhs_anxiety": "https://www.nhs.uk/mental-health/children-and-young-adults/advice-for-parents/anxiety-in-children/",
    "hse_stress": "https://www.hse.gov.uk/stress/",
    "ccea_personal_development": "https://ccea.org.uk/learning-resources/personal-development",
}

TOPICS = [
    {
        "slug": "staff-wellbeing-training-for-schools",
        "title": "Staff Wellbeing Training for Schools: Practical Support for Busy Teams",
        "keyword": "staff wellbeing training",
        "cluster": "school staff wellbeing",
        "intent": "help school leaders choose practical staff wellbeing training that supports adults without adding more pressure to an already stretched team",
        "audience": "principals, senior leaders, pastoral leads, SENCOs, governors and staff wellbeing teams",
        "problem": "School staff wellbeing can be weakened by workload, emotionally demanding incidents, repeated change, pupil distress, parent communication and the pressure to keep teaching while supporting everyone else.",
        "signs": ["staff absence or presenteeism is increasing", "small issues escalate faster than usual", "staff avoid asking for help because they feel guilty", "teams feel reactive rather than supported"],
        "actions": ["name the pressure points honestly", "make support visible and easy to access", "protect debrief time after difficult incidents", "train leaders to spot stress before crisis"],
        "workshop": "A useful staff wellbeing session should be practical, confidentially framed and linked to the school's ordinary systems. It should not tell staff to be more resilient while ignoring workload, communication and leadership routines.",
        "external": ["hse_stress", "de_wellbeing"],
    },
    {
        "slug": "school-refusal-northern-ireland",
        "title": "School Refusal in Northern Ireland: Early Support for Attendance Anxiety",
        "keyword": "school refusal northern ireland",
        "cluster": "attendance anxiety and emotionally based school avoidance",
        "intent": "support schools and families to respond early when anxiety, distress or avoidance begins to affect attendance",
        "audience": "school leaders, pastoral teams, SENCOs, attendance leads, teachers and parents or carers",
        "problem": "School refusal is often linked with anxiety, overwhelm, friendship worries, transition, learning needs, family stress or repeated negative experiences. It should be handled with curiosity, structure and safeguarding awareness rather than blame.",
        "signs": ["frequent morning distress or physical complaints", "attendance drops around specific days, lessons or transitions", "the pupil wants to learn but cannot get through the door", "families and school feel stuck in repeated reassurance cycles"],
        "actions": ["map the avoidance pattern", "agree one small return step", "keep communication calm and consistent", "escalate persistent or serious concerns through appropriate routes"],
        "workshop": "Training should help staff distinguish avoidance, anxiety, safeguarding concern and ordinary reluctance. It should give teams a shared plan for gradual return, family communication and review.",
        "external": ["nhs_anxiety", "de_wellbeing", "de_safeguarding"],
    },
    {
        "slug": "school-psychology-support-for-schools",
        "title": "School Psychology Support for Schools: Turning Wellbeing Concerns Into Practical Plans",
        "keyword": "school psychology",
        "cluster": "educational psychology and school wellbeing",
        "intent": "explain how school psychology support can help schools understand behaviour, anxiety, wellbeing and learning concerns in a practical whole-school way",
        "audience": "principals, SENCOs, pastoral teams, classroom teachers and parents planning support",
        "problem": "Schools often see overlapping concerns: anxiety, behaviour, attention, friendship conflict, attendance difficulty, sensory stress and staff uncertainty about what to try next.",
        "signs": ["the same concern keeps returning despite support", "staff describe the pupil in different ways", "parents and school have different explanations", "records show patterns but no shared plan"],
        "actions": ["collect evidence across settings", "listen to pupil and staff voice", "agree hypotheses before interventions", "review whether the plan changes daily practice"],
        "workshop": "A school psychology input should make complex needs easier to understand without turning every child into a label. The strongest work gives adults clearer questions, safer language and practical next steps.",
        "external": ["de_wellbeing", "ccea_personal_development"],
    },
    {
        "slug": "mental-health-awareness-in-schools",
        "title": "Mental Health Awareness in Schools: Moving From One-Off Talks to Daily Practice",
        "keyword": "mental health awareness schools",
        "cluster": "mental health in schools",
        "intent": "help schools turn mental health awareness into routines pupils and staff can actually use after the assembly or workshop ends",
        "audience": "school leaders, pastoral teams, heads of year, teachers and classroom assistants",
        "problem": "Awareness is useful, but pupils need repeated language, safe help-seeking routes and adult consistency before it changes behaviour or confidence.",
        "signs": ["pupils know slogans but not where to go for help", "staff use different wellbeing language", "awareness weeks are not linked to tutor time", "concerns are noticed only when they become urgent"],
        "actions": ["choose one theme at a time", "teach help-seeking language explicitly", "repeat the same message in class and tutor time", "make safeguarding and referral routes clear"],
        "workshop": "Mental health awareness work should be age-appropriate, non-alarming and practical. It should never promise more than the school can safely provide.",
        "external": ["de_wellbeing", "nhs_anxiety", "de_safeguarding"],
    },
    {
        "slug": "resilience-workshop-for-primary-schools",
        "title": "Resilience Workshop for Primary Schools: Building Coping Skills Without Blaming Children",
        "keyword": "resilience workshop primary school",
        "cluster": "resilience training schools",
        "intent": "help primary schools plan resilience workshops that teach coping skills while still recognising stress, support needs and adult responsibility",
        "audience": "primary principals, teachers, classroom assistants, pastoral leads and parent engagement teams",
        "problem": "Resilience can be misunderstood as telling children to toughen up. In primary schools, it works best when adults teach feelings language, problem-solving, help-seeking and recovery after setbacks.",
        "signs": ["children avoid mistakes or new tasks", "friendship setbacks lead to big distress", "pupils struggle to calm after frustration", "staff want shared language for coping skills"],
        "actions": ["teach feelings before strategies", "model small problem-solving steps", "normalise asking for help", "practise recovery after mistakes"],
        "workshop": "A resilience workshop should be interactive, safe and developmentally appropriate. It should give pupils simple words and routines they can use in class, playground and home conversations.",
        "external": ["de_wellbeing", "ccea_personal_development"],
    },
]

INTERNAL_LINKS = [
    ("school wellbeing programme", "/school-wellbeing-programme-northern-ireland/"),
    ("mental health training for teachers", "/mental-health-training-for-teachers/"),
    ("staff debriefing after school incidents", "/staff-debriefing-after-school-incidents/"),
    ("emotionally based school avoidance", "/emotionally-based-school-avoidance/"),
    ("school anxiety workshops", "/school-anxiety-workshops-northern-ireland/"),
    ("pupil wellbeing strategy", "/pupil-wellbeing-strategy-schools/"),
    ("resilience workshops for schools", "/resilience-workshops-for-schools/"),
    ("educational psychologist northern ireland", "/educational-psychologist-northern-ireland/"),
]

EXT_LABELS = {
    "de_wellbeing": "Department of Education emotional health and wellbeing guidance",
    "de_safeguarding": "Department of Education safeguarding guidance",
    "nhs_anxiety": "NHS advice on anxiety in children",
    "hse_stress": "HSE guidance on work-related stress",
    "ccea_personal_development": "CCEA personal development resources",
}


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
        (f"What should {keyword} support include?", "It should include clear language, practical examples, safe boundaries, staff follow-up and a realistic route for further help where needed."),
        ("Is this a replacement for therapy or individual assessment?", "No. School workshops and staff training are early support and education. Pupils with significant, complex or persistent needs may need individual planning and appropriate referral routes."),
        ("How can schools avoid one-off awareness work?", "Connect the session to tutor time, staff scripts, parent communication, recording systems and a review point so the learning becomes part of ordinary school practice."),
        ("Who should be involved?", "The strongest impact usually comes when senior leaders, pastoral staff, teachers and classroom assistants use the same language and agree the same follow-up steps."),
    ]
    faq_schema = {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": q, "acceptedAnswer": {"@type": "Answer", "text": a}} for q, a in faq]}
    article_schema = {"@context": "https://schema.org", "@type": "Article", "headline": title, "author": {"@type": "Organization", "name": "HIP Psychology"}, "publisher": {"@type": "Organization", "name": "HIP Psychology"}, "datePublished": dt.date.today().isoformat(), "dateModified": dt.date.today().isoformat(), "mainEntityOfPage": f"{SITE}/{topic['slug']}/"}

    external_links = [f'<a href="{OFFICIAL_LINKS[key]}" target="_blank" rel="noopener">{escape(EXT_LABELS[key])}</a>' for key in topic["external"]]
    internal = [f'<a href="{href}">{escape(label)}</a>' for label, href in INTERNAL_LINKS if label.lower() not in title.lower()]

    html: list[str] = []
    html.append(paragraph(f"{title} should give schools practical language, safe boundaries and small repeatable steps. For {topic['audience']}, the goal is to make {topic['cluster']} easier to notice, discuss and support during the normal school week."))
    html.append(paragraph(f"This guide focuses on {topic['intent']}. It is written for schools planning workshops, staff training, pupil support or a wider wellbeing programme with HIP Psychology."))
    html.append("<h2>Why this keyword matters for schools</h2>")
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
    html.append(paragraph("This is especially important when workshops, attendance concerns or wellbeing conversations create disclosure, distress or repeated concern. Early support is valuable, but it works best when the route for additional help is clear."))
    html.append("<h2>Useful guidance to align with</h2>")
    html.append("<p>Schools in Northern Ireland can align this work with existing emotional health, safeguarding and curriculum guidance. Helpful reference points include " + " and ".join(external_links) + ".</p>")
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
        "one_h1": len(re.findall(r"<h1[\\s>]", html, re.I)) == 1,
        "h1_contains_title": title.split(":")[0].lower() in html.lower(),
        "h2_count": len(re.findall(r"<h2[\\s>]", html, re.I)),
        "faq_schema": "FAQPage" in html,
        "article_schema": "Article" in html,
        "contact_cta": "/contact-us/" in html,
        "leak_markers_found": [m for m in ["target_keyword", "source_note", "draft_dir", "TODO", "frontmatter"] if m.lower() in html.lower()],
    }


def get_existing_slug(auth: HTTPBasicAuth, slug: str) -> dict | None:
    resp = requests.get(f"{API}/posts", params={"slug": slug, "_fields": "id,slug,title,link,status"}, auth=auth, timeout=30)
    resp.raise_for_status()
    data = resp.json()
    return data[0] if data else None


def main() -> int:
    auth = wp_auth()
    results = []
    for topic in TOPICS:
        slug = topic["slug"]
        existing = get_existing_slug(auth, slug)
        if existing:
            raise RuntimeError(f"Refusing duplicate existing slug: {slug} ({existing.get('link')})")
        content = make_content(topic)
        (OUT / f"{slug}.html").write_text(content)
        payload = {"title": topic["title"], "slug": slug, "status": "publish", "content": content, "excerpt": excerpt(topic), "categories": [CATEGORY_SCHOOL_WELLBEING]}
        resp = requests.post(f"{API}/posts", auth=auth, json=payload, timeout=45)
        if resp.status_code not in (200, 201):
            raise RuntimeError(f"WP publish failed for {slug}: {resp.status_code} {resp.text[:500]}")
        post = resp.json()
        checks = check_page(post["link"], topic["title"])
        results.append({"slug": slug, "title": topic["title"], "target_keyword": topic["keyword"], "action": "created", "id": post["id"], "status": post["status"], "link": post["link"], "checks": checks})

    latest = requests.get(f"{API}/posts?per_page=20&_fields=slug", auth=auth, timeout=30)
    latest.raise_for_status()
    latest_slugs = {p["slug"] for p in latest.json()}
    sitemap = requests.get(f"{SITE}/wp-sitemap-posts-post-1.xml", timeout=30)
    sitemap_text = sitemap.text
    for res in results:
        res["in_latest_feed"] = res["slug"] in latest_slugs
        res["in_wp_post_sitemap"] = res["link"] in sitemap_text

    report = {"date": dt.datetime.now(dt.timezone.utc).isoformat(), "source_note": "Selected 5 next HIP school wellbeing keywords from remaining Ahrefs/adjacent service-intent opportunities, avoiding prior blast slugs.", "official_sources_used": OFFICIAL_LINKS, "count": len(results), "results": results, "sitemap_status": sitemap.status_code, "draft_dir": str(OUT)}
    (OUT / "publish-result.json").write_text(json.dumps(report, indent=2))
    print(json.dumps(report, indent=2))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
