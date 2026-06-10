import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "AI Agents for Construction Companies",
  description: "How AI agents can automate project planning, cost estimation, material ordering, and site management for UK construction companies. Reduce delays and increase profitability.",
  keywords: [
    "ai agents construction",
    "construction automation uk",
    "ai project management construction",
    "construction ai software",
    "automated cost estimation",
    "ai for construction companies",
    "construction project automation",
    "building ai assistant uk"
  ],
  alternates: { canonical: "https://openclawconsultant.co.uk/guides/ai-agents-construction" },
  openGraph: {
    title: "AI Agents for Construction Companies",
    description: "How AI agents can automate project planning, cost estimation, material ordering, and site management for UK construction companies.",
    url: "https://openclawconsultant.co.uk/guides/ai-agents-construction",
    type: "article",
  },
};

const automationAreas = [
  {
    area: "Project Estimation",
    timeSpent: "15-25 hours per project",
    timeSaved: "80% automation possible",
    automations: [
      "Automated quantity take-offs from drawings",
      "Material cost calculation with supplier pricing", 
      "Labour estimation based on trade rates",
      "Risk analysis and contingency planning"
    ],
    impact: "Faster, more accurate estimates win more bids"
  },
  {
    area: "Material Management",
    timeSpent: "10-15 hours per week",
    timeSaved: "85% reduction possible",
    automations: [
      "Automated material ordering and scheduling",
      "Supplier price comparison and negotiation",
      "Delivery tracking and site coordination",
      "Inventory management and waste reduction"
    ],
    impact: "No project delays due to missing materials"
  },
  {
    area: "Project Documentation",
    timeSpent: "12-20 hours per week", 
    timeSaved: "75% time savings",
    automations: [
      "Progress reporting and photo documentation",
      "Health and safety compliance tracking",
      "Quality control checklist automation",
      "Client update and communication management"
    ],
    impact: "Complete project visibility and compliance"
  },
  {
    area: "Schedule Management",
    timeSpent: "8-12 hours per week",
    timeSaved: "70% automation possible", 
    automations: [
      "Critical path scheduling and optimization",
      "Trade coordination and sequencing",
      "Weather impact assessment and rescheduling",
      "Resource allocation and conflict resolution"
    ],
    impact: "Projects delivered on time and on budget"
  }
];

const useCases = [
  {
    useCase: "Smart Cost Estimation",
    problem: "Manual estimating takes weeks, often misses costs, and loses competitive bids",
    solution: "AI analyses drawings, calculates exact quantities, applies current pricing and generates detailed estimates in hours",
    implementation: "Upload project drawings and specifications, AI produces comprehensive cost breakdown with material and labour schedules",
    benefits: ["10x faster estimation", "95% accuracy improvement", "Competitive pricing", "Detailed breakdowns"]
  },
  {
    useCase: "Automated Material Procurement", 
    problem: "Managing multiple suppliers, comparing prices, and coordinating deliveries causes project delays",
    solution: "AI automatically orders materials from best suppliers at optimal times based on construction schedule",
    implementation: "AI monitors project progress, anticipates material needs, compares supplier prices and schedules just-in-time deliveries",
    benefits: ["Zero material delays", "15% cost savings", "Reduced waste", "Automatic ordering"]
  },
  {
    useCase: "Intelligent Project Tracking",
    problem: "Tracking progress across multiple sites and trades requires constant manual updates",
    solution: "AI processes site photos, monitors schedules, tracks compliance and generates real-time progress reports",
    implementation: "Workers upload photos via mobile app, AI analyses progress, updates schedules and alerts to potential issues",
    benefits: ["Real-time visibility", "Early problem detection", "Compliance assurance", "Client transparency"]
  }
];

const roiExample = {
  practiceSize: "50-person construction company in Birmingham",
  currentCosts: "Project delays (£150,000/year), manual estimating overhead (£80,000/year), material waste and rush orders (£60,000/year)",
  aiImplementation: "Comprehensive AI automation across estimating, procurement and project management",
  savings: "£120,000/year from faster project delivery, £60,000/year reduced estimating costs, £45,000/year material savings",
  totalSaving: "£225,000/year",
  roi: "750% ROI within first year"
};

