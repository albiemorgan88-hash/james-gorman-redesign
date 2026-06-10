import Link from "next/link";

type SafeSetupLeadMagnetProps = {
  dark?: boolean;
  compact?: boolean;
  className?: string;
};

const checklistPoints = [
  "Map the workflow before choosing tools",
  "Decide read, draft, approve and execute permissions",
  "Set approval gates for external messages and risky changes",
  "Log agent actions, sources, owner decisions and rollback steps",
];

export default function SafeSetupLeadMagnet({ dark = false, compact = false, className = "" }: SafeSetupLeadMagnetProps) {
  const shell = dark
    ? "border-white/10 bg-white/[0.04] text-white"
    : "border-ink-200 bg-white text-ink shadow-card";
  const muted = dark ? "text-white/65" : "text-muted-dark";
  const label = dark ? "text-orange-400" : "text-orange-700";

  return (
    <div className={`rounded-box border ${shell} ${compact ? "p-6" : "p-7 md:p-9"} ${className}`}>
      <div className={`grid gap-8 ${compact ? "" : "lg:grid-cols-[1fr_0.9fr] lg:items-center"}`}>
        <div>
          <p className={`text-[11px] font-semibold uppercase tracking-[0.16em] ${label}`}>Free OpenClaw resource</p>
          <h2 className={`${compact ? "mt-2 text-2xl" : "mt-3 text-3xl md:text-4xl"} font-heading leading-[1.04] ${dark ? "text-white" : "text-ink"}`}>
            Safe setup checklist and permission matrix.
          </h2>
          <p className={`mt-4 text-sm leading-relaxed ${muted}`}>
            Use this before giving an agent access to files, inboxes, CRMs, production systems, or client data. It turns vague AI risk into a plain set of permissions, approvals and evidence.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/guides/openclaw-safe-setup-checklist"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-orange-600 px-6 py-3 text-sm font-semibold text-white shadow-card hover:-translate-y-0.5 hover:bg-orange-700 hover:shadow-card-hover focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-orange-600/25"
            >
              Open the checklist
            </Link>
            <Link
              href="/#contact"
              className={`inline-flex min-h-11 items-center justify-center rounded-full border px-6 py-3 text-sm font-semibold focus-visible:outline-none focus-visible:ring-4 ${
                dark
                  ? "border-white/15 bg-white/[0.03] text-white hover:bg-white/[0.08] focus-visible:ring-white/20"
                  : "border-ink-200 bg-white text-ink hover:border-ink-400 hover:shadow-card-hover focus-visible:ring-blue-700/20"
              }`}
            >
              Ask for a setup review
            </Link>
          </div>
        </div>

        {!compact ? (
          <div className={`grid gap-3 rounded-box border p-5 ${dark ? "border-white/10 bg-ink-950/30" : "border-orange-100 bg-orange-50"}`}>
            {checklistPoints.map((point) => (
              <div key={point} className="flex gap-3 text-sm leading-relaxed">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-600 text-[11px] font-bold text-white">✓</span>
                <span className={dark ? "text-white/75" : "text-muted-dark"}>{point}</span>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
