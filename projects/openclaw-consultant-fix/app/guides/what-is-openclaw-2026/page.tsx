import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "What is OpenClaw? Complete Guide 2026 | Everything You Need to Know",
  description: "Complete guide to OpenClaw in 2026. Learn what OpenClaw is, how it works, key features, use cases, and why it's the most powerful AI agent platform for businesses.",
  keywords: [
    "what is openclaw",
    "openclaw guide 2026", 
    "openclaw explained",
    "openclaw features",
    "openclaw vs chatgpt",
    "ai agent platform",
    "openclaw tutorial",
    "openclaw capabilities"
  ],
  alternates: { canonical: "https://openclawconsultant.co.uk/guides/what-is-openclaw-2026" },
  openGraph: {
    title: "What is OpenClaw? Complete Guide 2026 | Everything You Need to Know",
    description: "Complete guide to OpenClaw in 2026. Learn what OpenClaw is, how it works, key features, use cases, and why it's the most powerful AI agent platform.",
    url: "https://openclawconsultant.co.uk/guides/what-is-openclaw-2026",
    type: "article",
  },
};

const keyFeatures = [
  {
    feature: "Persistent Memory",
    description: "Unlike ChatGPT, OpenClaw agents remember everything across conversations and sessions",
    benefit: "No more repeating context. Your agent builds knowledge about your business over time."
  },
  {
    feature: "Custom Skills",
    description: "Extend your agent's capabilities with custom code that integrates with any API or service",
    benefit: "Connect to your specific tools and automate your exact workflows, not generic tasks."
  },
  {
    feature: "Multi-Agent Orchestration", 
    description: "Deploy multiple specialized agents that work together and delegate tasks to each other",
    benefit: "Complex workflows handled by specialist agents working in coordination."
  },
  {
    feature: "Cron Scheduling",
    description: "Agents can run tasks automatically on schedules, even when you're not around",
    benefit: "True automation — work happens 24/7 without human intervention."
  },
  {
    feature: "Tool Integration",
    description: "Native integration with files, web browsing, APIs, databases, and development tools",
    benefit: "Your agent can read, write, analyze, and act on real business data."
  },
  {
    feature: "Local Control",
    description: "Runs on your infrastructure with your model keys — you control everything",
    benefit: "Complete data privacy and customization without vendor lock-in."
  }
];

const comparisonPoints = [
  {
    aspect: "Memory",
    chatgpt: "Forgets context between sessions",
    openclaw: "Persistent memory across all conversations"
  },
  {
    aspect: "Customization",
    chatgpt: "Limited to built-in capabilities", 
    openclaw: "Unlimited custom skills and integrations"
  },
  {
    aspect: "Automation",
    chatgpt: "Manual interaction required",
    openclaw: "Fully autonomous operation with scheduling"
  },
  {
    aspect: "Tool Access",
    chatgpt: "Basic web browsing and code execution",
    openclaw: "Full access to files, APIs, databases, development tools"
  },
  {
    aspect: "Multi-Agent",
    chatgpt: "Single agent conversations",
    openclaw: "Multiple agents working together"
  },
  {
    aspect: "Data Privacy",
    chatgpt: "Data processed on OpenAI's servers",
    openclaw: "Everything runs on your infrastructure"
  }
];

const useCaseExamples = [
  {
    category: "Business Operations",
    examples: [
      "Automated invoice processing and approval workflows",
      "Customer support ticket routing and initial responses", 
      "Inventory monitoring with automatic reorder triggers",
      "Employee onboarding checklist automation"
    ]
  },
  {
    category: "Marketing & Sales",
    examples: [
      "Daily SEO audits and competitor analysis",
      "Lead qualification and CRM updates",
      "Social media content creation and scheduling",
      "Email campaign optimization and A/B testing"
    ]
  },
  {
    category: "Development & IT",
    examples: [
      "Automated code reviews and deployment pipelines",
      "System monitoring with intelligent alerting",
      "Documentation generation from code comments",
      "Bug triage and initial investigation"
    ]
  },
  {
    category: "Finance & Analytics", 
    examples: [
      "Daily financial reporting and variance analysis",
      "Expense categorization and compliance checking",
      "Performance dashboard updates",
      "Market analysis and trend identification"
    ]
  }
];

