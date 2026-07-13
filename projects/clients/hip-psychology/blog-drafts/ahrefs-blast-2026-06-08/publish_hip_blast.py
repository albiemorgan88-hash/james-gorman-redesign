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

AHREFS_SOURCE = (
    "Ahrefs source: live Ahrefs Site Explorer API check on 2026-06-08 shows HIP at DR 7, "
    "198 live referring domains, 292 live backlinks, 3 visible GB organic keywords and 4 estimated "
    "organic visits. Current visible wins include `pupil wellbeing` at position 10, `define pastoral "
    "support` at position 7, and branded HIP Psychology terms at position 1. Keywords Explorer checks "
    "confirmed `mental health workshops for schools` (GB vol 150, global vol 250), `primary to secondary "
    "transition` (GB vol 60, KD 0), and `vaping in schools` (GB vol 40, KD 3, global vol 450). "
    "The published batch avoids duplicate live slugs and builds bottom-funnel pages around HIP's "
    "Truth About Vaping, transition, KS3/KS4 and pastoral workshop offers."
)

OFFICIAL_LINKS = {
    "pha_vaping": "https://www.publichealth.hscni.net/index.php/vaping",
    "pha_vaping_research": "https://www.publichealth.hscni.net/index.php/news/pha-publishes-youth-vaping-research",
    "pha_vaping_factsheet": "https://www.publichealth.hscni.net/index.php/publications/vaping-factsheet",
    "de_pastoral": "https://www.education-ni.gov.uk/articles/derrytrasna-pastoral-care-awards",
    "ccea_llw": "https://ccea.org.uk/learning-resources/living-learning-together",
}

EXT_LABELS = {
    "pha_vaping": "Public Health Agency vaping guidance",
    "pha_vaping_research": "Public Health Agency youth vaping research",
    "pha_vaping_factsheet": "Public Health Agency vaping factsheet",
    "de_pastoral": "Department of Education pastoral care and wellbeing context",
    "ccea_llw": "CCEA Learning for Life and Work resources",
}

