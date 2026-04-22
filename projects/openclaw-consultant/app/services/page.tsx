import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "AI Automation Services UK | OpenClaw Consulting & Delivery",
  description:
    "Blue Canvas delivers OpenClaw setup, AI automation consulting, custom agent development, training, and enterprise rollout support for UK businesses.",
  alternates: { canonical: "https://openclawconsultant.co.uk/services" },
  openGraph: {
    title: "AI Automation Services UK | OpenClaw Consulting & Delivery",
    description:
      "Explore Blue Canvas services for OpenClaw setup, workflow automation, custom builds, training, and enterprise delivery.",
    url: "https://openclawconsultant.co.uk/services",
    type: "website",
  },
};

const serviceCards = [
  {
    href: "/services/openclaw-installation",
    title: "OpenClaw Installation",
    label: "Foundation",
    description:
      "Get the environment, channels, permissions, and baseline operating pattern in place properly.",
  },
  {
    href: "/services/setup-configuration",
    title: "Setup & Configuration",
    label: "Configuration",
    description:
      "Shape models, memory, tools, approvals, and working rules around the first business workflow.",
  },
  {
    href: "/services/ai-agent-consulting",
    title: "AI Agent Consulting",
    label: "Advisory",
    description:
      "Clarify what should be automated, where approval stays human, and what a sensible rollout looks like.",
  },
  {
    href: "/services/custom-agent-development",
    title: "Custom Agent Development",
    label: "Build",
    description:
      "Create bespoke skills, automations, and integrations when the workflow needs more than generic setup.",
  },
  {
    href: "/services/small-business-automation",
    title: "Small Business Automation",
    label: "SME",
    description:
      "Start with one painful process, prove value quickly, and avoid buying a larger stack before it is earned.",
  },
  {
    href: "/services/training-support",
    title: "Training & Support",
    label: "Enablement",
    description:
      "Give the team a clearer operating model, practical training, and support that protects trust after launch.",
  },
  {
    href: "/services/enterprise-openclaw",
    title: "Enterprise OpenClaw",
    label: "Enterprise",
    description:
      "Handle governance, risk, access, and rollout design when OpenClaw touches multiple teams or critical workflows.",
  },
];

const deliverySteps = [
  {
    title: "Assess the workflow first",
    description:
      "Every serious engagement starts by narrowing the workflow, owner, and success measure. Tooling decisions come after that.",
  },
  {
    title: "Design the controls",
    description:
      "We map permissions, approval points, fallback paths, and the systems the workflow will touch before anything goes live.",
  },
  {
    title: "Build the smallest useful version",
    description:
      "The first delivery should be controlled, measurable, and easy to review. Narrow proof beats a broad transformation promise.",
  },
  {
    title: "Train and improve",
    description:
      "Once the workflow is live, the job is to tighten handover, document the rules, and use the early learning to improve it.",
  },
];

const fitSignals = [
  "You already know which workflow is slow, repetitive, or messy.",
  "The work touches real customers, real money, or sensitive internal operations.",
  "The team needs better guardrails than a DIY rollout is likely to create.",
  "You want a narrower, commercially defensible first deployment rather than AI theatre.",
];

const industryLinks = [
  { href: "/guides/ai-agents-solicitors", title: "Legal teams" },
  { href: "/guides/ai-agents-accountants", title: "Accountants" },
  { href: "/guides/ai-agents-estate-agents", title: "Property businesses" },
  { href: "/guides/ai-agents-recruitment-agencies", title: "Recruitment agencies" },
  { href: "/guides/ai-for-dentists-uk", title: "Dental practices" },
  { href: "/guides/ai-for-gyms-uk", title: "Gyms and studios" },
];

