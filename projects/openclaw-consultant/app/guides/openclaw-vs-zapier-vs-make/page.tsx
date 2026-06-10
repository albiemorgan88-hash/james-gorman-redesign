import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import GuideArticleJsonLd from "@/components/GuideArticleJsonLd";

const canonicalPath = "/guides/openclaw-vs-zapier-vs-make";
const pageTitle = "OpenClaw vs Zapier vs Make vs n8n: AI Agent or Workflow Automation?";
const pageDescription =
  "Compare OpenClaw, Zapier, Make, and n8n for business workflows: setup effort, AI fit, data control, integration patterns, costs to verify, and when each option makes sense.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "openclaw vs zapier",
    "openclaw vs make.com",
    "openclaw vs n8n alternative",
    "openclaw vs zapier make n8n",
    "automation platform comparison",
    "zapier alternatives",
    "make.com vs openclaw",
    "business automation tools",
    "workflow automation platforms",
    "ai automation comparison"
  ],
  alternates: { canonical: `https://openclawconsultant.co.uk${canonicalPath}` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: `https://openclawconsultant.co.uk${canonicalPath}`,
    type: "article",
  },
};

const platformComparison = [
  {
    feature: "Pricing Model",
    openclaw: {
      value: "Self-hosted or managed deployment costs",
      details: "Setup, hosting, model/API usage, maintenance, and support vary by scope",
      rating: 7
    },
    zapier: {
      value: "SaaS subscription per task/month",
      details: "Subscription pricing varies by plan, task volume, and features",
      rating: 6
    },
    make: {
      value: "SaaS subscription per operation",
      details: "Subscription pricing varies by operations, plan limits, and features",
      rating: 7
    }
  },
  {
    feature: "AI Capabilities",
    openclaw: {
      value: "AI agent runtime when configured",
      details: "Can use LLMs, tools, memory, and skills with governance controls",
      rating: 8
    },
    zapier: {
      value: "AI features via apps and connectors",
      details: "AI actions and assistants depend on available integrations and plan features",
      rating: 6
    },
    make: {
      value: "AI modules available",
      details: "AI modules and API calls can be added to visual workflows",
      rating: 6
    }
  },
  {
    feature: "Customisation",
    openclaw: {
      value: "Extensible code and skills",
      details: "Custom skills, APIs, files, and code-level workflows when maintained",
      rating: 8
    },
    zapier: {
      value: "Limited custom code",
      details: "Code steps available, webhook support, app limitations",
      rating: 4
    },
    make: {
      value: "Visual flow builder",
      details: "HTTP modules, JSON, some custom functions",
      rating: 6
    }
  },
  {
    feature: "Data Control",
    openclaw: {
      value: "Deployment control options",
      details: "Can run on controlled infrastructure, but model providers and connected tools need review",
      rating: 8
    },
    zapier: {
      value: "Data passes through Zapier",
      details: "US-based service, data handling concerns",
      rating: 4
    },
    make: {
      value: "EU data centres available",
      details: "Better for GDPR but still third-party processing",
      rating: 6
    }
  },
  {
    feature: "Learning Curve",
    openclaw: {
      value: "Technical setup required",
      details: "Command line knowledge helpful, agent concepts",
      rating: 4
    },
    zapier: {
      value: "User-friendly interface",
      details: "No-code approach, extensive templates",
      rating: 9
    },
    make: {
      value: "Visual workflow builder",
      details: "Drag-and-drop interface, moderate complexity",
      rating: 7
    }
  },
  {
    feature: "Integration Ecosystem",
    openclaw: {
      value: "API-first and skills-based",
      details: "Custom APIs, webhooks, files, and skills; fewer no-code templates out of the box",
      rating: 7
    },
    zapier: {
      value: "5,000+ pre-built apps",
      details: "Extensive app directory, easy connections",
      rating: 10
    },
    make: {
      value: "1,000+ apps and services",
      details: "Good coverage, HTTP modules for custom APIs",
      rating: 8
    }
  }
];

