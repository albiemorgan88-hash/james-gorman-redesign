import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "AI Agents for Startups: Ship Faster With Less",
  description: "How startups use AI agents to move faster across operations, support, sales, research, and delivery without adding unnecessary headcount.",
  keywords: [
  "ai agents for startups",
  "startup ai automation",
  "ai startup operations",
  "lean startup ai",
  "openclaw startup",
  "ai agents founders",
  "startup workflow automation",
  "ship faster ai"
],
  alternates: { canonical: "https://openclawconsultant.co.uk/guides/ai-agents-for-startups" },
  openGraph: {
    title: "AI Agents for Startups: Ship Faster With Less",
    description: "How startups use AI agents to move faster across operations, support, sales, research, and delivery without adding unnecessary headcount.",
    url: "https://openclawconsultant.co.uk/guides/ai-agents-for-startups",
    type: "article",
  },
};

const stats = [
  {
    "value": "Lean",
    "label": "More output without adding headcount"
  },
  {
    "value": "Faster",
    "label": "Shorter gaps between idea and execution"
  },
  {
    "value": "Focused",
    "label": "Automate ops so founders can build and sell"
  }
];

const sections = [
  {
    "id": "speed",
    "title": "Why startups benefit early",
    "intro": "Startups are ideal for AI agents because they already work across messy systems with tiny teams. There is usually no giant legacy process to fight, only too much work and not enough time.",
    "cards": [
      {
        "heading": "Founder leverage",
        "bullets": [
          "Summarise customer conversations and turn them into action lists.",
          "Keep leads moving, follow up faster, and stop inbox drift.",
          "Automate recurring admin that quietly steals creative energy."
        ]
      },
      {
        "heading": "Team leverage",
        "bullets": [
          "Support onboarding and internal knowledge access.",
          "Generate reports, competitor scans, and meeting summaries automatically.",
          "Use agents as an execution layer around product, ops, and go-to-market work."
        ]
      },
      {
        "heading": "Why timing matters",
        "bullets": [
          "Habits form early in a startup.",
          "If a lean team builds with automation in mind from day one, scale hurts less later.",
          "Agentic workflows can become part of the operating model rather than an afterthought."
        ]
      }
    ]
  },
  {
    "id": "use-cases",
    "title": "Best startup use cases",
    "intro": "The strongest use cases are the ones that remove drag without increasing complexity too much.",
    "cards": [
      {
        "heading": "Go-to-market",
        "bullets": [
          "Lead qualification, enrichment, follow-up reminders, and sales notes.",
          "Content support for landing pages, outbound messaging, and campaign reporting.",
          "Customer research summaries pulled from calls, forms, and support conversations."
        ]
      },
      {
        "heading": "Operations",
        "bullets": [
          "Founder inbox triage and routine drafting.",
          "Internal reporting and KPI updates.",
          "Admin workflows around onboarding, supplier comms, and task routing."
        ]
      },
      {
        "heading": "Product and delivery",
        "bullets": [
          "User feedback categorisation and theme detection.",
          "Testing support, release notes, and documentation summaries.",
          "Coordination between technical work and customer communication."
        ]
      }
    ]
  },
  {
    "id": "discipline",
    "title": "Do not automate chaos",
    "intro": "The danger for startups is adding shiny complexity before the basics are stable. AI agents work best when a process happens often enough to matter and is clear enough to define safely.",
    "cards": [
      {
        "heading": "Good discipline",
        "bullets": [
          "Start with one painful recurring workflow.",
          "Give it an owner and a success metric.",
          "Keep a human in the loop for anything customer-facing or commercially sensitive."
        ]
      },
      {
        "heading": "Bad discipline",
        "bullets": [
          "Launching five agent experiments with no metrics.",
          "Automating something no one has validated manually.",
          "Using agents as a substitute for product thinking or founder judgement."
        ]
      },
      {
        "heading": "Where OpenClaw fits",
        "bullets": [
          "OpenClaw is strong for startups because it can combine messaging, browser actions, memory, and custom skills without needing a giant platform stack.",
          "That makes it useful as an operating layer while the company is still figuring things out.",
          "It also avoids overbuying too early."
        ]
      }
    ]
  },
  {
    "id": "next",
    "title": "How a startup should begin",
    "intro": "Pick the workflow that hurts every week: lead follow-up, founder inbox triage, support categorisation, reporting, or onboarding. Build one reliable agent around that pain point and only expand once it is clearly saving time or winning revenue.",
    "cards": [
      {
        "heading": "Pilot ideas",
        "bullets": [
          "Sales follow-up and CRM hygiene.",
          "Internal KPI reporting.",
          "Support triage with escalation rules."
        ]
      },
      {
        "heading": "Metrics",
        "bullets": [
          "Hours saved each week.",
          "Speed to respond or ship.",
          "Revenue or retention impact where measurable."
        ]
      },
      {
        "heading": "Recommendation",
        "bullets": [
          "Use agents to create leverage, not noise.",
          "Keep tooling light and scope tight.",
          "Get a free AI agent assessment before stacking too many experiments."
        ]
      }
    ]
  }
];

const faqs = [
  {
    "question": "Should very early startups bother with AI agents?",
    "answer": "Yes, if there is a repeatable pain point. Even a two-person team can benefit from automating follow-up, reporting, or support admin."
  },
  {
    "question": "Do startups need expensive platforms?",
    "answer": "Not necessarily. What matters is matching the tool to the workflow and keeping the setup proportionate."
  },
  {
    "question": "Will this distract us from shipping?",
    "answer": "It will if you overcomplicate it. A narrow, high-friction workflow is the right place to start."
  },
  {
    "question": "Can one agent cover everything?",
    "answer": "Usually not well. It is better to solve one job properly, then expand into a small agent system over time."
  }
];

const relatedGuides = [
  {
    "href": "/guides/getting-started-ai-automation",
    "title": "Getting Started With AI Automation"
  },
  {
    "href": "/guides/how-to-build-ai-agent",
    "title": "How to Build AI Agent"
  },
  {
    "href": "/guides/openclaw-for-business",
    "title": "OpenClaw for Business"
  },
  {
    "href": "/guides/autonomous-ai-agents",
    "title": "Autonomous AI Agents"
  }
];

export default function AIAgentsForStartupsPage() {
  return (
    <>
      <section className="hero-gradient relative overflow-hidden min-h-[70vh] flex items-center grain">
        <div className="absolute top-20 right-[10%] w-[400px] h-[400px] bg-orange/5 rounded-full blur-[120px] glow-pulse" />
        <div className="absolute bottom-20 left-[5%] w-[300px] h-[300px] bg-blue/10 rounded-full blur-[100px] glow-pulse" style={{ animationDelay: "3s" }} />

        <div className="max-w-[1140px] mx-auto px-6 relative z-10 py-20">
          <div className="max-w-[760px]">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-white/60 text-sm font-medium">Startup Growth Guide</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl md:text-[3.2rem] font-extrabold text-white mb-6 leading-[1.05] tracking-tight">
              AI Agents for Startups
            </h1>

            <p className="text-white/60 text-lg md:text-xl max-w-[620px] mb-10 leading-relaxed">
              Startups win on speed, not process theatre. AI agents help founders and lean teams move faster across research, delivery, support, and internal operations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#speed"
                className="inline-flex items-center justify-center bg-orange text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-orange-hover transition-all hover:-translate-y-0.5 shadow-glow-orange"
              >
                See startup use cases
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
