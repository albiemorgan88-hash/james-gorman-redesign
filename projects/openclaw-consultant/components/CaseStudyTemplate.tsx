import { discoveryCallUrl } from "@/components/booking";

export interface CaseStudySection {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface CaseStudyData {
  canonicalPath: string;
  badge: string;
  title: string;
  intro: string;
  sector: string;
  metric: string;
  sections: CaseStudySection[];
  datePublished?: string;
  dateModified?: string;
}

const AUTHOR = { name: "Phil Patterson", jobTitle: "Founder", organisation: "Blue Canvas AI" };

export default function CaseStudyTemplate({ study }: { study: CaseStudyData }) {
  const canonicalUrl = `https://openclawconsultant.co.uk${study.canonicalPath}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: study.title,
    description: study.intro,
    mainEntityOfPage: canonicalUrl,
    url: canonicalUrl,
    inLanguage: "en-GB",
    ...(study.datePublished ? { datePublished: study.datePublished } : {}),
    ...(study.dateModified ? { dateModified: study.dateModified } : {}),
    author: {
      "@type": "Person",
      name: AUTHOR.name,
      jobTitle: AUTHOR.jobTitle,
      worksFor: { "@type": "Organization", name: AUTHOR.organisation, url: "https://bluecanvas.ai" },
    },
    publisher: { "@type": "Organization", name: "Blue Canvas AI", url: "https://bluecanvas.ai" },
  };

  return (
    <article className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />

      <header className="hero-gradient relative overflow-hidden pt-32 pb-16">
        <div className="max-w-[800px] mx-auto px-6 relative z-10">
          <nav className="text-sm text-white/50 mb-6">
            <a href="/case-studies" className="hover:text-orange transition-colors">Case Studies</a>
          </nav>
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="rounded-full bg-white/5 border border-white/10 px-4 py-1.5 text-sm font-medium text-white/60">{study.badge}</span>
            <span className="rounded-full bg-orange/10 px-4 py-1.5 text-sm font-semibold text-orange">{study.metric}</span>
          </div>
          <h1 className="font-heading text-3xl md:text-5xl font-extrabold text-white mb-6 leading-[1.1]">{study.title}</h1>
          <p className="text-white/70 text-lg leading-relaxed">{study.intro}</p>
          <p className="text-white/50 text-sm mt-6">
            By <span className="text-white/80 font-semibold">{AUTHOR.name}</span>, {AUTHOR.jobTitle}, {AUTHOR.organisation}
            {study.dateModified ? <> · Updated {new Date(`${study.dateModified}T00:00:00Z`).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" })}</> : null}
          </p>
        </div>
      </header>

      <div className="max-w-[800px] mx-auto px-6 py-16 space-y-14">
        {study.sections.map((section) => (
          <section key={section.id} id={section.id}>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-5">{section.title}</h2>
            {section.paragraphs.map((text) => (
              <p key={text.slice(0, 40)} className="text-muted-dark leading-relaxed mb-4">{text}</p>
            ))}
            {section.bullets?.length ? (
              <ul className="space-y-2 mt-4">
                {section.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3">
                    <span className="text-orange font-bold">•</span>
                    <span className="text-muted-dark">{bullet}</span>
                  </li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}

        <section className="bg-navy rounded-2xl p-8 text-white">
          <h2 className="font-heading text-2xl font-bold mb-3">Want a setup like this?</h2>
          <p className="text-white/80 mb-6">Book a discovery call and we will scope the workflow, the guardrails, and what it should cost — before anything gets built.</p>
          <a href={discoveryCallUrl} className="inline-block bg-orange text-white font-semibold px-6 py-3 rounded-lg hover:bg-orange/90 transition-colors">
            Book a discovery call →
          </a>
        </section>
      </div>
    </article>
  );
}
