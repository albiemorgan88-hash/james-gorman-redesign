import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "AI Agents and Compliance Risk: What UK Businesses Need to Know",
  description: "Guide to compliance and risk for AI agents in UK businesses, covering governance, data protection, approvals, logging, model risk, and practical control frameworks.",
  keywords: [
  "ai agents compliance risk",
  "ai agent governance uk",
  "ai agent risk management",
  "ai agent compliance uk",
  "ai controls for business",
  "uk ai governance",
  "openclaw compliance",
  "ai agent audit trail"
],
  alternates: { canonical: "https://openclawconsultant.co.uk/guides/ai-agents-compliance-risk" },
  openGraph: {
    title: "AI Agents and Compliance Risk: What UK Businesses Need to Know",
    description: "Guide to compliance and risk for AI agents in UK businesses, covering governance, data protection, approvals, logging, model risk, and practical control frameworks.",
    url: "https://openclawconsultant.co.uk/guides/ai-agents-compliance-risk",
    type: "article",
  },
};

const intro = [
  "A lot of businesses ask whether AI agents are compliant as if compliance were a property you can buy off the shelf. It is not. An AI agent becomes safe or unsafe based on what it can access, what it can do, how it is supervised, and whether anyone can explain its behaviour after the fact.",
  "That matters more with agents than with passive AI tools because agents can act. They can read customer data, update records, trigger communications, or move a workflow forward. That creates governance questions around data protection, access control, human oversight, documentation, and operational accountability.",
  "Blue Canvas usually tackles this early in delivery. Phil Patterson’s view is simple, businesses adopt AI faster when the guardrails are explicit. OpenClaw can help because it supports clear tooling, role separation, and persistent logs, which makes governance easier to design than when AI is scattered across ad hoc scripts and disconnected apps."
];
const highlights = [
  {
    "value": "Logs",
    "label": "Every action should be reviewable and attributable"
  },
  {
    "value": "Least",
    "label": "Privilege beats broad access every time"
  },
  {
    "value": "Approvals",
    "label": "Sensitive actions need human checkpoints"
  },
  {
    "value": "Policy",
    "label": "Governance has to be workflow-specific"
  }
];
const cards = [
  {
    "title": "Data protection and privacy risk",
    "left": "The agent may access personal data, confidential documents, or sensitive operational records that it does not genuinely need for the task.",
    "middle": "Use role-based permissions, data minimisation, approved knowledge sources, retention rules, and clear records of processing. Keep access scoped to the workflow rather than the whole organisation.",
    "right": "The agent only sees what it needs, the business can justify why, and retained data follows the same governance standards as the rest of the operation."
  },
  {
    "title": "Decision quality and model risk",
    "left": "The agent may misunderstand context, apply the wrong policy, or produce a convincing but incorrect output that a busy team member signs off too quickly.",
    "middle": "Constrain the task, define confidence thresholds, keep humans in the loop for sensitive decisions, and review live output regularly. Use retrieval from approved sources instead of relying on model memory alone.",
    "right": "The system is helpful without pretending to be infallible, and quality improves because edge cases are visible and acted on."
  },
  {
    "title": "Security and access risk",
    "left": "Once an agent can use tools, browse, message, or update systems, over-broad permissions create obvious attack and misuse exposure.",
    "middle": "Separate specialist agents by role, restrict tool access, log actions, protect secrets properly, and make sure there is a straightforward way to pause or revoke the workflow.",
    "right": "Security controls fit the actual operating model rather than being bolted on after the deployment is already live."
  },
  {
    "title": "Governance and accountability risk",
    "left": "Teams may not know who owns the workflow, who reviews quality, or who decides when the agent can move from draft mode to execution mode.",
    "middle": "Assign ownership, define approval policies, document the workflow, and create a review cadence that covers performance, incidents, and policy drift.",
    "right": "The business can explain how the agent works, who is accountable, and what happens when something goes wrong."
  }
];
const sections = [
  {
    "title": "The UK context",
    "paragraphs": [
      "UK businesses do not need to wait for perfect global regulatory certainty before adopting AI agents, but they do need to respect the rules that already exist. Data protection, sector-specific regulation, consumer duties, employment considerations, and basic governance obligations still apply when the actor is an agent instead of a person.",
      "The practical implication is straightforward. If a workflow would need controls, logging, and oversight when done by a human or outsourced operator, it also needs those controls when done by an AI agent. The technology changes the execution model, not the need for accountability.",
      "This is why compliance work should be integrated into the rollout, not treated as a final legal sign-off after the build is complete. The earlier the operating model is clear, the easier the controls become."
    ],
    "bullets": [
      "Map existing regulatory duties onto the new workflow",
      "Treat AI agents as part of the operating model, not a side experiment",
      "Sector risk matters more than generic AI hype",
      "Governance should be proportionate to the action the agent can take"
    ]
  },
  {
    "title": "What a practical control stack looks like",
    "paragraphs": [
      "A good control stack starts with permissions. The agent should only access the systems and data necessary for its role. Next comes retrieval discipline, approved knowledge sources, current policies, and clearly bounded prompts so the system is working from something grounded rather than vague model recall.",
      "Then you add execution controls. Which actions can happen automatically? Which need approval? Which are forbidden? Those rules should be visible, documented, and tied to operational ownership. Finally, you need logs, review, and incident handling so the business can inspect behaviour over time rather than guessing whether the workflow is still safe.",
      "Blue Canvas often translates this into a delivery checklist because teams move faster when the controls are concrete. Phil Patterson generally avoids abstract governance talk unless it changes an actual design decision, which is usually the more useful way to handle compliance work."
    ],
    "bullets": [
      "Scope access first, then worry about autonomy level",
      "Use approved source material for policy-heavy workflows",
      "Create explicit no-go areas for the agent",
      "Review logs and incidents as part of normal operations"
    ]
  },
  {
    "title": "Why OpenClaw can help with governance",
    "paragraphs": [
      "OpenClaw gives businesses a runtime where agents, memory, tools, and workflows are visible instead of scattered. That matters for governance because it is easier to inspect what an agent can do, what it did, and how it is supposed to behave.",
      "Role separation is especially useful from a risk perspective. Instead of one all-access agent, businesses can run specialist agents with narrow tools and narrow responsibilities. That reduces blast radius and makes approvals more meaningful.",
      "For Blue Canvas clients, this creates a practical route to deployment. You can start with a low-risk workflow, prove the controls, and only then widen the role of the agent."
    ],
    "bullets": [
      "Persistent logs help investigation and review",
      "Specialist agents reduce unnecessary permissions",
      "Human approvals are easier to keep visible",
      "Governance becomes part of the runtime, not a separate spreadsheet exercise"
    ]
  },
  {
    "title": "Questions every business should answer before go-live",
    "paragraphs": [
      "Who owns the workflow? What data does the agent access? Which actions can it take alone? What should trigger escalation? How are quality issues detected? Who reviews incidents and drift? If the business cannot answer those questions, the deployment is not ready yet.",
      "The right goal is not zero risk. It is managed risk with clear accountability. Human work already contains risk. Good agent design reduces some of that risk and introduces new forms of it. Mature businesses compare both honestly instead of assuming manual work is automatically safer.",
      "If the control model is explicit, AI agent adoption becomes much less dramatic. It turns into an operational design question, which is exactly where it belongs."
    ],
    "bullets": [
      "Assign named workflow ownership before launch",
      "Document approval rules and emergency stop paths",
      "Define what constitutes a reportable quality or security incident",
      "Revisit the control model whenever the agent’s remit expands"
    ]
  }
];
const faqs = [
  {
    "question": "Are AI agents GDPR compliant?",
    "answer": "They can be, but only when the workflow is designed with lawful basis, data minimisation, access control, retention, and clear accountability in mind. Compliance depends on implementation, not on the label “AI”."
  },
  {
    "question": "Do all AI agent actions need human approval?",
    "answer": "No. Routine low-risk actions can often be automated safely. The key is to define where approvals are needed based on impact, sensitivity, and confidence."
  },
  {
    "question": "What is the biggest compliance mistake businesses make?",
    "answer": "Giving the agent vague scope and broad access before ownership, logging, and escalation rules are clear. Most compliance problems begin as design problems."
  },
  {
    "question": "How often should outputs be reviewed?",
    "answer": "Very frequently during rollout, then on a defined ongoing cadence. High-risk workflows need tighter review than low-risk internal support tasks."
  },
  {
    "question": "Can OpenClaw support a controlled deployment?",
    "answer": "Yes. It is especially useful where businesses need specialist roles, visible tooling, persistent logs, and human-in-the-loop workflows rather than opaque automation."
  },
  {
    "question": "What existing guides should I read next?",
    "answer": "Read AI Governance and Compliance UK, AI Risk Management Framework, AI Compliance Automation, and OpenClaw Enterprise Security and GDPR for deeper governance context."
  }
];
const relatedGuides = [
  {
    "title": "AI Governance & Compliance UK",
    "href": "/guides/ai-governance-compliance-uk"
  },
  {
    "title": "AI Risk Management Framework",
    "href": "/guides/ai-risk-management-framework"
  },
  {
    "title": "AI Compliance Automation: GDPR & More",
    "href": "/guides/ai-compliance-automation"
  },
  {
    "title": "OpenClaw Enterprise Security & GDPR",
    "href": "/guides/openclaw-enterprise-security-compliance"
  }
];
const comparisonRows: Array<{ criteria: string; openclaw: string; crewai: string; autogpt: string; langgraph: string; }> = [];

