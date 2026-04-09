import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Multi-Agent Orchestration: Running AI Agent Teams",
  description: "Practical guide to multi-agent orchestration, specialist roles, routing, approvals, and how to run AI agent teams that actually improve business workflows.",
  keywords: [
  "multi agent orchestration",
  "ai agent orchestration",
  "running ai agent teams",
  "multi agent workflow",
  "orchestrator agent",
  "specialist ai agents",
  "openclaw multi agent",
  "agent team architecture"
],
  alternates: { canonical: "https://openclawconsultant.co.uk/guides/multi-agent-orchestration" },
  openGraph: {
    title: "Multi-Agent Orchestration: Running AI Agent Teams",
    description: "Practical guide to multi-agent orchestration, specialist roles, routing, approvals, and how to run AI agent teams that actually improve business workflows.",
    url: "https://openclawconsultant.co.uk/guides/multi-agent-orchestration",
    type: "article",
  },
};

const intro = [
  "A single AI agent is often enough for one bounded workflow. But the moment the work spans research, drafting, checking, execution, reporting, and approvals, a single agent starts doing too many jobs badly. It forgets context, mixes roles, and becomes harder to trust.",
  "Multi-agent orchestration solves that by splitting the work into specialist roles. One agent triages, another gathers data, another drafts, another checks, and a human decides where judgement or accountability demands it. The result is not just more throughput. It is usually better clarity and better control.",
  "Blue Canvas often sees businesses jump straight to “agent teams” because it sounds advanced. Phil Patterson usually slows that down. The right question is not how many agents you can run. It is which role boundaries would genuinely improve the workflow. OpenClaw is powerful here because it supports specialist agents, handoffs, memory, and real operational tooling in one runtime."
];
const highlights = [
  {
    "value": "Specialists",
    "label": "Better role clarity than one general agent"
  },
  {
    "value": "Parallel",
    "label": "Work can happen simultaneously where useful"
  },
  {
    "value": "Checks",
    "label": "Review agents improve reliability"
  },
  {
    "value": "Control",
    "label": "Approvals stay visible inside the workflow"
  }
];
const cards = [
  {
    "title": "Orchestrator agent",
    "left": "The coordinator that receives the goal, understands the current state, and decides which specialist should act next.",
    "middle": "It routes work, manages handoffs, keeps the wider objective in view, and handles escalation when specialists disagree or confidence falls.",
    "right": "Without an orchestrator, teams of agents often drift into duplication or conflicting actions."
  },
  {
    "title": "Specialist worker agents",
    "left": "Role-specific agents focused on one domain, for example finance, support, browser research, document drafting, or CRM updates.",
    "middle": "They perform the detailed work with scoped tools and scoped knowledge. Their narrow remit usually makes them easier to trust and improve.",
    "right": "Specialisation improves quality because each agent is designed for one job instead of every job."
  },
  {
    "title": "Reviewer or QA agent",
    "left": "An agent responsible for checking whether the output is complete, safe, policy-aligned, and ready for either execution or human approval.",
    "middle": "It validates drafts, compares outputs against rules, and highlights anything that looks risky or incomplete before the process moves on.",
    "right": "A reviewer agent often creates more trust than adding another worker agent."
  },
  {
    "title": "Human approval point",
    "left": "Not an agent, but an essential part of the architecture whenever the workflow includes legal, financial, reputational, or high-empathy decisions.",
    "middle": "Humans should receive a summary, the key evidence, and a proposed next step rather than being dropped into a messy thread with no context.",
    "right": "This keeps accountability clear and prevents the agent team from becoming an ungoverned black box."
  }
];
const sections = [
  {
    "title": "When a single agent stops being enough",
    "paragraphs": [
      "Single agents become weak when the workflow contains conflicting responsibilities. Research needs curiosity. QA needs scepticism. Execution needs precision. Customer communication needs tone and context. Cramming all of that into one agent usually creates a system that is average at everything and reliable at nothing.",
      "Splitting those jobs improves more than output quality. It also improves observability. Leaders can see where the workflow is succeeding, where it is stalling, and which specialist needs tuning. That is much harder when one generalist agent is doing every step under one long prompt.",
      "This is why multi-agent orchestration is less about novelty and more about operating design. It mirrors how good human teams already work."
    ],
    "bullets": [
      "Use multiple agents when roles have genuinely different decision criteria",
      "Do not multiply agents just because the tooling makes it easy",
      "Role clarity is a stronger goal than maximum autonomy",
      "One reviewer can often improve a system more than two extra workers"
    ]
  },
  {
    "title": "How to design the handoffs",
    "paragraphs": [
      "Handoffs are the centre of the system. Every agent should know what input it expects, what output it must produce, and what should trigger escalation. If those contracts are vague, orchestration becomes guesswork and the team feels brittle.",
      "The best handoffs are structured. Instead of one agent sending a long rambling summary to another, it passes a typed payload with the key fields, assumptions, source references, and recommended next step. That keeps downstream behaviour more consistent and easier to debug.",
      "Blue Canvas often focuses heavily on this stage because businesses tend to think about agents individually instead of thinking about the spaces between them. Phil Patterson usually finds that improving the handoff design unlocks more value than changing the model."
    ],
    "bullets": [
      "Define expected input and output per agent role",
      "Pass structured context, not unfiltered transcript dumps",
      "Make confidence thresholds explicit in the handoff contract",
      "Keep escalation destinations human-readable and owned"
    ]
  },
  {
    "title": "Why OpenClaw is a strong orchestration runtime",
    "paragraphs": [
      "OpenClaw is useful for multi-agent teams because it already assumes agents may need to message, use tools, consult memory, and spawn specialist workers. That operating model maps closely to real business workflows where tasks cross files, channels, systems, and people.",
      "A practical benefit is that each specialist can have its own permissions and remit. A support agent does not need finance tools. A browser research agent does not need access to production CRM updates. Splitting these boundaries improves both safety and maintainability.",
      "For businesses working with Blue Canvas, this makes rollout easier to explain. Phil Patterson can design a small team of specialists around the actual process rather than trying to make one giant prompt cover everything."
    ],
    "bullets": [
      "Persistent agents help preserve continuity between handoffs",
      "Specialist permissions reduce unnecessary risk exposure",
      "Messaging and memory make human oversight easier",
      "Operational runtimes beat ad hoc scripts for live workflows"
    ]
  },
  {
    "title": "How to roll out agent teams without overengineering",
    "paragraphs": [
      "Start with one workflow and two or three roles. For example, a triage agent, a worker agent, and a reviewer. That is enough to learn whether specialisation is improving the process or simply adding ceremony.",
      "Only add more agents when a clear new responsibility appears. Every new role should remove a real bottleneck or risk. If it does not, the architecture is getting fancier without becoming more useful.",
      "A good rollout ends with visible ownership, clear metrics, and a system the human team can actually describe. If nobody can explain how the agent team works, it is too complicated."
    ],
    "bullets": [
      "Begin with two or three roles, not ten",
      "Add specialists only when they remove a known bottleneck",
      "Keep human approvals for sensitive decisions",
      "Optimise for clarity before scale"
    ]
  }
];
const faqs = [
  {
    "question": "When should I use multiple agents instead of one?",
    "answer": "Use multiple agents when the workflow genuinely contains different roles with different tools, different judgement criteria, or a need for review and approval. If one bounded agent can do the job well, keep it simple."
  },
  {
    "question": "Does multi-agent orchestration cost more?",
    "answer": "It can, but it often pays for itself because specialist agents can be simpler and more reliable. A small reviewer or routing agent may save far more than it costs by preventing bad outputs downstream."
  },
  {
    "question": "How do agents communicate with each other?",
    "answer": "The best systems use structured handoffs rather than free-form chat. Each agent receives the context, evidence, and next-step request in a predictable format."
  },
  {
    "question": "Where should humans stay in the loop?",
    "answer": "Anywhere the workflow touches money, legal exposure, customer relationships, or unusual edge cases. Humans should receive a clean summary and recommendation rather than an unstructured transcript."
  },
  {
    "question": "Is OpenClaw good for multi-agent teams?",
    "answer": "Yes. It is particularly useful when the team needs persistent agents, strong tooling, memory, messaging, and specialist role separation in a live operational environment."
  },
  {
    "question": "What existing guides should I read next?",
    "answer": "Read Multi-Agent Systems Explained, OpenClaw for Teams, OpenClaw Agent Team Setup, and OpenClaw vs CrewAI for adjacent architecture guidance."
  }
];
const relatedGuides = [
  {
    "title": "Multi-Agent Systems Explained",
    "href": "/guides/multi-agent-systems-explained"
  },
  {
    "title": "OpenClaw for Teams: Multi-Agent Guide",
    "href": "/guides/openclaw-for-teams"
  },
  {
    "title": "OpenClaw Agent Team Setup Guide",
    "href": "/guides/openclaw-agent-team-setup"
  },
  {
    "title": "OpenClaw vs CrewAI Comparison",
    "href": "/guides/openclaw-vs-crew-ai"
  }
];
const comparisonRows: Array<{ criteria: string; openclaw: string; crewai: string; autogpt: string; langgraph: string; }> = [];

