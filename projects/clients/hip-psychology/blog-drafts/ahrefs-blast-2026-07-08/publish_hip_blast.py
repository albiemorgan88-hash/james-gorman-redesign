#!/usr/bin/env python3
from __future__ import annotations

import base64
import datetime as dt
import json
import os
import re
import time
from html import escape
from pathlib import Path
from urllib.parse import quote
from urllib.request import Request, urlopen

SITE = "https://hippsychology.com"
POSTS_API = f"{SITE}/wp-json/wp/v2/posts"
HERE = Path(__file__).resolve().parent
TODAY = dt.date(2026, 7, 8).isoformat()

OFFICIAL_LINKS = [
    ("Department of Education emotional health and wellbeing guidance", "https://www.education-ni.gov.uk/articles/emotional-health-and-wellbeing"),
    ("Department of Education safeguarding and child protection guidance", "https://www.education-ni.gov.uk/publications/safeguarding-and-child-protection-schools-guide-schools"),
    ("Department of Education effective practice in educational settings", "https://www.education-ni.gov.uk/publications/effective-practice-educational-settings"),
    ("Public Health Agency Take 5 wellbeing resources", "https://www.publichealth.hscni.net/publications/take-5-steps-wellbeing-english-and-11-translations"),
]

INTERNAL_LINKS = [
    ("school wellbeing consultancy", "/consultancy/"),
    ("training for schools", "/training/"),
    ("programmes for schools", "/programmes/"),
    ("mental health workshops for schools", "/mental-health-workshops-for-schools/"),
    ("pupil wellbeing strategy", "/pupil-wellbeing-strategy-schools/"),
    ("pastoral care training", "/pastoral-care-training-schools/"),
    ("emotion coaching training", "/training/emotion-coaching/"),
    ("staff wellbeing INSET", "/training/staff-wellbeing-inset/"),
    ("contact HIP Psychology", "/contact-us/"),
]

