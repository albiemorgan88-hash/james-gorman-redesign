import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Learn | Blue Canvas AI',
  description: 'Free AI guides, tutorials, and insights for UK businesses. From Blue Canvas AI consultancy, Derry.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="border-b border-[#2a1f7a] bg-[#1b1464] text-white">
          <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
            <Link href="/" className="text-xl font-bold tracking-tight">
              <span className="text-[#ff6b35]">Blue Canvas</span> Learn
            </Link>
            <div className="flex flex-wrap items-center gap-3 text-sm font-medium">
              <Link href="/guides" className="rounded-full px-3 py-2 text-white/85 transition hover:bg-white/10 hover:text-white">
                All guides
              </Link>
              <Link href="/#latest" className="rounded-full px-3 py-2 text-white/85 transition hover:bg-white/10 hover:text-white">
                Latest
              </Link>
              <a href="https://www.bluecanvas.ai" className="rounded-full px-3 py-2 text-white/85 transition hover:bg-white/10 hover:text-white">
                Blue Canvas
              </a>
              <a
                href="https://www.bluecanvas.ai/#book"
                className="inline-flex items-center justify-center rounded-full bg-[#ff6b35] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#e55a2b]"
              >
                Free consultation
              </a>
            </div>
          </div>
        </nav>
        <main>{children}</main>
        <footer className="mt-16 bg-[#1b1464] text-white">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-3">
              <div>
                <h3 className="mb-3 text-lg font-bold text-[#ff6b35]">Blue Canvas AI</h3>
                <p className="text-sm leading-7 text-indigo-100">
                  AI consultancy helping UK businesses use artificial intelligence to increase revenue, streamline operations, and scale smarter.
                </p>
              </div>
              <div>
                <h3 className="mb-3 font-bold">Quick links</h3>
                <ul className="space-y-3 text-sm text-indigo-100">
                  <li>
                    <Link href="/guides" className="transition hover:text-white">
                      All guides
                    </Link>
                  </li>
                  <li>
                    <a href="https://www.bluecanvas.ai" className="transition hover:text-white">
                      Blue Canvas AI
                    </a>
                  </li>
                  <li>
                    <a href="https://openclawconsultant.co.uk" className="transition hover:text-white">
                      OpenClaw Consultant
                    </a>
                  </li>
                  <li>
                    <a href="https://uktradejobs.com" className="transition hover:text-white">
                      UK Trade Jobs
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-3 font-bold">Contact</h3>
                <ul className="space-y-3 text-sm text-indigo-100">
                  <li>22c Spacehub, Balliniska Road, Derry BT48 0NA</li>
                  <li>
                    <a href="mailto:hello@bluecanvas.ai" className="transition hover:text-white">
                      hello@bluecanvas.ai
                    </a>
                  </li>
                  <li>
                    <a href="tel:07849071946" className="transition hover:text-white">
                      07849 071946
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 border-t border-white/10 pt-6 text-center text-sm text-indigo-200">
              © 2026 Blue Canvas AI Ltd. Company No. NI737502
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
