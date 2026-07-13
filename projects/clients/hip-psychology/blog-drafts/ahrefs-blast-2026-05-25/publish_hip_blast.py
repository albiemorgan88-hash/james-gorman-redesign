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
    "nhs_anxiety": "https://www.nhs.uk/mental-health/children-and-young-adults/advice-for-parents/anxiety-in-children/",
    "ea_safeguarding": "https://www.eani.org.uk/school-management/safeguarding-and-child-protection/resources",
    "de_safeguarding": "https://www.education-ni.gov.uk/articles/protecting-and-safeguarding-our-children",
    "hse_stress": "https://www.hse.gov.uk/stress/",
    "ccea_sel": "https://ccea.org.uk/document/15055",
}

TOPICS = [
    {
        "slug": "classroom-anxiety-strategies-for-teachers",
        "title": "Classroom Anxiety Strategies for Teachers: Practical Support During the School Day",
        "keyword": "classroom anxiety strategies teachers",
        "intent": "help teachers respond calmly when anxiety shows up during lessons, transitions, tests or social moments",
        "audience": "teachers, classroom assistants, SENCOs, pastoral teams and school leaders",
        "problem": "Anxiety in school is not always obvious. It can appear as avoidance, repeated reassurance seeking, perfectionism, irritability, silence, physical complaints or difficulty starting a task.",
        "signs": ["repeated requests to leave the room", "panic or tears before tests, reading aloud or presentations", "avoidance of new or uncertain tasks", "checking, erasing or restarting work repeatedly"],
        "actions": ["use short calm instructions", "offer a small first step instead of a broad demand", "separate reassurance from problem-solving", "agree a simple return-to-task routine"],
        "workshop": "A useful anxiety workshop should give staff shared language, practical scripts and clear boundaries so support does not accidentally reinforce long-term avoidance.",
        "external": ["nhs_anxiety", "de_wellbeing"],
    },
    {
        "slug": "wellbeing-assemblies-for-schools",
        "title": "Wellbeing Assemblies for Schools: How to Make Them Practical, Safe and Useful",
        "keyword": "wellbeing assemblies schools",
        "intent": "help schools make wellbeing assemblies more practical by linking them to classroom follow-up and pastoral systems",
        "audience": "principals, vice-principals, pastoral leads, heads of year and teachers",
        "problem": "Wellbeing assemblies can raise awareness, but pupils often need repetition, safe follow-up and ordinary classroom language before the message changes behaviour.",
        "signs": ["pupils remember the assembly but not what to do next", "staff use different wellbeing language across classes", "assemblies are not connected to tutor time", "pupils ask for help only when distress has escalated"],
        "actions": ["choose one clear theme", "give staff a short follow-up activity", "name the help-seeking route", "repeat the same language in tutor time"],
        "workshop": "A strong wellbeing assembly should be age-appropriate, practical and connected to what pupils can do that day, not just an inspirational message.",
        "external": ["de_wellbeing", "ccea_sel"],
    },
    {
        "slug": "parent-mental-health-workshops-schools",
        "title": "Parent Mental Health Workshops in Schools: Building Shared Language Around Pupil Wellbeing",
        "keyword": "parent mental health workshops schools",
        "intent": "help schools involve parents and carers in mental health support without blame, jargon or over-promising",
        "audience": "school leaders, pastoral teams, SENCOs and parent engagement leads",
        "problem": "Parents and carers are often asked to support school wellbeing work, but they may not know the language, routines or boundaries the school is using with pupils.",
        "signs": ["families ask for advice after concerns escalate", "home and school use different language for the same worry", "parents feel blamed or left out", "staff are unsure how to explain early wellbeing support"],
        "actions": ["share simple scripts", "explain what school can and cannot provide", "normalise early conversations", "signpost clearly when extra support is needed"],
        "workshop": "A parent workshop should make wellbeing support feel practical and collaborative. It should help families understand what school is doing and how they can reinforce the same small steps at home.",
        "external": ["nhs_anxiety", "de_wellbeing"],
    },
    {
        "slug": "behaviour-as-communication-in-schools",
        "title": "Behaviour as Communication in Schools: What Staff Can Notice Before Escalation",
        "keyword": "behaviour as communication schools",
        "intent": "help staff look for patterns behind behaviour while keeping boundaries, safety and accountability clear",
        "audience": "teachers, classroom assistants, pastoral teams, SENCOs and behaviour leads",
        "problem": "Behaviour can communicate unmet need, stress, confusion, anxiety, sensory overload, friendship issues or lack of skill. Understanding this does not mean ignoring boundaries.",
        "signs": ["behaviour appears around the same lesson, time or transition", "a pupil escalates when corrected publicly", "conflict follows unstructured social time", "shutdown or refusal appears after uncertainty"],
        "actions": ["look for patterns before labels", "use calm predictable scripts", "repair after incidents", "separate consequences from emotional support"],
        "workshop": "Training should help staff stay boundaried while asking better questions: what happened before the behaviour, what skill was missing, and what support could reduce repeat escalation?",
        "external": ["de_wellbeing", "ea_safeguarding"],
    },
    {
        "slug": "restorative-practice-and-wellbeing-schools",
        "title": "Restorative Practice and Wellbeing in Schools: Repairing Harm Without Losing Boundaries",
        "keyword": "restorative practice wellbeing schools",
        "intent": "help schools connect restorative conversations with emotional literacy, relationships and clear follow-up after conflict",
        "audience": "pastoral leaders, behaviour leads, heads of year, teachers and classroom assistants",
        "problem": "Restorative practice can become weak if it is treated as simply saying sorry. It works best when pupils understand harm, responsibility, repair and future choices.",
        "signs": ["friendship conflict repeats after apologies", "pupils know rules but not repair steps", "staff use different language after incidents", "victims feel the process is rushed"],
        "actions": ["prepare pupils before restorative conversations", "name the harm clearly", "agree specific repair actions", "review whether the repair actually happened"],
        "workshop": "A restorative wellbeing workshop should teach adults how to hold a calm, safe and boundaried conversation, not force quick reconciliation.",
        "external": ["de_wellbeing", "ccea_sel"],
    },
    {
        "slug": "staff-debriefing-after-school-incidents",
        "title": "Staff Debriefing After School Incidents: Supporting Adults After Difficult Moments",
        "keyword": "staff debriefing after school incidents",
        "intent": "help schools support staff after challenging incidents while learning from what happened and protecting confidentiality",
        "audience": "school leaders, pastoral teams, designated teachers, SENCOs and staff wellbeing leads",
        "problem": "After a difficult incident, staff may move straight back into teaching without time to process, record, learn or recover. That can increase stress and reduce confidence.",
        "signs": ["staff replay the incident repeatedly", "confidence drops after challenging behaviour", "records are inconsistent", "teams disagree about what should happen next"],
        "actions": ["separate emotional debrief from formal investigation", "record facts while they are fresh", "identify what support the adult needs", "agree one practical learning point"],
        "workshop": "Staff debrief training should protect adults without turning debriefs into gossip or blame. It should clarify who leads, what is recorded and how safeguarding routes are followed.",
        "external": ["hse_stress", "ea_safeguarding", "de_safeguarding"],
    },
    {
        "slug": "playground-friendship-support-schools",
        "title": "Playground Friendship Support in Schools: Early Help for Conflict, Exclusion and Worries",
        "keyword": "playground friendship support schools",
        "intent": "help schools support friendship difficulties in unstructured time before they become repeated distress, avoidance or bullying concerns",
        "audience": "primary teachers, classroom assistants, lunchtime supervisors, pastoral teams and school leaders",
        "problem": "Many pupil wellbeing concerns become visible during break and lunch because unstructured time asks pupils to manage friendship, negotiation, rejection and conflict quickly.",
        "signs": ["a pupil repeatedly walks alone", "friendship groups change suddenly", "minor disputes restart every break", "children report feeling left out but cannot explain the pattern"],
        "actions": ["map playground hotspots", "teach simple joining-in scripts", "use trusted adults for quick check-ins", "record repeated patterns rather than isolated drama"],
        "workshop": "A friendship support workshop should give staff practical ways to notice patterns, coach social language and separate ordinary conflict from bullying or safeguarding concerns.",
        "external": ["de_wellbeing", "ea_safeguarding"],
    },
    {
        "slug": "sensory-overload-in-the-classroom",
        "title": "Sensory Overload in the Classroom: Practical Adjustments for Busy School Environments",
        "keyword": "sensory overload classroom",
        "intent": "help school staff notice sensory stress and make reasonable classroom adjustments that support learning and regulation",
        "audience": "teachers, classroom assistants, SENCOs, pastoral teams and school leaders",
        "problem": "Busy classrooms can include noise, light, movement, transitions, smells, touch and social pressure. Some pupils cope outwardly until they suddenly shut down, leave, cry or escalate.",
        "signs": ["distress during noise or transitions", "covering ears or seeking corners", "sudden refusal after busy movement", "fatigue or irritability late in the day"],
        "actions": ["reduce avoidable noise where possible", "prepare pupils for transitions", "offer a predictable calm space routine", "use observation to identify triggers"],
        "workshop": "Training should help staff understand sensory overload without assuming every pupil needs the same adjustment. The goal is to reduce barriers while keeping participation and belonging central.",
        "external": ["de_wellbeing", "ccea_sel"],
    },
]