const faqs = [
  {
    question: "How accurate is AI cost estimation compared to experienced estimators?",
    answer: "AI estimation typically achieves 95%+ accuracy because it processes every line of the drawings without human error, applies current supplier pricing automatically, and learns from historical project data. It doesn't replace estimator expertise but makes it dramatically more accurate and faster."
  },
  {
    question: "Can AI handle complex construction projects with multiple trades?",
    answer: "Yes, AI excels at managing complexity. It can coordinate schedules across all trades, identify potential conflicts, optimize sequencing for efficiency, and automatically adjust timelines when changes occur. The more complex the project, the more value AI coordination provides."
  },
  {
    question: "How does construction AI integrate with existing project management software?",
    answer: "Our AI integrates with major construction software including Procore, PlanGrid, Buildertrend, and others. It can also work with custom systems and spreadsheet-based processes. The AI acts as an intelligent layer that enhances your existing workflows."
  },
  {
    question: "What about site safety and compliance monitoring with AI?",
    answer: "AI can automatically check for safety compliance in site photos, verify PPE usage, monitor hazardous conditions, and ensure quality standards are met. It creates comprehensive audit trails for regulatory compliance and insurance requirements."
  },
  {
    question: "How quickly can construction AI be implemented across our projects?",
    answer: "Basic estimation and material management can be live within 3-4 weeks. Project tracking and scheduling automation typically takes 6-8 weeks for full integration. Complex multi-site implementations usually complete within 12 weeks with phased rollout."
  }
];

