import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import QuickContactForm from "@/components/QuickContactForm";

export const metadata: Metadata = {
  title: "OpenClaw Consultant UK — Expert Setup, Custom Skills & AI Automation",
  description:
    "Phil Patterson is the UK's leading OpenClaw consultant. 25+ production skills, daily operation, expert setup and training. Get OpenClaw working for your business. Free consultation.",
  alternates: { canonical: "https://openclawconsultant.co.uk" },
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "OpenClaw Consultant UK",
    title: "OpenClaw Consultant UK — Expert Setup, Custom Skills & AI Automation",
    description: "Phil Patterson is the UK's leading OpenClaw consultant. 25+ production skills, daily operation, expert setup and training. Get OpenClaw working for your business. Free consultation.",
    url: "https://openclawconsultant.co.uk",
    images: [
      {
        url: "https://openclawconsultant.co.uk/api/og",
        width: 1200,
        height: 630,
        alt: "OpenClaw Consultant UK - Expert Setup, Custom Skills & AI Automation",
      },
    ],
  },
  twitter: { 
    card: "summary_large_image",
    title: "OpenClaw Consultant UK — Expert Setup, Custom Skills & AI Automation",
    description: "Phil Patterson is the UK's leading OpenClaw consultant. 25+ production skills, daily operation, expert setup and training. Free consultation.",
    images: ["https://openclawconsultant.co.uk/api/og"],
  },
};

const services = [
  {
    icon: "⚙️",
    title: "Setup & Configuration",
    desc: "Full OpenClaw installation, gateway configuration, model routing, and environment setup. Production-ready from day one.",
  },
  {
    icon: "🧩",
    title: "Custom Skill Development",
    desc: "Bespoke skills built for your business — SEO engines, lead scrapers, content pipelines, CRM integrations, whatever you need.",
  },
  {
    icon: "🤖",
    title: "Agent Orchestration",
    desc: "Multi-agent workflows with subagent spawning, heartbeat monitoring, and cron scheduling. Your AI team, coordinated.",
  },
  {
    icon: "🔄",
    title: "Workflow Automation",
    desc: "Connect OpenClaw to your existing tools — Webflow, GitHub, Google Ads, Apollo, Ahrefs, Slack, and more.",
  },
  {
    icon: "📚",
    title: "Training & Handover",
    desc: "Learn to operate and extend your OpenClaw setup. Skill authoring, SOUL.md tuning, memory management, the lot.",
  },
  {
    icon: "🛡️",
    title: "Ongoing Support",
    desc: "Monthly retainer for monitoring, skill updates, troubleshooting, and new capability development as your needs grow.",
  },
];

const useCases = [
  {
    title: "SEO Automation",
    desc: "Automated audits, keyword tracking, content generation, Webflow meta updates, and competitor analysis — all orchestrated by OpenClaw skills.",
    tag: "Marketing",
  },
  {
    title: "Lead Generation",
    desc: "Scrape prospects from Apollo, Google Maps, and Companies House. Enrich, score, and build targeted outreach lists automatically.",
    tag: "Sales",
  },
  {
    title: "Content Creation",
    desc: "LinkedIn calendars, blog posts, client showcases, and social content — planned, drafted, and scheduled by your agent.",
    tag: "Content",
  },
  {
    title: "Client Management",
    desc: "Automated project tracking, report generation, site health monitoring, and proactive client communication.",
    tag: "Operations",
  },
  {
    title: "Development Workflows",
    desc: "GitHub issue triage, PR reviews, code generation, and automated deployments through coding agent subagents.",
    tag: "Engineering",
  },
  {
    title: "Financial Monitoring",
    desc: "Crypto wallet management, DeFi position tracking, domain opportunity scouting, and revenue dashboards.",
    tag: "Finance",
  },
];

const credentials = [
  { value: "25+", label: "Custom Skills Built" },
  { value: "Daily", label: "Production Use" },
  { value: "6+", label: "Service Lines" },
  { value: "100%", label: "AI-Powered Ops" },
];

