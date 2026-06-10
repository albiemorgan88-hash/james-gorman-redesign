import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { Button, Card, Container, Kicker, SectionIntro, SectionShell, TickList } from "@/components/Editorial";
import SafeSetupLeadMagnet from "@/components/SafeSetupLeadMagnet";

const canonical = "https://openclawconsultant.co.uk/openclaw";

export const metadata: Metadata = {
  title: "OpenClaw Consultant, Setup & Implementation Guide",
  description:
    "Independent OpenClaw consultant page for setup, installation, custom skills, agent teams, security controls, pricing, and UK implementation support.",
  keywords: [
    "openclaw",
    "openclaw consultant",
    "openclaw consulting",
    "openclaw installation",
    "openclaw setup",
    "openclaw implementation",
    "openclaw agent",
    "openclaw ai",
    "openclaw custom skills",
    "openclaw support",
  ],
  alternates: { canonical },
  openGraph: {
    title: "OpenClaw Consultant, Setup & Implementation Guide",
    description:
      "A commercial OpenClaw hub for setup, installation, custom skills, agent teams, security controls, pricing, and UK implementation support.",
    url: canonical,
    type: "article",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${canonical}#webpage`,
      name: "OpenClaw Consultant, Setup & Implementation Guide",
      url: canonical,
      description:
        "Independent OpenClaw consultant page for setup, installation, custom skills, agent teams, security controls, pricing, and UK implementation support.",
      inLanguage: "en-GB",
      citation: [
        "https://docs.openclaw.ai/start/getting-started",
        "https://github.com/openclaw/openclaw",
        "https://www.digitalocean.com/resources/articles/openclaw-security-challenges",
      ],
    },
    {
      "@type": "Service",
      "@id": `${canonical}#service`,
      name: "OpenClaw consulting and implementation",
      serviceType: "OpenClaw setup, custom skills, agent workflow design and support",
      url: canonical,
      provider: {
        "@type": "ProfessionalService",
        name: "OpenClaw Consultant UK",
        url: "https://openclawconsultant.co.uk",
      },
      areaServed: [
        { "@type": "Country", name: "United Kingdom" },
        { "@type": "Place", name: "Remote" },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${canonical}#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What is OpenClaw used for?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "OpenClaw is used to run AI agents with workspace context, memory, skills, integrations, scheduled work and human review loops around real business processes.",
          },
        },
        {
          "@type": "Question",
          name: "What does an OpenClaw consultant do?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "An OpenClaw consultant helps design the workspace, configure operating rules, build custom skills, connect tools, set approval boundaries and train the team to operate agents safely.",
          },
        },
        {
          "@type": "Question",
          name: "Can OpenClaw be deployed for a business team?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Business deployments usually need access control, documented workflows, audit trails, prompt and skill governance, model routing and clear handoff procedures.",
          },
        },
      ],
    },
  ],
};

const hubLinks = [
  ["What is OpenClaw?", "/guides/what-is-openclaw-2026"],
  ["OpenClaw setup guide", "/guides/openclaw-setup-service-uk"],
  ["OpenClaw setup service", "/services/setup-configuration"],
  ["OpenClaw installation service", "/services/openclaw-installation"],
  ["OpenClaw consultant UK", "/guides/openclaw-consultant-uk"],
  ["OpenClaw implementation consultant", "/guides/openclaw-implementation-consultant-uk"],
  ["OpenClaw deployment service", "/guides/openclaw-deployment-service-uk"],
  ["OpenClaw managed service", "/guides/openclaw-managed-service-uk"],
  ["OpenClaw consultant cost", "/guides/openclaw-consultant-cost-uk"],
  ["OpenClaw safe setup checklist", "/guides/openclaw-safe-setup-checklist"],
  ["OpenClaw skills guide", "/guides/openclaw-skills-guide"],
  ["OpenClaw for business", "/guides/openclaw-for-business"],
  ["OpenClaw agent team", "/guides/openclaw-agent-team"],
  ["OpenClaw security best practices", "/guides/openclaw-security-best-practices"],
  ["OpenClaw security & compliance", "/guides/openclaw-security-compliance"],
  ["OpenClaw vs ChatGPT", "/guides/openclaw-vs-chatgpt"],
  ["OpenClaw vs Zapier & Make", "/guides/openclaw-vs-zapier-vs-make"],
  ["OpenClaw pricing explained", "/guides/openclaw-pricing-explained"],
  ["Enterprise OpenClaw deployment", "/guides/enterprise-openclaw-deployment"],
];

