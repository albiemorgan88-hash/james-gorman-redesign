import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "AI Agents vs RPA: Which Automation Is Right for You? (2026)",
  description: "AI agents vs RPA — comprehensive comparison. Pros, cons, costs, and when each automation approach is best for your business. Decision framework included.",
  keywords: [
    "ai agents vs rpa",
    "ai agent vs robotic process automation",
    "rpa vs ai agents",
    "ai automation vs rpa",
    "intelligent automation vs rpa",
    "ai agents or rpa",
    "automation comparison",
    "rpa replacement"
  ],
  alternates: { canonical: "https://openclawconsultant.co.uk/guides/ai-agent-vs-rpa" },
  openGraph: {
    title: "AI Agents vs RPA: Which Automation Is Right for You? (2026)",
    description: "AI agents vs RPA — comprehensive comparison. Pros, cons, costs, and when each is best for your business.",
    url: "https://openclawconsultant.co.uk/guides/ai-agent-vs-rpa",
    type: "article",
  },
};

const comparisonRows = [
  {
    factor: "How It Works",
    aiAgent: "Uses LLMs to understand context, reason about tasks, and make decisions dynamically",
    rpa: "Follows pre-programmed rules to mimic human actions on screen — click here, type there, copy this",
  },
  {
    factor: "Handling Change",
    aiAgent: "Adapts to new situations — if a form layout changes or data format varies, agents figure it out",
    rpa: "Breaks when anything changes — a moved button, a renamed field, or a new pop-up stops execution",
  },
  {
    factor: "Unstructured Data",
    aiAgent: "Excels at processing emails, documents, images, and natural language without rigid templates",
    rpa: "Struggles with unstructured data — needs everything in predictable, structured formats",
  },
  {
    factor: "Decision Making",
    aiAgent: "Can reason about ambiguous situations, weigh options, and make judgment calls within parameters",
    rpa: "Follows if/then rules only — no capacity for nuance, context, or exception handling beyond scripts",
  },
  {
    factor: "Setup Complexity",
    aiAgent: "Moderate — requires defining goals, tools, and guardrails. Less brittle but more thought upfront",
    rpa: "Lower for simple tasks — record macro-like sequences. Gets exponentially complex for edge cases",
  },
  {
    factor: "Maintenance",
    aiAgent: "Lower ongoing maintenance — agents adapt to minor changes without reprogramming",
    rpa: "High maintenance — UI changes, system updates, and edge cases require constant bot fixing",
  },
  {
    factor: "Cost Structure",
    aiAgent: "LLM API costs per interaction + hosting. Costs scale with usage but decrease as models get cheaper",
    rpa: "Licence fees (£5,000–50,000/year per bot) + developer time for building and maintaining automations",
  },
  {
    factor: "Best For",
    aiAgent: "Complex, variable, language-heavy, judgment-required tasks across multiple systems",
    rpa: "High-volume, perfectly structured, never-changing, rule-based processes",
  },
];

const aiAgentPros = [
  "Handles unstructured data — emails, PDFs, images, natural language",
  "Adapts to changes without reprogramming",
  "Makes contextual decisions, not just following rules",
  "Learns and improves from interactions over time",
  "Works across multiple systems without screen-scraping fragility",
  "Lower maintenance costs as processes evolve",
  "Natural language interface — non-technical users can instruct agents",
];

const aiAgentCons = [
  "LLM costs per interaction (though declining rapidly)",
  "Less predictable than rule-based systems — needs guardrails",
  "Newer technology — smaller talent pool and fewer established vendors",
  "Requires thoughtful safety design for high-stakes processes",
  "Can hallucinate or make unexpected decisions without proper constraints",
];

const rpaPros = [
  "Highly predictable — does exactly what it's told, every time",
  "Mature technology with established vendors (UiPath, Automation Anywhere, Blue Prism)",
  "No per-interaction LLM costs",
  "Large talent pool of RPA developers",
  "Excellent for high-volume, perfectly structured processes",
  "Clear audit trail — every step is scripted and logged",
];

const rpaCons = [
  "Extremely brittle — breaks when UIs or processes change",
  "High maintenance burden (30–50% of RPA budgets go to fixing broken bots)",
  "Cannot handle unstructured data or natural language",
  "No decision-making ability beyond pre-programmed rules",
  "Expensive licensing (£5,000–50,000+ per bot per year)",
  "Screen-scraping approach creates fragile integrations",
  "Limited ROI on complex processes with many exceptions",
];

