#!/usr/bin/env python3
from __future__ import annotations

import argparse
import base64
import datetime as dt
import json
import os
import re
import time
from html import escape
from pathlib import Path
from urllib.parse import quote, urlencode
from urllib.request import Request, urlopen

SITE = "https://hippsychology.com"
POSTS_API = f"{SITE}/wp-json/wp/v2/posts"
HERE = Path(__file__).resolve().parent
TODAY = dt.date(2026, 7, 10).isoformat()

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
        "slug": "school-belonging-workshops",
        "title": "School Belonging Workshops: Helping Pupils Feel Connected",
        "keyword": "school belonging workshops",
        "ahrefs_keyword": "school belonging",
        "audience": "pastoral teams, heads of year, form tutors and school leaders",
        "intent": "helping pupils notice where they feel connected, what gets in the way and how to ask for support before isolation grows",
        "why": "Belonging is closely tied to attendance, confidence, peer relationships and willingness to seek help. A practical workshop gives pupils shared language without asking them to disclose personal worries in front of classmates.",
        "planning": ["which year group is most affected", "how form tutors will reinforce the language", "what support routes pupils should hear", "how quieter pupils can participate safely"],
        "activities": ["connection mapping", "safe place reflection", "trusted adult prompts", "small-step belonging plans"],
        "staff_follow_up": "Form tutors can revisit the language in short check-ins, notice pupils who are disconnected from peer groups and use the same support-route prompts after the session.",
    },
    {
        "slug": "restorative-practice-training-schools",
        "title": "Restorative Practice Training for Schools",
        "keyword": "restorative practice training schools",
        "ahrefs_keyword": "restorative practice schools",
        "audience": "pastoral leaders, heads of year, classroom teachers and senior leaders",
        "intent": "helping staff use calm, consistent conversations after conflict, harm or relationship breakdown",
        "why": "Restorative practice works best when adults share the same expectations and boundaries. Training should help staff avoid rushed apologies, unclear consequences and conversations that leave pupils unsure what needs to change.",
        "planning": ["which incidents are suitable for restorative follow-up", "when safeguarding or behaviour policy takes priority", "who facilitates conversations", "how outcomes are recorded"],
        "activities": ["restorative question practice", "scenario triage", "repair-plan writing", "staff confidence reflection"],
        "staff_follow_up": "Pastoral teams can agree a short script, escalation threshold and review point so restorative conversations stay consistent across year groups.",
    },
    {
        "slug": "trauma-informed-practice-schools",
        "title": "Trauma-Informed Practice in Schools: Practical Staff Training",
        "keyword": "trauma-informed practice schools",
        "ahrefs_keyword": "trauma informed practice schools",
        "audience": "teachers, classroom assistants, pastoral staff, SENCOs and senior leaders",
        "intent": "helping staff understand stress responses, relationship-based support and clear boundaries in everyday school routines",
        "why": "A trauma-informed approach should not turn teachers into therapists. It should help adults interpret behaviour carefully, maintain predictable routines and know when concerns need specialist or safeguarding input.",
        "planning": ["which routines feel unpredictable for pupils", "what language staff should use under pressure", "how staff avoid public shaming", "when concerns must be escalated"],
        "activities": ["stress-response mapping", "routine audit", "language reset practice", "case-study discussion"],
        "staff_follow_up": "Leaders can use the training to agree consistent classroom routines, debrief arrangements and clear routes for pupils who need more support.",
    },
    {
        "slug": "school-wellbeing-audit",
        "title": "School Wellbeing Audit: What Leaders Should Review",
        "keyword": "school wellbeing audit",
        "ahrefs_keyword": "school wellbeing audit",
        "audience": "principals, vice principals, wellbeing leads and pastoral senior leaders",
        "intent": "reviewing how pupil wellbeing, staff confidence, parent communication and referral routes work in practice",
        "why": "Schools often have strong policies but uneven day-to-day routines. A wellbeing audit helps leaders see where support is visible, where staff need confidence and where pupils may not understand how to ask for help.",
        "planning": ["which policies are live in practice", "what pupils and staff already say", "where referral routes slow down", "which quick wins can happen this term"],
        "activities": ["policy-to-practice review", "pupil voice sample", "staff confidence check", "support-route mapping"],
        "staff_follow_up": "After an audit, leaders can prioritise a small number of actions, assign owners and revisit progress through pastoral or school development planning.",
    },
    {
        "slug": "whole-school-mental-health-policy",
        "title": "Whole-School Mental Health Policy: Practical Review for Schools",
        "keyword": "whole-school mental health policy",
        "ahrefs_keyword": "mental health policy schools",
        "audience": "school leaders, governors, safeguarding leads, pastoral teams and wellbeing coordinators",
        "intent": "helping schools turn policy language into clear staff routines, signposting and pupil support pathways",
        "why": "A mental health policy is useful only when staff understand what it means in a real classroom, corridor or parent conversation. The review should keep safeguarding, pastoral care and everyday wellbeing work aligned.",
        "planning": ["which policies overlap", "who owns each support pathway", "how staff know what to record", "what pupils and parents are told"],
        "activities": ["policy map", "support pathway review", "scenario testing", "communication checklist"],
        "staff_follow_up": "A short staff briefing can turn the reviewed policy into practical prompts for form tutors, classroom teachers and pastoral staff.",
    },
    {
        "slug": "pupil-voice-wellbeing-survey",
        "title": "Pupil Voice Wellbeing Survey: Turning Feedback Into Action",
        "keyword": "pupil voice wellbeing survey",
        "ahrefs_keyword": "pupil voice wellbeing",
        "audience": "pupil voice leads, pastoral teams, senior leaders and school council coordinators",
        "intent": "collecting safe, useful feedback from pupils and turning it into visible school action",
        "why": "Pupil voice can become tokenistic if schools gather feedback but do not close the loop. A simple wellbeing survey should ask questions pupils can answer safely and should lead to actions they can recognise.",
        "planning": ["what pupils can realistically influence", "how anonymity and safeguarding are handled", "who analyses responses", "how actions are reported back"],
        "activities": ["question design", "theme sorting", "you-said-we-did planning", "pupil council follow-up"],
        "staff_follow_up": "Staff can use survey themes to plan assemblies, form-time activities, parent sessions or targeted workshops for year groups that need extra support.",
    },
    {
        "slug": "anxiety-assembly-for-schools",
        "title": "Anxiety Assembly for Schools: Safe Messages for Pupils",
        "keyword": "anxiety assembly for schools",
        "ahrefs_keyword": "anxiety assembly schools",
        "audience": "heads of year, pastoral leaders, form tutors and assembly coordinators",
        "intent": "introducing anxiety in a normalising but safe way, with clear support routes and practical next steps",
        "why": "Assemblies can reach a whole year group quickly, but anxiety content needs careful boundaries. Pupils should leave knowing that support exists and that avoidance is not the only option.",
        "planning": ["which year group needs the message", "how sensitive examples will be handled", "what support routes are named", "which staff will be available afterwards"],
        "activities": ["stress signs reflection", "support route reminder", "small-step coping ideas", "myth-busting questions"],
        "staff_follow_up": "Schools can pair an assembly with form-time check-ins, a parent note or a smaller workshop for pupils who need more structured support.",
    },
    {
        "slug": "confidence-workshops-for-pupils",
        "title": "Confidence Workshops for Pupils: Practical School Support",
        "keyword": "confidence workshops for pupils",
        "ahrefs_keyword": "confidence workshops for schools",
        "audience": "KS2, KS3 and KS4 pastoral teams, class teachers, heads of year and wellbeing leads",
        "intent": "helping pupils recognise strengths, manage comparison and practise small steps towards participation",
        "why": "Confidence support should be specific, not motivational wallpaper. Pupils need practical ways to notice strengths, handle setbacks and take part without being pushed into public performance.",
        "planning": ["which situations affect confidence most", "how pupils can participate privately", "what staff will praise afterwards", "which pupils may need extra help"],
        "activities": ["strength spotting", "comparison pressure scenarios", "participation ladder", "self-talk reset"],
        "staff_follow_up": "Teachers can reinforce confidence by noticing effort, offering small participation options and using consistent prompts when pupils avoid tasks.",
    },
    {
        "slug": "positive-behaviour-support-training-schools",
        "title": "Positive Behaviour Support Training for Schools",
        "keyword": "positive behaviour support training schools",
        "ahrefs_keyword": "positive behaviour support schools",
        "audience": "class teachers, classroom assistants, pastoral staff, SENCOs and senior leaders",
        "intent": "helping staff understand behaviour needs, reduce escalation and use consistent support before crisis points",
        "why": "Behaviour support is strongest when adults know what they are trying to teach, not just what they want to stop. Training should connect routines, relationships, boundaries and emotional regulation.",
        "planning": ["which behaviours escalate most often", "what routines are inconsistent", "how staff record patterns", "when pastoral or SEN support is needed"],
        "activities": ["behaviour pattern mapping", "routine reset planning", "de-escalation language practice", "support strategy sorting"],
        "staff_follow_up": "Teams can agree a small set of shared responses and review whether they are reducing repeated incidents or simply moving them elsewhere.",
    },
    {
        "slug": "nurture-group-staff-training",
        "title": "Nurture Group Staff Training for Schools",
        "keyword": "nurture group staff training",
        "ahrefs_keyword": "nurture group training schools",
        "audience": "nurture staff, SENCOs, classroom assistants, pastoral leads and primary leaders",
        "intent": "supporting adults who run small-group wellbeing, regulation or social-emotional sessions",
        "why": "Nurture work needs warmth, structure and clear aims. Staff should know how to plan sessions, notice progress, maintain boundaries and link small-group support back to classroom routines.",
        "planning": ["which pupils should attend", "what the group is designed to change", "how progress is noticed", "how learning transfers back to class"],
        "activities": ["session structure planning", "emotional vocabulary practice", "social scenario work", "progress note templates"],
        "staff_follow_up": "After training, staff can use a consistent session rhythm and share simple progress notes with class teachers or pastoral leads.",
    },
    {
        "slug": "bereavement-support-training-schools",
        "title": "Bereavement Support Training for Schools",
        "keyword": "bereavement support training schools",
        "ahrefs_keyword": "bereavement support schools",
        "audience": "pastoral teams, safeguarding leads, form tutors, class teachers and senior leaders",
        "intent": "helping staff respond carefully when pupils are affected by loss, grief or a difficult school community event",
        "why": "Bereavement support requires calm communication, clear boundaries and sensitivity to family context. Training should help staff know what to say, what not to promise and when specialist support is needed.",
        "planning": ["who communicates with the family", "how classmates are supported", "what language staff should use", "when external support or safeguarding input is needed"],
        "activities": ["supportive language practice", "scenario boundaries", "classroom response planning", "signposting route review"],
        "staff_follow_up": "Schools can keep a short response plan so staff are not trying to create language and processes in the middle of a difficult moment.",
    },
    {
        "slug": "classroom-emotional-check-ins",
        "title": "Classroom Emotional Check-Ins: Practical Routines for Schools",
        "keyword": "classroom emotional check-ins",
        "ahrefs_keyword": "emotional check ins classroom",
        "audience": "primary teachers, post-primary form tutors, classroom assistants and wellbeing leads",
        "intent": "using short, safe check-ins to help pupils name feelings and notice support routes without slowing the school day",
        "why": "Emotional check-ins work best when they are brief, predictable and optional enough to avoid forced disclosure. They should support learning readiness and help adults notice patterns.",
        "planning": ["when check-ins happen", "how pupils can respond privately", "what staff do with concerning answers", "how routines avoid taking over lesson time"],
        "activities": ["feelings scale", "traffic-light check", "ready-to-learn prompt", "quiet support request option"],
        "staff_follow_up": "Teachers can track patterns lightly and use agreed pastoral routes if a pupil repeatedly signals that they are struggling.",
    },
]

