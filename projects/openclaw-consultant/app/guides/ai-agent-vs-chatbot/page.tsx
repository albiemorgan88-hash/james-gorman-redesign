import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "AI Agent vs Chatbot: What's the Difference?",
  description: "Clear comparison of AI agents and chatbots, including capability differences, business use cases, costs, and when to choose each.",
  keywords: [
  "ai agent vs chatbot",
  "chatbot vs ai agent",
  "difference between chatbot and ai agent",
  "ai agent comparison",
  "business chatbot uk",
  "openclaw chatbot alternative",
  "ai automation vs chatbot",
  "agentic ai guide"
],
  alternates: { canonical: "https://openclawconsultant.co.uk/guides/ai-agent-vs-chatbot" },
  openGraph: {
    title: "AI Agent vs Chatbot: What's the Difference?",
    description: "Clear comparison of AI agents and chatbots, including capability differences, business use cases, costs, and when to choose each.",
    url: "https://openclawconsultant.co.uk/guides/ai-agent-vs-chatbot",
    type: "article",
  },
};

const stats = [
  {
    "value": "24/7",
    "label": "Chatbots are always-on front doors"
  },
  {
    "value": "10x",
    "label": "Agents can automate more steps end-to-end"
  },
  {
    "value": "££",
    "label": "Cost depends on how much action you need"
  }
];

const sections = [
  {
    "id": "comparison",
    "title": "Capability matrix",
    "intro": "The easiest way to understand the difference is this: a chatbot talks, an AI agent works. Both can use language models, but the way they operate inside a business is completely different.",
    "cards": [
      {
        "heading": "Core job",
        "bullets": [
          "A chatbot is designed to answer questions and keep a conversation moving.",
          "An AI agent is designed to complete an outcome, often across multiple steps and systems.",
          "If the goal is better conversations, chatbots are enough. If the goal is less manual work, agents usually win."
        ]
      },
      {
        "heading": "Decision-making",
        "bullets": [
          "Chatbots usually wait for the next message before doing anything else.",
          "Agents can evaluate options, choose a path, ask for approval when needed, and continue without constant prompting.",
          "That matters when work spans inboxes, CRMs, spreadsheets, ticketing tools, or internal documentation."
        ]
      },
      {
        "heading": "System access",
        "bullets": [
          "Most chatbots sit on a website, in WhatsApp, or inside a help centre flow.",
          "Agents are built to connect to the tools that run the business, from HubSpot and Slack to finance systems and internal databases.",
          "OpenClaw is strong here because it can combine memory, tools, scheduling, and approvals in one setup."
        ]
      }
    ]
  },
  {
    "id": "use-cases",
    "title": "When a chatbot is the right choice",
    "intro": "Chatbots still make sense. In fact, they are often the best first step if your business mainly needs instant answers, lead capture, or simple customer support at scale.",
    "cards": [
      {
        "heading": "Best chatbot scenarios",
        "bullets": [
          "Website FAQs, opening hours, returns policies, and simple booking questions.",
          "Lead qualification on landing pages where the user is happy to self-serve.",
          "Basic support triage where the real value is routing the person to the right team quickly."
        ]
      },
      {
        "heading": "Why they work well",
        "bullets": [
          "They are fast to launch and relatively cheap to maintain.",
          "Conversation design is more predictable because the flows are narrower.",
          "For low-risk interactions, a clean chatbot can improve response times without changing your operations."
        ]
      },
      {
        "heading": "Where they fall short",
        "bullets": [
          "They often hand work back to the user or a member of staff.",
          "They can sound smart without actually resolving the task.",
          "Once people ask for account-specific action, most chatbots hit a wall unless they become agent-like."
        ]
      }
    ]
  },
  {
    "id": "agents",
    "title": "When an AI agent is the better fit",
    "intro": "AI agents make sense when the job is bigger than answering a question. They read context, pull data from multiple systems, decide what to do next, and keep moving until the outcome is finished or a human needs to step in.",
    "cards": [
      {
        "heading": "Best agent scenarios",
        "bullets": [
          "Customer service where the system needs to check order history, delivery data, and refund rules before replying.",
          "Recruitment and HR workflows such as screening, scheduling, onboarding, and chasing missing documents.",
          "Operations work like reporting, inbox handling, lead routing, quoting, data entry, and compliance checks."
        ]
      },
      {
        "heading": "Why businesses choose them",
        "bullets": [
          "They reduce the actual workload, not just the first message.",
          "They create an audit trail and can run with guardrails, approvals, and confidence thresholds.",
          "They can improve over time because they retain memory and can be tuned around your real process."
        ]
      },
      {
        "heading": "What to watch",
        "bullets": [
          "An agent needs clear permissions, governance, and sensible boundaries.",
          "The design work matters more than the prompt. Bad workflows create expensive chaos.",
          "You need to measure business outcomes, not just how clever the conversation sounds."
        ]
      }
    ]
  },
  {
    "id": "buying",
    "title": "How to choose properly",
    "intro": "Most companies should start by mapping the job to be done. If your team keeps asking the same questions, begin with a chatbot. If your team keeps repeating the same actions, build or buy an AI agent.",
    "cards": [
      {
        "heading": "Useful decision test",
        "bullets": [
          "Ask whether success means “the user got an answer” or “the task got completed”.",
          "If completion requires multiple systems, approvals, or follow-up steps, lean towards an agent.",
          "If the risk is high, design human review into the workflow from day one."
        ]
      },
      {
        "heading": "Commercial reality",
        "bullets": [
          "Chatbots usually look cheaper because the scope is narrower.",
          "Agents often produce better ROI because they remove admin, reduce delays, and create capacity.",
          "Blue Canvas usually recommends starting with one contained workflow before scaling into a wider AI operating model."
        ]
      },
      {
        "heading": "Bottom line",
        "bullets": [
          "Choose a chatbot for conversations.",
          "Choose an AI agent for outcomes.",
          "If you want both, the best setup is often a chatbot front end connected to an agentic workflow behind the scenes."
        ]
      }
    ]
  }
];

