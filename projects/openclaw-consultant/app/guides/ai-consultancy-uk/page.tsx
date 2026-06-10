import type { Metadata } from "next";
import GuidePageTemplate from "@/components/GuidePageTemplate";

export const metadata: Metadata = {
  title: "AI Consultancy UK: How to Choose Practical AI Help",
  description:
    "A buyer guide to AI consultancy in the UK: what good consultants deliver, how to scope the first workflow, what to avoid, and where OpenClaw-style agents fit.",
  keywords: [
    "ai consultancy uk",
    "ai consulting uk",
    "ai consultant uk",
    "ai automation consultant",
    "ai implementation consultant uk",
    "openclaw consultant",
    "blue canvas",
  ],
  alternates: { canonical: "https://openclawconsultant.co.uk/guides/ai-consultancy-uk" },
  openGraph: {
    title: "AI Consultancy UK: How to Choose Practical AI Help",
    description: "A practical buyer guide for UK businesses comparing AI consultancy, automation delivery, and agent workflow support.",
    url: "https://openclawconsultant.co.uk/guides/ai-consultancy-uk",
    type: "article",
  },
};

const stats = [
  { value: "1 workflow", label: "A useful consultancy engagement starts narrow" },
  { value: "4 checks", label: "Fit, data, risk, and measurable value" },
  { value: "Pilot first", label: "Scale only when the evidence is boringly clear" },
];

const sections = [
  {
    id: "what-ai-consultancy-should-mean",
    title: "What AI consultancy should actually mean",
    html:
      "<p>AI consultancy should not mean a workshop full of vague transformation language. For most UK businesses, useful AI consultancy means finding one or two operational workflows where AI can reduce delay, improve quality, or make a team more responsive.</p><p>The consultant should understand the process, choose the right level of tooling, design the approval model, and help the business prove whether the idea is worth expanding.</p><p>That can include strategy, but the strategy should lead to a practical operating plan.</p>",
  },
  {
    id: "what-to-buy",
    title: "What you should be buying",
    html:
      "<p>The strongest AI consultancy work gives you a workflow map, a risk model, a pilot plan, and a clear view of what should happen after the first test. You should know which systems are involved, who owns the workflow, which outputs need approval, and which metric will decide success.</p><p>Buyers should be cautious when a proposal starts with software before it explains the job to be done. Tool choice matters, but workflow fit matters more.</p><p>For a hands-on delivery route, read <a href=\"/guides/ai-automation-consultant-uk\">AI Automation Consultant UK</a> and <a href=\"/guides/ai-implementation-services-uk\">AI Implementation Services UK</a>.</p>",
  },
  {
    id: "where-openclaw-fits",
    title: "Where OpenClaw-style agents fit",
    html:
      "<p>OpenClaw becomes relevant when the workflow is more than a single prompt or chatbot. If the work spans files, browser actions, internal messages, scheduled checks, memory, and human approvals, an agent operating layer can be more useful than a pile of disconnected automations.</p><p>That does not mean every business needs an agent stack on day one. A good consultant should be willing to say when a lighter workflow is enough and when OpenClaw is the right next step.</p>",
  },
  {
    id: "how-to-choose",
    title: "How to choose an AI consultancy in the UK",
    html:
      "<p>Ask what workflow they would start with, what they would refuse to automate, and how they would measure the first month. Good answers should sound specific to your business rather than recycled from a pitch deck.</p><p>Also ask about governance. Any consultant working around customer data, finance, legal, healthcare, HR, or public content should be clear about approvals, logs, rollback, and access boundaries.</p><p>Useful next reads are <a href=\"/guides/ai-readiness-assessment-uk\">AI Readiness Assessment UK</a>, <a href=\"/guides/openclaw-consultant-uk\">OpenClaw Consultant UK</a>, and <a href=\"/guides/ai-governance-policy-template\">AI Governance Policy Template</a>.</p>",
  },
];

const faqs = [
  { question: "What does an AI consultancy do?", answer: "A practical AI consultancy helps a business identify useful workflows, design safe automation, run pilots, and measure whether the work is worth scaling." },
  { question: "How is AI consultancy different from AI automation delivery?", answer: "Consultancy usually covers assessment and direction. Automation delivery turns the selected workflow into a working process with tooling, rules, and support." },
  { question: "Should a UK SME start with a big AI strategy?", answer: "Usually no. Most SMEs learn faster by proving one workflow with clear ownership and a measurable result." },
  { question: "What should be included in the first engagement?", answer: "Workflow assessment, data and risk review, pilot scope, approval design, tool recommendation, and a clear next-step plan." },
  { question: "Can OpenClaw be part of AI consultancy work?", answer: "Yes, especially when the business needs agents that can operate across tools, browser tasks, documents, recurring checks, and human approvals." },
  { question: "What is a warning sign when hiring AI consultants?", answer: "Be cautious if the proposal is tool-led, too broad, unclear on ownership, or unable to explain how success will be measured." },
];

const relatedGuides = [
  { href: "/guides/ai-automation-consultant-uk", title: "AI Automation Consultant UK" },
  { href: "/guides/ai-implementation-services-uk", title: "AI Implementation Services UK" },
  { href: "/guides/openclaw-consultant-uk", title: "OpenClaw Consultant UK" },
  { href: "/guides/ai-readiness-assessment-uk", title: "AI Readiness Assessment UK" },
];

export default function AIConsultancyUKPage() {
  return (
    <GuidePageTemplate
      canonicalPath="/guides/ai-consultancy-uk"
      badge="Buyer Guide 2026"
      title="AI Consultancy"
      highlight="UK"
      description="A practical guide for UK businesses that want useful AI help: what to buy, how to scope the first workflow, and when agent automation is worth it."
      primaryCtaLabel="Read the guide"
      primaryCtaHref="#guide"
      secondaryCtaLabel="Scope our AI opportunity"
      secondaryCtaHref="#assessment"
      stats={stats}
      sections={sections}
      faqs={faqs}
      relatedGuides={relatedGuides}
      sidebarTitle="Good consultancy should be concrete"
      sidebarPoints={[
        "Start with a workflow, not a generic AI roadmap.",
        "Define the owner, data boundary, and approval points.",
        "Use the pilot to decide what deserves more budget.",
      ]}
      assessmentDescription="Blue Canvas can review your workflow, identify where AI can create practical value, and recommend the lightest sensible route to a pilot."
      contactTitle="Book an AI consultancy call"
      contactDescription="Tell us what workflow you want AI to improve"
      practicalTakeawayText="The right AI consultancy engagement should leave the business clearer, safer, and closer to a live workflow that proves value."
    />
  );
}
