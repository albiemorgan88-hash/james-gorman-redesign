import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "AI Automation for Small Business",
  description: "AI automation solutions designed specifically for UK small businesses. Affordable OpenClaw setup, workflow automation, and business process optimization for SMEs.",
  keywords: [
    "ai automation small business uk",
    "sme ai automation", 
    "small business ai consultant",
    "openclaw for small business",
    "ai automation sme",
    "business automation uk",
    "small business ai solutions",
    "affordable ai automation"
  ],
  alternates: { canonical: "https://openclawconsultant.co.uk/services/small-business-automation" },
  openGraph: {
    title: "AI Automation for Small Business",
    description: "AI automation solutions designed specifically for UK small businesses. Affordable OpenClaw setup, workflow automation, and business process optimization.",
    url: "https://openclawconsultant.co.uk/services/small-business-automation",
    type: "website",
  },
};

const smallBusinessChallenges = [
  {
    icon: "⏰",
    title: "Time Poverty",
    desc: "Small teams juggling multiple roles with no time for growth activities.",
    solution: "Automate repetitive tasks to free up 15-25 hours per week for strategic work."
  },
  {
    icon: "💰",
    title: "Budget Constraints", 
    desc: "Can't afford expensive enterprise tools or dedicated tech teams.",
    solution: "Cost-effective OpenClaw setup that delivers enterprise capabilities at SME budgets."
  },
  {
    icon: "🔧",
    title: "Technical Complexity",
    desc: "Lack of technical expertise to implement and maintain AI systems.",
    solution: "Turnkey setup with training so anyone can operate and extend your automation."
  },
  {
    icon: "📈",
    title: "Scaling Challenges",
    desc: "Growth limited by team capacity and manual processes.",
    solution: "Scalable automation that grows with your business without hiring headcount."
  }
];

const automationAreas = [
  {
    area: "Customer Communications",
    processes: [
      "Email sequence automation",
      "Appointment scheduling", 
      "Follow-up reminders",
      "Customer support responses",
      "Review request campaigns"
    ],
    timeSaved: "8-12 hours/week"
  },
  {
    area: "Marketing & Sales",
    processes: [
      "Social media content creation",
      "Lead qualification scoring",
      "CRM data updates",
      "Proposal generation",
      "Pipeline reporting"
    ],
    timeSaved: "10-15 hours/week"
  },
  {
    area: "Operations & Admin",
    processes: [
      "Invoice processing",
      "Expense categorization", 
      "Document generation",
      "Inventory tracking",
      "Compliance reporting"
    ],
    timeSaved: "6-10 hours/week"
  },
  {
    area: "Business Intelligence",
    processes: [
      "Performance dashboards",
      "Competitor monitoring",
      "Financial reporting",
      "Customer analytics",
      "Trend analysis"
    ],
    timeSaved: "4-8 hours/week"
  }
];

const smePackages = [
  {
    name: "Starter Automation",
    price: "£497",
    duration: "3 days",
    bestFor: "1-5 person teams",
    features: [
      "OpenClaw gateway setup",
      "Single model configuration",
      "2 automation workflows",
      "Email & calendar integration", 
      "Basic training session",
      "7 days support"
    ],
    automations: ["Email automation", "Calendar scheduling"]
  },
  {
    name: "Growth Automation", 
    price: "£997",
    duration: "5-7 days",
    bestFor: "5-15 person teams",
    features: [
      "Full OpenClaw setup",
      "Multi-model optimization", 
      "5 automation workflows",
      "CRM & marketing tool integration",
      "Team training workshops",
      "14 days support"
    ],
    automations: ["Lead generation", "Customer communication", "Social media", "Reporting"],
    popular: true
  },
  {
    name: "Scale Automation",
    price: "£1,997", 
    duration: "1-2 weeks",
    bestFor: "15-50 person teams",
    features: [
      "Enterprise-grade OpenClaw",
      "Multi-agent orchestration",
      "10+ automation workflows", 
      "Full business system integration",
      "Comprehensive team training",
      "30 days support"
    ],
    automations: ["Operations automation", "BI dashboards", "Process optimization", "Quality assurance"]
  }
];

