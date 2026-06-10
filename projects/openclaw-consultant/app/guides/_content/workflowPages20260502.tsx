import type { Metadata } from "next";
import GuidePageTemplate from "@/components/GuidePageTemplate";

type Guide = {
  title: string;
  highlight: string;
  badge: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  intro: string;
  workflow: string;
  guardrails: string;
  measure: string;
  stats: { value: string; label: string }[];
  faqs: { question: string; answer: string }[];
  relatedGuides: { href: string; title: string }[];
  sidebarTitle: string;
  sidebarPoints: string[];
  ctaLabel: string;
  contactTitle: string;
  contactDescription: string;
};

const commonRelated = [
  { href: "/guides/ai-workflow-automation-uk", title: "AI Workflow Automation UK" },
  { href: "/guides/openclaw-business-systems-integration", title: "OpenClaw Business Systems Integration" },
  { href: "/guides/openclaw-cron-jobs", title: "OpenClaw Cron Jobs" },
  { href: "/guides/openclaw-implementation-consultant-uk", title: "OpenClaw Implementation Consultant UK" },
];

const guides: Record<string, Guide> = {
  "openclaw-sales-automation": {
    title: "OpenClaw Sales",
    highlight: "Automation",
    badge: "Sales Workflow Guide 2026",
    metaTitle: "OpenClaw Sales Automation: Leads, Follow-Up and CRM Workflows",
    metaDescription: "A practical OpenClaw sales automation guide for lead capture, qualification, follow-up drafts, CRM updates, and approval guardrails.",
    keywords: ["openclaw sales automation", "ai sales workflow", "sales automation uk", "openclaw crm automation"],
    intro: "Sales automation works when it supports the parts of the process that are repeated, easy to miss, and painful when delayed. OpenClaw can monitor enquiry sources, summarise prospect context, prepare CRM notes, draft follow-up, and remind the owner when a next step has not happened.",
    workflow: "A practical workflow can capture website forms, shared inbox messages, referrals, calendar notes, and CRM activity. It can classify fit, extract contact details, draft a first response, prepare discovery questions, create a CRM task, and flag stale opportunities.",
    guardrails: "Pricing, bespoke promises, contract terms, complaints, refunds, and sensitive account messages should stay human-approved. During rollout, OpenClaw should operate in draft-and-log mode: prepare the message, record the evidence, then wait for approval.",
    measure: "Track speed-to-lead, enquiries acknowledged, qualified calls booked, missed follow-ups, CRM completeness, duplicate records, and the human edit rate on drafts.",
    stats: [{ value: "Fast capture", label: "Reduce warm lead leakage" }, { value: "Cleaner CRM", label: "Record context before it disappears" }, { value: "Approved sends", label: "Keep pricing and promises controlled" }],
    faqs: [
      { question: "Can OpenClaw reply to sales leads automatically?", answer: "Start with draft-only replies. Automatic acknowledgements can be added later for narrow, low-risk enquiry types." },
      { question: "Can it update our CRM?", answer: "Yes, if access and rules are configured. Start with notes and tasks before allowing broader record updates." },
      { question: "What should stay human-owned?", answer: "Pricing, custom promises, contract terms, complaints, refunds, and sensitive accounts should stay human-approved." },
      { question: "What is the safest first sales workflow?", answer: "Pick one lead source where follow-up slips, then automate capture, summary, draft response, and CRM task creation." },
    ],
    relatedGuides: [{ href: "/guides/openclaw-crm-automation", title: "OpenClaw CRM Automation" }, { href: "/guides/openclaw-lead-generation-automation", title: "OpenClaw Lead Generation Automation" }, ...commonRelated.slice(0, 2)],
    sidebarTitle: "Sales rule",
    sidebarPoints: ["Automate capture and drafts before automatic sending.", "Keep pricing and bespoke promises approved.", "Measure booked calls, not just task volume."],
    ctaLabel: "Plan sales automation",
    contactTitle: "Book a sales workflow review",
    contactDescription: "Tell us where enquiries, CRM notes, or follow-up currently break down",
  },
  "openclaw-customer-onboarding": {
    title: "OpenClaw Customer",
    highlight: "Onboarding",
    badge: "Onboarding Workflow Guide 2026",
    metaTitle: "OpenClaw Customer Onboarding: Checklists, Documents and Handoffs",
    metaDescription: "A practical guide to OpenClaw customer onboarding automation, including setup checklists, document collection, welcome workflows, handoffs, and review points.",
    keywords: ["openclaw customer onboarding", "ai customer onboarding", "customer onboarding automation uk", "openclaw onboarding workflow"],
    intro: "Customer onboarding is repetitive enough to automate, but important enough to damage trust when it is messy. The work usually spans welcome emails, forms, documents, internal tasks, account setup, calendar invites, training links, and handoffs from sales to delivery.",
    workflow: "OpenClaw can create a customer checklist, collect required files, summarise sales notes, draft welcome messages, update a project board, schedule check-ins, and maintain an exception list for missing actions.",
    guardrails: "OpenClaw can prepare customer-facing messages and internal handoffs, but bespoke promises, implementation scope, pricing, legal terms, and sensitive account issues should stay human-approved.",
    measure: "Track time-to-first-value, missing onboarding items, customer chases, internal handoff errors, and support tickets during setup.",
    stats: [{ value: "Checklist", label: "Every customer follows the same core path" }, { value: "Handoffs", label: "Sales-to-delivery context stays visible" }, { value: "Exceptions", label: "Missing documents or blockers are surfaced" }],
    faqs: [
      { question: "Can OpenClaw onboard customers automatically?", answer: "It can automate checklists, reminders, drafts, handoffs, and document tracking. Customer-facing commitments should remain reviewed." },
      { question: "What should the first onboarding workflow include?", answer: "Welcome draft, required-information checklist, internal owner tasks, missing-item reminders, and a first-value check-in." },
      { question: "Can it connect sales notes to delivery?", answer: "Yes. This is often one of the best uses: summarise sales context and turn it into delivery-ready onboarding tasks." },
      { question: "How do we measure success?", answer: "Track time-to-first-value, missing onboarding items, customer chases, internal handoff errors, and support tickets during setup." },
    ],
    relatedGuides: [{ href: "/guides/openclaw-customer-onboarding", title: "Automate Customer Onboarding with AI" }, { href: "/guides/openclaw-document-processing", title: "OpenClaw Document Processing" }, ...commonRelated.slice(0, 2)],
    sidebarTitle: "Onboarding rule",
    sidebarPoints: ["Design around first customer value, not internal tidiness.", "Track missing inputs and owners explicitly.", "Keep bespoke scope and promises approved."],
    ctaLabel: "Plan onboarding automation",
    contactTitle: "Book an onboarding workflow review",
    contactDescription: "Tell us where new-customer setup currently slows down",
  },
  "openclaw-invoice-processing": {
    title: "OpenClaw Invoice",
    highlight: "Processing",
    badge: "Invoice Workflow Guide 2026",
    metaTitle: "OpenClaw Invoice Processing: Extract, Check and Approve",
    metaDescription: "A practical guide to OpenClaw invoice processing for extraction, matching, exception checks, finance approvals, and payment-control guardrails.",
    keywords: ["openclaw invoice processing", "ai invoice processing uk", "invoice automation workflow", "openclaw finance automation"],
    intro: "Invoice admin is a good OpenClaw workflow because the inputs are repeated and the decision rules can be made explicit. The agent can read incoming invoices, extract key fields, compare them with purchase records, identify missing information, and prepare a clean approval note.",
    workflow: "OpenClaw can monitor an inbox or folder, classify invoice files, extract supplier details, invoice number, date, amount, VAT, purchase order, due date, and payment terms. It can then update a tracker, mark exceptions, and draft supplier queries.",
    guardrails: "Payments, supplier changes, bank-detail updates, duplicate-invoice decisions, and disputed invoices should remain human-approved. OpenClaw can prepare the evidence and recommended next action, but finance control should stay visible.",
    measure: "Measure processing time, invoices waiting for approval, duplicate catches, missing purchase-order flags, supplier query volume, and finance-team rework.",
    stats: [{ value: "Extract", label: "Supplier, amount, due date and references" }, { value: "Check", label: "Flag missing PO or unusual values" }, { value: "Approve", label: "Keep payment decisions controlled" }],
    faqs: [
      { question: "Can OpenClaw read invoice PDFs?", answer: "Yes, where document quality and access are suitable. The workflow should extract structured fields and keep source evidence visible." },
      { question: "Can it approve payments?", answer: "Payment approval should normally remain human-controlled. OpenClaw can prepare checks, exceptions, and approval notes." },
      { question: "What is the safest first version?", answer: "Start with extraction, duplicate checks, missing-field flags, and a finance review queue." },
      { question: "Can it query suppliers?", answer: "It can draft supplier queries for missing or unclear information. Sending should start human-approved." },
    ],
    relatedGuides: [{ href: "/guides/openclaw-invoice-processing", title: "AI Invoice Processing" }, { href: "/guides/openclaw-document-processing", title: "OpenClaw Document Processing" }, ...commonRelated.slice(1, 3)],
    sidebarTitle: "Invoice rule",
    sidebarPoints: ["Extract and check before payment automation.", "Keep bank changes and approvals human-owned.", "Use exception queues rather than silent decisions."],
    ctaLabel: "Plan invoice processing",
    contactTitle: "Book an invoice workflow review",
    contactDescription: "Tell us how invoices arrive and where finance checks slow down",
  },
  "openclaw-reporting-automation": {
    title: "OpenClaw Reporting",
    highlight: "Automation",
    badge: "Reporting Workflow Guide 2026",
    metaTitle: "OpenClaw Reporting Automation: Source Checks and Draft Reports",
    metaDescription: "A practical guide to OpenClaw reporting automation for data collection, source evidence, commentary drafts, exception notes, and review workflows.",
    keywords: ["openclaw reporting automation", "ai reporting workflow", "automated business reports", "openclaw dashboard reporting"],
    intro: "Many reports are manually assembled from the same places every week or month: spreadsheets, CRMs, analytics exports, dashboards, inbox notes, finance files, and project boards. OpenClaw can reduce the collection and first-draft burden while keeping a human reviewer in charge.",
    workflow: "A practical setup can collect figures, compare them with previous periods, identify unusual changes, draft a summary, prepare tables where appropriate, and create an exception list for the reviewer.",
    guardrails: "Reporting automation must keep source evidence visible. If a figure is missing, the workflow should flag it rather than invent a number. Keep facts, interpretation, and recommendations separate.",
    measure: "Track time spent collecting data, reviewer edit time, missing-data incidents, report turnaround, and whether the report leads to clearer decisions.",
    stats: [{ value: "Sources", label: "Keep every claim traceable" }, { value: "Drafts", label: "Turn numbers into review-ready commentary" }, { value: "Exceptions", label: "Highlight what changed and why" }],
    faqs: [
      { question: "Can OpenClaw write business reports?", answer: "Yes, but it should use source evidence and human review, especially for client-facing or financial reports." },
      { question: "What data sources can it use?", answer: "It can use files, spreadsheets, CRMs, browser portals, analytics exports, inboxes, and dashboards depending on access." },
      { question: "How do we stop invented numbers?", answer: "Require source links, missing-data flags, and a rule that facts must come from known sources." },
      { question: "What report should we automate first?", answer: "Pick a recurring report with a stable format, repeated data sources, and obvious manual preparation drag." },
    ],
    relatedGuides: [{ href: "/guides/openclaw-reporting-automation", title: "AI Reporting Automation UK" }, { href: "/guides/openclaw-operations-dashboard", title: "OpenClaw Operations Dashboard" }, ...commonRelated.slice(0, 2)],
    sidebarTitle: "Reporting rule",
    sidebarPoints: ["Never separate commentary from source evidence.", "Flag missing data instead of filling gaps.", "Measure reviewer edit time and decision quality."],
    ctaLabel: "Automate reporting",
    contactTitle: "Book a reporting workflow review",
    contactDescription: "Tell us which weekly or monthly reports eat time",
  },
  "openclaw-support-ticket-automation": {
    title: "OpenClaw Support Ticket",
    highlight: "Automation",
    badge: "Support Workflow Guide 2026",
    metaTitle: "OpenClaw Support Ticket Automation: Triage, Drafts and Escalation",
    metaDescription: "A practical guide to OpenClaw support ticket automation for triage, draft replies, routing, escalation, knowledge capture, and approval rules.",
    keywords: ["openclaw support ticket automation", "ai support ticket triage", "customer support automation uk", "openclaw customer support"],
    intro: "Support teams need speed, consistency, and judgement. OpenClaw can classify incoming tickets, summarise history, suggest reply drafts, identify missing information, route issues to the right owner, and spot repeated questions that should become knowledge-base entries.",
    workflow: "The workflow can read a new ticket, check customer context, classify urgency, detect sentiment, draft a response, recommend an escalation path, and create an internal note.",
    guardrails: "Complaints, refunds, legal threats, safety issues, data requests, angry customers, and high-value accounts should route to humans quickly. OpenClaw should flag risk, not bury it inside a confident answer.",
    measure: "Track first-response time, resolution time, escalation accuracy, customer satisfaction, draft acceptance rate, repeat-ticket volume, and knowledge-base gaps closed.",
    stats: [{ value: "Triage", label: "Sort priority and issue type faster" }, { value: "Drafts", label: "Prepare replies for review" }, { value: "Escalate", label: "Route sensitive cases to people" }],
    faqs: [
      { question: "Can OpenClaw answer support tickets?", answer: "It can draft answers and handle narrow low-risk replies once quality is proven. Start with triage and review." },
      { question: "Can it integrate with support tools?", answer: "Yes, depending on platform access. The workflow can also work from inboxes or exported ticket queues." },
      { question: "What should be escalated?", answer: "Complaints, refunds, legal issues, safety concerns, data requests, angry customers, and high-value accounts." },
      { question: "What is the safest first workflow?", answer: "Ticket classification, summary, draft response, and escalation recommendation." },
    ],
    relatedGuides: [{ href: "/guides/openclaw-customer-support", title: "OpenClaw for Customer Support" }, { href: "/guides/ai-agents-for-customer-support", title: "AI Agents for Customer Support" }, ...commonRelated.slice(0, 2)],
    sidebarTitle: "Support rule",
    sidebarPoints: ["Automate triage before automatic replies.", "Escalate sensitive cases quickly.", "Turn repeated tickets into knowledge-base improvements."],
    ctaLabel: "Plan support automation",
    contactTitle: "Book a support workflow review",
    contactDescription: "Tell us which tickets repeat and where responses slow down",
  },
};