const scenarios = [
  {
    scenario: "Processing invoices from multiple suppliers in different formats",
    winner: "AI Agent",
    reason: "Invoice formats vary wildly. AI agents understand document structure regardless of layout. RPA would need a separate template for every supplier.",
  },
  {
    scenario: "Transferring exactly 500 rows from System A to System B nightly",
    winner: "RPA (or simple ETL)",
    reason: "Perfectly structured, never-changing, rule-based task. RPA's predictability is ideal. An AI agent would be overkill.",
  },
  {
    scenario: "Responding to customer emails about orders",
    winner: "AI Agent",
    reason: "Email content varies infinitely. AI agents understand context, extract order numbers, check status, and compose appropriate responses.",
  },
  {
    scenario: "Monthly data entry from a standardised government form",
    winner: "RPA",
    reason: "Fixed format, predictable fields, same form every time. RPA handles this reliably and the form rarely changes.",
  },
  {
    scenario: "Qualifying sales leads from inbound enquiries",
    winner: "AI Agent",
    reason: "Lead qualification requires understanding context, company research, and judgment about fit. No two enquiries are alike.",
  },
  {
    scenario: "Reconciling bank transactions with accounting records",
    winner: "AI Agent (with human review)",
    reason: "Transaction descriptions are messy and inconsistent. AI agents match based on understanding, not exact string matching.",
  },
  {
    scenario: "Generating reports from a single, well-structured database",
    winner: "Neither — use a BI tool",
    reason: "For structured reporting from a single source, dedicated BI tools are more appropriate than either AI agents or RPA.",
  },
];

const costComparison = [
  {
    item: "Initial Setup",
    aiAgent: "£3,000–15,000",
    rpa: "£10,000–50,000",
  },
  {
    item: "Annual Licensing",
    aiAgent: "£0–5,000",
    rpa: "£5,000–50,000 per bot",
  },
  {
    item: "Running Costs (monthly)",
    aiAgent: "£30–500",
    rpa: "£200–2,000",
  },
  {
    item: "Maintenance (hours/month)",
    aiAgent: "2–4 hours",
    rpa: "8–20 hours",
  },
  {
    item: "Total Year 1 Cost (typical SME)",
    aiAgent: "£5,000–20,000",
    rpa: "£20,000–80,000",
  },
];

const futureTrends = [
  {
    title: "Convergence: Intelligent Automation",
    description: "The line between AI agents and RPA is blurring. Major RPA vendors are adding AI capabilities, while AI agent platforms incorporate structured automation. By 2027, the distinction may matter less than the specific capabilities you need.",
  },
  {
    title: "RPA as a Tool Within AI Agent Systems",
    description: "The emerging pattern is AI agents that use RPA-style tools when needed. An AI agent makes intelligent decisions about what to do, then uses structured automation to execute specific screen-based tasks. RPA becomes a tool in the agent's toolkit.",
  },
  {
    title: "LLM Costs Approaching Zero",
    description: "LLM inference costs have dropped 90%+ since 2023 and continue falling. This removes the primary cost concern about AI agents and erodes RPA's cost advantage entirely.",
  },
  {
    title: "API-First Integration Replacing Screen Scraping",
    description: "As more business software offers robust APIs, the screen-scraping approach that defines RPA becomes less necessary. AI agents interact via APIs natively — the businesses still needing screen-scraping are those stuck with legacy software.",
  },
];

const faqs = [
  {
    question: "Is RPA dead?",
    answer: "Not dead, but evolving. RPA still has a place for high-volume, perfectly structured, unchanging processes. However, the traditional RPA market is shrinking as AI agents handle more use cases at lower cost with less maintenance. The smart RPA vendors are pivoting to 'intelligent automation' by adding AI capabilities. Pure play RPA — screen-scraping rule-following bots — is increasingly being replaced.",
  },
  {
    question: "Can AI agents replace all our existing RPA bots?",
    answer: "Not necessarily all of them. If you have stable RPA bots running with low maintenance costs, there's no urgent reason to replace them. Focus AI agent replacement on: bots that break frequently, bots handling unstructured data poorly, and bots with significant maintenance overhead. Replace the painful ones first, leave the stable ones running.",
  },
  {
    question: "Which is more secure — AI agents or RPA?",
    answer: "Both can be highly secure when properly implemented. RPA bots need stored credentials for every system, creating credential management challenges. AI agents can use API tokens with limited scopes. Self-hosted AI agents like OpenClaw keep all data on your infrastructure. The bigger security question is human oversight — AI agents need guardrails to prevent unintended actions.",
  },
  {
    question: "How long does it take to migrate from RPA to AI agents?",
    answer: "Migrating a single RPA bot typically takes 1–3 weeks including testing. A full migration across multiple bots runs 2–6 months. Most businesses migrate the most problematic bots first and run both systems in parallel. A phased approach reduces risk and lets you validate results before committing fully.",
  },
  {
    question: "Can AI agents and RPA work together?",
    answer: "Yes, and this is often the best approach for businesses with existing RPA investments. AI agents handle intelligent decision-making and unstructured data, then trigger RPA bots for specific screen-based tasks on legacy systems. This 'intelligent automation' approach combines the strengths of both technologies.",
  },
  {
    question: "What should I automate first — with AI agents or RPA?",
    answer: "Start with the task that causes the most pain and has the clearest ROI. If it involves structured data and never changes — RPA or a simple script might suffice. If it involves judgment, natural language, or variable inputs — AI agents are the way to go. The best first project is one where success is easy to measure and the team is motivated to adopt.",
  },
];

