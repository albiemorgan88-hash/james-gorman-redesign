import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "AI Agents for Logistics Companies",
  description: "How AI agents can automate route optimization, load planning, driver scheduling, and customer communications for UK logistics and haulage companies. Reduce costs and improve delivery performance.",
  keywords: [
    "ai agents logistics",
    "transport automation uk",
    "logistics ai software",
    "fleet management ai",
    "route optimization ai",
    "haulage automation",
    "logistics ai assistant",
    "transport management ai uk"
  ],
  alternates: { canonical: "https://openclawconsultant.co.uk/guides/ai-agents-logistics" },
  openGraph: {
    title: "AI Agents for Logistics Companies",
    description: "How AI agents can automate route optimization, load planning, driver scheduling, and customer communications for UK logistics and haulage companies.",
    url: "https://openclawconsultant.co.uk/guides/ai-agents-logistics",
    type: "article",
  },
};

const automationAreas = [
  {
    area: "Route Optimization",
    timeSpent: "15-25 hours per week",
    timeSaved: "90% automation possible",
    automations: [
      "Dynamic route planning with real-time traffic data",
      "Multi-stop delivery optimization", 
      "Vehicle capacity and constraint management",
      "Fuel cost minimization and efficiency tracking"
    ],
    impact: "Reduce fuel costs and improve delivery times"
  },
  {
    area: "Load Planning",
    timeSpent: "12-20 hours per week",
    timeSaved: "85% reduction possible",
    automations: [
      "Automated load matching and consolidation",
      "Weight distribution and safety optimization",
      "Temperature and hazmat requirement management",
      "Return journey optimization and backloading"
    ],
    impact: "Maximize vehicle utilization and revenue"
  },
  {
    area: "Driver Management",
    timeSpent: "10-18 hours per week", 
    timeSaved: "80% time savings",
    automations: [
      "Driver scheduling based on hours and rest requirements",
      "Automated dispatch and route assignment",
      "Performance monitoring and feedback",
      "Compliance tracking for tachograph and working time"
    ],
    impact: "Optimal driver utilization and compliance"
  },
  {
    area: "Customer Communication",
    timeSpent: "8-15 hours per week",
    timeSaved: "85% automation possible", 
    automations: [
      "Real-time delivery tracking and customer updates",
      "Automated proof of delivery and documentation",
      "Exception handling and delay notifications",
      "Invoice generation and payment processing"
    ],
    impact: "Better customer service and faster payments"
  }
];

const useCases = [
  {
    useCase: "Intelligent Route Optimization",
    problem: "Manual route planning is time-consuming and rarely optimal, leading to higher fuel costs and delivery delays",
    solution: "AI continuously optimizes routes considering traffic, weather, delivery windows, and driver constraints in real-time",
    implementation: "Load orders into system, AI automatically generates optimal routes and adjusts for real-time conditions",
    benefits: ["25% fuel cost reduction", "30% more deliveries per day", "Better on-time performance", "Reduced driver hours"]
  },
  {
    useCase: "Smart Load Consolidation", 
    problem: "Vehicles running half-empty while opportunities for load consolidation and backloading are missed",
    solution: "AI automatically identifies consolidation opportunities and optimizes vehicle loading for maximum efficiency",
    implementation: "AI analyzes all available loads, customer requirements, and vehicle specs to create optimal loading plans",
    benefits: ["40% increase in load factor", "Reduced empty miles", "Better vehicle utilization", "Increased profitability"]
  },
  {
    useCase: "Automated Compliance Management",
    problem: "Driver hours regulations and vehicle compliance create administrative burden and risk of violations",
    solution: "AI monitors all compliance requirements automatically and prevents violations before they occur",
    implementation: "Real-time monitoring of driver hours, vehicle inspections, and regulatory requirements with automatic alerts",
    benefits: ["Zero compliance violations", "Reduced admin overhead", "Better driver utilization", "Risk mitigation"]
  }
];

const roiExample = {
  practiceSize: "50-vehicle logistics company operating across Northern England",
  currentCosts: "Fuel overspend due to poor routing (£80,000/year), underutilized vehicle capacity (£120,000/year), compliance admin overhead (£40,000/year)",
  aiImplementation: "Comprehensive logistics AI automation across routing, load planning, and compliance",
  savings: "£60,000/year fuel savings, £85,000/year from better capacity utilization, £30,000/year reduced admin costs",
  totalSaving: "£175,000/year",
  roi: "875% ROI within first year"
};

