import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "OpenClaw for Business: How Companies Use AI Agents",
  description: "Discover how businesses use OpenClaw AI agents to automate sales, operations, customer service, and finance. Real ROI examples and use cases by department.",
  keywords: [
    "openclaw for business",
    "openclaw ai agents",
    "openclaw business use cases",
    "ai agents for companies",
    "openclaw automation",
    "business ai agents",
    "openclaw roi",
    "ai agent deployment"
  ],
  alternates: { canonical: "https://openclawconsultant.co.uk/guides/openclaw-for-business" },
  openGraph: {
    title: "OpenClaw for Business: How Companies Use AI Agents",
    description: "How businesses use OpenClaw AI agents to automate sales, operations, customer service, and finance. Real ROI examples.",
    url: "https://openclawconsultant.co.uk/guides/openclaw-for-business",
    type: "article",
  },
};

const departments = [
  {
    name: "Sales & Business Development",
    icon: "📈",
    description: "OpenClaw agents prospect, qualify, and nurture leads while your sales team focuses on closing. They work 24/7, never forget a follow-up, and learn which approaches convert best.",
    useCases: [
      "Lead qualification — agents score inbound enquiries against your ICP and route hot leads to the right rep instantly",
      "Prospect research — compile company intel, recent news, and decision-maker profiles before every call",
      "Follow-up automation — personalised email sequences that adapt based on engagement signals",
      "CRM hygiene — automatically update records, log interactions, and flag stale opportunities",
      "Proposal generation — draft tailored proposals using your templates and the prospect's specific requirements",
    ],
    roi: "Clients typically see 30–50% more qualified pipeline within 60 days",
  },
  {
    name: "Operations & Administration",
    icon: "⚙️",
    description: "The back office is where AI agents deliver the most immediate, measurable ROI. OpenClaw handles the repetitive tasks that consume hours of skilled workers' time every week.",
    useCases: [
      "Document processing — extract data from invoices, contracts, and forms with near-perfect accuracy",
      "Scheduling and coordination — manage calendars, book meetings, and handle rescheduling across time zones",
      "Reporting — generate daily, weekly, and monthly reports by pulling data from multiple systems",
      "Process monitoring — watch for exceptions, bottlenecks, and SLA breaches across your operations",
      "Vendor management — track contracts, flag renewal dates, and compare pricing automatically",
    ],
    roi: "Average 40–60% reduction in admin time, freeing staff for strategic work",
  },
  {
    name: "Customer Service",
    icon: "💬",
    description: "OpenClaw customer service agents handle Tier 1 queries instantly, escalate complex issues to humans, and maintain your brand voice across every interaction.",
    useCases: [
      "Instant query resolution — answer common questions about orders, returns, pricing, and policies",
      "Intelligent escalation — recognise when a human is needed and route to the right team with full context",
      "Proactive outreach — follow up after purchases, check satisfaction, and offer relevant upsells",
      "Multi-channel support — consistent responses across email, chat, social media, and phone",
      "Knowledge base maintenance — identify gaps in your FAQ based on recurring queries",
    ],
    roi: "60–80% of Tier 1 queries resolved without human intervention, average response time under 2 minutes",
  },
  {
    name: "Finance & Accounting",
    icon: "💷",
    description: "Financial AI agents handle the data-heavy, rule-based work that accountants and finance teams spend most of their time on — while maintaining the accuracy the profession demands.",
    useCases: [
      "Bank reconciliation — match transactions automatically, flagging exceptions for human review",
      "Invoice processing — extract line items, match to POs, and route for approval",
      "VAT and tax preparation — compile returns from transaction data, ready for accountant sign-off",
      "Cash flow forecasting — analyse patterns and predict upcoming cash positions",
      "Expense management — categorise receipts, check policy compliance, and flag anomalies",
    ],
    roi: "65% reduction in month-end close time, near-zero reconciliation errors",
  },
  {
    name: "HR & Recruitment",
    icon: "👥",
    description: "From first application to onboarding, OpenClaw agents streamline every step of the employee lifecycle while keeping the human connection where it matters most.",
    useCases: [
      "CV screening — parse applications, score against requirements, and create shortlists",
      "Interview scheduling — coordinate availability across candidates and panel members",
      "Onboarding workflows — guide new starters through documentation, IT setup, and training",
      "Policy Q&A — answer employee questions about holidays, benefits, and procedures instantly",
      "Performance data — compile review materials and flag trends across teams",
    ],
    roi: "50% faster time-to-hire, 35% reduction in HR admin overhead",
  },
];

