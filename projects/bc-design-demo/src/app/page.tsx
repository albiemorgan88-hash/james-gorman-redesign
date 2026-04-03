export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="min-h-[85vh] flex items-center justify-center px-6">
        <div className="max-w-[800px] mx-auto text-center fade-up">
          <h1
            className="font-[family-name:var(--font-heading)] text-[clamp(2.5rem,5vw,4rem)] leading-[1.15] tracking-[-0.02em] text-[var(--color-navy)] mb-6"
          >
            AI that works for your business
          </h1>
          <p className="text-[var(--color-muted)] text-lg md:text-xl leading-relaxed max-w-[560px] mx-auto mb-10">
            Blue Canvas is a Derry-based AI consultancy. We help businesses
            across Northern Ireland grow smarter with automation, websites, and
            search.
          </p>
          <a
            href="#contact"
            className="inline-block bg-[var(--color-amber)] text-white text-base font-medium px-8 py-4 rounded-xl hover:bg-[var(--color-amber-hover)] transition-colors duration-200"
          >
            Book a Free Call
          </a>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-12 px-6 border-t border-[var(--color-card-border)]">
        <div className="max-w-[1200px] mx-auto">
          <p className="text-center text-sm text-[var(--color-muted)] tracking-wide uppercase mb-8">
            Trusted by businesses across Northern Ireland
          </p>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
            {["Hospitality", "Healthcare", "Property", "Retail", "Professional Services"].map(
              (industry) => (
                <span
                  key={industry}
                  className="text-[var(--color-navy)] opacity-40 text-sm font-medium tracking-wide"
                >
                  {industry}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="font-[family-name:var(--font-heading)] text-[clamp(1.8rem,3.5vw,2.8rem)] text-center text-[var(--color-navy)] mb-4 fade-up">
            What we do
          </h2>
          <p className="text-[var(--color-muted)] text-center text-lg max-w-[480px] mx-auto mb-14 fade-up fade-up-delay-1">
            Three ways we help businesses work smarter.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                emoji: "🧠",
                title: "AI Consulting",
                desc: "We audit your operations and find the highest-impact places to introduce AI — saving time, cutting costs, and unlocking growth.",
              },
              {
                emoji: "🌐",
                title: "Websites & SEO",
                desc: "Beautiful, fast websites built to rank. We handle design, development, and ongoing search optimisation so you get found.",
              },
              {
                emoji: "⚡",
                title: "AI Agents & Automation",
                desc: "Custom AI agents that handle repetitive tasks 24/7 — from lead capture to reporting — so your team can focus on what matters.",
              },
            ].map((service, i) => (
              <div
                key={service.title}
                className={`bg-[var(--color-card)] border border-[var(--color-card-border)] rounded-2xl p-8 md:p-10 fade-up fade-up-delay-${i + 1}`}
                style={{ boxShadow: "0 1px 3px rgba(26,26,46,0.04)" }}
              >
                <span className="text-3xl mb-5 block">{service.emoji}</span>
                <h3 className="font-[family-name:var(--font-heading)] text-xl text-[var(--color-navy)] mb-3">
                  {service.title}
                </h3>
                <p className="text-[var(--color-muted)] text-[15px] leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 md:py-28 px-6 bg-[var(--color-cream-dark)]">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="font-[family-name:var(--font-heading)] text-[clamp(1.8rem,3.5vw,2.8rem)] text-center text-[var(--color-navy)] mb-14 fade-up">
            Results that matter
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-[900px] mx-auto">
            {[
              { stat: "143%", label: "Avg traffic increase" },
              { stat: "72+", label: "Pages deployed" },
              { stat: "24/7", label: "AI operations" },
            ].map((item, i) => (
              <div key={item.label} className={`text-center fade-up fade-up-delay-${i + 1}`}>
                <p className="font-[family-name:var(--font-heading)] text-[clamp(2.5rem,5vw,3.5rem)] text-[var(--color-amber)] mb-2">
                  {item.stat}
                </p>
                <p className="text-[var(--color-muted)] text-sm tracking-wide">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-[900px] mx-auto">
          <h2 className="font-[family-name:var(--font-heading)] text-[clamp(1.8rem,3.5vw,2.8rem)] text-center text-[var(--color-navy)] mb-14 fade-up">
            How it works
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                step: "01",
                title: "Audit",
                desc: "We look at your business, website, and competitors to find the biggest opportunities.",
              },
              {
                step: "02",
                title: "Build",
                desc: "We design and build solutions tailored to your goals — no templates, no shortcuts.",
              },
              {
                step: "03",
                title: "Launch",
                desc: "We deploy, monitor, and optimise. You see results, not reports.",
              },
            ].map((item, i) => (
              <div key={item.step} className={`fade-up fade-up-delay-${i + 1}`}>
                <span className="text-[var(--color-amber)] font-[family-name:var(--font-heading)] text-lg mb-3 block">
                  {item.step}
                </span>
                <h3 className="font-[family-name:var(--font-heading)] text-xl text-[var(--color-navy)] mb-3">
                  {item.title}
                </h3>
                <p className="text-[var(--color-muted)] text-[15px] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 md:py-28 px-6 bg-[var(--color-cream-dark)]">
        <div className="max-w-[700px] mx-auto text-center fade-up">
          <span className="text-5xl text-[var(--color-amber)] opacity-30 block mb-6">&ldquo;</span>
          <blockquote className="font-[family-name:var(--font-heading)] text-[clamp(1.3rem,2.5vw,1.8rem)] leading-relaxed text-[var(--color-navy)] mb-8">
            Blue Canvas transformed how we think about our online presence.
          </blockquote>
          <cite className="text-[var(--color-muted)] text-sm not-italic">
            — Anonymous Client, Derry
          </cite>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-20 md:py-28 px-6">
        <div className="max-w-[600px] mx-auto text-center fade-up">
          <h2 className="font-[family-name:var(--font-heading)] text-[clamp(1.8rem,3.5vw,2.8rem)] text-[var(--color-navy)] mb-5">
            Ready to see what AI can do?
          </h2>
          <p className="text-[var(--color-muted)] text-lg mb-10">
            Book a free 30-minute call. No jargon, no pressure — just honest
            advice on how AI can help your business.
          </p>
          <a
            href="https://bluecanvas.ai"
            className="inline-block bg-[var(--color-amber)] text-white text-base font-medium px-8 py-4 rounded-xl hover:bg-[var(--color-amber-hover)] transition-colors duration-200"
          >
            Book a Free Call
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 border-t border-[var(--color-card-border)]">
        <p className="text-center text-sm text-[var(--color-muted)]">
          © 2025 Blue Canvas AI Ltd · Derry, Northern Ireland
        </p>
      </footer>
    </main>
  );
}
