import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "OpenClaw Security Best Practices",
  description: "Essential security practices for OpenClaw business deployments. Learn access controls, data protection, compliance, and security hardening for safe AI agent operations.",
  keywords: [
    "openclaw security best practices",
    "openclaw business security", 
    "ai agent security",
    "openclaw data protection",
    "openclaw compliance",
    "openclaw access controls",
    "secure ai deployment",
    "openclaw security hardening"
  ],
  alternates: { canonical: "https://openclawconsultant.co.uk/guides/openclaw-security-best-practices" },
  openGraph: {
    title: "OpenClaw Security Best Practices",
    description: "Essential security practices for OpenClaw business deployments. Learn access controls, data protection, and compliance.",
    url: "https://openclawconsultant.co.uk/guides/openclaw-security-best-practices",
    type: "article",
  },
};

const securityAreas = [
  {
    area: "Access Control & Authentication",
    description: "Robust authentication and authorization mechanisms",
    practices: ["Multi-factor authentication", "Role-based access control", "API key management", "Session security"],
    riskLevel: "Critical",
    compliance: ["SOC 2", "ISO 27001", "GDPR"]
  },
  {
    area: "Data Protection & Privacy",
    description: "Comprehensive data security and privacy controls",
    practices: ["End-to-end encryption", "Data anonymization", "Secure storage", "Data retention policies"],
    riskLevel: "Critical",
    compliance: ["GDPR", "CCPA", "HIPAA"]
  },
  {
    area: "Network Security",
    description: "Secure communication and network architecture",
    practices: ["VPN/secure tunnels", "Firewall configuration", "Network segmentation", "SSL/TLS encryption"],
    riskLevel: "High",
    compliance: ["PCI DSS", "SOX", "FISMA"]
  },
  {
    area: "Monitoring & Incident Response",
    description: "Continuous monitoring and rapid incident response",
    practices: ["Security logging", "Anomaly detection", "Incident response plan", "Regular security audits"],
    riskLevel: "High",
    compliance: ["SOC 2", "ISO 27001"]
  }
];

const complianceFrameworks = [
  {
    framework: "GDPR Compliance",
    requirements: ["Data minimization", "Consent management", "Right to erasure", "Data portability"],
    implementation: "Built-in privacy controls and data handling policies"
  },
  {
    framework: "SOC 2 Type II",
    requirements: ["Security controls", "Availability monitoring", "Processing integrity", "Confidentiality"],
    implementation: "Comprehensive audit trails and control frameworks"
  },
  {
    framework: "HIPAA (Healthcare)",
    requirements: ["PHI protection", "Access controls", "Audit logs", "Risk assessments"],
    implementation: "Healthcare-specific security configurations"
  }
];

export default function OpenClawSecurityBestPracticesPage() {
  return (
    <>
      <section className="hero-gradient relative overflow-hidden min-h-[70vh] flex items-center grain">
        <div className="max-w-[1140px] mx-auto px-6 relative z-10 py-20">
          <div className="max-w-[720px]">
            <h1 className="font-heading text-4xl sm:text-5xl md:text-[3.2rem] font-extrabold text-white mb-6 leading-[1.05] tracking-tight">
              OpenClaw Security
              <br />
              <span className="text-orange">Best Practices</span>
            </h1>

            <p className="text-white/60 text-lg md:text-xl max-w-[540px] mb-10 leading-relaxed">
              Essential security practices for business OpenClaw deployments. Protect your data, ensure compliance, and maintain secure AI agent operations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#security" className="inline-flex items-center justify-center bg-orange text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-orange-hover transition-all hover:-translate-y-0.5 shadow-glow-orange">
                Explore Security
              </a>
            </div>
          </div>
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
                  <h4 className="font-semibold text-dark mb-2">Compliance:</h4>
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

      <section className="bg-surface py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Compliance Frameworks
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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
                  <p className="text-muted text-sm">{framework.implementation}</p>
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
                Free security assessment to evaluate your OpenClaw deployment and implement enterprise-grade security measures.
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