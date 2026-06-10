import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "How to Use OpenClaw for Your Business — Real Use Cases & Examples",
  description:
    "Discover how businesses use OpenClaw for customer service, internal ops, marketing, and sales. Real-world examples from estate agents, sports clubs, and recruitment platforms.",
  keywords: [
    "how to use openclaw",
    "openclaw use cases",
    "openclaw for business",
    "openclaw examples",
    "openclaw customer service",
    "openclaw marketing automation",
    "openclaw sales automation",
    "openclaw internal operations",
  ],
  alternates: {
    canonical: "https://openclawconsultant.co.uk/guides/openclaw-how-to-use",
  },
  openGraph: {
    title: "How to Use OpenClaw for Your Business — Real Use Cases & Examples",
    description:
      "Practical guide showing how businesses use OpenClaw for customer service, marketing, sales, and operations with real-world examples.",
    url: "https://openclawconsultant.co.uk/guides/openclaw-how-to-use",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Use OpenClaw for Your Business — Real Use Cases & Examples",
  description:
    "Practical guide showing how businesses use OpenClaw for customer service, marketing, sales and operations",
  author: { "@type": "Person", name: "Phil Patterson" },
  publisher: { "@type": "Organization", name: "OpenClaw Consultant UK" },
};

const useCaseCategories = [
  {
    icon: "🎧",
    category: "Customer Service",
    headline: "24/7 Intelligent Customer Support Without the Headcount",
    description:
      "OpenClaw agents handle customer enquiries, route complex issues to your team, and maintain context across conversations — all through channels your customers already use.",
    capabilities: [
      "Instant responses via WhatsApp, Telegram, email, or web chat",
      "Context-aware conversations — remembers previous interactions",
      "Automatic escalation to a human when the agent cannot resolve an issue",
      "Multi-language support without hiring multilingual staff",
      "After-hours coverage at a fraction of the cost of night shifts",
    ],
    metrics: { timeSaved: "35 hrs/mo", costReduction: "60%", responseTime: "< 30 seconds" },
  },
  {
    icon: "⚙️",
    category: "Internal Operations",
    headline: "Automate the Admin That Eats Your Week",
    description:
      "Repetitive admin tasks — reporting, data entry, scheduling, document generation — consume enormous amounts of time. OpenClaw handles them in the background while your team focuses on what matters.",
    capabilities: [
      "Automated report generation — daily, weekly, monthly",
      "Document drafting and formatting based on templates",
      "Calendar management and meeting scheduling",
      "Invoice processing and financial summaries",
      "HR task automation — onboarding checklists, policy lookups",
    ],
    metrics: { timeSaved: "50 hrs/mo", costReduction: "45%", responseTime: "Instant" },
  },
  {
    icon: "📣",
    category: "Marketing",
    headline: "Content, SEO, and Social Media on Autopilot",
    description:
      "Marketing teams are stretched thin. OpenClaw can plan content calendars, draft posts, run SEO audits, track rankings, and manage social publishing — giving your marketing function the output of a much larger team.",
    capabilities: [
      "SEO audits and keyword tracking on autopilot",
      "Content calendar planning and blog post drafting",
      "Social media post creation and scheduling",
      "Competitor analysis and market monitoring",
      "Performance reporting across all marketing channels",
    ],
    metrics: { timeSaved: "40 hrs/mo", costReduction: "50%", responseTime: "Real-time" },
  },
  {
    icon: "💰",
    category: "Sales",
    headline: "Find, Qualify, and Nurture Leads While You Sleep",
    description:
      "OpenClaw can scrape prospect databases, enrich contact information, score leads, generate personalised outreach, and update your CRM — all without human intervention.",
    capabilities: [
      "Lead generation from multiple data sources",
      "Contact enrichment with company and individual data",
      "Personalised outreach email drafting",
      "CRM updates and pipeline management",
      "Follow-up scheduling and reminder automation",
    ],
    metrics: { timeSaved: "30 hrs/mo", costReduction: "40%", responseTime: "Always-on" },
  },
];

