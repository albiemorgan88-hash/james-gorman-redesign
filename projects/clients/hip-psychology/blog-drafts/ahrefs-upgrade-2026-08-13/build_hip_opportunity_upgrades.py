from __future__ import annotations

import html
import json
from pathlib import Path

HERE = Path(__file__).resolve().parent
SITE = "https://hippsychology.com"
TODAY = "2026-08-13"

OFFICIAL = [
    ("Department of Education emotional health and wellbeing guidance", "https://www.education-ni.gov.uk/articles/emotional-health-and-wellbeing"),
    ("Department of Education safeguarding and child protection guidance", "https://www.education-ni.gov.uk/publications/safeguarding-and-child-protection-schools-guide-schools"),
    ("Public Health Agency Take 5 wellbeing resources", "https://www.publichealth.hscni.net/publications/take-5-steps-wellbeing-english-and-11-translations"),
]

PAGES = [
    {
        "id": 1689,
        "slug": "educational-psychologist-northern-ireland",
        "title": "Educational Psychologist Northern Ireland: What Schools Should Look For",
        "published": "2026-04-13",
        "keyword": "educational psychologist northern ireland",
        "evidence": "28 Search Console impressions at position 9.0; Ahrefs UK volume 60, KD 1 and traffic potential 250.",
        "intro": [
            "Schools looking for an educational psychologist in Northern Ireland are usually trying to understand a barrier to learning, participation or wellbeing and decide what support should happen next. The useful question is not simply whether a pupil can receive an assessment, but what the school needs to understand and change.",
            "Educational psychology can contribute consultation, observation, assessment, formulation, planning and staff development. The exact route, scope and availability depend on the service involved, so schools should clarify purpose, consent, information handling and expected outputs before work begins.",
        ],
        "sections": [
            ("What educational psychology can contribute", ["Educational psychologists consider how learning, development, relationships, communication, environment and emotional wellbeing interact. Their contribution may involve consultation with staff and families, pupil work, observation, assessment or support planning.", "The work should lead to practical understanding. A report is most useful when it helps adults decide what to adapt, which strengths to build on and how progress will be reviewed."]),
            ("Start with a focused school question", ["A referral such as 'assess this pupil' is broad. A more useful question might ask why a pupil is finding written tasks difficult, what is affecting attendance, which classroom conditions support regulation or how staff can understand a repeated pattern.", "The question should be shaped with the pupil, family and relevant staff where appropriate. It may change as new information emerges."]),
            ("Gather useful information before involvement", ["Bring together the pupil's view, family perspective, attendance, learning information, previous strategies, relevant assessments and examples of what works. Avoid sending an unfiltered bundle of records without a clear purpose.", "Schools should use approved systems and share only information that is relevant and lawful. Individual pupil details should never be placed in an ordinary website enquiry form."]),
            ("Consultation, observation and assessment", ["Consultation helps adults compare perspectives and generate hypotheses. Observation can show how tasks, relationships, communication or sensory demands affect participation. Assessment may add structured information where it is necessary to answer the agreed question.", "No single score should define a pupil. Findings need context and should be interpreted alongside strengths, history, environment and the pupil's own experience."]),
            ("Turn recommendations into school practice", ["Recommendations should be specific, feasible and owned. 'Support confidence' is vague; a predictable check-in, adapted instruction, staged task or planned transition has clearer implementation.", "Agree who will act, what staff need to know, how the pupil will be involved and when the school will review whether the change is helping."]),
            ("Safeguarding, consent and professional boundaries", ["Educational psychology work sits alongside, not instead of, safeguarding and statutory responsibilities. Immediate risk must follow the school child-protection route rather than waiting for consultation or assessment.", "Clarify consent, confidentiality limits, report access and the service's professional registration or governance arrangements before work starts."]),
            ("Questions schools can ask a provider", ["Ask what information is needed, which professional will complete the work, how pupil and family views are included, what the output will contain, how recommendations are followed up and what sits outside the brief.", "A credible provider should explain scope and limitations clearly and should not promise a diagnosis, placement, funding decision or guaranteed outcome that is outside its authority."]),
        ],
        "related": [("school psychology support", "/school-psychology-support-for-schools/"), ("educational psychology support for NI schools", "/educational-psychology-support-schools-ni/"), ("SENCO support and pupil wellbeing", "/senco-support-and-pupil-wellbeing/"), ("whole-school wellbeing consultancy", "/consultancy/")],
        "faqs": [("What does an educational psychologist do in a school?", "They may use consultation, observation, assessment and collaborative planning to understand barriers and support practical change."), ("Does every involvement require formal assessment?", "No. Consultation and observation may answer the agreed question without a large assessment battery."), ("Can educational psychology replace safeguarding action?", "No. Immediate or significant safeguarding concerns must follow the school's current child-protection procedures."), ("What should schools clarify before commissioning work?", "Clarify the question, scope, professional credentials, consent, data handling, output, timescale and follow-up.")],
    },
    {
        "id": 1989,
        "slug": "resilience-activities-for-students",
        "title": "Resilience Activities for Students: What Works in Schools",
        "published": "2026-06-17",
        "keyword": "resilience workshops for schools",
        "evidence": "55 page impressions, including position 6.9 for resilience workshops; Ahrefs UK volume 90 for workshops and 50 for activities.",
        "intro": [
            "Resilience activities for students should help pupils respond flexibly to setbacks, ask for support and take a realistic next step. Resilience is not pretending that difficulty does not matter, and it should never be used to place responsibility for unsafe or unreasonable conditions on a young person.",
            "The strongest school activities use ordinary situations, allow private reflection and connect personal strategies with trusted adults, classroom adjustments and wider support where needed.",
        ],
        "sections": [
            ("Define resilience carefully", ["Resilience includes adapting, recovering, problem-solving and seeking help. It changes across situations: a pupil may manage friendship difficulty confidently but feel overwhelmed by assessment or transition.", "Avoid dividing pupils into resilient and not resilient. Skills, relationships, safety, opportunity and adult support all affect how someone responds."]),
            ("Activity 1: controllable, influenceable and outside my control", ["Give pupils a fictional challenge and sort its parts into what they can control, influence or cannot change today. Ask them to choose one action and one support route.", "The activity prevents empty messages about controlling everything. It also helps pupils recognise when an adult or system needs to act."]),
            ("Activity 2: a setback-to-next-step map", ["Use a familiar scenario such as a disappointing mark, team selection, friendship change or difficult presentation. Pupils identify the first feeling, unhelpful impulse, available support and smallest constructive next step.", "Keep examples age-appropriate and fictional. Pupils should not be required to disclose personal adversity to demonstrate learning."]),
            ("Activity 3: evidence-based strengths", ["Ask pupils to identify a strength and the evidence for it: a time they practised, contributed, persisted, asked for help or repaired a mistake. Evidence makes the exercise more credible than unsupported praise.", "Include relational strengths such as listening, encouraging and noticing others, not only performance or leadership."]),
            ("Activity 4: build a support ladder", ["Pupils map what they can try independently, who can help with learning, who can help with wellbeing and what to do when the first step is not enough. Explain confidentiality boundaries accurately.", "A support ladder reinforces that resilience includes using help. It should match real school routes rather than inventing contacts pupils cannot access."]),
            ("Adapt activities for age and need", ["Primary pupils often benefit from stories, visuals and concrete choices. Post-primary pupils need credible examples involving exams, identity, online comparison, relationships and future uncertainty.", "Offer alternatives to speaking publicly and adapt literacy, sensory and communication demands. Participation should not depend on speed or confidence in group discussion."]),
            ("Review learning without making inflated claims", ["Check whether pupils can name a realistic strategy, identify support and apply the idea to a new fictional scenario. Staff can reinforce the language in lessons and pastoral conversations.", "A workshop can build understanding and confidence, but it cannot prove a long-term change in resilience by itself. Review should stay proportionate."]),
        ],
        "related": [("resilience workshops for schools", "/resilience-workshops-for-schools/"), ("pupil resilience workshops Northern Ireland", "/pupil-resilience-workshops-northern-ireland/"), ("self-esteem workshops", "/self-esteem-workshops-for-schools/"), ("pupil help-seeking workshops", "/pupil-help-seeking-workshops/")],
        "faqs": [("What are good resilience activities for students?", "Use realistic scenario mapping, controllable-versus-uncontrollable sorting, evidence-based strengths and support-route practice."), ("Does resilience mean coping alone?", "No. Asking for help, using relationships and changing the environment are important parts of resilience."), ("Should pupils discuss personal adversity in a workshop?", "No. Use fictional situations and allow private reflection so participation does not require disclosure."), ("How can schools review a resilience workshop?", "Check strategy recall, help-seeking knowledge and application to scenarios, then reinforce useful language over time.")],
    },
    {
        "id": 1899,
        "slug": "mental-health-lead-in-schools",
        "title": "Mental Health Lead in Schools: What the Role Needs Around It to Work",
        "published": "2026-06-03",
        "keyword": "mental health lead in schools",
        "evidence": "36 page impressions, with the main term at position 19.2; Ahrefs UK volume 40, KD 3 and traffic potential 300.",
        "intro": [
            "A mental health lead in schools can help connect leadership, curriculum, pastoral care, safeguarding, attendance, SEN and staff development. The role works when its authority, time, boundaries and relationships are clear; it cannot succeed as the only person responsible for wellbeing.",
            "The title and formal expectations vary by setting. Schools should align the role with current regional guidance and their own structures rather than copying a job description that assumes a different system.",
        ],
        "sections": [
            ("Clarify purpose and boundaries", ["Define which whole-school priorities the lead coordinates and which responsibilities remain with safeguarding, SEN, attendance, senior leadership or specialist services. Publish a simple map for staff.", "The lead may improve systems and staff confidence, but should not be positioned as therapist, diagnostician or sole recipient of every concern unless appropriately qualified and commissioned."]),
            ("Map current provision before adding initiatives", ["List curriculum, workshops, pastoral support, referral routes, family communication, staff training and external partners. Identify duplication, gaps and handovers that depend on informal knowledge.", "A useful first plan often simplifies existing work. More activities do not automatically create a clearer system."]),
            ("Build a visible help-seeking route", ["Pupils and staff should know who receives concerns, what happens next and when safeguarding procedures apply. Offer accessible routes that do not depend on one adult always being available.", "Test the route through pupil voice and staff scenarios. If people cannot explain it, repeat and simplify the process."]),
            ("Coordinate training and implementation", ["Use staff-confidence information and real school pressure points to choose training. Connect sessions to policy, induction, role-specific practice and follow-up rather than treating attendance as implementation.", "The lead can help teams agree shared language, rehearse first responses and review whether actions are happening across classrooms and unstructured times."]),
            ("Use data with context", ["Relevant information may include attendance, referrals, pupil voice, staff confidence, repeat incidents and completion of reviews. No single number represents school mental health.", "An increase in disclosures can indicate increased need, improved trust or both. Interpretation should combine data with professional judgement and qualitative feedback."]),
            ("Protect time, supervision and support", ["Coordination requires time to review provision, communicate, support colleagues and report to leadership. Without protected capacity, the role can become reactive and overloaded.", "The lead also needs access to advice and appropriate reflective support, especially when hearing difficult information or coordinating complex situations."]),
            ("Plan a manageable first year", ["Choose a small number of priorities with owners, resources and review dates. Examples include clarifying the support map, improving staff first-response confidence or strengthening pupil knowledge of help routes.", "Report what changed, what remains difficult and what evidence informs the next decision. Honest review is more useful than presenting every activity as a success."]),
        ],
        "related": [("mental health lead training", "/mental-health-lead-training-schools/"), ("school mental health policy", "/school-mental-health-policy-guide/"), ("whole-school wellbeing audit", "/whole-school-wellbeing-audit/"), ("pupil wellbeing strategy", "/pupil-wellbeing-strategy-schools/")],
        "faqs": [("What does a mental health lead do in a school?", "The lead coordinates a whole-school approach, improves routes and staff confidence, supports planning and helps leadership review provision."), ("Does the role replace the safeguarding lead?", "No. Responsibilities should connect clearly, but safeguarding duties and escalation routes remain distinct."), ("Does the role need protected time?", "Yes. Coordination, communication, review and staff support require realistic capacity."), ("What should a new lead do first?", "Map current provision and routes, identify a small number of priorities and agree owners and review dates.")],
    },
    {
        "id": 1716,
        "slug": "bystander-behaviour",
        "title": "Bystander Behaviour and Bullying: Helping Pupils Become Upstanders",
        "published": "2026-04-27",
        "keyword": "upstander vs bystander",
        "evidence": "135 page impressions; Ahrefs UK volume 30 for upstander versus bystander and 20 for bystander bullying.",
        "intro": [
            "Bystander behaviour can influence whether bullying gains an audience, spreads online or becomes easier to report. Schools can help pupils move towards safe upstander choices without suggesting that children must confront someone or solve a risky situation alone.",
            "An upstander notices harm and takes a safe action that may reduce it. That action can be quiet: not joining in, checking on someone privately, saving relevant information appropriately or telling a trusted adult.",
        ],
        "sections": [
            ("Bystander and upstander: the practical difference", ["A bystander is present, aware or part of the audience around an incident. An upstander takes a safe, constructive step. Pupils may move between these positions depending on fear, status, friendship and confidence.", "Avoid turning the terms into fixed labels. The educational goal is to widen the range of safe choices available in a difficult moment."]),
            ("Why pupils may stay silent", ["Pupils may fear becoming a target, losing friends, being called a tell-tale, misunderstanding the situation or making it worse. Online, they may react or forward before recognising their role in extending harm.", "Acknowledging these pressures makes teaching more credible. Simply telling pupils to be brave can increase guilt without increasing safety."]),
            ("Teach a menu of safe actions", ["Options include refusing to laugh or forward, moving away, checking on the pupil privately, inviting them into another activity, keeping relevant evidence private and reporting through the school route.", "Direct confrontation is not required. Adults should explain when a situation must be handed over immediately because of threats, coercion, physical danger or safeguarding risk."]),
            ("Use fictional scenarios for practice", ["Present a playground, corridor, classroom or group-chat scenario and pause at several turning points. Ask what each person could do, which action is safest and what adult support is needed.", "Do not turn a live incident into a public lesson. Pupils involved need privacy, fair process and appropriate individual support."]),
            ("Respond well when a pupil reports", ["Thank the pupil, listen, check immediate safety and explain the next step. Avoid promising secrecy or demanding that the pupil confront those involved.", "A poor first response can teach an entire peer group that reporting is unsafe. Staff consistency is part of effective bystander education."]),
            ("Connect upstander work with online behaviour", ["Reactions, screenshots and forwarding can increase the audience even when a pupil did not create the original content. Teach pupils to avoid redistribution, keep relevant material private and seek adult help.", "Schools should align this teaching with current online-safety, safeguarding and anti-bullying procedures."]),
            ("Review whether pupils know what to do", ["Use anonymous scenario questions to check whether pupils can identify several safe responses and the school reporting route. Look for differences by location, year group or online context.", "Reinforce the same options through assemblies, workshops and classroom discussion. Repetition makes a safe response easier to access under pressure."]),
        ],
        "related": [("bystander intervention and bullying", "/bystander-intervention-bullying-schools/"), ("anti-bullying workshops", "/anti-bullying-workshops-schools/"), ("cyberbullying in schools", "/cyberbullying-in-schools/"), ("pupil help-seeking workshops", "/pupil-help-seeking-workshops/")],
        "faqs": [("What is the difference between a bystander and an upstander?", "A bystander is present or aware; an upstander takes a safe action that may reduce harm or connect someone with help."), ("Does an upstander have to confront someone?", "No. Safe actions include not joining in, checking privately, keeping evidence appropriately and telling an adult."), ("Why do pupils stay silent about bullying?", "They may fear social consequences, becoming a target, misunderstanding the situation or making it worse."), ("How can schools teach upstander behaviour?", "Use fictional scenarios, teach several safe options and make the adult reporting response predictable.")],
    },
    {
        "id": 2184,
        "slug": "low-arousal-approach-schools",
        "title": "Low-Arousal Approach in Schools: Calm Support Before Escalation",
        "published": "2026-07-10",
        "keyword": "low arousal approach",
        "evidence": "38 page impressions with relevant visibility; Ahrefs UK volume 20.",
        "intro": [
            "A low-arousal approach in schools aims to reduce avoidable stress and help adults respond calmly when a pupil is overwhelmed or escalating. It uses predictable environments, reduced verbal pressure, respectful space and proportionate demands while keeping safety and boundaries clear.",
            "Low arousal does not mean low expectations, ignoring harmful behaviour or removing every challenge. It means choosing the timing and communication most likely to support regulation and a safe next step.",
        ],
        "sections": [
            ("Understand arousal before behaviour", ["A pupil under high stress may have reduced access to language, flexibility, memory and problem-solving. Louder correction, repeated questions or an audience can add pressure even when the adult intends to help.", "Staff should notice changes in movement, voice, processing, posture and interaction while avoiding assumptions about a single cause."]),
            ("Reduce unnecessary verbal load", ["Use short concrete language, one adult leading communication and enough processing time. Avoid explaining every consequence, asking several questions or repeating the same demand rapidly during escalation.", "Fewer words should still be respectful and clear. Staff can return to fuller explanation later when the pupil can engage."]),
            ("Use space and positioning safely", ["Where policy and safety allow, reduce the audience, avoid crowding and offer access to an agreed quieter space. Positioning should not communicate threat or block movement unnecessarily.", "Individual risk and support plans remain important. Staff must follow current procedures when there is immediate danger."]),
            ("Offer realistic choices", ["Two achievable options can restore some control: begin with one question or take the agreed pause; sit here or move to the support space. Choices must be genuine and within the adult's authority.", "Too many options can increase cognitive load. A choice is not helpful if both routes are impossible for the pupil in that moment."]),
            ("Keep boundaries without public debate", ["Adults can acknowledge distress while stating a limit: I can see this is difficult, and we need to keep everyone safe. The boundary remains, but argument and shame are reduced.", "Consequences, repair and learning can be addressed later. Immediate regulation is not the same as avoiding accountability."]),
            ("Review the environment after incidents", ["Consider triggers, transitions, task design, sensory load, peer context, adult language and unmet needs. Ask what helped recovery and what should change in the plan.", "Do not place the entire solution on the pupil. Environment and adult practice are legitimate parts of prevention."]),
            ("Train for consistent implementation", ["Use realistic school scenarios and include the adults present across classrooms, corridors, break, transport and support spaces. Rehearse language, handover, calling for assistance and post-incident review.", "Leaders should connect the approach with behaviour, SEN and safeguarding policy, then revisit agreed practices through induction and team discussion."]),
        ],
        "related": [("de-escalation training", "/de-escalation-training-for-school-staff/"), ("behaviour as communication", "/behaviour-as-communication-in-schools/"), ("positive behaviour support", "/positive-behaviour-support-schools/"), ("staff debriefing after incidents", "/staff-debriefing-after-school-incidents/")],
        "faqs": [("What is a low-arousal approach in schools?", "It is an approach that reduces avoidable stress through calm communication, space, processing time, realistic choices and environmental adjustment."), ("Does low arousal mean low expectations?", "No. Safety and boundaries remain; adults choose timing and communication that support regulation."), ("Is it only used during a crisis?", "No. Predictable routines and reduced avoidable pressure are preventive as well as responsive."), ("How should schools implement it?", "Connect training with policy, individual plans, realistic scenarios, induction and review of adult and environmental factors.")],
    },
]


