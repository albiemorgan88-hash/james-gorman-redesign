import type { Metadata } from "next";
import Hero from "@/components/Hero";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "AI Agent Services | Custom AI Development & Consultancy",
  description:
    "Custom AI agent development and strategic AI consultancy. We build AI employees for lead gen, customer service, admin, data analysis, and content. Deployed in days.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "AI Agent Services | Custom AI Development & Consultancy",
    url: "/services",
  },
};

const useCases = [
  {
    icon: "📈",
    title: "Lead Generation",
    desc: "AI agents that prospect, qualify, and nurture leads 24/7. They research targets, personalise outreach, follow up automatically, and hand warm leads to your sales team.",
    results: "Typical result: 3x more qualified leads at 70% lower cost than manual prospecting.",
  },
  {
    icon: "💬",
    title: "Customer Service",
    desc: "Instant, accurate responses across every channel — WhatsApp, email, live chat, social media. Your AI agent handles enquiries, resolves issues, and escalates only when necessary.",
    results: "Typical result: 90% of queries resolved without human intervention.",
  },
  {
    icon: "📋",
    title: "Admin & Operations",
    desc: "Invoicing, scheduling, data entry, document processing, onboarding — the repetitive work that eats your team's time. AI agents handle it all, error-free, around the clock.",
    results: "Typical result: £80,000+ annual savings per admin function replaced.",
  },
  {
    icon: "📊",
    title: "Data Analysis & Reporting",
    desc: "AI agents that monitor your data, spot trends, generate reports, and surface insights automatically. No more manual spreadsheet work or waiting for analyst availability.",
    results: "Typical result: Daily insights that previously took a week to compile.",
  },
  {
    icon: "✍️",
    title: "Content Creation",
    desc: "Blog posts, social media, email campaigns, product descriptions — AI agents that write in your brand voice, optimise for SEO, and publish on schedule.",
    results: "Typical result: 10x content output with consistent quality and brand alignment.",
  },
];

const industries = [
  "⚖️ Legal — solicitors, barristers, law firms",
  "🏠 Property — estate agents, lettings, management",
  "💷 Financial — accountants, bookkeepers, advisors",
  "📣 Agencies — marketing, creative, recruitment",
  "💼 Professional services — consultants, coaches",
  "🛒 E-commerce — online retail, D2C brands",
  "🏥 Healthcare — clinics, practices, care providers",
  "🔧 Trades — contractors, service businesses",
];

