import type { Metadata } from "next";
import Hero from "@/components/Hero";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "OpenClaw Consultant Pricing | £1,500 Flat Rate",
  description: "Transparent OpenClaw consultant pricing. Full setup, security, integrations, training, and 30 days support for £1,500. No hidden fees. No hourly billing.",
  alternates: { canonical: "/openclaw-pricing" },
  openGraph: { title: "OpenClaw Consultant Pricing | £1,500 Flat Rate", url: "/openclaw-pricing" },
};

const included = [
  { icon: "⚙️", title: "Full Installation & Configuration", items: ["Dedicated server setup (Mac Mini or VPS)", "Model selection and optimisation", "Channel configuration (Telegram, WhatsApp, Slack, email)", "Memory and context management", "Performance tuning"] },
  { icon: "🔒", title: "Security Hardening", items: ["Access control and authentication", "File system permissions", "Network security configuration", "API token management", "Encryption at rest and in transit"] },
  { icon: "🔗", title: "Integrations", items: ["Up to 5 business tool integrations", "CRM, email, calendar, etc.", "Custom API connections", "Workflow mapping and automation"] },
  { icon: "🎯", title: "Custom Configuration", items: ["Prompt engineering for your business", "Custom skills for key workflows", "Knowledge base setup", "Tone and personality configuration"] },
  { icon: "📚", title: "Training & Support", items: ["Hands-on training session", "Written documentation", "30 days post-deployment support", "Performance monitoring"] },
];

const addons = [
  { name: "Additional integrations (per integration)", price: "£200" },
  { name: "Custom skill development (per skill)", price: "£300" },
  { name: "Monthly managed support", price: "£500/month" },
  { name: "Multi-agent deployment (per additional agent)", price: "£1,000" },
  { name: "Enterprise fleet setup (3+ agents)", price: "Custom quote" },
];

const compares = [
  { title: "vs DIY setup", desc: "You'll spend 20–40 hours learning, troubleshooting, and probably getting the security wrong. At any reasonable hourly rate, that's more than £1,500 — and you won't have the same result." },
  { title: "vs other consultants", desc: "Most AI consultants charge £150–£300/hr or require expensive discovery calls before quoting. A typical implementation runs £3,000–£10,000. We've standardised the process." },
  { title: "vs hiring a developer", desc: "A freelancer might charge less per hour, but they won't know OpenClaw's architecture, security model, or optimisation patterns. You're paying for expertise, not just time." },
  { title: "vs doing nothing", desc: "The real cost is the hours your team spends on repetitive work that an AI employee could handle. For most businesses, ROI payback is under 2 months." },
];

const processSteps = [
  { bold: "You get in touch", text: "— via our contact form or email" },
  { bold: "We schedule a kickoff call", text: "— 30 minutes to understand your setup, tools, and goals" },
  { bold: "We build", text: "— typically 3–5 working days from kickoff to deployment" },
  { bold: "We train", text: "— a hands-on session so your team is confident" },
  { bold: "We support", text: "— 30 days of refinement and optimisation included" },
];

const faqs = [
  { q: "Do I need to buy hardware?", a: "If you don't already have a Mac Mini or VPS, we'll advise on the best option. A Mac Mini M4 costs around £500 and is the ideal platform. VPS hosting starts from £20/month." },
  { q: "Are there ongoing costs?", a: "OpenClaw is open source — no licensing fees. Your only ongoing costs are hosting (if using VPS), API usage for the AI models (typically £20–£100/month depending on usage), and optional managed support." },
  { q: "What if I need more than 5 integrations?", a: "Additional integrations are £200 each. Most businesses need 3–5 to start." },
  { q: "Can I upgrade to managed support later?", a: "Yes. Many clients start with the standard package and add managed support after a few months as they scale their AI usage." },
  { q: "What's your refund policy?", a: "If we can't deliver what we've agreed, you don't pay. Simple as that." },
];

