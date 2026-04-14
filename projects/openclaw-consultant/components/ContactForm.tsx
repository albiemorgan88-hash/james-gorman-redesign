"use client";
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function ContactForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const jsonData: Record<string, string> = {};
      data.forEach((value, key) => { jsonData[key] = value.toString(); });
      
      let res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(jsonData),
        headers: { "Content-Type": "application/json" },
      }).catch(() => null);
      
      if (!res || !res.ok) {
        data.append("_subject", "OCC Enquiry from " + (data.get("name") || ""));
        data.append("_template", "table");
        res = await fetch("https://formsubmit.co/ajax/philpatterson85@gmail.com", {
          method: "POST", 
          body: data,
          headers: { Accept: "application/json" },
        }).catch(() => ({ ok: true }) as Response);
      }

      router.push("/thank-you");
    } catch {
      router.push("/thank-you");
    }
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl sm:p-8">
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-800">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-orange/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange/20 transition-all"
              placeholder="Your full name"
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-800">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-orange/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange/20 transition-all"
              placeholder="you@company.co.uk"
            />
          </div>
        </div>
        <div>
          <label htmlFor="company" className="mb-2 block text-sm font-medium text-slate-800">
            Company <span className="text-slate-500">(optional)</span>
          </label>
          <input
            type="text"
            id="company"
            name="company"
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-orange/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange/20 transition-all"
            placeholder="Your company name"
          />
        </div>
        <div>
          <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-800">
            What do you need help with?
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-orange/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange/20 transition-all"
            placeholder="Tell us about your business and what you'd like OpenClaw to do..."
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-orange px-8 py-3.5 text-base font-semibold text-white rounded-xl hover:bg-orange-hover transition-all hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Sending..." : "Book Free Consultation →"}
        </button>
        <p className="mt-3 text-xs text-slate-500">
          No obligation. We&apos;ll reply within 24 hours.
        </p>
      </form>
    </div>
  );
}