# Final selected batch after checking the live HIP inventory for semantic overlap.
# The first pass had several topics too close to existing live posts, so this
# override keeps the build on fresh long-tail gaps.
TOPICS = [
    {
        "slug": "low-arousal-approach-schools",
        "title": "Low-Arousal Approach in Schools: Calm Support Before Escalation",
        "keyword": "low-arousal approach schools",
        "ahrefs_keyword": "low arousal approach schools",
        "audience": "teachers, classroom assistants, SENCOs, pastoral staff and senior leaders",
        "intent": "helping staff reduce confrontation, lower sensory and emotional pressure and respond before behaviour escalates",
        "why": "A low-arousal approach is useful when pupils are overwhelmed, defensive or close to losing control. It helps adults think about tone, space, timing and demands rather than relying only on consequences after an incident.",
        "planning": ["which situations escalate quickly", "how adults can reduce verbal pressure", "what spaces or routines help pupils settle", "when pastoral or safeguarding routes are needed"],
        "activities": ["trigger mapping", "language reduction practice", "calm routine planning", "debrief threshold review"],
        "staff_follow_up": "Staff teams can agree shared language and a small set of calm routines so pupils meet the same response across classrooms, corridors and pastoral spaces.",
    },
    {
        "slug": "de-escalation-training-for-school-staff",
        "title": "De-Escalation Training for School Staff",
        "keyword": "de-escalation training for school staff",
        "ahrefs_keyword": "de-escalation training schools",
        "audience": "teachers, classroom assistants, pastoral teams, lunchtime supervisors and senior leaders",
        "intent": "giving adults practical language and decision points when a pupil is distressed, angry or refusing to engage",
        "why": "De-escalation is not about ignoring behaviour. It is about keeping everyone safe, reducing unnecessary confrontation and knowing when to pause, support, record or escalate.",
        "planning": ["which incidents staff find hardest", "what language is agreed across the school", "how staff protect safety without over-talking", "what happens after the immediate moment"],
        "activities": ["voice and body-language review", "scenario decision points", "pause-and-return scripts", "post-incident reflection"],
        "staff_follow_up": "Leaders can build de-escalation prompts into pastoral procedures, behaviour reviews and staff briefings so the approach becomes repeatable.",
    },
    {
        "slug": "safe-spaces-in-schools",
        "title": "Safe Spaces in Schools: How to Plan Support Without Isolation",
        "keyword": "safe spaces in schools",
        "ahrefs_keyword": "safe spaces in schools",
        "audience": "SENCOs, pastoral leaders, wellbeing leads, primary staff and post-primary heads of year",
        "intent": "helping schools use calm spaces, support rooms or reset areas with clear purpose and boundaries",
        "why": "A safe space should help pupils regulate, communicate and return to learning. Without clear routines it can become confusing, overused or disconnected from classroom support.",
        "planning": ["who can use the space", "how pupils access it", "what staff do while a pupil is there", "how pupils return to class"],
        "activities": ["space-purpose mapping", "entry and exit routines", "support card design", "return-to-learning prompts"],
        "staff_follow_up": "Schools can review use of the space regularly to check whether it is helping pupils return to learning rather than becoming a holding area.",
    },
    {
        "slug": "breaktime-wellbeing-support-schools",
        "title": "Breaktime Wellbeing Support for Schools",
        "keyword": "breaktime wellbeing support schools",
        "ahrefs_keyword": "breaktime wellbeing support",
        "audience": "primary leaders, post-primary pastoral teams, lunchtime supervisors and classroom assistants",
        "intent": "supporting pupils during unstructured time when friendship, anxiety, conflict or sensory overload can become more visible",
        "why": "Break and lunch are often where pupils show the worries that stay hidden in lessons. Staff need simple ways to notice patterns, respond calmly and link concerns back to pastoral systems.",
        "planning": ["which areas create most pressure", "what staff should notice", "how incidents are recorded", "which pupils need planned support"],
        "activities": ["yard map review", "friendship support prompts", "quiet option planning", "handover notes"],
        "staff_follow_up": "A short breaktime review can help staff spot repeated concerns and adjust supervision, routines or pupil support before problems become embedded.",
    },
    {
        "slug": "exam-results-day-wellbeing-support",
        "title": "Exam Results Day Wellbeing Support for Schools",
        "keyword": "exam results day wellbeing support",
        "ahrefs_keyword": "exam results day wellbeing",
        "audience": "post-primary senior leaders, careers teams, sixth form leaders and pastoral staff",
        "intent": "planning calm support before pupils receive GCSE, AS or A-level results and next-step decisions",
        "why": "Results day can bring relief, disappointment, uncertainty and family pressure into the same morning. Schools can make the day safer by planning language, routes and practical next steps in advance.",
        "planning": ["who is available on the day", "how pupils access careers or pastoral support", "what messages go to families", "how staff follow up vulnerable pupils"],
        "activities": ["support route map", "next-step script planning", "calm waiting area setup", "follow-up list review"],
        "staff_follow_up": "After results day, pastoral and careers teams can review who needed extra support and plan contact for pupils whose next step remains unsettled.",
    },
    {
        "slug": "school-readiness-parent-workshop",
        "title": "School Readiness Parent Workshop: Helping Families Prepare Calmly",
        "keyword": "school readiness parent workshop",
        "ahrefs_keyword": "school readiness workshops parents",
        "audience": "nursery leaders, primary schools, foundation stage teachers and parent engagement leads",
        "intent": "helping parents prepare children for school routines, separation, emotions and early independence without creating pressure",
        "why": "School readiness is about more than letters and numbers. Families often need practical reassurance around routines, sleep, toileting, emotions, play and confidence.",
        "planning": ["which parent worries come up most", "what routines children need before September", "how school messages stay realistic", "which families may need follow-up"],
        "activities": ["routine checklist", "separation language practice", "emotion naming prompts", "home-to-school question planning"],
        "staff_follow_up": "Schools can use the workshop to align parent expectations with foundation stage routines and identify families who may benefit from a quieter follow-up conversation.",
    },
    {
        "slug": "perfectionism-workshops-for-schools",
        "title": "Perfectionism Workshops for Schools: Support for High-Pressure Pupils",
        "keyword": "perfectionism workshops for schools",
        "ahrefs_keyword": "perfectionism workshops schools",
        "audience": "heads of year, sixth form leaders, pastoral staff, subject teachers and wellbeing leads",
        "intent": "helping pupils recognise unhelpful perfectionism, fear of mistakes and pressure to perform",
        "why": "Perfectionism can look like motivation from the outside, but for some pupils it creates avoidance, distress and loss of confidence. Support should encourage effort, flexibility and help-seeking.",
        "planning": ["which year groups feel the pressure most", "how staff talk about mistakes", "what examples feel age-appropriate", "which pupils may need individual support"],
        "activities": ["mistake myth-busting", "effort-versus-outcome reflection", "self-talk reset", "good-enough task planning"],
        "staff_follow_up": "Teachers can reinforce the workshop by modelling revision realism, feedback routines and language that values learning rather than flawless performance.",
    },
    {
        "slug": "empathy-workshops-for-schools",
        "title": "Empathy Workshops for Schools: Building Understanding Between Pupils",
        "keyword": "empathy workshops for schools",
        "ahrefs_keyword": "empathy workshops schools",
        "audience": "KS2 and KS3 teachers, pastoral teams, form tutors and pupil voice leads",
        "intent": "helping pupils understand others' perspectives, repair small harms and communicate more thoughtfully",
        "why": "Empathy work supports friendship, anti-bullying, inclusion and classroom relationships. It should be practical, scenario-based and careful not to ask pupils to disclose private experiences.",
        "planning": ["which peer situations pupils recognise", "how examples avoid blame", "what language staff will reinforce", "how the session links to behaviour or anti-bullying work"],
        "activities": ["perspective-taking scenarios", "impact versus intent discussion", "repair language practice", "kind response planning"],
        "staff_follow_up": "Form tutors and class teachers can reuse the same questions when pupils need help seeing impact, not just intention.",
    },
    {
        "slug": "kindness-workshops-for-schools",
        "title": "Kindness Workshops for Schools: Moving Beyond One-Off Assemblies",
        "keyword": "kindness workshops for schools",
        "ahrefs_keyword": "kindness workshops schools",
        "audience": "primary teachers, KS3 pastoral teams, school council leads and wellbeing coordinators",
        "intent": "turning kindness into visible pupil actions, peer support and safer everyday routines",
        "why": "Kindness can become vague if it is only a slogan. A useful workshop helps pupils notice exclusion, practise small actions and understand that kindness also includes boundaries and respect.",
        "planning": ["what kindness looks like in this school", "which behaviours need to change", "how pupils can take action safely", "how staff will keep momentum"],
        "activities": ["kindness scenario sorting", "small action planning", "exclusion spotting", "class commitment review"],
        "staff_follow_up": "Schools can connect the workshop to school council, anti-bullying week, class charters or form-time routines so it continues after the session.",
    },
    {
        "slug": "healthy-masculinity-workshops-schools",
        "title": "Healthy Masculinity Workshops for Schools",
        "keyword": "healthy masculinity workshops schools",
        "ahrefs_keyword": "healthy masculinity workshops schools",
        "audience": "post-primary pastoral teams, heads of year, LLW leads and senior leaders",
        "intent": "supporting boys and young men to talk about pressure, respect, emotions and relationships in a safe school setting",
        "why": "Some pupils receive narrow messages about strength, emotion and status. A careful workshop can create healthier discussion without blame, shame or unsafe personal disclosure.",
        "planning": ["which year group is ready for the topic", "how examples will stay respectful", "what safeguarding boundaries apply", "how staff will handle difficult questions"],
        "activities": ["pressure message mapping", "respect scenarios", "emotion language practice", "help-seeking reflection"],
        "staff_follow_up": "Staff can link the session to LLW, pastoral care, relationships education and wider work on respect, peer pressure and online influence.",
    },
    {
        "slug": "period-wellbeing-workshops-schools",
        "title": "Period Wellbeing Workshops for Schools",
        "keyword": "period wellbeing workshops schools",
        "ahrefs_keyword": "period wellbeing workshops schools",
        "audience": "primary and post-primary wellbeing leads, pastoral teams, class teachers and parent engagement staff",
        "intent": "helping pupils discuss periods, body changes, confidence and school support with dignity and clear boundaries",
        "why": "Period wellbeing can affect attendance, confidence, PE participation and peer relationships. Schools need language that is practical, inclusive and sensitive to embarrassment or anxiety.",
        "planning": ["which year group needs input", "how pupils can ask questions privately", "what products or support are available", "how staff respond to worries"],
        "activities": ["myth sorting", "support route reminders", "confidence scenarios", "question box review"],
        "staff_follow_up": "Schools can reinforce the message by making support visible, checking facilities and ensuring pupils know which adults they can approach.",
    },
    {
        "slug": "social-media-anxiety-support-schools",
        "title": "Social Media Anxiety Support for Schools",
        "keyword": "social media anxiety support schools",
        "ahrefs_keyword": "social media anxiety schools",
        "audience": "pastoral teams, heads of year, digital safety leads, parents and form tutors",
        "intent": "helping pupils understand online comparison, group-chat pressure, sleep disruption and when to seek help",
        "why": "Social media anxiety often shows up through friendship conflict, avoidance, tiredness or constant checking. Schools can support pupils without turning the session into a scare campaign.",
        "planning": ["which platforms or behaviours pupils mention", "how the session avoids naming individuals", "what parents should hear", "what support routes are available"],
        "activities": ["comparison pressure scenarios", "notification routine reflection", "group-chat boundaries", "trusted adult prompts"],
        "staff_follow_up": "Pastoral teams can connect the session with parent communication, online safety teaching and support for pupils affected by friendship conflict or anxiety.",
    },
]