const smeResults = [
  {
    business: "Marketing Consultancy",
    size: "3 people", 
    before: "Manual client reporting, social media posting, lead qualification",
    after: "Automated client dashboards, content calendars, lead scoring pipeline",
    results: ["18 hours/week saved", "40% more qualified leads", "£15k/month revenue increase"]
  },
  {
    business: "Property Agency",
    size: "8 people",
    before: "Manual property descriptions, lead follow-up, market analysis", 
    after: "AI property descriptions, automated nurture sequences, market reports",
    results: ["25 hours/week saved", "60% faster property listings", "22% increase in viewings"]
  },
  {
    business: "Accounting Practice",
    size: "12 people", 
    before: "Manual expense categorization, client communications, reporting",
    after: "Automated bookkeeping, client portals, real-time dashboards",
    results: ["35 hours/week saved", "50% faster month-end", "30% client capacity increase"]
  }
];

const implementationSteps = [
  {
    step: "Business Assessment",
    duration: "1 day",
    description: "Audit current processes, identify automation opportunities, calculate ROI potential",
    deliverable: "Automation roadmap with priority workflows"
  },
  {
    step: "Quick Setup",
    duration: "2-3 days", 
    description: "Install OpenClaw, configure essential integrations, implement highest-impact automations",
    deliverable: "Working automation system"
  },
  {
    step: "Team Training",
    duration: "Half day",
    description: "Train your team to use and maintain the automation system",
    deliverable: "Confident team that can operate the system"
  },
  {
    step: "Optimization",
    duration: "Ongoing",
    description: "Monitor performance, refine workflows, add new automations as business grows",
    deliverable: "Continuously improving automation"
  }
];

