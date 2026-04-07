import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "SME Loans NI — Business Cash Advance | £10k to £300k in 48 Hours",
  description:
    "Get a business cash advance from £10,000 to £300,000 with 90% approval rate. No hard credit checks, no fixed repayments. Funds in 48 hours. Northern Ireland & Scotland.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
