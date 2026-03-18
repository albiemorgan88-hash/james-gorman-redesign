import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "AI Agents for Accountants: Save Hours on Client Work | UK Accounting Automation",
  description: "How AI agents can automate bookkeeping, client communications, compliance checks, and report generation for UK accountants. Boost efficiency and client capacity.",
  keywords: [
    "ai agents accountants",
    "accounting automation uk",
    "ai bookkeeping tools",
    "accountant ai assistant",
    "accounting ai automation",
    "ai for accounting firms",
    "automated accounting uk",
    "ai accounting software"
  ],
  alternates: { canonical: "https://openclawconsultant.co.uk/guides/ai-agents-accountants" },
  openGraph: {
    title: "AI Agents for Accountants: Save Hours on Client Work | UK Accounting Automation",
    description: "How AI agents can automate bookkeeping, client communications, compliance checks, and report generation for UK accountants.",
    url: "https://openclawconsultant.co.uk/guides/ai-agents-accountants",
    type: "article",
  },
};

const automationAreas = [
  {
    area: "Transaction Processing",
    timeSpent: "15-20 hours per week",
    timeSaved: "80% automation possible",
    automations: [
      "Bank statement reconciliation",
      "Invoice and receipt processing", 
      "Expense categorization with OCR",
      "VAT calculation and coding"
    ],
    impact: "Focus on advisory work instead of data entry"
  },
  {
    area: "Client Communications",
    timeSpent: "10-15 hours per week",
    timeSaved: "70% reduction possible",
    automations: [
      "Automated year-end reminders",
      "Tax deadline notifications",
      "Document request workflows",
      "Progress updates and reporting"
    ],
    impact: "Better client service with proactive communication"
  },
  {
    area: "Compliance & Reporting",
    timeSpent: "8-12 hours per week", 
    timeSaved: "60% automation possible",
    automations: [
      "MTD VAT return preparation",
      "Corporation tax calculations",
      "Statutory filing deadlines",
      "Compliance checklist automation"
    ],
    impact: "Reduced compliance risk and deadline stress"
  },
  {
    area: "Practice Management",
    timeSpent: "5-10 hours per week",
    timeSaved: "75% automation possible", 
    automations: [
      "Time recording and billing",
      "Client onboarding workflows",
      "Document management",
      "Fee calculation and invoicing"
    ],
    impact: "More efficient practice operations"
  }
];

const useCases = [
  {
    useCase: "Automated Bank Reconciliation",
    problem: "Manual reconciliation takes hours and is prone to human error",
    solution: "AI agent automatically matches transactions, flags discrepancies, and suggests corrections",
    implementation: "Connect to bank feeds and accounting software. Agent processes transactions in real-time.",
    benefits: ["95% faster reconciliation", "Fewer errors", "Real-time cash position", "More time for analysis"]
  },
  {
    useCase: "Client Document Management",
    problem: "Chasing clients for documents and organizing submissions manually",
    solution: "Automated document requests with progress tracking and client portal integration",
    implementation: "Workflows trigger based on deadlines, automatically request missing documents, update client status",
    benefits: ["Earlier document submission", "Less chasing time", "Better organized files", "Improved client relationships"]
  },
  {
    useCase: "Expense Categorization",
    problem: "Manually categorizing hundreds of expenses for each client", 
    solution: "AI analyzes receipts and transaction descriptions to suggest appropriate categories",
    implementation: "OCR processing of receipts, machine learning from previous categorizations, approval workflows",
    benefits: ["80% faster categorization", "Consistent coding", "Learning from patterns", "Audit trail maintained"]
  }
];

export default function AIAgentsAccountantsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient relative overflow-hidden min-h-[70vh] flex items-center grain">
        <div className="max-w-[1140px] mx-auto px-6 relative z-10 py-20">
          <div className="max-w-[720px]">
            <h1 className="font-heading text-4xl sm:text-5xl md:text-[3.2rem] font-extrabold text-white mb-6 leading-[1.05] tracking-tight">
              AI Agents for
              <br />
              <span className="text-orange">Accountants</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl max-w-[540px] mb-10 leading-relaxed">
              Automate bookkeeping, client communications, compliance checks, and report generation. Take on more clients without working longer hours.
            </p>
            <a
              href="#automations"
              className="inline-flex items-center justify-center bg-orange text-white px-8 py-4 rounded-btn font-semibold text-base hover:bg-orange-hover transition-all hover:-translate-y-0.5 shadow-glow-orange"
            >
              See Accounting Automations
            </a>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#fafbfc] to-transparent" />
      </section>

      {/* Automation Areas */}
      <section id="automations" className="bg-light py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Where Accountants Save the Most Time
            </h2>
            <p className="text-muted text-lg max-w-[600px] mx-auto">
              Four key areas where AI automation delivers immediate productivity gains for accounting practices.
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
              Real Accounting AI Use Cases
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

      {/* Contact Section */}
      <section className="bg-navy text-white py-24 relative overflow-hidden grain">
        <div className="max-w-[1140px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Transform Your
                <br />
                <span className="text-orange">Accounting Practice</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Free consultation to assess your current workflows and identify where AI automation can save 20+ hours per week.
              </p>
            </div>
            <div className="bg-white/[0.03] border border-white/[0.06] rounded-box p-8">
              <h3 className="font-heading font-bold text-xl text-white mb-1">Accounting Automation Consultation</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}