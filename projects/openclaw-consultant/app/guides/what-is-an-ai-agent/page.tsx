import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "What Is an AI Agent? Everything You Need to Know",
  description: "Simple explanation of what an AI agent is, how it differs from chatbots and traditional automation, and why businesses are adopting them. No technical jargon.",
  keywords: [
    "what is an ai agent",
    "ai agent definition",
    "ai agent meaning",
    "ai agent vs chatbot",
    "ai agent for business",
    "ai agents beginner guide",
    "ai agent explained simply",
    "artificial intelligence agent"
  ],
  alternates: { canonical: "https://openclawconsultant.co.uk/guides/what-is-an-ai-agent" },
  openGraph: {
    title: "What Is an AI Agent? Everything You Need to Know",
    description: "Simple explanation of what an AI agent is and why businesses are adopting them.",
    url: "https://openclawconsultant.co.uk/guides/what-is-an-ai-agent",
    type: "article",
  },
};

const comparisons = [
  {
    feature: "Can take independent action",
    chatbot: "❌ Only responds when asked",
    traditional: "❌ Follows fixed scripts",
    aiAgent: "✅ Plans and executes tasks autonomously"
  },
  {
    feature: "Handles unexpected inputs",
    chatbot: "⚠️ Falls back to 'I don't understand'",
    traditional: "❌ Breaks or stops",
    aiAgent: "✅ Adapts and finds alternatives"
  },
  {
    feature: "Connects to business systems",
    chatbot: "⚠️ Limited integrations",
    traditional: "✅ Pre-built connectors",
    aiAgent: "✅ Flexible API integration"
  },
  {
    feature: "Learns from outcomes",
    chatbot: "❌ Static responses",
    traditional: "❌ No learning capability",
    aiAgent: "✅ Improves over time"
  },
  {
    feature: "Multi-step task completion",
    chatbot: "❌ Single-turn responses",
    traditional: "⚠️ Linear sequences only",
    aiAgent: "✅ Complex, branching workflows"
  }
];

const realWorldExamples = [
  {
    scenario: "A customer emails asking about their order status",
    chatbotResponse: "A chatbot might reply: 'Please check your order status at [link]' — redirecting the customer to do the work themselves.",
    agentResponse: "An AI agent reads the email, looks up the order in your system, checks the courier tracking, and replies with the specific status — 'Your order #4521 was dispatched yesterday and is expected tomorrow by 2pm.'"
  },
  {
    scenario: "An invoice arrives with a different format than usual",
    traditionalResponse: "Traditional automation fails because the invoice doesn't match the expected template. It sits in an error queue until someone processes it manually.",
    agentResponse: "An AI agent reads the invoice, identifies the key information regardless of format, validates it against the purchase order, and processes it — flagging any discrepancies for human review."
  },
  {
    scenario: "A job application comes in for an open role",
    manualResponse: "An HR administrator reads the CV, compares it against the job spec, decides whether to shortlist, and sends an acknowledgement email. This takes 10-15 minutes per application.",
    agentResponse: "An AI agent reads the CV, scores it against the role requirements, adds it to the shortlist or sends a polite rejection, and updates the recruitment tracker — in under 30 seconds."
  }
];