export default function AIAgentVsRPAPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient relative overflow-hidden min-h-[70vh] flex items-center grain">
        <div className="max-w-[1140px] mx-auto px-6 relative z-10 py-20">
          <div className="max-w-[720px]">
            <h1 className="font-heading text-4xl sm:text-5xl md:text-[3.2rem] font-extrabold text-white mb-6 leading-[1.05] tracking-tight">
              AI Agents vs RPA
              <br />
              <span className="text-orange">Which Is Right for You?</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl max-w-[540px] mb-10 leading-relaxed">
              The honest comparison. When AI agents win, when RPA still makes sense, and how to choose the right automation for your business.
            </p>
            <a
              href="#comparison"
              className="inline-flex items-center justify-center bg-orange text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-orange-hover transition-all hover:-translate-y-0.5 shadow-glow-orange"
            >
              See the Comparison
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
              <div className="text-4xl font-bold text-orange mb-2">40%</div>
              <div className="text-muted">of RPA projects fail to deliver expected ROI</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange mb-2">30–50%</div>
              <div className="text-muted">of RPA budgets spent on maintenance</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange mb-2">90%+</div>
              <div className="text-muted">drop in LLM costs since 2023</div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Context */}
      <section className="bg-surface py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              The Short Version
            </h2>
          </div>
          <div className="max-w-[800px] mx-auto prose prose-lg text-muted">
            <p>
              <strong>RPA</strong> (Robotic Process Automation) automates structured, repetitive tasks by mimicking human actions — clicking buttons, copying data between fields, filling forms. It&apos;s been the go-to business automation for a decade.
            </p>
            <p>
              <strong>AI agents</strong> use large language models to understand context, reason about problems, and take intelligent action. They handle unstructured data, adapt to changes, and make decisions — capabilities that RPA fundamentally lacks.
            </p>
            <p>
              The real question isn&apos;t &ldquo;which is better?&rdquo; — it&apos;s &ldquo;which is right for <em>your</em> specific processes?&rdquo; Sometimes the answer is AI agents. Sometimes it&apos;s RPA. Sometimes it&apos;s both. And sometimes it&apos;s neither — a simple API integration might be all you need.
            </p>
            <p>
              For a primer on AI agents, see our <a href="/guides/ai-agents-explained" className="text-orange hover:underline">AI Agents Explained</a> guide. For platform options, check <a href="/guides/best-ai-agents-2026" className="text-orange hover:underline">Best AI Agents 2026</a>.
            </p>
          </div>
        </div>
      </section>

      {/* Side-by-Side Comparison Table */}
      <section id="comparison" className="bg-light py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              AI Agents vs RPA: Head-to-Head
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b-2 border-orange/20">
                  <th className="py-4 px-4 font-heading font-bold text-dark w-1/5">Factor</th>
                  <th className="py-4 px-4 font-heading font-bold text-dark w-2/5">AI Agents</th>
                  <th className="py-4 px-4 font-heading font-bold text-dark w-2/5">RPA</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, index) => (
                  <tr key={index} className="border-b border-border-light">
                    <td className="py-4 px-4 font-semibold text-dark">{row.factor}</td>
                    <td className="py-4 px-4 text-muted">{row.aiAgent}</td>
                    <td className="py-4 px-4 text-muted">{row.rpa}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Pros and Cons */}
      <section className="bg-white py-28">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Pros and Cons
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-surface rounded-2xl p-8">
              <h3 className="font-heading font-bold text-2xl text-dark mb-6">AI Agents</h3>
              <div className="mb-6">
                <h4 className="font-semibold text-orange mb-3">Pros</h4>
                <ul className="space-y-2">
                  {aiAgentPros.map((pro, i) => (
                    <li key={i} className="flex gap-2 items-start text-sm text-muted-dark">
                      <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-orange mb-3">Cons</h4>
                <ul className="space-y-2">
                  {aiAgentCons.map((con, i) => (
                    <li key={i} className="flex gap-2 items-start text-sm text-muted-dark">
                      <span className="text-red-400 mt-0.5 flex-shrink-0">✗</span>
                      {con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-surface rounded-2xl p-8">
              <h3 className="font-heading font-bold text-2xl text-dark mb-6">RPA</h3>
              <div className="mb-6">
                <h4 className="font-semibold text-orange mb-3">Pros</h4>
                <ul className="space-y-2">
                  {rpaPros.map((pro, i) => (
                    <li key={i} className="flex gap-2 items-start text-sm text-muted-dark">
                      <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-orange mb-3">Cons</h4>
                <ul className="space-y-2">
                  {rpaCons.map((con, i) => (
                    <li key={i} className="flex gap-2 items-start text-sm text-muted-dark">
                      <span className="text-red-400 mt-0.5 flex-shrink-0">✗</span>
                      {con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* When Each Is Best */}
      <section className="bg-surface py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Real Scenarios: Which Wins?
            </h2>
            <p className="text-muted text-lg max-w-[600px] mx-auto">
              Practical examples to help you decide which approach fits your specific processes.
            </p>
          </div>

          <div className="space-y-6">
            {scenarios.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-card">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-start">
                  <div className="md:col-span-2">
                    <h3 className="font-heading font-bold text-dark mb-1">{item.scenario}</h3>
                  </div>
                  <div>
                    <span className="inline-block bg-orange/10 text-orange px-3 py-1 rounded-full text-sm font-semibold">
                      {item.winner}
                    </span>
                  </div>
                  <div>
                    <p className="text-muted text-sm">{item.reason}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Comparison */}
      <section className="bg-white py-28">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Cost Comparison
            </h2>
            <p className="text-muted text-lg max-w-[600px] mx-auto">
              Typical costs for a UK SME automating a single business process.
            </p>
          </div>

          <div className="overflow-x-auto max-w-[800px] mx-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b-2 border-orange/20">
                  <th className="py-4 px-4 font-heading font-bold text-dark">Cost Item</th>
                  <th className="py-4 px-4 font-heading font-bold text-dark">AI Agents</th>
                  <th className="py-4 px-4 font-heading font-bold text-dark">RPA</th>
                </tr>
              </thead>
              <tbody>
                {costComparison.map((row, index) => (
                  <tr key={index} className="border-b border-border-light">
                    <td className="py-4 px-4 font-semibold text-dark">{row.item}</td>
                    <td className="py-4 px-4 text-muted">{row.aiAgent}</td>
                    <td className="py-4 px-4 text-muted">{row.rpa}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-muted text-sm mt-6 text-center">
            For detailed AI agent pricing, see our <a href="/pricing" className="text-orange hover:underline">pricing page</a>.
          </p>
        </div>
      </section>

      {/* Future Trends */}
      <section className="bg-light py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Future Trends: Where Automation Is Heading
            </h2>
          </div>
          <div className="max-w-[800px] mx-auto space-y-8">
            {futureTrends.map((trend, index) => (
              <div key={index} className="border-l-4 border-orange pl-6">
                <h3 className="font-heading font-bold text-xl text-dark mb-2">{trend.title}</h3>
                <p className="text-muted">{trend.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-28">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              AI Agents vs RPA: FAQs
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
            Blue Canvas is a UK-based AI consultancy specialising in agent deployment and automation strategy.
            Through <a href="https://bluecanvas.ai" className="text-orange hover:underline">Blue Canvas</a>, Phil Patterson helps
            businesses evaluate their automation options — whether AI agents, RPA, or a combination — and implement the right solution for measurable results.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-navy text-white py-24 relative overflow-hidden grain">
        <div className="max-w-[1140px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Not Sure Which
                <br />
                <span className="text-orange">Automation Approach to Choose?</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Book a free consultation and we&apos;ll assess your specific processes, recommend the right approach — AI agents, RPA, or hybrid — and outline an implementation plan.
              </p>
              <div className="space-y-3 text-white/60">
                <div className="flex items-center gap-3">
                  <span className="text-orange">✓</span>
                  Process-by-process automation assessment
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-orange">✓</span>
                  Honest recommendation — AI agents, RPA, or neither
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-orange">✓</span>
                  Cost comparison for your specific use case
                </div>
              </div>
            </div>
            <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8">
              <h3 className="font-heading font-bold text-xl text-white mb-1">Automation Consultation</h3>
              <p className="text-white/60 text-sm mb-6">Get expert advice on choosing the right automation</p>
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
            <a href="/guides/ai-agents-explained" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">AI Agents Explained</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/best-ai-agents-2026" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">Best AI Agents 2026</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/openclaw-for-business" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">OpenClaw for Business</h3>
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
