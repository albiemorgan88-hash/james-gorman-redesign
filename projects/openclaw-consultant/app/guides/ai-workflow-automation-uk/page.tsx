import type { Metadata } from "next";
import GuidePageTemplate from "@/components/GuidePageTemplate";

export const metadata: Metadata = {
  title: "AI Workflow Automation UK: Where It Actually Creates Value",
  description:
    "A practical guide to AI workflow automation for UK businesses, including where it fits, where it goes wrong, and how to design the first workflow sensibly.",
  keywords: [
    "ai workflow automation uk",
    "workflow automation with ai",
    "ai automation consultant uk",
    "ai workflow consultant",
    "business process automation uk",
    "blue canvas",
  ],
  alternates: {
    canonical: "https://openclawconsultant.co.uk/guides/ai-workflow-automation-uk",
  },
  openGraph: {
    title: "AI Workflow Automation UK: Where It Actually Creates Value",
    description:
      "How UK businesses should think about AI workflow automation before buying tools or hiring delivery help.",
    url: "https://openclawconsultant.co.uk/guides/ai-workflow-automation-uk",
    type: "article",
  },
};

const stats = [
  { value: "1 workflow", label: "Usually beats a broad transformation promise" },
  { value: "3 signals", label: "Repetition, delay, and handoff friction make strong targets" },
  { value: "Safer ROI", label: "Comes from controlled rollout and honest measurement" },
];

const sections = [
  {
    id: "what-it-actually-is",
    title: "What AI workflow automation actually means in practice",
    html:
      "<p>AI workflow automation is not just asking a model for help. It is using AI inside a repeatable operating flow that moves work from one step to the next with sensible rules, reviews, and outcomes.</p><p>That could mean triaging enquiries, summarising documents, routing tasks, generating drafts, checking exceptions, or preparing decisions for human approval. The point is not the prompt itself. The point is the workflow around it.</p><p>That distinction matters because businesses do not buy AI for novelty. They buy it to remove drag.</p>",
  },
  {
    id: "where-it-fits-best",
    title: "Where AI workflow automation fits best for UK businesses",
    html:
      "<p>The strongest first targets are repetitive workflows with clear inputs and obvious pain. Think lead handling, inbox triage, recurring reports, customer onboarding, sales follow-up, or internal admin handoffs.</p><p>Good targets usually share three traits. The work happens often. The team already knows the rough decision pattern. And delay or inconsistency is costing time, margin, or responsiveness.</p><p>If the process is chaotic, political, or undefined, AI will not fix that. It will simply expose it faster.</p>",
  },
  {
    id: "why-projects-go-wrong",
    title: "Why so many automation projects go wrong",
    html:
      "<p>Most failures start with scope. Buyers try to automate too much at once, skip ownership, or buy tools before agreeing what success should look like. The result is a workflow that feels clever but does not stick operationally.</p><p>The second problem is weak approval design. When nobody knows where human judgement should stay, trust drops fast.</p><p>The third problem is measurement. If the business cannot see hours saved, speed gained, or errors reduced, the automation starts to feel like theatre rather than progress.</p>",
  },
  {
    id: "how-to-start-well",
    title: "How to start AI workflow automation properly",
    html:
      "<p>Start with one painful workflow, one owner, and one number that should improve. Keep the first rollout narrow, visible, and easy to review.</p><p>Then choose the lightest stack that can support the job. Some workflows need agent orchestration. Some only need a leaner automation layer. The good decision is the one that matches the process honestly.</p><p>Useful next reads are <a href=\"/guides/ai-implementation-consultant-uk\">AI Implementation Consultant UK</a>, <a href=\"/guides/openclaw-for-business\">OpenClaw for Business</a>, and <a href=\"/guides/ai-readiness-assessment-guide\">AI Readiness Assessment Guide</a>.</p>",
  },
];

const faqs = [
  { question: "What is AI workflow automation?", answer: "It is AI embedded inside a repeatable business process with clear steps, rules, and outcomes." },
  { question: "What is the best first workflow to automate?", answer: "Usually a repetitive process with visible drag and a named owner, like lead triage or reporting." },
  { question: "Does every workflow need an AI agent platform?", answer: "No. Some do, some do not. The process should choose the stack, not the other way round." },
  { question: "How should UK businesses measure success?", answer: "Track time saved, response speed, error reduction, conversion uplift, or cleaner handoffs against a real baseline." },
  { question: "Should humans stay in the loop?", answer: "Yes, wherever downside, brand trust, or compliance risk matter." },
  { question: "Can small businesses benefit from workflow automation?", answer: "Absolutely. Smaller teams often feel the time savings even more sharply." },
];

const relatedGuides = [
  { href: "/guides/ai-implementation-consultant-uk", title: "AI Implementation Consultant UK" },
  { href: "/guides/openclaw-for-business", title: "OpenClaw for Business" },
  { href: "/guides/ai-readiness-assessment-guide", title: "AI Readiness Assessment Guide" },
  { href: "/guides/ai-agents-for-customer-support", title: "AI Customer Service Automation UK" },
];

export default function AIWorkflowAutomationUKPage() {
  return (
    <GuidePageTemplate
      canonicalPath="/guides/ai-workflow-automation-uk"
      badge="Workflow Guide 2026"
      title="AI Workflow"
      highlight="Automation UK"
      description="The useful question is not whether AI can help. It is which workflow should go first, how the risk is controlled, and what number should improve."
      primaryCtaLabel="Read the guide"
      primaryCtaHref="#guide"
      secondaryCtaLabel="Assess our workflow"
      secondaryCtaHref="#assessment"
      stats={stats}
      sections={sections}
      faqs={faqs}
      relatedGuides={relatedGuides}
      assessmentDescription="Blue Canvas can review the workflow you want to improve, show where AI automation fits, and map the smallest sensible route to proof."
      contactTitle="Book an AI workflow review"
      contactDescription="Tell us what process is slow, repetitive, or messy today"
      practicalTakeawayText="Automation gets valuable when a workflow becomes clearer, faster, and easier to trust. If the process is still vague, fix that first."
    />
  );
}
