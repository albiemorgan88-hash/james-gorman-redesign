import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "OpenClaw vs Virtual Assistant Costs",
  description: "Detailed cost comparison between OpenClaw agents and virtual assistants. Calculate ROI, capabilities, and long-term value to make the right choice for your business.",
  keywords: [
    "openclaw vs virtual assistant",
    "va cost comparison", 
    "openclaw pricing",
    "virtual assistant alternative",
    "ai agent vs human assistant",
    "automation cost analysis",
    "openclaw roi calculation",
    "va vs ai agent"
  ],
  alternates: { canonical: "https://openclawconsultant.co.uk/guides/openclaw-vs-va-cost-comparison" },
  openGraph: {
    title: "OpenClaw vs Virtual Assistant Costs",
    description: "Detailed cost comparison between OpenClaw agents and virtual assistants. Calculate ROI and capabilities.",
    url: "https://openclawconsultant.co.uk/guides/openclaw-vs-va-cost-comparison",
    type: "article",
  },
};

const costBreakdown = {
  openclaw: {
    setupCost: "£2,000-£8,000",
    monthlyCost: "£200-£800",
    breakdown: [
      { item: "Initial Setup & Configuration", cost: "£1,500-£4,000", frequency: "One-time" },
      { item: "Custom Skills Development", cost: "£500-£4,000", frequency: "One-time" },
      { item: "AI Model Usage (GPT-4, Claude)", cost: "£150-£500", frequency: "Monthly" },
      { item: "Hosting & Infrastructure", cost: "£50-£200", frequency: "Monthly" },
      { item: "Maintenance & Updates", cost: "£0-£100", frequency: "Monthly" }
    ],
    scalingCost: "Minimal - add capabilities, not agents",
    workingHours: "24/7/365",
    taskCapacity: "Unlimited parallel processing"
  },
  virtualAssistant: {
    setupCost: "£0-£500", 
    monthlyCost: "£1,200-£4,800",
    breakdown: [
      { item: "Recruitment & Screening", cost: "£0-£300", frequency: "One-time" },
      { item: "Training & Onboarding", cost: "£0-£200", frequency: "One-time" },
      { item: "Monthly Salary (Part-time)", cost: "£1,200-£2,400", frequency: "Monthly" },
      { item: "Monthly Salary (Full-time)", cost: "£2,400-£4,800", frequency: "Monthly" },
      { item: "Tools & Software Access", cost: "£50-£200", frequency: "Monthly" }
    ],
    scalingCost: "Linear - hire more assistants",
    workingHours: "8 hours/day, 5 days/week",
    taskCapacity: "Single-threaded, human limitations"
  }
};

const capabilityComparison = [
  {
    capability: "Email Management",
    openclaw: {
      level: "Advanced",
      description: "Smart filtering, auto-responses, priority classification, follow-up automation",
      accuracy: "95-98%",
      speed: "Instant processing"
    },
    va: {
      level: "Good",
      description: "Manual sorting, template responses, basic organization",
      accuracy: "85-95%", 
      speed: "Manual processing delays"
    }
  },
  {
    capability: "Calendar Management",
    openclaw: {
      level: "Advanced",
      description: "Intelligent scheduling, conflict detection, multi-timezone coordination, automatic rescheduling",
      accuracy: "98-99%",
      speed: "Real-time updates"
    },
    va: {
      level: "Good",
      description: "Manual scheduling, basic conflict checking, limited timezone handling",
      accuracy: "90-95%",
      speed: "Business hours response"
    }
  },
  {
    capability: "Data Entry & Processing",
    openclaw: {
      level: "Excellent",
      description: "OCR, automated extraction, validation rules, error detection, bulk processing",
      accuracy: "99%+",
      speed: "Thousands of records/hour"
    },
    va: {
      level: "Fair",
      description: "Manual data entry, basic validation, prone to human error",
      accuracy: "85-95%",
      speed: "50-100 records/hour"
    }
  },
  {
    capability: "Customer Support",
    openclaw: {
      level: "Good",
      description: "24/7 availability, instant responses, knowledge base integration, escalation to humans",
      accuracy: "80-90%",
      speed: "Instant response"
    },
    va: {
      level: "Excellent",
      description: "Personal touch, emotional intelligence, complex problem solving, cultural understanding",
      accuracy: "90-98%",
      speed: "Business hours only"
    }
  },
  {
    capability: "Research & Analysis",
    openclaw: {
      level: "Advanced",
      description: "Web scraping, data aggregation, trend analysis, automated reports",
      accuracy: "85-95%",
      speed: "Minutes to hours"
    },
    va: {
      level: "Good",
      description: "Manual research, human insights, context understanding, source verification",
      accuracy: "90-95%",
      speed: "Hours to days"
    }
  },
  {
    capability: "Content Creation",
    openclaw: {
      level: "Advanced",
      description: "SEO optimization, multi-format content, brand consistency, bulk generation",
      accuracy: "80-90%",
      speed: "Multiple pieces/hour"
    },
    va: {
      level: "Excellent",
      description: "Creative writing, human insight, cultural nuance, personal brand voice",
      accuracy: "85-98%",
      speed: "1-3 pieces/day"
    }
  }
];

