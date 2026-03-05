"use client";
import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/ai-agents-for-business", label: "AI Agents" },
  { href: "/ai-employee", label: "AI Employee" },
  { href: "/openclaw-pricing", label: "Pricing" },
  { href: "/faq", label: "FAQ" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-black/[.06] py-3.5">
      <div className="max-w-[1200px] mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="font-heading font-bold text-lg text-dark">
          Open<span className="text-blue">Claw</span> <span className="text-gray font-medium text-base">Consultant</span>
        </Link>
        <button
          className="md:hidden flex flex-col gap-[5px] cursor-pointer"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-dark transition-all ${open ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`w-6 h-0.5 bg-dark transition-all ${open ? "opacity-0" : ""}`} />
          <span className={`w-6 h-0.5 bg-dark transition-all ${open ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>
        <div
          className={`${
            open ? "flex" : "hidden"
          } md:flex flex-col md:flex-row absolute md:static top-full left-0 right-0 bg-white md:bg-transparent p-5 md:p-0 gap-4 md:gap-5 items-start md:items-center shadow-lg md:shadow-none border-b md:border-0 border-black/[.06]`}
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-dark/70 text-[0.85rem] font-medium hover:text-dark transition-colors"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://calendly.com/contact-bluecanvas/initial-consultation"
            className="bg-accent text-white px-6 py-2.5 rounded-btn text-sm font-semibold hover:bg-accent-hover transition-colors"
          >
            Book a Call
          </a>
        </div>
      </div>
    </nav>
  );
}
