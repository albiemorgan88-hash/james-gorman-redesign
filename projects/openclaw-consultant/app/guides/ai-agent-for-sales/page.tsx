import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "AI Agents for Sales: Automate Outreach and Close Deals",
  description: "How AI agents transform sales operations. Automated lead qualification, personalised outreach, pipeline management, and competitive intelligence. Real ROI for UK sales teams.",
  keywords: [
    "ai agent for sales",
    "ai sales agent",
    "ai sales automation",
    "automated sales outreach",
    "ai lead qualification",
    "ai sales pipeline",
    "ai for sales teams uk",
    "sales ai agent"
  ],
  alternates: { canonical: "https://openclawconsultant.co.uk/guides/ai-agent-for-sales" },
  openGraph: {
    title: "AI Agents for Sales: Automate Outreach and Close Deals",
    description: "How AI agents transform sales. Lead qualification, personalised outreach, and pipeline management.",
    url: "https://openclawconsultant.co.uk/guides/ai-agent-for-sales",
    type: "article",
  },
};

const salesAutomations = [
  {
    area: "Lead Qualification",
    description: "AI agents engage website visitors and inbound leads in real time. They ask qualifying questions based on your ideal customer profile, score leads, and book meetings directly into your sales team's calendars — all within minutes of first contact.",
    impact: "3x more qualified meetings booked, 80% less time on unqualified leads",
    example: "A B2B SaaS company deployed lead qualification agents that engaged website visitors with personalised questions. Result: qualified meeting bookings went from 12/month to 38/month with zero additional headcount."
  },
  {
    area: "Personalised Outreach",
    description: "Beyond mail merge. AI agents research each prospect — company news, recent LinkedIn activity, industry trends, financial filings — then craft genuinely personalised emails and sequences. Each prospect gets unique content, not templates.",
    impact: "42% higher open rates, 3x reply rates vs template-based sequences",
    example: "An IT services firm used AI agents to research each prospect and write tailored cold emails referencing specific business challenges. Reply rate jumped from 2% to 8%, generating 40+ new conversations per month."
  },
  {
    area: "Pipeline Management",
    description: "AI agents monitor your pipeline for stale deals, missing follow-ups, and engagement signals. They nudge reps when deals go quiet, suggest next actions based on deal history, and update CRM data automatically from email and meeting notes.",
    impact: "25% improvement in pipeline velocity, 90% CRM data accuracy",
    example: "A recruitment consultancy's pipeline was full of stale opportunities. AI agents identified 47 deals that had gone quiet, automatically sent re-engagement sequences, and recovered £180,000 in pipeline value."
  },
  {
    area: "Competitive Intelligence",
    description: "Continuous monitoring of competitor pricing, feature announcements, customer reviews, and market positioning. Daily briefs delivered to your sales team with actionable insights and battle cards.",
    impact: "Win rate improvement of 15-20% on competitive deals",
    example: "A managed services provider deployed competitor monitoring agents that tracked 8 competitors daily. When a competitor raised prices, the sales team had battle cards within hours — winning 5 deals that quarter they would have lost."
  },
  {
    area: "Proposal Generation",
    description: "AI agents pull data from your CRM, previous proposals, pricing models, and discovery notes to generate first-draft proposals. Reps review and customise rather than starting from scratch every time.",
    impact: "70% faster proposal turnaround, consistent quality",
    example: "A digital agency reduced proposal creation time from 6 hours to 90 minutes. The AI agent pulled project details, relevant case studies, and pricing — the account manager just reviewed and personalised the final 20%."
  }
];

const faqs = [
  {
    question: "Will AI agents replace salespeople?",
    answer: "No. AI agents handle the operational side of sales — research, data entry, scheduling, initial outreach, CRM updates. The relationship-building, negotiation, and strategic selling that closes deals still requires human sales professionals. Think of AI as removing the admin so your sales team can spend more time actually selling."
  },
  {
    question: "How do AI sales agents integrate with our CRM?",
    answer: "AI agents connect to all major CRMs (HubSpot, Salesforce, Pipedrive, Zoho) through their APIs. They can read and write contact data, update deal stages, log activities, and trigger workflows. Your sales team continues using the CRM they know — the AI just makes the data better and the processes faster."
  },
  {
    question: "Isn't AI outreach just spam?",
    answer: "Bad AI outreach is spam — and there's plenty of it. Good AI outreach is the opposite: deeply researched, genuinely personalised, and sent at appropriate intervals. The difference is implementation. Our approach uses AI for research and personalisation, not volume. Quality over quantity always wins in B2B sales."
  },
  {
    question: "How quickly can we see results?",
    answer: "Lead qualification agents typically show results within 2 weeks — more meetings booked, better quality leads. Outreach improvements take 4-6 weeks as sequences run and data accumulates. Pipeline management improvements are visible within the first month through better data hygiene and follow-up consistency."
  },
  {
    question: "What does it cost to deploy AI sales agents?",
    answer: "Running costs for a small sales team (5-10 reps) are typically £200-500/month including API costs. Implementation with a consultant costs £3,000-8,000 for a full sales automation stack. Most teams see positive ROI within the first 2 months from increased meeting bookings and faster follow-ups alone."
  },
  {
    question: "Is AI-powered outreach GDPR compliant?",
    answer: "Yes, when done properly. B2B outreach under legitimate interest is lawful under UK GDPR, provided you offer easy opt-out, don't contact people who've opted out, and don't process data beyond what's necessary. AI agents can actually improve compliance by maintaining perfect opt-out records and never forgetting to honour preferences."
  }
];