INTERNAL_LINKS = [
    ("school wellbeing programme", "/school-wellbeing-programme-northern-ireland/"),
    ("mental health training for teachers", "/mental-health-training-for-teachers/"),
    ("pastoral support in schools", "/pastoral-support-in-schools/"),
    ("school anxiety workshops", "/school-anxiety-workshops-northern-ireland/"),
    ("pupil wellbeing strategy", "/pupil-wellbeing-strategy-schools/"),
    ("safeguarding and wellbeing training", "/safeguarding-and-wellbeing-training-schools-ni/"),
]


def wp_auth() -> HTTPBasicAuth:
    return HTTPBasicAuth(os.environ["HIP_WP_USERNAME"], os.environ["HIP_WP_APP_PASSWORD"])


def paragraph(text: str) -> str:
    return f"<p>{text}</p>"


def list_html(items: list[str]) -> str:
    return "<ul>" + "".join(f"<li>{escape(item.capitalize())}</li>" for item in items) + "</ul>"


def make_content(topic: dict) -> str:
    title = topic["title"]
    keyword = topic["keyword"]
    faq = [
        (f"What should {keyword} support include?", "It should include clear adult language, practical examples, pupil-safe activities, boundaries, and a follow-up route so support continues after the session."),
        ("Is this a replacement for therapy or assessment?", "No. School workshops and staff training are early support and education. Pupils with significant, complex or persistent needs may require individual planning and appropriate referral routes."),
        ("How can schools make the work consistent?", "Use shared scripts, repeat the same language across classrooms, agree recording and escalation routes, and review whether the support is changing day-to-day practice."),
        ("Who should attend the training?", "The strongest impact usually comes when senior leaders, pastoral staff, classroom teachers and classroom assistants hear the same guidance and agree the same follow-up steps."),
    ]
    faq_schema = {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": q, "acceptedAnswer": {"@type": "Answer", "text": a}} for q, a in faq]}
    article_schema = {"@context": "https://schema.org", "@type": "Article", "headline": title, "author": {"@type": "Organization", "name": "HIP Psychology"}, "publisher": {"@type": "Organization", "name": "HIP Psychology"}, "datePublished": dt.date.today().isoformat(), "dateModified": dt.date.today().isoformat(), "mainEntityOfPage": f"{SITE}/{topic['slug']}/"}

    ext_labels = {
        "de_wellbeing": "Department of Education emotional health and wellbeing guidance",
        "nhs_anxiety": "NHS advice on anxiety in children",
        "ea_safeguarding": "Education Authority safeguarding resources",
        "de_safeguarding": "Department of Education safeguarding guidance",
        "hse_stress": "HSE stress guidance",
        "ccea_sel": "CCEA social and emotional learning guidance",
    }
    external_links = [f'<a href="{OFFICIAL_LINKS[key]}" target="_blank" rel="noopener">{ext_labels[key]}</a>' for key in topic["external"]]
    internal = [f'<a href="{href}">{escape(label)}</a>' for label, href in INTERNAL_LINKS if label.lower() not in title.lower()]

    html: list[str] = []
    # Theme renders the title as the public H1, so body starts below H1 level.
    html.append(paragraph(f"{title} are most useful when they give staff practical language and small repeatable steps. For {topic['audience']}, the aim is to make support easier to notice, explain and follow up during an ordinary school day."))
    html.append(paragraph(f"This guide focuses on {topic['intent']}. It is written for schools planning pupil workshops, staff training or wider wellbeing support with HIP Psychology."))
    html.append("<h2>Why this matters in school</h2>")
    html.append(paragraph(topic["problem"]))
    html.append(paragraph(f"When schools respond early, {keyword} work can reduce avoidable escalation, protect learning time and give pupils a safer route for asking for help. It also helps staff use the same language rather than relying on individual instinct."))
    html.append("<h2>Common signs staff may notice</h2>")
    html.append(paragraph("The signs will vary by age and setting, but repeated patterns are worth noticing before they become more serious."))
    html.append(list_html(topic["signs"]))
    html.append("<h2>Start with patterns, not labels</h2>")
    html.append(paragraph("Before choosing an intervention, look at when the concern happens, where it happens, who is present and what helps the pupil recover. This keeps the response practical and avoids turning one difficult moment into a fixed label."))
    html.append(paragraph("Schools can usually start with ordinary evidence: attendance notes, behaviour records, pupil voice, parent communication, classroom observations and staff reflections."))
    html.append("<h2>Practical steps schools can use</h2>")
    html.append(paragraph("The best steps are clear enough for busy staff to use consistently. They should not depend on one specialist adult being available every time."))
    html.append(list_html(topic["actions"]))
    html.append("<h2>What training or workshops should cover</h2>")
    html.append(paragraph(topic["workshop"]))
    html.append(paragraph("For pupils, the content should feel recognisable and safe. For staff, it should include scripts, boundaries and follow-up. For leaders, it should connect with safeguarding, recording and the wider school wellbeing plan."))
    html.append("<h2>How to keep support safe</h2>")
    html.append(paragraph("Wellbeing work should never blur safeguarding responsibilities. Staff should avoid promising confidentiality, should record concerns through agreed systems, and should know when a concern needs to move beyond classroom support."))
    html.append(paragraph("This is especially important when workshops or conversations create disclosure, distress or repeated concern. Early support is valuable, but it works best when the route for additional help is clear."))
    html.append("<h2>Useful guidance to align with</h2>")
    html.append(paragraph("Schools in Northern Ireland can align this work with existing emotional health, safeguarding and curriculum guidance. Helpful reference points include " + " and ".join(external_links) + "."))
    html.append("<h2>Next steps for school leaders</h2>")
    html.append(paragraph("A useful next step is to choose one pupil group, one pressure point and one visible change. That might be calmer transitions, better help-seeking language, clearer staff scripts, stronger parent communication or a more consistent follow-up process."))
    html.append(paragraph("HIP Psychology can support schools with pupil workshops, staff training and whole-school wellbeing planning. Related HIP resources include " + ", ".join(internal[:3]) + "."))
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


def main() -> int:
    auth = wp_auth()
    existing = requests.get(f"{API}/posts?per_page=100&_fields=id,slug,title,link,status", auth=auth, timeout=30)
    existing.raise_for_status()
    existing_slugs = {p["slug"]: p for p in existing.json()}

    results = []
    for topic in TOPICS:
        slug = topic["slug"]
        if slug in existing_slugs:
            raise RuntimeError(f"Refusing duplicate existing slug: {slug}")
        content = make_content(topic)
        (OUT / f"{slug}.html").write_text(content)
        payload = {"title": topic["title"], "slug": slug, "status": "publish", "content": content, "excerpt": excerpt(topic), "categories": [CATEGORY_SCHOOL_WELLBEING]}
        resp = requests.post(f"{API}/posts", auth=auth, json=payload, timeout=45)
        if resp.status_code not in (200, 201):
            raise RuntimeError(f"WP publish failed for {slug}: {resp.status_code} {resp.text[:500]}")
        post = resp.json()
        checks = check_page(post["link"], topic["title"])
        results.append({"slug": slug, "title": topic["title"], "target_keyword": topic["keyword"], "action": "created", "id": post["id"], "status": post["status"], "link": post["link"], "checks": checks})

    latest = requests.get(f"{API}/posts?per_page=20&_fields=slug", auth=auth, timeout=30).json()
    latest_slugs = {p["slug"] for p in latest}
    sitemap = requests.get(f"{SITE}/wp-sitemap-posts-post-1.xml", timeout=30)
    sitemap_text = sitemap.text
    for res in results:
        res["in_latest_feed"] = res["slug"] in latest_slugs
        res["in_wp_post_sitemap"] = res["link"] in sitemap_text

    report = {"date": dt.datetime.now(dt.timezone.utc).isoformat(), "source_note": "Selected adjacent school wellbeing / pastoral long-tail opportunities not already covered in previous HIP batches.", "official_sources_used": OFFICIAL_LINKS, "count": len(results), "results": results, "sitemap_status": sitemap.status_code, "draft_dir": str(OUT)}
    (OUT / "publish-result.json").write_text(json.dumps(report, indent=2))
    print(json.dumps(report, indent=2))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
