import type { Metadata } from "next";
import GuideLandingPage from "@/components/GuideLandingPage";

export const metadata: Metadata = {
  title: "AI Agents for Insurance Brokers: Practical Uses Without Compliance Theatre",
  description: "A practical guide to AI agents for insurance brokers, covering triage, renewal prep, document handling, client follow-up, and the controls needed in regulated workflows.",
  keywords: [
    "ai agents for insurance brokers",
    "ai for insurance brokers",
    "insurance broker automation ai",
    "ai consultant uk",
    "blue canvas"
  ],
  alternates: { canonical: "https://openclawconsultant.co.uk/guides/ai-agents-for-insurance-brokers" },
  openGraph: {
    title: "AI Agents for Insurance Brokers: Practical Uses Without Compliance Theatre",
    description: "A practical guide to AI agents for insurance brokers, covering triage, renewal prep, document handling, client follow-up, and the controls needed in regulated workflows.",
    url: "https://openclawconsultant.co.uk/guides/ai-agents-for-insurance-brokers",
    type: "article",
  },
};

const stats = [
  { value: "Faster renewals", label: "Prep packs and chase missing details" },
  { value: "Better triage", label: "Sort enquiries before human review" },
  { value: "Regulated flow", label: "Controls matter more than clever copy" },
];

const sections = [
  {
    id: "where-the-value-is",
    title: "Where brokers actually gain value from AI agents",
    html: "<p>Insurance brokers do not need an agent to invent coverage advice. They need help with the heavy admin wrapped around the client relationship. Renewal packs, inbound queries, missing documents, summary prep, follow-up reminders, and internal handoffs take real time away from the advisory work that earns trust and revenue.</p><p>That is where agent workflows make sense. They can review incoming communication, classify intent, gather missing information, draft structured case notes, and keep the pipeline moving so advisers spend less time on repetitive coordination.</p><p>For brokerage teams handling commercial renewals, schemes, or high-volume SME work, even small gains in speed and consistency can produce a meaningful operational lift.</p>",
  },
  {
    id: "best-use-cases",
    title: "Best use cases for brokerage teams",
    html: "<p>Inbound triage is a strong place to begin. An agent can sort queries into claims, renewals, policy servicing, document requests, or new business before they reach the right human owner. That reduces queue friction and protects response times.</p><p>Renewal preparation is another strong fit. Agents can assemble client context, extract changes from documents, summarise prior communications, and prepare a structured handover note for the adviser. Done well, that turns a messy record into something the broker can act on quickly.</p><p>Document chasing is often an easy win too. The workflow is repetitive, rules-based, and time-sensitive. An agent can spot what is missing, send the right reminder, and escalate exceptions without the team manually checking every file.</p><p>Customer-facing advice, however, should still sit behind strong review. In regulated environments, assisted drafting is usually safer than full autonomy.</p>",
  },
  {
    id: "controls",
    title: "The controls brokers should insist on",
    html: "<p>Brokers need clear review rules, permission boundaries, and logging. If an agent touches policy information, customer records, or claims material, the business should know exactly what it can access and what happens when confidence is low.</p><p>Templates matter. So do escalation paths. If the workflow is going to draft customer responses, there should be rules around tone, disclaimers, approval, and who owns the final send. That is not bureaucracy for the sake of it. It is how you stop a useful workflow from creating compliance or trust problems later.</p><p>The best implementations in regulated sectors are rarely the most autonomous. They are the ones that remove repetitive effort while keeping accountability obvious.</p>",
  },
  {
    id: "how-to-pilot",
    title: "How to pilot AI agents in a brokerage safely",
    html: "<p>Pick one workflow that is operationally painful but commercially understandable, such as renewal prep or inbound triage. Define what counts as success. Reduced turnaround time, fewer missed documents, faster first response, cleaner case notes, or fewer manual touches are all sensible measures.</p><p>Keep a human in the loop, especially for customer-facing output. Use the pilot to improve consistency and speed first. Once the team trusts the handoffs and exception handling, you can decide whether to push further.</p><p>Useful related guides include <a href=\"/guides/ai-governance-policy-template\">AI Governance Policy Template</a>, <a href=\"/guides/ai-readiness-assessment-uk\">AI Readiness Assessment UK</a>, and <a href=\"/guides/ai-agents-compliance-risk\">AI Agents and Compliance Risk</a>.</p>",
  },
];

const faqs = [
  { question: "Can AI agents give insurance advice?", answer: "They should not be allowed to do that unsupervised. They are better used to prepare information, route work, and support advisers within clear approval rules." },
  { question: "What is the easiest brokerage use case to pilot?", answer: "Inbound triage, renewal preparation, or document chasing are often the strongest starting points because they are repetitive and measurable." },
  { question: "Why are controls so important here?", answer: "Because brokers operate in a regulated environment with sensitive data, customer trust, and clear accountability requirements." },
  { question: "Do we need perfect data first?", answer: "No, but you do need a clear workflow and sensible access boundaries. The pilot should cope with messy real-world inputs rather than assuming everything is clean." },
  { question: "Should customer-facing emails be fully automated?", answer: "Usually not at the start. Assisted drafting with review is a safer first move." },
  { question: "Can OpenClaw handle this kind of workflow?", answer: "Yes, especially where inbox handling, document review, browser steps, reminders, and approval checkpoints need to work together." },
];

const relatedGuides = [
  { href: "/guides/ai-agents-compliance-risk", title: "AI Agents and Compliance Risk" },
  { href: "/guides/ai-governance-policy-template", title: "AI Governance Policy Template" },
  { href: "/guides/ai-readiness-assessment-uk", title: "AI Readiness Assessment UK" },
  { href: "/guides/openclaw-for-teams", title: "OpenClaw for Teams" },
];

export default function AIAgentsForInsuranceBrokersPage() {
  return (
    <GuideLandingPage
      badge="Industry Guide 2026"
      title="AI Agents for Insurance Brokers"
      intro="Brokerages have plenty of repetitive coordination work that AI agents can help with. The sweet spot is better prep, faster triage, and cleaner handoffs, with advice and regulated output still tightly controlled."
      stats={stats}
      sections={sections}
      faqs={faqs}
      relatedGuides={relatedGuides}
      sidebarTitle="Good fit, tight controls"
      sidebarBody="The opportunity is real, but the workflow has to respect regulation, review, and client trust from the start."
      sidebarPoints={[
        "Use agents for prep and routing.",
        "Keep client advice under review.",
        "Log actions and exceptions properly.",
      ]}
      assessmentIntro="Blue Canvas can help brokerage teams identify a safe first workflow, design the review path, and build the controls that stop a pilot becoming a compliance headache."
      practicalTakeaway="In insurance, the best agent workflow is the one that removes repetitive admin while making human accountability even clearer than before."
      takeawayCards={[
        { title: "Pilot renewals or triage", text: "Those workflows are repetitive enough to matter and structured enough to measure." },
        { title: "Review customer output", text: "Keep the human in the loop wherever advice, regulatory wording, or client trust are in play." },
        { title: "Build auditability in", text: "The workflow should show what it used, what it flagged, and what it handed off." },
      ]}
    />
  );
}
