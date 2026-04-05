import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "AI Agent Examples: 15 Real-World Use Cases in 2026",
  description: "15 real-world AI agent examples across customer service, sales, finance, HR, and operations. See how UK businesses are using AI agents to automate work in 2026.",
  keywords: [
    "ai agent examples",
    "ai agent use cases",
    "ai agent real world examples",
    "ai automation examples",
    "ai agent business examples",
    "ai agent case studies",
    "ai agents in practice",
    "ai agent implementations"
  ],
  alternates: { canonical: "https://openclawconsultant.co.uk/guides/ai-agent-examples" },
  openGraph: {
    title: "AI Agent Examples: 15 Real-World Use Cases in 2026",
    description: "15 real-world AI agent examples across customer service, sales, finance, HR, and operations.",
    url: "https://openclawconsultant.co.uk/guides/ai-agent-examples",
    type: "article",
  },
};

const examples = [
  {
    category: "Customer Service",
    items: [
      {
        name: "Intelligent Ticket Triage",
        description: "An AI agent reads every incoming support ticket, categorises it by urgency and topic, and routes it to the right team member — with a suggested response draft attached.",
        impact: "60% faster first response time",
        tools: "OpenClaw + Zendesk/Freshdesk integration"
      },
      {
        name: "Multilingual Support Agent",
        description: "Handles customer queries in 12+ languages without needing native speakers on staff. Detects the customer's language, responds naturally, and escalates complex issues to a human with a full translation of the conversation.",
        impact: "Serve international customers 24/7 without language barriers",
        tools: "GPT-4o + custom routing logic"
      },
      {
        name: "Proactive Churn Prevention",
        description: "Monitors customer behaviour patterns — declining logins, missed renewals, negative sentiment in emails — and triggers personalised retention outreach before the customer leaves.",
        impact: "23% reduction in churn rate",
        tools: "OpenClaw + CRM data + email automation"
      }
    ]
  },
  {
    category: "Sales & Marketing",
    items: [
      {
        name: "Lead Qualification Agent",
        description: "Engages website visitors in real time, asks qualifying questions, scores leads based on your ideal customer profile, and books meetings directly into your sales team's calendars.",
        impact: "3x more qualified meetings booked",
        tools: "OpenClaw + CRM + calendar integration"
      },
      {
        name: "Competitor Intelligence Monitor",
        description: "Continuously scans competitor websites, social media, review sites, and press releases. Flags pricing changes, new features, and positioning shifts with a daily summary.",
        impact: "Always know what competitors are doing — without manual checking",
        tools: "Web scraping agents + summarisation"
      },
      {
        name: "Personalised Email Sequences",
        description: "Generates unique email content for each prospect based on their company, role, recent activity, and industry. Not templates with mail merge — genuinely personalised outreach.",
        impact: "42% higher open rates vs template-based sequences",
        tools: "OpenClaw + email platform integration"
      }
    ]
  },
  {
    category: "Finance & Operations",
    items: [
      {
        name: "Invoice Processing Pipeline",
        description: "Reads incoming invoices (PDF, email, paper scans), extracts line items, validates against purchase orders, codes to the correct nominal accounts, and queues for approval.",
        impact: "85% reduction in manual data entry",
        tools: "OCR + OpenClaw + accounting software API"
      },
      {
        name: "Expense Report Auditor",
        description: "Reviews every expense claim against company policy — checking receipt validity, spending limits, duplicate claims, and unusual patterns. Flags violations before approval.",
        impact: "97% compliance rate, zero manual reviews for routine claims",
        tools: "Document analysis + policy rules engine"
      },
      {
        name: "Cash Flow Forecasting",
        description: "Analyses historical payment patterns, current invoices outstanding, and seasonal trends to predict cash flow 30, 60, and 90 days ahead. Alerts when potential shortfalls are detected.",
        impact: "Accurate forecasting without spreadsheet gymnastics",
        tools: "Financial data agent + predictive modelling"
      }
    ]
  },
  {
    category: "HR & Recruitment",
    items: [
      {
        name: "CV Screening Agent",
        description: "Reads applications, scores them against the job specification, identifies standout candidates, and generates a shortlist with reasoning. Removes bias by focusing on skills and experience rather than demographic signals.",
        impact: "80% less time screening CVs, more diverse shortlists",
        tools: "Document analysis + scoring framework"
      },
      {
        name: "Employee Onboarding Orchestrator",
        description: "Coordinates the entire onboarding process — sending welcome packs, scheduling introductions, provisioning system access, assigning training modules, and checking in at day 7, 30, and 90.",
        impact: "New starters fully onboarded 3x faster",
        tools: "OpenClaw multi-agent orchestration"
      },
      {
        name: "Policy Q&A Agent",
        description: "Answers employee questions about policies, benefits, leave entitlement, and procedures by searching the company handbook and HR documents. Escalates ambiguous queries to HR.",
        impact: "70% fewer routine HR queries",
        tools: "RAG (retrieval-augmented generation) on company docs"
      }
    ]
  },
  {
    category: "Technical & IT",
    items: [
      {
        name: "Infrastructure Monitor",
        description: "Watches server metrics, application logs, and network traffic. Detects anomalies before they cause outages, runs basic troubleshooting scripts, and pages the on-call engineer with diagnosis notes.",
        impact: "45% faster incident response, fewer false alarms",
        tools: "Monitoring APIs + diagnostic agents"
      },
      {
        name: "Code Review Assistant",
        description: "Reviews pull requests for bugs, security vulnerabilities, style inconsistencies, and performance issues. Provides specific, actionable feedback — not generic suggestions.",
        impact: "30% fewer bugs reaching production",
        tools: "Git integration + code analysis agent"
      },
      {
        name: "Documentation Generator",
        description: "Analyses codebases, APIs, and internal systems, then generates and maintains up-to-date documentation. Flags when code changes make existing docs outdated.",
        impact: "Documentation that actually stays current",
        tools: "Code parsing + technical writing agent"
      }
    ]
  }
];