export default function AIAgentForSalesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient relative overflow-hidden min-h-[70vh] flex items-center grain">
        <div className="max-w-[1140px] mx-auto px-6 relative z-10 py-20">
          <div className="max-w-[720px]">
            <h1 className="font-heading text-4xl sm:text-5xl md:text-[3.2rem] font-extrabold text-white mb-6 leading-[1.05] tracking-tight">
              AI Agents for
              <br />
              <span className="text-orange">Sales</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl max-w-[540px] mb-10 leading-relaxed">
              Automate the grind. Personalise the outreach. Close more deals. AI agents that handle research, qualification, and pipeline management so your team can focus on selling.
            </p>
            <a
              href="#automations"
              className="inline-flex items-center justify-center bg-orange text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-orange-hover transition-all hover:-translate-y-0.5 shadow-glow-orange"
            >
              See Sales Automations
            </a>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#fafbfc] to-transparent" />
      </section>

      {/* Stats */}
      <section className="bg-white py-16">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-orange mb-2">3x</div>
              <div className="text-muted">More qualified meetings booked</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange mb-2">42%</div>
              <div className="text-muted">Higher email open rates</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange mb-2">25%</div>
              <div className="text-muted">Faster pipeline velocity</div>
            </div>
          </div>
        </div>
      </section>

      {/* Sales Automations */}
      <section id="automations" className="bg-light py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Five Ways AI Agents Transform Sales
            </h2>
          </div>

          <div className="space-y-8">
            {salesAutomations.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-card">
                <h3 className="font-heading font-bold text-2xl text-dark mb-4">{item.area}</h3>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div>
                    <p className="text-muted text-sm">{item.description}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange mb-2">Impact:</h4>
                    <p className="text-orange text-sm font-medium mb-4">{item.impact}</p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold text-green-600 mb-2">Real Example:</h4>
                    <p className="text-muted text-sm">{item.example}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Context */}
      <section className="bg-white py-28">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="max-w-[800px] mx-auto prose prose-lg text-muted">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-6 not-prose">
              Why Sales Teams Are Adopting AI Agents
            </h2>
            <p>
              The average salesperson spends just 28% of their time actually selling. The rest is research, data entry, email, scheduling, and CRM administration. AI agents flip this ratio.
            </p>
            <p>
              This isn&apos;t about replacing relationships with robots. The best sales outcomes come from human connection — understanding needs, building trust, navigating politics. AI agents free your team to do more of this by eliminating the operational overhead.
            </p>
            <p>
              For a broader view of business automation, see our <a href="/guides/ai-automation-for-business-uk" className="text-orange hover:underline">AI Automation for Business UK</a> guide. For customer-facing AI, check our guide on <a href="/guides/ai-agent-for-customer-service" className="text-orange hover:underline">AI agents for customer service</a>. And if you&apos;re evaluating platforms, our <a href="/guides/ai-agent-tools-comparison" className="text-orange hover:underline">AI Agent Tools Comparison</a> covers the options.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-surface py-28">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              AI Sales Agents: FAQs
            </h2>
          </div>
          <div className="max-w-[800px] mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl p-6">
                <h3 className="font-heading font-bold text-lg text-dark mb-3">{faq.question}</h3>
                <p className="text-muted text-sm leading-relaxed">{faq.answer}</p>
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
            Blue Canvas deploys AI sales agents for UK businesses. Through <a href="https://bluecanvas.ai" className="text-orange hover:underline">Blue Canvas</a>, Phil Patterson 
            helps sales teams automate the operational side of selling so they can focus on relationships and revenue.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-navy text-white py-24 relative overflow-hidden grain">
        <div className="max-w-[1140px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Supercharge Your
                <br />
                <span className="text-orange">Sales Operation</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Free consultation to audit your sales process, identify the biggest time drains, and show exactly how AI agents can accelerate your pipeline.
              </p>
              <div className="space-y-3 text-white/60">
                <div className="flex items-center gap-3">
                  <span className="text-orange">✓</span>
                  Sales process audit and automation mapping
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-orange">✓</span>
                  CRM integration assessment
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-orange">✓</span>
                  ROI forecast for your team size
                </div>
              </div>
            </div>
            <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8">
              <h3 className="font-heading font-bold text-xl text-white mb-1">Sales AI Consultation</h3>
              <p className="text-white/60 text-sm mb-6">Get a custom AI sales automation plan</p>
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
            <a href="/guides/ai-agent-for-customer-service" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">AI Agents for Customer Service</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/ai-agent-examples" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">AI Agent Examples</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/ai-automation-for-business-uk" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">AI Automation for Business UK</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/pricing" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">AI Agent Pricing</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">View Pricing →</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
