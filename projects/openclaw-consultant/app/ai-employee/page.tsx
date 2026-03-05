import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "AI Employees for Business | 24/7 AI That Works",
  description: "Deploy an AI employee that handles real work — emails, scheduling, research, customer queries. Not a chatbot. A genuine digital team member. From £1,500.",
  alternates: { canonical: "/ai-employee" },
  openGraph: { title: "AI Employees for Business | 24/7 AI That Works", url: "/ai-employee" },
};

const features = [
  { icon: "💬", title: "Customer communication", desc: "Your AI employee responds to enquiries on Telegram, WhatsApp, email, and Slack within seconds. Not canned responses — genuine, contextual replies that understand your business, your tone, and your customers' needs." },
  { icon: "🔍", title: "Research and analysis", desc: "Need competitor analysis? Market research? A summary of 50 documents? Your AI employee handles it in minutes, not hours. It searches the web, analyses data, and delivers structured reports." },
  { icon: "📋", title: "Admin and operations", desc: "Scheduling, data entry, CRM updates, invoice processing, document drafting — the repetitive work that drains your team's time and energy. Your AI employee handles it all without complaint." },
  { icon: "⚡", title: "Workflow automation", desc: "When a new lead comes in, your AI employee can qualify them, add them to your CRM, send a personalised follow-up, and book a meeting in your calendar. Automatically. Every time." },
  { icon: "✍️", title: "Content and communications", desc: "Draft blog posts, social media updates, client reports, internal memos. Your AI employee writes in your voice, following your guidelines, ready for a quick review and publish." },
];

const deployItems = [
  "Custom configuration tailored to your business processes",
  "Security hardening — locked-down permissions, encrypted communications",
  "Integration with your existing tools (CRM, email, calendar, messaging)",
  "Custom skills built for your specific workflows",
  "Training so your team knows how to work with their new colleague",
  "30 days of support to refine and optimise",
];

export default function AIEmployee() {
  return (
    <>
      <Hero>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-5 max-w-[700px]">
          <span className="text-accent">AI Employees</span> That Actually Work
        </h1>
        <p className="text-lg text-white/80 max-w-[560px]">Your next hire doesn&apos;t need a desk. Deploy a digital team member that handles real work — 24/7, without breaks.</p>
      </Hero>

      <section className="bg-white py-20">
        <div className="max-w-[740px] mx-auto px-6">
          <h2 className="text-2xl font-heading font-bold text-dark mb-4">Your next hire doesn&apos;t need a desk</h2>
          <p className="text-gray mb-4 leading-relaxed">An AI employee isn&apos;t a chatbot that answers FAQs. It&apos;s a digital team member that works across your business — handling emails, managing schedules, researching competitors, responding to customers on WhatsApp, drafting documents, and running workflows. All day, every day, without breaks.</p>
          <p className="text-gray mb-4 leading-relaxed">Built on <Link href="/" className="text-accent hover:text-accent-hover font-semibold transition-colors">OpenClaw</Link>, an open-source AI assistant platform, your AI employee connects to the tools you already use and gets work done autonomously.</p>

          <h2 className="text-2xl font-heading font-bold text-dark mb-4 mt-14">What can an AI employee actually do?</h2>
          {features.map((f) => (
            <div key={f.title} className="bg-light rounded-box p-6 my-4 border border-black/[.06]">
              <h3 className="font-heading font-bold text-dark mb-2">{f.icon} {f.title}</h3>
              <p className="text-gray mb-0 leading-relaxed">{f.desc}</p>
            </div>
          ))}

          <h2 className="text-2xl font-heading font-bold text-dark mb-4 mt-14">How is this different from ChatGPT?</h2>
          <p className="text-gray mb-4 leading-relaxed">ChatGPT is a tool you go to. An AI employee comes to you. It&apos;s always on, connected to your business systems, and proactively handles work without being asked. It has persistent memory — it remembers your clients, your preferences, your processes.</p>
          <p className="text-gray mb-4 leading-relaxed">Think of it this way: ChatGPT is a search engine with a chat interface. An AI employee is a team member with genuine intelligence.</p>

          <h2 className="text-2xl font-heading font-bold text-dark mb-4 mt-14">The cost comparison</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="bg-light rounded-box p-7 text-center border border-black/[.06]">
              <h3 className="font-heading font-bold mb-2 text-dark">Junior Employee</h3>
              <div className="font-heading text-4xl font-extrabold mb-2 text-dark">£35,000+</div>
              <p className="text-gray text-sm">Per year fully loaded — salary, NI, pension, office space, equipment, training, sick days, holidays</p>
            </div>
            <div className="bg-blue text-white rounded-box p-7 text-center">
              <h3 className="font-heading font-bold mb-2">AI Employee</h3>
              <div className="font-heading text-4xl font-extrabold text-accent mb-2">£1,500</div>
              <p className="text-white/70 text-sm">One-off setup. Works 24/7, never calls in sick, scales instantly. API costs typically £20–£100/month.</p>
            </div>
          </div>
          <p className="text-gray mb-4 leading-relaxed">We&apos;re not suggesting AI replaces your team. We&apos;re saying it handles the work your team shouldn&apos;t be doing — so they can focus on what actually moves the business forward.</p>

          <h2 className="text-2xl font-heading font-bold text-dark mb-4 mt-14">How we deploy AI employees</h2>
          <p className="text-gray mb-4 leading-relaxed">We use <Link href="/" className="text-accent hover:text-accent-hover font-semibold transition-colors">OpenClaw</Link>, the most capable open-source AI assistant platform available. Your AI employee runs on dedicated hardware (typically an Apple Mac Mini), giving you full control over your data and infrastructure.</p>
          <ul className="my-6 space-y-0">
            {deployItems.map((item) => (
              <li key={item} className="py-3 border-b border-black/[.06] pl-7 relative list-none text-gray">
                <span className="absolute left-0 text-accent font-bold">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTA
        title="Ready to hire your first AI employee?"
        subtitle="Get a professional OpenClaw deployment for a simple flat rate. No discovery calls, no hidden fees."
        buttons={[
          { label: "Get Started →", href: "https://calendly.com/contact-bluecanvas/initial-consultation", primary: true },
          { label: "View Pricing", href: "/openclaw-pricing" },
          { label: "Our Services", href: "/services" },
        ]}
      />
    </>
  );
}
