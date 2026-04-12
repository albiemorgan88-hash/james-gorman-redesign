import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "OpenClaw vs Zapier vs Make vs n8n: Which Fits Best?",
  description: "A practical comparison of OpenClaw, Zapier, Make, and n8n for UK businesses choosing between simple automation and broader AI agent workflows.",
  keywords: [
    "openclaw vs zapier make n8n",
    "openclaw vs zapier vs make vs n8n: which fits best?",
    "openclaw consultant uk",
    "ai consultant uk",
    "ai automation uk",
    "blue canvas"
  ],
  alternates: { canonical: "https://openclawconsultant.co.uk/guides/openclaw-vs-zapier-make-n8n" },
  openGraph: {
    title: "OpenClaw vs Zapier vs Make vs n8n: Which Fits Best?",
    description: "A practical comparison of OpenClaw, Zapier, Make, and n8n for UK businesses choosing between simple automation and broader AI agent workflows.",
    url: "https://openclawconsultant.co.uk/guides/openclaw-vs-zapier-make-n8n",
    type: "article",
  },
};

const stats = [
  {
    value: "Zapier",
    label: "Fastest for simple app-to-app flows",
  },
  {
    value: "n8n",
    label: "Great for technical control",
  },
  {
    value: "OpenClaw",
    label: "Best when workflow needs memory, tools, channels, and approvals",
  }
];

const sections = [
  {
    id: "different-jobs",
    title: "These platforms solve different jobs",
    html: "<p>Zapier, Make, and n8n are all strong automation tools, but they are mostly built around moving data and triggering actions. OpenClaw can do that sort of work too, but its natural strength is broader. It handles workflows that need memory, messaging, browser actions, files, custom skills, and clear human approvals.</p><p>That means the right choice depends less on feature checklists and more on workflow shape. If the job is simple and app-to-app, a classic automation tool is often enough. If the job crosses systems, needs context, and behaves more like an agent than a trigger chain, OpenClaw starts to make more sense.</p><p>Plenty of buying mistakes happen because businesses compare them as if they are all trying to be the same thing. They are not. The overlap is real, but the operating model is different.</p><p>Ask whether you are connecting tools or designing a semi-autonomous workflow with memory, approvals, and richer orchestration. That question clears up a lot.</p>",
  },
  {
    id: "where-each-shines",
    title: "Where each option tends to shine",
    html: "<p><strong>Zapier</strong> is usually the easiest way to ship a simple automation fast. Non-technical teams like it because the connector library is huge and the setup is approachable. The trade-off comes later when the flows get expensive or too twisty.</p><p><strong>Make</strong> gives more visual control and branching, which is useful when you want richer logic without going fully technical. It can get sprawling if you push it too far, but it is a strong middle ground.</p><p><strong>n8n</strong> suits technical teams that want more control, more customisation, and self-hosting flexibility. It rewards people who do not mind a steeper operational setup.</p><p><strong>OpenClaw</strong> is different again. It shines when the workflow needs to read context, act across tools, keep memory, interact through channels, and escalate to a human at the right moment. That is a broader operating layer than a classic automation builder.</p>",
  },
  {
    id: "when-openclaw-wins",
    title: "When OpenClaw is the better fit",
    html: "<p>OpenClaw tends to win when the workflow cannot be reduced to a neat trigger and a few API steps. Lead handling that spans forms, inboxes, browser research, internal notes, and human approvals is a good example. So is support work that needs memory across tickets, documents, and channels. So is an operations task that needs browser actions, messaging, and custom skills in one loop.</p><p>In those cases, traditional automation tools often end up surrounded by manual patches or extra services. You can still make them work, but the stack gets awkward fast. OpenClaw is designed more naturally for that style of orchestration.</p><p>It is also attractive when the business wants something shaped around its own way of working rather than a fixed integration diagram. That matters for consultants, service firms, and operators with messy real-world workflows.</p><p>The point is not that broader is always better. It is that some workflows genuinely need a broader operating model.</p>",
  },
  {
    id: "buying-advice",
    title: "How to choose without overcomplicating it",
    html: "<p>If you want a quick form-to-CRM-to-email workflow, start with Zapier or Make. If your team is technical and wants more control or self-hosting, n8n may be the better traditional automation option. If the job needs context, memory, browser work, messaging, and approvals, look hard at OpenClaw.</p><p>You also do not need to be religious about one stack. Many businesses use a classic automation tool for lightweight plumbing and a broader agent layer for higher-value workflows. That can be a very sensible split.</p><p>The main thing is to buy for workflow fit, not brand familiarity. Simpler is better when it works. Broader is better when the problem actually needs it.</p><p>For next steps, compare this with <a href=\"/guides/openclaw-for-small-business-uk\">OpenClaw for Small Business UK</a>, <a href=\"/guides/openclaw-roi-calculator-guide\">OpenClaw ROI Calculator Guide</a>, and <a href=\"/guides/openclaw-vs-devin\">OpenClaw vs Devin</a>.</p>",
  }
];

const faqs = [
  {
    question: "Is OpenClaw a replacement for Zapier?",
    answer: "Sometimes, but not always. Simple app-to-app automations may still suit Zapier or Make perfectly well.",
  },
  {
    question: "Is n8n more powerful than OpenClaw?",
    answer: "For some technical automation jobs, yes. For broader agent workflows with memory, messaging, and browser actions, OpenClaw is usually the better fit.",
  },
  {
    question: "What is easiest for non-technical teams?",
    answer: "Usually Zapier, then Make for slightly richer branching.",
  },
  {
    question: "Can these tools be combined?",
    answer: "Yes. Many businesses combine a lighter automation layer with a broader agent layer.",
  },
  {
    question: "What is the biggest buying mistake?",
    answer: "Choosing by familiarity rather than by the actual shape of the workflow.",
  },
  {
    question: "Who should look hardest at OpenClaw?",
    answer: "Businesses running cross-system operational workflows that need context, escalation, and flexible orchestration.",
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
    href: "/guides/openclaw-vs-devin",
    title: "OpenClaw vs Devin",
  },
  {
    href: "/guides/ai-agent-vs-rpa",
    title: "AI Agent vs RPA",
  }
];

export default function OpenClawVsZapierMakeN8nPage() {
  return (
    <>
      <section className="hero-gradient relative overflow-hidden min-h-[70vh] flex items-center grain">
        <div className="absolute top-20 right-[10%] w-[400px] h-[400px] bg-orange/5 rounded-full blur-[120px] glow-pulse" />
        <div className="absolute bottom-20 left-[5%] w-[300px] h-[300px] bg-blue/10 rounded-full blur-[100px] glow-pulse" style={{ animationDelay: "3s" }} />
        <div className="max-w-[1140px] mx-auto px-6 relative z-10 py-20">
          <div className="max-w-[780px]">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-white/60 text-sm font-medium">Platform Comparison 2026</span>
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-[3.2rem] font-extrabold text-white mb-6 leading-[1.05] tracking-tight">OpenClaw vs Zapier vs Make vs n8n</h1>
            <p className="text-white/70 text-lg md:text-xl max-w-[680px] mb-10 leading-relaxed">These tools overlap, but they are not interchangeable. The right choice depends on whether you need simple automation, developer flexibility, or a broader AI agent operating layer.</p>
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
