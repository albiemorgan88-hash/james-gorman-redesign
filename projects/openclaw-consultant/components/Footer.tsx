import { networkLinks } from "@/components/Editorial";
import { discoveryCallUrl } from "@/components/booking";

const columns = [
  [
    "Services",
    [
      ["OpenClaw hub", "/openclaw"],
      ["OpenClaw setup", "/services/setup-configuration"],
      ["OpenClaw installation", "/services/openclaw-installation"],
      ["Safe setup checklist", "/guides/openclaw-safe-setup-checklist"],
      ["Agentic stacks", "/services"],
      ["Ongoing support", "/services"],
      ["Book a discovery call", discoveryCallUrl],
    ],
  ],
  [
    "Navigation",
    [
      ["Services", "/services"],
      ["Pricing", "/pricing"],
      ["Guides", "/guides"],
      ["OpenClaw guide", "/guides/what-is-openclaw-2026"],
      ["About", "/about"],
      ["Contact", "/#contact"],
    ],
  ],
  [
    "Network",
    [
      ["Blue Canvas AI", "https://bluecanvas.ai"],
      ["UK Trade Jobs", "https://uktradejobs.com"],
      ["ClawRoster", "https://clawroster.io"],
      ["Learn Blue Canvas", "https://learn.bluecanvas.ai"],
    ],
  ],
];

export default function Footer() {
  return (
    <footer className="bg-ink-950 px-6 py-14 text-white md:py-16">
      <div className="mx-auto max-w-[1100px]">
        <div className="grid gap-10 md:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <div className="mb-4 flex items-center gap-3 font-semibold text-white">
              <span className="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-blue-700 to-orange-500 text-xs font-bold text-white">OC</span>
              OpenClaw Consultant
            </div>
            <p className="max-w-[340px] text-sm leading-relaxed text-white/60">
              Blue Canvas AI · Derry, Northern Ireland. OpenClaw setup, agentic stacks and ongoing support for teams that want agents doing useful work.
            </p>
            <a href="mailto:contact@bluecanvas.ai" className="mt-4 inline-block text-sm font-semibold text-orange-400 hover:text-orange-300">
              contact@bluecanvas.ai
            </a>
          </div>

          {columns.map(([heading, items]) => (
            <div key={heading as string}>
              <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-white">{heading}</h3>
              <ul className="space-y-3 text-sm text-white/58">
                {(items as string[][]).map(([item, href]) => (
                  <li key={item}>
                    <a href={href} className="transition-colors hover:text-white">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-4 border-t border-white/10 pt-8 md:grid-cols-[auto_1fr] md:items-center">
          <p className="text-xs text-white/35">© {new Date().getFullYear()} Blue Canvas AI Ltd. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-white/35 md:justify-end">
            {networkLinks.map((link) => (
              <a key={link.href} href={link.href} target="_blank" rel="noopener" className="hover:text-white/70">
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