const businessScenarios = [
  {
    scenario: "Small Business (£100k revenue)",
    description: "Solo entrepreneur or small team needing basic automation",
    recommendation: "Start with OpenClaw",
    reasoning: [
      "Lower ongoing costs than part-time VA",
      "24/7 availability for global customers",
      "Scales with business growth without hiring",
      "Handles repetitive tasks efficiently"
    ],
    costSavings: "£800-£1,600/month vs VA",
    timeToRoi: "2-4 months"
  },
  {
    scenario: "Growing Business (£250k-£500k revenue)",
    description: "Established business with increasing operational complexity",
    recommendation: "Hybrid: OpenClaw + Part-time VA",
    reasoning: [
      "OpenClaw handles data processing and routine tasks",
      "VA manages complex customer relationships",
      "Cost-effective scaling model",
      "Best of both worlds approach"
    ],
    costSavings: "£400-£800/month vs full-time VA",
    timeToRoi: "3-6 months"
  },
  {
    scenario: "Established Business (£500k+ revenue)",
    description: "Complex operations requiring sophisticated automation",
    recommendation: "Multi-agent OpenClaw system",
    reasoning: [
      "Complex workflows need automation",
      "Cost of multiple VAs becomes prohibitive",
      "24/7 operations critical for growth",
      "Advanced analytics and reporting needed"
    ],
    costSavings: "£2,000-£6,000/month vs multiple VAs",
    timeToRoi: "1-3 months"
  }
];

const hiddenCosts = {
  openclaw: [
    {
      cost: "Learning Curve",
      impact: "Low",
      description: "Initial time investment to understand agent capabilities",
      mitigation: "Professional setup and training reduces learning time"
    },
    {
      cost: "Technical Dependency", 
      impact: "Medium",
      description: "Reliance on technical infrastructure and model providers",
      mitigation: "Proper backup plans and redundancy reduce risk"
    },
    {
      cost: "Customization Needs",
      impact: "Medium",
      description: "Ongoing development for business-specific requirements",
      mitigation: "Modular skill development spreads costs over time"
    }
  ],
  virtualAssistant: [
    {
      cost: "Recruitment Time",
      impact: "High",
      description: "Time spent finding, interviewing, and vetting candidates",
      mitigation: "Use specialized VA agencies (additional cost)"
    },
    {
      cost: "Training Investment",
      impact: "High", 
      description: "Ongoing training on tools, processes, and business knowledge",
      mitigation: "Comprehensive documentation and training programs"
    },
    {
      cost: "Turnover Risk",
      impact: "High",
      description: "Knowledge loss and replacement costs when VAs leave",
      mitigation: "Competitive compensation and good working conditions"
    },
    {
      cost: "Management Overhead",
      impact: "Medium",
      description: "Time spent managing, reviewing, and coordinating work",
      mitigation: "Clear processes and regular check-ins"
    },
    {
      cost: "Sick Days & Holidays",
      impact: "Medium",
      description: "Work disruption during VA absence",
      mitigation: "Backup VA arrangements (additional cost)"
    }
  ]
};

