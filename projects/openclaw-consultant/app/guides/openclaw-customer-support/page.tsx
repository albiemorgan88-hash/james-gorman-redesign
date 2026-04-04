import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "OpenClaw for Customer Support",
  description: "Complete guide to OpenClaw customer support automation. Learn ticket routing, response generation, escalation management, and 24/7 support implementation.",
  keywords: [
    "openclaw customer support",
    "ai customer service automation", 
    "openclaw ticket routing",
    "automated customer support",
    "openclaw helpdesk automation",
    "ai support agent",
    "customer service ai",
    "openclaw support workflows"
  ],
  alternates: { canonical: "https://openclawconsultant.co.uk/guides/openclaw-customer-support" },
  openGraph: {
    title: "OpenClaw for Customer Support",
    description: "Complete guide to OpenClaw customer support automation. Learn ticket routing, response generation, and escalation management.",
    url: "https://openclawconsultant.co.uk/guides/openclaw-customer-support",
    type: "article",
  },
};

const supportCapabilities = [
  {
    capability: "Intelligent Ticket Routing",
    description: "Automatically categorize and route support tickets to appropriate departments or specialists",
    features: [
      "Natural language processing for issue classification",
      "Priority scoring based on customer tier and issue urgency",
      "Automatic assignment to available team members",
      "Workload balancing across support staff"
    ],
    benefits: [
      "Reduced response times by 80%",
      "Improved first-contact resolution rates",
      "Better resource allocation and staff utilization",
      "Consistent ticket prioritization"
    ]
  },
  {
    capability: "Automated Response Generation",
    description: "Generate contextual, personalized responses using knowledge base and customer history",
    features: [
      "Dynamic response generation from knowledge base",
      "Personalization based on customer data and history",
      "Multi-language support with automatic translation",
      "Brand voice consistency across all communications"
    ],
    benefits: [
      "Instant response to common inquiries",
      "Consistent quality and tone",
      "24/7 availability without human oversight",
      "Reduced training time for new staff"
    ]
  },
  {
    capability: "Smart Escalation Management",
    description: "Intelligently escalate complex issues to human agents with full context and recommendations",
    features: [
      "Complexity scoring for automatic escalation triggers",
      "Context preservation and handoff to human agents",
      "Suggested resolution strategies based on similar cases",
      "Customer sentiment monitoring for priority escalation"
    ],
    benefits: [
      "Higher customer satisfaction scores",
      "Reduced escalation response times",
      "Better prepared human agents",
      "Improved resolution quality"
    ]
  },
  {
    capability: "Knowledge Base Integration",
    description: "Seamlessly integrate with existing knowledge bases and continuously learn from interactions",
    features: [
      "Real-time knowledge base querying and updates",
      "Automatic identification of knowledge gaps",
      "Continuous learning from successful resolutions",
      "Multi-source knowledge aggregation"
    ],
    benefits: [
      "Always up-to-date information",
      "Improved accuracy over time",
      "Reduced knowledge maintenance overhead",
      "Better training data for human agents"
    ]
  },
  {
    capability: "Customer Sentiment Analysis",
    description: "Monitor customer emotions and satisfaction levels throughout support interactions",
    features: [
      "Real-time sentiment monitoring during conversations",
      "Escalation triggers based on negative sentiment",
      "Satisfaction prediction and proactive intervention",
      "Emotional intelligence in response generation"
    ],
    benefits: [
      "Higher customer satisfaction scores",
      "Proactive issue resolution",
      "Reduced customer churn",
      "Better customer experience insights"
    ]
  },
  {
    capability: "Performance Analytics & Reporting",
    description: "Comprehensive analytics on support operations with actionable insights for optimization",
    features: [
      "Real-time dashboards with key support metrics",
      "Customer journey analysis and bottleneck identification",
      "Agent performance tracking and coaching insights",
      "Predictive analytics for demand forecasting"
    ],
    benefits: [
      "Data-driven decision making",
      "Continuous improvement opportunities",
      "Better resource planning",
      "Improved operational efficiency"
    ]
  }
];

