import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "OpenClaw Consultant UK | AI Agents That Run Your Business",
  description:
    "We build AI agents that replace manual work and save businesses £100k+. OpenClaw-powered AI employees deployed in days. Book a free strategy call.",
  alternates: { canonical: "/" },
};

const testimonials = [
  {
    quote:
      "We replaced our entire admin back-office. Saving over £80,000 a year. The AI agents handle invoicing, scheduling and client comms better than any hire we've made.",
    role: "Operations Director",
    company: "Professional Services",
  },
  {
    quote:
      "Lead generation used to take 3 full-time staff. Now one AI agent does it all — and converts better.",
    role: "Managing Director",
    company: "Recruitment Agency",
  },
  {
    quote:
      "We went from idea to deployed AI employee in 6 days. It handles our entire onboarding workflow.",
    role: "Head of HR",
    company: "Tech Company",
  },
  {
    quote:
      "The ROI was immediate. Within the first month, our AI agents had paid for themselves 3x over.",
    role: "CEO",
    company: "E-commerce Brand",
  },
];

const steps = [
  {
    num: "01",
    title: "Smart Analysis",
    desc: "We assess your operations and identify the highest-impact opportunities for AI replacement.",
  },
  {
    num: "02",
    title: "AI Development",
    desc: "We build and deploy custom AI agents tailored to your specific workflows and tools.",
  },
  {
    num: "03",
    title: "Seamless Integration",
    desc: "Zero-disruption integration with your existing stack. Your team barely notices the switch.",
  },
  {
    num: "04",
    title: "Continuous Optimisation",
    desc: "We monitor, refine and enhance your AI agents to ensure peak performance over time.",
  },
];

const stats = [
  { value: "£2M+", label: "Client Savings" },
  { value: "50+", label: "Agents Deployed" },
  { value: "6 Days", label: "Avg Deployment" },
  { value: "24/7", label: "Uptime" },
];

const faqs = [
  {
    q: "Is my data safe?",
    a: "Absolutely. Your AI agents run on your own infrastructure — your data never leaves your control. We apply enterprise-grade security hardening to every deployment, including encryption, access controls, and network lockdowns.",
  },
  {
    q: "How long does deployment take?",
    a: "Most AI agents are built and deployed within 6 working days. Complex multi-agent systems may take 2–3 weeks. Either way, it's days — not the months you'd wait for a traditional software build.",
  },
  {
    q: "What can AI agents actually do?",
    a: "Anything that involves information processing, communication, or digital admin. Lead generation, customer service, invoicing, scheduling, data analysis, content creation, onboarding, reporting — if a human does it on a screen, an AI agent can likely do it faster and cheaper.",
  },
  {
    q: "How much does it cost?",
    a: 'We offer three tiers: Starter (£1,500 for 1 agent), Growth (£3,500 for up to 3 agents), and Enterprise (custom pricing). Visit our <a href="/openclaw-pricing" class="text-[#ff5722] hover:underline font-semibold">pricing page</a> for full details.',
  },
  {
    q: "Do I need technical knowledge?",
    a: "None at all. We handle everything — build, deployment, integration, and training. You interact with your AI agents through natural conversation on platforms you already use like WhatsApp, Slack, or email.",
  },
  {
    q: "What if something goes wrong?",
    a: "Every package includes post-deployment support (30–60 days depending on tier). We monitor your agents, fix issues, and optimise performance. After that, managed support plans are available from £500/month.",
  },
  {
    q: "Can I try before fully committing?",
    a: "We offer a free strategy call where we'll assess your business, identify the best AI opportunities, and give you a clear picture of ROI — no obligation. If it's not right for you, we'll say so.",
  },
  {
    q: "Will AI agents replace my entire team?",
    a: "Not necessarily — but they'll transform it. AI agents handle the repetitive, time-consuming work so your team can focus on high-value tasks. Most clients redeploy staff rather than let them go, and see dramatically higher output across the board.",
  },
];

