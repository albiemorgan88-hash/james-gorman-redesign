import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Multi-Agent Systems Explained: Why One Agent Isn't Enough",
  description: "Understand multi-agent AI systems and why businesses need teams of specialised agents. Learn orchestration patterns, real use cases, and how to build agent teams that scale.",
  keywords: [
    "multi-agent systems",
    "multi-agent ai",
    "ai agent orchestration",
    "ai agent teams",
    "multi-agent architecture",
    "agent coordination",
    "ai swarm",
    "multi-agent systems uk"
  ],
  alternates: { canonical: "https://openclawconsultant.co.uk/guides/multi-agent-systems-explained" },
  openGraph: {
    title: "Multi-Agent Systems Explained: Why One Agent Isn't Enough",
    description: "Understand multi-agent AI systems and why businesses need teams of specialised agents working together.",
    url: "https://openclawconsultant.co.uk/guides/multi-agent-systems-explained",
    type: "article",
  },
};

const agentPatterns = [
  {
    area: "Hub-and-Spoke (Orchestrator)",
    timeSpent: "Best for: structured workflows with clear handoffs",
    timeSaved: "One coordinator delegates to specialist agents",
    automations: [
      "Central orchestrator receives tasks and routes to the right specialist",
      "Each specialist agent handles one domain — finance, HR, customer service",
      "Orchestrator collects results, resolves conflicts, and synthesises outputs",
      "Clear chain of responsibility and easy-to-audit decision trails"
    ],
    impact: "Predictable, auditable, scales to dozens of agents"
  },
  {
    area: "Pipeline (Sequential)",
    timeSpent: "Best for: multi-step processing with defined stages",
    timeSaved: "Each agent processes and passes to the next",
    automations: [
      "Stage 1 agent extracts data, Stage 2 validates, Stage 3 transforms, Stage 4 acts",
      "Each agent specialises in one transformation step",
      "Quality gates between stages catch errors before they propagate",
      "Easy to swap individual agents without rebuilding the whole system"
    ],
    impact: "Assembly-line efficiency for complex data processing"
  },
  {
    area: "Swarm (Collaborative)",
    timeSpent: "Best for: complex problems requiring diverse perspectives",
    timeSaved: "Agents work in parallel and negotiate outcomes",
    automations: [
      "Multiple agents tackle the same problem from different angles simultaneously",
      "Agents share findings and build on each other's work",
      "Consensus mechanisms resolve conflicting conclusions",
      "Best-of-breed output from multiple specialist perspectives"
    ],
    impact: "Higher quality decisions than any single agent"
  },
  {
    area: "Hierarchical (Manager-Worker)",
    timeSpent: "Best for: large-scale operations with team structures",
    timeSaved: "Manager agents supervise teams of worker agents",
    automations: [
      "Top-level manager breaks complex goals into sub-tasks",
      "Team leads coordinate groups of specialist workers",
      "Workers execute specific tasks and report back up the chain",
      "Mirrors real organisational structures for intuitive management"
    ],
    impact: "Enterprise-scale operations with clear accountability"
  }
];

const useCases = [
  {
    useCase: "Content Production Pipeline",
    problem: "A single AI agent writing blog posts produces generic, unresearched content that sounds like every other AI-generated article on the internet",
    solution: "A team of agents where a Research Agent finds data and sources, a Writer Agent drafts content, an Editor Agent checks quality and tone, and a SEO Agent optimises for search — each specialist doing what it does best",
    implementation: "The orchestrator receives a content brief and coordinates the pipeline. Each agent has access only to the tools it needs. The human reviews the final output, not every intermediate step",
    benefits: ["Research-backed content, not generic filler", "Consistent quality across hundreds of pieces", "10x faster than single-agent approaches", "Human oversight at the right level"]
  },
  {
    useCase: "Customer Service Escalation",
    problem: "A single customer service chatbot either handles everything badly or escalates everything to humans, defeating the purpose of automation",
    solution: "Triage Agent categorises incoming queries. Specialist agents handle common request types (billing, technical, returns). An Escalation Agent identifies complex cases needing human attention and prepares comprehensive briefings",
    implementation: "Deploy via platforms like OpenClaw where each agent has scoped access to relevant systems. The triage agent routes based on intent classification, and specialist agents resolve within their domain",
    benefits: ["85% of queries resolved without human intervention", "Complex cases reach humans with full context", "Specialists improve faster than generalists", "Customer satisfaction up 40%"]
  },
  {
    useCase: "Financial Operations Automation",
    problem: "Finance teams drown in repetitive tasks — invoice processing, expense reconciliation, month-end reporting — leaving no time for strategic analysis",
    solution: "Invoice Agent processes incoming invoices and matches to POs. Reconciliation Agent handles bank feeds and categorisation. Reporting Agent generates management accounts. Compliance Agent runs checks against regulations. All coordinated by a Finance Orchestrator",
    implementation: "Each agent connects to your existing finance stack (Xero, Sage, banking APIs). The orchestrator manages workflow timing — daily reconciliation, weekly reporting, monthly close procedures",
    benefits: ["Month-end close reduced from 5 days to 1", "Zero missed invoices or duplicate payments", "Real-time financial visibility", "Finance team focuses on strategy, not spreadsheets"]
  }
];