export default function Home() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="hero-gradient relative overflow-hidden min-h-[90vh] flex items-center grain">
        {/* Decorative elements */}
        <div className="absolute top-20 right-[10%] w-[500px] h-[500px] bg-orange/5 rounded-full blur-[120px] glow-pulse" />
        <div className="absolute bottom-20 left-[5%] w-[400px] h-[400px] bg-blue/10 rounded-full blur-[100px] glow-pulse" style={{ animationDelay: "3s" }} />

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="max-w-[1140px] mx-auto px-6 relative z-10 py-32">
          <div className="max-w-[720px]">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-white/60 text-sm font-medium">UK&apos;s First Dedicated OpenClaw Consultant</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl md:text-[3.5rem] lg:text-[4rem] font-extrabold text-white mb-6 leading-[1.05] tracking-tight">
              Get OpenClaw
              <br />
              <span className="text-orange">Working For</span>
              <br />
              Your Business
            </h1>

            <p className="text-white/60 text-lg md:text-xl max-w-[560px] mb-10 leading-relaxed">
              Phil Patterson runs OpenClaw in production every single day — managing an entire AI consultancy through it. Let him set it up for yours.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-orange text-white px-8 py-4 rounded-btn font-semibold text-base hover:bg-orange-hover transition-all hover:-translate-y-0.5 shadow-glow-orange"
              >
                Book Free Consultation
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center bg-white/5 text-white px-8 py-4 rounded-btn font-semibold text-base hover:bg-white/10 transition-all border border-white/10"
              >
                See Services ↓
              </a>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#fafbfc] to-transparent" />
      </section>

      {/* ============ PROMINENT CONTACT FORM ============ */}
      <section className="bg-gradient-to-br from-orange/5 via-white to-blue/5 py-20 border-b border-border relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-[10%] w-[300px] h-[300px] bg-orange/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-[15%] w-[250px] h-[250px] bg-blue/10 rounded-full blur-[80px]" />
        
        <div className="max-w-[1100px] mx-auto px-6 relative z-10">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-orange text-white rounded-full px-4 py-2 mb-4 shadow-lg">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
              <span className="text-sm font-semibold">Usually Respond Within Hours</span>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-dark mb-4">
              Skip the Research Phase.
              <br />
              <span className="text-orange">Let&apos;s Talk OpenClaw.</span>
            </h2>
            <p className="text-muted-dark text-lg max-w-[600px] mx-auto leading-relaxed">
              Get straight answers from someone who runs OpenClaw in production daily. No sales pressure — just honest advice about whether it&apos;s right for your business.
            </p>
          </div>

          <div className="max-w-[700px] mx-auto">
            <div className="bg-white rounded-2xl p-8 md:p-10 border-2 border-orange/20 shadow-2xl shadow-orange/10 relative hover:shadow-3xl hover:border-orange/30 transition-all duration-300">
              {/* Accent decoration */}
              <div className="absolute -top-3 left-8 bg-orange text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg animate-pulse">
                ✨ Free Consultation
              </div>
              
              <div className="text-center mb-8">
                <h3 className="font-heading font-bold text-xl text-dark mb-2">Get In Touch</h3>
                <p className="text-muted text-sm">Tell us about your business and we&apos;ll show you exactly how OpenClaw can help</p>
              </div>
              
              <QuickContactForm />
              
              {/* Trust indicators */}
              <div className="flex flex-wrap justify-center gap-6 mt-8 pt-6 border-t border-border text-xs text-muted">
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Free consultation</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>No sales pressure</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Production expertise</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>UK-based team</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ WHAT IS OPENCLAW ============ */}
      <section className="bg-light py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="max-w-[740px] mx-auto text-center">
            <p className="text-orange font-heading font-semibold text-sm uppercase tracking-widest mb-4">
              What Is OpenClaw?
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-6">
              Your Business, Run by AI Agents
            </h2>
            <p className="text-muted text-lg leading-relaxed mb-8">
              OpenClaw is an open-source AI operating system that lets you deploy persistent AI agents — complete with memory, custom skills, scheduling, and multi-agent orchestration. Think of it as giving your business an AI team that works 24/7, integrates with your tools, and gets smarter over time.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
              <div className="bg-white rounded-box p-6 shadow-card">
                <div className="text-2xl mb-3">🧠</div>
                <h3 className="font-heading font-bold text-dark mb-1">Persistent Memory</h3>
                <p className="text-muted text-sm">Agents remember context across sessions. No starting from scratch.</p>
              </div>
              <div className="bg-white rounded-box p-6 shadow-card">
                <div className="text-2xl mb-3">🔧</div>
                <h3 className="font-heading font-bold text-dark mb-1">Custom Skills</h3>
                <p className="text-muted text-sm">Build skills for anything — SEO, lead gen, deployments, monitoring.</p>
              </div>
              <div className="bg-white rounded-box p-6 shadow-card">
                <div className="text-2xl mb-3">⚡</div>
                <h3 className="font-heading font-bold text-dark mb-1">Always Running</h3>
                <p className="text-muted text-sm">Heartbeats, cron jobs, and subagents working while you sleep.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ SERVICES ============ */}
      <section id="services" className="bg-white py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <p className="text-orange font-heading font-semibold text-sm uppercase tracking-widest mb-4">
            Services
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
            Everything You Need to Get Running
          </h2>
          <p className="text-muted text-lg max-w-[560px] mb-14">
            From first install to production-grade automation. Hands-on expertise, not theoretical advice.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-surface rounded-box p-8 border border-border card-lift"
              >
                <div className="text-3xl mb-4">{s.icon}</div>
                <h3 className="font-heading font-bold text-dark text-lg mb-2">{s.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ LATEST GUIDES ============ */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-orange font-heading font-semibold text-sm uppercase tracking-widest mb-4">
              Latest Guides
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-6">
              Expert OpenClaw Knowledge
            </h2>
            <p className="text-slate-600 text-lg max-w-[600px] mx-auto">
              In-depth guides covering everything from cost analysis to enterprise security. Written by someone who runs OpenClaw in production daily.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <a
              href="/guides/openclaw-vs-virtual-assistant-cost"
              className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-slate-100"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="inline-block bg-orange/10 text-orange px-3 py-1 rounded-full text-xs font-medium">
                  Cost Analysis
                </span>
                <span className="text-slate-400 text-xs">8 min read</span>
              </div>
              <h3 className="font-heading text-lg font-bold text-navy mb-3 group-hover:text-orange transition-colors">
                OpenClaw vs Virtual Assistant Cost Comparison 2026
              </h3>
              <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                Complete cost breakdown comparing OpenClaw AI agents vs traditional virtual assistants. Calculate ROI and savings.
              </p>
              <div className="flex items-center text-orange font-semibold text-sm">
                Read Guide →
              </div>
            </a>

            <a
              href="/guides/openclaw-enterprise-security-compliance"
              className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-slate-100"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="inline-block bg-blue/10 text-blue px-3 py-1 rounded-full text-xs font-medium">
                  Security
                </span>
                <span className="text-slate-400 text-xs">12 min read</span>
              </div>
              <h3 className="font-heading text-lg font-bold text-navy mb-3 group-hover:text-orange transition-colors">
                Enterprise Security & UK Compliance Guide 2026
              </h3>
              <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                Complete guide to OpenClaw enterprise security features, UK GDPR compliance, and data protection requirements.
              </p>
              <div className="flex items-center text-orange font-semibold text-sm">
                Read Guide →
              </div>
            </a>

            <a
              href="/guides/openclaw-performance-optimization-guide"
              className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-slate-100"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="inline-block bg-green-500/10 text-green-600 px-3 py-1 rounded-full text-xs font-medium">
                  Performance
                </span>
                <span className="text-slate-400 text-xs">10 min read</span>
              </div>
              <h3 className="font-heading text-lg font-bold text-navy mb-3 group-hover:text-orange transition-colors">
                Performance Optimization Guide 2026
              </h3>
              <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                Complete guide to optimizing OpenClaw AI agent performance, reducing response times, and maximizing efficiency.
              </p>
              <div className="flex items-center text-orange font-semibold text-sm">
                Read Guide →
              </div>
            </a>

            <a
              href="/guides/openclaw-business-systems-integration"
              className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-slate-100"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="inline-block bg-purple-500/10 text-purple-600 px-3 py-1 rounded-full text-xs font-medium">
                  Integration
                </span>
                <span className="text-slate-400 text-xs">15 min read</span>
              </div>
              <h3 className="font-heading text-lg font-bold text-navy mb-3 group-hover:text-orange transition-colors">
                Business Systems Integration Guide 2026
              </h3>
              <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                Complete guide to integrating OpenClaw AI agents with CRM, ERP, accounting software, and custom APIs.
              </p>
              <div className="flex items-center text-orange font-semibold text-sm">
                Read Guide →
              </div>
            </a>
          </div>

          <div className="text-center">
            <a
              href="/guides"
              className="inline-flex items-center justify-center bg-navy text-white px-6 py-3 rounded-btn font-semibold text-sm hover:bg-navy/90 transition-all"
            >
              View All Guides
            </a>
          </div>
        </div>
      </section>

      {/* ============ WHY BLUE CANVAS ============ */}
      <section id="why-blue-canvas" className="bg-navy text-white py-24 relative overflow-hidden grain">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue/5 rounded-full blur-[150px]" />

        <div className="max-w-[1140px] mx-auto px-6 relative z-10">
          <p className="text-orange font-heading font-semibold text-sm uppercase tracking-widest mb-4">
            Why Blue Canvas
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            AI That Actually Works. Not Slides About It.
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-white/60 text-lg leading-relaxed mb-6">
                <a href="https://bluecanvas.ai" target="_blank" rel="noopener" className="text-orange hover:text-orange-hover transition-colors">Blue Canvas AI</a> is a consultancy based in Derry, Northern Ireland that helps SMEs adopt AI that actually delivers. We don&apos;t pitch theory — we run OpenClaw in production every single day, managing SEO campaigns, generating leads, deploying code, and orchestrating AI agents across real business operations.
              </p>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Founded by Phil Patterson, Blue Canvas is hands-on and founder-led — not a faceless agency. With 25+ custom skills built and running in production, we&apos;ve already solved the problems most businesses are just starting to think about.
              </p>
              <ul className="space-y-4">
                {[
                  "SEO automation — audits, tracking, content, competitor analysis",
                  "Lead generation — Apollo, Google Maps, enrichment pipelines",
                  "Google Ads management — campaigns, bidding, reporting",
                  "Website builds & deployment — Webflow, Next.js, Vercel",
                  "Content engines — LinkedIn, blogs, client showcases",
                  "Crypto & DeFi — wallet management, position monitoring",
                ].map((item) => (
                  <li key={item} className="flex gap-3 items-start text-white/70 text-sm">
                    <span className="text-orange mt-0.5 flex-shrink-0">▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-5">
                {credentials.map((c) => (
                  <div
                    key={c.label}
                    className="bg-white/[0.03] border border-white/[0.06] rounded-box p-6 text-center"
                  >
                    <div className="font-heading font-extrabold text-3xl md:text-4xl text-orange mb-1">
                      {c.value}
                    </div>
                    <div className="text-white/40 text-sm font-medium uppercase tracking-wider">
                      {c.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Trust signal */}
              <div className="mt-6 bg-white/[0.03] border border-white/[0.06] rounded-box p-6">
                <p className="text-white/50 text-sm leading-relaxed italic">
                  &ldquo;We don&apos;t just consult on OpenClaw — we live inside it. Our agent reads emails, manages calendars, deploys websites, runs SEO, and generates leads. If it breaks, we feel it immediately. That&apos;s the kind of knowledge you get when you work with Blue Canvas.&rdquo;
                </p>
                <p className="text-orange text-sm font-semibold mt-3">— Phil Patterson, Founder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ USE CASES ============ */}
      <section id="use-cases" className="bg-light py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <p className="text-orange font-heading font-semibold text-sm uppercase tracking-widest mb-4">
            Use Cases
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
            What Can OpenClaw Do for You?
          </h2>
          <p className="text-muted text-lg max-w-[560px] mb-14">
            Real automations Phil runs in production. Not demos — actual daily workflows.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((uc) => (
              <div
                key={uc.title}
                className="bg-white rounded-box p-8 border border-border card-lift group"
              >
                <span className="inline-block bg-blue/5 text-blue text-xs font-semibold px-3 py-1 rounded-full mb-4">
                  {uc.tag}
                </span>
                <h3 className="font-heading font-bold text-dark text-lg mb-2 group-hover:text-blue transition-colors">
                  {uc.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">{uc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PRICING ============ */}
      <section id="pricing" className="bg-white py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-orange font-heading font-semibold text-sm uppercase tracking-widest mb-4">
              Pricing
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-muted text-lg max-w-[500px] mx-auto">
              Start with a free consultation. No pressure, no hidden costs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[960px] mx-auto">
            {/* Free Consultation */}
            <div className="bg-surface rounded-box p-8 border border-border card-lift">
              <div className="text-sm font-semibold text-muted uppercase tracking-wider mb-6">
                Discovery
              </div>
              <div className="font-heading font-extrabold text-4xl text-dark mb-1">Free</div>
              <p className="text-muted text-sm mb-8">30-minute consultation call</p>
              <ul className="space-y-3 mb-8">
                {[
                  "Assess your current setup",
                  "Identify automation opportunities",
                  "Honest recommendation",
                  "No obligation whatsoever",
                ].map((i) => (
                  <li key={i} className="flex gap-2 items-start text-sm text-muted-dark">
                    <span className="text-green-500 flex-shrink-0">✓</span>
                    {i}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="block text-center bg-dark text-white px-6 py-3 rounded-btn font-semibold text-sm hover:bg-dark/90 transition-all"
              >
                Get Started
              </a>
            </div>

            {/* Setup */}
            <div className="bg-navy text-white rounded-box p-8 border-2 border-orange/30 card-lift relative">
              <div className="absolute -top-3 left-6 bg-orange text-white text-xs font-bold px-3 py-1 rounded-full">
                Most Popular
              </div>
              <div className="text-sm font-semibold text-white/50 uppercase tracking-wider mb-6">
                Setup
              </div>
              <div className="font-heading font-extrabold text-4xl mb-1">
                From <span className="text-orange">£750</span>
              </div>
              <p className="text-white/50 text-sm mb-8">One-time setup fee</p>
              <ul className="space-y-3 mb-8">
                {[
                  "Full OpenClaw installation",
                  "Gateway & model configuration",
                  "Up to 3 custom skills",
                  "SOUL.md & memory setup",
                  "Integration with your tools",
                  "2 weeks post-setup support",
                ].map((i) => (
                  <li key={i} className="flex gap-2 items-start text-sm text-white/70">
                    <span className="text-orange flex-shrink-0">✓</span>
                    {i}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="block text-center bg-orange text-white px-6 py-3 rounded-btn font-semibold text-sm hover:bg-orange-hover transition-all"
              >
                Book Consultation
              </a>
            </div>

            {/* Monthly Support */}
            <div className="bg-surface rounded-box p-8 border border-border card-lift">
              <div className="text-sm font-semibold text-muted uppercase tracking-wider mb-6">
                Monthly Support
              </div>
              <div className="font-heading font-extrabold text-4xl text-dark mb-1">
                From <span className="text-orange">£250</span>
              </div>
              <p className="text-muted text-sm mb-8">Per month, cancel anytime</p>
              <ul className="space-y-3 mb-8">
                {[
                  "Ongoing skill development",
                  "Performance monitoring",
                  "Troubleshooting & updates",
                  "Priority support",
                  "Monthly review call",
                ].map((i) => (
                  <li key={i} className="flex gap-2 items-start text-sm text-muted-dark">
                    <span className="text-green-500 flex-shrink-0">✓</span>
                    {i}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="block text-center bg-dark text-white px-6 py-3 rounded-btn font-semibold text-sm hover:bg-dark/90 transition-all"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="bg-surface py-24">
        <div className="max-w-[740px] mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-orange font-heading font-semibold text-sm uppercase tracking-widest mb-4">
              FAQ
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark">
              Common Questions
            </h2>
          </div>
          <div className="space-y-0">
            {[
              {
                q: "Do I need technical knowledge to use OpenClaw?",
                a: "Not at all. Phil handles the entire setup and configuration. You interact with your agent through natural conversation — Telegram, Slack, WhatsApp, or wherever you prefer. Training is included so your team feels comfortable.",
              },
              {
                q: "How long does setup take?",
                a: "A standard setup with 2-3 custom skills takes about a week. More complex multi-agent systems with extensive integrations may take 2-3 weeks. Either way, you&apos;ll have a working system fast.",
              },
              {
                q: "Is my data safe?",
                a: "OpenClaw runs on your own infrastructure — your data never leaves your control. Phil applies security hardening to every deployment, including proper access controls and environment isolation.",
              },
              {
                q: "What makes this different from ChatGPT or other AI tools?",
                a: "ChatGPT is a conversation tool. OpenClaw is an operating system. Your agent has persistent memory, custom skills, scheduled tasks, web access, file management, and can orchestrate other agents. It doesn't just answer questions — it does work.",
              },
              {
                q: "Can I see a demo first?",
                a: "Absolutely. The free consultation includes a walkthrough of Phil's own production setup — the actual system running Blue Canvas AI. No sales decks, just the real thing.",
              },
              {
                q: "What if I already have OpenClaw installed?",
                a: "Great — Phil can audit your existing setup, optimise it, build custom skills, or help you scale. The consultation will identify the highest-impact improvements.",
              },
            ].map((faq, i) => (
              <details key={i} className="group border-b border-border">
                <summary className="flex justify-between items-center py-5 cursor-pointer font-heading font-semibold text-dark hover:text-blue transition-colors list-none [&::-webkit-details-marker]:hidden">
                  {faq.q}
                  <span className="text-orange text-xl ml-4 group-open:rotate-45 transition-transform duration-200 flex-shrink-0">
                    +
                  </span>
                </summary>
                <p className="text-muted text-sm leading-relaxed pb-5 pr-8">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ============ MID-PAGE CONTACT CTA ============ */}
      <section className="bg-gradient-to-r from-orange to-amber-500 py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange/90 to-amber-500/90" />
        <div className="max-w-[800px] mx-auto px-6 text-center relative z-10">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-3">
            Got a Question? Let's Talk.
          </h2>
          <p className="text-white/90 text-lg mb-6">
            Book your free consultation now — no slides, just real solutions.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-white text-orange px-8 py-3 rounded-btn font-bold text-lg hover:bg-gray-50 transition-all hover:-translate-y-0.5 shadow-lg"
          >
            Book Free Consultation
          </a>
        </div>
      </section>

      {/* ============ CTA BANNER ============ */}
      <section className="bg-orange py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "linear-gradient(135deg, rgba(0,0,0,0.1) 25%, transparent 25%, transparent 50%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.1) 75%, transparent 75%)",
            backgroundSize: "20px 20px",
          }}
        />
        <div className="max-w-[900px] mx-auto px-6 text-center relative z-10">
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-white mb-4">
            Stop Reading About AI. Start Using It.
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-[600px] mx-auto">
            30 minutes. Free. No slides. Phil will show you his actual production setup and tell you exactly what OpenClaw can do for your business.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-navy text-white px-10 py-4 rounded-btn font-bold text-lg hover:bg-dark transition-all hover:-translate-y-0.5 shadow-xl"
          >
            Book Your Free Consultation →
          </a>
        </div>
      </section>

      {/* ============ CONTACT ============ */}
      <section id="contact" className="bg-gradient-to-br from-navy via-slate-800 to-navy text-white py-24 relative overflow-hidden">
        <div className="absolute bottom-0 left-[20%] w-[500px] h-[500px] bg-orange/10 rounded-full blur-[120px]" />
        <div className="absolute top-0 right-[10%] w-[400px] h-[400px] bg-amber-400/10 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-orange/5 via-transparent to-transparent" />

        <div className="max-w-[1140px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-orange font-heading font-semibold text-sm uppercase tracking-widest mb-4">
                Let&apos;s Talk
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Your AI Agent Is
                <br />
                <span className="text-orange">One Conversation Away</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-4">
                Book a free, no-obligation call. Phil will walk you through his live OpenClaw setup, assess your business, and give you a straight answer — even if that&apos;s &ldquo;you don&apos;t need this yet.&rdquo;
              </p>
              <div className="bg-white/[0.03] border border-white/[0.06] rounded-box p-5 mb-8">
                <p className="text-white/70 text-sm leading-relaxed">
                  <span className="text-orange font-semibold">What you&apos;ll get:</span> A live demo of a production OpenClaw setup, honest assessment of your automation opportunities, and a clear plan — no sales pressure.
                </p>
              </div>
              <div className="space-y-4 text-white/50 text-sm">
                <div className="flex gap-3 items-center">
                  <span className="text-orange">📧</span>
                  <a href="mailto:contact@bluecanvas.ai" className="hover:text-white transition-colors">
                    contact@bluecanvas.ai
                  </a>
                </div>
                <div className="flex gap-3 items-center">
                  <span className="text-orange">📞</span>
                  <a href="tel:07849071946" className="hover:text-white transition-colors">
                    07849 071946
                  </a>
                </div>
                <div className="flex gap-3 items-center">
                  <span className="text-orange">📍</span>
                  <span>Derry, Northern Ireland</span>
                </div>
              </div>
            </div>

            <div className="bg-white/[0.03] border border-white/[0.06] rounded-box p-8">
              <h3 className="font-heading font-bold text-xl text-white mb-1">Book Your Free Consultation</h3>
              <p className="text-white/40 text-sm mb-6">Usually responds within a few hours</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* ============ FLOATING MOBILE CTA ============ */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
        <a
          href="#contact"
          className="block w-full bg-gradient-to-r from-orange to-amber-500 text-white text-center py-4 px-6 font-bold text-lg shadow-2xl border-t-2 border-white/20"
          style={{
            background: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
            boxShadow: "0 -4px 20px rgba(245, 158, 11, 0.3)"
          }}
        >
          📞 Book Free Consultation
        </a>
      </div>
    </>
  );
}
