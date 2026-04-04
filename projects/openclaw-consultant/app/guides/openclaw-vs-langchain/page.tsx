import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "OpenClaw vs LangChain: Practical Comparison for Business",
  description: "Honest comparison of OpenClaw and LangChain for business AI agent deployment. Costs, complexity, use cases, and which platform suits your needs in 2026.",
  keywords: [
    "openclaw vs langchain",
    "langchain alternative",
    "openclaw comparison",
    "ai agent framework comparison",
    "langchain for business",
    "openclaw for business",
    "ai agent platform comparison",
    "best ai agent framework 2026"
  ],
  alternates: { canonical: "https://openclawconsultant.co.uk/guides/openclaw-vs-langchain" },
  openGraph: {
    title: "OpenClaw vs LangChain: Practical Comparison for Business",
    description: "Honest comparison of OpenClaw and LangChain for business AI agent deployment. Costs, complexity, use cases, and which platform suits your needs.",
    url: "https://openclawconsultant.co.uk/guides/openclaw-vs-langchain",
    type: "article",
  },
};

const comparisonPoints = [
  {
    category: "Setup & Deployment",
    openclaw: "Install on Mac, Linux, or Pi in minutes. CLI-first with GUI dashboard. No cloud dependency required — runs on your hardware.",
    langchain: "Python library requiring developer setup. Needs cloud infrastructure (AWS/GCP/Azure) for production. Significant DevOps knowledge required.",
    verdict: "OpenClaw wins for speed-to-value. LangChain wins if you already have a Python dev team and cloud infrastructure."
  },
  {
    category: "Multi-Agent Orchestration",
    openclaw: "Native multi-agent support with named agents, task delegation, and automatic result aggregation. Agents coordinate through a built-in message bus.",
    langchain: "Multi-agent possible but requires custom orchestration code. LangGraph adds graph-based workflows but increases complexity significantly.",
    verdict: "OpenClaw wins. Multi-agent is a first-class citizen, not an afterthought."
  },
  {
    category: "Business User Accessibility",
    openclaw: "Non-technical users can interact via Telegram, Discord, or web chat. Skills system allows pre-built workflows without coding.",
    langchain: "Developer-only tool. Every workflow requires Python code. No built-in user interface — you build your own.",
    verdict: "OpenClaw wins decisively for businesses without in-house developers."
  },
  {
    category: "Flexibility & Customisation",
    openclaw: "Extensible through skills and plugins. Supports multiple LLM providers. Growing ecosystem but newer than LangChain.",
    langchain: "Massive ecosystem with thousands of integrations. Supports every LLM, vector store, and tool imaginable. Very flexible but complex.",
    verdict: "LangChain wins on raw flexibility and ecosystem size. OpenClaw wins on usable flexibility."
  },
  {
    category: "Cost",
    openclaw: "Open source core. Runs on existing hardware. Main costs are LLM API usage. No per-seat licensing.",
    langchain: "Open source core, but LangSmith (monitoring) and LangServe (deployment) add costs. Cloud hosting costs can escalate quickly.",
    verdict: "OpenClaw wins on total cost of ownership for most businesses."
  },
  {
    category: "Data Privacy",
    openclaw: "Runs locally on your own hardware. Data never leaves your network unless you choose to use cloud LLMs.",
    langchain: "Depends on deployment. Can run locally but production typically involves cloud services. LangSmith sends telemetry data externally.",
    verdict: "OpenClaw wins for data-sensitive industries (legal, healthcare, finance)."
  }
];

