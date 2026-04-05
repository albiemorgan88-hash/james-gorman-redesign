import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "AI Automation for Business UK: Practical Guide for 2026",
  description: "Practical guide to AI automation for UK businesses. Learn what to automate first, how much it costs, UK-specific considerations, GDPR compliance, and real ROI examples.",
  keywords: [
    "ai automation for business",
    "ai automation uk",
    "business automation ai",
    "ai for uk businesses",
    "ai automation guide uk",
    "business ai uk",
    "ai process automation",
    "ai automation roi"
  ],
  alternates: { canonical: "https://openclawconsultant.co.uk/guides/ai-automation-for-business-uk" },
  openGraph: {
    title: "AI Automation for Business UK: Practical Guide",
    description: "Practical guide to AI automation for UK businesses in 2026. What to automate, costs, and real ROI examples.",
    url: "https://openclawconsultant.co.uk/guides/ai-automation-for-business-uk",
    type: "article",
  },
};

const automationOpportunities = [
  {
    area: "Customer Communication",
    tasks: ["Email triage and routing", "First-response to enquiries", "Appointment scheduling", "Follow-up sequences"],
    timeSaved: "10-20 hours/week",
    costToAutomate: "£50-200/month",
    difficulty: "Easy — start here"
  },
  {
    area: "Financial Administration",
    tasks: ["Invoice processing", "Expense categorisation", "VAT calculation and MTD submission", "Cash flow monitoring"],
    timeSaved: "15-25 hours/week",
    costToAutomate: "£100-300/month",
    difficulty: "Medium — requires clean data"
  },
  {
    area: "Sales & Lead Management",
    tasks: ["Lead qualification", "CRM data entry", "Proposal generation", "Pipeline reporting"],
    timeSaved: "8-15 hours/week",
    costToAutomate: "£100-250/month",
    difficulty: "Medium — needs CRM integration"
  },
  {
    area: "HR & People Operations",
    tasks: ["CV screening", "Interview scheduling", "Onboarding checklists", "Policy Q&A"],
    timeSaved: "5-10 hours/week",
    costToAutomate: "£50-150/month",
    difficulty: "Easy to medium"
  },
  {
    area: "Reporting & Analytics",
    tasks: ["Weekly performance reports", "Client updates", "Compliance documentation", "Board packs"],
    timeSaved: "5-10 hours/week",
    costToAutomate: "£50-100/month",
    difficulty: "Easy — high impact, low risk"
  }
];

const ukConsiderations = [
  {
    topic: "GDPR and Data Protection",
    detail: "Any AI system processing personal data must comply with UK GDPR. Key requirements: lawful basis for processing, data minimisation, right to explanation for automated decisions, and Data Protection Impact Assessments (DPIAs) for high-risk processing. Self-hosted AI agents keep data under your control, simplifying compliance.",
    action: "Conduct a DPIA before deploying any AI agent that processes customer or employee personal data"
  },
  {
    topic: "Making Tax Digital (MTD)",
    detail: "HMRC's MTD programme requires digital record-keeping and submission for VAT, income tax, and corporation tax. AI agents can automate MTD compliance — maintaining digital records, calculating submissions, and filing through approved APIs.",
    action: "Check your accounting AI agent integrates with MTD-compatible software"
  },
  {
    topic: "Employment Law Implications",
    detail: "The UK's AI regulation approach is sector-specific rather than horizontal. For employment decisions (hiring, performance management), AI must be transparent and non-discriminatory. The Equality Act 2010 applies to AI-assisted decisions just as it does to human ones.",
    action: "Ensure any AI involved in hiring or people decisions has human oversight and audit trails"
  },
  {
    topic: "Insurance and Liability",
    detail: "Check your professional indemnity and public liability insurance covers AI-assisted decisions. Some insurers have specific exclusions or requirements for AI tools. The FCA has issued guidance for financial services firms using AI.",
    action: "Review insurance policies and discuss AI usage with your broker"
  }
];