const whyOpenClaw = [
  {
    title: "Self-Hosted = Your Data Stays Yours",
    description: "Unlike cloud-only platforms, OpenClaw runs on your infrastructure. Your business data never leaves your servers. Critical for UK businesses handling sensitive client information under UK GDPR.",
  },
  {
    title: "Multi-Agent Orchestration",
    description: "Most platforms give you one agent at a time. OpenClaw lets you build teams of specialised agents that collaborate — a sales agent that hands qualified leads to an onboarding agent, which triggers a finance agent to set up billing.",
  },
  {
    title: "Open Source, Commercial Support",
    description: "No vendor lock-in. The core platform is open source, so you can inspect, modify, and extend everything. When you need help, commercial support and consulting are available from certified partners.",
  },
  {
    title: "Plugin Ecosystem",
    description: "Connect to the tools you already use — CRMs (Salesforce, HubSpot), accounting software (Xero, QuickBooks), communication platforms (Slack, Teams, email), and hundreds more through the plugin marketplace.",
  },
];

const roiExamples = [
  {
    scenario: "10-Person Accountancy Firm",
    investment: "£4,500 setup + £350/month",
    savings: "£3,200/month in reduced admin time",
    payback: "6 weeks",
    details: "Automated bank reconciliation, client email triage, and VAT preparation. Two admin roles redeployed to advisory work.",
  },
  {
    scenario: "E-commerce Business (£2M revenue)",
    investment: "£6,000 setup + £500/month",
    savings: "£4,800/month in customer service costs",
    payback: "5 weeks",
    details: "AI agents handle 70% of customer queries. Reduced support team from 4 to 2 while improving response times.",
  },
  {
    scenario: "Recruitment Agency (15 consultants)",
    investment: "£8,000 setup + £600/month",
    savings: "£7,500/month in consultant time savings",
    payback: "4 weeks",
    details: "Automated CV screening, interview scheduling, and candidate updates. Each consultant handles 40% more roles.",
  },
];

const faqs = [
  {
    question: "How long does it take to deploy OpenClaw for a business?",
    answer: "A single-department deployment (e.g., customer service or finance) typically takes 2–4 weeks including configuration, integration, testing, and training. Multi-department rollouts are usually phased over 6–12 weeks. We start with the department that will see the fastest ROI, prove the value, then expand.",
  },
  {
    question: "Do we need technical staff to manage OpenClaw?",
    answer: "For day-to-day operations, no. Once deployed, OpenClaw agents run autonomously with monitoring dashboards accessible to non-technical staff. For changes to agent behaviour, integrations, or adding new capabilities, some technical knowledge helps — or you can work with a consultant on a retainer basis.",
  },
  {
    question: "Is OpenClaw suitable for small businesses?",
    answer: "Absolutely. OpenClaw's open-source core means no licensing fees, making it accessible for businesses of all sizes. A small business might start with a single agent handling customer queries or bookkeeping, then expand as they see results. The investment scales with your needs — you don't pay for capacity you're not using.",
  },
  {
    question: "How does OpenClaw compare to Microsoft Copilot?",
    answer: "Copilot Studio is excellent if you're fully embedded in the Microsoft ecosystem and want low-code convenience. OpenClaw wins on flexibility (works with any tech stack), data control (self-hosted), cost (no per-user licensing), and multi-agent orchestration (Copilot is primarily single-agent). For a detailed comparison, see our Best AI Agents 2026 guide.",
  },
  {
    question: "What happens if an OpenClaw agent makes a mistake?",
    answer: "Every agent action is logged and auditable. For critical operations, agents are configured with human-in-the-loop approval — they prepare the work but a human signs off before execution. If an error occurs, the audit trail makes it easy to identify what happened and adjust the agent's behaviour. Most clients also set spending and action limits as additional safety nets.",
  },
  {
    question: "Can OpenClaw integrate with our existing software?",
    answer: "Yes. OpenClaw has a plugin ecosystem covering major CRMs (Salesforce, HubSpot, Pipedrive), accounting platforms (Xero, QuickBooks, Sage), communication tools (Slack, Teams, email), e-commerce platforms (Shopify, WooCommerce), and more. Custom integrations for proprietary systems can be built using OpenClaw's API framework.",
  },
];

