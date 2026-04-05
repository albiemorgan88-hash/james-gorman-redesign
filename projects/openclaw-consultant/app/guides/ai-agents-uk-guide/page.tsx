import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "AI Agents UK: The Complete Guide for British Businesses (2026)",
  description: "The definitive UK guide to AI agents for businesses. Market landscape, regulations, case studies, and why British companies are adopting AI agents in 2026.",
  keywords: [
    "ai agents uk",
    "ai agents united kingdom",
    "ai agent uk business",
    "ai automation uk",
    "ai agents for uk companies",
    "artificial intelligence agents uk",
    "ai agent platforms uk",
    "business ai uk"
  ],
  alternates: { canonical: "https://openclawconsultant.co.uk/guides/ai-agents-uk-guide" },
  openGraph: {
    title: "AI Agents UK: The Complete Guide for British Businesses (2026)",
    description: "The definitive UK guide to AI agents for businesses. Market landscape, regulations, case studies, and adoption trends.",
    url: "https://openclawconsultant.co.uk/guides/ai-agents-uk-guide",
    type: "article",
  },
};

const ukStats = [
  { value: "£3.7B", label: "UK AI agent market size (2026)" },
  { value: "68%", label: "UK SMEs exploring AI automation" },
  { value: "42%", label: "Productivity gain reported by early adopters" },
];

const sectors = [
  {
    name: "Financial Services",
    description: "London's fintech sector leads UK AI agent adoption. Agents handle compliance monitoring, fraud detection, client onboarding, and regulatory reporting. The FCA's supportive stance on AI innovation has created fertile ground.",
    examples: [
      "Automated KYC/AML checks reducing onboarding from days to minutes",
      "Real-time transaction monitoring flagging suspicious activity",
      "Client portfolio rebalancing agents acting on market signals",
      "Regulatory report generation saving hundreds of hours quarterly",
    ],
  },
  {
    name: "Legal Services",
    description: "UK law firms are deploying agents for document review, contract analysis, and case research. The Legal Services Act reforms and competitive pressure are driving adoption faster than many expected.",
    examples: [
      "Contract review agents scanning thousands of pages in hours",
      "Due diligence automation for M&A transactions",
      "Case law research agents finding relevant precedents",
      "Client intake agents qualifying leads and scheduling consultations",
    ],
  },
  {
    name: "Healthcare & NHS",
    description: "The NHS and private healthcare providers are cautiously adopting AI agents for administrative tasks, keeping clinical decisions firmly with humans. NICE guidelines and NHS Digital's AI framework provide guardrails.",
    examples: [
      "Appointment scheduling and triage agents reducing GP admin burden",
      "Patient communication agents handling routine follow-ups",
      "Medical records summarisation for referral letters",
      "Supply chain agents optimising procurement for NHS trusts",
    ],
  },
  {
    name: "Professional Services",
    description: "Accountancy firms, consultancies, and recruitment agencies across the UK are using agents to handle repetitive client-facing and back-office work, freeing staff for higher-value advisory.",
    examples: [
      "Automated bookkeeping reconciliation and VAT preparation",
      "Candidate screening and interview scheduling for recruiters",
      "Proposal generation agents for consulting firms",
      "Client reporting dashboards updated in real-time",
    ],
  },
];

const regulations = [
  {
    title: "UK AI Regulation (Pro-Innovation Approach)",
    description: "The UK government has opted for a sector-specific, principles-based approach rather than sweeping legislation like the EU AI Act. Existing regulators (FCA, ICO, Ofcom, CMA) apply AI principles within their domains. This gives UK businesses more flexibility but places responsibility on organisations to self-assess risk.",
  },
  {
    title: "UK GDPR & Data Protection Act 2018",
    description: "AI agents processing personal data must comply with UK GDPR. Key requirements include lawful basis for processing, data minimisation, the right to explanation for automated decisions (Article 22), and Data Protection Impact Assessments for high-risk processing. Self-hosted agents like OpenClaw help by keeping data on UK infrastructure.",
  },
  {
    title: "Consumer Rights & Transparency",
    description: "The CMA requires businesses to be transparent about AI use in customer-facing interactions. If an AI agent is handling customer service, customers should know they're speaking to an AI. Misleading claims about AI capabilities can trigger consumer protection enforcement.",
  },
  {
    title: "Financial Services (FCA)",
    description: "The FCA expects firms using AI agents to maintain clear accountability, audit trails, and human oversight for consequential decisions. AI agents making financial recommendations must comply with the same suitability requirements as human advisers.",
  },
  {
    title: "Employment & AI",
    description: "AI agents used in recruitment or HR decisions must avoid discriminatory outcomes. The Equality Act 2010 applies to AI-assisted decisions just as it does to human ones. Employers should audit agent outputs for bias and maintain records of how AI influences employment decisions.",
  },
];

