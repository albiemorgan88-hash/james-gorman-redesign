import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "AI for Event Planners UK: Reduce Admin and Speed Up Delivery",
  description: "How UK event planners can use AI for proposals, supplier coordination, timelines, client communication, and operational workflow support.",
  keywords: [
    "ai for event planners uk",
    "ai for event planners uk: reduce admin and speed up delivery",
    "openclaw consultant uk",
    "ai consultant uk",
    "ai automation uk",
    "blue canvas"
  ],
  alternates: { canonical: "https://openclawconsultant.co.uk/guides/ai-for-event-planners-uk" },
  openGraph: {
    title: "AI for Event Planners UK: Reduce Admin and Speed Up Delivery",
    description: "How UK event planners can use AI for proposals, supplier coordination, timelines, client communication, and operational workflow support.",
    url: "https://openclawconsultant.co.uk/guides/ai-for-event-planners-uk",
    type: "article",
  },
};

const stats = [
  {
    value: "Proposal heavy",
    label: "AI drafting helps",
  },
  {
    value: "Supplier chaos",
    label: "Summaries and reminders matter",
  },
  {
    value: "Client trust",
    label: "Still built by humans",
  }
];

const sections = [
  {
    id: "why-it-matters",
    title: "Why this matters now",
    html: "<p>Event planners, agencies, and event operations teams are dealing with proposal drafting, supplier chasing, timeline admin, and internal handover sprawl at the same time. That combination creates drag in the exact places where service quality, response speed, and margin are won or lost. AI becomes useful here when it removes repetitive coordination work without pretending to replace the experienced humans who still need to make the important calls.</p><p>In practice, the strongest opportunity is operational. Teams spend too much time copying information between tools, chasing details, drafting near-identical messages, summarising what just happened, and trying to keep momentum across busy days. If that drag keeps repeating, it becomes a direct cost. That is why a sensible AI workflow can create value quickly, especially in smaller organisations where every wasted hour lands on the same few people.</p><p>The point is not novelty. It is that faster response, stronger coordination, and more time for client-facing creative work. Businesses in this category often feel the pressure in the inbox first, then in follow-up discipline, then in the way important details get trapped in people heads instead of the workflow. A good implementation deals with those problems in the order they hurt most.</p><p>That is also why workflow design matters more than tool hype. If the business cannot explain the job clearly, the rollout will be shaky. If it can, the gains are usually much easier to find.</p>",
  },
  {
    id: "high-value-workflows",
    title: "High-value workflows to target first",
    html: "<p>The best use cases are the ones that happen often, annoy the team every week, and do not require reckless autonomy. For this sector, that usually means the repetitive coordination work around communication, handover, and task movement rather than the final judgement call.</p><ul><li>summarising client discovery calls into actions and proposal structure</li><li>tracking supplier responses and drafting chase emails</li><li>organising timelines, running orders, and handover notes more consistently</li><li>preparing post-event follow-up, recap emails, and next-step drafts</li></ul><p>What these examples have in common is frequency. They happen often enough to create a meaningful before-and-after comparison, and they usually carry low enough risk to test without turning the business upside down. That makes them ideal pilot candidates.</p><p>Another benefit is adoption. Staff are more likely to trust a system that obviously saves them admin than one that arrives claiming to replace expertise. The quickest path to buy-in is visible relief from repetitive work.</p>",
  },
  {
    id: "guardrails",
    title: "Guardrails and rollout mistakes to avoid",
    html: "<p>The biggest implementation mistake is letting enthusiasm outrun control. AI projects go sideways when businesses skip approval rules, ignore data boundaries, or try to automate decisions that still need human judgement. In this sector, the safe pattern is support first, autonomy later if ever.</p><ul><li>creative judgement, budget choices, and relationship nuance should stay with the planner</li><li>automation should support speed and structure, not make communication bland</li><li>event-day decisions should remain firmly human-led</li></ul><p>It is also worth being blunt about change management. If the people living inside the workflow do not trust the setup, they will route around it or quietly stop using it. Show the boundaries clearly, explain where review remains, and keep the first version boring enough to feel safe.</p><p>A grounded rollout always beats a dramatic one. That is how you protect trust and still get results.</p>",
  },
  {
    id: "starting-point",
    title: "Recommended starting point",
    html: "<p>Start with proposal drafting or supplier follow-up, then measure whether turnaround time and admin load improve in a way the team can feel.</p><p>Track the boring metrics first: hours saved, response speed, missed follow-ups reduced, internal consistency improved, or fewer interruptions for senior staff. If those numbers move, you have a real case for phase two. If they do not, fix the workflow before adding more tooling.</p><p>For most firms, the smartest pattern is still one workflow, one owner, one success measure. That is enough to tell whether the idea deserves to expand.</p><p>Useful related reading on this site includes <a href=\"/guides/openclaw-for-small-business-uk\">OpenClaw for Small Business UK</a>, <a href=\"/guides/openclaw-roi-calculator-guide\">OpenClaw ROI Calculator Guide</a>, and <a href=\"/guides/ai-audit-for-business\">AI Audit for Business</a>. Blue Canvas can help scope the sequence if you want a grounded path rather than generic AI theatre.</p>",
  }
];

const faqs = [
  {
    question: "What is the best first AI use case for event planners, agencies, and event operations teams?",
    answer: "Usually the most repetitive communication or admin workflow with clear volume and low risk.",
  },
  {
    question: "Should this be fully automated?",
    answer: "Normally no. The best early results come from assisted, approval-aware workflows rather than blind autonomy.",
  },
  {
    question: "What should we measure?",
    answer: "Saved hours, response speed, fewer dropped follow-ups, stronger internal consistency, and lower admin load are good starting metrics.",
  },
  {
    question: "Do we need a technical team?",
    answer: "Not necessarily, but you do need a clear workflow owner and sensible governance.",
  },
  {
    question: "How fast can value show up?",
    answer: "Often within weeks if the workflow is repetitive enough and the baseline pain is real.",
  },
  {
    question: "What is the main mistake?",
    answer: "Trying to automate too much too early instead of proving value on one focused process first.",
  }
];

const relatedGuides = [
  {
    href: "/guides/openclaw-for-small-business-uk",
    title: "OpenClaw for Small Business UK",
  },
  {
    href: "/guides/openclaw-roi-calculator-guide",
    title: "OpenClaw ROI Calculator Guide",
  },
  {
    href: "/guides/openclaw-audit-service",
    title: "AI Audit for Business",
  },
  {
    href: "/guides/ai-agents-for-customer-support",
    title: "AI Customer Service Automation UK",
  }
];

export default function AIForEventPlannersUKPage() {
  return (
    <>
      <section className="hero-gradient relative overflow-hidden min-h-[70vh] flex items-center grain">
        <div className="absolute top-20 right-[10%] w-[400px] h-[400px] bg-orange/5 rounded-full blur-[120px] glow-pulse" />
        <div className="absolute bottom-20 left-[5%] w-[300px] h-[300px] bg-blue/10 rounded-full blur-[100px] glow-pulse" style={{ animationDelay: "3s" }} />
        <div className="max-w-[1140px] mx-auto px-6 relative z-10 py-20">
          <div className="max-w-[780px]">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-white/60 text-sm font-medium">Industry Guide 2026</span>
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-[3.2rem] font-extrabold text-white mb-6 leading-[1.05] tracking-tight">AI for Event Planners UK</h1>
            <p className="text-white/70 text-lg md:text-xl max-w-[680px] mb-10 leading-relaxed">Event planning is deadline-heavy, admin-heavy, and detail-heavy. AI works best here when it removes coordination drag without getting in the way of the client relationship.</p>
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