TOPICS = [
    {
        "slug": "vaping-workshops-for-schools",
        "title": "Vaping Workshops for Schools: What Pupils Need to Hear",
        "keyword": "vaping workshops for schools",
        "cluster": "Vaping workshop commercial long-tail",
        "ahrefs_note": "Commercial support page for Ahrefs-confirmed `vaping in schools` (GB vol 40, KD 3, global vol 450).",
        "audience": "pastoral leaders, heads of year, safeguarding leads, LLW coordinators and senior leaders",
        "intent": "help schools choose vaping workshops that are honest, age-appropriate and connected to pastoral support",
        "problem": "Vaping conversations can become either too punitive or too vague. Pupils need clear information, realistic discussion and adults who can respond without panic.",
        "signs": [
            "staff are finding vapes in toilets, changing rooms or social spaces",
            "pupils minimise vaping because it feels common",
            "parents are asking what the school is doing",
            "leaders want a session that supports policy, not just sanctions",
        ],
        "actions": [
            "agree the year group and level of detail before delivery",
            "separate health education from discipline procedures",
            "give pupils language for pressure, curiosity and refusal",
            "brief pastoral staff on likely follow-up conversations",
        ],
        "workshop": "HIP Psychology's Truth About Vaping workshop helps pupils explore risk, peer pressure, decision-making and support-seeking in a calm school setting.",
        "external": ["pha_vaping", "pha_vaping_research"],
    },
    {
        "slug": "vaping-assembly-for-schools",
        "title": "Vaping Assembly for Schools: Clear Messages Without Scare Tactics",
        "keyword": "vaping assembly schools",
        "cluster": "Vaping workshop commercial long-tail",
        "ahrefs_note": "Supports the `vaping in schools` Ahrefs opportunity with an assembly-specific search intent page.",
        "audience": "heads of year, pastoral teams, senior leaders and staff planning pupil assemblies",
        "intent": "help schools use assemblies to set a shared message before tutor, pastoral or workshop follow-up",
        "problem": "A vaping assembly can reach a full year group quickly, but it can also miss the pupils most at risk if it relies on fear or generic warnings.",
        "signs": [
            "the school needs a shared message for several classes",
            "staff want consistent language before incidents increase",
            "pupils have heard mixed messages from peers and social media",
            "leaders need a short intervention that can link into wider support",
        ],
        "actions": [
            "keep the message specific and memorable",
            "avoid inviting public disclosure in a large room",
            "name where pupils can get help afterwards",
            "give form tutors a simple follow-up prompt",
        ],
        "workshop": "HIP Psychology can deliver vaping assemblies as part of a wider support plan, with follow-up workshops for smaller groups where deeper discussion is needed.",
        "external": ["pha_vaping", "pha_vaping_factsheet"],
    },
    {
        "slug": "vaping-education-for-schools",
        "title": "Vaping Education for Schools: Building a Safer Pupil Conversation",
        "keyword": "vaping education schools",
        "cluster": "Vaping education and prevention cluster",
        "ahrefs_note": "Long-tail support for `vaping in schools`, chosen because HIP already sells a relevant Truth About Vaping programme.",
        "audience": "LLW coordinators, pastoral teams, wellbeing leads and school leaders",
        "intent": "help schools turn vaping concern into education that pupils can understand and staff can reinforce",
        "problem": "Pupils often hear about vaping from friends, online content or older students before they hear a balanced school message. Education needs to be early, plain and practical.",
        "signs": [
            "pupils ask if vaping is harmless",
            "staff are unsure which claims to challenge",
            "parents want a clearer school response",
            "the school needs education before behaviour becomes embedded",
        ],
        "actions": [
            "start with what pupils already believe",
            "use current public health guidance as the reference point",
            "include peer pressure and decision-making, not only health facts",
            "connect the lesson with pastoral and safeguarding routes",
        ],
        "workshop": "HIP Psychology can support schools with vaping education that is psychologically informed, practical and designed for post-primary pupils.",
        "external": ["pha_vaping_research", "pha_vaping_factsheet"],
    },
    {
        "slug": "vaping-prevention-lessons-for-schools",
        "title": "Vaping Prevention Lessons for Schools: What to Cover Before Problems Grow",
        "keyword": "vaping prevention schools",
        "cluster": "Vaping education and prevention cluster",
        "ahrefs_note": "Prevention-focused companion page for the Ahrefs-confirmed `vaping in schools` topic.",
        "audience": "heads of year, LLW teachers, pastoral teams, school nurses and senior leaders",
        "intent": "help schools plan vaping prevention lessons that support pupils before habits and group norms become fixed",
        "problem": "Waiting until vaping becomes highly visible can make prevention harder. Early lessons should help pupils think about risk, identity, peer influence and getting support.",
        "signs": [
            "younger pupils are talking about vaping before staff expected it",
            "incidents are moving from older pupils into younger year groups",
            "some pupils see vaping as normal social behaviour",
            "staff want a prevention message that does not sound like a lecture",
        ],
        "actions": [
            "time lessons before known pressure points",
            "include refusal language and peer scenarios",
            "avoid graphic shock tactics as the main method",
            "make sure pupils know who they can talk to",
        ],
        "workshop": "HIP Psychology can deliver prevention-focused vaping lessons and workshops that help pupils make safer choices and understand support routes.",
        "external": ["pha_vaping", "pha_vaping_research"],
    },
    {
        "slug": "truth-about-vaping-workshop-schools",
        "title": "The Truth About Vaping Workshop for Schools: A Practical KS3 and KS4 Option",
        "keyword": "truth about vaping workshop schools",
        "cluster": "HIP programme support page",
        "ahrefs_note": "Bottom-funnel branded/programme page built from HIP's active Truth About Vaping offer and the `vaping in schools` Ahrefs opportunity.",
        "audience": "post-primary leaders, heads of year, pastoral teams and wellbeing coordinators",
        "intent": "explain when the Truth About Vaping workshop is useful and how it can fit a school's wider pupil support plan",
        "problem": "Schools need more than an information sheet when vaping is tied to belonging, curiosity, stress, identity and peer pressure. A workshop gives pupils time to think safely.",
        "signs": [
            "vaping is becoming part of friendship-group behaviour",
            "pupils repeat confident claims that staff know are incomplete",
            "teachers want a specialist session that supports their own follow-up",
            "leaders need a practical response for KS3 or KS4",
        ],
        "actions": [
            "choose the year group with the clearest need",
            "brief staff on the workshop aims",
            "align the session with school policy and pastoral follow-up",
            "decide how pupils can ask for help afterwards",
        ],
        "workshop": "The Truth About Vaping workshop is designed to help pupils think about vaping, pressure, risk and personal choices in a grounded and age-appropriate way.",
        "external": ["pha_vaping", "pha_vaping_factsheet"],
    },
    {
        "slug": "primary-to-secondary-transition-workshop",
        "title": "Primary to Secondary Transition Workshop: Helping Pupils Settle With Confidence",
        "keyword": "primary to secondary transition workshop",
        "cluster": "Transition Ahrefs cluster",
        "ahrefs_note": "Commercial long-tail built from Ahrefs-confirmed `primary to secondary transition` (GB vol 60, KD 0).",
        "audience": "Year 8 heads, KS3 coordinators, pastoral teams, primary liaison staff and senior leaders",
        "intent": "help schools use transition workshops to reduce uncertainty and support pupils as they move into post-primary life",
        "problem": "Transition support often focuses on logistics, but pupils also need help with confidence, friendships, routines, asking for help and managing new expectations.",
        "signs": [
            "Year 8 pupils are worried about getting lost or fitting in",
            "parents are asking repeated practical questions",
            "form tutors are managing avoidable settling-in issues",
            "leaders want a consistent transition message across the cohort",
        ],
        "actions": [
            "separate practical information from emotional preparation",
            "normalise uncertainty without dismissing it",
            "teach pupils how and when to ask for help",
            "build in a review point after the first few weeks",
        ],
        "workshop": "HIP Psychology can deliver transition workshops that help pupils move from primary to secondary school with practical confidence and realistic support.",
        "external": ["de_pastoral", "ccea_llw"],
    },
    {
        "slug": "p7-to-year-8-transition-workshop",
        "title": "P7 to Year 8 Transition Workshop: Supporting the Move Into Post-Primary",
        "keyword": "p7 to year 8 transition workshop",
        "cluster": "Transition Ahrefs cluster",
        "ahrefs_note": "NI-specific companion page for Ahrefs-confirmed `primary to secondary transition` (GB vol 60, KD 0).",
        "audience": "Northern Ireland post-primary schools, Year 8 teams, primary liaison staff and pastoral leaders",
        "intent": "help NI schools support pupils through the P7 to Year 8 move with clear language and practical preparation",
        "problem": "The move into Year 8 can feel exciting and intimidating at the same time. Pupils need more than a map and timetable; they need confidence, connection and support routes.",
        "signs": [
            "pupils are anxious before arrival or early in term",
            "friendship changes are affecting confidence",
            "some pupils struggle to ask adults for help",
            "staff want a positive start before small worries grow",
        ],
        "actions": [
            "teach pupils what a good first week can look like",
            "make help-seeking normal and specific",
            "include friendship, organisation and confidence scenarios",
            "connect workshop themes with form time and pastoral support",
        ],
        "workshop": "HIP Psychology's transition support can be shaped around the P7 to Year 8 move, helping pupils feel ready for routines, relationships and new expectations.",
        "external": ["de_pastoral", "ccea_llw"],
    },
    {
        "slug": "year-8-transition-workshops",
        "title": "Year 8 Transition Workshops: What Helps Pupils After the First Few Weeks",
        "keyword": "year 8 transition workshop",
        "cluster": "Transition Ahrefs cluster",
        "ahrefs_note": "Bottom-funnel page supporting HIP's active Year 8 transition and Ready For Action offer.",
        "audience": "heads of Year 8, KS3 coordinators, pastoral leads and form tutors",
        "intent": "help schools support Year 8 pupils once the initial welcome period has passed and real settling-in patterns appear",
        "problem": "Some Year 8 pupils look settled at first but struggle once homework, friendships, travel, routines and expectations become real. Transition support should continue after induction.",
        "signs": [
            "pupils who were confident on day one become quieter",
            "friendship groups change quickly",
            "organisation issues begin to affect learning",
            "form tutors notice repeated low-level worries",
        ],
        "actions": [
            "review transition needs after the first month",
            "teach practical coping and organisation strategies",
            "include friendship and confidence scenarios",
            "give pupils a clear route to pastoral support",
        ],
        "workshop": "HIP Psychology can deliver Year 8 transition workshops that build on induction and help pupils settle into the real rhythm of post-primary school.",
        "external": ["de_pastoral", "ccea_llw"],
    },
    {
        "slug": "ks3-wellbeing-workshops",
        "title": "KS3 Wellbeing Workshops: Support for Year 8, Year 9 and Year 10",
        "keyword": "ks3 wellbeing workshops",
        "cluster": "KS3 wellbeing commercial long-tail",
        "ahrefs_note": "Commercial long-tail page aligned with HIP's active KS3 offer and the wider Ahrefs `mental health workshops for schools` opportunity.",
        "audience": "heads of KS3, Year 8 to Year 10 teams, pastoral leads and wellbeing coordinators",
        "intent": "help schools choose KS3 wellbeing workshops that match the developmental needs of pupils in Years 8, 9 and 10",
        "problem": "KS3 is often where confidence, belonging, friendship pressure, anxiety and decision-making become visible. Workshops work best when they are matched to the year group.",
        "signs": [
            "Year 8 pupils need settling-in and confidence support",
            "Year 9 pupils are dealing with friendship and anxiety themes",
            "Year 10 pupils need help with choices, pressure and next steps",
            "staff want consistent language across the key stage",
        ],
        "actions": [
            "choose a theme for each year group rather than one generic session",
            "link workshops to LLW, pastoral care and tutor follow-up",
            "brief staff on key phrases and support routes",
            "review themes termly as pupil needs change",
        ],
        "workshop": "HIP Psychology offers KS3 workshops including transition, Ready For Action, tackling anxiety, anti-bullying, taking the next step and Truth About Vaping.",
        "external": ["de_pastoral", "ccea_llw"],
    },
    {
        "slug": "year-10-wellbeing-workshop",
        "title": "Year 10 Wellbeing Workshop: Preparing Pupils for Choices, Pressure and Next Steps",
        "keyword": "year 10 wellbeing workshop",
        "cluster": "KS3 and KS4 transition support",
        "ahrefs_note": "Commercial long-tail page aligned with HIP's Taking The Next Step offer for Year 10 pupils.",
        "audience": "heads of Year 10, KS3 and KS4 coordinators, pastoral teams and careers/LLW staff",
        "intent": "help schools support Year 10 pupils as they handle subject choices, identity, confidence and future pressure",
        "problem": "Year 10 pupils can feel caught between KS3 and KS4. They may need support with decisions, self-belief, friendship pressure and the move toward more independent responsibility.",
        "signs": [
            "pupils are anxious about options or future choices",
            "staff notice confidence dips before KS4",
            "friendship dynamics are influencing decisions",
            "leaders want a positive bridge into the next stage",
        ],
        "actions": [
            "frame choices as a process rather than a one-off decision",
            "include confidence, values and pressure scenarios",
            "give pupils practical language for asking questions",
            "connect the workshop with pastoral and careers support",
        ],
        "workshop": "HIP Psychology's Taking The Next Step workshop supports Year 10 pupils as they prepare for choices, pressure and the move toward KS4.",
        "external": ["de_pastoral", "ccea_llw"],
    },
    {
        "slug": "peer-pressure-workshops-for-schools",
        "title": "Peer Pressure Workshops for Schools: Helping Pupils Make Safer Choices",
        "keyword": "peer pressure workshops schools",
        "cluster": "Pastoral and decision-making workshop long-tail",
        "ahrefs_note": "Long-tail support page linking vaping, friendship, confidence and KS3 wellbeing topics into a commercial workshop intent.",
        "audience": "pastoral leaders, heads of year, safeguarding leads, LLW teachers and wellbeing coordinators",
        "intent": "help schools address peer pressure before it appears as vaping, bullying, risky choices or friendship conflict",
        "problem": "Peer pressure is rarely solved by telling pupils to say no. Pupils need realistic practice with belonging, identity, group norms and asking for help.",
        "signs": [
            "pupils copy group behaviour they later regret",
            "friendship groups are shaping risky choices",
            "staff notice pressure around vaping, social media or bullying",
            "pupils struggle to step away without losing face",
        ],
        "actions": [
            "use realistic scenarios rather than abstract warnings",
            "teach pupils several exit strategies",
            "include bystander and friendship choices",
            "connect the topic with pastoral support routes",
        ],
        "workshop": "HIP Psychology can deliver peer pressure workshops that help pupils think about identity, influence, decision-making and safer ways to respond.",
        "external": ["de_pastoral", "ccea_llw"],
    },
    {
        "slug": "healthy-relationships-workshops-for-schools",
        "title": "Healthy Relationships Workshops for Schools: Supporting Friendship, Respect and Boundaries",
        "keyword": "healthy relationships workshops schools",
        "cluster": "Pastoral and relationship education long-tail",
        "ahrefs_note": "Commercial long-tail page chosen to support existing friendship, bullying and wellbeing content without duplicating live slugs.",
        "audience": "pastoral teams, heads of year, LLW coordinators, safeguarding leads and senior leaders",
        "intent": "help schools support pupils with friendship, respect, boundaries and safer relationship choices",
        "problem": "Relationship issues can appear as friendship fallouts, online conflict, bullying, low confidence or pressure to behave in ways pupils are uncomfortable with.",
        "signs": [
            "friendship issues are taking up pastoral time",
            "pupils struggle to describe boundaries",
            "online behaviour spills into school life",
            "staff want consistent language around respect and support",
        ],
        "actions": [
            "teach boundaries in practical everyday language",
            "include friendship repair and help-seeking",
            "avoid public disclosure activities",
            "align the workshop with safeguarding and pastoral procedures",
        ],
        "workshop": "HIP Psychology can support healthy relationships work through pupil workshops that are age-appropriate, realistic and connected to school support systems.",
        "external": ["de_pastoral", "ccea_llw"],
    },
    {
        "slug": "coping-skills-workshops-for-schools",
        "title": "Coping Skills Workshops for Schools: Practical Strategies Pupils Can Actually Use",
        "keyword": "coping skills workshops schools",
        "cluster": "Pupil wellbeing workshop long-tail",
        "ahrefs_note": "Workshop-intent long-tail chosen to support HIP's pupil wellbeing and anxiety content with a practical commercial page.",
        "audience": "year heads, SENCOs, pastoral teams, wellbeing leads and classroom staff",
        "intent": "help schools choose coping skills workshops that are realistic, age-appropriate and connected to everyday school life",
        "problem": "Pupils are often told to use coping strategies without being shown when, why and how those strategies fit real moments of pressure.",
        "signs": [
            "pupils know wellbeing words but do not use them in the moment",
            "staff are seeing repeated anxiety or overwhelm",
            "some pupils rely on avoidance as their main strategy",
            "leaders want practical support that complements pastoral care",
        ],
        "actions": [
            "teach a small number of repeatable strategies",
            "use classroom, friendship and assessment scenarios",
            "normalise help-seeking alongside self-management",
            "brief staff so strategies are reinforced after the workshop",
        ],
        "workshop": "HIP Psychology can deliver coping skills workshops that help pupils practise calm, practical responses to pressure, worry and everyday school challenges.",
        "external": ["de_pastoral", "ccea_llw"],
    },
]

