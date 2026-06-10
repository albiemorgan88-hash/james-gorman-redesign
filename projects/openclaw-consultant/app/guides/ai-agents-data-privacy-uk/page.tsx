import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "AI Agents and Data Privacy UK: GDPR Compliance Guide",
  description: "Practical UK guide to using AI agents in a GDPR-compliant way, covering lawful basis, processors, access controls, retention, logging, and safe deployment.",
  keywords: [
  "ai agents gdpr",
  "ai agents data privacy uk",
  "gdpr ai agent guide",
  "uk ai compliance",
  "ai agent privacy controls",
  "openclaw gdpr",
  "ai governance uk",
  "data protection ai"
],
  alternates: { canonical: "https://openclawconsultant.co.uk/guides/ai-agents-data-privacy-uk" },
  openGraph: {
    title: "AI Agents and Data Privacy UK: GDPR Compliance Guide",
    description: "Practical UK guide to using AI agents in a GDPR-compliant way, covering lawful basis, processors, access controls, retention, logging, and safe deployment.",
    url: "https://openclawconsultant.co.uk/guides/ai-agents-data-privacy-uk",
    type: "article",
  },
};

const stats = [
  {
    "value": "GDPR",
    "label": "Lawful basis and accountability still apply"
  },
  {
    "value": "Access",
    "label": "Agents should only see what they need"
  },
  {
    "value": "Logs",
    "label": "Audit trails matter when agents act"
  }
];

const sections = [
  {
    "id": "gdpr",
    "title": "What GDPR means in practice for AI agents",
    "intro": "GDPR does not ban AI agents. It requires you to know what personal data is being processed, why it is being processed, who has access to it, and how you control risk. The more autonomous the workflow, the more important those questions become.",
    "cards": [
      {
        "heading": "Core principles",
        "bullets": [
          "Data minimisation: do not give an agent access to data it does not need.",
          "Purpose limitation: define the job clearly instead of allowing vague general use.",
          "Accountability: keep records of what the system does and how it is governed."
        ]
      },
      {
        "heading": "Practical reality",
        "bullets": [
          "Most compliance problems come from messy implementation, not from AI itself.",
          "Copying whole inboxes, CRMs, or document stores into a model without controls is the real danger.",
          "Well-scoped workflows are much easier to defend and audit."
        ]
      },
      {
        "heading": "Why deployment model matters",
        "bullets": [
          "Self-hosted or controlled environments may simplify your risk profile.",
          "Processor agreements and data residency matter if third-party model providers are involved.",
          "OpenClaw is attractive where businesses want more control over infrastructure and tooling."
        ]
      }
    ]
  },
  {
    "id": "controls",
    "title": "Controls you should expect",
    "intro": "Any serious AI agent deployment handling UK personal data should have basic privacy and governance controls from the start.",
    "cards": [
      {
        "heading": "Must-have controls",
        "bullets": [
          "Role-based access permissions.",
          "Logging of inputs, outputs, and actions where appropriate.",
          "Defined retention policies and a way to remove or correct data."
        ]
      },
      {
        "heading": "Workflow controls",
        "bullets": [
          "Human approval for sensitive actions.",
          "Confidence thresholds for ambiguous cases.",
          "Clear escalation routes when the agent is unsure or a policy boundary is hit."
        ]
      },
      {
        "heading": "Documentation",
        "bullets": [
          "Record of processing activities should reflect the workflow.",
          "Privacy notices may need updating depending on the use case.",
          "High-risk cases may justify a DPIA before launch."
        ]
      }
    ]
  },
  {
    "id": "risk",
    "title": "Common mistakes to avoid",
    "intro": "The risky deployments are usually the ones that are too broad, too vague, or too enthusiastic about automation before anyone has worked through lawful basis, minimisation, and accountability.",
    "cards": [
      {
        "heading": "Avoid this",
        "bullets": [
          "Giving the agent blanket access “just in case”.",
          "Using personal data for a new purpose without checking the legal basis.",
          "Deploying in regulated workflows without clear review and override mechanisms."
        ]
      },
      {
        "heading": "Better approach",
        "bullets": [
          "Start with one use case, one data flow, and one owner.",
          "Write down exactly what the agent reads, stores, generates, and triggers.",
          "Test with redacted or low-risk data where possible before scaling."
        ]
      },
      {
        "heading": "UK business view",
        "bullets": [
          "You do not need perfect paperwork before learning anything.",
          "But you do need enough governance to show the system is controlled.",
          "Blue Canvas treats privacy as part of deployment design, not a later admin task."
        ]
      }
    ]
  },
  {
    "id": "next",
    "title": "A practical rollout path",
    "intro": "Start with low-risk workflows such as internal reporting, document classification, or policy-guided admin support. Learn how the agent behaves, refine your controls, then expand into more sensitive areas only when the governance is genuinely ready.",
    "cards": [
      {
        "heading": "Good first steps",
        "bullets": [
          "Map the data flow.",
          "Limit access to only what is required.",
          "Put audit logging and approvals in place."
        ]
      },
      {
        "heading": "Questions to answer",
        "bullets": [
          "What lawful basis applies?",
          "Who is the controller and who are the processors?",
          "How will a data subject request be handled if the workflow touches their data?"
        ]
      },
      {
        "heading": "Recommendation",
        "bullets": [
          "Take privacy seriously without paralysing the project.",
          "Build compliance into the workflow early.",
          "Get a free AI agent assessment before deploying sensitive use cases."
        ]
      }
    ]
  }
];

