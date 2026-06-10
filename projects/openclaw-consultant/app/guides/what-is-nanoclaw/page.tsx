import type { Metadata } from "next";
import GuidePageTemplate from "@/components/GuidePageTemplate";

export const metadata: Metadata = {
  title: "What Is NanoClaw? Lightweight Secure AI Assistant Guide 2026",
  description:
    "A practical guide to NanoClaw: what it is, how it works, where it fits best, and when a smaller container-isolated AI assistant makes more sense than a heavier framework.",
  keywords: [
    "what is nanoclaw",
    "nanoclaw guide",
    "nanoclaw ai assistant",
    "nanoclaw vs openclaw",
    "container isolated ai assistant",
    "claude agent sdk assistant",
    "blue canvas",
  ],
  alternates: {
    canonical: "https://openclawconsultant.co.uk/guides/what-is-nanoclaw",
  },
  openGraph: {
    title: "What Is NanoClaw? Lightweight Secure AI Assistant Guide 2026",
    description:
      "What NanoClaw is, how its container-isolated model works, and who should choose it over a larger AI agent framework.",
    url: "https://openclawconsultant.co.uk/guides/what-is-nanoclaw",
    type: "article",
  },
};

const stats = [
  { value: "1 process", label: "A deliberately small Node.js architecture" },
  { value: "Container isolated", label: "Agent sessions run in Linux containers with mounted access only" },
  { value: "Skills over sprawl", label: "New channels and behaviours are added without turning the core into bloatware" },
];

const sections = [
  {
    id: "what-is-nanoclaw",
    title: "What NanoClaw actually is",
    html: `<p>NanoClaw is a lightweight personal AI assistant built around Claude Code and the Claude Agent SDK. The core idea is straightforward: keep the system small enough to understand, run agent sessions inside isolated Linux containers, and let the user shape the assistant through code changes and skills instead of endless configuration sprawl.</p><p>It is not trying to be an everything-for-everyone framework. Its public positioning is the opposite. One process. A small number of source files. SQLite for state and message storage. Container isolation for execution. Messaging channels and custom behaviour layered on top in a way that stays understandable to the person running it.</p><p>That combination is what makes NanoClaw interesting. It gives people a real AI assistant with memory, scheduled tasks, web access, and messaging integrations, but without the feeling that they have adopted a giant opaque platform they can never properly audit.</p>`,
  },
  {
    id: "why-people-care",
    title: "Why people are paying attention to NanoClaw",
    html: `<p>Most AI agent products become more powerful by becoming more complicated. NanoClaw takes the opposite route. It argues that security, trust, and long-term usefulness often come from <strong>less</strong> software, not more. If you can read the codebase, understand the execution model, and see what is mounted into each container, you are in a much better position to trust the system with real work.</p><p>That is especially appealing to technical founders, developers, operators, and privacy-conscious users who want their assistant close to their own workflows rather than trapped inside a hosted black box. NanoClaw is designed to live on your own machine or infrastructure, speak to you through the messaging channels you already use, and keep context in a way that survives restarts.</p><p>The philosophical appeal matters too. NanoClaw is aimed at the user who would rather own a smaller, more legible assistant than rent a larger system they do not fully understand.</p>`,
  },
  {
    id: "how-it-works",
    title: "How NanoClaw works in practice",
    html: `<p>The architecture is intentionally plain. Channels feed messages into a SQLite-backed system, the orchestrator runs as a single Node.js process, and agent work is executed inside isolated containers. Group context and memory are separated so the assistant can behave differently across chats without blending everything into one messy stream.</p><p>Out of the box, the public documentation emphasises messaging-driven use. You talk to the assistant from channels such as WhatsApp, Telegram, Slack, Discord, or Gmail, depending on the skills and integrations you add. It also supports scheduled tasks, so NanoClaw can run recurring jobs and message results back to you later.</p><p>The setup model is equally opinionated. You clone the repository, start <code>claude</code>, and run <code>/setup</code>. From there, Claude Code handles the installation and environment work. Instead of asking users to click around a dashboard, NanoClaw leans into an AI-native operating model where you describe the change you want and Claude makes the codebase fit.</p><pre><code>git clone https://github.com/qwibitai/nanoclaw.git\ncd nanoclaw\nclaude\n# then run /setup inside Claude Code</code></pre>`,
  },
  {
    id: "where-it-is-strongest",
    title: "Where NanoClaw is strongest",
    html: `<p>NanoClaw looks strongest when the buyer wants a personal or tightly controlled assistant rather than a sprawling internal platform. It is well suited to people who care about local control, understandable architecture, real container isolation, and the ability to fork the software and make it theirs.</p><p>That can make it a very sensible fit for private productivity workflows, technical personal assistants, solo operators, and small teams that want one high-trust system instead of a big framework with a lot of moving parts. If your main question is, <em>can I actually understand what this thing is doing with my data and filesystem?</em>, NanoClaw is clearly designed to answer that concern.</p><p>It is also a good fit when bespoke behaviour matters. The project encourages skills and targeted code changes rather than stuffing every possible feature into the core. That keeps the assistant closer to your actual use case.</p>`,
  },
  {
    id: "where-it-is-weaker",
    title: "Where NanoClaw is the wrong tool",
    html: `<p>NanoClaw is not pretending to be a universal answer. Its own philosophy is that it is built for the individual user and shaped through bespoke forks. That means it may be the wrong tool if you want a broad enterprise platform, a large polished admin surface, or a framework that tries to cover every team workflow out of the box.</p><p>If your organisation needs heavier governance layers, a wider prebuilt ecosystem, or a standardised platform for many non-technical users at once, a larger system may be easier to operationalise. NanoClaw trades some breadth for legibility and control. That trade is attractive for the right buyer and limiting for the wrong one.</p><p>The clean question is this: do you want a smaller assistant you can really own, or a larger platform that abstracts more away? NanoClaw is much more compelling in the first camp.</p>`,
  },
  {
    id: "nanoclaw-vs-heavier-frameworks",
    title: "NanoClaw vs heavier AI agent frameworks",
    html: `<p>The most useful way to think about NanoClaw is not as a generic winner or loser, but as a deliberate design choice. Heavier AI agent frameworks typically win on surface area. They often give you more built-in patterns, more abstractions, and a bigger ready-made ecosystem. NanoClaw wins when you value auditability, container isolation, and architectural simplicity more than breadth.</p><p>That is why it will appeal to some buyers who find larger frameworks impressive but slightly uncomfortable. If the software feels too big to understand, too permissive at runtime, or too tangled to customise safely, NanoClaw becomes very attractive very quickly.</p><p>On the other hand, if you want the system to support many stakeholders and use cases without much code-level involvement from you, NanoClaw may feel too opinionated and too close to the metal. It is designed to be owned, not merely consumed.</p>`,
  },
  {
    id: "bottom-line",
    title: "The bottom line",
    html: `<p>NanoClaw is one of the more interesting AI assistant projects because it takes a position many tools avoid taking: smaller can be better. Smaller can be safer. Smaller can be more trustworthy. And for the right person, smaller can actually be more useful because it stays close to the real workflow instead of disappearing into framework complexity.</p><p>If you want a container-isolated personal assistant that you can inspect, fork, and shape through Claude Code, NanoClaw is worth serious attention. If you want a broader commercial platform with more baked-in structure, it may not be the right fit.</p><p>That is exactly the kind of decision Blue Canvas helps with. The right assistant is not the one with the longest features list. It is the one whose operating model matches your risk tolerance, technical comfort, and the workflow you need to improve.</p>`,
  },
];

