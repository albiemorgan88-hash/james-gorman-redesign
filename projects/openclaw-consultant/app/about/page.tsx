import type { Metadata } from "next";
import Hero from "@/components/Hero";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "About Blue Canvas AI | OpenClaw Consultancy UK",
  description: "Blue Canvas AI is a specialist AI consultancy based in Derry, Northern Ireland. Expert OpenClaw deployment, AI automation, and managed AI employees for UK businesses.",
  alternates: { canonical: "/about" },
  openGraph: { title: "About Blue Canvas AI | OpenClaw Consultancy UK", url: "/about" },
};

export default function About() {
  return (
    <>
      <Hero>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-5">
          About <span className="text-accent">Blue Canvas AI</span>
        </h1>
        <p className="text-lg text-white/80 max-w-[560px]">We build AI that works for a living. A specialist AI consultancy based in Derry, Northern Ireland.</p>
      </Hero>

      <section className="bg-white py-20">
        <div className="max-w-[740px] mx-auto px-6">
          <h2 className="text-2xl font-heading font-bold text-dark mb-4 mt-0">We build AI that works for a living</h2>
          <p className="text-gray mb-4 leading-relaxed">Blue Canvas AI is a specialist AI consultancy based in Derry, Northern Ireland. We deploy AI systems that handle real business operations — not demos, not proofs of concept, but production-grade AI employees that work alongside your team every day.</p>
          <p className="text-gray mb-4 leading-relaxed">Our founder, Phil Patterson, has been building technology solutions for businesses for over a decade. When OpenClaw emerged as the most capable open-source AI assistant platform available, we went deep. We&apos;ve deployed OpenClaw across multiple industries, refined the security model, built custom integrations, and developed a standardised deployment process that delivers enterprise-grade results at a fraction of the typical cost.</p>

          <h2 className="text-2xl font-heading font-bold text-dark mb-4 mt-14">Why we focus on OpenClaw</h2>
          <p className="text-gray mb-4 leading-relaxed">The AI landscape is noisy. New tools launch weekly. Most are wrappers around the same APIs with a pretty interface and a subscription fee.</p>
          <p className="text-gray mb-4 leading-relaxed">OpenClaw is different. It&apos;s open source, runs on your own hardware, and gives you genuine control over your AI infrastructure. It&apos;s also genuinely capable — handling multi-step reasoning, persistent memory, multi-channel communication, and custom skill execution in ways that closed platforms simply can&apos;t match.</p>
          <p className="text-gray mb-4 leading-relaxed">We chose to specialise because depth beats breadth. We know OpenClaw&apos;s architecture inside out. We&apos;ve hit every edge case, fixed every obscure configuration issue, and optimised every deployment pattern. That expertise is what you&apos;re buying.</p>

          <h2 className="text-2xl font-heading font-bold text-dark mb-4 mt-14">What makes us different</h2>

          {[
            { bold: "We're practitioners, not advisors.", text: "We don't write reports about AI strategy. We deploy AI systems that handle real work from day one." },
            { bold: "We're transparent.", text: "£1,500 flat rate. No discovery calls to qualify you. No proposals. No scope creep. You know exactly what you're getting and what it costs." },
            { bold: "We're UK-based.", text: "Based in Derry, working with businesses across the UK and Ireland. Same timezone, same business context, same understanding of GDPR and UK data protection requirements." },
            { bold: "We're small by design.", text: 'You work directly with the people who build your system. No account managers, no handoffs, no "I\'ll check with the team."' },
          ].map((h) => (
            <div key={h.bold} className="bg-light border-l-4 border-accent py-6 px-7 rounded-r-box my-5">
              <p className="text-dark mb-0"><strong>{h.bold}</strong> {h.text}</p>
            </div>
          ))}

          <h2 className="text-2xl font-heading font-bold text-dark mb-4 mt-14">Blue Canvas AI beyond OpenClaw</h2>
          <p className="text-gray mb-4 leading-relaxed">OpenClaw consultancy is our core offering, but Blue Canvas AI also provides:</p>
          <ul className="list-disc ml-5 text-gray mb-4 space-y-2">
            <li><strong className="text-dark">AI strategy consulting</strong> for businesses exploring AI adoption</li>
            <li><strong className="text-dark">Custom AI agent development</strong> for specific business workflows</li>
            <li><strong className="text-dark">AI training and workshops</strong> for teams wanting to understand and leverage AI</li>
            <li><strong className="text-dark">Managed AI services</strong> — ongoing operation and optimisation of your AI systems</li>
          </ul>
          <p className="text-gray mb-4 leading-relaxed">Everything we do is focused on one question: how can AI make this business more effective?</p>

          <h2 className="text-2xl font-heading font-bold text-dark mb-4 mt-14">Based in Derry, working across the UK</h2>
          <p className="text-gray mb-4 leading-relaxed">We&apos;re proudly based in Northern Ireland. We work with clients across the UK and Ireland, primarily remotely. For enterprise deployments, we travel to your site for installation and training.</p>
          <p className="text-gray mb-4 leading-relaxed">Derry is a growing tech hub with a strong talent pool and a pragmatic approach to business. It&apos;s where we choose to be.</p>
        </div>
      </section>

      <CTA
        title="Ready to work with us?"
        subtitle="Get in touch to discuss your OpenClaw deployment."
        buttons={[
          { label: "View Our Services →", href: "/services", primary: true },
          { label: "See Pricing", href: "/openclaw-pricing" },
          { label: "Get in Touch", href: "https://calendly.com/contact-bluecanvas/initial-consultation" },
        ]}
      />
    </>
  );
}
