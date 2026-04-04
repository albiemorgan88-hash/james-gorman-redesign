import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "AI Agents for Solicitors: Case Management and Document Review",
  description: "How AI agents transform law firms with automated case management, document review, contract analysis, and client communication. Save 25+ hours per week per solicitor.",
  keywords: [
    "ai agents for solicitors",
    "legal ai automation uk",
    "ai case management solicitors",
    "ai document review law firms",
    "legal tech automation",
    "ai for law firms uk",
    "solicitor practice automation",
    "ai contract review"
  ],
  alternates: { canonical: "https://openclawconsultant.co.uk/guides/ai-agents-for-solicitors" },
  openGraph: {
    title: "AI Agents for Solicitors: Case Management and Document Review",
    description: "How AI agents transform law firms with automated case management, document review, contract analysis, and client communication.",
    url: "https://openclawconsultant.co.uk/guides/ai-agents-for-solicitors",
    type: "article",
  },
};

const automationAreas = [
  {
    area: "Document Review & Analysis",
    timeSpent: "20-30 hours per week per solicitor",
    timeSaved: "80% automation possible",
    automations: [
      "Contract clause extraction and comparison",
      "Due diligence document classification and flagging",
      "Regulatory compliance checking against current legislation",
      "Precedent search across internal and external databases"
    ],
    impact: "Review thousands of documents in hours, not weeks"
  },
  {
    area: "Case Management",
    timeSpent: "10-15 hours per week",
    timeSaved: "70% reduction possible",
    automations: [
      "Automated case timeline tracking and deadline alerts",
      "Court form pre-population from case files",
      "Matter status updates and client notifications",
      "Conflict of interest checking across the firm"
    ],
    impact: "Never miss a deadline, always know case status"
  },
  {
    area: "Client Communication",
    timeSpent: "8-12 hours per week",
    timeSaved: "65% time savings",
    automations: [
      "Automated case progress updates to clients",
      "Initial enquiry triage and qualification",
      "Document request and chasing workflows",
      "Fee estimate generation from case details"
    ],
    impact: "Clients feel informed without constant solicitor time"
  },
  {
    area: "Billing & Compliance",
    timeSpent: "5-10 hours per week",
    timeSaved: "75% automation possible",
    automations: [
      "Time recording from calendar and email activity",
      "SRA compliance monitoring and reporting",
      "Anti-money laundering checks and ongoing monitoring",
      "Invoice generation and payment chasing"
    ],
    impact: "Accurate billing, zero compliance gaps"
  }
];

const useCases = [
  {
    useCase: "Intelligent Document Review",
    problem: "A commercial property transaction generates hundreds of documents — leases, searches, title deeds — each needing manual review taking days",
    solution: "AI agents scan entire document bundles, extract key clauses, flag risks, compare against standard terms, and produce structured summaries for solicitor review",
    implementation: "Upload documents to the review platform. AI categorises, extracts, and presents findings in a dashboard with confidence scores",
    benefits: ["90% faster document review", "Consistent risk identification", "Nothing missed in large bundles", "Junior staff can handle complex reviews"]
  },
  {
    useCase: "Automated Case Progression",
    problem: "Cases stall because deadlines are missed, documents aren't chased, and solicitors juggle too many matters",
    solution: "AI agent monitors every active case, sends deadline reminders, chases outstanding documents, and escalates at-risk matters automatically",
    implementation: "Integrates with your case management system to track all matters and trigger actions based on rules you define",
    benefits: ["Zero missed deadlines", "Cases progress without manual chasing", "Better client satisfaction scores", "Reduced PI insurance risk"]
  },
  {
    useCase: "Client Intake & Qualification",
    problem: "Enquiries come in by phone, email, and web form — staff spend hours qualifying leads that often go nowhere",
    solution: "AI agent handles initial client enquiries, qualifies cases against your acceptance criteria, runs conflict checks, and books consultations for viable matters",
    implementation: "Connects to your website, email, and phone system. Qualified leads arrive as structured briefs with all relevant details",
    benefits: ["24/7 enquiry handling", "Only qualified leads reach solicitors", "Faster response times", "No missed opportunities"]
  }
];

const roiExample = {
  practiceSize: "6-solicitor high street firm in Leeds",
  currentCosts: "3 paralegals on document work (£90,000/year), missed deadline insurance claims (£20,000/year), unrecovered billable hours (£40,000/year)",
  aiImplementation: "AI document review, case management automation, and automated time recording",
  savings: "£60,000/year in paralegal time reallocation, £20,000/year in eliminated PI claims, £30,000/year in recovered billable time",
  totalSaving: "£110,000/year",
  roi: "1,100% ROI within first year"
};

