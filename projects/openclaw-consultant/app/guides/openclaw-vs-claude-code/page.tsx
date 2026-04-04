import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "OpenClaw vs Claude Code Comparison",
  description: "Detailed comparison between OpenClaw and Claude Code CLI. Compare features, automation capabilities, use cases, and integration options.",
  keywords: [
    "openclaw vs claude code",
    "openclaw claude code comparison",
    "ai automation tools",
    "claude code vs openclaw",
    "ai agent platforms",
    "automation comparison",
    "claude cli vs openclaw",
    "ai development tools"
  ],
  alternates: { canonical: "https://openclawconsultant.co.uk/guides/openclaw-vs-claude-code" },
  openGraph: {
    title: "OpenClaw vs Claude Code Comparison",
    description: "Complete comparison between OpenClaw and Claude Code CLI for AI automation and development.",
    url: "https://openclawconsultant.co.uk/guides/openclaw-vs-claude-code",
    type: "article",
  },
};

const quickComparison = [
  {
    aspect: "Primary Purpose",
    openclaw: "Multi-agent orchestration & automation platform",
    claudeCode: "AI-powered development assistant CLI"
  },
  {
    aspect: "Target Users",
    openclaw: "Business automation, AI implementers",
    claudeCode: "Developers, programmers, technical users"
  },
  {
    aspect: "Core Strength",
    openclaw: "Complex agent workflows & business automation",
    claudeCode: "Code generation, development assistance"
  },
  {
    aspect: "Architecture",
    openclaw: "Multi-agent system with persistent memory",
    claudeCode: "Single-session AI assistant"
  },
  {
    aspect: "Integration Scope",
    openclaw: "Business systems, APIs, databases",
    claudeCode: "Development tools, IDEs, version control"
  },
  {
    aspect: "Automation Level",
    openclaw: "Full autonomous operation",
    claudeCode: "Interactive assistance with human oversight"
  }
];

const coreCapabilities = [
  {
    category: "AI & Intelligence",
    openclaw: {
      capabilities: [
        "Multiple AI models (Claude, GPT, Llama)",
        "Agent-to-agent communication", 
        "Persistent memory across sessions",
        "Dynamic skill acquisition",
        "Context-aware decision making"
      ],
      strengths: "Multi-agent orchestration with complex reasoning",
      limitations: "Requires configuration of multiple models"
    },
    claudeCode: {
      capabilities: [
        "Claude 3.5 Sonnet integration",
        "Advanced code understanding",
        "Natural language to code translation",
        "Code review and optimization",
        "Development workflow integration"
      ],
      strengths: "Exceptional code generation and development assistance",
      limitations: "Limited to Claude model, single-agent interaction"
    }
  },
  {
    category: "Automation Capabilities",
    openclaw: {
      capabilities: [
        "Business process automation",
        "Cross-platform integration",
        "Scheduled and event-driven workflows",
        "API orchestration",
        "Data processing pipelines"
      ],
      strengths: "Comprehensive business automation platform",
      limitations: "Steep learning curve for setup"
    },
    claudeCode: {
      capabilities: [
        "Code generation automation",
        "Development task assistance",
        "File manipulation and analysis",
        "Git workflow integration",
        "Documentation generation"
      ],
      strengths: "Streamlines development workflows",
      limitations: "Focused primarily on development tasks"
    }
  },
  {
    category: "Deployment & Hosting",
    openclaw: {
      capabilities: [
        "Self-hosted on local/cloud servers",
        "Docker containerization",
        "Multi-node deployment",
        "Gateway-based architecture",
        "Custom skill marketplaces"
      ],
      strengths: "Full control over deployment and data",
      limitations: "Requires infrastructure management"
    },
    claudeCode: {
      capabilities: [
        "Local CLI installation",
        "Cloud-based AI processing",
        "IDE plugin integration",
        "Single-user focused",
        "Minimal infrastructure needs"
      ],
      strengths: "Simple installation and setup",
      limitations: "Limited multi-user/enterprise features"
    }
  }
];

