import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "AI Agent Consulting UK: Finding the Right Partner (2026)",
  description: "How to find the right AI agent consultant in the UK. What to look for, questions to ask, pricing expectations, and why specialist expertise matters.",
  keywords: [
    "ai agent consulting",
    "ai agent consulting uk",
    "ai consultant uk",
    "ai agent consultant",
    "ai automation consulting",
    "ai agent implementation uk",
    "ai consulting services uk",
    "hire ai consultant"
  ],
  alternates: { canonical: "https://openclawconsultant.co.uk/guides/ai-agent-consulting-uk" },
  openGraph: {
    title: "AI Agent Consulting UK: Finding the Right Partner (2026)",
    description: "How to find the right AI agent consultant in the UK. What to look for, questions to ask, and pricing expectations.",
    url: "https://openclawconsultant.co.uk/guides/ai-agent-consulting-uk",
    type: "article",
  },
};

const whatToLookFor = [
  {
    title: "Hands-On Deployment Experience",
    description: "The AI agent space is full of strategists who've never deployed a production agent. Look for consultants who can show you live systems they've built, not just slide decks. Ask them to walk you through a specific deployment — what went wrong, how they fixed it, and what the client is seeing today.",
    red_flag: "Red flag: Can only talk about AI in theory, never specifics",
  },
  {
    title: "Platform Agnosticism",
    description: "A good consultant recommends the platform that fits your needs, not the one that pays them the highest commission. They should be able to articulate the pros and cons of multiple platforms — OpenClaw, LangChain, CrewAI, Microsoft Copilot — and explain why they're recommending a specific one for your situation.",
    red_flag: "Red flag: Only ever recommends one platform",
  },
  {
    title: "UK Business Understanding",
    description: "AI agent consulting isn't just technical — it requires understanding UK regulations (UK GDPR, sector-specific rules), British business culture, and the specific challenges facing UK industries. An overseas consultant may have great technical skills but miss crucial regulatory or cultural context.",
    red_flag: "Red flag: Unfamiliar with UK GDPR, HMRC requirements, or FCA guidance",
  },
  {
    title: "Clear Pricing and Scope",
    description: "The best consultants are transparent about what's included, what's extra, and how they charge. Avoid open-ended engagements with vague deliverables. You should know exactly what you're getting, when you're getting it, and what it costs before signing anything.",
    red_flag: "Red flag: Won't give a fixed price or clear scope of work",
  },
  {
    title: "Knowledge Transfer Focus",
    description: "A consultant who builds something only they can maintain has created a dependency, not a solution. Look for partners who document everything, train your team, and plan for handover. The goal is for your business to own and manage the system independently.",
    red_flag: "Red flag: No documentation, training, or handover plan",
  },
  {
    title: "Post-Deployment Support",
    description: "AI agents need tuning after launch. Initial deployment is just the beginning — real-world usage reveals edge cases, performance issues, and new opportunities. Your consultant should offer ongoing support options, not disappear after go-live.",
    red_flag: "Red flag: No retainer or support options after deployment",
  },
];

const questionsToAsk = [
  {
    question: "How many AI agent systems have you deployed to production?",
    why: "Separates theorists from practitioners. Production deployments reveal challenges that prototypes never surface.",
  },
  {
    question: "Can you show me a live system you've built?",
    why: "Nothing beats seeing a working agent in action. If they can't show you one, ask why.",
  },
  {
    question: "What platform would you recommend for our use case, and why?",
    why: "Tests their breadth of knowledge and whether they'll tailor recommendations to your needs.",
  },
  {
    question: "What's your approach to data security and UK GDPR compliance?",
    why: "Critical for any business handling personal data. Their answer reveals how seriously they take compliance.",
  },
  {
    question: "What does the handover process look like?",
    why: "Ensures you'll own the system, not rent the consultant's ongoing involvement.",
  },
  {
    question: "What happens when something goes wrong after deployment?",
    why: "Tests whether they plan for reality. All systems have issues — what matters is the response plan.",
  },
  {
    question: "Can you provide references from similar projects?",
    why: "Past clients are the best signal. If they won't provide references, consider why.",
  },
  {
    question: "How do you measure success?",
    why: "Good consultants define measurable KPIs upfront — time saved, cost reduced, accuracy improved. Vague answers suggest vague results.",
  },
];

