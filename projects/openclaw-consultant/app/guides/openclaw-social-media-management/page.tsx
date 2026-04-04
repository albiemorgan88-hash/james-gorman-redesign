import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "OpenClaw Social Media Automation",
  description: "Complete guide to automating social media management with OpenClaw. Learn content creation, scheduling, engagement monitoring, and performance tracking.",
  keywords: [
    "openclaw social media automation",
    "automated social media management", 
    "social media content automation",
    "openclaw instagram automation",
    "automated social posting",
    "social media workflow automation",
    "openclaw facebook automation",
    "social media ai assistant"
  ],
  alternates: { canonical: "https://openclawconsultant.co.uk/guides/openclaw-social-media-management" },
  openGraph: {
    title: "OpenClaw Social Media Automation",
    description: "Complete guide to automating social media management with OpenClaw. Learn content creation, scheduling, and engagement monitoring.",
    url: "https://openclawconsultant.co.uk/guides/openclaw-social-media-management",
    type: "article",
  },
};

const socialFeatures = [
  {
    feature: "Content Creation & Scheduling",
    description: "AI-powered content generation and optimal posting times",
    capabilities: ["Brand-consistent content", "Multi-platform adaptation", "Trending hashtags", "Visual content creation"],
    platforms: ["Instagram", "Facebook", "Twitter", "LinkedIn", "TikTok"]
  },
  {
    feature: "Engagement Monitoring",
    description: "Real-time monitoring and automated responses",
    capabilities: ["Comment management", "DM responses", "Mention tracking", "Sentiment analysis"],
    platforms: ["All major platforms", "Custom monitoring"]
  },
  {
    feature: "Analytics & Reporting",
    description: "Comprehensive performance tracking and insights",
    capabilities: ["Growth metrics", "Engagement analysis", "ROI tracking", "Competitive analysis"],
    platforms: ["Cross-platform analytics", "Custom dashboards"]
  },
  {
    feature: "Community Management",
    description: "Automated community building and management",
    capabilities: ["Follower engagement", "Influencer outreach", "User-generated content", "Crisis management"],
    platforms: ["Platform-specific strategies"]
  }
];

export default function OpenClawSocialMediaManagementPage() {
  return (
    <>
      <section className="hero-gradient relative overflow-hidden min-h-[70vh] flex items-center grain">
        <div className="max-w-[1140px] mx-auto px-6 relative z-10 py-20">
          <div className="max-w-[720px]">
            <h1 className="font-heading text-4xl sm:text-5xl md:text-[3.2rem] font-extrabold text-white mb-6 leading-[1.05] tracking-tight">
              OpenClaw for
              <br />
              <span className="text-orange">Social Media Management</span>
            </h1>

            <p className="text-white/60 text-lg md:text-xl max-w-[540px] mb-10 leading-relaxed">
              Automate your entire social media presence. From content creation to community management, OpenClaw handles everything while you focus on strategy.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#features" className="inline-flex items-center justify-center bg-orange text-white px-8 py-4 rounded-btn font-semibold text-base hover:bg-orange-hover transition-all hover:-translate-y-0.5 shadow-glow-orange">
                Explore Features
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="bg-white py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Complete Social Media Automation
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {socialFeatures.map((feature, index) => (
              <div key={index} className="bg-surface rounded-box p-8 shadow-card">
                <h3 className="font-heading font-bold text-xl text-dark mb-3">{feature.feature}</h3>
                <p className="text-muted mb-4">{feature.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-dark mb-2">Key Capabilities:</h4>
                  <ul className="space-y-1">
                    {feature.capabilities.map((capability, idx) => (
                      <li key={idx} className="text-muted text-sm flex gap-2">
                        <span className="text-orange">▸</span>
                        {capability}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-dark mb-2">Platform Support:</h4>
                  <div className="flex flex-wrap gap-2">
                    {Array.isArray(feature.platforms) ? feature.platforms.map((platform, idx) => (
                      <span key={idx} className="bg-orange/10 text-orange px-2 py-1 rounded-full text-xs">
                        {platform}
                      </span>
                    )) : (
                      <span className="bg-orange/10 text-orange px-2 py-1 rounded-full text-xs">
                        {feature.platforms}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      {/* Related Guides */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-[1140px] mx-auto px-6">
          <h2 className="font-heading text-2xl font-bold text-navy mb-8 text-center">Related Guides</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-[800px] mx-auto">
            <a href="/guides/openclaw-skills-guide" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-slate-100">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">OpenClaw Skills: Complete Guide</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/openclaw-cron-jobs" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-slate-100">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">OpenClaw Cron Jobs: Automation Guide</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/what-is-openclaw-2026" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-slate-100">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">What is OpenClaw? Complete Guide 2026</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/openclaw-setup-mac" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-slate-100">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">OpenClaw Setup Guide for Mac 2026</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-navy text-white py-24 relative overflow-hidden grain">
        <div className="max-w-[1140px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Automate Your
                <br />
                <span className="text-orange">Social Media Presence</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Free consultation to assess your social media automation opportunities and design a custom strategy.
              </p>
            </div>

            <div className="bg-white/[0.03] border border-white/[0.06] rounded-box p-8">
              <h3 className="font-heading font-bold text-xl text-white mb-1">Social Media Automation Consultation</h3>
              <p className="text-white/40 text-sm mb-6">Discover your social media automation potential</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}