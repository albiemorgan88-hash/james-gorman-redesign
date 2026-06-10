import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import GuideArticleJsonLd from "@/components/GuideArticleJsonLd";
import SafeSetupLeadMagnet from "@/components/SafeSetupLeadMagnet";

const canonicalPath = "/guides/openclaw-security-compliance";
const pageTitle = "OpenClaw Security & Compliance Planning Guide";
const pageDescription =
  "Practical OpenClaw security and compliance planning guide covering data handling, agent permissions, audit trails, incident response, and evidence to review with compliance specialists.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "openclaw security",
    "openclaw compliance",
    "openclaw GDPR",
    "openclaw data protection",
    "enterprise openclaw security",
    "openclaw audit trails",
    "openclaw security hardening",
    "ai agent security compliance"
  ],
  alternates: { canonical: `https://openclawconsultant.co.uk${canonicalPath}` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: `https://openclawconsultant.co.uk${canonicalPath}`,
    type: "article",
  },
};

const securityThreats = [
  {
    threat: "Data Exfiltration",
    description: "Agents accessing and transmitting sensitive data to unauthorized locations",
    riskLevel: "Critical",
    mitigations: ["Network isolation", "Data loss prevention", "Audit logging", "Permission controls"]
  },
  {
    threat: "Prompt Injection",
    description: "Malicious inputs designed to manipulate agent behavior and bypass security controls",
    riskLevel: "High", 
    mitigations: ["Input validation", "Prompt sanitization", "Context isolation", "Behavioral monitoring"]
  },
  {
    threat: "Credential Exposure",
    description: "API keys, passwords, and secrets exposed in logs or agent memory",
    riskLevel: "Critical",
    mitigations: ["Secret management", "Memory encryption", "Log sanitization", "Credential rotation"]
  },
  {
    threat: "Unauthorized Access",
    description: "Agents performing actions beyond their intended scope or permissions",
    riskLevel: "High",
    mitigations: ["Role-based access", "Least privilege", "Action approval", "Access monitoring"]
  }
];

const complianceFrameworks = [
  {
    framework: "GDPR (EU)",
    description: "General Data Protection Regulation for processing EU citizen data",
    requirements: [
      "Lawful basis for processing personal data",
      "Data subject rights (access, rectification, erasure)", 
      "Privacy by design and default",
      "Data protection impact assessments",
      "Breach notification within 72 hours"
    ],
    openclawImplementation: [
      "Data processing records with legal-basis review",
      "Personal data inventory and classification",
      "Data subject request workflow with human review",
      "Privacy-preserving agent design",
      "Incident response playbook and escalation rules"
    ]
  },
  {
    framework: "SOC 2",
    description: "Service Organization Control 2 for security, availability, and confidentiality",
    requirements: [
      "Security policies and procedures",
      "Access controls and monitoring",
      "System operations and availability",
      "Processing integrity controls",
      "Confidentiality safeguards"
    ],
    openclawImplementation: [
      "Audit-friendly security documentation",
      "Role-based access control (RBAC)",
      "Monitoring and alert records",
      "Change management records",
      "Data classification and encryption plan"
    ]
  },
  {
    framework: "ISO 27001",
    description: "International standard for information security management systems",
    requirements: [
      "Information security policy framework",
      "Risk assessment and treatment",
      "Security controls implementation",
      "Management review and improvement",
      "Incident management procedures"
    ],
    openclawImplementation: [
      "Security governance structure",
      "Risk review process",
      "Security control evidence collection",
      "Continuous improvement process",
      "Incident detection and response workflow"
    ]
  },
  {
    framework: "HIPAA (US Healthcare)",
    description: "Health Insurance Portability and Accountability Act for healthcare data",
    requirements: [
      "Administrative safeguards",
      "Physical safeguards for systems",
      "Technical safeguards for ePHI",
      "Business associate agreements",
      "Breach notification procedures"
    ],
    openclawImplementation: [
      "Do not process PHI until legal and contractual review is complete",
      "Dedicated environment and access boundaries",
      "Encryption, access logs, and minimum necessary access",
      "Compliance evidence pack for review",
      "Breach-response process with responsible owners"
    ]
  }
];

