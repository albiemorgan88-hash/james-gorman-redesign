import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "AI Agents for Finance: Automation Beyond Spreadsheets",
  description: "How finance teams use AI agents for accounts payable, reconciliations, reporting, controls, and operational finance workflows beyond spreadsheet-heavy processes.",
  keywords: [
  "ai agents for finance",
  "finance ai agents",
  "finance automation ai",
  "accounts payable ai agent",
  "finance workflow automation",
  "month end ai automation",
  "ai for finance operations",
  "openclaw finance automation"
],
  alternates: { canonical: "https://openclawconsultant.co.uk/guides/ai-agents-for-finance" },
  openGraph: {
    title: "AI Agents for Finance: Automation Beyond Spreadsheets",
    description: "How finance teams use AI agents for accounts payable, reconciliations, reporting, controls, and operational finance workflows beyond spreadsheet-heavy processes.",
    url: "https://openclawconsultant.co.uk/guides/ai-agents-for-finance",
    type: "article",
  },
};

const intro = [
  "Finance work is often framed as a spreadsheet problem, but the real issue is workflow. Invoices arrive in different formats, approvals stall, bank movements need context, month-end tasks sprawl across checklists, and teams spend hours turning raw records into decisions someone can act on.",
  "That makes finance a strong use case for AI agents. The agent can gather records, apply rules, classify anomalies, draft communications, update systems, and hand edge cases to the finance lead with the relevant evidence already assembled. In other words, it reduces the admin around judgement rather than trying to replace judgement itself.",
  "Blue Canvas typically starts finance projects with one tightly bounded process such as AP handling, reconciliation support, or management reporting preparation. Phil Patterson focuses on keeping the control environment clear from day one. OpenClaw is a strong fit when the finance workflow spans several systems and still needs visible approvals, audit trails, and specialist subagents."
];
const highlights = [
  {
    "value": "1-2 days",
    "label": "Month-end close can be shortened materially"
  },
  {
    "value": "70%",
    "label": "Repetitive finance admin that can be reduced"
  },
  {
    "value": "Fewer",
    "label": "Manual errors from copy-paste processes"
  },
  {
    "value": "Live",
    "label": "Better cash and control visibility"
  }
];
const cards = [
  {
    "title": "Accounts payable and receivable support",
    "left": "AP and AR teams spend huge time reading documents, matching records, chasing approvals, and clarifying exceptions. Even when the core accounting system is sound, the surrounding workflow stays stubbornly manual.",
    "middle": "An agent can ingest invoices or remittance details, classify them, pull the relevant PO or customer record, flag discrepancies, and draft the next communication. It can also monitor ageing and keep follow-ups moving without relying on manual diary work.",
    "right": "Cash handling becomes faster and less error-prone, and the team spends more time resolving genuine exceptions rather than moving paper around digitally."
  },
  {
    "title": "Reconciliations and anomaly review",
    "left": "Reconciliation work is repetitive but context-heavy. The team has to compare records, understand mismatches, gather support, and decide whether the difference is timing, error, or something more serious.",
    "middle": "Agents can prepare the comparison, label the likely cause of a mismatch, surface missing evidence, and present the finance lead with a ranked review queue. They do not make the final call on unusual entries. They compress the preparation work.",
    "right": "Review becomes quicker, audit trails improve, and finance staff can focus on investigating what actually matters."
  },
  {
    "title": "Month-end and management reporting",
    "left": "Month-end drags because reporting depends on gathering updates, checking completeness, and turning finance data into narrative explanation for the wider business. That is slow, repetitive, and deadline-sensitive.",
    "middle": "A finance agent can collect the inputs, chase missing submissions, draft commentary from approved metrics, and prepare a management pack for review. It can also keep the month-end checklist moving so fewer steps rely on someone remembering the sequence from last month.",
    "right": "Close cycles shorten, reporting becomes more consistent, and finance leaders spend more time on analysis than assembly."
  },
  {
    "title": "Controls, approvals, and policy enforcement",
    "left": "Control frameworks often exist on paper but feel messy in practice because people work around them when pressure rises. Missing approvals, inconsistent coding, and weak documentation create avoidable audit pain.",
    "middle": "Agents can watch for control breaches, missing approvals, or policy exceptions, then route them with evidence attached. They can also keep routine control tasks moving, such as preparing review packs or verifying that required fields are complete before a transaction proceeds.",
    "right": "The business gets stronger governance with less manual policing, which is exactly the sort of leverage finance leaders want."
  }
];
const sections = [
  {
    "title": "Why finance teams should care now",
    "paragraphs": [
      "Finance teams have always automated more than many other departments, but a lot of the pain still sits between the systems. Someone still has to read the email, chase the approval, interpret the mismatch, and prepare the explanation. Those steps are where AI agents add operational lift.",
      "The models are now good enough to handle varied document formats, recognise standard patterns, and work within defined rules. That means the finance team can stop wasting skilled people on administrative glue work and use them where control and analysis genuinely matter.",
      "The key is disciplined design. Finance is not a place for vague autonomy. It is a place for bounded agents, visible logs, and clear approval lines."
    ],
    "bullets": [
      "The value is in workflow compression, not loose autonomy",
      "Finance needs auditability as much as efficiency",
      "Specialist agents fit naturally around AP, AR, reporting, and controls",
      "The first win is often calmer month-end rather than dramatic headcount reduction"
    ]
  },
  {
    "title": "How to deploy safely in a control-heavy environment",
    "paragraphs": [
      "Start with read, draft, and classify before moving to direct execution. That lets the team see how well the agent handles real finance data without giving it too much authority too soon. Most businesses can prove value at that level alone.",
      "Use explicit rules for approvals, monetary thresholds, and exception handling. The agent should know when it can act, when it can prepare work for approval, and when it must stop and escalate immediately. That makes the control design visible and inspectable.",
      "Blue Canvas would also look carefully at source data quality and process ownership. Phil Patterson’s view is straightforward, finance automation fails less often because the model is weak and more often because nobody clarified the operating rules or fixed the messy process underneath."
    ],
    "bullets": [
      "Separate draft, approve, and execute permissions",
      "Keep full action logs for audit and review",
      "Do not let the agent bypass established financial controls",
      "Treat exception queues as a first-class part of the rollout"
    ]
  },
  {
    "title": "Where OpenClaw fits in finance operations",
    "paragraphs": [
      "OpenClaw is useful when finance work crosses accounting systems, email, documents, spreadsheets, approvals, and reporting channels. A runtime that can connect those pieces cleanly is often more valuable than one more isolated AI feature inside a single finance tool.",
      "It is also helpful when you want specialist agents with scoped access. An AP agent should not have the same tools or permissions as a reporting agent. OpenClaw makes that division practical, which improves both security and maintainability.",
      "For Blue Canvas clients, this means finance automation can grow in a controlled way. One workflow can be proven, then another added once the first is trusted and measured."
    ],
    "bullets": [
      "Use specialist agents rather than one all-powerful finance bot",
      "Keep permissions narrow and reviewable",
      "Integrate with existing finance systems instead of forcing replacement",
      "Tie memory and logging to the control environment"
    ]
  },
  {
    "title": "How to judge the result",
    "paragraphs": [
      "The early signs of success are usually operational. Fewer overdue approvals, cleaner exception queues, less manual chasing, and faster preparation for reviews. Those improvements matter because they compound into better close cycles and more reliable reporting.",
      "Later, the business should see stronger cash visibility, better policy adherence, and a finance team spending more energy on analysis, controls, and decision support instead of spreadsheet handling.",
      "If the agent deployment is working, finance leaders should feel more in control, not less. That is the right bar."
    ],
    "bullets": [
      "Track cycle time, exception backlog, and approval lag",
      "Measure whether the team trusts the prepared summaries and classifications",
      "Review control breaches caught versus missed",
      "Expand only when the first workflow is stable and well-owned"
    ]
  }
];
const faqs = [
  {
    "question": "Can AI agents work in regulated finance environments?",
    "answer": "Yes, if they are deployed with clear approvals, visible logs, defined permissions, and proper governance. The role is to support controlled workflows, not to bypass them."
  },
  {
    "question": "What is the safest first finance use case?",
    "answer": "Invoice processing support, reconciliation preparation, and reporting assembly are usually safer starting points than unrestricted payment actions or high-value decision-making."
  },
  {
    "question": "Will agents replace accountants or finance managers?",
    "answer": "No. The practical win is reducing repetitive operational work so qualified staff can spend more time on controls, insight, and stakeholder support."
  },
  {
    "question": "Can this connect to Xero, Sage, or other accounting tools?",
    "answer": "Often yes. The integration pattern depends on APIs, exports, permissions, and what level of action the business wants the agent to take."
  },
  {
    "question": "How do auditors view agent-supported processes?",
    "answer": "Usually with more confidence when the system is well designed, because structured logs, approvals, and repeatable workflows can create a clearer audit trail than scattered manual activity."
  },
  {
    "question": "What existing guides should I read next?",
    "answer": "Read AI for Financial Services UK, Automate Accounts and Bookkeeping with AI, AI Invoice Processing, and AI Risk Management Framework for adjacent finance and governance topics."
  }
];
const relatedGuides = [
  {
    "title": "AI for Financial Services UK",
    "href": "/guides/ai-for-financial-services-uk"
  },
  {
    "title": "Automate Accounts & Bookkeeping with AI",
    "href": "/guides/automate-accounts-bookkeeping-ai"
  },
  {
    "title": "AI Invoice Processing: Cut Admin 80%",
    "href": "/guides/ai-invoice-processing"
  },
  {
    "title": "AI Risk Management Framework",
    "href": "/guides/ai-risk-management-framework"
  }
];
const comparisonRows: Array<{ criteria: string; openclaw: string; crewai: string; autogpt: string; langgraph: string; }> = [];

