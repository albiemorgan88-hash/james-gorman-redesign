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

const guides: Record<string, BlastGuide> = {
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
