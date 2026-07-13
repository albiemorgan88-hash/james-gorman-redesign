#!/usr/bin/env python3
from __future__ import annotations

import datetime as dt
import json
import os
import re
from pathlib import Path
from html import escape
from urllib.parse import urljoin

import requests
from requests.auth import HTTPBasicAuth

SITE = "https://hippsychology.com"
API = f"{SITE}/wp-json/wp/v2"
OUT = Path(__file__).resolve().parent
OUT.mkdir(parents=True, exist_ok=True)
CATEGORY_SCHOOL_WELLBEING = 24

OFFICIAL_LINKS = {
    "de_wellbeing": "https://www.education-ni.gov.uk/articles/emotional-health-and-wellbeing",
    "nhs_anxiety": "https://www.nhs.uk/mental-health/children-and-young-adults/advice-for-parents/anxiety-in-children/",
    "aba_prevention": "https://anti-bullyingalliance.org.uk/tools-information/all-about-bullying/preventing-bullying",
    "ccea_sel": "https://ccea.org.uk/document/15054",
    "ccea_post_primary_sel": "https://ccea.org.uk/document/15055",
    "ea_safeguarding": "https://www.eani.org.uk/school-management/safeguarding-and-child-protection/resources",
    "de_safeguarding": "https://www.education-ni.gov.uk/articles/protecting-and-safeguarding-our-children",
    "hse_stress": "https://www.hse.gov.uk/stress/",
}