const pages = [
  {
    href: "/about",
    title: "About Blue Canvas AI →",
    desc: "Meet the team behind our AI agent deployments. Specialist consultancy based in Derry, Northern Ireland.",
  },
  {
    href: "/services",
    title: "Our Services →",
    desc: "AI agent development and consultancy — from single agents to enterprise-wide transformation.",
  },
  {
    href: "/ai-agents-for-business",
    title: "AI Agents for Business →",
    desc: "Discover how autonomous AI agents go beyond chatbots to handle real business operations.",
  },
  {
    href: "/ai-employee",
    title: "AI Employees →",
    desc: "Deploy a digital team member that works 24/7 — lead gen, admin, customer service, and more.",
  },
  {
    href: "/openclaw-pricing",
    title: "Pricing →",
    desc: "Transparent tiered pricing. Starter from £1,500. No hidden fees, no surprise invoices.",
  },
  {
    href: "/faq",
    title: "FAQ →",
    desc: "Answers to common questions about AI agents, security, pricing, and how it all works.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <Hero>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-5 max-w-[750px]">
          We Build AI Agents That{" "}
          <span className="text-accent">Run Your Business</span>
        </h1>
        <p className="text-lg text-white/80 max-w-[600px] mb-9 leading-relaxed">
          24/7 execution, higher quality work, massive cost savings.
          OpenClaw-powered AI employees deployed in days, not months.
        </p>
        <div className="flex gap-4 flex-wrap">
          <a
            href="https://calendly.com/contact-bluecanvas/initial-consultation"
            className="inline-block bg-accent text-white px-8 py-3.5 rounded-btn font-semibold hover:bg-accent-hover hover:-translate-y-0.5 transition-all"
          >
            Book a Free Strategy Call
          </a>
          <a
            href="#process"
            className="inline-block bg-white/10 text-white px-8 py-3.5 rounded-btn font-semibold hover:bg-white/20 transition-all border border-white/20"
          >
            See How It Works
          </a>
        </div>
      </Hero>

      {/* Social Proof / Testimonials */}
      <section className="bg-dark py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="text-accent font-heading font-semibold text-sm uppercase tracking-wider mb-3 text-center">
            Results That Speak
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12 text-white text-center">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.role}
                className="bg-white/[.04] border border-white/[.08] rounded-box p-8 relative hover:-translate-y-1 transition-transform"
              >
                <span className="text-accent/30 text-6xl font-heading font-bold absolute top-4 left-6 leading-none select-none">
                  &ldquo;
                </span>
                <p className="text-white/80 text-[0.95rem] leading-relaxed mb-6 relative z-10 pt-6">
                  {t.quote}
                </p>
                <div className="border-t border-white/10 pt-4">
                  <span className="text-white font-semibold text-sm">
                    {t.role}
                  </span>
                  <span className="text-white/40 text-sm ml-2">
                    — {t.company}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Two Service Pillars */}
      <section className="bg-white py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="text-accent font-heading font-semibold text-sm uppercase tracking-wider mb-3">
            What We Do
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-dark">
            Two Ways We Transform Your Business
          </h2>
          <p className="text-gray text-lg max-w-[600px] mb-12">
            Whether you need hands-on AI deployment or strategic guidance, we&apos;ve got you covered.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Pillar 1 */}
            <div className="bg-light rounded-box p-10 border border-black/[.06] hover:-translate-y-1 transition-transform">
              <div className="w-14 h-14 bg-blue text-white rounded-full flex items-center justify-center text-2xl mb-6">
                ⚡
              </div>
              <h3 className="font-heading font-bold text-2xl mb-3 text-dark">
                AI Agent Development
              </h3>
              <p className="text-gray mb-6 leading-relaxed">
                Custom AI agents built for your specific operations. Production-ready in days, running 24/7, fully integrated with your existing tools and workflows.
              </p>
              <ul className="text-gray text-sm space-y-2.5 mb-8">
                <li className="flex gap-3 items-start">
                  <span className="text-accent flex-shrink-0 mt-0.5">✓</span>
                  Custom-built for your workflows
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-accent flex-shrink-0 mt-0.5">✓</span>
                  Production-ready in 6 days average
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-accent flex-shrink-0 mt-0.5">✓</span>
                  24/7 autonomous operation
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-accent flex-shrink-0 mt-0.5">✓</span>
                  Integrates with your existing stack
                </li>
              </ul>
              <a
                href="https://calendly.com/contact-bluecanvas/initial-consultation"
                className="inline-block bg-accent text-white px-7 py-3 rounded-btn font-semibold hover:bg-accent-hover hover:-translate-y-0.5 transition-all text-sm"
              >
                Build Your AI Agent →
              </a>
            </div>
            {/* Pillar 2 */}
            <div className="bg-light rounded-box p-10 border border-black/[.06] hover:-translate-y-1 transition-transform">
              <div className="w-14 h-14 bg-blue text-white rounded-full flex items-center justify-center text-2xl mb-6">
                🎯
              </div>
              <h3 className="font-heading font-bold text-2xl mb-3 text-dark">
                AI Consultancy &amp; Training
              </h3>
              <p className="text-gray mb-6 leading-relaxed">
                Strategic AI guidance for teams that want to understand and leverage AI themselves. Workshops, strategy sessions, and ongoing support.
              </p>
              <ul className="text-gray text-sm space-y-2.5 mb-8">
                <li className="flex gap-3 items-start">
                  <span className="text-accent flex-shrink-0 mt-0.5">✓</span>
                  AI strategy workshops
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-accent flex-shrink-0 mt-0.5">✓</span>
                  Team training and upskilling
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-accent flex-shrink-0 mt-0.5">✓</span>
                  Best practices and governance
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-accent flex-shrink-0 mt-0.5">✓</span>
                  Ongoing advisory support
                </li>
              </ul>
              <Link
                href="/services"
                className="inline-block bg-white text-dark px-7 py-3 rounded-btn font-semibold hover:-translate-y-0.5 transition-all text-sm border border-black/[.06]"
              >
                Explore Services →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="bg-light py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="text-accent font-heading font-semibold text-sm uppercase tracking-wider mb-3">
            How It Works
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-dark">
            From First Call to Full Capability
          </h2>
          <p className="text-gray text-lg max-w-[600px] mb-12">
            A proven process that gets AI agents into your business fast — with zero disruption.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
            {steps.map((s, i) => (
              <div key={s.title} className="relative text-center px-6 py-8">
                {/* Connecting line */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-14 right-0 w-full h-px bg-gradient-to-r from-accent/40 to-accent/10 translate-x-1/2" />
                )}
                <div className="text-accent font-heading font-extrabold text-4xl mb-3 opacity-30">
                  {s.num}
                </div>
                <h3 className="font-heading font-bold text-lg mb-2 text-dark">
                  {s.title}
                </h3>
                <p className="text-gray text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-dark py-14">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-3xl md:text-4xl font-heading font-extrabold text-accent mb-1">
                  {s.value}
                </div>
                <div className="text-white/50 text-sm font-medium uppercase tracking-wider">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="text-accent font-heading font-semibold text-sm uppercase tracking-wider mb-3">
            Common Questions
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-dark">
            Frequently Asked Questions
          </h2>
          <p className="text-gray text-lg max-w-[600px] mb-10">
            Straight answers to the questions we hear most.
          </p>
          <FAQ items={faqs} />
        </div>
      </section>

      {/* Resources */}
      <section className="bg-light py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="text-accent font-heading font-semibold text-sm uppercase tracking-wider mb-3">
            Resources
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-dark">
            Explore AI Agent Solutions
          </h2>
          <p className="text-gray text-lg max-w-[600px] mb-12">
            Learn how AI agents are transforming businesses like yours.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pages.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className="block bg-white rounded-box p-8 border border-black/[.06] hover:-translate-y-1 hover:shadow-md transition-all group"
              >
                <h3 className="font-heading font-bold text-blue mb-2 group-hover:text-accent transition-colors">
                  {p.title}
                </h3>
                <p className="text-gray text-sm">{p.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="bg-navy text-white py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="text-accent font-heading font-semibold text-sm uppercase tracking-wider mb-3">
            About Us
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Powered by Blue Canvas AI
          </h2>
          <h3 className="font-heading font-bold text-xl mb-4 text-white/80">
            Northern Ireland&apos;s Leading AI Agent Consultancy
          </h3>
          <p className="text-white/70 mb-4 max-w-[740px] leading-relaxed">
            Blue Canvas AI is a specialist AI consultancy based in Derry, Northern Ireland. We don&apos;t do hype or theory — we build and deploy AI agents that handle real business operations, from lead generation and customer service to admin, data analysis, and content creation.
          </p>
          <p className="text-white/70 mb-6 max-w-[740px] leading-relaxed">
            Led by Phil Patterson, we&apos;ve deployed 50+ AI agents across the UK, saving our clients over £2M in operational costs. We know OpenClaw inside-out and we know how to turn it into a competitive advantage for your business.
          </p>
          <a
            href="https://bluecanvas.ai"
            target="_blank"
            rel="noopener"
            className="text-accent hover:text-accent-hover transition-colors font-semibold"
          >
            See our work at bluecanvas.ai →
          </a>
        </div>
      </section>

      <CTA
        title="Ready to Replace Manual Work with AI?"
        subtitle="Book a free strategy call and we'll show you exactly where AI agents can save your business time and money."
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