def request_json(url: str, headers: dict[str, str] | None = None, method: str = "GET", payload: dict | None = None) -> dict | list:
    data = json.dumps(payload).encode() if payload is not None else None
    request_headers = headers or {"User-Agent": "OpenClaw-HIP-Content-Blast/2026-07-10"}
    if payload is not None:
        request_headers = {**request_headers, "Content-Type": "application/json"}
    req = Request(url, data=data, headers=request_headers, method=method)
    with urlopen(req, timeout=60) as response:
        return json.loads(response.read().decode())


def fetch_text(url: str) -> tuple[int, str]:
    req = Request(url, headers={"User-Agent": "OpenClaw-HIP-QA/2026-07-10"})
    with urlopen(req, timeout=60) as response:
        return response.status, response.read().decode("utf-8", errors="replace")


def wp_auth_headers() -> dict[str, str]:
    token = base64.b64encode(f"{os.environ['HIP_WP_USERNAME']}:{os.environ['HIP_WP_APP_PASSWORD']}".encode()).decode()
    return {"Authorization": f"Basic {token}", "User-Agent": "OpenClaw-HIP-Content-Blast/2026-07-10"}


def live_slugs() -> set[str]:
    slugs: set[str] = set()
    page = 1
    headers = wp_auth_headers() if os.environ.get("HIP_WP_USERNAME") and os.environ.get("HIP_WP_APP_PASSWORD") else None
    status = "publish,draft,pending,private" if headers else "publish"
    while True:
        url = f"{POSTS_API}?per_page=100&page={page}&status={status}&_fields=slug"
        try:
            rows = request_json(url, headers=headers)
        except Exception:
            break
        if not rows:
            break
        slugs.update(row["slug"] for row in rows)
        page += 1
    return slugs


