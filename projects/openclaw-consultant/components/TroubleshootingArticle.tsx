import { discoveryCallUrl } from "@/components/booking";
import { AUTHOR, TODO_OWNER, TroubleshootingArticle as Article, getCategory } from "@/lib/troubleshooting";

function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

export default function TroubleshootingArticle({ article }: { article: Article }) {
  const category = getCategory(article.category);
  const hasRealFixSteps = Array.isArray(article.fixSteps);
  const hasRealCause = Array.isArray(article.cause);

  const jsonLd: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: article.title,
    description: article.metaDescription,
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    author: {
      "@type": "Person",
      name: AUTHOR.name,
      jobTitle: AUTHOR.jobTitle,
      worksFor: { "@type": "Organization", name: AUTHOR.organisation, url: "https://bluecanvas.ai" },
    },
    mainEntityOfPage: `https://openclawconsultant.co.uk/troubleshooting/${article.category}/${article.slug}`,
  };

  // HowTo schema is only emitted once real, owner-verified fix steps exist.
  if (hasRealFixSteps) {
    jsonLd.hasPart = {
      "@type": "HowTo",
      name: `How to fix: ${article.title}`,
      step: (article.fixSteps as string[]).map((text, i) => ({
        "@type": "HowToStep",
        position: i + 1,
        text,
      })),
    };
  }

  return (
    <article className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <header className="bg-navy text-white py-16">
        <div className="max-w-[800px] mx-auto px-6">
          <nav className="text-sm text-white/60 mb-4">
            <a href="/troubleshooting" className="hover:text-orange">Troubleshooting</a>
            {category ? (
              <>
                <span className="mx-2">/</span>
                <a href={`/troubleshooting/${category.slug}`} className="hover:text-orange">{category.title}</a>
              </>
            ) : null}
          </nav>
          <h1 className="font-heading text-3xl md:text-4xl font-bold">{article.title}</h1>
          <p className="mt-4 text-white/70 text-sm">
            By {AUTHOR.name}, {AUTHOR.jobTitle}, {AUTHOR.organisation} · Published {formatDate(article.datePublished)} · Updated {formatDate(article.dateModified)}
          </p>
        </div>
      </header>

      <div className="max-w-[800px] mx-auto px-6 py-12 space-y-12">
        <section>
          <h2 className="font-heading text-2xl font-bold text-navy mb-4">Symptom</h2>
          <ul className="space-y-2">
            {article.symptom.map((s) => (
              <li key={s} className="flex gap-3">
                <span className="text-orange font-bold">→</span>
                <span className="text-muted-dark">{s}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="font-heading text-2xl font-bold text-navy mb-4">Likely cause</h2>
          {hasRealCause ? (
            <ul className="space-y-2">
              {(article.cause as string[]).map((c) => (
                <li key={c} className="flex gap-3">
                  <span className="text-orange font-bold">•</span>
                  <span className="text-muted-dark">{c}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-amber-900">{TODO_OWNER}</p>
          )}
        </section>

        <section>
          <h2 className="font-heading text-2xl font-bold text-navy mb-4">Fix steps</h2>
          {hasRealFixSteps ? (
            <ol className="space-y-3 list-none">
              {(article.fixSteps as string[]).map((step, i) => (
                <li key={step} className="flex gap-4">
                  <span className="shrink-0 w-8 h-8 rounded-full bg-orange/10 text-orange font-bold flex items-center justify-center">{i + 1}</span>
                  <span className="text-muted-dark pt-1">{step}</span>
                </li>
              ))}
            </ol>
          ) : (
            <p className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-amber-900">{TODO_OWNER}</p>
          )}
        </section>

        <section className="bg-navy rounded-2xl p-8 text-white">
          <h2 className="font-heading text-2xl font-bold mb-3">When to get help</h2>
          <p className="text-white/80 mb-6">{article.whenToGetHelp}</p>
          <a
            href={discoveryCallUrl}
            className="inline-block bg-orange text-white font-semibold px-6 py-3 rounded-lg hover:bg-orange/90 transition-colors"
          >
            Book a discovery call →
          </a>
        </section>
      </div>
    </article>
  );
}
