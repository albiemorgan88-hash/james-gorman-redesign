import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://openclawconsultant.co.uk"),
  title: {
    default: "OpenClaw Consultant UK | Expert AI Setup & Security",
    template: "%s | OpenClaw Consultant",
  },
  description:
    "Professional OpenClaw consultant services from Blue Canvas AI. Expert setup, security hardening & optimisation. £1,500 flat rate. Based in Derry, Northern Ireland.",
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "OpenClaw Consultant",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
