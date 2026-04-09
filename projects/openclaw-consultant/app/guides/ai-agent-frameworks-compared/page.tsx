import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "AI Agent Frameworks Compared: OpenClaw vs CrewAI vs AutoGPT vs LangGraph",
  description: "Honest comparison of four major AI agent frameworks, OpenClaw, CrewAI, AutoGPT, and LangGraph, with guidance on where each one fits for UK businesses and delivery teams.",
  keywords: [
  "ai agent frameworks compared",
  "openclaw vs crewai vs autogpt vs langgraph",
  "best ai agent framework",
  "multi agent framework comparison",
  "openclaw comparison",
  "crewai comparison",
  "autogpt comparison",
  "langgraph comparison"
],
  alternates: { canonical: "https://openclawconsultant.co.uk/guides/ai-agent-frameworks-compared" },
  openGraph: {
    title: "AI Agent Frameworks Compared: OpenClaw vs CrewAI vs AutoGPT vs LangGraph",
    description: "Honest comparison of four major AI agent frameworks, OpenClaw, CrewAI, AutoGPT, and LangGraph, with guidance on where each one fits for UK businesses and delivery teams.",
    url: "https://openclawconsultant.co.uk/guides/ai-agent-frameworks-compared",
    type: "article",
  },
};

const intro = [
  "Teams often compare AI agent frameworks as if they are buying a faster database or a nicer project management tool. They are not. Each framework bakes in a different assumption about where agents run, how they remember, how they call tools, how much human control exists, and who is expected to operate the system day to day.",
  "OpenClaw is strongest when you need persistent agents that can live in business channels, use real tools, and operate with clear human oversight. CrewAI is good for Python-first teams that want agent crews tackling defined tasks and research-style workflows. LangGraph is powerful when you need explicit stateful graph control and are comfortable engineering the orchestration yourself. AutoGPT helped define the category, but many teams now treat it more as a reference point than a default production choice.",
  "Blue Canvas usually frames the decision around business reality, not GitHub excitement. Phil Patterson asks who owns the workflow, where the approvals sit, how the agent is observed in production, and whether the organisation wants a runtime, a framework, or an experimentation kit. Those questions narrow the shortlist quickly."
];
const highlights = [
  {
    "value": "4",
    "label": "Frameworks worth knowing in this category"
  },
  {
    "value": "1",
    "label": "Wrong choice that can add months of rework"
  },
  {
    "value": "Ops",
    "label": "OpenClaw bias towards real business workflows"
  },
  {
    "value": "Code",
    "label": "LangGraph and CrewAI bias towards builders"
  }
];
const cards = [
  {
    "title": "OpenClaw",
    "left": "Teams that want always-on agents operating through Telegram, WhatsApp, Discord, browser tools, shell access, memory files, and real workflow orchestration. It is especially strong when the agent needs to behave like a dependable operator rather than a one-off code routine.",
    "middle": "You still need process design, security boundaries, and a sensible runtime setup. It is not a magic shortcut for badly defined operations, and non-technical teams still need implementation support if they want more than a basic setup.",
    "right": "Best choice for many operational business use cases, especially where human approvals, persistent context, and specialist subagents matter."
  },
  {
    "title": "CrewAI",
    "left": "Developer teams, especially Python-native ones, that want to define agents with roles and tasks and run them through sequential or hierarchical processes. Good for content, research, and internal task pipelines.",
    "middle": "CrewAI is task-oriented rather than naturally operational. If you want agents sitting in live business channels with durable memory and direct operator workflows, you may end up building significant surrounding infrastructure.",
    "right": "A strong framework for technical teams that want fast experimentation and understandable abstractions, less ideal when you need a live agent runtime from day one."
  },
  {
    "title": "AutoGPT",
    "left": "People learning about autonomous agent loops, long-horizon tasks, and the history of the agent category. It remains influential because it made the autonomy conversation concrete for a huge audience.",
    "middle": "Many production teams now find it harder to trust, constrain, and operate than newer frameworks. It can encourage a level of autonomy that sounds exciting in a demo but becomes messy in a real business process.",
    "right": "Useful as a reference and for experimentation, but usually not the first recommendation for operational deployments in 2026."
  },
  {
    "title": "LangGraph",
    "left": "Product and engineering teams that want tight control over state, branching, retries, checkpoints, and graph-based execution. It suits teams building agent behaviour as product architecture rather than simply automating one workflow.",
    "middle": "That power comes with engineering overhead. You get precision, but you are responsible for a lot more design and operating complexity than you would be with an opinionated runtime such as OpenClaw.",
    "right": "Excellent when custom control is the priority and you have the engineering depth to support it, overkill for many first deployments."
  }
];
const sections = [
  {
    "title": "Where buyers go wrong",
    "paragraphs": [
      "The most common mistake is choosing a framework because it looks sophisticated rather than because it matches the organisation’s operating model. A business ops team may not need graph-level orchestration control, while a product team embedding agents inside software may absolutely need it. The wrong choice creates either unnecessary engineering work or frustrating operational limits.",
      "A second mistake is underestimating observability and approvals. Demos focus on what the agent can do. Production value comes from knowing what it did, why it did it, and when a human can stop or redirect it. Frameworks differ sharply in how much of that they give you out of the box versus how much you have to build yourself.",
      "The final mistake is forcing one framework to cover every use case. Many companies benefit from using one operational runtime for business workflows and a separate framework for internal product experiments. The stack does not have to be ideological."
    ],
    "bullets": [
      "Choose the framework that fits the workflow owner, not the loudest online recommendation",
      "Always budget for monitoring, evaluation, and permissions design",
      "Separate experimentation needs from operational needs",
      "Do not confuse autonomy with value"
    ]
  },
  {
    "title": "Why OpenClaw stands out for operational workflows",
    "paragraphs": [
      "OpenClaw is not just a library for developers. It is a runtime designed around the idea that agents should be able to live in real work environments, use tools, message humans, spawn specialists, and maintain useful context over time. That operating model is unusually practical for businesses that want AI agents integrated into existing channels rather than hidden behind a custom internal app.",
      "This matters for consulting and implementation. Blue Canvas can put an OpenClaw agent into a real workflow quickly, then refine from live usage. Phil Patterson tends to prefer that because it shortens the route from concept to measurable business value. You learn from the operation itself instead of waiting for a perfect product build.",
      "OpenClaw is particularly compelling when multiple workflows need different specialist agents. Persistent memory, messaging, and tooling let those agents behave more like a digital team than a one-off script."
    ],
    "bullets": [
      "Strong fit for inbox, channel, browser, and file-driven workflows",
      "Specialist subagents help split responsibilities cleanly",
      "Human-in-the-loop design is easier to make visible",
      "Useful for both technical and semi-technical operating teams"
    ]
  },
  {
    "title": "Where CrewAI, AutoGPT, and LangGraph fit better",
    "paragraphs": [
      "CrewAI fits nicely when the main owner is a Python team that wants to define clear agent roles and run multi-step processes in code. If the goal is internal research pipelines, content production flows, or bounded task orchestration, it can be a straightforward choice.",
      "LangGraph fits when precision matters more than speed. If you are building a customer-facing product or internal platform where state control, retry logic, and deterministic routing are core requirements, LangGraph earns its complexity. It is the framework for teams who genuinely want to engineer the orchestration layer in detail.",
      "AutoGPT is still important historically and conceptually, but many businesses now treat it as inspiration rather than the final production answer. If operational trust, controls, and maintainability matter, newer approaches are usually stronger."
    ],
    "bullets": [
      "CrewAI is strongest in Python-heavy builder environments",
      "LangGraph is strongest where graph control and state are mission-critical",
      "AutoGPT is more educational or experimental for most teams today",
      "The business context should decide the framework, not online momentum"
    ]
  },
  {
    "title": "A sensible selection process",
    "paragraphs": [
      "A good selection process starts with one workflow and one owner. Define what the agent needs to observe, what it should produce, which systems matter, and where human approvals sit. Once that is clear, the framework shortlist usually narrows itself.",
      "The next step is a pilot that tests real work, not just synthetic prompts. If a framework performs well in a demo but creates operational ambiguity, weak logs, or awkward permissions, that will only get worse at scale.",
      "Blue Canvas normally recommends choosing the least complicated option that can still support the future direction. You want enough headroom for growth, but not so much infrastructure that the first deployment stalls under its own weight."
    ],
    "bullets": [
      "Start with one owned workflow and one success metric",
      "Pilot against real operational inputs, not toy examples",
      "Score frameworks on observability, control, and implementation effort",
      "Prefer the route that gets to value without trapping the team later"
    ]
  }
];
const faqs = [
  {
    "question": "Which framework is easiest for a non-technical business team?",
    "answer": "Usually OpenClaw, because it behaves more like an operational runtime than a pure developer toolkit. It still benefits from implementation support, but it maps well to real business workflows and communication channels."
  },
  {
    "question": "Which framework is best for product teams building custom agent systems?",
    "answer": "LangGraph is often the strongest choice when the product team wants fine-grained state control and is happy owning more engineering complexity."
  },
  {
    "question": "Is CrewAI better than OpenClaw?",
    "answer": "Not categorically. CrewAI is often better for Python-first task orchestration. OpenClaw is often better for persistent, real-world operational agents with messaging, memory, and broader tool access."
  },
  {
    "question": "Should I still consider AutoGPT?",
    "answer": "You should understand it, but many production teams now treat it as a reference point rather than the first framework they would deploy into core operations."
  },
  {
    "question": "Can I combine these tools?",
    "answer": "Yes. Some organisations use OpenClaw for operational workflows and a developer-first framework such as LangGraph or CrewAI for product or experimentation work. The right answer does not have to be one tool for everything."
  },
  {
    "question": "What existing guides should I read next?",
    "answer": "Read OpenClaw vs CrewAI, OpenClaw vs AutoGen, OpenClaw vs LangChain, and OpenClaw for Teams for deeper context on the trade-offs behind the shortlist."
  }
];
const relatedGuides = [
  {
    "title": "OpenClaw vs CrewAI Comparison",
    "href": "/guides/openclaw-vs-crew-ai"
  },
  {
    "title": "OpenClaw vs AutoGen Comparison",
    "href": "/guides/openclaw-vs-autogen"
  },
  {
    "title": "OpenClaw vs LangChain",
    "href": "/guides/openclaw-vs-langchain"
  },
  {
    "title": "OpenClaw for Teams: Multi-Agent Guide",
    "href": "/guides/openclaw-for-teams"
  }
];
const comparisonRows: Array<{ criteria: string; openclaw: string; crewai: string; autogpt: string; langgraph: string; }> = [
  {
    "criteria": "Best fit",
    "openclaw": "Persistent business agents with real tools and messaging channels",
    "crewai": "Python crews for task-based collaboration and research flows",
    "autogpt": "Experimental autonomy and learning the category",
    "langgraph": "Custom, stateful agent workflows engineered in detail"
  },
  {
    "criteria": "Runtime model",
    "openclaw": "Always-on runtime, self-hosted, message-driven",
    "crewai": "Run a crew per task or process",
    "autogpt": "Autonomous loop patterns, often experiment-led",
    "langgraph": "Graph-defined execution with explicit state transitions"
  },
  {
    "criteria": "Memory and context",
    "openclaw": "Built around persistent memory patterns and files",
    "crewai": "Mostly task-scoped unless you add your own memory layer",
    "autogpt": "Varies by implementation, often less predictable",
    "langgraph": "Highly controllable, but you design the memory behaviour"
  },
  {
    "criteria": "Tooling",
    "openclaw": "Browser, shell, files, messaging, MCP, web, and orchestration",
    "crewai": "Python tools and integrations, solid for developer teams",
    "autogpt": "Flexible in theory, uneven in practice",
    "langgraph": "Anything you engineer, which is both strength and overhead"
  },
  {
    "criteria": "Human oversight",
    "openclaw": "Strong fit for approvals, logs, and delegated workflows",
    "crewai": "Possible, but you design the process around it",
    "autogpt": "Often weaker in production control patterns",
    "langgraph": "Excellent if you are willing to build it carefully"
  },
  {
    "criteria": "Business adoption",
    "openclaw": "Fastest route when operations ownership matters",
    "crewai": "Good for technical teams running internal tools",
    "autogpt": "Limited production confidence for many buyers",
    "langgraph": "Strong for product teams with engineering capacity"
  },
  {
    "criteria": "Time to value",
    "openclaw": "Fast for operational assistants and agent teams",
    "crewai": "Fast for developers, slower for non-technical operators",
    "autogpt": "Can be noisy and inconsistent",
    "langgraph": "Usually slower, but more precise when done well"
  }
];

