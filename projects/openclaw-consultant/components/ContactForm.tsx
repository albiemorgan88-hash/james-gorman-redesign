"use client";
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

type ContactFormProps = {
  tone?: "light" | "dark";
};

export default function ContactForm({ tone = "light" }: ContactFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const dark = tone === "dark";
  const labelClass = dark
    ? "mb-2 block text-xs font-semibold uppercase tracking-[0.08em] text-white/80"
    : "mb-2 block text-xs font-semibold uppercase tracking-[0.08em] text-muted-dark";
  const inputClass = dark
    ? "w-full rounded-btn border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 transition focus:border-orange/50 focus:ring-1 focus:ring-orange/30"
    : "w-full rounded-md border border-border bg-white px-4 py-3 text-ink placeholder:text-muted transition focus:border-blue-700 focus:ring-4 focus:ring-blue-700/10";

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const jsonData: Record<string, string> = {};
      data.forEach((value, key) => {
        jsonData[key] = value.toString();
      });

      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(jsonData),
        headers: { "Content-Type": "application/json" },
      }).catch(() => null);

      if (res?.ok) {
        router.push("/thank-you");
        return;
      }

      throw new Error("Contact submission failed");
    } catch {
      setError("Sorry, we couldn't send that message. Please email contact@bluecanvas.ai directly.");
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Your name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className={inputClass}
            placeholder="Jane Smith"
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Work email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className={inputClass}
            placeholder="jane@company.co.uk"
          />
        </div>
      </div>
      <div>
        <label htmlFor="company" className={labelClass}>
          Company <span className={`normal-case tracking-normal ${dark ? "text-white/40" : "text-muted"}`}>optional</span>
        </label>
        <input
          type="text"
          id="company"
          name="company"
          className={inputClass}
          placeholder="Your company name"
        />
      </div>
      <div>
        <label htmlFor="message" className={labelClass}>
          Message <span className={`normal-case tracking-normal ${dark ? "text-white/40" : "text-muted"}`}>optional</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className={`${inputClass} resize-none`}
          placeholder="A sentence is enough: the workflow, the team context, or the OpenClaw setup question."
        />
      </div>
      {error ? (
        <p role="alert" className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </p>
      ) : null}
      <button
        type="submit"
        disabled={loading}
        className={`w-full rounded-full px-8 py-3.5 text-sm font-medium outline-none transition hover:-translate-y-0.5 hover:shadow-card-hover focus-visible:ring-4 disabled:cursor-not-allowed disabled:opacity-60 ${dark ? "bg-orange text-white hover:bg-orange-hover focus-visible:ring-orange/25" : "bg-ink text-cream hover:bg-dark focus-visible:ring-ink-950/25"}`}
      >
        {loading ? "Sending..." : "Send message"}
      </button>
      <p className={`text-center text-xs leading-relaxed ${dark ? "text-white/35" : "text-muted"}`}>Fallback form only. The fastest route is the discovery call.</p>
    </form>
  );
}
