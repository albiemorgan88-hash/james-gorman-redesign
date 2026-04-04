import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "AI Agents for Restaurants & Hospitality",
  description: "How AI agents can automate table bookings, order management, staff scheduling, and customer communications for UK restaurants. Increase covers and reduce operational costs.",
  keywords: [
    "ai agents restaurants",
    "restaurant automation uk",
    "ai restaurant management",
    "automated table booking",
    "restaurant ai assistant",
    "ai for hospitality",
    "restaurant service automation",
    "hospitality ai software uk"
  ],
  alternates: { canonical: "https://openclawconsultant.co.uk/guides/ai-agents-restaurants" },
  openGraph: {
    title: "AI Agents for Restaurants & Hospitality",
    description: "How AI agents can automate table bookings, order management, staff scheduling, and customer communications for UK restaurants.",
    url: "https://openclawconsultant.co.uk/guides/ai-agents-restaurants",
    type: "article",
  },
};

const automationAreas = [
  {
    area: "Table Booking Management",
    timeSpent: "15-20 hours per week",
    timeSaved: "85% automation possible",
    automations: [
      "24/7 automated reservation system",
      "Table optimization and wait list management", 
      "Customer preference tracking and seating",
      "No-show prediction and overbooking strategies"
    ],
    impact: "Maximise covers and reduce empty tables"
  },
  {
    area: "Order Processing",
    timeSpent: "25-30 hours per week",
    timeSaved: "70% reduction possible",
    automations: [
      "Voice-to-kitchen order automation",
      "Delivery platform integration and management",
      "Inventory tracking and menu adjustments",
      "Order accuracy monitoring and quality control"
    ],
    impact: "Faster service and fewer order errors"
  },
  {
    area: "Customer Communication",
    timeSpent: "10-15 hours per week", 
    timeSaved: "80% time savings",
    automations: [
      "Booking confirmations and reminders",
      "Wait time updates and queue management",
      "Feedback collection and response management",
      "Special offers and loyalty program communications"
    ],
    impact: "Better customer experience and retention"
  },
  {
    area: "Staff Scheduling",
    timeSpent: "8-12 hours per week",
    timeSaved: "90% automation possible", 
    automations: [
      "Demand-based staff scheduling optimization",
      "Shift swapping and cover management",
      "Skills matching for optimal service",
      "Labour cost optimization and compliance"
    ],
    impact: "Right staff levels at optimal cost"
  }
];

const useCases = [
  {
    useCase: "Smart Reservation Management",
    problem: "Phone bookings overwhelm staff during peak times and tables go unfilled during quiet periods",
    solution: "AI manages all bookings across phone, online and walk-ins, optimizes table allocation and predicts no-shows",
    implementation: "Customers book via website, phone calls are handled by AI voice agent, system optimizes table turnover automatically",
    benefits: ["Zero missed bookings", "15% more covers", "Reduced no-shows", "Staff focus on service"]
  },
  {
    useCase: "Automated Order Management", 
    problem: "Order errors, delivery delays, and kitchen coordination issues hurt customer satisfaction",
    solution: "AI processes all orders from multiple channels, coordinates kitchen timing, and manages delivery logistics",
    implementation: "Voice orders converted to kitchen displays, delivery platforms auto-managed, inventory updated in real-time",
    benefits: ["95% order accuracy", "Faster kitchen times", "Unified order management", "Real-time inventory"]
  },
  {
    useCase: "Intelligent Customer Service",
    problem: "Handling customer inquiries, complaints, and special requests takes staff away from tables",
    solution: "AI chatbot handles 80% of customer communications with escalation to staff when needed",
    implementation: "WhatsApp, website chat, and review responses automated with personalized, brand-appropriate messaging",
    benefits: ["24/7 customer support", "Faster response times", "Consistent messaging", "Staff efficiency"]
  }
];

const roiExample = {
  practiceSize: "40-cover restaurant in Leeds city center",
  currentCosts: "Front of house staff overtime (£25,000/year), lost bookings due to phone capacity (£30,000/year), order errors and refunds (£8,000/year)",
  aiImplementation: "Complete restaurant AI automation across booking, ordering and customer service",
  savings: "£18,000/year reduced staff overtime, £25,000/year increased booking capture, £6,000/year fewer order errors",
  totalSaving: "£49,000/year",
  roi: "980% ROI within first year"
};

