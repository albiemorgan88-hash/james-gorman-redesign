import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { articlesInCategory, categories, getCategory } from "@/lib/troubleshooting";

interface Props {
  params: Promise<{ category: string }>;
}

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getCategory(slug);
  if (!category) return {};
  return {
    title: `${category.title} | OpenClaw Troubleshooting`,
    description: category.description,
    alternates: { canonical: `https://openclawconsultant.co.uk/troubleshooting/${category.slug}` },
    // Stub content: keep out of the index until fix steps are owner-verified.
    robots: { index: false, follow: true },
  };
}

export default async function TroubleshootingCategory({ params }: Props) {
  const { category: slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  const items = articlesInCategory(category.slug);

  return (
    <main className="bg-white">
      <header className="bg-navy text-white py-16">
        <div className="max-w-[1140px] mx-auto px-6">
          <nav className="text-sm text-white/60 mb-4">
            <a href="/troubleshooting" className="hover:text-orange">Troubleshooting</a>
          </nav>
          <h1 className="font-heading text-3xl md:text-4xl font-bold">{category.title}</h1>
          <p className="mt-4 text-white/75 max-w-[640px]">{category.description}</p>
        </div>
      </header>
      <div className="max-w-[1140px] mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-6">
          {items.map((article) => (
            <a
              key={article.slug}
              href={`/troubleshooting/${category.slug}/${article.slug}`}
              className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light"
            >
              <h2 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">
                {article.title}
              </h2>
              <p className="text-sm text-muted-dark mt-2">{article.metaDescription}</p>
              <span className="text-orange text-sm font-semibold mt-3 inline-block">Read guide →</span>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
