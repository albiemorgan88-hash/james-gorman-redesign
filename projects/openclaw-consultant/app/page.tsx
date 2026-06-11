import type { Metadata } from "next";
import { caseStudies } from "@/components/Editorial";
import { discoveryCallUrl } from "@/components/booking";
import ContactForm from "@/components/ContactForm";
import SafeSetupLeadMagnet from "@/components/SafeSetupLeadMagnet";

export const metadata: Metadata = {
  title: "OpenClaw Consultant UK | Setup, Skills & Agent Automation",
  description:
    "Founder-led OpenClaw consulting from Blue Canvas AI. Setup, custom skills, agent workflows, safe operating rules and ongoing support for UK and remote teams.",
  alternates: { canonical: "https://openclawconsultant.co.uk" },
};

const services = [
  {
    number: "01",
    title: "Setup & Configuration",
    body: "Install, configure and document OpenClaw around your tools, access rules and real operating process.",
  },
  {
    number: "02",
    title: "Custom Skill Development",
    body: "Build practical skills for repeatable jobs such as research, reporting, publishing checks and internal operations.",
  },
  {
    number: "03",
    title: "Agent Workflows",
    body: "Map what each agent should do, what stays human, and where review or escalation has to happen.",
  },
  {
    number: "04",
    title: "Workflow Automation",
    body: "Connect OpenClaw to the systems already in the business when there is a clear job worth automating.",
  },
  {
    number: "05",
    title: "Training & Handover",
    body: "Give your team a working setup, operating notes and a plain-English handover so OpenClaw is useful after launch.",
  },
  {
    number: "06",
    title: "Ongoing Support",
    body: "Review outputs, update skills, tune prompts, resolve errors and keep the system aligned with the way the business actually works.",
  },
];

const useCases = [
  {
    tag: "Marketing",
    title: "SEO & Content Operations",
    body: "Keyword checks, content briefs, page audits, internal link suggestions and publishing QA.",
  },
  {
    tag: "Sales",
    title: "Lead Research",
    body: "Prospect research, account summaries, CRM-ready notes and draft outreach prepared for human approval.",
  },
  {
    tag: "Operations",
    title: "Client Reporting",
    body: "Weekly status packs, site health notes, campaign summaries and follow-up task lists.",
  },
  {
    tag: "Engineering",
    title: "Deployment Checks",
    body: "Build logs, Vercel checks, GitHub issue triage and release notes for small technical teams.",
  },
  {
    tag: "Support",
    title: "Knowledge Agents",
    body: "Answers from internal docs, policies, ticket history and saved decisions with source links.",
  },
  {
    tag: "Governance",
    title: "Risk & Review Loops",
    body: "Approval gates, sensitive-action rules, audit notes and safe escalation paths for agent work.",
  },
];

const proofPoints = [
  { value: "5.0", label: "Blue Canvas Google rating" },
  { value: "Founder-led", label: "Hands-on delivery" },
  { value: "OpenClaw", label: "Focused setup support" },
  { value: "2 case studies", label: "Published workflow examples" },
];

const openClawBasics = [
  {
    title: "Keeps useful context",
    body: "OpenClaw can carry operating notes, files and decisions forward so each session does not start from scratch.",
  },
  {
    title: "Turns repeat work into skills",
    body: "Common jobs can become reusable actions that follow the same steps each time.",
  },
  {
    title: "Runs routine checks",
    body: "OpenClaw can watch for the right signals and prepare the next step for human review.",
  },
];

const typicalFit = [
  "Founder-led businesses with a real workflow bottleneck",
  "Small teams moving from AI curiosity to operating systems",
  "Enterprise teams needing access, audit, and rollout controls",
  "Buyers who want direct delivery rather than AI theatre",
];

