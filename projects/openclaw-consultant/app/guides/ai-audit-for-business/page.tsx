import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "AI Audit for Business: What UK Companies Should Actually Review",
  description: "A practical guide to AI audits for UK businesses, covering workflows, data, risk, procurement, and what should happen after the audit finishes.",
  keywords: [
    "ai audit for business",
    "ai audit for business: what uk companies should actually review",
    "openclaw consultant uk",
    "ai consultant uk",
    "ai automation uk",
    "blue canvas"
  ],
  alternates: { canonical: "https://openclawconsultant.co.uk/guides/ai-audit-for-business" },
  openGraph: {
    title: "AI Audit for Business: What UK Companies Should Actually Review",
    description: "A practical guide to AI audits for UK businesses, covering workflows, data, risk, procurement, and what should happen after the audit finishes.",
    url: "https://openclawconsultant.co.uk/guides/ai-audit-for-business",
    type: "article",
  },
};

const stats = [
  {
    value: "3 outcomes",
    label: "Adopt, delay, or avoid",
  },
  {
    value: "1 priority list",
    label: "No random tool shopping",
  },
  {
    value: "Clear ROI",
    label: "Tie each idea to money or time",
  }
];

const sections = [
  {
    id: "what-it-is",
    title: "What an AI audit should and should not be",
    html: "<p>A proper AI audit is not a shopping tour of trendy software. It is a business review with a technical lens. The aim is to understand where manual effort, weak handoffs, slow response, poor reporting, and inconsistent decisions are costing the business money, then judge whether AI is the right fix.</p><p>That distinction matters because not every business problem deserves an AI answer. Some are process problems. Some are training problems. Some are systems problems. A credible audit should say that plainly instead of forcing AI into every corner of the operation.</p><p>For UK businesses, a useful audit looks at customer-facing workflows, internal admin, data quality, compliance boundaries, and rollout practicality. It should separate easy wins from deeper operational change.</p><p>The best audits reduce uncertainty. They tell you where AI fits, where it does not, and what needs sorting first.</p>",
  },
  {
    id: "what-to-review",
    title: "What should be reviewed during the audit",
    html: "<p>The audit should begin with workflow mapping. Which tasks happen every day. Which ones slow the team down. Which ones rely on manual copy-paste work. Which ones lead to lost revenue or poor response when nobody gets back quickly enough. Common candidates include inbox triage, lead handling, reporting, onboarding admin, proposal drafting, document movement, and internal knowledge support.</p><p>Then comes systems and data. Where does good information live. What is duplicated. What is sensitive. Which tools already have decent APIs or export options. If the underlying data is weak, the recommendation changes immediately.</p><p>The audit should also judge risk. What happens if the output is wrong. Is the consequence minor, embarrassing, expensive, or regulated. That determines where a human must remain in the loop.</p><p>Finally, it should assess capacity. Who owns the rollout. Who approves outputs. Who trains staff. Without named ownership, the implementation usually drifts.</p>",
  },
  {
    id: "what-you-find",
    title: "What businesses usually discover",
    html: "<p>Most firms discover two things at once. There are more viable AI use cases than they expected, and they are not ready to tackle all of them at the same time. That is useful, not disappointing.</p><p>A good audit normally surfaces one or two high-value wins, a few medium-term opportunities, and a group of ideas that should wait until systems or approvals are cleaner. The fast wins often sit in communication, document handling, CRM support, and internal reporting. The slower ones involve complex approvals, pricing logic, or sensitive customer-facing autonomy.</p><p>Another common discovery is that the business does not need a giant platform first. It needs one workflow improved properly. That is how grounded AI adoption usually starts.</p><p>The audit should also tell you what not to automate yet. That honesty is part of the value.</p>",
  },
  {
    id: "after-the-audit",
    title: "What should happen after the audit",
    html: "<p>Once the audit is done, the next step should be a ranked action plan, not a vague strategy deck. One workflow, one owner, one success metric, one pilot. That is the pattern that creates evidence and protects budget.</p><p>For many UK SMEs, the smartest move is a 30 to 60 day pilot on a process that is frequent, measurable, and not catastrophically risky. If it performs, scale it. If it does not, learn why cheaply and fix the blocker.</p><p>This is also the moment where platform choice becomes clearer. Some firms only need a small automation stack. Others need a broader operating layer with memory, channels, browser actions, and approvals. That is where something like OpenClaw becomes relevant.</p><p>Useful companion guides are <a href=\"/guides/ai-readiness-assessment-guide\">AI Readiness Assessment Guide</a>, <a href=\"/guides/ai-consultancy-costs-uk\">AI Consultancy Costs UK</a>, and <a href=\"/guides/openclaw-vs-zapier-make-n8n\">OpenClaw vs Zapier, Make, and n8n</a>.</p>",
  }
];

const faqs = [
  {
    question: "What does an AI audit include?",
    answer: "Usually workflow review, data review, risk mapping, tooling assessment, and a prioritised action plan.",
  },
  {
    question: "How is an AI audit different from buying software?",
    answer: "The audit happens before procurement so you know what problem you are actually solving.",
  },
  {
    question: "Do we need technical staff to do it?",
    answer: "No, but you do need access to the people who own the workflows and systems being reviewed.",
  },
  {
    question: "What is the main output?",
    answer: "A ranked list of AI opportunities, blockers, risks, and next steps.",
  },
  {
    question: "Can an audit tell us not to use AI in some areas?",
    answer: "It should. That is part of good advice.",
  },
  {
    question: "What happens after the audit?",
    answer: "Usually a pilot or phased implementation on one or two high-value workflows.",
  }
];

const relatedGuides = [
  {
    href: "/guides/ai-readiness-assessment-guide",
    title: "AI Readiness Assessment Guide",
  },
  {
    href: "/guides/ai-consultancy-costs-uk",
    title: "AI Consultancy Costs UK",
  },
  {
    href: "/guides/openclaw-vs-zapier-make-n8n",
    title: "OpenClaw vs Zapier, Make, and n8n",
  },
  {
    href: "/guides/openclaw-pricing-explained",
    title: "OpenClaw Pricing Explained",
  }
];

export default function AIAuditForBusinessPage() {
  return (
    <>
      <section className="hero-gradient relative overflow-hidden min-h-[70vh] flex items-center grain">
        <div className="absolute top-20 right-[10%] w-[400px] h-[400px] bg-orange/5 rounded-full blur-[120px] glow-pulse" />
        <div className="absolute bottom-20 left-[5%] w-[300px] h-[300px] bg-blue/10 rounded-full blur-[100px] glow-pulse" style={{ animationDelay: "3s" }} />
        <div className="max-w-[1140px] mx-auto px-6 relative z-10 py-20">
          <div className="max-w-[780px]">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-white/60 text-sm font-medium">Commercial AI Guide 2026</span>
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-[3.2rem] font-extrabold text-white mb-6 leading-[1.05] tracking-tight">AI Audit for Business</h1>
            <p className="text-white/70 text-lg md:text-xl max-w-[680px] mb-10 leading-relaxed">An AI audit is the sensible first move if you want to understand where automation, copilots, or AI agents could create real commercial value without introducing a mess.</p>
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