export default function Pricing() {
  return (
    <>
      <Hero>
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-5 max-w-[700px] mx-auto">
            <span className="text-accent">OpenClaw Consultant</span> Pricing
          </h1>
          <div className="font-heading text-6xl md:text-8xl font-extrabold text-accent mb-4">£1,500</div>
          <p className="text-lg text-white/80 max-w-[560px] mx-auto">That&apos;s it. A complete OpenClaw deployment, professionally configured, secured, and optimised for your business. No hourly rates, no scope creep, no surprise invoices.</p>
        </div>
      </Hero>

      <section className="bg-white py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="text-accent font-heading font-semibold text-sm uppercase tracking-wider mb-3">What You Get</p>
          <h2 className="text-3xl font-heading font-bold mb-8 text-dark">What&apos;s included</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {included.map((c) => (
              <div key={c.title} className="bg-light rounded-box p-7 border border-black/[.06]">
                <h3 className="font-heading font-bold text-dark mb-3">{c.icon} {c.title}</h3>
                <ul className="list-disc ml-4 text-gray text-sm space-y-1.5">
                  {c.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-light py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="text-accent font-heading font-semibold text-sm uppercase tracking-wider mb-3">Extras</p>
          <h2 className="text-3xl font-heading font-bold mb-8 text-dark">Optional Add-Ons</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm rounded-box overflow-hidden">
              <thead>
                <tr className="bg-blue text-white">
                  <th className="p-4 text-left font-heading font-semibold">Add-On</th>
                  <th className="p-4 text-left font-heading font-semibold">Price</th>
                </tr>
              </thead>
              <tbody>
                {addons.map((a, i) => (
                  <tr key={a.name} className={i % 2 === 1 ? "bg-light" : "bg-white"}>
                    <td className="p-4 border-b border-black/[.06] text-gray">{a.name}</td>
                    <td className="p-4 border-b border-black/[.06] font-semibold text-dark">{a.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="text-accent font-heading font-semibold text-sm uppercase tracking-wider mb-3">Comparison</p>
          <h2 className="text-3xl font-heading font-bold mb-8 text-dark">How does this compare?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {compares.map((c) => (
              <div key={c.title} className="bg-light rounded-box p-7 border border-black/[.06]">
                <h3 className="font-heading font-bold text-blue mb-2">{c.title}</h3>
                <p className="text-gray text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-light py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="text-accent font-heading font-semibold text-sm uppercase tracking-wider mb-3">Process</p>
          <h2 className="text-3xl font-heading font-bold mb-8 text-dark">What happens after I pay?</h2>
          <ol className="max-w-[600px] mx-auto space-y-0">
            {processSteps.map((s, i) => (
              <li key={i} className="flex gap-4 py-4 border-b border-black/[.06] items-start">
                <span className="w-9 h-9 bg-accent text-white rounded-full flex items-center justify-center font-heading font-bold flex-shrink-0 text-sm">{i + 1}</span>
                <span className="text-gray"><strong className="text-dark">{s.bold}</strong> {s.text}</span>
              </li>
            ))}
          </ol>
          <p className="text-center text-gray mt-6">No lengthy sales process. No proposal stage. You know the price, you know what you get.</p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="text-accent font-heading font-semibold text-sm uppercase tracking-wider mb-3">FAQ</p>
          <h2 className="text-3xl font-heading font-bold mb-8 text-dark">Pricing FAQ</h2>
          <FAQ items={faqs} />
        </div>
      </section>

      <CTA
        title="Ready to get started?"
        subtitle="Drop us a message and we'll arrange everything."
        buttons={[
          { label: "Get Started →", href: "https://calendly.com/contact-bluecanvas/initial-consultation", primary: true },
          { label: "View Services", href: "/services" },
          { label: "Learn About AI Employees", href: "/ai-employee" },
        ]}
      />
    </>
  );
}
