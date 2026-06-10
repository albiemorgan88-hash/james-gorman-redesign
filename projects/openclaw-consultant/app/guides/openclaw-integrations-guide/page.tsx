import type { Metadata } from "next";
import GuidePageTemplate from "@/components/GuidePageTemplate";

export const metadata: Metadata = {
  title: "OpenClaw Integrations Guide: Connect Agents to Real Business Systems",
  description: "A practical guide to OpenClaw integrations for email, CRM, chat, calendars, spreadsheets, files, websites, and internal business tools.",
  keywords: ["openclaw integrations", "openclaw integration guide", "openclaw crm integration", "openclaw email automation", "openclaw slack integration", "openclaw business systems", "blue canvas"],
  alternates: { canonical: "https://openclawconsultant.co.uk/guides/openclaw-integrations-guide" },
  openGraph: {
    title: "OpenClaw Integrations Guide: Connect Agents to Real Business Systems",
    description: "How to plan OpenClaw integrations safely, from CRM and email through calendars, chat, files, websites, and approval workflows.",
    url: "https://openclawconsultant.co.uk/guides/openclaw-integrations-guide",
    type: "article",
  },
};

const stats = [
  { value: "Start with 1", label: "Workflow before more integrations" },
  { value: "Read first", label: "Use read-only before write actions" },
  { value: "Approvals", label: "Required for risky external actions" },
];

const sections = [
  {
    id: "why",
    title: "Why OpenClaw integrations matter",
    html: '<p>OpenClaw becomes commercially useful when it can work with the systems your team already uses. That might mean reading inboxes, checking CRM records, updating spreadsheets, creating calendar events, drafting replies, monitoring websites, or routing internal tasks.</p><p>The value is not the integration itself. The value is the workflow it unlocks. A well-integrated agent can reduce handoffs, stop information going missing, and keep routine admin moving without asking a person to manually copy data between tools.</p><p>The mistake is connecting everything too early. Start with one workflow, one clear outcome, and the smallest set of integrations needed to prove value safely.</p>',
  },
  {
    id: "categories",
    title: "Common OpenClaw integration categories",
    html: '<p>The most useful integrations usually sit in seven categories: communication, CRM, calendars, documents, spreadsheets, websites, and internal task systems. Examples include Gmail or Outlook for email, HubSpot or Zoho for CRM, Google Calendar or Microsoft 365 for scheduling, Google Drive or SharePoint for files, and Slack, Teams, or Telegram for internal coordination.</p><p>OpenClaw can also work with browser-based systems when an official API is missing, but browser automation should be treated carefully. It is powerful, but it needs guardrails, monitoring, and clear fallback behaviour.</p><p>If the workflow touches customers, payments, legal decisions, HR, or regulated data, build approval points before write actions go live.</p>',
  },
  {
    id: "design",
    title: "How to design integrations without creating a mess",
    html: '<p>Map the workflow before choosing the connector. What starts the task. What data is needed. Which system is the source of truth. What can the agent read. What can it draft. What can it update. What needs approval. What should happen when the integration fails.</p><p>That design work prevents the most common failure mode: an agent that has access to several tools but no clear rule for what it should do with them.</p><p>A good first build often uses read-only access, draft-only outputs, and manual approval before external action. Once the workflow is stable, write permissions can be expanded carefully.</p>',
  },
  {
    id: "security",
    title: "Security, permissions, and human approvals",
    html: '<p>Every integration increases the blast radius of mistakes. That does not mean integrations are bad. It means permissions should match the workflow and no more. Use separate credentials where possible, store secrets properly, review access regularly, and keep audit trails for actions that matter.</p><p>Human approvals should sit wherever the downside of a wrong action is meaningful. Sending an external email, changing CRM status, posting publicly, deleting data, updating finance records, or contacting candidates should not be fully automated without explicit rules and confidence.</p><p>For broader governance planning, pair this guide with <a href="/guides/openclaw-security-best-practices">OpenClaw Security Best Practices</a> and <a href="/guides/ai-governance-policy-template">AI Governance Policy Template</a>.</p>',
  },
  {
    id: "rollout",
    title: "A sensible OpenClaw integration rollout path",
    html: '<p>Start by choosing one workflow with obvious pain. Connect the minimum systems needed to observe and draft. Test with real but low-risk examples. Add approvals. Measure whether the workflow saves time or improves response speed. Only then widen access or add more tools.</p><p>For many UK businesses, the first useful integration is inbox plus CRM, calendar plus email, or files plus reporting. Those combinations are boring, but they attack real admin.</p><p>Blue Canvas usually treats integrations as part of a workflow build, not as a shopping list. The goal is not to connect everything. The goal is to connect enough for the agent to do useful work safely.</p>',
  },
];

const faqs = [
  { question: "What can OpenClaw integrate with?", answer: "OpenClaw can work with APIs, browser-based systems, email, calendars, CRMs, files, spreadsheets, chat tools, websites, and custom internal systems depending on access and workflow design." },
  { question: "Should we connect every system at once?", answer: "No. Start with one workflow and the smallest set of integrations needed to prove value safely." },
  { question: "Are browser automations safe?", answer: "They can be useful, but they need guardrails, monitoring, clear fallback behaviour, and human approval for risky actions." },
  { question: "What is the safest first integration?", answer: "Usually read-only access to the system of record, followed by draft-only outputs that a human reviews before anything is sent or changed." },
  { question: "Can Blue Canvas build OpenClaw integrations?", answer: "Yes. Blue Canvas can scope, build, and support OpenClaw integrations around practical business workflows rather than generic connector lists." },
];

const relatedGuides = [
  { href: "/guides/openclaw-business-systems-integration", title: "OpenClaw Business Systems Integration" },
  { href: "/guides/openclaw-browser-automation", title: "OpenClaw Browser Automation Guide" },
  { href: "/guides/openclaw-custom-skills-development", title: "OpenClaw Custom Skills Development" },
  { href: "/guides/openclaw-security-best-practices", title: "OpenClaw Security Best Practices" },
];

export default function OpenClawIntegrationsGuidePage() {
  return (
    <GuidePageTemplate
      canonicalPath="/guides/openclaw-integrations-guide"
      badge="Integration Guide 2026"
      title="OpenClaw Integrations"
      highlight="Guide"
      description="OpenClaw is strongest when it connects to the systems your business already uses, but integrations need workflow design, permissions, and human approvals before they become reliable."
      primaryCtaLabel="Read the guide"
      primaryCtaHref="#guide"
      secondaryCtaLabel="Plan integrations"
      secondaryCtaHref="#assessment"
      stats={stats}
      sections={sections}
      faqs={faqs}
      relatedGuides={relatedGuides}
      sidebarTitle="Integration rule"
      sidebarPoints={["Design the workflow before choosing connectors.", "Use read-only and draft-only stages before write access.", "Keep approvals on external, sensitive, or irreversible actions."]}
      assessmentDescription="Blue Canvas can map your target workflow, identify the right OpenClaw integrations, and show where permissions and approvals should sit before anything goes live."
      contactTitle="Book an OpenClaw integration review"
      contactDescription="Tell us which systems you use and which workflow you want to improve"
      practicalTakeawayText="Good OpenClaw integrations are workflow-led. Connect the few systems needed to solve a real problem, start with narrow permissions, prove the value, then expand carefully."
    />
  );
}
