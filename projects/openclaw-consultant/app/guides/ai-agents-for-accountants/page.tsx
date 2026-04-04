import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "AI Agents for Accountants: Automate Tax Returns and Client Onboarding",
  description: "Discover how AI agents help accountancy firms automate tax returns, client onboarding, bookkeeping reconciliation, and compliance checks. Save 30+ hours per week.",
  keywords: [
    "ai agents for accountants",
    "accounting automation uk",
    "ai tax return automation",
    "ai client onboarding accountants",
    "automated bookkeeping uk",
    "ai for accounting firms",
    "accountancy practice automation",
    "ai agents accounting"
  ],
  alternates: { canonical: "https://openclawconsultant.co.uk/guides/ai-agents-for-accountants" },
  openGraph: {
    title: "AI Agents for Accountants: Automate Tax Returns and Client Onboarding",
    description: "Discover how AI agents help accountancy firms automate tax returns, client onboarding, bookkeeping reconciliation, and compliance checks.",
    url: "https://openclawconsultant.co.uk/guides/ai-agents-for-accountants",
    type: "article",
  },
};

const automationAreas = [
  {
    area: "Tax Return Preparation",
    timeSpent: "20-30 hours per week (peak season)",
    timeSaved: "75% automation possible",
    automations: [
      "Automated data extraction from bank statements and invoices",
      "Pre-populated self-assessment and corporation tax returns",
      "Cross-referencing allowances and reliefs against HMRC rules",
      "Error detection and compliance validation before submission"
    ],
    impact: "Faster filing, fewer errors, happier clients"
  },
  {
    area: "Client Onboarding",
    timeSpent: "5-8 hours per new client",
    timeSaved: "80% reduction possible",
    automations: [
      "Automated engagement letter generation and e-signature",
      "Anti-money laundering (AML) checks and ID verification",
      "Document collection portals with automated chasing",
      "Practice management system data entry from onboarding forms"
    ],
    impact: "Onboard clients in hours, not weeks"
  },
  {
    area: "Bookkeeping Reconciliation",
    timeSpent: "15-20 hours per week",
    timeSaved: "85% time savings",
    automations: [
      "Bank feed matching and categorisation",
      "Receipt scanning and automatic coding",
      "VAT return preparation and MTD compliance",
      "Month-end reconciliation and anomaly flagging"
    ],
    impact: "Near-real-time books with minimal human input"
  },
  {
    area: "Client Communication",
    timeSpent: "10-15 hours per week",
    timeSaved: "70% automation possible",
    automations: [
      "Automated deadline reminders for tax, VAT, and Companies House",
      "Document request emails with status tracking",
      "Monthly management report generation and distribution",
      "Query triage and routing to the right team member"
    ],
    impact: "Proactive service without the admin overhead"
  }
];

const useCases = [
  {
    useCase: "Automated Tax Return Pipeline",
    problem: "January deadline panic — staff work evenings and weekends to file hundreds of self-assessment returns",
    solution: "AI agents extract data from client records, pre-populate returns, run compliance checks, and flag only exceptions for human review",
    implementation: "Connect your practice management software and document store. The agent processes returns in batches, with accountants reviewing flagged items only",
    benefits: ["3x more returns processed per day", "95% fewer manual data entry errors", "Staff finish on time in January", "Consistent quality across all returns"]
  },
  {
    useCase: "Frictionless Client Onboarding",
    problem: "New clients wait weeks to get set up — chasing documents, running AML checks, setting up systems manually",
    solution: "AI agent sends welcome packs, collects documents via a branded portal, runs AML/KYC checks automatically, and populates your practice systems",
    implementation: "Client receives a single link. Everything from ID verification to engagement letter signing happens in one flow",
    benefits: ["Onboarding in 48 hours not 3 weeks", "100% AML compliance from day one", "Better first impression", "Zero manual data re-entry"]
  },
  {
    useCase: "Proactive Advisory Alerts",
    problem: "Accountants are so buried in compliance work they miss advisory opportunities worth thousands",
    solution: "AI monitors client data for triggers — approaching VAT thresholds, dividend opportunities, R&D claim potential — and alerts the accountant",
    implementation: "Agents run nightly scans across your client base, surfacing opportunities ranked by potential value",
    benefits: ["New revenue from advisory services", "Clients feel proactively managed", "Differentiation from compliance-only firms", "Higher client retention"]
  }
];

const roiExample = {
  practiceSize: "12-partner accountancy firm in Belfast",
  currentCosts: "4 bookkeeping staff (£120,000/year), overtime in tax season (£25,000/year), client onboarding delays costing £15,000/year in lost leads",
  aiImplementation: "Full AI automation across tax prep, onboarding, reconciliation, and client comms",
  savings: "£80,000/year in reduced admin costs, £25,000/year in eliminated overtime, £15,000/year in faster onboarding",
  totalSaving: "£120,000/year",
  roi: "1,500% ROI within first year"
};

