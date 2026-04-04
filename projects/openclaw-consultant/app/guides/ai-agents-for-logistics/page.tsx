import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "AI Agents for Logistics: Route Planning, Fleet, and Delivery",
  description: "How AI agents automate logistics operations — route optimisation, fleet management, delivery tracking, and warehouse coordination. Built for UK haulage, courier, and distribution businesses.",
  keywords: [
    "ai agents logistics",
    "logistics automation uk",
    "ai route planning",
    "ai fleet management",
    "ai delivery optimisation",
    "warehouse automation ai",
    "ai for haulage companies",
    "logistics ai agents uk"
  ],
  alternates: { canonical: "https://openclawconsultant.co.uk/guides/ai-agents-for-logistics" },
  openGraph: {
    title: "AI Agents for Logistics: Route Planning, Fleet, and Delivery",
    description: "How AI agents automate logistics operations — route optimisation, fleet management, delivery tracking, and warehouse coordination.",
    url: "https://openclawconsultant.co.uk/guides/ai-agents-for-logistics",
    type: "article",
  },
};

const automationAreas = [
  {
    area: "Route Optimisation",
    timeSpent: "2-4 hours daily planning routes manually",
    timeSaved: "95% of planning time automated",
    automations: [
      "Multi-stop route optimisation factoring traffic, time windows, and vehicle capacity",
      "Real-time rerouting when conditions change — roadworks, breakdowns, cancellations",
      "Driver assignment based on location, hours remaining, vehicle type, and skills",
      "Load consolidation to maximise vehicle utilisation and reduce empty running"
    ],
    impact: "15-25% fuel savings with faster, smarter routes"
  },
  {
    area: "Fleet Management",
    timeSpent: "10-15 hours per week on vehicle admin",
    timeSaved: "80% automation of fleet admin",
    automations: [
      "MOT, tax, and insurance expiry tracking with automated renewal reminders",
      "Tachograph compliance monitoring and drivers' hours calculations",
      "Vehicle maintenance scheduling based on mileage, usage patterns, and fault codes",
      "Fuel card reconciliation and consumption anomaly detection"
    ],
    impact: "Compliant fleet, lower maintenance costs, zero missed deadlines"
  },
  {
    area: "Delivery Management",
    timeSpent: "15-25 hours per week on delivery coordination",
    timeSaved: "75% reduction in coordination time",
    automations: [
      "Automated customer notifications — despatch, ETA, delivered, proof of delivery",
      "Failed delivery management with instant rebooking options",
      "Real-time tracking dashboards for customers, depots, and management",
      "Exception handling — delays, partial deliveries, returns — triaged automatically"
    ],
    impact: "Customers always know where their delivery is"
  },
  {
    area: "Warehouse & Dispatch",
    timeSpent: "Constant: picking, packing, dispatching errors",
    timeSaved: "85% error reduction in dispatch",
    automations: [
      "Pick list optimisation based on warehouse layout and order priority",
      "Automated dispatch scheduling aligned with carrier collection windows",
      "Stock level monitoring with automatic reorder triggers",
      "Quality checks — weight, dimensions, labelling — validated before dispatch"
    ],
    impact: "Right item, right address, right time — every time"
  }
];

const useCases = [
  {
    useCase: "Last-Mile Delivery Optimisation",
    problem: "A courier company running 50 vans across Greater Manchester spends 3 hours every morning planning routes. Drivers take suboptimal routes, fuel costs are climbing, and customers complain about wide delivery windows ('between 8am and 6pm')",
    solution: "A Route Agent optimises all 50 routes simultaneously, considering traffic patterns, delivery windows, package sizes, and driver hours. A Customer Agent sends precise 1-hour delivery windows the evening before and real-time tracking on the day. A Dispatch Agent sequences parcels for efficient loading",
    implementation: "Integrate with your transport management system and telematics. The route agent runs overnight using next-day orders, with real-time adjustments throughout the day as conditions change",
    benefits: ["Route planning from 3 hours to 10 minutes", "Fuel costs reduced 20%", "Delivery windows narrowed from 10 hours to 1 hour", "Customer complaints down 60%"]
  },
  {
    useCase: "Fleet Compliance Autopilot",
    problem: "A haulage company with 80 vehicles struggles to keep on top of MOTs, O-licence obligations, tachograph downloads, and drivers' hours. One DVSA audit found multiple compliance gaps — risking the operator's licence",
    solution: "A Compliance Agent maintains a real-time register of every vehicle's MOT, tax, insurance, safety inspection, and tachograph status. It triggers actions 30 days before each deadline. A Drivers' Hours Agent monitors driving time in real time and alerts dispatchers before any breach occurs",
    implementation: "Connect to DVLA, tachograph data feeds, and your fleet management system. The agent builds a master compliance calendar and begins automated monitoring immediately",
    benefits: ["Zero compliance lapses across entire fleet", "O-licence risk eliminated", "DVSA audit-ready at all times", "Drivers' hours breaches reduced to zero"]
  },
  {
    useCase: "Demand-Responsive Distribution",
    problem: "A food distribution company runs the same routes daily regardless of actual demand. Some vans go out half-empty, others are overloaded. Last-minute orders are handled with expensive ad-hoc deliveries",
    solution: "A Demand Agent analyses order patterns and predicts next-day volumes by area. A Planning Agent adjusts routes daily based on actual demand, consolidating drops where possible. A Capacity Agent matches vehicles to loads, downsizing where demand is light and adding capacity where needed",
    implementation: "Feed order data, historical patterns, and vehicle availability into the system. The agents plan each day's operations overnight, with real-time adjustments for same-day orders and cancellations",
    benefits: ["Vehicle utilisation up from 65% to 90%", "Ad-hoc delivery costs eliminated", "15% fewer vehicle-miles with same delivery volume", "Carbon footprint reduced measurably"]
  }
];

