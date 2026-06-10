import type { Metadata } from "next";
import GuidePageTemplate from "@/components/GuidePageTemplate";

interface BlastGuide {
  title: string;
  highlight: string;
  badge: string;
  description: string;
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
}

function makeWorkflowGuide(guide: BlastGuide): BlastGuide {
  return guide;
}

interface IndustryGuideInput {
  title: string;
  highlight: string;
  badge: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  industry: string;
  buyer: string;
  firstWorkflow: string;
  workflowExamples: string[];
  riskNotes: string[];
  relatedGuides: { href: string; title: string }[];
}

function makeIndustryGuide(input: IndustryGuideInput): BlastGuide {
  const workflowList = input.workflowExamples.map((item) => `<li>${item}</li>`).join("");
  const riskList = input.riskNotes.map((item) => `<li>${item}</li>`).join("");

  return makeWorkflowGuide({
    title: input.title,
    highlight: input.highlight,
    badge: input.badge,
    description: input.description,
    metaTitle: input.metaTitle,
    metaDescription: input.metaDescription,
    keywords: input.keywords,
    stats: [
      { value: "1 workflow", label: "Start narrow before wider rollout" },
      { value: "Human review", label: "Keep judgement and risk owned" },
      { value: "Measured pilot", label: "Prove value before scaling" },
    ],
    sections: [
      {
        id: "why",
        title: `Why OpenClaw fits ${input.industry}`,
        html: `<p>${input.buyer} usually do not need another generic AI tool. They need a reliable way to remove recurring admin, speed up communication, and keep important handoffs from disappearing between inboxes, spreadsheets, CRMs, documents, calendars, and internal messages.</p><p>OpenClaw is useful when the workflow needs more than a chatbot. It can check sources, draft structured outputs, update systems, produce reminders, prepare reports, and keep a human in the loop for decisions that affect clients, money, compliance, or trust.</p><p>For ${input.industry}, the best first win is usually operational: fewer missed follow-ups, cleaner notes, faster routing, and better visibility over work that currently depends on memory.</p>`,
      },
      {
        id: "workflows",
        title: "High-value workflows to test first",
        html: `<p>The strongest pilots are repetitive, commercially visible, and safe to run with approval gates. For most teams, ${input.firstWorkflow} is a better starting point than trying to automate the whole business at once.</p><ul>${workflowList}</ul><p>These workflows work because they have clear inputs, clear owners, and a visible before-and-after measure. That makes them easier to scope, easier to review, and easier to improve after the first week of real use.</p>`,
      },
      {
        id: "guardrails",
        title: "Guardrails that protect the business",
        html: `<p>OpenClaw should make the team faster without hiding responsibility. The safest pattern is assisted automation first: the agent gathers evidence, prepares drafts, creates tasks, or updates low-risk records, while people approve anything sensitive.</p><ul>${riskList}</ul><p>This matters because trust is usually the constraint. A workflow that is slightly slower but reliable will beat an over-automated system that makes confident mistakes.</p>`,
      },
      {
        id: "rollout",
        title: "A practical rollout plan",
        html: `<p>Start with one workflow, one owner, and one success metric. Baseline the current process first: time spent, response delay, missed handoffs, error rate, or admin load. Then run OpenClaw in draft-and-review mode until the outputs are consistent enough to trust.</p><p>After the first workflow proves value, expand into adjacent systems. Good next steps often include CRM updates, inbox triage, reporting automation, meeting-note workflows, document processing, or scheduled exception checks.</p><p>Related guides worth reading next include <a href="/guides/openclaw-implementation-consultant-uk">OpenClaw Implementation Consultant UK</a>, <a href="/guides/openclaw-proof-of-concept-uk">OpenClaw Proof of Concept UK</a>, and <a href="/guides/ai-governance-compliance-uk">AI Governance &amp; Compliance UK</a>.</p>`,
      },
    ],
    faqs: [
      { question: `Can OpenClaw work for ${input.industry}?`, answer: `Yes, if the use case is scoped around a real recurring workflow rather than a vague AI transformation idea. ${input.firstWorkflow} is often a strong first candidate.` },
      { question: "Should the agent act automatically?", answer: "Start with draft, prepare, summarise, and route actions. Add automatic writes only after the workflow has clear rules, logs, and approval boundaries." },
      { question: "What should we measure?", answer: "Track saved time, faster response, fewer missed handoffs, cleaner records, lower error rate, and human edit rate on drafts." },
      { question: "How long should a pilot take?", answer: "A focused pilot can usually show signal in a few weeks if the workflow happens often enough and someone owns review." },
    ],
    relatedGuides: input.relatedGuides,
    sidebarTitle: `${input.industry} rollout rule`,
    sidebarPoints: [
      "Automate the repeatable admin before judgement-heavy decisions.",
      "Keep approvals visible wherever trust, money, or compliance is involved.",
      "Use one narrow pilot to prove the operating model before expanding.",
    ],
    ctaLabel: "Plan a workflow pilot",
    contactTitle: `Book an OpenClaw review for ${input.industry}`,
    contactDescription: "Tell us which workflow is slow, repetitive, or easy to drop",
    assessmentDescription: `Blue Canvas can map your ${input.industry} workflow, identify the safest first OpenClaw pilot, and build practical automation with approval points where they matter.`,
    practicalTakeawayText: `OpenClaw is most useful in ${input.industry} when it removes repetitive operational drag without taking ownership away from the people responsible for outcomes. Start narrow, measure honestly, and scale only after the pilot proves itself.`,
  });
}

