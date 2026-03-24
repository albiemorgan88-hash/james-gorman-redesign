import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "How to Set Up an OpenClaw Agent Team for Your Business | Complete Guide 2026",
  description: "Step-by-step guide to setting up an OpenClaw agent team for your business. Learn agent roles, specializations, workflows, and orchestration for maximum efficiency.",
  keywords: [
    "openclaw agent team setup",
    "multi agent orchestration", 
    "openclaw team structure",
    "agent specialization",
    "openclaw workflow design",
    "agent coordination",
    "openclaw business setup",
    "agent team roles"
  ],
  alternates: { canonical: "https://openclawconsultant.co.uk/guides/openclaw-agent-team-setup" },
  openGraph: {
    title: "How to Set Up an OpenClaw Agent Team for Your Business | Complete Guide 2026",
    description: "Step-by-step guide to setting up an OpenClaw agent team for your business. Learn agent roles, specializations, and workflows.",
    url: "https://openclawconsultant.co.uk/guides/openclaw-agent-team-setup",
    type: "article",
  },
};

const agentRoles = [
  {
    role: "Operations Manager",
    description: "Orchestrates workflow, delegates tasks, monitors progress, handles escalations",
    specializations: ["Task delegation", "Process monitoring", "Resource allocation", "Priority management"],
    suitableFor: "Central coordination hub for complex multi-agent workflows"
  },
  {
    role: "Customer Success Agent", 
    description: "Handles customer interactions, support tickets, feedback analysis, satisfaction tracking",
    specializations: ["Support automation", "Ticket routing", "Response generation", "Customer insights"],
    suitableFor: "Businesses with high customer interaction volumes"
  },
  {
    role: "Marketing Specialist",
    description: "Content creation, SEO analysis, campaign management, social media automation",
    specializations: ["Content generation", "SEO optimization", "Campaign automation", "Analytics reporting"],
    suitableFor: "Companies focused on growth and digital marketing"
  },
  {
    role: "Data Analyst",
    description: "Reports generation, trend analysis, performance monitoring, business intelligence",
    specializations: ["Data processing", "Report automation", "Trend identification", "Dashboard updates"],
    suitableFor: "Data-driven businesses requiring regular insights"
  },
  {
    role: "Financial Controller",
    description: "Invoice processing, expense tracking, financial reporting, compliance monitoring",
    specializations: ["Transaction processing", "Compliance checks", "Report generation", "Budget monitoring"],
    suitableFor: "Businesses with complex financial operations"
  },
  {
    role: "Development Assistant",
    description: "Code reviews, deployment automation, documentation, system monitoring",
    specializations: ["Code analysis", "CI/CD automation", "System monitoring", "Documentation updates"],
    suitableFor: "Software companies and tech-heavy businesses"
  }
];

const setupPhases = [
  {
    phase: "1. Planning & Architecture",
    duration: "Week 1-2",
    activities: [
      "Map your current business processes and identify automation opportunities",
      "Define agent roles based on your specific workflow requirements", 
      "Design communication patterns between agents and human teams",
      "Establish success metrics and monitoring requirements"
    ],
    deliverables: ["Agent architecture diagram", "Role definitions", "Communication protocols", "Success criteria"]
  },
  {
    phase: "2. Core Infrastructure", 
    duration: "Week 3-4",
    activities: [
      "Set up OpenClaw gateway and core infrastructure components",
      "Configure security hardening and access controls",
      "Implement memory systems and data persistence",
      "Establish monitoring and logging frameworks"
    ],
    deliverables: ["Running OpenClaw instance", "Security configuration", "Memory setup", "Monitoring dashboard"]
  },
  {
    phase: "3. Agent Development",
    duration: "Week 5-8", 
    activities: [
      "Create specialized agents with defined roles and capabilities",
      "Develop custom skills for business-specific integrations",
      "Implement inter-agent communication protocols",
      "Build escalation and error handling mechanisms"
    ],
    deliverables: ["Specialized agents", "Custom skills", "Communication flows", "Error handling"]
  },
  {
    phase: "4. Integration & Testing",
    duration: "Week 9-10",
    activities: [
      "Connect agents to existing business systems and APIs",
      "Implement workflow orchestration and task delegation",
      "Conduct comprehensive testing of agent interactions",
      "Train team members on agent management and oversight"
    ],
    deliverables: ["System integrations", "Orchestration flows", "Test results", "Team training"]
  },
  {
    phase: "5. Deployment & Optimization",
    duration: "Week 11-12",
    activities: [
      "Deploy agents to production environment with monitoring",
      "Implement performance optimization based on real usage",
      "Establish ongoing maintenance and update procedures",
      "Create documentation and knowledge transfer materials"
    ],
    deliverables: ["Production deployment", "Performance metrics", "Maintenance procedures", "Documentation"]
  }
];

