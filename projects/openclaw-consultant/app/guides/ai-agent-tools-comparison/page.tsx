import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "AI Agent Tools: Complete Comparison Guide 2026",
  description: "Compare the best AI agent tools and frameworks in 2026. OpenClaw, CrewAI, LangGraph, AutoGPT, and more — features, pricing, and when to use each one.",
  keywords: [
    "ai agent tools",
    "ai agent tools comparison",
    "ai agent frameworks 2026",
    "best ai agent framework",
    "ai agent platforms compared",
    "ai agent development tools",
    "ai agent software comparison",
    "ai automation tools"
  ],
  alternates: { canonical: "https://openclawconsultant.co.uk/guides/ai-agent-tools-comparison" },
  openGraph: {
    title: "AI Agent Tools: Complete Comparison Guide 2026",
    description: "Compare the best AI agent tools and frameworks in 2026. Features, pricing, and when to use each one.",
    url: "https://openclawconsultant.co.uk/guides/ai-agent-tools-comparison",
    type: "article",
  },
};

const tools = [
  {
    name: "OpenClaw",
    type: "Multi-Agent Orchestration Platform",
    openSource: true,
    selfHosted: true,
    languages: "TypeScript/JavaScript",
    strengths: ["Production-ready multi-agent orchestration", "Plugin ecosystem for business tools", "Self-hosted for data control", "Active community and commercial support"],
    weaknesses: ["Newer ecosystem — fewer tutorials than LangChain", "TypeScript-first may not suit Python shops"],
    bestFor: "Businesses wanting a production-ready agent platform they can self-host and customise",
    pricing: "Open-source core. Commercial plans from £49/month"
  },
  {
    name: "CrewAI",
    type: "Role-Based Agent Framework",
    openSource: true,
    selfHosted: true,
    languages: "Python",
    strengths: ["Intuitive role/task/crew metaphor", "Easy to prototype multi-agent workflows", "Growing tool library", "Good documentation"],
    weaknesses: ["Python-only", "Less mature than LangChain ecosystem", "Limited enterprise features"],
    bestFor: "Python developers building structured multi-agent teams for specific workflows",
    pricing: "Open-source. CrewAI Enterprise pricing on request"
  },
  {
    name: "LangGraph",
    type: "Stateful Agent Workflow Framework",
    openSource: true,
    selfHosted: true,
    languages: "Python, JavaScript",
    strengths: ["Fine-grained state management", "Excellent for complex, branching workflows", "Human-in-the-loop patterns", "Part of LangChain ecosystem"],
    weaknesses: ["Steep learning curve", "Verbose for simple use cases", "Debugging can be challenging"],
    bestFor: "Developers needing precise control over complex agent state and decision flow",
    pricing: "Open-source. LangSmith monitoring from $39/month"
  },
  {
    name: "AutoGPT / AutoGPT Platform",
    type: "Autonomous Agent Platform",
    openSource: true,
    selfHosted: true,
    languages: "Python",
    strengths: ["Pioneer of autonomous agents", "Large community", "Good for experimental/research work", "Flexible goal-based execution"],
    weaknesses: ["Can be unpredictable in production", "High token consumption", "Requires careful guardrails"],
    bestFor: "Experimentation and prototyping autonomous workflows",
    pricing: "Open-source. Cloud hosting costs vary"
  },
  {
    name: "Microsoft Copilot Studio",
    type: "Enterprise Low-Code Agent Builder",
    openSource: false,
    selfHosted: false,
    languages: "Low-code / Power Platform",
    strengths: ["Native Microsoft 365 integration", "Low-code builder for non-developers", "Enterprise security and compliance", "Managed infrastructure"],
    weaknesses: ["Microsoft ecosystem lock-in", "Expensive at scale", "Limited customisation vs open-source"],
    bestFor: "Organisations deeply embedded in Microsoft 365 wanting quick wins without code",
    pricing: "From £150/month per user"
  },
  {
    name: "Amazon Bedrock Agents",
    type: "AWS-Native Agent Service",
    openSource: false,
    selfHosted: false,
    languages: "Python, JavaScript (SDKs)",
    strengths: ["Deep AWS integration", "Multiple foundation model choices", "Built-in RAG capabilities", "Pay-per-use pricing"],
    weaknesses: ["AWS lock-in", "Complex pricing", "Less flexibility than open-source options"],
    bestFor: "Companies running infrastructure on AWS wanting integrated agent capabilities",
    pricing: "Pay-per-use, approximately £0.01–0.05 per invocation"
  }
];

const comparisonMatrix = [
  { feature: "Self-Hosting", openclaw: "✅", crewai: "✅", langgraph: "✅", autogpt: "✅", copilot: "❌", bedrock: "❌" },
  { feature: "No-Code Options", openclaw: "✅", crewai: "❌", langgraph: "❌", autogpt: "⚠️", copilot: "✅", bedrock: "❌" },
  { feature: "Multi-Agent", openclaw: "✅", crewai: "✅", langgraph: "✅", autogpt: "⚠️", copilot: "⚠️", bedrock: "⚠️" },
  { feature: "Enterprise Support", openclaw: "✅", crewai: "✅", langgraph: "✅", autogpt: "❌", copilot: "✅", bedrock: "✅" },
  { feature: "UK Data Residency", openclaw: "✅", crewai: "✅", langgraph: "✅", autogpt: "✅", copilot: "✅", bedrock: "✅" },
  { feature: "Active Development", openclaw: "✅", crewai: "✅", langgraph: "✅", autogpt: "⚠️", copilot: "✅", bedrock: "✅" },
];

