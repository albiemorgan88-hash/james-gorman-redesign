import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "AI Agents for Property Management: Tenants, Maintenance, Compliance",
  description: "How AI agents automate property management — tenant screening, maintenance coordination, rent collection, and regulatory compliance. Built for UK letting agents and landlords.",
  keywords: [
    "ai agents property management",
    "property management automation uk",
    "ai tenant screening",
    "automated maintenance management",
    "ai for letting agents",
    "property compliance automation",
    "ai rent collection",
    "letting agent automation uk"
  ],
  alternates: { canonical: "https://openclawconsultant.co.uk/guides/ai-agents-for-property-management" },
  openGraph: {
    title: "AI Agents for Property Management: Tenants, Maintenance, Compliance",
    description: "How AI agents automate property management — tenant screening, maintenance coordination, rent collection, and regulatory compliance.",
    url: "https://openclawconsultant.co.uk/guides/ai-agents-for-property-management",
    type: "article",
  },
};

const automationAreas = [
  {
    area: "Tenant Screening & Onboarding",
    timeSpent: "6-10 hours per new tenant",
    timeSaved: "80% reduction possible",
    automations: [
      "Automated referencing — credit checks, employer verification, previous landlord references",
      "Right-to-rent checks with document verification and Home Office API integration",
      "Digital tenancy agreement generation and e-signature",
      "Deposit registration with DPS, MyDeposits, or TDS automatically"
    ],
    impact: "Tenants move in faster, every check completed properly"
  },
  {
    area: "Maintenance & Repairs",
    timeSpent: "15-25 hours per week on coordination",
    timeSaved: "70% time savings",
    automations: [
      "Tenant maintenance requests via WhatsApp, email, or portal — triaged automatically",
      "Contractor matching based on trade, availability, location, and past performance",
      "Automated scheduling, confirmation, and follow-up with tenants and contractors",
      "Photo documentation and cost tracking for landlord reporting"
    ],
    impact: "Issues resolved faster with less back-and-forth"
  },
  {
    area: "Rent Collection & Arrears",
    timeSpent: "8-12 hours per week chasing payments",
    timeSaved: "85% automation possible",
    automations: [
      "Automated rent reminders sent 3 days before, on, and after due date",
      "Direct debit setup and management with GoCardless or similar",
      "Arrears escalation workflow — reminder, call prompt, formal notice generation",
      "Landlord payment processing and statement generation"
    ],
    impact: "Rent collected on time, arrears caught before they spiral"
  },
  {
    area: "Regulatory Compliance",
    timeSpent: "Ongoing — gas safety, EPCs, licensing, deposit protection",
    timeSaved: "95% of compliance tracking automated",
    automations: [
      "Gas safety certificate expiry tracking with automated contractor booking",
      "EPC renewal reminders and booking coordination",
      "HMO licensing deadline tracking and renewal preparation",
      "Section 21/Section 8 notice validity checking and generation"
    ],
    impact: "Never miss a compliance deadline again"
  }
];

