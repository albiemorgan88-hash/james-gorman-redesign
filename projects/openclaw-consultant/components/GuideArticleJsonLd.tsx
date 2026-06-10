type GuideArticleJsonLdFaq = {
  question: string;
  answer: string;
};

type GuideArticleJsonLdProps = {
  canonicalPath: string;
  title: string;
  description: string;
  faqs?: GuideArticleJsonLdFaq[];
};

function stripHtml(value: string) {
  return value.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}

export default function GuideArticleJsonLd({
  canonicalPath,
  title,
  description,
  faqs = [],
}: GuideArticleJsonLdProps) {
  const canonicalUrl = `https://openclawconsultant.co.uk${canonicalPath.startsWith("/") ? canonicalPath : `/${canonicalPath}`}`;
  const graph = [
    {
      "@type": "Article",
      "@id": `${canonicalUrl}#article`,
      headline: title,
      description,
      mainEntityOfPage: canonicalUrl,
      url: canonicalUrl,
      inLanguage: "en-GB",
      publisher: { "@type": "Organization", name: "OpenClaw Consultant UK", url: "https://openclawconsultant.co.uk" },
      author: { "@type": "Organization", name: "OpenClaw Consultant UK", url: "https://openclawconsultant.co.uk" },
      isPartOf: { "@type": "WebSite", name: "OpenClaw Consultant UK", url: "https://openclawconsultant.co.uk" },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${canonicalUrl}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://openclawconsultant.co.uk" },
        { "@type": "ListItem", position: 2, name: "Guides", item: "https://openclawconsultant.co.uk/guides" },
        { "@type": "ListItem", position: 3, name: title, item: canonicalUrl },
      ],
    },
  ];

  const schema =
    faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@graph": [
            ...graph,
            {
              "@type": "FAQPage",
              "@id": `${canonicalUrl}#faq`,
              mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: { "@type": "Answer", text: stripHtml(faq.answer) },
              })),
            },
          ],
        }
      : { "@context": "https://schema.org", "@graph": graph };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
    />
  );
}
