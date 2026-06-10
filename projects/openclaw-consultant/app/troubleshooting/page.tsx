import type { Metadata } from "next";
import { articles, articlesInCategory, categories } from "@/lib/troubleshooting";

export const metadata: Metadata = {
  title: "OpenClaw Troubleshooting Guides | Real Fixes from Production Incidents",
  description:
    "Troubleshooting guides for OpenClaw operators: gateway failures, OAuth expiry, channel pairing, cron jobs, sandbox access, and update breakage — written from real incidents.",
  alternates: { canonical: "https://openclawconsultant.co.uk/troubleshooting" },
  // Stub content: keep out of the index until fix steps are owner-verified.
  // Flip to index:true when articles are published.
  robots: { index: false, follow: true },
};

export default function TroubleshootingHub() {
  return (
    <main className="bg-white">
      <header className="bg-navy text-white py-20">
        <div className="max-w-[1140px] mx-auto px-6">
          <h1 className="font-heading text-4xl md:text-5xl font-bold max-w-[700px]">
            OpenClaw Troubleshooting
          </h1>
          <p className="mt-6 text-white/75 text-lg max-w-[640px]">
            Practical fixes for the failures OpenClaw operators actually hit — drawn from running
            production agents, not from documentation theory. {articles.length} guides across{" "}
            {categories.length} categories.
          </p>
        </div>
      </header>

      <div className="max-w-[1140px] mx-auto px-6 py-16 space-y-16">
        {categories.map((category) => {
          const items = articlesInCategory(category.slug);
          if (items.length === 0) return null;
          return (
            <section key={category.slug}>
              <div className="mb-6">
                <h2 className="font-heading text-2xl font-bold text-navy">
                  <a href={`/troubleshooting/${category.slug}`} className="hover:text-orange transition-colors">
                    {category.title}
                  </a>
                </h2>
                <p className="text-muted-dark mt-1">{category.description}</p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {items.map((article) => (
                  <a
                    key={article.slug}
                    href={`/troubleshooting/${category.slug}/${article.slug}`}
                    className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light"
                  >
                    <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-sm text-muted-dark mt-2">{article.metaDescription}</p>
                    <span className="text-orange text-sm font-semibold mt-3 inline-block">Read guide →</span>
                  </a>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
}
