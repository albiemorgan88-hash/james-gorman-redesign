import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "EU AI Act Compliance Checker for AI Systems and Agents",
  description:
    "Practical EU AI Act readiness checker for teams deploying AI systems or AI agents into the EU. Review scope, provider or deployer role, controls, logging, human oversight, and remediation priorities.",
  keywords: [
    "EU AI Act compliance checker",
    "EU AI Act readiness",
    "AI Act compliance for AI agents",
    "EU AI regulation audit",
    "AI governance EU",
    "AI Act deployer obligations",
    "AI Act provider obligations",
    "OpenClaw Consultant compliance",
  ],
  alternates: {
    canonical: "https://openclawconsultant.co.uk/guides/eu-ai-act-compliance-checker",
  },
  openGraph: {
    title: "EU AI Act Compliance Checker for AI Systems and Agents",
    description:
      "A practical readiness checker for organisations shipping AI systems or AI agents into the EU, focused on controls, evidence, and implementation support.",
    url: "https://openclawconsultant.co.uk/guides/eu-ai-act-compliance-checker",
    type: "article",
  },
};

const fitItems = [
  "UK or non-EU teams selling, deploying, or supporting AI systems used in the EU",
  "Product, ops, compliance, and engineering leads who need a tighter view of obligations",
  "Teams using AI agents, workflow automation, or general-purpose AI in customer-facing or operational processes",
  "Businesses that need an implementation plan, not a vague policy deck",
];

const checkerItems = [
  {
    title: "System inventory and scope",
    question: "Can you name every AI system or agent workflow in scope, its purpose, and where it touches EU users, workers, or customers?",
    whyItMatters: "You cannot classify or govern what you have not inventoried properly.",
  },
  {
    title: "Role clarity",
    question: "Do you know whether you are acting as a provider, deployer, importer, distributor, or a mix depending on the workflow?",
    whyItMatters: "Obligations change fast once your role changes, especially when you customise or repackage systems.",
  },
  {
    title: "Prohibited use screening",
    question: "Have you checked whether any use case could drift into prohibited practices or a clearly unacceptable-risk pattern?",
    whyItMatters: "This is a front-end triage step, not something to discover after launch.",
  },
  {
    title: "Risk classification",
    question: "Have you assessed whether any system could be limited-risk, high-risk, GPAI-related, or tied into regulated product or safety obligations?",
    whyItMatters: "Classification drives documentation, controls, and timelines.",
  },
  {
    title: "Human oversight",
    question: "Is there a real human checkpoint for sensitive outputs, approvals, escalations, and overrides?",
    whyItMatters: "For AI agents especially, oversight cannot just exist on paper.",
  },
  {
    title: "Logging and evidence",
    question: "Can you show logs, prompt or tool traces, approval history, incidents, and policy changes in a reviewable way?",
    whyItMatters: "If the evidence is weak, your governance is weak.",
  },
  {
    title: "Data and instructions",
    question: "Do you know what data enters the system, which instructions govern it, and how outputs are constrained?",
    whyItMatters: "Good controls depend on clear inputs, source handling, and boundaries.",
  },
  {
    title: "Third-party model and vendor chain",
    question: "Have you mapped model providers, API vendors, platform dependencies, and contract gaps?",
    whyItMatters: "A lot of compliance exposure sits in the supplier chain, not just your own app layer.",
  },
  {
    title: "AI literacy and internal operating model",
    question: "Have relevant staff been trained on how the system works, when to intervene, and what is not allowed?",
    whyItMatters: "AI literacy is not just awareness. It affects daily control quality.",
  },
  {
    title: "Remediation plan",
    question: "If gaps were found today, do you already know the owner, priority, and fix path for each one?",
    whyItMatters: "A checker is only useful if it leads to practical remediation.",
  },
];

const supportItems = [
  "Scope the systems and agent workflows that actually need attention first",
  "Map likely roles, obligations, and evidence gaps with your internal team",
  "Tighten logging, approvals, human oversight, and operational controls",
  "Turn the findings into a practical remediation list for engineering and ops",
];

