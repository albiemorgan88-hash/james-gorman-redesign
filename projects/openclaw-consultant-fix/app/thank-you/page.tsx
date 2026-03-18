import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You — OpenClaw Consultant UK",
  description: "Thanks for getting in touch. Phil will be in contact within 24 hours.",
  robots: { index: false, follow: false },
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "OpenClaw Consultant UK",
    title: "Thank You — OpenClaw Consultant UK",
    description: "Thanks for getting in touch. Phil will be in contact within 24 hours.",
    url: "https://openclawconsultant.co.uk/thank-you",
    images: [
      {
        url: "https://openclawconsultant.co.uk/api/og",
        width: 1200,
        height: 630,
        alt: "OpenClaw Consultant UK - Thank You",
      },
    ],
  },
  twitter: { 
    card: "summary_large_image",
    title: "Thank You — OpenClaw Consultant UK",
    description: "Thanks for getting in touch. Phil will be in contact within 24 hours.",
    images: ["https://openclawconsultant.co.uk/api/og"],
  },
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

      {/* Google Ads Conversion Tracking */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              // Google Ads conversion tracking
              if (typeof gtag !== 'undefined') {
                gtag('event', 'conversion', {
                  'send_to': 'AW-801851476/Cg9ACOW4m8sZEP-6pO4C',
                  'value': 1.0,
                  'currency': 'GBP'
                });
              }
            })();
          `,
        }}
      />
    </section>
  );
}