const useCases = [
  {
    useCase: "Automated Void Management",
    problem: "Empty properties cost landlords £500-£1,500 per month in lost rent. The void period between tenants — marketing, viewings, referencing, move-in — takes 3-6 weeks on average",
    solution: "A Marketing Agent lists the property across Rightmove, Zoopla, and social media the day notice is given. A Viewing Agent handles enquiries and schedules viewings. A Referencing Agent runs checks immediately. A Move-In Agent coordinates key handover, inventory, and deposit protection",
    implementation: "Connect to your property management software and marketing portals. The orchestrator triggers each stage automatically as the previous step completes",
    benefits: ["Void periods reduced from 4 weeks to 10 days", "Properties marketed within 24 hours of notice", "Referencing completed in 48 hours", "£2,000-£6,000 saved per void per property"]
  },
  {
    useCase: "Intelligent Maintenance Triage",
    problem: "Tenants report everything from emergencies to cosmetic complaints through the same channel. Property managers waste hours triaging, calling contractors, coordinating access, and chasing updates",
    solution: "An Intake Agent receives maintenance requests (WhatsApp, email, phone transcript), categorises urgency, and extracts key details. A Dispatch Agent matches to appropriate contractors. A Coordination Agent manages scheduling and access. A Quality Agent follows up post-repair",
    implementation: "Tenants report issues through their preferred channel. AI handles the rest — categorisation, contractor selection, scheduling, and follow-up. Managers only see escalations and weekly summaries",
    benefits: ["Emergency response time under 1 hour", "Routine repairs resolved 60% faster", "Contractor costs reduced through competitive matching", "Tenant satisfaction scores up 45%"]
  },
  {
    useCase: "Compliance Autopilot",
    problem: "With hundreds of properties, keeping track of gas safety certificates, EPCs, electrical checks, smoke alarms, and licensing is a full-time job. One missed certificate can mean prosecution and unlimited fines",
    solution: "A Compliance Agent maintains a real-time register of every certificate, inspection, and licence across your portfolio. It triggers renewal workflows 60 days before expiry, books contractors, confirms completion, and files certificates",
    implementation: "Upload your current compliance records. The agent builds a master register, identifies any current gaps, and begins automated monitoring. Integration with contractor booking systems handles the execution",
    benefits: ["Zero compliance lapses across entire portfolio", "Prosecution risk eliminated", "4+ hours per week saved on compliance admin", "Landlord confidence in your management"]
  }
];

const roiExample = {
  practiceSize: "Letting agency managing 250 properties across Northern Ireland",
  currentCosts: "2 admin staff on compliance and maintenance (£55,000/year), average 4-week void periods costing landlords £150,000/year across portfolio, 15% rent arrears rate costing £45,000/year in delayed income",
  aiImplementation: "Full AI automation across tenant lifecycle — marketing, screening, maintenance, rent collection, and compliance",
  savings: "Admin redeployed to business development (£55,000/year), void periods halved (£75,000/year landlord value), arrears reduced to 3% (£36,000/year recovered), compliance automation (£15,000/year risk reduction)",
  totalSaving: "£181,000/year",
  roi: "1,800% ROI within first year"
};

const faqs = [
  {
    question: "Does AI replace property managers?",
    answer: "No — it replaces the admin that buries property managers. The average property manager spends 60-70% of their time on reactive admin: chasing contractors, sending reminders, updating spreadsheets. AI handles all of that, freeing managers to focus on landlord relationships, portfolio growth, and the judgment calls that actually need a human. Most agencies find they can manage 50% more properties with the same team."
  },
  {
    question: "How does AI handle tenant communication?",
    answer: "AI agents communicate via the channels tenants already use — WhatsApp, email, text, or a tenant portal. They understand natural language, so tenants describe issues normally ('the boiler's making a weird noise') and the agent categorises, triages, and responds appropriately. For sensitive communications (arrears, legal notices), the agent drafts but a human reviews before sending. Tenants typically can't tell they're talking to an AI — and frankly, they don't care as long as their issue gets resolved quickly."
  },
  {
    question: "Is automated tenant referencing reliable?",
    answer: "More reliable than manual processes. AI referencing agents run credit checks, verify employment (including calling employers with scripted questions), contact previous landlords, and check Right to Rent status — all within 24-48 hours. They flag inconsistencies that humans might miss, like employment dates that don't match credit history. The key difference is consistency: every applicant goes through exactly the same thorough process, reducing discrimination risk and improving tenant quality."
  },
  {
    question: "What property management software does AI integrate with?",
    answer: "AI agents integrate with major UK property management platforms including Arthur, Rentman, PropertyTek, Goodlord, Reapit, PropertyFile, Expert Agent, and Jupix. They also connect to portals (Rightmove, Zoopla, OnTheMarket), accounting tools (Xero, Sage), and communication platforms (WhatsApp Business API, Microsoft 365). If it has an API, an agent can work with it."
  },
  {
    question: "How does AI handle emergency maintenance?",
    answer: "Emergency classification happens instantly based on keywords and context — gas leaks, flooding, no heating in winter, and security breaches are automatically flagged as urgent. The agent immediately contacts emergency contractors, notifies the property manager, and keeps the tenant informed with estimated response times. Non-emergency issues that tenants report as 'urgent' are diplomatically recategorised with clear explanations and realistic timelines."
  },
  {
    question: "What about GDPR and tenant data?",
    answer: "AI agents handling tenant data must comply with GDPR, and well-designed systems make this easier, not harder. All data processing has a clear lawful basis (contract performance for tenancy management). Tenant data is encrypted, access-controlled, and automatically deleted when no longer needed. Subject access requests can be fulfilled automatically. The audit trail that AI creates is actually superior to manual record-keeping for GDPR compliance purposes."
  }
];