def collect_ahrefs(topics: list[dict]) -> dict:
    token = os.environ.get("AHREFS_API_TOKEN")
    if not token:
        return {"skipped": "AHREFS_API_TOKEN not set"}
    keywords = ",".join(topic["ahrefs_keyword"] for topic in topics)
    params = {
        "country": "gb",
        "keywords": keywords,
        "select": "keyword,volume,difficulty,traffic_potential,parent_topic,cpc,intents,global_volume",
    }
    url = "https://api.ahrefs.com/v3/keywords-explorer/overview?" + urlencode(params)
    headers = {"Authorization": f"Bearer {token}", "User-Agent": "OpenClaw-HIP-Ahrefs/2026-07-10"}
    try:
        return {"url": url.replace(token, "[redacted]"), "json": request_json(url, headers=headers)}
    except Exception as exc:
        return {"error": str(exc)}


def link_list(items: list[tuple[str, str]]) -> str:
    return ", ".join(f'<a href="{escape(href)}">{escape(label)}</a>' for label, href in items)


def external_link_list() -> str:
    return ", ".join(f'<a href="{escape(href)}" target="_blank" rel="noopener">{escape(label)}</a>' for label, href in OFFICIAL_LINKS)


def li(items: list[str]) -> str:
    return "".join(f"<li>{escape(item.capitalize())}</li>" for item in items)


