import Link from "next/link";

interface CTAProps {
  title: string;
  subtitle: string;
  buttons: { label: string; href: string; primary?: boolean }[];
}

export default function CTA({ title, subtitle, buttons }: CTAProps) {
  return (
    <section className="bg-navy text-white py-20 text-center">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">{title}</h2>
        <p className="text-white/70 mb-8 text-lg max-w-[540px] mx-auto">{subtitle}</p>
        <div className="flex gap-4 justify-center flex-wrap">
          {buttons.map((b) =>
            b.href.startsWith("http") ? (
              <a
                key={b.label}
                href={b.href}
                className={`inline-block px-8 py-3.5 rounded-btn font-semibold transition-all hover:-translate-y-0.5 ${
                  b.primary
                    ? "bg-accent text-white hover:bg-accent-hover"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                {b.label}
              </a>
            ) : (
              <Link
                key={b.label}
                href={b.href}
                className={`inline-block px-8 py-3.5 rounded-btn font-semibold transition-all hover:-translate-y-0.5 ${
                  b.primary
                    ? "bg-accent text-white hover:bg-accent-hover"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                {b.label}
              </Link>
            )
          )}
        </div>
      </div>
    </section>
  );
}
