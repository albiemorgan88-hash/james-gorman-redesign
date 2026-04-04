import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "OpenClaw vs Microsoft Copilot: Which Is Right for Your Business?",
  description: "Practical comparison of OpenClaw and Microsoft Copilot for UK businesses. Features, costs, data privacy, flexibility, and which platform delivers better ROI.",
  keywords: [
    "openclaw vs microsoft copilot",
    "copilot alternative",
    "microsoft copilot comparison",
    "ai assistant for business",
    "copilot vs open source ai",
    "openclaw comparison",
    "microsoft 365 copilot review",
    "best ai for business uk"
  ],
  alternates: { canonical: "https://openclawconsultant.co.uk/guides/openclaw-vs-microsoft-copilot" },
  openGraph: {
    title: "OpenClaw vs Microsoft Copilot: Which Is Right for Your Business?",
    description: "Practical comparison of OpenClaw and Microsoft Copilot for UK businesses. Features, costs, data privacy, and ROI.",
    url: "https://openclawconsultant.co.uk/guides/openclaw-vs-microsoft-copilot",
    type: "article",
  },
};

const comparisonPoints = [
  {
    category: "What It Actually Does",
    openclaw: "A multi-agent orchestration platform. Deploy specialised AI agents that handle entire workflows — research, writing, data processing, web scraping, code execution, and cross-system automation. Agents work independently or in teams.",
    copilot: "An AI assistant embedded in Microsoft 365 apps. Summarises emails in Outlook, generates slides in PowerPoint, analyses data in Excel, drafts documents in Word. Works within the Microsoft ecosystem.",
    verdict: "Different tools for different jobs. Copilot enhances individual productivity in Office apps. OpenClaw automates entire business processes."
  },
  {
    category: "Cost",
    openclaw: "Open source core, free to install. Pay only for LLM API usage (typically £50-200/month for a small business). Runs on hardware you already own.",
    copilot: "£25/user/month on top of Microsoft 365 (which is £10-30/user/month). For 20 users that's £6,000/year for Copilot alone. Requires Microsoft 365 E3/E5 or Business Standard/Premium.",
    verdict: "OpenClaw is dramatically cheaper, especially as you scale. Copilot costs escalate linearly with headcount."
  },
  {
    category: "Data Privacy",
    openclaw: "Runs locally on your own hardware. Data never leaves your network unless you choose cloud LLM providers. Full control over what data goes where.",
    copilot: "Data processed through Microsoft's cloud. Microsoft states data isn't used for model training, but it traverses their infrastructure. Subject to Microsoft's data processing agreements and US jurisdiction.",
    verdict: "OpenClaw wins for organisations with strict data sovereignty requirements."
  },
  {
    category: "Flexibility & Scope",
    openclaw: "Works with any system, any API, any data source. Not locked to a single vendor ecosystem. Can automate workflows across completely different platforms.",
    copilot: "Primarily works within Microsoft 365. Limited ability to interact with non-Microsoft systems. Copilot Studio adds some customisation but still Microsoft-centric.",
    verdict: "OpenClaw wins on flexibility. If your business runs entirely on Microsoft 365, Copilot integrates more seamlessly with those specific apps."
  },
  {
    category: "Multi-Agent Capability",
    openclaw: "Native multi-agent architecture. Deploy a team of specialised agents — one for research, one for writing, one for data analysis — coordinated automatically.",
    copilot: "Single assistant model. Copilot is one AI helper, not a team of specialists. Can't delegate sub-tasks or coordinate complex multi-step workflows independently.",
    verdict: "OpenClaw wins. For anything beyond simple single-step tasks, multi-agent systems are fundamentally more capable."
  },
  {
    category: "Ease of Use",
    openclaw: "CLI installation, then interact via Telegram, Discord, or web chat. Initial setup requires some technical comfort. Skills system simplifies common workflows.",
    copilot: "Appears inside apps you already use. Zero installation if you have Microsoft 365. Natural language prompts in familiar interfaces.",
    verdict: "Copilot wins on initial ease of use. For non-technical users already in the Microsoft ecosystem, the learning curve is minimal."
  }
];

