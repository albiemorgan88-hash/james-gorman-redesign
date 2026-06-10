import type { Metadata } from "next";
import GuidePageTemplate from "@/components/GuidePageTemplate";

export const metadata: Metadata = {
  title: "AI Implementation Services UK: From Pilot to Live Workflow",
  description:
    "A practical guide to AI implementation services in the UK: what delivery should include, how pilots work, and how to move from idea to live workflow.",
  keywords: [
    "ai implementation services",
    "ai implementation services uk",
    "ai implementation consultant",
    "ai implementation consultant uk",
    "ai automation implementation uk",
    "openclaw implementation",
    "blue canvas",
  ],
  alternates: { canonical: "https://openclawconsultant.co.uk/guides/ai-implementation-services-uk" },
  openGraph: {
    title: "AI Implementation Services UK: From Pilot to Live Workflow",
    description: "What UK businesses should expect from AI implementation services before buying tools or starting a rollout.",
    url: "https://openclawconsultant.co.uk/guides/ai-implementation-services-uk",
    type: "article",
  },
};

const stats = [
  { value: "Assess", label: "Confirm workflow, data, and risk" },
  { value: "Build", label: "Pilot the smallest useful version" },
  { value: "Operate", label: "Monitor, support, and improve after launch" },
];

const sections = [
  {
    id: "what-services-include",
    title: "What AI implementation services should include",
    html:
      "<p>AI implementation services should turn a selected use case into a working business process. That normally means assessment, workflow design, tool selection, build, testing, handover, monitoring, and support.</p><p>The output should not be a generic AI roadmap. It should be a working pilot or live workflow that your team can understand, review, and improve.</p>",
  },
  {
    id: "delivery-phases",
    title: "The delivery phases that matter",
    html:
      "<p>The first phase is assessment: workflow, owner, data, constraints, risk, and value. The second phase is design: prompts, rules, integrations, permissions, and approval points. The third phase is implementation: build the narrowest working version and test it against real examples. The fourth phase is operation: monitor, fix, train, and decide what expands.</p><p>If a provider skips operation, the project is likely to decay after launch.</p>",
  },
  {
    id: "pilot-scope",
    title: "How to scope the first pilot",
    html:
      "<p>Choose a workflow with clear repetition, visible pain, and a metric that can move quickly. Lead response, inbox triage, customer onboarding, reporting, booking follow-up, invoice handling, and document summaries are common first candidates.</p><p>Keep the first scope small enough to prove. A good pilot should make the next investment decision easier, not harder.</p><p>For workflow examples, read <a href=\"/guides/ai-email-automation-uk\">AI Email Automation UK</a>, <a href=\"/guides/ai-receptionist-uk\">AI Receptionist UK</a>, and <a href=\"/guides/ai-invoice-processing\">AI Invoice Processing</a>.</p>",
  },
  {
    id: "openclaw-implementation",
    title: "Where OpenClaw implementation fits",
    html:
      "<p>OpenClaw implementation is useful when the workflow needs an agent to operate across messages, files, browser tasks, schedules, memory, and approvals. The implementation work should define what the agent can access, what it can draft, what it can update, and where a person must approve.</p><p>Useful next reads are <a href=\"/guides/openclaw-implementation-consultant-uk\">OpenClaw Implementation Consultant UK</a>, <a href=\"/guides/openclaw-deployment-service-uk\">OpenClaw Deployment Service UK</a>, and <a href=\"/guides/openclaw-safe-setup-checklist\">OpenClaw Safe Setup Checklist</a>.</p>",
  },
];

const faqs = [
  { question: "What are AI implementation services?", answer: "They are hands-on delivery services that move an AI use case from assessment and design into a working workflow with testing, handover, and support." },
  { question: "How is implementation different from consultancy?", answer: "Consultancy defines direction and fit. Implementation builds and operates the selected workflow." },
  { question: "What should the first pilot include?", answer: "A clear workflow, owner, data boundary, success metric, approval model, test examples, and a post-launch support route." },
  { question: "Should implementation start with software?", answer: "No. It should start with the workflow and risk model, then choose the lightest suitable stack." },
  { question: "Can OpenClaw be implemented for SMEs?", answer: "Yes, if the workflow is real, repeatable, and worth operating through an agent layer." },
  { question: "How do you know it worked?", answer: "Measure time saved, response speed, fewer errors, cleaner handoffs, conversion lift, or reduced backlog." },
];

const relatedGuides = [
  { href: "/guides/ai-implementation-consultant-uk", title: "AI Implementation Consultant UK" },
  { href: "/guides/openclaw-implementation-consultant-uk", title: "OpenClaw Implementation Consultant UK" },
  { href: "/guides/ai-workflow-automation-uk", title: "AI Workflow Automation UK" },
  { href: "/guides/openclaw-safe-setup-checklist", title: "OpenClaw Safe Setup Checklist" },
];

export default function AIImplementationServicesUKPage() {
  return (
    <GuidePageTemplate
      canonicalPath="/guides/ai-implementation-services-uk"
      badge="Implementation Guide 2026"
      title="AI Implementation"
      highlight="Services UK"
      description="What good AI implementation services should do: choose the right workflow, build the smallest useful pilot, and support it after launch."
      primaryCtaLabel="Read the guide"
      primaryCtaHref="#guide"
      secondaryCtaLabel="Scope implementation"
      secondaryCtaHref="#assessment"
      stats={stats}
      sections={sections}
      faqs={faqs}
      relatedGuides={relatedGuides}
      sidebarTitle="Implementation is an operating job"
      sidebarPoints={[
        "The workflow comes before software.",
        "The pilot should create evidence quickly.",
        "Launch without monitoring is unfinished work.",
      ]}
      assessmentDescription="Blue Canvas can scope the first implementation, choose the right level of automation, and build a controlled OpenClaw or AI workflow pilot."
      contactTitle="Book an implementation review"
      contactDescription="Tell us what AI workflow you want live"
      practicalTakeawayText="Implementation should end with a workflow the team can run, not a demo that only works when the consultant is in the room."
    />
  );
}