const securityHardeningSteps = [
  {
    category: "Infrastructure Security",
    steps: [
      {
        step: "Network Isolation",
        description: "Isolate OpenClaw components in secure network segments",
        implementation: "VPN, firewall rules, network segmentation, zero-trust architecture"
      },
      {
        step: "Encryption at Rest",
        description: "Encrypt all stored data including agent memory and logs",
        implementation: "Database encryption, file system encryption, encrypted backups"
      },
      {
        step: "Encryption in Transit", 
        description: "Secure all communications between components",
        implementation: "TLS 1.3, certificate management, secure API endpoints"
      },
      {
        step: "System Hardening",
        description: "Secure the underlying operating system and services",
        implementation: "OS patches, service configuration, unnecessary service removal"
      }
    ]
  },
  {
    category: "Access Control",
    steps: [
      {
        step: "Multi-Factor Authentication",
        description: "Require MFA for all user access to OpenClaw systems",
        implementation: "TOTP, hardware tokens, biometric authentication"
      },
      {
        step: "Role-Based Access Control",
        description: "Implement granular permissions based on user roles",
        implementation: "RBAC policies, permission matrices, regular access reviews"
      },
      {
        step: "Privileged Access Management",
        description: "Secure administrative access with additional controls",
        implementation: "Admin access logs, session recording, approval workflows"
      },
      {
        step: "Service Account Security",
        description: "Secure agent service accounts and API access",
        implementation: "Least privilege, credential rotation, service account monitoring"
      }
    ]
  },
  {
    category: "Monitoring & Logging", 
    steps: [
      {
        step: "Comprehensive Logging",
        description: "Log all agent actions, API calls, and system events",
        implementation: "Structured logging, log aggregation, retention policies"
      },
      {
        step: "Security Monitoring",
        description: "Real-time monitoring for security threats and anomalies",
        implementation: "SIEM integration, behavioral analytics, alerting rules"
      },
      {
        step: "Audit Trail Integrity",
        description: "Ensure audit logs cannot be tampered with",
        implementation: "Append-only storage where appropriate, restricted admin access, signed exports, and retention policy"
      },
      {
        step: "Compliance Reporting",
        description: "Automated generation of compliance and security reports",
        implementation: "Report templates, scheduled generation, stakeholder distribution"
      }
    ]
  }
];

const dataHandlingPractices = [
  {
    practice: "Data Classification",
    description: "Classify data based on sensitivity and regulatory requirements",
    implementation: [
      "Public, Internal, Confidential, Restricted classification levels",
      "Automated data discovery and classification tools",
      "Metadata tagging for automated policy enforcement",
      "Regular classification review and updates"
    ]
  },
  {
    practice: "Data Minimization", 
    description: "Process only the minimum data necessary for the intended purpose",
    implementation: [
      "Purpose limitation for agent data access",
      "Automated data retention and deletion",
      "Privacy-preserving techniques (anonymization, pseudonymization)",
      "Regular data inventory and cleanup"
    ]
  },
  {
    practice: "Consent Management",
    description: "Manage data subject consent for personal data processing",
    implementation: [
      "Consent capture and storage mechanisms",
      "Granular consent for different processing purposes",
      "Consent withdrawal handling",
      "Consent audit trails and reporting"
    ]
  },
  {
    practice: "Cross-Border Transfers",
    description: "Ensure lawful transfer of data across jurisdictions",
    implementation: [
      "Standard contractual clauses for EU transfers",
      "Data localization for regulated industries",
      "Transfer impact assessments",
      "Documentation of transfer mechanisms"
    ]
  }
];

const incidentResponse = [
  {
    phase: "Detection",
    duration: "Immediate triage",
    activities: [
      "Automated monitoring alerts for security events",
      "User reporting mechanisms for suspected incidents", 
      "Regular security scans and vulnerability assessments",
      "Behavioral analysis for anomaly detection"
    ],
    tools: ["SIEM systems", "Intrusion detection", "Log analysis", "Monitoring dashboards"]
  },
  {
    phase: "Assessment",
    duration: "First response window",
    activities: [
      "Incident classification and severity assessment",
      "Scope determination and impact analysis",
      "Evidence collection and preservation",
      "Stakeholder notification decisions"
    ],
    tools: ["Incident management platform", "Risk assessment matrices", "Evidence collection tools"]
  },
  {
    phase: "Containment",
    duration: "Urgent containment",
    activities: [
      "Isolate affected systems and agents",
      "Prevent lateral movement of threats",
      "Preserve evidence for investigation",
      "Implement temporary compensating controls"
    ],
    tools: ["Network isolation", "Agent shutdown procedures", "Backup systems", "Emergency contacts"]
  },
  {
    phase: "Recovery",
    duration: "Recovery window varies",
    activities: [
      "Restore systems from clean backups",
      "Apply security patches and updates",
      "Verify system integrity and functionality",
      "Gradual return to normal operations"
    ],
    tools: ["Backup restoration", "Security testing", "System monitoring", "User communication"]
  },
  {
    phase: "Post-Incident",
    duration: "Follow-up review",
    activities: [
      "Conduct thorough incident analysis",
      "Update security controls and procedures",
      "Provide training based on lessons learned",
      "Handle regulatory notifications if required after legal review"
    ],
    tools: ["Forensic analysis", "Process improvement", "Training platforms", "Compliance reporting"]
  }
];