const faqs = [
  {
    question: "Will AI replace accountants?",
    answer: "No. AI replaces the repetitive data entry and compliance grunt work that accountants shouldn't be doing anyway. It frees your team to focus on advisory, client relationships, and complex tax planning — the work that actually requires professional judgement and earns higher fees."
  },
  {
    question: "Is AI-generated tax work HMRC compliant?",
    answer: "AI agents are tools that assist accountants, not replace their professional responsibility. The agent handles data extraction and pre-population, but a qualified accountant always reviews and signs off. Our systems are built around HMRC's Making Tax Digital requirements and include full audit trails."
  },
  {
    question: "How does AI handle sensitive client financial data?",
    answer: "Data security is paramount. AI agents operate within your existing infrastructure with bank-grade encryption. All data processing complies with GDPR and the ICAEW/ACCA data handling guidelines. Client data never leaves your approved systems without explicit permission."
  },
  {
    question: "What practice management systems do AI agents integrate with?",
    answer: "Our agents integrate with major UK practice management platforms including Xero Practice Manager, Sage, QuickBooks, CCH, IRIS, and TaxCalc. We also connect to document management systems like Dext, AutoEntry, and Hubdoc for receipt processing."
  },
  {
    question: "How long does it take to implement AI in an accountancy practice?",
    answer: "Basic automation like client onboarding and deadline reminders can be live within 2 weeks. Bookkeeping reconciliation typically takes 3-4 weeks to configure with your chart of accounts. Full tax return automation is usually operational within 6-8 weeks, well ahead of the January deadline if you start in autumn."
  },
  {
    question: "What size of practice benefits most from AI agents?",
    answer: "Practices with 3+ staff see the fastest ROI because there's enough volume to justify automation. Solo practitioners benefit too — particularly from onboarding and client communication automation — but the time savings scale significantly with practice size. We've seen the biggest impact in 5-20 person firms."
  }
];

export default function AIAgentsForAccountantsPage() {
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
              Automate tax returns, client onboarding, bookkeeping reconciliation, and compliance checks. Spend less time on data entry and more time on advisory work that grows your practice.
            </p>
            <a
              href="#automations"
              className="inline-flex items-center justify-center bg-orange text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-orange-hover transition-all hover:-translate-y-0.5 shadow-glow-orange"
            >
              See Accounting Automations
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
              <div className="text-4xl font-bold text-orange mb-2">75%</div>
              <div className="text-muted">Less time on tax return preparation</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange mb-2">48hrs</div>
              <div className="text-muted">Client onboarding, down from 3 weeks</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange mb-2">£120k+</div>
              <div className="text-muted">Average annual savings for mid-size firms</div>
            </div>
          </div>
        </div>
      </section>

      {/* Automation Areas */}
      <section id="automations" className="bg-light py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Where Accountancy Firms Save the Most Time
            </h2>
            <p className="text-muted text-lg max-w-[600px] mx-auto">
              Four key areas where AI automation delivers immediate productivity gains for accounting practices across the UK.
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

      {/* Why Accountants Need AI Now */}
      <section className="bg-white py-28">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Why Accountancy Firms Need AI Agents Now
            </h2>
          </div>
          <div className="max-w-[800px] mx-auto prose prose-lg text-muted">
            <p>
              The accountancy profession is under more pressure than ever. HMRC&apos;s Making Tax Digital programme is expanding, client expectations are rising, and the talent shortage means experienced staff are increasingly hard to find and expensive to retain.
            </p>
            <p>
              Meanwhile, compliance work — the bread and butter of most practices — is becoming commoditised. Clients can file their own returns using off-the-shelf software. The firms that thrive will be those that shift from reactive compliance to proactive advisory, and AI agents make that shift possible by handling the repetitive work automatically.
            </p>
            <p>
              Platforms like <a href="https://bluecanvas.ai" className="text-orange hover:underline">Blue Canvas</a> help firms identify exactly where AI delivers the biggest return, whilst tools like <a href="https://openclawconsultant.co.uk" className="text-orange hover:underline">OpenClaw</a> provide the multi-agent infrastructure to automate complex workflows that span multiple systems.
            </p>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="bg-surface py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Real Accounting AI Use Cases
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
              Real ROI Example: Belfast Accountancy Firm
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
              AI for Accountants: FAQs
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
            Blue Canvas helps UK accountancy firms implement AI automation from his base in Derry, Northern Ireland. 
            Through <a href="https://bluecanvas.ai" className="text-orange hover:underline">Blue Canvas</a>, Phil designs 
            automation solutions that free accounting professionals from repetitive compliance work so they can focus on 
            high-value advisory services.
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
                <span className="text-orange">Accountancy Practice</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Free consultation to assess your current workflows and identify where AI automation can save 30+ hours per week 
                while improving accuracy and client satisfaction.
              </p>
              <div className="space-y-3 text-white/60">
                <div className="flex items-center gap-3">
                  <span className="text-orange">✓</span>
                  No obligation practice assessment
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-orange">✓</span>
                  ROI calculation specific to your firm
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-orange">✓</span>
                  Implementation roadmap and timeline
                </div>
              </div>
            </div>
            <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8">
              <h3 className="font-heading font-bold text-xl text-white mb-1">Accountancy AI Consultation</h3>
              <p className="text-white/60 text-sm mb-6">Get a custom automation plan for your accounting practice</p>
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
            <a href="/guides/ai-agents-for-solicitors" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">AI Agents for Solicitors</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/ai-agents-roi-guide" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">AI Agent ROI: Measure and Maximise Returns</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/ai-agent-security-guide" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">AI Agent Security Guide</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/multi-agent-systems-explained" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">Multi-Agent Systems Explained</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