const faqs = [
  {
    "question": "Is every AI chatbot also an AI agent?",
    "answer": "No. Many chatbots use AI for language, but they still only respond inside a conversation. An AI agent is built to plan, act, and complete work across tools and steps."
  },
  {
    "question": "Are AI agents more expensive than chatbots?",
    "answer": "Usually yes at the start, because the implementation is deeper. But they often create stronger ROI because they replace more manual work and can run across multiple business functions."
  },
  {
    "question": "Can we start with a chatbot and upgrade later?",
    "answer": "Yes, and that is often sensible. Start with the customer-facing layer, learn what people ask, then connect an agent behind it where repeated tasks are slowing the team down."
  },
  {
    "question": "Where does OpenClaw fit in?",
    "answer": "OpenClaw is better thought of as an agent platform than a simple chatbot tool. It is designed for memory, tools, workflows, scheduling, and business process automation."
  }
];

const relatedGuides = [
  {
    "href": "/guides/ai-agents-explained",
    "title": "What Is an AI Agent? Everything You Need to Know"
  },
  {
    "href": "/guides/ai-agent-vs-rpa",
    "title": "AI Agents vs RPA"
  },
  {
    "href": "/guides/openclaw-vs-chatgpt",
    "title": "OpenClaw vs ChatGPT"
  },
  {
    "href": "/guides/ai-chatbot-for-business-uk",
    "title": "AI Chatbot for Business UK"
  }
];

