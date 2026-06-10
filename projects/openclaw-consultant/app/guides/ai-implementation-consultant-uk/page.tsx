import type { Metadata } from "next";
import GuideLandingPage from "@/components/GuideLandingPage";

export const metadata: Metadata = {
  title: "AI Implementation Consultant UK: What Good Delivery Actually Looks Like",
  description: "How to choose an AI implementation consultant in the UK, what a serious delivery plan includes, typical phases, and how buyers avoid expensive mistakes.",
  keywords: [
    "ai implementation consultant uk",
    "ai implementation consultant",
    "ai consultant uk",
    "ai rollout uk",
    "blue canvas"
  ],
  alternates: { canonical: "https://openclawconsultant.co.uk/guides/ai-implementation-consultant-uk" },
  openGraph: {
    title: "AI Implementation Consultant UK: What Good Delivery Actually Looks Like",
    description: "How to choose an AI implementation consultant in the UK, what a serious delivery plan includes, typical phases, and how buyers avoid expensive mistakes.",
    url: "https://openclawconsultant.co.uk/guides/ai-implementation-consultant-uk",
    type: "article",
  },
};

const stats = [
  { value: "4 phases", label: "Assess, design, pilot, then scale" },
  { value: "1 owner", label: "Every workflow needs named accountability" },
  { value: "Real ROI", label: "Time, margin, speed, or quality improvements" },
];

const sections = [
  {
    id: "what-you-are-buying",
    title: "What you are actually buying from an AI implementation consultant",
    html: "<p>Buyers often think they are hiring someone to install tools. They are not. A strong implementation consultant is there to redesign a workflow around a sensible mix of prompts, automation, approvals, integrations, and operating rules.</p><p>That distinction matters because tools are the easy bit. The expensive part is deciding what should change, how the team should use it, which outputs require review, and how success is measured once the first novelty wears off.</p><p>In the UK market, the best consultants behave more like workflow operators than software resellers. They pressure-test the process, choose the lightest viable stack, and keep the project close to a commercial outcome rather than turning it into an open-ended innovation exercise.</p>",
  },
  {
    id: "delivery-plan",
    title: "What a serious delivery plan includes",
    html: "<p>The first phase is assessment. That means understanding the workflow, identifying the pain, checking the data, and confirming where risk or regulation sit. A good consultant should be able to explain the whole process back to you in plain English before building anything.</p><p>The second phase is design. This is where prompts, rules, handoffs, integrations, approval points, and fallback paths are mapped. Buyers should expect to see exactly what the automation touches and where a human remains responsible.</p><p>The third phase is pilot delivery. This is normally where the first live use case runs in a controlled way with clear measurement. You are looking for boring evidence here: fewer missed follow-ups, faster first response, cleaner summaries, fewer admin hours, or stronger conversion from the same lead volume.</p><p>The final phase is scale. Only once the pilot proves itself should the business decide whether to extend the same operating pattern to other workflows or departments.</p>",
  },
  {
    id: "how-to-choose",
    title: "How to choose the right consultant",
    html: "<p>Ask them what workflows they would reject, not just what they would automate. That one question tells you quickly whether they understand risk, delivery, and operational fit. Anyone who says everything is ready for AI on day one is probably selling confidence instead of judgement.</p><p>Ask for examples of ownership, approvals, and measurement. Ask how they handle data sensitivity and what happens if outputs are wrong. Ask whether they can work with the tools you already pay for before introducing more software. Ask what the first 30 days would look like.</p><p>A credible consultant should also be comfortable starting small. If the first recommendation is a giant transformation programme rather than one or two measurable workflows, the buyer should slow down.</p>",
  },
  {
    id: "where-openclaw-fits",
    title: "Where OpenClaw and agent workflows fit",
    html: "<p>Once the business moves beyond single prompts and manual copy-paste, agent workflows start to matter. That is where platforms like OpenClaw come in. They let a business run tasks across channels, browser actions, memory, approvals, and subagents in a way that feels closer to operations than a one-off chatbot.</p><p>That does not mean every buyer needs an agent stack on day one. Some should begin with narrow automations. But if the workflow spans inboxes, documents, browser tasks, recurring checks, and human approvals, the case for a stronger operating layer becomes much clearer.</p><p>Useful next reads are <a href=\"/guides/ai-readiness-assessment-uk\">AI Readiness Assessment UK</a>, <a href=\"/guides/openclaw-for-small-business-uk\">OpenClaw for Small Business UK</a>, and <a href=\"/guides/openclaw-vs-manus\">OpenClaw vs Manus</a>.</p>",
  },
];

const faqs = [
  { question: "What does an AI implementation consultant do?", answer: "They help assess, design, pilot, and scale AI-enabled workflows so the business gets a measurable result rather than a pile of disconnected tools." },
  { question: "How is implementation different from an AI audit?", answer: "The audit identifies opportunity and readiness. Implementation turns a selected workflow into a live operating process with rules, ownership, and measurement." },
  { question: "Should we buy software before hiring a consultant?", answer: "Usually no. It is better to define the workflow and delivery approach first, then choose the lightest tool stack that supports it." },
  { question: "What is the first thing a buyer should ask?", answer: "Ask what workflow they would start with, why, how it would be measured, and where human approval would remain in place." },
  { question: "Do SMEs need a full transformation programme?", answer: "Rarely at the start. Most should prove one or two workflows first, then scale from evidence." },
  { question: "Can OpenClaw be part of implementation work?", answer: "Yes, especially when the workflow crosses channels, browser tasks, memory, approvals, and recurring actions." },
];

const relatedGuides = [
  { href: "/guides/ai-readiness-assessment-uk", title: "AI Readiness Assessment UK" },
  { href: "/guides/openclaw-for-small-business-uk", title: "OpenClaw for Small Business UK" },
  { href: "/guides/ai-governance-policy-template", title: "AI Governance Policy Template" },
  { href: "/guides/openclaw-vs-manus", title: "OpenClaw vs Manus" },
];

export default function AIImplementationConsultantUKPage() {
  return (
    <GuideLandingPage
      canonicalPath="/guides/ai-implementation-consultant-uk"
      badge="Buyer Guide 2026"
      title="AI Implementation Consultant UK"
      intro="The right consultant should help you redesign a workflow, prove the business case, and leave you with something your team can actually run, not just a stack of software and a slide deck."
      stats={stats}
      sections={sections}
      faqs={faqs}
      relatedGuides={relatedGuides}
      sidebarTitle="What good delivery feels like"
      sidebarBody="It feels boring in the right way. Clear workflow, named owner, strong approvals, and numbers you can explain to finance."
      sidebarPoints={[
        "Design before procurement.",
        "Pilot before scale.",
        "Measure the workflow, not just tool usage.",
      ]}
      assessmentIntro="Blue Canvas helps buyers scope the workflow, choose the right level of automation, and turn AI into an operating process with ownership and controls."
      practicalTakeaway="If the consultant cannot explain the first pilot in simple operational terms, they are probably not ready to deliver it well either."
      takeawayCards={[
        { title: "Buy the workflow", text: "The tool matters less than the delivery pattern and the commercial result it creates." },
        { title: "Keep it measurable", text: "Choose a first use case where time saved, speed gained, or quality improved can be seen quickly." },
        { title: "Scale from proof", text: "Once one workflow works, the business gets a much stronger basis for the next decision." },
      ]}
    />
  );
}