export default function AIAgentsForPropertyManagementPage() {
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
              Automate tenant screening, maintenance coordination, rent collection, and compliance tracking. Manage more properties with less stress and zero missed deadlines.
            </p>
            <a
              href="#automations"
              className="inline-flex items-center justify-center bg-orange text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-orange-hover transition-all hover:-translate-y-0.5 shadow-glow-orange"
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
              <div className="text-4xl font-bold text-orange mb-2">60%</div>
              <div className="text-muted">Shorter void periods between tenants</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange mb-2">Zero</div>
              <div className="text-muted">Missed compliance deadlines</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange mb-2">50%</div>
              <div className="text-muted">More properties managed per team member</div>
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
              Four key areas where AI automation transforms letting agency and property management operations.
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

      {/* Why Property Managers Need AI */}
      <section className="bg-white py-28">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Why Property Management Needs AI Agents Now
            </h2>
          </div>
          <div className="max-w-[800px] mx-auto prose prose-lg text-muted">
            <p>
              Property management in the UK is getting harder. The Renters&apos; Reform Bill is introducing new landlord obligations. Selective licensing is expanding across councils. EPC requirements are tightening. And tenants — rightly — expect faster, more responsive service.
            </p>
            <p>
              Meanwhile, margins for letting agents are under pressure. Online competitors offer cut-price management fees. Landlords shop around. The agencies that thrive will be those delivering premium service at efficient cost — and that means automating the 70% of work that&apos;s pure admin.
            </p>
            <p>
              <a href="https://bluecanvas.ai" className="text-orange hover:underline">Blue Canvas</a> helps property management businesses identify their highest-impact automation opportunities and design agent systems that integrate with existing property software. The goal isn&apos;t replacing property managers — it&apos;s giving them superpowers.
            </p>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="bg-surface py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Real Property Management AI Use Cases
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
              Real ROI Example: Northern Ireland Letting Agency
            </h2>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-card">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="font-heading font-bold text-xl text-dark mb-6">Before AI Automation:</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-red-500 pl-4">
                    <div className="font-semibold text-dark">Agency Size:</div>
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
                    <div className="font-semibold text-orange text-lg">Total Annual Value: {roiExample.totalSaving}</div>
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
              AI for Property Management: FAQs
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
            Blue Canvas helps UK letting agents and property managers implement AI automation from his base in Derry, Northern Ireland. 
            Through <a href="https://bluecanvas.ai" className="text-orange hover:underline">Blue Canvas</a>, Phil designs 
            agent systems that automate tenant lifecycle management, maintenance coordination, and regulatory compliance.
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
                <span className="text-orange">Property Management</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Free consultation to assess your property management workflows and identify where AI agents can help you manage more properties with less admin.
              </p>
              <div className="space-y-3 text-white/60">
                <div className="flex items-center gap-3">
                  <span className="text-orange">✓</span>
                  Portfolio workflow analysis
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-orange">✓</span>
                  Compliance gap assessment
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-orange">✓</span>
                  Implementation roadmap and timeline
                </div>
              </div>
            </div>
            <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8">
              <h3 className="font-heading font-bold text-xl text-white mb-1">Property AI Consultation</h3>
              <p className="text-white/60 text-sm mb-6">Get a custom automation plan for your property portfolio</p>
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
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">AI Agents for Accountants</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/ai-agent-security-guide" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">AI Agent Security Guide</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/ai-agents-roi-guide" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">AI Agent ROI Guide</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/ai-agents-for-customer-support" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">AI Agents for Customer Support</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
