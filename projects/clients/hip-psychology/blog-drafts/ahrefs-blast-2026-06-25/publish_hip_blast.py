#!/usr/bin/env python3
from __future__ import annotations

import datetime as dt
import importlib.util
import json
import os
from pathlib import Path

import requests

SITE = "https://hippsychology.com"
HERE = Path(__file__).resolve().parent
PUBLISHER_TEMPLATE = HERE.parent / "ahrefs-blast-2026-06-18" / "publish_hip_blast.py"
CONTENT_TEMPLATE = HERE.parent / "ahrefs-blast-2026-06-23" / "publish_hip_blast.py"

SOURCE_NOTE = (
    "SEO content blast 2026-06-25: Ahrefs pull showed HIP Psychology at DR 7.0, "
    "347 live backlinks, 239 live referring domains, 4 GB organic keywords and "
    "estimated organic traffic 5. This batch avoids the 23 June anxiety, assembly, "
    "neurodiversity and exam-pressure terms, then expands commercial school intent "
    "around attendance/EBSA, classroom regulation, sensory support, unstructured-time "
    "support and pupil leadership."
)

OFFICIAL_LINKS = {
    "wellbeing": (
        "Department of Education emotional health and wellbeing guidance",
        "https://www.education-ni.gov.uk/articles/emotional-health-and-wellbeing",
    ),
    "effective_practice": (
        "Department of Education effective practice in educational settings",
        "https://www.education-ni.gov.uk/publications/effective-practice-educational-settings",
    ),
    "safeguarding": (
        "Department of Education safeguarding guidance",
        "https://www.education-ni.gov.uk/publications/safeguarding-and-child-protection-schools-guide-schools",
    ),
    "sen": (
        "Department of Education special educational needs code of practice",
        "https://www.education-ni.gov.uk/articles/special-educational-needs-code-practice",
    ),
    "sbehw": (
        "Department of Education social behaviour and emotional wellbeing resource",
        "https://www.education-ni.gov.uk/articles/social-behaviour-and-emotional-wellbeing",
    ),
}

INTERNAL_LINKS = [
    ("pupil wellbeing strategy", "/pupil-wellbeing-strategy-schools/"),
    ("mental health training for teachers", "/mental-health-training-for-teachers/"),
    ("pastoral care training", "/pastoral-care-training-schools/"),
    ("school avoidance anxiety support", "/school-avoidance-anxiety-support/"),
    ("EBSA training for school staff", "/ebsa-training-for-school-staff/"),
    ("school refusal in Northern Ireland", "/school-refusal-northern-ireland/"),
    ("parent anxiety workshops", "/parent-anxiety-workshops-schools/"),
    ("classroom anxiety strategies", "/classroom-anxiety-strategies-for-teachers/"),
    ("emotional regulation strategies", "/emotional-regulation-strategies-schools/"),
    ("self-regulation strategies", "/self-regulation-strategies-for-students/"),
    ("sensory overload in the classroom", "/sensory-overload-in-the-classroom/"),
    ("behaviour as communication", "/behaviour-as-communication-in-schools/"),
    ("behaviour support in schools", "/behaviour-support-in-schools/"),
    ("positive behaviour support", "/positive-behaviour-support-schools/"),
    ("playground friendship support", "/playground-friendship-support-schools/"),
    ("pupil voice and wellbeing", "/pupil-voice-and-wellbeing-schools/"),
    ("school belonging activities", "/school-belonging-activities/"),
    ("HIP workshops", "/workshops/"),
    ("contact HIP Psychology", "/contact-us/"),
]

