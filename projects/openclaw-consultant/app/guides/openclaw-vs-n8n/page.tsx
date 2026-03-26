import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "OpenClaw vs n8n — Which AI Automation Tool Should You Use? (2026)",
  description: "Detailed comparison between OpenClaw and n8n for automation. Compare features, pricing, use cases, and capabilities to choose the right tool for your needs.",
  keywords: [
    "openclaw vs n8n",
    "openclaw n8n comparison",
    "ai automation tools comparison",
    "openclaw or n8n",
    "workflow automation comparison",
    "openclaw vs workflow tools",
    "automation platform comparison",
    "openclaw n8n difference"
  ],
  alternates: { canonical: "https://openclawconsultant.co.uk/guides/openclaw-vs-n8n" },
  openGraph: {
    title: "OpenClaw vs n8n — Which AI Automation Tool Should You Use? (2026)",
    description: "Comprehensive comparison between OpenClaw and n8n. Features, pricing, use cases and recommendations.",
    url: "https://openclawconsultant.co.uk/guides/openclaw-vs-n8n",
    type: "article",
  },
};

const quickComparison = [
  {
    aspect: "Primary Focus",
    openclaw: "AI-first agent orchestration",
    n8n: "Visual workflow automation"
  },
  {
    aspect: "User Interface",
    openclaw: "CLI and code-based configuration", 
    n8n: "Visual drag-and-drop editor"
  },
  {
    aspect: "AI Integration",
    openclaw: "Native AI agents with LLM integration",
    n8n: "AI nodes for specific tasks"
  },
  {
    aspect: "Learning Curve",
    openclaw: "Steeper - requires technical knowledge",
    n8n: "Gentle - visual interface friendly"
  },
  {
    aspect: "Hosting",
    openclaw: "Self-hosted (local/server)",
    n8n: "Self-hosted or cloud options"
  },
  {
    aspect: "Pricing",
    openclaw: "Open source - free to use",
    n8n: "Free tier + paid plans from $20/month"
  }
];

const detailedComparison = [
  {
    category: "Core Architecture",
    openclaw: {
      strengths: [
        "Agent-based architecture with persistent memory",
        "Native LLM integration (Claude, GPT, etc.)",
        "Multi-agent orchestration capabilities",
        "Skills-based extensibility system"
      ],
      weaknesses: [
        "Requires technical setup and configuration",
        "Limited visual interface options",
        "Newer ecosystem with fewer integrations"
      ]
    },
    n8n: {
      strengths: [
        "Mature workflow engine with extensive node library",
        "Visual workflow designer with drag-drop interface",
        "Strong community and marketplace",
        "Enterprise-grade security and compliance"
      ],
      weaknesses: [
        "AI capabilities limited to specific nodes",
        "No persistent agent memory",
        "Complex workflows can become hard to manage"
      ]
    }
  },
  {
    category: "AI & Intelligence",
    openclaw: {
      strengths: [
        "Conversational AI agents with context awareness",
        "Dynamic decision making and problem solving",
        "Natural language interaction capabilities",
        "Adaptive learning and skill acquisition"
      ],
      weaknesses: [
        "Requires API keys for premium LLMs",
        "AI responses can be unpredictable",
        "Higher computational resource requirements"
      ]
    },
    n8n: {
      strengths: [
        "Specific AI nodes for common tasks",
        "Integration with popular AI services",
        "Predictable, rule-based automation",
        "Good for structured AI workflows"
      ],
      weaknesses: [
        "No conversational AI capabilities",
        "Limited natural language processing",
        "AI features are add-ons, not core"
      ]
    }
  },
  {
    category: "Ease of Use",
    openclaw: {
      strengths: [
        "Powerful for technical users",
        "Flexible configuration options",
        "Strong CLI and scripting support",
        "Good for complex agent behaviors"
      ],
      weaknesses: [
        "Steep learning curve for non-technical users",
        "Requires command line familiarity",
        "Limited graphical interface"
      ]
    },
    n8n: {
      strengths: [
        "Intuitive visual workflow editor",
        "No coding required for basic workflows",
        "Extensive templates and examples",
        "User-friendly for business users"
      ],
      weaknesses: [
        "Complex logic requires workarounds",
        "Visual workflows can become cluttered",
        "Limited flexibility compared to code"
      ]
    }
  },
  {
    category: "Integration Ecosystem",
    openclaw: {
      strengths: [
        "Growing skills marketplace",
        "Custom skill development capability",
        "Native integration with AI models",
        "Strong developer community"
      ],
      weaknesses: [
        "Smaller ecosystem compared to n8n",
        "Fewer pre-built integrations",
        "More manual setup required"
      ]
    },
    n8n: {
      strengths: [
        "500+ built-in integrations",
        "Active community contributions",
        "Regular new node additions",
        "Enterprise connectors available"
      ],
      weaknesses: [
        "Some integrations require paid plans",
        "Custom nodes need development skills",
        "Limited AI-specific integrations"
      ]
    }
  }
];