const useCaseAnalysis = [
  {
    useCase: "Software Development",
    openclaw: {
      rating: "Good",
      description: "Can automate development workflows and manage complex projects",
      examples: [
        "CI/CD pipeline orchestration",
        "Multi-repo management",
        "Automated testing workflows",
        "Code deployment automation"
      ],
      bestFor: "DevOps automation and project orchestration"
    },
    claudeCode: {
      rating: "Excellent",
      description: "Purpose-built for development assistance and code generation",
      examples: [
        "Interactive code generation",
        "Code review and refactoring",
        "Bug fixing assistance",
        "Documentation writing"
      ],
      bestFor: "Day-to-day development assistance"
    }
  },
  {
    useCase: "Business Automation",
    openclaw: {
      rating: "Excellent", 
      description: "Designed for complex business process automation",
      examples: [
        "Customer support automation",
        "Sales process management",
        "Data integration workflows",
        "Report generation"
      ],
      bestFor: "End-to-end business process automation"
    },
    claudeCode: {
      rating: "Fair",
      description: "Limited to development-focused business tasks",
      examples: [
        "Automating development workflows",
        "Code documentation",
        "Technical specification writing",
        "Development tool integration"
      ],
      bestFor: "Development team productivity"
    }
  },
  {
    useCase: "Data Processing & Analysis",
    openclaw: {
      rating: "Good",
      description: "Strong for automated data workflows and analysis",
      examples: [
        "Automated data pipeline creation",
        "Multi-source data integration",
        "Intelligent data transformation",
        "Automated reporting"
      ],
      bestFor: "Large-scale data automation"
    },
    claudeCode: {
      rating: "Good", 
      description: "Excellent for data analysis code generation",
      examples: [
        "Data analysis script creation",
        "Statistical analysis code",
        "Data visualization code",
        "Database query generation"
      ],
      bestFor: "Data analysis code development"
    }
  },
  {
    useCase: "Customer Support",
    openclaw: {
      rating: "Excellent",
      description: "Built for conversational AI and support automation",
      examples: [
        "Multi-channel support bots",
        "Intelligent ticket routing",
        "Customer inquiry handling",
        "Knowledge base automation"
      ],
      bestFor: "Comprehensive customer support automation"
    },
    claudeCode: {
      rating: "Poor",
      description: "Not designed for customer-facing applications",
      examples: [
        "Internal development support",
        "Technical documentation for support",
        "Support tool development",
        "API integration code"
      ],
      bestFor: "Supporting development of customer tools"
    }
  }
];

const technicalComparison = [
  {
    aspect: "Setup Complexity",
    openclaw: {
      complexity: "High",
      timeToSetup: "2-8 hours",
      requirements: [
        "Server or local environment",
        "Node.js and dependencies",
        "Gateway configuration",
        "AI model API keys",
        "Skills installation"
      ],
      notes: "Requires technical expertise for initial setup"
    },
    claudeCode: {
      complexity: "Low",
      timeToSetup: "5-15 minutes",
      requirements: [
        "Node.js or Python",
        "Anthropic API key",
        "CLI installation",
        "Optional IDE integration"
      ],
      notes: "Simple installation with minimal configuration"
    }
  },
  {
    aspect: "Resource Requirements",
    openclaw: {
      cpu: "Medium to High",
      memory: "2-8GB depending on agents",
      storage: "1-10GB for skills and logs", 
      network: "Persistent for API calls",
      notes: "Scales with number of active agents"
    },
    claudeCode: {
      cpu: "Low",
      memory: "100-500MB",
      storage: "50-200MB",
      network: "On-demand for AI requests",
      notes: "Lightweight with minimal resource usage"
    }
  },
  {
    aspect: "Extensibility",
    openclaw: {
      skillSystem: "Comprehensive skill marketplace",
      customization: "Full custom skill development",
      integrations: "Unlimited via skills",
      apiAccess: "Complete REST and WebSocket APIs",
      notes: "Highly extensible platform architecture"
    },
    claudeCode: {
      skillSystem: "Plugin system (limited)",
      customization: "Configuration and prompts",
      integrations: "IDE and development tools",
      apiAccess: "Limited to Anthropic Claude API",
      notes: "Focused extensibility for development use"
    }
  }
];

