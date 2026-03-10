import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://openclawconsultant.co.uk"),
  title: {
    default: "OpenClaw Consultant UK — Expert Setup, Skills & Automation | Phil Patterson",
    template: "%s | OpenClaw Consultant UK",
  },
  description:
    "UK's leading OpenClaw consultant. Phil Patterson runs OpenClaw in production daily with 25+ custom skills. Expert setup, custom skill development, and AI agent orchestration for UK businesses. Free consultation.",
  keywords: [
    "openclaw consultant",
    "openclaw setup",
    "openclaw expert",
    "openclaw consultant UK",
    "openclaw custom skills",
    "AI agent automation UK",
    "openclaw configuration",
    "openclaw support",
  ],
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "OpenClaw Consultant UK",
    title: "OpenClaw Consultant UK — Get OpenClaw Working For Your Business",
    description:
      "Phil Patterson is the UK's leading OpenClaw consultant. 25+ custom skills, production experience, expert setup and training. Free consultation available.",
    url: "https://openclawconsultant.co.uk",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://openclawconsultant.co.uk" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "OpenClaw Consultant UK",
  description: "Expert OpenClaw setup, custom skill development, and AI agent automation for UK businesses.",
  url: "https://openclawconsultant.co.uk",
  telephone: "+447935217762",
  areaServed: { "@type": "Country", name: "United Kingdom" },
  founder: {
    "@type": "Person",
    name: "Phil Patterson",
    jobTitle: "OpenClaw Consultant",
    worksFor: { "@type": "Organization", name: "Blue Canvas AI", url: "https://bluecanvas.ai" },
  },
  priceRange: "£750 - £5000",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
