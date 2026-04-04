import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Set Up an AI Agent for Your Business",
  description: "Complete step-by-step guide to setting up AI agents for your business. Learn planning, implementation, tool integration, and optimization strategies for business AI automation.",
  keywords: [
    "how to setup ai agent",
    "ai agent for business",
    "business ai setup guide", 
    "ai automation setup",
    "openclaw business setup",
    "ai agent implementation",
    "business ai strategy",
    "ai agent deployment"
  ],
  alternates: { canonical: "https://openclawconsultant.co.uk/guides/setup-ai-agent-business" },
  openGraph: {
    title: "Set Up an AI Agent for Your Business",
    description: "Complete step-by-step guide to setting up AI agents for your business. Learn planning, implementation, and optimization strategies.",
    url: "https://openclawconsultant.co.uk/guides/setup-ai-agent-business",
    type: "article",
  },
};

const setupSteps = [
  {
    step: 1,
    title: "Business Process Audit",
    desc: "Identify which processes can be automated and will deliver the highest ROI.",
    timeframe: "1-2 days",
    actions: [
      "List all repetitive tasks your team performs weekly",
      "Calculate time spent on each task", 
      "Identify tasks with clear inputs/outputs",
      "Prioritize by time savings potential"
    ]
  },
  {
    step: 2,
    title: "Choose Your AI Platform",
    desc: "Select between OpenClaw, custom solutions, or SaaS tools based on your needs.",
    timeframe: "2-3 days",
    actions: [
      "Evaluate technical requirements and constraints",
      "Compare OpenClaw vs alternatives",
      "Consider data privacy and security needs",
      "Assess internal technical capabilities"
    ]
  },
  {
    step: 3,
    title: "Technical Infrastructure",
    desc: "Set up the hosting, security, and integration framework for your agents.",
    timeframe: "3-5 days",
    actions: [
      "Choose hosting solution (cloud vs local)",
      "Configure security and access controls",
      "Set up model API keys and routing",
      "Establish monitoring and logging"
    ]
  },
  {
    step: 4,
    title: "Agent Development",
    desc: "Build your first automation workflows and integrate with business tools.",
    timeframe: "1-2 weeks",
    actions: [
      "Start with highest-impact automation",
      "Connect to essential business tools",
      "Build and test workflow logic",
      "Implement error handling and recovery"
    ]
  },
  {
    step: 5,
    title: "Team Training",
    desc: "Get your team comfortable with interacting and managing AI agents.",
    timeframe: "2-3 days",
    actions: [
      "Train team on agent communication",
      "Establish best practices and guidelines",
      "Create documentation and processes",
      "Set up feedback and improvement loops"
    ]
  },
  {
    step: 6,
    title: "Optimization & Scaling",
    desc: "Monitor performance, optimize workflows, and expand automation coverage.",
    timeframe: "Ongoing",
    actions: [
      "Track automation performance and ROI",
      "Identify additional automation opportunities",
      "Optimize agent responses and efficiency",
      "Scale to additional departments/processes"
    ]
  }
];

const platformComparison = [
  {
    solution: "OpenClaw",
    bestFor: "Businesses wanting maximum control and customization",
    pros: ["Unlimited customization", "Data stays on your infrastructure", "No vendor lock-in", "Lower long-term costs"],
    cons: ["Requires technical setup", "Higher initial complexity", "Self-managed"],
    cost: "£750-2,500 setup + hosting + model costs"
  },
  {
    solution: "Zapier + AI",
    bestFor: "Simple automations without complex logic", 
    pros: ["Easy to set up", "No coding required", "Many integrations", "Quick to implement"],
    cons: ["Limited AI capabilities", "Monthly subscription costs", "Vendor lock-in", "Limited customization"],
    cost: "£20-100/month ongoing"
  },
  {
    solution: "Custom Development",
    bestFor: "Unique requirements with large development budgets",
    pros: ["Perfectly tailored", "Full control", "No dependencies", "Scalable architecture"],
    cons: ["Very expensive", "Long development time", "Ongoing maintenance", "Technical complexity"],
    cost: "£50,000-200,000+ development"
  }
];

