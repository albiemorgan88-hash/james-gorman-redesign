type ServiceSeoProps = {
  name: string;
  description: string;
  path: string;
  serviceType: string;
};

type ServiceBreadcrumbProps = {
  current: string;
  tone?: "dark" | "light";
};

const siteUrl = "https://openclawconsultant.co.uk";

function canonicalUrl(path: string) {
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

export function ServiceSeo({ name, description, path, serviceType }: ServiceSeoProps) {
  const url = canonicalUrl(path);
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        name,
        description,
        url,
        inLanguage: "en-GB",
        isPartOf: {
          "@type": "WebSite",
          name: "OpenClaw Consultant UK",
          url: siteUrl,
        },
      },
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name,
        description,
        serviceType,
        url,
        provider: {
          "@type": "ProfessionalService",
          name: "Blue Canvas AI",
          url: "https://bluecanvas.ai",
        },
        areaServed: [
          { "@type": "Country", name: "United Kingdom" },
          { "@type": "Place", name: "Remote" },
        ],
        audience: {
          "@type": "BusinessAudience",
          audienceType: "Founders, operators and teams evaluating OpenClaw for business workflows",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
          { "@type": "ListItem", position: 2, name: "Services", item: `${siteUrl}/services` },
          { "@type": "ListItem", position: 3, name, item: url },
        ],
      },
    ],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />;
}

export function ServiceBreadcrumb({ current, tone = "dark" }: ServiceBreadcrumbProps) {
  const muted = tone === "light" ? "text-ink/45" : "text-white/50";
  const link = tone === "light" ? "hover:text-ink" : "hover:text-white";
  const currentClass = tone === "light" ? "text-ink/70" : "text-white/70";

  return (
    <nav aria-label="Breadcrumb" className={`mb-6 flex flex-wrap items-center gap-2 text-xs font-semibold ${muted}`}>
      <a href="/" className={link}>Home</a>
      <span aria-hidden="true">/</span>
      <a href="/services" className={link}>Services</a>
      <span aria-hidden="true">/</span>
      <span className={`max-w-[520px] truncate ${currentClass}`}>{current}</span>
    </nav>
  );
}
