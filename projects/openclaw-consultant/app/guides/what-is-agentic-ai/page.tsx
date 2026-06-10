import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "What Is Agentic AI? The Complete Guide",
  description: "Clear explanation of agentic AI, how it differs from chatbots and traditional automation, and where UK businesses are using agentic systems in practice.",
  keywords: [
  "what is agentic ai",
  "agentic ai meaning",
  "agentic ai explained",
  "agentic ai vs chatbot",
  "agentic systems for business",
  "autonomous ai agents",
  "agentic workflow ai",
  "agentic ai guide"
],
  alternates: { canonical: "https://openclawconsultant.co.uk/guides/what-is-agentic-ai" },
  openGraph: {
    title: "What Is Agentic AI? The Complete Guide",
    description: "Clear explanation of agentic AI, how it differs from chatbots and traditional automation, and where UK businesses are using agentic systems in practice.",
    url: "https://openclawconsultant.co.uk/guides/what-is-agentic-ai",
    type: "article",
  },
};

const intro = [
  "Agentic AI describes software that can take a goal, work out the next steps, use tools, react to new information, and keep progressing without needing a human to type every instruction one by one. The key idea is agency. The system does not simply generate language. It takes action in pursuit of an outcome.",
  "That does not mean agentic AI should be left alone to do whatever it wants. In serious deployments, it operates inside boundaries. It has a defined role, a set of tools, known data sources, and rules about when to escalate. The value comes from structured autonomy, not from chaos.",
  "Blue Canvas often explains it this way: ChatGPT is like a smart adviser. An agentic system is like a digital operator. Phil Patterson usually helps clients spot the difference by mapping a workflow. If the AI needs to read, decide, act, update systems, and follow up over time, you are in agentic territory. That is where runtimes like OpenClaw start to matter."
];
const highlights = [
  {
    "value": "Goal",
    "label": "Works towards outcomes, not just prompts"
  },
  {
    "value": "Tools",
    "label": "Uses systems, files, browser, and APIs"
  },
  {
    "value": "Memory",
    "label": "Keeps context across steps and sessions"
  },
  {
    "value": "Escalation",
    "label": "Hands off to humans when needed"
  }
];
const cards = [
  {
    "title": "Perception",
    "left": "An agentic system needs a way to observe the world around it. That could mean reading an inbox, checking a CRM record, looking at a dashboard, or pulling data from an API.",
    "middle": "The system ingests structured and unstructured signals, classifies what matters, and works out whether the incoming event is routine, urgent, or ambiguous.",
    "right": "Without perception, the AI can only answer what a human manually feeds it. That limits it to a narrow, reactive role."
  },
  {
    "title": "Reasoning and planning",
    "left": "The agent has to decide what to do next. This includes choosing a sequence of actions, recognising when information is missing, and deciding whether a human is needed.",
    "middle": "Modern agentic systems typically combine prompts, structured rules, memory, and tool outputs to build a lightweight plan that adapts as the workflow unfolds.",
    "right": "This is the difference between a one-shot response and a system that can navigate a real business process."
  },
  {
    "title": "Action",
    "left": "The AI needs an execution layer. That might be sending a message, updating a record, creating a task, browsing a website, or calling an external API.",
    "middle": "Action is usually constrained by permissions, thresholds, and workflow rules so the system can operate quickly without becoming reckless.",
    "right": "Once AI can act, it stops being a content toy and becomes part of the operation."
  },
  {
    "title": "Memory and learning loops",
    "left": "Agentic systems are far more useful when they remember prior context, past outcomes, and recurring user preferences or process rules.",
    "middle": "Memory can live in files, vector stores, structured logs, or system records. Feedback from human reviewers then improves prompts, routing, and guardrails over time.",
    "right": "This is what lets an agent become more reliable and less repetitive the longer it is used."
  }
];
const sections = [
  {
    "title": "How agentic AI differs from chatbots and classic automation",
    "paragraphs": [
      "A chatbot is reactive. It responds when you speak to it and often stops there. Traditional automation is deterministic. It follows a fixed script and breaks when the inputs change. Agentic AI sits in the middle. It can understand messy real-world inputs and still move through a sequence of actions towards a goal.",
      "That combination is why agentic AI is suddenly useful for business operations. Many workflows are neither simple enough for rigid automation nor complex enough to justify full human handling. They need a system that can cope with variation but still follow rules. Agentic AI fills that gap.",
      "The important point is that “agentic” does not mean infinitely autonomous. In mature setups, the agent knows when to stop, ask, or escalate. Good design matters more than maximum freedom."
    ],
    "bullets": [
      "Chatbots answer questions, agents complete tasks",
      "Traditional automation is brittle, agents adapt within boundaries",
      "Memory and tool use are core to agentic systems",
      "Human supervision remains part of the architecture"
    ]
  },
  {
    "title": "Why businesses care now",
    "paragraphs": [
      "The underlying models have become good enough at understanding language, summarising context, and following structured instructions that they can finally handle workflows which used to collapse under ambiguity. At the same time, the cost of experimentation has fallen dramatically.",
      "That creates a new opportunity for small and medium-sized businesses, not just large enterprises. A company no longer needs a giant data science team to automate an inbox, support pipeline, or research workflow. It needs a clear process, sensible tooling, and a runtime that can manage the agent safely.",
      "OpenClaw is interesting in this context because it gives businesses a way to run agentic systems in channels and environments where work already happens. Instead of building an entirely separate application first, you can often start inside the existing operational flow."
    ],
    "bullets": [
      "Costs are lower, but process clarity is still essential",
      "The first wins usually come from workflow support, not full autonomy",
      "Persistent runtimes shorten the path from pilot to real use",
      "Business value comes from reduced friction, not just novelty"
    ]
  },
  {
    "title": "Where agentic AI shows up in practice",
    "paragraphs": [
      "Customer support is a common example. An agent reads an incoming query, looks up order or account data, pulls the relevant policy, drafts the answer, and escalates if the case is sensitive or unclear. That is a compact, high-value agentic loop.",
      "Finance, operations, recruitment, and property workflows show the same pattern. The AI is not replacing the department. It is taking on the repetitive coordination work that slows the department down and makes experienced staff feel like administrators.",
      "Blue Canvas usually helps clients start with one narrow loop and one metric. Phil Patterson prefers to prove value through a visible operational improvement rather than a broad promise about “AI transformation”. That is a healthier way to adopt agentic systems."
    ],
    "bullets": [
      "Look for multi-step workflows with repeatable judgement",
      "Prefer work with clear escalation rules and measurable outputs",
      "Start where response time or backlog is already hurting the business",
      "Treat the agent as part of a team, not a magic replacement"
    ]
  },
  {
    "title": "What makes an agentic AI deployment trustworthy",
    "paragraphs": [
      "Trust comes from boundaries, not bravado. The system should have limited permissions, clear source material, visible logs, and a known owner. If nobody can explain what the agent can do or why it made a decision, the design is not ready for production.",
      "Evaluation matters as much as implementation. Teams need to review outputs, track edge cases, and tighten prompts or rules where the agent drifts. The fastest way to destroy trust is to treat the first successful demo as proof the whole workflow is solved.",
      "This is where Blue Canvas can be helpful, because practical implementation lives in the details. Choosing the right workflow, role boundaries, and runtime matters more than choosing the flashiest model. OpenClaw becomes powerful when that design work has been done properly."
    ],
    "bullets": [
      "Constrain tools and data access by role",
      "Keep human review for risky or ambiguous actions",
      "Log source material and action history",
      "Improve based on real edge cases, not assumptions"
    ]
  }
];
const faqs = [
  {
    "question": "Is agentic AI just another name for AI agents?",
    "answer": "They are closely related. “Agentic AI” describes the broader capability and design pattern. “AI agent” usually refers to the specific software worker implementing that pattern in a workflow."
  },
  {
    "question": "Does agentic AI mean fully autonomous AI?",
    "answer": "No. In business settings, the best agentic systems are usually semi-autonomous. They handle routine work independently and hand off anything risky, unusual, or high-value to a human."
  },
  {
    "question": "Can small businesses use agentic AI?",
    "answer": "Yes. In fact, small teams often get fast value because repetitive work is concentrated in a few people. A well-scoped agent can free serious time without requiring a huge transformation programme."
  },
  {
    "question": "How is this different from RPA?",
    "answer": "RPA follows fixed rules and usually breaks when the environment changes. Agentic AI can interpret context, adapt to variation, and still pursue the intended outcome, especially when paired with structured rules and human approvals."
  },
  {
    "question": "Where does OpenClaw fit?",
    "answer": "OpenClaw is a runtime and toolset for operating AI agents in the real world. It is useful when the agent needs persistent memory, messaging channels, browser or shell access, and the ability to orchestrate specialist subagents."
  },
  {
    "question": "What existing guides should I read next?",
    "answer": "Read Autonomous AI Agents, AI Agents Explained, What Is an AI Agent, and Future of AI Agents to go deeper on the concepts and business implications."
  }
];
const relatedGuides = [
  {
    "title": "Autonomous AI Agents",
    "href": "/guides/autonomous-ai-agents"
  },
  {
    "title": "AI Agents Explained: How They Work",
    "href": "/guides/ai-agents-explained"
  },
  {
    "title": "What Is an AI Agent?",
    "href": "/guides/ai-agents-explained"
  },
  {
    "title": "Future of AI Agents",
    "href": "/guides/future-of-ai-agents"
  }
];
const comparisonRows: Array<{ criteria: string; openclaw: string; crewai: string; autogpt: string; langgraph: string; }> = [];