const costAnalysis = [
  {
    category: "Platform Costs",
    openclaw: {
      license: "Open source (free)",
      hosting: "$10-500/month (self-hosted infrastructure)",
      support: "$500-2000/month (optional professional support)",
      total: "$10-2500/month"
    },
    claudeCode: {
      license: "Free CLI tool",
      hosting: "Not applicable (local)",
      support: "Community support (free)",
      total: "$0/month"
    }
  },
  {
    category: "AI/API Costs",
    openclaw: {
      models: "Multiple providers (Claude, OpenAI, etc.)",
      usage: "$50-1000+/month depending on volume",
      optimization: "Can optimize costs across providers",
      notes: "Higher usage for autonomous operations"
    },
    claudeCode: {
      models: "Anthropic Claude only",
      usage: "$20-200/month for typical development use",
      optimization: "Single provider, limited optimization",
      notes: "Usage controlled by user interaction"
    }
  },
  {
    category: "Operational Costs",
    openclaw: {
      maintenance: "Moderate (server management, updates)",
      training: "High (learning platform, agent configuration)",
      scaling: "Linear with infrastructure",
      notes: "Ongoing operational overhead"
    },
    claudeCode: {
      maintenance: "Minimal (CLI updates)",
      training: "Low (straightforward tool)",
      scaling: "Individual user licenses",
      notes: "Very low operational overhead"
    }
  }
];

const decisionFramework = [
  {
    scenario: "Individual Developer",
    recommendation: "Claude Code",
    reasoning: [
      "Simple setup and immediate productivity",
      "Focused on development tasks",
      "Lower costs and complexity",
      "No infrastructure management"
    ],
    alternative: "OpenClaw if developing AI-powered applications"
  },
  {
    scenario: "Development Team (2-10 people)",
    recommendation: "Claude Code (primarily)",
    reasoning: [
      "Each developer can use independently", 
      "Consistent development assistance",
      "No shared infrastructure needed",
      "Cost-effective for team size"
    ],
    alternative: "OpenClaw for team workflow automation"
  },
  {
    scenario: "Small Business Automation",
    recommendation: "OpenClaw",
    reasoning: [
      "Comprehensive business process automation",
      "Multi-channel customer support",
      "Workflow orchestration capabilities",
      "Long-term scalability"
    ],
    alternative: "Claude Code only if business is purely development-focused"
  },
  {
    scenario: "Enterprise Development",
    recommendation: "Both (Different Use Cases)",
    reasoning: [
      "Claude Code for individual developer productivity",
      "OpenClaw for enterprise automation workflows",
      "Complementary rather than competing tools",
      "Different target use cases"
    ],
    alternative: "Evaluate specific enterprise needs"
  },
  {
    scenario: "AI/Automation Consultancy",
    recommendation: "OpenClaw",
    reasoning: [
      "Platform for building client solutions",
      "Multi-agent orchestration capabilities", 
      "Custom skill development",
      "Scalable for various client needs"
    ],
    alternative: "Claude Code as development assistant alongside OpenClaw"
  }
];

/* const migrationConsiderations = [
  {
    from: "Claude Code to OpenClaw",
    reasons: [
      "Need business process automation beyond development",
      "Require multi-agent workflows",
      "Want to build customer-facing AI applications",
      "Need persistent agent memory and context"
    ],
    challenges: [
      "Significant increase in complexity",
      "Infrastructure setup and management",
      "Learning agent configuration",
      "Higher operational costs"
    ],
    strategy: [
      "Start with simple automation use cases",
      "Leverage existing development skills",
      "Consider professional setup assistance",
      "Plan for infrastructure requirements"
    ]
  },
  {
    from: "OpenClaw to Claude Code",
    reasons: [
      "Simplify to development-only use cases",
      "Reduce infrastructure complexity",
      "Lower operational costs",
      "Focus on individual productivity"
    ],
    challenges: [
      "Lose business automation capabilities",
      "No multi-agent workflows",
      "Limited to development tasks",
      "Individual rather than team/business tool"
    ],
    strategy: [
      "Assess if development focus is sufficient",
      "Plan for lost automation capabilities",
      "Consider hybrid approach",
      "Evaluate business impact"
    ]
  }
]; */

