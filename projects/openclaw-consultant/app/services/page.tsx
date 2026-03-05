import type { Metadata } from "next";
import Hero from "@/components/Hero";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "AI Automation Consultant UK | OpenClaw Services",
  description: "Expert AI automation consulting and OpenClaw implementation. Full setup, security hardening, integrations, and training. UK-based AI consultancy. £1,500 flat rate.",
  alternates: { canonical: "/services" },
  openGraph: { title: "AI Automation Consultant UK | OpenClaw Services", url: "/services" },
};

const services = [
  { icon: "⚙️", title: "OpenClaw Setup & Deployment", desc: "The foundation. We install and configure OpenClaw on dedicated hardware — typically an Apple Mac Mini for reliability and performance.", items: ["Full OpenClaw installation and configuration", "Model selection optimised for your use case and budget", "Channel setup (Telegram, WhatsApp, Slack, Discord, email)", "Memory and context configuration", "Performance tuning and testing"] },
  { icon: "🔒", title: "Security Hardening", desc: "OpenClaw out of the box is powerful but permissive. We lock it down:", items: ["Authentication and access control", "File system permissions and sandboxing", "Network security and firewall rules", "API token management", "Data encryption at rest and in transit", "Regular security audit framework"] },
  { icon: "🔗", title: "Integration & Automation", desc: "The real value comes from connecting your AI assistant to your business:", items: ["CRM integration — HubSpot, Salesforce, Pipedrive, and more", "Email — Gmail, Outlook, custom SMTP", "Calendar — Google Calendar, Outlook", "Messaging — WhatsApp, Telegram, Slack, Discord", "Documents — Google Drive, Dropbox, SharePoint", "Custom APIs — your bespoke systems and databases"] },
  { icon: "🛠️", title: "Custom Skill Development", desc: "OpenClaw's skill system lets us build purpose-built capabilities for your business:", items: ["Lead qualification and routing", "Property management workflows", "Client onboarding automation", "Report generation", "Data analysis pipelines", "Industry-specific knowledge bases"] },
  { icon: "📚", title: "Training & Handover", desc: "We don't create dependency. Every deployment includes:", items: ["Hands-on training for you and your team", "Documentation specific to your setup", "Prompt engineering guidance", "30 days of post-deployment support", "Performance monitoring and optimisation"] },
  { icon: "🏢", title: "Enterprise & Multi-Agent Deployments", desc: "For larger organisations, we deploy fleet configurations:", items: ["Multiple AI agents with distinct roles and responsibilities", "Mac Mini server fleet management", "Inter-agent communication and task routing", "Centralised monitoring and logging", "Role-based access control across teams", "Custom compliance and audit trails"] },
];

const industries = [
  "⚖️ Legal — solicitors, barristers, law firms",
  "🏠 Property — estate agents, lettings, management",
  "💷 Financial — accountants, bookkeepers, advisors",
  "📣 Agencies — marketing, creative, recruitment",
  "💼 Professional services — consultants, coaches, trainers",
];

export default function Services() {
  return (
    <>
      <Hero>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-5 max-w-[700px]">
          AI Automation & <span className="text-accent">OpenClaw Consulting</span> Services
        </h1>
        <p className="text-lg text-white/80 max-w-[560px]">Expert AI implementation, not generic advice. We build, deploy, and optimise AI systems that run real business operations.</p>
      </Hero>

      <section className="bg-white py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="text-accent font-heading font-semibold text-sm uppercase tracking-wider mb-3">What We Offer</p>
          <h2 className="text-3xl font-heading font-bold mb-4 text-dark">Our Services</h2>
          <p className="text-gray text-lg max-w-[600px] mb-12">Every engagement follows the same proven process, whether you&apos;re a solo founder or a 50-person team.</p>
          <div className="space-y-6">
            {services.map((s) => (
              <div key={s.title} className="bg-light rounded-box p-9 border border-black/[.06]">
                <h3 className="font-heading font-bold text-xl text-dark mb-3">{s.icon} {s.title}</h3>
                <p className="text-gray mb-4">{s.desc}</p>
                <ul className="list-disc ml-5 text-gray text-sm space-y-1.5">
                  {s.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-light py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="text-accent font-heading font-semibold text-sm uppercase tracking-wider mb-3">Industries</p>
          <h2 className="text-3xl font-heading font-bold mb-4 text-dark">Industries we work with</h2>
          <p className="text-gray text-lg max-w-[600px] mb-8">If your business runs on communication, documentation, and process — AI can transform it.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {industries.map((ind) => (
              <div key={ind} className="bg-white p-5 rounded-box font-semibold text-dark border border-black/[.06] text-sm">{ind}</div>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Simple, transparent pricing"
        subtitle="No discovery calls required. No hidden fees. One flat rate for a complete OpenClaw deployment."
        buttons={[
          { label: "View Pricing →", href: "/openclaw-pricing", primary: true },
          { label: "Get Started", href: "https://calendly.com/contact-bluecanvas/initial-consultation" },
          { label: "Learn About AI Employees", href: "/ai-employee" },
        ]}
      />
    </>
  );
}
