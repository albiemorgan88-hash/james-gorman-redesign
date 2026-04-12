import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "AI Consultancy Costs UK: What Businesses Should Expect to Pay",
  description: "A straight guide to AI consultancy costs in the UK, including audits, pilots, retainers, implementation work, and what changes the final price.",
  keywords: [
    "ai consultancy costs uk",
    "ai consultancy costs uk: what businesses should expect to pay",
    "openclaw consultant uk",
    "ai consultant uk",
    "ai automation uk",
    "blue canvas"
  ],
  alternates: { canonical: "https://openclawconsultant.co.uk/guides/ai-consultancy-costs-uk" },
  openGraph: {
    title: "AI Consultancy Costs UK: What Businesses Should Expect to Pay",
    description: "A straight guide to AI consultancy costs in the UK, including audits, pilots, retainers, implementation work, and what changes the final price.",
    url: "https://openclawconsultant.co.uk/guides/ai-consultancy-costs-uk",
    type: "article",
  },
};

const stats = [
  {
    value: "£750+",
    label: "Typical audit starting point",
  },
  {
    value: "£2k-£15k",
    label: "Common SME implementation band",
  },
  {
    value: "Fewer surprises",
    label: "If scope and approvals are clear",
  }
];

const sections = [
  {
    id: "price-bands",
    title: "The main AI consultancy price bands in the UK",
    html: "<p>The UK AI consultancy market has a wide spread because businesses buy very different things under the same label. A small audit is not the same as a multi-system implementation. A pilot is not the same as a monthly retainer. Once you separate those, the pricing conversation gets much clearer.</p><p>For many SMEs, the first paid step is an audit or readiness review, often from around £750 into the low thousands depending on complexity. A focused pilot can sit from the low thousands up into the mid four figures. Broader implementation work that links tools, approvals, training, and workflow design often lands between a few thousand and around £15,000 for SME-scale projects, sometimes more when custom work or regulated environments are involved.</p><p>Ongoing retainers make sense when the business is actively rolling AI out across several functions and wants iterative support rather than a single project handover. That support can include optimisation, prompt and policy design, reporting, change management, and roadmap work.</p><p>The key is to remember that you are not paying for AI in the abstract. You are paying for diagnosis, workflow design, implementation, training, and commercial outcome.</p>",
  },
  {
    id: "what-changes-price",
    title: "What actually changes the price",
    html: "<p>Scope is the biggest cost driver. One workflow with one owner and tidy data is much cheaper than six workflows across sales, support, finance, and operations. Complexity rises quickly when multiple tools, approval chains, or compliance constraints are involved.</p><p>Data quality changes price too. If the business already knows where its information lives and the process is relatively stable, implementation is faster. If everything is fragmented and tribal, the consultant spends time cleaning up reality before any automation becomes trustworthy.</p><p>Risk level matters as well. There is a big difference between automating proposal summaries and touching workflows in finance, healthcare, legal, HR, pharmacy, or childcare. More governance means more effort, which means more cost.</p><p>Finally, the commercial model matters. A small reusable workflow using existing tools will cost less than a bespoke system with browser automation, memory, monitoring, and long-term support. Both can be worth it. The trick is not buying bespoke when the problem is still simple.</p>",
  },
  {
    id: "buying-well",
    title: "How to buy consultancy well",
    html: "<p>If you want to buy well, ask blunt questions. What is discovery. What is the audit. What is the pilot. What happens if the pilot succeeds. What extra cost appears if scope expands. If the consultant cannot explain that sequence clearly, the bill will probably become murky too.</p><p>You should also ask which business metric the work will be judged against. Saved hours, response time, conversion, reporting accuracy, or admin load are all reasonable depending on the workflow. If there is no measurable outcome, you are buying optimism rather than a project.</p><p>Another smart question is where human approvals stay. Plenty of businesses create strong value with assisted automation rather than full autonomy, and a grounded consultant will say that plainly rather than pushing the most complex version for drama.</p><p>This is also why platform fit matters. If a simpler stack does the job, great. If the workflow genuinely needs orchestration across files, browser sessions, memory, channels, and approvals, a broader platform like OpenClaw may justify its cost because it replaces more than one disconnected tool.</p>",
  },
  {
    id: "budgeting",
    title: "A sensible budgeting path for SMEs",
    html: "<p>For most SMEs, the safest path is three-stage. First, pay for enough discovery or audit work to understand the value. Second, fund one measurable pilot. Third, scale only after that pilot proves itself. That turns budget into a sequence of evidence-based decisions rather than a leap of faith.</p><p>In practice, that often means a few hundred pounds for initial discovery, around £750 or more for a proper audit, and then a few thousand for the first meaningful implementation. If the workflow saves time every week or improves sales responsiveness, the next spend decision becomes easier.</p><p>Blue Canvas usually recommends buying the smallest thing that can prove real value, then expanding from there. Phil Patterson focuses on practical leverage, not giant transformation theatre. That tends to create better outcomes and fewer regrets.</p><p>Useful companion guides are <a href=\"/guides/ai-audit-for-business\">AI Audit for Business</a>, <a href=\"/guides/openclaw-roi-calculator-guide\">OpenClaw ROI Calculator Guide</a>, and <a href=\"/guides/openclaw-for-small-business-uk\">OpenClaw for Small Business UK</a>.</p>",
  }
];