const faqs = [
  {
    question: "How accurate is AI route optimization compared to experienced transport planners?",
    answer: "AI route optimization processes thousands of variables simultaneously including real-time traffic, weather, delivery constraints, and driver schedules. It consistently outperforms manual planning by 20-30% for fuel efficiency and delivery performance. The AI learns from every route to continuously improve optimization."
  },
  {
    question: "Can AI handle complex logistics constraints like hazmat, temperature control, and weight limits?",
    answer: "Yes, AI excels at managing multiple complex constraints simultaneously. It can optimize routes while ensuring hazmat compliance, maintaining cold chain integrity, respecting weight restrictions, and meeting customer delivery windows. The more constraints, the more valuable AI optimization becomes."
  },
  {
    question: "How does logistics AI integrate with existing fleet management and tracking systems?",
    answer: "Our AI integrates with major fleet management platforms including Microlise, Teletrac Navman, Fleetmatics, and others. It can also work with telematics systems, warehouse management software, and customer portals. The AI enhances your existing infrastructure rather than replacing it."
  },
  {
    question: "What about driver acceptance of AI-generated routes and schedules?",
    answer: "Drivers appreciate more efficient routes that reduce their workload and stress. AI considers driver preferences, rest requirements, and familiar routes where possible. Most drivers quickly see the benefits of optimized schedules that get them home on time while reducing unnecessary miles."
  },
  {
    question: "How quickly can logistics AI be implemented across our fleet?",
    answer: "Basic route optimization can be live within 3-4 weeks. Load planning integration typically takes 6-8 weeks to connect with your transport management system. Full automation including compliance monitoring usually completes within 12 weeks with phased rollout and driver training."
  }
];

export default function AIAgentsLogisticsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient relative overflow-hidden min-h-[70vh] flex items-center grain">
        <div className="max-w-[1140px] mx-auto px-6 relative z-10 py-20">
          <div className="max-w-[720px]">
            <h1 className="font-heading text-4xl sm:text-5xl md:text-[3.2rem] font-extrabold text-white mb-6 leading-[1.05] tracking-tight">
              AI Agents for
              <br />
              <span className="text-orange">Logistics Companies</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl max-w-[540px] mb-10 leading-relaxed">
              Automate route planning, load optimization, driver scheduling, and customer communications. Reduce costs while improving delivery performance.
            </p>
            <a
              href="#automations"
              className="inline-flex items-center justify-center bg-orange text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-orange-hover transition-all hover:-translate-y-0.5 shadow-glow-orange"
            >
              See Logistics Automations
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
              <div className="text-4xl font-bold text-orange mb-2">25%</div>
              <div className="text-muted">Reduction in fuel costs</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange mb-2">40%</div>
              <div className="text-muted">Increase in vehicle load factor</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange mb-2">30%</div>
              <div className="text-muted">More deliveries per vehicle per day</div>
            </div>
          </div>
        </div>
      </section>

      {/* Automation Areas */}
      <section id="automations" className="bg-light py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Where Logistics Companies Save the Most Time
            </h2>
            <p className="text-muted text-lg max-w-[600px] mx-auto">
              Four key areas where AI automation delivers immediate productivity gains for logistics and transport businesses.
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
              Real Logistics AI Use Cases
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
              Real ROI Example: Northern England Logistics Company
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
              Logistics AI Automation FAQs
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
            Blue Canvas helps UK logistics and haulage companies implement AI automation from his base in Derry, Northern Ireland. 
            With extensive experience in transport technology and fleet management systems, Phil understands the unique challenges 
            facing logistics operators and designs automation solutions that reduce operational costs while improving service quality.
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
                <span className="text-orange">Logistics Operation</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Free consultation to assess your current transport operations and identify where AI automation can 
                reduce fuel costs by 25% while increasing vehicle utilization by 40%.
              </p>
              <div className="space-y-3 text-white/60">
                <div className="flex items-center gap-3">
                  <span className="text-orange">✓</span>
                  No obligation fleet assessment
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-orange">✓</span>
                  ROI calculation for your operation
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-orange">✓</span>
                  Custom implementation roadmap
                </div>
              </div>
            </div>
            <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8">
              <h3 className="font-heading font-bold text-xl text-white mb-1">Logistics AI Consultation</h3>
              <p className="text-white/60 text-sm mb-6">Get a custom automation plan for your transport business</p>
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
            <a href="/guides/ai-agents-accountants" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
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