import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "AI Agent Costs UK: Full Pricing Guide 2026",
  description: "Comprehensive guide to AI agent costs in the UK. Setup fees, ongoing costs, ROI calculations, and pricing comparison for OpenClaw, custom solutions, and SaaS platforms.",
  keywords: [
    "ai agent cost uk",
    "ai automation pricing",
    "openclaw cost uk",
    "ai agent setup cost",
    "business ai pricing",
    "ai consultant fees uk",
    "ai automation roi",
    "ai implementation cost"
  ],
  alternates: { canonical: "https://openclawconsultant.co.uk/guides/ai-agent-cost-uk" },
  openGraph: {
    title: "AI Agent Costs UK: Full Pricing Guide 2026",
    description: "Comprehensive guide to AI agent costs in the UK. Setup fees, ongoing costs, and ROI calculations for different AI platforms.",
    url: "https://openclawconsultant.co.uk/guides/ai-agent-cost-uk",
    type: "article",
  },
};

const costBreakdown = [
  {
    platform: "OpenClaw Setup",
    setupCost: "£750-2,500",
    monthlyCost: "£150-500",
    breakdown: {
      setup: ["Gateway installation", "Model configuration", "Custom skills (2-5)", "Integration setup", "Training"],
      monthly: ["Hosting costs", "Model API usage", "Support package (optional)", "Skill updates"]
    },
    bestFor: "Businesses wanting maximum control and customization"
  },
  {
    platform: "SaaS AI Tools",
    setupCost: "£0-500",
    monthlyCost: "£50-300",
    breakdown: {
      setup: ["Account configuration", "Basic integrations", "Template customization", "Team training"],
      monthly: ["Software subscription", "Usage fees", "Premium features", "Support included"]
    },
    bestFor: "Quick start with limited customization needs"
  },
  {
    platform: "Custom Development",
    setupCost: "£20,000-100,000+",
    monthlyCost: "£500-2,000",
    breakdown: {
      setup: ["Requirements analysis", "Custom development", "Testing & QA", "Deployment", "Documentation"],
      monthly: ["Hosting infrastructure", "Model costs", "Maintenance", "Updates & support"]
    },
    bestFor: "Large enterprises with unique requirements"
  }
];

const roiCalculations = [
  {
    businessSize: "Small Business (5-10 people)",
    timeSaved: "15 hours/week",
    hourlyValue: "£25",
    monthlySaving: "£1,500",
    aiCost: "£300/month",
    netBenefit: "£1,200/month",
    paybackTime: "2-3 weeks",
    annualROI: "480%"
  },
  {
    businessSize: "Medium Business (20-30 people)",
    timeSaved: "40 hours/week", 
    hourlyValue: "£35",
    monthlySaving: "£5,600",
    aiCost: "£800/month",
    netBenefit: "£4,800/month",
    paybackTime: "1-2 weeks",
    annualROI: "720%"
  },
  {
    businessSize: "Large Business (50+ people)",
    timeSaved: "100 hours/week",
    hourlyValue: "£45",
    monthlySaving: "£19,500",
    aiCost: "£2,000/month",
    netBenefit: "£17,500/month",
    paybackTime: "Less than 1 week",
    annualROI: "1050%"
  }
];

const hiddenCosts = [
  {
    cost: "Training & Change Management",
    description: "Time spent training team on new AI workflows and processes",
    estimate: "5-15 hours initial + 2-5 hours ongoing monthly",
    mitigation: "Include comprehensive training in setup package, start with power users"
  },
  {
    cost: "Integration Complexity",
    description: "Additional development for complex legacy system integrations",
    estimate: "£500-5,000 depending on systems",
    mitigation: "Audit existing systems before starting, phase integration approach"
  },
  {
    cost: "Model API Usage Spikes",
    description: "Higher than expected AI model costs during heavy usage periods",
    estimate: "20-50% above estimates in first 3 months",
    mitigation: "Implement usage monitoring and optimization from day one"
  },
  {
    cost: "Ongoing Customization",
    description: "Requests for additional features and integrations after initial setup",
    estimate: "£200-1,000 monthly for growing businesses",
    mitigation: "Plan expansion roadmap during initial setup phase"
  }
];

const costOptimizationTips = [
  {
    tip: "Start Small, Scale Gradually",
    description: "Begin with 1-2 high-impact automations rather than trying to automate everything at once",
    savings: "Reduce initial setup costs by 40-60% while proving ROI first"
  },
  {
    tip: "Optimize Model Usage",
    description: "Use cheaper models for simple tasks, premium models only for complex reasoning",
    savings: "Reduce ongoing AI costs by 30-50% with smart model routing"
  },
  {
    tip: "Leverage Open Source",
    description: "Choose OpenClaw over proprietary platforms for long-term cost control",
    savings: "Avoid vendor lock-in and licensing fees, saving £500-2,000 monthly"
  },
  {
    tip: "Batch Similar Tasks",
    description: "Group similar operations together to reduce API calls and improve efficiency",
    savings: "10-20% reduction in model usage costs through optimization"
  },
  {
    tip: "Invest in Proper Training",
    description: "Upfront training investment reduces long-term support and modification costs",
    savings: "Reduce ongoing support costs by 50-70% with self-sufficient team"
  }
];

