import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "OpenClaw Consultant UK | Expert OpenClaw Setup & AI Assistant Configuration",
  description: "Professional OpenClaw consultant services from Blue Canvas AI. Expert setup, security hardening & optimisation. £1,500 flat rate. Based in Derry, Northern Ireland.",
  alternates: { canonical: "/" },
};

const problems = [
  { icon: "🔓", title: "Security Risks", desc: "Default configurations leave your system exposed. Auth tokens, file permissions and network access all need expert attention to keep your AI assistant — and your data — safe." },
  { icon: "⚡", title: "Poor Performance", desc: "Without proper optimisation, OpenClaw can be sluggish and unreliable. Model selection, caching, memory management — small tweaks make a massive difference." },
  { icon: "⏰", title: "Time & Expertise", desc: "You could spend days reading docs and troubleshooting config issues. Or you could have an OpenClaw expert handle everything while you focus on your actual business." },
  { icon: "🔧", title: "Missing Potential", desc: "Custom skills, integrations with Telegram and Discord, automated workflows — most DIY setups barely scratch the surface of what OpenClaw can actually do." },
];

const included = [
  { title: "Full Installation & Configuration", desc: "Complete OpenClaw setup on your infrastructure — cloud, VPS or local machine." },
  { title: "Security Hardening", desc: "Auth token management, file permission lockdown, network audit, firewall rules and encrypted communications." },
  { title: "Performance Optimisation", desc: "Model tuning, memory management, response caching and resource allocation." },
  { title: "Custom Skill Development", desc: "Bespoke skills tailored to your business — from data lookups to automated reporting." },
  { title: "Integration Setup", desc: "Connect OpenClaw to Telegram, Discord, Slack, webhooks and more." },
  { title: "30 Days Post-Setup Support", desc: "A full month of support after handover. Questions, tweaks, troubleshooting — we've got you covered." },
  { title: "Documentation & Training", desc: "Clear docs and a walkthrough session so your team can confidently manage OpenClaw day-to-day." },
];

const steps = [
  { title: "Discovery Call", desc: "We learn about your business, your goals and your infrastructure. No jargon, just a straightforward conversation." },
  { title: "Setup & Configure", desc: "We install OpenClaw, configure your environment, build custom skills and connect your integrations." },
  { title: "Security Audit", desc: "A thorough security review — auth, permissions, network access. Everything locked down tight." },
  { title: "Handover & Support", desc: "Full documentation, a training session and 30 days of support. You're never left on your own." },
];

const pages = [
  { href: "/about", title: "About Blue Canvas AI →", desc: "Meet the team behind OpenClaw Consultant. Specialist AI consultancy based in Derry, Northern Ireland." },
  { href: "/services", title: "Our Services →", desc: "Full breakdown of our AI automation consulting and OpenClaw implementation services." },
  { href: "/ai-agents-for-business", title: "AI Agents for Business →", desc: "Discover how autonomous AI agents go beyond chatbots to handle real business tasks." },
  { href: "/ai-employee", title: "AI Employees →", desc: "Deploy a digital team member that works 24/7 — emails, research, admin, and more." },
  { href: "/openclaw-pricing", title: "Pricing →", desc: "Transparent £1,500 flat rate. Everything included. No hidden fees." },
  { href: "/faq", title: "FAQ →", desc: "Answers to common questions about OpenClaw, security, pricing, and how it all works." },
];

