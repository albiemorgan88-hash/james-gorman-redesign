import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCategory, getGuidesForCategory, guideCategories } from "@/lib/guides";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return guideCategories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) return {};
  const title = `${category.name} | OpenClaw Guides`;
  return {
    title,
    description: category.description,
    alternates: { canonical: `https://openclawconsultant.co.uk/guides/category/${category.slug}` },
    openGraph: {
      title,
      description: category.description,
      url: `https://openclawconsultant.co.uk/guides/category/${category.slug}`,
      type: "website",
    },
  };
}

export default async function GuideCategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  const guides = getGuidesForCategory(category.slug);
  if (guides.length === 0) notFound();

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://openclawconsultant.co.uk" },
      { "@type": "ListItem", position: 2, name: "Guides", item: "https://openclawconsultant.co.uk/guides" },
      {
        "@type": "ListItem",
        position: 3,
        name: category.name,
        item: `https://openclawconsultant.co.uk/guides/category/${category.slug}`,
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <section className="hero-gradient relative overflow-hidden pt-32 pb-16">
        <div className="max-w-[1140px] mx-auto px-6 relative z-10">
          <nav className="text-sm text-white/50 mb-6">
            <a href="/guides" className="hover:text-orange transition-colors">Guides</a>
            <span className="mx-2">/</span>
            <span className="text-white/80">{category.name}</span>
          </nav>
          <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            {category.name}
          </h1>
          <p className="text-white/60 text-lg max-w-[680px] leading-relaxed">{category.description}</p>
          <p className="text-white/40 text-sm mt-4">{guides.length} guides</p>
        </div>
      </section>

      <section className="py-16 bg-surface">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {guides.map((guide) => (
              <a
                key={guide.href}
                href={guide.href}
                className="group bg-white rounded-xl p-5 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 border border-border-light"
              >
                <h2 className="font-heading text-base font-bold text-navy group-hover:text-orange transition-colors leading-snug mb-2">
                  {guide.title}
                </h2>
                <span className="text-orange text-sm font-semibold">Read Guide →</span>
              </a>
            ))}
          </div>
          <div className="mt-12">
            <a href="/guides" className="text-orange font-semibold hover:underline">← All guide categories</a>
          </div>
        </div>
      </section>
    </>
  );
}
