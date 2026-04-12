import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "AI Readiness Assessment Guide for UK Businesses",
  description: "How to run a practical AI readiness assessment for a UK business, what to measure, what good looks like, and when to bring in outside help.",
  keywords: [
    "ai readiness assessment guide",
    "ai readiness assessment guide for uk businesses",
    "openclaw consultant uk",
    "ai consultant uk",
    "ai automation uk",
    "blue canvas"
  ],
  alternates: { canonical: "https://openclawconsultant.co.uk/guides/ai-readiness-assessment-guide" },
  openGraph: {
    title: "AI Readiness Assessment Guide for UK Businesses",
    description: "How to run a practical AI readiness assessment for a UK business, what to measure, what good looks like, and when to bring in outside help.",
    url: "https://openclawconsultant.co.uk/guides/ai-readiness-assessment-guide",
    type: "article",
  },
};

const stats = [
  {
    value: "4 pillars",
    label: "Process, data, people, governance",
  },
  {
    value: "2-6 weeks",
    label: "Typical assessment window",
  },
  {
    value: "Low drama",
    label: "Spot blockers before rollout",
  }
];

const sections = [
  {
    id: "why-readiness",
    title: "Why readiness matters",
    html: "<p>Most AI projects fail long before the model becomes the issue. They fail because the process is inconsistent, the data is scattered, the team does not know who owns the workflow, or leadership is trying to buy software before it understands the job. A readiness assessment exists to stop that waste before it starts.</p><p>For a UK business, readiness is not about whether somebody tried ChatGPT last week. It is about whether the business can clearly identify a workflow, the data behind it, the value at stake, and the point where a human still needs to sign off. If those basics are missing, the safest recommendation may be to fix the process first.</p><p>The smartest firms use readiness work to answer four blunt questions. Where is time being lost. What data already exists. Which workflow is worth improving first. And where must human approvals remain because the downside is too high.</p><p>That is what turns readiness from a fluffy workshop into a useful commercial tool.</p>",
  },
  {
    id: "framework",
    title: "A practical four-part framework",
    html: "<p>The most useful readiness reviews cover process, data, people, and governance. <strong>Process</strong> asks whether the job is defined clearly enough to automate or assist. <strong>Data</strong> asks whether the business has trustworthy inputs and knows where they live. <strong>People</strong> asks who owns the workflow, who approves outputs, and how change will be absorbed. <strong>Governance</strong> asks what the system is allowed to do and when it must escalate.</p><p>If even one of those pillars is weak, it changes the rollout recommendation. A workflow may still be worth improving, but perhaps with a smaller assisted pilot rather than a more autonomous design.</p><p>This is where a lot of businesses save themselves money. The goal is not to prove that everything is ready. The goal is to see what is actually ready enough to test.</p><p>That kind of honesty is valuable because it keeps the first step sensible.</p>",
  },
  {
    id: "outputs",
    title: "What a good assessment should produce",
    html: "<p>A useful readiness assessment ends with decisions, not just observations. You should get a prioritised list of candidate workflows, a view of blockers, a risk summary, and a recommendation on what to pilot first. If the outcome is a glossy deck with no obvious first move, something has gone wrong.</p><p>The best output also distinguishes fast wins from deeper projects. A company may be ready to automate inbound triage next month but nowhere near ready for autonomous quoting or customer-facing decision-making. That distinction matters commercially.</p><p>Good assessors also flag what not to do yet. Sometimes the most valuable recommendation is to fix the CRM, define approvals, or clean up process ownership before buying a bigger stack.</p><p>That is not pessimism. It is how good implementations are protected from bad starts.</p>",
  },
  {
    id: "use-the-result",
    title: "How to use the result",
    html: "<p>Once the assessment is complete, the next step is usually a tightly scoped pilot with one owner and one metric. Pick the workflow with clear pain, enough volume, and manageable risk. Then prove whether the change actually saves time, improves consistency, or protects revenue.</p><p>For many UK SMEs, this is where a grounded operator like Blue Canvas adds value. Phil Patterson focuses on workflow fit, governance, and ROI rather than tool theatre. That tends to produce much better first projects.</p><p>If you want to connect readiness work to the next stage, read <a href=\"/guides/ai-audit-for-business\">AI Audit for Business</a>, <a href=\"/guides/openclaw-roi-calculator-guide\">OpenClaw ROI Calculator Guide</a>, and <a href=\"/guides/openclaw-for-small-business-uk\">OpenClaw for Small Business UK</a>.</p><p>The whole point is to move from curiosity to a safe commercial sequence.</p>",
  }
];

const faqs = [
  {
    question: "What is an AI readiness assessment?",
    answer: "It is a structured review of your workflows, data, team capability, and governance before implementation.",
  },
  {
    question: "How long does it take?",
    answer: "For many SMEs, anywhere from two to six weeks depending on complexity.",
  },
  {
    question: "Do small businesses need one?",
    answer: "If they are spending meaningful money or touching customer-facing workflows, yes, it is usually worth it.",
  },
  {
    question: "What should the output include?",
    answer: "Prioritised use cases, blockers, risk notes, data requirements, and a phased recommendation.",
  },
  {
    question: "Is readiness the same as an AI audit?",
    answer: "They overlap, but readiness leans more heavily on whether the business is prepared to move at all.",
  },
  {
    question: "What is the biggest red flag?",
    answer: "Buying tools before ownership, data quality, and approval rules are clear.",
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
    href: "/guides/ai-agent-consulting-uk",
    title: "AI Agent Consulting UK",
  }
];

export default function AIReadinessAssessmentGuidePage() {
  return (
    <>
      <section className="hero-gradient relative overflow-hidden min-h-[70vh] flex items-center grain">
        <div className="absolute top-20 right-[10%] w-[400px] h-[400px] bg-orange/5 rounded-full blur-[120px] glow-pulse" />
        <div className="absolute bottom-20 left-[5%] w-[300px] h-[300px] bg-blue/10 rounded-full blur-[100px] glow-pulse" style={{ animationDelay: "3s" }} />
        <div className="max-w-[1140px] mx-auto px-6 relative z-10 py-20">
          <div className="max-w-[780px]">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-white/60 text-sm font-medium">AI Strategy Guide 2026</span>
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-[3.2rem] font-extrabold text-white mb-6 leading-[1.05] tracking-tight">AI Readiness Assessment Guide</h1>
            <p className="text-white/70 text-lg md:text-xl max-w-[680px] mb-10 leading-relaxed">A proper readiness assessment stops you buying tools before your business is ready. Here is the practical framework UK firms should use before they spend serious money on AI.</p>
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
