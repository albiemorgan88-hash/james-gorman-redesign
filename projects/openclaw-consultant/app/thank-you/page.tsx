import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You — OpenClaw Consultant UK",
  description: "Thanks for getting in touch. Phil will be in contact within 24 hours.",
  robots: { index: false, follow: false },
};

export default function ThankYou() {
  return (
    <section className="hero-gradient relative overflow-hidden min-h-screen flex items-center grain">
      <div className="absolute top-20 right-[10%] w-[500px] h-[500px] bg-orange/5 rounded-full blur-[120px] glow-pulse" />

      <div className="max-w-[1140px] mx-auto px-6 relative z-10 py-32 text-center">
        <div className="max-w-[560px] mx-auto">
          <div className="text-6xl mb-6">✅</div>
          <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-white mb-6">
            Message Received
          </h1>
          <p className="text-white/60 text-lg leading-relaxed mb-8">
            Thanks for reaching out. Phil will review your message and get back to you within 24 hours — usually much sooner.
          </p>
          <p className="text-white/40 text-base mb-10">
            In the meantime, feel free to check out{" "}
            <a
              href="https://bluecanvas.ai"
              target="_blank"
              rel="noopener"
              className="text-orange hover:text-orange-hover transition-colors"
            >
              Blue Canvas AI
            </a>{" "}
            to see more of Phil&apos;s work.
          </p>
          <a
            href="/"
            className="inline-flex items-center justify-center bg-orange text-white px-8 py-4 rounded-btn font-semibold text-base hover:bg-orange-hover transition-all hover:-translate-y-0.5"
          >
            ← Back to Home
          </a>
        </div>
      </div>

      {/* Google Ads Conversion Tracking - replace with actual IDs */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            // Google Ads conversion tracking
            // Replace AW-XXXXXXXXX/XXXXXXXXXXXXXXX with your actual conversion ID and label
            if (typeof gtag !== 'undefined') {
              gtag('event', 'conversion', {
                'send_to': 'AW-CONVERSION_ID/CONVERSION_LABEL',
                'value': 1.0,
                'currency': 'GBP'
              });
            }
          `,
        }}
      />
    </section>
  );
}
