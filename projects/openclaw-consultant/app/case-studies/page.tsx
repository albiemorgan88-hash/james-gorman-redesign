import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'OpenClaw Case Studies & Client Examples',
  description:
    'Real OpenClaw case studies from Blue Canvas, including Follow Rabbit and a one-agent SEO agency build. See how memory, skills, and automation work in practice.',
  alternates: { canonical: 'https://openclawconsultant.co.uk/case-studies' },
  openGraph: {
    title: 'OpenClaw Case Studies & Client Examples',
    description:
      'Real OpenClaw case studies from Blue Canvas, including Follow Rabbit and a one-agent SEO agency build.',
    url: 'https://openclawconsultant.co.uk/case-studies',
    type: 'website',
  },
};

const caseStudies = [
  {
    title: 'How a Cloud Cost Optimisation SaaS Uses OpenClaw to Automate Internal Operations',
    href: '/case-studies/follow-rabbit-ai-cloud-optimization',
    category: 'Operations',
    readTime: '7 min read',
    summary:
      'Follow Rabbit helps enterprise teams cut Google Cloud waste. Blue Canvas is now rolling out OpenClaw to streamline its own internal operations with memory, custom skills, and workflow orchestration.',
    highlights: ['$50M+ saved', '32% average BigQuery reduction', 'Early-stage rollout'],
    accent: 'bg-blue/10 text-blue',
  },
  {
    title: '£250/Month SEO Agency with One OpenClaw Agent',
    href: '/case-studies/seo-agency-250-month',
    category: 'SEO Automation',
    readTime: '8 min read',
    summary:
      'How Blue Canvas automated an SEO agency workflow using a single OpenClaw agent, turning delivery, reporting, and content production into a lean recurring-revenue model.',
    highlights: ['£250 MRR', '95% automation rate', '23 automated workflows'],
    accent: 'bg-orange/10 text-orange',
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <section className="hero-gradient relative overflow-hidden pt-32 pb-20">
        <div className="absolute top-20 right-[10%] w-[400px] h-[400px] bg-orange/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 left-[5%] w-[300px] h-[300px] bg-blue/10 rounded-full blur-[100px]" />

        <div className="max-w-[1140px] mx-auto px-6 relative z-10">
          <div className="text-center max-w-[760px] mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-white/60 text-sm font-medium">Real OpenClaw Work</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 leading-[1.05] tracking-tight">
              OpenClaw <span className="text-orange">Case Studies</span>
            </h1>

            <p className="text-white/60 text-lg md:text-xl max-w-[640px] mx-auto leading-relaxed">
              Practical examples of how Blue Canvas uses OpenClaw for operations, automation, and revenue-generating work.
              No fluff, just what was built and why it matters.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-cream border-b border-border-light">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-white rounded-2xl p-6 shadow-card border border-border-light">
              <div className="text-3xl font-heading font-extrabold text-blue mb-1">2</div>
              <div className="text-sm text-muted-dark">Published case studies</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-card border border-border-light">
              <div className="text-3xl font-heading font-extrabold text-orange mb-1">Ops + Revenue</div>
              <div className="text-sm text-muted-dark">Real-world OpenClaw use cases</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-card border border-border-light">
              <div className="text-3xl font-heading font-extrabold text-navy mb-1">UK-led</div>
              <div className="text-sm text-muted-dark">Built and run by Blue Canvas</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-surface">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <Link
                key={study.href}
                href={study.href}
                className="group bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-200 hover:-translate-y-1 border border-border-light"
              >
                <div className="flex items-center justify-between gap-4 mb-4 flex-wrap">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${study.accent}`}>
                    {study.category}
                  </span>
                  <span className="text-muted text-xs">{study.readTime}</span>
                </div>

                <h2 className="font-heading text-2xl font-bold text-navy mb-4 group-hover:text-orange transition-colors">
                  {study.title}
                </h2>

                <p className="text-muted-dark text-sm mb-6 leading-relaxed">{study.summary}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {study.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="text-xs font-semibold px-3 py-1.5 rounded-full bg-slate-100 text-muted-dark"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

                <div className="flex items-center text-orange font-semibold text-sm">Read Case Study →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy text-white py-20 relative overflow-hidden grain">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue/5 rounded-full blur-[140px]" />

        <div className="max-w-[900px] mx-auto px-6 text-center relative z-10">
          <p className="text-orange font-heading font-semibold text-sm uppercase tracking-widest mb-4">
            Want Your Own System?
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Build OpenClaw Around Your Actual Workflow
          </h2>
          <p className="text-white/60 text-lg mb-8 max-w-[620px] mx-auto leading-relaxed">
            Blue Canvas sets up OpenClaw for real business operations, from memory and custom skills to recurring workflows and multi-agent orchestration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center bg-orange text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-orange-hover transition-all hover:-translate-y-0.5"
            >
              View Pricing
            </Link>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center bg-white/5 text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-white/10 transition-all border border-white/10"
            >
              Book Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