const pricingTiers = [
  {
    type: "Discovery & Assessment",
    range: "£500–2,000",
    includes: [
      "Business process audit",
      "AI readiness assessment",
      "Opportunity identification",
      "Platform recommendation",
      "High-level implementation roadmap",
    ],
    timeline: "1–2 weeks",
  },
  {
    type: "Single Agent Deployment",
    range: "£3,000–8,000",
    includes: [
      "Agent design and development",
      "Integration with existing systems",
      "Testing and quality assurance",
      "Deployment to production",
      "Team training and documentation",
      "30-day post-launch support",
    ],
    timeline: "2–4 weeks",
  },
  {
    type: "Multi-Agent System",
    range: "£8,000–25,000",
    includes: [
      "Multi-department agent architecture",
      "Complex integration work",
      "Custom tool development",
      "Security review and compliance",
      "Phased rollout and testing",
      "Full documentation and training",
      "90-day post-launch support",
    ],
    timeline: "4–12 weeks",
  },
  {
    type: "Ongoing Retainer",
    range: "£500–2,000/month",
    includes: [
      "Agent performance monitoring",
      "Continuous improvement and tuning",
      "New feature development",
      "Priority support",
      "Monthly performance reports",
    ],
    timeline: "Ongoing",
  },
];

const whyOpenClawConsultant = [
  {
    title: "Specialist Focus",
    description: "We don't do a bit of everything. AI agent deployment is all we do. Every project, every day. This focus means we've seen more edge cases, solved more problems, and built more reliable systems than generalist consultancies.",
  },
  {
    title: "Hands-On Builders",
    description: "We build and deploy production AI agents ourselves. Not PowerPoint strategies, not theoretical frameworks — working systems that handle real business operations. We can show you live deployments and real results.",
  },
  {
    title: "UK-Based, UK-Focused",
    description: "Based in the UK, working exclusively with British businesses. We understand UK GDPR, HMRC requirements, FCA guidelines, and the specific challenges facing UK SMEs. No timezone delays, no cultural gaps.",
  },
  {
    title: "Platform Expert",
    description: "Deep expertise across OpenClaw, LangChain, CrewAI, and other leading platforms. We recommend what's right for you, not what's easiest for us. Platform-agnostic advice backed by hands-on experience.",
  },
  {
    title: "Transparent Pricing",
    description: "Fixed prices for defined scopes. No surprise invoices, no scope creep without agreement. You know what you're paying before we start, and we stick to it.",
  },
  {
    title: "Full Knowledge Transfer",
    description: "Every engagement includes documentation, training, and a structured handover. Our goal is for your team to manage the system independently. We're available for ongoing support, but you're never dependent on us.",
  },
];

const faqs = [
  {
    question: "How much does AI agent consulting cost in the UK?",
    answer: "UK AI agent consulting typically ranges from £500 for an initial assessment to £25,000+ for complex multi-agent deployments. A single-agent deployment with integration and training usually costs £3,000–8,000. Ongoing retainers for monitoring and improvement run £500–2,000/month. These figures are for specialist consultants — large consultancy firms often charge 3–5x more for similar work.",
  },
  {
    question: "How do I know if my business needs an AI agent consultant?",
    answer: "You likely need a consultant if: your team spends significant time on repetitive, rule-based tasks; you've tried AI tools but can't get them working reliably; you handle sensitive data and need GDPR-compliant implementation; or you want to move fast without the trial-and-error of building in-house. If you have experienced AI engineers on staff with spare capacity, you might not need external help.",
  },
  {
    question: "What's the difference between an AI consultant and an AI agent consultant?",
    answer: "An AI consultant covers the broad field — machine learning models, data science, computer vision, NLP, strategy. An AI agent consultant specialises specifically in autonomous AI agents that take actions on behalf of your business. It's a narrower, deeper expertise. You want a specialist when the goal is deploying agents that interact with your systems, make decisions, and execute tasks automatically.",
  },
  {
    question: "How long does a typical AI agent consulting engagement last?",
    answer: "Initial assessments take 1–2 weeks. Single-agent deployments run 2–4 weeks. Multi-agent systems typically require 4–12 weeks for full rollout. Most clients then move to a monthly retainer for ongoing optimisation. The total active engagement is usually 2–4 months from first call to stable production, with lighter support continuing after that.",
  },
  {
    question: "Can a consultant help if we've already started building AI agents?",
    answer: "Absolutely — this is actually one of the most common scenarios. Many businesses start building agents in-house, hit unexpected challenges, and bring in a consultant to get back on track. A good consultant can audit your existing work, identify issues, and either fix them directly or guide your team to do so. It's often faster and cheaper than starting from scratch.",
  },
  {
    question: "What should we prepare before engaging an AI agent consultant?",
    answer: "Have clarity on: which business processes you want to automate, what systems you currently use (CRM, accounting, communication tools), your budget range, your timeline expectations, and who internally will be the project contact. You don't need technical documentation — a good consultant will handle the technical discovery. The more clearly you can articulate the business problem, the faster the engagement will move.",
  },
];