const roiCalculator = {
  factors: [
    "Hours saved per week",
    "Hourly value of your time",
    "Error reduction percentage", 
    "24/7 availability value",
    "Scaling efficiency gains"
  ],
  formula: "(Time Saved × Hourly Rate + Error Reduction Value + Availability Premium) × 12 - Implementation Cost",
  examples: [
    {
      business: "Consulting Firm",
      timeSaved: "20 hours/week",
      hourlyRate: "£75",
      errorReduction: "£500/month",
      availabilityValue: "£300/month",
      annualSaving: "£87,600",
      implementationCost: "£5,000",
      netRoi: "£82,600 (1,652% ROI)"
    },
    {
      business: "E-commerce Store", 
      timeSaved: "15 hours/week",
      hourlyRate: "£50",
      errorReduction: "£800/month",
      availabilityValue: "£600/month",
      annualSaving: "£55,800",
      implementationCost: "£4,000",
      netRoi: "£51,800 (1,295% ROI)"
    }
  ]
};

const decisionMatrix = [
  {
    factor: "Initial Budget",
    openclawBetter: "Low-Medium",
    vaBetter: "Very Low", 
    description: "OpenClaw requires upfront investment, VA can start immediately"
  },
  {
    factor: "Ongoing Costs",
    openclawBetter: "Low-Medium",
    vaBetter: "High",
    description: "OpenClaw scales cheaply, VA costs grow linearly"
  },
  {
    factor: "Technical Expertise",
    openclawBetter: "Medium-High",
    vaBetter: "Low",
    description: "OpenClaw setup requires technical knowledge"
  },
  {
    factor: "Task Complexity",
    openclawBetter: "Routine/Data-heavy",
    vaBetter: "Creative/Human-touch",
    description: "Different strengths for different task types"
  },
  {
    factor: "Availability Needs", 
    openclawBetter: "24/7 Operations",
    vaBetter: "Business Hours",
    description: "OpenClaw provides continuous operation"
  },
  {
    factor: "Scaling Requirements",
    openclawBetter: "High Growth",
    vaBetter: "Stable Operations",
    description: "OpenClaw scales without proportional cost increases"
  }
];

