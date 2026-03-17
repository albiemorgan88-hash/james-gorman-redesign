import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Custom AI Agent Development UK | Bespoke OpenClaw Skills & Automation",
  description: "Custom AI agent development and OpenClaw skill creation for UK businesses. Bespoke automation solutions, API integrations, and intelligent workflows tailored to your needs.",
  keywords: [
    "custom ai agent development",
    "openclaw skill development",
    "bespoke ai automation", 
    "custom ai solutions uk",
    "ai agent development service",
    "openclaw custom skills",
    "business automation development",
    "ai integration development"
  ],
  alternates: { canonical: "https://openclawconsultant.co.uk/services/custom-agent-development" },
  openGraph: {
    title: "Custom AI Agent Development UK | Bespoke OpenClaw Skills & Automation",
    description: "Custom AI agent development and OpenClaw skill creation for UK businesses. Bespoke automation solutions, API integrations, and intelligent workflows.",
    url: "https://openclawconsultant.co.uk/services/custom-agent-development", 
    type: "website",
  },
};

const developmentServices = [
  {
    icon: "⚡",
    title: "Custom OpenClaw Skills",
    desc: "Bespoke skills that integrate with your specific tools and workflows. From CRM automation to custom API integrations.",
    examples: ["SEO automation engines", "Lead generation pipelines", "Content creation workflows", "E-commerce integrations"]
  },
  {
    icon: "🔗",
    title: "API Integration Development", 
    desc: "Connect your AI agents to any service with an API. Complex authentication, data transformation, and error handling.",
    examples: ["CRM & sales tools", "Marketing platforms", "Financial systems", "Industry-specific software"]
  },
  {
    icon: "🧠",
    title: "Multi-Agent Orchestration",
    desc: "Coordinate multiple specialist agents working together. Advanced workflow automation with memory sharing and task delegation.",
    examples: ["Content production pipelines", "Customer service automation", "Research & analysis workflows", "Quality assurance systems"]
  },
  {
    icon: "📊",
    title: "Business Intelligence Agents",
    desc: "Agents that monitor, analyze, and report on your business metrics. Real-time dashboards and intelligent alerting.",
    examples: ["Performance monitoring", "Competitor analysis", "Financial tracking", "Operational analytics"]
  }
];

const skillExamples = [
  {
    category: "Marketing Automation",
    skills: [
      { name: "SEO Engine", desc: "Automated audits, keyword tracking, content optimization, competitor analysis" },
      { name: "Social Media Manager", desc: "Content creation, scheduling, engagement monitoring, analytics reporting" },
      { name: "Email Campaign Orchestrator", desc: "List management, sequence automation, A/B testing, performance tracking" },
      { name: "Lead Scoring System", desc: "Qualification criteria, scoring algorithms, CRM integration, handoff automation" }
    ]
  },
  {
    category: "Operations & Admin",
    skills: [
      { name: "Invoice Processor", desc: "OCR extraction, validation, approval workflows, accounting system integration" },
      { name: "Document Generator", desc: "Template management, data merging, PDF generation, distribution automation" },
      { name: "Appointment Scheduler", desc: "Calendar integration, booking logic, confirmation emails, reminder sequences" },
      { name: "Inventory Monitor", desc: "Stock tracking, reorder automation, supplier communication, reporting dashboards" }
    ]
  },
  {
    category: "Customer Service",
    skills: [
      { name: "Support Ticket Router", desc: "Intent classification, priority scoring, agent assignment, escalation logic" },
      { name: "Knowledge Base Assistant", desc: "Document indexing, semantic search, answer generation, feedback loops" },
      { name: "Customer Health Monitor", desc: "Usage analysis, churn prediction, intervention triggers, success metrics" },
      { name: "Feedback Analyzer", desc: "Sentiment analysis, categorization, trend identification, actionable insights" }
    ]
  }
];

