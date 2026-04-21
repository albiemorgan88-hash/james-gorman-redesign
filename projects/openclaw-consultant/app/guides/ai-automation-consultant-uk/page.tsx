import type { Metadata } from "next";
import GuidePageTemplate from "@/components/GuidePageTemplate";

export const metadata: Metadata = {
  title: "AI Automation Consultant UK: What Good Delivery Looks Like",
  description:
    "How to choose an AI automation consultant in the UK, what a serious engagement should include, and how buyers avoid paying for vague transformation promises.",
  keywords: [
    "ai automation consultant uk",
    "ai automation consultant",
    "ai consultant uk",
    "business automation consultant",
    "workflow automation consultant uk",
    "blue canvas",
  ],
  alternates: {
    canonical: "https://openclawconsultant.co.uk/guides/ai-automation-consultant-uk",
  },
  openGraph: {
    title: "AI Automation Consultant UK: What Good Delivery Looks Like",
    description:
      "A grounded buyer guide for UK businesses hiring AI automation help.",
    url: "https://openclawconsultant.co.uk/guides/ai-automation-consultant-uk",
    type: "article",
  },
};

const stats = [
  { value: "4 stages", label: "Assess, design, pilot, then improve" },
  { value: "1 owner", label: "Every automated workflow needs accountability" },
  { value: "Better buying", label: "Starts with workflow clarity, not software shopping" },
];

const sections = [
  {
    id: "what-you-should-be-buying",
    title: "What you should actually be buying from an AI automation consultant",
    html:
      "<p>You should be buying workflow judgement, rollout discipline, and a safer path to measurable results. Not just prompts, dashboards, or tool recommendations.</p><p>A good consultant helps the business decide what should be automated, what should stay human, where approvals belong, and what success will look like once the first novelty fades.</p><p>That is why the best automation consultants feel commercially grounded. They connect the work to delay, cost, speed, quality, or margin rather than staying in pure tech language.</p>",
  },
  {
    id: "what-good-engagement-includes",
    title: "What a serious engagement should include",
    html:
      "<p>First comes assessment. The consultant should understand the workflow well enough to explain it back to you clearly. Then comes design, where rules, handoffs, approvals, and tooling are mapped. Then a pilot, where the first live use case runs with visible measurement. Then improvement, where the learning from the pilot shapes the next step.</p><p>If any of those stages are missing, the work is likely to feel weaker than the proposal promised.</p><p>Buyers should also expect honesty about fit. Sometimes the right answer is a lighter automation stack. Sometimes the right answer is fixing the process before adding AI at all.</p>",
  },
  {
    id: "how-to-judge-proposals",
    title: "How to judge proposals without getting dazzled",
    html:
      "<p>Look for plain language, named outcomes, and clear boundaries. Who owns the workflow. What systems are touched. Where approvals sit. What number should improve. What happens after launch.</p><p>Be cautious of proposals that feel huge before the first use case has proved itself. Good consultants are usually comfortable starting smaller because they trust evidence more than theatre.</p><p>That discipline often saves buyers the most money.</p>",
  },
  {
    id: "where-agent-workflows-fit",
    title: "Where agent workflows like OpenClaw fit",
    html:
      "<p>Once automation starts crossing channels, browser tasks, recurring checks, memory, and approvals, stronger orchestration starts to matter. That is where agent stacks like OpenClaw become commercially interesting.</p><p>Not every automation problem needs that level of capability, but many growing businesses reach the point where single-step tools stop being enough. The useful consultant helps you recognise that moment without forcing it too early.</p><p>Useful next reads are <a href=\"/guides/openclaw-consultant-uk\">OpenClaw Consultant UK</a>, <a href=\"/guides/ai-workflow-automation-uk\">AI Workflow Automation UK</a>, and <a href=\"/guides/ai-readiness-assessment-uk\">AI Readiness Assessment UK</a>.</p>",
  },
];

const faqs = [
  { question: "What does an AI automation consultant do?", answer: "They help assess, design, pilot, and improve automated workflows so the business gets a measurable result instead of disconnected tooling." },
  { question: "How is this different from general AI consulting?", answer: "Automation consulting is more operational. It focuses on workflows, handoffs, approvals, and delivery rather than broad strategy alone." },
  { question: "Should SMEs start with one workflow?", answer: "Usually yes. One proven workflow creates a much stronger basis for expansion." },
  { question: "What should a proposal make clear?", answer: "Scope, ownership, systems touched, approval points, success measures, and what happens after go-live." },
  { question: "Do we need new software first?", answer: "Usually not. Define the workflow and delivery approach first, then choose the lightest suitable stack." },
  { question: "Can OpenClaw be part of automation work?", answer: "Yes, especially when the workflow spans channels, browser tasks, memory, and recurring actions." },
];

const relatedGuides = [
  { href: "/guides/ai-implementation-consultant-uk", title: "AI Implementation Consultant UK" },
  { href: "/guides/ai-workflow-automation-uk", title: "AI Workflow Automation UK" },
  { href: "/guides/openclaw-consultant-uk", title: "OpenClaw Consultant UK" },
  { href: "/guides/ai-readiness-assessment-uk", title: "AI Readiness Assessment UK" },
];

export default function AIAutomationConsultantUKPage() {
  return (
    <GuidePageTemplate
      badge="Buyer Guide 2026"
      title="AI Automation"
      highlight="Consultant UK"
      description="A strong automation consultant should leave you with a clearer workflow, cleaner guardrails, and evidence you can actually defend commercially."
      primaryCtaLabel="Read the guide"
      primaryCtaHref="#guide"
      secondaryCtaLabel="Review our process"
      secondaryCtaHref="#assessment"
      stats={stats}
      sections={sections}
      faqs={faqs}
      relatedGuides={relatedGuides}
      assessmentDescription="Blue Canvas helps UK businesses scope the workflow, choose the right level of automation, and turn AI into something operationally useful fast."
      contactTitle="Book an automation review"
      contactDescription="Tell us what workflow you want to improve and what result matters commercially"
      practicalTakeawayText="If the proposal cannot explain the first pilot in plain operational language, it is probably too vague to buy yet."
    />
  );
}
