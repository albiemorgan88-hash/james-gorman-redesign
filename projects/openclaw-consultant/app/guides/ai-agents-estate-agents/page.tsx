import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "AI Agents for Estate Agents UK",
  description: "How AI agents can automate property descriptions, lead qualification, market analysis, and client communications for UK estate agents. Boost productivity and win more instructions.",
  keywords: [
    "ai agents estate agents",
    "property ai automation",
    "estate agent ai tools",
    "property automation uk", 
    "ai property descriptions",
    "estate agent automation",
    "property ai assistant",
    "real estate ai uk"
  ],
  alternates: { canonical: "https://openclawconsultant.co.uk/guides/ai-agents-estate-agents" },
  openGraph: {
    title: "AI Agents for Estate Agents UK",
    description: "How AI agents can automate property descriptions, lead qualification, market analysis, and client communications for UK estate agents.",
    url: "https://openclawconsultant.co.uk/guides/ai-agents-estate-agents",
    type: "article",
  },
};

const automationAreas = [
  {
    area: "Property Descriptions",
    timeSpent: "2-3 hours per property",
    timeSaved: "90% faster",
    automations: [
      "Automated descriptions from property features and photos",
      "SEO-optimized property titles and summaries", 
      "Compliance checking for property particulars",
      "Multi-platform formatting for Rightmove, Zoopla, etc."
    ],
    roi: "Save 15+ hours per week on property marketing"
  },
  {
    area: "Lead Qualification",
    timeSpent: "30-45 minutes per enquiry",
    timeSaved: "80% faster initial qualification",
    automations: [
      "Automated lead scoring from enquiry details",
      "Pre-qualification questions via email/SMS",
      "Financial capability assessment",
      "Automatic CRM updates with lead status"
    ],
    roi: "Focus time on highest-value prospects only"
  },
  {
    area: "Market Analysis",
    timeSpent: "2-4 hours per valuation",
    timeSaved: "70% faster comparable research",
    automations: [
      "Automated comparable property research",
      "Market trend analysis and reporting",
      "Price per square foot calculations",
      "Valuation report generation"
    ],
    roi: "Complete more valuations with same resource"
  },
  {
    area: "Client Communications",
    timeSpent: "10+ hours per week",
    timeSaved: "60% reduction in admin time",
    automations: [
      "Automated viewing confirmations and reminders",
      "Progress updates to vendors and buyers",
      "Chain progression communications",
      "Completion and key handover coordination"
    ],
    roi: "Better client service with less manual effort"
  }
];

const specificUseCases = [
  {
    useCase: "Automated Property Descriptions",
    challenge: "Writing compelling, accurate descriptions for every property takes hours and often lacks SEO optimization",
    solution: "AI agent analyzes property photos, floor plans, and features to generate optimized descriptions",
    implementation: "Connect agent to your property management system. Upload photos and basic details, get professional descriptions in minutes.",
    results: ["90% time reduction", "Better SEO rankings", "Consistent quality", "Compliance checking included"]
  },
  {
    useCase: "Lead Response & Qualification",
    challenge: "Responding quickly to enquiries while qualifying serious buyers from time-wasters",
    solution: "AI agent handles initial responses, asks qualifying questions, and scores leads by likelihood to proceed",
    implementation: "Integrate with your website contact forms and Rightmove/Zoopla enquiries. Agent responds within minutes with qualification sequence.",
    results: ["Sub-5 minute response times", "Higher qualified lead percentage", "Better conversion rates", "CRM automatically updated"]
  },
  {
    useCase: "Market Analysis & Valuations",
    challenge: "Researching comparable sales and rental values for accurate valuations takes significant time",
    solution: "AI agent monitors sold prices, rental values, and market trends to provide instant comparable analysis",
    implementation: "Connect to Land Registry data and local property databases. Agent provides analysis reports within minutes of property details.",
    results: ["Faster valuation preparation", "More accurate pricing", "Data-driven insights", "Professional reports generated"]
  },
  {
    useCase: "Client Communication Management",
    challenge: "Keeping all parties updated throughout sales/lettings process while managing multiple chains",
    solution: "AI agent tracks progress milestones and automatically updates all parties with relevant information",
    implementation: "Integrate with your case management system. Agent monitors progress and sends appropriate updates to vendors, buyers, solicitors.",
    results: ["Proactive client updates", "Reduced complaints", "Better chain management", "Higher client satisfaction"]
  }
];