const faqs = [
  {
    question: "How do customers react to AI handling their restaurant bookings?",
    answer: "Studies show 85% of customers prefer immediate booking confirmation over waiting on hold. Our AI provides instant responses, remembers customer preferences, and can handle complex requests. Customers can always request human assistance if needed, but most prefer the speed and accuracy of AI booking."
  },
  {
    question: "Can AI really handle the complexity of restaurant operations?",
    answer: "Yes, AI excels at managing multiple complex variables simultaneously. It can coordinate bookings with kitchen capacity, staff levels, special dietary requirements, and seasonal demand patterns. The more complex your operation, the more benefit AI coordination provides."
  },
  {
    question: "How does restaurant AI integrate with existing POS and booking systems?",
    answer: "Our AI integrates with major restaurant systems including OpenTable, Resy, Square, Toast, and others. It can also work with independent booking systems and custom setups. The AI acts as an intelligent layer that enhances rather than replaces your existing technology."
  },
  {
    question: "What about maintaining the personal touch that restaurants are known for?",
    answer: "AI handles the administrative tasks that take staff away from customer interaction. This actually increases the personal touch by freeing up servers and hosts to focus on table service, customer relationships, and creating memorable experiences rather than managing phones and paperwork."
  },
  {
    question: "How quickly can restaurant AI be implemented?",
    answer: "Basic booking automation can be live within 2 weeks. Order management integration typically takes 4-6 weeks depending on your POS system. Full automation including staff scheduling and customer communications usually completes within 8-10 weeks with proper training."
  }
];

export default function AIAgentsRestaurantsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient relative overflow-hidden min-h-[70vh] flex items-center grain">
        <div className="max-w-[1140px] mx-auto px-6 relative z-10 py-20">
          <div className="max-w-[720px]">
            <h1 className="font-heading text-4xl sm:text-5xl md:text-[3.2rem] font-extrabold text-white mb-6 leading-[1.05] tracking-tight">
              AI Agents for
              <br />
              <span className="text-orange">Restaurants</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl max-w-[540px] mb-10 leading-relaxed">
              Automate table bookings, order processing, customer communications, and staff scheduling. Increase covers while delivering exceptional service.
            </p>
            <a
              href="#automations"
              className="inline-flex items-center justify-center bg-orange text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-orange-hover transition-all hover:-translate-y-0.5 shadow-glow-orange"
            >
              See Restaurant Automations
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
              <div className="text-4xl font-bold text-orange mb-2">15%</div>
              <div className="text-muted">More covers through optimized booking</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange mb-2">85%</div>
              <div className="text-muted">Customer inquiries handled by AI</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange mb-2">30%</div>
              <div className="text-muted">Reduction in order processing time</div>
            </div>
          </div>
        </div>
      </section>

      {/* Automation Areas */}
      <section id="automations" className="bg-light py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Where Restaurants Save the Most Time
            </h2>
            <p className="text-muted text-lg max-w-[600px] mx-auto">
              Four key areas where AI automation delivers immediate productivity gains for restaurants and hospitality businesses.
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
              Real Restaurant AI Use Cases
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
              Real ROI Example: Leeds City Center Restaurant
            </h2>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-card">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="font-heading font-bold text-xl text-dark mb-6">Before AI Automation:</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-red-500 pl-4">
                    <div className="font-semibold text-dark">Restaurant Size:</div>
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
              Restaurant AI Automation FAQs
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
            Blue Canvas helps UK restaurants and hospitality businesses implement AI automation from his base in Derry, Northern Ireland. 
            With extensive experience in hospitality technology and customer service systems, Phil understands the unique challenges facing 
            restaurant operators and designs automation solutions that enhance customer experience while improving operational efficiency.
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
                <span className="text-orange">Restaurant</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Free consultation to assess your current restaurant operations and identify where AI automation can 
                increase covers by 15% while improving customer satisfaction.
              </p>
              <div className="space-y-3 text-white/60">
                <div className="flex items-center gap-3">
                  <span className="text-orange">✓</span>
                  No obligation operations assessment
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-orange">✓</span>
                  ROI calculation for your restaurant
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-orange">✓</span>
                  Custom implementation roadmap
                </div>
              </div>
            </div>
            <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8">
              <h3 className="font-heading font-bold text-xl text-white mb-1">Restaurant AI Consultation</h3>
              <p className="text-white/60 text-sm mb-6">Get a custom automation plan for your restaurant</p>
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