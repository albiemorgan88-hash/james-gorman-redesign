import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Pinchy vs Manual OpenClaw Management",
  description: "Complete comparison of Pinchy dashboard vs manual OpenClaw CLI management. Feature comparison, use cases, and decision guidance for teams and enterprises.",
  keywords: [
    "pinchy vs manual openclaw",
    "pinchy dashboard vs cli",
    "openclaw management comparison",
    "enterprise vs individual openclaw",
    "pinchy features vs openclaw",
    "openclaw team management",
    "ai agent management comparison",
    "openclaw deployment options"
  ],
  alternates: { canonical: "https://openclawconsultant.co.uk/guides/pinchy-vs-manual" },
  openGraph: {
    title: "Pinchy vs Manual OpenClaw Management",
    description: "Complete comparison of Pinchy dashboard vs manual OpenClaw CLI management. Feature comparison, use cases, and decision guidance.",
    url: "https://openclawconsultant.co.uk/guides/pinchy-vs-manual",
    type: "article",
  },
};

const comparisonAreas = [
  {
    area: "User Management",
    manual: {
      description: "Single user per OpenClaw instance",
      details: ["One person controls everything", "No role separation", "Manual SSH key sharing for access", "No audit trail of who did what"]
    },
    pinchy: {
      description: "Multi-user with role-based access control",
      details: ["Unlimited users with defined roles", "Admin, Manager, User permissions", "Individual agent assignments", "Complete audit trail of all actions"]
    }
  },
  {
    area: "Agent Deployment",
    manual: {
      description: "Command-line driven agent management",
      details: ["Terminal-based agent creation", "Manual skill installation", "Direct file editing for configuration", "Requires technical knowledge"]
    },
    pinchy: {
      description: "Dashboard-based agent management",
      details: ["Visual agent creation and editing", "Plugin marketplace for capabilities", "GUI configuration interface", "Non-technical user friendly"]
    }
  },
  {
    area: "Security & Permissions",
    manual: {
      description: "Full system access or nothing",
      details: ["Agents get raw tool access", "No permission boundaries", "All users have full control", "Trust-based security model"]
    },
    pinchy: {
      description: "Plugin-based permission system",
      details: ["Agents get scoped plugin access", "Granular permission controls", "User-specific access limits", "Zero-trust security model"]
    }
  },
  {
    area: "Monitoring & Logging",
    manual: {
      description: "Basic logging to files and terminal",
      details: ["Log files require manual analysis", "No centralized monitoring", "Terminal-based status checking", "Limited audit capabilities"]
    },
    pinchy: {
      description: "Dashboard monitoring with analytics",
      details: ["Real-time agent status dashboard", "Usage analytics and cost tracking", "Alert system for issues", "HMAC-signed audit trails"]
    }
  },
  {
    area: "Integration Capabilities",
    manual: {
      description: "Direct API and system integration",
      details: ["Full access to any API or service", "Custom skill development required", "No approval workflows", "Maximum flexibility"]
    },
    pinchy: {
      description: "Controlled integrations with approval flows",
      details: ["Pre-built integration plugins", "Approval workflows for sensitive actions", "Cross-channel communication", "Enterprise system connectors"]
    }
  }
];

const useCaseScenarios = [
  {
    scenario: "Solo Developer/Consultant",
    recommendation: "Manual OpenClaw",
    reasoning: "Maximum flexibility and control without governance overhead",
    benefits: ["Direct access to all capabilities", "No permission restrictions", "Faster development cycles", "Lower complexity overhead"],
    considerations: ["You handle all security yourself", "No audit trail for compliance", "Single point of failure"]
  },
  {
    scenario: "Small Team (2-10 people)",
    recommendation: "Pinchy Community",
    reasoning: "Basic user management with team collaboration features",
    benefits: ["Multiple team members can access agents", "Basic permission controls", "Shared agent pool", "Central monitoring"],
    considerations: ["Less flexibility than manual", "Additional deployment complexity", "Learning curve for team"]
  },
  {
    scenario: "Enterprise (50+ users)",
    recommendation: "Pinchy Enterprise",
    reasoning: "Essential governance, compliance, and scalability features",
    benefits: ["Role-based access control", "Compliance audit trails", "Approval workflows", "Scalable architecture"],
    considerations: ["Significant deployment complexity", "Higher operational overhead", "Enterprise license costs"]
  },
  {
    scenario: "Regulated Industry",
    recommendation: "Pinchy Enterprise",
    reasoning: "Compliance and audit requirements make governance essential",
    benefits: ["GDPR/SOC2 compliance support", "Immutable audit logs", "Data residency control", "Approval workflows"],
    considerations: ["More restrictive than manual", "Compliance overhead", "Regular audit requirements"]
  }
];

