import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import {
  buyerGuides,
  getGuidesForCategory,
  getTotalGuideCount,
  guideCategories,
} from "@/lib/guides";

export const metadata: Metadata = {
  title: "OpenClaw Guides, Buyer Guides & AI Automation Tutorials",
  description: "Complete collection of OpenClaw buyer guides, setup walkthroughs, tutorials, and commercial advice. Learn pricing, pilots, migrations, custom skills, security, and business implementation from a UK OpenClaw consultant.",
  keywords: [
    "openclaw guides",
    "openclaw buyer guides",
    "openclaw tutorials",
    "ai agent guides",
    "openclaw setup guides",
    "openclaw best practices",
  ],
  alternates: { canonical: "https://openclawconsultant.co.uk/guides" },
  openGraph: {
    title: "OpenClaw Guides, Buyer Guides & AI Automation Tutorials",
    description: "Complete collection of OpenClaw buyer guides and tutorials from a UK OpenClaw consultant.",
    url: "https://openclawconsultant.co.uk/guides",
    type: "website",
  },
};

const categoryColors: Record<string, string> = {
  "getting-started": "bg-green-500/10 text-green-600",
  "setup": "bg-blue-500/10 text-blue-600",
  "features": "bg-orange/10 text-orange",
  "teams-enterprise": "bg-purple-500/10 text-purple-600",
  "comparisons": "bg-cyan-500/10 text-cyan-600",
  "pricing-roi": "bg-amber-500/10 text-amber-600",
  "industry": "bg-rose-500/10 text-rose-600",
  "ai-business-strategy": "bg-indigo-500/10 text-indigo-600",
  "ai-automation": "bg-teal-500/10 text-teal-600",
  "platform-automation": "bg-violet-500/10 text-violet-600",
  "crm-ops-platforms": "bg-emerald-500/10 text-emerald-600",
  "more-guides": "bg-slate-100 text-muted-dark",
};

export default function GuidesPage() {
  const totalGuides = getTotalGuideCount();
  const categories = guideCategories
    .map((category) => ({ ...category, count: getGuidesForCategory(category.slug).length }))
    .filter((category) => category.count > 0);

  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient relative overflow-hidden pt-32 pb-20">
        <div className="absolute top-20 right-[10%] w-[400px] h-[400px] bg-orange/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 left-[5%] w-[300px] h-[300px] bg-blue/10 rounded-full blur-[100px]" />

        <div className="max-w-[1140px] mx-auto px-6 relative z-10">
          <div className="text-center max-w-[760px] mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-white/60 text-sm font-medium">{totalGuides} Expert Guides</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 leading-[1.05] tracking-tight">
              OpenClaw <span className="text-orange">Guides</span>
            </h1>

            <p className="text-white/60 text-lg md:text-xl max-w-[680px] mx-auto leading-relaxed">
              Buyer guides, setup walkthroughs, and practical tutorials from Blue Canvas. Start with pricing, pilots, migration, and implementation, then browse the category that matches your job to be done.
            </p>
          </div>
        </div>
      </section>

      {/* Buyer Guides */}
      <section id="buyer-guides" className="py-16 bg-surface scroll-mt-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="max-w-[760px] mb-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-orange/10 px-3 py-1 text-sm font-medium text-orange mb-4">
              Start here
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">Buyer Guides</h2>
            <p className="text-muted-dark text-lg leading-relaxed">
              These are the pages serious buyers usually read first, pricing, pilots, migration, audit logic, and what good OpenClaw help should actually look like.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {buyerGuides.map((guide) => (
              <a
                key={guide.href}
                href={guide.href}
                className="group bg-white rounded-2xl p-7 shadow-card hover:shadow-card-hover transition-all duration-200 hover:-translate-y-1 border border-border-light"
              >
                <div className="flex items-center justify-between gap-4 mb-3">
                  <span className="inline-block bg-orange/10 text-orange px-3 py-1 rounded-full text-xs font-medium">
                    {guide.tag}
                  </span>
                  <span className="text-muted text-xs">{guide.readTime}</span>
                </div>
                <h3 className="font-heading text-lg font-bold text-navy mb-3 group-hover:text-orange transition-colors">
                  {guide.title}
                </h3>
                <p className="text-muted-dark text-sm leading-relaxed mb-4">{guide.description}</p>
                <span className="text-orange text-sm font-semibold">Read Guide →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="max-w-[760px] mb-10">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">Browse by Category</h2>
            <p className="text-muted-dark text-lg leading-relaxed">
              Every guide lives in one of these categories. Pick the one that matches what you are trying to do.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <a
                key={category.slug}
                href={`/guides/category/${category.slug}`}
                className="group bg-white rounded-2xl p-7 shadow-card hover:shadow-card-hover transition-all duration-200 hover:-translate-y-1 border border-border-light"
              >
                <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-medium mb-3 ${categoryColors[category.slug] || "bg-slate-100 text-muted-dark"}`}>
                  {category.count} guides
                </span>
                <h3 className="font-heading text-lg font-bold text-navy mb-3 group-hover:text-orange transition-colors">
                  {category.name}
                </h3>
                <p className="text-muted-dark text-sm leading-relaxed mb-4">{category.description}</p>
                <span className="text-orange text-sm font-semibold">Browse {category.name} →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy">
        <div className="max-w-[1140px] mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
            Need Help Implementing <span className="text-orange">OpenClaw</span>?
          </h2>
          <p className="text-white/60 text-lg max-w-[600px] mx-auto mb-8">
            These guides will get you started, but if you need hands-on help with setup, custom skills, or enterprise deployment, I&apos;m here to help.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-orange text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-orange-hover transition-all hover:-translate-y-0.5 shadow-glow-orange"
          >
            Get Expert Help
          </a>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 bg-surface">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-muted-dark text-lg">
              Book a free consultation to discuss your OpenClaw requirements.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