const auditRequirements = [
  {
    requirement: "Access Logging",
    description: "Log all user access to OpenClaw systems and data",
    details: ["Login/logout events", "Permission changes", "Data access patterns", "Failed access attempts"]
  },
  {
    requirement: "Agent Activity Logging",
    description: "Comprehensive logging of all agent actions and decisions", 
    details: ["Task execution logs", "API calls and responses", "Decision reasoning", "Error conditions"]
  },
  {
    requirement: "Data Processing Records",
    description: "Maintain records of all personal data processing activities",
    details: ["Processing purposes", "Data categories", "Legal basis", "Retention periods"]
  },
  {
    requirement: "Security Event Logging",
    description: "Log all security-relevant events for investigation",
    details: ["Security policy violations", "Threat detection events", "System configuration changes", "Incident response actions"]
  }
];

export default function OpenClawSecurityCompliancePage() {
  return (
    <>
      <GuideArticleJsonLd canonicalPath={canonicalPath} title={pageTitle} description={pageDescription} />

      {/* Hero Section */}
      <section className="hero-gradient relative overflow-hidden min-h-[70vh] flex items-center grain">
        <div className="absolute top-20 right-[10%] w-[400px] h-[400px] bg-orange/5 rounded-full blur-[120px] glow-pulse" />
        <div className="absolute bottom-20 left-[5%] w-[300px] h-[300px] bg-blue/10 rounded-full blur-[100px] glow-pulse" style={{ animationDelay: "3s" }} />

        <div className="max-w-[1140px] mx-auto px-6 relative z-10 py-20">
          <div className="max-w-[720px]">
            <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-xs font-semibold text-white/50">
              <a href="/" className="hover:text-white">Home</a>
              <span aria-hidden="true">/</span>
              <a href="/guides" className="hover:text-white">Guides</a>
              <span aria-hidden="true">/</span>
              <span className="text-white/70">OpenClaw Security & Compliance</span>
            </nav>
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-white/60 text-sm font-medium">Security & Compliance Guide</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl md:text-[3.2rem] font-extrabold text-white mb-6 leading-[1.05] tracking-tight">
              OpenClaw Security &
              <br />
              <span className="text-orange">Compliance Guide</span>
            </h1>

            <p className="text-white/60 text-lg md:text-xl max-w-[540px] mb-10 leading-relaxed">
              Practical guide to planning secure OpenClaw deployments. Cover data protection, agent permissions, audit trails, incident response, and evidence for specialist compliance review.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#threats"
                className="inline-flex items-center justify-center bg-orange text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-orange-hover transition-all hover:-translate-y-0.5 shadow-glow-orange"
              >
                See Security Guide
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-white/5 text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-white/10 transition-all border border-white/10"
              >
                Discuss Controls ↓
              </a>
              <a
                href="/guides/openclaw-safe-setup-checklist"
                className="inline-flex items-center justify-center bg-white/5 text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-white/10 transition-all border border-white/10"
              >
                Use the Checklist
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#fafbfc] to-transparent" />
      </section>

      <section className="bg-light py-20">
        <div className="max-w-[1140px] mx-auto px-6">
          <SafeSetupLeadMagnet />
        </div>
      </section>

      {/* Security Threats Section */}
      <section id="threats" className="bg-light py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="max-w-[800px] mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-6">
              Key Security Threats for AI Agents
            </h2>
            <p className="text-muted text-lg leading-relaxed mb-12">
              OpenClaw agents have powerful capabilities that create unique security risks. Understanding these threats is essential for building secure deployments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {securityThreats.map((threat, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-card">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-heading font-bold text-dark">{threat.threat}</h3>
                  <span className={`text-xs font-bold px-2 py-1 rounded ${
                    threat.riskLevel === 'Critical' 
                      ? 'bg-red-100 text-red-700' 
                      : 'bg-orange-100 text-orange-700'
                  }`}>
                    {threat.riskLevel}
                  </span>
                </div>
                <p className="text-muted text-sm leading-relaxed mb-4">{threat.description}</p>
                
                <div>
                  <h4 className="font-semibold text-dark text-sm mb-2">Key Mitigations:</h4>
                  <div className="flex flex-wrap gap-2">
                    {threat.mitigations.map((mitigation, idx) => (
                      <span key={idx} className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded">
                        {mitigation}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Frameworks Section */}
      <section className="bg-white py-28">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-orange font-heading font-semibold text-sm uppercase tracking-widest mb-4">
              Compliance Frameworks
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Regulatory Compliance for AI Agents
            </h2>
            <p className="text-muted text-lg max-w-[600px] mx-auto">
              How to plan OpenClaw controls against major regulatory and compliance frameworks before asking specialists to review the final position.
            </p>
          </div>

          <div className="space-y-12">
            {complianceFrameworks.map((framework, index) => (
              <div key={index} className="bg-surface rounded-2xl p-8">
                <div className="mb-6">
                  <h3 className="font-heading font-bold text-xl text-dark mb-2">{framework.framework}</h3>
                  <p className="text-muted leading-relaxed">{framework.description}</p>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-dark mb-3">Core Requirements:</h4>
                    <ul className="space-y-2">
                      {framework.requirements.map((requirement, idx) => (
                        <li key={idx} className="flex gap-2 items-start text-sm">
                          <span className="text-orange mt-1 flex-shrink-0">•</span>
                          <span className="text-muted-dark">{requirement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-dark mb-3">OpenClaw Implementation:</h4>
                    <ul className="space-y-2">
                      {framework.openclawImplementation.map((implementation, idx) => (
                        <li key={idx} className="flex gap-2 items-start text-sm">
                          <span className="text-green-500 mt-1 flex-shrink-0">✓</span>
                          <span className="text-muted-dark">{implementation}</span>
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

      {/* Security Hardening Section */}
      <section className="bg-surface py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Security Hardening Checklist
            </h2>
            <p className="text-muted text-lg max-w-[600px] mx-auto">
              Security controls that reduce the chance of data exposure, unsafe tool access, configuration drift, and unauthorized actions.
            </p>
          </div>

          <div className="space-y-12">
            {securityHardeningSteps.map((category, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-card">
                <h3 className="font-heading font-bold text-xl text-dark mb-6">{category.category}</h3>
                
                <div className="space-y-6">
                  {category.steps.map((step, idx) => (
                    <div key={idx} className="border-l-4 border-orange pl-6">
                      <h4 className="font-semibold text-dark mb-1">{step.step}</h4>
                      <p className="text-muted text-sm leading-relaxed mb-2">{step.description}</p>
                      <p className="text-muted-dark text-xs">{step.implementation}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Handling Section */}
      <section className="bg-white py-28">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Data Handling Best Practices
            </h2>
            <p className="text-muted text-lg max-w-[600px] mx-auto">
              Privacy-preserving approaches that support regulatory review while still allowing useful agent workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {dataHandlingPractices.map((practice, index) => (
              <div key={index} className="bg-surface rounded-2xl p-8">
                <h3 className="font-heading font-bold text-xl text-dark mb-3">{practice.practice}</h3>
                <p className="text-muted leading-relaxed mb-6">{practice.description}</p>
                
                <ul className="space-y-3">
                  {practice.implementation.map((item, idx) => (
                    <li key={idx} className="flex gap-2 items-start text-sm">
                      <span className="w-1.5 h-1.5 bg-orange rounded-full flex-shrink-0 mt-2" />
                      <span className="text-muted-dark">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Incident Response Section */}
      <section className="bg-light py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Incident Response Plan
            </h2>
            <p className="text-muted text-lg max-w-[600px] mx-auto">
              Structured approach to detecting, containing, and recovering from security incidents in OpenClaw deployments.
            </p>
          </div>

          <div className="space-y-8">
            {incidentResponse.map((phase, index) => (
              <div key={index} className="flex gap-6 items-start">
                <div className="bg-orange text-white font-bold text-lg w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  {index + 1}
                </div>
                <div className="flex-1 bg-white rounded-2xl p-8 shadow-card">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-heading font-bold text-xl text-dark">{phase.phase}</h3>
                    <span className="bg-orange/10 text-orange text-xs font-semibold px-2 py-1 rounded">
                      {phase.duration}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-dark text-sm mb-3">Key Activities:</h4>
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
                      <h4 className="font-semibold text-dark text-sm mb-3">Required Tools:</h4>
                      <div className="flex flex-wrap gap-2">
                        {phase.tools.map((tool, idx) => (
                          <span key={idx} className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audit Requirements Section */}
      <section className="bg-white py-28">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Audit Trail Requirements
            </h2>
            <p className="text-muted text-lg max-w-[600px] mx-auto">
              Logging requirements that support compliance audits and security investigations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {auditRequirements.map((requirement, index) => (
              <div key={index} className="bg-surface rounded-2xl p-8">
                <h3 className="font-heading font-bold text-xl text-dark mb-3">{requirement.requirement}</h3>
                <p className="text-muted leading-relaxed mb-6">{requirement.description}</p>
                
                <div>
                  <h4 className="font-semibold text-dark text-sm mb-3">Required Elements:</h4>
                  <ul className="space-y-2">
                    {requirement.details.map((detail, idx) => (
                      <li key={idx} className="flex gap-2 items-start text-sm">
                        <span className="text-green-500 mt-1 flex-shrink-0">✓</span>
                        <span className="text-muted-dark">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Checklist */}
      <section className="bg-navy text-white py-16">
        <div className="max-w-[900px] mx-auto px-6">
          <h3 className="font-heading text-2xl font-bold mb-8 text-center">Pre-Deployment Security Checklist</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-heading font-bold text-orange mb-4">Infrastructure</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li className="flex gap-2 items-center">
                  <span className="w-4 h-4 border border-white/30 rounded flex-shrink-0" />
                  Network segmentation and firewall rules
                </li>
                <li className="flex gap-2 items-center">
                  <span className="w-4 h-4 border border-white/30 rounded flex-shrink-0" />
                  TLS certificates and encrypted communications
                </li>
                <li className="flex gap-2 items-center">
                  <span className="w-4 h-4 border border-white/30 rounded flex-shrink-0" />
                  Database encryption and secure backups
                </li>
                <li className="flex gap-2 items-center">
                  <span className="w-4 h-4 border border-white/30 rounded flex-shrink-0" />
                  Operating system hardening and patches
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-bold text-orange mb-4">Access & Monitoring</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li className="flex gap-2 items-center">
                  <span className="w-4 h-4 border border-white/30 rounded flex-shrink-0" />
                  Multi-factor authentication enabled
                </li>
                <li className="flex gap-2 items-center">
                  <span className="w-4 h-4 border border-white/30 rounded flex-shrink-0" />
                  Role-based access control configured
                </li>
                <li className="flex gap-2 items-center">
                  <span className="w-4 h-4 border border-white/30 rounded flex-shrink-0" />
                  Comprehensive audit logging active
                </li>
                <li className="flex gap-2 items-center">
                  <span className="w-4 h-4 border border-white/30 rounded flex-shrink-0" />
                  Security monitoring and alerting in place
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-orange py-16">
        <div className="max-w-[900px] mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-white mb-4">
            Need Security Planning?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-[600px] mx-auto">
            Practical OpenClaw security hardening, compliance evidence planning, and monitoring design for higher-risk deployments.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-navy text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-dark transition-all hover:-translate-y-0.5 shadow-xl"
          >
            Get Security Consultation →
          </a>
        </div>
      </section>

      {/* Contact Section */}
      
      {/* Related Guides */}
      <section className="py-16 bg-surface">
        <div className="max-w-[1140px] mx-auto px-6">
          <h2 className="font-heading text-2xl font-bold text-navy mb-8 text-center">Related Guides</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-[800px] mx-auto">
            <a href="/guides/openclaw-safe-setup-checklist" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">OpenClaw Safe Setup Checklist</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/openclaw-agent-team" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">Build an OpenClaw Agent Team</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/openclaw-agent-team-setup" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">OpenClaw Agent Team Setup Guide</h3>
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
        <div className="absolute bottom-0 left-[20%] w-[500px] h-[500px] bg-orange/5 rounded-full blur-[120px]" />
        <div className="absolute top-0 right-[10%] w-[400px] h-[400px] bg-blue/5 rounded-full blur-[100px]" />

        <div className="max-w-[1140px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-orange font-heading font-semibold text-sm uppercase tracking-widest mb-4">
                Security Consultation
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Plan OpenClaw
                <br />
                <span className="text-orange">Security Controls</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Security hardening support, compliance evidence planning, and monitoring design for your OpenClaw deployment.
              </p>
              
              <div className="space-y-4 text-white/50 text-sm">
                <div className="flex gap-3 items-center">
                  <span className="text-orange">🔒</span>
                  <span>Security assessment and hardening</span>
                </div>
                <div className="flex gap-3 items-center">
                  <span className="text-orange">📋</span>
                  <span>Compliance evidence planning</span>
                </div>
                <div className="flex gap-3 items-center">
                  <span className="text-orange">🛡️</span>
                  <span>Security monitoring plan and support options</span>
                </div>
              </div>
            </div>

            <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8">
              <h3 className="font-heading font-bold text-xl text-white mb-1">Security Consultation</h3>
              <p className="text-white/40 text-sm mb-6">Tell us about your security and compliance requirements</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
