import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "How to Build an AI Agent: Step-by-Step Guide (2026)",
  description: "Learn how to build an AI agent from scratch. Step-by-step tutorial covering architecture, tools (OpenClaw, LangChain, CrewAI), and when to DIY vs hire a consultant.",
  keywords: [
    "how to build an ai agent",
    "build ai agent",
    "ai agent tutorial",
    "create ai agent",
    "ai agent development",
    "ai agent architecture",
    "build ai agent step by step",
    "ai agent tools"
  ],
  alternates: { canonical: "https://openclawconsultant.co.uk/guides/how-to-build-ai-agent" },
  openGraph: {
    title: "How to Build an AI Agent: Step-by-Step Guide (2026)",
    description: "Learn how to build an AI agent from scratch. Step-by-step tutorial covering architecture, tools, and when to DIY vs hire a consultant.",
    url: "https://openclawconsultant.co.uk/guides/how-to-build-ai-agent",
    type: "article",
  },
};

const steps = [
  {
    number: "01",
    title: "Define Your Agent's Purpose",
    description: "Every successful AI agent starts with a clear mission. What specific problem will it solve? What decisions will it make? What systems does it need to access?",
    details: [
      "Write a one-sentence mission statement for your agent",
      "List the inputs it needs and outputs it produces",
      "Define success criteria — how will you know it's working?",
      "Map the human workflow it will automate or augment",
    ],
  },
  {
    number: "02",
    title: "Choose Your Architecture",
    description: "AI agents range from simple ReAct loops to complex multi-agent orchestrations. Your architecture choice depends on task complexity and reliability requirements.",
    details: [
      "Single agent with tools — best for straightforward automation",
      "Chain-of-thought agent — for multi-step reasoning tasks",
      "Multi-agent system — when different specialisations are needed",
      "Human-in-the-loop — for high-stakes decisions requiring approval",
    ],
  },
  {
    number: "03",
    title: "Select Your Tools and Framework",
    description: "The framework you choose determines your development speed, flexibility, and production readiness. Here are the leading options in 2026.",
    details: [
      "OpenClaw — production-ready multi-agent orchestration, self-hosted",
      "LangChain / LangGraph — flexible Python framework for stateful agents",
      "CrewAI — role-based agent teams with intuitive design",
      "Custom build — maximum control, highest development cost",
    ],
  },
  {
    number: "04",
    title: "Design Your Tool Kit",
    description: "Agents are only as powerful as the tools they can use. Design a curated set of tools that give your agent the capabilities it needs — and nothing more.",
    details: [
      "API integrations — connect to your CRM, ERP, and databases",
      "Web tools — search, scrape, and interact with websites",
      "File tools — read, write, and process documents",
      "Communication tools — send emails, messages, and notifications",
    ],
  },
  {
    number: "05",
    title: "Implement Safety Guardrails",
    description: "Before your agent touches production data, you need robust safety measures. This is where most DIY projects go wrong.",
    details: [
      "Input validation — prevent prompt injection and malicious inputs",
      "Action limits — cap spending, API calls, and destructive operations",
      "Audit logging — record every decision and action for review",
      "Human escalation — define when the agent must ask for help",
    ],
  },
  {
    number: "06",
    title: "Test, Deploy, and Monitor",
    description: "Deployment is just the beginning. Production agents need continuous monitoring and improvement to maintain reliability.",
    details: [
      "Unit test individual tools and agent responses",
      "Run integration tests with realistic scenarios",
      "Deploy with feature flags for gradual rollout",
      "Monitor latency, accuracy, cost, and failure rates",
    ],
  },
];