const integrationAreas = [
  {
    category: "Communication",
    tools: ["Slack", "Microsoft Teams", "Email", "WhatsApp Business", "Discord"],
    benefits: "Agents can send notifications, respond to queries, and manage team communications"
  },
  {
    category: "Customer Management",
    tools: ["HubSpot", "Salesforce", "Pipedrive", "Airtable", "Monday.com"],
    benefits: "Automated lead scoring, contact updates, and customer journey management"
  },
  {
    category: "Financial Systems",
    tools: ["Xero", "QuickBooks", "Stripe", "PayPal", "FreeAgent"],
    benefits: "Automated invoice processing, expense categorization, and financial reporting"
  },
  {
    category: "Marketing Tools",
    tools: ["Google Analytics", "Facebook Ads", "Mailchimp", "Buffer", "Ahrefs"],
    benefits: "Campaign optimization, content creation, and performance monitoring"
  },
  {
    category: "Development Tools", 
    tools: ["GitHub", "Jira", "Vercel", "Docker", "AWS"],
    benefits: "Automated deployments, code reviews, and infrastructure management"
  }
];

const commonMistakes = [
  {
    mistake: "Starting Too Big",
    description: "Trying to automate everything at once instead of starting with one high-impact process",
    solution: "Begin with a single workflow that saves 5+ hours per week. Master it, then expand."
  },
  {
    mistake: "Ignoring Change Management",
    description: "Implementing agents without preparing the team for new workflows and responsibilities",
    solution: "Involve your team in planning, provide training, and start with assistive rather than replacement automation."
  },
  {
    mistake: "Poor Process Documentation",
    description: "Trying to automate processes that aren't well-defined or documented",
    solution: "Document current workflows clearly before automation. If humans can't follow it consistently, neither can agents."
  },
  {
    mistake: "Security Afterthought",
    description: "Focusing on functionality first and security later, creating vulnerabilities",
    solution: "Plan security from the start. Use proper authentication, encryption, and access controls."
  },
  {
    mistake: "No Success Metrics",
    description: "Implementing automation without clear ways to measure success and ROI",
    solution: "Define specific metrics before starting: time saved, errors reduced, revenue increased."
  }
];

