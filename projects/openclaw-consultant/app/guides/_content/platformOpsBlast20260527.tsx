import type { Metadata } from "next";
import GuidePageTemplate from "@/components/GuidePageTemplate";

type OpsPlatformGuide = {
  title: string; highlight: string; badge: string; description: string; metaTitle: string; metaDescription: string; keywords: string[]; platform: string; buyer: string; first: string; systems: string[]; workflows: string[]; guardrails: string[]; metric: string;
};

const commonRelatedGuides = [
  { href: "/guides/openclaw-integrations-guide", title: "OpenClaw Integrations Guide" },
  { href: "/guides/openclaw-security-best-practices", title: "OpenClaw Security Best Practices" },
  { href: "/guides/openclaw-implementation-consultant-uk", title: "OpenClaw Implementation Consultant UK" },
  { href: "/guides/openclaw-managed-service-uk", title: "OpenClaw Managed Service UK" },
];

const guides: Record<string, OpsPlatformGuide> = {
  "openclaw-hubspot-automation": {
    title: 'OpenClaw HubSpot',
    highlight: 'Automation',
    badge: 'HubSpot Workflow Guide 2026',
    description: 'How UK teams can use OpenClaw around HubSpot CRM, lead routing, follow-up drafting, pipeline hygiene, and sales handoffs with approval control.',
    metaTitle: 'OpenClaw HubSpot Automation: CRM, Leads and Follow-Ups',
    metaDescription: 'A practical guide to OpenClaw HubSpot automation for CRM updates, lead routing, follow-up drafting, pipeline hygiene, and approval-safe sales workflows.',
    platform: 'HubSpot',
    buyer: 'sales and marketing teams using HubSpot',
    first: 'lead triage, follow-up drafting, and CRM field completion',
    metric: 'Measure response time to new leads, stale-deal reduction, CRM completeness, follow-up consistency, and human edit rate on drafted messages.',
    keywords: [
      'openclaw hubspot automation',
      'hubspot ai agent',
      'hubspot crm automation uk',
      'openclaw crm workflow',
      'hubspot follow up automation',
    ],
    systems: [
      'HubSpot contacts, companies, deals, and lifecycle stages',
      'form submissions, meeting notes, email threads, and sales activity logs',
      'pipeline views, stale opportunity lists, and handoff tasks',
      'reporting dashboards, campaign source fields, and owner queues',
    ],
    workflows: [
      'Summarise new leads and identify the next best sales action.',
      'Draft follow-up emails for review after calls, forms, or missed replies.',
      'Flag stale deals, missing fields, and unclear next steps in the pipeline.',
      'Prepare CRM update suggestions from approved meeting notes or inbox context.',
      'Route high-intent enquiries to the right owner with source evidence attached.',
    ],
    guardrails: [
      'Start with suggested updates before automatic CRM writes.',
      'Keep deal-stage moves, pricing promises, and external emails human-approved.',
      'Restrict access to the HubSpot objects and properties the workflow needs.',
      'Log the source thread, form, or note behind every suggested change.',
    ],
  },
  "openclaw-shopify-automation": {
    title: 'OpenClaw Shopify',
    highlight: 'Automation',
    badge: 'Shopify Workflow Guide 2026',
    description: 'How ecommerce teams can use OpenClaw to support Shopify order queries, product updates, customer support, fulfilment checks, and content workflows safely.',
    metaTitle: 'OpenClaw Shopify Automation: Orders, Support and Product Workflows',
    metaDescription: 'A practical guide to OpenClaw Shopify automation for order queries, support triage, product content, fulfilment checks, and approval-safe ecommerce workflows.',
    platform: 'Shopify',
    buyer: 'ecommerce and retail teams using Shopify',
    first: 'customer-support triage for order, delivery, and product questions',
    metric: 'Measure support response time, repeated enquiry reduction, fulfilment exception visibility, product-content preparation time, and customer-message edit rate.',
    keywords: [
      'openclaw shopify automation',
      'shopify ai agent',
      'shopify order automation',
      'ecommerce ai automation uk',
      'openclaw ecommerce automation',
    ],
    systems: [
      'Shopify orders, products, customers, tags, and fulfilment status',
      'support inboxes, chat transcripts, return requests, and delivery updates',
      'product descriptions, collection pages, FAQs, and stock notices',
      'analytics, abandoned-checkout notes, and operational exception lists',
    ],
    workflows: [
      'Summarise customer order queries and prepare response drafts.',
      'Flag fulfilment exceptions, repeat complaints, or delayed responses.',
      'Draft product descriptions, FAQs, and collection copy for review.',
      'Prepare return or exchange notes for the support team.',
      'Generate weekly ecommerce issue summaries from support and order data.',
    ],
    guardrails: [
      'Do not refund, cancel, discount, or message customers automatically during rollout.',
      'Keep payment, chargeback, complaint, and legal issues human-owned.',
      'Limit access to the Shopify resources needed for the workflow.',
      'Review product claims, prices, availability, and delivery promises before publishing.',
    ],
  },
  "openclaw-xero-automation": {
    title: 'OpenClaw Xero',
    highlight: 'Automation',
    badge: 'Xero Workflow Guide 2026',
    description: 'How finance teams and accountants can use OpenClaw around Xero bookkeeping, invoice chasing, document checks, reporting prep, and approval-safe finance workflows.',
    metaTitle: 'OpenClaw Xero Automation: Bookkeeping, Invoices and Reports',
    metaDescription: 'A practical guide to OpenClaw Xero automation for bookkeeping support, invoice chasing, document checks, finance reports, and approval-safe accounting workflows.',
    platform: 'Xero',
    buyer: 'finance teams, bookkeepers, and accountants using Xero',
    first: 'invoice and document triage before human review',
    metric: 'Measure missing-document reduction, invoice-chasing time, month-end query volume, finance admin hours, and correction rate after review.',
    keywords: [
      'openclaw xero automation',
      'xero ai automation',
      'xero bookkeeping automation',
      'openclaw accounting workflow',
      'invoice chasing automation uk',
    ],
    systems: [
      'Xero contacts, invoices, bills, bank reconciliation notes, and reports',
      'supplier emails, receipt uploads, purchase orders, and payment queries',
      'month-end checklists, exception lists, and client-response logs',
      'shared drives, bookkeeping inboxes, and approval trails',
    ],
    workflows: [
      'Flag invoices, receipts, or bills with missing information.',
      'Prepare invoice-chasing drafts without sending them automatically.',
      'Summarise supplier or client finance queries for review.',
      'Create month-end exception lists from documents and Xero context.',
      'Draft management-report notes from approved figures and commentary.',
    ],
    guardrails: [
      'Never approve payments, file returns, or alter accounting records without review.',
      'Keep bank, tax, payroll, and regulated advice human-owned.',
      'Use read-only or draft workflows until permissions are proven.',
      'Log source documents behind every suggested bookkeeping action.',
    ],
  },
  "openclaw-quickbooks-automation": {
    title: 'OpenClaw QuickBooks',
    highlight: 'Automation',
    badge: 'QuickBooks Workflow Guide 2026',
    description: 'How small businesses can use OpenClaw with QuickBooks to prepare bookkeeping notes, chase missing details, support invoice workflows, and keep finance approvals safe.',
    metaTitle: 'OpenClaw QuickBooks Automation: Invoices, Expenses and Bookkeeping',
    metaDescription: 'A practical guide to OpenClaw QuickBooks automation for invoices, expenses, bookkeeping notes, missing documents, reporting prep, and approval-safe finance workflows.',
    platform: 'QuickBooks',
    buyer: 'small businesses and finance teams using QuickBooks',
    first: 'missing-document and invoice follow-up workflow',
    metric: 'Measure admin time saved, missing-document reduction, debtor follow-up speed, month-end delay, and human correction rate.',
    keywords: [
      'openclaw quickbooks automation',
      'quickbooks ai automation',
      'quickbooks bookkeeping workflow',
      'invoice automation quickbooks',
      'openclaw finance automation',
    ],
    systems: [
      'QuickBooks invoices, expenses, customers, vendors, and reports',
      'shared bookkeeping inboxes, receipts, statements, and supplier messages',
      'month-end task lists, owner approvals, and accountant handoffs',
      'payment-query notes, estimate details, and document storage',
    ],
    workflows: [
      'Identify incomplete invoice or expense records for review.',
      'Draft missing-receipt or missing-detail requests.',
      'Summarise finance inbox threads into action-ready notes.',
      'Prepare weekly bookkeeping exception reports.',
      'Draft simple debtor-chasing messages for owner approval.',
    ],
    guardrails: [
      'Keep payment decisions, tax treatment, bank changes, and submissions human-approved.',
      'Do not send finance emails automatically until the workflow is trusted.',
      'Restrict access to the QuickBooks areas needed for the pilot.',
      'Keep a clear audit trail from source document to suggested action.',
    ],
  },
  "openclaw-salesforce-automation": {
    title: 'OpenClaw Salesforce',
    highlight: 'Automation',
    badge: 'Salesforce Workflow Guide 2026',
    description: 'How sales teams can use OpenClaw around Salesforce pipeline hygiene, lead routing, account research, follow-up drafting, and manager reporting with guardrails.',
    metaTitle: 'OpenClaw Salesforce Automation: Leads, Pipeline and Reporting',
    metaDescription: 'A practical guide to OpenClaw Salesforce automation for lead routing, pipeline hygiene, follow-up drafting, account notes, reporting, and approval-safe CRM workflows.',
    platform: 'Salesforce',
    buyer: 'sales operations and revenue teams using Salesforce',
    first: 'pipeline hygiene and follow-up preparation',
    metric: 'Measure stale opportunity reduction, CRM completeness, lead response time, manager reporting time, and edits required on generated notes.',
    keywords: [
      'openclaw salesforce automation',
      'salesforce ai agent workflow',
      'salesforce pipeline automation',
      'openclaw sales operations',
      'salesforce lead routing ai',
    ],
    systems: [
      'Salesforce leads, contacts, accounts, opportunities, and tasks',
      'sales inboxes, call notes, meeting transcripts, and proposal documents',
      'manager dashboards, pipeline reports, and stale-stage views',
      'handoff notes between SDRs, account executives, operations, and delivery',
    ],
    workflows: [
      'Flag opportunities with missing next steps or stale activity.',
      'Draft follow-up notes from calls, meetings, and email context.',
      'Prepare lead summaries before owner assignment.',
      'Create manager-ready pipeline risk summaries.',
      'Identify CRM records needing source, owner, or qualification cleanup.',
    ],
    guardrails: [
      'Do not move stages, edit revenue forecasts, or send customer commitments without approval.',
      'Limit permissions to the relevant Salesforce objects and fields.',
      'Protect enterprise, legal, procurement, and pricing conversations.',
      'Keep source links for every generated account or opportunity note.',
    ],
  },
  "openclaw-pipedrive-automation": {
    title: 'OpenClaw Pipedrive',
    highlight: 'Automation',
    badge: 'Pipedrive Workflow Guide 2026',
    description: 'How small sales teams can use OpenClaw with Pipedrive for lead follow-up, deal hygiene, activity reminders, proposal handoffs, and simple sales reporting.',
    metaTitle: 'OpenClaw Pipedrive Automation: Deals, Follow-Ups and Sales Tasks',
    metaDescription: 'A practical guide to OpenClaw Pipedrive automation for deal hygiene, follow-ups, activity reminders, proposal handoffs, and approval-safe sales workflows.',
    platform: 'Pipedrive',
    buyer: 'small and mid-sized sales teams using Pipedrive',
    first: 'deal follow-up and stale-pipeline cleanup',
    metric: 'Measure overdue activity reduction, lead response time, follow-up consistency, proposal handoff clarity, and pipeline cleanup time.',
    keywords: [
      'openclaw pipedrive automation',
      'pipedrive ai automation',
      'pipedrive sales workflow',
      'sales follow up automation uk',
      'openclaw deal management',
    ],
    systems: [
      'Pipedrive deals, people, organisations, activities, notes, and pipelines',
      'sales inboxes, call notes, proposal docs, and quote requests',
      'activity reminders, owner queues, and handoff tasks',
      'weekly sales summaries and pipeline risk lists',
    ],
    workflows: [
      'Find deals with no recent activity and prepare reminder tasks.',
      'Draft follow-up emails from notes and previous context.',
      'Summarise new enquiries into deal-ready qualification notes.',
      'Prepare proposal or quote handoff checklists.',
      'Generate weekly pipeline cleanup reports for the owner.',
    ],
    guardrails: [
      'Keep pricing, commitments, and external sends human-reviewed.',
      'Start with suggestions, tasks, and summaries before automatic updates.',
      'Avoid broad CRM access when a single pipeline is enough.',
      'Log the source context behind each suggested follow-up.',
    ],
  },
  "openclaw-zendesk-automation": {
    title: 'OpenClaw Zendesk',
    highlight: 'Automation',
    badge: 'Zendesk Workflow Guide 2026',
    description: 'How support teams can use OpenClaw around Zendesk ticket triage, response drafting, knowledge-base gaps, escalation routing, and customer-support reporting.',
    metaTitle: 'OpenClaw Zendesk Automation: Ticket Triage and Support Drafts',
    metaDescription: 'A practical guide to OpenClaw Zendesk automation for support ticket triage, reply drafts, escalation routing, knowledge-base gaps, and approval-safe customer workflows.',
    platform: 'Zendesk',
    buyer: 'customer support teams using Zendesk',
    first: 'ticket triage and first-response drafting',
    metric: 'Measure first-response time, backlog age, escalation accuracy, macro usefulness, repeat ticket themes, and human edit rate on reply drafts.',
    keywords: [
      'openclaw zendesk automation',
      'zendesk ai workflow',
      'zendesk ticket triage',
      'customer support ai automation',
      'openclaw support automation',
    ],
    systems: [
      'Zendesk tickets, macros, help-centre articles, tags, and SLAs',
      'customer emails, chat transcripts, order data, and product context',
      'escalation queues, internal notes, and supervisor review lists',
      'support metrics, repeat-issue reports, and knowledge-base gaps',
    ],
    workflows: [
      'Classify new tickets and summarise the customer issue.',
      'Draft first responses for agent review.',
      'Flag urgent, sensitive, or repeated issues for escalation.',
      'Identify missing help-centre articles from repeated tickets.',
      'Prepare weekly support-quality and backlog summaries.',
    ],
    guardrails: [
      'Do not send customer replies automatically until quality is proven.',
      'Keep complaints, refunds, legal threats, and vulnerable-customer issues human-owned.',
      'Limit access to the products, queues, and articles the workflow needs.',
      'Keep source ticket IDs and evidence beside every draft.',
    ],
  },
  "openclaw-intercom-automation": {
    title: 'OpenClaw Intercom',
    highlight: 'Automation',
    badge: 'Intercom Workflow Guide 2026',
    description: 'How teams can use OpenClaw with Intercom for chat triage, sales/support handoffs, help-centre improvements, lead qualification, and safe response drafting.',
    metaTitle: 'OpenClaw Intercom Automation: Chat Triage and Help-Centre Workflows',
    metaDescription: 'A practical guide to OpenClaw Intercom automation for chat triage, response drafts, support handoffs, lead qualification, and help-centre improvement workflows.',
    platform: 'Intercom',
    buyer: 'support, success, and sales teams using Intercom',
    first: 'chat triage and owner handoff preparation',
    metric: 'Measure response time, handoff clarity, unresolved chat reduction, help-centre gap closure, and human edit rate on drafted replies.',
    keywords: [
      'openclaw intercom automation',
      'intercom ai workflow',
      'intercom chat triage',
      'openclaw live chat automation',
      'customer chat ai automation',
    ],
    systems: [
      'Intercom conversations, inboxes, customer profiles, help-centre articles, and tags',
      'sales leads, support issues, onboarding questions, and feature requests',
      'handoff notes between support, sales, product, and account managers',
      'response templates, escalation rules, and reporting views',
    ],
    workflows: [
      'Summarise chat conversations before handoff.',
      'Draft safe replies for common support or sales questions.',
      'Identify conversations that need escalation or account-owner review.',
      'Find help-centre gaps from repeated chat themes.',
      'Prepare lead qualification notes from website chats.',
    ],
    guardrails: [
      'Keep automated replies disabled until the team trusts quality and tone.',
      'Protect complaints, pricing negotiations, contracts, and sensitive account data.',
      'Review help-centre changes before publishing.',
      'Keep source conversation links with every generated summary or draft.',
    ],
  },
  "openclaw-stripe-automation": {
    title: 'OpenClaw Stripe',
    highlight: 'Automation',
    badge: 'Stripe Workflow Guide 2026',
    description: 'How businesses can use OpenClaw around Stripe payment operations, invoice queries, failed-payment follow-up, subscription admin, and finance support workflows.',
    metaTitle: 'OpenClaw Stripe Automation: Payments, Invoices and Subscriptions',
    metaDescription: 'A practical guide to OpenClaw Stripe automation for payment operations, invoice queries, failed-payment follow-up, subscription admin, and approval-safe finance workflows.',
    platform: 'Stripe',
    buyer: 'subscription, finance, and operations teams using Stripe',
    first: 'failed-payment and customer billing-query triage',
    metric: 'Measure failed-payment recovery follow-up time, billing-query delay, subscription exception visibility, support handoff speed, and customer-message edit rate.',
    keywords: [
      'openclaw stripe automation',
      'stripe payment automation',
      'stripe invoice workflow',
      'failed payment automation',
      'openclaw subscription admin',
    ],
    systems: [
      'Stripe customers, invoices, subscriptions, payments, refunds, disputes, and webhooks',
      'support inboxes, billing queries, renewal reminders, and account notes',
      'finance reports, dunning processes, and subscription exception lists',
      'CRM records, helpdesk tickets, and customer success handoffs',
    ],
    workflows: [
      'Summarise failed-payment cases and prepare follow-up drafts.',
      'Flag billing queries that need finance or support review.',
      'Prepare subscription exception lists for cancellations, renewals, or failed invoices.',
      'Draft internal notes for customer success teams before account calls.',
      'Generate weekly payment-operations summaries from approved data.',
    ],
    guardrails: [
      'Never refund, charge, cancel, or alter subscriptions without explicit approval.',
      'Treat disputes, chargebacks, tax, legal, and vulnerable-customer issues as human-owned.',
      'Use scoped API access and careful logging around payment data.',
      'Review every customer-facing billing message before sending.',
    ],
  },
  "openclaw-calendly-automation": {
    title: 'OpenClaw Calendly',
    highlight: 'Automation',
    badge: 'Calendly Workflow Guide 2026',
    description: 'How service businesses can use OpenClaw with Calendly for booking prep, qualification, reminders, no-show reduction, and follow-up workflows.',
    metaTitle: 'OpenClaw Calendly Automation: Booking Prep, Reminders and Follow-Ups',
    metaDescription: 'A practical guide to OpenClaw Calendly automation for booking prep, lead qualification, reminders, no-show reduction, meeting notes, and approval-safe follow-ups.',
    platform: 'Calendly',
    buyer: 'sales, consulting, and service teams using Calendly',
    first: 'booking qualification and pre-meeting briefing',
    metric: 'Measure no-shows, meeting-prep time, qualification accuracy, speed of follow-up, and percentage of calls that progress to a useful next step.',
    keywords: [
      'openclaw calendly automation',
      'calendly ai workflow',
      'appointment booking automation',
      'meeting follow up automation uk',
      'openclaw booking workflow',
    ],
    systems: [
      'Calendly bookings, invitee answers, meeting types, reminders, and cancellation data',
      'CRM records, email threads, website forms, and previous customer notes',
      'calendar events, meeting notes, follow-up templates, and owner task lists',
      'lead scoring, qualification forms, and post-call next steps',
    ],
    workflows: [
      'Summarise new bookings into a pre-meeting brief.',
      'Flag poorly qualified calls before they waste diary time.',
      'Prepare reminder or reschedule drafts for review.',
      'Turn meeting notes into follow-up tasks and draft emails.',
      'Create weekly booking-quality and no-show reports.',
    ],
    guardrails: [
      'Do not cancel, reschedule, or message invitees automatically during rollout.',
      'Protect personal data in booking answers and calendar context.',
      'Keep pricing, promises, and proposal follow-ups reviewed.',
      'Make sure every automated note names the source booking and owner.',
    ],
  },
  "openclaw-asana-automation": {
    title: 'OpenClaw Asana',
    highlight: 'Automation',
    badge: 'Asana Workflow Guide 2026',
    description: 'How delivery teams can use OpenClaw around Asana project updates, task hygiene, meeting actions, status summaries, and handoff reminders.',
    metaTitle: 'OpenClaw Asana Automation: Tasks, Updates and Project Handoffs',
    metaDescription: 'A practical guide to OpenClaw Asana automation for project updates, task hygiene, meeting actions, status summaries, handoff reminders, and approval-safe workflows.',
    platform: 'Asana',
    buyer: 'project, delivery, and operations teams using Asana',
    first: 'meeting action capture and stale-task cleanup',
    metric: 'Measure stale-task reduction, meeting follow-through, update preparation time, blocker visibility, and correction rate on generated tasks.',
    keywords: [
      'openclaw asana automation',
      'asana ai workflow',
      'asana task automation',
      'project management ai automation',
      'openclaw project updates',
    ],
    systems: [
      'Asana projects, tasks, comments, owners, due dates, and status updates',
      'meeting notes, client messages, delivery docs, and project briefs',
      'blocked-task lists, handoff queues, and weekly status reports',
      'team calendars, approvals, and priority views',
    ],
    workflows: [
      'Turn meeting notes into proposed Asana tasks.',
      'Flag overdue or ownerless tasks before they derail delivery.',
      'Draft weekly project status updates from approved task context.',
      'Summarise blockers and prepare handoff notes.',
      'Create review queues for tasks waiting on client or manager input.',
    ],
    guardrails: [
      'Start with suggested tasks and updates, not automatic project rewrites.',
      'Keep client commitments, budgets, scope changes, and sensitive HR notes human-approved.',
      'Limit access to the projects needed for the pilot.',
      'Record the source note or conversation behind each suggested task.',
    ],
  },
  "openclaw-clickup-automation": {
    title: 'OpenClaw ClickUp',
    highlight: 'Automation',
    badge: 'ClickUp Workflow Guide 2026',
    description: 'How teams can use OpenClaw with ClickUp for task routing, project summaries, SOP upkeep, recurring reminders, and operational reporting.',
    metaTitle: 'OpenClaw ClickUp Automation: Tasks, SOPs and Project Reporting',
    metaDescription: 'A practical guide to OpenClaw ClickUp automation for task routing, project summaries, SOP upkeep, recurring reminders, reporting, and approval-safe workflows.',
    platform: 'ClickUp',
    buyer: 'operations, project, and agency teams using ClickUp',
    first: 'task routing, status summaries, and recurring follow-up control',
    metric: 'Measure overdue task reduction, status-report time, owner clarity, SOP update frequency, and human correction rate on suggested changes.',
    keywords: [
      'openclaw clickup automation',
      'clickup ai workflow',
      'clickup task automation',
      'openclaw project management',
      'clickup reporting automation',
    ],
    systems: [
      'ClickUp spaces, folders, lists, tasks, custom fields, docs, and dashboards',
      'client briefs, meeting notes, support requests, and delivery handoffs',
      'SOPs, recurring tasks, owner queues, and operational scorecards',
      'internal alerts, approvals, and weekly reporting workflows',
    ],
    workflows: [
      'Summarise new requests and propose the right list, owner, and priority.',
      'Flag overdue, blocked, or unclear tasks for review.',
      'Draft status summaries from task comments and fields.',
      'Find SOPs or docs that need updates after repeated questions.',
      'Prepare recurring reminder notes without spamming the team.',
    ],
    guardrails: [
      'Do not mass-edit task structures or statuses without a preview.',
      'Keep client commitments, scope changes, HR notes, and billing tasks approved.',
      'Use scoped access to the space or folder being piloted.',
      'Keep generated updates traceable to original comments, docs, or requests.',
    ],
  },
};

