import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "OpenClaw Setup & Configuration",
  description: "Professional OpenClaw installation, gateway setup, model routing, and environment configuration. Get OpenClaw running in production from day one. UK&apos;s leading OpenClaw consultant.",
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
    title: "OpenClaw Setup & Configuration Service UK | Expert Installation",
    description: "Professional OpenClaw installation, gateway setup, model routing, and environment configuration. Get OpenClaw running in production from day one.",
    url: "https://openclawconsultant.co.uk/services/setup-configuration",
    type: "website",
  },
};

const setupSteps = [
  {
    step: "01",
    title: "Environment Assessment",
    desc: "We audit your infrastructure, identify the optimal hosting approach, and plan your OpenClaw architecture."
  },
  {
    step: "02", 
    title: "Gateway Installation",
    desc: "Full OpenClaw gateway setup with proper security hardening, SSL configuration, and network access controls."
  },
  {
    step: "03",
    title: "Model Configuration", 
    desc: "Configure model routing for Anthropic, OpenAI, and local models. Optimize costs and performance for your use case."
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
  "Model router optimization", 
  "SSL certificate setup",
  "Environment variable management",
  "Security hardening",
  "Memory persistence configuration",
  "Tool integration framework",
  "Skill development environment",
  "Monitoring & logging setup",
  "Backup & recovery planning"
];

const packages = [
  {
    name: "Standard Setup",
    price: "£750",
    duration: "3-5 days",
    features: [
      "OpenClaw gateway installation",
      "Single model provider setup",
      "Basic agent configuration", 
      "2 custom skills included",
      "Email & Slack integration",
      "1 week post-setup support"
    ]
  },
  {
    name: "Business Setup",
    price: "£1,250",
    duration: "5-7 days", 
    features: [
      "Multi-model gateway setup",
      "Advanced security hardening",
      "Production-grade monitoring",
      "5 custom skills included", 
      "Full tool integration suite",
      "Team training (up to 5 users)",
      "2 weeks post-setup support"
    ],
    popular: true
  },
  {
    name: "Enterprise Setup",
    price: "From £2,500",
    duration: "1-2 weeks",
    features: [
      "Multi-agent orchestration",
      "Custom infrastructure design",
      "Advanced workflow automation",
      "Unlimited custom skills",
      "Enterprise integrations",
      "Comprehensive team training",
      "30 days post-setup support"
    ]
  }
];

export default function SetupConfigurationPage() {
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
              <span className="text-white/60 text-sm font-medium">Professional OpenClaw Setup Service</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl md:text-[3.2rem] font-extrabold text-white mb-6 leading-[1.05] tracking-tight">
              OpenClaw Setup &
              <br />
              <span className="text-orange">Configuration Service</span>
            </h1>

            <p className="text-white/60 text-lg md:text-xl max-w-[540px] mb-10 leading-relaxed">
              Get OpenClaw running in production with expert installation, gateway configuration, model routing, and security hardening.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-orange text-white px-8 py-4 rounded-btn font-semibold text-base hover:bg-orange-hover transition-all hover:-translate-y-0.5 shadow-glow-orange"
              >
                Get Your Quote
              </a>
              <a
                href="#process"
                className="inline-flex items-center justify-center bg-white/5 text-white px-8 py-4 rounded-btn font-semibold text-base hover:bg-white/10 transition-all border border-white/10"
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
              Why Most OpenClaw Setups Fail
            </h2>
            <p className="text-muted text-lg leading-relaxed mb-12">
              OpenClaw is powerful but complex. Gateway configuration, model routing, memory management, security hardening — get any of it wrong and you&apos;ll spend weeks debugging instead of building.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-box p-6 shadow-card">
                <div className="text-2xl mb-3">⚠️</div>
                <h3 className="font-heading font-bold text-dark mb-2">Gateway Issues</h3>
                <p className="text-muted text-sm">Complex networking, SSL certificates, and daemon management that breaks silently.</p>
              </div>
              <div className="bg-white rounded-box p-6 shadow-card">
                <div className="text-2xl mb-3">💸</div>
                <h3 className="font-heading font-bold text-dark mb-2">Model Costs</h3>
                <p className="text-muted text-sm">Poor routing configuration leads to expensive model calls and slow response times.</p>
              </div>
              <div className="bg-white rounded-box p-6 shadow-card">
                <div className="text-2xl mb-3">🔒</div>
                <h3 className="font-heading font-bold text-dark mb-2">Security Gaps</h3>
                <p className="text-muted text-sm">Exposed endpoints, weak authentication, and unencrypted data storage.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="bg-white py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-orange font-heading font-semibold text-sm uppercase tracking-widest mb-4">
                Our Solution
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-6">
                Production-Ready OpenClaw From Day One
              </h2>
              <p className="text-muted text-lg leading-relaxed mb-8">
                Skip the weeks of trial and error. Phil Patterson has built and deployed dozens of OpenClaw systems for UK businesses. You get a battle-tested setup that works immediately.
              </p>
              
              <div className="space-y-4">
                <div className="flex gap-3 items-start">
                  <span className="text-orange mt-1 flex-shrink-0">✓</span>
                  <div>
                    <p className="font-semibold text-dark">Expert Installation</p>
                    <p className="text-muted text-sm">Gateway daemon, model routing, SSL certificates, security hardening — all configured correctly first time.</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-orange mt-1 flex-shrink-0">✓</span>
                  <div>
                    <p className="font-semibold text-dark">Cost Optimization</p>
                    <p className="text-muted text-sm">Smart model routing saves you hundreds per month on API costs while improving response times.</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-orange mt-1 flex-shrink-0">✓</span>
                  <div>
                    <p className="font-semibold text-dark">Production Monitoring</p>
                    <p className="text-muted text-sm">Logging, metrics, and health checks so you know immediately if anything goes wrong.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-surface rounded-box p-8">
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
              A proven 6-step process that gets you from zero to production-ready OpenClaw in under a week.
            </p>
          </div>

          <div className="space-y-8">
            {setupSteps.map((step, index) => (
              <div key={index} className="flex gap-6 items-start">
                <div className="bg-orange text-white font-bold text-lg w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  {step.step}
                </div>
                <div className="flex-1 bg-white rounded-box p-8 shadow-card">
                  <h3 className="font-heading font-bold text-xl text-dark mb-2">{step.title}</h3>
                  <p className="text-muted leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="bg-white py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-orange font-heading font-semibold text-sm uppercase tracking-widest mb-4">
              Setup Packages
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Choose Your Setup Package
            </h2>
            <p className="text-muted text-lg max-w-[500px] mx-auto">
              Fixed-price packages for every business size. All include expert installation and post-setup support.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-[1000px] mx-auto">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`rounded-box p-8 card-lift relative ${
                  pkg.popular
                    ? "bg-navy text-white border-2 border-orange/30"
                    : "bg-surface border border-border"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-8 bg-orange text-white text-xs font-bold px-3 py-1 rounded-full">
                    Most Popular
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
                  className={`block text-center px-6 py-3 rounded-btn font-semibold text-sm transition-all ${
                    pkg.popular
                      ? "bg-orange text-white hover:bg-orange-hover"
                      : "bg-dark text-white hover:bg-dark/90"
                  }`}
                >
                  Get Started
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
                a: "Standard setups take 3-5 days from start to finish. Business setups with advanced features take 5-7 days. Enterprise setups with multiple agents can take 1-2 weeks. You&apos;ll have a working system much faster than trying to do it yourself."
              },
              {
                q: "Do I need my own server for OpenClaw?",
                a: "Yes, OpenClaw runs on your infrastructure for security and control. We can help you choose between cloud hosting (AWS, DigitalOcean) or local deployment (Mac mini, dedicated server). We&apos;ll recommend the best option for your needs and budget."
              },
              {
                q: "What model providers does OpenClaw support?",
                a: "OpenClaw works with Anthropic Claude, OpenAI GPT-4, Google Gemini, local models via Ollama, and many others. We&apos;ll configure smart routing to optimize costs — using cheaper models for simple tasks and premium models only when needed."
              },
              {
                q: "Can you migrate from my existing AI setup?",
                a: "Absolutely. We can migrate conversations, memory, and workflows from ChatGPT, custom GPTs, Zapier automations, or other AI tools. The goal is to improve on what you already have, not start from scratch."
              },
              {
                q: "What happens if something breaks after setup?",
                a: "All setups include post-deployment support (1-4 weeks depending on package). After that, you can continue with monthly support or handle maintenance yourself. We also provide documentation and training so your team isn&apos;t dependent on us."
              },
              {
                q: "Is OpenClaw suitable for small businesses?",
                a: "Yes, if you&apos;re already using AI tools and want more control. OpenClaw isn&apos;t for businesses just getting started with AI — start with ChatGPT first. But if you&apos;re hitting limitations with existing tools, OpenClaw can be incredibly powerful even for small teams."
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
            Stop fighting with configuration files. Get a production-ready OpenClaw setup installed by an expert. Free consultation to discuss your requirements.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-navy text-white px-10 py-4 rounded-btn font-bold text-lg hover:bg-dark transition-all hover:-translate-y-0.5 shadow-xl"
          >
            Book Free Consultation →
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
                Free 30-minute call to assess your needs, recommend the right package, and give you a fixed-price quote. No obligation, no pressure.
              </p>
              
              <div className="space-y-4 text-white/50 text-sm">
                <div className="flex gap-3 items-center">
                  <span className="text-orange">⚡</span>
                  <span>Usually respond within a few hours</span>
                </div>
                <div className="flex gap-3 items-center">
                  <span className="text-orange">🔒</span>
                  <span>Free consultation — no sales pressure</span>
                </div>
                <div className="flex gap-3 items-center">
                  <span className="text-orange">✅</span>
                  <span>Fixed-price quote after assessment</span>
                </div>
              </div>
            </div>

            <div className="bg-white/[0.03] border border-white/[0.06] rounded-box p-8">
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