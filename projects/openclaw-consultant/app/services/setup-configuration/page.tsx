import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { ServiceBreadcrumb, ServiceSeo } from "@/components/ServiceSeo";

export const metadata: Metadata = {
  title: "OpenClaw Setup & Configuration",
  description: "Professional OpenClaw installation, gateway setup, model routing, and environment configuration for teams that need a safer production path.",
  keywords: [
    "openclaw setup service",
    "openclaw installation UK",
    "openclaw configuration",
    "openclaw gateway setup",
    "ai agent setup service",
    "openclaw consultant UK",
    "openclaw model routing",
    "ai automation setup"
  ],
  alternates: { canonical: "https://openclawconsultant.co.uk/services/setup-configuration" },
  openGraph: {
    title: "OpenClaw Setup & Configuration Service UK",
    description: "Scoped OpenClaw installation, gateway setup, model routing, and environment configuration for teams planning a safer production path.",
    url: "https://openclawconsultant.co.uk/services/setup-configuration",
    type: "website",
  },
};

const setupSteps = [
  {
    step: "01",
    title: "Environment Assessment",
    desc: "Review your infrastructure, compare hosting options, and plan an OpenClaw architecture that fits your constraints."
  },
  {
    step: "02", 
    title: "Gateway Installation",
    desc: "Configure the OpenClaw gateway with SSL, network access controls, and documented handover checks."
  },
  {
    step: "03",
    title: "Model Configuration", 
    desc: "Plan model routing across hosted and local options where appropriate, with cost and reliability trade-offs made explicit."
  },
  {
    step: "04",
    title: "Agent Deployment",
    desc: "Deploy your first AI agent with persistent memory, SOUL.md configuration, and access to your business tools."
  },
  {
    step: "05",
    title: "Integration Setup",
    desc: "Connect OpenClaw to your existing systems — Slack, email, CRM, databases, APIs, and development tools."
  },
  {
    step: "06",
    title: "Training & Handover",
    desc: "Learn to operate your OpenClaw setup. Skill authoring basics, memory management, and troubleshooting."
  }
];

const technicalFeatures = [
  "Gateway daemon configuration",
  "Model router planning", 
  "SSL certificate setup",
  "Environment variable management",
  "Security control review",
  "Memory persistence configuration",
  "Tool integration framework",
  "Skill development environment",
  "Monitoring and logging setup",
  "Backup & recovery planning"
];

const intentLinks = [
  {
    title: "Still researching what setup should include?",
    text: "Read the setup service guide if you need an educational checklist before buying done-for-you configuration help.",
    href: "/guides/openclaw-setup-service-uk",
    cta: "Read the setup guide",
  },
  {
    title: "Only need the install handled?",
    text: "Use the installation service when the immediate need is getting OpenClaw installed, tested, and handed over cleanly.",
    href: "/services/openclaw-installation",
    cta: "See installation service",
  },
  {
    title: "Need the commercial hub first?",
    text: "Start with the OpenClaw hub if you want the bigger picture across setup, consulting, skills, pricing, support, and governance.",
    href: "/openclaw",
    cta: "Open the OpenClaw hub",
  },
  {
    title: "Comparing costs before scoping?",
    text: "Use the pricing guide to understand what usually drives setup effort before requesting a quote.",
    href: "/guides/openclaw-pricing-explained",
    cta: "Read pricing guidance",
  },
];

const packages = [
  {
    name: "Standard Setup",
    price: "Scoped quote",
    duration: "Small setup scope",
    features: [
      "OpenClaw gateway installation",
      "Single model provider setup",
      "Basic agent configuration", 
      "Starter skill configuration",
      "Email & Slack integration",
      "Post-setup handover support"
    ]
  },
  {
    name: "Business Setup",
    price: "Scoped quote",
    duration: "Business workflow scope", 
    features: [
      "Multi-model gateway setup",
      "Security control review",
      "Monitoring and logging setup",
      "Custom skills scoped to workflow", 
      "Full tool integration suite",
      "Team handover session",
      "Post-setup support window"
    ],
    popular: true
  },
  {
    name: "Enterprise Setup",
    price: "Custom scope",
    duration: "Larger rollout",
    features: [
      "Multi-agent orchestration",
      "Custom infrastructure design",
      "Advanced workflow automation",
      "Additional custom skills scoped separately",
      "Enterprise integrations",
      "Comprehensive team training",
      "Ongoing support options"
    ]
  }
];