const realWorldExamples = [
  {
    industry: "Estate Agency",
    businessType: "Regional property firm with 200+ listings",
    challenge:
      "SEO was managed manually, requiring 20+ hours per week to update listings, write descriptions, and monitor local rankings. Staff lacked technical SEO knowledge.",
    solution:
      "OpenClaw was configured with SEO-specific skills to automatically audit the website, generate optimised property descriptions, update meta tags, track keyword positions, and produce weekly performance reports.",
    results: [
      "SEO management time reduced from 20 hours to 3 hours per week",
      "Organic traffic increased 45% in first three months",
      "Property listing descriptions generated in minutes instead of hours",
      "Weekly SEO reports delivered automatically every Monday morning",
    ],
    monthlyValue: "£2,500 in equivalent staff time",
    openclawCost: "£400/month",
  },
  {
    industry: "Sports Club",
    businessType: "Amateur cricket club with 150 members",
    challenge:
      "Club committee relied entirely on volunteers for communication, event organisation, membership tracking, and social media. Important tasks were falling through the cracks.",
    solution:
      "OpenClaw was set up to handle member communications, social media posting, event scheduling, match result publishing, and membership renewal reminders — all orchestrated through a Telegram group.",
    results: [
      "Committee admin time cut by 70%",
      "Social media posting became consistent (5x per week vs sporadic)",
      "Membership renewals automated — 95% renewal rate vs 78% previously",
      "Match results published within minutes of completion",
    ],
    monthlyValue: "£800 in volunteer time saved",
    openclawCost: "£120/month",
  },
  {
    industry: "Recruitment Platform",
    businessType: "Niche UK trade jobs website",
    challenge:
      "Content creation for 15+ trade categories was a bottleneck. Each career guide required research, writing, and SEO optimisation. The site was growing too slowly.",
    solution:
      "OpenClaw was configured with content-generation and SEO skills to research trade careers, draft comprehensive guides, optimise for search, and deploy directly to the website.",
    results: [
      "Career guide production accelerated from 2 per month to 10+",
      "Each guide SEO-optimised before publication",
      "Organic traffic grew 120% in six months",
      "Site now ranks for 500+ trade-related keywords",
    ],
    monthlyValue: "£4,000 in content costs",
    openclawCost: "£350/month",
  },
];

const gettingStartedSteps = [
  {
    step: 1,
    title: "Identify Your Biggest Time Drain",
    description: "What repetitive tasks consume the most time in your business? Customer enquiries? Report generation? Content creation? Lead research? Start there.",
    tip: "Look for tasks that are repetitive, rules-based, and time-consuming. These are the easiest wins for AI automation.",
  },
  {
    step: 2,
    title: "Map Your Communication Channels",
    description: "Where does your team communicate? WhatsApp, Slack, Teams, email? OpenClaw integrates with all of them, so your agent meets your team where they already work.",
    tip: "Start with one channel and expand. Most businesses begin with Telegram or Slack for internal use.",
  },
  {
    step: 3,
    title: "Define Success Metrics",
    description: "How will you measure ROI? Hours saved, response times reduced, leads generated, content produced? Set clear targets before implementation.",
    tip: "Track metrics for one month before and after deployment to quantify impact.",
  },
  {
    step: 4,
    title: "Professional Setup vs DIY",
    description: "Decide whether to set up OpenClaw yourself or get professional help. Professional setup is faster, more secure, and includes ongoing support.",
    tip: "Most businesses save money with professional setup. See our comparison guide.",
    link: "/guides/openclaw-setup-business",
  },
  {
    step: 5,
    title: "Start Small, Scale Fast",
    description: "Begin with 2-3 core skills and expand as you see results. OpenClaw scales naturally — you can add new capabilities without disrupting existing ones.",
    tip: "The most successful deployments start focused and expand based on measured results.",
  },
];

const departmentBreakdown = [
  {
    department: "Finance",
    tasks: ["Invoice processing and reconciliation", "Expense report summarisation", "Cash flow forecasting assistance", "Financial report generation", "Vendor payment reminders"],
  },
  {
    department: "HR & People",
    tasks: ["New starter onboarding checklists", "Policy and handbook queries", "Leave request tracking", "Training schedule management", "Employee survey analysis"],
  },
  {
    department: "IT & Development",
    tasks: ["Code review assistance", "Bug triage and categorisation", "Deployment automation", "Documentation generation", "System health monitoring"],
  },
  {
    department: "Legal & Compliance",
    tasks: ["Contract clause extraction", "Regulatory update monitoring", "Compliance checklist automation", "Document version control", "GDPR data subject request handling"],
  },
];