const implementationSteps = [
  "Map the workflow and decide what the agent is allowed to do",
  "Set workspace memory, operating rules, approval gates and escalation points",
  "Build custom skills for the tools, files, APIs and channels already in use",
  "Run a narrow pilot with logs, review loops and measurable handoff criteria",
  "Train the team and turn the pilot into a supported operating process",
];

const useCases = [
  {
    title: "Founder operating assistant",
    body: "An agent that remembers priorities, drafts updates, checks recurring tasks and keeps context across product, sales and operations work.",
  },
  {
    title: "Team workflow automation",
    body: "OpenClaw skills that connect forms, inboxes, CRM records, documents, calendars and internal checklists into one reviewed workflow.",
  },
  {
    title: "Agent team setup",
    body: "Separate research, implementation, QA and reporting agents with clear boundaries, logs and human approval before anything leaves the business.",
  },
  {
    title: "Secure business deployment",
    body: "Access rules, tool sandboxing, audit trails, model routing and fallback procedures for teams using agents on real client or operational data.",
  },
];

const dueDiligenceLinks = [
  {
    label: "Official setup reference",
    title: "OpenClaw getting started docs",
    href: "https://docs.openclaw.ai/start/getting-started",
    body:
      "Useful for checking current installation requirements, onboarding commands, Gateway status checks, model-provider setup and channel options.",
  },
  {
    label: "Source code",
    title: "OpenClaw GitHub repository",
    href: "https://github.com/openclaw/openclaw",
    body:
      "Use the official repository for releases, issue history, security advisories and source-level due diligence before production use.",
  },
  {
    label: "Security context",
    title: "OpenClaw security challenges",
    href: "https://www.digitalocean.com/resources/articles/openclaw-security-challenges",
    body:
      "A practical overview of risks such as exposed gateways, prompt injection, untrusted skills, secrets handling and why isolation matters.",
  },
  {
    label: "Cost planning",
    title: "OpenClaw pricing assumptions",
    href: "/guides/openclaw-pricing-explained",
    body:
      "Use this site's pricing guide to separate software, hosting, model usage, setup time, support and pilot-value assumptions.",
  },
];

