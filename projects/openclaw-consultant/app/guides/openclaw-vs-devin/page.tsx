import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "OpenClaw vs Devin: AI Agent Comparison 2026",
  description: "Detailed comparison of OpenClaw and Devin, covering coding workflows, business automation, deployment models, and which platform fits which job.",
  keywords: [
  "openclaw vs devin",
  "devin alternative",
  "openclaw comparison",
  "coding agent vs general agent",
  "ai agent platform comparison",
  "business ai agent uk",
  "devin for software teams",
  "openclaw for business"
],
  alternates: { canonical: "https://openclawconsultant.co.uk/guides/openclaw-vs-devin" },
  openGraph: {
    title: "OpenClaw vs Devin: AI Agent Comparison 2026",
    description: "Detailed comparison of OpenClaw and Devin, covering coding workflows, business automation, deployment models, and which platform fits which job.",
    url: "https://openclawconsultant.co.uk/guides/openclaw-vs-devin",
    type: "article",
  },
};

const stats = [
  {
    "value": "Code-first",
    "label": "Devin is built around software delivery"
  },
  {
    "value": "Ops-first",
    "label": "OpenClaw shines across wider business workflows"
  },
  {
    "value": "2026",
    "label": "Choose based on the work, not the hype"
  }
];

const sections = [
  {
    "id": "comparison",
    "title": "They are built for different jobs",
    "intro": "The biggest mistake is assuming every AI agent platform should do everything equally well. Devin is primarily aimed at software engineering tasks. OpenClaw is broader, covering automation, multi-tool operations, memory, messaging, browser control, and custom skills for real business processes.",
    "cards": [
      {
        "heading": "Where Devin stands out",
        "bullets": [
          "Software engineering tasks such as code edits, debugging, repo exploration, and technical workflows.",
          "Teams that want an AI teammate focused on tickets, pull requests, and development environments.",
          "Scenarios where coding depth matters more than cross-business orchestration."
        ]
      },
      {
        "heading": "Where OpenClaw stands out",
        "bullets": [
          "Operational workflows across sales, marketing, support, HR, finance, and internal admin.",
          "Persistent memory, message channels, browser tooling, file work, and scheduled tasks inside one system.",
          "Custom skills that let a business shape the agent around its own stack rather than around software tasks only."
        ]
      },
      {
        "heading": "Shared ground",
        "bullets": [
          "Both sit in the broader AI agent category.",
          "Both can automate meaningful work when implemented properly.",
          "Both need guardrails, clear scopes, and realistic expectations."
        ]
      }
    ]
  },
  {
    "id": "use-cases",
    "title": "When to choose Devin",
    "intro": "Choose Devin when your bottleneck is software delivery and you want an agent that behaves like a development teammate rather than an all-round business operator.",
    "cards": [
      {
        "heading": "Good fit",
        "bullets": [
          "Engineering teams with clear backlogs and repeatable implementation work.",
          "Technical founders who want more coding throughput without hiring immediately.",
          "Code-heavy tasks like refactoring, test-writing, bug fixing, and repo maintenance."
        ]
      },
      {
        "heading": "Trade-offs",
        "bullets": [
          "It is not the natural fit for customer support, CRM automation, inbox handling, or cross-functional business operations.",
          "Non-technical teams may struggle to get broad value from it.",
          "The ROI case depends on development workflow maturity."
        ]
      },
      {
        "heading": "How businesses use it",
        "bullets": [
          "As a coding accelerator, not as the operating system for the whole company.",
          "Alongside human engineers who review architecture, priorities, and production risk.",
          "Often as one layer inside a wider AI strategy rather than the whole strategy."
        ]
      }
    ]
  },
  {
    "id": "openclaw",
    "title": "When to choose OpenClaw",
    "intro": "Choose OpenClaw when the work crosses departments, tools, and communication channels. It is a better fit when you need an agent that can remember context, automate sequences, and coordinate operational tasks beyond code.",
    "cards": [
      {
        "heading": "Good fit",
        "bullets": [
          "Businesses automating lead handling, reporting, support, scheduling, compliance, social publishing, or internal knowledge workflows.",
          "Teams that need agents to live inside Telegram, WhatsApp, browser sessions, cron jobs, APIs, and files.",
          "Operators who want custom skills and deployment flexibility rather than a single canned use case."
        ]
      },
      {
        "heading": "Trade-offs",
        "bullets": [
          "It needs more design thinking because it can do more.",
          "A business must choose priorities and define safe operating boundaries.",
          "It will not magically replace product strategy, process design, or management discipline."
        ]
      },
      {
        "heading": "Why Blue Canvas uses it naturally",
        "bullets": [
          "It fits consultant-led automation work where every client stack is different.",
          "Phil Patterson can shape agent workflows around actual operations, not just around development tasks.",
          "It scales from one workflow to a whole agent team model over time."
        ]
      }
    ]
  },
  {
    "id": "decision",
    "title": "Recommended buying logic",
    "intro": "If you run a software company with a tight engineering bottleneck, Devin may be the sharper specialist. If you run a service business, consultancy, operations team, or multi-function company, OpenClaw is usually the better commercial fit.",
    "cards": [
      {
        "heading": "Simple rule",
        "bullets": [
          "Need more code shipped? Look hard at Devin.",
          "Need more business work done across systems? Look hard at OpenClaw.",
          "Need both? Use a specialist coding agent inside a broader OpenClaw-led operating model."
        ]
      },
      {
        "heading": "Commercial lens",
        "bullets": [
          "The right platform is the one closest to your most expensive recurring manual work.",
          "Buying on brand awareness instead of workflow fit usually ends badly.",
          "A small proof of value is worth more than a big strategy deck."
        ]
      },
      {
        "heading": "Next step",
        "bullets": [
          "Map one process, estimate time saved, and test safely.",
          "Keep human approvals where the downside is material.",
          "Get a free AI agent assessment before committing to a bigger rollout."
        ]
      }
    ]
  }
];