const featureMatrix = [
  {
    feature: "Multi-user Support",
    manual: "❌ Single user only",
    pinchy: "✅ Unlimited users with roles"
  },
  {
    feature: "Web Dashboard",
    manual: "❌ Command line only",
    pinchy: "✅ Full web interface"
  },
  {
    feature: "Permission Controls",
    manual: "❌ All or nothing access",
    pinchy: "✅ Granular plugin permissions"
  },
  {
    feature: "Audit Trails",
    manual: "⚠️ Basic file logging",
    pinchy: "✅ HMAC-signed audit logs"
  },
  {
    feature: "Agent Templates",
    manual: "⚠️ Manual skill creation",
    pinchy: "✅ Plugin marketplace"
  },
  {
    feature: "Cost Monitoring",
    manual: "❌ Manual calculation",
    pinchy: "✅ Real-time cost tracking"
  },
  {
    feature: "Approval Workflows",
    manual: "❌ No approval system",
    pinchy: "✅ Human-in-the-loop controls"
  },
  {
    feature: "Cross-channel Integration",
    manual: "⚠️ Manual configuration",
    pinchy: "✅ Built-in channel routing"
  },
  {
    feature: "Setup Complexity",
    manual: "✅ Simple install",
    pinchy: "⚠️ Docker deployment"
  },
  {
    feature: "Technical Requirements",
    manual: "✅ Low learning curve",
    pinchy: "⚠️ Higher complexity"
  },
  {
    feature: "Maximum Flexibility",
    manual: "✅ Full system access",
    pinchy: "⚠️ Plugin restrictions"
  },
  {
    feature: "Development Speed",
    manual: "✅ Direct development",
    pinchy: "⚠️ Plugin framework overhead"
  }
];

const migrationConsiderations = [
  {
    aspect: "Data Migration",
    description: "Moving existing agents and data from manual to Pinchy",
    challenges: ["Agent memory and conversation history", "Custom skills need plugin conversion", "Environment variables and secrets"],
    solutions: ["Export/import tools available", "Skill conversion assistance", "Gradual migration possible"]
  },
  {
    aspect: "User Training",
    description: "Team adaptation from CLI to dashboard workflow",
    challenges: ["Different mental model", "Less direct control", "Plugin vs skill concepts"],
    solutions: ["Comprehensive training programmes", "Gradual rollout by department", "Champions programme"]
  },
  {
    aspect: "Permission Model",
    description: "Adapting from trust-based to permission-controlled access",
    challenges: ["More restrictive environment", "Approval workflow adoption", "Plugin limitations"],
    solutions: ["Custom plugin development", "Gradual permission rollout", "Exception handling processes"]
  }
];