INTERNAL_LINKS = [
    ("vaping in schools Northern Ireland", "/vaping-in-schools-northern-ireland/"),
    ("transition workshops for schools", "/transition-workshops-for-schools/"),
    ("Year 8 transition support", "/year-8-transition-support/"),
    ("student wellbeing workshops", "/student-wellbeing-workshops/"),
    ("pupil wellbeing strategy", "/pupil-wellbeing-strategy-schools/"),
    ("pastoral support in schools", "/pastoral-support-in-schools/"),
    ("pastoral care training", "/pastoral-care-training-schools/"),
    ("mental health workshops for schools", "/mental-health-workshops-for-schools/"),
    ("student anxiety in schools", "/student-anxiety-in-schools/"),
    ("anti-bullying workshops", "/anti-bullying-workshops-schools/"),
    ("contact HIP Psychology", "/contact-us/"),
]


def wp_auth() -> HTTPBasicAuth:
    return HTTPBasicAuth(os.environ["HIP_WP_USERNAME"], os.environ["HIP_WP_APP_PASSWORD"])


def paragraph(text: str) -> str:
    return f"<p>{escape(text)}</p>"


def list_html(items: list[str]) -> str:
    return "<ul>" + "".join(f"<li>{escape(item[0].upper() + item[1:] if item else item)}</li>" for item in items) + "</ul>"


