import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { ServiceBreadcrumb, ServiceSeo } from "@/components/ServiceSeo";

export const metadata: Metadata = {
  title: "OpenClaw Training & Support UK",
  description: "Professional OpenClaw training and ongoing support services for UK businesses. Monthly retainers, skill development, troubleshooting, and system optimization.",
  keywords: [
    "openclaw training uk",
    "openclaw support services",
    "ai agent training", 
    "openclaw skill development",
    "openclaw consulting support",
    "ai automation support",
    "openclaw monthly retainer",
    "openclaw troubleshooting"
  ],
  alternates: { canonical: "https://openclawconsultant.co.uk/services/training-support" },
  openGraph: {
    title: "OpenClaw Training & Support UK",
    description: "Professional OpenClaw training and ongoing support services for UK businesses. Monthly retainers, skill development, and troubleshooting.",
    url: "https://openclawconsultant.co.uk/services/training-support",
    type: "website",
  },
};

const trainingServices = [
  {
    icon: "🎓",
    title: "OpenClaw Fundamentals", 
    desc: "Master the basics of OpenClaw operation, agent interaction, memory management, and skill usage.",
    duration: "Half-day workshop",
    format: "In-person or virtual",
    includes: ["Agent communication best practices", "Memory system understanding", "Skill discovery & usage", "Troubleshooting basics", "Hands-on exercises"]
  },
  {
    icon: "⚙️",
    title: "Skill Development Training",
    desc: "Learn to build and modify OpenClaw skills. Become self-sufficient in extending your automation capabilities.",
    duration: "Full-day workshop", 
    format: "Virtual with screen sharing",
    includes: ["SKILL.md architecture", "API integration patterns", "Error handling & testing", "Deployment & versioning", "Real skill building exercise"]
  },
  {
    icon: "🔧",
    title: "Advanced Administration",
    desc: "Deep technical training for IT teams on gateway management, security, monitoring, and system optimization.",
    duration: "2-day intensive",
    format: "On-site preferred",
    includes: ["Gateway configuration", "Security hardening", "Performance optimization", "Monitoring & alerting", "Backup & recovery"]
  },
  {
    icon: "👥",
    title: "Team Workshops",
    desc: "Custom training sessions for your entire team to get everyone comfortable with your OpenClaw setup.",
    duration: "Flexible (2-4 hours)",
    format: "On-site or virtual", 
    includes: ["Role-specific training", "Workflow walkthroughs", "Best practices", "Q&A sessions", "Ongoing support plan"]
  }
];

const supportPackages = [
  {
    name: "Essentials Support",
    price: "£197",
    period: "per month",
    bestFor: "Small teams (1-10 people)",
    features: [
      "Email support (48h response)",
      "Monthly skill reviews",
      "Basic troubleshooting",
      "System health monitoring",
      "Documentation updates",
      "Security patch notifications"
    ],
    limits: ["5 hours support time", "Email support only", "No emergency support"]
  },
  {
    name: "Professional Support",
    price: "£497", 
    period: "per month",
    bestFor: "Growing businesses (10-25 people)",
    features: [
      "Priority email + phone support",
      "Monthly optimization calls",
      "New skill development (1 per month)",
      "Performance monitoring",
      "Proactive issue resolution",
      "Emergency support (business hours)"
    ],
    limits: ["15 hours support time", "1 new skill/month", "Business hours only"],
    popular: true
  },
  {
    name: "Enterprise Support",
    price: "£997",
    period: "per month", 
    bestFor: "Large teams (25+ people)",
    features: [
      "Priority phone & email support",
      "Weekly optimization reviews",
      "Unlimited skill development",
      "Advanced monitoring & alerting",
      "Dedicated support engineer",
      "Priority response window"
    ],
    limits: ["Support scope agreed in advance", "Skill work prioritized by value", "Priority availability"]
  }
];