const testimonials = [
  {
    quote: "Blue Canvas AI helped us integrate AI tools that streamlined our workflows, improved campaign performance, and saved us hours every week.",
    name: "Stuart Waters",
    role: "Blue Canvas AI review",
  },
  {
    quote: "Their knowledge of process optimisation and ability to identify opportunities for automation was first class.",
    name: "Kyle Martin",
    role: "Blue Canvas AI review",
  },
  {
    quote: "Blue Canvas's AI expertise gave us the confidence and insight to expand our business successfully.",
    name: "Gavan Wall",
    role: "CEO, The Wall Group",
  },
];

const pricing = [
  {
    title: "Discovery",
    price: "Scoped call",
    note: "30 minutes",
    items: ["Understand your workflow", "Identify good-fit agent tasks", "Flag risks and access needs", "Recommend the next step"],
    cta: "Start here",
    featured: false,
  },
  {
    title: "Setup Sprint",
    price: "From £750",
    note: "Scoped implementation",
    items: ["OpenClaw setup plan", "Environment and model configuration", "Initial skills or workflows", "Handover notes and operating rules"],
    cta: "Scope setup",
    featured: true,
  },
  {
    title: "Support",
    price: "From £250/mo",
    note: "Ongoing improvement",
    items: ["Skill updates", "Troubleshooting", "Workflow reviews", "Monthly planning and recommendations"],
    cta: "Discuss support",
    featured: false,
  },
];

const guideLinks = [
  {
    title: "AI consultancy UK",
    href: "/guides/ai-consultancy-uk",
    body: "How to buy practical AI help without drifting into vague transformation work.",
  },
  {
    title: "AI automation agency UK",
    href: "/guides/ai-automation-agency-uk",
    body: "What a useful automation partner should deliver before tools or retainers expand.",
  },
  {
    title: "AI implementation services",
    href: "/guides/ai-implementation-services-uk",
    body: "A buyer guide for moving from idea to pilot, live workflow and ongoing support.",
  },
  {
    title: "Safe setup checklist",
    href: "/guides/openclaw-safe-setup-checklist",
    body: "A practical permission matrix for agent access, approval gates, logs and rollback rules.",
  },
  {
    title: "OpenClaw consultant hub",
    href: "/openclaw",
    body: "The central guide to OpenClaw setup, consulting, implementation, skills and support.",
  },
  {
    title: "OpenClaw setup service",
    href: "/services/setup-configuration",
    body: "A commercial setup path for teams that want a scoped implementation plan.",
  },
];

const faqs = [
  {
    question: "Do I need technical knowledge to use OpenClaw?",
    answer:
      "Not necessarily. The setup work can include installation, configuration, handover notes and training so your team knows how to operate it safely.",
  },
  {
    question: "How long does setup take?",
    answer:
      "A contained setup can often be scoped into a short sprint. More complex agent teams, integrations or governance requirements need a longer plan.",
  },
  {
    question: "Can you help if OpenClaw is already installed?",
    answer:
      "Yes. The work can start with an audit of the current setup, then move into fixes, custom skills, operating rules or training.",
  },
  {
    question: "What makes this different from a normal chatbot?",
    answer:
      "The focus is on persistent workflows, custom skills, scheduled checks, memory, files, approvals and integrations rather than one-off chat responses.",
  },
];

