import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "AI Agents for Solicitors & Law Firms",
  description: "How AI agents can automate legal document processing, client communications, case management, and research for UK solicitors. Increase billable hours and client capacity.",
  keywords: [
    "ai agents solicitors",
    "legal automation uk",
    "ai document processing legal",
    "solicitor ai assistant",
    "legal ai automation",
    "ai for law firms",
    "automated legal work",
    "ai legal software uk"
  ],
  alternates: { canonical: "https://openclawconsultant.co.uk/guides/ai-agents-solicitors" },
  openGraph: {
    title: "AI Agents for Solicitors & Law Firms",
    description: "How AI agents can automate legal document processing, client communications, case management, and research for UK solicitors.",
    url: "https://openclawconsultant.co.uk/guides/ai-agents-solicitors",
    type: "article",
  },
};

const automationAreas = [
  {
    area: "Document Processing",
    timeSpent: "20-25 hours per week",
    timeSaved: "70% automation possible",
    automations: [
      "Contract review and analysis",
      "Legal document drafting from templates", 
      "Due diligence document organization",
      "Compliance checking and flagging"
    ],
    impact: "Focus on legal strategy instead of document admin"
  },
  {
    area: "Client Communications",
    timeSpent: "10-15 hours per week",
    timeSaved: "60% reduction possible",
    automations: [
      "Case progress updates",
      "Appointment scheduling and confirmations",
      "Document request workflows",
      "Deadline reminders and notifications"
    ],
    impact: "Better client service with proactive updates"
  },
  {
    area: "Legal Research",
    timeSpent: "8-12 hours per week", 
    timeSaved: "50% time savings",
    automations: [
      "Case law research and summarization",
      "Statute and regulation monitoring",
      "Precedent analysis",
      "Legal update alerts"
    ],
    impact: "More comprehensive research in less time"
  },
  {
    area: "Practice Management",
    timeSpent: "5-8 hours per week",
    timeSaved: "80% automation possible", 
    automations: [
      "Time recording and billing",
      "Matter management tracking",
      "Conflict checking automation",
      "Regulatory compliance monitoring"
    ],
    impact: "Efficient practice operations and compliance"
  }
];

const useCases = [
  {
    useCase: "Contract Review Automation",
    problem: "Manual contract review takes hours and may miss important clauses",
    solution: "AI agent reviews contracts against standard clauses and flags unusual or risky terms",
    implementation: "Upload contracts for automatic analysis, flagging, and summary generation",
    benefits: ["75% faster initial review", "Consistent analysis", "Risk identification", "Audit trail"]
  },
  {
    useCase: "Legal Research Assistant", 
    problem: "Time-consuming case law research across multiple databases",
    solution: "AI searches multiple sources, summarizes relevant cases, and identifies key precedents",
    implementation: "Natural language research queries return summarized, categorized results",
    benefits: ["Faster comprehensive research", "Better case coverage", "Automated summaries", "Source tracking"]
  },
  {
    useCase: "Client Matter Updates",
    problem: "Manually updating clients on case progress and next steps",
    solution: "Automated progress tracking with milestone-based client communications",
    implementation: "Matter milestones trigger appropriate client updates and next step explanations",
    benefits: ["Proactive client communication", "Reduced admin time", "Better client satisfaction", "Compliance documentation"]
  }
];

export default function AIAgentsSolicitorsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient relative overflow-hidden min-h-[70vh] flex items-center grain">
        <div className="max-w-[1140px] mx-auto px-6 relative z-10 py-20">
          <div className="max-w-[720px]">
            <h1 className="font-heading text-4xl sm:text-5xl md:text-[3.2rem] font-extrabold text-white mb-6 leading-[1.05] tracking-tight">
              AI Agents for
              <br />
              <span className="text-orange">Solicitors</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl max-w-[540px] mb-10 leading-relaxed">
              Automate document processing, legal research, client communications, and case management. Increase billable hours and take on more clients.
            </p>
            <a
              href="#automations"
              className="inline-flex items-center justify-center bg-orange text-white px-8 py-4 rounded-btn font-semibold text-base hover:bg-orange-hover transition-all hover:-translate-y-0.5 shadow-glow-orange"
            >
              See Legal Automations
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
              Where Legal Professionals Save the Most Time
            </h2>
            <p className="text-muted text-lg max-w-[600px] mx-auto">
              Four key areas where AI automation delivers immediate productivity gains for legal practices.
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
              Real Legal AI Use Cases
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
                <span className="text-orange">Legal Practice</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Free consultation to assess your current legal workflows and identify where AI automation can save 15+ hours per week.
              </p>
            </div>
            <div className="bg-white/[0.03] border border-white/[0.06] rounded-box p-8">
              <h3 className="font-heading font-bold text-xl text-white mb-1">Legal Automation Consultation</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Related Guides */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-[1140px] mx-auto px-6">
          <h2 className="font-heading text-2xl font-bold text-navy mb-8 text-center">Related Guides</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-[800px] mx-auto">
            <a href="/guides/ai-agents-accountants" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-slate-100">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">AI Agents for Accountants UK</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/ai-agents-charities" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-slate-100">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">AI Agents for Charities UK</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/what-is-openclaw-2026" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-slate-100">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">What is OpenClaw? Complete Guide 2026</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/openclaw-setup-mac" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-slate-100">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">OpenClaw Setup Guide for Mac 2026</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}