const architectureComponents = [
  {
    component: "Gateway",
    description: "The core daemon that manages agent communication, model routing, and tool access",
    purpose: "Provides secure, reliable foundation for all agent operations"
  },
  {
    component: "Memory System",
    description: "Persistent storage for agent memories, conversation history, and learned context",
    purpose: "Enables agents to build knowledge and maintain context over time"
  },
  {
    component: "Skill Framework",
    description: "Modular system for adding custom capabilities and integrations to agents",
    purpose: "Allows unlimited extension of agent capabilities for specific business needs"
  },
  {
    component: "Agent Runtime",
    description: "Environment where agents execute, with access to tools, skills, and memory",
    purpose: "Provides secure, controlled space for agent operations"
  },
  {
    component: "Model Router",
    description: "Intelligent routing of requests to different AI models based on task requirements",
    purpose: "Optimizes cost and performance by using the right model for each task"
  }
];

const implementationLevels = [
  {
    level: "Basic Setup",
    timeframe: "1-2 weeks",
    description: "Single agent with essential integrations for immediate productivity gains",
    suitableFor: "Small businesses, individual consultants, testing OpenClaw capabilities"
  },
  {
    level: "Business Integration", 
    timeframe: "3-4 weeks",
    description: "Multiple specialized agents with comprehensive tool integration and workflows",
    suitableFor: "Growing businesses, marketing agencies, professional services"
  },
  {
    level: "Enterprise Deployment",
    timeframe: "6-8 weeks", 
    description: "Full multi-agent orchestration with advanced security and monitoring",
    suitableFor: "Large organizations, complex workflows, mission-critical automation"
  }
];