TOPICS = [
    {
        "slug": "post-primary-wellbeing-workshops",
        "title": "Post-Primary Wellbeing Workshops: Supporting Pupils Through Pressure Points",
        "keyword": "post primary wellbeing workshops",
        "intent": "support pupils through friendship pressure, exams, identity questions, attendance worries and transition into older year groups",
        "audience": "post-primary senior leaders, heads of year, pastoral teams and form tutors",
        "problem": "Post-primary pupils may look independent while still needing structured emotional support. Pressure can build quietly through academic expectations, peer relationships, online life and uncertainty about the future.",
        "signs": ["increased anxiety around tests or presentations", "withdrawal from form class or social time", "changes in attendance or punctuality", "conflict after online or friendship issues"],
        "actions": ["map pressure points by year group", "use tutor-time wellbeing routines", "teach help-seeking language", "connect workshops to pastoral follow-up"],
        "workshop": "A useful post-primary wellbeing workshop should feel age-appropriate, practical and respectful. Pupils need realistic language, short regulation tools and clear routes for asking for help without feeling exposed.",
        "external": ["de_wellbeing", "ccea_post_primary_sel"],
    },
    {
        "slug": "stress-management-workshops-for-teachers",
        "title": "Stress Management Workshops for Teachers: Practical Support for Busy School Staff",
        "keyword": "stress management workshops for teachers",
        "intent": "help staff recognise pressure early, use practical coping routines and protect sustainable classroom practice",
        "audience": "school leaders, teachers, classroom assistants and pastoral staff",
        "problem": "Teacher stress is often treated as a personal resilience issue, but school pressure is shaped by workload, emotional labour, behaviour needs, safeguarding concerns and limited recovery time.",
        "signs": ["feeling constantly on alert", "difficulty switching off after school", "irritability or emotional exhaustion", "reduced confidence after repeated challenging days"],
        "actions": ["normalise early stress signals", "identify controllable pressure points", "build peer support routines", "agree escalation routes for repeated overload"],
        "workshop": "A good staff stress workshop should avoid vague positivity. It should give staff practical tools, help leaders understand pressure points and connect wellbeing with workload and communication habits.",
        "external": ["de_wellbeing", "hse_stress"],
    },
    {
        "slug": "positive-mental-health-workshops-schools",
        "title": "Positive Mental Health Workshops for Schools: What Makes Them Useful?",
        "keyword": "positive mental health workshops schools",
        "intent": "move mental health awareness from a one-off assembly into everyday language, routines and support",
        "audience": "principals, wellbeing leads, pastoral teams and classroom teachers",
        "problem": "Positive mental health work can become too broad if schools do not connect it to real pupil experiences: worry, friendship conflict, self-esteem, stress, attendance and help-seeking.",
        "signs": ["pupils can name feelings but do not know what to do next", "assemblies are not followed up in class", "staff use different language for the same concerns", "support only starts when distress is already high"],
        "actions": ["choose one clear skill per session", "use examples pupils recognise", "repeat language across classrooms", "plan follow-up for pupils who need more support"],
        "workshop": "The strongest positive mental health workshops are specific. They teach one or two practical skills, make help-seeking feel normal and show pupils how to use the skill during a real school day.",
        "external": ["de_wellbeing", "ccea_post_primary_sel"],
    },
    {
        "slug": "social-emotional-learning-in-schools",
        "title": "Social and Emotional Learning in Schools: Turning Wellbeing Into Daily Practice",
        "keyword": "social emotional learning schools",
        "intent": "help schools build emotional awareness, relationship skills and responsible decision-making into everyday routines",
        "audience": "school leaders, teachers, SENCOs and wellbeing coordinators",
        "problem": "Social and emotional learning is strongest when it is not treated as an extra lesson. Pupils learn these skills through repeated adult language, classroom expectations, repair after conflict and safe opportunities to practise.",
        "signs": ["pupils struggle to recover after conflict", "classroom routines break down during transitions", "friendship issues affect learning", "staff want shared language for emotions and behaviour"],
        "actions": ["agree shared emotional vocabulary", "teach repair after conflict", "model calm adult scripts", "review how routines support belonging"],
        "workshop": "SEL training should help staff translate emotional and social skills into the ordinary moments of school: arrival, transitions, group work, mistakes, disagreement and return from dysregulation.",
        "external": ["ccea_post_primary_sel", "de_wellbeing"],
    },
    {
        "slug": "pupil-voice-and-wellbeing-schools",
        "title": "Pupil Voice and Wellbeing: How Schools Can Listen Without Over-Promising",
        "keyword": "pupil voice wellbeing",
        "intent": "help schools gather pupil views on wellbeing and turn them into practical, honest actions",
        "audience": "school leaders, pastoral teams, school councils and wellbeing leads",
        "problem": "Pupil voice loses trust when schools ask for views but do not explain what can change, what cannot change and what happens next.",
        "signs": ["pupils say surveys do not lead anywhere", "wellbeing concerns repeat across year groups", "quiet pupils are not represented", "feedback raises issues staff are unsure how to handle"],
        "actions": ["ask specific questions", "close the feedback loop", "include quieter pupil groups", "separate quick fixes from longer-term themes"],
        "workshop": "A pupil voice session should make participation safe and realistic. Pupils need to know their views matter, but schools also need clear boundaries, safeguarding routes and a plan for reporting back.",
        "external": ["de_wellbeing", "ccea_post_primary_sel"],
    },
    {
        "slug": "anxiety-in-teenagers-at-school",
        "title": "Anxiety in Teenagers at School: What Staff Can Notice and Do Early",
        "keyword": "anxiety in teenagers school",
        "intent": "help post-primary staff respond early when anxiety affects attendance, confidence, friendships or learning",
        "audience": "teachers, heads of year, pastoral teams and school leaders",
        "problem": "Teenage anxiety may show as avoidance, irritability, perfectionism, physical complaints or sudden drops in participation. It is not always visible as worry.",
        "signs": ["repeated reassurance seeking", "avoidance of specific lessons or social spaces", "panic before tests or presentations", "physical complaints before school or certain classes"],
        "actions": ["notice patterns across time and place", "use calm brief check-ins", "break return steps into smaller goals", "agree referral routes when distress persists"],
        "workshop": "Training on teenage anxiety should help staff separate normal pressure from anxiety that is starting to restrict a pupil's school life. It should include language, boundaries and escalation steps.",
        "external": ["nhs_anxiety", "de_wellbeing"],
    },
    {
        "slug": "child-anxiety-support-in-school",
        "title": "Child Anxiety Support in School: Practical First Steps for Staff",
        "keyword": "child anxiety support school",
        "intent": "give staff simple early steps for supporting anxious pupils without accidentally increasing avoidance",
        "audience": "primary teachers, SENCOs, classroom assistants and pastoral staff",
        "problem": "Anxious pupils often need warmth and structure at the same time. Too much pressure can overwhelm them, but too much avoidance can make the feared situation grow bigger.",
        "signs": ["frequent tears or stomach aches", "difficulty separating from a parent or carer", "avoidance of new tasks", "distress around changes in routine"],
        "actions": ["name the worry gently", "keep instructions short", "use graded brave steps", "celebrate effort rather than perfect calm"],
        "workshop": "A child anxiety workshop for school staff should focus on everyday moments: arrival, transitions, new tasks, asking for help, playground worries and returning to learning after upset.",
        "external": ["nhs_anxiety", "de_wellbeing"],
    },
    {
        "slug": "safeguarding-and-wellbeing-training-schools-ni",
        "title": "Safeguarding and Wellbeing Training in NI Schools: Where the Two Connect",
        "keyword": "safeguarding training schools northern ireland",
        "intent": "help staff understand how wellbeing concerns, pupil disclosures and early worries connect with proper safeguarding routes",
        "audience": "school leaders, designated teachers, pastoral teams and whole-school staff groups",
        "problem": "Wellbeing work should never blur safeguarding responsibilities. Staff need confidence to support pupils emotionally while knowing when a concern must move through the school's safeguarding procedures.",
        "signs": ["staff unsure whether a concern is wellbeing or safeguarding", "pupils disclose worries during workshops", "pastoral notes show repeated low-level concern", "teams need clearer escalation language"],
        "actions": ["restate safeguarding routes before wellbeing work", "record concerns consistently", "avoid promising confidentiality", "connect workshops to designated teacher processes"],
        "workshop": "Training should make the boundary clear: wellbeing workshops can create safer conversations, but safeguarding concerns must follow the school's agreed policy and statutory guidance.",
        "external": ["ea_safeguarding", "de_safeguarding", "de_wellbeing"],
    },
]