const roiExample = {
  practiceSize: "Regional courier company, 50 vehicles, £4m revenue, operating across Northern Ireland and Republic of Ireland",
  currentCosts: "3 dispatch staff (£78,000/year), fuel costs (£520,000/year), 15% failed first deliveries costing £60,000/year in redelivery, compliance staff (£35,000/year), vehicle downtime costing £40,000/year in lost revenue",
  aiImplementation: "AI agents for route planning, fleet compliance, customer notifications, and dispatch optimisation",
  savings: "Dispatch reduced to 1 staff (£52,000/year saved), fuel reduced 20% (£104,000/year), failed deliveries halved (£30,000/year), compliance automated (£35,000/year), predictive maintenance reducing downtime (£25,000/year)",
  totalSaving: "£246,000/year",
  roi: "3,000% ROI within first year"
};

const faqs = [
  {
    question: "Does route optimisation really save that much fuel?",
    answer: "Yes — 15-25% fuel savings is consistently achievable and well-documented. Manual route planning can't account for real-time traffic, optimal stop sequencing across dozens of drops, or dynamic load balancing. AI considers thousands of variables simultaneously and recalculates in seconds. For a fleet spending £500,000/year on fuel, that's £75,000-£125,000 in savings — usually the single biggest ROI line item."
  },
  {
    question: "How does AI handle same-day and urgent deliveries?",
    answer: "AI agents excel at real-time replanning. When an urgent order arrives, the agent evaluates which vehicle is closest, has capacity, and can accommodate the delivery within its existing route with minimal disruption. It recalculates the affected route in seconds, notifies the driver, and updates ETAs for other deliveries on that route. This turns same-day from a chaotic scramble into a managed process."
  },
  {
    question: "What about drivers' hours and tachograph compliance?",
    answer: "AI agents monitor driving time in real time against EU and UK drivers' hours regulations. They calculate remaining driving time, required breaks, and weekly rest requirements for each driver. The route planner factors these constraints into every route. If a driver is approaching a limit, the agent alerts the dispatcher and suggests solutions — reassigning remaining drops, scheduling a break, or adjusting the next day's plan. This prevents breaches before they happen."
  },
  {
    question: "Which transport management systems do AI agents work with?",
    answer: "AI agents integrate with major UK TMS platforms including Microlise, TranSend, Paragon, MaxOptra, Podfather, and Stream. They also connect to telematics systems (Trakm8, Webfleet, Samsara), e-commerce platforms (Shopify, WooCommerce), and warehouse management systems. The integration layer uses standard APIs and data formats, so if your system has an API, it can connect."
  },
  {
    question: "How does AI handle proof of delivery?",
    answer: "AI agents process proof of delivery (POD) data — photos, signatures, GPS coordinates, timestamps — and match it to orders automatically. Failed deliveries trigger immediate rebooking workflows. Disputed deliveries are flagged with all evidence compiled. For temperature-controlled goods, the agent verifies that cold chain data is within acceptable ranges throughout the journey. All data is stored for audit purposes."
  },
  {
    question: "Is AI suitable for small logistics operations?",
    answer: "If you're running 10+ vehicles, the ROI is clear and immediate — route optimisation alone pays for the system within months. For 5-10 vehicles, start with route planning and customer notifications — these deliver value at any scale. Under 5 vehicles, the benefit is more marginal but still positive if you're spending significant time on manual planning. The rule of thumb: if route planning takes more than 30 minutes per day, AI will save you time and money."
  }
];

