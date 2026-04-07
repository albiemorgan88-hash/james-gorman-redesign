import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "AI Agents for HR: Recruitment, Onboarding and Beyond",
  description: "How HR teams use AI agents for screening, scheduling, onboarding, compliance, internal support, and people operations without losing governance.",
  keywords: [
  "ai agents for hr",
  "hr automation ai",
  "ai onboarding automation",
  "ai recruitment screening",
  "hr compliance ai",
  "people ops automation",
  "ai hr uk",
  "openclaw hr"
],
  alternates: { canonical: "https://openclawconsultant.co.uk/guides/ai-agents-for-hr" },
  openGraph: {
    title: "AI Agents for HR: Recruitment, Onboarding and Beyond",
    description: "How HR teams use AI agents for screening, scheduling, onboarding, compliance, internal support, and people operations without losing governance.",
    url: "https://openclawconsultant.co.uk/guides/ai-agents-for-hr",
    type: "article",
  },
};

const stats = [
  {
    "value": "50%+",
    "label": "Reduction in repetitive HR admin"
  },
  {
    "value": "Faster",
    "label": "Onboarding and scheduling move quicker"
  },
  {
    "value": "Safer",
    "label": "Policy-driven workflows with approvals"
  }
];

const sections = [
  {
    "id": "automation",
    "title": "High-value HR workflows",
    "intro": "The best HR automations are not the flashy ones. They are the recurring processes that eat time, create inconsistency, and rely on someone remembering to chase the next step.",
    "cards": [
      {
        "heading": "Recruitment and screening",
        "bullets": [
          "Read applications, score candidates against role criteria, and surface strong fits.",
          "Coordinate interviews across calendars and send reminders automatically.",
          "Keep candidates updated so the employer brand does not suffer during busy periods."
        ]
      },
      {
        "heading": "Onboarding",
        "bullets": [
          "Trigger new starter checklists across IT, payroll, line managers, and compliance owners.",
          "Collect missing documents, policy acknowledgements, and role-specific information.",
          "Answer common employee questions using approved internal guidance."
        ]
      },
      {
        "heading": "People operations",
        "bullets": [
          "Handle routine policy queries around leave, expenses, benefits, and process steps.",
          "Monitor inboxes or forms and route requests to the right owner.",
          "Generate reports on onboarding progress, policy completion, or recurring people queries."
        ]
      }
    ]
  },
  {
    "id": "compliance",
    "title": "Why HR needs guardrails more than hype",
    "intro": "HR work touches personal data, fairness, and employment risk. That means AI agents can be genuinely useful, but only when governance is designed in from the start. Human approvals, audit logs, confidence thresholds, and role-based access are not optional extras.",
    "cards": [
      {
        "heading": "Good controls",
        "bullets": [
          "Do not let an agent make final hiring decisions alone.",
          "Separate low-risk admin from high-risk employment judgement.",
          "Keep a clear record of what the agent read, suggested, and triggered."
        ]
      },
      {
        "heading": "Where agents help compliance",
        "bullets": [
          "Prompt reminders reduce missed policy steps and expired documentation.",
          "Centralised answers improve consistency across managers and sites.",
          "Structured workflows make audits easier than ad-hoc email chains."
        ]
      },
      {
        "heading": "UK relevance",
        "bullets": [
          "For UK businesses, GDPR, fairness, and explainability matter.",
          "A practical deployment is usually better than a grand promise of fully autonomous HR.",
          "Blue Canvas favours contained workflows with clear ownership and review."
        ]
      }
    ]
  },
  {
    "id": "impact",
    "title": "Commercial and team impact",
    "intro": "HR teams rarely win by cutting headcount. They win by reducing friction for managers, improving candidate and employee experience, and creating more time for difficult human work that cannot be automated well.",
    "cards": [
      {
        "heading": "What improves",
        "bullets": [
          "Time to schedule interviews.",
          "Speed and consistency of onboarding.",
          "Response time for common internal HR questions."
        ]
      },
      {
        "heading": "What to measure",
        "bullets": [
          "Hours spent on repetitive admin each week.",
          "Drop-off during recruitment and onboarding.",
          "Missed compliance steps, policy gaps, and manager follow-up delays."
        ]
      },
      {
        "heading": "Where OpenClaw fits",
        "bullets": [
          "OpenClaw is useful when HR work spans forms, docs, inboxes, browsers, spreadsheets, and chat tools.",
          "It can sit behind approved internal workflows instead of forcing HR into a single vendor silo.",
          "That flexibility matters for growing teams with messy processes."
        ]
      }
    ]
  },
  {
    "id": "next",
    "title": "Best way to get started",
    "intro": "Start with one process that is repetitive, measurable, and low enough risk to automate safely. For many teams that means interview scheduling, onboarding administration, or internal policy Q and A with escalation routes.",
    "cards": [
      {
        "heading": "Good starting points",
        "bullets": [
          "Interview scheduling and reminders.",
          "Onboarding checklist management.",
          "Policy question handling with human escalation."
        ]
      },
      {
        "heading": "Avoid first",
        "bullets": [
          "Fully automated disciplinary workflows.",
          "Unsupervised candidate rejection decisions.",
          "Any use case where poor judgement would create legal or reputational risk."
        ]
      },
      {
        "heading": "Recommendation",
        "bullets": [
          "Design for trust first, scale second.",
          "Keep humans accountable for final people decisions.",
          "Get a free AI agent assessment before rolling HR automation out widely."
        ]
      }
    ]
  }
];

