import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "AI Grants UK 2026: Funding Options for Businesses",
  description: "A practical guide to AI grants in the UK for 2026, including where to look, what typically gets funded, and how to improve your chances of approval.",
  keywords: [
    "ai grants uk 2026",
    "ai grants uk 2026: funding options for businesses",
    "openclaw consultant uk",
    "ai consultant uk",
    "ai automation uk",
    "blue canvas"
  ],
  alternates: { canonical: "https://openclawconsultant.co.uk/guides/ai-grants-uk-2026" },
  openGraph: {
    title: "AI Grants UK 2026: Funding Options for Businesses",
    description: "A practical guide to AI grants in the UK for 2026, including where to look, what typically gets funded, and how to improve your chances of approval.",
    url: "https://openclawconsultant.co.uk/guides/ai-grants-uk-2026",
    type: "article",
  },
};

const stats = [
  {
    value: "Multiple routes",
    label: "Innovation, productivity, local growth, skills",
  },
  {
    value: "Better fit wins",
    label: "Not every project suits grant funding",
  },
  {
    value: "Deadlines change",
    label: "Always verify live criteria",
  }
];

const sections = [
  {
    id: "where-look",
    title: "Where UK businesses should look first",
    html: "<p>If you are searching for AI grants in the UK in 2026, the first thing to understand is that the market is fragmented. There is rarely one neat national scheme labelled as AI money for businesses. Support tends to appear through innovation programmes, productivity initiatives, regional growth routes, university partnerships, and skills funding instead.</p><p>That means a practical search usually starts with Innovate UK competitions, regional growth hubs, local authority-backed programmes, Made Smarter style support where available, and university or partnership routes for specific sectors. Some industries also have trade-body or regional innovation support that is easy to miss if you only search nationally.</p><p>The important bit is fit. A project aimed at operational productivity needs a different funding story from a project aimed at technical innovation. Trying to force the wrong story into the wrong fund wastes time and lowers your odds immediately.</p><p>The clearer your commercial objective is, the easier it becomes to see which route is worth pursuing.</p>",
  },
  {
    id: "what-gets-funded",
    title: "What tends to get funded",
    html: "<p>Funders usually respond better to structured business outcomes than vague enthusiasm about AI. Projects that improve productivity, strengthen competitiveness, support training, reduce waste, or create a clear innovation case tend to read far better than a generic request to try some AI tools.</p><p>That can include workflow automation, knowledge tools for staff, forecasting, quality support, customer service improvements, or sector-specific pilots in areas like manufacturing, logistics, healthcare, or professional services. Training-led programmes can also be relevant when the goal is capability building rather than pure research and development.</p><p>What usually struggles is poor scope. If the project has no defined workflow, no realistic budget logic, and no named delivery owner, it reads like a shopping list. Funders want to know what changes in the business if the project succeeds.</p><p>This is one reason a readiness review or audit can be useful before the application. It gives you sharper language and a better case.</p>",
  },
  {
    id: "how-apply-better",
    title: "How to improve your odds",
    html: "<p>The best applications are direct. They explain the current problem, the baseline, the intervention, the timeline, the team, the risk, and the expected result. They do not drown assessors in slogans. If the scheme is innovation-led, show novelty and market value. If it is productivity-led, show time saved, capacity created, or costs reduced. If it is skills-led, show the training gap and how capability changes.</p><p>It also helps to demonstrate groundwork. Businesses that understand their own workflow, data, and delivery plan look more credible than applicants who seem to think the grant will solve the thinking for them.</p><p>External support can help if it sharpens the project commercially rather than simply dressing up a weak idea. The best help turns a vague ambition into a fundable plan.</p><p>That is why matching the application story to the actual scheme matters so much. One generic narrative will not fit every route.</p>",
  },
  {
    id: "before-you-apply",
    title: "What to do before you apply",
    html: "<p>Before filling any form, define one or two clear workflows or opportunities. Estimate the business case. Decide who owns delivery. Clarify the systems involved and the likely blockers. If you cannot answer those basics, the application is probably premature.</p><p>You should also verify live scheme details because 2026 deadlines, eligibility, regions, and match-funding rules will change. Treat any guide, including this one, as a map rather than a final authority.</p><p>For many firms, the smartest route is to combine a readiness review with the funding search. That improves project definition and increases the chance that successful funding leads to a useful implementation instead of a vague experiment.</p><p>Useful related reading includes <a href=\"/guides/ai-readiness-assessment-guide\">AI Readiness Assessment Guide</a>, <a href=\"/guides/ai-audit-for-business\">AI Audit for Business</a>, and <a href=\"/guides/openclaw-for-small-business-uk\">OpenClaw for Small Business UK</a>.</p>",
  }
];

const faqs = [
  {
    question: "Are there AI grants in the UK in 2026?",
    answer: "Yes, but they are spread across innovation, productivity, regional, and skills programmes rather than one single fund.",
  },
  {
    question: "What kinds of projects get funded?",
    answer: "Projects with clear business outcomes, realistic delivery plans, and a strong match to the scheme.",
  },
  {
    question: "Do SMEs have a chance?",
    answer: "Yes. Many schemes are designed with SME participation in mind.",
  },
  {
    question: "Should we scope the project first?",
    answer: "Absolutely. Clear scope usually improves your odds and avoids wasted effort.",
  },
  {
    question: "Do grant rules change often?",
    answer: "Yes. Deadlines, eligibility, match funding, and geography can all change, so verify live criteria.",
  },
  {
    question: "Can a consultant help?",
    answer: "Yes, if they help define the project commercially rather than just adding buzzwords.",
  }
];

const relatedGuides = [
  {
    href: "/guides/ai-readiness-assessment-guide",
    title: "AI Readiness Assessment Guide",
  },
  {
    href: "/guides/ai-audit-for-business",
    title: "AI Audit for Business",
  },
  {
    href: "/guides/openclaw-for-small-business-uk",
    title: "OpenClaw for Small Business UK",
  },
  {
    href: "/guides/ai-agent-consulting-uk",
    title: "AI Agent Consulting UK",
  }
];

export default function AIGrantsUK2026Page() {
  return (
    <>
      <section className="hero-gradient relative overflow-hidden min-h-[70vh] flex items-center grain">
        <div className="absolute top-20 right-[10%] w-[400px] h-[400px] bg-orange/5 rounded-full blur-[120px] glow-pulse" />
        <div className="absolute bottom-20 left-[5%] w-[300px] h-[300px] bg-blue/10 rounded-full blur-[100px] glow-pulse" style={{ animationDelay: "3s" }} />
        <div className="max-w-[1140px] mx-auto px-6 relative z-10 py-20">
          <div className="max-w-[780px]">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-white/60 text-sm font-medium">Funding Guide 2026</span>
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-[3.2rem] font-extrabold text-white mb-6 leading-[1.05] tracking-tight">AI Grants UK 2026</h1>
            <p className="text-white/70 text-lg md:text-xl max-w-[680px] mb-10 leading-relaxed">There is no single magic AI grant pot in the UK, but there are real funding routes if you know where to look and match the project to the scheme properly.</p>
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
