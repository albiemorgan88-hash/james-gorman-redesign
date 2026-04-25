import type { Metadata } from "next";
import GuidePageTemplate from "@/components/GuidePageTemplate";

export const metadata: Metadata = {
  title: "AI Employee vs Outsourcing: Which Is Better for Repetitive Business Work?",
  description: "Compare AI employees, outsourcing, virtual assistants, and internal hires for repetitive admin, customer support, reporting, lead handling, and operations.",
  keywords: ["ai employee vs outsourcing", "ai employee vs virtual assistant", "ai automation vs outsourcing", "ai employees for business", "outsource admin or use ai", "ai agent vs outsourcing", "blue canvas"],
  alternates: { canonical: "https://openclawconsultant.co.uk/guides/ai-employee-vs-outsourcing" },
  openGraph: {
    title: "AI Employee vs Outsourcing: Which Is Better for Repetitive Business Work?",
    description: "A practical comparison of AI employees, outsourcing, virtual assistants, and internal hires for repeatable business workflows.",
    url: "https://openclawconsultant.co.uk/guides/ai-employee-vs-outsourcing",
    type: "article",
  },
};

const stats = [
  { value: "AI first", label: "For repeatable digital workflows" },
  { value: "Outsource", label: "When judgement and coverage are needed" },
  { value: "Hybrid", label: "Often the strongest operating model" },
];

const sections = [
  {
    id: "define",
    title: "What people mean by an AI employee",
    html: '<p>An AI employee is usually an AI agent or workflow that performs a defined set of digital tasks: triaging leads, drafting replies, preparing reports, checking systems, updating records, summarising documents, or routing work to humans.</p><p>The phrase can be misleading. An AI employee is not a general-purpose member of staff. It needs clear instructions, tool access, guardrails, and a defined workflow. When those pieces are in place, it can handle routine work with speed and consistency.</p><p>OpenClaw is one way to create this kind of operating layer, especially when the business wants scheduled work, memory, approvals, browser actions, and integrations with existing systems.</p>',
  },
  {
    id: "ai-wins",
    title: "Where an AI employee beats outsourcing",
    html: '<p>AI wins when the work is repetitive, digital, rules-based, time-sensitive, and easy to review. Examples include first-pass inbox triage, CRM cleanup, report drafting, internal summaries, content operations, lead enrichment, supplier chasing, and admin checks.</p><p>AI also wins when the task needs to run frequently or outside office hours. A virtual assistant or outsourced team can provide coverage, but an AI workflow can often monitor, draft, and prepare context instantly for a human to review later.</p><p>The strongest use case is not replacing judgement. It is removing the mechanical steps around judgement so people start from better context.</p>',
  },
  {
    id: "outsourcing-wins",
    title: "Where outsourcing is still better",
    html: '<p>Outsourcing wins when the work needs flexible judgement, direct human communication, emotional intelligence, escalation handling, or messy context that changes every day. A good outsourced assistant can spot nuance that a rigid workflow may miss.</p><p>Outsourcing can also be better when the business has not yet documented the work. If nobody can explain the workflow clearly, asking an AI agent to run it is premature. A human operator can help discover the process before automation is designed.</p><p>For many businesses, the right answer is to outsource the judgement-heavy layer and use AI to handle the repeatable preparation, drafting, checking, and follow-up around it.</p>',
  },
  {
    id: "tradeoffs",
    title: "Cost, control, and risk tradeoffs",
    html: '<p>AI workflows can be cheaper per task, faster, and more consistent, but they need setup, testing, and ongoing oversight. Outsourcing can be easier to start, but costs scale with hours and quality depends heavily on the person or team assigned.</p><p>Control is different too. With AI, the business needs strong rules, permissions, and audit trails. With outsourcing, the business needs onboarding, supervision, confidentiality, and quality checks. Neither is automatically safer.</p><p>For sensitive workflows, use human approvals either way. The issue is not whether the work is done by AI or an outsourced person. The issue is whether the business has enough control over the outcome.</p>',
  },
  {
    id: "framework",
    title: "A simple decision framework",
    html: '<p>Choose AI first when the task is repeatable, digital, easy to measure, and currently wasting internal time. Choose outsourcing first when the workflow is still unclear, judgement-heavy, relationship-led, or needs flexible human coverage.</p><p>Choose a hybrid model when the work has both. For example, an AI agent can prepare candidate shortlists, draft client updates, summarise support tickets, or build weekly reports while a human reviews, edits, and handles exceptions.</p><p>Blue Canvas often starts by mapping the workflow into three buckets: automate, assist, and keep human. That prevents over-automation while still attacking the admin that slows the business down.</p>',
  },
];

const faqs = [
  { question: "Is an AI employee cheaper than outsourcing?", answer: "For repeatable digital tasks, often yes after setup. For judgement-heavy work, outsourcing may still be better value." },
  { question: "Can an AI employee replace a virtual assistant?", answer: "It can replace or reduce some task-based VA work, but not broad judgement, relationship handling, or messy operational ownership." },
  { question: "What should be automated first?", answer: "Start with a repetitive workflow that has clear inputs, clear outputs, frequent volume, and low risk when reviewed by a human." },
  { question: "Is outsourcing safer than AI?", answer: "Not automatically. Both need controls. AI needs permissions, audit trails, and approvals. Outsourcing needs onboarding, confidentiality, and quality checks." },
  { question: "Can Blue Canvas help compare the options?", answer: "Yes. Blue Canvas can map the work and recommend whether AI, outsourcing, hiring, or a hybrid model is the best commercial fit." },
];

const relatedGuides = [
  { href: "/guides/ai-employees-for-business", title: "AI Employees for Business" },
  { href: "/guides/openclaw-vs-hiring-staff", title: "OpenClaw vs Hiring Staff" },
  { href: "/guides/openclaw-vs-virtual-assistant-cost", title: "OpenClaw vs Virtual Assistant Costs" },
  { href: "/guides/ai-automation-vs-outsourcing", title: "AI Automation vs Outsourcing" },
];

export default function AIEmployeeVsOutsourcingPage() {
  return (
    <GuidePageTemplate
      badge="Operating Model Guide 2026"
      title="AI Employee vs"
      highlight="Outsourcing"
      description="AI employees, virtual assistants, outsourced teams, and internal hires all solve different capacity problems. The right answer depends on how repeatable, risky, and judgement-heavy the work is."
      primaryCtaLabel="Read the guide"
      primaryCtaHref="#guide"
      secondaryCtaLabel="Compare options"
      secondaryCtaHref="#assessment"
      stats={stats}
      sections={sections}
      faqs={faqs}
      relatedGuides={relatedGuides}
      sidebarTitle="Quick decision"
      sidebarPoints={["Use AI for repeatable digital workflows.", "Use outsourcing for flexible human judgement and coverage.", "Use a hybrid model when AI can prepare and people approve."]}
      assessmentDescription="Blue Canvas can review the workflow and show whether AI automation, outsourcing, hiring, or a hybrid model is the most sensible next move."
      contactTitle="Book a workflow model review"
      contactDescription="Tell us the work you are trying to remove, delegate, or automate"
      practicalTakeawayText="Do not compare AI and outsourcing in the abstract. Break the workload into tasks, decide what needs judgement, and automate the repeatable parts before paying humans to do mechanical work."
    />
  );
}
