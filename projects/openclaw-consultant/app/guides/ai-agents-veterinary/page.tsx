import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "AI Agents for Veterinary Practices",
  description: "How AI agents can automate appointment scheduling, patient records, prescription management, and client communications for UK veterinary practices. Improve animal care while reducing admin burden.",
  keywords: [
    "ai agents veterinary",
    "vet practice automation uk",
    "veterinary ai software",
    "vet appointment booking ai",
    "animal hospital automation",
    "veterinary practice ai",
    "vet clinic management ai",
    "veterinary ai assistant uk"
  ],
  alternates: { canonical: "https://openclawconsultant.co.uk/guides/ai-agents-veterinary" },
  openGraph: {
    title: "AI Agents for Veterinary Practices",
    description: "How AI agents can automate appointment scheduling, patient records, prescription management, and client communications for UK veterinary practices.",
    url: "https://openclawconsultant.co.uk/guides/ai-agents-veterinary",
    type: "article",
  },
};

const automationAreas = [
  {
    area: "Appointment Management",
    timeSpent: "20-30 hours per week",
    timeSaved: "85% automation possible",
    automations: [
      "24/7 appointment booking with urgency assessment",
      "Emergency slot management and triage", 
      "Vaccination and check-up reminder scheduling",
      "Multi-pet household coordination and planning"
    ],
    impact: "Optimal appointment utilization and better patient care"
  },
  {
    area: "Clinical Documentation",
    timeSpent: "15-25 hours per week",
    timeSaved: "70% reduction possible",
    automations: [
      "Voice-to-text clinical notes during consultations",
      "Treatment plan generation and follow-up scheduling",
      "Prescription automation and drug interaction checking",
      "Progress tracking and outcome monitoring"
    ],
    impact: "Complete records and more time with animals"
  },
  {
    area: "Client Communication",
    timeSpent: "12-18 hours per week", 
    timeSaved: "80% time savings",
    automations: [
      "Post-treatment care instructions and reminders",
      "Vaccination schedule management and alerts",
      "Test result notifications and explanations",
      "Emergency after-hours triage and guidance"
    ],
    impact: "Better pet care compliance and client satisfaction"
  },
  {
    area: "Practice Management",
    timeSpent: "10-15 hours per week",
    timeSaved: "75% automation possible", 
    automations: [
      "Inventory management for medicines and supplies",
      "Insurance claim processing and validation",
      "Pricing optimization and estimate generation",
      "Staff scheduling based on appointment types"
    ],
    impact: "Efficient operations and improved profitability"
  }
];

const useCases = [
  {
    useCase: "Intelligent Appointment Triage",
    problem: "Emergency cases mixed with routine appointments, leading to delayed care and scheduling chaos",
    solution: "AI assesses symptoms and urgency, automatically prioritizes emergencies and books appropriate appointment types",
    implementation: "Pet owners describe symptoms online or by phone, AI evaluates urgency and schedules appropriate consultation type",
    benefits: ["Better emergency response", "Optimal appointment types", "Reduced waiting times", "Improved patient outcomes"]
  },
  {
    useCase: "Automated Clinical Documentation", 
    problem: "Vets spend hours on paperwork instead of treating animals, leading to incomplete records",
    solution: "AI transcribes consultations in real-time and generates structured clinical notes and treatment plans",
    implementation: "Voice recording during consultations creates complete, structured notes with treatment recommendations",
    benefits: ["80% faster documentation", "Complete clinical records", "More time with patients", "Better care continuity"]
  },
  {
    useCase: "Smart Medication Management",
    problem: "Prescription errors, drug interactions, and complex dosing calculations risk patient safety",
    solution: "AI calculates accurate dosing, checks for interactions, and automates prescription generation",
    implementation: "Patient weight and condition data automatically generates safe, accurate prescriptions with dosing schedules",
    benefits: ["Zero dosing errors", "Drug interaction alerts", "Automated prescriptions", "Improved patient safety"]
  }
];

const roiExample = {
  practiceSize: "3-vet practice in Glasgow with 2,000 active patients",
  currentCosts: "Administrative staff overtime (£35,000/year), missed preventive care reminders (£25,000/year), prescription errors and liability (£15,000/year)",
  aiImplementation: "Comprehensive veterinary AI automation across appointments, documentation and medication management",
  savings: "£28,000/year reduced admin costs, £20,000/year improved preventive care, £12,000/year from medication efficiency",
  totalSaving: "£60,000/year",
  roi: "1,000% ROI within first year"
};

