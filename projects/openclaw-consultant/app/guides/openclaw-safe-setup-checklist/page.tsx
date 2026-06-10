import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { Button, Card, Container, Kicker, SectionIntro, SectionShell, TickList } from "@/components/Editorial";

const canonicalPath = "/guides/openclaw-safe-setup-checklist";
const canonicalUrl = `https://openclawconsultant.co.uk${canonicalPath}`;
const pageTitle = "OpenClaw Safe Setup Checklist & Permission Matrix";
const pageDescription =
  "A practical OpenClaw safe setup checklist and permission matrix for teams planning agent access, approval gates, audit logs, rollback rules, and human review.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "openclaw safe setup checklist",
    "openclaw permission matrix",
    "openclaw security checklist",
    "openclaw approval gates",
    "ai agent permissions",
    "ai agent governance",
    "openclaw deployment checklist",
  ],
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: canonicalUrl,
    type: "article",
  },
};

const checklistSections = [
  {
    title: "1. Workflow scope",
    points: [
      "Name the workflow in one sentence.",
      "Name the business owner who signs off changes.",
      "Define what a good output looks like with examples.",
      "List the systems, files, inboxes and accounts the agent may need.",
      "Decide the one metric that proves the pilot is useful.",
    ],
  },
  {
    title: "2. Data boundaries",
    points: [
      "Classify the data involved: public, internal, confidential, restricted.",
      "Remove data the agent does not need for the first pilot.",
      "Keep client data, HR data, finance data and credentials out unless reviewed.",
      "Set retention rules for prompts, transcripts, logs and generated files.",
      "Decide which sources the agent must cite before a human trusts the output.",
    ],
  },
  {
    title: "3. Tool permissions",
    points: [
      "Start with read-only access wherever possible.",
      "Separate draft permissions from send, publish, merge, deploy or delete permissions.",
      "Use dedicated service accounts instead of personal admin accounts.",
      "Rotate API keys and document where each secret is stored.",
      "Review tool access after the first week, not after the first incident.",
    ],
  },
  {
    title: "4. Human approval",
    points: [
      "Require approval before external emails, public posts, payments or production changes.",
      "Require approval before the agent changes source-of-truth records.",
      "Define who approves each action type and what evidence they need.",
      "Make refusal and escalation paths clear.",
      "Keep the human decision in the log, not just the agent output.",
    ],
  },
  {
    title: "5. Logging and rollback",
    points: [
      "Log prompt, source, tool call, output, approver and final action.",
      "Keep incident notes separate from general chat history.",
      "Define how to pause the agent quickly.",
      "Document how to reverse each approved action where reversal is possible.",
      "Review logs weekly during the pilot.",
    ],
  },
  {
    title: "6. Handover",
    points: [
      "Write operating rules in plain English.",
      "Give the team example tasks that are allowed and not allowed.",
      "Name the owner for prompt changes, skill changes and access changes.",
      "Schedule a review after the first 10 real runs.",
      "Expand only after the workflow has evidence.",
    ],
  },
];

const permissionMatrix = [
  {
    system: "Knowledge base and policy docs",
    defaultAccess: "Read",
    approvalGate: "Required before adding or replacing source-of-truth documents",
    logEvidence: "Source links, retrieved passages, owner of the document set",
  },
  {
    system: "Email inbox",
    defaultAccess: "Draft only",
    approvalGate: "Required before sending, forwarding, deleting or unsubscribing",
    logEvidence: "Original message, draft, recipient, approver, send status",
  },
  {
    system: "CRM",
    defaultAccess: "Read and propose",
    approvalGate: "Required before updating lifecycle stage, deal value or owner",
    logEvidence: "Record ID, proposed change, source evidence, approver",
  },
  {
    system: "Website or CMS",
    defaultAccess: "Draft only",
    approvalGate: "Required before publishing, deleting, redirecting or editing live pricing",
    logEvidence: "Page URL, draft diff, preview link, approver",
  },
  {
    system: "GitHub and deployment tools",
    defaultAccess: "Read and branch",
    approvalGate: "Required before merge, production deploy, environment changes or secret changes",
    logEvidence: "Branch, commit, checks, deployment target, reviewer",
  },
  {
    system: "Finance, payroll or payments",
    defaultAccess: "No direct execution",
    approvalGate: "Required for any recommendation, export or payment-related workflow",
    logEvidence: "Request source, calculation notes, human owner, final decision",
  },
  {
    system: "Client files",
    defaultAccess: "Case-by-case",
    approvalGate: "Required before processing sensitive, regulated or confidential material",
    logEvidence: "File name, classification, purpose, retention rule, reviewer",
  },
];