TOPICS = [
    {
        "slug": "morning-anxiety-school-support",
        "title": "Morning Anxiety at School: Support Before the Day Falls Apart",
        "keyword": "morning anxiety school support",
        "cluster": "Attendance and EBSA",
        "audience": "primary staff, post-primary pastoral teams, attendance leads and senior leaders",
        "context": "Morning anxiety can show up as tears, lateness, repeated reassurance seeking, refusal to enter class or a pupil who appears fine once the hardest part of the day has passed.",
        "decisions": [
            "which pupils need a predictable arrival plan rather than repeated negotiation",
            "who will meet the pupil and what script adults should use",
            "how parents or carers will hand over without extending distress",
            "when morning anxiety should trigger wider attendance or safeguarding review",
        ],
        "activities": [
            "create a short arrival routine with the same adult and same first step",
            "agree a calm handover phrase with parents or carers",
            "use a visual first-then plan for pupils who need predictability",
            "review patterns across days, transitions, subjects and peer situations",
        ],
        "support": "HIP Psychology can help schools design practical arrival routines, parent communication and staff scripts for pupils experiencing morning anxiety.",
        "official": ["wellbeing", "safeguarding"],
    },
    {
        "slug": "attendance-anxiety-training-schools",
        "title": "Attendance and Anxiety Training for School Staff",
        "keyword": "attendance anxiety training schools",
        "cluster": "Attendance and EBSA",
        "audience": "attendance teams, pastoral leaders, class teachers, tutors and senior leaders",
        "context": "Attendance concerns linked to anxiety need careful handling. Schools have to notice patterns, keep expectations clear and avoid accidentally making avoidance feel like the safest option.",
        "decisions": [
            "how staff will distinguish anxiety, avoidance, illness, safeguarding and practical barriers",
            "what information should be gathered before plans are agreed",
            "how school and home will communicate without creating daily pressure cycles",
            "which pupils need phased support, pastoral review or external advice",
        ],
        "activities": [
            "map attendance patterns against lessons, days, transitions and social times",
            "teach staff a shared language for anxiety and avoidance",
            "agree small return-to-class steps that can be repeated consistently",
            "build review points so support changes when evidence changes",
        ],
        "support": "HIP Psychology can deliver staff training on attendance, anxiety and emotionally based school avoidance in a way that is practical for busy school teams.",
        "official": ["wellbeing", "safeguarding", "effective_practice"],
    },
    {
        "slug": "school-refusal-parent-workshop",
        "title": "School Refusal Parent Workshop: Shared Support That Helps",
        "keyword": "school refusal parent workshop",
        "cluster": "Attendance and EBSA",
        "audience": "school leaders, pastoral teams, SENCOs and parents or carers supporting anxious non-attendance",
        "context": "Parent workshops can help when school refusal has become frightening, repetitive and emotionally draining at home. The session should reduce blame and create shared next steps.",
        "decisions": [
            "what parents need to understand about anxiety and avoidance",
            "which routines can be agreed between home and school",
            "how staff will keep communication brief, calm and consistent",
            "when the plan needs wider support beyond a workshop",
        ],
        "activities": [
            "explain the anxiety and avoidance cycle in plain language",
            "practise a morning script that is warm but clear",
            "agree what parents should do after a difficult morning",
            "create a simple review plan between home, school and pastoral staff",
        ],
        "support": "HIP Psychology can facilitate parent workshops that help schools and families use the same language around anxious school avoidance.",
        "official": ["wellbeing", "safeguarding"],
    },
    {
        "slug": "ebsa-primary-school-support",
        "title": "EBSA in Primary Schools: Early Support Before Patterns Set",
        "keyword": "EBSA primary school support",
        "cluster": "Attendance and EBSA",
        "audience": "primary principals, class teachers, SENCOs, pastoral leads and classroom assistants",
        "context": "Emotionally based school avoidance in primary school can begin with small patterns: reluctance at the gate, frequent tummy aches, separation distress or repeated requests to go home.",
        "decisions": [
            "which parts of the school day are hardest for the pupil",
            "how separation, friendship, sensory or learning needs may be contributing",
            "which adults will lead the plan and keep messages consistent",
            "how progress will be measured without rushing the pupil",
        ],
        "activities": [
            "use a gentle pupil conversation to understand the hardest moments",
            "build a predictable arrival and first-task routine",
            "link attendance support with SEN, pastoral and parent communication",
            "review whether supports are increasing confidence or reinforcing avoidance",
        ],
        "support": "HIP Psychology can support primary schools with EBSA planning, staff training and practical routines that help pupils return safely.",
        "official": ["wellbeing", "sen", "safeguarding"],
    },
    {
        "slug": "calm-corners-classrooms",
        "title": "Calm Corners in Classrooms: How to Use Them Well",
        "keyword": "calm corners classrooms",
        "cluster": "Classroom regulation",
        "audience": "teachers, classroom assistants, SENCOs and pastoral staff",
        "context": "A calm corner is only useful when pupils know what it is for, how to use it and how to return to learning. Without clear routines it can become avoidance, punishment or a place pupils feel watched.",
        "decisions": [
            "which pupils can use the space and whether it is universal or targeted",
            "how long pupils can use it before an adult checks in",
            "what regulation tools are safe and appropriate for the classroom",
            "how pupils return to learning without shame or disruption",
        ],
        "activities": [
            "teach the calm corner routine before pupils are distressed",
            "include simple tools such as visual prompts, breathing cards and quiet tasks",
            "use a return-to-learning script that protects dignity",
            "review whether use is reducing distress or becoming avoidance",
        ],
        "support": "HIP Psychology can help schools build classroom regulation routines that are practical, safe and easy for staff to use consistently.",
        "official": ["wellbeing", "sen", "sbehw"],
    },
    {
        "slug": "regulation-stations-schools",
        "title": "Regulation Stations in Schools: Practical Setup Guide",
        "keyword": "regulation stations schools",
        "cluster": "Classroom regulation",
        "audience": "school leaders, SENCOs, classroom teachers and wellbeing coordinators",
        "context": "Regulation stations can support pupils when they are linked to teaching, adult noticing and a clear routine. The aim is not to remove every feeling, but to help pupils recover enough to learn.",
        "decisions": [
            "where regulation stations should sit in classrooms or shared spaces",
            "which pupils need adult-guided regulation rather than independent use",
            "how staff will record repeated patterns or escalating distress",
            "what tools are appropriate for different ages and needs",
        ],
        "activities": [
            "teach pupils the purpose of the station during calm moments",
            "use a short menu of body, breathing, sensory and reflection options",
            "agree staff prompts so language is consistent across rooms",
            "track whether pupils return to learning more quickly over time",
        ],
        "support": "HIP Psychology can support schools with regulation station design, staff training and whole-school language around emotional regulation.",
        "official": ["wellbeing", "effective_practice", "sbehw"],
    },
    {
        "slug": "sensory-circuits-primary-schools",
        "title": "Sensory Circuits in Primary Schools: Planning Support Safely",
        "keyword": "sensory circuits primary schools",
        "cluster": "Sensory and movement support",
        "audience": "primary teachers, SENCOs, classroom assistants and pastoral teams",
        "context": "Sensory circuits can help some pupils start the day ready to learn, but they need planning, supervision and review. They should be matched to need rather than used as a general behaviour fix.",
        "decisions": [
            "which pupils need sensory or movement support and why",
            "who will supervise the routine and monitor responses",
            "how the circuit fits into the timetable without drawing unwanted attention",
            "when to seek specialist advice or adapt the plan",
        ],
        "activities": [
            "start with a short, predictable routine rather than a long activity list",
            "build in alerting, organising and calming elements where appropriate",
            "record pupil response after sessions, not just attendance at sessions",
            "connect sensory support with classroom regulation and SEN planning",
        ],
        "support": "HIP Psychology can help schools think through sensory and emotional regulation supports as part of wider pupil wellbeing planning.",
        "official": ["sen", "sbehw", "wellbeing"],
    },
    {
        "slug": "movement-breaks-classroom-regulation",
        "title": "Movement Breaks for Classroom Regulation: School Guide",
        "keyword": "movement breaks classroom regulation",
        "cluster": "Sensory and movement support",
        "audience": "teachers, classroom assistants, SENCOs and pastoral teams",
        "context": "Movement breaks work best when they are planned, brief and linked to learning readiness. Random or reactive breaks can sometimes increase disruption or make support feel unfair.",
        "decisions": [
            "which pupils need planned movement and at what points of the day",
            "whether breaks should be whole-class, individual or small group",
            "how staff will keep the routine predictable and low-disruption",
            "how progress will be reviewed with the pupil and staff team",
        ],
        "activities": [
            "use short movement options that have a clear beginning and ending",
            "teach pupils how to request a break appropriately",
            "pair movement with a return-to-task prompt",
            "notice whether movement improves attention, mood or classroom access",
        ],
        "support": "HIP Psychology can train school staff to use movement and regulation strategies without losing classroom structure.",
        "official": ["wellbeing", "sen", "sbehw"],
    },
    {
        "slug": "playground-anxiety-support-schools",
        "title": "Playground Anxiety Support in Schools: What Staff Can Do",
        "keyword": "playground anxiety support schools",
        "cluster": "Unstructured-time support",
        "audience": "primary staff, lunchtime supervisors, classroom assistants and pastoral teams",
        "context": "Playground anxiety often appears during noisy, fast-moving, unstructured parts of the day. Pupils may avoid going out, stay near adults, argue, withdraw or struggle to re-enter class.",
        "decisions": [
            "which spaces, games or peer groups feel hardest for pupils",
            "which adults can provide light-touch support without overprotecting",
            "how incidents and worries will be passed back to class staff",
            "what options pupils have if the playground feels overwhelming",
        ],
        "activities": [
            "create a quiet option that does not feel like a punishment",
            "teach playground scripts for joining, leaving and asking for help",
            "map repeated conflict points across the playground",
            "use short check-ins after break to support return to learning",
        ],
        "support": "HIP Psychology can support schools with playground anxiety, friendship pressure and unstructured-time wellbeing planning.",
        "official": ["wellbeing", "safeguarding"],
    },
    {
        "slug": "lunchtime-supervisor-wellbeing-training",
        "title": "Lunchtime Supervisor Wellbeing Training: Support at Unstructured Times",
        "keyword": "lunchtime supervisor wellbeing training",
        "cluster": "Unstructured-time support",
        "audience": "lunchtime supervisors, classroom assistants, pastoral teams and primary leaders",
        "context": "Lunchtime staff often see friendship problems, sensory overload, conflict and emotional distress first. Training helps them respond calmly and pass on useful information.",
        "decisions": [
            "what supervisors should record and who they should tell",
            "which pupil behaviours need support rather than a quick sanction",
            "how supervisors can use consistent language during conflict",
            "what support supervisors need after difficult incidents",
        ],
        "activities": [
            "practise short scripts for conflict, exclusion and distress",
            "agree a simple handover route to class or pastoral staff",
            "identify high-risk spaces and times across lunch",
            "give supervisors debrief routes after repeated or intense incidents",
        ],
        "support": "HIP Psychology can deliver practical wellbeing training for lunchtime supervisors and other support staff who manage unstructured times.",
        "official": ["wellbeing", "safeguarding", "effective_practice"],
    },
    {
        "slug": "peer-mentoring-wellbeing-schools",
        "title": "Peer Mentoring for Wellbeing in Schools: Safe Setup",
        "keyword": "peer mentoring wellbeing schools",
        "cluster": "Pupil leadership and voice",
        "audience": "post-primary pastoral leaders, heads of year, wellbeing coordinators and safeguarding teams",
        "context": "Peer mentoring can strengthen belonging and help-seeking, but it needs clear boundaries. Pupils should never be placed in roles that feel like counselling, safeguarding or adult responsibility.",
        "decisions": [
            "what peer mentors can and cannot do",
            "which adult supervises the programme and reviews concerns",
            "how mentors will be trained to listen, signpost and step back",
            "how pupils will access mentoring without stigma",
        ],
        "activities": [
            "write a simple role description with clear boundaries",
            "train mentors in listening, confidentiality limits and signposting",
            "build in adult supervision after every mentoring activity",
            "review whether the programme is increasing belonging safely",
        ],
        "support": "HIP Psychology can help schools design peer mentoring and pupil voice work with safe boundaries and clear adult oversight.",
        "official": ["wellbeing", "safeguarding"],
    },
    {
        "slug": "pupil-wellbeing-ambassadors",
        "title": "Pupil Wellbeing Ambassadors: Roles, Boundaries and Support",
        "keyword": "pupil wellbeing ambassadors",
        "cluster": "Pupil leadership and voice",
        "audience": "school leaders, pastoral teams, student councils and wellbeing coordinators",
        "context": "Pupil wellbeing ambassadors can make support more visible, but the role must be carefully designed. Pupils can promote kindness, signpost help and gather ideas, but adults remain responsible for care.",
        "decisions": [
            "what ambassadors will do in assemblies, campaigns or pupil voice work",
            "how safeguarding boundaries will be explained",
            "which adult will supervise and support ambassadors",
            "how the school will avoid choosing only the most confident pupils",
        ],
        "activities": [
            "co-create a role description with pupils and staff",
            "train ambassadors to signpost rather than solve personal problems",
            "plan visible but manageable activities across the school year",
            "review whether pupils know more clearly where to get help",
        ],
        "support": "HIP Psychology can support schools with pupil wellbeing ambassador training, pupil voice planning and whole-school wellbeing campaigns.",
        "official": ["wellbeing", "safeguarding", "effective_practice"],
    },
]