def related_links(current_slug: str) -> str:
    links = []
    for label, href in INTERNAL_LINKS:
        if href.strip("/") != current_slug:
            links.append(f'<a href="{href}">{escape(label)}</a>')
    return ", ".join(links[:6])


def make_content(topic: dict) -> str:
    faq = [
        (
            f"What should a school decide before booking {topic['keyword']}?",
            "Agree the target year group, the pastoral or safeguarding route, the staff who need briefing, and what pupils should be able to do differently afterwards.",
        ),
        (
            "How can schools keep this kind of session safe?",
            "Avoid asking pupils to share personal experiences in public settings. Use realistic scenarios, clear boundaries, safeguarding procedures and a named support route.",
        ),
        (
            "Is one workshop enough?",
            "A single workshop can start the conversation, but the strongest impact comes when staff follow up through tutor time, pastoral care, pupil voice and consistent language.",
        ),
        (
            "How can HIP Psychology help?",
            "HIP Psychology can support schools with pupil workshops, assemblies, staff training and practical wellbeing planning tailored to the year group and school context.",
        ),
    ]
    faq_schema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [{"@type": "Question", "name": q, "acceptedAnswer": {"@type": "Answer", "text": a}} for q, a in faq],
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
    external = [
        f'<a href="{OFFICIAL_LINKS[key]}" target="_blank" rel="noopener">{escape(EXT_LABELS[key])}</a>'
        for key in topic["external"]
    ]

    html: list[str] = []
    html.append(paragraph(f"{topic['title']} is a practical guide for {topic['audience']}. It focuses on {topic['intent']}."))
    html.append(paragraph(f"The target keyword is part of the {topic['cluster']}. {topic['ahrefs_note']}"))
    html.append("<h2>Why this matters for schools</h2>")
    html.append(paragraph(topic["problem"]))
    html.append(paragraph("The useful test is not whether a session sounds positive on a planner. The useful test is whether pupils and staff know what to do next when the issue appears in real school life."))
    html.append("<h2>Common signs this needs attention</h2>")
    html.append(paragraph("Every school context is different, but repeated patterns should be noticed before pupils feel unsupported or staff become stretched."))
    html.append(list_html(topic["signs"]))
    html.append("<h2>What schools should decide first</h2>")
    html.append(paragraph("Before booking a workshop or assembly, leaders should agree the purpose, the audience, the support route and the follow-up. That keeps the work practical, safe and easier for staff to reinforce."))
    html.append(list_html(topic["actions"]))
    html.append("<h2>How this links to pastoral care</h2>")
    html.append(paragraph("Workshop content should sit alongside pastoral care, safeguarding procedures, Learning for Life and Work themes and the everyday relationships pupils have with trusted adults in school."))
    html.append(paragraph("That matters because many wellbeing topics involve confidence, friendship, pressure, worry or disclosure. Pupils should not be invited into a conversation unless adults are ready to respond clearly and calmly."))
    html.append("<h2>What good delivery should include</h2>")
    html.append(paragraph(topic["workshop"]))
    html.append(paragraph("Good delivery should be age-appropriate, psychologically informed and realistic. It should avoid shame, shock-only messaging or vague advice that pupils cannot apply when pressure appears."))
    html.append("<h2>Useful guidance to align with</h2>")
    html.append("<p>Schools can connect this work with existing guidance and resources, including " + " and ".join(external) + ".</p>")
    html.append("<h2>How HIP Psychology can support your school</h2>")
    html.append(paragraph("HIP Psychology works with schools across Northern Ireland and Ireland through pupil workshops, staff training, assemblies and whole-school wellbeing support. Sessions are designed to be practical, psychologically informed and usable in busy school settings."))
    html.append("<p>Useful related HIP resources include " + related_links(topic["slug"]) + ".</p>")
    html.append('<p><strong>Need help planning the next step?</strong> <a href="/contact-us/">Contact HIP Psychology</a> to discuss workshops, staff training or whole-school wellbeing support.</p>')
    html.append("<h2>FAQs</h2>")
    for question, answer in faq:
        html.append(f"<h3>{escape(question)}</h3>")
        html.append(paragraph(answer))
    html.append(f'<script type="application/ld+json">{json.dumps(faq_schema, ensure_ascii=False)}</script>')
    html.append(f'<script type="application/ld+json">{json.dumps(article_schema, ensure_ascii=False)}</script>')
    return "\n".join(html)


