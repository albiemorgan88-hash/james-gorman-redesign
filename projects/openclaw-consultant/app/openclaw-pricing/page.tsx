import type { Metadata } from "next";
import Hero from "@/components/Hero";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "AI Agent Pricing | Starter £1,500 | Growth £3,500 | Enterprise Custom",
  description:
    "Transparent AI agent pricing. Starter: 1 agent for £1,500. Growth: 3 agents for £3,500. Enterprise: custom multi-agent deployments. No hidden fees.",
  alternates: { canonical: "/openclaw-pricing" },
  openGraph: {
    title: "AI Agent Pricing | Starter £1,500 | Growth £3,500 | Enterprise Custom",
    url: "/openclaw-pricing",
  },
};

const tiers = [
  {
    name: "Starter",
    price: "£1,500",
    desc: "Perfect for businesses ready to deploy their first AI agent and see immediate ROI.",
    highlight: false,
    features: [
      "1 custom AI agent",
      "Full installation & configuration",
      "Security hardening",
      "Up to 3 integrations",
      "Prompt engineering & personality config",
      "Team training session",
      "Written documentation",
      "30-day post-deployment support",
    ],
    cta: "Get Started",
  },
  {
    name: "Growth",
    price: "£3,500",
    desc: "For businesses ready to scale — multiple AI agents working together across your operations.",
    highlight: true,
    features: [
      "Up to 3 custom AI agents",
      "Multi-agent coordination",
      "Full installation & configuration",
      "Advanced security hardening",
      "Up to 8 integrations",
      "Custom skill development",
      "Team training & workshops",
      "Comprehensive documentation",
      "60-day post-deployment support",
      "Performance monitoring dashboard",
    ],
    cta: "Scale Up",
  },
  {
    name: "Enterprise",
    price: "Custom",
    desc: "Fleet deployments, complex workflows, compliance requirements — built to your exact specifications.",
    highlight: false,
    features: [
      "Unlimited AI agents",
      "Enterprise fleet management",
      "Inter-agent communication & routing",
      "Custom compliance & audit trails",
      "Role-based access control",
      "Unlimited integrations",
      "Dedicated account manager",
      "Priority support SLA",
      "Quarterly strategy reviews",
      "Custom training programme",
    ],
    cta: "Talk to Us",
  },
];

const compares = [
  {
    title: "vs Hiring staff",
    desc: "A single employee costs £25,000–£40,000/year plus NI, pension, holidays, and management overhead. An AI agent costs a one-off fee and works 24/7 without breaks, sick days, or notice periods.",
  },
  {
    title: "vs Other AI consultants",
    desc: "Most AI consultancies charge £150–£300/hr with open-ended timelines. We deliver fixed-price, fixed-scope deployments. You know exactly what you're getting and what you'll pay.",
  },
  {
    title: "vs DIY setup",
    desc: "You could spend 40+ hours learning OpenClaw, troubleshooting config issues, and probably getting the security wrong. Or you could have production-ready AI agents in 6 days.",
  },
  {
    title: "vs Doing nothing",
    desc: "Every month without AI agents is another month of overpaying for manual work. Most clients see full ROI payback within the first month.",
  },
];

const faqs = [
  {
    q: "What's included in the agent count?",
    a: "Each agent is a distinct AI employee with its own role, personality, integrations, and workflows. For example, you might have a lead gen agent, a customer service agent, and an admin agent — that's 3 agents.",
  },
  {
    q: "Do I need to buy hardware?",
    a: "If you don't already have a server, we'll advise on the best option. A Mac Mini M4 costs around £500 and is ideal. VPS hosting starts from £20/month. Hardware is not included in the pricing above.",
  },
  {
    q: "Are there ongoing costs?",
    a: "OpenClaw is open source — no licensing fees. Your only ongoing costs are AI model API usage (typically £20–£100/month per agent depending on volume) and optional managed support (£500/month).",
  },
  {
    q: "Can I start with Starter and upgrade later?",
    a: "Absolutely. Many clients start with one agent, see the ROI, and scale to Growth or Enterprise within a few months. We'll credit your Starter investment toward the upgrade.",
  },
  {
    q: "What's your refund policy?",
    a: "If we can't deliver what we've agreed, you don't pay. Simple as that. We're confident in our work.",
  },
  {
    q: "Can I add extra integrations to the Starter package?",
    a: "Yes. Additional integrations beyond the included count are £200 each. Additional custom skills are £300 each.",
  },
];

export default function Pricing() {
  return (
    <>
      <Hero>
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-5 max-w-[700px] mx-auto">
            AI Agent <span className="text-accent">Pricing</span>
          </h1>
          <p className="text-lg text-white/80 max-w-[560px] mx-auto">
            Transparent pricing for every stage of your AI journey. No hidden
            fees, no hourly billing, no surprise invoices.
          </p>
        </div>
      </Hero>

      {/* Pricing Tiers */}
      <section className="bg-white py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-box p-9 border-2 relative flex flex-col ${
                  tier.highlight
                    ? "border-accent bg-light shadow-lg scale-[1.02]"
                    : "border-black/[.06] bg-light"
                }`}
              >
                {tier.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white text-xs font-bold px-4 py-1.5 rounded-btn uppercase tracking-wider">
                    Most Popular
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="font-heading font-bold text-xl text-dark mb-2">
                    {tier.name}
                  </h3>
                  <div className="font-heading font-extrabold text-4xl text-accent mb-3">
                    {tier.price}
                  </div>
                  <p className="text-gray text-sm leading-relaxed">
                    {tier.desc}
                  </p>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {tier.features.map((f) => (
                    <li
                      key={f}
                      className="flex gap-3 items-start text-sm text-gray"
                    >
                      <span className="text-accent flex-shrink-0 mt-0.5">
                        ✓
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://calendly.com/contact-bluecanvas/initial-consultation"
                  className={`block text-center px-7 py-3.5 rounded-btn font-semibold transition-all hover:-translate-y-0.5 ${
                    tier.highlight
                      ? "bg-accent text-white hover:bg-accent-hover"
                      : "bg-blue text-white hover:bg-blue/90"
                  }`}
                >
                  {tier.cta} →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="bg-light py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="text-accent font-heading font-semibold text-sm uppercase tracking-wider mb-3">
            Comparison
          </p>
          <h2 className="text-3xl font-heading font-bold mb-8 text-dark">
            How Does This Compare?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {compares.map((c) => (
              <div
                key={c.title}
                className="bg-white rounded-box p-7 border border-black/[.06]"
              >
                <h3 className="font-heading font-bold text-blue mb-2">
                  {c.title}
                </h3>
                <p className="text-gray text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="text-accent font-heading font-semibold text-sm uppercase tracking-wider mb-3">
            FAQ
          </p>
          <h2 className="text-3xl font-heading font-bold mb-8 text-dark">
            Pricing FAQ
          </h2>
          <FAQ items={faqs} />
        </div>
      </section>

      <CTA
        title="Ready to Deploy Your First AI Agent?"
        subtitle="Book a free strategy call. We'll assess your business and recommend the right package."
        buttons={[
          {
            label: "Book a Free Strategy Call →",
            href: "https://calendly.com/contact-bluecanvas/initial-consultation",
            primary: true,
          },
          { label: "View Services", href: "/services" },
        ]}
      />
    </>
  );
}
