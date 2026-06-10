import type { Metadata } from "next";
import { Button, Card, Container, Kicker, SectionIntro, SectionShell, caseStudies } from "@/components/Editorial";

export const metadata: Metadata = {
  title: "OpenClaw Case Studies & Client Examples",
  description: "OpenClaw case studies and practical examples from Blue Canvas, including operations automation, SEO delivery, and cloud workflow examples.",
  alternates: { canonical: "https://openclawconsultant.co.uk/case-studies" },
};

export default function CaseStudiesPage() {
  return (
    <>
      <section className="mesh-bg border-b border-ink-200 px-6 pb-16 pt-36 md:pb-20 md:pt-40">
        <Container>
          <Kicker>Case studies</Kicker>
          <h1 className="mt-5 max-w-[920px] font-heading text-6xl leading-[0.98] text-ink md:text-8xl">
            Real work. <em className="text-orange-600">Real proof.</em>
          </h1>
          <p className="mt-6 max-w-[700px] text-lg leading-relaxed text-muted-dark">
            Proof starts with live workflows, named case studies where permissioned, and clear examples of what was actually built.
          </p>
        </Container>
      </section>

      <SectionShell>
        <Container>
          <div className="grid gap-5 md:grid-cols-2">
            {caseStudies.map((study) => (
              <a key={study.title} href={study.href} className="group block rounded-[14px] border border-ink-200 bg-white p-7 transition-all duration-200 hover:-translate-y-0.5 hover:border-ink-300 hover:shadow-card-hover focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-700/20">
                <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                  <span className="rounded-full border border-ink-200 bg-bg-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-dark">{study.sector}</span>
                  <span className="font-heading text-xl text-orange-700">{study.metric}</span>
                </div>
                <h2 className="font-heading text-3xl leading-tight text-ink group-hover:text-orange-700">{study.title}</h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-dark">{study.body}</p>
                <p className="mt-6 text-sm font-semibold text-orange-700">Read full story →</p>
              </a>
            ))}
          </div>
        </Container>
      </SectionShell>

      <SectionShell className="bg-white">
        <Container className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <SectionIntro kicker="Proof policy" title="Specificity without overclaiming.">
            The useful case study format is simple: sector, workflow, measurable change, human approval points, and what changed after launch. That keeps proof specific without overstating private client work.
          </SectionIntro>
          <Card dark className="bg-ink-950 p-8">
            <Kicker dark>What gets recorded</Kicker>
            <ul className="mt-5 space-y-4 text-sm leading-relaxed text-white/70">
              <li>✓ Sector and workflow</li>
              <li>✓ Before and after measure</li>
              <li>✓ What OpenClaw actually did</li>
              <li>✓ Human approval points</li>
              <li>✓ What changed after launch</li>
            </ul>
          </Card>
        </Container>
      </SectionShell>

      <SectionShell className="bg-bg-100">
        <Container className="text-center">
          <Kicker>Next step</Kicker>
          <h2 className="mx-auto mt-3 max-w-[760px] font-heading text-5xl leading-[1] text-ink md:text-6xl">Build OpenClaw around your actual workflow.</h2>
          <p className="mx-auto mt-5 max-w-[620px] text-lg leading-relaxed text-muted-dark">
            Start with the process that already costs time, money, or trust. The first build should prove value before it becomes a programme.
          </p>
          <Button href="/#contact" className="mt-8">Book a discovery call →</Button>
        </Container>
      </SectionShell>
    </>
  );
}