const faqs = [
  {
    question: "Are these AI agent examples real or theoretical?",
    answer: "Every example on this page is either something we've deployed for clients or a well-documented implementation from the AI agent community. We've deliberately excluded speculative use cases that aren't proven in production. For industry-specific implementations, see our guides on AI agents for accountants, solicitors, and recruitment agencies."
  },
  {
    question: "How much does it cost to implement these AI agent examples?",
    answer: "Costs vary by complexity. Simple agents like email triage or FAQ answering can be running for under £100/month. Multi-agent systems like full onboarding orchestration typically cost £500-2,000/month including LLM API costs. The ROI usually pays for itself within 1-3 months. See our pricing page for specific implementation costs."
  },
  {
    question: "Which AI agent example should I start with?",
    answer: "Start with the task that eats the most time and has the most predictable patterns. For most businesses, that's customer service triage, invoice processing, or lead qualification. Pick one, prove the value, then expand. Trying to automate everything at once is the most common mistake we see."
  },
  {
    question: "Can AI agents handle sensitive business data safely?",
    answer: "Yes, with proper implementation. Self-hosted solutions like OpenClaw keep all data on your infrastructure. Cloud-based agents use encryption in transit and at rest. The key is choosing a platform with proper access controls, audit logging, and GDPR compliance. Read our AI agent security guide for details."
  },
  {
    question: "How do AI agents compare to hiring more staff?",
    answer: "An AI agent handling invoice processing costs roughly £50-100/month and works 24/7. A finance assistant costs £25,000+/year. But agents can't replace judgement, relationship-building, or creative problem-solving. The best approach is usually: automate the repetitive 80%, free your people for the high-value 20%."
  },
  {
    question: "Do AI agents work with legacy systems?",
    answer: "In most cases, yes. If the system has an API, agents can interact with it directly. If not, agents can use screen scraping, email integration, or file-based import/export as fallbacks. We've successfully connected AI agents to 20-year-old ERP systems that didn't even have web interfaces."
  }
];

