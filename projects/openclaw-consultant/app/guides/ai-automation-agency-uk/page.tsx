import type { Metadata } from "next";
import GuidePageTemplate from "@/components/GuidePageTemplate";

export const metadata: Metadata = {
  title: "AI Automation Agency UK: What to Expect Before You Buy",
  description:
    "How to choose an AI automation agency in the UK, what good delivery includes, when an agency is too heavy, and how to start with one measurable workflow.",
  keywords: [
    "ai automation agency uk",
    "ai automation agency",
    "ai automation consultant uk",
    "ai workflow automation",
    "business process automation consultant",
    "openclaw automation",
    "blue canvas",
  ],
  alternates: { canonical: "https://openclawconsultant.co.uk/guides/ai-automation-agency-uk" },
  openGraph: {
    title: "AI Automation Agency UK: What to Expect Before You Buy",
    description: "A practical buyer guide for UK businesses comparing AI automation agencies, consultants, and agent workflow delivery.",
    url: "https://openclawconsultant.co.uk/guides/ai-automation-agency-uk",
    type: "article",
  },
};

const stats = [
  { value: "Assess", label: "The workflow before the tools" },
  { value: "Pilot", label: "One measurable use case before scale" },
  { value: "Support", label: "Fixes and improvement after go-live" },
];

const sections = [
  {
    id: "what-an-agency-should-do",
    title: "What an AI automation agency should do",
    html:
      "<p>An AI automation agency should turn repeated operational work into a clearer, faster, safer workflow. That can involve AI agents, integrations, prompts, dashboards, documents, and approval flows, but the outcome should be operational improvement rather than a collection of clever demos.</p><p>The useful agency is the one that asks hard questions about process, ownership, data, risk, and measurement before building.</p>",
  },
  {
    id: "agency-vs-consultant",
    title: "Agency, consultant, or implementation partner?",
    html:
      "<p>An agency can be useful when you need multiple skills at once: strategy, build, integrations, content, analytics, and ongoing support. A specialist consultant can be better when the problem is narrow and you want direct senior delivery.</p><p>For OpenClaw and agent workflows, the best fit is often a hybrid: senior workflow judgement, hands-on setup, and enough technical delivery to make the first process real.</p><p>If your problem is mostly scoping, read <a href=\"/guides/ai-consultancy-uk\">AI Consultancy UK</a>. If it is delivery, read <a href=\"/guides/ai-automation-consultant-uk\">AI Automation Consultant UK</a>.</p>",
  },
  {
    id: "what-good-delivery-includes",
    title: "What good delivery includes",
    html:
      "<p>Good delivery should include workflow mapping, data access review, approval design, implementation, testing, handover, monitoring, and a support route. The agency should be clear about what the automation can do, what it should only draft, and what it must never do without human approval.</p><p>Look for proposals that name the first workflow and the success metric. Avoid proposals that promise broad transformation before proving a single operational case.</p>",
  },
  {
    id: "where-openclaw-fits",
    title: "Where OpenClaw automation fits",
    html:
      "<p>OpenClaw fits when work needs an operating agent rather than a simple automation rule. Examples include recurring checks, research tasks, customer follow-up drafts, reporting workflows, site monitoring, lead summaries, document preparation, and internal knowledge agents.</p><p>Useful next reads are <a href=\"/guides/ai-workflow-automation-uk\">AI Workflow Automation UK</a>, <a href=\"/guides/openclaw-for-business\">OpenClaw for Business</a>, and <a href=\"/guides/openclaw-safe-setup-checklist\">OpenClaw Safe Setup Checklist</a>.</p>",
  },
];

const faqs = [
  { question: "What is an AI automation agency?", answer: "It is a delivery partner that helps businesses automate workflows using AI, integrations, agents, rules, and support processes." },
  { question: "How should a UK business choose one?", answer: "Choose based on workflow clarity, practical delivery evidence, governance, measurement, and post-launch support rather than tool logos alone." },
  { question: "Should an agency start with strategy or build?", answer: "It should start with enough assessment to choose the right first workflow, then move quickly into a measured pilot." },
  { question: "Is OpenClaw an agency tool?", answer: "OpenClaw can be part of the delivery stack when an agent needs to work across files, browser tasks, messages, memory, and approvals." },
  { question: "When is an agency too heavy?", answer: "If you only need one narrow workflow reviewed or fixed, a specialist consultant may be faster and more cost-effective." },
  { question: "What should the first project prove?", answer: "It should prove time saved, faster response, fewer errors, cleaner handoffs, better lead handling, or another measurable operating improvement." },
];

const relatedGuides = [
  { href: "/guides/ai-consultancy-uk", title: "AI Consultancy UK" },
  { href: "/guides/ai-automation-consultant-uk", title: "AI Automation Consultant UK" },
  { href: "/guides/ai-workflow-automation-uk", title: "AI Workflow Automation UK" },
  { href: "/guides/openclaw-for-business", title: "OpenClaw for Business" },
];

export default function AIAutomationAgencyUKPage() {
  return (
    <GuidePageTemplate
      canonicalPath="/guides/ai-automation-agency-uk"
      badge="Agency Buyer Guide 2026"
      title="AI Automation"
      highlight="Agency UK"
      description="What a useful AI automation agency should actually deliver: one clear workflow, sensible guardrails, working implementation, and evidence before scale."
      primaryCtaLabel="Read the guide"
      primaryCtaHref="#guide"
      secondaryCtaLabel="Review our automation fit"
      secondaryCtaHref="#assessment"
      stats={stats}
      sections={sections}
      faqs={faqs}
      relatedGuides={relatedGuides}
      sidebarTitle="Buy delivery, not theatre"
      sidebarPoints={[
        "A named workflow beats a broad AI promise.",
        "The operating model should be clear before tooling expands.",
        "Support after launch matters as much as the demo.",
      ]}
      assessmentDescription="Blue Canvas can review the workflow, identify whether agency-style delivery is needed, and show where OpenClaw automation can help."
      contactTitle="Book an automation agency review"
      contactDescription="Tell us what process you want to automate"
      practicalTakeawayText="The best AI automation agency engagement is small enough to prove and serious enough to survive contact with real operations."
    />
  );
}
