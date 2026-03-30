import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "OpenClaw Setup for Business — Professional vs DIY Guide 2026",
  description: "Complete guide to OpenClaw business setup. Compare professional installation vs DIY, understand costs, timelines, and why professional setup saves money long-term.",
  keywords: [
    "openclaw setup",
    "openclaw business setup",
    "openclaw setup guide",
    "openclaw professional setup",
    "openclaw setup vs diy",
    "openclaw business configuration",
    "openclaw setup cost",
    "openclaw implementation guide"
  ],
  alternates: { canonical: "https://openclawconsultant.co.uk/guides/openclaw-setup-business" },
  openGraph: {
    title: "OpenClaw Setup for Business — Professional vs DIY Guide 2026",
    description: "Complete guide to setting up OpenClaw for business use. Professional vs DIY comparison, costs, and implementation strategies.",
    url: "https://openclawconsultant.co.uk/guides/openclaw-setup-business",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "OpenClaw Setup for Business — Professional vs DIY Guide 2026",
  "description": "Complete guide to setting up OpenClaw for business use, comparing professional installation vs DIY approaches",
  "author": {
    "@type": "Person",
    "name": "Phil Patterson"
  },
  "publisher": {
    "@type": "Organization",
    "name": "OpenClaw Consultant UK"
  }
};

const setupComparison = [
  {
    aspect: "Time Investment",
    diy: {
      title: "40-80 Hours",
      details: "Learning curve, troubleshooting, trial and error, reading documentation, fixing config issues",
      pain: "High"
    },
    professional: {
      title: "5-8 Hours Total",
      details: "Most work done for you. Your involvement limited to requirements gathering and handover training",
      pain: "Low"
    }
  },
  {
    aspect: "Technical Knowledge Required",
    diy: {
      title: "Significant",
      details: "API management, server administration, networking, security configuration, debugging skills",
      pain: "High"
    },
    professional: {
      title: "None",
      details: "Everything handled for you. You interact with finished system through natural conversation",
      pain: "Low"
    }
  },
  {
    aspect: "Risk of Errors",
    diy: {
      title: "High",
      details: "Security vulnerabilities, performance issues, integration problems, data loss risks",
      pain: "High"
    },
    professional: {
      title: "Minimal",
      details: "Proven processes, security hardening, proper backups, tested configurations",
      pain: "Low"
    }
  },
  {
    aspect: "Ongoing Support",
    diy: {
      title: "Community Forums",
      details: "Stack Overflow, Reddit, Discord. Hope someone else had your specific problem",
      pain: "Medium"
    },
    professional: {
      title: "Direct Expert Support",
      details: "Direct line to Phil Patterson. Issues resolved quickly by someone who knows your setup",
      pain: "Low"
    }
  },
  {
    aspect: "Integration Complexity",
    diy: {
      title: "Figure It Out",
      details: "Each integration is a separate project. Authentication, webhooks, API limits, error handling",
      pain: "High"
    },
    professional: {
      title: "Pre-Built Solutions",
      details: "Common integrations already solved. CRM, email, social, analytics — plug and play",
      pain: "Low"
    }
  }
];

const businessBenefits = [
  {
    icon: "⚡",
    title: "Faster Time to Value",
    description: "Start getting ROI immediately instead of spending weeks learning and configuring."
  },
  {
    icon: "🔒",
    title: "Enterprise-Grade Security",
    description: "Production-ready security configuration from day one, not an afterthought."
  },
  {
    icon: "📈",
    title: "Scalable Architecture",
    description: "Built to grow with your business, not just solve today's problems."
  },
  {
    icon: "🛡️",
    title: "Risk Mitigation",
    description: "Avoid common pitfalls that can expose data or cost money in downtime."
  },
  {
    icon: "🎯",
    title: "Business-Focused Skills",
    description: "Skills built for real business operations, not just tech demos."
  },
  {
    icon: "🔄",
    title: "Reliable Operations",
    description: "Monitoring, backups, and failover procedures built in from the start."
  }
];

