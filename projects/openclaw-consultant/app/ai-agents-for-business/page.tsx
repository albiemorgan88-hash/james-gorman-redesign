import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "AI Agents for Business | Autonomous AI That Delivers",
  description: "Deploy AI agents that handle real business tasks autonomously. Not chatbots — intelligent agents that reason, act, and deliver results. Expert setup from £1,500.",
  alternates: { canonical: "/ai-agents-for-business" },
  openGraph: { title: "AI Agents for Business | Autonomous AI That Delivers", url: "/ai-agents-for-business" },
};

const scenarios = [
  "A customer enquiry arrives at 11pm. Your AI agent reads the message, checks your CRM for the customer's history, drafts a personalised response, identifies an upsell opportunity, sends the reply, logs the interaction, and flags the opportunity for your sales team to review in the morning.",
  "A new lead fills in your contact form. Your AI agent qualifies them against your criteria, enriches the data from LinkedIn and Companies House, adds them to your CRM pipeline, sends a personalised welcome email, and books a discovery call in your calendar.",
  "Your weekly report is due. Your AI agent pulls data from your analytics, CRM, and financial tools, analyses trends, generates a formatted report, and emails it to your stakeholders. Every Monday at 8am. Automatically.",
];

const comparison = [
  { label: "Logic", trad: "Rule-based (if/then)", agent: "Reasoning-based" },
  { label: "Flexibility", trad: "Breaks with edge cases", agent: "Adapts to new situations" },
  { label: "Setup", trad: "Visual workflow builders", agent: "Natural language configuration" },
  { label: "Scope", trad: "Single workflows", agent: "End-to-end business processes" },
  { label: "Maintenance", trad: "Constant tweaking", agent: "Self-improving with feedback" },
];

const steps = [
  { title: "Consultation", desc: "We understand your business, workflows, and goals" },
  { title: "Design", desc: "We identify the best use cases and build a deployment plan" },
  { title: "Build", desc: "Full OpenClaw setup, integrations, and custom skills" },
  { title: "Train", desc: "Your team learns to work with their new AI colleague" },
  { title: "Refine", desc: "30 days of post-deployment support and optimisation" },
];