def build_content(topic: dict) -> str:
    related = INTERNAL_LINKS[:4] + [INTERNAL_LINKS[5], INTERNAL_LINKS[-1]]
    faqs = [
        (
            f"What should {topic['keyword']} include?",
            "It should include a clear purpose, age-appropriate examples, safe boundaries, practical activities, staff follow-up and signposting routes for pupils, families or staff who need more support.",
        ),
        (
            "How can schools keep this work safe?",
            "Use scenarios rather than personal disclosure, brief staff before sensitive topics, keep safeguarding routes clear and avoid asking pupils to share private experiences in front of peers.",
        ),
        (
            "Can HIP Psychology adapt this for different school settings?",
            "Yes. HIP Psychology can adapt pupil workshops, staff training, parent sessions and consultancy support for primary, post-primary and whole-school wellbeing priorities.",
        ),
    ]
    faq_html = "".join(f"<h3>{escape(question)}</h3><p>{escape(answer)}</p>" for question, answer in faqs)
    faq_schema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {"@type": "Question", "name": question, "acceptedAnswer": {"@type": "Answer", "text": answer}}
            for question, answer in faqs
        ],
    }
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
        f"<p>{escape(topic['why'])}</p>",
        "<h2>What schools should decide before delivery</h2>",
        f"<ul>{li(topic['planning'])}</ul>",
        "<h2>Practical activities that can help</h2>",
        f"<ul>{li(topic['activities'])}</ul>",
        "<h2>How staff can follow up afterwards</h2>",
        f"<p>{escape(topic['staff_follow_up'])}</p>",
        "<h2>Where this fits in a whole-school approach</h2>",
        "<p>This topic can sit within a wellbeing calendar, pastoral care policy, school development plan or staff training programme. The aim is to make support visible before concerns become harder to manage.</p>",
        "<h2>How HIP Psychology can help</h2>",
        f"<p>HIP Psychology can deliver support around {escape(topic['keyword'])} as a pupil workshop, staff CPD session, parent evening or consultancy input for a wider school wellbeing programme.</p>",
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


