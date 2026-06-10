import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "OpenClaw for Small Business UK: Where It Actually Helps",
  description: "How UK small businesses can use OpenClaw for lead handling, support, reporting, admin automation, and practical AI agent workflows without overcomplicating things.",
  keywords: [
    "openclaw for small business uk",
    "openclaw for small business uk: where it actually helps",
    "openclaw consultant uk",
    "ai consultant uk",
    "ai automation uk",
    "blue canvas"
  ],
  alternates: { canonical: "https://openclawconsultant.co.uk/guides/openclaw-for-small-business-uk" },
  openGraph: {
    title: "OpenClaw for Small Business UK: Where It Actually Helps",
    description: "How UK small businesses can use OpenClaw for lead handling, support, reporting, admin automation, and practical AI agent workflows without overcomplicating things.",
    url: "https://openclawconsultant.co.uk/guides/openclaw-for-small-business-uk",
    type: "article",
  },
};

const stats = [
  {
    value: "1 workflow first",
    label: "Start small and prove value",
  },
  {
    value: "Lower overhead",
    label: "Compared with scattered tools and manual chasing",
  },
  {
    value: "Human approvals",
    label: "Keep risk under control",
  }
];

const sections = [
  {
    id: "why-smes-care",
    title: "Why OpenClaw makes sense for SMEs",
    html: "<p>Small businesses feel manual workflow pain faster than larger firms because every wasted hour hits a smaller team. The owner is often still close to sales, support, operations, and delivery, which means repetitive admin directly steals time from revenue work. That is why AI agents can be such a good fit for SMEs when the rollout stays grounded.</p><p>OpenClaw is useful in this environment because it can sit across channels, files, browser tasks, messages, and internal process steps rather than acting like just another isolated app. If the business handles enquiries through forms, inboxes, WhatsApp, spreadsheets, and a CRM, more fragmentation is usually the last thing it needs.</p><p>The best SME use cases are practical: lead response, support triage, reporting, document movement, reminders, and knowledge retrieval. These are the jobs that quietly steal time every single week.</p><p>OpenClaw starts to earn its place when it removes that drag and makes the operation cleaner, not when it is bought as a badge of being forward-thinking.</p>",
  },
  {
    id: "best-use-cases",
    title: "The best use cases for small businesses",
    html: "<p>A common first win is lead handling. An OpenClaw workflow can capture a new enquiry, summarise what matters, enrich context if needed, alert the owner or team in the right place, and draft a reply or next step. That tightens response time and reduces the chance of a warm lead going cold.</p><p>Support and admin are another strong area. Repetitive questions, inbox sorting, quote requests, document follow-up, appointment reminders, and internal task coordination all suit an approval-aware agent model. The business keeps control, but the grind reduces.</p><p>Reporting is another hidden win. Many SMEs still spend time turning data from one tool into an update for another person. OpenClaw can gather inputs, summarise the current picture, and deliver the output where it is actually needed.</p><p>These are not glamorous use cases. They are just very useful ones.</p>",
  },
  {
    id: "rollout-safely",
    title: "How to roll it out safely",
    html: "<p>The right rollout is boring and measurable. Pick one workflow with obvious pain. Define what the agent can do alone, what needs approval, and what success looks like. That might be fewer dropped leads, less admin, faster response times, or more consistent reporting.</p><p>Keep the first implementation narrow. A small business does not need a grand AI transformation plan on day one. It needs proof. Once one workflow performs, confidence rises and the next decision becomes easier.</p><p>It also helps to be honest about messy data and messy process. If the business partly runs on chat threads, spreadsheets, and memory, some cleanup may be needed before the best results appear. That is normal. A good implementation surfaces those blockers instead of pretending they do not exist.</p><p>Blue Canvas usually recommends this staged approach because it turns AI into a working business asset rather than a vague ambition.</p>",
  },
  {
    id: "commercial-case",
    title: "What the ROI case usually looks like",
    html: "<p>For most SMEs, the return does not come from cutting headcount dramatically. It comes from saved owner time, faster lead response, stronger follow-up, and less operational drag. When the owner gets back five to ten useful hours a week, or the team stops missing warm enquiries, the commercial effect can be obvious very quickly.</p><p>There can also be a stack simplification benefit. If you are already paying for several disconnected tools and still doing manual work between them, a broader agent layer can make the operation cleaner and easier to manage.</p><p>If you want to model the return properly, pair this guide with <a href=\"/guides/openclaw-roi-calculator-guide\">OpenClaw ROI Calculator Guide</a> and <a href=\"/guides/openclaw-vs-zapier-make-n8n\">OpenClaw vs Zapier, Make, and n8n</a>. If you are earlier in the journey, start with <a href=\"/guides/ai-readiness-assessment-guide\">AI Readiness Assessment Guide</a>.</p><p>The point is not to look advanced. It is to get time, consistency, and operational clarity back.</p>",
  }
];

const faqs = [
  {
    question: "Is OpenClaw too advanced for a small business?",
    answer: "Not if you start with one clear workflow and keep approvals sensible.",
  },
  {
    question: "What is the best first use case?",
    answer: "Lead handling, support triage, reporting, and internal admin coordination are usually strong starting points.",
  },
  {
    question: "Do I need a technical team?",
    answer: "Not necessarily, but you do need a clear owner for the workflow.",
  },
  {
    question: "Can OpenClaw replace multiple tools?",
    answer: "Sometimes, especially where the current process is fragmented across channels and manual steps.",
  },
  {
    question: "How quickly can SMEs see ROI?",
    answer: "Often within weeks if the first workflow targets a real bottleneck with enough volume.",
  },
  {
    question: "Should everything be automated?",
    answer: "No. Selective, approval-aware automation is usually the better route.",
  }
];

const relatedGuides = [
  {
    href: "/guides/openclaw-roi-calculator-guide",
    title: "OpenClaw ROI Calculator Guide",
  },
  {
    href: "/guides/openclaw-vs-zapier-vs-make",
    title: "OpenClaw vs Zapier, Make, and n8n",
  },
  {
    href: "/guides/ai-readiness-assessment-guide",
    title: "AI Readiness Assessment Guide",
  },
  {
    href: "/guides/ai-agent-consulting-uk",
    title: "AI Agent Consulting UK",
  }
];

export default function OpenClawForSmallBusinessUKPage() {
  return (
    <>
      <section className="hero-gradient relative overflow-hidden min-h-[70vh] flex items-center grain">
        <div className="absolute top-20 right-[10%] w-[400px] h-[400px] bg-orange/5 rounded-full blur-[120px] glow-pulse" />
        <div className="absolute bottom-20 left-[5%] w-[300px] h-[300px] bg-blue/10 rounded-full blur-[100px] glow-pulse" style={{ animationDelay: "3s" }} />
        <div className="max-w-[1140px] mx-auto px-6 relative z-10 py-20">
          <div className="max-w-[780px]">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-white/60 text-sm font-medium">SME Guide 2026</span>
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-[3.2rem] font-extrabold text-white mb-6 leading-[1.05] tracking-tight">OpenClaw for Small Business UK</h1>
            <p className="text-white/70 text-lg md:text-xl max-w-[680px] mb-10 leading-relaxed">Small businesses do not need a giant AI transformation plan. They need a few expensive manual workflows handled better. That is where OpenClaw becomes useful.</p>
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
