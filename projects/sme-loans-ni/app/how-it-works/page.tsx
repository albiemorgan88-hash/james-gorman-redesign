import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How It Works — SME Loans NI | Business Cash Advance Process",
  description:
    "Learn how our business cash advance works. Apply in 2 minutes, get approved in 24 hours, and receive funds in 48 hours. Repay through your daily card sales.",
};

export default function HowItWorks() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy to-navy-light py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            How It Works
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            From application to funding in as little as 48 hours. Here&apos;s
            exactly how the process works.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="bg-cream py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {[
              {
                step: 1,
                icon: "📝",
                title: "Submit Your Application",
                desc: "Fill out our simple online form — it takes about 2 minutes. We'll ask for your business name, contact details, monthly card turnover, and how much funding you need. No business plan required.",
              },
              {
                step: 2,
                icon: "🔍",
                title: "Soft Credit Check",
                desc: "We run a quick soft credit check that won't appear on your credit file or affect your credit score. We look at your card sales history rather than your credit rating.",
              },
              {
                step: 3,
                icon: "✅",
                title: "Approval Within 24 Hours",
                desc: "With a 90% approval rate, chances are you'll be approved. We'll confirm your advance amount, the agreed repayment percentage, and total repayable amount — all upfront, no surprises.",
              },
              {
                step: 4,
                icon: "💰",
                title: "Funds in Your Account",
                desc: "Once approved and you're happy with the terms, funds are transferred directly to your business account — typically within 48 hours.",
              },
              {
                step: 5,
                icon: "📊",
                title: "Repay Through Card Sales",
                desc: "A small, agreed percentage of your daily card transactions is automatically collected via your PDQ terminal. Busy days, you repay more. Quiet days, you repay less. Simple.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="flex gap-6 sm:gap-8 bg-white rounded-2xl p-6 sm:p-8 shadow-sm"
              >
                <div className="shrink-0">
                  <div className="w-14 h-14 rounded-full bg-navy flex items-center justify-center">
                    <span className="text-2xl">{item.icon}</span>
                  </div>
                </div>
                <div>
                  <div className="text-xs font-semibold text-gold uppercase tracking-wider mb-1">
                    Step {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-2">
                    {item.title}
                  </h3>
                  <p className="text-navy-muted leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              Unlike a Bank Loan...
            </h2>
            <p className="text-navy-muted text-lg">
              See how a merchant cash advance compares to traditional lending.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-navy/10">
                  <th className="text-left py-4 pr-4 font-semibold text-navy">
                    Feature
                  </th>
                  <th className="text-center py-4 px-4 font-semibold text-green-accent">
                    Cash Advance
                  </th>
                  <th className="text-center py-4 pl-4 font-semibold text-navy-muted">
                    Bank Loan
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-cream-dark">
                {[
                  ["Speed of funding", "48 hours", "4–8 weeks"],
                  ["Approval rate", "90%", "~30%"],
                  ["Credit checks", "Soft only", "Hard check"],
                  ["Business plan", "Not required", "Usually required"],
                  ["Repayments", "Flexible, % of sales", "Fixed monthly"],
                  ["Personal guarantee", "Not required", "Often required"],
                  ["Paperwork", "Minimal", "Extensive"],
                  ["Quiet months", "Pay less automatically", "Same payment due"],
                ].map(([feature, advance, bank]) => (
                  <tr key={feature} className="hover:bg-cream/50">
                    <td className="py-4 pr-4 text-navy font-medium">
                      {feature}
                    </td>
                    <td className="py-4 px-4 text-center text-green-accent font-medium">
                      {advance}
                    </td>
                    <td className="py-4 pl-4 text-center text-navy-muted">
                      {bank}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-cream py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {[
              {
                q: "How much can I borrow?",
                a: "We offer business cash advances from £10,000 to £300,000 depending on your monthly card turnover.",
              },
              {
                q: "Will it affect my credit score?",
                a: "No. We only run a soft credit check which doesn't appear on your credit file and won't affect your credit score.",
              },
              {
                q: "What do I need to apply?",
                a: "Just your business details, contact information, and an idea of your monthly card turnover. No business plan or accounts needed for the initial application.",
              },
              {
                q: "How do repayments work?",
                a: "A small, agreed percentage of your daily card sales is automatically collected through your card terminal. If you have a quiet day, you pay less. If you have a busy day, you pay a bit more.",
              },
              {
                q: "What types of business qualify?",
                a: "Any business that processes card payments through a PDQ terminal can apply. This includes restaurants, retail shops, salons, pubs, hotels, garages, and more.",
              },
              {
                q: "Is this a loan?",
                a: "Technically no — it's a merchant cash advance. We purchase a portion of your future card sales at an agreed rate. This means it's not regulated as a loan and has different benefits including flexible repayments.",
              },
              {
                q: "What if I get rejected by my bank?",
                a: "Many of our clients come to us after being turned down by their bank. Because we focus on your card sales rather than your credit history, we can often help where banks can't. We have a 90% approval rate.",
              },
            ].map((faq) => (
              <div
                key={faq.q}
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm"
              >
                <h3 className="text-lg font-bold text-navy mb-2">{faq.q}</h3>
                <p className="text-navy-muted leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-navy to-navy-light py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Apply in under 2 minutes. No obligation, no hard credit check.
          </p>
          <Link
            href="/apply"
            className="inline-flex items-center justify-center px-10 py-4 bg-gold text-navy font-semibold rounded-full text-lg hover:bg-gold-light transition-colors shadow-lg"
          >
            Apply Now — It&apos;s Free
          </Link>
        </div>
      </section>
    </>
  );
}
