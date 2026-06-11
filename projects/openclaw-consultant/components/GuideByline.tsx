import { statSync } from "fs";
import { join } from "path";

export const GUIDE_AUTHOR = {
  name: "Phil Patterson",
  jobTitle: "Founder",
  organisation: "Blue Canvas AI",
  organisationUrl: "https://bluecanvas.ai",
} as const;

/** Last-modified date of a guide's page.tsx, as ISO yyyy-mm-dd (null if unknown). */
export function guideLastModified(canonicalPath: string): string | null {
  const slug = canonicalPath.replace(/^\/?guides\//, "").replace(/\/$/, "");
  if (!slug || slug.includes("/") || slug.includes("..")) return null;
  try {
    return statSync(join(process.cwd(), "app", "guides", slug, "page.tsx"))
      .mtime.toISOString()
      .slice(0, 10);
  } catch {
    return null;
  }
}

export function formatGuideDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

/** JSON-LD author node for guide Article schema. */
export function guideAuthorJsonLd() {
  return {
    "@type": "Person",
    name: GUIDE_AUTHOR.name,
    jobTitle: GUIDE_AUTHOR.jobTitle,
    worksFor: { "@type": "Organization", name: GUIDE_AUTHOR.organisation, url: GUIDE_AUTHOR.organisationUrl },
  };
}

export default function GuideByline({ canonicalPath, dark = true }: { canonicalPath: string; dark?: boolean }) {
  const updated = guideLastModified(canonicalPath);
  return (
    <p className={`text-sm mb-8 ${dark ? "text-white/50" : "text-muted"}`}>
      By <span className={dark ? "text-white/80 font-semibold" : "text-navy font-semibold"}>{GUIDE_AUTHOR.name}</span>
      , {GUIDE_AUTHOR.jobTitle}, {GUIDE_AUTHOR.organisation}
      {updated ? <> · Updated {formatGuideDate(updated)}</> : null}
    </p>
  );
}