export default function AiAgentsComplianceRiskPage() {
  return (
    <>
      <section className="hero-gradient relative overflow-hidden min-h-[70vh] flex items-center grain">
        <div className="max-w-[1140px] mx-auto px-6 relative z-10 py-20">
          <div className="max-w-[760px]">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-orange rounded-full" />
              <span className="text-white/80 text-sm font-medium">Risk & Governance</span>
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-[3.2rem] font-extrabold text-white mb-6 leading-[1.05] tracking-tight">
              AI Agents and Compliance Risk:
              <br />
              <span className="text-orange">What UK Businesses Need to Know</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl max-w-[620px] mb-10 leading-relaxed">
              AI agents can save serious time, but they also create new risk if nobody defines permissions, approvals, logging, and accountability properly. The answer is not fear. It is governance that fits the workflow.
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
              Compliance risk starts with design, not afterthoughts
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
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">The main AI agent risk categories</h2>
              <p className="text-muted text-lg max-w-[720px] mx-auto">Most real-world issues fall into one of these buckets, and each bucket has practical controls.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {cards.map((card, index) => (
                <div key={index} className="bg-surface rounded-2xl p-8 border border-border-light shadow-sm">
                  <h3 className="font-heading text-2xl font-bold text-dark mb-5">{card.title}</h3>
                  <div className="space-y-5">
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-[0.14em] text-orange mb-2">Risk</div>
                      <p className="text-sm text-muted-dark leading-relaxed">{card.left}</p>
                    </div>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-[0.14em] text-orange mb-2">Control approach</div>
                      <p className="text-sm text-muted-dark leading-relaxed">{card.middle}</p>
                    </div>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-[0.14em] text-orange mb-2">What good looks like</div>
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
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">AI agent compliance and risk FAQs</h2>
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
