#!/usr/bin/env python3
from __future__ import annotations

import datetime as dt
import importlib.util
import json
import time
from html import escape
from pathlib import Path

import requests

SITE = "https://hippsychology.com"
HERE = Path(__file__).resolve().parent
PREVIOUS = HERE.parent / "ahrefs-blast-2026-06-18" / "publish_hip_blast.py"

SOURCE_NOTE = (
    "SEO content blast 2026-06-23: built from the existing HIP content map, live "
    "WordPress post list and recent Ahrefs/GSC direction. The new batch avoids the "
    "June anti-bullying and pastoral duplicates, then expands commercial school intent "
    "around assemblies, exam pressure, LLW, parent support, SEN/neurodiversity and staff training."
)


def load_previous_module():
    spec = importlib.util.spec_from_file_location("hip_previous_blast", PREVIOUS)
    if spec is None or spec.loader is None:
        raise RuntimeError(f"Could not load previous publisher from {PREVIOUS}")
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    return module


OFFICIAL_LINKS = {
    "wellbeing": (
        "Department of Education emotional health and wellbeing guidance",
        "https://www.education-ni.gov.uk/articles/emotional-health-and-wellbeing",
    ),
    "safeguarding": (
        "Department of Education safeguarding guidance",
        "https://www.education-ni.gov.uk/publications/safeguarding-and-child-protection-schools-guide-schools",
    ),
    "sen": (
        "Department of Education special educational needs code of practice",
        "https://www.education-ni.gov.uk/articles/special-educational-needs-code-practice",
    ),
    "curriculum": (
        "Department of Education statutory curriculum guidance",
        "https://www.education-ni.gov.uk/articles/statutory-curriculum",
    ),
}

INTERNAL_LINKS = [
    ("pupil wellbeing strategy", "/pupil-wellbeing-strategy-schools/"),
    ("mental health training for teachers", "/mental-health-training-for-teachers/"),
    ("school mental health policy checklist", "/school-mental-health-policy-checklist/"),
    ("exam anxiety workshops", "/exam-anxiety-workshops-schools/"),
    ("post-primary wellbeing workshops", "/post-primary-wellbeing-workshops/"),
    ("year 10 wellbeing workshop", "/year-10-wellbeing-workshop/"),
    ("primary to secondary transition workshop", "/primary-to-secondary-transition-workshop/"),
    ("P7 to Year 8 transition workshop", "/p7-to-year-8-transition-workshop/"),
    ("parent mental health workshops", "/parent-mental-health-workshops-schools/"),
    ("parent wellbeing workshops", "/parent-wellbeing-workshops-schools/"),
    ("SENCO support and pupil wellbeing", "/senco-support-and-pupil-wellbeing/"),
    ("ADHD support in schools", "/adhd-support-in-schools-northern-ireland/"),
    ("autism support in schools", "/autism-support-in-schools/"),
    ("emotional regulation strategies", "/emotional-regulation-strategies-schools/"),
    ("staff wellbeing training", "/staff-wellbeing-training-for-schools/"),
    ("teacher wellbeing workshops", "/teacher-wellbeing-workshops/"),
    ("pastoral care training", "/pastoral-care-training-schools/"),
    ("HIP workshops", "/workshops/"),
    ("contact HIP Psychology", "/contact-us/"),
]

