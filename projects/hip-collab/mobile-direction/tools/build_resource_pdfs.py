from pathlib import Path
from xml.sax.saxutils import escape

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfbase import pdfmetrics
from reportlab.platypus import (
    PageBreak,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
    Table,
    TableStyle,
)


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "downloads"
OUTPUT.mkdir(parents=True, exist_ok=True)

NAVY = colors.HexColor("#151B34")
TEAL = colors.HexColor("#00877D")
PALE = colors.HexColor("#EFFBF7")
LINE = colors.HexColor("#DCE9E5")
MUTED = colors.HexColor("#5B6475")


def register_fonts():
    candidates = [
        ("/System/Library/Fonts/Supplemental/Arial.ttf", "Arial"),
        ("/System/Library/Fonts/Supplemental/Arial Bold.ttf", "Arial-Bold"),
    ]
    for filename, name in candidates:
        if Path(filename).exists():
            pdfmetrics.registerFont(TTFont(name, filename))


register_fonts()
BASE_FONT = "Arial" if "Arial" in pdfmetrics.getRegisteredFontNames() else "Helvetica"
BOLD_FONT = "Arial-Bold" if "Arial-Bold" in pdfmetrics.getRegisteredFontNames() else "Helvetica-Bold"

styles = getSampleStyleSheet()
styles.add(ParagraphStyle(name="DocTitle", parent=styles["Title"], fontName=BOLD_FONT, fontSize=25, leading=29, textColor=NAVY, spaceAfter=8))
styles.add(ParagraphStyle(name="DocSubtitle", parent=styles["BodyText"], fontName=BASE_FONT, fontSize=11, leading=16, textColor=MUTED, spaceAfter=16))
styles.add(ParagraphStyle(name="Section", parent=styles["Heading2"], fontName=BOLD_FONT, fontSize=17, leading=21, textColor=NAVY, spaceBefore=12, spaceAfter=8))
styles.add(ParagraphStyle(name="Subsection", parent=styles["Heading3"], fontName=BOLD_FONT, fontSize=12.5, leading=16, textColor=TEAL, spaceBefore=9, spaceAfter=5))
styles.add(ParagraphStyle(name="BodyCopy", parent=styles["BodyText"], fontName=BASE_FONT, fontSize=10.3, leading=15, textColor=colors.HexColor("#2B3143"), spaceAfter=7))
styles.add(ParagraphStyle(name="BulletCopy", parent=styles["BodyText"], fontName=BASE_FONT, fontSize=10, leading=14, leftIndent=14, firstLineIndent=-11, textColor=colors.HexColor("#2B3143"), spaceAfter=4))
styles.add(ParagraphStyle(name="Small", parent=styles["BodyText"], fontName=BASE_FONT, fontSize=8.5, leading=12, textColor=MUTED, spaceAfter=4))
styles.add(ParagraphStyle(name="Draft", parent=styles["BodyText"], fontName=BOLD_FONT, fontSize=9, leading=12, alignment=TA_CENTER, textColor=colors.HexColor("#8B271C"), spaceAfter=12))


def p(text, style="BodyCopy"):
    return Paragraph(escape(text), styles[style])


def bullet(text):
    return Paragraph("[ ] " + escape(text), styles["BulletCopy"])


def header_footer(canvas, doc):
    canvas.saveState()
    width, height = A4
    canvas.setFillColor(NAVY)
    canvas.rect(0, height - 14 * mm, width, 14 * mm, stroke=0, fill=1)
    canvas.setFillColor(colors.white)
    canvas.setFont(BOLD_FONT, 9)
    canvas.drawString(18 * mm, height - 9 * mm, "HIP Psychology | AntiBullyingNI.co.uk")
    canvas.setStrokeColor(LINE)
    canvas.line(18 * mm, 15 * mm, width - 18 * mm, 15 * mm)
    canvas.setFillColor(MUTED)
    canvas.setFont(BASE_FONT, 8)
    canvas.drawString(18 * mm, 10 * mm, "Draft for professional review - not for distribution")
    canvas.drawRightString(width - 18 * mm, 10 * mm, f"Page {doc.page}")
    canvas.restoreState()