export default function OpenClawHubPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema).replace(/</g, "\\u003c") }} />

      <section className="mesh-bg border-b border-ink-200 px-6 pb-16 pt-36 md:pb-20 md:pt-40">
        <Container>
          <Kicker>OpenClaw consultant hub</Kicker>
          <h1 className="mt-5 max-w-[980px] font-heading text-6xl leading-[0.98] text-ink md:text-8xl">
            OpenClaw setup, consulting and agent implementation.
          </h1>
          <p className="mt-6 max-w-[760px] text-lg leading-relaxed text-muted-dark md:text-xl">
            A commercial OpenClaw resource for teams that want more than a local install. Learn what OpenClaw is, how to deploy it safely, what a consultant does, and which setup path fits your business.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/#contact" className="px-8 py-4 text-base">Ask about OpenClaw setup</Button>
            <Button href="/guides/what-is-openclaw-2026" variant="secondary" className="px-8 py-4 text-base">Read the OpenClaw guide</Button>
          </div>
        </Container>
      </section>

      <SectionShell className="bg-white">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionIntro kicker="Definition" title="What is OpenClaw?">
            OpenClaw is an agent operating environment for running AI agents with workspace context, memory, custom skills, scheduled jobs, tool access and human review. In a business setting, the valuable work is usually not the install itself. It is the operating system around the agent: what it can access, what it can change, when it needs approval, and how the team checks its work.
          </SectionIntro>
          <Card className="p-7">
            <h2 className="font-heading text-3xl text-ink">Commercial OpenClaw deployment usually includes</h2>
            <div className="mt-6">
              <TickList
                items={[
                  "Workspace structure, memory rules and source-of-truth documents",
                  "Custom skills for internal tools, APIs, files and workflows",
                  "Human approval gates before outbound messages or risky changes",
                  "Scheduled jobs for reporting, checks, research and maintenance",
                  "Security boundaries, logs, handover notes and team training",
                ]}
              />
            </div>
          </Card>
        </Container>
      </SectionShell>

      <SectionShell className="bg-bg-100">
        <Container>
          <SafeSetupLeadMagnet />
        </Container>
      </SectionShell>

      <SectionShell>
        <Container>
          <SectionIntro kicker="Implementation" title="How an OpenClaw consultant helps.">
            A good OpenClaw consultant should reduce operating risk, not add AI theatre. The work is to turn a useful agent into a repeatable business process.
          </SectionIntro>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {implementationSteps.map((step, index) => (
              <Card key={step} className="p-6">
                <p className="font-heading text-4xl text-orange-700">{index + 1}</p>
                <p className="mt-4 text-sm font-semibold leading-relaxed text-ink">{step}</p>
              </Card>
            ))}
          </div>
        </Container>
      </SectionShell>

      <SectionShell className="mesh-dark text-white">
        <Container>
          <SectionIntro kicker="Use cases" title="Where OpenClaw is useful." dark>
            The strongest OpenClaw use cases are recurring workflows where context, memory, review and tool access matter.
          </SectionIntro>
          <div className="grid gap-4 md:grid-cols-2">
            {useCases.map((useCase) => (
              <Card key={useCase.title} dark className="p-7">
                <h2 className="font-heading text-3xl text-white">{useCase.title}</h2>
                <p className="mt-4 text-sm leading-relaxed text-white/65">{useCase.body}</p>
              </Card>
            ))}
          </div>
        </Container>
      </SectionShell>

      <SectionShell className="bg-white">
        <Container>
          <SectionIntro kicker="Due diligence" title="Useful sources before you deploy OpenClaw.">
            A serious OpenClaw rollout should start with the current docs, the source repository, security context and a realistic cost model. These references help keep setup decisions grounded.
          </SectionIntro>
          <div className="grid gap-4 md:grid-cols-2">
            {dueDiligenceLinks.map((source) => {
              const external = source.href.startsWith("http");

              return (
                <a
                  key={source.href}
                  href={source.href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="group rounded-[14px] border border-ink-200 bg-bg-50 p-6 hover:border-orange-300 hover:bg-orange-50 hover:shadow-card-hover"
                >
                  <span className="text-xs font-semibold uppercase tracking-[0.08em] text-orange-700">{source.label}</span>
                  <h2 className="mt-3 font-heading text-2xl text-ink group-hover:text-orange-700">{source.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-dark">{source.body}</p>
                  <p className="mt-5 text-sm font-semibold text-orange-700">{external ? "Open reference" : "Read guide"} →</p>
                </a>
              );
            })}
          </div>
        </Container>
      </SectionShell>

      <SectionShell className="bg-white">
        <Container>
          <SectionIntro kicker="OpenClaw resources" title="The main OpenClaw pages on this site.">
            These pages create a clear internal hub for Google and for buyers comparing setup, pricing, skills, deployment and ongoing support.
          </SectionIntro>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {hubLinks.map(([label, href]) => (
              <a key={href} href={href} className="rounded-[14px] border border-ink-200 bg-bg-50 p-5 text-sm font-semibold text-ink hover:border-orange-300 hover:bg-orange-50">
                {label}
                <span className="mt-2 block text-xs font-medium text-muted-dark">{href}</span>
              </a>
            ))}
          </div>
        </Container>
      </SectionShell>

      <SectionShell>
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <Kicker>Next step</Kicker>
            <h2 className="mt-3 font-heading text-5xl leading-[1.02] text-ink md:text-6xl">Need an OpenClaw setup plan?</h2>
            <p className="mt-5 text-base leading-relaxed text-muted-dark">
              Send the workflow you want an agent to handle, the tools involved, and where a human must stay in control. The first useful answer is often a narrow pilot plan rather than a broad programme.
            </p>
          </div>
          <Card className="p-7 md:p-9">
            <ContactForm />
          </Card>
        </Container>
      </SectionShell>
    </>
  );
}