const teamStructures = [
  {
    businessType: "Small Business (1-10 employees)",
    structure: "Hub & Spoke",
    description: "Single Operations Manager coordinating 2-3 specialized agents",
    agents: ["Operations Manager", "Customer Success", "Marketing Specialist"],
    coordination: "Direct delegation from Operations Manager to specialists",
    benefits: "Simple coordination, easy management, quick setup"
  },
  {
    businessType: "Growing Business (10-50 employees)",
    structure: "Departmental Teams", 
    description: "Specialized agent teams for each business function",
    agents: ["Operations Manager", "Customer Success", "Marketing Team", "Financial Controller", "Data Analyst"],
    coordination: "Department leads coordinate within teams, Operations Manager handles cross-department",
    benefits: "Scalable structure, specialized expertise, clear ownership"
  },
  {
    businessType: "Enterprise (50+ employees)",
    structure: "Matrix Organization",
    description: "Complex multi-layer agent hierarchy with specialized sub-teams",
    agents: ["Executive Agent", "Department Managers", "Specialist Teams", "Support Agents"],
    coordination: "Multi-level hierarchy with matrix reporting for cross-functional projects",
    benefits: "Maximum flexibility, sophisticated workflows, enterprise-scale capabilities"
  }
];

const coordinationPatterns = [
  {
    pattern: "Direct Delegation",
    description: "Manager agent directly assigns tasks to specialist agents",
    useCase: "Simple linear workflows, clear task ownership",
    pros: ["Easy to understand", "Clear accountability", "Fast execution"],
    cons: ["Limited flexibility", "Manager bottleneck", "Doesn't scale"]
  },
  {
    pattern: "Event-Driven Coordination",
    description: "Agents respond to events and notifications from other agents",
    useCase: "Complex workflows, parallel processing, real-time responses", 
    pros: ["High scalability", "Parallel processing", "Decentralized"],
    cons: ["Complex debugging", "Potential race conditions", "Harder to monitor"]
  },
  {
    pattern: "Queue-Based Processing",
    description: "Tasks placed in queues, agents pick up work based on availability",
    useCase: "High-volume processing, load balancing, fault tolerance",
    pros: ["Load balancing", "Fault tolerance", "Easy scaling"],
    cons: ["Task prioritization complexity", "Potential delays", "Queue management overhead"]
  },
  {
    pattern: "Hierarchical Approval",
    description: "Multi-level approval chains with escalation mechanisms", 
    useCase: "Compliance-heavy industries, financial approvals, risk management",
    pros: ["Compliance adherence", "Risk control", "Clear audit trails"],
    cons: ["Slower processing", "Bureaucratic overhead", "Multiple failure points"]
  }
];

const integrationPoints = [
  {
    system: "CRM Systems",
    integrationMethod: "API + Webhooks",
    agentRoles: ["Customer Success", "Marketing Specialist"],
    capabilities: ["Lead processing", "Contact updates", "Pipeline management", "Activity tracking"]
  },
  {
    system: "Accounting Software",
    integrationMethod: "API + File Processing", 
    agentRoles: ["Financial Controller", "Data Analyst"],
    capabilities: ["Invoice processing", "Expense tracking", "Report generation", "Reconciliation"]
  },
  {
    system: "Project Management",
    integrationMethod: "API + Notifications",
    agentRoles: ["Operations Manager", "Development Assistant"],
    capabilities: ["Task creation", "Status updates", "Time tracking", "Resource allocation"]
  },
  {
    system: "E-commerce Platforms",
    integrationMethod: "API + Webhooks",
    agentRoles: ["Customer Success", "Data Analyst"],
    capabilities: ["Order processing", "Inventory updates", "Customer communication", "Analytics"]
  }
];