export default function PinchyVsManualPage() {
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
              <span className="text-white/60 text-sm font-medium">Management Comparison Guide</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl md:text-[3.2rem] font-extrabold text-white mb-6 leading-[1.05] tracking-tight">
              Pinchy vs Manual
              <br />
              <span className="text-orange">OpenClaw Management</span>
            </h1>

            <p className="text-white/60 text-lg md:text-xl max-w-[540px] mb-10 leading-relaxed">
              Complete comparison of Pinchy dashboard vs manual CLI management. Which approach is right for your team and use case?
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#comparison"
                className="inline-flex items-center justify-center bg-orange text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-orange-hover transition-all hover:-translate-y-0.5 shadow-glow-orange"
              >
                See Comparison
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-white/5 text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-white/10 transition-all border border-white/10"
              >
                Get Guidance ↓
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#fafbfc] to-transparent" />
      </section>

      {/* Overview Section */}
      <section className="bg-light py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="max-w-[800px] mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-6">
              Two Approaches to OpenClaw Management
            </h2>
            <p className="text-muted text-lg leading-relaxed mb-12">
              OpenClaw can be managed directly via CLI for maximum flexibility, or through Pinchy&apos;s enterprise dashboard for team collaboration and governance. Each approach serves different needs.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-card">
                <div className="text-3xl mb-4">⚡</div>
                <h3 className="font-heading font-bold text-dark mb-3">Manual OpenClaw</h3>
                <p className="text-muted text-sm leading-relaxed mb-4">
                  Direct CLI management with full system access. Maximum flexibility and control for individual users and small teams.
                </p>
                <div className="text-left">
                  <p className="font-semibold text-dark text-sm mb-1">Best For:</p>
                  <ul className="text-xs text-muted space-y-1">
                    <li>• Solo developers and consultants</li>
                    <li>• Maximum customization needs</li>
                    <li>• Rapid prototyping and development</li>
                    <li>• Simple deployment requirements</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-card">
                <div className="text-3xl mb-4">🦞</div>
                <h3 className="font-heading font-bold text-dark mb-3">Pinchy Dashboard</h3>
                <p className="text-muted text-sm leading-relaxed mb-4">
                  Enterprise platform with user management, permission controls, and governance features built on OpenClaw.
                </p>
                <div className="text-left">
                  <p className="font-semibold text-dark text-sm mb-1">Best For:</p>
                  <ul className="text-xs text-muted space-y-1">
                    <li>• Teams and enterprises</li>
                    <li>• Compliance and audit requirements</li>
                    <li>• User management and permissions</li>
                    <li>• Centralized monitoring and control</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Comparison Section */}
      <section id="comparison" className="bg-white py-28">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Detailed Feature Comparison
            </h2>
            <p className="text-muted text-lg max-w-[600px] mx-auto">
              How manual OpenClaw and Pinchy differ across key areas of functionality and management.
            </p>
          </div>

          <div className="space-y-12">
            {comparisonAreas.map((area, index) => (
              <div key={index} className="bg-surface rounded-2xl p-8">
                <h3 className="font-heading font-bold text-2xl text-dark mb-8 text-center">{area.area}</h3>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="bg-white rounded-2xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-2xl">⚡</span>
                      <h4 className="font-heading font-bold text-dark">Manual OpenClaw</h4>
                    </div>
                    <p className="text-muted font-medium mb-4">{area.manual.description}</p>
                    <ul className="space-y-2">
                      {area.manual.details.map((detail, idx) => (
                        <li key={idx} className="flex gap-2 items-start text-sm">
                          <span className="text-blue mt-1 flex-shrink-0">•</span>
                          <span className="text-muted-dark">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-white rounded-2xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-2xl">🦞</span>
                      <h4 className="font-heading font-bold text-dark">Pinchy Platform</h4>
                    </div>
                    <p className="text-muted font-medium mb-4">{area.pinchy.description}</p>
                    <ul className="space-y-2">
                      {area.pinchy.details.map((detail, idx) => (
                        <li key={idx} className="flex gap-2 items-start text-sm">
                          <span className="text-orange mt-1 flex-shrink-0">•</span>
                          <span className="text-muted-dark">{detail}</span>
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

      {/* Feature Matrix Section */}
      <section className="bg-surface py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Feature Comparison Matrix
            </h2>
            <p className="text-muted text-lg max-w-[600px] mx-auto">
              Side-by-side comparison of key features and capabilities.
            </p>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden shadow-card">
            <div className="grid grid-cols-3 gap-0">
              <div className="bg-dark text-white p-4 font-heading font-bold">Feature</div>
              <div className="bg-blue text-white p-4 font-heading font-bold text-center">Manual OpenClaw</div>
              <div className="bg-orange text-white p-4 font-heading font-bold text-center">Pinchy Platform</div>
            </div>
            
            {featureMatrix.map((row, index) => (
              <div key={index} className={`grid grid-cols-3 gap-0 ${index % 2 === 0 ? 'bg-surface/30' : 'bg-white'}`}>
                <div className="p-4 font-medium text-dark border-r border-border">{row.feature}</div>
                <div className="p-4 text-sm text-center border-r border-border">{row.manual}</div>
                <div className="p-4 text-sm text-center">{row.pinchy}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Case Recommendations Section */}
      <section className="bg-white py-28">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Which Should You Choose?
            </h2>
            <p className="text-muted text-lg max-w-[600px] mx-auto">
              Recommendations based on common use cases and organizational requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCaseScenarios.map((scenario, index) => (
              <div key={index} className="bg-surface rounded-2xl p-8">
                <h3 className="font-heading font-bold text-xl text-dark mb-2">{scenario.scenario}</h3>
                <div className="flex items-center gap-2 mb-4">
                  <span className="font-semibold text-dark">Recommended:</span>
                  <span className="bg-orange text-white text-xs font-bold px-2 py-1 rounded">
                    {scenario.recommendation}
                  </span>
                </div>
                
                <p className="text-muted text-sm leading-relaxed mb-4">{scenario.reasoning}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-dark text-sm mb-2">Benefits:</h4>
                  <ul className="space-y-1">
                    {scenario.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex gap-2 items-start text-xs">
                        <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
                        <span className="text-muted-dark">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-dark text-sm mb-2">Considerations:</h4>
                  <ul className="space-y-1">
                    {scenario.considerations.map((consideration, idx) => (
                      <li key={idx} className="flex gap-2 items-start text-xs">
                        <span className="text-orange mt-0.5 flex-shrink-0">⚠️</span>
                        <span className="text-muted-dark">{consideration}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Migration Considerations Section */}
      <section className="bg-light py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Migration Considerations
            </h2>
            <p className="text-muted text-lg max-w-[600px] mx-auto">
              Key factors to consider when migrating from manual OpenClaw to Pinchy, or vice versa.
            </p>
          </div>

          <div className="space-y-8">
            {migrationConsiderations.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-card">
                <h3 className="font-heading font-bold text-xl text-dark mb-3">{item.aspect}</h3>
                <p className="text-muted leading-relaxed mb-6">{item.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-dark mb-3 text-sm">Challenges:</h4>
                    <ul className="space-y-2">
                      {item.challenges.map((challenge, idx) => (
                        <li key={idx} className="flex gap-2 items-start text-sm">
                          <span className="text-red-500 mt-1 flex-shrink-0">•</span>
                          <span className="text-muted-dark">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-dark mb-3 text-sm">Solutions:</h4>
                    <ul className="space-y-2">
                      {item.solutions.map((solution, idx) => (
                        <li key={idx} className="flex gap-2 items-start text-sm">
                          <span className="text-green-500 mt-1 flex-shrink-0">✓</span>
                          <span className="text-muted-dark">{solution}</span>
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

      {/* Decision Framework */}
      <section className="bg-navy text-white py-16">
        <div className="max-w-[900px] mx-auto px-6 text-center">
          <h3 className="font-heading text-2xl font-bold mb-8">Quick Decision Framework</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="bg-white/5 rounded-2xl p-6">
              <h4 className="font-heading font-bold text-orange mb-3">Choose Manual OpenClaw If:</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li>• You&apos;re a solo user or very small team (&lt;3 people)</li>
                <li>• You need maximum flexibility and customization</li>
                <li>• You&apos;re comfortable with command-line tools</li>
                <li>• You don&apos;t need audit trails or compliance</li>
                <li>• You want the simplest possible setup</li>
              </ul>
            </div>
            <div className="bg-white/5 rounded-2xl p-6">
              <h4 className="font-heading font-bold text-orange mb-3">Choose Pinchy If:</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li>• You have a team that needs agent access</li>
                <li>• You need user management and permissions</li>
                <li>• You have compliance or audit requirements</li>
                <li>• You want centralized monitoring and control</li>
                <li>• You prefer web interfaces over CLI</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-orange py-16">
        <div className="max-w-[900px] mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-white mb-4">
            Still Not Sure Which to Choose?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-[600px] mx-auto">
            Get expert guidance on the right OpenClaw deployment approach for your specific needs and requirements.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-navy text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-dark transition-all hover:-translate-y-0.5 shadow-xl"
          >
            Get Expert Guidance →
          </a>
        </div>
      </section>

      {/* Contact Section */}
      
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
        <div className="absolute bottom-0 left-[20%] w-[500px] h-[500px] bg-orange/5 rounded-full blur-[120px]" />
        <div className="absolute top-0 right-[10%] w-[400px] h-[400px] bg-blue/5 rounded-full blur-[100px]" />

        <div className="max-w-[1140px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-orange font-heading font-semibold text-sm uppercase tracking-widest mb-4">
                Expert Guidance
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Get the Right OpenClaw
                <br />
                <span className="text-orange">Setup for Your Team</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Free consultation to assess your requirements and recommend the optimal OpenClaw deployment approach.
              </p>
              
              <div className="space-y-4 text-white/50 text-sm">
                <div className="flex gap-3 items-center">
                  <span className="text-orange">⚡</span>
                  <span>Unbiased recommendation based on your needs</span>
                </div>
                <div className="flex gap-3 items-center">
                  <span className="text-orange">🎯</span>
                  <span>Tailored deployment plan and timeline</span>
                </div>
                <div className="flex gap-3 items-center">
                  <span className="text-orange">💡</span>
                  <span>Expert setup and configuration available</span>
                </div>
              </div>
            </div>

            <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8">
              <h3 className="font-heading font-bold text-xl text-white mb-1">Expert Consultation</h3>
              <p className="text-white/40 text-sm mb-6">Tell us about your OpenClaw requirements</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}