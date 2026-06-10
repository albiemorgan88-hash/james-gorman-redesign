import type { Metadata } from "next";
import GuidePageTemplate from "@/components/GuidePageTemplate";

type BookingAdminGuide = {
  title: string;
  highlight: string;
  badge: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  stats: { value: string; label: string }[];
  sections: { id: string; title: string; html: string }[];
  faqs: { question: string; answer: string }[];
  relatedGuides: { href: string; title: string }[];
  sidebarTitle: string;
  sidebarPoints: string[];
  ctaLabel: string;
  contactTitle: string;
  contactDescription: string;
  assessmentDescription: string;
  practicalTakeawayText: string;
};

const commonRelated = [
  { href: "/guides/ai-appointment-booking", title: "AI Appointment Booking for Business" },
  { href: "/guides/openclaw-business-systems-integration", title: "OpenClaw Business Systems Integration" },
  { href: "/guides/openclaw-crm-automation", title: "OpenClaw CRM Automation" },
  { href: "/guides/openclaw-customer-onboarding", title: "OpenClaw Customer Onboarding" },
];

const guides: Record<string, BookingAdminGuide> = {
  "openclaw-booking-automation": {
    title: "OpenClaw Booking",
    highlight: "Automation",
    badge: "Booking Automation Guide 2026",
    metaTitle: "OpenClaw Booking Automation: Forms, Calendars and Follow-Up",
    metaDescription: "A practical guide to OpenClaw booking automation for forms, calendars, CRM updates, reminders, admin queues, and approval guardrails.",
    keywords: ["openclaw booking automation", "ai booking automation uk", "booking workflow automation", "openclaw calendar automation"],
    stats: [
      { value: "Capture", label: "Turn enquiries into structured bookings" },
      { value: "Confirm", label: "Send consistent confirmations and reminders" },
      { value: "Control", label: "Keep exceptions visible to staff" },
    ],
    sections: [
      { id: "fit", title: "Where booking automation fits", html: `<p>Booking admin usually breaks at handoff points. A form is submitted, a calendar needs checked, a CRM record needs updated, a confirmation should be sent, and somebody needs to notice if anything fails.</p><p>OpenClaw works well here because it can connect those steps into one monitored workflow instead of relying on staff to copy details between systems.</p>` },
      { id: "workflow", title: "What the workflow can include", html: `<p>A practical setup can collect booking details from a website form, create a booking reference, split multi-session requests into separate records, check required fields, update a CRM or tracker, create a calendar entry, and draft or send confirmations.</p><p>It can also maintain an admin queue for missing details, duplicates, date conflicts, and bookings that need a human decision.</p>` },
      { id: "guardrails", title: "What should stay controlled", html: `<p>Automation should not silently accept impossible dates, promise availability, move paid bookings, or override a staff decision without clear rules. Keep conflicts, refunds, complaints, safeguarding issues, and unusual requests human-reviewed.</p><p>The safest first version is not full autopilot. It is a private booking hub that reduces copying, missed emails, and unclear ownership.</p>` },
      { id: "rollout", title: "A sensible rollout plan", html: `<p>Start with one booking form and one calendar process. Map the fields, define the confirmation email, create an exception log, and run the workflow in review mode before letting it send routine messages.</p><p>Once the core flow is stable, add reminders, CRM updates, reporting, and more complex availability rules.</p>` },
    ],
    faqs: [
      { question: "Can OpenClaw automate bookings end to end?", answer: "It can automate much of the admin, but the first version should keep conflicts and unusual requests visible for staff review." },
      { question: "Does this replace booking software?", answer: "Not always. Sometimes the best setup connects your existing form, CRM, calendar, and inbox instead of forcing a full platform switch." },
      { question: "What is the safest first booking workflow?", answer: "Form capture, booking reference, CRM update, calendar draft, confirmation draft, and an exception queue." },
      { question: "How do we measure value?", answer: "Track admin time, booking errors, missed confirmations, customer chases, duplicate records, and speed from enquiry to confirmed booking." },
    ],
    relatedGuides: [{ href: "/guides/workshop-booking-automation", title: "Workshop Booking Automation" }, { href: "/guides/openclaw-calendar-automation", title: "OpenClaw Calendar Automation" }, ...commonRelated],
    sidebarTitle: "Booking rule",
    sidebarPoints: ["Connect the current process before replacing every tool.", "Make exceptions obvious instead of hiding them.", "Automate routine confirmations only after the fields and rules are stable."],
    ctaLabel: "Plan booking automation",
    contactTitle: "Book a booking workflow review",
    contactDescription: "Tell us how bookings arrive and where admin currently breaks",
    assessmentDescription: "Blue Canvas can map your booking flow and design an OpenClaw setup for forms, confirmations, calendars, CRM updates, and exception handling.",
    practicalTakeawayText: "Good booking automation is not just a calendar link. It is a controlled workflow from enquiry to confirmation, with clear records and a visible safety net for exceptions.",
  },
  "workshop-booking-automation": {
    title: "Workshop Booking",
    highlight: "Automation",
    badge: "Workshop Admin Guide 2026",
    metaTitle: "Workshop Booking Automation: Forms, Attendees and Reminders",
    metaDescription: "How to automate workshop booking admin with forms, attendee records, confirmations, reminders, CRM updates, and staff review queues.",
    keywords: ["workshop booking automation", "training booking automation", "ai workshop admin", "course booking automation uk"],
    stats: [
      { value: "Sessions", label: "Split multi-workshop bookings cleanly" },
      { value: "Attendees", label: "Capture people, dates and requirements" },
      { value: "Reminders", label: "Reduce no-shows and manual chasing" },
    ],
    sections: [
      { id: "problem", title: "Why workshop bookings get messy", html: `<p>Workshop bookings often include several moving parts: school or company details, lead contact, attendee numbers, workshop type, preferred dates, facilitator availability, invoices, reminders, and feedback.</p><p>When those details sit across forms, inboxes, spreadsheets, CRM notes, and calendars, staff lose time checking what is confirmed and what still needs chased.</p>` },
      { id: "flow", title: "A cleaner workshop booking flow", html: `<p>OpenClaw can turn one form submission into structured workshop records. For example, a multi-workshop request can become separate session records with their own date, owner, status, reminder schedule, and missing-information flags.</p><p>The team then works from a simple admin queue instead of hunting through emails.</p>` },
      { id: "emails", title: "Confirmations and reminders", html: `<p>The workflow can prepare consistent confirmation emails, facilitator notices, attendee reminders, and post-workshop feedback requests. These can start as drafts and move to automatic sending once the wording and rules are proven.</p><p>For schools, charities, healthcare, and training providers, approval rules matter. Sensitive notes and unusual requirements should stay reviewed.</p>` },
      { id: "reporting", title: "Tracking value", html: `<p>Useful measures include booking turnaround time, missing details, late reminders, double-booked sessions, no-shows, invoice readiness, and staff time spent reconciling records.</p><p>The goal is a calmer booking operation, not just more software.</p>` },
    ],
    faqs: [
      { question: "Can this handle multiple workshops in one enquiry?", answer: "Yes. The workflow can split one request into separate session records so each workshop has a clear status and owner." },
      { question: "Can staff still override the process?", answer: "Yes. Good automation should make overrides explicit and logged, not block sensible staff judgement." },
      { question: "Can reminders be automatic?", answer: "Routine reminders can be automated once fields, dates, and wording are reliable. Sensitive or unusual messages should stay reviewed." },
      { question: "What tools can this connect to?", answer: "It can often work with website forms, calendars, CRMs, spreadsheets, inboxes, and dashboards depending on access and permissions." },
    ],
    relatedGuides: [{ href: "/guides/openclaw-booking-automation", title: "OpenClaw Booking Automation" }, { href: "/guides/openclaw-reminder-workflows", title: "OpenClaw Reminder Workflows" }, { href: "/guides/openclaw-for-training-providers", title: "OpenClaw for Training Providers" }, ...commonRelated.slice(1, 3)],
    sidebarTitle: "Workshop rule",
    sidebarPoints: ["Split multi-session bookings into clear records.", "Keep date conflicts and safeguarding notes human-reviewed.", "Use reminders to reduce chasing, not overwhelm attendees."],
    ctaLabel: "Plan workshop booking automation",
    contactTitle: "Book a workshop admin review",
    contactDescription: "Tell us how workshop bookings are currently captured and confirmed",
    assessmentDescription: "Blue Canvas can design a workshop booking hub that connects forms, calendars, confirmations, reminders, and staff exception queues.",
    practicalTakeawayText: "Workshop booking automation should give every session a clear status, owner, date, contact, and next action. That is where the admin time disappears.",
  },
  "openclaw-calendar-automation": {
    title: "OpenClaw Calendar",
    highlight: "Automation",
    badge: "Calendar Workflow Guide 2026",
    metaTitle: "OpenClaw Calendar Automation: Scheduling, Reminders and Handoffs",
    metaDescription: "A practical OpenClaw calendar automation guide for scheduling workflows, reminders, availability checks, handoffs, and approval guardrails.",
    keywords: ["openclaw calendar automation", "ai calendar automation", "calendar workflow automation", "appointment reminder automation"],
    stats: [
      { value: "Schedule", label: "Create cleaner calendar workflows" },
      { value: "Remind", label: "Reduce missed meetings and prep" },
      { value: "Handoff", label: "Keep notes and owners aligned" },
    ],
    sections: [
      { id: "fit", title: "Where calendar automation helps", html: `<p>Calendar automation is useful when appointments create work before and after the event. The meeting itself is only one step. There may be forms, prep notes, reminders, CRM updates, documents, invoices, and follow-up tasks.</p><p>OpenClaw can connect calendar events to the surrounding admin so appointments do not become isolated blocks of time.</p>` },
      { id: "workflows", title: "Useful calendar workflows", html: `<p>Examples include creating events from approved forms, preparing meeting briefs, reminding attendees, checking missing information, flagging clashes, drafting follow-up notes, and updating a CRM after the event.</p><p>The strongest workflows are narrow and rules-based: one appointment type, one calendar, one confirmation path, and one owner.</p>` },
      { id: "controls", title: "Controls and review points", html: `<p>OpenClaw should not silently override human availability, move important meetings, or send sensitive appointment messages without review. Conflicts, cancellations, paid sessions, complaints, and safeguarding issues should be escalated.</p>` },
      { id: "measure", title: "How to measure value", html: `<p>Track booking turnaround, late reminders, no-shows, missed prep, follow-up completion, duplicate events, and the number of calendar-related questions staff still answer manually.</p>` },
    ],
    faqs: [
      { question: "Can OpenClaw create calendar events?", answer: "Yes where access is available and the rules are clear. Start with draft or reviewed event creation for sensitive appointment types." },
      { question: "Can it check availability?", answer: "It can help with availability checks depending on the calendar system and permissions, but edge cases should remain visible." },
      { question: "Can it send reminders?", answer: "Yes. Reminders are a strong early use case when dates, recipients, and wording are reliable." },
      { question: "What should stay manual?", answer: "High-value changes, complaints, cancellations with consequences, and sensitive appointments should stay human-approved." },
    ],
    relatedGuides: [{ href: "/guides/openclaw-reminder-workflows", title: "OpenClaw Reminder Workflows" }, { href: "/guides/openclaw-booking-automation", title: "OpenClaw Booking Automation" }, ...commonRelated],
    sidebarTitle: "Calendar rule",
    sidebarPoints: ["Connect calendar events to prep and follow-up.", "Keep conflicts and sensitive changes reviewed.", "Measure no-shows, missed prep, and admin time."],
    ctaLabel: "Plan calendar automation",
    contactTitle: "Book a calendar workflow review",
    contactDescription: "Tell us which appointment type creates the most admin",
    assessmentDescription: "Blue Canvas can map your appointment flow and design OpenClaw support for scheduling, reminders, handoffs, and post-meeting tasks.",
    practicalTakeawayText: "Calendar automation is strongest when it handles the work around the event: prep, reminders, records, handoffs, and follow-up.",
  },
  "openclaw-form-to-crm-automation": {
    title: "OpenClaw Form-to-CRM",
    highlight: "Automation",
    badge: "Form Workflow Guide 2026",
    metaTitle: "OpenClaw Form-to-CRM Automation: Capture, Clean and Route Leads",
    metaDescription: "How OpenClaw can automate form-to-CRM workflows, including data capture, validation, duplicate checks, routing, follow-up drafts, and exception queues.",
    keywords: ["openclaw form to crm automation", "form to crm automation", "ai crm data entry", "website form automation"],
    stats: [
      { value: "Capture", label: "Turn forms into structured records" },
      { value: "Clean", label: "Catch missing and duplicate data" },
      { value: "Route", label: "Send the right next action to the right person" },
    ],
    sections: [
      { id: "problem", title: "Why form-to-CRM work matters", html: `<p>Website forms are often the start of a commercial or operational workflow, but the data rarely arrives in the perfect shape. Names are inconsistent, phone numbers are missing, the enquiry type is unclear, and duplicates appear across systems.</p><p>OpenClaw can sit between the form and the CRM to clean, classify, enrich, route, and prepare the next action.</p>` },
      { id: "workflow", title: "What OpenClaw can do", html: `<p>A form-to-CRM workflow can validate required fields, create a clean summary, check for duplicates, classify enquiry type, update the CRM, create an owner task, draft a reply, and log any exception that needs staff review.</p><p>The agent should preserve the original submission so staff can trace every decision back to the source.</p>` },
      { id: "approval", title: "Approval and data controls", html: `<p>Be careful with automatic merges, record deletions, sensitive notes, pricing promises, and customer-facing replies. Start with note creation and task routing before wider CRM changes.</p>` },
      { id: "rollout", title: "Rollout steps", html: `<p>Pick one important form, define the target CRM fields, list the failure cases, and run the workflow in log-only mode first. Then turn on reviewed CRM updates and finally routine automatic updates where risk is low.</p>` },
    ],
    faqs: [
      { question: "Can OpenClaw connect website forms to a CRM?", answer: "Yes, where the form and CRM provide suitable access. The key is mapping fields and exception rules before automation starts." },
      { question: "Can it detect duplicate leads?", answer: "It can flag likely duplicates using fields such as email, phone, company, and previous enquiries. Merging should start human-reviewed." },
      { question: "Can it reply automatically?", answer: "Routine acknowledgements can be automated later. Bespoke replies, pricing, and sensitive enquiries should start as drafts." },
      { question: "What is the first useful version?", answer: "Capture, clean summary, duplicate flag, CRM note, owner task, and reply draft." },
    ],
    relatedGuides: [{ href: "/guides/openclaw-gravity-forms-automation", title: "OpenClaw Gravity Forms Automation" }, { href: "/guides/openclaw-zoho-crm-automation", title: "OpenClaw Zoho CRM Automation" }, ...commonRelated.slice(1)],
    sidebarTitle: "Form rule",
    sidebarPoints: ["Preserve the original submission as evidence.", "Start with CRM notes and tasks before record-changing automation.", "Make duplicate and missing-field exceptions visible."],
    ctaLabel: "Plan form-to-CRM automation",
    contactTitle: "Book a form workflow review",
    contactDescription: "Tell us which form and CRM need joined up",
    assessmentDescription: "Blue Canvas can map your website form flow and design OpenClaw automation for clean CRM records, routing, drafts, and exception handling.",
    practicalTakeawayText: "A form-to-CRM workflow should make every enquiry cleaner, faster to action, and easier to trace back to the original source.",
  },
  "openclaw-gravity-forms-automation": {
    title: "OpenClaw Gravity Forms",
    highlight: "Automation",
    badge: "WordPress Form Automation 2026",
    metaTitle: "OpenClaw Gravity Forms Automation: WordPress Forms to Workflows",
    metaDescription: "A practical guide to using OpenClaw with Gravity Forms for booking requests, CRM updates, confirmations, reminders, and admin dashboards.",
    keywords: ["openclaw gravity forms automation", "gravity forms automation", "wordpress form automation", "ai form automation wordpress"],
    stats: [
      { value: "WordPress", label: "Use existing forms as the front door" },
      { value: "Workflow", label: "Route submissions into real operations" },
      { value: "Safety", label: "Flag exceptions before they cause admin issues" },
    ],
    sections: [
      { id: "fit", title: "Why Gravity Forms is a useful front door", html: `<p>Many businesses already use Gravity Forms for enquiries, bookings, referrals, downloads, applications, or support requests. The form captures the data, but the work after submission is often still manual.</p><p>OpenClaw can help turn those submissions into structured records, reminders, CRM notes, calendar drafts, and admin tasks.</p>` },
      { id: "examples", title: "Useful Gravity Forms workflows", html: `<p>Examples include booking requests, workshop registrations, contact forms, document upload workflows, quote requests, referral forms, and staff-only admin forms.</p><p>The workflow can validate fields, create a reference number, update a tracker, draft emails, and escalate missing or unusual submissions.</p>` },
      { id: "controls", title: "Controls to include", html: `<p>Do not let a form submission automatically become a final promise unless the rules are simple and low-risk. Use status fields such as received, awaiting review, confirmed, missing information, cancelled, or complete.</p>` },
      { id: "build", title: "How to build it sensibly", html: `<p>Start with one form and one outcome. Document the fields, email templates, CRM mapping, and exception rules. Then test real submissions before adding more forms or automatic sending.</p>` },
    ],
    faqs: [
      { question: "Can OpenClaw work with WordPress forms?", answer: "Yes, with the right access and integration route. Gravity Forms is a practical starting point because the submission fields are structured." },
      { question: "Can it send confirmation emails?", answer: "Yes. Start with drafts or reviewed sends, then automate narrow routine confirmations once tested." },
      { question: "Can it update a CRM from Gravity Forms?", answer: "Yes if the CRM access and field mapping are clear. Missing fields and duplicates should be logged." },
      { question: "Is this better than changing booking platforms?", answer: "Often the fastest first step is improving the process around the existing form before forcing a full platform switch." },
    ],
    relatedGuides: [{ href: "/guides/openclaw-form-to-crm-automation", title: "OpenClaw Form-to-CRM Automation" }, { href: "/guides/workshop-booking-automation", title: "Workshop Booking Automation" }, ...commonRelated.slice(1)],
    sidebarTitle: "Gravity Forms rule",
    sidebarPoints: ["Treat the form as the front door, not the whole process.", "Use statuses and exception queues.", "Test real submissions before automatic customer messages."],
    ctaLabel: "Plan Gravity Forms automation",
    contactTitle: "Book a WordPress form workflow review",
    contactDescription: "Tell us what happens after your form is submitted",
    assessmentDescription: "Blue Canvas can design an OpenClaw workflow around your Gravity Forms submissions, including CRM updates, confirmations, calendars, and admin tracking.",
    practicalTakeawayText: "Gravity Forms automation works best when it keeps your existing website front door but fixes the operational mess behind it.",
  },
  "openclaw-zoho-crm-automation": {
    title: "OpenClaw Zoho CRM",
    highlight: "Automation",
    badge: "Zoho Workflow Guide 2026",
    metaTitle: "OpenClaw Zoho CRM Automation: Notes, Tasks and Follow-Up",
    metaDescription: "How OpenClaw can support Zoho CRM workflows with cleaner records, lead routing, reminders, booking updates, and human approval controls.",
    keywords: ["openclaw zoho crm automation", "zoho crm automation", "ai zoho crm workflow", "zoho lead automation uk"],
    stats: [
      { value: "Records", label: "Cleaner notes and field updates" },
      { value: "Tasks", label: "Follow-up does not depend on memory" },
      { value: "Review", label: "Sensitive CRM changes stay controlled" },
    ],
    sections: [
      { id: "fit", title: "Where OpenClaw fits with Zoho", html: `<p>Zoho CRM can hold the customer record, but staff still have to capture details, interpret form submissions, remember follow-up, and keep notes up to date. OpenClaw can help prepare and route that work.</p><p>The best first workflows usually involve notes, tasks, status updates, and reminders rather than broad autonomous CRM changes.</p>` },
      { id: "use-cases", title: "Useful Zoho automation use cases", html: `<p>OpenClaw can create structured summaries from forms or inboxes, prepare lead notes, update booking statuses, create follow-up tasks, flag stale records, draft customer replies, and maintain exception lists.</p><p>It should keep source evidence visible so staff can understand why a record changed.</p>` },
      { id: "controls", title: "CRM control points", html: `<p>Keep human approval around merges, deletions, ownership changes, sensitive notes, pricing, complaints, and anything that affects customer trust. OpenClaw should prepare evidence and recommendations before it is allowed to change important records.</p>` },
      { id: "rollout", title: "Rollout path", html: `<p>Start with one module or pipeline. Define required fields, update rules, duplicate logic, and review points. Measure record completeness, response speed, and missed follow-up before expanding.</p>` },
    ],
    faqs: [
      { question: "Can OpenClaw update Zoho CRM?", answer: "It can where API or workflow access is available. Start with controlled note and task updates before broader record changes." },
      { question: "Can it create tasks for staff?", answer: "Yes. Task creation is often a safer early win than automatic customer-facing action." },
      { question: "Can it connect form submissions to Zoho?", answer: "Yes, with clear field mapping and duplicate handling. Missing details should be sent to an exception queue." },
      { question: "What should not be automated first?", answer: "Record merges, deletions, sensitive notes, pricing promises, and customer complaints should start human-reviewed." },
    ],
    relatedGuides: [{ href: "/guides/openclaw-form-to-crm-automation", title: "OpenClaw Form-to-CRM Automation" }, { href: "/guides/openclaw-crm-automation", title: "OpenClaw CRM Automation" }, ...commonRelated.slice(1)],
    sidebarTitle: "Zoho rule",
    sidebarPoints: ["Start with notes, tasks, and status clarity.", "Keep important record changes reviewed.", "Show source evidence for every recommendation."],
    ctaLabel: "Plan Zoho automation",
    contactTitle: "Book a Zoho workflow review",
    contactDescription: "Tell us which Zoho records or follow-ups are falling behind",
    assessmentDescription: "Blue Canvas can map your Zoho workflow and design OpenClaw support for form capture, record hygiene, tasks, reminders, and exception handling.",
    practicalTakeawayText: "Zoho automation should make the CRM more trustworthy. Start with clean notes, reliable tasks, and visible exceptions before wider changes.",
  },
  "openclaw-reminder-workflows": {
    title: "OpenClaw Reminder",
    highlight: "Workflows",
    badge: "Reminder Automation Guide 2026",
    metaTitle: "OpenClaw Reminder Workflows: Follow-Up, Chasing and Escalations",
    metaDescription: "A practical guide to OpenClaw reminder workflows for customers, staff, bookings, documents, renewals, and escalation queues.",
    keywords: ["openclaw reminder workflows", "ai reminder automation", "follow up automation uk", "customer reminder workflow"],
    stats: [
      { value: "Follow-up", label: "Stop important actions disappearing" },
      { value: "Chasing", label: "Make missing inputs visible" },
      { value: "Escalate", label: "Route overdue issues to the right person" },
    ],
    sections: [
      { id: "value", title: "Why reminders create real value", html: `<p>Many businesses do not need more software first. They need fewer missed next steps. Reminders are simple, but they protect revenue, customer experience, compliance, and delivery quality.</p><p>OpenClaw can watch for dates, missing fields, stale records, unanswered emails, incomplete forms, and upcoming deadlines.</p>` },
      { id: "types", title: "Reminder types worth automating", html: `<p>Useful workflows include booking reminders, missing document chasers, unpaid invoice nudges, renewal alerts, sales follow-up, meeting prep reminders, staff task escalation, and post-service feedback requests.</p><p>The agent can choose the right template, recipient, owner, and escalation path based on status and age.</p>` },
      { id: "tone", title: "Tone and approval rules", html: `<p>Reminder automation must not become spam. Keep frequency controlled, tone helpful, and sensitive messages reviewed. If the reminder involves money, complaints, safeguarding, legal issues, or vulnerable customers, use a human approval step.</p>` },
      { id: "measure", title: "What to measure", html: `<p>Track overdue tasks, response rates, no-shows, missing information, manual chases avoided, escalation volume, and complaints caused by reminder tone or timing.</p>` },
    ],
    faqs: [
      { question: "Can OpenClaw send reminders automatically?", answer: "Yes for routine low-risk reminders once rules and wording are tested. Sensitive reminders should stay reviewed." },
      { question: "What reminder workflow should we start with?", answer: "Pick the reminder that currently causes the most chasing or lost value: bookings, documents, invoices, or sales follow-up." },
      { question: "How do we avoid annoying people?", answer: "Limit frequency, use clear opt-outs where appropriate, keep tone helpful, and escalate instead of repeating forever." },
      { question: "Can reminders update our CRM?", answer: "Yes. The workflow can log reminders sent, replies received, and next actions if access and rules are clear." },
    ],
    relatedGuides: [{ href: "/guides/openclaw-calendar-automation", title: "OpenClaw Calendar Automation" }, { href: "/guides/openclaw-customer-onboarding", title: "OpenClaw Customer Onboarding" }, ...commonRelated],
    sidebarTitle: "Reminder rule",
    sidebarPoints: ["Automate helpful reminders, not nagging.", "Escalate stale issues instead of repeating forever.", "Keep sensitive tone and timing human-reviewed."],
    ctaLabel: "Plan reminder workflows",
    contactTitle: "Book a reminder workflow review",
    contactDescription: "Tell us what your team has to chase repeatedly",
    assessmentDescription: "Blue Canvas can map your follow-up and reminder workflows, then design OpenClaw automations with sensible timing, templates, logs, and escalation paths.",
    practicalTakeawayText: "A good reminder workflow makes the next action visible at the right time, to the right person, with the right level of human control.",
  },
  "openclaw-admin-dashboard": {
    title: "OpenClaw Admin",
    highlight: "Dashboard",
    badge: "Operations Dashboard Guide 2026",
    metaTitle: "OpenClaw Admin Dashboard: Queues, Exceptions and Workflow Status",
    metaDescription: "How to use an OpenClaw admin dashboard to track workflow status, exceptions, bookings, approvals, errors, and operational handoffs.",
    keywords: ["openclaw admin dashboard", "ai operations dashboard", "workflow admin dashboard", "openclaw exception queue"],
    stats: [
      { value: "Status", label: "See what is waiting, blocked or complete" },
      { value: "Exceptions", label: "Find issues before customers do" },
      { value: "Owners", label: "Make the next action obvious" },
    ],
    sections: [
      { id: "why", title: "Why a dashboard matters", html: `<p>Automation without visibility creates anxiety. Staff need to know what the agent did, what failed, what needs approval, and what is waiting on a person or customer.</p><p>An OpenClaw admin dashboard gives the team a practical control panel for workflow status and exceptions.</p>` },
      { id: "sections", title: "What the dashboard should show", html: `<p>Useful sections include new submissions, awaiting approval, missing information, calendar conflicts, failed sends, CRM update errors, overdue tasks, and completed records.</p><p>Each item should show source evidence, owner, status, last action, next action, and a simple way to approve, edit, or escalate.</p>` },
      { id: "permissions", title: "Permissions and audit trail", html: `<p>Not every staff member should see or change every workflow. Use basic roles, avoid exposing sensitive information unnecessarily, and keep logs for important actions.</p><p>The dashboard should make accountability clearer, not create another uncontrolled admin surface.</p>` },
      { id: "rollout", title: "Start simple", html: `<p>The first dashboard can be a private page, spreadsheet-backed queue, or lightweight admin interface. The key is not the design polish. It is whether staff trust it enough to work from it daily.</p>` },
    ],
    faqs: [
      { question: "Does OpenClaw need an admin dashboard?", answer: "For serious workflows, yes. Staff need visibility over approvals, exceptions, errors, and status." },
      { question: "What should go in the first dashboard?", answer: "New items, waiting approvals, errors, missing information, overdue tasks, and completed records." },
      { question: "Can it be private?", answer: "Yes. Operational dashboards should usually be staff-only and protected by appropriate access controls." },
      { question: "Can staff approve actions from the dashboard?", answer: "Yes, if designed safely. Approval actions should be logged and limited to authorised users." },
    ],
    relatedGuides: [{ href: "/guides/openclaw-operations-dashboard", title: "OpenClaw Operations Dashboard" }, { href: "/guides/openclaw-error-monitoring-workflows", title: "OpenClaw Error Monitoring Workflows" }, ...commonRelated],
    sidebarTitle: "Dashboard rule",
    sidebarPoints: ["Show source, status, owner, and next action.", "Make exceptions impossible to miss.", "Log approvals and sensitive changes."],
    ctaLabel: "Plan an admin dashboard",
    contactTitle: "Book an admin dashboard review",
    contactDescription: "Tell us which workflow needs better visibility",
    assessmentDescription: "Blue Canvas can design a private admin dashboard around your OpenClaw workflows so staff can approve, monitor, and fix exceptions confidently.",
    practicalTakeawayText: "A dashboard is the safety layer that turns automation from a black box into a managed business workflow.",
  },
  "openclaw-for-training-providers": {
    title: "OpenClaw for",
    highlight: "Training Providers",
    badge: "Training Provider Automation 2026",
    metaTitle: "OpenClaw for Training Providers: Bookings, Reminders and Admin",
    metaDescription: "A practical guide to OpenClaw for training providers, covering workshop bookings, attendee admin, confirmations, reminders, CRM updates, and reporting.",
    keywords: ["openclaw for training providers", "training provider automation", "course booking automation", "ai for training companies uk"],
    stats: [
      { value: "Bookings", label: "Cleaner intake and session records" },
      { value: "Delivery", label: "Prep, reminders and attendance support" },
      { value: "Reporting", label: "Less manual admin after sessions" },
    ],
    sections: [
      { id: "fit", title: "Where OpenClaw helps training providers", html: `<p>Training providers manage enquiries, workshop bookings, attendee lists, facilitators, joining instructions, reminders, feedback, certificates, invoices, and reporting. Much of that work is repeated but still manually coordinated.</p><p>OpenClaw can reduce the admin load by joining the booking and delivery workflow together.</p>` },
      { id: "booking", title: "Booking and attendee admin", html: `<p>The agent can process booking forms, split multi-session requests, check missing information, create calendar drafts, update CRM or booking trackers, and prepare confirmation emails.</p><p>For attendee admin, it can maintain lists, flag missing details, and prepare reminders or joining instructions.</p>` },
      { id: "delivery", title: "Delivery support", html: `<p>Before a session, OpenClaw can prepare facilitator briefs, list special requirements, check materials, and remind attendees. After a session, it can chase feedback, organise notes, and prepare reporting summaries.</p>` },
      { id: "controls", title: "What to control carefully", html: `<p>Availability, cancellations, safeguarding notes, complaints, paid booking changes, and sensitive attendee information should stay reviewed. Start with admin preparation and staff approval before automatic messages.</p>` },
    ],
    faqs: [
      { question: "Can OpenClaw manage course bookings?", answer: "It can support the admin workflow around bookings, confirmations, reminders, calendars, records, and exceptions. Staff should review unusual or sensitive cases." },
      { question: "Can it create attendee lists?", answer: "Yes. It can structure attendee details from forms and maintain lists if the data source and permissions are clear." },
      { question: "Can it support workshop delivery?", answer: "Yes. It can prepare facilitator briefs, reminders, material checks, feedback chasers, and reporting summaries." },
      { question: "What is the first workflow for a training provider?", answer: "Workshop booking intake is usually a strong start because it touches forms, calendars, confirmations, CRM updates, and reminders." },
    ],
    relatedGuides: [{ href: "/guides/workshop-booking-automation", title: "Workshop Booking Automation" }, { href: "/guides/openclaw-booking-automation", title: "OpenClaw Booking Automation" }, { href: "/guides/openclaw-reminder-workflows", title: "OpenClaw Reminder Workflows" }, ...commonRelated.slice(1, 3)],
    sidebarTitle: "Training provider rule",
    sidebarPoints: ["Start with booking intake before broader delivery automation.", "Keep sensitive attendee information controlled.", "Use automation to make staff preparation calmer and more consistent."],
    ctaLabel: "Plan training provider automation",
    contactTitle: "Book a training workflow review",
    contactDescription: "Tell us where training admin is slow or error-prone",
    assessmentDescription: "Blue Canvas can map your booking and delivery admin, then design OpenClaw workflows for training providers with clear guardrails and measurable value.",
    practicalTakeawayText: "Training provider automation should make every session easier to book, prepare, deliver, and report on without losing human control of sensitive decisions.",
  },
  "openclaw-error-monitoring-workflows": {
    title: "OpenClaw Error Monitoring",
    highlight: "Workflows",
    badge: "Automation Safety Guide 2026",
    metaTitle: "OpenClaw Error Monitoring Workflows: Logs, Alerts and Recovery",
    metaDescription: "How to design OpenClaw error monitoring workflows for failed sends, API errors, missing data, approval queues, logs, alerts, and recovery actions.",
    keywords: ["openclaw error monitoring", "automation error monitoring", "ai workflow monitoring", "openclaw exception handling"],
    stats: [
      { value: "Detect", label: "Notice failures quickly" },
      { value: "Explain", label: "Show source and reason clearly" },
      { value: "Recover", label: "Route fixes to the right owner" },
    ],
    sections: [
      { id: "why", title: "Why monitoring is not optional", html: `<p>Business automation fails in boring ways: missing fields, expired tokens, API limits, changed forms, invalid email addresses, duplicate records, permission errors, and human approvals left untouched.</p><p>Error monitoring turns those failures into visible work instead of silent damage.</p>` },
      { id: "signals", title: "What to monitor", html: `<p>Monitor failed sends, missing required fields, API errors, duplicate submissions, stale approval queues, overdue reminders, calendar conflicts, CRM update failures, and unusual spikes in activity.</p><p>Each error should include source, timestamp, affected customer or record, attempted action, failure reason, and recommended next step.</p>` },
      { id: "alerts", title: "Alerts without panic", html: `<p>Not every issue deserves an urgent alert. Use severity levels. Low-risk issues can sit in a dashboard; customer-impacting or time-sensitive failures should notify the owner quickly.</p><p>Good monitoring reduces noise while making real risk impossible to miss.</p>` },
      { id: "recovery", title: "Recovery workflows", html: `<p>Recovery can include retrying low-risk actions, drafting a customer update, creating a staff task, pausing a workflow, or escalating to technical support. The workflow should never hide repeated failure.</p>` },
    ],
    faqs: [
      { question: "Why does automation need error monitoring?", answer: "Because failed automation can look like nothing happened. Monitoring makes failures visible, traceable, and recoverable." },
      { question: "What should trigger an alert?", answer: "Customer-impacting failures, payment or booking issues, stale approvals, repeated API errors, and anything time-sensitive should be escalated." },
      { question: "Can OpenClaw retry failed actions?", answer: "It can retry some low-risk actions, but repeated or sensitive failures should be escalated rather than retried forever." },
      { question: "What is the simplest first version?", answer: "An exception queue with source, failure reason, owner, next action, and severity." },
    ],
    relatedGuides: [{ href: "/guides/openclaw-admin-dashboard", title: "OpenClaw Admin Dashboard" }, { href: "/guides/openclaw-security-best-practices", title: "OpenClaw Security & Compliance Guide" }, ...commonRelated.slice(1)],
    sidebarTitle: "Monitoring rule",
    sidebarPoints: ["Silent failure is the real risk.", "Separate low-priority logs from urgent alerts.", "Give every exception an owner and next action."],
    ctaLabel: "Plan error monitoring",
    contactTitle: "Book an automation safety review",
    contactDescription: "Tell us which workflow needs better monitoring and recovery",
    assessmentDescription: "Blue Canvas can design OpenClaw monitoring, dashboards, alerts, and recovery workflows so business automation stays visible and controlled.",
    practicalTakeawayText: "Error monitoring is what makes automation safe enough to trust. If nobody can see failures, the workflow is not production-ready.",
  },
};

