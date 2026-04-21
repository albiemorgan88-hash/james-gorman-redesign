import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "OpenClaw Guides, Buyer Guides & AI Automation Tutorials",
  description: "Complete collection of OpenClaw buyer guides, setup walkthroughs, tutorials, and commercial advice. Learn pricing, pilots, migrations, custom skills, security, and business implementation from the UK's leading consultant.",
  keywords: [
    "openclaw guides",
    "openclaw buyer guides",
    "openclaw tutorials",
    "ai agent guides",
    "openclaw setup guides",
    "openclaw best practices",
  ],
  alternates: { canonical: "https://openclawconsultant.co.uk/guides" },
  openGraph: {
    title: "OpenClaw Guides, Buyer Guides & AI Automation Tutorials",
    description: "Complete collection of OpenClaw buyer guides and tutorials from the UK's leading consultant.",
    url: "https://openclawconsultant.co.uk/guides",
    type: "website",
  },
};

interface Guide {
  title: string;
  href: string;
  category: string;
}

interface BuyerGuide {
  title: string;
  href: string;
  tag: string;
  readTime: string;
  description: string;
}

const guidesData: Record<string, Guide[]> = {
  "Getting Started": [
    { title: "What is OpenClaw? Complete Guide 2026", href: "/guides/what-is-openclaw-2026", category: "Getting Started" },
    { title: "OpenClaw Beginner Guide 2026", href: "/guides/openclaw-beginner-guide", category: "Getting Started" },
    { title: "OpenClaw Tutorial for Beginners", href: "/guides/openclaw-tutorial-beginners", category: "Getting Started" },
    { title: "Getting Started with AI Automation", href: "/guides/getting-started-ai-automation", category: "Getting Started" },
    { title: "Set Up an AI Agent for Your Business", href: "/guides/setup-ai-agent-business", category: "Getting Started" },
    { title: "What Is Agentic AI? The Complete Guide", href: "/guides/what-is-agentic-ai", category: "Getting Started" },
    { title: "OpenClaw Setup for Business", href: "/guides/openclaw-setup-business", category: "Getting Started" },
  ],
  "Setup Guides": [
    { title: "OpenClaw Setup Guide for Mac 2026", href: "/guides/openclaw-setup-mac", category: "Setup" },
    { title: "OpenClaw Setup Guide for Windows", href: "/guides/openclaw-setup-windows", category: "Setup" },
    { title: "OpenClaw Telegram Setup Guide", href: "/guides/openclaw-setup-telegram", category: "Setup" },
    { title: "OpenClaw WhatsApp Setup Guide", href: "/guides/openclaw-setup-whatsapp", category: "Setup" },
    { title: "OpenClaw Discord Bot Setup Guide", href: "/guides/openclaw-discord-setup", category: "Setup" },
    { title: "Installing Pinchy: Setup Guide 2026", href: "/guides/installing-pinchy", category: "Setup" },
    { title: "OpenClaw Setup Service UK", href: "/guides/openclaw-setup-service-uk", category: "Setup" },
  ],
  "OpenClaw Features": [
    { title: "OpenClaw Skills: Complete Guide", href: "/guides/openclaw-skills-guide", category: "Features" },
    { title: "OpenClaw Cron Jobs: Automation Guide", href: "/guides/openclaw-cron-jobs", category: "Features" },
    { title: "OpenClaw Memory Management Guide", href: "/guides/openclaw-memory-management", category: "Features" },
    { title: "OpenClaw Browser Automation Guide", href: "/guides/openclaw-browser-automation", category: "Features" },
    { title: "OpenClaw Email Inbox Management", href: "/guides/openclaw-email-inbox-management", category: "Features" },
    { title: "Connect OpenClaw to Moltbook", href: "/guides/openclaw-moltbook-guide", category: "Features" },
    { title: "OpenClaw + WhatsApp Business Guide", href: "/guides/openclaw-whatsapp-business", category: "Features" },
    { title: "OpenClaw Social Media Automation", href: "/guides/openclaw-social-media-management", category: "Features" },
    { title: "OpenClaw for Customer Support", href: "/guides/openclaw-customer-support", category: "Features" },
    { title: "OpenClaw E-commerce Automation", href: "/guides/openclaw-ecommerce-automation", category: "Features" },
  ],
  "Teams & Enterprise": [
    { title: "Build an OpenClaw Agent Team", href: "/guides/openclaw-agent-team", category: "Enterprise" },
    { title: "OpenClaw Agent Team Setup Guide", href: "/guides/openclaw-agent-team-setup", category: "Enterprise" },
    { title: "OpenClaw for Teams: Multi-Agent Guide", href: "/guides/openclaw-for-teams", category: "Enterprise" },
    { title: "AI Agent Memory Systems", href: "/guides/ai-agent-memory-systems", category: "Enterprise" },
    { title: "Multi-Agent Orchestration: Running AI Agent Teams", href: "/guides/multi-agent-orchestration", category: "Enterprise" },
    { title: "Enterprise OpenClaw Deployment Guide", href: "/guides/enterprise-openclaw-deployment", category: "Enterprise" },
    { title: "OpenClaw Enterprise Deployment", href: "/guides/openclaw-enterprise-deployment", category: "Enterprise" },
    { title: "OpenClaw Deployment Service UK", href: "/guides/openclaw-deployment-service-uk", category: "Enterprise" },
    { title: "OpenClaw + Pinchy Enterprise Stack", href: "/guides/openclaw-pinchy-enterprise-stack", category: "Enterprise" },
    { title: "OpenClaw Enterprise Security & GDPR", href: "/guides/openclaw-enterprise-security-compliance", category: "Enterprise" },
    { title: "OpenClaw Security Best Practices", href: "/guides/openclaw-security-best-practices", category: "Enterprise" },
    { title: "OpenClaw Security & Compliance Guide", href: "/guides/openclaw-security-compliance", category: "Enterprise" },
    { title: "OpenClaw Performance Optimisation", href: "/guides/openclaw-performance-optimization-guide", category: "Enterprise" },
    { title: "OpenClaw Business Integration Guide", href: "/guides/openclaw-business-systems-integration", category: "Enterprise" },
  ],
  "Comparisons": [
    { title: "OpenClaw vs ChatGPT: Key Differences", href: "/guides/openclaw-vs-chatgpt", category: "Comparison" },
    { title: "OpenClaw vs Zapier vs Make", href: "/guides/openclaw-vs-zapier-vs-make", category: "Comparison" },
    { title: "OpenClaw vs n8n: Which to Choose?", href: "/guides/openclaw-vs-n8n", category: "Comparison" },
    { title: "OpenClaw vs AutoGen Comparison", href: "/guides/openclaw-vs-autogen", category: "Comparison" },
    { title: "OpenClaw vs CrewAI Comparison", href: "/guides/openclaw-vs-crew-ai", category: "Comparison" },
    { title: "AI Agent Frameworks Compared", href: "/guides/ai-agent-frameworks-compared", category: "Comparison" },
    { title: "OpenClaw vs Claude Code Comparison", href: "/guides/openclaw-vs-claude-code", category: "Comparison" },
    { title: "OpenClaw vs Copilot Studio", href: "/guides/openclaw-vs-copilot-studio", category: "Comparison" },
    { title: "OpenClaw vs VA: Cost Comparison 2026", href: "/guides/openclaw-vs-virtual-assistant-cost", category: "Comparison" },
    { title: "OpenClaw vs Virtual Assistant Costs", href: "/guides/openclaw-vs-va-cost-comparison", category: "Comparison" },
    { title: "Pinchy vs Manual OpenClaw Management", href: "/guides/pinchy-vs-manual", category: "Comparison" },
    { title: "OpenClaw vs Manus", href: "/guides/openclaw-vs-manus", category: "Comparison" },
  ],
  "Pricing & ROI": [
    { title: "OpenClaw Pricing & Costs Explained", href: "/guides/openclaw-pricing-explained", category: "Pricing" },
    { title: "AI Agent Costs UK: Full Pricing Guide", href: "/guides/ai-agent-cost-uk", category: "Pricing" },
    { title: "AI Consultancy Costs UK", href: "/guides/ai-consultancy-costs-uk", category: "Pricing" },
    { title: "OpenClaw Consultant Cost UK", href: "/guides/openclaw-consultant-cost-uk", category: "Pricing" },
    { title: "AI Automation ROI Calculator", href: "/guides/ai-automation-roi-calculator", category: "Pricing" },
    { title: "Measuring AI ROI for UK Businesses", href: "/guides/measuring-ai-roi-uk-business", category: "Pricing" },
    { title: "OpenClaw ROI for Business", href: "/guides/openclaw-roi-for-business", category: "Pricing" },
    { title: "AI Automation vs Outsourcing: UK Guide", href: "/guides/ai-automation-vs-outsourcing", category: "Pricing" },
    { title: "OpenClaw for Accountants: Automation", href: "/guides/openclaw-accountants-automation", category: "Pricing" },
  ],
  "Industry Guides": [
    { title: "AI Agents for Accountants UK", href: "/guides/ai-agents-accountants", category: "Industry" },
    { title: "AI Agents for Charities UK", href: "/guides/ai-agents-charities", category: "Industry" },
    { title: "AI Agents for Construction Companies", href: "/guides/ai-agents-construction", category: "Industry" },
    { title: "AI Agents for Dental Practices UK", href: "/guides/ai-agents-dentists", category: "Industry" },
    { title: "AI Agents for Estate Agents UK", href: "/guides/ai-agents-estate-agents", category: "Industry" },
    { title: "AI Agents for Gyms & Fitness Studios", href: "/guides/ai-agents-gyms-fitness", category: "Industry" },
    { title: "AI Agents for Logistics Companies", href: "/guides/ai-agents-logistics", category: "Industry" },
    { title: "AI Agents for Property Management", href: "/guides/ai-agents-property-management", category: "Industry" },
    { title: "AI Agents for Recruitment Agencies", href: "/guides/ai-agents-recruitment-agencies", category: "Industry" },
    { title: "AI Agents for Restaurants & Hospitality", href: "/guides/ai-agents-restaurants", category: "Industry" },
    { title: "AI Agents for Salons & Spas UK", href: "/guides/ai-agents-salons-spas", category: "Industry" },
    { title: "AI Agents for Solicitors & Law Firms", href: "/guides/ai-agents-solicitors", category: "Industry" },
    { title: "AI Agents for Veterinary Practices", href: "/guides/ai-agents-veterinary", category: "Industry" },
    { title: "AI for Construction: Automation Guide", href: "/guides/ai-for-construction-companies", category: "Industry" },
    { title: "AI for Dentists: Practice Automation", href: "/guides/ai-for-dentists-uk", category: "Industry" },
    { title: "AI for Financial Services UK", href: "/guides/ai-for-financial-services-uk", category: "Industry" },
    { title: "AI for Gyms: Member Retention & Growth", href: "/guides/ai-for-gyms-uk", category: "Industry" },
    { title: "AI in UK Healthcare: Practical Guide", href: "/guides/ai-for-healthcare-uk", category: "Industry" },
    { title: "AI for Hotels & Hospitality UK", href: "/guides/ai-for-hospitality-uk", category: "Industry" },
    { title: "AI for Law Firms: Legal Automation", href: "/guides/ai-for-legal-uk", category: "Industry" },
    { title: "AI in UK Manufacturing: Guide", href: "/guides/ai-for-manufacturing-uk", category: "Industry" },
    { title: "AI for Plumbers & Trade Businesses", href: "/guides/ai-for-plumbers-uk", category: "Industry" },
    { title: "AI for UK Retail: Growth Guide", href: "/guides/ai-for-retail-uk", category: "Industry" },
    { title: "AI for Schools: Admin & Wellbeing", href: "/guides/ai-for-schools-uk", category: "Industry" },
    { title: "AI Agents for Education", href: "/guides/ai-agents-for-education", category: "Industry" },
    { title: "AI Agents for Supply Chain Management", href: "/guides/ai-agents-for-supply-chain", category: "Industry" },
    { title: "AI Agents for Real Estate", href: "/guides/ai-agents-for-real-estate", category: "Industry" },
    { title: "AI Agents for Finance", href: "/guides/ai-agents-for-finance", category: "Industry" },
    { title: "AI Agents for Procurement", href: "/guides/ai-agents-for-procurement", category: "Industry" },
    { title: "AI Agents for Insurance Brokers", href: "/guides/ai-agents-for-insurance-brokers", category: "Industry" },
  ],
  "AI Business Strategy": [
    { title: "AI Transformation Strategy 2026", href: "/guides/ai-transformation-strategy-2026", category: "Strategy" },
    { title: "AI Workforce Planning 2026", href: "/guides/ai-workforce-planning-2026", category: "Strategy" },
    { title: "AI Governance & Compliance UK", href: "/guides/ai-governance-compliance-uk", category: "Strategy" },
    { title: "AI Risk Management Framework", href: "/guides/ai-risk-management-framework", category: "Strategy" },
    { title: "Enterprise AI Deployment UK Guide", href: "/guides/enterprise-ai-deployment-uk", category: "Strategy" },
    { title: "AI Compliance Automation: GDPR & More", href: "/guides/ai-compliance-automation", category: "Strategy" },
    { title: "AI Agents and Compliance Risk", href: "/guides/ai-agents-compliance-risk", category: "Strategy" },
    { title: "AI Audit for Business", href: "/guides/ai-audit-for-business", category: "Strategy" },
    { title: "AI Readiness Assessment UK", href: "/guides/ai-readiness-assessment-uk", category: "Strategy" },
    { title: "AI Readiness Assessment Guide", href: "/guides/ai-readiness-assessment-guide", category: "Strategy" },
    { title: "AI Implementation Consultant UK", href: "/guides/ai-implementation-consultant-uk", category: "Strategy" },
    { title: "OpenClaw Consultant UK", href: "/guides/openclaw-consultant-uk", category: "Strategy" },
    { title: "OpenClaw Proof of Concept UK", href: "/guides/openclaw-proof-of-concept-uk", category: "Strategy" },
    { title: "OpenClaw Implementation Consultant UK", href: "/guides/openclaw-implementation-consultant-uk", category: "Strategy" },
    { title: "OpenClaw Audit Service", href: "/guides/openclaw-audit-service", category: "Strategy" },
    { title: "OpenClaw Managed Service UK", href: "/guides/openclaw-managed-service-uk", category: "Strategy" },
    { title: "OpenClaw Migration Service", href: "/guides/openclaw-migration-service", category: "Strategy" },
    { title: "OpenClaw Compliance Checklist UK", href: "/guides/openclaw-compliance-checklist-uk", category: "Strategy" },
    { title: "AI Governance Policy Template", href: "/guides/ai-governance-policy-template", category: "Strategy" },
  ],
  "AI Automation": [
    { title: "AI Customer Service Automation UK", href: "/guides/ai-customer-service-automation-uk", category: "Automation" },
    { title: "AI Appointment Booking for Business", href: "/guides/ai-appointment-booking", category: "Automation" },
    { title: "AI Chatbots for UK Businesses", href: "/guides/ai-chatbot-for-business-uk", category: "Automation" },
    { title: "Automate Customer Onboarding with AI", href: "/guides/ai-customer-onboarding", category: "Automation" },
    { title: "AI Data Analysis for SMEs", href: "/guides/ai-data-analysis-for-smes", category: "Automation" },
    { title: "AI Inventory Management Guide", href: "/guides/ai-inventory-management", category: "Automation" },
    { title: "AI Invoice Processing: Cut Admin 80%", href: "/guides/ai-invoice-processing", category: "Automation" },
    { title: "AI Social Media Management for Business", href: "/guides/ai-social-media-management", category: "Automation" },
    { title: "Automate Accounts & Bookkeeping with AI", href: "/guides/automate-accounts-bookkeeping-ai", category: "Automation" },
    { title: "Managing AI Agent Teams: Practical Guide", href: "/guides/ai-agent-team-management", category: "Automation" },
    { title: "AI Agents for Customer Support", href: "/guides/ai-agents-for-customer-support", category: "Automation" },
    { title: "OpenClaw Training for Teams", href: "/guides/openclaw-training-for-teams", category: "Automation" },
    { title: "OpenClaw Custom Skills Development", href: "/guides/openclaw-custom-skills-development", category: "Automation" },
    { title: "Top 10 OpenClaw Skills for Business", href: "/guides/top-10-openclaw-skills", category: "Automation" },
  ],
};