export default function OpenClawVsClaudeCodePage() {
  return (
    <>
      <section className="hero-gradient relative overflow-hidden min-h-[70vh] flex items-center grain">
        <div className="max-w-[1140px] mx-auto px-6 relative z-10 py-20">
          <div className="max-w-[720px]">
            <h1 className="font-heading text-4xl sm:text-5xl md:text-[3.2rem] font-extrabold text-white mb-6 leading-[1.05] tracking-tight">
              OpenClaw vs Claude Code
              <br />
              <span className="text-orange">Full Comparison for 2026</span>
            </h1>

            <p className="text-white/60 text-lg md:text-xl max-w-[540px] mb-10 leading-relaxed">
              Detailed comparison between OpenClaw and Claude Code CLI. Understand the differences, use cases, and which tool fits your needs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#overview" className="inline-flex items-center justify-center bg-orange text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-orange-hover transition-all hover:-translate-y-0.5 shadow-glow-orange">
                Compare Tools
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="overview" className="bg-white py-28">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Quick Comparison Overview
            </h2>
            <p className="text-muted max-w-[600px] mx-auto">
              Understanding the fundamental differences between OpenClaw and Claude Code
            </p>
          </div>

          <div className="bg-surface rounded-2xl p-8 shadow-card overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 font-heading font-bold text-dark">Aspect</th>
                  <th className="text-left py-4 font-heading font-bold text-orange">OpenClaw</th>
                  <th className="text-left py-4 font-heading font-bold text-blue-600">Claude Code</th>
                </tr>
              </thead>
              <tbody>
                {quickComparison.map((item, index) => (
                  <tr key={index} className="border-b border-gray-100 last:border-0">
                    <td className="py-4 font-medium text-dark">{item.aspect}</td>
                    <td className="py-4 text-muted">{item.openclaw}</td>
                    <td className="py-4 text-muted">{item.claudeCode}</td>
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
              Core Capabilities Comparison
            </h2>
          </div>

          <div className="space-y-12">
            {coreCapabilities.map((category, index) => (
              <div key={index}>
                <h3 className="font-heading text-2xl font-bold text-dark mb-8 text-center">{category.category}</h3>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="bg-white rounded-2xl p-8 shadow-card border-l-4 border-orange">
                    <h4 className="font-heading font-bold text-lg text-orange mb-4">OpenClaw</h4>
                    
                    <div className="mb-6">
                      <h5 className="font-semibold text-dark mb-2">Capabilities:</h5>
                      <ul className="space-y-1">
                        {category.openclaw.capabilities.map((capability, idx) => (
                          <li key={idx} className="text-muted text-sm flex gap-2">
                            <span className="text-green-500">✓</span>
                            {capability}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-4">
                      <h5 className="font-semibold text-green-600 mb-2">Strengths:</h5>
                      <p className="text-muted text-sm">{category.openclaw.strengths}</p>
                    </div>

                    <div>
                      <h5 className="font-semibold text-red-600 mb-2">Limitations:</h5>
                      <p className="text-muted text-sm">{category.openclaw.limitations}</p>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-8 shadow-card border-l-4 border-blue-600">
                    <h4 className="font-heading font-bold text-lg text-blue-600 mb-4">Claude Code</h4>
                    
                    <div className="mb-6">
                      <h5 className="font-semibold text-dark mb-2">Capabilities:</h5>
                      <ul className="space-y-1">
                        {category.claudeCode.capabilities.map((capability, idx) => (
                          <li key={idx} className="text-muted text-sm flex gap-2">
                            <span className="text-green-500">✓</span>
                            {capability}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-4">
                      <h5 className="font-semibold text-green-600 mb-2">Strengths:</h5>
                      <p className="text-muted text-sm">{category.claudeCode.strengths}</p>
                    </div>

                    <div>
                      <h5 className="font-semibold text-red-600 mb-2">Limitations:</h5>
                      <p className="text-muted text-sm">{category.claudeCode.limitations}</p>
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
              Use Case Analysis
            </h2>
          </div>

          <div className="space-y-8">
            {useCaseAnalysis.map((useCase, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-card">
                <h3 className="font-heading font-bold text-xl text-dark mb-6">{useCase.useCase}</h3>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="border-l-4 border-orange pl-6">
                    <div className="flex items-center gap-3 mb-3">
                      <h4 className="font-semibold text-orange">OpenClaw</h4>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        useCase.openclaw.rating === 'Excellent' ? 'bg-green-100 text-green-700' :
                        useCase.openclaw.rating === 'Good' ? 'bg-yellow-100 text-yellow-700' :
                        useCase.openclaw.rating === 'Fair' ? 'bg-orange-100 text-orange-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                        {useCase.openclaw.rating}
                      </span>
                    </div>
                    <p className="text-muted text-sm mb-3">{useCase.openclaw.description}</p>
                    
                    <div className="mb-3">
                      <h5 className="font-semibold text-dark mb-1">Examples:</h5>
                      <ul className="space-y-1">
                        {useCase.openclaw.examples.map((example, idx) => (
                          <li key={idx} className="text-muted text-xs flex gap-2">
                            <span className="text-orange">▸</span>
                            {example}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <p className="text-orange text-sm font-medium">{useCase.openclaw.bestFor}</p>
                  </div>

                  <div className="border-l-4 border-blue-600 pl-6">
                    <div className="flex items-center gap-3 mb-3">
                      <h4 className="font-semibold text-blue-600">Claude Code</h4>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        useCase.claudeCode.rating === 'Excellent' ? 'bg-green-100 text-green-700' :
                        useCase.claudeCode.rating === 'Good' ? 'bg-yellow-100 text-yellow-700' :
                        useCase.claudeCode.rating === 'Fair' ? 'bg-orange-100 text-orange-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                        {useCase.claudeCode.rating}
                      </span>
                    </div>
                    <p className="text-muted text-sm mb-3">{useCase.claudeCode.description}</p>
                    
                    <div className="mb-3">
                      <h5 className="font-semibold text-dark mb-1">Examples:</h5>
                      <ul className="space-y-1">
                        {useCase.claudeCode.examples.map((example, idx) => (
                          <li key={idx} className="text-muted text-xs flex gap-2">
                            <span className="text-blue-600">▸</span>
                            {example}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <p className="text-blue-600 text-sm font-medium">{useCase.claudeCode.bestFor}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-28">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Technical & Cost Comparison
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {technicalComparison.map((aspect, index) => (
              <div key={index} className="bg-surface rounded-2xl p-8 shadow-card">
                <h3 className="font-heading font-bold text-lg text-dark mb-6">{aspect.aspect}</h3>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-orange pl-4">
                    <h4 className="font-semibold text-orange mb-2">OpenClaw</h4>
                    {aspect.openclaw.complexity && (
                      <p className="text-muted text-sm mb-2">
                        <strong>Complexity:</strong> {aspect.openclaw.complexity} ({aspect.openclaw.timeToSetup})
                      </p>
                    )}
                    {aspect.openclaw.requirements && (
                      <div className="mb-2">
                        <p className="font-medium text-dark text-sm">Requirements:</p>
                        <ul className="space-y-1 ml-4">
                          {aspect.openclaw.requirements.map((req, idx) => (
                            <li key={idx} className="text-muted text-xs">• {req}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    <p className="text-muted text-xs">{aspect.openclaw.notes}</p>
                  </div>

                  <div className="border-l-4 border-blue-600 pl-4">
                    <h4 className="font-semibold text-blue-600 mb-2">Claude Code</h4>
                    {aspect.claudeCode.complexity && (
                      <p className="text-muted text-sm mb-2">
                        <strong>Complexity:</strong> {aspect.claudeCode.complexity} ({aspect.claudeCode.timeToSetup})
                      </p>
                    )}
                    {aspect.claudeCode.requirements && (
                      <div className="mb-2">
                        <p className="font-medium text-dark text-sm">Requirements:</p>
                        <ul className="space-y-1 ml-4">
                          {aspect.claudeCode.requirements.map((req, idx) => (
                            <li key={idx} className="text-muted text-xs">• {req}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    <p className="text-muted text-xs">{aspect.claudeCode.notes}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-surface rounded-2xl p-8 shadow-card">
            <h3 className="font-heading font-bold text-xl text-dark mb-6 text-center">Cost Analysis</h3>
            
            <div className="space-y-6">
              {costAnalysis.map((cost, index) => (
                <div key={index}>
                  <h4 className="font-semibold text-dark mb-4">{cost.category}</h4>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="bg-orange/10 rounded-lg p-4">
                      <h5 className="font-semibold text-orange mb-3">OpenClaw</h5>
                      {Object.entries(cost.openclaw).map(([key, value], idx) => (
                        <p key={idx} className="text-muted text-sm mb-1">
                          <strong className="capitalize">{key.replace(/([A-Z])/g, ' $1')}:</strong> {value}
                        </p>
                      ))}
                    </div>
                    <div className="bg-blue-50 rounded-lg p-4">
                      <h5 className="font-semibold text-blue-600 mb-3">Claude Code</h5>
                      {Object.entries(cost.claudeCode).map(([key, value], idx) => (
                        <p key={idx} className="text-muted text-sm mb-1">
                          <strong className="capitalize">{key.replace(/([A-Z])/g, ' $1')}:</strong> {value}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Decision Framework
            </h2>
            <p className="text-muted max-w-[600px] mx-auto">
              Choose the right tool based on your specific situation and needs
            </p>
          </div>

          <div className="space-y-6">
            {decisionFramework.map((decision, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-card">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4">
                  <h3 className="font-heading font-bold text-lg text-dark">{decision.scenario}</h3>
                  <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                    decision.recommendation.includes('OpenClaw') ? 'bg-orange text-white' : 
                    decision.recommendation.includes('Claude Code') ? 'bg-blue-600 text-white' :
                    'bg-purple-600 text-white'
                  }`}>
                    {decision.recommendation}
                  </span>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-dark mb-2">Reasoning:</h4>
                  <ul className="space-y-1">
                    {decision.reasoning.map((reason, idx) => (
                      <li key={idx} className="text-muted text-sm flex gap-2">
                        <span className="text-green-500">▸</span>
                        {reason}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <p className="text-muted text-sm"><strong>Alternative:</strong> {decision.alternative}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      {/* Related Guides */}
      <section className="py-16 bg-surface">
        <div className="max-w-[1140px] mx-auto px-6">
          <h2 className="font-heading text-2xl font-bold text-navy mb-8 text-center">Related Guides</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-[800px] mx-auto">
            <a href="/guides/openclaw-vs-chatgpt" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">OpenClaw vs ChatGPT: Key Differences</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/openclaw-vs-zapier-vs-make" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">OpenClaw vs Zapier vs Make</h3>
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

      <section id="contact" className="bg-navy text-white py-24 relative overflow-hidden grain">
        <div className="max-w-[1140px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Need Help Choosing Between
                <br />
                <span className="text-orange">OpenClaw & Claude Code?</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Get expert guidance on selecting the right AI tool for your specific needs. We'll help you evaluate your requirements and recommend the best approach.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex gap-3 text-white/80">
                  <span className="text-orange">✓</span>
                  Requirements analysis and tool comparison
                </li>
                <li className="flex gap-3 text-white/80">
                  <span className="text-orange">✓</span>
                  Implementation planning and strategy
                </li>
                <li className="flex gap-3 text-white/80">
                  <span className="text-orange">✓</span>
                  Setup assistance for chosen platform
                </li>
              </ul>
            </div>

            <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8">
              <h3 className="font-heading font-bold text-xl text-white mb-1">AI Tool Selection Consultation</h3>
              <p className="text-white/40 text-sm mb-6">Get expert guidance on choosing the right AI platform</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}