function list(items: string[]) { return items.map((item) => `<li>${item}</li>`).join(""); }

export function getOpsPlatformBlastMetadata(slug: string): Metadata {
  const guide = guides[slug];
  return {
    title: guide.metaTitle,
    description: guide.metaDescription,
    keywords: guide.keywords,
    alternates: { canonical: `https://openclawconsultant.co.uk/guides/${slug}` },
    openGraph: { title: guide.metaTitle, description: guide.metaDescription, url: `https://openclawconsultant.co.uk/guides/${slug}`, type: "article" },
  };
}

export function OpsPlatformBlastGuidePage({ slug }: { slug: string }) {
  const guide = guides[slug];
  return (
    <GuidePageTemplate
      canonicalPath={`/guides/${slug}`}
      badge={guide.badge}
      title={guide.title}
      highlight={guide.highlight}
      description={guide.description}
      primaryCtaLabel="Read the guide"
      primaryCtaHref="#guide"
      secondaryCtaLabel="Plan this workflow"
      secondaryCtaHref="#assessment"
      stats={[{ value: "1 workflow", label: "Prove value before scale" }, { value: "Scoped access", label: "Only connect what is needed" }, { value: "Approval first", label: "Keep risky actions reviewed" }]}
      sections={[
        { id: "fit", title: `Where OpenClaw fits ${guide.platform}`, html: `<p>${guide.buyer} usually do not need a vague AI transformation programme. They need one painful handoff made more reliable. OpenClaw is useful when it can read the right context, prepare the next action, and keep people in control of anything that affects customers, money, compliance, or trust.</p><p>A good first project is ${guide.first}. It is frequent enough to measure, narrow enough to inspect, and practical enough for a team to feel the difference without rebuilding the whole operation.</p>` },
        { id: "systems", title: "Systems and handoffs to map", html: `<p>Before building anything, map the exact places OpenClaw needs to read from, write to, or prepare work for review. For ${guide.platform}, common touchpoints include:</p><ul>${list(guide.systems)}</ul><p>The goal is not to connect everything on day one. The goal is to remove one operational drag while keeping access, ownership, and review rules clear.</p>` },
        { id: "workflows", title: "Useful workflows to test", html: `<p>These are practical candidates for a first pilot:</p><ul>${list(guide.workflows)}</ul><p>Each workflow should have an owner, a review rule, and one success metric before it goes near a live business process.</p>` },
        { id: "guardrails", title: "Approval and security guardrails", html: `<p>Platform automation becomes risky when permissions are broad and outcomes are vague. Keep the first version constrained:</p><ul>${list(guide.guardrails)}</ul><p>For most teams, the strongest rollout is assisted automation first: OpenClaw prepares, checks, drafts, routes, or reminds, while humans approve actions with commercial or reputational downside.</p>` },
        { id: "measurement", title: "How to measure value", html: `<p>${guide.metric}</p><p>If the workflow creates more activity but does not reduce delay, errors, rework, or missed handoffs, tighten the process before adding more integrations. Related reading: <a href="/guides/openclaw-integrations-guide">OpenClaw Integrations Guide</a>, <a href="/guides/openclaw-security-best-practices">OpenClaw Security Best Practices</a>, and <a href="/guides/openclaw-managed-service-uk">OpenClaw Managed Service UK</a>.</p>` },
      ]}
      faqs={[{ question: `Can OpenClaw automate ${guide.platform}?`, answer: `Yes, if the workflow is scoped around specific handoffs, permissions, and review rules. ${guide.first} is a sensible first candidate.` }, { question: "Should the workflow run automatically?", answer: "Start with summaries, drafts, suggested updates, or private review queues. Automatic writes should come later, after quality, logging, and rollback are proven." }, { question: "What access should OpenClaw get?", answer: "Only the accounts, records, folders, queues, projects, or objects needed for the workflow. Avoid broad admin permissions for early pilots." }, { question: "How long does a pilot take?", answer: "A narrow workflow can usually show signal in a few weeks if it happens often enough, has a clear owner, and is measured against a real baseline." }]}
      relatedGuides={commonRelatedGuides}
      sidebarTitle={`${guide.platform} rollout rule`}
      sidebarPoints={["Connect the smallest commercially useful workflow first.", "Keep external sends, deletions, payment changes, and sensitive updates approved.", "Measure delay reduced and mistakes avoided, not just tasks created."]}
      assessmentDescription={`Blue Canvas can map your ${guide.platform} workflow, define the access rules, and build an OpenClaw pilot with clear approvals and measurable outcomes.`}
      contactTitle={`Book a ${guide.platform} automation review`}
      contactDescription="Tell us what platform workflow is slow, repetitive, or easy to drop"
      practicalTakeawayText={`${guide.platform} automation works best when OpenClaw removes handoff drag without hiding responsibility. Start narrow, keep approval visible, and expand only after the pilot proves value.`}
    />
  );
}