export default function AIAgentExamplesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient relative overflow-hidden min-h-[70vh] flex items-center grain">
        <div className="max-w-[1140px] mx-auto px-6 relative z-10 py-20">
          <div className="max-w-[720px]">
            <h1 className="font-heading text-4xl sm:text-5xl md:text-[3.2rem] font-extrabold text-white mb-6 leading-[1.05] tracking-tight">
              AI Agent Examples:
              <br />
              <span className="text-orange">15 Real-World Use Cases</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl max-w-[540px] mb-10 leading-relaxed">
              Not theory. Not hype. Fifteen proven AI agent implementations that UK businesses are running right now — with real results and real numbers.
            </p>
            <a
              href="#examples"
              className="inline-flex items-center justify-center bg-orange text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-orange-hover transition-all hover:-translate-y-0.5 shadow-glow-orange"
            >
              See the Examples
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
              <div className="text-4xl font-bold text-orange mb-2">15</div>
              <div className="text-muted">Proven use cases</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange mb-2">5</div>
              <div className="text-muted">Business areas covered</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange mb-2">80%+</div>
              <div className="text-muted">Average time savings reported</div>
            </div>
          </div>
        </div>
      </section>

      {/* Examples by Category */}
      <section id="examples" className="bg-light py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          {examples.map((category, catIndex) => (
            <div key={catIndex} className="mb-16 last:mb-0">
              <h2 className="font-heading text-3xl font-bold text-dark mb-8">{category.category}</h2>
              <div className="space-y-6">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="bg-white rounded-2xl p-8 shadow-card">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
                      <div>
                        <h3 className="font-heading font-bold text-xl text-dark mb-2">{item.name}</h3>
                        <div className="text-orange font-semibold text-sm">{item.impact}</div>
                      </div>
                      <div className="lg:col-span-2">
                        <p className="text-muted text-sm">{item.description}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-dark mb-2">Built With:</h4>
                        <p className="text-muted text-sm">{item.tools}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Getting Started */}
      <section className="bg-white py-28">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="max-w-[800px] mx-auto prose prose-lg text-muted">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-6 not-prose">
              Where to Start With AI Agents
            </h2>
            <p>
              If you&apos;re looking at these examples and wondering which one to try first, here&apos;s our recommendation: <strong>start with the task your team complains about most</strong>.
            </p>
            <p>
              The best AI agent implementations aren&apos;t the most technically impressive — they&apos;re the ones that remove the most pain. If your team spends hours sorting emails, start there. If invoice processing is a nightmare, automate that.
            </p>
            <p>
              For a broader view of which platform suits your needs, check our <a href="/guides/best-ai-agents-2026" className="text-orange hover:underline">Best AI Agents 2026</a> comparison. If you&apos;re new to the concept, our <a href="/guides/ai-agents-explained" className="text-orange hover:underline">AI Agents Explained</a> guide covers the fundamentals. And for industry-specific guidance, we have dedicated guides for <a href="/guides/ai-agents-for-accountants" className="text-orange hover:underline">accountants</a>, <a href="/guides/ai-agents-for-solicitors" className="text-orange hover:underline">solicitors</a>, <a href="/guides/ai-agents-for-recruitment" className="text-orange hover:underline">recruitment agencies</a>, and <a href="/guides/ai-agents-for-ecommerce" className="text-orange hover:underline">e-commerce businesses</a>.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-surface py-28">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              AI Agent Examples: FAQs
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
            Blue Canvas deploys AI agent solutions for UK businesses. Through <a href="https://bluecanvas.ai" className="text-orange hover:underline">Blue Canvas</a>, Phil Patterson 
            turns these examples into reality — helping businesses identify the right use case, choose the right platform, and go live with confidence.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-navy text-white py-24 relative overflow-hidden grain">
        <div className="max-w-[1140px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Want to Implement
                <br />
                <span className="text-orange">One of These Examples?</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Book a free consultation and we&apos;ll map these examples to your specific business, estimate the ROI, and outline exactly how to get started.
              </p>
              <div className="space-y-3 text-white/60">
                <div className="flex items-center gap-3">
                  <span className="text-orange">✓</span>
                  Identify your highest-ROI automation opportunity
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-orange">✓</span>
                  Custom implementation plan for your business
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-orange">✓</span>
                  Realistic timeline and cost estimate
                </div>
              </div>
            </div>
            <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8">
              <h3 className="font-heading font-bold text-xl text-white mb-1">AI Agent Consultation</h3>
              <p className="text-white/60 text-sm mb-6">Find the right AI agent for your business</p>
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
            <a href="/guides/ai-agent-use-cases" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">AI Agent Use Cases by Industry</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/best-ai-agents-2026" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">Best AI Agents 2026</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/ai-agents-explained" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">AI Agents Explained</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/ai-agent-tools-comparison" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">AI Agent Tools Comparison</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
