import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { ServiceBreadcrumb, ServiceSeo } from "@/components/ServiceSeo";

export const metadata: Metadata = {
  title: "AI Agent Consulting UK",
  description: "AI agent consulting for UK businesses that need practical workflow audits, implementation planning, OpenClaw architecture, and safer rollout support.",
  keywords: [
    "ai agent consulting uk",
    "ai automation consultant", 
    "ai agent strategy",
    "ai implementation consultant",
    "business ai consultant", 
    "ai workflow automation",
    "ai agent development", 
    "ai consultant northern ireland"
  ],
  alternates: { canonical: "https://openclawconsultant.co.uk/services/ai-agent-consulting" },
  openGraph: {
    title: "AI Agent Consulting UK", 
    description: "Practical AI agent consulting for workflow audits, implementation planning, OpenClaw architecture, and safer rollout support.",
    url: "https://openclawconsultant.co.uk/services/ai-agent-consulting",
    type: "website",
  },
};

const consultingAreas = [
  {
    icon: "🎯",
    title: "AI Strategy Development",
    desc: "Identify high-impact AI opportunities in your business. Create actionable roadmaps with clear value models.",
    benefits: ["Process audit & opportunity mapping", "Value analysis & business case", "Implementation timeline", "Risk assessment"]
  },
  {
    icon: "🤖",
    title: "Agent Architecture Design", 
    desc: "Design multi-agent systems with clear responsibilities, review points, and operating boundaries. Memory management, skill orchestration, and workflow automation.",
    benefits: ["Multi-agent workflow design", "Memory & context management", "Skill development planning", "Integration architecture"]
  },
  {
    icon: "⚙️", 
    title: "Implementation Planning",
    desc: "End-to-end implementation roadmaps with technical specifications, resource requirements, and success metrics.",
    benefits: ["Technical specifications", "Resource & timeline planning", "Success metrics definition", "Change management"]
  },
  {
    icon: "🔄",
    title: "Workflow Automation",
    desc: "Automate complex business processes with intelligent agents. From lead generation to customer service to content creation.",
    benefits: ["Process automation design", "Tool integration planning", "Quality assurance frameworks", "Performance monitoring"]
  }
];

const industries = [
  {
    industry: "Professional Services",
    useCases: ["Client onboarding automation", "Document processing", "Appointment scheduling", "Report generation"],
    savings: "High-repeat admin and reporting time"
  },
  {
    industry: "E-commerce & Retail", 
    useCases: ["Customer service automation", "Inventory management", "Price monitoring", "Content creation"],
    savings: "Support, catalogue and follow-up time"
  },
  {
    industry: "Marketing Agencies",
    useCases: ["Campaign management", "Content creation pipelines", "Client reporting", "SEO automation"],
    savings: "Campaign, reporting and content ops time"
  },
  {
    industry: "Property & Real Estate",
    useCases: ["Lead qualification", "Market analysis", "Property descriptions", "Client communication"],
    savings: "Lead, listing and communication time"
  },
  {
    industry: "Financial Services", 
    useCases: ["Compliance monitoring", "Report automation", "Client communications", "Data analysis"],
    savings: "Reporting, compliance and analysis time"
  },
  {
    industry: "Healthcare & Wellness",
    useCases: ["Appointment management", "Patient communications", "Documentation", "Compliance tracking"],
    savings: "Booking, documentation and admin time"
  }
];

const processSteps = [
  {
    phase: "Discovery",
    duration: "1-2 weeks",
    activities: ["Business process audit", "Technology stack review", "Opportunity identification", "Value analysis"]
  },
  {
    phase: "Strategy", 
    duration: "1 week",
    activities: ["AI strategy development", "Implementation roadmap", "Resource planning", "Success metrics"]
  },
  {
    phase: "Design",
    duration: "1-2 weeks", 
    activities: ["Agent architecture design", "Workflow mapping", "Integration planning", "Technical specifications"]
  },
  {
    phase: "Implementation",
    duration: "2-8 weeks",
    activities: ["Agent development", "System integration", "Testing & QA", "Training & handover"]
  }
];