const developmentProcess = [
  {
    phase: "Discovery & Specification",
    duration: "3-5 days",
    activities: [
      "Workflow analysis & requirements gathering",
      "Technical architecture planning",
      "API documentation & integration mapping", 
      "Success criteria definition"
    ]
  },
  {
    phase: "Prototype Development",
    duration: "5-7 days", 
    activities: [
      "Core functionality implementation",
      "Basic integration setup",
      "Initial testing & validation",
      "Client feedback incorporation"
    ]
  },
  {
    phase: "Full Development",
    duration: "1-3 weeks",
    activities: [
      "Complete feature implementation",
      "Error handling & edge cases",
      "Security hardening",
      "Performance optimization"
    ]
  },
  {
    phase: "Testing & Deployment", 
    duration: "3-5 days",
    activities: [
      "Comprehensive testing protocols",
      "Production environment setup",
      "Monitoring & logging configuration",
      "Documentation & training delivery"
    ]
  }
];

const technicalCapabilities = [
  "RESTful API integrations",
  "Database connectivity (SQL, NoSQL)",
  "File processing & OCR",
  "Web scraping & data extraction", 
  "Email & messaging automation",
  "Document generation & processing",
  "Real-time monitoring & alerting",
  "Custom authentication & security",
  "Third-party service integrations",
  "Performance optimization",
  "Error handling & recovery",
  "Comprehensive logging & analytics"
];

export default function CustomAgentDevelopmentPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient relative overflow-hidden min-h-[70vh] flex items-center grain">
        <div className="absolute top-20 right-[10%] w-[400px] h-[400px] bg-orange/5 rounded-full blur-[120px] glow-pulse" />
        <div className="absolute bottom-20 left-[5%] w-[300px] h-[300px] bg-blue/10 rounded-full blur-[100px] glow-pulse" style={{ animationDelay: "3s" }} />

        <div className="max-w-[1140px] mx-auto px-6 relative z-10 py-20">
          <div className="max-w-[720px]">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-white/60 text-sm font-medium">Bespoke AI Agent Development</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl md:text-[3.2rem] font-extrabold text-white mb-6 leading-[1.05] tracking-tight">
              Custom AI Agent
              <br />
              <span className="text-orange">Development Service</span>
            </h1>

            <p className="text-white/60 text-lg md:text-xl max-w-[540px] mb-10 leading-relaxed">
              Bespoke OpenClaw skills and AI agents built specifically for your business. From simple integrations to complex multi-agent orchestration.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-orange text-white px-8 py-4 rounded-btn font-semibold text-base hover:bg-orange-hover transition-all hover:-translate-y-0.5 shadow-glow-orange"
              >
                Discuss Your Project
              </a>
              <a
                href="/"
                className="inline-flex items-center justify-center bg-white/5 text-white px-8 py-4 rounded-btn font-semibold text-base hover:bg-white/10 transition-all border border-white/10"
              >
                ← Back to Home
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#fafbfc] to-transparent" />
      </section>

      {/* Problem Statement */}
      <section className="bg-light py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="max-w-[800px] mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-6">
              Generic AI Tools Don&apos;t Fit Your Business
            </h2>
            <p className="text-muted text-lg leading-relaxed mb-12">
              ChatGPT and off-the-shelf AI tools are great for general tasks, but your business has specific processes, unique data sources, and particular workflows. You need AI agents that understand your business and integrate seamlessly with your systems.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-box p-6 shadow-card">
                <div className="text-2xl mb-3">🔌</div>
                <h3 className="font-heading font-bold text-dark mb-2">Integration Gaps</h3>
                <p className="text-muted text-sm">Your tools don&apos;t talk to each other. Manual data transfer and context switching waste hours daily.</p>
              </div>
              <div className="bg-white rounded-box p-6 shadow-card">
                <div className="text-2xl mb-3">📝</div>
                <h3 className="font-heading font-bold text-dark mb-2">Custom Processes</h3>
                <p className="text-muted text-sm">Your workflows are unique. Generic AI tools can&apos;t understand your specific business logic and rules.</p>
              </div>
              <div className="bg-white rounded-box p-6 shadow-card">
                <div className="text-2xl mb-3">🔒</div>
                <h3 className="font-heading font-bold text-dark mb-2">Data Silos</h3>
                <p className="text-muted text-sm">Critical business data locked in different systems with no intelligent way to connect and analyze it.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Services */}
      <section className="bg-white py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-orange font-heading font-semibold text-sm uppercase tracking-widest mb-4">
              Development Services
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Custom AI Agents for Every Business Need
            </h2>
            <p className="text-muted text-lg max-w-[600px] mx-auto">
              From simple integrations to complex multi-agent orchestration. We build AI agents that work exactly how your business needs them to.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {developmentServices.map((service) => (
              <div key={service.title} className="bg-surface rounded-box p-8 card-lift">
                <div className="flex gap-4 items-start mb-6">
                  <div className="text-3xl">{service.icon}</div>
                  <div>
                    <h3 className="font-heading font-bold text-xl text-dark mb-2">{service.title}</h3>
                    <p className="text-muted leading-relaxed">{service.desc}</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-dark mb-3">Examples:</h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {service.examples.map((example) => (
                      <li key={example} className="flex gap-2 items-start text-sm text-muted-dark">
                        <span className="text-orange mt-0.5 flex-shrink-0">•</span>
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skill Library Examples */}
      <section className="bg-surface py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-orange font-heading font-semibold text-sm uppercase tracking-widest mb-4">
              Skill Examples
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Custom Skills We&apos;ve Built
            </h2>
            <p className="text-muted text-lg max-w-[600px] mx-auto">
              Real examples from our skill library. These can be adapted for your business or serve as inspiration for completely custom solutions.
            </p>
          </div>

          <div className="space-y-12">
            {skillExamples.map((category) => (
              <div key={category.category}>
                <h3 className="font-heading font-bold text-2xl text-dark mb-6">{category.category}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="bg-white rounded-box p-6 shadow-card card-lift">
                      <h4 className="font-heading font-bold text-lg text-dark mb-2">{skill.name}</h4>
                      <p className="text-muted text-sm leading-relaxed">{skill.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Capabilities */}
      <section className="bg-navy text-white py-24 relative overflow-hidden grain">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue/5 rounded-full blur-[150px]" />

        <div className="max-w-[1140px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-orange font-heading font-semibold text-sm uppercase tracking-widest mb-4">
                Technical Expertise
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Production-Grade Development
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                We build enterprise-quality AI agents with proper error handling, security, monitoring, and documentation. Not prototypes — production systems that scale.
              </p>
              
              <div className="space-y-4">
                <div className="flex gap-3 items-start">
                  <span className="text-orange mt-1 flex-shrink-0">▸</span>
                  <div>
                    <p className="font-semibold text-white">Battle-Tested Architecture</p>
                    <p className="text-white/60 text-sm">Built on patterns from 25+ production skills running daily in real businesses.</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-orange mt-1 flex-shrink-0">▸</span>
                  <div>
                    <p className="font-semibold text-white">Comprehensive Testing</p>
                    <p className="text-white/60 text-sm">Unit tests, integration tests, and real-world validation before deployment.</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-orange mt-1 flex-shrink-0">▸</span>
                  <div>
                    <p className="font-semibold text-white">Ongoing Maintenance</p>
                    <p className="text-white/60 text-sm">Documentation, version control, and support so your agents keep working as your business evolves.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/[0.03] border border-white/[0.06] rounded-box p-8">
              <h3 className="font-heading font-bold text-xl text-white mb-6">Technical Capabilities</h3>
              <div className="grid grid-cols-2 gap-3">
                {technicalCapabilities.map((capability) => (
                  <div key={capability} className="flex gap-2 items-center text-white/70 text-sm">
                    <span className="w-1.5 h-1.5 bg-orange rounded-full flex-shrink-0" />
                    {capability}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="bg-white py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-orange font-heading font-semibold text-sm uppercase tracking-widest mb-4">
              Development Process
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              From Concept to Production
            </h2>
            <p className="text-muted text-lg max-w-[600px] mx-auto">
              A structured development process that ensures your custom agents work perfectly from day one.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {developmentProcess.map((step, index) => (
              <div key={index} className="bg-surface rounded-box p-6 shadow-card relative">
                <div className="absolute -top-3 -left-3 bg-orange text-white font-bold text-lg w-8 h-8 rounded-full flex items-center justify-center text-sm">
                  {index + 1}
                </div>
                <h3 className="font-heading font-bold text-lg text-dark mb-2 mt-2">{step.phase}</h3>
                <p className="text-orange text-sm font-medium mb-4">{step.duration}</p>
                <ul className="space-y-2">
                  {step.activities.map((activity) => (
                    <li key={activity} className="text-muted text-sm flex gap-2 items-start">
                      <span className="text-orange mt-0.5 flex-shrink-0 text-xs">•</span>
                      {activity}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Structure */}
      <section className="bg-light py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-orange font-heading font-semibold text-sm uppercase tracking-widest mb-4">
              Investment
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Custom Development Pricing
            </h2>
            <p className="text-muted text-lg max-w-[600px] mx-auto">
              Fixed-price quotes based on complexity and scope. All projects include full documentation and 30-day support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1000px] mx-auto">
            <div className="bg-white rounded-box p-8 border border-border card-lift">
              <div className="text-sm font-semibold text-muted uppercase tracking-wider mb-6">
                Simple Integration
              </div>
              <div className="font-heading font-extrabold text-4xl text-dark mb-1">£500-1,500</div>
              <p className="text-muted text-sm mb-8">Single API integration</p>
              <ul className="space-y-3 mb-8">
                {[
                  "Simple API integration",
                  "Basic data transformation", 
                  "Error handling & logging",
                  "Documentation & testing",
                  "7 days development time",
                  "14 days post-delivery support"
                ].map((feature) => (
                  <li key={feature} className="flex gap-2 items-start text-sm text-muted-dark">
                    <span className="text-green-500 flex-shrink-0">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="block text-center bg-dark text-white px-6 py-3 rounded-btn font-semibold text-sm hover:bg-dark/90 transition-all"
              >
                Get Quote
              </a>
            </div>

            <div className="bg-navy text-white rounded-box p-8 border-2 border-orange/30 card-lift relative">
              <div className="absolute -top-3 left-6 bg-orange text-white text-xs font-bold px-3 py-1 rounded-full">
                Most Popular
              </div>
              <div className="text-sm font-semibold text-white/50 uppercase tracking-wider mb-6">
                Custom Skill
              </div>
              <div className="font-heading font-extrabold text-4xl mb-1">
                £2,000-<span className="text-orange">5,000</span>
              </div>
              <p className="text-white/50 text-sm mb-8">Complex automation workflow</p>
              <ul className="space-y-3 mb-8">
                {[
                  "Multi-step workflow automation",
                  "Multiple API integrations",
                  "Advanced logic & decision trees",
                  "Custom UI components",
                  "Comprehensive testing",
                  "3-4 weeks development", 
                  "30 days post-delivery support"
                ].map((feature) => (
                  <li key={feature} className="flex gap-2 items-start text-sm text-white/70">
                    <span className="text-orange flex-shrink-0">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="block text-center bg-orange text-white px-6 py-3 rounded-btn font-semibold text-sm hover:bg-orange-hover transition-all"
              >
                Discuss Project
              </a>
            </div>

            <div className="bg-white rounded-box p-8 border border-border card-lift">
              <div className="text-sm font-semibold text-muted uppercase tracking-wider mb-6">
                Enterprise System
              </div>
              <div className="font-heading font-extrabold text-4xl text-dark mb-1">
                £5,000<span className="text-orange">+</span>
              </div>
              <p className="text-muted text-sm mb-8">Multi-agent orchestration</p>
              <ul className="space-y-3 mb-8">
                {[
                  "Multi-agent coordination",
                  "Enterprise integrations",
                  "Advanced monitoring & analytics",
                  "Custom admin interfaces", 
                  "Load testing & optimization",
                  "4-8 weeks development",
                  "60 days post-delivery support"
                ].map((feature) => (
                  <li key={feature} className="flex gap-2 items-start text-sm text-muted-dark">
                    <span className="text-green-500 flex-shrink-0">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="block text-center bg-dark text-white px-6 py-3 rounded-btn font-semibold text-sm hover:bg-dark/90 transition-all"
              >
                Book Discovery
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-surface py-24">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-orange font-heading font-semibold text-sm uppercase tracking-widest mb-4">
              FAQ
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark">
              Custom Development Questions
            </h2>
          </div>
          
          <div className="space-y-0">
            {[
              {
                q: "How long does custom agent development take?",
                a: "Simple integrations take 1-2 weeks, custom skills take 3-4 weeks, and enterprise systems take 4-8 weeks. Timeline depends on complexity, number of integrations, and testing requirements. We&apos;ll give you a detailed timeline after the discovery phase."
              },
              {
                q: "Do you provide ongoing maintenance and updates?",
                a: "Yes, all custom development includes 30-60 days of post-delivery support (depending on project size). After that, we offer monthly maintenance retainers or you can handle updates in-house with our documentation and training."
              },
              {
                q: "Can you integrate with our existing business systems?",
                a: "Absolutely. We can integrate with any system that has an API — CRM, ERP, accounting software, e-commerce platforms, databases, and more. Complex legacy systems may require additional discovery work to plan the integration approach."
              },
              {
                q: "What happens if our requirements change during development?",
                a: "Minor changes are usually accommodated within the original scope. Significant changes require a change request with updated timeline and cost. We use an iterative approach with regular check-ins to catch requirement changes early."
              },
              {
                q: "How do you ensure the quality and reliability of custom agents?",
                a: "Comprehensive testing including unit tests, integration tests, and real-world validation. All agents include proper error handling, logging, and monitoring. We follow the same development standards used in our own production systems."
              },
              {
                q: "Can you provide training for our team to maintain the agents?",
                a: "Yes, comprehensive documentation and training are included with every custom development project. We can also provide additional training sessions or workshops to get your team comfortable with maintaining and extending the agents."
              }
            ].map((faq, i) => (
              <details key={i} className="group border-b border-border">
                <summary className="flex justify-between items-center py-5 cursor-pointer font-heading font-semibold text-dark hover:text-blue transition-colors list-none [&::-webkit-details-marker]:hidden">
                  {faq.q}
                  <span className="text-orange text-xl ml-4 group-open:rotate-45 transition-transform duration-200 flex-shrink-0">
                    +
                  </span>
                </summary>
                <p className="text-muted text-sm leading-relaxed pb-5 pr-8">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-orange py-16">
        <div className="max-w-[900px] mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-white mb-4">
            Ready to Build Your Custom AI Agent?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-[600px] mx-auto">
            Let&apos;s discuss your specific requirements and create a custom solution that transforms your business operations.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-navy text-white px-10 py-4 rounded-btn font-bold text-lg hover:bg-dark transition-all hover:-translate-y-0.5 shadow-xl"
          >
            Discuss Your Project →
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-navy text-white py-24 relative overflow-hidden grain">
        <div className="absolute bottom-0 left-[20%] w-[500px] h-[500px] bg-orange/5 rounded-full blur-[120px]" />
        <div className="absolute top-0 right-[10%] w-[400px] h-[400px] bg-blue/5 rounded-full blur-[100px]" />

        <div className="max-w-[1140px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-orange font-heading font-semibold text-sm uppercase tracking-widest mb-4">
                Start Building
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Discuss Your Custom
                <br />
                <span className="text-orange">Agent Project</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Free discovery call to understand your requirements, assess technical feasibility, and provide a detailed quote. No obligation — just honest technical advice.
              </p>
              
              <div className="space-y-4 text-white/50 text-sm">
                <div className="flex gap-3 items-center">
                  <span className="text-orange">🔍</span>
                  <span>Free technical feasibility assessment</span>
                </div>
                <div className="flex gap-3 items-center">
                  <span className="text-orange">📝</span>
                  <span>Detailed project specification & quote</span>
                </div>
                <div className="flex gap-3 items-center">
                  <span className="text-orange">⏱️</span>
                  <span>Clear timeline & milestone planning</span>
                </div>
              </div>
            </div>

            <div className="bg-white/[0.03] border border-white/[0.06] rounded-box p-8">
              <h3 className="font-heading font-bold text-xl text-white mb-1">Project Discovery Call</h3>
              <p className="text-white/40 text-sm mb-6">Tell us about your automation requirements</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}