const supportAreas = [
  {
    category: "Technical Support",
    services: [
      { name: "Gateway troubleshooting", desc: "Resolve connection, authentication, and routing issues" },
      { name: "Model configuration", desc: "Optimize model selection and cost management" },
      { name: "Performance optimization", desc: "Speed up response times and reduce resource usage" },
      { name: "Security hardening", desc: "Implement best practices and audit configurations" }
    ]
  },
  {
    category: "Skill Development",
    services: [
      { name: "Custom skill creation", desc: "Build new automations for your specific workflows" },
      { name: "Skill optimization", desc: "Improve existing skills for better performance and reliability" },
      { name: "Integration support", desc: "Connect new tools and services to your OpenClaw setup" },
      { name: "Testing & debugging", desc: "Resolve issues and improve skill reliability" }
    ]
  },
  {
    category: "Training & Education", 
    services: [
      { name: "Team workshops", desc: "Get your team comfortable with OpenClaw operation" },
      { name: "Best practices guidance", desc: "Learn optimal ways to use your automation" },
      { name: "Documentation updates", desc: "Keep internal docs current as your system evolves" },
      { name: "Knowledge transfer", desc: "Reduce dependence on external support over time" }
    ]
  },
  {
    category: "Strategic Consulting",
    services: [
      { name: "Workflow optimization", desc: "Identify new automation opportunities" },
      { name: "Capacity planning", desc: "Scale your system as your business grows" },
      { name: "Value analysis", desc: "Measure and improve automation value" },
      { name: "Technology roadmap", desc: "Plan future enhancements and integrations" }
    ]
  }
];

const trainingOutcomes = [
  {
    outcome: "Agent Communication Mastery",
    description: "Your team will know how to write clearer requests, review outputs, and keep agent work grounded in the right context",
    metrics: ["Clearer prompts", "Fewer misunderstood requests", "Better review habits"]
  },
  {
    outcome: "Self-Sufficient Skill Development", 
    description: "Build and modify skills internally without external dependencies",
    metrics: ["Internal skill ownership", "Faster iteration cycles", "Less dependence on outside help"]
  },
  {
    outcome: "Proactive Problem Resolution",
    description: "Identify and resolve issues before they impact business operations", 
    metrics: ["Earlier issue detection", "Clearer escalation paths", "Less business disruption"]
  },
  {
    outcome: "Optimized Performance",
    description: "Improve the useful value of your OpenClaw setup through careful optimization",
    metrics: ["Cleaner workflows", "Lower avoidable usage", "Higher automation success rates"]
  }
];

const commonIssues = [
  {
    issue: "Agent Not Responding",
    symptoms: "Messages timing out, no response from agent",
    quickFix: "Check gateway status and model connectivity",
    needHelp: "If gateway is running but still no response"
  },
  {
    issue: "Skill Execution Failures",
    symptoms: "Skills start but don't complete, error messages",
    quickFix: "Review recent logs for error details",
    needHelp: "If errors are unclear or persistent"
  },
  {
    issue: "Memory Issues",
    symptoms: "Agent forgetting context, starting conversations fresh",
    quickFix: "Verify memory persistence configuration",
    needHelp: "If memory settings appear correct"
  },
  {
    issue: "High API Costs",
    symptoms: "Unexpected model usage charges",
    quickFix: "Review model routing configuration",
    needHelp: "If costs remain high after optimization"
  },
  {
    issue: "Integration Problems",
    symptoms: "Tools not connecting, authentication failures",
    quickFix: "Check API keys and endpoint URLs",
    needHelp: "If credentials are correct but connections fail"
  }
];

