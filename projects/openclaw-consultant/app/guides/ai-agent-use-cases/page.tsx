import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "AI Agent Use Cases by Industry: Where Agents Deliver Real ROI",
  description: "Explore AI agent use cases across healthcare, legal, finance, retail, property, recruitment, and more. Industry-specific examples with real ROI data for UK businesses.",
  keywords: [
    "ai agent use cases",
    "ai agent use cases by industry",
    "ai automation use cases",
    "ai agents for business",
    "ai agent industry examples",
    "ai agent roi by sector",
    "ai agent applications",
    "business ai agents"
  ],
  alternates: { canonical: "https://openclawconsultant.co.uk/guides/ai-agent-use-cases" },
  openGraph: {
    title: "AI Agent Use Cases by Industry",
    description: "Industry-specific AI agent use cases with real ROI data for UK businesses.",
    url: "https://openclawconsultant.co.uk/guides/ai-agent-use-cases",
    type: "article",
  },
};

const industries = [
  {
    name: "Accountancy & Finance",
    icon: "📊",
    topUseCases: ["Automated tax return preparation", "Client onboarding and AML checks", "Bookkeeping reconciliation", "Cash flow forecasting"],
    typicalROI: "£80,000–120,000/year savings for mid-size firms",
    readiness: "High — data-heavy, rule-based workflows are ideal for AI agents",
    guideLink: "/guides/ai-agents-for-accountants"
  },
  {
    name: "Legal & Solicitors",
    icon: "⚖️",
    topUseCases: ["Contract review and clause extraction", "Legal research and case law analysis", "Client intake and conflict checks", "Document assembly and template generation"],
    typicalROI: "30-50% reduction in document review time",
    readiness: "High — legal work is document-heavy with clear procedures",
    guideLink: "/guides/ai-agents-for-solicitors"
  },
  {
    name: "Healthcare",
    icon: "🏥",
    topUseCases: ["Patient appointment scheduling and reminders", "Clinical documentation and coding", "Insurance pre-authorisation", "Patient query triage"],
    typicalROI: "40% fewer missed appointments, 60% less admin time",
    readiness: "Medium — strong potential but requires careful data handling (NHS/GDPR compliance)",
    guideLink: "/guides/ai-agents-for-healthcare"
  },
  {
    name: "Recruitment",
    icon: "👥",
    topUseCases: ["CV screening and shortlisting", "Candidate outreach and scheduling", "Job description generation", "Market salary benchmarking"],
    typicalROI: "3x more placements per consultant",
    readiness: "High — recruitment is a perfect fit for AI agent automation",
    guideLink: "/guides/ai-agents-for-recruitment"
  },
  {
    name: "E-Commerce & Retail",
    icon: "🛒",
    topUseCases: ["Customer service automation", "Product description generation", "Inventory monitoring and reorder alerts", "Review analysis and sentiment tracking"],
    typicalROI: "25% reduction in customer service costs, 15% increase in conversion",
    readiness: "High — well-established integrations with e-commerce platforms",
    guideLink: "/guides/ai-agents-for-ecommerce"
  },
  {
    name: "Property & Estate Agents",
    icon: "🏠",
    topUseCases: ["Property matching for buyers/tenants", "Automated viewing scheduling", "Market valuation reports", "Tenant communication and maintenance requests"],
    typicalROI: "50% fewer hours on admin, faster lettings turnaround",
    readiness: "Medium-High — clear workflows with good automation potential",
    guideLink: "/guides/ai-agents-for-property-management"
  },
  {
    name: "Construction",
    icon: "🏗️",
    topUseCases: ["Project documentation and compliance tracking", "Supplier quote comparison", "Health and safety monitoring", "Progress reporting and timeline management"],
    typicalROI: "20% reduction in project delays from better documentation",
    readiness: "Medium — legacy systems and paper-based processes need modernisation first",
    guideLink: "/guides/ai-agents-construction"
  },
  {
    name: "Logistics & Supply Chain",
    icon: "🚚",
    topUseCases: ["Route optimisation", "Demand forecasting", "Supplier communication automation", "Exception handling and delay notification"],
    typicalROI: "15% reduction in logistics costs, 30% faster exception resolution",
    readiness: "High — data-rich environment with clear optimisation opportunities",
    guideLink: "/guides/ai-agents-for-logistics"
  }
];

