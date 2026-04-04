import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Installing Pinchy: Setup Guide 2026",
  description: "Step-by-step guide to installing Pinchy - the enterprise OpenClaw platform. Docker deployment, user management, agent configuration, and enterprise security setup.",
  keywords: [
    "installing pinchy",
    "pinchy setup",
    "pinchy openclaw",
    "pinchy installation guide",
    "pinchy docker setup",
    "enterprise openclaw platform",
    "pinchy deployment",
    "pinchy configuration"
  ],
  alternates: { canonical: "https://openclawconsultant.co.uk/guides/installing-pinchy" },
  openGraph: {
    title: "Installing Pinchy: Setup Guide 2026",
    description: "Step-by-step guide to installing Pinchy - the enterprise OpenClaw platform. Docker deployment, user management, and agent configuration.",
    url: "https://openclawconsultant.co.uk/guides/installing-pinchy",
    type: "article",
  },
};

const installationSteps = [
  {
    step: "01",
    title: "Prerequisites & Environment",
    description: "Prepare your server environment and gather required dependencies",
    details: [
      "Docker and Docker Compose installed",
      "4GB+ RAM and 20GB+ disk space",
      "Domain name with SSL capability",
      "API keys for your preferred AI models",
      "SMTP credentials for email notifications"
    ]
  },
  {
    step: "02",
    title: "Download Pinchy",
    description: "Clone the Pinchy repository and prepare the configuration files",
    details: [
      "Clone from GitHub: git clone https://github.com/heypinchy/pinchy",
      "Copy environment template: cp .env.example .env",
      "Generate secure passwords and API keys",
      "Configure domain and SSL settings"
    ]
  },
  {
    step: "03",
    title: "Configure Environment",
    description: "Set up environment variables for security, models, and integrations",
    details: [
      "Database credentials and connection strings",
      "AI model provider API keys (OpenAI, Anthropic, etc.)",
      "SMTP settings for email notifications",
      "SSL certificate paths and domain configuration",
      "Admin user credentials and JWT secrets"
    ]
  },
  {
    step: "04",
    title: "Deploy with Docker",
    description: "Launch Pinchy using Docker Compose with all required services",
    details: [
      "Run: docker compose up -d",
      "Verify all containers are running",
      "Check logs for any startup errors",
      "Access the web interface at your configured domain"
    ]
  },
  {
    step: "05",
    title: "Initial Configuration",
    description: "Complete the setup through the Pinchy admin dashboard",
    details: [
      "Create admin account and configure organization settings",
      "Set up user roles and permissions",
      "Configure model providers and routing",
      "Test agent deployment and basic functionality"
    ]
  },
  {
    step: "06",
    title: "Deploy Your First Agent",
    description: "Create and deploy your first enterprise agent through the dashboard",
    details: [
      "Define agent personality and capabilities",
      "Configure permissions and tool access",
      "Test agent responses and functionality",
      "Set up monitoring and logging"
    ]
  }
];

const configurationSections = [
  {
    section: "Model Configuration",
    description: "Set up AI model providers with cost optimization and failover",
    settings: [
      "Primary model provider (Anthropic Claude recommended)",
      "Backup model for failover scenarios", 
      "Cost optimization rules and token limits",
      "Model-specific routing based on task complexity"
    ]
  },
  {
    section: "User Management",
    description: "Configure user roles, permissions, and access controls",
    settings: [
      "Admin, Manager, and User role definitions",
      "Department-based access controls",
      "Agent assignment and usage limits",
      "Audit logging and session management"
    ]
  },
  {
    section: "Security Settings",
    description: "Enterprise security configuration for data protection",
    settings: [
      "SSL/TLS certificate configuration",
      "Database encryption and backup settings",
      "API rate limiting and DDoS protection", 
      "Audit trail configuration and retention"
    ]
  },
  {
    section: "Integration Setup",
    description: "Connect Pinchy with your existing enterprise systems",
    settings: [
      "Slack, Microsoft Teams, and email integrations",
      "CRM and ERP system connections",
      "Single Sign-On (SSO) configuration",
      "Webhook and API endpoint configuration"
    ]
  }
];

