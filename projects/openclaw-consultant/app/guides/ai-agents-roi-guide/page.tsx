import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "AI Agent ROI: How to Measure and Maximise Returns",
  description: "A practical guide to measuring AI agent ROI. Covers cost frameworks, time-to-value metrics, hidden savings, and how to calculate real returns from AI automation in your business.",
  keywords: [
    "ai agent roi",
    "ai automation roi",
    "measuring ai roi",
    "ai return on investment",
    "ai agent cost benefit",
    "ai automation business case",
    "ai roi calculator",
    "ai agent roi uk"
  ],
  alternates: { canonical: "https://openclawconsultant.co.uk/guides/ai-agents-roi-guide" },
  openGraph: {
    title: "AI Agent ROI: How to Measure and Maximise Returns",
    description: "A practical guide to measuring AI agent ROI. Covers cost frameworks, time-to-value metrics, and how to calculate real returns.",
    url: "https://openclawconsultant.co.uk/guides/ai-agents-roi-guide",
    type: "article",
  },
};

const roiFramework = [
  {
    area: "Direct Cost Savings",
    timeSpent: "The obvious savings: headcount, tools, overtime",
    timeSaved: "Typically 40-80% of targeted task costs",
    automations: [
      "Labour hours eliminated on repetitive tasks (data entry, scheduling, form processing)",
      "Overtime costs removed by agents working 24/7 without extra pay",
      "Software consolidation — agents often replace multiple point solutions",
      "Error correction costs eliminated (rework, refunds, penalty fees)"
    ],
    impact: "Hard savings that show up directly on the P&L"
  },
  {
    area: "Revenue Gains",
    timeSpent: "The less obvious but often larger impact",
    timeSaved: "Typically 10-25% revenue improvement",
    automations: [
      "Faster response times converting more leads (speed-to-lead effect)",
      "Dynamic pricing capturing margin that manual processes miss",
      "Capacity unlocked — same team handles 2-3x the workload",
      "New capabilities: 24/7 service, personalisation at scale, proactive outreach"
    ],
    impact: "Revenue growth without proportional cost increase"
  },
  {
    area: "Hidden Value",
    timeSpent: "Real but hard to quantify — don't ignore it",
    timeSaved: "Significant competitive advantage",
    automations: [
      "Staff satisfaction — removing tedious work reduces turnover and recruitment costs",
      "Data quality — agents create clean, structured data as a byproduct",
      "Compliance confidence — automated audit trails reduce regulatory risk",
      "Scalability — infrastructure that grows without proportional headcount"
    ],
    impact: "Compound advantages that widen over time"
  },
  {
    area: "Total Cost of Ownership",
    timeSpent: "What AI actually costs — be honest about it",
    timeSaved: "Budget accurately to avoid surprises",
    automations: [
      "Implementation: design, configuration, integration, testing (typically £5k-£50k)",
      "Running costs: API fees, hosting, model inference (typically £200-£2,000/month)",
      "Maintenance: monitoring, updates, prompt refinement (5-10 hours/month)",
      "Training: staff adoption, workflow changes, documentation (one-off + ongoing)"
    ],
    impact: "Full cost picture for accurate ROI calculation"
  }
];