def callout(text):
    table = Table([[p(text)]], colWidths=[169 * mm])
    table.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), PALE),
        ("BOX", (0, 0), (-1, -1), 0.8, TEAL),
        ("LEFTPADDING", (0, 0), (-1, -1), 10),
        ("RIGHTPADDING", (0, 0), (-1, -1), 10),
        ("TOPPADDING", (0, 0), (-1, -1), 9),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 9),
    ]))
    return table


def section(story, title, intro=None, bullets=None, page_break=False):
    if page_break:
        story.append(PageBreak())
    story.append(p(title, "Section"))
    if intro:
        story.append(p(intro))
    for item in bullets or []:
        story.append(bullet(item))


def build(filename, title, subtitle, story, sources):
    document = SimpleDocTemplate(
        str(OUTPUT / filename),
        pagesize=A4,
        rightMargin=20 * mm,
        leftMargin=20 * mm,
        topMargin=23 * mm,
        bottomMargin=21 * mm,
        title=title,
        author="HIP Psychology",
        subject=subtitle,
    )
    opening = [p(title, "DocTitle"), p(subtitle, "DocSubtitle"), p("DRAFT FOR PROFESSIONAL REVIEW", "Draft")]
    opening.append(callout("Use this resource alongside your school's current policy, safeguarding procedures and official regional guidance. Do not use it to record pupil names or confidential case details."))
    opening.append(Spacer(1, 7 * mm))
    ending = [PageBreak(), p("Official sources", "Section")]
    ending.extend(p(source, "Small") for source in sources)
    ending.extend([Spacer(1, 5 * mm), p("Review record", "Section"), bullet("Professional reviewer and role:"), bullet("Review date:"), bullet("Approved version number:"), bullet("Next scheduled review:")])
    document.build(opening + story + ending, onFirstPage=header_footer, onLaterPages=header_footer)


