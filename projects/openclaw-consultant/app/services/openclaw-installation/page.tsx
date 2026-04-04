import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "OpenClaw Installation Service",
  description: "Professional OpenClaw installation service. 24hr turnaround, complete configuration, WhatsApp/Telegram/Discord/Slack integration. Expert setup from Phil Patterson.",
  keywords: [
    "openclaw install",
    "openclaw installation service",
    "openclaw professional setup",
    "openclaw installation uk",
    "openclaw setup service",
    "openclaw configuration",
    "openclaw gateway setup",
    "openclaw expert installation"
  ],
  alternates: { canonical: "https://openclawconsultant.co.uk/services/openclaw-installation" },
  openGraph: {
    title: "OpenClaw Installation Service — Professional Setup UK",
    description: "Professional OpenClaw installation with 24hr turnaround. Complete configuration, multi-platform integration, and expert setup.",
    url: "https://openclawconsultant.co.uk/services/openclaw-installation",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "OpenClaw Installation Service",
  "description": "Professional OpenClaw installation and configuration service with 24-hour turnaround",
  "provider": {
    "@type": "Person",
    "name": "Phil Patterson",
    "jobTitle": "OpenClaw Consultant"
  },
  "areaServed": { "@type": "Country", name: "United Kingdom" },
  "offers": {
    "@type": "Offer",
    "price": "750",
    "priceCurrency": "GBP",
    "availability": "https://schema.org/InStock"
  }
};

const installationFeatures = [
  {
    icon: "⚡",
    title: "24-Hour Turnaround",
    description: "Your OpenClaw system installed, configured, and ready to work within 24 hours of starting."
  },
  {
    icon: "🔧",
    title: "Complete Configuration",
    description: "Gateway setup, model routing, API keys, environment variables — everything configured properly."
  },
  {
    icon: "💬",
    title: "Multi-Platform Integration",
    description: "Connect to WhatsApp, Telegram, Discord, Slack — wherever your team communicates."
  },
  {
    icon: "🛡️",
    title: "Security Hardening",
    description: "Proper firewall rules, access controls, and security configuration for production use."
  },
  {
    icon: "📚",
    title: "Skills Pre-Loaded",
    description: "Essential skills installed and configured: weather, web search, file management, scheduling."
  },
  {
    icon: "🎯",
    title: "Custom SOUL Configuration",
    description: "Agent personality tuned for your business needs and communication style."
  }
];

const installationProcess = [
  {
    step: 1,
    title: "Discovery & Requirements",
    description: "We assess your infrastructure, discuss your needs, and plan the optimal OpenClaw setup for your business.",
    duration: "30 minutes"
  },
  {
    step: 2,
    title: "Infrastructure Setup",
    description: "Install OpenClaw, configure the gateway, set up model routing, and establish secure connections.",
    duration: "2-3 hours"
  },
  {
    step: 3,
    title: "Skills & Integration",
    description: "Install essential skills, configure integrations with your existing tools, and set up communication channels.",
    duration: "1-2 hours"
  },
  {
    step: 4,
    title: "Testing & Optimization",
    description: "Comprehensive testing of all systems, performance optimization, and final security hardening.",
    duration: "1 hour"
  },
  {
    step: 5,
    title: "Handover & Training",
    description: "Live walkthrough of your system, training on basic operations, and documentation handover.",
    duration: "1 hour"
  }
];

const pricingTiers = [
  {
    name: "Essential Install",
    price: "£750",
    description: "Perfect for small businesses getting started with OpenClaw",
    features: [
      "Complete OpenClaw installation",
      "Gateway & API configuration", 
      "Up to 3 communication channels",
      "5 pre-loaded skills",
      "Basic SOUL.md setup",
      "2 weeks post-install support",
      "Documentation package"
    ],
    popular: false
  },
  {
    name: "Business Install",
    price: "£1,250",
    description: "Comprehensive setup for businesses ready to scale with AI",
    features: [
      "Everything in Essential",
      "Up to 10 custom skills",
      "CRM/tool integrations",
      "Multi-agent orchestration setup",
      "Advanced memory configuration",
      "Cron job scheduling",
      "1 month of support",
      "Training session included"
    ],
    popular: true
  },
  {
    name: "Enterprise Install", 
    price: "£2,500",
    description: "Full-scale deployment with custom development",
    features: [
      "Everything in Business",
      "Unlimited custom skills",
      "Complex workflow automation",
      "Multi-server deployment",
      "Advanced security hardening",
      "Load balancing & redundancy",
      "3 months support",
      "Monthly review calls"
    ],
    popular: false
  }
];

