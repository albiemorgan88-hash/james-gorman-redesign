import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "AI Agents for Marketing: Automate Your Campaigns",
  description: "How AI agents help marketing teams automate content, paid media, reporting, lead follow-up, and campaign operations without losing control.",
  keywords: [
  "ai agents for marketing",
  "marketing automation ai agents",
  "ai campaign automation",
  "openclaw marketing",
  "ai for paid ads",
  "ai for content operations",
  "marketing agent workflow",
  "ai marketing uk"
],
  alternates: { canonical: "https://openclawconsultant.co.uk/guides/ai-agents-for-marketing" },
  openGraph: {
    title: "AI Agents for Marketing: Automate Your Campaigns",
    description: "How AI agents help marketing teams automate content, paid media, reporting, lead follow-up, and campaign operations without losing control.",
    url: "https://openclawconsultant.co.uk/guides/ai-agents-for-marketing",
    type: "article",
  },
};

const stats = [
  {
    "value": "4 areas",
    "label": "Content, ads, analytics, and social"
  },
  {
    "value": "70%",
    "label": "Possible time saving in campaign operations"
  },
  {
    "value": "Faster",
    "label": "Less lag between insight and action"
  }
];

const sections = [
  {
    "id": "areas",
    "title": "Where marketing teams get the biggest wins",
    "intro": "Most marketing teams do not have a strategy problem. They have a capacity problem. Content briefs sit in docs, ad reports arrive late, social calendars drift, and leads go cold between handovers. AI agents are useful because they can keep work moving between systems and people.",
    "cards": [
      {
        "heading": "Content operations",
        "bullets": [
          "Create briefs from keyword data, audience pain points, and campaign goals.",
          "Draft first versions of landing pages, emails, social posts, and repurposed content blocks.",
          "Route drafts to human review, track approvals, and store final versions in the right folders."
        ]
      },
      {
        "heading": "Paid media support",
        "bullets": [
          "Pull campaign metrics from ad platforms and compare them against targets daily.",
          "Flag wasted spend, creative fatigue, and sudden cost spikes before they become expensive.",
          "Prepare testing suggestions based on real performance instead of guesswork."
        ]
      },
      {
        "heading": "Reporting and insight",
        "bullets": [
          "Compile weekly reports from GA4, Search Console, CRM data, and ad accounts.",
          "Turn performance changes into plain-English summaries for clients or leadership.",
          "Push alerts into Slack or Telegram when key thresholds are hit."
        ]
      }
    ]
  },
  {
    "id": "social",
    "title": "How agentic marketing differs from old-school automation",
    "intro": "Traditional marketing automation is rule-based. It works well until the context changes. AI agents handle messier situations because they can read, reason, summarise, and adapt across tools instead of following one rigid chain.",
    "cards": [
      {
        "heading": "Examples",
        "bullets": [
          "An agent can notice a landing page conversion dip, inspect recent traffic changes, and recommend the most likely fix.",
          "It can read comments and DMs, tag sentiment, and escalate sales-ready leads to the right rep.",
          "It can connect campaign performance to commercial outcomes, not just top-of-funnel vanity metrics."
        ]
      },
      {
        "heading": "Where humans still matter",
        "bullets": [
          "Brand strategy, positioning, and creative taste still need people.",
          "Final approval is sensible for anything public-facing or regulated.",
          "The best setup is not hands-off marketing. It is better-supported marketing."
        ]
      },
      {
        "heading": "OpenClaw angle",
        "bullets": [
          "OpenClaw is especially useful where marketing touches inboxes, WhatsApp, spreadsheets, browser tasks, and internal reporting.",
          "It can act like an operations layer around your campaigns rather than just a content toy.",
          "That matters for lean teams who need one system to stitch everything together."
        ]
      }
    ]
  },
  {
    "id": "roi",
    "title": "Commercial impact for small teams",
    "intro": "For SMEs, the biggest benefit is not replacing a headcount overnight. It is removing delay and inconsistency. Faster reporting, cleaner follow-up, quicker asset production, and more reliable execution create a compounding edge.",
    "cards": [
      {
        "heading": "Likely gains",
        "bullets": [
          "Less time lost between insight and action.",
          "More campaigns launched on time with fewer bottlenecks.",
          "Better continuity when one person is juggling five channels at once."
        ]
      },
      {
        "heading": "What to measure",
        "bullets": [
          "Hours saved in reporting and content ops.",
          "Lead response time and conversion rate after automation.",
          "Campaign launch speed, testing cadence, and reduction in missed tasks."
        ]
      },
      {
        "heading": "Recommended rollout",
        "bullets": [
          "Start with one workflow, such as weekly reporting or lead follow-up.",
          "Add approvals and style guardrails early.",
          "Scale to a fuller marketing operating system once one process is clearly working."
        ]
      }
    ]
  },
  {
    "id": "cta",
    "title": "What Blue Canvas usually recommends",
    "intro": "Blue Canvas usually starts with the work marketers hate but still need to do, such as reporting, handoffs, data wrangling, and repetitive campaign admin. Once those foundations are stable, creative workflows become easier to automate safely.",
    "cards": [
      {
        "heading": "Good first projects",
        "bullets": [
          "Weekly performance reporting.",
          "Lead routing and first-touch outreach.",
          "Content briefing, repurposing, and approval management."
        ]
      },
      {
        "heading": "Why this order works",
        "bullets": [
          "Operational tasks create faster, easier ROI than trying to automate brand thinking.",
          "You learn where the data is messy before scaling further.",
          "The team gains trust because the early wins are visible."
        ]
      },
      {
        "heading": "Next step",
        "bullets": [
          "Map your slowest recurring marketing workflow.",
          "Set a clear owner and a clear success metric.",
          "Get a free AI agent assessment before buying random tools."
        ]
      }
    ]
  }
];

