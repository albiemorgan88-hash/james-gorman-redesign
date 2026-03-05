import type { Metadata } from "next";
import Hero from "@/components/Hero";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "FAQ | AI Agents, Security, Pricing & How It Works",
  description:
    "Answers to common questions about AI agents, OpenClaw, security, data safety, pricing, and deployment. Everything you need to know before getting started.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "FAQ | AI Agents, Security, Pricing & How It Works",
    url: "/faq",
  },
};

const sections = [
  {
    category: "About AI Agents & OpenClaw",
    items: [
      {
        q: "What exactly is an AI agent?",
        a: "An AI agent is a digital employee that handles real business tasks autonomously. Unlike a chatbot that just answers questions, AI agents take action — they send emails, update your CRM, qualify leads, process invoices, generate reports, and coordinate workflows. They work 24/7, don't call in sick, and improve over time.",
      },
      {
        q: "What is OpenClaw?",
        a: "OpenClaw is an open-source AI assistant platform that runs on your own hardware. It's the foundation we use to build your AI agents — connecting them to your tools, giving them persistent memory, and enabling them to operate autonomously across multiple channels. Think of it as the operating system for your AI workforce.",
      },
      {
        q: "How are AI agents different from ChatGPT?",
        a: "ChatGPT is a web tool you visit for one-off conversations. AI agents are always-on employees embedded in your business — connected to your CRM, email, messaging platforms, and workflows. They have persistent memory, execute real actions, learn your processes, and operate autonomously across multiple channels simultaneously.",
      },
      {
        q: "What can AI agents actually do?",
        a: "Generate and qualify leads. Handle customer enquiries on WhatsApp, email, and Slack. Process invoices and manage scheduling. Onboard new clients or employees. Analyse data and generate reports. Create content in your brand voice. Manage your calendar. Update your CRM. Essentially anything that involves information processing, communication, or digital admin.",
      },
      {
        q: "Will AI agents replace my entire team?",
        a: "Not necessarily — but they'll transform it. AI agents handle the repetitive, time-consuming work so your team can focus on high-value tasks that require human judgement and creativity. Most clients redeploy staff to higher-impact roles rather than letting them go, and see dramatically higher output across the board.",
      },
    ],
  },
  {
    category: "Security & Data",
    items: [
      {
        q: "Is my data safe?",
        a: "Yes. Your AI agents run on your own infrastructure — your data never leaves your control unless you explicitly configure it to. We apply enterprise-grade security hardening to every deployment, including access controls, encryption at rest and in transit, network security, and permission lockdowns.",
      },
      {
        q: "Does this comply with GDPR?",
        a: "Because OpenClaw runs on your own infrastructure, you maintain full control over data processing. We configure everything in a GDPR-compliant manner, including data minimisation, access controls, and retention policies. We can also deploy fully local AI models that keep all data on your hardware.",
      },
      {
        q: "Who has access to my AI agents?",
        a: "Only the people you authorise. We configure role-based access control so each team member has appropriate permissions. Admin access is locked down with strong authentication.",
      },
      {
        q: "What about the AI model&apos;s data usage?",
        a: "When using cloud-based AI models (Claude, GPT-4), your prompts are sent to the model provider's API. Both Anthropic and OpenAI's business API terms state they don't train on API data. For maximum data sovereignty, we can configure local models that run entirely on your hardware with zero external data transmission.",
      },
    ],
  },
  {
    category: "Pricing & Process",
    items: [
      {
        q: "How much does it cost?",
        a: 'Three tiers: <strong>Starter</strong> — £1,500 for 1 AI agent with 30-day support. <strong>Growth</strong> — £3,500 for up to 3 agents with 60-day support. <strong>Enterprise</strong> — custom pricing for fleet deployments. Full details on our <a href="/openclaw-pricing" class="text-[#ff5722] hover:underline font-semibold">pricing page</a>.',
      },
      {
        q: "Are there ongoing costs?",
        a: "OpenClaw is open source — no licensing fees. Your only ongoing costs are AI model API usage (typically £20–£100/month per agent depending on volume), hosting (if using VPS), and optional managed support (£500/month).",
      },
      {
        q: "How long does deployment take?",
        a: "Most AI agents are built and deployed within 6 working days. Complex multi-agent systems may take 2–3 weeks. Either way, it's days — not the months you'd wait for a traditional software build.",
      },
      {
        q: "Can I start small and scale up?",
        a: "Absolutely. Most clients start with one Starter agent, see the ROI, and scale to Growth or Enterprise within a few months. We'll credit your Starter investment toward the upgrade.",
      },
      {
        q: "What if I'm not happy with the result?",
        a: "If we can't deliver what we've agreed, you don't pay. Simple as that. We're confident in our work because we've done it 50+ times.",
      },
    ],
  },
  {
    category: "Objections & Concerns",
    items: [
      {
        q: "I'm not technical — can I still use this?",
        a: "You don't need any technical knowledge. We handle everything — build, deployment, integration, and training. You interact with your AI agents through natural conversation on platforms you already use like WhatsApp, Slack, or email. If you can send a text message, you can manage an AI agent.",
      },
      {
        q: "What if something goes wrong?",
        a: "Every package includes post-deployment support (30–60 days depending on tier). During that time, we monitor your agents, fix issues, and optimise performance. After that, managed support plans are available from £500/month. OpenClaw is also backed by an active open-source community.",
      },
      {
        q: "Can I try before fully committing?",
        a: "We offer a free strategy call where we'll assess your business, identify the best AI opportunities, and give you a clear picture of ROI — no obligation, no pressure. If it's not right for you, we'll tell you honestly.",
      },
      {
        q: "We've tried AI tools before and they didn't work",
        a: "Most 'AI tools' are generic SaaS products that require you to adapt your workflow to them. Our AI agents are custom-built for your specific operations — they adapt to you. That's why they actually get used and deliver ROI.",
      },
      {
        q: "Is this just a chatbot?",
        a: "No. Chatbots follow scripts and answer questions. AI agents take autonomous action — they send emails, update databases, process documents, coordinate workflows, and make decisions within rules you define. They're closer to a digital employee than a chatbot.",
      },
      {
        q: "What happens after the support period ends?",
        a: "Your AI agents keep running — they don't stop working just because the support period ends. We provide full documentation and training so your team can handle basic management. For ongoing optimisation, we offer managed support from £500/month.",
      },
      {
        q: "How do I know the ROI will be there?",
        a: "We assess ROI before we start. On our free strategy call, we'll map out exactly which manual processes can be automated, estimate the cost savings, and give you a realistic timeline for payback. Most clients see full ROI within the first month.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <>
      <Hero>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-5">
          Frequently Asked <span className="text-accent">Questions</span>
        </h1>
        <p className="text-lg text-white/80 max-w-[560px]">
          Everything you need to know about AI agents, OpenClaw, and how we
          transform businesses.
        </p>
      </Hero>

      <section className="bg-white py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          {sections.map((s) => (
            <div key={s.category} className="mb-14">
              <h3 className="font-heading font-bold text-xl text-blue mb-4">
                {s.category}
              </h3>
              <FAQ items={s.items} />
            </div>
          ))}
        </div>
      </section>

      <CTA
        title="Still Have Questions?"
        subtitle="Book a free strategy call. No obligation, no pressure — just honest answers."
        buttons={[
          {
            label: "Book a Free Strategy Call →",
            href: "https://calendly.com/contact-bluecanvas/initial-consultation",
            primary: true,
          },
          { label: "View Services", href: "/services" },
          { label: "See Pricing", href: "/openclaw-pricing" },
        ]}
      />
    </>
  );
}
