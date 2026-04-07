import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-navy via-navy-light to-navy overflow-hidden">
        {/* Decorative shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-green-accent/5 rounded-full translate-y-1/2 -translate-x-1/2" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-white/80 text-sm mb-6 backdrop-blur-sm">
              <span>⚡</span>
              <span>Funds in as little as 48 hours</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Business Cash Advance
              <br />
              <span className="text-gold">£10k to £300k</span> in 48 Hours
            </h1>
            <p className="text-lg sm:text-xl text-white/70 mb-8 max-w-2xl leading-relaxed">
              Get the funding your business needs — without the bank hassle. No
              hard credit checks, no business plan, no fixed monthly repayments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/apply"
                className="inline-flex items-center justify-center px-8 py-4 bg-gold text-navy font-semibold rounded-full text-lg hover:bg-gold-light transition-colors shadow-lg"
              >
                Check Your Eligibility
              </Link>
              <Link
                href="/how-it-works"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-medium rounded-full text-lg hover:bg-white/20 transition-colors backdrop-blur-sm"
              >
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-cream-dark border-y border-cream-dark">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 text-center">
            <div className="flex items-center justify-center gap-2">
              <span className="text-2xl">✅</span>
              <span className="font-semibold text-navy">
                90% Approval Rate
              </span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="text-2xl">🔒</span>
              <span className="font-semibold text-navy">
                No Hard Credit Checks
              </span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="text-2xl">📊</span>
              <span className="font-semibold text-navy">
                No Fixed Repayments
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-cream py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              How It Works
            </h2>
            <p className="text-navy-muted text-lg max-w-2xl mx-auto">
              Three simple steps to get your business funded. No complicated
              paperwork, no weeks of waiting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                step: "01",
                icon: "📝",
                title: "Apply Online",
                desc: "Fill out our simple 2-minute application form. No lengthy business plans required.",
              },
              {
                step: "02",
                icon: "⚡",
                title: "Approved in 24hrs",
                desc: "We run a soft credit check (won't affect your score) and get you approved fast.",
              },
              {
                step: "03",
                icon: "💰",
                title: "Funds in 48hrs",
                desc: "Money lands in your business account within 48 hours. Start growing immediately.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="absolute top-4 right-4 text-5xl font-bold text-cream-dark font-[family-name:var(--font-heading)]">
                  {item.step}
                </span>
                <span className="text-4xl mb-4 block">{item.icon}</span>
                <h3 className="text-xl font-bold text-navy mb-2">
                  {item.title}
                </h3>
                <p className="text-navy-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits vs Bank */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              Why Choose a Cash Advance?
            </h2>
            <p className="text-navy-muted text-lg max-w-2xl mx-auto">
              Unlike traditional bank loans, our merchant cash advance works
              with your business — not against it.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Cash Advance */}
            <div className="bg-gradient-to-br from-green-light to-cream rounded-2xl p-8 border border-green-accent/20">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">✅</span>
                <h3 className="text-2xl font-bold text-navy">
                  SME Cash Advance
                </h3>
              </div>
              <ul className="space-y-4">
                {[
                  "90% approval rate",
                  "Funds in 48 hours",
                  "No hard credit checks",
                  "No fixed monthly repayments",
                  "No business plan required",
                  "Pay only when you earn",
                  "No personal guarantees on property",
                  "2-minute application",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-green-accent mt-0.5">✓</span>
                    <span className="text-navy">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bank Loan */}
            <div className="bg-cream-dark/50 rounded-2xl p-8 border border-cream-dark">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">🏦</span>
                <h3 className="text-2xl font-bold text-navy-muted">
                  Traditional Bank Loan
                </h3>
              </div>
              <ul className="space-y-4">
                {[
                  "High rejection rates",
                  "Weeks to months waiting",
                  "Extensive credit checks",
                  "Fixed monthly payments regardless of revenue",
                  "Detailed business plan needed",
                  "Pay even in quiet months",
                  "Personal guarantees often required",
                  "Mountains of paperwork",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-red-soft mt-0.5">✗</span>
                    <span className="text-navy-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How Repayments Work */}
      <section className="bg-cream py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-sm">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-4xl mb-4 block">📊</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
                Repayments That Flex With You
              </h2>
              <p className="text-navy-muted text-lg leading-relaxed mb-8">
                Instead of fixed monthly payments, you repay a small agreed
                percentage of your daily card sales. Busy day? You pay a bit
                more. Quiet day? You pay less. It&apos;s funding that
                understands business isn&apos;t always predictable.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                <div className="p-4">
                  <div className="text-3xl font-bold text-gold mb-1">
                    Small %
                  </div>
                  <div className="text-sm text-navy-muted">
                    of daily card sales
                  </div>
                </div>
                <div className="p-4">
                  <div className="text-3xl font-bold text-gold mb-1">
                    Automatic
                  </div>
                  <div className="text-sm text-navy-muted">
                    via your PDQ terminal
                  </div>
                </div>
                <div className="p-4">
                  <div className="text-3xl font-bold text-gold mb-1">
                    Flexible
                  </div>
                  <div className="text-sm text-navy-muted">
                    pay less on quiet days
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              Trusted by Businesses Like Yours
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                quote:
                  "We needed to refurbish our restaurant quickly. The bank said 6 weeks minimum — SME Loans had the money in our account in 2 days. Incredible service.",
                name: "Restaurant Owner",
                location: "Belfast",
                icon: "🍽️",
              },
              {
                quote:
                  "As a retailer, my income fluctuates with seasons. The flexible repayments mean I never feel the pressure during quieter months. Exactly what I needed.",
                name: "Retail Store Owner",
                location: "Edinburgh",
                icon: "🛍️",
              },
              {
                quote:
                  "I was turned down by two banks. SME Loans approved me within 24 hours and the process was so straightforward. I've now expanded to a second salon.",
                name: "Salon Owner",
                location: "Derry",
                icon: "💇",
              },
            ].map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-cream rounded-2xl p-8"
              >
                <span className="text-3xl block mb-4">{testimonial.icon}</span>
                <p className="text-navy leading-relaxed mb-6 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-navy">{testimonial.name}</p>
                  <p className="text-sm text-navy-muted">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-navy via-navy-light to-navy py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Grow Your Business?
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
            Check your eligibility in under 2 minutes. Free, no obligation, and
            it won&apos;t affect your credit score.
          </p>
          <Link
            href="/apply"
            className="inline-flex items-center justify-center px-10 py-4 bg-gold text-navy font-semibold rounded-full text-lg hover:bg-gold-light transition-colors shadow-lg"
          >
            Check Your Eligibility — Free, No Obligation
          </Link>
        </div>
      </section>
    </>
  );
}