const faqs = [
  {
    "question": "Can AI agents run our whole marketing department?",
    "answer": "No, and that is not the goal. They remove admin, coordination lag, and repetitive execution so the team can focus on strategy and creative judgement."
  },
  {
    "question": "Are they only useful for big teams?",
    "answer": "Not at all. Small teams often get the fastest ROI because one missed handoff or delayed report hurts them more."
  },
  {
    "question": "Can they work with our current stack?",
    "answer": "Usually yes. Most value comes from connecting the tools you already use rather than replacing everything."
  },
  {
    "question": "Will this just produce mediocre AI content?",
    "answer": "Not if it is designed well. The stronger use case is workflow automation around content and campaigns, with human review where quality matters."
  }
];

const relatedGuides = [
  {
    "href": "/guides/ai-social-media-management",
    "title": "AI Social Media Management"
  },
  {
    "href": "/guides/ai-automation-for-business-uk",
    "title": "AI Automation for Business UK"
  },
  {
    "href": "/guides/openclaw-social-media-management",
    "title": "OpenClaw Social Media Management"
  },
  {
    "href": "/guides/ai-agents-roi-guide",
    "title": "Measuring AI ROI for UK Business"
  }
];

export default function AIAgentsForMarketingPage() {
  return (
    <>
      <section className="hero-gradient relative overflow-hidden min-h-[70vh] flex items-center grain">
        <div className="absolute top-20 right-[10%] w-[400px] h-[400px] bg-orange/5 rounded-full blur-[120px] glow-pulse" />
        <div className="absolute bottom-20 left-[5%] w-[300px] h-[300px] bg-blue/10 rounded-full blur-[100px] glow-pulse" style={{ animationDelay: "3s" }} />

        <div className="max-w-[1140px] mx-auto px-6 relative z-10 py-20">
          <div className="max-w-[760px]">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-white/60 text-sm font-medium">Marketing Automation Guide</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl md:text-[3.2rem] font-extrabold text-white mb-6 leading-[1.05] tracking-tight">
              AI Agents for Marketing
            </h1>

            <p className="text-white/60 text-lg md:text-xl max-w-[620px] mb-10 leading-relaxed">
              Marketing is full of repetitive, time-sensitive work. AI agents can handle the grunt work, speed up execution, and give your team more room to think.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#areas"
                className="inline-flex items-center justify-center bg-orange text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-orange-hover transition-all hover:-translate-y-0.5 shadow-glow-orange"
              >
                See marketing use cases
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