const buyerGuides: BuyerGuide[] = [
  {
    title: "OpenClaw Consultant UK",
    href: "/guides/openclaw-consultant-uk",
    tag: "Consulting",
    readTime: "7 min read",
    description: "What good OpenClaw consulting should include, when outside help is worth it, and how to avoid paying for vague AI theatre.",
  },
  {
    title: "OpenClaw Consultant Cost UK",
    href: "/guides/openclaw-consultant-cost-uk",
    tag: "Pricing",
    readTime: "6 min read",
    description: "A straight view of UK OpenClaw consultant pricing, from audits and pilots through implementation and managed support.",
  },
  {
    title: "OpenClaw Proof of Concept UK",
    href: "/guides/openclaw-proof-of-concept-uk",
    tag: "Pilot",
    readTime: "6 min read",
    description: "How to run a focused pilot that proves one workflow properly, instead of funding a fuzzy AI experiment.",
  },
  {
    title: "OpenClaw Custom Skills Development",
    href: "/guides/openclaw-custom-skills-development",
    tag: "Custom Skills",
    readTime: "7 min read",
    description: "When bespoke OpenClaw skills are worth building, how to scope them properly, and what good delivery should look like.",
  },
  {
    title: "OpenClaw Migration Service",
    href: "/guides/openclaw-migration-service",
    tag: "Migration",
    readTime: "7 min read",
    description: "When moving from ChatGPT, Zapier, or patchwork automations makes sense, and how to avoid recreating old mess on a new stack.",
  },
  {
    title: "OpenClaw Audit Service",
    href: "/guides/openclaw-audit-service",
    tag: "Audit",
    readTime: "7 min read",
    description: "What to review before you automate anything serious, including workflow fit, ownership, data risk, and approval points.",
  },
];