export default function AIAgentsForLogisticsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient relative overflow-hidden min-h-[70vh] flex items-center grain">
        <div className="max-w-[1140px] mx-auto px-6 relative z-10 py-20">
          <div className="max-w-[720px]">
            <h1 className="font-heading text-4xl sm:text-5xl md:text-[3.2rem] font-extrabold text-white mb-6 leading-[1.05] tracking-tight">
              AI Agents for
              <br />
              <span className="text-orange">Logistics</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl max-w-[540px] mb-10 leading-relaxed">
              Route planning, fleet management, delivery tracking, and warehouse optimisation — all powered by AI agents that work around the clock.
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
              <div className="text-4xl font-bold text-orange mb-2">20%</div>
              <div className="text-muted">Average fuel cost reduction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange mb-2">90%</div>
              <div className="text-muted">Vehicle utilisation (up from 65%)</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange mb-2">60%</div>
              <div className="text-muted">Fewer customer complaints</div>
            </div>
          </div>
        </div>
      </section>

      {/* Automation Areas */}
      <section id="automations" className="bg-light py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Where Logistics Operations Save the Most
            </h2>
            <p className="text-muted text-lg max-w-[600px] mx-auto">
              Four key areas where AI agents deliver immediate impact for haulage, courier, and distribution businesses.
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

      {/* Why Logistics Needs AI */}
      <section className="bg-white py-28">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Why Logistics Needs AI Agents Now
            </h2>
          </div>
          <div className="max-w-[800px] mx-auto prose prose-lg text-muted">
            <p>
              Logistics margins are razor-thin. Fuel costs are volatile. Driver shortages are chronic. Customers expect Amazon-level tracking from every delivery. And regulators — DVSA, HMRC, clean air zones — keep adding compliance obligations.
            </p>
            <p>
              The logistics companies that survive aren&apos;t the biggest — they&apos;re the most efficient. Every empty mile driven, every missed delivery, every compliance lapse, and every hour spent on manual planning is money lost. AI agents eliminate all four.
            </p>
            <p>
              <a href="https://bluecanvas.ai" className="text-orange hover:underline">Blue Canvas</a> works with logistics businesses across the UK and Ireland to identify where AI delivers the biggest impact. From route optimisation to fleet compliance to customer communications, the goal is simple: move more goods with fewer miles, fewer errors, and less admin.
            </p>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="bg-surface py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Real Logistics AI Use Cases
            </h2>
          </div>

          <div className="space-y-12">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-card">
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
      <section className="bg-light py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Real ROI Example: Regional Courier Company
            </h2>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-card">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="font-heading font-bold text-xl text-dark mb-6">Before AI Automation:</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-red-500 pl-4">
                    <div className="font-semibold text-dark">Business:</div>
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
              AI for Logistics: FAQs
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
            Blue Canvas helps UK logistics businesses implement AI automation from his base in Derry, Northern Ireland. 
            Through <a href="https://bluecanvas.ai" className="text-orange hover:underline">Blue Canvas</a>, Phil designs 
            agent systems that optimise routes, manage fleet compliance, and automate delivery operations for haulage, courier, and distribution companies.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-navy text-white py-24 relative overflow-hidden grain">
        <div className="max-w-[1140px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Optimise Your
                <br />
                <span className="text-orange">Logistics Operations</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Free consultation to analyse your logistics operations and identify where AI agents can cut costs, improve service, and ensure compliance.
              </p>
              <div className="space-y-3 text-white/60">
                <div className="flex items-center gap-3">
                  <span className="text-orange">✓</span>
                  Operations analysis and cost mapping
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-orange">✓</span>
                  Route optimisation assessment
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-orange">✓</span>
                  Implementation roadmap and ROI projection
                </div>
              </div>
            </div>
            <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8">
              <h3 className="font-heading font-bold text-xl text-white mb-1">Logistics AI Consultation</h3>
              <p className="text-white/60 text-sm mb-6">Get a custom automation plan for your logistics operation</p>
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
            <a href="/guides/ai-agents-for-ecommerce" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">AI Agents for E-commerce</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/ai-agents-roi-guide" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">AI Agent ROI Guide</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/multi-agent-systems-explained" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">Multi-Agent Systems Explained</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/ai-agent-security-guide" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">AI Agent Security Guide</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