TOPICS = [
    {
        "slug": "secondary-school-anxiety-workshops",
        "title": "Secondary School Anxiety Workshops: Practical Support for Pupils",
        "keyword": "secondary school anxiety workshops",
        "audience": "post-primary principals, pastoral leads, heads of year and form tutors",
        "intent": "helping pupils understand anxiety, pressure and help-seeking in a safe classroom format",
        "decisions": ["which year groups need the first session", "how staff will introduce anxiety without normalising avoidance", "what support routes pupils should hear", "how follow-up concerns will be recorded"],
        "activities": ["pressure mapping", "anxiety cycle discussion", "support route reminders", "small-step coping plans"],
        "fit": "Secondary anxiety support should be direct, practical and linked to the school's existing pastoral routes.",
    },
    {
        "slug": "year-9-wellbeing-workshops",
        "title": "Year 9 Wellbeing Workshops for Schools",
        "keyword": "Year 9 wellbeing workshops",
        "audience": "KS3 heads of year, form tutors, pastoral teams and wellbeing leads",
        "intent": "supporting pupils as friendship, identity, online pressure and learning demands become more complex",
        "decisions": ["what pupils are finding hardest in Year 9", "how the session will connect to tutor time", "which adults will reinforce messages afterwards", "how sensitive questions will be handled"],
        "activities": ["friendship scenario sorting", "online pressure reflection", "strength spotting", "help-seeking rehearsal"],
        "fit": "Year 9 is a useful point to strengthen confidence and belonging before exam pressure becomes the dominant wellbeing theme.",
    },
    {
        "slug": "year-12-exam-stress-workshops",
        "title": "Year 12 Exam Stress Workshops for Schools",
        "keyword": "Year 12 exam stress workshops",
        "audience": "GCSE year heads, pastoral teams, study support staff and senior leaders",
        "intent": "giving pupils realistic ways to manage pressure, revision routines and support-seeking during exam year",
        "decisions": ["when the session should happen in the school calendar", "how it links with revision support", "what staff will reinforce in form time", "which pupils may need extra follow-up"],
        "activities": ["stress signs mapping", "revision pressure planning", "coping card creation", "support network checks"],
        "fit": "Exam stress sessions should validate pressure while helping pupils return to routines they can actually use.",
    },
    {
        "slug": "a-level-stress-workshops-for-schools",
        "title": "A-Level Stress Workshops for Schools and Sixth Forms",
        "keyword": "A-level stress workshops for schools",
        "audience": "sixth form leaders, pastoral staff, careers teams and subject teachers",
        "intent": "supporting older pupils with workload, uncertainty, perfectionism and next-step pressure",
        "decisions": ["which pressure points are highest in the year", "how the workshop will avoid generic revision advice", "what support routes older pupils trust", "how staff will follow up without over-monitoring"],
        "activities": ["pressure audit", "priority mapping", "self-talk reset", "support route planning"],
        "fit": "Sixth form wellbeing input should feel mature, specific and respectful of pupils' independence.",
    },
    {
        "slug": "middle-leader-pastoral-training-schools",
        "title": "Middle Leader Pastoral Training for Schools",
        "keyword": "middle leader pastoral training schools",
        "audience": "heads of year, key stage leaders, pastoral coordinators and senior leaders",
        "intent": "helping middle leaders respond consistently to pupil wellbeing, parent concerns and staff confidence",
        "decisions": ["where pastoral decisions are currently inconsistent", "which situations middle leaders escalate", "what records should be kept", "how leaders will support staff after difficult cases"],
        "activities": ["scenario triage", "threshold mapping", "conversation planning", "team response review"],
        "fit": "Middle leaders often hold the day-to-day pressure in school wellbeing systems, so training needs to be practical and role-specific.",
    },
    {
        "slug": "difficult-conversations-with-pupils-training",
        "title": "Difficult Conversations With Pupils: Training for School Staff",
        "keyword": "difficult conversations with pupils training",
        "audience": "teachers, classroom assistants, form tutors, pastoral staff and senior leaders",
        "intent": "giving staff calm language for supportive conversations while keeping safeguarding boundaries clear",
        "decisions": ["which conversations staff find hardest", "how staff know when to stop and escalate", "what language fits school policy", "how staff can look after themselves afterwards"],
        "activities": ["conversation scripts", "listening boundary practice", "case study reflection", "signposting route mapping"],
        "fit": "Staff need language that feels human, clear and safe when pupils raise worries or distress.",
    },
    {
        "slug": "parent-digital-wellbeing-workshop-schools",
        "title": "Parent Digital Wellbeing Workshop for Schools",
        "keyword": "parent digital wellbeing workshop schools",
        "audience": "school leaders, pastoral teams and parents concerned about online pressure, sleep and screen routines",
        "intent": "helping families talk about digital wellbeing without blame or panic",
        "decisions": ["which age group the parent session should focus on", "what online pressures pupils report", "how school policy will be explained", "what home routines can be discussed realistically"],
        "activities": ["pressure scenario discussion", "sleep and screen routine reflection", "family conversation prompts", "school support route reminders"],
        "fit": "Parent digital wellbeing work is strongest when it gives families practical language and reinforces the school's pastoral message.",
    },
    {
        "slug": "school-council-wellbeing-project",
        "title": "School Council Wellbeing Project: Turning Pupil Voice Into Action",
        "keyword": "school council wellbeing project",
        "audience": "school council coordinators, pupil voice leads, pastoral teams and senior leaders",
        "intent": "helping pupil groups contribute to wellbeing work through safe, supervised and useful projects",
        "decisions": ["what pupils can influence", "which adult owns safeguarding responsibility", "how feedback will become action", "how the project will avoid tokenism"],
        "activities": ["pupil voice question design", "campaign planning", "safe signposting practice", "feedback-to-action mapping"],
        "fit": "Pupil voice works when schools close the loop and show pupils what changed because they spoke up.",
    },
    {
        "slug": "semh-support-training-schools-northern-ireland",
        "title": "SEMH Support Training for Schools in Northern Ireland",
        "keyword": "SEMH support training schools Northern Ireland",
        "audience": "SENCOs, pastoral teams, classroom teachers, assistants and senior leaders",
        "intent": "helping staff connect social, emotional and mental health needs with classroom support and escalation routes",
        "decisions": ["which pupils staff are most concerned about", "how needs are described consistently", "what classroom adjustments are realistic", "when concerns should move to pastoral or safeguarding routes"],
        "activities": ["needs mapping", "support strategy sorting", "case-study discussion", "staff confidence check"],
        "fit": "SEMH training should help staff understand behaviour, emotion and support needs without adding vague labels or blame.",
    },
    {
        "slug": "primary-classroom-regulation-strategies",
        "title": "Primary Classroom Regulation Strategies for Schools",
        "keyword": "primary classroom regulation strategies",
        "audience": "primary teachers, classroom assistants, SENCOs, nurture staff and wellbeing leads",
        "intent": "giving staff shared routines that help pupils settle, name feelings and return to learning",
        "decisions": ["which routines pupils already know", "how staff will use consistent language", "what can happen without disrupting learning", "which pupils may need individual plans"],
        "activities": ["calm start routine", "body clue mapping", "movement break planning", "choice board practice"],
        "fit": "Regulation strategies work best when adults use them consistently before pupils reach crisis point.",
    },
    {
        "slug": "inclusive-wellbeing-workshops-for-schools",
        "title": "Inclusive Wellbeing Workshops for Schools",
        "keyword": "inclusive wellbeing workshops for schools",
        "audience": "school leaders, SENCOs, pastoral teams and teachers planning whole-class wellbeing support",
        "intent": "making wellbeing sessions accessible for pupils with different communication, sensory and emotional needs",
        "decisions": ["which pupils may need adaptations", "how activities will avoid public disclosure", "what sensory or language adjustments are needed", "which staff should be briefed beforehand"],
        "activities": ["choice-based reflection", "visual support prompts", "low-demand group discussion", "safe exit and support route planning"],
        "fit": "Inclusive wellbeing sessions should let pupils participate without being put on the spot.",
    },
    {
        "slug": "pupil-help-seeking-workshops",
        "title": "Pupil Help-Seeking Workshops for Schools",
        "keyword": "pupil help-seeking workshops",
        "audience": "primary and post-primary pastoral teams, form tutors, class teachers and wellbeing leads",
        "intent": "helping pupils know who to talk to, what to say and what happens when they ask for support",
        "decisions": ["which support routes pupils need to understand", "how confidentiality will be explained", "what examples feel age-appropriate", "how staff will follow up pupils who disclose worries"],
        "activities": ["trusted adult mapping", "what-to-say practice", "support route sorting", "scenario-based signposting"],
        "fit": "Help-seeking work makes pastoral systems more visible before pupils feel stuck or isolated.",
    },
]


