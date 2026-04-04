import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Building an AI Agent Team: From Solo Agent to Full Operations",
  description: "Step-by-step guide to building an AI agent team for your business. Learn how to start with one agent and scale to a coordinated team handling operations, finance, and customer service.",
  keywords: [
    "building ai agent team",
    "ai agent team",
    "scale ai agents",
    "ai operations team",
    "ai agent workforce",
    "ai team building",
    "ai agent deployment guide",
    "ai agent scaling uk"
  ],
  alternates: { canonical: "https://openclawconsultant.co.uk/guides/building-ai-agent-team" },
  openGraph: {
    title: "Building an AI Agent Team: From Solo Agent to Full Operations",
    description: "Step-by-step guide to building an AI agent team. Start with one agent and scale to a coordinated team.",
    url: "https://openclawconsultant.co.uk/guides/building-ai-agent-team",
    type: "article",
  },
};

const buildStages = [
  {
    area: "Stage 1: The First Agent",
    timeSpent: "Timeline: Week 1-2",
    timeSaved: "Pick your biggest pain point and automate it",
    automations: [
      "Identify the single most repetitive, time-consuming task in your business",
      "Deploy one agent focused solely on that task — email triage, data entry, scheduling",
      "Set clear success metrics: time saved, error rate, throughput",
      "Run it alongside the human process for 2 weeks to build confidence"
    ],
    impact: "Proof of concept with measurable ROI"
  },
  {
    area: "Stage 2: The Quality Layer",
    timeSpent: "Timeline: Week 3-4",
    timeSaved: "Add a checker agent to catch errors",
    automations: [
      "Deploy a second agent that reviews the first agent's outputs",
      "Define quality criteria and automated validation rules",
      "Set up alerting for edge cases that need human review",
      "Measure error rates before and after the quality layer"
    ],
    impact: "Production-grade reliability from your first agent"
  },
  {
    area: "Stage 3: The Specialist Team",
    timeSpent: "Timeline: Month 2-3",
    timeSaved: "Add agents for adjacent workflows",
    automations: [
      "Map the workflows connected to your first automation",
      "Deploy specialist agents for each connected workflow",
      "Build handoff protocols between agents",
      "Implement an orchestrator to coordinate the team"
    ],
    impact: "End-to-end automation of a complete business process"
  },
  {
    area: "Stage 4: Full Operations",
    timeSpent: "Timeline: Month 4-6",
    timeSaved: "Agents running core business operations",
    automations: [
      "Agent teams covering operations, finance, customer service, and reporting",
      "Cross-team coordination via a central orchestration layer",
      "Self-monitoring and self-healing capabilities",
      "Human oversight dashboards for strategic decision-making"
    ],
    impact: "Business operations that scale without proportional headcount"
  }
];

const useCases = [
  {
    useCase: "Professional Services Firm (5 → 15 Agents)",
    problem: "A 20-person consultancy started with one AI agent handling email triage but found it created bottlenecks — triaged emails still needed manual follow-up, scheduling, and CRM updates",
    solution: "Built a coordinated team: Email Agent triages and drafts responses. Scheduling Agent books meetings from email context. CRM Agent updates records automatically. Proposal Agent drafts client proposals from meeting notes. Billing Agent generates invoices from project data",
    implementation: "Each agent was added incrementally over 3 months. The orchestrator layer (built on OpenClaw) manages handoffs, with the Email Agent's output feeding directly into the Scheduling and CRM Agents",
    benefits: ["Admin overhead reduced by 80%", "Response time to client enquiries: 4 hours → 15 minutes", "Billing accuracy improved to 99%", "Team focused on billable client work, not admin"]
  },
  {
    useCase: "E-commerce Business (1 → 8 Agents)",
    problem: "An online retailer's single customer service chatbot was handling only 30% of queries. The rest still hit the human team, who were also manually managing inventory, pricing, and order issues",
    solution: "Evolved into a full agent team: CS Triage Agent, Returns Agent, Order Status Agent, Inventory Agent, Pricing Agent, Fulfilment Agent, Reporting Agent, and a Marketing Agent for automated product descriptions",
    implementation: "Started by splitting the monolithic chatbot into three specialist CS agents (triage, returns, order status) — this alone improved resolution from 30% to 75%. Then added operations agents over the following 8 weeks",
    benefits: ["Customer query resolution: 30% → 85% automated", "Inventory stock-outs eliminated", "Revenue up 15% from dynamic pricing", "Team of 8 → team of 3 handling the same volume"]
  },
  {
    useCase: "Building Your Agent Roster with ClawRoster",
    problem: "As agent teams grow, businesses lose track of what each agent does, who it reports to, and what systems it can access. This creates security risks and operational confusion",
    solution: "Use a structured agent roster — a living document of your entire AI workforce. Each agent has a defined role, permissions, capabilities, and reporting line. Think of it as an org chart for your digital team",
    implementation: "Tools like <a href='https://clawroster.io' class='text-orange hover:underline'>ClawRoster</a> provide a visual, interactive roster of your AI agent team. Each agent has a profile showing its role, capabilities, security permissions, and performance metrics. It's the HR system for your AI workforce",
    benefits: ["Clear visibility of your entire agent team", "Security audit trail for every agent's permissions", "Onboarding new team members (human) is instant — they can see what every agent does", "Portfolio view of AI capabilities across the business"]
  }
];