export default function AIAgentCostUKPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient relative overflow-hidden min-h-[70vh] flex items-center grain">
        <div className="max-w-[1140px] mx-auto px-6 relative z-10 py-20">
          <div className="max-w-[720px]">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-white/60 text-sm font-medium">UK AI Agent Pricing Guide 2026</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl md:text-[3.2rem] font-extrabold text-white mb-6 leading-[1.05] tracking-tight">
              How Much Does an
              <br />
              <span className="text-orange">AI Agent Cost in the UK?</span>
            </h1>

            <p className="text-white/60 text-lg md:text-xl max-w-[540px] mb-10 leading-relaxed">
              Complete pricing guide for AI agents in 2026. Setup costs, ongoing expenses, ROI calculations, and cost optimization strategies for UK businesses.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#pricing"
                className="inline-flex items-center justify-center bg-orange text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-orange-hover transition-all hover:-translate-y-0.5 shadow-glow-orange"
              >
                See Pricing Breakdown
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

      {/* Cost Breakdown */}
      <section id="pricing" className="bg-light py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              AI Agent Cost Breakdown by Platform
            </h2>
            <p className="text-muted text-lg max-w-[600px] mx-auto">
              Three main approaches to AI agent implementation with transparent pricing for each option.
            </p>
          </div>

          <div className="space-y-8">
            {costBreakdown.map((platform, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-card">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
                  <div>
                    <h3 className="font-heading font-bold text-xl text-dark mb-3">{platform.platform}</h3>
                    <div className="space-y-2">
                      <div className="text-orange font-bold">Setup: {platform.setupCost}</div>
                      <div className="text-blue font-bold">Monthly: {platform.monthlyCost}</div>
                    </div>
                    <p className="text-muted text-sm mt-3">{platform.bestFor}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-dark mb-3">Setup Includes:</h4>
                    <ul className="space-y-1">
                      {platform.breakdown.setup.map((item, i) => (
                        <li key={i} className="text-sm text-muted-dark flex gap-2 items-start">
                          <span className="text-orange mt-0.5 flex-shrink-0">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-dark mb-3">Monthly Costs:</h4>
                    <ul className="space-y-1">
                      {platform.breakdown.monthly.map((item, i) => (
                        <li key={i} className="text-sm text-muted-dark flex gap-2 items-start">
                          <span className="text-blue mt-0.5 flex-shrink-0">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-surface rounded-2xl p-4">
                    <h4 className="font-semibold text-dark mb-2">Total Year 1:</h4>
                    <div className="text-2xl font-bold text-orange">
                      {platform.platform === "OpenClaw Setup" ? "£3,550-8,500" : 
                       platform.platform === "SaaS AI Tools" ? "£600-4,100" : 
                       "£26,000-124,000"}
                    </div>
                    <p className="text-muted text-xs mt-1">Including setup + 12 months</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculations */}
      <section className="bg-white py-28">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              ROI Calculations by Business Size
            </h2>
            <p className="text-muted text-lg max-w-[600px] mx-auto">
              Real ROI examples showing how quickly AI agents pay for themselves across different business sizes.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {roiCalculations.map((calc, index) => (
              <div key={index} className="bg-surface rounded-2xl p-8 card-lift">
                <h3 className="font-heading font-bold text-xl text-dark mb-6">{calc.businessSize}</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-muted text-sm">Time saved weekly</span>
                    <span className="font-semibold text-dark">{calc.timeSaved}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted text-sm">Value per hour</span>
                    <span className="font-semibold text-dark">{calc.hourlyValue}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted text-sm">Monthly value</span>
                    <span className="font-semibold text-green-600">{calc.monthlySaving}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted text-sm">AI costs</span>
                    <span className="font-semibold text-red-500">{calc.aiCost}</span>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-dark">Net monthly benefit</span>
                      <span className="font-bold text-orange text-lg">{calc.netBenefit}</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-navy text-white rounded-2xl p-4">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-orange font-bold text-lg">{calc.paybackTime}</div>
                      <div className="text-white/60 text-xs">Payback time</div>
                    </div>
                    <div>
                      <div className="text-orange font-bold text-lg">{calc.annualROI}</div>
                      <div className="text-white/60 text-xs">Annual ROI</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hidden Costs */}
      <section className="bg-navy text-white py-24 relative overflow-hidden grain">
        <div className="max-w-[1140px] mx-auto px-6 relative z-10">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Hidden Costs to Watch Out For
            </h2>
            <p className="text-white/60 text-lg max-w-[600px] mx-auto">
              Additional costs that can impact your AI agent budget and how to mitigate them.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {hiddenCosts.map((cost, index) => (
              <div key={index} className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8">
                <h3 className="font-heading font-bold text-lg text-white mb-3">{cost.cost}</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-4">{cost.description}</p>
                
                <div className="space-y-3">
                  <div>
                    <h4 className="text-red-400 font-semibold text-sm mb-2">Potential Cost:</h4>
                    <p className="text-red-400 text-sm">{cost.estimate}</p>
                  </div>
                  <div>
                    <h4 className="text-green-400 font-semibold text-sm mb-2">Mitigation:</h4>
                    <p className="text-green-400 text-sm">{cost.mitigation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Optimization */}
      <section className="bg-surface py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              5 Ways to Optimize AI Agent Costs
            </h2>
            <p className="text-muted text-lg max-w-[600px] mx-auto">
              Proven strategies to reduce costs while maximizing the value from your AI agent investment.
            </p>
          </div>

          <div className="space-y-6">
            {costOptimizationTips.map((tip, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-card">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-orange text-white font-bold text-lg w-8 h-8 rounded-full flex items-center justify-center text-sm">
                        {index + 1}
                      </div>
                      <h3 className="font-heading font-bold text-lg text-dark">{tip.tip}</h3>
                    </div>
                  </div>
                  <div>
                    <p className="text-muted text-sm leading-relaxed">{tip.description}</p>
                  </div>
                  <div>
                    <div className="bg-green-50 border border-green-200 rounded-2xl p-4">
                      <p className="text-green-600 font-semibold text-sm">{tip.savings}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-28">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark">
              AI Agent Cost Questions
            </h2>
          </div>
          
          <div className="space-y-0">
            {[
              {
                q: "What's the minimum budget needed to get started with AI agents?",
                a: "For a basic OpenClaw setup, budget £1,000-1,500 for the first year (£750 setup + £150-300/month ongoing). SaaS solutions can start from £600/year. The key is starting small with one high-impact automation rather than trying to do everything."
              },
              {
                q: "How do ongoing AI model costs work and what should I budget?",
                a: "Model costs are usage-based — typically £0.002-0.06 per 1,000 tokens. A busy business might spend £100-500/month on model usage. Costs can be optimized by using cheaper models for simple tasks and premium models only for complex reasoning."
              },
              {
                q: "Is it cheaper to build custom or use existing AI platforms?",
                a: "For most businesses, OpenClaw or SaaS platforms are much more cost-effective than custom development. Custom solutions start at £20,000+ and take months to develop. Use existing platforms unless you have very unique requirements."
              },
              {
                q: "What's the typical ROI timeline for AI agent investments?",
                a: "Most businesses see positive ROI within 1-3 months through time savings alone. The key is focusing on automations that save significant weekly hours (10+ hours) rather than minor conveniences. Proper implementation planning is crucial for fast ROI."
              },
              {
                q: "Are there any financing options for AI agent setup?",
                a: "Many consultants offer payment plans for setup costs. Some businesses use business loans or equipment financing. Given the fast ROI, many clients fund the investment from the time savings generated in the first month."
              },
              {
                q: "How do costs scale as my business grows?",
                a: "AI agent costs scale much more efficiently than hiring. While model usage may increase, the cost per task automated typically decreases with scale. Adding new automations is much cheaper than the initial setup."
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
            Get a Custom Cost Assessment for Your Business
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-[600px] mx-auto">
            Free consultation to calculate exact costs and ROI projections based on your specific business needs and automation opportunities.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-navy text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-dark transition-all hover:-translate-y-0.5 shadow-xl"
          >
            Get Cost Assessment →
          </a>
        </div>
      </section>

      {/* Contact Section */}
      
      {/* Related Guides */}
      <section className="py-16 bg-surface">
        <div className="max-w-[1140px] mx-auto px-6">
          <h2 className="font-heading text-2xl font-bold text-navy mb-8 text-center">Related Guides</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-[800px] mx-auto">
            <a href="/guides/openclaw-pricing-explained" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">OpenClaw Pricing & Costs Explained</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/ai-automation-roi-calculator" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">AI Automation ROI Calculator</h3>
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
                Calculate Your AI Agent
                <br />
                <span className="text-orange">Investment & ROI</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Free consultation to assess your business processes and calculate exact costs, time savings, and ROI projections for AI agent implementation.
              </p>
            </div>

            <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8">
              <h3 className="font-heading font-bold text-xl text-white mb-1">Cost Assessment Consultation</h3>
              <p className="text-white/40 text-sm mb-6">Get personalized pricing and ROI calculations</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}