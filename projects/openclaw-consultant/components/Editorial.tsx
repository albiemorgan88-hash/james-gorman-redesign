import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "orange" | "dark";
  className?: string;
};

export function Kicker({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <p className={`text-[11px] font-semibold uppercase tracking-[0.16em] ${dark ? "text-orange-400" : "text-orange-700"}`}>
      {children}
    </p>
  );
}

export function Button({ href, children, variant = "primary", className = "" }: ButtonProps) {
  const styles = {
    primary: "bg-blue-700 text-white shadow-card hover:-translate-y-0.5 hover:bg-blue-800 hover:shadow-card-hover focus-visible:ring-blue-700/25",
    dark: "bg-ink-950 text-white shadow-card hover:-translate-y-0.5 hover:bg-ink-800 hover:shadow-card-hover focus-visible:ring-ink-950/25",
    secondary: "border border-ink-200 bg-white text-ink hover:-translate-y-0.5 hover:border-ink-400 hover:shadow-card-hover focus-visible:ring-blue-700/20",
    ghost: "bg-transparent text-ink hover:text-orange-700 focus-visible:ring-orange-600/20",
    orange: "bg-orange-600 text-white shadow-card hover:-translate-y-0.5 hover:bg-orange-700 hover:shadow-card-hover focus-visible:ring-orange-600/25",
  };

  return (
    <Link
      href={href}
      className={`inline-flex min-h-11 items-center justify-center rounded-full px-6 py-3 text-sm font-semibold outline-none focus-visible:ring-4 ${styles[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}

export function SectionShell({ children, className = "", id }: { children: ReactNode; className?: string; id?: string }) {
  return <section id={id} className={`px-6 py-20 md:py-24 ${className}`}>{children}</section>;
}

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-[1100px] ${className}`}>{children}</div>;
}

export function Card({ children, dark = false, className = "" }: { children: ReactNode; dark?: boolean; className?: string }) {
  return (
    <div
      className={`rounded-[14px] border p-6 transition-all duration-200 ${
        dark
          ? "border-white/10 bg-white/[0.04] text-white"
          : "border-ink-200 bg-white text-ink shadow-card hover:-translate-y-0.5 hover:border-ink-300 hover:shadow-card-hover"
      } ${className}`}
    >
      {children}
    </div>
  );
}

export function TickList({ items, dark = false, columns = false }: { items: string[]; dark?: boolean; columns?: boolean }) {
  return (
    <ul className={`grid gap-3 ${columns ? "sm:grid-cols-2" : ""}`}>
      {items.map((item) => (
        <li key={item} className={`flex gap-2 text-sm leading-relaxed ${dark ? "text-white/70" : "text-muted-dark"}`}>
          <span className="mt-0.5 font-semibold text-orange-600">✓</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function SectionIntro({
  kicker,
  title,
  children,
  center = false,
  dark = false,
}: {
  kicker: string;
  title: ReactNode;
  children?: ReactNode;
  center?: boolean;
  dark?: boolean;
}) {
  return (
    <div className={`mb-10 max-w-[760px] ${center ? "mx-auto text-center" : ""}`}>
      <Kicker dark={dark}>{kicker}</Kicker>
      <h2 className={`mt-3 font-heading text-4xl leading-[1.04] md:text-5xl ${dark ? "text-white" : "text-ink"}`}>{title}</h2>
      {children ? <div className={`mt-4 text-base leading-relaxed md:text-lg ${dark ? "text-white/65" : "text-muted-dark"}`}>{children}</div> : null}
    </div>
  );
}

export const clientLogos = ["Follow Rabbit", "JGP", "Wall Group", "Self Storage Centre", "HIP Psychology"];

export const services = [
  {
    kicker: "01 · Setup",
    title: "OpenClaw Setup",
    price: "£3,500",
    timeline: "2–3 weeks",
    subtitle: "one-off",
    description:
      "A properly structured OpenClaw deployment your team can actually operate. Workspace, memory, core skills, channels, docs, and training in one focused setup project.",
    bestFor: "Best for getting from zero to a safe, working agent.",
    includes: ["Workspace + role architecture", "Memory + knowledge structure", "5 custom starter skills", "Tool + channel integrations", "Operating runbook", "Team training session"],
    cta: "Start setup",
  },
  {
    kicker: "02 · Build",
    title: "Agentic Stack",
    price: "£6,500",
    timeline: "4–6 weeks",
    subtitle: "project",
    highlighted: true,
    description:
      "Move from one assistant to a coordinated agent team. Orchestration, security boundaries, model routing, evals, and production operating rules.",
    bestFor: "Best for teams moving from one assistant to coordinated workflows.",
    includes: ["Multi-agent workflow design", "Model + cost routing", "Sandbox + approval boundaries", "Eval pipeline + monitoring", "Production operating rules", "Handover to retainer"],
    cta: "Scope a build",
  },
  {
    kicker: "03 · Operate",
    title: "Retainer",
    price: "£950 / mo",
    timeline: "3-mo minimum",
    subtitle: "rolling",
    description:
      "The setup is the start. Retainer covers eval reviews, prompt updates, skill changes, model migrations, troubleshooting, and continued capability development.",
    bestFor: "Best for keeping live agents useful, safe and improving month by month.",
    includes: ["Monthly evals + audit", "Prompt + skill updates", "Model migration support", "New skills (2 / month)", "Priority response", "Quarterly review"],
    cta: "Add retainer",
  },
];

export const useCases = [
  {
    title: "Operations co-pilot",
    body: "Pulls from live systems, drafts weekly reporting, flags anomalies, and leaves a review trail for the human owner.",
    example: "Example output: weekly ops digest with flagged blockers.",
  },
  {
    title: "Compliance agent",
    body: "Reviews supplier documents against internal controls, identifies missing evidence, and drafts the chase workflow.",
    example: "Example output: missing-evidence list and supplier chase draft.",
  },
  {
    title: "Onboarding orchestrator",
    body: "Turns one new-starter signal into accounts, kit, calendar, training, and internal handoff actions.",
    example: "Example output: new-starter checklist, account requests and handoff notes.",
  },
  {
    title: "Sales research stack",
    body: "Researches accounts, prepares outreach drafts, enriches CRM fields, and keeps the pipeline owner in control.",
    example: "Example output: researched account pack and CRM-ready fields.",
  },
  {
    title: "Knowledge agent",
    body: "Answers from policy docs, internal notes, contracts, tickets, and saved decisions without starting from a blank chat.",
    example: "Example output: sourced answer from docs, notes and past decisions.",
  },
  {
    title: "Risk and audit assistant",
    body: "Reviews contracts, vendor questionnaires, approvals, and operational changes with a visible audit trail.",
    example: "Example output: contract risk notes and approval trail.",
  },
];

export const enterpriseCapabilities = ["SSO + RBAC", "Audit logging", "BYOK routing", "Tool sandboxing", "Eval pipelines", "Procurement support"];

export const networkLinks = [
  { name: "Blue Canvas", href: "https://bluecanvas.ai", blurb: "AI consultancy in Northern Ireland" },
  { name: "UK Trade Jobs", href: "https://uktradejobs.com", blurb: "Specialist UK trades jobs" },
  { name: "ClawRoster", href: "https://clawroster.io", blurb: "Public proof pages for agent teams" },
  { name: "Learn Blue Canvas", href: "https://learn.bluecanvas.ai", blurb: "Practical AI guides and playbooks" },
];

export const caseStudies = [
  {
    sector: "Cloud operations",
    metric: "£1k + £500/mo",
    title: "Follow Rabbit OpenClaw rollout",
    href: "/case-studies/follow-rabbit-ai-cloud-optimization",
    body:
      "A Google Cloud optimisation business using OpenClaw patterns for internal operations, onboarding workflows, knowledge capture, and repeatable team execution.",
  },
  {
    sector: "SEO automation",
    metric: "£250/mo model",
    title: "One-agent SEO agency workflow",
    href: "/case-studies/seo-agency-250-month",
    body:
      "A lean recurring-delivery system built around one OpenClaw agent handling research, production, reporting, and repeatable SEO work.",
  },
];

export const principles = [
  ["Setup is the easy part.", "Operating an agent stack is harder than installing one. The useful work is in controls, review loops, ownership, and improvement after launch."],
  ["Specifically, not generally.", "OpenClaw Consultant focuses on OpenClaw setup, custom skills, agent orchestration, and ongoing operating support."],
  ["Security first, always.", "Access, approvals, sandboxing, memory boundaries, and auditability belong in the first design pass, not the procurement clean-up."],
  ["Plain English.", "No mystique, no maximalist claims. If something is harder than it sounds, you will hear that early."],
];