export default function Home() {
  return (
    <>
      <Hero>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-5 max-w-[700px]">
          Your Expert <span className="text-accent">OpenClaw</span> Consultant
        </h1>
        <p className="text-lg text-white/80 max-w-[560px] mb-9 leading-relaxed">
          Get OpenClaw set up properly the first time. Professional installation, security hardening and optimisation — all for a simple £1,500 flat rate. Powered by Blue Canvas AI, Northern Ireland&apos;s leading AI consultancy.
        </p>
        <div className="flex gap-4 flex-wrap">
          <a href="https://calendly.com/contact-bluecanvas/initial-consultation" className="inline-block bg-accent text-white px-8 py-3.5 rounded-btn font-semibold hover:bg-accent-hover hover:-translate-y-0.5 transition-all">
            Book Your Consultation
          </a>
          <a href="https://bluecanvas.ai" target="_blank" rel="noopener" className="inline-block bg-white/10 text-white px-8 py-3.5 rounded-btn font-semibold hover:bg-white/20 transition-all">
            Learn About Blue Canvas →
          </a>
        </div>
      </Hero>

      {/* Problems */}
      <section className="bg-white py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="text-accent font-heading font-semibold text-sm uppercase tracking-wider mb-3">Why You Need Us</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-dark">Why You Need a Professional OpenClaw Consultant</h2>
          <p className="text-gray text-lg max-w-[600px] mb-12">OpenClaw is powerful — but getting it wrong can cost you more than getting it right.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {problems.map((p) => (
              <div key={p.title} className="bg-light rounded-box p-8 border border-black/[.06] hover:-translate-y-1 transition-transform">
                <div className="text-3xl mb-4">{p.icon}</div>
                <h3 className="font-heading font-bold text-lg mb-2 text-dark">{p.title}</h3>
                <p className="text-gray text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="bg-blue text-white py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="text-accent font-heading font-semibold text-sm uppercase tracking-wider mb-3">Everything Included</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">What&apos;s Included</h2>
          <span className="inline-block bg-accent text-white px-7 py-3 rounded-btn font-heading font-bold text-xl mb-10">£1,500 Flat Rate</span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {included.map((item) => (
              <div key={item.title} className="flex gap-4">
                <span className="text-accent text-xl flex-shrink-0 mt-0.5">✓</span>
                <div>
                  <h4 className="font-semibold mb-1">{item.title}</h4>
                  <p className="text-white/60 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="text-accent font-heading font-semibold text-sm uppercase tracking-wider mb-3">How It Works</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-dark">From First Call to Full Capability</h2>
          <p className="text-gray text-lg max-w-[600px] mb-12">From first call to full handover — here&apos;s the process.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <div key={s.title} className="text-center">
                <div className="w-14 h-14 bg-blue text-white rounded-full flex items-center justify-center font-heading font-bold text-lg mx-auto mb-4">{i + 1}</div>
                <h3 className="font-heading font-bold mb-2 text-dark">{s.title}</h3>
                <p className="text-gray text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore */}
      <section className="bg-light py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="text-accent font-heading font-semibold text-sm uppercase tracking-wider mb-3">Resources</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-dark">Explore Our Resources</h2>
          <p className="text-gray text-lg max-w-[600px] mb-12">Learn more about how we can help your business with AI.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pages.map((p) => (
              <Link key={p.href} href={p.href} className="block bg-white rounded-box p-8 border border-black/[.06] hover:-translate-y-1 hover:shadow-md transition-all group">
                <h3 className="font-heading font-bold text-blue mb-2 group-hover:text-accent transition-colors">{p.title}</h3>
                <p className="text-gray text-sm">{p.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="bg-navy text-white py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="text-accent font-heading font-semibold text-sm uppercase tracking-wider mb-3">About Us</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Powered by Blue Canvas AI</h2>
          <h3 className="font-heading font-bold text-xl mb-4 text-white/80">Northern Ireland&apos;s Leading AI Consultancy</h3>
          <p className="text-white/70 mb-4 max-w-[740px] leading-relaxed">Blue Canvas AI is a specialist AI consultancy based in Derry, Northern Ireland. We help businesses across the UK adopt AI tools that actually work — not hype, not theory, but practical systems that save time and make money.</p>
          <p className="text-white/70 mb-6 max-w-[740px] leading-relaxed">Led by Phil Patterson, we&apos;ve been working with OpenClaw since its early days. We know the platform inside-out — the quirks, the shortcuts, the security pitfalls and the hidden potential.</p>
          <a href="https://bluecanvas.ai" target="_blank" rel="noopener" className="text-accent hover:text-accent-hover transition-colors font-semibold">See our work at bluecanvas.ai →</a>
        </div>
      </section>

      <CTA
        title="Let's Get Started"
        subtitle="Ready to get OpenClaw set up properly? Drop us a message and we'll arrange a free discovery call."
        buttons={[
          { label: "Get Started →", href: "https://calendly.com/contact-bluecanvas/initial-consultation", primary: true },
          { label: "View Pricing", href: "/openclaw-pricing" },
        ]}
      />
    </>
  );
}