INTERNAL_LINKS = [
    ("school wellbeing programme", "/school-wellbeing-programme-northern-ireland/"),
    ("mental health training for teachers", "/mental-health-training-for-teachers/"),
    ("pastoral support in schools", "/pastoral-support-in-schools/"),
    ("school anxiety workshops", "/school-anxiety-workshops-northern-ireland/"),
    ("anti-bullying programme", "/anti-bullying-programme-schools/"),
    ("pupil wellbeing strategy", "/pupil-wellbeing-strategy-schools/"),
]


def wp_auth() -> HTTPBasicAuth:
    return HTTPBasicAuth(os.environ["HIP_WP_USERNAME"], os.environ["HIP_WP_APP_PASSWORD"])


def slugify(text: str) -> str:
    return re.sub(r"[^a-z0-9]+", "-", text.lower()).strip("-")


def paragraph(text: str) -> str:
    return f"<p>{text}</p>"


def list_html(items: list[str]) -> str:
    return "<ul>" + "".join(f"<li>{escape(item.capitalize())}</li>" for item in items) + "</ul>"


def make_content(topic: dict) -> str:
    title = topic["title"]
    keyword = topic["keyword"]
    faq = [
        (f"What should a {keyword} session include?", f"It should include practical examples, staff language, pupil activities and a clear follow-up plan so the work continues after the session."),
        ("Is this a replacement for individual therapy or assessment?", "No. A school workshop is early support and education. Pupils with significant or persistent distress may need a more individual plan and appropriate referral routes."),
        ("How can schools make the work stick?", "Use the same language across classrooms, revisit the skill in tutor time or assemblies, and agree who monitors pupils who need extra support."),
    ]
    faq_schema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [{"@type": "Question", "name": q, "acceptedAnswer": {"@type": "Answer", "text": a}} for q, a in faq],
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
    links = []
    for label, href in INTERNAL_LINKS[:3]:
        if label.lower() not in title.lower():
            links.append(f'<a href="{href}">{escape(label)}</a>')
    external_links = []
    for key in topic["external"]:
        url = OFFICIAL_LINKS[key]
        label = {
            "de_wellbeing": "Department of Education emotional health and wellbeing guidance",
            "nhs_anxiety": "NHS advice on anxiety in children",
            "aba_prevention": "Anti-Bullying Alliance prevention resources",
            "ccea_sel": "CCEA social and emotional learning guidance",
            "ccea_post_primary_sel": "CCEA post-primary social and emotional learning guidance",
            "ea_safeguarding": "Education Authority safeguarding resource library",
            "de_safeguarding": "Department of Education safeguarding guidance",
            "hse_stress": "HSE stress guidance",
        }[key]
        external_links.append(f'<a href="{url}" target="_blank" rel="noopener">{label}</a>')

    html = []
    # WordPress/theme renders the post title as the public H1, so keep the body
    # content below H1 level to avoid duplicate H1s in live HTML.
    html.append(paragraph(f"{title} are most useful when they are practical, calm and connected to everyday school life. For {topic['audience']}, the aim is not to add another initiative but to make support easier to recognise, explain and repeat."))
    html.append(paragraph(f"This guide focuses on {topic['intent']}. It is written for schools planning training, pupil workshops or a wider wellbeing programme with HIP Psychology."))
    html.append("<h2>Why this matters in school</h2>")
    html.append(paragraph(topic["problem"]))
    html.append(paragraph(f"When schools respond early, {keyword} work can protect learning time, reduce avoidable escalation and give pupils a shared language for asking for help. It also helps staff feel less alone when a pupil's needs are complex or changing."))
    html.append("<h2>Common signs staff may notice</h2>")
    html.append(paragraph("The signs will look different by age and context, but patterns are often visible before a crisis point."))
    html.append(list_html(topic["signs"]))
    html.append("<h2>Start with evidence, not assumptions</h2>")
    html.append(paragraph("Before choosing a workshop or intervention, gather what staff already know. Look at attendance, behaviour notes, pupil voice, parent communication and the times or places where the concern appears most often."))
    html.append(paragraph("This helps schools avoid two common mistakes: treating every concern as a discipline issue, or treating every concern as something only a specialist can address. Most effective support starts with ordinary routines done consistently."))
    html.append("<h2>Practical strategies schools can use</h2>")
    html.append(paragraph("The best strategies are simple enough for busy staff to use on a difficult day. They should be visible, repeatable and linked to the school's existing pastoral systems."))
    html.append(list_html(topic["actions"]))
    html.append("<h2>What a workshop should cover</h2>")
    html.append(paragraph(topic["workshop"]))
    html.append(paragraph("For pupils, the session should use examples they recognise. For staff, it should include language, boundaries and follow-up steps. For leaders, it should connect with policy, safeguarding and the wider school development plan."))
    html.append("<h2>How to involve parents and carers</h2>")
    html.append(paragraph("Parents and carers do not need a long technical explanation. They need to know what the school has noticed, what language is being used, what small step is being tried next and how communication will happen if the concern increases."))
    html.append(paragraph("Where anxiety, distress or risk is significant, schools should use their normal safeguarding and referral routes. A workshop can support early intervention, but it should not replace individual assessment or clinical advice where that is needed."))
    html.append("<h2>Useful guidance to align with</h2>")
    html.append(paragraph("Schools in Northern Ireland can align this work with wider emotional health and wellbeing guidance. Helpful reference points include " + " and ".join(external_links) + "."))
    html.append("<h2>Next steps for school leaders</h2>")
    html.append(paragraph("A practical next step is to choose one year group, one pressure point and one measurable change. For example: calmer transitions after break, better help-seeking before exams, clearer reporting routes, or a shared staff script for emotionally charged moments."))
    html.append(paragraph("HIP Psychology can support schools with pupil workshops, staff training and whole-school wellbeing planning. Related HIP resources include " + ", ".join(links[:3]) + "."))
    html.append('<p><strong>Need support planning this in your school?</strong> <a href="/contact-us/">Contact HIP Psychology</a> to discuss workshops, staff training or a school wellbeing programme.</p>')
    html.append("<h2>FAQs</h2>")
    for q, a in faq:
        html.append(f"<h3>{escape(q)}</h3>")
        html.append(paragraph(a))
    html.append(f'<script type="application/ld+json">{json.dumps(faq_schema, ensure_ascii=False)}</script>')
    html.append(f'<script type="application/ld+json">{json.dumps(article_schema, ensure_ascii=False)}</script>')
    return "\n".join(html)


