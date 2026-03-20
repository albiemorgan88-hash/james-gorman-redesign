import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "AI Agents for Property Management: Automate Lettings & Tenant Communication | UK Property AI",
  description: "How AI agents can automate property viewings, tenant screening, maintenance requests, and rent collection for UK letting agents and property managers. Increase portfolio efficiency.",
  keywords: [
    "ai agents property management",
    "letting agent automation uk",
    "property management ai",
    "rental property automation",
    "tenant screening ai",
    "property maintenance ai",
    "letting agent ai assistant",
    "property management software uk"
  ],
  alternates: { canonical: "https://openclawconsultant.co.uk/guides/ai-agents-property-management" },
  openGraph: {
    title: "AI Agents for Property Management: Automate Lettings & Tenant Communication | UK Property AI",
    description: "How AI agents can automate property viewings, tenant screening, maintenance requests, and rent collection for UK letting agents and property managers.",
    url: "https://openclawconsultant.co.uk/guides/ai-agents-property-management",
    type: "article",
  },
};

const automationAreas = [
  {
    area: "Tenant Screening",
    timeSpent: "20-30 hours per week",
    timeSaved: "85% automation possible",
    automations: [
      "Automated application processing and credit checks",
      "Employment verification and reference collection", 
      "Risk assessment and tenant scoring",
      "Document collection and compliance checking"
    ],
    impact: "Better tenants selected faster with less risk"
  },
  {
    area: "Property Viewings",
    timeSpent: "15-25 hours per week",
    timeSaved: "70% reduction possible",
    automations: [
      "Self-service viewing booking and confirmation",
      "Virtual tour scheduling and follow-up",
      "Viewing feedback collection and analysis",
      "Application processing from interested viewers"
    ],
    impact: "More viewings with less agent time required"
  },
  {
    area: "Maintenance Management",
    timeSpent: "12-20 hours per week", 
    timeSaved: "80% time savings",
    automations: [
      "Tenant maintenance request processing",
      "Contractor dispatch and scheduling",
      "Progress tracking and completion verification",
      "Landlord reporting and cost approval"
    ],
    impact: "Faster maintenance response and happier tenants"
  },
  {
    area: "Rent Collection",
    timeSpent: "8-15 hours per week",
    timeSaved: "90% automation possible", 
    automations: [
      "Automated rent reminders and payment processing",
      "Arrears escalation and payment plan management",
      "Late fee calculation and application",
      "Eviction process automation and documentation"
    ],
    impact: "Improved cash flow and reduced arrears"
  }
];

const useCases = [
  {
    useCase: "Intelligent Tenant Screening",
    problem: "Manual reference checks and credit assessments take weeks, delaying lets and losing good tenants",
    solution: "AI instantly processes applications, runs comprehensive background checks, and scores tenant suitability",
    implementation: "Prospective tenants submit applications online, AI automatically verifies information and provides risk scores",
    benefits: ["24-hour screening turnaround", "Better tenant selection", "Reduced void periods", "Lower default risk"]
  },
  {
    useCase: "Smart Maintenance Coordination", 
    problem: "Tenant maintenance requests create chaos with multiple contractors, unclear priorities, and poor communication",
    solution: "AI triages requests, automatically dispatches appropriate contractors, and manages the entire repair process",
    implementation: "Tenants report issues via app, AI assesses urgency, books contractors, and updates all parties automatically",
    benefits: ["Faster repair response", "Better contractor coordination", "Tenant satisfaction improvement", "Cost optimization"]
  },
  {
    useCase: "Automated Rent Collection",
    problem: "Chasing late rent payments manually is time-consuming and often ineffective",
    solution: "AI manages the entire rent collection process from reminders to payment plans to legal action",
    implementation: "Automated payment reminders escalate based on tenant behavior, with personalized payment plans when needed",
    benefits: ["95% on-time payments", "Reduced arrears", "Less admin time", "Consistent enforcement"]
  }
];

const roiExample = {
  practiceSize: "250-property portfolio managed by 4-person team in Manchester",
  currentCosts: "Staff overtime for viewings (£30,000/year), delayed lets due to slow screening (£45,000/year), maintenance coordination overhead (£25,000/year)",
  aiImplementation: "Complete property management AI automation across screening, viewings, and maintenance",
  savings: "£25,000/year reduced overtime, £35,000/year faster lettings, £20,000/year maintenance efficiency",
  totalSaving: "£80,000/year",
  roi: "1,600% ROI within first year"
};