export default function AIAgents() {
  return (
    <>
      <Hero>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-5 max-w-[700px]">
          AI Agents for Business: <span className="text-accent">Beyond Chatbots</span>
        </h1>
        <p className="text-lg text-white/80 max-w-[560px]">Deploy AI agents that reason, plan, and take action autonomously. Not chatbots — intelligent agents that deliver real results.</p>
      </Hero>

      <section className="bg-white py-20">
        <div className="max-w-[740px] mx-auto px-6">
          <h2 className="text-2xl font-heading font-bold text-dark mb-4">What are AI agents?</h2>
          <p className="text-gray mb-4 leading-relaxed">AI agents are autonomous systems that can reason, plan, and take action without constant human direction. Unlike traditional chatbots that follow scripts, AI agents understand context, make decisions, and execute multi-step tasks across your business tools.</p>
          <p className="text-gray mb-4 leading-relaxed">An AI agent doesn&apos;t just answer questions. It researches, analyses, drafts, schedules, sends, follows up, and reports back. It&apos;s the difference between a search bar and a team member.</p>

          <h2 className="text-2xl font-heading font-bold text-dark mb-4 mt-14">How AI agents work in practice</h2>
          {scenarios.map((s, i) => (
            <div key={i} className="bg-light rounded-box p-6 my-4 border border-black/[.06]">
              <p className="text-dark mb-0 leading-relaxed">{s}</p>
            </div>
          ))}
          <p className="text-gray mb-4 leading-relaxed">These aren&apos;t hypothetical scenarios. This is what we deploy for our clients using OpenClaw.</p>

          <h2 className="text-2xl font-heading font-bold text-dark mb-4 mt-14">Why OpenClaw for AI agents?</h2>
          <p className="text-gray mb-4 leading-relaxed">OpenClaw is an open-source AI assistant platform built for exactly this. Unlike closed platforms, OpenClaw gives you:</p>
          <ul className="list-disc ml-5 text-gray mb-4 space-y-2">
            <li><strong className="text-dark">Full control</strong> — runs on your hardware, your rules</li>
            <li><strong className="text-dark">No vendor lock-in</strong> — open source means you own everything</li>
            <li><strong className="text-dark">Extensibility</strong> — custom skills for any workflow</li>
            <li><strong className="text-dark">Multi-channel</strong> — works across Telegram, WhatsApp, Slack, email, and more</li>
            <li><strong className="text-dark">Persistent memory</strong> — remembers context across conversations and tasks</li>
            <li><strong className="text-dark">Security</strong> — your data never leaves your infrastructure unless you choose</li>
          </ul>

          <h2 className="text-2xl font-heading font-bold text-dark mb-4 mt-14">Agentic AI vs traditional automation</h2>
          <p className="text-gray mb-4 leading-relaxed">Traditional automation (Zapier, Make, n8n) is rule-based: &quot;When X happens, do Y.&quot; It&apos;s powerful but rigid. If anything falls outside the rules, it breaks.</p>
          <p className="text-gray mb-4 leading-relaxed">AI agents handle ambiguity. They interpret intent, adapt to new situations, and make judgement calls.</p>

          <div className="overflow-x-auto my-6">
            <table className="w-full border-collapse text-sm rounded-box overflow-hidden">
              <thead>
                <tr className="bg-blue text-white">
                  <th className="p-3.5 text-left font-heading font-semibold" />
                  <th className="p-3.5 text-left font-heading font-semibold">Traditional Automation</th>
                  <th className="p-3.5 text-left font-heading font-semibold">AI Agents</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((c, i) => (
                  <tr key={c.label} className={i % 2 === 1 ? "bg-light" : "bg-white"}>
                    <td className="p-3.5 border-b border-black/[.06] font-semibold text-dark">{c.label}</td>
                    <td className="p-3.5 border-b border-black/[.06] text-gray">{c.trad}</td>
                    <td className="p-3.5 border-b border-black/[.06] text-gray">{c.agent}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray mb-4 leading-relaxed">The best approach? Use both. AI agents for reasoning-heavy tasks, traditional automation for simple triggers. We help you find the right balance.</p>

          <h2 className="text-2xl font-heading font-bold text-dark mb-4 mt-14">What business tasks suit AI agents?</h2>
          <ul className="list-disc ml-5 text-gray mb-4 space-y-2">
            <li><strong className="text-dark">Communication</strong> — customer service, lead response, internal coordination</li>
            <li><strong className="text-dark">Research</strong> — market analysis, competitor monitoring, data gathering</li>
            <li><strong className="text-dark">Document work</strong> — drafting, summarising, formatting, reviewing</li>
            <li><strong className="text-dark">Process management</strong> — onboarding, compliance checks, reporting</li>
            <li><strong className="text-dark">Decision support</strong> — data analysis, recommendations, prioritisation</li>
          </ul>
          <p className="text-gray mb-4 leading-relaxed">They&apos;re less suited for tasks requiring physical presence, deep human empathy, or highly creative original work. We&apos;re honest about the boundaries.</p>

          <h2 className="text-2xl font-heading font-bold text-dark mb-4 mt-14">Getting started with AI agents</h2>
          <ol className="space-y-0 my-6">
            {steps.map((s, i) => (
              <li key={s.title} className="flex gap-4 py-4 border-b border-black/[.06] items-start">
                <span className="w-10 h-10 bg-blue text-white rounded-full flex items-center justify-center font-heading font-bold flex-shrink-0">{i + 1}</span>
                <div>
                  <strong className="text-dark block">{s.title}</strong>
                  <span className="text-gray">{s.desc}</span>
                </div>
              </li>
            ))}
          </ol>
          <p className="text-gray leading-relaxed">All for a transparent <Link href="/openclaw-pricing" className="text-accent hover:text-accent-hover font-semibold transition-colors">flat rate</Link>. No ongoing fees unless you want managed support.</p>
        </div>
      </section>

      <CTA
        title="Ready to deploy AI agents?"
        subtitle="Get started with a professional OpenClaw deployment today."
        buttons={[
          { label: "Get Started →", href: "https://calendly.com/contact-bluecanvas/initial-consultation", primary: true },
          { label: "View Our Services", href: "/services" },
          { label: "What Is an AI Employee?", href: "/ai-employee" },
        ]}
      />
    </>
  );
}
