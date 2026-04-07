import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "How to Build an AI Agent: Step-by-Step Guide",
  description: "Learn how to build an AI agent from scratch. Practical step-by-step guide covering goals, tools, data, guardrails, testing, deployment, and business rollout.",
  keywords: [
    "how to build an ai agent",
    "build an ai agent",
    "ai agent tutorial",
    "how to create an ai agent",
    "ai agent development guide",
    "openclaw tutorial",
    "ai agent framework",
    "ai agent consulting uk"
  ],
  alternates: { canonical: "https://openclawconsultant.co.uk/guides/how-to-build-an-ai-agent" },
  openGraph: {
    title: "How to Build an AI Agent: Step-by-Step Guide",
    description: "A practical guide to planning, building, testing, and deploying an AI agent that does useful work in the real world.",
    url: "https://openclawconsultant.co.uk/guides/how-to-build-an-ai-agent",
    type: "article",
  },
};

const steps = [
  {
    step: "Start with one business problem",
    detail: "Do not begin with the model or framework. Start with a task that is repetitive, expensive, slow, or error-prone. Good first projects include lead qualification, inbox triage, document extraction, meeting follow-up, and customer service routing.",
    output: "A clear goal such as: reduce response time on inbound enquiries from 4 hours to 10 minutes."
  },
  {
    step: "Define the agent's job, inputs, and limits",
    detail: "Write a simple operating brief. What should the agent do, what information can it use, and what must it never do without human approval? This is where most bad builds go wrong. Vague instructions create vague results.",
    output: "A one-page scope covering triggers, actions, escalation rules, and success criteria."
  },
  {
    step: "Choose the right framework",
    detail: "If you need a production-ready orchestration layer, OpenClaw is a strong option because it handles multi-step workflows, tool use, and operational control well. Developer teams may also look at CrewAI or LangGraph depending on how custom the workflow needs to be.",
    output: "A framework choice based on business needs rather than hype."
  },
  {
    step: "Connect the agent to useful data",
    detail: "Agents are only as good as the context they can access. Connect your CRM, inbox, documents, spreadsheets, help centre, or internal knowledge base. Clean, current data matters more than clever prompting.",
    output: "A defined data layer with approved sources."
  },
  {
    step: "Give the agent tools, not just words",
    detail: "Useful agents do more than chat. They read emails, update records, create tasks, summarise documents, call APIs, and notify staff. Each tool should have a clear permission boundary.",
    output: "A small toolset mapped to the exact job the agent needs to do."
  },
  {
    step: "Add guardrails and approval points",
    detail: "Set confidence thresholds, action limits, and human review steps for anything sensitive. For example, an agent can draft a refund email, but a person approves the final send. This protects quality and trust.",
    output: "A risk-controlled workflow with human-in-the-loop where needed."
  },
  {
    step: "Test on real scenarios",
    detail: "Run the agent against actual historical examples, edge cases, and messy inputs. Do not rely on perfect demo data. Test failure modes, not just happy paths.",
    output: "A test pack showing where the agent succeeds, fails, and needs fallback rules."
  },
  {
    step: "Deploy small, then scale",
    detail: "Start with one team or one workflow. Measure time saved, error reduction, and throughput. Once the agent is stable, expand it to adjacent tasks or add specialist agents around it.",
    output: "A phased rollout plan with measurable ROI."
  }
];

const stack = [
  {
    layer: "Model",
    role: "Handles reasoning, language understanding, and content generation.",
    note: "Pick for reliability, cost, and context size, not marketing noise."
  },
  {
    layer: "Framework",
    role: "Coordinates prompts, memory, tool calls, and workflows.",
    note: "OpenClaw is well suited where you want practical orchestration and production control."
  },
  {
    layer: "Tools and integrations",
    role: "Let the agent take action in business systems like HubSpot, Slack, Xero, or Google Workspace.",
    note: "Start with the tools that create immediate value."
  },
  {
    layer: "Knowledge layer",
    role: "Provides grounded business context from documents, SOPs, FAQs, and live records.",
    note: "Bad data produces bad decisions."
  },
  {
    layer: "Observability and logging",
    role: "Shows what the agent did, why it did it, and where it failed.",
    note: "Essential for trust, debugging, and compliance."
  }
];

const mistakes = [
  {
    title: "Trying to automate everything at once",
    detail: "One narrow win beats a sprawling failed rollout. Build one agent that saves real time before creating an agent army."
  },
  {
    title: "Skipping business process design",
    detail: "If the human workflow is chaotic, the AI version will be chaotic faster. Simplify the process before you automate it."
  },
  {
    title: "Giving the agent too much access",
    detail: "Least privilege matters. Start with read-only access where possible, then add write permissions carefully."
  },
  {
    title: "No fallback for uncertainty",
    detail: "Good agents know when to ask for help. Confidence thresholds and escalation rules are not optional."
  },
  {
    title: "Measuring vibes instead of outcomes",
    detail: "Track response time, completion rate, cost per task, error rate, and human hours saved. Otherwise you are guessing."
  }
];

