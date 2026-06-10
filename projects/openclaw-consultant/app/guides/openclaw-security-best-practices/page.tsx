import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import GuideArticleJsonLd from "@/components/GuideArticleJsonLd";
import SafeSetupLeadMagnet from "@/components/SafeSetupLeadMagnet";

const canonicalPath = "/guides/openclaw-security-best-practices";
const pageTitle = "OpenClaw Security Best Practices";
const pageDescription =
  "Security practices for OpenClaw business deployments, including access control, data protection, network exposure, monitoring, review gates, and compliance evidence planning.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "openclaw security best practices",
    "openclaw business security", 
    "ai agent security",
    "openclaw data protection",
    "openclaw compliance",
    "openclaw access controls",
    "secure ai deployment",
    "openclaw security hardening",
    "openclaw security compliance",
    "openclaw compliance planning"
  ],
  alternates: { canonical: `https://openclawconsultant.co.uk${canonicalPath}` },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: `https://openclawconsultant.co.uk${canonicalPath}`,
    type: "article",
  },
};

const securityAreas = [
  {
    area: "Access Control & Authentication",
    description: "Authentication, authorization, and approval boundaries for who can steer the agent",
    practices: ["Multi-factor authentication", "Role-based access control", "API key management", "Session security"],
    riskLevel: "Critical",
    compliance: ["SOC 2 mapping", "ISO 27001 mapping", "GDPR evidence"]
  },
  {
    area: "Data Protection & Privacy",
    description: "Data handling controls for sensitive files, prompts, logs, transcripts, and connected tools",
    practices: ["End-to-end encryption", "Data anonymization", "Secure storage", "Data retention policies"],
    riskLevel: "Critical",
    compliance: ["GDPR evidence", "Privacy review", "Healthcare review"]
  },
  {
    area: "Network Security",
    description: "Secure communication and network architecture",
    practices: ["VPN/secure tunnels", "Firewall configuration", "Network segmentation", "SSL/TLS encryption"],
    riskLevel: "High",
    compliance: ["Network controls", "Audit evidence", "Segmentation"]
  },
  {
    area: "Monitoring & Incident Response",
    description: "Logging, alerting, and response plans for agent actions and configuration drift",
    practices: ["Security logging", "Anomaly detection", "Incident response plan", "Regular security audits"],
    riskLevel: "High",
    compliance: ["SOC 2 mapping", "ISO 27001 mapping"]
  }
];

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
    framework: "GDPR Readiness",
    requirements: ["Data minimization", "Consent management", "Right to erasure", "Data portability"],
    implementation: [
      "Documented data flows, retention rules, access limits, and review with qualified privacy counsel"
    ]
  },
  {
    framework: "SOC 2 Control Mapping",
    requirements: ["Security controls", "Availability monitoring", "Processing integrity", "Confidentiality"],
    implementation: [
      "Audit logging, change records, access reviews, and evidence mapped to selected trust criteria"
    ]
  },
  {
    framework: "ISO 27001",
    requirements: [
      "Information security policy framework",
      "Risk assessment and treatment",
      "Security controls implementation",
      "Management review and improvement",
      "Incident management procedures"
    ],
    implementation: [
      "Security governance structure",
      "Risk review process",
      "Security control evidence collection",
      "Continuous improvement process",
      "Incident detection and response workflow"
    ]
  },
  {
    framework: "HIPAA (US Healthcare)",
    requirements: [
      "Administrative safeguards",
      "Physical safeguards for systems",
      "Technical safeguards for ePHI",
      "Business associate agreements",
      "Breach notification procedures"
    ],
    implementation: [
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

export default function OpenClawSecurityBestPracticesPage() {
  return (
    <>
      <GuideArticleJsonLd canonicalPath={canonicalPath} title={pageTitle} description={pageDescription} />

      <section className="hero-gradient relative overflow-hidden min-h-[70vh] flex items-center grain">
        <div className="max-w-[1140px] mx-auto px-6 relative z-10 py-20">
          <div className="max-w-[720px]">
            <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-xs font-semibold text-white/50">
              <a href="/" className="hover:text-white">Home</a>
              <span aria-hidden="true">/</span>
              <a href="/guides" className="hover:text-white">Guides</a>
              <span aria-hidden="true">/</span>
              <span className="text-white/70">OpenClaw Security Best Practices</span>
            </nav>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-[3.2rem] font-extrabold text-white mb-6 leading-[1.05] tracking-tight">
              OpenClaw Security
              <br />
              <span className="text-orange">Best Practices</span>
            </h1>

            <p className="text-white/60 text-lg md:text-xl max-w-[540px] mb-10 leading-relaxed">
              Essential security practices for business OpenClaw deployments. Reduce data exposure, define approval boundaries, and collect the evidence needed for compliance review.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#security" className="inline-flex items-center justify-center bg-orange text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-orange-hover transition-all hover:-translate-y-0.5 shadow-glow-orange">
                Explore Security
              </a>
              <a href="/guides/openclaw-safe-setup-checklist" className="inline-flex items-center justify-center bg-white/5 text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-white/10 transition-all border border-white/10">
                Use the Checklist
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light py-20">
        <div className="max-w-[1140px] mx-auto px-6">
          <SafeSetupLeadMagnet />
        </div>
      </section>

      <section id="security" className="bg-white py-28">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Core Security Areas
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {securityAreas.map((area, index) => (
              <div key={index} className="bg-surface rounded-2xl p-8 shadow-card">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-heading font-bold text-xl text-dark">{area.area}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    area.riskLevel === 'Critical' ? 'bg-red-100 text-red-700' :
                    area.riskLevel === 'High' ? 'bg-orange-100 text-orange-700' :
                    'bg-yellow-100 text-yellow-700'
                  }`}>
                    {area.riskLevel} Risk
                  </span>
                </div>
                <p className="text-muted mb-4">{area.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-dark mb-2">Key Practices:</h4>
                  <ul className="space-y-1">
                    {area.practices.map((practice, idx) => (
                      <li key={idx} className="text-muted text-sm flex gap-2">
                        <span className="text-orange">▸</span>
                        {practice}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-dark mb-2">Evidence areas:</h4>
                  <div className="flex flex-wrap gap-2">
                    {area.compliance.map((framework, idx) => (
                      <span key={idx} className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">
                        {framework}
                      </span>
                    ))}
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
              Key Security Threats for AI Agents
            </h2>
            <p className="text-muted text-lg max-w-[600px] mx-auto">
              OpenClaw agents have powerful capabilities that create unique security risks. Understanding these threats is essential for building secure deployments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {securityThreats.map((threat, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-card">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-heading font-bold text-xl text-dark">{threat.threat}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    threat.riskLevel === 'Critical' ? 'bg-red-100 text-red-700' :
                    'bg-orange-100 text-orange-700'
                  }`}>
                    {threat.riskLevel} Risk
                  </span>
                </div>
                <p className="text-muted mb-4">{threat.description}</p>

                <div>
                  <h4 className="font-semibold text-dark mb-2">Key Mitigations:</h4>
                  <div className="flex flex-wrap gap-2">
                    {threat.mitigations.map((mitigation, idx) => (
                      <span key={idx} className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">
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

      <section className="bg-surface py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Compliance Frameworks
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {complianceFrameworks.map((framework, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-card">
                <h3 className="font-heading font-bold text-lg text-dark mb-4">{framework.framework}</h3>

                <div className="mb-4">
                  <h4 className="font-semibold text-dark mb-2">Requirements:</h4>
                  <ul className="space-y-1">
                    {framework.requirements.map((req, idx) => (
                      <li key={idx} className="text-muted text-sm flex gap-2">
                        <span className="text-green-500">✓</span>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <h4 className="font-semibold text-dark mb-2">Implementation:</h4>
                  <ul className="space-y-1">
                    {framework.implementation.map((item, idx) => (
                      <li key={idx} className="text-muted text-sm flex gap-2">
                        <span className="text-orange">▸</span>
                        {item}
                      </li>
                    ))}
                  </ul>
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
              Security Hardening Checklist
            </h2>
            <p className="text-muted text-lg max-w-[600px] mx-auto">
              Security controls that reduce the chance of data exposure, unsafe tool access, configuration drift, and unauthorized actions.
            </p>
          </div>

          <div className="space-y-12">
            {securityHardeningSteps.map((category, index) => (
              <div key={index} className="bg-surface rounded-2xl p-8 shadow-card">
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

      <section className="bg-surface py-24">
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
              <div key={index} className="bg-white rounded-2xl p-8 shadow-card">
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

      <section className="bg-white py-24">
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
        <div className="max-w-[1140px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Secure Your
                <br />
                <span className="text-orange">OpenClaw Deployment</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Security review to identify risky access, exposed credentials, weak logging, and missing approval gates before an OpenClaw deployment handles sensitive work.
              </p>
            </div>

            <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8">
              <h3 className="font-heading font-bold text-xl text-white mb-1">Security Assessment Consultation</h3>
              <p className="text-white/40 text-sm mb-6">Evaluate your OpenClaw security posture</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
