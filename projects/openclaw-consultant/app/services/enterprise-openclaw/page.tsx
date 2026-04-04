import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Enterprise OpenClaw Setup",
  description: "Enterprise OpenClaw deployment with multi-agent architectures, advanced security, compliance frameworks, and team access management. Scalable AI automation for large organisations.",
  keywords: [
    "enterprise openclaw",
    "enterprise ai agents",
    "multi-agent architecture", 
    "openclaw consulting",
    "enterprise automation",
    "large scale ai deployment",
    "enterprise ai security",
    "openclaw compliance"
  ],
  alternates: { canonical: "https://openclawconsultant.co.uk/services/enterprise-openclaw" },
  openGraph: {
    title: "Enterprise OpenClaw Setup & Consulting | Multi-Agent Architecture",
    description: "Enterprise OpenClaw deployment with multi-agent architectures, advanced security, compliance frameworks, and team access management.",
    url: "https://openclawconsultant.co.uk/services/enterprise-openclaw",
    type: "article",
  },
};

const enterpriseCapabilities = [
  {
    capability: "Multi-Agent Orchestration",
    description: "Deploy specialized agent teams that collaborate and delegate tasks",
    features: [
      "Hierarchical agent structures with lead agents and specialists",
      "Inter-agent communication and task delegation protocols", 
      "Centralized orchestration with distributed execution",
      "Load balancing and failover across agent pools"
    ],
    benefits: [
      "Handle complex workflows requiring multiple specializations",
      "Scale agent capacity horizontally across departments",
      "Reduce single points of failure with redundant agents",
      "Optimize resource allocation based on workload patterns"
    ]
  },
  {
    capability: "Enterprise Security Framework",
    description: "Bank-grade security with zero-trust architecture and comprehensive audit trails",
    features: [
      "Role-based access control with granular permissions",
      "Data encryption at rest and in transit with key rotation",
      "Network segmentation and micro-perimeter security",
      "HMAC-signed audit logs with tamper detection"
    ],
    benefits: [
      "Meet regulatory requirements for financial services",
      "Protect sensitive data with defense-in-depth strategies",
      "Maintain compliance with GDPR, SOC 2, and ISO 27001",
      "Enable forensic investigation with immutable audit trails"
    ]
  },
  {
    capability: "Scalable Infrastructure",
    description: "Cloud-native architecture designed for enterprise-scale deployments",
    features: [
      "Kubernetes orchestration with auto-scaling",
      "Multi-region deployment with disaster recovery", 
      "Container-based isolation with security hardening",
      "Infrastructure as Code with GitOps workflows"
    ],
    benefits: [
      "Scale from hundreds to thousands of concurrent agents",
      "Ensure 99.9% uptime with redundant infrastructure",
      "Deploy consistently across development and production",
      "Reduce operational overhead with automated management"
    ]
  },
  {
    capability: "Advanced Monitoring & Analytics",
    description: "Real-time insights into agent performance, costs, and business impact",
    features: [
      "Performance dashboards with custom KPIs and SLAs",
      "Cost tracking with detailed attribution and forecasting",
      "Behavioral analytics for anomaly detection",
      "Integration with existing monitoring and alerting systems"
    ],
    benefits: [
      "Optimize agent performance and resource utilization",
      "Control AI spending with granular cost management", 
      "Detect security incidents and operational issues",
      "Demonstrate ROI with detailed business metrics"
    ]
  }
];

