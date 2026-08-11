from __future__ import annotations

import html
import json
from pathlib import Path


HERE = Path(__file__).resolve().parent
SITE = "https://hippsychology.com"
TODAY = "2026-08-11"

OFFICIAL = [
    ("Department of Education emotional health and wellbeing guidance", "https://www.education-ni.gov.uk/articles/emotional-health-and-wellbeing"),
    ("Department of Education safeguarding and child protection guidance", "https://www.education-ni.gov.uk/publications/safeguarding-and-child-protection-schools-guide-schools"),
    ("Public Health Agency Take 5 wellbeing resources", "https://www.publichealth.hscni.net/publications/take-5-steps-wellbeing-english-and-11-translations"),
]

PAGES = [
    {
        "id": 1922,
        "slug": "emotional-wellbeing-for-pupils",
        "title": "Emotional Wellbeing for Pupils: Turning Concern Into Practical Support",
        "published": "2026-06-06",
        "keyword": "emotional wellbeing for pupils",
        "evidence": "95 Search Console impressions at an average position of 12.9; Ahrefs UK volume 80.",
        "intro": [
            "Emotional wellbeing for pupils is supported through ordinary school experiences: feeling safe, belonging to a group, understanding emotions, asking for help and recovering from manageable difficulty. Schools do not need to turn every feeling into a programme, but they do need clear routines when a pupil is struggling.",
            "Useful support begins with what staff can observe and what the pupil says. It avoids diagnosis, keeps safeguarding routes visible and connects classroom practice with pastoral, SEN, attendance and family support where appropriate.",
        ],
        "sections": [
            ("What emotional wellbeing means for pupils", ["Emotional wellbeing is not constant happiness. Pupils can feel worried, disappointed, angry or sad and still be supported to participate, communicate and recover. The school role is to create safe conditions, teach usable skills and notice when ordinary support is not enough.", "A practical definition helps staff avoid vague promises. Look at whether pupils can identify trusted adults, take part in learning, manage transitions, maintain relationships and use age-appropriate ways to communicate a need."]),
            ("Notice patterns without trying to diagnose", ["Changes in attendance, concentration, friendships, confidence, behaviour, sleepiness or physical complaints may prompt a check-in, but no single sign explains what is happening. Staff should describe the change, ask calm questions and use the school's agreed route.", "Context matters. A pupil may be responding to learning difficulty, bullying, family change, sensory load, bereavement, anxiety or something the school does not yet understand. Curiosity is safer than assumptions."]),
            ("Build wellbeing into classroom routines", ["Predictable starts, clear transitions, realistic instructions and respectful correction reduce avoidable stress. Short emotional check-ins can help when staff know how responses will be used and have time to follow up anything concerning.", "Classroom strategies should be accessible without marking pupils out. Visual routines, processing time, movement, choice and help-seeking prompts can benefit many pupils while individual plans remain available where needed."]),
            ("Teach skills pupils can actually use", ["Useful teaching includes naming emotions, recognising body signals, asking for clarification, breaking a problem into steps, choosing a trusted adult and knowing when a strategy has not helped. Skills need modelling and repetition in ordinary situations.", "Avoid presenting breathing, positive thinking or gratitude as answers to every difficulty. A coping strategy can create a little thinking space, but pupils may still need a change in the environment, adult protection or specialist support."]),
            ("Keep pupil voice safe and purposeful", ["Ask pupils what helps them feel ready to learn, where support is easiest to access and what makes a conversation with an adult feel safe. Explain what the school can change and what needs wider discussion.", "Do not collect sensitive information without a plan for privacy and follow-up. Anonymous surveys can identify themes, but they should sit beside private reporting and safeguarding routes rather than replacing them."]),
            ("Connect universal and targeted support", ["Universal work may include classroom routines, assemblies, workshops and a visible help route. Targeted support may include trusted-adult check-ins, a short plan, attendance support, SEN adjustments, family communication or appropriate referral.", "Movement between levels should be clear. A pupil should not remain in a general workshop pathway when persistent distress, risk or significant barriers require coordinated individual support."]),
            ("Review whether support is helping", ["Set a review point and ask what has changed in participation, safety, attendance, relationships or help-seeking. Combine the pupil's view with staff observation and relevant school information.", "Review should be proportionate and honest. A single session cannot prove a long-term outcome, but staff can check whether pupils remember the language, understand the support route and can identify a practical next step."]),
        ],
        "related": [("emotional wellbeing in schools", "/emotional-wellbeing-in-schools/"), ("positive mental health workshops", "/positive-mental-health-workshops-schools/"), ("classroom wellbeing activities", "/classroom-wellbeing-activities/"), ("pupil help-seeking workshops", "/pupil-help-seeking-workshops/")],
        "faqs": [("What is emotional wellbeing for pupils?", "It is the capacity to feel safe, connected and able to participate, understand emotions, ask for help and recover from ordinary difficulty with appropriate support."), ("What can teachers do every day?", "Use predictable routines, calm communication, accessible help routes, realistic choices and proportionate follow-up when a pupil's presentation changes."), ("Does a wellbeing workshop replace individual support?", "No. Workshops provide universal learning; persistent distress, safeguarding concerns or significant barriers need the school's appropriate individual routes."), ("How should schools review pupil wellbeing support?", "Use pupil voice, participation, attendance, staff observations and agreed review points without treating one measure as proof of impact.")],
    },
    {
        "id": 1795,
        "slug": "emotional-wellbeing-in-schools",
        "title": "Emotional Wellbeing in Schools: What Good Support Looks Like",
        "published": "2026-05-14",
        "keyword": "emotional wellbeing in schools",
        "evidence": "More than 100 relevant Search Console impressions across spelling variants; Ahrefs UK volume 50.",
        "intro": ["Emotional wellbeing in schools is strongest when it is part of how the school works, not a collection of awareness days. Pupils need predictable relationships, clear support routes and age-appropriate learning; staff need roles, time and confidence to respond consistently.", "A whole-school approach connects leadership, curriculum, pastoral care, safeguarding, SEN, attendance, family communication and staff wellbeing. It also leaves space for specialist services when a need sits beyond the school's role."],
        "sections": [
            ("Start with a shared school definition", ["Agree what the school means by emotional wellbeing and how it relates to learning, relationships, safety, participation and belonging. A shared definition reduces the risk of every team using the same word for different work.", "Make boundaries explicit. Schools promote wellbeing and provide pastoral support, but they are not expected to diagnose every difficulty or replace clinical, social-care or safeguarding services."]),
            ("Map what already exists", ["List universal teaching, pupil workshops, pastoral routes, SEN support, attendance work, family communication, staff development and external partnerships. Identify where pupils enter the system and where referrals or communication can stall.", "An honest map often shows duplication as well as gaps. Simplifying several overlapping initiatives may improve clarity more than adding another programme."]),
            ("Make help-seeking visible", ["Pupils should know more than one trusted route and what happens after they use it. Staff should know where to record a concern, who reviews it and when safeguarding escalation is required.", "Test the route through pupil voice and fictional scenarios. If pupils cannot explain how to ask for help, repeat the process in classrooms, assemblies, tutor time and parent information."]),
            ("Connect curriculum and pastoral practice", ["Wellbeing teaching is more credible when adult responses match the lesson. A classroom may teach emotional vocabulary, but pupils also notice whether mistakes are handled respectfully and whether adults follow up when someone asks for help.", "Choose a small set of language and routines that can be reinforced across year groups. Adapt examples for age and need without losing the core message."]),
            ("Support staff confidence and boundaries", ["Staff need practical training in listening, initial response, referral, de-escalation, confidentiality limits and post-incident follow-up. They also need permission to seek support when work is emotionally demanding.", "Training should connect with policy and real school scenarios. Attendance at a session is only a starting point; leaders need implementation prompts, induction and opportunities to revisit practice."]),
            ("Work with families clearly", ["Explain what the school provides, how families raise concerns and what information can be shared. Use plain language and avoid implying that one workshop or strategy will solve every difficulty.", "Family communication should protect pupil privacy while setting realistic expectations about process, review and appropriate external routes."]),
            ("Measure what can reasonably change", ["Useful evidence may include pupil knowledge of support routes, staff confidence, participation, attendance patterns, repeat referrals and whether reviews happen. Numbers need context and should sit beside professional judgement and pupil feedback.", "Avoid unsupported causal claims. An increase in disclosures can reflect improved trust, increased need or both. Review should help the school decide its next action, not simply produce a positive headline."]),
        ],
        "related": [("emotional wellbeing for pupils", "/emotional-wellbeing-for-pupils/"), ("whole-school wellbeing audit", "/whole-school-wellbeing-audit/"), ("pupil wellbeing strategy", "/pupil-wellbeing-strategy-schools/"), ("school wellbeing consultancy", "/consultancy/")],
        "faqs": [("What is emotional wellbeing in schools?", "It is the connected work that supports pupils to feel safe, belong, participate, understand emotions and access help through clear school systems."), ("What does a whole-school approach include?", "It links leadership, curriculum, pastoral care, safeguarding, SEN, attendance, family communication, staff support and appropriate external services."), ("How can a school begin?", "Map current provision and routes, identify duplication and gaps, then choose a small number of owned priorities with review dates."), ("How can impact be reviewed?", "Use pupil knowledge, staff confidence, participation, attendance, referral patterns and qualitative feedback with appropriate context.")],
    },
    {
        "id": 2039,
        "slug": "school-wellbeing-inset-day",
        "title": "School Wellbeing INSET Day: Practical Training for Staff",
        "published": "2026-06-30",
        "keyword": "teacher wellbeing inset",
        "evidence": "62 Search Console impressions around positions 4-5; Ahrefs UK volume 50 for teacher wellbeing INSET.",
        "intro": ["A school wellbeing INSET day should leave staff clearer about what to do on Monday morning. Useful training connects wellbeing with classroom practice, pastoral routes, safeguarding, behaviour, attendance and the pressures staff experience in real situations.", "The day does not need to cover every topic. A focused agenda, realistic scenarios and agreed implementation steps are more valuable than a long presentation with no protected follow-up."],
        "sections": [
            ("Choose a clear purpose for the INSET day", ["Decide whether the priority is pupil emotional wellbeing, staff confidence, whole-school systems, de-escalation, pastoral consistency or staff wellbeing. Several themes can connect, but the school should name the main outcome.", "Use staff and leadership input before the day. Current pressure points, policy changes and recurring incidents help the provider select examples that feel relevant without discussing identifiable pupils publicly."]),
            ("A practical agenda for school staff", ["A useful structure includes shared language, school-context mapping, scenario practice, role-specific discussion, support-route review and implementation planning. Build in breaks and time for teams to translate ideas into their setting.", "Alternate input with activity. Adults learn more when they can test language, make decisions and compare responses rather than listening to a full day of theory."]),
            ("Use realistic but fictional scenarios", ["Scenarios can explore a distressed pupil, peer conflict, a difficult parent conversation, an attendance concern or a staff handover. Keep details fictional and remove anything that could identify a child or family.", "Ask teams what they notice, what they would say first, which route applies and what needs follow-up. The goal is consistent judgement, not finding a perfect script."]),
            ("Link wellbeing with safeguarding", ["Training should explain when a wellbeing conversation becomes a safeguarding matter and how staff record and share information. Adults should not promise confidentiality that school procedures cannot support.", "A workshop or classroom strategy must never delay a required safeguarding response. Staff need confidence about both compassionate communication and professional boundaries."]),
            ("Include staff wellbeing without becoming superficial", ["Staff wellbeing is affected by workload, role clarity, relationships, resources and exposure to difficult situations. Personal coping strategies can help, but they should not be presented as substitutes for organisational action.", "Give teams structured space to identify controllable improvements, support routes and escalation points. Leaders should be prepared to hear system issues rather than placing all responsibility on individual resilience."]),
            ("Plan for different school roles", ["Teachers, classroom assistants, pastoral staff, office teams, lunchtime supervisors and leaders may encounter different moments of need. Shared principles should be adapted to their authority, time and access to information.", "Whole-staff sessions can build a common foundation, followed by role-specific discussion. Temporary and newly appointed staff also need access to the agreed approach through induction."]),
            ("Turn training into implementation", ["Close with a small number of named actions, owners and review dates. Examples include revising a referral map, rehearsing one response model, updating induction or testing whether pupils understand help routes.", "Follow-up might use a short staff pulse check, scenario revisit or policy review. The aim is to see whether practice changed, not simply whether participants enjoyed the session."]),
        ],
        "related": [("staff wellbeing training", "/staff-wellbeing-training-for-schools/"), ("teacher wellbeing workshops", "/teacher-wellbeing-workshops/"), ("de-escalation training", "/de-escalation-training-for-school-staff/"), ("whole-school wellbeing audit", "/whole-school-wellbeing-audit/")],
        "faqs": [("What should a school wellbeing INSET day cover?", "It should focus on the school's priority and connect practical scenarios with roles, support routes, safeguarding boundaries and implementation."), ("Can the day include staff and pupil wellbeing?", "Yes, when the connection is clear and the agenda remains focused enough to produce practical next steps."), ("Should real pupil cases be discussed?", "Use fictional or fully anonymised scenarios and follow school confidentiality and safeguarding procedures."), ("How should schools follow up?", "Agree a small set of actions, owners and review dates, then revisit confidence, practice and relevant school information.")],
    },
    {
        "id": 1817,
        "slug": "positive-mental-health-workshops-schools",
        "title": "Positive Mental Health Workshops for Schools: What Makes Them Useful?",
        "published": "2026-05-19",
        "keyword": "mental health workshops for schools",
        "evidence": "More than 70 relevant Search Console impressions around positions 7-10; Ahrefs UK volume 150.",
        "intro": ["Positive mental health workshops for schools should give pupils language, strategies and help routes they can use after the facilitator leaves. The strongest sessions are age-appropriate, psychologically informed and connected to the school's existing pastoral and safeguarding systems.", "A workshop is universal education, not therapy or assessment. It can normalise help-seeking and build practical understanding while making clear when a pupil should speak privately with a trusted adult."],
        "sections": [
            ("What a useful mental health workshop should achieve", ["Choose a small number of outcomes: understanding emotional wellbeing, recognising pressure, practising a coping step, supporting a friend safely or knowing where to seek help. Trying to cover everything can leave pupils with slogans rather than usable learning.", "Outcomes should be observable and proportionate. Schools can check whether pupils remember the support route or can apply a strategy to a fictional situation without claiming that one workshop transformed mental health."]),
            ("Adapt content by age and context", ["Primary pupils benefit from concrete examples, stories, visual language and trusted-adult practice. Post-primary pupils need credible discussion of assessment, friendships, identity, social media, sleep, comparison and pressure.", "Adaptation should also consider communication, literacy, sensory needs and the school context. Participation must not depend on public personal disclosure."]),
            ("Use activities that feel safe", ["Useful activities include fictional scenario choices, support-route mapping, coping-plan steps, self-talk review and recognising signs that extra help is needed. Pupils should be able to reflect privately or pass on an activity.", "Avoid asking for trauma stories, diagnoses or a public show of hands about sensitive experiences. Brief school staff beforehand so concerns raised after the session have a clear route."]),
            ("Connect coping strategies with real support", ["Breathing, grounding, movement, planning and talking can all create useful space. They should be framed as tools rather than cures and linked to the environmental, relational or specialist support a pupil may need.", "A pupil should never hear that they failed because a strategy did not remove a difficult situation. The workshop should reinforce that trying a tool and then asking for more help is a valid response."]),
            ("Prepare staff before delivery", ["Agree the content, age group, learning outcomes, sensitive boundaries and who will receive concerns. Staff should know whether follow-up material is provided and how the workshop language can be reinforced.", "The provider and school should also agree what happens if a pupil becomes distressed or shares a concern. Normal safeguarding and pastoral procedures remain in place."]),
            ("Reinforce the workshop afterwards", ["Choose two or three phrases, activities or routines for staff to reuse. Tutor time, assemblies, classroom displays and parent communication can strengthen recall when they repeat the same practical message.", "Follow-up should be light enough to happen. A short reminder and support-route check may be more effective than a large pack that staff do not have time to use."]),
            ("Questions to ask a workshop provider", ["Ask how content is adapted, how disclosure is avoided, which outcomes are intended, what staff need to prepare and what follow-up is realistic. Providers should explain boundaries and avoid guaranteed outcome claims.", "Schools can also ask how the session connects with current policy and whether the provider has relevant experience of school audiences. The discussion should lead to one clear delivery brief."]),
        ],
        "related": [("mental health workshops for schools", "/mental-health-workshops-for-schools/"), ("primary school wellbeing workshops", "/primary-school-wellbeing-workshops/"), ("post-primary wellbeing workshops", "/post-primary-wellbeing-workshops/"), ("mental health assembly", "/mental-health-assembly-schools/")],
        "faqs": [("What is a school mental health workshop?", "It is an age-appropriate educational session that builds understanding, practical skills and help-seeking without acting as therapy or assessment."), ("What topics can be covered?", "Topics may include emotions, pressure, coping, relationships, confidence, help-seeking and supporting a friend safely, depending on age and need."), ("How should schools prepare?", "Agree outcomes, boundaries, age adaptation, staff roles, safeguarding routes and realistic follow-up before delivery."), ("Can one workshop improve mental health?", "A workshop can build knowledge and confidence, but it should sit within wider school support and should not be presented as a guaranteed intervention.")],
    },
    {
        "id": 2008,
        "slug": "mental-health-assembly-schools",
        "title": "Mental Health Assembly for Schools: How to Make It Useful",
        "published": "2026-06-23",
        "keyword": "mental health assembly for schools",
        "evidence": "13 Search Console impressions at an average position of 15.8, with scope to strengthen the existing URL.",
        "intro": ["A mental health assembly can open a useful conversation when it is brief, careful and connected to real support. Pupils should leave with one clear message, a practical action and an accurate understanding of where to get help.", "An assembly is not the place for personal disclosure, diagnosis or dramatic stories. It is universal communication that should be followed by age-appropriate classroom work and visible pastoral routes."],
        "sections": [
            ("Choose one clear assembly message", ["Decide what pupils should remember: emotions are part of life, pressure can be noticed early, asking for help is a strength or trusted adults are available. One focused message is easier to reinforce than a long list of wellbeing advice.", "Connect the message to the school's language and support system. Avoid introducing a new route that pupils will not encounter again."]),
            ("A safe assembly structure", ["Open with a relatable fictional situation, explain the core idea, model one practical strategy, show the support route and close with what pupils can do today. Keep the pace calm and the language concrete.", "Tell pupils that they do not need to share personal information in the hall. Explain where and when they can speak privately afterwards."]),
            ("Use examples without inviting disclosure", ["Fictional examples can involve exam pressure, friendship change, making a mistake, difficulty sleeping or feeling overwhelmed by a busy week. Ask pupils to consider choices rather than identify with a diagnosis.", "Avoid public polls about self-harm, trauma, anxiety or other sensitive experiences. An assembly audience is not a confidential setting."]),
            ("Teach a practical help-seeking script", ["Give pupils words they can remember: I have been finding things difficult and I would like to talk; I am worried about a friend; or I do not know how to explain it, but I need help.", "Explain confidentiality honestly. Adults may need to share information to keep someone safe, but the concern should be handled through the appropriate private route."]),
            ("Brief staff before the assembly", ["Staff should know the content, likely follow-up questions and who receives concerns. Make sure pastoral and safeguarding leads are aware of the timing and that pupils can access support afterwards.", "Provide staff with the same core language so a pupil receives a consistent first response in the classroom, corridor or office."]),
            ("Follow up in classrooms or tutor time", ["A five-minute reminder can revisit the strategy, trusted-adult route and one fictional scenario. Repetition helps pupils move from recognising the message to knowing what to do.", "Follow-up should not force reflection. Give pupils private ways to ask for help and make materials accessible for different ages and communication needs."]),
            ("Review whether the assembly was useful", ["Check recall, relevance and whether pupils know the support route. Staff can note common questions and whether additional communication is needed.", "Do not use immediate mood as the only measure. The useful test is whether the assembly improved clarity and connected pupils with the wider school system."]),
        ],
        "related": [("wellbeing assemblies for schools", "/wellbeing-assemblies-for-schools/"), ("positive mental health workshops", "/positive-mental-health-workshops-schools/"), ("pupil help-seeking workshops", "/pupil-help-seeking-workshops/"), ("classroom wellbeing activities", "/classroom-wellbeing-activities/")],
        "faqs": [("How long should a mental health assembly be?", "A focused ten-to-twenty-minute assembly can work when the message is clear and classroom follow-up is planned."), ("Should pupils share personal experiences?", "No. Use fictional examples and direct pupils to a private support route after the assembly."), ("What should the assembly include?", "Include one clear message, an age-appropriate example, a practical action, the school help route and honest confidentiality boundaries."), ("What should happen afterwards?", "Brief staff, repeat the message in class or tutor time and ensure pastoral and safeguarding routes are ready.")],
    },
    {
        "id": 2017,
        "slug": "designated-teacher-wellbeing-training",
        "title": "Designated Teacher Wellbeing Training: Linking Care and Safeguarding",
        "published": "2026-06-23",
        "keyword": "designated teacher training",
        "evidence": "18 Search Console impressions at position 6.6; Ahrefs UK volume 40.",
        "intro": ["Designated teacher wellbeing training should strengthen the connection between compassionate first responses, school systems and safeguarding responsibilities. The role title and statutory duties vary by setting, so training must align with current regional guidance and the school's own structure.", "Wellbeing does not sit outside safeguarding. Staff need to listen carefully, avoid making promises they cannot keep, record proportionately and know when concern moves into a formal protection or referral route."],
        "sections": [
            ("Clarify the role before training", ["Define which designated role the school means, its current responsibilities and how it connects with senior leadership, pastoral teams, SEN, attendance and external agencies. Do not assume the same title means the same duties in every jurisdiction.", "Training should complement current statutory and employer guidance. Where formal safeguarding training is required, a general wellbeing session cannot replace it."]),
            ("Link wellbeing and safeguarding judgement", ["Many concerns begin as an ordinary conversation about attendance, friendship, anxiety or behaviour. Staff need to notice when information suggests risk, abuse, neglect, coercion or another safeguarding issue that requires the formal route.", "The aim is not to make every difficulty a safeguarding case. It is to keep thresholds, consultation and escalation clear so compassion does not delay protection and uncertainty does not lead to unsupported decisions."]),
            ("Strengthen the first adult response", ["A calm first response includes listening, thanking the pupil, checking immediate safety and explaining what must happen next. Adults should use open prompts and avoid investigating beyond their role.", "Training can rehearse how to respond when a pupil asks for secrecy, gives partial information or becomes worried about what will happen after telling."]),
            ("Improve recording and information sharing", ["Records should separate the pupil's words, observed facts, professional judgement and action taken. Information should be shared through approved systems with the people who need it.", "Over-sharing can damage privacy; under-sharing can leave patterns unseen. Scenario practice helps staff apply proportionate judgement within the school's procedures."]),
            ("Coordinate pastoral support safely", ["When a concern does not require immediate safeguarding escalation, the school may still need a trusted-adult plan, attendance action, SEN support, family communication or appropriate referral. Responsibilities and review dates should be clear.", "The designated role should not become the only person who carries wellbeing. A reliable system distributes appropriate actions while retaining oversight and accountability."]),
            ("Support staff who hear difficult information", ["Staff may feel responsible, uncertain or affected after receiving a disclosure or managing a distressing situation. They need a professional route for advice, debrief and wellbeing support without breaching confidentiality.", "Leaders should distinguish operational debrief, safeguarding oversight and personal support. One conversation may not meet every need."]),
            ("Turn training into a school protocol", ["Use the session to test contact routes, handover expectations, out-of-hours arrangements, recording access and cover when key staff are absent. Identify where staff are currently relying on informal knowledge.", "Close with named actions and a review date. Induction, refreshers and scenario discussion help the agreed protocol survive staff changes and busy periods."]),
        ],
        "related": [("safeguarding and wellbeing training", "/safeguarding-and-wellbeing-training-schools-ni/"), ("mental health training for teachers", "/mental-health-training-for-teachers/"), ("pastoral leadership training", "/pastoral-leadership-training-schools/"), ("staff debriefing after incidents", "/staff-debriefing-after-school-incidents/")],
        "faqs": [("What should designated teacher wellbeing training include?", "It should clarify the role, first response, safeguarding thresholds, recording, information sharing, pastoral coordination and staff support."), ("Does wellbeing training replace safeguarding training?", "No. Schools must follow current statutory, employer and regional requirements for formal safeguarding training."), ("How should staff respond when a pupil asks for secrecy?", "Explain calmly that information may need to be shared with the people who can help keep them safe, and do not promise confidentiality."), ("Who else should understand the protocol?", "All staff need a suitable level of awareness, with deeper role-specific training for those who receive, record, review or escalate concerns.")],
    },
]


