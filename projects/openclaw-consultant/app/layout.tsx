import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const instrumentSerif = Instrument_Serif({ weight: "400", subsets: ["latin"], variable: "--font-instrument-serif", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://openclawconsultant.co.uk"),
  title: {
    default: "OpenClaw Consultant UK | Setup, Skills, Agent Teams & Support",
    template: "%s | OpenClaw Consultant",
  },
  description:
    "Founder-led OpenClaw consulting from Blue Canvas AI. Setup, custom skills, agentic stacks, secure workflows and ongoing support for UK teams.",
  keywords: [
    "openclaw consultant",
    "openclaw setup",
    "openclaw expert",
    "openclaw consultant UK",
    "openclaw custom skills",
    "AI agent automation UK",
    "agentic AI consulting",
    "enterprise OpenClaw",
  ],
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "OpenClaw Consultant UK",
    title: "OpenClaw Consultant UK | Setup, Skills, Agent Teams & Support",
    description:
      "Founder-led OpenClaw consulting from Blue Canvas AI. Setup, custom skills, agentic stacks, secure workflows and ongoing support for UK teams.",
    url: "https://openclawconsultant.co.uk",
    images: [
      {
        url: "https://openclawconsultant.co.uk/api/og",
        width: 1200,
        height: 630,
        alt: "OpenClaw Consultant UK",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OpenClaw Consultant UK | Setup, Skills, Agent Teams & Support",
    description: "Founder-led OpenClaw consulting from Blue Canvas AI for setup, custom skills, agent teams and ongoing support.",
    images: ["https://openclawconsultant.co.uk/api/og"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://openclawconsultant.co.uk" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://openclawconsultant.co.uk/#business",
      name: "OpenClaw Consultant UK",
      description: "Independent OpenClaw setup, custom skill development, agent workflow design, and ongoing support for UK and remote teams.",
      url: "https://openclawconsultant.co.uk",
      areaServed: [{ "@type": "Country", name: "United Kingdom" }, { "@type": "Place", name: "Remote" }],
      founder: {
        "@type": "Person",
        name: "Phil Patterson",
        jobTitle: "Founder",
        worksFor: { "@type": "Organization", name: "Blue Canvas AI", url: "https://bluecanvas.ai" },
      },
      knowsAbout: [
        "OpenClaw setup",
        "OpenClaw custom skills",
        "AI agent teams",
        "Agent workflow automation",
        "AI agent security",
        "Business process automation",
      ],
      parentOrganization: { "@type": "Organization", name: "Blue Canvas AI", url: "https://bluecanvas.ai" },
    },
    {
      "@type": "WebSite",
      "@id": "https://openclawconsultant.co.uk/#website",
      name: "OpenClaw Consultant UK",
      url: "https://openclawconsultant.co.uk",
      publisher: { "@id": "https://openclawconsultant.co.uk/#business" },
      inLanguage: "en-GB",
      about: [
        { "@type": "Thing", name: "OpenClaw" },
        { "@type": "Thing", name: "AI agents" },
        { "@type": "Thing", name: "Agentic workflow automation" },
      ],
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB">
      <head>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-PXMWKB0V2G" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-PXMWKB0V2G');`}
        </Script>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
        <Script src="https://analytics.ahrefs.com/analytics.js" data-key="miZ+v/vaRrt1Cck3Osy4KQ" strategy="afterInteractive" />
      </head>
      <body className={`${inter.variable} ${instrumentSerif.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