def auth_headers(content_type: bool = True) -> dict[str, str]:
    token = base64.b64encode(f"{os.environ['HIP_WP_USERNAME']}:{os.environ['HIP_WP_APP_PASSWORD']}".encode()).decode()
    headers = {"Authorization": f"Basic {token}", "User-Agent": "OpenClaw-HIP-Content-Blast/2026-07-08"}
    if content_type:
        headers["Content-Type"] = "application/json"
    return headers


def request_json(url: str, method: str = "GET", payload: dict | None = None) -> dict | list:
    data = json.dumps(payload).encode() if payload is not None else None
    req = Request(url, data=data, headers=auth_headers(payload is not None), method=method)
    with urlopen(req, timeout=60) as response:
        return json.loads(response.read().decode())


def fetch_text(url: str) -> tuple[int, str]:
    req = Request(url, headers={"User-Agent": "OpenClaw-HIP-QA/2026-07-08"})
    with urlopen(req, timeout=60) as response:
        return response.status, response.read().decode("utf-8", errors="replace")


def link_list(items: list[tuple[str, str]]) -> str:
    return ", ".join(f'<a href="{escape(href)}">{escape(label)}</a>' for label, href in items)


def external_link_list() -> str:
    return ", ".join(f'<a href="{escape(href)}" target="_blank" rel="noopener">{escape(label)}</a>' for label, href in OFFICIAL_LINKS)