const useCaseComparison = [
  {
    useCase: "Business Process Automation",
    openclaw: {
      suitability: "Good",
      description: "Excellent for processes requiring AI decision-making",
      example: "Customer support with intelligent routing and response generation",
      recommendation: "Choose if you need adaptive, intelligent automation"
    },
    n8n: {
      suitability: "Excellent", 
      description: "Perfect for structured, predictable business workflows",
      example: "Order processing, invoice generation, data synchronization",
      recommendation: "Choose for traditional business process automation"
    }
  },
  {
    useCase: "Customer Support Automation",
    openclaw: {
      suitability: "Excellent",
      description: "AI agents can handle complex customer inquiries naturally",
      example: "Conversational support bot with context awareness",
      recommendation: "Ideal for sophisticated customer interactions"
    },
    n8n: {
      suitability: "Good",
      description: "Good for ticket routing and structured support flows",
      example: "Ticket classification and routing to appropriate teams",
      recommendation: "Better for backend support process automation"
    }
  },
  {
    useCase: "Content Creation & Marketing",
    openclaw: {
      suitability: "Excellent",
      description: "AI agents can generate and optimize content dynamically",
      example: "Blog writing, social media posting with AI-generated content",
      recommendation: "Perfect for AI-driven content strategies"
    },
    n8n: {
      suitability: "Fair",
      description: "Good for content distribution and scheduling",
      example: "Publishing content across platforms, social media scheduling", 
      recommendation: "Choose for content workflow automation"
    }
  },
  {
    useCase: "Data Integration & Reporting",
    openclaw: {
      suitability: "Good",
      description: "Can provide intelligent insights and automated analysis",
      example: "AI-powered data analysis with natural language reporting",
      recommendation: "Use when you need intelligent data interpretation"
    },
    n8n: {
      suitability: "Excellent",
      description: "Excellent for traditional data ETL and reporting workflows",
      example: "Database synchronization, automated report generation",
      recommendation: "Ideal for structured data integration tasks"
    }
  }
];

const pricingComparison = [
  {
    tier: "Free/Open Source",
    openclaw: {
      features: ["Full OpenClaw platform", "Unlimited agents", "Self-hosted deployment", "Community support"],
      limitations: ["Requires own LLM API keys", "Self-hosted only", "No official support"],
      cost: "Free"
    },
    n8n: {
      features: ["Up to 5 workflows", "Community support", "Self-hosted option"],
      limitations: ["Limited executions", "No cloud option", "Basic features only"],
      cost: "Free"
    }
  },
  {
    tier: "Starter/Small Business",
    openclaw: {
      features: ["Same as free", "Optional paid skills", "Professional support available"],
      limitations: ["LLM costs separate", "Technical setup required"],
      cost: "$0-100/month (LLM costs)"
    },
    n8n: {
      features: ["Cloud hosting", "Unlimited workflows", "5,000 executions/month"],
      limitations: ["Limited integrations", "No advanced features"],
      cost: "$20/month"
    }
  },
  {
    tier: "Professional/Enterprise",
    openclaw: {
      features: ["Enterprise support", "Custom skill development", "Multi-server deployment"],
      limitations: ["Requires technical expertise", "Setup complexity"],
      cost: "$500-2000/month (including support)"
    },
    n8n: {
      features: ["Advanced workflows", "Enterprise integrations", "SLA support"],
      limitations: ["Per execution pricing", "Can get expensive at scale"],
      cost: "$50-500/month"
    }
  }
];

