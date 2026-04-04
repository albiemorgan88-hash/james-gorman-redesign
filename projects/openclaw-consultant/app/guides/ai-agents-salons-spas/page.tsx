import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "AI Agents for Salons & Spas UK",
  description: "How AI agents can automate appointment scheduling, client communications, inventory management, and service recommendations for UK hair salons and spas. Increase bookings and client retention.",
  keywords: [
    "ai agents hair salons",
    "salon automation uk",
    "spa booking automation",
    "beauty salon ai",
    "hair salon management ai",
    "spa ai assistant",
    "salon appointment automation",
    "beauty business ai uk"
  ],
  alternates: { canonical: "https://openclawconsultant.co.uk/guides/ai-agents-salons-spas" },
  openGraph: {
    title: "AI Agents for Salons & Spas UK",
    description: "How AI agents can automate appointment scheduling, client communications, inventory management, and service recommendations for UK hair salons and spas.",
    url: "https://openclawconsultant.co.uk/guides/ai-agents-salons-spas",
    type: "article",
  },
};

const automationAreas = [
  {
    area: "Appointment Management",
    timeSpent: "20-25 hours per week",
    timeSaved: "90% automation possible",
    automations: [
      "24/7 online booking with real-time availability",
      "Automatic appointment confirmations and reminders", 
      "Stylist matching based on services and preferences",
      "Cancellation management and slot reallocation"
    ],
    impact: "Maximise bookings and eliminate double-bookings"
  },
  {
    area: "Client Communication",
    timeSpent: "15-20 hours per week",
    timeSaved: "85% reduction possible",
    automations: [
      "Personalized treatment recommendations",
      "Post-service follow-up and feedback collection",
      "Birthday and special occasion messaging",
      "Promotional campaigns and loyalty programs"
    ],
    impact: "Stronger client relationships and repeat bookings"
  },
  {
    area: "Inventory Management",
    timeSpent: "8-12 hours per week", 
    timeSaved: "80% time savings",
    automations: [
      "Product usage tracking and reorder alerts",
      "Supplier price comparison and procurement",
      "Retail recommendation engine",
      "Waste reduction and expiry monitoring"
    ],
    impact: "Never run out of products, optimize costs"
  },
  {
    area: "Treatment Planning",
    timeSpent: "10-15 hours per week",
    timeSaved: "75% automation possible", 
    automations: [
      "Skin and hair analysis with treatment suggestions",
      "Progress tracking and treatment adjustments",
      "Service upselling and cross-selling",
      "Seasonal treatment campaign management"
    ],
    impact: "Personalized service and increased revenue per client"
  }
];

const useCases = [
  {
    useCase: "Intelligent Booking Optimization",
    problem: "Phone bookings overwhelm staff, last-minute cancellations create gaps, and popular stylists get overbooked",
    solution: "AI manages all bookings across channels, optimizes schedules, predicts no-shows, and maximizes chair utilization",
    implementation: "Clients book online or via WhatsApp, AI handles confirmations, manages waitlists, and optimizes stylist schedules",
    benefits: ["Zero booking conflicts", "95% chair utilization", "Reduced no-shows", "24/7 availability"]
  },
  {
    useCase: "Personalized Client Experience", 
    problem: "Difficult to remember all client preferences, past treatments, and provide consistent personalized service",
    solution: "AI maintains detailed client profiles and provides stylists with personalized service recommendations",
    implementation: "Client history, preferences, and photos stored with AI-generated treatment suggestions displayed to stylists",
    benefits: ["Consistent personalized service", "Better client satisfaction", "Increased retention", "Upselling opportunities"]
  },
  {
    useCase: "Smart Retail Recommendations",
    problem: "Missed opportunities to sell retail products and difficulty matching products to client needs",
    solution: "AI analyzes client hair type, treatments, and purchase history to recommend relevant products",
    implementation: "Point-of-sale system suggests products based on services performed and client preferences",
    benefits: ["40% increase in retail sales", "Better product matching", "Automated recommendations", "Inventory optimization"]
  }
];

const roiExample = {
  practiceSize: "6-chair hair salon in Edinburgh",
  currentCosts: "Reception staff overtime (£18,000/year), missed bookings due to phone capacity (£22,000/year), poor inventory management (£8,000/year)",
  aiImplementation: "Complete salon AI automation across booking, client management and inventory",
  savings: "£12,000/year reduced reception costs, £18,000/year increased booking capture, £15,000/year from retail optimization",
  totalSaving: "£45,000/year",
  roi: "900% ROI within first year"
};