export default function OpenClawVsVaCostComparisonPage() {
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
              <span className="text-white/60 text-sm font-medium">Cost Analysis & ROI Comparison</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl md:text-[3.2rem] font-extrabold text-white mb-6 leading-[1.05] tracking-tight">
              OpenClaw vs Virtual Assistant
              <br />
              <span className="text-orange">Cost Comparison 2026</span>
            </h1>

            <p className="text-white/60 text-lg md:text-xl max-w-[540px] mb-10 leading-relaxed">
              Complete cost analysis comparing OpenClaw agents with virtual assistants. Real numbers, ROI calculations, and decision framework to choose the right solution.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#comparison"
                className="inline-flex items-center justify-center bg-orange text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-orange-hover transition-all hover:-translate-y-0.5 shadow-glow-orange"
              >
                See Cost Breakdown
              </a>
              <a
                href="/guides"
                className="inline-flex items-center justify-center bg-white/5 text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-white/10 transition-all border border-white/10"
              >
                ← All Guides
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#fafbfc] to-transparent" />
      </section>

      {/* Executive Summary */}
      <section id="comparison" className="bg-light py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="max-w-[800px] mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-8">
              The Bottom Line: Which is Cheaper?
            </h2>
            <div className="prose prose-lg max-w-none text-muted leading-relaxed space-y-6 mb-12">
              <p>
                <strong>Short answer:</strong> OpenClaw costs 60-80% less than virtual assistants for most businesses after the first year, with significantly better scalability and 24/7 availability.
              </p>
              <p>
                <strong>Long answer:</strong> It depends on your business size, technical requirements, and task complexity. Virtual assistants excel at creative and relationship-based work, while OpenClaw dominates data processing, automation, and routine tasks.
              </p>
              <p>
                This comprehensive comparison shows real costs, capabilities, and ROI calculations to help you make the right decision for your specific situation.
              </p>
            </div>

            {/* Quick Comparison Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-card border-l-4 border-orange">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-2xl">🤖</div>
                  <h3 className="font-heading font-bold text-xl text-dark">OpenClaw</h3>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted">Setup Cost:</span>
                    <span className="font-semibold text-dark">{costBreakdown.openclaw.setupCost}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted">Monthly Cost:</span>
                    <span className="font-semibold text-dark">{costBreakdown.openclaw.monthlyCost}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted">Availability:</span>
                    <span className="font-semibold text-green-600">{costBreakdown.openclaw.workingHours}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted">Scaling:</span>
                    <span className="font-semibold text-green-600">Minimal cost</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-card border-l-4 border-blue-500">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-2xl">👤</div>
                  <h3 className="font-heading font-bold text-xl text-dark">Virtual Assistant</h3>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted">Setup Cost:</span>
                    <span className="font-semibold text-dark">{costBreakdown.virtualAssistant.setupCost}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted">Monthly Cost:</span>
                    <span className="font-semibold text-dark">{costBreakdown.virtualAssistant.monthlyCost}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted">Availability:</span>
                    <span className="font-semibold text-orange">{costBreakdown.virtualAssistant.workingHours}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted">Scaling:</span>
                    <span className="font-semibold text-orange">Linear increase</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Cost Breakdown */}
      <section className="bg-white py-28">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Detailed Cost Breakdown
            </h2>
            <p className="text-muted text-lg max-w-[600px] mx-auto">
              Line-by-line analysis of all costs involved in both options, including hidden expenses.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* OpenClaw Costs */}
            <div>
              <div className="bg-orange/10 rounded-lg p-6 mb-8">
                <h3 className="font-heading font-bold text-xl text-dark mb-4 flex items-center gap-2">
                  <span>🤖</span> OpenClaw Total Costs
                </h3>
                <div className="space-y-4">
                  {costBreakdown.openclaw.breakdown.map((item, index) => (
                    <div key={index} className="flex justify-between items-center border-b border-orange/20 pb-2">
                      <div>
                        <div className="font-medium text-dark text-sm">{item.item}</div>
                        <div className="text-muted text-xs">{item.frequency}</div>
                      </div>
                      <div className="font-semibold text-dark">{item.cost}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-4 border-t border-orange/30">
                  <div className="flex justify-between items-center font-bold text-dark">
                    <span>Total Monthly (After Setup):</span>
                    <span className="text-lg">{costBreakdown.openclaw.monthlyCost}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted">Scaling Model:</span>
                  <span className="text-green-600 font-medium">{costBreakdown.openclaw.scalingCost}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted">Task Capacity:</span>
                  <span className="text-green-600 font-medium">{costBreakdown.openclaw.taskCapacity}</span>
                </div>
              </div>
            </div>

            {/* Virtual Assistant Costs */}
            <div>
              <div className="bg-blue-50 rounded-lg p-6 mb-8">
                <h3 className="font-heading font-bold text-xl text-dark mb-4 flex items-center gap-2">
                  <span>👤</span> Virtual Assistant Total Costs
                </h3>
                <div className="space-y-4">
                  {costBreakdown.virtualAssistant.breakdown.map((item, index) => (
                    <div key={index} className="flex justify-between items-center border-b border-blue-200 pb-2">
                      <div>
                        <div className="font-medium text-dark text-sm">{item.item}</div>
                        <div className="text-muted text-xs">{item.frequency}</div>
                      </div>
                      <div className="font-semibold text-dark">{item.cost}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-4 border-t border-blue-300">
                  <div className="flex justify-between items-center font-bold text-dark">
                    <span>Total Monthly (Ongoing):</span>
                    <span className="text-lg">{costBreakdown.virtualAssistant.monthlyCost}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted">Scaling Model:</span>
                  <span className="text-orange font-medium">{costBreakdown.virtualAssistant.scalingCost}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted">Task Capacity:</span>
                  <span className="text-orange font-medium">{costBreakdown.virtualAssistant.taskCapacity}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capability Comparison */}
      <section className="bg-surface py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Capability & Performance Comparison
            </h2>
            <p className="text-muted text-lg max-w-[600px] mx-auto">
              Head-to-head comparison of key business capabilities across different task types.
            </p>
          </div>

          <div className="space-y-8">
            {capabilityComparison.map((capability, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-card">
                <h3 className="font-heading font-bold text-xl text-dark mb-6">{capability.capability}</h3>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* OpenClaw */}
                  <div className="border-l-4 border-orange pl-6">
                    <div className="flex justify-between items-center mb-3">
                      <h4 className="font-semibold text-dark">OpenClaw</h4>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        capability.openclaw.level === 'Excellent' ? 'bg-green-100 text-green-700' :
                        capability.openclaw.level === 'Advanced' ? 'bg-blue-100 text-blue-700' :
                        capability.openclaw.level === 'Good' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-gray-100 text-dark'
                      }`}>
                        {capability.openclaw.level}
                      </span>
                    </div>
                    <p className="text-muted text-sm mb-3">{capability.openclaw.description}</p>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div>
                        <span className="text-muted">Accuracy:</span>
                        <span className="font-medium text-dark ml-1">{capability.openclaw.accuracy}</span>
                      </div>
                      <div>
                        <span className="text-muted">Speed:</span>
                        <span className="font-medium text-dark ml-1">{capability.openclaw.speed}</span>
                      </div>
                    </div>
                  </div>

                  {/* Virtual Assistant */}
                  <div className="border-l-4 border-blue-500 pl-6">
                    <div className="flex justify-between items-center mb-3">
                      <h4 className="font-semibold text-dark">Virtual Assistant</h4>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        capability.va.level === 'Excellent' ? 'bg-green-100 text-green-700' :
                        capability.va.level === 'Advanced' ? 'bg-blue-100 text-blue-700' :
                        capability.va.level === 'Good' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-gray-100 text-dark'
                      }`}>
                        {capability.va.level}
                      </span>
                    </div>
                    <p className="text-muted text-sm mb-3">{capability.va.description}</p>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div>
                        <span className="text-muted">Accuracy:</span>
                        <span className="font-medium text-dark ml-1">{capability.va.accuracy}</span>
                      </div>
                      <div>
                        <span className="text-muted">Speed:</span>
                        <span className="font-medium text-dark ml-1">{capability.va.speed}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Scenarios */}
      <section className="bg-navy text-white py-24 relative overflow-hidden grain">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue/5 rounded-full blur-[150px]" />

        <div className="max-w-[1140px] mx-auto px-6 relative z-10">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Which Should You Choose? Business Scenarios
            </h2>
            <p className="text-white/60 text-lg max-w-[600px] mx-auto">
              Specific recommendations based on business size, revenue, and operational complexity.
            </p>
          </div>

          <div className="space-y-8">
            {businessScenarios.map((scenario, index) => (
              <div key={index} className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div>
                    <h3 className="font-heading font-bold text-xl text-white mb-2">{scenario.scenario}</h3>
                    <p className="text-white/60 text-sm mb-4">{scenario.description}</p>
                    <div className="inline-flex items-center bg-orange/20 text-orange px-3 py-1 rounded-full text-sm font-medium">
                      {scenario.recommendation}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-white mb-3">Key Reasoning:</h4>
                    <ul className="space-y-2 text-white/60 text-sm">
                      {scenario.reasoning.map((reason, idx) => (
                        <li key={idx} className="flex gap-3">
                          <span className="text-orange mt-0.5">▸</span>
                          {reason}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-white mb-3">Financial Impact:</h4>
                    <div className="space-y-2 text-sm">
                      <div className="text-green-400">
                        <strong>Savings:</strong> {scenario.costSavings}
                      </div>
                      <div className="text-orange">
                        <strong>ROI Timeline:</strong> {scenario.timeToRoi}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hidden Costs */}
      <section className="bg-white py-28">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Hidden Costs & Considerations
            </h2>
            <p className="text-muted text-lg max-w-[600px] mx-auto">
              Important costs and factors that aren't immediately obvious but significantly impact total cost of ownership.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* OpenClaw Hidden Costs */}
            <div>
              <h3 className="font-heading font-bold text-xl text-dark mb-6 flex items-center gap-2">
                <span>🤖</span> OpenClaw Considerations
              </h3>
              <div className="space-y-6">
                {hiddenCosts.openclaw.map((cost, index) => (
                  <div key={index} className="border border-orange/20 rounded-lg p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="font-semibold text-dark">{cost.cost}</h4>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        cost.impact === 'Low' ? 'bg-green-100 text-green-700' :
                        cost.impact === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                        {cost.impact} Impact
                      </span>
                    </div>
                    <p className="text-muted text-sm mb-3">{cost.description}</p>
                    <div className="border-l-4 border-orange pl-4">
                      <p className="text-dark font-medium text-sm">Mitigation: {cost.mitigation}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* VA Hidden Costs */}
            <div>
              <h3 className="font-heading font-bold text-xl text-dark mb-6 flex items-center gap-2">
                <span>👤</span> Virtual Assistant Considerations
              </h3>
              <div className="space-y-6">
                {hiddenCosts.virtualAssistant.map((cost, index) => (
                  <div key={index} className="border border-blue-200 rounded-lg p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="font-semibold text-dark">{cost.cost}</h4>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        cost.impact === 'Low' ? 'bg-green-100 text-green-700' :
                        cost.impact === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                        {cost.impact} Impact
                      </span>
                    </div>
                    <p className="text-muted text-sm mb-3">{cost.description}</p>
                    <div className="border-l-4 border-blue-500 pl-4">
                      <p className="text-dark font-medium text-sm">Mitigation: {cost.mitigation}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="bg-light py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              ROI Calculator & Real Examples
            </h2>
            <p className="text-muted text-lg max-w-[600px] mx-auto">
              Calculate the return on investment for your specific situation with real business examples.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-card mb-12">
            <h3 className="font-heading font-bold text-xl text-dark mb-6">ROI Calculation Framework</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="font-semibold text-dark mb-4">Key ROI Factors:</h4>
                <ul className="space-y-2">
                  {roiCalculator.factors.map((factor, index) => (
                    <li key={index} className="flex gap-3 text-muted text-sm">
                      <span className="text-orange">▸</span>
                      {factor}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-dark mb-4">ROI Formula:</h4>
                <div className="bg-surface p-4 rounded-lg">
                  <p className="text-muted text-sm font-mono">{roiCalculator.formula}</p>
                </div>
              </div>
            </div>

            <h4 className="font-semibold text-dark mb-4">Real Business Examples:</h4>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {roiCalculator.examples.map((example, index) => (
                <div key={index} className="border border-orange/20 rounded-lg p-6">
                  <h5 className="font-semibold text-dark mb-4">{example.business}</h5>
                  <div className="space-y-2 text-sm mb-4">
                    <div className="flex justify-between">
                      <span className="text-muted">Time Saved:</span>
                      <span className="text-dark">{example.timeSaved}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted">Hourly Rate:</span>
                      <span className="text-dark">{example.hourlyRate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted">Error Reduction Value:</span>
                      <span className="text-dark">{example.errorReduction}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted">24/7 Availability Value:</span>
                      <span className="text-dark">{example.availabilityValue}</span>
                    </div>
                  </div>
                  <div className="border-t border-orange/20 pt-4">
                    <div className="flex justify-between mb-2">
                      <span className="text-muted">Annual Saving:</span>
                      <span className="text-green-600 font-semibold">{example.annualSaving}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="text-muted">Implementation Cost:</span>
                      <span className="text-orange">{example.implementationCost}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-dark font-semibold">Net ROI:</span>
                      <span className="text-green-600 font-bold">{example.netRoi}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Decision Matrix */}
      <section className="bg-navy text-white py-24 relative overflow-hidden grain">
        <div className="absolute bottom-0 left-[20%] w-[500px] h-[500px] bg-orange/5 rounded-full blur-[120px]" />

        <div className="max-w-[1140px] mx-auto px-6 relative z-10">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Decision Matrix: When to Choose What
            </h2>
            <p className="text-white/60 text-lg max-w-[600px] mx-auto">
              Clear decision framework based on your specific business factors and requirements.
            </p>
          </div>

          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/[0.06]">
                    <th className="text-left p-4 text-white font-heading font-bold">Factor</th>
                    <th className="text-left p-4 text-orange font-heading font-bold">OpenClaw Better If</th>
                    <th className="text-left p-4 text-blue-400 font-heading font-bold">VA Better If</th>
                    <th className="text-left p-4 text-white font-heading font-bold">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {decisionMatrix.map((factor, index) => (
                    <tr key={index} className="border-b border-white/[0.06] last:border-b-0">
                      <td className="p-4 text-white/80 font-medium">{factor.factor}</td>
                      <td className="p-4 text-orange text-sm">{factor.openclawBetter}</td>
                      <td className="p-4 text-blue-400 text-sm">{factor.vaBetter}</td>
                      <td className="p-4 text-white/60 text-sm">{factor.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-12 bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8">
            <h3 className="font-heading font-bold text-xl text-white mb-4">Quick Decision Guidelines</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-orange mb-3">Choose OpenClaw if you:</h4>
                <ul className="space-y-2 text-white/60 text-sm">
                  <li className="flex gap-3"><span className="text-orange">✓</span>Need 24/7 operations</li>
                  <li className="flex gap-3"><span className="text-orange">✓</span>Have data-heavy processes</li>
                  <li className="flex gap-3"><span className="text-orange">✓</span>Plan to scale rapidly</li>
                  <li className="flex gap-3"><span className="text-orange">✓</span>Want predictable costs</li>
                  <li className="flex gap-3"><span className="text-orange">✓</span>Have technical resources</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-400 mb-3">Choose VA if you:</h4>
                <ul className="space-y-2 text-white/60 text-sm">
                  <li className="flex gap-3"><span className="text-blue-400">✓</span>Need creative/strategic work</li>
                  <li className="flex gap-3"><span className="text-blue-400">✓</span>Have complex customer relationships</li>
                  <li className="flex gap-3"><span className="text-blue-400">✓</span>Prefer human judgment</li>
                  <li className="flex gap-3"><span className="text-blue-400">✓</span>Have limited technical budget</li>
                  <li className="flex gap-3"><span className="text-blue-400">✓</span>Need immediate start</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="bg-white py-28">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="bg-surface rounded-2xl p-12 text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-6">
              Ready to Calculate Your Specific ROI?
            </h2>
            <p className="text-muted text-lg leading-relaxed mb-8 max-w-[600px] mx-auto">
              Get a detailed cost analysis and ROI projection for your specific business requirements. See exactly how much you could save with OpenClaw.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="text-center">
                <div className="text-2xl mb-3">📊</div>
                <h3 className="font-heading font-bold text-dark mb-2">Custom ROI Analysis</h3>
                <p className="text-muted text-sm">Detailed cost comparison for your specific situation</p>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-3">⚡</div>
                <h3 className="font-heading font-bold text-dark mb-2">Implementation Planning</h3>
                <p className="text-muted text-sm">Step-by-step plan with timeline and milestones</p>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-3">🎯</div>
                <h3 className="font-heading font-bold text-dark mb-2">Capability Assessment</h3>
                <p className="text-muted text-sm">Identify which tasks are best for automation</p>
              </div>
            </div>
            
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-orange text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-orange-hover transition-all hover:-translate-y-0.5 shadow-xl"
            >
              Get Your Custom ROI Analysis →
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      
      {/* Related Guides */}
      <section className="py-16 bg-surface">
        <div className="max-w-[1140px] mx-auto px-6">
          <h2 className="font-heading text-2xl font-bold text-navy mb-8 text-center">Related Guides</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-[800px] mx-auto">
            <a href="/guides/openclaw-vs-chatgpt" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">OpenClaw vs ChatGPT: Key Differences</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/openclaw-vs-zapier-vs-make" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">OpenClaw vs Zapier vs Make</h3>
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
        <div className="absolute bottom-0 left-[20%] w-[500px] h-[500px] bg-orange/5 rounded-full blur-[120px]" />
        <div className="absolute top-0 right-[10%] w-[400px] h-[400px] bg-blue/5 rounded-full blur-[100px]" />

        <div className="max-w-[1140px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-orange font-heading font-semibold text-sm uppercase tracking-widest mb-4">
                Cost Analysis
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Make the Right Choice
                <br />
                <span className="text-orange">For Your Business</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Get a detailed cost comparison and ROI analysis specific to your business. Free consultation to determine whether OpenClaw or VA is the better investment.
              </p>
              
              <div className="space-y-4 text-white/50 text-sm">
                <div className="flex gap-3 items-center">
                  <span className="text-orange">💰</span>
                  <span>Detailed cost breakdown and ROI projections</span>
                </div>
                <div className="flex gap-3 items-center">
                  <span className="text-orange">📈</span>
                  <span>Business impact analysis and scaling scenarios</span>
                </div>
                <div className="flex gap-3 items-center">
                  <span className="text-orange">⚡</span>
                  <span>Implementation timeline and resource requirements</span>
                </div>
              </div>
            </div>

            <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8">
              <h3 className="font-heading font-bold text-xl text-white mb-1">Free ROI Analysis</h3>
              <p className="text-white/40 text-sm mb-6">Compare OpenClaw vs VA costs for your business</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}