def excerpt(topic: dict) -> str:
    return f"A practical school guide to {topic['keyword']}, with signs to notice, safe planning steps, staff roles and HIP Psychology workshop support."


def wp_posts(params: dict) -> requests.Response:
    return requests.get(f"{API}/posts", params=params, auth=wp_auth(), timeout=30)


def existing_slugs() -> set[str]:
    slugs: set[str] = set()
    for page in range(1, 10):
        response = wp_posts({"per_page": 100, "page": page, "_fields": "slug"})
        if response.status_code == 400:
            break
        response.raise_for_status()
        data = response.json()
        if not data:
            break
        slugs.update(post["slug"] for post in data)
    return slugs


def publish_topic(topic: dict) -> dict:
    content = make_content(topic)
    source_file = OUT / f"{topic['slug']}.html"
    source_file.write_text(content)
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
        "ahrefs_note": topic["ahrefs_note"],
        "status": data["status"],
        "source_file": str(source_file),
    }


def check_page(row: dict) -> dict:
    response = requests.get(row["url"], timeout=30)
    html = response.text
    leak_markers = [
        "TODO",
        "Draft",
        "source_file",
        "Target keyword:",
        "primary_keyword:",
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


def latest_feed_contains(urls: list[str]) -> dict[str, bool]:
    response = requests.get(f"{SITE}/wp-json/wp/v2/posts", params={"per_page": 20, "_fields": "link"}, timeout=30)
    response.raise_for_status()
    links = {post["link"] for post in response.json()}
    return {url: url in links for url in urls}


def sitemap_contains(urls: list[str]) -> dict[str, bool]:
    response = requests.get(f"{SITE}/wp-sitemap-posts-post-1.xml", timeout=30)
    text = response.text
    return {url: url in text for url in urls}


def write_report(published: list[dict], qa: dict) -> None:
    lines = [
        "# HIP Psychology Ahrefs Content Blast - 2026-06-08",
        "",
        AHREFS_SOURCE,
        "",
        "## Keyword Clusters Picked",
    ]
    for row in published:
        lines.append(f"- `{row['target_keyword']}` - {row['cluster']}. {row['ahrefs_note']}")
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
        "- `ahrefs-site-explorer-2026-06-08.json`",
        "- `ahrefs-refined-2026-06-08.json`",
        "- `ahrefs-keyword-candidates-2026-06-08.json`",
        "- `existing-wp-posts-2026-06-08.json`",
        "",
        "## Not Done",
        "- No email or social promotion.",
        "- No featured images.",
    ]
    (OUT / "report.md").write_text("\n".join(lines) + "\n")