export default function HowToUseOpenClawPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="hero-gradient relative overflow-hidden min-h-[70vh] flex items-center grain">
        <div className="max-w-[1140px] mx-auto px-6 relative z-10 py-20">
          <div className="max-w-[720px]">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-white/60 text-sm font-medium">Real Examples From Production</span>
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-[3.2rem] font-extrabold text-white mb-6 leading-[1.05] tracking-tight">
              How to Use OpenClaw
              <br />
              <span className="text-orange">for Your Business</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl max-w-[540px] mb-10 leading-relaxed">
              Customer service, marketing, sales, internal ops — see exactly how businesses are using OpenClaw right now, with real results from real deployments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#use-cases" className="inline-flex items-center justify-center bg-orange text-white px-8 py-4 rounded-btn font-semibold text-base hover:bg-orange-hover transition-all hover:-translate-y-0.5 shadow-glow-orange">
                See Use Cases
              </a>
              <a href="#examples" className="inline-flex items-center justify-center bg-white/5 text-white px-8 py-4 rounded-btn font-semibold text-base hover:bg-white/10 transition-all border border-white/10">
                Real Examples ↓
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="use-cases" className="bg-white py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">Four Ways Businesses Use OpenClaw</h2>
            <p className="text-muted max-w-[700px] mx-auto">
              OpenClaw isn&apos;t a single-purpose tool. It&apos;s an AI operating system that adapts to whatever your business needs. Here&apos;s how companies are using it across departments.
            </p>
          </div>

          <div className="space-y-16">
            {useCaseCategories.map((uc, i) => (
              <div key={uc.category} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start`}>
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="text-4xl mb-4">{uc.icon}</div>
                  <h3 className="font-heading font-bold text-2xl text-dark mb-3">{uc.category}</h3>
                  <p className="font-heading font-semibold text-lg text-orange mb-4">{uc.headline}</p>
                  <p className="text-muted leading-relaxed mb-6">{uc.description}</p>
                  <ul className="space-y-3">
                    {uc.capabilities.map((cap) => (
                      <li key={cap} className="flex gap-3 items-start text-sm text-muted-dark">
                        <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
                        {cap}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`bg-surface rounded-box p-8 border border-border ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <h4 className="font-heading font-bold text-dark mb-6">Typical Results</h4>
                  <div className="grid grid-cols-1 gap-6">
                    <div className="text-center bg-white rounded-lg p-6 shadow-card">
                      <div className="font-heading font-extrabold text-3xl text-orange mb-1">{uc.metrics.timeSaved}</div>
                      <div className="text-muted text-sm">Time Saved</div>
                    </div>
                    <div className="text-center bg-white rounded-lg p-6 shadow-card">
                      <div className="font-heading font-extrabold text-3xl text-orange mb-1">{uc.metrics.costReduction}</div>
                      <div className="text-muted text-sm">Cost Reduction</div>
                    </div>
                    <div className="text-center bg-white rounded-lg p-6 shadow-card">
                      <div className="font-heading font-extrabold text-3xl text-orange mb-1">{uc.metrics.responseTime}</div>
                      <div className="text-muted text-sm">Response Time</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="examples" className="bg-navy text-white py-24 relative overflow-hidden grain">
        <div className="max-w-[1140px] mx-auto px-6 relative z-10">
          <div className="text-center mb-14">
            <p className="text-orange font-heading font-semibold text-sm uppercase tracking-widest mb-4">Case Studies</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Real Businesses. Real Results.</h2>
            <p className="text-white/60 max-w-[700px] mx-auto">
              These are anonymised example patterns based on practical OpenClaw consulting work by Phil Patterson and Blue Canvas AI. Use them as planning benchmarks, not guarantees.
            </p>
          </div>

          <div className="space-y-12">
            {realWorldExamples.map((example) => (
              <div key={example.industry} className="bg-white/[0.03] border border-white/[0.06] rounded-box p-8">
                <div className="flex items-center gap-4 mb-6">
                  <span className="inline-block bg-orange/20 text-orange text-xs font-semibold px-3 py-1 rounded-full">{example.industry}</span>
                  <span className="text-white/40 text-sm">{example.businessType}</span>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="font-semibold text-red-300 mb-3">The Challenge</h4>
                    <p className="text-white/70 text-sm leading-relaxed">{example.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-300 mb-3">The Solution</h4>
                    <p className="text-white/70 text-sm leading-relaxed">{example.solution}</p>
                  </div>
                </div>
                <div className="mb-6">
                  <h4 className="font-semibold text-white mb-3">Results:</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {example.results.map((result) => (
                      <li key={result} className="text-white/70 text-sm flex gap-2 items-start">
                        <span className="text-orange flex-shrink-0">▸</span>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/10">
                  <div className="text-center">
                    <div className="text-sm text-white/40 mb-1">Monthly Value</div>
                    <div className="font-bold text-lg text-green-300">{example.monthlyValue}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-white/40 mb-1">OpenClaw Cost</div>
                    <div className="font-bold text-lg text-orange">{example.openclawCost}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-light py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">OpenClaw Across Every Department</h2>
            <p className="text-muted max-w-[600px] mx-auto">
              AI automation isn&apos;t just for marketing or customer service. Here&apos;s what OpenClaw can handle in every department.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {departmentBreakdown.map((dept) => (
              <div key={dept.department} className="bg-white rounded-box p-8 border border-border card-lift">
                <h3 className="font-heading font-bold text-dark text-lg mb-4">{dept.department}</h3>
                <ul className="space-y-2">
                  {dept.tasks.map((task) => (
                    <li key={task} className="text-muted text-sm flex gap-2 items-start">
                      <span className="text-blue-500 flex-shrink-0">•</span>
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">How to Get Started</h2>
            <p className="text-muted max-w-[600px] mx-auto">Five steps to getting OpenClaw working in your business</p>
          </div>
          <div className="space-y-8">
            {gettingStartedSteps.map((step) => (
              <div key={step.step} className="bg-surface rounded-box p-8 shadow-card">
                <div className="flex items-start gap-6">
                  <div className="bg-orange text-white font-bold text-xl w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">{step.step}</div>
                  <div className="flex-1">
                    <h3 className="font-heading font-bold text-xl text-dark mb-3">{step.title}</h3>
                    <p className="text-muted leading-relaxed mb-4">{step.description}</p>
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <p className="text-blue-700 text-sm"><strong>Tip:</strong> {step.tip}</p>
                      {step.link && (
                        <a href={step.link} className="text-orange text-sm font-medium hover:underline mt-2 inline-block">
                          Read the full guide →
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-16">
        <div className="max-w-[1140px] mx-auto px-6">
          <h2 className="font-heading text-2xl font-bold text-dark mb-8 text-center">Related Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "OpenClaw Installation Service", href: "/services/openclaw-installation", desc: "Professional setup in 24 hours" },
              { title: "OpenClaw Pricing Explained", href: "/guides/openclaw-pricing-explained", desc: "Complete cost breakdown & ROI" },
              { title: "AI Agent vs Chatbot", href: "/guides/ai-agent-vs-chatbot", desc: "Why agents beat chatbots" },
              { title: "OpenClaw for Business", href: "/guides/openclaw-for-business", desc: "Complete implementation guide" },
            ].map((link) => (
              <a key={link.href} href={link.href} className="bg-white rounded-lg p-4 border border-border hover:border-orange/30 hover:shadow-md transition-all">
                <h3 className="font-semibold text-dark text-sm mb-1">{link.title}</h3>
                <p className="text-muted text-xs">{link.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-orange py-16 relative overflow-hidden">
        <div className="max-w-[900px] mx-auto px-6 text-center relative z-10">
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-white mb-4">
            Let Us Show You What OpenClaw Can Do for YOUR Business
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-[600px] mx-auto">
            Every business is different. Book a free consultation and Phil will map out exactly which tasks OpenClaw can automate for you — with expected ROI.
          </p>
          <a href="#contact" className="inline-flex items-center justify-center bg-navy text-white px-10 py-4 rounded-btn font-bold text-lg hover:bg-dark transition-all hover:-translate-y-0.5 shadow-xl">
            Book Free Consultation →
          </a>
        </div>
      </section>

      <section id="contact" className="bg-navy text-white py-24 relative overflow-hidden grain">
        <div className="max-w-[1140px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                See What OpenClaw
                <br />
                <span className="text-orange">Can Do for You</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Phil will assess your business, identify the highest-impact automation opportunities, and give you a clear plan with expected ROI. No obligation.
              </p>
              <div className="bg-white/[0.03] border border-white/[0.06] rounded-box p-6 mb-8">
                <h3 className="font-semibold text-white mb-3">What you&apos;ll get:</h3>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li className="flex gap-2"><span className="text-orange">✓</span>Personalised automation opportunity assessment</li>
                  <li className="flex gap-2"><span className="text-orange">✓</span>Live demo of production OpenClaw setup</li>
                  <li className="flex gap-2"><span className="text-orange">✓</span>Custom ROI estimate for your business</li>
                  <li className="flex gap-2"><span className="text-orange">✓</span>Honest advice — even if OpenClaw isn&apos;t right for you</li>
                </ul>
              </div>
              <div className="space-y-4 text-white/50 text-sm">
                <div className="flex gap-3 items-center">
                  <span className="text-orange">📧</span>
                  <a href="mailto:contact@bluecanvas.ai" className="hover:text-white transition-colors">contact@bluecanvas.ai</a>
                </div>
                <div className="flex gap-3 items-center">
                  <span className="text-orange">📞</span>
                  <a href="tel:07849071946" className="hover:text-white transition-colors">07849 071946</a>
                </div>
              </div>
            </div>
            <div className="bg-white/[0.03] border border-white/[0.06] rounded-box p-8">
              <h3 className="font-heading font-bold text-xl text-white mb-1">Book Your Free Consultation</h3>
              <p className="text-white/40 text-sm mb-6">Tell us about your business and we&apos;ll show you the possibilities</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
