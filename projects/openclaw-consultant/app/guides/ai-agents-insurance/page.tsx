import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "AI Agents for Insurance Companies",
  description: "How insurance firms use AI agents for claims processing, underwriting support, customer service, and policy operations with practical controls.",
  keywords: [
  "ai agents insurance",
  "insurance ai automation",
  "ai claims processing",
  "underwriting ai",
  "insurance customer service ai",
  "ai insurance uk",
  "openclaw insurance",
  "policy admin automation"
],
  alternates: { canonical: "https://openclawconsultant.co.uk/guides/ai-agents-insurance" },
  openGraph: {
    title: "AI Agents for Insurance Companies",
    description: "How insurance firms use AI agents for claims processing, underwriting support, customer service, and policy operations with practical controls.",
    url: "https://openclawconsultant.co.uk/guides/ai-agents-insurance",
    type: "article",
  },
};

const stats = [
  {
    "value": "Claims",
    "label": "Faster triage and document handling"
  },
  {
    "value": "Service",
    "label": "Quicker responses without more headcount"
  },
  {
    "value": "Control",
    "label": "Approvals matter in regulated workflows"
  }
];

const sections = [
  {
    "id": "claims",
    "title": "Claims processing is the obvious win",
    "intro": "Claims workflows are full of repeated actions: reading submissions, extracting facts, checking policy details, requesting missing documents, updating systems, and routing exceptions. This is exactly where AI agents create value.",
    "cards": [
      {
        "heading": "Where they help",
        "bullets": [
          "Triage incoming claims and classify urgency or likely complexity.",
          "Read supporting documents and pull out key facts for handlers.",
          "Draft claimant updates and chase missing information automatically."
        ]
      },
      {
        "heading": "Why this matters",
        "bullets": [
          "Faster first response improves customer experience at stressful moments.",
          "Handlers spend less time on repetitive admin and more time on judgement-heavy cases.",
          "Backlogs become easier to control because work is sorted earlier."
        ]
      },
      {
        "heading": "Good guardrails",
        "bullets": [
          "Keep settlement approvals with human handlers.",
          "Use confidence thresholds to push edge cases into review.",
          "Maintain a full audit trail for every recommendation and action."
        ]
      }
    ]
  },
  {
    "id": "underwriting",
    "title": "Underwriting support, not autopilot",
    "intro": "AI agents can support underwriting by gathering data, summarising submissions, and flagging inconsistencies. The realistic goal is better preparation and faster review, not blind automation of high-stakes risk decisions.",
    "cards": [
      {
        "heading": "Useful support tasks",
        "bullets": [
          "Assemble applicant data from multiple sources into a clear summary.",
          "Flag missing information, contradictions, or unusual patterns.",
          "Prepare renewal packs and highlight material changes since the last period."
        ]
      },
      {
        "heading": "Why insurers care",
        "bullets": [
          "Underwriters get a cleaner, faster starting point.",
          "Turnaround time improves without forcing rushed judgement.",
          "Service teams can communicate updates more consistently."
        ]
      },
      {
        "heading": "Where to be careful",
        "bullets": [
          "Bias, explainability, and regulation matter.",
          "Any recommendation should be reviewable by a human.",
          "Do not present probabilistic suggestions as facts."
        ]
      }
    ]
  },
  {
    "id": "service",
    "title": "Customer service and policy administration",
    "intro": "Insurance customers often just want clarity. Has my claim been received? What does my policy cover? What documents do you still need? AI agents are useful because they can answer with policy context and action, not generic scripts.",
    "cards": [
      {
        "heading": "Good service use cases",
        "bullets": [
          "Status updates on claims or policy changes.",
          "Document collection and reminder workflows.",
          "Routine cover, billing, and renewal enquiries that need account context."
        ]
      },
      {
        "heading": "Operational value",
        "bullets": [
          "Lower call and email volume for routine questions.",
          "Better consistency across busy service teams.",
          "Less swivel-chair work between portals, inboxes, and policy systems."
        ]
      },
      {
        "heading": "OpenClaw fit",
        "bullets": [
          "OpenClaw works well when insurers need agents across browsers, files, inboxes, and internal systems.",
          "It is flexible enough for bespoke workflows rather than forcing every insurer into the same model.",
          "That helps where legacy systems are part of the reality."
        ]
      }
    ]
  },
  {
    "id": "rollout",
    "title": "Best way to deploy in insurance",
    "intro": "Start in low-risk but high-volume steps such as document handling, service updates, triage, and internal summarisation. Prove speed and quality there before expanding into more sensitive underwriting or claims recommendations.",
    "cards": [
      {
        "heading": "Recommended sequence",
        "bullets": [
          "Inbound claims triage.",
          "Document extraction and missing-info chasing.",
          "Customer status updates and internal case summaries."
        ]
      },
      {
        "heading": "Metrics",
        "bullets": [
          "Time to first response.",
          "Average handling time for straightforward cases.",
          "Backlog size and proportion of cases escalated correctly."
        ]
      },
      {
        "heading": "Recommendation",
        "bullets": [
          "Automate preparation first, judgement second.",
          "Design review points around regulatory and financial risk.",
          "Get a free AI agent assessment before scaling insurer workflows."
        ]
      }
    ]
  }
];