const roiExample = {
  practiceSize: "Professional services firm with 50 employees",
  currentCosts: "Single-agent chatbot handling 30% of queries (£18,000/year). 4 admin staff on repetitive tasks (£130,000/year). Manual reporting consuming 60 hours/month (£36,000/year)",
  aiImplementation: "Multi-agent system with specialist agents for customer service, operations, finance, and reporting",
  savings: "Query resolution up to 85% (£42,000/year value), admin staff redeployed to revenue work (£90,000/year), automated reporting (£30,000/year)",
  totalSaving: "£162,000/year",
  roi: "2,000% ROI within first year"
};

const faqs = [
  {
    question: "Why can't one AI agent do everything?",
    answer: "For the same reason you don't hire one person to do accounting, customer service, marketing, and IT. A single agent trying to be an expert at everything ends up mediocre at all of it. Specialist agents are trained, prompted, and configured for specific domains — they're more accurate, more reliable, and easier to maintain. Multi-agent systems reflect how successful organisations actually work: specialised roles coordinating towards shared goals."
  },
  {
    question: "How do multiple agents communicate with each other?",
    answer: "Through structured message passing — similar to how APIs work. Agents send and receive typed messages (task requests, results, status updates) through a central message bus or direct agent-to-agent channels. Platforms like OpenClaw manage this communication layer, handling message routing, error recovery, and logging. The agents don't 'chat' with each other in natural language — they exchange structured data that's efficient and auditable."
  },
  {
    question: "Isn't running multiple agents more expensive than one?",
    answer: "Counterintuitively, no. Multi-agent systems are typically cheaper because each agent uses a smaller, more focused model for its specific task. A simple triage agent doesn't need GPT-4 — a lightweight classifier does the job at a fraction of the cost. Only the agents handling complex reasoning need larger models. This 'right-sizing' approach often costs less than running one large model for everything, while delivering better results."
  },
  {
    question: "What happens when agents disagree?",
    answer: "This is actually a feature, not a bug. When agents reach different conclusions from different perspectives, it flags genuine complexity that deserves human attention. Well-designed multi-agent systems have conflict resolution protocols — weighted voting, confidence scoring, or escalation to a supervisor agent. The key is that disagreements surface potential issues rather than being silently averaged away."
  },
  {
    question: "How complex is it to set up a multi-agent system?",
    answer: "It depends on your ambition. A simple two-agent pipeline (one does the work, one checks it) can be running in a day. A full orchestrated team of 5-10 specialist agents typically takes 2-4 weeks to configure and test. Enterprise deployments with dozens of agents, complex routing, and compliance requirements might take 6-8 weeks. The key is starting simple — get two agents working well together before adding more."
  },
  {
    question: "Can I start with one agent and add more later?",
    answer: "Absolutely — and that's the recommended approach. Start with a single agent solving your biggest pain point. Once it's running reliably, add a quality-checking agent that reviews its outputs. Then add specialist agents for adjacent tasks. Platforms like OpenClaw are designed for this incremental approach, making it straightforward to add new agents to an existing system without disrupting what's already working."
  }
];

export default function MultiAgentSystemsExplainedPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient relative overflow-hidden min-h-[70vh] flex items-center grain">
        <div className="max-w-[1140px] mx-auto px-6 relative z-10 py-20">
          <div className="max-w-[720px]">
            <h1 className="font-heading text-4xl sm:text-5xl md:text-[3.2rem] font-extrabold text-white mb-6 leading-[1.05] tracking-tight">
              Multi-Agent Systems:
              <br />
              <span className="text-orange">Why One Agent Isn&apos;t Enough</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl max-w-[540px] mb-10 leading-relaxed">
              A single AI agent is a tool. A team of agents is an operating system for your business. Here&apos;s how multi-agent architectures work and why they outperform solo agents every time.
            </p>
            <a
              href="#patterns"
              className="inline-flex items-center justify-center bg-orange text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-orange-hover transition-all hover:-translate-y-0.5 shadow-glow-orange"
            >
              Explore Agent Patterns
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
              <div className="text-4xl font-bold text-orange mb-2">3-5x</div>
              <div className="text-muted">Better accuracy than single-agent systems</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange mb-2">85%</div>
              <div className="text-muted">Task resolution without human intervention</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange mb-2">10x</div>
              <div className="text-muted">Throughput increase with parallel agent teams</div>
            </div>
          </div>
        </div>
      </section>

      {/* Agent Patterns */}
      <section id="patterns" className="bg-light py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Multi-Agent Architecture Patterns
            </h2>
            <p className="text-muted text-lg max-w-[600px] mx-auto">
              Four proven patterns for organising AI agent teams. The right choice depends on your workflow complexity and scale.
            </p>
          </div>

          <div className="space-y-8">
            {agentPatterns.map((area, index) => (
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
                    <h4 className="font-semibold text-dark mb-3">How It Works:</h4>
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
                    <h4 className="font-semibold text-dark mb-3">Result:</h4>
                    <p className="text-orange font-medium text-sm">{area.impact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Multi-Agent */}
      <section className="bg-white py-28">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              The Single-Agent Ceiling
            </h2>
          </div>
          <div className="max-w-[800px] mx-auto prose prose-lg text-muted">
            <p>
              Every business that starts with AI agents hits the same wall. Your first agent works brilliantly for one specific task — answering customer queries, processing invoices, generating reports. Then you want it to do more. You add capabilities, expand its context, give it access to more systems. And slowly, it gets worse at everything.
            </p>
            <p>
              This is the single-agent ceiling. One agent trying to be a generalist suffers from context overload, confused priorities, and unpredictable behaviour. It&apos;s the AI equivalent of asking your accountant to also handle marketing, IT support, and reception.
            </p>
            <p>
              Multi-agent systems break through this ceiling by mirroring how successful organisations work. Specialist roles. Clear responsibilities. Coordinated handoffs. Each agent does one thing exceptionally well, and an orchestration layer ensures they work together seamlessly.
            </p>
            <p>
              Platforms like <a href="https://openclawconsultant.co.uk" className="text-orange hover:underline">OpenClaw</a> are purpose-built for multi-agent orchestration, whilst <a href="https://bluecanvas.ai" className="text-orange hover:underline">Blue Canvas</a> helps businesses design the right agent team structure for their specific workflows. The result? Better accuracy, higher throughput, and systems that scale without degrading.
            </p>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="bg-surface py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Multi-Agent Systems in Action
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
                      <h4 className="font-semibold text-green-600 mb-3">Multi-Agent Solution:</h4>
                      <p className="text-muted text-sm">{useCase.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue mb-3">Implementation:</h4>
                      <p className="text-muted text-sm">{useCase.implementation}</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange mb-3">Benefits:</h4>
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
              ROI: Single Agent vs. Multi-Agent System
            </h2>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-card">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="font-heading font-bold text-xl text-dark mb-6">Single Agent Approach:</h3>
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
                <h3 className="font-heading font-bold text-xl text-dark mb-6">Multi-Agent Upgrade:</h3>
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
              Multi-Agent Systems: FAQs
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
            Blue Canvas designs multi-agent systems for UK businesses from his base in Derry, Northern Ireland. 
            Through <a href="https://bluecanvas.ai" className="text-orange hover:underline">Blue Canvas</a>, Phil helps 
            organisations move beyond single-agent experiments to production-grade agent teams that deliver measurable 
            business outcomes.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-navy text-white py-24 relative overflow-hidden grain">
        <div className="max-w-[1140px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Design Your
                <br />
                <span className="text-orange">Agent Team</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Free consultation to map your workflows and design a multi-agent system that automates your biggest operational bottlenecks.
              </p>
              <div className="space-y-3 text-white/60">
                <div className="flex items-center gap-3">
                  <span className="text-orange">✓</span>
                  Workflow analysis and agent mapping
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-orange">✓</span>
                  Architecture recommendation
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-orange">✓</span>
                  Implementation roadmap and timeline
                </div>
              </div>
            </div>
            <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8">
              <h3 className="font-heading font-bold text-xl text-white mb-1">Multi-Agent Consultation</h3>
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
            <a href="/guides/building-ai-agent-team" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">Building an AI Agent Team</h3>
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
            <a href="/guides/ai-agents-roi-guide" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">AI Agent ROI Guide</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