def link(label: str, url: str) -> str:
    extra = ' target="_blank" rel="noopener"' if url.startswith("http") else ""
    return f'<a href="{html.escape(url, quote=True)}"{extra}>{html.escape(label)}</a>'


def render(page: dict) -> str:
    out = [f"<p>{html.escape(paragraph)}</p>" for paragraph in page["intro"]]
    for heading, paragraphs in page["sections"]:
        out.append(f"<h2>{html.escape(heading)}</h2>")
        out.extend(f"<p>{html.escape(paragraph)}</p>" for paragraph in paragraphs)
    out.append("<h2>Planning questions for school leaders</h2>")
    out.append("<p>Before choosing training, a workshop or a new school process, leaders should ask what problem they are trying to solve, who needs to do something differently and which existing policy or support route the work must connect with. The answer should shape the audience, examples, delivery and follow-up.</p>")
    out.append("<p>Schools should also decide who owns implementation, what staff need to know beforehand, how sensitive information will be handled and when the work will be reviewed. These questions keep a useful session from becoming an isolated event.</p>")
    out.append("<h2>A proportionate review checklist</h2>")
    out.append("<p>After delivery, check whether the intended audience understood the main message, can identify the relevant support route and has a realistic next action. Ask staff what was usable, what needs adapting and whether the session raised any follow-up need.</p>")
    out.append("<p>Review again after enough time for practice to change. Look for consistency, confidence and completion of agreed actions rather than attributing every movement in attendance, behaviour or wellbeing to one input. Record learning so future planning starts from evidence instead of memory.</p>")
    out.append("<h2>How HIP Psychology can help</h2>")
    out.append("<p>HIP Psychology works with schools across Northern Ireland and Ireland through pupil workshops, staff training, parent sessions and whole-school consultancy. Planning begins with the age group, intended outcome, current school systems and the practical situations the audience needs to handle more confidently.</p>")
    out.append("<p>Support is psychology-led and designed to leave schools with usable language and next steps. It does not replace safeguarding procedures, statutory duties, clinical assessment or specialist intervention. The appropriate school and professional routes remain essential.</p>")
    out.append("<h2>Useful official guidance</h2>")
    out.append("<p>Use this general guidance alongside school policy and current professional advice: " + ", ".join(link(label, url) for label, url in OFFICIAL) + ".</p>")
    out.append("<h2>Related HIP Psychology resources</h2>")
    out.append("<p>Continue with " + ", ".join(link(label, url) for label, url in page["related"]) + ".</p>")
    out.append('<p><strong>Planning support for your school?</strong> ' + link("Contact HIP Psychology", "/contact-us/") + " to discuss a practical brief.</p>")
    out.append("<h2>Frequently asked questions</h2>")
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
    "strategy": "Strengthen six existing Search Console opportunity pages; create no duplicate URLs.",
    "pages": [{key: page[key] for key in ("id", "slug", "title", "published", "keyword", "evidence")} for page in PAGES],
}
(HERE / "manifest.json").write_text(json.dumps(manifest, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