const faqs = [
  {
    "question": "Can AI agents approve insurance claims?",
    "answer": "They can support the process, but full approval should sit with a human unless the workflow is tightly bounded and the risk is low."
  },
  {
    "question": "Will this work with legacy insurance systems?",
    "answer": "Often yes. Many of the best implementations work around legacy constraints by using browser automation, APIs, document workflows, and structured handoffs."
  },
  {
    "question": "Can AI agents reduce fraud?",
    "answer": "They can help by surfacing anomalies, inconsistent documents, or suspicious patterns, but fraud decisions still need specialist review."
  },
  {
    "question": "Is this only for large insurers?",
    "answer": "No. MGAs, brokers, and specialist insurers often benefit quickly because operational teams are lean and admin-heavy."
  }
];

const relatedGuides = [
  {
    "href": "/guides/ai-for-financial-services-uk",
    "title": "AI for Financial Services UK"
  },
  {
    "href": "/guides/ai-risk-management-framework",
    "title": "AI Risk Management Framework"
  },
  {
    "href": "/guides/ai-governance-compliance-uk",
    "title": "AI Governance and Compliance UK"
  },
  {
    "href": "/guides/enterprise-ai-deployment-uk",
    "title": "Enterprise AI Deployment UK"
  }
];

export default function AIAgentsInsurancePage() {
  return (
    <>
      <section className="hero-gradient relative overflow-hidden min-h-[70vh] flex items-center grain">
        <div className="absolute top-20 right-[10%] w-[400px] h-[400px] bg-orange/5 rounded-full blur-[120px] glow-pulse" />
        <div className="absolute bottom-20 left-[5%] w-[300px] h-[300px] bg-blue/10 rounded-full blur-[100px] glow-pulse" style={{ animationDelay: "3s" }} />

        <div className="max-w-[1140px] mx-auto px-6 relative z-10 py-20">
          <div className="max-w-[760px]">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-white/60 text-sm font-medium">Insurance Operations Guide</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl md:text-[3.2rem] font-extrabold text-white mb-6 leading-[1.05] tracking-tight">
              AI Agents for Insurance
            </h1>

            <p className="text-white/60 text-lg md:text-xl max-w-[620px] mb-10 leading-relaxed">
              Insurance is packed with documentation, repetitive decisions, and service delays. AI agents can cut admin and improve response times when deployed with proper controls.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#claims"
                className="inline-flex items-center justify-center bg-orange text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-orange-hover transition-all hover:-translate-y-0.5 shadow-glow-orange"
              >
                See insurance use cases
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
