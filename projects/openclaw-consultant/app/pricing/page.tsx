import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { Button, Card, Container, Kicker, SectionIntro, SectionShell, TickList, services } from "@/components/Editorial";
import SafeSetupLeadMagnet from "@/components/SafeSetupLeadMagnet";
import { ServiceSeo } from "@/components/ServiceSeo";

const canonical = "https://openclawconsultant.co.uk/pricing";

export const metadata: Metadata = {
  title: "OpenClaw Consultant Pricing UK",
  description:
    "Transparent OpenClaw consultant pricing for setup, agentic stack builds, retainers, audits and safe deployment planning.",
  alternates: { canonical },
  openGraph: {
    title: "OpenClaw Consultant Pricing UK",
    description: "Setup, build and retainer pricing for practical OpenClaw deployments.",
    url: canonical,
    type: "website",
  },
};

const scopeNotes = [
  {
    title: "Start with a narrow workflow",
    body: "The right first project has one owner, a visible input, a useful output and a reviewable result.",
  },
  {
    title: "Price the controls",
    body: "Permissions, approvals, logs, documentation and handover are part of the build, not optional polish.",
  },
  {
    title: "Expand after evidence",
    body: "The second workflow should be funded by what the first workflow proved, not by a broad AI roadmap.",
  },
];

export default function PricingPage() {
  return (
    <>
      <ServiceSeo
        name="OpenClaw Consultant Pricing UK"
        description="Transparent OpenClaw consultant pricing for setup, agentic stack builds, retainers, audits and safe deployment planning."
        path="/pricing"
        serviceType="OpenClaw consulting pricing"
      />

      <section className="mesh-bg border-b border-ink-200 px-6 pb-16 pt-36 md:pb-20 md:pt-40">
        <Container>
          <Kicker>Pricing</Kicker>
          <h1 className="mt-5 max-w-[940px] font-heading text-6xl leading-[0.98] text-ink md:text-8xl">
            OpenClaw pricing for useful, safe agent work.
          </h1>
          <p className="mt-6 max-w-[720px] text-lg leading-relaxed text-muted-dark md:text-xl">
            Setup gets the environment running. Build work turns it into a working agent stack. Retainer support keeps the system useful, reviewed and improving after launch.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="#pricing" className="px-8 py-4 text-base">See pricing</Button>
            <Button href="/guides/openclaw-safe-setup-checklist" variant="secondary" className="px-8 py-4 text-base">Use the safety checklist</Button>
          </div>
        </Container>
      </section>

      <SectionShell id="pricing" className="bg-white">
        <Container>
          <SectionIntro kicker="Packages" title="Three sensible starting points.">
            The numbers below are designed around scoped work, not vague AI advisory time. Each package assumes a clear workflow, documented controls and practical handover.
          </SectionIntro>
          <div className="grid gap-5 lg:grid-cols-3">
            {services.map((service) => (
              <Card key={service.title} className={`relative flex h-full flex-col p-8 ${service.highlighted ? "border-2 border-orange-600 shadow-glow-orange" : ""}`}>
                {service.highlighted ? <span className="absolute right-6 top-[-13px] rounded-full bg-orange-600 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-white">Most chosen</span> : null}
                <Kicker>{service.kicker}</Kicker>
                <h2 className="mt-3 font-heading text-3xl text-ink">{service.title}</h2>
                <p className="mt-4 font-heading text-5xl text-ink">{service.price}</p>
                <p className="mt-1 text-xs text-muted">{service.subtitle} · {service.timeline}</p>
                <p className="mt-5 text-sm leading-relaxed text-muted-dark">{service.description}</p>
                <p className="mt-4 rounded-lg border border-orange-100 bg-orange-50 px-4 py-3 text-sm font-medium leading-relaxed text-orange-700">{service.bestFor}</p>
                <div className="mt-6 flex-1">
                  <TickList items={service.includes} />
                </div>
                <Button href="/#contact" variant={service.highlighted ? "orange" : "dark"} className="mt-7 w-full">{service.cta} →</Button>
              </Card>
            ))}
          </div>
        </Container>
      </SectionShell>

      <SectionShell className="bg-bg-100">
        <Container>
          <SafeSetupLeadMagnet />
        </Container>
      </SectionShell>

      <SectionShell className="bg-white">
        <Container>
          <SectionIntro kicker="How to budget" title="Do not buy an agent. Buy a controlled workflow.">
            The safest first budget is the smallest budget that proves one real process can be improved without handing the agent more access than the job needs.
          </SectionIntro>
          <div className="grid gap-5 md:grid-cols-3">
            {scopeNotes.map((note) => (
              <Card key={note.title} className="p-6">
                <h2 className="font-heading text-2xl text-ink">{note.title}</h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-dark">{note.body}</p>
              </Card>
            ))}
          </div>
        </Container>
      </SectionShell>

      <SectionShell className="mesh-dark text-white">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <Kicker dark>Scope a setup</Kicker>
            <h2 className="mt-3 font-heading text-5xl leading-[1.02] text-white md:text-6xl">Send the workflow. I will tell you the sensible first budget.</h2>
            <p className="mt-5 text-base leading-relaxed text-white/65">
              Include the systems involved, who owns the decision, and where the agent must ask before acting. That is enough to turn a rough idea into a useful setup scope.
            </p>
          </div>
          <Card dark className="p-7 md:p-9">
            <ContactForm />
          </Card>
        </Container>
      </SectionShell>
    </>
  );
}