export default function AIAgentConsultingUKPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient relative overflow-hidden min-h-[70vh] flex items-center grain">
        <div className="max-w-[1140px] mx-auto px-6 relative z-10 py-20">
          <div className="max-w-[720px]">
            <h1 className="font-heading text-4xl sm:text-5xl md:text-[3.2rem] font-extrabold text-white mb-6 leading-[1.05] tracking-tight">
              AI Agent Consulting
              <br />
              <span className="text-orange">UK</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl max-w-[540px] mb-10 leading-relaxed">
              How to find the right AI agent consultant for your business. What to look for, what to ask, what to pay — and what to avoid.
            </p>
            <a
              href="#what-to-look-for"
              className="inline-flex items-center justify-center bg-orange text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-orange-hover transition-all hover:-translate-y-0.5 shadow-glow-orange"
            >
              Find the Right Partner
            </a>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#fafbfc] to-transparent" />
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-orange mb-2">73%</div>
              <div className="text-muted">of UK AI projects need external expertise</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange mb-2">4–8 wks</div>
              <div className="text-muted">Average time-to-production with a consultant</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange mb-2">2.3x</div>
              <div className="text-muted">Faster ROI with specialist guidance</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Need a Consultant */}
      <section className="bg-surface py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Why Businesses Hire AI Agent Consultants
            </h2>
          </div>
          <div className="max-w-[800px] mx-auto prose prose-lg text-muted">
            <p>
              AI agents are powerful, but deploying them reliably is harder than it looks. The gap between a working demo and a production system that handles real business operations is where most projects fail.
            </p>
            <p>
              A specialist consultant bridges that gap. They&apos;ve already made the mistakes, solved the edge cases, and learned which approaches work in practice — not just in theory. For most UK businesses, the time and risk saved far outweighs the consulting fee.
            </p>
            <p>
              The UK AI consulting market is growing rapidly, but quality varies enormously. Some consultants are rebranded web developers who&apos;ve added &ldquo;AI&rdquo; to their services. Others are enterprise firms charging £200,000+ for what should be a £10,000 project. This guide helps you find the sweet spot — genuine expertise at a fair price.
            </p>
            <p>
              For background on AI agents themselves, see our <a href="/guides/ai-agents-explained" className="text-orange hover:underline">AI Agents Explained</a> guide. For platform options, check <a href="/guides/best-ai-agents-2026" className="text-orange hover:underline">Best AI Agents 2026</a>.
            </p>
          </div>
        </div>
      </section>

      {/* What to Look For */}
      <section id="what-to-look-for" className="bg-light py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              6 Things to Look For in an AI Agent Consultant
            </h2>
            <p className="text-muted text-lg max-w-[600px] mx-auto">
              The criteria that separate genuinely useful consultants from expensive time-wasters.
            </p>
          </div>

          <div className="space-y-8">
            {whatToLookFor.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-card">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
                  <div>
                    <div className="text-orange font-heading font-extrabold text-4xl mb-2">0{index + 1}</div>
                    <h3 className="font-heading font-bold text-xl text-dark">{item.title}</h3>
                  </div>

                  <div className="lg:col-span-3">
                    <p className="text-muted mb-3">{item.description}</p>
                    <p className="text-sm text-red-500 font-medium">{item.red_flag}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Questions to Ask */}
      <section className="bg-white py-28">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              8 Questions to Ask Before Hiring
            </h2>
            <p className="text-muted text-lg max-w-[600px] mx-auto">
              Use these in your initial conversations. The answers will tell you everything you need to know.
            </p>
          </div>

          <div className="max-w-[800px] mx-auto space-y-6">
            {questionsToAsk.map((item, index) => (
              <div key={index} className="border-l-4 border-orange pl-6">
                <h3 className="font-heading font-bold text-lg text-dark mb-2">&ldquo;{item.question}&rdquo;</h3>
                <p className="text-muted text-sm"><strong>Why ask:</strong> {item.why}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Expectations */}
      <section className="bg-surface py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              UK AI Agent Consulting: Pricing Guide
            </h2>
            <p className="text-muted text-lg max-w-[600px] mx-auto">
              What to expect to pay at each stage. These are typical rates for specialist AI agent consultants — not big-four consultancy prices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pricingTiers.map((tier, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-card">
                <h3 className="font-heading font-bold text-xl text-dark mb-2">{tier.type}</h3>
                <div className="text-orange font-bold text-2xl mb-1">{tier.range}</div>
                <div className="text-muted text-sm mb-4">Timeline: {tier.timeline}</div>
                <ul className="space-y-2">
                  {tier.includes.map((item, i) => (
                    <li key={i} className="flex gap-2 items-start text-sm text-muted-dark">
                      <span className="text-orange mt-0.5 flex-shrink-0">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="text-muted text-sm mt-8 text-center">
            For our specific packages, see the <a href="/pricing" className="text-orange hover:underline">OpenClaw Consultant pricing page</a>.
          </p>
        </div>
      </section>

      {/* Why OpenClaw Consultant */}
      <section className="bg-white py-28">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Why Choose OpenClaw Consultant
            </h2>
            <p className="text-muted text-lg max-w-[600px] mx-auto">
              We tick every box on the checklist above. Here&apos;s what makes us different.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyOpenClawConsultant.map((item, index) => (
              <div key={index} className="bg-surface rounded-2xl p-6">
                <h3 className="font-heading font-bold text-lg text-dark mb-2">{item.title}</h3>
                <p className="text-muted text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-light py-28">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              AI Agent Consulting UK: FAQs
            </h2>
          </div>

          <div className="max-w-[800px] mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-surface rounded-2xl p-6">
                <h3 className="font-heading font-bold text-lg text-dark mb-3">{faq.question}</h3>
                <p className="text-muted text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Blue Canvas */}
      <section className="bg-white py-16">
        <div className="max-w-[1140px] mx-auto px-6 text-center">
          <h3 className="font-heading font-bold text-xl text-dark mb-4">About Blue Canvas</h3>
          <p className="text-muted max-w-[600px] mx-auto text-sm">
            Blue Canvas is a UK-based AI consultancy specialising in agent deployment and automation strategy.
            Through <a href="https://bluecanvas.ai" className="text-orange hover:underline">Blue Canvas</a>, Phil Patterson provides
            hands-on AI agent consulting to British businesses — from initial assessment through to production deployment and ongoing optimisation.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-navy text-white py-24 relative overflow-hidden grain">
        <div className="max-w-[1140px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Looking for an
                <br />
                <span className="text-orange">AI Agent Consultant?</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Let&apos;s talk about your business. Book a free consultation and we&apos;ll explore how AI agents can transform your operations — no obligation, no sales pressure, just honest advice.
              </p>
              <div className="space-y-3 text-white/60">
                <div className="flex items-center gap-3">
                  <span className="text-orange">✓</span>
                  Free initial assessment
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-orange">✓</span>
                  Honest platform recommendation
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-orange">✓</span>
                  Clear pricing before any commitment
                </div>
              </div>
            </div>
            <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8">
              <h3 className="font-heading font-bold text-xl text-white mb-1">Book a Consultation</h3>
              <p className="text-white/60 text-sm mb-6">Speak with a specialist AI agent consultant</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Related Guides */}
      <section className="py-16 bg-surface">
        <div className="max-w-[1140px] mx-auto px-6">
          <h2 className="font-heading text-2xl font-bold text-navy mb-8 text-center">Related Guides</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-[800px] mx-auto">
            <a href="/guides/ai-agents-uk-guide" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">AI Agents UK: Complete Guide</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/openclaw-for-business" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">OpenClaw for Business</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/how-to-build-ai-agent" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">How to Build an AI Agent</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/best-ai-agents-2026" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">Best AI Agents 2026</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