export default function AIAgentVsChatbotPage() {
  return (
    <>
      <section className="hero-gradient relative overflow-hidden min-h-[70vh] flex items-center grain">
        <div className="absolute top-20 right-[10%] w-[400px] h-[400px] bg-orange/5 rounded-full blur-[120px] glow-pulse" />
        <div className="absolute bottom-20 left-[5%] w-[300px] h-[300px] bg-blue/10 rounded-full blur-[100px] glow-pulse" style={{ animationDelay: "3s" }} />

        <div className="max-w-[1140px] mx-auto px-6 relative z-10 py-20">
          <div className="max-w-[760px]">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-white/60 text-sm font-medium">Business AI Comparison</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl md:text-[3.2rem] font-extrabold text-white mb-6 leading-[1.05] tracking-tight">
              AI Agent vs Chatbot
            </h1>

            <p className="text-white/60 text-lg md:text-xl max-w-[620px] mb-10 leading-relaxed">
              A practical guide to what separates an AI agent from a chatbot, where each one fits, and how to avoid buying the wrong tool for the job.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#comparison"
                className="inline-flex items-center justify-center bg-orange text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-orange-hover transition-all hover:-translate-y-0.5 shadow-glow-orange"
              >
                See the comparison
              </a>
              <a
                href="#assessment"
                className="inline-flex items-center justify-center bg-white/5 text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-white/10 transition-all border border-white/10"
              >
                Get a free AI agent assessment
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#fafbfc] to-transparent" />
      </section>

      <section className="bg-white py-16">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold text-orange mb-2">{stat.value}</div>
                <div className="text-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {sections.map((section, sectionIndex) => (
        <section key={section.id} id={section.id} className={sectionIndex % 2 === 0 ? "bg-light py-24" : "bg-white py-24"}>
          <div className="max-w-[1140px] mx-auto px-6">
            <div className="max-w-[760px] mb-14">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-5">{section.title}</h2>
              <p className="text-muted text-lg leading-relaxed">{section.intro}</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {section.cards.map((card, cardIndex) => (
                <div key={cardIndex} className="bg-white rounded-2xl p-8 shadow-card border border-border-light h-full">
                  <h3 className="font-heading font-bold text-xl text-dark mb-4">{card.heading}</h3>
                  <ul className="space-y-3">
                    {card.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex} className="flex gap-3 items-start text-sm md:text-base text-muted-dark leading-relaxed">
                        <span className="text-orange mt-0.5 flex-shrink-0">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="bg-surface py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-6">
                What this means for your business
              </h2>
              <div className="space-y-5 text-muted-dark leading-relaxed">
                <p>
                  The real opportunity is not buying the most impressive demo. It is designing one workflow that saves time,
                  improves consistency, and gives your team more capacity for work that genuinely needs human judgement.
                </p>
                <p>
                  In practice, that means starting with a repeated operational bottleneck, connecting the right systems,
                  and putting sensible guardrails around what the agent can do alone. That is how businesses move from AI curiosity to measurable return.
                </p>
                <p>
                  Blue Canvas helps organisations do exactly that. Phil Patterson focuses on practical automation,
                  clear commercial outcomes, and tool choices that fit the business rather than the hype cycle. OpenClaw is often a natural fit when you need flexibility,
                  persistent memory, and automation across messages, files, browsers, and internal systems.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-card border border-border-light">
              <h3 className="font-heading font-bold text-2xl text-dark mb-4">Need a grounded starting point?</h3>
              <p className="text-muted-dark leading-relaxed mb-6">
                If you want to get a free AI agent assessment, the best place to start is by mapping one recurring workflow,
                estimating the business value of improving it, and deciding where human approvals should stay.
              </p>
              <div className="space-y-3 text-sm text-muted-dark">
                <div className="flex items-start gap-3"><span className="text-orange">✓</span><span>Clear scope before spending money</span></div>
                <div className="flex items-start gap-3"><span className="text-orange">✓</span><span>Practical recommendation on workflow, tooling, and controls</span></div>
                <div className="flex items-start gap-3"><span className="text-orange">✓</span><span>Focus on ROI, governance, and what is actually worth automating</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-[900px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">Frequently asked questions</h2>
            <p className="text-muted text-lg">Straight answers to the questions businesses usually ask before they deploy AI agents.</p>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-light rounded-2xl p-8 border border-border-light">
                <h3 className="font-heading text-xl font-bold text-dark mb-3">{faq.question}</h3>
                <p className="text-muted-dark leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="assessment" className="bg-navy text-white py-24 relative overflow-hidden grain">
        <div className="max-w-[1140px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Ready to
                <br />
                <span className="text-orange">Get a free AI agent assessment?</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Blue Canvas will look at your workflow, show where an AI agent could create leverage,
                and give you a straight answer on what is worth automating now versus later.
              </p>
              <div className="space-y-3 text-white/60">
                <div className="flex items-center gap-3"><span className="text-orange">✓</span>No jargon, no fluffy strategy deck</div>
                <div className="flex items-center gap-3"><span className="text-orange">✓</span>Clear recommendation for tooling, process, and controls</div>
                <div className="flex items-center gap-3"><span className="text-orange">✓</span>Practical next steps tailored to your business</div>
              </div>
            </div>
            <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8">
              <h3 className="font-heading font-bold text-xl text-white mb-1">Free AI Agent Assessment</h3>
              <p className="text-white/60 text-sm mb-6">Tell us about the workflow you want to improve</p>
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
