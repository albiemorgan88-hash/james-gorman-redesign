import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/ai-agents-for-business", label: "AI Agents" },
  { href: "/ai-employee", label: "AI Employee" },
  { href: "/openclaw-pricing", label: "Pricing" },
  { href: "/faq", label: "FAQ" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white/60 pt-16 pb-8">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="font-heading font-bold text-white text-lg mb-3">
              Open<span className="text-accent">Claw</span> Consultant
            </div>
            <p className="text-sm leading-relaxed mb-4">
              We build AI agents that run your business. Custom development, deployment, and consultancy. Powered by Blue Canvas AI.
            </p>
            <a href="tel:07935217762" className="text-white/80 hover:text-white text-sm transition-colors block mb-1">
              📞 07935 217762
            </a>
            <a href="https://bluecanvas.ai" target="_blank" rel="noopener" className="text-accent hover:text-accent-hover text-sm transition-colors">
              Powered by Blue Canvas →
            </a>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-heading font-semibold mb-4 text-sm uppercase tracking-wider">Pages</h4>
            <ul className="space-y-2.5">
              {footerLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA + Badge */}
          <div>
            <h4 className="text-white font-heading font-semibold mb-4 text-sm uppercase tracking-wider">Get Started</h4>
            <a
              href="https://calendly.com/contact-bluecanvas/initial-consultation"
              className="inline-block bg-accent text-white px-6 py-2.5 rounded-btn text-sm font-semibold hover:bg-accent-hover transition-colors mb-6"
            >
              Book a Free Consultation
            </a>
            <div>
              <Image
                src="/cyber-essentials-badge.svg"
                alt="Cyber Essentials Certified"
                width={120}
                height={40}
                className="opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex justify-between items-center flex-wrap gap-3 text-xs">
          <span>© 2026 Blue Canvas AI. OpenClaw Consultant. All rights reserved.</span>
          <a href="https://bluecanvas.ai" target="_blank" rel="noopener" className="hover:text-white transition-colors">
            bluecanvas.ai
          </a>
        </div>
      </div>
    </footer>
  );
}