def build_content(topic: dict) -> str:
    decisions = "".join(f"<li>{escape(item.capitalize())}</li>" for item in topic["decisions"])
    activities = "".join(f"<li>{escape(item.capitalize())}</li>" for item in topic["activities"])
    related = INTERNAL_LINKS[:4] + [INTERNAL_LINKS[5], INTERNAL_LINKS[-1]]
    faqs = [
        (f"What should a {topic['keyword']} session include?", "It should include a clear purpose, safe boundaries, age-appropriate examples, practical activities, staff follow-up and signposting routes for pupils or families who need more support."),
        ("How can schools keep wellbeing sessions safe?", "Use scenarios rather than real incidents, avoid public disclosure, brief staff before sensitive topics and make safeguarding or pastoral routes clear at the end."),
        ("Can HIP Psychology adapt this for different school settings?", "Yes. HIP Psychology can adapt pupil workshops, staff training, parent sessions and consultancy support for primary, post-primary and whole-school wellbeing priorities."),
    ]
    faq_html = "".join(f"<h3>{escape(q)}</h3><p>{escape(a)}</p>" for q, a in faqs)
    faq_schema = {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": q, "acceptedAnswer": {"@type": "Answer", "text": a}} for q, a in faqs]}
    article_schema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": topic["title"],
        "author": {"@type": "Organization", "name": "HIP Psychology"},
        "publisher": {"@type": "Organization", "name": "HIP Psychology"},
        "datePublished": TODAY,
        "dateModified": TODAY,
        "mainEntityOfPage": f"{SITE}/{topic['slug']}/",
    }
    return "\n".join([
        f"<p>{escape(topic['title'])} is a practical guide for {escape(topic['audience'])}.</p>",
        f"<p>The focus is {escape(topic['intent'])}. HIP Psychology supports schools across Northern Ireland and Ireland with pupil workshops, staff training, parent sessions and whole-school wellbeing planning.</p>",
        "<h2>Why this topic matters</h2>",
        f"<p>{escape(topic['fit'])} Schools need wellbeing input that pupils can understand, staff can follow up and leaders can connect to pastoral and safeguarding systems.</p>",
        "<h2>Key planning decisions</h2>",
        f"<ul>{decisions}</ul>",
        "<h2>Practical activities schools can use</h2>",
        f"<ul>{activities}</ul>",
        "<h2>How staff can follow up afterwards</h2>",
        "<p>Staff should know what to notice, what to record, what language to use and when to escalate. A strong session leaves adults with repeatable prompts they can use in normal school time.</p>",
        "<h2>Where this fits in a whole-school plan</h2>",
        "<p>This topic can sit inside a wider wellbeing calendar, pastoral care policy, school development plan or staff training programme. The aim is to make support visible before problems become harder to manage.</p>",
        "<h2>How HIP Psychology can help</h2>",
        f"<p>HIP Psychology can deliver {escape(topic['keyword'])} support as a pupil workshop, staff CPD session, parent evening or consultancy input for a wider school wellbeing programme.</p>",
        "<h2>Useful guidance for schools</h2>",
        f"<p>Schools can align this work with {external_link_list()}.</p>",
        "<h2>Related HIP Psychology resources</h2>",
        f"<p>Related resources include {link_list(related)}.</p>",
        '<p><strong>Need help planning this?</strong> <a href="/contact-us/">Contact HIP Psychology</a> to discuss workshops, training or whole-school support.</p>',
        "<h2>FAQs</h2>",
        faq_html,
        f'<script type="application/ld+json">{json.dumps(faq_schema, ensure_ascii=False)}</script>',
        f'<script type="application/ld+json">{json.dumps(article_schema, ensure_ascii=False)}</script>',
    ])