export default function MultiAgentOrchestrationPage() {
  return (
    <>
      <section className="hero-gradient relative overflow-hidden min-h-[70vh] flex items-center grain">
        <div className="max-w-[1140px] mx-auto px-6 relative z-10 py-20">
          <div className="max-w-[760px]">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-orange rounded-full" />
              <span className="text-white/80 text-sm font-medium">Agent Teams</span>
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-[3.2rem] font-extrabold text-white mb-6 leading-[1.05] tracking-tight">
              Multi-Agent Orchestration:
              <br />
              <span className="text-orange">Running AI Agent Teams</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl max-w-[620px] mb-10 leading-relaxed">
              One agent can be useful. A well-orchestrated team of agents can transform throughput, quality, and control. The hard part is not creating more agents. It is deciding how they work together without creating chaos.
            </p>
            <div className="flex flex-wrap gap-4 text-white/60 text-sm mb-8">
              <span className="flex items-center gap-2">
                <span className="text-orange">●</span>
                15 min read
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
              Why orchestration matters once you move beyond a single agent
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
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">The core roles inside an agent team</h2>
              <p className="text-muted text-lg max-w-[720px] mx-auto">You do not need every role in every workflow, but these patterns show up again and again.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {cards.map((card, index) => (
                <div key={index} className="bg-surface rounded-2xl p-8 border border-border-light shadow-sm">
                  <h3 className="font-heading text-2xl font-bold text-dark mb-5">{card.title}</h3>
                  <div className="space-y-5">
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-[0.14em] text-orange mb-2">Role</div>
                      <p className="text-sm text-muted-dark leading-relaxed">{card.left}</p>
                    </div>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-[0.14em] text-orange mb-2">What it handles</div>
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
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">Multi-agent orchestration FAQs</h2>
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
