import type { Metadata } from "next";
import { notFound } from "next/navigation";
import TroubleshootingArticle from "@/components/TroubleshootingArticle";
import { articles, getArticle } from "@/lib/troubleshooting";

interface Props {
  params: Promise<{ category: string; slug: string }>;
}

export function generateStaticParams() {
  return articles.map((a) => ({ category: a.category, slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: `${article.title} | OpenClaw Troubleshooting`,
    description: article.metaDescription,
    alternates: {
      canonical: `https://openclawconsultant.co.uk/troubleshooting/${article.category}/${article.slug}`,
    },
    // Stub content: keep out of the index until fix steps are owner-verified.
    robots: { index: false, follow: true },
  };
}

export default async function TroubleshootingArticlePage({ params }: Props) {
  const { category, slug } = await params;
  const article = getArticle(slug);
  if (!article || article.category !== category) notFound();
  return <TroubleshootingArticle article={article} />;
}