const faqs = [
  {
    question: "How much does AI automation cost for a small UK business?",
    answer: "A small business (1-10 employees) can get meaningful AI automation running for £100-500/month. This typically covers 2-3 automated workflows — customer email handling, invoice processing, and report generation. Open-source platforms like OpenClaw have zero licensing fees, so you're mainly paying for hosting and LLM API calls. Implementation with a consultant costs £2,000-5,000 as a one-off setup."
  },
  {
    question: "Is AI automation GDPR compliant?",
    answer: "It can be, but compliance depends on implementation. Self-hosted solutions where data stays on your infrastructure are simplest. Cloud solutions need a data processing agreement and UK-adequate data residency. Key requirements: document your lawful basis, implement data minimisation, maintain audit logs, and allow for human review of automated decisions that significantly affect individuals."
  },
  {
    question: "What should I automate first?",
    answer: "Start with the task that's highest volume, most repetitive, and least risky if the AI makes a mistake. For most UK businesses, this is customer email triage or invoice processing. Avoid starting with customer-facing AI responses until you've built confidence internally. Our recommended sequence: internal admin → back-office processes → customer-facing automation."
  },
  {
    question: "Will AI automation make my employees redundant?",
    answer: "In our experience, no. Businesses typically use AI automation to handle the growing workload without hiring additional staff, or to free existing staff for higher-value work. A recruitment agency that automates CV screening doesn't fire its consultants — they make more placements because they spend less time on admin."
  },
  {
    question: "How does AI automation differ from traditional automation (like Zapier)?",
    answer: "Traditional automation follows rigid rules: 'if this, then that.' AI automation handles ambiguity — it can read an email, understand the intent, and decide the right action even if the email doesn't match a predefined template. AI agents combine the reliability of rule-based automation with the flexibility of human judgement. See our guide on AI agents vs RPA for a detailed comparison."
  },
  {
    question: "Do I need a developer to implement AI automation?",
    answer: "Not necessarily. Low-code platforms and consultants can handle most implementations. However, businesses with developers on staff can iterate faster and customise more deeply. The most common approach for UK SMEs: hire a consultant for initial setup, then manage day-to-day operations in-house."
  }
];

export default function AIAutomationForBusinessUKPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient relative overflow-hidden min-h-[70vh] flex items-center grain">
        <div className="max-w-[1140px] mx-auto px-6 relative z-10 py-20">
          <div className="max-w-[720px]">
            <h1 className="font-heading text-4xl sm:text-5xl md:text-[3.2rem] font-extrabold text-white mb-6 leading-[1.05] tracking-tight">
              AI Automation for
              <br />
              <span className="text-orange">UK Businesses</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl max-w-[540px] mb-10 leading-relaxed">
              A no-nonsense guide to AI automation for British businesses. What to automate, what it costs, and how to stay on the right side of UK regulations.
            </p>
            <a
              href="#opportunities"
              className="inline-flex items-center justify-center bg-orange text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-orange-hover transition-all hover:-translate-y-0.5 shadow-glow-orange"
            >
              See Automation Opportunities
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
              <div className="text-4xl font-bold text-orange mb-2">68%</div>
              <div className="text-muted">Of UK businesses plan to adopt AI by 2027</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange mb-2">£100</div>
              <div className="text-muted">Minimum monthly cost for meaningful automation</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange mb-2">4-8x</div>
              <div className="text-muted">Typical first-year ROI for UK SMEs</div>
            </div>
          </div>
        </div>
      </section>

      {/* Automation Opportunities */}
      <section id="opportunities" className="bg-light py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              What to Automate: Top Opportunities for UK Businesses
            </h2>
          </div>

          <div className="space-y-8">
            {automationOpportunities.map((opp, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-card">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
                  <div>
                    <h3 className="font-heading font-bold text-xl text-dark mb-3">{opp.area}</h3>
                    <div className="space-y-2 text-sm">
                      <div className="text-green-600 font-semibold">Saves: {opp.timeSaved}</div>
                      <div className="text-orange font-semibold">Cost: {opp.costToAutomate}</div>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-2">
                    <h4 className="font-semibold text-dark mb-3">Tasks to Automate:</h4>
                    <ul className="space-y-2">
                      {opp.tasks.map((task, i) => (
                        <li key={i} className="flex gap-2 items-start text-sm text-muted-dark">
                          <span className="text-orange mt-0.5 flex-shrink-0">•</span>
                          {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-dark mb-3">Difficulty:</h4>
                    <p className="text-muted text-sm">{opp.difficulty}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UK-Specific Considerations */}
      <section className="bg-white py-28">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              UK-Specific Considerations
            </h2>
            <p className="text-muted text-lg max-w-[600px] mx-auto">
              AI automation in the UK comes with specific regulatory and practical considerations that US-centric guides miss.
            </p>
          </div>

          <div className="max-w-[800px] mx-auto space-y-8">
            {ukConsiderations.map((item, index) => (
              <div key={index} className="border-l-4 border-orange pl-6">
                <h3 className="font-heading font-bold text-xl text-dark mb-2">{item.topic}</h3>
                <p className="text-muted mb-3">{item.detail}</p>
                <p className="text-orange font-semibold text-sm">Action: {item.action}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="bg-surface py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="max-w-[800px] mx-auto prose prose-lg text-muted">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-6 not-prose">
              Getting Started: A Practical Roadmap
            </h2>
            <p>
              <strong>Month 1: Audit and prioritise.</strong> Map your team&apos;s weekly tasks. Identify the top 3 time-consuming, repetitive processes. Calculate the cost of doing them manually.
            </p>
            <p>
              <strong>Month 2: Pilot one automation.</strong> Choose the easiest, lowest-risk task from your top 3. Deploy an AI agent, measure the results, and gather team feedback.
            </p>
            <p>
              <strong>Month 3: Expand and optimise.</strong> Based on your pilot results, deploy your second automation. Refine the first one based on real usage data.
            </p>
            <p>
              For platform guidance, see our <a href="/guides/ai-agent-tools-comparison" className="text-orange hover:underline">AI Agent Tools Comparison</a>. For industry-specific advice, check our <a href="/guides/ai-agent-use-cases" className="text-orange hover:underline">AI Agent Use Cases by Industry</a> guide. And if you want to understand the technology first, start with <a href="/guides/ai-agents-explained" className="text-orange hover:underline">AI Agents Explained</a>.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-28">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              AI Automation for Business UK: FAQs
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
            Blue Canvas is a UK-based AI consultancy helping British businesses automate intelligently. Based in Derry, Northern Ireland, 
            <a href="https://bluecanvas.ai" className="text-orange hover:underline"> Blue Canvas</a> works with SMEs across the UK to implement AI automation that delivers real, measurable results.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-navy text-white py-24 relative overflow-hidden grain">
        <div className="max-w-[1140px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Ready to Automate
                <br />
                <span className="text-orange">Your UK Business?</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Free consultation to audit your current processes, identify the best automation opportunities, and outline a practical implementation plan.
              </p>
              <div className="space-y-3 text-white/60">
                <div className="flex items-center gap-3">
                  <span className="text-orange">✓</span>
                  Process audit and automation mapping
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-orange">✓</span>
                  UK-specific compliance guidance
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-orange">✓</span>
                  ROI estimate and implementation timeline
                </div>
              </div>
            </div>
            <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8">
              <h3 className="font-heading font-bold text-xl text-white mb-1">AI Automation Consultation</h3>
              <p className="text-white/60 text-sm mb-6">Get a practical automation plan for your UK business</p>
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
            <a href="/guides/ai-agents-uk-guide" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">AI Agents UK: Complete Guide</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/ai-agent-vs-rpa" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">AI Agents vs RPA</h3>
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