/* const migrationConsiderations = [
  {
    from: "n8n to OpenClaw",
    scenarios: [
      "Need more intelligent, adaptive automation",
      "Want conversational AI capabilities", 
      "Require complex decision-making logic",
      "Building AI-first applications"
    ],
    challenges: [
      "Learning curve for CLI-based setup",
      "Converting visual workflows to agent logic",
      "Setting up LLM integrations",
      "Adapting to agent-based thinking"
    ],
    recommendations: [
      "Start with simple use cases",
      "Leverage OpenClaw consultants for setup",
      "Gradually migrate workflows",
      "Focus on AI-enhanced processes first"
    ]
  },
  {
    from: "OpenClaw to n8n",
    scenarios: [
      "Need simpler visual workflow design",
      "Want extensive pre-built integrations",
      "Require enterprise compliance features",
      "Team lacks technical expertise"
    ],
    challenges: [
      "Losing AI conversation capabilities",
      "Converting agent logic to workflows",
      "Less flexible automation logic",
      "Potential increase in costs"
    ],
    recommendations: [
      "Audit current AI usage patterns",
      "Design visual workflows for complex logic",
      "Use AI nodes for intelligence where possible",
      "Consider hybrid approach"
    ]
  }
]; */

const recommendations = [
  {
    scenario: "Non-Technical Business Users",
    recommendation: "Choose n8n",
    reasoning: "Visual interface, extensive templates, and business-friendly approach make it ideal for teams without technical expertise.",
    alternative: "Consider OpenClaw with professional setup assistance if AI capabilities are crucial."
  },
  {
    scenario: "AI-First Applications",
    recommendation: "Choose OpenClaw", 
    reasoning: "Native AI agent capabilities, conversational interfaces, and adaptive intelligence make it perfect for AI-centric use cases.",
    alternative: "n8n can work if you only need basic AI features within traditional workflows."
  },
  {
    scenario: "Enterprise Process Automation",
    recommendation: "Choose n8n",
    reasoning: "Mature platform, enterprise features, compliance options, and extensive integration ecosystem suit enterprise needs.",
    alternative: "OpenClaw for enterprises specifically focusing on AI transformation."
  },
  {
    scenario: "Custom/Complex Automation",
    recommendation: "Choose OpenClaw",
    reasoning: "Flexibility, custom skill development, and agent-based architecture provide unlimited customization possibilities.",
    alternative: "n8n if visual design and pre-built integrations are more important than flexibility."
  },
  {
    scenario: "Startup/SMB with Technical Team",
    recommendation: "Choose OpenClaw",
    reasoning: "Cost-effective (open source), powerful AI capabilities, and flexibility to grow with business needs.",
    alternative: "n8n for rapid deployment and if AI is not a primary requirement."
  }
];