export default function TrainingAndSupportPage() {
  return (
    <>
      <ServiceSeo
        name="OpenClaw Training and Support UK"
        description="OpenClaw training and support services for UK teams that need practical onboarding, troubleshooting, skill development, and ongoing improvement."
        path="/services/training-support"
        serviceType="OpenClaw training and support"
      />

      {/* Hero Section */}
      <section className="hero-gradient relative overflow-hidden min-h-[70vh] flex items-center grain">
        <div className="absolute top-20 right-[10%] w-[400px] h-[400px] bg-orange/5 rounded-full blur-[120px] glow-pulse" />
        <div className="absolute bottom-20 left-[5%] w-[300px] h-[300px] bg-blue/10 rounded-full blur-[100px] glow-pulse" style={{ animationDelay: "3s" }} />

        <div className="max-w-[1140px] mx-auto px-6 relative z-10 py-20">
          <div className="max-w-[720px]">
            <ServiceBreadcrumb current="OpenClaw Training and Support" />
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-white/60 text-sm font-medium">OpenClaw Training & Ongoing Support</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl md:text-[3.2rem] font-extrabold text-white mb-6 leading-[1.05] tracking-tight">
              OpenClaw Training &
              <br />
              <span className="text-orange">Support Services</span>
            </h1>

            <p className="text-white/60 text-lg md:text-xl max-w-[540px] mb-10 leading-relaxed">
              Practical training and ongoing support to help your team use OpenClaw confidently. From basic operation to advanced skill development.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-orange text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-orange-hover transition-all hover:-translate-y-0.5 shadow-glow-orange"
              >
                Book Training Session
              </a>
              <a
                href="/"
                className="inline-flex items-center justify-center bg-white/5 text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-white/10 transition-all border border-white/10"
              >
                ← Back to Home
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#fafbfc] to-transparent" />
      </section>

      {/* Problem Statement */}
      <section className="bg-light py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="max-w-[800px] mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-6">
              Don't Let Your OpenClaw Investment Go to Waste
            </h2>
            <p className="text-muted text-lg leading-relaxed mb-12">
              Having OpenClaw installed is just the beginning. Without proper training and ongoing optimization, teams often leave useful workflows untouched or lose confidence when issues appear.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-card">
                <div className="text-2xl mb-3">😰</div>
                <h3 className="font-heading font-bold text-dark mb-2">Team Frustration</h3>
                <p className="text-muted text-sm">Your team struggles to get agents to work properly, leading to abandoned automation attempts.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-card">
                <div className="text-2xl mb-3">🔧</div>
                <h3 className="font-heading font-bold text-dark mb-2">Technical Issues</h3>
                <p className="text-muted text-sm">When problems occur, no one knows how to fix them, causing downtime and lost productivity.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-card">
                <div className="text-2xl mb-3">📈</div>
                <h3 className="font-heading font-bold text-dark mb-2">Untapped Potential</h3>
                <p className="text-muted text-sm">Your OpenClaw system could automate much more, but no one knows how to identify or implement new opportunities.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Services */}
      <section className="bg-white py-28">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-orange font-heading font-semibold text-sm uppercase tracking-widest mb-4">
              Training Programs
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Comprehensive OpenClaw Training
            </h2>
            <p className="text-muted text-lg max-w-[600px] mx-auto">
              From basic operation to advanced skill development. Get your team confident and capable with OpenClaw.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {trainingServices.map((service) => (
              <div key={service.title} className="bg-surface rounded-2xl p-8 card-lift">
                <div className="flex gap-4 items-start mb-6">
                  <div className="text-3xl">{service.icon}</div>
                  <div className="flex-1">
                    <h3 className="font-heading font-bold text-xl text-dark mb-2">{service.title}</h3>
                    <p className="text-muted leading-relaxed mb-4">{service.desc}</p>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <span className="bg-orange/5 text-orange px-3 py-1 rounded-full font-medium">
                        {service.duration}
                      </span>
                      <span className="bg-blue/5 text-blue px-3 py-1 rounded-full font-medium">
                        {service.format}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-dark mb-3">What's Included:</h4>
                  <ul className="space-y-2">
                    {service.includes.map((item) => (
                      <li key={item} className="flex gap-2 items-start text-sm text-muted-dark">
                        <span className="text-orange mt-0.5 flex-shrink-0">•</span>
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

      {/* Support Packages */}
      <section className="bg-surface py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-orange font-heading font-semibold text-sm uppercase tracking-widest mb-4">
              Support Packages
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Ongoing Support & Optimization
            </h2>
            <p className="text-muted text-lg max-w-[600px] mx-auto">
              Monthly retainer packages to keep your OpenClaw system running optimally and growing with your business.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {supportPackages.map((pkg) => (
              <div
                key={pkg.name}
                className={`rounded-2xl p-8 card-lift relative ${
                  pkg.popular
                    ? "bg-navy text-white border-2 border-orange/30"
                    : "bg-white border border-border-light"
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
                
                <div className="mb-2">
                  <span className={`font-heading font-extrabold text-4xl ${pkg.popular ? "text-orange" : "text-dark"}`}>
                    {pkg.price}
                  </span>
                  <span className={`text-sm ml-1 ${pkg.popular ? "text-white/50" : "text-muted"}`}>
                    {pkg.period}
                  </span>
                </div>
                
                <p className={`text-sm mb-8 font-medium ${pkg.popular ? "text-orange" : "text-blue"}`}>
                  {pkg.bestFor}
                </p>
                
                <div className="space-y-4 mb-8">
                  <div>
                    <h4 className={`font-semibold mb-3 ${pkg.popular ? "text-white" : "text-dark"}`}>
                      What's Included:
                    </h4>
                    <ul className="space-y-2">
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
                  </div>
                  
                  <div>
                    <h4 className={`font-semibold mb-3 ${pkg.popular ? "text-white" : "text-dark"}`}>
                      Limits:
                    </h4>
                    <ul className="space-y-1">
                      {pkg.limits.map((limit) => (
                        <li key={limit} className={`text-xs ${
                          pkg.popular ? "text-white/50" : "text-muted"
                        }`}>
                          {limit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <a
                  href="#contact"
                  className={`block text-center px-6 py-3 rounded-xl font-semibold text-sm transition-all ${
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

      {/* Support Areas */}
      <section className="bg-white py-28">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-orange font-heading font-semibold text-sm uppercase tracking-widest mb-4">
              Support Areas
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Comprehensive OpenClaw Support
            </h2>
            <p className="text-muted text-lg max-w-[600px] mx-auto">
              From technical troubleshooting to strategic optimization. We cover every aspect of your OpenClaw operation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {supportAreas.map((area) => (
              <div key={area.category}>
                <h3 className="font-heading font-bold text-2xl text-dark mb-6">{area.category}</h3>
                <div className="space-y-4">
                  {area.services.map((service) => (
                    <div key={service.name} className="bg-surface rounded-2xl p-6 card-lift">
                      <h4 className="font-heading font-bold text-lg text-dark mb-2">{service.name}</h4>
                      <p className="text-muted text-sm">{service.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Outcomes */}
      <section className="bg-navy text-white py-24 relative overflow-hidden grain">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue/5 rounded-full blur-[150px]" />

        <div className="max-w-[1140px] mx-auto px-6 relative z-10">
          <div className="text-center mb-14">
            <p className="text-orange font-heading font-semibold text-sm uppercase tracking-widest mb-4">
              Training Outcomes
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Measurable Results from OpenClaw Training
            </h2>
            <p className="text-white/60 text-lg max-w-[600px] mx-auto">
              Training should create practical improvements in team confidence, workflow quality, and system reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {trainingOutcomes.map((outcome) => (
              <div key={outcome.outcome} className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8">
                <h3 className="font-heading font-bold text-xl text-white mb-3">{outcome.outcome}</h3>
                <p className="text-white/60 leading-relaxed mb-6">{outcome.description}</p>
                
                <div>
                  <h4 className="text-white/80 font-semibold text-sm mb-3">Typical Results:</h4>
                  <div className="space-y-2">
                    {outcome.metrics.map((metric) => (
                      <div key={metric} className="flex gap-2 items-start text-sm text-white/70">
                        <span className="text-orange mt-0.5 flex-shrink-0">▸</span>
                        {metric}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Issues & Quick Fixes */}
      <section className="bg-light py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-orange font-heading font-semibold text-sm uppercase tracking-widest mb-4">
              Troubleshooting Guide
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Common OpenClaw Issues & Quick Fixes
            </h2>
            <p className="text-muted text-lg max-w-[600px] mx-auto">
              Resolve common problems quickly with these troubleshooting tips. For complex issues, our support team is here to help.
            </p>
          </div>

          <div className="space-y-6">
            {commonIssues.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-card">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
                  <div>
                    <h3 className="font-heading font-bold text-lg text-dark mb-2">{item.issue}</h3>
                    <p className="text-muted text-sm">{item.symptoms}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-dark mb-2">Quick Fix:</h4>
                    <p className="text-muted text-sm">{item.quickFix}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-dark mb-2">Need Help?</h4>
                    <p className="text-muted text-sm">{item.needHelp}</p>
                  </div>
                  
                  <div>
                    <a
                      href="#contact"
                      className="block text-center bg-orange text-white px-4 py-2 rounded-xl font-medium text-sm hover:bg-orange-hover transition-all"
                    >
                      Get Support
                    </a>
                  </div>
                </div>
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
              Training & Support Questions
            </h2>
          </div>
          
          <div className="space-y-0">
            {[
              {
                q: "How long does it take to train a team on OpenClaw?",
                a: "Basic operation can be learned in a half-day workshop. For skill development, plan for a full day. Advanced administration training takes 2 days. Most teams are comfortable with daily operations within a week of training."
              },
              {
                q: "Can training be done remotely?",
                a: "Yes, all training except advanced administration can be delivered effectively online. We use screen sharing, hands-on exercises, and interactive sessions to ensure remote training is as effective as in-person."
              },
              {
                q: "What's included in monthly support packages?",
                a: "Support time can cover troubleshooting, optimization advice, new skill development depending on package, proactive monitoring, and urgent assistance. Higher tiers include more support time and clearer priority response windows."
              },
              {
                q: "Do you provide emergency support outside business hours?",
                a: "Emergency support is included in Professional and Enterprise support packages. Essentials support is business hours only. We define emergency as system-down situations that prevent business operations."
              },
              {
                q: "Can we cancel support packages if we become self-sufficient?",
                a: "Absolutely. Many clients start with support and gradually reduce or cancel as their team becomes more capable. There's no long-term contract — cancel anytime with 30 days notice."
              },
              {
                q: "How do you handle complex technical issues?",
                a: "Complex issues are diagnosed from logs, configuration, integrations, and reproducible examples first. If an upstream OpenClaw issue is likely, we prepare a clear technical report or patch path for the relevant maintainers."
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
            Ready to Improve Your OpenClaw Setup?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-[600px] mx-auto">
            Book a training session or set up ongoing support to ensure your team gets the most from OpenClaw.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-navy text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-dark transition-all hover:-translate-y-0.5 shadow-xl"
          >
            Book Training Session →
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
                Get Support
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Book Your OpenClaw
                <br />
                <span className="text-orange">Training & Support</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Free consultation to assess your training needs and recommend the right support package for your team and business goals.
              </p>
              
              <div className="space-y-4 text-white/50 text-sm">
                <div className="flex gap-3 items-center">
                  <span className="text-orange">🎓</span>
                  <span>Customized training plan for your team</span>
                </div>
                <div className="flex gap-3 items-center">
                  <span className="text-orange">🔧</span>
                  <span>Right-sized support package recommendation</span>
                </div>
                <div className="flex gap-3 items-center">
                  <span className="text-orange">📈</span>
                  <span>Clear path to OpenClaw mastery</span>
                </div>
              </div>
            </div>

            <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8">
              <h3 className="font-heading font-bold text-xl text-white mb-1">Training & Support Consultation</h3>
              <p className="text-white/40 text-sm mb-6">Tell us about your team and support needs</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