const whyChooseProfessional = [
  {
    challenge: "Complex Configuration",
    diyReality: "Hours wrestling with gateway configs, API routing, environment variables, and connection issues.",
    professionalSolution: "Everything configured correctly first time. Phil has done this hundreds of times."
  },
  {
    challenge: "Security Vulnerabilities",
    diyReality: "Exposed ports, weak authentication, unencrypted connections — common security mistakes.",
    professionalSolution: "Production-grade security from day one. Proper firewall rules and access controls."
  },
  {
    challenge: "Integration Headaches",
    diyReality: "Each tool integration requires different approaches, authentication methods, and error handling.",
    professionalSolution: "Seamless integration with your existing systems. Phil knows the pitfalls and shortcuts."
  },
  {
    challenge: "Performance Issues",
    diyReality: "Slow responses, memory leaks, crashed agents — performance problems are frustrating to debug.",
    professionalSolution: "Optimized configuration for your specific use case. No trial-and-error period."
  }
];

export default function OpenClawInstallationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="hero-gradient relative overflow-hidden min-h-[70vh] flex items-center grain">
        <div className="max-w-[1140px] mx-auto px-6 relative z-10 py-20">
          <div className="max-w-[720px]">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-white/60 text-sm font-medium">24-Hour Turnaround Available</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl md:text-[3.2rem] font-extrabold text-white mb-6 leading-[1.05] tracking-tight">
              Professional OpenClaw
              <br />
              <span className="text-orange">Installation Service</span>
            </h1>

            <p className="text-white/60 text-lg md:text-xl max-w-[540px] mb-10 leading-relaxed">
              Skip the setup headaches. Get OpenClaw installed, configured, and working for your business in 24 hours with professional integration and support.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#pricing" className="inline-flex items-center justify-center bg-orange text-white px-8 py-4 rounded-btn font-semibold text-base hover:bg-orange-hover transition-all hover:-translate-y-0.5 shadow-glow-orange">
                View Pricing
              </a>
              <a href="#process" className="inline-flex items-center justify-center bg-white/5 text-white px-8 py-4 rounded-btn font-semibold text-base hover:bg-white/10 transition-all border border-white/10">
                How It Works ↓
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              What's Included in Professional Installation
            </h2>
            <p className="text-muted max-w-[600px] mx-auto">
              Complete setup and configuration — no technical knowledge required from your side
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {installationFeatures.map((feature) => (
              <div key={feature.title} className="bg-surface rounded-box p-8 border border-border card-lift">
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="font-heading font-bold text-dark text-lg mb-2">{feature.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy text-white py-24 relative overflow-hidden grain">
        <div className="max-w-[1140px] mx-auto px-6 relative z-10">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Why Choose Professional Installation?
            </h2>
            <p className="text-white/60 max-w-[600px] mx-auto">
              Save days of frustration and get a production-ready system from the start
            </p>
          </div>

          <div className="space-y-8">
            {whyChooseProfessional.map((item) => (
              <div key={item.challenge} className="bg-white/[0.03] border border-white/[0.06] rounded-box p-8">
                <h3 className="font-heading font-bold text-xl text-orange mb-6">{item.challenge}</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="bg-red-900/20 border border-red-500/20 rounded-lg p-6">
                    <h4 className="font-semibold text-red-300 mb-3 flex items-center gap-2">
                      <span>❌</span> DIY Reality
                    </h4>
                    <p className="text-white/70 text-sm leading-relaxed">{item.diyReality}</p>
                  </div>
                  <div className="bg-green-900/20 border border-green-500/20 rounded-lg p-6">
                    <h4 className="font-semibold text-green-300 mb-3 flex items-center gap-2">
                      <span>✅</span> Professional Solution
                    </h4>
                    <p className="text-white/70 text-sm leading-relaxed">{item.professionalSolution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="bg-light py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Our Installation Process
            </h2>
            <p className="text-muted max-w-[600px] mx-auto">
              Systematic approach ensures nothing is missed and your system is production-ready
            </p>
          </div>

          <div className="space-y-8">
            {installationProcess.map((step) => (
              <div key={step.step} className="bg-white rounded-box p-8 shadow-card">
                <div className="flex items-start gap-6">
                  <div className="bg-orange text-white font-bold text-xl w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4">
                      <h3 className="font-heading font-bold text-xl text-dark">{step.title}</h3>
                      <span className="text-orange text-sm font-medium">{step.duration}</span>
                    </div>
                    <p className="text-muted leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-green-50 border border-green-200 rounded-box p-6 inline-block">
              <div className="flex items-center gap-3">
                <span className="text-2xl">⚡</span>
                <div>
                  <h3 className="font-semibold text-green-800">Total Time: 5-8 Hours</h3>
                  <p className="text-green-600 text-sm">Spread across 24-48 hours for proper testing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="bg-white py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Installation Packages
            </h2>
            <p className="text-muted max-w-[600px] mx-auto">
              Choose the package that matches your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricingTiers.map((tier) => (
              <div 
                key={tier.name} 
                className={`rounded-box p-8 ${
                  tier.popular 
                    ? 'bg-navy text-white border-2 border-orange/30 relative' 
                    : 'bg-surface border border-border'
                } card-lift`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-6 bg-orange text-white text-xs font-bold px-3 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <div className={`text-sm font-semibold uppercase tracking-wider mb-6 ${
                  tier.popular ? 'text-white/50' : 'text-muted'
                }`}>
                  {tier.name}
                </div>
                <div className="font-heading font-extrabold text-4xl mb-1">
                  {tier.popular ? (
                    <>From <span className="text-orange">{tier.price}</span></>
                  ) : (
                    tier.price
                  )}
                </div>
                <p className={`text-sm mb-8 ${tier.popular ? 'text-white/50' : 'text-muted'}`}>
                  {tier.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className={`flex gap-2 items-start text-sm ${
                      tier.popular ? 'text-white/70' : 'text-muted-dark'
                    }`}>
                      <span className={tier.popular ? 'text-orange' : 'text-green-500'}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`block text-center px-6 py-3 rounded-btn font-semibold text-sm transition-all ${
                    tier.popular
                      ? 'bg-orange text-white hover:bg-orange-hover'
                      : 'bg-dark text-white hover:bg-dark/90'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-16">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="bg-white rounded-box p-8 shadow-card">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-heading font-bold text-2xl text-dark mb-4">
                  Not Sure Which Package You Need?
                </h3>
                <p className="text-muted mb-6 leading-relaxed">
                  Book a free consultation and Phil will assess your requirements, recommend the right package, and give you a clear timeline. No obligation.
                </p>
                <ul className="space-y-2">
                  <li className="flex gap-2 text-sm text-muted-dark">
                    <span className="text-green-500">✓</span>
                    Free 30-minute consultation
                  </li>
                  <li className="flex gap-2 text-sm text-muted-dark">
                    <span className="text-green-500">✓</span>
                    Custom quote based on your needs
                  </li>
                  <li className="flex gap-2 text-sm text-muted-dark">
                    <span className="text-green-500">✓</span>
                    Demo of existing installation
                  </li>
                </ul>
              </div>
              <div className="text-center">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center bg-orange text-white px-8 py-4 rounded-btn font-bold text-lg hover:bg-orange-hover transition-all hover:-translate-y-0.5 shadow-xl"
                >
                  Book Free Consultation
                </a>
                <p className="text-muted text-xs mt-3">
                  Usually respond within 2 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-navy text-white py-24 relative overflow-hidden grain">
        <div className="max-w-[1140px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Ready to Get
                <br />
                <span className="text-orange">OpenClaw Installed?</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Start with a free consultation. Phil will assess your needs, recommend the right package, and give you a clear timeline for getting OpenClaw working in your business.
              </p>

              <div className="bg-white/[0.03] border border-white/[0.06] rounded-box p-6 mb-8">
                <h3 className="font-semibold text-white mb-3">What happens next:</h3>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li className="flex gap-2">
                    <span className="text-orange">1.</span>
                    Free consultation to understand your requirements
                  </li>
                  <li className="flex gap-2">
                    <span className="text-orange">2.</span>
                    Custom quote and timeline based on your needs
                  </li>
                  <li className="flex gap-2">
                    <span className="text-orange">3.</span>
                    Installation scheduled within 24-48 hours
                  </li>
                  <li className="flex gap-2">
                    <span className="text-orange">4.</span>
                    Your OpenClaw system ready to work
                  </li>
                </ul>
              </div>

              <div className="space-y-4 text-white/50 text-sm">
                <div className="flex gap-3 items-center">
                  <span className="text-orange">📧</span>
                  <a href="mailto:contact@bluecanvas.ai" className="hover:text-white transition-colors">
                    contact@bluecanvas.ai
                  </a>
                </div>
                <div className="flex gap-3 items-center">
                  <span className="text-orange">📞</span>
                  <a href="tel:07935217762" className="hover:text-white transition-colors">
                    07935 217762
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white/[0.03] border border-white/[0.06] rounded-box p-8">
              <h3 className="font-heading font-bold text-xl text-white mb-1">Get Your Installation Quote</h3>
              <p className="text-white/40 text-sm mb-6">Free consultation — no commitment required</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}