const frameworks = [
  {
    name: "OpenClaw",
    type: "Multi-Agent Orchestration",
    bestFor: "Production business deployments",
    language: "TypeScript / Node.js",
    learningCurve: "Moderate",
    productionReady: "Yes — built for it",
  },
  {
    name: "LangChain / LangGraph",
    type: "Stateful Agent Framework",
    bestFor: "Complex reasoning workflows",
    language: "Python / TypeScript",
    learningCurve: "Steep",
    productionReady: "Yes, with additional infrastructure",
  },
  {
    name: "CrewAI",
    type: "Role-Based Teams",
    bestFor: "Structured team collaboration",
    language: "Python",
    learningCurve: "Low–Moderate",
    productionReady: "Growing — enterprise tier available",
  },
  {
    name: "AutoGPT",
    type: "Autonomous Task Completion",
    bestFor: "Experimentation and prototyping",
    language: "Python",
    learningCurve: "Low",
    productionReady: "Limited — better for prototypes",
  },
];

const diyVsConsultant = [
  {
    factor: "Timeline",
    diy: "3–6 months for production-ready",
    consultant: "4–8 weeks with experienced partner",
  },
  {
    factor: "Cost (Year 1)",
    diy: "£5,000–15,000 in developer time",
    consultant: "£3,000–10,000 consulting + your time",
  },
  {
    factor: "Risk",
    diy: "High — unknown unknowns in production",
    consultant: "Lower — benefit from prior deployments",
  },
  {
    factor: "Knowledge Transfer",
    diy: "Full ownership from day one",
    consultant: "Training included, handover at completion",
  },
  {
    factor: "Ongoing Support",
    diy: "Self-maintained",
    consultant: "Retainer options available",
  },
];

const faqs = [
  {
    question: "How long does it take to build an AI agent from scratch?",
    answer: "A simple single-purpose agent can be built in a weekend by an experienced developer. A production-ready agent with proper guardrails, monitoring, and integrations typically takes 4–12 weeks depending on complexity. Multi-agent systems with custom tools take longer. Working with a consultant can compress timelines by 50–70% because you skip the trial-and-error phase.",
  },
  {
    question: "What programming language do I need to build an AI agent?",
    answer: "Python is the most common choice thanks to LangChain, CrewAI, and the broader ML ecosystem. TypeScript/Node.js is strong for web-integrated agents and is the primary language for OpenClaw. Some platforms offer no-code or low-code options, but for serious business agents, you'll want coding capability — either in-house or through a consultant.",
  },
  {
    question: "How much does it cost to run an AI agent?",
    answer: "Running costs depend on your LLM usage. A typical business agent making 100–500 LLM calls per day costs £30–150/month in API fees. Self-hosted options like OpenClaw add hosting costs (£20–100/month for a VPS). Cloud platforms like Microsoft Copilot Studio start at £150/month per user. The biggest hidden cost is maintenance — budget 2–4 hours per month for updates and monitoring.",
  },
  {
    question: "Can I build an AI agent without coding?",
    answer: "Yes, but with limitations. Platforms like Microsoft Copilot Studio and some OpenClaw configurations offer visual builders. However, no-code agents are typically limited to simpler workflows. For custom integrations, complex decision logic, or multi-agent orchestration, coding is currently essential. Many businesses start with a consultant-built solution and manage it themselves going forward.",
  },
  {
    question: "What's the biggest mistake people make when building AI agents?",
    answer: "Giving agents too much autonomy too quickly. The most reliable agents start with narrow, well-defined tasks and expand gradually. Other common mistakes include skipping safety guardrails, not implementing proper logging, choosing the wrong framework for your use case, and underestimating the importance of prompt engineering. Start small, measure everything, and iterate.",
  },
  {
    question: "Should I build my AI agent in-house or hire a consultant?",
    answer: "If you have experienced Python or TypeScript developers with spare capacity and a non-urgent timeline, building in-house builds valuable institutional knowledge. If speed matters, you lack AI-specific experience, or the agent is business-critical, a consultant gets you to production faster and safer. Many businesses use a hybrid approach — consultant-led build with in-house developers involved for knowledge transfer.",
  },
];