const useCaseComparison = [
  {
    useCase: "Small Business Task Automation",
    description: "Simple workflows like email notifications, form submissions, basic data sync",
    recommendation: "Zapier",
    reason: "Quickest to set up, extensive app integrations, perfect for standard business tools",
    bestFor: "Non-technical teams, immediate results needed"
  },
  {
    useCase: "Complex Multi-Step Workflows",
    description: "Advanced logic, conditional branching, data transformation, error handling",
    recommendation: "Make.com",
    reason: "Visual workflow builder with advanced features, good balance of power and usability",
    bestFor: "Technical users who want visual programming"
  },
  {
    useCase: "AI-Powered Business Processes",
    description: "Customer service automation, content generation, intelligent decision making",
    recommendation: "OpenClaw",
    reason: "Useful when memory, tool access, approvals, and agent reasoning all matter",
    bestFor: "Teams with a clear AI workflow and governance plan"
  },
  {
    useCase: "Enterprise Data Processing",
    description: "Large-scale data handling, custom business logic, regulatory compliance",
    recommendation: "OpenClaw",
    reason: "Can keep infrastructure, logs, and operating rules under closer control when designed carefully",
    bestFor: "Regulated industries, sensitive data processing"
  },
  {
    useCase: "Quick Prototyping",
    description: "Testing automation ideas, rapid workflow deployment, proof of concepts",
    recommendation: "Zapier",
    reason: "Fastest time to value, extensive templates, minimal technical barriers",
    bestFor: "Rapid experimentation, business validation"
  },
  {
    useCase: "Strategic AI Automation",
    description: "Workflows likely to need code-level extensibility, review loops, and changing tool access",
    recommendation: "OpenClaw",
    reason: "Less tied to a single SaaS task model, but it needs technical ownership and maintenance",
    bestFor: "Businesses ready to own an agent operating model"
  }
];

const atAGlance = [
  {
    value: "Zapier",
    label: "Fastest for simple app-to-app flows"
  },
  {
    value: "n8n",
    label: "Great for technical control"
  },
  {
    value: "OpenClaw",
    label: "Best when workflow needs memory, tools, channels, and approvals"
  }
];

const faqs = [
  {
    question: "Is OpenClaw a replacement for Zapier?",
    answer: "Sometimes, but not always. Simple app-to-app automations may still suit Zapier or Make perfectly well."
  },
  {
    question: "Is n8n more powerful than OpenClaw?",
    answer: "For some technical automation jobs, yes. For broader agent workflows with memory, messaging, and browser actions, OpenClaw is usually the better fit."
  },
  {
    question: "What is easiest for non-technical teams?",
    answer: "Usually Zapier, then Make for slightly richer branching."
  },
  {
    question: "Can these tools be combined?",
    answer: "Yes. Many businesses combine a lighter automation layer with a broader agent layer."
  },
  {
    question: "What is the biggest buying mistake?",
    answer: "Choosing by familiarity rather than by the actual shape of the workflow."
  },
  {
    question: "Who should look hardest at OpenClaw?",
    answer: "Businesses running cross-system operational workflows that need context, escalation, and flexible orchestration."
  }
];

const migrationScenarios = [
  {
    from: "Zapier",
    to: "OpenClaw",
    when: "Task limits exceeded, need AI capabilities, data security concerns",
    effort: "Moderate",
    timeline: "2-4 weeks",
    benefits: "Lower SaaS task dependence, agent workflows, stronger deployment control"
  },
  {
    from: "Make.com",
    to: "OpenClaw",
    when: "Complex logic requirements, custom integrations, regulatory compliance",
    effort: "Low-Moderate",
    timeline: "1-3 weeks",
    benefits: "Code-level customisation, AI agent workflows, self-hosted control"
  },
  {
    from: "Manual Processes",
    to: "OpenClaw",
    when: "Ready for AI automation, have technical resources, long-term thinking",
    effort: "Moderate-High",
    timeline: "3-6 weeks",
    benefits: "AI workflow design, clearer operating rules, controlled tool access"
  }
];