def classroom_pack():
    story = []
    section(story, "How to use this pack", "Choose activities that fit your pupils' age, communication needs and school context. Brief staff on the reporting route before any pupil-facing activity.", [
        "Name the trusted adults pupils can approach before the session begins.",
        "Avoid asking pupils to disclose personal experiences in front of a group.",
        "Offer a private follow-up route after every activity.",
        "Follow the school's safeguarding procedure if a concern is raised.",
        "Adapt examples and language for accessibility, age and local context.",
    ])

    section(story, "Primary assembly outline", "Suggested length: 10-15 minutes. Aim: help pupils recognise kind, unkind and repeated harmful behaviour, and know how to seek help.", page_break=True)
    story.extend([
        p("Opening", "Subsection"),
        p("Welcome pupils and explain that the session is about helping everyone feel safe, included and able to ask for help. Make clear that nobody will be asked to share a personal story."),
        p("Three prompts", "Subsection"),
        bullet("What can kindness look like in a classroom or playground?"),
        bullet("What might make it difficult for someone to speak up?"),
        bullet("Which trusted adults can pupils approach in this school?"),
        p("Closing script", "Subsection"),
        p("If something is happening to you or someone else, you do not have to solve it alone. Tell a trusted adult. If the first conversation does not help, keep asking until an adult listens and supports you."),
        p("Staff follow-up", "Subsection"),
        p("Repeat the school's reporting route and tell pupils how to ask for a private conversation after the assembly."),
    ])

    section(story, "Post-primary assembly outline", "Suggested length: 15-20 minutes. Aim: explore silence, peer pressure, online escalation and safe bystander choices.", page_break=True)
    story.extend([
        p("Opening", "Subsection"),
        p("Frame the session around choices: posting, forwarding, reacting, saving evidence privately, leaving a chat, checking in with someone and asking an adult for help."),
        p("Scenario", "Subsection"),
        p("A screenshot from a private conversation is shared in a year-group chat. Some pupils add laughing reactions, others forward it, and several stay silent because they do not want attention turned on them."),
        p("Discussion prompts", "Subsection"),
        bullet("Which actions increase the harm, even if the pupil did not create the original post?"),
        bullet("What could a bystander do without confronting the group publicly?"),
        bullet("What information should be kept private and shown to a trusted adult?"),
        bullet("What is the school's reporting route for an online concern?"),
        p("Closing", "Subsection"),
        p("Reinforce that safe help-seeking is not the same as public confrontation, and that serious threats, coercion or image-based abuse require the school's safeguarding route."),
    ])

    lessons = [
        ("KS1 lesson: kindness, inclusion and trusted adults", "20-30 minutes", ["Sort simple fictional examples into kind, unkind and needs-an-adult-support.", "Draw or name the trusted adults and safe spaces available in school.", "Practise one sentence a pupil could use to ask for help."], "Each pupil can identify at least one trusted adult and one help-seeking phrase."),
        ("KS2 lesson: patterns, power and bystander choices", "30-40 minutes", ["Compare one-off conflict with a repeated pattern of harmful behaviour without labelling real pupils.", "Use scenario cards to choose safe bystander actions.", "Map the school's private reporting route."], "Pupils can describe two safe ways to support a peer and explain when an adult is needed."),
        ("KS3 lesson: group chats and breaking the silence safely", "40-50 minutes", ["Discuss a fictional group-chat scenario.", "Identify how forwarding, reacting and silence can affect harm.", "Create a step-by-step safe response: pause, keep relevant information private, tell a trusted adult and avoid public escalation."], "Pupils can identify a safe reporting route and distinguish support from retaliation."),
        ("KS4 lesson: peer norms, prejudice and responsible action", "45-60 minutes", ["Explore how status, group norms and fear of becoming a target can shape bystander behaviour.", "Review fictional examples of prejudice-based and online bullying.", "Draft a practical year-group commitment that includes private reporting and follow-up."], "Pupils can evaluate response options and identify actions that reduce rather than amplify harm."),
    ]
    for title, duration, activities, outcome in lessons:
        section(story, title, f"Suggested length: {duration}", page_break=True)
        story.append(p("Activities", "Subsection"))
        story.extend(bullet(activity) for activity in activities)
        story.append(p("Check for understanding", "Subsection"))
        story.append(p(outcome))
        story.append(p("Private follow-up", "Subsection"))
        story.append(p("End by repeating the school's trusted-adult and safeguarding routes. Do not ask for public disclosure."))

    section(story, "Odd Socks Day activity", "Use the visible activity to open a conversation about difference and belonging without suggesting that socks alone prevent bullying.", page_break=True)
    story.extend([
        bullet("Invite pupils to wear odd socks if they wish; provide a no-cost classroom alternative."),
        bullet("Ask groups to create one practical action that helps someone feel included."),
        bullet("Display the school's reporting route beside campaign artwork."),
        bullet("Collect anonymous campaign feedback without inviting incident details."),
    ])

    section(story, "Parent and carer newsletter template", page_break=True)
    story.extend([
        p("Subject: Anti-Bullying Week 2026 at [School name]"),
        p("This week pupils will take part in age-appropriate activities about respectful behaviour, safe bystander choices and asking for help. The work supports our existing anti-bullying and safeguarding procedures."),
        p("Families can help by listening calmly, encouraging children to speak to a trusted adult and using the school's private reporting route if a concern arises. Please avoid sharing details about pupils on social media."),
        p("Our school contact route is: [insert named role, email or monitored form]. Our policy is available at: [insert link]."),
        p("If you have an urgent safeguarding concern, follow the school's safeguarding procedure. If someone is in immediate danger, call 999 or 112."),
    ])

    section(story, "Five-minute staff briefing", page_break=True)
    story.extend([
        bullet("Who owns the campaign week and daily messages?"),
        bullet("Which exact words will staff use for reporting and follow-up?"),
        bullet("Where will concerns be recorded and who reviews them?"),
        bullet("What private follow-up is available after assemblies or lessons?"),
        bullet("When does a concern move into the safeguarding process?"),
        bullet("How will pupil and parent feedback shape follow-up after the week?"),
    ])

    build(
        "free-anti-bullying-week-classroom-pack.pdf",
        "Anti-Bullying Week 2026 Classroom Pack",
        "Assembly outlines, four age-banded lesson plans, Odd Socks Day activity, parent template and staff briefing.",
        story,
        [
            "Anti-Bullying Alliance - Anti-Bullying Week 2026: https://anti-bullyingalliance.org.uk/anti-bullying-week-2026",
            "Education Authority NI - Addressing Bullying in Schools: https://www.eani.org.uk/schools/policies-and-guidance/other-policies-and-procedures/addressing-bullying-in-schools-act-0",
            "Department of Education and Youth - Bi Cinealta procedures: https://www.gov.ie/en/department-of-education/policy-information/b%C3%AD-cine%C3%A1lta-procedures-to-prevent-and-address-bullying-behaviour-for-primary-and-post-primary-schools/",
            "Childline UK: https://www.childline.org.uk/get-support/",
            "Childline Ireland: https://www.childline.ie/topics/bullying-and-abuse",
        ],
    )