const implementationLevels = [
  {
    level: "Basic Automation",
    timeframe: "2-4 weeks",
    description: "Essential support automation for immediate impact",
    components: [
      "Automated FAQ responses",
      "Basic ticket routing by keywords",
      "Email auto-acknowledgment",
      "Simple escalation rules"
    ],
    suitableFor: "Small businesses, startups, teams under 10",
    expectedImpact: "50% reduction in simple query response time",
    cost: "£2,000-£4,000 setup"
  },
  {
    level: "Intelligent Support",
    timeframe: "4-8 weeks",
    description: "Advanced AI-powered support with contextual understanding",
    components: [
      "Natural language processing for intent recognition",
      "Dynamic response generation",
      "Customer history integration",
      "Sentiment-based escalation",
      "Multi-channel support (email, chat, social)"
    ],
    suitableFor: "Growing businesses, 10-100 employees",
    expectedImpact: "75% automation rate, 90% faster responses",
    cost: "£5,000-£12,000 setup"
  },
  {
    level: "Enterprise Support Hub",
    timeframe: "8-16 weeks", 
    description: "Complete support automation with advanced analytics and optimization",
    components: [
      "Multi-agent support team coordination",
      "Advanced workflow automation",
      "Predictive analytics and forecasting",
      "Integration with CRM and business systems",
      "Custom skill development for specific industries"
    ],
    suitableFor: "Large organizations, complex support needs",
    expectedImpact: "85% automation, 24/7 coverage, 40% cost reduction",
    cost: "£15,000-£35,000 setup"
  }
];

const channelIntegrations = [
  {
    channel: "Email Support",
    integrations: ["Gmail", "Outlook", "Zendesk", "Freshdesk"],
    capabilities: [
      "Automatic email parsing and categorization",
      "Contextual response generation",
      "Attachment processing and analysis",
      "Thread management and conversation tracking"
    ],
    setupComplexity: "Low"
  },
  {
    channel: "Live Chat",
    integrations: ["Intercom", "Zendesk Chat", "LiveChat", "Crisp"],
    capabilities: [
      "Real-time conversation handling",
      "Instant response to common queries",
      "Human handoff with context preservation",
      "Proactive engagement based on user behavior"
    ],
    setupComplexity: "Medium"
  },
  {
    channel: "Social Media",
    integrations: ["Facebook Messenger", "Twitter DM", "Instagram", "WhatsApp Business"],
    capabilities: [
      "Social media monitoring and response",
      "Brand mention tracking and engagement",
      "Multi-platform conversation management",
      "Public vs private response routing"
    ],
    setupComplexity: "Medium"
  },
  {
    channel: "Phone Support",
    integrations: ["Twilio", "Asterisk", "RingCentral", "Five9"],
    capabilities: [
      "Voice-to-text transcription",
      "Call routing based on spoken intent",
      "Real-time agent assistance",
      "Call summary and follow-up automation"
    ],
    setupComplexity: "High"
  },
  {
    channel: "In-App Support",
    integrations: ["Custom APIs", "Webhooks", "SDK Integration"],
    capabilities: [
      "Context-aware in-app messaging",
      "User action triggerd support flows",
      "Proactive help based on user behavior",
      "Seamless escalation to human support"
    ],
    setupComplexity: "High"
  }
];

