"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const links = [
  { href: "/services", label: "Services" },
  { href: "/guides", label: "Guides" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/pricing", label: "Pricing" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function resolveHref(href: string) {
    if (!href.startsWith("#")) return href;

    if (href === "#contact") {
      if (
        pathname === "/" ||
        pathname === "/about" ||
        pathname === "/guides" ||
        pathname === "/services" ||
        pathname === "/faq" ||
        pathname.startsWith("/guides/") ||
        pathname.startsWith("/services/")
      ) {
        return href;
      }
    }

    if (pathname === "/") return href;
    return `/${href}`;
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-[1140px] mx-auto px-6 flex justify-between items-center gap-4">
        <a href="/" className="font-heading font-bold text-xl text-white flex items-center gap-2 shrink-0">
          <span className="w-8 h-8 bg-orange rounded-lg flex items-center justify-center text-sm font-black">
            OC
          </span>
          OpenClaw<span className="text-orange">.</span>
        </a>

        <button
          className="md:hidden flex flex-col gap-[5px] cursor-pointer relative z-50"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${open ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${open ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>

        <div
          className={`${
            open ? "flex" : "hidden"
          } md:flex flex-col md:flex-row absolute md:static top-full left-0 right-0 bg-navy md:bg-transparent p-6 md:p-0 gap-5 md:gap-4 xl:gap-6 items-start md:items-center border-b border-white/10 md:border-0`}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={resolveHref(l.href)}
              className="text-white/70 text-sm font-medium hover:text-white transition-colors whitespace-nowrap"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a href="mailto:contact@bluecanvas.ai" className="text-white/50 text-xs hover:text-white transition-colors hidden 2xl:block whitespace-nowrap">contact@bluecanvas.ai</a>
          <a href="tel:07849071946" className="text-white/50 text-xs hover:text-white transition-colors hidden 2xl:block whitespace-nowrap">07849 071946</a>
          <a
            href={resolveHref("#contact")}
            onClick={() => setOpen(false)}
            className="bg-orange text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-orange-hover transition-all hover:-translate-y-0.5 whitespace-nowrap shrink-0"
          >
            Free Consultation
          </a>
        </div>
      </div>
    </nav>
  );
}