export default function Home() {
  return (
    <div className="classic-home">
      <section className="hero-gradient grain relative flex min-h-[90vh] items-center overflow-hidden">
        <div className="absolute right-[10%] top-20 h-[500px] w-[500px] rounded-full bg-orange/5 blur-[120px] glow-pulse" />
        <div className="absolute bottom-20 left-[5%] h-[400px] w-[400px] rounded-full bg-blue/10 blur-[100px] glow-pulse" style={{ animationDelay: "3s" }} />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 mx-auto max-w-[1140px] px-6 py-32">
          <div className="max-w-[720px]">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5">
              <span className="h-2 w-2 rounded-full bg-green-400" />
              <span className="text-sm font-medium text-white/60">Dedicated OpenClaw setup and consulting</span>
            </div>

            <h1 className="mb-6 text-4xl font-black leading-[1.05] tracking-normal text-white sm:text-5xl md:text-[3.5rem] lg:text-[4rem]">
              OpenClaw,
              <br />
              <span className="text-orange">Set Up Properly</span>
              <br />
              and Safe to Run.{" "}
              <span className="block text-white">Founder-Led.</span>
            </h1>

            <p className="mb-10 max-w-[580px] text-lg leading-relaxed text-white/60 md:text-xl">
              Founder-led setup, custom skills and ongoing support that gets OpenClaw doing real work, with guardrails you control.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <a href={discoveryCallUrl} target="_blank" rel="noopener" className="inline-flex items-center justify-center rounded-btn bg-orange px-8 py-4 text-base font-semibold text-white shadow-glow-orange transition hover:-translate-y-0.5 hover:bg-orange-hover">
                Book a discovery call
              </a>
              <a href="#services" className="inline-flex items-center justify-center text-sm font-semibold text-white/65 transition hover:text-white">
                View services
              </a>
            </div>
            <p className="mt-6 max-w-[560px] text-sm leading-relaxed text-white/45">
              Discovery calls are 30 minutes, no pitch deck. If the work is not a fit, you get a referral.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#fafbfc] to-transparent" />
      </section>

      <section className="bg-light py-24">
        <div className="mx-auto max-w-[1140px] px-6">
          <div className="mx-auto max-w-[760px] text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-orange">What Is OpenClaw?</p>
            <h2 className="mb-6 text-3xl font-black tracking-normal text-dark md:text-4xl">Your Business, Powered by AI Agents</h2>
            <p className="mb-8 text-lg leading-relaxed text-muted">
              OpenClaw gives AI agents a place to work from: files, tools, repeatable tasks and rules for when a person needs to check the output. The value comes from fitting it to a real business process, not just installing another tool.
            </p>
            <div className="grid grid-cols-1 gap-6 text-left sm:grid-cols-3">
              {openClawBasics.map((item, index) => (
                <div key={item.title} className="rounded-box bg-white p-6 shadow-card">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-orange/10 text-sm font-black text-orange">{index + 1}</div>
                  <h3 className="mb-2 text-lg font-black tracking-normal text-dark">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-white py-24">
        <div className="mx-auto max-w-[1140px] px-6">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-orange">Services</p>
          <h2 className="mb-4 text-3xl font-black tracking-normal text-dark md:text-4xl">Everything You Need to Get Running</h2>
          <p className="mb-14 max-w-[600px] text-lg leading-relaxed text-muted">
            From first install to managed workflows. Hands-on setup, clear documentation and support for the places where agent work can actually help.
          </p>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} className="card-lift rounded-box border border-border bg-surface p-8">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-orange/10 text-sm font-black text-orange">{service.number}</div>
                <h3 className="mb-2 text-lg font-black tracking-normal text-dark">{service.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{service.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-light py-20">
        <div className="mx-auto max-w-[1140px] px-6">
          <SafeSetupLeadMagnet />
        </div>
      </section>

      <section id="why-blue-canvas" className="grain relative overflow-hidden bg-navy py-24 text-white">
        <div className="absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-blue/5 blur-[150px]" />
        <div className="relative z-10 mx-auto max-w-[1140px] px-6">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-orange">Why Blue Canvas</p>
          <h2 className="mb-6 text-3xl font-black tracking-normal md:text-4xl">AI That Actually Works. Not Slides About It.</h2>
          <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
            <div>
              <p className="mb-6 text-lg leading-relaxed text-white/60">
                OpenClaw Consultant is led by Phil Patterson, founder of <a href="https://bluecanvas.ai" target="_blank" rel="noopener" className="text-orange transition hover:text-orange-hover">Blue Canvas AI</a>, a hands-on AI consultancy based in Derry, Northern Ireland. The work is practical: set up the system, connect the tools, define the rules and make sure the agent workflow has a useful job to do.
              </p>
              <p className="mb-8 text-lg leading-relaxed text-white/60">
                The focus is founder-led delivery for small teams: enough structure to be safe, enough speed to be useful, and enough documentation that you are not left with a mystery box.
              </p>
              <ul className="space-y-4">
                {["SEO and content workflows", "Lead research and account summaries", "Deployment and site health checks", "Knowledge agents for internal docs", "Review gates for sensitive actions", "Training and handover notes"].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white/70">
                    <span className="mt-0.5 text-orange">▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="grid grid-cols-2 gap-5">
                {proofPoints.map((point) => (
                  <div key={point.label} className="rounded-box border border-white/[0.06] bg-white/[0.03] p-6 text-center">
                    <div className="mb-1 text-2xl font-black tracking-normal text-orange md:text-3xl">{point.value}</div>
                    <div className="text-sm font-medium uppercase tracking-[0.12em] text-white/40">{point.label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-box border border-white/[0.06] bg-white/[0.03] p-6">
                <div className="mb-5 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue to-orange text-sm font-black text-white shadow-glow">PP</div>
                  <div>
                    <p className="font-semibold text-white">Phil Patterson</p>
                    <p className="text-xs text-white/45">Founder of Blue Canvas AI</p>
                  </div>
                </div>
                <p className="text-sm italic leading-relaxed text-white/50">
                  Good OpenClaw work is not about claiming an agent can do everything. It is about choosing the right jobs, setting boundaries and making the workflow visible enough to trust.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="case-studies" className="bg-white py-24">
        <div className="mx-auto max-w-[1140px] px-6">
          <div className="mb-14 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-orange">Case Studies</p>
              <h2 className="max-w-[680px] text-3xl font-black tracking-normal text-dark md:text-4xl">Proof from real OpenClaw workflows</h2>
            </div>
            <a href="/case-studies" className="text-sm font-semibold text-orange transition hover:text-orange-hover">
              View all case studies
            </a>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {caseStudies.map((study) => (
              <a key={study.href} href={study.href} className="card-lift block rounded-box border border-border bg-surface p-8">
                <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                  <span className="rounded-full bg-blue/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-blue">{study.sector}</span>
                  <span className="text-sm font-black text-orange">{study.metric}</span>
                </div>
                <h3 className="mb-3 text-2xl font-black tracking-normal text-dark">{study.title}</h3>
                <p className="mb-6 text-sm leading-relaxed text-muted">{study.body}</p>
                <span className="text-sm font-semibold text-orange">Read full story</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="typical-fit" className="bg-light py-24">
        <div className="mx-auto grid max-w-[1140px] grid-cols-1 gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-orange">Typical Fit</p>
            <h2 className="mb-5 text-3xl font-black tracking-normal text-dark md:text-4xl">The best calls start with a real bottleneck.</h2>
            <p className="text-lg leading-relaxed text-muted">
              OpenClaw works best when there is a repeatable job, a clear owner, and enough risk awareness to decide what the agent can do safely.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {typicalFit.map((item) => (
              <div key={item} className="rounded-box border border-border bg-white p-6 shadow-card">
                <span className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-orange/10 text-orange">✓</span>
                <p className="text-sm font-semibold leading-relaxed text-dark">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="bg-navy py-24 text-white">
        <div className="mx-auto max-w-[1140px] px-6">
          <div className="mb-14 max-w-[700px]">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-orange">Testimonials</p>
            <h2 className="mb-5 text-3xl font-black tracking-normal md:text-4xl">What Blue Canvas clients say.</h2>
            <p className="text-lg leading-relaxed text-white/60">
              Practical delivery, clear recommendations and AI workflows that save real operating time.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.quote} className="rounded-box border border-white/[0.06] bg-white/[0.03] p-7">
                <p className="mb-8 text-sm leading-relaxed text-white/65">&quot;{testimonial.quote}&quot;</p>
                <p className="font-semibold text-white">{testimonial.name}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.12em] text-white/35">{testimonial.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="use-cases" className="bg-light py-24">
        <div className="mx-auto max-w-[1140px] px-6">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-orange">Use Cases</p>
          <h2 className="mb-4 text-3xl font-black tracking-normal text-dark md:text-4xl">What Can OpenClaw Do for You?</h2>
          <p className="mb-14 max-w-[620px] text-lg leading-relaxed text-muted">
            The best use cases are repeatable, reviewable and tied to a workflow the business already understands.
          </p>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {useCases.map((useCase) => (
              <div key={useCase.title} className="card-lift group rounded-box border border-border bg-white p-8">
                <span className="mb-4 inline-block rounded-full bg-blue/5 px-3 py-1 text-xs font-semibold text-blue">{useCase.tag}</span>
                <h3 className="mb-2 text-lg font-black tracking-normal text-dark transition-colors group-hover:text-blue">{useCase.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{useCase.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="bg-white py-24">
        <div className="mx-auto max-w-[1140px] px-6">
          <div className="mb-14 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-orange">Pricing</p>
            <h2 className="mb-4 text-3xl font-black tracking-normal text-dark md:text-4xl">Simple, Scoped Pricing</h2>
            <p className="mx-auto max-w-[520px] text-lg leading-relaxed text-muted">Start with the smallest useful scope, then expand once the workflow proves itself.</p>
          </div>
          <div className="mx-auto grid max-w-[960px] grid-cols-1 gap-6 md:grid-cols-3">
            {pricing.map((tier) => (
              <div key={tier.title} className={`card-lift relative rounded-box p-8 ${tier.featured ? "border-2 border-orange/30 bg-navy text-white" : "border border-border bg-surface text-dark"}`}>
                {tier.featured ? <div className="absolute -top-3 left-6 rounded-full bg-orange px-3 py-1 text-xs font-bold text-white">Common starting point</div> : null}
                <div className={`mb-6 text-sm font-semibold uppercase tracking-[0.12em] ${tier.featured ? "text-white/50" : "text-muted"}`}>{tier.title}</div>
                <div className="mb-1 text-3xl font-black tracking-normal md:text-4xl">{tier.price}</div>
                <p className={`mb-8 text-sm ${tier.featured ? "text-white/50" : "text-muted"}`}>{tier.note}</p>
                <ul className="mb-8 space-y-3">
                  {tier.items.map((item) => (
                    <li key={item} className={`flex items-start gap-2 text-sm ${tier.featured ? "text-white/70" : "text-muted-dark"}`}>
                      <span className={tier.featured ? "text-orange" : "text-green-700"}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <a href={discoveryCallUrl} target="_blank" rel="noopener" className={`block rounded-btn px-6 py-3 text-center text-sm font-semibold transition ${tier.featured ? "bg-orange text-white hover:bg-orange-hover" : "bg-dark text-white hover:bg-dark/90"}`}>
                  {tier.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1140px] px-6">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-orange">OpenClaw Guides</p>
          <h2 className="mb-4 text-3xl font-black tracking-normal text-dark md:text-4xl">Practical Ways To Put Agents To Work</h2>
          <p className="mb-12 max-w-[650px] text-lg leading-relaxed text-muted">
            Start with the commercial hub, the setup path, and the safety resource that shows what the agent can access before it does real work.
          </p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {guideLinks.map((guide) => (
              <a key={guide.href} href={guide.href} className="card-lift block rounded-box border border-border bg-surface p-7">
                <h3 className="mb-3 text-xl font-black tracking-normal text-dark">{guide.title}</h3>
                <p className="mb-5 text-sm leading-relaxed text-muted">{guide.body}</p>
                <span className="text-sm font-semibold text-orange">Read guide</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-24">
        <div className="mx-auto max-w-[760px] px-6">
          <div className="mb-14 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-orange">FAQ</p>
            <h2 className="text-3xl font-black tracking-normal text-dark md:text-4xl">Common Questions</h2>
          </div>
          <div>
            {faqs.map((faq) => (
              <details key={faq.question} className="group border-b border-border">
                <summary className="flex cursor-pointer list-none items-center justify-between py-5 text-lg font-black tracking-normal text-dark transition-colors hover:text-blue [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <span className="ml-4 text-xl text-orange transition-transform duration-200 group-open:rotate-45">+</span>
                </summary>
                <p className="pb-5 pr-8 text-sm leading-relaxed text-muted">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-orange py-16">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(135deg, rgba(0,0,0,0.1) 25%, transparent 25%, transparent 50%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.1) 75%, transparent 75%)",
            backgroundSize: "20px 20px",
          }}
        />
        <div className="relative z-10 mx-auto max-w-[900px] px-6 text-center">
          <h2 className="mb-4 text-3xl font-black tracking-normal text-white md:text-4xl">Stop Reading About AI. Start Using It.</h2>
          <p className="mx-auto mb-8 max-w-[620px] text-lg leading-relaxed text-white/80">
            Bring one workflow. We will map what OpenClaw should do, what it should not do, and what a sensible first version looks like.
          </p>
          <a href={discoveryCallUrl} target="_blank" rel="noopener" className="inline-flex items-center justify-center rounded-btn bg-navy px-10 py-4 text-lg font-bold text-white shadow-xl transition hover:-translate-y-0.5 hover:bg-dark">
            Book a discovery call
          </a>
        </div>
      </section>

      <section id="contact" className="grain relative overflow-hidden bg-navy py-24 text-white">
        <div className="absolute bottom-0 left-[20%] h-[500px] w-[500px] rounded-full bg-orange/5 blur-[120px]" />
        <div className="absolute right-[10%] top-0 h-[400px] w-[400px] rounded-full bg-blue/5 blur-[100px]" />
        <div className="relative z-10 mx-auto max-w-[1140px] px-6">
          <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-orange">Let&apos;s Talk</p>
              <h2 className="mb-6 text-3xl font-black tracking-normal md:text-4xl">
                Book the Call.
                <br />
                <span className="text-orange">Send a Note If Needed.</span>
              </h2>
              <p className="mb-4 text-lg leading-relaxed text-white/60">
                The fastest path is the 30-minute discovery call. Use the form only if you want to send context first.
              </p>
              <div className="mb-8 rounded-box border border-white/[0.06] bg-white/[0.03] p-5">
                <p className="text-sm leading-relaxed text-white/70">
                  <span className="font-semibold text-orange">No pitch deck:</span> Discovery calls are 30 minutes. If the work is not a fit, you get a referral.
                </p>
              </div>
              <div className="space-y-4 text-sm text-white/50">
                <a href="mailto:contact@bluecanvas.ai" className="block transition hover:text-white">contact@bluecanvas.ai</a>
                <span className="block">Derry, Northern Ireland - UK and remote</span>
              </div>
            </div>
            <div className="rounded-box border border-white/[0.06] bg-white/[0.03] p-8">
              <h3 className="mb-1 text-xl font-black tracking-normal text-white">Book a Discovery Call</h3>
              <p className="mb-6 text-sm text-white/40">30 minutes via booking link</p>
              <a href={discoveryCallUrl} target="_blank" rel="noopener" className="mb-6 inline-flex w-full items-center justify-center rounded-btn bg-orange px-8 py-3.5 text-sm font-semibold text-white shadow-glow-orange transition hover:-translate-y-0.5 hover:bg-orange-hover">
                Book a discovery call
              </a>
              <div className="mb-6 h-px bg-white/10" />
              <p className="mb-5 text-sm leading-relaxed text-white/45">
                Prefer email first? Send a short message below. The workflow details are optional.
              </p>
              <ContactForm tone="dark" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
