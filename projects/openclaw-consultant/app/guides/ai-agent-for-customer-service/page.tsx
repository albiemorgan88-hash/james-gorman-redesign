import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "AI Agents for Customer Service: Beyond Basic Chatbots",
  description: "How AI agents transform customer service beyond basic chatbots. Intelligent ticket routing, proactive support, multilingual handling, and real ROI data for UK businesses.",
  keywords: [
    "ai agent for customer service",
    "ai customer service agent",
    "ai customer support",
    "ai chatbot vs agent customer service",
    "automated customer service uk",
    "ai help desk",
    "intelligent customer service",
    "ai support automation"
  ],
  alternates: { canonical: "https://openclawconsultant.co.uk/guides/ai-agent-for-customer-service" },
  openGraph: {
    title: "AI Agents for Customer Service: Beyond Basic Chatbots",
    description: "How AI agents transform customer service beyond basic chatbots. Real ROI data for UK businesses.",
    url: "https://openclawconsultant.co.uk/guides/ai-agent-for-customer-service",
    type: "article",
  },
};

const capabilities = [
  {
    name: "Intelligent Ticket Triage",
    description: "AI reads every incoming support request — email, chat, form submission, social media DM — understands the intent, urgency, and sentiment, then routes it to the right person with a suggested response.",
    oldWay: "Manual reading and forwarding, often by the most junior person on the team",
    improvement: "60% faster first response, 90% accurate routing"
  },
  {
    name: "Contextual Response Generation",
    description: "Instead of template-based replies, the agent generates responses tailored to the specific customer, their history, and the exact issue. It references previous conversations, order details, and account status.",
    oldWay: "Copy-paste from response templates with manual personalisation",
    improvement: "40% higher customer satisfaction scores"
  },
  {
    name: "Proactive Issue Detection",
    description: "Monitors customer behaviour for signs of frustration — repeated contacts, declining engagement, negative language — and triggers outreach before the customer churns.",
    oldWay: "Reactive — only handling issues when customers complain",
    improvement: "23% reduction in churn rate"
  },
  {
    name: "Multilingual Support",
    description: "Handles customer queries in 30+ languages without needing native speakers on staff. Detects language automatically, responds naturally, and provides full translation for escalated conversations.",
    oldWay: "Limited to languages your team speaks, or expensive translation services",
    improvement: "Serve global customers 24/7 without language barriers"
  },
  {
    name: "Knowledge Base Maintenance",
    description: "Identifies frequently asked questions that aren't covered in your help centre, drafts new articles, and flags outdated content based on how often customers still ask about resolved issues.",
    oldWay: "Knowledge base updates only happen when someone remembers to do them",
    improvement: "Self-improving help centre that reduces ticket volume over time"
  }
];

const vsComparison = [
  { feature: "Understands nuance and context", chatbot: "❌", aiAgent: "✅" },
  { feature: "Handles multi-step issues", chatbot: "❌", aiAgent: "✅" },
  { feature: "Takes actions in business systems", chatbot: "⚠️ Limited", aiAgent: "✅" },
  { feature: "Escalates intelligently", chatbot: "⚠️ Basic rules", aiAgent: "✅ Context-aware" },
  { feature: "Learns from resolved tickets", chatbot: "❌", aiAgent: "✅" },
  { feature: "Handles angry customers sensitively", chatbot: "❌", aiAgent: "✅ Sentiment detection" },
  { feature: "Works across email, chat, social", chatbot: "⚠️ Usually chat only", aiAgent: "✅ Omnichannel" },
];

const faqs = [
  {
    question: "Will customers know they're talking to an AI agent?",
    answer: "That's your choice. Many businesses are transparent about AI involvement, which actually increases trust. Others use AI for behind-the-scenes work (triage, drafting) while human agents send the actual responses. UK consumer protection law requires you to disclose AI involvement in sales decisions, but there's no blanket requirement to label all AI interactions."
  },
  {
    question: "Can AI agents handle complaints?",
    answer: "AI agents excel at the initial complaint acknowledgement, gathering relevant details, and routing to the right team member with full context. For resolution, most businesses keep humans in the loop — the agent handles the admin, the human handles the empathy and judgement. This combination typically resolves complaints 50% faster."
  },
  {
    question: "What happens when the AI agent can't answer something?",
    answer: "Good AI agent implementations have confidence thresholds. When the agent isn't sure about an answer (below a configurable threshold), it seamlessly hands off to a human with full conversation context. The customer shouldn't experience a jarring transition — it should feel like a colleague has stepped in."
  },
  {
    question: "How does this work with Zendesk/Freshdesk/Intercom?",
    answer: "AI agents integrate with all major helpdesk platforms through their APIs. The agent can read tickets, update statuses, add internal notes, and send responses through your existing platform. Your team continues using the tools they know — the AI agent just makes them more productive."
  },
  {
    question: "What's the ROI of AI customer service agents?",
    answer: "Typical UK businesses see: 60% reduction in first response time, 35% reduction in cost per ticket, 40% increase in first-contact resolution, and 25% improvement in CSAT scores. For a team handling 500 tickets/month, this translates to roughly £2,000-4,000/month in savings. Setup costs are typically recouped within 2-3 months."
  },
  {
    question: "Is it GDPR compliant to use AI for customer service?",
    answer: "Yes, with proper implementation. You need a lawful basis for processing (legitimate interest covers most customer service scenarios), data minimisation (the agent only accesses what it needs), and transparency (your privacy policy should mention AI-assisted processing). Self-hosted solutions simplify compliance by keeping all data on your infrastructure."
  }
];

export default function AIAgentForCustomerServicePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient relative overflow-hidden min-h-[70vh] flex items-center grain">
        <div className="max-w-[1140px] mx-auto px-6 relative z-10 py-20">
          <div className="max-w-[720px]">
            <h1 className="font-heading text-4xl sm:text-5xl md:text-[3.2rem] font-extrabold text-white mb-6 leading-[1.05] tracking-tight">
              AI Agents for
              <br />
              <span className="text-orange">Customer Service</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl max-w-[540px] mb-10 leading-relaxed">
              Beyond basic chatbots. AI agents that understand context, take action, and resolve issues — not just deflect them.
            </p>
            <a
              href="#capabilities"
              className="inline-flex items-center justify-center bg-orange text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-orange-hover transition-all hover:-translate-y-0.5 shadow-glow-orange"
            >
              See What&apos;s Possible
            </a>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#fafbfc] to-transparent" />
      </section>

      {/* Stats */}
      <section className="bg-white py-16">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-orange mb-2">60%</div>
              <div className="text-muted">Faster first response time</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange mb-2">35%</div>
              <div className="text-muted">Lower cost per ticket</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange mb-2">24/7</div>
              <div className="text-muted">Support without night shift costs</div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section id="capabilities" className="bg-light py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              What AI Customer Service Agents Can Do
            </h2>
          </div>

          <div className="space-y-8">
            {capabilities.map((cap, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-card">
                <h3 className="font-heading font-bold text-xl text-dark mb-4">{cap.name}</h3>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div>
                    <p className="text-muted text-sm">{cap.description}</p>
                  </div>
                  <div className="border-l-4 border-red-400 pl-4">
                    <h4 className="font-semibold text-red-600 mb-2">The Old Way:</h4>
                    <p className="text-muted text-sm">{cap.oldWay}</p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold text-green-600 mb-2">With AI Agents:</h4>
                    <p className="text-orange text-sm font-medium">{cap.improvement}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chatbot vs AI Agent */}
      <section className="bg-white py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Chatbot vs AI Agent: What&apos;s the Actual Difference?
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse min-w-[500px] bg-surface rounded-2xl overflow-hidden">
              <thead>
                <tr className="border-b-2 border-orange">
                  <th className="text-left py-4 px-6 text-dark font-bold">Capability</th>
                  <th className="text-center py-4 px-6 text-dark font-bold">Basic Chatbot</th>
                  <th className="text-center py-4 px-6 text-dark font-bold">AI Agent</th>
                </tr>
              </thead>
              <tbody>
                {vsComparison.map((row, index) => (
                  <tr key={index} className="border-b border-gray-100">
                    <td className="py-3 px-6 font-medium text-dark">{row.feature}</td>
                    <td className="text-center py-3 px-6 text-muted">{row.chatbot}</td>
                    <td className="text-center py-3 px-6 text-muted">{row.aiAgent}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Context */}
      <section className="bg-surface py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="max-w-[800px] mx-auto prose prose-lg text-muted">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-6 not-prose">
              The Customer Service Revolution
            </h2>
            <p>
              Customer expectations have shifted permanently. People expect instant responses, personalised service, and resolution without repeating themselves across channels. Traditional support teams can&apos;t scale to meet these expectations without AI.
            </p>
            <p>
              But the first wave of chatbots disappointed. They deflected more than they resolved, frustrated customers with rigid menus, and created more work for human agents who had to clean up failed interactions.
            </p>
            <p>
              AI agents are fundamentally different. They understand intent, remember context, take real actions in your business systems, and know when to hand off to a human. They don&apos;t just delay the customer — they actually solve problems.
            </p>
            <p>
              For businesses exploring AI agents for the first time, start with our <a href="/guides/what-is-an-ai-agent" className="text-orange hover:underline">What Is an AI Agent?</a> guide. For platform options, see our <a href="/guides/ai-agent-tools-comparison" className="text-orange hover:underline">AI Agent Tools Comparison</a>. And for a broader look at AI automation, check <a href="/guides/ai-automation-for-business-uk" className="text-orange hover:underline">AI Automation for Business UK</a>.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-28">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              AI Customer Service Agents: FAQs
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
            Blue Canvas deploys AI customer service agents for UK businesses. Through <a href="https://bluecanvas.ai" className="text-orange hover:underline">Blue Canvas</a>, Phil Patterson 
            helps companies move beyond basic chatbots to intelligent agents that genuinely improve customer satisfaction and reduce costs.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-navy text-white py-24 relative overflow-hidden grain">
        <div className="max-w-[1140px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Transform Your
                <br />
                <span className="text-orange">Customer Service</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Free consultation to assess your current support operation and show exactly how AI agents can improve response times, satisfaction, and costs.
              </p>
              <div className="space-y-3 text-white/60">
                <div className="flex items-center gap-3">
                  <span className="text-orange">✓</span>
                  Audit of your current support metrics
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-orange">✓</span>
                  Custom AI agent implementation plan
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-orange">✓</span>
                  ROI forecast with your real numbers
                </div>
              </div>
            </div>
            <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8">
              <h3 className="font-heading font-bold text-xl text-white mb-1">Customer Service AI Consultation</h3>
              <p className="text-white/60 text-sm mb-6">Upgrade your support with intelligent AI agents</p>
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
            <a href="/guides/ai-agent-for-sales" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">AI Agents for Sales</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/ai-agent-examples" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">AI Agent Examples</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/ai-agents-explained" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">AI Agents Explained</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/ai-agent-use-cases" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">AI Agent Use Cases by Industry</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