const implementationPhases = [
  {
    phase: 1,
    title: "Requirements & Planning",
    duration: "Week 1",
    diyApproach: [
      "Research OpenClaw documentation",
      "Choose hosting infrastructure",
      "Plan integrations yourself",
      "Guess at security requirements"
    ],
    professionalApproach: [
      "Detailed requirements workshop",
      "Infrastructure recommendations",
      "Integration strategy planned",
      "Security requirements assessed"
    ]
  },
  {
    phase: 2,
    title: "Core Installation",
    duration: "Week 2",
    diyApproach: [
      "Install OpenClaw (hope it works)",
      "Configure gateway (debug issues)",
      "Set up model routing (trial/error)",
      "Basic security (probably incomplete)"
    ],
    professionalApproach: [
      "Production-grade installation",
      "Optimized gateway configuration", 
      "Model routing with fallbacks",
      "Comprehensive security hardening"
    ]
  },
  {
    phase: 3,
    title: "Skills & Integrations",
    duration: "Week 3-4",
    diyApproach: [
      "Find relevant skills online",
      "Attempt custom skill development",
      "Struggle with API integrations",
      "Basic error handling"
    ],
    professionalApproach: [
      "Business-specific skill installation",
      "Custom skill development as needed",
      "Seamless tool integrations",
      "Robust error handling & logging"
    ]
  },
  {
    phase: 4,
    title: "Testing & Go-Live",
    duration: "Week 4-5",
    diyApproach: [
      "Basic functionality testing",
      "Hope everything works",
      "Go live with fingers crossed",
      "Debug issues in production"
    ],
    professionalApproach: [
      "Comprehensive testing protocols",
      "Load testing & optimization",
      "Staged rollout with monitoring",
      "Support available for issues"
    ]
  }
];

const costComparison = {
  diy: {
    title: "DIY Costs (First Year)",
    items: [
      { item: "Your time (80 hours × £50/hour)", cost: "£4,000" },
      { item: "Infrastructure & hosting", cost: "£500" },
      { item: "API credits", cost: "£1,200" },
      { item: "Mistakes & rework", cost: "£1,500" },
      { item: "Security incidents", cost: "£2,000+" }
    ],
    total: "£9,200+",
    hidden: "Plus stress, uncertainty, and opportunity cost of not focusing on your core business"
  },
  professional: {
    title: "Professional Setup (First Year)",
    items: [
      { item: "Professional installation", cost: "£1,250" },
      { item: "Infrastructure & hosting", cost: "£500" },
      { item: "API credits", cost: "£1,200" },
      { item: "3 months support included", cost: "£0" },
      { item: "Security & monitoring", cost: "£0" }
    ],
    total: "£2,950",
    hidden: "Peace of mind, immediate productivity, expert support when needed"
  }
};

const redFlags = [
  {
    title: "\"I'll just follow a tutorial\"",
    reality: "Most tutorials are outdated, skip security, and don't cover business-specific needs."
  },
  {
    title: "\"How hard can it be?\"",
    reality: "OpenClaw is powerful but complex. Production deployment requires deep understanding of AI, security, and infrastructure."
  },
  {
    title: "\"I'll save money doing it myself\"", 
    reality: "False economy. Your time is worth more than the cost of professional setup, and mistakes are expensive."
  },
  {
    title: "\"I need to understand every detail\"",
    reality: "You don't need to understand plumbing to use a toilet. Focus on your business, not infrastructure."
  }
];