TOPICS = [
    {
        "slug": "mental-health-assembly-schools",
        "title": "Mental Health Assembly for Schools: How to Make It Useful",
        "keyword": "mental health assembly schools",
        "cluster": "Assemblies and awareness",
        "audience": "primary, post-primary, pastoral and senior leadership teams",
        "context": "A mental health assembly can open a helpful conversation, but only when it is safe, age-appropriate and connected to support routes pupils understand.",
        "decisions": [
            "which year groups need universal input and which need smaller follow-up",
            "what language pupils should hear about worries, stress and help-seeking",
            "which staff members are ready for disclosures after the assembly",
            "how the message will continue through tutor time, class discussion or pastoral support",
        ],
        "activities": [
            "use short scenarios instead of asking pupils to share personal experiences",
            "name two or three trusted routes for support inside school",
            "give staff a first-response script before the assembly starts",
            "plan a follow-up activity so awareness becomes practical support",
        ],
        "support": "HIP Psychology can deliver mental health assemblies and linked workshops that are clear, safe and grounded in everyday school life.",
        "official": ["wellbeing", "safeguarding"],
    },
    {
        "slug": "anxiety-assembly-for-schools",
        "title": "Anxiety Assembly for Schools: Calm Messages Pupils Can Use",
        "keyword": "anxiety assembly for schools",
        "cluster": "Assemblies and awareness",
        "audience": "school leaders, heads of year, pastoral teams and classroom teachers",
        "context": "An anxiety assembly works best when pupils leave with simple language, normalised help-seeking and practical next steps rather than a long list of symptoms.",
        "decisions": [
            "whether the assembly should focus on transition, exams, friendship pressure or general anxiety",
            "how pupils can ask questions without public embarrassment",
            "what staff should do if a pupil discloses panic, avoidance or overwhelm",
            "how parents or carers will be kept aligned with the school message",
        ],
        "activities": [
            "teach a short breathing, grounding or naming strategy pupils can practise quietly",
            "use anonymous questions to reduce pressure",
            "connect the assembly to existing pastoral and wellbeing systems",
            "build in a same-week follow-up for pupils who need extra support",
        ],
        "support": "HIP Psychology can deliver anxiety assemblies and class workshops that help pupils understand anxiety without feeling singled out.",
        "official": ["wellbeing", "safeguarding"],
    },
    {
        "slug": "exam-stress-workshops-for-schools",
        "title": "Exam Stress Workshops for Schools: Support Before Pressure Peaks",
        "keyword": "exam stress workshops for schools",
        "cluster": "Exam pressure",
        "audience": "post-primary leaders, heads of year, pastoral teams and exam year staff",
        "context": "Exam stress support is most useful before pupils are already overwhelmed. Schools can help pupils separate preparation, pressure, sleep, avoidance and help-seeking into manageable steps.",
        "decisions": [
            "which year groups need exam stress input and when it should happen",
            "how study skills, wellbeing and pastoral support will connect",
            "what signs of avoidance, panic or burnout staff should notice",
            "how parents and carers can support without increasing pressure",
        ],
        "activities": [
            "map common exam pressure points across the school calendar",
            "teach pupils how to spot unhelpful avoidance early",
            "practise realistic revision and recovery routines",
            "give staff a shared language for stress, anxiety and support routes",
        ],
        "support": "HIP Psychology can support schools with exam stress workshops that help pupils prepare, regulate and ask for help earlier.",
        "official": ["wellbeing"],
    },
    {
        "slug": "gcse-stress-workshops-for-schools",
        "title": "GCSE Stress Workshops for Schools: Practical Help for Pupils",
        "keyword": "GCSE stress workshops for schools",
        "cluster": "Exam pressure",
        "audience": "Year 11 and Year 12 teams, pastoral leads, senior leaders and subject staff",
        "context": "GCSE stress can build gradually through controlled assessment, mock exams, choices and comparison. A good workshop gives pupils tools without pretending pressure will disappear.",
        "decisions": [
            "whether the main need is motivation, anxiety, avoidance or confidence",
            "how subject staff and pastoral teams will share concerns",
            "what pupils should do when revision has become avoidance",
            "how the school will protect sleep, routine and emotional regulation messages",
        ],
        "activities": [
            "use realistic GCSE scenarios around procrastination, panic and comparison",
            "teach pupils how to break revision into smaller starts",
            "practise a calm plan for the night before and morning of an exam",
            "identify pupils who may need one-to-one pastoral follow-up",
        ],
        "support": "HIP Psychology can deliver GCSE stress workshops as part of wider exam wellbeing and pastoral support.",
        "official": ["wellbeing"],
    },
    {
        "slug": "sixth-form-wellbeing-workshops",
        "title": "Sixth Form Wellbeing Workshops: Supporting Pressure and Independence",
        "keyword": "sixth form wellbeing workshops",
        "cluster": "Post-primary transitions",
        "audience": "heads of sixth form, post-16 leaders, pastoral teams and senior staff",
        "context": "Sixth form pupils often look independent while carrying pressure around grades, identity, relationships, work, university, apprenticeships and future choices.",
        "decisions": [
            "which pressure points affect Year 13 and Year 14 differently",
            "how pastoral support will balance independence and early help",
            "what pupils need around stress, relationships, sleep and decision-making",
            "how the workshop links to careers, safeguarding and wellbeing provision",
        ],
        "activities": [
            "use scenarios around independence, comparison and future uncertainty",
            "give pupils practical ways to recognise overload early",
            "include confidential routes for support after the session",
            "brief tutors on follow-up conversations that do not feel patronising",
        ],
        "support": "HIP Psychology can deliver sixth form wellbeing sessions that respect pupils' maturity while making support easier to access.",
        "official": ["wellbeing", "safeguarding"],
    },
    {
        "slug": "year-11-wellbeing-workshops",
        "title": "Year 11 Wellbeing Workshops: Support Before GCSE Pressure Builds",
        "keyword": "Year 11 wellbeing workshops",
        "cluster": "Post-primary transitions",
        "audience": "Year 11 heads, pastoral teams, KS4 coordinators and senior leaders",
        "context": "Year 11 is a useful moment to build routines before exam pressure becomes urgent. Pupils are adjusting to GCSE expectations, workload, friendship changes and future choices.",
        "decisions": [
            "which pupils are struggling with workload, confidence or organisation",
            "how staff will reinforce routines after the workshop",
            "which messages should reach parents or carers",
            "how wellbeing support will connect to learning and attendance",
        ],
        "activities": [
            "teach pupils how to spot stress patterns before they escalate",
            "practise small planning routines for homework, revision and recovery",
            "use peer pressure and comparison scenarios that feel age-appropriate",
            "offer a simple route for pupils who want extra support afterwards",
        ],
        "support": "HIP Psychology can support Year 11 pupils with practical wellbeing, resilience and preparation workshops.",
        "official": ["wellbeing"],
    },
    {
        "slug": "p7-transition-anxiety-support",
        "title": "P7 Transition Anxiety Support: Helping Pupils Move School",
        "keyword": "P7 transition anxiety support",
        "cluster": "Primary to post-primary transition",
        "audience": "P7 teachers, Year 8 teams, primary principals and post-primary pastoral leads",
        "context": "P7 transition can bring excitement and anxiety at the same time. Pupils need practical preparation for new routines, friendships, travel, timetables and asking for help.",
        "decisions": [
            "which worries pupils are naming most often before transfer",
            "how primary and post-primary staff can use shared language",
            "what families need to reinforce at home",
            "how anxious pupils will be followed up after September starts",
        ],
        "activities": [
            "ask pupils to sort worries into known, unknown and controllable",
            "practise help-seeking language for the first few weeks",
            "build a simple transition map around people, places and routines",
            "share a short family takeaway that keeps reassurance practical",
        ],
        "support": "HIP Psychology can deliver P7 and Year 8 transition workshops that reduce uncertainty and build confidence.",
        "official": ["wellbeing", "safeguarding"],
    },
    {
        "slug": "parent-anxiety-workshops-schools",
        "title": "Parent Anxiety Workshops in Schools: Shared Language That Helps",
        "keyword": "parent anxiety workshops schools",
        "cluster": "Parent and family support",
        "audience": "school leaders, pastoral teams, parents, carers and family support staff",
        "context": "Parent anxiety workshops help families understand worry, avoidance and reassurance without blaming pupils or parents. The strongest sessions create shared language between home and school.",
        "decisions": [
            "whether parents need help with school avoidance, exam pressure, transition or general worry",
            "how the school will invite parents without stigma",
            "what support routes should be explained clearly",
            "how staff will handle sensitive family questions after the session",
        ],
        "activities": [
            "explain the difference between reassurance that helps and reassurance that traps",
            "use simple examples from mornings, homework, exams and friendship worries",
            "give parents language they can use when a child avoids something difficult",
            "connect families with school support routes without over-promising",
        ],
        "support": "HIP Psychology can deliver parent anxiety workshops that align home and school around calm, practical support.",
        "official": ["wellbeing", "safeguarding"],
    },
    {
        "slug": "classroom-assistant-wellbeing-training",
        "title": "Classroom Assistant Wellbeing Training: Practical Support Skills",
        "keyword": "classroom assistant wellbeing training",
        "cluster": "Staff training",
        "audience": "classroom assistants, SEN teams, teachers, pastoral leads and school leaders",
        "context": "Classroom assistants often notice pupil distress early. Wellbeing training can help them respond with confidence while keeping boundaries, recording routes and teacher communication clear.",
        "decisions": [
            "what classroom assistants are expected to notice, record and escalate",
            "how support roles connect with teacher, SENCO and pastoral systems",
            "which pupil needs are creating the most uncertainty",
            "how staff wellbeing is protected when support work feels heavy",
        ],
        "activities": [
            "practise first responses to anxiety, overwhelm, shutdown and dysregulation",
            "agree simple recording and handover expectations",
            "use scenarios that reflect real classroom pressure",
            "build shared language between assistants, teachers and pastoral staff",
        ],
        "support": "HIP Psychology can deliver practical wellbeing training for classroom assistants and wider school staff teams.",
        "official": ["wellbeing", "sen", "safeguarding"],
    },
    {
        "slug": "designated-teacher-wellbeing-training",
        "title": "Designated Teacher Wellbeing Training: Linking Care and Safeguarding",
        "keyword": "designated teacher wellbeing training",
        "cluster": "Staff training",
        "audience": "designated teachers, deputy designated teachers, pastoral leads and senior leaders",
        "context": "Designated teachers often sit at the meeting point between safeguarding, attendance, behaviour, family pressure and emotional wellbeing. Training should help them lead systems, not just carry more cases.",
        "decisions": [
            "where wellbeing concerns become safeguarding concerns",
            "how information is recorded, shared and reviewed",
            "which staff need clearer first-response guidance",
            "how the school prevents pastoral overload from resting on one person",
        ],
        "activities": [
            "map current support routes from first concern to follow-up",
            "use anonymised scenarios to practise thresholds and handover",
            "agree language for staff who are worried but uncertain",
            "schedule review points for repeated themes across the school",
        ],
        "support": "HIP Psychology can support designated teachers and pastoral leaders with reflective, practical training around pupil wellbeing systems.",
        "official": ["wellbeing", "safeguarding"],
    },
    {
        "slug": "llw-wellbeing-lessons-schools",
        "title": "LLW Wellbeing Lessons: Making Personal Development Practical",
        "keyword": "LLW wellbeing lessons schools",
        "cluster": "Curriculum and LLW",
        "audience": "LLW coordinators, post-primary teachers, pastoral teams and heads of year",
        "context": "Learning for Life and Work gives schools a natural place to build wellbeing language, but lessons need to feel relevant to pupils rather than like another worksheet.",
        "decisions": [
            "which wellbeing themes fit each year group and key stage",
            "how lessons will connect with pastoral systems and assemblies",
            "what pupils should be able to do differently after the lesson",
            "how sensitive topics will be handled safely in mixed groups",
        ],
        "activities": [
            "use scenario-based discussion for stress, friendship, pressure and help-seeking",
            "build short reflection tasks that do not require public disclosure",
            "connect lessons to trusted adults and support routes",
            "use pupil feedback to refine the next lesson or workshop",
        ],
        "support": "HIP Psychology can support LLW wellbeing lessons, assemblies and workshops with practical pupil-facing content.",
        "official": ["curriculum", "wellbeing", "safeguarding"],
    },
    {
        "slug": "neurodiversity-workshops-for-schools",
        "title": "Neurodiversity Workshops for Schools: Building Understanding Safely",
        "keyword": "neurodiversity workshops for schools",
        "cluster": "SEN and neurodiversity",
        "audience": "school leaders, SENCOs, classroom staff, pupils and pastoral teams",
        "context": "Neurodiversity workshops can help pupils and staff understand differences in attention, communication, sensory needs and emotional regulation without singling anyone out.",
        "decisions": [
            "whether the session is for staff, pupils, parents or a mixed programme",
            "how to avoid making individual pupils visible without consent",
            "what practical classroom adjustments staff need to practise",
            "how the workshop links to SEN support and pastoral care",
        ],
        "activities": [
            "teach shared language around different ways of thinking and learning",
            "use classroom scenarios around sensory overload and transitions",
            "help pupils understand respect without turning difference into a label",
            "review follow-up support for pupils who need reasonable adjustments",
        ],
        "support": "HIP Psychology can deliver neurodiversity workshops and staff training that are respectful, practical and linked to school support systems.",
        "official": ["sen", "wellbeing", "safeguarding"],
    },
    {
        "slug": "adhd-emotional-regulation-schools",
        "title": "ADHD and Emotional Regulation in Schools: Practical Staff Support",
        "keyword": "ADHD emotional regulation schools",
        "cluster": "SEN and neurodiversity",
        "audience": "teachers, classroom assistants, SENCOs, pastoral teams and school leaders",
        "context": "Pupils with ADHD may need support with attention, impulse control, transitions and emotional regulation. Staff confidence improves when support is concrete and consistent.",
        "decisions": [
            "which times of day create the most regulation pressure",
            "what staff can adjust before behaviour escalates",
            "how pupils can practise regulation without shame",
            "how SEN, pastoral and classroom plans will stay joined up",
        ],
        "activities": [
            "map common triggers around transitions, waiting, noise and task starts",
            "use short regulation routines pupils can practise repeatedly",
            "agree calm adult language for moments of escalation",
            "review whether classroom adjustments are visible in daily practice",
        ],
        "support": "HIP Psychology can help staff understand ADHD-related regulation needs and build practical support routines across the school day.",
        "official": ["sen", "wellbeing"],
    },
    {
        "slug": "autism-anxiety-support-schools",
        "title": "Autism and Anxiety Support in Schools: What Staff Can Do Early",
        "keyword": "autism anxiety support schools",
        "cluster": "SEN and neurodiversity",
        "audience": "SENCOs, classroom staff, pastoral teams, primary and post-primary leaders",
        "context": "Autistic pupils may experience anxiety around uncertainty, sensory load, social pressure, change and communication. Early support works best when adults notice patterns before crisis points.",
        "decisions": [
            "which situations predictably increase anxiety for the pupil or group",
            "how staff will reduce uncertainty without removing all challenge",
            "what communication route the pupil can use when words are difficult",
            "how home, SEN and pastoral staff will share helpful patterns",
        ],
        "activities": [
            "use visual or written previews before changes in routine",
            "identify sensory and social pressure points in the school day",
            "agree low-demand help-seeking options for anxious moments",
            "review support after transitions, assemblies, tests and unstructured time",
        ],
        "support": "HIP Psychology can support schools with autism-aware anxiety strategies, staff training and practical pupil wellbeing planning.",
        "official": ["sen", "wellbeing", "safeguarding"],
    },
]


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
    return ", ".join(links[:9])


