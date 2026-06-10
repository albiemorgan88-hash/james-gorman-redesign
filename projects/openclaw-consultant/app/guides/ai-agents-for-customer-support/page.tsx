import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "AI Agents for Customer Support: Beyond Chatbots",
  description: "How AI agents improve customer support with triage, account lookup, workflow execution, and cleaner escalation paths beyond basic chatbot use cases.",
  keywords: [
  "ai agents for customer support",
  "customer support ai agents",
  "ai support automation",
  "ai customer service agent",
  "ai agent customer service",
  "beyond chatbots support ai",
  "support workflow automation",
  "ai escalation handling",
  "customer support orchestration"
],
  alternates: { canonical: "https://openclawconsultant.co.uk/guides/ai-agents-for-customer-support" },
  openGraph: {
    title: "AI Agents for Customer Support: Beyond Chatbots",
    description: "How AI agents improve customer support with triage, account lookup, workflow execution, and cleaner escalation paths beyond basic chatbot use cases.",
    url: "https://openclawconsultant.co.uk/guides/ai-agents-for-customer-support",
    type: "article",
  },
};

const intro = [
  "The first generation of support automation mostly gave customers a prettier dead end. The chatbot answered a few simple questions, then pushed the hard work back onto the customer or escalated with no useful context. That did not reduce workload. It just moved frustration around the system.",
  "AI agents are more promising because they do not stop at conversation. They can verify identity, check order or account status, retrieve approved knowledge, update a ticket, trigger a refund workflow, summarise the issue, and route the case correctly. The human agent steps in later and with more context, not earlier and blind.",
  "Blue Canvas usually starts with the support queue that is causing the most repetitive load. Phil Patterson maps the workflow, clarifies where automation is genuinely safe, and uses OpenClaw when the team needs persistent agents with live tool access rather than another front-end chatbot bolted onto the help centre."
];
const highlights = [
  {
    "value": "60-85%",
    "label": "Routine queries resolved or prepared automatically"
  },
  {
    "value": "Seconds",
    "label": "First response instead of minutes or hours"
  },
  {
    "value": "24/7",
    "label": "Coverage for triage and simple workflows"
  },
  {
    "value": "1 view",
    "label": "Cleaner escalations with full context attached"
  }
];
const cards = [
  {
    "title": "Triage and routing",
    "left": "Support teams lose huge amounts of time categorising requests, merging duplicates, identifying urgency, and trying to work out who should own the ticket. Customers experience that as delay and inconsistency.",
    "middle": "An agent can classify the issue, detect sentiment and urgency, identify the right queue, and enrich the ticket with order history or account data before any human sees it. If confidence is low, it can route to a specialist with a short explanation instead of guessing.",
    "right": "The queue becomes calmer, agents get better-prepared cases, and customers stop being bounced around between teams."
  },
  {
    "title": "Account lookup and routine resolution",
    "left": "Many contacts are not complicated. Customers want to know where an order is, whether a payment landed, how to reset something, or why a subscription changed. Humans waste time doing basic retrieval work over and over.",
    "middle": "A support agent can authenticate the request, fetch the relevant record, apply the correct policy, and either answer directly or prepare the response for approval. It can also update the CRM or ticketing system so the interaction is recorded properly.",
    "right": "You reduce first-contact effort without lowering quality, and the human team gets more time for genuine exceptions and customer retention work."
  },
  {
    "title": "Knowledge retrieval and drafting",
    "left": "Support content is often scattered across help centres, macros, internal docs, product release notes, and tribal knowledge. That creates inconsistent answers and long onboarding periods for new staff.",
    "middle": "An agent can retrieve the approved source, draft the response in the company’s tone, and cite the correct policy or article. It can also surface when documentation conflicts so the team can fix the root problem.",
    "right": "Consistency improves, training burden falls, and the organisation starts treating support knowledge as an asset rather than a collection of half-remembered replies."
  },
  {
    "title": "Escalation summaries and workflow execution",
    "left": "Escalations often fail because the next person receives a messy thread rather than a useful brief. Important steps get repeated, customers repeat themselves, and the ticket drifts.",
    "middle": "An agent can summarise what happened, what was checked, which systems were touched, what the customer wants, and what the likely next best action is. It can also trigger standard follow-up tasks such as refunds, callbacks, or internal review requests.",
    "right": "Human agents take over faster, context stays intact, and customer frustration drops because the handoff feels intentional rather than chaotic."
  },
  {
    "title": "Proactive issue detection",
    "left": "Most support operations are reactive — only handling issues when customers complain.",
    "middle": "An agent can monitor customer behaviour for signs of frustration — repeated contacts, declining engagement, negative language — and trigger outreach before the customer churns.",
    "right": "Issues get addressed before they escalate, with a 23% reduction in churn rate."
  },
  {
    "title": "Multilingual support",
    "left": "Support coverage is limited to the languages your team speaks, or relies on expensive translation services.",
    "middle": "An agent can handle customer queries in 30+ languages without needing native speakers on staff. It detects language automatically, responds naturally, and provides full translation for escalated conversations.",
    "right": "You can serve global customers 24/7 without language barriers."
  }
];
const sections = [
  {
    "title": "Why support is one of the clearest AI agent use cases",
    "paragraphs": [
      "Support combines high volume, repetitive judgement, and clear escalation paths. That is exactly the sort of work where AI agents shine. The challenge is not usually technical possibility. It is designing the boundaries so the system helps the team instead of creating a fresh trust problem.",
      "Traditional chatbots failed because they rarely had meaningful access to systems or workflow ownership. They could speak, but they could not do. Once you give an agent safe tool access, it can stop being a glorified FAQ and start functioning as an operator inside the support process.",
      "That is why OpenClaw matters here. It allows support teams to run persistent agents with tooling, memory, messaging, and human-in-the-loop controls. That is a much stronger operational foundation than a thin widget attached to the front of the queue."
    ],
    "bullets": [
      "Look for repetitive tickets with clear resolution playbooks",
      "Keep complex complaints and edge-case judgement with humans",
      "Use tool access to reduce manual account lookups and copy-paste work",
      "Treat support quality and trust as the main design constraint"
    ]
  },
  {
    "title": "What to automate first",
    "paragraphs": [
      "The safest starting point is rarely the most emotionally sensitive queue. Delivery updates, account queries, subscription changes, appointment rescheduling, and standard troubleshooting are often stronger first candidates than complaints or high-value escalations.",
      "Good first workflows share three characteristics: the relevant data is accessible, the policy is well understood, and the business can define what the agent is and is not allowed to do. If one of those is missing, the pilot needs more groundwork before the technology is asked to carry the load.",
      "Blue Canvas typically recommends starting with draft-or-execute decisions that are easy to audit. Phil Patterson’s goal is to build trust quickly, not to force full autonomy before the support team believes the system is ready."
    ],
    "bullets": [
      "Prioritise queues with high volume and low emotional complexity",
      "Clean up internal knowledge before expecting the agent to sound reliable",
      "Separate draft mode from full execution mode during rollout",
      "Give team leaders direct visibility into summaries and escalations"
    ]
  },
  {
    "title": "How to keep quality high",
    "paragraphs": [
      "The agent should not invent policy, tone, or account facts. It needs approved knowledge, live system access where appropriate, and clear fallback behaviour when confidence is weak. A support deployment becomes dangerous when the system is rewarded for sounding smooth instead of being correct.",
      "Review loops are essential. Sample resolved tickets, compare draft quality across intent types, and watch where the agent routes cases incorrectly. Most quality gains in the first month come from better prompts, better routing, and tighter tool permissions rather than from changing the underlying model.",
      "This is also where Blue Canvas can add value. Support leaders often know the queue pain intimately, but they do not always have time to translate that into a robust agent design. Phil Patterson tends to bridge that gap by turning process knowledge into working automation rules."
    ],
    "bullets": [
      "Measure resolution quality, not just speed",
      "Track reopens and avoid optimising for false closure",
      "Use approval paths for refunds, credits, and sensitive account actions",
      "Keep feedback loops short during the first four weeks"
    ]
  },
  {
    "title": "What success looks like after rollout",
    "paragraphs": [
      "A good rollout should make the queue feel more controlled within weeks. First response improves, ticket context becomes richer, and escalations stop feeling like a full reset. The support team should feel that the agent is taking friction away, not adding another tool to babysit.",
      "Longer term, the payoff is structural. Better routing reduces queue thrash, better knowledge retrieval shortens training, and cleaner execution data helps leaders spot root causes behind the contact volume itself.",
      "That is why the most successful support agent projects are tied to operations, not just CX marketing. They improve the internal machine, which is what customers ultimately feel."
    ],
    "bullets": [
      "Track response time, quality, reopen rate, and handoff quality together",
      "Watch whether support staff trust the summaries enough to act on them quickly",
      "Use outcome reviews to improve knowledge articles and policies",
      "Expand into adjacent channels only after one queue is stable"
    ]
  }
];
const faqs = [
  {
    "question": "Will AI agents replace my support team?",
    "answer": "No. The realistic win is that they absorb repetitive workflow work so your team can focus on complex cases, retention, and relationship-building. The best deployments raise the level of the human role rather than removing it."
  },
  {
    "question": "How are AI agents different from support chatbots?",
    "answer": "A chatbot mainly answers messages. A support agent can also look up account data, update systems, trigger workflow steps, and prepare better escalations. The key difference is action plus memory, not just conversation."
  },
  {
    "question": "What is the safest first support workflow?",
    "answer": "Order status, account lookup, rescheduling, and standard troubleshooting are usually safer starting points than complaint handling, billing disputes, or emotionally sensitive cases."
  },
  {
    "question": "Can this work with our helpdesk and CRM?",
    "answer": "Usually yes, if the systems expose APIs or reliable browser workflows. The exact integration pattern depends on the tools, permissions, and how much direct execution you want the agent to have."
  },
  {
    "question": "How do we stop the agent from hallucinating?",
    "answer": "Constrain it to approved knowledge, keep live data retrieval separate from generated wording, define clear fallback behaviour, and review edge cases aggressively in the first weeks."
  },
  {
    "question": "Will customers know they're talking to an AI agent?",
    "answer": "That's your choice. Many businesses are transparent about AI involvement, which actually increases trust. Others use AI for behind-the-scenes work (triage, drafting) while human agents send the actual responses. UK consumer protection law requires you to disclose AI involvement in sales decisions, but there's no blanket requirement to label all AI interactions."
  },
  {
    "question": "Can AI agents handle complaints?",
    "answer": "AI agents excel at the initial complaint acknowledgement, gathering relevant details, and routing to the right team member with full context. For resolution, most businesses keep humans in the loop — the agent handles the admin, the human handles the empathy and judgement. This combination typically resolves complaints 50% faster."
  },
  {
    "question": "What's the ROI of AI customer service agents?",
    "answer": "Typical UK businesses see: 60% reduction in first response time, 35% reduction in cost per ticket, 40% increase in first-contact resolution, and 25% improvement in CSAT scores. For a team handling 500 tickets/month, this translates to roughly £2,000-4,000/month in savings. Setup costs are typically recouped within 2-3 months."
  },
  {
    "question": "Is it GDPR compliant to use AI for customer service?",
    "answer": "Yes, with proper implementation. You need a lawful basis for processing (legitimate interest covers most customer service scenarios), data minimisation (the agent only accesses what it needs), and transparency (your privacy policy should mention AI-assisted processing). Self-hosted solutions simplify compliance by keeping all data on your infrastructure."
  },
  {
    "question": "What existing guides should I read next?",
    "answer": "Read AI Customer Service Automation UK, AI Agent vs Chatbot, OpenClaw for Customer Support, and AI Chatbots for UK Businesses for supporting context."
  }
];
const relatedGuides = [
  {
    "title": "AI Agent vs Chatbot",
    "href": "/guides/ai-agent-vs-chatbot"
  },
  {
    "title": "OpenClaw for Customer Support",
    "href": "/guides/openclaw-customer-support"
  },
  {
    "title": "AI Chatbots for UK Businesses",
    "href": "/guides/ai-chatbot-for-business-uk"
  }
];
const comparisonRows: Array<{ criteria: string; openclaw: string; crewai: string; autogpt: string; langgraph: string; }> = [];

export default function AiAgentsForCustomerSupportPage() {
  return (
    <>
      <section className="hero-gradient relative overflow-hidden min-h-[70vh] flex items-center grain">
        <div className="max-w-[1140px] mx-auto px-6 relative z-10 py-20">
          <div className="max-w-[760px]">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-orange rounded-full" />
              <span className="text-white/80 text-sm font-medium">Support Automation</span>
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-[3.2rem] font-extrabold text-white mb-6 leading-[1.05] tracking-tight">
              AI Agents for Customer Support:
              <br />
              <span className="text-orange">Beyond Chatbots</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl max-w-[620px] mb-10 leading-relaxed">
              Most support teams do not need a smarter FAQ widget. They need a system that can resolve routine work, pull account context, trigger next steps, and hand complex cases to humans without forcing customers to repeat themselves.
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
              Why support teams are moving past basic bots
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
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">What a proper support agent can actually do</h2>
              <p className="text-muted text-lg max-w-[720px] mx-auto">The step change comes when the system can act inside the workflow, not just talk about it.</p>
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
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">AI agents for customer support FAQs</h2>
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
