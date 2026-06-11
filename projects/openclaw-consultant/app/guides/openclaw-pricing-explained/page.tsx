import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import GuideArticleJsonLd from "@/components/GuideArticleJsonLd";
import GuideByline from "@/components/GuideByline";

export const metadata: Metadata = {
  title: "OpenClaw Pricing & Costs Explained",
  description: "Planning guide for OpenClaw pricing: API usage, hosting, setup, maintenance, DIY trade-offs, managed support, and ROI assumptions.",
  keywords: [
    "openclaw pricing",
    "openclaw cost",
    "openclaw pricing plans",
    "openclaw api costs",
    "openclaw hosting costs",
    "openclaw setup cost",
    "openclaw roi calculator",
    "openclaw pricing comparison"
  ],
  alternates: { canonical: "https://openclawconsultant.co.uk/guides/openclaw-pricing-explained" },
  openGraph: {
    title: "OpenClaw Pricing & Costs Explained",
    description: "Plan OpenClaw costs across API usage, hosting, setup, support, DIY trade-offs, and ROI assumptions.",
    url: "https://openclawconsultant.co.uk/guides/openclaw-pricing-explained",
    type: "article",
  },
};

const costBreakdown = [
  {
    category: "OpenClaw Software",
    cost: "No licence fee",
    description: "Open-source software costs depend on how it is hosted, operated, and supported",
    details: [
      "Core platform usage does not require a traditional SaaS licence",
      "No standard per-agent or per-user SaaS fee for self-hosted use", 
      "Implementation effort still needs to be budgeted",
      "Community support may be enough for low-risk experiments"
    ],
    oneTime: true
  },
  {
    category: "API Credits",
    cost: "Usage-dependent",
    description: "Often a major ongoing cost, depending on model choice and activity",
    details: [
      "Hosted model pricing changes by provider and model",
      "Token usage depends on workflow volume and prompt design",
      "Costs scale with AI activity",
      "Routing can be planned around task complexity and budget"
    ],
    oneTime: false,
    breakdown: [
      { usage: "Light internal workflow", cost: "Low monthly range" },
      { usage: "Regular business workflow", cost: "Moderate monthly range" },
      { usage: "High-volume workflow", cost: "Higher monthly range" }
    ]
  },
  {
    category: "Infrastructure & Hosting",
    cost: "Hosting-dependent",
    description: "Server, storage, and network costs depend on deployment shape",
    details: [
      "VPS or cloud hosting required",
      "Minimum: 4GB RAM, 2 CPU cores",
      "Storage for logs and memory",
      "Bandwidth for API calls"
    ],
    oneTime: false,
    breakdown: [
      { usage: "Basic VPS-style setup", cost: "Lower monthly range" },
      { usage: "Business server", cost: "Moderate monthly range" },
      { usage: "Larger deployment", cost: "Higher monthly range" }
    ]
  },
  {
    category: "Setup & Configuration",
    cost: "Scoped quote",
    description: "One-time setup cost depends on workflow, hosting, security, and integrations",
    details: [
      "Scoped installation and configuration",
      "Security control review",
      "Custom skill planning and development",
      "Integration with existing tools"
    ],
    oneTime: true,
    comparison: "DIY: budget for investigation, setup, testing, rework, and documentation time"
  },
  {
    category: "Ongoing Support",
    cost: "Scoped support",
    description: "Optional, but useful when OpenClaw touches recurring business workflows",
    details: [
      "Skill updates and development",
      "Monitoring and review",
      "Troubleshooting support",
      "Monthly improvement reviews"
    ],
    oneTime: false,
    comparison: "DIY: handle issues, updates, and workflow changes internally"
  }
];