const faqs = [
  {
    question: "Which industry benefits most from AI agents?",
    answer: "Industries with high-volume, data-heavy, repetitive workflows see the fastest ROI. Accountancy, recruitment, and e-commerce consistently deliver the strongest results. Legal and healthcare have enormous potential but require more careful implementation due to regulatory requirements."
  },
  {
    question: "Can AI agents handle industry-specific regulations?",
    answer: "Yes, when properly configured. AI agents can be trained on specific regulatory frameworks — HMRC rules for accountancy, SRA guidelines for legal, CQC standards for healthcare. The key is building compliance checks into the agent's workflow, not relying on the AI to 'know' the rules. Human oversight remains essential for regulated decisions."
  },
  {
    question: "How do I calculate ROI for AI agents in my industry?",
    answer: "Start by measuring: (1) hours spent on the specific task you want to automate, (2) the cost of those hours (salary + overheads), (3) error rates and their cost. Then estimate what an AI agent would cost to run monthly. Most businesses see 300-1,500% ROI within the first year. Visit our pricing page for specific implementation costs."
  },
  {
    question: "What if my industry isn't listed here?",
    answer: "AI agents are applicable to virtually any industry with administrative or data-processing workflows. The principles are the same: identify repetitive tasks, assess data readiness, and start with the highest-impact automation. Book a consultation and we'll assess your specific industry and workflows."
  },
  {
    question: "How long does industry-specific AI implementation take?",
    answer: "Simple automations (email triage, scheduling) take 1-2 weeks regardless of industry. Industry-specific workflows (tax preparation, contract review, clinical documentation) typically take 4-8 weeks because they require domain-specific configuration and testing. The timeline mainly depends on data readiness and process documentation."
  },
  {
    question: "Do I need industry-specific AI agent tools?",
    answer: "Not usually. General-purpose platforms like OpenClaw can be configured for any industry. The 'industry-specific' element comes from how you configure the agent — what data it accesses, what rules it follows, what systems it integrates with. Avoid vendors selling 'AI for [industry]' at premium prices when a well-configured general platform does the same job."
  }
];

