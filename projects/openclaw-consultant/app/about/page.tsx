import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "About Blue Canvas AI | OpenClaw Consultancy UK",
  description:
    "Learn how Blue Canvas approaches OpenClaw consulting, AI workflow delivery, and practical automation for UK businesses.",
  alternates: { canonical: "https://openclawconsultant.co.uk/about" },
  openGraph: {
    title: "About Blue Canvas AI | OpenClaw Consultancy UK",
    description:
      "Blue Canvas helps UK businesses deploy OpenClaw and AI workflows with practical guardrails, clear ownership, and commercial focus.",
    url: "https://openclawconsultant.co.uk/about",
    type: "website",
  },
};

const principles = [
  {
    title: "We build around workflows, not demos",
    description:
      "The useful question is not whether AI looks clever. It is whether a real business process gets faster, cleaner, or easier to trust.",
  },
  {
    title: "We keep the first deployment narrow",
    description:
      "A controlled first workflow teaches more than a broad transformation plan. It also makes the second decision easier.",
  },
  {
    title: "We take guardrails seriously",
    description:
      "Approvals, permissions, ownership, and fallback paths matter from the start, especially where data, spend, or customer experience is involved.",
  },
  {
    title: "We prefer plain English over AI theatre",
    description:
      "If the team cannot explain what the workflow does, where the risk sits, and why it matters commercially, the delivery is not ready yet.",
  },
];

const reasons = [
  "Open source infrastructure and genuine control",
  "Persistent memory, skills, browser actions, and long-running workflows",
  "Clearer route from setup to useful business operations",
  "Better fit for businesses that want something they can actually shape",
];

const sectors = [
  "Professional services",
  "Property and estate agencies",
  "Recruitment and lead-driven teams",
  "Accountancy and finance operations",
  "SMEs that need repeatable internal automation",
  "Teams exploring more controlled AI rollout",
];

export default function AboutPage() {
  return (
    <>
      <section className="hero-gradient relative overflow-hidden pt-32 pb-20 grain">
        <div className="absolute top-16 right-[10%] h-[360px] w-[360px] rounded-full bg-orange/5 blur-[120px]" />
        <div className="absolute bottom-10 left-[6%] h-[280px] w-[280px] rounded-full bg-blue/10 blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-[1140px] px-6">
          <div className="max-w-[760px]">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5">
              <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm font-medium text-white/60">About Blue Canvas</span>
            </div>

            <h1 className="mb-6 font-heading text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-[3.2rem]">
              We build AI
              <br />
              <span className="text-orange">that works for a living</span>
            </h1>

            <p className="text-lg leading-relaxed text-white/70 md:text-xl">
              Blue Canvas is a UK consultancy focused on practical OpenClaw delivery and workflow automation. The job is simple: get something useful live, make the operating rules clear, and keep the work commercially grounded.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-[1140px] gap-12 px-6 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div>
            <h2 className="mb-6 font-heading text-3xl font-bold text-dark md:text-4xl">How we think about the work</h2>
            <div className="space-y-6 text-lg leading-relaxed text-muted-dark">
              <p>
                Blue Canvas treats OpenClaw as operating infrastructure, not just another AI interface. That means the delivery work is not only about prompts or models. It is about channels, permissions, memory, approvals, ownership, and the first workflow that actually matters.
              </p>
              <p>
                We focus on the point where AI becomes operational. For some businesses that starts with installation and setup. For others it starts with a workflow review, a pilot, or a narrower implementation question. The common thread is that the work has to stand up commercially, not just technically.
              </p>
              <p>
                The goal is not to create dependency on a mysterious system. The goal is to leave the business with something easier to understand, easier to trust, and easier to improve.
              </p>
            </div>
          </div>

          <aside className="rounded-3xl bg-navy p-8 text-white shadow-card">
            <h3 className="mb-4 font-heading text-2xl font-bold">Based in Derry</h3>
            <p className="mb-4 text-sm leading-relaxed text-white/70">
              Blue Canvas works with teams across the UK from Derry, Northern Ireland. The delivery model is remote-first, practical, and suited to businesses that want the work done without unnecessary ceremony.
            </p>
            <p className="text-sm leading-relaxed text-white/70">
              Same timezone, UK business context, and a preference for straight answers over polished theatre.
            </p>
          </aside>
        </div>
      </section>

      <section className="bg-surface py-24">
        <div className="mx-auto max-w-[1140px] px-6">
          <div className="mb-12 max-w-[760px]">
            <h2 className="mb-4 font-heading text-3xl font-bold text-navy md:text-4xl">Principles that shape delivery</h2>
            <p className="text-lg leading-relaxed text-muted-dark">
              These principles are what keep the work useful when the first enthusiasm wears off and the workflow has to hold up in normal business conditions.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {principles.map((item) => (
              <div key={item.title} className="rounded-2xl border border-border-light bg-white p-8 shadow-card">
                <h3 className="mb-3 font-heading text-2xl font-bold text-dark">{item.title}</h3>
                <p className="leading-relaxed text-muted-dark">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-[1140px] gap-12 px-6 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 font-heading text-3xl font-bold text-dark md:text-4xl">Why we focus on OpenClaw</h2>
            <p className="mb-6 text-lg leading-relaxed text-muted-dark">
              The AI market is crowded with thin wrappers and broad promises. OpenClaw is more demanding than that, but it is also more capable for businesses that need persistent context, real tool access, and workflows that can keep running beyond a chat window.
            </p>
            <div className="space-y-4">
              {reasons.map((reason) => (
                <div key={reason} className="flex items-start gap-3 rounded-2xl border border-border-light bg-light p-5">
                  <span className="mt-0.5 text-orange">✓</span>
                  <span className="text-muted-dark">{reason}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-navy p-8 text-white">
            <h3 className="mb-4 font-heading text-2xl font-bold">Where the work tends to fit</h3>
            <p className="mb-6 text-sm leading-relaxed text-white/70">
              Blue Canvas usually works with businesses where communication, process, follow-up, and information handling create the operational drag.
            </p>
            <div className="grid gap-3">
              {sectors.map((sector) => (
                <div key={sector} className="rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm text-white/75">
                  {sector}
                </div>
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
                Want to see whether
                <br />
                <span className="text-orange">Blue Canvas is the right fit?</span>
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-muted-dark">
                Send the workflow problem, the team context, or the rollout question. We will tell you whether the sensible next step is setup, a pilot, implementation help, or no project yet.
              </p>
              <div className="rounded-2xl border border-border-light bg-white p-6 shadow-card">
                <p className="text-sm leading-relaxed text-muted-dark">
                  The best first conversations are specific: what process is slow, what outcome matters, and where human judgement still needs to stay in the loop.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-white/[0.06] bg-navy p-8">
              <h3 className="mb-1 font-heading text-xl font-bold text-white">Book a consultation</h3>
              <p className="mb-6 text-sm text-white/50">Tell us what you are trying to improve</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