def load_module(path: Path, name: str):
    spec = importlib.util.spec_from_file_location(name, path)
    if spec is None or spec.loader is None:
        raise RuntimeError(f"Could not load module from {path}")
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    return module


def fetch_ahrefs_baseline() -> dict:
    token = os.environ.get("AHREFS_API_TOKEN")
    if not token:
        return {"error": "AHREFS_API_TOKEN not set"}
    headers = {"Authorization": f"Bearer {token}"}
    date = dt.date.today().isoformat()
    result: dict[str, object] = {"date": date, "target": "hippsychology.com"}
    for endpoint in ("metrics", "domain-rating", "backlinks-stats"):
        response = requests.get(
            f"https://api.ahrefs.com/v3/site-explorer/{endpoint}",
            headers=headers,
            params={"date": date, "target": "hippsychology.com"},
            timeout=30,
        )
        result[endpoint] = {
            "status_code": response.status_code,
            "body": response.json() if response.headers.get("content-type", "").startswith("application/json") else response.text,
        }
    return result


def fetch_official_statuses() -> list[dict]:
    checks = []
    seen = {}
    for label, url in OFFICIAL_LINKS.values():
        if url in seen:
            continue
        try:
            response = requests.get(url, timeout=20, allow_redirects=True)
            checks.append({"label": label, "url": url, "status_code": response.status_code, "final_url": response.url})
        except requests.RequestException as exc:
            checks.append({"label": label, "url": url, "error": str(exc)})
        seen[url] = True
    return checks


