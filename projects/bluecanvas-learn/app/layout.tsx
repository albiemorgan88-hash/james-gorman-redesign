import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Learn | Blue Canvas AI",
  description: "Free AI guides, tutorials, and insights for UK businesses. From Blue Canvas AI consultancy, Derry.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-[#1b1464] text-white">
          <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/" className="text-xl font-bold">
              <span className="text-[#ff6b35]">Blue Canvas</span> Learn
            </Link>
            <div className="flex items-center gap-6 text-sm">
              <Link href="/" className="hover:text-[#ff6b35] transition">Guides</Link>
              <a href="https://www.bluecanvas.ai" className="hover:text-[#ff6b35] transition">Blue Canvas →</a>
              <a href="https://www.bluecanvas.ai/#book" className="bg-[#ff6b35] text-white px-4 py-2 rounded-full hover:bg-[#e55a2b] transition text-sm font-medium">Free Consultation</a>
            </div>
          </div>
        </nav>
        <main>{children}</main>
        <footer className="bg-[#1b1464] text-white mt-16">
          <div className="max-w-6xl mx-auto px-4 py-12">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-[#ff6b35] font-bold text-lg mb-3">Blue Canvas AI</h3>
                <p className="text-sm text-gray-300 leading-relaxed">AI consultancy helping UK businesses harness artificial intelligence to increase revenue, streamline operations, and scale smarter.</p>
              </div>
              <div>
                <h3 className="font-bold mb-3">Quick Links</h3>
                <ul className="text-sm text-gray-300 space-y-2">
                  <li><a href="https://www.bluecanvas.ai" className="hover:text-[#ff6b35]">Blue Canvas AI</a></li>
                  <li><a href="https://openclawconsultant.co.uk" className="hover:text-[#ff6b35]">OpenClaw Consultant</a></li>
                  <li><a href="https://uktradejobs.com" className="hover:text-[#ff6b35]">UK Trade Jobs</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-3">Contact</h3>
                <ul className="text-sm text-gray-300 space-y-2">
                  <li>22c Spacehub, Balliniska Road, Derry BT48 0NA</li>
                  <li><a href="mailto:hello@bluecanvas.ai" className="hover:text-[#ff6b35]">hello@bluecanvas.ai</a></li>
                  <li><a href="tel:07849071946" className="hover:text-[#ff6b35]">07849 071946</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
              © 2026 Blue Canvas AI Ltd. Company No. NI737502
              <span className="block mt-2 text-xs text-gray-500">Career Guides: <a href="https://uktradejobs.com" className="hover:text-gray-400 transition-colors">UK Trade Jobs</a></span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