export default function OpenClawVsZapierVsMakePage() {
  return (
    <>
      <GuideArticleJsonLd canonicalPath={canonicalPath} title={pageTitle} description={pageDescription} faqs={faqs} />

      {/* Article Header */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-navy via-navy-light to-blue">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="max-w-[800px]">
            <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-xs font-semibold text-white/50">
              <a href="/" className="hover:text-white">Home</a>
              <span aria-hidden="true">/</span>
              <a href="/guides" className="hover:text-white">Guides</a>
              <span aria-hidden="true">/</span>
              <span className="text-white/70">OpenClaw vs Zapier vs Make vs n8n</span>
            </nav>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-orange rounded-full" />
              <span className="text-white/80 text-sm font-medium">Platform Comparison</span>
            </div>
            
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="text-orange">OpenClaw</span> vs <span className="text-orange">Zapier</span> vs <span className="text-orange">Make</span> vs <span className="text-orange">n8n</span>
            </h1>
            
            <p className="text-white/70 text-xl leading-relaxed mb-8">
              A practical comparison of agent-led automation and visual workflow platforms.
              Understand the strengths, limitations, and ideal use cases before choosing a platform.
            </p>
            
            <div className="flex flex-wrap gap-4 text-white/60 text-sm">
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                15 min read
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                </svg>
                Updated March 2026
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-16 bg-white">
        <div className="max-w-[800px] mx-auto px-6">
          
          {/* Introduction */}
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-xl text-muted-dark leading-relaxed mb-8">
              Choosing the right automation platform shapes cost, reliability, and operational risk. Zapier is strong for fast no-code workflows, Make.com is strong for visual workflow building, n8n suits technical teams that want more control and self-hosting flexibility, and OpenClaw is a more agentic, self-hostable option for teams that need memory, tool access, and custom skills.
            </p>
            
            <p className="text-muted-dark leading-relaxed mb-8">
              This guide compares the dimensions that matter to UK businesses: setup effort, capabilities, control, compliance work, maintenance, and long-term value. Use it as a decision framework, then verify current vendor pricing and product limits before committing.
            </p>
          </div>

          {/* Quick Decision Matrix */}
          <section className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy mb-8">Quick Decision Matrix</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-gradient-to-br from-blue/5 to-blue/10 rounded-xl p-6 border border-blue/20">
                <div className="text-center mb-4">
                  <h3 className="font-heading text-xl font-bold text-navy mb-2">Choose Zapier If:</h3>
                  <div className="w-12 h-12 bg-blue rounded-full mx-auto flex items-center justify-center">
                    <span className="text-white font-bold">Z</span>
                  </div>
                </div>
                <ul className="space-y-2 text-muted-dark text-sm">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-blue rounded-full mt-2 flex-shrink-0" />
                    You need immediate results with minimal setup
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-blue rounded-full mt-2 flex-shrink-0" />
                    Your team is non-technical
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-blue rounded-full mt-2 flex-shrink-0" />
                    You use popular SaaS tools extensively
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-blue rounded-full mt-2 flex-shrink-0" />
                    Automation needs are relatively simple
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-purple/5 to-purple/10 rounded-xl p-6 border border-purple/20">
                <div className="text-center mb-4">
                  <h3 className="font-heading text-xl font-bold text-navy mb-2">Choose Make.com If:</h3>
                  <div className="w-12 h-12 bg-purple rounded-full mx-auto flex items-center justify-center">
                    <span className="text-white font-bold">M</span>
                  </div>
                </div>
                <ul className="space-y-2 text-muted-dark text-sm">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-purple rounded-full mt-2 flex-shrink-0" />
                    You want visual workflow building
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-purple rounded-full mt-2 flex-shrink-0" />
                    Complex logic is required
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-purple rounded-full mt-2 flex-shrink-0" />
                    You need more control than Zapier
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-purple rounded-full mt-2 flex-shrink-0" />
                    Budget allows for higher operation costs
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-500/5 to-green-500/10 rounded-xl p-6 border border-green-500/20">
                <div className="text-center mb-4">
                  <h3 className="font-heading text-xl font-bold text-navy mb-2">Choose n8n If:</h3>
                  <div className="w-12 h-12 bg-green-600 rounded-full mx-auto flex items-center justify-center">
                    <span className="text-white font-bold">n</span>
                  </div>
                </div>
                <ul className="space-y-2 text-muted-dark text-sm">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0" />
                    Your team is technical and wants more control
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0" />
                    You want more customisation than Zapier or Make
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0" />
                    Self-hosting flexibility matters
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0" />
                    You do not mind a steeper operational setup
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-orange/5 to-orange/10 rounded-xl p-6 border border-orange/20">
                <div className="text-center mb-4">
                  <h3 className="font-heading text-xl font-bold text-navy mb-2">Choose OpenClaw If:</h3>
                  <div className="w-12 h-12 bg-orange rounded-full mx-auto flex items-center justify-center">
                    <span className="text-white font-bold">O</span>
                  </div>
                </div>
                <ul className="space-y-2 text-muted-dark text-sm">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-orange rounded-full mt-2 flex-shrink-0" />
                    AI automation is a strategic priority
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-orange rounded-full mt-2 flex-shrink-0" />
                    Data security and control are critical
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-orange rounded-full mt-2 flex-shrink-0" />
                    You need code-level customisation
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-orange rounded-full mt-2 flex-shrink-0" />
                    Long-term operating control matters
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Where n8n Fits In */}
          <section className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy mb-8">Where n8n Fits In</h2>

            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-muted-dark leading-relaxed mb-6">
                n8n suits technical teams that want more control, more customisation, and self-hosting flexibility. It rewards people who do not mind a steeper operational setup.
              </p>
              <p className="text-muted-dark leading-relaxed">
                If you want a quick form-to-CRM-to-email workflow, start with Zapier or Make. If your team is technical and wants more control or self-hosting, n8n may be the better traditional automation option. If the job needs context, memory, browser work, messaging, and approvals, look hard at OpenClaw.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {atAGlance.map((stat, i) => (
                <div key={i} className="bg-surface rounded-xl p-6 border border-border-light text-center">
                  <div className="text-2xl font-bold text-orange mb-2">{stat.value}</div>
                  <div className="text-muted-dark text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Detailed Feature Comparison */}
          <section className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy mb-8">Detailed Feature Comparison</h2>
            
            <div className="space-y-6">
              {platformComparison.map((comparison, i) => (
                <div key={i} className="bg-surface rounded-xl p-6 border border-border-light">
                  <h3 className="font-heading text-xl font-bold text-navy mb-6">{comparison.feature}</h3>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white rounded-lg p-4 border border-border-light">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold text-orange">OpenClaw</h4>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, j) => (
                            <svg key={j} className={`w-4 h-4 ${j < comparison.openclaw.rating / 2 ? 'text-orange' : 'text-slate-300'}`} fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                            </svg>
                          ))}
                        </div>
                      </div>
                      <div className="font-medium text-dark mb-2">{comparison.openclaw.value}</div>
                      <div className="text-muted-dark text-sm">{comparison.openclaw.details}</div>
                    </div>
                    
                    <div className="bg-white rounded-lg p-4 border border-border-light">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold text-blue">Zapier</h4>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, j) => (
                            <svg key={j} className={`w-4 h-4 ${j < comparison.zapier.rating / 2 ? 'text-blue' : 'text-slate-300'}`} fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                            </svg>
                          ))}
                        </div>
                      </div>
                      <div className="font-medium text-dark mb-2">{comparison.zapier.value}</div>
                      <div className="text-muted-dark text-sm">{comparison.zapier.details}</div>
                    </div>
                    
                    <div className="bg-white rounded-lg p-4 border border-border-light">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold text-purple">Make.com</h4>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, j) => (
                            <svg key={j} className={`w-4 h-4 ${j < comparison.make.rating / 2 ? 'text-purple' : 'text-slate-300'}`} fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                            </svg>
                          ))}
                        </div>
                      </div>
                      <div className="font-medium text-dark mb-2">{comparison.make.value}</div>
                      <div className="text-muted-dark text-sm">{comparison.make.details}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Use Case Scenarios */}
          <section className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy mb-8">Which Platform for Which Use Case?</h2>
            
            <div className="space-y-6">
              {useCaseComparison.map((useCase, i) => (
                <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-border-light">
                  <h3 className="font-heading text-xl font-bold text-navy mb-3">{useCase.useCase}</h3>
                  <p className="text-muted-dark mb-4">{useCase.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-sm font-medium text-muted">Recommended:</span>
                        <span className={`font-bold ${
                          useCase.recommendation === 'OpenClaw' ? 'text-orange' :
                          useCase.recommendation === 'Zapier' ? 'text-blue' : 'text-purple'
                        }`}>
                          {useCase.recommendation}
                        </span>
                      </div>
                      <p className="text-muted-dark text-sm mb-3">{useCase.reason}</p>
                      <div className="bg-surface rounded-lg p-3">
                        <span className="text-sm font-medium text-dark">Best for: </span>
                        <span className="text-muted-dark text-sm">{useCase.bestFor}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Cost Analysis */}
          <section className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy mb-8">Cost Factors to Model</h2>
            
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-8 border border-border-light">
              <h3 className="font-heading text-xl font-bold text-navy mb-6">Scenario: Medium UK Business with recurring automation needs</h3>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-6 border border-border-light">
                  <h4 className="font-semibold text-orange mb-4">OpenClaw</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-dark">Setup cost:</span>
                      <span className="font-medium">Scope-based</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-dark">Monthly running:</span>
                      <span className="font-medium">Hosting + models</span>
                    </div>
                    <div className="border-t border-border pt-3">
                      <div className="flex justify-between">
                        <span className="text-muted-dark">Hidden cost:</span>
                        <span className="font-bold text-orange">Maintenance</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-dark">Best modelled as:</span>
                        <span className="font-bold text-orange">Pilot + support</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-6 border border-border-light">
                  <h4 className="font-semibold text-blue mb-4">Zapier</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-dark">Setup cost:</span>
                      <span className="font-medium">£0</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-dark">Monthly subscription:</span>
                      <span className="font-medium">Plan-dependent</span>
                    </div>
                    <div className="border-t border-border pt-3">
                      <div className="flex justify-between">
                        <span className="text-muted-dark">Hidden cost:</span>
                        <span className="font-bold text-blue">Task volume</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-dark">Best modelled as:</span>
                        <span className="font-bold text-blue">Tasks/month</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-6 border border-border-light">
                  <h4 className="font-semibold text-purple mb-4">Make.com</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-dark">Setup cost:</span>
                      <span className="font-medium">£0</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-dark">Monthly subscription:</span>
                      <span className="font-medium">Plan-dependent</span>
                    </div>
                    <div className="border-t border-border pt-3">
                      <div className="flex justify-between">
                        <span className="text-muted-dark">Hidden cost:</span>
                        <span className="font-bold text-purple">Operations</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-dark">Best modelled as:</span>
                        <span className="font-bold text-purple">Ops/month</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-orange/10 rounded-lg border border-orange/20">
                <h4 className="font-semibold text-orange mb-2">Cost Analysis Summary:</h4>
                <ul className="space-y-1 text-dark text-sm">
                  <li>• OpenClaw cost depends on build scope, hosting, model usage, monitoring, and support</li>
                  <li>• Make.com can be strong when a visual workflow model fits the process</li>
                  <li>• Zapier is often fastest for simple integrations and should be priced against task volume</li>
                  <li>• OpenClaw needs maintenance budget; it is not a zero-cost scaling shortcut</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Migration Scenarios */}
          <section className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy mb-8">Migration Scenarios</h2>
            
            <div className="space-y-6">
              {migrationScenarios.map((migration, i) => (
                <div key={i} className="bg-surface rounded-xl p-6 border border-border-light">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <h3 className="font-heading text-lg font-bold text-navy">
                      {migration.from} → OpenClaw
                    </h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      migration.effort === 'Low' ? 'bg-green-100 text-green-800' :
                      migration.effort === 'Moderate' || migration.effort === 'Low-Moderate' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {migration.effort} effort
                    </span>
                    <span className="text-muted text-sm">{migration.timeline}</span>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-medium text-dark mb-2">When to Consider:</h4>
                      <p className="text-muted-dark text-sm">{migration.when}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-dark mb-2">Migration Benefits:</h4>
                      <p className="text-muted-dark text-sm">{migration.benefits}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-dark mb-2">Timeline:</h4>
                      <p className="text-muted-dark text-sm">Typical migration takes {migration.timeline} including testing and training</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* UK Compliance Considerations */}
          <section className="mb-16">
            <div className="bg-blue/5 border border-blue/20 rounded-xl p-6">
              <h3 className="font-heading text-xl font-bold text-navy mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-blue" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 1l2.98 6.05L22 8.64l-4.98 4.87L18.03 22 12 18.97 5.97 22 6.98 13.5 2 8.64l7.02-1.59L12 1z"/>
                </svg>
                UK Compliance & GDPR Considerations
              </h3>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-orange mb-2">OpenClaw</h4>
                  <ul className="space-y-1 text-muted-dark text-sm">
                    <li>• Controlled infrastructure options</li>
                    <li>• UK-hosted infrastructure option</li>
                    <li>• Audit trail design under your control</li>
                    <li>• Custom data handling controls when implemented</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-blue mb-2">Zapier</h4>
                  <ul className="space-y-1 text-muted-dark text-sm">
                    <li>• US-based, data crosses borders</li>
                    <li>• GDPR compliance claimed</li>
                    <li>• Limited data residency control</li>
                    <li>• Standard security practices</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-purple mb-2">Make.com</h4>
                  <ul className="space-y-1 text-muted-dark text-sm">
                    <li>• EU-based with UK data centres</li>
                    <li>• GDPR positioning should be checked against your plan and data flows</li>
                    <li>• Better than Zapier for UK data</li>
                    <li>• Third-party processing still required</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Decision Framework */}
          <section className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy mb-8">Making Your Decision</h2>
            
            <div className="bg-gradient-to-br from-orange/5 to-blue/5 rounded-xl p-8 border border-orange/10">
              <h3 className="font-heading text-xl font-bold text-navy mb-6">Key Questions to Ask:</h3>
              
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-dark mb-3">Technical Considerations</h4>
                    <ul className="space-y-2 text-muted-dark text-sm">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-orange rounded-full mt-2 flex-shrink-0" />
                        Do you need AI-powered automation?
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-orange rounded-full mt-2 flex-shrink-0" />
                        How complex are your workflow requirements?
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-orange rounded-full mt-2 flex-shrink-0" />
                        Do you have technical resources available?
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-orange rounded-full mt-2 flex-shrink-0" />
                        Are custom integrations required?
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-dark mb-3">Business Considerations</h4>
                    <ul className="space-y-2 text-muted-dark text-sm">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-blue rounded-full mt-2 flex-shrink-0" />
                        What's your expected automation volume?
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-blue rounded-full mt-2 flex-shrink-0" />
                        How critical is data sovereignty?
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-blue rounded-full mt-2 flex-shrink-0" />
                        What's your long-term automation strategy?
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-blue rounded-full mt-2 flex-shrink-0" />
                        How important is vendor independence?
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-6 border border-border-light">
                  <h4 className="font-semibold text-dark mb-3">Recommended Decision Process:</h4>
                  <ol className="space-y-2 text-muted-dark text-sm">
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-orange text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">1</span>
                      Start with a pilot project on your current platform or Zapier for quick wins
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-orange text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">2</span>
                      Evaluate whether you hit limitations (cost, complexity, AI needs)
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-orange text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">3</span>
                      If scaling or AI capabilities become important, trial OpenClaw
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-orange text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">4</span>
                      Make the switch when business case justifies the migration effort
                    </li>
                  </ol>
                </div>

                <div className="bg-white rounded-lg p-6 border border-border-light">
                  <h4 className="font-semibold text-dark mb-3">Consider a Hybrid Strategy</h4>
                  <p className="text-muted-dark text-sm">
                    You also do not need to be religious about one stack. Many businesses use a classic automation tool for lightweight plumbing and a broader agent layer for higher-value workflows. That can be a very sensible split. The main thing is to buy for workflow fit, not brand familiarity. Simpler is better when it works. Broader is better when the problem actually needs it.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Next Steps */}
          <section className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy mb-8">Next Steps: Getting Started</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-heading text-xl font-bold text-navy mb-4">Explore OpenClaw Further</h3>
                <div className="space-y-3">
                  <a href="/guides/openclaw-beginner-guide" className="block text-orange hover:text-orange-hover transition-colors font-medium">
                    → Complete OpenClaw Beginner's Guide
                  </a>
                  <a href="/guides/openclaw-roi-calculator-guide" className="block text-orange hover:text-orange-hover transition-colors font-medium">
                    → Calculate Your ROI with AI Automation
                  </a>
                  <a href="/guides/openclaw-vs-virtual-assistant-cost" className="block text-orange hover:text-orange-hover transition-colors font-medium">
                    → OpenClaw vs Virtual Assistant Cost Analysis
                  </a>
                  <a href="/guides/openclaw-enterprise-security-compliance" className="block text-orange hover:text-orange-hover transition-colors font-medium">
                    → Enterprise Security & Compliance Guide
                  </a>
                </div>
              </div>
              
              <div>
                <h3 className="font-heading text-xl font-bold text-navy mb-4">Get Practical Guidance</h3>
                <p className="text-muted-dark mb-4">
                  Choosing the right automation platform is a strategic decision. I can help you:
                </p>
                <ul className="space-y-2 text-muted-dark text-sm mb-4">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-orange rounded-full mt-2 flex-shrink-0" />
                    Assess your specific automation needs
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-orange rounded-full mt-2 flex-shrink-0" />
                    Create a migration plan if needed
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-orange rounded-full mt-2 flex-shrink-0" />
                    Implement and optimise your chosen solution
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy mb-8">Frequently Asked Questions</h2>

            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-surface rounded-xl p-6 border border-border-light">
                  <h3 className="font-heading text-lg font-bold text-navy mb-3">{faq.question}</h3>
                  <p className="text-muted-dark text-sm leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

        </div>
      </article>

      {/* CTA Section */}
      <section className="py-16 bg-navy">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
            Need Help Choosing the <span className="text-orange">Right Platform</span>?
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Get a free consultation to discuss your automation needs and receive personalised platform recommendations based on your specific requirements and budget.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-orange text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-orange-hover transition-all hover:-translate-y-0.5 shadow-glow-orange"
          >
            Get Platform Recommendation
          </a>
        </div>
      </section>

      {/* Contact Form */}
      
      {/* Related Guides */}
      <section className="py-16 bg-surface">
        <div className="max-w-[1140px] mx-auto px-6">
          <h2 className="font-heading text-2xl font-bold text-navy mb-8 text-center">Related Guides</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-[800px] mx-auto">
            <a href="/guides/openclaw-vs-chatgpt" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">OpenClaw vs ChatGPT: Key Differences</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/openclaw-vs-n8n" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">OpenClaw vs n8n: Which to Choose?</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/what-is-openclaw-2026" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">What is OpenClaw? Complete Guide 2026</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/openclaw-setup-mac" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">OpenClaw Setup Guide for Mac 2026</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-surface">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
              Get Your Custom Platform Analysis
            </h2>
            <p className="text-muted-dark text-lg">
              Book a free consultation to receive a detailed comparison tailored to your specific business needs.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