def text_excerpt(topic: dict) -> str:
    return f"A practical guide for schools on {topic['keyword']}, with signs to notice, staff strategies, workshop planning and follow-up steps."


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


def main() -> int:
    auth = wp_auth()
    existing = requests.get(f"{API}/posts?per_page=100&_fields=id,slug,title,link,status", auth=auth, timeout=30)
    existing.raise_for_status()
    existing_slugs = {p["slug"]: p for p in existing.json()}

    results = []
    for topic in TOPICS:
        slug = topic["slug"]
        content = make_content(topic)
        md = OUT / f"{slug}.html"
        md.write_text(content)
        payload = {
            "title": topic["title"],
            "slug": slug,
            "status": "publish",
            "content": content,
            "excerpt": text_excerpt(topic),
            "categories": [CATEGORY_SCHOOL_WELLBEING],
        }
        if slug in existing_slugs:
            post_id = existing_slugs[slug]["id"]
            action = "updated"
            resp = requests.post(f"{API}/posts/{post_id}", auth=auth, json=payload, timeout=45)
        else:
            action = "created"
            resp = requests.post(f"{API}/posts", auth=auth, json=payload, timeout=45)
        if resp.status_code not in (200, 201):
            raise RuntimeError(f"WP publish failed for {slug}: {resp.status_code} {resp.text[:500]}")
        post = resp.json()
        link = post["link"]
        checks = check_page(link, topic["title"])
        results.append({
            "slug": slug,
            "title": topic["title"],
            "target_keyword": topic["keyword"],
            "action": action,
            "id": post["id"],
            "status": post["status"],
            "link": link,
            "checks": checks,
        })

    latest = requests.get(f"{API}/posts?per_page=20&_fields=slug", auth=auth, timeout=30).json()
    latest_slugs = {p["slug"] for p in latest}
    sitemap = requests.get(f"{SITE}/wp-sitemap-posts-post-1.xml", timeout=30)
    sitemap_text = sitemap.text
    for res in results:
        res["in_latest_feed"] = res["slug"] in latest_slugs
        res["in_wp_post_sitemap"] = res["link"] in sitemap_text

    report = {
        "date": dt.datetime.now(dt.timezone.utc).isoformat(),
        "source_note": "Selected from remaining HIP/Ahrefs school wellbeing long-tail opportunities not already covered in the May 4, May 6, May 14 or May 17 batches.",
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