const faqs = [
  {
    question: "Can I use LangChain tools with OpenClaw?",
    answer: "OpenClaw supports MCP (Model Context Protocol) servers which can wrap LangChain tools. You're not locked into one ecosystem — many businesses use OpenClaw as the orchestration layer whilst leveraging specific LangChain integrations where they add value. The two platforms can be complementary rather than mutually exclusive."
  },
  {
    question: "Which platform is better for a non-technical business owner?",
    answer: "OpenClaw, without question. It's designed to be operated by business users through familiar interfaces like Telegram and web chat. LangChain requires Python programming knowledge and cloud infrastructure expertise. If you don't have developers on staff, LangChain will require hiring or contracting technical talent."
  },
  {
    question: "Is LangChain more powerful than OpenClaw?",
    answer: "LangChain offers more raw flexibility and has a larger ecosystem of integrations. However, power without usability creates complexity, not value. Most businesses use less than 10% of LangChain's capabilities. OpenClaw focuses on the 90% of use cases that actually matter to businesses and makes them accessible without a computer science degree."
  },
  {
    question: "Which has better enterprise support?",
    answer: "LangChain offers enterprise support through LangSmith and has a larger corporate backing. OpenClaw's enterprise support comes through consultancies like <a href='https://bluecanvas.ai' class='text-orange hover:underline'>Blue Canvas</a> that provide hands-on implementation and ongoing management. For mid-market businesses, the consultancy model often delivers better outcomes than self-serve enterprise tools."
  },
  {
    question: "What about vendor lock-in?",
    answer: "Both platforms are open source at their core, reducing lock-in risk. OpenClaw's local-first approach means your data and configurations live on your hardware. LangChain's ecosystem can create soft lock-in through proprietary tools like LangSmith and LangServe. Either way, the underlying LLM providers are interchangeable."
  },
  {
    question: "Which should I choose for my business?",
    answer: "Choose OpenClaw if: you want fast deployment, don't have developers, need data privacy, or want multi-agent coordination out of the box. Choose LangChain if: you have Python developers, need specific integrations from the LangChain ecosystem, or are building a custom AI product rather than automating business processes."
  }
];