export function getBookingAdminGuideMetadata(slug: string): Metadata {
  const guide = guides[slug];

  return {
    title: guide.metaTitle,
    description: guide.metaDescription,
    keywords: guide.keywords,
    alternates: { canonical: `https://openclawconsultant.co.uk/guides/${slug}` },
    openGraph: {
      title: guide.metaTitle,
      description: guide.metaDescription,
      url: `https://openclawconsultant.co.uk/guides/${slug}`,
      type: "article",
    },
  };
}

export function BookingAdminGuidePage({ slug }: { slug: string }) {
  const guide = guides[slug];

  return (
    <GuidePageTemplate
      canonicalPath={`/guides/${slug}`}
      badge={guide.badge}
      title={guide.title}
      highlight={guide.highlight}
      description={guide.metaDescription}
      primaryCtaLabel="Read the guide"
      primaryCtaHref="#guide"
      secondaryCtaLabel={guide.ctaLabel}
      secondaryCtaHref="#assessment"
      stats={guide.stats}
      sections={guide.sections}
      faqs={guide.faqs}
      relatedGuides={guide.relatedGuides}
      sidebarTitle={guide.sidebarTitle}
      sidebarPoints={guide.sidebarPoints}
      assessmentDescription={guide.assessmentDescription}
      contactTitle={guide.contactTitle}
      contactDescription={guide.contactDescription}
      practicalTakeawayText={guide.practicalTakeawayText}
    />
  );
}
