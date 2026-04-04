import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "AI Agents for Dental Practices UK",
  description: "How AI agents can automate patient scheduling, treatment planning, insurance claims, and practice operations for UK dental practices. Increase patient capacity and reduce admin time.",
  keywords: [
    "ai agents dentists",
    "dental practice automation uk",
    "ai dental software",
    "dental ai assistant",
    "automated dental practice",
    "ai for dentists",
    "dental practice management ai",
    "dental automation uk"
  ],
  alternates: { canonical: "https://openclawconsultant.co.uk/guides/ai-agents-dentists" },
  openGraph: {
    title: "AI Agents for Dental Practices UK",
    description: "How AI agents can automate patient scheduling, treatment planning, insurance claims, and practice operations for UK dental practices.",
    url: "https://openclawconsultant.co.uk/guides/ai-agents-dentists",
    type: "article",
  },
};

const automationAreas = [
  {
    area: "Patient Scheduling",
    timeSpent: "15-20 hours per week",
    timeSaved: "80% automation possible",
    automations: [
      "Automated appointment booking and confirmations",
      "Patient recall and reminder systems", 
      "Emergency slot management",
      "Cancelled appointment rescheduling"
    ],
    impact: "Maximise chair time and reduce no-shows"
  },
  {
    area: "Treatment Documentation",
    timeSpent: "12-18 hours per week",
    timeSaved: "70% reduction possible",
    automations: [
      "Clinical notes generation from voice dictation",
      "Treatment plan creation and updates",
      "Progress note automation",
      "Chart completion and compliance checking"
    ],
    impact: "More time with patients, complete documentation"
  },
  {
    area: "Insurance & Claims",
    timeSpent: "8-12 hours per week", 
    timeSaved: "85% time savings",
    automations: [
      "Automated claim submission and tracking",
      "Pre-authorisation request processing",
      "Payment posting and reconciliation",
      "Rejection handling and resubmission"
    ],
    impact: "Faster payments and fewer claim errors"
  },
  {
    area: "Patient Communication",
    timeSpent: "10-15 hours per week",
    timeSaved: "75% automation possible", 
    automations: [
      "Post-treatment care instructions",
      "Medication reminders and warnings",
      "Follow-up appointment scheduling",
      "Treatment education and consent"
    ],
    impact: "Better patient outcomes and satisfaction"
  }
];

const useCases = [
  {
    useCase: "Smart Appointment Management",
    problem: "Phone calls, double bookings, missed appointments cost 20% of potential revenue",
    solution: "AI agent handles all booking, sends SMS reminders, manages cancellations and optimises chair utilisation",
    implementation: "Patients book online or via WhatsApp, AI confirms appointments and manages your diary automatically",
    benefits: ["95% booking accuracy", "50% fewer no-shows", "Maximised chair time", "24/7 availability"]
  },
  {
    useCase: "Clinical Documentation Assistant", 
    problem: "Spending 2+ hours daily on clinical notes instead of seeing patients",
    solution: "AI listens to patient interactions and generates complete clinical notes, treatment plans and chart entries",
    implementation: "Voice-to-text during consultations creates structured notes matching NHS and regulatory requirements",
    benefits: ["3x faster documentation", "Complete compliance", "More patient time", "Reduced errors"]
  },
  {
    useCase: "Insurance Claims Automation",
    problem: "Claims processing delays payments by weeks and requires constant follow-up",
    solution: "AI automatically submits claims, tracks status, handles rejections and ensures maximum reimbursement",
    implementation: "Treatment data auto-generates claims with appropriate codes and supporting documentation",
    benefits: ["Faster payments", "Higher approval rates", "Less admin work", "Better cash flow"]
  }
];

const roiExample = {
  practiceSize: "3-dentist practice in Manchester",
  currentCosts: "2 full-time admin staff (£50,000/year), missed appointments (£15,000/year), delayed claims (£8,000/year)",
  aiImplementation: "Comprehensive AI automation across scheduling, documentation and claims",
  savings: "£35,000/year in reduced admin costs, £12,000/year from fewer no-shows, £6,000/year faster claim processing",
  totalSaving: "£53,000/year",
  roi: "1,200% ROI within first year"
};