const troubleshootingIssues = [
  {
    issue: "Docker containers fail to start",
    causes: ["Insufficient memory or disk space", "Port conflicts with existing services", "Missing environment variables"],
    solutions: ["Check system resources with docker stats", "Verify ports 3000, 5432, 6379 are available", "Review .env file for missing variables"]
  },
  {
    issue: "Cannot access Pinchy dashboard",
    causes: ["SSL certificate issues", "Firewall blocking connections", "Incorrect domain configuration"],
    solutions: ["Verify SSL certificate is valid and accessible", "Check firewall rules for HTTP/HTTPS ports", "Confirm domain DNS points to your server"]
  },
  {
    issue: "Agent responses are slow or failing",
    causes: ["API rate limits exceeded", "Model provider connectivity issues", "Insufficient server resources"],
    solutions: ["Check API usage quotas and limits", "Test connectivity to model providers", "Scale server resources or optimize configuration"]
  },
  {
    issue: "Users cannot log in or access agents",
    causes: ["Incorrect user permissions", "Session configuration issues", "Database connectivity problems"],
    solutions: ["Review user roles in admin dashboard", "Check session timeout and cookie settings", "Verify database connection and schema"]
  }
];

export default function InstallingPinchyPage() {
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
              <span className="text-white/60 text-sm font-medium">Complete Installation Guide</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl md:text-[3.2rem] font-extrabold text-white mb-6 leading-[1.05] tracking-tight">
              Installing Pinchy:
              <br />
              <span className="text-orange">Complete Setup Guide</span>
            </h1>

            <p className="text-white/60 text-lg md:text-xl max-w-[540px] mb-10 leading-relaxed">
              Step-by-step guide to deploying Pinchy - the enterprise OpenClaw platform with Docker, user management, and agent orchestration.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#installation"
                className="inline-flex items-center justify-center bg-orange text-white px-8 py-4 rounded-btn font-semibold text-base hover:bg-orange-hover transition-all hover:-translate-y-0.5 shadow-glow-orange"
              >
                Start Installation
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-white/5 text-white px-8 py-4 rounded-btn font-semibold text-base hover:bg-white/10 transition-all border border-white/10"
              >
                Get Expert Setup ↓
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#fafbfc] to-transparent" />
      </section>

      {/* What is Pinchy Section */}
      <section className="bg-light py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="max-w-[800px] mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-6">
              What is Pinchy?
            </h2>
            <p className="text-muted text-lg leading-relaxed mb-12">
              Pinchy is the enterprise AI agent platform built on OpenClaw. While OpenClaw provides powerful raw tools for individual users, Pinchy adds the enterprise governance, user management, and security controls needed for team deployments.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-box p-6 shadow-card">
                <div className="text-2xl mb-3">🦞</div>
                <h3 className="font-heading font-bold text-dark mb-2">Enterprise Governance</h3>
                <p className="text-muted text-sm">Plugin-based permissions, approval workflows, and audit trails for enterprise compliance.</p>
              </div>
              <div className="bg-white rounded-box p-6 shadow-card">
                <div className="text-2xl mb-3">👥</div>
                <h3 className="font-heading font-bold text-dark mb-2">User Management</h3>
                <p className="text-muted text-sm">Role-based access control, team agent assignments, and centralized administration.</p>
              </div>
              <div className="bg-white rounded-box p-6 shadow-card">
                <div className="text-2xl mb-3">🐳</div>
                <h3 className="font-heading font-bold text-dark mb-2">Self-Hosted Control</h3>
                <p className="text-muted text-sm">Deploy on your infrastructure with Docker. Complete data sovereignty and customization.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prerequisites Section */}
      <section className="bg-white py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="max-w-[800px] mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-8 text-center">
              Before You Begin
            </h2>
            
            <div className="bg-surface rounded-box p-8 mb-12">
              <h3 className="font-heading font-bold text-xl text-dark mb-4">System Requirements</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-dark mb-2">Minimum Specs</h4>
                  <ul className="space-y-1 text-sm text-muted">
                    <li>• 4GB RAM, 2 CPU cores</li>
                    <li>• 20GB disk space</li>
                    <li>• Ubuntu 20.04+ or similar</li>
                    <li>• Docker & Docker Compose</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-dark mb-2">Recommended Specs</h4>
                  <ul className="space-y-1 text-sm text-muted">
                    <li>• 8GB+ RAM, 4+ CPU cores</li>
                    <li>• 50GB+ SSD storage</li>
                    <li>• Load balancer for HA</li>
                    <li>• SSL certificate ready</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-orange/5 border border-orange/20 rounded-box p-6 mb-8">
              <div className="flex gap-3 items-start">
                <span className="text-orange text-xl flex-shrink-0">⚠️</span>
                <div>
                  <h4 className="font-semibold text-dark mb-2">Important Notes</h4>
                  <ul className="space-y-1 text-sm text-muted-dark">
                    <li>• Pinchy is in active development - expect regular updates</li>
                    <li>• Production deployments should use managed databases and SSL</li>
                    <li>• Have your AI model API keys ready (Anthropic, OpenAI, etc.)</li>
                    <li>• Consider backup and disaster recovery planning</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Steps Section */}
      <section id="installation" className="bg-surface py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-orange font-heading font-semibold text-sm uppercase tracking-widest mb-4">
              Installation Process
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Step-by-Step Installation Guide
            </h2>
            <p className="text-muted text-lg max-w-[600px] mx-auto">
              Follow these steps to deploy Pinchy on your infrastructure. Each step includes detailed commands and configuration examples.
            </p>
          </div>

          <div className="space-y-8">
            {installationSteps.map((step, index) => (
              <div key={index} className="flex gap-6 items-start">
                <div className="bg-orange text-white font-bold text-lg w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  {step.step}
                </div>
                <div className="flex-1 bg-white rounded-box p-8 shadow-card">
                  <h3 className="font-heading font-bold text-xl text-dark mb-2">{step.title}</h3>
                  <p className="text-muted leading-relaxed mb-4">{step.description}</p>
                  <ul className="space-y-2">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex gap-2 items-start text-sm">
                        <span className="text-orange mt-1 flex-shrink-0">•</span>
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

      {/* Configuration Section */}
      <section className="bg-white py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Configuration & Setup
            </h2>
            <p className="text-muted text-lg max-w-[600px] mx-auto">
              Configure Pinchy for your enterprise requirements with proper security, user management, and integrations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {configurationSections.map((section, index) => (
              <div key={index} className="bg-surface rounded-box p-8">
                <h3 className="font-heading font-bold text-xl text-dark mb-3">{section.section}</h3>
                <p className="text-muted leading-relaxed mb-4">{section.description}</p>
                <ul className="space-y-2">
                  {section.settings.map((setting, idx) => (
                    <li key={idx} className="flex gap-2 items-start text-sm">
                      <span className="text-orange mt-1 flex-shrink-0">✓</span>
                      <span className="text-muted-dark">{setting}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Commands Section */}
      <section className="bg-dark text-white py-16">
        <div className="max-w-[900px] mx-auto px-6">
          <h3 className="font-heading text-2xl font-bold mb-8 text-center">Quick Installation Commands</h3>
          <div className="bg-black/50 rounded-box p-6 font-mono text-sm">
            <div className="space-y-2">
              <p className="text-orange"># Clone Pinchy repository</p>
              <p>git clone https://github.com/heypinchy/pinchy.git</p>
              <p>cd pinchy</p>
              <br />
              <p className="text-orange"># Configure environment</p>
              <p>cp .env.example .env</p>
              <p>nano .env  # Edit configuration</p>
              <br />
              <p className="text-orange"># Deploy with Docker</p>
              <p>docker compose up -d</p>
              <br />
              <p className="text-orange"># Check status</p>
              <p>docker compose ps</p>
              <p>docker compose logs -f</p>
            </div>
          </div>
        </div>
      </section>

      {/* Troubleshooting Section */}
      <section className="bg-light py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Troubleshooting Common Issues
            </h2>
            <p className="text-muted text-lg max-w-[600px] mx-auto">
              Solutions to the most common Pinchy installation and configuration problems.
            </p>
          </div>

          <div className="space-y-6">
            {troubleshootingIssues.map((issue, index) => (
              <div key={index} className="bg-white rounded-box p-8 shadow-card">
                <h3 className="font-heading font-bold text-lg text-dark mb-4">{issue.issue}</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-dark mb-2 text-sm">Common Causes:</h4>
                    <ul className="space-y-1">
                      {issue.causes.map((cause, idx) => (
                        <li key={idx} className="text-sm text-muted flex gap-2 items-start">
                          <span className="text-red-500 mt-1 flex-shrink-0">•</span>
                          {cause}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-dark mb-2 text-sm">Solutions:</h4>
                    <ul className="space-y-1">
                      {issue.solutions.map((solution, idx) => (
                        <li key={idx} className="text-sm text-muted-dark flex gap-2 items-start">
                          <span className="text-green-500 mt-1 flex-shrink-0">✓</span>
                          {solution}
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

      {/* FAQ Section */}
      <section className="bg-white py-24">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-orange font-heading font-semibold text-sm uppercase tracking-widest mb-4">
              FAQ
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark">
              Pinchy Installation Questions
            </h2>
          </div>
          
          <div className="space-y-0">
            {[
              {
                q: "How is Pinchy different from standard OpenClaw?",
                a: "Pinchy adds enterprise features on top of OpenClaw: user management, role-based permissions, plugin governance, audit trails, and a web dashboard. While OpenClaw gives agents raw system access, Pinchy wraps these in controlled plugins with authorization layers."
              },
              {
                q: "Can I run Pinchy completely offline?",
                a: "Yes. Pinchy can be deployed with local AI models using Ollama or llama.cpp for completely air-gapped deployments. No external connections required once configured, making it perfect for highly secure environments."
              },
              {
                q: "What&apos;s the difference between community and enterprise editions?",
                a: "The community edition (AGPL-3.0) includes all core functionality for small teams. Enterprise features like granular RBAC, SSO integration, advanced audit trails, and professional support are available for larger organizations."
              },
              {
                q: "How much does it cost to run Pinchy?",
                a: "Pinchy itself is free (open source). Your costs are server hosting and AI model API usage. Typical costs range from £50-500/month depending on usage volume and model choice. Local models eliminate API costs entirely."
              },
              {
                q: "Do I need to be technical to install Pinchy?",
                a: "Basic Docker knowledge is required, but the installation is straightforward with docker compose. The web dashboard handles most configuration. For enterprise deployments, we recommend professional installation and training."
              },
              {
                q: "Can I migrate from existing OpenClaw setups?",
                a: "Yes, but it requires planning. Pinchy can import OpenClaw skills and configurations, but the permission model differs. We provide migration tools and can assist with complex transitions."
              },
              {
                q: "What happens if Pinchy development stops?",
                a: "Pinchy is open source (AGPL-3.0) so you always have the code. The OpenClaw foundation remains solid regardless. However, the project has strong backing and an active community - development is accelerating, not slowing."
              },
              {
                q: "How does Pinchy handle security and compliance?",
                a: "All data stays on your infrastructure. Pinchy includes encryption at rest, audit trails with HMAC verification, role-based access controls, and plugin-level permissions. It&apos;s designed for regulated industries like healthcare and finance."
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

      {/* Next Steps CTA */}
      <section className="bg-orange py-16">
        <div className="max-w-[900px] mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-white mb-4">
            Need Expert Pinchy Setup?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-[600px] mx-auto">
            Skip the complexity and get Pinchy deployed correctly from day one. Professional installation, configuration, and training available.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-navy text-white px-10 py-4 rounded-btn font-bold text-lg hover:bg-dark transition-all hover:-translate-y-0.5 shadow-xl"
          >
            Get Professional Setup →
          </a>
        </div>
      </section>

      {/* Contact Section */}
      
      {/* Related Guides */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-[1140px] mx-auto px-6">
          <h2 className="font-heading text-2xl font-bold text-navy mb-8 text-center">Related Guides</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-[800px] mx-auto">
            <a href="/guides/openclaw-setup-mac" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-slate-100">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">OpenClaw Setup Guide for Mac 2026</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/openclaw-setup-windows" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-slate-100">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">OpenClaw Setup Guide for Windows</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/what-is-openclaw-2026" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-slate-100">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">What is OpenClaw? Complete Guide 2026</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/openclaw-skills-guide" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-slate-100">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">OpenClaw Skills: Complete Guide</h3>
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
                Expert Setup
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Get Professional
                <br />
                <span className="text-orange">Pinchy Installation</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Professional Pinchy deployment with enterprise security, user training, and ongoing support. Get it right the first time.
              </p>
              
              <div className="space-y-4 text-white/50 text-sm">
                <div className="flex gap-3 items-center">
                  <span className="text-orange">⚡</span>
                  <span>Expert installation and configuration</span>
                </div>
                <div className="flex gap-3 items-center">
                  <span className="text-orange">🔒</span>
                  <span>Enterprise security and compliance setup</span>
                </div>
                <div className="flex gap-3 items-center">
                  <span className="text-orange">📚</span>
                  <span>Team training and documentation</span>
                </div>
              </div>
            </div>

            <div className="bg-white/[0.03] border border-white/[0.06] rounded-box p-8">
              <h3 className="font-heading font-bold text-xl text-white mb-1">Professional Setup</h3>
              <p className="text-white/40 text-sm mb-6">Get expert Pinchy installation and configuration</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}