const faqs = [
  {
    question: "Is AI document review reliable enough for legal work?",
    answer: "Modern AI document review achieves 95%+ accuracy rates, often outperforming human reviewers on consistency. Crucially, AI doesn't get tired at 11pm or miss things in large document sets. However, it's a tool to assist solicitors — not replace their professional judgement. Complex or novel legal questions still need human expertise."
  },
  {
    question: "How does AI handle legal privilege and confidentiality?",
    answer: "Data security is non-negotiable in legal work. Our AI systems run within your existing infrastructure or approved UK-hosted environments. All data is encrypted in transit and at rest, compliant with SRA standards, and never used to train external models. Full audit trails are maintained for regulatory purposes."
  },
  {
    question: "Will the SRA accept AI-assisted legal work?",
    answer: "The SRA has published guidance on legal technology use. AI tools are permitted provided solicitors maintain professional oversight, competence, and responsibility for the work product. Our systems are designed to support — not replace — solicitor decision-making, with clear audit trails showing human review at every critical stage."
  },
  {
    question: "What case management systems do AI agents work with?",
    answer: "Our agents integrate with major UK legal software including Clio, LEAP, Proclaim, Osprey, and PracticeEvolve. We also connect to document management systems like iManage, NetDocuments, and SharePoint. Custom integrations for bespoke systems are available."
  },
  {
    question: "How long until we see results?",
    answer: "Document review automation can show measurable time savings within 2-3 weeks. Case management automation typically takes 4-6 weeks to configure with your workflows. Most firms report significant ROI within the first quarter, with full benefits realised within 6 months."
  },
  {
    question: "Can AI agents help with legal aid work?",
    answer: "Absolutely. Legal aid firms often face the tightest margins, making efficiency gains even more critical. AI agents can automate LAA form completion, means testing, cost assessments, and reporting — turning legal aid work from a loss-leader into a sustainable part of your practice."
  }
];

export default function AIAgentsForSolicitorsPage() {
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
              Automate case management, document review, contract analysis, and client communication. Bill more hours on work that matters, not admin that doesn&apos;t.
            </p>
            <a
              href="#automations"
              className="inline-flex items-center justify-center bg-orange text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-orange-hover transition-all hover:-translate-y-0.5 shadow-glow-orange"
            >
              See Legal Automations
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
              <div className="text-muted">Faster document review times</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange mb-2">Zero</div>
              <div className="text-muted">Missed deadlines with AI case tracking</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange mb-2">£110k+</div>
              <div className="text-muted">Average annual savings per firm</div>
            </div>
          </div>
        </div>
      </section>

      {/* Automation Areas */}
      <section id="automations" className="bg-light py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Where Law Firms Save the Most Time
            </h2>
            <p className="text-muted text-lg max-w-[600px] mx-auto">
              Four key areas where AI automation delivers immediate productivity gains for solicitors and legal practices.
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

      {/* Industry Context */}
      <section className="bg-white py-28">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Why UK Law Firms Are Adopting AI Now
            </h2>
          </div>
          <div className="max-w-[800px] mx-auto prose prose-lg text-muted">
            <p>
              The legal profession is at an inflection point. The Big Four accountancy firms are eating into legal services, alternative legal service providers are growing rapidly, and clients are demanding fixed fees over hourly billing. Solicitors who cling to manual processes will struggle to compete.
            </p>
            <p>
              The Law Society&apos;s own research shows that UK law firms spend up to 40% of billable time on tasks that could be automated. That&apos;s not just inefficiency — it&apos;s margin being left on the table while competitors invest in technology.
            </p>
            <p>
              Multi-agent systems built on platforms like <a href="https://openclawconsultant.co.uk" className="text-orange hover:underline">OpenClaw</a> allow firms to deploy specialised AI agents for different practice areas — one handling conveyancing document checks, another managing family law case progression, a third running commercial contract reviews — all coordinated through a single system. <a href="https://bluecanvas.ai" className="text-orange hover:underline">Blue Canvas</a> helps firms design and implement these systems with minimal disruption.
            </p>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="bg-surface py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Real Legal AI Use Cases
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
              Real ROI Example: Leeds Law Firm
            </h2>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-card">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="font-heading font-bold text-xl text-dark mb-6">Before AI Automation:</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-red-500 pl-4">
                    <div className="font-semibold text-dark">Firm Size:</div>
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
              AI for Solicitors: FAQs
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
            Blue Canvas helps UK law firms implement AI automation from his base in Derry, Northern Ireland. 
            Through <a href="https://bluecanvas.ai" className="text-orange hover:underline">Blue Canvas</a>, Phil works with 
            solicitors to identify the highest-impact automation opportunities and implement them without disrupting 
            existing workflows or compromising professional standards.
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
                <span className="text-orange">Legal Practice</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Free consultation to assess your current workflows and identify where AI automation can save 25+ hours per week per solicitor whilst improving client service.
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
                  SRA-compliant implementation approach
                </div>
              </div>
            </div>
            <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8">
              <h3 className="font-heading font-bold text-xl text-white mb-1">Legal AI Consultation</h3>
              <p className="text-white/60 text-sm mb-6">Get a custom automation plan for your law firm</p>
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
            <a href="/guides/openclaw-enterprise-deployment" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">OpenClaw Enterprise Deployment</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