const useCases = [
  {
    useCase: "The ROI Calculation Framework",
    problem: "Most AI ROI calculations either overstate returns (counting theoretical time savings as cash) or understate them (ignoring revenue impact and hidden value). This leads to either inflated expectations or missed opportunities",
    solution: "Use this three-tier framework: Tier 1 (Hard Savings) — count only verified labour hours saved × fully loaded cost, plus eliminated tool subscriptions and error costs. Tier 2 (Revenue Impact) — measure lead response time improvement, conversion rate changes, and capacity-driven revenue. Tier 3 (Strategic Value) — track staff turnover changes, compliance incident reduction, and scalability metrics",
    implementation: "Start measuring before you deploy. Establish baselines: how long does each task take now? What's the error rate? What's your response time to leads? Then measure the same metrics monthly after deployment. ROI = (Total Value - Total Cost) / Total Cost × 100",
    benefits: ["Credible business case that survives scrutiny", "Clear visibility into what's working and what isn't", "Data to justify expanding AI investment", "Honest assessment that builds stakeholder trust"]
  },
  {
    useCase: "Quick Wins vs. Transformational ROI",
    problem: "Businesses either start with ambitious projects that take 6 months to show returns (losing stakeholder buy-in), or they pick trivial automations that save £500/year (not worth the effort)",
    solution: "Target the 'goldilocks zone': automations that deliver £20,000-£100,000 in annual value and can be measured within 30 days. Typically these are high-volume, repetitive tasks in customer service, data processing, or scheduling. Save the transformational projects for Phase 2 when you have runs on the board",
    implementation: "Map all tasks in your business by volume × time per task × fully loaded hourly rate. Sort by annual cost. The top 3 that don't require complex judgement are your quick wins. Deploy, measure for 30 days, then expand",
    benefits: ["ROI visible within 30 days", "Stakeholder confidence built early", "Self-funding expansion — quick wins pay for the next phase", "Team buy-in from seeing real results"]
  },
  {
    useCase: "Measuring the Unmeasurable",
    problem: "Some of AI's biggest benefits — better data quality, improved compliance, reduced staff burnout — are hard to assign a pound value to. This means they get ignored in ROI calculations, undervaluing the investment",
    solution: "Use proxy metrics. Data quality: measure time spent on data cleaning before vs. after. Compliance: count the number of audit findings or near-misses. Staff satisfaction: track turnover rate and sick days. Each proxy gives you a defensible number. A 50% reduction in data cleaning time, at £25/hour for 10 hours/week, is £6,500/year — suddenly quantifiable",
    implementation: "Before deployment, survey staff on time spent on frustrating tasks. Track turnover, sick days, and compliance incidents. Resurvey and remeasure quarterly. The deltas tell the story even when absolute values are hard to pin down",
    benefits: ["Full picture of AI value, not just the easy numbers", "Justification for expanding into harder-to-measure areas", "Staff voice incorporated into business case", "Board-level reporting that captures total impact"]
  }
];

const roiExample = {
  practiceSize: "UK professional services firm, 40 employees, £3m revenue",
  currentCosts: "Admin team: 6 staff at £180,000/year. Lead response time: 8 hours (losing 30% of enquiries). Error rate on data entry: 5% costing £25,000/year in rework. Staff turnover: 25% (recruitment costs £40,000/year)",
  aiImplementation: "AI agents deployed across email triage, lead response, data processing, reporting, and client onboarding over 3 months",
  savings: "Admin redeployed: 3 FTEs to revenue work (£90,000/year). Lead response: 8hrs → 5min, conversion up 20% (£60,000/year). Errors eliminated: £25,000/year. Turnover reduced to 12%: £20,000/year saved",
  totalSaving: "£195,000/year",
  roi: "2,400% ROI within first year"
};

const faqs = [
  {
    question: "How quickly do AI agents pay for themselves?",
    answer: "For well-targeted deployments, typically 2-4 months. The key word is 'well-targeted' — an agent automating a high-volume task that currently takes 20+ hours per week pays for itself almost immediately. An agent automating a monthly task that takes 2 hours will take much longer. Our approach at Blue Canvas is to identify the highest-impact automation first, so clients see returns within the first billing cycle."
  },
  {
    question: "What's the typical ROI percentage for AI agents?",
    answer: "We consistently see 800-2,500% ROI within the first year for mid-size businesses. The range is wide because it depends entirely on what you automate and how much volume is involved. A solicitor automating client onboarding (high volume, high cost per task) will see dramatically different ROI from a company automating monthly reporting (low volume, lower cost per task). The framework matters more than the headline number."
  },
  {
    question: "How do I justify AI investment to my board?",
    answer: "Lead with hard savings — labour hours, error costs, and tool consolidation. These are numbers finance directors understand. Then layer on revenue impact with conservative projections (show the maths). Finally, present strategic value as upside — competitive advantage, scalability, and talent retention. Avoid projecting savings you can't verify within 90 days. A credible £50,000 saving beats an incredible £500,000 one."
  },
  {
    question: "What if the AI doesn't deliver the expected ROI?",
    answer: "This usually means one of three things: the wrong task was automated (low volume or low cost per instance), the integration wasn't clean enough (human handoffs negate the time savings), or expectations were set too high. The fix is the same: measure baseline, measure after, and be honest about the numbers. Sometimes an agent delivering 'only' 50% time savings is still excellent ROI — it just wasn't the 90% you projected. Adjust and expand."
  },
  {
    question: "Should I calculate ROI per agent or per system?",
    answer: "Both. Per-agent ROI tells you which agents are earning their keep and which might need reconfiguration or retirement. System-level ROI captures the network effects — agents working together create value that individual agents don't. For board reporting, use system-level ROI. For operational decisions, use per-agent ROI. Both are essential for a mature AI operation."
  },
  {
    question: "How do running costs change as I scale up?",
    answer: "AI agent running costs scale sub-linearly — doubling your agent count doesn't double your costs because orchestration infrastructure is shared, many integrations are reused, and monitoring costs don't grow proportionally. Typical running costs: £200-£500/month for a small deployment (2-3 agents), £500-£2,000/month for mid-size (5-10 agents), and £2,000-£5,000/month for enterprise (15+ agents). The per-agent cost decreases as you scale."
  }
];