const faqs = [
  {
    question: "Can I use both OpenClaw and Microsoft Copilot?",
    answer: "Absolutely, and many businesses do. Copilot handles day-to-day productivity within Microsoft 365 — email summaries, document drafting, spreadsheet analysis. OpenClaw handles the bigger operational workflows — lead generation, multi-system reporting, automated research, and process automation that spans multiple platforms. They complement each other well."
  },
  {
    question: "Is Microsoft Copilot worth £25 per user per month?",
    answer: "It depends on the user. Power users of Outlook, Teams, and Excel often see genuine productivity gains. But studies show that average adoption rates hover around 40-50% — meaning half your licences may go underused. At £25/user/month, a 50-person company spends £15,000/year. That same budget could fund comprehensive OpenClaw automation benefiting the entire organisation."
  },
  {
    question: "Which is better for small businesses?",
    answer: "For businesses under 10 people, OpenClaw typically delivers better value. You get automation capabilities that go far beyond what Copilot offers, at a fraction of the cost. Copilot makes more sense in larger organisations where the Microsoft 365 investment is already deep and individual productivity multipliers add up across hundreds of users."
  },
  {
    question: "What about security — isn't Microsoft more secure?",
    answer: "Microsoft invests billions in security, but that doesn't mean your data is more secure with them. Cloud processing inherently involves trusting a third party. OpenClaw running locally means your data never leaves your premises — there's no cloud provider to trust or breach to worry about. For regulated industries, local processing often meets compliance requirements more easily."
  },
  {
    question: "Can Copilot do what OpenClaw does with enough customisation?",
    answer: "Copilot Studio allows some customisation, but it's fundamentally an assistant in a box, not an autonomous agent platform. You can't build multi-agent systems, execute arbitrary code, scrape websites, or orchestrate complex workflows across non-Microsoft systems. The architecture is different — Copilot augments human work in Office apps, OpenClaw automates entire processes."
  },
  {
    question: "Which has better ROI for UK businesses?",
    answer: "For most SMEs, OpenClaw delivers higher ROI because it automates entire workflows rather than just making individual tasks slightly faster. Our <a href='/guides/ai-agents-roi-guide' class='text-orange hover:underline'>AI Agent ROI guide</a> covers measurement frameworks in detail. That said, large enterprises with deep Microsoft investments may find Copilot's per-user productivity gains easier to measure and justify."
  }
];