const businessSizeComparison = [
  {
    size: "Small Business",
    employees: "1-10 employees",
    useCases: ["Customer service", "Basic automation", "Social media"],
    monthlyTokens: "50-100k",
    monthlyCost: {
      api: "Low range",
      hosting: "Low range", 
      support: "Scoped",
      total: "Model first"
    },
    setup: "Scoped quote",
    roi: {
      timeSaved: "Example: 20 hours/month",
      costSaved: "Model from hourly cost",
      payback: "Validate after pilot"
    }
  },
  {
    size: "Medium Business", 
    employees: "10-50 employees",
    useCases: ["Multi-dept automation", "Lead generation", "Content creation"],
    monthlyTokens: "150-300k",
    monthlyCost: {
      api: "Moderate range",
      hosting: "Moderate range",
      support: "Scoped", 
      total: "Model first"
    },
    setup: "Scoped quote",
    roi: {
      timeSaved: "Example: 60 hours/month",
      costSaved: "Model from workflow volume", 
      payback: "Validate after pilot"
    }
  },
  {
    size: "Large Business",
    employees: "50+ employees", 
    useCases: ["Enterprise automation", "Multi-agent systems", "Complex workflows"],
    monthlyTokens: "400k+",
    monthlyCost: {
      api: "Higher range",
      hosting: "Higher range",
      support: "Scoped",
      total: "Model first"
    },
    setup: "Custom scope",
    roi: {
      timeSaved: "Example: 150 hours/month",
      costSaved: "Model from process value",
      payback: "Validate after pilot"
    }
  }
];

const diyVsManagedComparison = {
  year1: {
    diy: {
      setup: 2000, // 40 hours × £50/hour
      api: 2400,   // £200/month average
      hosting: 600, // £50/month
      maintenance: 1500, // 30 hours × £50/hour
      mistakes: 1000, // Conservative estimate
      total: 7500
    },
    managed: {
      setup: 1250,
      api: 2400,
      hosting: 600,
      support: 3600, // £300/month
      total: 7850
    }
  },
  year3: {
    diy: {
      ongoing: 6000, // Annual maintenance/issues
      api: 7200,     // Growing usage
      hosting: 1800,
      total: 15000
    },
    managed: {
      support: 10800, // £300/month
      api: 7200,
      hosting: 1800,
      total: 19800
    }
  }
};

const hiddenCosts = [
  {
    cost: "Downtime",
    diy: "2-5 hours/month dealing with issues",
    managed: "Reduced with monitoring and support",
    impact: "Lost productivity, missed opportunities, stress"
  },
  {
    cost: "Security Incidents", 
    diy: "Potential investigation, remediation, or reputational cost",
    managed: "Reduced through scoped controls and handover",
    impact: "Data breaches, compliance violations, reputation damage"
  },
  {
    cost: "Scaling Issues",
    diy: "Major rework needed as you grow", 
    managed: "Architecture decisions reviewed earlier",
    impact: "Additional setup costs, migration pain"
  },
  {
    cost: "Opportunity Cost",
    diy: "Time spent on tech instead of business",
    managed: "More focus on the business workflow",
    impact: "Missed growth opportunities, slower expansion"
  }
];

const roiCalculator = [
  {
    scenario: "Property Management (20 properties)",
    currentCosts: {
      adminTime: "Model assumption: 40 hours/month × £25/hour = £1,000",
      missedRent: "Model assumption: 2% late payments × £15,000 = £300",
      tenantComms: "Model assumption: £200/month for calls, emails, and disputes"
    },
    openclawBenefits: {
      automation: "Pilot target: reduce admin time by 70% = £700 modelled saving",
      rentReminders: "Pilot target: reduce late payments by 50% = £150 modelled saving", 
      tenantSatisfaction: "Pilot target: faster responses and fewer disputes = £150 modelled saving"
    },
    totalSaving: "£1,000/month",
    openclawCost: "£370/month",
    netBenefit: "£630/month",
    payback: "1.2 months"
  },
  {
    scenario: "Digital Marketing Agency (10 clients)",
    currentCosts: {
      reporting: "Model assumption: 20 hours/month × £50/hour = £1,000",
      contentCreation: "Model assumption: 30 hours/month × £40/hour = £1,200",
      socialManagement: "Model assumption: 25 hours/month × £35/hour = £875"
    },
    openclawBenefits: {
      autoReporting: "Pilot target: 80% reduction in reporting time = £800 modelled saving",
      contentAssist: "Pilot target: 50% faster content creation = £600 modelled saving",
      socialAutomation: "Pilot target: 60% time saving = £525 modelled saving"
    },
    totalSaving: "£1,925/month",
    openclawCost: "£610/month", 
    netBenefit: "£1,315/month",
    payback: "0.9 months"
  },
  {
    scenario: "Legal Practice (3 partners)",
    currentCosts: {
      adminOverhead: "Model assumption: 60 hours/month × £75/hour = £4,500",
      documentPrep: "Model assumption: 40 hours/month × £100/hour = £4,000",
      clientComms: "Model assumption: £500/month for missed calls and delays"
    },
    openclawBenefits: {
      adminReduction: "Pilot target: 40% admin efficiency = £1,800 modelled saving",
      docAutomation: "Pilot target: 30% faster document prep = £1,200 modelled saving",
      clientResponse: "Pilot target: faster triage and responses = £400 modelled saving"
    },
    totalSaving: "£3,400/month",
    openclawCost: "£950/month",
    netBenefit: "£2,450/month", 
    payback: "1.0 month"
  }
];