export default function HowToBuildAIAgentPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient relative overflow-hidden min-h-[70vh] flex items-center grain">
        <div className="max-w-[1140px] mx-auto px-6 relative z-10 py-20">
          <div className="max-w-[720px]">
            <h1 className="font-heading text-4xl sm:text-5xl md:text-[3.2rem] font-extrabold text-white mb-6 leading-[1.05] tracking-tight">
              How to Build an
              <br />
              <span className="text-orange">AI Agent</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl max-w-[540px] mb-10 leading-relaxed">
              A practical, step-by-step guide to building AI agents that actually work in production. From architecture decisions to deployment — no fluff, just real-world experience.
            </p>
            <a
              href="#steps"
              className="inline-flex items-center justify-center bg-orange text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-orange-hover transition-all hover:-translate-y-0.5 shadow-glow-orange"
            >
              Start Building
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
              <div className="text-4xl font-bold text-orange mb-2">6</div>
              <div className="text-muted">Steps to production</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange mb-2">4</div>
              <div className="text-muted">Framework options compared</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange mb-2">4–8 wks</div>
              <div className="text-muted">Typical build timeline</div>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section id="steps" className="bg-light py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              6 Steps to Building a Production AI Agent
            </h2>
            <p className="text-muted text-lg max-w-[600px] mx-auto">
              Whether you&apos;re building your first agent or your tenth, this process keeps you on track.
            </p>
          </div>

          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-card">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
                  <div>
                    <div className="text-orange font-heading font-extrabold text-4xl mb-2">{step.number}</div>
                    <h3 className="font-heading font-bold text-xl text-dark">{step.title}</h3>
                  </div>

                  <div className="lg:col-span-3">
                    <p className="text-muted mb-4">{step.description}</p>
                    <ul className="space-y-2">
                      {step.details.map((detail, i) => (
                        <li key={i} className="flex gap-2 items-start text-sm text-muted-dark">
                          <span className="text-orange mt-0.5 flex-shrink-0">•</span>
                          {detail}
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

      {/* Framework Comparison */}
      <section className="bg-white py-28">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              AI Agent Frameworks Compared
            </h2>
            <p className="text-muted text-lg max-w-[600px] mx-auto">
              Choosing the right framework is the single most important technical decision. Here&apos;s how the leading options stack up.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b-2 border-orange/20">
                  <th className="py-4 px-4 font-heading font-bold text-dark">Framework</th>
                  <th className="py-4 px-4 font-heading font-bold text-dark">Type</th>
                  <th className="py-4 px-4 font-heading font-bold text-dark">Best For</th>
                  <th className="py-4 px-4 font-heading font-bold text-dark">Language</th>
                  <th className="py-4 px-4 font-heading font-bold text-dark">Learning Curve</th>
                  <th className="py-4 px-4 font-heading font-bold text-dark">Production Ready</th>
                </tr>
              </thead>
              <tbody>
                {frameworks.map((fw, index) => (
                  <tr key={index} className="border-b border-border-light">
                    <td className="py-4 px-4 font-semibold text-orange">{fw.name}</td>
                    <td className="py-4 px-4 text-muted">{fw.type}</td>
                    <td className="py-4 px-4 text-muted">{fw.bestFor}</td>
                    <td className="py-4 px-4 text-muted">{fw.language}</td>
                    <td className="py-4 px-4 text-muted">{fw.learningCurve}</td>
                    <td className="py-4 px-4 text-muted">{fw.productionReady}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-muted text-sm mt-6 text-center">
            For a deeper dive into each platform, see our <a href="/guides/best-ai-agents-2026" className="text-orange hover:underline">Best AI Agents 2026</a> guide and <a href="/guides/ai-agent-tools-comparison" className="text-orange hover:underline">AI Agent Tools Comparison</a>.
          </p>
        </div>
      </section>

      {/* Architecture Patterns */}
      <section className="bg-surface py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Common Agent Architecture Patterns
            </h2>
          </div>
          <div className="max-w-[800px] mx-auto space-y-8">
            <div className="border-l-4 border-orange pl-6">
              <h3 className="font-heading font-bold text-xl text-dark mb-2">ReAct Loop (Reason + Act)</h3>
              <p className="text-muted">The simplest useful pattern. The agent observes its environment, reasons about what to do, takes an action, and observes the result. Ideal for single-task automation — think customer support triage, data extraction, or report generation. Most agents start here.</p>
            </div>
            <div className="border-l-4 border-orange pl-6">
              <h3 className="font-heading font-bold text-xl text-dark mb-2">Plan-and-Execute</h3>
              <p className="text-muted">The agent creates a plan before taking action, then executes each step sequentially. Better for complex, multi-step tasks like research workflows or content creation pipelines. The plan can be revised if a step fails.</p>
            </div>
            <div className="border-l-4 border-orange pl-6">
              <h3 className="font-heading font-bold text-xl text-dark mb-2">Multi-Agent Orchestration</h3>
              <p className="text-muted">Multiple specialised agents collaborate on complex tasks. A manager agent delegates to specialists — a researcher, a writer, a reviewer. OpenClaw excels at this pattern with built-in orchestration. Best for enterprise workflows spanning multiple departments.</p>
            </div>
            <div className="border-l-4 border-orange pl-6">
              <h3 className="font-heading font-bold text-xl text-dark mb-2">Human-in-the-Loop</h3>
              <p className="text-muted">The agent works autonomously but pauses for human approval at critical decision points — sending an email, making a purchase, or modifying a database. Essential for financial operations, legal workflows, and any process where mistakes are costly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* DIY vs Consultant */}
      <section className="bg-white py-28">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Build In-House vs Hire a Consultant
            </h2>
            <p className="text-muted text-lg max-w-[600px] mx-auto">
              The honest comparison. Both approaches work — the right choice depends on your situation.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b-2 border-orange/20">
                  <th className="py-4 px-4 font-heading font-bold text-dark">Factor</th>
                  <th className="py-4 px-4 font-heading font-bold text-dark">Build In-House</th>
                  <th className="py-4 px-4 font-heading font-bold text-dark">Hire a Consultant</th>
                </tr>
              </thead>
              <tbody>
                {diyVsConsultant.map((row, index) => (
                  <tr key={index} className="border-b border-border-light">
                    <td className="py-4 px-4 font-semibold text-dark">{row.factor}</td>
                    <td className="py-4 px-4 text-muted">{row.diy}</td>
                    <td className="py-4 px-4 text-muted">{row.consultant}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-muted text-sm mt-6 text-center">
            See our <a href="/pricing" className="text-orange hover:underline">pricing page</a> for consultation packages, or read about <a href="/guides/ai-agent-consulting-uk" className="text-orange hover:underline">finding the right AI agent consultant</a>.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-light py-28">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              How to Build an AI Agent: FAQs
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
            Blue Canvas is a UK-based AI consultancy specialising in agent deployment and automation strategy.
            Through <a href="https://bluecanvas.ai" className="text-orange hover:underline">Blue Canvas</a>, Phil Patterson helps
            businesses build, deploy, and optimise AI agents — from first prototype to production at scale.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-navy text-white py-24 relative overflow-hidden grain">
        <div className="max-w-[1140px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Need Help Building
                <br />
                <span className="text-orange">Your AI Agent?</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Whether you&apos;re starting from scratch or stuck mid-build, we can help. Book a free consultation to discuss your agent architecture and get a clear path to production.
              </p>
              <div className="space-y-3 text-white/60">
                <div className="flex items-center gap-3">
                  <span className="text-orange">✓</span>
                  Architecture review and recommendation
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-orange">✓</span>
                  Framework selection guidance
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-orange">✓</span>
                  Build-or-buy assessment for your use case
                </div>
              </div>
            </div>
            <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8">
              <h3 className="font-heading font-bold text-xl text-white mb-1">AI Agent Consultation</h3>
              <p className="text-white/60 text-sm mb-6">Get expert help building your AI agent</p>
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
            <a href="/guides/ai-agent-tools-comparison" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">AI Agent Tools: Complete Comparison</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/ai-agents-explained" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">AI Agents Explained</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/ai-agent-vs-rpa" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">AI Agents vs RPA: Which Is Right for You?</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