const categoryColors: Record<string, string> = {
  "Getting Started": "bg-green-500/10 text-green-600",
  "Setup Guides": "bg-blue-500/10 text-blue-600",
  "OpenClaw Features": "bg-orange/10 text-orange",
  "Teams & Enterprise": "bg-purple-500/10 text-purple-600",
  "Comparisons": "bg-cyan-500/10 text-cyan-600",
  "Pricing & ROI": "bg-amber-500/10 text-amber-600",
  "Industry Guides": "bg-rose-500/10 text-rose-600",
  "AI Business Strategy": "bg-indigo-500/10 text-indigo-600",
  "AI Automation": "bg-teal-500/10 text-teal-600",
};

export default function GuidesPage() {
  const totalGuides = Object.values(guidesData).reduce((sum, g) => sum + g.length, 0);
  const navSections = ["Buyer Guides", ...Object.keys(guidesData)];

  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient relative overflow-hidden pt-32 pb-20">
        <div className="absolute top-20 right-[10%] w-[400px] h-[400px] bg-orange/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 left-[5%] w-[300px] h-[300px] bg-blue/10 rounded-full blur-[100px]" />

        <div className="max-w-[1140px] mx-auto px-6 relative z-10">
          <div className="text-center max-w-[760px] mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-white/60 text-sm font-medium">{totalGuides} Expert Guides</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 leading-[1.05] tracking-tight">
              OpenClaw <span className="text-orange">Guides</span>
            </h1>

            <p className="text-white/60 text-lg md:text-xl max-w-[680px] mx-auto leading-relaxed">
              Buyer guides, setup walkthroughs, and practical tutorials from Blue Canvas. Start with pricing, pilots, migration, and implementation, then go deeper into setup, features, and industry use cases.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Nav */}
      <section className="sticky top-16 z-20 border-b border-border-light bg-white py-5 md:top-20 md:py-8">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:flex-wrap md:justify-center">
            {navSections.map((cat) => (
              <a
                key={cat}
                href={`#${cat.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                className="shrink-0 whitespace-nowrap rounded-full bg-slate-100 px-3 py-2 text-sm font-medium text-muted-dark transition-colors hover:bg-orange/10 hover:text-orange"
              >
                {cat}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Buyer Guides */}
      <section id="buyer-guides" className="py-16 bg-surface scroll-mt-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="max-w-[760px] mb-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-orange/10 px-3 py-1 text-sm font-medium text-orange mb-4">
              Start here
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">Buyer Guides</h2>
            <p className="text-muted-dark text-lg leading-relaxed">
              These are the pages serious buyers usually read first, pricing, pilots, migration, audit logic, and what good OpenClaw help should actually look like.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {buyerGuides.map((guide) => (
              <a
                key={guide.href}
                href={guide.href}
                className="group bg-white rounded-2xl p-7 shadow-card hover:shadow-card-hover transition-all duration-200 hover:-translate-y-1 border border-border-light"
              >
                <div className="flex items-center justify-between gap-4 mb-3">
                  <span className="inline-block bg-orange/10 text-orange px-3 py-1 rounded-full text-xs font-medium">
                    {guide.tag}
                  </span>
                  <span className="text-muted text-xs">{guide.readTime}</span>
                </div>
                <h3 className="font-heading text-lg font-bold text-navy mb-3 group-hover:text-orange transition-colors">
                  {guide.title}
                </h3>
                <p className="text-muted-dark text-sm leading-relaxed mb-4">{guide.description}</p>
                <span className="text-orange text-sm font-semibold">Read Guide →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Guide Categories */}
      <section className="py-16 bg-surface">
        <div className="max-w-[1140px] mx-auto px-6">
          {Object.entries(guidesData).map(([category, guides]) => (
            <div key={category} id={category.toLowerCase().replace(/[^a-z0-9]+/g, '-')} className="mb-16 last:mb-0 scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <h2 className="font-heading text-2xl font-bold text-navy">{category}</h2>
                <span className="text-sm text-muted">{guides.length} guides</span>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {guides.map((guide) => (
                  <a
                    key={guide.href}
                    href={guide.href}
                    className="group bg-white rounded-xl p-5 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 border border-border-light"
                  >
                    <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-medium mb-3 ${categoryColors[category] || 'bg-slate-100 text-muted-dark'}`}>
                      {guide.category}
                    </span>
                    <h3 className="font-heading text-base font-bold text-navy group-hover:text-orange transition-colors leading-snug mb-2">
                      {guide.title}
                    </h3>
                    <span className="text-orange text-sm font-semibold">Read Guide →</span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy">
        <div className="max-w-[1140px] mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
            Need Help Implementing <span className="text-orange">OpenClaw</span>?
          </h2>
          <p className="text-white/60 text-lg max-w-[600px] mx-auto mb-8">
            These guides will get you started, but if you need hands-on help with setup, custom skills, or enterprise deployment, I&apos;m here to help.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-orange text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-orange-hover transition-all hover:-translate-y-0.5 shadow-glow-orange"
          >
            Get Expert Help
          </a>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 bg-surface">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-muted-dark text-lg">
              Book a free consultation to discuss your OpenClaw requirements.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