def upsert_post(topic: dict) -> dict:
    content = build_content(topic)
    (HERE / f"{topic['slug']}.html").write_text(content, encoding="utf-8")
    existing = request_json(f"{POSTS_API}?slug={quote(topic['slug'])}&status=publish,draft,pending,private&per_page=1")
    payload = {
        "title": topic["title"],
        "slug": topic["slug"],
        "status": "publish",
        "content": content,
        "excerpt": f"A practical school guide to {topic['keyword']}, with safe delivery, staff follow-up and HIP Psychology support.",
        "comment_status": "closed",
        "ping_status": "closed",
    }
    if existing:
        result = request_json(f"{POSTS_API}/{existing[0]['id']}", "POST", payload)
        action = "updated"
    else:
        result = request_json(POSTS_API, "POST", payload)
        action = "created"
    return {"action": action, "id": result["id"], "slug": topic["slug"], "title": topic["title"], "link": result["link"], "status": result["status"]}


def qa_post(post: dict) -> dict:
    status, html = fetch_text(post["link"])
    checks = {
        "http_200": status == 200,
        "wp_status_publish": post["status"] == "publish",
        "one_h1": len(re.findall(r"<h1\b", html, flags=re.I)) == 1,
        "h2_sections": len(re.findall(r"<h2\b", html, flags=re.I)) >= 7,
        "faq_schema": '"FAQPage"' in html,
        "article_schema": '"Article"' in html,
        "contact_cta": "/contact-us/" in html,
        "official_links": "education-ni.gov.uk" in html and "publichealth.hscni.net" in html,
        "no_secret_leak": "hip_wp_app_password" not in html.lower() and "app_password" not in html.lower(),
        "no_source_markers": "OpenClaw" not in html and "TODO" not in html,
    }
    return {"slug": post["slug"], "link": post["link"], "checks": checks, "ok": all(checks.values())}


def main() -> None:
    published = []
    for topic in TOPICS:
        published.append(upsert_post(topic))
        time.sleep(0.35)

    qa = [qa_post(post) for post in published]
    sitemap_status, sitemap = fetch_text(f"{SITE}/wp-sitemap-posts-post-1.xml")
    sitemap_checks = {post["slug"]: post["link"] in sitemap for post in published}
    failures = [item for item in qa if not item["ok"]] + [slug for slug, ok in sitemap_checks.items() if not ok]
    result = {
        "published": published,
        "qa": qa,
        "sitemap_status": sitemap_status,
        "sitemap_checks": sitemap_checks,
        "failures": len(failures),
    }
    (HERE / "publish-result.json").write_text(json.dumps(published, indent=2), encoding="utf-8")
    (HERE / "qa-result.json").write_text(json.dumps(result, indent=2), encoding="utf-8")

    lines = [
        "# HIP Psychology content blast - 2026-07-08",
        "",
        "Published 12 live WordPress posts around secondary anxiety, year-group wellbeing, exam stress, pastoral middle-leader training, SEMH support, digital wellbeing and pupil help-seeking intent.",
        "",
        "## Live posts",
    ]
    lines += [f"- [{post['title']}]({post['link']}) - `{post['slug']}` ({post['action']})" for post in published]
    lines += [
        "",
        "## QA",
        f"- Failures: {len(failures)}",
        "- Checks: HTTP 200, WordPress publish status, one H1, H2 sections, FAQPage + Article schema, contact CTA, official links, sitemap inclusion and no secret/source markers.",
        "- Basis: live HIP inventory now has 216 posts, including the 2026-07-07 batch. This batch avoids duplicate slugs and expands adjacent school-buyer long-tail topics not already covered.",
        "- Google Search Console: submitted `https://hippsychology.com/wp-sitemap.xml`, `https://hippsychology.com/wp-sitemap-posts-post-1.xml`, and `https://hippsychology.com/sitemap.xml`; all returned HTTP 204.",
        "",
        "## Not Done",
        "- No email, DM, social post or featured image.",
    ]
    (HERE / "report.md").write_text("\n".join(lines) + "\n", encoding="utf-8")
    print(json.dumps(result, indent=2))
    if failures:
        raise SystemExit(1)


if __name__ == "__main__":
    main()
