import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { Card, Container, Kicker, SectionIntro } from "@/components/Editorial";

export const metadata: Metadata = {
  title: "Contact OpenClaw Consultant",
  description: "Tell OpenClaw Consultant what you are building. Book a discovery call or send context first.",
  alternates: { canonical: "https://openclawconsultant.co.uk/contact" },
};

export default function ContactPage() {
  return (
    <section className="mesh-bg px-6 pb-20 pt-36 md:pb-24 md:pt-40">
      <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <Kicker>Next step</Kicker>
          <h1 className="mt-5 font-heading text-6xl leading-[0.98] text-ink md:text-8xl">
            Tell me what you are <em className="text-orange-600">building.</em>
          </h1>
          <p className="mt-6 max-w-[620px] text-lg leading-relaxed text-muted-dark">
            Tell me the workflow, tools involved, and what a good outcome would look like. Most calls end with either a clear next step or a useful referral.
          </p>
          <div className="mt-8 space-y-4 rounded-[14px] bg-ink-950 p-6 text-white">
            <Kicker dark>Details</Kicker>
            <p className="text-sm leading-relaxed text-white/65">Derry, Northern Ireland · UK + remote</p>
            <p className="text-sm leading-relaxed text-white/65">Replies within one working day. No newsletter, no list.</p>
            <p className="text-sm leading-relaxed text-white/65">Useful first messages include: “I want an agent to handle X”, “I already have OpenClaw installed”, or “I need help making this safe for a team.”</p>
          </div>
        </div>
        <Card className="p-7 md:p-9">
          <SectionIntro kicker="Start with context" title="Send the short version." />
          <ContactForm />
        </Card>
      </Container>
    </section>
  );
}