const workflowExamples = [
  {
    scenario: "E-commerce Order Issue",
    trigger: "Customer emails about order problem",
    steps: [
      "Analyze email content and extract order details",
      "Query order management system for current status",
      "Generate personalized response with order update",
      "If issue requires action, create internal ticket",
      "Send automated follow-up after resolution"
    ],
    automationLevel: "95%",
    averageResolutionTime: "Under 2 minutes"
  },
  {
    scenario: "Technical Support Request",
    trigger: "User reports software bug or feature question",
    steps: [
      "Classify issue type and technical complexity",
      "Search knowledge base for relevant solutions",
      "Generate step-by-step troubleshooting guide",
      "Escalate to technical team if solution not found",
      "Track resolution and update knowledge base"
    ],
    automationLevel: "70%",
    averageResolutionTime: "5-15 minutes"
  },
  {
    scenario: "Billing Inquiry",
    trigger: "Customer questions about invoice or payment",
    steps: [
      "Authenticate customer and access billing data",
      "Analyze inquiry type (payment, dispute, modification)",
      "Generate detailed billing explanation",
      "Process simple requests (invoice copy, payment link)",
      "Escalate complex billing issues to finance team"
    ],
    automationLevel: "85%",
    averageResolutionTime: "3-10 minutes"
  },
  {
    scenario: "Product Information Request",
    trigger: "Prospect asks about features, pricing, or compatibility",
    steps: [
      "Identify specific product and information requested",
      "Generate customized product information",
      "Include relevant case studies and testimonials",
      "Offer demo or trial if appropriate",
      "Follow up with sales team notification"
    ],
    automationLevel: "90%",
    averageResolutionTime: "1-3 minutes"
  }
];

const performanceMetrics = [
  {
    category: "Response Metrics",
    metrics: [
      { metric: "First Response Time", target: "<30 seconds", typical: "2-8 hours without automation" },
      { metric: "Resolution Time", target: "<5 minutes for common issues", typical: "2-24 hours" },
      { metric: "Availability", target: "99.9% uptime, 24/7", typical: "Business hours only" },
      { metric: "Consistency", target: "100% brand voice adherence", typical: "Varies by agent" }
    ]
  },
  {
    category: "Quality Metrics",
    metrics: [
      { metric: "Automation Rate", target: "70-90% of inquiries", typical: "0% (manual only)" },
      { metric: "Customer Satisfaction", target: "4.5+ stars average", typical: "3.5-4.0 stars" },
      { metric: "First Contact Resolution", target: "85%+", typical: "60-70%" },
      { metric: "Escalation Rate", target: "<15%", typical: "20-30%" }
    ]
  },
  {
    category: "Cost Metrics",
    metrics: [
      { metric: "Cost per Ticket", target: "£0.50-£2.00", typical: "£15-£30" },
      { metric: "Support Staff Required", target: "60-80% reduction", typical: "1:100-200 ratio" },
      { metric: "Training Time", target: "Minimal ongoing", typical: "40+ hours initial" },
      { metric: "Operational Overhead", target: "Automated monitoring", typical: "Manual management" }
    ]
  }
];

const industrySpecifics = [
  {
    industry: "E-commerce & Retail",
    commonIssues: ["Order tracking", "Returns/exchanges", "Product information", "Payment problems"],
    specializations: [
      "Integration with order management systems",
      "Inventory status checking and updates", 
      "Shipping carrier API connections",
      "Return/refund policy automation"
    ],
    automationPotential: "85-95%"
  },
  {
    industry: "SaaS & Technology",
    commonIssues: ["Feature questions", "Bug reports", "Account management", "Integration support"],
    specializations: [
      "Technical knowledge base integration",
      "Code snippet and API documentation",
      "User permission and access management",
      "Feature usage analytics and recommendations"
    ],
    automationPotential: "70-80%"
  },
  {
    industry: "Healthcare",
    commonIssues: ["Appointment scheduling", "Insurance questions", "Medical records", "Prescription refills"],
    specializations: [
      "HIPAA compliance and secure communication",
      "Integration with patient management systems",
      "Medical terminology and knowledge base",
      "Appointment booking and reminder automation"
    ],
    automationPotential: "60-70%"
  },
  {
    industry: "Financial Services",
    commonIssues: ["Account inquiries", "Transaction disputes", "Product information", "Security concerns"],
    specializations: [
      "Financial regulation compliance",
      "Fraud detection and security protocols",
      "Account verification and authentication",
      "Regulatory reporting and documentation"
    ],
    automationPotential: "65-75%"
  }
];