def main() -> int:
    OUT.mkdir(parents=True, exist_ok=True)
    slugs = existing_slugs()
    duplicates = [topic["slug"] for topic in TOPICS if topic["slug"] in slugs]
    if duplicates:
        raise RuntimeError(f"Refusing duplicate slugs: {duplicates}")

    published = [publish_topic(topic) for topic in TOPICS]
    urls = [row["url"] for row in published]
    feed = latest_feed_contains(urls)
    sitemap = sitemap_contains(urls)
    rest_status = {}
    for row in published:
        response = wp_posts({"slug": row["slug"], "_fields": "id,status,slug,link"})
        response.raise_for_status()
        posts = response.json()
        rest_status[row["url"]] = posts[0]["status"] if posts else None

    qa = {
        "source_note": AHREFS_SOURCE,
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

    (OUT / "publish-result.json").write_text(json.dumps({"source_note": AHREFS_SOURCE, "results": published}, indent=2))
    (OUT / "qa-result.json").write_text(json.dumps(qa, indent=2))
    write_report(published, qa)
    print(json.dumps({"published": len(published), "failures": len(qa["failures"]), "report": str(OUT / "report.md")}, indent=2))
    return 0 if not qa["failures"] else 1


if __name__ == "__main__":
    raise SystemExit(main())