const faqs = [
  {
    "question": "Is Devin better than OpenClaw?",
    "answer": "Not generally. It is better for some coding-centred jobs. OpenClaw is better for broader operational automation."
  },
  {
    "question": "Can OpenClaw do coding work too?",
    "answer": "Yes, but that is not the whole point. Its strength is orchestrating tools, memory, messaging, workflows, and business processes beyond software development alone."
  },
  {
    "question": "Should technical teams ignore OpenClaw?",
    "answer": "No. Many technical teams use OpenClaw as the layer that ties coding agents into the rest of the business, including alerts, approvals, reporting, and client communication."
  },
  {
    "question": "What should we buy first?",
    "answer": "Buy for the bottleneck. If delayed releases are costing money, test a coding agent. If admin and fragmented operations are costing money, start with OpenClaw."
  }
];

const relatedGuides = [
  {
    "href": "/guides/openclaw-vs-claude-code",
    "title": "OpenClaw vs Claude Code"
  },
  {
    "href": "/guides/openclaw-vs-chatgpt",
    "title": "OpenClaw vs ChatGPT"
  },
  {
    "href": "/guides/what-is-openclaw-2026",
    "title": "What Is OpenClaw?"
  },
  {
    "href": "/guides/how-to-build-ai-agent",
    "title": "How to Build an AI Agent"
  }
];

export default function OpenClawVsDevinPage() {
  return (
    <>
      <section className="hero-gradient relative overflow-hidden min-h-[70vh] flex items-center grain">
        <div className="absolute top-20 right-[10%] w-[400px] h-[400px] bg-orange/5 rounded-full blur-[120px] glow-pulse" />
        <div className="absolute bottom-20 left-[5%] w-[300px] h-[300px] bg-blue/10 rounded-full blur-[100px] glow-pulse" style={{ animationDelay: "3s" }} />

        <div className="max-w-[1140px] mx-auto px-6 relative z-10 py-20">
          <div className="max-w-[760px]">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-white/60 text-sm font-medium">AI Agent Comparison 2026</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl md:text-[3.2rem] font-extrabold text-white mb-6 leading-[1.05] tracking-tight">
              OpenClaw vs Devin
            </h1>

            <p className="text-white/60 text-lg md:text-xl max-w-[620px] mb-10 leading-relaxed">
              Both are powerful, but they solve different problems. Here is the practical difference between a coding-focused agent and a broader business agent platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#comparison"
                className="inline-flex items-center justify-center bg-orange text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-orange-hover transition-all hover:-translate-y-0.5 shadow-glow-orange"
              >
                Compare both platforms
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