const faqs = [
  {
    question: "How accurate is AI triage for veterinary emergencies?",
    answer: "AI triage systems achieve 95%+ accuracy by analyzing symptoms, vital signs, and behavioral changes against vast databases of veterinary cases. The AI doesn't replace veterinary judgment but ensures emergencies are identified quickly and appropriate appointment types are scheduled. Vets always make final treatment decisions."
  },
  {
    question: "Can AI really handle the complexity of veterinary medicine?",
    answer: "AI excels at pattern recognition, drug calculations, and protocol adherence - areas where human error is common. It can quickly identify potential drug interactions, calculate precise dosing for any animal weight, and ensure all necessary follow-up care is scheduled. The complexity actually makes AI more valuable, not less."
  },
  {
    question: "How do pet owners react to AI handling their veterinary appointments?",
    answer: "Pet owners appreciate faster response times, especially in emergencies. AI can provide immediate guidance for urgent situations and ensure their pet gets the right level of care quickly. For routine appointments, owners prefer the convenience of 24/7 booking with instant confirmation."
  },
  {
    question: "Does veterinary AI integrate with existing practice management systems?",
    answer: "Yes, our AI integrates with major veterinary software including AVImark, eVetPractice, Cornerstone, and others. It enhances your existing records, scheduling, and billing systems rather than replacing them. The AI acts as an intelligent layer that makes everything work better together."
  },
  {
    question: "How quickly can veterinary AI be implemented?",
    answer: "Basic appointment booking and triage can be live within 2-3 weeks. Clinical documentation systems typically take 4-6 weeks to train on your specific protocols. Full practice automation including medication management usually completes within 8-10 weeks with proper veterinary team training."
  }
];

export default function AIAgentsVeterinaryPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient relative overflow-hidden min-h-[70vh] flex items-center grain">
        <div className="max-w-[1140px] mx-auto px-6 relative z-10 py-20">
          <div className="max-w-[720px]">
            <h1 className="font-heading text-4xl sm:text-5xl md:text-[3.2rem] font-extrabold text-white mb-6 leading-[1.05] tracking-tight">
              AI Agents for
              <br />
              <span className="text-orange">Veterinary Practices</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl max-w-[540px] mb-10 leading-relaxed">
              Automate appointment scheduling, clinical documentation, prescription management, and client communications. Provide better animal care while reducing administrative burden.
            </p>
            <a
              href="#automations"
              className="inline-flex items-center justify-center bg-orange text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-orange-hover transition-all hover:-translate-y-0.5 shadow-glow-orange"
            >
              See Veterinary Automations
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
              <div className="text-4xl font-bold text-orange mb-2">80%</div>
              <div className="text-muted">Faster clinical documentation</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange mb-2">95%</div>
              <div className="text-muted">Accuracy in emergency triage</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange mb-2">30%</div>
              <div className="text-muted">More appointments per day</div>
            </div>
          </div>
        </div>
      </section>

      {/* Automation Areas */}
      <section id="automations" className="bg-light py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Where Veterinary Practices Save the Most Time
            </h2>
            <p className="text-muted text-lg max-w-[600px] mx-auto">
              Four key areas where AI automation delivers immediate productivity gains for veterinary practices.
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
              Real Veterinary AI Use Cases
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
              Real ROI Example: Glasgow Veterinary Practice
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
              Veterinary AI Automation FAQs
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
            Blue Canvas helps UK veterinary practices implement AI automation from his base in Derry, Northern Ireland. 
            With extensive experience in healthcare technology and veterinary practice management systems, Phil understands 
            the unique challenges facing veterinary practices and designs automation solutions that improve animal care while reducing administrative burden.
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
                <span className="text-orange">Veterinary Practice</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Free consultation to assess your current veterinary workflows and identify where AI automation can 
                improve patient care while reducing documentation time by 80%.
              </p>
              <div className="space-y-3 text-white/60">
                <div className="flex items-center gap-3">
                  <span className="text-orange">✓</span>
                  No obligation practice assessment
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-orange">✓</span>
                  ROI calculation for your practice
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-orange">✓</span>
                  Custom implementation roadmap
                </div>
              </div>
            </div>
            <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8">
              <h3 className="font-heading font-bold text-xl text-white mb-1">Veterinary AI Consultation</h3>
              <p className="text-white/60 text-sm mb-6">Get a custom automation plan for your veterinary practice</p>
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