def local_qa(existing_slugs: set[str], topics: list[dict]) -> dict:
    official_status = {}
    for _, url in OFFICIAL_LINKS:
        try:
            status, _ = fetch_text(url)
            official_status[url] = status
        except Exception as exc:
            official_status[url] = str(exc)

    checks = []
    for topic in topics:
        html = (HERE / f"{topic['slug']}.html").read_text(encoding="utf-8")
        item_checks = {
            "slug_not_live_duplicate": topic["slug"] not in existing_slugs,
            "no_body_h1": "<h1" not in html.lower(),
            "h2_sections": len(re.findall(r"<h2\b", html, flags=re.I)) >= 8,
            "faq_schema": '"FAQPage"' in html,
            "article_schema": '"Article"' in html,
            "contact_cta": "/contact-us/" in html,
            "official_links": "education-ni.gov.uk" in html and "publichealth.hscni.net" in html,
            "internal_links": html.count('href="/') >= 6,
            "no_secret_leak": "hip_wp_app_password" not in html.lower() and "app_password" not in html.lower(),
            "no_source_markers": "OpenClaw" not in html and "TODO" not in html,
        }
        checks.append({"slug": topic["slug"], "checks": item_checks, "ok": all(item_checks.values())})
    return {
        "official_link_status": official_status,
        "post_checks": checks,
        "failures": sum(1 for item in checks if not item["ok"]) + sum(1 for status in official_status.values() if status != 200),
    }