export default function OpenClawForBusinessPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient relative overflow-hidden min-h-[70vh] flex items-center grain">
        <div className="max-w-[1140px] mx-auto px-6 relative z-10 py-20">
          <div className="max-w-[720px]">
            <h1 className="font-heading text-4xl sm:text-5xl md:text-[3.2rem] font-extrabold text-white mb-6 leading-[1.05] tracking-tight">
              OpenClaw
              <br />
              <span className="text-orange">for Business</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl max-w-[540px] mb-10 leading-relaxed">
              How companies across the UK are using OpenClaw AI agents to automate operations, delight customers, and grow revenue — department by department.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#departments"
                className="inline-flex items-center justify-center bg-orange text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-orange-hover transition-all hover:-translate-y-0.5 shadow-glow-orange"
              >
                See Use Cases
              </a>
              <a
                href="/pricing"
                className="inline-flex items-center justify-center bg-white/10 text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-white/20 transition-all hover:-translate-y-0.5 border border-white/20"
              >
                View Pricing
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#fafbfc] to-transparent" />
      </section>

      {/* Why OpenClaw */}
      <section className="bg-white py-16">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Why Businesses Choose OpenClaw
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyOpenClaw.map((item, index) => (
              <div key={index} className="border-l-4 border-orange pl-6">
                <h3 className="font-heading font-bold text-xl text-dark mb-2">{item.title}</h3>
                <p className="text-muted text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments */}
      <section id="departments" className="bg-light py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              AI Agents by Department
            </h2>
            <p className="text-muted text-lg max-w-[600px] mx-auto">
              OpenClaw agents work across your entire organisation. Here&apos;s what they do in each department.
            </p>
          </div>

          <div className="space-y-8">
            {departments.map((dept, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-card">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
                  <div>
                    <div className="text-4xl mb-3">{dept.icon}</div>
                    <h3 className="font-heading font-bold text-xl text-dark mb-2">{dept.name}</h3>
                    <div className="text-orange font-semibold text-sm">{dept.roi}</div>
                  </div>

                  <div className="lg:col-span-3">
                    <p className="text-muted mb-4">{dept.description}</p>
                    <ul className="space-y-2">
                      {dept.useCases.map((useCase, i) => (
                        <li key={i} className="flex gap-2 items-start text-sm text-muted-dark">
                          <span className="text-orange mt-0.5 flex-shrink-0">•</span>
                          {useCase}
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

      {/* ROI Examples */}
      <section className="bg-white py-28">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Real ROI: What Businesses Are Seeing
            </h2>
            <p className="text-muted text-lg max-w-[600px] mx-auto">
              Numbers from actual UK deployments. Every business is different, but the pattern is consistent — fast payback and compounding returns.
            </p>
          </div>

          <div className="space-y-8">
            {roiExamples.map((example, index) => (
              <div key={index} className="bg-surface rounded-2xl p-8">
                <h3 className="font-heading font-bold text-xl text-dark mb-4">{example.scenario}</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div>
                    <h4 className="font-semibold text-orange text-sm mb-2">Investment</h4>
                    <p className="text-muted text-sm">{example.investment}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange text-sm mb-2">Monthly Savings</h4>
                    <p className="text-muted text-sm">{example.savings}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange text-sm mb-2">Payback Period</h4>
                    <p className="text-muted text-sm">{example.payback}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange text-sm mb-2">Details</h4>
                    <p className="text-muted text-sm">{example.details}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="/pricing"
              className="inline-flex items-center justify-center bg-orange text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-orange-hover transition-all hover:-translate-y-0.5 shadow-glow-orange"
            >
              See Our Pricing
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-light py-28">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              OpenClaw for Business: FAQs
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
      <section className="bg-white py-16">
        <div className="max-w-[1140px] mx-auto px-6 text-center">
          <h3 className="font-heading font-bold text-xl text-dark mb-4">About Blue Canvas</h3>
          <p className="text-muted max-w-[600px] mx-auto text-sm">
            Blue Canvas is a UK-based AI consultancy and certified OpenClaw deployment partner.
            Through <a href="https://bluecanvas.ai" className="text-orange hover:underline">Blue Canvas</a>, Phil Patterson helps
            businesses implement OpenClaw AI agents — from initial assessment through to production deployment and ongoing optimisation.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-navy text-white py-24 relative overflow-hidden grain">
        <div className="max-w-[1140px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Ready to Put
                <br />
                <span className="text-orange">OpenClaw to Work?</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Book a free consultation and we&apos;ll map out exactly how OpenClaw agents can transform your operations. We&apos;ll identify the highest-ROI department to start with and give you a clear implementation timeline.
              </p>
              <div className="space-y-3 text-white/60">
                <div className="flex items-center gap-3">
                  <span className="text-orange">✓</span>
                  Department-by-department opportunity assessment
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-orange">✓</span>
                  Custom ROI projection for your business
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-orange">✓</span>
                  Implementation roadmap and timeline
                </div>
              </div>
            </div>
            <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8">
              <h3 className="font-heading font-bold text-xl text-white mb-1">Book a Consultation</h3>
              <p className="text-white/60 text-sm mb-6">See how OpenClaw can work for your business</p>
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
            <a href="/guides/best-ai-agents-2026" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">Best AI Agents 2026</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/ai-agents-uk-guide" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">AI Agents UK: Complete Guide</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/ai-agent-vs-rpa" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">AI Agents vs RPA</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/how-to-build-ai-agent" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">How to Build an AI Agent</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
