import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { Button, Card, Container, Kicker, SectionIntro, SectionShell, TickList, services } from "@/components/Editorial";
import SafeSetupLeadMagnet from "@/components/SafeSetupLeadMagnet";
import { ServiceBreadcrumb, ServiceSeo } from "@/components/ServiceSeo";

export const metadata: Metadata = {
  title: "OpenClaw Services UK — Setup, Agentic Stack & Support",
  description: "OpenClaw setup, agentic stack delivery, ongoing support, and enterprise rollout services from Blue Canvas AI.",
  alternates: { canonical: "https://openclawconsultant.co.uk/services" },
};

export default function ServicesIndexPage() {
  return (
    <>
      <ServiceSeo
        name="OpenClaw Services UK"
        description="OpenClaw setup, agentic stack delivery, ongoing support, and enterprise rollout services from Blue Canvas AI."
        path="/services"
        serviceType="OpenClaw setup, consulting and support"
      />

      <section className="mesh-bg border-b border-ink-200 px-6 pb-16 pt-36 md:pb-20 md:pt-40">
        <Container>
          <ServiceBreadcrumb current="Services" tone="light" />
          <Kicker>Services</Kicker>
          <h1 className="mt-5 max-w-[920px] font-heading text-6xl leading-[0.98] text-ink md:text-8xl">
            Pricing built around <em className="text-orange-600">real outcomes.</em>
          </h1>
          <p className="mt-6 max-w-[720px] text-lg leading-relaxed text-muted-dark">
            Three tiers, transparently priced. Setup gets you live; agentic stack scales the system; retainer keeps it useful.
          </p>
        </Container>
      </section>

      <SectionShell>
        <Container>
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
                <div className="mt-6 flex-1"><TickList items={service.includes} /></div>
                <Button href="/#contact" variant={service.highlighted ? "orange" : "dark"} className="mt-7 w-full">{service.cta} →</Button>
              </Card>
            ))}
          </div>
        </Container>
      </SectionShell>

      <SectionShell className="bg-white">
        <Container>
          <SafeSetupLeadMagnet />
        </Container>
      </SectionShell>

      <SectionShell className="mesh-dark text-white">
        <Container className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <div>
            <Kicker dark>How the work runs</Kicker>
            <h2 className="mt-3 font-heading text-5xl text-white md:text-6xl">A narrow first deployment beats a broad transformation plan.</h2>
            <p className="mt-5 text-base leading-relaxed text-white/65">
              The first engagement should prove a real workflow, make ownership visible, and leave the team with a system they can explain. Scope expands when the operating evidence supports it.
            </p>
          </div>
          <div className="grid gap-3">
            {["Assess the workflow", "Design the controls", "Build the smallest useful version", "Train, review, and improve"].map((step, index) => (
              <div key={step} className="rounded-[14px] border border-white/10 bg-white/[0.05] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-orange-400">Step {index + 1}</p>
                <p className="mt-2 font-heading text-2xl text-white">{step}</p>
              </div>
            ))}
          </div>
        </Container>
      </SectionShell>

      <section id="contact" className="bg-bg-100 px-6 py-20 md:py-24">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionIntro kicker="Start here" title="Need the right starting point?">
            Tell us what workflow is slow, messy, or too manual today. We will tell you whether the next move is setup, rollout support, custom development, or something simpler.
          </SectionIntro>
          <Card className="p-7 md:p-9">
            <ContactForm />
          </Card>
        </Container>
      </section>
    </>
  );
}