export default function AiAgentsForFinancePage() {
  return (
    <>
      <section className="hero-gradient relative overflow-hidden min-h-[70vh] flex items-center grain">
        <div className="max-w-[1140px] mx-auto px-6 relative z-10 py-20">
          <div className="max-w-[760px]">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-orange rounded-full" />
              <span className="text-white/80 text-sm font-medium">Finance Automation</span>
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-[3.2rem] font-extrabold text-white mb-6 leading-[1.05] tracking-tight">
              AI Agents for Finance:
              <br />
              <span className="text-orange">Automation Beyond Spreadsheets</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl max-w-[620px] mb-10 leading-relaxed">
              Finance teams are trusted to be accurate, timely, and controlled, yet much of the working week still disappears into reconciliation, chasing, reformatting, and status updates. AI agents can remove that drag without weakening control.
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
              Why finance is ready for agent-based automation
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
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">Finance workflows where AI agents pay back fast</h2>
              <p className="text-muted text-lg max-w-[720px] mx-auto">The strongest wins come from repetitive coordination work wrapped around financial judgement.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {cards.map((card, index) => (
                <div key={index} className="bg-surface rounded-2xl p-8 border border-border-light shadow-sm">
                  <h3 className="font-heading text-2xl font-bold text-dark mb-5">{card.title}</h3>
                  <div className="space-y-5">
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-[0.14em] text-orange mb-2">Operational pressure</div>
                      <p className="text-sm text-muted-dark leading-relaxed">{card.left}</p>
                    </div>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-[0.14em] text-orange mb-2">Agent approach</div>
                      <p className="text-sm text-muted-dark leading-relaxed">{card.middle}</p>
                    </div>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-[0.14em] text-orange mb-2">Business impact</div>
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
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">AI agents for finance FAQs</h2>
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