const intentLinks = [
  {
    title: "Need OpenClaw-specific consultant guidance?",
    body: "Use the OpenClaw consultant guide if you are comparing setup, implementation, audit, and support options before buying.",
    href: "/guides/openclaw-consultant-uk",
    label: "Read consultant guide",
  },
  {
    title: "Already choosing a first workflow?",
    body: "Use the implementation guide when the question is how to move from idea to a controlled pilot or live workflow.",
    href: "/guides/openclaw-implementation-consultant-uk",
    label: "Read implementation guide",
  },
];

export default function AIAgentConsultingPage() {
  return (
    <>
      <ServiceSeo
        name="AI Agent Consulting UK"
        description="AI agent consulting for UK businesses, covering workflow audits, implementation planning, OpenClaw architecture, and safe rollout support."
        path="/services/ai-agent-consulting"
        serviceType="AI agent consulting and OpenClaw implementation planning"
      />

      {/* Hero Section */}
      <section className="hero-gradient relative overflow-hidden min-h-[70vh] flex items-center grain">
        <div className="absolute top-20 right-[10%] w-[400px] h-[400px] bg-orange/5 rounded-full blur-[120px] glow-pulse" />
        <div className="absolute bottom-20 left-[5%] w-[300px] h-[300px] bg-blue/10 rounded-full blur-[100px] glow-pulse" style={{ animationDelay: "3s" }} />

        <div className="max-w-[1140px] mx-auto px-6 relative z-10 py-20">
          <div className="max-w-[720px]">
            <ServiceBreadcrumb current="AI Agent Consulting UK" />
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-white/60 text-sm font-medium">Strategic AI Agent Consulting</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl md:text-[3.2rem] font-extrabold text-white mb-6 leading-[1.05] tracking-tight">
              AI Agent Consulting
              <br />
              <span className="text-orange">for UK Businesses</span>
            </h1>

            <p className="text-white/60 text-lg md:text-xl max-w-[540px] mb-10 leading-relaxed">
              Practical AI agent strategy for teams that need a clear first workflow, sensible guardrails, and a rollout plan they can actually operate.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-orange text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-orange-hover transition-all hover:-translate-y-0.5 shadow-glow-orange"
              >
                Book Strategy Session
              </a>
              <a
                href="/"
                className="inline-flex items-center justify-center bg-white/5 text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-white/10 transition-all border border-white/10"
              >
                ← Back to Home
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#fafbfc] to-transparent" />
      </section>

      <section className="bg-white py-16">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {intentLinks.map((link) => (
              <div key={link.href} className="rounded-2xl border border-border bg-surface p-7">
                <h2 className="font-heading text-2xl font-bold text-dark">{link.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-dark">{link.body}</p>
                <a href={link.href} className="mt-5 inline-flex text-sm font-semibold text-orange hover:text-orange-hover">
                  {link.label} →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="bg-light py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="max-w-[800px] mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-6">
              Many Businesses Still Need a Clear Agent Use Case
            </h2>
            <p className="text-muted text-lg leading-relaxed mb-12">
              Most teams have repetitive work that could be improved, but the hard part is choosing the right first workflow, protecting approvals, and turning interest in AI into something useful enough to measure.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-card">
                <div className="text-2xl mb-3">📊</div>
                <h3 className="font-heading font-bold text-dark mb-2">Manual Processes</h3>
                <p className="text-muted text-sm">Repetitive tasks taking attention away from sales, delivery, service quality, and higher-value decisions.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-card">
                <div className="text-2xl mb-3">💡</div>
                <h3 className="font-heading font-bold text-dark mb-2">Unclear Strategy</h3>
                <p className="text-muted text-sm">No clear plan for which AI tools to use or how to integrate them effectively.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-card">
                <div className="text-2xl mb-3">⚡</div>
                <h3 className="font-heading font-bold text-dark mb-2">Implementation Gaps</h3>
                <p className="text-muted text-sm">AI projects that start with enthusiasm but fail to deliver real business value.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consulting Services */}
      <section className="bg-white py-28">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-orange font-heading font-semibold text-sm uppercase tracking-widest mb-4">
              Consulting Services
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Strategic AI Agent Implementation
            </h2>
            <p className="text-muted text-lg max-w-[600px] mx-auto">
              From strategy development to rollout planning. We help UK businesses design AI agent workflows that are scoped, reviewable, and tied to a practical business measure.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {consultingAreas.map((area) => (
              <div key={area.title} className="bg-surface rounded-2xl p-8 card-lift">
                <div className="flex gap-4 items-start mb-6">
                  <div className="text-3xl">{area.icon}</div>
                  <div>
                    <h3 className="font-heading font-bold text-xl text-dark mb-2">{area.title}</h3>
                    <p className="text-muted leading-relaxed">{area.desc}</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-dark mb-3">Key Deliverables:</h4>
                  <ul className="space-y-2">
                    {area.benefits.map((benefit) => (
                      <li key={benefit} className="flex gap-2 items-start text-sm text-muted-dark">
                        <span className="text-orange mt-0.5 flex-shrink-0">▸</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Applications */}
      <section className="bg-navy text-white py-24 relative overflow-hidden grain">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue/5 rounded-full blur-[150px]" />

        <div className="max-w-[1140px] mx-auto px-6 relative z-10">
          <div className="text-center mb-14">
            <p className="text-orange font-heading font-semibold text-sm uppercase tracking-widest mb-4">
              Industry Applications
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              AI Agents Across Industries
            </h2>
            <p className="text-white/60 text-lg max-w-[600px] mx-auto">
              Common automation opportunities for UK businesses across different sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry) => (
              <div key={industry.industry} className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6">
                <h3 className="font-heading font-bold text-lg text-white mb-3">{industry.industry}</h3>
                <div className="space-y-2 mb-4">
                  {industry.useCases.map((useCase) => (
                    <div key={useCase} className="flex gap-2 items-start text-sm text-white/70">
                      <span className="text-orange mt-0.5 flex-shrink-0">•</span>
                      {useCase}
                    </div>
                  ))}
                </div>
                <div className="text-orange text-sm font-semibold">
                  Typical savings: {industry.savings}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consulting Process */}
      <section className="bg-surface py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-orange font-heading font-semibold text-sm uppercase tracking-widest mb-4">
              Our Process
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              From Strategy to Implementation
            </h2>
            <p className="text-muted text-lg max-w-[600px] mx-auto">
              A structured approach for turning an agent idea into scoped workflow evidence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-card relative">
                <div className="absolute -top-3 -left-3 bg-orange text-white font-bold text-lg w-8 h-8 rounded-full flex items-center justify-center text-sm">
                  {index + 1}
                </div>
                <h3 className="font-heading font-bold text-lg text-dark mb-2 mt-2">{step.phase}</h3>
                <p className="text-orange text-sm font-medium mb-4">{step.duration}</p>
                <ul className="space-y-2">
                  {step.activities.map((activity) => (
                    <li key={activity} className="text-muted text-sm flex gap-2 items-start">
                      <span className="text-orange mt-0.5 flex-shrink-0 text-xs">•</span>
                      {activity}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Preview */}
      <section className="bg-white py-28">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="bg-surface rounded-2xl p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-orange font-heading font-semibold text-sm uppercase tracking-widest mb-4">
                  Case Study
                </p>
                <h2 className="font-heading text-3xl font-bold text-dark mb-6">
                  How Blue Canvas Uses AI Agents
                </h2>
                <p className="text-muted leading-relaxed mb-6">
                  We use OpenClaw-style agent workflows in our own operations, so the advice is grounded in day-to-day automation practice rather than abstract AI strategy.
                </p>
                
                <div className="space-y-4">
                  <div className="flex gap-3 items-start">
                    <span className="text-orange mt-1 flex-shrink-0">▸</span>
                    <div>
                      <p className="font-semibold text-dark">Daily SEO Operations</p>
                      <p className="text-muted text-sm">Structured audits, keyword tracking, content planning, and competitor monitoring across live SEO projects.</p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <span className="text-orange mt-1 flex-shrink-0">▸</span>
                    <div>
                      <p className="font-semibold text-dark">Lead Generation Pipelines</p>
                      <p className="text-muted text-sm">Lead-source review, enrichment workflows, CRM handoff planning, and outreach preparation with human approval gates.</p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <span className="text-orange mt-1 flex-shrink-0">▸</span>
                    <div>
                      <p className="font-semibold text-dark">Content & Deployment</p>
                      <p className="text-muted text-sm">LinkedIn content calendars, blog posts, client showcases, and automated deployments to Vercel — all agent-managed.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-navy text-white rounded-2xl p-8">
                <h3 className="font-heading font-bold text-xl mb-6">Operating Signals</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-3xl font-bold text-orange mb-1">Daily</div>
                    <div className="text-white/60 text-sm">Agent Workflows</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-orange mb-1">Live</div>
                    <div className="text-white/60 text-sm">SEO Systems</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-orange mb-1">Review</div>
                    <div className="text-white/60 text-sm">Approval Gates</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-orange mb-1">Logs</div>
                    <div className="text-white/60 text-sm">Operational Evidence</div>
                  </div>
                </div>
                
                <div className="border-t border-white/10 mt-6 pt-6">
                  <p className="text-white/70 text-sm italic">
                    &quot;The best agent workflows are boring in the right way: logged, reviewable, and useful every week.&quot;
                  </p>
                  <p className="text-orange text-sm font-semibold mt-2">— Blue Canvas AI</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-light py-24">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-orange font-heading font-semibold text-sm uppercase tracking-widest mb-4">
              FAQ
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark">
              AI Agent Consulting Questions
            </h2>
          </div>
          
          <div className="space-y-0">
            {[
              {
                q: "How long does an AI agent consulting project take?",
                a: "Discovery and strategy typically take 2-3 weeks. Implementation can range from 2-8 weeks depending on complexity. Simple single-agent deployments are faster; multi-agent orchestration systems take longer. We&apos;ll give you a clear timeline after the initial assessment."
              },
              {
                q: "What&apos;s the ROI of implementing AI agents?",
                a: "ROI depends on the workflow, volume, error rate, team cost, and approval requirements. The safest approach is to baseline the current process first, then model time saved, faster response, fewer missed handoffs, or cleaner records before implementation."
              },
              {
                q: "Do I need technical knowledge to benefit from AI agents?",
                a: "You do not need to be deeply technical day to day, but the business still needs a clear owner, review rules, and a basic understanding of what the agent is allowed to do. Training and handover are part of the consulting work."
              },
              {
                q: "Can AI agents integrate with our existing systems?",
                a: "Often, yes. The right answer depends on API access, authentication, permissions, data quality, and reliability requirements. Integration planning is included so the scope is clear before build work starts."
              },
              {
                q: "What makes your AI agent consulting different?",
                a: "We work from hands-on OpenClaw and agent workflow experience, including live SEO, research, content, and operational processes. The consulting focuses on practical workflows, approval gates, logs, and rollout discipline rather than generic AI enthusiasm."
              },
              {
                q: "Is this suitable for small UK businesses?",
                a: "It can be, especially when the business already uses digital tools and has repetitive processes with enough volume to justify the setup. Process maturity matters more than company size."
              }
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

      {/* CTA Section */}
      <section className="bg-orange py-16">
        <div className="max-w-[900px] mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-white mb-4">
            Ready to Assess Where AI Agents Fit?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-[600px] mx-auto">
            Book a strategy session to identify the best candidate workflows and get a clear implementation roadmap.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-navy text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-dark transition-all hover:-translate-y-0.5 shadow-xl"
          >
            Book Strategy Session →
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-navy text-white py-24 relative overflow-hidden grain">
        <div className="absolute bottom-0 left-[20%] w-[500px] h-[500px] bg-orange/5 rounded-full blur-[120px]" />
        <div className="absolute top-0 right-[10%] w-[400px] h-[400px] bg-blue/5 rounded-full blur-[100px]" />

        <div className="max-w-[1140px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-orange font-heading font-semibold text-sm uppercase tracking-widest mb-4">
                Let&apos;s Talk Strategy
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Book Your AI Agent
                <br />
                <span className="text-orange">Strategy Session</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Free 45-minute strategy session to identify your AI opportunities, map implementation priorities, and create a clear roadmap. No sales pitch — just honest strategic advice.
              </p>
              
              <div className="space-y-4 text-white/50 text-sm">
                <div className="flex gap-3 items-center">
                  <span className="text-orange">🎯</span>
                  <span>Identify high-impact automation opportunities</span>
                </div>
                <div className="flex gap-3 items-center">
                  <span className="text-orange">📊</span>
                  <span>Value model for your specific use cases</span>
                </div>
                <div className="flex gap-3 items-center">
                  <span className="text-orange">🗺️</span>
                  <span>Clear implementation roadmap and timeline</span>
                </div>
              </div>
            </div>

            <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8">
              <h3 className="font-heading font-bold text-xl text-white mb-1">Book Strategy Session</h3>
              <p className="text-white/40 text-sm mb-6">Tell us about your business and automation goals</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
