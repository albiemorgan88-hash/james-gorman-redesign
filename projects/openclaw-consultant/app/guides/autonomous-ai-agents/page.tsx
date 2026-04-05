import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Autonomous AI Agents: What They Are and Why They Matter",
  description: "Deep dive into autonomous AI agents. How they differ from assisted AI, levels of autonomy, safety considerations, and practical business applications in 2026.",
  keywords: [
    "autonomous ai agents",
    "autonomous ai agent",
    "self-directing ai agents",
    "ai agent autonomy",
    "fully autonomous ai",
    "ai agents independent",
    "autonomous automation",
    "ai agent levels of autonomy"
  ],
  alternates: { canonical: "https://openclawconsultant.co.uk/guides/autonomous-ai-agents" },
  openGraph: {
    title: "Autonomous AI Agents: What They Are and Why They Matter",
    description: "Deep dive into autonomous AI agents — levels of autonomy, safety, and business applications.",
    url: "https://openclawconsultant.co.uk/guides/autonomous-ai-agents",
    type: "article",
  },
};

const autonomyLevels = [
  {
    level: "Level 1: Assisted",
    description: "AI provides suggestions and drafts. Human reviews and executes every action.",
    example: "AI drafts email responses; a human reads, edits, and sends each one.",
    risk: "Minimal — human controls every output",
    businessUse: "Good starting point. Builds trust before increasing autonomy."
  },
  {
    level: "Level 2: Semi-Autonomous",
    description: "AI executes routine actions independently. Escalates exceptions to humans.",
    example: "AI processes standard invoices automatically. Flags unusual amounts or new suppliers for human review.",
    risk: "Low — bounded actions with clear escalation rules",
    businessUse: "Where most businesses should aim initially. Covers 80% of work, humans handle the 20%."
  },
  {
    level: "Level 3: Supervised Autonomous",
    description: "AI handles complex workflows end-to-end. Human monitors dashboards and reviews periodic reports.",
    example: "AI manages entire customer onboarding — from initial contact through document collection, verification, and system setup. Human reviews weekly summary.",
    risk: "Medium — requires robust monitoring and audit trails",
    businessUse: "For mature processes with good data. Delivers maximum efficiency gains."
  },
  {
    level: "Level 4: Fully Autonomous",
    description: "AI operates independently with minimal human oversight. Makes complex decisions based on goals and constraints.",
    example: "AI manages a portfolio of marketing campaigns — adjusting budgets, targeting, and creative based on performance data.",
    risk: "Higher — requires extensive testing, guardrails, and fallback mechanisms",
    businessUse: "Emerging capability. Currently suitable for low-stakes, data-rich domains."
  }
];

const safetyPrinciples = [
  {
    principle: "Bounded Action Space",
    explanation: "Define exactly what the agent can and cannot do. An autonomous invoice processor should be able to read invoices and update the accounting system — not send bank transfers or modify payment terms.",
    implementation: "Explicit permission lists for every tool and system the agent can access"
  },
  {
    principle: "Confidence Thresholds",
    explanation: "When the agent's confidence in a decision falls below a configurable threshold, it escalates to a human rather than acting on uncertain information.",
    implementation: "Configurable thresholds per action type — higher for financial decisions, lower for routine admin"
  },
  {
    principle: "Audit Logging",
    explanation: "Every action the agent takes is logged with reasoning — what it perceived, how it decided, and what it did. This creates an audit trail for compliance and a learning resource for improvement.",
    implementation: "Immutable logs stored separately from agent systems, reviewed periodically"
  },
  {
    principle: "Kill Switches",
    explanation: "The ability to immediately halt any agent at any time. No autonomous agent should operate without a reliable way to stop it.",
    implementation: "Global and per-agent kill switches, automated triggers for anomalous behaviour"
  },
  {
    principle: "Human-in-the-Loop Checkpoints",
    explanation: "For high-stakes decisions, the agent pauses and waits for human approval before proceeding, regardless of its confidence level.",
    implementation: "Configurable checkpoints at critical workflow stages"
  }
];

const faqs = [
  {
    question: "Are autonomous AI agents safe for business use?",
    answer: "Yes, when implemented with proper guardrails. The key is starting at lower autonomy levels and gradually increasing as you build trust and data. Every autonomous agent should have bounded permissions, confidence-based escalation, comprehensive logging, and kill switches. The businesses that get into trouble are those that give agents too much access too quickly."
  },
  {
    question: "What's the difference between autonomous AI agents and AutoGPT?",
    answer: "AutoGPT was an early experiment in autonomous AI that gained viral attention in 2023. It demonstrated the concept but was unreliable for production use. Modern autonomous agents (built on platforms like OpenClaw) are designed for business reliability — with proper error handling, guardrails, and integration capabilities that AutoGPT lacked."
  },
  {
    question: "How much human oversight do autonomous agents need?",
    answer: "It depends on the autonomy level and the stakes involved. Level 2 (semi-autonomous) agents need brief daily reviews. Level 3 (supervised autonomous) agents need weekly monitoring. The oversight requirement decreases as the agent proves itself, but should never reach zero for business-critical processes."
  },
  {
    question: "Can autonomous agents work with other agents?",
    answer: "Yes — this is called multi-agent orchestration. Platforms like OpenClaw enable teams of autonomous agents working together, each handling their specialised role. One agent researches, another analyses, a third drafts, and a fourth quality-checks. This mirrors how effective human teams operate. See our guide on multi-agent systems for details."
  },
  {
    question: "What happens when an autonomous agent makes a mistake?",
    answer: "Well-designed autonomous agents include rollback capabilities — the ability to undo actions when errors are detected. Combined with audit logging, you can trace exactly what happened and why. The agent's confidence threshold should be set so it escalates uncertain decisions rather than acting on them. Mistakes happen, but the damage should always be bounded."
  },
  {
    question: "Should my business use autonomous AI agents?",
    answer: "If you have clearly defined processes with good data, yes — at the appropriate autonomy level. Start with Level 1 (assisted) or Level 2 (semi-autonomous) on your highest-volume, lowest-risk process. Build confidence, measure results, then gradually increase autonomy and scope. Don't jump to full autonomy on day one."
  }
];