const implementationPlan = [
  {
    phase: "Phase 1: Property Marketing (Week 1-2)",
    focus: "Automate property descriptions and listing optimization",
    deliverables: [
      "Automated property description generation",
      "SEO optimization for online portals",
      "Multi-platform formatting",
      "Image analysis integration"
    ],
    impact: "Save 15+ hours per week on property marketing"
  },
  {
    phase: "Phase 2: Lead Management (Week 3-4)", 
    focus: "Automate lead qualification and initial responses",
    deliverables: [
      "Automated enquiry responses",
      "Lead qualification workflows",
      "CRM integration and scoring",
      "Follow-up sequences"
    ],
    impact: "Respond to all leads within 5 minutes, focus on qualified prospects"
  },
  {
    phase: "Phase 3: Market Intelligence (Week 5-6)",
    focus: "Automate market analysis and valuation support",
    deliverables: [
      "Comparable property analysis",
      "Market trend monitoring",
      "Valuation report generation",
      "Price recommendation engine"
    ],
    impact: "Complete valuations 70% faster with data-driven insights"
  },
  {
    phase: "Phase 4: Client Communications (Week 7-8)",
    focus: "Automate client updates and progress tracking",
    deliverables: [
      "Progress milestone tracking",
      "Automated client updates",
      "Chain progression monitoring",
      "Completion coordination"
    ],
    impact: "Proactive communication, higher client satisfaction"
  }
];

const toolIntegrations = [
  {
    category: "Property Portals",
    tools: ["Rightmove", "Zoopla", "OnTheMarket", "PrimeLocation"],
    integrations: "Automated listing uploads, description optimization, performance tracking"
  },
  {
    category: "CRM Systems",
    tools: ["Estate Master", "Jupix", "Reapit", "AgentOS", "PropertyFile"],
    integrations: "Lead scoring, automated follow-ups, progress tracking, client communications"
  },
  {
    category: "Communication",
    tools: ["Email", "SMS gateways", "WhatsApp Business", "Video messaging"],
    integrations: "Automated responses, viewing confirmations, progress updates, marketing campaigns"
  },
  {
    category: "Data Sources",
    tools: ["Land Registry", "Rightmove Analytics", "Local authority data", "Census data"],
    integrations: "Market analysis, comparable research, demographic insights, trend monitoring"
  }
];

export default function AIAgentsEstateAgentsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient relative overflow-hidden min-h-[70vh] flex items-center grain">
        <div className="absolute top-20 right-[10%] w-[400px] h-[400px] bg-orange/5 rounded-full blur-[120px] glow-pulse" />
        <div className="absolute bottom-20 left-[5%] w-[300px] h-[300px] bg-blue/10 rounded-full blur-[100px] glow-pulse" style={{ animationDelay: "3s" }} />

        <div className="max-w-[1140px] mx-auto px-6 relative z-10 py-20">
          <div className="max-w-[720px]">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-white/60 text-sm font-medium">AI Automation for Property Professionals</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl md:text-[3.2rem] font-extrabold text-white mb-6 leading-[1.05] tracking-tight">
              AI Agents for
              <br />
              <span className="text-orange">Estate Agents</span>
            </h1>

            <p className="text-white/60 text-lg md:text-xl max-w-[540px] mb-10 leading-relaxed">
              Automate property descriptions, lead qualification, market analysis, and client communications. Win more instructions with less admin work.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#automations"
                className="inline-flex items-center justify-center bg-orange text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-orange-hover transition-all hover:-translate-y-0.5 shadow-glow-orange"
              >
                See Property Automations
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

      {/* Time Savings Overview */}
      <section id="automations" className="bg-light py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Where Estate Agents Save the Most Time
            </h2>
            <p className="text-muted text-lg max-w-[600px] mx-auto">
              Four key areas where AI agents deliver immediate productivity gains for property professionals.
            </p>
          </div>

          <div className="space-y-8">
            {automationAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-card">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
                  <div>
                    <h3 className="font-heading font-bold text-xl text-dark mb-3">{area.area}</h3>
                    <div className="space-y-2 text-sm">
                      <div className="text-red-500">Currently: {area.timeSpent}</div>
                      <div className="text-green-600 font-semibold">With AI: {area.timeSaved}</div>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-2">
                    <h4 className="font-semibold text-dark mb-3">Automations Available:</h4>
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
                    <h4 className="font-semibold text-dark mb-3">Business Impact:</h4>
                    <p className="text-orange font-medium text-sm">{area.roi}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specific Use Cases */}
      <section className="bg-white py-28">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Real Estate AI Use Cases
            </h2>
            <p className="text-muted text-lg max-w-[600px] mx-auto">
              Detailed examples of how AI agents solve common estate agency challenges.
            </p>
          </div>

          <div className="space-y-12">
            {specificUseCases.map((useCase, index) => (
              <div key={index} className="bg-surface rounded-2xl p-8">
                <h3 className="font-heading font-bold text-2xl text-dark mb-6">{useCase.useCase}</h3>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6">
                  <div>
                    <h4 className="font-semibold text-red-600 mb-3">The Challenge:</h4>
                    <p className="text-muted text-sm leading-relaxed mb-6">{useCase.challenge}</p>
                    
                    <h4 className="font-semibold text-green-600 mb-3">AI Solution:</h4>
                    <p className="text-muted text-sm leading-relaxed">{useCase.solution}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-blue mb-3">Implementation:</h4>
                    <p className="text-muted text-sm leading-relaxed mb-6">{useCase.implementation}</p>
                    
                    <h4 className="font-semibold text-orange mb-3">Expected Results:</h4>
                    <ul className="space-y-2">
                      {useCase.results.map((result, i) => (
                        <li key={i} className="text-sm text-orange flex gap-2 items-start">
                          <span className="flex-shrink-0">▸</span>
                          {result}
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

      {/* Implementation Plan */}
      <section className="bg-navy text-white py-24 relative overflow-hidden grain">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue/5 rounded-full blur-[150px]" />

        <div className="max-w-[1140px] mx-auto px-6 relative z-10">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              8-Week Estate Agency AI Implementation
            </h2>
            <p className="text-white/60 text-lg max-w-[600px] mx-auto">
              Phased approach to implementing AI automation across your property business.
            </p>
          </div>

          <div className="space-y-6">
            {implementationPlan.map((phase, index) => (
              <div key={index} className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-orange text-white font-bold text-lg w-8 h-8 rounded-full flex items-center justify-center text-sm">
                        {index + 1}
                      </div>
                      <h3 className="font-heading font-bold text-lg text-white">{phase.phase}</h3>
                    </div>
                    <p className="text-white/60 text-sm">{phase.focus}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-white/80 font-semibold text-sm mb-3">Deliverables:</h4>
                    <ul className="space-y-2">
                      {phase.deliverables.map((deliverable, i) => (
                        <li key={i} className="text-white/60 text-sm flex gap-2 items-start">
                          <span className="text-orange mt-0.5 flex-shrink-0">•</span>
                          {deliverable}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-white/80 font-semibold text-sm mb-3">Impact:</h4>
                    <p className="text-orange text-sm font-medium">{phase.impact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tool Integrations */}
      <section className="bg-surface py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Estate Agency Tool Integrations
            </h2>
            <p className="text-muted text-lg max-w-[600px] mx-auto">
              AI agents integrate with your existing property software and platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {toolIntegrations.map((category) => (
              <div key={category.category} className="bg-white rounded-2xl p-8 shadow-card">
                <h3 className="font-heading font-bold text-xl text-dark mb-6">{category.category}</h3>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-dark mb-3">Supported Tools:</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.tools.map((tool) => (
                      <span
                        key={tool}
                        className="text-xs px-3 py-1 rounded bg-surface text-muted-dark"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-dark mb-3">Integration Capabilities:</h4>
                  <p className="text-muted text-sm">{category.integrations}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-28">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark">
              Estate Agent AI Questions
            </h2>
          </div>
          
          <div className="space-y-0">
            {[
              {
                q: "Can AI agents write property descriptions that don't sound robotic?",
                a: "Modern AI creates compelling, natural-sounding descriptions that often outperform human-written ones for engagement. The key is training the AI on your brand voice and local market terminology. Most agents find AI descriptions actually convert better than their manual efforts."
              },
              {
                q: "How does AI lead qualification actually work in practice?",
                a: "AI agents automatically respond to enquiries with intelligent follow-up questions that determine buyer readiness, financial position, and timeline. They score leads based on responses and only pass qualified prospects to agents, saving hours of admin time daily."
              },
              {
                q: "Will using AI for property descriptions affect SEO rankings?",
                a: "AI-generated descriptions often perform better for SEO because they're optimized for relevant keywords and search intent. The content is original, engaging, and follows SEO best practices consistently — something that's hard to maintain with manual writing."
              },
              {
                q: "Can AI integrate with existing property management software?",
                a: "Yes, AI agents can integrate with most popular property management systems like Estate Master, Jupix, and Reapit. They can read property data, generate descriptions, update CRM records, and manage communications — all automatically."
              },
              {
                q: "What about compliance and accuracy for property descriptions?",
                a: "AI agents can be trained on property description compliance requirements and will flag potential issues before publication. They're often more consistent at following compliance rules than human writers who might forget details under time pressure."
              },
              {
                q: "How much time can estate agents realistically save with AI?",
                a: "Typical agents save 15-25 hours per week on administrative tasks like descriptions, lead qualification, and client communications. This time can be reinvested in valuations, viewings, and business development activities."
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
            Ready to Automate Your Property Business?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-[600px] mx-auto">
            Free consultation to identify your highest-impact automation opportunities and calculate potential time savings for your agency.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-navy text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-dark transition-all hover:-translate-y-0.5 shadow-xl"
          >
            Get Estate Agent AI Consultation →
          </a>
        </div>
      </section>

      {/* Contact Section */}
      
      {/* Related Guides */}
      <section className="py-16 bg-surface">
        <div className="max-w-[1140px] mx-auto px-6">
          <h2 className="font-heading text-2xl font-bold text-navy mb-8 text-center">Related Guides</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-[800px] mx-auto">
            <a href="/guides/ai-agents-accountants" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">AI Agents for Accountants UK</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/ai-agents-charities" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">AI Agents for Charities UK</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/what-is-openclaw-2026" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">What is OpenClaw? Complete Guide 2026</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/openclaw-setup-mac" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">OpenClaw Setup Guide for Mac 2026</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-navy text-white py-24 relative overflow-hidden grain">
        <div className="absolute bottom-0 left-[20%] w-[500px] h-[500px] bg-orange/5 rounded-full blur-[120px]" />
        <div className="absolute top-0 right-[10%] w-[400px] h-[400px] bg-blue/5 rounded-full blur-[100px]" />

        <div className="max-w-[1140px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-orange font-heading font-semibold text-sm uppercase tracking-widest mb-4">
                Property Automation
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Transform Your Estate
                <br />
                <span className="text-orange">Agency with AI</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Free consultation to assess your current property workflows and identify where AI automation can save you 15+ hours per week while improving client service.
              </p>
              
              <div className="space-y-4 text-white/50 text-sm">
                <div className="flex gap-3 items-center">
                  <span className="text-orange">🏠</span>
                  <span>Property-specific automation assessment</span>
                </div>
                <div className="flex gap-3 items-center">
                  <span className="text-orange">⏱️</span>
                  <span>Time savings calculation for your agency</span>
                </div>
                <div className="flex gap-3 items-center">
                  <span className="text-orange">📈</span>
                  <span>ROI projections and implementation plan</span>
                </div>
              </div>
            </div>

            <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8">
              <h3 className="font-heading font-bold text-xl text-white mb-1">Estate Agent AI Consultation</h3>
              <p className="text-white/40 text-sm mb-6">Tell us about your property business and automation needs</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}