export default function SetupAIAgentBusinessPage() {
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
              <span className="text-white/60 text-sm font-medium">Business AI Setup Guide 2026</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl md:text-[3.2rem] font-extrabold text-white mb-6 leading-[1.05] tracking-tight">
              How to Set Up an
              <br />
              <span className="text-orange">AI Agent for Business</span>
            </h1>

            <p className="text-white/60 text-lg md:text-xl max-w-[540px] mb-10 leading-relaxed">
              Complete step-by-step guide to implementing AI agents in your business. From planning to deployment to optimization.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#guide"
                className="inline-flex items-center justify-center bg-orange text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-orange-hover transition-all hover:-translate-y-0.5 shadow-glow-orange"
              >
                Read Setup Guide
              </a>
              <a
                href="/"
                className="inline-flex items-center justify-center bg-white/5 text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-white/10 transition-all border border-white/10"
              >
                ← Back to Home
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#fafbfc] to-transparent" />
      </section>

      {/* Overview */}
      <section id="guide" className="bg-light py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="max-w-[800px] mx-auto mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-8">
              The Complete AI Agent Setup Process
            </h2>
            <div className="prose prose-lg max-w-none text-muted leading-relaxed space-y-6">
              <p>
                Setting up AI agents for your business isn't just about installing software — it's about transforming how your team works. This guide walks you through the entire process, from initial planning to ongoing optimization.
              </p>
              <p>
                The key to successful AI agent implementation is starting small, thinking strategically, and focusing on processes that deliver immediate value. Don't try to automate everything at once — begin with one high-impact workflow and expand from there.
              </p>
            </div>
          </div>

          {/* Step-by-step guide */}
          <div className="space-y-8">
            {setupSteps.map((step) => (
              <div key={step.step} className="bg-white rounded-2xl p-8 shadow-card">
                <div className="flex gap-6 items-start">
                  <div className="bg-orange text-white font-bold text-lg w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <h3 className="font-heading font-bold text-xl text-dark">{step.title}</h3>
                      <span className="text-orange font-medium text-sm">{step.timeframe}</span>
                    </div>
                    <p className="text-muted leading-relaxed mb-6">{step.desc}</p>
                    <div>
                      <h4 className="font-semibold text-dark mb-3">Key Actions:</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {step.actions.map((action, i) => (
                          <li key={i} className="flex gap-2 items-start text-sm text-muted-dark">
                            <span className="text-orange mt-0.5 flex-shrink-0">•</span>
                            {action}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Comparison */}
      <section className="bg-white py-28">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Choosing the Right AI Platform
            </h2>
            <p className="text-muted text-lg max-w-[600px] mx-auto">
              Three main approaches to implementing AI agents, each with different trade-offs in complexity, cost, and capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {platformComparison.map((platform) => (
              <div key={platform.solution} className="bg-surface rounded-2xl p-8 card-lift">
                <h3 className="font-heading font-bold text-xl text-dark mb-3">{platform.solution}</h3>
                <p className="text-blue text-sm font-medium mb-6">{platform.bestFor}</p>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-dark mb-3">Advantages:</h4>
                    <ul className="space-y-2">
                      {platform.pros.map((pro, i) => (
                        <li key={i} className="flex gap-2 items-start text-sm text-green-600">
                          <span className="flex-shrink-0">✓</span>
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-dark mb-3">Disadvantages:</h4>
                    <ul className="space-y-2">
                      {platform.cons.map((con, i) => (
                        <li key={i} className="flex gap-2 items-start text-sm text-red-500">
                          <span className="flex-shrink-0">✗</span>
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="border-t pt-4">
                    <h4 className="font-semibold text-dark mb-2">Typical Cost:</h4>
                    <p className="text-orange font-medium text-sm">{platform.cost}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Areas */}
      <section className="bg-navy text-white py-24 relative overflow-hidden grain">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue/5 rounded-full blur-[150px]" />

        <div className="max-w-[1140px] mx-auto px-6 relative z-10">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Essential Business Tool Integrations
            </h2>
            <p className="text-white/60 text-lg max-w-[600px] mx-auto">
              The most valuable tool integrations for business AI agents across different operational areas.
            </p>
          </div>

          <div className="space-y-8">
            {integrationAreas.map((area) => (
              <div key={area.category} className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8">
                <h3 className="font-heading font-bold text-xl text-white mb-3">{area.category}</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-white/80 font-semibold text-sm mb-3">Common Tools:</h4>
                    <div className="flex flex-wrap gap-2">
                      {area.tools.map((tool) => (
                        <span
                          key={tool}
                          className="text-xs px-3 py-1 rounded bg-white/10 text-white/70"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white/80 font-semibold text-sm mb-3">Benefits:</h4>
                    <p className="text-white/60 text-sm">{area.benefits}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="bg-surface py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              5 Common AI Agent Setup Mistakes
            </h2>
            <p className="text-muted text-lg max-w-[600px] mx-auto">
              Learn from others' mistakes. These are the most common pitfalls businesses encounter when implementing AI agents.
            </p>
          </div>

          <div className="space-y-6">
            {commonMistakes.map((mistake, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-card">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-red-500 text-white font-bold text-lg w-8 h-8 rounded-full flex items-center justify-center text-sm">
                        {index + 1}
                      </div>
                      <h3 className="font-heading font-bold text-lg text-dark">{mistake.mistake}</h3>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark mb-2">The Problem:</h4>
                    <p className="text-muted text-sm">{mistake.description}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark mb-2">The Solution:</h4>
                    <p className="text-green-600 text-sm font-medium">{mistake.solution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-28">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark">
              AI Agent Setup Questions
            </h2>
          </div>
          
          <div className="space-y-0">
            {[
              {
                q: "How long does it take to set up business AI agents?",
                a: "A basic setup can be operational in 1-2 weeks. More complex multi-agent systems take 4-6 weeks. The key is starting with one high-impact automation and expanding gradually rather than trying to automate everything at once."
              },
              {
                q: "Do I need technical knowledge to set up AI agents?",
                a: "For OpenClaw and similar platforms, yes — either internal technical capability or external consultants. For simpler tools like Zapier + AI, basic technical understanding is sufficient. Consider your team's skills when choosing a platform."
              },
              {
                q: "What's the typical ROI timeline for AI agents?",
                a: "Most businesses see positive ROI within 2-4 months through time savings alone. The key is focusing on automations that save significant weekly hours (10+ hours) rather than minor conveniences."
              },
              {
                q: "How do I choose which processes to automate first?",
                a: "Look for processes that are: repetitive (done weekly/daily), time-consuming (5+ hours per week), rule-based (clear inputs/outputs), and currently manual. Start with the highest time-savings potential."
              },
              {
                q: "What security considerations are important for business AI agents?",
                a: "Key considerations: data encryption, access controls, API key management, regular security audits, compliance with regulations (GDPR, etc.), and having incident response procedures. Don't compromise on security for convenience."
              },
              {
                q: "Can AI agents integrate with our existing business tools?",
                a: "Most modern business tools have APIs that allow integration. Popular tools like CRM systems, email platforms, accounting software, and marketing tools are well-supported. Legacy systems may require additional work or API development."
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
            Ready to Set Up AI Agents for Your Business?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-[600px] mx-auto">
            Skip the learning curve and common mistakes. Get expert help to implement AI agents that deliver immediate ROI for your business.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-navy text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-dark transition-all hover:-translate-y-0.5 shadow-xl"
          >
            Get Expert Setup Help →
          </a>
        </div>
      </section>

      {/* Contact Section */}
      
      {/* Related Guides */}
      <section className="py-16 bg-surface">
        <div className="max-w-[1140px] mx-auto px-6">
          <h2 className="font-heading text-2xl font-bold text-navy mb-8 text-center">Related Guides</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-[800px] mx-auto">
            <a href="/guides/what-is-openclaw-2026" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">What is OpenClaw? Complete Guide 2026</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/openclaw-beginner-guide" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">OpenClaw Beginner Guide 2026</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/openclaw-setup-mac" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">OpenClaw Setup Guide for Mac 2026</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/openclaw-skills-guide" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">OpenClaw Skills: Complete Guide</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-navy text-white py-24 relative overflow-hidden grain">
        <div className="absolute bottom-0 left-[20%] w-[500px] h-[500px] bg-orange/5 rounded-full blur-[120px]" />
        <div className="absolute top-0 right-[10%] w-[400px] h-[400px] bg-blue/5 rounded-full blur-[100px]" />

        <div className="max-w-[1140px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-orange font-heading font-semibold text-sm uppercase tracking-widest mb-4">
                Expert Setup
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Get Professional AI Agent
                <br />
                <span className="text-orange">Setup for Your Business</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Free consultation to assess your business processes, recommend the right approach, and create a clear implementation plan. No obligation — just expert advice.
              </p>
              
              <div className="space-y-4 text-white/50 text-sm">
                <div className="flex gap-3 items-center">
                  <span className="text-orange">📋</span>
                  <span>Process audit and automation opportunity mapping</span>
                </div>
                <div className="flex gap-3 items-center">
                  <span className="text-orange">🎯</span>
                  <span>Platform recommendation based on your needs</span>
                </div>
                <div className="flex gap-3 items-center">
                  <span className="text-orange">📊</span>
                  <span>ROI projections and implementation timeline</span>
                </div>
              </div>
            </div>

            <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8">
              <h3 className="font-heading font-bold text-xl text-white mb-1">AI Agent Setup Consultation</h3>
              <p className="text-white/40 text-sm mb-6">Tell us about your business automation needs</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}