const faqs = [
  {
    question: "How much does AI consultancy cost in the UK?",
    answer: "For SMEs, audits often start around £750 and implementation work commonly lands from the low thousands up to around £15,000 depending on scope.",
  },
  {
    question: "Why do quotes vary so much?",
    answer: "Because workflow complexity, data quality, integrations, governance, and support level all change the work involved.",
  },
  {
    question: "Should we pay for an audit first?",
    answer: "Usually yes. It helps avoid overspending on the wrong workflow or the wrong tool.",
  },
  {
    question: "Do retainers make sense?",
    answer: "They can when the business is rolling AI out across multiple functions and needs ongoing optimisation.",
  },
  {
    question: "What is a pricing red flag?",
    answer: "A large proposal with unclear scope, vague outcomes, and no explanation of what happens after discovery.",
  },
  {
    question: "Is the cheapest option always best?",
    answer: "No. Cheap work that skips governance or rollout detail often costs more later.",
  }
];

const relatedGuides = [
  {
    href: "/guides/ai-audit-for-business",
    title: "AI Audit for Business",
  },
  {
    href: "/guides/openclaw-roi-calculator-guide",
    title: "OpenClaw ROI Calculator Guide",
  },
  {
    href: "/guides/openclaw-for-small-business-uk",
    title: "OpenClaw for Small Business UK",
  },
  {
    href: "/guides/openclaw-pricing-explained",
    title: "OpenClaw Pricing Explained",
  }
];