export default function SmallBusinessAutomationPage() {
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
              <span className="text-white/60 text-sm font-medium">AI Automation for UK Small Business</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl md:text-[3.2rem] font-extrabold text-white mb-6 leading-[1.05] tracking-tight">
              AI Automation for
              <br />
              <span className="text-orange">Small Business UK</span>
            </h1>

            <p className="text-white/60 text-lg md:text-xl max-w-[540px] mb-10 leading-relaxed">
              Affordable OpenClaw automation designed for UK SMEs. Save 15-35 hours per week with intelligent agents that work while you focus on growing your business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-orange text-white px-8 py-4 rounded-btn font-semibold text-base hover:bg-orange-hover transition-all hover:-translate-y-0.5 shadow-glow-orange"
              >
                Get SME Quote
              </a>
              <a
                href="/"
                className="inline-flex items-center justify-center bg-white/5 text-white px-8 py-4 rounded-btn font-semibold text-base hover:bg-white/10 transition-all border border-white/10"
              >
                ← Back to Home
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#fafbfc] to-transparent" />
      </section>

      {/* SME Challenges */}
      <section className="bg-light py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="max-w-[800px] mx-auto text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-6">
              Small Business, Big Challenges
            </h2>
            <p className="text-muted text-lg leading-relaxed">
              UK small businesses face unique constraints that make AI adoption challenging. We've designed OpenClaw automation specifically for SME budgets, timelines, and technical capabilities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {smallBusinessChallenges.map((challenge) => (
              <div key={challenge.title} className="bg-white rounded-box p-8 shadow-card">
                <div className="flex gap-4 items-start mb-4">
                  <div className="text-3xl">{challenge.icon}</div>
                  <div>
                    <h3 className="font-heading font-bold text-xl text-dark mb-2">{challenge.title}</h3>
                    <p className="text-muted text-sm leading-relaxed mb-3">{challenge.desc}</p>
                  </div>
                </div>
                <div className="border-l-4 border-orange pl-4">
                  <p className="text-dark font-medium text-sm"><strong>Our Solution:</strong> {challenge.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Automation Areas */}
      <section className="bg-white py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-orange font-heading font-semibold text-sm uppercase tracking-widest mb-4">
              Automation Opportunities
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Where Small Businesses Save the Most Time
            </h2>
            <p className="text-muted text-lg max-w-[600px] mx-auto">
              Real automation areas where UK SMEs see immediate time savings and business impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {automationAreas.map((area) => (
              <div key={area.area} className="bg-surface rounded-box p-8 card-lift">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="font-heading font-bold text-xl text-dark">{area.area}</h3>
                  <div className="text-right">
                    <div className="text-orange font-bold text-lg">{area.timeSaved}</div>
                    <div className="text-muted text-xs">typical savings</div>
                  </div>
                </div>
                
                <ul className="space-y-3">
                  {area.processes.map((process) => (
                    <li key={process} className="flex gap-2 items-start text-sm text-muted-dark">
                      <span className="text-orange mt-0.5 flex-shrink-0">▸</span>
                      {process}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SME Packages */}
      <section className="bg-surface py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-orange font-heading font-semibold text-sm uppercase tracking-widest mb-4">
              SME Packages
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Affordable Automation for Every Business Size
            </h2>
            <p className="text-muted text-lg max-w-[600px] mx-auto">
              Fixed-price packages designed for small business budgets. Get enterprise-grade automation without enterprise costs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {smePackages.map((pkg) => (
              <div
                key={pkg.name}
                className={`rounded-box p-8 card-lift relative ${
                  pkg.popular
                    ? "bg-navy text-white border-2 border-orange/30"
                    : "bg-white border border-border"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-8 bg-orange text-white text-xs font-bold px-3 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                
                <div className={`text-sm font-semibold uppercase tracking-wider mb-2 ${
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
                
                <p className={`text-sm mb-6 font-medium ${pkg.popular ? "text-orange" : "text-blue"}`}>
                  {pkg.bestFor}
                </p>
                
                <div className="mb-6">
                  <h4 className={`font-semibold mb-3 ${pkg.popular ? "text-white" : "text-dark"}`}>
                    What's Included:
                  </h4>
                  <ul className="space-y-2 mb-4">
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
                
                <div className="mb-8">
                  <h4 className={`font-semibold mb-3 ${pkg.popular ? "text-white" : "text-dark"}`}>
                    Automations:
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {pkg.automations.map((auto) => (
                      <span
                        key={auto}
                        className={`text-xs px-2 py-1 rounded ${
                          pkg.popular
                            ? "bg-white/10 text-white/70"
                            : "bg-surface text-muted-dark"
                        }`}
                      >
                        {auto}
                      </span>
                    ))}
                  </div>
                </div>
                
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

      {/* SME Results */}
      <section className="bg-navy text-white py-24 relative overflow-hidden grain">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue/5 rounded-full blur-[150px]" />

        <div className="max-w-[1140px] mx-auto px-6 relative z-10">
          <div className="text-center mb-14">
            <p className="text-orange font-heading font-semibold text-sm uppercase tracking-widest mb-4">
              SME Results
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Real UK Small Businesses, Real Results
            </h2>
            <p className="text-white/60 text-lg max-w-[600px] mx-auto">
              How OpenClaw automation has transformed operations for UK SMEs across different industries.
            </p>
          </div>

          <div className="space-y-8">
            {smeResults.map((result, index) => (
              <div key={index} className="bg-white/[0.03] border border-white/[0.06] rounded-box p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                  <div>
                    <h3 className="font-heading font-bold text-xl text-white mb-2">{result.business}</h3>
                    <p className="text-orange text-sm font-medium mb-4">{result.size}</p>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-white/80 font-semibold text-sm mb-2">Before Automation:</h4>
                        <p className="text-white/60 text-sm">{result.before}</p>
                      </div>
                      <div>
                        <h4 className="text-white/80 font-semibold text-sm mb-2">After Automation:</h4>
                        <p className="text-white/60 text-sm">{result.after}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-2">
                    <h4 className="text-white/80 font-semibold text-sm mb-4">Results:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {result.results.map((achievement) => (
                        <div key={achievement} className="bg-white/[0.05] rounded-btn p-4 text-center">
                          <p className="text-orange font-bold text-lg mb-1">
                            {achievement.split(' ')[0]} {achievement.split(' ')[1]}
                          </p>
                          <p className="text-white/60 text-xs">
                            {achievement.split(' ').slice(2).join(' ')}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="bg-white py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-orange font-heading font-semibold text-sm uppercase tracking-widest mb-4">
              Implementation
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              From Assessment to Automation in Under a Week
            </h2>
            <p className="text-muted text-lg max-w-[600px] mx-auto">
              Fast implementation designed for busy small business owners. Start seeing results within days, not months.
            </p>
          </div>

          <div className="space-y-8">
            {implementationSteps.map((step, index) => (
              <div key={index} className="flex gap-6 items-start">
                <div className="bg-orange text-white font-bold text-lg w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <div className="bg-surface rounded-box p-8 shadow-card">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <h3 className="font-heading font-bold text-xl text-dark">{step.step}</h3>
                      <span className="text-orange font-medium text-sm">{step.duration}</span>
                    </div>
                    <p className="text-muted leading-relaxed mb-4">{step.description}</p>
                    <div className="bg-orange/5 border-l-4 border-orange pl-4">
                      <p className="text-dark font-medium text-sm">
                        <strong>Deliverable:</strong> {step.deliverable}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator Preview */}
      <section className="bg-light py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="bg-white rounded-box p-8 lg:p-12 shadow-card">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl font-bold text-dark mb-4">
                Calculate Your Automation ROI
              </h2>
              <p className="text-muted text-lg">
                See how much time and money OpenClaw automation could save your business.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="font-heading font-bold text-xl text-dark mb-6">Typical SME Savings</h3>
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span className="text-muted">Email & communication automation</span>
                    <span className="font-bold text-dark">8-12 hours/week</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted">Lead generation & qualification</span>
                    <span className="font-bold text-dark">6-10 hours/week</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted">Administrative tasks</span>
                    <span className="font-bold text-dark">5-8 hours/week</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted">Reporting & analytics</span>
                    <span className="font-bold text-dark">3-5 hours/week</span>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-dark">Total Weekly Savings</span>
                      <span className="font-bold text-orange text-lg">22-35 hours</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-navy text-white rounded-box p-8">
                <h3 className="font-heading font-bold text-xl mb-6">Your Monthly ROI</h3>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-white/70">Time saved (25 hours/week)</span>
                    <span className="text-orange font-bold">100 hours/month</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/70">Value of time (£25/hour)</span>
                    <span className="text-orange font-bold">£2,500/month</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/70">Setup investment (one-time)</span>
                    <span className="text-white/70">£997</span>
                  </div>
                  <div className="border-t border-white/20 pt-4">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-white">ROI breakeven</span>
                      <span className="font-bold text-orange text-lg">2 weeks</span>
                    </div>
                  </div>
                </div>
                <p className="text-white/60 text-sm italic">
                  "After just 2 weeks, your automation pays for itself. Everything after that is pure profit."
                </p>
              </div>
            </div>
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
              Small Business Automation Questions
            </h2>
          </div>
          
          <div className="space-y-0">
            {[
              {
                q: "Is OpenClaw suitable for very small businesses (under 5 people)?",
                a: "Yes, if you have repetitive processes that eat time. Even 1-2 person businesses can benefit significantly. Our Starter package is designed for micro-businesses and typically pays for itself within 2-3 weeks through time savings."
              },
              {
                q: "What's the minimum technical knowledge required?",
                a: "None. We handle all the technical setup and train your team to use the system through simple conversations. If you can use WhatsApp or email, you can use OpenClaw. The complexity is hidden behind natural language interactions."
              },
              {
                q: "How quickly do small businesses see results?",
                a: "Most SMEs see immediate time savings within 24-48 hours of setup. The first week typically saves 10-15 hours, and full benefits (20-35 hours/week) are realized within the first month as you learn to leverage all the automations."
              },
              {
                q: "Can the automation scale as my business grows?",
                a: "Absolutely. OpenClaw is designed to scale. You can add new skills, connect more tools, and handle increased volume without rebuilding anything. Many clients start with basic automation and gradually expand as their business grows."
              },
              {
                q: "What happens if I don't have the budget for ongoing support?",
                a: "All packages include comprehensive documentation and training so you can maintain the system independently. Many small businesses run successfully without ongoing support — though it's available if you need it later."
              },
              {
                q: "How does this compare to hiring a virtual assistant?",
                a: "A VA costs £800-1,500/month and works business hours. OpenClaw works 24/7, never takes holidays, and has a one-time setup cost. For repetitive tasks, automation is typically 3-5x more cost-effective than human assistance."
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
            Ready to Save 25+ Hours Per Week?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-[600px] mx-auto">
            Free consultation to identify your biggest time drains and calculate your exact automation ROI. No obligation, just honest advice.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-navy text-white px-10 py-4 rounded-btn font-bold text-lg hover:bg-dark transition-all hover:-translate-y-0.5 shadow-xl"
          >
            Get Your SME Quote →
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
                Small Business Automation
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Book Your SME
                <br />
                <span className="text-orange">Automation Assessment</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Free 30-minute call designed specifically for small business owners. We'll identify your biggest time drains and calculate exactly how much OpenClaw could save your business.
              </p>
              
              <div className="space-y-4 text-white/50 text-sm">
                <div className="flex gap-3 items-center">
                  <span className="text-orange">⏱️</span>
                  <span>Identify 15-35 hours/week in time savings</span>
                </div>
                <div className="flex gap-3 items-center">
                  <span className="text-orange">💰</span>
                  <span>Calculate exact ROI for your business</span>
                </div>
                <div className="flex gap-3 items-center">
                  <span className="text-orange">🎯</span>
                  <span>Honest assessment — we'll tell you if it's not right</span>
                </div>
              </div>
            </div>

            <div className="bg-white/[0.03] border border-white/[0.06] rounded-box p-8">
              <h3 className="font-heading font-bold text-xl text-white mb-1">SME Automation Assessment</h3>
              <p className="text-white/40 text-sm mb-6">Tell us about your business and time challenges</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}