const faqs = [
  {
    question: "What is NanoClaw in plain English?",
    answer:
      "NanoClaw is a lightweight personal AI assistant that runs agent sessions in isolated Linux containers, stores state with SQLite, and is designed to stay small enough that a technical user can actually understand and customise it.",
  },
  {
    question: "Is NanoClaw the same as OpenClaw?",
    answer:
      "No. NanoClaw positions itself as a much smaller alternative with a stronger emphasis on simplicity, container isolation, and user-specific customisation through forks and skills.",
  },
  {
    question: "Does NanoClaw support messaging channels?",
    answer:
      "Yes. Its public docs and repository describe support for channels such as WhatsApp, Telegram, Slack, Discord, and Gmail through skills and integrations.",
  },
  {
    question: "How do you set up NanoClaw?",
    answer:
      "The intended setup flow is to clone the repository, open the project in Claude Code, and run <code>/setup</code>. Claude Code then handles the installation and environment steps.",
  },
  {
    question: "Who is NanoClaw best suited to?",
    answer:
      "It is best suited to users who want a personal or tightly controlled assistant, care about runtime isolation, and are comfortable owning a smaller codebase instead of relying on a large opaque framework.",
  },
  {
    question: "When should a business choose something else?",
    answer:
      "If the business needs a broader out-of-the-box platform, a heavier enterprise operating model, or a more standardised setup for many non-technical users, a larger framework may be easier to run.",
  },
];

const relatedGuides = [
  { href: "/guides/openclaw-vs-chatgpt", title: "OpenClaw vs ChatGPT" },
  { href: "/guides/openclaw-for-teams", title: "OpenClaw for Teams" },
  { href: "/guides/openclaw-business-systems-integration", title: "OpenClaw Business Integration Guide" },
  { href: "/guides/hire-openclaw-expert", title: "Hire an OpenClaw Expert" },
];

export default function WhatIsNanoClawPage() {
  return (
    <GuidePageTemplate
      canonicalPath="/guides/what-is-nanoclaw"
      badge="NanoClaw Guide 2026"
      title="What Is"
      highlight="NanoClaw?"
      description="NanoClaw is a lightweight, container-isolated AI assistant built around Claude Code. This guide explains what it does well, where it fits, and when a smaller assistant beats a heavier framework."
      primaryCtaLabel="Read the guide"
      primaryCtaHref="#guide"
      secondaryCtaLabel="Talk through your stack"
      secondaryCtaHref="#assessment"
      stats={stats}
      sections={sections}
      faqs={faqs}
      relatedGuides={relatedGuides}
      sidebarTitle="What matters most"
      sidebarPoints={[
        "Prefer software you can actually inspect, not just configure.",
        "Isolation matters more when the assistant can run code and touch files.",
        "Pick the operating model that matches the workflow, not the hype cycle.",
      ]}
      assessmentDescription="Blue Canvas can help you decide whether NanoClaw, OpenClaw, or a different AI agent stack is the better commercial fit based on your workflow, risk profile, and technical constraints."
      contactTitle="Book an AI agent stack review"
      contactDescription="Tell us what you want the assistant to do, what data it will touch, and how much control your team needs"
      practicalTakeawayText="NanoClaw makes sense when you want a smaller assistant you can truly understand and control. If breadth matters more than legibility, look elsewhere. If trust, isolation, and ownership matter, it deserves a serious look."
    />
  );
}
