import type { Metadata } from "next";
import GuidePageTemplate from "@/components/GuidePageTemplate";

export const metadata: Metadata = {
  title: "AI Email Automation UK: Inbox, Follow-Up and Approval Workflows",
  description:
    "A practical UK guide to AI email automation for inbox triage, follow-up drafts, lead response, customer support, approvals, and OpenClaw workflows.",
  keywords: [
    "ai email automation uk",
    "ai email automation",
    "ai inbox triage automation",
    "ai lead response automation",
    "openclaw email inbox management",
    "ai customer service automation uk",
    "blue canvas",
  ],
  alternates: { canonical: "https://openclawconsultant.co.uk/guides/ai-email-automation-uk" },
  openGraph: {
    title: "AI Email Automation UK: Inbox, Follow-Up and Approval Workflows",
    description: "How UK businesses can use AI email automation safely for triage, follow-up, summaries, and customer response workflows.",
    url: "https://openclawconsultant.co.uk/guides/ai-email-automation-uk",
    type: "article",
  },
};

const stats = [
  { value: "Triage", label: "Classify and route before replying" },
  { value: "Drafts", label: "Let AI prepare, then approve" },
  { value: "Follow-up", label: "Recover missed opportunities quickly" },
];

const sections = [
  {
    id: "what-email-automation-can-do",
    title: "What AI email automation can do",
    html:
      "<p>AI email automation can classify messages, summarise threads, draft replies, extract tasks, prepare CRM notes, spot urgent items, and trigger follow-up reminders. The value is not that AI writes email. The value is that the inbox becomes easier to operate.</p><p>For UK businesses, the safest first version usually drafts and routes rather than sending everything automatically.</p>",
  },
  {
    id: "best-first-workflows",
    title: "Best first workflows",
    html:
      "<p>Strong first workflows include lead response drafts, support triage, quote request summaries, overdue follow-up reminders, meeting-note distribution, invoice query routing, and internal escalation summaries.</p><p>Good email automation should reduce delay without hiding judgement. If a customer is angry, vulnerable, confused, or dealing with money, legal, HR, or health details, the workflow should escalate quickly.</p><p>Related pages include <a href=\"/guides/ai-inbox-triage-automation\">AI Inbox Triage Automation</a>, <a href=\"/guides/ai-lead-response-automation-uk\">AI Lead Response Automation UK</a>, and <a href=\"/guides/openclaw-email-inbox-management\">OpenClaw Email Inbox Management</a>.</p>",
  },
  {
    id: "approval-design",
    title: "Approval design matters more than the model",
    html:
      "<p>The approval model decides whether email automation is useful or risky. Simple internal routing can often be automatic. External replies, customer promises, pricing, complaints, and sensitive topics usually need review before sending.</p><p>A good workflow should show the source message, the proposed reply, the reason for the classification, and easy approve, edit, or reject options.</p>",
  },
  {
    id: "where-openclaw-fits",
    title: "Where OpenClaw fits",
    html:
      "<p>OpenClaw can operate across the inbox, CRM, calendar, documents, and task systems. It can prepare the next action, ask for approval, update notes, and monitor whether the follow-up happened.</p><p>Useful next reads are <a href=\"/guides/openclaw-approval-workflows\">OpenClaw Approval Workflows</a>, <a href=\"/guides/openclaw-crm-automation\">OpenClaw CRM Automation</a>, and <a href=\"/guides/openclaw-safe-setup-checklist\">OpenClaw Safe Setup Checklist</a>.</p>",
  },
];

const faqs = [
  { question: "What is AI email automation?", answer: "It is the use of AI to triage, summarise, draft, route, and follow up on email workflows with clear rules and approvals." },
  { question: "Should AI send emails automatically?", answer: "Only for low-risk, tightly defined cases. Most businesses should start with AI-drafted replies that a person approves." },
  { question: "What emails are good first targets?", answer: "Lead enquiries, internal routing, support triage, quote request summaries, meeting follow-ups, and recurring status updates." },
  { question: "What should be excluded?", answer: "Sensitive complaints, legal or health issues, HR matters, financial commitments, pricing exceptions, and any message needing real judgement." },
  { question: "Can OpenClaw manage inbox workflows?", answer: "Yes. OpenClaw can prepare drafts, extract tasks, update records, monitor follow-ups, and route approvals across tools." },
  { question: "How do you measure success?", answer: "Measure first response time, missed follow-ups, admin hours saved, reply edit rate, customer complaints, and conversion from enquiries." },
];

const relatedGuides = [
  { href: "/guides/ai-inbox-triage-automation", title: "AI Inbox Triage Automation" },
  { href: "/guides/ai-lead-response-automation-uk", title: "AI Lead Response Automation UK" },
  { href: "/guides/openclaw-email-inbox-management", title: "OpenClaw Email Inbox Management" },
  { href: "/guides/openclaw-approval-workflows", title: "OpenClaw Approval Workflows" },
];

export default function AIEmailAutomationUKPage() {
  return (
    <GuidePageTemplate
      canonicalPath="/guides/ai-email-automation-uk"
      badge="Inbox Automation Guide 2026"
      title="AI Email"
      highlight="Automation UK"
      description="A practical guide to AI email automation for triage, follow-up drafts, inbox summaries, and approval-led customer response workflows."
      primaryCtaLabel="Read the guide"
      primaryCtaHref="#guide"
      secondaryCtaLabel="Review our inbox workflow"
      secondaryCtaHref="#assessment"
      stats={stats}
      sections={sections}
      faqs={faqs}
      relatedGuides={relatedGuides}
      sidebarTitle="Email automation should stay visible"
      sidebarPoints={[
        "Classify and draft before auto-sending.",
        "Escalate sensitive or unusual messages.",
        "Use reviewer edits to improve the workflow.",
      ]}
      assessmentDescription="Blue Canvas can review your inbox flow and map where AI should triage, draft, route, or ask for approval before sending."
      contactTitle="Book an email automation review"
      contactDescription="Tell us what email work is slowing the team down"
      practicalTakeawayText="AI email automation works best when it reduces inbox drag without removing accountability from the messages that matter."
    />
  );
}