const bestPractices = [
  {
    practice: "Human-in-the-Loop Design",
    description: "Always maintain human oversight and escalation paths for complex issues",
    implementation: [
      "Set clear escalation triggers based on complexity scores",
      "Preserve full conversation context for human handoffs",
      "Train agents on working with AI-generated insights",
      "Regular review of automated responses for quality"
    ]
  },
  {
    practice: "Continuous Learning & Improvement",
    description: "Implement feedback loops to improve automation over time",
    implementation: [
      "Track resolution success rates by issue type",
      "Analyze customer satisfaction scores for automated responses",
      "Regular knowledge base updates based on new patterns",
      "A/B testing for response templates and workflows"
    ]
  },
  {
    practice: "Brand Voice Consistency",
    description: "Maintain consistent brand personality across all automated interactions",
    implementation: [
      "Develop comprehensive brand voice guidelines",
      "Train AI models on approved company communication",
      "Regular audits of automated response quality",
      "Templates that adapt to different customer personas"
    ]
  },
  {
    practice: "Privacy & Security First",
    description: "Ensure all customer data is handled securely and in compliance with regulations",
    implementation: [
      "End-to-end encryption for all customer communications",
      "GDPR/CCPA compliance for data handling and storage",
      "Regular security audits and penetration testing",
      "Clear data retention and deletion policies"
    ]
  }
];