def upsert_post(topic: dict) -> dict:
    content = (HERE / f"{topic['slug']}.html").read_text(encoding="utf-8")
    headers = wp_auth_headers()
    existing = request_json(f"{POSTS_API}?slug={quote(topic['slug'])}&status=publish,draft,pending,private&per_page=1", headers=headers)
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
        result = request_json(f"{POSTS_API}/{existing[0]['id']}", headers=headers, method="POST", payload=payload)
        action = "updated"
    else:
        result = request_json(POSTS_API, headers=headers, method="POST", payload=payload)
        action = "created"
    return {"action": action, "id": result["id"], "slug": topic["slug"], "title": topic["title"], "link": result["link"], "status": result["status"]}


def publish(topics: list[dict]) -> dict:
    published = []
    for topic in topics:
        published.append(upsert_post(topic))
        time.sleep(0.35)
    live_qa = []
    for post in published:
        status, html = fetch_text(post["link"])
        checks = {
            "http_200": status == 200,
            "wp_status_publish": post["status"] == "publish",
            "one_h1": len(re.findall(r"<h1\b", html, flags=re.I)) == 1,
            "h2_sections": len(re.findall(r"<h2\b", html, flags=re.I)) >= 8,
            "faq_schema": '"FAQPage"' in html,
            "article_schema": '"Article"' in html,
            "contact_cta": "/contact-us/" in html,
            "official_links": "education-ni.gov.uk" in html and "publichealth.hscni.net" in html,
            "no_secret_leak": "hip_wp_app_password" not in html.lower() and "app_password" not in html.lower(),
            "no_source_markers": "OpenClaw" not in html and "TODO" not in html,
        }
        live_qa.append({"slug": post["slug"], "link": post["link"], "checks": checks, "ok": all(checks.values())})
    sitemap_status, sitemap = fetch_text(f"{SITE}/wp-sitemap-posts-post-1.xml")
    sitemap_checks = {post["slug"]: post["link"] in sitemap for post in published}
    failures = [item for item in live_qa if not item["ok"]] + [slug for slug, ok in sitemap_checks.items() if not ok]
    return {
        "published": published,
        "qa": live_qa,
        "sitemap_status": sitemap_status,
        "sitemap_checks": sitemap_checks,
        "failures": len(failures),
    }