const deploymentOptions = [
  {
    option: "Fully Managed Cloud",
    description: "We handle everything - you focus on your business",
    included: [
      "Complete infrastructure setup and management",
      "24/7 monitoring, maintenance, and support",
      "Automatic scaling and load balancing",
      "Security hardening and compliance management",
      "Regular backups and disaster recovery",
      "Performance optimization and cost management"
    ],
    bestFor: [
      "Organizations wanting maximum convenience",
      "Teams without dedicated DevOps resources",
      "Rapid deployment requirements",
      "Variable or unpredictable workloads"
    ],
    pricing: "Starting from £2,500/month"
  },
  {
    option: "Hybrid Management",
    description: "Your infrastructure, our expertise and ongoing support",
    included: [
      "Initial setup on your cloud or on-premises infrastructure",
      "Security configuration and compliance hardening",
      "Team training and knowledge transfer",
      "Ongoing support and optimization guidance", 
      "Emergency response and incident handling",
      "Regular health checks and performance reviews"
    ],
    bestFor: [
      "Organizations with existing cloud infrastructure",
      "Teams wanting to maintain some control",
      "Compliance requirements for data residency",
      "Budget-conscious deployments with internal resources"
    ],
    pricing: "Starting from £1,200/month"
  },
  {
    option: "Setup & Training Only",
    description: "Professional setup with comprehensive training for your team",
    included: [
      "Complete OpenClaw enterprise deployment", 
      "Security hardening and compliance configuration",
      "Multi-agent architecture design and implementation",
      "Comprehensive team training and documentation",
      "Best practices guide and operational runbooks",
      "3 months of email support included"
    ],
    bestFor: [
      "Organizations with strong internal technical teams",
      "One-time setup with full knowledge transfer",
      "Budget constraints or preference for self-management",
      "Highly regulated environments requiring full control"
    ],
    pricing: "Starting from £8,500 one-time"
  }
];

const useCases = [
  {
    industry: "Financial Services",
    challenge: "Manual compliance monitoring and regulatory reporting",
    solution: "Automated compliance agents monitoring transactions, generating reports, and flagging suspicious activities",
    results: ["90% reduction in compliance preparation time", "100% audit trail coverage", "Early detection of regulatory changes"],
    agents: ["Compliance Monitor", "Report Generator", "Risk Assessor", "Audit Tracker"]
  },
  {
    industry: "Healthcare",
    challenge: "Patient data processing and clinical documentation burden",
    solution: "HIPAA-compliant agents for patient intake, medical records processing, and clinical decision support",
    results: ["60% reduction in documentation time", "Improved patient outcome tracking", "Enhanced care coordination"],
    agents: ["Patient Intake Assistant", "Clinical Documentation", "Treatment Tracker", "Appointment Coordinator"]
  },
  {
    industry: "Manufacturing",
    challenge: "Supply chain disruptions and quality control bottlenecks",
    solution: "Predictive agents monitoring supplier health, quality metrics, and production optimization",
    results: ["40% improvement in supply chain resilience", "25% reduction in quality issues", "Real-time production insights"],
    agents: ["Supply Chain Monitor", "Quality Inspector", "Production Optimizer", "Vendor Analyst"]
  },
  {
    industry: "Legal Services",
    challenge: "Document review and legal research taking extensive time",
    solution: "Legal research agents for case law analysis, contract review, and compliance verification", 
    results: ["70% faster document review", "Enhanced legal research accuracy", "Improved client response times"],
    agents: ["Contract Reviewer", "Legal Researcher", "Compliance Checker", "Case Analyst"]
  }
];

const implementationProcess = [
  {
    phase: "Discovery & Assessment",
    duration: "2-4 weeks",
    activities: [
      "Current system analysis and integration requirements",
      "Security assessment and compliance requirement gathering",
      "Use case prioritization and ROI analysis",
      "Architecture design and capacity planning"
    ],
    deliverables: [
      "Technical requirements document",
      "Security and compliance assessment",
      "Implementation roadmap and timeline",
      "Cost-benefit analysis and ROI projections"
    ]
  },
  {
    phase: "Infrastructure Setup", 
    duration: "3-6 weeks",
    activities: [
      "Environment provisioning and network configuration",
      "Security hardening and access control implementation",
      "Monitoring and logging system deployment",
      "Integration with existing enterprise systems"
    ],
    deliverables: [
      "Production-ready OpenClaw environment",
      "Security configuration documentation",
      "Monitoring dashboards and alerting",
      "Integration testing and validation"
    ]
  },
  {
    phase: "Agent Development",
    duration: "4-8 weeks", 
    activities: [
      "Custom agent development for priority use cases",
      "Integration with enterprise data sources and APIs",
      "Testing and validation in staging environment",
      "Performance optimization and scaling configuration"
    ],
    deliverables: [
      "Production-ready agent implementations",
      "Integration documentation and runbooks",
      "Performance benchmarks and optimization guide",
      "User acceptance testing completion"
    ]
  },
  {
    phase: "Training & Go-Live",
    duration: "2-3 weeks",
    activities: [
      "Team training on agent management and operations",
      "Gradual rollout with monitoring and support",
      "Performance monitoring and optimization",
      "Knowledge transfer and documentation handover"
    ],
    deliverables: [
      "Trained operations team",
      "Live production deployment",
      "Operational runbooks and procedures",
      "Support transition to internal teams"
    ]
  }
];