export function getWorkflowGuideMetadata(slug: string): Metadata {
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

export function WorkflowGuidePage({ slug }: { slug: string }) {
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
      sections={[
        { id: "why", title: "Where this workflow fits", html: `<p>${guide.intro}</p><p>It works best when the owner, source systems, approval points, and success metric are clear before automation starts.</p>` },
        { id: "workflow", title: "What OpenClaw can do", html: `<p>${guide.workflow}</p><p>The practical value comes from joining the handoff points together, not from adding another disconnected AI tool.</p>` },
        { id: "guardrails", title: "Guardrails and approval points", html: `<p>${guide.guardrails}</p><p>Start in draft, observe, or review mode where the downside of a mistake is meaningful.</p>` },
        { id: "measurement", title: "How to measure value", html: `<p>${guide.measure}</p><p>If the workflow creates activity but not better decisions, faster response, cleaner records, or fewer missed actions, it needs tightening before it scales.</p>` },
      ]}
      faqs={guide.faqs}
      relatedGuides={guide.relatedGuides}
      sidebarTitle={guide.sidebarTitle}
      sidebarPoints={guide.sidebarPoints}
      assessmentDescription="Blue Canvas can map this workflow and design an OpenClaw setup with clear sources, owners, approvals, and measurable outcomes."
      contactTitle={guide.contactTitle}
      contactDescription={guide.contactDescription}
      practicalTakeawayText={`${guide.highlight} workflows should start narrow, prove value, and keep accountable decisions visible. Use OpenClaw to prepare, route, draft, check, and monitor before automating sensitive actions.`}
    />
  );
}