export default function Services() {
  return (
    <>
      <Hero>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-5 max-w-[750px]">
          AI Agents Built for{" "}
          <span className="text-accent">Your Business</span>
        </h1>
        <p className="text-lg text-white/80 max-w-[560px]">
          From custom AI development to strategic consultancy — we deploy AI
          employees that work harder, faster, and cheaper than traditional
          hires.
        </p>
      </Hero>

      {/* Two Pillars */}
      <section className="bg-white py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="text-accent font-heading font-semibold text-sm uppercase tracking-wider mb-3">
            Our Services
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-dark">
            Two Pillars, One Goal: Transform Your Operations
          </h2>
          <p className="text-gray text-lg max-w-[600px] mb-12">
            Every engagement is tailored to your business. Here&apos;s how we
            work.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue text-white rounded-box p-10">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="font-heading font-bold text-2xl mb-4">
                AI Agent Development
              </h3>
              <p className="text-white/70 mb-6 leading-relaxed">
                We design, build, and deploy custom AI agents that handle real
                business operations. Every agent is tailored to your specific
                workflows, integrated with your existing tools, and
                production-ready in days.
              </p>
              <ul className="space-y-3 text-white/80 text-sm mb-8">
                <li className="flex gap-3">
                  <span className="text-accent flex-shrink-0">✓</span>
                  Custom-built for your exact workflows
                </li>
                <li className="flex gap-3">
                  <span className="text-accent flex-shrink-0">✓</span>
                  Full integration with CRM, email, messaging, calendars
                </li>
                <li className="flex gap-3">
                  <span className="text-accent flex-shrink-0">✓</span>
                  24/7 autonomous operation on your infrastructure
                </li>
                <li className="flex gap-3">
                  <span className="text-accent flex-shrink-0">✓</span>
                  Enterprise-grade security and data protection
                </li>
                <li className="flex gap-3">
                  <span className="text-accent flex-shrink-0">✓</span>
                  Ongoing monitoring and optimisation
                </li>
              </ul>
              <a
                href="https://calendly.com/contact-bluecanvas/initial-consultation"
                className="inline-block bg-accent text-white px-7 py-3 rounded-btn font-semibold hover:bg-accent-hover hover:-translate-y-0.5 transition-all text-sm"
              >
                Build Your AI Agent →
              </a>
            </div>
            <div className="bg-navy text-white rounded-box p-10">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="font-heading font-bold text-2xl mb-4">
                AI Consultancy &amp; Training
              </h3>
              <p className="text-white/70 mb-6 leading-relaxed">
                Not ready for full deployment? We help teams understand AI, build
                internal capability, and develop a strategy that makes sense for
                their business. No jargon, no fluff — practical guidance you can
                act on.
              </p>
              <ul className="space-y-3 text-white/80 text-sm mb-8">
                <li className="flex gap-3">
                  <span className="text-accent flex-shrink-0">✓</span>
                  AI readiness assessments
                </li>
                <li className="flex gap-3">
                  <span className="text-accent flex-shrink-0">✓</span>
                  Hands-on team workshops and training
                </li>
                <li className="flex gap-3">
                  <span className="text-accent flex-shrink-0">✓</span>
                  AI strategy and roadmap development
                </li>
                <li className="flex gap-3">
                  <span className="text-accent flex-shrink-0">✓</span>
                  Best practices, governance, and compliance
                </li>
                <li className="flex gap-3">
                  <span className="text-accent flex-shrink-0">✓</span>
                  Ongoing advisory and support retainers
                </li>
              </ul>
              <a
                href="https://calendly.com/contact-bluecanvas/initial-consultation"
                className="inline-block bg-white/10 text-white px-7 py-3 rounded-btn font-semibold hover:bg-white/20 transition-all text-sm border border-white/20"
              >
                Book a Strategy Session →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="bg-light py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="text-accent font-heading font-semibold text-sm uppercase tracking-wider mb-3">
            Use Cases
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-dark">
            What AI Agents Can Do for You
          </h2>
          <p className="text-gray text-lg max-w-[600px] mb-12">
            Real use cases. Real results. Here&apos;s where AI agents make the
            biggest impact.
          </p>
          <div className="space-y-6">
            {useCases.map((uc) => (
              <div
                key={uc.title}
                className="bg-white rounded-box p-9 border border-black/[.06] hover:-translate-y-0.5 transition-transform"
              >
                <div className="flex items-start gap-5">
                  <div className="text-3xl flex-shrink-0">{uc.icon}</div>
                  <div>
                    <h3 className="font-heading font-bold text-xl text-dark mb-2">
                      {uc.title}
                    </h3>
                    <p className="text-gray mb-3 leading-relaxed">{uc.desc}</p>
                    <p className="text-accent font-semibold text-sm">
                      {uc.results}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-white py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="text-accent font-heading font-semibold text-sm uppercase tracking-wider mb-3">
            Industries
          </p>
          <h2 className="text-3xl font-heading font-bold mb-4 text-dark">
            Industries We Transform
          </h2>
          <p className="text-gray text-lg max-w-[600px] mb-8">
            If your business runs on communication, documentation, and process —
            AI agents can transform it.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {industries.map((ind) => (
              <div
                key={ind}
                className="bg-light p-5 rounded-box font-semibold text-dark border border-black/[.06] text-sm"
              >
                {ind}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Ready to Deploy AI Agents?"
        subtitle="Book a free strategy call and discover how AI agents can transform your operations."
        buttons={[
          {
            label: "Book a Free Strategy Call →",
            href: "https://calendly.com/contact-bluecanvas/initial-consultation",
            primary: true,
          },
          { label: "View Pricing", href: "/openclaw-pricing" },
        ]}
      />
    </>
  );
}