export default function WhatIsOpenClawPage() {
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
              <span className="text-white/60 text-sm font-medium">Complete OpenClaw Guide 2026</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl md:text-[3.2rem] font-extrabold text-white mb-6 leading-[1.05] tracking-tight">
              What is OpenClaw?
              <br />
              <span className="text-orange">Complete Guide 2026</span>
            </h1>

            <p className="text-white/60 text-lg md:text-xl max-w-[540px] mb-10 leading-relaxed">
              Everything you need to know about OpenClaw — the most powerful AI agent platform for businesses. Features, capabilities, and real-world applications explained.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#overview"
                className="inline-flex items-center justify-center bg-orange text-white px-8 py-4 rounded-btn font-semibold text-base hover:bg-orange-hover transition-all hover:-translate-y-0.5 shadow-glow-orange"
              >
                Read Full Guide
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

      {/* Overview */}
      <section id="overview" className="bg-light py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="max-w-[800px] mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-8">
              OpenClaw: The AI Operating System for Business
            </h2>
            <div className="prose prose-lg max-w-none text-muted leading-relaxed space-y-6">
              <p>
                OpenClaw is an open-source AI agent platform that transforms how businesses operate. Unlike ChatGPT or other conversational AI tools, OpenClaw is designed to run persistent, autonomous agents that can perform complex business workflows without constant human oversight.
              </p>
              <p>
                Think of OpenClaw as giving your business an AI operating system. Your agents have memory, can learn your processes, integrate with your tools, and work together to handle everything from customer service to financial reporting to marketing automation — 24 hours a day, 7 days a week.
              </p>
              <p>
                In 2026, OpenClaw has evolved into the most sophisticated agent platform available, with advanced multi-agent orchestration, comprehensive tool integration, and enterprise-grade security features. It's no longer just for developers — businesses of all sizes are using OpenClaw to automate their operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="bg-white py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              What Makes OpenClaw Different
            </h2>
            <p className="text-muted text-lg max-w-[600px] mx-auto">
              Six key features that set OpenClaw apart from ChatGPT and other AI tools.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyFeatures.map((item, index) => (
              <div key={index} className="bg-surface rounded-box p-8 card-lift">
                <div className="text-2xl mb-4">
                  {index === 0 ? "🧠" : index === 1 ? "🔧" : index === 2 ? "🤝" : index === 3 ? "⏰" : index === 4 ? "🔗" : "🔒"}
                </div>
                <h3 className="font-heading font-bold text-xl text-dark mb-3">{item.feature}</h3>
                <p className="text-muted text-sm leading-relaxed mb-4">{item.description}</p>
                <div className="border-l-4 border-orange pl-4">
                  <p className="text-dark font-medium text-sm">{item.benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OpenClaw vs ChatGPT */}
      <section className="bg-navy text-white py-24 relative overflow-hidden grain">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue/5 rounded-full blur-[150px]" />

        <div className="max-w-[1140px] mx-auto px-6 relative z-10">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              OpenClaw vs ChatGPT: The Key Differences
            </h2>
            <p className="text-white/60 text-lg max-w-[600px] mx-auto">
              While ChatGPT excels at conversations, OpenClaw is built for autonomous business operations.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white/[0.03] border border-white/[0.06] rounded-box">
              <thead>
                <tr className="border-b border-white/[0.06]">
                  <th className="text-left p-6 text-white font-heading font-bold">Feature</th>
                  <th className="text-left p-6 text-white font-heading font-bold">ChatGPT</th>
                  <th className="text-left p-6 text-orange font-heading font-bold">OpenClaw</th>
                </tr>
              </thead>
              <tbody>
                {comparisonPoints.map((point, index) => (
                  <tr key={index} className="border-b border-white/[0.06] last:border-b-0">
                    <td className="p-6 text-white/80 font-medium">{point.aspect}</td>
                    <td className="p-6 text-white/60 text-sm">{point.chatgpt}</td>
                    <td className="p-6 text-orange text-sm">{point.openclaw}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="bg-surface py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Real-World OpenClaw Applications
            </h2>
            <p className="text-muted text-lg max-w-[600px] mx-auto">
              How businesses across industries are using OpenClaw to automate operations and drive growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCaseExamples.map((category) => (
              <div key={category.category} className="bg-white rounded-box p-8 shadow-card">
                <h3 className="font-heading font-bold text-xl text-dark mb-6">{category.category}</h3>
                <ul className="space-y-3">
                  {category.examples.map((example, index) => (
                    <li key={index} className="flex gap-3 items-start text-muted text-sm">
                      <span className="text-orange mt-0.5 flex-shrink-0">▸</span>
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Overview */}
      <section className="bg-white py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              How OpenClaw Works: Architecture Overview
            </h2>
            <p className="text-muted text-lg max-w-[600px] mx-auto">
              Understanding the key components that make OpenClaw so powerful and flexible.
            </p>
          </div>

          <div className="space-y-8">
            {architectureComponents.map((component, index) => (
              <div key={index} className="bg-surface rounded-box p-8 shadow-card">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-orange text-white font-bold text-lg w-8 h-8 rounded-full flex items-center justify-center text-sm">
                        {index + 1}
                      </div>
                      <h3 className="font-heading font-bold text-xl text-dark">{component.component}</h3>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark mb-2">What it does:</h4>
                    <p className="text-muted text-sm">{component.description}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark mb-2">Why it matters:</h4>
                    <p className="text-muted text-sm">{component.purpose}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Levels */}
      <section className="bg-light py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              OpenClaw Implementation Levels
            </h2>
            <p className="text-muted text-lg max-w-[600px] mx-auto">
              Different approaches to implementing OpenClaw based on your business size and complexity needs.
            </p>
          </div>

          <div className="space-y-6">
            {implementationLevels.map((level, index) => (
              <div key={index} className="bg-white rounded-box p-8 shadow-card">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-center">
                  <div>
                    <h3 className="font-heading font-bold text-xl text-dark mb-2">{level.level}</h3>
                    <span className="text-orange font-medium text-sm">{level.timeframe}</span>
                  </div>
                  <div className="lg:col-span-2">
                    <p className="text-muted leading-relaxed">{level.description}</p>
                  </div>
                  <div>
                    <p className="text-dark text-sm font-medium">{level.suitableFor}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-navy text-white py-24 relative overflow-hidden grain">
        <div className="absolute bottom-0 left-[20%] w-[500px] h-[500px] bg-orange/5 rounded-full blur-[120px]" />

        <div className="max-w-[800px] mx-auto px-6 relative z-10">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-white/60 text-lg">
              Common questions about OpenClaw capabilities, implementation, and business value.
            </p>
          </div>
          
          <div className="space-y-0">
            {[
              {
                q: "Is OpenClaw difficult to set up and use?",
                a: "OpenClaw setup requires technical expertise, but once configured, day-to-day use is simple — just natural conversation with your agents. Most businesses work with consultants for initial setup and training, then operate independently."
              },
              {
                q: "How much does OpenClaw cost to run?",
                a: "OpenClaw itself is open-source (free), but you pay for AI model usage (Anthropic, OpenAI, etc.) and hosting. Typical costs range from £100-500/month depending on usage. Most businesses see positive ROI within 1-2 months."
              },
              {
                q: "Can OpenClaw replace human employees?",
                a: "OpenClaw automates repetitive tasks and workflows, allowing humans to focus on strategic work. It augments teams rather than replacing them — most businesses see 20-40% productivity gains while keeping the same headcount."
              },
              {
                q: "Is OpenClaw secure for business data?",
                a: "Yes, OpenClaw runs on your infrastructure with your model keys. Your data never leaves your control. Proper security hardening is essential — most businesses work with experts to ensure secure deployment."
              },
              {
                q: "How does OpenClaw handle complex business processes?",
                a: "OpenClaw excels at complex workflows through multi-agent orchestration and custom skills. You can model virtually any business process as a series of agent interactions and automated steps."
              },
              {
                q: "What's the learning curve for business teams?",
                a: "Basic agent interaction is intuitive — if you can use WhatsApp, you can use OpenClaw. Advanced features like skill development require training, but most teams are productive within a few days of proper setup."
              }
            ].map((faq, i) => (
              <details key={i} className="group border-b border-white/[0.06]">
                <summary className="flex justify-between items-center py-5 cursor-pointer font-heading font-semibold text-white hover:text-orange transition-colors list-none [&::-webkit-details-marker]:hidden">
                  {faq.q}
                  <span className="text-orange text-xl ml-4 group-open:rotate-45 transition-transform duration-200 flex-shrink-0">
                    +
                  </span>
                </summary>
                <p className="text-white/60 text-sm leading-relaxed pb-5 pr-8">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="bg-white py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="bg-surface rounded-box p-12 text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-6">
              Ready to Explore OpenClaw for Your Business?
            </h2>
            <p className="text-muted text-lg leading-relaxed mb-8 max-w-[600px] mx-auto">
              Understanding OpenClaw is just the first step. The next is seeing how it can transform your specific business processes. Book a free consultation to explore your opportunities.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="text-center">
                <div className="text-2xl mb-3">📋</div>
                <h3 className="font-heading font-bold text-dark mb-2">Process Assessment</h3>
                <p className="text-muted text-sm">Identify automation opportunities in your current workflows</p>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-3">🎯</div>
                <h3 className="font-heading font-bold text-dark mb-2">Custom Demo</h3>
                <p className="text-muted text-sm">See OpenClaw in action with examples relevant to your industry</p>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-3">🗺️</div>
                <h3 className="font-heading font-bold text-dark mb-2">Implementation Plan</h3>
                <p className="text-muted text-sm">Get a clear roadmap and ROI projections for your business</p>
              </div>
            </div>
            
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-orange text-white px-10 py-4 rounded-btn font-bold text-lg hover:bg-orange-hover transition-all hover:-translate-y-0.5 shadow-xl"
            >
              Book Free OpenClaw Consultation →
            </a>
          </div>
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
                Get Started
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Explore OpenClaw for
                <br />
                <span className="text-orange">Your Business</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Free consultation to explore how OpenClaw could transform your specific business processes. No technical knowledge required — just bring your business challenges.
              </p>
              
              <div className="space-y-4 text-white/50 text-sm">
                <div className="flex gap-3 items-center">
                  <span className="text-orange">🔍</span>
                  <span>Identify your automation opportunities</span>
                </div>
                <div className="flex gap-3 items-center">
                  <span className="text-orange">💡</span>
                  <span>See OpenClaw in action with relevant examples</span>
                </div>
                <div className="flex gap-3 items-center">
                  <span className="text-orange">📊</span>
                  <span>Get ROI projections for your business</span>
                </div>
              </div>
            </div>

            <div className="bg-white/[0.03] border border-white/[0.06] rounded-box p-8">
              <h3 className="font-heading font-bold text-xl text-white mb-1">OpenClaw Consultation</h3>
              <p className="text-white/40 text-sm mb-6">Explore OpenClaw for your business needs</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}