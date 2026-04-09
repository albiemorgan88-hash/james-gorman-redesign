import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "AI Agents for Supply Chain Management",
  description: "Practical guide to AI agents for planning, supplier communication, shipment exception handling, and inventory coordination across modern supply chains.",
  keywords: [
  "ai agents for supply chain",
  "supply chain ai agents",
  "ai supply chain management",
  "ai for procurement and logistics",
  "shipment exception automation",
  "inventory ai agent",
  "supplier communication automation",
  "supply chain orchestration ai"
],
  alternates: { canonical: "https://openclawconsultant.co.uk/guides/ai-agents-for-supply-chain" },
  openGraph: {
    title: "AI Agents for Supply Chain Management",
    description: "Practical guide to AI agents for planning, supplier communication, shipment exception handling, and inventory coordination across modern supply chains.",
    url: "https://openclawconsultant.co.uk/guides/ai-agents-for-supply-chain",
    type: "article",
  },
};

const intro = [
  "Most supply chain software tells you what happened. It does not chase a supplier for a missing ASN, escalate a shipment exception, recalculate a likely stock-out window, or brief the planner with a recommendation and the supporting evidence. Humans still bridge those gaps manually, often across email, ERP, spreadsheets, carrier portals, and messaging apps.",
  "That makes supply chain one of the clearest use cases for AI agents. The work is cross-system, time-sensitive, and full of repetitive judgement. An agent can watch for threshold breaches, gather context, send the first communication, update the operational record, and escalate only when confidence drops or a commercial decision is needed.",
  "Blue Canvas typically starts with one lane of work, such as purchase order follow-up, warehouse exception management, or delivery ETA communications. With OpenClaw, those workflows can run through persistent specialist agents rather than brittle point automations. Phil Patterson focuses on the boring but essential part, permissions, escalation, and measurable service improvement, because that is what turns a clever demo into real operational lift."
];
const highlights = [
  {
    "value": "15-25%",
    "label": "Reduction in planning admin time"
  },
  {
    "value": "24/7",
    "label": "Monitoring of exceptions and delays"
  },
  {
    "value": "98%",
    "label": "Better stock visibility with cleaner updates"
  },
  {
    "value": "1-2 days",
    "label": "Faster supplier response cycles"
  }
];
const cards = [
  {
    "title": "Demand planning support",
    "left": "Planners spend too much time gathering inputs from sales forecasts, open orders, promotions, supplier lead times, and historical trends. The analysis is fragmented and much of the week disappears into data preparation rather than judgement.",
    "middle": "An agent can assemble the relevant inputs on a schedule, identify anomalies, highlight likely stock risks, and prepare a planner-ready summary. It does not replace the planner. It removes the manual stitching together of information that makes good planning harder than it should be.",
    "right": "Planning teams spend more time on trade-offs and less time building the briefing pack. That normally improves response speed before it improves forecast accuracy."
  },
  {
    "title": "Supplier follow-up and expediting",
    "left": "Late acknowledgements, vague delivery dates, and incomplete shipment updates create a long tail of avoidable chasing. Buyers and supply planners end up sending the same messages repeatedly while juggling dozens of suppliers.",
    "middle": "An agent can monitor due dates, draft chasers using the right PO context, route urgent issues, and update the central record when replies arrive. It can also classify supplier responses so planners see which promises are firm and which ones are still soft.",
    "right": "The team gets cleaner supplier communication, fewer silent delays, and a better audit trail of who said what and when."
  },
  {
    "title": "Shipment exception handling",
    "left": "Carrier alerts are noisy. Operations teams are expected to work out which delays matter, which customers are affected, and who needs to be informed first. That triage work is repetitive and easy to miss during busy periods.",
    "middle": "An agent can watch transport feeds, identify exceptions that cross business thresholds, compile impacted orders, and trigger the right playbook. That might mean alerting customer service, notifying the warehouse, or drafting a customer-facing update for approval.",
    "right": "Exceptions get handled consistently, customers hear earlier, and operations leaders stop relying on someone noticing the problem at the right moment."
  },
  {
    "title": "Inventory and warehouse coordination",
    "left": "Warehouse teams often see a mismatch between system stock and real-world activity. Returns, damages, put-away delays, and urgent picks can leave data lagging behind the floor. That damages trust and creates downstream planning noise.",
    "middle": "Agents can reconcile signals from WMS, ERP, and manual reports, surface probable causes of mismatches, and route tasks for investigation. They are also useful for repetitive internal communication, such as shift handover summaries and daily operational briefings.",
    "right": "Inventory decisions improve because the operational picture is fresher, and warehouse managers spend less time formatting updates for everyone else."
  }
];
const sections = [
  {
    "title": "Why the supply chain use case is so strong",
    "paragraphs": [
      "Supply chain work has the perfect mix of machine speed and human judgement. The machine is best at monitoring feeds, pulling records, spotting patterns, and keeping the process moving. Humans are best at handling trade-offs, negotiating priorities, and making commercial calls when there is no perfect answer.",
      "That split is why AI agents are a better fit than a generic chatbot. A chatbot waits to be asked. A supply chain agent watches the operation and acts when conditions change. It can chase, update, summarise, route, and escalate before the planner or buyer has opened their email.",
      "For UK businesses with lean operations teams, that is often the difference between staying ahead of disruption and spending the entire day reacting. The value comes from response quality and response speed together, not from either one in isolation."
    ],
    "bullets": [
      "Cross-system workflows create more value than single-screen automations",
      "Agents work best when actions are threshold-based and time-sensitive",
      "Exception handling is often a better first target than long-range forecasting",
      "A good deployment reduces noise as much as it reduces labour"
    ]
  },
  {
    "title": "What to connect and what to leave alone",
    "paragraphs": [
      "The first design question is which systems genuinely matter. Most teams do not need the agent plugged into everything on day one. ERP, order management, supplier communication history, and a clean source of shipment or inventory status are usually enough for the first phase. That keeps the scope sensible and the output auditable.",
      "The second question is write access. A lot of early wins can be delivered with read access plus controlled updates in one system or channel. The agent does not need to be able to rewrite your planning parameters or place orders autonomously to prove value. Drafting, monitoring, classification, and task creation already remove a large chunk of the repetitive work.",
      "Blue Canvas tends to reserve high-autonomy actions for workflows that are well understood and low-risk. Phil Patterson’s bias is to get real savings without pretending the operation should trust a model to make unbounded supply decisions by itself."
    ],
    "bullets": [
      "Keep master data quality visible, because bad source data will still create bad outcomes",
      "Start with one critical path such as PO follow-up or shipment exceptions",
      "Use approval gates for customer-facing communication until quality is proven",
      "Log every handoff so planners can see why the agent made a recommendation"
    ]
  },
  {
    "title": "How OpenClaw helps operational teams scale agents sensibly",
    "paragraphs": [
      "OpenClaw is useful for supply chain work because it supports persistent agents with memory, messaging, tool access, and orchestration. That means you can run a planner support agent, a supplier comms agent, and a shipment monitoring agent as separate roles instead of one giant prompt doing everything badly.",
      "That architecture matters in practice. Different teams need different permissions, different knowledge sources, and different escalation rules. The buyer-facing agent might need purchase order data and email access. The warehouse-facing agent might need WMS visibility and shift reporting. Splitting responsibilities is more secure and far easier to maintain.",
      "Blue Canvas can help map that operational design. Sometimes the right answer is one modest agent and a review workflow. Sometimes it is a small team of agents under one orchestrator. The choice should follow the process shape, not the hype cycle."
    ],
    "bullets": [
      "Use specialist agents for planning, supplier comms, and exception handling",
      "Route all non-standard commercial decisions back to humans",
      "Keep customer communication linked to the actual operations record",
      "Review false positives so the alerting logic improves over time"
    ]
  },
  {
    "title": "How to judge whether the pilot is working",
    "paragraphs": [
      "The first metric is usually not profit. It is whether the team is spending less time chasing, copying, and reformatting information. If that does not improve quickly, the pilot is probably solving the wrong problem. The second metric is whether issues are being spotted and handled earlier than before.",
      "Over time, those leading indicators flow into better OTIF performance, lower expediting cost, fewer avoidable customer updates, and more consistent service levels. But the early signal is almost always operational calm rather than a single headline number.",
      "Good pilots end with a documented playbook: what the agent handles, what it drafts, what it escalates, and what remains human-only. That gives the business a platform for broader automation instead of a one-off experiment nobody fully trusts."
    ],
    "bullets": [
      "Track exception response time and backlog reduction",
      "Measure how often supplier or carrier context is complete at first escalation",
      "Review whether planners trust the summaries and recommendations",
      "Expand only when the current workflow has a stable owner and clear KPIs"
    ]
  }
];
const faqs = [
  {
    "question": "Do AI agents replace supply planners?",
    "answer": "No. The practical role is to support planners by monitoring signals, gathering context, and running repetitive communication workflows. Commercial trade-offs, capacity decisions, and relationship management still belong with humans."
  },
  {
    "question": "Can this work with older ERP systems?",
    "answer": "Usually yes, if the required data can be read reliably through exports, APIs, email, or browser-based workflows. Old systems can slow delivery, but they do not automatically block an agent deployment."
  },
  {
    "question": "What is the safest first use case?",
    "answer": "Shipment exceptions, PO follow-up, and internal operational summaries are usually safer than autonomous replenishment or planning parameter changes. They create visible value without handing the model too much authority too soon."
  },
  {
    "question": "Will agents hallucinate supplier updates?",
    "answer": "They should never invent operational facts. A good system constrains the agent to known records, clearly separates data from interpretation, and logs every source used in the summary or action."
  },
  {
    "question": "Can smaller wholesalers or manufacturers benefit?",
    "answer": "Yes. In fact, lean teams often feel the upside faster because one person may be carrying planning, purchasing, and customer communication all at once. A targeted agent can remove a serious amount of manual load."
  },
  {
    "question": "What existing guides should I read next?",
    "answer": "Read AI Agents for Logistics Companies, AI Inventory Management, AI in UK Manufacturing, and AI Agent Use Cases for adjacent workflows and broader implementation ideas."
  }
];
const relatedGuides = [
  {
    "title": "AI Agents for Logistics Companies",
    "href": "/guides/ai-agents-logistics"
  },
  {
    "title": "AI Inventory Management Guide",
    "href": "/guides/ai-inventory-management"
  },
  {
    "title": "AI in UK Manufacturing: Guide",
    "href": "/guides/ai-for-manufacturing-uk"
  },
  {
    "title": "AI Agent Use Cases for Business",
    "href": "/guides/ai-agent-use-cases"
  }
];
const comparisonRows: Array<{ criteria: string; openclaw: string; crewai: string; autogpt: string; langgraph: string; }> = [];

export default function AiAgentsForSupplyChainPage() {
  return (
    <>
      <section className="hero-gradient relative overflow-hidden min-h-[70vh] flex items-center grain">
        <div className="max-w-[1140px] mx-auto px-6 relative z-10 py-20">
          <div className="max-w-[760px]">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-orange rounded-full" />
              <span className="text-white/80 text-sm font-medium">Supply Chain AI</span>
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-[3.2rem] font-extrabold text-white mb-6 leading-[1.05] tracking-tight">
              AI Agents for
              <br />
              <span className="text-orange">Supply Chain Management</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl max-w-[620px] mb-10 leading-relaxed">
              Supply chain teams do not need more dashboards. They need fewer surprises, faster decisions, and cleaner coordination across planning, purchasing, warehousing, and delivery. AI agents are emerging as the missing operational layer.
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
              Why supply chain teams are moving beyond dashboards
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
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">High-value supply chain workflows for agents</h2>
              <p className="text-muted text-lg max-w-[720px] mx-auto">These are the workflows where orchestration beats another static alert feed.</p>
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
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">AI agents for supply chain FAQs</h2>
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