export default function OpenClawVsCopilotPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient relative overflow-hidden min-h-[70vh] flex items-center grain">
        <div className="max-w-[1140px] mx-auto px-6 relative z-10 py-20">
          <div className="max-w-[720px]">
            <h1 className="font-heading text-4xl sm:text-5xl md:text-[3.2rem] font-extrabold text-white mb-6 leading-[1.05] tracking-tight">
              OpenClaw vs
              <br />
              <span className="text-orange">Microsoft Copilot</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl max-w-[540px] mb-10 leading-relaxed">
              One is an AI assistant inside Office apps. The other is an autonomous agent platform. Here&apos;s an honest comparison to help you choose — or use both.
            </p>
            <a
              href="#comparison"
              className="inline-flex items-center justify-center bg-orange text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-orange-hover transition-all hover:-translate-y-0.5 shadow-glow-orange"
            >
              See the Comparison
            </a>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#fafbfc] to-transparent" />
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-orange mb-2">£25</div>
              <div className="text-muted">Per user/month for Copilot vs pay-per-use OpenClaw</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange mb-2">Multi</div>
              <div className="text-muted">Agent teams in OpenClaw vs single assistant in Copilot</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange mb-2">Local</div>
              <div className="text-muted">Data processing with OpenClaw vs cloud with Copilot</div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section id="comparison" className="bg-light py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Head-to-Head Comparison
            </h2>
            <p className="text-muted text-lg max-w-[600px] mx-auto">
              An honest look at where each platform excels and where it falls short for UK businesses.
            </p>
          </div>

          <div className="space-y-8">
            {comparisonPoints.map((point, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-card">
                <h3 className="font-heading font-bold text-2xl text-dark mb-6">{point.category}</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6">
                  <div>
                    <h4 className="font-semibold text-dark mb-3 flex items-center gap-2">
                      <span className="text-orange">◆</span> OpenClaw
                    </h4>
                    <p className="text-muted text-sm">{point.openclaw}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark mb-3 flex items-center gap-2">
                      <span className="text-blue">◆</span> Microsoft Copilot
                    </h4>
                    <p className="text-muted text-sm">{point.copilot}</p>
                  </div>
                </div>
                <div className="border-t border-border pt-4">
                  <p className="text-sm font-semibold text-dark">
                    <span className="text-orange">Verdict:</span> {point.verdict}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Real Question */}
      <section className="bg-white py-28">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              The Real Question: Assistant or Agent?
            </h2>
          </div>
          <div className="max-w-[800px] mx-auto prose prose-lg text-muted">
            <p>
              The fundamental difference isn&apos;t features or price — it&apos;s philosophy. Microsoft Copilot is an <strong>assistant</strong>: it waits for you to ask, helps with the task at hand, and stops when you stop. OpenClaw is an <strong>agent platform</strong>: you define goals, and agents work autonomously to achieve them — even whilst you&apos;re asleep.
            </p>
            <p>
              An assistant makes you faster at your existing workflow. An agent changes the workflow entirely. A Copilot user still writes emails, creates presentations, and analyses spreadsheets — just faster. An OpenClaw user delegates entire processes: &quot;Monitor competitor pricing and alert me when it changes&quot; or &quot;Screen all job applications and schedule interviews with the top 5 candidates.&quot;
            </p>
            <p>
              For many businesses, the answer is both. Use Copilot for the daily Microsoft 365 productivity boost. Use OpenClaw for the transformative automation that changes how your business operates. <a href="https://bluecanvas.ai" className="text-orange hover:underline">Blue Canvas</a> can help you design the right mix, and our <a href="/guides/building-ai-agent-team" className="text-orange hover:underline">guide to building an AI agent team</a> covers how to scale from a single agent to full operations.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-surface py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              OpenClaw vs Copilot: FAQs
            </h2>
          </div>

          <div className="max-w-[800px] mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-card">
                <h3 className="font-heading font-bold text-lg text-dark mb-3">{faq.question}</h3>
                <p className="text-muted text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: faq.answer }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Blue Canvas */}
      <section className="bg-light py-16">
        <div className="max-w-[1140px] mx-auto px-6 text-center">
          <h3 className="font-heading font-bold text-xl text-dark mb-4">About Blue Canvas</h3>
          <p className="text-muted max-w-[600px] mx-auto text-sm">
            Blue Canvas is an AI agent consultant based in Derry, Northern Ireland. Through <a href="https://bluecanvas.ai" className="text-orange hover:underline">Blue Canvas</a>, 
            he helps UK businesses navigate the AI platform landscape and implement the right tools for their specific needs — without vendor bias.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-navy text-white py-24 relative overflow-hidden grain">
        <div className="max-w-[1140px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Need Help
                <br />
                <span className="text-orange">Choosing?</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Free consultation to assess your requirements and recommend the right AI approach for your business — whether that&apos;s OpenClaw, Copilot, or both.
              </p>
              <div className="space-y-3 text-white/60">
                <div className="flex items-center gap-3">
                  <span className="text-orange">✓</span>
                  Vendor-neutral assessment
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-orange">✓</span>
                  Cost-benefit analysis
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-orange">✓</span>
                  Implementation roadmap
                </div>
              </div>
            </div>
            <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8">
              <h3 className="font-heading font-bold text-xl text-white mb-1">AI Platform Consultation</h3>
              <p className="text-white/60 text-sm mb-6">Get expert advice on the right AI tools for your business</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Related Guides */}
      <section className="py-16 bg-surface">
        <div className="max-w-[1140px] mx-auto px-6">
          <h2 className="font-heading text-2xl font-bold text-navy mb-8 text-center">Related Guides</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-[800px] mx-auto">
            <a href="/guides/openclaw-vs-langchain" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">OpenClaw vs LangChain</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/building-ai-agent-team" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">Building an AI Agent Team</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/ai-agents-roi-guide" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">AI Agent ROI Guide</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/multi-agent-systems-explained" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">Multi-Agent Systems Explained</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