const guides: Record<string, BlastGuide> = {
  "openclaw-for-law-firms": makeIndustryGuide({
    title: "OpenClaw for Law",
    highlight: "Firms",
    badge: "Legal Workflow Guide 2026",
    description: "How UK law firms can use OpenClaw for intake, document admin, matter updates, and internal follow-up without weakening professional judgement.",
    metaTitle: "OpenClaw for Law Firms: Intake, Documents and Matter Admin",
    metaDescription: "A practical guide to OpenClaw for law firms, covering client intake, document workflows, matter updates, compliance guardrails, and rollout planning.",
    keywords: ["openclaw for law firms", "ai automation for law firms uk", "legal workflow automation", "law firm ai agent", "openclaw legal automation"],
    industry: "law firms",
    buyer: "Law firms",
    firstWorkflow: "client intake triage and matter admin",
    workflowExamples: ["summarising new enquiries before solicitor review", "preparing matter-opening checklists", "drafting non-sensitive client update notes for approval", "tracking missing documents, dates, and follow-up actions"],
    riskNotes: ["legal advice, fee quotes, undertakings, complaints, and risk decisions should stay solicitor-owned", "client confidentiality and source logging need explicit controls", "outputs should be reviewable before anything reaches a client"],
    relatedGuides: [
      { href: "/guides/ai-for-legal-uk", title: "AI for Law Firms: Legal Automation" },
      { href: "/guides/ai-agents-for-solicitors", title: "AI Agents for Solicitors" },
      { href: "/guides/openclaw-document-processing", title: "OpenClaw Document Processing" },
      { href: "/guides/openclaw-compliance-checklist-uk", title: "OpenClaw Compliance Checklist UK" },
    ],
  }),
  "openclaw-for-accounting-firms": makeIndustryGuide({
    title: "OpenClaw for Accounting",
    highlight: "Firms",
    badge: "Accountancy Automation Guide 2026",
    description: "How accountants can use OpenClaw to reduce client-chasing, month-end admin, document handling, and reporting drag.",
    metaTitle: "OpenClaw for Accounting Firms: Client Chasing and Month-End Admin",
    metaDescription: "How accounting firms can use OpenClaw for client document chasing, bookkeeping admin, reporting workflows, CRM notes, and approval-safe automation.",
    keywords: ["openclaw for accounting firms", "accountancy automation uk", "ai automation for accountants", "client document chasing automation", "openclaw accountants"],
    industry: "accounting firms",
    buyer: "Accounting firms",
    firstWorkflow: "client document chasing and month-end task tracking",
    workflowExamples: ["checking which client records are still missing", "drafting polite follow-up messages for approval", "summarising bookkeeping questions from inbox threads", "preparing weekly client-service exception lists"],
    riskNotes: ["tax advice, filing decisions, and client-specific recommendations need qualified review", "client data access should be limited to the agreed workflow", "message drafts should be checked until tone and accuracy are proven"],
    relatedGuides: [
      { href: "/guides/openclaw-accountants-automation", title: "OpenClaw for Accountants: Automation" },
      { href: "/guides/ai-agents-for-accountants", title: "AI Agents for Accountants UK" },
      { href: "/guides/automate-accounts-bookkeeping-ai", title: "Automate Accounts & Bookkeeping with AI" },
      { href: "/guides/openclaw-crm-automation", title: "OpenClaw CRM Automation" },
    ],
  }),
  "openclaw-for-estate-agents": makeIndustryGuide({
    title: "OpenClaw for Estate",
    highlight: "Agents",
    badge: "Estate Agency Workflow Guide 2026",
    description: "How estate agencies can use OpenClaw for valuation enquiries, viewing follow-up, vendor updates, and sales admin without losing the human relationship.",
    metaTitle: "OpenClaw for Estate Agents: Valuation and Viewing Follow-Up",
    metaDescription: "A practical guide to OpenClaw for estate agents, including valuation enquiries, viewing follow-up, vendor updates, CRM notes, and workflow guardrails.",
    keywords: ["openclaw for estate agents", "estate agency automation uk", "ai automation for estate agents", "valuation follow up automation", "property crm automation"],
    industry: "estate agents",
    buyer: "Estate agencies",
    firstWorkflow: "valuation enquiry capture and viewing follow-up",
    workflowExamples: ["summarising valuation enquiries and buyer intent", "drafting viewing follow-up notes", "preparing vendor update briefs", "flagging stale leads and missed next actions"],
    riskNotes: ["pricing advice, negotiation, complaints, and sensitive vendor conversations should stay agent-led", "AI should support relationship quality rather than flatten it", "CRM writes need deduplication and clear ownership"],
    relatedGuides: [
      { href: "/guides/ai-agents-estate-agents", title: "AI Agents for Estate Agents UK" },
      { href: "/guides/ai-agents-for-real-estate", title: "AI Agents for Real Estate" },
      { href: "/guides/openclaw-crm-automation", title: "OpenClaw CRM Automation" },
      { href: "/guides/ai-lead-response-automation-uk", title: "AI Lead Response Automation UK" },
    ],
  }),
  "openclaw-for-construction-companies": makeIndustryGuide({
    title: "OpenClaw for Construction",
    highlight: "Companies",
    badge: "Construction Admin Guide 2026",
    description: "How construction firms can use OpenClaw for enquiries, subcontractor admin, document chasing, reporting, and site-office workflows.",
    metaTitle: "OpenClaw for Construction Companies: Admin, Reports and Handoffs",
    metaDescription: "How UK construction companies can use OpenClaw for enquiry handling, subcontractor admin, document chasing, progress reporting, and operational handoffs.",
    keywords: ["openclaw for construction companies", "construction admin automation", "ai automation construction uk", "site reporting automation", "subcontractor document chasing"],
    industry: "construction companies",
    buyer: "Construction companies",
    firstWorkflow: "document chasing and site-office admin",
    workflowExamples: ["tracking missing RAMS, insurance, or onboarding documents", "summarising site updates into management briefs", "drafting client progress updates for review", "turning emails and photos into action lists"],
    riskNotes: ["health and safety decisions, contractual commitments, and commercial claims must stay human-owned", "source evidence matters when project records may be disputed", "site teams need simple handoffs, not extra admin screens"],
    relatedGuides: [
      { href: "/guides/ai-agents-construction", title: "AI Agents for Construction Companies" },
      { href: "/guides/ai-agents-construction", title: "AI for Construction: Automation Guide" },
      { href: "/guides/openclaw-document-processing", title: "OpenClaw Document Processing" },
      { href: "/guides/openclaw-reporting-automation", title: "OpenClaw Reporting Automation" },
    ],
  }),
  "openclaw-for-healthcare-clinics": makeIndustryGuide({
    title: "OpenClaw for Healthcare",
    highlight: "Clinics",
    badge: "Clinic Workflow Guide 2026",
    description: "How clinics can use OpenClaw for admin, appointment workflows, patient communication drafts, and internal reporting with careful governance.",
    metaTitle: "OpenClaw for Healthcare Clinics: Admin and Appointment Workflows",
    metaDescription: "A practical guide to OpenClaw for healthcare clinics, covering appointment admin, patient communication drafts, document handling, reporting, and safety guardrails.",
    keywords: ["openclaw for healthcare clinics", "clinic admin automation", "ai automation healthcare uk", "appointment workflow automation", "healthcare ai governance"],
    industry: "healthcare clinics",
    buyer: "Healthcare clinics",
    firstWorkflow: "appointment admin and internal task routing",
    workflowExamples: ["preparing appointment reminders and follow-up drafts", "routing admin requests to the right owner", "summarising non-clinical inbox items", "tracking missing forms and internal actions"],
    riskNotes: ["clinical advice, diagnosis, treatment decisions, and safeguarding concerns must stay with qualified professionals", "patient data access should be tightly scoped and logged", "messages should be reviewed where wording could affect care or trust"],
    relatedGuides: [
      { href: "/guides/ai-for-healthcare-uk", title: "AI in UK Healthcare: Practical Guide" },
      { href: "/guides/ai-agents-for-healthcare", title: "AI Agents for Healthcare" },
      { href: "/guides/ai-appointment-booking", title: "AI Appointment Booking for Business" },
      { href: "/guides/ai-governance-compliance-uk", title: "AI Governance & Compliance UK" },
    ],
  }),
  "openclaw-for-ecommerce-businesses": makeIndustryGuide({
    title: "OpenClaw for Ecommerce",
    highlight: "Businesses",
    badge: "Ecommerce Automation Guide 2026",
    description: "How ecommerce teams can use OpenClaw for support triage, returns admin, product data, stock exceptions, and customer follow-up.",
    metaTitle: "OpenClaw for Ecommerce Businesses: Support, Returns and Stock Admin",
    metaDescription: "How ecommerce businesses can use OpenClaw for support triage, returns workflows, product data checks, stock exceptions, and customer follow-up automation.",
    keywords: ["openclaw for ecommerce", "ecommerce automation uk", "ai ecommerce support automation", "returns admin automation", "openclaw ecommerce automation"],
    industry: "ecommerce businesses",
    buyer: "Ecommerce businesses",
    firstWorkflow: "customer support triage and returns admin",
    workflowExamples: ["classifying support tickets and drafting replies", "tracking returns and missing information", "flagging stock or fulfilment exceptions", "preparing product-data cleanup queues"],
    riskNotes: ["refunds, compensation, chargebacks, and sensitive complaints need approval rules", "inventory actions should connect to source-of-truth systems", "customer-facing replies should match brand tone and policy"],
    relatedGuides: [
      { href: "/guides/openclaw-ecommerce-automation", title: "OpenClaw E-commerce Automation" },
      { href: "/guides/ai-agents-for-ecommerce", title: "AI Agents for Ecommerce" },
      { href: "/guides/openclaw-support-ticket-automation", title: "OpenClaw Support Ticket Automation" },
      { href: "/guides/ai-inventory-management", title: "AI Inventory Management Guide" },
    ],
  }),
  "openclaw-for-property-management": makeIndustryGuide({
    title: "OpenClaw for Property",
    highlight: "Management",
    badge: "Property Management Workflow Guide 2026",
    description: "How property managers can use OpenClaw for maintenance triage, tenant updates, contractor follow-up, compliance reminders, and reporting.",
    metaTitle: "OpenClaw for Property Management: Maintenance and Tenant Admin",
    metaDescription: "A practical guide to OpenClaw for property management, covering maintenance triage, contractor chasing, tenant updates, compliance reminders, and reporting workflows.",
    keywords: ["openclaw for property management", "property management automation", "maintenance triage automation", "tenant communication automation", "ai property management uk"],
    industry: "property management",
    buyer: "Property managers",
    firstWorkflow: "maintenance triage and contractor follow-up",
    workflowExamples: ["summarising tenant maintenance reports", "routing urgent issues to the right person", "chasing contractor updates", "preparing landlord or management-company summaries"],
    riskNotes: ["legal notices, safety-critical issues, deposit disputes, and rent arrears need human review", "urgent maintenance triage should escalate clearly rather than bury risk", "tenant communication should be accurate, courteous, and logged"],
    relatedGuides: [
      { href: "/guides/ai-agents-for-property-management", title: "AI Agents for Property Management" },
      { href: "/guides/ai-agents-for-property-management", title: "AI Agents for Property Management" },
      { href: "/guides/openclaw-customer-support", title: "OpenClaw for Customer Support" },
      { href: "/guides/openclaw-operations-dashboard", title: "OpenClaw Operations Dashboard" },
    ],
  }),
  "openclaw-for-financial-advisers": makeIndustryGuide({
    title: "OpenClaw for Financial",
    highlight: "Advisers",
    badge: "Financial Services Workflow Guide 2026",
    description: "How financial advisers can use OpenClaw for client admin, meeting notes, document chasing, review reminders, and internal reporting with strong approval controls.",
    metaTitle: "OpenClaw for Financial Advisers: Client Admin and Review Workflows",
    metaDescription: "How financial advisers can use OpenClaw for client admin, meeting-note workflows, document chasing, annual review reminders, and compliant approval controls.",
    keywords: ["openclaw for financial advisers", "financial adviser automation uk", "financial services ai workflow", "client review automation", "financial services admin automation"],
    industry: "financial advisers",
    buyer: "Financial advisers",
    firstWorkflow: "client review preparation and document chasing",
    workflowExamples: ["tracking missing fact-find documents", "summarising meeting notes for adviser review", "preparing annual review task lists", "flagging client-service follow-ups before they go stale"],
    riskNotes: ["regulated advice, suitability, investment recommendations, and complaint handling must stay adviser-owned", "outputs should be auditable and tied to source records", "client communications need approval where wording affects financial decisions"],
    relatedGuides: [
      { href: "/guides/ai-for-financial-services-uk", title: "AI for Financial Services UK" },
      { href: "/guides/ai-agents-for-finance", title: "AI Agents for Finance" },
      { href: "/guides/openclaw-meeting-notes-workflow", title: "OpenClaw Meeting Notes Workflow" },
      { href: "/guides/ai-governance-compliance-uk", title: "AI Governance & Compliance UK" },
    ],
  }),
  "openclaw-crm-automation": makeWorkflowGuide({
    title: "OpenClaw CRM",
    highlight: "Automation",
    badge: "CRM Automation Guide 2026",
    description: "How UK businesses can use OpenClaw to keep CRM records cleaner, follow-up tighter, and sales/admin handoffs from going missing.",
    metaTitle: "OpenClaw CRM Automation: Cleaner Records and Follow-Up",
    metaDescription: "A practical guide to OpenClaw CRM automation for UK businesses, covering lead capture, CRM notes, follow-up, approvals, and implementation scope.",
    keywords: ["openclaw crm automation", "ai crm automation uk", "crm follow up automation", "openclaw sales automation", "ai sales admin"],
    stats: [
      { value: "CRM hygiene", label: "Stops records decaying after first contact" },
      { value: "Follow-up", label: "Turns reminders into a managed workflow" },
      { value: "Human approval", label: "Protects pricing and promises" },
    ],
    sections: [
      { id: "why", title: "Why CRM automation is a strong OpenClaw workflow", html: `<p>Most CRM problems are not caused by the CRM. They are caused by the work around it: leads arrive in different places, notes are copied late, follow-up depends on memory, and useful context stays trapped in inboxes or calls.</p><p>OpenClaw can help by watching lead sources, summarising enquiries, preparing CRM notes, assigning owners, drafting follow-up, and checking whether next steps happened. The value is cleaner commercial discipline, not a fancier database.</p>` },
      { id: "workflow", title: "What the workflow can do", html: `<p>A practical CRM workflow can capture new enquiries, classify fit and urgency, extract contact details, create or update records, draft the first follow-up, schedule reminders, and flag stale opportunities.</p><p>The workflow should also handle exceptions: missing phone numbers, duplicate leads, complaints, pricing questions, or prospects that need a senior response.</p>` },
      { id: "controls", title: "Where control belongs", html: `<p>CRM automation should not make commercial commitments without approval. Keep humans in charge of pricing, bespoke promises, sensitive accounts, and anything that changes the relationship.</p><p>The safest starting point is draft-and-log mode: OpenClaw prepares notes and follow-up, then a person approves the customer-facing message.</p>` },
      { id: "rollout", title: "How to roll it out", html: `<p>Start with one lead source and one CRM pipeline. Baseline missed follow-ups, response time, and record completeness before launch. Then review the agent's notes daily for the first week and tighten the rules.</p><p>Once the first source is reliable, expand into other inboxes, forms, calendars, or sales handoff points.</p>` },
    ],
    faqs: [
      { question: "Can OpenClaw update a CRM automatically?", answer: "Yes, if the CRM access and workflow rules are set up properly. Start with low-risk note and task updates before allowing broader changes." },
      { question: "Should AI write sales follow-up?", answer: "It can draft follow-up, but pricing, promises, and sensitive messages should stay human-approved." },
      { question: "What CRM should we use?", answer: "Use the CRM the team will actually maintain. The automation should improve the process, not mask a tool nobody trusts." },
      { question: "How do we measure success?", answer: "Track response time, record completeness, missed follow-ups, booked calls, and human edit rate on drafts." },
    ],
    relatedGuides: [
      { href: "/guides/ai-lead-response-automation-uk", title: "AI Lead Response Automation UK" },
      { href: "/guides/openclaw-lead-generation-automation", title: "OpenClaw Lead Generation Automation" },
      { href: "/guides/openclaw-integrations-guide", title: "OpenClaw Integrations Guide" },
      { href: "/guides/ai-agent-for-sales", title: "AI Agent for Sales" },
    ],
    sidebarTitle: "CRM rule",
    sidebarPoints: ["Fix one pipeline before automating every source.", "Log evidence and next steps, not vague summaries.", "Keep commercial commitments approved by humans."],
    ctaLabel: "Plan CRM automation",
    contactTitle: "Book a CRM automation review",
    contactDescription: "Tell us where CRM records or follow-up currently break down",
    assessmentDescription: "Blue Canvas can map your lead and CRM workflow, then design a practical OpenClaw setup for cleaner records, faster follow-up, and controlled sales handoffs.",
    practicalTakeawayText: "OpenClaw CRM automation is most valuable when it makes follow-up dependable. Start with one source, clean notes, clear ownership, and human approval for promises.",
  }),
  "openclaw-seo-automation": makeWorkflowGuide({
    title: "OpenClaw SEO",
    highlight: "Automation",
    badge: "SEO Automation Guide 2026",
    description: "How OpenClaw can support SEO audits, content operations, internal linking, reporting, and monitoring without turning strategy into blind automation.",
    metaTitle: "OpenClaw SEO Automation: Audits, Content and Monitoring",
    metaDescription: "A practical guide to OpenClaw SEO automation, including audit checks, content workflows, internal links, reporting, monitoring, and approval rules.",
    keywords: ["openclaw seo automation", "ai seo automation uk", "seo workflow automation", "openclaw content automation", "ai seo operations"],
    stats: [
      { value: "Audit", label: "Repeat checks without forgetting basics" },
      { value: "Content ops", label: "Turn briefs into tracked production" },
      { value: "Review", label: "Keep SEO judgement human-owned" },
    ],
    sections: [
      { id: "fit", title: "Where OpenClaw fits in SEO", html: `<p>SEO work is full of recurring checks: titles, descriptions, broken links, sitemap coverage, internal links, thin content, search-console opportunities, competitor changes, and reporting. OpenClaw can make those checks repeatable and easier to act on.</p><p>The goal is not to let an agent decide the strategy alone. The goal is to reduce missed work and give the SEO owner cleaner evidence.</p>` },
      { id: "workflows", title: "Useful SEO workflows", html: `<p>Strong first workflows include weekly technical checks, content-gap monitoring, internal-link suggestions, old-page refresh queues, SERP note-taking, report drafting, and new-content QA before publish.</p><p>OpenClaw is especially useful when the workflow crosses files, browser checks, analytics exports, CMS changes, and scheduled follow-up.</p>` },
      { id: "risk", title: "What should not be automated blindly", html: `<p>Do not blindly publish AI content, rewrite important pages without review, or chase every keyword a tool suggests. SEO automation still needs editorial judgement, brand context, and commercial prioritisation.</p><p>Use the agent to prepare evidence, drafts, and checklists. Keep final strategy and publication quality under human control.</p>` },
      { id: "measurement", title: "How to measure the workflow", html: `<p>Track shipped pages, fixed technical issues, internal links added, pages refreshed, rankings monitored, and reporting time saved. More importantly, track whether the work moved impressions, clicks, enquiries, or qualified leads.</p>` },
    ],
    faqs: [
      { question: "Can OpenClaw automate SEO?", answer: "It can automate recurring checks, drafts, reports, and monitoring. Strategy and publish quality should still be reviewed." },
      { question: "Can it publish content?", answer: "Yes where publishing is authorised, but review rules should be clear before any automated or semi-automated publication." },
      { question: "What is the safest first workflow?", answer: "A recurring SEO health check or content refresh queue is usually safer than automatic page generation." },
      { question: "How does this help agencies?", answer: "It can reduce reporting drag, keep content pipelines moving, and make routine checks consistent across clients." },
    ],
    relatedGuides: [
      { href: "/guides/ai-reporting-automation-uk", title: "AI Reporting Automation UK" },
      { href: "/guides/openclaw-browser-automation", title: "OpenClaw Browser Automation" },
      { href: "/guides/openclaw-cron-jobs", title: "OpenClaw Cron Jobs" },
      { href: "/guides/openclaw-document-processing", title: "OpenClaw Document Processing" },
    ],
    sidebarTitle: "SEO rule",
    sidebarPoints: ["Automate evidence gathering before strategic decisions.", "Use review gates before publishing content.", "Measure clicks and leads, not just task volume."],
    ctaLabel: "Review SEO workflows",
    contactTitle: "Book an SEO automation review",
    contactDescription: "Tell us which SEO checks, reports, or publishing workflows are slowing you down",
    assessmentDescription: "Blue Canvas can map your SEO operations and design OpenClaw workflows for monitoring, reporting, content QA, and controlled publishing.",
    practicalTakeawayText: "OpenClaw SEO automation should make good SEO work more consistent. Use it for checks, queues, drafts, and reporting; keep editorial judgement visible.",
  }),
  "openclaw-for-recruitment-agencies": makeWorkflowGuide({
    title: "OpenClaw for",
    highlight: "Recruitment Agencies",
    badge: "Recruitment Automation Guide 2026",
    description: "How recruitment teams can use OpenClaw for candidate screening, role summaries, follow-up, CRM notes, and admin without weakening judgement.",
    metaTitle: "OpenClaw for Recruitment Agencies: Candidate and Admin Workflows",
    metaDescription: "A practical guide to OpenClaw for recruitment agencies, covering candidate screening, CRM notes, shortlists, follow-up, compliance, and approval rules.",
    keywords: ["openclaw for recruitment agencies", "ai recruitment automation", "recruitment agency ai workflows", "candidate screening ai", "recruitment crm automation"],
    stats: [
      { value: "Shortlists", label: "Prepare, do not replace, recruiter judgement" },
      { value: "CRM notes", label: "Reduce admin after calls" },
      { value: "Follow-up", label: "Keep candidates and clients warm" },
    ],
    sections: [
      { id: "use-cases", title: "Where OpenClaw helps recruiters", html: `<p>Recruitment agencies run on speed, context, and follow-up. OpenClaw can help summarise CVs, prepare candidate notes, match role requirements, draft outreach, update CRM records, and remind consultants when follow-up is due.</p><p>The best use is recruiter support. The agent prepares the work so consultants spend more time speaking to candidates and clients.</p>` },
      { id: "screening", title: "Candidate screening with guardrails", html: `<p>AI can help compare a candidate against a role brief, highlight missing information, and prepare interview questions. It should not become an unexplained reject button.</p><p>Keep decisions reviewable. Store source evidence, avoid protected-characteristic inference, and let consultants own the shortlist.</p>` },
      { id: "crm", title: "CRM and follow-up workflows", html: `<p>After calls, OpenClaw can draft structured notes, update next actions, flag missing compliance documents, and create reminders. This is often where agencies see the quickest operational gain.</p><p>Cleaner admin means fewer dropped candidates, better handoffs, and a stronger client view of activity.</p>` },
      { id: "rollout", title: "A sensible first rollout", html: `<p>Start with one desk, one role type, and one workflow: CV summary, call-note drafting, or stale-candidate follow-up. Review outputs daily before expanding to wider screening or outbound messaging.</p>` },
    ],
    faqs: [
      { question: "Can OpenClaw screen CVs?", answer: "It can summarise and compare CVs against role criteria, but recruiters should own shortlist and rejection decisions." },
      { question: "Can it update recruitment CRMs?", answer: "Yes, where access is available and update rules are clear. Start with notes and tasks before wider automation." },
      { question: "Is AI safe in recruitment?", answer: "It can be if decisions are explainable, reviewed, and designed to avoid unfair or protected-characteristic assumptions." },
      { question: "What workflow should agencies start with?", answer: "Call-note drafting or candidate follow-up is usually safer than automated screening as a first step." },
    ],
    relatedGuides: [
      { href: "/guides/ai-recruitment-automation-uk-smes", title: "AI Recruitment Automation UK" },
      { href: "/guides/ai-agents-for-recruitment", title: "AI Agents for Recruitment Agencies" },
      { href: "/guides/openclaw-crm-automation", title: "OpenClaw CRM Automation" },
      { href: "/guides/openclaw-document-processing", title: "OpenClaw Document Processing" },
    ],
    sidebarTitle: "Recruitment rule",
    sidebarPoints: ["Use AI to prepare evidence, not hide decisions.", "Keep candidate rejection human-owned.", "Start with notes and follow-up before screening automation."],
    ctaLabel: "Review recruitment workflows",
    contactTitle: "Book a recruitment automation review",
    contactDescription: "Tell us where candidate admin, CRM notes, or follow-up slow the desk down",
    assessmentDescription: "Blue Canvas can map your recruitment desk workflow and design OpenClaw support for CV handling, CRM notes, shortlists, and follow-up.",
    practicalTakeawayText: "OpenClaw can give recruitment agencies more speed and cleaner admin, but candidate judgement should stay explainable and human-owned.",
  }),
  "openclaw-hr-automation": makeWorkflowGuide({
    title: "OpenClaw HR",
    highlight: "Automation",
    badge: "HR Automation Guide 2026",
    description: "How HR teams can use OpenClaw for onboarding, policy questions, documents, reminders, and internal support while keeping sensitive decisions controlled.",
    metaTitle: "OpenClaw HR Automation: Onboarding, Policies and Admin Support",
    metaDescription: "A practical guide to OpenClaw HR automation, including onboarding, policy support, document workflows, employee questions, and approval guardrails.",
    keywords: ["openclaw hr automation", "ai hr automation uk", "hr workflow automation", "employee onboarding ai", "openclaw onboarding"],
    stats: [
      { value: "Onboarding", label: "A strong first HR workflow" },
      { value: "Policy support", label: "Answers should cite source documents" },
      { value: "Approval", label: "Sensitive decisions stay human" },
    ],
    sections: [
      { id: "where", title: "Where HR automation helps", html: `<p>HR teams handle repeated questions, onboarding checklists, policy documents, training reminders, absence notes, probation milestones, and internal handoffs. OpenClaw can make those workflows easier to track and review.</p><p>The agent can prepare answers, summaries, reminders, and documents, but HR judgement remains essential.</p>` },
      { id: "onboarding", title: "Onboarding is often the best first workflow", html: `<p>New-starter onboarding has clear steps: documents, equipment, accounts, training, policies, introductions, and check-ins. OpenClaw can track the checklist, remind owners, answer routine questions, and flag missing steps.</p><p>This creates value without asking AI to make risky employment decisions.</p>` },
      { id: "policy", title: "Policy support needs source discipline", html: `<p>AI policy answers should be grounded in approved documents. The workflow should cite the relevant policy, flag uncertainty, and route sensitive issues to HR.</p><p>Do not let a model invent policy. If the source is missing or ambiguous, it should say so.</p>` },
      { id: "limits", title: "Where humans must stay in charge", html: `<p>Disciplinary decisions, grievances, dismissals, health issues, pay, legal risk, and sensitive personal matters need human ownership. OpenClaw can prepare timelines, summaries, and checklists, but HR owns the decision.</p>` },
    ],
    faqs: [
      { question: "Can OpenClaw answer HR policy questions?", answer: "Yes, if it uses approved policy documents and clearly flags uncertainty or sensitive issues." },
      { question: "Can HR decisions be automated?", answer: "Sensitive employment decisions should remain human-owned. AI can prepare information and checklists." },
      { question: "What is the safest first HR workflow?", answer: "Onboarding checklists, training reminders, and policy lookup are strong first workflows." },
      { question: "How do we protect employee data?", answer: "Limit access, use approved sources, log actions, and keep sensitive matters routed to HR owners." },
    ],
    relatedGuides: [
      { href: "/guides/ai-agents-for-hr", title: "AI Agents for HR" },
      { href: "/guides/ai-governance-compliance-uk", title: "AI Governance & Compliance UK" },
      { href: "/guides/openclaw-document-processing", title: "OpenClaw Document Processing" },
      { href: "/guides/ai-training-for-employees", title: "AI Training for Employees" },
    ],
    sidebarTitle: "HR rule",
    sidebarPoints: ["Ground answers in approved policies.", "Automate checklists before decisions.", "Route sensitive issues to HR owners."],
    ctaLabel: "Review HR workflows",
    contactTitle: "Book an HR automation review",
    contactDescription: "Tell us which onboarding, policy, or document workflows are repetitive",
    assessmentDescription: "Blue Canvas can map HR admin workflows and design OpenClaw support that reduces repetition without weakening human responsibility.",
    practicalTakeawayText: "OpenClaw HR automation works best around checklists, documents, and policy support. Keep employment judgement and sensitive decisions with people.",
  }),
  "openclaw-operations-dashboard": makeWorkflowGuide({
    title: "OpenClaw Operations",
    highlight: "Dashboard",
    badge: "Operations Dashboard Guide 2026",
    description: "How to use OpenClaw to turn scattered operational updates into a practical dashboard, daily brief, and exception list.",
    metaTitle: "OpenClaw Operations Dashboard: Daily Briefs and Exception Tracking",
    metaDescription: "A practical guide to OpenClaw operations dashboards, including daily briefs, KPI summaries, exception tracking, source checks, and review workflows.",
    keywords: ["openclaw operations dashboard", "ai operations dashboard", "daily business briefing ai", "openclaw reporting automation", "ai kpi summary"],
    stats: [
      { value: "Daily brief", label: "Turns scattered updates into action" },
      { value: "Exceptions", label: "Focuses attention where it matters" },
      { value: "Sources", label: "Keeps summaries verifiable" },
    ],
    sections: [
      { id: "why", title: "Why operations dashboards fail", html: `<p>Many dashboards show numbers but do not create action. Teams still have to check inboxes, spreadsheets, systems, calendars, task boards, and messages to work out what actually needs attention.</p><p>OpenClaw can sit across those sources and prepare a daily operations brief: what changed, what is late, what is blocked, what needs a decision, and what can be ignored.</p>` },
      { id: "sources", title: "What sources can feed the brief", html: `<p>Useful sources include CRMs, spreadsheets, analytics exports, inboxes, ticket systems, calendars, order systems, project boards, support queues, and manually maintained trackers.</p><p>The workflow should keep source links or evidence so managers can verify important claims quickly.</p>` },
      { id: "exceptions", title: "Focus on exceptions, not noise", html: `<p>The best operations dashboard does not repeat everything. It highlights missed follow-up, overdue tasks, unusual numbers, stalled deals, unresolved support issues, stock concerns, or anything that breaks an agreed threshold.</p><p>This makes the dashboard a management tool rather than a decorative report.</p>` },
      { id: "rollout", title: "How to start", html: `<p>Start with one daily brief for one team. Pick five to ten checks, agree thresholds, and review whether the summary changes decisions. Then add sources only when the first version is genuinely useful.</p>` },
    ],
    faqs: [
      { question: "Can OpenClaw build a dashboard?", answer: "It can prepare dashboard data, daily briefs, and exception summaries. The visual layer can be simple if the operating rhythm is clear." },
      { question: "What should be in the first brief?", answer: "Only the checks that change action: overdue work, unusual numbers, missed follow-up, blockers, and decisions needed." },
      { question: "How do we avoid noisy summaries?", answer: "Use thresholds, source links, and a clear rule that the brief should focus on exceptions rather than repeating every metric." },
      { question: "Who should own it?", answer: "One operational owner should decide checks, thresholds, and what happens when an exception appears." },
    ],
    relatedGuides: [
      { href: "/guides/ai-reporting-automation-uk", title: "AI Reporting Automation UK" },
      { href: "/guides/ai-data-analysis-for-smes", title: "AI Data Analysis for SMEs" },
      { href: "/guides/openclaw-cron-jobs", title: "OpenClaw Cron Jobs" },
      { href: "/guides/openclaw-business-systems-integration", title: "OpenClaw Business Integration" },
    ],
    sidebarTitle: "Dashboard rule",
    sidebarPoints: ["Brief exceptions, not every metric.", "Keep source evidence behind important claims.", "Start with one team and one daily rhythm."],
    ctaLabel: "Plan an ops brief",
    contactTitle: "Book an operations dashboard review",
    contactDescription: "Tell us what you check manually every morning or every week",
    assessmentDescription: "Blue Canvas can map your operational checks and design an OpenClaw dashboard or daily brief that surfaces what needs action.",
    practicalTakeawayText: "An OpenClaw operations dashboard should make decisions easier. Start with a short daily brief, source evidence, and exception rules that point to action.",
  }),
  "openclaw-retainer-uk": {
    title: "OpenClaw Retainer",
    highlight: "UK",
    badge: "OpenClaw Retainer Guide 2026",
    description: "A practical guide to buying ongoing OpenClaw support, what belongs in the monthly fee, and when a retainer is commercially justified.",
    metaTitle: "OpenClaw Retainer UK: Monthly Support, Scope and Buyer Guide",
    metaDescription: "What an OpenClaw retainer should include, how monthly support should be scoped, and when UK businesses should pay for ongoing AI agent operations.",
    keywords: ["openclaw retainer uk", "openclaw monthly support", "openclaw support retainer", "openclaw managed support", "ai agent retainer uk", "blue canvas"],
    stats: [
      { value: "1 workflow", label: "Should anchor the first retainer" },
      { value: "Monthly", label: "Review cycle for live agent operations" },
      { value: "Clear scope", label: "Prevents vague support spend" },
    ],
    sections: [
      { id: "what-it-is", title: "What an OpenClaw retainer actually buys", html: `<p>An OpenClaw retainer is ongoing operational support for workflows that are already useful enough to protect. It can cover monitoring, small fixes, prompt and skill tuning, documentation, user support, integration checks, workflow reviews, and small improvements that keep the agent useful as the business changes.</p><p>The important word is operational. A retainer should not be a vague monthly fee for access to someone technical. It should protect a workflow that matters, with a clear owner, response rules, and a practical review rhythm.</p><p>For many businesses, the first retainer sits behind lead response, inbox triage, reporting, content operations, CRM hygiene, or scheduled monitoring tasks.</p>` },
      { id: "when-to-buy", title: "When a retainer is worth paying for", html: `<p>A retainer makes sense when a workflow is used often, saves meaningful time, or would create pain if it quietly failed. If the agent helps respond to leads, prepare reports, monitor important changes, or handle internal handoffs, slow fixes can cost more than planned support.</p><p>A retainer is usually too early if the workflow is still fuzzy. In that case, start with an <a href="/guides/openclaw-audit-service">OpenClaw audit</a>, <a href="/guides/openclaw-proof-of-concept-uk">proof of concept</a>, or <a href="/guides/openclaw-implementation-consultant-uk">implementation project</a> before paying for monthly operations.</p><p>The best test is simple: what would break, slow down, or become noisy if nobody reviewed this workflow for six weeks?</p>` },
      { id: "scope", title: "What should be inside the monthly scope", html: `<p>A useful retainer should say which workflows are covered, what counts as a support issue, how quickly issues are handled, how small improvements are requested, what gets reported, and which changes need a separate project quote.</p><p>Common included work includes monitoring, health checks, minor prompt changes, small workflow adjustments, connector checks, error review, user questions, and a monthly improvement note. Large new skills, major integrations, and new workflow builds should usually be scoped separately.</p><p>This keeps the relationship clean. The business gets dependable support, and the provider does not have to bury major build work inside an unclear monthly fee.</p>` },
      { id: "governance", title: "Retainers still need internal ownership", html: `<p>Monthly support does not remove the need for an internal owner. Someone inside the business still needs to decide priorities, approve material workflow changes, set risk appetite, and judge whether the agent is helping.</p><p>The cleanest model is shared responsibility. Blue Canvas handles the technical and operational care. The client owns business context, approvals, and priorities. That split keeps OpenClaw useful without turning the client into an accidental AI operations team.</p>` },
    ],
    faqs: [
      { question: "What is an OpenClaw retainer?", answer: "A monthly support agreement for live OpenClaw workflows, usually covering monitoring, small fixes, optimisation, documentation, and user support." },
      { question: "When should we move from project work to a retainer?", answer: "When a workflow is live, used regularly, and important enough that downtime, drift, or slow fixes would hurt the business." },
      { question: "Should new workflow builds be included?", answer: "Usually no. Major new builds are cleaner as separate scoped projects, while the retainer protects and improves existing workflows." },
      { question: "Who owns approvals?", answer: "The business should keep ownership of approvals, priorities, and risk decisions. The provider supports the system and recommends improvements." },
    ],
    relatedGuides: [
      { href: "/guides/openclaw-managed-service-uk", title: "OpenClaw Managed Service UK" },
      { href: "/guides/openclaw-managed-service-cost-uk", title: "OpenClaw Managed Service Cost UK" },
      { href: "/guides/ai-managed-services-uk", title: "AI Managed Services UK" },
      { href: "/guides/openclaw-audit-service", title: "OpenClaw Audit Service" },
    ],
    sidebarTitle: "Retainer fit check",
    sidebarPoints: ["Retainers should protect live workflows, not vague AI enthusiasm.", "Keep one named internal owner for approvals and priorities.", "Separate major new builds from routine monthly support."],
    ctaLabel: "Talk about support",
    contactTitle: "Book an OpenClaw retainer review",
    contactDescription: "Tell us what is live, what needs protecting, and where support is currently thin",
    assessmentDescription: "Blue Canvas can review your live OpenClaw workflows and recommend the lightest retainer model that protects the value already created.",
    practicalTakeawayText: "A good OpenClaw retainer protects live workflows with clear support scope, review rhythm, and business ownership. If the workflow is not valuable yet, prove it before buying monthly support.",
  },
  "ai-operations-consultant-uk": {
    title: "AI Operations",
    highlight: "Consultant UK",
    badge: "AI Operations Guide 2026",
    description: "AI operations consulting is about making live AI workflows reliable, measurable, and safe enough to run inside a real business.",
    metaTitle: "AI Operations Consultant UK: Run AI Workflows Safely",
    metaDescription: "What an AI operations consultant does, when UK businesses need one, and how AI ops differs from strategy, implementation, and managed support.",
    keywords: ["ai operations consultant uk", "ai ops consultant", "ai operations support", "ai workflow operations", "ai agent operations", "openclaw consultant uk"],
    stats: [
      { value: "Post-launch", label: "Where AI ops creates the most value" },
      { value: "Audit trails", label: "Needed for trust and improvement" },
      { value: "Human rules", label: "Keep risky decisions controlled" },
    ],
    sections: [
      { id: "definition", title: "What an AI operations consultant actually does", html: `<p>An AI operations consultant helps turn working AI experiments into reliable operating workflows. The job covers ownership, monitoring, approval rules, documentation, escalation paths, performance review, and the practical decisions that make AI safe enough to use after the demo.</p><p>This matters because most AI projects do not fail because the model cannot generate text. They fail because nobody owns the workflow, exceptions are unclear, integrations drift, and teams lose trust when the system behaves unpredictably.</p>` },
      { id: "when-needed", title: "When a business needs AI operations help", html: `<p>You need AI operations help when live or near-live AI workflows touch real work. Common signals include unclear approvals, inconsistent output quality, weak documentation, too many manual rescue steps, no performance baseline, and no one accountable after launch.</p><p>OpenClaw projects can hit this point quickly because agents may use files, browsers, memory, scheduled tasks, external channels, and custom skills. That power is valuable only when the operating model is clean.</p>` },
      { id: "scope", title: "What should be reviewed in an AI operations pass", html: `<p>A practical AI ops review looks at workflow ownership, triggers, data sources, permissions, prompts, skills, approvals, failure handling, logs, reporting, user training, and improvement cadence. It should also review what the agent is explicitly not allowed to do.</p><p>Good AI operations work often produces a short operating handbook, a risk register, a monitoring checklist, and a clear backlog of improvements ordered by commercial value.</p>` },
      { id: "metrics", title: "The metrics that matter after launch", html: `<p>Useful metrics depend on the workflow. Lead response automation might track speed-to-lead, booked calls, and handoff quality. Inbox triage might track time saved, routing accuracy, and unresolved exceptions. Reporting workflows might track preparation time, error rate, and stakeholder satisfaction.</p><p>The wrong metric is generic AI usage. High usage does not prove business value. AI operations should connect the workflow to a number the business already cares about.</p>` },
    ],
    faqs: [
      { question: "Is AI operations the same as AI consulting?", answer: "Not exactly. Consulting can cover strategy and implementation. AI operations focuses on keeping live workflows reliable, measurable, governed, and useful." },
      { question: "Do small businesses need AI operations?", answer: "Yes, if AI is touching real work. The operating model can be lightweight, but ownership, approvals, and support rules still matter." },
      { question: "What is the first thing to fix?", answer: "Usually ownership. If nobody owns the workflow and its risk decisions, every technical fix becomes harder." },
      { question: "Does AI operations include monitoring?", answer: "It should. Monitoring, issue review, and improvement rhythm are core parts of a serious AI operations setup." },
    ],
    relatedGuides: [
      { href: "/guides/ai-governance-compliance-uk", title: "AI Governance & Compliance UK" },
      { href: "/guides/openclaw-managed-service-uk", title: "OpenClaw Managed Service UK" },
      { href: "/guides/ai-readiness-assessment-guide", title: "AI Readiness Assessment Guide" },
      { href: "/guides/ai-risk-management-framework", title: "AI Risk Management Framework" },
    ],
    sidebarTitle: "AI ops focus",
    sidebarPoints: ["Make ownership visible before expanding automation.", "Track workflow outcomes, not generic AI usage.", "Write down what the agent may not do."],
    ctaLabel: "Review AI operations",
    contactTitle: "Book an AI operations review",
    contactDescription: "Tell us what AI workflows are live, fragile, or about to launch",
    assessmentDescription: "Blue Canvas can review your current AI workflows, identify operational risk, and create a practical support and improvement plan.",
    practicalTakeawayText: "AI operations is the difference between an impressive demo and a workflow the business can trust. Start with ownership, approvals, monitoring, and one metric that proves value.",
  },
  "ai-inbox-triage-automation": {
    title: "AI Inbox Triage",
    highlight: "Automation",
    badge: "Inbox Automation Guide 2026",
    description: "A practical guide to using AI to classify, route, summarise, and draft responses for busy business inboxes without losing control.",
    metaTitle: "AI Inbox Triage Automation: Route Email Faster Without Losing Control",
    metaDescription: "How AI inbox triage automation works, what to automate first, where approvals belong, and how UK businesses can reduce email drag safely.",
    keywords: ["ai inbox triage", "ai email triage automation", "inbox automation ai", "ai email routing", "ai email assistant business", "openclaw email automation"],
    stats: [
      { value: "Triage first", label: "Before fully automated replies" },
      { value: "Draft-only", label: "Safer for customer-facing email" },
      { value: "Daily review", label: "Catches routing drift early" },
    ],
    sections: [
      { id: "why", title: "Why inbox triage is a strong first AI workflow", html: `<p>Inbox triage is often one of the safest and most useful AI workflows because the work is repetitive, high-volume, and easy to review. The agent can classify messages, extract intent, spot urgency, draft replies, route tasks, and prepare summaries without immediately sending anything externally.</p><p>That makes it a better first step than fully automated email replies. You get value quickly while keeping human approval around anything sensitive, commercial, or reputational.</p>` },
      { id: "what-to-automate", title: "What to automate first", html: `<p>Start with classification and routing. Ask the agent to label messages by intent, urgency, customer type, workflow, and required next step. Then move to summaries, suggested owners, draft replies, CRM notes, and follow-up reminders.</p><p>OpenClaw is a good fit when the inbox workflow needs memory, scheduled follow-up, CRM lookup, file review, or handoff into another channel such as Slack, Teams, Telegram, or a task board.</p>` },
      { id: "guardrails", title: "Guardrails that stop inbox automation going wrong", html: `<p>Inbox automation needs rules. The agent should know which messages it can classify, which it can draft, which it must escalate, which it must ignore, and which it must never send without approval.</p><p>If the workflow touches complaints, legal issues, HR, finance, contracts, refunds, or sensitive personal data, keep human approval in the loop. The goal is faster handling, not blind delegation.</p>` },
      { id: "rollout", title: "A sensible rollout path", html: `<p>Begin with one inbox, one team, and a limited set of message types. Run the agent in observation mode first. Then allow labels and summaries. Then draft internal notes or replies. Then add CRM notes or task creation. Only after that should you consider sending low-risk emails automatically.</p><p>This staged rollout keeps trust high. Staff can see how the agent behaves before it gets more responsibility.</p>` },
    ],
    faqs: [
      { question: "Can AI reply to customer emails automatically?", answer: "It can, but most businesses should start with classification, routing, and draft-only replies before allowing automatic sends." },
      { question: "What inbox should we automate first?", answer: "Start with the inbox that has repeated patterns, measurable volume, and low-to-medium risk messages, such as enquiries, admin, or support triage." },
      { question: "Is inbox automation GDPR compliant?", answer: "It can be if permissions, data minimisation, lawful basis, retention, and provider arrangements are handled properly." },
      { question: "How does OpenClaw help with inbox triage?", answer: "OpenClaw can combine inbox access with memory, tasks, files, browser work, CRM lookup, and scheduled follow-up." },
    ],
    relatedGuides: [
      { href: "/guides/openclaw-email-inbox-management", title: "OpenClaw Email Inbox Management" },
      { href: "/guides/ai-customer-service-automation-uk", title: "AI Customer Service Automation UK" },
      { href: "/guides/openclaw-customer-support", title: "OpenClaw for Customer Support" },
      { href: "/guides/ai-workflow-automation-uk", title: "AI Workflow Automation UK" },
    ],
    sidebarTitle: "Inbox rule",
    sidebarPoints: ["Classify and route before sending anything externally.", "Use draft-only mode until quality is proven.", "Review exceptions daily during the first rollout week."],
    ctaLabel: "Plan inbox automation",
    contactTitle: "Book an inbox automation review",
    contactDescription: "Tell us which inbox is slow, noisy, or leaking follow-up",
    assessmentDescription: "Blue Canvas can review your inbox workflow, identify safe triage stages, and map a practical AI rollout that protects control.",
    practicalTakeawayText: "Inbox triage is a strong first AI workflow because it creates visible value without needing blind automation. Start with labels, summaries, routing, and drafts before giving the agent permission to send.",
  },
  "ai-lead-response-automation-uk": {
    title: "AI Lead Response",
    highlight: "Automation UK",
    badge: "Lead Response Guide 2026",
    description: "How UK businesses can use AI to respond to enquiries faster, qualify leads, prepare follow-up, and reduce missed opportunities.",
    metaTitle: "AI Lead Response Automation UK: Faster Enquiries and Follow-Up",
    metaDescription: "A practical guide to AI lead response automation for UK SMEs, including speed-to-lead, qualification, CRM notes, follow-up, and approval rules.",
    keywords: ["ai lead response automation uk", "ai lead qualification", "ai sales follow up", "speed to lead automation", "ai enquiry response", "openclaw sales automation"],
    stats: [
      { value: "Minutes", label: "Matter when a buyer is ready" },
      { value: "CRM notes", label: "Keep follow-up from going missing" },
      { value: "Approval rules", label: "Protect price and promise risk" },
    ],
    sections: [
      { id: "why", title: "Why lead response is a high-value AI workflow", html: `<p>Lead response is simple commercially: when a buyer asks for help, speed and quality matter. Many small businesses lose opportunities because enquiries sit in inboxes, details are copied manually, follow-up is inconsistent, or nobody has time to qualify the lead properly.</p><p>AI can help by detecting new enquiries, summarising the need, checking context, drafting a response, adding CRM notes, assigning an owner, and creating follow-up reminders.</p>` },
      { id: "workflow", title: "What an AI lead response workflow can do", html: `<p>A sensible workflow starts by watching enquiry sources: website forms, inboxes, chat, social messages, or CRM queues. The agent can classify the lead, extract key details, identify urgency, flag missing information, draft a first reply, and create the next task.</p><p>With OpenClaw, the workflow can also check files, previous conversations, CRM records, calendars, or browser-based systems before drafting a response. That makes follow-up more useful than a generic template.</p>` },
      { id: "risks", title: "The risks to control before launch", html: `<p>The main risks are promising the wrong thing, sending a poor response, exposing sensitive information, duplicating CRM records, and letting follow-up fail silently. These are manageable if the workflow has approval rules and good logging.</p><p>Keep human approval for pricing, bespoke promises, complaints, legal or regulated enquiries, and anything that could damage trust. The agent should make sales follow-up faster and cleaner, not freestyle commercial commitments.</p>` },
      { id: "measurement", title: "How to measure lead response automation", html: `<p>Track speed-to-lead, percentage of enquiries acknowledged, booked calls, qualified opportunities, missed follow-ups, CRM completeness, and human edit rate on draft replies. These numbers show whether the workflow is creating sales leverage.</p><p>If response speed improves but lead quality drops, the automation is too blunt. Blue Canvas frames lead response automation around practical revenue protection: faster response, cleaner handoff, and fewer warm leads left hanging.</p>` },
    ],
    faqs: [
      { question: "Can AI qualify sales leads?", answer: "Yes, but the scoring rules should be explainable and based on real business fit, not vague model confidence." },
      { question: "Should AI send the first reply automatically?", answer: "Start with draft-only replies. Automatic acknowledgements can be added later for narrow, low-risk enquiry types." },
      { question: "What systems can this connect to?", answer: "Common sources include website forms, inboxes, CRMs, chat tools, calendars, spreadsheets, and browser-based lead portals." },
      { question: "What is the biggest risk?", answer: "Letting the agent make promises, prices, or commitments without human approval." },
    ],
    relatedGuides: [
      { href: "/guides/ai-agent-for-sales", title: "AI Agent for Sales" },
      { href: "/guides/ai-customer-onboarding", title: "AI Customer Onboarding" },
      { href: "/guides/openclaw-integrations-guide", title: "OpenClaw Integrations Guide" },
      { href: "/guides/ai-workflow-automation-uk", title: "AI Workflow Automation UK" },
    ],
    sidebarTitle: "Lead response rule",
    sidebarPoints: ["Speed matters, but quality and promises matter more.", "Keep pricing and bespoke commitments human-approved.", "Measure booked calls and follow-up quality, not just replies sent."],
    ctaLabel: "Improve lead response",
    contactTitle: "Book a lead response automation review",
    contactDescription: "Tell us where enquiries arrive and what follow-up currently slips",
    assessmentDescription: "Blue Canvas can map your enquiry flow, identify the safest automation points, and design a lead response workflow that improves speed without losing judgement.",
    practicalTakeawayText: "AI lead response automation should protect revenue by making enquiries faster to handle, easier to qualify, and harder to forget. Keep the agent away from unsupported promises until the workflow is proven.",
  },
  "ai-reporting-automation-uk": {
    title: "AI Reporting",
    highlight: "Automation UK",
    badge: "Reporting Automation Guide 2026",
    description: "A practical guide to using AI to collect updates, prepare summaries, draft reports, and keep recurring business reporting from eating the week.",
    metaTitle: "AI Reporting Automation UK: Client Updates, Dashboards and Summaries",
    metaDescription: "How UK businesses can automate recurring reporting with AI, including data gathering, summaries, approvals, dashboard notes, and client updates.",
    keywords: ["ai reporting automation uk", "automated client reporting ai", "ai business reporting", "ai dashboard summaries", "ai report generation", "openclaw reporting automation"],
    stats: [
      { value: "Weekly", label: "Reporting is often repeated enough to automate" },
      { value: "Source links", label: "Keep summaries verifiable" },
      { value: "Human signoff", label: "Needed before external reporting" },
    ],
    sections: [
      { id: "why", title: "Why reporting is a strong automation candidate", html: `<p>Recurring reporting is often repetitive, time-sensitive, and spread across too many systems. Someone has to collect numbers, read updates, pull screenshots, explain changes, write the summary, and send the same kind of report again next week or next month.</p><p>AI can reduce that drag by gathering source material, preparing summaries, highlighting changes, drafting commentary, and creating a review-ready report for a human to approve.</p>` },
      { id: "use-cases", title: "Reporting workflows AI can support", html: `<p>Good candidates include client SEO reports, sales pipeline summaries, customer support trend reports, finance admin notes, weekly operations updates, recruitment pipeline reports, compliance status updates, and management pack commentary.</p><p>OpenClaw becomes useful when the reporting task crosses files, dashboards, browser sessions, CRMs, spreadsheets, inboxes, and scheduled reminders.</p>` },
      { id: "quality", title: "Quality controls for AI-generated reports", html: `<p>Reporting automation needs source discipline. The agent should cite or link the source data it used, avoid unsupported claims, flag missing data, and separate facts from interpretation.</p><p>External reports should stay human-approved. A good workflow gives the reviewer a clean draft, evidence trail, exception list, and suggested edits. It should not pretend uncertain data is certain.</p>` },
      { id: "measurement", title: "How to measure reporting automation", html: `<p>Track time saved, number of manual source checks removed, report accuracy, reviewer edit time, missed deadlines, and stakeholder satisfaction. If the draft is fast but needs heavy correction, the source mapping or prompt structure needs improving.</p><p>Blue Canvas usually scopes reporting automation around a single recurring report first, then expands once the evidence trail and approval process are working.</p>` },
    ],
    faqs: [
      { question: "Can AI write client reports?", answer: "Yes, but external reports should normally be human-reviewed before sending, especially where accuracy and tone affect trust." },
      { question: "What data sources can AI reporting use?", answer: "It can use spreadsheets, dashboards, CRMs, files, inboxes, browser-based portals, analytics exports, and manually provided notes depending on access." },
      { question: "How do we stop hallucinated reporting?", answer: "Require source links, flag missing data, keep facts separate from commentary, and use human approval before external delivery." },
      { question: "What report should we automate first?", answer: "Choose a recurring report with a clear format, repeated data sources, and obvious preparation drag." },
    ],
    relatedGuides: [
      { href: "/guides/ai-data-analysis-for-smes", title: "AI Data Analysis for SMEs" },
      { href: "/guides/ai-workflow-automation-uk", title: "AI Workflow Automation UK" },
      { href: "/guides/openclaw-cron-jobs", title: "OpenClaw Cron Jobs" },
      { href: "/guides/openclaw-browser-automation", title: "OpenClaw Browser Automation Guide" },
    ],
    sidebarTitle: "Reporting rule",
    sidebarPoints: ["Never separate a report from its source evidence.", "Keep human signoff before external delivery.", "Measure reviewer edit time, not just generation speed."],
    ctaLabel: "Automate reporting",
    contactTitle: "Book a reporting automation review",
    contactDescription: "Tell us which report eats time every week or month",
    assessmentDescription: "Blue Canvas can review your recurring reporting process and map a practical AI workflow for source gathering, drafting, review, and delivery.",
    practicalTakeawayText: "AI reporting automation is valuable when it shortens preparation time while preserving source evidence and human judgement. Automate the draft before you automate the send.",
  },
  "openclaw-document-processing": {
    title: "OpenClaw Document",
    highlight: "Processing",
    badge: "Document Automation Guide 2026",
    description: "A practical guide to using OpenClaw to read, summarise, route, and extract useful information from documents while keeping sensitive approvals controlled.",
    metaTitle: "OpenClaw Document Processing: Extract, Summarise and Route Files",
    metaDescription: "How OpenClaw document processing can help UK businesses handle invoices, forms, contracts, reports, and client files with practical approval controls.",
    keywords: ["openclaw document processing", "ai document processing uk", "openclaw file automation", "ai document workflow", "openclaw invoice processing", "blue canvas"],
    stats: [
      { value: "Extract", label: "Pull key details from files" },
      { value: "Summarise", label: "Turn documents into decisions" },
      { value: "Approve", label: "Keep sensitive actions controlled" },
    ],
    sections: [
      { id: "use-cases", title: "Where OpenClaw document processing helps", html: `<p>Many businesses lose time reading the same kinds of files over and over: invoices, intake forms, contracts, reports, policies, tenders, CVs, customer documents, meeting packs, and supplier paperwork. OpenClaw can help by extracting key details, producing a summary, checking required fields, routing the file, and preparing the next action.</p><p>The value is not only speed. A good document workflow reduces missed details, makes handoffs clearer, and gives staff a cleaner starting point for review.</p>` },
      { id: "workflow", title: "What a document workflow can do", html: `<p>A practical workflow can watch a folder or inbox, identify the document type, extract structured fields, compare against a checklist, flag missing information, draft a response, update a tracker, and create an approval task.</p><p>For invoices this might mean supplier, date, amount, purchase order, due date, and exception notes. For contracts it might mean parties, renewal date, key obligations, unusual clauses, and review questions.</p>` },
      { id: "risk", title: "Where human approval belongs", html: `<p>Document processing should not silently approve sensitive work. Payments, legal commitments, HR decisions, regulated advice, personal data handling, and contract changes should stay under human control.</p><p>The safer model is review-ready automation. OpenClaw prepares the extraction, summary, evidence, and recommended action. A human approves the outcome.</p>` },
      { id: "rollout", title: "How to roll it out safely", html: `<p>Start with one document type and one source. Build a checklist for what the agent must extract, what counts as an exception, and when a human must review. Run it in observation mode first, then allow tracker updates or draft responses once quality is stable.</p><p>If the process already has a lot of messy edge cases, begin with an <a href="/guides/openclaw-audit-service">OpenClaw audit service</a> before building the workflow.</p>` },
    ],
    faqs: [
      { question: "Can OpenClaw read PDFs and documents?", answer: "Yes, workflows can be designed around file review, extraction, summarisation, and routing, depending on document access and quality." },
      { question: "Can it approve invoices automatically?", answer: "It can prepare checks and exception notes, but payment approval should normally remain human-controlled unless the rules are narrow and low-risk." },
      { question: "What documents should we start with?", answer: "Choose a repeated document type with a clear checklist, consistent source, and obvious review drag." },
      { question: "How do we reduce mistakes?", answer: "Use structured extraction fields, source references, exception flags, and human approval before external or financial actions." },
    ],
    relatedGuides: [
      { href: "/guides/ai-invoice-processing", title: "AI Invoice Processing" },
      { href: "/guides/ai-compliance-automation", title: "AI Compliance Automation" },
      { href: "/guides/openclaw-business-systems-integration", title: "OpenClaw Business Systems Integration" },
      { href: "/guides/openclaw-audit-service", title: "OpenClaw Audit Service" },
    ],
    sidebarTitle: "Document rule",
    sidebarPoints: ["Extract facts and flag exceptions before automating decisions.", "Keep money, legal, HR, and regulated actions approved by humans.", "Start with one repeated document type and a clear checklist."],
    ctaLabel: "Plan document automation",
    contactTitle: "Book a document workflow review",
    contactDescription: "Tell us which documents slow the team down or create missed details",
    assessmentDescription: "Blue Canvas can review your document workflow and design a practical OpenClaw process for extraction, routing, summaries, and approval.",
    practicalTakeawayText: "OpenClaw document processing is most useful when it turns repeated reading into structured review. Let the agent extract and prepare; keep accountable decisions with a human.",
  },
  "openclaw-meeting-notes-workflow": {
    title: "OpenClaw Meeting Notes",
    highlight: "Workflow",
    badge: "Meeting Workflow Guide 2026",
    description: "How OpenClaw can turn meetings into summaries, actions, reminders, CRM notes, and follow-up drafts without letting decisions disappear after the call.",
    metaTitle: "OpenClaw Meeting Notes Workflow: Actions, Follow-Up and CRM Notes",
    metaDescription: "A practical guide to OpenClaw meeting notes workflows for summaries, action tracking, follow-up drafts, CRM updates, and recurring review routines.",
    keywords: ["openclaw meeting notes workflow", "ai meeting notes automation", "openclaw action tracking", "ai follow up automation", "meeting summary ai", "blue canvas"],
    stats: [
      { value: "Actions", label: "Captured before they drift" },
      { value: "Follow-up", label: "Drafted while context is fresh" },
      { value: "Review", label: "Keeps owners accountable" },
    ],
    sections: [
      { id: "why", title: "Why meeting notes are a high-friction workflow", html: `<p>Meetings often create the same problem: good context is discussed, decisions are half-recorded, actions sit in someone's notebook, and follow-up depends on who has time afterwards. That creates avoidable drag across sales, operations, client delivery, recruitment, finance, and management work.</p><p>OpenClaw can help by converting meeting material into structured summaries, action lists, owner assignments, follow-up drafts, CRM notes, and reminders.</p>` },
      { id: "workflow", title: "What the workflow can include", html: `<p>A meeting notes workflow can collect the transcript or notes, summarise the key points, identify decisions, list actions, assign owners, draft follow-up emails, update a CRM or project board, and schedule reminders for unresolved actions.</p><p>The workflow becomes more useful when it connects to the surrounding process. A sales call summary should connect to the CRM. A delivery meeting should connect to tasks. A management meeting should connect to the operating rhythm.</p>` },
      { id: "quality", title: "The quality controls that matter", html: `<p>Meeting notes automation needs context and review. The agent should separate facts from suggestions, flag uncertainty, avoid inventing decisions, and make it easy for a human to correct names, owners, dates, and commitments.</p><p>External follow-up should usually be draft-only at first. The agent can prepare the email while the context is fresh, but a human should check tone, promises, and commercial details before it leaves the business.</p>` },
      { id: "measurement", title: "How to measure the benefit", html: `<p>Track follow-up speed, action completion rate, missed commitments, CRM completeness, time spent writing summaries, and stakeholder satisfaction. The value is fewer dropped actions and clearer handoffs.</p><p>This pairs naturally with <a href="/guides/openclaw-cron-jobs">OpenClaw cron jobs</a> for scheduled reviews and <a href="/guides/openclaw-integrations-guide">OpenClaw integrations</a> for CRM, task board, or inbox updates.</p>` },
    ],
    faqs: [
      { question: "Can OpenClaw write meeting summaries?", answer: "Yes, it can prepare summaries, decisions, actions, owners, and follow-up drafts when it has access to notes or transcripts." },
      { question: "Can it send follow-up emails automatically?", answer: "Start with draft-only follow-up. Automatic sending should be limited to narrow, low-risk internal routines once quality is proven." },
      { question: "Can it update a CRM after calls?", answer: "Yes, with the right integration and approval rules. CRM notes should be reviewed during rollout to avoid messy or duplicated records." },
      { question: "What meetings should we automate first?", answer: "Start with repeated meetings where actions are often missed: sales calls, client delivery reviews, weekly operations, recruitment calls, or management check-ins." },
    ],
    relatedGuides: [
      { href: "/guides/openclaw-cron-jobs", title: "OpenClaw Cron Jobs" },
      { href: "/guides/openclaw-integrations-guide", title: "OpenClaw Integrations Guide" },
      { href: "/guides/ai-customer-onboarding", title: "AI Customer Onboarding" },
      { href: "/guides/ai-workflow-automation-uk", title: "AI Workflow Automation UK" },
    ],
    sidebarTitle: "Meeting rule",
    sidebarPoints: ["Summaries are useful only if actions become owned next steps.", "Keep external follow-up draft-only until quality is proven.", "Connect meeting outputs to the system where the work is managed."],
    ctaLabel: "Plan meeting automation",
    contactTitle: "Book a meeting workflow review",
    contactDescription: "Tell us which meetings create follow-up drag or missed actions",
    assessmentDescription: "Blue Canvas can design an OpenClaw meeting workflow that captures decisions, drafts follow-up, and keeps actions visible after the call.",
    practicalTakeawayText: "OpenClaw meeting workflows are valuable when they turn conversation into owned action. Automate the summary, draft the follow-up, and make the next step visible where the team already works.",
  },
  "openclaw-lead-generation-automation": {
    title: "OpenClaw Lead Generation",
    highlight: "Automation",
    badge: "Lead Generation Guide 2026",
    description: "How OpenClaw can support lead capture, qualification, enrichment, follow-up, and CRM hygiene without letting an agent make unsupported sales promises.",
    metaTitle: "OpenClaw Lead Generation Automation: Capture, Qualify and Follow Up",
    metaDescription: "How OpenClaw lead generation automation works for UK businesses, including enquiry capture, qualification, CRM updates, follow-up, and approval rules.",
    keywords: ["openclaw lead generation automation", "openclaw sales automation", "ai lead generation automation", "ai lead qualification", "openclaw crm automation", "blue canvas"],
    stats: [
      { value: "Fast capture", label: "Reduces warm lead leakage" },
      { value: "Draft-only", label: "Keeps promises human-approved" },
      { value: "CRM hygiene", label: "Makes follow-up measurable" },
    ],
    sections: [
      { id: "why", title: "Why lead generation is a strong OpenClaw workflow", html: `<p>Lead generation work is usually spread across website forms, inboxes, LinkedIn messages, spreadsheets, CRMs, calendars, and follow-up reminders. The commercial problem is not just getting more enquiries. It is catching useful enquiries quickly, qualifying them consistently, and making sure the next action happens.</p><p>OpenClaw is useful because it can operate across the messy places where leads actually arrive. It can watch an inbox, summarise an enquiry, check existing records, draft a response, create a task, and prepare a follow-up note for a human to approve.</p>` },
      { id: "workflow", title: "What the workflow can automate", html: `<p>A practical OpenClaw lead generation workflow can classify new enquiries, extract contact details, identify buying intent, flag missing information, check CRM records, enrich the opportunity, draft a first response, and create a follow-up reminder.</p><p>The highest-value version links to existing sales process rather than replacing it. OpenClaw should make the human salesperson faster and more consistent, not quietly invent pricing, discounts, claims, or commitments.</p>` },
      { id: "guardrails", title: "The guardrails that protect sales trust", html: `<p>Lead generation automation needs tight permission rules. The agent can prepare, route, enrich, and draft. Pricing, bespoke promises, contract terms, complaints, refunds, and sensitive customer issues should stay human-approved.</p><p>This is especially important for small teams where brand trust sits with a few people. A fast bad reply can cost more than a slow good one. Start with <a href="/guides/ai-lead-response-automation-uk">AI lead response automation</a> in draft-only mode, then expand once quality is proven.</p>` },
      { id: "measurement", title: "How to measure lead generation automation", html: `<p>Useful metrics include speed-to-lead, percentage of enquiries acknowledged, qualified calls booked, missed follow-ups, CRM completeness, duplicate records, and human edit rate on draft responses.</p><p>If the agent increases activity but does not improve booked calls or follow-up quality, the workflow is too shallow. Blue Canvas usually starts with one lead source and one clear sales handoff before connecting every channel.</p>` },
    ],
    faqs: [
      { question: "Can OpenClaw generate leads automatically?", answer: "It can support lead capture, qualification, enrichment, routing, and follow-up. It should not be treated as a magic prospecting tool without a clear offer, audience, and approval process." },
      { question: "Should OpenClaw reply to leads by itself?", answer: "Start with draft-only replies and human approval. Automatic acknowledgements can be added later for narrow, low-risk enquiry types." },
      { question: "Can it update our CRM?", answer: "Yes, if access and rules are set up properly. CRM writes should be logged, deduplicated, and reviewed during rollout." },
      { question: "What should we automate first?", answer: "Begin with one lead source where follow-up currently slips, such as website forms, shared inboxes, or inbound sales messages." },
    ],
    relatedGuides: [
      { href: "/guides/ai-lead-response-automation-uk", title: "AI Lead Response Automation UK" },
      { href: "/guides/ai-agent-for-sales", title: "AI Agent for Sales" },
      { href: "/guides/openclaw-integrations-guide", title: "OpenClaw Integrations Guide" },
      { href: "/guides/openclaw-implementation-consultant-uk", title: "OpenClaw Implementation Consultant UK" },
    ],
    sidebarTitle: "Sales automation rule",
    sidebarPoints: ["Automate capture, routing, and drafting before automatic sending.", "Keep pricing and bespoke commitments human-approved.", "Track booked calls and follow-up quality, not just activity."],
    ctaLabel: "Plan lead automation",
    contactTitle: "Book a lead automation review",
    contactDescription: "Tell us where leads arrive and what follow-up currently slips",
    assessmentDescription: "Blue Canvas can map your lead capture and follow-up process, then design an OpenClaw workflow that improves speed without risking trust.",
    practicalTakeawayText: "OpenClaw lead generation automation works best when it protects follow-up discipline. Let the agent prepare and route the work, but keep commercial judgement human-approved until the workflow is proven.",
  },
};

export function getCommercialBlastMetadata(slug: string): Metadata {
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

export function CommercialBlastGuidePage({ slug }: { slug: string }) {
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