export default function AutonomousAIAgentsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient relative overflow-hidden min-h-[70vh] flex items-center grain">
        <div className="max-w-[1140px] mx-auto px-6 relative z-10 py-20">
          <div className="max-w-[720px]">
            <h1 className="font-heading text-4xl sm:text-5xl md:text-[3.2rem] font-extrabold text-white mb-6 leading-[1.05] tracking-tight">
              Autonomous
              <br />
              <span className="text-orange">AI Agents</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl max-w-[540px] mb-10 leading-relaxed">
              AI that doesn&apos;t just assist — it acts. Understanding autonomous agents, their levels of independence, and how to deploy them safely in your business.
            </p>
            <a
              href="#autonomy-levels"
              className="inline-flex items-center justify-center bg-orange text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-orange-hover transition-all hover:-translate-y-0.5 shadow-glow-orange"
            >
              Explore Autonomy Levels
            </a>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#fafbfc] to-transparent" />
      </section>

      {/* What Are Autonomous Agents */}
      <section className="bg-white py-28">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="max-w-[800px] mx-auto prose prose-lg text-muted">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-6 not-prose">
              What Makes an AI Agent &ldquo;Autonomous&rdquo;?
            </h2>
            <p>
              An autonomous AI agent can <strong>perceive its environment, make decisions, and take actions to achieve goals without step-by-step human guidance</strong>. The key word is &ldquo;without&rdquo; — unlike assisted AI tools that wait for your input, autonomous agents proactively work towards objectives you set.
            </p>
            <p>
              But autonomy isn&apos;t binary. It&apos;s a spectrum — from AI that suggests actions (a human still clicks the button) to fully self-directing agents that operate independently for extended periods.
            </p>
            <p>
              For businesses, the practical question isn&apos;t &ldquo;should we use autonomous agents?&rdquo; but &ldquo;what level of autonomy is right for each process?&rdquo; The answer depends on the task&apos;s complexity, risk, and how much trust you&apos;ve built with the technology.
            </p>
            <p>
              New to AI agents? Start with our <a href="/guides/what-is-an-ai-agent" className="text-orange hover:underline">What Is an AI Agent?</a> explainer. For practical examples of agents in action, see <a href="/guides/ai-agent-examples" className="text-orange hover:underline">AI Agent Examples</a>.
            </p>
          </div>
        </div>
      </section>

      {/* Autonomy Levels */}
      <section id="autonomy-levels" className="bg-light py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              The Four Levels of AI Agent Autonomy
            </h2>
          </div>

          <div className="space-y-8">
            {autonomyLevels.map((level, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-card">
                <h3 className="font-heading font-bold text-2xl text-dark mb-4">{level.level}</h3>
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                  <div>
                    <p className="text-muted text-sm">{level.description}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark mb-2">Example:</h4>
                    <p className="text-muted text-sm">{level.example}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark mb-2">Risk Level:</h4>
                    <p className="text-orange text-sm font-medium">{level.risk}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark mb-2">Business Application:</h4>
                    <p className="text-muted text-sm">{level.businessUse}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety */}
      <section className="bg-white py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Safety Principles for Autonomous Agents
            </h2>
            <p className="text-muted text-lg max-w-[600px] mx-auto">
              Autonomy without safety is recklessness. These five principles are non-negotiable for any production deployment.
            </p>
          </div>

          <div className="max-w-[800px] mx-auto space-y-8">
            {safetyPrinciples.map((item, index) => (
              <div key={index} className="border-l-4 border-orange pl-6">
                <h3 className="font-heading font-bold text-xl text-dark mb-2">{item.principle}</h3>
                <p className="text-muted mb-2">{item.explanation}</p>
                <p className="text-orange text-sm font-semibold">Implementation: {item.implementation}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-surface py-28">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Autonomous AI Agents: FAQs
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
            Blue Canvas specialises in deploying autonomous AI agents with proper safety guardrails for UK businesses. 
            Through <a href="https://bluecanvas.ai" className="text-orange hover:underline">Blue Canvas</a>, Phil Patterson helps organisations 
            find the right autonomy level for each process — maximising efficiency while maintaining control.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-navy text-white py-24 relative overflow-hidden grain">
        <div className="max-w-[1140px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Deploy Autonomous Agents
                <br />
                <span className="text-orange">Safely and Effectively</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Free consultation to assess your readiness for autonomous AI and design a phased implementation plan with proper safety guardrails.
              </p>
              <div className="space-y-3 text-white/60">
                <div className="flex items-center gap-3">
                  <span className="text-orange">✓</span>
                  Autonomy level assessment for your processes
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-orange">✓</span>
                  Safety framework and guardrail design
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-orange">✓</span>
                  Phased implementation roadmap
                </div>
              </div>
            </div>
            <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8">
              <h3 className="font-heading font-bold text-xl text-white mb-1">Autonomous AI Consultation</h3>
              <p className="text-white/60 text-sm mb-6">Expert guidance on autonomous agent deployment</p>
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
            <a href="/guides/ai-agent-security-guide" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">AI Agent Security Guide</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/best-ai-agents-2026" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">Best AI Agents 2026</h3>
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