const faqs = [
  {
    "question": "Do AI agents automatically break GDPR?",
    "answer": "No. GDPR is about lawful, proportionate, accountable processing. A well-scoped AI workflow can be compliant."
  },
  {
    "question": "Do we always need a DPIA?",
    "answer": "Not always, but high-risk or novel processing may justify one. It depends on the use case and the data involved."
  },
  {
    "question": "Is self-hosting safer?",
    "answer": "It can reduce some privacy concerns, especially around control and data residency, but governance and access design still matter."
  },
  {
    "question": "Can OpenClaw be used in privacy-sensitive environments?",
    "answer": "Yes, especially where businesses want more control over infrastructure, permissions, logs, and workflow design."
  }
];

const relatedGuides = [
  {
    "href": "/guides/ai-governance-compliance-uk",
    "title": "AI Governance and Compliance UK"
  },
  {
    "href": "/guides/ai-agent-security-guide",
    "title": "AI Agent Security Guide"
  },
  {
    "href": "/guides/openclaw-security-best-practices",
    "title": "OpenClaw Security and Compliance"
  },
  {
    "href": "/guides/openclaw-enterprise-deployment",
    "title": "Enterprise OpenClaw Deployment"
  }
];

export default function AIAgentsDataPrivacyUKPage() {
  return (
    <>
      <section className="hero-gradient relative overflow-hidden min-h-[70vh] flex items-center grain">
        <div className="absolute top-20 right-[10%] w-[400px] h-[400px] bg-orange/5 rounded-full blur-[120px] glow-pulse" />
        <div className="absolute bottom-20 left-[5%] w-[300px] h-[300px] bg-blue/10 rounded-full blur-[100px] glow-pulse" style={{ animationDelay: "3s" }} />

        <div className="max-w-[1140px] mx-auto px-6 relative z-10 py-20">
          <div className="max-w-[760px]">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-white/60 text-sm font-medium">GDPR Compliance Guide</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl md:text-[3.2rem] font-extrabold text-white mb-6 leading-[1.05] tracking-tight">
              AI Agents and Data Privacy UK
            </h1>

            <p className="text-white/60 text-lg md:text-xl max-w-[620px] mb-10 leading-relaxed">
              You can use AI agents in a GDPR-aware way, but only if privacy is designed into the workflow rather than bolted on at the end.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#gdpr"
                className="inline-flex items-center justify-center bg-orange text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-orange-hover transition-all hover:-translate-y-0.5 shadow-glow-orange"
              >
                See the GDPR essentials
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
