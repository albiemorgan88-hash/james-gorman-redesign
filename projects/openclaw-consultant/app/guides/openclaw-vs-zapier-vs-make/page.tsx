import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "OpenClaw vs Zapier vs Make: Which Automation Platform is Right for Your Business?",
  description: "Complete comparison of OpenClaw, Zapier, and Make.com automation platforms. Features, pricing, capabilities, and use cases to help UK businesses choose the right solution.",
  keywords: [
    "openclaw vs zapier",
    "openclaw vs make.com",
    "automation platform comparison",
    "zapier alternatives",
    "make.com vs openclaw",
    "business automation tools",
    "workflow automation platforms",
    "ai automation comparison"
  ],
  alternates: { canonical: "https://openclawconsultant.co.uk/guides/openclaw-vs-zapier-vs-make" },
  openGraph: {
    title: "OpenClaw vs Zapier vs Make: Which Automation Platform is Right for Your Business?",
    description: "Detailed comparison of OpenClaw, Zapier, and Make.com. Find the perfect automation platform for your UK business needs.",
    url: "https://openclawconsultant.co.uk/guides/openclaw-vs-zapier-vs-make",
    type: "article",
  },
};

const platformComparison = [
  {
    feature: "Pricing Model",
    openclaw: {
      value: "Self-hosted, one-time setup cost",
      details: "£1,000-£3,000 setup, £50-£200/month running costs",
      rating: 9
    },
    zapier: {
      value: "SaaS subscription per task/month",
      details: "£19-£599/month depending on task volume",
      rating: 6
    },
    make: {
      value: "SaaS subscription per operation",
      details: "£9-£299/month based on operations used",
      rating: 7
    }
  },
  {
    feature: "AI Capabilities",
    openclaw: {
      value: "Native AI agent integration",
      details: "Built-in Claude, GPT, local models, custom reasoning",
      rating: 10
    },
    zapier: {
      value: "AI tools via integrations",
      details: "OpenAI, ChatGPT plugins, limited AI workflow",
      rating: 5
    },
    make: {
      value: "AI modules available",
      details: "OpenAI, Google AI modules, basic AI automation",
      rating: 6
    }
  },
  {
    feature: "Customisation",
    openclaw: {
      value: "Fully customisable code",
      details: "Custom skills, agents, unlimited logic, code access",
      rating: 10
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
      value: "Complete data ownership",
      details: "All data stays on your infrastructure, GDPR compliant",
      rating: 10
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
      value: "API-first, unlimited",
      details: "Any API, webhooks, custom integrations",
      rating: 8
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
    reason: "Native AI agent capabilities, custom reasoning, unlimited AI model integration",
    bestFor: "Businesses wanting true AI automation"
  },
  {
    useCase: "Enterprise Data Processing",
    description: "Large-scale data handling, custom business logic, regulatory compliance",
    recommendation: "OpenClaw",
    reason: "Complete control over data, unlimited customisation, self-hosted security",
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
    useCase: "Long-term Strategic Automation",
    description: "Scalable solutions, future-proof architecture, evolving business needs",
    recommendation: "OpenClaw",
    reason: "No vendor lock-in, unlimited scaling, adapt to any future requirements",
    bestFor: "Forward-thinking businesses, long-term planning"
  }
];

const migrationScenarios = [
  {
    from: "Zapier",
    to: "OpenClaw",
    when: "Task limits exceeded, need AI capabilities, data security concerns",
    effort: "Moderate",
    timeline: "2-4 weeks",
    benefits: "Cost savings at scale, AI integration, data control"
  },
  {
    from: "Make.com",
    to: "OpenClaw",
    when: "Complex logic requirements, custom integrations, regulatory compliance",
    effort: "Low-Moderate",
    timeline: "1-3 weeks",
    benefits: "Unlimited customisation, AI agents, self-hosted control"
  },
  {
    from: "Manual Processes",
    to: "OpenClaw",
    when: "Ready for AI automation, have technical resources, long-term thinking",
    effort: "Moderate-High",
    timeline: "3-6 weeks",
    benefits: "Future-proof solution, AI capabilities, complete control"
  }
];

export default function OpenClawVsZapierVsMakePage() {
  return (
    <>
      {/* Article Header */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-navy via-navy-light to-blue">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="max-w-[800px]">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-orange rounded-full" />
              <span className="text-white/80 text-sm font-medium">Platform Comparison</span>
            </div>
            
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="text-orange">OpenClaw</span> vs <span className="text-orange">Zapier</span> vs <span className="text-orange">Make</span>
            </h1>
            
            <p className="text-white/70 text-xl leading-relaxed mb-8">
              A comprehensive comparison of the three leading automation platforms. 
              Understand the strengths, limitations, and ideal use cases to choose the right solution for your business.
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
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              Choosing the right automation platform can make or break your digital transformation efforts. While Zapier dominates the no-code space and Make.com offers visual workflow building, OpenClaw represents the next generation of AI-native automation.
            </p>
            
            <p className="text-slate-600 leading-relaxed mb-8">
              This guide provides an honest comparison across key dimensions that matter to UK businesses: cost, capabilities, control, compliance, and long-term strategic value. By the end, you'll know exactly which platform fits your needs and budget.
            </p>
          </div>

          {/* Quick Decision Matrix */}
          <section className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy mb-8">Quick Decision Matrix</h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-br from-blue/5 to-blue/10 rounded-xl p-6 border border-blue/20">
                <div className="text-center mb-4">
                  <h3 className="font-heading text-xl font-bold text-navy mb-2">Choose Zapier If:</h3>
                  <div className="w-12 h-12 bg-blue rounded-full mx-auto flex items-center justify-center">
                    <span className="text-white font-bold">Z</span>
                  </div>
                </div>
                <ul className="space-y-2 text-slate-600 text-sm">
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
                <ul className="space-y-2 text-slate-600 text-sm">
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
              
              <div className="bg-gradient-to-br from-orange/5 to-orange/10 rounded-xl p-6 border border-orange/20">
                <div className="text-center mb-4">
                  <h3 className="font-heading text-xl font-bold text-navy mb-2">Choose OpenClaw If:</h3>
                  <div className="w-12 h-12 bg-orange rounded-full mx-auto flex items-center justify-center">
                    <span className="text-white font-bold">O</span>
                  </div>
                </div>
                <ul className="space-y-2 text-slate-600 text-sm">
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
                    You need unlimited customisation
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-orange rounded-full mt-2 flex-shrink-0" />
                    Long-term cost efficiency matters
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Detailed Feature Comparison */}
          <section className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy mb-8">Detailed Feature Comparison</h2>
            
            <div className="space-y-6">
              {platformComparison.map((comparison, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                  <h3 className="font-heading text-xl font-bold text-navy mb-6">{comparison.feature}</h3>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white rounded-lg p-4 border border-slate-200">
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
                      <div className="font-medium text-slate-800 mb-2">{comparison.openclaw.value}</div>
                      <div className="text-slate-600 text-sm">{comparison.openclaw.details}</div>
                    </div>
                    
                    <div className="bg-white rounded-lg p-4 border border-slate-200">
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
                      <div className="font-medium text-slate-800 mb-2">{comparison.zapier.value}</div>
                      <div className="text-slate-600 text-sm">{comparison.zapier.details}</div>
                    </div>
                    
                    <div className="bg-white rounded-lg p-4 border border-slate-200">
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
                      <div className="font-medium text-slate-800 mb-2">{comparison.make.value}</div>
                      <div className="text-slate-600 text-sm">{comparison.make.details}</div>
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
                <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                  <h3 className="font-heading text-xl font-bold text-navy mb-3">{useCase.useCase}</h3>
                  <p className="text-slate-600 mb-4">{useCase.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-sm font-medium text-slate-500">Recommended:</span>
                        <span className={`font-bold ${
                          useCase.recommendation === 'OpenClaw' ? 'text-orange' :
                          useCase.recommendation === 'Zapier' ? 'text-blue' : 'text-purple'
                        }`}>
                          {useCase.recommendation}
                        </span>
                      </div>
                      <p className="text-slate-600 text-sm mb-3">{useCase.reason}</p>
                      <div className="bg-slate-50 rounded-lg p-3">
                        <span className="text-sm font-medium text-slate-700">Best for: </span>
                        <span className="text-slate-600 text-sm">{useCase.bestFor}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Cost Analysis */}
          <section className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy mb-8">Real-World Cost Analysis</h2>
            
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-8 border border-slate-200">
              <h3 className="font-heading text-xl font-bold text-navy mb-6">Scenario: Medium UK Business (100 automated tasks/day)</h3>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-6 border border-slate-200">
                  <h4 className="font-semibold text-orange mb-4">OpenClaw</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Setup cost:</span>
                      <span className="font-medium">£2,500</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Monthly running:</span>
                      <span className="font-medium">£150</span>
                    </div>
                    <div className="border-t border-slate-200 pt-3">
                      <div className="flex justify-between">
                        <span className="text-slate-600">Year 1 total:</span>
                        <span className="font-bold text-orange">£4,300</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Year 2+ annual:</span>
                        <span className="font-bold text-orange">£1,800</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-6 border border-slate-200">
                  <h4 className="font-semibold text-blue mb-4">Zapier</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Setup cost:</span>
                      <span className="font-medium">£0</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Monthly subscription:</span>
                      <span className="font-medium">£299</span>
                    </div>
                    <div className="border-t border-slate-200 pt-3">
                      <div className="flex justify-between">
                        <span className="text-slate-600">Year 1 total:</span>
                        <span className="font-bold text-blue">£3,588</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Year 2+ annual:</span>
                        <span className="font-bold text-blue">£3,588</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-6 border border-slate-200">
                  <h4 className="font-semibold text-purple mb-4">Make.com</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Setup cost:</span>
                      <span className="font-medium">£0</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Monthly subscription:</span>
                      <span className="font-medium">£179</span>
                    </div>
                    <div className="border-t border-slate-200 pt-3">
                      <div className="flex justify-between">
                        <span className="text-slate-600">Year 1 total:</span>
                        <span className="font-bold text-purple">£2,148</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Year 2+ annual:</span>
                        <span className="font-bold text-purple">£2,148</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-orange/10 rounded-lg border border-orange/20">
                <h4 className="font-semibold text-orange mb-2">Cost Analysis Summary:</h4>
                <ul className="space-y-1 text-slate-700 text-sm">
                  <li>• OpenClaw becomes most cost-effective after 18 months</li>
                  <li>• Make.com offers best short-term value for complex workflows</li>
                  <li>• Zapier competitive for simple integrations but expensive at scale</li>
                  <li>• OpenClaw provides unlimited scaling without additional costs</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Migration Scenarios */}
          <section className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-navy mb-8">Migration Scenarios</h2>
            
            <div className="space-y-6">
              {migrationScenarios.map((migration, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-6 border border-slate-100">
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
                    <span className="text-slate-500 text-sm">{migration.timeline}</span>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-medium text-slate-700 mb-2">When to Consider:</h4>
                      <p className="text-slate-600 text-sm">{migration.when}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-700 mb-2">Migration Benefits:</h4>
                      <p className="text-slate-600 text-sm">{migration.benefits}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-700 mb-2">Timeline:</h4>
                      <p className="text-slate-600 text-sm">Typical migration takes {migration.timeline} including testing and training</p>
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
                  <ul className="space-y-1 text-slate-600 text-sm">
                    <li>• Complete data sovereignty</li>
                    <li>• UK-hosted infrastructure option</li>
                    <li>• Full audit trail control</li>
                    <li>• Custom GDPR compliance features</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-blue mb-2">Zapier</h4>
                  <ul className="space-y-1 text-slate-600 text-sm">
                    <li>• US-based, data crosses borders</li>
                    <li>• GDPR compliance claimed</li>
                    <li>• Limited data residency control</li>
                    <li>• Standard security practices</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-purple mb-2">Make.com</h4>
                  <ul className="space-y-1 text-slate-600 text-sm">
                    <li>• EU-based with UK data centres</li>
                    <li>• Strong GDPR compliance</li>
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
                    <h4 className="font-semibold text-slate-800 mb-3">Technical Considerations</h4>
                    <ul className="space-y-2 text-slate-600 text-sm">
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
                    <h4 className="font-semibold text-slate-800 mb-3">Business Considerations</h4>
                    <ul className="space-y-2 text-slate-600 text-sm">
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
                
                <div className="bg-white rounded-lg p-6 border border-slate-200">
                  <h4 className="font-semibold text-slate-800 mb-3">Recommended Decision Process:</h4>
                  <ol className="space-y-2 text-slate-600 text-sm">
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
                  <a href="/guides/ai-automation-roi-calculator" className="block text-orange hover:text-orange-hover transition-colors font-medium">
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
                <h3 className="font-heading text-xl font-bold text-navy mb-4">Get Expert Guidance</h3>
                <p className="text-slate-600 mb-4">
                  Choosing the right automation platform is a strategic decision. I can help you:
                </p>
                <ul className="space-y-2 text-slate-600 text-sm mb-4">
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
            className="inline-flex items-center justify-center bg-orange text-white px-8 py-4 rounded-btn font-semibold text-base hover:bg-orange-hover transition-all hover:-translate-y-0.5 shadow-glow-orange"
          >
            Get Platform Recommendation
          </a>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 bg-slate-50">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
              Get Your Custom Platform Analysis
            </h2>
            <p className="text-slate-600 text-lg">
              Book a free consultation to receive a detailed comparison tailored to your specific business needs.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}