export default function AiAgentFrameworksComparedPage() {
  return (
    <>
      <section className="hero-gradient relative overflow-hidden min-h-[70vh] flex items-center grain">
        <div className="max-w-[1140px] mx-auto px-6 relative z-10 py-20">
          <div className="max-w-[760px]">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-orange rounded-full" />
              <span className="text-white/80 text-sm font-medium">Framework Comparison</span>
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-[3.2rem] font-extrabold text-white mb-6 leading-[1.05] tracking-tight">
              AI Agent Frameworks Compared:
              <br />
              <span className="text-orange">OpenClaw vs CrewAI vs AutoGPT vs LangGraph</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl max-w-[620px] mb-10 leading-relaxed">
              These tools are not interchangeable. Some are best for persistent business operations, some for developer-defined workflows, and some are better as learning tools than production foundations. Picking the wrong framework creates months of avoidable pain.
            </p>
            <div className="flex flex-wrap gap-4 text-white/60 text-sm mb-8">
              <span className="flex items-center gap-2">
                <span className="text-orange">●</span>
                16 min read
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
              Start with the operating model, not the hype
            </h2>
            {intro.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {comparisonRows.length > 0 && (
            <section className="mb-20">
              <div className="text-center mb-10">
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">Head-to-head comparison</h2>
                <p className="text-muted text-lg max-w-[720px] mx-auto">The table below compresses the trade-offs that matter most once you move beyond demos.</p>
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
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">Framework snapshots</h2>
              <p className="text-muted text-lg max-w-[720px] mx-auto">None of these tools is “best” in the abstract. They win in different environments.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {cards.map((card, index) => (
                <div key={index} className="bg-surface rounded-2xl p-8 border border-border-light shadow-sm">
                  <h3 className="font-heading text-2xl font-bold text-dark mb-5">{card.title}</h3>
                  <div className="space-y-5">
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-[0.14em] text-orange mb-2">Best for</div>
                      <p className="text-sm text-muted-dark leading-relaxed">{card.left}</p>
                    </div>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-[0.14em] text-orange mb-2">Trade-offs</div>
                      <p className="text-sm text-muted-dark leading-relaxed">{card.middle}</p>
                    </div>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-[0.14em] text-orange mb-2">Verdict</div>
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
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">AI agent framework comparison FAQs</h2>
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