const securityFeatures = [
  {
    feature: "Zero Trust Architecture",
    description: "Never trust, always verify - every request is authenticated and authorized",
    implementation: ["Identity verification for every API call", "Micro-segmentation with least privilege access", "Continuous monitoring and anomaly detection"]
  },
  {
    feature: "Data Sovereignty",
    description: "Complete control over where your data lives and how it&apos;s processed",
    implementation: ["On-premises or private cloud deployment options", "No data transmission to third-party AI providers", "Local model deployment for air-gapped environments"]
  },
  {
    feature: "Encryption Everywhere",
    description: "Comprehensive encryption protecting data at rest, in transit, and in memory",
    implementation: ["AES-256 encryption for all stored data", "TLS 1.3 for all communications", "Memory encryption for sensitive runtime data"]
  },
  {
    feature: "Immutable Audit Logs",
    description: "Tamper-proof logging with cryptographic integrity verification",
    implementation: ["HMAC-signed log entries", "Write-only log storage", "Blockchain-style integrity verification"]
  }
];

export default function EnterpriseOpenClawPage() {
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
              <span className="text-white/60 text-sm font-medium">Enterprise AI Deployment</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl md:text-[3.2rem] font-extrabold text-white mb-6 leading-[1.05] tracking-tight">
              Enterprise OpenClaw
              <br />
              <span className="text-orange">Setup & Consulting</span>
            </h1>

            <p className="text-white/60 text-lg md:text-xl max-w-[540px] mb-10 leading-relaxed">
              Scale-ready AI agent deployments for large organizations. Multi-agent architectures, enterprise security, compliance frameworks, and team collaboration.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#capabilities"
                className="inline-flex items-center justify-center bg-orange text-white px-8 py-4 rounded-btn font-semibold text-base hover:bg-orange-hover transition-all hover:-translate-y-0.5 shadow-glow-orange"
              >
                Explore Enterprise Features
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-white/5 text-white px-8 py-4 rounded-btn font-semibold text-base hover:bg-white/10 transition-all border border-white/10"
              >
                Get Consultation ↓
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#fafbfc] to-transparent" />
      </section>

      {/* Enterprise vs Individual Section */}
      <section className="bg-light py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="max-w-[800px] mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-6">
              Why Enterprise OpenClaw?
            </h2>
            <p className="text-muted text-lg leading-relaxed mb-12">
              While individual OpenClaw is perfect for personal productivity, enterprise deployments require additional layers of security, governance, and scalability that go far beyond what&apos;s possible with individual setups.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-box p-8 shadow-card">
                <div className="text-3xl mb-4">👤</div>
                <h3 className="font-heading font-bold text-dark mb-3">Individual OpenClaw</h3>
                <p className="text-muted text-sm leading-relaxed mb-4">
                  Perfect for personal productivity and small teams with simple automation needs.
                </p>
                <ul className="text-left space-y-2 text-xs text-muted">
                  <li>• Single user or small team (&lt;5 people)</li>
                  <li>• Basic security with full trust model</li>
                  <li>• Manual agent management via CLI</li>
                  <li>• Limited audit capabilities</li>
                  <li>• Self-service setup and maintenance</li>
                </ul>
              </div>

              <div className="bg-white rounded-box p-8 shadow-card border-2 border-orange">
                <div className="text-3xl mb-4">🏢</div>
                <h3 className="font-heading font-bold text-dark mb-3">Enterprise OpenClaw</h3>
                <p className="text-muted text-sm leading-relaxed mb-4">
                  Designed for large organizations with complex workflows, security requirements, and compliance needs.
                </p>
                <ul className="text-left space-y-2 text-xs text-muted">
                  <li>• Unlimited users with role-based access</li>
                  <li>• Bank-grade security and compliance</li>
                  <li>• Multi-agent orchestration platform</li>
                  <li>• Immutable audit trails and forensics</li>
                  <li>• Professional setup and ongoing support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Capabilities Section */}
      <section id="capabilities" className="bg-white py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-orange font-heading font-semibold text-sm uppercase tracking-widest mb-4">
              Enterprise Capabilities
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Built for Enterprise Scale
            </h2>
            <p className="text-muted text-lg max-w-[600px] mx-auto">
              Advanced features and architecture patterns designed specifically for large-scale enterprise AI deployments.
            </p>
          </div>

          <div className="space-y-16">
            {enterpriseCapabilities.map((capability, index) => (
              <div key={index} className="bg-surface rounded-box p-8">
                <h3 className="font-heading font-bold text-2xl text-dark mb-4">{capability.capability}</h3>
                <p className="text-muted text-lg leading-relaxed mb-8">{capability.description}</p>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-heading font-bold text-dark mb-4">Technical Features</h4>
                    <ul className="space-y-3">
                      {capability.features.map((feature, idx) => (
                        <li key={idx} className="flex gap-3 items-start text-sm">
                          <span className="text-orange mt-1 flex-shrink-0">⚡</span>
                          <span className="text-muted-dark">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-heading font-bold text-dark mb-4">Business Benefits</h4>
                    <ul className="space-y-3">
                      {capability.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex gap-3 items-start text-sm">
                          <span className="text-green-500 mt-1 flex-shrink-0">✓</span>
                          <span className="text-muted-dark">{benefit}</span>
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

      {/* Use Cases Section */}
      <section className="bg-surface py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Enterprise Use Cases
            </h2>
            <p className="text-muted text-lg max-w-[600px] mx-auto">
              Real-world applications of enterprise OpenClaw across different industries and organizational functions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white rounded-box p-8 shadow-card">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-orange text-white text-xs font-bold px-2 py-1 rounded">
                    {useCase.industry}
                  </span>
                </div>
                
                <h3 className="font-heading font-bold text-dark mb-3">Challenge</h3>
                <p className="text-muted text-sm leading-relaxed mb-4">{useCase.challenge}</p>
                
                <h3 className="font-heading font-bold text-dark mb-3">OpenClaw Solution</h3>
                <p className="text-muted text-sm leading-relaxed mb-4">{useCase.solution}</p>
                
                <h3 className="font-heading font-bold text-dark mb-3">Results</h3>
                <ul className="space-y-1 mb-4">
                  {useCase.results.map((result, idx) => (
                    <li key={idx} className="flex gap-2 items-start text-sm">
                      <span className="text-green-500 mt-1 flex-shrink-0">•</span>
                      <span className="text-muted-dark">{result}</span>
                    </li>
                  ))}
                </ul>
                
                <h3 className="font-heading font-bold text-dark mb-2">Agent Team</h3>
                <div className="flex flex-wrap gap-2">
                  {useCase.agents.map((agent, idx) => (
                    <span key={idx} className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">
                      {agent}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Features Section */}
      <section className="bg-navy text-white py-24 relative overflow-hidden grain">
        <div className="absolute bottom-0 left-[20%] w-[500px] h-[500px] bg-orange/5 rounded-full blur-[120px]" />
        <div className="absolute top-0 right-[10%] w-[400px] h-[400px] bg-blue/5 rounded-full blur-[100px]" />
        
        <div className="max-w-[1140px] mx-auto px-6 relative z-10">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
              Enterprise Security Framework
            </h2>
            <p className="text-white/60 text-lg max-w-[600px] mx-auto">
              Bank-grade security designed for the most demanding enterprise environments and regulatory requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="bg-white/[0.03] border border-white/[0.06] rounded-box p-8">
                <h3 className="font-heading font-bold text-xl text-white mb-3">{feature.feature}</h3>
                <p className="text-white/60 leading-relaxed mb-6">{feature.description}</p>
                
                <ul className="space-y-2">
                  {feature.implementation.map((item, idx) => (
                    <li key={idx} className="flex gap-2 items-start text-sm">
                      <span className="text-orange mt-1 flex-shrink-0">•</span>
                      <span className="text-white/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deployment Options Section */}
      <section className="bg-white py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Deployment Options
            </h2>
            <p className="text-muted text-lg max-w-[600px] mx-auto">
              Choose the deployment model that best fits your organization&apos;s needs, resources, and requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {deploymentOptions.map((option, index) => (
              <div key={index} className="bg-surface rounded-box p-8">
                <h3 className="font-heading font-bold text-xl text-dark mb-2">{option.option}</h3>
                <p className="text-muted leading-relaxed mb-6">{option.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-dark text-sm mb-3">What&apos;s Included:</h4>
                  <ul className="space-y-2">
                    {option.included.map((item, idx) => (
                      <li key={idx} className="flex gap-2 items-start text-xs">
                        <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
                        <span className="text-muted-dark">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-dark text-sm mb-3">Best For:</h4>
                  <ul className="space-y-1">
                    {option.bestFor.map((item, idx) => (
                      <li key={idx} className="flex gap-2 items-start text-xs">
                        <span className="text-orange mt-0.5 flex-shrink-0">•</span>
                        <span className="text-muted-dark">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="border-t border-border pt-4">
                  <p className="font-bold text-dark">{option.pricing}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process Section */}
      <section className="bg-light py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Implementation Process
            </h2>
            <p className="text-muted text-lg max-w-[600px] mx-auto">
              Our proven methodology for deploying enterprise OpenClaw with minimal risk and maximum impact.
            </p>
          </div>

          <div className="space-y-8">
            {implementationProcess.map((phase, index) => (
              <div key={index} className="flex gap-6 items-start">
                <div className="bg-orange text-white font-bold text-lg w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  {index + 1}
                </div>
                <div className="flex-1 bg-white rounded-box p-8 shadow-card">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-heading font-bold text-xl text-dark">{phase.phase}</h3>
                    <span className="bg-orange/10 text-orange text-xs font-semibold px-2 py-1 rounded">
                      {phase.duration}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-dark mb-3">Key Activities:</h4>
                      <ul className="space-y-2">
                        {phase.activities.map((activity, idx) => (
                          <li key={idx} className="flex gap-2 items-start text-sm">
                            <span className="text-orange mt-1 flex-shrink-0">•</span>
                            <span className="text-muted-dark">{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-dark mb-3">Deliverables:</h4>
                      <ul className="space-y-2">
                        {phase.deliverables.map((deliverable, idx) => (
                          <li key={idx} className="flex gap-2 items-start text-sm">
                            <span className="text-green-500 mt-1 flex-shrink-0">✓</span>
                            <span className="text-muted-dark">{deliverable}</span>
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

      {/* FAQ Section */}
      <section className="bg-white py-24">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-orange font-heading font-semibold text-sm uppercase tracking-widest mb-4">
              FAQ
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark">
              Enterprise OpenClaw Questions
            </h2>
          </div>
          
          <div className="space-y-0">
            {[
              {
                q: "How does enterprise OpenClaw differ from individual setups?",
                a: "Enterprise OpenClaw includes multi-agent orchestration, advanced security frameworks, role-based access control, immutable audit trails, and professional deployment services. Individual OpenClaw is designed for single users with full trust, while enterprise adds layers of governance, security, and scalability for organizational deployments."
              },
              {
                q: "Can enterprise OpenClaw integrate with our existing systems?",
                a: "Yes. Enterprise OpenClaw is designed for seamless integration with existing enterprise systems including CRM, ERP, ITSM, identity providers (Active Directory, OKTA), monitoring systems (Datadog, New Relic), and communication platforms (Slack, Teams, Email). We provide custom integration development as part of the deployment process."
              },
              {
                q: "What compliance frameworks does enterprise OpenClaw support?",
                a: "Enterprise OpenClaw supports GDPR, SOC 2, ISO 27001, HIPAA, and other major compliance frameworks through comprehensive security controls, audit trails, data encryption, and governance features. We work with your compliance team to ensure all requirements are met."
              },
              {
                q: "How scalable is enterprise OpenClaw?",
                a: "Enterprise OpenClaw is designed for massive scale using Kubernetes orchestration, auto-scaling, and distributed architectures. We&apos;ve deployed systems supporting thousands of concurrent agents across multiple regions with 99.9% uptime. The platform scales horizontally to meet growing demand."
              },
              {
                q: "What kind of ROI can we expect from enterprise OpenClaw?",
                a: "Typical enterprise deployments see 40-70% reduction in manual task completion time, 60-90% improvement in process consistency, and full ROI within 6-18 months. Specific ROI depends on use cases, but we provide detailed cost-benefit analysis during the discovery phase."
              },
              {
                q: "Do you provide ongoing support and maintenance?",
                a: "Yes. We offer 24/7 support, regular maintenance, security updates, performance optimization, and system monitoring as part of our managed service options. Support levels range from basic email support to dedicated enterprise support teams depending on your needs."
              },
              {
                q: "How secure is enterprise OpenClaw for sensitive data?",
                a: "Enterprise OpenClaw uses bank-grade security including zero-trust architecture, encryption at rest and in transit, immutable audit logs, network segmentation, and comprehensive access controls. Data can remain entirely on your infrastructure with no external transmission to AI providers."
              },
              {
                q: "What&apos;s the typical implementation timeline?",
                a: "Enterprise implementations typically take 10-20 weeks depending on complexity, integration requirements, and organizational readiness. This includes discovery (2-4 weeks), infrastructure setup (3-6 weeks), agent development (4-8 weeks), and training/go-live (2-3 weeks). We provide detailed timelines during planning."
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
            Ready for Enterprise AI?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-[600px] mx-auto">
            Get a free consultation to discuss your enterprise OpenClaw requirements and create a custom deployment plan.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-navy text-white px-10 py-4 rounded-btn font-bold text-lg hover:bg-dark transition-all hover:-translate-y-0.5 shadow-xl"
          >
            Schedule Enterprise Consultation →
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
                Enterprise Consultation
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Get Your Enterprise
                <br />
                <span className="text-orange">OpenClaw Roadmap</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Free discovery session to assess your requirements, design your enterprise architecture, and create a detailed implementation plan.
              </p>
              
              <div className="space-y-4 text-white/50 text-sm">
                <div className="flex gap-3 items-center">
                  <span className="text-orange">🎯</span>
                  <span>Custom architecture design for your organization</span>
                </div>
                <div className="flex gap-3 items-center">
                  <span className="text-orange">💰</span>
                  <span>Detailed ROI analysis and cost projections</span>
                </div>
                <div className="flex gap-3 items-center">
                  <span className="text-orange">⚡</span>
                  <span>Implementation roadmap and timeline</span>
                </div>
              </div>
            </div>

            <div className="bg-white/[0.03] border border-white/[0.06] rounded-box p-8">
              <h3 className="font-heading font-bold text-xl text-white mb-1">Enterprise Consultation</h3>
              <p className="text-white/40 text-sm mb-6">Tell us about your enterprise OpenClaw needs</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}