const caseStudies = [
  {
    company: "Mid-Size Accountancy Firm, Manchester",
    challenge: "60+ hours per month spent on routine bookkeeping reconciliation and client email responses.",
    solution: "Deployed OpenClaw agents for bank reconciliation, VAT return preparation, and client email triage. Human accountants review and approve all outputs.",
    result: "65% reduction in admin time. Staff now focus on advisory work, increasing per-client revenue by 28%.",
  },
  {
    company: "Recruitment Agency, London",
    challenge: "Consultants spending 40% of their time screening CVs and scheduling interviews rather than building relationships.",
    solution: "AI agent system handling CV parsing, initial candidate scoring, interview scheduling via calendar integration, and automated candidate updates.",
    result: "Placement rate increased 35%. Time-to-fill reduced from 28 days to 18 days. Consultants handle 40% more roles.",
  },
  {
    company: "E-commerce Brand, Birmingham",
    challenge: "Customer service team overwhelmed by repetitive queries about orders, returns, and sizing.",
    solution: "Customer-facing AI agent handling Tier 1 support queries with seamless escalation to human agents for complex issues. Integrated with Shopify, Royal Mail tracking, and Zendesk.",
    result: "73% of queries resolved without human intervention. Average response time dropped from 4 hours to 90 seconds. CSAT maintained at 4.6/5.",
  },
];

const faqs = [
  {
    question: "Is there specific AI agent legislation in the UK?",
    answer: "Not yet. The UK government has taken a 'pro-innovation' approach, asking existing regulators to apply AI principles within their sectors rather than creating a single AI law. This means the rules depend on your industry — the FCA regulates AI in finance, the ICO handles data protection, and the CMA covers consumer issues. A new AI Safety Institute monitors frontier AI risks. For most businesses, UK GDPR compliance and sector-specific rules are the primary concerns.",
  },
  {
    question: "Do UK businesses need to keep AI agent data in the UK?",
    answer: "Not necessarily, but it helps. UK GDPR allows data transfers to countries with 'adequate' data protection (EU, Japan, South Korea, etc.) and permits transfers under Standard Contractual Clauses. However, many UK businesses prefer UK-hosted solutions for simplicity and client confidence. Self-hosted platforms like OpenClaw let you run everything on UK infrastructure, eliminating transfer concerns entirely.",
  },
  {
    question: "How much are UK companies spending on AI agents?",
    answer: "According to 2026 industry surveys, UK SMEs typically invest £5,000–25,000 in initial AI agent setup and £500–2,000/month in running costs. Enterprise deployments range from £50,000–500,000 for initial implementation. ROI timelines vary, but most businesses report positive returns within 3–6 months through labour cost savings and productivity gains.",
  },
  {
    question: "Which UK industries are adopting AI agents fastest?",
    answer: "Financial services leads, driven by London's fintech ecosystem and the FCA's supportive stance. Professional services (legal, accounting, consulting) are close behind, with recruitment agencies particularly aggressive adopters. E-commerce and retail are growing fast, especially for customer service automation. The NHS is moving cautiously but has significant pilots underway for administrative AI.",
  },
  {
    question: "Can AI agents handle UK-specific requirements like VAT and HMRC submissions?",
    answer: "Yes. Modern AI agents can be configured with UK tax rules, HMRC submission formats, and Companies House requirements. They can prepare VAT returns, generate MTD-compliant submissions, and format annual accounts. However, a qualified accountant should always review AI-prepared tax work before submission — the agent handles the heavy lifting, the human provides the sign-off.",
  },
  {
    question: "Where can I find an AI agent consultant in the UK?",
    answer: "The UK AI consulting market is growing rapidly. Look for consultants with hands-on deployment experience rather than just strategic advice. OpenClaw Consultant specialises in AI agent implementation for UK businesses, covering everything from initial assessment through to production deployment and ongoing support. Check our pricing page for consultation packages.",
  },
];