export default function AIAgentsConstructionPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient relative overflow-hidden min-h-[70vh] flex items-center grain">
        <div className="max-w-[1140px] mx-auto px-6 relative z-10 py-20">
          <div className="max-w-[720px]">
            <h1 className="font-heading text-4xl sm:text-5xl md:text-[3.2rem] font-extrabold text-white mb-6 leading-[1.05] tracking-tight">
              AI Agents for
              <br />
              <span className="text-orange">Construction Companies</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl max-w-[540px] mb-10 leading-relaxed">
              Automate project estimation, material management, scheduling, and site monitoring. Deliver projects on time and under budget.
            </p>
            <a
              href="#automations"
              className="inline-flex items-center justify-center bg-orange text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-orange-hover transition-all hover:-translate-y-0.5 shadow-glow-orange"
            >
              See Construction Automations
            </a>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#fafbfc] to-transparent" />
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-orange mb-2">10x</div>
              <div className="text-muted">Faster project cost estimation</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange mb-2">25%</div>
              <div className="text-muted">Reduction in project delays</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange mb-2">15%</div>
              <div className="text-muted">Savings on material costs</div>
            </div>
          </div>
        </div>
      </section>

      {/* Automation Areas */}
      <section id="automations" className="bg-light py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Where Construction Companies Save the Most Time
            </h2>
            <p className="text-muted text-lg max-w-[600px] mx-auto">
              Four key areas where AI automation delivers immediate productivity gains for construction businesses.
            </p>
          </div>

          <div className="space-y-8">
            {automationAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-card">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
                  <div>
                    <h3 className="font-heading font-bold text-xl text-dark mb-3">{area.area}</h3>
                    <div className="space-y-2 text-sm">
                      <div className="text-red-500">Currently: {area.timeSpent}</div>
                      <div className="text-green-600 font-semibold">{area.timeSaved}</div>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-2">
                    <h4 className="font-semibold text-dark mb-3">Automations Available:</h4>
                    <ul className="space-y-2">
                      {area.automations.map((automation, i) => (
                        <li key={i} className="flex gap-2 items-start text-sm text-muted-dark">
                          <span className="text-orange mt-0.5 flex-shrink-0">•</span>
                          {automation}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-dark mb-3">Impact:</h4>
                    <p className="text-orange font-medium text-sm">{area.impact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="bg-white py-28">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Real Construction AI Use Cases
            </h2>
          </div>

          <div className="space-y-12">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-surface rounded-2xl p-8">
                <h3 className="font-heading font-bold text-2xl text-dark mb-6">{useCase.useCase}</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-red-600 mb-3">The Problem:</h4>
                      <p className="text-muted text-sm">{useCase.problem}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-600 mb-3">AI Solution:</h4>
                      <p className="text-muted text-sm">{useCase.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue mb-3">Implementation:</h4>
                      <p className="text-muted text-sm">{useCase.implementation}</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {useCase.benefits.map((benefit, i) => (
                        <li key={i} className="text-sm text-orange flex gap-2 items-start">
                          <span className="flex-shrink-0">▸</span>
                          {benefit}
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

      {/* ROI Section */}
      <section className="bg-surface py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Real ROI Example: Birmingham Construction Company
            </h2>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-card">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="font-heading font-bold text-xl text-dark mb-6">Before AI Automation:</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-red-500 pl-4">
                    <div className="font-semibold text-dark">Company Size:</div>
                    <div className="text-muted text-sm">{roiExample.practiceSize}</div>
                  </div>
                  <div className="border-l-4 border-red-500 pl-4">
                    <div className="font-semibold text-dark">Annual Costs:</div>
                    <div className="text-muted text-sm">{roiExample.currentCosts}</div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-heading font-bold text-xl text-dark mb-6">After AI Implementation:</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-green-600 pl-4">
                    <div className="font-semibold text-dark">Implementation:</div>
                    <div className="text-muted text-sm">{roiExample.aiImplementation}</div>
                  </div>
                  <div className="border-l-4 border-green-600 pl-4">
                    <div className="font-semibold text-dark">Annual Savings:</div>
                    <div className="text-muted text-sm">{roiExample.savings}</div>
                  </div>
                  <div className="border-l-4 border-orange pl-4">
                    <div className="font-semibold text-orange text-lg">Total Annual Saving: {roiExample.totalSaving}</div>
                    <div className="text-orange font-semibold">{roiExample.roi}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-28">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Construction AI Automation FAQs
            </h2>
          </div>

          <div className="max-w-[800px] mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-surface rounded-2xl p-6">
                <h3 className="font-heading font-bold text-lg text-dark mb-3">{faq.question}</h3>
                <p className="text-muted text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Blue Canvas */}
      <section className="bg-light py-16">
        <div className="max-w-[1140px] mx-auto px-6 text-center">
          <h3 className="font-heading font-bold text-xl text-dark mb-4">About Blue Canvas</h3>
          <p className="text-muted max-w-[600px] mx-auto text-sm">
            Blue Canvas helps UK construction companies implement AI automation from his base in Derry, Northern Ireland. 
            With extensive experience in construction technology and project management systems, Phil understands the unique 
            challenges facing construction businesses and designs automation solutions that improve project delivery while reducing costs.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-navy text-white py-24 relative overflow-hidden grain">
        <div className="max-w-[1140px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Transform Your
                <br />
                <span className="text-orange">Construction Business</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Free consultation to assess your current construction processes and identify where AI automation can 
                reduce project timelines by 25% while increasing profitability.
              </p>
              <div className="space-y-3 text-white/60">
                <div className="flex items-center gap-3">
                  <span className="text-orange">✓</span>
                  No obligation project assessment
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-orange">✓</span>
                  ROI calculation for your business
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-orange">✓</span>
                  Custom implementation roadmap
                </div>
              </div>
            </div>
            <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8">
              <h3 className="font-heading font-bold text-xl text-white mb-1">Construction AI Consultation</h3>
              <p className="text-white/60 text-sm mb-6">Get a custom automation plan for your construction company</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Related Guides */}
      <section className="py-16 bg-surface">
        <div className="max-w-[1140px] mx-auto px-6">
          <h2 className="font-heading text-2xl font-bold text-navy mb-8 text-center">Related Guides</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-[800px] mx-auto">
            <a href="/guides/ai-agents-for-accountants" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">AI Agents for Accountants UK</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/ai-agents-charities" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">AI Agents for Charities UK</h3>
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
    </>
  );
}