export default function AIAgentUseCasesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient relative overflow-hidden min-h-[70vh] flex items-center grain">
        <div className="max-w-[1140px] mx-auto px-6 relative z-10 py-20">
          <div className="max-w-[720px]">
            <h1 className="font-heading text-4xl sm:text-5xl md:text-[3.2rem] font-extrabold text-white mb-6 leading-[1.05] tracking-tight">
              AI Agent Use Cases
              <br />
              <span className="text-orange">by Industry</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl max-w-[540px] mb-10 leading-relaxed">
              Where AI agents deliver real ROI across UK industries. Not vague promises — specific use cases with measurable results.
            </p>
            <a
              href="#industries"
              className="inline-flex items-center justify-center bg-orange text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-orange-hover transition-all hover:-translate-y-0.5 shadow-glow-orange"
            >
              Explore by Industry
            </a>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#fafbfc] to-transparent" />
      </section>

      {/* Stats */}
      <section className="bg-white py-16">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-orange mb-2">8</div>
              <div className="text-muted">Industries covered</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange mb-2">32</div>
              <div className="text-muted">Specific use cases</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange mb-2">300%+</div>
              <div className="text-muted">Typical first-year ROI</div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section id="industries" className="bg-light py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              AI Agent Use Cases Across UK Industries
            </h2>
          </div>

          <div className="space-y-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-card">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
                  <div>
                    <div className="text-3xl mb-2">{industry.icon}</div>
                    <h3 className="font-heading font-bold text-xl text-dark mb-2">{industry.name}</h3>
                    <div className="text-orange font-semibold text-sm">{industry.typicalROI}</div>
                  </div>
                  
                  <div className="lg:col-span-2">
                    <h4 className="font-semibold text-dark mb-3">Top Use Cases:</h4>
                    <ul className="space-y-2">
                      {industry.topUseCases.map((useCase, i) => (
                        <li key={i} className="flex gap-2 items-start text-sm text-muted-dark">
                          <span className="text-orange mt-0.5 flex-shrink-0">•</span>
                          {useCase}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-dark mb-3">AI Readiness:</h4>
                    <p className="text-muted text-sm mb-4">{industry.readiness}</p>
                    <a href={industry.guideLink} className="text-orange font-semibold text-sm hover:underline">
                      Read Full Guide →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-Industry Patterns */}
      <section className="bg-white py-28">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="max-w-[800px] mx-auto prose prose-lg text-muted">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-6 not-prose">
              Cross-Industry Patterns: Universal AI Agent Wins
            </h2>
            <p>
              Regardless of industry, certain AI agent use cases deliver consistent results. These are the &ldquo;universal wins&rdquo; that work for almost any business:
            </p>
            <p>
              <strong>Email and document triage</strong> — every business drowns in incoming communication. An AI agent that reads, categorises, and routes emails saves 5-10 hours per person per week.
            </p>
            <p>
              <strong>Customer enquiry handling</strong> — whether you call them customers, clients, or patients, the first response to inbound enquiries can be automated with 90%+ accuracy. See our guide on <a href="/guides/ai-agents-for-customer-support" className="text-orange hover:underline">AI agents for customer service</a>.
            </p>
            <p>
              <strong>Report generation</strong> — monthly reports, compliance documentation, performance summaries. If it&apos;s pulling data from systems and formatting it into a document, an agent can do it.
            </p>
            <p>
              <strong>Scheduling and coordination</strong> — booking meetings, chasing confirmations, managing calendars. Tedious for humans, trivial for agents.
            </p>
            <p>
              For more examples, see our <a href="/guides/ai-agent-examples" className="text-orange hover:underline">AI Agent Examples</a> guide with 15 detailed implementations.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-surface py-28">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              AI Agent Use Cases: FAQs
            </h2>
          </div>
          <div className="max-w-[800px] mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl p-6">
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
            Blue Canvas helps UK businesses turn AI agent ideas into controlled, practical workflows. Through <a href="https://bluecanvas.ai" className="text-orange hover:underline">Blue Canvas</a>, Phil Patterson 
            helps UK businesses identify the highest-ROI use cases and get agents into production quickly and safely.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-navy text-white py-24 relative overflow-hidden grain">
        <div className="max-w-[1140px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Find the Right
                <br />
                <span className="text-orange">AI Use Case for Your Industry</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Book a free consultation to identify the highest-impact AI agent opportunities for your specific industry and business.
              </p>
              <div className="space-y-3 text-white/60">
                <div className="flex items-center gap-3">
                  <span className="text-orange">✓</span>
                  Industry-specific automation assessment
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-orange">✓</span>
                  ROI estimate for your top use cases
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-orange">✓</span>
                  Implementation roadmap and timeline
                </div>
              </div>
            </div>
            <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8">
              <h3 className="font-heading font-bold text-xl text-white mb-1">Industry AI Consultation</h3>
              <p className="text-white/60 text-sm mb-6">Discover the best AI agent use cases for your sector</p>
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
            <a href="/guides/ai-agent-examples" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">AI Agent Examples: 15 Real-World Use Cases</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/ai-automation-for-business-uk" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">AI Automation for Business UK</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/best-ai-agents-2026" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">Best AI Agents 2026</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/pricing" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">AI Agent Pricing</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">View Pricing →</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