def link(label: str, url: str) -> str:
    extra = ' target="_blank" rel="noopener"' if url.startswith("http") else ""
    return f'<a href="{html.escape(url, quote=True)}"{extra}>{html.escape(label)}</a>'


def render(page: dict) -> str:
    out = [f"<p>{html.escape(p)}</p>" for p in page["intro"]]
    for heading, paragraphs in page["sections"]:
        out.append(f"<h2>{html.escape(heading)}</h2>")
        out.extend(f"<p>{html.escape(p)}</p>" for p in paragraphs)
    out.extend([
        "<h2>Planning questions for school leaders</h2>",
        "<p>Before commissioning support, identify the practical problem, intended audience and action that should become clearer. Agree how the work connects with existing policy, who owns follow-up and what information can be handled safely.</p>",
        "<p>Schools should also clarify accessibility, staff preparation, safeguarding boundaries and how learning will be reinforced. A focused brief produces more useful work than asking one session to solve several unrelated priorities.</p>",
        "<h2>An implementation checklist for schools</h2>",
        "<p>Start by naming one observable practice that should improve, rather than using a broad ambition such as better wellbeing or behaviour. Identify the staff who need to understand it, the situations in which it matters and the existing school procedure it should strengthen. Decide what adults will say or do differently, what pupils need to know and how families will be informed where relevant.</p>",
        "<p>Before launch, check that the plan is accessible, realistic within the school day and clear about safeguarding boundaries. Give one person responsibility for coordinating the work without making that person solely responsible for every action. Set a short review date, record any agreed adjustments and make the approach part of induction or team discussion so that it does not depend on informal memory.</p>",
        "<h2>Review whether learning transfers into practice</h2>",
        "<p>Immediate feedback can show whether the content felt relevant and understandable, but it cannot demonstrate lasting change on its own. Use a small number of proportionate checks: whether pupils or staff can explain the key idea, whether they can apply it to a new fictional scenario and whether the agreed support or reporting route is understood.</p>",
        "<p>Review again after staff have had an opportunity to use the approach. Look at examples from different parts of the school day, listen for barriers and adjust language, environment or responsibilities where needed. Avoid treating one data point as proof. A useful review combines experience, pupil or staff voice and relevant school information, while protecting privacy and avoiding unnecessary collection of sensitive details.</p>",
        "<h2>How HIP Psychology can help</h2>",
        "<p>HIP Psychology works with schools across Northern Ireland and Ireland through pupil workshops, staff training, parent sessions and whole-school consultancy. Planning begins with age, context, intended outcome and the situations the audience needs to handle more confidently.</p>",
        "<p>Support is psychology-led and designed to leave schools with usable language and next steps. It does not replace safeguarding procedures, statutory duties, clinical assessment or specialist intervention.</p>",
        "<h2>Useful official guidance</h2>",
        "<p>Use this general guidance alongside school policy and current professional advice: " + ", ".join(link(label, url) for label, url in OFFICIAL) + ".</p>",
        "<h2>Related HIP Psychology resources</h2>",
        "<p>Continue with " + ", ".join(link(label, url) for label, url in page["related"]) + ".</p>",
        '<p><strong>Planning support for your school?</strong> ' + link("Contact HIP Psychology", "/contact-us/") + " to discuss a practical brief.</p>",
        "<h2>Frequently asked questions</h2>",
    ])
    for question, answer in page["faqs"]:
        out.append(f"<h3>{html.escape(question)}</h3><p>{html.escape(answer)}</p>")
    faq = {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": q, "acceptedAnswer": {"@type": "Answer", "text": a}} for q, a in page["faqs"]]}
    article = {"@context": "https://schema.org", "@type": "Article", "headline": page["title"], "author": {"@type": "Organization", "name": "HIP Psychology"}, "publisher": {"@type": "Organization", "name": "HIP Psychology"}, "datePublished": page["published"], "dateModified": TODAY, "mainEntityOfPage": f"{SITE}/{page['slug']}/"}
    out.append(f'<script type="application/ld+json">{json.dumps(faq, ensure_ascii=False)}</script>')
    out.append(f'<script type="application/ld+json">{json.dumps(article, ensure_ascii=False)}</script>')
    return "".join(out) + "\n"


for page in PAGES:
    (HERE / f"{page['slug']}.html").write_text(render(page), encoding="utf-8")

manifest = {
    "date": TODAY,
    "site": "hippsychology.com",
    "status": "approved-for-live-update",
    "strategy": "Strengthen five existing Search Console and Ahrefs opportunity pages; create no duplicate URLs.",
    "pages": [{key: page[key] for key in ("id", "slug", "title", "published", "keyword", "evidence")} for page in PAGES],
}
(HERE / "manifest.json").write_text(json.dumps(manifest, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