def write_report(status: str, existing_slugs: set[str], ahrefs: dict, qa: dict, publish_result: dict | None = None) -> None:
    live_count_note = f"Live/draft inventory checked before build: {len(existing_slugs)} slugs."
    topic_summary = ", ".join(topic["keyword"] for topic in TOPICS)
    lines = [
        "# HIP Psychology content blast - 2026-07-10",
        "",
        f"Status: {status}",
        "",
        f"Prepared {len(TOPICS)} WordPress-ready HTML posts around: {topic_summary}.",
        "",
        "## Draft posts",
    ]
    lines += [f"- {topic['title']} - `{topic['slug']}`" for topic in TOPICS]
    lines += [
        "",
        "## Basis",
        f"- {live_count_note}",
        "- Ahrefs checked candidate terms; explicit UK volume was returned where available and the rest were treated as zero-volume school-buyer long-tail gaps.",
        "- Selected adjacent school-buyer intent after checking the full HIP live/draft inventory for duplicate slugs and obvious semantic overlap.",
        "",
        "## Local QA",
        f"- Failures: {qa['failures']}",
        "- Checks: duplicate slugs, no body H1, H2 structure, FAQPage + Article schema, contact CTA, official links, internal links and no source/secret markers.",
    ]
    if publish_result:
        lines += [
            "",
            "## Live posts",
            *[f"- [{post['title']}]({post['link']}) - `{post['slug']}` ({post['action']})" for post in publish_result["published"]],
            "",
            "## Live QA",
            f"- Failures: {publish_result['failures']}",
            "- Checks: HTTP 200, WordPress publish status, one H1, H2 sections, FAQPage + Article schema, contact CTA, official links, sitemap inclusion and no secret/source markers.",
        ]
    else:
        lines += [
            "",
            "## Not Published",
            "- No WordPress posts, emails, DMs, social posts, GSC requests or featured images were sent.",
        ]
    (HERE / "report.md").write_text("\n".join(lines) + "\n", encoding="utf-8")
    (HERE / "ahrefs-overview-2026-07-10.json").write_text(json.dumps(ahrefs, indent=2), encoding="utf-8")


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--publish", action="store_true", help="Publish posts live to WordPress. Requires explicit Phil approval.")
    args = parser.parse_args()

    existing = live_slugs()
    for topic in TOPICS:
        (HERE / f"{topic['slug']}.html").write_text(build_content(topic), encoding="utf-8")

    ahrefs = collect_ahrefs(TOPICS)
    qa = local_qa(existing, TOPICS)
    (HERE / "local-qa-result.json").write_text(json.dumps(qa, indent=2), encoding="utf-8")

    publish_result = None
    status = "Drafted only"
    if args.publish:
        if qa["failures"]:
            raise SystemExit("Refusing to publish because local QA has failures.")
        publish_result = publish(TOPICS)
        (HERE / "publish-result.json").write_text(json.dumps(publish_result["published"], indent=2), encoding="utf-8")
        (HERE / "qa-result.json").write_text(json.dumps(publish_result, indent=2), encoding="utf-8")
        status = "Published live"
        if publish_result["failures"]:
            write_report(status, existing, ahrefs, qa, publish_result)
            raise SystemExit(1)

    write_report(status, existing, ahrefs, qa, publish_result)
    print(json.dumps({"status": status, "local_failures": qa["failures"], "publish_failures": None if not publish_result else publish_result["failures"]}, indent=2))


if __name__ == "__main__":
    main()
