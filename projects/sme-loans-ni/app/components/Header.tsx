"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-cream-dark/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">🏦</span>
            <div>
              <span className="font-[family-name:var(--font-heading)] text-lg sm:text-xl font-bold text-navy">
                SME Loans
              </span>
              <span className="text-xs text-navy-muted block -mt-1 tracking-wider">
                NI & SCOTLAND
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-sm font-medium text-navy-muted hover:text-navy transition-colors"
            >
              Home
            </Link>
            <Link
              href="/how-it-works"
              className="text-sm font-medium text-navy-muted hover:text-navy transition-colors"
            >
              How It Works
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-navy-muted hover:text-navy transition-colors"
            >
              About
            </Link>
            <Link
              href="/apply"
              className="inline-flex items-center px-5 py-2.5 bg-navy text-white text-sm font-semibold rounded-full hover:bg-navy-light transition-colors"
            >
              Apply Now
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-navy"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <nav className="md:hidden pb-4 border-t border-cream-dark/40 pt-4 flex flex-col gap-3">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-navy-muted hover:text-navy py-2"
            >
              Home
            </Link>
            <Link
              href="/how-it-works"
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-navy-muted hover:text-navy py-2"
            >
              How It Works
            </Link>
            <Link
              href="/about"
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-navy-muted hover:text-navy py-2"
            >
              About
            </Link>
            <Link
              href="/apply"
              onClick={() => setMenuOpen(false)}
              className="inline-flex items-center justify-center px-5 py-2.5 bg-navy text-white text-sm font-semibold rounded-full"
            >
              Apply Now
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