const monitoringMetrics = [
  {
    category: "Agent Performance",
    metrics: ["Task completion rate", "Response time", "Error frequency", "Resource utilization"],
    thresholds: ["95% completion", "<30s response", "<1% errors", "<80% CPU"]
  },
  {
    category: "Business Impact", 
    metrics: ["Process automation rate", "Cost reduction", "Time savings", "Quality improvement"],
    thresholds: ["80% automation", "30% cost reduction", "50% time savings", "95% quality score"]
  },
  {
    category: "System Health",
    metrics: ["Uptime", "Memory usage", "Storage consumption", "Network latency"],
    thresholds: ["99.9% uptime", "<4GB memory", "<100GB storage", "<100ms latency"]
  }
];

export default function OpenClawAgentTeamSetupPage() {
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
              <span className="text-white/60 text-sm font-medium">OpenClaw Agent Team Setup Guide</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl md:text-[3.2rem] font-extrabold text-white mb-6 leading-[1.05] tracking-tight">
              How to Set Up an
              <br />
              <span className="text-orange">OpenClaw Agent Team</span>
            </h1>

            <p className="text-white/60 text-lg md:text-xl max-w-[540px] mb-10 leading-relaxed">
              Complete guide to building a specialized OpenClaw agent team for your business. From planning to deployment, learn agent roles, coordination patterns, and best practices.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#planning"
                className="inline-flex items-center justify-center bg-orange text-white px-8 py-4 rounded-btn font-semibold text-base hover:bg-orange-hover transition-all hover:-translate-y-0.5 shadow-glow-orange"
              >
                Start Planning Your Team
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
      <section id="planning" className="bg-light py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="max-w-[800px] mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-8">
              Why Agent Teams Outperform Single Agents
            </h2>
            <div className="prose prose-lg max-w-none text-muted leading-relaxed space-y-6">
              <p>
                While a single OpenClaw agent can handle many tasks, specialized agent teams unlock exponentially greater business value. Each agent becomes an expert in specific domains, communicating and coordinating to handle complex, multi-step business processes automatically.
              </p>
              <p>
                Think of it like hiring specialists instead of generalists. A marketing agent understands SEO, content creation, and campaign optimization. A customer success agent excels at support ticket routing, response generation, and satisfaction tracking. Together, they create a cohesive system that operates 24/7.
              </p>
              <p>
                The key is proper architecture. Random agents working independently create chaos. Properly orchestrated agent teams with clear roles, communication protocols, and escalation procedures create a force multiplier for your business operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Agent Roles */}
      <section className="bg-white py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Essential Agent Roles for Business Teams
            </h2>
            <p className="text-muted text-lg max-w-[600px] mx-auto">
              Six core agent specializations that form the backbone of most successful OpenClaw implementations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {agentRoles.map((role, index) => (
              <div key={index} className="bg-surface rounded-box p-8 card-lift">
                <div className="text-2xl mb-4">
                  {index === 0 ? "🎯" : index === 1 ? "🤝" : index === 2 ? "📱" : index === 3 ? "📊" : index === 4 ? "💰" : "⚙️"}
                </div>
                <h3 className="font-heading font-bold text-xl text-dark mb-3">{role.role}</h3>
                <p className="text-muted text-sm leading-relaxed mb-4">{role.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-dark text-sm mb-2">Key Specializations:</h4>
                  <ul className="text-muted text-xs space-y-1">
                    {role.specializations.map((spec, idx) => (
                      <li key={idx} className="flex gap-2 items-center">
                        <span className="text-orange">▸</span>
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-l-4 border-orange pl-4">
                  <p className="text-dark font-medium text-xs">{role.suitableFor}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Setup Phases */}
      <section className="bg-navy text-white py-24 relative overflow-hidden grain">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue/5 rounded-full blur-[150px]" />

        <div className="max-w-[1140px] mx-auto px-6 relative z-10">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              5-Phase Agent Team Implementation
            </h2>
            <p className="text-white/60 text-lg max-w-[600px] mx-auto">
              Systematic approach to building your OpenClaw agent team from planning to production deployment.
            </p>
          </div>

          <div className="space-y-8">
            {setupPhases.map((phase, index) => (
              <div key={index} className="bg-white/[0.03] border border-white/[0.06] rounded-box p-8">
                <div className="flex items-start gap-6">
                  <div className="bg-orange text-white font-bold text-xl w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4">
                      <h3 className="font-heading font-bold text-xl text-white">{phase.phase}</h3>
                      <span className="text-orange font-medium text-sm">{phase.duration}</span>
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold text-white mb-3">Key Activities:</h4>
                        <ul className="space-y-2 text-white/60 text-sm">
                          {phase.activities.map((activity, idx) => (
                            <li key={idx} className="flex gap-3">
                              <span className="text-orange mt-0.5">▸</span>
                              {activity}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-3">Deliverables:</h4>
                        <ul className="space-y-2 text-white/60 text-sm">
                          {phase.deliverables.map((deliverable, idx) => (
                            <li key={idx} className="flex gap-3">
                              <span className="text-green-400 mt-0.5">✓</span>
                              {deliverable}
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

      {/* Team Structures */}
      <section className="bg-surface py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Agent Team Structures by Business Size
            </h2>
            <p className="text-muted text-lg max-w-[600px] mx-auto">
              Different organizational patterns optimized for various business sizes and complexity levels.
            </p>
          </div>

          <div className="space-y-8">
            {teamStructures.map((structure, index) => (
              <div key={index} className="bg-white rounded-box p-8 shadow-card">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div>
                    <h3 className="font-heading font-bold text-xl text-dark mb-2">{structure.businessType}</h3>
                    <div className="inline-flex items-center bg-orange/10 text-orange px-3 py-1 rounded-full text-sm font-medium mb-4">
                      {structure.structure}
                    </div>
                    <p className="text-muted text-sm">{structure.description}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-dark mb-3">Agent Composition:</h4>
                    <ul className="space-y-2 text-muted text-sm">
                      {structure.agents.map((agent, idx) => (
                        <li key={idx} className="flex gap-3">
                          <span className="text-orange">●</span>
                          {agent}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-dark mb-3">Coordination Model:</h4>
                    <p className="text-muted text-sm mb-4">{structure.coordination}</p>
                    <div className="border-l-4 border-orange pl-4">
                      <p className="text-dark font-medium text-sm">{structure.benefits}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coordination Patterns */}
      <section className="bg-white py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Agent Coordination Patterns
            </h2>
            <p className="text-muted text-lg max-w-[600px] mx-auto">
              Four proven patterns for organizing agent communication and task coordination.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coordinationPatterns.map((pattern, index) => (
              <div key={index} className="bg-surface rounded-box p-8 shadow-card">
                <h3 className="font-heading font-bold text-xl text-dark mb-3">{pattern.pattern}</h3>
                <p className="text-muted text-sm leading-relaxed mb-4">{pattern.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-dark text-sm mb-2">Best For:</h4>
                  <p className="text-muted text-xs">{pattern.useCase}</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-dark text-sm mb-2">Pros:</h4>
                    <ul className="space-y-1">
                      {pattern.pros.map((pro, idx) => (
                        <li key={idx} className="text-green-600 text-xs flex gap-2">
                          <span>+</span>
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark text-sm mb-2">Cons:</h4>
                    <ul className="space-y-1">
                      {pattern.cons.map((con, idx) => (
                        <li key={idx} className="text-red-600 text-xs flex gap-2">
                          <span>-</span>
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Points */}
      <section className="bg-light py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Key System Integrations
            </h2>
            <p className="text-muted text-lg max-w-[600px] mx-auto">
              Essential integrations that connect your agent team to existing business systems.
            </p>
          </div>

          <div className="space-y-6">
            {integrationPoints.map((integration, index) => (
              <div key={index} className="bg-white rounded-box p-8 shadow-card">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                  <div>
                    <h3 className="font-heading font-bold text-lg text-dark mb-2">{integration.system}</h3>
                    <span className="text-orange text-sm font-medium">{integration.integrationMethod}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark text-sm mb-2">Involved Agents:</h4>
                    <ul className="text-muted text-xs space-y-1">
                      {integration.agentRoles.map((role, idx) => (
                        <li key={idx}>{role}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="lg:col-span-2">
                    <h4 className="font-semibold text-dark text-sm mb-2">Automation Capabilities:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {integration.capabilities.map((capability, idx) => (
                        <span key={idx} className="text-muted text-xs flex gap-2">
                          <span className="text-orange">▸</span>
                          {capability}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Monitoring & Metrics */}
      <section className="bg-navy text-white py-24 relative overflow-hidden grain">
        <div className="absolute bottom-0 left-[20%] w-[500px] h-[500px] bg-orange/5 rounded-full blur-[120px]" />

        <div className="max-w-[1140px] mx-auto px-6 relative z-10">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Monitoring Your Agent Team Performance
            </h2>
            <p className="text-white/60 text-lg max-w-[600px] mx-auto">
              Essential metrics and thresholds to ensure your agent team operates at peak efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {monitoringMetrics.map((category, index) => (
              <div key={index} className="bg-white/[0.03] border border-white/[0.06] rounded-box p-8">
                <div className="text-2xl mb-4">
                  {index === 0 ? "⚡" : index === 1 ? "📈" : "🔧"}
                </div>
                <h3 className="font-heading font-bold text-xl text-white mb-4">{category.category}</h3>
                
                <div className="space-y-4">
                  {category.metrics.map((metric, idx) => (
                    <div key={idx} className="border-b border-white/10 pb-3 last:border-b-0">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-white/80 text-sm">{metric}</span>
                      </div>
                      <div className="text-orange text-xs font-medium">{category.thresholds[idx]}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white/[0.03] border border-white/[0.06] rounded-box p-8">
            <h3 className="font-heading font-bold text-xl text-white mb-4">Monitoring Best Practices</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white/60 text-sm">
              <ul className="space-y-3">
                <li className="flex gap-3"><span className="text-orange">▸</span>Set up automated alerts for threshold breaches</li>
                <li className="flex gap-3"><span className="text-orange">▸</span>Review agent performance metrics weekly</li>
                <li className="flex gap-3"><span className="text-orange">▸</span>Track business impact alongside technical metrics</li>
              </ul>
              <ul className="space-y-3">
                <li className="flex gap-3"><span className="text-orange">▸</span>Maintain performance dashboards for stakeholders</li>
                <li className="flex gap-3"><span className="text-orange">▸</span>Document and analyze performance trends monthly</li>
                <li className="flex gap-3"><span className="text-orange">▸</span>Adjust thresholds based on business growth</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="bg-white py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="bg-surface rounded-box p-12 text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-6">
              Ready to Build Your OpenClaw Agent Team?
            </h2>
            <p className="text-muted text-lg leading-relaxed mb-8 max-w-[600px] mx-auto">
              Setting up a specialized agent team requires careful planning and technical expertise. Get professional guidance to ensure successful implementation and optimal performance.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="text-center">
                <div className="text-2xl mb-3">🏗️</div>
                <h3 className="font-heading font-bold text-dark mb-2">Architecture Planning</h3>
                <p className="text-muted text-sm">Design the optimal agent structure for your business needs</p>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-3">⚙️</div>
                <h3 className="font-heading font-bold text-dark mb-2">Technical Setup</h3>
                <p className="text-muted text-sm">Professional implementation and integration services</p>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-3">📚</div>
                <h3 className="font-heading font-bold text-dark mb-2">Team Training</h3>
                <p className="text-muted text-sm">Comprehensive training for your team on agent management</p>
              </div>
            </div>
            
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-orange text-white px-10 py-4 rounded-btn font-bold text-lg hover:bg-orange-hover transition-all hover:-translate-y-0.5 shadow-xl"
            >
              Get Agent Team Setup Consultation →
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
                Get Expert Help
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Build Your Perfect
                <br />
                <span className="text-orange">Agent Team</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Get professional guidance on agent team architecture, implementation, and optimization. Free consultation to design the perfect setup for your business.
              </p>
              
              <div className="space-y-4 text-white/50 text-sm">
                <div className="flex gap-3 items-center">
                  <span className="text-orange">🎯</span>
                  <span>Agent role definition and specialization planning</span>
                </div>
                <div className="flex gap-3 items-center">
                  <span className="text-orange">🔧</span>
                  <span>Technical architecture and integration design</span>
                </div>
                <div className="flex gap-3 items-center">
                  <span className="text-orange">📈</span>
                  <span>Performance monitoring and optimization strategies</span>
                </div>
              </div>
            </div>

            <div className="bg-white/[0.03] border border-white/[0.06] rounded-box p-8">
              <h3 className="font-heading font-bold text-xl text-white mb-1">Agent Team Consultation</h3>
              <p className="text-white/40 text-sm mb-6">Plan and build your optimal agent team structure</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}