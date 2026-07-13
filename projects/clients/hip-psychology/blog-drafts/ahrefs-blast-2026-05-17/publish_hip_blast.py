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
}

TOPICS = [
    {
        "slug": "emotional-regulation-strategies-schools",
        "title": "Emotional Regulation Strategies for Schools: A Practical Staff Guide",
        "keyword": "emotional regulation schools",
        "intent": "help staff respond calmly when pupils move quickly from small frustration to visible distress",
        "audience": "class teachers, SENCOs, pastoral staff and senior leaders",
        "problem": "Pupils are often described as defiant, distracted or disruptive when the first issue is actually that their nervous system has moved beyond easy verbal reasoning.",
        "signs": ["rapid escalation after correction", "shutdown, refusal or leaving the room", "repeated conflict after unstructured time", "tearfulness or anger after apparently small triggers"],
        "actions": ["agree shared language for regulation", "map predictable pressure points", "teach repair routines after incidents", "use short scripts before long explanations"],
        "workshop": "A useful staff session should translate emotional regulation into classroom routines: what to notice, what to say, when to reduce demand and how to return to learning without shame.",
        "external": ["de_wellbeing", "ccea_sel"],
    },
    {
        "slug": "school-attendance-anxiety-northern-ireland",
        "title": "School Attendance Anxiety in Northern Ireland: What Schools Can Do Early",
        "keyword": "school attendance anxiety northern ireland",
        "intent": "support pupils whose attendance is affected by anxiety without turning every morning into a battle",
        "audience": "pastoral teams, attendance leads and school leaders",
        "problem": "Attendance anxiety rarely improves through pressure alone. Schools need a plan that keeps connection with the pupil while gently rebuilding tolerance for the school day.",
        "signs": ["frequent stomach aches or headaches before school", "late arrival after difficult mornings", "avoidance of specific lessons, places or transitions", "distress after absence has already become a pattern"],
        "actions": ["separate anxiety from conduct language", "keep a warm named adult connection", "use graded return steps", "review sensory, social and academic triggers"],
        "workshop": "Training should help staff distinguish wilful non-attendance from anxiety-driven avoidance and build a return plan that is firm, kind and measurable.",
        "external": ["nhs_anxiety", "de_wellbeing"],
    },
    {
        "slug": "transition-workshops-for-schools",
        "title": "Transition Workshops for Schools: Helping Pupils Move Year, Class or Key Stage",
        "keyword": "transition workshops schools",
        "intent": "make school transitions feel predictable enough for pupils who struggle with change",
        "audience": "primary, post-primary and pastoral transition teams",
        "problem": "A transition can look simple on a calendar but feel huge to a pupil who relies on familiar rooms, routines, friendships and adults.",
        "signs": ["increased worry before visits or induction days", "friendship anxiety around new groups", "regression in independence", "behaviour changes after timetable or staff changes"],
        "actions": ["name the specific unknowns", "build visual and verbal rehearsal", "plan first-week check-ins", "share pupil passports before the move"],
        "workshop": "A good transition workshop gives pupils language for worry, rehearses likely moments and helps staff spot which pupils need extra scaffolding before the first day.",
        "external": ["de_wellbeing", "ccea_sel"],
    },
    {
        "slug": "exam-anxiety-workshops-schools",
        "title": "Exam Anxiety Workshops for Schools: Practical Support Before Pressure Peaks",
        "keyword": "exam anxiety workshop schools",
        "intent": "help pupils prepare for assessment pressure without turning revision into panic",
        "audience": "post-primary leaders, heads of year and pastoral teams",
        "problem": "Exam anxiety is not just nerves. For some pupils it changes sleep, attendance, concentration, confidence and willingness to attempt work.",
        "signs": ["avoidance of revision or mock papers", "panic before tests", "perfectionism and repeated reassurance seeking", "sleep or appetite changes during exam season"],
        "actions": ["normalise pressure without minimising it", "teach short regulation routines", "break revision into visible steps", "agree when to refer for extra support"],
        "workshop": "The strongest exam anxiety sessions combine psychoeducation, practical planning and rehearsal of what to do when anxiety spikes during a paper.",
        "external": ["nhs_anxiety", "de_wellbeing"],
    },
    {
        "slug": "friendship-issues-in-schools",
        "title": "Friendship Issues in Schools: How Staff Can Support Pupils Without Escalating Drama",
        "keyword": "friendship issues in schools",
        "intent": "help staff respond to friendship conflict, exclusion and fall-outs before they affect learning and attendance",
        "audience": "class teachers, pastoral staff and playground supervisors",
        "problem": "Friendship issues can seem minor from the outside, but for pupils they can shape safety, belonging and willingness to come into school.",
        "signs": ["sudden isolation at break time", "repeated low-level disputes", "friendship group changes after online messages", "requests to move seat, class or activity"],
        "actions": ["separate conflict from bullying concerns", "listen before solving", "teach repair and boundary language", "watch patterns across unstructured time"],
        "workshop": "Staff training should give a shared framework for responding to friendship issues: when to coach, when to mediate, and when to treat a pattern as safeguarding or bullying risk.",
        "external": ["aba_prevention", "de_wellbeing"],
    },
    {
        "slug": "self-esteem-workshops-for-schools",
        "title": "Self-Esteem Workshops for Schools: Building Confidence That Lasts Beyond One Assembly",
        "keyword": "self esteem workshops schools",
        "intent": "build practical confidence, self-talk and help-seeking skills across a class or year group",
        "audience": "primary and post-primary wellbeing leads",
        "problem": "Self-esteem work is weakest when it becomes slogans. Pupils need repeated chances to notice strengths, handle mistakes and practise safer self-talk.",
        "signs": ["giving up before trying", "constant comparison with peers", "fear of answering publicly", "over-apologising or dismissing success"],
        "actions": ["teach evidence-based self-talk", "praise effort and strategy", "use small brave steps", "connect confidence to classroom routines"],
        "workshop": "A strong self-esteem workshop should feel practical: pupils leave with language, examples and one or two behaviours they can try the same week.",
        "external": ["ccea_sel", "de_wellbeing"],
    },
    {
        "slug": "bullying-prevention-workshops-schools",
        "title": "Bullying Prevention Workshops for Schools: Moving From Awareness to Action",
        "keyword": "bullying prevention workshops",
        "intent": "turn anti-bullying messages into everyday pupil and staff behaviour",
        "audience": "school leaders, pastoral teams and anti-bullying coordinators",
        "problem": "Awareness weeks help, but prevention depends on the routines pupils see all year: how concerns are reported, how bystanders respond and how adults follow up.",
        "signs": ["pupils unsure how to report concerns", "bystanders staying silent", "repeat issues in the same spaces", "confusion between conflict, banter and bullying"],
        "actions": ["define bullying in pupil-friendly language", "teach bystander options", "review hotspots", "connect workshops to policy and follow-up"],
        "workshop": "The best bullying prevention workshops are not one-off lectures. They connect pupil voice, staff response and leadership follow-through.",
        "external": ["aba_prevention", "de_wellbeing"],
    },
    {
        "slug": "primary-school-wellbeing-workshops",
        "title": "Primary School Wellbeing Workshops: What Younger Pupils Need Most",
        "keyword": "primary school wellbeing workshops",
        "intent": "give younger pupils simple emotional language, coping skills and safe help-seeking routes",
        "audience": "primary principals, SENCOs, class teachers and pastoral leads",
        "problem": "Primary pupils need wellbeing support that is concrete, visual and repeated. They are still learning how to name feelings before they can manage them.",
        "signs": ["big feelings after small changes", "worry before separation or transition", "friendship fall-outs after play", "difficulty returning to learning after upset"],
        "actions": ["teach feelings vocabulary", "use stories and scenarios", "practise calm-down routines", "involve staff so language continues after the session"],
        "workshop": "A good primary wellbeing workshop should be active, age-appropriate and easy for teachers to reinforce after the visitor leaves.",
        "external": ["ccea_sel", "de_wellbeing"],
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
        }[key]
        external_links.append(f'<a href="{url}" target="_blank" rel="noopener">{label}</a>')

    html = []
    html.append(f"<h1>{escape(title)}</h1>")
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
        "source_note": "Selected from remaining HIP/Ahrefs school wellbeing long-tail opportunities not already covered in the May 4, May 6 or May 14 batches.",
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
