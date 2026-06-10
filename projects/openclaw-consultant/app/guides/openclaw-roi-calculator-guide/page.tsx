import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "OpenClaw ROI Calculator Guide: How to Model the Return",
  description: "A practical guide to calculating OpenClaw ROI, including time saved, conversion gains, avoided hires, error reduction, and what numbers to trust.",
  keywords: [
    "openclaw roi calculator guide",
    "openclaw roi calculator guide: how to model the return",
    "openclaw consultant uk",
    "ai consultant uk",
    "ai automation uk",
    "blue canvas"
  ],
  alternates: { canonical: "https://openclawconsultant.co.uk/guides/openclaw-roi-calculator-guide" },
  openGraph: {
    title: "OpenClaw ROI Calculator Guide: How to Model the Return",
    description: "A practical guide to calculating OpenClaw ROI, including time saved, conversion gains, avoided hires, error reduction, and what numbers to trust.",
    url: "https://openclawconsultant.co.uk/guides/openclaw-roi-calculator-guide",
    type: "article",
  },
};

const stats = [
  {
    value: "5 levers",
    label: "Time, conversion, capacity, error reduction, stack savings",
  },
  {
    value: "1 workflow at a time",
    label: "Makes the maths honest",
  },
  {
    value: "Proof beats hype",
    label: "Real data wins budget",
  }
];

const sections = [
  {
    id: "baseline",
    title: "Start with a baseline, not a fantasy",
    html: "<p>The easiest way to fake AI ROI is to start with heroic assumptions. The best way is to baseline the workflow properly. How often does it happen. How long does it take. Who touches it. What is their loaded hourly cost. What delay, inconsistency, or lost revenue does it create. Without those answers, the model is guesswork.</p><p>For OpenClaw, the strongest ROI cases usually come from repeated operational work rather than edge-case novelty. Lead response, support handling, reporting, document movement, approval routing, and knowledge retrieval all create measurable baselines because they happen frequently and involve real staff time.</p><p>The first pass should be dull on purpose. Track the current workflow for a few weeks. Count the touches. Estimate the cost. Notice where work gets delayed or forgotten. That gives you something real to compare against after the implementation.</p><p>Once you have that baseline, the rest of the ROI conversation becomes much more useful and much less fluffy.</p>",
  },
  {
    id: "levers",
    title: "The five main ROI levers",
    html: "<p><strong>Time saved</strong> is usually the easiest to measure. If OpenClaw removes several hours a week of admin from a manager or sales lead, the recovered capacity has a clear value. <strong>Conversion uplift</strong> matters when faster response and stronger follow-up improve win rates. Even small gains can be meaningful if the average deal value is healthy.</p><p><strong>Avoided hiring</strong> can matter too, but only if the capacity gain is real and sustained. <strong>Error reduction</strong> matters where missed follow-ups, weak handoffs, or inconsistent reporting cost money. <strong>Tool and coordination savings</strong> sometimes appear when a broader operating layer replaces several disconnected steps or low-value subscriptions.</p><p>The trick is to keep the benefits separate. If you double-count the same improvement under three headings, the model becomes nonsense fast.</p><p>That is why the most believable ROI cases stay tight and workflow-specific.</p>",
  },
  {
    id: "mistakes",
    title: "Common ROI modelling mistakes",
    html: "<p>The biggest mistake is double counting. Saved time and avoided hiring often overlap. So can improved follow-up and conversion uplift. Keep each number disciplined.</p><p>The second mistake is ignoring rollout effort. Someone has to scope the workflow, test it, train the team, and monitor the result. That cost belongs in the model. The goal is not to make the project look prettier than it is. The goal is to make a good decision.</p><p>The third mistake is assuming perfect adoption on day one. Many workflows improve over time as the team gets comfortable and the automation is tuned. Your first month may not show the same return as month three.</p><p>Finally, avoid giant blended ROI numbers too early. One workflow at a time is cleaner, more honest, and easier to defend.</p>",
  },
  {
    id: "use-it",
    title: "How to use the model in practice",
    html: "<p>Build the case around one workflow and a 90-day view. Estimate baseline cost, expected improvement, implementation effort, and likely break-even point. Then track what actually happens. If the workflow underperforms, fix it. If it overperforms, use that evidence to justify phase two.</p><p>This is how sensible AI adoption compounds. One proven workflow creates confidence for the next. That is far more useful than trying to justify a large budget with theory alone.</p><p>Blue Canvas often uses this approach because it keeps decisions grounded. Phil Patterson focuses on practical leverage rather than inflated promise, which is especially important for SMEs.</p><p>For related reading, pair this with <a href=\"/guides/openclaw-for-small-business-uk\">OpenClaw for Small Business UK</a>, <a href=\"/guides/ai-consultancy-costs-uk\">AI Consultancy Costs UK</a>, and <a href=\"/guides/ai-readiness-assessment-guide\">AI Readiness Assessment Guide</a>.</p>",
  }
];

const faqs = [
  {
    question: "How do I calculate OpenClaw ROI?",
    answer: "Start with one workflow, baseline current effort and outcomes, then compare post-implementation time, conversion, error, or capacity improvements.",
  },
  {
    question: "What is the easiest benefit to measure?",
    answer: "Time saved is usually the easiest and fastest lever to model.",
  },
  {
    question: "Should I include avoided hiring?",
    answer: "Yes, but only when the capacity gain is real and not already counted elsewhere.",
  },
  {
    question: "How long should I measure for?",
    answer: "A 90-day view works well for many SME workflows.",
  },
  {
    question: "What is the biggest mistake?",
    answer: "Double-counting benefits or ignoring rollout effort.",
  },
  {
    question: "Does ROI have to mean cost cutting?",
    answer: "No. It can also mean faster response, higher conversion, better retention, or more owner capacity.",
  }
];

const relatedGuides = [
  {
    href: "/guides/openclaw-for-small-business-uk",
    title: "OpenClaw for Small Business UK",
  },
  {
    href: "/guides/ai-consultancy-costs-uk",
    title: "AI Consultancy Costs UK",
  },
  {
    href: "/guides/ai-readiness-assessment-guide",
    title: "AI Readiness Assessment Guide",
  },
  {
    href: "/guides/openclaw-vs-zapier-vs-make",
    title: "OpenClaw vs Zapier, Make, and n8n",
  }
];

export default function OpenClawROICalculatorGuidePage() {
  return (
    <>
      <section className="hero-gradient relative overflow-hidden min-h-[70vh] flex items-center grain">
        <div className="absolute top-20 right-[10%] w-[400px] h-[400px] bg-orange/5 rounded-full blur-[120px] glow-pulse" />
        <div className="absolute bottom-20 left-[5%] w-[300px] h-[300px] bg-blue/10 rounded-full blur-[100px] glow-pulse" style={{ animationDelay: "3s" }} />
        <div className="max-w-[1140px] mx-auto px-6 relative z-10 py-20">
          <div className="max-w-[780px]">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-white/60 text-sm font-medium">ROI Guide 2026</span>
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-[3.2rem] font-extrabold text-white mb-6 leading-[1.05] tracking-tight">OpenClaw ROI Calculator Guide</h1>
            <p className="text-white/70 text-lg md:text-xl max-w-[680px] mb-10 leading-relaxed">The commercial case for OpenClaw is not about abstract AI excitement. It is about whether specific workflows save time, protect revenue, or create more capacity than they cost.</p>
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