const faqs = [
  {
    question: "Is AI documentation compliant with NHS and dental regulations?",
    answer: "Yes, our AI systems are designed to meet all NHS documentation requirements and regulatory standards including GDPR, Care Quality Commission guidelines, and professional body requirements. All clinical notes include required elements and maintain full audit trails."
  },
  {
    question: "How does AI booking integrate with existing dental practice software?",
    answer: "AI booking agents connect to most major dental practice management systems including Software of Excellence, EXACT, and others via API integrations. This ensures your existing patient records and scheduling remain centralised while automating the booking process."
  },
  {
    question: "What about patient acceptance of AI in healthcare?",
    answer: "Studies show 78% of patients prefer online booking and automated reminders. Our AI communications are clearly identified and patients can always request human interaction. Most patients appreciate faster responses and convenient 24/7 availability."
  },
  {
    question: "How quickly can dental AI automation be implemented?",
    answer: "Basic automation like scheduling and reminders can be live within 2-3 weeks. Clinical documentation typically takes 4-6 weeks to fully train on your specific practices. Claims automation integration depends on your current software but usually completes within a month."
  },
  {
    question: "What's the learning curve for dentists and staff?",
    answer: "Most dental AI runs invisibly in the background. For clinical documentation, dentists need about a week to get comfortable with voice dictation workflows. Reception staff training on AI booking management typically takes just a few days."
  }
];

export default function AIAgentsDentistsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient relative overflow-hidden min-h-[70vh] flex items-center grain">
        <div className="max-w-[1140px] mx-auto px-6 relative z-10 py-20">
          <div className="max-w-[720px]">
            <h1 className="font-heading text-4xl sm:text-5xl md:text-[3.2rem] font-extrabold text-white mb-6 leading-[1.05] tracking-tight">
              AI Agents for
              <br />
              <span className="text-orange">Dental Practices</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl max-w-[540px] mb-10 leading-relaxed">
              Automate patient scheduling, clinical documentation, insurance claims, and practice management. See more patients while reducing administrative burden.
            </p>
            <a
              href="#automations"
              className="inline-flex items-center justify-center bg-orange text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-orange-hover transition-all hover:-translate-y-0.5 shadow-glow-orange"
            >
              See Dental Automations
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
              <div className="text-muted">More patients per day with AI scheduling</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange mb-2">70%</div>
              <div className="text-muted">Less time on clinical documentation</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange mb-2">£35k+</div>
              <div className="text-muted">Average annual savings per practice</div>
            </div>
          </div>
        </div>
      </section>

      {/* Automation Areas */}
      <section id="automations" className="bg-light py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Where Dental Practices Save the Most Time
            </h2>
            <p className="text-muted text-lg max-w-[600px] mx-auto">
              Four key areas where AI automation delivers immediate productivity gains for dental practices.
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
              Real Dental AI Use Cases
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
              Real ROI Example: Manchester Dental Practice
            </h2>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-card">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="font-heading font-bold text-xl text-dark mb-6">Before AI Automation:</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-red-500 pl-4">
                    <div className="font-semibold text-dark">Practice Size:</div>
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
              Dental AI Automation FAQs
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
            Blue Canvas helps UK dental practices implement AI automation from his base in Derry, Northern Ireland. 
            With extensive experience in healthcare AI systems, Phil understands the unique challenges facing dental practices 
            and designs automation solutions that improve patient care while reducing administrative burden.
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
                <span className="text-orange">Dental Practice</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Free consultation to assess your current dental workflows and identify where AI automation can save 20+ hours per week 
                while improving patient care and practice efficiency.
              </p>
              <div className="space-y-3 text-white/60">
                <div className="flex items-center gap-3">
                  <span className="text-orange">✓</span>
                  No obligation practice assessment
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-orange">✓</span>
                  ROI calculation specific to your practice
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-orange">✓</span>
                  Implementation roadmap and timeline
                </div>
              </div>
            </div>
            <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8">
              <h3 className="font-heading font-bold text-xl text-white mb-1">Dental Practice AI Consultation</h3>
              <p className="text-white/60 text-sm mb-6">Get a custom automation plan for your dental practice</p>
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