const timingRows = [
  {
    date: "1 August 2024",
    title: "AI Act entered into force",
    detail: "The framework formally entered into force, starting the phased application timetable.",
  },
  {
    date: "2 February 2025",
    title: "Prohibited practices, definitions, and AI literacy",
    detail: "Early provisions started to bite, including banned practices, core definitions, and AI literacy requirements.",
  },
  {
    date: "2 August 2025",
    title: "Governance rules and GPAI obligations",
    detail: "Governance structures and obligations around general-purpose AI models moved into clearer operational focus.",
  },
  {
    date: "2 August 2026",
    title: "Most remaining obligations",
    detail: "Most of the remaining obligations are due to apply from this point, depending on role and use case.",
  },
  {
    date: "2 August 2027",
    title: "Some Annex I-linked and product safety obligations",
    detail: "Certain obligations tied to product safety legislation and Annex I pathways land later.",
  },
];

const deliverables = [
  "Inventory and workflow map",
  "Role and classification review",
  "Controls and oversight gap list",
  "Evidence and logging recommendations",
  "Prioritised remediation actions",
];

const faqs = [
  {
    q: "Is this legal advice?",
    a: "No. This page is about technical readiness, evidence, controls, and implementation support. Formal legal interpretation should sit with qualified counsel where needed.",
  },
  {
    q: "Does the EU AI Act matter if our business is based in the UK?",
    a: "It can. If your AI system or AI-enabled service is placed on the market, put into service, or used in ways that fall within the Act’s scope in the EU, you need to assess it properly.",
  },
  {
    q: "Do AI agents change the compliance picture?",
    a: "Often yes. Agent workflows add operational questions around autonomy, tool access, approvals, logging, and human intervention that need to be designed deliberately.",
  },
  {
    q: "What happens if we are not ready yet?",
    a: "That is normal. The useful next step is a scoped gap review, then a practical remediation plan rather than trying to solve everything at once.",
  },
];

