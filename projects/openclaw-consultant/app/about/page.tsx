import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { Card, Container, Kicker, SectionIntro, SectionShell, principles } from "@/components/Editorial";

export const metadata: Metadata = {
  title: "About OpenClaw Consultant | Blue Canvas AI",
  description: "OpenClaw Consultant is the specialist OpenClaw setup and agentic systems practice from Blue Canvas AI in Derry, Northern Ireland.",
  alternates: { canonical: "https://openclawconsultant.co.uk/about" },
};

export default function AboutPage() {
  return (
    <>
      <section className="mesh-bg border-b border-ink-200 px-6 pb-16 pt-36 md:pb-20 md:pt-40">
        <Container>
          <Kicker>About</Kicker>
          <h1 className="mt-5 max-w-[960px] font-heading text-6xl leading-[0.98] text-ink md:text-8xl">
            Practitioner-led. <em className="text-orange-600">Not theory-led.</em>
          </h1>
          <p className="mt-6 max-w-[720px] text-lg leading-relaxed text-muted-dark md:text-xl">
            OpenClaw Consultant is led by Phil Patterson, founder of Blue Canvas AI. Hands-on implementation translated into setups that actually run.
          </p>
        </Container>
      </section>

      <SectionShell>
        <Container className="grid gap-12 lg:grid-cols-[320px_1fr]">
          <aside>
            <div className="relative mb-5 aspect-[4/5] overflow-hidden rounded-[14px] bg-gradient-to-br from-blue-700 to-orange-500 shadow-glow">
              <div className="absolute inset-0 opacity-70 [background:var(--mesh)]" />
              <div className="absolute bottom-5 left-5 right-5 rounded-lg border border-white/15 bg-white/10 p-4 text-white backdrop-blur">
                <p className="font-semibold">Phil Patterson</p>
                <p className="mt-1 text-xs text-white/75">Founder · Blue Canvas AI / OpenClaw Consultant</p>
              </div>
            </div>
          </aside>
          <div className="max-w-[760px] space-y-5 text-lg leading-relaxed text-muted-dark">
            <p>
              Most AI consultancies hand over a strategy deck and disappear. OpenClaw Consultant exists for the next 18 months after that — when prompts drift, models change, and the workflow nobody documented breaks at the worst possible moment.
            </p>
            <p>
              The work runs out of Derry, Northern Ireland, and travels for enterprise engagements across the UK. Blue Canvas remains the wider AI consultancy; OpenClaw Consultant is the focused practice for setup, custom skills, agent teams, and operating support.
            </p>
            <p>
              Discovery calls are 30 minutes, no pitch deck. If the work is not a fit, you get a referral.
            </p>
          </div>
        </Container>
      </SectionShell>

      <SectionShell className="bg-white">
        <Container>
          <SectionIntro kicker="How I work" title="A few principles, plainly stated." />
          <div className="grid gap-7 md:grid-cols-2">
            {principles.map(([title, body]) => (
              <div key={title} className="border-t border-ink-200 pt-6">
                <h3 className="font-heading text-3xl text-ink">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-dark">{body}</p>
              </div>
            ))}
          </div>
        </Container>
      </SectionShell>

      <SectionShell className="mesh-dark text-white">
        <Container className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <div>
            <Kicker dark>Blue Canvas lineage</Kicker>
            <h2 className="mt-3 font-heading text-5xl text-white md:text-6xl">A focused practice, not a pivot.</h2>
            <p className="mt-5 text-base leading-relaxed text-white/65">
              OpenClaw Consultant is sister-brand-but-endorsed: focused enough to be specific, connected enough to inherit Blue Canvas delivery craft and proof.
            </p>
          </div>
          <Card dark className="p-8">
            <Kicker dark>Typical fit</Kicker>
            <ul className="mt-5 space-y-4 text-sm leading-relaxed text-white/70">
              <li>✓ Founder-led businesses with a real workflow bottleneck</li>
              <li>✓ Small teams moving from AI curiosity to operating systems</li>
              <li>✓ Enterprise teams needing access, audit, and rollout controls</li>
              <li>✓ Buyers who want direct delivery rather than AI theatre</li>
            </ul>
          </Card>
        </Container>
      </SectionShell>

      <section id="contact" className="bg-bg-100 px-6 py-20 md:py-24">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionIntro kicker="Contact" title="Want to see whether this is the right fit?">
            Send the workflow problem, the team context, or the rollout question. We will tell you whether the sensible next step is setup, a pilot, implementation help, or no project yet.
          </SectionIntro>
          <Card className="p-7 md:p-9">
            <ContactForm />
          </Card>
        </Container>
      </section>
    </>
  );
}