const faqs = [
  {
    question: "How do clients respond to AI handling their beauty salon bookings?",
    answer: "Studies show 92% of beauty clients prefer instant booking confirmation over waiting on hold. Our AI provides immediate responses, remembers their preferred stylists and treatments, and can handle complex requests like 'book me with Sarah for highlights and a cut next Friday afternoon.' Clients appreciate the convenience and accuracy."
  },
  {
    question: "Can AI really provide personalized beauty treatment recommendations?",
    answer: "Yes, AI excels at analyzing client data including hair type, skin condition, past treatments, and purchase history to suggest appropriate services and products. It can identify patterns human stylists might miss and ensure consistent personalized service across all staff members."
  },
  {
    question: "How does salon AI integrate with existing booking and POS systems?",
    answer: "Our AI integrates with major salon software including Fresha, Treatwell, Phorest, Shedul, and others. It can also work with traditional appointment books and retail systems. The AI enhances your existing setup without requiring a complete system replacement."
  },
  {
    question: "What about maintaining the personal touch that beauty clients expect?",
    answer: "AI handles the administrative tasks that take stylists away from client interaction. This actually increases personal attention by ensuring stylists have complete client information, treatment history, and personalized recommendations ready, allowing them to focus entirely on the creative and interpersonal aspects of their work."
  },
  {
    question: "How quickly can salon AI be implemented?",
    answer: "Basic booking automation can be live within 1-2 weeks. Client communication and retail recommendation systems typically take 3-4 weeks to integrate. Full automation including inventory management and treatment planning usually completes within 6-8 weeks with proper staff training."
  }
];

export default function AIAgentsSalonsSpaPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient relative overflow-hidden min-h-[70vh] flex items-center grain">
        <div className="max-w-[1140px] mx-auto px-6 relative z-10 py-20">
          <div className="max-w-[720px]">
            <h1 className="font-heading text-4xl sm:text-5xl md:text-[3.2rem] font-extrabold text-white mb-6 leading-[1.05] tracking-tight">
              AI Agents for
              <br />
              <span className="text-orange">Hair Salons & Spas</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl max-w-[540px] mb-10 leading-relaxed">
              Automate appointment booking, client communications, inventory management, and personalized service recommendations. Increase bookings while delivering exceptional experiences.
            </p>
            <a
              href="#automations"
              className="inline-flex items-center justify-center bg-orange text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-orange-hover transition-all hover:-translate-y-0.5 shadow-glow-orange"
            >
              See Beauty Automations
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
              <div className="text-4xl font-bold text-orange mb-2">40%</div>
              <div className="text-muted">Increase in retail product sales</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange mb-2">95%</div>
              <div className="text-muted">Chair utilization optimization</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange mb-2">90%</div>
              <div className="text-muted">Reduction in booking admin time</div>
            </div>
          </div>
        </div>
      </section>

      {/* Automation Areas */}
      <section id="automations" className="bg-light py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Where Beauty Businesses Save the Most Time
            </h2>
            <p className="text-muted text-lg max-w-[600px] mx-auto">
              Four key areas where AI automation delivers immediate productivity gains for hair salons and spas.
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
              Real Beauty Business AI Use Cases
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
              Real ROI Example: Edinburgh Hair Salon
            </h2>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-card">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="font-heading font-bold text-xl text-dark mb-6">Before AI Automation:</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-red-500 pl-4">
                    <div className="font-semibold text-dark">Salon Size:</div>
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
              Beauty Business AI Automation FAQs
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
            Blue Canvas helps UK hair salons and spas implement AI automation from his base in Derry, Northern Ireland. 
            With extensive experience in beauty industry technology and customer experience systems, Phil understands the unique 
            challenges facing beauty businesses and designs automation solutions that enhance client satisfaction while improving operational efficiency.
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
                <span className="text-orange">Beauty Business</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Free consultation to assess your current salon operations and identify where AI automation can 
                increase bookings by 30% while reducing admin time by 90%.
              </p>
              <div className="space-y-3 text-white/60">
                <div className="flex items-center gap-3">
                  <span className="text-orange">✓</span>
                  No obligation salon assessment
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
              <h3 className="font-heading font-bold text-xl text-white mb-1">Beauty Business AI Consultation</h3>
              <p className="text-white/60 text-sm mb-6">Get a custom automation plan for your salon or spa</p>
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