const useCases = [
  "Qualifying and routing inbound leads",
  "Summarising calls and updating CRM records",
  "Processing documents and extracting key fields",
  "Drafting customer replies and escalating complex cases",
  "Monitoring shared inboxes and creating follow-up tasks",
  "Researching competitors, pricing, or tender opportunities"
];

const faqs = [
  {
    question: "How long does it take to build an AI agent?",
    answer: "A focused internal agent can often be built in one to two weeks. More complex projects involving multiple systems, approvals, and testing usually take four to eight weeks."
  },
  {
    question: "Do I need to code to build an AI agent?",
    answer: "Not always. Some frameworks and platforms reduce the coding required, especially for standard business workflows. That said, proper integrations, testing, and deployment still benefit from technical oversight."
  },
  {
    question: "What is the best framework for building an AI agent?",
    answer: "It depends on the job. OpenClaw is a strong choice for production workflows and orchestrated agents. CrewAI and LangGraph can also work well in developer-led environments."
  },
  {
    question: "What should an AI agent do first in a business?",
    answer: "Start with a high-volume, low-risk task where success is easy to measure. Inbox triage, lead qualification, and document handling are common starting points."
  },
  {
    question: "How do I know if an AI agent is working?",
    answer: "Look at hard metrics: time saved, response speed, completion rate, hand-off quality, and reduction in manual admin. If those numbers do not move, the agent is not doing enough useful work."
  }
];

