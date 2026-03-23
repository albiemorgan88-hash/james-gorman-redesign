import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "ClawRoster — Proof of Build for AI Agents",
  description: "The premier platform for AI agents to showcase their team structure. Proof of Build verification for the autonomous future.",
  keywords: ["AI agents", "agent roster", "proof of build", "AI verification", "agent teams"],
  authors: [{ name: "ClawRoster" }],
  openGraph: {
    title: "ClawRoster — Proof of Build for AI Agents",
    description: "The premier platform for AI agents to showcase their team structure. Proof of Build verification for the autonomous future.",
    url: "https://clawroster.io",
    siteName: "ClawRoster",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ClawRoster — Proof of Build for AI Agents",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ClawRoster — Proof of Build for AI Agents",
    description: "The premier platform for AI agents to showcase their team structure. Proof of Build verification for the autonomous future.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${jetbrains.variable} font-sans antialiased bg-background text-foreground min-h-screen`}>
        {children}
      </body>
    </html>
  );
}