const pricingMyths = [
  {
    myth: "OpenClaw is expensive",
    reality: "The software is only one part of the cost. Usage, hosting, setup time, support, and governance matter more.",
    explanation: "A useful budget separates platform cost from implementation and operating cost."
  },
  {
    myth: "API costs can run away",
    reality: "API cost risk is manageable when routing, volume, review depth, and model choice are designed deliberately.",
    explanation: "The safest approach is to monitor usage early and connect cost to a narrow business workflow."
  },
  {
    myth: "DIY is always cheaper",
    reality: "DIY can be cheaper for experiments, but production workflows need time for setup, testing, documentation, and maintenance.",
    explanation: "The question is whether the team has the time and judgement to own those details."
  },
  {
    myth: "Small businesses should always pay for setup",
    reality: "Some small businesses should stay simple; others justify support when the workflow is recurring or business-critical.",
    explanation: "Professional setup is most defensible when it reduces operational risk or shortens the path to a useful pilot."
  }
];

export default function OpenClawPricingExplainedPage() {
  return (
    <>
      <GuideArticleJsonLd
        canonicalPath="/guides/openclaw-pricing-explained"
        title="OpenClaw Pricing & Costs Explained"
        description="Planning guide for OpenClaw costs, API usage, hosting, setup, support, DIY trade-offs, and ROI assumptions."
      />

      <section className="hero-gradient relative overflow-hidden min-h-[70vh] flex items-center grain">
        <div className="max-w-[1140px] mx-auto px-6 relative z-10 py-20">
          <div className="max-w-[720px]">
            <nav className="mb-8 text-sm text-white/50" aria-label="Breadcrumb">
              <a href="/" className="hover:text-white">Home</a>
              <span className="mx-2">/</span>
              <a href="/guides" className="hover:text-white">Guides</a>
              <span className="mx-2">/</span>
              <span className="text-white/70">OpenClaw Pricing</span>
            </nav>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-[3.2rem] font-extrabold text-white mb-6 leading-[1.05] tracking-tight">
              OpenClaw Pricing & Plans
              <br />
              <span className="text-orange">Explained</span>
            </h1>
            <GuideByline canonicalPath={"/guides/openclaw-pricing-explained"} />

            <p className="text-white/60 text-lg md:text-xl max-w-[540px] mb-10 leading-relaxed">
              A planning guide to OpenClaw costs: API usage, hosting, setup, support, and maintenance. Use the examples as assumptions to validate, not promises.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#breakdown" className="inline-flex items-center justify-center bg-orange text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-orange-hover transition-all hover:-translate-y-0.5 shadow-glow-orange">
                See Costs
              </a>
              <a href="#roi" className="inline-flex items-center justify-center bg-white/5 text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-white/10 transition-all border border-white/10">
                ROI Assumptions ↓
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="breakdown" className="bg-white py-28">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              OpenClaw Cost Planning Breakdown
            </h2>
            <p className="text-muted max-w-[700px] mx-auto">
              Every cost area to consider before you choose DIY, managed setup, or a hybrid support model.
            </p>
          </div>

          <div className="space-y-8">
            {costBreakdown.map((item) => (
              <div key={item.category} className="bg-surface rounded-2xl p-8 shadow-card">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6">
                  <div>
                    <h3 className="font-heading font-bold text-xl text-dark mb-2">{item.category}</h3>
                    <p className="text-muted">{item.description}</p>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-2xl text-orange mb-1">{item.cost}</div>
                    <div className="text-sm text-muted">
                      {item.oneTime ? "One-time" : "Per month"}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-dark mb-3">What's Included:</h4>
                    <ul className="space-y-2">
                      {item.details.map((detail) => (
                        <li key={detail} className="text-muted text-sm flex gap-2">
                          <span className="text-green-500 flex-shrink-0">✓</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {item.breakdown && (
                    <div>
                      <h4 className="font-semibold text-dark mb-3">Usage Examples:</h4>
                      <ul className="space-y-2">
                        {item.breakdown.map((example) => (
                          <li key={example.usage} className="text-muted text-sm flex justify-between">
                            <span>{example.usage}:</span>
                            <span className="font-medium">{example.cost}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {item.comparison && (
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                      <h4 className="font-semibold text-yellow-800 mb-2">💡 DIY Alternative:</h4>
                      <p className="text-yellow-700 text-sm">{item.comparison}</p>
                    </div>
                  )}
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
              Pricing by Business Size
            </h2>
            <p className="text-muted max-w-[600px] mx-auto">
              Use these as planning patterns, then replace the assumptions with your own workflow volume and internal costs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {businessSizeComparison.map((business) => (
              <div key={business.size} className="bg-white rounded-2xl p-8 shadow-card">
                <div className="text-center mb-6">
                  <h3 className="font-heading font-bold text-xl text-dark mb-2">{business.size}</h3>
                  <p className="text-muted text-sm">{business.employees}</p>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-dark mb-3">Common Use Cases:</h4>
                  <ul className="space-y-1">
                    {business.useCases.map((useCase) => (
                      <li key={useCase} className="text-muted text-sm flex gap-2">
                        <span className="text-blue-500">•</span>
                        {useCase}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-dark mb-3">Monthly Costs:</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted">API Credits:</span>
                      <span className="font-medium">{business.monthlyCost.api}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted">Hosting:</span>
                      <span className="font-medium">{business.monthlyCost.hosting}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted">Support:</span>
                      <span className="font-medium">{business.monthlyCost.support}</span>
                    </div>
                    <div className="border-t pt-2 flex justify-between font-bold">
                      <span>Total Monthly:</span>
                      <span className="text-orange">{business.monthlyCost.total}</span>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="text-center">
                    <div className="text-sm text-muted">Setup Cost</div>
                    <div className="font-bold text-lg text-dark">{business.setup}</div>
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-semibold text-green-800 mb-2">📈 Illustrative ROI Assumption:</h4>
                  <div className="text-green-700 text-sm space-y-1">
                    <div>Time saved: {business.roi.timeSaved}</div>
                    <div>Cost savings: {business.roi.costSaved}</div>
                    <div className="font-semibold">Payback: {business.roi.payback}</div>
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
              DIY vs Managed: Example 3-Year Cost Model
            </h2>
            <p className="text-white/60 max-w-[600px] mx-auto">
              A planning model for the kinds of costs that can appear over time.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Year 1 Comparison */}
            <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8">
              <h3 className="font-heading font-bold text-xl text-white mb-6">Year 1 Costs</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-red-300 mb-3">DIY Approach</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between text-white/70">
                      <span>Setup time (40h × £50):</span>
                      <span>£{diyVsManagedComparison.year1.diy.setup}</span>
                    </div>
                    <div className="flex justify-between text-white/70">
                      <span>API credits:</span>
                      <span>£{diyVsManagedComparison.year1.diy.api}</span>
                    </div>
                    <div className="flex justify-between text-white/70">
                      <span>Hosting:</span>
                      <span>£{diyVsManagedComparison.year1.diy.hosting}</span>
                    </div>
                    <div className="flex justify-between text-white/70">
                      <span>Maintenance & issues:</span>
                      <span>£{diyVsManagedComparison.year1.diy.maintenance}</span>
                    </div>
                    <div className="flex justify-between text-white/70">
                      <span>Mistakes & rework:</span>
                      <span>£{diyVsManagedComparison.year1.diy.mistakes}</span>
                    </div>
                    <div className="border-t border-white/20 pt-2 flex justify-between font-bold">
                      <span className="text-white">Total:</span>
                      <span className="text-red-300">£{diyVsManagedComparison.year1.diy.total}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-green-300 mb-3">Managed Approach</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between text-white/70">
                      <span>Professional setup:</span>
                      <span>£{diyVsManagedComparison.year1.managed.setup}</span>
                    </div>
                    <div className="flex justify-between text-white/70">
                      <span>API credits:</span>
                      <span>£{diyVsManagedComparison.year1.managed.api}</span>
                    </div>
                    <div className="flex justify-between text-white/70">
                      <span>Hosting:</span>
                      <span>£{diyVsManagedComparison.year1.managed.hosting}</span>
                    </div>
                    <div className="flex justify-between text-white/70">
                      <span>Support & maintenance:</span>
                      <span>£{diyVsManagedComparison.year1.managed.support}</span>
                    </div>
                    <div className="border-t border-white/20 pt-2 flex justify-between font-bold">
                      <span className="text-white">Total:</span>
                      <span className="text-green-300">£{diyVsManagedComparison.year1.managed.total}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 text-center">
                <div className="text-orange text-sm font-medium">
                  In this example model: £{diyVsManagedComparison.year1.managed.total - diyVsManagedComparison.year1.diy.total} more in year one for managed setup and support.
                </div>
              </div>
            </div>

            {/* 3-Year Total */}
            <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8">
              <h3 className="font-heading font-bold text-xl text-white mb-6">3-Year Total</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-red-300 mb-3">DIY Total</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between text-white/70">
                      <span>Year 1 total:</span>
                      <span>£{diyVsManagedComparison.year1.diy.total}</span>
                    </div>
                    <div className="flex justify-between text-white/70">
                      <span>Years 2-3 ongoing:</span>
                      <span>£{diyVsManagedComparison.year3.diy.total}</span>
                    </div>
                    <div className="border-t border-white/20 pt-2 flex justify-between font-bold">
                      <span className="text-white">3-Year Total:</span>
                      <span className="text-red-300">£{diyVsManagedComparison.year1.diy.total + diyVsManagedComparison.year3.diy.total}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-green-300 mb-3">Managed Total</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between text-white/70">
                      <span>Year 1 total:</span>
                      <span>£{diyVsManagedComparison.year1.managed.total}</span>
                    </div>
                    <div className="flex justify-between text-white/70">
                      <span>Years 2-3 ongoing:</span>
                      <span>£{diyVsManagedComparison.year3.managed.total}</span>
                    </div>
                    <div className="border-t border-white/20 pt-2 flex justify-between font-bold">
                      <span className="text-white">3-Year Total:</span>
                      <span className="text-green-300">£{diyVsManagedComparison.year1.managed.total + diyVsManagedComparison.year3.managed.total}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-orange/20 border border-orange/30 rounded-lg">
                <h4 className="font-semibold text-orange mb-2">Hidden DIY Costs Not Included:</h4>
                <ul className="text-white/70 text-xs space-y-1">
                  <li>• Downtime from issues</li>
                  <li>• Opportunity cost of time</li>
                  <li>• Security incident risks</li>
                  <li>• Scaling/migration costs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Hidden Costs of DIY
            </h2>
            <p className="text-muted max-w-[600px] mx-auto">
              Cost areas that are easy to miss when you only compare software and hosting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {hiddenCosts.map((cost) => (
              <div key={cost.cost} className="bg-white rounded-2xl p-8 shadow-card">
                <h3 className="font-heading font-bold text-lg text-dark mb-4">{cost.cost}</h3>
                
                <div className="space-y-4">
                  <div className="bg-red-50 border-l-4 border-red-500 p-4">
                    <h4 className="font-semibold text-red-800 mb-1">DIY Reality:</h4>
                    <p className="text-red-700 text-sm">{cost.diy}</p>
                  </div>
                  
                  <div className="bg-green-50 border-l-4 border-green-500 p-4">
                    <h4 className="font-semibold text-green-800 mb-1">Managed Solution:</h4>
                    <p className="text-green-700 text-sm">{cost.managed}</p>
                  </div>
                  
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                    <h4 className="font-semibold text-yellow-800 text-sm mb-1">Impact:</h4>
                    <p className="text-yellow-700 text-xs">{cost.impact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="roi" className="bg-white py-28">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              ROI Planning Examples
            </h2>
            <p className="text-muted max-w-[600px] mx-auto">
              Example assumptions for modelling value before a pilot. Replace these with your own numbers before making a buying decision.
            </p>
          </div>

          <div className="space-y-8">
            {roiCalculator.map((scenario) => (
              <div key={scenario.scenario} className="bg-surface rounded-2xl p-8 shadow-card">
                <h3 className="font-heading font-bold text-xl text-dark mb-6">{scenario.scenario}</h3>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6">
                  <div>
                    <h4 className="font-semibold text-red-800 mb-4">❌ Current Cost Assumptions</h4>
                    <div className="space-y-2">
                      {Object.entries(scenario.currentCosts).map(([key, value]) => (
                        <div key={key} className="text-sm">
                          <div className="font-medium text-dark capitalize">{key.replace(/([A-Z])/g, ' $1')}:</div>
                          <div className="text-muted">{value}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-green-800 mb-4">✅ Potential Benefit Assumptions</h4>
                    <div className="space-y-2">
                      {Object.entries(scenario.openclawBenefits).map(([key, value]) => (
                        <div key={key} className="text-sm">
                          <div className="font-medium text-dark capitalize">{key.replace(/([A-Z])/g, ' $1')}:</div>
                          <div className="text-muted">{value}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-6 border-t border-border">
                  <div className="text-center">
                    <div className="text-sm text-muted">Modelled Savings</div>
                    <div className="font-bold text-lg text-green-600">{scenario.totalSaving}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-muted">OpenClaw Cost</div>
                    <div className="font-bold text-lg text-orange">{scenario.openclawCost}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-muted">Modelled Net</div>
                    <div className="font-bold text-lg text-blue-600">{scenario.netBenefit}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-muted">Payback Assumption</div>
                    <div className="font-bold text-lg text-dark">{scenario.payback}</div>
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
              Pricing Questions to Sense-Check
            </h2>
            <p className="text-muted max-w-[600px] mx-auto">
              Useful prompts for avoiding both under-budgeting and over-buying.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pricingMyths.map((myth) => (
              <div key={myth.myth} className="bg-white rounded-2xl p-6 shadow-card">
                <div className="bg-red-100 border border-red-200 rounded-lg p-4 mb-4">
                  <h3 className="font-semibold text-red-800 mb-1">❌ Myth:</h3>
                  <p className="text-red-700 text-sm italic">"{myth.myth}"</p>
                </div>
                
                <div className="bg-green-100 border border-green-200 rounded-lg p-4 mb-4">
                  <h3 className="font-semibold text-green-800 mb-1">✅ Reality:</h3>
                  <p className="text-green-700 text-sm">{myth.reality}</p>
                </div>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-blue-700 text-xs">{myth.explanation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-orange py-16 relative overflow-hidden">
        <div className="max-w-[900px] mx-auto px-6 text-center relative z-10">
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-white mb-4">
            Ready to Model Your Costs?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-[600px] mx-auto">
            Every business is different. Build a cost model around your workflow, usage, support needs, and value assumptions.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-navy text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-dark transition-all hover:-translate-y-0.5 shadow-xl"
          >
            Model My Costs →
          </a>
        </div>
      </section>

      
      {/* Related Guides */}
      <section className="py-16 bg-surface">
        <div className="max-w-[1140px] mx-auto px-6">
          <h2 className="font-heading text-2xl font-bold text-navy mb-8 text-center">Related Guides</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-[800px] mx-auto">
            <a href="/guides/ai-agent-cost-uk" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">AI Agent Costs UK: Full Pricing Guide 2026</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/openclaw-roi-calculator-guide" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
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
                Get Your Personalized
                <br />
                <span className="text-orange">Cost Breakdown</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Every business is different. Book a short consultation to map cost drivers, value assumptions, and whether OpenClaw is worth piloting for your workflow.
              </p>

              <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 mb-8">
                <h3 className="font-semibold text-white mb-3">What you'll get:</h3>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li className="flex gap-2">
                    <span className="text-orange">✓</span>
                    Custom cost breakdown for your business size
                  </li>
                  <li className="flex gap-2">
                    <span className="text-orange">✓</span>
                    ROI assumptions based on your specific use cases
                  </li>
                  <li className="flex gap-2">
                    <span className="text-orange">✓</span>
                    Honest assessment of whether OpenClaw is right for you
                  </li>
                  <li className="flex gap-2">
                    <span className="text-orange">✓</span>
                    Scoped quote if professional setup makes sense
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8">
              <h3 className="font-heading font-bold text-xl text-white mb-1">Get Your Custom Quote</h3>
              <p className="text-white/40 text-sm mb-6">Cost modelling with realistic ROI assumptions</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
