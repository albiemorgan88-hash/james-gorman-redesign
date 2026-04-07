import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us — SME Loans NI | Business Funding Experts",
  description:
    "SME Loans Limited provides fast, flexible business cash advances across Northern Ireland and Scotland. Learn about our approach to SME funding.",
};

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy to-navy-light py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            About SME Loans
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Helping businesses across Northern Ireland and Scotland access the
            funding they need to grow.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="bg-cream py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-sm">
            <h2 className="text-3xl font-bold text-navy mb-6">Our Story</h2>
            <div className="space-y-4 text-navy-muted leading-relaxed text-lg">
              <p>
                SME Loans Limited was founded with one clear mission: to give
                small and medium businesses real access to funding — fast, fair,
                and without the traditional hurdles.
              </p>
              <p>
                We saw too many good businesses being held back. Turned away by
                banks because of credit scores. Waiting months for decisions.
                Drowning in paperwork for loans that never came through.
              </p>
              <p>
                Our merchant cash advance model changes the game. By focusing on
                your actual card sales rather than your credit history, we can
                say yes to businesses that banks say no to. With a 90% approval
                rate, we&apos;re proving there&apos;s a better way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-12 text-center">
            Why We&apos;re Different
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {[
              {
                icon: "🤝",
                title: "Panel of Lenders",
                desc: "We don't just offer one product. We work with a panel of trusted lenders to find the best deal for your business — giving you access to competitive rates and flexible terms.",
              },
              {
                icon: "⚡",
                title: "Speed When It Matters",
                desc: "Business opportunities don't wait. Neither should your funding. Our streamlined process means you can go from application to funds in your account within 48 hours.",
              },
              {
                icon: "💬",
                title: "Straight Talking",
                desc: "No jargon, no hidden fees, no surprises. We tell you exactly what you'll repay, how the process works, and what to expect — all before you commit to anything.",
              },
              {
                icon: "📍",
                title: "Local Presence",
                desc: "With offices in Northern Ireland and Scotland, we understand local business. We're not a faceless online lender — we're real people who care about your success.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-cream rounded-2xl p-8">
                <span className="text-4xl mb-4 block">{item.icon}</span>
                <h3 className="text-xl font-bold text-navy mb-3">
                  {item.title}
                </h3>
                <p className="text-navy-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="bg-cream py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-12 text-center">
            Our Offices
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="w-full h-40 bg-gradient-to-br from-navy/5 to-green-accent/5 rounded-xl flex items-center justify-center mb-6">
                <span className="text-6xl">🇬🇧</span>
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">
                Northern Ireland
              </h3>
              <p className="text-navy-muted leading-relaxed">
                34 Altiskane
                <br />
                Strabane
                <br />
                BT82 8RW
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="w-full h-40 bg-gradient-to-br from-navy/5 to-gold/5 rounded-xl flex items-center justify-center mb-6">
                <span className="text-6xl">🏴󠁧󠁢󠁳󠁣󠁴󠁿</span>
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Scotland</h3>
              <p className="text-navy-muted leading-relaxed">
                14 Albany Street
                <br />
                Edinburgh
                <br />
                EH1 2QB
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Professional */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-4xl mb-4 block">🛡️</span>
          <h2 className="text-3xl font-bold text-navy mb-4">
            Professional & Transparent
          </h2>
          <p className="text-navy-muted text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            SME Loans Limited is a registered company committed to responsible
            lending practices. A merchant cash advance is not a loan — it&apos;s
            a purchase of future card receivables, which means flexible
            repayments aligned with your actual business performance.
          </p>
          <p className="text-navy-muted leading-relaxed max-w-2xl mx-auto">
            We believe in full transparency: you&apos;ll always know the total
            amount repayable, the percentage rate on your card sales, and
            exactly what to expect before you sign anything.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-navy to-navy-light py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Let&apos;s Talk About Your Business
          </h2>
          <p className="text-white/70 text-lg mb-8">
            No obligation, no pressure. Just a straightforward conversation
            about how we can help.
          </p>
          <Link
            href="/apply"
            className="inline-flex items-center justify-center px-10 py-4 bg-gold text-navy font-semibold rounded-full text-lg hover:bg-gold-light transition-colors shadow-lg"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
