"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { discoveryCallUrl } from "@/components/booking";

const links = [
  { href: "/openclaw", label: "OpenClaw" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/case-studies", label: "Case studies" },
  { href: "/guides", label: "Guides" },
  { href: "/about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

const homeLinks = [
  { href: "#services", label: "Services" },
  { href: "/openclaw", label: "OpenClaw" },
  { href: "#case-studies", label: "Case studies" },
  { href: "#use-cases", label: "Use Cases" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function resolveHref(href: string) {
    if (href === "/#contact" && pathname === "/") return "#contact";
    return href;
  }

  if (pathname === "/") {
    return (
      <nav className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${scrolled || open ? "bg-navy/95 py-3 shadow-lg backdrop-blur-md" : "bg-transparent py-5"}`}>
        <div className="mx-auto flex max-w-[1140px] items-center justify-between px-6">
          <a href="/" className="flex items-center gap-2 text-xl font-bold text-white" aria-label="OpenClaw Consultant home">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange text-sm font-black text-white">OC</span>
            OpenClaw<span className="text-orange">.</span>
          </a>

          <button
            type="button"
            className="relative z-50 flex cursor-pointer flex-col gap-[5px] md:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span className={`h-0.5 w-6 bg-white transition-all duration-300 ${open ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`h-0.5 w-6 bg-white transition-all duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-6 bg-white transition-all duration-300 ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </button>

          <div className={`${open ? "flex" : "hidden"} absolute left-0 right-0 top-full flex-col items-start gap-5 border-b border-white/10 bg-navy p-6 md:static md:flex md:flex-row md:items-center md:gap-7 md:border-0 md:bg-transparent md:p-0`}>
            {homeLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-white/70 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href={discoveryCallUrl}
              target="_blank"
              rel="noopener"
              onClick={() => setOpen(false)}
              className="rounded-btn bg-orange px-5 py-2.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-orange-hover"
            >
              Discovery call
            </a>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className={`fixed left-0 right-0 top-0 z-50 border-b transition-all duration-200 ${scrolled || open ? "border-ink-200 bg-white/95 py-3 shadow-soft backdrop-blur" : "border-transparent bg-white/80 py-5 backdrop-blur-sm"}`}>
      <div className="mx-auto flex max-w-[1100px] items-center justify-between gap-4 px-6">
        <a href="/" className="flex shrink-0 items-center gap-3 text-ink" aria-label="OpenClaw Consultant home">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-blue-700 to-orange-500 text-[13px] font-bold text-white shadow-card">OC</span>
          <span className="text-base font-semibold tracking-[-0.01em]">OpenClaw Consultant</span>
        </a>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-200 text-ink md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className="text-xl leading-none">{open ? "×" : "≡"}</span>
        </button>

        <div className={`${open ? "flex" : "hidden"} absolute left-0 right-0 top-full flex-col gap-2 border-b border-ink-200 bg-white px-6 py-5 md:static md:flex md:flex-row md:items-center md:gap-7 md:border-0 md:bg-transparent md:p-0`}>
          {links.map((link) => (
            <a
              key={link.href}
              href={resolveHref(link.href)}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-muted-dark hover:text-ink"
            >
              {link.label}
            </a>
          ))}
          <a
            href={discoveryCallUrl}
            target="_blank"
            rel="noopener"
            onClick={() => setOpen(false)}
            className="mt-3 inline-flex min-h-10 items-center justify-center rounded-full bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white shadow-card hover:bg-blue-800 md:mt-0"
          >
            Book a discovery call →
          </a>
        </div>
      </div>
    </nav>
  );
}