const faqs = [
  {
    question: "How reliable is AI tenant screening compared to manual reference checks?",
    answer: "AI screening is more thorough and consistent than manual checks. It cross-references multiple databases, verifies employment directly with employers, and applies consistent criteria to every application. Studies show AI screening reduces tenant default rates by 40% compared to manual processes."
  },
  {
    question: "Can AI handle complex maintenance issues that require human judgment?",
    answer: "AI excels at routine maintenance coordination and can identify urgent issues requiring immediate attention. For complex problems, AI gathers all relevant information and escalates to human managers with complete context. This ensures critical issues get proper attention while routine tasks are automated."
  },
  {
    question: "How do tenants respond to AI handling their property queries?",
    answer: "Tenants prefer faster responses and 24/7 availability that AI provides. For routine queries like maintenance requests or rent payment issues, tenants appreciate immediate acknowledgment and status updates. Complex issues can always be escalated to human agents when needed."
  },
  {
    question: "Does property management AI integrate with existing letting agent software?",
    answer: "Yes, our AI integrates with major property management platforms including Rentman, Arthur Online, PropertyTek, and others. It can also work with custom CRM systems and spreadsheet-based processes. The AI enhances your existing workflow rather than replacing it."
  },
  {
    question: "How quickly can property management AI be implemented?",
    answer: "Basic tenant communication and maintenance request automation can be live within 2-3 weeks. Tenant screening integration typically takes 4-6 weeks to connect with credit agencies and reference systems. Full automation including rent collection usually completes within 8-10 weeks."
  }
];

export default function AIAgentsPropertyManagementPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient relative overflow-hidden min-h-[70vh] flex items-center grain">
        <div className="max-w-[1140px] mx-auto px-6 relative z-10 py-20">
          <div className="max-w-[720px]">
            <h1 className="font-heading text-4xl sm:text-5xl md:text-[3.2rem] font-extrabold text-white mb-6 leading-[1.05] tracking-tight">
              AI Agents for
              <br />
              <span className="text-orange">Property Management</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl max-w-[540px] mb-10 leading-relaxed">
              Automate tenant screening, property viewings, maintenance requests, and rent collection. Manage larger portfolios with better tenant satisfaction.
            </p>
            <a
              href="#automations"
              className="inline-flex items-center justify-center bg-orange text-white px-8 py-4 rounded-btn font-semibold text-base hover:bg-orange-hover transition-all hover:-translate-y-0.5 shadow-glow-orange"
            >
              See Property Automations
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
              <div className="text-muted">Reduction in tenant default rates</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange mb-2">95%</div>
              <div className="text-muted">On-time rent collection rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange mb-2">50%</div>
              <div className="text-muted">Faster property letting process</div>
            </div>
          </div>
        </div>
      </section>

      {/* Automation Areas */}
      <section id="automations" className="bg-light py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Where Property Managers Save the Most Time
            </h2>
            <p className="text-muted text-lg max-w-[600px] mx-auto">
              Four key areas where AI automation delivers immediate productivity gains for property management businesses.
            </p>
          </div>

          <div className="space-y-8">
            {automationAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-box p-8 shadow-card">
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
      <section className="bg-white py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Real Property Management AI Use Cases
            </h2>
          </div>

          <div className="space-y-12">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-surface rounded-box p-8">
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
              Real ROI Example: Manchester Property Management
            </h2>
          </div>

          <div className="bg-white rounded-box p-8 shadow-card">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="font-heading font-bold text-xl text-dark mb-6">Before AI Automation:</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-red-500 pl-4">
                    <div className="font-semibold text-dark">Portfolio Size:</div>
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
      <section className="bg-white py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Property Management AI Automation FAQs
            </h2>
          </div>

          <div className="max-w-[800px] mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-surface rounded-box p-6">
                <h3 className="font-heading font-bold text-lg text-dark mb-3">{faq.question}</h3>
                <p className="text-muted text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Phil Patterson */}
      <section className="bg-light py-16">
        <div className="max-w-[1140px] mx-auto px-6 text-center">
          <h3 className="font-heading font-bold text-xl text-dark mb-4">About Phil Patterson</h3>
          <p className="text-muted max-w-[600px] mx-auto text-sm">
            Phil Patterson helps UK letting agents and property managers implement AI automation from his base in Derry, Northern Ireland. 
            With extensive experience in property technology and rental management systems, Phil understands the unique challenges 
            facing property professionals and designs automation solutions that improve tenant satisfaction while scaling portfolio operations efficiently.
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
                <span className="text-orange">Property Business</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Free consultation to assess your current property management processes and identify where AI automation can 
                reduce tenant defaults by 40% while improving rent collection rates to 95%.
              </p>
              <div className="space-y-3 text-white/60">
                <div className="flex items-center gap-3">
                  <span className="text-orange">✓</span>
                  No obligation portfolio assessment
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
            <div className="bg-white/[0.03] border border-white/[0.06] rounded-box p-8">
              <h3 className="font-heading font-bold text-xl text-white mb-1">Property Management AI Consultation</h3>
              <p className="text-white/60 text-sm mb-6">Get a custom automation plan for your property portfolio</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}