export default function OpenClawCustomerSupportPage() {
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
              <span className="text-white/60 text-sm font-medium">Customer Support Automation Guide</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl md:text-[3.2rem] font-extrabold text-white mb-6 leading-[1.05] tracking-tight">
              How OpenClaw Agents
              <br />
              <span className="text-orange">Handle Customer Support</span>
            </h1>

            <p className="text-white/60 text-lg md:text-xl max-w-[540px] mb-10 leading-relaxed">
              Complete guide to automating customer support with OpenClaw. From ticket routing to 24/7 responses, learn how to deliver exceptional support at scale.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#capabilities"
                className="inline-flex items-center justify-center bg-orange text-white px-8 py-4 rounded-btn font-semibold text-base hover:bg-orange-hover transition-all hover:-translate-y-0.5 shadow-glow-orange"
              >
                Explore Support Automation
              </a>
              <a
                href="/guides"
                className="inline-flex items-center justify-center bg-white/5 text-white px-8 py-4 rounded-btn font-semibold text-base hover:bg-white/10 transition-all border border-white/10"
              >
                ← All Guides
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#fafbfc] to-transparent" />
      </section>

      {/* Overview */}
      <section id="capabilities" className="bg-light py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="max-w-[800px] mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-8">
              Transform Customer Support with AI Agents
            </h2>
            <div className="prose prose-lg max-w-none text-muted leading-relaxed space-y-6">
              <p>
                OpenClaw customer support agents operate 24/7, handling everything from simple inquiries to complex issue resolution. Unlike basic chatbots, these agents understand context, maintain conversation history, and can perform actions across your business systems.
              </p>
              <p>
                The key advantage is intelligence combined with automation. Your OpenClaw support agent doesn't just follow scripts—it analyzes each inquiry, accesses relevant data, and generates personalized responses that sound human while being available instantly, around the clock.
              </p>
              <p>
                Most businesses see 70-90% of support inquiries handled automatically, with significant improvements in response times, customer satisfaction, and cost per ticket. The remaining complex cases are escalated to human agents with full context and recommended solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="bg-white py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Core Support Automation Capabilities
            </h2>
            <p className="text-muted text-lg max-w-[600px] mx-auto">
              Six essential capabilities that make OpenClaw customer support automation highly effective.
            </p>
          </div>

          <div className="space-y-12">
            {supportCapabilities.map((capability, index) => (
              <div key={index} className="bg-surface rounded-box p-8 shadow-card">
                <div className="flex items-start gap-6">
                  <div className="bg-orange text-white font-bold text-xl w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading font-bold text-xl text-dark mb-3">{capability.capability}</h3>
                    <p className="text-muted leading-relaxed mb-6">{capability.description}</p>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold text-dark mb-3 flex items-center gap-2">
                          <span className="text-blue-500">⚙️</span> Key Features
                        </h4>
                        <ul className="space-y-2">
                          {capability.features.map((feature, idx) => (
                            <li key={idx} className="text-muted text-sm flex gap-3">
                              <span className="text-orange mt-0.5">▸</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-dark mb-3 flex items-center gap-2">
                          <span className="text-green-500">✨</span> Business Benefits
                        </h4>
                        <ul className="space-y-2">
                          {capability.benefits.map((benefit, idx) => (
                            <li key={idx} className="text-muted text-sm flex gap-3">
                              <span className="text-green-500 mt-0.5">✓</span>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Levels */}
      <section className="bg-navy text-white py-24 relative overflow-hidden grain">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue/5 rounded-full blur-[150px]" />

        <div className="max-w-[1140px] mx-auto px-6 relative z-10">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Support Automation Implementation Levels
            </h2>
            <p className="text-white/60 text-lg max-w-[600px] mx-auto">
              Three tiers of customer support automation, from basic FAQ handling to enterprise-grade support hubs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {implementationLevels.map((level, index) => (
              <div key={index} className="bg-white/[0.03] border border-white/[0.06] rounded-box p-8">
                <div className="text-center mb-6">
                  <h3 className="font-heading font-bold text-xl text-white mb-2">{level.level}</h3>
                  <div className="text-orange text-sm font-medium">{level.timeframe}</div>
                  <p className="text-white/60 text-sm mt-3">{level.description}</p>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-white mb-3">Components:</h4>
                  <ul className="space-y-2">
                    {level.components.map((component, idx) => (
                      <li key={idx} className="text-white/70 text-sm flex gap-3">
                        <span className="text-orange mt-0.5">●</span>
                        {component}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-white mb-2">Best For:</h4>
                  <p className="text-white/60 text-sm">{level.suitableFor}</p>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-white/60">Impact:</span>
                    <span className="text-green-400 font-medium">{level.expectedImpact}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/60">Investment:</span>
                    <span className="text-orange font-medium">{level.cost}</span>
                  </div>
                </div>

                <div className="mt-6">
                  <a
                    href="#contact"
                    className={`block text-center px-6 py-3 rounded-btn font-semibold text-sm transition-all ${
                      index === 1 
                        ? "bg-orange text-white hover:bg-orange-hover shadow-glow-orange" 
                        : "bg-white/10 text-white border border-white/20 hover:bg-white/20"
                    }`}
                  >
                    {index === 1 ? "Most Popular" : "Learn More"}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Channel Integrations */}
      <section className="bg-surface py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Multi-Channel Support Integration
            </h2>
            <p className="text-muted text-lg max-w-[600px] mx-auto">
              Connect OpenClaw agents to all your customer communication channels for unified support experience.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {channelIntegrations.map((channel, index) => (
              <div key={index} className="bg-white rounded-box p-8 shadow-card">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-heading font-bold text-lg text-dark">{channel.channel}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    channel.setupComplexity === 'Low' ? 'bg-green-100 text-green-700' :
                    channel.setupComplexity === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {channel.setupComplexity} Setup
                  </span>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-dark text-sm mb-2">Popular Integrations:</h4>
                  <div className="flex flex-wrap gap-2">
                    {channel.integrations.map((integration, idx) => (
                      <span key={idx} className="bg-orange/10 text-orange px-2 py-1 rounded-full text-xs">
                        {integration}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-dark text-sm mb-3">Automation Capabilities:</h4>
                  <ul className="space-y-2">
                    {channel.capabilities.map((capability, idx) => (
                      <li key={idx} className="text-muted text-sm flex gap-3">
                        <span className="text-orange mt-0.5">▸</span>
                        {capability}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Examples */}
      <section className="bg-white py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Real Support Workflow Examples
            </h2>
            <p className="text-muted text-lg max-w-[600px] mx-auto">
              See how OpenClaw agents handle common customer support scenarios from start to finish.
            </p>
          </div>

          <div className="space-y-8">
            {workflowExamples.map((workflow, index) => (
              <div key={index} className="bg-surface rounded-box p-8 shadow-card">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div>
                    <h3 className="font-heading font-bold text-lg text-dark mb-3">{workflow.scenario}</h3>
                    <p className="text-muted text-sm mb-4"><strong>Trigger:</strong> {workflow.trigger}</p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-muted">Automation Level:</span>
                        <div className="font-semibold text-green-600">{workflow.automationLevel}</div>
                      </div>
                      <div>
                        <span className="text-muted">Avg Resolution:</span>
                        <div className="font-semibold text-orange">{workflow.averageResolutionTime}</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-2">
                    <h4 className="font-semibold text-dark mb-3">Automated Workflow Steps:</h4>
                    <ol className="space-y-3">
                      {workflow.steps.map((step, idx) => (
                        <li key={idx} className="flex gap-4">
                          <span className="bg-orange text-white font-bold text-sm w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">
                            {idx + 1}
                          </span>
                          <span className="text-muted text-sm">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="bg-navy text-white py-24 relative overflow-hidden grain">
        <div className="absolute bottom-0 left-[20%] w-[500px] h-[500px] bg-orange/5 rounded-full blur-[120px]" />

        <div className="max-w-[1140px] mx-auto px-6 relative z-10">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Support Performance Metrics & Targets
            </h2>
            <p className="text-white/60 text-lg max-w-[600px] mx-auto">
              Key performance indicators and benchmarks for OpenClaw customer support automation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {performanceMetrics.map((category, index) => (
              <div key={index} className="bg-white/[0.03] border border-white/[0.06] rounded-box p-8">
                <h3 className="font-heading font-bold text-xl text-white mb-6 text-center">
                  {category.category}
                </h3>
                
                <div className="space-y-6">
                  {category.metrics.map((metric, idx) => (
                    <div key={idx} className="border-b border-white/10 pb-4 last:border-b-0">
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-white/80 text-sm font-medium">{metric.metric}</span>
                      </div>
                      <div className="space-y-2 text-xs">
                        <div className="flex justify-between">
                          <span className="text-white/60">OpenClaw Target:</span>
                          <span className="text-green-400 font-medium">{metric.target}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-white/60">Typical Manual:</span>
                          <span className="text-orange">{metric.typical}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Specifics */}
      <section className="bg-light py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Industry-Specific Support Automation
            </h2>
            <p className="text-muted text-lg max-w-[600px] mx-auto">
              Tailored approaches for different industries with specific requirements and compliance needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {industrySpecifics.map((industry, index) => (
              <div key={index} className="bg-white rounded-box p-8 shadow-card">
                <h3 className="font-heading font-bold text-xl text-dark mb-4">{industry.industry}</h3>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-dark mb-3">Common Support Issues:</h4>
                  <div className="flex flex-wrap gap-2">
                    {industry.commonIssues.map((issue, idx) => (
                      <span key={idx} className="bg-surface text-muted px-3 py-1 rounded-full text-sm">
                        {issue}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-dark mb-3">Specialized Capabilities:</h4>
                  <ul className="space-y-2">
                    {industry.specializations.map((spec, idx) => (
                      <li key={idx} className="text-muted text-sm flex gap-3">
                        <span className="text-orange mt-0.5">▸</span>
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted text-sm">Automation Potential:</span>
                    <span className="font-semibold text-green-600">{industry.automationPotential}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className="bg-white py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Support Automation Best Practices
            </h2>
            <p className="text-muted text-lg max-w-[600px] mx-auto">
              Essential practices to ensure successful implementation and ongoing optimization of customer support automation.
            </p>
          </div>

          <div className="space-y-8">
            {bestPractices.map((practice, index) => (
              <div key={index} className="bg-surface rounded-box p-8 shadow-card">
                <h3 className="font-heading font-bold text-xl text-dark mb-4">{practice.practice}</h3>
                <p className="text-muted leading-relaxed mb-6">{practice.description}</p>
                
                <div>
                  <h4 className="font-semibold text-dark mb-4">Implementation Steps:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {practice.implementation.map((step, idx) => (
                      <div key={idx} className="flex gap-3">
                        <span className="bg-orange text-white font-bold text-sm w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">
                          {idx + 1}
                        </span>
                        <span className="text-muted text-sm">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Steps CTA */}
      <section className="bg-navy text-white py-24 relative overflow-hidden grain">
        <div className="absolute bottom-0 left-[20%] w-[500px] h-[500px] bg-orange/5 rounded-full blur-[120px]" />

        <div className="max-w-[1140px] mx-auto px-6 relative z-10">
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-box p-12 text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Automate Your Customer Support?
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-8 max-w-[600px] mx-auto">
              Get a custom assessment of your current support operations and see how OpenClaw can reduce costs while improving customer satisfaction.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="text-center">
                <div className="text-2xl mb-3">📊</div>
                <h3 className="font-heading font-bold text-white mb-2">Support Analysis</h3>
                <p className="text-white/60 text-sm">Assess your current support metrics and automation opportunities</p>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-3">🎯</div>
                <h3 className="font-heading font-bold text-white mb-2">Custom Demo</h3>
                <p className="text-white/60 text-sm">See OpenClaw handling your specific support scenarios</p>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-3">🚀</div>
                <h3 className="font-heading font-bold text-white mb-2">Implementation Plan</h3>
                <p className="text-white/60 text-sm">Detailed roadmap for automating your support operations</p>
              </div>
            </div>
            
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-orange text-white px-10 py-4 rounded-btn font-bold text-lg hover:bg-orange-hover transition-all hover:-translate-y-0.5 shadow-xl"
            >
              Get Your Support Automation Assessment →
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      
      {/* Related Guides */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-[1140px] mx-auto px-6">
          <h2 className="font-heading text-2xl font-bold text-navy mb-8 text-center">Related Guides</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-[800px] mx-auto">
            <a href="/guides/openclaw-skills-guide" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-slate-100">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">OpenClaw Skills: Complete Guide</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/openclaw-cron-jobs" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-slate-100">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">OpenClaw Cron Jobs: Automation Guide</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/what-is-openclaw-2026" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-slate-100">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">What is OpenClaw? Complete Guide 2026</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/openclaw-setup-mac" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-slate-100">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">OpenClaw Setup Guide for Mac 2026</h3>
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
                Support Automation
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Transform Your
                <br />
                <span className="text-orange">Customer Support</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Free consultation to assess your support operations and design a custom automation plan. See how OpenClaw can reduce costs while improving customer experience.
              </p>
              
              <div className="space-y-4 text-white/50 text-sm">
                <div className="flex gap-3 items-center">
                  <span className="text-orange">⚡</span>
                  <span>Support workflow analysis and automation opportunities</span>
                </div>
                <div className="flex gap-3 items-center">
                  <span className="text-orange">📈</span>
                  <span>ROI projections and cost-benefit analysis</span>
                </div>
                <div className="flex gap-3 items-center">
                  <span className="text-orange">🛠️</span>
                  <span>Custom implementation plan with timeline</span>
                </div>
              </div>
            </div>

            <div className="bg-white/[0.03] border border-white/[0.06] rounded-box p-8">
              <h3 className="font-heading font-bold text-xl text-white mb-1">Support Automation Consultation</h3>
              <p className="text-white/40 text-sm mb-6">Assess your customer support automation potential</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}