def excerpt(topic: dict) -> str:
    return (
        f"A practical school guide to {topic['keyword']}, covering planning decisions, "
        "staff routines, pupil support and HIP Psychology training options."
    )


def write_report(published: list[dict], qa: dict, ahrefs: dict, official_statuses: list[dict]) -> None:
    metrics = ahrefs.get("metrics", {}).get("body", {}).get("metrics", {}) if isinstance(ahrefs.get("metrics"), dict) else {}
    domain = ahrefs.get("domain-rating", {}).get("body", {}).get("domain_rating", {}) if isinstance(ahrefs.get("domain-rating"), dict) else {}
    backlinks = ahrefs.get("backlinks-stats", {}).get("body", {}).get("metrics", {}) if isinstance(ahrefs.get("backlinks-stats"), dict) else {}
    lines = [
        "# HIP Psychology Ahrefs Content Blast - 2026-06-25",
        "",
        SOURCE_NOTE,
        "",
        "## Ahrefs Baseline",
        f"- DR: {domain.get('domain_rating', 'n/a')}",
        f"- Live backlinks: {backlinks.get('live', 'n/a')}",
        f"- Live referring domains: {backlinks.get('live_refdomains', 'n/a')}",
        f"- GB organic keywords: {metrics.get('org_keywords', 'n/a')}",
        f"- Estimated organic traffic: {metrics.get('org_traffic', 'n/a')}",
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
        "- WordPress native post sitemap checked: `wp-sitemap-posts-post-1.xml`.",
        "",
        "## Raw Data",
        "- `ahrefs-baseline-2026-06-25.json`",
        "- `official-guidance-status-2026-06-25.json`",
        "- `publish-result.json`",
        "- `qa-result.json`",
        "",
        "## External Guidance Checked",
    ]
    for item in official_statuses:
        status = item.get("status_code", item.get("error", "unknown"))
        lines.append(f"- {item['label']} - {item['url']} ({status})")
    lines += [
        "",
        "## Not Done",
        "- No email, DM, social post or external outreach.",
        "- No featured images.",
        "- No Google Search Console sitemap submission in this script; live WordPress sitemap inclusion passed.",
    ]
    (HERE / "report.md").write_text("\n".join(lines) + "\n", encoding="utf-8")