const permissionLevels = [
  ["No access", "The agent cannot view, infer from, modify or request the system."],
  ["Read only", "The agent can inspect approved sources and produce notes with citations."],
  ["Draft only", "The agent can prepare text, records or changes for review, but cannot send or publish."],
  ["Ask before action", "The agent can execute a narrow action only after a named human approval."],
  ["Approved automation", "The agent can run a repeated low-risk action inside monitored limits."],
];

const approvalRules = [
  "Anything public needs approval: posts, pages, messages, email campaigns and listing updates.",
  "Anything irreversible needs approval: deletes, payments, account closures, data exports and production changes.",
  "Anything sensitive needs approval: client data, HR data, finance data, legal documents and credentials.",
  "Anything that changes a source of truth needs approval: CRM stage, invoice status, project status, policy docs and dashboards.",
];

const evidencePack = [
  "Workflow owner and escalation contact",
  "Data classification notes",
  "Permission matrix with default access",
  "Approval rules and named approvers",
  "Logging fields and retention rules",
  "Rollback or pause procedure",
  "First 10 run review notes",
  "Known limits and tasks the agent must refuse",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${canonicalUrl}#article`,
      headline: pageTitle,
      description: pageDescription,
      mainEntityOfPage: canonicalUrl,
      url: canonicalUrl,
      inLanguage: "en-GB",
      publisher: { "@type": "Organization", name: "Blue Canvas AI", url: "https://bluecanvas.ai" },
      author: { "@type": "Organization", name: "Blue Canvas AI", url: "https://bluecanvas.ai" },
      isPartOf: { "@type": "WebSite", name: "OpenClaw Consultant UK", url: "https://openclawconsultant.co.uk" },
    },
    {
      "@type": "HowTo",
      "@id": `${canonicalUrl}#checklist`,
      name: "How to set up OpenClaw safely",
      description: "A practical workflow for defining OpenClaw permissions, approval gates, logging and rollback.",
      step: checklistSections.map((section, index) => ({
        "@type": "HowToStep",
        position: index + 1,
        name: section.title,
        text: section.points.join(" "),
      })),
    },
  ],
};

export default function OpenClawSafeSetupChecklistPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />

      <section className="mesh-bg border-b border-ink-200 px-6 pb-16 pt-36 md:pb-20 md:pt-40">
        <Container>
          <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-xs font-semibold text-muted-dark">
            <a href="/" className="hover:text-orange-700">Home</a>
            <span aria-hidden="true">/</span>
            <a href="/guides" className="hover:text-orange-700">Guides</a>
            <span aria-hidden="true">/</span>
            <span>Safe setup checklist</span>
          </nav>
          <Kicker>OpenClaw safety resource</Kicker>
          <h1 className="mt-5 max-w-[980px] font-heading text-6xl leading-[0.98] text-ink md:text-8xl">
            OpenClaw safe setup checklist and permission matrix.
          </h1>
          <p className="mt-6 max-w-[760px] text-lg leading-relaxed text-muted-dark md:text-xl">
            Use this before giving an OpenClaw agent access to real systems. It helps teams define data boundaries, tool permissions, approval gates, logging and rollback before the first pilot becomes operational risk.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="#checklist" className="px-8 py-4 text-base">Use the checklist</Button>
            <Button href="#matrix" variant="secondary" className="px-8 py-4 text-base">Open the matrix</Button>
          </div>
        </Container>
      </section>

      <SectionShell className="bg-white">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionIntro kicker="Why this matters" title="A useful agent is still a system with access.">
            OpenClaw becomes valuable when it can read context, use tools and carry work between sessions. That same power means setup should start with permissions, approval gates and evidence, not with a broad promise that the agent will be careful.
          </SectionIntro>
          <Card className="p-7">
            <h2 className="font-heading text-3xl text-ink">Use this for the first setup conversation</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-dark">
              This resource is not legal, security or compliance advice. It is a practical scoping tool for the early deployment plan, and a clean starting point for specialist review where regulated or sensitive data is involved.
            </p>
            <div className="mt-6">
              <TickList
                items={[
                  "Good for pilots, setup audits and team handovers",
                  "Useful before connecting email, CRM, GitHub, CMS or client file systems",
                  "Designed to expose risky assumptions early",
                ]}
              />
            </div>
          </Card>
        </Container>
      </SectionShell>

      <SectionShell id="checklist" className="bg-bg-100">
        <Container>
          <SectionIntro kicker="Checklist" title="The six setup checks.">
            Work through these before an OpenClaw agent handles real work. The aim is not to slow the project down. It is to make the first useful workflow safe enough to repeat.
          </SectionIntro>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {checklistSections.map((section) => (
              <Card key={section.title} className="p-6">
                <h2 className="font-heading text-2xl text-ink">{section.title}</h2>
                <ul className="mt-5 grid gap-3">
                  {section.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm leading-relaxed text-muted-dark">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-600 text-[11px] font-bold text-white">✓</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </Container>
      </SectionShell>

      <SectionShell id="matrix" className="bg-white">
        <Container>
          <SectionIntro kicker="Permission matrix" title="Start with the lowest useful permission.">
            The safest default is not no automation. It is the minimum useful access for the job, with clear escalation when the agent needs more power.
          </SectionIntro>

          <div className="overflow-hidden rounded-box border border-ink-200 bg-white shadow-card">
            <div className="hidden grid-cols-[1fr_0.8fr_1.4fr_1.3fr] gap-4 border-b border-ink-200 bg-ink-950 px-5 py-4 text-xs font-semibold uppercase tracking-[0.08em] text-white md:grid">
              <span>System</span>
              <span>Default access</span>
              <span>Approval gate</span>
              <span>Log evidence</span>
            </div>
            {permissionMatrix.map((row) => (
              <div key={row.system} className="grid gap-4 border-b border-ink-200 px-5 py-5 last:border-b-0 md:grid-cols-[1fr_0.8fr_1.4fr_1.3fr]">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.08em] text-muted md:hidden">System</p>
                  <p className="font-semibold text-ink">{row.system}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.08em] text-muted md:hidden">Default access</p>
                  <span className="inline-flex rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-700">{row.defaultAccess}</span>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.08em] text-muted md:hidden">Approval gate</p>
                  <p className="text-sm leading-relaxed text-muted-dark">{row.approvalGate}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.08em] text-muted md:hidden">Log evidence</p>
                  <p className="text-sm leading-relaxed text-muted-dark">{row.logEvidence}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </SectionShell>

      <SectionShell className="mesh-dark text-white">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <Kicker dark>Permission levels</Kicker>
            <h2 className="mt-3 font-heading text-5xl leading-[1.02] text-white md:text-6xl">Name the power before the agent gets it.</h2>
            <p className="mt-5 text-base leading-relaxed text-white/65">
              Permissions should be written in language the business understands. "The agent can draft a reply" and "the agent can send a reply" are very different operating decisions.
            </p>
          </div>
          <div className="grid gap-3">
            {permissionLevels.map(([level, description]) => (
              <div key={level} className="rounded-box border border-white/10 bg-white/[0.05] p-5">
                <p className="font-heading text-2xl text-white">{level}</p>
                <p className="mt-2 text-sm leading-relaxed text-white/65">{description}</p>
              </div>
            ))}
          </div>
        </Container>
      </SectionShell>

      <SectionShell className="bg-white">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionIntro kicker="Approval gates" title="Four rules that catch most risk.">
              These approval rules are deliberately simple. They are easier to remember, easier to train, and easier to audit.
            </SectionIntro>
            <div className="grid gap-3">
              {approvalRules.map((rule, index) => (
                <div key={rule} className="rounded-box border border-ink-200 bg-bg-50 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.1em] text-orange-700">Rule {index + 1}</p>
                  <p className="mt-2 text-sm font-semibold leading-relaxed text-ink">{rule}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <SectionIntro kicker="Evidence pack" title="What to keep from the pilot.">
              A setup is only safe if the next person can understand what happened, what was approved, and how to pause or reverse it.
            </SectionIntro>
            <Card className="p-7">
              <TickList items={evidencePack} columns />
            </Card>
          </div>
        </Container>
      </SectionShell>

      <SectionShell className="bg-bg-100">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <Kicker>Setup review</Kicker>
            <h2 className="mt-3 font-heading text-5xl leading-[1.02] text-ink md:text-6xl">Want this turned into your actual OpenClaw setup plan?</h2>
            <p className="mt-5 text-base leading-relaxed text-muted-dark">
              Send the workflow, the tools involved and the actions that feel risky. The first useful output is a narrow pilot scope with permissions, approvals and logging defined before build work starts.
            </p>
            <div className="mt-7 flex flex-wrap gap-3 text-sm text-muted-dark">
              <span className="rounded-full border border-ink-200 bg-white px-4 py-2">Workflow map</span>
              <span className="rounded-full border border-ink-200 bg-white px-4 py-2">Permission matrix</span>
              <span className="rounded-full border border-ink-200 bg-white px-4 py-2">Pilot controls</span>
            </div>
          </div>
          <Card className="p-7 md:p-9">
            <ContactForm />
          </Card>
        </Container>
      </SectionShell>
    </>
  );
}