const successStories = [
  {
    business: "Property Management Company",
    challenge: "Manual tenant communication, maintenance scheduling, rent collection tracking",
    diyAttempt: "Spent 6 weeks trying to set up OpenClaw. Got basic installation working but couldn't integrate with property management software.",
    professionalSolution: "Professional setup with CRM integration, automated tenant communications, maintenance scheduling. Operational in 48 hours.",
    result: "30% reduction in admin time, improved tenant satisfaction, automated rent reminders increased on-time payments by 15%."
  },
  {
    business: "Digital Marketing Agency",
    challenge: "Client reporting, social media management, SEO monitoring across 50+ clients",
    diyAttempt: "Technical founder spent entire month on setup. Got overwhelmed with skill development and integration complexity.",
    professionalSolution: "Complete setup with custom reporting skills, social media automation, SEO monitoring dashboard.",
    result: "Scaled from 20 to 50 clients without additional staff. Automated reports freed up 20 hours/week for client acquisition."
  },
  {
    business: "Local Solicitors Practice",
    challenge: "Client intake, document management, appointment scheduling, regulatory compliance",
    diyAttempt: "Junior staff member tasked with setup. Security concerns and compliance requirements proved too complex.",
    professionalSolution: "Professional installation with legal-specific security configuration, document workflow automation, GDPR compliance.",
    result: "40% faster client intake, reduced document errors, compliance monitoring automated. ROI achieved in 2 months."
  }
];

export default function OpenClawSetupBusinessPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="hero-gradient relative overflow-hidden min-h-[70vh] flex items-center grain">
        <div className="max-w-[1140px] mx-auto px-6 relative z-10 py-20">
          <div className="max-w-[720px]">
            <h1 className="font-heading text-4xl sm:text-5xl md:text-[3.2rem] font-extrabold text-white mb-6 leading-[1.05] tracking-tight">
              OpenClaw Setup for Business
              <br />
              <span className="text-orange">Professional vs DIY</span>
            </h1>

            <p className="text-white/60 text-lg md:text-xl max-w-[540px] mb-10 leading-relaxed">
              Complete guide to getting OpenClaw working in your business. Compare DIY vs professional setup, understand real costs, and why professional setup saves money long-term.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#comparison" className="inline-flex items-center justify-center bg-orange text-white px-8 py-4 rounded-btn font-semibold text-base hover:bg-orange-hover transition-all hover:-translate-y-0.5 shadow-glow-orange">
                Compare Options
              </a>
              <a href="#contact" className="inline-flex items-center justify-center bg-white/5 text-white px-8 py-4 rounded-btn font-semibold text-base hover:bg-white/10 transition-all border border-white/10">
                Get Expert Help →
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Why Professional Setup Saves Money Long-Term
            </h2>
            <p className="text-muted max-w-[700px] mx-auto">
              The hidden costs of DIY setup go far beyond the initial time investment. Here's what businesses get wrong about OpenClaw setup costs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {businessBenefits.map((benefit) => (
              <div key={benefit.title} className="bg-surface rounded-box p-8 border border-border card-lift">
                <div className="text-3xl mb-4">{benefit.icon}</div>
                <h3 className="font-heading font-bold text-dark text-lg mb-2">{benefit.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="comparison" className="bg-surface py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              DIY vs Professional Setup: The Reality
            </h2>
            <p className="text-muted max-w-[600px] mx-auto">
              Honest comparison of what's involved in each approach
            </p>
          </div>

          <div className="space-y-8">
            {setupComparison.map((comparison) => (
              <div key={comparison.aspect} className="bg-white rounded-box p-8 shadow-card">
                <h3 className="font-heading font-bold text-xl text-dark mb-6">{comparison.aspect}</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className={`border-l-4 pl-6 ${
                    comparison.diy.pain === 'High' ? 'border-red-500 bg-red-50' :
                    comparison.diy.pain === 'Medium' ? 'border-yellow-500 bg-yellow-50' :
                    'border-green-500 bg-green-50'
                  }`}>
                    <h4 className="font-semibold text-dark mb-2 flex items-center gap-2">
                      🛠️ DIY Approach: {comparison.diy.title}
                    </h4>
                    <p className="text-muted text-sm leading-relaxed">{comparison.diy.details}</p>
                    <span className={`inline-block mt-2 text-xs font-medium px-2 py-1 rounded ${
                      comparison.diy.pain === 'High' ? 'bg-red-100 text-red-700' :
                      comparison.diy.pain === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-green-100 text-green-700'
                    }`}>
                      {comparison.diy.pain} Complexity
                    </span>
                  </div>
                  <div className="border-l-4 border-green-500 bg-green-50 pl-6">
                    <h4 className="font-semibold text-dark mb-2 flex items-center gap-2">
                      🏢 Professional: {comparison.professional.title}
                    </h4>
                    <p className="text-muted text-sm leading-relaxed">{comparison.professional.details}</p>
                    <span className="inline-block mt-2 text-xs font-medium px-2 py-1 rounded bg-green-100 text-green-700">
                      Low Complexity
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy text-white py-24 relative overflow-hidden grain">
        <div className="max-w-[1140px] mx-auto px-6 relative z-10">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Implementation Timeline Comparison
            </h2>
            <p className="text-white/60 max-w-[600px] mx-auto">
              What actually happens during DIY vs professional implementation
            </p>
          </div>

          <div className="space-y-12">
            {implementationPhases.map((phase) => (
              <div key={phase.phase} className="bg-white/[0.03] border border-white/[0.06] rounded-box p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-orange text-white font-bold text-xl w-12 h-12 rounded-full flex items-center justify-center">
                    {phase.phase}
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-xl text-white">{phase.title}</h3>
                    <p className="text-white/60 text-sm">{phase.duration}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-red-300 mb-4 flex items-center gap-2">
                      😓 DIY Approach
                    </h4>
                    <ul className="space-y-2">
                      {phase.diyApproach.map((item, idx) => (
                        <li key={idx} className="text-white/70 text-sm flex gap-2 items-start">
                          <span className="text-red-400 mt-1 flex-shrink-0">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-300 mb-4 flex items-center gap-2">
                      ✅ Professional Approach
                    </h4>
                    <ul className="space-y-2">
                      {phase.professionalApproach.map((item, idx) => (
                        <li key={idx} className="text-white/70 text-sm flex gap-2 items-start">
                          <span className="text-green-400 mt-1 flex-shrink-0">✓</span>
                          {item}
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

      <section className="bg-light py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              True Cost Comparison
            </h2>
            <p className="text-muted max-w-[600px] mx-auto">
              The real financial impact of DIY vs professional setup
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* DIY Costs */}
            <div className="bg-red-50 border-2 border-red-200 rounded-box p-8">
              <h3 className="font-heading font-bold text-xl text-red-800 mb-6">{costComparison.diy.title}</h3>
              <div className="space-y-3 mb-6">
                {costComparison.diy.items.map((item) => (
                  <div key={item.item} className="flex justify-between items-center text-sm">
                    <span className="text-red-700">{item.item}</span>
                    <span className="font-semibold text-red-800">{item.cost}</span>
                  </div>
                ))}
              </div>
              <div className="border-t border-red-300 pt-4 mb-4">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-red-800">Total Cost:</span>
                  <span className="font-bold text-xl text-red-800">{costComparison.diy.total}</span>
                </div>
              </div>
              <p className="text-red-600 text-xs italic">{costComparison.diy.hidden}</p>
            </div>

            {/* Professional Costs */}
            <div className="bg-green-50 border-2 border-green-200 rounded-box p-8">
              <h3 className="font-heading font-bold text-xl text-green-800 mb-6">{costComparison.professional.title}</h3>
              <div className="space-y-3 mb-6">
                {costComparison.professional.items.map((item) => (
                  <div key={item.item} className="flex justify-between items-center text-sm">
                    <span className="text-green-700">{item.item}</span>
                    <span className="font-semibold text-green-800">{item.cost}</span>
                  </div>
                ))}
              </div>
              <div className="border-t border-green-300 pt-4 mb-4">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-green-800">Total Cost:</span>
                  <span className="font-bold text-xl text-green-800">{costComparison.professional.total}</span>
                </div>
              </div>
              <p className="text-green-600 text-xs italic">{costComparison.professional.hidden}</p>
            </div>
          </div>

          <div className="text-center mt-8">
            <div className="bg-white border-2 border-orange/30 rounded-box p-6 inline-block">
              <h3 className="font-semibold text-dark mb-2">💡 Bottom Line</h3>
              <p className="text-muted text-sm max-w-md">
                Professional setup saves <strong>£6,250+</strong> in first year costs while delivering immediate productivity and peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Warning Signs: Don't Fall Into These Traps
            </h2>
            <p className="text-muted max-w-[600px] mx-auto">
              Common misconceptions that lead businesses down expensive DIY paths
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {redFlags.map((flag) => (
              <div key={flag.title} className="bg-yellow-50 border border-yellow-200 rounded-box p-6">
                <h3 className="font-semibold text-yellow-800 mb-3 flex items-center gap-2">
                  ⚠️ {flag.title}
                </h3>
                <p className="text-yellow-700 text-sm leading-relaxed">{flag.reality}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Real Business Success Stories
            </h2>
            <p className="text-muted max-w-[600px] mx-auto">
              How professional OpenClaw setup transformed these businesses
            </p>
          </div>

          <div className="space-y-8">
            {successStories.map((story) => (
              <div key={story.business} className="bg-white rounded-box p-8 shadow-card">
                <div className="mb-6">
                  <h3 className="font-heading font-bold text-xl text-dark mb-2">{story.business}</h3>
                  <p className="text-muted"><strong>Challenge:</strong> {story.challenge}</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6">
                  <div className="bg-red-50 border-l-4 border-red-500 p-4">
                    <h4 className="font-semibold text-red-800 mb-2">DIY Attempt</h4>
                    <p className="text-red-700 text-sm">{story.diyAttempt}</p>
                  </div>
                  <div className="bg-green-50 border-l-4 border-green-500 p-4">
                    <h4 className="font-semibold text-green-800 mb-2">Professional Solution</h4>
                    <p className="text-green-700 text-sm">{story.professionalSolution}</p>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-800 mb-2">📈 Results</h4>
                  <p className="text-blue-700 text-sm">{story.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-orange py-16 relative overflow-hidden">
        <div className="max-w-[900px] mx-auto px-6 text-center relative z-10">
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-white mb-4">
            Skip the Learning Curve. Get Results Immediately.
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-[600px] mx-auto">
            Why spend months learning OpenClaw when you could be using it to grow your business? Professional setup gets you operational in days, not months.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-navy text-white px-10 py-4 rounded-btn font-bold text-lg hover:bg-dark transition-all hover:-translate-y-0.5 shadow-xl"
          >
            Get Professional Setup →
          </a>
        </div>
      </section>

      <section id="contact" className="bg-navy text-white py-24 relative overflow-hidden grain">
        <div className="max-w-[1140px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Ready for Professional
                <br />
                <span className="text-orange">OpenClaw Setup?</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Stop wasting time on setup and start getting value from AI. Book a free consultation to discuss your requirements and get a custom quote.
              </p>

              <div className="bg-white/[0.03] border border-white/[0.06] rounded-box p-6 mb-8">
                <h3 className="font-semibold text-white mb-3">Why businesses choose professional setup:</h3>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li className="flex gap-2">
                    <span className="text-orange">✓</span>
                    Immediate productivity — no learning curve
                  </li>
                  <li className="flex gap-2">
                    <span className="text-orange">✓</span>
                    Production-ready security and monitoring
                  </li>
                  <li className="flex gap-2">
                    <span className="text-orange">✓</span>
                    Expert support when you need it
                  </li>
                  <li className="flex gap-2">
                    <span className="text-orange">✓</span>
                    Lower total cost of ownership
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white/[0.03] border border-white/[0.06] rounded-box p-8">
              <h3 className="font-heading font-bold text-xl text-white mb-1">Get Your Setup Quote</h3>
              <p className="text-white/40 text-sm mb-6">Free consultation with no commitment</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}