export default function ServicesIndexPage() {
  return (
    <>
      <section className="hero-gradient relative overflow-hidden pt-32 pb-20 grain">
        <div className="absolute top-16 right-[10%] h-[360px] w-[360px] rounded-full bg-orange/5 blur-[120px]" />
        <div className="absolute bottom-10 left-[6%] h-[280px] w-[280px] rounded-full bg-blue/10 blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-[1140px] px-6">
          <div className="max-w-[760px]">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5">
              <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm font-medium text-white/60">UK delivery for OpenClaw and AI workflows</span>
            </div>

            <h1 className="mb-6 font-heading text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-[3.2rem]">
              AI Automation
              <br />
              <span className="text-orange">Services</span>
            </h1>

            <p className="mb-10 max-w-[680px] text-lg leading-relaxed text-white/70 md:text-xl">
              Blue Canvas helps UK businesses move from AI interest to useful delivery. The work is practical:
              choose the right workflow, set the right guardrails, and get something live that earns the next step.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#services-list"
                className="inline-flex items-center justify-center rounded-xl bg-orange px-8 py-4 text-base font-semibold text-white shadow-glow-orange transition-all hover:-translate-y-0.5 hover:bg-orange-hover"
              >
                Explore services
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-white/10"
              >
                Book a consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-[1140px] grid-cols-1 gap-8 px-6 text-center md:grid-cols-3">
          <div>
            <div className="mb-2 text-4xl font-bold text-orange">1 workflow</div>
            <div className="text-muted">Usually the best place to start</div>
          </div>
          <div>
            <div className="mb-2 text-4xl font-bold text-orange">3 layers</div>
            <div className="text-muted">Assessment, delivery, and support</div>
          </div>
          <div>
            <div className="mb-2 text-4xl font-bold text-orange">Clear controls</div>
            <div className="text-muted">Permissions, approvals, and ownership built in</div>
          </div>
        </div>
      </section>

      <section id="services-list" className="bg-surface py-24">
        <div className="mx-auto max-w-[1140px] px-6">
          <div className="mb-12 max-w-[760px]">
            <h2 className="mb-4 font-heading text-3xl font-bold text-navy md:text-4xl">Service lines that map to real delivery</h2>
            <p className="text-lg leading-relaxed text-muted-dark">
              Some businesses need installation. Some need rollout design. Some need custom build work. These pages are structured around the actual delivery problem, not vague AI packaging.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {serviceCards.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group rounded-2xl border border-border-light bg-white p-7 shadow-card transition-all hover:-translate-y-1 hover:shadow-card-hover"
              >
                <span className="mb-4 inline-block rounded-full bg-orange/10 px-3 py-1 text-xs font-medium text-orange">
                  {service.label}
                </span>
                <h3 className="mb-3 font-heading text-xl font-bold text-navy transition-colors group-hover:text-orange">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-dark">{service.description}</p>
                <span className="mt-5 inline-block text-sm font-semibold text-orange">View service →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1140px] px-6">
          <div className="mb-12 max-w-[760px]">
            <h2 className="mb-4 font-heading text-3xl font-bold text-dark md:text-4xl">How Blue Canvas usually delivers the work</h2>
            <p className="text-lg leading-relaxed text-muted-dark">
              The process is meant to keep automation boring in the right way: ownership is clear, risk is visible, and the first live workflow is narrow enough to trust.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {deliverySteps.map((step, index) => (
              <div key={step.title} className="rounded-2xl border border-border-light bg-light p-8">
                <div className="mb-3 text-sm font-semibold text-orange">Step {index + 1}</div>
                <h3 className="mb-3 font-heading text-2xl font-bold text-dark">{step.title}</h3>
                <p className="leading-relaxed text-muted-dark">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-24 text-white">
        <div className="mx-auto grid max-w-[1140px] gap-12 px-6 lg:grid-cols-[minmax(0,1.1fr)_360px]">
          <div>
            <h2 className="mb-4 font-heading text-3xl font-bold md:text-4xl">When businesses usually contact us</h2>
            <p className="mb-8 text-lg leading-relaxed text-white/70">
              Most enquiries are not really about AI. They are about delay, inconsistency, handoff friction, or the sense that a process should work better than it does today.
            </p>
            <div className="space-y-4">
              {fitSignals.map((signal) => (
                <div key={signal} className="flex items-start gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5 text-white/75">
                  <span className="mt-0.5 text-orange">✓</span>
                  <span>{signal}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/[0.08] bg-white/[0.04] p-8">
            <h3 className="mb-4 font-heading text-2xl font-bold">Industry examples</h3>
            <p className="mb-6 text-sm leading-relaxed text-white/65">
              The same delivery logic shows up across different sectors. The workflow changes. The need for sensible rollout and guardrails does not.
            </p>
            <div className="space-y-3">
              {industryLinks.map((item) => (
                <Link key={item.href} href={item.href} className="block rounded-xl border border-white/[0.08] px-4 py-3 text-sm text-white/75 transition-colors hover:border-orange/30 hover:text-white">
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-surface py-24">
        <div className="mx-auto max-w-[1140px] px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 font-heading text-3xl font-bold text-navy md:text-4xl">
                Need the right
                <br />
                <span className="text-orange">starting point?</span>
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-muted-dark">
                Tell Blue Canvas what workflow is slow, messy, or too manual today. We will tell you whether the next move is setup, rollout support, custom development, or something simpler.
              </p>
              <div className="rounded-2xl border border-border-light bg-white p-6 shadow-card">
                <p className="text-sm leading-relaxed text-muted-dark">
                  Good engagements usually start with a narrow question: what should go live first, where should approval stay, and what number should improve if the work is worth doing.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-white/[0.06] bg-navy p-8">
              <h3 className="mb-1 font-heading text-xl font-bold text-white">Book a service review</h3>
              <p className="mb-6 text-sm text-white/50">Tell us what workflow you want to improve</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
