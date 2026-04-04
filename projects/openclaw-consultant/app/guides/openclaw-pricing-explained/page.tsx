import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "OpenClaw Pricing & Costs Explained",
  description: "Complete breakdown of OpenClaw pricing: API costs, hosting, setup, maintenance. Compare DIY vs managed costs and see real ROI calculations for businesses.",
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
    description: "Complete breakdown of OpenClaw costs including API, hosting, setup, and maintenance. See real ROI calculations for businesses.",
    url: "https://openclawconsultant.co.uk/guides/openclaw-pricing-explained",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "OpenClaw Pricing & Plans Explained — Real Costs & ROI Guide 2026",
  "description": "Complete breakdown of OpenClaw pricing including API costs, hosting, setup, and maintenance with ROI calculations",
  "author": {
    "@type": "Person",
    "name": "Blue Canvas"
  },
  "publisher": {
    "@type": "Organization",
    "name": "OpenClaw Consultant UK"
  }
};

const costBreakdown = [
  {
    category: "OpenClaw Software",
    cost: "Free",
    description: "Open-source software with no licensing fees",
    details: [
      "Core OpenClaw platform is completely free",
      "No per-agent or per-user licensing", 
      "All features available in open-source version",
      "Community support included"
    ],
    oneTime: true
  },
  {
    category: "API Credits",
    cost: "£80-300/month",
    description: "Your biggest ongoing cost — varies by usage",
    details: [
      "Claude/GPT-4: £15-25 per million tokens",
      "Average business: 2-8M tokens/month",
      "Costs scale with AI activity",
      "Can optimize with model mixing"
    ],
    oneTime: false,
    breakdown: [
      { usage: "Light (50k tokens/day)", cost: "£80/month" },
      { usage: "Medium (150k tokens/day)", cost: "£180/month" },
      { usage: "Heavy (400k tokens/day)", cost: "£300/month" }
    ]
  },
  {
    category: "Infrastructure & Hosting",
    cost: "£40-150/month",
    description: "Server, storage, and network costs",
    details: [
      "VPS or cloud hosting required",
      "Minimum: 4GB RAM, 2 CPU cores",
      "Storage for logs and memory",
      "Bandwidth for API calls"
    ],
    oneTime: false,
    breakdown: [
      { usage: "Basic VPS (4GB/2CPU)", cost: "£40/month" },
      { usage: "Business Server (8GB/4CPU)", cost: "£80/month" },
      { usage: "Enterprise (16GB/8CPU)", cost: "£150/month" }
    ]
  },
  {
    category: "Setup & Configuration",
    cost: "£750-2,500",
    description: "One-time setup cost (DIY = your time)",
    details: [
      "Professional installation & configuration",
      "Security hardening & optimization",
      "Custom skill development",
      "Integration with existing tools"
    ],
    oneTime: true,
    comparison: "DIY: 40-80 hours of your time (£2,000-4,000 value)"
  },
  {
    category: "Ongoing Support",
    cost: "£250-500/month",
    description: "Optional but recommended for businesses",
    details: [
      "Skill updates and development",
      "Performance monitoring",
      "Troubleshooting support",
      "Monthly optimization reviews"
    ],
    oneTime: false,
    comparison: "DIY: Handle issues yourself + downtime costs"
  }
];

