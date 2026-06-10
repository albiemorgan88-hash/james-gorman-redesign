import type { Metadata } from "next";
import GuidePageTemplate from "@/components/GuidePageTemplate";

export const metadata: Metadata = {
  title: "Agentic AI for Business: Practical Uses, Risks and Rollout",
  description:
    "A practical guide to agentic AI for business, including what it means, where it creates value, what risks to control, and how UK businesses should start.",
  keywords: [
    "agentic ai for business",
    "agentic ai business",
    "agentic ai uk",
    "ai agents for business",
    "business ai agents",
    "openclaw consultant uk",
  ],
  alternates: {
    canonical: "https://openclawconsultant.co.uk/guides/agentic-ai-for-business",
  },
  openGraph: {
    title: "Agentic AI for Business: Practical Uses, Risks and Rollout",
    description:
      "A grounded buyer guide to agentic AI for business, from workflow fit and oversight to practical rollout decisions.",
    url: "https://openclawconsultant.co.uk/guides/agentic-ai-for-business",
    type: "article",
  },
};

const stats = [
  { value: "Tools + memory", label: "Where agentic workflows become useful" },
  { value: "Approvals", label: "Keep commercial and sensitive decisions controlled" },
  { value: "One workflow", label: "The safest place to prove business value first" },
];

const sections = [
  {
    id: "what-it-means",
    title: "What agentic AI means in a business context",
    html:
      "<p>Agentic AI means AI that can move through a workflow with some independence. It can use context, choose the next step, call tools, remember useful information, and take action inside a controlled process.</p><p>For a business, the useful question is not whether the label sounds advanced. It is whether the workflow needs more than a chatbot or a single automation step. If the work crosses inboxes, files, browser tasks, CRMs, approvals, or scheduled follow-up, an agentic approach may be justified.</p><p>The strongest use cases are operational rather than theatrical. They make everyday work faster, more consistent, and easier to supervise.</p>",
  },
  {
    id: "where-it-helps",
    title: "Where agentic AI creates real commercial value",
    html:
      "<p>Agentic AI is most useful when repeated work involves several decisions or systems. Examples include lead response, inbox triage, document review, client reporting, CRM hygiene, recruitment screening, customer support routing, and recurring compliance checks.</p><p>These workflows are valuable because mistakes, delays, and handoff gaps cost money. A well-scoped agent can prepare work, route exceptions, draft responses, update records, and flag where a human needs to step in.</p><p>That makes agentic AI less about replacing a team and more about giving the team reliable operational leverage.</p>",
  },
  {
    id: "risks-to-control",
    title: "The risks businesses need to control",
    html:
      "<p>The main risks are unclear ownership, weak approvals, poor data boundaries, over-automation, and workflows that take action without enough evidence. Agentic systems can be powerful, but that power makes governance more important, not less.</p><p>Keep human signoff for pricing, legal commitments, HR decisions, regulated advice, sensitive customer communication, and anything that could damage trust. The agent should make the work easier to review, not remove accountability.</p><p>Useful controls include clear permissions, exception rules, logs, escalation paths, and a named internal owner.</p>",
  },
  {
    id: "how-to-start",
    title: "How to start without overbuilding",
    html:
      '<p>Start with one workflow that is frequent, painful, and measurable. Define the current baseline, the systems involved, the approval points, and the outcome that should improve. Then build the smallest useful version and review it in real work.</p><p>OpenClaw is a good fit when the workflow needs orchestration across tools, memory, scheduled actions, files, browser work, or multiple agents. It is not always the first tool a business needs, but it becomes useful when simple automation stops being enough.</p><p>Useful next reads are <a href="/guides/what-is-agentic-ai">What Is Agentic AI</a>, <a href="/guides/multi-agent-systems-explained">Multi-Agent Systems Explained</a>, and <a href="/guides/ai-agents-compliance-risk">AI Agents and Compliance Risk</a>.</p>',
  },
];

const faqs = [
  { question: "What is agentic AI for business?", answer: "It is AI that can use context, tools, memory, and controlled actions to move work through a business workflow." },
  { question: "Is agentic AI the same as a chatbot?", answer: "No. A chatbot mainly answers prompts. Agentic AI can support multi-step workflows across tools and decisions." },
  { question: "What should we automate first?", answer: "Choose one repeated workflow where time saved, response speed, quality, or fewer missed tasks can be measured clearly." },
  { question: "Does agentic AI need human approval?", answer: "Yes, especially for sensitive, commercial, regulated, or reputational decisions." },
  { question: "Where does OpenClaw fit?", answer: "OpenClaw fits when a workflow needs tool use, browser actions, memory, schedules, approvals, or multi-agent coordination." },
];

const relatedGuides = [
  { href: "/guides/what-is-agentic-ai", title: "What Is Agentic AI" },
  { href: "/guides/multi-agent-systems-explained", title: "Multi-Agent Systems Explained" },
  { href: "/guides/ai-agents-compliance-risk", title: "AI Agents and Compliance Risk" },
  { href: "/guides/ai-agents-for-business", title: "AI Agents for Business" },
];

export default function AgenticAIForBusinessPage() {
  return (
    <GuidePageTemplate
      canonicalPath="/guides/agentic-ai-for-business"
      badge="Business Guide 2026"
      title="Agentic AI"
      highlight="for Business"
      description="Agentic AI becomes useful when it improves a real workflow with clear permissions, measurable value, and human control where judgement matters."
      primaryCtaLabel="Read the guide"
      primaryCtaHref="#guide"
      secondaryCtaLabel="Review our workflow"
      secondaryCtaHref="#assessment"
      stats={stats}
      sections={sections}
      faqs={faqs}
      relatedGuides={relatedGuides}
      assessmentDescription="Blue Canvas helps businesses decide where agentic AI is genuinely useful, where simple automation is enough, and how to design the first workflow safely."
      contactTitle="Book an agentic AI review"
      contactDescription="Tell us which workflow crosses tools, approvals, or repeated handoffs"
      practicalTakeawayText="Agentic AI is worth buying when it makes a specific workflow faster, cleaner, or more reliable. Start narrow, control the risk, and only scale once the evidence is real."
    />
  );
}