const faqs = [
  {
    question: "Is an AI agent the same as a chatbot?",
    answer: "No. A chatbot responds to messages in a conversation. An AI agent takes independent action — it can research, make decisions, execute tasks, and report back without being prompted at every step. Think of a chatbot as a receptionist who answers questions, and an AI agent as a team member who completes tasks."
  },
  {
    question: "Do AI agents need the internet to work?",
    answer: "Not necessarily. AI agents can run entirely on your own infrastructure (self-hosted) or in the cloud. Self-hosted agents process everything locally — your data never leaves your network. Cloud-based agents use internet-connected AI services. The choice depends on your data sensitivity and infrastructure preferences."
  },
  {
    question: "Can AI agents make mistakes?",
    answer: "Yes. AI agents can make errors, especially with ambiguous or unusual inputs. This is why well-designed implementations include guardrails — confidence thresholds below which the agent asks a human, audit logging for all actions, and approval workflows for high-stakes decisions. The goal isn't perfection but better accuracy and speed than the manual alternative."
  },
  {
    question: "How much does an AI agent cost?",
    answer: "Simple AI agents can run for under £50/month. Business-grade agents handling significant workloads typically cost £100-500/month in running costs (hosting + API calls). Enterprise deployments can be more. Implementation (setup, integration, testing) is usually a one-off cost of £2,000-10,000. See our pricing page for specific packages."
  },
  {
    question: "Are AI agents safe for handling sensitive data?",
    answer: "Yes, when properly implemented. Self-hosted solutions keep all data on your infrastructure. Key safety measures include access controls (agents can only access what they need), audit logging, encryption, and GDPR-compliant data processing. Read our AI agent security guide for comprehensive coverage."
  },
  {
    question: "What's the difference between AI agents and RPA?",
    answer: "RPA (Robotic Process Automation) follows fixed rules — click here, copy that, paste there. AI agents understand context and make decisions. RPA breaks when a screen layout changes; an AI agent adapts. For a detailed comparison, see our guide on AI agents vs RPA."
  }
];

export default function WhatIsAnAIAgentPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient relative overflow-hidden min-h-[70vh] flex items-center grain">
        <div className="max-w-[1140px] mx-auto px-6 relative z-10 py-20">
          <div className="max-w-[720px]">
            <h1 className="font-heading text-4xl sm:text-5xl md:text-[3.2rem] font-extrabold text-white mb-6 leading-[1.05] tracking-tight">
              What Is an
              <br />
              <span className="text-orange">AI Agent?</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl max-w-[540px] mb-10 leading-relaxed">
              Everything you need to know about AI agents — what they are, how they work, and why they&apos;re the most important technology shift since the smartphone. No jargon, just clarity.
            </p>
            <a
              href="#definition"
              className="inline-flex items-center justify-center bg-orange text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-orange-hover transition-all hover:-translate-y-0.5 shadow-glow-orange"
            >
              Get the Answer
            </a>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#fafbfc] to-transparent" />
      </section>

      {/* Definition */}
      <section id="definition" className="bg-white py-28">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="max-w-[800px] mx-auto prose prose-lg text-muted">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-6 not-prose">
              The Simple Definition
            </h2>
            <p className="text-xl">
              <strong>An AI agent is software that can understand a goal, decide what steps to take, and then carry out those steps — without a human guiding every action.</strong>
            </p>
            <p>
              Think about asking a capable colleague to &ldquo;sort out the invoice backlog.&rdquo; You don&apos;t explain every click — they open the inbox, find the invoices, cross-reference purchase orders, process the straightforward ones, and flag anything unusual. That&apos;s what an AI agent does, digitally.
            </p>
            <p>
              The &ldquo;agent&rdquo; part is crucial. Unlike AI tools that wait for your input (like ChatGPT), an AI agent acts proactively. It perceives, decides, and executes. You set the goal; it figures out the path.
            </p>
            <p>
              For a deeper technical explanation, see our <a href="/guides/ai-agents-explained" className="text-orange hover:underline">AI Agents Explained</a> guide. For practical examples, check <a href="/guides/ai-agent-examples" className="text-orange hover:underline">AI Agent Examples</a>.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-light py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              AI Agent vs Chatbot vs Traditional Automation
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse min-w-[600px] bg-white rounded-2xl overflow-hidden shadow-card">
              <thead>
                <tr className="border-b-2 border-orange">
                  <th className="text-left py-4 px-6 text-dark font-bold">Capability</th>
                  <th className="text-center py-4 px-4 text-dark font-bold">Chatbot</th>
                  <th className="text-center py-4 px-4 text-dark font-bold">Traditional Automation</th>
                  <th className="text-center py-4 px-4 text-dark font-bold">AI Agent</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((row, index) => (
                  <tr key={index} className="border-b border-gray-100">
                    <td className="py-4 px-6 font-medium text-dark">{row.feature}</td>
                    <td className="text-center py-4 px-4 text-muted text-xs">{row.chatbot}</td>
                    <td className="text-center py-4 px-4 text-muted text-xs">{row.traditional}</td>
                    <td className="text-center py-4 px-4 text-muted text-xs">{row.aiAgent}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Real-World Examples */}
      <section className="bg-white py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              See the Difference in Action
            </h2>
          </div>

          <div className="space-y-8">
            {realWorldExamples.map((example, index) => (
              <div key={index} className="bg-surface rounded-2xl p-8">
                <h3 className="font-heading font-bold text-xl text-dark mb-6">Scenario: {example.scenario}</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="border-l-4 border-red-400 pl-4">
                    <h4 className="font-semibold text-red-600 mb-2">Without an AI Agent:</h4>
                    <p className="text-muted text-sm">{example.chatbotResponse || example.traditionalResponse || example.manualResponse}</p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold text-green-600 mb-2">With an AI Agent:</h4>
                    <p className="text-muted text-sm">{example.agentResponse}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Now */}
      <section className="bg-surface py-24">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="max-w-[800px] mx-auto prose prose-lg text-muted">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-6 not-prose">
              Why AI Agents Matter Now
            </h2>
            <p>
              AI agents aren&apos;t new as a concept — researchers have discussed them for decades. What&apos;s changed is that large language models (LLMs) like GPT-4 and Claude have given agents something they never had before: <strong>the ability to understand context and communicate naturally</strong>.
            </p>
            <p>
              Combined with platforms like <a href="/" className="text-orange hover:underline">OpenClaw</a> that orchestrate multiple agents working together, we&apos;re seeing the first truly useful AI agents deployed in real businesses.
            </p>
            <p>
              For UK businesses, the timing is particularly interesting. The UK government&apos;s pro-innovation approach to AI regulation means fewer barriers to adoption than in the EU. And with most <a href="/guides/ai-agent-use-cases" className="text-orange hover:underline">AI agent use cases</a> still at KD 0 (no competition), early movers have a massive advantage.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-28">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              What Is an AI Agent: FAQs
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
            Blue Canvas makes AI agents accessible to UK businesses. Through <a href="https://bluecanvas.ai" className="text-orange hover:underline">Blue Canvas</a>, Phil Patterson 
            helps organisations understand, evaluate, and deploy AI agents that deliver measurable business results.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-navy text-white py-24 relative overflow-hidden grain">
        <div className="max-w-[1140px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Curious About
                <br />
                <span className="text-orange">AI Agents for Your Business?</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Book a free, no-obligation consultation. We&apos;ll explain exactly what AI agents could do for your specific business — in plain English.
              </p>
              <div className="space-y-3 text-white/60">
                <div className="flex items-center gap-3">
                  <span className="text-orange">✓</span>
                  No jargon, no hard sell
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-orange">✓</span>
                  Specific examples for your business type
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-orange">✓</span>
                  Honest assessment of what&apos;s worth automating
                </div>
              </div>
            </div>
            <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8">
              <h3 className="font-heading font-bold text-xl text-white mb-1">Free AI Consultation</h3>
              <p className="text-white/60 text-sm mb-6">Understand what AI agents can do for your business</p>
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
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">AI Agents Explained: How They Work</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/ai-agent-examples" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">AI Agent Examples: 15 Use Cases</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/best-ai-agents-2026" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">Best AI Agents 2026</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
            <a href="/guides/ai-agent-vs-rpa" className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-border-light">
              <h3 className="font-heading text-lg font-bold text-navy group-hover:text-orange transition-colors">AI Agents vs RPA</h3>
              <span className="text-orange text-sm font-semibold mt-2 inline-block">Read Guide →</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