def faq(topic: dict) -> list[tuple[str, str]]:
    return [
        (
            f"What is the first step for {topic['keyword']}?",
            "Start with the pupils or staff most affected, agree the support route, brief staff on safe responses and plan follow-up before the session happens.",
        ),
        (
            "How can schools make this practical?",
            "Use realistic school scenarios, short scripts, clear referral routes and small actions that staff can repeat during the normal school week.",
        ),
        (
            "Should this be a one-off session?",
            "A one-off session can start the conversation, but the strongest impact comes when workshops connect to pastoral care, curriculum, staff confidence and pupil voice.",
        ),
        (
            "How can HIP Psychology help?",
            "HIP Psychology can support schools with pupil workshops, staff training, assemblies, parent sessions and whole-school wellbeing planning.",
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
        paragraph("The aim is to help schools move from concern into a clear plan: what pupils need to hear, what staff need to practise and how leaders can connect the work to existing pastoral systems."),
        "<h2>Why this matters</h2>",
        paragraph("School wellbeing support works best when it is concrete, age-appropriate and joined up. Pupils need language they can use, staff need confidence in the first response and leaders need a simple way to review whether support is reaching the right people."),
        "<h2>Key decisions for leaders</h2>",
        paragraph("Before booking a session or building a plan, it helps to agree the practical decisions that keep the work focused and safe."),
        bullet_list(topic["decisions"]),
        "<h2>Practical activities schools can use</h2>",
        paragraph("These activities are designed to make the topic useful without asking pupils or staff to disclose personal experiences in public."),
        bullet_list(topic["activities"]),
        "<h2>How to keep the session safe</h2>",
        paragraph("Set clear boundaries, avoid public disclosure, name the support route and brief staff before the session. If sensitive issues arise, staff should know who records the concern and who follows up."),
        "<h2>What pupils need to hear</h2>",
        paragraph("Pupils need reassurance that support is available, but they also need practical language: how to name the issue, how to ask for help and what small step they can take when pressure builds."),
        "<h2>What staff need to practise</h2>",
        paragraph("Staff need short scripts, scenario practice, clarity around escalation and confidence that their response will fit the school safeguarding and pastoral system."),
        "<h2>How leaders can review impact</h2>",
        paragraph("Useful review questions include whether pupils know the support route, whether staff feel more confident, whether concerns are being noticed earlier and whether the session has led to follow-up action."),
        "<h2>How HIP Psychology can support this work</h2>",
        paragraph(topic["support"]),
        paragraph("HIP Psychology works with schools across Northern Ireland and Ireland through pupil workshops, staff training, assemblies, parent sessions, reflective supervision and whole-school wellbeing support."),
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


def write_report(published: list[dict], qa: dict) -> None:
    lines = [
        "# HIP Psychology SEO Content Blast - 2026-06-23",
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
        "## External Guidance Checked",
        "- Department of Education emotional health and wellbeing guidance",
        "- Department of Education safeguarding guidance",
        "- Department of Education special educational needs code of practice",
        "- Department of Education statutory curriculum guidance",
        "",
        "## Not Done",
        "- No email, DM, social post or external outreach.",
        "- No featured images.",
    ]
    (HERE / "report.md").write_text("\n".join(lines) + "\n", encoding="utf-8")


def main() -> int:
    publisher = load_previous_module()
    publisher.OUT = HERE
    publisher.SOURCE_NOTE = SOURCE_NOTE
    publisher.OFFICIAL_LINKS = OFFICIAL_LINKS
    publisher.INTERNAL_LINKS = INTERNAL_LINKS
    publisher.TOPICS = TOPICS
    publisher.make_content = make_content

    HERE.mkdir(parents=True, exist_ok=True)
    target_slugs = [topic["slug"] for topic in TOPICS]
    duplicates_in_batch = sorted({slug for slug in target_slugs if target_slugs.count(slug) > 1})
    if duplicates_in_batch:
        raise RuntimeError(f"Duplicate target slugs in batch: {duplicates_in_batch}")

    existing = publisher.existing_slugs()
    duplicates_live = [slug for slug in target_slugs if slug in existing]
    if duplicates_live:
        raise RuntimeError(f"Refusing duplicate WordPress slugs: {duplicates_live}")

    published = [publisher.publish_topic(topic) for topic in TOPICS]
    time.sleep(3)
    qa = publisher.build_qa(published)

    (HERE / "publish-result.json").write_text(
        json.dumps({"source_note": SOURCE_NOTE, "results": published}, indent=2),
        encoding="utf-8",
    )
    (HERE / "qa-result.json").write_text(json.dumps(qa, indent=2), encoding="utf-8")
    write_report(published, qa)
    print(json.dumps({"published": len(published), "failures": len(qa["failures"]), "report": str(HERE / "report.md")}, indent=2))
    return 0 if not qa["failures"] else 1


if __name__ == "__main__":
    raise SystemExit(main())