export default function OpenClawVsLangChainPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient relative overflow-hidden min-h-[70vh] flex items-center grain">
        <div className="max-w-[1140px] mx-auto px-6 relative z-10 py-20">
          <div className="max-w-[720px]">
            <h1 className="font-heading text-4xl sm:text-5xl md:text-[3.2rem] font-extrabold text-white mb-6 leading-[1.05] tracking-tight">
              OpenClaw vs
              <br />
              <span className="text-orange">LangChain</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl max-w-[540px] mb-10 leading-relaxed">
              A practical, no-hype comparison of two leading AI agent platforms. Which one actually fits your business needs, budget, and technical capabilities?
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
              <div className="text-4xl font-bold text-orange mb-2">Minutes</div>
              <div className="text-muted">OpenClaw setup vs hours for LangChain</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange mb-2">Zero</div>
              <div className="text-muted">Coding required for OpenClaw deployment</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange mb-2">Local</div>
              <div className="text-muted">Data stays on your hardware with OpenClaw</div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-light py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Two Very Different Approaches
            </h2>
          </div>
          <div className="max-w-[800px] mx-auto prose prose-lg text-muted">
            <p>
              LangChain and OpenClaw both help you build AI agent systems, but they approach the problem from opposite directions. LangChain is a developer framework — a Python library that gives programmers building blocks for creating AI applications. OpenClaw is an operational platform — a ready-to-run system that lets businesses deploy AI agents without writing code.
            </p>
            <p>
              Think of it like this: LangChain is a box of Lego bricks. You can build almost anything, but you need to know how to build. OpenClaw is a pre-assembled machine with a control panel. You configure it to do what you need and press go.
            </p>
            <p>
              Neither approach is inherently better. The right choice depends on your team, your use cases, and whether you&apos;re building AI products or automating business processes. This guide breaks down the practical differences that actually matter for UK businesses. For those interested in how teams of agents work together, our <a href="/guides/multi-agent-systems-explained" className="text-orange hover:underline">multi-agent systems guide</a> goes deeper on orchestration patterns.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section id="comparison" className="bg-white py-28">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Head-to-Head Comparison
            </h2>
          </div>

          <div className="space-y-8">
            {comparisonPoints.map((point, index) => (
              <div key={index} className="bg-surface rounded-2xl p-8">
                <h3 className="font-heading font-bold text-2xl text-dark mb-6">{point.category}</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6">
                  <div>
                    <h4 className="font-semibold text-dark mb-3 flex items-center gap-2">
                      <span className="text-orange">◆</span> OpenClaw
                    </h4>
                    <p className="text-muted text-sm">{point.openclaw}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark mb-3 flex items-center gap-2">
                      <span className="text-blue">◆</span> LangChain
                    </h4>
                    <p className="text-muted text-sm">{point.langchain}</p>
                  </div>
                </div>
                <div className="border-t border-border pt-4">
                  <p className="text-sm font-semibold text-dark">
                    <span className="text-orange">Verdict:</span> {point.verdict}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* When to Choose Each */}
      <section className="bg-light py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              When to Choose Each Platform
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-card">
              <h3 className="font-heading font-bold text-xl text-dark mb-6 flex items-center gap-2">
                <span className="text-orange text-2xl">◆</span> Choose OpenClaw When:
              </h3>
              <ul className="space-y-3">
                {[
                  "You don't have Python developers on staff",
                  "Data privacy and local processing are requirements",
                  "You need multi-agent coordination out of the box",
                  "Speed-to-value matters more than ultimate flexibility",
                  "You want to interact with agents via chat (Telegram, Discord)",
                  "Your use case is business process automation, not building AI products",
                  "Budget is limited — you want to run on existing hardware"
                ].map((item, i) => (
                  <li key={i} className="flex gap-2 items-start text-sm text-muted-dark">
                    <span className="text-green-600 mt-0.5 flex-shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-card">
              <h3 className="font-heading font-bold text-xl text-dark mb-6 flex items-center gap-2">
                <span className="text-blue text-2xl">◆</span> Choose LangChain When:
              </h3>
              <ul className="space-y-3">
                {[
                  "You have experienced Python developers available",
                  "You need specific integrations from LangChain's ecosystem",
                  "You're building a custom AI product, not automating processes",
                  "You need fine-grained control over every aspect of the pipeline",
                  "You already have cloud infrastructure and DevOps capability",
                  "You want to use LangSmith for detailed LLM observability",
                  "Academic or research use cases requiring maximum flexibility"
                ].map((item, i) => (
                  <li key={i} className="flex gap-2 items-start text-sm text-muted-dark">
                    <span className="text-blue mt-0.5 flex-shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-28">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              OpenClaw vs LangChain: FAQs
            </h2>
          </div>

          <div className="max-w-[800px] mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-surface rounded-2xl p-6">
                <h3 className="font-heading font-bold text-lg text-dark mb-3">{faq.question}</h3>
                <p className="text-muted text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: faq.answer }} />
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
            Blue Canvas is an AI agent consultant based in Derry, Northern Ireland. Through <a href="https://bluecanvas.ai" className="text-orange hover:underline">Blue Canvas</a>, 
            he helps businesses evaluate and implement the right AI agent platform for their specific needs — whether that&apos;s OpenClaw, LangChain, or a combination of both.
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
                <span className="text-orange">Platform to Choose?</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Free consultation to assess your requirements and recommend the right AI agent platform for your business. No vendor bias — just practical advice.
              </p>
              <div className="space-y-3 text-white/60">
                <div className="flex items-center gap-3">
                  <span className="text-orange">✓</span>
                  Vendor-neutral platform assessment
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-orange">✓</span>
                  Use case analysis and recommendation
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-orange">✓</span>
                  Implementation roadmap
                </div>
              </div>
            </div>
            <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8">
              <h3 className="font-heading font-bold text-xl text-white mb-1">Platform Comparison Consultation</h3>
              <p className="text-white/60 text-sm mb-6">Get expert advice on the right AI platform for your business</p>
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
            <a href="/guides/openclaw-vs-microsoft-copilot" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">OpenClaw vs Microsoft Copilot</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/multi-agent-systems-explained" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">Multi-Agent Systems Explained</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/openclaw-enterprise-deployment" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">OpenClaw Enterprise Deployment</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/ai-agent-security-guide" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">AI Agent Security Guide</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