const faqs = [
  {
    "question": "Can AI agents shortlist candidates?",
    "answer": "Yes, they can support shortlisting by scoring applications against defined criteria, but final decisions should remain with humans."
  },
  {
    "question": "Are AI agents safe for employee data?",
    "answer": "They can be, provided access controls, audit logs, and data handling rules are designed properly. HR data needs tighter governance than many other workflows."
  },
  {
    "question": "Will employees accept this?",
    "answer": "Usually when the use case is clearly administrative and helpful, such as faster onboarding or easier policy answers. Transparency matters."
  },
  {
    "question": "How is this different from regular HR software?",
    "answer": "HR software stores and structures data. An AI agent acts across the workflow, reads context, chases steps, summarises issues, and keeps the process moving."
  }
];

const relatedGuides = [
  {
    "href": "/guides/ai-agents-for-recruitment",
    "title": "AI Agents for Recruitment Agencies"
  },
  {
    "href": "/guides/ai-workforce-planning-2026",
    "title": "AI Workforce Planning 2026"
  },
  {
    "href": "/guides/ai-governance-compliance-uk",
    "title": "AI Governance and Compliance UK"
  },
  {
    "href": "/guides/ai-compliance-automation",
    "title": "AI Compliance Automation"
  }
];

export default function AIAgentsForHRPage() {
  return (
    <>
      <section className="hero-gradient relative overflow-hidden min-h-[70vh] flex items-center grain">
        <div className="absolute top-20 right-[10%] w-[400px] h-[400px] bg-orange/5 rounded-full blur-[120px] glow-pulse" />
        <div className="absolute bottom-20 left-[5%] w-[300px] h-[300px] bg-blue/10 rounded-full blur-[100px] glow-pulse" style={{ animationDelay: "3s" }} />

        <div className="max-w-[1140px] mx-auto px-6 relative z-10 py-20">
          <div className="max-w-[760px]">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-white/60 text-sm font-medium">HR Automation Guide</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl md:text-[3.2rem] font-extrabold text-white mb-6 leading-[1.05] tracking-tight">
              AI Agents for HR
            </h1>

            <p className="text-white/60 text-lg md:text-xl max-w-[620px] mb-10 leading-relaxed">
              HR teams carry a huge admin load. AI agents help with recruitment, onboarding, policy access, reminders, and compliance, while keeping humans in charge of sensitive decisions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#automation"
                className="inline-flex items-center justify-center bg-orange text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-orange-hover transition-all hover:-translate-y-0.5 shadow-glow-orange"
              >
                Explore HR automations
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