export default function OpenClawVsN8nPage() {
  return (
    <>
      <section className="hero-gradient relative overflow-hidden min-h-[70vh] flex items-center grain">
        <div className="max-w-[1140px] mx-auto px-6 relative z-10 py-20">
          <div className="max-w-[720px]">
            <h1 className="font-heading text-4xl sm:text-5xl md:text-[3.2rem] font-extrabold text-white mb-6 leading-[1.05] tracking-tight">
              OpenClaw vs n8n
              <br />
              <span className="text-orange">Which Tool Should You Use?</span>
            </h1>

            <p className="text-white/60 text-lg md:text-xl max-w-[540px] mb-10 leading-relaxed">
              Comprehensive comparison between OpenClaw and n8n. Compare features, pricing, use cases, and capabilities to make the right choice.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#quick-comparison" className="inline-flex items-center justify-center bg-orange text-white px-8 py-4 rounded-btn font-semibold text-base hover:bg-orange-hover transition-all hover:-translate-y-0.5 shadow-glow-orange">
                View Comparison
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="quick-comparison" className="bg-white py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Quick Comparison Overview
            </h2>
          </div>

          <div className="bg-surface rounded-box p-8 shadow-card overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 font-heading font-bold text-dark">Aspect</th>
                  <th className="text-left py-4 font-heading font-bold text-orange">OpenClaw</th>
                  <th className="text-left py-4 font-heading font-bold text-blue-600">n8n</th>
                </tr>
              </thead>
              <tbody>
                {quickComparison.map((item, index) => (
                  <tr key={index} className="border-b border-gray-100 last:border-0">
                    <td className="py-4 font-medium text-dark">{item.aspect}</td>
                    <td className="py-4 text-muted">{item.openclaw}</td>
                    <td className="py-4 text-muted">{item.n8n}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-surface py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Detailed Feature Comparison
            </h2>
          </div>

          <div className="space-y-12">
            {detailedComparison.map((category, index) => (
              <div key={index}>
                <h3 className="font-heading text-2xl font-bold text-dark mb-8 text-center">{category.category}</h3>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="bg-white rounded-box p-8 shadow-card border-l-4 border-orange">
                    <h4 className="font-heading font-bold text-lg text-orange mb-4">OpenClaw</h4>
                    
                    <div className="mb-6">
                      <h5 className="font-semibold text-green-600 mb-2">Strengths:</h5>
                      <ul className="space-y-1">
                        {category.openclaw.strengths.map((strength, idx) => (
                          <li key={idx} className="text-muted text-sm flex gap-2">
                            <span className="text-green-500">✓</span>
                            {strength}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h5 className="font-semibold text-red-600 mb-2">Weaknesses:</h5>
                      <ul className="space-y-1">
                        {category.openclaw.weaknesses.map((weakness, idx) => (
                          <li key={idx} className="text-muted text-sm flex gap-2">
                            <span className="text-red-500">•</span>
                            {weakness}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="bg-white rounded-box p-8 shadow-card border-l-4 border-blue-600">
                    <h4 className="font-heading font-bold text-lg text-blue-600 mb-4">n8n</h4>
                    
                    <div className="mb-6">
                      <h5 className="font-semibold text-green-600 mb-2">Strengths:</h5>
                      <ul className="space-y-1">
                        {category.n8n.strengths.map((strength, idx) => (
                          <li key={idx} className="text-muted text-sm flex gap-2">
                            <span className="text-green-500">✓</span>
                            {strength}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h5 className="font-semibold text-red-600 mb-2">Weaknesses:</h5>
                      <ul className="space-y-1">
                        {category.n8n.weaknesses.map((weakness, idx) => (
                          <li key={idx} className="text-muted text-sm flex gap-2">
                            <span className="text-red-500">•</span>
                            {weakness}
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

      <section className="bg-light py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Use Case Comparison
            </h2>
          </div>

          <div className="space-y-8">
            {useCaseComparison.map((useCase, index) => (
              <div key={index} className="bg-white rounded-box p-8 shadow-card">
                <h3 className="font-heading font-bold text-xl text-dark mb-6">{useCase.useCase}</h3>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="border-l-4 border-orange pl-6">
                    <div className="flex items-center gap-3 mb-3">
                      <h4 className="font-semibold text-orange">OpenClaw</h4>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        useCase.openclaw.suitability === 'Excellent' ? 'bg-green-100 text-green-700' :
                        useCase.openclaw.suitability === 'Good' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                        {useCase.openclaw.suitability}
                      </span>
                    </div>
                    <p className="text-muted text-sm mb-3">{useCase.openclaw.description}</p>
                    <p className="text-muted text-xs mb-3"><strong>Example:</strong> {useCase.openclaw.example}</p>
                    <p className="text-orange text-sm font-medium">{useCase.openclaw.recommendation}</p>
                  </div>

                  <div className="border-l-4 border-blue-600 pl-6">
                    <div className="flex items-center gap-3 mb-3">
                      <h4 className="font-semibold text-blue-600">n8n</h4>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        useCase.n8n.suitability === 'Excellent' ? 'bg-green-100 text-green-700' :
                        useCase.n8n.suitability === 'Good' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                        {useCase.n8n.suitability}
                      </span>
                    </div>
                    <p className="text-muted text-sm mb-3">{useCase.n8n.description}</p>
                    <p className="text-muted text-xs mb-3"><strong>Example:</strong> {useCase.n8n.example}</p>
                    <p className="text-blue-600 text-sm font-medium">{useCase.n8n.recommendation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Pricing Comparison
            </h2>
          </div>

          <div className="space-y-8">
            {pricingComparison.map((tier, index) => (
              <div key={index} className="bg-surface rounded-box p-8 shadow-card">
                <h3 className="font-heading font-bold text-xl text-dark mb-6">{tier.tier}</h3>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="bg-orange/5 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-semibold text-orange">OpenClaw</h4>
                      <span className="text-2xl font-bold text-orange">{tier.openclaw.cost}</span>
                    </div>
                    
                    <div className="mb-4">
                      <h5 className="font-semibold text-dark mb-2">Features:</h5>
                      <ul className="space-y-1">
                        {tier.openclaw.features.map((feature, idx) => (
                          <li key={idx} className="text-muted text-sm flex gap-2">
                            <span className="text-green-500">✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h5 className="font-semibold text-dark mb-2">Limitations:</h5>
                      <ul className="space-y-1">
                        {tier.openclaw.limitations.map((limitation, idx) => (
                          <li key={idx} className="text-muted text-sm flex gap-2">
                            <span className="text-orange">•</span>
                            {limitation}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-semibold text-blue-600">n8n</h4>
                      <span className="text-2xl font-bold text-blue-600">{tier.n8n.cost}</span>
                    </div>
                    
                    <div className="mb-4">
                      <h5 className="font-semibold text-dark mb-2">Features:</h5>
                      <ul className="space-y-1">
                        {tier.n8n.features.map((feature, idx) => (
                          <li key={idx} className="text-muted text-sm flex gap-2">
                            <span className="text-green-500">✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h5 className="font-semibold text-dark mb-2">Limitations:</h5>
                      <ul className="space-y-1">
                        {tier.n8n.limitations.map((limitation, idx) => (
                          <li key={idx} className="text-muted text-sm flex gap-2">
                            <span className="text-blue-600">•</span>
                            {limitation}
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

      <section className="bg-surface py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Our Recommendations
            </h2>
          </div>

          <div className="space-y-6">
            {recommendations.map((rec, index) => (
              <div key={index} className="bg-white rounded-box p-8 shadow-card">
                <div className="flex flex-col lg:flex-row lg:items-start justify-between mb-4">
                  <h3 className="font-heading font-bold text-lg text-dark">{rec.scenario}</h3>
                  <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                    rec.recommendation.includes('OpenClaw') ? 'bg-orange text-white' : 'bg-blue-600 text-white'
                  }`}>
                    {rec.recommendation}
                  </span>
                </div>
                
                <p className="text-muted mb-4">{rec.reasoning}</p>
                
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-muted text-sm"><strong>Alternative:</strong> {rec.alternative}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-navy text-white py-24 relative overflow-hidden grain">
        <div className="max-w-[1140px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Still Not Sure Which
                <br />
                <span className="text-orange">Tool to Choose?</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Get expert guidance on choosing between OpenClaw and n8n. We'll assess your needs and recommend the best automation platform.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex gap-3 text-white/80">
                  <span className="text-orange">✓</span>
                  Requirements analysis
                </li>
                <li className="flex gap-3 text-white/80">
                  <span className="text-orange">✓</span>
                  Platform recommendations
                </li>
                <li className="flex gap-3 text-white/80">
                  <span className="text-orange">✓</span>
                  Implementation planning
                </li>
              </ul>
            </div>

            <div className="bg-white/[0.03] border border-white/[0.06] rounded-box p-8">
              <h3 className="font-heading font-bold text-xl text-white mb-1">Platform Selection Consultation</h3>
              <p className="text-white/40 text-sm mb-6">Choose the right automation tool for your needs</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}