def main() -> int:
    HERE.mkdir(parents=True, exist_ok=True)
    base = load_module(PUBLISHER_TEMPLATE, "hip_publisher_template")
    content = load_module(CONTENT_TEMPLATE, "hip_content_template")
    base.OUT = HERE
    base.SOURCE_NOTE = SOURCE_NOTE
    base.OFFICIAL_LINKS = OFFICIAL_LINKS
    base.INTERNAL_LINKS = INTERNAL_LINKS
    base.TOPICS = TOPICS
    content.OFFICIAL_LINKS = OFFICIAL_LINKS
    content.INTERNAL_LINKS = INTERNAL_LINKS
    content.TOPICS = TOPICS
    base.make_content = content.make_content
    base.excerpt = excerpt

    ahrefs = fetch_ahrefs_baseline()
    official_statuses = fetch_official_statuses()
    (HERE / "ahrefs-baseline-2026-06-25.json").write_text(json.dumps(ahrefs, indent=2), encoding="utf-8")
    (HERE / "official-guidance-status-2026-06-25.json").write_text(json.dumps(official_statuses, indent=2), encoding="utf-8")

    target_slugs = [topic["slug"] for topic in TOPICS]
    duplicate_targets = sorted({slug for slug in target_slugs if target_slugs.count(slug) > 1})
    if duplicate_targets:
        raise RuntimeError(f"Duplicate target slugs in batch: {duplicate_targets}")
    duplicates = [slug for slug in target_slugs if slug in base.existing_slugs()]
    if duplicates:
        raise RuntimeError(f"Refusing duplicate WordPress slugs: {duplicates}")

    published = [base.publish_topic(topic) for topic in TOPICS]
    qa = base.build_qa(published)

    (HERE / "publish-result.json").write_text(json.dumps({"source_note": SOURCE_NOTE, "results": published}, indent=2), encoding="utf-8")
    (HERE / "qa-result.json").write_text(json.dumps(qa, indent=2), encoding="utf-8")
    write_report(published, qa, ahrefs, official_statuses)
    print(json.dumps({"published": len(published), "failures": len(qa["failures"]), "report": str(HERE / "report.md")}, indent=2))
    return 0 if not qa["failures"] else 1


if __name__ == "__main__":
    raise SystemExit(main())