export default function EuAiActComplianceCheckerPage() {
  return (
    <>
      <section className="hero-gradient relative overflow-hidden min-h-[74vh] flex items-center grain">
        <div className="max-w-[1140px] mx-auto px-6 relative z-10 py-24">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
            <div className="max-w-[760px]">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-4 py-1.5 mb-6">
                <span className="w-2 h-2 bg-orange rounded-full" />
                <span className="text-white/80 text-sm font-medium">EU AI Act Readiness</span>
              </div>
              <h1 className="font-heading text-4xl sm:text-5xl md:text-[3.35rem] font-extrabold text-white mb-6 leading-[1.02] tracking-tight">
                EU AI Act compliance checker
                <br />
                <span className="text-orange">for AI systems and AI agents</span>
              </h1>
              <p className="text-white/70 text-lg md:text-xl max-w-[650px] mb-8 leading-relaxed">
                A practical readiness page for teams shipping AI into the EU. Check scope, roles, controls,
                evidence, and oversight, then fix the gaps before they turn into a messy scramble.
              </p>
              <div className="flex flex-wrap gap-4 text-white/60 text-sm mb-8">
                <span className="flex items-center gap-2">
                  <span className="text-orange">●</span>
                  Updated April 2026
                </span>
                <span className="flex items-center gap-2">
                  <span className="text-orange">●</span>
                  Implementation-led support
                </span>
                <span className="flex items-center gap-2">
                  <span className="text-orange">●</span>
                  Not legal advice
                </span>
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#checker"
                  className="inline-flex items-center justify-center bg-orange text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-orange-hover hover:-translate-y-0.5 shadow-glow-orange"
                >
                  Run the checker
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center border border-white/20 text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-white/5"
                >
                  Book a gap review
                </a>
              </div>
            </div>

            <div className="bg-white/[0.06] border border-white/[0.08] rounded-[28px] p-6 md:p-7 backdrop-blur-sm shadow-soft-lg">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <div className="text-white font-heading text-2xl font-bold">Quick signal check</div>
                  <p className="text-white/60 text-sm mt-1">If 3 or more of these are unclear, you probably need a proper review.</p>
                </div>
                <div className="w-11 h-11 rounded-2xl bg-orange/15 flex items-center justify-center text-orange text-xl">✓</div>
              </div>
              <div className="space-y-3">
                {[
                  "We know which AI systems and agent workflows are in scope",
                  "We know our likely provider or deployer role per workflow",
                  "We can evidence human oversight and operational controls",
                  "We have logs, approvals, and supplier visibility where it matters",
                ].map((item, index) => (
                  <div key={index} className="flex gap-3 items-start rounded-2xl bg-white/[0.05] border border-white/[0.07] p-4">
                    <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-md border border-orange/40 text-orange text-xs">✓</span>
                    <span className="text-white/80 text-sm leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 rounded-2xl bg-white text-dark p-4">
                <div className="text-sm font-semibold mb-1">What OCC helps with</div>
                <p className="text-sm text-muted-dark leading-relaxed">
                  Technical audit, evidence gaps, workflow controls, logging, approvals, agent governance, and a fix list your team can actually implement.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#faf8f5] to-transparent" />
      </section>

      <section className="bg-white py-16">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {fitItems.map((item, index) => (
              <div key={index} className="bg-surface rounded-2xl p-6 border border-border-light shadow-sm card-lift">
                <div className="text-xs font-semibold uppercase tracking-[0.14em] text-orange mb-3">Who this is for</div>
                <p className="text-sm text-muted-dark leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="checker" className="bg-light py-20">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="max-w-[760px] mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              10-point EU AI Act readiness checker
            </h2>
            <p className="text-muted-dark text-lg leading-relaxed">
              This is not a legal determination. It is a practical triage pass to help you spot where classification,
              governance, evidence, or operating controls still look thin.
            </p>
          </div>

          <div className="grid lg:grid-cols-[1fr_320px] gap-8 items-start">
            <div className="space-y-5">
              {checkerItems.map((item, index) => (
                <div key={index} className="bg-white rounded-2xl border border-border-light shadow-sm p-6 md:p-7">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-[0.14em] text-orange mb-2">Check {index + 1}</div>
                      <h3 className="font-heading text-2xl font-bold text-dark">{item.title}</h3>
                    </div>
                    <div className="flex gap-2 shrink-0">
                      <span className="px-3 py-1.5 rounded-full bg-green-50 text-green-700 text-xs font-semibold border border-green-100">Yes</span>
                      <span className="px-3 py-1.5 rounded-full bg-amber-50 text-amber-700 text-xs font-semibold border border-amber-100">Partly</span>
                      <span className="px-3 py-1.5 rounded-full bg-rose-50 text-rose-700 text-xs font-semibold border border-rose-100">No</span>
                    </div>
                  </div>
                  <p className="text-dark font-medium leading-relaxed mb-3">{item.question}</p>
                  <p className="text-sm text-muted-dark leading-relaxed">{item.whyItMatters}</p>
                </div>
              ))}
            </div>

            <aside className="lg:sticky lg:top-28 space-y-5">
              <div className="bg-navy text-white rounded-2xl p-6 shadow-soft-lg">
                <h3 className="font-heading text-2xl font-bold mb-3">Simple scoring guide</h3>
                <div className="space-y-3 text-sm text-white/70">
                  <p><span className="text-white font-semibold">0 to 2 noes:</span> you likely need light clean-up and evidence tightening.</p>
                  <p><span className="text-white font-semibold">3 to 5 noes:</span> there is probably real role, control, or documentation drift.</p>
                  <p><span className="text-white font-semibold">6+ noes:</span> pause the assumptions and run a proper gap review before scaling further.</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-border-light shadow-sm">
                <div className="text-xs font-semibold uppercase tracking-[0.14em] text-orange mb-3">What you can ask OCC to do</div>
                <div className="space-y-3">
                  {supportItems.map((item, index) => (
                    <div key={index} className="flex gap-3 items-start text-sm text-muted-dark leading-relaxed">
                      <span className="text-orange mt-0.5">✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <a
                  href="#contact"
                  className="mt-6 inline-flex w-full items-center justify-center bg-orange text-white px-5 py-3.5 rounded-xl font-semibold hover:bg-orange-hover hover:-translate-y-0.5"
                >
                  Get a compliance gap review
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-surface rounded-3xl p-8 border border-border-light">
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-orange mb-3">Implementation-led support</div>
              <h2 className="font-heading text-3xl font-bold text-dark mb-5">This is about controls and delivery, not just policy wording</h2>
              <p className="text-muted-dark leading-relaxed mb-6">
                OpenClaw Consultant helps teams turn fuzzy compliance anxiety into an ordered delivery plan. That usually means sorting the system inventory, clarifying roles, tightening agent permissions, improving oversight, and making the evidence trail easier to review.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {deliverables.map((item, index) => (
                  <div key={index} className="rounded-2xl bg-white border border-border-light px-4 py-4 text-sm text-dark font-medium">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-navy rounded-3xl p-8 text-white grain relative overflow-hidden">
              <div className="relative z-10">
                <div className="text-xs font-semibold uppercase tracking-[0.14em] text-orange mb-3">Typical rough edges we see</div>
                <div className="space-y-4">
                  {[
                    "AI agents with tool access but weak approvals or incomplete logs",
                    "Unclear boundary between provider and deployer responsibilities",
                    "Supplier stack risks buried in product or procurement decisions",
                    "Teams trying to do classification work without a clean inventory first",
                    "Policy documents that do not match how the workflow actually behaves",
                  ].map((item, index) => (
                    <div key={index} className="flex gap-3 items-start rounded-2xl bg-white/[0.05] border border-white/[0.06] p-4 text-sm text-white/80 leading-relaxed">
                      <span className="text-orange mt-0.5">•</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light py-20">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="max-w-[860px] mb-10">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Legal timing, carefully stated, as at April 14, 2026
            </h2>
            <p className="text-muted-dark text-lg leading-relaxed">
              The EU AI Act applies in phases. The dates below are useful planning anchors, but timing and interpretation should still be handled carefully. The European Commission proposed simplification changes on 19 November 2025, so do not overstate certainty where your obligations depend on final interpretation, classification, or linked product rules.
            </p>
          </div>

          <div className="space-y-4 mb-8">
            {timingRows.map((row, index) => (
              <div key={index} className="bg-white rounded-2xl border border-border-light shadow-sm p-6 md:p-7 grid md:grid-cols-[180px_1fr] gap-4 md:gap-8 items-start">
                <div className="text-orange font-heading text-2xl font-bold">{row.date}</div>
                <div>
                  <h3 className="font-heading text-2xl font-bold text-dark mb-2">{row.title}</h3>
                  <p className="text-muted-dark leading-relaxed">{row.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-2xl bg-white border border-orange/15 p-6 md:p-7 shadow-sm">
            <h3 className="font-heading text-2xl font-bold text-dark mb-3">What this means in practice</h3>
            <p className="text-muted-dark leading-relaxed mb-4">
              If you are still working out what is in scope, who owns which obligation, or how your agent workflows are supervised, now is the time to tighten that up. Waiting until August 2026 to start collecting evidence is the wrong way round.
            </p>
            <p className="text-muted-dark leading-relaxed">
              A sensible next move is a scoped readiness review, then a remediation sprint focused on the workflows with the highest exposure first.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="max-w-[820px] mx-auto">
            <div className="text-center mb-10">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">Common questions</h2>
            </div>
            <div className="space-y-5">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-surface rounded-2xl border border-border-light p-6">
                  <h3 className="font-heading text-xl font-bold text-dark mb-3">{faq.q}</h3>
                  <p className="text-sm text-muted-dark leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-navy text-white py-24 relative overflow-hidden grain">
        <div className="max-w-[1140px] mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-14 items-start">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-orange mb-3">Lead capture</div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-5">
                Book a focused EU AI Act gap review
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-7">
                Tell us what you are shipping, where AI agents or models sit in the workflow, and where you are unsure. We will help you turn that into a practical audit and remediation path.
              </p>
              <div className="space-y-3 text-white/65 text-sm">
                <div className="flex items-center gap-3"><span className="text-orange">✓</span> Practical triage, not generic AI theatre</div>
                <div className="flex items-center gap-3"><span className="text-orange">✓</span> Clear view of controls, evidence, and highest-priority fixes</div>
                <div className="flex items-center gap-3"><span className="text-orange">✓</span> Helpful for AI systems, AI agents, and mixed automation workflows</div>
              </div>
            </div>

            <div className="bg-white/[0.04] border border-white/[0.08] rounded-3xl p-3 sm:p-4">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