const roiExample = {
  practiceSize: "UK professional services firm, 30 employees",
  currentCosts: "Admin team of 5 (£150,000/year), client response time averaging 6 hours, 20% of working hours on non-billable admin, 3 software subscriptions partially overlapping (£18,000/year)",
  aiImplementation: "Phased agent team build: Stage 1 email + scheduling (month 1), Stage 2 CRM + proposals (month 2), Stage 3 billing + reporting (month 3), Stage 4 full orchestration (month 4)",
  savings: "Admin team redeployed: 3 of 5 moved to billable work (£90,000/year value), response time → 15 minutes (client retention up £40,000/year), software consolidation (£12,000/year), overtime elimination (£15,000/year)",
  totalSaving: "£157,000/year",
  roi: "1,950% ROI within first year"
};

const faqs = [
  {
    question: "How many agents does a typical business need?",
    answer: "It varies enormously by size and complexity. A small business (5-20 employees) typically benefits from 3-5 agents covering their core workflow — usually customer communication, data processing, and reporting. A mid-size business (20-100 employees) often runs 8-15 agents across multiple departments. Large enterprises can have dozens or even hundreds. The key is starting with one and growing based on proven value, not ambition."
  },
  {
    question: "How do I decide which agent to build first?",
    answer: "Look for the task that's most repetitive, most time-consuming, and least dependent on human judgement. Classic first agents include email triage (high volume, clear categories), data entry (repetitive, error-prone), appointment scheduling (back-and-forth that follows patterns), and report generation (structured data into structured output). Avoid starting with tasks requiring nuanced judgement — those work better as your second or third agent, once you have confidence."
  },
  {
    question: "Can agents from different vendors work together?",
    answer: "Yes — and this is increasingly common. Your customer service agent might use Claude, your data processing agent might use GPT-4, and your coding agent might use a specialised model. Orchestration platforms like OpenClaw are designed to manage heterogeneous agent teams, handling the communication layer regardless of what model each agent uses. This 'best tool for the job' approach typically outperforms a single-vendor strategy."
  },
  {
    question: "What happens when an agent needs to be updated or replaced?",
    answer: "Well-designed agent teams are modular — you can swap out one agent without disrupting the others. This is one of the key advantages of multi-agent architecture over monolithic systems. Define clear interfaces between agents (what data each sends and receives), and replacing or upgrading an individual agent becomes a contained operation. Good practice: run the new agent in shadow mode alongside the old one before switching."
  },
  {
    question: "How do I measure my agent team's performance?",
    answer: "Track three layers: individual agent metrics (accuracy, speed, cost per task), team metrics (end-to-end process time, human escalation rate, error rate), and business metrics (revenue impact, cost savings, customer satisfaction). The most important metric early on is human escalation rate — what percentage of tasks still need a human? As this drops, your team is working. Tools like <a href='https://learn.bluecanvas.ai' class='text-orange hover:underline'>Blue Canvas Academy</a> cover agent team metrics in depth."
  },
  {
    question: "Is there a point where you have too many agents?",
    answer: "Yes. Over-fragmenting your agent team creates coordination overhead that outweighs the specialisation benefits. The sweet spot is usually 3-15 agents for most mid-size businesses. If you find yourself creating agents for very narrow tasks (an agent that only formats phone numbers), that's a sign to consolidate. Each agent should own a meaningful chunk of work, not a micro-task."
  }
];

export default function BuildingAIAgentTeamPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient relative overflow-hidden min-h-[70vh] flex items-center grain">
        <div className="max-w-[1140px] mx-auto px-6 relative z-10 py-20">
          <div className="max-w-[720px]">
            <h1 className="font-heading text-4xl sm:text-5xl md:text-[3.2rem] font-extrabold text-white mb-6 leading-[1.05] tracking-tight">
              Building an
              <br />
              <span className="text-orange">AI Agent Team</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl max-w-[540px] mb-10 leading-relaxed">
              From your first agent to a full operations team. Here&apos;s the practical, stage-by-stage guide to building an AI workforce that scales with your business.
            </p>
            <a
              href="#stages"
              className="inline-flex items-center justify-center bg-orange text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-orange-hover transition-all hover:-translate-y-0.5 shadow-glow-orange"
            >
              See the Build Stages
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
              <div className="text-4xl font-bold text-orange mb-2">4 Stages</div>
              <div className="text-muted">From first agent to full operations</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange mb-2">80%</div>
              <div className="text-muted">Admin overhead reduction at full deployment</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange mb-2">6 Months</div>
              <div className="text-muted">Typical timeline to operational agent team</div>
            </div>
          </div>
        </div>
      </section>

      {/* Build Stages */}
      <section id="stages" className="bg-light py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              The Four Stages of Agent Team Building
            </h2>
            <p className="text-muted text-lg max-w-[600px] mx-auto">
              Don&apos;t try to build everything at once. Follow these stages and each one pays for the next.
            </p>
          </div>

          <div className="space-y-8">
            {buildStages.map((area, index) => (
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
                    <h4 className="font-semibold text-dark mb-3">Key Actions:</h4>
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
                    <h4 className="font-semibold text-dark mb-3">Outcome:</h4>
                    <p className="text-orange font-medium text-sm">{area.impact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Build a Team */}
      <section className="bg-white py-28">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Why Agent Teams Beat Solo Agents
            </h2>
          </div>
          <div className="max-w-[800px] mx-auto prose prose-lg text-muted">
            <p>
              Most businesses start their AI journey with a single agent — a chatbot, an email sorter, a report generator. It works well. So they ask it to do more. And more. Until it&apos;s a Swiss Army knife that&apos;s mediocre at everything and excellent at nothing.
            </p>
            <p>
              The businesses getting serious results from AI are building teams, not super-agents. Just like a human organisation, each agent has a clear role, defined responsibilities, and specific expertise. A customer service agent doesn&apos;t need to understand your financial data. A reporting agent doesn&apos;t need access to customer emails. Separation of concerns isn&apos;t just good architecture — it&apos;s better security, better accuracy, and easier maintenance.
            </p>
            <p>
              <a href="https://bluecanvas.ai" className="text-orange hover:underline">Blue Canvas</a> designs agent team structures for UK businesses, and platforms like OpenClaw provide the orchestration infrastructure. The combination means you get a production-grade agent team without building the plumbing yourself. Track your growing team with <a href="https://clawroster.io" className="text-orange hover:underline">ClawRoster</a> — the org chart for your AI workforce.
            </p>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="bg-surface py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Agent Team Builds in Practice
            </h2>
          </div>

          <div className="space-y-12">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-card">
                <h3 className="font-heading font-bold text-2xl text-dark mb-6">{useCase.useCase}</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-red-600 mb-3">The Challenge:</h4>
                      <p className="text-muted text-sm">{useCase.problem}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-600 mb-3">The Agent Team:</h4>
                      <p className="text-muted text-sm">{useCase.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue mb-3">Implementation:</h4>
                      <p className="text-muted text-sm" dangerouslySetInnerHTML={{ __html: useCase.implementation }} />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange mb-3">Results:</h4>
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
              ROI: Phased Agent Team Build
            </h2>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-card">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="font-heading font-bold text-xl text-dark mb-6">Before Agent Team:</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-red-500 pl-4">
                    <div className="font-semibold text-dark">Business:</div>
                    <div className="text-muted text-sm">{roiExample.practiceSize}</div>
                  </div>
                  <div className="border-l-4 border-red-500 pl-4">
                    <div className="font-semibold text-dark">Current State:</div>
                    <div className="text-muted text-sm">{roiExample.currentCosts}</div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-heading font-bold text-xl text-dark mb-6">After Phased Build:</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-green-600 pl-4">
                    <div className="font-semibold text-dark">Approach:</div>
                    <div className="text-muted text-sm">{roiExample.aiImplementation}</div>
                  </div>
                  <div className="border-l-4 border-green-600 pl-4">
                    <div className="font-semibold text-dark">Annual Value:</div>
                    <div className="text-muted text-sm">{roiExample.savings}</div>
                  </div>
                  <div className="border-l-4 border-orange pl-4">
                    <div className="font-semibold text-orange text-lg">Total Annual Saving: {roiExample.totalSaving}</div>
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
              Building Agent Teams: FAQs
            </h2>
          </div>

          <div className="max-w-[800px] mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-surface rounded-2xl p-6">
                <h3 className="font-heading font-bold text-lg text-dark mb-3">{faq.question}</h3>
                <p className="text-muted text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: faq.answer }} />
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
            Blue Canvas helps UK businesses build AI agent teams from his base in Derry, Northern Ireland. 
            Through <a href="https://bluecanvas.ai" className="text-orange hover:underline">Blue Canvas</a>, Phil designs 
            phased agent deployment strategies that deliver ROI at every stage — from first agent to full operations.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-navy text-white py-24 relative overflow-hidden grain">
        <div className="max-w-[1140px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Build Your
                <br />
                <span className="text-orange">AI Agent Team</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Free consultation to map your business workflows and design an agent team that automates your biggest operational bottlenecks — starting with agent #1.
              </p>
              <div className="space-y-3 text-white/60">
                <div className="flex items-center gap-3">
                  <span className="text-orange">✓</span>
                  Workflow mapping and agent design
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-orange">✓</span>
                  Phased build roadmap
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-orange">✓</span>
                  ROI projections per stage
                </div>
              </div>
            </div>
            <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8">
              <h3 className="font-heading font-bold text-xl text-white mb-1">Agent Team Consultation</h3>
              <p className="text-white/60 text-sm mb-6">Get a custom agent team design for your business</p>
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
            <a href="/guides/multi-agent-systems-explained" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">Multi-Agent Systems Explained</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/ai-agents-roi-guide" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">AI Agent ROI Guide</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/ai-agent-security-guide" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">AI Agent Security Guide</h3>
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