const businessSizeComparison = [
  {
    size: "Small Business",
    employees: "1-10 employees",
    useCases: ["Customer service", "Basic automation", "Social media"],
    monthlyTokens: "50-100k",
    monthlyCost: {
      api: "£80",
      hosting: "£40", 
      support: "£250",
      total: "£370"
    },
    setup: "£750",
    roi: {
      timeSaved: "20 hours/month",
      costSaved: "£1,000/month",
      payback: "0.8 months"
    }
  },
  {
    size: "Medium Business", 
    employees: "10-50 employees",
    useCases: ["Multi-dept automation", "Lead generation", "Content creation"],
    monthlyTokens: "150-300k",
    monthlyCost: {
      api: "£180",
      hosting: "£80",
      support: "£350", 
      total: "£610"
    },
    setup: "£1,250",
    roi: {
      timeSaved: "60 hours/month",
      costSaved: "£3,000/month", 
      payback: "0.6 months"
    }
  },
  {
    size: "Large Business",
    employees: "50+ employees", 
    useCases: ["Enterprise automation", "Multi-agent systems", "Complex workflows"],
    monthlyTokens: "400k+",
    monthlyCost: {
      api: "£300",
      hosting: "£150",
      support: "£500",
      total: "£950"
    },
    setup: "£2,500",
    roi: {
      timeSaved: "150 hours/month",
      costSaved: "£7,500/month",
      payback: "0.4 months"
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
    managed: "< 30 minutes/month",
    impact: "Lost productivity, missed opportunities, stress"
  },
  {
    cost: "Security Incidents", 
    diy: "£2,000-50,000 potential cost",
    managed: "Covered by professional setup",
    impact: "Data breaches, compliance violations, reputation damage"
  },
  {
    cost: "Scaling Issues",
    diy: "Major rework needed as you grow", 
    managed: "Architecture scales smoothly",
    impact: "Additional setup costs, migration pain"
  },
  {
    cost: "Opportunity Cost",
    diy: "Time spent on tech instead of business",
    managed: "Focus 100% on core business",
    impact: "Missed growth opportunities, slower expansion"
  }
];

const roiCalculator = [
  {
    scenario: "Property Management (20 properties)",
    currentCosts: {
      adminTime: "40 hours/month × £25/hour = £1,000",
      missedRent: "2% late payments × £15,000 = £300",
      tenantComms: "£200/month (calls, emails, disputes)"
    },
    openclawBenefits: {
      automation: "Reduce admin time by 70% = £700 saved",
      rentReminders: "Reduce late payments by 50% = £150 saved", 
      tenantSatisfaction: "Faster responses, fewer disputes = £150 saved"
    },
    totalSaving: "£1,000/month",
    openclawCost: "£370/month",
    netBenefit: "£630/month",
    payback: "1.2 months"
  },
  {
    scenario: "Digital Marketing Agency (10 clients)",
    currentCosts: {
      reporting: "20 hours/month × £50/hour = £1,000",
      contentCreation: "30 hours/month × £40/hour = £1,200",
      socialManagement: "25 hours/month × £35/hour = £875"
    },
    openclawBenefits: {
      autoReporting: "80% reduction in reporting time = £800 saved",
      contentAssist: "50% faster content creation = £600 saved",
      socialAutomation: "60% time savings = £525 saved"
    },
    totalSaving: "£1,925/month",
    openclawCost: "£610/month", 
    netBenefit: "£1,315/month",
    payback: "0.9 months"
  },
  {
    scenario: "Legal Practice (3 partners)",
    currentCosts: {
      adminOverhead: "60 hours/month × £75/hour = £4,500",
      documentPrep: "40 hours/month × £100/hour = £4,000",
      clientComms: "£500/month (missed calls, delays)"
    },
    openclawBenefits: {
      adminReduction: "40% admin efficiency = £1,800 saved",
      docAutomation: "30% faster document prep = £1,200 saved",
      clientResponse: "Instant responses = £400 saved"
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
    reality: "OpenClaw software is free. You pay for AI usage and hosting — same as any AI solution.",
    explanation: "Most businesses spend more on coffee than OpenClaw infrastructure costs."
  },
  {
    myth: "API costs will bankrupt us",
    reality: "API costs scale with value. Heavy usage means you're getting massive productivity gains.",
    explanation: "£300/month in API costs typically correlates to £3,000+ in time savings."
  },
  {
    myth: "DIY is always cheaper",
    reality: "Only if your time has no value. Factor in opportunity cost and DIY becomes expensive.",
    explanation: "40 hours of setup time at £50/hour = £2,000. That's before counting mistakes and ongoing issues."
  },
  {
    myth: "Small businesses can't afford professional setup",
    reality: "Small businesses can't afford NOT to get professional setup. Mistakes are proportionally more expensive.",
    explanation: "A security breach or extended downtime can destroy a small business. Professional setup includes insurance against these risks."
  }
];

export default function OpenClawPricingExplainedPage() {
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
              OpenClaw Pricing & Plans
              <br />
              <span className="text-orange">Explained</span>
            </h1>

            <p className="text-white/60 text-lg md:text-xl max-w-[540px] mb-10 leading-relaxed">
              Complete breakdown of OpenClaw costs: API credits, hosting, setup, and maintenance. See real ROI calculations and compare DIY vs managed options.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#breakdown" className="inline-flex items-center justify-center bg-orange text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-orange-hover transition-all hover:-translate-y-0.5 shadow-glow-orange">
                See Costs
              </a>
              <a href="#roi" className="inline-flex items-center justify-center bg-white/5 text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-white/10 transition-all border border-white/10">
                ROI Calculator ↓
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="breakdown" className="bg-white py-28">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Complete OpenClaw Cost Breakdown
            </h2>
            <p className="text-muted max-w-[700px] mx-auto">
              Every cost explained — no hidden fees, no surprises. Here's exactly what you'll pay and why.
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
              See what OpenClaw costs for businesses like yours and the ROI you can expect
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
                  <h4 className="font-semibold text-green-800 mb-2">📈 Expected ROI:</h4>
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
              DIY vs Managed: 3-Year Cost Comparison
            </h2>
            <p className="text-white/60 max-w-[600px] mx-auto">
              The true cost of each approach over time
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
                  Year 1 difference: Only £{diyVsManagedComparison.year1.managed.total - diyVsManagedComparison.year1.diy.total} more for professional
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
              What the DIY calculators don't tell you
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
              ROI Calculator: Real Business Examples
            </h2>
            <p className="text-muted max-w-[600px] mx-auto">
              See how different businesses calculate OpenClaw ROI
            </p>
          </div>

          <div className="space-y-8">
            {roiCalculator.map((scenario) => (
              <div key={scenario.scenario} className="bg-surface rounded-2xl p-8 shadow-card">
                <h3 className="font-heading font-bold text-xl text-dark mb-6">{scenario.scenario}</h3>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6">
                  <div>
                    <h4 className="font-semibold text-red-800 mb-4">❌ Current Costs (Monthly)</h4>
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
                    <h4 className="font-semibold text-green-800 mb-4">✅ OpenClaw Benefits (Monthly)</h4>
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
                    <div className="text-sm text-muted">Total Savings</div>
                    <div className="font-bold text-lg text-green-600">{scenario.totalSaving}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-muted">OpenClaw Cost</div>
                    <div className="font-bold text-lg text-orange">{scenario.openclawCost}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-muted">Net Benefit</div>
                    <div className="font-bold text-lg text-blue-600">{scenario.netBenefit}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-muted">Payback Period</div>
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
              Common Pricing Myths Debunked
            </h2>
            <p className="text-muted max-w-[600px] mx-auto">
              Setting the record straight on OpenClaw costs
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
            Ready to See Your Custom ROI?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-[600px] mx-auto">
            Every business is different. Get a personalized cost breakdown and ROI calculation based on your specific needs.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-navy text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-dark transition-all hover:-translate-y-0.5 shadow-xl"
          >
            Get Custom Quote →
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
                Get Your Personalized
                <br />
                <span className="text-orange">Cost Breakdown</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Every business is different. Book a free consultation to get a custom cost analysis and ROI projection based on your specific needs and usage patterns.
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
                    ROI projection based on your specific use cases
                  </li>
                  <li className="flex gap-2">
                    <span className="text-orange">✓</span>
                    Honest assessment of whether OpenClaw is right for you
                  </li>
                  <li className="flex gap-2">
                    <span className="text-orange">✓</span>
                    No obligation quote for professional setup
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8">
              <h3 className="font-heading font-bold text-xl text-white mb-1">Get Your Custom Quote</h3>
              <p className="text-white/40 text-sm mb-6">Free consultation with personalized ROI analysis</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}