export default function AIConsultancyCostsUKPage() {
  return (
    <>
      <section className="hero-gradient relative overflow-hidden min-h-[70vh] flex items-center grain">
        <div className="absolute top-20 right-[10%] w-[400px] h-[400px] bg-orange/5 rounded-full blur-[120px] glow-pulse" />
        <div className="absolute bottom-20 left-[5%] w-[300px] h-[300px] bg-blue/10 rounded-full blur-[100px] glow-pulse" style={{ animationDelay: "3s" }} />
        <div className="max-w-[1140px] mx-auto px-6 relative z-10 py-20">
          <div className="max-w-[780px]">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-white/60 text-sm font-medium">Pricing Guide 2026</span>
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-[3.2rem] font-extrabold text-white mb-6 leading-[1.05] tracking-tight">AI Consultancy Costs UK</h1>
            <p className="text-white/70 text-lg md:text-xl max-w-[680px] mb-10 leading-relaxed">AI consultancy pricing in the UK ranges from lightweight audits to full implementation programmes. The trick is knowing what you actually need before you overbuy.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#guide" className="inline-flex items-center justify-center bg-orange text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-orange-hover transition-all hover:-translate-y-0.5 shadow-glow-orange">Read the guide</a>
              <a href="#assessment" className="inline-flex items-center justify-center bg-white/5 text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-white/10 transition-all border border-white/10">Get a free AI agent assessment</a>
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

      <section id="guide" className="bg-light py-24">
        <div className="max-w-[1140px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-10 items-start">
          <div className="space-y-8">
            {sections.map((section, index) => (
              <article key={section.id} id={section.id} className="bg-white rounded-3xl border border-border-light shadow-card p-8 md:p-10">
                <div className="text-sm font-semibold text-orange mb-3">Section {index + 1}</div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-6">{section.title}</h2>
                <div className="prose prose-lg max-w-none prose-p:text-muted-dark prose-p:leading-relaxed prose-li:text-muted-dark prose-strong:text-dark" dangerouslySetInnerHTML={{ __html: section.html }} />
              </article>
            ))}
          </div>

          <aside className="lg:sticky lg:top-24 space-y-6">
            <div className="bg-navy text-white rounded-3xl p-8 shadow-card">
              <h2 className="font-heading text-2xl font-bold mb-4">What good looks like</h2>
              <div className="space-y-3 text-white/70 leading-relaxed text-sm">
                <p>Start with one workflow, one owner, and one metric.</p>
                <p>Keep human approvals where the downside of mistakes is meaningful.</p>
                <p>Use the pilot to prove value before you scale tooling or spend.</p>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-8 border border-border-light shadow-card">
              <h3 className="font-heading text-2xl font-bold text-dark mb-4">Why businesses contact Blue Canvas</h3>
              <p className="text-muted-dark leading-relaxed mb-4">They want a grounded AI workflow plan, not a stack of hype. Phil Patterson focuses on practical automation, clear guardrails, and return on effort.</p>
              <a href="#assessment" className="inline-flex items-center justify-center bg-orange text-white px-6 py-3 rounded-xl font-semibold hover:bg-orange-hover transition-all">Book an assessment</a>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="max-w-[820px] mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">Practical takeaway</h2>
            <p className="text-muted-dark text-lg leading-relaxed">The right AI rollout is the one that improves a real business process, protects trust, and creates evidence for the next decision. If the workflow is not clear enough to explain simply, it is not ready yet.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-light rounded-2xl p-6 border border-border-light"><div className="font-heading text-xl font-bold text-dark mb-3">Start narrow</div><p className="text-muted-dark leading-relaxed">One painful workflow will teach you more than a broad vague transformation plan.</p></div>
            <div className="bg-light rounded-2xl p-6 border border-border-light"><div className="font-heading text-xl font-bold text-dark mb-3">Protect approvals</div><p className="text-muted-dark leading-relaxed">Keep the human in the loop wherever risk, regulation, or brand trust matters.</p></div>
            <div className="bg-light rounded-2xl p-6 border border-border-light"><div className="font-heading text-xl font-bold text-dark mb-3">Measure honestly</div><p className="text-muted-dark leading-relaxed">Track time saved, response speed, error reduction, or conversion uplift with a real baseline.</p></div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-24">
        <div className="max-w-[900px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">Frequently asked questions</h2>
            <p className="text-muted text-lg">Straight answers to the practical questions businesses ask before they roll out AI workflows.</p>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 border border-border-light shadow-sm">
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
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">Ready to<br /><span className="text-orange">get a free AI agent assessment?</span></h2>
              <p className="text-white/70 text-lg leading-relaxed mb-8">Blue Canvas will review your workflow, show where AI can create leverage, and give you a straight answer on what is worth automating now.</p>
              <div className="space-y-3 text-white/70">
                <div className="flex items-center gap-3"><span className="text-orange">✓</span>Workflow-first recommendation</div>
                <div className="flex items-center gap-3"><span className="text-orange">✓</span>Clear guardrails and approval points</div>
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
                <span className="text-orange text-sm font-semibold mt-2 inline-block">Read guide →</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
