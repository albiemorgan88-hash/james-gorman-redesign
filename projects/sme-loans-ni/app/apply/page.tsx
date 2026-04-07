"use client";

import { useState } from "react";

export default function Apply() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    businessName: "",
    contactName: "",
    email: "",
    phone: "",
    monthlyTurnover: "",
    amountNeeded: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would submit to an API
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy to-navy-light py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Apply Now
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Takes 2 minutes. No obligation. No hard credit check.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="bg-cream py-16 sm:py-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          {submitted ? (
            <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-sm text-center">
              <span className="text-6xl block mb-6">✅</span>
              <h2 className="text-3xl font-bold text-navy mb-4">
                Application Received!
              </h2>
              <p className="text-navy-muted text-lg leading-relaxed mb-6">
                Thank you for your application. Our team will review your
                details and be in touch within 24 hours — usually much sooner.
              </p>
              <p className="text-navy-muted">
                In the meantime, if you have any questions, don&apos;t hesitate
                to call us.
              </p>
            </div>
          ) : (
            <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-sm">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-navy mb-2">
                  Check Your Eligibility
                </h2>
                <p className="text-navy-muted">
                  Fill in the form below and we&apos;ll get back to you within
                  24 hours. All fields marked * are required.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Business Name */}
                <div>
                  <label
                    htmlFor="businessName"
                    className="block text-sm font-semibold text-navy mb-2"
                  >
                    Business Name *
                  </label>
                  <input
                    type="text"
                    id="businessName"
                    name="businessName"
                    required
                    value={formData.businessName}
                    onChange={handleChange}
                    placeholder="e.g. The Coffee House Belfast"
                    className="w-full px-4 py-3 rounded-xl border border-cream-dark bg-cream/50 text-navy placeholder:text-navy-muted/50 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors"
                  />
                </div>

                {/* Contact Name */}
                <div>
                  <label
                    htmlFor="contactName"
                    className="block text-sm font-semibold text-navy mb-2"
                  >
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="contactName"
                    name="contactName"
                    required
                    value={formData.contactName}
                    onChange={handleChange}
                    placeholder="Full name"
                    className="w-full px-4 py-3 rounded-xl border border-cream-dark bg-cream/50 text-navy placeholder:text-navy-muted/50 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors"
                  />
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-navy mb-2"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@business.com"
                      className="w-full px-4 py-3 rounded-xl border border-cream-dark bg-cream/50 text-navy placeholder:text-navy-muted/50 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-navy mb-2"
                    >
                      Phone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="07xxx xxxxxx"
                      className="w-full px-4 py-3 rounded-xl border border-cream-dark bg-cream/50 text-navy placeholder:text-navy-muted/50 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors"
                    />
                  </div>
                </div>

                {/* Monthly Turnover */}
                <div>
                  <label
                    htmlFor="monthlyTurnover"
                    className="block text-sm font-semibold text-navy mb-2"
                  >
                    Monthly Card Turnover *
                  </label>
                  <select
                    id="monthlyTurnover"
                    name="monthlyTurnover"
                    required
                    value={formData.monthlyTurnover}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-cream-dark bg-cream/50 text-navy focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors"
                  >
                    <option value="">Select your monthly card turnover</option>
                    <option value="under-5k">Under £5,000</option>
                    <option value="5k-10k">£5,000 – £10,000</option>
                    <option value="10k-25k">£10,000 – £25,000</option>
                    <option value="25k-50k">£25,000 – £50,000</option>
                    <option value="50k-100k">£50,000 – £100,000</option>
                    <option value="100k-plus">£100,000+</option>
                  </select>
                </div>

                {/* Amount Needed */}
                <div>
                  <label
                    htmlFor="amountNeeded"
                    className="block text-sm font-semibold text-navy mb-2"
                  >
                    Amount Needed *
                  </label>
                  <select
                    id="amountNeeded"
                    name="amountNeeded"
                    required
                    value={formData.amountNeeded}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-cream-dark bg-cream/50 text-navy focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors"
                  >
                    <option value="">How much funding do you need?</option>
                    <option value="10k-25k">£10,000 – £25,000</option>
                    <option value="25k-50k">£25,000 – £50,000</option>
                    <option value="50k-100k">£50,000 – £100,000</option>
                    <option value="100k-200k">£100,000 – £200,000</option>
                    <option value="200k-300k">£200,000 – £300,000</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-navy mb-2"
                  >
                    Anything else we should know?{" "}
                    <span className="font-normal text-navy-muted">
                      (Optional)
                    </span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your business or what the funding is for..."
                    className="w-full px-4 py-3 rounded-xl border border-cream-dark bg-cream/50 text-navy placeholder:text-navy-muted/50 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full py-4 bg-navy text-white font-semibold rounded-full text-lg hover:bg-navy-light transition-colors shadow-lg"
                >
                  Submit Application — No Obligation
                </button>

                <p className="text-center text-sm text-navy-muted">
                  🔒 Your information is secure and confidential. This
                  application does not affect your credit score.
                </p>
              </form>
            </div>
          )}

          {/* Side Info */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
              <span className="text-3xl block mb-2">⏱️</span>
              <p className="font-semibold text-navy text-sm">2-Minute Form</p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
              <span className="text-3xl block mb-2">📞</span>
              <p className="font-semibold text-navy text-sm">
                Response in 24hrs
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
              <span className="text-3xl block mb-2">🔒</span>
              <p className="font-semibold text-navy text-sm">No Credit Impact</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