export default function WhatIsAgenticAiPage() {
  return (
    <>
      <section className="hero-gradient relative overflow-hidden min-h-[70vh] flex items-center grain">
        <div className="max-w-[1140px] mx-auto px-6 relative z-10 py-20">
          <div className="max-w-[760px]">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-orange rounded-full" />
              <span className="text-white/80 text-sm font-medium">Agentic AI Basics</span>
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-[3.2rem] font-extrabold text-white mb-6 leading-[1.05] tracking-tight">
              What Is
              <br />
              <span className="text-orange">Agentic AI?</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl max-w-[620px] mb-10 leading-relaxed">
              Agentic AI is the shift from systems that answer questions to systems that pursue goals. That sounds subtle. Operationally, it is massive. It changes AI from a tool you prompt into a worker you direct and supervise.
            </p>
            <div className="flex flex-wrap gap-4 text-white/60 text-sm mb-8">
              <span className="flex items-center gap-2">
                <span className="text-orange">●</span>
                14 min read
              </span>
              <span className="flex items-center gap-2">
                <span className="text-orange">●</span>
                Updated April 2026
              </span>
            </div>
            <a
              href="#guide"
              className="inline-flex items-center justify-center bg-orange text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-orange-hover transition-all hover:-translate-y-0.5 shadow-glow-orange"
            >
              Read the Guide
            </a>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#fafbfc] to-transparent" />
      </section>

      <section className="bg-white py-16">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <div key={index} className="bg-surface rounded-2xl p-6 text-center shadow-sm border border-border-light">
                <div className="text-3xl font-bold text-orange mb-2">{item.value}</div>
                <div className="text-sm text-muted-dark">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <article id="guide" className="bg-white py-8">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="max-w-[800px] mx-auto prose prose-lg text-muted-dark mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-6 not-prose">
              The practical definition
            </h2>
            {intro.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {comparisonRows.length > 0 && (
            <section className="mb-20">
              <div className="text-center mb-10">
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">Comparison at a Glance</h2>
                <p className="text-muted text-lg max-w-[720px] mx-auto"></p>
              </div>
              <div className="overflow-x-auto bg-surface rounded-2xl shadow-card border border-border-light">
                <table className="w-full text-sm min-w-[760px]">
                  <thead>
                    <tr className="border-b border-orange/20">
                      <th className="text-left py-4 px-6 font-bold text-dark">Criteria</th>
                      <th className="text-left py-4 px-4 font-bold text-dark">OpenClaw</th>
                      <th className="text-left py-4 px-4 font-bold text-dark">CrewAI</th>
                      <th className="text-left py-4 px-4 font-bold text-dark">AutoGPT</th>
                      <th className="text-left py-4 px-4 font-bold text-dark">LangGraph</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows.map((row, index) => (
                      <tr key={index} className="border-b border-border-light last:border-b-0 align-top">
                        <td className="py-4 px-6 font-semibold text-dark">{row.criteria}</td>
                        <td className="py-4 px-4 text-muted-dark">{row.openclaw}</td>
                        <td className="py-4 px-4 text-muted-dark">{row.crewai}</td>
                        <td className="py-4 px-4 text-muted-dark">{row.autogpt}</td>
                        <td className="py-4 px-4 text-muted-dark">{row.langgraph}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}

          <section className="mb-20">
            <div className="text-center mb-10">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">The building blocks of agentic AI</h2>
              <p className="text-muted text-lg max-w-[720px] mx-auto">If one of these pieces is missing, you usually have a useful assistant, not a true agentic system.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {cards.map((card, index) => (
                <div key={index} className="bg-surface rounded-2xl p-8 border border-border-light shadow-sm">
                  <h3 className="font-heading text-2xl font-bold text-dark mb-5">{card.title}</h3>
                  <div className="space-y-5">
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-[0.14em] text-orange mb-2">What it means</div>
                      <p className="text-sm text-muted-dark leading-relaxed">{card.left}</p>
                    </div>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-[0.14em] text-orange mb-2">How it works</div>
                      <p className="text-sm text-muted-dark leading-relaxed">{card.middle}</p>
                    </div>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-[0.14em] text-orange mb-2">Why it matters</div>
                      <p className="text-sm text-muted-dark leading-relaxed">{card.right}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-10 mb-20">
            {sections.map((section, index) => (
              <div key={index} className="bg-white rounded-2xl border border-border-light shadow-sm p-8 md:p-10">
                <h2 className="font-heading text-3xl font-bold text-dark mb-6">{section.title}</h2>
                <div className="space-y-5 text-muted-dark text-base leading-relaxed">
                  {section.paragraphs.map((paragraph, paragraphIndex) => (
                    <p key={paragraphIndex}>{paragraph}</p>
                  ))}
                </div>
                {section.bullets.length > 0 && (
                  <ul className="mt-6 grid gap-3 md:grid-cols-2">
                    {section.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex} className="flex gap-3 items-start bg-surface rounded-xl p-4 text-sm text-muted-dark">
                        <span className="text-orange mt-0.5">✓</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </section>
        </div>
      </article>

      <section className="bg-light py-16">
        <div className="max-w-[1140px] mx-auto px-6 text-center">
          <h3 className="font-heading font-bold text-xl text-dark mb-4">About Blue Canvas</h3>
          <p className="text-muted max-w-[760px] mx-auto text-sm leading-relaxed">
            Blue Canvas helps UK organisations move from AI curiosity to reliable operations. Through <a href="https://bluecanvas.ai" className="text-orange hover:underline">Blue Canvas</a>, Phil Patterson designs practical AI agent systems with clear guardrails, realistic ROI targets, and delivery plans that work in the real world. OpenClaw is a natural fit when a business needs persistent agents, strong tooling, and human oversight built in from day one.
          </p>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">Agentic AI FAQs</h2>
          </div>
          <div className="max-w-[860px] mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-surface rounded-2xl p-6 border border-border-light">
                <h3 className="font-heading font-bold text-lg text-dark mb-3">{faq.question}</h3>
                <p className="text-muted-dark text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy text-white py-24 relative overflow-hidden grain">
        <div className="max-w-[1140px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Get a free
                <br />
                <span className="text-orange">AI agent assessment</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                If you are weighing up AI agents, the best next step is a practical assessment. Blue Canvas and Phil Patterson can map the workflow, show what should stay human, and outline what an OpenClaw deployment would actually look like in your business.
              </p>
              <div className="space-y-3 text-white/60">
                <div className="flex items-center gap-3">
                  <span className="text-orange">✓</span>
                  Workflow review, not vague AI talk
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-orange">✓</span>
                  Clear view of quick wins, constraints, and ROI
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-orange">✓</span>
                  Honest recommendation on whether OpenClaw is the right fit
                </div>
              </div>
            </div>
            <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8">
              <h3 className="font-heading font-bold text-xl text-white mb-1">Get a free AI agent assessment</h3>
              <p className="text-white/60 text-sm mb-6">Speak to Blue Canvas about the workflows worth automating first</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-surface">
        <div className="max-w-[1140px] mx-auto px-6">
          <h2 className="font-heading text-2xl font-bold text-navy mb-8 text-center">Related Guides</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-[900px] mx-auto">
            {relatedGuides.map((guide, index) => (
              <a key={index} href={guide.href} className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
                <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">{guide.title}</h3>
                <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