def policy_checklist(filename, title, subtitle, sections, sources):
    story = []
    for index, (heading, intro, items) in enumerate(sections):
        section(story, heading, intro, items, page_break=index > 0)
        story.extend([Spacer(1, 4 * mm), p("Evidence or action owner:", "Small"), Spacer(1, 10 * mm), p("Review date:", "Small"), Spacer(1, 7 * mm)])
    build(filename, title, subtitle, story, sources)


def checklists():
    common_sources = [
        "Education Authority NI - Addressing Bullying in Schools: https://www.eani.org.uk/schools/policies-and-guidance/other-policies-and-procedures/addressing-bullying-in-schools-act-0",
        "Department of Education and Youth - Bi Cinealta procedures: https://www.gov.ie/en/department-of-education/policy-information/b%C3%AD-cine%C3%A1lta-procedures-to-prevent-and-address-bullying-behaviour-for-primary-and-post-primary-schools/",
    ]
    general = [
        ("Purpose, scope and accessibility", "Check whether the policy is easy to find, understand and use.", ["The policy states its purpose and intended audience.", "Definitions and examples match current regional guidance.", "Pupil, staff and parent versions use clear, accessible language.", "Online behaviour and prejudice-based bullying are addressed.", "The policy links clearly to safeguarding and behaviour procedures."]),
        ("Reporting and response", "Test whether a pupil, parent or staff member can understand what happens next.", ["Named reporting routes are visible and monitored.", "Private and accessible reporting options are available.", "Staff know who records, reviews and follows up a concern.", "The policy explains confidentiality boundaries without promising secrecy.", "Safeguarding escalation routes are explicit."]),
        ("Recording and oversight", "Check that records support proportionate follow-up and governance.", ["The policy identifies what must be recorded and where.", "Access to records is restricted appropriately.", "Review dates and follow-up responsibilities are clear.", "Leaders review patterns without exposing pupil identities unnecessarily.", "Governors or the board receive the required oversight information."]),
        ("Pupil and parent participation", "Check whether consultation changes practice rather than becoming a one-off exercise.", ["Pupil views inform language, reporting and prevention work.", "Parent communication explains routes and realistic next steps.", "Consultation methods are accessible and age-appropriate.", "Feedback can be given without public disclosure.", "The school records actions taken after consultation."]),
        ("Implementation and review", "Confirm that the written policy matches daily practice.", ["Staff briefing and induction include the policy.", "Campaign activity connects to year-round procedures.", "Classroom materials use the same reporting language.", "The policy has a named owner and next review date.", "Current official sources are checked at each review."]),
    ]
    policy_checklist("anti-bullying-policy-checklist.pdf", "Anti-Bullying Policy Review Checklist", "Cross-border planning prompts for school leaders. Choose the NI or ROI edition for region-specific review.", general, common_sources)

    ni = [
        ("NI legal and policy alignment", "Use the current Addressing Bullying in Schools Act and Education Authority guidance as the source of truth.", ["The policy reflects the statutory definition and scope used by the school.", "The policy identifies responsibilities for preventing and addressing bullying.", "Online and off-site behaviour is addressed where it affects school life.", "The relationship with safeguarding and behaviour policies is clear.", "The policy records the date on which official guidance was last checked."]),
        ("Recording and review", "Confirm that staff can apply the school's agreed process consistently.", ["Staff know what information to record and where.", "Records distinguish observed facts, pupil accounts and actions taken.", "Follow-up dates and responsible roles are named.", "Access and retention arrangements are documented.", "Leaders review patterns and report through the appropriate governance route."]),
        ("Pupil and parent routes", "Make reporting understandable before a concern occurs.", ["Pupils can name at least one trusted adult and a private reporting route.", "Parents can find the monitored contact route without searching multiple pages.", "The policy explains what families can expect after a report.", "Communication respects confidentiality for every pupil.", "Accessible formats are available where needed."]),
        ("Implementation evidence", "Check that policy language appears in everyday practice.", ["Induction and staff briefings cover reporting and recording.", "Assemblies and lessons repeat the same trusted-adult routes.", "Supervision and pastoral plans reflect known risk areas.", "Pupil consultation leads to documented actions.", "The policy owner and next review date are recorded."]),
    ]
    policy_checklist("ni-anti-bullying-policy-checklist.pdf", "NI Anti-Bullying Policy Checklist", "Review prompts for Northern Ireland schools using the Addressing Bullying in Schools Act and current Education Authority guidance.", ni, [
        "Addressing Bullying in Schools Act (Northern Ireland) 2016: https://www.legislation.gov.uk/nia/2016/25/contents",
        common_sources[0],
        "Education Authority NI - Parent information: https://www.eani.org.uk/school-management/policies-and-guidance/addressing-bullying-in-schools-act-2016/bullying",
    ])

    roi = [
        ("Bi Cinealta alignment", "Use the current Department of Education and Youth procedures and editable appendices as the source of truth.", ["The school policy uses the current procedure and implementation date.", "Prevention, identification and response responsibilities are clear.", "The student-friendly policy is available and accessible.", "Online and prejudice-related bullying are addressed.", "The date official guidance was last checked is recorded."]),
        ("Prevention and school culture", "Check how the policy becomes visible in daily school life.", ["Prevention work is linked to curriculum and wellbeing planning.", "Pupil participation influences prevention activity.", "Staff use consistent language and response steps.", "Parent communication explains reporting and follow-up.", "Campaign activity connects to year-round procedures."]),
        ("Response, recording and oversight", "Confirm that the approved procedure can be followed consistently.", ["Staff know who receives and records a concern.", "Actions and follow-up dates are documented.", "Oversight and reporting responsibilities are named.", "Confidentiality and data access arrangements are clear.", "Safeguarding overlap is escalated through the correct school route."]),
        ("Review evidence", "Record the evidence used to improve policy and practice.", ["The board or relevant governance body receives the required review information.", "Pupil and parent views are gathered safely and accessibly.", "Patterns are reviewed without unnecessary identification.", "Professional learning needs are recorded and scheduled.", "The policy owner and next review date are recorded."]),
    ]
    policy_checklist("roi-anti-bullying-policy-checklist.pdf", "ROI Anti-Bullying Policy Checklist", "Review prompts for schools in the Republic of Ireland using current Bi Cinealta procedures.", roi, [
        common_sources[1],
        "Cinealtas: Action Plan on Bullying: https://www.gov.ie/en/department-of-education/publications/cine%C3%A1ltas-action-plan-on-bullying/",
        "Tusla - Children First guidance: https://www.tusla.ie/children-first/children-first-guidance-and-legislation/",
    ])


if __name__ == "__main__":
    classroom_pack()
    checklists()
    print("Built 4 professional-review PDF drafts.")
