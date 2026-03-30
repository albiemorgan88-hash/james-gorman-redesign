import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "OpenClaw Guides & Tutorials | Expert AI Agent Setup & Automation",
  description: "Complete collection of OpenClaw guides, tutorials, and best practices. Learn cost analysis, enterprise security, performance optimization, and business system integration from UK's leading consultant.",
  keywords: [
    "openclaw guides",
    "openclaw tutorials",
    "ai agent guides",
    "openclaw setup guides",
    "openclaw best practices",
    "openclaw cost analysis",
    "openclaw enterprise security",
    "openclaw performance optimization",
    "openclaw integration guides"
  ],
  alternates: { canonical: "https://openclawconsultant.co.uk/guides" },
  openGraph: {
    title: "OpenClaw Guides & Tutorials | Expert AI Agent Setup & Automation",
    description: "Complete collection of OpenClaw guides and tutorials from UK's leading consultant. Cost analysis, security, optimization, and integration guides.",
    url: "https://openclawconsultant.co.uk/guides",
    type: "website",
  },
};

const guides = [
  {
    title: "OpenClaw vs Virtual Assistant Cost Comparison 2026",
    description: "Complete cost breakdown comparing OpenClaw AI agents vs traditional virtual assistants. Calculate ROI, setup costs, and monthly savings for UK businesses.",
    href: "/guides/openclaw-vs-virtual-assistant-cost",
    category: "Cost Analysis",
    readTime: "8 min read"
  },
  {
    title: "OpenClaw Enterprise Security & UK Compliance Guide 2026",
    description: "Complete guide to OpenClaw enterprise security features, UK GDPR compliance, data protection, and regulatory requirements for business AI agent deployments.",
    href: "/guides/openclaw-enterprise-security-compliance",
    category: "Security & Compliance",
    readTime: "12 min read"
  },
  {
    title: "OpenClaw Performance Optimization Guide 2026",
    description: "Complete guide to optimizing OpenClaw AI agent performance, reducing response times, improving throughput, and maximizing efficiency for business applications.",
    href: "/guides/openclaw-performance-optimization-guide",
    category: "Performance",
    readTime: "10 min read"
  },
  {
    title: "OpenClaw Business Systems Integration Guide 2026",
    description: "Complete guide to integrating OpenClaw AI agents with business systems: CRM, ERP, accounting software, marketing tools, and custom APIs. Step-by-step tutorials.",
    href: "/guides/openclaw-business-systems-integration",
    category: "Integration",
    readTime: "15 min read"
  }
];

export default function GuidesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient relative overflow-hidden pt-32 pb-20">
        <div className="absolute top-20 right-[10%] w-[400px] h-[400px] bg-orange/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 left-[5%] w-[300px] h-[300px] bg-blue/10 rounded-full blur-[100px]" />
        
        <div className="max-w-[1140px] mx-auto px-6 relative z-10">
          <div className="text-center max-w-[720px] mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-white/60 text-sm font-medium">Expert OpenClaw Knowledge</span>
            </div>
            
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 leading-[1.05] tracking-tight">
              OpenClaw <span className="text-orange">Guides</span>
            </h1>
            
            <p className="text-white/60 text-lg md:text-xl max-w-[600px] mx-auto leading-relaxed">
              Comprehensive guides and tutorials from Phil Patterson, the UK's leading OpenClaw consultant. Everything you need to get AI agents working for your business.
            </p>
          </div>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {guides.map((guide, i) => (
              <a
                key={i}
                href={guide.href}
                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-100"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="inline-block bg-orange/10 text-orange px-3 py-1 rounded-full text-sm font-medium">
                    {guide.category}
                  </span>
                  <span className="text-slate-400 text-sm">{guide.readTime}</span>
                </div>
                
                <h3 className="font-heading text-xl font-bold text-navy mb-3 group-hover:text-orange transition-colors leading-tight">
                  {guide.title}
                </h3>
                
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {guide.description}
                </p>
                
                <div className="flex items-center text-orange font-semibold text-sm group-hover:gap-2 transition-all">
                  Read Guide
                  <span className="ml-1 group-hover:ml-0 transition-all">→</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy">
        <div className="max-w-[1140px] mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
            Need Help Implementing <span className="text-orange">OpenClaw</span>?
          </h2>
          <p className="text-white/60 text-lg max-w-[600px] mx-auto mb-8">
            These guides will get you started, but if you need hands-on help with setup, custom skills, or enterprise deployment, I'm here to help.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-orange text-white px-8 py-4 rounded-btn font-semibold text-base hover:bg-orange-hover transition-all hover:-translate-y-0.5 shadow-glow-orange"
          >
            Get Expert Help
          </a>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 bg-slate-50">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-slate-600 text-lg">
              Book a free consultation to discuss your OpenClaw requirements.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}