export default function AIAgentsUKGuidePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient relative overflow-hidden min-h-[70vh] flex items-center grain">
        <div className="max-w-[1140px] mx-auto px-6 relative z-10 py-20">
          <div className="max-w-[720px]">
            <h1 className="font-heading text-4xl sm:text-5xl md:text-[3.2rem] font-extrabold text-white mb-6 leading-[1.05] tracking-tight">
              AI Agents UK
              <br />
              <span className="text-orange">The Complete Guide</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl max-w-[540px] mb-10 leading-relaxed">
              Everything British businesses need to know about AI agents in 2026. Market landscape, regulations, real case studies, and practical adoption advice.
            </p>
            <a
              href="#sectors"
              className="inline-flex items-center justify-center bg-orange text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-orange-hover transition-all hover:-translate-y-0.5 shadow-glow-orange"
            >
              Explore the UK Market
            </a>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#fafbfc] to-transparent" />
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {ukStats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold text-orange mb-2">{stat.value}</div>
                <div className="text-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UK Market Context */}
      <section className="bg-surface py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              The UK AI Agent Landscape in 2026
            </h2>
          </div>
          <div className="max-w-[800px] mx-auto prose prose-lg text-muted">
            <p>
              The United Kingdom has positioned itself as a global leader in AI adoption, and AI agents are at the centre of that story. The government&apos;s pro-innovation regulatory approach, combined with London&apos;s fintech ecosystem, a strong professional services sector, and world-class universities, has created an environment where AI agents are moving from experiment to essential infrastructure.
            </p>
            <p>
              For British businesses, the question has shifted from &ldquo;should we use AI agents?&rdquo; to &ldquo;how quickly can we deploy them?&rdquo; The UK&apos;s pragmatic regulatory framework gives organisations more freedom than their EU counterparts, while maintaining strong data protection through UK GDPR.
            </p>
            <p>
              What makes the UK market unique is the density of professional services firms — accountants, solicitors, recruiters, and consultancies — all facing similar pressures: rising costs, talent shortages, and clients expecting faster turnaround. AI agents address all three simultaneously, which is why adoption is accelerating across these sectors.
            </p>
            <p>
              If you&apos;re new to AI agents, our <a href="/guides/ai-agents-explained" className="text-orange hover:underline">AI Agents Explained</a> guide covers the fundamentals. For platform comparisons, see <a href="/guides/best-ai-agents-2026" className="text-orange hover:underline">Best AI Agents 2026</a>.
            </p>
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section id="sectors" className="bg-light py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              UK Sectors Leading AI Agent Adoption
            </h2>
            <p className="text-muted text-lg max-w-[600px] mx-auto">
              Which industries are deploying AI agents, what they&apos;re using them for, and the results they&apos;re seeing.
            </p>
          </div>

          <div className="space-y-8">
            {sectors.map((sector, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-card">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
                  <div>
                    <h3 className="font-heading font-bold text-xl text-dark mb-3">{sector.name}</h3>
                  </div>

                  <div className="lg:col-span-3">
                    <p className="text-muted mb-4">{sector.description}</p>
                    <ul className="space-y-2">
                      {sector.examples.map((example, i) => (
                        <li key={i} className="flex gap-2 items-start text-sm text-muted-dark">
                          <span className="text-orange mt-0.5 flex-shrink-0">•</span>
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-muted text-sm mt-8 text-center">
            For industry-specific guides, see our pages on AI agents for <a href="/guides/ai-agents-for-accountants" className="text-orange hover:underline">accountants</a>, <a href="/guides/ai-agents-for-solicitors" className="text-orange hover:underline">solicitors</a>, <a href="/guides/ai-agents-for-recruitment" className="text-orange hover:underline">recruitment</a>, and <a href="/guides/ai-agents-for-ecommerce" className="text-orange hover:underline">e-commerce</a>.
          </p>
        </div>
      </section>

      {/* Regulations */}
      <section className="bg-white py-28">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              UK Regulations and AI Agents
            </h2>
            <p className="text-muted text-lg max-w-[600px] mx-auto">
              What British businesses need to know about compliance, data protection, and sector-specific rules.
            </p>
          </div>
          <div className="max-w-[800px] mx-auto space-y-8">
            {regulations.map((reg, index) => (
              <div key={index} className="border-l-4 border-orange pl-6">
                <h3 className="font-heading font-bold text-xl text-dark mb-2">{reg.title}</h3>
                <p className="text-muted">{reg.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-surface py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              UK AI Agent Case Studies
            </h2>
            <p className="text-muted text-lg max-w-[600px] mx-auto">
              Real results from British businesses that have deployed AI agents.
            </p>
          </div>

          <div className="space-y-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-card">
                <h3 className="font-heading font-bold text-xl text-dark mb-4">{study.company}</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold text-orange text-sm mb-2">Challenge</h4>
                    <p className="text-muted text-sm">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange text-sm mb-2">Solution</h4>
                    <p className="text-muted text-sm">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange text-sm mb-2">Result</h4>
                    <p className="text-muted text-sm">{study.result}</p>
                  </div>
                </div>
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
              AI Agents UK: FAQs
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
            Through <a href="https://bluecanvas.ai" className="text-orange hover:underline">Blue Canvas</a>, Phil Patterson helps
            British businesses navigate the AI agent landscape — from regulatory compliance to production deployment.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-navy text-white py-24 relative overflow-hidden grain">
        <div className="max-w-[1140px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Ready to Explore
                <br />
                <span className="text-orange">AI Agents for Your UK Business?</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Book a free consultation and we&apos;ll assess how AI agents can transform your operations. UK-focused advice from consultants who understand British business.
              </p>
              <div className="space-y-3 text-white/60">
                <div className="flex items-center gap-3">
                  <span className="text-orange">✓</span>
                  UK regulation compliance guidance
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-orange">✓</span>
                  Industry-specific agent recommendations
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-orange">✓</span>
                  ROI analysis for your specific use case
                </div>
              </div>
            </div>
            <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8">
              <h3 className="font-heading font-bold text-xl text-white mb-1">AI Agent Consultation</h3>
              <p className="text-white/60 text-sm mb-6">Expert guidance for UK businesses adopting AI agents</p>
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
            <a href="/guides/ai-agents-explained" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">AI Agents Explained</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/ai-agent-consulting-uk" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">AI Agent Consulting UK</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/best-ai-agents-2026" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">Best AI Agents 2026</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/openclaw-for-business" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">OpenClaw for Business</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