export default function HowToBuildAnAIAgentPage() {
  return (
    <>
      <section className="hero-gradient relative overflow-hidden min-h-[70vh] flex items-center grain">
        <div className="max-w-[1140px] mx-auto px-6 relative z-10 py-20">
          <div className="max-w-[760px]">
            <h1 className="font-heading text-4xl sm:text-5xl md:text-[3.2rem] font-extrabold text-white mb-6 leading-[1.05] tracking-tight">
              How to Build
              <br />
              <span className="text-orange">an AI Agent</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl max-w-[620px] mb-10 leading-relaxed">
              A practical step-by-step guide to planning, building, testing, and deploying an AI agent that does useful work, not just a flashy demo.
            </p>
            <a
              href="#steps"
              className="inline-flex items-center justify-center bg-orange text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-orange-hover transition-all hover:-translate-y-0.5 shadow-glow-orange"
            >
              Build It Properly
            </a>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#fafbfc] to-transparent" />
      </section>

      <section className="bg-white py-16">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-orange mb-2">8</div>
              <div className="text-muted">Core build steps</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange mb-2">1</div>
              <div className="text-muted">Clear business problem to start with</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange mb-2">0</div>
              <div className="text-muted">Value in building an agent with no real job</div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="max-w-[820px] mx-auto prose prose-lg text-muted">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-6 not-prose">
              Building an AI Agent Starts with the Job, Not the Tech
            </h2>
            <p>
              Most teams get this backwards. They start with a model, a framework, or a trendy demo, then go hunting for a problem. That usually ends in an expensive prototype that nobody uses.
            </p>
            <p>
              The right approach is simpler. Pick one business problem. Define the outcome. Then build the smallest possible agent that can solve it reliably. If you are still getting to grips with the basics, read <a href="/guides/what-is-an-ai-agent" className="text-orange hover:underline">What Is an AI Agent?</a> and <a href="/guides/ai-agents-explained" className="text-orange hover:underline">AI Agents Explained</a> first.
            </p>
            <p>
              For most businesses, the first useful agent is not fully autonomous. It is supervised, narrow in scope, and connected to one or two systems. That is a good thing. Controlled agents create trust, and trust is what gets AI adopted properly.
            </p>
          </div>
        </div>
      </section>

      <section id="steps" className="bg-white py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Step-by-Step: How to Build an AI Agent
            </h2>
            <p className="text-muted text-lg max-w-[680px] mx-auto">
              This is the process Blue Canvas uses to take an agent from idea to production without creating chaos in the middle.
            </p>
          </div>

          <div className="space-y-8">
            {steps.map((item, index) => (
              <div key={index} className="bg-surface rounded-2xl p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
                  <div>
                    <div className="text-orange font-bold text-4xl mb-2">{index + 1}</div>
                    <h3 className="font-heading font-bold text-xl text-dark">{item.step}</h3>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark mb-3">What to do</h4>
                    <p className="text-muted text-sm">{item.detail}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark mb-3">What good looks like</h4>
                    <p className="text-orange text-sm font-medium">{item.output}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              The Basic AI Agent Stack
            </h2>
            <p className="text-muted text-lg max-w-[640px] mx-auto">
              A useful agent needs a proper stack behind it. Prompting alone is not a system.
            </p>
          </div>

          <div className="space-y-8">
            {stack.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-card">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
                  <div>
                    <h3 className="font-heading font-bold text-xl text-dark mb-2">{item.layer}</h3>
                  </div>
                  <div>
                    <p className="text-muted text-sm">{item.role}</p>
                  </div>
                  <div>
                    <p className="text-orange text-sm font-medium">{item.note}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-28">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="max-w-[820px] mx-auto prose prose-lg text-muted">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-6 not-prose">
              What to Build First
            </h2>
            <p>
              If you are choosing a first project, pick something with clear rules, measurable outcomes, and enough volume to matter. The best starter use cases usually sit in operations, sales support, service, or admin.
            </p>
            <ul>
              {useCases.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <p>
              Need inspiration? Our <a href="/guides/ai-agent-examples" className="text-orange hover:underline">AI Agent Examples</a> guide and <a href="/guides/ai-agent-use-cases" className="text-orange hover:underline">AI Agent Use Cases by Industry</a> page show where agents are already creating value.
            </p>
            <p>
              For UK businesses in particular, it is smart to focus on workflows tied to revenue, service quality, or compliance. That tends to get buy-in much faster than internal novelty projects.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-light py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Common Mistakes When Building AI Agents
            </h2>
          </div>

          <div className="max-w-[820px] mx-auto space-y-6">
            {mistakes.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-card">
                <h3 className="font-heading font-bold text-lg text-dark mb-3">{item.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-28">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="max-w-[820px] mx-auto prose prose-lg text-muted">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-6 not-prose">
              When to Use OpenClaw
            </h2>
            <p>
              OpenClaw is a strong fit when you need agents that do real operational work, especially when multiple tools, workflows, or specialist agents need coordinating. It is particularly useful when you want practical orchestration rather than a toy demo.
            </p>
            <p>
              That does not mean it is the answer to every problem. If the task is tiny and single-purpose, a simpler automation may do the job. But once you need memory, branching logic, approvals, or multiple agents working together, a framework like OpenClaw starts to make a lot of sense.
            </p>
            <p>
              If you are weighing options, compare this with our <a href="/guides/best-ai-agents-2026" className="text-orange hover:underline">Best AI Agents 2026</a> and <a href="/guides/ai-agent-tools-comparison" className="text-orange hover:underline">AI Agent Tools Comparison 2026</a> guides.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-surface py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              How to Build an AI Agent: FAQs
            </h2>
          </div>

          <div className="max-w-[800px] mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-card">
                <h3 className="font-heading font-bold text-lg text-dark mb-3">{faq.question}</h3>
                <p className="text-muted text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-light py-16">
        <div className="max-w-[1140px] mx-auto px-6 text-center">
          <h3 className="font-heading font-bold text-xl text-dark mb-4">About Blue Canvas</h3>
          <p className="text-muted max-w-[640px] mx-auto text-sm">
            Blue Canvas helps UK businesses design, test, and deploy practical AI systems. Phil Patterson works with teams to identify the right first use case, choose the right stack, and turn AI agents into measurable business results.
          </p>
        </div>
      </section>

      <section className="bg-navy text-white py-24 relative overflow-hidden grain">
        <div className="max-w-[1140px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Ready to Build
                <br />
                <span className="text-orange">an AI Agent That Actually Helps?</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Get a free AI agent assessment and we&apos;ll map the right use case, stack, and rollout plan for your business.
              </p>
              <div className="space-y-3 text-white/60">
                <div className="flex items-center gap-3">
                  <span className="text-orange">✓</span>
                  Clear recommendation on where to start
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-orange">✓</span>
                  Practical advice on tools, data, and risk
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-orange">✓</span>
                  No fluff, just a sensible build plan
                </div>
              </div>
            </div>
            <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8">
              <h3 className="font-heading font-bold text-xl text-white mb-1">Free AI Agent Assessment</h3>
              <p className="text-white/60 text-sm mb-6">Find the smartest first step for your team</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-surface">
        <div className="max-w-[1140px] mx-auto px-6">
          <h2 className="font-heading text-2xl font-bold text-navy mb-8 text-center">Related Guides</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-[800px] mx-auto">
            <a href="/guides/what-is-an-ai-agent" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">What Is an AI Agent?</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/ai-agents-explained" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">AI Agents Explained</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/ai-agent-tools-comparison" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">AI Agent Tools Comparison 2026</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/ai-agent-consulting-uk" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">AI Agent Consulting UK</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