export default function AIAgentsROIGuidePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient relative overflow-hidden min-h-[70vh] flex items-center grain">
        <div className="max-w-[1140px] mx-auto px-6 relative z-10 py-20">
          <div className="max-w-[720px]">
            <h1 className="font-heading text-4xl sm:text-5xl md:text-[3.2rem] font-extrabold text-white mb-6 leading-[1.05] tracking-tight">
              AI Agent ROI:
              <br />
              <span className="text-orange">Measure and Maximise Returns</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl max-w-[540px] mb-10 leading-relaxed">
              Stop guessing whether AI is worth it. Here&apos;s how to calculate real returns, avoid inflated projections, and build a business case that survives scrutiny.
            </p>
            <a
              href="#framework"
              className="inline-flex items-center justify-center bg-orange text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-orange-hover transition-all hover:-translate-y-0.5 shadow-glow-orange"
            >
              See ROI Framework
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
              <div className="text-4xl font-bold text-orange mb-2">800-2500%</div>
              <div className="text-muted">Typical first-year ROI for targeted deployments</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange mb-2">2-4 Months</div>
              <div className="text-muted">Average payback period</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange mb-2">3 Tiers</div>
              <div className="text-muted">Of value: savings, revenue, strategic</div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Framework */}
      <section id="framework" className="bg-light py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              The Four Components of AI Agent ROI
            </h2>
            <p className="text-muted text-lg max-w-[600px] mx-auto">
              A complete ROI picture captures both sides — the value created and the investment required.
            </p>
          </div>

          <div className="space-y-8">
            {roiFramework.map((area, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-card">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
                  <div>
                    <h3 className="font-heading font-bold text-xl text-dark mb-3">{area.area}</h3>
                    <div className="space-y-2 text-sm">
                      <div className="text-red-500">{area.timeSpent}</div>
                      <div className="text-green-600 font-semibold">{area.timeSaved}</div>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-2">
                    <h4 className="font-semibold text-dark mb-3">What to Measure:</h4>
                    <ul className="space-y-2">
                      {area.automations.map((automation, i) => (
                        <li key={i} className="flex gap-2 items-start text-sm text-muted-dark">
                          <span className="text-orange mt-0.5 flex-shrink-0">•</span>
                          {automation}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-dark mb-3">Bottom Line:</h4>
                    <p className="text-orange font-medium text-sm">{area.impact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why ROI Matters */}
      <section className="bg-white py-28">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Why Most AI ROI Calculations Are Wrong
            </h2>
          </div>
          <div className="max-w-[800px] mx-auto prose prose-lg text-muted">
            <p>
              The AI industry has a credibility problem with ROI. Vendors throw around numbers like &quot;10x productivity&quot; and &quot;90% cost reduction&quot; without showing their working. Businesses either believe the hype and are disappointed, or dismiss AI as overblown and miss real opportunities.
            </p>
            <p>
              The truth is messier and more interesting. AI agents absolutely deliver significant ROI — but only when you measure it honestly. That means counting real costs (not ignoring implementation and maintenance), measuring real savings (verified hours, not theoretical capacity), and being clear about what&apos;s a hard saving versus a soft benefit.
            </p>
            <p>
              At <a href="https://bluecanvas.ai" className="text-orange hover:underline">Blue Canvas</a>, we build ROI models before deployment — establishing baselines, defining metrics, and setting honest expectations. When the numbers are real, they&apos;re usually impressive enough. And when they&apos;re not, we redirect to higher-impact automations rather than hand-waving about &quot;intangible benefits.&quot;
            </p>
            <p>
              Explore practical applications in our <a href="https://learn.bluecanvas.ai" className="text-orange hover:underline">Blue Canvas Academy</a> where we cover ROI measurement methodologies in depth.
            </p>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="bg-surface py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              ROI Measurement in Practice
            </h2>
          </div>

          <div className="space-y-12">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-card">
                <h3 className="font-heading font-bold text-2xl text-dark mb-6">{useCase.useCase}</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-red-600 mb-3">The Problem:</h4>
                      <p className="text-muted text-sm">{useCase.problem}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-600 mb-3">The Approach:</h4>
                      <p className="text-muted text-sm">{useCase.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue mb-3">How to Implement:</h4>
                      <p className="text-muted text-sm">{useCase.implementation}</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange mb-3">Outcomes:</h4>
                    <ul className="space-y-2">
                      {useCase.benefits.map((benefit, i) => (
                        <li key={i} className="text-sm text-orange flex gap-2 items-start">
                          <span className="flex-shrink-0">▸</span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="bg-light py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Real ROI Example: UK Professional Services Firm
            </h2>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-card">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="font-heading font-bold text-xl text-dark mb-6">Before AI Agents:</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-red-500 pl-4">
                    <div className="font-semibold text-dark">Business:</div>
                    <div className="text-muted text-sm">{roiExample.practiceSize}</div>
                  </div>
                  <div className="border-l-4 border-red-500 pl-4">
                    <div className="font-semibold text-dark">Current Costs:</div>
                    <div className="text-muted text-sm">{roiExample.currentCosts}</div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-heading font-bold text-xl text-dark mb-6">After AI Deployment:</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-green-600 pl-4">
                    <div className="font-semibold text-dark">Implementation:</div>
                    <div className="text-muted text-sm">{roiExample.aiImplementation}</div>
                  </div>
                  <div className="border-l-4 border-green-600 pl-4">
                    <div className="font-semibold text-dark">Annual Value:</div>
                    <div className="text-muted text-sm">{roiExample.savings}</div>
                  </div>
                  <div className="border-l-4 border-orange pl-4">
                    <div className="font-semibold text-orange text-lg">Total Annual Value: {roiExample.totalSaving}</div>
                    <div className="text-orange font-semibold">{roiExample.roi}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-28">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              AI Agent ROI: FAQs
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
      <section className="bg-light py-16">
        <div className="max-w-[1140px] mx-auto px-6 text-center">
          <h3 className="font-heading font-bold text-xl text-dark mb-4">About Blue Canvas</h3>
          <p className="text-muted max-w-[600px] mx-auto text-sm">
            Blue Canvas helps UK businesses measure and maximise their AI agent ROI from his base in Derry, Northern Ireland. 
            Through <a href="https://bluecanvas.ai" className="text-orange hover:underline">Blue Canvas</a>, Phil builds 
            honest business cases for AI automation, establishing baselines before deployment and tracking verified returns 
            to ensure every client sees measurable value.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-navy text-white py-24 relative overflow-hidden grain">
        <div className="max-w-[1140px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Calculate Your
                <br />
                <span className="text-orange">AI Agent ROI</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Free ROI assessment for your business. We&apos;ll map your workflows, identify the highest-value automations, and build a credible business case with verified numbers.
              </p>
              <div className="space-y-3 text-white/60">
                <div className="flex items-center gap-3">
                  <span className="text-orange">✓</span>
                  Workflow analysis and cost mapping
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-orange">✓</span>
                  Custom ROI projection with full methodology
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-orange">✓</span>
                  Phased implementation roadmap
                </div>
              </div>
            </div>
            <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8">
              <h3 className="font-heading font-bold text-xl text-white mb-1">ROI Assessment</h3>
              <p className="text-white/60 text-sm mb-6">Get a credible ROI projection for AI in your business</p>
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
            <a href="/guides/building-ai-agent-team" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">Building an AI Agent Team</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/multi-agent-systems-explained" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">Multi-Agent Systems Explained</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/ai-agents-for-accountants" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">AI Agents for Accountants</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/openclaw-enterprise-deployment" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">Deploying OpenClaw in Enterprise</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