export default function SetupConfigurationPage() {
  return (
    <>
      <ServiceSeo
        name="OpenClaw Setup and Configuration"
        description="Professional OpenClaw installation, gateway setup, model routing, and environment configuration for teams that need a safer production path."
        path="/services/setup-configuration"
        serviceType="OpenClaw setup and configuration"
      />

      {/* Hero Section */}
      <section className="hero-gradient relative overflow-hidden min-h-[70vh] flex items-center grain">
        <div className="absolute top-20 right-[10%] w-[400px] h-[400px] bg-orange/5 rounded-full blur-[120px] glow-pulse" />
        <div className="absolute bottom-20 left-[5%] w-[300px] h-[300px] bg-blue/10 rounded-full blur-[100px] glow-pulse" style={{ animationDelay: "3s" }} />

        <div className="max-w-[1140px] mx-auto px-6 relative z-10 py-20">
          <div className="max-w-[720px]">
            <ServiceBreadcrumb current="OpenClaw Setup and Configuration" />
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-white/60 text-sm font-medium">Professional OpenClaw Setup Service</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl md:text-[3.2rem] font-extrabold text-white mb-6 leading-[1.05] tracking-tight">
              OpenClaw Setup &
              <br />
              <span className="text-orange">Configuration Service</span>
            </h1>

            <p className="text-white/60 text-lg md:text-xl max-w-[540px] mb-10 leading-relaxed">
              Get OpenClaw running with structured installation, gateway configuration, model routing, and security hardening.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-orange text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-orange-hover transition-all hover:-translate-y-0.5 shadow-glow-orange"
              >
                Get Your Quote
              </a>
              <a
                href="#process"
                className="inline-flex items-center justify-center bg-white/5 text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-white/10 transition-all border border-white/10"
              >
                See Process ↓
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#fafbfc] to-transparent" />
      </section>

      {/* Problem Section */}
      <section className="bg-light py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="max-w-[800px] mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-6">
              Where OpenClaw setup gets risky
            </h2>
            <p className="text-muted text-lg leading-relaxed mb-12">
              OpenClaw is flexible, but business deployments need deliberate choices around gateway configuration, model routing, memory, permissions, logging, and handover. The goal is to reduce avoidable rework before the system touches real workflows.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-card">
                <div className="text-2xl mb-3">⚠️</div>
                <h3 className="font-heading font-bold text-dark mb-2">Gateway Issues</h3>
                <p className="text-muted text-sm">Complex networking, SSL certificates, and daemon management that need clear checks.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-card">
                <div className="text-2xl mb-3">💸</div>
                <h3 className="font-heading font-bold text-dark mb-2">Model Costs</h3>
                <p className="text-muted text-sm">Routing choices can affect API spend, latency, reliability, and review quality.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-card">
                <div className="text-2xl mb-3">🔒</div>
                <h3 className="font-heading font-bold text-dark mb-2">Security Gaps</h3>
                <p className="text-muted text-sm">Endpoint exposure, authentication, storage, and permissions need explicit review.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="bg-white py-28">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-orange font-heading font-semibold text-sm uppercase tracking-widest mb-4">
                Our Solution
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-6">
                A safer path to OpenClaw in production
              </h2>
              <p className="text-muted text-lg leading-relaxed mb-8">
                Skip the weeks of trial and error. Blue Canvas uses a repeatable setup process for OpenClaw workflows, with gateway, routing, security, and handover checks before production use.
              </p>
              
              <div className="space-y-4">
                <div className="flex gap-3 items-start">
                  <span className="text-orange mt-1 flex-shrink-0">✓</span>
                  <div>
                    <p className="font-semibold text-dark">Structured installation</p>
                    <p className="text-muted text-sm">Gateway daemon, model routing, SSL certificates, and security hardening configured deliberately and checked before handover.</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-orange mt-1 flex-shrink-0">✓</span>
                  <div>
                    <p className="font-semibold text-dark">Cost planning</p>
                    <p className="text-muted text-sm">Smart model routing helps control API spend while improving response times.</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-orange mt-1 flex-shrink-0">✓</span>
                  <div>
                    <p className="font-semibold text-dark">Monitoring plan</p>
                    <p className="text-muted text-sm">Logging, metrics, and health checks so the team has evidence when something needs attention.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-surface rounded-2xl p-8">
              <h3 className="font-heading font-bold text-xl text-dark mb-6">What&apos;s Included</h3>
              <div className="space-y-3">
                {technicalFeatures.map((feature) => (
                  <div key={feature} className="flex gap-2 items-center text-muted-dark text-sm">
                    <span className="w-1.5 h-1.5 bg-orange rounded-full flex-shrink-0" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="bg-surface py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-orange font-heading font-semibold text-sm uppercase tracking-widest mb-4">
              Our Process
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              How We Set Up Your OpenClaw System
            </h2>
            <p className="text-muted text-lg max-w-[600px] mx-auto">
              A staged process for moving from requirements to a configured OpenClaw environment with handover and review.
            </p>
          </div>

          <div className="space-y-8">
            {setupSteps.map((step, index) => (
              <div key={index} className="flex gap-6 items-start">
                <div className="bg-orange text-white font-bold text-lg w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  {step.step}
                </div>
                <div className="flex-1 bg-white rounded-2xl p-8 shadow-card">
                  <h3 className="font-heading font-bold text-xl text-dark mb-2">{step.title}</h3>
                  <p className="text-muted leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {intentLinks.map((item) => (
              <div key={item.title} className="rounded-2xl border border-border bg-surface p-7">
                <h2 className="font-heading text-2xl font-bold text-dark">{item.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-dark">{item.text}</p>
                <a href={item.href} className="mt-5 inline-flex text-sm font-semibold text-orange hover:text-orange-hover">
                  {item.cta} →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="bg-white py-28">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-orange font-heading font-semibold text-sm uppercase tracking-widest mb-4">
              Setup Packages
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Choose Your Setup Package
            </h2>
            <p className="text-muted text-lg max-w-[500px] mx-auto">
              Setup scopes are quoted after discovery so price, support, and handover match the actual workflow.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-[1000px] mx-auto">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`rounded-2xl p-8 card-lift relative ${
                  pkg.popular
                    ? "bg-navy text-white border-2 border-orange/30"
                    : "bg-surface border border-border-light"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-8 bg-orange text-white text-xs font-bold px-3 py-1 rounded-full">
                    Common Scope
                  </div>
                )}
                
                <div className={`text-sm font-semibold uppercase tracking-wider mb-6 ${
                  pkg.popular ? "text-white/50" : "text-muted"
                }`}>
                  {pkg.name}
                </div>
                
                <div className="font-heading font-extrabold text-4xl mb-1">
                  <span className={pkg.popular ? "text-orange" : "text-dark"}>{pkg.price}</span>
                </div>
                
                <p className={`text-sm mb-2 ${pkg.popular ? "text-white/50" : "text-muted"}`}>
                  {pkg.duration}
                </p>
                
                <ul className="space-y-3 mb-8 mt-6">
                  {pkg.features.map((feature) => (
                    <li key={feature} className={`flex gap-2 items-start text-sm ${
                      pkg.popular ? "text-white/70" : "text-muted-dark"
                    }`}>
                      <span className={`flex-shrink-0 ${pkg.popular ? "text-orange" : "text-green-500"}`}>
                        ✓
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <a
                  href="#contact"
                  className={`block text-center px-6 py-3 rounded-xl font-semibold text-sm transition-all ${
                    pkg.popular
                      ? "bg-orange text-white hover:bg-orange-hover"
                      : "bg-dark text-white hover:bg-dark/90"
                  }`}
                >
                  Discuss Scope
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-surface py-24">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-orange font-heading font-semibold text-sm uppercase tracking-widest mb-4">
              FAQ
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark">
              OpenClaw Setup Questions
            </h2>
          </div>
          
          <div className="space-y-0">
            {[
              {
                q: "How long does OpenClaw setup take?",
                a: "It depends on hosting, integrations, security requirements, and how many workflows need to be configured. A small setup can often be scoped quickly; a team or enterprise rollout needs more discovery, testing, and handover."
              },
              {
                q: "Do I need my own server for OpenClaw?",
                a: "Usually, OpenClaw should run in an environment you control. We can help compare cloud hosting, a dedicated server, or local deployment, then document the trade-offs for cost, control, reliability, and security."
              },
              {
                q: "What model providers does OpenClaw support?",
                a: "OpenClaw can be configured with major hosted model providers and local models where appropriate. We map routing around task complexity, cost control, and reliability rather than assuming one model fits every workflow."
              },
              {
                q: "Can you migrate from my existing AI setup?",
                a: "Often, yes. We review the existing setup first, then decide what can be migrated safely, what should be rebuilt, and what should be left alone."
              },
              {
                q: "What happens if something breaks after setup?",
                a: "Support is scoped before the work begins. The handover normally includes documentation, troubleshooting notes, and options for continued support if the setup becomes business-critical."
              },
              {
                q: "Is OpenClaw suitable for small businesses?",
                a: "Yes, if you are already using AI tools and need more control around memory, workflow, integrations, or review. If the business is just getting started with AI, a simpler assistant workflow may be the better first step."
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
            Ready to Get OpenClaw Working?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-[600px] mx-auto">
            Stop fighting with configuration files. Get a scoped OpenClaw setup with installation and handover support. Book a short consultation to discuss your requirements.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-navy text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-dark transition-all hover:-translate-y-0.5 shadow-xl"
          >
            Book Setup Consultation →
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
                Get Started
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Book Your OpenClaw
                <br />
                <span className="text-orange">Setup Consultation</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Short call to assess your needs, recommend a setup path, and decide whether a scoped quote makes sense. No obligation, no pressure.
              </p>
              
              <div className="space-y-4 text-white/50 text-sm">
                <div className="flex gap-3 items-center">
                  <span className="text-orange">⚡</span>
                  <span>Usually respond quickly</span>
                </div>
                <div className="flex gap-3 items-center">
                  <span className="text-orange">🔒</span>
                  <span>No sales pressure</span>
                </div>
                <div className="flex gap-3 items-center">
                  <span className="text-orange">✅</span>
                  <span>Scoped quote after assessment</span>
                </div>
              </div>
            </div>

            <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8">
              <h3 className="font-heading font-bold text-xl text-white mb-1">Get Your Quote</h3>
              <p className="text-white/40 text-sm mb-6">Tell us about your OpenClaw requirements</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
