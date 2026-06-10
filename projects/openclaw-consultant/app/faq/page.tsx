import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "OpenClaw FAQ | Setup, Pricing, Security & Support",
  description:
    "Answers to common questions about OpenClaw setup, pricing, security, delivery, and Blue Canvas consulting support for UK businesses.",
  alternates: { canonical: "https://openclawconsultant.co.uk/faq" },
  openGraph: {
    title: "OpenClaw FAQ | Setup, Pricing, Security & Support",
    description:
      "Straight answers to common questions about OpenClaw, AI workflow delivery, pricing, guardrails, and support.",
    url: "https://openclawconsultant.co.uk/faq",
    type: "website",
  },
};

const faqGroups = [
  {
    title: "About OpenClaw",
    items: [
      {
        question: "What is OpenClaw in practical terms?",
        answer:
          "OpenClaw is an AI operating environment that can combine memory, tools, browser work, file handling, recurring tasks, and multi-step workflows. In practice, that makes it much closer to an operational assistant than a normal chat interface.",
      },
      {
        question: "How is OpenClaw different from ChatGPT or a standard chatbot?",
        answer:
          "A chatbot answers messages. OpenClaw can sit inside a workflow, use tools, keep context, and interact with other systems over time. The difference is not just better conversation. It is the ability to do structured work.",
      },
      {
        question: "Does every business need OpenClaw specifically?",
        answer:
          "No. Some problems need a lighter automation stack. A good consultant should be willing to say that instead of forcing the same platform onto every workflow.",
      },
    ],
  },
  {
    title: "Setup and delivery",
    items: [
      {
        question: "What usually happens first in an engagement?",
        answer:
          "The first step is usually to narrow the workflow, define the owner, and decide what result should improve. Installation or build work comes after the first use case is clear enough.",
      },
      {
        question: "How long does OpenClaw setup usually take?",
        answer:
          "Basic setup can move quickly. The bigger variable is not installation time but how clearly the first business workflow is defined and how many systems need to be wired in safely.",
      },
      {
        question: "Do you only do setup, or can you help after go-live?",
        answer:
          "Blue Canvas can help with setup, rollout design, custom development, training, and ongoing support. The right level depends on how much internal ownership the business wants to keep.",
      },
      {
        question: "Can you help rescue an existing OpenClaw setup?",
        answer:
          "Yes. Many businesses ask for help once an early setup becomes messy, too permissive, or hard to trust. Auditing the current state is often the best place to begin.",
      },
    ],
  },
  {
    title: "Pricing and scope",
    items: [
      {
        question: "How should buyers think about pricing?",
        answer:
          "The useful question is what the budget is buying: a technical install, a controlled pilot, a production workflow, or ongoing support. Narrow, well-scoped work is usually cheaper and more valuable than a vague broad programme.",
      },
      {
        question: "Is it better to start with one workflow?",
        answer:
          "Usually yes. One proven workflow creates better evidence, cleaner internal trust, and a stronger basis for the next investment decision.",
      },
      {
        question: "What should a proposal make clear?",
        answer:
          "Scope, systems touched, ownership, approvals, success measures, and what happens after launch. If those are fuzzy, the work is too vague to buy confidently.",
      },
    ],
  },
  {
    title: "Security and control",
    items: [
      {
        question: "Is OpenClaw safe for business use?",
        answer:
          "It can be, but only if permissions, approvals, access, and data handling are designed deliberately. The platform is capable, which means guardrails matter from day one.",
      },
      {
        question: "Do humans need to stay in the loop?",
        answer:
          "Yes, wherever downside, brand risk, compliance exposure, or customer trust matter. Good automation keeps human judgement where it actually belongs.",
      },
      {
        question: "Who should own an OpenClaw workflow internally?",
        answer:
          "A named person or team should own the workflow, review issues, and make decisions about expansion. Shared excitement is not the same thing as ownership.",
      },
      {
        question: "Can OpenClaw work with existing systems?",
        answer:
          "Often yes, but the integration design needs to be honest about what the workflow really needs. Sometimes a lighter integration is enough. Sometimes deeper orchestration is justified.",
      },
    ],
  },
] as const;

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqGroups.flatMap((group) =>
    group.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    }))
  ),
};

export default function FaqPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c") }} />

      <section className="hero-gradient relative overflow-hidden pt-32 pb-20 grain">
        <div className="absolute top-16 right-[10%] h-[360px] w-[360px] rounded-full bg-orange/5 blur-[120px]" />
        <div className="absolute bottom-10 left-[6%] h-[280px] w-[280px] rounded-full bg-blue/10 blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-[1140px] px-6">
          <div className="max-w-[760px]">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5">
              <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm font-medium text-white/60">Straight answers before you commit budget</span>
            </div>

            <h1 className="mb-6 font-heading text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-[3.2rem]">
              OpenClaw
              <br />
              <span className="text-orange">FAQ</span>
            </h1>

            <p className="text-lg leading-relaxed text-white/70 md:text-xl">
              The practical questions buyers usually ask about OpenClaw, AI workflow delivery, guardrails, pricing, and what good support should actually look like.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-[1140px] grid-cols-1 gap-8 px-6 text-center md:grid-cols-3">
          <div>
            <div className="mb-2 text-4xl font-bold text-orange">4 areas</div>
            <div className="text-muted">Platform, delivery, pricing, and control</div>
          </div>
          <div>
            <div className="mb-2 text-4xl font-bold text-orange">Plain English</div>
            <div className="text-muted">Answers written for buyers, not platform obsessives</div>
          </div>
          <div>
            <div className="mb-2 text-4xl font-bold text-orange">Real concerns</div>
            <div className="text-muted">Ownership, approvals, and what should happen first</div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-24">
        <div className="mx-auto max-w-[980px] px-6">
          <div className="mb-12 max-w-[760px]">
            <h2 className="mb-4 font-heading text-3xl font-bold text-navy md:text-4xl">Questions buyers ask most often</h2>
            <p className="text-lg leading-relaxed text-muted-dark">
              The useful answers are usually less about hype and more about workflow fit, trust, and what the first sensible deployment should be.
            </p>
          </div>

          <div className="space-y-10">
            {faqGroups.map((group) => (
              <div key={group.title}>
                <h3 className="mb-5 font-heading text-2xl font-bold text-dark">{group.title}</h3>
                <div className="space-y-4">
                  {group.items.map((item) => (
                    <details key={item.question} className="group rounded-2xl border border-border-light bg-white p-6 shadow-sm">
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading text-lg font-bold text-dark [&::-webkit-details-marker]:hidden">
                        <span>{item.question}</span>
                        <span className="text-2xl text-orange transition-transform duration-200 group-open:rotate-45">+</span>
                      </summary>
                      <p className="pt-4 leading-relaxed text-muted-dark">{item.answer}</p>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-navy py-24 text-white">
        <div className="mx-auto max-w-[1140px] px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 font-heading text-3xl font-bold md:text-4xl">
                Still unsure where to
                <br />
                <span className="text-orange">start?</span>
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-white/70">
                Send the workflow question or rollout concern. Blue Canvas will tell you whether the next move is a setup project, a pilot, an audit, or nothing yet.
              </p>
              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 text-sm leading-relaxed text-white/70">
                Good questions are specific: what process is frustrating the team, where the risk sits, and what result would make the work worth doing.
              </div>
            </div>

            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-8">
              <h3 className="mb-1 font-heading text-xl font-bold text-white">Ask your question</h3>
              <p className="mb-6 text-sm text-white/50">Tell us what you are evaluating</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