const faqs = [
  {
    question: "Which AI agent tool should I choose for my business?",
    answer: "It depends on three factors: your technical capability, your data sensitivity requirements, and your existing tech stack. If you're in Microsoft 365, Copilot Studio offers the quickest start. If you need data control and flexibility, OpenClaw is the strongest option. If you have Python developers and want maximum customisation, CrewAI or LangGraph give you that power. Book a consultation and we'll recommend based on your specific situation."
  },
  {
    question: "Can I switch AI agent tools later?",
    answer: "Yes, but it's costly. Agent logic, integrations, and workflows don't port easily between platforms. This is why choosing the right tool upfront matters. The agent logic (what the agent does) is somewhat portable, but the plumbing (how it connects to your systems) usually needs rebuilding."
  },
  {
    question: "Do I need to know how to code to use these tools?",
    answer: "For Microsoft Copilot Studio and some OpenClaw configurations, no. For CrewAI, LangGraph, and AutoGPT, you need Python skills. Amazon Bedrock requires SDK knowledge. Most businesses benefit from a consultant for initial setup, then manage ongoing operations with minimal technical skill."
  },
  {
    question: "How do AI agent tools handle data privacy and GDPR?",
    answer: "Self-hosted tools (OpenClaw, CrewAI, LangGraph, AutoGPT) give you full control — data never leaves your infrastructure. Cloud tools (Copilot Studio, Bedrock) process data on Microsoft/AWS servers but offer UK/EU data residency options. For sensitive industries like legal or healthcare, self-hosting is usually the safest approach."
  },
  {
    question: "What's the total cost of running AI agents?",
    answer: "Open-source platforms have zero licensing costs, so you pay for hosting (£20-100/month) plus LLM API calls (£10-200/month depending on volume). Enterprise platforms start at £150+/month per user. Implementation consulting typically costs £2,000-10,000 depending on complexity. The ROI usually covers these costs within 1-3 months."
  },
  {
    question: "Are these AI agent tools mature enough for production?",
    answer: "OpenClaw, LangGraph, Copilot Studio, and Amazon Bedrock are all production-ready in 2026. CrewAI is production-capable for well-defined workflows. AutoGPT is best suited to experimentation and less critical workloads. The key to production readiness isn't the tool — it's the implementation."
  }
];

export default function AIAgentToolsComparisonPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient relative overflow-hidden min-h-[70vh] flex items-center grain">
        <div className="max-w-[1140px] mx-auto px-6 relative z-10 py-20">
          <div className="max-w-[720px]">
            <h1 className="font-heading text-4xl sm:text-5xl md:text-[3.2rem] font-extrabold text-white mb-6 leading-[1.05] tracking-tight">
              AI Agent Tools:
              <br />
              <span className="text-orange">Complete Comparison 2026</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl max-w-[540px] mb-10 leading-relaxed">
              We&apos;ve built with every major AI agent framework. Here&apos;s an honest comparison — strengths, weaknesses, pricing, and which one fits your business.
            </p>
            <a
              href="#comparison"
              className="inline-flex items-center justify-center bg-orange text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-orange-hover transition-all hover:-translate-y-0.5 shadow-glow-orange"
            >
              Compare Tools
            </a>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#fafbfc] to-transparent" />
      </section>

      {/* Quick Comparison Matrix */}
      <section className="bg-white py-16">
        <div className="max-w-[1140px] mx-auto px-6 overflow-x-auto">
          <h2 className="font-heading text-3xl font-bold text-dark mb-8 text-center">Quick Comparison</h2>
          <table className="w-full text-sm border-collapse min-w-[700px]">
            <thead>
              <tr className="border-b-2 border-orange">
                <th className="text-left py-3 px-4 text-dark font-bold">Feature</th>
                <th className="text-center py-3 px-2 text-dark font-bold">OpenClaw</th>
                <th className="text-center py-3 px-2 text-dark font-bold">CrewAI</th>
                <th className="text-center py-3 px-2 text-dark font-bold">LangGraph</th>
                <th className="text-center py-3 px-2 text-dark font-bold">AutoGPT</th>
                <th className="text-center py-3 px-2 text-dark font-bold">Copilot</th>
                <th className="text-center py-3 px-2 text-dark font-bold">Bedrock</th>
              </tr>
            </thead>
            <tbody>
              {comparisonMatrix.map((row, index) => (
                <tr key={index} className="border-b border-gray-100">
                  <td className="py-3 px-4 font-medium text-dark">{row.feature}</td>
                  <td className="text-center py-3 px-2">{row.openclaw}</td>
                  <td className="text-center py-3 px-2">{row.crewai}</td>
                  <td className="text-center py-3 px-2">{row.langgraph}</td>
                  <td className="text-center py-3 px-2">{row.autogpt}</td>
                  <td className="text-center py-3 px-2">{row.copilot}</td>
                  <td className="text-center py-3 px-2">{row.bedrock}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-muted text-xs mt-4 text-center">✅ Full support | ⚠️ Partial/limited | ❌ Not available</p>
        </div>
      </section>

      {/* Detailed Tool Reviews */}
      <section id="comparison" className="bg-light py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Detailed Tool Reviews
            </h2>
          </div>

          <div className="space-y-8">
            {tools.map((tool, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-card">
                <div className="flex flex-wrap gap-3 mb-4">
                  <h3 className="font-heading font-bold text-2xl text-dark">{tool.name}</h3>
                  <span className="text-orange text-sm font-semibold bg-orange/10 px-3 py-1 rounded-full self-center">{tool.type}</span>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold text-green-600 mb-3">Strengths:</h4>
                    <ul className="space-y-2">
                      {tool.strengths.map((s, i) => (
                        <li key={i} className="flex gap-2 items-start text-sm text-muted-dark">
                          <span className="text-green-600 mt-0.5 flex-shrink-0">+</span>
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-600 mb-3">Weaknesses:</h4>
                    <ul className="space-y-2">
                      {tool.weaknesses.map((w, i) => (
                        <li key={i} className="flex gap-2 items-start text-sm text-muted-dark">
                          <span className="text-red-600 mt-0.5 flex-shrink-0">−</span>
                          {w}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4">
                      <h4 className="font-semibold text-dark mb-1">Languages:</h4>
                      <p className="text-muted text-sm">{tool.languages}</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark mb-3">Best For:</h4>
                    <p className="text-muted text-sm mb-4">{tool.bestFor}</p>
                    <h4 className="font-semibold text-dark mb-2">Pricing:</h4>
                    <p className="text-orange font-medium text-sm">{tool.pricing}</p>
                    <div className="flex gap-2 mt-3">
                      {tool.openSource && <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Open Source</span>}
                      {tool.selfHosted && <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Self-Hosted</span>}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Decide */}
      <section className="bg-white py-28">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="max-w-[800px] mx-auto prose prose-lg text-muted">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-6 not-prose">
              How to Choose: A Decision Framework
            </h2>
            <p>
              After deploying agents across dozens of UK businesses, we&apos;ve found the decision usually comes down to three questions:
            </p>
            <p>
              <strong>1. Do you have developers?</strong> If yes, open-source tools give you more power and flexibility. If no, start with low-code platforms like Copilot Studio or work with a <a href="/guides/ai-agent-consulting-uk" className="text-orange hover:underline">specialist consultant</a>.
            </p>
            <p>
              <strong>2. How sensitive is your data?</strong> For regulated industries or sensitive data, self-hosted options (OpenClaw, CrewAI, LangGraph) are strongly preferred. See our <a href="/guides/ai-agent-security-guide" className="text-orange hover:underline">security guide</a> for more.
            </p>
            <p>
              <strong>3. What&apos;s your existing tech stack?</strong> Heavy Microsoft shop? Copilot Studio. AWS infrastructure? Bedrock. Need flexibility? OpenClaw. The best tool is the one that fits your existing architecture.
            </p>
            <p>
              For a broader overview of what&apos;s available, see our <a href="/guides/best-ai-agents-2026" className="text-orange hover:underline">Best AI Agents 2026</a> guide. For real implementation stories, check out our <a href="/guides/ai-agent-examples" className="text-orange hover:underline">AI Agent Examples</a>.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-surface py-28">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              AI Agent Tools: FAQs
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
            Blue Canvas has hands-on experience with every tool on this page. Through <a href="https://bluecanvas.ai" className="text-orange hover:underline">Blue Canvas</a>, Phil Patterson 
            helps UK businesses cut through the noise, choose the right platform, and get agents into production — without the months of trial and error.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-navy text-white py-24 relative overflow-hidden grain">
        <div className="max-w-[1140px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Need Help Choosing
                <br />
                <span className="text-orange">the Right AI Agent Tool?</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Free consultation to assess your requirements and recommend the best AI agent tool for your business — based on real deployment experience, not vendor marketing.
              </p>
              <div className="space-y-3 text-white/60">
                <div className="flex items-center gap-3">
                  <span className="text-orange">✓</span>
                  Hands-on experience with every major platform
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-orange">✓</span>
                  Vendor-neutral recommendation
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-orange">✓</span>
                  Implementation plan and cost estimate
                </div>
              </div>
            </div>
            <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8">
              <h3 className="font-heading font-bold text-xl text-white mb-1">Tool Selection Consultation</h3>
              <p className="text-white/60 text-sm mb-6">Get expert guidance on choosing the right AI agent tool</p>
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
            <a href="/guides/how-to-build-ai-agent" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">How to Build an AI Agent</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/ai-agent-vs-rpa" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">AI Agents vs RPA</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/ai-agent-examples" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">AI Agent Examples</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
